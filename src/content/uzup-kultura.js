// Uzupełnienia: kultura, media, jedzenie i marki. Wpisy łączone z istniejącymi po nazwie/aliasie (patrz index.js).
import { group } from './util.js';

export default {
  film: [
    ...group(120, 'Seksmisja', 'Chłopaki nie płaczą', 'Vabank', 'Rejs', 'Miś', 'Poszukiwany poszukiwana', 'Psy', 'Pan Tadeusz', 'Ogniem i mieczem', 'Quo vadis', 'Potop', 'Krzyżacy', 'Sami swoi', 'Nie ma mocnych',
      'Kochaj albo rzuć', 'Kiler', 'Kiler-ów 2-óch', 'Dzień świra', 'Listy do M.', 'Pitbull', 'Hydrozagadka', 'Kingsajz', 'Killer', 'Juliusz', 'Pianista', 'Ida', 'Zimna wojna'),
    ...group(600, 'Faraon', 'Lalka', 'Noce i dnie', 'Ziemia obiecana', 'Człowiek z marmuru', 'Człowiek z żelaza', 'Kanał', 'Popiół i diament', 'Pokolenie', 'Matka Joanna od Aniołów', 'Nóż w wodzie', 'Wesele', 'Struktura kryształu',
      'Barwy ochronne', 'Dom zły', 'Róża', 'Wołyń', 'Pod Mocnym Aniołem', 'Pokłosie', 'Boże Ciało', 'Dekalog', 'Trzy kolory: Niebieski', 'Podwójne życie Weroniki', 'Krótki film o zabijaniu', 'Przypadek', 'Amator', 'Blizna',
      'Wszystko na sprzedaż', 'Panny z Wilka', 'Brzezina', 'Szczęśliwego Nowego Jorku', 'Testosteron', 'Ciacho', 'Planeta Singli', 'Sztos', 'Dług', 'Jesteś Bogiem', 'Bogowie', 'Wałęsa. Człowiek z nadziei', 'Smoleńsk',
      'Ostatnia rodzina', 'Żeby nie było śladów', 'Cicha noc', 'Kler', 'Pitbull. Nowe porządki', 'Pitbull. Ostatni pies', 'Pitbull. Niebezpieczne kobiety', 'Dzień Świra', 'Pora umierać',
      'Kobieta samotna', 'Przesłuchanie', 'Hubal', 'Zakazane piosenki', 'Ogniomistrz Kaleń', 'Rodzina Połanieckich', 'Janosik', 'Katyń', 'Pan Wołodyjowski', 'Powstanie Warszawskie', 'Miasto 44',
      'Czas honoru', 'Bitwa warszawska 1920', '1920 Bitwa Warszawska', 'Zielona granica', 'Wesele 2', 'Sala samobójców', 'Hardkor Disco', 'Obywatel', 'Ewa chce spać', 'Chłopaki nie płaczą 2', 'Pamiętnik z powstania warszawskiego', 'Rezerwat', 'Kogel-mogel', 'Galimatias, czyli Kogel-mogel II',),
  ],
  serial: [
    ...group(120, 'Czterej pancerni i pies', 'Stawka większa niż życie', 'Alternatywy 4', '07 zgłoś się', 'Janosik', 'Dom', 'Wojna domowa', 'Czterdziestolatek', 'Klan', 'M jak miłość', 'Na Wspólnej', 'Plebania',
      'Barwy szczęścia', 'Złotopolscy', 'Samo życie', 'Pierwsza miłość', 'Ranczo', 'Świat według Kiepskich', 'Kiepscy', 'Szpital', 'Na dobre i na złe', 'Rodzinka.pl', 'Ojciec Mateusz', 'Komisarz Alex', 'Miodowe lata'),
    ...group(700, 'Spadkobiercy', 'Pensjonat pod różą', 'Lekarze', 'Dom nad rozlewiskiem', 'Londyńczycy', 'Przepis na życie', 'Detektywi', 'Policjanci', 'Ekstradycja', 'Odwróceni', 'Kryminalni', 'Determinator', 'Glina',
      'Sąsiedzi', 'Wiedźmin', '1983', 'Sexify', 'Bałagan', 'Rojst', 'Rzeczpospolita babska', 'Daleko od noszy', 'Hela w opałach', 'Ślepnąc od świateł', 'Wataha', 'Belfer', 'Stulecie Winnych', 'Bodo', 'Młody Piłsudski',
      'Pan Samochodzik', 'Zmiennicy', 'Archiwista', 'Zawodowcy', 'Ratownicy', 'Pierwsza miłość', 'Blondynka', 'Przyjaciółki', 'Prawo Agaty', 'Szpital Miłosierdzia', 'Singielka', 'BrzydUla',
      'Brzydula', 'Kasia i Tomek', 'Lombard. Życie pod zastaw', 'Gliniarze', 'Policjantki i policjanci', 'Usta usta', 'Misja Afganistan', 'Dziewczyny ze Lwowa', 'Wszyscy kochają Romana',
      'Mamuśki', 'Trzeci oficer', 'Magda M.', 'Fala zbrodni', 'Wojenne dziewczyny', 'Ucho Prezesa', 'Teściowie', 'Ojciec Mateusz', 'Kuchnia', 'Czas honoru', 'Pogoda na piątek', 'Rodzina zastępcza',),
  ],
  kabaret: [
    ['Kabaret Moralnego Niepokoju', 'Moralnego Niepokoju', 'KMN'], ['Kabaret Ani Mru-Mru', 'Ani Mru Mru', 'Ani Mru-Mru'], ['Kabaret Hrabi', 'Hrabi'], ['Kabaret Smile', 'Smile'],
    ['Kabaret Młodych Panów', 'Młodych Panów'], ['Kabaret Skeczów Męczących', 'Skeczów Męczących'], ['Kabaret Paranienormalni', 'Paranienormalni'], ['Kabaret Łowcy.B', 'Łowcy.B', 'Łowcy B'],
    ['Kabaret Neonówka', 'Neonówka', 'Neo-Nówka', 'Kabaret Neo-Nówka'], ['Kabaret Limo', 'Limo'], ['Kabaret Chyba', 'Chyba'], ['Kabaret Formacja Chatelet', 'Formacja Chatelet', 'Chatelet'], ['Kabaret Jurki', 'Jurki'],
    ['Kabaret OT.TO', 'OT.TO', 'Otto'], ['Kabaret Czesuaf', 'Czesuaf'], ['Kabaret K2', 'K2'], ['Grupa MoCarta', 'MoCarta'], ['Kabaret Pod Wyrwigroszem', 'Pod Wyrwigroszem'], ['Kabaret Elita', 'Elita'],
    ['Kabaret Potem', 'Potem'], ['Kabaret Dno', 'Dno'], ['Kabaret Koń Polski', 'Koń Polski'], ['Kabaret Starszych Panów', 'Starszych Panów'], ['Kabaret Dudek', 'Dudek'], ['Kabaret Tey', 'Tey'],
    ...group(400, 'Kabaret Mumio', 'Mumio', 'Kabaret Nowaki', 'Nowaki', 'Kabaret Szarpanina', 'Szarpanina', 'Kabaret Rak', 'Kabaret Ciach', 'Kabaret Słuchajcie', 'Kabaret Pod Egidą'),
  ],
  program: [
    ...group(150, 'Taniec z gwiazdami', 'Twoja twarz brzmi znajomo', 'X Factor', 'Must Be the Music', 'Sanatorium miłości', 'Ślub od pierwszego wejrzenia', 'Love Island', 'Azja Express', 'Agent',
      'Idol', 'Bitwa na głosy', 'Jaka to melodia?', 'Jaka to melodia', 'Wiadomości', 'Fakty', 'Teleexpress', 'Panorama', 'Kropka nad i', 'Gość Wiadomości', 'Wiem co jem', 'MasterChef Junior', 'Gogglebox', 'Mam Talent!', 'Mam talent'),
    ...group(1100, 'Studio Yayo', 'Kawa na ławę', 'Teleranek', 'Disco Polo Life', 'Polsat Superhit Festiwal', 'Sopot Festival', 'Festiwal w Opolu', 'KFPP Opole', 'Sylwester Marzeń',
      'Hell\'s Kitchen', 'Kuchenne rewolucje', 'Bake Off Polska', 'Top Chef', 'Big Brother Polska', 'Szansa na sukces', 'Jeden z dziesięciu', 'Postaw na milion', 'Wielka Gra', 'Kocham cię, Polsko!', 'Pytanie na śniadanie',),
  ],
  telewizja: [
    ...group(300, 'TVP3', 'TVP ABC', 'TVP Rozrywka', 'TVP Polonia', 'TVP World', 'Polsat Sport', 'Eleven Sports', 'Canal+ Sport', 'nSport+', 'Disney XD', 'Cartoon Network', 'Boomerang', 'Polsat Games', 'TVP 1', 'TVP 2',
      'Jedynka', 'Dwójka', 'Polsat 2', 'Puls', 'Puls 2', 'TV Puls', 'Telewizja Polska', 'Polsat News 2', 'TVN HD', 'Canal+ Premium', 'HBO 2', 'HBO 3', 'Cinemax', 'AXN', 'Eska TV', 'Fokus', 'Comedy Central', 'Discovery Channel',
      'Travel Channel', 'History', 'Viasat', 'Viasat History', 'Viasat Nature', 'Viasat Explore', 'CI Polsat', 'Crime+Investigation', 'BBC Earth', 'BBC First', 'Film Box', 'TVN Fabuła', 'TV Trwam', 'Telewizja Trwam', 'wPolsce', 'Polsat 1', 'Polsat Seriale'),
  ],
  radio: [
    ...group(300, 'Radio ESKA', 'Zet', 'RMF MAXX', 'RMF 24', 'Radio Wnet', 'Polskie Radio Program 1', 'Polskie Radio Program 2', 'Polskie Radio Program 3', 'Polskie Radio Program 4', 'Program 1', 'Program 2', 'Program 3', 'Program 4',
      'Radio Zet Gold', 'Radio Gdańsk', 'Radio Kraków', 'Radio Wrocław', 'Radio Lublin', 'Radio Olsztyn', 'Radio Szczecin', 'Radio Poznań', 'Radio Katowice', 'Radio Łódź', 'Radio Kielce', 'Radio Rzeszów', 'Radio Opole',
      'Radio Białystok', 'Radio Bydgoszcz', 'Radio Koszalin', 'Radio Gdańsk', 'Radio Lublin', 'Radio Rzeszów', 'RMF Maxxx', 'Radio Zet Chilli', 'Antyradio', 'Radio Złote Przeboje', 'Polskie Radio Dzieciom', 'Radio Dla Ciebie',),
  ],
  serwis: [
    ...group(120, 'Onet', 'WP', 'Wirtualna Polska', 'Interia', 'Gadu-Gadu', 'GG', 'Nasza Klasa', 'NK', 'Fotka.pl', 'Fotka', 'Grono.net', 'Grono', 'Allegro', 'OLX', 'Wykop', 'Demotywatory', 'Kwejk', 'Joe Monster', 'Chomikuj',
      'Filmweb', 'Pudelek', 'Plotek', 'Ceneo', 'Otodom', 'Gratka', 'Gazeta.pl', 'Money.pl', 'o2', 'Tlen.pl', 'Tlen', 'Pyszne.pl', 'Jakdojade', 'mObywatel', 'Blik', 'InPost', 'Paczkomaty', 'Allegro Lokalnie', 'Tablica.pl',
      'Sprzedajemy.pl', 'Sympatia', 'Librus', 'Zadane.pl', 'Brainly', 'Bankier.pl', 'Antyweb', 'PurePC', 'Komputronik', 'x-kom', 'Morele.net', 'Skąpiec', 'Nokaut', 'Wp.pl', 'Pekao24', 'mBank', 'PKO BP', 'iPKO', 'Elektroda', 'Elektroda.pl', 'Forum Gazeta', 'Fotka.pl', 'Plemiona', 'Tribal Wars', 'Gry Online', 'Gry-Online', 'GRYOnline.pl', 'Tvn Player', 'Player.pl', 'Polsat Box Go',
      'Ipla', 'Cda', 'CDA.pl', 'Wrzuta', 'Wrzuta.pl', 'Lubimyczytać', 'LubimyCzytac.pl', 'Biblionetka', 'Interia.pl', 'Natemat', 'Naszemiasto.pl',),
  ],
  gra: [
    ...group(300, 'Wiedźmin 1', 'Wiedźmin 2', 'Wiedźmin 2: Zabójcy królów', 'Dying Light: The Beast', 'Dead Island 2', 'Call of Juarez: Gunslinger', 'Shadow Warrior 2', 'Shadow Warrior 3', 'Sniper Ghost Warrior Contracts',
      'Sniper Ghost Warrior 2', 'Sniper Ghost Warrior 3', 'Painkiller Hell & Damnation', 'Kholat', 'Bulletstorm Full Clip', 'Cyberpunk 2077 Phantom Liberty', 'Phantom Liberty', 'Wiedźmin 3', 'Gwint', 'Thronebreaker: The Witcher Tales',
      'Layers of Fear 2', 'Observer: System Redux', 'Polanie', 'Reah', 'Mortyr 2093-1944', 'Gorky 17',),
  ],
  bajka: [
    ...group(300, ['Przygody Misia Colargola', 'Colargol'], 'Pan Kleks', 'Rodzina Treflików', ['Treflik', 'Treflikowie'], ['Bolek i Lolek', 'Bolek', 'Lolek'], ['Miś Uszatek', 'Uszatek'], ['Koziołek Matołek', 'Matołek'], ['Rumcajs',],
      ['Reksio', 'Reksio pies'], ['Dziwny świat kota Filemona', 'Filemon', 'Kot Filemon'], ['Pomysłowy Dobromir', 'Dobromir']),
  ],
  piesn: [
    ...group(250, 'Pierwsza Brygada', 'Marsz Pierwszej Brygady', 'Boże, coś Polskę', 'Z dymem pożarów', 'Dziś do ciebie przyjść nie mogę', 'Czerwony pas', 'Kukułeczka', 'Chodzi lisek koło drogi', 'Stary niedźwiedź mocno śpi',
      'Pałacyk Michla', 'Rozkwitały pąki białych róż', 'Przybyli ułani pod okienko', 'Marsz Mokotowa', 'Warszawskie dzieci', 'Czerwone jabłuszko', 'Góralu, czy ci nie żal', 'Góralu czy ci nie żal', 'Ułani, ułani', 'Jeszcze Polska nie zginęła', 'Bogurodzica', 'Gaude Mater Polonia', 'Kto się w opiekę', 'Gdy się Chrystus rodzi', 'Wśród nocnej ciszy', 'Lulajże Jezuniu', 'Bóg się rodzi', 'Cicha noc', 'Przybieżeli do Betlejem',
      'Pójdźmy wszyscy do stajenki', 'Dzisiaj w Betlejem', 'Triumfy Króla Niebieskiego', 'Ave Maryja', 'Serdeczna Matko', 'Barka',),
  ],
  danie: [
    ...group(60, 'Pierogi', 'Bigos', 'Żurek', 'Barszcz', 'Barszcz czerwony', 'Rosół', 'Kotlet schabowy', 'Schabowy', 'Gołąbki', 'Pyzy', 'Kopytka', 'Kluski śląskie', 'Placki ziemniaczane', 'Zapiekanka', 'Kiełbasa', 'Kaszanka', 'Flaki',
      'Kapusta kiszona', 'Ogórki kiszone', 'Śledź', 'Makowiec', 'Sernik', 'Szarlotka', 'Drożdżówka', 'Pączek', 'Faworki', 'Chrusty', 'Mazurek', 'Babka', 'Piernik', 'Sękacz', 'Kremówka', 'Napoleonka', 'Karpatka'),
    ...group(350, 'Pierogi ruskie', 'Gulasz', 'Kaszotto', 'Bryndza', 'Oscypek', 'Kajzerka', 'Obwarzanek', 'Chleb', 'Pierniki toruńskie', 'Zupa ogórkowa', 'Ogórkowa', 'Zupa pomidorowa', 'Pomidorowa', 'Krupnik', 'Kapuśniak',
      'Fasolka po bretońsku', 'Schab po szwajcarsku', 'Zrazy', 'Kotlet mielony', 'Mielony', 'Karp', 'Ryba po grecku', 'Żeberka', 'Golonka', 'Kaczka z jabłkami', 'Nalewka', 'Kompot', 'Kisiel', 'Kwas chlebowy', 'Kefir', 'Zsiadłe mleko',
      'Twaróg', 'Kabanosy', 'Szynka', 'Kiełbasa krakowska', 'Kiszka', 'Salceson', 'Pasztet', 'Smalec', 'Smalec ze skwarkami', 'Chleb ze smalcem', 'Ciasto drożdżowe', 'Racuchy', 'Naleśniki', 'Kluski leniwe', 'Lane kluski', 'Pampuchy',
      'Knedle', 'Knedle ze śliwkami', 'Pierogi z jagodami', 'Pierogi z kapustą i grzybami', 'Uszka', 'Kutia', 'Makowiec', 'Piernik staropolski', 'Sernik krakowski', 'Wuzetka', 'Tort wuzetka', 'Szarlotka z kruszonką', 'Jabłecznik',
      'Zupa grzybowa', 'Zupa szczawiowa', 'Szczawiowa', 'Chłodnik', 'Botwinka', 'Zupa jarzynowa', 'Grochówka', 'Zupa gulaszowa', 'Zupa cebulowa', 'Zupa kapuściana', 'Żurek w chlebie', 'Żurek z jajkiem', 'Kartacze', 'Cepeliny',
      'Babka ziemniaczana', 'Kugiel', 'Kiszka ziemniaczana', 'Pieczeń', 'Rolada', 'Rolada śląska', 'Modra kapusta', 'Rolada wołowa', 'Rolada ze schabu', 'Karkówka', 'Kaszanka z cebulką',
      'Pieczeń rzymska', 'Śledzie w śmietanie', 'Śledź w oleju', 'Śledź po kaszubsku', 'Karp smażony', 'Karp w galarecie', 'Galareta', 'Nóżki w galarecie', 'Zimne nóżki', 'Sałatka jarzynowa', 'Sałatka śledziowa'),
  ],
  napoj: [
    ...group(150, 'Hoop Cola', 'Zbyszko', 'Specjal', 'Fortuna', 'Dębowe Mocne', 'Piast', 'Ciechan', 'Bosman', 'Gwarek', 'Brok', 'Namysłów', 'Kormoran', 'Lech Free', 'Mazurskie', 'Karpackie', 'Żubrówka', 'Wyborowa', 'Absolwent',
      'Soplica', 'Żołądkowa Gorzka', 'Żołądkowa', 'Luksusowa', 'Chopin', 'Belvedere', 'Sobieski', 'Krupnik', 'Bols', 'Żytnia', 'Baczewski', 'Starogardzka', 'Pan Tadeusz', 'Śliwowica Łącka', 'Mazowszanka'),
  ],
  slodycze: [
    ...group(250, 'Krakuski', 'Familijne', 'Hellena', 'Delicje', 'Lubisie', 'Zozole', 'Toruńskie pierniki', 'Wuzetka', 'Lizaki', 'Fasolki', 'Grześki', 'Jeżyki', 'Kukułka', 'Michałki',
      'Ptasie mleczko', 'Wawel', 'Prince Polo', 'Mieszko', 'Kasztanki', 'Danusia', 'Jutrzenka', 'Goplana', 'Krówka', 'Krówki ciągutki', 'Ciągutki', 'Cukierki Gruszki', 'Gruszki', 'Cukierki Krówki',
      'Torcik', 'Torcik Wedlowski', 'Tiki Taki', 'Familijne', 'Mieszanka Krakowska', 'Mieszanka Wedlowska', 'Chałwa', 'Kukuruźniki', 'Rurki', 'Rurki z kremem', 'Ptysie', 'Eklerki', 'Wafelek', 'Wafelek Grześki'),
  ],
  odziez: [
    ...group(250, 'Kazar', 'Wojas', 'Ryłko', 'Deezee', 'Eva Minge', 'Maciej Zień', 'Paprocki & Brzozowski', '4F', 'Outhorn', 'Lasocki', 'Jenny Fairy', 'Cottonfield', 'Solar', 'Mohito', 'Reserved', 'Sinsay', 'Cropp', 'House', 'Vistula',
      'Wólczanka', 'Bytom', 'Big Star', 'Diverse', 'Gino Rossi', 'Wittchen', 'Ochnik', 'CCC', 'eobuwie', 'Eobuwie', 'Pako Lorente', 'Simple', 'Quiosque', 'Top Secret', 'Tatuum', 'Monnari', 'Gatta', 'Medicine', 'Lancerto',
      'Armatura Kraków', 'Lidia Kalita', 'Mariusz Przybylski', 'La Mania', 'Ptak Moda', 'Pepco', 'Smyk', 'Ubra', 'Bialcon', 'Greenpoint', 'Greenpoint',),
  ],
  sklep: [
    ...group(200, 'Pepco', 'Action', 'Jysk', 'Ikea', 'Smyk', 'Deichmann', 'Decathlon', 'Dealz', 'Tedi', 'Kik', 'Pewex', 'Peweks', 'Billa', 'Jumbo', 'Merkury Market', 'Bricomarche', 'Mrówka', 'Black Red White', 'Agata Meble', 'Agata',
      'Neonet', 'x-kom', 'Morele', 'Super-Pharm', 'Chata Polska', 'Topaz', 'Gama', 'Carrefour Express', 'Carrefour Market', 'Lewiatan', 'Stokrotka', 'Intermarche', 'Piotr i Paweł', 'Ikea', 'Obi', 'Tesco', 'Real', 'Hebe', 'Rossmann',
      'Delikatesy Centrum', 'Dino', 'Żabka', 'Biedronka', 'Lidl', 'Netto', 'Kaufland', 'Aldi', 'Auchan', 'Carrefour', 'Makro', 'Selgros', 'Empik', 'Media Markt', 'Saturn', 'Media Expert', 'RTV Euro AGD', 'Euro AGD', 'Komputronik',
      'Castorama', 'Leroy Merlin', 'Bricoman', 'Praktiker', 'PSB Mrówka', 'Pewex', 'Społem', 'PSS Społem', 'Ruch',),
  ],
  slang: [
    ...group(120, 'sztos', 'essa', 'kozak', 'siema', 'elo', 'spoko', 'luzik', 'zajawka', 'cringe', 'krindż', 'ziomek', 'ziom', 'ogarnąć', 'jarać się', 'jarzyć', 'beka', 'lol', 'xd', 'dzban', 'kumpel', 'ziomal', 'ziomeczek', 'luz',
      'wyluzuj', 'czaić', 'czaisz', 'nara', 'narka', 'pozdro', 'chillować', 'chill', 'boomer', 'zoomer', 'sus', 'slay', 'wypas', 'git', 'gites', 'kumaty', 'kumam', 'czad', 'czadowy', 'odjazd', 'odlot',
      'dres', 'karyna', 'brajan', 'dżesika', 'janusz', 'sebix', 'cebula', 'cebulak', 'o co kaman', 'hejka', 'xd',),
  ],
};
