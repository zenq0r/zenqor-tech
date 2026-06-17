// --- 1. KAMUS TERJEMAHAN ---
// --- 1. KAMUS TERJEMAHAN ---
const translations = {
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_services: "Services",
        nav_portfolio: "Portfolio",
        nav_careers: "Careers",
        nav_contact: "Contact",
        nav_careers_join: "Join the Zenqor Vanguard",
        nav_port_gaming: "Projects",
        nav_port_web: "Solutions",
        hero_badge: "Professional Digital Development",
        hero_title: "Building High-Performance Digital Solutions <br><span class='text-primary'>Web, Cloud & Custom Systems</span>",
        hero_sub: "Zenqor Technologies delivers professional development services for websites, cloud systems, custom software, and optimized digital solutions tailored to modern business needs.",
        btn_portfolio: "View Portfolio",
        btn_contact: "Contact Us",
        stat_1: "Projects Delivered",
        stat_2: "Optimized Systems",
        stat_3: "Active Users",
        stat_gov: "Supported Frameworks",
        stat_4: "Standalone Solutions",
        about_title: "Technology Built for <span class='text-primary'>Performance & Reliability</span>",
        about_sub: "We develop clean, efficient, and scalable digital solutions that improve operations, enhance user experience, and support long-term growth.",
        tech_1: "Custom Development",
        tech_2: "NUI (HTML/CSS/JS)",
        tech_3: "MySQL Database",
        tech_4: "System Optimization",
        srv_main_title: "Our <span class='text-primary'>Development Services</span>",
        srv_main_sub: "From custom software and web applications to cloud-based solutions and system optimization.",
        srv_1_t: "Custom Software",
        srv_1_d: "Tailor-made digital solutions built to match your workflow, business goals, and operational needs.",
        srv_2_t: "Standalone Solutions",
        srv_2_d: "Flexible, framework-independent tools that integrate smoothly into existing systems.",
        srv_3_t: "UI & Interface Design",
        srv_3_d: "Modern, responsive, and user-friendly interfaces designed for clarity, usability, and performance.",
        srv_4_t: "System Integration",
        srv_4_d: "Seamless integration for business platforms, custom frameworks, and third-party services.",
        srv_5_t: "Performance Optimization",
        srv_5_d: "Improve speed, reduce resource usage, and maintain stable performance across your system.",
        srv_6_t: "Bug Fixing & Support",
        srv_6_d: "Resolve technical issues, legacy code problems, and framework errors with reliable support.",
        srv_7_t: "Database Tuning",
        srv_7_d: "Optimize SQL queries and database structure to improve efficiency and reduce latency.",
        
        pg_hero_title: "Featured <span class='text-primary'>Projects</span>",
        pg_hero_sub: "Selected digital solutions developed for real-world use cases and professional environments.",
        pg_1_t: "Malaysia Prayer Time & Adhan Notifications",
        pg_1_d: "A responsive prayer time and adhan notification system with accurate schedules based on official state and zone data verified by JAKIM.",
        pg_2_t: "Standalone Billing System",
        pg_2_d: "A flexible invoicing solution designed to work smoothly across different system environments.",
        pg_3_t: "Immersive Workflow System",
        pg_3_d: "A dynamic and optimized digital system built to support structured operations and interactive user experiences.",
        pw_hero_title: "Complete <span class='text-primary'>Solutions</span>",
        pw_hero_sub: "End-to-end configuration, development, and system architecture for modern digital platforms.",
        pw_1_t: "Production-Ready Setup",
        pw_1_d: "A fully configured and optimized foundation ready for deployment and real-world usage.",
        pw_2_t: "Performance Overhaul",
        pw_2_d: "Refactoring and optimization work to improve speed, stability, and overall system efficiency.",
        pw_3_t: "Custom Architecture",
        pw_3_d: "A tailored system structure designed from the ground up to match your unique requirements.",

        car_page_badge: "We Are Hiring",
        car_page_title: "Join the <span class='text-primary'>Development Team</span>",
        car_page_sub: "Work with talented developers and designers to build modern digital experiences.",
        perk_1_t: "Remote Work",
        perk_1_d: "Flexible working hours with 100% remote opportunities.",
        perk_2_t: "Revenue Sharing",
        perk_2_d: "Earn a share from premium projects and digital products.",
        perk_3_t: "Skill Growth",
        perk_3_d: "Learn advanced development practices, optimization methods, and modern workflows.",
        perk_4_t: "Modern Tooling",
        perk_4_d: "Work with the latest IDEs, version control, and efficient design workflows.",
        jobs_title: "Open <span class='text-primary'>Positions</span>",
        job_1_t: "Senior Developer",
        job_1_d: "Develop advanced backend and frontend solutions with strong technical foundations.",
        job_2_t: "UI / Front-End Developer",
        job_2_d: "Design clean and modern interfaces using React, Vue, or Vanilla JS.",
        job_3_t: "Infrastructure Specialist",
        job_3_d: "Manage servers, deployment environments, databases, and system performance.",
        btn_apply: "Apply via Discord/Email",
        con_title: "Start a <span class='text-primary'>Conversation</span>",
        con_sub: "Partner with us to build your next digital product, platform, or custom solution.",
        hq_title: "Headquarters",
        hq_addr: "Bandar Mahkota Cheras<br>Selangor, Malaysia",
        ph_name: "Discord Tag / Name",
        ph_email: "Email Address",
        opt_def: "Select Request Type",
        opt_1: "Custom Software",
        opt_2: "Standalone Solution",
        opt_3: "UI / Interface Design",
        opt_4: "Optimization / Bug Fix",
        ph_msg: "Project Details / Requirements",
        btn_submit: "Send Request",
        footer_sub: "Building professional digital solutions for web, cloud, and custom systems.",
        footer_copy: "&copy; 2026 Zenqor Technologies (Malaysia). All rights reserved.",
        msg_sending: "Sending...",
        msg_success: "Request Sent"
    },
    ms: {
        nav_home: "Utama",
        nav_about: "Tentang Kami",
        nav_services: "Perkhidmatan",
        nav_portfolio: "Portfolio",
        nav_careers: "Kerjaya",
        nav_contact: "Hubungi",
        nav_careers_join: "Sertai Zenqor Vanguard",
        nav_port_gaming: "Projek",
        nav_port_web: "Penyelesaian",
        hero_badge: "Pembangunan Digital Profesional",
        hero_title: "Membangunkan Penyelesaian Digital Berprestasi Tinggi <br><span class='text-primary'>Web, Cloud & Sistem Tersuai</span>",
        hero_sub: "Zenqor Technologies menyediakan perkhidmatan pembangunan profesional untuk laman web, sistem cloud, perisian tersuai, dan penyelesaian digital yang disesuaikan mengikut keperluan moden.",
        btn_portfolio: "Lihat Portfolio",
        btn_contact: "Hubungi Kami",
        stat_1: "Projek Disiapkan",
        stat_2: "Sistem Dioptimumkan",
        stat_3: "Pengguna Aktif",
        stat_gov: "Framework Disokong",
        stat_4: "Penyelesaian Standalone",
        about_title: "Teknologi Yang Dibina Untuk <span class='text-primary'>Prestasi & Kebolehpercayaan</span>",
        about_sub: "Kami membangunkan penyelesaian digital yang kemas, efisien dan berskala untuk membantu operasi menjadi lebih lancar, pengalaman pengguna lebih baik, dan pertumbuhan lebih mampan.",
        tech_1: "Pembangunan Tersuai",
        tech_2: "NUI (HTML/CSS/JS)",
        tech_3: "Pangkalan Data MySQL",
        tech_4: "Pengoptimuman Sistem",
        srv_main_title: "Perkhidmatan <span class='text-primary'>Pembangunan Kami</span>",
        srv_main_sub: "Daripada perisian tersuai dan aplikasi web kepada penyelesaian cloud serta pengoptimuman sistem.",
        srv_1_t: "Perisian Tersuai",
        srv_1_d: "Penyelesaian digital yang dibina mengikut aliran kerja, matlamat perniagaan, dan keperluan operasi anda.",
        srv_2_t: "Penyelesaian Standalone",
        srv_2_d: "Alatan fleksibel yang bebas daripada framework dan mudah disepadukan ke dalam sistem sedia ada.",
        srv_3_t: "Reka Bentuk UI & Antara Muka",
        srv_3_d: "Antara muka moden, responsif dan mesra pengguna yang menekankan kejelasan serta prestasi.",
        srv_4_t: "Integrasi Sistem",
        srv_4_d: "Integrasi lancar untuk platform perniagaan, framework tersuai, dan perkhidmatan pihak ketiga.",
        srv_5_t: "Pengoptimuman Prestasi",
        srv_5_d: "Meningkatkan kelajuan, mengurangkan penggunaan sumber, dan mengekalkan prestasi sistem yang stabil.",
        srv_6_t: "Pembaikan Ralat & Sokongan",
        srv_6_d: "Menyelesaikan isu teknikal, masalah kod lama, dan ralat framework dengan sokongan yang boleh dipercayai.",
        srv_7_t: "Penalaan Pangkalan Data",
        srv_7_d: "Mengoptimumkan pertanyaan SQL dan struktur pangkalan data untuk kecekapan yang lebih baik serta mengurangkan latensi.",
        
        pg_hero_title: "Projek <span class='text-primary'>Terpilih</span>",
        pg_hero_sub: "Penyelesaian digital terpilih yang dibangunkan untuk kegunaan sebenar dan persekitaran profesional.",
        pg_1_t: "Notifikasi Waktu Solat & Azan Malaysia",
        pg_1_d: "Sistem notifikasi waktu solat dan azan yang responsif dengan jadual tepat berdasarkan data rasmi zon dan negeri yang disahkan oleh JAKIM.",
        pg_2_t: "Sistem Bil Standalone",
        pg_2_d: "Penyelesaian invois yang fleksibel dan direka untuk berfungsi lancar dalam pelbagai persekitaran sistem.",
        pg_3_t: "Sistem Aliran Kerja Imersif",
        pg_3_d: "Sistem digital yang dinamik dan dioptimumkan untuk menyokong operasi tersusun serta pengalaman pengguna yang interaktif.",
        pw_hero_title: "Penyelesaian <span class='text-primary'>Lengkap</span>",
        pw_hero_sub: "Konfigurasi, pembangunan, dan seni bina sistem dari hujung ke hujung untuk platform digital moden.",
        pw_1_t: "Persediaan Sedia Produksi",
        pw_1_d: "Asas sistem yang lengkap, dikonfigurasi rapi, dan dioptimumkan untuk penggunaan sebenar.",
        pw_2_t: "Peningkatan Prestasi",
        pw_2_d: "Kerja penulisan semula dan pengoptimuman untuk meningkatkan kelajuan, kestabilan, dan kecekapan keseluruhan sistem.",
        pw_3_t: "Seni Bina Tersuai",
        pw_3_d: "Struktur sistem yang direka dari asas mengikut keperluan unik projek anda.",

        car_page_badge: "Kami Sedang Mengambil Pekerja",
        car_page_title: "Sertai <span class='text-primary'>Pasukan Pembangunan</span>",
        car_page_sub: "Bekerjasama dengan pembangun dan pereka berbakat untuk menghasilkan pengalaman digital yang moden.",
        perk_1_t: "Kerja Jarak Jauh",
        perk_1_d: "Waktu kerja fleksibel dengan peluang bekerja dari rumah 100%.",
        perk_2_t: "Perkongsian Keuntungan",
        perk_2_d: "Raih bahagian pendapatan daripada projek premium dan produk digital.",
        perk_3_t: "Pembangunan Kemahiran",
        perk_3_d: "Belajar amalan pembangunan terkini, teknik pengoptimuman, dan aliran kerja moden.",
        perk_4_t: "Alatan Moden",
        perk_4_d: "Bekerja dengan IDE terkini, kawalan versi, dan proses reka bentuk yang cekap.",
        jobs_title: "Jawatan <span class='text-primary'>Kosong</span>",
        job_1_t: "Pembangun Kanan",
        job_1_d: "Membangunkan penyelesaian backend dan frontend yang maju dengan asas teknikal yang kukuh.",
        job_2_t: "Pembangun UI / Muka Depan",
        job_2_d: "Mereka bentuk antara muka yang kemas dan moden menggunakan React, Vue, atau Vanilla JS.",
        job_3_t: "Pakar Infrastruktur",
        job_3_d: "Mengurus pelayan, persekitaran deployment, pangkalan data, dan prestasi sistem.",
        btn_apply: "Mohon melalui Discord/E-mel",
        con_title: "Mulakan <span class='text-primary'>Perbincangan</span>",
        con_sub: "Bekerjasama dengan kami untuk membina produk digital, platform, atau penyelesaian tersuai anda yang seterusnya.",
        hq_title: "Ibu Pejabat",
        hq_addr: "Bandar Mahkota Cheras<br>Selangor, Malaysia",
        ph_name: "Tag Discord / Nama",
        ph_email: "Alamat E-mel",
        opt_def: "Pilih Jenis Permintaan",
        opt_1: "Perisian Tersuai",
        opt_2: "Penyelesaian Standalone",
        opt_3: "Reka Bentuk UI / Antara Muka",
        opt_4: "Pengoptimuman / Pembaikan Ralat",
        ph_msg: "Butiran / Keperluan Projek",
        btn_submit: "Hantar Permintaan",
        footer_sub: "Membangunkan penyelesaian digital profesional untuk web, cloud, dan sistem tersuai.",
        footer_copy: "&copy; 2026 Zenqor Technologies (Malaysia). Hak cipta terpelihara.",
        msg_sending: "Menghantar...",
        msg_success: "Permintaan Telah Dihantar"
    }
};

// --- 2. MULTI-LANGUAGE SYSTEM ---
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

// --- 3. THEME MANAGER ---
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

// --- 4. MULTI-DROPDOWN POP-UP LOGIC ---
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = toggle.getAttribute('data-target');
        const menu = document.getElementById(targetId);
        
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

// --- 5. MOBILE MENU ---
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (e) => {
        if(e.target.closest('.dropdown-toggle')) return;
        navLinks.classList.remove('active');
    });
});

// --- 6. SCROLL ANIMATION (REVEAL) ---
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

// --- 7. CONTACT FORM SIMULATION ---
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