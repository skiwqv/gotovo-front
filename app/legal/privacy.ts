import type { LegalDocSet } from './types'

export const privacy: LegalDocSet = {
  me: {
    title: 'Politika privatnosti',
    description: 'Koje podatke prikuplja sajt Gotovo, zašto i koliko dugo ih čuvamo.',
    intro:
      'Ova politika objašnjava koje lične podatke dobijamo preko sajta Gotovo, zašto su nam potrebni i koja su vaša prava. Prikupljamo samo ono što je potrebno da vas kontaktiramo u vezi sa besplatnim pilotom.',
    sections: [
      {
        title: 'Ko je odgovoran za podatke',
        body: ['Rukovalac podacima je {name}, Podgorica, Crna Gora. Za sva pitanja o podacima pišite na {email}.'],
      },
      {
        title: 'Koje podatke dobijamo',
        body: [
          'Kada pošaljete formu „Besplatni pilot”, čuvamo:',
          {
            list: [
              'ime ili kako da vam se obraćamo;',
              'kontakt: broj telefona ili korisničko ime na Viberu, WhatsAppu ili Telegramu;',
              'okvirni broj stanova i grad;',
              'jezik sajta, oznaku saglasnosti i datum i vrijeme slanja.',
            ],
          },
          'Ne tražimo i ne čuvamo podatke o plaćanju, dokumente niti podatke o vašim gostima.',
          'Sajt ne koristi kolačiće, analitiku ni reklamne tragače (više u Politici kolačića).',
        ],
      },
      {
        title: 'Zašto i na kom osnovu',
        body: [
          'Podaci nam služe samo da vas kontaktiramo, ispričamo o pilotu i dogovorimo povezivanje. Pravni osnov je vaša saglasnost, koju dajete označavanjem polja u formi.',
          'Saglasnost možete povući u bilo kom trenutku porukom na {email}. Povlačenje ne utiče na zakonitost obrade prije povlačenja.',
        ],
      },
      {
        title: 'Ko još ima pristup',
        body: [
          'Ne prodajemo podatke i ne dijelimo ih za reklame. Pristup imamo samo mi i servisi na kojima sajt radi:',
          {
            list: [
              'Supabase — baza podataka u kojoj se čuvaju prijave;',
              'Cloudflare — hosting sajta i zaštita od napada (tehnički podaci zahtjeva, npr. IP adresa);',
              'Telegram — obavještenje o novoj prijavi (ime, kontakt, broj stanova i grad) stiže nam u Telegram bot;',
              'Viber, WhatsApp ili Telegram — ako vam pišemo tamo, prepiska podliježe pravilima tog servisa.',
            ],
          },
        ],
      },
      {
        title: 'Prenos van Crne Gore',
        body: [
          'Serveri servisa Supabase i Cloudflare mogu biti van Crne Gore, uključujući EU i SAD. Ove kompanije obrađuju podatke po našem nalogu i primjenjuju standardne ugovorne klauzule i druge mjere zaštite predviđene za takve prenose.',
          'Obavještenja o prijavama čuvaju se u Telegramu, na njegovim serverima van Crne Gore, i podliježu pravilima tog servisa.',
        ],
      },
      {
        title: 'Koliko dugo čuvamo podatke',
        body: [
          'Prijavu čuvamo dok razgovaramo o pilotu, a najduže 12 mjeseci od posljednjeg kontakta. Ako postanete klijent, podaci prelaze u vaš radni nalog pod uslovima ugovora. Na vaš zahtjev brišemo ih i ranije.',
        ],
      },
      {
        title: 'Vaša prava',
        body: [
          'Imate pravo da:',
          {
            list: [
              'saznate koje podatke o vama čuvamo i dobijete njihovu kopiju;',
              'ispravite netačne podatke;',
              'tražite brisanje ili ograničenje obrade;',
              'uložite prigovor na obradu i povučete saglasnost;',
              'dobijete podatke u uobičajenom mašinski čitljivom formatu.',
            ],
          },
          'Da biste iskoristili neko pravo, pišite na {email} — odgovorićemo u roku od 30 dana. Možete podnijeti i pritužbu Agenciji za zaštitu ličnih podataka i slobodan pristup informacijama (AZLP).',
        ],
      },
      {
        title: 'Bezbjednost',
        body: [
          'Pristup prijavama imamo samo mi. Preko sajta prijava se može samo poslati: tuđe podatke spolja nije moguće pročitati ni izmijeniti. Veza sa sajtom je šifrovana (HTTPS).',
        ],
      },
      {
        title: 'Izmjene politike',
        body: [
          'Ako se politika promijeni, ažuriraćemo ovu stranicu i datum na vrhu. O bitnim izmjenama obavijestićemo one koji su ostavili prijavu.',
        ],
      },
    ],
  },

  ru: {
    title: 'Политика конфиденциальности',
    description: 'Какие данные собирает сайт Gotovo, зачем и как долго мы их храним.',
    intro:
      'Эта политика объясняет, какие персональные данные мы получаем через сайт Gotovo, зачем они нужны и какие у вас права. Мы собираем только то, что нужно, чтобы связаться с вами по бесплатному пилоту.',
    sections: [
      {
        title: 'Кто отвечает за данные',
        body: ['Оператор данных — {name}, Подгорица, Черногория. По любым вопросам о данных пишите на {email}.'],
      },
      {
        title: 'Какие данные мы получаем',
        body: [
          'Когда вы отправляете форму «Бесплатный пилот», мы сохраняем:',
          {
            list: [
              'имя или как к вам обращаться;',
              'контакт: номер телефона или имя пользователя в Viber, WhatsApp или Telegram;',
              'примерное число квартир и город;',
              'язык сайта, отметку о согласии, дату и время отправки.',
            ],
          },
          'Мы не просим и не храним платёжные данные, документы или данные ваших гостей.',
          'Сайт не использует cookie, аналитику и рекламные трекеры (подробнее — в Политике cookie).',
        ],
      },
      {
        title: 'Зачем и на каком основании',
        body: [
          'Данные нужны только для того, чтобы связаться с вами, рассказать о пилоте и договориться о подключении. Основание — ваше согласие, которое вы даёте отметкой в форме.',
          'Согласие можно отозвать в любой момент, написав на {email}. Отзыв не влияет на законность обработки до него.',
        ],
      },
      {
        title: 'Кто ещё имеет доступ',
        body: [
          'Мы не продаём данные и не передаём их для рекламы. Доступ есть только у нас и у сервисов, на которых работает сайт:',
          {
            list: [
              'Supabase — база данных, где хранятся заявки;',
              'Cloudflare — хостинг сайта и защита от атак (технические данные запросов, например IP-адрес);',
              'Telegram — уведомление о новой заявке (имя, контакт, число квартир и город) приходит нам в Telegram-бот;',
              'Viber, WhatsApp или Telegram — если мы пишем вам туда, переписка регулируется правилами этого сервиса.',
            ],
          },
        ],
      },
      {
        title: 'Передача за пределы Черногории',
        body: [
          'Серверы Supabase и Cloudflare могут находиться за пределами Черногории, в том числе в ЕС и США. Эти компании обрабатывают данные по нашему поручению и применяют стандартные договорные условия и другие меры защиты, предусмотренные для таких передач.',
          'Уведомления о заявках хранятся в Telegram, на его серверах за пределами Черногории, и регулируются правилами этого сервиса.',
        ],
      },
      {
        title: 'Сколько мы храним данные',
        body: [
          'Заявку храним, пока обсуждаем пилот, и не дольше 12 месяцев после последнего контакта. Если вы станете клиентом, данные перейдут в рабочий аккаунт на условиях договора. По вашей просьбе удалим их раньше.',
        ],
      },
      {
        title: 'Ваши права',
        body: [
          'Вы вправе:',
          {
            list: [
              'узнать, какие данные о вас хранятся, и получить их копию;',
              'исправить неточные данные;',
              'потребовать удаления или ограничения обработки;',
              'возразить против обработки и отозвать согласие;',
              'получить данные в обычном машиночитаемом формате.',
            ],
          },
          'Чтобы воспользоваться правом, напишите на {email} — ответим в течение 30 дней. Вы также можете подать жалобу в Агентство по защите персональных данных и свободному доступу к информации Черногории (AZLP).',
        ],
      },
      {
        title: 'Безопасность',
        body: [
          'Доступ к заявкам есть только у нас. Через сайт заявку можно только отправить: прочитать или изменить чужие данные снаружи невозможно. Соединение с сайтом шифруется (HTTPS).',
        ],
      },
      {
        title: 'Изменения политики',
        body: [
          'Если политика изменится, мы обновим эту страницу и дату вверху. О существенных изменениях сообщим тем, кто оставил заявку.',
        ],
      },
    ],
  },

  en: {
    title: 'Privacy Policy',
    description: 'What data the Gotovo website collects, why, and how long we keep it.',
    intro:
      'This policy explains what personal data we receive through the Gotovo website, why we need it and what your rights are. We only collect what we need to contact you about the free pilot.',
    sections: [
      {
        title: 'Who is responsible for your data',
        body: ['The data controller is {name}, Podgorica, Montenegro. For any questions about your data, write to {email}.'],
      },
      {
        title: 'What data we receive',
        body: [
          'When you submit the “Free pilot” form, we store:',
          {
            list: [
              'your name or how you would like to be addressed;',
              'your contact: phone number or username on Viber, WhatsApp or Telegram;',
              'the approximate number of apartments and the city;',
              'the website language, your consent, and the date and time of submission.',
            ],
          },
          'We do not ask for or store payment details, documents or data about your guests.',
          'The website does not use cookies, analytics or advertising trackers (see the Cookie Policy).',
        ],
      },
      {
        title: 'Why and on what basis',
        body: [
          'We use the data only to contact you, tell you about the pilot and arrange onboarding. The legal basis is your consent, which you give by ticking the box in the form.',
          'You can withdraw your consent at any time by writing to {email}. Withdrawal does not affect the lawfulness of processing before it.',
        ],
      },
      {
        title: 'Who else has access',
        body: [
          'We do not sell your data or share it for advertising. Only we and the services the website runs on have access:',
          {
            list: [
              'Supabase — the database where requests are stored;',
              'Cloudflare — website hosting and attack protection (technical request data such as IP address);',
              'Telegram — a notification about a new request (name, contact, number of apartments and city) is sent to our Telegram bot;',
              'Viber, WhatsApp or Telegram — if we message you there, the conversation is subject to that service’s rules.',
            ],
          },
        ],
      },
      {
        title: 'Transfers outside Montenegro',
        body: [
          'Supabase and Cloudflare servers may be located outside Montenegro, including in the EU and the USA. These companies process data on our behalf and apply standard contractual clauses and other safeguards intended for such transfers.',
          'Request notifications are stored in Telegram, on its servers outside Montenegro, and are subject to that service’s rules.',
        ],
      },
      {
        title: 'How long we keep data',
        body: [
          'We keep your request while we discuss the pilot, and no longer than 12 months after our last contact. If you become a customer, the data moves to your working account under the terms of the agreement. On request, we delete it sooner.',
        ],
      },
      {
        title: 'Your rights',
        body: [
          'You have the right to:',
          {
            list: [
              'find out what data we hold about you and get a copy;',
              'correct inaccurate data;',
              'request erasure or restriction of processing;',
              'object to processing and withdraw your consent;',
              'receive your data in a common machine-readable format.',
            ],
          },
          'To exercise a right, write to {email} — we will reply within 30 days. You can also lodge a complaint with the Agency for Personal Data Protection and Free Access to Information of Montenegro (AZLP).',
        ],
      },
      {
        title: 'Security',
        body: [
          'Only we have access to requests. Through the website a request can only be submitted: other people’s data cannot be read or changed from outside. The connection to the website is encrypted (HTTPS).',
        ],
      },
      {
        title: 'Changes to this policy',
        body: [
          'If this policy changes, we will update this page and the date at the top. We will notify people who left a request about significant changes.',
        ],
      },
    ],
  },
}
