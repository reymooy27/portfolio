import { readFileSync } from "node:fs";
import { join } from "node:path";
import { defineConfig } from "vite";
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
        if (url === "/admin/config.yml" || url === "/api/admin-config") {
          res.setHeader("Content-Type", "text/yaml");
          res.end("local_backend: true\n" + config);
          return;
        }
        next();
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), adminPlugin()],
});
