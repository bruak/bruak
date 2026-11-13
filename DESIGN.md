---
name: "Burak Soykan Portfolio"
description: "A technical journal for software work, writing and application support."
colors:
  bg: "#f6f7f9"
  bg-soft: "#eceff3"
  text: "#17202a"
  muted: "#505b68"
  border: "#cdd3dc"
  accent: "#2549ce"
  accent-strong: "#18379e"
  on-accent: "#ffffff"
typography:
  display:
    fontFamily: "Archivo, 'Segoe UI', sans-serif"
    fontSize: "clamp(3.6rem, 8vw, 6rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.04em"
  display-mobile:
    fontFamily: "Archivo, 'Segoe UI', sans-serif"
    fontSize: "clamp(3.1rem, 11vw, 4.6rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Archivo, 'Segoe UI', sans-serif"
    fontSize: "clamp(2.8rem, 6vw, 5rem)"
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: "-0.035em"
  section-title:
    fontFamily: "Archivo, 'Segoe UI', sans-serif"
    fontSize: "28px"
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: "-0.035em"
  project-title:
    fontFamily: "Archivo, 'Segoe UI', sans-serif"
    fontSize: "clamp(1.8rem, 3.2vw, 2.8rem)"
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Archivo, 'Segoe UI', sans-serif"
    fontSize: "17px"
    fontWeight: 500
    lineHeight: 1.12
  body:
    fontFamily: "Archivo, 'Segoe UI', sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.65
  article-body:
    fontFamily: "Archivo, 'Segoe UI', sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.85
  label:
    fontFamily: "Archivo, 'Segoe UI', sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.65
  metadata:
    fontFamily: "Archivo, 'Segoe UI', sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.65
  tag:
    fontFamily: "Archivo, 'Segoe UI', sans-serif"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.65
  code:
    fontFamily: "Consolas, 'Courier New', monospace"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.8
spacing:
  compact: "8px"
  small: "16px"
  medium: "24px"
  large: "32px"
  column: "48px"
  section: "64px"
  section-wide: "80px"
  gutter: "clamp(20px, 5vw, 72px)"
components:
  button-default:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    typography: "{typography.label}"
    padding: "12px 18px"
  button-default-hover:
    backgroundColor: "{colors.text}"
    textColor: "{colors.on-accent}"
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.label}"
    padding: "12px 18px"
  button-primary-hover:
    backgroundColor: "{colors.accent-strong}"
    textColor: "{colors.on-accent}"
  filter:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    typography: "{typography.label}"
    padding: "8px 0"
  filter-selected:
    textColor: "{colors.text}"
  navigation-link:
    textColor: "{colors.text}"
    typography: "{typography.label}"
    padding: "12px 0"
  text-tag:
    textColor: "{colors.muted}"
    typography: "{typography.tag}"
  project-row:
    textColor: "{colors.text}"
    padding: "40px 0"
  project-disclosure:
    textColor: "{colors.text}"
    typography: "{typography.label}"
  writing-row:
    textColor: "{colors.text}"
    padding: "32px 0"
---

# Design System: Burak Soykan Portfolio

## Overview

**Creative North Star: "The Technical Journal"**

The portfolio reads like a personal engineering publication. Cool paper, ink type, open margins and fine rules give real project descriptions room to carry the identity. Cobalt identifies interactive elements. All projects use the same neutral row treatment.

The same restrained vocabulary supports Turkish and English navigation, technical articles, selected reading and application documents. Information is progressively disclosed through native details elements; the default view remains easy to scan. Decoration does not compete with project names or readable prose.

**Key Characteristics:**

- Cool neutral surfaces with one cobalt accent family.
- Archivo for the identity, headings, prose and interface labels.
- Open columns and ruled rows with compact metadata.
- Native disclosures, visible focus and concise state changes.
- Text and inline SVG rather than invented imagery.

