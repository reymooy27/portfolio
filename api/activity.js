// Static language -> color map (github-colors), avoids extra API calls.
// ponytail: langs outside this map render with a neutral dot; upgrade path = github/linguist colors json build step.
const COLORS = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  Go: "#00ADD8",
  HTML: "#e34c26",
  CSS: "#663399",
  Rust: "#dea584",
  Java: "#b07219",
  PHP: "#4F5D95",
  Shell: "#89e051",
  Dart: "#00B4AB",
  Kotlin: "#A97BFF",
  Vue: "#41B883",
  Svelte: "#ff3e00",
  C: "#555555",
  "C++": "#f34b7d",
  "C#": "#178600",
  Ruby: "#701516",
  Swift: "#F05138",
  MDX: "#fcb32c",
};

const GITHUB_USER = "reymooy27";
const ACTIVE_DAYS = 14;

export default async function handler(req, res) {
  try {
    const headers = {
      Accept: "application/vnd.github+json",
      "User-Agent": "portfolio-activity-island",
    };
    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const gh = await fetch(
      `https://api.github.com/users/${GITHUB_USER}/repos?sort=pushed&per_page=20`,
      { headers }
    );
    if (!gh.ok) throw new Error(`github ${gh.status}`);

    const cutoff = Date.now() - ACTIVE_DAYS * 86400e3;
    const repos = (await gh.json())
      .filter(
        (r) =>
          !r.fork && !r.archived && new Date(r.pushed_at).getTime() > cutoff
      )
      .slice(0, 5)
      .map((r) => ({
        name: r.name,
        description: r.description,
        url: r.html_url,
        language: r.language,
        languageColor: Object.hasOwn(COLORS, r.language)
          ? COLORS[r.language]
          : null,
        pushedAt: r.pushed_at,
        stars: r.stargazers_count,
      }));

    res.setHeader("Content-Type", "application/json");
    res.setHeader(
      "Cache-Control",
      "public, s-maxage=3600, stale-while-revalidate=86400"
    );
    res.end(JSON.stringify({ updated_at: new Date().toISOString(), repos }));
  } catch {
    // Never leak upstream errors to visitors; short cache so we retry soon.
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Cache-Control", "public, s-maxage=60");
    res.end(JSON.stringify({ updated_at: new Date().toISOString(), repos: [] }));
  }
}
