#!/usr/bin/env bash
set -euo pipefail

SUPABASE_URL="https://vbyssbhxijobkzyhlmks.supabase.co"
DEFAULT_REPO="moldagrotech"

say() { printf '\n\033[1;32m%s\033[0m\n' "$*"; }
fail() { printf '\nERROR: %s\n' "$*" >&2; exit 1; }
need() { command -v "$1" >/dev/null 2>&1 || fail "Missing '$1'. Install it and run this script again."; }

cd "$(dirname "$0")"

need git
need gh
need node
need npm

say "1/6 GitHub authentication"
if ! gh auth status >/dev/null 2>&1; then
  echo "GitHub CLI is not authenticated. A browser login will open."
  gh auth login --web --git-protocol https
fi

GH_LOGIN="$(gh api user --jq .login)"
read -r -p "Public GitHub repository name [$DEFAULT_REPO]: " REPO_NAME
REPO_NAME="${REPO_NAME:-$DEFAULT_REPO}"
[[ "$REPO_NAME" =~ ^[A-Za-z0-9._-]+$ ]] || fail "Invalid GitHub repository name."

say "2/6 Supabase server connection"
echo "Project: MoldAgroTech"
echo "URL:     $SUPABASE_URL"
echo "Paste a Supabase backend key. Prefer Settings > API Keys > Secret key (sb_secret_...)."
read -r -s -p "Supabase secret/service-role key: " SUPABASE_BACKEND_KEY
printf '\n'
[[ -n "$SUPABASE_BACKEND_KEY" ]] || fail "Supabase key cannot be empty."

umask 077
if [[ "$SUPABASE_BACKEND_KEY" == sb_secret_* ]]; then
  cat > .env.local <<ENV
SUPABASE_URL=$SUPABASE_URL
SUPABASE_SECRET_KEY=$SUPABASE_BACKEND_KEY
ENV
else
  cat > .env.local <<ENV
SUPABASE_URL=$SUPABASE_URL
SUPABASE_SERVICE_ROLE_KEY=$SUPABASE_BACKEND_KEY
ENV
  echo "Note: a legacy service_role key was supplied. It works, but sb_secret_ is recommended."
fi

# Safety check: the secret file MUST be ignored before git add.
git check-ignore -q .env.local || fail ".env.local is not ignored by Git. Refusing to continue."

say "3/6 Install and validate"
npm install
npm run typecheck
npm run build

say "4/6 Initialize Git"
if [[ ! -d .git ]]; then
  git init
fi
git branch -M main

if ! git config user.name >/dev/null 2>&1; then
  git config user.name "$GH_LOGIN"
fi
if ! git config user.email >/dev/null 2>&1; then
  read -r -p "Git commit email: " GIT_EMAIL
  [[ -n "$GIT_EMAIL" ]] || fail "Git email is required for the first commit."
  git config user.email "$GIT_EMAIL"
fi

git add .
if git diff --cached --quiet; then
  echo "No new files to commit."
else
  git commit -m "Initial MoldAgroTech website"
fi

say "5/6 Create PUBLIC GitHub repository and push"
if gh repo view "$GH_LOGIN/$REPO_NAME" >/dev/null 2>&1; then
  echo "Repository $GH_LOGIN/$REPO_NAME already exists; using it."
  if git remote get-url origin >/dev/null 2>&1; then
    git remote set-url origin "https://github.com/$GH_LOGIN/$REPO_NAME.git"
  else
    git remote add origin "https://github.com/$GH_LOGIN/$REPO_NAME.git"
  fi
  gh repo edit "$GH_LOGIN/$REPO_NAME" --visibility public --accept-visibility-change-consequences
  git push -u origin main
else
  gh repo create "$REPO_NAME" --public --source=. --remote=origin --push \
    --description "MoldAgroTech — agricultural technology from Moldova"
fi

say "6/6 Done"
echo "Public repository: https://github.com/$GH_LOGIN/$REPO_NAME"
echo "Supabase URL is configured locally in .env.local."
echo ".env.local was NOT committed."
echo
echo "Vercel variables to add:"
echo "  SUPABASE_URL=$SUPABASE_URL"
if [[ "$SUPABASE_BACKEND_KEY" == sb_secret_* ]]; then
  echo "  SUPABASE_SECRET_KEY=<your sb_secret_ key>"
else
  echo "  SUPABASE_SERVICE_ROLE_KEY=<your legacy service_role key>"
fi
echo "Set them for Production, Preview and Development."
echo "NEXT_PUBLIC_SITE_URL is optional; Vercel URL is detected automatically."
