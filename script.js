document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("themeToggle");
  const langToggle = document.getElementById("langToggle");
  const slider = document.querySelector(".lang-slider");
  const yearEl = document.getElementById("year");

  yearEl.textContent = new Date().getFullYear();

  // ===== THEME SWITCH =====
  themeToggle.addEventListener("click", () => {
    const body = document.body;
    const currentTheme = body.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    body.setAttribute("data-theme", newTheme);
    themeToggle.textContent = newTheme === "dark" ? "🌙" : "☀️";
    localStorage.setItem("theme", newTheme);
  });

  // load theme
  const savedTheme = localStorage.getItem("theme") || "dark";
  document.body.setAttribute("data-theme", savedTheme);
  themeToggle.textContent = savedTheme === "dark" ? "🌙" : "☀️";

  // ===== LANGUAGE SWITCH =====
  const translations = {
    ru: {
      page_title: "Григорий Кручинин — Python Developer",
      name: "Григорий Кручинин",
      role: "Lead / Python Developer",
      download_resume: "📄 Скачать резюме",
      about_title: "Обо мне",
      about_text:
        "Опытный Python-разработчик и тимлид, специализируюсь на проектировании архитектуры, интеграциях, автоматизации и оптимизации процессов. Люблю чистый код, асинхронные решения и масштабируемые системы.",
      skills_title: "Навыки",
      skills_backend: "Backend & Data",
      skills_scraping: "Scraping & Integrations",
      skills_testing: "Testing & Automation",
      skills_brokers: "Brokers & Async",
      skills_devops: "DevOps & Cloud",
      skills_tools: "Tools & Collaboration",
      experience_title: "Опыт работы",

      llc_sub: "Автоматизация регистрации бизнеса в США и поддержка операций",
      llc_role: "Lead / Python Developer",
      llc_t1_title: "Helpdesk",
      llc_t1_action:
        "Разработал микросервисную систему для обработки сообщений из Email, WhatsApp и Telegram с автоматическим переводом и ответами в исходный канал.",
      llc_t1_result:
        "Скорость обработки выросла на 60%, время ответа снизилось в 2.5 раза.",
      llc_t2_title: "Обход капч",
      llc_t2_action:
        "Интегрировал обход hCaptcha, gCaptcha и Cloudflare в парсинговые модули.",
      llc_t2_result:
        "Повысил стабильность парсинга и снизил число сбоев на 35%.",
      llc_t3_title: "PDF-формы",
      llc_t3_action:
        "Создал модуль автозаполнения PDF-форм для разных форматов документов.",
      llc_t3_result:
        "Сократил время заполнения форм и снизил ошибки пользователей.",
      llc_t4_title: "Telegram интеграция",
      llc_t4_action:
        "Интегрировал Telegram-бота для уведомлений и логирования ошибок.",
      llc_t4_result:
        "Повысил прозрачность процессов и скорость реакции на инциденты.",

      only_sub: "Социальная платформа с заменой лиц в реальном времени",
      only_role: "Team Lead / Python Developer",
      only_t1_title: "Платежи",
      only_t1_action:
        "Подключил и настроил Stripe для монетизации продукта.",
      only_t1_result: "Обеспечил стабильный поток дохода.",
      only_t2_title: "KYC",
      only_t2_action:
        "Интегрировал верификацию через SumSub для защиты от мошенничества.",
      only_t2_result: "Снизил риск мошенничества и повысил доверие.",
      only_t3_title: "Соц. аутентификация",
      only_t3_action:
        "Реализовал вход через Google, Twitter и Telegram.",
      only_t3_result:
        "Упростил регистрацию и увеличил число новых пользователей.",

      vanger_name: "Вангер.рф",
      vanger_sub: "Разработка игровых и веб-платформ",
      vanger_role: "Python Developer",
      v_t1_title: "Веб-разработка",
      v_t1_action:
        "Создавал и поддерживал сайты на Django и FastAPI.",
      v_t1_result: "Обеспечил стабильность и безопасность.",
      v_t2_title: "Крипто-кошелёк",
      v_t2_action:
        "Реализовал систему кошелька и транзакций для игровой платформы.",
      v_t2_result:
        "Обеспечил безопасное хранение и переводы.",
      v_t3_title: "Хранилище",
      v_t3_action:
        "Настроил S3-хранилище на YandexCloud для медиафайлов.",
      v_t3_result:
        "Гарантировал масштабируемость и надёжность.",
      footer_name: "Григорий Кручинин"
    },

    en: {
      page_title: "Grigorii Kruchinin — Python Developer",
      name: "Grigorii Kruchinin",
      role: "Lead / Python Developer",
      download_resume: "📄 Download Resume",
      about_title: "About Me",
      about_text:
        "Experienced Python developer and team lead specializing in architecture design, integrations, automation, and process optimization. Passionate about clean code, async solutions, and scalable systems.",
      skills_title: "Skills",
      skills_backend: "Backend & Data",
      skills_scraping: "Scraping & Integrations",
      skills_testing: "Testing & Automation",
      skills_brokers: "Brokers & Async",
      skills_devops: "DevOps & Cloud",
      skills_tools: "Tools & Collaboration",
      experience_title: "Work Experience",

      llc_sub: "Business registration automation in the US and operations support",
      llc_role: "Lead / Python Developer",
      llc_t1_title: "Helpdesk",
      llc_t1_action:
        "Developed a microservice system to process messages from Email, WhatsApp, and Telegram with auto-translation and replies to the original channel.",
      llc_t1_result:
        "Increased processing speed by 60%, reduced response time by 2.5x.",
      llc_t2_title: "Captcha Bypass",
      llc_t2_action:
        "Integrated hCaptcha, gCaptcha, and Cloudflare bypass into parsing modules.",
      llc_t2_result:
        "Improved parsing stability and reduced failures by 35%.",
      llc_t3_title: "PDF Forms",
      llc_t3_action:
        "Created an auto-fill module for PDF forms in various formats.",
      llc_t3_result:
        "Reduced form completion time and minimized user errors.",
      llc_t4_title: "Telegram Integration",
      llc_t4_action:
        "Integrated a Telegram bot for notifications and error logging.",
      llc_t4_result:
        "Improved process transparency and response speed to incidents.",

      only_sub: "Real-time face-swapping social platform",
      only_role: "Team Lead / Python Developer",
      only_t1_title: "Payments",
      only_t1_action:
        "Integrated Stripe to monetize the product.",
      only_t1_result: "Provided a stable revenue stream.",
      only_t2_title: "KYC",
      only_t2_action:
        "Integrated SumSub verification to prevent fraud.",
      only_t2_result: "Reduced fraud risk and improved trust.",
      only_t3_title: "Social Auth",
      only_t3_action:
        "Implemented login via Google, Twitter, and Telegram.",
      only_t3_result:
        "Simplified registration and increased new user signups.",

      vanger_name: "Vanger.rf",
      vanger_sub: "Game and web platform development",
      vanger_role: "Python Developer",
      v_t1_title: "Web Development",
      v_t1_action:
        "Developed and maintained Django and FastAPI websites.",
      v_t1_result: "Ensured stability and security.",
      v_t2_title: "Crypto Wallet",
      v_t2_action:
        "Implemented wallet and transaction system for gaming platform.",
      v_t2_result:
        "Ensured secure storage and transfers.",
      v_t3_title: "Storage",
      v_t3_action:
        "Configured S3 storage on YandexCloud for media files.",
      v_t3_result:
        "Guaranteed scalability and reliability.",
      footer_name: "Grigorii Kruchinin"
    }
  };

  function setLang(lang) {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
    localStorage.setItem("lang", lang);
    slider.style.transform = lang === "en" ? "translateX(32px)" : "translateX(0px)";
  }

  langToggle.addEventListener("click", () => {
    const currentLang = localStorage.getItem("lang") || "ru";
    const newLang = currentLang === "ru" ? "en" : "ru";
    setLang(newLang);
  });

  // Load language
  const savedLang = localStorage.getItem("lang") || "ru";
  setLang(savedLang);
});
