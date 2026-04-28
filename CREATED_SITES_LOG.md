# Created Sites Log

Tracked log for websites generated from the local template workflow.

`created-sites/` is ignored by git because it contains generated site outputs and local media. This file is tracked by git and should record what was created, when it was created, what template was used, and later changes, issues, or fixes.

## Created Sites

| Site | Folder | Created Date | Template | Source Materials | Summary | Status | Notes |
|---|---|---:|---|---|---|---|---|
| Coliba Drumetului | `created-sites/coliba-drumetului/` | 2026-04-28 | `template-site/` | Local photos folder; `Reviews Coliba Drumeţului.md` | Accommodation website for Coliba Drumetului, adapted for the Vatra Dornei area. | Draft/local | First generated site in this batch. Uses the shared Vatra Dornei objectives content. |
| Casa Eco Dorna | `created-sites/casa-eco-dorna/` | 2026-04-28 | `template-site/` | Local photos folder; `Reviews Casa Eco Dorna.md` | Accommodation website for Casa Eco Dorna, adapted from the same template. | Draft/local | Photos were copied into the site's `assets/` structure as part of the updated workflow. |
| Waldhaus | `created-sites/waldhaus/` | 2026-04-28 | `template-site/` | Local photos folder; `Reviews Pensiunea Waldhaus.md` | Accommodation website for Pensiunea Waldhaus, adapted for the Vatra Dornei area. | Draft/local | Uses the same shared objectives structure and localized assets workflow. |
| Siady | `created-sites/siady/` | 2026-04-28 | `template-site/` | Local photos folder; `Reviews Pensiunea Siady.md` | Accommodation website for Pensiunea Siady, adapted from the same template. | Draft/local | Uses the same shared objectives structure and localized assets workflow. |
| Beatrice | `created-sites/beatrice/` | 2026-04-28 | `template-site/` | Local photos folder; `Reviews Pensiunea Beatrice.md` | Accommodation website for Pensiunea Beatrice, adapted from the same template. | Draft/local | Used as the first test site for the mobile hero visibility fix. |

## Changes / Issues Log

| Date | Site | Type | Summary | Files/Area | Status | Notes |
|---|---|---|---|---|---|---|
| 2026-04-28 | All created sites | Organization | Moved newly generated site folders into `created-sites/`. | Repository structure | Applied | Current generated sites: Coliba Drumetului, Casa Eco Dorna, Waldhaus, Siady, Beatrice. |
| 2026-04-28 | All future created sites | Documentation | Documented that future generated sites must be created inside `created-sites/<site-name>/`. | `README.md`; `SOP_WEBSITE_CLONING.md` | Applied | Keeps templates and generated outputs separated. |
| 2026-04-28 | All created sites | Git hygiene | Added `created-sites/` to `.gitignore` so generated site outputs and local media are not committed. | `.gitignore` | Applied | This log remains tracked even though generated site folders are ignored. |
| 2026-04-28 | Beatrice | Fix | Adjusted mobile hero image behavior after screenshots showed excessive cropping/zooming on mobile. | `created-sites/beatrice/assets/css/template.css` | Applied to Beatrice only | Waiting for mobile review before applying the same fix to the other generated sites. |
