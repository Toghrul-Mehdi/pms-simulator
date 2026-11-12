// Metodik materiallar — MHBS (Maliyyə hesabatlarının beynəlxalq standartları) üzrə PMS I mərhələ.
// Hər bölmə: əsas anlayışlar, formullar, imtahanda tez-tez düşən tələlər.
PMS.materials = {
  research: {
    title: 'Sertifikat növü imtahana necə təsir edir?',
    points: [
      'PMS imtahanı iki mərhələdən ibarətdir: I mərhələ — mühasibat uçotu standartları, II mərhələ — qanunvericilik (vergi, mülki, əmək qanunvericiliyi, "Mühasibat uçotu haqqında" Qanun və s.).',
      'Qeydiyyatda seçdiyiniz sertifikat növü I mərhələdə HANSI STANDARTLAR DƏSTİNDƏN sual veriləcəyini müəyyən edir. Yəni növ sualların məzmununa birbaşa təsir edir.',
      '“Maliyyə hesabatları” (MHBS) növü → tam MHBS/IFRS (IAS və IFRS standartları, Konseptual əsaslar). Bu, ən geniş və ən çətin dəstdir.',
      '“Kiçik və orta sahibkarlıq (KOS)” növü → KOS üçün MHBS (IFRS for SMEs) və ya milli KOS standartları — sadələşdirilmiş tələblər (məs. borc xərcləri kapitallaşdırılmır, qudvil 10 ilədək amortizasiya olunur).',
      '“İctimai sektor” növü → İctimai sektor üçün Mühasibat Uçotunun Beynəlxalq Standartları (IPSAS / İSMUBS) — büdcə təşkilatları üçün.',
      'Kommersiya təşkilatları üçün milli standartlar (MUMS) üzrə növ varsa, suallar milli standartlardan gəlir. FDSE kimi digər seçimlər də ayrıca standart dəstinə uyğundur — rəsmi proqramı DİM saytından yoxlayın.',
      'Sizin seçiminiz (Maliyyə hesabatları) üçün bu sayt yalnız tam MHBS mövzularına fokuslanır. KOS və ya İctimai sektor üzrə materialla oxumayın — orada qaydalar fərqlidir və səhv cavaba apara bilər.',
      'II mərhələ də növdən asılı ola bilər (məs. ictimai sektor üçün büdcə qanunvericiliyi). Lakin 10 gün ərzində prioritet — I mərhələ.',
      'I mərhələdən uğurla keçmənin nəticəsi II mərhələdən keçənə qədər qüvvədə qalır; mərhələlərin ardıcıllıq tələbi yoxdur.',
    ],
    format: [
      'Son illərin elektron imtahanında I mərhələ: 40 tapşırıq — 30 qapalı (4–5 variantdan biri) + 10 açıq (rəqəmi özün yazırsan).',
      'Müddət: 3 saat (180 dəq) — mənbələrdə göstərilir.',
      'Maksimum bal: 100. Keçid: 50 bal (son elanlara görə; köhnə illərdə I səviyyə üçün 35 bal tətbiq olunub).',
      'Bal bölgüsü rəsmi olaraq tapılmadı — simulyatorda qapalı = 2 bal, açıq = 4 bal (30×2 + 10×4 = 100) qəbul edilib. Açıq suallar daha çox bal verir — onlara vaxt ayırın.',
      'Açıq suallarda çox vaxt hesablama (amortizasiya, lizinq, MDV, ehtiyat, təxirə salınmış vergi, EPS) olur — kalkulyatordan rahat istifadə etməyi məşq edin.',
    ],
    sources: [
      'https://dim.gov.az/az/fealiyyet/qebul-ve-imtahanlar/pesekar-muhasib-sertifikati',
      'https://www.muhasib.az/Muhasibat/teshkili/senedler/PMS_proqram.pdf',
      'https://www.muhasibat.az/pms-imtahani-merhele-1/',
      'https://iatm.az/xeberler/pms-pesekar-muhasib-sertifikati-imtahani-cox-sorusulan-suallar-',
    ],
  },
  plan: [
    { day: '1', task: 'Konseptual əsaslar, IAS 1, IAS 8, IAS 10. Bu saytda "Mövzu üzrə məşq" bölməsində uyğun mövzular.' },
    { day: '2', task: 'IAS 2 Ehtiyatlar, IAS 16 Əsas vəsaitlər (amortizasiya üsulları, yenidən qiymətləndirmə).' },
    { day: '3', task: 'IAS 36 Dəyərsizləşmə, IAS 38 Qeyri-maddi aktivlər, IAS 40 İnvestisiya mülkiyyəti, IAS 23.' },
    { day: '4', task: 'IFRS 16 İcarə (lizinq öhdəliyi, istifadə hüququ aktivi), IAS 20 Dövlət qrantları. Mini sınaq.' },
    { day: '5', task: 'IFRS 15 Gəlir (5 addım), IAS 37 Ehtiyatlar və şərti öhdəliklər.' },
    { day: '6', task: 'IAS 12 Mənfəət vergisi (təxirə salınmış vergi), IAS 21 Xarici valyuta. Tam sınaq #1.' },
    { day: '7', task: 'IFRS 9 / IAS 32 Maliyyə alətləri (amortizasiya edilmiş maya dəyəri, effektiv faiz).' },
    { day: '8', task: 'IFRS 10, IFRS 3 (qudvil), IAS 28 Asılı müəssisələr, IAS 7 Pul vəsaitlərinin hərəkəti. Tam sınaq #2.' },
    { day: '9', task: 'IAS 33 EPS, IAS 19, IFRS 13, IFRS 5, IAS 24. Səhv etdiyiniz mövzuların təkrarı. Tam sınaq #3.' },
    { day: '10', task: 'Yüngül təkrar: formullar cədvəli, tələlər siyahısı. Yaxşı yuxu.' },
  ],
  sections: [
    {
      id: 'framework', title: 'Konseptual əsaslar və IAS 1',
      body: [
        'Faydalı maliyyə məlumatının əsas keyfiyyət xüsusiyyətləri: <b>uyğunluq (relevance)</b> və <b>düzgün təqdimat (faithful representation)</b>. Gücləndirici: müqayisəlilik, yoxlanıla bilmə, vaxtlılıq, başadüşülənlik.',
        'Aktiv — keçmiş hadisələr nəticəsində müəssisənin nəzarət etdiyi cari iqtisadi resurs (iqtisadi fayda gətirmək potensialı olan hüquq). Öhdəlik — keçmiş hadisələr nəticəsində iqtisadi resursu ötürmək üzrə cari vəzifə.',
        'Fəaliyyətin fasiləsizliyi (going concern) — əsas fərziyyə. Hesablama (accrual) prinsipi.',
        'IAS 1: tam dəst — maliyyə vəziyyəti haqqında hesabat, mənfəət/zərər və digər məcmu gəlir (OCI), kapitalda dəyişikliklər, pul vəsaitlərinin hərəkəti, qeydlər, müqayisəli məlumat (+ uçot siyasəti dəyişəndə ən erkən dövrün əvvəlinə hesabat).',
        'Qısamüddətli (cari) — 12 ay ərzində və ya normal əməliyyat dövrü ərzində realizə/ödəniləcək. Öhdəliyi uzatmaq hüququ hesabat tarixində varsa — uzunmüddətli.',
        'OCI-də: yenidən qiymətləndirmə artımı (IAS 16/38), müəyyən edilmiş təqaüd planlarının yenidən ölçülməsi, FVOCI kapital alətləri (sonradan P/L-ə reklassifikasiya OLUNMUR); xarici əməliyyatların tərcüməsi fərqləri, FVOCI borc alətləri, pul axını hecinqi (reklassifikasiya OLUNUR).',
        'Əvəzləşdirmə (offsetting) yalnız standart tələb və ya icazə verdikdə.',
      ],
    },
    {
      id: 'ias8', title: 'IAS 8 və IAS 10',
      body: [
        'Uçot siyasəti dəyişikliyi və əhəmiyyətli səhvin düzəldilməsi — <b>retrospektiv</b> (müqayisəli məlumat yenidən təqdim edilir, açılış bölüşdürülməmiş mənfəət düzəldilir).',
        'Uçot qiymətləndirməsinin dəyişməsi (faydalı istifadə müddəti, ləğv dəyəri, amortizasiya üsulu, şübhəli borclar) — <b>perspektiv</b>.',
        'IAS 10: <b>Düzəliş tələb edən</b> hadisələr — hesabat tarixində mövcud olan şərtlərə dair sübut (məhkəmə qərarı ilə öhdəliyin təsdiqi, debitorun iflası, ehtiyatların NRV-dən aşağı satışı, fırıldaqçılığın aşkarlanması).',
        '<b>Düzəliş tələb etməyən</b> — sonra yaranan şərtlər (hesabat tarixindən sonra yanğın, investisiyaların bazar dəyərinin düşməsi, böyük alış, dividend elanı). Dividendlər hesabat tarixindən sonra elan olunubsa — öhdəlik kimi tanınmır, açıqlanır.',
      ],
    },
    {
      id: 'ias2', title: 'IAS 2 Ehtiyatlar',
      body: [
        'Ölçmə: <b>maya dəyəri və xalis satış dəyərinin (NRV) aşağı olanı</b>. NRV = təxmini satış qiyməti − tamamlama xərcləri − satış xərcləri.',
        'Maya dəyərinə daxildir: alış qiyməti, idxal rüsumları, qaytarılmayan vergilər, nəqliyyat, emal xərcləri, normal gücə əsasən bölüşdürülmüş sabit istehsal qaimə xərcləri.',
        'Daxil DEYİL: anormal itkilər, saxlama (istehsal prosesi üçün zəruri olan istisna), inzibati, satış xərcləri. Qaytarılan ƏDV maya dəyərinə daxil edilmir.',
        'Üsullar: FIFO və orta çəkili. <b>LIFO qadağandır</b>.',
        'Sabit qaimə xərcləri normal güc əsasında bölüşdürülür; aşağı istehsalda bölüşdürülməmiş hissə xərcə silinir.',
      ],
    },
    {
      id: 'ias16', title: 'IAS 16 Əsas vəsaitlər',
      body: [
        'İlkin dəyər: alış qiyməti (endirimlər çıxılmaqla) + birbaşa aid xərclər (çatdırılma, quraşdırma, test, peşəkar haqlar) + sökmə/bərpa xərclərinin diskontlaşdırılmış dəyəri.',
        'Daxil deyil: təlim, reklam, yeni yerə köçürmə, inzibati ümumi xərclər, ilkin əməliyyat zərərləri.',
        'Sonrakı ölçmə: maya dəyəri modeli və ya yenidən qiymətləndirmə modeli (bütün sinif üçün).',
        'Yenidən qiymətləndirmə artımı → OCI (yenidən qiymətləndirmə ehtiyatı); azalma əvvəlcə həmin aktiv üzrə ehtiyatdan, qalan P/L-ə.',
        'Amortizasiya: düz xətt = (dəyər − ləğv dəyəri) / müddət; azalan qalıq; istehsal vahidi. Torpaq amortizasiya olunmur.',
        'Formula (azalan qalıq): illik amortizasiya = balans dəyəri × dərəcə.',
        'Silinmə: mənfəət/zərər = satış gəliri − balans dəyəri (P/L-də, gəlir kimi deyil).',
      ],
    },
    {
      id: 'ias36', title: 'IAS 36 Aktivlərin dəyərsizləşməsi',
      body: [
        'Bərpa olunan məbləğ = <b>max(ədalətli dəyər − satış xərcləri; istifadə dəyəri)</b>.',
        'Balans dəyəri > bərpa olunan məbləğ → dəyərsizləşmə zərəri.',
        'Qudvil və müddəti qeyri-müəyyən qeyri-maddi aktivlər — ildə bir dəfə mütləq test.',
        'PYV (CGU) üzrə zərər: əvvəl qudvilə, sonra digər aktivlərə balans dəyəri nisbətində.',
        'Qudvil üzrə dəyərsizləşmə <b>bərpa edilmir</b>.',
      ],
    },
    {
      id: 'ias38', title: 'IAS 38, IAS 40, IAS 23, IAS 20',
      body: [
        'IAS 38: Tədqiqat xərcləri — həmişə xərc. İnkişaf xərcləri — 6 meyar (texniki mümkünlük, niyyət, imkan, fayda, resurslar, etibarlı ölçmə) ödəndikdən sonra kapitallaşdırılır. Daxili yaradılmış brendlər, müştəri siyahıları, qudvil — tanınmır.',
        'IAS 40: İnvestisiya mülkiyyəti — icarə gəliri və ya dəyər artımı üçün saxlanılır. Ədalətli dəyər modelində dəyişikliklər P/L-ə, amortizasiya yoxdur.',
        'IAS 23: Uyğun aktivə birbaşa aid borc xərcləri kapitallaşdırılır; müvəqqəti investisiya gəliri çıxılır. Başlama: xərclər + borc xərcləri + fəaliyyət başladıqda. Fəal işlər uzun müddət dayandıqda — dayandırılır.',
        'IAS 20: Qrantlar əsaslı əminlik olduqda tanınır; aktivlərlə bağlı qrant — gələcək dövrlərin gəliri və ya aktivin dəyərindən çıxılmaqla; sistemli şəkildə P/L-ə.',
      ],
    },
    {
      id: 'ifrs16', title: 'IFRS 16 İcarə',
      body: [
        'İcarəçi: başlanğıc tarixində <b>istifadə hüququ aktivi (ROU)</b> və <b>icarə öhdəliyi</b>.',
        'İcarə öhdəliyi = gələcək ödənişlərin diskontlaşdırılmış dəyəri (daxili faiz dərəcəsi, bilinmirsə əlavə borclanma dərəcəsi).',
        'ROU = öhdəlik + başlanğıcdan əvvəl ödənişlər + ilkin birbaşa xərclər + sökmə xərcləri − alınmış stimullar.',
        'Ödəniş ilin əvvəlində (annuity due) olduqda — ilk ödəniş dərhal öhdəliyi azaldır, faiz qalığa hesablanır.',
        'İstisnalar: qısamüddətli (≤12 ay) və aşağı dəyərli aktivlər — düz xətt xərc.',
        'İcarəyə verən: maliyyə icarəsi (risk və faydaların əhəmiyyətli hissəsi ötürülür) və əməliyyat icarəsi.',
      ],
    },
    {
      id: 'ifrs15', title: 'IFRS 15 Müştərilərlə müqavilələr üzrə gəlir',
      body: [
        '5 addım: 1) müqaviləni müəyyən et; 2) icra öhdəliklərini müəyyən et; 3) əməliyyat qiymətini müəyyən et; 4) qiyməti öhdəliklərə <b>müstəqil satış qiymətləri nisbətində</b> bölüşdür; 5) öhdəlik icra olunduqca gəliri tanı.',
        'Zamanla tanınma: müştəri eyni anda faydalanır, müştərinin nəzarət etdiyi aktivi yaradır və ya alternativ istifadəsi yoxdur + ödəniş hüququ var.',
        'Dəyişən ödəniş — gələcəkdə əhəmiyyətli geri qaytarılma ehtimalı yüksək olmayan qədər daxil edilir (məhdudlaşdırma).',
        'Agent vs prinsipial: agent yalnız komissiyanı gəlir kimi tanıyır.',
        'Zəmanət: standart zəmanət — IAS 37 ehtiyatı; əlavə xidmət zəmanəti — ayrıca icra öhdəliyi.',
      ],
    },
    {
      id: 'ias37', title: 'IAS 37 Ehtiyatlar, şərti öhdəliklər',
      body: [
        'Ehtiyat tanınır: cari öhdəlik (hüquqi və ya konstruktiv) + resurs axınının ehtimalı yüksək (>50%) + etibarlı qiymətləndirmə.',
        'Şərti öhdəlik — tanınmır, açıqlanır (ehtimal uzaq deyilsə). Şərti aktiv — tanınmır; daxilolma ehtimalı yüksəkdirsə açıqlanır; demək olar ki, dəqiqdirsə — aktiv.',
        'Ölçmə: ən yaxşı qiymətləndirmə; böyük populyasiya — gözlənilən dəyər; tək öhdəlik — ən ehtimal olunan nəticə.',
        'Gələcək əməliyyat zərərləri üçün ehtiyat yaradılmır. Restrukturizasiya — yalnız rəsmi plan + elan edildikdə.',
        'Zərərli (onerous) müqavilə — ehtiyat = min(icra xərcləri, çıxma cəriməsi) − gözlənilən fayda.',
      ],
    },
    {
      id: 'ias12', title: 'IAS 12 Mənfəət vergisi',
      body: [
        'Müvəqqəti fərq = balans dəyəri − vergi bazası.',
        'Aktiv: balans dəyəri > vergi bazası → <b>vergi tutulan fərq → təxirə salınmış vergi öhdəliyi (DTL)</b>.',
        'Aktiv: balans dəyəri < vergi bazası → çıxılan fərq → təxirə salınmış vergi aktivi (DTA) (gələcək vergi tutulan mənfəət ehtimalı olduqda).',
        'DTL/DTA = müvəqqəti fərq × vergi dərəcəsi (Azərbaycanda mənfəət vergisi 20%). Diskontlaşdırılmır.',
        'Vergi xərci = cari vergi + təxirə salınmış verginin dəyişməsi.',
      ],
    },
    {
      id: 'ifrs9', title: 'IFRS 9 / IAS 32 Maliyyə alətləri',
      body: [
        'Təsnifat (borc alətləri): biznes model + SPPI testi → amortizasiya edilmiş maya dəyəri (AC), FVOCI, FVTPL.',
        'Kapital alətləri: FVTPL (default) və ya geri dönməz seçim ilə FVOCI (reklassifikasiya yoxdur).',
        'AC: faiz gəliri = açılış balans × effektiv faiz dərəcəsi; pul daxilolması = nominal × kupon. Bağlanış = açılış + faiz − ödəniş.',
        'Əməliyyat xərcləri: AC və FVOCI üçün ilkin dəyərə daxil; FVTPL üçün xərc.',
        'Gözlənilən kredit zərərləri (ECL): Mərhələ 1 — 12 aylıq ECL; Mərhələ 2/3 — bütün müddət üzrə ECL.',
        'IAS 32: Konvertasiya olunan istiqraz — öhdəlik komponenti (pul axınlarının bazar faizi ilə diskontu) + qalan hissə kapital.',
      ],
    },
    {
      id: 'group', title: 'IFRS 10, IFRS 3, IAS 28 — Qrup hesabatları',
      body: [
        'Nəzarət: hakimiyyət + dəyişən gəlirlərə məruz qalma + hakimiyyətdən gəlirlərə təsir üçün istifadə imkanı.',
        'Qudvil = ödənilmiş məbləğ + qeyri-nəzarət payı (NCI) − xalis aktivlərin ədalətli dəyəri. NCI: ədalətli dəyər (tam qudvil) və ya xalis aktivlərdə payın nisbəti.',
        'Mənfi qudvil (sərfəli alış) — yenidən yoxlamadan sonra dərhal P/L-də gəlir.',
        'Qrupdaxili əməliyyatlar və reallaşmamış mənfəət tam istisna edilir.',
        'IAS 28: Əhəmiyyətli təsir (adətən 20–50%) — iştirak payı metodu: investisiya = maya + payı (mənfəət − dividend).',
        'Alış xərcləri (hüquqi, məsləhət) — xərcə silinir, qudvilə daxil edilmir.',
      ],
    },
    {
      id: 'other', title: 'IAS 7, IAS 21, IAS 33, IAS 19, IFRS 13, IFRS 5, IAS 24',
      body: [
        'IAS 7: əməliyyat, investisiya, maliyyələşdirmə. Dolayı metod: xalis mənfəət + amortizasiya ± dövriyyə kapitalının dəyişmələri. Ödənilmiş faiz/dividend — siyasət seçimi ilə əməliyyat və ya maliyyələşdirmə.',
        'IAS 21: Əməliyyat tarixindəki məzənnə ilə ilkin tanınma; monetar maddələr hesabat tarixində bağlanış məzənnəsi ilə yenidən hesablanır (fərq P/L), qeyri-monetar (tarixi dəyərlə) — yenidən hesablanmır.',
        'IAS 33: Əsas EPS = (xalis mənfəət − imtiyazlı dividend) / adi səhmlərin orta çəkili sayı. Bonus emissiyası — retrospektiv, dövrün əvvəlindən.',
        'IAS 19: Müəyyən edilmiş ödəniş planı — xidmət xərci və xalis faiz P/L-də, yenidən ölçmələr OCI-də.',
        'IFRS 13: Ədalətli dəyər — ölçmə tarixində bazar iştirakçıları arasında adi əməliyyatda aktivin satışından alınacaq qiymət (çıxış qiyməti). 1/2/3-cü səviyyə iyerarxiyası.',
        'IFRS 5: Satış üçün saxlanılan — balans dəyəri və (ədalətli dəyər − satış xərcləri) aşağı olanı; amortizasiya dayandırılır. Satış 12 ay ərzində yüksək ehtimallı.',
        'IAS 24: Əlaqəli tərəflər — əsas rəhbər işçilər, onların yaxın ailə üzvləri, törəmə/asılı müəssisələr; əməliyyatlar açıqlanır.',
      ],
    },
    {
      id: 'formulas', title: 'Formullar cədvəli (imtahandan əvvəl)',
      body: [
        'Diskont faktoru = 1 / (1+r)^n; annuitet faktoru = (1 − (1+r)^−n) / r.',
        'Düz xətt amortizasiya = (Dəyər − Ləğv) / Müddət. Azalan qalıq = Balans × %.',
        'NRV = Satış qiyməti − tamamlama − satış xərcləri. Ehtiyat = min(Maya, NRV).',
        'Bərpa olunan məbləğ = max(FV − satış xərci, VIU).',
        'DTL = (Balans − Vergi bazası) × t.',
        'AC bağlanış = Açılış × (1+EIR) − Kupon.',
        'Qudvil = Ödəniş + NCI − Xalis aktivlərin FV.',
        'İştirak payı: İnvestisiya = Maya + %×(Mənfəət) − %×(Dividend).',
        'EPS = (Mənfəət − İmtiyazlı div.) / Orta çəkili səhm sayı.',
      ],
    },
  ],
};

