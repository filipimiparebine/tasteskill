// Content for the "Aquarelă" art-collective showcase. Fictional org, fictional
// artists; all artwork is generated (see WatercolorArt.astro), never scraped.

export interface Skin { id: string; name: string; blurb: string; }
export const skins: Skin[] = [
  { id: "watercolor", name: "watercolour", blurb: "Soft wet pastels, paper grain, bleeding edges." },
  { id: "gouache", name: "gouache", blurb: "Opaque matte pastel blocks, flat and poster-like." },
  { id: "inkwash", name: "ink-wash", blurb: "Near-monochrome sumi-e; colour only as an accent." },
  { id: "riso", name: "risograph", blurb: "Grainy duotone pastel print, slight mis-registration." },
];

export const org = {
  name: "Aquarelă",
  kicker: "Colectiv de artă · Cluj-Napoca",
  tagline: "Facem vizibili artiștii din jurul nostru.",
  tagline_en: "We make the artists around us visible.",
  about:
    "Aquarelă sprijină artiști vizuali din Cluj care se confruntă cu excluziune, dizabilitate sau izolare — expunându-le lucrările, poveștile și vocea.",
};

export interface Artist {
  slug: string; name: string; alias: string; initials: string;
  palette: string[]; // avatar bloom
  city: string; media: string[]; bio: string;
}

export const artists: Artist[] = [
  { slug: "tibor-incze", name: "Tibor Incze", alias: "Tibi", initials: "TI", palette: ["#e6c46b", "#d9a441"], city: "Cluj-Napoca", media: ["Sculptură", "Acuarelă"], bio: "Lucrează între sculptură și acuarelă, căutând chipuri în forme simple. Expune cu Aquarelă din 2023." },
  { slug: "sorina-l", name: "Sorina L. Silvinschi", alias: "Sorina", initials: "SL", palette: ["#a7c0e0", "#c3b3e0"], city: "Cluj-Napoca", media: ["Tehnică mixtă", "Fotografie"], bio: "Colaje și tehnică mixtă despre memorie și oraș. Fotografiază strada și o repictează." },
  { slug: "radu-chiorean", name: "Radu Chiorean", alias: "Radu", initials: "RC", palette: ["#eaa79b", "#d98072"], city: "Cluj-Napoca", media: ["Guașă", "Figurativ"], bio: "Figuri expresive, culoare directă, mișcare. Pictează sportivi, dansatori, corpuri în efort." },
  { slug: "judit-demeter", name: "Judit Demeter", alias: "Judit", initials: "JD", palette: ["#8fae7d", "#5f8f6b"], city: "Cluj-Napoca", media: ["Colaj", "Natură"], bio: "Ierbare și colaje din materiale găsite. Lucrează cu frunze, semințe și hârtie presată." },
  { slug: "darius-cosma", name: "Darius Cosma", alias: "Darius", initials: "DC", palette: ["#8695c4", "#6f7fb0"], city: "Cluj-Napoca", media: ["Peisaj", "Acuarelă"], bio: "Peisaje din jurul Clujului — dealuri, drumuri, cer. Pleacă cu blocul de schițe în fiecare weekend." },
  { slug: "cristian-morariu", name: "Cristian Morariu", alias: "Cristi", initials: "CM", palette: ["#7fb0a6", "#a9c5a0"], city: "Cluj-Napoca", media: ["Acrilic", "Peisaj"], bio: "Scene luminoase, cer mare, orizonturi joase. Caută momentul dinaintea ploii." },
  { slug: "ana-boghean", name: "Ana Boghean", alias: "Ana", initials: "AB", palette: ["#cf8a6a", "#e0a884"], city: "Cluj-Napoca", media: ["Portret", "Acuarelă"], bio: "Portrete în acuarelă, priviri directe. O interesează oamenii pe care nu-i vede nimeni." },
  { slug: "felician-baciu", name: "Felician Baciu", alias: "Feli", initials: "FB", palette: ["#b8a6d0", "#8f7fb0"], city: "Cluj-Napoca", media: ["Tuș", "Desen"], bio: "Linie continuă, tuș, umor. Desenează creaturi care par să fugă din pagină." },
];

export interface Artwork {
  slug: string; title: string; artist: string; // artist slug
  medium: string; themes: string[]; year: number; priceRON: number;
  palette: string[]; seed: number;
}

export const mediums = ["Acuarelă", "Guașă", "Tuș", "Tehnică mixtă", "Acrilic", "Colaj"];
export const themeTags = ["Portret", "Peisaj", "Abstract", "Natură", "Figură", "Oraș"];

