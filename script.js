// ==========================================
// ZENQOR MASTER GATEWAY INTERCEPTOR
// ==========================================
const ZENQOR_MASTER_URL = "https://zenqor-api.kauaku.store/api/public-status";

async function checkMasterProtocol() {
  try {
    const response = await fetch(ZENQOR_MASTER_URL);
    const data = await response.json();
    if (data.is_offline) {
      document.documentElement.innerHTML = `
        <body style="background-color: #050505; color: #ff0000; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0;">
          <div style="text-align: center;"><h1>CONNECTION SEVERED</h1><p>Routine maintenance in progress.</p></div>
        </body>`;
    }
  } catch (error) {
    console.warn("Gateway Ping Failed. Allowing local access.");
  }
}
checkMasterProtocol();

// --- 1. KAMUS TERJEMAHAN STATIK (Lalai / Fallback) ---
const translations = {
    en: {
        nav_home: "Home", nav_services: "Services", nav_portfolio: "Portfolio", nav_careers: "Careers", nav_about: "About", nav_contact: "Contact", nav_faq: "FAQ",
        nav_port_gaming: "Scripting Projects", nav_port_web: "Server Development", nav_careers_join: "Join Us",
        hero_badge: "Premium FiveM Development",
        hero_title: "Designing, Developing & Deploying <br><span class='text-primary'>Websites, Cloud Systems & FiveM Resources</span>",
        hero_sub: "Zenqor Technologies specializes in custom software development, website development, Lua scripting, standalone resources, and server optimization for gaming communities, enterprises, and digital platforms.",
        stat_1_num: "150+", stat_1: "Scripts Released",
        stat_2_num: "99.9%", stat_2: "Optimized Servers",
        stat_3_num: "2M+", stat_3: "Active Players",
        srv_main_title: "Our <span class='text-primary'>Development Services</span>",
        about_title: "The Code Behind <span class='text-primary'>Immersive Roleplay</span>"
        // Tambahan teks asal lain diletakkan di sini untuk keselamatan jika internet perlahan
    },
    ms: {
        nav_home: "Utama", nav_services: "Servis", nav_portfolio: "Portfolio", nav_careers: "Kerjaya", nav_about: "Tentang Kami", nav_contact: "Hubungi", nav_faq: "FAQ",
        nav_port_gaming: "Projek Skrip", nav_port_web: "Pembangunan Pelayan", nav_careers_join: "Sertai Kami",
        hero_badge: "Pembangunan FiveM Premium",
        hero_title: "Dari Idea ke Produk Digital <br><span class='text-primary'>FiveM, Website & Sistem Cloud</span>",
        hero_sub: "Zenqor Technologies mengkhusus dalam pembangunan perisian tersuai, pembangunan laman web, skrip Lua, sumber bebas, dan pengoptimuman pelayan.",
        stat_1_num: "150+", stat_1: "Skrip Dilancarkan",
        stat_2_num: "99.9%", stat_2: "Pelayan Dioptimumkan",
        stat_3_num: "2M+", stat_3: "Pemain Aktif",
        srv_main_title: "Perkhidmatan <span class='text-primary'>Pembangunan Kami</span>",
        about_title: "Kod Di Sebalik <span class='text-primary'>Roleplay Imersif</span>"
    }
};

// --- 2. SISTEM PENGURUSAN DOM ---
let currentLang = localStorage.getItem('zenqor-lang') || 'en';

function applyTranslationsToDOM(lang) {
    document.documentElement.lang = lang;
    const langToggle = document.getElementById('lang-toggle');
    if(langToggle) langToggle.textContent = lang === 'en' ? 'MS' : 'EN';
    
    // Kemas kini Teks Dwi-Bahasa
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if(translations[lang][key]) el.innerHTML = translations[lang][key];
    });

    // Kemas kini Nombor/Teks Bebas (Bukan Terjemahan Langsung)
    document.querySelectorAll('[data-content]').forEach(el => {
        const key = el.getAttribute('data-content');
        if(translations[lang][key]) el.innerHTML = translations[lang][key];
    });
}

// Tukar bahasa
const langBtn = document.getElementById('lang-toggle');
if(langBtn) {
    langBtn.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'ms' : 'en';
        localStorage.setItem('zenqor-lang', currentLang);
        applyTranslationsToDOM(currentLang);
    });
}

applyTranslationsToDOM(currentLang);

