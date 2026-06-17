// --- Sistem Dwibahasa (i18n) ---
const translations = {
    en: {
        nav_home: "Home", nav_about: "About Us", nav_services: "Services", nav_portfolio: "Portfolio", nav_contact: "Contact",
        hero_title: "Building Digital Solutions <br> <span class='text-gradient'>for the Future</span>",
        hero_desc: "Empowering businesses with cutting-edge Software, AI, and Cloud technologies. Transform your enterprise today.",
        btn_get_started: "Get Started", btn_contact: "Contact Us",
        stat_projects: "Projects Delivered", stat_satisfaction: "Client Satisfaction", stat_experts: "Tech Experts",
        about_title: "About Us", about_sub: "Innovating at the intersection of technology and business.",
        story_title: "Our Story", story_desc: "Founded with a vision to revolutionize the digital landscape, Zenqor Technologies has grown into a leading IT consulting and software development firm. We deliver robust, scalable, and innovative solutions tailored to modern enterprises.",
        mission_title: "Mission", mission_desc: "To accelerate digital transformation through innovative technology.",
        vision_title: "Vision", vision_desc: "To be the global benchmark for technological excellence and AI integration.",
        core_title: "Core Values", core_1: "Innovation First", core_2: "Uncompromised Quality", core_3: "Client-Centric Approach", core_4: "Security & Integrity",
        services_title: "Our Services", services_sub: "End-to-end IT solutions to scale your business.",
        srv_1_title: "Mobile App Development", srv_1_desc: "Native Android and cross-platform solutions engineered for performance and UX.",
        srv_2_title: "Website Development", srv_2_desc: "Responsive, secure, and fast enterprise-grade web applications.",
        srv_3_title: "Custom Software", srv_3_desc: "Bespoke business systems and ERPs designed for your unique workflow.",
        srv_4_title: "API Integration", srv_4_desc: "Seamless connectivity between your internal systems and third-party tools.",
        srv_5_title: "Cloud Infrastructure", srv_5_desc: "Scalable cloud hosting, migration, and management (AWS, Azure, GCP).",
        srv_6_title: "AI & Automation", srv_6_desc: "Machine learning models and intelligent bots to automate business processes.",
        port_title: "Featured Portfolio", port_sub: "Our recent technological masterpieces.",
        port_1_title: "FinTech Dashboard Analytics", port_2_title: "AI Supply Chain Predictor", btn_demo: "Live Demo",
        contact_title: "Contact Us", contact_sub: "Let's discuss your next big project.",
        get_in_touch: "Get In Touch", btn_whatsapp: "Chat on WhatsApp",
        send_msg: "Send a Message", lbl_name: "Full Name", lbl_email: "Email Address", lbl_service: "Interested Service",
        opt_1: "Software Development", opt_2: "Cloud Solutions", opt_3: "AI & Automation", opt_4: "Other",
        lbl_msg: "Message", btn_send: "Send Message", footer_txt: "© 2026 Zenqor Technologies. All rights reserved."
    },
    ms: {
        nav_home: "Utama", nav_about: "Tentang Kami", nav_services: "Perkhidmatan", nav_portfolio: "Portfolio", nav_contact: "Hubungi",
        hero_title: "Membina Penyelesaian Digital <br> <span class='text-gradient'>untuk Masa Hadapan</span>",
        hero_desc: "Memperkasakan perniagaan dengan teknologi Perisian, AI, dan Awan yang canggih. Transformasikan perusahaan anda hari ini.",
        btn_get_started: "Mula Sekarang", btn_contact: "Hubungi Kami",
        stat_projects: "Projek Selesai", stat_satisfaction: "Kepuasan Pelanggan", stat_experts: "Pakar Teknologi",
        about_title: "Tentang Kami", about_sub: "Berinovasi di titik pertemuan teknologi dan perniagaan.",
        story_title: "Kisah Kami", story_desc: "Ditubuhkan dengan visi untuk merevolusikan landskap digital, Zenqor Technologies telah berkembang menjadi firma perundingan IT dan pembangunan perisian terkemuka. Kami menyediakan penyelesaian yang teguh, boleh dikembangkan, dan inovatif yang direka khas untuk perusahaan moden.",
        mission_title: "Misi", mission_desc: "Mempercepatkan transformasi digital melalui teknologi inovatif.",
        vision_title: "Visi", vision_desc: "Menjadi penanda aras global untuk kecemerlangan teknologi dan integrasi AI.",
        core_title: "Nilai Teras", core_1: "Utamakan Inovasi", core_2: "Kualiti Tanpa Kompromi", core_3: "Pendekatan Berpusatkan Pelanggan", core_4: "Keselamatan & Integriti",
        services_title: "Perkhidmatan Kami", services_sub: "Penyelesaian IT menyeluruh untuk mengembangkan perniagaan anda.",
        srv_1_title: "Pembangunan Aplikasi Mudah Alih", srv_1_desc: "Penyelesaian Android natif dan rentas platform yang direka untuk prestasi dan UX.",
        srv_2_title: "Pembangunan Laman Web", srv_2_desc: "Aplikasi web gred perusahaan yang responsif, selamat, dan pantas.",
        srv_3_title: "Perisian Khusus", srv_3_desc: "Sistem perniagaan khas dan ERP yang direka untuk aliran kerja unik anda.",
        srv_4_title: "Integrasi API", srv_4_desc: "Ketersambungan lancar antara sistem dalaman anda dan alat pihak ketiga.",
        srv_5_title: "Infrastruktur Awan", srv_5_desc: "Pengehosan awan yang boleh dikembangkan, migrasi, dan pengurusan (AWS, Azure, GCP).",
        srv_6_title: "AI & Automasi", srv_6_desc: "Model pembelajaran mesin dan bot pintar untuk mengautomasikan proses perniagaan.",
        port_title: "Portfolio Pilihan", port_sub: "Karya agung teknologi kami yang terkini.",
        port_1_title: "Analitik Papan Pemuka FinTech", port_2_title: "Peramal Rantaian Bekalan AI", btn_demo: "Demo Langsung",
        contact_title: "Hubungi Kami", contact_sub: "Mari bincangkan projek besar anda yang seterusnya.",
        get_in_touch: "Berhubung Dengan Kami", btn_whatsapp: "Sembang di WhatsApp",
        send_msg: "Hantar Mesej", lbl_name: "Nama Penuh", lbl_email: "Alamat E-mel", lbl_service: "Perkhidmatan Diminati",
        opt_1: "Pembangunan Perisian", opt_2: "Penyelesaian Awan", opt_3: "AI & Automasi", opt_4: "Lain-lain",
        lbl_msg: "Mesej", btn_send: "Hantar Mesej", footer_txt: "© 2026 Zenqor Technologies. Hak cipta terpelihara."
    }
};

