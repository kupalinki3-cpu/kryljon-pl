import { group } from './util.js';

// Średnie wartości bazowe oraz warianty, pod którymi gracze znają te same hasła.
const entries = (meters, list) => group(meters, ...list.trim().split(';').map((item) =>
  item.trim().split('|').map((name) => name.trim())));

export default {
  przedmiot: entries(200, `
    matematyka|królowa nauk; język polski|j. polski|polski rozszerzony;
    język angielski|j. angielski|angielski rozszerzony; informatyka|info; biologia|biolka; geografia|gegra;
    fizyka|fiza; historia|historia rozszerzona; historia muzyki|historia muzyczna;
    wiedza o społeczeństwie|wiedza o społeczeństwie rozszerzona; język niemiecki|j. niemiecki;
    język francuski|j. francuski; język hiszpański|j. hiszpański; język włoski|j. włoski;
    język łaciński i kultura antyczna|łacina i kultura antyczna
  `),
  naukowiec: entries(660, `
    Karol Olszewski; Zygmunt Wróblewski; Marian Smoluchowski; Jędrzej Śniadecki; Jan Śniadecki; Stanisław Staszic;
    Józef Warszewicz; Benedykt Dybowski; Władysław Taczanowski; Jan Sztolcman; Kazimierz Michałowski;
    Karol Estreicher; Kazimierz Nitsch; Jerzy Kuryłowicz; Witold Doroszewski; Aleksander Brückner;
    Samuel Bogumił Linde; Władysław Konopczyński; Tadeusz Kotarbiński; Jan Łukasiewicz; Alfred Tarski;
    Janina Hosiasson-Lindenbaum; Kazimierz Ajdukiewicz; Stefan Mazurkiewicz; Zygmunt Janiszewski; Karol Borsuk;
    Andrzej Schinzel; Janusz Groszkowski; Stefan Bryła; Gabriel Narutowicz; Tadeusz Sendzimir; Janusz Dietrych;
    Andrzej Szczeklik; Antoni Kępiński; Maria Siemionow; Anna Wierzbicka; Maria Janion; Ludwik Hirszfeld;
    Hanna Hirszfeld; Wiktor Dega; Hilary Koprowski
  `),
  ssak: entries(700, `
    suseł moręgowany; suseł perełkowany; pilch|popielica szara; orzesznica leszczynowa; zębiełek karliczek;
    zębiełek białawy; ryjówka górska; rzęsorek mniejszy; nornik bury; nornik północny;
    nornik śnieżny|śnieżnik europejski; karczownik ziemnowodny; myszarka zaroślowa; myszarka zielna;
    myszarka leśna; myszarka polna; nocek wąsatek; nocek Brandta; nocek Alkatoe; nocek orzęsiony; nocek Bechsteina;
    borowiec leśny; mroczek pozłocisty; mroczek posrebrzany; karlik drobny; szakal złocisty; kozica tatrzańska
  `),
  ptak: entries(600, `
    pełzacz leśny; pełzacz ogrodowy; wąsatka; remiz; podróżniczek; strumieniówka; brzęczka; świerszczak; łozówka;
    zaganiacz; jarzębatka; piecuszek; świstunka leśna; zniczek; mysikrólik; muchołówka mała; muchołówka białoszyja;
    muchołówka szara; muchołówka żałobna|żałobnica; dzięcioł trójpalczasty; dzięcioł białogrzbiety;
    dzięcioł zielonosiwy; orzechówka; sikora uboga; czarnogłówka; sosnówka; czubatka; ortolan; potrzeszcz; potrzos;
    kulik wielki; rycyk; krwawodziób; brodziec śniady; samotnik; łęczak; rybitwa białowąsa; rybitwa białoskrzydła;
    rybitwa czarna; rybitwa czubata; sieweczka obrożna; sieweczka rzeczna; bekasik; szlamnik; batalion;
    szablodziób; perkoz rdzawoszyi; perkoz zausznik|zausznik; bączek; hełmiatka; płaskonos; krakwa;
    gęś krótkodzioba; ogorzałka; nurogęś; szlachar; bielaczek; lodówka
  `),
  ryba: entries(760, `
    koleń pospolity|koleń; parposz; aloza; ciosa; rozpiór; piekielnica; różanka; kiełb Kesslera; kiełb białopłetwy;
    śliz pospolity; koza złotawa; koza dunajska; piskorz; głowacz białopłetwy; głowacz pręgopłetwy; babka łysa;
    babka rzeczna; babka szczupła; babka rurkonosa; babka czarna; pocierniec; iglicznia; wężynka;
    tasza|zając morski; dennica; kur rogacz; motela; tobiasz; dobijak; witlinek; zimnica; stornia|flądra bałtycka
  `),
  drzewo: entries(610, `
    dąb omszony; dąb burgundzki; dąb czerwony; dąb błotny; sosna wejmutka; sosna Banksa; sosna rumelijska;
    świerk serbski; świerk sitkajski; jodła koreańska; jodła kaukaska; metasekwoja chińska; cypryśnik błotny;
    cyprysik Lawsona; żywotnik olbrzymi; klon tatarski; klon Ginnala; klon pensylwański; klon srebrzysty;
    topola osika|osika; topola Simona; topola balsamiczna; grusza pospolita; jabłoń dzika|płonka;
    śliwa ałycza|ałycza; śliwa tarnina|tarnina; bez koralowy; kalina hordowina; trzmielina brodawkowata;
    suchodrzew; wiciokrzew pomorski; porzeczka alpejska; irga pozioma; kolcowój pospolity; moszenki południowe;
    kłokoczka południowa; karagana syberyjska; krzewuszka cudowna
  `),
  rzeka: entries(620, `
    Kwisa; Czerna Wielka; Szprotawa; Czarna Orawa; Jasiołka; Osława; Ropa; Biała Tarnowska; Biała Głuchołaska;
    Biała Lądecka; Mleczka; Trzebośnica; Strwiąż; Wiar; Tanew; Sopot; Szum; Łęg; Tuszymka; Koprzywianka;
    Czarna Staszowska; Kamienna; Świślina; Okrzejka; Wilga; Świder; Jeziorka; Utrata; Pisia Gągolina; Pisia Tuczna;
    Mroga; Moszczenica; Rawka; Nidka; Ełk; Rospuda; Bludzia; Gołdapa; Krutynia; Sapina; Pisa; Guber; Sajna;
    Węgorapa; Dajna; Czarna Hańcza; Marycha; Nurzec; Liwiec; Brok; Orzyc; Omulew; Rozoga; Chodelka; Wyżnica;
    Bystra; Bystrzyca Północna; Ciemięga; Minina; Giełczew; Łabuńka; Huczwa; Uherka; Krzna; Hanna; Zielawa;
    Wietcisa; Reknica; Strzyża; Potok Oliwski; Kacza; Reda; Bolszewka; Łeba; Łupawa; Skotawa; Wieprza; Grabowa;
    Radew; Chotla; Debrzyca; Ina; Krąpiel; Płonia; Gowienica; Stepnica; Wołczenica; Świniec
  `),
  szczyt: entries(620, `
    Gęsia Szyja; Nosal; Kopieniec Wielki; Wielka Krokiew; Małołączniak; Krzesanica; Ciemniak; Kopa Kondracka;
    Łopata; Kończysty Wierch; Trzydniowiański Wierch; Wołowiec; Rakoń; Grześ; Kominiarski Wierch; Bobrowiec;
    Zadni Ornak; Skrajny Granat; Pośredni Granat; Zadni Granat; Kościelec; Mały Kościelec; Kozie Czuby;
    Zamarła Turnia; Wielka Buczynowa Turnia; Mięguszowiecki Szczyt Wielki; Szpiglasowy Wierch; Miedziane; Smerek;
    Hnatowe Berdo; Osadzki Wierch; Roh; Przysłup Caryński; Dział; Okrąglik; Jasło; Łopiennik; Chryszczata; Wołosań;
    Maguryczne; Kamień nad Jaśliskami; Cergowa; Piotruś; Baranie; Lackowa; Rotunda; Ostry Wierch; Radziejowa;
    Wielki Rogacz; Przehyba; Jaworzyna Krynicka; Wielka Racza; Rycerzowa; Muńcuł; Lipowska; Romanka; Rysianka;
    Boracza; Mała Babia Góra|Cyl; Klimczok; Szyndzielnia; Trzy Kopce Wiślańskie; Kiczory;
    Wielka Czantoria|Czantoria Wielka; Mała Czantoria; Soszów Wielki; Malinowska Skała; Błatnia;
    Magurka Wilkowicka; Hrobacza Łąka; Skalnik; Ostra Mała; Sokolik; Krzyżna Góra; Stóg Izerski; Smrek;
    Wysoka Kopa; Wysoki Kamień; Mały Szyszak; Czarna Kopa; Łabski Szczyt; Wielki Szyszak; Kopa; Borówkowa;
    Rudawiec; Czernica; Kowadło; Jagodna; Orlica; Włodzicka Góra; Lesista Wielka; Waligóra; Chełmiec
  `),
  pisarz: entries(480, `
    Jacek Dukaj; Olga Tokarczuk; Paweł Huelle; Stefan Chwin; Janusz Głowacki; Janusz Anderman; Marek Nowakowski;
    Wojciech Kuczok; Jerzy Pilch; Ignacy Karpowicz; Sylwia Chutnik; Kaja Malanowska; Małgorzata Rejmer; Joanna Jax;
    Ałbena Grabowska; Agnieszka Lingas-Łoniewska; Katarzyna Nosowska; Wojciech Chmielarz; Jakub Małecki;
    Łukasz Orbitowski; Robert Małecki; Zygmunt Miłoszewski; Marcel Moss; Max Czornyj; Przemysław Piotrowski;
    Ryszard Ćwirlej; Marcin Wroński; Mariusz Czubaj; Anna Kańtoch; Marta Matyszczak; Jacek Galiński; Natasza Socha;
    Magda Stachula; Katarzyna Puzyńska; Joanna Szarańska; Magdalena Witkiewicz; Agnieszka Krawczyk;
    Katarzyna Michalak; Natalia de Barbaro; Katarzyna Grochola; Wojciech Tochman; Filip Springer;
    Mariusz Szczygieł; Hanna Krall; Wojciech Jagielski; Joanna Gierak-Onoszko; Jacek Hugo-Bader;
    Ryszard Kapuściński; Cezary Łazarewicz; Ewa Lipska; Julia Hartwig; Urszula Kozioł; Adam Zagajewski;
    Marcin Świetlicki; Tomasz Różycki; Krystyna Miłobędzka; Bianka Rolando; Tadeusz Dąbrowski; Andrzej Bursa;
    Halina Poświatowska; Edward Stachura; Ryszard Krynicki; Julian Kornhauser; Stanisław Barańczak; Rafał Wojaczek;
    Wojciech Wencel
  `),
  danie: entries(340, `
    zalewajka; fuczki bieszczadzkie; tarcioki; szare kluski; kluski kudłate; kudłacze; placki z blachy; podpłomyki;
    proziaki; fajercarze|fajercaki; podkarpackie gomółki; gomółki serowe; gzik z pyrami|pyry z gzikiem; szary sos;
    sos chrzanowy; pierogi z pocztą|pierogi z płuckami; pierogi z kaszą gryczaną; pierogi z soczewicą;
    pierogi z jagodami; pieróg biłgorajski; pieróg gryczany; kaszanka z cebulą; krupniok; żymlok; karminadle;
    szałot śląski; zupa z nudlami; zupa kminkowa; śląskie niebo|śląskie niebiosa; becok; moczka; makówki; szpajza;
    kołocz śląski; karp w szarym sosie; karp po żydowsku; karp smażony; szczupak faszerowany; węgorz wędzony;
    śledź w oleju; śledź po żydowsku; śledź pod pierzynką; dorsz po kaszubsku; zupa rybna; flaki po warszawsku;
    klops wołowy; pieczeń rzymska; bryzol; ozór w sosie chrzanowym; gęsia szyja faszerowana; gęsia okrasa;
    gęsie pipki; parzybroda; kapuśniak z kwaśnej kapusty; zupa podgrzybkowa; zalewajka świętokrzyska;
    rosół z kaczki; barszcz biały z kiełbasą; barszcz czerwony z uszkami; barszczyk zabielany; chłodnik z botwinki;
    polewka piwna; polewka z maślanki; kasza manna na mleku; kasza jaglana ze śliwkami; kopytka z bułką tartą;
    knedle ze śliwkami; gryczaki; pyzy drożdżowe; jagodzianka; rogale marcińskie|rogal świętomarciński;
    pączki z różą; jabłka w cieście; faworki warszawskie; chrusty; grzybki bezowe; tort bezowy; krem sułtański;
    szyszki z ryżu preparowanego; blok czekoladowy; salceson czekoladowy
  `),
  wladca: entries(500, `
    Mieszko II|Mieszko II Lambert; Bolesław Śmiały|Bolesław Szczodry|Bolesław II Śmiały; Przemysł II|Przemysław II;
    Władysław Łokietek|Władysław I Łokietek; Kazimierz Wielki|Kazimierz III Wielki;
    Ludwik Węgierski|Ludwik Andegaweński; Władysław Jagiełło|Władysław II Jagiełło;
    Kazimierz Jagiellończyk|Kazimierz IV Jagiellończyk; Zygmunt Stary|Zygmunt I Stary;
    Zygmunt August|Zygmunt II August; Jan Kazimierz|Jan II Kazimierz Waza; August II Mocny|August II Wettin;
    August III Sas|August III Wettin; Stanisław August Poniatowski|Stanisław II August;
    Mieszko I Plątonogi|Mieszko IV; Bolesław Rogatka|Bolesław II Rogatka
  `),
  serwis: entries(410, `
    SFD.pl; KFD.pl; WirtualneMedia.pl; Press.pl; Wirtualny Wydawca; Mambiznes; Bankier.pl; Money.pl; Wprost.pl;
    Wirtualne Muzea Małopolski; Wolne Lektury; Biblioteka Cyfrowa Uniwersytetu Wrocławskiego;
    Federacja Bibliotek Cyfrowych|FBC; Ninateka; Szukaj w Archiwach; Fotopolska; Polska-org.pl;
    mapa.targeo.pl|Targeo; e-podróżnik; KOLEO; Portal Pasażera; Bilkom; Biletomat; Biletyna; Going.; eBilet;
    KupBilecik; Teatr Telewizji VOD; TabelaOfert.pl; Morizon.pl; Domiporta.pl; Gratka.pl; Sprzedajemy.pl;
    Chomikuj.pl|Chomikuj; gry-online.pl|Gry Online; CD-Action Online; PPE.pl; Gram.pl; PSX Extreme; Polygamia;
    Gamezilla; Filmweb.pl|Filmweb; FilmPolski.pl|Filmpolski; LubimyCzytać.pl|Lubimy Czytać; UpolujEbooka; Publio;
    Woblink; Virtualo; Audioteka; Open FM|OpenFM; Patronite; BuyCoffee.to; Zrzutka.pl|Zrzutka;
    Siepomaga.pl|Siepomaga; Pomagam.pl|Pomagam; RatujemyZwierzaki.pl; FaniMani; Tooba
  `),
  raper: entries(470, `
    Liroy; Sobota; Rahim; Fokus; Magik; Abradab; Joka; Gural|Donguralesko; Shellerini; Słoń|Słoń WSRH; WSRH; Kobra;
    Rafi; Ryhu; Kaczor; 52 Dębiec; Hans|Hans Solo; Pyskaty; Tetris|Te-Tris; Bisz; B.O.K; LaikIke1; Bonson; Matek;
    Gedz; Vixen; Tau; Miuosh; KaeN; Bezczel; Fabuła; Siwers; HZD; JWP; Bez Cenzury; Pono; Ero; Kosi; Łajzol;
    Proceente; Numer Raz; Warszafski Deszcz|WFD; Grammatik; Eis; Fenomen; Deluks; Slums Attack|SLU; Onar; Owal;
    Obywatel MC; Pęku; Massey; Jano Polska Wersja; Hinol Polska Wersja; Polska Wersja|PW; Dixon37; Paluch; Sarius;
    Kuba Knap; Kubańczyk; Tymek; Miętha; Deys; Kartky; PlanBe; Jan-rapowanie; Miły ATZ; CatchUp;
    Gruby Mielzky|Mielzky; Undadasea; Kosma Król; Ryfa Ri; Hades; asthma; Bober; Filipek; Szesnasty; AdMa;
    Oliwka Brazil; Guova; Wdowa; Dziarma; Rzabka; Mada; Zdechły Osa; schafter; Kukon
  `),
  zespol: entries(510, `
    Czesław Śpiewa; Gaba Kulka; Natalia Przybysz; Paulina Przybysz; Sistars; Pinnawela; Poluzjanci; June;
    Mitch & Mitch; Baaba; Pink Freud; Jazzpospolita; BOKKA; Sorry Boys; Tęskno; The Dumplings; XXANAXX; Kamp!;
    Rebeka; Rysy; Reni Jusis; Karaś/Rogucki|Karaś Rogucki; KAMP; Król; Fismoll; Kortez; Skubas;
    Mikromusic|Mikro Music; L.Stadt; Voo Voo; Osjan; Raz Dwa Trzy; Czerwony Tulipan; Wolna Grupa Bukowina;
    Stare Dobre Małżeństwo|SDM; Cisza Jak Ta; Dom o Zielonych Progach; Słodki Całus od Buby; Bez Jacka; Pod Budą;
    Wały Jagiellońskie; Brathanki; Zakopower; Trebunie-Tutki; Kapela ze Wsi Warszawa; Żywiołak;
    Maleo Reggae Rockers; Izrael; Vavamuffin; EastWest Rockers; Habakuk; Daab; Bakshish; Brygada Kryzys; Siekiera;
    Armia; Kobranocka; Aya RL; Rezerwat; Sztywny Pal Azji; Róże Europy; Ziyo; Kobiety; Hey; Ścianka;
    Cool Kids of Death; Dick4Dick; Myslovitz|Mysłovitz; Hurt; Akurat; Leniwiec; Pidżama Porno; T.Love Alternative;
    Analogs|The Analogs; Farben Lehre; Koniec Świata; Bulbulators; Flapjack; Illusion; Lipali; Proletaryat;
    Frontside; Aion; Decapitated; Trauma; Behemoth; Christ Agony; Hate; Lux Occulta; Furia; Mgła; Kły; Batushka;
    KSU; Pablopavo i Ludziki
  `),
  kabaret: entries(680, `
    Kabaret Hrabi|Hrabi; Kabaret Ani Mru-Mru|Ani Mru Mru; Kabaret Neo-Nówka|NeoNowka|Neonówka;
    Kabaret Moralnego Niepokoju|Moralny Niepokój|KMN; Kabaret Skeczów Męczących|Skeczów Męczących|KSM;
    Kabaret Młodych Panów|Młodych Panów|KMP; Kabaret Smile|Smile; Kabaret Pod Wyrwigroszem|Wyrwigrosz;
    Kabaret Paranienormalni|Paranienormalni; Formacja Chatelet|Chatelet; Kabaret Czołówka Piekła|Czołówka Piekła;
    Kabaret Limo|Limo; Kabaret K2|K2; Kabaret Chyba|Chyba; Kabaret Czesuaf|Czesuaf; Kabaret Jurki|Jurki;
    Kabaret Nowaki|Nowaki; Kabaret A Jak!|A Jak; Kabaret Ciach|Ciach;
    Kabaret Trzeci Oddech Kaczuchy|Trzeci Oddech Kaczuchy; Kabaret Rak|RAK; Kabaret Tey|TEY; Kabaret Elita|Elita;
    Kabaret Dudek|Dudek; Kabaret Starszych Panów|KSP; Kabaret Wagabunda|Wagabunda; Kabaret Ucho;
    Kabaret Piwnica pod Baranami|Piwnica pod Baranami; Kabaret Zielony Balonik|Zielony Balonik;
    Kabaret Hybrydy|Hybrydy; Kabaret Długi|Długi; Kabaret Paka|Kabaret PAKA; Kabaret Rewers|Rewers;
    Kabaret Czyści jak Łza|Czyści jak Łza; Kabaret Czwarta Fala|Czwarta Fala; Kabaret Jachim Presents;
    Kabaret Zachodni|Zachodni; Kabaret Weźrzesz|Weźrzesz
  `),
  telewizja: entries(520, `
    TVP3 Białystok; TVP3 Bydgoszcz; TVP3 Gdańsk; TVP3 Gorzów Wielkopolski; TVP3 Katowice; TVP3 Kielce; TVP3 Kraków;
    TVP3 Lublin; TVP3 Łódź; TVP3 Olsztyn; TVP3 Opole; TVP3 Poznań; TVP3 Rzeszów; TVP3 Szczecin; TVP3 Warszawa;
    TVP3 Wrocław; TVP Polonia; TVP ABC 2; TVP Kultura 2; TVP Historia 2; TVP Rozrywka; TVP Wilno; TVP Parlament;
    TV Biełsat|Belsat; Telewizja Puls 2|Puls 2; Tele 5|Tele5; Polonia 1; Telewizja Republika|Republika;
    Wydarzenia 24; Polsat News Polityka; Polsat Doku; Polsat Rodzina; Polsat Comedy Central Extra; Superstacja;
    Polsat Music; Disco Polo Music; Eska TV Extra; Eska Rock TV; VOX Music TV; Polo TV|PoloTV; 4fun TV; 4fun Dance;
    4fun Kids; TVN Fabuła; TVN Turbo; TVN Style; TVN 7|TVN Siedem; TVN Meteo; TVN Warszawa; TTV|TTV Polska;
    HGTV Home & Garden Polska; TVN24 BiS|TVN 24 Bis; TVN CNBC; Biznes24; TVR; Fokus TV; Nowa TV; Red Carpet TV;
    Telewizja NTL; TV Silesia|TVS; TV Asta; TV Toruń; Telewizja Dami
  `),
  program: entries(490, `
    Gra w ciemno; Zakręcone koło; Krzyżówka z papugą; Daję słowo; Gilotyna; 300 procent normy; Eureko, ja to wiem;
    Wielka gra|Wielka Gra TVP; Miliard w rozumie; Dzieciaki górą; Najsłabsze ogniwo; Chwila prawdy; Ruletka;
    Jedno z dwojga; Rosyjska ruletka; Życiowa szansa; Grasz czy nie grasz; Zbij fortunę; Graj o raj; Łowcy nagród;
    Pokaż, co potrafisz; Aplauz, aplauz!; Bitwa na głosy; Must Be the Music. Tylko muzyka|Must Be the Music;
    The Voice Kids; The Voice Senior; Mali Giganci; Lego Masters Polska|Lego Masters; Ninja Warrior Polska;
    Fort Boyard Polska; Kryptonim Szef; Ugotowani; Kuchnia z Okrasą; Okrasa łamie przepisy; Makłowicz w podróży;
    Podróże kulinarne Roberta Makłowicza; Pascal: Po prostu gotuj; Top Chef;
    Hell's Kitchen. Piekielna kuchnia|Piekielna kuchnia; Bake Off – Ale ciacho!; Damy i wieśniaczki; Królowe życia;
    Ślub od pierwszego wejrzenia; Kanapowcy; Projekt Lady; Złomowisko PL; Rolnicy. Podlasie|Rolnicy z Podlasia;
    Kobieta na krańcu świata; Boso przez świat; Z kamerą wśród zwierząt; Pieprz i wanilia; Jarmark; Tik-Tak;
    Teleranek; 5-10-15; Domowe przedszkole; Mini Lista Przebojów; Jaka to melodia?|JTM; Jak oni śpiewają;
    Gwiazdy tańczą na lodzie
  `),
  radio: entries(470, `
    Radio 7; Radio Płońsk; Radio Weekend FM|Weekend FM; RDN Małopolska; RDN Nowy Sącz; Radio Andrychów;
    Radio Na Stoku; Radio Kwidzyn; Radio Gryfice; Radio 88 FM; NON STOP FM Złotów;
    On Radio w Częstochowie|On Radio; POPradio; Radio Impuls; Radio Kolor; Radio Nastrój; Radio Kampus; Akadera;
    Radio Luz; Radio Afera; Radio Meteor; Radio Sfera; Radio UWM FM; Radio MORS; Radio UJOT; Radio Feniks;
    Radio Studenckie Żak|Radio Żak; Radio Centrum Lublin; Radio Centrum Rzeszów; Radio Leliwa; Radio Rzeszów;
    Polskie Radio Kielce|Radio Kielce; Radio Zachód; Radio Wrocław Kultura; Radio RAM; Radio Victoria; Norda FM;
    Radio Kaszëbë|Radio Kaszebe; Radio Gdańsk; Radio Olsztyn; Radio Białystok; Radio Łódź; Radio Opole; Radio PiK;
    Radio Szczecin; Radio Koszalin; Radio Plus Bydgoszcz; Radio Plus Gdańsk; Radio Plus Warszawa; Radio eM;
    Radio eM Kielce; Radio Warszawa; Radio Fara; Radio Jasna Góra
  `),
  sklep: entries(590, `
    Twój Market; Sklepy Doroty; Eko Holding|Eko; A&K; Polskie Sklepy Detaliczne; Polskie Markety; PSS Społem|PSS;
    Spółdzielnia Społem; Społem Białystok; Mili; Słoneczko; Chatka; Livio; Sieć Rabat; Rabat Detal;
    Czerwona Torebka; Grosik; Sklepy Firmowe Sokołów; Sklepy Firmowe Olewnik; Bacówka Towary Tradycyjne; Gzella;
    Sklepy Mięsne Nove|Nove; Delikatesy Bomi|Bomi; Marcpol; Mini Europa; Sklep Polski; Piekarnia Putka|Putka;
    Piekarnia Oskroba|Oskroba; Piekarnia Grzybki; Piekarnia SPC|SPC; Piekarnia Lubaszka|Lubaszka;
    Piekarnia Cukiernia Awiteks|Awiteks; Cukiernia Sowa; Cukiernia Kandulski; Cukiernia Słodki Słony;
    RTV Euro AGD|Euro RTV AGD; Media Expert|MediaExpert; Znak; Księgarnie Świat Książki|Świat Książki;
    TaniaKsiążka.pl|Tania Książka; Galeria Świat Zabawek; Sportano; Martes Sport; Pako Lorente; Tatuum; Ochnik;
    Wólczanka; Puccini; Wittchen
  `),
  odziez: entries(590, `
    UEG|Usa e Getta; Łukasz Jemioł|Jemioł; Maciej Zień|Zień; Robert Kupisz|Kupisz; MMC Studio|MMC;
    Zofia Chylak|Chylak; Wearso.; LeBrand; The Odder Side; Moye; Undress Code; God Save Queens; Le Petit Trou;
    Rilke; Ansin; Nueno; Saint Body; Bodymaps; Touche; MLE Collection|Make Life Easier; Laurella; Naoko; Naree;
    Marie Zélie|Marie Zelie; Tova; Matuu; Bechic; Bizuu Après-Midi; Cacofonia Milano; RISK made in Warsaw|Risk;
    Pan tu nie stał|PTNS; Gawor; Cudmoda; Ostatni Styl; Slogan; Runmageddon Store; Nuff Wear; Manto;
    Pit Bull West Coast|Pitbull; Octagon; Poundout; Extreme Hobby; Carpatree; Gym Glamour; Radical;
    Nessi Sportswear; Femi Stories; Femipleasure; Lullalove; La Millou; Ewa Klucze; Pinokio; Endo; Coccodrillo;
    Lemon Explore; 5.10.15.|51015; Tup Tup; Maylily; My Basic; Nosweet; Wola; Gatta; Fiołka; Gabriella; Marilyn;
    Fiore; Adrian; Knittex; Atlantic; Henderson; Esotiq; Gorsenia; Ava Lingerie|Ava; Gaia; Kinga; Nipplex;
    Kris Line; Ewa Michalak; Dalia; Samanta; Luna; Taro; Doctor Nap; Wojtyłko; Mazurek; RenBut; Mrugała;
    Mido Shoes; Kornecki; Dawid; Kacper; Fitanu; Maciejka; Neścior
  `),
  slodycze: entries(340, `
    Delicje Szampańskie|Delicje pomarańczowe; Ptasie Mleczko waniliowe; Ptasie Mleczko śmietankowe;
    Ptasie Mleczko cytrynowe; Wedel Gorzka; Wedel Jedyna|Czekolada Jedyna; Wedel Mleczna; Wedel Karmelowa;
    Wedel biała; Wawel Czekolada bez dodatku cukru; Malaga Wawel; Danusia Wawel|Danusia; Kasztanki;
    Michałki Białe|Białe Michałki; Michałki Klasyczne; Mieszko Amoretta|Amoretta; Mieszko Cherrissimo|Cherrissimo;
    Goplana Złoty Orzech; Goplana Galaretki; Alpejskie Mleczko|Ptasie mleczko Goplana; Mieszko Zozole;
    Brześć|Ptysie Brześć; Otmuchów FreeYu|FreeYu; Śliwka Nałęczowska w czekoladzie; Wafle ryżowe Kupiec; Kupiec;
    Kresto; Helio; Vitarade; Olimp Protein Snack; Pryncypałki|Pryncypalki; Dr Gerard|Doktor Gerard;
    Pasja Dr Gerard; Draże po wiedeńsku; cukierki lodowe; karmelki anyżowe; Bajaderka; amoniaczki; biskwity;
    piaskowe babeczki; sucharki beskidzkie; obwarzanki krakowskie; precle krakowskie; ciasteczka maszynkowe;
    chipsy z jabłek; suszone jabłka; czipsy z buraka;
    Beskidzkie Paluszki serowo-cebulowe|Beskidzkie serowo cebulowe; Aksam Orzeszki;
    Kabanosy Snack Pack|Snack Pack Tarczyński; Salami Snack
  `),
  napoj: entries(480, `
    kompot wiśniowy|kompot z wiśni; kompot agrestowy|kompot z agrestu; kompot śliwkowy;
    napar z lipy|herbata lipowa; herbata z kwiatów czarnego bzu; herbata z miodem i cytryną;
    woda z sokiem malinowym; kawa po turecku; kawa zalewajka; kawa zbożowa Inka; kawa z cykorii;
    miód pitny trójniak|trójniak; miód pitny dwójniak|dwójniak; miód pitny czwórniak|czwórniak;
    miód pitny półtorak|półtorak; piwo grodziskie|grodziskie; piwo jałowcowe; piwo kozicowe|kozicowe;
    Piwo Łódzkie|Browary Łódzkie; Kormoran Świeże; Fortuna Czarne; Miłosław Bezalkoholowe IPA|Miłosław IPA;
    Pinta Atak Chmielu|Atak Chmielu; AleBrowar; Nepomucen; Funky Fluid; ReCraft; Zakładowy;
    Bieszczadzka Wytwórnia Piwa; Browar Stu Mostów|Stu Mostów; Browar Artezan|Artezan; Browar Łańcut;
    Browar Szpunt|Szpunt; Browar Lubrow|Lubrow; Amber Żywe|Piwo Żywe; Mazurski Browar; Cornelius; Raciborskie;
    Ciechan; Jurand; Namysłów Pils; Ustronianka Biała; Kropla Beskidu Delikatnie Gazowana;
    Cisowianka Perlage|Perlage; Aqua Żywiec; Żywiec Zdrój Mocny Gaz; Nałęczowianka Gazowana; Iwoniczanka;
    Muszynianka Plus; Staropolanka 2000; Piwniczanka Niskonasycona; Tymbark Po Prostu; Tymbark Lemoniada;
    Kubuś Waterrr; Kubuś Immuno; Hortex Ogrodowe; Hortex Tym razem; Tarczyn Pomidor; Fortuna Sok; Frugo Czarne;
    Frugo Zielone; Oshee Vitamin Water; Oshee Isotonic; Black Energy; Tiger Classic; Blow Energy; Dzik Energy;
    Veroni Mineral
  `),
  stereotyp: entries(340, `
    typowy szwagier|szwagier; Janusz mechanik; Janusz informatyk; Janusz cebula|cebula Janusz;
    wąsaty wujek|wujek z wąsem; wujek dobra rada; boomer; typowy boomer; Seba z osiedla|Seba; kibol; blokers;
    osiedlowy filozof; stereotypowy programista|programista 15k; korposzczur; korpoludek; prezes Janusz;
    typowy Mirek|Mirek handlarz; handlarz Mirek; Karyna z Instagrama; madka Polka|matka polka; baba z dziekanatu;
    pani z okienka; pan od wuefu; typowy gimnazjalista; gracz z kafejki
  `),
  bajka: entries(650, `
    Król Maciuś Pierwszy|Król Maciuś; Zaczarowany ołówek; Przygody Myszki|Myszka z polskiej bajki;
    Profesor Filutek|Filutek; Mały Pingwin Pik-Pok|Pik Pok; Miś Kudłatek; Proszę słonia; Gucio i Cezar;
    Pies, kot i...; Przygody Gapcia; Paweł i Gaweł; Lis Leon; Kasztaniaki; Karmelowy świat;
    Paweł i hiszpańskie byki; Przygody Błękitnego Rycerzyka|Błękitny Rycerzyk; Syn gwiazd;
    Baśnie i bajki polskie|Bajki polskie; Latający zajączek; Reksio terapeuta; Reksio nauczyciel;
    Pampalini łowca zwierząt|Pampalini; Przygody Gapiszona|Gapiszon; Rodzina Treflików|Trefliki; Bobaski i Miś;
    Kicia Kocia na pikniku; Kicia Kocia mówi: dzień dobry
  `),
  piesn: entries(490, `
    O mój rozmarynie rozwijaj się|O mój rozmarynie; Piechota, ta szara piechota|Szara piechota;
    Marsz I Brygady|My Pierwsza Brygada; Maszerują strzelcy|Strzelecka piosenka; Hej, strzelcy wraz; Marsz Polonia;
    Dalej chłopcy, dalej żywo; Jeszcze jeden mazur dzisiaj|Ostatni mazur; Grzmią pod Stoczkiem armaty;
    Dalej wesoło; Hej chłopcy, bagnet na broń; Marsz Mokotowa; Marsz Żoliborza; Warszawskie dzieci;
    Sanitariuszka Małgorzatka; Chłopcy silni jak stal; Parasola hymn|Pałacyk Michla; Szturmówka;
    Czerwone jabłuszko; Oj chmielu, chmielu|Oj Chmielu; Oj dana dana; Hej, bystra woda; W murowanej piwnicy;
    Krywaniu, Krywaniu|Krywaniu; Tam pod borem; Zasiali górale; Za górami, za lasami; Zachodźże, słoneczko;
    Jedzie pociąg z daleka; Jawor, jawor; Ojciec Wirgiliusz; Koło graniaste; My jesteśmy krasnoludki;
    Moja Ulijanko|Ulijanka; Ta Dorotka; Mam chusteczkę haftowaną; Maryna, gotuj pierogi; Nie chodź koło róży;
    Wędrowiec; Ogień; Szara lilijka; Bratnie słowo|Bratnie słowo sobie dajem; Harcerskie ideały; Ballada rajdowa;
    Krajka; Wiosna, wiosna, wiosna; Stokrotka|Gdzie strumyk płynie z wolna; Bieszczadzkie reggały; Majster Bieda
  `),
  slang: entries(320, `
    szponcić|szponcic|szponcenie; hejtować|hejtowac; fejkować; scrollować|skrolować; lurkować|lurkowac; popins;
    noobek; nob; random; randomowy; skilla; skill issue; lepszy movement; sweat; tryhardować|trajhardować; kampić;
    farmić; expić|expić moby; dropnąć; duuuży dub|W; elka|L; ggez|gg ez; gitówa|gitóweczka; nwm|nie wiem; zwijam;
    nara; elo mordo; do zoba; tymczasem; najs; bigosik; kawusia; alkus; ogarnięty; typiara; typiarz; typie;
    mordo ty moja; sztosik; słodziak; kwas; kwasić; zrowerowany; odpalić się; odpiąć wrotki; mieć odpał; lipa;
    przypałowo; kręcić bekę; mieć bekę; krindżować; skrin|screen|screena; spelować; odsubować; dać unfollow;
    unfollowować; brać L; wtopa; nobek; macanko; mieć wywalone; robić wała; wykręcić numer; turlam się; pękam;
    kisnę; totalna odklejka; odjaniepawlać|odjaniewpawlać; mówić na priv; pw|napisz na pw; dm|napisz dm;
    wysłać pinga; pingować
  `),
  film: entries(570, `
    Przypadek; Trzeba zabić tę miłość; Panny z Wilka; Brzezina; Tatarak; Człowiek z żelaza; Człowiek z marmuru;
    Dyrygent; Krajobraz po bitwie; Polowanie na muchy; Bez znieczulenia; Wszystko na sprzedaż;
    Niewinni czarodzieje; Popioły; Lotna; Kanał; Pokolenie; Jutro premiera; Rękopis znaleziony w Saragossie;
    Sanatorium pod Klepsydrą; Jak być kochaną; Pętla; Pożegnania; Złoto; Szyfry; Wspólny pokój;
    Nieciekawa historia; Osobisty pamiętnik grzesznika; Szpital Przemienienia; Konopielka; Austeria; Magnat;
    Wierna rzeka; Jezioro Bodeńskie; Zmory; Kroll; Psy II. Ostatnia krew|Psy 2; Operacja Samum; Reich;
    Demony wojny według Goi; Miasto 44|Miasto 1944; Sala samobójców|Sala Samobojcow;
    Hejter|Sala samobójców. Hejter; Boże Ciało; Najmro. Kocha, kradnie, szanuje|Najmro; Żeby nie było śladów;
    25 lat niewinności|25 lat niewinności. Sprawa Tomka Komendy; Zupa nic; Teściowie 3; Sztuka kochania;
    Planeta singli; Planeta singli 2; Planeta singli 3; Listy do M. 2; Listy do M. 3; Listy do M. 4; Listy do M. 5;
    Listy do M. Pożegnania i powroty; Lejdis; Testosteron; Idealny facet dla mojej dziewczyny; Tylko mnie kochaj;
    Nigdy w życiu!; Ja wam pokażę!; Rozmowy kontrolowane; Kogel-mogel; Galimatias, czyli kogel-mogel II;
    Miszmasz, czyli kogel-mogel 3; Koniec świata, czyli kogel-mogel 4; Baby są jakieś inne; Ajlawju;
    Wszyscy jesteśmy Chrystusami; 7 uczuć; Nic śmiesznego; Dom zły; Drogówka; Róża; Wołyń; Kler;
    Pod Mocnym Aniołem; Wesele 2021|Wesele (2021); Czarny Mercedes; Czerwone maki; Orzeł. Ostatni patrol;
    Ułaskawienie; Corpus Christi|Boże Ciało; Kamerdyner; Historia kina w Popielawach; Jasminum; Grający z talerza;
    Pogrzeb kartofla; Wino truskawkowe; Serce nie sługa
  `),
  serial: entries(495, `
    Szkoła|Szkoła TVN|serial Szkoła;
    07 zgłoś się|07 zglos sie; Janosik; Kariera Nikodema Dyzmy; Z biegiem lat, z biegiem dni; Polskie drogi;
    Pogranicze w ogniu; Czarne chmury; Przygody pana Michała; Królowa Bona; 1920. Wojna i miłość; Królowie;
    Korona królów; Korona królów. Jagiellonowie; Jagiellonowie; Zatoka szpiegów; Ludzie Chudego;
    Pitbull|serial Pitbull; Glina; Oficer; Oficerowie; Trzeci oficer; Odwróceni; Odwróceni. Ojcowie i córki;
    Fala zbrodni; Kryminalni; Komisarz Alex; Sprawiedliwi. Wydział Kryminalny; Policjantki i policjanci;
    Lombard. Życie pod zastaw|Lombard; Dzielnica strachu; Detektywi; W-11 Wydział Śledczy|W11;
    Malanowski i partnerzy; Ukryta prawda; Szpital; Na ratunek 112; Czas honoru. Powstanie; Młody Piłsudski;
    Legiony i Polonia Restituta; Szadź; Rysa; Układ; Prosta sprawa; Kiedy ślub?; Warszawianka;
    Absolutni debiutanci; Sexify; W głębi lasu; Otwórz oczy; Zachowaj spokój; Brokat; Królowa; Wielka woda;
    Informacja zwrotna; Pewnego razu na krajowej jedynce; Matki pingwinów; Projekt UFO; Aniela; Śleboda; Przesmyk;
    Wzgórze psów; Diagnoza; Druga szansa; Lekarze; Lekarze na start; Szpital na perypetiach; Barwy szczęścia;
    Klan|Klan TVP; Plebania; Złotopolscy; Mamuśki; 39 i pół; 39 i pół tygodnia; BrzydUla;
    Hela w opałach; Niania; Ja to mam szczęście!; Rodzina zastępcza Plus; I kto tu rządzi?; Przypadki Cezarego P.;
    Halo Hans!; Daleko od noszy 2; Bao-bab, czyli zielono mi; Bulionerzy; Dziki; Dziki 2. Pojedynek;
    Graczykowie, czyli Buła i spóła; Lokatorzy|Lokatorzy TVP; Sąsiedzi; Kasia i Tomek; Tajemnica twierdzy szyfrów;
    Sensacje XX wieku; Encyklopedia II wojny światowej
  `),
  gra: entries(470, `
    60 Seconds! Reatomized|60 Seconds Reatomized; Radio Commander; War Mongrels; Hatred; Ancestors Legacy;
    Destructive Creations IS Defense|IS Defense; 112 Operator; 911 Operator; Infection Free Zone; Rustler;
    Hellcard; Book of Demons; The Amazing American Circus; Thea: The Awakening|Thea The Awakening;
    Thea 2: The Shattering|Thea 2; Timberborn; Hard West; Phantom Doctrine; The Beast Inside;
    Observer: System Redux|Observer System Redux; Layers of Fear 2; Blair Witch; The Medium;
    Cronos: The New Dawn|Cronos; Silent Hill 2 (2024)|Silent Hill 2 od Bloobera; The Last Case of Benedict Fox;
    MOUSE: P.I. For Hire|Mouse PI For Hire; MouseCraft; Flooded; Beat Cop; Butcher; Carrion;
    This War of Mine: Stories; Frostpunk: The Last Autumn|Frostpunk The Last Autumn; Frostpunk: On The Edge;
    Frostpunk: The Rifts; Anomaly: Warzone Earth|Anomaly Warzone Earth; Anomaly 2; Anomaly Defenders;
    Anomaly Korea; Tower 57; Spacecom; The Alters; Siege Survival: Gloria Victis; Gloria Victis; Outriders;
    Gears of War: Judgment|Gears Judgment; NecroVision|Necrovision; NecroVision: Lost Company;
    Painkiller: Battle Out of Hell; Painkiller: Recurring Evil; Bulletstorm; Bulletstorm VR; Deadfall Adventures;
    Get Even; Chernobylite Complete Edition; Sniper: Ghost Warrior|Sniper Ghost Warrior; Sniper: Ghost Warrior 2;
    Sniper: Ghost Warrior 3; Sniper Ghost Warrior Contracts; Enemy Front; My Memory of Us; We. The Revolution;
    Wanderlust: Travel Stories; Werewolf: The Apocalypse – Heart of the Forest|Heart of the Forest; Paradise Lost;
    Best Month Ever!; The Invincible|Niezwyciężony; The Thaumaturge;
    Seven: Enhanced Edition|Seven Enhanced Edition; Darkwood; Two Worlds: Epic Edition;
    Two Worlds II: Pirates of the Flying Fortress; Earth 2140; Earth 2160; World War III: Black Gold;
    KnightShift|Polanie II; Chicken Shoot; Skoki Narciarskie 2002
  `),
  miasto: entries(930, `
    Poznań|Stołeczne Miasto Poznań; Warszawa|miasto stołeczne Warszawa|m st Warszawa|Warszawa m st;
    Kraków|Kraków stołeczny; Bielsko-Biała|miasto Bielsko Biała; Gorzów Wielkopolski|Gorzów;
    Piotrków Trybunalski|Piotrków Tryb; Ostrowiec Świętokrzyski|Ostrowiec Św; Ostrów Wielkopolski|Ostrów Wlkp;
    Skała|miasto Skała; Jelcz-Laskowice|Jelcz Laskowice; Jastrzębie-Zdrój|Jastrzębie Zdrój;
    Czechowice-Dziedzice|Czechowice Dziedzice; Skarżysko-Kamienna|Skarżysko; Ruciane-Nida|Ruciane Nida;
    Janowiec Wielkopolski|Janowiec Wlkp; Nowe Miasto Lubawskie|Nowe Miasto Lub; Nowy Dwór Mazowiecki|Nowy Dwór Maz;
    Nowy Dwór Gdański|Nowy Dwór Gd
  `),
  dzielnica: entries(650, `
    Szczęśliwice; Rakowiec; Filtry; Stara Ochota; Osiedle Kolonia Lubeckiego|Kolonia Lubeckiego; Zachodnia Ochota;
    Wyczółki; Grabów; Pyry; Dąbrówka; Jeziorki Południowe; Jeziorki Północne; Imielin; Stary Imielin; Natolin;
    Kabaty; Skarpa Ursynowska; Służew nad Dolinką; Służewiec Południowy; Wierzbno; Ksawerów; Sielce; Stegny;
    Sadyba; Siekierki; Augustówka; Miasteczko Wilanów; Powsinek; Powsin; Kępa Zawadowska; Zawady; Powązki;
    Sady Żoliborskie; Marymont-Potok; Marymont-Ruda; Żoliborz Oficerski; Żoliborz Dziennikarski;
    Żoliborz Urzędniczy; Wawrzyszew; Chomiczówka; Piaski; Wrzeciono; Placówka; Hutnik; Młociny; Las Bielański;
    Fort Bema; Górce; Chrzanów; Jelonki Południowe; Jelonki Północne; Boernerowo; Blizne; Groty; Górny Mokotów;
    Targówek Przemysłowy|Targówek Fabryczny; Elsnerów; Utrata; Lewinów; Bródno-Podgrodzie; Pelcowizna; Golędzinów;
    Szmulowizna|Szmule; Nowa Praga; Stara Praga; Praga-Północ|dzielnica Praga Północ;
    Praga-Południe|dzielnica Praga Południe; Gocławek; Olszynka Grochowska; Witolin; Przyczółek Grochowski;
    Kozia Górka; Utrata; Anin; Radość; Miedzeszyn; Falenica; Aleksandrów; Zerzeń; Las; Nadwiśle;
    Marysin Wawerski Północny; Marysin Wawerski Południowy; Kawęczyn-Wygoda; Zygmuntów; Wola Grzybowska; Groszówka;
    Zielona-Grzybowa; Czaplowizna; Nowe Włochy; Salomea; Opacz Wielka; Załuski; Niedźwiadek; Gołąbki; Szamoty;
    Skorosze; Czechowice
  `),
  jezioro: entries(630, `
    Jezioro Mucharskie|Zbiornik Świnna Poręba; Jezioro Klimkowskie|Klimkówka;
    Jezioro Dobczyckie|Zbiornik Dobczycki; Jezioro Czchowskie|Zbiornik Czchowski;
    Jezioro Czorsztyńskie|Zbiornik Czorsztyński; Jezioro Sromowieckie|Zbiornik Sromowce;
    Jezioro Rożnowskie|Zbiornik Rożnowski; Jezioro Międzybrodzkie; Jezioro Czanieckie;
    Jezioro Żywieckie|Zbiornik Tresna; Jezioro Porajskie|Zalew Poraj; Jezioro Dzierżno Duże; Jezioro Dzierżno Małe;
    Jezioro Pławniowickie|Pławniowice; Pogoria I; Pogoria II; Pogoria IV; Kuźnica Warężyńska;
    Zbiornik Łąka|Zalew Łąka; Goczałkowicki|Zbiornik Goczałkowicki; Jezioro Nyskie|Zbiornik Nyski;
    Jezioro Otmuchowskie|Zbiornik Otmuchowski; Jezioro Turawskie|Duże Jezioro Turawskie;
    Jezioro Mietkowskie|Zalew Mietkowski; Jezioro Bukówka|Zbiornik Bukówka; Jezioro Modre; Jezioro Leśniańskie;
    Jezioro Pilchowickie; Jezioro Złotnickie; Zalew Słup; Zalew Kamieński|Zalew Kamieński na Dziwnie;
    Jezioro Wicko Wielkie; Jezioro Wicko Małe; Jezioro Turkusowe|Turkusowe w Wapnicy; Jezioro Żółwińskie;
    Jezioro Wisełka; Koprowo; Piaski; Czajcze; Domysłowskie; Jezioro Łebsko; Jezioro Sarbsko; Dołgie Wielkie;
    Dołgie Małe; Jezioro Gardno; Jezioro Kopań; Jezioro Wicko; Jezioro Jamno; Jezioro Bukowo;
    Jezioro Resko Przymorskie; Jezioro Liwia Łuża; Jezioro Dąbie; Jezioro Płonie; Jezioro Morzycko; Będzin;
    Wełtyńskie; Binowskie; Miedwie|Jezioro Miedwie; Lubie|Lubie Drawskie; Wilczkowo; Wielkie Dąbie; Wierzchowo;
    Trzesiecko; Wielimie|Jezioro Wielimie; Siecino; Komorze; Pile; Ciemino; Długie; Wałeckie Raduń|Jezioro Raduń;
    Zamkowe; Bytyń Wielki; Martwe; Jezioro Dominickie; Jezioro Boszkowskie; jezioro Dolskie Wielkie;
    Jezioro Jarosławieckie; Jezioro Góreckie; Łódzko-Dymaczewskie; Niepruszewskie; Jezioro Lusowskie;
    Kierskie Małe; Kierskie Wielkie|Jezioro Kierskie; Jezioro Kowalskie; Jezioro Swarzędzkie; Jezioro Rusałka;
    Jezioro Budzisławskie; Jezioro Niedzięgiel|Skorzęcińskie; Jezioro Białe w Gorzuchowie; Jezioro Mikorzyńskie;
    Jezioro Licheńskie; Jezioro Gosławskie; Jezioro Pątnowskie; Szydłowskie; Kownackie; Ostrowskie
  `),
  zamek: entries(620, `
    Zamek w Janowcu|Janowiec nad Wisłą; Zamek w Ciechanowie|Zamek Książąt Mazowieckich w Ciechanowie;
    Zamek w Czersku|Zamek Książąt Mazowieckich w Czersku; Zamek w Liwie|Liw; Zamek w Szydłowcu; Zamek w Drzewicy;
    Zamek w Inowłodzu; Zamek w Dąbrowie Niemodlińskiej; Zamek w Niemodlinie; Zamek w Rogowie Opolskim;
    Zamek w Kopicach|Pałac w Kopicach; Korfantów; Zamek Piastowski w Opolu; Zamek Piastowski w Raciborzu;
    Zamek Piastowski w Gliwicach; Zamek w Toszku; Zamek w Siedlisku|Carolath; Zamek w Żarach;
    Zamek w Żaganiu|Pałac Lobkowitzów; Pałac w Zatoniu; Pałac w Bojadłach; Pałac w Brodach; Pałac w Iłowej;
    Pałac w Mierzęcinie; Pałac w Wiechlicach; Pałac w Kargowej; Pałac w Sztynorcie|Sztynort; Pałac w Drogoszach;
    Pałac w Łężanach; Pałac w Galinach; Pałac w Dylewie; Zamek Kapituły Warmińskiej w Olsztynie;
    Zamek w Barcianach; Zamek w Bezławkach; Zamek w Kętrzynie; Zamek w Działdowie; Zamek w Szczytnie;
    Zamek w Morągu; Zamek w Przezmarku; Zamek w Prabutach; Zamek w Dzierzgoniu; Zamek w Starym Dzierzgoniu;
    Zamek w Sztumie; Zamek w Toruniu; Zamek Dybów|Dybów; Zamek w Bierzgłowie; Zamek w Papowie Biskupim;
    Zamek w Rogóźnie; Zamek w Radzyniu Chełmińskim; Zamek w Kowalewie Pomorskim; Zamek w Złotorii;
    Zamek w Bobrownikach; Pałac w Ostromecku; Pałac w Lubostroniu; Pałac w Samostrzelu; Pałac w Kobylnikach;
    Zamek w Kruszwicy|Mysia Wieża; Pałac w Czerniejewie; Pałac w Śmiełowie; Pałac w Dobrzycy; Pałac w Antoninie;
    Pałac w Lewkowie; Pałac w Bagateli; Pałac w Śliwnikach; Twierdza Zamość; Twierdza Przemyśl; Twierdza Boyen;
    Twierdza Osowiec; Twierdza Kłodzko; Twierdza Koźle; Fort Gerharda; Fort Anioła; Fort Zachodni
  `),
  uczelnia: entries(550, `
    UJ CM|Collegium Medicum Uniwersytetu Jagiellońskiego; Akademia Górniczo-Hutnicza w Krakowie|AGH Kraków;
    Uniwersytet Komisji Edukacji Narodowej w Krakowie|UKEN|UKEN Kraków|UP Kraków;
    Uniwersytet Rolniczy w Krakowie|URK|UR Kraków; Uniwersytet Ekonomiczny w Krakowie|UEK;
    Uniwersytet Ekonomiczny w Poznaniu|UEP; Uniwersytet Ekonomiczny we Wrocławiu|UEW;
    Uniwersytet Ekonomiczny w Katowicach|UE Katowice;
    Uniwersytet WSB Merito we Wrocławiu|WSB Wrocław|WSB Merito Wrocław;
    Uniwersytet WSB Merito w Gdańsku|WSB Gdańsk|WSB Merito Gdańsk;
    Uniwersytet WSB Merito w Poznaniu|WSB Poznań|WSB Merito Poznań;
    Akademia Sztuki Wojennej|ASzWoj|Akademia Obrony Narodowej|AON; Wojskowa Akademia Techniczna|WAT Warszawa;
    Akademia Marynarki Wojennej|AMW; Uniwersytet Morski w Gdyni|UMG|Akademia Morska w Gdyni;
    Politechnika Morska w Szczecinie|PM Szczecin|Akademia Morska w Szczecinie;
    Lotnicza Akademia Wojskowa|LAW Dęblin; Akademia Pożarnicza|APoż|SGSP; Akademia Wymiaru Sprawiedliwości|AWS;
    Akademia Policji w Szczytnie|APwSz|WSPol; Akademia Muzyczna w Poznaniu|AM Poznań;
    Akademia Muzyczna w Krakowie|AMKP; Akademia Muzyczna imienia Karola Szymanowskiego|AM Katowice;
    Uniwersytet Muzyczny Fryderyka Chopina|UMFC|Chopin University of Music; Szkoła Filmowa w Łodzi|PWSFTviT;
    Akademia Teatralna w Warszawie|AT Warszawa; Akademia Sztuk Teatralnych w Krakowie|AST Kraków|PWST Kraków;
    Pomorski Uniwersytet Medyczny|PUM Szczecin; Uniwersytet Medyczny w Lublinie|UMLub;
    Uniwersytet Medyczny w Białymstoku|UMB; Uniwersytet Medyczny w Łodzi|UMED Łódź;
    Śląski Uniwersytet Medyczny|SUM Katowice; Akademia Wychowania Fizycznego w Katowicach|AWF Katowice;
    Akademia Wychowania Fizycznego w Krakowie|AWF Kraków
  `),
  pasmo: entries(660, `
    Małe Pieniny; Pieniny Spiskie; Pieniny Właściwe; Pasmo Jaworzyny Krynickiej; Pasmo Radziejowej; Pasmo Policy;
    Pasmo Babiej Góry; Pasmo Jałowca; Pasmo Pewelskie; Pasmo Laskowskie; Pasmo Łososińskie; Pasmo Cietnia;
    Pasmo Lubomira i Łysiny; Beskid Wyspowy|Wyspowy; Pasmo Gubałowskie; Pogórze Spisko-Gubałowskie;
    Pogórze Ciężkowickie; Pogórze Strzyżowskie; Pogórze Dynowskie; Pogórze Bukowskie; Pogórze Jasielskie;
    Pogórze Wielickie; Pogórze Wiśnickie; Pogórze Śląskie; Pogórze Cieszyńskie; Grzbiet Lasocki; Grzbiet Kowarski;
    Góry Jastrzębie; Góry Bystrzyckie; Masyw Krowiarek|Krowiarki; Góry Złote; Góry Bialskie; Góry Rychlebskie;
    Góry Kamienne; Góry Suche; Góry Krucze; Masyw Dzikowca i Lesistej Wielkiej; Pasmo Zaworów|Zawory;
    Góry Wałbrzyskie|Wałbrzyskie; Wzgórza Włodzickie; Wzgórza Lewińskie; Wzgórza Rogowskie; Wzgórza Strzelińskie;
    Wzgórza Niemczańsko-Strzelińskie; Masyw Ślęży|Ślężański Masyw; Wzgórza Kiełczyńskie; Wzgórza Bielawskie;
    Wzgórza Lipowe; Pasmo Chęcińskie; Pasmo Zelejowskie; Pasmo Bolechowickie; Pasmo Dymińskie; Pasmo Posłowickie;
    Pasmo Zgórskie; Pasmo Klonowskie; Pasmo Jeleniowskie; Pasmo Orłowińskie; Pasmo Cisowskie; Pasmo Daleszyckie;
    Pasmo Masłowskie; Pasmo Tumlińskie; Pasmo Oblęgorskie
  `),
  aktor: entries(540, `
    Zofia Wichłacz; Michalina Olszańska; Marta Nieradkiewicz; Marta Żmuda Trzebiatowska; Gabriela Muskała;
    Jowita Budnik; Sonia Bohosiewicz; Maja Bohosiewicz; Julia Kijowska; Roma Gąsiorowska; Agata Buzek;
    Agata Kulesza; Agnieszka Podsiadlik; Helena Sujecka; Maria Pakulnis; Monika Krzywkowska; Aleksandra Konieczna;
    Tamara Arciuch; Edyta Olszówka; Katarzyna Herman; Dominika Bednarczyk; Katarzyna Dąbrowska; Marieta Żukowska;
    Weronika Rosati; Julia Wieniawa; Antoni Królikowski; Paweł Królikowski; Rafał Królikowski; Tomasz Karolak;
    Tomasz Kot; Zbigniew Zamachowski; Robert Więckiewicz; Marcin Bosak; Andrzej Chyra; Bartłomiej Topa;
    Arkadiusz Jakubik; Jacek Braciak; Wojciech Zieliński; Łukasz Simlat; Eryk Lubos; Łukasz Garlicki;
    Bartosz Gelner; Piotr Głowacki; Sebastian Fabijański; Nikodem Rozbicki; Jan Wieteska; Józef Pawłowski;
    Filip Pławiak; Mateusz Damięcki; Maciej Damięcki; Grzegorz Damięcki; Daniel Olbrychski; Jan Englert;
    Maciej Englert; Gustaw Holoubek; Andrzej Łapicki; Tadeusz Łomnicki; Zbigniew Zapasiewicz; Jerzy Bińczycki;
    Jerzy Trela; Jerzy Zelnik; Piotr Machalica; Leon Niemczyk; Jan Nowicki; Wojciech Pokora; Jan Kobuszewski;
    Janusz Rewiński; Krzysztof Kowalewski; Stanisław Tym; Wiesław Gołas; Marian Kociniak; Janusz Kłosiński;
    Henryk Bista; Ryszard Kotys; Ryszard Pietruski; Zdzisław Maklakiewicz; Jan Himilsbach; Aleksander Fogiel;
    Mieczysław Czechowicz; Kalina Jędrusik; Irena Kwiatkowska; Alina Janowska; Barbara Rachwalska;
    Zofia Czerwińska; Zofia Merle; Zofia Mrozowska; Jadwiga Barańska; Pola Negri
  `),
  piosenkarz: entries(510, `
    Jann; Luna|Aleksandra Wielgomas; Michał Szpak; Margaret|Małgorzata Jamroży; Maryla Rodowicz; Krystyna Giżowska;
    Izabela Trojanowska; Helena Majdaniec; Urszula|Urszula Kasprzak; Małgorzata Ostrowska; Wanda Kwietniewska;
    Renata Przemyk; Katarzyna Groniec; Renata Dąbkowska; Anita Lipnicka; Kasia Stankiewicz; Magdalena Tul;
    Natasza Urbańska; Anna Jurksztowicz; Natalia Kukulska; Monika Kuszyńska; Anna Karwan; Kasia Moś; Joanna Kulig;
    Stanisław Soyka|Stanisław Sojka; Grzegorz Ciechowski|Obywatel G.C.; Kazik Staszewski|Kazik; Kuba Sienkiewicz;
    Kamil Bednarek; Igor Herbut; Damian Ukeje; Piotr Rogucki; Tomasz Organek|Ørganek; Dawid Tyszkowski;
    Piotr Zioła; Patrick The Pan; Fismoll; Kortez; Krzysztof Zalewski; Brodka|Monika Brodka; Julia Pietrucha;
    Mikromusic Natalia Grosiak|Natalia Grosiak; Julia Marcell; Mery Spolsky; Bovska; Rosalie.; Maja Kleszcz;
    Marcelina; Natalia Nykiel; Daria ze Śląska; Wiktor Waligóra; Ania Leon; Zalia; Ofelia|Iga Krefft; Ramona Rey;
    Reni Jusis; Maria Sadowska; Ania Szarmach; Ewa Bem; Grażyna Łobaszewska; Łucja Prus; Sława Przybylska;
    Hanna Banaszak; Katarzyna Bovery; Zdzisława Sośnicka; Andrzej Cierniewski; Eleni; Andrzej Zieliński;
    Andrzej Dąbrowski; Mieczysław Fogg; Hanka Ordonówna; Eugeniusz Bodo; Adam Aston; Ludwik Sempoliński
  `),
  prezenter: entries(490, `
    Agnieszka Szulim|Agnieszka Woźniak-Starak; Małgorzata Rozenek-Majdan|Małgorzata Rozenek; Filip Chajzer;
    Mariusz Szczygieł; Marcin Daniec; Paweł Dłużewski; Rafał Brzozowski; Izabella Krzan; Tomasz Wolny;
    Aleksander Sikora; Mateusz Szymkowiak; Łukasz Nowicki; Małgorzata Tomaszewska; Robert El Gendy;
    Monika Richardson|Monika Zamachowska; Ewa Drzyzga; Grażyna Torbicka; Katarzyna Dowbor; Maciej Dowbor;
    Przemysław Borkowski; Marcin Wójcik; Robert Górski; Katarzyna Pakosińska; Olga Łasak; Dariusz Kamys;
    Dariusz Gnatowski; Piotr Gąsowski; Katarzyna Skrzynecka; Agata Młynarska; Paulina Młynarska; Piotr Kraśko;
    Anita Werner; Justyna Pochanke; Katarzyna Kolenda-Zaleska; Diana Rudnik; Grzegorz Kajdanowicz; Piotr Marciniak;
    Dorota Gardias; Agnieszka Cegielska; Tomasz Zubilewicz; Jarosław Kret; Marzena Słupkowska;
    Tomasz Wasilewski pogodynka|Tomasz Wasilewski; Michał Olszański; Maciej Orłoś; Sławomir Siezieniewski;
    Katarzyna Trzaskalska; Beata Chmielowska-Olech; Katarzyna Sanocka; Wojciech Cejrowski; Elżbieta Dzikowska;
    Tony Halik; Adam Wajrak; Hanna Lis; Monika Olejnik; Stefan Friedmann
  `),
  postac_historyczna: entries(545, `
    Mieszko II Lambert; Bolesław II Szczodry; Dobrawa|Dubrawka; Rycheza Lotaryńska; Gertruda Mieszkówna;
    Elżbieta Łokietkówna; Elżbieta Rakuszanka; Jan Długosz; Wincenty Kadłubek; Gall Anonim; Wincenty z Kielczy;
    Zawisza Czarny|Zawisza Czarny z Garbowa; Jan z Kolna; Paweł Włodkowic; Zbigniew Oleśnicki; Jan Łaski;
    Mikołaj Trąba; Wojciech Jastrzębiec; Jan Zamoyski; Stanisław Żółkiewski; Jan Karol Chodkiewicz;
    Stefan Czarniecki; Stanisław Koniecpolski; Jerzy Sebastian Lubomirski; Janusz Radziwiłł; Bogusław Radziwiłł;
    Mikołaj Krzysztof Radziwiłł Sierotka; Krzysztof Radziwiłł Piorun; Aleksander Lisowski; Samuel Zborowski;
    Aleksander Kostka-Napierski; Stanisław Papczyński; Rafał Kalinowski; Hugo Kołłątaj; Stanisław Małachowski;
    Ignacy Potocki; Adam Kazimierz Czartoryski; Izabela Czartoryska; Adam Jerzy Czartoryski;
    Julian Ursyn Niemcewicz; Książę Józef Poniatowski|Józef Poniatowski; Jan Henryk Dąbrowski; Józef Wybicki;
    Józef Zajączek; Walerian Łukasiński; Piotr Wysocki; Ludwik Mierosławski; Joachim Lelewel; Romuald Traugutt;
    Jarosław Dąbrowski; Marian Langiewicz; Agaton Giller; Walery Wróblewski; Henryk Dembiński; Józef Bem;
    Józef Sowiński; Jan Kiliński; Bartosz Głowacki; Henryk Dobrzański|Hubal; Stanisław Maczek;
    Stanisław Sosabowski; Władysław Anders; Władysław Sikorski; Kazimierz Sosnkowski; Tadeusz Bór-Komorowski;
    Stefan Rowecki|Grot Rowecki; Leopold Okulicki; Antoni Chruściel|Monter; Elżbieta Zawacka|Zo; Krystyna Skarbek;
    Alina Janowska; Zośka|Tadeusz Zawadzki; Alek|Maciej Aleksy Dawidowski; Rudy|Jan Bytnar; Jan Rodowicz|Anoda;
    Jan Nowak-Jeziorański; Kazimierz Pużak; Stefan Korboński; Cyryl Ratajski; Alina Pienkowska; Bogdan Borusewicz;
    Henryka Krzywonos; Andrzej Gwiazda
  `),
  sportowiec: entries(555, `
    Zbigniew Boniek; Grzegorz Lato; Kazimierz Deyna; Włodzimierz Lubański; Andrzej Szarmach; Jan Tomaszewski;
    Władysław Żmuda; Józef Młynarczyk; Roman Kosecki; Wojciech Kowalczyk; Tomasz Iwan; Radosław Majdan;
    Emmanuel Olisadebe; Jerzy Dudek; Tomasz Kuszczak; Artur Boruc; Grzegorz Krychowiak; Kamil Grosicki;
    Michał Pazdan; Bartosz Bereszyński; Przemysław Frankowski; Nicola Zalewski; Kacper Urbański; Jakub Moder;
    Sebastian Szymański; Karol Świderski; Adam Buksa; Matty Cash; Zofia Noceti-Klepacka|Zofia Klepacka;
    Mateusz Kusznierewicz; Przemysław Miarczyński; Piotr Myszka; Paweł Tarnowski; Maja Dziarnowska;
    Agnieszka Skrzypulec; Jolanta Ogar; Agata Barwińska; Monika Pyrek; Anna Rogowska; Jacek Wszoła;
    Władysław Kozakiewicz; Tadeusz Ślusarski; Marian Woronin; Irena Szewińska; Ewa Kłobukowska; Halina Konopacka;
    Stanisława Walasiewicz; Janusz Kusociński; Bronisław Malinowski lekkoatleta; Zdzisław Krzyszkowiak;
    Robert Korzeniowski; Tomasz Lipiec; Grzegorz Sudoł; Katarzyna Zdziebło; Szymon Ziółkowski; Kamila Skolimowska;
    Piotr Małachowski; Robert Urbanek; Paweł Wojciechowski; Piotr Lisek; Anna Kiełbasińska; Justyna Święty-Ersetic;
    Małgorzata Hołub-Kowalik; Iga Baumgart-Witan; Patrycja Wyciszkiewicz; Natalia Kołaczek; Martyna Galant;
    Angelika Cichocka; Marcin Lewandowski; Adam Kszczot; Michał Rozmys; Mateusz Borkowski; Patryk Dobek;
    Władysław Komar; Edward Sarul; Grzegorz Szymański; Sebastian Świderski; Paweł Zagumny; Piotr Gruszka;
    Michał Winiarski; Mariusz Wlazły; Michał Kubiak; Krzysztof Ignaczak; Piotr Nowakowski; Marcin Możdżonek;
    Karol Kłos; Artur Szalpuk; Jakub Kochanowski; Norbert Huber; Marcin Janusz; Łukasz Kaczmarek; Kamil Semeniuk;
    Bartłomiej Bołądź; Katarzyna Skowrońska-Dolata; Małgorzata Glinka-Mogentale; Dorota Świeniewicz;
    Izabela Bełcik; Anna Podolec; Agata Mróz-Olszewska; Tamara Kaliszuk; Dominika Sobolska-Tarasova;
    Weronika Centka-Tietianiec; Andrzej Supron; Włodzimierz Zawadzki; Andrzej Wroński; Ryszard Wolny;
    Szymon Kołecki; Adrian Zieliński; Tomasz Majewski; Zbigniew Pietrzykowski; Jerzy Kulej; Marian Kasprzyk;
    Józef Grudzień; Leszek Drogosz; Dariusz Michalczewski; Tomasz Adamek; Krzysztof Włodarczyk|Diablo Włodarczyk;
    Andrzej Gołota; Agnieszka Rylik; Ewa Brodnicka; Laura Grzyb; Jan Błachowicz; Joanna Jędrzejczyk;
    Karolina Kowalkiewicz; Mateusz Gamrot; Marcin Tybura; Michał Oleksiejczuk; Mamed Khalidov|Mamed Chalidow;
    Tomasz Narkun; Borys Mańkowski; Damian Janikowski
  `),
  klub: entries(610, `
    Gwardia Warszawa; Gwardia Koszalin; Gwardia Opole; Hutnik Warszawa; Hutnik Nowa Huta|Hutnik Kraków;
    Garbarnia Kraków; Prokocim Kraków; Wawel Kraków; Bieżanowianka Kraków; Clepardia Kraków; Grębałowianka Kraków;
    Prądniczanka Kraków; Jutrzenka Kraków; Korona Kraków; Nadwiślan Kraków; Wisła Sandomierz; Wisła Puławy;
    Wisła II Kraków; Wisłoka Dębica; Igloopol Dębica; Lechia Tomaszów Mazowiecki; Ceramika Opoczno;
    Widzew Łódź|RTS Widzew; ŁKS Łódź|Łódzki Klub Sportowy; Orzeł Łódź; Włókniarz Łódź; Sokół Aleksandrów Łódzki;
    Zjednoczeni Stryków; Unia Skierniewice; Pelikan Łowicz; Łysica Bodzentyn; Star Starachowice;
    KSZO Ostrowiec Świętokrzyski|KSZO; Czarni Połaniec; Alit Ożarów; Granat Skarżysko-Kamienna; Neptun Końskie;
    Orlęta Radzyń Podlaski; Avia Świdnik; Hetman Zamość; Tomasovia Tomaszów Lubelski; Chełmianka Chełm;
    Podlasie Biała Podlaska; Lublinianka; Orlęta Łuków; Stal Poniatowa; Lewart Lubartów; Górnik Łęczna;
    Motor Lublin; Wisła Annopol; Mazur Ełk; Warmia Grajewo; ŁKS Łomża; Śniardwy Orzysz; Mrągowia Mrągowo;
    Mamry Giżycko; Znicz Biała Piska; Polonia Lidzbark Warmiński; Jeziorak Iława; Drwęca Nowe Miasto Lubawskie;
    Huragan Morąg; Concordia Elbląg; Olimpia Elbląg; Mławianka Mława; Narew Ostrołęka; Tęcza Łyse;
    Legia II Warszawa; Ząbkovia Ząbki; Dolcan Ząbki|Dolcan; Mazovia Mińsk Mazowiecki; Mazur Karczew;
    Otwocki Klub Sportowy|OKS Otwock; Victoria Sulejówek; Weszło Warszawa|KTS Weszło; Drukarz Warszawa;
    Polonia Bytom; Ruch Chorzów|Niebiescy; AKS Chorzów; Rozwój Katowice; GKS Jastrzębie; GKS Tychy;
    GKS Pniówek Pawłowice|Pniówek Pawłowice; Czarni Sosnowiec; Zagłębie Sosnowiec; Unia Dąbrowa Górnicza;
    Szczakowianka Jaworzno; Szombierki Bytom; Górnik Zabrze|Górnik; Jedność Przyszowice; Ruch Radzionków;
    Odra Wodzisław Śląski; Unia Turza Śląska; Ruch Zdzieszowice; LZS Piotrówka; Małapanew Ozimek; Stal Brzeg;
    Kluczbork|MKS Kluczbork; Polonia Nysa; Sparta Paczków
  `),
  lektura: entries(580, `
    Awantura o Basię; Panna z mokrą głową; O dwóch takich, co ukradli księżyc; Przygody Koziołka Matołka;
    Przygody Małpki Fiki-Miki; O krasnoludkach i o sierotce Marysi; Na jagody; Nasza szkapa; Mendel Gdański; Dym;
    Miłosierdzie gminy; Kamizelka; Antek; Grzechy dzieciństwa; Michałko; Powracająca fala; Janko Muzykant; Sachem;
    Z pamiętnika poznańskiego nauczyciela; Latarnik; Orso; Za chlebem; Bartek Zwycięzca; Gloria victis;
    A...B...C...|ABC Orzeszkowej; Tadeusz; Dobra pani; Chama; Doktor Piotr; Zmierzch; Zapomnienie;
    Rozdziobią nas kruki, wrony; Siłaczka; Echa leśne; Wierna rzeka; Uroda życia; Dzieje grzechu; Granica;
    Medaliony; Ludzie, którzy szli; U nas w Auschwitzu; Pożegnanie z Marią; Dno; Dymy nad Birkenau; Campo di Fiori;
    Ocalony; Kartoteka; Kartoteka rozrzucona; Białe małżeństwo; Emigranci; Policja; Na pełnym morzu; Karol;
    Iwona, księżniczka Burgunda; Ślub Gombrowicza|Ślub; Operetka; Trans-Atlantyk; Sklepy cynamonowe;
    Sanatorium pod Klepsydrą; Traktat o manekinach; Szewcy; W małym dworku; Wariat i zakonnica; Nienasycenie;
    Lalka|Lalka Prusa; Quo vadis|Quo Vadis Sienkiewicza; Krzyżacy|Krzyżacy Sienkiewicza;
    Ogniem i mieczem|Ogniem i mieczem Sienkiewicza; Dziady cz. II|Dziady część druga;
    Dziady cz. III|Dziady część trzecia; Kordian|Kordian Słowackiego; Beniowski; Grób Agamemnona; Testament mój
  `),
  tworca: entries(440, `
    Kanał Sportowy|Kanał Sportowy YouTube; Kanał Zero|Kanał Zero PL; Stanowski|Krzysztof Stanowski;
    Tomasz Ćwiąkała; Piłkarskie kanapy; Foot Truck|FootTruck; Meczyki; Ekipa|EKIPA Friza; Genzie|Genzie House;
    Mortalcio; Świeży; Julita Różalska; Hania Puchalska|Hi Hania; Faustyna Fugińska|Fausti;
    Przemek Pro|Przemysław Lejowski; Wujek Łuki; Mini Majk|Mateusz Krzyżanowski; Marcysia Ryskala|Marcysia;
    Poczciwy Krzychu|Krzysztof Łancucki; Mixer|Mikołaj Magdziarz; Nowciax|Patryk Nowak; Patec|Jakub Patecki;
    Tromba|Mateusz Trąbka; Marcin Dubiel; Filip Zabielski; Iga Krefft; Nikodem Rozbicki; Julia Żugaj;
    Sheo|Sheo Kosmo; Qry|Patryk Lubaś; Mortal|Mortalcio; Kuba Twardowski; Remigiusz Wierzgoń|Rezi;
    Daniel Ferreri|Ferreri; Maciek Dąbrowski|Z Dupy; Serafin; Wip Bros|WipBros; Beksy; Cyber Marian|CyberMarian;
    Niekryty Krytyk|Maciej Frączyk; Krzysztof Gonciarz|Gonciarz; Monika Ciesielska; Karol Paciorek|CP;
    Dawid Myśliwiec|Uwaga Naukowy Bełkot; Kacper Błoński; Aga Grzelak Beauty; Agnieszka Grzelak|Aga Grzelak;
    RLM|Ewa Grzelakowska-Kostoglu|Red Lipstick Monster; Maxineczka|Joanna Ferdynus-Gołuszko;
    StylizacjeTV|Karolina Gołębiewska; Milena Cwetsch; Adrianna Grotkowska; Aleksandra Żuraw; Aleksandra Nowak;
    Paweł Opydo; Kasia Czajka-Kominiarczuk|Zwierz Popkulturalny; Przemysław Staroń;
    Agnieszka Jankowiak-Maik|Babka od histy; Pani od polskiego|Aneta Korycińska; Arlena Witt|Po cudzemu;
    Rock|Remigiusz Maciaszek; Rojo|Patryk Rojewski; Isamu|Szymon Kasprzyk; Xayoo|Marcin Majkut;
    Rafonix|Marcin Krasucki; Rafał Gębura|7 metrów pod ziemią; Wardęga|SA Wardęga; Vito|Vito Minecraft;
    Bella|Bella Minecraft; Vito i Bella; Tritsus; Doknes; RoxMb; Banshee|Zuzanna Borucka; Yoczook; Zio; JJayJoker;
    Skkf; CTSG; Nieprzygotowani; Topowa Dycha; Pan Savy; Jakub Dębski|Dem3000; Martin Stankiewicz; Oliwer Szot
  `),
  mem: entries(390, `
    Co to się stanęło; Ąę; Nie wiem, ale się dowiem;
    Nie wiem, nie znam się, nie orientuję się, zarobiony jestem|Zarobiony jestem; Stary, ale jary;
    O, kurdebele|Kurde bele; I to jest zajebiste; Na przypale albo wcale; Polska mistrzem Polski;
    Polska gurom|Polska górą; Polska wygrała; Jako tako się trzymam; Mariusz, dawaj|Mariusz dawaj;
    Mój kraj taki piękny; Ten pan jest psychiczny; A w ogóle to dzień dobry|A w ogole to dzien dobry;
    Nie będę tego komentował; Czasami człowiek musi, inaczej się udusi; Ale kto to panu tak spierdzielił;
    U mnie działa; Stonoga w lesie; Coście uczynili z tą krainą; Polacy nic się nie stało|Nic się nie stało Polacy;
    Idź pan stąd; Słuchajcie, absolutnie nie; Ale to już było; Spokojnie jak na wojnie; Kopsnij szluga;
    Wojna w Biedronce; Dawaj, dawaj, nie przestawaj; Po co pan się denerwuje; Żal.pl|Żal pe el; Dziennikarze kurde;
    Tusk dymisja; Tam są drzwi; Lubię placki|Lubię placki mem; Prawda czasu, prawda ekranu;
    A kto umarł, ten nie żyje; Sasin 70 milionów; 70 milionów|Siedemdziesiąt milionów Sasina;
    Papież Polak|Papieżowa godzina; Papaj|Papieżowa godzina; Tylko jedno w głowie mam|Polish cow;
    Paweł Jumper|Jumper z rowerem|To już jest kamerowane; Ale urwał|Ale urwało; Forfiter|Forfiter kurka;
    Co ja paczę|Kot co ja pacze; Kiedyś to było|Kiedyś to były czasy; Będzie dobrze chłopaki;
    Nie ma lipy|Pudzian nie ma lipy
  `),
  polskie_auta: entries(650, `
    Warszawa M20|Warszawa M-20; Warszawa 201; Warszawa 202; Warszawa 203; Warszawa 204; Warszawa 223; Warszawa 224;
    Warszawa 223 Kombi; Syrena 100|FSO Syrena 100; Syrena 101; Syrena 102; Syrena 102S; Syrena 103; Syrena 104;
    Syrena 105; Syrena 105L; Syrena R-20|Syrena R20; Syrena Bosto|Syrena 105 Bosto;
    Polski Fiat 125p Kombi|Fiat 125p Kombi; Fiat 125p Pick-up; FSO 125p; FSO 1500; FSO 1300; FSO Wars; FSO Ogar;
    Polonez 1500; Polonez 2000; Polonez Coupé|Polonez Coupe; Polonez Caro; Polonez Caro Plus; Polonez Atu;
    Polonez Atu Plus; Polonez Truck; Polonez Kombi; Polonez Cargo; Polonez Analog; Polonez Jamnik;
    Mikrus MR-300|Mikrus 300; Smyk; Gacek; Meduza; Wszędołaz; Nysa N57; Nysa N59; Nysa 501; Nysa 521; Nysa 522;
    Żuk A03; Żuk A05; Żuk A06; Żuk A07; Żuk A11; Żuk A13; Żuk A15; Żuk A16; Tarpan 233; Tarpan 237; Tarpan 239D;
    Tarpan Honker; Honker 2000; Lublin 33|Daewoo Lublin; Lublin II; Lublin 3|Lublin III; Star 20; Star 25; Star 27;
    Star 28; Star 29; Star 66; Star 660; Star 200; Star 244; Star 266; Star 742; Star 1142; Star 1466;
    Jelcz 043|Jelcz Ogórek; Jelcz 021; Jelcz 272 MEX; Jelcz PR110; Jelcz M11; Jelcz L11; Jelcz M121;
    Jelcz M125M Vecto; Jelcz M185M Vectus; Jelcz 315; Jelcz 316; Jelcz 317; Jelcz 325; Jelcz 640; Jelcz 442.32;
    San H01; San H25; San H27; San H100; Autosan H9; Autosan H10; Autosan H6; Autosan H7; Autosan H9-21;
    Autosan H9-35; Autosan A1010M|Melon Autosan; Autosan Sancity; Autosan Lider; Solaris Urbino 8.9 LE;
    Solaris Urbino 9; Solaris Urbino 10; Solaris Urbino 12; Solaris Urbino 15; Solaris Urbino 18;
    Solaris Urbino 24; Solaris Trollino 12; Solaris Trollino 18; Solaris Vacanza; Solbus Solcity|Solcity;
    Solbus Solway|Solway; AMZ City Smile|City Smile; Ursus City Smile; Ursus CS12E
  `),
  polskie_tance: entries(660, `
    Kozak lubelski; Baba|Tańczona baba; Koseder; Konik; Kłaniany; Maruska; Pofajdok; Puszczany; Szewc;
    Szewc kurpiowski; Żuraw kurpiowski; Baran|Taniec baran; Młynarz|Taniec młynarz; Zając|Taniec zając;
    Krzyżok|Krzyżak śląski; Kaczok|Kaczok śląski; Szpacyrpolka|Szpacyr polka; Waloszek; Rejna; Różany; Śpiuch;
    Gołąbek; Gąsior; Żabka; Hajduk|Hajducki; Kołomajka|Kołomyjka; Polka szabasówka; Polka trzęsiona; Polka galopka;
    Polka kucana; Polka robiona; Polka tramblanka; Polka w piątkę; Kontredans kaszubski; Kùflôrz|Kuflorz;
    Kòséder|Koseder kaszubski; Szôłôsz|Szołosz; Welewetka; Wòłôtnë|Wołotny; Polonez chodzony|Chodzony wielkopolski;
    Wiwat szamotulski; Wiwat biskupiański; Przodek|Przodek szamotulski; Równy|Taniec równy; Oberek łowicki;
    Mazur szlachecki; Krakowiak wschodni
  `),
  polskie_planszowki: entries(640, `
    Boski Wiatr; W Krainie Baśni; 7 dni Westerplatte; 111 Alarm dla Warszawy|111; 303 Bitwa o Wielką Brytanię|303;
    7. W obronie Lwowa; ZnajZnak; Reglamentacja. Gra na kartki|Reglamentacja; Pan tu nie stał;
    Pan tu nie stał! Cinkciarz|Cinkciarz planszówka; Rycerze i zamki; Znajdź mnie; Eskapada; Ostrów; Ryzykanci;
    Atak zombie; Zombiaki; Zombiaki II; Osadnicy. Wykreślane Imperium;
    Osadnicy: Królestwa Północy|Imperial Settlers Empires of the North; 51. Stan: Master Set|51 Stan Master Set;
    Neuroshima Hex 3.0; Neuroshima Tactics; Stronghold; Stronghold Undead; Cry Havoc; Pret-a-Porter|Pret a Porter;
    Dune House Secrets|Diuna Sekrety Rodu;
    Robinson Crusoe: Opowieści niesamowite|Opowieści niesamowite Robinson Crusoe;
    Robinson Crusoe: Tajemnicze opowieści; Robinson Crusoe: Księga Przygód; Detektyw: Sezon pierwszy;
    Detektyw: Zbrodnie L.A.; Vienna Connection|Sprawa Wiedeńska; Batman: Wszyscy kłamią|Batman Wszyscy Klamia;
    Eleven: Football Manager Board Game; Thorgal: Gra planszowa|Thorgal planszówka; Gutenberg;
    Drako: Smok i krasnoludy|Drako; Drako: Rycerze i trolle; Potwory do szafy; Rancho; Superfarmer Big Box;
    Superfarmer: Borsuk; Superfarmer: Gra karciana; Superfarmer i Koza; Dino kontra Dino; Kto to był?; Kotobirynt;
    Kociaki Łobuziaki; Kwiatki; Cukierki i Piraci; Pocztówka z Afryki; Kolorowe biedronki;
    Mlem: Agencja kosmiczna|MLEM; Heroes of Might and Magic III: Gra planszowa|HoMM 3 planszówka;
    Kingdom Rush: Rift in Time
  `),
};
