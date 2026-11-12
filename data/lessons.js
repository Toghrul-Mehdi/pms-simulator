// Yığcam konspektlər və hesablama nümunələri (mühazirələrin sonunda göstərilir).
// Blok növləri: U — siyahı, E — həlli ilə nümunə, J — mühasibat yazılışları, W — imtahan tələləri.
(function () {
  const T = PMS.T;
  const U = (h, ul) => ({ h, ul });
  const E = (q, steps) => ({ h: 'Nümunə', ex: { q, steps } });
  const J = (h, dt) => ({ h, dt });
  const W = (...ul) => ({ h: 'İmtahan tələləri', warn: ul });
  const L = (id, group, title, topic, summary, blocks) => ({ id, group, title, topic, summary, blocks });

  PMS.materials.konspekt = [
    // ================= ƏSASLAR =================
    L('framework', 'Əsaslar', 'Konseptual əsaslar', T.F,
      'Konseptual əsaslar standart deyil — standartların hazırlanması və standart olmayan hallarda uçot siyasətinin seçilməsi üçün çərçivədir. Standartla ziddiyyət olduqda standart üstündür.',
      [
        U('Məqsəd və istifadəçilər', [
          'Maliyyə hesabatlarının məqsədi — <b>mövcud və potensial investorlara, borc verənlərə və digər kreditorlara</b> resurs təqdim etmə qərarları üçün faydalı məlumat vermək.',
          'Əsas fərziyyə: <b>fəaliyyətin fasiləsizliyi</b>. Hesabatlar <b>hesablama prinsipi</b> ilə hazırlanır (pul axını hesabatı istisna).',
        ]),
        U('Keyfiyyət xüsusiyyətləri', [
          '<b>Fundamental:</b> uyğunluq (proqnoz və təsdiq dəyəri; əhəmiyyətlilik onun aspektidir) və düzgün təqdimat (tam, neytral, səhvsiz; mahiyyət formadan üstün).',
          '<b>Gücləndirici:</b> müqayisəlilik, yoxlanıla bilmə, vaxtlılıq, başadüşülənlik.',
          'Ehtiyatlılıq (prudence) neytrallığı dəstəkləyir — qeyri-müəyyənlikdə ehtiyatlı mühakimə, lakin aktivləri bilərəkdən azaltmaq deyil.',
          'Məhdudiyyət: xərc–fayda nisbəti.',
        ]),
        U('Elementlər', [
          '<b>Aktiv</b> — keçmiş hadisələr nəticəsində müəssisənin <u>nəzarət etdiyi</u> cari iqtisadi resurs (iqtisadi fayda yaratmaq potensialı olan hüquq).',
          '<b>Öhdəlik</b> — keçmiş hadisələr nəticəsində iqtisadi resursu ötürmək üzrə <u>cari vəzifə</u> (qaçmaq üçün praktiki imkan yoxdur).',
          '<b>Kapital</b> — aktivlər minus öhdəliklər (qalıq pay). <b>Gəlir/xərc</b> — mülkiyyətçilərlə əməliyyatlar istisna olmaqla kapitalın artması/azalması.',
        ]),
        U('Tanınma və ölçmə', [
          'Element o zaman tanınır ki, bu, uyğun məlumat və düzgün təqdimat versin (mövcudluq qeyri-müəyyənliyi, aşağı ehtimal, ölçmə qeyri-müəyyənliyi nəzərə alınır).',
          'Ölçmə əsasları: <b>tarixi dəyər</b> və <b>cari dəyər</b> (ədalətli dəyər, istifadə dəyəri / icra dəyəri, cari maya dəyəri).',
        ]),
        W('Fundamental xüsusiyyət yalnız ikidir — "etibarlılıq" və "ehtiyatlılıq" bu siyahıda yoxdur.', 'Aktiv üçün meyar mülkiyyət yox, nəzarətdir.', 'Əsas fərziyyə təkdir: fəaliyyətin fasiləsizliyi.'),
      ]),

    L('ias1', 'Əsaslar', 'IAS 1 — Maliyyə hesabatlarının təqdimatı', T.F,
      'Hesabatların tərkibini, quruluşunu və minimum məzmununu müəyyən edir. Suallar əsasən cari/uzunmüddətli təsnifat və OCI maddələrindən gəlir.',
      [
        U('Tam dəst', [
          'Maliyyə vəziyyəti haqqında hesabat; mənfəət və ya zərər və digər məcmu gəlir (OCI) haqqında hesabat; kapitalda dəyişikliklər; pul vəsaitlərinin hərəkəti; qeydlər; əvvəlki dövrün müqayisəli məlumatı.',
          'Retrospektiv düzəliş olduqda — əlavə olaraq ən erkən müqayisəli dövrün <b>əvvəlinə</b> maliyyə vəziyyəti hesabatı (üçüncü balans).',
          'Ən azı ildə bir dəfə təqdim olunur.',
        ]),
        U('Ümumi prinsiplər', [
          'Düzgün təqdimat və MHBS-ə uyğunluq (açıq və qeyd-şərtsiz bəyanat). Kənara çıxma — yalnız son dərəcə nadir hallarda.',
          'Fasiləsizlik, hesablama prinsipi, əhəmiyyətlilik və aqreqasiya, ardıcıllıq, müqayisəli məlumat.',
          '<b>Əvəzləşdirmə qadağandır</b>, standart tələb və ya icazə vermirsə.',
          '"Fövqəladə maddələr" ayrıca göstərilə bilməz.',
        ]),
        U('Cari / uzunmüddətli', [
          'Cari aktiv: normal əməliyyat dövründə realizə olunacaq, ticarət üçün saxlanılır, 12 ay ərzində realizə olunacaq və ya məhdudiyyətsiz pul vəsaitidir.',
          'Cari öhdəlik: normal əməliyyat dövründə və ya 12 ay ərzində ödəniləcək; yaxud hesabat tarixində ödənişi ən azı 12 ay təxirə salmaq <b>hüququ yoxdur</b>.',
          'Kredit şərtləri (kovenant) hesabat tarixinədək pozulubsa və kreditorun güzəşti hesabat tarixindən <u>sonra</u> alınıbsa — öhdəlik caridir.',
          'Təxirə salınmış vergi həmişə uzunmüddətlidir.',
        ]),
        U('Digər məcmu gəlir (OCI)', [
          '<b>P/L-ə sonradan keçmir:</b> əsas vəsait və QMA-nın yenidən qiymətləndirmə artımı; pensiya planlarının yenidən ölçülməsi; FVOCI kapital alətləri; öz kredit riski (FVTPL öhdəlik).',
          '<b>P/L-ə sonradan keçir:</b> xarici əməliyyatların tərcümə fərqləri; FVOCI borc alətləri; pul axını hecinqinin effektiv hissəsi.',
          'Xərclər P/L-də <b>xarakterinə</b> (material, əmək haqqı, amortizasiya) və ya <b>funksiyasına</b> (maya, satış, inzibati) görə təhlil edilir.',
          'Dividend xərc deyil — kapitalda dəyişikliklər hesabatında göstərilir.',
        ]),
        E('Kapital ilin əvvəlinə 400 000, sonuna 495 000 AZN. İl ərzində səhm emissiyası 50 000, dividend 30 000. Ümumi məcmu gəlir?', ['Kapitalın dəyişməsi = 95 000', 'Mülkiyyətçilərlə əməliyyatlar: +50 000 − 30 000 = +20 000', 'Ümumi məcmu gəlir = 95 000 − 20 000 = <b>75 000</b>']),
        W('"Uzatmaq niyyəti" yox, hesabat tarixində mövcud olan uzatmaq <u>hüququ</u> vacibdir.', 'Yenidən qiymətləndirmə ehtiyatı heç vaxt P/L-ə keçmir.'),
      ]),

    L('ias8', 'Əsaslar', 'IAS 8 — Uçot siyasəti, qiymətləndirmələr və səhvlər', T.E,
      'Üç fərqli hal — üç fərqli uçot: siyasət dəyişikliyi və səhv retrospektiv, qiymətləndirmə dəyişikliyi perspektiv.',
      [
        U('Uçot siyasətinin seçilməsi', [
          'Konkret standart varsa — o tətbiq olunur. Yoxdursa, rəhbərlik mühakimə ilə: 1) oxşar məsələləri tənzimləyən MHBS; 2) Konseptual əsaslar; sonra digər standart qoyucuların sənədləri və sənaye praktikası.',
          'Siyasət ardıcıl tətbiq olunur.',
        ]),
        U('Uçot siyasətinin dəyişməsi', [
          'Yalnız iki halda: standart tələb edir və ya dəyişiklik <b>daha etibarlı və uyğun</b> məlumat verir.',
          'Tətbiq: <b>retrospektiv</b> — sanki yeni siyasət həmişə tətbiq olunub; ən erkən dövrün açılış bölüşdürülməmiş mənfəəti və müqayisəli məlumat düzəldilir.',
          'Nümunələr: FIFO → orta çəkili; maya modeli → ədalətli dəyər modeli (IAS 40).',
          'Dəyişiklik <u>sayılmır</u>: əvvəl olmayan və ya mahiyyətcə fərqli əməliyyat üçün yeni siyasət. IAS 16/38 üzrə ilk dəfə yenidən qiymətləndirmə — yenidən qiymətləndirmə kimi uçota alınır.',
        ]),
        U('Uçot qiymətləndirməsinin dəyişməsi', [
          'Nümunələr: faydalı müddət, ləğv dəyəri, <b>amortizasiya üsulu</b>, şübhəli borclar ehtiyatı, zəmanət ehtiyatı, NRV.',
          'Tətbiq: <b>perspektiv</b> — dəyişiklik dövründə və gələcək dövrlərdə P/L-də.',
          'Siyasət dəyişikliyi ilə qiymətləndirmə dəyişikliyini ayırmaq çətindirsə — qiymətləndirmə kimi qəbul edilir.',
        ]),
        U('Əvvəlki dövr səhvləri', [
          'Hesablama səhvləri, siyasətin yanlış tətbiqi, faktların nəzərdən qaçması, fırıldaqçılıq.',
          'Əhəmiyyətli səhv: <b>retrospektiv yenidən təqdimat</b> — müqayisəli məbləğlər düzəldilir; səhv daha əvvəl baş veribsə, açılış qalıqları düzəldilir. Cari ilin P/L-inə yazılmır.',
          'Qeyri-mümkündürsə — mümkün olan ən erkən dövrdən.',
        ]),
        E('Avadanlıq 100 000 AZN, 10 il, düz xətt. 4 il sonra qalan müddət 4 il kimi qiymətləndirilir. 5-ci ilin amortizasiyası?', ['4 ildən sonra balans dəyəri = 100 000 − 4 × 10 000 = 60 000', 'Qiymətləndirmə dəyişikliyi → perspektiv, əvvəlki illərə toxunulmur', '60 000 / 4 = <b>15 000</b>']),
        W('Amortizasiya üsulunun dəyişməsi siyasət yox, qiymətləndirmə dəyişikliyidir.', 'Səhvin düzəlişi cari ilin mənfəətinə təsir etmir.'),
      ]),

    L('ias10', 'Əsaslar', 'IAS 10 — Hesabat dövründən sonrakı hadisələr', T.E,
      'Hesabat tarixi ilə hesabatların dərcə təsdiqləndiyi tarix arasındakı hadisələr. Əsas sual: hadisə hesabat tarixində mövcud olan şərti təsdiq edir, yoxsa yeni şərt yaradır?',
      [
        U('Düzəliş tələb edən hadisələr (məbləğlər dəyişdirilir)', [
          'Hesabat tarixində mövcud öhdəliyi təsdiq edən məhkəmə qərarı.',
          'Debitorun iflası (dəyərsizləşmə artıq mövcud idi).',
          'Ehtiyatların NRV-dən aşağı satılması.',
          'Əvvəl alınmış aktivin dəyərinin və ya satılmış aktivin gəlirinin müəyyənləşməsi; mükafat məbləğlərinin dəqiqləşməsi.',
          'Hesabatların yanlış olduğunu göstərən səhv və ya fırıldaqçılığın aşkarlanması.',
        ]),
        U('Düzəliş tələb etməyən hadisələr (əhəmiyyətlidirsə açıqlanır)', [
          'Hesabat tarixindən sonra yanğın, daşqın; investisiyaların bazar dəyərinin düşməsi; məzənnə və vergi dərəcələrinin dəyişməsi.',
          'Biznes birləşməsi, əsas aktivlərin alışı/satışı, restrukturizasiya elanı, səhm emissiyası.',
          '<b>Dividendlər</b> hesabat tarixindən sonra elan edilibsə — öhdəlik tanınmır, qeydlərdə açıqlanır.',
        ]),
        U('Fasiləsizlik', ['Hesabat tarixindən sonra rəhbərlik müəssisəni ləğv etmək qərarına gəlirsə və ya başqa real alternativ yoxdursa — hesabatlar fasiləsizlik əsasında hazırlana bilməz (istisna: bu halda hadisənin vaxtından asılı olmayaraq bütün hesabat dəyişir).']),
        E('31.12-də 80 000 AZN debitor borcuna 10% ehtiyat yaradılıb. Fevralda (hesabatlar hələ təsdiqlənməyib) debitor iflas edir, yalnız 25% alınacaq.', ['Düzəliş tələb edən hadisədir', 'Lazım olan ehtiyat = 80 000 × 75% = 60 000', 'Əlavə zərər = 60 000 − 8 000 = <b>52 000</b>']),
        W('Təsdiq tarixindən SONRAKI hadisələr IAS 10-a aid deyil.', 'Yanğın nə qədər böyük olsa da, düzəliş tələb etmir (fasiləsizliyi pozmursa).'),
      ]),

    // ================= AKTİVLƏR =================
    L('ias2', 'Aktivlər', 'IAS 2 — Ehtiyatlar', T.I2,
      'Ehtiyatlar maya dəyəri və xalis satış dəyərinin (NRV) aşağı olanı ilə ölçülür. Suallar: maya dəyərinə nə daxildir, FIFO/orta çəkili, NRV silinməsi.',
      [
        U('Əhatə', ['Satış üçün saxlanılan mallar, hazır məhsul, bitməmiş istehsal, xammal və materiallar.', 'Əhatədən kənar: maliyyə alətləri, bioloji aktivlər və yığım anındakı kənd təsərrüfatı məhsulu (IAS 41).']),
        U('Maya dəyəri', [
          '<b>Alış xərcləri:</b> alış qiyməti (ticarət endirimləri çıxılmaqla) + idxal rüsumları + qaytarılmayan vergilər + daşınma, yükləmə.',
          '<b>Emal xərcləri:</b> birbaşa əmək + dəyişən qaimə xərcləri + sabit istehsal qaimə xərcləri (<u>normal güc</u> əsasında bölüşdürülür).',
          '<b>Daxil deyil:</b> anormal itkilər, saxlama xərcləri (növbəti istehsal mərhələsi üçün zəruri olanlar istisna), inzibati xərclər, satış xərcləri, qaytarılan ƏDV.',
          'Aşağı istehsalda bölüşdürülməmiş sabit qaimə xərcləri — dövrün xərci. Anormal yüksək istehsalda vahidə düşən məbləğ azaldılır.',
        ]),
        U('Maya düsturları', [
          'Qarşılıqlı əvəz edilməyən mallar — xüsusi identifikasiya.',
          'Digərləri — <b>FIFO</b> və ya <b>orta çəkili</b>. LIFO qadağandır.',
          'Oxşar xarakterli ehtiyatlar üçün eyni düstur.',
        ]),
        U('Xalis satış dəyəri', [
          'NRV = təxmini satış qiyməti − tamamlama xərcləri − satış üçün zəruri xərclər.',
          'Müqayisə adətən <b>maddə-maddə</b> aparılır. Müqavilə ilə satılacaq miqdar üçün müqavilə qiyməti əsas götürülür.',
          'Hazır məhsul mayadan yuxarı satılacaqsa, onun xammalı silinmir.',
          'NRV sonradan artarsa, silinmə ilkin silinmə həddində <b>bərpa olunur</b>.',
        ]),
        E('Maya 12 000; satış qiyməti 13 000; tamamlama 1 500; satış xərcləri 800 AZN.', ['NRV = 13 000 − 1 500 − 800 = 10 700', '10 700 &lt; 12 000 → ehtiyat 10 700 ilə göstərilir', 'Silinmə = <b>1 300</b> (P/L-də xərc)']),
        E('Normal güc 10 000 vahid, sabit qaimə 30 000 AZN. Faktiki istehsal 8 000 vahid.', ['Dərəcə = 30 000 / 10 000 = 3 AZN/vahid', 'Ehtiyatlara: 8 000 × 3 = 24 000', 'Qalan <b>6 000</b> — dövrün xərci']),
        W('Qaytarılan ƏDV mayaya daxil deyil, qaytarılmayan rüsum daxildir.', 'NRV ədalətli dəyər deyil — müəssisəyə xas göstəricidir.'),
      ]),

    L('ias16', 'Aktivlər', 'IAS 16 — Torpaq, tikili və avadanlıqlar', T.I16,
      'Ən çox sual düşən standartlardan biri: ilkin dəyərin tərkibi, amortizasiya hesablamaları, yenidən qiymətləndirmə və silinmə.',
      [
        U('Tanınma və ilkin dəyər', [
          'Tanınır: gələcək iqtisadi fayda ehtimalı var və dəyər etibarlı ölçülür.',
          '<b>Daxildir:</b> alış qiyməti (endirimlər çıxılmaqla, rüsumlar daxil); birbaşa aid xərclər — sahənin hazırlanması, çatdırılma, quraşdırma, sınaq, peşəkar haqlar; sökmə və bərpa öhdəliyinin diskontlaşdırılmış dəyəri; uyğun aktivlər üçün borc xərcləri (IAS 23).',
          '<b>Daxil deyil:</b> işçilərin təlimi, reklam, yeni obyektin açılışı, inzibati qaimə xərcləri, ilkin əməliyyat zərərləri, yerdəyişmə.',
          'Sınaq zamanı istehsal olunan məhsulun satışından gəlir — P/L-də (aktivdən çıxılmır).',
          'Təxirə salınmış ödəniş — nağd qiymət ekvivalenti; mübadilə — ədalətli dəyər (kommersiya mahiyyəti varsa).',
        ]),
        U('Sonrakı xərclər', ['Gündəlik təmir — xərc.', 'Hissələrin əvəzlənməsi və böyük texniki baxış — meyarlar ödənərsə kapitallaşdırılır, köhnə hissə silinir.']),
        U('Amortizasiya', [
          'Amortizasiya olunan məbləğ = dəyər − ləğv dəyəri; faydalı müddət ərzində sistemli bölünür.',
          'Başlayır: aktiv <b>istifadəyə hazır</b> olduqda. Dayanır: silindikdə və ya satış üçün saxlanılan kimi təsnif edildikdə. Boş dayanma amortizasiyanı dayandırmır.',
          'Üsullar: düz xətt; azalan qalıq (balans × dərəcə); istehsal vahidi. Gəlirə əsaslanan üsul uyğun deyil.',
          'Əhəmiyyətli <b>komponentlər</b> ayrıca amortizasiya olunur. Torpaq amortizasiya olunmur.',
          'Müddət, ləğv dəyəri, üsul hər il nəzərdən keçirilir — dəyişiklik perspektivdir.',
        ]),
        U('Yenidən qiymətləndirmə modeli', [
          'Bütün <b>sinfə</b> tətbiq olunur, kifayət qədər müntəzəm.',
          '<b>Artım</b> → OCI (yenidən qiymətləndirmə ehtiyatı); əvvəl P/L-də tanınmış azalmanı bərpa edən hissə — P/L.',
          '<b>Azalma</b> → əvvəlcə həmin aktivin ehtiyatından (OCI), qalanı P/L.',
          'Sonrakı amortizasiya yenidən qiymətləndirilmiş məbləğdən. Artıq amortizasiya qədər ehtiyat hər il bölüşdürülməmiş mənfəətə köçürülə bilər (P/L-dən keçmir).',
        ]),
        J('Yazılışlar', ['Artım: <b>Dt</b> Əsas vəsait — <b>Kt</b> Yenidən qiymətləndirmə ehtiyatı (OCI)', 'Amortizasiya: <b>Dt</b> Amortizasiya xərci — <b>Kt</b> Yığılmış amortizasiya', 'Satış: <b>Dt</b> Pul, Yığılmış amortizasiya — <b>Kt</b> Əsas vəsait, Satışdan mənfəət']),
        E('Bina: dəyər 200 000, yığılmış amortizasiya 40 000. 190 000-ə yenidən qiymətləndirilir, qalan müddət 19 il.', ['Balans dəyəri = 160 000', 'Artım = 190 000 − 160 000 = <b>30 000</b> → OCI', 'Yeni illik amortizasiya = 190 000 / 19 = <b>10 000</b>']),
        E('Avadanlıq 80 000 AZN, azalan qalıq 25%. 2-ci ilin amortizasiyası?', ['1-ci il: 80 000 × 25% = 20 000; qalıq 60 000', '2-ci il: 60 000 × 25% = <b>15 000</b>']),
        W('Silinmədən mənfəət "gəlir" (revenue) deyil.', 'Azalan qalıq üsulunda ləğv dəyəri çıxılmır — dərəcə balans dəyərinə tətbiq olunur.', 'İl ortasında alınan aktiv üçün aylara mütənasib hesablayın.'),
      ]),

    L('ias36', 'Aktivlər', 'IAS 36 — Aktivlərin dəyərsizləşməsi', T.I36,
      'Aktiv bərpa olunan məbləğindən yuxarı dəyərdə göstərilə bilməz.',
      [
        U('Nə vaxt test edilir', [
          'Hər hesabat tarixində dəyərsizləşmə <b>əlamətləri</b> yoxlanılır. Xarici: bazar dəyərinin düşməsi, mənfi texnoloji/bazar/hüquqi dəyişikliklər, faiz dərəcələrinin artması. Daxili: köhnəlmə, zədə, boş dayanma, gözləniləndən pis nəticələr.',
          '<b>Hər il mütləq:</b> qudvil, qeyri-müəyyən müddətli QMA, hələ istifadəyə hazır olmayan QMA.',
          'Əhatədən kənar: ehtiyatlar, təxirə salınmış vergi aktivləri, maliyyə aktivləri, ədalətli dəyərlə investisiya mülkiyyəti, satış üçün saxlanılan aktivlər.',
        ]),
        U('Bərpa olunan məbləğ', [
          '= <b>max</b>(ədalətli dəyər − satış xərcləri; istifadə dəyəri).',
          'İstifadə dəyəri — gələcək pul axınlarının diskontlaşdırılmış dəyəri; <b>vergidən əvvəlki</b> dərəcə; proqnozlar adətən 5 ilədək büdcələrə əsaslanır.',
          'Daxil edilmir: gələcək restrukturizasiya və aktivin təkmilləşdirilməsi, maliyyələşdirmə və vergi pul axınları.',
        ]),
        U('Zərərin tanınması', [
          'Zərər = balans dəyəri − bərpa olunan məbləğ → P/L. Yenidən qiymətləndirilmiş aktiv üçün əvvəlcə ehtiyatdan (OCI).',
          'Sonrakı amortizasiya yeni balans dəyərindən hesablanır.',
        ]),
        U('Pul yaradan vahid (PYV)', [
          'Ayrı aktivin bərpa olunan məbləği müəyyən edilə bilmirsə — müstəqil pul daxilolmaları yaradan ən kiçik aktiv qrupu test edilir.',
          'Zərərin bölüşdürülməsi: 1) <b>qudvil</b>; 2) qalan aktivlər balans dəyərlərinə mütənasib.',
          'Ayrı aktiv max(FV − satış xərcləri; istifadə dəyəri; 0)-dan aşağı salınmır.',
        ]),
        U('Bərpa', ['Əlamətlər aradan qalxdıqda zərər bərpa edilir, lakin balans dəyəri dəyərsizləşmə olmasaydı olacaq (amortizasiya çıxılmış) məbləği aşa bilməz.', '<b>Qudvil üzrə zərər bərpa edilmir.</b>']),
        E('PYV: qudvil 20 000; əsas vəsaitlər 60 000; patent 20 000. Bərpa olunan məbləğ 70 000.', ['Zərər = 100 000 − 70 000 = 30 000', 'Qudvil tam silinir: 20 000', 'Qalan 10 000: ƏV 60/80 × 10 000 = 7 500; patent 2 500', 'Nəticə: ƏV <b>52 500</b>, patent 17 500, qudvil 0']),
        W('Bərpa olunan məbləğ iki göstəricinin BÖYÜYÜDÜR.', 'Balans dəyəri bərpa olunan məbləğdən azdırsa, heç nə edilmir (artırılmır).'),
      ]),

    L('ias38', 'Aktivlər', 'IAS 38 — Qeyri-maddi aktivlər', T.I38,
      'Fiziki forması olmayan, müəyyən edilə bilən qeyri-monetar aktivlər. Əsas mövzu: tədqiqat və inkişaf xərcləri.',
      [
        U('Tərif və tanınma', [
          'Üç əlamət: <b>müəyyən edilə bilmə</b> (ayrıla bilir və ya hüquqdan yaranır), <b>nəzarət</b>, <b>gələcək iqtisadi fayda</b>.',
          'Ayrıca alınan — maya dəyəri ilə; biznes birləşməsində alınan — ədalətli dəyərlə (alınan müəssisədə tanınmamış olsa belə, məs. davam edən tədqiqat layihəsi).',
          '<b>Heç vaxt tanınmır:</b> daxili yaradılmış qudvil, brendlər, nəşr adları, müştəri siyahıları; həmçinin təsis, təlim, reklam, yerdəyişmə xərcləri.',
        ]),
        U('Tədqiqat və inkişaf', [
          '<b>Tədqiqat</b> mərhələsi — həmişə xərc.',
          '<b>İnkişaf</b> mərhələsi — 6 meyarın hamısı ödəndiyi andan kapitallaşdırılır: texniki mümkünlük; tamamlamaq niyyəti; istifadə/satış imkanı; gələcək faydanın nümayişi; kifayət qədər resurs; xərclərin etibarlı ölçülməsi.',
          'Əvvəl xərcə silinmiş məbləğlər sonradan <b>kapitallaşdırılmır</b>.',
        ]),
        U('Sonrakı ölçmə', [
          'Maya modeli və ya yenidən qiymətləndirmə modeli (yalnız <b>fəal bazar</b> olduqda — nadir).',
          '<b>Məhdud müddətli:</b> amortizasiya olunur (istifadəyə hazır olduqda başlayır); ləğv dəyəri adətən sıfır; müddət hüquqi və iqtisadi müddətin qısası.',
          '<b>Qeyri-müəyyən müddətli:</b> amortizasiya olunmur, hər il dəyərsizləşmə testi.',
        ]),
        E('Layihəyə yanvar–sentyabr hər ay 10 000 AZN xərclənib. Meyarlar 1 iyulda ödənilib.', ['Yanvar–iyun: 60 000 — xərc', 'İyul–sentyabr: 3 × 10 000 = <b>30 000</b> — aktiv']),
        W('İnkişaf xərclərinin kapitallaşdırılması seçim deyil — meyarlar ödənirsə məcburidir.', 'Amortizasiya kommersiya istehsalı başlayanda başlanır.'),
      ]),

    L('ias40', 'Aktivlər', 'IAS 40 — İnvestisiya mülkiyyəti', T.I38,
      'İcarə gəliri və/və ya dəyər artımı üçün saxlanılan torpaq və binalar.',
      [
        U('Təsnifat', [
          '<b>İnvestisiya mülkiyyətidir:</b> əməliyyat icarəsinə verilmiş bina; dəyər artımı üçün saxlanılan torpaq; gələcək istifadəsi müəyyən edilməmiş torpaq; gələcəkdə investisiya mülkiyyəti kimi istifadə üçün tikilən obyekt.',
          '<b>Deyil:</b> sahibkarın istifadə etdiyi (IAS 16); satış üçün saxlanılan/tikilən (IAS 2); maliyyə icarəsinə verilmiş.',
          'İkili istifadə: hissələr ayrıca satıla bilirsə ayrılır; bilmirsə — yalnız öz istifadə hissəsi əhəmiyyətsiz olduqda investisiya mülkiyyətidir.',
          'Qrup daxilində törəməyə icarəyə verilən bina — fərdi hesabatda investisiya mülkiyyəti, konsolidasiyada əsas vəsait.',
        ]),
        U('Ölçmə', [
          'İlkin: maya dəyəri (əməliyyat xərcləri daxil).',
          '<b>Ədalətli dəyər modeli:</b> dəyişikliklər <b>P/L</b>-də, amortizasiya yoxdur.',
          '<b>Maya modeli:</b> IAS 16 kimi amortizasiya; ədalətli dəyər qeydlərdə açıqlanır.',
          'Seçilmiş model bütün investisiya mülkiyyətinə tətbiq olunur.',
        ]),
        U('Köçürmələr (istifadə dəyişdikdə)', [
          'İnvestisiya mülkiyyəti (FV) → əsas vəsait/ehtiyat: köçürmə tarixindəki ədalətli dəyər yeni maya olur.',
          'Əsas vəsait → investisiya mülkiyyəti (FV): köçürmə tarixinədək IAS 16; fərq <b>yenidən qiymətləndirmə kimi</b> (artım OCI).',
          'Ehtiyat → investisiya mülkiyyəti (FV): fərq P/L.',
        ]),
        W('IAS 16-da artım OCI-yə, IAS 40 ədalətli dəyər modelində P/L-ə gedir.'),
      ]),

    L('ias23', 'Aktivlər', 'IAS 23 — Borclar üzrə xərclər', T.I38,
      'Uyğun aktivin alınması, tikintisi və ya istehsalına birbaşa aid borc xərcləri kapitallaşdırılmalıdır.',
      [
        U('Əsas qaydalar', [
          '<b>Uyğun aktiv</b> — istifadəyə/satışa hazır olması üçün əhəmiyyətli vaxt tələb edən aktiv (tikinti, zavod, uzunmüddətli ehtiyatlar). Qısa müddətdə istehsal olunan ehtiyatlar və alış anında hazır aktivlər deyil.',
          '<b>Başlanğıc:</b> üç şərt birlikdə — aktivə xərclər çəkilir, borc xərcləri çəkilir, hazırlıq fəaliyyəti gedir.',
          '<b>Dayandırma:</b> fəal işlər uzun müddət dayandıqda. <b>Bitmə:</b> aktiv mahiyyətcə hazır olduqda.',
        ]),
        U('Məbləğ', [
          '<b>Xüsusi kredit:</b> faktiki faiz − vəsaitin müvəqqəti investisiyasından gəlir.',
          '<b>Ümumi kreditlər:</b> aktivə çəkilən xərclər × kapitallaşdırma dərəcəsi (ümumi kreditlərin orta çəkili faizi). Faktiki borc xərclərini aşa bilməz.',
        ]),
        E('Ümumi kreditlər: 1 000 000 × 8% və 500 000 × 11%. Aktivə il boyu 400 000 xərclənib.', ['Orta dərəcə = (80 000 + 55 000) / 1 500 000 = 9%', 'Kapitallaşdırılan = 400 000 × 9% = <b>36 000</b>']),
        W('Tikinti ilin bir hissəsini əhatə edirsə, yalnız həmin aylar üçün kapitallaşdırın.'),
      ]),

    L('ias20', 'Aktivlər', 'IAS 20 — Dövlət qrantları', T.I38,
      'Qrantlar kapitala birbaşa yazılmır — aid olduqları xərclərlə eyni dövrlərdə P/L-də sistemli tanınır.',
      [
        U('Tanınma', ['Yalnız <b>əsaslı əminlik</b> olduqda: müəssisə şərtlərə əməl edəcək və qrant alınacaq. Pulun alınması özü sübut deyil.']),
        U('Təqdimat', [
          '<b>Aktivlərlə bağlı qrant:</b> ya gələcək dövrlərin gəliri (aktivin faydalı müddətində P/L-ə), ya da aktivin dəyərindən çıxılır (az amortizasiya).',
          '<b>Gəlirlə bağlı qrant:</b> ayrıca gəlir kimi və ya müvafiq xərcdən çıxılmaqla.',
          'Artıq çəkilmiş xərclərin kompensasiyası — alınacaq olduğu dövrdə dərhal P/L.',
          'Güzəştli faizli dövlət krediti: faiz faydası qrantdır (alınan məbləğ − kreditin ədalətli dəyəri).',
        ]),
        U('Qaytarılma', ['Uçot qiymətləndirməsinin dəyişməsi kimi (perspektiv): əvvəlcə amortizasiya olunmamış gələcək dövrlərin gəliri azaldılır, qalanı xərc.']),
        E('Avadanlıq 100 000, qrant 20 000, müddət 4 il.', ['Üsul 1: amortizasiya 25 000, qrant gəliri 5 000 → xalis xərc 20 000', 'Üsul 2: dəyər 80 000, amortizasiya <b>20 000</b>', 'P/L-ə xalis təsir eynidir']),
      ]),

    // ================= ÖHDƏLİKLƏR VƏ GƏLİR =================
    L('ifrs16', 'Öhdəliklər və gəlir', 'IFRS 16 — İcarə', T.L,
      'İcarəçi demək olar ki, bütün icarələri balansda tanıyır: istifadə hüququ aktivi və icarə öhdəliyi. İcarəyə verən üçün maliyyə/əməliyyat icarəsi bölgüsü qalır.',
      [
        U('İcarənin müəyyən edilməsi', ['Müqavilə <b>müəyyən edilmiş aktivin</b> istifadəsinə nəzarət hüququnu müəyyən müddətə ödəniş müqabilində verir.', 'Təchizatçının əsaslı əvəzetmə hüququ varsa — icarə deyil.', 'İcarə müddəti = ləğv edilə bilməyən dövr + istifadəsi əsaslı şəkildə müəyyən olan uzatma (və ya istifadə edilməyəcək xitam) opsionu dövrləri.']),
        U('İcarəçi — ilkin tanınma', [
          '<b>İcarə öhdəliyi</b> = hələ ödənilməmiş icarə ödənişlərinin diskontlaşdırılmış dəyəri. Dərəcə: icarədə nəzərdə tutulan faiz, müəyyən edilə bilmirsə — icarəçinin əlavə borclanma dərəcəsi.',
          'Ödənişlərə daxildir: sabit ödənişlər (stimullar çıxılmaqla); indeks/dərəcədən asılı dəyişən ödənişlər; qalıq dəyər zəmanəti üzrə gözlənilən məbləğ; əsaslı şəkildə müəyyən alış opsionu; xitam cərimələri.',
          'Daxil deyil: satışdan/istifadədən asılı dəyişən ödənişlər (yarandıqca xərc).',
          '<b>ROU aktivi</b> = öhdəlik + başlanğıcda və ya əvvəl edilmiş ödənişlər + ilkin birbaşa xərclər + sökmə/bərpa xərcləri − alınmış stimullar.',
        ]),
        U('İcarəçi — sonrakı uçot', [
          'Öhdəlik: + faiz (açılış qalığı × dərəcə) − ödəniş.',
          'ROU: amortizasiya — icarə müddəti və faydalı müddətin <b>qısası</b> (mülkiyyət keçəcəksə faydalı müddət); IAS 36 üzrə dəyərsizləşmə.',
          'P/L-də: amortizasiya + faiz xərci (ilk illərdə daha çox).',
          '<b>İstisnalar (seçim):</b> qısamüddətli (≤12 ay, alış opsionu yox) və aşağı dəyərli aktivlər — ödənişlər düz xətt xərc.',
        ]),
        J('Yazılışlar (icarəçi)', ['Başlanğıc: <b>Dt</b> İstifadə hüququ aktivi — <b>Kt</b> İcarə öhdəliyi', 'Faiz: <b>Dt</b> Faiz xərci — <b>Kt</b> İcarə öhdəliyi', 'Ödəniş: <b>Dt</b> İcarə öhdəliyi — <b>Kt</b> Pul', 'Amortizasiya: <b>Dt</b> Amortizasiya xərci — <b>Kt</b> ROU yığılmış amortizasiya']),
        E('3 il, hər ilin SONUNDA 10 000 AZN, dərəcə 10%.', ['PV = 10 000 × (0,9091 + 0,8264 + 0,7513) = <b>24 869</b>', '1-ci il: faiz 2 487; qalıq = 24 869 + 2 487 − 10 000 = 17 356', '2-ci il: faiz 1 736; qalıq 9 091. 3-cü il: faiz 909; qalıq 0', 'ROU amortizasiyası = 24 869 / 3 = 8 290']),
        E('Eyni icarə, lakin ödənişlər ilin ƏVVƏLİNDƏ.', ['İlk ödəniş dərhal edilir — öhdəliyə daxil deyil', 'Öhdəlik = 10 000 × (0,9091 + 0,8264) = 17 355', 'ROU = 17 355 + 10 000 = <b>27 355</b>', '1-ci ilin faizi = 17 355 × 10% = 1 736']),
        U('İcarəyə verən', [
          '<b>Maliyyə icarəsi</b> — mülkiyyətlə bağlı risk və faydaların əhəmiyyətli hissəsi ötürülür (mülkiyyət keçir, sərfəli alış opsionu, müddət iqtisadi ömrün əsas hissəsi, ödənişlərin PV-si ədalətli dəyərə yaxın, xüsusi təyinatlı aktiv). Aktiv silinir, icarəyə xalis investisiya (debitor) tanınır, faiz gəliri.',
          '<b>Əməliyyat icarəsi</b> — aktiv balansda qalır, icarə gəliri düz xətt.',
          'Satış və geri icarə: ötürmə IFRS 15 üzrə satışdırsa, mənfəətin yalnız alıcıya ötürülmüş hüquqlara aid hissəsi tanınır.',
        ]),
        W('Əvvəldə və sonda ödənişi qarışdırmayın — annuitet faktoru fərqlidir.', 'ROU-nun amortizasiya müddəti: mülkiyyət keçmirsə icarə müddəti ilə məhdudlaşır.'),
      ]),

    L('ifrs15', 'Öhdəliklər və gəlir', 'IFRS 15 — Müştərilərlə müqavilələr üzrə gəlir', T.R,
      'Gəlir vəd edilmiş mal və ya xidmət üzərində nəzarət müştəriyə keçdikdə, müəssisənin hüququ çatacaq ödəniş məbləğində tanınır. Hər şey 5 addım üzərində qurulub.',
      [
        U('Addım 1 — Müqavilə', ['Tərəflər təsdiqləyib; hüquqlar və ödəniş şərtləri müəyyəndir; kommersiya mahiyyəti var; ödənişin toplanması <b>ehtimal olunur</b>.', 'Dəyişiklik ayrıca müqavilədir, əgər ayrıca mallar əlavə olunur və qiymət onların müstəqil satış qiymətini əks etdirir.']),
        U('Addım 2 — İcra öhdəlikləri', ['Mal/xidmət <b>ayrıcadır</b>, əgər müştəri ondan təklikdə (və ya asan əldə edilən resurslarla) faydalana bilir və müqavilədə digərlərindən ayrıca müəyyən edilir.', 'Standart zəmanət — ayrıca öhdəlik deyil (IAS 37 ehtiyatı). Əlavə/uzadılmış zəmanət — ayrıca icra öhdəliyi.']),
        U('Addım 3 — Əməliyyat qiyməti', [
          '<b>Dəyişən ödəniş</b> (endirim, bonus, cərimə, qaytarma): gözlənilən dəyər və ya ən ehtimal olunan məbləğ; yalnız əhəmiyyətli geri qaytarılma ehtimalı yüksək olmayan həddə daxil edilir.',
          '<b>Əhəmiyyətli maliyyələşdirmə komponenti:</b> gəlir nağd qiymətlə, fərq faiz (müddət ≤ 1 il olduqda nəzərə alınmaya bilər).',
          'Qeyri-pul ödəniş — ədalətli dəyərlə. Müştəriyə ödənilən məbləğ — qiymətin azalması.',
        ]),
        U('Addım 4 — Bölüşdürmə', ['Qiymət icra öhdəliklərinə <b>nisbi müstəqil satış qiymətlərinə</b> görə bölünür.']),
        U('Addım 5 — Tanınma', [
          '<b>Zamanla</b>, əgər: müştəri faydanı eyni anda alır və istehlak edir; və ya müəssisə müştərinin nəzarət etdiyi aktivi yaradır; və ya aktivin alternativ istifadəsi yoxdur və görülmüş iş üçün ödəniş hüququ var. İrəliləyiş: nəticə (output) və ya resurs (input, məs. xərc) üsulu.',
          'Əks halda — <b>müəyyən anda</b>: nəzarət göstəriciləri — ödəniş hüququ, hüquqi mülkiyyət, fiziki sahiblik, risk və faydalar, qəbul.',
        ]),
        U('Xüsusi hallar', [
          '<b>Agent</b> — yalnız komissiyanı tanıyır; prinsipial (ötürmədən əvvəl mala nəzarət edir) — ümumi məbləği.',
          '<b>Qaytarma hüququ</b> — gəlir gözlənilən qaytarmalar çıxılmaqla; geri ödəniş öhdəliyi və qaytarılacaq mal üzrə aktiv.',
          '<b>Konsiqnasiya</b> — gəlir mal son alıcıya satıldıqda. <b>Bill-and-hold</b> — xüsusi meyarlarla.',
          '<b>Geri alış</b> (qiymət ilkin qiymətdən yüksək) — maliyyələşdirmə. <b>Loyallıq xalları</b> — ayrıca icra öhdəliyi.',
          'Müqavilə aktivi (şərtli hüquq) ≠ debitor borcu (şərtsiz hüquq). Avans — müqavilə öhdəliyi.',
          'Müqavilə əldə etmə xərcləri (komissiya) — bərpa olunacaqsa aktiv.',
        ]),
        E('Paket 900 AZN: mal (müstəqil qiymət 600) + 1 illik xidmət (400).', ['Cəmi müstəqil qiymət 1 000; endirim 10%', 'Mal: 900 × 600/1 000 = <b>540</b> — dərhal', 'Xidmət: 360 — 12 ay ərzində bərabər']),
        E('Müqavilə 1 000 000; ümumi xərc 800 000; çəkilmiş 200 000.', ['İcra = 200/800 = 25%', 'Gəlir = <b>250 000</b>; xərc 200 000; mənfəət 50 000']),
        W('Faktura və ya pulun alınması gəlirin tanınma anını müəyyən etmir — nəzarətin ötürülməsi müəyyən edir.'),
      ]),

    L('ias37', 'Öhdəliklər və gəlir', 'IAS 37 — Ehtiyatlar, şərti öhdəliklər və şərti aktivlər', T.P,
      'Ehtiyat — vaxtı və ya məbləği qeyri-müəyyən öhdəlikdir. Əsas iş: tanımaq, açıqlamaq, yoxsa heç nə etməmək.',
      [
        U('Ehtiyatın tanınması — üç şərt birlikdə', [
          'Keçmiş hadisədən yaranan <b>cari öhdəlik</b> — hüquqi və ya konstruktiv (müəssisənin praktikası/bəyanatı əsaslı gözlənti yaradıb).',
          'Resurs axını <b>ehtimal olunur</b> (50%-dən çox).',
          'Məbləğ <b>etibarlı qiymətləndirilə bilir</b>.',
        ]),
        { h: 'Qərar cədvəli', table: [['Ehtimal', 'Öhdəlik', 'Aktiv'], ['Demək olar ki, dəqiq', 'Öhdəlik tanınır', 'Aktiv tanınır'], ['Ehtimal olunur (&gt;50%)', 'Ehtiyat tanınır', 'Şərti aktiv — açıqlanır'], ['Mümkündür', 'Şərti öhdəlik — açıqlanır', 'Heç nə'], ['Uzaqdır', 'Heç nə', 'Heç nə']] },
        U('Ölçmə', [
          'Hesabat tarixində öhdəliyin ödənilməsi üçün <b>ən yaxşı qiymətləndirmə</b>.',
          'Böyük populyasiya (zəmanət) — <b>gözlənilən dəyər</b>; tək öhdəlik (məhkəmə) — <b>ən ehtimal olunan nəticə</b>.',
          'Zaman dəyəri əhəmiyyətlidirsə — diskontlaşdırılır (vergidən əvvəlki dərəcə); diskontun açılması — maliyyə xərci.',
          'Aktivlərin gözlənilən satışından mənfəət nəzərə alınmır. Kompensasiya (sığorta) — demək olar ki, dəqiqdirsə ayrıca aktiv.',
        ]),
        U('Xüsusi hallar', [
          '<b>Gələcək əməliyyat zərərləri</b> — ehtiyat yaradılmır.',
          '<b>Zərərli müqavilə</b> — ehtiyat = min(icra xərci; çıxma cəriməsi).',
          '<b>Restrukturizasiya</b> — yalnız ətraflı rəsmi plan var VƏ icrasına başlanıb və ya təsirlənənlərə elan edilib. Yalnız birbaşa xərclər (işdən çıxarma); təlim, köçürmə, marketinq daxil deyil.',
          '<b>Sökmə/bərpa</b> — ehtiyat və eyni zamanda aktivin dəyərinə əlavə.',
          'Gələcək təmir, hələ qüvvəyə minməmiş qanun — öhdəlik yoxdur.',
        ]),
        E('Zəmanət: 75% qüsursuz; 20% kiçik qüsur (hamısında olsa 20 000); 5% böyük qüsur (hamısında olsa 100 000).', ['Gözlənilən dəyər = 20% × 20 000 + 5% × 100 000', '= 4 000 + 5 000 = <b>9 000</b>']),
        W('Direktorlar şurasının qərarı tək başına öhdəlik yaratmır.', 'Şərti öhdəlik balansda tanınmır.'),
      ]),

    L('ias12', 'Öhdəliklər və gəlir', 'IAS 12 — Mənfəət vergisi', T.X,
      'Vergi xərci = cari vergi + təxirə salınmış vergi. Təxirə salınmış vergi balans metodu ilə hesablanır: balans dəyəri ilə vergi bazası müqayisə edilir.',
      [
        U('Cari vergi', ['Vergi tutulan mənfəət × dərəcə. Ödənilməmiş hissə — öhdəlik, artıq ödənilən — aktiv.']),
        U('Müvəqqəti fərqlər', [
          'Müvəqqəti fərq = balans dəyəri − vergi bazası.',
          '<b>Aktivin vergi bazası</b> — gələcəkdə vergi məqsədləri üçün çıxılacaq məbləğ. <b>Öhdəliyin vergi bazası</b> — balans dəyəri minus gələcəkdə çıxılacaq məbləğ.',
        ]),
        { h: 'İstiqamət cədvəli', table: [['', 'Balans &gt; Vergi bazası', 'Balans &lt; Vergi bazası'], ['Aktiv', 'Vergi tutulan fərq → <b>DTL</b>', 'Çıxılan fərq → <b>DTA</b>'], ['Öhdəlik', 'Çıxılan fərq → <b>DTA</b>', 'Vergi tutulan fərq → <b>DTL</b>']] },
        U('Tipik nümunələr', [
          'DTL: sürətli vergi amortizasiyası; yenidən qiymətləndirmə artımı; kapitallaşdırılmış inkişaf xərcləri (vergidə dərhal çıxılıb); hesablanmış gəlir (vergidə alındıqda).',
          'DTA: ehtiyatlar və hesablanmış xərclər (vergidə ödənildikdə çıxılır); dəyərsizləşmə zərərləri; keçirilən vergi zərərləri.',
          'Daimi fərqlər (cərimələr, vergidən azad gəlir) — təxirə salınmış vergi yaratmır.',
        ]),
        U('Tanınma və ölçmə', [
          'DTL — demək olar ki, bütün vergi tutulan fərqlər üçün. İstisna: qudvilin ilkin tanınması; ilkin tanınma istisnası.',
          'DTA — yalnız gələcək vergi tutulan mənfəətin <b>ehtimal olunduğu</b> həddə; hər il nəzərdən keçirilir.',
          'Dərəcə: hesabat tarixinə qəbul edilmiş (və ya faktiki qəbul edilmiş), fərqin realizə olacağı dövrə aid. <b>Diskontlaşdırılmır.</b>',
          'Təxirə salınmış vergi əsas maddə ilə eyni yerdə tanınır: P/L, OCI (yenidən qiymətləndirmə) və ya kapital.',
          'Həmişə uzunmüddətli kimi təsnif edilir.',
        ]),
        E('Avadanlıq 100 000. Uçotda 10 il, vergidə 4 il düz xətt. Dərəcə 20%. 1-ci il.', ['Balans dəyəri = 90 000; vergi bazası = 75 000', 'Vergi tutulan fərq = 15 000', 'DTL = 15 000 × 20% = <b>3 000</b>', 'Yazılış: Dt Vergi xərci — Kt Təxirə salınmış vergi öhdəliyi']),
        E('Cari vergi 40 000. DTL: açılış 10 000, bağlanış 14 000.', ['Təxirə salınmış vergi xərci = 4 000', 'Vergi xərci = <b>44 000</b>']),
        W('P/L-ə DTL-in qalığı yox, il ərzində DƏYİŞMƏSİ gedir.', 'Yenidən qiymətləndirmə üzrə təxirə salınmış vergi OCI-də tanınır.'),
      ]),

    L('ias19', 'Öhdəliklər və gəlir', 'IAS 19 — İşçilərin mükafatlandırılması', T.OT,
      'Dörd kateqoriya: qısamüddətli, işdən sonrakı (pensiya), digər uzunmüddətli və işdən çıxma müavinətləri.',
      [
        U('Qısamüddətli', ['12 ay ərzində ödənilən: əmək haqqı, məzuniyyət, mükafat. Diskontlaşdırılmır; xidmət göstərildikcə xərc.', 'Yığılan (növbəti ilə keçən) məzuniyyət üçün öhdəlik hesablanır.']),
        U('Pensiya planları', [
          '<b>Müəyyən edilmiş haqq planı</b> — öhdəlik razılaşdırılmış haqlarla məhdudlaşır; aktuar və investisiya riski işçidədir. Xərc = dövrün haqqı.',
          '<b>Müəyyən edilmiş ödəniş planı</b> — müəssisə pensiyanın özünü vəd edir; risklər müəssisədədir. Öhdəlik proqnozlaşdırılan şərti vahid üsulu ilə ölçülür.',
          'Balansda: xalis öhdəlik = öhdəliyin diskontlaşdırılmış dəyəri − plan aktivlərinin ədalətli dəyəri.',
        ]),
        U('Müəyyən edilmiş ödəniş planı — hara nə gedir', [
          '<b>P/L:</b> cari xidmət dəyəri; keçmiş xidmət dəyəri (dərhal); xalis faiz = xalis öhdəlik × diskont dərəcəsi.',
          '<b>OCI:</b> yenidən ölçmələr — aktuar mənfəət/zərər, plan aktivlərinin gəliri ilə faiz arasındakı fərq. Sonradan P/L-ə keçmir.',
        ]),
        E('Öhdəlik: açılış 400 000; cari xidmət 30 000; faiz 20 000; ödənişlər 25 000; aktuar qiymətləndirmə ilə bağlanış 440 000.', ['Gözlənilən bağlanış = 400 + 30 + 20 − 25 = 425 min', 'Aktuar zərər = 440 − 425 = <b>15 000</b> → OCI']),
        U('İşdən çıxma müavinətləri', ['Müəssisə təklifi geri götürə bilmədikdə və ya əlaqəli restrukturizasiya xərcləri tanındıqda (hansı tezdirsə) tanınır.']),
      ]),

    // ================= MALİYYƏ ALƏTLƏRİ =================
    L('ifrs9', 'Maliyyə alətləri', 'IFRS 9 — Maliyyə alətləri', T.FI,
      'Üç blok: təsnifat və ölçmə, dəyərsizləşmə (gözlənilən kredit zərərləri), hecinq uçotu.',
      [
        U('Maliyyə aktivlərinin təsnifatı', [
          '<b>Borc alətləri</b> — iki test: biznes model və SPPI (pul axınları yalnız əsas məbləğ və faizdən ibarətdir).',
          '• Toplamaq üçün saxlanılır + SPPI → <b>amortizasiya edilmiş maya dəyəri (AC)</b>.',
          '• Toplamaq və satmaq + SPPI → <b>FVOCI</b> (faiz, ECL, məzənnə fərqi P/L-də; qalan dəyişiklik OCI-də, satışda P/L-ə keçir).',
          '• Digər hallar və ya SPPI-dən keçmir → <b>FVTPL</b>.',
          '<b>Kapital alətləri</b> — standart olaraq FVTPL; ticarət üçün deyilsə, geri dönməz seçimlə FVOCI (dividend P/L-də; yığılmış məbləğ satışda P/L-ə <u>keçmir</u>).',
          '<b>Törəmələr</b> — FVTPL.',
          'Reklassifikasiya yalnız biznes model dəyişdikdə (borc alətləri).',
        ]),
        U('İlkin və sonrakı ölçmə', [
          'İlkin: ədalətli dəyər ± əməliyyat xərcləri. FVTPL üçün əməliyyat xərcləri dərhal xərc. Aktiv üçün xərclər əlavə edilir, öhdəlik üçün çıxılır.',
          '<b>Effektiv faiz üsulu:</b> faiz = açılış balans × effektiv dərəcə; bağlanış = açılış + faiz − alınan/ödənilən pul.',
          'Maliyyə öhdəlikləri — əksəriyyəti AC; FVTPL kimi təyin edilənlərdə öz kredit riskinin təsiri OCI-də.',
        ]),
        E('İstiqraz: nominal 100 000, kupon 5%, 95 000-ə alınıb, effektiv dərəcə 6,4%.', ['Faiz gəliri = 95 000 × 6,4% = 6 080 (P/L)', 'Alınan kupon = 5 000', 'Bağlanış = 95 000 + 6 080 − 5 000 = <b>96 080</b>']),
        U('Dəyərsizləşmə — gözlənilən kredit zərərləri (ECL)', [
          'AC və FVOCI borc alətlərinə, icarə debitorlarına, müqavilə aktivlərinə tətbiq olunur. Kapital alətlərinə yox.',
          '<b>Mərhələ 1</b> — kredit riski əhəmiyyətli artmayıb: 12 aylıq ECL; faiz ümumi balansa.',
          '<b>Mərhələ 2</b> — əhəmiyyətli artıb (30 gün gecikmə ehtimalı): bütün müddət üzrə ECL; faiz ümumi balansa.',
          '<b>Mərhələ 3</b> — kredit-dəyərsizləşmiş (90 gün): bütün müddət üzrə ECL; faiz xalis balansa.',
          '<b>Sadələşdirilmiş yanaşma</b> (ticarət debitorları) — həmişə bütün müddət üzrə ECL, ehtiyat matrisi.',
          'ECL = borc məbləği × defolt ehtimalı × defolt zamanı itki.',
        ]),
        U('Tanınmanın dayandırılması', ['Aktiv: pul axınlarına hüquqlar bitib və ya risk və faydaların əhəmiyyətli hissəsi ötürülüb. Reqresli faktorinq — aktiv balansda qalır, alınan pul öhdəlikdir.', 'Öhdəlik: icra edilib, ləğv edilib və ya müddəti bitib; şərtlərin əhəmiyyətli dəyişməsi (10% testi) — köhnə silinir, yeni tanınır.']),
        U('Hecinq uçotu (qısa)', ['<b>Ədalətli dəyər hecinqi</b> — alət və hecinq olunan maddənin dəyişmələri P/L-də.', '<b>Pul axını hecinqi</b> — effektiv hissə OCI-də, qeyri-effektiv hissə P/L-də.', 'Xarici əməliyyata xalis investisiyanın hecinqi — pul axını hecinqi kimi.']),
        W('FVOCI borc aləti satışda P/L-ə keçir, FVOCI kapital aləti keçmir.', 'Faiz gəliri nominala yox, balans dəyərinə effektiv dərəcə ilə hesablanır.'),
      ]),

    L('ias32', 'Maliyyə alətləri', 'IAS 32 — Maliyyə alətləri: təqdimat', T.FI,
      'Alətin öhdəlik, yoxsa kapital olması hüquqi formaya deyil, mahiyyətə görə müəyyən edilir.',
      [
        U('Öhdəlik, yoxsa kapital', [
          '<b>Maliyyə öhdəliyi</b> — pul və ya digər maliyyə aktivini vermək üzrə müqavilə öhdəliyi.',
          '<b>Kapital aləti</b> — bütün öhdəliklər çıxıldıqdan sonra aktivlərdə qalıq pay; ödəniş etmək öhdəliyi yoxdur.',
          'Məcburi geri alınan və ya məcburi dividendli imtiyazlı səhmlər — <b>öhdəlik</b>; dividendləri faiz xərcidir.',
        ]),
        U('Mürəkkəb alətlər (konvertasiya olunan istiqraz)', ['1) Öhdəlik komponenti = gələcək pul axınlarının oxşar <u>konvertasiyasız</u> istiqrazın bazar faizi ilə diskontlaşdırılmış dəyəri.', '2) Kapital komponenti = daxilolma − öhdəlik (qalıq). Sonradan yenidən ölçülmür.', 'Əməliyyat xərcləri komponentlərə mütənasib bölünür.']),
        E('1 000 000 AZN, 3 il, kupon 5%, bazar faizi 8%.', ['Kuponlar: 50 000 × 2,5771 = 128 855', 'Nominal: 1 000 000 × 0,7938 = 793 832', 'Öhdəlik = 922 687; kapital = <b>77 313</b>', '1-ci il faiz xərci = 922 687 × 8% = 73 815 (kupon yox!)']),
        U('Digər qaydalar', ['<b>Öz səhmlərinin geri alınması</b> — kapitaldan çıxılır; alış, satış və ləğvdən mənfəət/zərər tanınmır.', 'Səhm emissiyası xərcləri — kapitaldan çıxılır.', 'Əvəzləşdirmə: hüquqi qüvvəli hüquq + xalis hesablaşma niyyəti.']),
      ]),

    L('ifrs13', 'Maliyyə alətləri', 'IFRS 13 — Ədalətli dəyərin ölçülməsi', T.OT,
      'Nə vaxt ədalətli dəyərin tətbiq olunacağını yox, onun NECƏ ölçüləcəyini müəyyən edir.',
      [
        U('Tərif', ['Ölçmə tarixində bazar iştirakçıları arasında adi əməliyyatda aktivin satışından <b>alınacaq</b> və ya öhdəliyin ötürülməsi üçün ödəniləcək qiymət — <b>çıxış qiyməti</b>.', 'Bazara əsaslanan ölçmədir, müəssisəyə xas deyil.', '<b>Əsas bazar</b> (ən böyük həcm); yoxdursa — ən əlverişli bazar.', 'Əməliyyat xərcləri qiyməti düzəltmir; nəqliyyat xərcləri (yer aktivin xüsusiyyətidirsə) nəzərə alınır.', 'Qeyri-maliyyə aktivləri — <b>ən yüksək və ən yaxşı istifadə</b>.']),
        U('İyerarxiya', ['<b>Səviyyə 1</b> — eyni aktivlər üçün fəal bazarda düzəlişsiz kotirovka qiymətləri.', '<b>Səviyyə 2</b> — birbaşa və ya dolayı müşahidə olunan digər girişlər (oxşar aktivlərin qiymətləri, faiz əyriləri).', '<b>Səviyyə 3</b> — müşahidə olunmayan girişlər.', 'Üsullar: bazar, gəlir (diskontlaşdırılmış pul axınları), xərc (əvəzetmə dəyəri) yanaşmaları.']),
      ]),

    // ================= QRUP =================
    L('ifrs10', 'Qrup hesabatları', 'IFRS 10 — Konsolidasiya', T.G,
      'Ana şirkət nəzarət etdiyi bütün müəssisələri konsolidasiya edir və qrupu vahid iqtisadi vahid kimi təqdim edir.',
      [
        U('Nəzarət — üç element birlikdə', ['<b>Hakimiyyət</b> — müvafiq fəaliyyətləri istiqamətləndirmək hüququ (adətən səs çoxluğu; həmçinin əsaslı potensial səs hüquqları, de-fakto nəzarət).', '<b>Dəyişən gəlirlərə</b> məruz qalma və ya hüquq.', 'Hakimiyyətdən gəlirlərə təsir üçün <b>istifadə imkanı</b>.']),
        U('Konsolidasiya proseduru', [
          '1) Aktiv, öhdəlik, gəlir və xərclər sətir-sətir 100% toplanır (pay 60% olsa belə).',
          '2) Ana şirkətin investisiyası ilə törəmənin alış tarixindəki kapitalı silinir → qudvil.',
          '3) <b>Qrupdaxili</b> qalıqlar, satışlar, dividendlər tam çıxarılır.',
          '4) <b>Reallaşmamış mənfəət</b> (qrupda qalan mallar) çıxarılır: ehtiyat və satıcının mənfəəti azaldılır. Satıcı törəmədirsə — NCI də payına düşəni daşıyır.',
          '5) Alış tarixindəki ədalətli dəyər düzəlişləri və onlardan yaranan əlavə amortizasiya nəzərə alınır.',
          '6) <b>NCI</b> kapitalda ayrıca; mənfəət və OCI ana şirkətin sahibləri ilə NCI arasında bölünür.',
        ]),
        { h: 'Əsas düsturlar', ul: [
          '<b>NCI (hesabat tarixində)</b> = alış tarixində NCI + NCI % × alışdan sonrakı düzəldilmiş mənfəət (− NCI-nin qudvil dəyərsizləşməsində payı, tam qudvil üsulunda).',
          '<b>Qrupun bölüşdürülməmiş mənfəəti</b> = ana şirkətinki + qrupun payı × törəmənin alışdan sonrakı mənfəəti − reallaşmamış mənfəət − qudvilin dəyərsizləşməsi (qrupun payı).',
          '<b>Reallaşmamış mənfəət:</b> əlavə (mark-up) m% → satış × m/(100+m); marja g% → satış × g%; qalan hissəyə vurulur.',
        ] },
        E('Ana şirkət törəməyə 60 000-ə mal satır (maya + 25%). İl sonunda yarısı anbardadır.', ['Mənfəət = 60 000 × 25/125 = 12 000', 'Reallaşmamış = 12 000 × ½ = <b>6 000</b>', 'Düzəliş: gəlir −60 000, maya −54 000, ehtiyat −6 000']),
        U('Digər', ['Eyni hesabat tarixi (fərq ≤ 3 ay) və vahid uçot siyasətləri.', 'Nəzarət itirilmədən payın dəyişməsi — kapital əməliyyatı (P/L yox).', 'Nəzarət itirildikdə — mənfəət/zərər P/L-də; qalan pay ədalətli dəyərlə.', 'İl ortasında alınan törəmənin nəticələri yalnız alış tarixindən daxil edilir.']),
        W('Törəmənin alışdan ƏVVƏLKİ mənfəəti qrupun mənfəətinə daxil deyil.', '"Əlavə" ilə "marja"nı qarışdırmayın.'),
      ]),

    L('ifrs3', 'Qrup hesabatları', 'IFRS 3 — Biznes birləşmələri', T.G,
      'Bütün biznes birləşmələri alış metodu ilə uçota alınır. Əsas hesablama — qudvil.',
      [
        U('Alış metodunun addımları', ['Alıcının və alış tarixinin (nəzarətin keçdiyi tarix) müəyyən edilməsi.', 'Müəyyən edilə bilən aktiv və öhdəliklərin <b>ədalətli dəyərlə</b> tanınması — o cümlədən alınan müəssisədə tanınmamış QMA və şərti öhdəliklər (cari öhdəlikdirsə, ehtimal aşağı olsa belə).', 'NCI-nin ölçülməsi və qudvilin hesablanması.']),
        U('Ödəniş', ['Ədalətli dəyərlə: pul, buraxılan səhmlər (bazar qiyməti ilə), təxirə salınmış ödəniş (diskontlaşdırılmış), <b>şərti ödəniş</b> (alış tarixindəki ədalətli dəyər).', 'Alış xərcləri (hüquqi, məsləhət) — <b>xərc</b>; səhm emissiyası xərcləri — kapitaldan.', 'Şərti ödənişin sonrakı dəyişməsi: öhdəlikdirsə P/L; kapitaldırsa yenidən ölçülmür.']),
        U('Qudvil', [
          '<b>Qudvil = ödəniş + NCI + əvvəl saxlanılan payın ədalətli dəyəri − xalis aktivlərin ədalətli dəyəri.</b>',
          'NCI iki üsulla: <b>ədalətli dəyər</b> (tam qudvil) və ya xalis aktivlərdə <b>proporsional pay</b> (qismən qudvil).',
          'Qudvil amortizasiya olunmur, hər il dəyərsizləşmə testi.',
          '<b>Sərfəli alış</b> (mənfi qudvil): yenidən yoxlamadan sonra dərhal P/L-də gəlir.',
          'Ölçmə dövrü — maksimum 12 ay.',
        ]),
        E('80% pay üçün 800 000. Xalis aktivlər (FV) 900 000. NCI-nin ədalətli dəyəri 210 000.', ['Tam qudvil: 800 000 + 210 000 − 900 000 = <b>110 000</b>', 'Proporsional: NCI = 20% × 900 000 = 180 000', 'Qismən qudvil: 800 000 + 180 000 − 900 000 = <b>80 000</b>']),
        W('Xalis aktivlər balans dəyəri ilə yox, ədalətli dəyərlə götürülür.', 'Alıcının planlaşdırdığı restrukturizasiya alış tarixində öhdəlik deyil.'),
      ]),

    L('ias28', 'Qrup hesabatları', 'IAS 28 və IFRS 11 — Asılı müəssisələr və birgə razılaşmalar', T.G,
      'Əhəmiyyətli təsir və birgə nəzarət — konsolidasiya yox, iştirak payı metodu.',
      [
        U('Əhəmiyyətli təsir', ['Maliyyə və əməliyyat siyasəti qərarlarında iştirak (nəzarət yox). Ehtimal: səs hüquqlarının <b>20%-dən 50%-dək</b>.', 'Göstəricilər: şurada təmsilçilik, siyasətin hazırlanmasında iştirak, əhəmiyyətli əməliyyatlar, kadr mübadiləsi.']),
        U('İştirak payı metodu', [
          'İlkin — maya dəyəri ilə.',
          '+ investorun asılı müəssisənin <b>mənfəətində payı</b> (P/L-də bir sətir) və OCI-də payı.',
          '− alınan <b>dividendlər</b> (gəlir deyil — investisiyanı azaldır).',
          'Reallaşmamış mənfəət investorun <b>payı həddində</b> çıxarılır.',
          'Qudvil investisiyanın tərkibindədir, ayrıca göstərilmir və amortizasiya olunmur; bütün investisiya dəyərsizləşməyə yoxlanılır.',
          'Zərərlər investisiyanı sıfıra endirdikdə — tanınma dayandırılır (öhdəlik yoxdursa).',
        ]),
        E('30% pay 200 000-ə alınıb. Mənfəət 100 000, dividend 40 000.', ['Mənfəət payı: +30 000', 'Dividend: −12 000', 'İnvestisiya = <b>218 000</b>; P/L-də 30 000']),
        U('IFRS 11 — Birgə razılaşmalar', ['<b>Birgə nəzarət</b> — müvafiq fəaliyyətlər üzrə qərarlar üçün yekdil razılıq.', '<b>Birgə əməliyyat</b> — tərəflərin aktivlərə hüquqları və öhdəliklər üzrə vəzifələri var: hər biri öz payını sətir-sətir tanıyır.', '<b>Birgə müəssisə</b> — tərəflərin xalis aktivlərə hüququ var: iştirak payı metodu. Proporsional konsolidasiya yoxdur.']),
        U('IAS 27 — Ayrıca hesabatlar', ['Törəmə, asılı və birgə müəssisələrə investisiyalar: maya dəyəri, IFRS 9 və ya iştirak payı metodu ilə.']),
      ]),

    // ================= TƏQDİMAT VƏ AÇIQLAMA =================
    L('ias7', 'Təqdimat və açıqlama', 'IAS 7 — Pul vəsaitlərinin hərəkəti', T.OT,
      'Pul axınları üç fəaliyyət üzrə təsnif edilir. Hesablama sualları adətən dolayı metoddan və "çatışmayan rəqəmi tap" tipindən olur.',
      [
        U('Təsnifat', [
          '<b>Əməliyyat</b> — əsas gəlir gətirən fəaliyyət: müştərilərdən daxilolmalar, təchizatçılara və işçilərə ödənişlər, vergi.',
          '<b>İnvestisiya</b> — uzunmüddətli aktivlərin alışı/satışı, verilmiş kreditlər, törəmənin alışı.',
          '<b>Maliyyələşdirmə</b> — səhm emissiyası, kreditlərin alınması/qaytarılması, icarə öhdəliyinin əsas məbləği, dividend.',
          'Faiz və dividend: ödənilən — əməliyyat və ya maliyyələşdirmə; alınan — əməliyyat və ya investisiya (ardıcıl).',
          'Pul ekvivalentləri — ilkin müddəti ≤ 3 ay olan yüksək likvidli investisiyalar. Qeyri-pul əməliyyatları hesabata daxil edilmir.',
        ]),
        U('Dolayı metod', ['Vergidən əvvəl mənfəət', '+ amortizasiya, dəyərsizləşmə, ehtiyatların artması; + faiz xərci', '− aktiv satışından mənfəət (+ zərər); − investisiya gəliri', '− ehtiyatların və debitorların artması (+ azalması)', '+ kreditorların artması (− azalması)', '= əməliyyatlardan pul; − ödənilmiş faiz və vergi']),
        { h: 'T-hesab məntiqi', ul: ['<b>Əsas vəsait alışı</b> = bağlanış − açılış + amortizasiya + satılanların balans dəyəri − yenidən qiymətləndirmə.', '<b>Ödənilmiş vergi</b> = açılış öhdəlik + vergi xərci − bağlanış öhdəlik.', '<b>Ödənilmiş dividend</b> = açılış bölüşdürülməmiş mənfəət + ilin mənfəəti − bağlanış.'] },
        E('Mənfəət 50 000; amortizasiya 8 000; debitor +5 000; ehtiyat −3 000; kreditor +2 000.', ['50 000 + 8 000 − 5 000 + 3 000 + 2 000 = <b>58 000</b>']),
        W('Aktivin artması pulu azaldır, öhdəliyin artması pulu artırır.'),
      ]),

    L('ias21', 'Təqdimat və açıqlama', 'IAS 21 — Xarici valyuta məzənnələrinin dəyişməsi', T.OT,
      'İki fərqli məsələ: xarici valyutada əməliyyatlar və xarici bölmənin hesabatlarının tərcüməsi.',
      [
        U('Valyutalar', ['<b>Funksional valyuta</b> — əsas iqtisadi mühitin valyutası (satış qiymətlərinə, əmək və material xərclərinə əsas təsir edən). Seçim deyil, faktdır.', '<b>Təqdimat valyutası</b> — istənilən ola bilər.']),
        U('Xarici valyutada əməliyyatlar', [
          'İlkin: əməliyyat tarixinin (spot) məzənnəsi ilə.',
          'Hesabat tarixində: <b>monetar maddələr</b> (pul, debitor, kreditor, kreditlər) — bağlanış məzənnəsi; fərq <b>P/L</b>.',
          '<b>Qeyri-monetar</b> maddələr tarixi dəyərlə (əsas vəsait, ehtiyat, avans) — yenidən hesablanmır.',
          'Qeyri-monetar maddələr ədalətli dəyərlə — ədalətli dəyərin müəyyən edildiyi tarixin məzənnəsi; fərq əsas maddənin getdiyi yerə.',
        ]),
        E('10 000 USD-lik mal nisyə alınıb (1,70). 31.12-də məzənnə 1,75; yanvarda 1,73 ilə ödənilib.', ['Alış: ehtiyat və borc 17 000', '31.12: borc 17 500 → zərər <b>500</b>; ehtiyat 17 000 qalır', 'Ödəniş: 17 300 → mənfəət 200 (növbəti il)']),
        U('Xarici əməliyyatın tərcüməsi', ['Aktiv və öhdəliklər (qudvil daxil) — <b>bağlanış</b> məzənnəsi.', 'Gəlir və xərclər — əməliyyat tarixi (praktikada <b>orta</b>) məzənnəsi.', 'Fərqlər — <b>OCI</b>; xarici əməliyyat satıldıqda P/L-ə keçir.']),
        W('Avans (qabaqcadan ödəniş) monetar maddə deyil.'),
      ]),

    L('ias33', 'Təqdimat və açıqlama', 'IAS 33 — Səhm üzrə mənfəət (EPS)', T.OT,
      'Adi səhmləri açıq bazarda dövriyyədə olan müəssisələr üçün məcburidir.',
      [
        U('Əsas EPS', [
          '= (xalis mənfəət − imtiyazlı dividendlər) / dövr ərzində dövriyyədə olan adi səhmlərin <b>orta çəkili</b> sayı.',
          '<b>Bazar qiymətinə emissiya</b> — buraxılış tarixindən vaxta mütənasib.',
          '<b>Bonus emissiyası, bölünmə</b> — resurs daxil olmur: ən erkən dövrün əvvəlindən baş vermiş kimi; müqayisəli EPS yenidən hesablanır.',
          '<b>Hüquq emissiyası</b> (bazardan aşağı) — bonus elementi var: əvvəlki səhmlər (hüquqdan əvvəlki qiymət / nəzəri hüquqsuz qiymət) əmsalına vurulur.',
        ]),
        E('Mənfəət 1 000 000; imtiyazlı dividend 100 000. 1 yanvar: 1 000 000 səhm; 1 oktyabr: bazar qiymətinə 600 000 səhm.', ['Orta çəkili = 1 000 000 + 600 000 × 3/12 = 1 150 000', 'EPS = 900 000 / 1 150 000 = <b>0,78</b>']),
        U('Azaldılmış EPS', [
          'Bütün <b>dilyutiv</b> potensial adi səhmlərin təsiri nəzərə alınır; antidilyutivlər daxil edilmir.',
          '<b>Konvertasiya olunan alətlər:</b> surətə + vergidən sonrakı qənaət edilən faiz; məxrəcə + konvertasiyadan səhmlər.',
          '<b>Opsionlar</b> (xəzinə səhmi üsulu): pulsuz səhmlər = opsion sayı × (1 − icra qiyməti / orta bazar qiyməti).',
        ]),
        E('Mənfəət 500 000; 1 000 000 səhm. 200 000 AZN 5% konvertasiya olunan istiqraz → 100 000 səhm; vergi 20%.', ['Surət: 500 000 + 10 000 × 0,8 = 508 000', 'Məxrəc: 1 100 000', 'Azaldılmış EPS = <b>0,46</b> (əsas 0,50)']),
      ]),

    L('ifrs5', 'Təqdimat və açıqlama', 'IFRS 5 — Satış üçün saxlanılan aktivlər və dayandırılmış fəaliyyət', T.OT,
      'Balans dəyəri istifadə yolu ilə deyil, satış yolu ilə bərpa olunacaq aktivlər ayrıca göstərilir.',
      [
        U('Təsnifat meyarları', ['Aktiv hazırkı vəziyyətində <b>dərhal satışa hazırdır</b>.', 'Satış <b>yüksək ehtimallıdır</b>: rəhbərlik plana sadiqdir, alıcı fəal axtarılır, qiymət ağlabatandır, satış <b>12 ay</b> ərzində gözlənilir.', 'Tərk ediləcək aktiv bu kateqoriyaya düşmür.']),
        U('Ölçmə və təqdimat', ['Təsnifatdan dərhal əvvəl müvafiq standartla ölçülür.', 'Sonra: <b>min</b>(balans dəyəri; ədalətli dəyər − satış xərcləri); fərq — dəyərsizləşmə zərəri.', '<b>Amortizasiya dayandırılır.</b>', 'Balansda digər aktivlərdən ayrıca (cari aktivlərdə).']),
        U('Dayandırılmış fəaliyyət', ['Xaric edilmiş və ya satış üçün saxlanılan, ayrıca əsas fəaliyyət sahəsi və ya coğrafi ərazini təmsil edən komponent.', 'P/L-də <b>bir məbləğ</b>: vergidən sonrakı nəticə + ölçmə/xaricolmadan mənfəət və ya zərər; müqayisəli məlumat yenidən təqdim edilir.']),
        E('Balans dəyəri 80 000; ədalətli dəyər 85 000; satış xərcləri 7 000.', ['FV − satış xərcləri = 78 000', 'min(80 000; 78 000) = <b>78 000</b>; zərər 2 000']),
      ]),

    L('ias24', 'Təqdimat və açıqlama', 'IAS 24 və IFRS 8 — Əlaqəli tərəflər, seqmentlər', T.OT,
      'Hər ikisi açıqlama standartıdır — tanınma və ölçməyə təsir etmir.',
      [
        U('IAS 24 — Kim əlaqəli tərəfdir', ['Nəzarət, birgə nəzarət və ya əhəmiyyətli təsirə malik şəxs və onun yaxın ailə üzvləri.', '<b>Əsas idarəedici heyət</b> və onların yaxın ailə üzvləri.', 'Ana, törəmə, qardaş (eyni qrupun) müəssisələri; asılı və birgə müəssisələr.', 'İşçilərin pensiya planı.', '<b>Deyil:</b> yalnız iqtisadi asılılıq əsasında tək müştəri/təchizatçı; maliyyə təminatçıları; həmkarlar ittifaqları; iki müəssisənin sadəcə ortaq direktoru olması.']),
        U('IAS 24 — Nə açıqlanır', ['Ana–törəmə münasibəti — əməliyyat olmasa da.', 'Əsas idarəedici heyətə ödənişlər (kateqoriyalar üzrə).', 'Əməliyyatlar: xarakter, məbləğ, qalıqlar, şərtlər, şübhəli borc ehtiyatları — qiymət tətbiq olunmasa belə.']),
        U('IFRS 8 — Əməliyyat seqmentləri', ['Səhmləri/borc alətləri açıq bazarda olan müəssisələr üçün.', 'Seqmentlər <b>əməliyyat qərarlarını qəbul edən baş şəxsin</b> baxdığı daxili hesabatlara əsaslanır.', 'Hesabat verilən seqment: gəlir, mənfəət/zərər və ya aktivlərin <b>10%</b>-i.', 'Hesabat verilən seqmentlər xarici gəlirin ən azı <b>75%</b>-ni əhatə etməlidir.', 'Gəlirin 10%-ni verən əsas müştəri açıqlanır.']),
      ]),

    // ================= DİGƏR =================
    L('ifrs1', 'Digər standartlar', 'IFRS 1 — MHBS-in ilk dəfə tətbiqi', T.N,
      'MHBS-ə ilk dəfə keçən müəssisə üçün qaydalar: ümumi prinsip retrospektiv tətbiqdir, lakin azadolmalar və istisnalar var.',
      [
        U('Əsas anlayışlar', ['<b>İlk MHBS hesabatları</b> — MHBS-ə uyğunluq barədə açıq və qeyd-şərtsiz bəyanat olan ilk illik hesabatlar.', '<b>Keçid tarixi</b> — tam müqayisəli məlumat təqdim edilən ən erkən dövrün əvvəli (ilk hesabat ili 2025-dirsə — 01.01.2024).', 'Keçid tarixinə <b>açılış MHBS balansı</b> hazırlanır.']),
        U('Açılış balansında', ['MHBS tələb edən bütün aktiv və öhdəliklər tanınır; icazə verməyənlər silinir; maddələr yenidən təsnif edilir və MHBS ilə ölçülür.', 'Tətbiq olunan siyasətlər — <b>ilk MHBS hesabat dövrünün sonunda</b> qüvvədə olan standartlar, bütün dövrlər üçün eyni.', 'Düzəlişlər birbaşa <b>bölüşdürülməmiş mənfəətə</b>.']),
        U('Azadolmalar və istisnalar', ['<b>Könüllü:</b> biznes birləşmələri yenidən hesablanmaya bilər; <b>şərti ilkin dəyər</b> — əsas vəsait keçid tarixində ədalətli dəyərlə ölçülüb maya kimi qəbul edilə bilər; yığılmış tərcümə fərqləri sıfırlana bilər.', '<b>Məcburi:</b> qiymətləndirmələr sonrakı məlumat əsasında dəyişdirilmir (səhv olmadıqca).']),
        U('Açıqlama', ['Kapitalın (keçid tarixinə və son əvvəlki dövrün sonuna) və ümumi məcmu gəlirin əvvəlki standartlardan MHBS-ə <b>üzləşdirilməsi</b>.']),
      ]),

    L('ifrs2', 'Digər standartlar', 'IFRS 2 — Səhm əsaslı ödəniş', T.N,
      'İşçilərə və ya təchizatçılara səhm və ya opsionlarla ödəniş — xərc tanınmalıdır.',
      [
        U('Növlər', ['<b>Kapitalla ödənilən</b>: Dt Xərc — Kt Kapital. İşçilər üçün <b>verilmə tarixindəki</b> ədalətli dəyər; sonradan yenidən ölçülmür.', '<b>Pulla ödənilən</b> (səhm qiymətinin artımına hüquqlar): Dt Xərc — Kt Öhdəlik; hər hesabat tarixində ədalətli dəyərlə <b>yenidən ölçülür</b>.']),
        U('Hüquq qazanma şərtləri', ['Xərc hüquq qazanma müddətinə bölünür.', '<b>Qeyri-bazar şərtləri</b> (xidmət müddəti, mənfəət hədəfi) — hüquq qazanacaq alətlərin <b>sayının</b> qiymətləndirilməsində; hər il yenilənir.', '<b>Bazar şərtləri</b> (səhm qiyməti) — opsionun ədalətli dəyərində nəzərə alınır; yerinə yetməsə də xərc geri qaytarılmır.']),
        { h: 'Düstur', ul: ['Yığılmış xərc = işçi sayı × qalacaqların payı × opsion sayı × ədalətli dəyər × keçən illər / ümumi illər.', 'İlin xərci = yığılmış (cari) − yığılmış (əvvəlki).'] },
        E('200 işçi × 100 opsion; ədalətli dəyər 6 AZN; 3 il. 1-ci il: 85%, 2-ci il: 80% qalacağı gözlənilir.', ['1-ci il: 200 × 85% × 100 × 6 × 1/3 = <b>34 000</b>', '2-ci il yığılmış: 200 × 80% × 100 × 6 × 2/3 = 64 000', '2-ci ilin xərci = <b>30 000</b>']),
      ]),

    L('ias34', 'Digər standartlar', 'IAS 34 və IAS 41', T.N,
      'Aralıq hesabat və kənd təsərrüfatı — imtahanda adətən bir-iki nəzəri sual.',
      [
        U('IAS 34 — Aralıq maliyyə hesabatı', ['Minimum: sıxlaşdırılmış hesabatlar və seçilmiş izahlı qeydlər.', 'İllik hesabatlardakı ilə <b>eyni uçot siyasətləri</b>; ölçmə ilin əvvəlindən hesabat tarixinədək əsasda.', 'Mövsümi gəlirlər və qeyri-bərabər xərclər qabaqcadan tanınmır və təxirə salınmır.', 'Mənfəət vergisi — <b>gözlənilən illik orta çəkili effektiv dərəcə</b> ilə.', 'Müqayisə: balans — əvvəlki ilin sonu ilə; P/L — əvvəlki ilin müvafiq dövrü ilə.']),
        U('IAS 41 — Kənd təsərrüfatı', ['<b>Bioloji aktivlər</b> — ilkin və hər hesabat tarixində <b>ədalətli dəyər − satış xərcləri</b>; dəyişikliklər <b>P/L</b>-də.', '<b>Kənd təsərrüfatı məhsulu</b> — yığım anında ədalətli dəyər − satış xərcləri; sonra IAS 2.', '<b>Meyvə verən bitkilər</b> — IAS 16; üzərindəki məhsul IAS 41.', 'Şərtsiz qrant — alınacaq olduqda P/L; şərtli — şərtlər ödəndikdə.']),
        E('50 baş: ilin əvvəli 1 000 AZN/baş, sonu 1 200 AZN/baş; satış xərcləri 5%.', ['(1 200 − 1 000) × 95% × 50 = <b>9 500</b> → P/L']),
        U('Bilmək faydalıdır', ['<b>IAS 29</b> — hiperinflyasiya (3 ildə məcmu ~100%): qeyri-monetar maddələr indekslə yenidən hesablanır.', '<b>IFRS 7</b> — kredit, likvidlik və bazar riskləri barədə açıqlamalar.', '<b>IFRS 12</b> — digər müəssisələrdə iştirak barədə açıqlamalar.', '<b>IFRS 17</b> — sığorta müqavilələri; <b>IFRS 6</b> — faydalı qazıntıların kəşfiyyatı.']),
      ]),

    L('formulas', 'Digər standartlar', 'Formullar və son təkrar', undefined,
      'İmtahandan əvvəlki axşam üçün bir səhifə.',
      [
        U('Diskontlaşdırma', ['Diskont faktoru = 1 / (1 + r)<sup>n</sup>', 'Annuitet faktoru (ödəniş dövrün sonunda) = (1 − (1 + r)<sup>−n</sup>) / r', 'Ödəniş dövrün əvvəlində: 1 + (n − 1) dövrün annuitet faktoru']),
        { h: 'Tez-tez lazım olan faktorlar', table: [['', '5%', '8%', '10%'], ['Diskont, 1 il', '0,9524', '0,9259', '0,9091'], ['Diskont, 2 il', '0,9070', '0,8573', '0,8264'], ['Diskont, 3 il', '0,8638', '0,7938', '0,7513'], ['Annuitet, 3 il', '2,7232', '2,5771', '2,4869'], ['Annuitet, 5 il', '4,3295', '3,9927', '3,7908']] },
        U('Aktivlər', ['Düz xətt = (dəyər − ləğv dəyəri) / müddət; azalan qalıq = balans × %', 'NRV = satış qiyməti − tamamlama − satış xərcləri; ehtiyat = min(maya; NRV)', 'Bərpa olunan məbləğ = max(FV − satış xərcləri; istifadə dəyəri)', 'Satış üçün saxlanılan = min(balans; FV − satış xərcləri)', 'Borc xərcləri: xüsusi kredit = faiz − investisiya gəliri; ümumi = xərclər × orta dərəcə']),
        U('Öhdəliklər və kapital', ['İcarə: öhdəlik = PV(ödənişlər); bağlanış = açılış × (1 + r) − ödəniş', 'Təxirə salınmış vergi = (balans − vergi bazası) × dərəcə', 'Ehtiyat: gözlənilən dəyər = Σ ehtimal × məbləğ', 'AC: bağlanış = açılış × (1 + effektiv dərəcə) − kupon', 'Konvertasiya: kapital = daxilolma − PV(öhdəlik, bazar faizi ilə)', 'ECL = məbləğ × defolt ehtimalı × defolt zamanı itki']),
        U('Qrup və digər', ['Qudvil = ödəniş + NCI − xalis aktivlər (FV)', 'İştirak payı: investisiya = maya + % × mənfəət − % × dividend', 'Reallaşmamış mənfəət: əlavə m% → satış × m/(100+m)', 'EPS = (mənfəət − imtiyazlı dividend) / orta çəkili səhm sayı', 'Opsionlar: pulsuz səhmlər = say × (1 − icra qiyməti / bazar qiyməti)', 'IFRS 2: say × ədalətli dəyər × keçən il / ümumi il']),
        W('Sualın sonunu oxuyun: "balans dəyəri", "xərc", yoxsa "zərər" soruşulur?', 'İl ortası tarixlərdə ayları sayın.', 'Açıq tapşırıqlar daha çox bal verir — onlara kifayət qədər vaxt saxlayın.', 'Səhv cavaba görə bal çıxılıb-çıxılmadığını DİM-in "İştirakçının yaddaşı"nda yoxlayın; çıxılmırsa, heç bir sualı boş qoymayın.'),
      ]),
  ];
})();
