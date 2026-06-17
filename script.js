// Pengurusan Tema (Dark/Light Mode)
const themeToggle = document.getElementById('theme-toggle');
const rootElement = document.documentElement;
const themeIcon = themeToggle.querySelector('i');

// Semak simpanan tempatan untuk tema sedia ada
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

// Menu Mudah Alih (Mobile Menu)
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Tutup menu bimbit apabila pautan diklik
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Animasi Fade-In semasa Menatal (Scroll Intersection Observer)
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

// Simulasi Hantar Borang (Contact Form)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('button[type="submit"]');
        const originalText = btn.textContent;
        
        btn.textContent = 'Sending...';
        btn.disabled = true;
        
        // Simulasi API call
        setTimeout(() => {
            btn.textContent = 'Message Sent Successfully!';
            btn.style.backgroundColor = '#25D366'; // Warna hijau success
            contactForm.reset();
            
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.backgroundColor = '';
                btn.disabled = false;
            }, 3000);
        }, 1500);
    });
}
