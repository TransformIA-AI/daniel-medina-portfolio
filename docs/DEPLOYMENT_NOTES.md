# Deployment Notes

## Target Deployment

- **GitHub repository:** `TransformIA-Exocortex/daniel-medina-portfolio`
- **Framework:** Next.js App Router
- **Hosting:** Vercel
- **Domain:** pending

## Environment Variables (for future use)

```env
NEXT_PUBLIC_SITE_URL=
N8N_WEBHOOK_URL=
AI_PROVIDER_API_KEY=
```

> Current v0.1 should not require live API keys.

## Rules

- Recruiter Concierge should be deterministic until explicitly upgraded.
- Contact form may return mocked success until n8n webhook is approved.
- No secrets in the repo. Use Vercel Environment Variables panel for all credentials.

## Vercel Deployment

1. Push to `main` branch.
2. Connect repo at [vercel.com/new](https://vercel.com/new).
3. Select Next.js preset (auto-detected).
4. Add environment variables in Vercel dashboard.
5. Deploy.

Vercel will auto-deploy on every push to `main`.
