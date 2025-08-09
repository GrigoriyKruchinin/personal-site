/* ------------- translations ------------- */
const T = {
  ru: {
    page_title: "Григорий Кручинин — Python Developer",
    name: "Григорий Кручинин",
    role: "Lead / Python Developer",
    download_resume: "📄 Скачать резюме",
    skills_title: "Навыки",
    skills_backend: "Backend & Data",
    skills_brokers: "Brokers & Async",
    skills_devops: "DevOps & Cloud",
    skills_scraping: "Scraping & Integrations",
    skills_testing: "Testing & Automation",
    skills_tools: "Tools & Collaboration",
    experience_title: "Опыт работы",
    footer_name: "Григорий Кручинин",

    /* LLC */
    llc_sub: "Автоматизация регистрации бизнеса и поддержка операций",
    llc_role: "Lead / Python Developer",
    llc_t1_title: "Helpdesk — единая поддержка",
    llc_t1_action: "Спроектировал и ввёл микросервисную платформу обработки входящих сообщений (email, WhatsApp, Telegram) с автопереводом.",
    llc_t1_result: "Результат: время ответа поддержки сократилось в 2.5×, скорость обработки запросов увеличилась на 60%.",
    llc_t2_title: "Обход капч",
    llc_t2_action: "Интегрировал модуль обхода hCaptcha / gCaptcha / Cloudflare в пайплайн парсинга.",
    llc_t2_result: "Результат: стабильность парсинга выросла, число падений сервисов снизилось на 35%.",
    llc_t3_title: "Автозаполнение PDF",
    llc_t3_action: "Реализовал систему автоматического заполнения форм с выбором метода обработки по типу документа.",
    llc_t3_result: "Результат: время обработки документов уменьшилось в 2×, уменьшилось количество ошибок.",
    llc_t4_title: "Интеграция Telegram",
    llc_t4_action: "Настроил централизованное логирование и уведомления по задачам в Telegram.",
    llc_t4_result: "Результат: повысилась прозрачность процессов и скорость реакции на инциденты.",

    /* OnlyFace */
    only_sub: "Социальная платформа с заменой лиц в реальном времени",
    only_role: "Tech Lead / Backend Developer",
    only_t1_title: "Монетизация",
    only_t1_action: "Интегрировал Stripe и настроил платёжные потоки для подписок.",
    only_t1_result: "Результат: запущена монетизация, получен стабильный источник дохода.",
    only_t2_title: "KYC",
    only_t2_action: "Внедрил SumSub для проверки пользователей и снижения мошенничества.",
    only_t2_result: "Результат: риск мошенничества существенно снижен.",
    only_t3_title: "Соцавторизация",
    only_t3_action: "Добавил Google / Twitter / Telegram вход.",
    only_t3_result: "Результат: рост регистраций на ~40% после упрощения входа.",

    /* Vanger */
    vanger_sub: "Платформа и игровые продукты с внутренней монетизацией",
    vanger_role: "Backend Developer",
    v_t1_title: "Крипто-кошелёк",
    v_t1_action: "Разработал систему кошелька и транзакций для внутриигровых покупок.",
    v_t1_result: "Результат: безопасные и стабильные транзакции.",
    v_t2_title: "S3-хранилище",
    v_t2_action: "Интегрировал Yandex Cloud S3 для масштабируемого хранения медиа.",
    v_t2_result: "Результат: надёжное хранение больших объёмов контента.",
    v_t3_title: "Оптимизация",
    v_t3_action: "Оптимизировал сервисы под пиковые нагрузки.",
    v_t3_result: "Результат: уменьшены задержки и повышена устойчивость."
  },
  en: {
    page_title: "Grigorii Kruchinin — Python Developer",
    name: "Grigorii Kruchinin",
    role: "Lead / Python Developer",
    download_resume: "📄 Download resume",
    skills_title: "Skills",
    skills_backend: "Backend & Data",
    skills_brokers: "Brokers & Async",
    skills_devops: "DevOps & Cloud",
    skills_scraping: "Scraping & Integrations",
    skills_testing: "Testing & Automation",
    skills_tools: "Tools & Collaboration",
    experience_title: "Work Experience",
    footer_name: "Grigorii Kruchinin",

    /* LLC */
    llc_sub: "US business registration automation and operations support",
    llc_role: "Lead / Python Developer",
    llc_t1_title: "Helpdesk — unified support",
    llc_t1_action: "Designed and deployed microservice platform for incoming messages (email, WhatsApp, Telegram) with auto-translation.",
    llc_t1_result: "Result: support response time improved 2.5× and request handling speed increased by 60%.",
    llc_t2_title: "Captcha bypass",
    llc_t2_action: "Integrated reliable hCaptcha / gCaptcha / Cloudflare bypass module into scraping pipeline.",
    llc_t2_result: "Result: scraping stability improved; service failures reduced by ~35%.",
    llc_t3_title: "PDF autofill",
    llc_t3_action: "Implemented document autofill system selecting processing method by document type.",
    llc_t3_result: "Result: document processing time halved; fewer errors.",
    llc_t4_title: "Telegram integration",
    llc_t4_action: "Configured centralized logging and task notifications via Telegram.",
    llc_t4_result: "Result: improved process transparency and incident response speed.",

    /* OnlyFace */
    only_sub: "Real-time face-swap social platform",
    only_role: "Tech Lead / Backend Developer",
    only_t1_title: "Monetization",
    only_t1_action: "Integrated Stripe and configured payment flows for subscriptions.",
    only_t1_result: "Result: monetization launched and a stable revenue stream established.",
    only_t2_title: "KYC",
    only_t2_action: "Implemented SumSub to reduce fraud risk.",
    only_t2_result: "Result: fraud risk significantly reduced.",
    only_t3_title: "Social login",
    only_t3_action: "Added Google / Twitter / Telegram login.",
    only_t3_result: "Result: ~40% increase in signups after simplifying login.",

    /* Vanger */
    vanger_sub: "Platform and gaming products with in-app monetization",
    vanger_role: "Backend Developer",
    v_t1_title: "Crypto wallet",
    v_t1_action: "Built wallet and transaction system for in-game purchases.",
    v_t1_result: "Result: secure and stable transactions.",
    v_t2_title: "S3 storage",
    v_t2_action: "Integrated Yandex Cloud S3 for scalable media storage.",
    v_t2_result: "Result: reliable storage for large media volumes.",
    v_t3_title: "Optimization",
    v_t3_action: "Optimized services for peak loads.",
    v_t3_result: "Result: reduced latency and improved resilience."
  }
};

