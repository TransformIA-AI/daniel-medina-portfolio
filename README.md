# Daniel Medina Sánchez Portfolio

Professional portfolio for **Daniel Medina Sánchez**:

AI Transformation, Digital Workplace, Operations Transformation and human-reviewed case studies.

Final repository:

```txt
https://github.com/TransformIA-AI/daniel-medina-portfolio
```

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- React
- lucide-react icons
- Static public CV downloads
- Vercel-ready metadata, sitemap and robots routes

## Install

```bash
npm install
```

## Development

```bash
npm run dev
```

Default local URL:

```txt
http://localhost:3000
```

## Validation

```bash
npm run lint
npm run build
```

## Public Asset Routes

CV PDFs are served from `public/cv/`:

```txt
/cv/daniel-medina-sanchez-cv-es.pdf
/cv/daniel-medina-sanchez-cv-en.pdf
/cv/daniel-medina-sanchez-cv-en-no-photo.pdf
```

The Figma Tier-S prototype source is retained as build reference only:

```txt
figma-source/Tier-S.zip
```

Handoff and boundary documents remain in `docs/` and are not exposed as public UI content.

## Structure

```txt
app/           Next.js routes, metadata, sitemap and robots
components/    Reusable UI sections and bilingual home blocks
content/       Portfolio content, bilingual copy and case studies
lib/           Constants and case helpers
public/        Public static assets, including CV PDFs
docs/          Handoff, deployment and content boundary notes
figma-source/  Tier-S visual source bundle
```

## Public Content Boundary

The public website must not expose:

- private TransformIA source code;
- customer data;
- API keys, credentials or secrets;
- private emails or internal documents;
- legal or litigation-sensitive material;
- full CS50 assessment solutions;
- unsupported ROI or compliance certification claims;
- autonomous recruitment, email or calendar actions.

## Next Steps

1. Add a production `NEXT_PUBLIC_SITE_URL` value in Vercel.
2. Add a real OpenGraph image under `public/og/` and reference it in metadata.
3. Run a browser/Lighthouse QA pass after deployment.
4. Decide whether to add an optional contact API route or keep contact as mail/LinkedIn only.
