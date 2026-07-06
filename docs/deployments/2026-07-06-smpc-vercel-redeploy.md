# SMPC Vercel redeploy trigger

Date: 2026-07-06

Purpose: trigger a new Vercel production deployment after connecting the project to GitHub.

Context:

- The portfolio was updated to include the CertiProf SMPC(R) Scrum Master Professional Certification milestone.
- PR #1 was merged into `main` before the Vercel project had Git connected.
- This commit exists only to trigger a fresh deployment from the current `main` branch.

Expected production checks after deployment:

- `/es` displays the CertiProf SMPC(R) certification milestone in the hero.
- `/generated-cv/daniel-medina-sanchez-cv-es.pdf` returns an updated PDF.
- `/generated-cv/daniel-medina-sanchez-cv-en.pdf` returns an updated PDF.
- `/generated-cv/daniel-medina-sanchez-cv-en-no-photo.pdf` returns an updated PDF.
