import { chromium } from "playwright";
import { createServer } from "node:http";
import { readFileSync, existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join, extname } from "node:path";

const DIST = join(import.meta.dirname, "..", "dist");
const ROUTES = ["/", "/reymooy"];
const PORT = 4173;

const MIME = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".png": "image/png",
  ".ico": "image/x-icon",
  ".svg": "image/svg+xml",
  ".otf": "font/otf",
  ".woff2": "font/woff2",
  ".xml": "application/xml",
  ".txt": "text/plain",
};

const server = createServer((req, res) => {
  let filePath = join(DIST, req.url === "/" ? "index.html" : req.url);
  if (!existsSync(filePath)) filePath = join(DIST, "index.html");
  const ext = extname(filePath);
  res.setHeader("Content-Type", MIME[ext] ?? "application/octet-stream");
  res.end(readFileSync(filePath));
});

server.listen(PORT, async () => {
  console.log(`Server running on http://localhost:${PORT}`);

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1280, height: 720 } });

  for (const route of ROUTES) {
    const url = `http://localhost:${PORT}${route}`;
    const page = await context.newPage();
    await page.goto(url, { waitUntil: "networkidle" });
    await page.waitForTimeout(2000);

    const html = await page.content();
    const outDir = join(DIST, route === "/" ? "" : route.slice(1));
    if (outDir !== DIST) mkdirSync(outDir, { recursive: true });

    const outPath = join(outDir, "index.html");
    writeFileSync(outPath, html);
    console.log(`Prerendered ${route} → ${outPath}`);
    await page.close();
  }

  await browser.close();
  server.close();
  console.log("Done.");
});
