// Hesablama tapşırığı generatorları: hər çağırışda yeni rəqəmlərlə tapşırıq yaradır.
// Hər generator {text, answer, explanation, tolerance?} qaytarır.
(function () {
  const { ri, pick, round, money: f } = PMS.util;
  const T = PMS.T, G = PMS.bank.gen;
  const k = (a, b) => ri(a, b) * 1000;                       // min manat
  const af = (r, n) => (1 - (1 + r) ** -n) / r;              // annuitet faktoru
  const pvTol = x => Math.max(3, Math.abs(x) * 0.002);       // cədvəl faktorları ilə yuvarlaqlaşdırma fərqi

  // ---------- IAS 16
  G(T.I16, () => {
    const life = pick([4, 5, 8, 10]), cost = k(4, 20) * 10, res = cost * pick([0, 0.05, 0.1]), y = ri(1, life - 1);
    const ann = (cost - res) / life, ans = cost - y * ann;
    return { text: `Avadanlığın dəyəri ${f(cost)} AZN, ləğv dəyəri ${f(res)} AZN, faydalı müddəti ${life} il, düz xətt üsulu. ${y}-ci ilin sonunda balans dəyəri (AZN)?`, answer: ans, explanation: `İllik amortizasiya = (${f(cost)} − ${f(res)}) / ${life} = ${f(ann)}. Balans = ${f(cost)} − ${y} × ${f(ann)} = ${f(ans)}.` };
  });
  G(T.I16, () => {
    const cost = k(4, 20) * 10, rate = pick([20, 25, 30, 40]), y = pick([2, 3]);
    let bal = cost, dep = 0; const steps = [];
    for (let i = 1; i <= y; i++) { dep = bal * rate / 100; steps.push(`${i}-ci il: ${f(bal)} × ${rate}% = ${f(dep)}`); bal -= dep; }
    return { text: `Avadanlığın dəyəri ${f(cost)} AZN, azalan qalıq üsulu, illik ${rate}%. ${y}-ci ilin amortizasiya xərci (AZN)?`, answer: round(dep, 2), tolerance: 1, explanation: steps.join('; ') + '.' };
  });
  G(T.I16, () => {
    const units = ri(5, 20) * 10000, per = pick([1, 2, 5]), res = k(5, 20), cost = units * per + res, made = ri(10, 30) * units / 100;
    return { text: `Maşının dəyəri ${f(cost)} AZN, ləğv dəyəri ${f(res)} AZN, ümumi istehsal gücü ${f(units)} vahid. İl ərzində ${f(made)} vahid istehsal edilib. İlin amortizasiyası (AZN)?`, answer: made * per, explanation: `(${f(cost)} − ${f(res)}) / ${f(units)} = ${per} AZN/vahid × ${f(made)} = ${f(made * per)}.` };
  });
  G(T.I16, () => {
    const cost = k(10, 50) * 10, acc = cost * pick([0.1, 0.2, 0.3]), up = k(5, 40), fv = cost - acc + up;
    return { text: `Binanın ilkin dəyəri ${f(cost)} AZN, yığılmış amortizasiya ${f(acc)} AZN. Bina ${f(fv)} AZN-ə yenidən qiymətləndirilib (əvvəl yenidən qiymətləndirmə olmayıb). OCI-də tanınan artım (AZN)?`, answer: up, explanation: `Balans dəyəri = ${f(cost - acc)}; ${f(fv)} − ${f(cost - acc)} = ${f(up)}.` };
  });
  G(T.I16, () => {
    const cost = k(4, 12) * 10, acc = cost * pick([0.5, 0.6, 0.75]), gain = k(1, 6), price = cost - acc + gain;
    return { text: `Avadanlığın dəyəri ${f(cost)} AZN, yığılmış amortizasiya ${f(acc)} AZN. ${f(price)} AZN-ə satılıb. Satışdan mənfəət (AZN)?`, answer: gain, explanation: `Balans dəyəri ${f(cost - acc)}; ${f(price)} − ${f(cost - acc)} = ${f(gain)}.` };
  });
  G(T.I16, () => {
    const life = pick([8, 10]), used = pick([2, 3, 4]), rem = pick([2, 3, 4, 5]), cost = life * rem * k(1, 4);
    const bal = cost - cost / life * used, ans = bal / rem;
    return { text: `Avadanlıq ${f(cost)} AZN, ləğv dəyəri yoxdur, ${life} il düz xətt. ${used} il sonra qalan faydalı müddət ${rem} il kimi yenidən qiymətləndirilib. ${used + 1}-ci ilin amortizasiyası (AZN)?`, answer: ans, explanation: `${used} ildən sonra balans = ${f(bal)}; perspektiv: ${f(bal)} / ${rem} = ${f(ans)}.` };
  });
  G(T.I16, () => {
    const list = k(50, 200), disc = pick([2, 5, 10]), del = k(1, 5), inst = k(2, 8), train = k(1, 4), ans = list * (1 - disc / 100) + del + inst;
    return { text: `Avadanlığın siyahı qiyməti ${f(list)} AZN (${disc}% ticarət endirimi tətbiq olunur), çatdırılma ${f(del)}, quraşdırma ${f(inst)}, işçilərin təlimi ${f(train)} AZN. İlkin dəyər (AZN)?`, answer: ans, explanation: `${f(list)} × ${100 - disc}% + ${f(del)} + ${f(inst)} = ${f(ans)}. Təlim xərci daxil edilmir.` };
  });

  // ---------- IAS 2
  G(T.I2, () => {
    const cost = k(10, 40), price = cost + k(1, 3), comp = k(2, 4), sell = k(1, 3), nrv = price - comp - sell, wd = Math.max(0, cost - nrv);
    return { text: `Ehtiyatın maya dəyəri ${f(cost)} AZN, təxmini satış qiyməti ${f(price)} AZN, tamamlama xərcləri ${f(comp)} AZN, satış xərcləri ${f(sell)} AZN. Silinmə məbləği (AZN)?`, answer: wd, explanation: `NRV = ${f(price)} − ${f(comp)} − ${f(sell)} = ${f(nrv)}; silinmə = ${f(cost)} − ${f(nrv)} = ${f(wd)}.` };
  });
  G(T.I2, () => {
    const q1 = ri(1, 4) * 100, q2 = ri(1, 4) * 100, p1 = ri(8, 15), p2 = p1 + ri(1, 5), sold = ri(1, 3) * 50, avg = (q1 * p1 + q2 * p2) / (q1 + q2);
    return { text: `Anbara ${q1} ədəd × ${p1} AZN və ${q2} ədəd × ${p2} AZN mal daxil olub. ${sold} ədəd satılıb. Orta çəkili üsulla satılmış malların maya dəyəri (AZN)?`, answer: round(sold * avg, 2), tolerance: 2, explanation: `Orta = (${f(q1 * p1)} + ${f(q2 * p2)}) / ${q1 + q2} = ${round(avg, 4)}; × ${sold} = ${f(round(sold * avg, 2))}.` };
  });
  G(T.I2, () => {
    const q1 = ri(1, 3) * 100, q2 = ri(2, 4) * 100, p1 = ri(8, 15), p2 = p1 + ri(1, 5), sold = q1 + ri(1, 3) * 50 - 50, left = q1 + q2 - sold;
    return { text: `Anbara əvvəl ${q1} ədəd × ${p1} AZN, sonra ${q2} ədəd × ${p2} AZN mal daxil olub. ${sold} ədəd satılıb. FIFO üzrə qalıq ehtiyatın dəyəri (AZN)?`, answer: left * p2, explanation: `Qalan ${left} ədəd son partiyadandır: ${left} × ${p2} = ${f(left * p2)}.` };
  });
  G(T.I2, () => {
    const normal = ri(5, 20) * 1000, rate = pick([2, 3, 4, 5]), fixed = normal * rate, actual = normal * pick([0.6, 0.7, 0.8, 0.9]), mat = k(10, 40), lab = k(10, 30), ans = mat + lab + actual * rate;
    return { text: `Material ${f(mat)}, birbaşa əmək ${f(lab)}, sabit istehsal qaimə xərcləri ${f(fixed)} AZN (normal güc ${f(normal)} vahid). Faktiki ${f(actual)} vahid istehsal edilib, hamısı anbardadır. Ehtiyatların maya dəyəri (AZN)?`, answer: ans, explanation: `Sabit qaimə: ${rate} AZN × ${f(actual)} = ${f(actual * rate)}; cəmi ${f(ans)}. Bölüşdürülməmiş ${f(fixed - actual * rate)} xərcə silinir.` };
  });

  // ---------- IAS 36
  G(T.I36, () => {
    const ca = k(50, 150), a = ca - k(5, 25), b = ca - k(5, 25), rec = Math.max(a, b);
    return { text: `Aktivin balans dəyəri ${f(ca)} AZN, ədalətli dəyər − satış xərcləri ${f(a)} AZN, istifadə dəyəri ${f(b)} AZN. Dəyərsizləşmə zərəri (AZN)?`, answer: ca - rec, explanation: `Bərpa olunan = max(${f(a)}; ${f(b)}) = ${f(rec)}; ${f(ca)} − ${f(rec)} = ${f(ca - rec)}.` };
  });
  G(T.I36, () => {
    const gw = k(1, 4) * 10, ppe = k(3, 9) * 10, pat = k(1, 3) * 10, extra = k(1, 2) * 5, rec = ppe + pat - extra, ans = ppe - extra * ppe / (ppe + pat);
    return { text: `PYV: qudvil ${f(gw)}, əsas vəsaitlər ${f(ppe)}, patent ${f(pat)} AZN. Bərpa olunan məbləğ ${f(rec)} AZN. Dəyərsizləşmədən sonra əsas vəsaitlərin balans dəyəri (AZN)?`, answer: round(ans, 2), tolerance: 2, explanation: `Zərər ${f(gw + extra)}: əvvəl qudvil ${f(gw)}, qalan ${f(extra)} pro-rata; ƏV payı ${f(ppe)}/${f(ppe + pat)} × ${f(extra)} = ${f(round(extra * ppe / (ppe + pat), 2))}.` };
  });
  G(T.I36, () => {
    const cf = k(5, 30), r = pick([5, 8, 10, 12]), n = pick([2, 3, 4]), ans = round(cf * af(r / 100, n));
    return { text: `Aktiv növbəti ${n} il ərzində hər ilin sonunda ${f(cf)} AZN pul axını yaradacaq, diskont dərəcəsi ${r}%. İstifadə dəyəri (AZN, tam ədəd)?`, answer: ans, tolerance: pvTol(ans), explanation: `${f(cf)} × annuitet faktoru (${r}%, ${n} il) ${round(af(r / 100, n), 4)} = ${f(ans)}.` };
  });

  // ---------- IAS 12
  G(T.X, () => {
    const ca = k(50, 200), d = k(5, 40), t = pick([20, 20, 25]);
    return { text: `Avadanlığın balans dəyəri ${f(ca)} AZN, vergi bazası ${f(ca - d)} AZN, vergi dərəcəsi ${t}%. Təxirə salınmış vergi öhdəliyi (AZN)?`, answer: d * t / 100, explanation: `(${f(ca)} − ${f(ca - d)}) × ${t}% = ${f(d * t / 100)}.` };
  });
  G(T.X, () => {
    const cur = k(20, 80), o = k(5, 20), c = o + k(1, 10) * pick([1, -1]) ;
    const cl = Math.max(1000, c);
    return { text: `Cari mənfəət vergisi ${f(cur)} AZN. Təxirə salınmış vergi öhdəliyi ilin əvvəlində ${f(o)}, sonunda ${f(cl)} AZN (dəyişmə P/L-dən keçir). Mənfəət vergisi xərci (AZN)?`, answer: cur + cl - o, explanation: `${f(cur)} + (${f(cl)} − ${f(o)}) = ${f(cur + cl - o)}.` };
  });
  G(T.X, () => {
    const cost = k(5, 20) * 10, la = pick([5, 10]), lt = pick([2, 4]), t = 20, ad = cost / la, td = cost / lt, ans = (td - ad) * t / 100;
    return { text: `Avadanlıq ${f(cost)} AZN-ə alınıb. Mühasibat uçotunda ${la} il, vergi uçotunda ${lt} il düz xətt amortizasiya olunur. Dərəcə ${t}%. 1-ci ilin sonunda təxirə salınmış vergi öhdəliyi (AZN)?`, answer: ans, explanation: `Balans ${f(cost - ad)}, vergi bazası ${f(cost - td)}; fərq ${f(td - ad)} × ${t}% = ${f(ans)}.` };
  });
  G(T.X, () => {
    const pr = k(10, 50) * 10, t = 20;
    return { text: `Hesablanmış zəmanət ehtiyatı ${f(pr / 10)} AZN-dir (vergi məqsədləri üçün yalnız ödəniş zamanı çıxılır), vergi dərəcəsi ${t}%. Təxirə salınmış vergi aktivi (AZN)?`, answer: pr / 10 * t / 100, explanation: `Öhdəliyin vergi bazası sıfırdır: ${f(pr / 10)} × ${t}% = ${f(pr / 10 * t / 100)}.` };
  });

  // ---------- IFRS 9 / IAS 32
  G(T.FI, () => {
    const nom = 100000, c = pick([4, 5, 6]), price = nom - k(3, 8), e = c + pick([1.5, 2, 2.5]), ans = round(price * (1 + e / 100) - nom * c / 100, 2);
    return { text: `Nominalı ${f(nom)} AZN, kuponu ${c}% olan istiqraz ${f(price)} AZN-ə alınıb və amortizasiya edilmiş maya dəyəri ilə ölçülür. Effektiv faiz dərəcəsi ${String(e).replace(".", ",")}%. 1-ci ilin sonunda balans dəyəri (AZN)?`, answer: ans, tolerance: 1, explanation: `Faiz gəliri ${f(price)} × ${String(e).replace(".", ",")}% = ${f(round(price * e / 100, 2))}; kupon ${f(nom * c / 100)}; bağlanış = ${f(ans)}.` };
  });
  G(T.FI, () => {
    const N = ri(5, 20) * 100000, c = pick([4, 5, 6]), m = c + pick([2, 3]), n = 3, liab = N * c / 100 * af(m / 100, n) + N * (1 + m / 100) ** -n, ans = round(N - liab);
    return { text: `${f(N)} AZN konvertasiya olunan istiqraz nominalla buraxılıb: ${n} il, illik kupon ${c}% (ilin sonunda), oxşar konvertasiyasız istiqraz üçün bazar faizi ${m}%. Kapital komponenti (AZN, tam ədəd)?`, answer: ans, tolerance: Math.max(50, N * 0.0006), explanation: `Öhdəlik = kuponların və nominalın ${m}% ilə diskontu = ${f(round(liab))}; kapital = ${f(N)} − ${f(round(liab))} = ${f(ans)}.` };
  });
  G(T.FI, () => {
    const ead = k(1, 10) * 100, pd = pick([1, 2, 3, 5]), lgd = pick([30, 40, 50, 60]);
    return { text: `Kreditin məbləği ${f(ead)} AZN, 12 aylıq defolt ehtimalı ${pd}%, defolt zamanı itki (LGD) ${lgd}%. 12 aylıq gözlənilən kredit zərəri (AZN)?`, answer: ead * pd * lgd / 10000, explanation: `${f(ead)} × ${pd}% × ${lgd}% = ${f(ead * pd * lgd / 10000)}.` };
  });
  G(T.FI, () => {
    const nom = k(1, 5) * 100, c = pick([5, 6, 7]), net = nom - k(4, 12), e = c + pick([2, 3]), ans = round(net * (1 + e / 100) - nom * c / 100, 2);
    return { text: `Şirkət nominalı ${f(nom)} AZN, kuponu ${c}% olan istiqraz buraxıb və əməliyyat xərcləri çıxılmaqla ${f(net)} AZN alıb. Effektiv dərəcə ${String(e).replace(".", ",")}%. 1-ci ilin sonunda öhdəliyin balans dəyəri (AZN)?`, answer: ans, tolerance: 1, explanation: `${f(net)} × ${1 + e / 100} − ${f(nom * c / 100)} = ${f(ans)}.` };
  });

  // ---------- Qrup
  G(T.G, () => {
    const na = k(30, 90) * 10, nci = k(5, 20) * 10, gw = k(2, 10) * 10, paid = na - nci + gw;
    return { text: `Ana şirkət törəmə müəssisə üçün ${f(paid)} AZN ödəyib. Qeyri-nəzarət payının ədalətli dəyəri ${f(nci)} AZN, müəyyən edilə bilən xalis aktivlərin ədalətli dəyəri ${f(na)} AZN. Qudvil (AZN)?`, answer: gw, explanation: `${f(paid)} + ${f(nci)} − ${f(na)} = ${f(gw)}.` };
  });
  G(T.G, () => {
    const pct = pick([60, 70, 75, 80]), na = k(4, 12) * 100, gw = k(2, 10) * 10, paid = na * pct / 100 + gw;
    return { text: `Ana şirkət törəmə müəssisənin ${pct}%-ni ${f(paid)} AZN-ə alıb. Xalis aktivlərin ədalətli dəyəri ${f(na)} AZN. NCI xalis aktivlərdə proporsional payla ölçülür. Qudvil (AZN)?`, answer: gw, explanation: `NCI = ${100 - pct}% × ${f(na)} = ${f(na * (100 - pct) / 100)}; ${f(paid)} + NCI − ${f(na)} = ${f(gw)}.` };
  });
  G(T.G, () => {
    const pct = pick([20, 25, 30, 40]), cost = k(10, 40) * 10, pr = k(4, 20) * 10, div = pr * pick([0.2, 0.25, 0.5]), ans = cost + pct / 100 * (pr - div);
    return { text: `Şirkət asılı müəssisənin ${pct}%-ni ilin əvvəlində ${f(cost)} AZN-ə alıb. Asılı müəssisənin il üzrə mənfəəti ${f(pr)} AZN, ödədiyi dividend ${f(div)} AZN. İlin sonunda investisiyanın balans dəyəri (AZN)?`, answer: ans, explanation: `${f(cost)} + ${pct}% × ${f(pr)} − ${pct}% × ${f(div)} = ${f(ans)}.` };
  });
  G(T.G, () => {
    const mu = pick([20, 25, 50]), cost = k(2, 10) * 10, sale = cost * (1 + mu / 100), part = pick([[1, 2], [1, 4], [3, 4]]), ans = (sale - cost) * part[0] / part[1];
    return { text: `Ana şirkət törəmə müəssisəyə ${f(sale)} AZN-ə mal satıb (maya dəyəri üzərinə ${mu}% əlavə ilə). İl sonunda bu malların ${part[0]}/${part[1]} hissəsi qrupda qalıb. Reallaşmamış mənfəət (AZN)?`, answer: ans, explanation: `Mənfəət = ${f(sale)} × ${mu}/${100 + mu} = ${f(sale - cost)}; × ${part[0]}/${part[1]} = ${f(ans)}.` };
  });
  G(T.G, () => {
    const pr = k(5, 40) * 10, n = pick([10, 20, 25, 30, 40]);
    return { text: `Törəmə müəssisənin il üzrə mənfəəti ${f(pr)} AZN-dir, qeyri-nəzarət payı ${n}%. Qrupdaxili düzəliş yoxdur. NCI-yə aid mənfəət (AZN)?`, answer: pr * n / 100, explanation: `${f(pr)} × ${n}% = ${f(pr * n / 100)}.` };
  });
  G(T.G, () => {
    const life = pick([5, 10, 20]), up = life * k(2, 10), y = ri(1, 3);
    return { text: `Alış tarixində törəmə müəssisənin binasının ədalətli dəyəri balans dəyərindən ${f(up)} AZN artıq idi, qalan faydalı müddət ${life} il. Alışdan ${y} il sonra konsolidasiyada yığılmış əlavə amortizasiya (AZN)?`, answer: up / life * y, explanation: `${f(up)} / ${life} × ${y} = ${f(up / life * y)}.` };
  });

  // ---------- IFRS 16
  G(T.L, () => {
    const pay = k(5, 30), n = pick([3, 4, 5]), r = pick([5, 6, 8, 10]), ans = round(pay * af(r / 100, n));
    return { text: `İcarəçi ${n} il ərzində hər ilin SONUNDA ${f(pay)} AZN ödəyəcək. Diskont dərəcəsi ${r}%. İcarə öhdəliyinin ilkin məbləği (AZN, tam ədəd)?`, answer: ans, tolerance: pvTol(ans), explanation: `${f(pay)} × annuitet faktoru (${r}%, ${n} il) ${round(af(r / 100, n), 4)} = ${f(ans)}.` };
  });
  G(T.L, () => {
    const pay = k(5, 30), n = pick([3, 4, 5]), r = pick([5, 6, 8, 10]), ans = round(pay * (1 + af(r / 100, n - 1)));
    return { text: `İcarəçi ${n} il ərzində hər ilin ƏVVƏLİNDƏ ${f(pay)} AZN ödəyəcək (ilk ödəniş başlanğıc tarixində). Diskont dərəcəsi ${r}%. İstifadə hüququ aktivinin ilkin dəyəri (AZN, tam ədəd)?`, answer: ans, tolerance: pvTol(ans), explanation: `İlk ödəniş + qalan ${n - 1} ödənişin PV-si: ${f(pay)} × (1 + ${round(af(r / 100, n - 1), 4)}) = ${f(ans)}.` };
  });
  G(T.L, () => {
    const liab = k(20, 90), r = pick([5, 6, 8, 10]), pay = round(liab / pick([3, 4]), -3) + 2000, ans = round(liab * (1 + r / 100) - pay, 2);
    return { text: `İcarə öhdəliyi ilkin olaraq ${f(liab)} AZN, faiz dərəcəsi ${r}%, illik ödəniş ${f(pay)} AZN ilin sonunda. 1-ci ilin sonunda öhdəliyin qalığı (AZN)?`, answer: ans, tolerance: 1, explanation: `${f(liab)} + faiz ${f(liab * r / 100)} − ${f(pay)} = ${f(ans)}.` };
  });
  G(T.L, () => {
    const term = pick([3, 4, 5]), liab = term * k(8, 20), idc = term * 1000, life = term + pick([2, 3, 5]);
    return { text: `İcarə öhdəliyi ${f(liab)} AZN, ilkin birbaşa xərclər ${f(idc)} AZN. İcarə müddəti ${term} il, aktivin faydalı müddəti ${life} il, mülkiyyət ötürülmür. İstifadə hüququ aktivinin illik amortizasiyası (AZN)?`, answer: (liab + idc) / term, explanation: `ROU = ${f(liab + idc)}; müddətin qısası ${term} il: ${f((liab + idc) / term)}.` };
  });

  // ---------- IFRS 15
  G(T.R, () => {
    const a = ri(3, 9) * 100, b = ri(1, 5) * 100, price = (a + b) * pick([0.8, 0.9]), ans = round(price * a / (a + b), 2);
    return { text: `Paket ${f(price)} AZN-ə satılır: A malı (müstəqil satış qiyməti ${a} AZN) və B xidməti (müstəqil satış qiyməti ${b} AZN). A malına bölüşdürülən əməliyyat qiyməti (AZN)?`, answer: ans, tolerance: 1, explanation: `${f(price)} × ${a}/${a + b} = ${f(ans)}.` };
  });
  G(T.R, () => {
    const price = k(5, 20) * 100, margin = pick([0.75, 0.8, 0.9]), total = price * margin, pct = pick([20, 25, 40, 50, 60]);
    return { text: `Müqavilə qiyməti ${f(price)} AZN, ümumi gözlənilən xərc ${f(total)} AZN, indiyədək çəkilmiş xərc ${f(total * pct / 100)} AZN. Xərc əsaslı (cost-to-cost) üsulla bu günədək tanınan gəlir (AZN)?`, answer: price * pct / 100, explanation: `İcra faizi ${pct}% × ${f(price)} = ${f(price * pct / 100)}.` };
  });
  G(T.R, () => {
    const q = ri(1, 5) * 100, p = pick([20, 50, 80, 100]), ret = pick([2, 5, 10]);
    return { text: `${q} ədəd mal hər biri ${p} AZN-ə geri qaytarma hüququ ilə satılıb; ${ret}%-nin qaytarılacağı gözlənilir. Tanınan gəlir (AZN)?`, answer: q * p * (100 - ret) / 100, explanation: `${q} × ${p} × ${100 - ret}% = ${f(q * p * (100 - ret) / 100)}; qalan — geri ödəniş öhdəliyi.` };
  });
  G(T.R, () => {
    const months = pick([12, 24, 36]), fee = months * ri(5, 20) * 100, start = ri(2, 10), used = 13 - start, names = ['', 'yanvar', 'fevral', 'mart', 'aprel', 'may', 'iyun', 'iyul', 'avqust', 'sentyabr', 'oktyabr'];
    return { text: `${months} aylıq xidmət müqaviləsi üçün müştəri əvvəlcədən ${f(fee)} AZN ödəyib; xidmət 1 ${names[start]} tarixində başlayıb. 31 dekabr tarixinə həmin il üzrə tanınan gəlir (AZN)?`, answer: fee / months * used, explanation: `${f(fee)} / ${months} × ${used} ay = ${f(fee / months * used)}; qalan — müqavilə öhdəliyi.` };
  });

  // ---------- IAS 37
  G(T.P, () => {
    const p1 = pick([10, 15, 20]), p2 = pick([5, 10]), c1 = k(10, 50), c2 = k(6, 20) * 10, ans = (p1 * c1 + p2 * c2) / 100;
    return { text: `Zəmanət: satılmış malların ${100 - p1 - p2}%-də qüsur gözlənilmir, ${p1}%-də kiçik qüsur (bütün mallar üzrə təmir ${f(c1)} AZN olardı), ${p2}%-də böyük qüsur (təmir ${f(c2)} AZN olardı). Ehtiyat (AZN)?`, answer: ans, explanation: `Gözlənilən dəyər: ${p1}% × ${f(c1)} + ${p2}% × ${f(c2)} = ${f(ans)}.` };
  });
  G(T.P, () => {
    const amt = k(5, 50) * 10, r = pick([5, 8, 10]), n = pick([2, 3, 5]), ans = round(amt * (1 + r / 100) ** -n);
    return { text: `${n} il sonra ödəniləcək ${f(amt)} AZN öhdəlik üzrə ehtiyat yaradılır, diskont dərəcəsi ${r}%. Ehtiyatın ilkin məbləği (AZN, tam ədəd)?`, answer: ans, tolerance: pvTol(ans), explanation: `${f(amt)} / (1 + ${r}%)^${n} = ${f(ans)}.` };
  });
  G(T.P, () => {
    const prov = k(20, 200), r = pick([5, 6, 8, 10]);
    return { text: `Sökmə öhdəliyi üzrə ehtiyatın ilin əvvəlinə diskontlaşdırılmış dəyəri ${f(prov)} AZN, diskont dərəcəsi ${r}%. İl üzrə maliyyə xərci (diskontun açılması, AZN)?`, answer: prov * r / 100, explanation: `${f(prov)} × ${r}% = ${f(prov * r / 100)}.` };
  });

  // ---------- IAS 38 / 40 / 23 / 20
  G(T.I38, () => {
    const loan = k(5, 20) * 100, r = pick([6, 8, 10, 12]), inc = k(5, 25);
    return { text: `Uyğun aktivin tikintisi üçün götürülmüş ${f(loan)} AZN xüsusi kredit ${r}% illik faizlə bütün il istifadə olunub. Müvəqqəti investisiya gəliri ${f(inc)} AZN. Kapitallaşdırılan borc xərcləri (AZN)?`, answer: loan * r / 100 - inc, explanation: `${f(loan * r / 100)} − ${f(inc)} = ${f(loan * r / 100 - inc)}.` };
  });
  G(T.I38, () => {
    const life = pick([4, 5, 10]), grant = life * k(2, 10), y = ri(1, 3);
    return { text: `Faydalı müddəti ${life} il olan avadanlıq üçün ${f(grant)} AZN dövlət qrantı alınıb və gələcək dövrlərin gəliri kimi uçota alınıb. ${y}-ci ilin sonunda gələcək dövrlərin gəliri qalığı (AZN)?`, answer: grant - grant / life * y, explanation: `İllik ${f(grant / life)} P/L-ə; ${f(grant)} − ${y} × ${f(grant / life)} = ${f(grant - grant / life * y)}.` };
  });
  G(T.I38, () => {
    const per = k(5, 20), from = ri(3, 8), to = ri(from + 1, 11), names = ['', 'yanvar', 'fevral', 'mart', 'aprel', 'may', 'iyun', 'iyul', 'avqust', 'sentyabr', 'oktyabr', 'noyabr', 'dekabr'];
    return { text: `1 yanvardan ${names[to]} ayının sonunadək layihəyə hər ay ${f(per)} AZN xərclənib. İnkişaf xərclərinin kapitallaşdırılma meyarları 1 ${names[from]} tarixində ödənilib. Kapitallaşdırılan məbləğ (AZN)?`, answer: per * (to - from + 1), explanation: `${names[from]}–${names[to]}: ${to - from + 1} ay × ${f(per)} = ${f(per * (to - from + 1))}. Əvvəlki xərclər bərpa edilmir.` };
  });
  G(T.I38, () => {
    const o = k(20, 80) * 10, d = k(1, 6) * 10 * pick([1, 1, -1]);
    return { text: `İnvestisiya mülkiyyəti ədalətli dəyər modeli ilə ölçülür: ilin əvvəlində ${f(o)} AZN, sonunda ${f(o + d)} AZN. P/L-də tanınan məbləğ (AZN; zərər mənfi işarə ilə)?`, answer: d, explanation: `${f(o + d)} − ${f(o)} = ${f(d)}. Amortizasiya hesablanmır.` };
  });

  // ---------- Digər (IAS 7, 21, 33, 19, IFRS 5)
  G(T.OT, () => {
    const sh = ri(5, 20) * 100000, iss = ri(2, 8) * 100000, m = pick([3, 4, 6, 9]), pref = k(1, 10) * 10, profit = k(50, 200) * 10, w = sh + iss * m / 12, ans = round((profit - pref) / w, 2);
    return { text: `Xalis mənfəət ${f(profit)} AZN, imtiyazlı səhmlər üzrə dividend ${f(pref)} AZN. İlin əvvəlində ${f(sh)} adi səhm var idi; ilin sonuna ${m} ay qalmış bazar qiymətinə ${f(iss)} səhm buraxılıb. Əsas EPS (AZN, 2 onluq)?`, answer: ans, tolerance: 0.011, explanation: `Orta çəkili = ${f(sh)} + ${f(iss)} × ${m}/12 = ${f(w)}; (${f(profit)} − ${f(pref)}) / ${f(w)} = ${ans}.` };
  });
  G(T.OT, () => {
    const sh = ri(5, 20) * 100000, bond = k(1, 5) * 100, c = pick([5, 6, 8]), conv = ri(5, 20) * 10000, profit = k(30, 100) * 10, add = bond * c / 100 * 0.8, ans = round((profit + add) / (sh + conv), 2);
    return { text: `Xalis mənfəət ${f(profit)} AZN, ${f(sh)} adi səhm. ${f(bond)} AZN, ${c}% faizli konvertasiya olunan istiqraz ${f(conv)} səhmə çevrilə bilər; vergi dərəcəsi 20%. Azaldılmış EPS (AZN, 2 onluq)?`, answer: ans, tolerance: 0.011, explanation: `(${f(profit)} + ${f(bond * c / 100)} × 0,8) / (${f(sh)} + ${f(conv)}) = ${ans}.` };
  });
  G(T.OT, () => {
    const usd = k(2, 20), r1 = pick([1.68, 1.70, 1.72]), d = pick([0.02, 0.03, 0.05]), ans = round(usd * d, 2);
    return { text: `Şirkət ${f(usd)} USD-lik malı nisyə alıb, əməliyyat tarixində məzənnə ${r1.toFixed(2)} AZN. Hesabat tarixində məzənnə ${(r1 + d).toFixed(2)} AZN, borc ödənilməyib. Məzənnə zərəri (AZN)?`, answer: ans, tolerance: 1, explanation: `${f(usd)} × (${(r1 + d).toFixed(2)} − ${r1.toFixed(2)}) = ${f(ans)}.` };
  });
  G(T.OT, () => {
    const pbt = k(30, 100), dep = k(5, 20), rec = k(1, 8), inv = k(1, 8), pay = k(1, 8), ans = pbt + dep - rec + inv + pay;
    return { text: `Vergidən əvvəl mənfəət ${f(pbt)}, amortizasiya ${f(dep)}; debitor borcları ${f(rec)} artıb, ehtiyatlar ${f(inv)} azalıb, kreditor borcları ${f(pay)} artıb (AZN). Əməliyyat fəaliyyətindən yaranan pul vəsaiti (vergi və faizdən əvvəl, AZN)?`, answer: ans, explanation: `${f(pbt)} + ${f(dep)} − ${f(rec)} + ${f(inv)} + ${f(pay)} = ${f(ans)}.` };
  });
  G(T.OT, () => {
    const o = k(10, 40) * 10, dep = k(10, 40), disp = k(5, 20), buy = k(30, 120), c = o - dep - disp + buy;
    return { text: `Əsas vəsaitlərin balans dəyəri: açılış ${f(o)}, bağlanış ${f(c)} AZN. İl üzrə amortizasiya ${f(dep)}, satılmış aktivlərin balans dəyəri ${f(disp)} AZN, yenidən qiymətləndirmə yoxdur. Əsas vəsaitlərin alışına ödənilən pul (AZN)?`, answer: buy, explanation: `${f(c)} − ${f(o)} + ${f(dep)} + ${f(disp)} = ${f(buy)}.` };
  });
  G(T.OT, () => {
    const dbo = k(30, 90) * 10, pa = dbo - k(5, 20) * 10, r = pick([4, 5, 6, 8]);
    return { text: `Müəyyən edilmiş ödəniş planı: ilin əvvəlinə öhdəlik ${f(dbo)} AZN, plan aktivləri ${f(pa)} AZN, diskont dərəcəsi ${r}%. P/L-də tanınan xalis faiz xərci (AZN)?`, answer: (dbo - pa) * r / 100, explanation: `(${f(dbo)} − ${f(pa)}) × ${r}% = ${f((dbo - pa) * r / 100)}.` };
  });
  G(T.OT, () => {
    const ca = k(50, 150), fv = ca + k(-10, 10), cts = k(2, 8), ans = Math.min(ca, fv - cts);
    return { text: `Satış üçün saxlanılan kimi təsnif edilən aktivin balans dəyəri ${f(ca)} AZN, ədalətli dəyəri ${f(fv)} AZN, satış xərcləri ${f(cts)} AZN. Aktiv hansı məbləğdə ölçülür (AZN)?`, answer: ans, explanation: `min(${f(ca)}; ${f(fv)} − ${f(cts)}) = ${f(ans)}.` };
  });
  G(T.OT, () => {
    const sh = ri(5, 20) * 100000, ratio = pick([4, 5, 10]), profit = k(20, 90) * 10, tot = sh + sh / ratio, ans = round(profit / tot, 2);
    return { text: `Mənfəət ${f(profit)} AZN. İlin əvvəlində ${f(sh)} adi səhm var idi, ilin ortasında hər ${ratio} səhmə 1 bonus səhm verilib. Əsas EPS (AZN, 2 onluq)?`, answer: ans, tolerance: 0.011, explanation: `Bonus emissiyası ilin əvvəlindən nəzərə alınır: ${f(tot)} səhm; ${f(profit)} / ${f(tot)} = ${ans}.` };
  });

  // ---------- Digər standartlar
  G(T.N, () => {
    const emp = ri(5, 20) * 10, opt = pick([100, 200, 500]), fv = pick([5, 8, 10, 12]), vest = pick([2, 3, 4]), stay = pick([80, 90]), y = ri(1, vest - 1), ans = round(emp * stay / 100 * opt * fv * y / vest, 2);
    return { text: `${emp} işçinin hər birinə ${opt} səhm opsionu verilib; verilmə tarixində opsionun ədalətli dəyəri ${fv} AZN, hüquq qazanma müddəti ${vest} il. İşçilərin ${stay}%-nin qalacağı gözlənilir. ${y}-ci ilin sonuna kapitalda yığılmış məbləğ (AZN)?`, answer: ans, tolerance: 2, explanation: `${emp} × ${stay}% × ${opt} × ${fv} × ${y}/${vest} = ${f(ans)}.` };
  });
  G(T.N, () => {
    const n = ri(2, 10) * 10, fv0 = ri(8, 20) * 100, up = ri(1, 5) * 100, cts = 5;
    const ans = n * up * (100 - cts) / 100;
    return { text: `${n} baş mal-qara: ilin əvvəlində bir başın ədalətli dəyəri ${f(fv0)} AZN, sonunda ${f(fv0 + up)} AZN; satış xərcləri ədalətli dəyərin ${cts}%-dir. Alış-satış olmayıb. İl üzrə P/L-də tanınan gəlir (AZN)?`, answer: ans, tolerance: 1, explanation: `(${f(fv0 + up)} − ${f(fv0)}) × ${100 - cts}% × ${n} = ${f(ans)} (IAS 41: ədalətli dəyər − satış xərcləri).` };
  });
})();
