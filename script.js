/* ================================================================
   JEFF UNDERDAHL — REDESIGN / CLIENT SCRIPT
   ================================================================ */

const LISTINGS = [
  {
    address: "Escondido, CA 92027",
    price: "$1,025,000",
    beds: 5, baths: 3, sqft: "2,798",
    type: "Single Family Home",
    mls: "260009183SD",
    status: "Open Sat 11AM–2PM",
    img: "https://img.chime.me/imageemb/mls-listing/944/260009183SD/60f44708/1776439761/w600_original_FMVLjoMgGADgE-k_-Ag6O5Nx0qj4aGiaLikSlaoQpEY8fdPVN1qrt18ApiefK8vmyTqfqwWsEZudBRDRTwxao7Qw1kF7aWjjFVoMgFCMMY7iJAUERL5cdQ4BkflOZAZEZjuh_CB_-dewlt3ZUP5TZ7Am4ft-iyS7eqvLz-h_ezyD8ujRQpOFlykeK1Ooju3p8AkAAP__-jpg.webp",
    count: 57
  },
  {
    address: "1643 Rue de Valle, San Marcos, CA 92078",
    price: "$575,000",
    beds: 2, baths: 2, sqft: "1,060",
    type: "Condo",
    mls: "NDP2603693",
    status: "Open Sun 3PM–5PM",
    img: "https://img.chime.me/imageemb/mls-listing/944/NDP2603693/0a115e8a/1776438862/w600_original_FMXBboMgGADgJ5r_UBe23WSaLNNfZCG9E6UWqoUqWvXpm56-Swh-_gZQ3kStC2owYY9aN0KY9BwGDag7o6CZnNdT2KH55ZK__XndAyEflNLkK6FAAO11r44-RlusaDNAm60o2w3z4mVSW3HwvCe1AHdjy9ls8shP73NJBFu6H0wZp584sv9Hmd6dcrEUReWeAQAA__8-jpg.webp",
    count: 30
  },
  {
    address: "1171 Prussian Way, Oceanside, CA 92057",
    price: "$970,000",
    beds: 5, baths: 3, sqft: "2,997",
    type: "Single Family Home",
    mls: "260009169SD",
    status: "Open Sat 11AM–2PM",
    img: "https://img.chime.me/imageemb/mls-listing/944/260009169SD/0f496d95/1776424606/h600_original_FMXfSoYwFADwJ-o7zRSzO0kh0uMfUMFuYuiYW4ZrOznX08d39duIjHsB4EbdloP4rijcluMbyApHuwAUq-LQ2cMISwG6t3ZoH96NkMBYkqZJnMXPwAD1V6j_ZIS6PFHngDo_cVguLMq7T43uQ1PMHj1E_afsJVavtXNq99ZPk_993K6RyxAlP_E6k87YR4XX-B8AAP__-jpg.webp",
    count: 50
  },
  {
    address: "660 Westbrook Loop, San Marcos, CA 92078",
    price: "$1,540,000",
    beds: 5, baths: 4, sqft: "2,998",
    type: "Single Family Home",
    mls: "PTP2602865",
    status: "Open 4/25 12PM–3PM",
    img: "https://img.chime.me/imageemb/mls-listing/944/PTP2602865/c8a0d2e8/1776424616/h600_original_FMXdboIwFADgJxqHjr9sdywwCfFAMQ3qJakVKJg20BTK0xuvvsEYvf4CdHr0uDLdPBrncfUCs4jVzAJQPMYO6KK0WIwDWtSs_iq16IGQKEmiMI4JEEA5ufPRf6PMLcoUUKYWGd8xyz8GlWxcld133MDy3n8WjOWn299kE_lPKvpzbf1LMbVbubEhmsNAK0qO5h0AAP__-jpg.webp",
    count: 73
  },
  {
    address: "1291 Dexter, Escondido, CA 92029",
    price: "$950,000",
    beds: 4, baths: 3, sqft: "3,008",
    type: "Single Family Home",
    mls: "260009158SD",
    status: "Open 4/17 1PM–3PM",
    img: "https://img.chime.me/imageemb/mls-listing/944/260009158SD/c489cf91/1776424607/h600_original_FMXNboMgHADwJ5r_oPMjuyGaqRHUxB3cZWGKDnSRIrHFp296-v1Zq48PAK6lN-6Wb9I6b9z_wRpx2E0AFZPk0JpdC2MdtEXTN2-VFgsgFMZx6MfoHRBQtbr6Wnyq8pMqDFThk_bjg2b5y4CpzrFsuLMO1vmXF8P8SaaoINiU-PZVXnXOSNIGaSKHiqTTt_8jrmh5BgAA__8-jpg.webp",
    count: 15
  },
  {
    address: "4793 Endeavor LN, Carlsbad, CA 92008",
    price: "$1,299,900",
    beds: 2, baths: 2, sqft: "1,322",
    type: "Single Family Home",
    mls: "IV26082809",
    status: "Open Sat 1PM–4PM",
    img: "https://img.chime.me/imageemb/mls-listing/944/IV26082809/570c6aeb/1776424573/h600_original_FMXBboIwGADgJxo_FBjbbmQQES2UiMF4a7CBFkxr-SWWpzeevhHRLH8A3Eiv18hnic7r9R3QigVnAVTcJAdmtREWHbCibuuv0ogBgiBOktgPSQQBUDW54zYQqvKVqhSoSlfa9i-a5R_DSjWuys6kbmBlLOq4PD0vxbclhdH-7_5RuXQqzc8_v-5IFy3ZYRo3MbwDAAD__w-jpg.webp",
    count: 24
  },
  {
    address: "27853 Dogwood Gln, Escondido, CA 92026",
    price: "$1,275,000",
    beds: 5, baths: 3, sqft: "3,243",
    type: "Single Family Home",
    mls: "NDP2603681",
    status: "Open Sat 12PM–2PM",
    img: "https://img.chime.me/imageemb/mls-listing/944/NDP2603681/c9c09eca/1776424590/h600_original_FMXJjoIwGADgJ4J_yhLI3JhAZuMHZNHorWLFtpA20AD16Y2n72GMXj4BqOZurwwdubFuryYwM1vMyADZjVOoZqXZbCxUP2VbOn-aDUBIGEXhhxcHQACFtPlz8FBkK4oEUCQrtv2OafbWL8TBFmkXFAPw6cs7fl-bnG7bdNoyhbHfNMG_vMdk75Tze6kXrP1zIuUrAAD__w-jpg.webp",
    count: 34
  },
  {
    address: "1509 Manzanita, Vista, CA 92084",
    price: "$1,499,999",
    beds: 4, baths: 4, sqft: "3,008",
    type: "Single Family Home",
    mls: "SW26082713",
    status: "Coming Soon",
    comingSoon: true,
    img: "https://img.chime.me/imageemb/mls-listing/944/SW26082713/d9a4f0cb/1776424552/h600_original_FMXNToQwEADgJ3JnW0CiN5IS0DD8RNToxZBasBVCA0OlfXqzp--HyO6PAIPVF7nSMGvyF7kuQJvaaVaA6lsP0G6rVRt5aMumb-6erZqAsSRN4yS-T4EBml9fhYmjyR2aDNBkDnt5oshvRrXpfC1er00Hn-JYxqfAWRT-3tRJeaUDP96ddOXXKM4HLIoieendB7_-BwAA__8-jpg.webp",
    count: 69
  },
  {
    address: "616 Capistrano, Oceanside, CA 92058",
    price: "$779,900",
    beds: 2, baths: 1, sqft: "816",
    type: "Single Family Home",
    mls: "260009132SD",
    status: "Open Sat 1PM–3PM",
    img: "https://img.chime.me/imageemb/mls-listing/944/260009132SD/0439d2b3/1776424563/h600_original_FMVBb4IwFADgXwQvZZBuu0Fgg8EDDpAdDam1UkFqeaLl1xtP35nIrN8Agxl9sdAwjeR8scxAVq40SUB5HAdo7WKkJQdt3nSN92ekAsYizsPwM-TAAPXFVbsKUGcb6hhQxxt24olp9vaj1hhhWjBUUP-Xa2T3ILsl3tfhtxe50iW3P9SwnuYqkS64T4_kdLXFKwAA__8-jpg.webp",
    count: 29
  },
  {
    address: "3647 Glen AVE, Carlsbad, CA 92010",
    price: "$1,399,000",
    beds: 4, baths: 3, sqft: "1,904",
    type: "Single Family Home",
    mls: "NDP2603672",
    status: "Open Sat 1PM–4PM",
    tour3d: true,
    img: "https://img.chime.me/imageemb/mls-listing/944/NDP2603672/56b4ec19/1776424563/h600_original_FMXPboMgGADwJ5rf8M80u5no1GWoS-mll4bYTypYIUis-PRNT7-7c2b9BuBmCgbt-Dw5Hwz6Ac7i6mYEireJQ2-1Qes89HXHuo9fgwIISdI0DuMkAgJUKv93iJDKcqMyByrzjbJhp0X5Nmrlv2-LM2kFRD2WC37l1ee8r_i0TClOamya0TOdqfGkr2G1iMvxk70CAAD__w-jpg.webp",
    count: 51
  },
  {
    address: "1765 Harold RD, Escondido, CA 92026",
    price: "$799,000",
    beds: 3, baths: 2, sqft: "1,688",
    type: "Single Family Home",
    mls: "NDP2603667",
    status: "Open Sat 12PM–3PM",
    img: "https://img.chime.me/imageemb/mls-listing/944/NDP2603667/4bb554c6/1776424535/h600_original_FMVRS8UgFADgX9Q9mdS13gYJcXfP3EjYYzgnS7fQ6WG4fn309H0TpfIGYJK_2Ehm83RebPwByq7Q5gDd7A30OSaX6YT-Q2n1cEtuAcaer1cuhODAAMN63n-XJwzywNAAhuZAbSu-y395F5ArPbCugVLbz3ozRb3qlzquKHY_DW37RXwf7F161-cjznJaxse_AAAA__8-jpg.webp",
    count: 30
  },
  {
    address: "1315 Alta Vista DR, Vista, CA 92084",
    price: "$1,149,999",
    beds: 4, baths: 2, sqft: "2,812",
    type: "Single Family Home",
    mls: "NDP2603665",
    status: "Open Sat 11AM–2PM",
    img: "https://img.chime.me/imageemb/mls-listing/944/NDP2603665/11a394c5/1776424535/h600_original_FMVRb0QwHADwT8R_nY7Ym4RFzH9Ese1Jml5Dey5taER9-ss9_Rbn7P4JwK0KhXF8Vc6HwjzAbXJ3qwSUN8Wh3YyVm_PQlk3fBJWVMxDykSRRTNMYCKC--_qa31EXB-oMUGcH9uLEvHgZ_WikmCNpMvCVYsd0Gj6_jfKbVvtfcdUsXkZWBt1vOvyrLzZMshOcPgMAAP__-jpg.webp",
    count: 57
  }
];