This is a source-derived record of `portfolio-site/styles.css`, `blog.css`, shared markup and `script.js`, recorded on 2026-11-13. The game runtime is outside this system. Browser transports were unavailable, so rendered appearance, font rasterization and visual responsive approval remain unverified. Static and DOM checks do not establish rendered visual approval.

## Colors

The palette pairs cool, pale neutrals with dark ink and a clear cobalt signal. Frontmatter values are normative.

### Primary

**Cobalt** (`accent`) supplies links, focus outlines, selection and primary buttons. **Deep Cobalt** (`accent-strong`) is the primary button hover state. **On Cobalt** (`on-accent`) supplies the text contrast on primary buttons.


### Neutral

**Cool Paper** (`bg`) is the page ground. **Inset Paper** (`bg-soft`) marks the approach section and code blocks. **Ink** (`text`) carries primary content and stronger rules; **Secondary Ink** (`muted`) carries descriptions and metadata. **Fine Rule** (`border`) separates neighboring entries.

### Named Rules

**The Cobalt Signal Rule.** Cobalt marks interactive affordances; all project surfaces stay neutral.

The sidecar's tonal ramps are synthesized preview aids. They are not additional production tokens. The unused source variable `--accent-soft` is not promoted into this normative palette.

## Typography

**Display Font:** Archivo, with Segoe UI and generic sans-serif fallbacks.
**Body Font:** The same Archivo stack.
**Code Font:** Consolas, with Courier New and generic monospace fallbacks.

Archivo is loaded locally from `portfolio-site/assets/fonts/archivo-variable.ttf` with its normal variable weight range and swap behavior. Its OFL license accompanies the asset. Moderate heading weights, tight display tracking and a comfortable body leading establish hierarchy without a second decorative face.

### Hierarchy

- **Display:** The home-page name uses the display role; the mobile variant takes over at the small breakpoint.
- **Headline and section title:** Page and blog titles share the fluid headline role; supporting home sections use the smaller section-title role.
- **Project and compact title:** Project titles are fluid, the feature is larger, and compact stack headings use the title role.
- **Body:** General prose uses the body role with a maximum paragraph measure of 72ch; article paragraphs and lists use the more open article-body leading.
- **Labels, metadata and code:** Navigation and disclosure labels use label; dates and article metadata use metadata with tabular numerals; technology names use tag. Monospace is limited to code.

The hierarchy is not a strict modular scale. At the small breakpoint, page/blog titles become 42px, project titles 30px and article titles 36px. The article title has its own fluid size and tighter leading in `blog.css`.

### Named Rules

**The Single Voice Rule.** Archivo carries identity, headings, body and interface labels; monospace is reserved for code.

## Layout

The shared shell is centered with a maximum width of 1200px and the fluid gutter token on both sides. The body supports widths down to 280px. The header and footer align to that same shell; the header is part of document flow rather than a fixed overlay.

Wide layouts pair a narrow heading or metadata column with a wider content column. Most supporting sections use a 1:2 split with the column spacing token. Project entries use a 0.88:1.12 split; application entries use 1:1.5. Writing and reading reuse ruled rows. Article pages use an 800px content column, a 200px contents column and an 80px gap. Legal documents are capped at 820px.

Repeated gaps and padding use the extracted spacing steps, with component-specific intermediate values retained in source. Major sections generally use generous vertical separation; dense metadata and tags use smaller gaps. Ordinary paragraphs remain within their readable measure instead of stretching to the shell width.

Responsive changes are explicit:

1. At 1000px and below, the header can wrap, the JavaScript menu toggle appears, project gaps reduce and multi-column supporting content simplifies.
2. At 640px and below, project, writing, reading and major section layouts become single-column; the hero introduction moves ahead of its caption. The article contents moves above the article and stops being sticky.
3. At 1600px and above, only the home hero's top spacing increases.

Without JavaScript, navigation remains visible and project filtering stays hidden while all projects remain readable. With JavaScript, menu state is reflected by `aria-expanded`, and filters update `aria-pressed`, the hidden entries and the live result count.

