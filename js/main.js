/* ============================================
   QrPektüs - Main JavaScript
   ============================================ */

/* ---------- Language System ---------- */
const translations = {
  tr: {
    nav_home: "Ana Sayfa",
    nav_drugs: "İlaç Kutusu",
    nav_about: "Hakkımızda",
    nav_download: "Uygulamayı İndir",
    hero_badge: "🌿 Kağıtsız Sağlık Devrimi",
    hero_title_1: "İlaç Prospektüsünü",
    hero_title_2: "Dijitalde Taşı",
    hero_desc: "QrPektüs ile ilaç kutunuzdaki QR kodu tarayın, prospektüse anında ulaşın. Çoklu dil desteği, hatırlatıcılar ve daha fazlası.",
    hero_btn_primary: "İlaçları Keşfet",
    hero_btn_secondary: "Uygulamayı İndir",
    features_title: "Neden QrPektüs?",
    features_subtitle: "Sağlığınızı dijital dünyaya taşıyan akıllı çözümler",
    feat1_title: "QR Kod ile Anında Erişim",
    feat1_desc: "İlaç kutusundaki barkodu tarayın, prospektüse saniyeler içinde ulaşın.",
    feat2_title: "Çoklu Dil Desteği",
    feat2_desc: "Türkçe, İngilizce, Almanca, Fransızca ve İspanyolca dil seçenekleri.",
    feat3_title: "İlaç Hatırlatıcısı",
    feat3_desc: "İlaç saatlerinizi asla unutmayın. Akıllı bildirimler ile zamanında hatırlatma.",
    feat4_title: "Kağıt İsrafını Azalt",
    feat4_desc: "Milyonlarca prospektüs kağıdını dijitale taşıyarak doğaya katkı sağlayın.",
    feat5_title: "Kullanım Takvimi",
    feat5_desc: "Günlük ilaç takibinizi kolayca yapın, aldığınız ilaçları işaretleyin.",
    feat6_title: "Güvenli Veri",
    feat6_desc: "Verileriniz Firebase altyapısı ile güvenli şekilde saklanır.",
    how_title: "Nasıl Çalışır?",
    how_subtitle: "4 adımda ilaç prospektüsünüze ulaşın",
    step1_title: "Uygulamayı İndir",
    step1_desc: "QrPektüs uygulamasını telefonuna yükle.",
    step2_title: "Barkodu Tara",
    step2_desc: "İlaç kutusundaki barkodu kamerayla tara.",
    step3_title: "Bilgiyi Gör",
    step3_desc: "İlaç hakkında özet bilgiyi anında görüntüle.",
    step4_title: "Detay İçin Tıkla",
    step4_desc: "Tam prospektüse web sitemizden ulaş.",
    stats_drugs: "Kayıtlı İlaç",
    stats_users: "Aktif Kullanıcı",
    stats_languages: "Dil Desteği",
    stats_saved: "Kağıt Kurtarıldı",
    cta_title: "Sağlığınızı Dijitale Taşıyın",
    cta_desc: "Hemen uygulamayı indirin veya ilaç kütüphanemizi keşfedin.",
    cta_btn1: "İlaç Kutusu",
    cta_btn2: "Uygulamayı İndir",
    footer_desc: "İlaç prospektüslerini dijitale taşıyarak kağıt israfını önlüyor, çok dilli sağlık bilgisine erişimi kolaylaştırıyoruz.",
    footer_links: "Hızlı Bağlantılar",
    footer_drugs_title: "İlaçlar",
    footer_contact: "İletişim",
    footer_rights: "© 2025 QrPektüs. Tüm hakları saklıdır.",
    footer_disclaimer: "Bu site bilgilendirme amaçlıdır, tıbbi tavsiye yerine geçmez.",
    lib_title: "İlaç Kutusu",
    lib_subtitle: "Tüm ilaçların prospektüslerine buradan ulaşabilirsiniz.",
    lib_search: "İlaç ara...",
    lib_detail_btn: "Prospektüsü Gör",
    back_to_library: "← İlaç Kutusuna Dön",
    prospektus_barcode: "Barkod",
    prospektus_manufacturer: "Üretici",
    prospektus_read_more: "Prospektüsü Oku",
    warning_title: "⚠️ Önemli Uyarı",
    warning_text: "Bu sayfa yalnızca bilgilendirme amaçlıdır. İlaç kullanımında mutlaka doktorunuza veya eczacınıza danışınız.",
  },
  en: {
    nav_home: "Home",
    nav_drugs: "Drug Library",
    nav_about: "About",
    nav_download: "Download App",
    hero_badge: "🌿 Paperless Health Revolution",
    hero_title_1: "Take Your Drug",
    hero_title_2: "Leaflet Digital",
    hero_desc: "Scan the QR code on your medicine box with QrPektüs and instantly access the leaflet. Multi-language support, reminders and more.",
    hero_btn_primary: "Explore Drugs",
    hero_btn_secondary: "Download App",
    features_title: "Why QrPektüs?",
    features_subtitle: "Smart solutions that bring your health into the digital world",
    feat1_title: "Instant Access via QR",
    feat1_desc: "Scan the barcode on the medicine box and access the leaflet in seconds.",
    feat2_title: "Multi-Language Support",
    feat2_desc: "Turkish, English, German, French and Spanish language options.",
    feat3_title: "Medicine Reminder",
    feat3_desc: "Never forget your medicine times. Smart notifications remind you on time.",
    feat4_title: "Reduce Paper Waste",
    feat4_desc: "Help nature by moving millions of leaflet papers to digital.",
    feat5_title: "Usage Calendar",
    feat5_desc: "Easily track your daily medications and mark the ones you've taken.",
    feat6_title: "Secure Data",
    feat6_desc: "Your data is securely stored with Firebase infrastructure.",
    how_title: "How Does It Work?",
    how_subtitle: "Access your drug leaflet in 4 steps",
    step1_title: "Download the App",
    step1_desc: "Install QrPektüs on your phone.",
    step2_title: "Scan the Barcode",
    step2_desc: "Scan the barcode on the medicine box with your camera.",
    step3_title: "View the Info",
    step3_desc: "Instantly view summary information about the drug.",
    step4_title: "Click for Details",
    step4_desc: "Access the full leaflet from our website.",
    stats_drugs: "Registered Drugs",
    stats_users: "Active Users",
    stats_languages: "Language Support",
    stats_saved: "Paper Saved",
    cta_title: "Take Your Health Digital",
    cta_desc: "Download the app now or explore our drug library.",
    cta_btn1: "Drug Library",
    cta_btn2: "Download App",
    footer_desc: "We prevent paper waste by digitizing drug leaflets and make multilingual health information easily accessible.",
    footer_links: "Quick Links",
    footer_drugs_title: "Drugs",
    footer_contact: "Contact",
    footer_rights: "© 2025 QrPektüs. All rights reserved.",
    footer_disclaimer: "This site is for informational purposes only and does not replace medical advice.",
    lib_title: "Drug Library",
    lib_subtitle: "You can access the leaflets of all drugs here.",
    lib_search: "Search drug...",
    lib_detail_btn: "View Leaflet",
    back_to_library: "← Back to Drug Library",
    prospektus_barcode: "Barcode",
    prospektus_manufacturer: "Manufacturer",
    prospektus_read_more: "Read Leaflet",
    warning_title: "⚠️ Important Warning",
    warning_text: "This page is for informational purposes only. Always consult your doctor or pharmacist when using medication.",
  },
  de: {
    nav_home: "Startseite",
    nav_drugs: "Arzneimittelbibliothek",
    nav_about: "Über uns",
    nav_download: "App herunterladen",
    hero_badge: "🌿 Papierlose Gesundheitsrevolution",
    hero_title_1: "Ihren Beipackzettel",
    hero_title_2: "Digital Mitnehmen",
    hero_desc: "Scannen Sie den QR-Code auf Ihrer Medikamentenschachtel mit QrPektüs und greifen Sie sofort auf den Beipackzettel zu.",
    hero_btn_primary: "Medikamente entdecken",
    hero_btn_secondary: "App herunterladen",
    features_title: "Warum QrPektüs?",
    features_subtitle: "Intelligente Lösungen für Ihre digitale Gesundheit",
    feat1_title: "Sofortzugriff per QR",
    feat1_desc: "Scannen Sie den Barcode auf der Medikamentenschachtel und greifen Sie in Sekunden auf den Beipackzettel zu.",
    feat2_title: "Mehrsprachige Unterstützung",
    feat2_desc: "Türkisch, Englisch, Deutsch, Französisch und Spanisch.",
    feat3_title: "Medikamentenerinnerung",
    feat3_desc: "Vergessen Sie Ihre Medikamentenzeiten nie. Intelligente Benachrichtigungen.",
    feat4_title: "Papierverschwendung reduzieren",
    feat4_desc: "Helfen Sie der Natur, indem Sie Millionen von Beipackzetteln digitalisieren.",
    feat5_title: "Nutzungskalender",
    feat5_desc: "Verfolgen Sie Ihre täglichen Medikamente einfach.",
    feat6_title: "Sichere Daten",
    feat6_desc: "Ihre Daten werden sicher mit der Firebase-Infrastruktur gespeichert.",
    how_title: "Wie funktioniert es?",
    how_subtitle: "In 4 Schritten zum Beipackzettel",
    step1_title: "App herunterladen",
    step1_desc: "Installieren Sie QrPektüs auf Ihrem Telefon.",
    step2_title: "Barcode scannen",
    step2_desc: "Scannen Sie den Barcode auf der Medikamentenschachtel.",
    step3_title: "Info anzeigen",
    step3_desc: "Sehen Sie sofort Zusammenfassungsinformationen zum Medikament.",
    step4_title: "Details anklicken",
    step4_desc: "Greifen Sie auf den vollständigen Beipackzettel auf unserer Website zu.",
    stats_drugs: "Registrierte Medikamente",
    stats_users: "Aktive Benutzer",
    stats_languages: "Sprachunterstützung",
    stats_saved: "Papier gespart",
    cta_title: "Bringen Sie Ihre Gesundheit ins Digitale",
    cta_desc: "Laden Sie jetzt die App herunter oder erkunden Sie unsere Arzneimittelbibliothek.",
    cta_btn1: "Arzneimittelbibliothek",
    cta_btn2: "App herunterladen",
    footer_desc: "Wir verhindern Papierverschwendung durch Digitalisierung von Beipackzetteln.",
    footer_links: "Schnelllinks",
    footer_drugs_title: "Medikamente",
    footer_contact: "Kontakt",
    footer_rights: "© 2025 QrPektüs. Alle Rechte vorbehalten.",
    footer_disclaimer: "Diese Seite dient nur zur Information und ersetzt keine medizinische Beratung.",
    lib_title: "Arzneimittelbibliothek",
    lib_subtitle: "Hier finden Sie die Beipackzettel aller Medikamente.",
    lib_search: "Medikament suchen...",
    lib_detail_btn: "Beipackzettel ansehen",
    back_to_library: "← Zurück zur Bibliothek",
    prospektus_barcode: "Barcode",
    prospektus_manufacturer: "Hersteller",
    prospektus_read_more: "Beipackzettel lesen",
    warning_title: "⚠️ Wichtiger Hinweis",
    warning_text: "Diese Seite dient nur zur Information. Konsultieren Sie immer Ihren Arzt oder Apotheker.",
  },
  fr: {
    nav_home: "Accueil",
    nav_drugs: "Bibliothèque de médicaments",
    nav_about: "À propos",
    nav_download: "Télécharger l'app",
    hero_badge: "🌿 Révolution de la santé sans papier",
    hero_title_1: "Prenez votre notice",
    hero_title_2: "en numérique",
    hero_desc: "Scannez le code QR sur votre boîte de médicaments avec QrPektüs et accédez instantanément à la notice.",
    hero_btn_primary: "Explorer les médicaments",
    hero_btn_secondary: "Télécharger l'app",
    features_title: "Pourquoi QrPektüs?",
    features_subtitle: "Des solutions intelligentes pour votre santé numérique",
    feat1_title: "Accès instantané via QR",
    feat1_desc: "Scannez le code-barres sur la boîte de médicaments et accédez à la notice en quelques secondes.",
    feat2_title: "Support multilingue",
    feat2_desc: "Turc, anglais, allemand, français et espagnol.",
    feat3_title: "Rappel de médicaments",
    feat3_desc: "N'oubliez jamais vos heures de médicaments.",
    feat4_title: "Réduire le gaspillage de papier",
    feat4_desc: "Aidez la nature en numérisant des millions de notices.",
    feat5_title: "Calendrier d'utilisation",
    feat5_desc: "Suivez facilement vos médicaments quotidiens.",
    feat6_title: "Données sécurisées",
    feat6_desc: "Vos données sont stockées en toute sécurité avec Firebase.",
    how_title: "Comment ça marche?",
    how_subtitle: "Accédez à votre notice en 4 étapes",
    step1_title: "Télécharger l'app",
    step1_desc: "Installez QrPektüs sur votre téléphone.",
    step2_title: "Scanner le code-barres",
    step2_desc: "Scannez le code-barres sur la boîte de médicaments.",
    step3_title: "Voir les infos",
    step3_desc: "Visualisez instantanément un résumé sur le médicament.",
    step4_title: "Cliquer pour les détails",
    step4_desc: "Accédez à la notice complète sur notre site.",
    stats_drugs: "Médicaments enregistrés",
    stats_users: "Utilisateurs actifs",
    stats_languages: "Support linguistique",
    stats_saved: "Papier économisé",
    cta_title: "Numérisez votre santé",
    cta_desc: "Téléchargez l'app maintenant ou explorez notre bibliothèque.",
    cta_btn1: "Bibliothèque",
    cta_btn2: "Télécharger l'app",
    footer_desc: "Nous prévenons le gaspillage de papier en numérisant les notices.",
    footer_links: "Liens rapides",
    footer_drugs_title: "Médicaments",
    footer_contact: "Contact",
    footer_rights: "© 2025 QrPektüs. Tous droits réservés.",
    footer_disclaimer: "Ce site est à titre informatif uniquement et ne remplace pas les conseils médicaux.",
    lib_title: "Bibliothèque de médicaments",
    lib_subtitle: "Vous pouvez accéder aux notices de tous les médicaments ici.",
    lib_search: "Rechercher un médicament...",
    lib_detail_btn: "Voir la notice",
    back_to_library: "← Retour à la bibliothèque",
    prospektus_barcode: "Code-barres",
    prospektus_manufacturer: "Fabricant",
    prospektus_read_more: "Lire la notice",
    warning_title: "⚠️ Avertissement important",
    warning_text: "Cette page est à titre informatif uniquement. Consultez toujours votre médecin ou pharmacien.",
  },
  es: {
    nav_home: "Inicio",
    nav_drugs: "Biblioteca de medicamentos",
    nav_about: "Sobre nosotros",
    nav_download: "Descargar app",
    hero_badge: "🌿 Revolución de salud sin papel",
    hero_title_1: "Lleva tu prospecto",
    hero_title_2: "al mundo digital",
    hero_desc: "Escanea el código QR de tu caja de medicamentos con QrPektüs y accede al prospecto al instante.",
    hero_btn_primary: "Explorar medicamentos",
    hero_btn_secondary: "Descargar app",
    features_title: "¿Por qué QrPektüs?",
    features_subtitle: "Soluciones inteligentes para llevar tu salud al mundo digital",
    feat1_title: "Acceso instantáneo por QR",
    feat1_desc: "Escanea el código de barras de la caja y accede al prospecto en segundos.",
    feat2_title: "Soporte multiidioma",
    feat2_desc: "Turco, inglés, alemán, francés y español.",
    feat3_title: "Recordatorio de medicamentos",
    feat3_desc: "Nunca olvides tus horarios de medicación.",
    feat4_title: "Reduce el desperdicio de papel",
    feat4_desc: "Ayuda a la naturaleza digitalizando millones de prospectos.",
    feat5_title: "Calendario de uso",
    feat5_desc: "Realiza fácilmente el seguimiento de tus medicamentos diarios.",
    feat6_title: "Datos seguros",
    feat6_desc: "Tus datos se almacenan de forma segura con Firebase.",
    how_title: "¿Cómo funciona?",
    how_subtitle: "Accede a tu prospecto en 4 pasos",
    step1_title: "Descargar la app",
    step1_desc: "Instala QrPektüs en tu teléfono.",
    step2_title: "Escanear el código",
    step2_desc: "Escanea el código de barras de la caja.",
    step3_title: "Ver la información",
    step3_desc: "Visualiza al instante un resumen del medicamento.",
    step4_title: "Clic para detalles",
    step4_desc: "Accede al prospecto completo en nuestro sitio web.",
    stats_drugs: "Medicamentos registrados",
    stats_users: "Usuarios activos",
    stats_languages: "Soporte de idiomas",
    stats_saved: "Papel ahorrado",
    cta_title: "Lleva tu salud al digital",
    cta_desc: "Descarga la app ahora o explora nuestra biblioteca de medicamentos.",
    cta_btn1: "Biblioteca",
    cta_btn2: "Descargar app",
    footer_desc: "Prevenimos el desperdicio de papel digitalizando prospectos de medicamentos.",
    footer_links: "Enlaces rápidos",
    footer_drugs_title: "Medicamentos",
    footer_contact: "Contacto",
    footer_rights: "© 2025 QrPektüs. Todos los derechos reservados.",
    footer_disclaimer: "Este sitio es solo informativo y no reemplaza el consejo médico.",
    lib_title: "Biblioteca de medicamentos",
    lib_subtitle: "Aquí puedes acceder a los prospectos de todos los medicamentos.",
    lib_search: "Buscar medicamento...",
    lib_detail_btn: "Ver prospecto",
    back_to_library: "← Volver a la biblioteca",
    prospektus_barcode: "Código de barras",
    prospektus_manufacturer: "Fabricante",
    prospektus_read_more: "Leer prospecto",
    warning_title: "⚠️ Aviso importante",
    warning_text: "Esta página es solo informativa. Consulte siempre a su médico o farmacéutico.",
  }
};

