/* ==========================================================================
   Texas Divine Plumbing — site behavior
   ========================================================================== */
(function () {
    'use strict';

    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ---------------------------------------------------------------
       Menu (narrow screens) and the service-area submenu
       --------------------------------------------------------------- */
    var nav = document.getElementById('site-nav');
    var menuBtn = document.querySelector('.menu-toggle');

    function setMenu(open) {
        if (!nav || !menuBtn) return;
        nav.classList.toggle('is-open', open);
        menuBtn.setAttribute('aria-expanded', String(open));
        menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
        var use = menuBtn.querySelector('use');
        if (use) use.setAttribute('href', open ? '#i-close' : '#i-menu');
        document.body.style.overflow = open ? 'hidden' : '';
    }

    if (menuBtn) {
        menuBtn.addEventListener('click', function () {
            setMenu(!nav.classList.contains('is-open'));
        });
    }

    document.querySelectorAll('.nav a').forEach(function (link) {
        link.addEventListener('click', function () { setMenu(false); });
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            setMenu(false);
            document.querySelectorAll('.nav__item--has-sub.is-open').forEach(function (li) {
                li.classList.remove('is-open');
                li.querySelector('[data-sub-toggle]').setAttribute('aria-expanded', 'false');
            });
        }
    });

    document.querySelectorAll('[data-sub-toggle]').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var li = btn.closest('.nav__item--has-sub');
            var open = !li.classList.contains('is-open');
            li.classList.toggle('is-open', open);
            btn.setAttribute('aria-expanded', String(open));
        });
    });

    document.addEventListener('click', function (e) {
        document.querySelectorAll('.nav__item--has-sub.is-open').forEach(function (li) {
            if (!li.contains(e.target) && window.innerWidth > 1040) {
                li.classList.remove('is-open');
                li.querySelector('[data-sub-toggle]').setAttribute('aria-expanded', 'false');
            }
        });
    });

    /* Mobile dock: show on pages that have one */
    var dockEl = document.querySelector('.dock');
    if (dockEl) {
        document.body.classList.add('has-dock');
        /* The dock waits until the page's own Call/Text Alexis buttons scroll away */
        var heroCta = document.querySelector('.pin__cta');
        if (heroCta && 'IntersectionObserver' in window) {
            new IntersectionObserver(function (entries) {
                dockEl.classList.toggle('is-tucked', entries[0].isIntersecting);
            }).observe(heroCta);
        }
    }

    /* ---------------------------------------------------------------
       Messages arrive as you read: a moment of "typing", then the bubbles.
       Content is visible by default; this only runs for groups still below
       the fold when the page loads.
       --------------------------------------------------------------- */
    if ('IntersectionObserver' in window && !reduceMotion) {
        var groups = Array.prototype.slice.call(document.querySelectorAll('.thread .group:not(.group--me)'));
        var fold = window.innerHeight;
        var pending = groups.filter(function (g) {
            return g.getBoundingClientRect().top > fold * 0.9;
        });

        pending.forEach(function (g) { g.classList.add('is-waiting'); });

        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                var g = entry.target;
                io.unobserve(g);
                setTimeout(function () {
                    g.classList.remove('is-waiting');
                    g.classList.add('is-arriving');
                }, 520);
            });
        }, { rootMargin: '0px 0px -12% 0px' });

        pending.forEach(function (g) { io.observe(g); });

        /* Jumping to an anchor shouldn't leave the target hidden */
        window.addEventListener('hashchange', function () {
            pending.forEach(function (g) {
                if (g.classList.contains('is-waiting') && g.getBoundingClientRect().top < window.innerHeight) {
                    g.classList.remove('is-waiting');
                }
            });
        });
    }

    /* ---------------------------------------------------------------
       Composer: send to the family (Netlify form) or text the chosen person
       --------------------------------------------------------------- */
    var form = document.getElementById('message-form');
    if (form) {
        var textLink = form.querySelector('[data-text-instead]');
        var textLabel = form.querySelector('[data-text-label]');
        var status = form.querySelector('.composer__status');
        var sendBtn = form.querySelector('[data-send]');

        function selectedPerson() {
            var r = form.querySelector('input[name="to"]:checked');
            return {
                name: r ? r.getAttribute('data-name') : 'Alexis',
                tel: r ? r.getAttribute('data-tel') : '+12818408062'
            };
        }

        function smsHref() {
            var p = selectedPerson();
            var body = form.message.value.trim();
            var name = form.name.value.trim();
            if (name) body = (body ? body + '\n\n' : '') + '- ' + name;
            if (!body) return 'sms:' + p.tel;
            /* iOS uses &body=, everything else ?body= */
            var sep = /iPhone|iPad|iPod/.test(navigator.userAgent) ? '&' : '?';
            return 'sms:' + p.tel + sep + 'body=' + encodeURIComponent(body);
        }

        function refreshText() {
            var p = selectedPerson();
            textLink.setAttribute('href', smsHref());
            textLabel.textContent = (currentLang === 'es' ? 'Mándale texto a ' : 'Text ') + p.name + (currentLang === 'es' ? '' : ' instead');
        }

        form.addEventListener('change', refreshText);
        form.addEventListener('input', refreshText);
        refreshText();

        if (/[?&]sent=1/.test(location.search)) {
            status.textContent = 'Got it. Alexis has your message and will get back to you soon.';
            status.className = 'composer__status is-ok';
        }

        form.addEventListener('submit', function (e) {
            e.preventDefault();
            status.className = 'composer__status';

            var missing = [];
            if (!form.name.value.trim()) missing.push('your name');
            if (!form.phone.value.trim()) missing.push('a phone number');
            if (missing.length) {
                status.textContent = 'Add ' + missing.join(' and ') + ' so we can get back to you.';
                status.classList.add('is-error');
                (form.name.value.trim() ? form.phone : form.name).focus();
                return;
            }

            sendBtn.disabled = true;
            status.textContent = 'Sending…';

            var data = new URLSearchParams(new FormData(form)).toString();
            fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: data
            }).then(function (res) {
                if (!res.ok) throw new Error(res.status);
                form.reset();
                refreshText();
                status.textContent = 'Got it. Alexis has your message and will get back to you soon.';
                status.classList.add('is-ok');
                if (typeof gtag === 'function') gtag('event', 'form_submit', { event_category: 'contact' });
            }).catch(function () {
                status.textContent = 'That didn’t go through. Try "Text instead" or call Alexis at 281-840-8062.';
                status.classList.add('is-error');
            }).then(function () {
                sendBtn.disabled = false;
            });
        });
    }

    /* ---------------------------------------------------------------
       Analytics: calls and texts
       --------------------------------------------------------------- */
    document.addEventListener('click', function (e) {
        var a = e.target.closest && e.target.closest('a[href^="tel:"], a[href^="sms:"]');
        if (!a || typeof gtag !== 'function') return;
        var isTel = a.getAttribute('href').indexOf('tel:') === 0;
        gtag('event', isTel ? 'phone_call' : 'sms_click', {
            event_category: 'contact',
            event_label: a.getAttribute('href').replace(/^(tel|sms):/, '').split(/[?&]/)[0]
        });
    });

    /* ---------------------------------------------------------------
       English / Español
       Only the shared chrome and the homepage's key lines are translated.
       --------------------------------------------------------------- */
    var currentLang = 'en';
    var es = {
        'meta': 'Trino, Hector, Alexis + 7 tíos',
        'nav.work': 'Nuestro trabajo',
        'nav.builds': 'Obras',
        'nav.reviews': 'Reseñas',
        'nav.areas': 'Áreas de servicio',
        'nav.message': 'Escríbanos',
        'call': 'Llamar a Alexis',
        'cta.call': 'Llamar a Alexis',
        'cta.text': 'Texto a Alexis',
        'pin.note': 'Alexis recibe cada solicitud nueva y asigna al plomero indicado de la familia.',
        'panel.start': 'Toda solicitud nueva va con Alexis',
        'panel.startNote': 'Alexis recibe cada solicitud nueva, le prepara la cotización y asigna al plomero indicado.',
        'composer.toAlexis': 'Para: Alexis',
        'composer.toNote': 'Lee cada mensaje y lo pasa al chat de la familia',
        'pin.label': 'Fijado por la familia',
        'pin.title': 'Plomería en la que de verdad puede confiar.',
        'pin.lede': 'Un problema de plomería puede detener su obra o arruinarle el día. Nuestro equipo familiar lleva 65 años resolviéndolo: llegamos a tiempo, hacemos el trabajo bien y le decimos la verdad. Grandes obras comerciales o una fuga en casa, lo hacemos simple.',
        'pin.licensed': 'Con licencia y seguro',
        'pin.by': 'Fijado por Alexis &middot; Llegamos a tiempo, hacemos el trabajo bien y le decimos la verdad.',
        'pin.byShort': 'Fijado por Alexis &middot; toda solicitud nueva empieza con Alexis',
        'day.reddit': 'Del hilo de r/houston',
        'day.services': 'Lo que hacemos',
        'day.work': 'En la obra',
        'day.builds': 'Obras que plomeamos',
        'day.why': 'Por qué guardan nuestro número',
        'day.reviews': 'Lo que dicen los clientes',
        'day.faq': 'Preguntas frecuentes',
        'day.message': 'Escríbale a Alexis',
        'panel.sub': 'Negocio familiar · Houston, todo Texas',
        'panel.members': 'Los plomeros',
        'panel.uncles': '7 tíos',
        'panel.unclesRole': 'Plomeros, más de 20 años cada uno, todos enseñados por Trino',
        'panel.check': 'Compruébelo',
        'footer.line': 'El mismo número por 40 años.',
        'footer.sub': 'Una familia de plomeros en Houston, al servicio de todo Texas. Con licencia y seguro.',
        'composer.title': 'Mándele los detalles a Alexis.',
        'composer.intro': 'Cuéntele a Alexis qué pasa. Alexis le prepara la cotización y lo pasa al chat de la familia para ver quién puede ayudar.',
        'composer.to': 'Enviar a',
        'composer.alexisNote': 'le agenda la cita',
        'composer.hectorNote': 'plomero maestro',
        'composer.trinoNote': '40 años',
        'composer.kind': 'Tipo de trabajo',
        'composer.home': 'En casa',
        'composer.commercial': 'Comercial',
        'composer.newBuild': 'Cotización de obra nueva',
        'composer.name': 'Su nombre',
        'composer.phone': 'Teléfono',
        'composer.email': 'Correo (opcional)',
        'composer.send': 'Enviar a Alexis',
        'composer.note': '¿Es urgente? Llame a Alexis:',
        'composer.ph': 'El calentador de agua está goteando en el garaje. ¿Pueden venir mañana?'
    };
    var en = {};

    function applyLang(lang) {
        currentLang = lang;
        document.documentElement.lang = lang;
        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            var key = el.getAttribute('data-i18n');
            if (!(key in en)) en[key] = el.innerHTML;
            var next = lang === 'es' ? es[key] : en[key];
            if (next) el.innerHTML = next;
        });
        document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
            var key = el.getAttribute('data-i18n-ph');
            if (!(('ph:' + key) in en)) en['ph:' + key] = el.getAttribute('placeholder');
            el.setAttribute('placeholder', lang === 'es' ? es[key] : en['ph:' + key]);
        });
        document.querySelectorAll('.lang button').forEach(function (b) {
            var on = b.getAttribute('data-lang') === lang;
            b.classList.toggle('active', on);
            b.setAttribute('aria-pressed', String(on));
        });
        if (form) form.dispatchEvent(new Event('change'));
        try { localStorage.setItem('tdp-lang', lang); } catch (err) { /* private mode */ }
    }

    document.querySelectorAll('.lang button').forEach(function (b) {
        b.addEventListener('click', function () { applyLang(b.getAttribute('data-lang')); });
    });

    try {
        if (localStorage.getItem('tdp-lang') === 'es') applyLang('es');
    } catch (err) { /* private mode */ }
})();
