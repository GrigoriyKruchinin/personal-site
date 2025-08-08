// default theme = dark
document.body.dataset.theme = "dark";

const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  const current = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
  document.body.dataset.theme = current;
  themeToggle.textContent = current === 'dark' ? '🌙' : '☀️';
  // persist
  try { localStorage.setItem('theme', current); } catch(e){}
});

// load persisted theme
try {
  const saved = localStorage.getItem('theme');
  if(saved) {
    document.body.dataset.theme = saved;
    themeToggle.textContent = saved === 'dark' ? '🌙' : '☀️';
  }
} catch(e){}

// language toggle (simple JSON)
const texts = {
  ru: {
    about_title: "Обо мне",
    about_text: "Python-разработчик с опытом создания высоконагруженных систем, автоматизации процессов и управления командами. Люблю чистый код, понятную архитектуру и решения, которые дают измеримый результат бизнесу.",
    skills_title: "Навыки и стек",
    exp_title: "Опыт работы",
    contacts_title: "Контакты"
  },
  en: {
    about_title: "About",
    about_text: "Python developer experienced in building high-load systems, automation, and team leadership. I prefer clean code, clear architecture and solutions that deliver measurable business value.",
    skills_title: "Skills & Stack",
    exp_title: "Work Experience",
    contacts_title: "Contacts"
  }
};

function applyTexts(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = texts[lang][key] || el.textContent;
  });
  // translate static links/buttons
  const download = document.getElementById('downloadResume');
  download.textContent = lang === 'ru' ? 'Скачать резюме (PDF)' : 'Download resume (PDF)';
  const contact = document.getElementById('contactMail');
  contact.textContent = lang === 'ru' ? 'Написать' : 'Contact';
  // hero tagline
  document.getElementById('tagline').textContent = lang === 'ru' ? 'Middle Python Developer / Team Lead' : 'Middle Python Developer / Team Lead';
}

const langRuBtn = document.getElementById('langRu');
const langEnBtn = document.getElementById('langEn');

function setLang(lang){
  langRuBtn.classList.toggle('active', lang === 'ru');
  langEnBtn.classList.toggle('active', lang === 'en');
  applyTexts(lang);
  try { localStorage.setItem('site_lang', lang);} catch(e){}
}

langRuBtn.addEventListener('click', ()=> setLang('ru'));
langEnBtn.addEventListener('click', ()=> setLang('en'));

try {
  const savedLang = localStorage.getItem('site_lang') || 'ru';
  setLang(savedLang);
} catch(e){ setLang('ru'); }

// animate card visibility
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting) e.target.classList.add('visible');
  });
},{threshold:0.08});

document.querySelectorAll('.card').forEach(c => {
  c.style.opacity = 0;
  c.style.transform = 'translateY(20px)';
  c.style.transition = 'opacity .6s ease, transform .6s ease';
  observer.observe(c);
});

// graceful fallback: if resume.pdf not found, button still links to it (GitHub pages will 404).
// Please add resume.pdf to repo root to enable download.
