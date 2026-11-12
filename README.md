# PMS-1 Simulyator (MHBS / Maliyyə hesabatları)

DİM-in Peşəkar Mühasib Sertifikatı imtahanının I mərhələsinə hazırlıq üçün tam statik sayt:
metodik materiallar, mövzu üzrə məşq və DİM üslubunda vaxtlı sınaq imtahanı (30 qapalı + 10 açıq, 180 dəqiqə).

Yalnız HTML, CSS və JavaScript — build, server və asılılıq yoxdur.

## GitHub Pages-də açmaq

1. Repozitoriyada **Settings → Pages**.
2. **Source: Deploy from a branch**, branch və qovluq olaraq **/ (root)** seçin, **Save**.
3. Bir-iki dəqiqəyə sayt `https://<istifadəçi>.github.io/<repo>/` ünvanında açılır.

Bütün yollar nisbidir və marşrutlar `#/...` ilə işləyir, ona görə alt-qovluqda da problemsiz açılır.
Lokal baxmaq üçün `index.html` faylını brauzerdə açmaq kifayətdir.

## Struktur

    index.html              tək səhifə, skriptləri ardıcıl yükləyir
    assets/css/style.css    dizayn (açıq/tünd rejim, mobil)
    assets/js/core.js       konfiqurasiya, köməkçilər, localStorage
    assets/js/bank.js       sual bankı: seçim, yoxlama, bal, irəliləyiş
    assets/js/ui.js         sualın göstərilməsi (ortaq)
    assets/js/app.js        hash marşrutlaşdırıcı
    assets/js/views/        home, materials, practice, exam
    data/materials.js       araşdırma nəticələri, oxu planı
    data/lessons.js         mövzu izahları (31 dərs)
    data/q-set*.js          statik sual paketləri
    data/generators.js      təsadüfi rəqəmli hesablama tapşırıqları

## Sual əlavə etmək

Yeni `data/q-setN.js` yaradın və `index.html`-ə əlavə edin:

    (function () {
      const { C, O } = PMS.bank.maker('e');   // unikal prefiks
      const T = PMS.T;
      PMS.bank.add([
        C(T.I16, 'Sual mətni?', ['A', 'B', 'C', 'D'], 1, 'İzah'),      // 1 = düzgün variantın indeksi (0-dan)
        O(T.I2, 'Hesablama sualı (AZN)?', 1500, 'Həll yolu'),          // rəqəm cavab
      ]);
    })();

Variantların sırası hər göstərilişdə qarışdırılır. İmtahan parametrləri (`sual sayı, vaxt, bal`) `assets/js/core.js`-dədir.