/* ---------- Language Manager ---------- */
const LangManager = {
  currentLang: 'tr',

  init() {
    const saved = localStorage.getItem('qrpektus_lang') || 'tr';
    this.setLang(saved, false);
    this.bindEvents();
  },

  setLang(lang, save = true) {
    if (!translations[lang]) return;
    this.currentLang = lang;
    if (save) localStorage.setItem('qrpektus_lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (translations[lang][key]) {
        el.placeholder = translations[lang][key];
      }
    });

    document.documentElement.setAttribute('lang', lang);
    this.updateLangBtn(lang);
  },

  get(key) {
    return translations[this.currentLang][key] || translations['tr'][key] || key;
  },

  updateLangBtn(lang) {
    const flags = { tr: '🇹🇷', en: '🇬🇧', de: '🇩🇪', fr: '🇫🇷', es: '🇪🇸' };
    const names = { tr: 'TR', en: 'EN', de: 'DE', fr: 'FR', es: 'ES' };
    const btn = document.querySelector('.lang-current');
    if (btn) {
      btn.innerHTML = `<span class="flag">${flags[lang]}</span> ${names[lang]} <span>▾</span>`;
    }
  },

  bindEvents() {
    document.querySelectorAll('[data-lang]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = el.getAttribute('data-lang');
        this.setLang(lang);
        document.querySelector('.lang-dropdown')?.classList.remove('open');
      });
    });

    const langBtn = document.querySelector('.lang-btn');
    if (langBtn) {
      langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        document.querySelector('.lang-dropdown')?.classList.toggle('open');
      });
    }

    document.addEventListener('click', () => {
      document.querySelector('.lang-dropdown')?.classList.remove('open');
    });
  }
};

