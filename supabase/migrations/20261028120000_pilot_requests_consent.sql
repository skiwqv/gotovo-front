alter table public.pilot_requests add column consent boolean;

comment on column public.pilot_requests.consent is 'Согласие на обработку данных по Политике конфиденциальности; время — created_at.';

alter table public.pilot_requests
  add constraint pilot_requests_consent_check check (consent is true) not valid;

grant insert (consent) on public.pilot_requests to anon;