/* --------- Render listings --------- */
function renderListings() {
  const grid = document.getElementById('listings-grid');
  if (!grid) return;

  const heartSvg = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>';

  grid.innerHTML = LISTINGS.map((l, i) => `
    <article class="card" style="animation-delay:${i * 60}ms" data-index="${i}">
      <div class="card__media">
        <img src="${l.img}" alt="${l.address}" loading="lazy">
        <span class="card__badge ${l.comingSoon ? 'card__badge--soon' : ''}">
          ${!l.comingSoon ? '<span class="dot"></span>' : ''}${l.status}
        </span>
        <button class="card__fav" aria-label="Save listing">${heartSvg}</button>
        <span class="card__count">
          ${l.tour3d
            ? '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg> 3D Tour'
            : '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21"/></svg> ' + l.count
          }
        </span>
      </div>
      <div class="card__body">
        <div class="card__price">
          <strong>${l.price}</strong>
          <span class="card__type">${l.type}</span>
        </div>
        <h3 class="card__address">${l.address}</h3>
        <div class="card__specs">
          <span><strong>${l.beds}</strong> ${l.beds === 1 ? 'Bed' : 'Beds'}</span>
          <span><strong>${l.baths}</strong> ${l.baths === 1 ? 'Bath' : 'Baths'}</span>
          <span><strong>${l.sqft}</strong> SqFt</span>
        </div>
        <div class="card__mls">MLS# ${l.mls}</div>
      </div>
    </article>
  `).join('');
}

