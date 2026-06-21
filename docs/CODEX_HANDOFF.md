# Codex Handoff — Daniel Medina Portfolio

## Mission

Convert the Figma Make prototype bundle into a production-ready professional portfolio website for Daniel Medina Sánchez.

The final website should be built with:

- Next.js App Router
- TypeScript
- Tailwind
- MDX or structured content files for case studies
- Vercel deployment
- Public-safe boundaries
- Real CV download links
- Deterministic Recruiter Concierge demo

## Source Material

- Figma Make source bundle: `/figma-source/figma-tier-s-source.zip`
- Final CV PDFs: `/public/cv/`
- Initial case study stubs: `/content/cases/`

## Profile Positioning

**Daniel Medina Sánchez**  
AI Transformation & Digital Operations Leader  
Digital Workplace · Public Sector · ITSM · Human-in-the-Loop · CS50x + CS50AI

**Value proposition:**  
Hybrid business + technology + AI executive with 15+ years leading complex operations, teams of up to 560 people and €12M+ P&L responsibility. Experience across digital transformation, public sector, Digital Workplace, ITSM, CX, insurance and applied AI. Technical foundation reinforced by HarvardX CS50x and CS50AI. Specialized in turning operational complexity into productive, automated, measurable and governed systems with human-in-the-loop oversight.

## Required Routes

```
/
/case/ayesa-digital-workplace
/case/konecta-operations-transformation
/case/transformia-hitl-ai-lab
/case/harvardx-cs50-ai-foundation
/assets
/design-system
```

## Required Features

### Home
- Hero
- Metrics strip
- Value areas
- Case studies
- TransformIA AI Lab / Proof of Work
- HarvardX / CS50 credential
- Recruiter Concierge demo
- Contact / CTA
- CV download buttons

### CV Downloads

Use exact paths:
```
/cv/Daniel_Medina_Sanchez_CV_ES.pdf
/cv/Daniel_Medina_Sanchez_CV_EN.pdf
/cv/Daniel_Medina_Sanchez_CV_EN_No_photo.pdf
```

### Recruiter Concierge

Implement as deterministic public-safe demo first. It should:
- answer selected recruiter questions based on public profile content;
- show fit score;
- recommend CV version;
- include "Pending Daniel approval";
- never create calendar events automatically;
- never send emails automatically;
- never imply autonomous recruitment action.

## Public-safe Rules

Do not expose:
- private TransformIA code;
- secrets;
- API keys;
- actual customer data;
- raw internal evidence;
- CS50 full solutions;
- legal/litigation information;
- private communications;
- false ROI guarantees;
- compliance certification claims.

## Recommended Final Structure

```
/app
  layout.tsx
  page.tsx
  case/[slug]/page.tsx
  assets/page.tsx
  design-system/page.tsx
  api/contact/route.ts
  sitemap.ts
  robots.ts
/components
  nav.tsx
  footer.tsx
  hero.tsx
  metrics-strip.tsx
  value-areas.tsx
  case-card.tsx
  recruiter-concierge.tsx
  contact-section.tsx
  cv-download-buttons.tsx
  linkedin-assets.tsx
  design-system-preview.tsx
/content
  cases/
    ayesa-digital-workplace.mdx
    konecta-operations-transformation.mdx
    transformia-hitl-ai-lab.mdx
    harvardx-cs50-ai-foundation.mdx
/public
  cv/
  og/
  assets/
/lib
  cases.ts
  seo.ts
  constants.ts
  public-safe.ts
```

## Acceptance Criteria

- [ ] Next.js build passes.
- [ ] TypeScript passes.
- [ ] No broken internal links.
- [ ] No `href="#"`.
- [ ] CV downloads work.
- [ ] All required routes render.
- [ ] Mobile responsive.
- [ ] Recruiter Concierge works deterministically.
- [ ] Public-safe boundaries are respected.
- [ ] README explains setup and deployment.
- [ ] Vercel deploy instructions included.
