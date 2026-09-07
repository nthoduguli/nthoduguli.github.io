# nikitha-thoduguli.github.io

Personal site — CV, research, and projects. Plain HTML/CSS/JS, no build step, no dependencies.

## Files

```
index.html                        all page content
styles.css                        all styling (colors/fonts as CSS variables at the top)
script.js                         mobile sidebar toggle + scroll-based active-link highlighting
README.md                         this file
assets/headshot.jpeg              profile photo
assets/Nikitha_Thoduguli_CV.pdf   downloadable CV
assets/research/zitnik-abstract.png   figure — multi-modal LLM benchmark (Harvard/Zitnik)
assets/research/kellis-abstract.png   figure — genome assembly & linCREs (MIT CSAIL/Kellis)
assets/research/course-abstract.png   figure — VAE + diffusion architecture (course project)
assets/research/infinitopes-logo.png  real logo — Infinitopes (used as the research card image)
assets/logos/mbg.png                real logo — MIT Biotech Group
assets/logos/gha.png                real logo — Global Health Alliance
assets/logos/camp-kesem.png         real logo — Camp Kesem
assets/logos/mit-be.png             real logo — MIT Biological Engineering (20.A06 TA)
assets/logos/mit-physics.png        real logo — MIT Physics (8.02 TA)
assets/logos/mit-seal.png           real logo — MIT seal (Education)
```

## Deploy to GitHub Pages

1. Push everything above (keeping the `assets/` structure) to a repo named `<your-username>.github.io` for a user site, or any name for a project site.
2. In the repo: **Settings → Pages** → Source: **Deploy from a branch**, branch **main**, folder **/(root)**.
3. Visit the URL GitHub shows on that page after a minute or two.

## Layout

Left sidebar for navigation (name + section links), matching Ada's page. Main content: photo, name, a row of icon links (Email, Scholar, LinkedIn, GitHub, CV), then the bio — no separate "About" label.

**Featured Research** uses a publication-card format (image left, text right): a date/status label, a project title as the heading, an institution/supervisor byline, your contribution bullets, a manuscript-status line where applicable, pill-style "Code" buttons linking to your repos, and bracketed monospace tags (`[computational]`) at the bottom of each card.

**Leadership** and **Education** entries each have a small logo card to the left of the text.

## Placeholders

None — every logo, figure, and link on the page is real. If you add or change a project, award, or role later, see "Editing content later" below.

## Editing content later

- **Add a research card**: copy an `<article class="pub">...</article>` block under `<section id="research">`.
- **Add a leadership/education entry**: copy a `<div class="simple-item">...</div>` block (includes a logo slot).
- **Add an award**: copy a `<div class="honor-item">...</div>` block under `<section id="honors">`.
- **Change colors or fonts**: edit the variables at the top of `styles.css`.

## Other notes

- Phone number from your CV is intentionally left off (add it near the icon-links row in `index.html` if you want it).
- The five non-featured CV experiences (Eli Lilly, Kamm Lab, both UT Southwestern positions, and the CPP/Single-Cell Transcriptomics project) live in the downloadable CV only, not on the site.
