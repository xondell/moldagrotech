# Vercel setup for MoldAgroTech

## 1. Import the GitHub repository

In Vercel choose **Add New → Project → Import Git Repository** and select the public MoldAgroTech repository created by `setup-public-github.sh`.

Framework preset should be detected as **Next.js**. Leave Build Command as `next build` / default and Output Directory as the Next.js default.

## 2. Environment variables

Add these under **Project Settings → Environment Variables** for **Production, Preview, and Development**:

```text
SUPABASE_URL=https://vbyssbhxijobkzyhlmks.supabase.co
SUPABASE_SECRET_KEY=<copy your sb_secret_... key from Supabase>
```

Get the secret key from **Supabase → MoldAgroTech → Settings → API Keys → Secret keys**.

Do **not** prefix the secret with `NEXT_PUBLIC_` and never commit it to GitHub.

If you only have the old JWT-based service-role key, use this instead of `SUPABASE_SECRET_KEY`:

```text
SUPABASE_SERVICE_ROLE_KEY=<legacy service_role key>
```

The new `sb_secret_...` key is preferred.

## 3. Site URL

No site URL variable is required for the first deployment: the app detects Vercel's production URL automatically.

When a final custom domain is connected, add:

```text
NEXT_PUBLIC_SITE_URL=https://your-domain.example
```

Then redeploy so canonical URLs, sitemap and OpenGraph metadata use the custom domain.

## 4. Deploy

Click **Deploy**. After deployment, open `/ro/contact` and submit a test request. It should appear in `public.leads` in Supabase.
