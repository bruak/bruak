# Burak Soykan Portfolio Site

Static portfolio website for an R&D Software Developer profile focused on industrial IoT, real-time systems, telemetry pipelines, microservices, technical writing and production-ready delivery.

## Structure

```text
portfolio-site/
├── index.html
├── blog.html
├── blog.css
├── styles.css
├── professional-panel.css
├── script.js
├── favicon.svg
├── CNAME
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
```

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
