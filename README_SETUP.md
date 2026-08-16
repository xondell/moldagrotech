# One-command GitHub setup

From the project folder on Ubuntu/Linux:

```bash
chmod +x setup-public-github.sh
./setup-public-github.sh
```

The script will:

1. Check Git, GitHub CLI, Node.js and npm.
2. Authenticate GitHub CLI if needed.
3. Ask for your Supabase backend key without displaying it.
4. Create `.env.local` for the existing MoldAgroTech Supabase project.
5. Install dependencies and run TypeScript/build checks.
6. Initialize Git and commit the project.
7. Create a **public** GitHub repository and push `main`.
8. Keep `.env.local` and Supabase secrets out of Git.

Supabase project reference: `vbyssbhxijobkzyhlmks`.