/* ---------- Navbar ---------- */
const Navbar = {
  init() {
    this.handleScroll();
    this.handleMobileMenu();
    this.setActiveLink();
    window.addEventListener('scroll', () => this.handleScroll());
  },

  handleScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
      if (window.scrollY > 400) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }
  },

  handleMobileMenu() {
    const toggle = document.querySelector('.nav-toggle');
    const links = document.querySelector('.nav-links');
    if (!toggle || !links) return;

    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
      const spans = toggle.querySelectorAll('span');
      spans[0].style.transform = links.classList.contains('open')
        ? 'rotate(45deg) translate(5px, 6px)' : '';
      spans[1].style.opacity = links.classList.contains('open') ? '0' : '1';
      spans[2].style.transform = links.classList.contains('open')
        ? 'rotate(-45deg) translate(5px, -6px)' : '';
    });

    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        links.classList.remove('open');
        toggle.querySelectorAll('span').forEach(s => {
          s.style.transform = '';
          s.style.opacity = '';
        });
      });
    });
  },

  setActiveLink() {
    const current = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(a => {
      const href = a.getAttribute('href');
      if (href === current || (current === '' && href === 'index.html')) {
        a.classList.add('active');
      }
    });
  }
};

/* ---------- Scroll Animations ---------- */
const ScrollAnimations = {
  init() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    document.querySelectorAll(
      '.feature-card, .step-card, .drug-card, .prospektus-section, .stat-item'
    ).forEach(el => {
      el.classList.add('animate-ready');
      observer.observe(el);
    });
  }
};

