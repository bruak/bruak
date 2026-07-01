# Burak Soykan Portfolio Site

Static portfolio website for an R&D Software Developer profile focused on industrial IoT, real-time systems, telemetry pipelines, microservices, technical writing and production-ready delivery.

## Structure

```text
portfolio-site/
├── index.html
├── blog.html
├── reading.html
├── reading-en.html
├── blog.css
├── styles.css
├── professional-panel.css
├── script.js
├── reading.js
├── favicon.svg
├── CNAME
├── data/
│   └── reading-list.json
├── posts/
│   ├── industrial-telemetry-pipeline.html
│   ├── multi-brand-cnc-data-acquisition.html
│   ├── runtime-delivery-checklist.html
│   └── article-template.html
└── README.md
```

## Local Preview

Open `index.html` directly in a browser, or serve the folder with a simple static server:

```bash
cd portfolio-site
python -m http.server 8080
```

Then open:

```text
http://127.0.0.1:8080
http://127.0.0.1:8080/blog.html
http://127.0.0.1:8080/reading.html
```

Use the local static server for `reading.html` and `reading-en.html`, because those pages load `data/reading-list.json` with `fetch`.

## Deployment

This folder is prepared as a static site and can be deployed through GitHub Pages, Netlify, Vercel static output, cPanel `public_html`, Nginx or any basic static hosting provider.

## Content Direction

Primary positioning:

```text
Machine data. Runtime-ready software systems.
```

Main engineering groups:

- Publisher / industrial telemetry pipeline
- IBBCAM / camera map and health runtime
- ParkIt / mobile product system
- ft_transcendence / real-time web platform
- Matcha / distributed application and matching engine
- Industry 4.0 CNC connectivity
- Deployment engineering toolkit

## Blog Publishing Workflow

To publish a new article:

1. Copy `posts/article-template.html`.
2. Rename it with a URL-safe slug, for example:

```text
posts/my-new-technical-post.html
```

3. Update the page title, meta description, category, date, article title, summary and article content.
4. Add a new card to `blog.html` inside `.post-list`.
5. Commit and push. GitHub Pages will publish the new article after deployment.

Recommended article structure:

```text
Problem
Context
Architecture / Implementation
Validation
Operational Notes
```

Recommended categories:

- Industrial IoT
- CNC Connectivity
- MES / OEE
- Deployment
- Diagnostics & Reverse Engineering
- Architecture

## Reading List Workflow

To add a selected external article:

1. Open `data/reading-list.json`.
2. Add a new object to the array:

```json
{
  "title": "Article title",
  "url": "https://example.com/article",
  "source": "Example Source",
  "readAt": "2026-07-01",
  "language": "en",
  "topics": ["Backend", "Systems"],
  "note": "Why this article is worth saving.",
  "favorite": true
}
```

3. Use one or more existing topics: `Backend`, `Systems`, `Industrial / IoT`, `AI`, `Security`, `Product`.
4. Serve the folder locally and open `reading.html` or `reading-en.html`.
