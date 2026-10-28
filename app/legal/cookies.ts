import type { LegalDocSet } from './types'

export const cookies: LegalDocSet = {
  me: {
    title: 'Politika kolačića',
    description: 'Da li sajt Gotovo koristi kolačiće i tragače (ukratko: ne).',
    intro: 'Ukratko: sajt Gotovo ne koristi kolačiće, analitiku ni reklamne tragače. Zato na sajtu nema banera za saglasnost za kolačiće.',
    sections: [
      {
        title: 'Šta su kolačići',
        body: [
          'Kolačići (cookies) su male datoteke koje sajt čuva u pregledaču, npr. da zapamti prijavu ili prebroji posjete. Slično rade i lokalno skladište pregledača i pikseli za praćenje.',
        ],
      },
      {
        title: 'Šta koristi naš sajt',
        body: [
          {
            list: [
              'ne postavljamo kolačiće;',
              'ne koristimo Google Analytics, reklamne piksele niti druge brojače;',
              'fontove učitavamo sa sopstvenog servera, a ne sa Google Fonts, pa treće strane ne vide vašu posjetu;',
              'jezik sajta određuje adresa stranice (/ru, /en), a ne kolačić.',
            ],
          },
        ],
      },
      {
        title: 'Tehnički podaci hostinga',
        body: [
          'Sajt je hostovan na Cloudflare-u. Radi zaštite od napada Cloudflare obrađuje tehničke podatke zahtjeva (npr. IP adresu). Ako primijeti sumnjiv saobraćaj, može postaviti strogo neophodan zaštitni kolačić — on se ne koristi za praćenje ni reklame.',
        ],
      },
      {
        title: 'Ako se nešto promijeni',
        body: [
          'Ako dodamo analitiku ili druge tehnologije, ažuriraćemo ovu stranicu, a gdje to zakon zahtijeva — prvo ćemo tražiti vašu saglasnost.',
        ],
      },
      {
        title: 'Kako upravljati kolačićima',
        body: [
          'Kolačiće možete u svakom trenutku pregledati i obrisati u podešavanjima pregledača ili ih potpuno zabraniti — to neće uticati na rad ovog sajta.',
        ],
      },
    ],
  },

  ru: {
    title: 'Политика cookie',
    description: 'Использует ли сайт Gotovo cookie и трекеры (коротко: нет).',
    intro: 'Коротко: сайт Gotovo не использует cookie, аналитику и рекламные трекеры. Поэтому на сайте нет баннера с согласием на cookie.',
    sections: [
      {
        title: 'Что такое cookie',
        body: [
          'Cookie — небольшие файлы, которые сайт сохраняет в браузере, например чтобы запомнить вход или посчитать посещения. Похожим образом работают локальное хранилище браузера и пиксели отслеживания.',
        ],
      },
      {
        title: 'Что использует наш сайт',
        body: [
          {
            list: [
              'мы не устанавливаем cookie;',
              'не подключаем Google Analytics, рекламные пиксели и другие счётчики;',
              'шрифты загружаем с собственного сервера, а не с Google Fonts, поэтому сторонние сервисы не видят ваш визит;',
              'язык сайта задаётся адресом страницы (/ru, /en), а не cookie.',
            ],
          },
        ],
      },
      {
        title: 'Технические данные хостинга',
        body: [
          'Сайт размещён на Cloudflare. Чтобы защищать сайт от атак, Cloudflare обрабатывает технические данные запросов (например, IP-адрес). Если он заметит подозрительный трафик, то может установить строго необходимый защитный cookie — он не используется для отслеживания и рекламы.',
        ],
      },
      {
        title: 'Если что-то изменится',
        body: [
          'Если мы добавим аналитику или другие технологии, мы обновим эту страницу, а там, где этого требует закон, сначала спросим ваше согласие.',
        ],
      },
      {
        title: 'Как управлять cookie',
        body: [
          'Вы можете в любой момент посмотреть и удалить cookie в настройках браузера или запретить их полностью — на работу этого сайта это не повлияет.',
        ],
      },
    ],
  },

  en: {
    title: 'Cookie Policy',
    description: 'Does the Gotovo website use cookies and trackers (in short: no).',
    intro: 'In short: the Gotovo website does not use cookies, analytics or advertising trackers. That is why there is no cookie consent banner.',
    sections: [
      {
        title: 'What cookies are',
        body: [
          'Cookies are small files a website stores in your browser, for example to remember a login or count visits. Browser local storage and tracking pixels work in a similar way.',
        ],
      },
      {
        title: 'What our website uses',
        body: [
          {
            list: [
              'we do not set cookies;',
              'we do not use Google Analytics, advertising pixels or other counters;',
              'fonts are served from our own server rather than Google Fonts, so third parties do not see your visit;',
              'the website language is set by the page address (/ru, /en), not by a cookie.',
            ],
          },
        ],
      },
      {
        title: 'Technical hosting data',
        body: [
          'The website is hosted on Cloudflare. To protect it from attacks, Cloudflare processes technical request data (such as IP address). If it detects suspicious traffic, it may set a strictly necessary security cookie — it is not used for tracking or advertising.',
        ],
      },
      {
        title: 'If anything changes',
        body: [
          'If we add analytics or other technologies, we will update this page and, where the law requires it, ask for your consent first.',
        ],
      },
      {
        title: 'Managing cookies',
        body: [
          'You can view and delete cookies in your browser settings at any time, or block them entirely — this will not affect how this website works.',
        ],
      },
    ],
  },
}