/* ---------- Counter Animation ---------- */
const CounterAnimation = {
  init() {
    const counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
  },

  animateCounter(el) {
    const target = parseInt(el.getAttribute('data-count'));
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 1800;
    const start = performance.now();

    const update = (time) => {
      const elapsed = time - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * target);
      el.textContent = current.toLocaleString() + suffix;
      if (progress < 1) requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
  }
};

/* ---------- Drug Search (İlaç Kutusu sayfası) ---------- */
const DrugSearch = {
  init() {
    const searchInput = document.querySelector('#drug-search');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      const cards = document.querySelectorAll('.drug-card');

      cards.forEach(card => {
        const name = card.querySelector('h3')?.textContent.toLowerCase() || '';
        const desc = card.querySelector('.drug-short-desc')?.textContent.toLowerCase() || '';
        const visible = name.includes(query) || desc.includes(query);
        card.style.display = visible ? 'block' : 'none';
      });
    });
  }
};

/* ---------- TOC Active Highlight (Prospektüs sayfası) ---------- */
const TOCHighlight = {
  init() {
    const sections = document.querySelectorAll('.prospektus-section[id]');
    const tocLinks = document.querySelectorAll('.toc a');
    if (!sections.length || !tocLinks.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          tocLinks.forEach(link => link.classList.remove('active'));
          const activeLink = document.querySelector(`.toc a[href="#${entry.target.id}"]`);
          if (activeLink) activeLink.classList.add('active');
        }
      });
    }, { rootMargin: '-20% 0px -70% 0px' });

    sections.forEach(section => observer.observe(section));
  }
};

