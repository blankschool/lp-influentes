

# UTM Passthrough to External Form

## What
Create a utility that captures UTM parameters from the landing page URL and appends them to all CTA links pointing to `https://formsinfluentes.blankschool.com.br/`.

## How

### 1. Create `src/lib/utm.ts` utility
- On page load, read `window.location.search` and extract all UTM params (`utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`, plus any custom ones)
- Export a function `getFormUrl()` that returns the base form URL with all captured UTM params appended as query string

### 2. Update all CTA buttons across 6 files
Replace every `href="#investimento"` or `href="#"` on "Enviar Aplicacao" buttons with a call to `getFormUrl()`, opening in a new tab (`target="_blank"`).

**Files to update:**
- `HeroSection.tsx` — 1 CTA button
- `Navbar.tsx` — 1 CTA button (keep nav anchor links like Estrutura/Conselheiros/Cases/Investimento as internal `#` links)
- `CasesSection.tsx` — 1 CTA button
- `ParaQuemSection.tsx` — 1 CTA button
- `InvestimentoSection.tsx` — 1 CTA button
- `CloseSection.tsx` — 1 CTA button

Each component will import `getFormUrl` and use it in the `href`. Since the URL depends on `window.location.search` (which doesn't change during the session), a simple function call at render time is sufficient — no React state needed.

