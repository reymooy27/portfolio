export default function handler(req, res) {
  const config = `backend:
  name: github
  repo: reymooy27/portfolio
  branch: master
  base_url: https://reymooy.vercel.app
  auth_endpoint: /api/auth

media_folder: "public"
public_folder: "/"

collections:
  - name: projects
    label: "Main Projects"
    folder: "content/projects"
    create: true
    slug: "{{slug}}"
    fields:
      - { label: "Project Name", name: "name", widget: "string" }
      - { label: "Image", name: "image", widget: "image", required: false }
      - { label: "Language", name: "language", widget: "string", required: false }
      - { label: "Tech Stack", name: "techStack", widget: "string", required: false }
      - { label: "GitHub Link", name: "githubLink", widget: "string", required: false }
      - { label: "Site Link", name: "siteLink", widget: "string", required: false }
      - { label: "Date", name: "datetime", widget: "string", required: false }

  - name: another-projects
    label: "Another Projects"
    folder: "content/another-projects"
    create: true
    slug: "{{slug}}"
    fields:
      - { label: "Project Name", name: "name", widget: "string" }
      - { label: "Image", name: "image", widget: "image", required: false }
      - { label: "Language", name: "language", widget: "string", required: false }
      - { label: "Tech Stack", name: "techStack", widget: "string", required: false }
      - { label: "GitHub Link", name: "githubLink", widget: "string", required: false }
      - { label: "Site Link", name: "siteLink", widget: "string", required: false }
      - { label: "Date", name: "datetime", widget: "string", required: false }
`;

  res.setHeader("Content-Type", "text/yaml");
  res.end(config);
}
