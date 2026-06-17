// --- 1. KAMUS TERJEMAHAN (Semua teks berpusat di sini) ---
const translations = {
    en: {
        nav_home: "Home", nav_about: "About", nav_services: "Services", nav_portfolio: "Portfolio", nav_careers: "Careers", nav_contact: "Contact",
        hero_badge: "From Curiosity to Capability",
        hero_title: "Building Games, Software & <br><span class='text-primary'>Digital Experiences</span>",
        hero_sub: "Zenqor Technologies delivers innovative game development, web solutions and enterprise software for businesses and organizations.",
        btn_portfolio: "View Portfolio", btn_contact: "Contact Us",
        stat_1: "Projects Shipped", stat_2: "Uptime & Security", stat_3: "Gamers & Users", stat_gov: "Gov", stat_4: "Certified Partner",
        about_title: "The Power Engine <span class='text-primary'>Behind Your Ideas</span>",
        about_sub: "We combine game-engine rendering techniques with robust enterprise backend architecture.",
        tech_1: "Frontend & UI", tech_2: "Backend", tech_3: "Database", tech_4: "Cloud Infrastructure",
        srv_main_title: "Our <span class='text-primary'>Core Services</span>",
        srv_main_sub: "From high-fidelity gaming experiences to secure government software ecosystems.",
        srv_1_t: "Game Development", srv_1_d: "Next-gen 3D/2D games engineered for consoles, PC, and immersive environments.",
        srv_2_t: "Mobile App Dev", srv_2_d: "High-performance iOS and Android applications and mobile games.",
        srv_3_t: "Website Development", srv_3_d: "Ultra-fast, responsive, and SEO-optimized modern web experiences.",
        srv_4_t: "Custom Software", srv_4_d: "Scalable, bespoke enterprise and government solutions.",
        srv_5_t: "UI/UX Design", srv_5_d: "Player-centric interfaces and conversion-optimized enterprise dashboards.",
        srv_6_t: "AI Automation", srv_6_d: "Machine learning integrations for smarter business operations.",
        srv_7_t: "Cloud Infrastructure", srv_7_d: "Secure, scalable, and compliant cloud deployment and architecture.",
        port_main_title: "Featured <span class='text-primary'>Portfolio</span>",
        port_main_sub: "Pioneering digital projects across gaming and enterprise sectors.",
        tag_1: "Mobile Game", port_1_t: "Project Nexus", port_1_d: "A multiplayer tactical RPG for Android and iOS devices.",
        tag_2: "Enterprise System", port_2_t: "Gov-Data Architecture", port_2_d: "Secure, high-availability data processing hub for municipal governance.",
        tag_3: "AI Solution", port_3_t: "Neural Logistics", port_3_d: "Machine-learning driven supply chain optimization dashboard.",
        car_title: "Join the <span class='text-primary'>Zenqor</span> Vanguard",
        car_sub: "We are always looking for visionary developers, artists, and engineers to build the future of tech and gaming.",
        btn_careers: "View Open Roles",
        con_title: "Initialize <span class='text-primary'>Connection</span>",
        con_sub: "Partner with us to engineer your next technological leap.",
        hq_title: "Headquarters", hq_addr: "Klang Valley Tech Park<br>Selangor, Malaysia",
        ph_name: "Designation / Name", ph_email: "Corporate Email", 
        opt_def: "Select Project Type", opt_1: "Game Development", opt_2: "Enterprise Software", opt_3: "Web Application", opt_4: "AI / Cloud Infrastructure",
        ph_msg: "Project Specifications", btn_submit: "Deploy Message",
        footer_sub: "Building Games, Software & Digital Experiences For The Future.",
        footer_copy: "&copy; 2026 Zenqor Technologies (Malaysia). All rights reserved.",
        msg_sending: "Deploying...", msg_success: "Transmission Successful"
    },
    ms: {
        nav_home: "Utama", nav_about: "Tentang Kami", nav_services: "Perkhidmatan", nav_portfolio: "Portfolio", nav_careers: "Kerjaya", nav_contact: "Hubungi",
        hero_badge: "Daripada Rasa Ingin Tahu kepada Keupayaan",
        hero_title: "Membina Permainan, Perisian & <br><span class='text-primary'>Pengalaman Digital</span>",
        hero_sub: "Zenqor Technologies menyediakan pembangunan permainan inovatif, penyelesaian web dan perisian perusahaan untuk perniagaan dan organisasi.",
        btn_portfolio: "Lihat Portfolio", btn_contact: "Hubungi Kami",
        stat_1: "Projek Disiapkan", stat_2: "Masa Awam & Keselamatan", stat_3: "Pemain & Pengguna", stat_gov: "Kerajaan", stat_4: "Rakan Kongsi Diiktiraf",
        about_title: "Enjin Kuasa <span class='text-primary'>Di Sebalik Idea Anda</span>",
        about_sub: "Kami menggabungkan teknik pemaparan enjin permainan dengan seni bina tulang belakang perusahaan yang teguh.",
        tech_1: "Muka Depan & UI", tech_2: "Sistem Belakang", tech_3: "Pangkalan Data", tech_4: "Infrastruktur Awan",
        srv_main_title: "Perkhidmatan <span class='text-primary'>Teras Kami</span>",
        srv_main_sub: "Daripada pengalaman permainan beresolusi tinggi hingga ekosistem perisian kerajaan yang selamat.",
        srv_1_t: "Pembangunan Permainan", srv_1_d: "Permainan 3D/2D generasi baharu yang direka untuk konsol, PC dan persekitaran imersif.",
        srv_2_t: "Pembangunan Aplikasi Pintar", srv_2_d: "Aplikasi iOS dan Android berprestasi tinggi serta permainan mudah alih.",
        srv_3_t: "Pembangunan Laman Web", srv_3_d: "Pengalaman web moden yang amat pantas, responsif dan dioptimumkan SEO.",
        srv_4_t: "Perisian Khusus", srv_4_d: "Penyelesaian perusahaan dan kerajaan yang boleh diskala mengikut keperluan.",
        srv_5_t: "Reka Bentuk UI/UX", srv_5_d: "Antara muka mesra pengguna dan papan pemuka perusahaan yang dioptimumkan.",
        srv_6_t: "Automasi AI", srv_6_d: "Integrasi pembelajaran mesin untuk operasi perniagaan yang lebih pintar.",
        srv_7_t: "Infrastruktur Awan", srv_7_d: "Penggunaan dan seni bina awan yang selamat, berskala dan mematuhi piawaian.",
        port_main_title: "Portfolio <span class='text-primary'>Pilihan</span>",
        port_main_sub: "Mempelopori projek digital dalam sektor permainan dan perusahaan.",
        tag_1: "Permainan Mudah Alih", port_1_t: "Projek Nexus", port_1_d: "RPG taktikal berbilang pemain untuk peranti Android dan iOS.",
        tag_2: "Sistem Perusahaan", port_2_t: "Seni Bina Data Kerajaan", port_2_d: "Hab pemprosesan data keselamatan tinggi untuk tadbir urus perbandaran.",
        tag_3: "Penyelesaian AI", port_3_t: "Logistik Neural", port_3_d: "Papan pemuka pengoptimuman rantaian bekalan berasaskan pembelajaran mesin.",
        car_title: "Sertai Barisan Hadapan <span class='text-primary'>Zenqor</span>",
        car_sub: "Kami sentiasa mencari pembangun, artis, dan jurutera berwawasan untuk membina masa depan teknologi dan permainan.",
        btn_careers: "Lihat Jawatan Kosong",
        con_title: "Mulakan <span class='text-primary'>Hubungan</span>",
        con_sub: "Bekerjasama dengan kami untuk merancang lonjakan teknologi anda yang seterusnya.",
        hq_title: "Ibu Pejabat", hq_addr: "Taman Teknologi Lembah Klang<br>Selangor, Malaysia",
        ph_name: "Jawatan / Nama", ph_email: "E-mel Korporat", 
        opt_def: "Pilih Jenis Projek", opt_1: "Pembangunan Permainan", opt_2: "Perisian Perusahaan", opt_3: "Aplikasi Web", opt_4: "AI / Infrastruktur Awan",
        ph_msg: "Spesifikasi Projek", btn_submit: "Hantar Mesej",
        footer_sub: "Membina Permainan, Perisian & Pengalaman Digital Masa Hadapan.",
        footer_copy: "&copy; 2026 Zenqor Technologies (Malaysia). Hak cipta terpelihara.",
        msg_sending: "Menghantar...", msg_success: "Mesej Berjaya Dihantar"
    }
};

