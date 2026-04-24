# Template Site 2 Guide

## Purpose
`template-site-2` is the second accommodation website template option. It is based on the saved Veranda4M WordPress pages and keeps the original visual direction as a close 1:1 template capture.

This is meant to be a reusable starting point for future customer sites, not a redesign. The current Veranda4M content is example content that should be replaced per customer.

## Pages
- `index.html` - homepage / main landing page
- `our-story.html` - Our Story page
- `book.html` - booking / reservation information page
- `find-us.html` - location and directions page
- `contact.html` - contact page with display-only form

All five pages are linked locally through the header and mobile menu. There are no local `gallery.html`, `objectives.html`, or privacy-policy pages in this template.

## Asset Folders
- `assets/vendor/veranda/` contains the saved local browser-export assets from the original pages. This includes the original page JS/CSS bundle, local support files, saved map/embed files, and assets that already existed in the exported `_files` folders.
- `assets/remote-downloads/` contains downloaded copies of remote static assets that are now actively used by the template for images, fonts, icons, and the two icon CSS libraries.
- `assets/remote-downloads/manifest.json` maps each original remote URL to the local downloaded file. Use this as the source of truth when localizing a future template in controlled batches.
- `assets/css/icon-fixes.css` is a small compatibility layer for social icons, Font Awesome, and Iconsax classes that were inconsistent in the saved WordPress output.

## Asset Loading Status
The template is now localized in a controlled way:

- active image, font, icon-font, favicon, and support-asset URLs now point to `assets/remote-downloads/...`
- Font Awesome CSS is loaded locally from `assets/remote-downloads/cdnjs.cloudflare.com/all.min-60ef7f8691cf.css`
- Iconsax CSS is loaded locally from `assets/remote-downloads/cdn.jsdelivr.net/icons-233b25f1ede1.css`
- the downloaded asset bundle contains 121 successful downloads out of 122 discovered remote assets
- the only failed asset was the invalid placeholder URL `https://i.ytimg.com/vi/ID/hqdefault.jpg`

Important: the active pages still depend on the large inline `style id="wpr-usedcss"` block copied from the original exported pages. That block is required for the WordPress/Porto layout to render correctly. If it is removed, the pages fall back to mostly unstyled HTML.

## Remaining External Integrations
The template is mostly local, but not fully offline. These remaining external references are intentional in the current stable version:

- YouTube video background URLs on the homepage.
- Google Maps direction links on `find-us.html` and `contact.html`.
- The invalid placeholder thumbnail URL `https://i.ytimg.com/vi/ID/hqdefault.jpg` still appears in markup, but it is not a link back to the original website.

There are no active links to `veranda4m.com` in the template pages.

If the template needs to become fully offline later, replace the YouTube and Google Maps dependencies with local/static alternatives.

## What Was Cleaned
- Removed saved-page comments and browser-extension noise.
- Removed backend form submission behavior from the contact form.
- Removed or disabled visible links to the original Veranda4M website and social profiles.
- Replaced the footer copyright text on every page with `This is an Example`.
- Disabled privacy/social/original outbound links with `href="#"` and `data-template-disabled-link="true"` until customer-specific destinations are added.
- Removed WordPress SEO/API/feed metadata that pointed back to the original site.
- Localized Porto config values where they referenced original WordPress theme/plugin URLs.
- Replaced visible phone numbers with `+40700000000`.

## Replication Workflow
Use this sequence for the next website template so the process stays predictable:

1. Copy the exported source page into a clean template HTML file.
2. Preserve the original structure, classes, and inline `wpr-usedcss` block.
3. Move page-to-page navigation to local template files.
4. Remove or disable visible outbound links to the original site and social profiles.
5. Replace footer copyright text with the neutral template footer text.
6. Keep forms visual-only unless a real backend is part of scope.
7. Download remote static assets first, but do not bulk-rewrite everything blindly.
8. Localize assets in batches:
   - images and uploaded media
   - favicon and logos
   - font files and icon fonts
   - external icon CSS files, only after confirming their internal font URLs resolve locally
9. After each batch, reload the pages visually before continuing.
10. Keep service URLs like YouTube or Maps external unless there is a clear offline replacement plan.

## Final State
`template-site-2` can be treated as complete for reuse.

Current status:
- all five pages render correctly as the finalized template set
- no active links point to `veranda4m.com`
- original visible social/site links are removed
- images, icons, fonts, and the two external icon CSS libraries are localized
- the template is suitable as the base for recreating the same structure for another property
- the only non-local pieces are intentional service integrations like YouTube and Google Maps

## Contact Form Behavior
The contact form on `contact.html` is visual only. It is intentionally not wired to a backend.

Current behavior:
- `action="#"`
- `onsubmit="return false;"`
- submit control is `type="button"`

When adapting this template for a real customer, connect the form to the desired backend, email service, CRM, or static form provider.

## Main Editable Areas
- site title, meta title, and meta description
- logo and favicon references
- hero text, CTA labels, and CTA links
- main headings and body copy on all pages
- image selections and image alt/title text
- Book page reservation copy, contact details, CTA text, and CTA destination
- Find Us page address, directions text, map embed/static map, and route link
- Contact page phone, email, address, form labels, and placeholders
- footer menu links, privacy link, social links, and footer text

## Notes For Future Template Work
- Keep edits local to `template-site-2` unless intentionally updating shared tooling.
- Prefer replacing content and image references in place before changing layout, because the template currently relies on saved WordPress/Porto classes.
- If adding a new page, copy one of the existing pages and preserve the local asset references in the head/footer.
- If localizing assets for a future template, use `assets/remote-downloads/manifest.json` as a reference, but change one asset category at a time and verify visually.
- If changing icons, prefer the existing local Font Awesome and Iconsax libraries before adding another icon system.
- If a page suddenly appears unstyled, check first whether the inline `wpr-usedcss` block is missing or damaged.

## Verification Checklist
Run these checks after major edits:

- Serve `template-site-2` locally and confirm all five pages return HTTP 200.
- Check that no visible links point to `veranda4m.com`, Facebook, Instagram, WhatsApp, or other original owner profiles.
- Check that no original phone number remains; visible/template phone should be `+40700000000`.
- Check that each page still contains exactly one `This is an Example` footer text.
- Check that local icon CSS is loaded from `assets/remote-downloads/cdnjs.cloudflare.com/all.min-60ef7f8691cf.css` and `assets/remote-downloads/cdn.jsdelivr.net/icons-233b25f1ede1.css`.
- Check remaining external URLs and confirm they are intentional for the current stable version.
