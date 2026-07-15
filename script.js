/**
 * ZENQOR TECHNOLOGIES - ENTERPRISE CORE SCRIPT
 * Dynamic Navigation, UI Animations, dan Translations
 */
(async function() {
    'use strict';

    // 1. ZENQOR MASTER GATEWAY
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

    // 2. SCROLL REVEAL ANIMATIONS
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

    // 3. MULTI-LANGUAGE SYSTEM (i18n)
    const translations = {
        en: {
            nav_home: "Home", nav_services: "Services", nav_portfolio: "Portfolio", nav_careers: "Careers", nav_about: "About", nav_faq: "FAQ", nav_contact: "Contact",
            nav_port_gaming: "Scripting Projects", nav_port_web: "Server Development", nav_careers_join: "Join Us",
            hero_badge: "Premium FiveM Development", hero_title: "Designing, Developing & Deploying <br><span class='text-primary'>Websites, Cloud Systems & FiveM Resources</span>",
            hero_sub: "Zenqor Technologies specializes in custom software development, website development, Lua scripting, standalone resources, and server optimization.",
            btn_portfolio: "View Scripts", btn_contact: "Hire Us",
            stat_1: "Scripts Released", stat_2: "Optimized Servers", stat_3: "Active Players", stat_gov: "Frameworks", stat_4: "Standalone Systems",
            footer_copy: "© 2026 Zenqor Technologies (Malaysia). All rights reserved."
        },
        ms: {
            nav_home: "Utama", nav_services: "Servis", nav_portfolio: "Portfolio", nav_careers: "Kerjaya", nav_about: "Tentang Kami", nav_faq: "FAQ", nav_contact: "Hubungi",
            nav_port_gaming: "Projek Skrip", nav_port_web: "Pembangunan Pelayan", nav_careers_join: "Sertai Kami",
            hero_badge: "Pembangunan FiveM Premium", hero_title: "Dari Idea ke Produk Digital <br><span class='text-primary'>FiveM, Website & Sistem Cloud</span>",
            hero_sub: "Zenqor Technologies mengkhusus dalam pembangunan perisian tersuai, pembangunan laman web, skrip Lua, sumber bebas (standalone resources), dan pengoptimuman pelayan.",
            btn_portfolio: "Lihat Skrip", btn_contact: "Lantik Kami",
            stat_1: "Skrip Dilancarkan", stat_2: "Pelayan Dioptimumkan", stat_3: "Pemain Aktif", stat_gov: "Frameworks", stat_4: "Sistem Standalone",
            footer_copy: "© 2026 Zenqor Technologies (Malaysia). Hak cipta terpelihara."
        }
    };

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
    }

    // 4. DYNAMIC NAVIGATION ENGINE (DATABASE FIREBASE)
    try {
        const { initializeApp } = await import("https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js");
        const { getFirestore, collection, getDocs, doc, getDoc, query, orderBy } = await import("https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js");
        
        const app = initializeApp({
            apiKey: "AIzaSyCJyjvlm8jG-mT_1mDYsyF562L6XuskFxU",
            authDomain: "zenqor-web.firebaseapp.com",
            projectId: "zenqor-web",
            storageBucket: "zenqor-web.firebasestorage.app",
            messagingSenderId: "785478368719",
            appId: "1:785478368719:web:ef6fa34ed5d949ac2566ba"
        });
        const db = getFirestore(app);

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
            // Jika ada data di Firebase (Admin dah setup)
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
            // FALLBACK LENGKAP: Akan dipaparkan selagi Admin belum letak Navigation di Dashboard
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

        // Bind Menu Dropdown (Berfungsi untuk Database & Fallback)
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

        // Panggil Semula Sistem Bahasa
        const toggleBtn = document.getElementById('lang-toggle');
        if(toggleBtn) toggleBtn.addEventListener('click', () => setLanguage(currentLang === 'en' ? 'ms' : 'en'));
        setLanguage(currentLang);

    } catch(e) { 
        console.error("CMS Injection Failed:", e); 
    }

    // 5. MOBILE MENU & BACK TO TOP
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