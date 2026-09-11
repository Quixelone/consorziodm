create table if not exists public.whistleblowing_reports (
  id uuid primary key default gen_random_uuid(),
  ticket_code text not null unique,
  status text not null default 'ricevuta'
    check (status in ('ricevuta', 'presa_in_carico', 'verifica', 'provvedimenti', 'archiviata')),
  category text not null,
  description text not null,
  is_anonymous boolean not null default true,
  reporter_name text,
  reporter_email text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.whistleblowing_updates (
  id uuid primary key default gen_random_uuid(),
  report_id uuid not null references public.whistleblowing_reports (id) on delete cascade,
  status text not null
    check (status in ('ricevuta', 'presa_in_carico', 'verifica', 'provvedimenti', 'archiviata')),
  message text not null,
  created_at timestamptz not null default now()
);

create index if not exists whistleblowing_updates_report_id_idx
  on public.whistleblowing_updates (report_id, created_at);

alter table public.whistleblowing_reports enable row level security;
alter table public.whistleblowing_updates enable row level security;

revoke all on public.whistleblowing_reports from anon, authenticated;
revoke all on public.whistleblowing_updates from anon, authenticated;
