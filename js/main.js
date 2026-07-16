/* ========================================
   Texas Divine Plumbing - Main JavaScript
======================================== */

// Mobile menu toggle
function toggleMenu() {
    var nav = document.getElementById('nav-menu');
    var toggle = document.querySelector('.menu-toggle');
    var isOpen = nav.classList.toggle('active');
    toggle.setAttribute('aria-expanded', isOpen);
}

// Close mobile menu when clicking a link
document.querySelectorAll('nav a').forEach(function(link) {
    link.addEventListener('click', function() {
        var nav = document.getElementById('nav-menu');
        var toggle = document.querySelector('.menu-toggle');
        nav.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
    });
});

// Header shadow on scroll
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Mobile dropdown toggle for Service Areas
document.querySelectorAll('.nav-dropdown-toggle').forEach(function(toggle) {
    toggle.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            this.closest('.nav-dropdown').classList.toggle('active');
        }
    });
});

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(function(question) {
    question.addEventListener('click', function() {
        var item = this.closest('.faq-item');
        var isActive = item.classList.contains('active');

        // Close all other items
        document.querySelectorAll('.faq-item.active').forEach(function(openItem) {
            openItem.classList.remove('active');
        });

        // Toggle current item
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// Scroll reveal animations
var revealObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(function(el) {
    revealObserver.observe(el);
});

// Before/After slider
document.querySelectorAll('.ba-slider').forEach(function(slider) {
    var handle = slider.querySelector('.ba-handle');
    var before = slider.querySelector('.ba-before');
    var isDragging = false;

    function updateSlider(x) {
        var rect = slider.getBoundingClientRect();
        var pos = Math.max(0, Math.min(x - rect.left, rect.width));
        var pct = (pos / rect.width) * 100;
        before.style.width = pct + '%';
        handle.style.left = pct + '%';
    }

    slider.addEventListener('mousedown', function(e) {
        isDragging = true;
        updateSlider(e.clientX);
    });

    window.addEventListener('mousemove', function(e) {
        if (isDragging) {
            e.preventDefault();
            updateSlider(e.clientX);
        }
    });

    window.addEventListener('mouseup', function() {
        isDragging = false;
    });

    slider.addEventListener('touchstart', function(e) {
        isDragging = true;
        updateSlider(e.touches[0].clientX);
    });

    slider.addEventListener('touchmove', function(e) {
        if (isDragging) {
            e.preventDefault();
            updateSlider(e.touches[0].clientX);
        }
    });

    slider.addEventListener('touchend', function() {
        isDragging = false;
    });
});

// GA4 phone click tracking
document.querySelectorAll('a[href^="tel:"]').forEach(function(link) {
    link.addEventListener('click', function() {
        if (typeof gtag === 'function') {
            gtag('event', 'phone_call', {
                event_category: 'contact',
                event_label: this.href.replace('tel:', ''),
                value: 1
            });
        }
    });
});

// GA4 SMS click tracking
document.querySelectorAll('a[href^="sms:"]').forEach(function(link) {
    link.addEventListener('click', function() {
        if (typeof gtag === 'function') {
            gtag('event', 'sms_click', {
                event_category: 'contact',
                event_label: 'text_message',
                value: 1
            });
        }
    });
});

// ========================================
// Multi-Step Form
// ========================================
(function() {
    var currentStep = 1;
    var totalSteps = 3;

    function showStep(step) {
        document.querySelectorAll('.form-step').forEach(function(s) {
            s.classList.remove('active');
        });
        var target = document.querySelector('.form-step[data-step="' + step + '"]');
        if (target) target.classList.add('active');

        document.querySelectorAll('.form-progress-step').forEach(function(ps, i) {
            ps.classList.remove('active', 'completed');
            if (i + 1 < step) ps.classList.add('completed');
            if (i + 1 === step) ps.classList.add('active');
        });

        currentStep = step;
    }

    document.querySelectorAll('.service-type-option').forEach(function(option) {
        option.addEventListener('click', function() {
            document.querySelectorAll('.service-type-option').forEach(function(o) {
                o.classList.remove('selected');
            });
            this.classList.add('selected');
            this.querySelector('input').checked = true;
        });
    });

    document.querySelectorAll('.btn-form-next').forEach(function(btn) {
        btn.addEventListener('click', function() {
            if (currentStep === 1) {
                var selected = document.querySelector('.service-type-option.selected');
                if (!selected) {
                    alert('Please select a service type.');
                    return;
                }
            }
            if (currentStep === 2) {
                var name = document.getElementById('ms-name');
                var phone = document.getElementById('ms-phone');
                if (!name.value.trim() || !phone.value.trim()) {
                    alert('Please fill in your name and phone number.');
                    return;
                }
            }
            if (currentStep < totalSteps) {
                showStep(currentStep + 1);
            }
        });
    });

    document.querySelectorAll('.btn-form-prev').forEach(function(btn) {
        btn.addEventListener('click', function() {
            if (currentStep > 1) {
                showStep(currentStep - 1);
            }
        });
    });

    showStep(1);
})();

// ========================================
// Spanish Language Toggle
// ========================================
(function() {
    var translations = {
        '.hero-badge': { en: 'Licensed & Insured', es: 'Licenciado y Asegurado' },
        '.hero h1': { en: 'The Plumbing Sub Your GC Can Count On.', es: 'El Plomero de Confianza Para Su Contratista General.' },
        '.hero-subheadline': { en: "Commercial New Construction & Residential Experts. 65 Years Combined Experience. On Schedule. On Budget. MBA-Managed Operations.", es: 'Expertos en Construcci\u00f3n Comercial y Residencial. 65 A\u00f1os de Experiencia. A Tiempo. Dentro del Presupuesto.' },
        '.services .section-subtitle': { en: 'What We Do', es: 'Lo Que Hacemos' },
        '.services .section-title': { en: 'Our Services', es: 'Nuestros Servicios' },
        '.services .section-description': { en: 'From ground-up commercial construction to reliable residential repairs, we deliver excellence at every scale.', es: 'Desde construcci\u00f3n comercial hasta reparaciones residenciales confiables, ofrecemos excelencia en cada escala.' },
        '.faq .section-subtitle': { en: 'Common Questions', es: 'Preguntas Comunes' },
        '.faq .section-title': { en: 'Frequently Asked Questions', es: 'Preguntas Frecuentes' },
        '.about .section-subtitle': { en: 'Who We Are', es: 'Qui\u00e9nes Somos' },
        '.contact-cta h2': { en: 'Ready to Start Your Project?', es: '\u00bfListo Para Comenzar Su Proyecto?' },
        '.contact-form-wrapper h3': { en: 'Request a Quote', es: 'Solicitar Cotizaci\u00f3n' },
        '.guarantees .section-title': { en: 'Our Promise to You', es: 'Nuestra Promesa' },
        '.guarantees .section-description': { en: 'We stand behind every job with guarantees that protect you.', es: 'Respaldamos cada trabajo con garant\u00edas que lo protegen.' },
        '.why-choose-us .section-title': { en: 'Why Choose Texas Divine Plumbing', es: '\u00bfPor Qu\u00e9 Elegirnos?' },
        '.why-choose-us .section-description': { en: 'What sets us apart from every other plumbing company in Texas.', es: 'Lo que nos diferencia de cualquier otra empresa de plomer\u00eda en Texas.' },
        '.testimonials .section-title': { en: 'Customer Reviews', es: 'Rese\u00f1as de Clientes' },
        '.video-section .section-title': { en: 'See Us in Action', es: 'V\u00e9anos en Acci\u00f3n' }
    };

    var currentLang = 'en';

    window.switchLanguage = function(lang) {
        currentLang = lang;
        document.documentElement.lang = lang;

        document.querySelectorAll('.lang-toggle button').forEach(function(btn) {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        Object.keys(translations).forEach(function(selector) {
            var el = document.querySelector(selector);
            if (el) {
                el.innerHTML = translations[selector][lang];
            }
        });
    };
})();

/* ========================================
   PORTFOLIO SECTOR FILTER
======================================== */
(function() {
    var filters = document.querySelectorAll('.portfolio-filter');
    var cards = document.querySelectorAll('.portfolio-card');
    if (!filters.length || !cards.length) return;

    filters.forEach(function(btn) {
        btn.addEventListener('click', function() {
            var sector = btn.getAttribute('data-filter');
            filters.forEach(function(b) {
                var active = b === btn;
                b.classList.toggle('active', active);
                b.setAttribute('aria-pressed', active ? 'true' : 'false');
            });
            cards.forEach(function(card) {
                if (sector === 'all' || card.getAttribute('data-sector') === sector) {
                    card.hidden = false;
                } else {
                    card.hidden = true;
                }
            });
        });
    });
})();
