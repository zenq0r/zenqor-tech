// --- 1. KAMUS TERJEMAHAN (Semua teks berpusat di sini) ---
const translations = {
    en: {
        nav_home: "Home", nav_about: "About", nav_services: "Services", nav_portfolio: "Portfolio", nav_careers: "Careers", nav_contact: "Contact",
        nav_careers_join: "Join the Zenqor Vanguard & Community",
        nav_port_gaming: "Gaming Development", nav_port_web: "Website Development",
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
        
        // Terjemahan Baharu untuk Laman Portfolio
        pg_hero_title: "Next-Gen <span class='text-primary'>Gaming</span>",
        pg_hero_sub: "Immersive worlds engineered with Unreal Engine & Unity.",
        pg_1_t: "Project Nexus", pg_1_d: "A multiplayer tactical RPG featuring cross-platform play.",
        pg_2_t: "Cyber Drift", pg_2_d: "High-octane racing simulator built for next-gen consoles.",
        pg_3_t: "Aetheria Quest", pg_3_d: "Open-world adventure game with AI-driven NPC behaviors.",
        pw_hero_title: "Enterprise <span class='text-primary'>Web Solutions</span>",
        pw_hero_sub: "Scalable architectures and conversion-optimized dashboards.",
        pw_1_t: "FinTech Analytics Hub", pw_1_d: "Secure financial dashboard for real-time market data.",
        pw_2_t: "Gov-Data Architecture", pw_2_d: "High-availability data processing system for municipal governance.",
        pw_3_t: "E-Commerce Ecosystem", pw_3_d: "Scalable online retail platform with integrated AI supply chain.",

        car_page_badge: "We Are Hiring",
        car_page_title: "Shape the Future of <span class='text-primary'>Technology</span>",
        car_page_sub: "Join our team of elite developers, designers, and engineers. Build impactful solutions from enterprise systems to next-gen games.",
        perk_1_t: "Hybrid Work", perk_1_d: "Flexible working hours and work-from-home opportunities.",
        perk_2_t: "Health Coverage", perk_2_d: "Comprehensive medical insurance for you and your family.",
        perk_3_t: "Career Growth", perk_3_d: "Annual training allowance and rapid promotion pathways.",
        perk_4_t: "Modern Tech", perk_4_d: "Work with the latest tools, game engines, and cloud infrastructure.",
        jobs_title: "Open <span class='text-primary'>Positions</span>",
        job_1_t: "Senior Game Developer", job_1_d: "Lead the development of 3D titles using Unreal Engine and Unity. 3+ years experience required.",
        job_2_t: "Full Stack Engineer", job_2_d: "Build highly scalable enterprise applications using React, Node.js, and AWS.",
        job_3_t: "UI/UX Designer", job_3_d: "Design intuitive interfaces for web apps and mobile games. Strong Figma portfolio required.",
        btn_apply: "Apply via Email",
        con_title: "Initialize <span class='text-primary'>Connection</span>",
        con_sub: "Partner with us to engineer your next technological leap.",
        hq_title: "Headquarters", hq_addr: "Bandar Mahkota Cheras<br>Selangor, Malaysia",
        ph_name: "Designation / Name", ph_email: "Corporate Email", 
        opt_def: "Select Project Type", opt_1: "Game Development", opt_2: "Enterprise Software", opt_3: "Web Application", opt_4: "AI / Cloud Infrastructure",
        ph_msg: "Project Specifications", btn_submit: "Deploy Message",
        footer_sub: "Building Games, Software & Digital Experiences For The Future.",
        footer_copy: "&copy; 2026 Zenqor Technologies (Malaysia). All rights reserved.",
        msg_sending: "Deploying...", msg_success: "Transmission Successful"
    },
    ms: {
        nav_home: "Utama", nav_about: "Tentang Kami", nav_services: "Perkhidmatan", nav_portfolio: "Portfolio", nav_careers: "Kerjaya", nav_contact: "Hubungi",
        nav_careers_join: "Sertai Zenqor Vanguard & Komuniti",
        nav_port_gaming: "Pembangunan Permainan", nav_port_web: "Pembangunan Laman Web",
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
        
        // Terjemahan Baharu untuk Laman Portfolio
        pg_hero_title: "Permainan <span class='text-primary'>Generasi Baharu</span>",
        pg_hero_sub: "Dunia imersif yang direka dengan Unreal Engine & Unity.",
        pg_1_t: "Projek Nexus", pg_1_d: "RPG taktikal berbilang pemain dengan fungsi rentas platform.",
        pg_2_t: "Cyber Drift", pg_2_d: "Simulator perlumbaan berkuasa tinggi untuk konsol generasi baharu.",
        pg_3_t: "Misi Aetheria", pg_3_d: "Permainan dunia terbuka dengan tingkah laku NPC dipacu AI.",
        pw_hero_title: "Penyelesaian <span class='text-primary'>Web Perusahaan</span>",
        pw_hero_sub: "Seni bina berskala dan papan pemuka yang dioptimumkan.",
        pw_1_t: "Hab Analitik FinTech", pw_1_d: "Papan pemuka kewangan selamat untuk data pasaran masa nyata.",
        pw_2_t: "Seni Bina Data Kerajaan", pw_2_d: "Sistem pemprosesan data ketersediaan tinggi untuk tadbir urus perbandaran.",
        pw_3_t: "Ekosistem E-Dagang", pw_3_d: "Platform peruncitan dalam talian berskala besar dengan integrasi rantaian bekalan AI.",

        car_page_badge: "Kami Sedang Mengambil Pekerja",
        car_page_title: "Bentuk Masa Hadapan <span class='text-primary'>Teknologi</span>",
        car_page_sub: "Sertai pasukan pembangun, pereka, dan jurutera elit kami. Bina penyelesaian berimpak dari sistem perusahaan hingga permainan generasi baharu.",
        perk_1_t: "Kerja Hibrid", perk_1_d: "Waktu kerja fleksibel dan peluang bekerja dari rumah.",
        perk_2_t: "Perlindungan Kesihatan", perk_2_d: "Insurans perubatan komprehensif untuk anda dan keluarga.",
        perk_3_t: "Pembangunan Kerjaya", perk_3_d: "Elaun latihan tahunan dan laluan kenaikan pangkat yang pantas.",
        perk_4_t: "Teknologi Moden", perk_4_d: "Bekerja dengan alatan terkini, enjin permainan, dan infrastruktur awan.",
        jobs_title: "Jawatan <span class='text-primary'>Kosong</span>",
        job_1_t: "Pembangun Permainan Kanan", job_1_d: "Menerajui pembangunan tajuk 3D menggunakan Unreal Engine & Unity. Pengalaman 3+ tahun diperlukan.",
        job_2_t: "Jurutera Full Stack", job_2_d: "Membina aplikasi perusahaan berskala tinggi menggunakan React, Node.js, dan AWS.",
        job_3_t: "Pereka UI/UX", job_3_d: "Mereka bentuk antara muka intuitif untuk aplikasi web dan permainan. Portfolio Figma diperlukan.",
        btn_apply: "Mohon melalui E-mel",
        con_title: "Mulakan <span class='text-primary'>Hubungan</span>",
        con_sub: "Bekerjasama dengan kami untuk merancang lonjakan teknologi anda yang seterusnya.",
        hq_title: "Ibu Pejabat", hq_addr: "Bandar Mahkota Cheras<br>Selangor, Malaysia",
        ph_name: "Jawatan / Nama", ph_email: "E-mel Korporat", 
        opt_def: "Pilih Jenis Projek", opt_1: "Pembangunan Permainan", opt_2: "Perisian Perusahaan", opt_3: "Aplikasi Web", opt_4: "AI / Infrastruktur Awan",
        ph_msg: "Spesifikasi Projek", btn_submit: "Hantar Mesej",
        footer_sub: "Membina Permainan, Perisian & Pengalaman Digital Masa Hadapan.",
        footer_copy: "&copy; 2026 Zenqor Technologies (Malaysia). Hak cipta terpelihara.",
        msg_sending: "Menghantar...", msg_success: "Mesej Berjaya Dihantar"
    }
};

