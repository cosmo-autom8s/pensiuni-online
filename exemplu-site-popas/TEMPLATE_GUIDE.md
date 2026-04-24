# Popasul Caprioarelor Adaptation Notes

## Source
- Template base: `maxi-kabana-site`
- Target property: `https://iturist.ro/cazare/popasul-caprioarelor/`
- Working folder: `template-popas`

## Adaptation Goal
Create a minimal new site based on the existing template:
- keep template branding, colors, logo, and overall structure
- replace homepage text with Popasul Caprioarelor content
- use the provided local images for hero, about, rooms, and gallery
- leave `objectives.html` unchanged

## Images Provided Locally
Root-level images added by the user:
- `hero-placeholder.webp`
- `about-placeholder.webp`
- `room-placeholder-1.webp` through `room-placeholder-16.webp`

Mapped into the site as:
- `assets/img/common/hero-popas.webp`
- `assets/img/common/about-popas.webp`
- `assets/img/rooms/room-placeholder-*.webp`
- `assets/img/gallery/room-placeholder-*.webp`

## What Was Changed

### `index.html`
- updated page title and description
- replaced hero image with the provided Popas hero image
- changed hero title to `Popasul Caprioarelor`
- replaced about text with content based on the iTurist listing
- replaced about image with the provided Popas about image
- updated facilities to better match the property
- replaced room slider images with the provided room images
- replaced testimonial slider content with practical property details
- updated CTA image to the new hero image
- updated phone number to `+40.744.534.539`
- updated address to `Vama 727590, Romania`

### `gallery.html`
- updated page title and description
- replaced hero image with the provided Popas hero image
- removed the old Maxi gallery media set
- filled the gallery with the provided room images
- updated phone number and address

### `objectives.html`
- intentionally left as the template version

## Property Data Used
Taken from the iTurist listing:
- property name: `Pensiunea Popasul Caprioarelor`
- location: `Vama 727590, Romania`
- capacity: `6 persoane`
- spaces: `3 spatii de cazare`
- baths: `2 bai`
- phone: `0744 534 539`
- pricing reference: `de la 850 lei / noapte`

## What Was Intentionally Left Unchanged
- template logo
- template color palette
- footer example text
- objectives page content
- general visual style of the base template

## Notes
- this adaptation is intentionally minimal
- the site now functions as a first-pass property version using the provided images and source text
- if needed later, the next step would be refining branding, replacing logo/socials, and adding more exact local content
