# ParkEt Apps Privacy Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add a public applications page and ParkEt privacy policy page to the static portfolio site.

**Architecture:** The site is static HTML/CSS, so new public paths are represented by new HTML files. Existing shared `styles.css`, `professional-panel.css`, and `script.js` are reused to keep the visual system and mobile navigation behavior consistent.

**Tech Stack:** Static HTML, CSS, existing JavaScript navigation helper.

---

### Task 1: Add Navigation Entry

**Files:**
- Modify: `portfolio-site/index.html`
- Modify: `portfolio-site/blog.html`

**Steps:**
1. Add `Uygulamalar` link to the Turkish main navigation.
2. Point the link to `./apps.html`.
3. Keep existing section links and language links unchanged.
4. Verify mobile menu still closes through existing `script.js`.

### Task 2: Add Applications Page

**Files:**
- Create: `portfolio-site/apps.html`

**Steps:**
1. Reuse the existing header/footer layout from `blog.html`.
2. Add one ParkEt application card.
3. Link the card action to `./apps/parket-privacy-policy.html`.
4. Keep the page ready for additional app cards.

### Task 3: Add ParkEt Privacy Policy Page

**Files:**
- Create: `portfolio-site/apps/parket-privacy-policy.html`

**Steps:**
1. Reuse the existing header/footer layout.
2. Publish the Turkish privacy policy content.
3. Use `01.07.2026`, `contact.soykan@gmail.com`, `Burak Soykan`, and `Istanbul`.
4. Ensure no bracketed placeholders remain.

### Task 4: Add Minimal Styling

**Files:**
- Modify: `portfolio-site/styles.css`

**Steps:**
1. Add reusable `.app-grid`, `.app-card`, `.legal-page`, and `.legal-document` styles.
2. Keep the style compatible with existing dark portfolio theme.
3. Avoid changing existing project card behavior.

### Task 5: Verify

**Files:**
- Check: `portfolio-site/index.html`
- Check: `portfolio-site/apps.html`
- Check: `portfolio-site/apps/parket-privacy-policy.html`

**Steps:**
1. Search for remaining `[` placeholders in the privacy policy page.
2. Inspect generated static paths.
3. Optionally open the HTML files in a browser.
