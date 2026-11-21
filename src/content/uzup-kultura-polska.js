import { group } from './util.js';

const names = (list) => list.split(';').map((name) => name.trim());

export default {
  serwis: group(630, ...names(`
    Ninateka; Polona; Wolne Lektury; Legimi;
    Publio; Woblink; Empik Go; Virtualo;
    Audioteka; Listonic; PanParagon; Bilkom;
    Koleo; e-podróżnik; Nocowanie.pl; Noclegi.pl;
    e-turysta; Jakdojade; Sknerus; Picodi;
    Qpony; GdziePoLek; KtoMaLek; Jasnopis;
    Ortograf.pl; Synonim.net; PWN SJP; Pracuj.pl;
    Just Join IT; No Fluff Jobs; RocketJobs.pl; Aplikuj.pl;
    Zrzutka.pl; Siepomaga; Pomagam.pl; Patronite;
    Sello; Shoper; BaseLinker; Apaczka;
    Furgonetka; GlobKurier; XTB; Polsat Go;
    TVP VOD; TVP Sport; Onet Poczta; WP Poczta;
    Poczta o2; Poczta Interia
  `)),
  raper: [
    ...group(470, ...names(`
    Asster; White 2115; Lanek; Kizo;
    Bambi; Young Leosia; Fukaj; Zdechły Osa;
    Kukon; Avi; Louis Villain; Małpa;
    Sarius; Reto; Słoń; Kali;
    Kacper HTA; Gibbs; TPS; Dedis;
    Hinol Polska Wersja; Polska Wersja; Jano Polska Wersja; Kabe;
    Opiat; Żyto; Miły ATZ; Młody West;
    Jan-rapowanie; Berson; Frosti; Qry;
    Wiktor z WWA; catchup; Rusina; Szopeen;
    Kosa; Koldi; Vkie; Belmondo;
    Mobbyn; Young Multi; Tuzza; Łajzol;
    JWP; Bez Cenzury; Ero; Kosi;
    Siwers; Sokół; DJ 600V; Pezet-Noon;
    Noon; Emas; Demonologia; WCK;
    Syny; Piernikowski; 1988; Łona i Webber;
    Eis; Fenomen; WWO
  `)),
    ['O.S.T.R.', 'ostr', 'Ostr'], ['Gural', 'DonGURALesko', 'dGE'], ['Kękę', 'Keke'],
    ['Quebonafide', 'Quebo'], ['Taco Hemingway', 'Taco'],
  ],
  zespol: group(460, ...names(`
    Kwiat Jabłoni; LemON; Daria Zawiałow; Tęskno;
    Baasch; Bokka; Kamp!; Rebeka;
    Rysy; Xxanaxx; Bass Astral x Igo;
    Bitamina; Karaś/Rogucki; Paula i Karol; Dziwna Wiosna;
    Niemoc; Hengelo; Brodka; Domowe Melodie;
    Kasia Kowalska; Mela Koteluk; Król; Siekiera;
    Apteka; Variete; Aurora; WC;
    Abaddon; Armia; Cool Kids of Death; Muchy;
    Kumka Olik; Koniec Świata; Akurat; Trubadurzy;
    VOX; 2 plus 1; Andrzej i Eliza; SBB;
    Klan; Nurt; Anawa; Dżamble;
    Krzak; Test; Krywań; Dikanda;
    Čači Vorba; Żywiołak; Kapela ze Wsi Warszawa; Rokiczanka;
    Chudoba; Orkiestra św. Mikołaja; Sami; Goya;
    Łzy; PIN; Leszcze; Sumptuastic;
    Farba; Buldog; Artrosis; Moonlight;
    Delight; Quidam; Collage; Lizard;
    Mord A Stigmata; Mgła; Furia; Batushka;
    Hate; Christ Agony; Graveland; Yattering;
    Dezerter; KSU
  `)),
  stereotyp: group(520, ['Typowy grzybiarz', 'Polak na grzybach'], 'Matka Polka',
    'Grillowy ekspert', ['Majster złota rączka', 'Złota rączka'], 'Polak na wakacjach', 'Emeryt przed telewizorem',
    ['Działkowiec', 'Typowy działkowiec'], 'Rowerzysta w lycrze', 'Wujek przy grillu',
    'Szlachcic sarmata'),
  polskie_tance: group(1100, ['Hurra polka', 'Hurra-polka'], ['Cebula', 'Taniec cebula'],
    ['Cholewiok', 'Cholewiak'], ['Weselny równy', 'Równy lasowiacki'], ['Tramla lasowiacka', 'Tramla'],
    ['Walczyk grębowski', 'Taniec grębowski'], 'Taniec z wiechą', 'Taniec z kołaczem', 'Biały wieniec'),
  polskie_planszowki: [
    ...group(390, ['Eleven: Football Manager Board Game', 'Eleven'], 'Nemesis',
      'Nemesis: Lockdown', ['Tainted Grail: Upadek Avalonu', 'Tainted Grail'], 'ISS Vanguard',
      'Etherfields', 'Lords of Hellas', 'Lords of Ragnarok', 'Frostpunk: Gra planszowa',
      ['Robinson Crusoe', 'Robinson'], ['Thorgal: Gra planszowa', 'Thorgal'],
      'Jakub Wędrowycz: Upiorne Wczasy'),
    ...group(750, 'The Great Wall',  'K2', 'Mount Everest', 'Broad Peak',
      'CV', 'CVlizations', 'Kieszonkowy Bystrzak', 'Capital', 'Superfarmer', 'Łąka', 'Zona: Sekret Czarnobyla', 'Polska Luxtorpeda'),
  ],
  polskie_auta: [
    ...group(560, ['Syrena Sport', 'FSO Syrena Sport'], ['Wars', 'FSO Wars'], ['Beskid', 'FSM Beskid', 'Beskid 106'],
      ['Ogar', 'FSO Ogar', 'Ogar 1500'], ['Polonez Truck', 'FSO Polonez Truck'], 'Polonez Caro', 'Polonez Atu', 'Meduza', 'Syrena 100', 'Syrena 105',
      ['Lublin 3', 'Daewoo Lublin 3'], ['Żuk A11', 'FSC Żuk A11'], 'Nysa 522', 'Star 266', ['Jelcz 043', 'Jelcz Ogórek', 'Ogórek'],
      'Jelcz PR110', 'Autosan H9', 'Autosan H10', 'Solaris Urbino', 'Żuk A07'),
    ['Fiat 126p', '126p', '126 p', 'Fiat Maluch'], ['Fiat 125p', '125p', '125 p', 'Fiat 125 P'],
  ],
  bajka: [
    ...group(250, ['Porwanie Baltazara Gąbki', 'Baltazar Gąbka', 'Porwanie Gąbki'],
      ['Wędrówki Pyzy', 'Pyza'], ['Przygód kilka wróbla Ćwirka', 'Wróbel Ćwirek', 'Ćwirek'],
      ['Pampalini łowca zwierząt', 'Pampalini'], ['Marceli Szpak dziwi się światu', 'Marceli Szpak'],
      ['Maurycy i Hawranek', 'Maurycy i Gawranek'], ['Proszę słonia', 'Słoń Dominik'],
      ['Baśnie i bajki polskie', 'Polskie baśnie i bajki'], ['Przygody kota Filemona', 'Przygody Filemona']),
    ...group(520, ...names(`
    Przygody Gapiszona; Przygody Błękitnego Rycerzyka; Miś Kudłatek; Miś Fantazy;
    Wielka podróż Bolka i Lolka; Olimpiada Bolka i Lolka; Wyprawa profesora Gąbki; Tajemnica szyfru Marabuta;
    Tajemnice Wiklinowej Zatoki; Powrót do Wiklinowej Zatoki; Zima w Wiklinowej Zatoce; Przygody Myszki;
    Trzy misie; Pomysłowy wnuczek; Przypadki Zwierzo-Jeża; Różne przygody Gąski Balbinki;
    Podróże kapitana Klipera; Parauszek i przyjaciele; Pamiętnik Florki; Kicia Kocia;
    Żubr Pompik; Mami Fatale; Basia; Kajtuś Czarodziej;
    Podróże do bajek; Film pod strasznym tytułem; Gwiazda Kopernika
  `)),
  ],
  piesn: [
    ...group(350, ...names(`
    Wojenko, wojenko; O mój rozmarynie; Serce w plecaku; Oka;
    Morze, nasze morze; Jak długo w sercach naszych; Jak to na wojence ładnie; Białe róże;
    Marsylianka Wielkopolska; Tam od Poznania; Hej, chłopcy, bagnet na broń; Hymn Szarych Szeregów;
    Modlitwa obozowa; Nie noszą lampasów; Pieśń strzelców; Marsz Strzelców;
    Marsz Sybiraków; Marsz Polonii; Hej, sokoły; Miała baba koguta;
    Krakowiaczek jeden; W moim ogródecku; Lipka; Tam pod borem;
    Czarny baranie; Krajka; Ogniska już dogasa blask; Idzie noc;
    Szara lilijka; Ballada rajdowa; Płonie ognisko i szumią knieje; Jak dobrze nam zdobywać góry;
    Harcerzem być
  `)),
    ['Pierwsza Brygada', 'My, Pierwsza Brygada', 'Legiony to żołnierska nuta'], ['O mój rozmarynie', 'Rozmaryn'],
  ],
  kabaret: group(580, ...names(`
    Kabaret Potem; Kabaret Koń Polski; Kabaret Ciach; Kabaret Jurki;
    Kabaret K2; Kabaret Czesuaf; Kabaret Łowcy.B; Kabaret Smile;
    Kabaret Chyba; Kabaret Weźrzesz; Kabaret Młodych Panów; Kabaret Skeczów Męczących;
    Kabaret Nowaki; Kabaret Rak; Kabaret Elita; Kabaret Dudek;
    Kabaret Pod Egidą; Kabaret Tey; Kabaret Starszych Panów; Kabaret Piwnica pod Baranami;
    Kabaret Długi; Kabaret OT.TO; Kabaret Made in China; Kabaret Szarpanina;
    Kabaret Hlynur; Kabaret Słuchajcie; Kabaret Trzecia Strona Medalu; Kabaret Świerszczychrząszcz;
    Kabaret Noc
  `)),
  telewizja: group(650, ...names(`
    TVP Nauka; TVP Kobieta; TVP HD; TVP Historia 2;
    TVP Kultura 2; TVP ABC 2; TVP 4K; TVP3 Warszawa;
    TVP3 Kraków; TVP3 Gdańsk; TVP3 Wrocław; TVP3 Łódź;
    TVP3 Katowice; TVP3 Poznań; TVP3 Lublin; TVP3 Szczecin;
    TVP3 Białystok; TVP3 Bydgoszcz; TVP3 Kielce; TVP3 Opole;
    TVP3 Olsztyn; TVP3 Rzeszów; TVP3 Gorzów Wielkopolski; Wydarzenia 24;
    Polsat Sport Fight; Polsat Seriale; Polsat Doku; Adventure;
    Home TV; Red Carpet TV; Antena HD; Dla Ciebie TV;
    TVS; Telewizja Pomorska; Telewizja Kujawy; TV Asta;
    TV Wschód; TV Lubuska; Stars TV; 4Fun Kids;
    Eska Rock TV; Eska TV Extra; Polsat Music; Polsat Sport Premium
  `)),
  program: group(470, ...names(`
    Wielka gra; Miliard w rozumie; Czar par; Magia liter;
    Krzyżówka szczęścia; Va Banque; Życiowa szansa; Najsłabsze ogniwo;
    Grasz czy nie grasz; Chwila prawdy; Moment prawdy; Rekiny kart;
    Daję słowo; Co? Gdzie? Kiedy?; Podróże kulinarne Roberta Makłowicza; Makłowicz w podróży;
    Boso przez świat; Pieprz i wanilia; Sonda; Sonda 2;
    Zrób to sam; Tik-Tak; Ciuchcia; Budzik;
    Domowe przedszkole; 5-10-15; Jedyneczka; Spotkanie z Balladą;
    Mamy cię!; Między kuchnią a salonem; Zakup kontrolowany; Usterka;
    Weekendowa metamorfoza; Perfekcyjna pani domu; Projekt Lady; Dorota was urządzi;
    Hotel Paradise; Twoja twarz brzmi znajomo
  `)),
  radio: [
    ['Radio Dla Ciebie', 'RDC', 'Polskie Radio RDC'], ['Radio LUZ', 'Akademickie Radio LUZ'],
    ...group(780, ...names(`
    Radio RAM; Radio Luz; Akademickie Radio Centrum; Radio Afera;
    Radio UWM FM; Radio Akadera; Radio Żak; Radio UJOT FM;
    Radio Sfera; Radio MORS; Radio Muzo.fm; Radio Park;
    Radio Piekary; Radio Fest; Radio eM; Radio FAMA;
    Radio Rekord; Radio Kolor; Radio Kaszëbë; Nord FM;
    Radio Weekend FM; Radio Nadzieja; Radio Białystok; Radio VIA;
    Radio RDN Małopolska; Radio RDN Nowy Sącz; Radio Profeto; Radio Jasna Góra;
    Radio Ain Karim; Radio Fiat; Radio Głos; Radio ESKA Wrocław;
    Radio Gra Toruń; Radio Gra Wrocław; Radio GRA; Radio WaWa;
    Radio Wielkopolska; Radio Emaus; Radio Sudety 24; Radio Hit;
    Radio Warta; Radio Września; Radio Nuta; Radio Bezpieczna Podróż;
    Radio Łódź Extra; Radio dla Ciebie
  `)),
  ],
  sklep: [
    ...group(420, ...names(`
    Frisco; Krakowski Kredens; Kakadu; Gorąco Polecam;
    Świat Książki; Tania Książka; Matras; BookBook;
    Księgarnie PWN; Salony Agata; Abra Meble; VOX;
    Meble Wójcik; Bodzio; Wajnert; Martes Sport;
    Sportano; Olimp Store; Piekarnia Putka; Piekarnia Oskroba;
    Piekarnia Grzybki; Piekarnia Hert; Piekarnia Awiteks; Piekarnia Buczek;
    Piekarnia Lajkonik; Piekarnia Lubaszka; Piekarnia Cymes; Sklepy Avita;
    Sklepy Arhelan; Sklepy Sedal; Sklepy Frac; Sklepy Paleo;
    Hitpol; SPS Handel; Sklepy Doroty; PSS Społem Warszawa
  `)),
    ['Frisco', 'Frisco.pl'], ['Świat Książki', 'Księgarnie Świat Książki'],
    ['Żabka', 'Zabka sklep'], ['Dino', 'Dino Polska'], ['Stokrotka', 'Stokrotka Market'],
  ],
  odziez: group(600, ...names(`
    Badura; Kazar Studio; Ryłko Estima; Relaks;
    Wojas; Venezia; Nessi; Maciejka;
    Gamis; Exbut; Coccine; Kubota;
    Befado; RenBut; Emel; Bartek;
    Mrugała; Aurelka; Kornecki; Danielki;
    Buciki Lemigo; Demar; Protektor; Kupczak;
    Nagaba; Hanzel; Nord; Badura;
    Sergio Leone; Primamoda; Carinii; Neścior;
    L37; Balagan; Chylak; Mandel;
    Batycki; Goshico; Papu Design; Risk Made in Warsaw;
    Local Heroes; MISBHV; Magda Butrym; Phenotype;
    Prosto; Elade; Moro Sport; Stoprocent;
    Mass DNM; Diamante Wear; Patriotic; Pezet NOBOCOTO;
    Szachownica; Carry; Moodo; Taranko;
    Nife; Lemoniade; Figl; Bastet;
    Cocomore; Mohito; Rage Age; Recman;
    Lavard; Borgio; Giacomo Conti; Poszetka;
    Zack Roman; MILER; Macaroni Tomato; Jan Kielman;
    Kazar; Answear Lab; Nago; Elementy;
    The Odder Side; Undress Code; Le Petit Trou; Momonde
  `)),
  slodycze: [
    ...group(340, ...names(`
    Michałki z Hanki; Michałki Wawel; Królewskie Mleczko; Wedlove;
    Bajeczny; Pawełek; Bałamutki; Pierrot;
    WW; Chałwa Królewska; Chałwa Wedlowska; Krówka Opatowska;
    Krówka Milanowska; Krowka z Opatowa; Irysy; Raczki;
    Kasztanki Wawel; Malaga; Tiki Taki Wawel; Krówka z Bochni;
    Michałki Śnieżka; Karmelki Kopalnioki; Pańska skórka; Szczypka lubelska;
    Obwarzanki odpustowe; Kopernik; Fabryka Cukierków Pszczółka; Pszczółka;
    Odra; Śnieżka; Solidarność; Skawa;
    Vobro; ZPC Otmuchów; Cukry Nyskie; Sante;
    Bakalland; Czekotubka; Beskidzkie Paluszki; Beskidzkie;
    Słodka Chwila
  `)),
    ['Krówka Opatowska', 'Krówka z Opatowa'], ['Ptasie Mleczko', 'Ptasie mleczko Wedel'], ['Grześki', 'Wafel Grzesiek'], ['Grycan', 'Lody Grycan'],
  ],
};
