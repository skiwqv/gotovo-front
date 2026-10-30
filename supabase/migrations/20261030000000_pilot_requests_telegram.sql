create extension if not exists pg_net with schema extensions;

create schema if not exists private;
revoke all on schema private from public, anon, authenticated;

create or replace function private.notify_pilot_request()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  bot_token text;
  chat_id text;
  city_name text;
  message text;
begin
  select decrypted_secret into bot_token from vault.decrypted_secrets where name = 'telegram_bot_token';
  select decrypted_secret into chat_id from vault.decrypted_secrets where name = 'telegram_chat_id';

  if bot_token is null or chat_id is null then
    return new;
  end if;

  city_name := case new.city
    when 'budva' then 'Будва'
    when 'kotor' then 'Котор'
    when 'tivat' then 'Тиват'
    when 'bar' then 'Бар'
    when 'herceg-novi' then 'Херцег-Нови'
    when 'podgorica' then 'Подгорица'
    else 'Другой'
  end;

  message := concat_ws(
    E'\n',
    'Новая заявка на пилот',
    '',
    'Имя: ' || new.name,
    'Контакт: ' || new.contact,
    'Квартир: ' || replace(new.apartments, '-', '–'),
    'Город: ' || city_name,
    'Язык сайта: ' || upper(new.locale),
    'Время: ' || to_char(new.created_at at time zone 'Europe/Podgorica', 'DD.MM.YYYY HH24:MI')
  );

  perform net.http_post(
    url := 'https://api.telegram.org/bot' || bot_token || '/sendMessage',
    body := jsonb_build_object('chat_id', chat_id, 'text', message, 'disable_web_page_preview', true),
    headers := '{"Content-Type": "application/json"}'::jsonb,
    timeout_milliseconds := 5000
  );

  return new;
exception
  when others then
    return new;
end;
$$;

revoke all on function private.notify_pilot_request() from public, anon, authenticated;

drop trigger if exists pilot_requests_notify_telegram on public.pilot_requests;

create trigger pilot_requests_notify_telegram
  after insert on public.pilot_requests
  for each row
  execute function private.notify_pilot_request();
