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

assets/research/zitnik-abstract.png   figure — genome assembly & linCREs (Harvard/Zitnik card)
assets/research/kellis-abstract.png   figure — multi-modal LLM benchmark (MIT CSAIL/Kellis card)
assets/research/course-abstract.png   figure — VAE + diffusion architecture (course project)
assets/research/infinitopes-logo.png  Infinitopes logo (used as that research card's image)

assets/logos/mbg.png              MIT Biotech Group
assets/logos/gha.png              Global Health Alliance
assets/logos/camp-kesem.png       Camp Kesem
assets/logos/mit-physics.png      MIT Physics (8.02 TA)
assets/logos/mit-be.png           MIT Biological Engineering (20.A06 TA)
assets/logos/mit-seal.png         MIT seal (Education)
assets/logos/mit-biology.png      MIT Biology (Merck Prize)
assets/logos/mit-eecs.png         MIT EECS (UROP Award, HKN)
assets/logos/ashg.png             ASHG Annual Meeting (Platform Talk)
assets/logos/hkn.png              Eta Kappa Nu (HKN Member)
```

Note: research figures are named by which lab did the work (zitnik-abstract.png, kellis-abstract.png), not by which image content originally came from where — the image assigned to each card was corrected per your instructions, so go by the filename's label, not by what you'd expect from the name alone if you're recalling earlier versions.

## Deploy to GitHub Pages

1. Unzip this archive and push the contents (keeping the `assets/` folder structure intact) to your repo, replacing the existing files.
2. Commit and push:
   ```bash
   git add .
   git commit -m "Update site"
   git push
   ```
3. GitHub Pages redeploys automatically in a minute or two. If you don't see changes, hard-refresh (Cmd+Shift+R) — browsers cache CSS and images aggressively.

## Layout

Left sidebar for navigation (name, section links, and a "Download CV" button at the bottom). Main content starts with a square rounded-corner headshot to the left of your name and bio, an icon row (Email, Scholar, LinkedIn, GitHub) beneath your name, then the bio — no separate "About" label. All section headings (Featured Research, Leadership & Service, etc.) are centered.

**Featured Research**: each entry is image-left/text-right — a monospace date (with location for Infinitopes), a bold title, institution, a "Supervisor: ..." line beneath it, your contribution bullets, then pill-style buttons (Preprint/Code) and bracketed monospace tags at the bottom.

**Leadership & Service**: grouped under four subheadings (MIT Biotech Group, MIT Global Health Alliance, Camp Kesem at MIT, Teaching), each with its org logo — once at the subheading level for single-logo groups, or per-entry for Teaching since the two TA roles belong to different departments.

**Honors & Awards** and **Education**: each entry has its own logo to the left of the text, same pattern as Leadership.

## Editing content later

- **Add a research card**: copy an `<article class="pub">...</article>` block under `<section id="research">`.
- **Add a leadership entry**: copy a `<div class="plain-item">...</div>` (grouped, no logo) or `<div class="simple-item">...</div>` (has its own logo) inside the relevant `.leadership-group`. To add a whole new org, copy an entire `<div class="leadership-group">...</div>` block.
- **Add an award or education entry**: copy a `<div class="honor-item">...</div>` or the Education `<div class="simple-item">...</div>` block — both include a logo slot.
- **Change colors or fonts**: edit the variables at the top of `styles.css`.

## Notes

- Phone number from your CV is intentionally left off (add it near the icon-links row in `index.html` if you want it).
- Five CV experiences (Eli Lilly, Kamm Lab, both UT Southwestern positions, and the CPP/Single-Cell Transcriptomics project) live in the downloadable CV only, not on the site.
- Every logo and research figure on the site is real — nothing left is a placeholder.
