// --- 1. KAMUS TERJEMAHAN ---
const translations = {
    en: { nav_home: "Home", nav_about: "About", nav_services: "Services", nav_portfolio: "Portfolio", nav_careers: "Careers", nav_contact: "Contact", nav_faq: "FAQ", nav_login: "ZT. Login", nav_return: "Return Policy" },
    ms: { nav_home: "Utama", nav_about: "Tentang Kami", nav_services: "Servis", nav_portfolio: "Portfolio", nav_careers: "Kerjaya", nav_contact: "Hubungi", nav_faq: "FAQ", nav_login: "ZT. Login", nav_return: "Dasar Pemulangan" }
};
// Simple toggle
const langToggle = document.getElementById('lang-toggle');
langToggle.addEventListener('click', () => {
    let lang = localStorage.getItem('zenqor-lang') === 'ms' ? 'en' : 'ms';
    localStorage.setItem('zenqor-lang', lang);
    location.reload();
});