// --- 2. SISTEM PENGURUSAN BAHASA ---
const langToggle = document.getElementById('lang-toggle');
let currentLang = localStorage.getItem('zenqor-lang') || 'en';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('zenqor-lang', lang);
    document.documentElement.lang = lang;
    
    if(langToggle) {
        langToggle.textContent = lang === 'en' ? 'MS' : 'EN';
    }
    
    // Suntik Teks HTML Biasa
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if(translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Suntik Teks Placeholder Borang
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if(translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });
}

if(langToggle) {
    langToggle.addEventListener('click', () => {
        setLanguage(currentLang === 'en' ? 'ms' : 'en');
    });
}

// Mulakan Bahasa Secara Automatik
setLanguage(currentLang);

// --- 3. SISTEM PENGURUSAN TEMA (Dark/Light) ---
const themeToggleBtn = document.getElementById('theme-toggle');
const rootElement = document.documentElement;
const themeIcon = themeToggleBtn.querySelector('i');

const savedTheme = localStorage.getItem('zenqor-engine-theme') || 'light';
rootElement.setAttribute('data-theme', savedTheme);
updateIcon(savedTheme);

themeToggleBtn.addEventListener('click', () => {
    const currentTheme = rootElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    rootElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('zenqor-engine-theme', newTheme);
    updateIcon(newTheme);
});

function updateIcon(theme) {
    if(theme === 'light') {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    } else {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
}

// --- 4. MENU MUDAH ALIH ---
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// --- 5. ANIMASI SKROL (REVEAL) ---
const revealElements = document.querySelectorAll('.reveal');

const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
};

const revealOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const revealObserver = new IntersectionObserver(revealCallback, revealOptions);
revealElements.forEach(el => revealObserver.observe(el));

// --- 6. SIMULASI BORANG HUBUNGI ---
const form = document.getElementById('mainContactForm');
if(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('button');
        const originalText = translations[currentLang]['btn_submit']; // Rujuk terus dari kamus
        
        btn.textContent = translations[currentLang]['msg_sending'];
        btn.disabled = true;
        
        setTimeout(() => {
            btn.textContent = translations[currentLang]['msg_success'];
            btn.style.background = '#059669'; 
            form.reset();
            
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.background = '';
                btn.disabled = false;
            }, 3000);
        }, 1200);
    });
}
