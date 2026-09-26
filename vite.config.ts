import { readFileSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";

function adminPlugin() {
  const adminDir = join(__dirname, "public", "admin");
  let html = "";
  let config = "";

  return {
    name: "admin-plugin",
    configResolved() {
      html = readFileSync(join(adminDir, "index.html"), "utf-8");
      config = readFileSync(join(adminDir, "config.yml"), "utf-8");
    },
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url ?? "";
        if (url === "/admin" || url === "/admin/") {
          res.setHeader("Content-Type", "text/html");
          res.end(html);
          return;
        }
        if (url === "/admin/config.yml") {
          res.setHeader("Content-Type", "text/yaml");
          res.end("local_backend: true\n" + config);
          return;
        }
        next();
      });
    },
  };
}

function activityPlugin() {
  // Dev-only shim: `vite dev` can't run Vercel functions, so serve /api/activity
  // locally with the real handler. Production uses api/activity.js directly.
  return {
    name: "activity-plugin",
    configResolved(config) {
      const env = loadEnv(config.mode, process.cwd(), "");
      if (env.GITHUB_TOKEN && !process.env.GITHUB_TOKEN) {
        process.env.GITHUB_TOKEN = env.GITHUB_TOKEN;
      }
    },
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if ((req.url ?? "").split("?")[0] !== "/api/activity") return next();
        const mod = await import(
          pathToFileURL(join(__dirname, "api", "activity.js")).href
        );
        await mod.default({ query: {} }, {
          setHeader: (k, v) => res.setHeader(k, v),
          end: (body) => res.end(body),
        });
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), adminPlugin(), activityPlugin()],
});