/* ---------- Back to Top ---------- */
const BackToTop = {
  init() {
    const btn = document.querySelector('.back-to-top');
    if (!btn) return;
    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
};

/* ---------- Animate CSS helper ---------- */
const style = document.createElement('style');
style.textContent = `
  .animate-ready {
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  .animate-in {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
  .feature-card.animate-ready:nth-child(2) { transition-delay: 0.1s; }
  .feature-card.animate-ready:nth-child(3) { transition-delay: 0.2s; }
  .feature-card.animate-ready:nth-child(4) { transition-delay: 0.1s; }
  .feature-card.animate-ready:nth-child(5) { transition-delay: 0.2s; }
  .feature-card.animate-ready:nth-child(6) { transition-delay: 0.3s; }
  .step-card.animate-ready:nth-child(2) { transition-delay: 0.1s; }
  .step-card.animate-ready:nth-child(3) { transition-delay: 0.2s; }
  .step-card.animate-ready:nth-child(4) { transition-delay: 0.3s; }
`;
document.head.appendChild(style);

/* ---------- App Init ---------- */
document.addEventListener('DOMContentLoaded', () => {
  LangManager.init();
  Navbar.init();
  ScrollAnimations.init();
  CounterAnimation.init();
  DrugSearch.init();
  TOCHighlight.init();
  BackToTop.init();
});
