/**
 * ZENQOR TECHNOLOGIES - ENTERPRISE CORE SCRIPT
 * Refactored for Stability, Performance, and Security.
 */

(function() {
    'use strict';

    // ==========================================
    // 1. ZENQOR MASTER GATEWAY INTERCEPTOR
    // ==========================================
    const ZENQOR_MASTER_URL = "https://zenqor-api.kauaku.store/api/public-status";
    
    async function checkMasterProtocol() {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 Seconds Timeout

        try {
            const response = await fetch(ZENQOR_MASTER_URL, { signal: controller.signal });
            clearTimeout(timeoutId);

            if (!response.ok) throw new Error("Gateway HTTP Error");
            
            const data = await response.json();
            
            if (data.is_offline) {
                document.documentElement.innerHTML = `
                    <head>
                        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
                        <title>SYSTEM LOCKDOWN</title>
                    </head>
                    <body style="background-color: #050505; color: #ff0000; font-family: 'Courier New', Courier, monospace; height: 100vh; width: 100vw; margin: 0; display: flex; align-items: center; justify-content: center; overflow: hidden;">
                        <div style="border: 1px solid #333333; background: #0d0d0d; padding: clamp(20px, 5vw, 40px); text-align: center; max-width: 90%; box-sizing: border-box;">
                            <h1 style="font-size: clamp(18px, 4vw, 24px); letter-spacing: 2px; margin-bottom: 15px; margin-top: 0;">CONNECTION SEVERED</h1>
                            <p style="color: #737373; font-size: clamp(10px, 2vw, 12px); letter-spacing: 1px; text-transform: uppercase; margin: 0;">Inbound traffic isolated by Zenqor Command.<br>Routine maintenance in progress.</p>
                        </div>
                    </body>
                `;
            }
        } catch (error) {
            console.warn("Gateway Ping Failed or Timed Out. Allowing local access fallback.");
        }
    }

    // Execute Immediately
    checkMasterProtocol();

    // ==========================================
    // 2. MULTI-LANGUAGE SYSTEM (DICTIONARY TRIMMED FOR BREVITY BUT LOGIC INTACT)
    // ==========================================
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
            if(translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
    }

    if(langToggle) {
        langToggle.addEventListener('click', () => setLanguage(currentLang === 'en' ? 'ms' : 'en'));
    }
    setLanguage(currentLang);

    // ==========================================
    // 3. UI INTERACTIONS & EVENT LISTENERS
    // ==========================================
    document.addEventListener('DOMContentLoaded', () => {
        // Dropdowns (A11y Improved)
        document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
            toggle.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = toggle.getAttribute('data-target');
                const menu = document.getElementById(targetId);
                const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
                
                document.querySelectorAll('.dropdown-menu').forEach(m => m.classList.remove('show'));
                document.querySelectorAll('.dropdown-toggle').forEach(t => t.setAttribute('aria-expanded', 'false'));
                
                if (!isExpanded) {
                    menu.classList.add('show');
                    toggle.setAttribute('aria-expanded', 'true');
                }
            });
        });

        // Mobile Menu
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');
        
        if(mobileMenuBtn && navLinks) {
            mobileMenuBtn.addEventListener('click', () => {
                const isActive = navLinks.classList.toggle('active');
                mobileMenuBtn.setAttribute('aria-expanded', isActive);
            });
        }

        // Click Outside to Close Menu
        window.addEventListener('click', (e) => {
            if (!e.target.closest('.nav-item-dropdown')) {
                document.querySelectorAll('.dropdown-menu').forEach(menu => menu.classList.remove('show'));
                document.querySelectorAll('.dropdown-toggle').forEach(t => t.setAttribute('aria-expanded', 'false'));
            }
        });

        // Scroll Reveal Observer
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
        }

        // Scroll to Top
        const scrollToTopBtn = document.getElementById('scrollToTop');
        if(scrollToTopBtn) {
            window.addEventListener('scroll', () => {
                scrollToTopBtn.classList.toggle('show', window.scrollY > 300);
            }, { passive: true });
            scrollToTopBtn.addEventListener('click', () => window.scrollTo({top: 0, behavior: 'smooth'}));
        }
    });

})();