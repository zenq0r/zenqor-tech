// --- 1. KAMUS TERJEMAHAN ---
const translations = {
    en: {
        nav_return: "Return Policy",
        rp_title: "Refunds and Returns",
        rp_desc1: "At Zenqor Technologies, all digital product sales (scripts, server setups) are final. Refunds are only issued if the product is proven to be fundamentally broken and our support team cannot resolve the issue within 14 days.",
        rp_desc2: "Please open a ticket in our Discord or email us at info@zenqor.com.my for any inquiries regarding your purchase.",
        nav_home: "Home", nav_about: "About", nav_services: "Services", nav_portfolio: "Portfolio", nav_careers: "Careers", nav_contact: "Contact",
        nav_careers_join: "Join the Zenqor Vanguard",
        nav_port_gaming: "Scripting Projects", nav_port_web: "Server Development",
        hero_badge: "Premium FiveM Development",
        hero_title: "Designing, Developing & Deploying <br><span class='text-primary'>Websites, Cloud Systems & FiveM Resources</span>",
        hero_sub: "Zenqor Technologies specializes in custom software development, website development, Lua scripting, standalone resources, and server optimization for gaming communities, enterprises, and digital platforms.",
        btn_portfolio: "View Scripts", btn_contact: "Hire Us",
        stat_1: "Scripts Released", stat_2: "Optimized Servers", stat_3: "Active Players", stat_gov: "Frameworks", stat_4: "Standalone Systems",
        about_title: "The Code Behind <span class='text-primary'>Immersive Roleplay</span>",
        about_sub: "We write clean, efficient, and well-optimized Lua scripts that add real depth to server gameplay without overloading your server resources.",
        tech_1: "Lua Scripting", tech_2: "NUI (HTML/CSS/JS)", tech_3: "MySQL Database", tech_4: "Server Optimization",
        srv_main_title: "Our <span class='text-primary'>Development Services</span>",
        srv_main_sub: "From highly optimized standalone tools to immersive roleplay systems.",
        srv_1_t: "Custom Lua Scripts", srv_1_d: "Tailor-made gameplay scripts including jobs, crime systems, mechanics, and economy.",
        srv_2_t: "Standalone Resources", srv_2_d: "Framework-agnostic tools and utilities that drop cleanly into any FiveM setup.",
        srv_3_t: "NUI & UI Design", srv_3_d: "Modern, responsive, and player-centric NUI interfaces built with HTML, CSS, and JS.",
        srv_4_t: "Framework Integration", srv_4_d: "Seamless compatibility and adaptation for QBCore, ESX, QBox, or custom frameworks.",
        srv_5_t: "Server Optimization", srv_5_d: "Profiling and reducing CPU/RAM usage to ensure stable server performance and high FPS.",
        srv_6_t: "Bug Fixing & Support", srv_6_d: "Troubleshooting legacy code, resolving framework errors, and missing export fixes.",
        srv_7_t: "Database Tuning", srv_7_d: "Optimizing SQL queries and database structures to eliminate server latency.",
        
        pg_hero_title: "Premium <span class='text-primary'>FiveM Resources</span>",
        pg_hero_sub: "Custom FiveM roleplay server scripting and website UI designs crafted to match your vision and business needs.",
        pg_1_t: "Malaysia Prayer Time & Adhan Notifications",  pg_1_d: "Malaysia Prayer Time & Adhan Notifications is built with a responsive design and provides accurate prayer times based on the official zones and regions of each state, verified by JAKIM.",
        pg_2_t: "Standalone Billing", pg_2_d: "Framework-agnostic invoicing tool that works instantly on any server architecture.",
        pg_3_t: "Immersive Crime System", pg_3_d: "Complex robberies, evidence tracking, and dynamic NPC interactions built in optimized Lua.",
        pw_hero_title: "Complete <span class='text-primary'>Server Setups</span>",
        pw_hero_sub: "Full-stack server configuration and backend architecture.",
        pw_1_t: "QBCore Server Base", pw_1_d: "Fully configured and optimized QBCore base ready for production and heavy roleplay.",
        pw_2_t: "ESX Performance Overhaul", pw_2_d: "Complete refactoring of legacy ESX servers to improve script ms timings and stability.",
        pw_3_t: "Custom Framework Architecture", pw_3_d: "Built-from-scratch server framework tailored exactly to a community's unique mechanics.",

        car_page_badge: "We Are Hiring",
        car_page_title: "Join the <span class='text-primary'>Development Team</span>",
        car_page_sub: "Work with elite Lua scripters and UI designers to build the next generation of FiveM roleplay experiences.",
        perk_1_t: "Remote Work", perk_1_d: "Flexible working hours and 100% remote work opportunities.",
        perk_2_t: "Revenue Sharing", perk_2_d: "Earn percentages from premium scripts sold on our Tebex store.",
        perk_3_t: "Skill Growth", perk_3_d: "Collaborate and learn advanced programming patterns and optimization techniques.",
        perk_4_t: "Modern Tooling", perk_4_d: "Work with the latest IDE setups, version control, and UI design workflows.",
        jobs_title: "Open <span class='text-primary'>Positions</span>",
        job_1_t: "Senior Lua Scripter", job_1_d: "Develop advanced server-side and client-side scripts. Deep knowledge of FiveM natives required.",
        job_2_t: "NUI / Front-End Developer", job_2_d: "Design sleek, modern in-game interfaces using React, Vue, or Vanilla JS.",
        job_3_t: "Server Infrastructure Tech", job_3_d: "Manage VPS/Dedicated servers, database environments, and anti-cheat implementations.",
        btn_apply: "Apply via Discord/Email",
        con_title: "Initialize <span class='text-primary'>Connection</span>",
        con_sub: "Partner with us to engineer your server's next big feature.",
        hq_title: "Headquarters", hq_addr: "Bandar Mahkota Cheras<br>Selangor, Malaysia",
        ph_name: "Discord Tag / Name", ph_email: "Email Address", 
        opt_def: "Select Request Type", opt_1: "Custom Lua Script", opt_2: "Standalone Resource", opt_3: "NUI / UI Interface", opt_4: "Server Optimization / Bug Fix",
        ph_msg: "Script Specifications / Details", btn_submit: "Send Request",
        footer_sub: "Building Premium Scripts & Server Solutions for FiveM.",
        footer_copy: "&copy; 2026 Zenqor Technologies (Malaysia). All rights reserved.",
        msg_sending: "Sending...", msg_success: "Request Delivered"
    },
    ms: {
        nav_return: "Dasar Pemulangan",
        rp_title: "Pemulangan dan Bayaran Balik",
        rp_desc1: "Di Zenqor Technologies, semua jualan produk digital (skrip, tetapan pelayan) adalah muktamad. Bayaran balik hanya dikeluarkan jika produk dibuktikan rosak sepenuhnya dan pasukan sokongan kami tidak dapat menyelesaikan isu tersebut dalam masa 14 hari.",
        rp_desc2: "Sila buka tiket di Discord kami atau e-mel kepada info@zenqor.com.my untuk sebarang pertanyaan mengenai pembelian anda.",
        nav_home: "Utama", nav_about: "Tentang Kami", nav_services: "Perkhidmatan", nav_portfolio: "Portfolio", nav_careers: "Kerjaya", nav_contact: "Hubungi",
        nav_careers_join: "Sertai Zenqor Vanguard",
        nav_port_gaming: "Projek Skrip", nav_port_web: "Pembangunan Pelayan",
        hero_badge: "Pembangunan FiveM Premium",
        hero_title: "Dari Idea ke Produk Digital <br><span class='text-primary'>FiveM, Website & Sistem Cloud</span>",
        hero_sub: "Zenqor Technologies mengkhusus dalam pembangunan perisian tersuai, pembangunan laman web, skrip Lua, sumber bebas (standalone resources), dan pengoptimuman pelayan untuk komuniti permainan, perusahaan, serta platform digital.",
        btn_portfolio: "Lihat Skrip", btn_contact: "Lantik Kami",
        stat_1: "Skrip Dilancarkan", stat_2: "Pelayan Dioptimumkan", stat_3: "Pemain Aktif", stat_gov: "Frameworks", stat_4: "Sistem Standalone",
        about_title: "Kod Di Sebalik <span class='text-primary'>Roleplay Imersif</span>",
        about_sub: "Kami menulis skrip Lua yang kemas, efisien, dan dioptimumkan untuk menambah kedalaman corak permainan tanpa membebankan sumber pelayan anda.",
        tech_1: "Pengaturcaraan Lua", tech_2: "NUI (HTML/CSS/JS)", tech_3: "Pangkalan Data MySQL", tech_4: "Pengoptimuman Pelayan",
        srv_main_title: "Perkhidmatan <span class='text-primary'>Pembangunan Kami</span>",
        srv_main_sub: "Daripada alatan standalone yang dioptimumkan kepada sistem 'roleplay' yang menyeluruh.",
        srv_1_t: "Skrip Lua Tersuai", srv_1_d: "Skrip permainan khas termasuk sistem pekerjaan, jenayah, mekanik, dan ekonomi.",
        srv_2_t: "Sumber Standalone", srv_2_d: "Alatan bebas framework yang mudah disepadukan terus ke dalam mana-mana pelayan FiveM.",
        srv_3_t: "Reka Bentuk NUI & UI", srv_3_d: "Antara muka NUI yang moden, responsif dan memfokuskan pemain menggunakan HTML, CSS, dan JS.",
        srv_4_t: "Integrasi Framework", srv_4_d: "Keserasian penuh dan penyesuaian untuk QBCore, ESX, QBox, atau framework tersuai.",
        srv_5_t: "Pengoptimuman Pelayan", srv_5_d: "Memantau dan mengurangkan penggunaan CPU/RAM untuk memastikan pelayan stabil dengan FPS tinggi.",
        srv_6_t: "Pembaikan Pepijat", srv_6_d: "Menyelesaikan isu kod lama, membaiki ralat framework, dan isu 'missing export'.",
        srv_7_t: "Konfigurasi Pangkalan Data", srv_7_d: "Mengoptimumkan pertanyaan SQL dan struktur pangkalan data untuk menghapuskan kelengahan (latency).",
        
        pg_hero_title: "Sumber FiveM <span class='text-primary'>Premium</span>",
        pg_hero_sub: "Skrip tersuai untuk pelayan roleplay FiveM serta reka bentuk UI laman web yang disesuaikan mengikut visi dan keperluan perniagaan anda.",
        pg_1_t: "Notifikasi Waktu Solat & Azan Malaysia", pg_1_d: "Notifikasi Waktu Solat & Azan Malaysia dibangunkan secara responsif dengan waktu solat yang tepat mengikut zon dan kawasan setiap negeri berdasarkan data yang disahkan oleh JAKIM.",
        pg_2_t: "Sistem Bil Standalone", pg_2_d: "Alatan invois bebas framework yang berfungsi serta-merta pada sebarang seni bina pelayan.",
        pg_3_t: "Sistem Jenayah Imersif", pg_3_d: "Sistem rompakan kompleks, penjejakan bukti, dan interaksi NPC dinamik dalam Lua yang dioptimumkan.",
        pw_hero_title: "Persediaan <span class='text-primary'>Pelayan Lengkap</span>",
        pw_hero_sub: "Konfigurasi penuh pelayan dan pembinaan seni bina sistem belakang (backend).",
        pw_1_t: "Asas Pelayan QBCore", pw_1_d: "Sistem asas QBCore yang telah dikonfigurasi sepenuhnya dan sedia untuk persekitaran pengeluaran serta 'roleplay' berskala besar.",
        pw_2_t: "Peningkatan Prestasi ESX", pw_2_d: "Penulisan semula kod pelayan ESX lama untuk membaiki kelajuan skrip (ms) dan kestabilan sistem.",
        pw_3_t: "Seni Bina Framework Tersuai", pw_3_d: "Membina framework pelayan dari asas, direka khusus mengikut mekanik unik sesebuah komuniti.",

        car_page_badge: "Kami Sedang Mengambil Pekerja",
        car_page_title: "Sertai <span class='text-primary'>Pasukan Pembangunan</span>",
        car_page_sub: "Bekerjasama dengan pengaturcara Lua dan pereka UI elit untuk membina masa hadapan pengalaman roleplay FiveM.",
        perk_1_t: "Kerja Jarak Jauh", perk_1_d: "Waktu kerja yang fleksibel dengan 100% peluang bekerja dari rumah.",
        perk_2_t: "Perkongsian Keuntungan", perk_2_d: "Raih peratusan daripada jualan skrip premium di kedai Tebex kami.",
        perk_3_t: "Pembangunan Kemahiran", perk_3_d: "Bekerjasama dan pelajari teknik pengoptimuman serta corak pengaturcaraan peringkat tinggi.",
        perk_4_t: "Alatan Moden", perk_4_d: "Bekerja dengan tetapan IDE terkini, kawalan versi, dan aliran kerja reka bentuk UI moden.",
        jobs_title: "Jawatan <span class='text-primary'>Kosong</span>",
        job_1_t: "Pengaturcara Lua Kanan", job_1_d: "Membangunkan skrip pelayan (server-side) dan pelanggan (client-side). Pengalaman mendalam tentang 'natives' FiveM diperlukan.",
        job_2_t: "Pembangun NUI / Muka Depan (Front-End)", job_2_d: "Mereka bentuk antara muka moden dan kemas dalam permainan menggunakan React, Vue, atau Vanilla JS.",
        job_3_t: "Juruteknik Infrastruktur Pelayan", job_3_d: "Menguruskan pelayan VPS/Dedicated, persekitaran pangkalan data, dan pelaksanaan sistem anti-cheat.",
        btn_apply: "Mohon melalui Discord/E-mel",
        con_title: "Mulakan <span class='text-primary'>Hubungan</span>",
        con_sub: "Bekerjasama dengan kami untuk merealisasikan ciri hebat pelayan anda yang seterusnya.",
        hq_title: "Ibu Pejabat", hq_addr: "Bandar Mahkota Cheras<br>Selangor, Malaysia",
        ph_name: "Tag Discord / Nama", ph_email: "Alamat E-mel", 
        opt_def: "Pilih Jenis Permintaan", opt_1: "Skrip Lua Tersuai", opt_2: "Sumber Standalone", opt_3: "Antara Muka NUI / UI", opt_4: "Pengoptimuman Pelayan / Pembaikan Ralat",
        ph_msg: "Spesifikasi / Butiran Skrip", btn_submit: "Hantar Permintaan",
        footer_sub: "Membina Skrip Premium & Penyelesaian Pelayan untuk FiveM.",
        footer_copy: "&copy; 2026 Zenqor Technologies (Malaysia). Hak cipta terpelihara.",
        msg_sending: "Menghantar...", msg_success: "Permintaan Berjaya Dihantar"
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

// --- 3. MULTI-DROPDOWN POP-UP LOGIC ---
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

// --- 4. MOBILE MENU ---
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

// --- 5. SCROLL ANIMATION (REVEAL) ---
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

// --- 6. CONTACT FORM SIMULATION ---
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
