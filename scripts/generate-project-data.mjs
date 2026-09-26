import { readdir, readFile, mkdir, writeFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const contentDir = join(root, "content", "projects");
const outputDir = join(root, "src", "generated");
const outputFile = join(outputDir, "projectData.ts");

function formatDate(dateStr) {
  if (!dateStr) return "";
  const d = new Date(dateStr + "T00:00:00Z");
  if (isNaN(d)) return "";
  return d.toLocaleDateString("en-US", { month: "long", year: "numeric", timeZone: "UTC" });
}

async function generate() {
  let files;
  try {
    files = await readdir(contentDir);
  } catch {
    files = [];
  }

  const items = [];
  for (const file of files) {
    if (!file.endsWith(".md")) continue;
    const raw = await readFile(join(contentDir, file), "utf-8");
    const { data } = matter(raw);
    items.push({
      id: 0,
      name: data.name ?? "",
      image: data.image ?? "",
      language: data.language ?? "",
      techStack: data.techStack ?? "",
      githubLink: data.githubLink ?? "",
     siteLink: data.siteLink ?? "",
      // YAML parses unquoted dates (e.g. `date: 2026-09-11`) as Date objects; normalize to ISO string
      date: data.date instanceof Date ? data.date.toISOString().slice(0, 10) : String(data.date ?? ""),
     description: data.description ?? "",
   });
  }

  items.sort((a, b) => {
    const da = String(a.date ?? "");
    const db = String(b.date ?? "");
    if (!da) return 1;
    if (!db) return -1;
    return db.localeCompare(da);
  });

  const data = items.map((item, i) => ({
    id: i + 1,
    name: item.name,
    image: item.image,
    language: item.language,
    techStack: item.techStack,
    githubLink: item.githubLink,
     siteLink: item.siteLink,
     date: item.date,
     description: item.description,
     datetime: formatDate(item.date),
   }));

  const code = `const data = ${JSON.stringify(data, null, 2)};

export { data };
`;

  await mkdir(outputDir, { recursive: true });
  await writeFile(outputFile, code);
  console.log(`Generated ${outputFile} (${data.length} projects)`);
}

generate().catch((err) => {
  console.error(err);
  process.exit(1);
});
