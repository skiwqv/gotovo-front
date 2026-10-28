create table public.pilot_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null check (char_length(btrim(name)) between 2 and 100),
  contact text not null check (char_length(btrim(contact)) between 3 and 100),
  apartments text not null check (apartments in ('1-4', '5-14', '15-49', '50+')),
  city text not null check (city in ('budva', 'kotor', 'tivat', 'bar', 'herceg-novi', 'podgorica', 'other')),
  locale text not null check (locale in ('me', 'ru', 'en'))
);

comment on table public.pilot_requests is 'Заявки на пилот с лендинга. Читать — только из панели Supabase / service_role.';

alter table public.pilot_requests enable row level security;

revoke all on public.pilot_requests from anon, authenticated;
grant insert (name, contact, apartments, city, locale) on public.pilot_requests to anon;

create policy "Посетитель лендинга может оставить заявку"
  on public.pilot_requests
  for insert
  to anon
  with check (true);
