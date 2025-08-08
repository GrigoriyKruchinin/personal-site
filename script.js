// default theme = dark
(function(){
  const savedTheme = (function(){ try { return localStorage.getItem('theme') } catch(e){ return null } })();
  document.body.dataset.theme = savedTheme || "dark";
  const themeToggle = document.getElementById('themeToggle');
  themeToggle.textContent = document.body.dataset.theme === 'dark' ? '🌙' : '☀️';
  themeToggle.addEventListener('click', ()=>{
    const cur = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
    document.body.dataset.theme = cur;
    themeToggle.textContent = cur === 'dark' ? '🌙' : '☀️';
    try { localStorage.setItem('theme', cur); } catch(e){}
  });
})();

// Language switching
const texts = {
  ru: {
    name: "Григорий Кручинин",
    tagline: "Middle Python Developer / Team Lead",
    about_title: "Обо мне",
    about_text: "Python-разработчик с опытом создания высоконагруженных систем, автоматизации процессов и управления командами. Люблю чистый код и архитектуру, которая решает бизнес-задачи.",
    skills_title: "Навыки и стек",
    exp_title: "Опыт работы",
    contacts_title: "Контакты",
    download_resume: "Скачать резюме (PDF)",
    contact_btn: "Написать"
  },
  en: {
    name: "Grigoriy Kruchinin",
    tagline: "Middle Python Developer / Team Lead",
    about_title: "About",
    about_text: "Python developer experienced in building high-load systems, automation and team leadership. I prefer clean code and architecture that solves business problems.",
    skills_title: "Skills & Stack",
    exp_title: "Work Experience",
    contacts_title: "Contacts",
    download_resume: "Download resume (PDF)",
    contact_btn: "Contact"
  }
};

function applyLang(lang){
  // simple map
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if(texts[lang] && texts[lang][key]) el.textContent = texts[lang][key];
  });
  // static pieces
  document.getElementById('name').textContent = texts[lang].name;
  document.getElementById('tagline').textContent = texts[lang].tagline;
  document.getElementById('downloadResume').textContent = texts[lang].download_resume;
  document.getElementById('contactMail').textContent = texts[lang].contact_btn;

  // mark active button
  document.getElementById('langRu').classList.toggle('active', lang === 'ru');
  document.getElementById('langEn').classList.toggle('active', lang === 'en');

  try { localStorage.setItem('site_lang', lang); } catch(e){}
}

// attach language buttons
document.getElementById('langRu').addEventListener('click', ()=> setLang('ru'));
document.getElementById('langEn').addEventListener('click', ()=> setLang('en'));

function setLang(lang){
  applyLang(lang);
  // translate job cards titles/descriptions if needed
  translateJobs(lang);
}

// job translations (compact)
const jobTexts = {
  ru: {
    llc_tasks: [
      {t:"Helpdesk — единая поддержка", d:"Email / WhatsApp / Telegram в одном окне с автопереводом и ответом в тот же канал."},
      {t:"Обход капч", d:"Надёжный модуль для hCaptcha / gCaptcha / Cloudflare, стабилизировал парсинг."},
      {t:"Автозаполнение PDF", d:"Система выбора метода обработки документов и автозаполнение больших объёмов форм."},
      {t:"Интеграция Telegram", d:"Централизованное логирование и уведомления по задачам."}
    ],
    only_tasks: [
      {t:"Монетизация", d:"Интеграция Stripe — запуск платных подписок и стабильный доход."},
      {t:"KYC & безопасность", d:"Внедрил SumSub для проверки пользователей и снижения мошенничества."},
      {t:"Соцавторизация", d:"Google / Twitter / Telegram — упрощение регистрации, +40% новых аккаунтов."}
    ],
    vanger_tasks: [
      {t:"Крипто-кошелёк", d:"Разработал систему кошелька и транзакций для внутри-игровых покупок."},
      {t:"S3-хранилище", d:"Интеграция Yandex Cloud S3 для масштабируемого хранения медиа."},
      {t:"Оптимизация", d:"Повысил производительность сервисов в пиковые нагрузки."}
    ]
  },
  en: {
    llc_tasks: [
      {t:"Helpdesk — unified support", d:"Email / WhatsApp / Telegram in one interface with auto-translation and replies to the same channel."},
      {t:"Captcha bypass", d:"Reliable module for hCaptcha / gCaptcha / Cloudflare that stabilized scraping."},
      {t:"PDF automation", d:"Document processing selector and bulk form autofill system."},
      {t:"Telegram integration", d:"Centralized logging and task notifications."}
    ],
    only_tasks: [
      {t:"Monetization", d:"Stripe integration — launched paid subscriptions and stable revenue."},
      {t:"KYC & security", d:"Implemented SumSub to reduce fraud risk."},
      {t:"Social login", d:"Google / Twitter / Telegram — simplified registration, +40% signups."}
    ],
    vanger_tasks: [
      {t:"Crypto wallet", d:"Built wallet and transaction system for in-game purchases."},
      {t:"S3 storage", d:"Yandex Cloud S3 integration for scalable media storage."},
      {t:"Optimization", d:"Improved service performance under peak loads."}
    ]
  }
};

function translateJobs(lang){
  // LLC
  const llc = document.querySelector('article.job[data-key="llc"] .job-cards');
  const only = document.querySelector('article.job[data-key="onlyface"] .job-cards');
  const vanger = document.querySelector('article.job[data-key="vanger"] .job-cards');

  // helper: replace child nodes
  function fillCards(container, items){
    if(!container) return;
    const cards = container.querySelectorAll('.task-card');
    cards.forEach((card, i) => {
      const title = card.querySelector('.task-title');
      const desc = card.querySelector('.task-desc');
      const item = items[i];
      if(item){
        title.textContent = item.t;
        desc.textContent = item.d;
      }
    });
  }

  fillCards(llc, jobTexts[lang].llc_tasks);
  fillCards(only, jobTexts[lang].only_tasks);
  fillCards(vanger, jobTexts[lang].vanger_tasks);
}

// initialize language from localStorage or default
(function(){
  const saved = (function(){ try { return localStorage.getItem('site_lang') } catch(e){ return null } })();
  const initial = saved || 'ru';
  setLang(initial);
})();
