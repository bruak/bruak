# ParkEt Apps Privacy Design

## Goal

Add a public applications area to the static portfolio site and publish the ParkEt privacy policy under an app-specific path.

## Route Design

- `portfolio-site/apps.html` lists published applications.
- `portfolio-site/apps/parket-privacy-policy.html` publishes the ParkEt privacy policy.
- Main Turkish navigation links to `apps.html` as `Uygulamalar`.

## Content Design

The apps page uses the existing portfolio visual language and introduces a single ParkEt card. The card can later be copied for future apps without changing the navigation model.

The privacy policy page uses the finalized Turkish privacy policy content from `privacy-policy-website-content.md`, with the configured date, contact email, developer name, and Istanbul address.

## Testing

Open `portfolio-site/index.html`, `portfolio-site/apps.html`, and `portfolio-site/apps/parket-privacy-policy.html` in a browser. Verify navigation links, page readability, and that no bracketed placeholders remain in the public privacy policy.
