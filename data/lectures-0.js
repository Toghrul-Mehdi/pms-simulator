// Mühazirələr üçün köməkçilər. Mühazirələr rəsmi imtahan proqramının 50 bəndi üzrə düzülüb.
// Blok növləri: P — mətn abzasları, U — siyahı, E — nümunə, J — hesablar planı üzrə yazılışlar, TB — cədvəl, W — diqqət.
(function () {
  PMS.materials.sections = [];
  PMS.lec = {
    P: (h, ...p) => ({ h, p }),
    U: (h, ul) => ({ h, ul }),
    E: (q, ...steps) => ({ h: 'Nümunə', ex: { q, steps } }),
    J: (h, ...dt) => ({ h: h || 'Hesablar planı üzrə yazılışlar', dt }),
    TB: (h, ...table) => ({ h, table }),
    W: (...ul) => ({ h: 'Diqqət', warn: ul }),
    // n — proqramdakı bənd nömrəsi; src — PMS.sources açarları; k — köhnə konspektin id-si
    add(n, id, group, title, topic, src, summary, blocks, k) {
      PMS.materials.sections.push({ n, id, group, title, topic, src, summary, blocks, k });
    },
  };
})();
