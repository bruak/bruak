# ParkEt Account Deletion Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add the public ParkEt account deletion page required by Google Play.

**Architecture:** The portfolio site is static HTML deployed from `portfolio-site` through GitHub Pages. The new account deletion page lives under the existing app-specific route group and is linked from the ParkEt card on `apps.html`.

**Tech Stack:** Static HTML, existing CSS, existing JavaScript mobile navigation.

---

### Task 1: Add Account Deletion Page

**Files:**
- Create: `portfolio-site/apps/parket-account-deletion.html`

**Steps:**
1. Reuse the existing ParkEt privacy policy page layout.
2. Publish account deletion steps in Turkish.
3. Fill placeholders with `01.07.2026`, `contact.soykan@gmail.com`, and `Burak Soykan`.
4. Explain deleted and retained data categories.

### Task 2: Link From Applications Page

**Files:**
- Modify: `portfolio-site/apps.html`

**Steps:**
1. Add a second action link in the ParkEt card.
2. Point it to `./apps/parket-account-deletion.html`.
3. Keep the privacy policy link unchanged.

### Task 3: Verify

**Files:**
- Check: `portfolio-site/apps.html`
- Check: `portfolio-site/apps/parket-account-deletion.html`

**Steps:**
1. Confirm no bracketed placeholders remain.
2. Confirm the route is public under the GitHub Pages deployment path.
3. Push to `main` to trigger the existing Pages workflow.
