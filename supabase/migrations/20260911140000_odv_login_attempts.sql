create table if not exists public.odv_login_attempts (
  id bigint generated always as identity primary key,
  ip text not null,
  attempted_at timestamptz not null default now()
);

create index if not exists odv_login_attempts_ip_time_idx
  on public.odv_login_attempts (ip, attempted_at);

alter table public.odv_login_attempts enable row level security;

revoke all on public.odv_login_attempts from anon, authenticated;
