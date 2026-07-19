/**
 * ZENQOR TECHNOLOGIES - ENTERPRISE CORE SCRIPT
 * Dynamic Navigation, UI Animations, Translations, and Live CMS Content
 *
 * CHANGES IN THIS VERSION (see accompanying summary for full audit):
 *  - Firestore `content/site_text` now merges into the translations table
 *    BEFORE setLanguage() runs, so every element with data-i18n (and now
 *    data-i18n-placeholder) is editable from the admin dashboard's new
 *    "Page Text" section — no per-page HTML changes needed to add a new
 *    editable field, just add the key to the admin's key list.
 *  - data-i18n-placeholder was previously declared on the contact form but
 *    never actually applied — fixed.
 *  - config/company_profile now actually gets read and injected into every
 *    page's footer (registration no., address) and the floating WhatsApp
 *    widget, plus contact.html's primary address/email/phone block.
 *  - config/system_settings.maintenance now actually locks the site when
 *    turned on (previously this admin field did nothing).
 */
(async function() {
    'use strict';

    // ─────────────────────────────────────────────
    // 0. FIREBASE INIT (shared across all CMS reads)
    // ─────────────────────────────────────────────
    let db = null;
    try {
        const { initializeApp } = await import("https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js");
        const { getFirestore } = await import("https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js");
        const app = initializeApp({
            apiKey: "AIzaSyCJyjvlm8jG-mT_1mDYsyF562L6XuskFxU",
            authDomain: "zenqor-web.firebaseapp.com",
            projectId: "zenqor-web",
            storageBucket: "zenqor-web.firebasestorage.app",
            messagingSenderId: "785478368719",
            appId: "1:785478368719:web:ef6fa34ed5d949ac2566ba"
        });
        db = getFirestore(app);
    } catch (e) {
        console.error("Firebase init failed:", e);
    }

    // ─────────────────────────────────────────────
    // 1. MAINTENANCE MODE (config/system_settings.maintenance)
    // ─────────────────────────────────────────────
    const MAINTENANCE_ALLOWLIST = ["login.html", "admin-dashboard.html"];
    async function checkMaintenanceMode() {
        if (!db) return;
        const currentPage = window.location.pathname.split("/").pop() || "index.html";
        if (MAINTENANCE_ALLOWLIST.includes(currentPage)) return;

        try {
            const { doc, getDoc } = await import("https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js");
            const snap = await getDoc(doc(db, "config", "system_settings"));
            if (snap.exists() && snap.data().maintenance === "true") {
                document.documentElement.innerHTML = `<body style="background:#050505;color:#fff;display:flex;flex-direction:column;gap:12px;align-items:center;justify-content:center;height:100vh;font-family:Inter,sans-serif;text-align:center;padding:20px;">
                    <h1 style="margin:0;">We'll be right back</h1>
                    <p style="color:#94A3B8;max-width:400px;">Zenqor Technologies is currently undergoing scheduled maintenance. Please check back shortly.</p>
                </body>`;
            }
        } catch (e) {
            console.warn("Maintenance check failed:", e);
        }
    }
    await checkMaintenanceMode();

    async function checkMasterProtocol() {
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 5000);
            const response = await fetch("https://zenqor-api.kauaku.store/api/public-status", { signal: controller.signal });
            clearTimeout(timeoutId);
            if (response.ok) {
                const data = await response.json();
                if (data.is_offline) document.documentElement.innerHTML = `<body style="background:#050505;color:red;display:flex;align-items:center;justify-content:center;height:100vh;"><h1>SYSTEM LOCKDOWN</h1></body>`;
            }
        } catch (e) {
            console.warn("Gateway Ping Failed. Menggunakan sambungan lokal.");
        }
    }
    checkMasterProtocol();

    function initRevealAnimations() {
        if ('IntersectionObserver' in window) {
            const revealCallback = (entries, observer) => {
                entries.forEach(entry => {
                    if(entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            };
            const revealObserver = new IntersectionObserver(revealCallback, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
            document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
        } else {
            document.querySelectorAll('.reveal').forEach(el => el.classList.add('active'));
        }
    }
    initRevealAnimations();

    const translations = {
        en: {
            nav_home: "Home", nav_services: "Services", nav_portfolio: "Portfolio", nav_careers: "Careers", nav_about: "About", nav_faq: "FAQ", nav_contact: "Contact",
            nav_port_gaming: "Scripting Projects", nav_port_web: "Server Development", nav_careers_join: "Join Us",
            nav_return: "Return & Refund Policy", nav_legal: "Legal Notices", nav_data: "Data Policy",
            hero_badge: "Premium FiveM Development", hero_title: "Designing, Developing & Deploying <br><span class='text-primary'>Websites, Cloud Systems & FiveM Resources</span>",
            hero_sub: "Zenqor Technologies specializes in custom software development, website development, Lua scripting, standalone resources, and server optimization.",
            btn_portfolio: "View Scripts", btn_contact: "Hire Us",
            stat_1: "Scripts Released", stat_2: "Optimized Servers", stat_3: "Active Players", stat_gov: "Frameworks", stat_4: "Standalone Systems",

            about_title: "The Code Behind <span class='text-primary'>Immersive Roleplay</span>",
            about_sub: "We write clean, efficient, and well-optimized scripts that add real depth to server gameplay without overloading your server resources.",
            tech_1: "NUI & UI Design", tech_2: "Server Architecture", tech_3: "Database Tuning", tech_4: "Cloud Optimization",

            srv_main_title: "Our <span class='text-primary'>Development Services</span>",
            srv_main_sub: "From highly optimized standalone tools to immersive roleplay systems.",
            srv_1_t: "Custom Lua Scripts", srv_1_d: "Tailor-made gameplay scripts including jobs, crime systems, mechanics, and economy.",
            srv_2_t: "Standalone Resources", srv_2_d: "Framework-agnostic tools and utilities that drop cleanly into any FiveM setup.",
            srv_3_t: "NUI & UI Design", srv_3_d: "Modern, responsive, and player-centric NUI interfaces built with HTML, CSS, and JS.",
            srv_4_t: "Framework Integration", srv_4_d: "Seamless compatibility and adaptation for QBCore, ESX, QBox, or custom frameworks.",
            srv_5_t: "Server Optimization", srv_5_d: "Profiling and reducing CPU/RAM usage to ensure stable server performance and high FPS.",
            srv_6_t: "Bug Fixing & Support", srv_6_d: "Troubleshooting legacy code, resolving framework errors, and missing export fixes.",

            car_page_badge: "We Are Hiring", car_page_title: "Join the <span class='text-primary'>Development Team</span>",
            car_page_sub: "Work with elite Lua scripters and UI designers to build the next generation of FiveM roleplay experiences.",
            perk_1_t: "Remote Work", perk_1_d: "Flexible working hours and 100% remote work opportunities.",
            perk_2_t: "Revenue Sharing", perk_2_d: "Earn percentages from premium scripts sold on our Tebex store.",
            perk_3_t: "Skill Growth", perk_3_d: "Collaborate and learn advanced programming patterns.",
            perk_4_t: "Modern Tooling", perk_4_d: "Work with the latest IDE setups and version control.",
            jobs_title: "Open <span class='text-primary'>Positions</span>", btn_apply: "Apply via Email",

            con_title: "Initialize Connection", con_sub: "Partner with us to engineer your server's next big feature.",
            hq_title: "Headquarters", hq_addr: "Bandar Mahkota Cheras<br>Selangor, Malaysia",
            ph_name: "Name", ph_email: "Email Address", ph_msg: "Message Details",
            opt_def: "Select Request Type", opt_1: "Custom Lua Script", opt_2: "Standalone Resource", opt_3: "NUI / UI Interface", opt_4: "Server Optimization / Bug Fix",
            btn_submit: "Send Request",

            faq_sub: "Find answers to common questions about our products and services.",
            faq_1_q: "How do I purchase a FiveM Script?", faq_1_a: "You can visit our official Tebex store by clicking the 'Store' button on our navigation menu. We support multiple secure payment gateways.",
            faq_2_q: "Do you offer custom server development?", faq_2_a: "Yes, we specialize in complete server setups and tailor-made framework development (QBCore & ESX). Please reach out via the Contact page.",
            faq_3_q: "Is technical support included?", faq_3_a: "Absolutely. All our premium resources come with priority technical support through our official Discord server.",

            pg_hero_title: "Premium <span class='text-primary'>FiveM Resources</span>",
            pg_hero_sub: "Custom FiveM roleplay server scripting and UI designs crafted to match your vision.",
            pw_hero_title: "Complete Server Setups", pw_hero_sub: "Full-stack server configuration and backend architecture.",

            tos_content: "<h4>1. Acceptance of Terms</h4><p>By accessing and using services provided by Zenqor Technologies, you agree to be bound by these Terms of Service.</p><h4>2. Intellectual Property</h4><p>All scripts, resources, and code delivered remain the intellectual property of Zenqor Technologies until full payment is received, after which a usage license (not ownership of the source) is granted to the client.</p><h4>3. Limitation of Liability</h4><p>Zenqor Technologies is not liable for indirect damages arising from the use of our resources on third-party servers.</p>",
            rp_content: "<h4>Digital Products</h4><p>Due to the nature of digital goods and custom development work, all sales are final once a script or resource has been delivered. Refunds are considered on a case-by-case basis only where the delivered work materially fails to meet the agreed specification.</p><h4>Requesting a Refund</h4><p>Contact us within 7 days of delivery at <a href='mailto:info@zenqor.com.my'>info@zenqor.com.my</a> with your order details and a description of the issue.</p>",

            dp_title: "Privacy & Data Protection",
            dp_desc1: "At Zenqor Technologies, system security and user privacy are our top priorities. We are committed to protecting the personal data you provide us in accordance with applicable data protection regulations.",
            dp_desc2: "We collect only essential information required to deliver our digital and FiveM services. We do not sell or share your personal data with unauthorized third parties. For any vulnerability reports or data deletion requests, please refer to our security policy or contact us directly at info@zenqor.com.my.",

            footer_copy: "© 2026 Zenqor Technologies (Malaysia). All rights reserved."
        },
        ms: {
            nav_home: "Utama", nav_services: "Servis", nav_portfolio: "Portfolio", nav_careers: "Kerjaya", nav_about: "Tentang Kami", nav_faq: "FAQ", nav_contact: "Hubungi",
            nav_port_gaming: "Projek Skrip", nav_port_web: "Pembangunan Pelayan", nav_careers_join: "Sertai Kami",
            nav_return: "Polisi Pemulangan & Bayaran Balik", nav_legal: "Notis Undang-Undang", nav_data: "Polisi Data",
            hero_badge: "Pembangunan FiveM Premium", hero_title: "Dari Idea ke Produk Digital <br><span class='text-primary'>FiveM, Website & Sistem Cloud</span>",
            hero_sub: "Zenqor Technologies mengkhusus dalam pembangunan perisian tersuai, pembangunan laman web, skrip Lua, sumber bebas (standalone resources), dan pengoptimuman pelayan.",
            btn_portfolio: "Lihat Skrip", btn_contact: "Lantik Kami",
            stat_1: "Skrip Dilancarkan", stat_2: "Pelayan Dioptimumkan", stat_3: "Pemain Aktif", stat_gov: "Frameworks", stat_4: "Sistem Standalone",

            about_title: "Kod Di Sebalik <span class='text-primary'>Roleplay Mendalam</span>",
            about_sub: "Kami menulis skrip yang bersih, cekap dan dioptimumkan dengan baik untuk menambah kedalaman gameplay tanpa membebankan sumber pelayan anda.",
            tech_1: "Reka Bentuk NUI & UI", tech_2: "Seni Bina Pelayan", tech_3: "Penalaan Pangkalan Data", tech_4: "Pengoptimuman Awan",

            srv_main_title: "Servis <span class='text-primary'>Pembangunan Kami</span>",
            srv_main_sub: "Daripada alatan standalone dioptimumkan sehingga sistem roleplay mendalam.",
            srv_1_t: "Skrip Lua Tersuai", srv_1_d: "Skrip gameplay tersuai termasuk kerja, sistem jenayah, mekanik, dan ekonomi.",
            srv_2_t: "Sumber Standalone", srv_2_d: "Alatan tanpa bergantung framework yang boleh dipasang terus pada mana-mana setup FiveM.",
            srv_3_t: "Reka Bentuk NUI & UI", srv_3_d: "Antara muka NUI moden, responsif, dan mesra pemain dibina dengan HTML, CSS dan JS.",
            srv_4_t: "Integrasi Framework", srv_4_d: "Keserasian lancar untuk QBCore, ESX, QBox, atau framework tersuai.",
            srv_5_t: "Pengoptimuman Pelayan", srv_5_d: "Profiling dan pengurangan penggunaan CPU/RAM untuk prestasi pelayan yang stabil dan FPS tinggi.",
            srv_6_t: "Pembaikan Bug & Sokongan", srv_6_d: "Menyelesaikan kod lama, ralat framework, dan pembaikan export yang hilang.",

            car_page_badge: "Kami Sedang Mengambil Pekerja", car_page_title: "Sertai <span class='text-primary'>Pasukan Pembangunan</span>",
            car_page_sub: "Bekerja bersama scripter Lua elit dan pereka UI untuk membina generasi seterusnya pengalaman roleplay FiveM.",
            perk_1_t: "Kerja Jarak Jauh", perk_1_d: "Waktu kerja fleksibel dan peluang kerja 100% jarak jauh.",
            perk_2_t: "Perkongsian Hasil", perk_2_d: "Peroleh peratusan daripada skrip premium yang dijual di kedai Tebex kami.",
            perk_3_t: "Pertumbuhan Kemahiran", perk_3_d: "Berkolaborasi dan mempelajari corak pengaturcaraan lanjutan.",
            perk_4_t: "Alatan Moden", perk_4_d: "Bekerja dengan persediaan IDE dan kawalan versi terkini.",
            jobs_title: "Jawatan <span class='text-primary'>Kosong</span>", btn_apply: "Mohon Melalui Emel",

            con_title: "Mulakan Hubungan", con_sub: "Bekerjasama dengan kami untuk membina ciri besar seterusnya pelayan anda.",
            hq_title: "Ibu Pejabat", hq_addr: "Bandar Mahkota Cheras<br>Selangor, Malaysia",
            ph_name: "Nama", ph_email: "Alamat Emel", ph_msg: "Butiran Mesej",
            opt_def: "Pilih Jenis Permintaan", opt_1: "Skrip Lua Tersuai", opt_2: "Sumber Standalone", opt_3: "Antara Muka NUI / UI", opt_4: "Pengoptimuman Pelayan / Pembaikan Bug",
            btn_submit: "Hantar Permintaan",

            faq_sub: "Cari jawapan kepada soalan lazim tentang produk dan servis kami.",
            faq_1_q: "Bagaimana saya membeli Skrip FiveM?", faq_1_a: "Anda boleh melawati kedai Tebex rasmi kami dengan klik butang 'Store' pada menu navigasi. Kami menyokong pelbagai gateway pembayaran selamat.",
            faq_2_q: "Adakah anda menawarkan pembangunan pelayan tersuai?", faq_2_a: "Ya, kami pakar dalam persediaan pelayan lengkap dan pembangunan framework tersuai (QBCore & ESX). Sila hubungi kami melalui halaman Contact.",
            faq_3_q: "Adakah sokongan teknikal disertakan?", faq_3_a: "Sudah tentu. Semua sumber premium kami disertakan sokongan teknikal keutamaan melalui server Discord rasmi kami.",

            pg_hero_title: "Sumber <span class='text-primary'>FiveM Premium</span>",
            pg_hero_sub: "Skrip pelayan roleplay FiveM tersuai dan reka bentuk UI dibina mengikut visi anda.",
            pw_hero_title: "Persediaan Pelayan Lengkap", pw_hero_sub: "Konfigurasi pelayan full-stack dan seni bina backend.",

            tos_content: "<h4>1. Penerimaan Terma</h4><p>Dengan mengakses dan menggunakan servis yang disediakan oleh Zenqor Technologies, anda bersetuju untuk terikat dengan Terma Servis ini.</p><h4>2. Hak Harta Intelek</h4><p>Semua skrip, sumber, dan kod yang dihantar kekal sebagai hak harta intelek Zenqor Technologies sehingga bayaran penuh diterima, selepas itu lesen penggunaan (bukan pemilikan kod sumber) diberikan kepada pelanggan.</p><h4>3. Had Liabiliti</h4><p>Zenqor Technologies tidak bertanggungjawab atas kerugian tidak langsung akibat penggunaan sumber kami pada pelayan pihak ketiga.</p>",
            rp_content: "<h4>Produk Digital</h4><p>Disebabkan sifat produk digital dan kerja pembangunan tersuai, semua jualan adalah muktamad sebaik sahaja skrip atau sumber dihantar. Bayaran balik dipertimbangkan mengikut kes demi kes hanya jika kerja yang dihantar gagal memenuhi spesifikasi yang dipersetujui.</p><h4>Memohon Bayaran Balik</h4><p>Hubungi kami dalam masa 7 hari selepas penghantaran di <a href='mailto:info@zenqor.com.my'>info@zenqor.com.my</a> dengan butiran pesanan dan penerangan isu.</p>",

            dp_title: "Privasi & Perlindungan Data",
            dp_desc1: "Di Zenqor Technologies, keselamatan sistem dan privasi pengguna adalah keutamaan utama kami. Kami komited melindungi data peribadi yang anda berikan mengikut peraturan perlindungan data yang berkuat kuasa.",
            dp_desc2: "Kami hanya mengumpul maklumat penting yang diperlukan untuk menyampaikan servis digital dan FiveM kami. Kami tidak menjual atau berkongsi data peribadi anda dengan pihak ketiga yang tidak dibenarkan. Untuk laporan kelemahan atau permintaan pemadaman data, sila rujuk polisi keselamatan kami atau hubungi kami terus di info@zenqor.com.my.",

            footer_copy: "© 2026 Zenqor Technologies (Malaysia). Hak cipta terpelihara."
        }
    };

    async function applyContentOverrides() {
        if (!db) return;
        try {
            const { doc, getDoc } = await import("https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js");
            const snap = await getDoc(doc(db, "content", "site_text"));
            if (!snap.exists()) return;
            const overrides = snap.data();
            Object.keys(overrides).forEach((key) => {
                const val = overrides[key];
                if (val && typeof val === "object") {
                    if (val.en) translations.en[key] = val.en;
                    if (val.ms) translations.ms[key] = val.ms;
                }
            });
        } catch (e) {
            console.warn("Content override fetch failed, using defaults:", e);
        }
    }

    let currentLang = localStorage.getItem('zenqor-lang') || 'en';
    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('zenqor-lang', lang);
        document.documentElement.lang = lang;
        const langToggleBtn = document.getElementById('lang-toggle');
        if(langToggleBtn) langToggleBtn.textContent = lang === 'en' ? 'MS' : 'EN';

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if(translations[lang] && translations[lang][key]) el.innerHTML = translations[lang][key];
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if(translations[lang] && translations[lang][key]) el.setAttribute('placeholder', translations[lang][key]);
        });
    }

    async function applyCompanyProfile() {
        if (!db) return;
        try {
            const { doc, getDoc } = await import("https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js");
            const snap = await getDoc(doc(db, "config", "company_profile"));
            if (!snap.exists()) return;
            const c = snap.data();

            const regEl = document.getElementById('footRegNo');
            if (regEl && c.regNo) regEl.textContent = `No. Pendaftaran: ${c.regNo}`;

            const addrEls = document.querySelectorAll('#footAddress, #contactAddress');
            addrEls.forEach(el => { if (c.address) el.innerHTML = c.address; });

            const emailEls = document.querySelectorAll('#contactEmailPrimary');
            emailEls.forEach(el => {
                if (c.email) { el.textContent = c.email; el.setAttribute('href', `mailto:${c.email}`); }
            });

            if (c.phone) {
                const waDigits = c.phone.replace(/[^\d]/g, '');
                document.querySelectorAll('#contactPhone').forEach(el => {
                    el.textContent = c.phone;
                    el.setAttribute('href', `https://wa.me/${waDigits}`);
                });
                document.querySelectorAll('#floatingWhatsApp').forEach(el => {
                    el.setAttribute('href', `https://wa.me/${waDigits}`);
                });
            }

        } catch (e) {
            console.warn("Company profile fetch failed, keeping static defaults:", e);
        }
    }

    async function applySeoDefaults() {
        if (!db) return;
        try {
            const { doc, getDoc } = await import("https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js");
            const snap = await getDoc(doc(db, "config", "seo_settings"));
            if (!snap.exists()) return;
            const s = snap.data();
            if (s.ogImg && !document.querySelector('meta[property="og:image"]')) {
                const tag = document.createElement('meta');
                tag.setAttribute('property', 'og:image');
                tag.setAttribute('content', s.ogImg);
                document.head.appendChild(tag);
            }
        } catch (e) {
            console.warn("SEO defaults fetch failed:", e);
        }
    }

    // ─────────────────────────────────────────────
    // 5b. GOOGLE ANALYTICS (config/system_settings.ga)
    //    Previously this admin field was saved but never actually used.
    // ─────────────────────────────────────────────
    async function applyGoogleAnalytics() {
        if (!db) return;
        try {
            const { doc, getDoc } = await import("https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js");
            const snap = await getDoc(doc(db, "config", "system_settings"));
            if (!snap.exists()) return;
            const gaId = snap.data().ga;
            if (!gaId) return;

            const s1 = document.createElement('script');
            s1.async = true;
            s1.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
            document.head.appendChild(s1);

            const s2 = document.createElement('script');
            s2.textContent = `window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');`;
            document.head.appendChild(s2);
        } catch (e) {
            console.warn("Google Analytics injection failed:", e);
        }
    }

    // ─────────────────────────────────────────────
    // 5c. SELF-HOSTED PAGEVIEW LOGGING (content/analytics_events)
    //    Powers the admin dashboard's Analytics tab. Fire-and-forget: never
    //    blocks page render, never throws if it fails (e.g. ad blockers).
    //    Admin/login pages are excluded so testing/editing doesn't skew data.
    // ─────────────────────────────────────────────
    const ANALYTICS_EXCLUDE = ["admin-dashboard.html", "login.html", "register.html", "forgot-password.html"];
    async function logPageview() {
        if (!db) return;
        const currentPage = window.location.pathname.split("/").pop() || "index.html";
        if (ANALYTICS_EXCLUDE.includes(currentPage)) return;
        try {
            const { collection, addDoc, serverTimestamp } = await import("https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js");
            await addDoc(collection(db, "analytics_events"), {
                page: currentPage,
                referrer: document.referrer || null,
                lang: localStorage.getItem('zenqor-lang') || 'en',
                timestamp: serverTimestamp()
            });
        } catch (e) {
            console.warn("Pageview logging failed (non-critical):", e);
        }
    }

    await Promise.all([applyContentOverrides(), applyCompanyProfile(), applySeoDefaults(), applyGoogleAnalytics()]);
    logPageview(); // deliberately not awaited — shouldn't delay page render

    try {
        if (!db) throw new Error("Firestore not initialized");
        const { collection, getDocs, doc, getDoc, query, orderBy } = await import("https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js");

        const headerConfigSnap = await getDoc(doc(db, "config", "header_settings"));
        let headerConfig = headerConfigSnap.exists() ? headerConfigSnap.data() : {};

        if(headerConfig.logoUrl) document.querySelectorAll('.nav-logo-img, .footer-logo-img').forEach(img => img.src = headerConfig.logoUrl);
        if(headerConfig.headerBackground) {
            const navbar = document.querySelector('.navbar');
            if (navbar) navbar.style.background = headerConfig.headerBackground;
        }

        const navSnap = await getDocs(query(collection(db, "navigation"), orderBy("order", "asc")));
        const navLinksContainer = document.querySelector('.nav-links');

        if(navLinksContainer && !navSnap.empty) {
            let navItems = [];
            navSnap.forEach(d => navItems.push({ id: d.id, ...d.data() }));

            const parents = navItems.filter(i => !i.parentId && i.visible !== false);
            const children = navItems.filter(i => i.parentId && i.visible !== false);

            let htmlBuild = "";
            parents.forEach(p => {
                const myChildren = children.filter(c => c.parentId === p.id);
                if(myChildren.length > 0) {
                    htmlBuild += `
                        <div class="nav-item-dropdown">
                            <button class="dropdown-toggle" data-target="menu-${p.id}" aria-expanded="false">
                                <span>${p.icon ? `<i class="${p.icon}"></i> ` : ""}${p.title}</span> <i class="fas fa-chevron-down" style="font-size: 0.8em; margin-left: 5px;"></i>
                            </button>
                            <div class="dropdown-menu" id="menu-${p.id}">
                                ${myChildren.map(c => `<a href="${c.url}" target="${c.target || '_self'}">${c.icon ? `<i class="${c.icon}"></i> ` : ""}${c.title}</a>`).join('')}
                            </div>
                        </div>`;
                } else {
                    htmlBuild += `<a href="${p.url}" target="${p.target || '_self'}">${p.icon ? `<i class="${p.icon}"></i> ` : ""}${p.title}</a>`;
                }
            });

            let btnHtml = "";
            if(headerConfig.buttonVisible !== false) {
                btnHtml = `<a href="${headerConfig.buttonUrl || "login.html"}" class="btn btn-primary" style="background-color: ${headerConfig.buttonColor || 'var(--primary-blue)'}; padding: 8px 20px; border-radius: 6px; text-decoration: none;">${headerConfig.buttonTitle || "Login"}</a>`;
            }

            navLinksContainer.innerHTML = htmlBuild + `<div style="display: flex; align-items: center; gap: 15px; margin-left: 15px;">
                <button id="lang-toggle" class="lang-btn">EN</button> ${btnHtml}
            </div>`;

        } else if (navLinksContainer && navSnap.empty) {
            navLinksContainer.innerHTML = `
                <a href="index.html" data-i18n="nav_home">Home</a>
                <a href="services.html" data-i18n="nav_services">Services</a>
                <div class="nav-item-dropdown">
                    <button class="dropdown-toggle" data-target="portfolio-menu" aria-expanded="false">
                        <span data-i18n="nav_portfolio">Portfolio</span> <i class="fas fa-chevron-down" style="font-size: 0.8em; margin-left: 5px;"></i>
                    </button>
                    <div class="dropdown-menu" id="portfolio-menu">
                        <a href="portfolio-gaming.html" data-i18n="nav_port_gaming">Scripting Projects</a>
                        <a href="portfolio-web.html" data-i18n="nav_port_web">Server Development</a>
                    </div>
                </div>
                <div class="nav-item-dropdown">
                    <button class="dropdown-toggle" data-target="careers-menu" aria-expanded="false">
                        <span data-i18n="nav_careers">Careers</span> <i class="fas fa-chevron-down" style="font-size: 0.8em; margin-left: 5px;"></i>
                    </button>
                    <div class="dropdown-menu" id="careers-menu">
                        <a href="careers.html" data-i18n="nav_careers_join">Join Us</a>
                    </div>
                </div>
                <a href="about.html" data-i18n="nav_about">About</a>
                <a href="faq.html" data-i18n="nav_faq">FAQ</a>
                <a href="contact.html" data-i18n="nav_contact">Contact</a>
                <div style="display: flex; align-items: center; gap: 15px; margin-left: 15px;">
                    <button id="lang-toggle" class="lang-btn">EN</button>
                    <a href="login.html" class="btn btn-primary" style="padding: 8px 20px; border-radius: 6px; text-decoration: none;">Login</a>
                </div>
            `;
        }

        document.querySelectorAll('.dropdown-toggle').forEach(t => {
            t.addEventListener('click', (e) => {
                e.preventDefault();
                const menu = document.getElementById(t.dataset.target);
                const isExp = t.getAttribute('aria-expanded') === 'true';
                document.querySelectorAll('.dropdown-menu').forEach(m => m.classList.remove('show'));
                document.querySelectorAll('.dropdown-toggle').forEach(btn => btn.setAttribute('aria-expanded', 'false'));
                if (!isExp) { menu.classList.add('show'); t.setAttribute('aria-expanded', 'true'); }
            });
        });

        const toggleBtn = document.getElementById('lang-toggle');
        if(toggleBtn) toggleBtn.addEventListener('click', () => setLanguage(currentLang === 'en' ? 'ms' : 'en'));
        setLanguage(currentLang);

    } catch(e) {
        console.error("CMS Injection Failed:", e);
        setLanguage(currentLang);
    }

    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    if(mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => navLinks.classList.toggle('active'));
    }

    const scrollToTopBtn = document.getElementById('scrollToTop');
    if(scrollToTopBtn) {
        window.addEventListener('scroll', () => scrollToTopBtn.classList.toggle('show', window.scrollY > 300), { passive: true });
        scrollToTopBtn.addEventListener('click', () => window.scrollTo({top: 0, behavior: 'smooth'}));
    }
})();