// --- 3. IMPORT DATA DINAMIK DARI FIREBASE (TEKS & GAMBAR) ---
async function initDynamicContent() {
    try {
        const { initializeApp } = await import("https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js");
        const { getFirestore, doc, getDoc } = await import("https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js");
        
        const firebaseConfig = {
            apiKey: "AIzaSyCJyjvlm8jG-mT_1mDYsyF562L6XuskFxU",
            authDomain: "zenqor-web.firebaseapp.com",
            projectId: "zenqor-web"
        };
        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);

        // 1. Tarik Data Navbar
        const navSnap = await getDoc(doc(db, "site_content", "navbar_translations"));
        if (navSnap.exists()) {
            const data = navSnap.data();
            translations.en.nav_home = data.nav_home_en || translations.en.nav_home;
            translations.ms.nav_home = data.nav_home_ms || translations.ms.nav_home;
            translations.en.nav_services = data.nav_services_en || translations.en.nav_services;
            translations.ms.nav_services = data.nav_services_ms || translations.ms.nav_services;
            translations.en.nav_portfolio = data.nav_portfolio_en || translations.en.nav_portfolio;
            translations.ms.nav_portfolio = data.nav_portfolio_ms || translations.ms.nav_portfolio;
            translations.en.nav_port_gaming = data.nav_port_gaming_en || translations.en.nav_port_gaming;
            translations.ms.nav_port_gaming = data.nav_port_gaming_ms || translations.ms.nav_port_gaming;
            translations.en.nav_port_web = data.nav_port_web_en || translations.en.nav_port_web;
            translations.ms.nav_port_web = data.nav_port_web_ms || translations.ms.nav_port_web;
            translations.en.nav_careers = data.nav_careers_en || translations.en.nav_careers;
            translations.ms.nav_careers = data.nav_careers_ms || translations.ms.nav_careers;
            translations.en.nav_careers_join = data.nav_careers_join_en || translations.en.nav_careers_join;
            translations.ms.nav_careers_join = data.nav_careers_join_ms || translations.ms.nav_careers_join;
            translations.en.nav_about = data.nav_about_en || translations.en.nav_about;
            translations.ms.nav_about = data.nav_about_ms || translations.ms.nav_about;
            translations.en.nav_faq = data.nav_faq_en || translations.en.nav_faq;
            translations.ms.nav_faq = data.nav_faq_ms || translations.ms.nav_faq;
            translations.en.nav_contact = data.nav_contact_en || translations.en.nav_contact;
            translations.ms.nav_contact = data.nav_contact_ms || translations.ms.nav_contact;
        }

        // 2. Tarik Data Kandungan (Hero, Stats, Services, About) & Gambar
        const contentSnap = await getDoc(doc(db, "site_content", "global_settings"));
        if (contentSnap.exists()) {
            const data = contentSnap.data();
            
            // Gambar Latar
            if(data.img_hero_bg) {
                const heroSection = document.querySelector('.hero-section');
                if(heroSection) heroSection.style.backgroundImage = `url('${data.img_hero_bg}')`;
            }

            // Teks Kandungan
            if(data.hero_badge_en) translations.en.hero_badge = data.hero_badge_en;
            if(data.hero_badge_ms) translations.ms.hero_badge = data.hero_badge_ms;
            if(data.hero_title_en) translations.en.hero_title = data.hero_title_en;
            if(data.hero_title_ms) translations.ms.hero_title = data.hero_title_ms;
            if(data.hero_sub_en) translations.en.hero_sub = data.hero_sub_en;
            if(data.hero_sub_ms) translations.ms.hero_sub = data.hero_sub_ms;
            
            if(data.stat_1_num) { translations.en.stat_1_num = data.stat_1_num; translations.ms.stat_1_num = data.stat_1_num; }
            if(data.stat_1_en) translations.en.stat_1 = data.stat_1_en;
            if(data.stat_1_ms) translations.ms.stat_1 = data.stat_1_ms;
            if(data.stat_2_num) { translations.en.stat_2_num = data.stat_2_num; translations.ms.stat_2_num = data.stat_2_num; }
            if(data.stat_2_en) translations.en.stat_2 = data.stat_2_en;
            if(data.stat_2_ms) translations.ms.stat_2 = data.stat_2_ms;
            if(data.stat_3_num) { translations.en.stat_3_num = data.stat_3_num; translations.ms.stat_3_num = data.stat_3_num; }
            if(data.stat_3_en) translations.en.stat_3 = data.stat_3_en;
            if(data.stat_3_ms) translations.ms.stat_3 = data.stat_3_ms;

            if(data.srv_main_title_en) translations.en.srv_main_title = data.srv_main_title_en;
            if(data.srv_main_title_ms) translations.ms.srv_main_title = data.srv_main_title_ms;
            
            if(data.about_title_en) translations.en.about_title = data.about_title_en;
            if(data.about_title_ms) translations.ms.about_title = data.about_title_ms;
        }

        applyTranslationsToDOM(currentLang);
    } catch (error) { console.warn("Ralat memuat turun dari Firebase:", error); }
}

initDynamicContent();

// --- 4. LOGIK UI & ANIMASI KEKALAN ---
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = toggle.getAttribute('data-target');
        const menu = document.getElementById(targetId);
        document.querySelectorAll('.dropdown-menu').forEach(m => { if (m !== menu) m.classList.remove('show'); });
        menu.classList.toggle('show');
    });
});
window.addEventListener('click', function(e) {
    if (!e.target.closest('.nav-item-dropdown')) {
        document.querySelectorAll('.dropdown-menu').forEach(menu => { menu.classList.remove('show'); });
    }
});
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
if(mobileMenuBtn) { mobileMenuBtn.addEventListener('click', () => { navLinks.classList.toggle('active'); }); }

const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => { if(entry.isIntersecting) { entry.target.classList.add('active'); observer.unobserve(entry.target); } });
}, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
revealElements.forEach(el => revealObserver.observe(el));
