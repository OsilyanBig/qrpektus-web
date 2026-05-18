/* ============================================
   QrPektüs - Main JavaScript (UPDATED)
   Prospektüs çeviri sistemi eklendi
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
    toc_title: "İçindekiler",
    btn_back: "← İlaç Kutusuna Dön",
    btn_download: "📱 Uygulamayı İndir",

    /* ===== OCURIN ===== */
    oc_title: "Ocurin %0,05 Göz Damlası Emülsiyon",
    oc_form: "💧 5 mL Şişe",
    oc_route: "👁️ Göze Uygulama",
    oc_toc1: "1. Ocurin Nedir?",
    oc_toc2: "Etkin ve Yardımcı Maddeler",
    oc_toc3: "2. Dikkat Edilmesi Gerekenler",
    oc_toc4: "Kullanmayınız",
    oc_toc5: "Dikkatli Kullanınız",
    oc_toc6: "Hamilelik ve Emzirme",
    oc_toc7: "3. Nasıl Kullanılır?",
    oc_toc8: "Uygulama Adımları",
    oc_toc9: "4. Yan Etkiler",
    oc_toc10: "5. Saklama Koşulları",
    oc_s1_title: "1. Ocurin Nedir ve Ne İçin Kullanılır?",
    oc_s1_p1: "Ocurin, iltihap giderici etkilere sahip, göze damlatıldığında göz yüzeyi ile ilişkili bağışıklık sistemini düzenleyen siklosporin maddesi içeren bir göz damlası emülsiyonudur. 5 mL beyaz, opak, hafif bulanık homojen emülsiyon içeren şişede sunulmaktadır.",
    oc_s1_box: "Kullanım Amacı: Göz kuruluğu ile ilişkili gözdeki iltihaba bağlı olarak gözyaşı yapımının baskılandığı hastalarda gözyaşı yapımının artırılması amacıyla kullanılır.",
    oc_s1_p2: "İnsanda kana geçişi veya kanda birikimi saptanmamıştır. Yalnızca göze damlatılarak uygulanır.",
    oc_s2_title: "Etkin ve Yardımcı Maddeler",
    oc_s2_h1: "Etkin Madde",
    oc_s2_p1: "Her 1 mL'de 0,5 mg (%0,05) siklosporin içerir.",
    oc_s2_h2: "Yardımcı Maddeler",
    oc_s2_l1: "Makrogolgliserol hidroksistearat",
    oc_s2_l2: "Hint yağı",
    oc_s2_l3: "Gliserin",
    oc_s2_l4: "Povidon K90",
    oc_s2_l5: "Hidroklorik asit",
    oc_s2_l6: "Sodyum hidroksit",
    oc_s2_l7: "Enjeksiyonluk su",
    oc_s3_title: "2. Kullanmadan Önce Dikkat Edilmesi Gerekenler",
    oc_s3_h1: "❌ Aşağıdaki Durumlarda Kullanmayınız",
    oc_s3_warn: "Ocurin'i aşağıdaki durumlardan herhangi biri varsa kesinlikle kullanmayınız:",
    oc_s3_l1: "İlacın bileşimindeki maddelerden herhangi birine karşı alerjiniz varsa",
    oc_s3_l2: "Gözünüzde mikroorganizmalardan kaynaklanan bir enfeksiyon varsa",
    oc_s3_l3: "Gözünüzde veya çevresinde kanser varsa veya geçmişte olduysa",
    oc_s3_h2: "⚡ Aşağıdaki Durumlarda Dikkatli Kullanınız",
    oc_s3_l4: "Ocurin'i sadece göz(ler)inize damlatmak için kullanınız",
    oc_s3_l5: "Gözde kontakt lens varken uygulamayınız. Uygulamadan önce lensleri çıkarınız, 15 dakika sonra tekrar takabilirsiniz",
    oc_s3_l6: "Gece yatarken kullanmadan önce kontakt lenslerinizi çıkarmalısınız",
    oc_s3_l7: "Herpes virüsünden kaynaklanan bir göz enfeksiyonunuz varsa veya geçirdiyseniz",
    oc_s3_l8: "Steroid içeren herhangi bir ilaç kullanıyorsanız",
    oc_s3_l9: "Glokom tedavisi için herhangi bir ilaç kullanıyorsanız",
    oc_s3_info: "Yaş Sınırı: Siklosporinin etkililiği ve güvenliliği 16 yaşın altındaki çocuklarda incelenmemiştir. Genç ve yaşlı hastalar arasında farklılık göstermemektedir.",
    oc_s3_food_h: "🍽️ Yiyecek ve İçecek ile Kullanımı",
    oc_s3_food: "Ocurin'in yiyecek ve içecekler ile etkileşmesi beklenmemektedir.",
    oc_s3_preg_h: "🤰 Hamilelik ve Emzirme",
    oc_s3_preg: "Hamilelik: Hamileyseniz Ocurin kullanılmamalıdır. Hamile kalma ihtimaliniz varsa doğum kontrolü sağlamalısınız. Tedavi sırasında hamile olduğunuzu fark ederseniz hemen doktorunuza danışınız.",
    oc_s3_lact: "Emzirme: Ocurin'in anne sütünde çok küçük miktarlarda bulunması olasıdır. Emziriyorsanız bu ilacı kullanmadan önce doktorunuza danışınız.",
    oc_s3_drive_h: "🚗 Araç ve Makine Kullanımı",
    oc_s3_drive: "Ocurin damlatıldıktan sonra gözünüzde rahatsızlık veya görme bulanıklığı oluşabilir. Araç ve makine kullanmaya başlamadan önce görmeniz netleşene kadar bekleyiniz.",
    oc_s3_inter_h: "💊 Diğer İlaçlar ile Birlikte Kullanımı",
    oc_s3_inter: "Gözünüze birden fazla damla damlatmanız gerekiyorsa, iki ayrı ilacın damlatılması arasında 15 dakika bırakınız.",
    oc_s3_inter_w: "Ocurin ile birlikte steroid içeren göz damlaları kullanıyorsanız, bunlar yan etki riskini artırabileceğinden doktorunuza danışınız.",
    oc_s4_title: "3. Ocurin Nasıl Kullanılır?",
    oc_s4_box: "Doz: Her bir göze yaklaşık 12 saat arayla günde 2 kez 1 damla Ocurin göz damlası emülsiyonu damlatınız.",
    oc_s4_h1: "📋 Uygulama Adımları",
    oc_s4_pre: "Kullanmadan önce homojen, beyaz, opak bir emülsiyon elde etmek için şişeyi birkaç kez ters çeviriniz.",
    oc_s4_l1: "Adım 1: Ellerinizi yıkayınız ve kapağı açınız",
    oc_s4_l2: "Adım 2: Şişeyi baş ve orta parmaklarınız arasında tutarak ters çeviriniz",
    oc_s4_l3: "Adım 3: İşaret parmağınız ile hafif basınç uygulayarak bir damla akıtınız",
    oc_s4_l4: "Adım 4: Kafanızı hafifçe geriye yatırınız",
    oc_s4_l5: "Adım 5: Parmağınızla alt göz kapağınızı aşağı çekerek bir kese oluşturunuz",
    oc_s4_l6: "Adım 6: Damlayı oluşan kese içine damlatınız",
    oc_s4_l7: "Adım 7: Alt göz kapağınızı yavaşça serbest bırakınız, gözünüzü kapatınız",
    oc_s4_l8: "Adım 8: Göz-burun arası bölgeye parmağınız ile hafifçe bastırınız",
    oc_s4_l9: "Adım 9: İki gözünüze de kullanmanız gerekiyorsa diğer göz için de tekrarlayınız",
    oc_s4_l10: "Adım 10: Kullandıktan sonra kapağı sıkıca kapatınız",
    oc_s4_warn: "Dikkat: Damlalık ucunu gözünüze, göz kapağınıza veya diğer yüzeylere değdirmeyiniz.",
    oc_s4_info: "Suni gözyaşları ile birlikte: Ocurin suni gözyaşları ile kullanılabilir; iki preparatın arasında 15 dakika bırakınız.",
    oc_s4_spec_h: "Özel Durumlar",
    oc_s4_spec1: "Açıldıktan sonra: 28 gün içinde kullanılmalıdır",
    oc_s4_spec2: "Çocuklar: 16 yaşın altında etkililik ve güvenlilik incelenmemiştir",
    oc_s4_spec3: "Yaşlılar: Genç ve yaşlı hastalar arasında fark yoktur",
    oc_s4_spec4: "Böbrek/Karaciğer yetmezliği: Göze uygulama için özel bildirim bulunmamaktadır",
    oc_s4_od_h: "Doz Aşımı veya Unutma",
    oc_s4_od1: "Fazla kullanım: Gereğinden fazla kullandıysanız doktor veya eczacı ile konuşunuz",
    oc_s4_od2: "Doz unutma: Unutulan dozları dengelemek için çift doz almayınız",
    oc_s4_od3: "Tedavi sonlandırma: Tedavi sonlandırıldığında herhangi bir etki bulunmamaktadır",
    oc_s5_title: "4. Olası Yan Etkiler",
    oc_s5_p1: "Tüm ilaçlar gibi Ocurin'in içeriğinde bulunan maddelere duyarlı olan kişilerde yan etkiler olabilir.",
    oc_s5_emerg: "ACİL DURUM: Aşağıdakilerden biri olursa Ocurin'i kullanmayı durdurunuz ve DERHAL doktorunuza bildiriniz veya en yakın acil bölümüne başvurunuz: Alerjik reaksiyon (gözde şişme, kurdeşen, ciddi anjiyoödem, yüzde şişme, dilde şişme, yutakta ödem ve nefes darlığı)",
    oc_s5_vc: "Çok Yaygın (10 hastanın en az 1'inde)",
    oc_s5_vc1: "Gözde yanma",
    oc_s5_c: "Yaygın (100 hastanın 1'inden fazla)",
    oc_s5_c1: "Gözde kızarıklık",
    oc_s5_c2: "Gözde akıntı",
    oc_s5_c3: "Göz yaşarması",
    oc_s5_c4: "Gözde ağrı",
    oc_s5_c5: "Gözde yabancı cisim hissi",
    oc_s5_c6: "Gözde kaşıntı",
    oc_s5_c7: "Gözde batma",
    oc_s5_c8: "Görme bozukluğu (genellikle bulanık görme)",
    oc_s5_c9: "Gözde tahriş",
    oc_s5_uc: "Yaygın Olmayan (1.000 hastanın 1'inden fazla)",
    oc_s5_uc1: "Kornea iltihabı (gözün şeffaf ön kısmı)",
    oc_s5_uc2: "Göz kapağında kızarıklık",
    oc_s5_uc3: "Herpes simpleks virüsünün neden olduğu kornea iltihabı",
    oc_s5_un: "Bilinmiyor (Sıklığı tahmin edilemiyor)",
    oc_s5_un1: "Gözün yüzeyel yaralanması (flakon ucunun göze temas etmesi sonucu)",
    oc_s5_un2: "Hipersensitivite (gözde şişme, kurdeşen, ciddi anjiyoödem, yüzde şişme, dilde şişme, boğazda şişme ve nefes darlığı)",
    oc_s5_report: "Yan Etki Bildirimi: Yan etkileri www.titck.gov.tr sitesinden veya 0800 314 00 08 numaralı hattı arayarak TÜFAM'a bildirebilirsiniz.",
    oc_s6_title: "5. Saklama Koşulları",
    oc_s6_l1: "Çocukların göremeyeceği, erişemeyeceği yerlerde ve ambalajında saklayınız",
    oc_s6_l2: "25°C'nin altındaki oda sıcaklığında saklayınız",
    oc_s6_l3: "Kapağı açılıncaya kadar sterildir",
    oc_s6_l4: "Açıldıktan sonra 25°C altında 28 gün içerisinde kullanılmalıdır",
    oc_s6_l5: "Son kullanma tarihinden sonra kullanmayınız",
    oc_s6_l6: "Üründe veya ambalajında bozukluk fark ederseniz kullanmayınız",
    oc_s6_env: "Çevre: Son kullanma tarihi geçmiş veya kullanılmayan ilaçları çöpe atmayınız! Uygun toplama sistemine veriniz.",
    oc_s6_mfg_h: "Üretim Bilgileri",
    oc_s6_mfg1: "Ruhsat Sahibi: Bilim İlaç San. ve Tic. A.Ş. – Beyoğlu, İstanbul",
    oc_s6_mfg2: "Üretim Yeri: İdol İlaç Dolum San. ve Tic. A.Ş. – Topkapı, İstanbul",

    /* ===== PAROL ===== */
    pa_title: "Parol 500 mg Tablet",
    pa_form: "💊 Parasetamol 500 mg",
    pa_route: "🥤 Ağızdan Kullanım",
    pa_toc1: "1. Parol Nedir?",
    pa_toc2: "Etkin ve Yardımcı Maddeler",
    pa_toc3: "2. Dikkat Edilmesi Gerekenler",
    pa_toc4: "Kullanmayınız",
    pa_toc5: "Dikkatli Kullanınız",
    pa_toc6: "Diğer İlaçlarla Kullanımı",
    pa_toc7: "Hamilelik ve Emzirme",
    pa_toc8: "3. Nasıl Kullanılır?",
    pa_toc9: "Doz Bilgisi",
    pa_toc10: "4. Yan Etkiler",
    pa_toc11: "5. Saklama Koşulları",
    pa_s1_title: "1. Parol Nedir ve Ne İçin Kullanılır?",
    pa_s1_p1: "Parol, her tabletinde 500 mg parasetamol içeren, ağrı kesici ve ateş düşürücü olarak etki eden bir ilaçtır. 20 ve 30 tablet içeren blister ambalajlarda sunulur.",
    pa_s1_box: "Kullanım Amacı: Hafif ve orta şiddetli ağrıların ve ateşin semptomatik tedavisinde kullanılır.",
    pa_s1_p2: "Baş ağrısı, diş ağrısı, kas ağrısı, soğuk algınlığına eşlik eden ateş gibi durumlarda doktor veya eczacı önerisine göre kullanılabilir.",

    /* ===== ROACCUTANE ===== */
    ro_title: "Roaccutane 20 mg Yumuşak Jelatin Kapsül",
    ro_form: "💊 İzotretinoin 20 mg",
    ro_route: "🥤 Ağızdan Kullanım",
    ro_count: "📦 30 Kapsül",
    ro_preg_warn: "🚨 Hamilelik Uyarısı: Roaccutane doğmamış bebeğe ciddi zarar verebilir. Hamileyken kesinlikle kullanılmamalıdır. Tedavi sırasında ve sonraki 1 ay boyunca etkili doğum kontrolü uygulanmalıdır.",

    /* ===== İBURAMİN COLD ===== */
    ib_title: "İburamin Cold Kapsül",
    ib_form: "💊 İbuprofen 200mg + Psödoefedrin 30mg + Klorfeniramin 2mg",
    ib_route: "🥤 Ağızdan Kullanım",
    ib_count: "📦 24 Kapsül",
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
    toc_title: "Contents",
    btn_back: "← Back to Drug Library",
    btn_download: "📱 Download App",

    /* ===== OCURIN EN ===== */
    oc_title: "Ocurin 0.05% Eye Drops Emulsion",
    oc_form: "💧 5 mL Bottle",
    oc_route: "👁️ Eye Application",
    oc_toc1: "1. What is Ocurin?",
    oc_toc2: "Active & Excipient Ingredients",
    oc_toc3: "2. Before You Use",
    oc_toc4: "Do Not Use",
    oc_toc5: "Use with Caution",
    oc_toc6: "Pregnancy & Breastfeeding",
    oc_toc7: "3. How to Use",
    oc_toc8: "Application Steps",
    oc_toc9: "4. Side Effects",
    oc_toc10: "5. Storage",
    oc_s1_title: "1. What is Ocurin and What is it Used For?",
    oc_s1_p1: "Ocurin is an eye drop emulsion containing cyclosporine, which has anti-inflammatory effects and regulates the immune system associated with the eye surface when instilled into the eye. It is presented in a bottle containing 5 mL of white, opaque, slightly cloudy homogeneous emulsion.",
    oc_s1_box: "Purpose: Used to increase tear production in patients whose tear production is suppressed due to inflammation associated with dry eye.",
    oc_s1_p2: "No passage into human blood or accumulation in blood has been detected. Applied only by instillation into the eye.",
    oc_s2_title: "Active & Excipient Ingredients",
    oc_s2_h1: "Active Ingredient",
    oc_s2_p1: "Each 1 mL contains 0.5 mg (0.05%) cyclosporine.",
    oc_s2_h2: "Excipient Ingredients",
    oc_s2_l1: "Macrogolglycerol hydroxystearate",
    oc_s2_l2: "Castor oil",
    oc_s2_l3: "Glycerol",
    oc_s2_l4: "Povidone K90",
    oc_s2_l5: "Hydrochloric acid",
    oc_s2_l6: "Sodium hydroxide",
    oc_s2_l7: "Water for injection",
    oc_s3_title: "2. Before You Use Ocurin",
    oc_s3_h1: "❌ Do NOT Use If",
    oc_s3_warn: "Do NOT use Ocurin if any of the following conditions apply:",
    oc_s3_l1: "You are allergic to any of the ingredients",
    oc_s3_l2: "You have an eye infection caused by microorganisms",
    oc_s3_l3: "You have or had cancer in or around your eye",
    oc_s3_h2: "⚡ Use with Caution If",
    oc_s3_l4: "Use Ocurin only for instillation into your eye(s)",
    oc_s3_l5: "Do not apply while wearing contact lenses. Remove lenses before application and wait 15 minutes before reinserting",
    oc_s3_l6: "Remove contact lenses before bedtime use",
    oc_s3_l7: "You have or had a herpes virus eye infection",
    oc_s3_l8: "You are using any steroid-containing medication",
    oc_s3_l9: "You are using any glaucoma medication",
    oc_s3_info: "Age Limit: The efficacy and safety of cyclosporine has not been studied in children under 16. No difference between young and elderly patients.",
    oc_s3_food_h: "🍽️ Use with Food and Beverages",
    oc_s3_food: "No interaction with food and beverages is expected.",
    oc_s3_preg_h: "🤰 Pregnancy and Breastfeeding",
    oc_s3_preg: "Pregnancy: If you are pregnant, Ocurin should not be used. If there is a possibility of becoming pregnant, you should use birth control. If you notice you are pregnant during treatment, consult your doctor immediately.",
    oc_s3_lact: "Breastfeeding: Ocurin may be present in breast milk in very small amounts. Consult your doctor before using this medication if you are breastfeeding.",
    oc_s3_drive_h: "🚗 Driving and Using Machines",
    oc_s3_drive: "You may experience discomfort or blurred vision after instilling Ocurin. Wait until your vision clears before driving or operating machines.",
    oc_s3_inter_h: "💊 Use with Other Medications",
    oc_s3_inter: "If you need to instill more than one drop into your eye, leave 15 minutes between two different medications.",
    oc_s3_inter_w: "If you are using steroid-containing eye drops together with Ocurin, consult your doctor as they may increase the risk of side effects.",
    oc_s4_title: "3. How to Use Ocurin",
    oc_s4_box: "Dose: Instill 1 drop of Ocurin eye drop emulsion into each eye twice daily, approximately 12 hours apart.",
    oc_s4_h1: "📋 Application Steps",
    oc_s4_pre: "Before use, invert the bottle several times to obtain a homogeneous, white, opaque emulsion.",
    oc_s4_l1: "Step 1: Wash your hands and open the cap",
    oc_s4_l2: "Step 2: Hold the bottle between your thumb and middle finger and invert it",
    oc_s4_l3: "Step 3: Apply gentle pressure with your index finger to release one drop",
    oc_s4_l4: "Step 4: Tilt your head slightly back",
    oc_s4_l5: "Step 5: Pull your lower eyelid down with your finger to create a pocket",
    oc_s4_l6: "Step 6: Instill the drop into the pocket formed",
    oc_s4_l7: "Step 7: Slowly release your lower eyelid and close your eye",
    oc_s4_l8: "Step 8: Press gently on the area between eye and nose with your finger",
    oc_s4_l9: "Step 9: If using in both eyes, repeat for the other eye",
    oc_s4_l10: "Step 10: Close the cap tightly after use",
    oc_s4_warn: "Caution: Do not touch the dropper tip to your eye, eyelid, or any surfaces.",
    oc_s4_info: "With artificial tears: Ocurin can be used with artificial tears; leave 15 minutes between the two preparations.",
    oc_s4_spec_h: "Special Conditions",
    oc_s4_spec1: "After opening: Must be used within 28 days",
    oc_s4_spec2: "Children: Efficacy and safety not studied under 16 years",
    oc_s4_spec3: "Elderly: No difference between young and elderly patients",
    oc_s4_spec4: "Kidney/Liver failure: No special notification for eye application",
    oc_s4_od_h: "Overdose or Missed Dose",
    oc_s4_od1: "Overdose: If you used more than necessary, consult a doctor or pharmacist",
    oc_s4_od2: "Missed dose: Do not take a double dose to make up for forgotten doses",
    oc_s4_od3: "Stopping treatment: No effects when treatment is discontinued",
    oc_s5_title: "4. Possible Side Effects",
    oc_s5_p1: "Like all medicines, side effects may occur in people who are sensitive to the ingredients of Ocurin.",
    oc_s5_emerg: "EMERGENCY: If any of the following occur, stop using Ocurin and IMMEDIATELY inform your doctor or go to the nearest emergency room: Allergic reaction (eye swelling, hives, severe angioedema, facial swelling, tongue swelling, throat edema, and difficulty breathing)",
    oc_s5_vc: "Very Common (at least 1 in 10 patients)",
    oc_s5_vc1: "Eye burning",
    oc_s5_c: "Common (more than 1 in 100 patients)",
    oc_s5_c1: "Eye redness",
    oc_s5_c2: "Eye discharge",
    oc_s5_c3: "Watery eyes",
    oc_s5_c4: "Eye pain",
    oc_s5_c5: "Foreign body sensation in the eye",
    oc_s5_c6: "Eye itching",
    oc_s5_c7: "Eye stinging",
    oc_s5_c8: "Vision impairment (usually blurred vision)",
    oc_s5_c9: "Eye irritation",
    oc_s5_uc: "Uncommon (more than 1 in 1,000 patients)",
    oc_s5_uc1: "Corneal inflammation",
    oc_s5_uc2: "Eyelid redness",
    oc_s5_uc3: "Corneal inflammation caused by herpes simplex virus",
    oc_s5_un: "Unknown (cannot be estimated from available data)",
    oc_s5_un1: "Superficial eye injury (due to vial tip contact during application)",
    oc_s5_un2: "Hypersensitivity (eye swelling, hives, severe angioedema, facial swelling, tongue swelling, throat swelling, and difficulty breathing)",
    oc_s5_report: "Side Effect Reporting: You can report side effects at www.titck.gov.tr or by calling 0800 314 00 08.",
    oc_s6_title: "5. Storage Conditions",
    oc_s6_l1: "Store out of the sight and reach of children, in its packaging",
    oc_s6_l2: "Store at room temperature below 25°C",
    oc_s6_l3: "Sterile until cap is opened",
    oc_s6_l4: "Must be used within 28 days after opening when stored below 25°C",
    oc_s6_l5: "Do not use after the expiry date",
    oc_s6_l6: "Do not use if you notice defects in the product or packaging",
    oc_s6_env: "Environment: Do not throw expired or unused medicines in the trash! Return them to the appropriate collection system.",
    oc_s6_mfg_h: "Manufacturing Information",
    oc_s6_mfg1: "License Holder: Bilim İlaç San. ve Tic. A.Ş. – Beyoğlu, Istanbul",
    oc_s6_mfg2: "Manufacturing Site: İdol İlaç Dolum San. ve Tic. A.Ş. – Topkapı, Istanbul",

    /* ===== PAROL EN ===== */
    pa_title: "Parol 500 mg Tablet",
    pa_form: "💊 Paracetamol 500 mg",
    pa_route: "🥤 Oral Use",
    pa_toc1: "1. What is Parol?",
    pa_toc2: "Active & Excipient Ingredients",
    pa_toc3: "2. Before You Use",
    pa_toc4: "Do Not Use",
    pa_toc5: "Use with Caution",
    pa_toc6: "Use with Other Drugs",
    pa_toc7: "Pregnancy & Breastfeeding",
    pa_toc8: "3. How to Use",
    pa_toc9: "Dosage",
    pa_toc10: "4. Side Effects",
    pa_toc11: "5. Storage",
    pa_s1_title: "1. What is Parol and What is it Used For?",
    pa_s1_p1: "Parol is a pain reliever and fever reducer containing 500 mg paracetamol per tablet. Available in 20 and 30 tablet blister packs.",
    pa_s1_box: "Purpose: Used for symptomatic treatment of mild to moderate pain and fever.",
    pa_s1_p2: "Can be used for headache, toothache, muscle pain, fever accompanying common cold, as recommended by a doctor or pharmacist.",

    /* ===== ROACCUTANE EN ===== */
    ro_title: "Roaccutane 20 mg Soft Gelatin Capsule",
    ro_form: "💊 Isotretinoin 20 mg",
    ro_route: "🥤 Oral Use",
    ro_count: "📦 30 Capsules",
    ro_preg_warn: "🚨 Pregnancy Warning: Roaccutane can seriously harm an unborn baby. It must never be used during pregnancy. Effective birth control must be used during treatment and for 1 month after.",

    /* ===== İBURAMİN COLD EN ===== */
    ib_title: "Iburamin Cold Capsule",
    ib_form: "💊 Ibuprofen 200mg + Pseudoephedrine 30mg + Chlorpheniramine 2mg",
    ib_route: "🥤 Oral Use",
    ib_count: "📦 24 Capsules",
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
    feat1_desc: "Scannen Sie den Barcode und greifen Sie in Sekunden auf den Beipackzettel zu.",
    feat2_title: "Mehrsprachige Unterstützung",
    feat2_desc: "Türkisch, Englisch, Deutsch, Französisch und Spanisch.",
    feat3_title: "Medikamentenerinnerung",
    feat3_desc: "Vergessen Sie nie Ihre Medikamentenzeiten. Intelligente Benachrichtigungen.",
    feat4_title: "Papierverschwendung reduzieren",
    feat4_desc: "Helfen Sie der Natur durch Digitalisierung von Beipackzetteln.",
    feat5_title: "Nutzungskalender",
    feat5_desc: "Verfolgen Sie Ihre täglichen Medikamente einfach.",
    feat6_title: "Sichere Daten",
    feat6_desc: "Ihre Daten werden sicher mit Firebase gespeichert.",
    how_title: "Wie funktioniert es?",
    how_subtitle: "In 4 Schritten zum Beipackzettel",
    step1_title: "App herunterladen",
    step1_desc: "Installieren Sie QrPektüs auf Ihrem Telefon.",
    step2_title: "Barcode scannen",
    step2_desc: "Scannen Sie den Barcode auf der Medikamentenschachtel.",
    step3_title: "Info anzeigen",
    step3_desc: "Sehen Sie sofort Zusammenfassungsinformationen.",
    step4_title: "Details anklicken",
    step4_desc: "Greifen Sie auf den vollständigen Beipackzettel zu.",
    stats_drugs: "Registrierte Medikamente",
    stats_users: "Aktive Benutzer",
    stats_languages: "Sprachunterstützung",
    stats_saved: "Papier gespart",
    cta_title: "Digitalisieren Sie Ihre Gesundheit",
    cta_desc: "Laden Sie die App herunter oder erkunden Sie unsere Bibliothek.",
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
    warning_title: "⚠️ Wichtiger Hinweis",
    warning_text: "Diese Seite dient nur zur Information. Konsultieren Sie immer Ihren Arzt oder Apotheker.",
    toc_title: "Inhaltsverzeichnis",
    btn_back: "← Zurück zur Bibliothek",
    btn_download: "📱 App herunterladen",

    oc_title: "Ocurin 0,05% Augentropfen Emulsion",
    oc_form: "💧 5 mL Flasche",
    oc_route: "👁️ Augenanwendung",
    oc_s1_title: "1. Was ist Ocurin und wofür wird es angewendet?",
    oc_s1_p1: "Ocurin ist eine Augentropfen-Emulsion mit Ciclosporin, die entzündungshemmend wirkt und das Immunsystem der Augenoberfläche reguliert.",
    oc_s1_box: "Zweck: Zur Erhöhung der Tränenproduktion bei Patienten, deren Tränenproduktion durch Entzündung im Zusammenhang mit trockenen Augen unterdrückt wird.",

    pa_title: "Parol 500 mg Tablette",
    pa_form: "💊 Paracetamol 500 mg",
    pa_route: "🥤 Orale Einnahme",
    pa_s1_title: "1. Was ist Parol und wofür wird es angewendet?",
    pa_s1_p1: "Parol ist ein Schmerzmittel und Fiebersenker mit 500 mg Paracetamol pro Tablette.",
    pa_s1_box: "Zweck: Zur symptomatischen Behandlung von leichten bis mittelschweren Schmerzen und Fieber.",

    ro_title: "Roaccutane 20 mg Weichgelatinekapsel",
    ro_form: "💊 Isotretinoin 20 mg",
    ro_route: "🥤 Orale Einnahme",
    ro_count: "📦 30 Kapseln",
    ro_preg_warn: "🚨 Schwangerschaftswarnung: Roaccutane kann einem ungeborenen Kind schweren Schaden zufügen.",

    ib_title: "Iburamin Cold Kapsel",
    ib_form: "💊 Ibuprofen 200mg + Pseudoephedrin 30mg + Chlorpheniramin 2mg",
    ib_route: "🥤 Orale Einnahme",
    ib_count: "📦 24 Kapseln",
  },

  fr: {
    nav_home: "Accueil",
    nav_drugs: "Bibliothèque",
    nav_about: "À propos",
    nav_download: "Télécharger",
    hero_badge: "🌿 Révolution santé sans papier",
    hero_title_1: "Prenez votre notice",
    hero_title_2: "en numérique",
    hero_desc: "Scannez le code QR avec QrPektüs et accédez instantanément à la notice.",
    hero_btn_primary: "Explorer",
    hero_btn_secondary: "Télécharger",
    features_title: "Pourquoi QrPektüs?",
    features_subtitle: "Des solutions intelligentes pour votre santé numérique",
    feat1_title: "Accès instantané via QR",
    feat1_desc: "Scannez le code-barres et accédez à la notice en secondes.",
    feat2_title: "Support multilingue",
    feat2_desc: "Turc, anglais, allemand, français et espagnol.",
    feat3_title: "Rappel de médicaments",
    feat3_desc: "N'oubliez jamais vos heures de médicaments.",
    feat4_title: "Réduire le gaspillage",
    feat4_desc: "Aidez la nature en numérisant les notices.",
    feat5_title: "Calendrier d'utilisation",
    feat5_desc: "Suivez facilement vos médicaments quotidiens.",
    feat6_title: "Données sécurisées",
    feat6_desc: "Vos données sont stockées en sécurité avec Firebase.",
    how_title: "Comment ça marche?",
    how_subtitle: "Accédez à votre notice en 4 étapes",
    step1_title: "Télécharger l'app",
    step1_desc: "Installez QrPektüs sur votre téléphone.",
    step2_title: "Scanner le code",
    step2_desc: "Scannez le code-barres sur la boîte.",
    step3_title: "Voir les infos",
    step3_desc: "Visualisez un résumé du médicament.",
    step4_title: "Cliquer pour détails",
    step4_desc: "Accédez à la notice complète.",
    stats_drugs: "Médicaments enregistrés",
    stats_languages: "Support linguistique",
    stats_saved: "Papier économisé",
    cta_title: "Numérisez votre santé",
    cta_desc: "Téléchargez l'app ou explorez notre bibliothèque.",
    cta_btn1: "Bibliothèque",
    cta_btn2: "Télécharger",
    footer_desc: "Nous prévenons le gaspillage en numérisant les notices.",
    footer_links: "Liens rapides",
    footer_drugs_title: "Médicaments",
    footer_contact: "Contact",
    footer_rights: "© 2025 QrPektüs. Tous droits réservés.",
    footer_disclaimer: "Ce site est informatif et ne remplace pas les conseils médicaux.",
    lib_title: "Bibliothèque de médicaments",
    lib_subtitle: "Accédez aux notices de tous les médicaments.",
    lib_search: "Rechercher...",
    lib_detail_btn: "Voir la notice",
    back_to_library: "← Retour",
    prospektus_barcode: "Code-barres",
    prospektus_manufacturer: "Fabricant",
    warning_title: "⚠️ Avertissement",
    warning_text: "Cette page est informative. Consultez toujours votre médecin.",
    toc_title: "Sommaire",
    btn_back: "← Retour à la bibliothèque",
    btn_download: "📱 Télécharger l'app",

    oc_title: "Ocurin 0,05% Collyre Émulsion",
    oc_form: "💧 Flacon 5 mL",
    oc_route: "👁️ Application oculaire",
    oc_s1_title: "1. Qu'est-ce qu'Ocurin et dans quel cas est-il utilisé?",
    oc_s1_p1: "Ocurin est un collyre en émulsion contenant de la ciclosporine, qui a des effets anti-inflammatoires et régule le système immunitaire de la surface oculaire.",
    oc_s1_box: "Objectif: Utilisé pour augmenter la production de larmes chez les patients dont la production est supprimée en raison d'une inflammation liée à la sécheresse oculaire.",

    pa_title: "Parol 500 mg Comprimé",
    pa_form: "💊 Paracétamol 500 mg",
    pa_route: "🥤 Voie orale",
    pa_s1_title: "1. Qu'est-ce que Parol et dans quel cas est-il utilisé?",
    pa_s1_p1: "Parol est un analgésique et antipyrétique contenant 500 mg de paracétamol par comprimé.",
    pa_s1_box: "Objectif: Traitement symptomatique des douleurs légères à modérées et de la fièvre.",

    ro_title: "Roaccutane 20 mg Capsule Molle",
    ro_form: "💊 Isotrétinoïne 20 mg",
    ro_route: "🥤 Voie orale",
    ro_count: "📦 30 Capsules",
    ro_preg_warn: "🚨 Avertissement grossesse: Roaccutane peut gravement nuire au bébé à naître.",

    ib_title: "Iburamin Cold Capsule",
    ib_form: "💊 Ibuprofène 200mg + Pseudoéphédrine 30mg + Chlorphéniramine 2mg",
    ib_route: "🥤 Voie orale",
    ib_count: "📦 24 Capsules",
  },

  es: {
    nav_home: "Inicio",
    nav_drugs: "Biblioteca",
    nav_about: "Sobre nosotros",
    nav_download: "Descargar",
    hero_badge: "🌿 Revolución de salud sin papel",
    hero_title_1: "Lleva tu prospecto",
    hero_title_2: "al mundo digital",
    hero_desc: "Escanea el código QR con QrPektüs y accede al prospecto al instante.",
    hero_btn_primary: "Explorar",
    hero_btn_secondary: "Descargar",
    features_title: "¿Por qué QrPektüs?",
    features_subtitle: "Soluciones inteligentes para tu salud digital",
    feat1_title: "Acceso instantáneo por QR",
    feat1_desc: "Escanea el código de barras y accede al prospecto en segundos.",
    feat2_title: "Soporte multiidioma",
    feat2_desc: "Turco, inglés, alemán, francés y español.",
    feat3_title: "Recordatorio",
    feat3_desc: "Nunca olvides tus horarios de medicación.",
    feat4_title: "Reduce el desperdicio",
    feat4_desc: "Ayuda a la naturaleza digitalizando prospectos.",
    feat5_title: "Calendario de uso",
    feat5_desc: "Sigue fácilmente tus medicamentos diarios.",
    feat6_title: "Datos seguros",
    feat6_desc: "Tus datos se almacenan de forma segura con Firebase.",
    how_title: "¿Cómo funciona?",
    how_subtitle: "Accede a tu prospecto en 4 pasos",
    step1_title: "Descargar la app",
    step1_desc: "Instala QrPektüs en tu teléfono.",
    step2_title: "Escanear el código",
    step2_desc: "Escanea el código de barras de la caja.",
    step3_title: "Ver la información",
    step3_desc: "Visualiza un resumen del medicamento.",
    step4_title: "Clic para detalles",
    step4_desc: "Accede al prospecto completo.",
    stats_drugs: "Medicamentos registrados",
    stats_languages: "Soporte de idiomas",
    stats_saved: "Papel ahorrado",
    cta_title: "Lleva tu salud al digital",
    cta_desc: "Descarga la app o explora nuestra biblioteca.",
    cta_btn1: "Biblioteca",
    cta_btn2: "Descargar",
    footer_desc: "Prevenimos el desperdicio digitalizando prospectos.",
    footer_links: "Enlaces rápidos",
    footer_drugs_title: "Medicamentos",
    footer_contact: "Contacto",
    footer_rights: "© 2025 QrPektüs. Todos los derechos reservados.",
    footer_disclaimer: "Este sitio es solo informativo.",
    lib_title: "Biblioteca de medicamentos",
    lib_subtitle: "Accede a los prospectos de todos los medicamentos.",
    lib_search: "Buscar...",
    lib_detail_btn: "Ver prospecto",
    back_to_library: "← Volver",
    prospektus_barcode: "Código de barras",
    prospektus_manufacturer: "Fabricante",
    warning_title: "⚠️ Aviso importante",
    warning_text: "Esta página es solo informativa. Consulte siempre a su médico.",
    toc_title: "Contenido",
    btn_back: "← Volver a la biblioteca",
    btn_download: "📱 Descargar app",

    oc_title: "Ocurin 0,05% Gotas Oftálmicas Emulsión",
    oc_form: "💧 Frasco 5 mL",
    oc_route: "👁️ Aplicación ocular",
    oc_s1_title: "1. ¿Qué es Ocurin y para qué se utiliza?",
    oc_s1_p1: "Ocurin es una emulsión de gotas oftálmicas con ciclosporina, que tiene efectos antiinflamatorios y regula el sistema inmunológico de la superficie ocular.",
    oc_s1_box: "Propósito: Se utiliza para aumentar la producción de lágrimas en pacientes cuya producción está suprimida debido a la inflamación relacionada con el ojo seco.",

    pa_title: "Parol 500 mg Comprimido",
    pa_form: "💊 Paracetamol 500 mg",
    pa_route: "🥤 Vía oral",
    pa_s1_title: "1. ¿Qué es Parol y para qué se utiliza?",
    pa_s1_p1: "Parol es un analgésico y antipirético que contiene 500 mg de paracetamol por comprimido.",
    pa_s1_box: "Propósito: Tratamiento sintomático de dolores leves a moderados y fiebre.",

    ro_title: "Roaccutane 20 mg Cápsula Blanda de Gelatina",
    ro_form: "💊 Isotretinoína 20 mg",
    ro_route: "🥤 Vía oral",
    ro_count: "📦 30 Cápsulas",
    ro_preg_warn: "🚨 Advertencia de embarazo: Roaccutane puede causar daño grave al bebé no nacido.",

    ib_title: "Iburamin Cold Cápsula",
    ib_form: "💊 Ibuprofeno 200mg + Pseudoefedrina 30mg + Clorfeniramina 2mg",
    ib_route: "🥤 Vía oral",
    ib_count: "📦 24 Cápsulas",
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

    // data-i18n → textContent
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    // data-i18n-html → innerHTML (for bold/formatted text)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });

    // data-i18n-placeholder
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
    return translations[this.currentLang]?.[key] || translations['tr']?.[key] || key;
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

/* ---------- Drug Search ---------- */
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

/* ---------- TOC Active Highlight ---------- */
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
