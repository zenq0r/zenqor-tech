/**
 * ZENQOR TECHNOLOGIES - ENTERPRISE CORE SCRIPT
 * Dynamic Navigation, Header CMS & Core Gateway
 */
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, getDocs, doc, getDoc, query, orderBy } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCJyjvlm8jG-mT_1mDYsyF562L6XuskFxU",
    authDomain: "zenqor-web.firebaseapp.com",
    projectId: "zenqor-web",
    storageBucket: "zenqor-web.firebasestorage.app",
    messagingSenderId: "785478368719",
    appId: "1:785478368719:web:ef6fa34ed5d949ac2566ba"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

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

    // 2. DYNAMIC NAVIGATION & HEADER ENGINE
    async function buildDynamicHeader() {
        try {
            // Fetch Header Settings
            const headerConfigSnap = await getDoc(doc(db, "config", "header_settings"));
            let headerConfig = {};
            if(headerConfigSnap.exists()) {
                headerConfig = headerConfigSnap.data();
                // Tukar Logo
                if(headerConfig.logoUrl) {
                    document.querySelectorAll('.nav-logo-img, .footer-logo-img').forEach(img => img.src = headerConfig.logoUrl);
                }
                // Tukar Favicon
                if(headerConfig.faviconUrl) {
                    let link = document.querySelector("link[rel~='icon']");
                    if (!link) {
                        link = document.createElement('link');
                        link.rel = 'icon';
                        document.head.appendChild(link);
                    }
                    link.href = headerConfig.faviconUrl;
                }
                // Tetapan UI Header
                const headerEl = document.querySelector('.navbar');
                if(headerEl) {
                    if(headerConfig.headerBackground) headerEl.style.background = headerConfig.headerBackground;
                    if(headerConfig.headerHeight) {
                        const navCont = headerEl.querySelector('.nav-container');
                        if(navCont) navCont.style.minHeight = headerConfig.headerHeight;
                    }
                }
            }

            // Fetch Navigation
            const navSnap = await getDocs(query(collection(db, "navigation"), orderBy("order", "asc")));
            const navLinksContainer = document.querySelector('.nav-links');
            if(!navLinksContainer) return;

            let navItems = [];
            navSnap.forEach(doc => navItems.push({ id: doc.id, ...doc.data() }));
            
            // Build Tree (Parent & Submenus)
            const parents = navItems.filter(item => !item.parentId && item.visible !== false);
            const children = navItems.filter(item => item.parentId && item.visible !== false);
            
            let htmlBuild = "";
            parents.forEach(p => {
                const myChildren = children.filter(c => c.parentId === p.id);
                if(myChildren.length > 0) {
                    htmlBuild += `
                        <div class="nav-item-dropdown">
                            <button class="dropdown-toggle" data-target="menu-${p.id}" aria-haspopup="true" aria-expanded="false">
                                <span>${p.icon ? `<i class="${p.icon}"></i> ` : ""}${p.title}</span> <i class="fas fa-chevron-down" style="font-size: 0.8em; margin-left: 5px;"></i>
                            </button>
                            <div class="dropdown-menu" id="menu-${p.id}" role="menu">
                                ${myChildren.map(c => `<a href="${c.url}" target="${c.target \vert{}\vert{} '_self'}" role="menuitem">${c.icon ? `<i class="${c.icon}"></i> ` : ""}${c.title}</a>`).join('')}
                            </div>
                        </div>
                    `;
                } else {
                    htmlBuild += `<a href="${p.url}" target="${p.target || '_self'}">${p.icon ? `<i class="${p.icon}"></i> ` : ""}${p.title}</a>`;
                }
            });

            // Action Button (Dynamic)
            let btnHtml = "";
            if(headerConfig.buttonVisible !== false) {
                const btnTitle = headerConfig.buttonTitle || "Login";
                const btnUrl = headerConfig.buttonUrl || "login.html";
                const btnColor = headerConfig.buttonColor || "var(--primary-blue)";
                btnHtml = `<a href="${btnUrl}" class="btn btn-primary" style="background-color: ${btnColor}; padding: 8px 20px; font-size: 0.9rem; border-radius: 6px; text-decoration: none;">${btnTitle}</a>`;
            }

            navLinksContainer.innerHTML = htmlBuild + `<div style="display: flex; align-items: center; gap: 15px; margin-left: 15px;">
                <button id="lang-toggle" class="lang-btn" aria-label="Toggle Language">EN</button>
                ${btnHtml}
            </div>`;

            initDropdowns();

        } catch(e) {
            console.error("Dynamic Navigation Engine Error:", e);
        }
    }

    function initDropdowns() {
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
        
        window.addEventListener('click', (e) => {
            if (!e.target.closest('.nav-item-dropdown')) {
                document.querySelectorAll('.dropdown-menu').forEach(m => m.classList.remove('show'));
                document.querySelectorAll('.dropdown-toggle').forEach(t => t.setAttribute('aria-expanded', 'false'));
            }
        });
    }

    // Execute Global Builder
    await buildDynamicHeader();

    // Scroll Observer & Mobile Menu bindings
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    if(mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
})();