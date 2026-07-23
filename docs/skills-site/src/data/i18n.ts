// Trilingual UI strings for the Vizibil prototype (RO default · EN · HU).
// Rendered RO server-side; a language switcher swaps [data-i18n] text client-side.
// Artwork titles and artist bios stay in Romanian (their original context).

export type Lang = "ro" | "en" | "hu";
export const langs: { id: Lang; label: string }[] = [
  { id: "ro", label: "RO" },
  { id: "en", label: "EN" },
  { id: "hu", label: "HU" },
];

type T = Record<Lang, string>;
export const t: Record<string, T> = {
  "nav.home": { ro: "Acasă", en: "Home", hu: "Kezdőlap" },
  "nav.gallery": { ro: "Galerie", en: "Gallery", hu: "Galéria" },
  "nav.artists": { ro: "Artiști", en: "Artists", hu: "Művészek" },
  "nav.journal": { ro: "Jurnal", en: "Journal", hu: "Napló" },
  "nav.about": { ro: "Despre", en: "About", hu: "Rólunk" },
  "nav.donate": { ro: "Donează", en: "Donate", hu: "Adományozz" },

  "cta.discover": { ro: "Descoperă artiștii", en: "Discover the artists", hu: "Fedezd fel a művészeket" },
  "cta.support_org": { ro: "Susține organizația", en: "Support the collective", hu: "Támogasd a szervezetet" },
  "cta.become_partner": { ro: "Devino partener", en: "Become a partner", hu: "Legyél partner" },
  "cta.buy_now": { ro: "Cumpără acum", en: "Buy now", hu: "Vásárlás most" },
  "cta.support_artist": { ro: "Susține artistul", en: "Support the artist", hu: "Támogasd a művészt" },
  "cta.commission": { ro: "Comandă o lucrare", en: "Commission a piece", hu: "Rendelj alkotást" },
  "cta.view_all": { ro: "Vezi tot", en: "View all", hu: "Összes" },
  "cta.read": { ro: "Citește", en: "Read", hu: "Olvasd el" },

  "hero.title": { ro: "Facem vizibili artiștii din jurul nostru.", en: "We make the artists around us visible.", hu: "Láthatóvá tesszük a körülöttünk élő művészeket." },
  "hero.sub": { ro: "Vizibil sprijină artiști vizuali din Cluj care se confruntă cu excluziune, dizabilitate sau izolare — expunându-le lucrările, poveștile și vocea.", en: "Vizibil supports visual artists in Cluj facing exclusion, disability or isolation — showing their work, their stories and their voice.", hu: "A Vizibil kolozsvári vizuális művészeket támogat, akik kirekesztéssel, fogyatékossággal vagy elszigeteltséggel néznek szembe — bemutatva munkáikat, történeteiket és hangjukat." },

  "spotlight.label": { ro: "În lumina reflectoarelor", en: "Spotlight", hu: "Reflektorfényben" },
  "spotlight.cta": { ro: "Vezi artistul", en: "Meet the artist", hu: "Ismerd meg a művészt" },

  "impact.title": { ro: "Ce am construit împreună", en: "What we've built together", hu: "Amit együtt építettünk" },
  "impact.artists": { ro: "artiști susținuți", en: "artists supported", hu: "támogatott művész" },
  "impact.works": { ro: "lucrări expuse", en: "works exhibited", hu: "kiállított alkotás" },
  "impact.events": { ro: "evenimente organizate", en: "events held", hu: "megrendezett esemény" },
  "impact.raised": { ro: "lei strânși pentru artiști", en: "lei raised for artists", hu: "lej a művészeknek" },

  "about.title": { ro: "Despre Vizibil", en: "About Vizibil", hu: "A Vizibilről" },
  "about.body": { ro: "Suntem un colectiv din Cluj-Napoca care aduce în față artiști vizuali trecuți cu vederea. Le oferim spațiu de expunere, sprijin și o comunitate — pentru ca arta lor să fie văzută și susținută.", en: "We are a Cluj-Napoca collective that brings overlooked visual artists to the fore — offering space to exhibit, support, and a community, so their art is seen and sustained.", hu: "Kolozsvári kollektíva vagyunk, amely előtérbe helyezi a mellőzött vizuális művészeket — kiállítási teret, támogatást és közösséget kínálva, hogy művészetük látható és fenntartható legyen." },
  "about.cta": { ro: "Cum lucrăm", en: "How we work", hu: "Hogyan dolgozunk" },

  "gallery.title": { ro: "Galerie", en: "Gallery", hu: "Galéria" },
  "gallery.sub": { ro: "lucrări disponibile. Filtrează după artist, categorie, tehnică sau disponibilitate.", en: "works available. Filter by artist, category, technique or availability.", hu: "elérhető alkotás. Szűrj művész, kategória, technika vagy elérhetőség szerint." },
  "filter.artist": { ro: "Artist", en: "Artist", hu: "Művész" },
  "filter.category": { ro: "Categorie", en: "Category", hu: "Kategória" },
  "filter.technique": { ro: "Tehnică", en: "Technique", hu: "Technika" },
  "filter.availability": { ro: "Disponibilitate", en: "Availability", hu: "Elérhetőség" },
  "filter.all": { ro: "Toate", en: "All", hu: "Összes" },
  "filter.available": { ro: "Disponibile", en: "Available", hu: "Elérhető" },
  "status.sold": { ro: "Vândut", en: "Sold", hu: "Elkelt" },
  "gallery.empty": { ro: "Nicio lucrare pentru filtrele alese.", en: "No works match these filters.", hu: "Nincs a szűrőknek megfelelő alkotás." },

  "artists.title": { ro: "Artiștii colectivului", en: "The collective's artists", hu: "A kollektíva művészei" },
  "artist.works": { ro: "Lucrări", en: "Works", hu: "Alkotások" },
  "artist.about": { ro: "Despre artist", en: "About the artist", hu: "A művészről" },
  "artist.support_title": { ro: "Susține pe", en: "Support", hu: "Támogasd" },
  "artwork.by": { ro: "de", en: "by", hu: "—" },
  "artwork.medium": { ro: "Tehnică", en: "Technique", hu: "Technika" },
  "artwork.category": { ro: "Categorie", en: "Category", hu: "Kategória" },
  "artwork.size": { ro: "Dimensiune", en: "Size", hu: "Méret" },
  "artwork.year": { ro: "An", en: "Year", hu: "Év" },
  "artwork.note": { ro: "Originalul include certificat semnat. Livrare gratuită în Cluj.", en: "The original includes a signed certificate. Free delivery in Cluj.", hu: "Az eredeti aláírt tanúsítványt tartalmaz. Ingyenes kézbesítés Kolozsváron." },
  "back.gallery": { ro: "← Galerie", en: "← Gallery", hu: "← Galéria" },

  "journal.title": { ro: "Jurnal", en: "Journal", hu: "Napló" },
  "journal.sub": { ro: "Evenimente, vernisaje și interviuri cu artiștii colectivului.", en: "Events, openings and interviews with the collective's artists.", hu: "Események, megnyitók és interjúk a kollektíva művészeivel." },
  "journal.upcoming": { ro: "Evenimente", en: "Events", hu: "Események" },
  "journal.past": { ro: "Din arhivă", en: "From the archive", hu: "Az archívumból" },

  "donate.title": { ro: "Susține organizația", en: "Support the collective", hu: "Támogasd a szervezetet" },
  "donate.sub": { ro: "Printr-o donație lunară sau o singură dată. Fiecare contribuție merge direct către artiști și expoziții.", en: "With a monthly or one-off donation. Every contribution goes straight to artists and exhibitions.", hu: "Havi vagy egyszeri adománnyal. Minden hozzájárulás közvetlenül a művészekhez és kiállításokhoz jut." },
  "donate.monthly": { ro: "Lunar", en: "Monthly", hu: "Havonta" },
  "donate.once": { ro: "O singură dată", en: "One-off", hu: "Egyszeri" },
  "donate.give": { ro: "Donează", en: "Donate", hu: "Adományozz" },
  "donate.thanks": { ro: "Mulțumim! (demonstrație — nicio plată reală)", en: "Thank you! (demo — no real payment)", hu: "Köszönjük! (demó — nincs valós fizetés)" },

  "footer.tagline": { ro: "Facem vizibili artiștii din jurul nostru.", en: "We make the artists around us visible.", hu: "Láthatóvá tesszük a körülöttünk élő művészeket." },
  "footer.rights": { ro: "colectiv pentru demonstrație de design", en: "collective — design demo", hu: "kollektíva — dizájn demó" },
};

export const tr = (key: string, lang: Lang = "ro") => t[key]?.[lang] ?? t[key]?.ro ?? key;