## Elevation & Depth

The shared stylesheets contain no box-shadow vocabulary. Separation comes from open space, thin borders and the inset paper field. The cobalt feature is a flat color field, not a lifted object. There are no decorative animation loops.

### Named Rules

**The Ruled Page Rule.** Separate content with spacing, fine rules and tonal fields; do not add floating surfaces or ornamental shadows.

Motion is limited to short functional state transitions: button color changes and the menu/disclosure indicators. Reduced-motion preference removes transitions and smooth scrolling. Exact durations and focus treatments are carried by the sidecar because they are outside the frontmatter schema.

## Shapes

Content follows straight column edges and horizontal rules. The shared stylesheets do not define a corner-radius scale; do not manufacture a radius token from browser defaults. Buttons use a thin rectangular outline, tags are unboxed text, and project entries remain open rows.

Icons are small inline SVG strokes. The menu indicator is made from two CSS rules; the disclosure indicator is an SVG plus that rotates when open. These indicators communicate action or state and are not decorative icon tiles.

## Components

### Buttons

Compact, explicit actions use a thin outline and the label typography. The default button becomes ink-filled on hover; the primary variant is cobalt-filled and deepens on hover. Both use the button padding recorded above, a 46px minimum height and a short color transition. Keyboard focus uses an offset cobalt outline. The shared disabled treatment lowers opacity and uses a not-allowed cursor.

### Project filters and tags

Filters are text buttons with a 44px minimum height. Unselected labels are secondary ink; the selected label is ink with a two-pixel bottom rule. Hover uses cobalt. The whole group wraps naturally.

Technology tags are plain, compact text with horizontal and vertical gaps. They do not receive pill backgrounds, outlines or click behavior.

### Navigation

A fine ink rule anchors the header. Brand, links and the locale switch share Archivo; the brand mark and active/hover links use cobalt. Active links also retain an underline. The mobile toggle has an accessible state label; Escape closes an open menu and returns focus to the toggle. A focus-revealed skip link precedes the header.

### Project index

Project entries are two-column descriptions with a bottom rule. Each entry pairs a title and concise context with the longer explanation, technology tags, a native disclosure and source links. Publisher uses exactly the same background, title size, spacing and separators as every other project. At small widths, every project becomes a single column.

### Native disclosures

Project disclosures begin with a separator and a 52px minimum-height summary. Their SVG indicator rotates on the open state; hover highlights the summary and focus remains visible. Content uses normal document flow. Education entries also use native details elements with compact summaries.

### Writing and reading rows

Writing and reading entries use rules and typography rather than enclosed cards. Dates and article type use compact metadata, followed by a readable title and description. Reading metadata sits beside the content on wide screens and joins normal flow on small screens. Loading, empty, error and no-script messages use the same muted text and ruled vocabulary.

### Article and legal documents

Articles use the shared hierarchy, generous text leading and a sticky contents list on wide layouts. Code blocks use inset paper with horizontal overflow available. Legal titles precede their product context and update information; the document then uses normal headings, paragraphs and lists. No input-field or form system is introduced because these surfaces do not contain one.

## Do's and Don'ts

### Do:

- **Do** use the source palette and local Archivo asset across the shared portfolio surfaces.
- **Do** separate long-form content with readable measures, whitespace and rules.
- **Do** retain visible keyboard focus, native disclosure semantics and accessible state attributes.
- **Do** carry the same information hierarchy into the single-column layout.
- **Do** distinguish static source verification from rendered visual approval.

### Don't:

- **Don't** add decorative eyebrow labels, icon tiles or invented project imagery.
- **Don't** turn the project index and reading rows into rounded, elevated cards.
- **Don't** use monospace as decorative interface labeling.
- **Don't** add gradients, ornamental shadows or looping animation to this visual system.
- **Don't** treat sidecar preview ramps or unused CSS variables as production color tokens.
