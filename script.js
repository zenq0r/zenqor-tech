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
        hero_badge: "Premium FiveM Development",
        hero_title: "Designing, Developing & Deploying <br><span class='text-primary'>Websites, Cloud Systems & FiveM Resources</span>",
        hero_sub: "Zenqor Technologies specializes in custom software development, website development, Lua scripting, standalone resources, and server optimization for gaming communities, enterprises, and digital platforms.",
        stat_1_num: "150+", stat_1: "Scripts Released",
        stat_2_num: "99.9%", stat_2: "Optimized Servers",
        srv_main_title: "Our <span class='text-primary'>Development Services</span>",
        srv_1_t: "Custom Lua Scripts", srv_1_d: "Tailor-made gameplay scripts including jobs, crime systems, mechanics, and economy.",
        about_title: "The Code Behind <span class='text-primary'>Immersive Roleplay</span>",
        about_sub: "We write clean, efficient, and well-optimized Lua scripts that add real depth to server gameplay without overloading your server resources.",
        // Kekalkan terjemahan asal yang lain di sini (Navbar, Footer dll)
        nav_home: "Home", nav_services: "Services", nav_portfolio: "Portfolio", nav_careers: "Careers", nav_about: "About"
    },
    ms: {
        hero_badge: "Pembangunan FiveM Premium",
        hero_title: "Dari Idea ke Produk Digital <br><span class='text-primary'>FiveM, Website & Sistem Cloud</span>",
        hero_sub: "Zenqor Technologies mengkhusus dalam pembangunan perisian tersuai, pembangunan laman web, skrip Lua, sumber bebas, dan pengoptimuman pelayan.",
        stat_1_num: "150+", stat_1: "Skrip Dilancarkan",
        stat_2_num: "99.9%", stat_2: "Pelayan Dioptimumkan",
        srv_main_title: "Perkhidmatan <span class='text-primary'>Pembangunan Kami</span>",
        srv_1_t: "Skrip Lua Tersuai", srv_1_d: "Skrip permainan khas termasuk sistem pekerjaan, jenayah, mekanik, dan ekonomi.",
        about_title: "Kod Di Sebalik <span class='text-primary'>Roleplay Imersif</span>",
        about_sub: "Kami menulis skrip Lua yang kemas, efisien, dan dioptimumkan untuk menambah kedalaman corak permainan tanpa membebankan sumber pelayan anda.",
        // Kekalkan terjemahan asal yang lain di sini (Navbar, Footer dll)
        nav_home: "Utama", nav_services: "Servis", nav_portfolio: "Portfolio", nav_careers: "Kerjaya", nav_about: "Tentang Kami"
    }
};

// --- 2. SISTEM PENGURUSAN DOM ---
let currentLang = localStorage.getItem('zenqor-lang') || 'en';

function applyTranslationsToDOM(lang) {
    document.documentElement.lang = lang;
    const langToggle = document.getElementById('lang-toggle');
    if(langToggle) langToggle.textContent = lang === 'en' ? 'MS' : 'EN';
    
    // Kemas kini Teks
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if(translations[lang][key]) el.innerHTML = translations[lang][key];
    });

    // Kemas kini Teks Biasa (Bukan i18n berasaskan bahasa, contohnya nombor statik)
    document.querySelectorAll('[data-content]').forEach(el => {
        const key = el.getAttribute('data-content');
        // Ia ditarik dari translations[lang] tetapi tidak berubah antara bahasa
        if(translations[lang][key]) el.innerHTML = translations[lang][key];
    });
}

// Tukar bahasa apabila butang diklik
const langBtn = document.getElementById('lang-toggle');
if(langBtn) {
    langBtn.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'ms' : 'en';
        localStorage.setItem('zenqor-lang', currentLang);
        applyTranslationsToDOM(currentLang);
    });
}

// Paparkan data lalai dengan pantas
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
        const docSnap = await getDoc(doc(db, "site_content", "global_settings"));

        if (docSnap.exists()) {
            const data = docSnap.data();
            
            // Menggantikan Teks Hero
            if(data.hero_badge_en) translations.en.hero_badge = data.hero_badge_en;
            if(data.hero_badge_ms) translations.ms.hero_badge = data.hero_badge_ms;
            if(data.hero_title_en) translations.en.hero_title = data.hero_title_en;
            if(data.hero_title_ms) translations.ms.hero_title = data.hero_title_ms;
            if(data.hero_sub_en) translations.en.hero_sub = data.hero_sub_en;
            if(data.hero_sub_ms) translations.ms.hero_sub = data.hero_sub_ms;

            // Menggantikan Teks Statistik (Nombor diletakkan di kedua-dua bahasa agar sinkroni)
            if(data.stat_1_num) { translations.en.stat_1_num = data.stat_1_num; translations.ms.stat_1_num = data.stat_1_num; }
            if(data.stat_1_en) translations.en.stat_1 = data.stat_1_en;
            if(data.stat_1_ms) translations.ms.stat_1 = data.stat_1_ms;
            if(data.stat_2_num) { translations.en.stat_2_num = data.stat_2_num; translations.ms.stat_2_num = data.stat_2_num; }
            if(data.stat_2_en) translations.en.stat_2 = data.stat_2_en;
            if(data.stat_2_ms) translations.ms.stat_2 = data.stat_2_ms;

            // Menggantikan Teks Servis
            if(data.srv_main_title_en) translations.en.srv_main_title = data.srv_main_title_en;
            if(data.srv_main_title_ms) translations.ms.srv_main_title = data.srv_main_title_ms;
            if(data.srv_1_t_en) translations.en.srv_1_t = data.srv_1_t_en;
            if(data.srv_1_t_ms) translations.ms.srv_1_t = data.srv_1_t_ms;
            if(data.srv_1_d_en) translations.en.srv_1_d = data.srv_1_d_en;
            if(data.srv_1_d_ms) translations.ms.srv_1_d = data.srv_1_d_ms;

            // Menggantikan Teks About
            if(data.about_title_en) translations.en.about_title = data.about_title_en;
            if(data.about_title_ms) translations.ms.about_title = data.about_title_ms;
            if(data.about_sub_en) translations.en.about_sub = data.about_sub_en;
            if(data.about_sub_ms) translations.ms.about_sub = data.about_sub_ms;

            // Melaksanakan perubahan Gambar Dinamik
            if(data.img_hero_bg) {
                // Cari div yang mempunyai class hero-section dan gantikan background
                const heroSection = document.querySelector('.hero-section');
                if(heroSection) {
                    heroSection.style.backgroundImage = `url('${data.img_hero_bg}')`;
                }
            }

            // Segarkan semula paparan
            applyTranslationsToDOM(currentLang);
        }
    } catch (error) {
        console.warn("Gagal menarik kandungan dinamik:", error);
    }
}

initDynamicContent();

// --- 4. LOGIK UI & ANIMASI (Kekalkan yang sedia ada) ---
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
