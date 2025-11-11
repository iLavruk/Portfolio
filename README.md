# Ivan Lavruk — React + TypeScript + Vite

Live: https://ilavruk.github.io/portfolio/

Personal portfolio site built with React 19, TypeScript, and Vite. It renders content from a single JSON file, uses CSS Modules with design tokens, and includes SEO, Open Graph, and structured data for discoverability.

## Features

- Sections: Hero, About, Work Experience, Skills, Education, Languages, Interests, Contact
- Content-driven: edit `src/data/resumeData.json` and the CV file in `public/cv/`
- Contact form with client-side validation and optional Formspree integration
- SEO: `<meta>` tags, Open Graph image, `public/sitemap.xml`, `public/robots.txt`
- Structured data: Schema.org Person in `index.html`
- Styling: CSS Modules + `src/styles/tokens.css` design tokens
- Icons: `@tabler/icons-react` and `lucide-react`
- Modern stack: React 19 with the React Compiler, Vite 7, TypeScript strict mode

## Tech Stack

- React 19, TypeScript 5, Vite 7
- ESLint + Prettier (already configured)
- CSS Modules
- Vite TS paths via `vite-tsconfig-paths`

## Getting Started

Prerequisites: Node.js 20+ is recommended.

```bash
npm install
npm run dev     # start locally
npm run build   # build for production (outputs to dist/)
npm run preview # preview the production build

npm run lint        # check lint
npm run lint:fix    # fix lint issues
npm run format      # format with Prettier
npm run format:check
```

## Configuration

Environment variables:

- `VITE_FORMSPREE_ID` (optional) — enable sending messages from the contact form via Formspree. Without it, the form shows a note and does not submit.

Paths and deployment:

- Vite `base` is set in `vite.config.ts`. For GitHub Pages under `https://<user>.github.io/<repo>/`, set it to `/<repo>/`.
- This repo is named `portfolio`, so the value should be `'/portfolio/'` to match the URL path exactly (paths on GitHub Pages are case-sensitive). Update if you rename the repo.

## Content Editing

- `src/data/resumeData.json` — main content: name, tagline, contacts, skills, experience, education, languages, interests, summary, `cvUrl`.
- `public/cv/CV_Ivan_Lavruk_en.pdf` — downloadable CV file referenced by `cvUrl`.
- Images live in `public/` (for public URLs) or `src/assets/` (bundled). The Open Graph image is `public/og-image.webp`.

## Project Structure

```
src/
  components/
    about/, background/, contact/, education/, experience/,
    footer/, header/, hero/, interests/, languages/, nav/, skills/, ui/
  data/              # resumeData.json (content)
  lib/
    constants/       # navigation, sections, contact form fields
    hooks/           # useActiveSection
    icons/           # icon wrappers
    validation/      # contact form validation
  styles/            # tokens.css and globals
  types/             # shared TypeScript types
```

## SEO

- `index.html` sets title, description, canonical URL, Open Graph tags, and Schema.org Person.
- `public/sitemap.xml` and `public/robots.txt` are included. Update URLs if the deployment path changes.

## Notes

- React Compiler is enabled through Babel (`babel-plugin-react-compiler`). See https://react.dev/learn/react-compiler.
- ESLint is configured with `typescript-eslint` and Prettier. You can enable type-aware linting later if desired.
- If you notice strange characters in `resumeData.json` (e.g., replacement symbols), replace smart quotes/en-dashes with ASCII equivalents.

## License

No explicit license specified. All rights reserved by the author unless stated otherwise.