const langToggle = document.getElementById('lang-toggle');
let currentLang = localStorage.getItem('zenqor-lang') || 'en';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('zenqor-lang', lang);
    document.documentElement.lang = lang;
    langToggle.textContent = lang === 'en' ? 'MS' : 'EN';
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if(translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
}

if (langToggle) {
    langToggle.addEventListener('click', () => {
        setLanguage(currentLang === 'en' ? 'ms' : 'en');
    });
}

// Laksanakan bahasa semasa dimuatkan
setLanguage(currentLang);

// --- Pengurusan Tema (Dark/Light Mode) ---
const themeToggle = document.getElementById('theme-toggle');
const rootElement = document.documentElement;
const themeIcon = themeToggle.querySelector('i');

const savedTheme = localStorage.getItem('zenqor-theme') || 'light';
rootElement.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = rootElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    rootElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('zenqor-theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    if (theme === 'dark') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
}

// --- Menu Mudah Alih (Mobile Menu) ---
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

// --- Animasi Fade-In semasa Menatal (Scroll Intersection Observer) ---
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(section => {
    observer.observe(section);
});

// --- Simulasi Hantar Borang (Contact Form) ---
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('button[type="submit"]');
        const originalText = btn.textContent;
        
        btn.textContent = currentLang === 'en' ? 'Sending...' : 'Menghantar...';
        btn.disabled = true;
        
        setTimeout(() => {
            btn.textContent = currentLang === 'en' ? 'Message Sent Successfully!' : 'Mesej Berjaya Dihantar!';
            btn.style.backgroundColor = '#25D366';
            contactForm.reset();
            
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.backgroundColor = '';
                btn.disabled = false;
            }, 3000);
        }, 1500);
    });
}