// Pastikan bahagian bawah script (Pengurusan Bahasa, Tema, Dropdown, Animasi, Borang) tidak diubah dan dikekalkan.

const langToggle = document.getElementById('lang-toggle');
let currentLang = localStorage.getItem('zenqor-lang') || 'en';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('zenqor-lang', lang);
    document.documentElement.lang = lang;
    
    if(langToggle) {
        langToggle.textContent = lang === 'en' ? 'MS' : 'EN';
    }
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if(translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

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

// --- 4. LOGIK POP-UP MULTI-DROPDOWN ---
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = toggle.getAttribute('data-target');
        const menu = document.getElementById(targetId);
        
        // Tutup menu lain jika ada yang terbuka
        document.querySelectorAll('.dropdown-menu').forEach(m => {
            if (m !== menu) m.classList.remove('show');
        });
        
        menu.classList.toggle('show');
    });
});

window.addEventListener('click', function(e) {
    if (!e.target.closest('.nav-item-dropdown')) {
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            menu.classList.remove('show');
        });
    }
});

// --- 5. MENU MUDAH ALIH ---
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (e) => {
        if(e.target.closest('.dropdown-toggle')) return; // Jangan tutup jika sedang tekan dropdown
        navLinks.classList.remove('active');
    });
});

// --- 6. ANIMASI SKROL (REVEAL) ---
const revealElements = document.querySelectorAll('.reveal');
const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
};
const revealOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
const revealObserver = new IntersectionObserver(revealCallback, revealOptions);
revealElements.forEach(el => revealObserver.observe(el));

// --- 7. SIMULASI BORANG HUBUNGI ---
const form = document.getElementById('mainContactForm');
if(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('button');
        const originalText = translations[currentLang]['btn_submit'];
        
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
