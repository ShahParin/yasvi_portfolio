# Yasvi S. Pitroda — Portfolio

A single-page portfolio website. Plain HTML, CSS, and JavaScript — no build
tools, no frameworks, no installation. Just open it in a browser.

## Folder structure

```
Yasvi Portfolio/
├── index.html              ← page content (the only file with your text)
├── css/
│   ├── variables.css       ← colors, fonts, widths (edit the look here)
│   ├── base.css            ← reset + base typography
│   ├── components.css      ← nav, buttons, tags, cards
│   ├── sections.css        ← hero, about, experience, skills, etc.
│   └── responsive.css      ← mobile/tablet layout + reduced motion
├── js/
│   └── main.js             ← mobile menu + scroll-fade animations
├── assets/
│   ├── images/             ← put your photo here (yasvi.jpg)
│   └── resume/             ← put your resume PDF here
└── README.md               ← this file
```

## How to view it

Double-click `index.html` to open it in your browser. That's it.

(Optional) To run a local server — useful if anything ever loads oddly:

```bash
cd "Yasvi Portfolio"
python3 -m http.server 8000
# then visit http://localhost:8000
```

## How to edit

- **Text** (jobs, skills, projects, contact): edit `index.html`. Each section
  is wrapped in a clearly labelled comment, e.g. `<!-- ===== EXPERIENCE ===== -->`.
- **Colors / fonts / spacing**: edit `css/variables.css` — change a value once
  and it updates everywhere.
- **Your photo**: drop `yasvi.jpg` into `assets/images/`.
- **Your resume**: drop `Yasvi-Pitroda-Resume.pdf` into `assets/resume/`.

## Things to confirm before publishing

- LinkedIn link points to `linkedin.com/in/yasvipitroda` — verify it's correct.
- Add the photo and resume files (see the `.txt` notes in the assets folders).

## How to publish (free)

- **Netlify** — go to app.netlify.com/drop and drag the whole `Yasvi Portfolio`
  folder onto the page. Live in seconds.
- **GitHub Pages** — push this folder to a repo, then enable Pages in
  Settings → Pages (deploy from the main branch / root).

Both serve `index.html` as the home page automatically.
