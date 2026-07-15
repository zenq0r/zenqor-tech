/**
 * ZENQOR TECHNOLOGIES - ENTERPRISE CORE SCRIPT
 * Dynamic Navigation, Header CMS & Core Gateway
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
        } catch (e) {}
    }
    checkMasterProtocol();

    // 2. DYNAMIC NAVIGATION ENGINE (DYNAMIC IMPORT)
    try {
        // Muat turun Firebase secara dinamik (Elak ralat "Cannot use import statement")
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

        // A. Bina Header / Logo
        const headerConfigSnap = await getDoc(doc(db, "config", "header_settings"));
        let headerConfig = headerConfigSnap.exists() ? headerConfigSnap.data() : {};
        
        if(headerConfig.logoUrl) document.querySelectorAll('.nav-logo-img, .footer-logo-img').forEach(img => img.src = headerConfig.logoUrl);
        if(headerConfig.headerBackground) {
            const navbar = document.querySelector('.navbar');
            if (navbar) navbar.style.background = headerConfig.headerBackground;
        }

        // B. Bina Navigation
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
                                ${myChildren.map(c => `<a href="${c.url}" target="${c.target \vert{}\vert{} '_self'}">${c.icon ? `<i class="${c.icon}"></i> ` : ""}${c.title}</a>`).join('')}
                            </div>
                        </div>`;
                } else {
                    htmlBuild += `<a href="${p.url}" target="${p.target || '_self'}">${p.icon ? `<i class="${p.icon}"></i> ` : ""}${p.title}</a>`;
                }
            });

            // Butang CTA
            let btnHtml = "";
            if(headerConfig.buttonVisible !== false) {
                btnHtml = `<a href="${headerConfig.buttonUrl || "login.html"}" class="btn btn-primary" style="background-color: ${headerConfig.buttonColor || 'var(--primary-blue)'}; padding: 8px 20px; border-radius: 6px; text-decoration: none;">${headerConfig.buttonTitle || "Login"}</a>`;
            }

            navLinksContainer.innerHTML = htmlBuild + `<div style="display: flex; align-items: center; gap: 15px; margin-left: 15px;">
                <button id="lang-toggle" class="lang-btn">EN</button> ${btnHtml}
            </div>`;
            
            // Re-bind Event Listener Dropdown
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
        }
    } catch(e) { console.error("CMS Injection Failed:", e); }

    // 3. Mobile Menu Binders
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    if(mobileMenuBtn && navLinks) mobileMenuBtn.addEventListener('click', () => navLinks.classList.toggle('active'));

})();