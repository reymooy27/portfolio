import { readdir, readFile, mkdir, writeFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const contentDir = join(root, "content");
const outputDir = join(root, "src", "generated");
const outputFile = join(outputDir, "projectData.ts");

const COLLECTIONS = {
  projects: { dir: "projects", exportName: "data" },
  "another-projects": { dir: "another-projects", exportName: "anotherProject" },
};

async function readCollection(name) {
  const { dir } = COLLECTIONS[name];
  const folder = join(contentDir, dir);
  let files;
  try {
    files = await readdir(folder);
  } catch {
    return [];
  }

  const items = [];
  for (const file of files) {
    if (!file.endsWith(".md")) continue;
    const raw = await readFile(join(folder, file), "utf-8");
    const { data } = matter(raw);
    items.push(data);
  }
  return items;
}

async function generate() {
  const projects = await readCollection("projects");
  const anotherProjects = await readCollection("another-projects");

  const withIds = (items) =>
    items.map((item, i) => ({
      id: i + 1,
      name: item.name ?? "",
      image: item.image ?? "",
      language: item.language ?? "",
      techStack: item.techStack ?? "",
      githubLink: item.githubLink ?? "",
      siteLink: item.siteLink ?? "",
      datetime: item.datetime ?? "",
    }));

  const data = withIds(projects);
  const anotherProject = withIds(anotherProjects);

  const code = `const data = ${JSON.stringify(data, null, 2)};

const anotherProject = ${JSON.stringify(anotherProject, null, 2)};

export {
  data,
  anotherProject
};
`;

  await mkdir(outputDir, { recursive: true });
  await writeFile(outputFile, code);
  console.log(`Generated ${outputFile} (${data.length} projects, ${anotherProject.length} another projects)`);
}

generate().catch((err) => {
  console.error(err);
  process.exit(1);
});
