create extension if not exists pgcrypto;

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 1 and 120),
  company text not null default '' check (char_length(company) <= 180),
  email text not null check (char_length(email) <= 200),
  phone text not null default '' check (char_length(phone) <= 80),
  location text not null default '' check (char_length(location) <= 180),
  farm_size text not null default '' check (char_length(farm_size) <= 120),
  interest text not null check (char_length(interest) between 1 and 120),
  message text not null check (char_length(message) between 1 and 3000),
  language text not null check (language in ('ro','ru','en')),
  source_page text not null default '' check (char_length(source_page) <= 250),
  status text not null default 'new' check (status in ('new','contacted','qualified','closed','rejected')),
  created_at timestamptz not null default now()
);

alter table public.leads enable row level security;
revoke all on table public.leads from anon, authenticated;
-- New Supabase projects no longer auto-expose public tables through the Data API.
-- The public website writes only through the server-side API using the service role key.
grant insert on table public.leads to service_role;
-- No service-role key is ever exposed to browser code.
create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_status_idx on public.leads (status);