export const artworks: Artwork[] = [
  { slug: "chip-de-lut", title: "Chip de lut", artist: "tibor-incze", medium: "Acuarelă", themes: ["Portret", "Abstract"], year: 2024, priceRON: 640, palette: ["#e6c46b", "#d9a441", "#efd9a0"], seed: 7 },
  { slug: "dupa-ploaie", title: "După ploaie", artist: "cristian-morariu", medium: "Acrilic", themes: ["Peisaj", "Natură"], year: 2024, priceRON: 880, palette: ["#7fb0a6", "#a9c5a0", "#c9dcc0"], seed: 12 },
  { slug: "doi-luptatori", title: "Doi luptători", artist: "radu-chiorean", medium: "Guașă", themes: ["Figură"], year: 2023, priceRON: 720, palette: ["#eaa79b", "#d98072", "#f2c9a0"], seed: 21 },
  { slug: "ierbar-de-toamna", title: "Ierbar de toamnă", artist: "judit-demeter", medium: "Colaj", themes: ["Natură", "Abstract"], year: 2024, priceRON: 510, palette: ["#8fae7d", "#5f8f6b", "#bcd0a4"], seed: 33 },
  { slug: "drum-spre-feleac", title: "Drum spre Feleac", artist: "darius-cosma", medium: "Acuarelă", themes: ["Peisaj"], year: 2023, priceRON: 690, palette: ["#8695c4", "#6f7fb0", "#c0c7e0"], seed: 44 },
  { slug: "privire-directa", title: "Privire directă", artist: "ana-boghean", medium: "Acuarelă", themes: ["Portret"], year: 2024, priceRON: 760, palette: ["#cf8a6a", "#e0a884", "#f2b8b0"], seed: 51 },
  { slug: "creatura-care-fuge", title: "Creatura care fuge", artist: "felician-baciu", medium: "Tuș", themes: ["Abstract", "Figură"], year: 2024, priceRON: 430, palette: ["#b8a6d0", "#8f7fb0", "#dcd2ec"], seed: 63 },
  { slug: "oras-albastru", title: "Oraș albastru", artist: "sorina-l", medium: "Tehnică mixtă", themes: ["Oraș", "Abstract"], year: 2023, priceRON: 820, palette: ["#a7c0e0", "#c3b3e0", "#8695c4"], seed: 72 },
  { slug: "dealuri-in-septembrie", title: "Dealuri în septembrie", artist: "darius-cosma", medium: "Acuarelă", themes: ["Peisaj", "Natură"], year: 2024, priceRON: 700, palette: ["#a9c5a0", "#e6c46b", "#8fae7d"], seed: 88 },
  { slug: "dansatoarea", title: "Dansatoarea", artist: "radu-chiorean", medium: "Guașă", themes: ["Figură", "Portret"], year: 2024, priceRON: 750, palette: ["#eaa79b", "#f2c9a0", "#cf8a6a"], seed: 95 },
  { slug: "fereastra-spre-somes", title: "Fereastră spre Someș", artist: "cristian-morariu", medium: "Acrilic", themes: ["Oraș", "Peisaj"], year: 2023, priceRON: 910, palette: ["#7fb0a6", "#a7c0e0", "#c9dcc0"], seed: 108 },
  { slug: "portret-in-ocru", title: "Portret în ocru", artist: "ana-boghean", medium: "Acuarelă", themes: ["Portret"], year: 2023, priceRON: 660, palette: ["#e0a884", "#d9a441", "#cf8a6a"], seed: 117 },
  { slug: "forma-simpla", title: "Formă simplă", artist: "tibor-incze", medium: "Tehnică mixtă", themes: ["Abstract"], year: 2024, priceRON: 560, palette: ["#efd9a0", "#a9c5a0", "#e6c46b"], seed: 129 },
  { slug: "frunze-presate", title: "Frunze presate", artist: "judit-demeter", medium: "Colaj", themes: ["Natură"], year: 2023, priceRON: 480, palette: ["#8fae7d", "#bcd0a4", "#e6c46b"], seed: 134 },
  { slug: "noapte-lila", title: "Noapte lila", artist: "felician-baciu", medium: "Tuș", themes: ["Abstract", "Oraș"], year: 2024, priceRON: 450, palette: ["#8f7fb0", "#b8a6d0", "#6f7fb0"], seed: 146 },
  { slug: "strada-repictata", title: "Strada repictată", artist: "sorina-l", medium: "Tehnică mixtă", themes: ["Oraș"], year: 2024, priceRON: 840, palette: ["#c3b3e0", "#a7c0e0", "#eaa79b"], seed: 159 },
];

export interface Post { slug: string; kind: "Eveniment" | "Interviu"; title: string; date: string; excerpt: string; palette: string[]; seed: number; }
export const posts: Post[] = [
  { slug: "vernisaj-fragmente", kind: "Eveniment", title: "Vernisaj: Fragmente (In)vizibile", date: "23 sept. 2024", excerpt: "O seară cu lucrările a nouă artiști din colectiv, concert live și lansarea catalogului de toamnă.", palette: ["#e6c46b", "#eaa79b"], seed: 3 },
  { slug: "interviu-ana", kind: "Interviu", title: "Ana Boghean: „Pictez oamenii pe care nu-i vede nimeni”", date: "9 oct. 2024", excerpt: "Despre portret ca formă de atenție și despre cum a ajuns culoarea să conteze mai mult decât linia.", palette: ["#cf8a6a", "#e0a884"], seed: 5 },
  { slug: "atelier-forme-culori", kind: "Eveniment", title: "Atelier: Exprimare prin forme și culori", date: "2 nov. 2024", excerpt: "Serie de ateliere deschise dedicate persoanelor cu dizabilități neuro-psihice. Fără experiență necesară.", palette: ["#a9c5a0", "#7fb0a6"], seed: 9 },
  { slug: "interviu-radu", kind: "Interviu", title: "Radu Chiorean despre mișcare și guașă", date: "20 nov. 2024", excerpt: "Cum ține energia unui corp în efort cu cel mai direct mediu pe care îl știe: guașa.", palette: ["#eaa79b", "#f2c9a0"], seed: 15 },
];

// helpers
export const getArtist = (slug: string) => artists.find((a) => a.slug === slug)!;
export const worksByArtist = (slug: string) => artworks.filter((w) => w.artist === slug);
export const getArtwork = (slug: string) => artworks.find((w) => w.slug === slug)!;
