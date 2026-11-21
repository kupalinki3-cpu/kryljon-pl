import { group } from './util.js';

const names = (list) => list.split(';').map((name) => name.trim());

export default {
  przedmiot: [
    ...group(4600, ['język czeski', 'czeski', 'j. czeski'], ['język hebrajski', 'hebrajski', 'j. hebrajski']),
    ['matematyka', 'matma', 'mat'], ['język polski', 'polski', 'j. polski', 'j. pol'],
    ['historia sztuki', 'hist sztuki', 'histszt'], ['historia muzyki', 'hist muzyki'],
    ['informatyka', 'infa', 'inf'], ['fizyka', 'fiza', 'fiz'],
  ],
  metro: [
    ['Centrum Nauki Kopernik', 'CNK', 'Metro Kopernik'],
    ['Nowy Świat-Uniwersytet', 'Nowy Świat', 'Metro Nowy Świat', 'Metro Uniwersytet'],
    ['Rondo Daszyńskiego', 'Metro Daszyńskiego'], ['Rondo ONZ', 'Metro ONZ'],
    ['Plac Wilsona', 'pl. Wilsona'], ['Ratusz Arsenał', 'Ratusz', 'Arsenał'],
    ['Dworzec Gdański', 'Dw. Gdański'], ['Dworzec Wileński', 'Dw. Wileński'],
    ['Księcia Janusza', 'Metro Janusza'], ['Targówek Mieszkaniowy', 'Metro Targówek'],
  ],
  park: [
    ['Bory Tucholskie', 'Park Narodowy Borów Tucholskich', 'PN Bory Tucholskie'],
    ['Ujście Warty', 'PN Ujście Warty'], ['Gór Stołowych', 'PN Gór Stołowych', 'PNGS'],
    ['Białowieski', 'PN Białowieski', 'Puszcza Białowieska'],
    ['Bieszczadzki', 'Park Narodowy w Bieszczadach'], ['Słowiński', 'PN Słowiński'],
  ],
  park_krajobrazowy: [
    ['Park Krajobrazowy Dolina Baryczy', 'PK Dolina Baryczy'],
    ['Park Krajobrazowy Orlich Gniazd', 'PK Orlich Gniazd'],
    ['Szczeciński Park Krajobrazowy „Puszcza Bukowa”', 'Puszcza Bukowa'],
    ['Łagowsko-Sulęciński Park Krajobrazowy', 'Łagowski Park Krajobrazowy'],
  ],
  naukowiec: group(760, ...names(`
    Maria Siemionow; Magdalena Fikus; Anna Wierzbicka; Ewa Łętowska;
    Henryk Samsonowicz; Joachim Lelewel; Marian Biskup; Tadeusz Kotarbiński;
    Jan Woleński; Aleksander Jabłoński; Wojciech Rubinowicz; Leonard Sosnowski;
    Jerzy Pniewski; Marian Danysz; Marek Demiański; Krzysztof Meissner;
    Andrzej Trautman; Michał Heller; Grzegorz Pietrzyński; Mieczysław Wolfke;
    Janusz Groszkowski; Roman Podoski; Tadeusz Tański; Adam Ostaszewski;
    Kazimierz Żegleń; Jan Wnęk; Zygmunt Puławski; Stanisław Wigura;
    Jerzy Drzewiecki; Józef Tykociński-Tykociner; Witold Zglenicki; Gabriel Narutowicz;
    Maria Czaplicka; Alicja Dorabialska; Janina Hurynowicz; Henryk Arctowski;
    Antoni Bolesław Dobrowolski; Czesław Centkiewicz; Jan Dembowski
  `)),
  ssak: [
    ...group(1100, ...names(`
    Mroczek posrebrzany; Mroczek pozłocisty; Nycerek; Nocek Bechsteina;
    Nocek orzęsiony; Nocek łydkowłosy; Nocek Brandta; Nocek Alkatoe;
    Karlik drobny; Karlik malutki; Borowiaczek; Podkowiec duży;
    Podkowiec mały; Rzęsorek mniejszy; Nornik tatrzański; Polnik bury;
    Badylarka; Smużka leśna; Mysz zielna; Suseł moręgowany
  `)),
    ['sarna', 'sarna europejska', 'kozioł sarny'], ['żubr', 'żubr europejski'],
    ['wilk', 'wilk szary'], ['dzik', 'dzik euroazjatycki'], ['łoś', 'łoś euroazjatycki'],
    ['lis', 'lis rudy', 'lis pospolity'], ['bóbr', 'bóbr europejski'],
  ],
  ptak: [
    ...group(950, ...names(`
    Syczek; Sóweczka; Puchacz; Włochatka;
    Puszczyk uralski; Puszczyk mszarny; Podróżniczek; Muchołówka mała;
    Muchołówka białoszyja; Dzierzba czarnoczelna; Srokosz; Dzięcioł trójpalczasty;
    Dzięcioł białogrzbiety; Dzięcioł białoszyi; Płochacz halny; Pomurnik;
    Drozd obrożny; Górniczek; Świergotek nadmorski; Rybitwa czubata;
    Hełmiatka; Podgorzałka; Ohar; Kazarka rdzawa;
    Bernikla obrożna; Sęp płowy; Siewka złota; Batalion;
    Płatkonóg szydłodzioby; Kamusznik; Czajka towarzyska
  `)),
    ['bocian biały', 'biały bocian'], ['sroka', 'sroka zwyczajna'], ['wrona siwa', 'siwa wrona'],
    ['wróbel', 'wróbel domowy', 'wróbel zwyczajny'],
  ],
  ryba: [
    ...group(1000, ...names(`
    Piekielnica; Piskorz; Koza złotawa; Koza dunajska;
    Kiełb białopłetwy; Kiełb Kesslera; Strzebla błotna; Strzebla potokowa;
    Głowacz pręgopłetwy; Głowacz białopłetwy; Różanka; Ciosa;
    Czebaczek amurski; Trawianka; Sumik karłowaty; Babka szczupła;
    Babka rurkonosa; Babka bycza; Kur diabeł; Tasza;
    Taśmiak długi; Wężynka; Iglicznia; Tobiasz;
    Dobijak; Ostropłetwiec; Stornia
  `)),
    ['szczupak', 'szczupak pospolity'], ['okoń', 'okoń europejski'], ['karp', 'karp zwyczajny'],
  ],
  drzewo: [
    ...group(1200, ...names(`
    Brzoza niska; Brzoza karłowata; Brzoza ojcowska; Wierzba lapońska;
    Wierzba borówkolistna; Wierzba żyłkowana; Wierzba zielna; Wierzba śląska;
    Wierzba szara; Topola szara; Irga kutnerowata; Irga czarna;
    Róża polna; Róża alpejska; Róża kutnerowata; Różanecznik żółty;
    Wawrzynek główkowy; Szczodrzeniec rozesłany; Szczodrzeniec ruski; Kłokoczka południowa;
    Wiciokrzew pomorski; Wiciokrzew czarny; Suchodrzew pospolity; Bukszpan wieczniezielony;
    Cis pośredni; Dąb burgundzki; Dąb czerwony; Robinia akacjowa;
    Grujecznik japoński; Miłorząb dwuklapowy; Korkowiec amurski; Tulipanowiec amerykański;
    Katalpa bignoniowa; Surmia okazała; Platan klonolistny
  `)),
    ['dąb', 'dąb szypułkowy'], ['sosna', 'sosna zwyczajna'], ['buk', 'buk zwyczajny'],
  ],
  rzeka: group(1050, ...names(`
    Bystra; Poroniec; Zakopianka; Cicha Woda;
    Olczyski Potok; Bystra Dusznicka; Kamienica Nawojowska; Kamienica Gorczańska;
    Ochotnica; Łososina; Tarnawka; Uszwica;
    Rzepianka; Zdynia; Jasiołka; Ropa;
    Wielopolka; Czarna Tarnowska; Koprzywianka; Kacanka;
    Kurówka; Bystrzyca Północna; Ciemięga; Samica Kierska;
    Samica Stęszewska; Wełna Mała; Gąsawka; Panna;
    Noteć Zachodnia; Skrwa Lewa; Osa; Mątawa;
    Tążyna; Struga Toruńska; Fiszewka; Bauda;
    Nogat; Dzierzgoń; Wąska; Elbląg;
    Dajna; Sajna; Guber; Gołdapa;
    Węgorapa; Sapina; Szeszupa; Bludzia;
    Czarna Hańcza; Rospuda; Netta; Lebiedzianka;
    Wissa; Pisa; Skroda; Róż;
    Szkwa; Omulew; Orzyc; Narewka;
    Supraśl; Sokołda; Ślina; Gać;
    Bronka; Toczna; Liwiec; Kostrzyń;
    Muchawka; Mienia; Mroga; Rawka;
    Zwolenka; Radomka; Drzewiczka; Czarna Konecka
  `)),
  szczyt: group(1000, ...names(`
    Zadni Granat; Pośredni Granat; Skrajny Granat; Kozie Czuby;
    Szpiglasowy Wierch; Wielka Koszysta; Mała Koszysta; Waksmundzki Wierch;
    Zadni Kościelec; Niebieska Turnia; Żółta Turnia; Grześ;
    Wierch pod Fajki; Kobylarzowa Turnia; Małołączniak; Suchy Wierch Ornaczański;
    Ciemniak; Smreczyński Wierch; Wierch Banie; Małe Skrzyczne;
    Zielony Kopiec; Malinowska Skała; Magurka Wiślańska; Magurka Radziechowska;
    Muronka; Wielki Stożek; Kiczory; Kopa Bukowska;
    Krzemień; Szeroki Wierch; Jasło; Okrąglik;
    Dziurkowiec; Płasza; Smerek; Jawornik Wielki;
    Jagodna Północna; Kłodzka Góra; Szeroka Góra; Gomólnik Mały;
    Rogowiec; Włostowa; Kostrzyna; Suchawa;
    Waligóra; Wielka Kopa
  `)),
  jezioro: group(1000, ...names(`
    Dargin; Kirsajty; Dobskie; Dejguny;
    Niegocin; Tajty; Boczne; Jagodne;
    Szymon; Kotek; Tałtowisko; Mikołajskie;
    Bełdany; Guzianka Wielka; Guzianka Mała; Nidzkie;
    Zyzdrój Wielki; Zyzdrój Mały; Mokre koło Zgonu; Uplik;
    Spychowskie; Nożyce; Krawno; Chochół;
    Łęsk; Leleskie; Kiepunek; Kalwa;
    Serwent; Gim; Pluszne; Maróz;
    Mielno koło Olsztynka; Omulew; Sasek Mały; Brajnickie;
    Warchały; Świętajno Narckie; Białe Augustowskie; Studzieniczne;
    Kalejty; Rospuda Augustowska; Tobołowo; Długie Wigierskie;
    Pierty; Gałęziste; Krzywe Wigierskie; Wigry;
    Jeziorak Mały; Gil Wielki; Silmy; Ewingi;
    Sambród; Pozorty; Sztumskie; Dzierzgoń;
    Gopło
  `)),
  pasmo: group(850, ...names(`
    Pogórze Gubałowskie; Pogórze Rożnowskie; Pogórze Ciężkowickie; Pogórze Wiśnickie;
    Pogórze Dynowskie; Pogórze Strzyżowskie; Pogórze Przemyskie; Pogórze Bukowskie;
    Wielki Dział; Działy Orawskie; Pasmo Brzanki; Pasmo Lubomira i Łysiny;
    Pasmo Jaworzyny Krynickiej; Pasmo Czantorii i Stożka; Pasmo Baraniej Góry; Pasmo Policy;
    Góry Sanocko-Turczańskie; Góry Złote; Góry Opawskie; Wzgórza Włodzickie;
    Wzgórza Lewińskie; Rudawy Janowickie; Góry Krucze; Góry Suche;
    Masyw Ślęży; Masyw Śnieżnika; Krowiarki; Pasmo Jeleniowskie;
    Pasmo Klonowskie; Pasmo Dymińskie; Pasmo Chęcińskie; Pasmo Łysogórskie
  `)),
  dzielnica: group(800, ...names(`
    Anin; Falenica; Radość; Międzylesie;
    Wawer; Wesoła; Stara Miłosna; Zielona-Grzybowa;
    Nowy Rembertów; Stary Rembertów; Kawęczyn-Wygoda; Elsnerów;
    Utrata; Szmulowizna; Nowa Praga; Stara Praga;
    Pelcowizna; Nowodwory; Winnica; Brzeziny;
    Białołęka Dworska; Żerań; Henryków; Piekiełko;
    Choszczówka; Kobiałka; Groty; Fort Bema;
    Lotnisko Bemowo; Nowe Bemowo; Wólka Węglowa; Placówka;
    Słodowiec; Ruda; Marymont-Kaskada; Marymont-Potok;
    Sady Żoliborskie; Powązki; Szczęśliwice; Rakowiec;
    Filtry; Odolany; Koło; Ulrychów;
    Czyste; Młynów; Mirów; Sielce;
    Służewiec; Czerniaków; Augustówka; Wyścigi;
    Załuski; Salomea; Raków; Opacz Wielka;
    Niedźwiadek; Czechowice; Szamoty; Gołąbki
  `)),
  zamek: group(1000, ...names(`
    Zamek Chojnik; Zamek Bolków; Zamek Świny; Zamek Sokolec;
    Zamek Wleń; Zamek Gryf; Zamek w Świeciu nad Kwisą; Zamek Cisy;
    Zamek Grodno; Zamek Sarny; Zamek Kapitanowo; Zamek Karpniki;
    Zamek w Wojnowicach; Zamek w Oleśnicy; Zamek w Oławie; Zamek w Miliczu;
    Zamek Głogowski; Pałac w Kamieńcu Ząbkowickim; Pałac w Łomnicy; Pałac w Wojanowie;
    Pałac w Bukowcu; Pałac w Krzyżowej; Pałac w Mosznej; Pałac w Krowiarkach;
    Pałac w Pławniowicach; Pałac w Nakle Śląskim; Pałac w Brynku; Pałac w Koszęcinie;
    Pałac w Świerklańcu; Pałac w Dobrzycy; Pałac w Rogalinie; Pałac w Śmiełowie;
    Pałac w Czerniejewie; Pałac w Antoninie; Pałac w Pawłowicach; Zamek w Gołuchowie;
    Zamek w Kole; Zamek w Borysławicach Zamkowych; Zamek w Przedczu; Zamek w Łęczycy;
    Zamek w Inowłodzu; Zamek w Rawie Mazowieckiej; Zamek w Oporowie; Zamek w Besiekierach;
    Zamek w Bąkowej Górze; Zamek w Szydłowie; Zamek w Chęcinach; Zamek w Bodzentynie;
    Pałac Biskupów Krakowskich w Kielcach; Pałac w Kurozwękach; Zamek w Iłży; Zamek w Czersku;
    Zamek w Liwie; Twierdza Srebrna Góra; Twierdza Kłodzko; Twierdza Przemyśl;
    Twierdza Boyen; Twierdza Wisłoujście; Cytadela Grudziądz
  `)),
};
