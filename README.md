# nikitha-thoduguli.github.io

Personal site — CV, research, and projects. Plain HTML/CSS/JS, no build step, no dependencies.

## Files

```
index.html                        all page content
styles.css                        all styling (colors/fonts as CSS variables at the top)
script.js                         scroll-based active-nav-link highlighting
README.md                         this file
assets/headshot.jpeg              profile photo
assets/Nikitha_Thoduguli_CV.pdf   downloadable CV (linked from the intro)
assets/research/harvard.svg       thumbnail for the Harvard/Zitnik project
assets/research/csail.svg         thumbnail for the MIT CSAIL/Kellis project
assets/research/course.svg        thumbnail for the Deep Learning for Biology course project
assets/research/infinitopes.svg   thumbnail for the Infinitopes project
assets/research/divider-*.svg     four small illustrations marking section breaks
```

## Deploy to GitHub Pages (free hosting)

1. **Create a repository** on GitHub.
   - For a *user site* at `https://<your-username>.github.io`, name the repo exactly `<your-username>.github.io`.
   - For a *project site* at `https://<your-username>.github.io/<repo-name>`, name it whatever you like.

2. **Push all the files above** (keeping the `assets/` folder structure intact):

   ```bash
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin git@github.com:<your-username>/<repo-name>.git
   git push -u origin main
   ```

3. **Turn on GitHub Pages**: in the repo, go to **Settings → Pages**. Under "Build and deployment," set Source to **Deploy from a branch**, branch **main**, folder **/(root)**. Save.

4. Wait 1–2 minutes, then visit the URL GitHub shows on that page.

## Editing content later

Everything lives in `index.html` as plain HTML — no templating engine, no build step.

- **Add a research project**: copy a `<div class="track">...</div>` block under `<section id="research">` and edit the text. Give it a thumbnail by adding an `<img class="track-img" src="assets/research/yourfile.svg">` as its first child.
- **Add a leadership entry**: copy a `<div class="simple-item">...</div>` block under `<section id="leadership">`.
- **Add an award**: copy a `<div class="honor-item">...</div>` block under `<section id="honors">`.
- **Change colors or fonts**: edit the variables at the top of `styles.css` (`--bg`, `--accent`, `--header-font`, etc.) — everything else references them.
- **Change the nav or section order**: the `<nav class="nav-links">` links in `<header>` and the `<section id="...">` blocks in `<main>` are independent — reorder either as needed, just keep the `href="#id"` / `id="..."` pairs matching.

## Current layout

The page follows the structure of ada-f.github.io: a sticky top nav bar, your name as a large heading, photo and contact links (Email / GitHub / LinkedIn / CV) flowing inline beneath it, then the bio paragraph directly — no separate "About" label. Small line-art divider illustrations mark the same section seams her page uses them (above your name, after the bio, after Research, after Leadership). Section headings (Featured Research, Leadership & Service, etc.) are plain, unnumbered.

Within that structure, the page keeps the developer-oriented details from earlier passes: bracketed monospace tags (`[computational]`, `[hpc / slurm]`) on each project, a muted single accent color rather than decorative color-coding, and direct "Code" links to your GitHub repos next to the two projects that have public code (biomirage, evolutionDeepLearning).

Research is trimmed to four flagship projects (Zitnik/Harvard, Kellis/MIT CSAIL, the Deep Learning for Biology course project, Infinitopes) — the rest of your experience (Eli Lilly, Kamm Lab, both UT Southwestern positions) lives in the downloadable CV only.

## Things worth knowing about the current placeholders

- **Header font**: currently Playfair Display (bold), matching what you found inspecting Ada's page (`--font-serif` resolved to `"Playfair Display", Georgia, "Times New Roman", serif`).
- **Divider illustrations & project thumbnails** (all the `.svg` files in `assets/research/`): these are abstract line-art I generated, not real figures from your papers, posters, or graphical abstracts. If you have actual project figures you'd like to use instead, swap them in under the same filenames and they'll appear in the same spots — real figures will read as more substantive than the abstract icons, especially for a technical audience.
- **Bio paragraphs** under `<section id="about">`: a first draft based on your LinkedIn text, lightly tweaked. Treat as a draft to keep iterating on, not final.
- **Phone number** from your CV was left off intentionally (public pages typically skip it) — add it near the links row in `index.html` if you want it listed.
- **Google Scholar**: not linked since none was in your CV or mentioned — add it next to the other links in `<p class="links-row">` if you have one.
