/* ============================================
   QRpektüs - Main JavaScript (FINAL)
   Only TR + EN
   ============================================ */

const translations = {
  tr: {
    /* NAV */
    nav_home: "Ana Sayfa",
    nav_drugs: "İlaç Kutusu",
    nav_download: "Uygulamayı İndir",

    /* HERO */
    hero_badge: "🌿 Kağıtsız Sağlık Devrimi",
    hero_title_1: "İlaç Prospektüsünü",
    hero_title_2: "Dijitalde Taşı",
    hero_desc: "QRpektüs ile ilaç kutunuzdaki QR kodu tarayın, prospektüse anında ulaşın. Çoklu dil desteği, hatırlatıcılar ve daha fazlası.",
    hero_btn_primary: "İlaçları Keşfet",
    hero_btn_secondary: "Uygulamayı İndir",

    /* PHONE MOCKUP */
    phone_header: "QRpektüs",
    phone_scan: "📷",
    phone_card1_title: "Ocurin %0,05 Göz Damlası",
    phone_card1_text: "Göz kuruluğuna bağlı iltihap tedavisinde kullanılır. 12 saatte bir 1 damla uygulanır.",
    phone_card1_badge: "Detaylı Bak →",
    phone_card2_title: "⏰ Hatırlatıcı",
    phone_card2_text: "Ocurin – Her gün 09:00 ve 21:00",
    phone_card2_badge: "Aktif",
    pill1_text: "Parol 500mg",
    pill1_sub: "Tarandı ✓",
    pill2_text: "İlaç Vakti!",
    pill2_sub: "Roaccutane 20mg",

    /* STATS */
    stats_drugs: "Kayıtlı İlaç",
    stats_languages: "Dil Desteği",
    stats_free: "Ücretsiz",
    stats_paper: "Kağıt İsrafı",

    /* FEATURES */
    features_title: "Neden QRpektüs?",
    features_subtitle: "Sağlığınızı dijital dünyaya taşıyan akıllı çözümler",
    feat1_title: "QR Kod ile Anında Erişim",
    feat1_desc: "İlaç kutusundaki barkodu tarayın, prospektüse saniyeler içinde ulaşın.",
    feat2_title: "Çoklu Dil Desteği",
    feat2_desc: "Türkçe ve İngilizce dil seçenekleri ile herkes için erişilebilir.",
    feat3_title: "İlaç Hatırlatıcısı",
    feat3_desc: "İlaç saatlerinizi asla unutmayın. Akıllı bildirimler ile zamanında hatırlatma.",
    feat4_title: "Kağıt İsrafını Azalt",
    feat4_desc: "Milyonlarca prospektüs kağıdını dijitale taşıyarak doğaya katkı sağlayın.",
    feat5_title: "Kullanım Takvimi",
    feat5_desc: "Günlük ilaç takibinizi kolayca yapın, aldığınız ilaçları işaretleyin.",
    feat6_title: "Güvenli Veri",
    feat6_desc: "Verileriniz Firebase altyapısı ile güvenli şekilde saklanır.",

    /* HOW IT WORKS */
    how_title: "Nasıl Çalışır?",
    how_subtitle: "4 adımda ilaç prospektüsünüze ulaşın",
    step1_title: "Uygulamayı İndir",
    step1_desc: "QRpektüs uygulamasını telefonuna yükle.",
    step2_title: "Barkodu Tara",
    step2_desc: "İlaç kutusundaki barkodu kamerayla tara.",
    step3_title: "Bilgiyi Gör",
    step3_desc: "İlaç hakkında özet bilgiyi anında görüntüle.",
    step4_title: "Detay İçin Tıkla",
    step4_desc: "Tam prospektüse web sitemizden ulaş.",

    /* DRUG PREVIEW */
    drug_preview_title: "İlaç Kütüphanemiz",
    drug_preview_subtitle: "Kayıtlı ilaçlarımızdan bazıları – tümünü görmek için İlaç Kutusu sayfasını ziyaret edin.",
    drug_preview_btn: "Tüm İlaçları Gör →",
    drug_oc_name: "Ocurin %0,05",
    drug_oc_desc: "Göz kuruluğuna bağlı iltihap tedavisinde kullanılan göz damlası.",
    drug_pa_name: "Parol 500mg",
    drug_pa_desc: "Ağrı kesici ve ateş düşürücü parasetamol tableti.",
    drug_ro_name: "Roaccutane 20mg",
    drug_ro_desc: "Şiddetli akne tedavisinde kullanılan izotretinoin kapsülü.",
    drug_ib_name: "İburamin Cold",
    drug_ib_desc: "Soğuk algınlığı semptomlarını gideren kombine kapsül.",

    /* CTA */
    cta_title: "Sağlığınızı Dijitale Taşıyın",
    cta_desc: "Hemen uygulamayı indirin veya ilaç kütüphanemizi keşfedin.",
    cta_btn1: "İlaç Kutusu",
    cta_btn2: "Uygulamayı İndir",
    cta_soon: "Yakında Google Play Store'da",
    cta_mobile_title: "📱 Mobil Uygulamamızı Deneyin",
    cta_mobile_desc: "QRpektüs uygulaması ile ilaç kutunuzdaki barkodu tarayarak prospektüse anında erişin, hatırlatıcı kurun ve ilaçlarınızı takip edin.",

    /* FOOTER */
    footer_desc: "İlaç prospektüslerini dijitale taşıyarak kağıt israfını önlüyor, çok dilli sağlık bilgisine erişimi kolaylaştırıyoruz.",
    footer_links: "Hızlı Bağlantılar",
    footer_drugs_title: "İlaçlar",
    footer_rights: "© 2025 QRpektüs. Tüm hakları saklıdır.",
    footer_disclaimer: "Bu site bilgilendirme amaçlıdır, tıbbi tavsiye yerine geçmez.",

    /* LIBRARY */
    lib_title: "İlaç Kutusu",
    lib_subtitle: "Tüm ilaçların prospektüslerine buradan ulaşabilirsiniz.",
    lib_search: "İlaç ara...",
    lib_detail_btn: "Prospektüsü Gör",
    lib_oc_desc: "Göz kuruluğuna bağlı iltihap tedavisinde gözyaşı yapımını artıran siklosporin içerikli göz damlası emülsiyonu.",
    lib_pa_desc: "Hafif ve orta şiddetli ağrıların giderilmesi ile ateş düşürmek için kullanılan parasetamol içerikli tablet.",
    lib_ro_desc: "Şiddetli ve dirençli akne tiplerinin tedavisinde kullanılan izotretinoin etkin maddeli yumuşak jelatin kapsül.",
    lib_ib_desc: "Soğuk algınlığının sebep olduğu hapşırma, burun akıntısı, burun tıkanıklığı, ağrı ve ateş belirtilerini gideren kombine kapsül.",
    lib_tag_eye: "Göz",
    lib_tag_rx: "Reçeteli",
    lib_tag_pain: "Ağrı Kesici",
    lib_tag_fever: "Ateş Düşürücü",
    lib_tag_skin: "Cilt",
    lib_tag_cold: "Soğuk Algınlığı",

    /* SHARED PROSPEKTUS */
    back_to_library: "← İlaç Kutusuna Dön",
    prospektus_barcode: "Barkod",
    prospektus_manufacturer: "Üretici",
    warning_title: "⚠️ Önemli Uyarı",
    warning_text: "Bu sayfa yalnızca bilgilendirme amaçlıdır. İlaç kullanımında mutlaka doktorunuza veya eczacınıza danışınız.",
    toc_title: "İçindekiler",
    btn_back: "← İlaç Kutusuna Dön",
    btn_download: "📱 Uygulamayı İndir",

    /* ===== OCURIN TR ===== */
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
    oc_s3_info: "Yaş Sınırı: Siklosporinin etkililiği ve güvenliliği 16 yaşın altındaki çocuklarda incelenmemiştir.",
    oc_s3_food_h: "🍽️ Yiyecek ve İçecek ile Kullanımı",
    oc_s3_food: "Ocurin'in yiyecek ve içecekler ile etkileşmesi beklenmemektedir.",
    oc_s3_preg_h: "🤰 Hamilelik ve Emzirme",
    oc_s3_preg: "Hamileyseniz Ocurin kullanılmamalıdır. Hamile kalma ihtimaliniz varsa doğum kontrolü sağlamalısınız.",
    oc_s3_lact: "Ocurin'in anne sütünde çok küçük miktarlarda bulunması olasıdır. Emziriyorsanız doktorunuza danışınız.",
    oc_s3_drive_h: "🚗 Araç ve Makine Kullanımı",
    oc_s3_drive: "Ocurin damlatıldıktan sonra görme bulanıklığı oluşabilir. Görmeniz netleşene kadar bekleyiniz.",
    oc_s3_inter_h: "💊 Diğer İlaçlar ile Birlikte Kullanımı",
    oc_s3_inter: "Birden fazla göz damlası kullanıyorsanız, aralarında 15 dakika bırakınız.",
    oc_s3_inter_w: "Steroid içeren göz damlaları ile birlikte kullanıyorsanız doktorunuza danışınız.",
    oc_s4_title: "3. Ocurin Nasıl Kullanılır?",
    oc_s4_box: "Doz: Her bir göze yaklaşık 12 saat arayla günde 2 kez 1 damla damlatınız.",
    oc_s4_h1: "📋 Uygulama Adımları",
    oc_s4_pre: "Kullanmadan önce şişeyi birkaç kez ters çeviriniz.",
    oc_s4_l1: "Adım 1: Ellerinizi yıkayınız ve kapağı açınız",
    oc_s4_l2: "Adım 2: Şişeyi ters çeviriniz",
    oc_s4_l3: "Adım 3: Hafif basınç ile bir damla akıtınız",
    oc_s4_l4: "Adım 4: Kafanızı geriye yatırınız",
    oc_s4_l5: "Adım 5: Alt göz kapağını çekerek kese oluşturunuz",
    oc_s4_l6: "Adım 6: Damlayı keseye damlatınız",
    oc_s4_l7: "Adım 7: Göz kapağını bırakınız, gözünüzü kapatınız",
    oc_s4_l8: "Adım 8: Göz-burun arasına hafifçe bastırınız",
    oc_s4_l9: "Adım 9: İki göze de gerekiyorsa tekrarlayınız",
    oc_s4_l10: "Adım 10: Kapağı sıkıca kapatınız",
    oc_s4_warn: "Damlalık ucunu gözünüze veya yüzeylere değdirmeyiniz.",
    oc_s4_info: "Suni gözyaşları ile birlikte kullanılabilir; araya 15 dakika bırakınız.",
    oc_s4_spec_h: "Özel Durumlar",
    oc_s4_spec1: "Açıldıktan sonra: 28 gün içinde kullanılmalıdır",
    oc_s4_spec2: "Çocuklar: 16 yaşın altında incelenmemiştir",
    oc_s4_spec3: "Yaşlılar: Fark yoktur",
    oc_s4_spec4: "Böbrek/Karaciğer: Özel bildirim yoktur",
    oc_s4_od_h: "Doz Aşımı veya Unutma",
    oc_s4_od1: "Fazla kullandıysanız doktora danışınız",
    oc_s4_od2: "Çift doz almayınız",
    oc_s4_od3: "Tedavi sonlandırmada etki yoktur",
    oc_s5_title: "4. Olası Yan Etkiler",
    oc_s5_p1: "Duyarlı kişilerde yan etkiler olabilir.",
    oc_s5_emerg: "ACİL: Alerjik reaksiyon (şişme, kurdeşen, nefes darlığı) olursa DERHAL doktora başvurunuz.",
    oc_s5_vc: "Çok Yaygın (≥1/10)",
    oc_s5_vc1: "Gözde yanma",
    oc_s5_c: "Yaygın (≥1/100)",
    oc_s5_c1: "Gözde kızarıklık",
    oc_s5_c2: "Gözde akıntı",
    oc_s5_c3: "Göz yaşarması",
    oc_s5_c4: "Gözde ağrı",
    oc_s5_c5: "Yabancı cisim hissi",
    oc_s5_c6: "Gözde kaşıntı",
    oc_s5_c7: "Gözde batma",
    oc_s5_c8: "Bulanık görme",
    oc_s5_c9: "Gözde tahriş",
    oc_s5_uc: "Yaygın Olmayan (≥1/1.000)",
    oc_s5_uc1: "Kornea iltihabı",
    oc_s5_uc2: "Göz kapağında kızarıklık",
    oc_s5_uc3: "Herpes kaynaklı kornea iltihabı",
    oc_s5_un: "Bilinmiyor",
    oc_s5_un1: "Yüzeyel göz yaralanması",
    oc_s5_un2: "Aşırı duyarlılık reaksiyonu",
    oc_s5_report: "Yan etkileri www.titck.gov.tr veya 0800 314 00 08'den bildirebilirsiniz.",
    oc_s6_title: "5. Saklama Koşulları",
    oc_s6_l1: "Çocukların erişemeyeceği yerde saklayınız",
    oc_s6_l2: "25°C altında saklayınız",
    oc_s6_l3: "Açılıncaya kadar sterildir",
    oc_s6_l4: "Açıldıktan sonra 28 gün içinde kullanınız",
    oc_s6_l5: "Son kullanma tarihinden sonra kullanmayınız",
    oc_s6_l6: "Bozukluk varsa kullanmayınız",
    oc_s6_env: "Kullanılmayan ilaçları çöpe atmayınız!",
    oc_s6_mfg_h: "Üretim Bilgileri",
    oc_s6_mfg1: "Ruhsat: Bilim İlaç – Beyoğlu, İstanbul",
    oc_s6_mfg2: "Üretim: İdol İlaç – Topkapı, İstanbul",

    /* ===== PAROL TR ===== */
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
    pa_s1_p1: "Parol, her tabletinde 500 mg parasetamol içeren, ağrı kesici ve ateş düşürücü ilaçtır.",
    pa_s1_box: "Hafif ve orta şiddetli ağrıların ve ateşin semptomatik tedavisinde kullanılır.",
    pa_s1_p2: "Baş ağrısı, diş ağrısı, kas ağrısı, soğuk algınlığı ateşi için kullanılabilir.",
    pa_s2_title: "Etkin ve Yardımcı Maddeler",
    pa_s2_h1: "Etkin Madde",
    pa_s2_p1: "Her tablette 500 mg parasetamol bulunur.",
    pa_s2_h2: "Yardımcı Maddeler",
    pa_s2_l1: "Mikrokristalin selüloz",
    pa_s2_l2: "Povidon K-30",
    pa_s2_l3: "Mısır nişastası",
    pa_s2_l4: "Stearik asit",
    pa_s3_title: "2. Dikkat Edilmesi Gerekenler",
    pa_s3_h1: "❌ Kullanmayınız",
    pa_s3_l1: "Parasetamole alerjiniz varsa",
    pa_s3_l2: "Şiddetli karaciğer yetmezliği",
    pa_s3_l3: "Şiddetli böbrek yetmezliği",
    pa_s3_h2: "⚡ Dikkatli Kullanınız",
    pa_s3_l4: "Kansızlık (anemi) varsa",
    pa_s3_l5: "Akciğer hastalığı varsa",
    pa_s3_l6: "Karaciğer veya böbrek bozukluğu",
    pa_s3_l7: "Deride kızarıklık veya döküntü gelişirse",
    pa_s3_l8: "Başka parasetamol içeren ilaç kullanıyorsanız",
    pa_s3_l9: "Kilonuz düşükse veya yetersiz besleniyorsanız",
    pa_s3_l10: "Gilbert sendromu varsa",
    pa_s3_l11: "Alkol kullanıyorsanız",
    pa_s3_warn1: "Parasetamol içeren başka ilaçlarla birlikte kullanım doz aşımına neden olabilir.",
    pa_s3_warn2: "Yüksek dozda ciddi karaciğer toksisitesi riski vardır. Alkol kullananlarda günlük doz 2000 mg'ı aşmamalıdır.",
    pa_s3_info: "3-5 gün içinde düzelme olmazsa doktorunuza danışınız.",
    pa_s3_food_h: "🍽️ Yiyecek ve İçecek",
    pa_s3_food: "Alkol ile karaciğer riski artar. Besinler emilimi azaltabilir.",
    pa_s3_preg_h: "🤰 Hamilelik ve Emzirme",
    pa_s3_preg: "Hamilelikte belirgin zarar bildirilmemiştir; hekim önerisi ile kullanılır.",
    pa_s3_lact: "Az miktarda süte geçer. Emziren anneler hekim önerisi ile kullanabilir.",
    pa_s3_drive_h: "🚗 Araç Kullanımı",
    pa_s3_drive: "Bazı hastalarda baş dönmesi veya uyku hali yapabilir.",
    pa_s4_title: "Diğer İlaçlarla Kullanımı",
    pa_s4_p1: "Şu ilaçlarla etkileşebilir:",
    pa_s4_l1: "Mide boşalmasını etkileyen ilaçlar",
    pa_s4_l2: "Sara ilaçları (fenitoin, fenobarbital, karbamazepin)",
    pa_s4_l3: "Kloramfenikol, rifampisin",
    pa_s4_l4: "Varfarin ve kan sulandırıcılar",
    pa_s4_l5: "Zidovudin",
    pa_s4_l6: "Sarı kantaron içeren ürünler",
    pa_s4_l7: "Kolestiramin",
    pa_s4_l8: "Diğer ağrı kesiciler ve alkol",
    pa_s4_info: "Tüm kullandığınız ilaçları doktorunuza bildiriniz.",
    pa_s5_title: "3. Parol Nasıl Kullanılır?",
    pa_s5_h1: "📋 Doz Bilgisi",
    pa_s5_box: "Yetişkinler ve 12 yaş üzeri: 1-2 tablet, her 4 saatte bir tekrarlanabilir.",
    pa_s5_l1: "Günlük en yüksek doz: 4000 mg",
    pa_s5_l2: "24 saatte 4 dozdan fazla kullanılmamalı",
    pa_s5_child: "6-12 yaş: 4-6 saat ara ile yarım-1 tablet. Günlük max: 60 mg/kg",
    pa_s5_how_h: "Uygulama",
    pa_s5_how1: "Ağızdan alınır",
    pa_s5_how2: "Bir bardak su ile yutunuz",
    pa_s5_how3: "En düşük etkili dozda kullanınız",
    pa_s5_age_h: "Yaş Grupları",
    pa_s5_age1: "6 yaş altı: Doktor önerisi olmadan kullanılmaz",
    pa_s5_age2: "6-11 yaş: 3 günden fazla doktorsuz kullanılmaz",
    pa_s5_age3: "Yaşlılar: Zayıf/hareketsiz yaşlılarda doz azaltılmalı",
    pa_s5_od_h: "Doz Aşımı",
    pa_s5_od: "Doz aşımında derhal doktora veya hastaneye başvurunuz.",
    pa_s5_miss_h: "Doz Unutma",
    pa_s5_miss: "Çift doz almayınız.",
    pa_s6_title: "4. Olası Yan Etkiler",
    pa_s6_p1: "Genellikle hafif yan etkileri vardır.",
    pa_s6_emerg: "ACİL: Şişme, alerjik belirtiler, nefes darlığı, beklenmeyen kanama olursa DERHAL başvurunuz.",
    pa_s6_c: "Yaygın",
    pa_s6_c1: "Uyku hali, baş ağrısı, baş dönmesi",
    pa_s6_c2: "Bulantı, kusma, karın ağrısı",
    pa_s6_c3: "Kabızlık, hazımsızlık, gaz",
    pa_s6_uc: "Yaygın Olmayan",
    pa_s6_uc1: "Böbrek hasarı (uzun süreli kullanım)",
    pa_s6_uc2: "Sindirim sistemi kanaması",
    pa_s6_r: "Seyrek",
    pa_s6_r1: "Kan hücresi bozuklukları",
    pa_s6_r2: "Ciddi alerjik reaksiyon (anafilaksi)",
    pa_s6_r3: "Deri döküntüsü, Stevens-Johnson sendromu",
    pa_s6_vr: "Çok Seyrek",
    pa_s6_vr1: "Trombositopeni",
    pa_s6_vr2: "Karaciğer işlev bozukluğu",
    pa_s6_report: "Yan etkileri www.titck.gov.tr veya 0800 314 00 08'den bildirebilirsiniz.",
    pa_s7_title: "5. Saklama Koşulları",
    pa_s7_l1: "Çocukların erişemeyeceği yerde saklayınız",
    pa_s7_l2: "25°C altında, orijinal ambalajda saklayınız",
    pa_s7_l3: "Son kullanma tarihinden sonra kullanmayınız",
    pa_s7_l4: "Kullanılmayan ilaçları uygun şekilde atınız",
    pa_s7_mfg_h: "Üretim Bilgileri",
    pa_s7_mfg1: "Ruhsat: Atabay Kimya – Kadıköy, İstanbul",
    pa_s7_mfg2: "Üretim: Atabay İlaç Fabrikası – Kadıköy, İstanbul",

    /* ===== ROACCUTANE TR ===== */
    ro_title: "Roaccutane 20 mg Yumuşak Jelatin Kapsül",
    ro_form: "💊 İzotretinoin 20 mg",
    ro_route: "🥤 Ağızdan Kullanım",
    ro_count: "📦 30 Kapsül",
    ro_preg_warn: "🚨 Hamileyken kesinlikle kullanılmamalıdır. Tedavi sırasında ve sonraki 1 ay boyunca doğum kontrolü uygulanmalıdır.",
    ro_toc1: "1. Roaccutane Nedir?",
    ro_toc2: "Etkin ve Yardımcı Maddeler",
    ro_toc3: "2. Dikkat Edilmesi Gerekenler",
    ro_toc4: "Kullanmayınız",
    ro_toc5: "Kadın Hastalar",
    ro_toc6: "Erkek Hastalar",
    ro_toc7: "Tüm Hastalar",
    ro_toc8: "3. Nasıl Kullanılır?",
    ro_toc9: "Doz Bilgisi",
    ro_toc10: "4. Yan Etkiler",
    ro_toc11: "5. Saklama",
    ro_s1_title: "1. Roaccutane Nedir?",
    ro_s1_p1: "Roaccutane, izotretinoin içeren, A vitamini ile ilişkili retinoidler grubundan bir ilaçtır.",
    ro_s1_p2: "30 adet kahverengi-kırmızı ve beyaz renkli, \"ROA 20\" baskılı yumuşak jelatin kapsül içerir.",
    ro_s1_box: "Şiddetli akne tiplerinin (nodüler, konglobat veya kalıcı yara izi riski olan) tedavisinde kullanılır.",
    ro_s1_info: "Sadece diğer tedaviler başarısız olduğunda, dermatolog denetiminde kullanılır.",
    ro_s2_title: "Etkin ve Yardımcı Maddeler",
    ro_s2_h1: "Etkin Madde",
    ro_s2_p1: "Her kapsülde 20 mg izotretinoin",
    ro_s2_h2: "Yardımcı Maddeler",
    ro_s2_l1: "Titandioksit",
    ro_s2_l2: "Kırmızı demir oksit",
    ro_s2_l3: "Soya yağı",
    ro_s2_l4: "Sarı balmumu",
    ro_s2_l5: "Soya fasulyesi yağı",
    ro_s2_l6: "Bitkisel yağlar",
    ro_s2_l7: "Jelatin",
    ro_s2_l8: "Gliserol",
    ro_s2_warn: "Soya alerjiniz varsa kullanmayınız.",
    ro_s3_title: "2. Dikkat Edilmesi Gerekenler",
    ro_s3_h1: "❌ Kullanmayınız",
    ro_s3_l1: "Soya veya yardımcı maddelere alerji",
    ro_s3_l2: "Hamilelik veya hamilelik şüphesi",
    ro_s3_l3: "Emzirme",
    ro_s3_l4: "Karaciğer hastalığı",
    ro_s3_l5: "Çok yüksek kan yağları",
    ro_s3_l6: "Yüksek A vitamini düzeyi",
    ro_s3_l7: "12 yaşından küçükler",
    ro_s3_l8: "Tetrasiklin tedavisi görenler",
    ro_s4_title: "Kadın Hastalar İçin",
    ro_s4_warn: "🚨 KRİTİK: Roaccutane doğmamış bebeğe ciddi zarar verebilir (teratojeniktir).",
    ro_s4_l1: "Hamileyken kesinlikle kullanılmaz",
    ro_s4_l2: "Emzirirken kullanılmaz",
    ro_s4_l3: "İki etkili doğum kontrol yöntemi kullanınız",
    ro_s4_l4: "Tedaviden 1 ay önce başlayın, 1 ay sonrasına kadar sürdürün",
    ro_s4_l5: "Tedavi öncesi negatif hamilelik testi gereklidir",
    ro_s4_l6: "Aylık hamilelik testleri yaptırınız",
    ro_s4_l7: "Tedavi sonrası 5 hafta bekleyip son test",
    ro_s4_stop: "Tedavi sırasında veya sonraki 1 ayda hamile kalırsanız HEMEN durdurun.",
    ro_s5_title: "Erkek Hastalar İçin",
    ro_s5_p1: "Sperme zarar vermesi beklenmez. Semende çok düşük seviyede izotretinoin bulunur.",
    ro_s5_info: "İlacınızı başkasıyla, özellikle kadınlarla paylaşmayınız.",
    ro_s6_title: "Tüm Hastalar İçin",
    ro_s6_l1: "Ruhsal sağlık geçmişinizi doktorunuza bildirin",
    ro_s6_l2: "Kan yağları yükselebilir; düzenli test gerekir",
    ro_s6_l3: "Karaciğer enzimleri yükselebilir",
    ro_s6_l4: "Kan şekeri artabilir",
    ro_s6_l5: "Nemlendirici krem ve dudak kremi kullanınız",
    ro_s6_l6: "En az SPF 15 güneş koruyucu kullanınız",
    ro_s6_l7: "6 ay boyunca ağda, dermabrazyon, lazer yaptırmayınız",
    ro_s6_l8: "Yoğun egzersizi azaltınız",
    ro_s6_l9: "A vitamini takviyesi almayınız",
    ro_s6_l10: "1 ay boyunca kan bağışı yapmayınız",
    ro_s6_drive_h: "🚗 Araç Kullanımı",
    ro_s6_drive: "Gece görüşü azalabilir. Bitkinlik hissederseniz araç kullanmayınız.",
    ro_s6_inter_h: "💊 İlaç Etkileşimleri",
    ro_s6_inter: "A vitamini takviyesi veya tetrasiklin almayınız.",
    ro_s7_title: "3. Nasıl Kullanılır?",
    ro_s7_box: "Başlangıç: 0,5 mg/kg/gün. Örn: 70 kg → günde 35 mg.",
    ro_s7_l1: "Günde 1-2 kere tok karnına alınız",
    ro_s7_l2: "Yemekle birlikte bütün olarak yutunuz",
    ro_s7_l3: "Doz: 0,5-1,0 mg/kg/gün arasında ayarlanır",
    ro_s7_l4: "Tedavi süresi: 16-24 hafta",
    ro_s7_l5: "Genellikle 1 tedavi dönemi yeterli",
    ro_s7_info: "İlk haftalarda akne kötüleşebilir, zamanla düzelir.",
    ro_s7_spec_h: "Özel Durumlar",
    ro_s7_spec1: "12 yaş altı kullanılmaz",
    ro_s7_spec2: "Böbrek sorunu: Düşük dozla başlanır",
    ro_s7_spec3: "Karaciğer yetmezliğinde kullanılmaz",
    ro_s7_od: "Fazla kullandıysanız doktora danışınız. Çift doz almayınız.",
    ro_s8_title: "4. Olası Yan Etkiler",
    ro_s8_p1: "Bazı yan etkiler ciddi olabilir ve hastaneye yatış gerektirebilir.",
    ro_s8_emerg: "ACİL: İntihar düşüncesi, ciddi alerjik reaksiyon, şiddetli deri reaksiyonları görülürse DERHAL başvurunuz.",
    ro_s8_mental_h: "🧠 Ruhsal",
    ro_s8_mental_vr: "Çok Seyrek",
    ro_s8_mental1: "İntihar düşüncesi",
    ro_s8_mental2: "Olağandışı davranış",
    ro_s8_mental3: "Gerçekle bağlantı kaybı",
    ro_s8_mental_r: "Seyrek",
    ro_s8_mental4: "Depresyon ve ilgili bozukluklar",
    ro_s8_mental5: "Saldırgan davranış",
    ro_s8_skin_h: "💆 Cilt ve Saç",
    ro_s8_skin_vc: "Çok Yaygın",
    ro_s8_skin1: "Ciltte kuruluk, dudak çatlağı",
    ro_s8_skin2: "Döküntü, kaşıntı, soyulma",
    ro_s8_skin_r: "Seyrek: Geçici saç kaybı",
    ro_s8_blood_h: "🩸 Kan",
    ro_s8_blood_vc: "Çok Yaygın",
    ro_s8_blood1: "Kolay çürüme ve kanama",
    ro_s8_blood2: "Kansızlık belirtileri",
    ro_s8_blood3: "Artmış karaciğer enzimleri",
    ro_s8_eye_h: "👁️ Göz",
    ro_s8_eye_vc: "Çok Yaygın",
    ro_s8_eye1: "Konjonktivit, göz kuruluğu",
    ro_s8_eye_vr: "Çok Seyrek",
    ro_s8_eye2: "Gece görüş azalması",
    ro_s8_eye3: "Bulanık görme, katarakt",
    ro_s8_bone_h: "🦴 Kemik ve Kas",
    ro_s8_bone_vc: "Çok Yaygın: Sırt, kas, eklem ağrısı",
    ro_s8_bone_warn: "Yoğun fiziksel aktiviteyi azaltınız.",
    ro_s8_other_h: "📋 Diğer",
    ro_s8_other1: "Baş ağrısı, yüksek kolesterol",
    ro_s8_other2: "Diyabet belirtileri (çok seyrek)",
    ro_s8_other3: "Karın ağrısı, diş eti kanaması (çok seyrek)",
    ro_s9_title: "5. Saklama",
    ro_s9_l1: "Çocukların erişemeyeceği yerde",
    ro_s9_l2: "25°C altında, ışık ve nemden koruyun",
    ro_s9_l3: "Son kullanma tarihinden sonra kullanmayınız",
    ro_s9_l4: "Artan kapsülleri eczacınıza teslim ediniz",
    ro_s9_mfg_h: "Üretim Bilgileri",
    ro_s9_mfg1: "Ruhsat: Roche – Maslak, İstanbul",
    ro_s9_mfg2: "Üretim: R.P. Scherer GmbH – Eberbach, Almanya",

    /* ===== İBURAMİN COLD TR ===== */
    ib_title: "İburamin Cold Kapsül",
    ib_form: "💊 İbuprofen 200mg + Psödoefedrin 30mg + Klorfeniramin 2mg",
    ib_route: "🥤 Ağızdan Kullanım",
    ib_count: "📦 24 Kapsül",
    ib_toc1: "1. İburamin Cold Nedir?",
    ib_toc2: "Etkin ve Yardımcı Maddeler",
    ib_toc3: "2. Dikkat Edilmesi Gerekenler",
    ib_toc4: "Kullanmayınız",
    ib_toc5: "Dikkatli Kullanınız",
    ib_toc6: "Diğer İlaçlarla Kullanımı",
    ib_toc7: "Hamilelik ve Emzirme",
    ib_toc8: "3. Nasıl Kullanılır?",
    ib_toc9: "Doz Bilgisi",
    ib_toc10: "4. Yan Etkiler",
    ib_toc11: "5. Saklama",
    ib_s1_title: "1. İburamin Cold Nedir?",
    ib_s1_p1: "Üç etkin madde içeren kombine kapsül. 24 kapsül olarak sunulur.",
    ib_s1_info: "🔵 Klorfeniramin: Antihistaminik 🟠 İbuprofen: Ağrı kesici 🟢 Psödoefedrin: Burun açıcı",
    ib_s1_box: "Soğuk algınlığının hapşırık, burun akıntısı, tıkanıklık, ağrı ve ateş belirtilerinde kullanılır.",
    ib_s2_title: "Etkin ve Yardımcı Maddeler",
    ib_s2_h1: "Etkin Maddeler",
    ib_s2_l1: "İbuprofen: 200 mg",
    ib_s2_l2: "Psödoefedrin hidroklorür: 30 mg",
    ib_s2_l3: "Klorfeniramin maleat: 2 mg",
    ib_s2_h2: "Yardımcı Maddeler",
    ib_s2_l4: "Potasyum hidroksit, polisorbat 80, mısırözü yağı, jelatin, titanyum dioksit ve diğerleri",
    ib_s3_title: "2. Dikkat Edilmesi Gerekenler",
    ib_s3_h1: "❌ Kullanmayınız",
    ib_s3_warn1: "Son 14 günde MAO inhibitörü aldıysanız kullanmayınız.",
    ib_s3_l1: "İbuprofen veya psödoefedrine alerji",
    ib_s3_l2: "Aktif mide/bağırsak kanaması veya ülser",
    ib_s3_l3: "Burun polipi",
    ib_s3_l4: "Aspirin alerjisi",
    ib_s3_l5: "Bypass ameliyatı öncesi/sonrası 2 hafta",
    ib_s3_warn2: "İbuprofen kalp ve damar riskini artırabilir.",
    ib_s3_warn3: "Mide kanaması veya delinme riski vardır.",
    ib_s3_h2: "⚡ Dikkatli Kullanınız",
    ib_s3_l6: "Ülser veya kanama geçmişi",
    ib_s3_l7: "Kalp veya tansiyon sorunu",
    ib_s3_l8: "Karaciğer/böbrek rahatsızlığı",
    ib_s3_l9: "Tiroid, glokom, diyabet",
    ib_s3_l10: "Prostat büyümesi",
    ib_s3_l11: "Kanama bozukluğu",
    ib_s3_l12: "Sigara kullanımı",
    ib_s3_food_h: "🍽️ Yiyecek ve İçecek",
    ib_s3_food: "Alkol almayınız. Portakal suyu ve koladan 1 saat önce veya 2 saat sonra alınız.",
    ib_s3_preg_h: "🤰 Hamilelik ve Emzirme",
    ib_s3_preg: "Son 3 ayda bebek için zararlı olabilir. Anne sütüne geçer.",
    ib_s3_drive_h: "🚗 Araç Kullanımı",
    ib_s3_drive: "Düşünce ve reaksiyonlarınızı etkileyebilir. Dikkatli olunuz.",
    ib_s4_title: "Diğer İlaçlarla Kullanımı",
    ib_s4_l1: "Kan sulandırıcılar (warfarin)",
    ib_s4_l2: "Steroidler",
    ib_s4_l3: "Tansiyon ilaçları, beta-blokerler",
    ib_s4_l4: "ACE inhibitörleri",
    ib_s4_l5: "Antidepresanlar",
    ib_s4_l6: "Aspirin ve diğer antiinflamatuarlar",
    ib_s4_info: "Bu ilaçları kullanıyorsanız doz ayarı gerekebilir.",
    ib_s5_title: "3. Nasıl Kullanılır?",
    ib_s5_box: "En küçük etkili dozu, en kısa süre kullanınız.",
    ib_s5_l1: "Tek doz max: 800 mg ibuprofen",
    ib_s5_l2: "Günlük max: 3200 mg ibuprofen",
    ib_s5_l3: "Ateş 3 günden fazla sürerse doktora başvurun",
    ib_s5_l4: "7 gün sonra şikayetler geçmediyse doktora başvurun",
    ib_s5_how_h: "Uygulama",
    ib_s5_how1: "Sadece ağızdan kullanım",
    ib_s5_how2: "Kapsülleri bütün yutunuz",
    ib_s5_how3: "Tercihen yemekle alınız",
    ib_s5_age_h: "Yaş Grupları",
    ib_s5_age1: "12 yaş altı: Kullanılmamalıdır",
    ib_s5_age2: "60 yaş üzeri: Mide kanaması riski artar",
    ib_s5_spec: "Böbrek/karaciğer yetmezliğinde kullanmayınız.",
    ib_s5_surg: "Cerrahi operasyon öncesi doktorunuzu bilgilendiriniz.",
    ib_s5_od: "Fazla kullandıysanız doktora danışınız. Çift doz almayınız.",
    ib_s6_title: "4. Olası Yan Etkiler",
    ib_s6_p1: "Duyarlı kişilerde yan etkiler olabilir.",
    ib_s6_emerg: "ACİL: Nefes güçlüğü, boğaz şişliği, kurdeşen olursa DERHAL başvurunuz.",
    ib_s6_emerg2: "İdrarda kan, göğüs ağrısı, ağızdan kan, koyu dışkı olursa acile başvurunuz.",
    ib_s6_c: "Diğer Yan Etkiler",
    ib_s6_c1: "İshal, kabızlık, karın ağrısı",
    ib_s6_c2: "Hazımsızlık, ağız kuruluğu",
    ib_s6_c3: "Döküntü, yorgunluk, baş ağrısı",
    ib_s6_c4: "Sarılık, ödem, uzun süren kanama",
    ib_s7_title: "5. Saklama",
    ib_s7_l1: "Çocukların erişemeyeceği yerde",
    ib_s7_l2: "25°C altında, nemden uzakta",
    ib_s7_l3: "Son kullanma tarihinden sonra kullanmayınız",
    ib_s7_l4: "Bozukluk varsa kullanmayınız",
    ib_s7_mfg_h: "Üretim Bilgileri",
    ib_s7_mfg1: "Ruhsat: Berko İlaç – Ataşehir, İstanbul",
    ib_s7_mfg2: "Üretim: Berko İlaç – Sultanbeyli, İstanbul",
  },

  en: {
    /* NAV */
    nav_home: "Home",
    nav_drugs: "Medicine Box",
    nav_download: "Download App",

    /* HERO */
    hero_badge: "🌿 Paperless Health Revolution",
    hero_title_1: "Take Your Drug",
    hero_title_2: "Leaflet Digital",
    hero_desc: "Scan the QR code on your medicine box with QRpektüs and instantly access the leaflet. Multi-language support, reminders and more.",
    hero_btn_primary: "Explore Medicines",
    hero_btn_secondary: "Download App",

    /* PHONE MOCKUP */
    phone_header: "QRpektüs",
    phone_scan: "📷",
    phone_card1_title: "Ocurin 0.05% Eye Drops",
    phone_card1_text: "Used for dry eye inflammation. Apply 1 drop every 12 hours.",
    phone_card1_badge: "View Details →",
    phone_card2_title: "⏰ Reminder",
    phone_card2_text: "Ocurin – Daily 09:00 and 21:00",
    phone_card2_badge: "Active",
    pill1_text: "Parol 500mg",
    pill1_sub: "Scanned ✓",
    pill2_text: "Medicine Time!",
    pill2_sub: "Roaccutane 20mg",

    /* STATS */
    stats_drugs: "Registered Medicines",
    stats_languages: "Language Support",
    stats_free: "Free",
    stats_paper: "Paper Waste",

    /* FEATURES */
    features_title: "Why QRpektüs?",
    features_subtitle: "Smart solutions that bring your health into the digital world",
    feat1_title: "Instant Access via QR",
    feat1_desc: "Scan the barcode on the medicine box and access the leaflet in seconds.",
    feat2_title: "Multi-Language Support",
    feat2_desc: "Turkish and English language options accessible for everyone.",
    feat3_title: "Medicine Reminder",
    feat3_desc: "Never forget your medicine times. Smart notifications remind you on time.",
    feat4_title: "Reduce Paper Waste",
    feat4_desc: "Help nature by moving millions of leaflet papers to digital.",
    feat5_title: "Usage Calendar",
    feat5_desc: "Easily track your daily medications and mark the ones you've taken.",
    feat6_title: "Secure Data",
    feat6_desc: "Your data is securely stored with Firebase infrastructure.",

    /* HOW IT WORKS */
    how_title: "How Does It Work?",
    how_subtitle: "Access your medicine leaflet in 4 steps",
    step1_title: "Download the App",
    step1_desc: "Install QRpektüs on your phone.",
    step2_title: "Scan the Barcode",
    step2_desc: "Scan the barcode on the medicine box with your camera.",
    step3_title: "View the Info",
    step3_desc: "Instantly view summary information about the medicine.",
    step4_title: "Click for Details",
    step4_desc: "Access the full leaflet from our website.",

    /* DRUG PREVIEW */
    drug_preview_title: "Our Medicine Library",
    drug_preview_subtitle: "Some of our registered medicines – visit the Medicine Box page to see all.",
    drug_preview_btn: "See All Medicines →",
    drug_oc_name: "Ocurin 0.05%",
    drug_oc_desc: "Eye drops used for inflammation treatment related to dry eye.",
    drug_pa_name: "Parol 500mg",
    drug_pa_desc: "Paracetamol tablet for pain relief and fever reduction.",
    drug_ro_name: "Roaccutane 20mg",
    drug_ro_desc: "Isotretinoin capsule used for severe acne treatment.",
    drug_ib_name: "Iburamin Cold",
    drug_ib_desc: "Combined capsule for relieving common cold symptoms.",

    /* CTA */
    cta_title: "Take Your Health Digital",
    cta_desc: "Download the app now or explore our medicine library.",
    cta_btn1: "Medicine Box",
    cta_btn2: "Download App",
    cta_soon: "Coming soon to Google Play Store",
    cta_mobile_title: "📱 Try Our Mobile App",
    cta_mobile_desc: "Scan the barcode on your medicine box with QRpektüs app to instantly access the leaflet, set reminders and track your medications.",

    /* FOOTER */
    footer_desc: "We prevent paper waste by digitizing medicine leaflets and make multilingual health information easily accessible.",
    footer_links: "Quick Links",
    footer_drugs_title: "Medicines",
    footer_rights: "© 2025 QRpektüs. All rights reserved.",
    footer_disclaimer: "This site is for informational purposes only and does not replace medical advice.",

    /* LIBRARY */
    lib_title: "Medicine Box",
    lib_subtitle: "You can access the leaflets of all medicines here.",
    lib_search: "Search medicine...",
    lib_detail_btn: "View Leaflet",
    lib_oc_desc: "Cyclosporine-containing eye drop emulsion that increases tear production for dry eye inflammation.",
    lib_pa_desc: "Paracetamol tablet for relieving mild to moderate pain and reducing fever.",
    lib_ro_desc: "Isotretinoin soft gelatin capsule for the treatment of severe and resistant acne types.",
    lib_ib_desc: "Combined capsule for relieving sneezing, runny nose, nasal congestion, pain and fever caused by common cold.",
    lib_tag_eye: "Eye",
    lib_tag_rx: "Prescription",
    lib_tag_pain: "Pain Reliever",
    lib_tag_fever: "Fever Reducer",
    lib_tag_skin: "Skin",
    lib_tag_cold: "Common Cold",

    /* SHARED PROSPEKTUS */
    back_to_library: "← Back to Medicine Box",
    prospektus_barcode: "Barcode",
    prospektus_manufacturer: "Manufacturer",
    warning_title: "⚠️ Important Warning",
    warning_text: "This page is for informational purposes only. Always consult your doctor or pharmacist when using medication.",
    toc_title: "Contents",
    btn_back: "← Back to Medicine Box",
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
    oc_s1_p1: "Ocurin is an eye drop emulsion containing cyclosporine with anti-inflammatory effects that regulates the immune system of the eye surface. Presented in a 5 mL bottle with white, opaque, slightly cloudy homogeneous emulsion.",
    oc_s1_box: "Purpose: Used to increase tear production in patients whose tear production is suppressed due to dry eye-related inflammation.",
    oc_s1_p2: "No passage into blood or accumulation in blood has been detected. Applied only by instillation into the eye.",
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
    oc_s3_warn: "Do NOT use Ocurin if any of the following apply:",
    oc_s3_l1: "You are allergic to any of the ingredients",
    oc_s3_l2: "You have an eye infection caused by microorganisms",
    oc_s3_l3: "You have or had cancer in or around your eye",
    oc_s3_h2: "⚡ Use with Caution If",
    oc_s3_l4: "Use only for instillation into your eye(s)",
    oc_s3_l5: "Do not apply with contact lenses. Remove lenses before and wait 15 minutes after",
    oc_s3_l6: "Remove contact lenses before bedtime use",
    oc_s3_l7: "You have or had a herpes virus eye infection",
    oc_s3_l8: "You are using any steroid-containing medication",
    oc_s3_l9: "You are using any glaucoma medication",
    oc_s3_info: "Age Limit: Not studied in children under 16. No difference between young and elderly.",
    oc_s3_food_h: "🍽️ Use with Food and Beverages",
    oc_s3_food: "No interaction with food and beverages is expected.",
    oc_s3_preg_h: "🤰 Pregnancy and Breastfeeding",
    oc_s3_preg: "If pregnant, do not use Ocurin. Use birth control if there is a possibility of pregnancy.",
    oc_s3_lact: "May be present in breast milk in very small amounts. Consult your doctor if breastfeeding.",
    oc_s3_drive_h: "🚗 Driving and Using Machines",
    oc_s3_drive: "Blurred vision may occur after instilling. Wait until vision clears.",
    oc_s3_inter_h: "💊 Use with Other Medications",
    oc_s3_inter: "If using multiple eye drops, leave 15 minutes between them.",
    oc_s3_inter_w: "If using steroid eye drops together, consult your doctor.",
    oc_s4_title: "3. How to Use Ocurin",
    oc_s4_box: "Dose: Instill 1 drop into each eye twice daily, approximately 12 hours apart.",
    oc_s4_h1: "📋 Application Steps",
    oc_s4_pre: "Before use, invert the bottle several times for a homogeneous emulsion.",
    oc_s4_l1: "Step 1: Wash hands and open the cap",
    oc_s4_l2: "Step 2: Invert the bottle",
    oc_s4_l3: "Step 3: Apply gentle pressure for one drop",
    oc_s4_l4: "Step 4: Tilt your head back",
    oc_s4_l5: "Step 5: Pull lower eyelid to create a pocket",
    oc_s4_l6: "Step 6: Instill drop into the pocket",
    oc_s4_l7: "Step 7: Release eyelid and close eye",
    oc_s4_l8: "Step 8: Gently press between eye and nose",
    oc_s4_l9: "Step 9: Repeat for other eye if needed",
    oc_s4_l10: "Step 10: Close cap tightly",
    oc_s4_warn: "Do not touch dropper tip to eye or any surface.",
    oc_s4_info: "Can be used with artificial tears; leave 15 minutes between them.",
    oc_s4_spec_h: "Special Conditions",
    oc_s4_spec1: "After opening: Use within 28 days",
    oc_s4_spec2: "Children: Not studied under 16 years",
    oc_s4_spec3: "Elderly: No difference",
    oc_s4_spec4: "Kidney/Liver: No special notification for eye use",
    oc_s4_od_h: "Overdose or Missed Dose",
    oc_s4_od1: "Overdose: Consult a doctor",
    oc_s4_od2: "Do not take a double dose",
    oc_s4_od3: "No effects when stopping treatment",
    oc_s5_title: "4. Possible Side Effects",
    oc_s5_p1: "Side effects may occur in sensitive individuals.",
    oc_s5_emerg: "EMERGENCY: If allergic reaction (swelling, hives, breathing difficulty) occurs, seek medical help IMMEDIATELY.",
    oc_s5_vc: "Very Common (≥1/10)",
    oc_s5_vc1: "Eye burning",
    oc_s5_c: "Common (≥1/100)",
    oc_s5_c1: "Eye redness",
    oc_s5_c2: "Eye discharge",
    oc_s5_c3: "Watery eyes",
    oc_s5_c4: "Eye pain",
    oc_s5_c5: "Foreign body sensation",
    oc_s5_c6: "Eye itching",
    oc_s5_c7: "Eye stinging",
    oc_s5_c8: "Blurred vision",
    oc_s5_c9: "Eye irritation",
    oc_s5_uc: "Uncommon (≥1/1,000)",
    oc_s5_uc1: "Corneal inflammation",
    oc_s5_uc2: "Eyelid redness",
    oc_s5_uc3: "Herpes-related corneal inflammation",
    oc_s5_un: "Unknown",
    oc_s5_un1: "Superficial eye injury",
    oc_s5_un2: "Hypersensitivity reaction",
    oc_s5_report: "Report side effects at www.titck.gov.tr or call 0800 314 00 08.",
    oc_s6_title: "5. Storage Conditions",
    oc_s6_l1: "Keep out of reach of children",
    oc_s6_l2: "Store below 25°C",
    oc_s6_l3: "Sterile until opened",
    oc_s6_l4: "Use within 28 days after opening",
    oc_s6_l5: "Do not use after expiry date",
    oc_s6_l6: "Do not use if defects are noticed",
    oc_s6_env: "Do not throw unused medicines in the trash!",
    oc_s6_mfg_h: "Manufacturing Information",
    oc_s6_mfg1: "License: Bilim İlaç – Beyoğlu, Istanbul",
    oc_s6_mfg2: "Manufactured: İdol İlaç – Topkapı, Istanbul",

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
    pa_s1_p1: "Parol is a pain reliever and fever reducer containing 500 mg paracetamol per tablet.",
    pa_s1_box: "Used for symptomatic treatment of mild to moderate pain and fever.",
    pa_s1_p2: "Can be used for headache, toothache, muscle pain, cold-related fever.",
    pa_s2_title: "Active & Excipient Ingredients",
    pa_s2_h1: "Active Ingredient",
    pa_s2_p1: "Each tablet contains 500 mg paracetamol.",
    pa_s2_h2: "Excipient Ingredients",
    pa_s2_l1: "Microcrystalline cellulose",
    pa_s2_l2: "Povidone K-30",
    pa_s2_l3: "Corn starch",
    pa_s2_l4: "Stearic acid",
    pa_s3_title: "2. Before You Use Parol",
    pa_s3_h1: "❌ Do Not Use",
    pa_s3_l1: "If allergic to paracetamol",
    pa_s3_l2: "Severe liver failure",
    pa_s3_l3: "Severe kidney failure",
    pa_s3_h2: "⚡ Use with Caution",
    pa_s3_l4: "If you have anemia",
    pa_s3_l5: "If you have lung disease",
    pa_s3_l6: "Liver or kidney dysfunction",
    pa_s3_l7: "If skin rash or reaction occurs",
    pa_s3_l8: "If using another paracetamol-containing medicine",
    pa_s3_l9: "If underweight or malnourished",
    pa_s3_l10: "If you have Gilbert syndrome",
    pa_s3_l11: "If you drink alcohol",
    pa_s3_warn1: "Using with other paracetamol products may cause overdose.",
    pa_s3_warn2: "High doses can cause severe liver toxicity. Alcohol users should not exceed 2000 mg daily.",
    pa_s3_info: "Consult your doctor if no improvement within 3-5 days.",
    pa_s3_food_h: "🍽️ Food and Beverages",
    pa_s3_food: "Liver risk increases with alcohol. Food may reduce absorption.",
    pa_s3_preg_h: "🤰 Pregnancy and Breastfeeding",
    pa_s3_preg: "No significant harm reported in pregnancy; use with doctor's advice.",
    pa_s3_lact: "Passes into breast milk in small amounts. Nursing mothers can use with doctor's advice.",
    pa_s3_drive_h: "🚗 Driving",
    pa_s3_drive: "May cause dizziness or drowsiness in some patients.",
    pa_s4_title: "Use with Other Drugs",
    pa_s4_p1: "May interact with:",
    pa_s4_l1: "Drugs affecting stomach emptying",
    pa_s4_l2: "Epilepsy drugs (phenytoin, phenobarbital, carbamazepine)",
    pa_s4_l3: "Chloramphenicol, rifampicin",
    pa_s4_l4: "Warfarin and blood thinners",
    pa_s4_l5: "Zidovudine",
    pa_s4_l6: "St. John's Wort products",
    pa_s4_l7: "Cholestyramine",
    pa_s4_l8: "Other pain relievers and alcohol",
    pa_s4_info: "Inform your doctor about all medicines you use.",
    pa_s5_title: "3. How to Use Parol",
    pa_s5_h1: "📋 Dosage",
    pa_s5_box: "Adults and over 12: 1-2 tablets, may repeat every 4 hours.",
    pa_s5_l1: "Maximum daily dose: 4000 mg",
    pa_s5_l2: "Do not exceed 4 doses in 24 hours",
    pa_s5_child: "Ages 6-12: Half to 1 tablet every 4-6 hours. Max: 60 mg/kg daily",
    pa_s5_how_h: "Administration",
    pa_s5_how1: "Take orally",
    pa_s5_how2: "Swallow with a glass of water",
    pa_s5_how3: "Use the lowest effective dose",
    pa_s5_age_h: "Age Groups",
    pa_s5_age1: "Under 6: Not recommended without doctor's advice",
    pa_s5_age2: "Ages 6-11: Do not use more than 3 days without doctor",
    pa_s5_age3: "Elderly: Reduce dose for frail/immobile elderly",
    pa_s5_od_h: "Overdose",
    pa_s5_od: "In case of overdose, contact a doctor or hospital immediately.",
    pa_s5_miss_h: "Missed Dose",
    pa_s5_miss: "Do not take a double dose.",
    pa_s6_title: "4. Possible Side Effects",
    pa_s6_p1: "Generally mild side effects.",
    pa_s6_emerg: "EMERGENCY: If swelling, allergic signs, breathing difficulty, or unexpected bleeding occurs, seek help IMMEDIATELY.",
    pa_s6_c: "Common",
    pa_s6_c1: "Drowsiness, headache, dizziness",
    pa_s6_c2: "Nausea, vomiting, abdominal pain",
    pa_s6_c3: "Constipation, indigestion, gas",
    pa_s6_uc: "Uncommon",
    pa_s6_uc1: "Kidney damage (long-term use)",
    pa_s6_uc2: "Gastrointestinal bleeding",
    pa_s6_r: "Rare",
    pa_s6_r1: "Blood cell disorders",
    pa_s6_r2: "Severe allergic reaction (anaphylaxis)",
    pa_s6_r3: "Skin rash, Stevens-Johnson syndrome",
    pa_s6_vr: "Very Rare",
    pa_s6_vr1: "Thrombocytopenia",
    pa_s6_vr2: "Liver dysfunction",
    pa_s6_report: "Report side effects at www.titck.gov.tr or call 0800 314 00 08.",
    pa_s7_title: "5. Storage Conditions",
    pa_s7_l1: "Keep out of reach of children",
    pa_s7_l2: "Store below 25°C in original packaging",
    pa_s7_l3: "Do not use after expiry date",
    pa_s7_l4: "Dispose of unused medicines properly",
    pa_s7_mfg_h: "Manufacturing Information",
    pa_s7_mfg1: "License: Atabay Kimya – Kadıköy, Istanbul",
    pa_s7_mfg2: "Manufactured: Atabay İlaç – Kadıköy, Istanbul",

    /* ===== ROACCUTANE EN ===== */
    ro_title: "Roaccutane 20 mg Soft Gelatin Capsule",
    ro_form: "💊 Isotretinoin 20 mg",
    ro_route: "🥤 Oral Use",
    ro_count: "📦 30 Capsules",
    ro_preg_warn: "🚨 Must NEVER be used during pregnancy. Effective birth control must be used during and 1 month after treatment.",
    ro_toc1: "1. What is Roaccutane?",
    ro_toc2: "Active & Excipient Ingredients",
    ro_toc3: "2. Before You Use",
    ro_toc4: "Do Not Use",
    ro_toc5: "For Female Patients",
    ro_toc6: "For Male Patients",
    ro_toc7: "For All Patients",
    ro_toc8: "3. How to Use",
    ro_toc9: "Dosage",
    ro_toc10: "4. Side Effects",
    ro_toc11: "5. Storage",
    ro_s1_title: "1. What is Roaccutane?",
    ro_s1_p1: "Roaccutane contains isotretinoin, a medicine from the retinoid group related to vitamin A.",
    ro_s1_p2: "Contains 30 brown-red and white soft gelatin capsules marked \"ROA 20\".",
    ro_s1_box: "Used for treatment of severe acne types (nodular, conglobate, or scarring risk).",
    ro_s1_info: "Used only when other treatments have failed, under dermatologist supervision.",
    ro_s2_title: "Active & Excipient Ingredients",
    ro_s2_h1: "Active Ingredient",
    ro_s2_p1: "Each capsule contains 20 mg isotretinoin",
    ro_s2_h2: "Excipient Ingredients",
    ro_s2_l1: "Titanium dioxide",
    ro_s2_l2: "Red iron oxide",
    ro_s2_l3: "Soya oil",
    ro_s2_l4: "Yellow beeswax",
    ro_s2_l5: "Soybean oil",
    ro_s2_l6: "Vegetable oils",
    ro_s2_l7: "Gelatin",
    ro_s2_l8: "Glycerol",
    ro_s2_warn: "Do not use if allergic to soya oil.",
    ro_s3_title: "2. Before You Use",
    ro_s3_h1: "❌ Do Not Use",
    ro_s3_l1: "Allergy to soya or excipients",
    ro_s3_l2: "Pregnancy or suspected pregnancy",
    ro_s3_l3: "Breastfeeding",
    ro_s3_l4: "Liver disease",
    ro_s3_l5: "Very high blood fat levels",
    ro_s3_l6: "High vitamin A levels",
    ro_s3_l7: "Under 12 years old",
    ro_s3_l8: "On tetracycline treatment",
    ro_s4_title: "For Female Patients",
    ro_s4_warn: "🚨 CRITICAL: Roaccutane can seriously harm an unborn baby (teratogenic).",
    ro_s4_l1: "Never use during pregnancy",
    ro_s4_l2: "Never use while breastfeeding",
    ro_s4_l3: "Use two effective birth control methods",
    ro_s4_l4: "Start 1 month before, continue 1 month after treatment",
    ro_s4_l5: "Negative pregnancy test required before treatment",
    ro_s4_l6: "Monthly pregnancy tests required",
    ro_s4_l7: "Final test 5 weeks after treatment ends",
    ro_s4_stop: "If pregnant during or within 1 month after treatment, STOP IMMEDIATELY.",
    ro_s5_title: "For Male Patients",
    ro_s5_p1: "Not expected to harm sperm. Very low levels of isotretinoin found in semen.",
    ro_s5_info: "Do not share your medicine, especially with women.",
    ro_s6_title: "For All Patients",
    ro_s6_l1: "Report any mental health history to your doctor",
    ro_s6_l2: "Blood fats may increase; regular testing needed",
    ro_s6_l3: "Liver enzymes may increase",
    ro_s6_l4: "Blood sugar may increase",
    ro_s6_l5: "Use moisturizing cream and lip balm",
    ro_s6_l6: "Use at least SPF 15 sunscreen",
    ro_s6_l7: "No waxing, dermabrasion or laser for 6 months",
    ro_s6_l8: "Reduce intense exercise",
    ro_s6_l9: "Do not take vitamin A supplements",
    ro_s6_l10: "Do not donate blood for 1 month",
    ro_s6_drive_h: "🚗 Driving",
    ro_s6_drive: "Night vision may decrease. Do not drive if feeling fatigued.",
    ro_s6_inter_h: "💊 Drug Interactions",
    ro_s6_inter: "Do not take vitamin A supplements or tetracyclines.",
    ro_s7_title: "3. How to Use",
    ro_s7_box: "Starting dose: 0.5 mg/kg/day. E.g., 70 kg → 35 mg daily.",
    ro_s7_l1: "Take 1-2 times daily with food",
    ro_s7_l2: "Swallow whole with drink or food",
    ro_s7_l3: "Dose range: 0.5–1.0 mg/kg/day",
    ro_s7_l4: "Treatment duration: 16–24 weeks",
    ro_s7_l5: "Usually 1 treatment cycle is sufficient",
    ro_s7_info: "Acne may worsen initially but improves over time.",
    ro_s7_spec_h: "Special Conditions",
    ro_s7_spec1: "Under 12: Do not use",
    ro_s7_spec2: "Kidney problems: Start with low dose",
    ro_s7_spec3: "Liver failure: Do not use",
    ro_s7_od: "If overdose, consult doctor. Do not take double dose.",
    ro_s8_title: "4. Possible Side Effects",
    ro_s8_p1: "Some side effects can be serious and may require hospitalization.",
    ro_s8_emerg: "EMERGENCY: If suicidal thoughts, severe allergic reaction, or severe skin reactions occur, seek help IMMEDIATELY.",
    ro_s8_mental_h: "🧠 Mental",
    ro_s8_mental_vr: "Very Rare",
    ro_s8_mental1: "Suicidal thoughts",
    ro_s8_mental2: "Unusual behavior",
    ro_s8_mental3: "Loss of contact with reality",
    ro_s8_mental_r: "Rare",
    ro_s8_mental4: "Depression and related disorders",
    ro_s8_mental5: "Aggressive behavior",
    ro_s8_skin_h: "💆 Skin and Hair",
    ro_s8_skin_vc: "Very Common",
    ro_s8_skin1: "Dry skin, cracked lips",
    ro_s8_skin2: "Rash, itching, peeling",
    ro_s8_skin_r: "Rare: Temporary hair loss",
    ro_s8_blood_h: "🩸 Blood",
    ro_s8_blood_vc: "Very Common",
    ro_s8_blood1: "Easy bruising and bleeding",
    ro_s8_blood2: "Anemia symptoms",
    ro_s8_blood3: "Increased liver enzymes",
    ro_s8_eye_h: "👁️ Eyes",
    ro_s8_eye_vc: "Very Common",
    ro_s8_eye1: "Conjunctivitis, dry eyes",
    ro_s8_eye_vr: "Very Rare",
    ro_s8_eye2: "Decreased night vision",
    ro_s8_eye3: "Blurred vision, cataracts",
    ro_s8_bone_h: "🦴 Bones and Muscles",
    ro_s8_bone_vc: "Very Common: Back, muscle, joint pain",
    ro_s8_bone_warn: "Reduce intense physical activity.",
    ro_s8_other_h: "📋 Other",
    ro_s8_other1: "Headache, high cholesterol",
    ro_s8_other2: "Diabetes symptoms (very rare)",
    ro_s8_other3: "Abdominal pain, gum bleeding (very rare)",
    ro_s9_title: "5. Storage",
    ro_s9_l1: "Keep out of reach of children",
    ro_s9_l2: "Store below 25°C, protect from light and moisture",
    ro_s9_l3: "Do not use after expiry date",
    ro_s9_l4: "Return remaining capsules to your pharmacist",
    ro_s9_mfg_h: "Manufacturing Information",
    ro_s9_mfg1: "License: Roche – Maslak, Istanbul",
    ro_s9_mfg2: "Manufactured: R.P. Scherer GmbH – Eberbach, Germany",

    /* ===== İBURAMİN COLD EN ===== */
    ib_title: "Iburamin Cold Capsule",
    ib_form: "💊 Ibuprofen 200mg + Pseudoephedrine 30mg + Chlorpheniramine 2mg",
    ib_route: "🥤 Oral Use",
    ib_count: "📦 24 Capsules",
    ib_toc1: "1. What is Iburamin Cold?",
    ib_toc2: "Active & Excipient Ingredients",
    ib_toc3: "2. Before You Use",
    ib_toc4: "Do Not Use",
    ib_toc5: "Use with Caution",
    ib_toc6: "Use with Other Drugs",
    ib_toc7: "Pregnancy & Breastfeeding",
    ib_toc8: "3. How to Use",
    ib_toc9: "Dosage",
    ib_toc10: "4. Side Effects",
    ib_toc11: "5. Storage",
    ib_s1_title: "1. What is Iburamin Cold?",
    ib_s1_p1: "A combined capsule with three active ingredients. Available as 24 capsules.",
    ib_s1_info: "🔵 Chlorpheniramine: Antihistamine 🟠 Ibuprofen: Pain reliever 🟢 Pseudoephedrine: Decongestant",
    ib_s1_box: "Used for sneezing, runny nose, congestion, pain, and fever caused by common cold.",
    ib_s2_title: "Active & Excipient Ingredients",
    ib_s2_h1: "Active Ingredients",
    ib_s2_l1: "Ibuprofen: 200 mg",
    ib_s2_l2: "Pseudoephedrine HCl: 30 mg",
    ib_s2_l3: "Chlorpheniramine maleate: 2 mg",
    ib_s2_h2: "Excipient Ingredients",
    ib_s2_l4: "Potassium hydroxide, polysorbate 80, corn oil, gelatin, titanium dioxide and others",
    ib_s3_title: "2. Before You Use",
    ib_s3_h1: "❌ Do Not Use",
    ib_s3_warn1: "Do not use if you took MAO inhibitors in the last 14 days.",
    ib_s3_l1: "Allergy to ibuprofen or pseudoephedrine",
    ib_s3_l2: "Active stomach/intestinal bleeding or ulcer",
    ib_s3_l3: "Nasal polyps",
    ib_s3_l4: "Aspirin allergy",
    ib_s3_l5: "Within 2 weeks of bypass surgery",
    ib_s3_warn2: "Ibuprofen may increase cardiovascular risk.",
    ib_s3_warn3: "Risk of stomach bleeding or perforation.",
    ib_s3_h2: "⚡ Use with Caution",
    ib_s3_l6: "History of ulcer or bleeding",
    ib_s3_l7: "Heart disease or high blood pressure",
    ib_s3_l8: "Liver/kidney disease",
    ib_s3_l9: "Thyroid, glaucoma, diabetes",
    ib_s3_l10: "Prostate enlargement",
    ib_s3_l11: "Bleeding disorder",
    ib_s3_l12: "Smoking",
    ib_s3_food_h: "🍽️ Food and Beverages",
    ib_s3_food: "Do not drink alcohol. Take 1 hour before or 2 hours after orange juice and cola.",
    ib_s3_preg_h: "🤰 Pregnancy and Breastfeeding",
    ib_s3_preg: "May be harmful in the last 3 months of pregnancy. Passes into breast milk.",
    ib_s3_drive_h: "🚗 Driving",
    ib_s3_drive: "May affect your thinking and reactions. Be careful.",
    ib_s4_title: "Use with Other Drugs",
    ib_s4_l1: "Blood thinners (warfarin)",
    ib_s4_l2: "Steroids",
    ib_s4_l3: "Blood pressure medicines, beta-blockers",
    ib_s4_l4: "ACE inhibitors",
    ib_s4_l5: "Antidepressants",
    ib_s4_l6: "Aspirin and other anti-inflammatories",
    ib_s4_info: "Dose adjustment may be needed if using these medicines.",
    ib_s5_title: "3. How to Use",
    ib_s5_box: "Use the smallest effective dose for the shortest time.",
    ib_s5_l1: "Single dose max: 800 mg ibuprofen",
    ib_s5_l2: "Daily max: 3200 mg ibuprofen",
    ib_s5_l3: "See a doctor if fever lasts more than 3 days",
    ib_s5_l4: "See a doctor if symptoms persist after 7 days",
    ib_s5_how_h: "Administration",
    ib_s5_how1: "Oral use only",
    ib_s5_how2: "Swallow capsules whole",
    ib_s5_how3: "Preferably take with food",
    ib_s5_age_h: "Age Groups",
    ib_s5_age1: "Under 12: Should not be used",
    ib_s5_age2: "Over 60: Increased risk of stomach bleeding",
    ib_s5_spec: "Do not use in kidney/liver failure.",
    ib_s5_surg: "Inform your doctor before any surgery.",
    ib_s5_od: "If overdose, consult a doctor. Do not take double dose.",
    ib_s6_title: "4. Possible Side Effects",
    ib_s6_p1: "Side effects may occur in sensitive individuals.",
    ib_s6_emerg: "EMERGENCY: If breathing difficulty, throat swelling, or hives occur, seek help IMMEDIATELY.",
    ib_s6_emerg2: "If blood in urine, chest pain, blood from mouth, or dark stool occurs, go to emergency.",
    ib_s6_c: "Other Side Effects",
    ib_s6_c1: "Diarrhea, constipation, abdominal pain",
    ib_s6_c2: "Indigestion, dry mouth",
    ib_s6_c3: "Rash, fatigue, headache",
    ib_s6_c4: "Jaundice, edema, prolonged bleeding",
    ib_s7_title: "5. Storage",
    ib_s7_l1: "Keep out of reach of children",
    ib_s7_l2: "Store below 25°C, away from moisture",
    ib_s7_l3: "Do not use after expiry date",
    ib_s7_l4: "Do not use if defects are noticed",
    ib_s7_mfg_h: "Manufacturing Information",
    ib_s7_mfg1: "License: Berko İlaç – Ataşehir, Istanbul",
    ib_s7_mfg2: "Manufactured: Berko İlaç – Sultanbeyli, Istanbul",
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

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (translations[lang][key]) {
        el.innerHTML = translations[lang][key];
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

  updateLangBtn(lang) {
    const flags = { tr: '🇹🇷', en: '🇬🇧' };
    const names = { tr: 'TR', en: 'EN' };
    const btn = document.querySelector('.lang-current');
    if (btn) {
      btn.innerHTML = `<span class="flag">${flags[lang]}</span> ${names[lang]} <span>▾</span>`;
    }
  },

  bindEvents() {
    document.querySelectorAll('[data-lang]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        this.setLang(el.getAttribute('data-lang'));
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
    if (navbar) {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    }
    const btt = document.querySelector('.back-to-top');
    if (btt) {
      btt.classList.toggle('visible', window.scrollY > 400);
    }
  },

  handleMobileMenu() {
    const toggle = document.querySelector('.nav-toggle');
    const links = document.querySelector('.nav-links');
    if (!toggle || !links) return;

    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
      const s = toggle.querySelectorAll('span');
      const open = links.classList.contains('open');
      s[0].style.transform = open ? 'rotate(45deg) translate(5px, 6px)' : '';
      s[1].style.opacity = open ? '0' : '1';
      s[2].style.transform = open ? 'rotate(-45deg) translate(5px, -6px)' : '';
    });

    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        links.classList.remove('open');
        toggle.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
      });
    });
  },

  setActiveLink() {
    const current = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(a => {
      const href = a.getAttribute('href');
      if (href === current || (current === '' && href === 'index.html')) a.classList.add('active');
    });
  }
};

