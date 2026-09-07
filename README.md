# nikitha-thoduguli.github.io

Personal site — CV, research, and projects. Plain HTML/CSS/JS, no build step.

## Files

- `index.html` — all content (edit this to add/change projects, awards, etc.)
- `styles.css` — all styling (colors are defined once at the top as CSS variables)
- `script.js` — mobile nav toggle + scroll-based active-link highlighting

## Deploy to GitHub Pages (free hosting)

1. **Create a new repository** on GitHub.
   - For a *user site* at `https://<your-username>.github.io`, name the repo exactly `<your-username>.github.io`.
   - For a *project site* at `https://<your-username>.github.io/<repo-name>`, name it whatever you like.

2. **Upload these three files** (`index.html`, `styles.css`, `script.js`) to the repo — either drag-and-drop them via the GitHub web UI ("Add file" → "Upload files"), or via git:

   ```bash
   git init
   git add index.html styles.css script.js README.md
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```

3. **Turn on GitHub Pages**: in the repo, go to **Settings → Pages**. Under "Build and deployment," set Source to **Deploy from a branch**, branch **main**, folder **/(root)**. Save.

4. Wait 1–2 minutes, then visit the URL GitHub shows on that page (e.g. `https://<your-username>.github.io`).

## Editing content later

Everything lives in `index.html` as plain text inside sections — no templating engine. To:
- **Add a project**: copy a `<div class="track">...</div>` block under `#research` and edit the text. Set `data-cat` to `compute`, `wetlab`, or `strategy` to color the left border and tag.
- **Add an award**: copy a `<div class="honor-item">...</div>` block under `#honors`.
- **Change colors**: edit the `--accent-*` and `--bg*` variables at the top of `styles.css`.

## Notes / things you may want to change

- Your phone number from the CV was left off the site intentionally (public-facing pages typically skip it) — add it to the `.contact-block` in `index.html` if you want it.
- Your GitHub (`github.com/nthoduguli`) is now linked in the sidebar. Consider adding direct links to specific repos next to relevant projects under Research if any of them are public — for a computational-science audience, visible code matters as much as the write-up.
- No Google Scholar link was included since none was in your CV — add it next to the other sidebar links if you have one.
- A few CV bullets were lightly condensed for web readability; nothing was added that wasn't in the source CV.

## Your CV PDF

Your CV is already included at `assets/Nikitha_Thoduguli_CV.pdf`, and the sidebar's "Download CV (PDF)" link points to it — nothing else to configure. If you update your CV later, just replace that file with the new PDF under the same filename (or update the `href` in `index.html`'s `.cv-link` if you rename it).

## Design notes (v2 — tailored for technical/computational internship applications)

This revision dials back the earlier color-coded, decorative styling toward a plainer, research-lab register: one muted accent color instead of three, bracketed monospace tags (`[computational]`) instead of colored pills, hairline dividers instead of tick-mark rulers, and borderless honor entries. The goal is to read as substance-first — closer to a lab's internal documentation than a personal-brand portfolio — while keeping the monospace/technical details that signal comfort with code.

The hero and the Harvard Medical School entry now foreground systems/scale work (SLURM, cluster computing) more explicitly, and the Skills section leads with "Languages & Systems" rather than burying C++ and cluster computing under general "programming."
