// Əlavə sual bankı (2-ci paket). Struktur questions.js ilə eynidir.
let n = 1000;
const C = (topic, text, options, answer, explanation) => ({ id: 'c' + ++n, type: 'closed', tracks: ['mhbs'], topic, text, options, answer, explanation });
const O = (topic, text, answer, explanation, tolerance, unit = 'AZN') => ({ id: 'o' + ++n, type: 'open', tracks: ['mhbs'], topic, text, answer, explanation, unit, tolerance });

const T = {
  F: 'Konseptual əsaslar / IAS 1', E: 'IAS 8 / IAS 10', I2: 'IAS 2 Ehtiyatlar', I16: 'IAS 16 Əsas vəsaitlər',
  I36: 'IAS 36 Dəyərsizləşmə', I38: 'IAS 38 / 40 / 23 / 20', L: 'IFRS 16 İcarə', R: 'IFRS 15 Gəlir',
  P: 'IAS 37 Ehtiyatlar', X: 'IAS 12 Mənfəət vergisi', FI: 'IFRS 9 / IAS 32', G: 'IFRS 10 / 3 / IAS 28',
  OT: 'IAS 7 / 21 / 33 / 19 / 13 / 5 / 24',
};

module.exports = [
  // ===================== QAPALI =====================
  // Konseptual əsaslar / IAS 1
  C(T.F, 'Konseptual əsaslara görə hansı gücləndirici keyfiyyət xüsusiyyətidir?', ['Uyğunluq', 'Düzgün təqdimat', 'Müqayisəlilik', 'Əhəmiyyətlilik'], 2, 'Gücləndirici: müqayisəlilik, yoxlanıla bilmə, vaxtlılıq, başadüşülənlik.'),
  C(T.F, 'Əhəmiyyətlilik (materiality) konseptual əsaslarda hansı xüsusiyyətin aspektidir?', ['Düzgün təqdimatın', 'Uyğunluğun', 'Müqayisəliliyin', 'Vaxtlılığın'], 1, 'Əhəmiyyətlilik — müəssisəyə xas uyğunluq aspektidir.'),
  C(T.F, 'Düzgün təqdimatın komponentləri hansılardır?', ['Tamlıq, neytrallıq, səhvsizlik', 'Ehtiyatlılıq, müqayisəlilik, vaxtlılıq', 'Uyğunluq, əhəmiyyətlilik', 'Yoxlanıla bilmə, başadüşülənlik'], 0, 'Tam, neytral və səhvsiz təsvir.'),
  C(T.F, 'Konseptual əsaslarda hansı ölçmə əsası "cari dəyər" qrupuna aid DEYİL?', ['Ədalətli dəyər', 'İstifadə dəyəri', 'Cari maya dəyəri', 'Tarixi maya dəyəri'], 3, 'Tarixi maya dəyəri ayrıca qrupdur.'),
  C(T.F, 'IAS 1-ə görə xərclərin təhlili hansı əsaslarla təqdim edilə bilər?', ['Yalnız funksiyaya görə', 'Yalnız xarakterinə görə', 'Xarakterinə və ya funksiyasına görə', 'Seqmentlərə görə'], 2, 'IAS 1.99.'),
  C(T.F, 'Hesabat dövrü ərzində kreditin şərtləri pozulub və kreditor tələb etdikdə dərhal ödəniş hüququ yaranıb. Hesabat tarixindən sonra kreditor güzəşt verib. Kredit:', ['Uzunmüddətli', 'Qısamüddətli', 'Kapital', 'Şərti öhdəlik'], 1, 'Hesabat tarixində təxirə salma hüququ yox idi — qısamüddətli (IAS 1.74).'),
  C(T.F, 'IAS 1-ə görə mənfəət və ya zərər hesabatında "fövqəladə maddələr":', ['Ayrıca sətirdə göstərilir', 'Göstərilməsi qadağandır', 'Yalnız qeydlərdə', 'Kapitalda'], 1, 'IAS 1.87 — fövqəladə maddələr təqdim edilmir.'),
  C(T.F, 'Rəhbərlik müəssisəni ləğv etmək niyyətindədirsə, maliyyə hesabatları:', ['Fəaliyyətin fasiləsizliyi əsasında hazırlanır', 'Fəaliyyətin fasiləsizliyi əsasında hazırlanmır, bu açıqlanır', 'Hazırlanmır', 'Yalnız pul axını hesabatı hazırlanır'], 1, 'IAS 1.25.'),

  // IAS 8 / 10
  C(T.E, 'Yeni MHBS-in ilk dəfə tətbiqi zamanı keçid müddəaları yoxdursa:', ['Perspektiv tətbiq', 'Retrospektiv tətbiq', 'Tətbiq edilmir', 'Seçim'], 1, 'IAS 8.19.'),
  C(T.E, 'Retrospektiv tətbiq qeyri-mümkün (impracticable) olduqda:', ['Tətbiqdən imtina olunur', 'Mümkün olan ən erkən dövrdən tətbiq olunur', 'Səhv kimi qeyd olunur', 'Cari ilə tam yazılır'], 1, 'IAS 8.24.'),
  C(T.E, 'Şübhəli borclar üzrə ehtiyat faizinin dəyişdirilməsi:', ['Uçot siyasəti dəyişikliyi', 'Uçot qiymətləndirməsinin dəyişməsi', 'Səhvin düzəldilməsi', 'Düzəliş tələb edən hadisə'], 1, 'Qiymətləndirmə — perspektiv.'),
  C(T.E, 'Hesabat tarixindən sonra müəssisənin fəaliyyətini davam etdirə bilməyəcəyi məlum olarsa:', ['Yalnız açıqlanır', 'Hesabatlar fasiləsizlik əsasında hazırlanmamalıdır', 'Heç nə edilmir', 'Növbəti ilə düzəliş'], 1, 'IAS 10.14.'),
  C(T.E, 'Hesabat tarixindən sonra əvvəlki ilin satışlarına aid endirimlərin müəyyənləşməsi:', ['Düzəliş tələb etməyən hadisə', 'Düzəliş tələb edən hadisə', 'Uçot siyasəti dəyişikliyi', 'Şərti aktiv'], 1, 'Hesabat tarixində mövcud olan şərtləri dəqiqləşdirir.'),
  C(T.E, 'Hesabat tarixindən sonra böyük törəmə müəssisənin alınması:', ['Düzəliş tələb edən hadisə', 'Düzəliş tələb etməyən, açıqlanan hadisə', 'Nəzərə alınmır', 'Qudvil kimi tanınır'], 1, 'IAS 10.22.'),

  // IAS 2
  C(T.I2, 'Xidmət göstərən müəssisədə ehtiyatların maya dəyərinə nə daxildir?', ['Satış heyətinin əmək haqqı', 'Xidmətə birbaşa cəlb olunmuş işçilərin əmək haqqı', 'Ümumi inzibati xərclər', 'Reklam'], 1, 'Birbaşa əmək və aid qaimə xərcləri.'),
  C(T.I2, 'Bioloji aktivlərdən yığılmış kənd təsərrüfatı məhsulu ilkin olaraq necə ölçülür?', ['Maya dəyəri ilə', 'Yığım anında ədalətli dəyər − satış xərcləri', 'NRV', 'Sıfır'], 1, 'IAS 41 — sonra IAS 2 üzrə "maya" kimi.'),
  C(T.I2, 'Əvvəllər silinmiş ehtiyatın NRV-si artdıqda:', ['Bərpa edilmir', 'İlkin silinmə həddində bərpa olunur', 'Ədalətli dəyərə qədər artırılır', 'OCI-də göstərilir'], 1, 'IAS 2.33.'),
  C(T.I2, 'Uzadılmış ödəniş şərtləri ilə alınan ehtiyatlarda faiz elementi:', ['Maya dəyərinə daxildir', 'Maliyyələşdirmə müddəti ərzində faiz xərci kimi tanınır', 'Gəlir kimi', 'Nəzərə alınmır'], 1, 'IAS 2.18.'),
  C(T.I2, 'Müqavilə ilə satılacaq ehtiyatlar üçün NRV hansı qiymətə əsaslanır?', ['Bazar qiyməti', 'Müqavilə qiyməti', 'Maya dəyəri', 'Orta qiymət'], 1, 'IAS 2.31.'),

  // IAS 16
  C(T.I16, 'Əsas vəsaitin əhəmiyyətli komponentləri (məs. təyyarənin mühərriki):', ['Birlikdə amortizasiya edilir', 'Ayrıca amortizasiya edilir', 'Amortizasiya edilmir', 'Xərcə silinir'], 1, 'IAS 16.43 — komponent yanaşması.'),
  C(T.I16, 'Gündəlik təmir və texniki xidmət xərcləri:', ['Kapitallaşdırılır', 'Xərc kimi tanınır', 'Ehtiyat kimi', 'Qudvilə'], 1, 'IAS 16.12.'),
  C(T.I16, 'Mübadilə yolu ilə (kommersiya mahiyyətli) alınan əsas vəsait ölçülür:', ['Verilən aktivin balans dəyəri ilə', 'Ədalətli dəyərlə', 'Sıfırla', 'Nominal dəyərlə'], 1, 'IAS 16.24.'),
  C(T.I16, 'Ləğv dəyəri və faydalı müddət ən azı nə vaxt nəzərdən keçirilir?', ['Hər 5 ildən bir', 'Hər maliyyə ilinin sonunda', 'Heç vaxt', 'Yalnız satışda'], 1, 'IAS 16.51.'),
  C(T.I16, 'Yenidən qiymətləndirmə ehtiyatının aktiv istifadə edildikcə köçürülməsi:', ['P/L-ə', 'Birbaşa bölüşdürülməmiş mənfəətə', 'OCI-yə', 'Qadağandır'], 1, 'IAS 16.41 — P/L-dən keçmir.'),
  C(T.I16, 'Ehtiyat hissələri və xidmət avadanlığı nə vaxt əsas vəsait kimi tanınır?', ['Həmişə', 'Bir dövrdən artıq istifadə gözlənildikdə və tərifə uyğun olduqda', 'Heç vaxt', 'Dəyəri 1000 AZN-dən çox olduqda'], 1, 'IAS 16.8.'),
  C(T.I16, 'Amortizasiya nə vaxt dayandırılır?', ['Aktiv boş qaldıqda', 'Aktiv satış üçün saxlanılan kimi təsnif edildikdə və ya tanınması dayandırıldıqda', 'Bazar dəyəri artdıqda', 'Təmirdə olduqda'], 1, 'IAS 16.55 — boş qalma amortizasiyanı dayandırmır.'),

  // IAS 36
  C(T.I36, 'Hansı dəyərsizləşmənin XARİCİ əlamətidir?', ['Aktivin fiziki zədələnməsi', 'Bazar faiz dərəcələrinin artması', 'Aktivin boş qalması', 'Restrukturizasiya planı'], 1, 'IAS 36.12 — xarici mənbələr.'),
  C(T.I36, 'İstifadə dəyərinin hesablanmasına nə daxil EDİLMİR?', ['Davamlı istifadədən pul axınları', 'Gələcək restrukturizasiyadan (hələ öhdəlik götürülməmiş) gözlənilən pul axınları', 'Xaric olunmadan xalis pul axını', 'Diskont dərəcəsi'], 1, 'IAS 36.44.'),
  C(T.I36, 'İstifadə dəyəri üçün diskont dərəcəsi:', ['Vergidən sonrakı', 'Vergidən əvvəlki', 'Risksiz dərəcə', 'Kredit faizi'], 1, 'IAS 36.55.'),
  C(T.I36, 'Yenidən qiymətləndirilmiş aktivin dəyərsizləşmə zərəri:', ['Həmişə P/L-də', 'Yenidən qiymətləndirmə ehtiyatı həddində OCI-də, qalanı P/L-də', 'Yalnız OCI-də', 'Tanınmır'], 1, 'IAS 36.61.'),
  C(T.I36, 'Dəyərsizləşmə bərpa edildikdə aktivin yeni balans dəyəri:', ['Bərpa olunan məbləğə bərabərdir', 'Dəyərsizləşmə olmasaydı olacaq (amortizasiya çıxılmış) balans dəyərini aşa bilməz', 'İlkin dəyərə qayıdır', 'Ədalətli dəyərə bərabərdir'], 1, 'IAS 36.117.'),

  // IAS 38 / 40 / 23 / 20
  C(T.I38, 'Müddəti qeyri-müəyyən olan qeyri-maddi aktiv:', ['Amortizasiya olunur 20 il', 'Amortizasiya olunmur, hər il dəyərsizləşmə testi', 'Xərcə silinir', 'Qudvilə birləşdirilir'], 1, 'IAS 38.107-108.'),
  C(T.I38, 'Biznes birləşməsində alınan, alıcı tərəfindən əvvəl tanınmamış tədqiqat layihəsi:', ['Tanınmır', 'Ədalətli dəyərlə ayrıca aktiv kimi tanınır', 'Qudvilə daxil edilir', 'Xərcdir'], 1, 'IAS 38.34.'),
  C(T.I38, 'Reklam və təbliğat xərcləri:', ['Qeyri-maddi aktiv', 'Xərc', 'Ehtiyat', 'Əsas vəsait'], 1, 'IAS 38.69.'),
  C(T.I38, 'İnvestisiya mülkiyyəti maya dəyəri modeli ilə ölçüldükdə:', ['Ədalətli dəyər açıqlanmır', 'Ədalətli dəyər qeydlərdə açıqlanır', 'Amortizasiya olunmur', 'OCI-də yenidən qiymətləndirilir'], 1, 'IAS 40.79.'),
  C(T.I38, 'Əməliyyat icarəsinə verilmiş, ana şirkətin törəmə müəssisəsinə icarəyə verilən bina konsolidasiya edilmiş hesabatlarda:', ['İnvestisiya mülkiyyəti', 'Əsas vəsait (qrup tərəfindən istifadə olunur)', 'Ehtiyat', 'Maliyyə aktivi'], 1, 'Qrup baxımından sahibkar istifadəsi.'),
  C(T.I38, 'İnvestisiya mülkiyyətinin əsas vəsaitə köçürülməsi (ədalətli dəyər modeli) zamanı yeni maya dəyəri:', ['Köhnə maya dəyəri', 'İstifadə dəyişdiyi tarixdəki ədalətli dəyər', 'Sıfır', 'Balans dəyəri − amortizasiya'], 1, 'IAS 40.60.'),
  C(T.I38, 'Hansı uyğun aktiv (qualifying asset) DEYİL?', ['Tikilən zavod', 'Qısa müddətdə istehsal olunan ehtiyatlar', 'Uzunmüddətli inkişaf layihəsi', 'Tikilən investisiya mülkiyyəti'], 1, 'IAS 23.7 — qısa müddətdə hazır olan ehtiyatlar deyil.'),
  C(T.I38, 'Gəlirlə bağlı qrantlar P/L-də necə təqdim edilə bilər?', ['Yalnız gəlir kimi', 'Ayrıca gəlir kimi və ya müvafiq xərcdən çıxılmaqla', 'Yalnız kapitalda', 'OCI-də'], 1, 'IAS 20.29.'),
  C(T.I38, 'Güzəştli faizlə dövlət krediti alındıqda faiz fayda:', ['Nəzərə alınmır', 'Dövlət qrantı kimi uçota alınır', 'Kapitala əlavə edilir', 'Gəlir kimi dərhal'], 1, 'IAS 20.10A.'),

  // IFRS 16
  C(T.L, 'İcarə öhdəliyinə hansı ödəniş daxil edilir?', ['Satışdan asılı dəyişən ödənişlər', 'İstifadəsi əsaslı şəkildə müəyyən olan alış opsionunun qiyməti', 'Gələcək təmir xərcləri', 'Sığorta (icarədən kənar xidmət)'], 1, 'IFRS 16.27(d).'),
  C(T.L, 'İstifadə hüququ aktivi hansı müddət ərzində amortizasiya edilir (mülkiyyət ötürülmürsə)?', ['Aktivin faydalı müddəti', 'İcarə müddəti və faydalı müddətin qısası', 'Həmişə 5 il', 'İcarə müddəti və faydalı müddətin uzunu'], 1, 'IFRS 16.32.'),
  C(T.L, 'Satış və geri icarə (sale and leaseback) zamanı ötürmə IFRS 15 üzrə satışdırsa, satıcı-icarəçi:', ['Bütün mənfəəti tanıyır', 'Yalnız alıcıya ötürülmüş hüquqlara aid mənfəəti tanıyır', 'Mənfəət tanımır', 'Mənfəəti OCI-də tanıyır'], 1, 'IFRS 16.100.'),
  C(T.L, 'Müqavilə icarəni ehtiva edirmi — əsas meyar:', ['Ödənişin olması', 'Müəyyən aktivin istifadəsinə nəzarət hüququnun ötürülməsi', 'Müddətin 1 ildən çox olması', 'Mülkiyyətin ötürülməsi'], 1, 'IFRS 16.9.'),
  C(T.L, 'İcarəyə verənin maliyyə icarəsində ilkin tanıdığı aktiv:', ['Əsas vəsait', 'İcarəyə xalis investisiyaya bərabər debitor borcu', 'İstifadə hüququ aktivi', 'İnvestisiya mülkiyyəti'], 1, 'IFRS 16.67.'),
  C(T.L, 'Əməliyyat icarəsində icarəyə verən icarə gəlirini:', ['Pul alındıqda', 'Adətən düz xətt üsulu ilə', 'Müqavilə sonunda', 'OCI-də'], 1, 'IFRS 16.81.'),

  // IFRS 15
  C(T.R, 'Mal və xidmət nə vaxt "ayrıca (distinct)" sayılır?', ['Ayrıca qiymətə malikdirsə', 'Müştəri ondan ayrıca faydalana bilirsə və müqavilədə ayrıca müəyyən edilə bilirsə', 'Fərqli vaxtlarda ötürülürsə', 'Vergiyə cəlb olunursa'], 1, 'IFRS 15.27.'),
  C(T.R, 'Müştəriyə ödənilən (məs. yerləşdirmə haqqı) məbləğ — müqabilində ayrıca mal/xidmət alınmırsa:', ['Xərcdir', 'Əməliyyat qiymətinin azalmasıdır', 'Aktivdir', 'OCI'], 1, 'IFRS 15.70.'),
  C(T.R, 'Əhəmiyyətli maliyyələşdirmə komponenti nəzərə alınmaya bilər, əgər ödəniş ilə ötürmə arasındakı müddət:', ['5 ildən azdırsa', '1 ildən azdırsa', '2 ildən azdırsa', 'Heç vaxt'], 1, 'IFRS 15.63 praktik vasitə.'),
  C(T.R, 'Bill-and-hold razılaşmasında gəlir nə zaman tanınır?', ['Faktura verildikdə', 'Müştəri nəzarəti əldə etdikdə (xüsusi meyarlar ödəndikdə)', 'Pul alındıqda', 'Mal göndərildikdə'], 1, 'IFRS 15.B79-B82.'),
  C(T.R, 'Müqavilə əldə etmək üçün çəkilən əlavə xərclər (satış komissiyası):', ['Həmişə xərc', 'Bərpa olunacağı gözlənilirsə aktiv kimi tanınır', 'Gəlirdən çıxılır', 'Kapitala'], 1, 'IFRS 15.91 (≤1 il olduqda xərc kimi praktik vasitə).'),
  C(T.R, 'Konsiqnasiyaya verilmiş mallar üzrə gəlir (konsiqnant) nə zaman tanınır?', ['Mallar konsiqnatora göndərildikdə', 'Mallar son müştəriyə satıldıqda (nəzarət ötürüldükdə)', 'Müqavilə bağlandıqda', 'Heç vaxt'], 1, 'Konsiqnator nəzarət əldə etmir.'),
  C(T.R, 'Lisenziya "giriş hüququ" (right to access) xarakterlidirsə, gəlir:', ['Bir anda tanınır', 'Zamanla tanınır', 'Tanınmır', 'Ödəniş zamanı'], 1, 'IFRS 15.B58.'),

  // IAS 37
  C(T.P, 'Gələcək əməliyyat zərərləri üçün ehtiyat:', ['Tanınır', 'Tanınmır', 'Açıqlanır və tanınır', 'Yalnız restrukturizasiyada'], 1, 'IAS 37.63.'),
  C(T.P, 'Ehtiyatın ödənilməsi üçün üçüncü tərəfdən kompensasiya (sığorta):', ['Ehtiyatdan çıxılır', 'Demək olar ki, dəqiq olduqda ayrıca aktiv kimi tanınır', 'Gəlir kimi dərhal', 'Tanınmır'], 1, 'IAS 37.53.'),
  C(T.P, 'Restrukturizasiya ehtiyatına nə daxil edilə bilər?', ['İşçilərin yenidən hazırlığı', 'İşdən çıxma kompensasiyaları', 'Marketinq', 'Yeni sistemlərə investisiya'], 1, 'IAS 37.81 — davam edən fəaliyyətə aid xərclər daxil deyil.'),
  C(T.P, 'Qanunla tələb olunan, lakin hələ quraşdırılmamış tüstü filtri üçün (qanun qüvvəyə minməyib):', ['Ehtiyat tanınır', 'Ehtiyat tanınmır', 'Şərti aktiv', 'Kapital ehtiyatı'], 1, 'Cari öhdəlik yoxdur.'),
  C(T.P, 'Pulun zaman dəyəri əhəmiyyətlidirsə, ehtiyat:', ['Nominal məbləğlə', 'Diskontlaşdırılmış dəyərlə', 'Maksimum məbləğlə', 'Ədalətli dəyərlə'], 1, 'IAS 37.45; diskontun açılması — maliyyə xərci.'),
  C(T.P, 'Neftin çıxarılması nəticəsində yaranan ərazi bərpası (hüquqi öhdəlik) xərci:', ['Xərc kimi tanınır', 'Ehtiyat və eyni zamanda əsas vəsaitin dəyərinə əlavə', 'Yalnız açıqlanır', 'Kapitaldan çıxılır'], 1, 'IAS 37 + IAS 16.16(c).'),

  // IAS 12
  C(T.X, 'Qudvilin ilkin tanınmasından yaranan vergi tutulan müvəqqəti fərq üzrə:', ['DTL tanınır', 'DTL tanınmır', 'DTA tanınır', 'Cari vergi'], 1, 'IAS 12.15(a).'),
  C(T.X, 'İstifadə olunmamış vergi zərərləri üzrə DTA tanınır:', ['Həmişə', 'Gələcək vergi tutulan mənfəət ehtimalı olduqda', 'Heç vaxt', 'Yalnız 3 il ərzində'], 1, 'IAS 12.34.'),
  C(T.X, 'Yenidən qiymətləndirmə artımına aid təxirə salınmış vergi harada tanınır?', ['P/L', 'OCI', 'Qudvil', 'Tanınmır'], 1, 'IAS 12.61A — əsas maddə ilə eyni yerdə.'),
  C(T.X, 'Cərimələr (vergi məqsədləri üçün heç vaxt çıxılmayan) yaradır:', ['Müvəqqəti fərq', 'Daimi fərq (təxirə salınmış vergi yoxdur)', 'DTA', 'DTL'], 1, 'Vergi bazası balans dəyərinə bərabərdir.'),
  C(T.X, 'Hesablanmış, lakin vergi məqsədləri üçün yalnız ödəniş zamanı çıxılan xərc (öhdəlik) yaradır:', ['DTL', 'DTA', 'Daimi fərq', 'Heç nə'], 1, 'Öhdəliyin vergi bazası sıfırdır — çıxılan fərq.'),

  // IFRS 9 / IAS 32
  C(T.FI, 'Biznes modeli həm pul axınlarını toplamaq, həm də satmaq olan, SPPI-dən keçən borc aləti:', ['AC', 'FVOCI', 'FVTPL', 'Maya'], 1, 'IFRS 9.4.1.2A.'),
  C(T.FI, 'Hansı alət SPPI testindən KEÇMİR?', ['Sabit faizli istiqraz', 'Konvertasiya olunan istiqraz (aktiv kimi saxlanılan)', 'Dəyişən faizli kredit (LIBOR+)', 'Ticarət debitor borcu'], 1, 'Pul axınları səhm qiymətindən asılıdır.'),
  C(T.FI, 'Ticarət debitor borcları üçün (əhəmiyyətli maliyyə komponenti yoxdur) ECL:', ['12 aylıq', 'Sadələşdirilmiş yanaşma — həmişə bütün müddət üzrə', 'Tanınmır', 'Yalnız gecikmədə'], 1, 'IFRS 9.5.5.15.'),
  C(T.FI, 'Maliyyə öhdəliklərinin əksəriyyəti sonradan necə ölçülür?', ['Ədalətli dəyər', 'Amortizasiya edilmiş maya dəyəri', 'Nominal', 'Maya'], 1, 'IFRS 9.4.2.1.'),
  C(T.FI, 'Emitentin məcburi geri satın alınacaq imtiyazlı səhmləri (sabit dividend):', ['Kapital', 'Maliyyə öhdəliyi', 'Törəmə', 'Şərti öhdəlik'], 1, 'IAS 32.18(a) — mahiyyət formadan üstündür.'),
  C(T.FI, 'Geri satın alınmış öz səhmləri (treasury shares):', ['Aktiv kimi', 'Kapitaldan çıxılır', 'Xərc', 'Maliyyə aktivi FVTPL'], 1, 'IAS 32.33 — mənfəət/zərər tanınmır.'),
  C(T.FI, 'Borc alətlərinin reklassifikasiyası nə zaman mümkündür?', ['İstənilən vaxt', 'Yalnız biznes modeli dəyişdikdə', 'Heç vaxt', 'Hər il'], 1, 'IFRS 9.4.4.1.'),
  C(T.FI, 'Hecinq olunan proqnozlaşdırılan əməliyyat üzrə pul axını hecinqinin effektiv hissəsi:', ['P/L', 'OCI (hecinq ehtiyatı)', 'Kapitaldan çıxılır', 'Aktiv'], 1, 'IFRS 9.6.5.11.'),

  // Qrup
  C(T.G, 'Qeyri-nəzarət payı konsolidasiya edilmiş maliyyə vəziyyəti hesabatında:', ['Öhdəliklərdə', 'Kapitalda, ana şirkətin kapitalından ayrıca', 'Aktivlərdə', 'Göstərilmir'], 1, 'IFRS 10.22.'),
  C(T.G, 'Nəzarəti itirmədən törəmə müəssisədə payın artırılması:', ['Əlavə qudvil yaradır', 'Kapital əməliyyatıdır (P/L təsiri yoxdur)', 'P/L-də mənfəət', 'OCI'], 1, 'IFRS 10.23.'),
  C(T.G, 'Şərti ödəniş (contingent consideration) alış tarixində:', ['Tanınmır', 'Ədalətli dəyərlə ödənişin bir hissəsi kimi tanınır', 'Yalnız ödəndikdə', 'Xərc'], 1, 'IFRS 3.39.'),
  C(T.G, 'Ölçmə dövrü (measurement period) maksimum nə qədərdir?', ['6 ay', 'Alış tarixindən 1 il', '2 il', 'Məhdudiyyətsiz'], 1, 'IFRS 3.45.'),
  C(T.G, 'Birgə müəssisədə (joint venture) iştirak uçota alınır:', ['Proporsional konsolidasiya', 'İştirak payı metodu', 'Tam konsolidasiya', 'Maya'], 1, 'IFRS 11.24.'),
  C(T.G, 'Asılı müəssisənin zərərləri investisiyanın balans dəyərini aşdıqda:', ['Mənfi investisiya tanınır', 'Zərərlərin tanınması dayandırılır (hüquqi/konstruktiv öhdəlik yoxdursa)', 'Qudvil azaldılır', 'Kapitaldan çıxılır'], 1, 'IAS 28.38-39.'),
  C(T.G, 'Törəmə müəssisənin xalis aktivlərinin alış tarixindəki ədalətli dəyər düzəlişləri (məs. bina) konsolidasiyada:', ['Nəzərə alınmır', 'Əlavə amortizasiyaya səbəb olur', 'OCI-də', 'Qudvildə amortizasiya olunur'], 1, 'Ədalətli dəyər artımı amortizasiya olunur.'),
  C(T.G, 'Törəmə müəssisədən ana şirkətə satılmış və qrupda qalan mallar üzrə reallaşmamış mənfəət (NCI ədalətli dəyərlə) kimin payına təsir edir?', ['Yalnız ana şirkət', 'Ana şirkət və NCI (törəmə müəssisə satıcıdır)', 'Yalnız NCI', 'Heç kim'], 1, 'Satıcı törəmə olduqda URP NCI-yə də bölüşdürülür.'),

  // Digər
  C(T.OT, 'Pul vəsaitlərinin ekvivalentləri adətən ilkin ödəmə müddəti neçə ay və ya az olan investisiyalardır?', ['12', '3', '6', '1'], 1, 'IAS 7.7.'),
  C(T.OT, 'Səhm emissiyasından daxilolmalar hansı fəaliyyətdir?', ['Əməliyyat', 'İnvestisiya', 'Maliyyələşdirmə', 'Qeyri-pul'], 2, 'IAS 7.17.'),
  C(T.OT, 'İcarə öhdəliyinin əsas məbləğinin ödənişi (icarəçi):', ['Əməliyyat', 'İnvestisiya', 'Maliyyələşdirmə', 'Göstərilmir'], 2, 'IFRS 16.50.'),
  C(T.OT, 'Funksional valyuta müəyyən edilərkən əsas amil:', ['Ana şirkətin valyutası', 'Satış qiymətlərinə və xərclərə əsasən təsir edən əsas iqtisadi mühitin valyutası', 'Hesabat valyutası', 'Ən sabit valyuta'], 1, 'IAS 21.9.'),
  C(T.OT, 'Xarici əməliyyatın hesabatlarının təqdimat valyutasına tərcüməsi zamanı aktivlər və öhdəliklər:', ['Tarixi məzənnə', 'Hesabat tarixindəki bağlanış məzənnəsi', 'Orta məzənnə', 'Açılış məzənnəsi'], 1, 'IAS 21.39; gəlir/xərclər — əməliyyat (orta) məzənnəsi.'),
  C(T.OT, 'Azaldılmış (diluted) EPS hesablanarkən antidilyutiv potensial səhmlər:', ['Daxil edilir', 'Daxil edilmir', 'Yarısı daxil edilir', 'Əsas EPS-ə əlavə'], 1, 'IAS 33.41.'),
  C(T.OT, 'Qısamüddətli işçi mükafatları (məzuniyyət) necə tanınır?', ['Diskontlaşdırılmış', 'Diskontlaşdırılmadan, xidmət göstərildikcə', 'Ödəniş zamanı', 'OCI-də'], 1, 'IAS 19.11.'),
  C(T.OT, 'IFRS 13 ədalətli dəyər iyerarxiyasının 1-ci səviyyəsi:', ['Müşahidə olunmayan girişlər', 'Eyni aktivlər üçün fəal bazarda kotirovka edilmiş qiymətlər', 'Oxşar aktivlər üçün qiymətlər', 'Rəhbərliyin təxminləri'], 1, 'IFRS 13.76.'),
  C(T.OT, 'Qeyri-maliyyə aktivinin ədalətli dəyəri hansı istifadəyə əsaslanır?', ['Cari istifadə', 'Ən yüksək və ən yaxşı istifadə', 'Ləğv dəyəri', 'Rəhbərliyin niyyəti'], 1, 'IFRS 13.27.'),
  C(T.OT, 'Dayandırılmış fəaliyyətin nəticəsi P/L-də:', ['Hər sətirdə bölünür', 'Ayrıca bir məbləğ kimi təqdim olunur', 'OCI-də', 'Göstərilmir'], 1, 'IFRS 5.33.'),
  C(T.OT, 'IAS 24-ə görə əlaqəli tərəf əməliyyatları qiymət olmadıqda belə:', ['Açıqlanmır', 'Açıqlanır', 'Tanınmır', 'Yalnız auditora'], 1, 'IAS 24.18.'),
  C(T.OT, 'IFRS 8-ə görə seqment hesabatı məcburidir:', ['Bütün müəssisələr üçün', 'Borc və ya kapital alətləri açıq bazarda dövriyyədə olan müəssisələr üçün', 'Yalnız banklar üçün', 'Heç kim üçün'], 1, 'IFRS 8.2.'),

  // ===================== AÇIQ (hesablama) =====================
  O(T.L, 'İcarəçi 4 il ərzində hər ilin ƏVVƏLİNDƏ 20 000 AZN ödəyəcək. Diskont dərəcəsi 8%. İcarə öhdəliyi + ilk ödəniş = istifadə hüququ aktivi. İstifadə hüququ aktivinin ilkin dəyəri (AZN, tam ədəd)?', 71542, '20000×(1+0,92593+0,85734+0,79383) = 20000×3,5771 = 71 542.', 3),
  O(T.L, 'İcarə öhdəliyi 50 000 AZN, ilkin birbaşa xərclər 2 000 AZN, icarəyə verəndən alınmış stimul 1 000 AZN. İstifadə hüququ aktivi (AZN)?', 51000, '50000+2000−1000 = 51 000.'),
  O(T.L, 'İcarə öhdəliyi 24 869 AZN, faiz 10%, illik ödəniş 10 000 AZN ilin sonunda. 1-ci ilin sonunda öhdəliyin qalığı (AZN, tam ədəd)?', 17356, '24869×1,1 − 10000 = 17 356.', 2),
  O(T.L, 'İstifadə hüququ aktivi 60 000 AZN, icarə müddəti 5 il, aktivin faydalı müddəti 8 il, mülkiyyət ötürülmür. İllik amortizasiya (AZN)?', 12000, 'Qısa müddət — 5 il: 60000/5 = 12 000.'),
  O(T.FI, 'Şirkət nominalı 100 000 AZN, kuponu 6% olan istiqraz buraxıb, xalis 92 000 AZN alıb. Effektiv dərəcə 9%. 1-ci ilin sonunda öhdəliyin balans dəyəri (AZN)?', 94280, '92000×1,09 − 6000 = 94 280.'),
  O(T.FI, 'Amortizasiya edilmiş maya dəyəri ilə ölçülən 200 000 AZN-lik verilmiş kredit, effektiv faiz 7%. İllik faiz gəliri (AZN)?', 14000, '200000×7% = 14 000.'),
  O(T.FI, '1 000 000 AZN konvertasiya olunan istiqraz nominalla buraxılıb: 3 il, illik kupon 5%, oxşar konvertasiyasız istiqraz üçün bazar faizi 8%. Kapital komponenti (AZN, tam ədəd)?', 77313, 'Öhdəlik = 50000×2,5771 + 1000000×0,79383 = 922 687; kapital = 77 313.', 50),
  O(T.FI, 'Kreditin məbləği (EAD) 500 000 AZN, 12 aylıq defolt ehtimalı 2%, defolt zamanı itki (LGD) 40%. 12 aylıq ECL (AZN)?', 4000, '500000×2%×40% = 4 000.'),
  O(T.G, 'Ana şirkət törəmə müəssisənin 80%-ni 800 000 AZN-ə alıb. Xalis aktivlərin ədalətli dəyəri 900 000 AZN. NCI xalis aktivlərdə proporsional pay ilə ölçülür. Qudvil (AZN)?', 80000, 'NCI = 20%×900000 = 180000; 800000+180000−900000 = 80 000.'),
  O(T.G, 'Törəmə müəssisənin il üzrə mənfəəti 150 000 AZN, NCI 25%. NCI-yə aid mənfəət (AZN)?', 37500, '150000×25% = 37 500.'),
  O(T.G, 'Ana şirkət törəmə müəssisəyə 60 000 AZN-ə mal satıb (maya üzərinə 25% əlavə). İl sonunda malların yarısı satılmayıb. Reallaşmamış mənfəət (AZN)?', 6000, 'Mənfəət = 60000×25/125 = 12000; yarısı = 6 000.'),
  O(T.G, 'Asılı müəssisəyə (25%) investisiya 300 000 AZN. Asılı müəssisənin mənfəəti 80 000 AZN, dividend yoxdur. İl sonunda investisiya (AZN)?', 320000, '300000 + 25%×80000 = 320 000.'),
  O(T.G, 'Alış tarixində törəmə müəssisənin binasının ədalətli dəyəri balans dəyərindən 50 000 AZN artıqdır, qalan faydalı müddət 10 il. Konsolidasiyada illik əlavə amortizasiya (AZN)?', 5000, '50000/10 = 5 000.'),
  O(T.I16, 'Əvvəllər 10 000 AZN yenidən qiymətləndirmə ehtiyatı olan binanın balans dəyəri 150 000 AZN, yeni ədalətli dəyəri 135 000 AZN. P/L-də tanınan azalma (AZN)?', 5000, 'Azalma 15000: 10000 OCI-dən, 5 000 P/L-ə.'),
  O(T.I16, 'Bina 180 000 AZN-ə yenidən qiymətləndirilib, qalan faydalı müddət 9 il, ləğv dəyəri yoxdur. Növbəti ilin amortizasiyası (AZN)?', 20000, '180000/9 = 20 000.'),
  O(T.I16, 'Avadanlıq 100 000 AZN, ləğv dəyəri yoxdur, 10 il düz xətt. 4 il sonra qalan faydalı müddət 4 il kimi yenidən qiymətləndirilib. 5-ci ilin amortizasiyası (AZN)?', 15000, 'Balans 60000; 60000/4 = 15 000 (perspektiv).'),
  O(T.I16, 'Təyyarənin dəyəri 1 000 000 AZN: mühərrik 200 000 (5 il), gövdə 800 000 (20 il). Komponent yanaşması ilə illik amortizasiya (AZN)?', 80000, '200000/5 + 800000/20 = 40000+40000 = 80 000.'),
  O(T.I16, 'Qurğunun sökülməsi öhdəliyinin diskontlaşdırılmış dəyəri 50 000 AZN, diskont dərəcəsi 6%. 1-ci il üzrə diskontun açılması (maliyyə xərci, AZN)?', 3000, '50000×6% = 3 000.'),
  O(T.I16, 'Alış qiyməti 120 000 AZN (5% ticarət endirimi çıxılmamış), çatdırılma 3 000, quraşdırma 4 000, işçi təlimi 2 000 AZN. Əsas vəsaitin ilkin dəyəri (AZN)?', 121000, '120000×95% = 114000 + 3000 + 4000 = 121 000; təlim daxil deyil.'),
  O(T.I2, '500 ədəd malın maya dəyəri 40 AZN/ədəd, satış qiyməti 45 AZN, satış xərcləri 8 AZN/ədəd. Ehtiyatların balans dəyəri (AZN)?', 18500, 'NRV = 37 < 40; 500×37 = 18 500.'),
  O(T.I2, 'Material 20 000, birbaşa əmək 15 000, sabit qaimə xərcləri 30 000 AZN (normal güc 10 000 vahid). Faktiki 8 000 vahid istehsal edilib, hamısı anbardadır. Ehtiyatların maya dəyəri (AZN)?', 59000, 'Sabit qaimə 3 AZN×8000 = 24000; 20000+15000+24000 = 59 000 (6000 xərcə).'),
  O(T.I2, 'Dəyəri 30 000 AZN olan hazır məhsulun satış qiyməti 34 000 AZN, satış üçün yenidən qablaşdırma 2 500, komissiya 2 000 AZN. Ehtiyatın balans dəyəri (AZN)?', 29500, 'NRV = 34000−2500−2000 = 29500 < 30000.'),
  O(T.I36, 'PYV: qudvil 20 000, əsas vəsaitlər 60 000, patent 20 000 AZN. Bərpa olunan məbləğ 70 000 AZN. Dəyərsizləşmədən sonra əsas vəsaitlərin balans dəyəri (AZN)?', 52500, 'Zərər 30000: qudvil 20000, qalan 10000 pro-rata: ƏV 60/80×10000 = 7500 → 52 500.'),
  O(T.I36, 'Aktiv növbəti 2 il ərzində hər ilin sonunda 10 000 AZN pul axını yaradacaq, diskont 10%. İstifadə dəyəri (AZN, tam ədəd)?', 17355, '9091 + 8264 = 17 355.', 2),
  O(T.I36, 'Aktivin balans dəyəri 50 000 AZN, istifadə dəyəri 42 000, ədalətli dəyər 46 000, satış xərcləri 1 000 AZN. Dəyərsizləşmə zərəri (AZN)?', 5000, 'Bərpa olunan = max(45000; 42000) = 45000; 50000−45000 = 5 000.'),
  O(T.X, 'Hesablanmış zəmanət ehtiyatı 50 000 AZN (vergi məqsədləri üçün ödəniş zamanı çıxılır), vergi dərəcəsi 20%. Təxirə salınmış vergi aktivi (AZN)?', 10000, '50000×20% = 10 000.'),
  O(T.X, 'Mühasibat mənfəəti 200 000 AZN, vergi məqsədləri üçün çıxılmayan xərclər (cərimələr) 10 000 AZN, digər fərq yoxdur, dərəcə 20%. Cari mənfəət vergisi (AZN)?', 42000, '(200000+10000)×20% = 42 000.'),
  O(T.X, 'Avadanlıq 100 000 AZN; 1-ci ildə mühasibat amortizasiyası 10 000, vergi amortizasiyası 25 000 AZN. Dərəcə 20%. 1-ci ilin sonunda DTL (AZN)?', 3000, 'Balans 90000 − vergi bazası 75000 = 15000 × 20% = 3 000.'),
  O(T.R, 'Müqavilə qiyməti 1 000 000 AZN, ümumi gözlənilən xərc 800 000 AZN, indiyədək çəkilmiş xərc 200 000 AZN. Xərc əsaslı icra üsulu ilə tanınan gəlir (AZN)?', 250000, '200/800 = 25% × 1000000 = 250 000.'),
  O(T.R, '100 ədəd mal hər biri 50 AZN-ə satılıb, geri qaytarma hüququ var, 5%-nin qaytarılacağı gözlənilir. Tanınan gəlir (AZN)?', 4750, '95 ədəd × 50 = 4 750; 250 — geri ödəniş öhdəliyi.'),
  O(T.R, 'Satış 10 000 AZN, müştəriyə müstəqil satış qiyməti 500 AZN olan bonus xallar verilib (malın müstəqil qiyməti 10 000). Xallara bölüşdürülən məbləğ (AZN, tam ədəd)?', 476, '10000×500/10500 = 476.', 1),
  O(T.R, 'Şirkət agent kimi prinsipialın 10 000 AZN-lik mallarını satıb, komissiya 15%. Şirkətin gəliri (AZN)?', 1500, '10000×15% = 1 500.'),
  O(T.R, '2 illik xidmət müqaviləsi üçün müştəri əvvəlcədən 24 000 AZN ödəyib, xidmət 1 aprel 20X1-də başlayıb. 31.12.20X1 üzrə tanınan gəlir (AZN)?', 9000, '24000/24 × 9 ay = 9 000; qalan 15000 — müqavilə öhdəliyi.'),
  O(T.P, '2 il sonra ödəniləcək 100 000 AZN öhdəlik, diskont 10%. Ehtiyatın ilkin məbləği (AZN, tam ədəd)?', 82645, '100000/1,21 = 82 645.', 2),
  O(T.P, 'Zərərli müqavilə: icra xərcləri 30 000 AZN (fayda yoxdur), müqavilədən çıxma cəriməsi 25 000 AZN. Ehtiyat (AZN)?', 25000, 'min(30000; 25000) = 25 000.'),
  O(T.P, 'Məhkəmə işi: 60% ehtimalla 200 000 AZN, 40% ehtimalla 50 000 AZN ödəniş (tək öhdəlik). Ən ehtimal olunan nəticə əsasında ehtiyat (AZN)?', 200000, 'Tək öhdəlik — ən ehtimal olunan nəticə: 200 000.'),
  O(T.I38, 'İnvestisiya mülkiyyəti (ədalətli dəyər modeli): ilin əvvəlində 400 000, sonunda 430 000 AZN. P/L-də tanınan gəlir (AZN)?', 30000, '430000−400000 = 30 000.'),
  O(T.I38, 'Avadanlıq 100 000 AZN, 20 000 AZN dövlət qrantı aktivin dəyərindən çıxılıb, faydalı müddət 4 il, ləğv dəyəri yoxdur. İllik amortizasiya (AZN)?', 20000, '(100000−20000)/4 = 20 000.'),
  O(T.I38, 'Ümumi kreditlər: 1 000 000 AZN 8% və 500 000 AZN 11%. Uyğun aktivə il boyu 400 000 AZN xərclənib. Kapitallaşdırılan borc xərci (AZN)?', 36000, 'Orta dərəcə = (80000+55000)/1500000 = 9%; 400000×9% = 36 000.'),
  O(T.I38, 'Kapitallaşdırılmış inkişaf xərci 120 000 AZN, faydalı müddət 4 il, məhsul satışı 1 iyul 20X1-də başlayıb. 20X1 üzrə amortizasiya (AZN)?', 15000, '120000/4 × 6/12 = 15 000.'),
  O(T.OT, 'Xalis mənfəət 500 000 AZN, 1 000 000 adi səhm. 200 000 AZN, 5% faizli konvertasiya olunan istiqraz 100 000 səhmə çevrilə bilər, vergi 20%. Azaldılmış EPS (AZN, 2 onluq)?', 0.46, '(500000 + 10000×0,8)/1100000 = 508000/1100000 = 0,46.', 0.01),
  O(T.OT, 'Mənfəət 330 000 AZN, 1 000 000 səhm var idi, ilin ortasında hər 10 səhmə 1 bonus səhm verilib. Əsas EPS (AZN, 2 onluq)?', 0.3, 'Bonus retrospektiv: 1100000 səhm; 330000/1100000 = 0,30.', 0.01),
  O(T.OT, '5 000 USD-lik mal nisyə satılıb (məzənnə 1,70), pul 1,68 məzənnəsi ilə alınıb. Məzənnə zərəri (AZN)?', 100, '5000×(1,70−1,68) = 100.'),
  O(T.OT, 'Xalis mənfəət 80 000 AZN (əsas vəsait satışından 5 000 mənfəət daxil), amortizasiya 12 000 AZN, dövriyyə kapitalında dəyişiklik yoxdur. Əməliyyat fəaliyyətindən pul axını (AZN)?', 87000, '80000+12000−5000 = 87 000.'),
  O(T.OT, 'Əsas vəsaitlər: açılış 200 000, bağlanış 250 000, amortizasiya 30 000, satılan aktivlərin balans dəyəri 10 000 AZN, yenidən qiymətləndirmə yoxdur. Əsas vəsaitlərin alışına ödənilən pul (AZN)?', 90000, '250000 − 200000 + 30000 + 10000 = 90 000.'),
  O(T.OT, 'Müəyyən edilmiş ödəniş öhdəliyi ilin əvvəlinə 500 000, plan aktivləri 400 000 AZN, diskont dərəcəsi 5%. P/L-də xalis faiz xərci (AZN)?', 5000, '(500000−400000)×5% = 5 000.'),
  O(T.OT, 'Satış üçün saxlanılan qrupun balans dəyəri 300 000, ədalətli dəyər − satış xərcləri 260 000 AZN. Dəyərsizləşmə zərəri (AZN)?', 40000, '300000−260000 = 40 000.'),
  O(T.OT, 'Funksional valyutası USD olan törəmə müəssisənin xalis aktivləri 100 000 USD; açılış məzənnə 1,70, bağlanış 1,75 AZN (il ərzində dəyişiklik yoxdur). OCI-də tərcümə fərqi (AZN)?', 5000, '100000×(1,75−1,70) = 5 000 (gəlir).'),
];