/* ------------- language and theme logic ------------- */
let lang = (function(){ try{return localStorage.getItem('site_lang')||'ru'}catch(e){return 'ru'} })();
const langToggleEl = document.getElementById('langToggle');
const langCapsule = document.getElementById('langCapsule');

function setLang(l){
  lang = l;
  try{ localStorage.setItem('site_lang', l); }catch(e){}
  // toggle visual slider class
  if(lang === 'en') langToggleEl.classList.add('lang-en'); else langToggleEl.classList.remove('lang-en');
  // apply translations
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if(T[lang] && T[lang][key]) el.textContent = T[lang][key];
  });
  // also update year and title
  document.getElementById('year').textContent = new Date().getFullYear();
  if(T[lang] && T[lang].page_title) document.title = T[lang].page_title;
}

// set initial
setLang(lang);

// clickable / keyboard for lang toggle
langCapsule.addEventListener('click', ()=> setLang(lang === 'ru' ? 'en' : 'ru'));
langToggleEl.addEventListener('keydown', (e)=> {
  if(e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setLang(lang === 'ru' ? 'en' : 'ru'); }
});

/* theme toggle */
const themeBtn = document.getElementById('themeToggle');
(function initTheme(){
  let saved = null;
  try{ saved = localStorage.getItem('theme'); }catch(e){}
  if(saved) document.body.dataset.theme = saved;
  themeBtn.textContent = document.body.dataset.theme === 'dark' ? '🌙' : '☀️';
})();
themeBtn.addEventListener('click', ()=>{
  const next = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
  document.body.dataset.theme = next;
  themeBtn.textContent = next === 'dark' ? '🌙' : '☀️';
  try{ localStorage.setItem('theme', next);}catch(e){}
});

/* ------------- reveal animations with safe fallback ------------- */
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(ent => {
    if(ent.isIntersecting) ent.target.classList.add('visible');
  });
},{threshold:0.08});

revealEls.forEach(el => io.observe(el));
// fallback: if IntersectionObserver not triggering quickly, reveal all after 800ms
setTimeout(()=> revealEls.forEach(el => el.classList.add('visible')), 900);