// Əlavə bölmə: digər standartlar (formullar cədvəlindən əvvəl yerləşdirilir)
PMS.materials.sections.splice(-1, 0, {
  id: 'others', title: 'IFRS 1, IFRS 2, IFRS 8, IFRS 11, IAS 34, IAS 41 və digərləri',
  body: [
    '<b>IFRS 1</b>: keçid tarixi — tam müqayisəli məlumat verilən ən erkən dövrün əvvəli. Açılış balansında ilk MHBS hesabat dövrünün sonunda qüvvədə olan standartlar retrospektiv tətbiq olunur; düzəlişlər bölüşdürülməmiş mənfəətə. Azadolmalar: şərti ilkin dəyər (deemed cost), biznes birləşmələri. Qiymətləndirmələr sonrakı məlumatla dəyişdirilmir. Kapital və məcmu gəlir üzləşdirmələri tələb olunur.',
    '<b>IFRS 2</b>: kapitalla ödənilən — verilmə tarixindəki ədalətli dəyər, hüquq qazanma müddətinə bölünür, yenidən ölçülmür (Dt Xərc, Kt Kapital). Pulla ödənilən (SARs) — öhdəlik, hər hesabat tarixində yenidən ölçülür. Xərc = işçi sayı × qalma ehtimalı × opsion sayı × ədalətli dəyər × keçən müddət / ümumi müddət − əvvəl tanınmış.',
    '<b>IFRS 8</b>: seqmentlər rəhbərliyin (CODM) daxili hesabatlarına əsaslanır. Hədlər: gəlir, mənfəət/zərər və ya aktivlərin 10%-i; hesabat verilən seqmentlər xarici gəlirin ən azı 75%-ni əhatə etməlidir; əsas müştəri — gəlirin 10%-i.',
    '<b>IFRS 11</b>: birgə əməliyyat — öz aktiv/öhdəlik/gəlir/xərc payını tanıyır; birgə müəssisə — iştirak payı metodu. Birgə nəzarət = yekdil razılıq.',
    '<b>IAS 34</b>: sıxlaşdırılmış hesabatlar + seçilmiş qeydlər; illik hesabatla eyni siyasətlər; mövsümi gəlir/xərclər təxirə salınmır; vergi — illik gözlənilən effektiv dərəcə ilə.',
    '<b>IAS 41</b>: bioloji aktivlər və yığım anında kənd təsərrüfatı məhsulu — ədalətli dəyər − satış xərcləri; dəyişikliklər P/L-də. Meyvə verən bitkilər — IAS 16.',
    '<b>IAS 29</b>: hiperinflyasiya (3 ildə ~100%) — qeyri-monetar maddələr ümumi qiymət indeksi ilə yenidən hesablanır, monetar maddələr yox.',
    '<b>IAS 27</b>: ayrıca hesabatlarda törəmə/asılı müəssisələrə investisiya — maya, IFRS 9 və ya iştirak payı metodu.',
  ],
});
