alter table public.pilot_requests
  add constraint pilot_requests_contact_format_check check (
    contact ~* '^@[a-z][a-z0-9_]{4,31}$'
    or (
      contact ~ '^\+?[0-9 ().-]+$'
      and char_length(regexp_replace(contact, '[^0-9]', '', 'g')) between 8 and 15
    )
  ) not valid;
