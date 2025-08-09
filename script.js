const translations = {
  ru: {
    page_title: "Григорий Кручинин — Python Developer",
    name: "Григорий Кручинин",
    role: "Middle Python Developer / Team Lead",
    download_resume: "📄 Скачать резюме",
    skills_title: "Навыки",
    skills_backend: "Backend & Data",
    skills_async: "Async & Messaging",
    skills_devops: "DevOps & Cloud",
    skills_testing: "Testing, Automation & Integrations",
    skills_tools: "Tools & Collaboration",
    experience_title: "Опыт работы",
    booster_role: "Senior / Lead Python Developer — автоматизация регистрации бизнеса в США",
    booster_task1: "Helpdesk-платформа — единая система обработки email/WhatsApp/Telegram с автопереводом и ответами из внутреннего приложения.",
    booster_task2: "Обход капч — модуль для hCaptcha/gCaptcha/Cloudflare в Selenium.",
    booster_task3: "Автозаполнение PDF — выбор метода обработки по типу документа.",
    booster_task4: "Интеграция Telegram — уведомления и логирование задач.",
    onlyface_role: "Team Lead / Python Developer — соцсеть с заменой лиц в реальном времени",
    onlyface_task1: "Stripe для монетизации",
    onlyface_task2: "SumSub для KYC",
    onlyface_task3: "OAuth через Google, Twitter, Telegram",
    vanger_role: "Python Developer — игровые платформы и веб-приложения",
    vanger_task1: "Сайты на Django/FastAPI",
    vanger_task2: "Криптокошелёк и транзакции",
    vanger_task3: "S3-хранилища на YandexCloud",
    footer_name: "Григорий Кручинин"
  },
  en: {
    page_title: "Grigorii Kruchinin — Python Developer",
    name: "Grigorii Kruchinin",
    role: "Middle Python Developer / Team Lead",
    download_resume: "📄 Download Resume",
    skills_title: "Skills",
    skills_backend: "Backend & Data",
    skills_async: "Async & Messaging",
    skills_devops: "DevOps & Cloud",
    skills_testing: "Testing, Automation & Integrations",
    skills_tools: "Tools & Collaboration",
    experience_title: "Work Experience",
    booster_role: "Senior / Lead Python Developer — US business registration automation",
    booster_task1: "Helpdesk platform — unified processing of email/WhatsApp/Telegram with auto-translation and responses from internal app.",
    booster_task2: "Captcha bypass — module for hCaptcha/gCaptcha/Cloudflare in Selenium.",
    booster_task3: "PDF autofill — select processing method by document type.",
    booster_task4: "Telegram integration — notifications & task logging.",
    onlyface_role: "Team Lead / Python Developer — real-time face swap social network",
    onlyface_task1: "Stripe for monetization",
    onlyface_task2: "SumSub for KYC",
    onlyface_task3: "OAuth via Google, Twitter, Telegram",
    vanger_role: "Python Developer — gaming platforms and web apps",
    vanger_task1: "Django/FastAPI websites",
    vanger_task2: "Crypto wallet and transactions",
    vanger_task3: "S3 storage on YandexCloud",
    footer_name: "Grigorii Kruchinin"
  }
};

let currentLang = "ru";

function toggleTheme() {
  document.body.dataset.theme =
    document.body.dataset.theme === "dark" ? "light" : "dark";
}

function toggleLang() {
  currentLang = currentLang === "ru" ? "en" : "ru";
  document.querySelector(".lang-toggle").classList.toggle("lang-en-active");
  applyTranslations();
}

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[currentLang][key];
  });
}

document.getElementById("year").textContent = new Date().getFullYear();
applyTranslations();