/* --------- Intersection observer for card reveal --------- */
function observeCards() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  document.querySelectorAll('.card').forEach(card => io.observe(card));
}

/* --------- Nav scroll state --------- */
function handleNavScroll() {
  const nav = document.getElementById('nav');
  if (!nav) return;
  const onScroll = () => {
    if (window.scrollY > 40) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* --------- Quick search chips --------- */
function wireQuickSearch() {
  document.querySelectorAll('.search__quick a').forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const input = document.getElementById('search-input');
      if (input) {
        input.value = a.dataset.q;
        input.focus();
      }
    });
  });
}

/* --------- Form handlers (stubs for local demo) --------- */
function handleSearch(e) {
  e.preventDefault();
  const q = document.getElementById('search-input').value.trim();
  if (!q) return false;
  document.querySelectorAll('.card').forEach(card => {
    const addr = card.querySelector('.card__address').textContent.toLowerCase();
    const match = addr.includes(q.toLowerCase());
    card.style.display = match ? '' : 'none';
  });
  document.querySelector('#listings').scrollIntoView({ behavior: 'smooth' });
  return false;
}

function handleValuation(e) {
  e.preventDefault();
  const form = e.target;
  form.innerHTML = `
    <div style="text-align:center;padding:40px 0;">
      <div style="font-family:var(--serif);font-size:40px;font-style:italic;color:var(--gold);margin-bottom:12px;">Thanks!</div>
      <p style="color:rgba(246,242,234,.8);">Jeff will reach out personally within one business day with a detailed valuation.</p>
    </div>`;
  return false;
}

function handleContact(e) {
  e.preventDefault();
  const form = e.target;
  form.innerHTML = `
    <div style="text-align:center;padding:40px 0;">
      <div style="font-family:var(--serif);font-size:40px;font-style:italic;color:var(--gold-deep);margin-bottom:12px;">Message sent.</div>
      <p style="color:var(--ink-soft);">I'll get back to you shortly — usually within a few hours. — Jeff</p>
    </div>`;
  return false;
}

/* --------- Mobile nav toggle --------- */
function wireMobileNav() {
  const btn = document.querySelector('.nav__toggle');
  const menu = document.querySelector('.nav__menu');
  if (!btn || !menu) return;
  btn.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });
}

/* --------- Boot --------- */
document.addEventListener('DOMContentLoaded', () => {
  renderListings();
  observeCards();
  handleNavScroll();
  wireQuickSearch();
  wireMobileNav();
});
