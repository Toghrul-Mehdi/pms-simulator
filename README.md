# PMS-1 Simulyator (MHBS / Maliyyə hesabatları)

DİM-in Peşəkar Mühasib Sertifikatı I mərhələsinə hazırlıq: metodik materiallar, mövzu üzrə məşq və DİM üslubunda vaxtlı sınaq imtahanı (30 qapalı + 10 açıq, 180 dəq).

Backend və frontend bir yerdədir (`server.js` API + `public/` statik). Xarici asılılıq yoxdur.

## İşə salma
    npm start        # PORT env dəyişəni ilə port seçilir (default 3000)

## Deploy
Render / Railway / Fly.io və s.: Node 18+, start əmri `npm start`. Build lazım deyil.

## Sual əlavə etmək
`data/questions.js` — `C(...)` qapalı, `O(...)` açıq (rəqəm) tapşırıq.
