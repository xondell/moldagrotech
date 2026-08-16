# MoldAgroTech Website

Production-oriented multilingual website for **MoldAgroTech**, a Moldovan AgriTech company focused on agricultural data, IoT, automation, analytics and AI-assisted decision support.

## Stack

- Next.js App Router
- React + TypeScript strict mode
- Tailwind CSS
- Supabase lead storage
- Vercel-ready deployment
- Romanian / Russian / English routes

## Routes

`/` redirects to `/ro`.

Each locale exposes:

- `/[locale]`
- `/[locale]/solutions`
- `/[locale]/technology`
- `/[locale]/industries`
- `/[locale]/about`
- `/[locale]/partners`
- `/[locale]/insights`
- `/[locale]/contact`

Legal placeholders are present under `/[locale]/legal/*` and **must be replaced/reviewed before commercial launch**.

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Quality checks:

```bash
npm run typecheck
npm run lint
npm run build
```

## Supabase lead storage

1. Create a Supabase project.
2. Run `supabase/migrations/001_leads.sql` in the SQL editor or via Supabase CLI.
3. Set:

```env
NEXT_PUBLIC_SUPABASE_URL=...
SUPABASE_SERVICE_ROLE_KEY=...
```

The service role key is used only in the server route `src/app/api/leads/route.ts`. Never expose it as a `NEXT_PUBLIC_*` variable.

The public form uses server-side validation, a honeypot and minimum-submit-time check. For a high-traffic production deployment, add edge/distributed rate limiting and optionally Turnstile before launch.

## Content policy inside the project

No clients, partners, team members, awards, statistics, testimonials or performance claims are fabricated. The site intentionally omits fake logos and business metrics. Product UI values are explicitly labeled as demo data.

Before launch, supply verified:

- company phone/email/address/social links;
- legal entity information;
- team profiles;
- product availability/status;
- case studies and measured outcomes;
- real partner logos with permission;
- real agricultural photography and usage rights.

## Visual assets

The hero uses an original vector/data composition to avoid shipping unlicensed stock photography. Replace or complement it with verified Moldova/Eastern Europe agricultural photography when approved assets are available.

## Deployment

Push the repository to GitHub, import it into Vercel, configure environment variables, and deploy. Set `NEXT_PUBLIC_SITE_URL` to the production canonical domain.

## Automated GitHub + Supabase setup

For Ubuntu/Linux, run:

```bash
chmod +x setup-public-github.sh
./setup-public-github.sh
```

The script creates/pushes a **public** GitHub repository and writes the Supabase backend connection only to ignored `.env.local`. See `VERCEL_SETUP.md` for deployment variables.
