# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Static personal website for **Jae-Won Oh, MD, MPH** (Neurology Resident), hosted on GitHub Pages at `jaewon-oh.github.io`. No build step — pure HTML, CSS, and vanilla JavaScript.

## GitHub Pages Deployment

To deploy, push to a GitHub repo named exactly `jaewon-oh.github.io`. The `index.html` at the repo root is served automatically. No Actions or `gh-pages` branch needed for a user site.

## File Structure

```
index.html          — Main page (Hero, About, Projects, Writings preview, Contact)
writings/
  index.html        — Writings hub with category filter tabs
css/
  style.css         — All styles (shared across both pages); uses CSS custom properties
js/
  main.js           — Scroll spy for nav active state; category filter logic for writings page
```

## Adding a Writing Post

Posts are inline `<a class="post-item" data-category="...">` elements inside `.post-list` in `writings/index.html`. To add a new post:

1. Copy an existing `.post-item` block.
2. Set `data-category` to one of: `papers`, `books`, `industry`, `tech-art`.
3. Update the meta, title, and excerpt.
4. Prepend it to the list (newest first).

To link to a full post, create a new HTML file (e.g., `writings/post-slug.html`) using the same nav/footer pattern, then update the `href` on the list item.

## Placeholders to Fill In

- `index.html`: institution name, bio details, all three project cards, email, LinkedIn URL
- `css/style.css`: none
- `writings/index.html`: replace placeholder post titles/excerpts with real content

## Design Tokens (css/style.css)

| Variable | Value | Use |
|---|---|---|
| `--accent` | `#2563eb` | Labels, hover states, links |
| `--text` | `#111827` | Body text |
| `--text-muted` | `#6b7280` | Secondary text |
| `--border` | `#e5e7eb` | Dividers, card borders |
| `--max-width` | `760px` | Content column width |
