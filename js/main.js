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

// Emergency banner dismiss
var dismissBtn = document.querySelector('.emergency-dismiss');
if (dismissBtn) {
    dismissBtn.addEventListener('click', function() {
        var banner = document.querySelector('.emergency-banner');
        var header = document.querySelector('header');
        if (banner) {
            banner.style.display = 'none';
            header.classList.add('banner-dismissed');
        }
    });
}

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