/* ---------- Scroll Animations ---------- */
const ScrollAnimations = {
  init() {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('animate-in'); }),
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    document.querySelectorAll('.feature-card, .step-card, .drug-card, .prospektus-section, .stat-item')
      .forEach(el => { el.classList.add('animate-ready'); observer.observe(el); });
  }
};

/* ---------- Counter Animation ---------- */
const CounterAnimation = {
  init() {
    const counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { this.animate(entry.target); observer.unobserve(entry.target); }
      });
    }, { threshold: 0.5 });
    counters.forEach(c => observer.observe(c));
  },
  animate(el) {
    const target = parseInt(el.getAttribute('data-count'));
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 1800;
    const start = performance.now();
    const update = (time) => {
      const p = Math.min((time - start) / duration, 1);
      el.textContent = Math.floor((1 - Math.pow(1 - p, 3)) * target).toLocaleString() + suffix;
      if (p < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  }
};

/* ---------- Drug Search ---------- */
const DrugSearch = {
  init() {
    const input = document.querySelector('#drug-search');
    if (!input) return;
    input.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      document.querySelectorAll('.drug-card').forEach(card => {
        const n = card.querySelector('h3')?.textContent.toLowerCase() || '';
        const d = card.querySelector('.drug-short-desc')?.textContent.toLowerCase() || '';
        card.style.display = (n.includes(q) || d.includes(q)) ? 'block' : 'none';
      });
    });
  }
};

/* ---------- TOC Highlight ---------- */
const TOCHighlight = {
  init() {
    const sections = document.querySelectorAll('.prospektus-section[id]');
    const links = document.querySelectorAll('.toc a');
    if (!sections.length || !links.length) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          links.forEach(l => l.classList.remove('active'));
          document.querySelector(`.toc a[href="#${entry.target.id}"]`)?.classList.add('active');
        }
      });
    }, { rootMargin: '-20% 0px -70% 0px' });
    sections.forEach(s => observer.observe(s));
  }
};

/* ---------- Back to Top ---------- */
const BackToTop = {
  init() {
    const btn = document.querySelector('.back-to-top');
    if (btn) btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }
};

/* ---------- Animation CSS ---------- */
const style = document.createElement('style');
style.textContent = `
  .animate-ready { opacity:0; transform:translateY(24px); transition:opacity 0.6s ease, transform 0.6s ease; }
  .animate-in { opacity:1!important; transform:translateY(0)!important; }
  .feature-card.animate-ready:nth-child(2){transition-delay:.1s}
  .feature-card.animate-ready:nth-child(3){transition-delay:.2s}
  .feature-card.animate-ready:nth-child(4){transition-delay:.1s}
  .feature-card.animate-ready:nth-child(5){transition-delay:.2s}
  .feature-card.animate-ready:nth-child(6){transition-delay:.3s}
  .step-card.animate-ready:nth-child(2){transition-delay:.1s}
  .step-card.animate-ready:nth-child(3){transition-delay:.2s}
  .step-card.animate-ready:nth-child(4){transition-delay:.3s}
`;
document.head.appendChild(style);

/* ---------- Init ---------- */
document.addEventListener('DOMContentLoaded', () => {
  LangManager.init();
  Navbar.init();
  ScrollAnimations.init();
  CounterAnimation.init();
  DrugSearch.init();
  TOCHighlight.init();
  BackToTop.init();
});   
