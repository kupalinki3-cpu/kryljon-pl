// Ministerstwo Cyfryzacji, rejestr PESEL osób żyjących, stan na 20.01.2026, CC0 1.0.
// https://dane.gov.pl/pl/dataset/1681 (zasoby 1148808 i 1148811)
// Suma obu wykazów, od 100 wystąpień. Kutasko jest osobno potwierdzonym wyjątkiem.
// Głębokości bazowe grupujemy według liczby wystąpień w wykazach.

const groups = [
  [140, `
    Adamczyk Adamska Adamski Andrzejewska Andrzejewski Antczak Augustyniak Banach Banasiak Banaś Baran
    Baranowska Baranowski Bartczak Bartkowiak Bednarczyk Bednarek Bednarz Białek Bieniek Biernat Bogusz
    Borek Borkowska Borkowski Borowska Borowski Brzezińska Brzeziński Brzozowska Brzozowski Buczek Bąk
    Błaszczyk Chmiel Chmielewska Chmielewski Chojnacka Chojnacki Cichoń Ciesielska Ciesielski Cieśla Cieślak
    Cieślik Czaja Czajka Czajkowska Czarnecka Czarnecki Czech Czerwińska Czerwiński Czyż Dobosz Domagała
    Domańska Domański Drozd Duda Dudek Dziedzic Dąbrowska Dąbrowski Długosz Filipiak Frączek Gajda Gajewska
    Gajewski Gawlik Gawron Gil Grabowska Grabowski Graczyk Gruszka Grzegorczyk Grzelak Grzyb Góra Górecka
    Górecki Górka Górska Górski Gąsior Głowacka Głowacki Hajduk Jabłońska Jabłoński Jakubowska Jakubowski
    Janiak Janik Jankowska Jankowski Janus Jarosz Jasińska Jasiński Jastrzębska Jastrzębski Jaworska
    Jaworski Jurek Jóźwiak Kacprzak Kaczmarczyk Kaczmarek Kaczor Kaleta Kalinowska Kalinowski Kamińska
    Kamiński Kania Karpińska Karpiński Kasprzak Kasprzyk Kaźmierczak Kisiel Klimczak Klimek Konieczna
    Konieczny Konopka Kopeć Kostrzewa Kot Kowal Kowalczyk Kowalewska Kowalewski Kowalik Kowalska Kowalski
    Kozak Kozieł Kozioł Kozłowska Kozłowski Kołodziej Kołodziejczyk Krajewska Krajewski Krawczyk Krawiec
    Kruk Krupa Król Książek Kubiak Kubik Kucharczyk Kucharska Kucharski Kujawa Kula Kulesza Kulik Kurek Kuś
    Kwiatkowska Kwiatkowski Kwiecień Kłos Lach Laskowska Laskowski Lech Leszczyńska Leszczyński Lewandowska
    Lewandowski Leśniak Lipińska Lipiński Lis Maciejewska Maciejewski Madej Maj Majchrzak Majewska Majewski
    Makowska Makowski Malec Malinowska Malinowski Marciniak Marczak Marek Markiewicz Markowska Markowski
    Marszałek Marzec Matusiak Matysiak Mazur Mazurek Mazurkiewicz Maćkowiak Małek Melnyk Michalak Michalik
    Michalska Michalski Mielczarek Mika Mikołajczak Mikołajczyk Mróz Mucha Musiał Młynarczyk Niemiec Nowacka
    Nowacki Nowak Nowakowska Nowakowski Nowicka Nowicki Olejniczak Olejnik Olszewska Olszewski Orłowska
    Orłowski Ostrowska Ostrowski Owczarek Pająk Paluch Panek Pawlak Pawlik Pawłowska Pawłowski Pałka
    Pietrzak Pietrzyk Piotrowska Piotrowski Piątek Pluta Polak Przybylska Przybylski Przybysz Przybyła Ptak
    Rak Ratajczak Rogala Rojek Rutkowska Rutkowski Rybak Rzepka Sadowska Sadowski Sawicka Sawicki Serafin
    Sienkiewicz Sikora Sikorska Sikorski Siwek Skiba Skowron Skrzypczak Sobczak Sobczyk Socha Sokołowska
    Sokołowski Sowa Sroka Stachowiak Stankiewicz Stasiak Stańczyk Stec Stefaniak Stępień Szczepaniak
    Szczepanik Szczepańska Szczepański Szczygieł Szewczyk Szostak Szulc Szymańska Szymański Szymczak
    Szymczyk Słowik Tkaczyk Tomaszewska Tomaszewski Tomczak Tomczyk Turek Urban Urbaniak Urbańska Urbański
    Walczak Wasilewska Wasilewski Wawrzyniak Wesołowska Wesołowski Wieczorek Wilk Witczak Witek Witkowska
    Witkowski Wiśniewska Wiśniewski Wojciechowska Wojciechowski Wolska Wolski Woźniak Wrona Wróbel
    Wróblewska Wróblewski Wysocka Wysocki Wójcik Wójtowicz Wąsik Węgrzyn Włodarczyk Zając Zakrzewska
    Zakrzewski Zalewska Zalewski Zaremba Zaręba Zawada Zawadzka Zawadzki Zielińska Zieliński Ziółkowska
    Ziółkowski Zięba Zych Łuczak Łukasik Śliwa Ślusarczyk Świątek Żak Żurek
  `],
  [280, `
    Abramczyk Abramowicz Adamczak Adamczewska Adamczewski Adamczuk Adamek Adamiak Adamiec Adamkiewicz
    Adamowicz Adamus Aleksandrowicz Ambroziak Andruszkiewicz Andrzejak Andrzejczak Anioł Antkowiak Antoniak
    Antoniuk Antosik Augustyn Augustynowicz Babiarz Babicz Bach Badura Bagińska Bagiński Baj Bajer Bajor
    Bajorek Balcer Balcerzak Balicka Balicki Banasik Banaszak Banaszek Banaszkiewicz Bar Barańska Barański
    Barczak Barczyk Barnaś Baron Barszcz Bartkiewicz Bartnicka Bartnik Bartos Bartosiak Bartosiewicz
    Bartosik Bartosz Bartoszek Bartoszewicz Bartyzel Baryła Batko Bator Bazan Bała Bałdyga Bańka Bednarska
    Bednarski Bernat Białas Białecka Białecki Białkowska Białkowski Białowąs Biały Biel Biela Bielak
    Bielawska Bielawski Bielecka Bielecki Bielińska Bieliński Bielska Bielski Bienias Biernacka Biernacki
    Bień Bieńkowska Bieńkowski Bigos Bil Bilińska Biliński Bilous Bilska Bilski Biskup Bizoń Blicharz Bloch
    Bober Bobrowska Bobrowski Bochenek Bocian Boczek Bodnar Bogacz Bogdan Bogdanowicz Bogdańska Bogdański
    Bogucka Bogucki Boichuk Boiko Bojarska Bojarski Bolek Bomba Bondar Bondarenko Bonk Borowiak Borowicz
    Borowiec Borowik Boroń Boruta Borys Bożek Broda Brodowska Brodowski Brożek Brożyna Bryk Bryl Bryła Bryś
    Brzeska Brzeski Brzostek Brzoza Brzóska Brzózka Buczak Buczkowska Buczkowski Buczyńska Buczyński Buda
    Budnik Budny Budzińska Budziński Budzyńska Budzyński Bugaj Bugajska Bugajski Bujak Bukowska Bukowski
    Burak Burda Burek Bury Burzyńska Burzyński Butkiewicz Bączek Bąkowska Bąkowski Bęben Bębenek Błasiak
    Błaszczak Błaszkiewicz Błażejczyk Błażejewska Błoch Błońska Błoński Cabaj Caban Całka Cebula Chmielowiec
    Chmura Chojnowska Chojnowski Cholewa Chowaniec Chrobak Chruściel Chrzan Chrzanowska Chrzanowski
    Chrząszcz Chudy Chudzik Chyła Cicha Cichocka Cichocki Cichosz Cichy Cieślar Ciosek Ciołek Cisek Ciszek
    Ciszewska Ciszewski Cybula Cybulska Cybulski Cygan Cyran Czajkowski Czapla Czarnik Czarnota Czarny
    Czechowicz Czechowska Czechowski Czekaj Czekała Czerniak Czernik Czerwonka Czop Czuba Czubak Czyżewska
    Czyżewski Daniel Danielewicz Daniluk Danyliuk Dawid Dawidowicz Dec Deja Depta Deptuła Dereń Diachenko
    Dobek Dobrowolska Dobrowolski Dobrzyńska Dobrzyński Dolata Dolińska Domin Dominiak Dominik Dopierała
    Dorosz Drab Drabik Dragan Drewniak Drozdowska Drozdowski Drożdż Drzazga Drzewiecka Drzewiecki Dróżdż
    Drąg Drążek Dubiel Dudka Dudkiewicz Dudziak Dudzik Dudzińska Dudziński Dul Duraj Dusza Duszyńska
    Duszyński Dutka Dutkiewicz Dworak Dymek Dyrda Dziadosz Dzik Dzikowska Dzikowski Dziuba Dziubek Dziura
    Dzięcioł Dąbek Dąbkowska Dąbkowski Dębek Dębowska Dębowski Dębska Dębski Fabisiak Falkowska Falkowski
    Fedorowicz Ferenc Fic Ficek Fiedorowicz Figiel Figura Fijałkowska Fijałkowski Fijołek Fila Filip
    Filipczak Filipek Filipowicz Firlej Fiszer Flak Flis Florczak Florczyk Florek Formela Fornal Fortuna
    Foryś Franczak Franczyk Frankiewicz Frankowska Frankowski Fryc Frydrych Frąckiewicz Frąckowiak Frątczak
    Furman Furtak Fąfara Gabor Gabryś Gaca Gacek Gadomska Gadomski Gaik Gaj Gajek Gajos Gala Galant Galas
    Galus Gancarz Garbacz Gaweł Gawin Gawrońska Gawroński Gawryś Gawęda Gazda Gałek Gałka Gałuszka Gałązka
    Gibas Giemza Gierczak Ginter Giza Glinka Gniadek Godek Godlewska Godlewski Gola Golec Golik Golińska
    Goliński Golonka Gondek Gontarz Gorczyca Gołda Gołdyn Gołąb Gołąbek Gołębiewska Gołębiewski Gołębiowska
    Gołębiowski Gościniak Goździk Grabarczyk Grabiec Grabska Grad Grala Gralak Gregorczyk Grela Grobelny
    Grochowska Grochowski Grodzka Grodzki Gromek Gruba Gruca Grudzień Grudzińska Grudziński Gruszczyńska
    Gruszczyński Grygiel Grzanka Grzegorek Grzesiak Grzesik Grzeszczak Grześkowiak Grzybek Grzybowska
    Grzybowski Grzywacz Grzęda Gucwa Gut Gutowska Gutowski Guz Guzek Guzik Guzy Gwiazda Gwizdała Gwóźdź
    Góral Góralczyk Górna Górniak Górnik Górny Góźdź Gądek Gąsiorek Gąsiorowska Gąsiorowski Gąska Gębala
    Gębka Gładysz Głodek Głogowska Głogowski Głowacz Głuch Głuszek Głód Głąb Havryliuk Hawryluk Hałas Hebda
    Herman Hinc Hoffmann Hofman Huk Humeniuk Idziak Ignaczak Ignasiak Iskra Ivanov Ivanova Iwan Iwaniuk
    Iwańska Iwański Izdebska Izdebski Jach Jackiewicz Jackowska Jackowski Jagielska Jagielski Jagieła
    Jagiełło Jagodzińska Jagodziński Jagła Jakubczak Jakubczyk Jakubek Jakubiak Jakubiec Jakubik Jamrozik
    Jamróz Janas Janczak Janeczek Janeczko Janicka Janicki Janiec Janiszewska Janiszewski Jankiewicz
    Jankowiak Janota Janowicz Janowska Janowski Janusz Januszewska Januszewski Januszkiewicz Jarek Jaros
    Jaroszek Jaroszewicz Jaroszewska Jaroszewski Jarzyna Jarząb Jarząbek Jasek Jasiak Jasik Jaskulska
    Jaskulski Jaskuła Jaszczuk Jaworek Jańczak Jaśkiewicz Jedynak Jeleń Jelonek Jezierska Jezierski
    Jeziorska Jeziorski Jeż Jopek Jończyk Jura Juraszek Jurczak Jurczyk Jurewicz Jurga Jurkiewicz Jurkowska
    Jurkowski Juszczak Juszczyk Juszkiewicz Józefiak Józefowicz Jóźwik Jędrzejak Jędrzejczak Jędrzejczyk
    Jędrzejewska Jędrzejewski Kabat Kacprzyk Kaczmarska Kaczmarski Kaczmarzyk Kaczorowska Kaczorowski
    Kaczyńska Kaczyński Kaim Kalata Kalbarczyk Kalemba Kalisz Kalita Kalińska Kaliński Kaniewska Kaniewski
    Kantor Kapała Kapica Kapusta Kapuścińska Kapuściński Kapłon Karasiewicz Karaś Karbowiak Karbownik Karcz
    Karczewska Karczewski Karczmarczyk Karolak Karp Karpenko Karpowicz Karwat Karwowska Karwowski Kasperczyk
    Kasperek Kasprowicz Kasza Kaszuba Kawa Kawalec Kawecka Kawecki Kawka Kazimierczak Kałuża Kałużna Kałużny
    Kaźmierska Kaźmierski Kempa Kharchenko Kielar Kiełbasa Kilian Kim Kiszka Kita Klein Kleszcz Klich Klimas
    Klimczyk Klimkiewicz Klimowicz Kliś Kloc Klocek Kluska Klymenko Kmieciak Kmiecik Kmieć Kmita Knap Knapik
    Knop Kobiałka Kobiela Kobus Koc Koch Kochan Kochanowska Kochańska Kochański Kocik Kociołek Kocot Kocoń
    Kocur Kogut Kohut Kokoszka Kokot Kolasa Kolasińska Kolasiński Komar Komorowska Komorowski Konarska
    Konarski Kondratiuk Konieczka Konik Konior Konkol Kopacz Kopczyńska Kopczyński Koper Kopiec Kopka
    Koprowska Koprowski Korcz Korczak Korol Korzeniewska Korzeniewski Korzeniowska Korzeniowski Kos Kosek
    Kosior Kosiorek Kosińska Kosiński Kosmala Kosowska Kosowski Kostecka Kostecki Kostiuk Kostka Kotas
    Kotowicz Kotowska Kotowski Kotula Kotwica Koval Kovalchuk Kovalenko Kowalczuk Koza Kozakiewicz Kozera
    Kozik Kozub Kozyra Kołacz Kołakowska Kołakowski Kołek Kołodziejczak Kołodziejska Kołodziejski Kołtun
    Kościelniak Kośmider Kożuch Krakowiak Krakowska Krakowski Kraska Krasowska Krasowski Krasoń Kraszewska
    Kraszewski Kraus Krause Krauze Kravchenko Kravchuk Kravets Krawczak Kreft Kret Krok Kruczek Krukowska
    Krukowski Krupińska Krupiński Kruszewska Kruszewski Kruszyńska Kruszyński Kryczka Krygier Krysiak
    Krysztofiak Krzak Krzemień Krzemińska Krzemiński Krzysztofik Krzywda Krzyżak Krzyżaniak Krzyżanowska
    Krzyżanowski Królak Królik Królikowska Królikowski Kubacka Kubacki Kubala Kubas Kubica Kubicka Kubicki
    Kuc Kuchta Kucińska Kuciński Kuczera Kuczyńska Kuczyński Kudła Kufel Kujawska Kujawski Kukiełka Kukla
    Kukuła Kulak Kulas Kulig Kulikowska Kulińska Kuliński Kulka Kulpa Kulyk Kumor Kuna Kupczak Kupczyk
    Kupiec Kupis Kur Kurdziel Kuriata Kurowska Kurowski Kurzawa Kurzeja Kushnir Kusiak Kustra Kusz Kuta
    Kuzmenko Kułaga Kułak Kuśmierczyk Kuśmierz Kuśnierz Kuźma Kuźniar Kuźnik Kwapisz Kwaśniak Kwaśniewska
    Kwaśniewski Kwaśnik Kwaśny Kwiatek Kwiecińska Kwieciński Kądziela Kądziołka Kąkol Kędra Kędzia
    Kędzierska Kędzierski Kędzior Kędziora Kępa Kępka Kęska Kłak Kłosowska Kłosowski Kłys Labuda Lachowicz
    Lange Langer Langner Lasek Laska Lasota Latos Lazar Lechowicz Lee Lehmann Leja Lenart Lenartowicz Lesiak
    Levchenko Lewczuk Lewicka Lewicki Lewińska Lewiński Lewkowicz Leśniewska Leśniewski Libera Ligęza Lipa
    Lipiec Lipka Lipska Lipski Lisek Lisiak Lisiecka Lisiecki Lisowska Lisowski Liszka Litwin Lizak Lorek
    Lorenc Ludwiczak Lupa Lysenko Lytvynenko Mach Machaj Machnik Machura Maciak Maciaszek Maciejczyk Maciąg
    Mackiewicz Madeja Magdziarz Magiera Majcher Majda Majer Majka Majkowska Majkowski Makarewicz Maksymiuk
    Makuch Malczyk Malicka Malicki Malik Maliszewska Maliszewski Mania Marchenko Marchewka Marchuk Marcinek
    Marcinkiewicz Marcinkowska Marcinkowski Marczuk Marczyk Markowicz Marszał Martyniuk Mastalerz Masłowska
    Masłowski Matczak Mateja Matusik Matuszak Matuszczak Matuszczyk Matuszek Matuszewska Matuszewski Matuła
    Matyja Matys Matysek Maziarz Małecka Małecki Małkiewicz Małkowska Małkowski Mańka Mańkowska Mańkowski
    Maślak Maślanka Meller Melnychuk Miazga Michalczyk Michalec Michałek Michałowska Michałowski Michna
    Michniewicz Michta Mickiewicz Mieczkowska Mieczkowski Mielcarek Mielewczyk Mielniczuk Mielnik Miernik
    Mierzejewska Mierzejewski Mierzwa Migas Migdał Mikrut Mikulska Mikulski Mikuła Milczarek Miler Milewska
    Milewski Miller Miotk Mirek Misiak Misiewicz Miszczak Miszczuk Misztal Mitura Mizera Miłek Miłosz Miś
    Miśkiewicz Mleczko Mnich Modrzejewska Modzelewska Modzelewski Molenda Momot Morawiec Morawska Morawski
    Moroz Moskal Moskwa Motyka Motyl Możdżeń Mroczek Mroczkowska Mroczkowski Mrowiec Mrozek Mrozik Mruk
    Mrówka Mularczyk Murawska Murawski Murzyn Musielak Musioł Muszyńska Muszyński Muzyka Myszka Myśliwiec
    Müller Mączka Mądry Mąka Nadolny Nalepa Napierała Napora Narloch Nawrocka Nawrocki Nawrot Neumann Nguyen
    Nguyễn Niedbała Niedziela Niedzielska Niedzielski Niedźwiecka Niedźwiecki Niedźwiedź Niemczyk
    Niewiadomska Niewiadomski Niezgoda Nikiel Niziołek Nocoń Noga Nogaj Nosal Nosek Nowaczyk Nowik Nowińska
    Nowiński Nowosad Nycz Nykiel Nędza Obara Ochman Ogrodnik Ogórek Okoń Olczak Olczyk Olech Olejarz Olek
    Oleksiak Oleksy Olender Oleszczuk Oleś Oliinyk Olszak Opałka Orlik Orzechowska Orzechowski Orzeł Osiak
    Osińska Osiński Osowska Osowski Ossowska Ossowski Osuch Ozga Ozimek Ożóg Pabian Pacek Pach Paciorek
    Pacyna Paczkowska Paczkowski Paduch Pajor Pakuła Palacz Paliwoda Palka Paluszkiewicz Panasiuk Panchenko
    Pankiewicz Paprocka Paprocki Paradowska Parol Partyka Parzych Pasek Pasieka Pasternak Pastuszak
    Pastuszka Paszek Paszkiewicz Paszko Paszkowska Paszkowski Pater Patyk Pavlenko Pavliuk Pawelczyk Pawelec
    Pawełczyk Pawełek Pawlaczyk Pawlicka Pawlicki Pawlikowska Pawlikowski Pawluk Pawlus Pawłowicz Pałasz
    Pałys Pelc Pelczar Perkowska Perkowski Perz Petrenko Pełka Piasecka Piasecki Piech Piecha Piechocka
    Piechocki Piechota Piechowiak Piecuch Piekarczyk Piekarska Piekarski Piekarz Piekut Piela Pieniążek
    Pierzchała Pietkiewicz Pietras Pietrasik Pietraszek Pietrucha Pietruszka Pikuła Pilarczyk Pilarska
    Pilarski Pilch Piotrowicz Piróg Pisarek Piskorz Piszczek Piwko Piwowar Piwowarczyk Piwowarska Piwowarski
    Piórkowska Piórkowski Pióro Piątkowska Piątkowski Pięta Piętka Piłat Plata Plewa Plichta Pliszka
    Podgórska Podgórski Podolak Podsiadło Pogoda Pogorzelska Pogorzelski Pokora Polańska Polański Polishchuk
    Poloczek Polok Ponomarenko Popek Popiel Popiołek Popławska Popławski Porada Poręba Porębska Porębski
    Potocka Potocki Potrykus Połeć Pośpiech Poźniak Prokop Prokopiuk Prokopowicz Prus Prusak Przybylak
    Przybył Przybyłek Przybyło Przygoda Przytuła Przywara Ptaszek Puchalska Puchalski Puchała Pudełko Pudło
    Pustelnik Puzio Pyka Pytel Pytlik Półtorak Pękala Płachta Płaczek Płatek Płaza Płonka Płotka Płuciennik
    Płóciennik Rachwał Raczkowska Raczkowski Raczyńska Raczyński Radecka Radecki Radomska Radomski Radoń
    Radzik Radziszewska Radziszewski Rakoczy Rakowska Rakowski Rapacz Rataj Ratajczyk Rek Reszka Richter
    Robak Rodak Rodziewicz Rogalska Rogalski Rogowska Rogowski Rogozińska Rogoziński Rokicka Rokicki Rokita
    Rokosz Rola Roman Romaniuk Romanowicz Romanowska Romanowski Romańczuk Romańska Romański Rosa Rosiak
    Rosińska Rosiński Roszak Roszkowska Roszkowski Rozmus Rożek Rucińska Ruciński Rudenko Rudnicka Rudnicki
    Rudnik Rudzińska Rudziński Rudzka Rudzki Rusak Rusek Rusin Rusinek Ruta Rutka Ryba Rybarczyk Rybicka
    Rybicki Rybka Rychlik Rychter Rydz Rynkiewicz Ryszka Ryś Rzepa Rzepecka Rzepecki Rzeszutek Rzeźnik Róg
    Różańska Różański Różycka Różycki Rączka Rębisz Sabat Sadło Sagan Sajdak Sak Sakowicz Sala Salamon
    Samsel Sarna Sas Sasin Savchenko Savchuk Sawa Sawczuk Sałata Sałek Schmidt Schneider Schulz Sekuła
    Semeniuk Seweryn Shevchenko Shevchuk Shvets Sidor Siedlecka Siedlecki Siek Sieradzka Sieradzki Sieńko
    Singh Sitarz Sitek Sitko Siuda Siwak Siwiec Siwik Skalska Skalski Skibińska Skibiński Skoczek Skoczeń
    Skoczylas Skonieczna Skonieczny Skorupa Skowronek Skowrońska Skowroński Skrzyniarz Skrzypczyk Skrzypek
    Skrzypiec Skupień Skuza Skwara Skwarek Skóra Skórka Smaga Smolak Smolarek Smoleń Smolińska Smoliński
    Smyk Sobala Sobańska Sobański Sobiech Sobieraj Sobkowiak Sobol Sobolewska Sobolewski Sobota Soboń
    Sochacka Sochacki Soja Sojka Sokół Solarz Solecka Solecki Soroka Sosna Sosnowska Sosnowski Sowińska
    Sowiński Sołtys Sołtysiak Sołtysik Spychała Spyra Stach Stachowicz Stachowska Stachowski Stachura
    Stachurska Stachurski Stachyra Stadnik Stanek Stanik Staniszewska Staniszewski Stanisławska Stanisławski
    Starosta Staroń Starzec Starzyk Stasik Stasiuk Staszak Staszewska Staszewski Stawarz Stawicka Stawicki
    Stańczak Staśkiewicz Stefaniuk Stefanowicz Stefańczyk Stefańska Stefański Stelmach Stencel Stepaniuk
    Stokłosa Stolarczyk Stolarek Stolarska Stolarski Stopa Struzik Strzałka Strzelczyk Strzelec Strzelecka
    Strzelecki Stróżyk Studzińska Studziński Styś Stępniak Stępniewska Suchecka Suchecki Suder Sudoł
    Sukiennik Sulej Sulima Surma Surmacz Surowiec Suska Suski Suszek Suwała Sułek Sułkowska Sułkowski
    Swoboda Sydorenko Synowiec Szafran Szafraniec Szafrańska Szafrański Szarek Szatkowska Szatkowski
    Szczepanek Szczerba Szcześniak Szczotka Szczurek Szczygielska Szczygielski Szczęch Szczęsna Szczęsny
    Szczęśniak Szeliga Szeląg Szerszeń Szewc Szewczak Szewczuk Szkudlarek Szlachta Szmidt Szmigiel Szmit
    Szmyt Sznajder Szopa Szostek Szot Szpak Szreder Szuba Szubert Szwarc Szwed Szweda Szydło Szydłowska
    Szydłowski Szymanek Szymaniak Szymanowska Szymanowski Szymkiewicz Szymkowiak Szymoniak Szymura Szyszka
    Szyszko Sójka Sęk Słaby Sławińska Sławiński Słoma Słomka Słota Słowińska Słowiński Tabaka Tabor Talaga
    Tarasiuk Targosz Tarka Tarnowska Tarnowski Tkach Tkachenko Tkachuk Tkacz Tobiasz Toczek Tokarczyk
    Tokarska Tokarski Tokarz Tomala Tomasik Tomaszek Tracz Traczyk Trela Trojan Trojanowska Trojanowski
    Trzaska Trzcińska Trzciński Trzeciak Turowska Turowski Twardowska Twardowski Tworek Tyszka Tyszkiewicz
    Tęcza Urbanek Urbanik Urbanowicz Urbańczyk Vasylenko Voloshyn Vovk Wach Wachowiak Wachowicz Wagner Wajda
    Wala Walas Walasek Walaszczyk Walaszek Walczuk Walczyk Waligóra Walkiewicz Walkowiak Walter Wanat
    Warchoł Warda Warzecha Wasiak Wasielewska Wasielewski Wasik Wasiluk Waszak Waszczuk Waszkiewicz Wawer
    Wcisło Wdowiak Weber Wegner Weiss Wencel Wenta Werner Wiatr Wicher Widera Wielgosz Wielgus Wierzba
    Wierzbicka Wierzbicki Wiewióra Wiktor Wiktorowicz Wilczak Wilczek Wilczyńska Wilczyński Winiarczyk
    Winiarska Winiarski Winkler Winnicka Wiącek Więcek Więckowska Więckowski Więcław Wiśniowska Wiśniowski
    Wlazło Wnuk Wnęk Woch Wojcieszak Wojda Wojdyła Wojewoda Wojnar Wojtal Wojtala Wojtas Wojtasik Wojtaszek
    Wojtaś Wojtczak Wojtkiewicz Wojtkowiak Wojtowicz Wojtysiak Wolak Wolanin Wolf Wolińska Woliński Wolna
    Wolny Wołek Wołoszyn Wołowiec Woś Woźna Woźnica Woźny Wronka Wrońska Wroński Wrzesińska Wrzesiński
    Wrzosek Wszołek Wydra Wyka Wypych Wyrzykowska Wyrzykowski Wyszyńska Wyszyński Wójciak Wójcicka Wójcicki
    Wąchała Wąs Wąsowicz Wąsowska Wąsowski Wątroba Węglarz Włoch Włodarczak Włodarska Włodarski Zaborowska
    Zaborowski Zabłocka Zabłocki Zagórska Zagórski Zajdel Zajączkowska Zajączkowski Zapała Zarzycka Zarzycki
    Zarębska Zasada Zawadka Zawierucha Zawistowska Zawistowski Zawisza Zawiślak Zborowska Zborowski
    Zdanowicz Zdunek Zduńczyk Zelek Zhuk Ziaja Zielonka Ziemba Zienkiewicz Zimny Ziobro Ziomek Ziółek Ziętek
    Zwolińska Zwoliński Zygmunt Zyśk Ząbek Ćwiek Ćwik Ćwiklińska Ćwikła Łach Łada Łakomy Łapińska Łapiński
    Łata Ławniczak Łoboda Łojek Łoś Łukasiak Łukasiewicz Łukaszczyk Łukaszewicz Łukaszewska Łukaszewski
    Łukaszuk Łysiak Śledź Śliwińska Śliwiński Śliwka Ślęzak Śmiałek Śmietana Śmigiel Śmigielska Śmigielski
    Śpiewak Świder Świderek Świderska Świderski Świercz Świerczek Świerczyńska Świerczyński Świstak Świtała
    Świątkowska Świątkowski Świętek Żaba Żaczek Żebrowska Żebrowski Żelazny Żmuda Żuchowska Żuchowski Żuk
    Żukowska Żukowski Żurawska Żurawski Żydek Żygadło Żyła Żyłka Żądło
  `],
  [480, `
    Abram Abramek Adach Adam Adamik Adamowska Adamowski Adler Aftyka Ahmed Aksamit Albrecht Ali Aliev
    Ambroży Anders Andriichuk Andrysiak Andrzejczuk Andrzejczyk Antas Antkiewicz Antolak Antonenko
    Antoniewicz Antonik Antonowicz Antos Antosiak Antosiewicz Antosz Antończyk Anuszkiewicz Arciszewska
    Arciszewski Arendt Arent Armata Arndt Auguścik Avramenko Babenko Babiak Babii Babik Babiuch Babińska
    Babiński Babula Babych Baca Bachanek Baczewska Baczewski Baczyńska Baczyński Badowska Badowski Bafia
    Bajda Bajek Bajon Baka Bakalarz Bakun Bakuła Bal Bala Balawender Balcerak Balcerek Balińska Baliński
    Balon Banasiewicz Banaszczyk Bandura Bandyk Bania Baniak Bara Barabash Barabasz Baranek Baraniak
    Baranowicz Barcik Barcikowski Barcz Barczyńska Barczyński Bareja Bargiel Bargieł Barska Barski
    Barszczewska Barszczewski Bartkowska Bartkowski Bartman Bartnicki Bartocha Bartoszewska Bartoszewski
    Bartoszuk Bartoń Bartuś Barwińska Barwiński Bas Basiak Basista Basińska Basiński Basta Bastek Baszak
    Batóg Bauer Bazydło Bałazy Bałut Bańczyk Bańkowska Bańkowski Becker Beczek Bednarczuk Bednorz Bek Bekier
    Belka Bem Bera Bereda Berent Bereza Bereś Berg Berger Berlińska Berliński Bernaciak Bernacka Bernacki
    Bernatowicz Bernaś Betka Betlej Beśka Bialik Biała Białczak Białk Białoń Bieda Biedroń Biedrzycka
    Biedrzycki Biegaj Biegańska Biegański Biegun Bielas Bielawa Bielec Bielewicz Bieleń Bielicka Bielicki
    Bieniasz Biesiada Bieszczad Bieńko Bigaj Bigus Bijak Bik Bila Bilan Bilyk Binek Biniek Binkiewicz
    Binkowska Binkowski Bis Biskupska Biskupski Bitner Bińczyk Bińkowska Bińkowski Blacha Blicharska
    Blicharski Blok Boba Bobak Bobek Bobko Bobowska Bobowski Bobryk Bochen Bocheńska Bocheński Bochnak
    Bochniak Boczar Boczkowska Boczkowski Bodzioch Bodziony Bogacka Bogacki Bogaczyk Bogdał Bogus
    Boguszewska Boguszewski Bogusławska Bogusławski Boguta Bohdan Bojanowska Bojanowski Bojar Bojda Bojko
    Bolesta Bondarchuk Bondaruk Bondyra Boniecka Boniecki Borawska Borawski Borczyk Borecka Borecki Borowa
    Borowczak Borowczyk Borowiecka Borowiecki Borowy Bors Borsuk Boruc Boruch Borucka Borucki Boryczka
    Borysenko Borysewicz Borysiewicz Borysiuk Borzęcka Borzęcki Borówka Bosak Bosek Bołoz Boś Bożyk Brach
    Brandt Brandys Bratek Braun Brańka Brejnak Brodowicz Brodziak Brodzik Brodzińska Brodziński Brol Bronisz
    Broniszewska Broniszewski Bronk Broś Bruzda Brych Brychcy Bryja Bryłka Brzezicka Brzezicki Brzezina
    Brzoska Brzostowska Brzostowski Brzykcy Brzyska Brzyski Brzęczek Bródka Brózda Bucholc Buchta Buchwald
    Bucior Bucka Bucki Buczko Budek Budka Budna Budner Budniak Budz Budziak Budzik Budzisz Bugała Bugla
    Bugno Bujalska Bujalski Bujnowska Bujnowski Bujok Bukała Bukowiec Bula Bulanda Bulczak Bulik Bulińska
    Buliński Bura Buras Burchardt Burczyk Burdzy Busz Buszta Butenko Butryn Bućko Buła Bułat Buława Bułka
    Buśko Byczek Byczkowska Byczkowski Bykowska Bykowski Bylica Byra Bąba Bączkiewicz Bączkowska Bączkowski
    Bączyk Będkowska Będkowski Błach Błachnio Błachowicz Błachut Błaszak Błaszczuk Błaszkowska Błaszkowski
    Błaszyk Błaut Bławat Błażejewski Błażewicz Błądek Cabała Caputa Cała Całus Cebulska Cebulski Cedro
    Cegielska Cegielski Cegiełka Ceglarek Ceglarz Celej Celińska Celiński Celmer Cendrowska Cendrowski
    Cesarz Chaban Chaber Chabowska Chabowski Chabros Chachuła Chaika Chamera Charkiewicz Chałupka Chen
    Chernenko Chełminiak Chlebek Chlebowska Chlebowski Chlipała Chmara Chmielak Chmielarz Chmielecka
    Chmielecki Chmielowska Chmielowski Chochół Chodkiewicz Chodorowska Chodorowski Choińska Choiński
    Chojecka Chojecki Cholewińska Cholewiński Choma Chomiak Chomicz Chomiuk Chorna Chornyi Choroś Chorzępa
    Chorąży Chołuj Chrabąszcz Chrapek Chrobok Chrobot Chromik Chrostek Chrostowska Chrostowski Chruszcz
    Chrząstek Chuda Chudek Chudziak Chudzińska Chudziński Chumak Chwastek Chwała Chwałek Chwedoruk Chylińska
    Chyliński Chęcińska Chęciński Chęć Chłopek Ciach Ciastoń Ciba Ciborowska Ciborowski Cichecka Cichecki
    Cichowicz Cichowska Cichowski Ciechanowicz Ciechanowska Ciechanowski Ciecierska Ciecierski Cieluch
    Ciepiela Cieplak Cieplik Cieplińska Ciepliński Ciepły Cierniak Cierpiał Ciesielczyk Cieszyńska
    Cieszyński Ciećwierz Cieślewicz Cieślińska Cieśliński Cieśluk Cioch Ciok Cios Cisak Cisowska Cisowski
    Ciszak Cisło Ciupa Ciupak Ciupek Ciupka Ciura Cuber Cudak Cuper Cupiał Curyło Cwalina Cwynar Cyganek
    Cymerman Cywińska Cywiński Czaban Czachor Czapiewska Czapiewski Czapka Czaplicka Czaplicki Czaplińska
    Czapliński Czapnik Czapska Czapski Czarkowska Czarkowski Czarniak Czarniecka Czarniecki Czarnocka
    Czarnocki Czarnowska Czarnowski Czekalska Czekalski Czepiel Czernecka Czernecki Czernek Czerniawska
    Czerniawski Czerny Czerska Czerski Czerw Czerwiec Czerwik Czogała Czok Czopek Czub Czubek Czupryniak
    Czyszczoń Czyżak Czyżyk Dampc Damps Danek Danielak Danielczyk Danilewicz Daniłowicz Dankowska Dankowski
    Danowska Danowski Daszkiewicz Data Davydenko Dawidowska Dawidowski Dawidziuk Dałek Deka Dembek Dembińska
    Dembiński Dembowska Dembowski Demchenko Demchuk Demczuk Demianiuk Demska Demski Denis Denisiuk
    Denkiewicz Denysenko Denysiuk Depa Dera Derda Derevianko Derkach Derkacz Derlatka Deska Dettlaff Diachuk
    Didenko Didyk Dmitruk Dmochowska Dmochowski Dmowska Dmowski Dmytrenko Dmytruk Dobies Dobija Dobkowska
    Dobkowski Dobrzańska Dobrzański Dolecka Dolecki Doliński Dolna Dolny Domagalska Domagalski Domaradzka
    Domaradzki Dombek Dombrowska Dombrowski Dominiczak Domżalska Domżalski Doniec Doroshenko Dorsz Dołęga
    Drabczyk Drabek Dragon Drapała Dratwa Drelich Drobny Drobot Drogosz Drozda Drozdek Drwal Dryja Drywa
    Drzymała Drzyzga Drążkiewicz Drężek Dubaj Dubas Duch Dudko Dudnyk Dudzic Duk Dulewicz Dulęba Duma Dunaj
    Dura Durak Durczak Durda Durka Duszak Duś Dwojak Dworaczek Dworakowska Dworakowski Dwornik Dyba Dybała
    Dybaś Dybek Dybowska Dybowski Dyduch Dyga Dygas Dyjak Dyk Dyka Dyl Dyla Dylewska Dylewski Dyląg Dyrcz
    Dziadek Dziadkowiec Dziak Działo Dzida Dzido Dziedzina Dziekan Dzienis Dziewa Dziewulska Dziewulski
    Dziki Dzioba Dziubak Dziubińska Dziubiński Dziuk Dziwisz Dzięgiel Dzięgielewska Dzięgielewski Dzwonek
    Dzwonkowska Dzwonkowski Dąbrowa Dębicka Dębicki Dębiec Dębińska Dębiński Długołęcka Długołęcki Ejsmont
    Ekiert Eliasz Engel Faber Fabian Fabiś Fajfer Falkiewicz Faron Faruga Faryna Fatyga Fałek Fedak
    Federowicz Fedorchuk Fedorenko Fedorov Fedorova Fedoruk Fedyk Felczak Feliks Ferens Feret Fesenko Fiedor
    Figas Figurska Figurski Fijał Fikus Fil Filar Filas Filipczuk Filipczyk Filipiuk Filipkowska Filipkowski
    Filipowska Filipowski Firek Fischer Fiuk Flaga Florkiewicz Fluder Fojcik Foks Foltyn Fomenko Formella
    Fornalczyk Francuz Franek Frank Franke Frańczak Frej Friedrich Fronc Fronczak Frontczak Froń Frąc
    Frączak Frączyk Frąk Frąszczak Fuchs Fudala Fudali Fudała Fuks Furgał Furgała Furmanek Furmaniak
    Furmańczyk Furmańska Furmański Fus Fyda Gabriel Gabrysiak Gac Gach Gacka Gackowska Gackowski Gad Gajdzik
    Gajowniczek Gajownik Gal Galica Galicka Galicki Galik Galińska Galiński Gancarczyk Gapińska Gapiński
    Garbarczyk Garbowska Garbowski Garczyńska Garczyński Garncarz Garstka Garus Gawenda Gawlak Gawlas Gawor
    Gawrych Gawryluk Gawrysiak Gawłowska Gawłowski Gał Gała Gałan Gałczyńska Gałczyński Gałecka Gałecki
    Gałkowska Gałkowski Gańko Gdaniec Gdula Geisler Gibała Giera Gierek Gierlach Gieroń Giers Gierszewska
    Gierszewski Gilewska Gilewski Giża Glanc Glapa Glapiak Glazer Gleń Gliszczyńska Gliszczyński Gliwa
    Glińska Gliński Gluza Gmerek Gmyrek Gnat Gniewek Goc Goch Godula Godyń Gogola Goj Golan Golański Golba
    Golda Golenia Goleń Golis Golon Goluch Golus Gomułka Gomółka Gonciarz Gonera Gonet Gonsior Gontarczyk
    Gontarek Goraj Goral Gorczyńska Gorczyński Gorgoń Goryl Gorzelak Gorzelańczyk Gorzkiewicz Gorzkowska
    Gorzkowski Gos Gosk Gospodarczyk Goszczyńska Goszczyński Gowin Gozdek Gołaszewska Gołaszewski Goławska
    Goławski Gołaś Gołek Gołoś Gołuch Goś Grab Grabarek Grabarz Grabek Grabias Grabińska Grabiński Grabka
    Grabowicz Grabski Graca Gracz Gradowska Gradowski Gradzik Graf Grajek Grajewska Grajewski Grenda Greszta
    Greń Grobelna Grochal Grochala Grochowina Grodecka Grodecki Grodzicka Grodzicki Gromada Gromadzka
    Gromadzki Gromala Gronek Gronowska Gronowski Gross Groszek Grot Groth Groń Grubba Gruchała Gruda
    Grunwald Gruszczyk Gruszecka Gruszecki Gryboś Gryc Gryczka Grygier Grygo Grygoruk Gryko Grys Gryz Grzech
    Grzechnik Grzechowiak Grzegorzek Grzegorzewska Grzegorzewski Grzegrzółka Grzejszczak Grzelczak Grzelczyk
    Grzelka Grzenkowicz Grzesiuk Grzeszczuk Grzeszczyk Grześ Grześkiewicz Grzonka Grzymała Grzywa Grzywna
    Grządziel Grądziel Grądzka Grądzki Gręda Gubała Gubernat Gugała Gul Gumieniak Gumienny Gumiński Gunia
    Gurgul Gurung Gutkowska Gutkowski Guziak Guzowska Guzowski Guła Guźniczak Gwiżdż Gzik Górak Góralska
    Góralski Górczak Górczyńska Górczyński Górnicka Górnicki Górowska Górowski Górzyńska Górzyński Gąbka
    Gąsienica Gębska Gębski Głaz Głos Głowa Głowala Głowińska Głuchowska Głuchowski Głuszak Główka Głębocka
    Głębocki Haba Haber Hadam Hadryś Hajda Hajduga Halama Hallmann Hamera Hampel Han Hanc Handzel Handzlik
    Hankus Hanus Hanusiak Harasim Harasimowicz Havrylenko Hałasa Hałat Hebel Hejduk Heller Hendzel Hennig
    Herasymchuk Herasymenko Herbut Herda Hermann Hermanowicz Hernik Herok Hetman Hibner Hildebrandt Hinca
    Hinz Hirsz Hlushchenko Hlushko Hnat Hnatiuk Hoffman Hojka Holovko Holub Homa Honchar Honcharenko
    Honcharova Honcharuk Hoppe Hordiienko Hornik Horobets Horvat Hossain Hołda Hołownia Hołub Hołubowicz
    Hryciuk Hryhorenko Hryniewicz Hryshchenko Hrytsenko Hrytsiuk Hudzik Hulbój Husak Hutnik Hyjek Hyla Hyży
    Idczak Idzik Idzikowska Idzikowski Ignaciuk Ignaszak Ignatowicz Ilchenko Ilczuk Ilnicka Ilnicki Imiołek
    Inglot Irzyk Ishchenko Ishchuk Islam Ivanchenko Ivanenko Ivaniuk Ivashchenko Iwanek Iwaniak Iwanicka
    Iwanicki Iwaniec Iwanowicz Iwanowska Iwanowski Iwaszkiewicz Iwaszko Iwańczuk Izydorczyk Jabłonka
    Jabłonowska Jabłonowski Jacak Jacek Jacewicz Jachimowicz Jachowicz Jachym Jackowiak Jadach Jadczak
    Jagoda Jagusiak Jaguś Jakiel Jakimiuk Jakimowicz Jakubas Jakubaszek Jakubowicz Jakóbczak Jakóbczyk Jamka
    Jamroży Janasik Janaszek Janczewska Janczewski Janczura Janczyk Janda Janecka Janecki Janek Jania
    Janiczek Janiga Janikowska Janikowski Janisz Janiszek Jankowicz Janocha Janosz Janowiak Januszek
    Januszko Jarczyk Jarecka Jarecki Jarema Jaremko Jarmołowicz Jaroch Jarocka Jarocki Jaromin Jarosiewicz
    Jarosik Jarosińska Jarosiński Jaroń Jaruga Jarzynka Jarzyńska Jarzyński Jarzębska Jarzębski Jasiewicz
    Jaskot Jaskólska Jaskólski Jaskółka Jastrząb Jaszczak Jaszczyk Jatczak Jawor Jaworowska Jaworowski
    Jałocha Jańczyk Jaśkowiak Jażdżewska Jażdżewski Jedlińska Jedliński Jelińska Jeliński Jereczek Jerzak
    Jesionek Jeziorek Jeznach Jeżak Jeżewska Jeżewski Joachimiak Job Jodłowska Jodłowski John Jokiel Jonczyk
    Joniec Jop Jordan Jońca Jucha Juchniewicz Juda Jung Jurak Jurasz Jurczuk Jureczko Jurgielewicz Juroszek
    Juskowiak Just Juszczuk Juśkiewicz Józefczyk Józwiak Józwik Jędras Jędrasik Jędruch Jędrusiak Jędrusik
    Jędrych Jędryczka Jędryka Jędrysiak Jędrzejek Kabała Kaca Kacała Kachel Kachniarz Kacperska Kacperski
    Kacprowicz Kaczan Kaczanowska Kaczanowski Kaczkowska Kaczkowski Kaczmar Kaczorek Kafel Kaiser Kajda
    Kajzer Kalarus Kalicka Kalicki Kalina Kaliszewska Kaliszewski Kaliszuk Kalkowska Kalkowski Kalus Kamela
    Kaminska Kamionka Kamola Kampa Kanarek Kanclerz Kandzia Kandziora Kapela Kapera Kapinos Kapral Kaproń
    Kaptur Kapustka Kapuśniak Kara Karasek Karasińska Karasiński Karbowniczek Karbowska Karbowski Karczmarz
    Kardas Kardasz Kardaś Kargol Kargul Karkoszka Karnas Karolczak Karolczyk Karolewska Karolewski Karoń
    Karpeta Karpiel Karpik Karpiuk Karwacka Karwacki Karwot Karyś Kasińska Kasiński Kasperczak Kasperkiewicz
    Kasperowicz Kasperska Kasperski Kasprzycka Kasprzycki Kastelik Kasztelan Kaszubowska Kaszubowski Kata
    Kawala Kawałek Kawałko Kawczyńska Kawczyński Kawula Kazek Kazimierczuk Kazimierska Kazimierski Kała
    Kałek Kałka Kaźmierczyk Keller Kempińska Kempiński Khan Khomenko Khomych Kicińska Kiciński Kida Kidoń
    Kiedrowicz Kiedrowska Kiedrowski Kielak Kielan Kieliszek Kiepura Kierepka Kierzek Kierzkowska
    Kierzkowski Kiełb Kiełbowicz Kiełczewska Kiełczewski Kiełek Kiełtyka Kijak Kijanka Kijas Kijek Kijewska
    Kijewski Kijowska Kijowski Kin Kinder Kiraga Kisielewicz Kisielewska Kisielewski Kiszczak Klag Klasa
    Klecha Klepacka Klepacki Klepacz Klim Klima Klimaszewska Klimaszewski Klimczuk Klimiuk Klimkowska
    Klimkowski Klinkosz Klonowska Klonowski Kluba Kluczek Klucznik Kluczyńska Kluczyński Kluk Klusek Kluz
    Kluza Kmak Kmiotek Knapczyk Knitter Knopik Koba Kobak Kobos Kobylarz Kobylińska Kobyliński Kobyłka Kobza
    Kocemba Kochanek Kochanowicz Kochanowski Kochman Kociuba Kocjan Koczorowska Koczorowski Koczur Koczwara
    Koj Kojder Kokosza Kolanek Kolanko Kolano Kolarczyk Kolbusz Kolenda Kolesnyk Kolisnyk Kolińska Koliński
    Kolomiiets Koman Komenda Kominek Komor Komorek Komosa Komperda Komuda Konarzewska Konarzewski Koncewicz
    Kondej Kondraciuk Kondracka Kondracki Kondrat Kondratenko Kondratowicz Konefał Konieczko Konkel
    Kononenko Konopa Konopacka Konopacki Konopko Konsek Konstanty Kopa Kopania Kopańska Kopański Kopciuch
    Kopczyk Kopera Koperska Koperski Kopij Kopińska Kopiński Kopytko Korab Koral Koralewska Koralewski Korba
    Korbel Korczyk Korczyńska Korczyński Korda Kordas Kordek Kornacka Kornacki Kornas Kornaś Korneluk
    Korniichuk Korniienko Korniluk Korolczuk Korona Korsak Kortas Korus Korycka Korycki Korzec Korzeń
    Kosakowska Kosakowski Kosecka Kosecki Kosiak Kosiba Kosicka Kosicki Kosik Kosmowska Kosmowski
    Kossakowska Kossakowski Kossowska Kossowski Kostek Kostenko Kostro Kostrubiec Kostrzewska Kostrzewski
    Kostuch Kostyk Kostyra Kosz Koszałka Koszela Koszyk Kotala Kotarba Kotarska Kotarski Kotecka Kotecki
    Koterba Kotlarek Kotlarz Kotlińska Kotliński Kotuła Kotynia Kotłowska Kotłowski Kovalov Kovalova Kovtun
    Kowalewicz Kowalkowska Kowalkowski Kownacka Kownacki Kowol Kowolik Kozaczuk Kozar Koziara Koziarska
    Koziarski Koziatek Kozicka Kozicki Koziej Kozikowska Kozikowski Kozina Koziołek Kozińska Koziński
    Kozlova Kozubek Kołaczek Kołcz Kołodziejek Kołton Kończak Kończal Kościelna Kościelny Kościuk Kościółek
    Kośka Kośla Kośnik Koźbiał Koźlik Kożuchowska Kożuchowski Kraj Krajnik Kramarczyk Kramarz Kramek Kramer
    Kras Krasińska Krasiński Krasnodębska Krasnodębski Krasucka Krasucki Krasuska Krasuski Krauz Krawczuk
    Krawczyńska Krawczyński Krefta Krochmal Kroczak Kroczek Krogulec Kroll Kropidłowska Kropidłowski
    Kruczkowska Kruczkowski Krupka Krupska Krupski Kruszyna Krych Kryger Krynicka Krynicki Krysa Krysik
    Krysińska Krysiński Krystek Kryszak Kryńska Kryński Kryś Krzempek Krześniak Krzos Krzysiak Krzysiek
    Krzysztofiak Krzysztoń Krzywicka Krzywicki Krzywonos Krzyżańska Królczyk Krüger Kręcichwost Kręcisz
    Krężel Książkiewicz Kuba Kubasik Kubat Kubera Kubicz Kubiczek Kubis Kubisiak Kubisz Kubińska Kubiński
    Kubiś Kubowicz Kubrak Kuca Kucab Kucharek Kucharzyk Kucher Kucherenko Kucia Kuciel Kucz Kucza Kuczaj
    Kuczek Kuczkowska Kuczkowski Kuczma Kudyba Kudzia Kujawiak Kuk Kuklińska Kukliński Kukuczka Kukulska
    Kukulski Kukułka Kulawiak Kulawik Kulczycka Kulczycki Kulczyk Kulczyńska Kulczyński Kulej Kuleta
    Kuliberda Kuligowska Kuligowski Kulikowski Kulish Kuliś Kulma Kumar Kumorek Kunc Kunicka Kunicki Kunysz
    Kupidura Kupisz Kupka Kura Kurach Kurant Kuras Kurasz Kuraś Kurkiewicz Kurkowska Kurkowski Kuropatwa
    Kurpiel Kurpiewska Kurpiewski Kursa Kurtyka Kuryło Kuryś Kurzak Kurzydło Kurzyna Kurzyńska Kurzyński Kus
    Kusa Kusak Kusek Kusy Kusyk Kutsenko Kutyła Kuzia Kuzioła Kuzmych Kuć Kułakowska Kułakowski Kuśka
    Kuśmierek Kuśmirek Kuźmicz Kuźmińska Kuźmiński Kuźniak Kuźnicka Kuźnicki Kwak Kwarciak Kwas Kwasek
    Kwaśna Kwidzińska Kwidziński Kwiek Kwietniewska Kwietniewski Kwinta Kwoka Kwolek Kyrychenko Kyryliuk
    Kępińska Kępiński Kęsik Kęsy Kłeczek Kłoczko Kłoda Kłosek Kłosińska Kłosiński Kłusek Kłysz Labudda Labus
    Lachowska Lachowski Lalik Landowska Landowski Lang Langa Langowska Langowski Larysz Lasak Lasoń Laszczak
    Laszuk Latawiec Latała Lato Latocha Latusek Latuszek Le Lebioda Lechowska Lechowski Ledwoń Legutko Lejk
    Lejman Leks Lelek Lelito Lemańczyk Lemańska Lemański Lenarcik Lenarczyk Lenard Lenda Lendzion Lenik
    Lenkiewicz Lepak Lesik Lesiuk Lesińska Lesiński Lesner Leszczyk Leszek Leszko Levchuk Levytska Lew
    Lewandowicz Lewko Leś Leśkiewicz Leśko Leśniewicz Leśnik Li Liashenko Lichota Lichoń Ligas Ligocka
    Lindner Linek Lingurar Linkiewicz Lipowska Lipowski Lisak Lisiewicz Liszewska Liszewski Litwa Litwiniuk
    Litwińska Litwiński Liu Lizoń Liśkiewicz Loba Loch Lorens Lorenz Lubas Lubańska Lubański Lubecka Lubecki
    Lubera Luberda Lubińska Lubiński Ludwig Ludwiniak Lutsenko Luty Lysak Lytvyn Lê Mac Macek Machała
    Machnio Machowska Machowski Machoń Maciaszczyk Maciejak Maciejczak Maciejowska Maciejowski Maciocha
    Macioszek Macioł Maciołek Maciuszek Maciążek Macura Maczuga Madaj Madejczyk Madejska Madejski Madera
    Magda Magdziak Maik Mainka Majak Majcherczyk Majcherek Majchrowicz Majchrowska Majchrowski Majchrzyk
    Majczak Majdak Majek Majerczyk Majerska Majkut Major Makar Makara Makarenko Makaruk Makieła Makowiecka
    Makowiecki Maksym Maksymchuk Maksymenko Maksymowicz Makuła Makówka Malak Malarczyk Malarz Malcher
    Malczewska Malczewski Malek Malesa Malesza Malewicz Malina Malińska Maliński Mamedov Mandziuk Maniak
    Mankiewicz Marchel Marchlewska Marchlewski Marciniec Marciniszyn Marciniuk Marcisz Marcińczyk Marcol
    Marczewska Marczewski Marczyńska Marczyński Marecka Marecki Margol Marks Maroszek Maroń Martin Martyka
    Martyna Martynenko Martyniak Maruszak Maruszewska Maruszewski Marut Maryniak Masiak Masny Masternak
    Maszota Masztalerz Matczuk Matecka Matecki Matejek Matejko Matera Materna Mateusiak Matkowska Matkowski
    Matlak Matoga Matras Matulewicz Matura Matus Matusiewicz Matusz Matuszkiewicz Matuszyk Matviichuk
    Matviienko Matwiejczuk Matyjasik Matyjaszczyk Matyka Matysik Mazan Mazanek Mazgaj Mazurczak Mazurowska
    Mazurowski Maćkiewicz Maćkowska Maćkowski Małachowska Małachowski Małolepsza Małolepszy Małota Małysa
    Małyska Małysz Małyszko Mańczak Mańko Mech Mejer Meler Melnychenko Melon Mencel Mendel Mendyk Mentel
    Merchel Merta Meyer Miara Miarka Miazek Micał Micek Michalczak Michalczuk Michalewicz Michaluk
    Michałkiewicz Michałowicz Michniak Michno Michoń Miedzińska Miedziński Mielcarz Mielniczek Mierzwińska
    Mierzwiński Mieszała Mieszczak Migacz Miklas Mikoda Mikos Mikosz Mikołajczuk Mikołajek Mikołajewska
    Mikołajewski Mikoś Miksa Mikusek Milewicz Minda Minkiewicz Mioduszewska Mioduszewski Mirecka Mirecki
    Mirga Mirocha Miroshnychenko Mirosław Mirowska Mirowski Mishchenko Misiarz Misiaszek Misiek Misiura
    Miszczyk Miszewska Miszewski Miszkiewicz Misztela Mitka Mitoraj Mitręga Mizerska Mizerski Miziołek
    Miękina Miętkiewicz Miętus Miłkowska Miłkowski Miśko Miśkowiec Miśta Mocek Moch Moczulska Moczulski
    Modrzejewski Mokrzycka Mokrzycki Mol Molik Molka Molska Molski Molęda Mordarski Morozova Moroń Moryc
    Morys Moskalenko Moskała Moszczyńska Moszczyński Movchan Moćko Mońka Moś Mościcka Mościcki Moździerz
    Możejko Mroczka Mrozińska Mroziński Mrozowska Mrozowski Mrożek Mrugała Mrzygłód Mrówczyńska Mrówczyński
    Mrózek Muc Muniak Murach Muras Musialik Musiałek Musik Muskała Mućka Mydlarz Myjak Mykhailenko
    Mykhailiuk Mykhailova Mykhalchuk Mykytiuk Myronenko Myszak Myszk Myszkowska Myszkowski Myszor Mysłek
    Mytych Myślińska Myśliński Mzyk Mól Mączyńska Mączyński Mądra Mąkosa Mędrala Mędrek Mężyk Młynarska
    Młynarski Młynek Młyńczak Młyńska Młyński Naczk Nadolna Nadolska Nadolski Najda Najdek Najder Najman
    Nakonieczna Nakonieczny Nalepka Napieraj Napiórkowska Napiórkowski Narkiewicz Naruszewicz Nasiadka
    Naskręt Natanek Natkaniec Naumenko Naumowicz Nawara Nawrat Nazar Nazarenko Nazaruk Nejman Nesterenko
    Nesteruk Neubauer Neuman Nicpoń Niczyporuk Nieckarz Niedziałek Niedziółka Niedźwiedzka Niedźwiedzki
    Niemyjski Niepsuj Nieradka Nieroda Niestrój Niewczas Niewiarowska Niewiarowski Niewińska Niewiński
    Niewęgłowska Niewęgłowski Nieć Nikel Niklas Nikodem Nikolaienko Nita Nitka Nizio Nizioł Niżnik Nobis
    Nocuń Nogal Norek Novak Novikov Novikova Novosad Nowaczek Nowara Nowek Nowocień Nowok Noworyta
    Nowosielska Nowosielski Nyga Obrzut Obrębska Obrębski Ochab Ochał Ochnik Ochnio Ochocka Ochocki Ociepa
    Ociepka Oczkowska Oczkowski Ogonowska Ogonowski Ogorzałek Ogrodowczyk Okońska Okoński Okrasa Okrój Olak
    Olbryś Olchawa Olechno Olechnowicz Olejarczyk Oleksiewicz Oleksiuk Olesiak Olesińska Olesiński Oleszek
    Oleszkiewicz Oleszko Oliwa Olkiewicz Olko Olkowska Olkowski Olszańska Olszański Olszowska Olszowski
    Olszowy Olszówka Olędzka Olędzki Omelchenko Oniszczuk Onyshchenko Onyshchuk Opala Opalińska Opaliński
    Opara Opiela Opioła Opoka Oracz Orczyk Ordon Orkisz Orlikowska Orlikowski Orlińska Orliński Orlova Orman
    Orszulak Orzech Orzoł Osadnik Osak Osiadacz Osiecka Osiecki Osika Ostafin Ostapchuk Ostapenko Ostapiuk
    Ostapowicz Ostasz Ostaszewska Ostaszewski Otręba Otto Ovcharenko Owczarczyk Owczarz Owczarzak Owsiak
    Owsianka Ozdoba Ołdak Ośka Oślizło Ożga Pabich Pabis Pac Pacak Pacan Pacewicz Pachla Pacholczyk Pacholec
    Pacholska Pacholski Pachołek Pacocha Pacuła Pacyga Pagacz Pajda Pakosz Pakulska Pakulski Pala
    Palamarchuk Palczewska Palczewski Paliga Palii Palińska Paliński Palus Paluszek Pamuła Panas Pancerz
    Panchuk Panfil Pankowska Pankowski Panuś Papaj Papiernik Papierz Papież Papis Paprota Papuga Para
    Paradowski Parda Park Parkhomenko Paruch Paruzel Parys Parzyszek Pashchenko Pasichnyk Pasierb Pasierbek
    Pasik Pasiut Pasoń Pastor Pastusiak Pastwa Patalas Patel Paterek Patyna Paul Pavlov Pavlova Pawelska
    Pawelski Pawełczak Pawlas Pawlica Pawliczek Pawlina Pawluczuk Pazdan Pazera Pazik Pazio Pałac Pałczyńska
    Pałczyński Pańczak Pańczyk Paś Paściak Paśko Paśnik Paź Paździor Pecyna Penar Peplińska Pepliński Perek
    Perka Perzyna Pesta Pestka Petrov Petrova Petruk Petryk Petrykowska Petrykowski Pezda Pham Piasek
    Piaskowska Piaskowski Piasta Piaścik Piec Piechaczek Piechnik Piechowicz Piechowska Piechowski Piecyk
    Pieczara Pieczka Pieczonka Pieczykolan Pieczyńska Pieczyński Piegza Pielak Pieniak Pieprzyk Pieróg
    Piesik Pietrasiak Pietrasz Pietraszewska Pietraszewski Pietraszko Pietrek Pietrowska Pietrowski Pietroń
    Pietruczuk Pietruszewska Pietruszewski Pietryga Pietryka Pietrzykowska Pietrzykowski Pieńkos Pieńkosz
    Pieńkowska Pieńkowski Pijanowska Pijanowski Pikor Piksa Pikul Pikus Pilarz Pilecka Pilecki Pilipczuk
    Pinchuk Pindel Piontek Piorun Piosik Pisarczyk Pisarska Pisarski Piskorek Piskorska Piskorski Pisula
    Piszcz Piwek Piwońska Piwoński Pizoń Piórek Piękoś Piętak Piłka Placek Plewka Ploch Plucińska Pluciński
    Pluskota Pniewska Pniewski Pobłocka Pobłocki Pocheć Pochopień Pociask Pociecha Początek Podbielska
    Podbielski Podkowa Podlewska Podlewski Podleśny Podolska Podolski Podpora Podraza Podsiadły Podstawka
    Podyma Pohl Pokorska Pokorski Pokrywka Pol Polaczek Polakiewicz Polakowska Polakowski Polaszek Polcyn
    Polek Poleszak Poliakova Polit Polińska Poliński Polkowska Polkowski Polowczyk Polus Pomorska Pomorski
    Pomykała Poniatowska Poniatowski Ponichtera Poniedziałek Popczyk Popiela Popielarczyk Popielarz Popis
    Popko Popov Popova Popovych Popowicz Popowska Popowski Poprawa Pospiech Postek Posłuszny Potaczek
    Potempa Potoczny Potoniec Potępa Powała Powierża Powroźnik Poznańska Poznański Połom Pożoga Prałat
    Prochownik Prokopchuk Prokopczyk Prokopenko Prorok Protsenko Prucnal Prusaczyk Prusik Prusinowski Pruski
    Pruszyńska Pruszyński Pruś Pryimak Prykhodko Prysiazhniuk Prystupa Przepióra Przepiórka Przerwa
    Przewoźnik Przewoźny Przyborowska Przyborowski Przybycień Przybyszewska Przybyszewski Przybyłowicz
    Przybyłowska Przybyłowski Przychodzeń Przydatek Przygodzka Przygodzki Prządka Próchniak Psiuk Pszczoła
    Pszczółkowska Pszczółkowski Ptasińska Ptasiński Ptasznik Ptaszyńska Ptaszyński Pucek Puchacz Puk Pusz
    Puto Puławska Puławski Pych Pyda Pylypchuk Pylypenko Pyra Pyrek Pyrka Pysz Pytka Pytlak Pytlarz Pyzik
    Półchłopek Pączek Pęcak Pęczek Pędzich Pędziwiatr Pękała Płaneta Płoskonka Płoszaj Płońska Płoński Płusa
    Rabenda Rabiega Raczek Radchenko Radek Radkiewicz Radko Radosz Radtke Radwan Radwańska Radwański
    Radzewicz Radziejewska Radziejewski Radzikowska Radzikowski Rafalska Rafalski Ragan Raj Rajca Rajchel
    Rajczyk Rajewska Rajewski Rajkowski Rajska Rajski Rams Raszewska Raszewski Raszka Ratyńska Ratyński Rawa
    Rawska Rawski Raś Rduch Rdzanek Reczek Reda Regulska Regulski Reguła Reich Rej Rejman Rejniak Rekowska
    Rekowski Religa Rembisz Remiszewska Remiszewski Respondek Reszczyńska Rewers Richert Rodzeń Rodzik
    Rogacka Rogacki Rogowicz Rogulska Rogulski Roguska Roguski Rogóż Rohde Rojewska Rojewski Rolka Rolnik
    Romanchuk Romanek Romanenko Romaniak Romanik Romanova Romańczyk Rosiek Rosik Rossa Rostek Rostkowska
    Rostkowski Roszczyk Roszyk Rosół Rosłaniec Rosłon Rowińska Rowiński Rozbicka Rozbicki Rozmiarek Rozum
    Rozwadowska Rozwadowski Ruban Rubin Ruchała Ruda Rudek Rudolf Rudy Rudyk Rumińska Rumiński Rup Rus
    Rusiecka Rusiecki Rusnak Ruszczak Ruszczyk Ruszel Ruszkiewicz Ruszkowska Ruszkowski Rutkiewicz Rutowicz
    Rutyna Rybacka Rybacki Rybczyńska Rybczyński Rybińska Rybiński Rycerz Rychel Rychert Rychlewska
    Rychlewski Rychlicka Rychlicki Ryczek Rydel Rydzewska Rydzewski Rygiel Rygielska Rygielski Rykała
    Rykowska Rykowski Rymarczyk Rymarz Ryndak Rynkowska Rynkowski Rysz Rytel Ryznar Ryłko Rzeźniczak Rzońca
    Rzucidło Rząsa Rój Rózga Różalska Różalski Rąpała Rębacz Rękas Rękawek Sacha Sacharczuk Sadkowska
    Sadkowski Sadłowska Sadłowski Saj Saja Sajewicz Sakowska Sakowski Salwa Sambor Samborska Samborski Samek
    Samoilenko Samol Samson Samul Sarnecka Sarnecki Sarnowska Sarnowski Sarzyńska Sarzyński Saternus Sawicz
    Sawka Sawko Schab Seidel Seliga Semenova Serdiuk Sereda Serek Seremak Serhiienko Seroka Serwa Serwatka
    Serwin Seta Shapoval Shapovalova Sharma Shcherbak Shcherbyna Shostak Shpak Shulha Siara Siczek Sidorczuk
    Sidorowicz Sidoruk Sieczka Sieczkowska Sieczkowski Siedlaczek Siedlarz Sieja Siejka Siekiera Siekierska
    Siekierski Sielska Sielski Siemaszko Siembida Siemieniec Siemieniuk Siemińska Siemiński Sienicka
    Sierakowska Sierakowski Sierant Sieroń Siewierska Siewierski Simon Sinkiewicz Sitarek Sitarska Sitarski
    Sitkiewicz Sitkowska Sitkowski Sitnik Siudak Siuta Siwiak Siwińska Siwiński Siwy Skarbek Skarżyńska
    Skarżyński Skawińska Skawiński Skała Skierka Sklorz Skolimowska Skoneczna Skoneczny Skop Skorek Skorupka
    Skorupska Skorupski Skotnicka Skotnicki Skrobek Skrobisz Skrodzka Skrodzki Skrok Skrypnyk Skrzek
    Skrzyńska Skrzyński Skubis Skubisz Skura Skutnik Skwira Skórska Skórski Skłodowska Slobodian Smal
    Smektała Smirnova Smith Smok Smolarczyk Smolarz Smolik Smoter Smoła Smołka Smuga Smutek Smyczek Smółka
    Smętek Snoch Snopek Sobczuk Sobczyńska Sobczyński Sobecka Sobecki Sobek Sobel Sobiecka Sobiecki
    Sobierajska Sobierajski Sobiesiak Sobieska Sobieski Sobieszek Sobik Sobkowicz Sobocińska Sobociński
    Sobotka Soból Sobótka Sokal Sokalska Sokalski Sokolov Sokolova Solak Solarczyk Solarek Soliwoda Solińska
    Soliński Solovei Sondej Sopata Sopel Sordyl Sosin Sosińska Sosiński Soszka Soszyńska Soszyński Soćko
    Sołek Sołowiej Sońta Spałek Sprawka Springer Spychalska Spychalski Spyrka Spólnik Sroczyńska Sroczyński
    Sroga Sromek Stachera Stachnik Stachoń Stadnyk Stala Stalmach Stanaszek Staniak Staniaszek Staniec
    Staniek Stanisz Stanisławczyk Stanisławek Stankowska Stankowski Stanowska Starczewska Starczewski
    Starowicz Starzak Starzyńska Starzyński Stasiewicz Stasińska Stasiński Staszczak Staszczyk Staszek
    Staszel Staszkiewicz Statkiewicz Stawiarska Stawiarski Stawiarz Stawińska Stawiński Stawowczyk Stawowy
    Stawska Stawski Stańczuk Stańko Staś Stefan Stefanek Stefanik Stefanowska Stefanowski Stein Stelmakh
    Stelmaszczyk Stelmaszyk Stempień Stenka Stepanenko Stepanova Sternal Sternik Stetsenko Stetsiuk Steć
    Stoch Stochmal Stojak Stojek Stokowska Stolarz Stolc Stopka Stopyra Stosik Stosio Stożek Strach Strama
    Strojek Strojna Strojny Strug Strugała Struk Struś Strycharz Stryczek Strzała Strzałkowska Strzałkowski
    Strzelczak Strzyż Strzyżewska Strzyżewski Strzępek Strózik Strączek Strąk Stręk Stupak Styczeń
    Styczyńska Styczyński Stypa Stypuła Styrczula Stój Stępińska Stępiński Stępkowska Stępkowski Stępniewski
    Stępnik Subocz Suchan Suchanek Suchocka Suchocki Suchodolska Suchodolski Suchy Sujka Sularz Sulewska
    Sulewski Suliga Sulik Sulikowska Sulikowski Sumara Sumera Superson Suprun Surówka Sus Sutor Swat Swatek
    Sych Sycz Sydor Sydorchuk Sydoruk Syguła Sykuła Sylwestrzak Sypień Sypniewska Sypniewski Syrek Syska
    Syta Szabat Szabla Szablewska Szablewski Szabłowska Szabłowski Szadkowska Szadkowski Szady Szafarczyk
    Szafranek Szajna Szal Szala Szarmach Szary Szatan Szatanik Szałaj Szałas Szałek Szałkowska Szałkowski
    Szczech Szczechowicz Szczecina Szczecińska Szczeciński Szczepaniec Szczepaniuk Szczepankiewicz
    Szczepanowska Szczepanowski Szczepańczyk Szczepek Szczepkowska Szczepkowski Szczerbińska Szczerbiński
    Szczubełek Szczudło Szczuka Szczupak Szczur Szczypek Szczypior Szczypińska Szczypka Szczyrba Szefer
    Szefler Szela Szelest Szendzielorz Szeremeta Szkaradek Szklarczyk Szklarska Szklarski Szklarz Szkoda
    Szkop Szkutnik Szlachetka Szlaga Szlendak Szlęk Szlęzak Szmajda Szmuc Szmurło Szmyd Szolc Szota Szozda
    Szołtysek Szołtysik Szpakowska Szpakowski Szpara Szpila Szponar Szpunar Sztaba Sztandera Sztorc Sztuka
    Szukała Szul Szulik Szumilas Szumska Szumski Szura Szurek Szurgot Szustak Szuster Szuszkiewicz Szuta
    Szwaja Szwedo Szybiak Szyc Szyca Szych Szydełko Szydlik Szymala Szymanik Szymankiewicz Szymanowicz
    Szymaszek Szymańczyk Szymborska Szymborski Szymczuk Szymiczek Szymik Szymonik Szymula Szynal Szynkiewicz
    Szypuła Szyszkowska Szyszkowski Sówka Sądej Sąsiadek Sędziak Sędłak Sękowska Sękowski Słabosz Słaboń
    Sławek Sławik Słomian Słomińska Słomiński Słomska Słomski Słonina Słotwińska Słotwiński Słowikowska
    Słowikowski Słupek Słupska Słupski Słysz Tabak Talar Talarczyk Talarek Talaśka Talik Tamang Taran Taras
    Tarasek Tarasenko Tarasewicz Tarasiewicz Taraszkiewicz Tarczyńska Tarczyński Targońska Targoński
    Tarkowska Tarkowski Tarnawska Tarnawski Tatar Tatara Tatarek Tańska Tański Tchórz Tchórzewska
    Tchórzewski Tecław Tekieli Telega Teodorczyk Teper Tereshchenko Tereszkiewicz Terlecka Terlecki Thiel
    Thomas Tkaczuk Tkocz Tlałka Toboła Tofil Tokar Tokarek Tomalak Tomanek Tomas Tomasiak Tomasiewicz
    Tomaszczyk Tomaszewicz Tomaszkiewicz Tomczuk Tomiak Tomiczek Tomkiewicz Tomkowiak Topa Topolska Topolski
    Toporek Topór Torba Tran Trawińska Trawiński Treder Trepka Tretiak Trocha Trojak Trojnar Truchan
    Truszkowska Truszkowski Tryba Trybus Trybuła Trybuś Trzaskowska Trzaskowski Trznadel Trzop Trzyna
    Trębacz Trần Tsymbaliuk Tur Turczyn Turkiewicz Turska Turski Turzyńska Turzyński Tuszyńska Tuszyński
    Tutaj Tutak Tutka Tułacz Twardy Twardzik Twarowska Twarowski Twaróg Tworzydło Tyburska Tyburski Tyc
    Tyczyńska Tyczyński Tyka Tyl Tylek Tylka Tymchenko Tymińska Tymiński Tymoshchuk Tymoshenko Tymoszuk
    Tyrała Tyrka Tyshchenko Tyszko Uchman Ujma Ukleja Ulatowska Ulatowski Uliasz Ulman Umińska Umiński
    Urbaniec Urbanowska Urbaś Uryga Utrata Vasylieva Velychko Vlasenko Vlasiuk Voitovych Volkov Volkova
    Voloshchuk Voloshyna Vozniuk Wachnik Wachowska Wachowski Wacławczyk Wacławek Wacławik Wadas Wadowska
    Wadowski Waga Wajdzik Wajs Wal Walasik Waleczek Walendzik Walewska Walewski Walicka Walicki Waliczek
    Waliszewska Waliszewski Walkowicz Walkowska Walkowski Walkusz Walo Walus Waluś Wandzel Wang Waniek
    Wantuch Warchał Warczak Wardak Wardęga Warmuz Warych Warzocha Watras Wawak Wawro Wawryniuk Wawrzak
    Wawrzyczek Wawrzynek Wawrzynowicz Wawrzyńczak Wawszczak Wałach Wałdoch Wałęga Wańczyk Waś Waśkiewicz
    Waśko Waśniewska Waśniewski Ważny Wdowczyk Wejman Wendt Wesołek Wesoły Wełna Wiater Wiatrak Wiatrowska
    Wiatrowski Wicha Wicik Wicińska Wiciński Widuch Widz Wiech Wiecha Wiecheć Wieczorkiewicz Wieczorkowska
    Wieczorkowski Wiejak Wieleba Wielgos Wieliczko Wieloch Wielądek Wiercioch Wiercińska Wierciński
    Wierzbińska Wierzbiński Wierzbowska Wierzbowski Wierzchowska Wierzchowski Wietecha Wieteska Wijas Wijata
    Wika Wilczewska Wilczewski Wilga Wilińska Wiliński Wilkosz Wilkowska Wilkowski Wilusz Winiarek Winiarz
    Winnicki Winter Wirkus Wiszniewska Wiszniewski Wiszowata Wiszowaty Wit Wita Witak Witas Witaszek
    Witkiewicz Witos Witowska Witowski Witt Więch Więckiewicz Wnorowski Wodzińska Wodziński Wodzyńska
    Wodzyński Wojaczek Wojak Wojas Wojciech Wojciechowicz Wojcieszek Wojdak Wojdat Wojdyło Wojewódzka
    Wojewódzki Wojna Wojnarowicz Wojnarowska Wojnarowski Wojno Wojnowska Wojnowski Wojtak Wojtan Wojtasiak
    Wojtaszczyk Wojtkowska Wojtkowski Wojtoń Wojtunik Wojtyczka Wojtyna Wojtyniak Wojtyra Wojtyła Wolan
    Wolańska Wolański Wolff Wolniak Wolniewicz Wolnik Wolszczak Worek Woronowicz Wosik Woszczyk Woszczyna
    Wołczyk Wołk Wołoch Wołos Wołosz Wołowicz Wołyniec Woźniakowska Woźniakowski Woźnicka Woźnicki Woźniczka
    Wrzesień Wrzeszcz Wrześniak Wrzos Wujek Wybraniec Wychowaniec Wycisk Wylegała Wyrobek Wyrostek Wyrwa
    Wyrwas Wysokińska Wysokiński Wyszomirska Wyszomirski Wziątek Wzorek Wójcikiewicz Wójcikowska Wójcikowski
    Wójs Wądołowska Wądołowski Wątor Wąż Węgiel Węgrzyniak Węsierski Włodarek Włodarz Włodek Włosek
    Yakovenko Yakymenko Yang Yaremchuk Yaroshenko Yatsenko Yavorska Yurchenko Zabawa Zabielska Zabielski
    Zaborska Zaborski Zabrocka Zabrocki Zachara Zachariasz Zacharska Zacharski Zachwieja Zaczek Zaczyk
    Zadora Zadroga Zadrożna Zadrożny Zaiats Zaiets Zaitseva Zajda Zajkowska Zajkowski Zakharchenko
    Zakharchuk Zalas Zaleska Zaleski Zamojska Zamojski Zaniewska Zaniewski Zapadka Zapart Zarychta Zarzecka
    Zarzecki Zarębski Zatorska Zatorski Zatoń Zawieja Zawiła Zaworska Załoga Załuska Załęska Załęski Zbroja
    Zdanowska Zdanowski Zdeb Zdrojewska Zdrojewski Zdun Zduniak Zdyb Zdybel Zdziech Zeman Zemła Zgoda Zhang
    Zhuravel Ziarko Ziarnik Zieja Ziemińska Ziemiński Ziemkiewicz Ziemniak Zientara Zientek Zima Zimna
    Zimnicka Zimnicki Zimnoch Zimoch Zimoląg Zimoń Zinchenko Zioła Zioło Ziółko Zięcina Ziętara Zmuda
    Zozulia Zoń Zub Zuba Zubek Zubel Zuber Zubko Zubrzycka Zubrzycki Zwierz Zwierzchowska Zwierzchowski
    Zwierzyńska Zwierzyński Zwolak Zybała Zychowicz Zygadło Zysk Zyskowska Zyskowski Zębala Ćwiertnia
    Ćwikliński Łaba Łabuda Łabuz Łabędzka Łabędzki Łabędź Łaciak Łagoda Łagowska Łagowski Łakoma Łakomiec
    Łapa Łapacz Łapka Łaska Łaski Łaszkiewicz Łatka Ławrynowicz Łazarczyk Łazarska Łazarski Łazarz Łaś Łebek
    Łodyga Łojewska Łojewski Łojko Łopata Łopatka Łosiewicz Łoza Łozińska Łoziński Łuba Łuc Łucka
    Łuczkiewicz Łuczyńska Łuczyński Ługowska Ługowski Łuka Łukaszek Łukaszyk Łukawska Łukawski Łukomska
    Łukomski Łukowicz Łukowska Łukowski Łuniewska Łuniewski Łupińska Łupiński Łuszcz Łuszczak Łuszczek
    Łuszczyńska Łuszczyński Łyczak Łyczko Łyko Łysak Łysakowska Łysakowski Łysek Łysik Łyskawa Łysoń
    Łyszczarz Łyżwa Łącka Łącki Łątka Łęcka Łęcki Łęgowska Łęgowski Ścibior Ścibor Ścigała Śleziak Ślimak
    Śliż Ślusarek Ślusarska Ślusarski Ślusarz Ślązak Ślęczka Śmiech Śmieja Śmieszek Śmietanka Śnieżek Środa
    Świeboda Świeca Świech Świerad Świerc Świerczewska Świerczewski Świerk Świerkot Świetlik Świgoń
    Świniarska Świniarski Świst Świtaj Świtalska Świtalski Świtek Świtoń Świąder Świątczak Świątkiewicz
    Święch Święcicka Święcicki Święcka Święs Świętochowska Świętochowski Świętoń Żabicka Żabicki Żabińska
    Żabiński Żakowska Żakowski Żarski Żbik Żbikowska Żbikowski Żegleń Żelazko Żelazna Żelazowska Żelazowski
    Żmijewska Żmijewski Żochowska Żochowski Żok Żołna Żołądek Żołądź Żuber Żur Żuraw Żurowska Żurowski Żyrek
    Żywicka Żywicki Żółtek Żółtowska Żółtowski
  `],
  [800, `
    Abramczuk Abramowska Abramowski Achtelik Adamaszek Adamiuk Adamów Adrian Adrych Ahmad Akhmedov Albert
    Albin Aleksa Aleksander Aleksandrova Aleksandrzak Aleksiejuk Aliyev Amanowicz Ambrozik Ambrożewicz
    Anderson Andrearczyk Andreasik Andrejczuk Andres Andrieieva Andriienko Androshchuk Androsiuk
    Andrukiewicz Andrushchenko Andrushko Andrusiak Andruszko Andrys Andryszczyk Andrzejuk Andziak Angielczyk
    Anioła Aniszewska Aniszewski Aniśko Ankiewicz Antonov Antonova Antoszewska Antoszewski Antoń Antończak
    Apanowicz Apostel Araszkiewicz Archacka Archacki Arendarczyk Armatys Arnold Artemenko Aszyk Atamanchuk
    Atamaniuk Augustowska Augustowski Augustynek Babak Babich Babicka Babicki Babij Bacia Bacik Badora
    Bagrowska Bagrowski Bairamov Bajak Bajan Bajerska Bajerski Bajko Bajkowska Bajkowski Bak Bakalarczyk
    Bakalarska Bakalarski Bakiera Balak Balan Balas Balawejder Balcerowska Balcerowski Balcewicz Balewska
    Balik Baloh Banachowicz Banak Banasiuk Banaszczak Banaszewska Banaszewski Banat Banaśkiewicz Bancerz
    Bandosz Bandurska Bandurski Banek Banik Bany Banyś Baradziej Baraniecka Baraniecki Baranik Baraniuk
    Barankiewicz Baranov Baranova Baranovska Barańczyk Barcikowska Barcsa Barczewska Barczewski Barczuk
    Barej Bareła Barna Barnat Barszczak Bartecka Bartecki Barteczko Bartel Bartela Bartkowicz Bartków
    Bartodziej Barton Bartosińska Bartosiński Bartoszak Bartoszczyk Bartoś Bartusiak Bartz Bartłomiejczyk
    Barucha Baryga Barylska Barylski Barzyk Barć Barłóg Basa Basaj Basak Basara Basarab Basiaga Basiuk
    Basiura Baster Batorska Batura Baum Baumann Baumgart Bawoł Bazela Baziak Baziuk Bazylak Bazylewicz
    Bazyluk Bałaban Bałdys Bałon Bałos Bałys Baś Beck Bednarowicz Beer Beger Behrendt Bejger Bejm Bejma
    Bejnarowicz Bekas Beker Bekisz Bekus Bela Belczyk Belica Belina Belter Bembenek Bembnista Bender Bendyk
    Benedyk Bentkowska Bentkowski Berbeć Berdzik Berek Berendt Bereta Berezhna Bereziuk Berezovska
    Berezowska Berezowski Bergiel Beridze Berk Berkowicz Bernacik Bernard Bernatek Berus Bester Beszterda
    Beta Beyer Bezak Bezpalko Bełz Bełza Biadała Biaduń Bialic Bianga Białach Białasik Białczyk Białka
    Białobrzeska Białobrzeski Białous Białożyt Bibik Bicz Biczak Biczysko Bida Bidas Bidzińska Bidziński
    Biedka Biegała Bielat Bielańska Bielański Bielik Bienek Bienia Bieniak Biernacik Bies Biesaga Biesek
    Bieszke Bieńczak Bieś Bigda Bihun Biletska Biletskyi Bilewicz Bilicka Bilicki Bilik Bilyi Binda Binder
    Binięda Bisaga Biszczanik Bittner Biłas Bińczak Biś Bladowska Bladowski Blak Blank Blaut Block Bluszcz
    Blyzniuk Bobel Bobik Bobińska Bobiński Bobkowska Bobkowski Bobola Bobowicz Bobrowicz Bobula Bobyk
    Bochnia Bochniarz Bochyńska Bochyński Bociek Boczoń Boczula Bodak Bodek Bodnarchuk Bodo Boduch Bodych
    Bodys Bodzak Bogdziewicz Bogumił Bogunia Bogusiewicz Boguska Boguski Boguń Boguś Bohdanova Bohdanowicz
    Bohun Bohush Boichenko Bojanowicz Bojarczuk Bojczuk Bojdo Bojdoł Bojek Bojke Bok Bokota Boksa Bolda
    Bolewska Bolewski Bombała Bona Bonar Bonisławska Bonisławski Bonowicz Borak Boratyn Boratyńska
    Boratyński Borcuch Borcz Borejko Bork Borkiewicz Borkowicz Boroch Borodziuk Borovyk Borończyk
    Bortkiewicz Bortnik Boruń Borycka Borycki Boryczko Borysiak Borysov Borysova Boryń Borzych Borzym
    Borzyszkowska Borzyszkowski Boszko Botor Bozhko Bończak Bończyk Bońkowska Bońkowski Bracha Brachaczek
    Brachman Brajer Brania Branicka Branicki Bratko Bratkowska Bratkowski Brauer Breguła Brewka Breza Breś
    Brocka Brocki Brodacka Brodacki Brodawka Brojek Bromboszcz Broncel Broniarczyk Broniarek Broniek
    Bronikowska Bronikowski Bronka Bronowicka Bronowicki Broszkiewicz Browarczyk Brown Brończyk Broński Brud
    Brudek Brudniak Brudnicka Brudnicki Brudny Brulińska Bruliński Brus Bruska Bruski Bruś Bruździak Bryczek
    Bryda Brygoła Bryjak Brylak Brylowska Brylowski Bryndza Brytan Bryzek Brzegowy Brzeźniak Brzoskowska
    Brzoskowski Brzuska Brzuszkiewicz Brzuzy Brzychcy Brząkała Brzęk Brągiel Buba Bubak Bubel Bubula Buch
    Buchalik Buchholz Buczma Budkiewicz Budrewicz Budych Budzeń Budzich Budziszewska Budziszewski Budzyn
    Budzyń Bugara Bugiel Buhl Bujacz Bujas Bujko Bujnowicz Buk Bukowiecka Bukowiecki Buksa Bulak Burakowska
    Burakowski Burchard Burczak Burczyńska Burczyński Burdach Burghardt Buriak Burian Burkat Burkiewicz
    Burkot Burlaka Burnat Burnos Bursa Burska Burski Burtan Buryło Burza Burzawa Burzec Bus Busse Buszka
    Buszkiewicz Buszko Buszman But Buta Butrym Buza Buś Byczyński Bylina Byrska Byrski Bystrek Bystroń
    Bystrzycka Bystrzycki Bytnar Bytner Bywalec Byzdra Byś Bzdak Bzdęga Bzowska Bzowski Bzymek Ból Bąbel
    Bąbol Bąkiewicz Bętkowska Bętkowski Błasik Błaszczok Błaszczyńska Błauciak Błaziak Błaż Błażej Błażejak
    Błażejczak Błażejewicz Błażków Błoniarz Błąkała Błędowska Błędowski Bździuch Cacko Cackowska Cackowski
    Cader Cal Calik Cao Cap Capała Ceban Cebo Cebulak Cecot Ceglarska Ceglarski Ceglińska Cegła Cegłowska
    Cegłowski Cekała Celary Celuch Cempa Centkowska Centkowski Ceran Cetera Ceynowa Chaba Chaberek Chabior
    Chachaj Chacińska Chaciński Chadaj Chajec Chalimoniuk Charchut Charczuk Charubin Charytoniuk Chatys
    Cheba Cherednichenko Cherek Cherevko Chernetska Cherniak Cherniavska Cherniavskyi Chernov Chernova
    Chernysh Chernyshova Chełchowska Chełchowski Chełmińska Chełmiński Chełstowska Chełstowski Chilimoniuk
    Chilińska Chiliński Chlebda Chlewicka Chlewicki Chludzińska Chludziński Chmal Chmielarczyk Chmielińska
    Chmieliński Chmielnicka Chmielnicki Chmurzyńska Chmurzyński Chodak Chodakowska Chodakowski Chodań
    Chodkowska Chodkowski Chodor Choi Choina Chojak Chojna Chojnicka Chojnicki Cholewka Chomicka Chomicki
    Chomik Choromańska Choromański Chorążak Chorążewicz Choszcz Chowaniak Chowańska Chowański Chołody
    Chromiec Chromińska Chromiński Chromy Chronowska Chronowski Chrupek Chruścicka Chruścicki Chruścińska
    Chruściński Chub Chuchla Chuchro Chudoba Chudzicka Chudzicki Chumachenko Chupryna Chwalisz Chwedczuk
    Chwesiuk Chwiałkowska Chwiałkowski Chwistek Chyb Chyc Chyla Chylak Chyra Chyzh Chyłek Chądzyńska
    Chądzyński Chłopecka Chłopecki Chłosta Chłąd Ciak Ciapa Ciarka Ciarkowska Ciarkowski Ciastek Ciaś Cibor
    Cich Cichos Cichowlas Cichońska Cichoński Ciebień Ciechomska Ciechomski Ciechowicz Cieciora Cieciura
    Ciejka Cielecka Cielecki Cieloch Ciemięga Ciemny Cieniuch Ciepluch Cieplucha Ciepła Ciepłuch Ciereszko
    Cierpisz Cierpka Cierzniak Ciesielka Ciesiółka Cieszkowska Cieszkowski Ciećko Cieślicka Cieślicki
    Cieślikiewicz Cimoch Ciochoń Ciosk Ciosmak Ciołczyk Cis Cisoń Citak Citko Ciuba Ciuk Ciupińska Ciupiński
    Ciuruś Ciuła Cięciwa Ciężka Ciężki Ciężkowska Ciężkowski Ciślak Cogiel Cohen Cop Cuch Cudzich Cudziło
    Cugier Cukier Cybul Cydzik Cygal Cyganik Cylwik Cyman Cymer Cyra Cyrek Cyroń Cyrulik Cywka Czachorowska
    Czachorowski Czajor Czak Czapiga Czaplewska Czaplewski Czapp Czarna Czauderna Czeczot Czekajło Czekańska
    Czekański Czeluśniak Czenczek Czerepak Czerkies Czermak Czerner Czernicka Czernicki Czerniec Czerniecka
    Czerniecki Czerniejewska Czerniejewski Czerpak Czerwień Czerwionka Czesak Czeszejko Czochara Czopik
    Czoska Czosnyka Czubaj Czubaszek Czubińska Czubiński Czuchra Czuj Czulak Czupryn Czupryna Czupryńska
    Czupryński Czura Czuryło Czylok Czyrnek Czyżowicz Czyżowska Czyżowski Czyżycka Czyżycki Częścik Członka
    Cąkała Dach Dacko Dadacz Dadej Dakowicz Dalecka Dalecki Damasiewicz Damek Damian Danecka Danecki Danel
    Daniec Danielewska Danielewski Danielska Danielski Danieluk Danilczuk Danisz Daniszewska Daniszewski
    Dankiewicz Danko Danylchenko Danylchuk Danylenko Daraż Dargacz Darul Darłak Datsenko Datsiuk Davydiuk
    Davydov Davydova Dawidczyk Dawidek Dawidziak Dawiec Dańczak Dańko Deineka Dejneka Dela Delekta Delikat
    Deluga Dembska Dembski Demianchuk Demianenko Demko Demkowicz Demydenko Deneka Denys Depczyńska
    Depczyński Deptuch Derek Derewońko Dering Derkowska Derkowski Deryło Deręgowska Deręgowski Deszcz Detka
    Didukh Dietrich Dmitrzak Dmoch Dmytriv Dobosiewicz Dobrosielska Dobrosielski Dobrosz Dobrovolska
    Dobrovolskyi Dobroń Dobrzeniecka Dobrzeniecki Dobrzycka Dobrzycki Doering Doktor Doktór Dolatowska
    Dolatowski Dolega Domachowska Domachowski Domalewska Domalewski Domaszk Domek Domeracka Domeracki Domian
    Dominikowska Dominikowski Domino Domitrz Domińczak Domka Domowicz Domoń Domurad Domżał Donets Dorawa
    Dorna Doroba Dorobek Dorobisz Dorociak Dorosh Doroszkiewicz Doroszko Doroz Doruch Dotsenko Dovhan Downar
    Dołęgowska Dołęgowski Draus Dreger Drej Drela Dreszer Dreszler Drewa Drewek Drewicz Drewnik Drewniok
    Drewnowska Drewnowski Drgas Drobek Drobik Drobisz Drobniak Drobnik Drop Drost Drozdowicz Droś Droździel
    Droździk Drożdżal Drożdżyńska Drożdżyński Druszcz Druzgała Drwięga Drygas Drygała Dryka Dryl Drynda
    Drzał Drózd Drążkowska Drążkowski Drążyk Dub Dubel Dubicka Dubicki Dubik Dubis Dubińska Dubiński Dubovyk
    Dubyna Duc Duchnik Duchnowska Duchnowski Duczek Duczmal Dudar Dudała Dudczak Dudkowiak Dudkowska
    Dudkowski Dudys Dudziec Dukat Dulak Dulas Dulemba Dulik Dulińska Duliński Dulska Dulski Dumała Dumin
    Dunajska Dunajski Dunal Duniec Dunst Duran Duras Durczok Durkiewicz Durlak Durlej Durlik Durma Durska
    Durski Durys Durzyńska Durzyński Dusik Duszczak Duszczyk Duszkiewicz Dutchak Dutkowska Dutkowski Dułak
    Duży Dworczak Dworniczak Dworzyńska Dworzyński Dybał Dybich Dybiec Dybka Dycha Dyczko Dyda Dydak Dydo
    Dyja Dyjach Dyjas Dykas Dylak Dylik Dylong Dymarczyk Dymińska Dymiński Dymkowska Dymkowski Dymowska
    Dymowski Dynak Dynia Dynowska Dynowski Dyoniziak Dyrek Dyrkacz Dyszkiewicz Dyszy Dytko Dytrych Dytłow
    Dywan Dyła Dyś Dziadkiewicz Dziadowicz Dziadura Dziamska Dziarmaga Działa Działak Dziczek Dzidek Dziduch
    Dziechciarz Dzieciuch Dziedziak Dziekańska Dziekański Dziekońska Dziekoński Dzienisz Dzieniszewska
    Dzieniszewski Dzienniak Dziergas Dzierwa Dzierżak Dzierżanowska Dzierżanowski Dzierżęga Dziewior Dziewit
    Dziewięcki Dziełak Dzieża Dzikiewicz Dzimira Dziok Dziopa Dziuban Dziuda Dziurdzia Dziurla Dziurzyńska
    Dziurzyński Dziwoki Dziób Dziąg Dąbal Dąbrowicz Dąbroś Dąbrówka Dąbska Dąbski Dębkowska Dębkowski
    Dębniak Dębosz Dłubak Długajczyk Długi Długokęcka Długokęcki Długozima Dłużniewska Dłużniewski Dźwigała
    Ebert Eckert Ekert Elert Elias Ellwart Elsner Elwart Engler Erdmann Ernst Ewertowska Ewertowski Fabia
    Fabiańska Fabiański Fabisz Fabiszak Fabiszewska Fabiszewski Fac Fajkis Fal Falba Falińska Faliński Falk
    Faltyn Farion Fałat Fechner Fediuk Fedko Fedor Fedorchenko Fedorczyk Fedoriv Feldman Feliksiak Feliniak
    Felisiak Feluś Ferdyn Feshchenko Fiałkowska Fiałkowski Ficner Ficoń Fidler Fido Fidor Fidos Fidura
    Fiebig Fiedler Fiedorczuk Fiedoruk Fierek Figa Figarska Figarski Figat Fijak Fijałek Fijoł Fik Filak
    Filek Filiks Filipska Filipski Filonenko Filus Fiołek Fiołka Firlit Firszt Fit Fita Fitrzyk Fiut Flasza
    Fleszar Flieger Flisek Flisiak Flisikowska Flisikowski Florczuk Florian Florkowska Florkowski Fogel
    Fogiel Fogt Foit Fojt Folek Folga Folta Folwarczny Fomin Fomina Foremniak Forma Fornalik Fortuniak
    Forysiak Fołta Franas Franaszek Franc Franchuk Franczuk Frania Franiak Franik Frankowicz Franków Franz
    Fras Fraszczyk Fraś Freitag Frelek Frelich Frolov Frolova Fronczek Fronczyk Fronia Front Frost Frukacz
    Frycz Frydel Frydrychowicz Frymus Fryś Frącz Frączkiewicz Frączkowska Frączkowski Fudalej Fugiel Fulara
    Fularczyk Funk Fura Furga Furmankiewicz Furtek Futyma Fuławka Fydrych Fąferek Gabara Gabrych Gabryel
    Gabryelczyk Gabryszak Gabryszewska Gabryszewski Gabzdyl Gacki Gadowska Gadowski Gadzała Gadzina
    Gadzińska Gadziński Gaffke Gagatek Gaida Gajak Gajcy Gajdek Gajdzińska Gajdziński Gajkowski Gajo
    Gajowiak Gajzler Galek Galewska Galewski Galla Galoch Galon Galos Galuba Galwas Gamoń Gamrat Gamrot Gapa
    Gapska Gapski Gapys Gara Garbaciak Garbacik Garbarz Garbiec Garbień Garboś Garczarek Garczyk Gardocka
    Gardocki Gargas Gargała Gargol Gargula Garncarek Gasek Gasik Gasińska Gasiński Gasz Gatner Gaudyn Gaura
    Gauza Gawełek Gawińska Gawiński Gawliczek Gawlińska Gawliński Gaworska Gaworski Gawryjołek Gawęcka
    Gawęcki Gawłowicz Gałach Gałaj Gałat Gałwa Gałęza Gaś Gbiorczyk Gbur Gebauer Gembalczyk Gembara Gemza
    Gendek Gendera Gerc Gerlach Gerlich Gers Getka Gibek Gicala Giec Giedrojć Giel Gieniusz Gierach Gierak
    Gieras Gierasimiuk Gierat Gierczyk Gierej Giersz Gierula Gietka Giezek Gilewicz Gill Gizińska Giziński
    Glanowska Glanowski Glapińska Glapiński Glaza Glazik Gleba Glegoła Glenc Glica Gliniecka Gliniecki
    Glinkowska Glinkowski Glomb Glonek Gmur Gmurczyk Gnap Gnatowska Gnatowski Gniado Gniady Gniadzik
    Gniazdowska Gniazdowski Gniot Gnutek Gnyp Gocek Gocyła Godzik Godzina Godzisz Godzwon Gogacz Gogol
    Gogolewska Gogolewski Gogolin Gogół Goik Golak Golańska Golczyk Goldman Goliasz Golisz Goliszek
    Goliszewska Golla Golonko Goman Gomoła Gomuła Gordon Gorgol Gorol Gortat Gortych Goryczka Gorzka Gorący
    Gosek Gosiewska Gosiewski Gosik Goska Gospodarek Goss Gostkowska Gostkowski Gostomczyk Gostomska
    Gostomski Gostyńska Gostyński Gosz Goszcz Gosztyła Gosławska Gosławski Gotfryd Goworek Gozdur Gołas
    Gołofit Gołota Gołuchowska Gołuńska Gołuński Gościńska Gościński Goździewicz Goździewska Goździewski
    Graba Graban Grabara Grabas Grabczak Grabowiec Grabowiecka Grabowy Graboń Graboś Gradek Graj Grajcar
    Gral Gralewska Gralewski Gramza Granat Granda Grasza Graś Grdeń Gregor Gregorczuk Gregorek Gregorowicz
    Grelak Grigoryan Grobel Grobelski Groborz Groch Grochocka Grochocki Grochola Grocholska Grocholski
    Grochot Grochowicz Grochulska Grochulski Grodek Grolik Gronkiewicz Gronostaj Gros Grosz Groszewska
    Groszewski Groszyk Grotek Grotkowska Grońska Groński Gruchot Grudniewska Grudniewski Grund Grunt Grupa
    Gruza Grybel Gryciuk Grycz Gryga Grygierczyk Gryglak Gryglewicz Grygorcewicz Grygorowicz Gryka Grymuza
    Gryniewicz Gryska Gryszkiewicz Gryszko Gryta Gryzło Gryń Grzebień Grzebyk Grzegolec Grzegorska
    Grzegorski Grzegorzak Grzejdziak Grzejszczyk Grzela Grzelec Grzenia Grzesica Grzesiek Grzeszkiewicz
    Grzeszkowiak Grześków Grzona Grzymkowska Grzymkowski Grzywaczewska Grzywaczewski Grzywińska Grzywiński
    Grzywnowicz Grzywocz Grębosz Grębowiec Guba Gudz Gula Gulczyńska Gulczyński Gumiela Gumienna Gumińska
    Gumowska Gumowski Gumula Gumulak Gumuła Gupta Gurak Gurba Gurbiel Gurdak Gustaw Guza Guzdek Guzenda
    Guzior Guzińska Guziński Guściora Gwadera Gwara Gwarda Gwardiak Gwiazdowska Gwiazdowski Gwizdak Gwizdek
    Gzyl Gábor Góraj Góralik Górkiewicz Górnisiewicz Górnowicz Gąciarz Gągała Gąsiewska Gąsiewski Gąsowska
    Gąsowski Gąszczak Gębicka Gębicki Gęborys Gębura Gębuś Gęca Gęgotek Gęsiarz Gęsicka Gęsicki Gładki
    Gładkowska Gładkowski Głażewska Głażewski Głodowska Głodowski Głodzik Głowiak Głowienka Głowiński
    Głownia Głowniak Głuc Głuszczak Głuszko Główczyk Haase Habas Habdas Haberka Habrat Hachuła Haczek Hadała
    Hadaś Haduch Hahn Haiduk Hajdas Hajdasz Hajder Hajdukiewicz Hajok Hak Halat Halicka Halicki Halik Halman
    Haluch Halushka Hamerla Hamerska Hamerski Hamrol Hanak Hanas Handke Hanke Hankiewicz Hansen Hanula
    Hanusek Hanzel Hapka Haponiuk Hara Haraburda Haraf Harasimiuk Harasiuk Haratyk Harazim Harańczyk Harbuz
    Haremza Harkusha Hartman Haręża Harężlak Hasan Hasanov Hasiak Hasiuk Hass Hassan Havrysh Hawro Hawrylak
    Hałaczkiewicz Hałka Hałoń Hałupka Heba Heczko Hein Heinrich Hejmej Hejna Helak Heleniak Helińska
    Heliński Helman Hemmerling Hendel Henke Henzel Herba Herdzik Herkt Hermanowska Hermanowski Hernas
    Herrmann Herzog Herzyk Heród Hess Hetmańczyk Hewelt Hirsch Hladun Hnativ Hoang Hodun Hojan Hojda Holak
    Holc Holeksa Holewa Holik Holka Holovchenko Honcharov Honkisz Hontar Horak Horbach Horbacz Horban
    Horbatiuk Horbenko Hordiichuk Horoszkiewicz Horoszko Horowska Horowski Horzela Hoàng Hołota Hołowacz
    Hołyst Hołysz Hrabia Hrebeniuk Hryb Hryhorchuk Hryhoriev Hryhorieva Hrynchuk Hryniewicka Hryniewicki
    Hryniuk Hrynkiewicz Hryshchuk Hryshko Hrytsai Huang Huba Huber Hubert Huczek Huczko Hudy Hudyma Hudz
    Hudziak Hul Hula Hulak Hulewicz Hunko Hura Huras Hus Husar Hussain Huszcza Hutsuliak Hutyra Huzar Hydzik
    Hynek Hyra Hys Ibrahim Iciek Idasiak Idec Idkowiak Idzi Igielska Igielski Ignatiuk Ignatowska Ignatowski
    Igras Ihnatenko Ilasz Ilchuk Ilin Ilina Ilkiv Imiela Imiołczyk Indyk Indyka Irla Iskierka Ismailov
    Ivanchuk Ivanou Ivasiuk Ivchenko Iwanow Iwańczyk Iwińska Iwiński Jabłecka Jabłecki Jachacy Jachimczak
    Jachimczyk Jachimowska Jachimowski Jachna Jachnik Jaciubek Jaczewska Jaczewski Jadczyk Jagiełka Jagieło
    Jaglarz Jagosz Jagusz Jahn Jaje Jajko Jakieła Jakimiak Jakoniuk Jakubiszyn Jakubiuk Jakubów Jakusz
    Jakóbiak Jakóbik Jama Jambor Jamioł Jamiołkowska Jamiołkowski Jamro Jamroz Jamrozy Jamrożek Jamróg
    Janasz Janc Jancewicz Janczarek Janczuk Janczy Jandura Janduła Janic Janiuk Janka Janke Janko Janoszek
    Janoszka Janta Jantos Januchta Janusiewicz Januszczak Januszewicz Januś Jany Jaracz Jarco Jarczak
    Jarczewska Jarczewski Jarczok Jarczyńska Jarczyński Jaremek Jargieło Jargiło Jarka Jarkiewicz Jarmuła
    Jarmuż Jarmużek Jarnot Jaroszuk Jaroszyńska Jaroszyński Jarosławska Jarosławski Jarońska Jarych Jarzębak
    Jarzębowska Jarzębowski Jas Jasica Jasiczek Jasina Jasion Jasionek Jasionowska Jasionowski Jaskóła
    Jasnoch Jasnos Jastrząbek Jastrzębowska Jastrzębowski Jaszcz Jaszczołt Jaszczur Jaszczyszyn Jaszewska
    Jaszewski Jawień Jawoszek Jałoszyńska Jałoszyński Jałowiec Jałowiecka Jałowiecki Jańczuk Jaśko Jaśkowiec
    Jaśkowska Jaśkowski Jaźwiec Jaźwińska Jaźwiński Jażdżyk Jechna Jedut Jedziniak Jeka Jekiełek Jemioło
    Jendrysik Jenek Jerzyk Jesionowska Jesionowski Jesiołowska Jesiołowski Jeske Jessa Jeszka Jeszke Jewuła
    Jezior Jeziorna Jeziorny Jeziorowska Jeziorowski Jeżyk Jeżyna Jobda Jochymek Jodko Johnson Jonak Jonas
    Jones Joniak Jonik Jonkisz Joszko Jończy Jońska Joński Jośko Judek Junik Juras Jurasik Juraszczyk
    Jurczyńska Jurczyński Jurecka Jurecki Juruś Jurzak Jurzyk Jurzysta Jusiak Juśko Józefczak Józefowska
    Józefowski Jóźwicka Jóźwicki Jęcek Jędra Jędrak Jędral Jędrasiak Jędraszak Jędraszczyk Jędraszek
    Jędrocha Jędruszczak Jędruszek Jędrychowska Jędrychowski Jędrys Jędrysik Jędrzejko Jędrzejowska
    Jędrzejowski Jękot Kabacińska Kabaciński Kabala Kabza Kabzińska Kabziński Kachan Kachmar Kachur
    Kacperczyk Kacperek Kaczka Kaczmarkiewicz Kaczówka Kadej Kadela Kadłubek Kadłubowska Kadłubowski Kafka
    Kaja Kajak Kajdan Kajdas Kajstura Kala Kalandyk Kalashnyk Kalenik Kaletka Kaliciak Kalicińska Kaliciński
    Kalinichenko Kalinin Kalinina Kalinka Kalisiak Kalista Kaliszczak Kalka Kalman Kalota Kaluga Kalyta
    Kamecka Kamecki Kamieniak Kamieniarz Kamieniecka Kamieniecki Kamieńska Kamieński Kaminski Kaminskyi
    Kamrowska Kamrowski Kamuda Kamyk Kamyszek Kandefer Kandora Kaniecka Kaniecki Kanigowska Kanik Kaniowska
    Kaniowski Kaniuk Kaniuka Kansy Kantek Kantorska Kantorski Kantyka Kapa Kapałka Kapcia Kapciak Kapczyńska
    Kapczyński Kapias Kapitan Kapka Kapuściak Kapuścik Kapłan Karaban Karabin Karalus Karas Karaszewska
    Karaszewski Karaśkiewicz Karch Karczmarek Karczyńska Karczyński Kardash Kardyś Karimov Karkocha Karkosz
    Karkowska Karkowski Karkut Karlińska Karliński Karmelita Karol Karolczuk Karolewicz Karpa Karpiak
    Karpierz Karpova Karpuk Karska Karski Karsznia Karwala Karwan Karwasz Karłowicz Kasak Kashuba Kasiak
    Kasian Kasica Kasjaniuk Kaska Kasper Kasprowiak Kaszewska Kaszewski Kaszkowiak Kasznia Kaszowska
    Kaszowski Kaszubska Kaszubski Kaszyca Kaszyńska Kaszyński Katana Katarzyńska Katarzyński Kawiak Kawulok
    Kaya Kazak Kazana Kazanowska Kazanowski Kazberuk Kazik Kazimierczyk Kazior Kaziród Kaznowska Kaznowski
    Kazubek Kałamarz Kałucka Kałucki Kałuska Kałuski Kałuzińska Kałuziński Kałużyńska Kałużyński Kałwa
    Kałwak Kańduła Kańska Kański Kańtoch Kaźmierowski Keler Kempisty Kempka Kempny Kenig Kern Kerner
    Kharchuk Kholod Khoma Khomiak Khomyn Khyzhniak Kicka Kidawa Kieca Kieda Kiedos Kielczyk Kielich Kieloch
    Kiepas Kierat Kieres Kiereś Kieszek Kieszkowska Kieszkowski Kieć Kiełbik Kiełbus Kiełkowska Kiełkowski
    Kiełpińska Kiełpiński Kieś Kij Kik Kilanowska Kilanowski Kilar Kiliszek Kilińska Kiliński Kiljan Kimak
    Kinal Kiper Kiryluk Kisała Kisil Kit Kitowska Kitowski Kiwak Kiwior Klaja Klak Klama Klaman Klamann
    Klamka Klara Klatka Klaus Klawikowska Klawikowski Kleban Klebba Kleczkowska Kleczkowski Kleina
    Kleinschmidt Klejna Klekot Klemczak Klemens Klepka Kliber Klik Klimko Klimkowicz Klimowska Klimowski
    Klimuk Klin Klinger Klisiewicz Klisz Kliszcz Kloch Klochko Klorek Klos Klose Kloska Kloskowska
    Kloskowski Kluczewska Kluczewski Kluczny Kluczyk Kluge Kluj Klukowska Klukowski Klupś Klus Kluzek Klym
    Klymchuk Klyszcz Klyta Klóska Klęczar Klęk Knapek Knaś Kniaź Knieć Knopek Knopp Knura Knut Knych Knysak
    Knysh Kobel Kobeszko Kobets Kobielska Kobielski Kobierska Kobierski Kobryn Kobryń Kobusińska Kobylarczyk
    Kobylańska Kobylański Kobyłecka Kobyłecki Kobzar Kocaj Kochańczyk Kochel Kociemba Kociszewska
    Kociszewski Kocińska Kociński Kocon Kocoł Kocurek Kocyba Kocyk Kocyła Koczan Koczara Koczkodaj Koczy
    Kohnke Kokhan Kokocińska Kokociński Kolak Kolanowska Kolanowski Kolarz Kolat Kolańczyk Kolber Kolczyńska
    Kolczyński Kolek Kolendo Kolesnik Koleśnik Koliada Kolka Kolman Koloch Kolodii Kolomoiets Kolonko Kolos
    Kolus Komander Komarnicka Komarnicki Kominiak Komisarczyk Komisarek Komorniczak Komsta Konat Kondziela
    Kondziołka Konecka Konecki Konewka Konicka Konicki Koniec Koniecko Konieczek Koniuszy Kononowicz
    Konopińska Konopiński Konopska Konopski Konovalov Konovalova Konrad Konstantynowicz Kontek Kontny
    Kopacka Kopacki Kopaczewska Kopaczewski Kopala Kopała Kopcińska Kopciński Kopecka Kopecki Kopek Kopel
    Koperek Kopiczko Kopko Koprek Koprowicz Kopycińska Kopyciński Kopycka Kopycki Kopyt Kopytek Kopyto
    Kopyść Korbut Kordel Kordowska Kordowski Kordus Kordys Korecka Korecki Korejwo Korek Korepta Korga
    Korgul Korgól Korkosz Korkus Korman Kornafel Kornaga Kornak Kornatowska Kornatowski Kornecka Kornecki
    Kornek Kornet Korniak Kornobis Korolova Koronkiewicz Korpal Korsun Korta Kortus Korycińska Koryciński
    Korytko Korytkowska Korytkowski Korytowska Korytowski Korzeb Korzekwa Korzeniak Korzeniecka Korzeniecki
    Korzh Korzonek Korzun Kosak Kosatka Kosałka Kosela Kosenko Kosewska Kosewski Kosidło Kosiec Kosiek
    Kosieradzka Kosieradzki Kosiorowska Kosiorowski Kosk Kosmal Kosmalska Kosmalski Kosman Kosmatka Kosno
    Kosobucki Kosowicz Koss Kossak Kost Kostera Kostiuchenko Kostiv Kostorz Kostur Kosyl Koszarek Koszewska
    Koszewski Kosznik Kotara Kotenko Kotkiewicz Kotkowska Kotkowski Kotlarczyk Kotlarska Kotlarski Kotliar
    Kotrys Kott Kotulska Kotulski Kotus Kotwa Kotwicka Kotwicki Kotyk Kotyla Kotyrba Kovalska Kovalskyi
    Kovalyk Kowacz Kowala Kowalak Kowalcze Kowaluk Kowalówka Kowara Kozachenko Kozachok Kozachuk Kozaczka
    Kozakowska Kozakowski Kozanecka Kozanecki Kozdra Kozdraś Kozdroń Kozdrój Kozdęba Kozek Kozerska Koziak
    Koziar Koziarz Kozica Kozieja Kozielec Kozielska Kozielski Kozień Kozlov Kozlovska Kozlovskyi Kozok
    Kozon Kozubal Kozłowicz Koćwin Kołacka Kołacki Kołaczyk Kołaczyńska Kołak Kołata Kołbuc Kołecka Kołecki
    Kołodyńska Kołodyński Kołodziejak Kołomańska Kołomański Kołosowska Kołosowski Kołpak Kołsut Kołtuniak
    Koń Kończyk Kościańska Kościański Kościelak Kościelska Kościelski Kościesza Kościk Kościołek
    Kościukiewicz Kościuszko Kościńska Kościński Kość Koźlak Koźmińska Koźmiński Kożuszek Kraczkowski
    Kraiński Krajka Krajniak Krajza Krakowczyk Kral Kramarenko Kranc Krasa Krasicka Krasicki Krasny
    Kraszkiewicz Krata Krauza Kravtsov Kravtsova Krawiecka Krawiecki Kraśnicka Kraśnicki Kraśniewska
    Kraśniewski Kreczmer Krefft Krekora Kremer Krempa Krenc Kretek Kretowicz Kril Krokos Krokosz Krot
    Krowiak Krowicka Krowicki Kruczyk Kruczyńska Kruczyński Krukar Krupczak Krupnik Kruszelnicka
    Kruszelnicki Kruszka Kruszona Kruzel Kruś Krużel Kryjak Kryk Krysiewicz Krysiuk Kryska Krysta
    Krystkiewicz Krystkowiak Krystosiak Kryszczak Kryszczuk Kryszkiewicz Krysztofowicz Kryvenko Kryvoruchko
    Krywult Kryza Kryściak Kryśkiewicz Krzan Krzanowska Krzanowski Krzciuk Krzesińska Krzesiński Krzeszewska
    Krzeszewski Krzeszowiec Krzeszowska Krzeszowski Krzewińska Krzewiński Krzewska Krzewski Krzosek Krzoska
    Krztoń Krzych Krzyk Krzykawska Krzykawski Krzykała Krzykowska Krzykowski Krzymińska Krzymiński Krzysik
    Krzystek Krzystyniak Krzyszczak Krzyszkowska Krzyszkowski Krzysztof Krzysztofek Krzysztoszek
    Krzywdzińska Krzywdziński Krzywoń Krzyśko Krzyśków Krzyżanek Krzyżański Krzyżek Krzyżewska Krzyżewski
    Krzyżostaniak Krzyżowska Krzyżowski Królewicz Królicka Królicki Królikiewicz Krótki Krówka Kręgiel Krępa
    Krężołek Ksel Książczyk Księżak Księżopolska Księżopolski Księżyk Kubaczyk Kuban Kubanek Kubasiak
    Kubasiewicz Kubczak Kubek Kuberska Kuberski Kubiaczyk Kubieniec Kubina Kubisztal Kubiszyn Kubit Kublik
    Kuboszek Kuboń Kubów Kucal Kucała Kucewicz Kucharewicz Kucharz Kucharzak Kuchciak Kuchcińska Kuchciński
    Kucheruk Kuciak Kucner Kucybała Kuczak Kuczewska Kuczewski Kud Kudela Kudelska Kudelski Kuder Kudełka
    Kudla Kudlak Kudlik Kudlińska Kudliński Kudra Kudłacik Kudłacz Kuffel Kuhn Kujda Kukawka Kukawska
    Kukawski Kukhar Kukharchuk Kukier Kukieła Kukowska Kukowski Kulaszewicz Kulbacka Kulczak Kulesa Kulesz
    Kuliga Kulinich Kulis Kulisz Kulon Kulpińska Kulpiński Kultys Kulus Kulynych Kumala Kumięga Kunat
    Kuncewicz Kunda Kundera Kunert Kunikowska Kunikowski Kunka Kunkel Kunz Kupaj Kupińska Kupiński Kupś
    Kural Kuran Kurantowicz Kurasiewicz Kurbiel Kurc Kurcz Kurczab Kurczak Kurczewska Kurczewski Kurczyk
    Kurczyńska Kurczyński Kurda Kurdek Kurgan Kurka Kurkowiak Kurnik Kurnyta Kurosz Kurp Kurpanik Kurpas
    Kurpisz Kurs Kurylo Kurys Kuryłowicz Kurz Kurzac Kurzaj Kurzawska Kurzawski Kurzyk Kurzępa Kusik Kusio
    Kusińska Kusiński Kuska Kuster Kustosz Kuszaj Kusztal Kuszyk Kut Kutek Kuter Kutera Kutnik Kuts Kuza
    Kuzak Kuziak Kuziel Kuzio Kuzior Kuziora Kuzmich Kuzmin Kuzmina Kuznetsov Kuznetsova Kuznietsov
    Kuznietsova Kuzyk Kućmierz Kułach Kułacz Kuśmider Kuśmierczak Kuśmierska Kuśmierski Kuśnierek Kuświk
    Kuźba Kuźmicka Kuźmicki Kuźnia Kuźniewska Kuźniewski Kużdżał Kwapień Kwapis Kwapisiewicz Kwapińska
    Kwapiński Kwarta Kwartnik Kwasiborska Kwasiborski Kwasigroch Kwiatoń Kwiotek Kwit Kyc Kycia Kyrcz
    Kyrylenko Kysil Kóska Kózka König Kącka Kącki Kądzioła Kąkolewska Kąkolewski Kątny Kędroń Kędziorek
    Kępczyńska Kępczyński Kępska Kępski Kęsek Kęsicka Kęsicki Kłodzińska Kłodziński Kłopotowska Kłopotowski
    Kłosiewicz Kłosowicz Kłósek Kłębek Laba Labocha Lada Lademann Lakatosh Lal Lalak Lamch Lamczyk Lamek
    Lament Lampa Lamparska Lamparski Lampart Langier Langiewicz Las Lasecka Lasecki Lasik Lasko Laskus
    Lasocka Lasocki Lassak Laszczyk Laszkiewicz Latacz Latek Latko Latkowska Latkowski Latosińska Latosiński
    Latoszek Latoń Laufer Lavreniuk Lavryk Lazarek Lazarenko Lebek Lebid Lebiedziński Lechwar Ledwig Ledzion
    Legierska Legierski Lekki Lelonek Leman Lemanowicz Lemiesz Lemieszek Lemke Lempart Lenc Lenczewska
    Lenczewski Leniart Leoniak Leoniuk Leonowicz Leończuk Lepa Lepianka Lepiarz Lepka Lerch Leshchenko
    Lesiewicz Lesisz Leskiv Lesyk Leszcz Leszczak Leszczuk Leszkiewicz Letkiewicz Levytskyi Lewańczyk
    Lewczyk Lewek Lewicz Lewtak Leyk Leń Leńczuk Leśna Leśniowska Leśniowski Leśny Leżoń Liakh Liana Liashuk
    Liber Liberda Liberska Liberski Lica Lichwa Licznerska Licznerski Liedtke Ligenza Ligocki Ligus Likus
    Limanówka Lin Linda Link Linka Linke Linowska Linowski Lip Lipczyńska Lipczyński Lipnicka Lipnicki Lipok
    Lipowicz Lisewska Lisewski Lishchuk Lisicka Lisicki Lisik Lisińska Lisiński Lisowicz Lisowiec Lisoń Liss
    Listwan Literska Literski Litewka Litka Litke Littwin Litvin Litvinova Litwinowicz Litwińczuk Lizurej
    Loboda Lonc Loranc Loranty Lorent Los Loska Luba Lubaszka Lubaś Lubczyńska Lubczyński Lubieniecka Lubos
    Lubowiecka Lubowiecki Lubszczyk Luchko Ludwicka Ludwicki Ludwik Ludwikowska Ludwikowski Ludwin Ludwisiak
    Lukas Lukianchuk Lukianenko Lukoszek Luks Lula Lulek Lulewicz Luranc Lurka Luterek Lutsiv Lutsyk Lymar
    Lysiuk Lysko Lytovchenko Lytvynchuk Macha Machalica Machalska Machalski Macheta Machniak Machnicka
    Machnicki Machowiak Machowicz Machul Machula Machulec Macias Maciałek Maciaś Maciejczuk Maciejewicz
    Maciejko Maciejuk Maciorowska Maciorowski Maciuk Macko Macuga Maculewicz Madajczyk Madalińska Madaliński
    Madejek Madoń Madura Madzia Madziar Maga Magier Magierska Magierski Magnuszewska Magnuszewski Magoń
    Magryta Magryś Maiboroda Majczyna Majdan Majdańska Majdański Majerczak Majerski Majewicz Majgier
    Majkrzak Majnusz Majocha Majorczyk Majorek Majos Majsterek Majtczak Majtyka Majzner Mak Makarchuk
    Makarevich Makarov Makarova Makarska Makarski Makles Makos Makosz Makowiec Makoś Maksim Maksimowicz
    Maksymiak Maksymiv Makulec Makulska Makulski Makurat Malaga Malanowska Malanowski Malara Malcharek
    Malcherczyk Malcherek Malczak Malecha Malecka Malecki Maleszewska Maleszewski Maleszka Malewska Malewski
    Maligłówka Malisz Malka Malko Malmon Malon Maluchnik Maląg Mamak Mamcarz Mamchur Mamedova Mammadov
    Mamrot Mandryk Mandrysz Maniecka Maniecki Manikowska Manikowski Manista Manko Mann Manowska Manowski
    Marach Maras Maraszek Marat Marchewa Marchlewicz Marchut Marcinowska Marcinowski Marcinów Marciszewska
    Marciszewski Marcińczak Marcińska Marciński Marecik Margas Mariańska Mariański Markevych Markiel Markiv
    Marko Markova Markowiak Markus Markuszewska Markuszewski Maron Marosz Marszalik Marszałkowska
    Marszałkowski Martseniuk Martyn Martynova Martynowicz Marucha Marushchak Marusiak Maruszczak Maruszczyk
    Marynowska Marynowski Marć Masalska Masalski Masiarz Masiewicz Masiuk Mastaj Mastej Mastela Maszczyk
    Maszkiewicz Maszkowska Masłoń Masłyk Matacz Matejczuk Matejczyk Matejuk Matela Matelska Matelski Materek
    Materka Mateńko Matla Matraszek Matsiuk Matula Matulka Matusewicz Matuszny Matwiej Matwiejczyk Matyasik
    Matyjas Matyjasek Matyjaszek Matynia Matysiewicz Matyszczak Matyszkiewicz Matyśkiewicz Matłosz May Mayer
    Mazek Mazepa Maziarczyk Maziarka Mazik Mazurczyk Mazurenko Mazuryk Maćczak Maćków Małas Małocha Mały
    Małycha Małys Małysiak Małysza Małyszek Małyszka Małż Mańczyk Mańk Maślach Maślankiewicz Maślany
    Medvedieva Medvid Medyńska Medyński Megger Meier Meissner Melaniuk Melcer Melka Melnik Mendak Mendyka
    Merchut Mercik Merda Mesjasz Meus Mianowska Mianowski Mich Michalczewska Michalczewski Michalewska
    Michalewski Michaliszyn Michalkiewicz Michel Michnik Michnowicz Michulec Miciak Miczek Miczka Midura
    Miechowicz Miecznik Miecznikowska Miecznikowski Mielec Mielech Mielke Mielnicka Mielnicki Mieloch
    Mientus Mierzwiak Mierzyńska Mierzyński Mieszkowska Mieszkowski Miga Migała Migda Migdalska Migdalski
    Migdałek Migoń Migut Mijas Mik Mikiciuk Mikina Mikita Miklaszewska Miklaszewski Mikler Mikołajec
    Mikołajewicz Miksza Mikucka Mikucki Mikulak Mikulec Mikus Mikuś Mikłasz Mil Mila Milanowska Milanowski
    Milcarz Milczanowska Milczanowski Milczarczyk Milej Milewczyk Milik Milka Miloch Minkina Minko Minta
    Miodek Miotke Miozga Mirgos Mirkiewicz Mironiuk Miros Miroshnichenko Mirosz Mirończuk Mishchuk Misiejuk
    Misior Misiołek Misiuk Miska Mistarz Mistrzak Miszczyszyn Miszkiel Miszkurka Miszta Mitek Mitera Mituła
    Mizak Mizgała Mizia Miąsik Miąsko Miękus Miętka Miłoszewska Miłoszewski Miłoś Miśkowicz Miśków Miśtal
    Mleczak Mleczek Mocarska Mocarski Mochocka Mocny Moczko Moczydłowska Moczydłowski Modelska Modelski
    Modlińska Modliński Modrzyńska Modrzyński Moiseienko Moj Mojsa Mokwa Molak Moldovan Molek Molga Molińska
    Moliński Moneta Moniak Moniuszko Monkiewicz Morawa Morawiak Morcinek Mordak Mordal Mordarska Morek Morel
    Morga Morgała Morhun Morka Morozov Mortka Moryl Moryń Mosakowska Mosakowski Mosiichuk Mosiołek Moskalik
    Moskaliuk Mosoń Mostek Mostowska Mostowski Mosur Motak Motylewska Motylewski Mołczan Mołdoch Mońko
    Możdżonek Mroczko Mrotek Mrowca Mrowińska Mrowiński Mrozowicz Mszyca Muchowska Muchowski Muciek Mudlaff
    Mudrak Mudryk Mueller Mukha Mularska Mularski Mularz Mulawa Multan Munteanu Mura Murat Murdza Murek
    Murias Musialska Musialski Musiała Musiałowska Musiałowski Musiienko Musiolik Musz Muszalska Muszalski
    Muzolf Muzyk Mućko Mycek Mydlak Myga Myk Mykhailov Mykytyn Myrcha Myrcik Myrda Myronchuk Myroniuk
    Myroshnychenko Mysiak Mysior Mysza Myszkiewicz Mytnik Myćka Myślak Mówińska Mądro Mądrzak Mądrzyk Męcik
    Mękal Mętel Mężyńska Mężyński Młocek Młodawska Młodawski Młodzianowska Młodzianowski Młodzik Młodziński
    Młot Młotek Młynarek Młynarz Młyńczyk Műller Nabiałek Nachyła Nadrowska Nagel Naglik Nagórka Nagórska
    Nagórski Nahorna Nahornyi Nakielska Nakielski Nakonechna Nakonechnyi Nalazek Nalewajek Nalewajk
    Nalewajko Namysł Namysło Namyślak Napieralska Napieralski Narewska Narewski Narożna Narożnik Narożny
    Naróg Nasiłowska Nasiłowski Nastaj Nastarowicz Nastały Naumiuk Nawalaniec Nawalany Nawracaj Nawrotek
    Nawój Nazarchuk Nazarewicz Nazarko Nazarov Nazarova Nazimek Nałęcz Necel Nechyporenko Nechyporuk Nehring
    Neska Nesterowicz Nestorowicz Neugebauer Nicewicz Nickel Nieborak Niebrzydowska Niebrzydowski Niebudek
    Niechciał Nieckula Niedbalska Niedbalski Niedośpiał Niedziałkowska Niedziałkowski Niedźwiadek Niemczak
    Niemczuk Niemier Niemira Niemyjska Nieradko Nieradzik Nieszporek Niesłony Niewiadomy Niewola Niećko
    Nieścior Nieścioruk Nijak Nikitenko Nikitin Nikitina Nikitiuk Niklewicz Nikolaichuk Nikolaiev Nikolaieva
    Nikolenko Nikonowicz Nikołajuk Niksa Niski Nitecka Nitecki Nitek Nitkiewicz Niwińska Niwiński Niziałek
    Nizińska Niziński Nocek Noculak Nogalska Nogalski Nogieć Nojek Nojman Noras Noszczyk Novik Noworolnik
    Nowotarska Nowotarski Nowotka Nowotnik Nowotny Nowowiejska Nowrot Nurek Nurkiewicz Nurzyńska Nurzyński
    Nyk Nytko Nóżka Nędzi Obajtek Obarzanek Obiała Oborski Obrochta Obrycka Obrycki Obrzud Obst Obuchowicz
    Obuchowska Obuchowski Obłoza Obłój Och Ochal Ochałek Ochmann Ochmańska Ochmański Ochota Ochwat Oczko
    Oczkowicz Oczoś Odrobina Odrzywołek Ofiara Ogar Ogiegło Ogiela Ogińska Ogiński Ogonek Ogorzały Ograbek
    Ogrodowicz Ogrodowska Ogrodowski Ogryzek Ogórkiewicz Ogłaza Okarma Okarmus Okhrimenko Oko Okoniewska
    Okoniewski Okraska Okroj Okrzesik Okseniuk Okuniewska Okuniewski Okła Olas Olbrych Olbrycht Olchowik
    Olearczyk Olechowska Olechowski Oleksa Oleksak Oleksiienko Oleksik Oleksyn Oleniacz Olesiejuk Oleszczak
    Oleszczyk Olewińska Olewiński Olewniczak Olewnik Oleśkiewicz Olkowicz Olma Olszowa Olszyna Olszyńska
    Olszyński Omelańczuk Omelchuk Omiotek Onishchuk Opach Opalach Opas Operacz Opolska Opolski Opyd Opyrchał
    Orawiec Orczykowska Orczykowski Orel Organiściak Orlicka Orlicki Orlov Ornat Ornoch Orpel Orszulik Ortyl
    Orwat Oryl Orzeszek Orzołek Orłowicz Osada Osadcha Osadchuk Osadchyi Osetek Osial Osica Osiewicz Osik
    Osipiuk Osipowicz Oskroba Oskwarek Osman Osmańska Osmański Osmólska Osmólski Osojca Ostapczuk Ostojska
    Ostojski Ostrovska Ostrovskyi Ostrycharz Ostręga Osuchowska Osuchowski Osypenko Osypiuk Oszust Otremba
    Otulak Owcarz Owczarczak Owczarska Owczarski Owoc Owsianko Owsiany Oziębło Ołdakowska Ołdakowski Ołów
    Ośko Ożarek Ożarowska Ożarowski Pabin Pabisiak Pabiś Pacanowski Pachnik Pacholak Pacholarz Pacholczak
    Pacholik Pachowicz Pachucka Pachucki Pachulska Pachulski Pachura Pachuta Pacia Pacura Pacyniak Paczos
    Paczuska Paczuski Paczuła Paczyńska Paczyński Padoł Padula Padzik Padło Pajdak Pajdzik Pajek Pajewska
    Pajewski Pajka Pak Pakieła Pakos Pal Palak Palamar Palarczyk Paleczny Palej Paleń Palica Palimąka
    Palmowska Palmowski Palonek Palonka Paluchowski Paluszak Pampuch Panasenko Panasewicz Panasiewicz Pander
    Panicz Pankau Pankiv Papciak Papke Paprotny Paprzycka Paprzycki Parada Parafiniuk Pardo Parfeniuk
    Parkitna Parkitny Parus Parysek Parzonka Pasiak Pasich Pasieczna Pasiecznik Pasieczny Pasikowska
    Pasikowski Pasionek Pasińska Pasiński Paska Pasko Pastucha Pastukh Pastuszek Pastuszko Pastuła Paszenda
    Paszke Paszkowiak Pasztaleniec Pasławska Pasławski Patek Patelczyk Paterak Patla Patoka Patora Patoła
    Patro Patrzałek Patrzykąt Paulus Pavliv Pavlovska Pavlovskyi Pavlyk Pavlyshyn Paw Pawela Pawełkiewicz
    Pawełko Pawełoszek Pawińska Pawiński Pawlaczek Pawleta Pawliczak Pawliszyn Pawlonka Pawlos Pawlukiewicz
    Pawluś Pawul Pazdro Pazdur Pazgan Paziewska Paziewski Pazoła Pałgan Pałkowski Pałubicka Pałubicki
    Pałucka Pałucki Pałyga Pałyska Pałęga Pańczyszyn Pańko Pańszczyk Paździora Peciak Pecka Peda Pedrycz
    Pela Pelczarska Pelczarski Pelka Penkala Pera Perczak Perczyńska Perczyński Perdek Perepelytsia Perlak
    Perlik Perlińska Perliński Pernak Pernal Pers Pertek Perzanowska Perzanowski Perzyńska Perzyński Peszko
    Peter Peters Petka Petriv Petrovska Petrus Petryka Petryshyn Phan Phạm Pianka Piaseczna Piaseczny
    Piaszczyk Pich Picheta Piechna Piechocińska Piechociński Piechura Pieczarka Pieczyrak Piegat Piejko
    Piekacz Piekara Piekarek Piekarniak Piekart Piekorz Piekutowska Piekutowski Piekło Pielach Pielech
    Pielka Pieloch Pielużek Pieper Piepiórka Pieprzyca Pierchała Piernik Pieron Piersa Pierz Pierzak Pierzga
    Pieszak Pieszko Pietrak Pietraszkiewicz Pietraś Pietrewicz Pietrowicz Pietrus Pietrusiak Pietrusiewicz
    Pietruszkiewicz Pietruszyńska Pietruszyński Pietrzkiewicz Piguła Pik Pikos Pikula Pikulik Pikulska
    Pikulski Pilarek Pilawa Pilc Pilich Pilichowska Pilichowski Pilip Pinda Pindor Pindral Pinkowska
    Pinkowski Pintal Pioch Piotrak Piotrkowicz Piotrowiak Pisera Piskor Piskun Pisz Piszczatowski Pitala
    Pitek Pitera Pituch Pitura Pituła Piven Piwnik Piwowarek Piórko Piątkiewicz Pięciak Piędel Piętoń Plaga
    Plak Plaskota Plaza Pleban Plebanek Pleskot Plewińska Plewiński Plewnia Pleśniak Plich Plis Plizga Plona
    Pniak Pochmara Pochroń Poczta Podeszwa Podgórna Podgórni Podgórniak Podgórny Podkówka Podlasek Podlaska
    Podlaski Podleś Podleśna Podoba Podobińska Podobiński Podolec Podrażka Podsiadła Podsiedlik Pogorzelec
    Pogwizd Pojda Pokojska Pokojski Pokrzywa Pokusa Polanowska Polanowski Polasik Polczyk Polewka Polewska
    Polewski Poliakov Policht Politowicz Politowska Politowski Poliukhovych Polnik Polska Pomarańska
    Pomarański Pomian Pomietło Pompa Pondel Poniewierska Poniewierski Ponikowska Ponikowski Ponomarova Pop
    Popa Popielarska Popielarski Popielas Popielski Popik Popiół Poprawska Poprawski Poreda Poremba Porowska
    Porowski Portka Porwoł Porzucek Posmyk Post Postawa Postrożny Poszwa Posłuszna Potapenko Potera Poterek
    Potoczek Potoczna Potok Potyra Potyrała Potęga Powałka Powązka Powęska Pozorska Pozorski Połczyńska
    Połczyński Połetek Połomska Połomski Południak Poślednik Pośnik Poświata Pożarowszczyk Prabucka Prabucki
    Pracz Praczyk Pradela Prajs Prajsnar Pranga Prasek Prawda Prawdzik Prażmo Prażuch Preis Preisner Prejs
    Preuss Preś Procek Proch Procner Proczek Prodan Prokopczuk Prokopiak Prokurat Pronobis Prostak Proszek
    Proszowska Proszowski Protas Protasiewicz Protasiuk Protsyk Proć Pruchnicka Pruchnicki Pruchnik Prusek
    Prusinowska Prusińska Prusiński Pruska Pruszak Pruszkowska Pruszkowski Prygiel Pryk Prymak Prymas
    Pryszcz Prytula Przebinda Przeklasa Przekop Przekwas Przeliorz Przeniosło Przesmycka Przewoźna
    Przewoźniak Przewłocka Przewłocki Przewłoka Przeździecka Przeździecki Przyborek Przybysławska
    Przybysławski Przybyłko Przybyś Przychodzień Przychodzka Przychodzki Przydział Przygocka Przygocki
    Przymuszała Przystał Przystupa Przyszlak Przyłucka Przyłucki Próchnicka Próchnicki Prędka Prędki
    Pszczółka Pszonak Pszonka Ptok Puc Puch Puchta Puciłowski Puczyńska Puda Pudełek Pudlik Puhach Puka
    Pukas Pulit Pupek Pura Purgal Purgał Purol Purtak Purzycka Purzycki Pustuła Pustułka Puszcz Put Putek
    Puton Puzdrowska Puzdrowski Puzik Puła Pułka Puścian Puźniak Pyc Pyclik Pydych Pylypiv Pypeć Pyrkosz
    Pyrz Pysarenko Pysiak Pyszczek Pyszka Pyszniak Pyszny Pytko Pytlarczyk Pytlos Pyza Pyziak Pyć Pyś Pyśk
    Półrolniczak Pęciak Pęczak Pędrak Pędzik Pęk Pękalska Pękalski Pęksa Pępek Płatos Pławecka Pławecki
    Pławiak Płecha Płocharczyk Płochocka Płochocki Płocica Płocka Płodzień Płomińska Płomiński Płoska Płoski
    Płowiec Płuska Pływacz Płócienniczak Raba Rabczak Rabiej Rachel Rachuba Rachwalik Rachwalska Rachwalski
    Raciborska Raciborski Racka Racki Raczak Raczkiewicz Radchuk Radka Radke Radkowska Radkowski Radlak
    Radlińska Radliński Radoła Radziewicz Radzimska Radzimski Radzio Radzioch Radziwon Radzka Radzki
    Radłowska Radłowski Rafa Rafacz Rafał Rafałko Ragus Rahman Rai Rajch Rajchert Rajczak Rajda Rajek
    Rajkowska Rajman Rajtar Rajzer Rakowicz Rakus Ramotowska Ramotowski Ramus Ramza Rana Raniszewska
    Raniszewski Rapa Rasała Rasińska Rasiński Raszkiewicz Ratajska Ratajski Ratka Ratkowska Ratkowski Rau
    Razik Raźniak Raźny Reczko Redko Redzik Regiec Reichel Reichert Reimann Reinert Reiter Rejdych Rejek
    Rejmak Rejmer Rekus Reluga Rembacz Remus Repeć Resiak Reszczyński Reszke Reva Rezler Rezmer Reznichenko
    Rećko Riedel Ring Ritter Robakowska Robakowski Robaszkiewicz Roch Rochowiak Roczniak Roda Rode Rogacz
    Rogaczewska Rogaczewski Rogal Rogalewicz Rogalińska Rogaliński Rogińska Rogiński Rogosz Rogoża Rogula
    Rogut Roj Rok Rolak Rolbiecka Rolbiecki Rolek Romaniec Romaniszyn Romaniv Romankiewicz Romanko Romanov
    Romaszko Romejko Romek Rompa Ropiak Rorat Rosada Rosak Rose Rosikoń Roskosz Rosołek Rosołowska
    Rosołowski Ross Roszkiewicz Roszko Rosłan Rosłoniec Roter Rother Rowicka Rowicki Rozhko Rozmarynowska
    Rozmarynowski Rozpara Rozumek Rozynek Roś Rubacha Rubaj Rubak Rubik Rucka Rucki Rud Rudak Rudko
    Rudkowska Rudkowski Rudowicz Rudowska Rudowski Rudyi Rudziewicz Rudzik Rugała Rumak Ruman Rumian Rumin
    Rupik Rupińska Rupiński Rurarz Rurka Rusiniak Rusnarczyk Rusu Ruszała Ruszczyńska Rut Rutana Rutecka
    Rutecki Rybaczek Rybaczuk Rybakowska Rybakowski Rybalka Rybalko Rybarska Rybarski Rybska Rybski Rybus
    Rychcik Rychlak Rychlińska Ryczko Ryczkowska Ryczkowski Rydzik Rydzyńska Rydzyński Ryfa Ryguła Ryk
    Rykaczewska Rykaczewski Ryl Rylska Rylski Rymar Rymarowicz Rymer Ryszewska Ryszewski Ryszkiewicz
    Ryszkowska Ryszkowski Ryńska Ryński Rzeczkowska Rzeczkowski Rzepczyńska Rzepczyński Rzepkowska
    Rzepkowski Rzeszowska Rzeszowski Rzeszut Rzeszutko Rzewuska Rzewuski Rzeźnicka Rzeźnicki Rzeźniczek
    Rzodkiewicz Rząca Rząd Rządkowska Rządkowski Różak Różewicz Różyńska Różyński Rączkowska Rączkowski
    Rębiś Sabak Sabała Saczuk Sadecka Sadecki Sadek Sadlak Sadlik Sado Sadoch Sadownik Sadowy Sadura
    Sadurska Sadurski Sady Sadza Sadzik Sadłocha Sadłoń Saganowska Saganowski Saienko Sajda Sajnóg Sakhno
    Sakwa Salach Salachna Salamończyk Salata Salawa Saletra Salo Salwin Samchuk Samiec Samociuk Samolej
    Samoraj Samulak Sander Sanecka Sanecki Sanetra Sankiewicz Sankowska Sankowski Sanocka Sanocki Sapa
    Sapała Sapeta Sapieja Sapińska Sapiński Sar Saran Sarapata Sarkowicz Sarnacka Sarnacki Sarniak Sarosiek
    Sarota Sasak Sass Satora Satława Savchyn Savenko Savka Savytska Sawczak Sawińska Sawiński Sałacińska
    Sałaciński Sałbut Sałuda Schiller Scholz Schreiber Schroeder Schröder Schubert Schwarz Seget Seifert
    Sekulska Sekulski Selwa Semchuk Semczuk Semenchuk Semenenko Semenov Semenowicz Semik Semla Semrau
    Senator Sendor Senger Seniuk Senyk Serafinowicz Serafińska Serafiński Serbin Serediuk Seredyńska
    Seredyński Seremet Sergiel Serkowska Serkowski Seroczyńska Seroczyński Serowik Serwach Serzysko Setlak
    Seweryniak Shah Shapovalov Shcherba Shcherbakova Shcherban Shchur Shelest Shepel Sheremet Sheremeta
    Shevchyk Shevtsov Shevtsova Shrestha Shuliak Shved Shyian Shylo Shynkarenko Siarkiewicz Siatka
    Siatkowska Siatkowski Sibiga Sibińska Sibiński Siciarz Sicińska Siciński Sidło Siebert Siecińska
    Sieciński Sieczko Siedlik Sieg Siejak Siekacz Siekierka Sielawa Sielicka Sielicki Siembab Siemek
    Siemianowska Siemianowski Siemieńczuk Siemion Siemiątkowska Siemiątkowski Sieniawska Sieniawski Sienicki
    Siennicka Siennicki Siepka Sieracka Sieracki Sieradzan Siergiej Sierka Sierocka Sierocki Sierota
    Sierpień Sierpińska Sierpiński Sierzputowska Sierzputowski Sierżant Sierżęga Siewert Siewiera Siewruk
    Sieńkowska Sieńkowski Sikoń Simińska Simiński Siodłak Sionek Sioła Sip Sipa Sirenko Sirko Siry Sito
    Siudek Siudy Siudzińska Siuzdak Siwa Siwczak Siwczyk Siwicka Siwicki Siwka Siwko Skakun Skalik Skalny
    Skarzyńska Skarzyński Skałecka Skałecki Skałka Skibicka Skibicki Skibniewska Skibniewski Skiepko
    Skierska Skierski Skliar Skobel Skocz Skoczyńska Skoczyński Skok Skolik Skolimowski Skomra Skonieczka
    Skopek Skorupińska Skorupiński Skotarczak Skotarek Skotniczny Skowera Skowyra Skraba Skrobacz Skrobol
    Skrobot Skrypka Skrzecz Skrzypa Skrzypacz Skrzypczyńska Skrzypczyński Skrzypińska Skrzypiński
    Skrzypkowska Skrzypkowski Skubała Skulska Skulski Skup Skupin Skupińska Skupiński Skwarczyńska
    Skwarczyński Skwierawska Skwierawski Skwierczyńska Skwierczyński Skyba Skórzewska Składanek Skłodowski
    Sliusar Slobodianiuk Smagacz Smagała Smajdor Smak Smalec Smardz Smardzewski Smaza Smeja Smela Smentek
    Smirnov Smoczyk Smoczyńska Smoczyński Smolarska Smolarski Smolec Smoleńska Smoleński Smolka Smolnik
    Smolorz Smorąg Smuda Smulska Smulski Smusz Smykała Smykla Smykowska Smykowski Smyl Smyrak Snarska
    Snarski Snela Sobania Sobaszek Sobiegraj Sobieszczyk Sobień Sobisz Sobiło Sobkiewicz Sobko Sobków
    Sobolak Sobstyl Sobuś Sochaj Sochan Sochoń Socik Soczewka Soczówka Sojda Sokol Sokolenko Sokolovska
    Sokolovskyi Sokulska Sokulski Sokólska Sokólski Sola Solarska Solarski Solich Solis Solnica Soloviov
    Soloviova Solska Solski Soltys Soluch Sommer Sommerfeld Sorbian Sornat Soroczyński Sorokin Sorokina
    Soroko Soska Sosnówka Sot Sowała Sowik Sowula Sołoducha Sołtan Sołtysek Sośniak Sośnicka Sośnicki Spadło
    Spaleniak Spisak Spivak Sporek Sporysz Sprycha Spychaj Spytek Spławska Spławski Sroczyk Srokosz Stabryła
    Stachelek Stachewicz Stachniak Stachula Stachów Staciwa Stadler Stadnicka Stadnicki Stajniak Stalka Stan
    Stanclik Stando Stanecka Stania Stanicka Stanicki Staniczek Staniewicz Staniewska Staniewski
    Stanisławiak Staniucha Stano Stanowski Stanuch Stanula Stanulewicz Starek Stark Starmach Starostka
    Starościak Startek Staruch Staręga Stasica Stasiowska Stasiowski Stawczyk Stawinoga Stańco Stańdo
    Stańska Stański Staśko Staśkowiak Stebel Steciuk Steckiewicz Stecko Stecyk Steczek Stefankiewicz Steinke
    Stelmasiak Stempel Stempin Stempniak Stenzel Stepanov Stepnowska Stepnowski Sterna Steuer Stiller
    Stobiecka Stobiecki Stochaj Stochel Stocka Stocki Stodolny Stodulska Stodulski Stoian Stojanowska
    Stojanowski Stokowiec Stokowski Stola Stolecka Stolecki Stoliar Stoliarchuk Stolorz Stoltman Stoltmann
    Stopiński Storozhuk Stoszek Stołowska Stołowski Stoń Stranc Straszak Straszewska Straszewski Strawa
    Stroińska Stroiński Stroka Strugarek Strus Struska Struski Strużyna Strychalska Strychalski Stryjek
    Stryjewska Stryjewski Strzeszewska Strzeszewski Strzoda Strządała Strzępka Strójwąs Stróż Stróżyńska
    Stróżyński Stuchlik Student Studniarek Studniarz Studnicka Studnicki Stuglik Stus Stwora Stygar Styk
    Styn Stypka Stypułkowska Stypułkowski Styrna Stănescu Stąpor Stąpór Stęchły Stępak Stępka Such Sucharska
    Sucharski Suchenek Suchojad Suchomska Suchomski Suchora Suchoń Suchta Suda Sudak Sudnik Sudół Sugier
    Sujecka Sujecki Sulich Sulińska Suliński Sulkowska Sulkowski Sulowska Sulowski Sumińska Sumiński Supera
    Supernak Supeł Supińska Supiński Sura Surdel Surdyk Surdyka Surmai Surman Surmiak Sury Surzyn Susek
    Sushko Suszka Suszko Suszyńska Suszyński Susło Sut Sutkowska Sutkowski Suwaj Suwalska Suwalski Svystun
    Swacha Swaczyna Syc Sygut Sykała Sykut Syldatk Symonenko Symonowicz Synak Synytsia Sypek Sypuła Syroka
    Sysak Sysło Sytnyk Syty Szabelska Szabelski Szablak Szachniewicz Szafarz Szafraniak Szaj Szajda Szajek
    Szajner Szalast Szambelan Szaniawska Szaniawski Szaraniec Szarata Szarejko Szaro Szarpak Szaruga Szarzec
    Szarzyńska Szarzyński Szatko Szawara Szałajko Szałankiewicz Szałata Szałańska Szałański Szałkiewicz
    Szczap Szczawińska Szczawiński Szczechura Szczegielniak Szczepan Szczerbak Szczerbiak Szczerbik Szczerek
    Szczesiak Szczesna Szczesny Szczodrowska Szczodrowski Szczot Szczuchniak Szczucka Szczukiewicz
    Szczurowska Szczurowski Szczygłowska Szczygłowski Szczykutowicz Szczypczyk Szczypiński Szczypta
    Szczęsnowicz Szeja Szeluga Szelągowska Szelągowski Szemraj Szeszko Szetela Szkarłat Szkatuła Szklarek
    Szkodzińska Szkodziński Szkopek Szkoła Szkup Szkwarek Szlachcic Szlufik Szlązak Szmagaj Szmaj Szmajduch
    Szmalec Szmelter Szmid Szmigielska Szmigielski Szmytka Sznura Szok Szoka Szopińska Szopiński Szorc
    Szostakiewicz Szostok Szotek Szott Szołdra Szpala Szpiech Szpilka Szpot Szpyra Szpyrka Szpyt Szpytma
    Szram Szrama Szramka Sztuba Sztuczka Sztuk Sztukowska Sztukowski Szturc Szubart Szubryt Szudrowicz
    Szukalska Szukalski Szulczewska Szulczewski Szulczyk Szulim Szulist Szulińska Szuliński Szulta Szumacher
    Szuman Szumiec Szumielewicz Szumiło Szumińska Szumiński Szumna Szumny Szumowska Szumowski Szuper Szurlej
    Szustakiewicz Szwaba Szwaj Szwajca Szwajkowska Szwajkowski Szwałek Szwec Szwej Szwiec Szyba Szybka
    Szychowska Szychowski Szychta Szyda Szyguła Szyja Szyjka Szykuła Szylar Szyma Szymajda Szymaniec
    Szymaniuk Szymała Szymańczak Szymeczko Szymendera Szymkowicz Szymkowska Szymków Szymocha Szymonek
    Szyndler Szyper Szypulska Szypulski Szywała Szóstak Szłapa Szłapka Sączawa Sądel Sędek Sędzik Słaba
    Sładek Słapek Sławska Sławski Słoboda Słobodzian Słodczyk Słodkowska Słodkowski Słodownik Słodyczka
    Słoka Słomczewski Słomczyńska Słomczyński Słomiany Słomkowski Słonka Słowiak Słoń Sługocka Słupik Słyk
    Tabisz Tabiś Taciak Taczała Tadeusiak Tadla Tadych Tanaś Tarach Taranek Taranenko Tarapata Taraska
    Tarasov Tarasova Targowski Tarnawa Tasak Tasarz Tasior Tatarczak Tatarczuk Tatarczyk Tatarynowicz Taylor
    Tazbir Tałaj Tańcula Tekiela Telesz Telka Telus Tenerowicz Teodorowicz Tercjak Terelak Tereshchuk Terka
    Terlikowska Terlikowski Teska Teslenko Teter Teterycz Thapa Tiutiunnyk Tober Tobolska Tobolski Tobor
    Toborek Toczko Tokaj Tokarchuk Tolak Toma Tomaka Tomal Tomalik Toman Tomaszuk Tomczyszyn Tomecka Tomecki
    Tomera Tomicka Tomicki Tomkowicz Tomków Tomoń Tomsia Tomys Tomzik Tonder Tondera Topczewska Topczewski
    Topka Topolewska Topolewski Toporowska Toporowski Torbus Torchała Tosik Tota Towarek Tołoczko Toś Trach
    Trachuk Trajdos Trawczyńska Trawka Trefon Trepczyk Trochim Trochimiak Trochimiuk Trochimowicz Trocka
    Trocki Troczyńska Troian Trojanek Trojanowicz Troka Tronina Troszczyńska Troszczyński Troć Truchel Trush
    Truszczyńska Truszczyński Truty Trybała Trybek Tryc Tryka Trzcionka Trzebiatowska Trzebiatowski
    Trzebińska Trzebiński Trzebuniak Trzepizur Trześniewska Trześniewski Trzmiel Trzos Trzpil Trzpis Trąbka
    Trębicka Trębicki Tsaruk Tsurkan Tsymbal Tucholska Tucholski Tuleja Tumiłowicz Tupaj Turaj Turchyn
    Turczyk Turczyńska Turczyński Turko Turkowska Turkowski Turlej Turoń Turyk Tusińska Tusiński Tusk Tuz
    Tuzimek Tverdokhlib Twardoch Twardosz Tworkowska Tworkowski Tybura Tyburczy Tyczka Tylec Tylenda Tylicka
    Tylicki Tylkowska Tylkowski Tylman Tylus Tylutki Tyma Tymchuk Tymczyszyn Tymkiv Tyniec Tyrakowska
    Tyrakowski Tyszer Tytarenko Tytko Tywoniuk Tórz Tęczar Tłuczek Ubysz Ucińska Uciński Ufnal Ufniarz
    Ukrainets Ulanowska Ulanowski Ulbrich Ulewicz Ulfik Uliczka Ulińska Ulrich Ulrych Urbanowski Uroda
    Urynowicz Usarek Usenko Uss Ustymenko Usyk Uszko Uszyńska Uszyński Uzar Uziębło Uznańska Uznański
    Ułanowicz Vakulenko Varga Vashchenko Vashchuk Vasylchenko Vasylchuk Vasyliev Vasyliuk Vasylyk Vasylyshyn
    Vdovychenko Vlasov Vlasova Vogel Vogt Voitenko Voitiuk Volynets Vorobei Vorobets Vorobiov Vorobiova
    Vorona Vozniak Vu Vynnyk Vyshnevska Vysotska Vũ Wabik Wac Wacław Wacławiak Wacławska Wacławski Wajer
    Wakuła Walat Walczewska Walczewski Walczyńska Walczyński Waldon Walecka Walecki Walenciak Walencik
    Walenda Walendziak Walentowicz Walentynowicz Walerowicz Waligórska Waligórski Waliłko Walkosz Waloch
    Walocha Waloszczyk Waloszek Waluk Walukiewicz Walusiak Wandas Wanke Waraksa Wardach Wardzała Wardziak
    Wardzińska Wardziński Warmbier Warmińska Warnke Warowny Warpas Warszawska Warszawski Warwas Warzybok
    Warzycha Warzyńska Warzyński Wasiewicz Wasil Wasilewicz Wasiuk Wasińska Wasiński Wasyluk Wasylów
    Waszczak Waszczyk Waszkowiak Wasążnik Watoła Wawoczny Wawrowska Wawrowski Wawruch Wawryk Wawryszuk
    Wawrzaszek Wawrzeńczyk Wawrzkiewicz Wawrzonek Wawrzyn Wawrzynkiewicz Wawrzyńczyk Wawrzyńska Wawrzyński
    Wawszczyk Wałaszek Wałczyk Wałek Wałęsa Wańkowicz Waśniowska Waśniowski Ważna Wdowik Weiner Weinert Weis
    Welc Welenc Wenc Wenda Wenzel Wereda Weremczuk Weremko Wereszczyńska Wereszczyński Wernik Werra Westfal
    Weszka Wełniak Wiaderek Wiaderny Wiak Wiatrzyk Wichary Wicherek Wichert Wichowska Wichowski Wichrowska
    Wichrowski Wichłacz Wiciak Widawska Widawski Wideł Widlarz Widomska Widomski Widła Widłak Wiechowska
    Wiechowski Wieczerzak Wieja Wiekiera Wielgat Wielgo Wielińska Wieliński Wielocha Wielogórska Wielogórski
    Wiencek Wiercigroch Wierdak Wiertel Wiertelak Wierzchoń Wiese Wiesiołek Wiesner Wietrzyk Wietrzykowska
    Wietrzykowski Wiewiórka Wikiera Wiktorek Wiktorowska Wiktorowski Wiktorska Wiktorski Wiktorzak Wikło
    Wilamowska Wilamowski Wilkos Williams Wilma Wilman Wincenciak Windak Winek Winiecka Winiecki Winkel
    Winkowska Winkowski Winnik Wiosna Wira Wiraszka Wisz Wisła Witan Witecka Witecki Witka Witko Witkowicz
    Witkoś Witoszek Witoń Wittbrodt Witulska Witulski Wituła Witwicka Witwicki Wiza Wizner Więcko Więcławek
    Więcławska Więcławski Więsek Więzik Wińska Wiński Wiśnik Wlazły Wlaź Wlaźlak Wlizło Wnorowska Wnuczek
    Wnukowska Wnukowski Wnętrzak Wochna Wochnik Wocial Woda Wodecka Wodecki Wodnicka Wodnicki Wodniok
    Wojciuk Wojczuk Wojdyga Wojdyna Wojewodzic Wojewódka Wojniak Wojnicka Wojnicki Wojnicz Wojsa Wojsław
    Wojtach Wojtacha Wojtaczka Wojtalewicz Wojtalik Wojtania Wojtanowicz Wojtanowska Wojtanowski Wojtarowicz
    Wojtasiewicz Wojtaszak Wojtczuk Wojtczyk Wojtecka Wojtecki Wojteczek Wojtek Wojtera Wojtiuk Wojton
    Wojtulewicz Wojtusiak Wojtuń Wojtynek Wojtyś Wolańczyk Wolicka Wolicki Wons Worach Woroch Woroniecka
    Woroniecki Woronko Worwa Wosiak Wosiek Woszczak Woszczek Wosztyl Wota Wowra Wołczyńska Wołczyński
    Wołkowicz Wołodźko Wołoszczuk Wołoszyk Wołowska Wołowski Wośko Woźniczko Wrochna Wroniak Wronkowska
    Wronkowski Wronowska Wronowski Wrześniewska Wrześniewski Wrzyszcz Wróż Wrąbel Wręczycka Wręczycki
    Wszelaki Wszoła Wtorek Wtulich Wu Wudarczyk Wujec Wycech Wyciszkiewicz Wyciślik Wyderka Wydmuch Wydrych
    Wydrzyńska Wydrzyński Wygoda Wykrota Wykręt Wykurz Wylężek Wypchło Wypiór Wyroba Wyroślak Wyrwał Wyrwich
    Wyrębek Wyskiel Wysmyk Wysoczańska Wysoczański Wysogląd Wysota Wyszkowska Wyszkowski Wyszomierska
    Wyszomierski Wytrwał Wywiał Wyłupek Wódka Wójt Wądrzyk Wąsacz Wąsala Wąsek Wąsiewicz Wędrychowicz Węgier
    Węgierek Węglewska Węglewski Węglińska Węgliński Węgrzyk Węgrzynek Węgrzynowicz Węgrzynowska
    Węgrzynowski Węgłowska Węgłowski Węsierska Wężyk Władyka Włodkowska Włodkowski Włodyka Włoszek Włóka Xu
    Yakovlieva Yakymchuk Yanchuk Yarema Yaremenko Yarmoliuk Yarosh Yarova Yashchenko Yashchuk Yatsiuk
    Yavorskyi Ye Yefimenko Yehorova Yemets Yeremenko Yermolenko Yeromenko Yevtushenko Yildirim Yildiz Yilmaz
    Yu Yurchuk Yushchenko Yuzepchuk Zaborek Zaborniak Zabłotna Zabłotny Zach Zacharczuk Zacharek Zacharewicz
    Zackiewicz Zaczkiewicz Zadka Zadorozhna Zadorozhnyi Zadworna Zadworny Zadykowicz Zagaja Zagajewska
    Zagajewski Zagata Zagozda Zagożdżon Zagrajek Zagrodnik Zagrodzka Zagrodzki Zaguła Zaichenko Zaika
    Zaitsev Zajko Zakharov Zakharova Zakowicz Zalech Zalega Zaleśny Zambrzycka Zambrzycki Zamiara Zamora
    Zamorska Zamorski Zander Zaniewicz Zaorska Zaorski Zapalska Zapalski Zapał Zapaśnik Zapert Zapiór
    Zapolska Zapolski Zapora Zaporozhets Zapotoczna Zapotoczny Zaranek Zaraś Zarzeczna Zarzeczny Zaród
    Zasadni Zastawna Zastawny Zasępa Zator Zaucha Zawal Zawalich Zawalska Zawalski Zawartka Zawiasa
    Zawodniak Zawodnik Zawodny Zawora Zaworski Zawłocka Zawłocki Załuski Załęcka Załęcki Zań Zbiciak
    Zblewska Zblewski Zbroszczyk Zbrożek Zbrzeźniak Zbróg Zbylut Zdancewicz Zdebel Zdobylak Zdonek
    Zdrodowski Zdrzałek Zdziarska Zdziarski Zdziebko Zdziebło Zegadło Zegan Zegar Zelent Zelinska Zemanek
    Zembrzuska Zembrzuski Zemlik Zera Zgierska Zgierski Zglińska Zgliński Zgoła Zgraja Zgódka Zhao Zhou
    Zhukov Zhukova Zhuravlova Ziajka Ziarek Ziarkowska Ziarkowski Ziarno Ziegert Ziegler Zieleń Zielke
    Ziemak Ziemann Ziembicka Ziembicki Ziemianek Ziemiańska Ziemiański Ziemska Ziemski Zieniewicz Zimmer
    Zimmermann Zimniak Zimowski Zinchuk Ziniewicz Zinkiewicz Ziober Ziobrowska Ziobrowski Ziora Zięciak
    Zięcik Ziętal Ziętkiewicz Zmarzły Zmitrowicz Zmysłowska Zmysłowski Zmyślona Zmyślony Znojek Zok Zontek
    Zubik Zubowicz Zuchowicz Zugaj Zuziak Zvarych Zwara Zwardoń Związek Zwolska Zwolski Zybura Zydroń Zyga
    Zygmuntowicz Zyguła Zys Zyzak Zyzik Ząbkiewicz Zębik Zęgota Złoch Złotek Złotkowska Złotkowski Złotnik
    Ćmiel Ćwierz Ćwirko Ćwiąkała Łabaj Łabno Łabuś Łabęcka Łabęcki Łacek Łachacz Łachut Łacina Łacny Ładniak
    Ładziak Łagodzińska Łagodziński Łagosz Łagódka Łakatosz Łakomska Łakomski Łakota Łangowska Łangowski
    Łapaj Łapeta Łapot Łasak Łasica Łasiński Łaskawiec Łasocha Łaszcz Łaszczyk Łaszewska Łaszewski Łataś
    Ławecka Ławecki Ławicka Ławicki Ławniczek Łazarek Łazarewicz Łazowska Łazowski Łempicka Łempicki Łepek
    Łepkowska Łepkowski Łobacz Łobodzińska Łobodziński Łodej Łokaj Łokietek Łoniewska Łoniewski Łopacińska
    Łopaciński Łopuszyńska Łopuszyński Łosiak Łosińska Łosiński Łowicka Łowicki Łozowska Łozowski Łubińska
    Łubiński Łubkowska Łubkowski Łucki Łuckiewicz Łuczaj Łuczka Łuczkowska Łuczkowski Łuczyk Łudzik
    Ługiewicz Łukasiuk Łukasz Łukowiak Łuksza Łupina Łusiak Łuszczyk Łyczek Łyczkowska Łyczkowski Łydka
    Łyjak Łyp Łysy Łyszcz Łyś Łój Łącz Łączak Łączna Łączny Łączyńska Łączyński Łągiewka Łągwa Łęczycka
    Łęczycki Łęgowik Ścibek Ścibisz Ściebura Ścieszka Ścisłowicz Ścisłowska Ścisłowski Ślazyk Ślebioda
    Śleboda Śledziewska Śledziewski Śledzik Śledzińska Śledziński Ślemp Ślipek Ślipko Śliwiak Śliwowska
    Śliwowski Śliz Ślubowska Ślubowski Śmiałkowska Śmiałkowski Śmiechowicz Śmiechowska Śmiechowski Śmierciak
    Śmietańska Śmietański Śnieg Śnieżko Śnioch Średzińska Średziński Świadek Świat Światłowska Światłowski
    Światłoń Świdzińska Świdziński Świeczak Świeczkowska Świeczkowski Świerczyna Świergiel Świerkosz
    Świerkowska Świerkowski Świerszcz Świerżewska Świetlicka Świetlicki Świrska Świrski Świstek Świszcz Świt
    Świć Święcki Święty Źrebiec Żabierek Żabka Żach Żaczkiewicz Żakiewicz Żal Żarczyńska Żarczyński
    Żarnowska Żarnowski Żarska Żarów Żelasko Żelazek Żelazo Żelechowska Żelechowski Żelichowska Żelichowski
    Żero Żmija Żmudzińska Żmudziński Żmudzka Żmudzki Żogała Żołnierczyk Żołnowska Żołnowski Żołyniak
    Żołądkiewicz Żuberek Żuchowicz Żuczek Żugaj Żukiewicz Żurawik Żybura Żychowska Żychowski Życińska
    Życiński Żylińska Żyliński Żymełka Żynda Żyto Żywczak Żywica Żywiec Żórawska Żórawski Żółkiewicz
    Żłobińska Żłobiński
  `],
  [1100, `
    Abbas Abdullaev Abel Abraham Abramchuk Abramov Abramova Abratkiewicz Adamchuk Adameczek Adamenko
    Adamkowska Adamkowski Adams Adamusiak Adasiewicz Aderek Adhikari Adwent Afanasiev Afanasieva Affek
    Agaciak Alam Alama Albiniak Albińska Albiński Albrycht Alchimowicz Aleksandrov Aleksieieva Aleksiejczuk
    Aleksiuk Alieksieienko Alieksieiev Alieksieieva Alieva Aliieva Ambroszczyk Ambroziewicz Andersen
    Andersson Andersz Andraka Andrasz Andreichuk Andreiev Andreieva Andrejuk Andrieiev Andriushchenko
    Andruchów Andruczyk Andrulewicz Andrusiewicz Andrych Andryszak Andryszczak Aneszko Angel Angowska
    Anielak Aniołek Anisimova Anklewicz Antecka Antecki Antkowicz Antoniewska Antoniszyn Antonkiewicz
    Antoszczyk Antoszczyszyn Antoszek Antoszkiewicz Anusiewicz Anuszewska Anuszewski Apolinarska Arabasz
    Arak Arasimowicz Arciuch Arczewska Arczewski Arczyńska Arendarska Arendarski Arkuszewska Arkuszewski
    Arseniuk Arslan Artemiuk Artiukh Aslan Asman Ast Ataman Atłas August Augustyńska Augustyński Aydin
    Babiarczyk Babiichuk Babisz Babiuk Babraj Babska Babski Babut Bac Bachleda Bachman Bachorska Bachorski
    Bachorz Bachowska Bachowski Bachta Bachul Bachynska Bachórz Bacior Bacza Bacławska Bacławski Badach
    Badek Badocha Badurek Badziak Badziąg Badzińska Badziński Bagan Bagniuk Bagłaj Bahrii Bai Bajera Bajger
    Bajno Bajsarowicz Bajszczak Bakaj Bakowicz Balaban Balasa Balawajder Balcar Balcarek Balcerowiak
    Balcerowicz Balcerzyk Baldy Balewski Baliuk Ball Balsam Baluta Balwierz Bambynek Banachowska Banachowski
    Bandrowska Bandrowski Bankiewicz Banul Baracz Baranchuk Baranovskyi Barańczuk Barcicka Barcicki
    Barcińska Barciński Barczykowska Barczykowski Bardadyn Bardzik Bardzińska Bardziński Barlik Barnach
    Barszczyk Barteczka Bartelik Bartko Bartniak Bartniczak Bartnikowska Bartnikowski Bartol Bartoszcze
    Bartołd Bartula Bartusik Bartuzi Bartyla Bartłomiejczak Barwacz Barwicka Barwicki Barwik Barwinek
    Barylak Barys Barysz Baryłka Barzowski Basek Basiewicz Baska Bassa Bastian Bastrzyk Baszczyńska
    Baszczyński Baszkiewicz Baszyńska Baszyński Batiuk Batkiewicz Batkowska Batog Batorowicz Batorski Batory
    Batyra Bauman Bauza Bawor Bayer Bazak Bazarnik Bazyl Bazylczuk Bać Bałabuch Bałaga Bałchan Bałuch Bałuk
    Bańczak Bańdo Bańska Bański Baścik Bebak Bebel Becela Bechta Becmer Beczała Beda Bedla Bednarkiewicz
    Bedra Bedyk Begier Behnke Bejda Beling Belniak Belska Belski Ben Benisz Benke Bensz Ber Bereska
    Berezhnyi Berezovskyi Bereźnicka Bereźnicki Bergier Bergmann Berka Berkowska Berkowski Berlik Bernad
    Berndt Berner Berska Beszczyńska Beszczyński Besztak Betcher Bethke Betlejewska Betlejewski Bevz
    Bezkorovaina Bezubik Bełkot Beń Beńko Bhandari Biadacz Biadun Biarda Biazik Biało Białobrzewska
    Białobrzewski Białoskórska Białoskórski Białota Białończyk Białucha Biber Bichta Biczyk Biedak Biedrawa
    Biega Biegalska Biegalski Bieganowska Bieganowski Biegus Bielan Bielarz Bielaszewska Bielaszka
    Bielatowicz Bielenda Bielesz Bieliaieva Bielka Bielova Bieniecka Bieniecki Biernaczyk Bierońska
    Bieroński Bierut Bieryt Bieryło Bierówka Bierła Biesiadecka Biesiadecki Bieszk Bigas Bijata Bijok Bilash
    Bilecka Bilecki Bilenko Biliak Bill Bilokon Bilousova Bindas Biniak Biniaś Biniecka Biniecki Binienda
    Biolik Birecka Birecki Biriukova Biruk Bisek Biskupek Biszczak Bizior Bizub Biłek Biłka Biłyk Blachowska
    Blachowski Blachura Blada Bladosz Blajer Blaszka Blaszke Blat Blatkiewicz Blazhko Blecharczyk Blitek
    Bliźniak Bluj Blukacz Blum Bluma Boberek Bobkiewicz Bobowik Bobrek Bobruk Bocek Boch Bochenko Bochra
    Bochynek Bocianowska Bocianowski Bociąga Bock Bocoń Bodnaruk Bodura Bodurka Bodzek Bodziak Bodzon
    Bogatek Bogdanik Bogiel Bogulak Bogusiak Boguszewicz Bogusław Bohach Bohdanov Bohdziewicz Boho Boiarchuk
    Boińska Boiński Bojara Bokuniewicz Bolanowska Bolanowski Bolibok Bolik Bollin Bombik Bonder Boniek Bonik
    Bonikowska Bonikowski Bonin Bonio Bonna Boral Borczuch Boreczek Borgosz Borko Borodin Borodina Borovets
    Borovska Borońska Boroński Borshch Borska Borski Borszcz Bortel Bortnowski Bortnyk Boruszewska
    Boruszewski Boryca Boryś Borzymowska Borzymowski Bosiacka Bosiak Bosy Boszczyk Botwina Boyko Boćkowska
    Boćkowski Bołtryk Bożejewicz Bożym Bracik Bradtke Brak Brambor Braszka Brańska Brański Braś Brdak
    Breczko Breitkopf Brej Brela Brenk Breska Brewczyńska Brewczyński Brociek Brodala Brodecka Brodecki
    Brodnicka Brodnicki Broja Brola Broll Bronakowski Bronder Bronicka Bronicki Broniewicz Bronowska
    Bronowski Broszko Brovko Browarska Browarski Brońska Brożyńska Brożyński Bruch Bruder Brudz Brudzińska
    Brudziński Brudzyńska Brudzyński Brudło Brunka Brusiło Bruszewska Bruszewski Brycki Bryg Brygier
    Brylewska Brylewski Brylińska Bryliński Bryll Brylska Brylski Brynda Bryniak Bryniarska Bryniarski
    Brysiak Bryska Bryzik Brzana Brzeszcz Brzezik Brzezinka Brzezowska Brzezowski Brzostowicz Brzozowiec
    Brzuchacz Brzuszek Brzyszcz Brząkalik Brzęcka Brzęcki Brączek Bręk Bubacz Bubała Bublyk Buchacz
    Buchalska Buchalski Buchała Buchcic Buchcik Buchert Buchko Buchman Buchowska Bucoń Budak Budasz Budko
    Budkowska Budkowski Budnicka Budnicki Budynek Budyta Budzan Budziosz Budzowska Budzowski Buga Bugajczyk
    Bugajewska Bugajna Bugajny Bugalska Bugalski Buganik Buhai Buhaichuk Buhaienko Bui Bujakiewicz
    Bujakowska Bujakowski Bujanowska Bujanowski Bujara Bujała Bujek Bujnik Bujoczek Bujwid Bukalska Bukalski
    Buko Bukowy Bul Bulakh Bularz Bulenda Bulicz Bulka Bulla Buller Bulska Bulski Bundyra Buniak Buraczewska
    Buraczewski Buraczyńska Buraczyński Burakiewicz Burandt Burba Burchart Burcon Burczy Burdak Burdek
    Burdon Burdziak Burdzik Burdzińska Burdziński Burka Burko Burliga Bursztynowicz Burzak Burzyk Buszek
    Butko Butler Butowska Butowski Buzała Buzuk Bułaś Buźniak Byczyk Byczyńska Byk Bykov Bykova Bylak
    Bylicka Bylicki Bylinka Bylińska Byliński Byrdy Byrtek Bysiek Bystry Byszewska Byszewski Bytomska
    Bytomski Bzdyl Bzdyra Bzura Bójko Böhm Bùi Bąbała Bąbik Bąbka Bącal Bącela Bącik Bączyńska Bączyński
    Bąkała Bąkowicz Bębas Bęc Bęczkowski Błachowiak Błachuta Błahut Błajda Błaszczyszyn Błaszczyński
    Błaszków Błazik Błaś Błażejowska Błażejowski Błażkiewicz Błochowiak Błoszyk Błotko Błąd Cabak Cach
    Calińska Caliński Capar Capek Capiga Car Całek Cebotari Cebrat Cech Cedzidło Cegieła Cegliński Cejmer
    Celarek Celejewska Celejewski Celer Celka Cembala Cempel Cena Cendrowicz Cepa Cepak Cerazy Cerek
    Ceremuga Cetnar Cetnarowska Cetnarowski Chaberska Chaberski Chabiera Chabiniak Chabrowska Chabrowski
    Chachulska Chachulski Chadryś Chaikovska Chaikovskyi Chalecka Chalecki Chamielec Chamot Chanas Chara
    Charko Charkot Charyton Charzewska Charzewski Charzyńska Charzyński Charęza Chaudhary Chałas Chałat
    Chałupa Chałupczak Chałupniczak Chałupnik Chańko Chciuk Cheban Chebotar Chechelska Chechelski Chechłacz
    Cheda Chekh Chemerys Chepil Cherednychenko Cherkas Cherkashyna Cherkasova Cherneha Chernetskyi Chernii
    Cherniuk Chernykh Chernyshov Chełmecka Chełmecki Chilczuk Chlasta Chlastawa Chlebicka Chlebicki Chlebosz
    Chlebowicz Chlebuś Chmaj Chmiela Chmielarska Chmielarski Chmielik Chmielniak Chmiest Chmurska Chmurski
    Cho Chobot Chochorowska Chochorowski Chochołek Chociej Choczaj Chodacka Chodacki Chodara Chodnicka
    Chodnicki Chodorek Chodowiec Chodur Choduń Chodyna Chodyra Chodór Chojka Chojniak Chomczyk Chomka Chomko
    Chomont Chornii Chornobai Choroba Chorobik Chorążyczewska Chorążyczewski Chraniuk Chrapkiewicz
    Chrapkowska Chrapkowski Christ Chromiak Chrost Chrust Chrustek Chrustowska Chrustowski Chruściak
    Chruścik Chryc Chryczyk Chrząstowska Chrząstowski Chrząścik Chrzęstek Chróst Chrószcz Chuchra Chudak
    Chudala Chudaś Chudecka Chudecki Chudyba Chudyk Chudzikiewicz Chuiko Chwalczuk Chwalik Chwalińska
    Chwaliński Chwast Chwastyk Chwał Chwiej Chwiejczak Chwierut Chwiećko Chwirot Chwist Chybowska Chybowski
    Chyczewska Chyl Chylewska Chylewski Chyży Chętnik Chęś Chłopik Chłoń Ciapała Ciapka Ciaputa Ciara
    Ciasnocha Cibis Ciborska Ciborski Cichawa Cichańska Cichewicz Cichon Cichorek Cichorz Cichuta Ciebiera
    Ciechan Ciechańska Ciechański Ciecieląg Cieciera Ciekot Cielebąk Cieleń Cielica Ciemała Ciemińska
    Ciemiński Ciepał Ciepielewska Ciepielewski Ciepłucha Cierocka Cierocki Cierpich Cierpioł Ciesiołkiewicz
    Ciećka Cieślikowska Cieślikowski Cież Cieżak Cimała Cimek Cimochowska Cimochowski Cinal Ciobanu Ciombor
    Ciotucha Ciołak Ciołko Ciołkowska Ciołkowski Cirocka Cirocki Ciskowska Ciskowski Cisz Ciszkowska
    Ciszkowski Ciuchta Ciuraj Ciurar Ciurej Ciureja Ciurko Ciurkot Ciurla Ciućka Ciągło Ciąpała Ciępka
    Cięszczyk Ciężarek Cnota Cofała Copija Copik Cora Covaci Cudek Cudna Cudnik Cudny Cudo Cukrowska
    Cukrowski Cupryś Cur Curzydło Cwajna Cwaliński Cwojdzińska Cwojdziński Cwyl Cyba Cycoń Cydejko Cyga
    Cygler Cyl Cylka Cymbalista Cymbała Cymbor Cymerys Cynar Cyniak Cynk Cyranek Cyrankowska Cyrankowski
    Cyranowicz Cyrwus Cyrzan Cysewska Cysewski Czach Czachowska Czado Czaicka Czaicki Czaińska Czaiński
    Czajczyńska Czajczyński Czakon Czamara Czapczyk Czaplak Czaplejewicz Czapor Czardybon Czarnacka
    Czarnacki Czarnomska Czarnomski Czarnuch Czarnynoga Czechura Czeczko Czekierda Czeleń Czelusta Czembor
    Czempiel Czempik Czepczor Czepek Czerczak Czerkas Czerkawska Czerkawski Czernia Czerniakiewicz
    Czerniakowska Czerniakowski Czerniewicz Czerwiak Czerwieniec Czmiel Czmoch Czoch Czopor Czornik Czorny
    Czosnek Czubacka Czubacki Czubala Czubała Czubernat Czubkowska Czubkowski Czucha Czuchryta Czudaj Czudek
    Czujko Czuper Czurak Czwarno Czwojdrak Czypionka Czyrek Czyrny Czysz Czyżo Czyżykowska Czyżykowski
    Cząstka Człapa Căldărar Cłapa Dacewicz Dachowska Dachowski Daciuk Dacka Dadak Dadas Dados Dadura Dahlke
    Dajczak Dajer Dalka Dalke Dalmata Damaszk Damięcka Damięcki Damrat Dana Danaj Danak Dancewicz Dang
    Danielczak Danielczuk Danik Danilczyk Danilov Danilova Daniłowska Daniłowski Danyliv Dara Darasz Darda
    Dardzińska Dardziński Dargiewicz Darowska Darowski Daroń Darznik Das Dasiewicz Daszczyk Daszkowska
    Daszkowski Daszuta Datsko Datta David Davies Davis Dańda Daśko Dechnik Decyk Deda Deineha Dej Dejewska
    Dejewski Dejk Dejnek Dekiert Delimata Dembicka Demel Demiańczuk Demir Demkiv Demi̇r Dendys Denysova
    Depka Deputat Derbich Derbin Derecka Derela Deresz Derezińska Dereziński Derleta Derlukiewicz Derwich
    Derwisz Derylak Deskiewicz Desperak Deszczka Detko Detmer Deć Diachok Diak Diakiv Diakun Diduch Dimitrov
    Dittrich Dmytriiev Dmytriieva Dmytryk Dmytryshyn Do Dobaczewska Dobiesz Dobras Dobrodziej Dobrogowska
    Dobrogowski Dobroszek Dobrucka Dobrucki Dobrychłop Dobrzyń Dola Dolak Dolat Doleżych Dolia Dolina Doliwa
    Dolniak Dolot Domalik Domarecka Domarecki Domaros Domarus Domasik Domaszewicz Dombrovska Dombrovskyi
    Domeradzka Domeradzki Domina Domińska Domiński Domurat Donaj Donat Donchenko Donocik Dopart Dopieralska
    Dopieralski Dopke Dorabiała Dorau Dorniak Doroszuk Dorota Dorożyńska Dorożyński Dorula Dorynek Doskocz
    Dovhal Dovhaliuk Dovzhenko Dowgiałło Dowgiert Dołowy Dończyk Drabarek Drabent Drabina Drabińska
    Drabiński Drabowicz Drach Drachal Drachuk Draga Dragun Drahan Drawc Drażba Drebot Dreja Drejer Dresler
    Drewing Drews Drob Drobina Drobińska Drobiński Drogoś Drosik Droszcz Droszczak Drozdova Droń Drożak
    Drożdżak Drożdżowska Drożdżowski Drożyńska Drożyński Druciarek Drużba Drużkowska Drużkowski Drużyńska
    Drużyński Drygaś Drygiel Drzazgowska Drzazgowski Drzewicka Drzewicki Drzewińska Drzewiński Drzeżdżon
    Drzymalska Drzymalski Drzystek Dróbka Drągowska Drągowski Dubaniewicz Dubiak Dubiela Dubielak Dubina
    Dubova Dubowska Dubowski Dubyk Duchna Ducka Ducki Dudchenko Dudnik Duduś Dudycz Dudyk Dudzicz Dudziuk
    Duka Dukała Dukiewicz Dula Dulat Duleba Dulian Duliban Dulko Dulnik Dumańska Dumański Dunat Dunikowski
    Duplaga Durajczyk Durasiewicz Durał Durek Durkalec Durmaj Durnaś Dusińska Dusiński Duszeńko Duszka
    Duszyk Dutko Duziak Duźniak Dużyńska Dużyński Dworczyk Dworecka Dworecki Dwornicka Dwornicki Dworzańska
    Dworzański Dwulit Dwórznik Dybalska Dybalski Dybciak Dybcio Dybczak Dybicz Dybus Dyc Dyczek Dyczka
    Dyczkowska Dyczkowski Dydek Dyduła Dydyna Dygoń Dykiel Dykier Dykta Dylewicz Dymarek Dymarska Dymarski
    Dymała Dymczyk Dymel Dymerska Dymerski Dymon Dynda Dynek Dyrka Dysarz Dyśko Dzhus Dziadak Dziadczyk
    Dziadowiec Dziadoń Dziaduch Dziadyk Dziadzio Dziamski Dziasek Dziatkiewicz Działach Działek Działowska
    Działowski Dziedzicka Dziedziczak Dziedziela Dziedzińska Dziekanowska Dziel Dziemba Dziemian Dziemianko
    Dziemidowicz Dziendziel Dziennik Dziepak Dzierla Dzierżawska Dzierżawski Dzierżek Dzierżyński Dziewięcka
    Dziewońska Dziewoński Dzień Dzika Dzikowicz Dziobek Dzioch Dzionek Dzirba Dziub Dziubenko Dziubich
    Dziugieł Dziurawiec Dziurda Dziurka Dziwak Dziwińska Dziwiński Dzióbek Dzięciołowska Dzięciołowski
    Dzwonnik Dąbkiewicz Dądela Dębczak Dębowczyk Dęga Dłubacz Dłubała Długa Długaj Długaszek Długopolski
    Długoszewska Długoń Dłuska Dłuski Dłużak Dłużewska Dłużewski Dżugaj Ebertowska Ebertowski Eichler Ejdys
    Ekstowicz Elżbieciak Englert Erazmus Erbel Erdman Erlich Ernest Ertel Evans Ewald Ewert Ewiak
    Fabianowicz Fabiańczyk Fabich Fabijańczyk Fabijańska Fabijański Fajdek Fajer Fajkowska Fajkowski Falana
    Falandysz Falarz Falenta Faliszek Faliszewska Faliszewski Falęcka Falęcki Famulska Famulski Famuła
    Farbaniec Faryniarz Farys Faryś Fastyn Faszczewska Faszczewski Fałkowska Fałowska Fałowski Fecko
    Fedchenko Fedchuk Feder Fedorczuk Fedorovych Fedoryshyn Fedotov Fedotova Fedun Fedyna Fedyshyn Fejkiel
    Feliga Felis Felińska Feliński Felska Felski Fengler Ferdek Ferdynus Ferfecka Ferfecki Fert Feruś
    Feshchuk Fesiuk Fiałek Fibich Fidelus Fidyk Fierka Fiertek Fietko Figacz Figaj Figiela Figlus Figuła
    Figzał Fijas Fiks Filarska Filarski Filatov Filatova Filipchuk Filipiec Filippov Filippova Filińska
    Filiński Filo Filocha Filoda Filusz Filuś Fink Fira Firla Firlus Firmanty Fitas Fitał Fituch Fiutak
    Fiłonowicz Flakiewicz Flasińska Fleischer Flejszar Flisak Fliszkiewicz Fliśnik Flont Flor Floriańczyk
    Fludra Fojut Fokt Folcik Foltynowicz Foltyńska Foltyński Folwarska Folwarski Fonfara Forc Forczek Fordon
    Foremny Forgiel Fornalska Fornalski Forszpaniak Forystek Foszcz Fotek Fox Fraj Francik Franciszkiewicz
    Franica Franiczek Franosz Franus Freda Frejlich Frelik Frencel Fret Freus Frey Frodyma Frosztęga Fryca
    Fryda Frydryk Frydrysiak Frymark Frysztak Fryt Fryz Fryźlewicz Fröhlich Frącek Fręśko Fuhrmann Fujak
    Fundament Furczoń Furczyk Furdyna Furgoł Furmaga Furmanik Furmaniuk Furs Furyk Fusiarz Fusiek Futoma Fąk
    Fąs Gaber Gabler Gaborek Gabruś Gabrysz Gacioch Gacoń Gaczorek Gaczoł Gaczyńska Gaczyński Gadaj Gadecka
    Gadecki Gadocha Gadula Gadziała Gagat Gago Gajc Gajdamowicz Gajdosz Gajec Gajecka Gajecki Gajer Gajewicz
    Gajko Gajkowska Gajlewicz Gajowczyk Gajowy Galanek Galanty Galara Galczak Galej Galikowska Galikowski
    Gallus Gamdzyk Gan Gancarek Ganczar Gano Gappa Garbacki Garbala Garbas Garbat Garbicz Garcia Garczarczyk
    Gardas Gardian Gardias Gardoń Gardynik Gardziel Garlej Garlicka Garlicki Garlińska Garliński Garnek
    Garnys Garska Garski Garstecka Garstecki Garsztka Garula Garwol Garwolińska Garwoliński Gas Gasanov
    Gasidło Gasperowicz Gastoł Gaszczyk Gaszka Gatnar Gawda Gawdzik Gawek Gawełczyk Gawinek Gawior Gawkowska
    Gawkowski Gawle Gawlica Gawlikowska Gawlikowski Gaworek Gawryszczak Gawryszewska Gawryszewski Gazdowicz
    Gać Gaładyk Gałdyn Gałeczka Gałgan Gałkiewicz Gałus Gałysa Gałązkiewicz Gałęzowska Gałęzowski
    Gańczarczyk Gańska Gański Gaździk Gburczyk Gburek Gdowska Gdowski Gebel Gehrke Gelashvili Gembala George
    Geppert Gera Gerke German Gertner Gerula Gerus Gerwatowski Gesek Getler Ghazaryan Giba Gibaszek Gibki
    Gibuła Giedyk Gielata Gielec Gielniak Gielnik Gieniec Gierada Gierałtowska Gierałtowski Gierczyńska
    Gierczyński Gierlak Giermek Giertuga Gierut Gieszczyk Giez Giełda Gigoń Gilarska Gilarski Gilner
    Ginalska Ginalski Ginda Giszczak Giłka Giżycka Giżycki Giżyńska Giżyński Glac Glagla Glina Gliniak
    Gliwińska Gliwiński Gliwka Globisz Gloc Glombik Gluba Gmaj Gmiter Gmiterek Gmitruk Gmyz Gnatek Gnaś
    Gnida Gnieciak Gniedziejko Gniewosz Gniłka Gnyś Gocał Gocałek Gocel Goczoł Godawa Godos Godzieba Godziek
    Godziszewska Godziszewski Godzińska Godziński Gogolok Gojny Gol Golas Golasz Golc Goldberg Golemo Golian
    Golianek Goliszewski Golub Gomola Goncerz Gondzik Gonta Gontarska Gontarski Gora Gorajek Goraus
    Gorczowska Gorczowski Gordzielik Gorgosz Gornowicz Gorzawska Gorzawski Gorzała Gorzel Gorzela Gorzelany
    Gorzeń Gorąca Goszka Gotowała Gotowiec Goyke Gozdecka Gozdecki Gołba Gołembiewska Gołembiewski Gołkowska
    Gołkowski Gołojuch Gołombek Gołos Gołosz Gołuchowski Gołuszka Goły Gołyźniak Gońda Goździak Goździkowska
    Goździkowski Goźlińska Grabarska Grabarski Grabda Grabia Grabkowska Grabkowski Grabowiecki Graczykowska
    Graczykowski Gradus Graff Grajczyk Grajko Grajkowska Grajkowski Grajoszek Gralec Gralewicz Gralińska
    Graliński Gralla Gramatyka Grams Grandys Granica Granieczny Granosik Graszka Gratkowska Gratkowski
    Grałek Greber Grech Grecka Grecki Gredka Green Greguła Greiner Grek Grelewicz Greś Grobelska Groblewska
    Groblewski Grochalska Grochalski Grochla Grochowalska Grochowalski Gromadka Gromotka Gronczewska
    Gronczewski Gronda Gronkowska Gronkowski Gronowicz Grosiak Grosicka Grosicki Grosman Groszkowska
    Groszkowski Grota Grotkowski Grotowska Gruber Grubiak Grubich Grubka Grucela Grudka Grudnik Grudziecka
    Gruszeczka Gruszewska Gruszewski Gruszkiewicz Grużewska Grużewski Grych Grychtoł Grycman Grycuk Gryczan
    Gryczon Grygierek Grygierzec Gryglas Gryglewska Gryglewski Gryglik Grygorczuk Gryl Grylak Grynkiewicz
    Gryszka Gryzik Gryzio Grzankowska Grzankowski Grzebielucha Grzebieniak Grzebinoga Grzeczka Grzegorowski
    Grzegory Grzegorz Grzegorzewicz Grzegorzyca Grzegórzek Grzegórzko Grzejda Grzelaczyk Grzelewska
    Grzelewski Grzelińska Grzeliński Grzemska Grzemski Grzenda Grzesińska Grzesiński Grzesło Grześko Grzmil
    Grzonkowska Grzonkowski Grzybacz Grzybczyk Grzymek Grzymska Grzymski Grządka Grządziela Gródek Grącki
    Grądek Grądzik Gubańska Gubański Gucia Gudel Gudowska Gudowski Gudyka Guga Guguła Guja Gulan Gulba Gulcz
    Gulewicz Gulik Gulińska Guliński Gumkowska Gumkowski Gumna Gumny Gumola Gumułka Guo Gurazda Gurbała
    Gurbisz Gurdek Gurdziel Gurgacz Gurzyńska Gurzyński Guseinov Guss Gusta Guszpit Gutek Guzewicz
    Guzikowska Guzikowski Guździoł Gwardys Gwarek Gwiazdowicz Gwiaździńska Gwiaździński Gwizd Gwizdoń Gworek
    Gwoździewicz Gwoździk Gzella Gójska Gójski Góras Górczyk Góreczny Górnicz Górniewicz Górszczyk Górz
    Górzna Górzny Günther Gągol Gągoł Gąsecka Gąsecki Gąszcz Gąszczyk Gątarek Gębal Gębarowska Gębarowski
    Gębczyk Gębicz Gędek Gędłek Gęsikowska Gęsikowski Gęstwa Gęśla Gładka Gładych Gładys Gładysiak Gładyś
    Głasek Głaszczka Głazowska Głazowski Głodkowska Głodkowski Głomb Głowania Głowicka Głowicki Głowik
    Głowska Głowski Głuszcz Głuszczyk Głuszyk Głódź Główczewska Główczewski Główczyńska Główczyński Głąbicka
    Głąbik Haas Habaj Habel Habryka Habura Hacia Haczyk Hadrian Haida Haidai Hain Hajdamowicz Hajdo
    Hajduczek Hajduczenia Hajto Hakobyan Halaburda Halasz Halchenko Halczak Halczuk Halejcio Halek Halemba
    Haliniak Halko Hall Halota Halupczok Halushko Halych Hamela Hamerlik Haniszewska Hanslik Hanzha Hapon
    Haponik Harabasz Harabin Haracz Haras Harasimczuk Harasym Harat Haratym Harazin Harbar Harendarz Harkot
    Harmash Harmata Harpula Harris Hartmann Hartwich Hartwig Harutyunyan Haręza Has Hasik Hasior Hassa
    Hatala Hatłas Hauke Havryliak Havryliv Havrylov Havrylova Havryshchuk Hawrot Hawryło Haza Haładaj
    Haładus Haładyn Hałaj Hałgas Hałucha Hałuszczak Hałys Hańczyk Hańderek Haśnik He Heinze Hejda Hejman
    Hejmo Hejnar Helbin Heldt Heluszka Helwich Hen Hendrysiak Henkel Hensel Hepner Herashchenko Herbuś Herc
    Hercog Herian Hering Herka Herma Hernes Hertel Hes Hetmańska Hetmański Hełka Hil Hildebrand Hill Hiller
    Hirniak Hladka Hladkyi Hliwa Hnatenko Hnatyk Hnatów Hobot Hodur Hodurek Hoeft Hoffa Hofmann Hohol
    Holeczek Holewik Holisz Holoborodko Holona Holovach Holovan Holovatiuk Holubenko Holyk Holz Homel
    Homeniuk Homik Homoncik Honisz Hopa Hope Horb Horba Horbal Horbunova Hordejuk Horn Horniak Horodecka
    Horodecki Horodyska Horodyski Horoshko Horosz Horwat Horyń Hotloś Hovhannisyan Howaniec Hołody Hołuj
    Hoły Hrabovska Hrapkowicz Hrechka Hrechko Hromova Hryc Hrycaj Hryn Hrynchyshyn Hrynevych Hrynkiv Hrynko
    Hrynyk Hryszkiewicz Hryszko Hrytsak Hrytsiv Hrytsyk Hryń Hu Hubar Hubka Hudak Hudaszek Hulin Hulko Hunek
    Hupa Hupka Hural Hurko Hurska Hurskyi Huryn Huseynov Husieva Hut Huta Hutek Hutny Hutsul Huz Huzior Huć
    Hućko Hyła Hyżyk Hübner Hądzlik Ibragimov Ibrom Idziaszek Idzior Idziorek Idźkowska Idźkowski Iglewska
    Ignac Ignacak Ignacy Ignaszewska Ilchyshyn Ilczyszyn Ilków Ilnytska Ilnytskyi Ilska Ilski Imbierowicz
    Imielska Imielski Ingielewicz Irek Isaiev Isaieva Iskrzycka Iskrzycki Ismail Ismailova Ivanets Ivaniv
    Ivantsiv Ivanyshyn Ivanytska Ivashchuk Iwasieczko Iwańczak Iwicka Iwicki Izak Izbicka Izbicki Izworska
    Izworski Izydorek Iżykowska Jabcoń Jabczyńska Jabczyński Jacaszek Jacheć Jachim Jachimek Jachimiak
    Jachowska Jachowski Jachura Jachymczyk Jachymek Jachymiak Jachyra Jackowicz Jacyna Jacyno Jaczyńska
    Jaczyński Jadczuk Jadwiszczak Jafra Jaglińska Jagliński Jaguszewska Jagusztyn Jagódka Jagłowska
    Jagłowski Jahns Jakacka Jakacki Jakielaszek Jakimczuk Jakimiec Jaksa Jaksik Jakus Jakuć Jakób Jakóbowska
    Jakóbowski James Jamroziak Jamrozowicz Jamroż Jamry Janaszak Janaszkiewicz Janaś Janczara Janczyszyn
    Jandy Janeta Janica Janiczak Janisiewicz Janiszyn Jank Janosik Janoska Janowiec Janoś Jantas Januchowska
    Januchowski Janucik Janulewicz Janur Januszyk Janyga Jara Jaranowska Jaranowski Jarmuł Jarocha Jaroni
    Jaroszkiewicz Jarota Jaroć Jarończyk Jaroński Jaroś Jarus Jary Jarysz Jarzembowska Jarzembowski Jarzmik
    Jarzombek Jarzębińska Jarzębiński Jaróg Jasak Jasicka Jasicki Jasiołek Jasiukiewicz Jasiulewicz Jasiówka
    Jaskowska Jaskowski Jasnowska Jasnowski Jasny Jaster Jastrzembski Jaszczyńska Jaszczyński Jaszek Jasztal
    Jaworowicz Jaz Jałowiczor Jańska Jański Jaśniak Jaśniewicz Jaśniewska Jaśniewski Jegier Jeleniewicz
    Jeleniewska Jeleniewski Jelito Jelonkiewicz Jemielity Jemielniak Jemioła Jenda Jendrzej Jendrzejczak
    Jendrzejewska Jendrzejewski Jensen Jeremicz Jermak Jerominek Jeruzal Jerzy Jesionka Jesiotr Jewiarz
    Jeziak Jezioro Jezuit Jezusek Jeżowska Jeżowski Jiang Jin Jobczyk Jochemczyk Jocz Jodełka Jodłowiec
    Johansson Jojko Jon Jonasz Jonczak Jonda Jonderko Jonek Joseph Jończak Juchacz Juchimiuk Juchno Judasz
    Judka Jujka Junak Juniewicz Juranek Jurczenko Jurczyszyn Jureczka Jurgiel Jurowicz Jurusik Jurys
    Jusińska Jusiński Justa Justyna Justyńska Justyński Juszczyszyn Juszczyńska Juszczyński Juszko Juszyńska
    Juszyński Jutkiewicz Juzwa Juś Juźwiak Juźwik Jóskowiak Józefczuk Jąder Jęczmionka Jędraszczak Jędrej
    Jędrkowiak Jędro Jędrol Jędroszkowiak Jędruszak Jędryczko Jędrysek Jędryszczak Jędryszek Kabata Kabot
    Kabus Kabut Kachnic Kacik Kaciuba Kacprzycka Kacprzycki Kacpura Kaczała Kaczmarz Kaczocha Kaczuba Kaduk
    Kadula Kadłuczka Kafar Kafara Kaftan Kagan Kaizer Kajfasz Kajka Kajmowicz Kajszczak Kajzar Kak Kakareko
    Kakietek Kalashnikova Kalchenko Kalecińska Kaleciński Kaleja Kalfas Kalin Kaliniak Kalisiewicz Kaliska
    Kaliski Kaliszan Kalitka Kaliuzhna Kaliuzhnyi Kaliś Kaliściak Kalla Kalmus Kalupa Kalwat Kamień
    Kaminiarz Kamoda Kampka Kamysz Kamzol Kanabus Kanadys Kanafa Kanak Kanalosh Kanas Kander Kandyba Kang
    Kaniak Kanicka Kanicki Kanigowski Kapanadze Kapek Kapel Kapla Kaplan Kaplita Kaplun Kapsa Kapturkiewicz
    Kaput Karaczun Karakuła Karamon Karapetyan Karasiak Karbarz Karbowy Kardach Kardacz Kardel Kardynał
    Karelus Kargulewicz Karki Karkula Karlak Karlik Karlikowska Karlikowski Karman Karmazyn Karnafel
    Karnasiewicz Karnaukh Karnia Karnowska Karnowski Karolik Karolkiewicz Karpacz Karpała Karpiesiuk Karpisz
    Karpov Karpovich Karpus Karwas Karwecka Karwecki Karwel Karłowska Kashchuk Kasianenko Kasiarz Kasicki
    Kasjan Kasperkowiak Kaspruk Kasprzyszak Kass Kaszak Kaszczuk Kaszczyszyn Kaszycka Kaszycki Katafiasz
    Katolik Katra Katulska Katz Kauf Kaufman Kavalchuk Kavalenka Kavaliou Kawaler Kawała Kawczak Kawiecka
    Kawiecki Kawik Kawińska Kawiński Kawnik Kawończyk Kawęcka Kawęcki Kazakova Kazanecka Kazanecki Kazała
    Kazienko Kazimierowicz Kaziuk Kazlou Kazlouski Kazmirchuk Kałaska Kałat Kałmuk Kałuziak Kałużniak Kaśków
    Kaźmierkiewicz Kaźmierowska Kciuk Kelm Kelner Kempska Kempski Kerlin Kesler Khachatryan Khadka Khalilov
    Khimich Khmara Khmil Khomich Khomyk Khrystenko Kic Kica Kiciak Kicior Kiczka Kiebała Kiec Kiecana Kiecka
    Kieczka Kiel Kielek Kieler Kielian Kieliszczyk Kieras Kierczak Kiermasz Kiernicka Kiernozek Kierońska
    Kieroński Kierpacz Kierpiec Kierska Kierski Kiersnowska Kiersnowski Kierul Kieruzel Kierznikiewicz
    Kietlińska Kietliński Kiezik Kiełbasińska Kiełbasiński Kiełczykowska Kiełczykowski Kiełkiewicz
    Kiełkowicz Kiełt Kijko Kijo Kikut Kil Kilan Kilarska Kilarski Kiliańska Kiliański Kilijanek Kiliç Kiliś
    Kiljanek Kiljańczyk Kiljańska Kiljański Kiluk Kimel Kimla Kina Kinash Kindrat Kinel King Kinowska
    Kinowski Kipa Kipka Kirchner Kirejczyk Kirichenko Kirsz Kiryk Kishchuk Kisiała Kisielińska Kisieliński
    Kisiołek Kister Kistowska Kiszel Kiszkiel Kiszko Kiszło Kitel Kitka Kitlas Kitlińska Kitliński Klaczak
    Klaczyńska Klaczyński Klajn Klamut Klapa Klar Klas Klat Klata Klatt Klauza Klawiński Kleba Kleczewska
    Kleczewski Kleczka Kledzik Kleinert Kleinszmidt Kleist Klej Klejdysz Klekotko Klemba Klepadło Klepczarek
    Klepczyńska Klepek Kleszczewska Kleszczewski Kleszczyńska Kleszczyński Kleszyk Kliks Klimala Klimasara
    Klimasz Klimchuk Klimczewska Klimecka Klimecki Klimova Klimovich Klimza Klincewicz Klink Kliszewska
    Kliszewski Klita Kliza Klińska Kliński Klonek Klosa Kloza Kluch Kluczniok Kluka Klunder Klupa
    Kluszczyńska Kluszczyński Kluziak Kluś Kluźniak Klymiuk Kląskała Klęsk Kmiecińska Kmieciński Kmin
    Kmiołek Knapińska Knapp Knasiak Kniat Knuth Knychała Kobalczyk Kober Kobiec Kobiella Kobierecka
    Kobierecki Kobojek Kobrzyńska Kobrzyński Kobusiński Kobuszewska Kobuszewski Kobylak Kobylska Kobylski
    Kocan Kocańda Kocel Kocela Kocerba Kochaniak Kochaniec Kochmańska Kochmański Kocierz Kocięba Kocięcka
    Kocięcki Kocięda Koclęga Koczera Koczor Koczot Koczyk Kocój Kodym Koenig Koguciuk Kois Kojro Kokosińska
    Kokosiński Kokoszkiewicz Kokoszko Kokott Kokowicz Kolada Kolan Kolankiewicz Kolankowska Kolas Kolaska
    Kolańska Kolański Kolba Kolberg Kolbus Kolczyk Kolesnikov Kolesnikova Koliesnik Kolis Kolisnichenko
    Kolorz Koluch Kolęda Komada Komajda Komarek Komarov Komarova Komasa Komendera Komin Komisarz Komosińska
    Komosiński Komoń Kompaniiets Kompała Komraus Komsa Komór Kondas Kondek Konderak Kondrak Kondras
    Kondratieva Kondys Kondzior Konert Koniarczyk Koniarek Koniarska Koniarski Koniarz Koniecka Koniecki
    Konon Kononchuk Kononiuk Konop Konoval Konovalenko Konończuk Konstanciak Kontowicz Konwerska Konwerski
    Konwińska Konwiński Konyk Kopach Kopaniarz Kopcik Kopczak Kopczewski Koperkiewicz Koperniak Koperwas
    Kopik Kopras Kopta Koput Kopyra Kopyś Korabik Koralewicz Korbal Korban Korbanek Korbas Korbecka Korbecki
    Korbela Korbiel Korbik Korbus Kordalska Kordalski Kordecka Kordecki Kordeczka Kordos Kordula Kordyl
    Kordylewska Kordylewski Kordyś Korenkiewicz Koretska Korfanty Korfel Korgol Korkuś Korn Kornat Korneliuk
    Korobka Korobko Korolchuk Korolenko Korolewicz Koroliuk Korolov Korowaj Koroś Korpak Korpalska Korpalski
    Korpas Korpik Korszeń Korulczyk Korusiewicz Korwek Korwel Koryciak Koryczan Koryga Korytek Korzeniec
    Kosa Kosel Koshel Kosiarska Kosiarski Kosiedowska Kosiedowski Kosierb Kosierkiewicz Kosiewicz Kosikowska
    Kosikowski Kosim Kosin Kosiór Koska Kosko Kosma Kosobucka Kosobudzka Kosobudzki Kosoń Kostańska
    Kostański Kostewicz Kostkiewicz Kostrz Kostrzyńska Kostrzyński Kostuj Kostusiak Kostyshyn Kostyła Kosut
    Koszel Koszowska Koszowski Kosztyła Koszut Koszuta Koszykowska Koszykowski Kotapka Kotaś Kotek Kotela
    Koter Koteras Koterwa Kotewicz Kotiuk Kotlewska Kotlewski Kotlicka Kotlicki Kotlęga Kotnis Kotov Kotova
    Kotsiuba Kotwas Kotyńska Kotyński Kovach Kovalevych Kovaliuk Kovalyshyn Kovbasiuk Kovtoniuk Kowacka
    Kowacki Kowalczewska Kowalczewski Kowalec Kowaliszyn Kowalińska Kowaliński Kowalonek Kowcz Kowieska
    Kowieski Kowynia Kowzan Kozaczek Kozal Kozel Kozerski Kozhukhar Kozhushko Kozii Kozimor Koziorowska
    Koziorowski Koziura Kozoriz Kozubska Kozubski Kozyr Koć Kołacińska Kołaciński Kołaczkowska Kołaczkowski
    Kołaczyński Kołat Kołba Kołdej Kołdras Kołkowska Kołkowski Kołoczek Kołodko Kołodziejczuk Kołodzińska
    Kołodziński Kołos Kołota Kołpa Kołt Kołtunowicz Kołtyś Końpa Koś Kościak Kościanek Kościecha Kościuczyk
    Koślacz Kośmicka Kośmicki Koźlarek Koźluk Koźma Kraczek Kraczkowska Krafczyk Kraft Krahel Kraińska
    Krajcer Krajda Krak Krakowian Krakówka Krala Kralka Kram Kramar Krampa Kranz Krasiuk Krasko Krasna
    Krasnopolska Krasnowska Krasnowski Krasovska Krasovskyi Krassowska Kratiuk Krauzowicz Krawcewicz
    Krawczykowska Krawczykowski Krawczyszyn Krebs Kreis Kreja Krenz Kretkiewicz Kretkowska Krezymon Krieger
    Kriger Kroc Krocz Kroker Krokowska Krokowski Kromer Kromka Kropacz Kropiewnicka Kropiewnicki Kropisz
    Kropiwnicka Kropiwnicki Kroplewska Kroplewski Krosny Krosta Kruczała Krupowicz Krusiewicz Krusińska
    Krusiński Kruszczyńska Kruszczyński Kruszec Kruszyk Krutul Kruza Krybus Krycka Krygiel Krygowska
    Krygowski Kryjom Krykun Krylova Krym Krypczyk Krypel Kryshtal Kryspin Krystian Krystosik Krystyniak
    Kryszewska Kryszewski Krysztof Krysztofik Krysztoforski Kryvonos Kryzhanivska Kryzhanovska Kryża
    Krzaczek Krzebietke Krzeczkowska Krzepkowska Krzepkowski Krzeszowiak Krzewicka Krzewicki Krzewina
    Krześlak Krzyczkowska Krzyczkowski Krzykwa Krzymowska Krzymowski Krzynowek Krzynówek Krzystanek
    Krzysteczko Krzyszczuk Krzyszczyk Krzysztofowicz Krzyszycha Krzywania Krzywańska Krzywański Krzywiec
    Krzywińska Krzywiński Krzyworzeka Krzywosz Krzywy Krzyś Krzyściak Krzyżan Krzyżosiak Krzyżyk Krząkała
    Krząstek Króliczek Kręt Kręzel Krężałek Krężelok Ksepka Ksiądz Książak Książka Książyk Księżarczyk Ksyta
    Kszczot Kubaczka Kubaj Kubak Kubal Kubalska Kubalski Kubara Kubarek Kubaszewska Kubaszewski Kubańska
    Kubański Kubecka Kubecki Kubeczko Kubeł Kubiec Kubies Kubiesa Kubień Kubiszewska Kubiszewski Kubić Kubot
    Kubryn Kubsik Kubska Kubski Kubuj Kubus Kucaba Kucaj Kuch Kucha Kuchar Kucharczak Kucharczuk Kucharuk
    Kucharzewska Kucharzewski Kucheriava Kuchma Kuchna Kuchnia Kuchnio Kuchno Kucio Kucięba Kucyk Kuczer
    Kuczko Kuczmarska Kuczmarski Kudaj Kudas Kudełko Kudlek Kudria Kudroń Kudryk Kuduk Kudyk Kuglarz Kugler
    Kujawińska Kujawiński Kujawka Kukharuk Kukhta Kuklewicz Kukowka Kukulak Kukwa Kulasa Kulasek Kulasza
    Kulbacki Kulbaka Kulbat Kulchytska Kulchytskyi Kulec Kuleczka Kulewicz Kulicka Kulicki Kulikova Kulwicka
    Kulwicki Kumór Kun Kunce Kundys Kundzicz Kunecka Kunecki Kunowska Kunowski Kupc Kupczyńska Kupczyński
    Kupniewska Kupniewski Kupracz Kuprewicz Kupska Kupski Kurak Kurasiak Kurasińska Kurasiński Kurbanov
    Kurcewicz Kurcoń Kurczaba Kurczyna Kurkus Kurlej Kurleto Kurman Kurochka Kuroń Kuroś Kurpik Kurpios
    Kurpińska Kurpiński Kurt Kurta Kuruc Kurylak Kurylenko Kuryłek Kurzacz Kurzela Kurzepa Kurzok Kurzynoga
    Kurzątkowski Kusaj Kusal Kushch Kushnirenko Kushniruk Kusibab Kusion Kusior Kuskowska Kuskowski Kustroń
    Kustusz Kusza Kuszczak Kuszewska Kuszewski Kuszka Kuszneruk Kuszpit Kusztelak Kuszyńska Kuszyński
    Kutarba Kutela Kutkiewicz Kutkowska Kutkowski Kutrzeba Kutrzuba Kutyba Kuwałek Kuwik Kuz Kuzaj Kuzara
    Kuzdak Kuzera Kuziemska Kuziemski Kuziv Kuzma Kućma Kuśmierczuk Kuśnierczak Kuśnierczyk Kuźdub Kuźmiak
    Kuźmiuk Kuźnar Kuźniarek Kuźniarski Kuźniarz Kużaj Kużel Kvaratskhelia Kwaczyńska Kwaczyński Kwapich
    Kwarcińska Kwarciński Kwaśnica Kwaśniewicz Kwestarz Kwiatosz Kwiczala Kwintal Kwitek Kyrychuk Kyrylchuk
    Kyselov Kyselova Kyzioł Kyć Kühn Kądzielawa Kąsek Kątnik Kęcik Kęder Kędziak Kępowicz Kłapacz Kłaptocz
    Kłaput Kłapyta Kłobuch Kłobus Kłodawska Kłodawski Kłodnicka Kłodnicki Kłodowska Kłodowski Kłonica
    Kłonowska Kłonowski Kłopocka Kłopocki Kłopotek Kłosok Kłoś Kłusak Kłyk Kłyś Kłyż Kłósko Kłąb Labak
    Labisz Lachendro Lachman Lachor Ladra Laksa Lala Lalewicz Lama Lambert Lamik Lampka Langosz Lankiewicz
    Lapczyk Laprus Lara Larwa Lasia Laskiewicz Lass Lassota Lasyk Laszczka Lata Latańska Latański Latoch
    Latus Lau Laube Lauer Lavrenchuk Lavrynenko Lawrenc Lazarowicz Laśkiewicz Lebedenko Lebediev Lebedieva
    Lebida Lebiedzińska Lebiedź Lebuda Lechman Leciejewska Leciejewski Lecyk Leda Leder Ledwoch Lefik
    Legawiec Legieć Legień Legut Lejczak Lejkowska Lejkowski Lekan Lekka Leleń Lelonkiewicz Lembicz Lemiech
    Lempa Len Lenar Lendzioszek Lenort Lenz Leonarczyk Leonik Leonov Leonova Lepczyńska Lepczyński
    Lepiarczyk Lepich Lerka Leshchuk Leshchyshyn Lesiczka Lesiv Leska Lessnau Lesz Leszczyna Leszczyszyn
    Leszka Leszkowicz Leus Levin Levy Lewalska Lewalski Lewański Lewczak Lewera Lewna Leśków Leśniarek
    Leśnicka Leśnicki Leśniczak Leśnikowska Leśnikowski Leżańska Leżański Liakhovych Liashko Lib Liberacka
    Liberacki Liberadzka Liberadzki Liberek Libner Libuda Lichacz Lichman Lichocka Lichocki Lichosik
    Lichosyt Lichwała Lichy Lickiewicz Lidwin Lidzbarska Lidzbarski Liebner Lieske Lietz Ligaj Ligęzka Lik
    Lim Linde Liniewicz Linkowska Linkowski Lipert Lipiak Lipiarz Lipień Lipko Lipkowska Lipkowski Liptak
    Liput Liro Lisiewska Lisiewski Lisniak Lisova Lisovska Lisovyi Listowska Listowski Liszkiewicz Litawa
    Litkowiec Litvinchuk Litvinov Litwinek Lityńska Liubchenko Liwak Liwińska Liwiński Lizik Lizurek Lizut
    Loda Lohvynenko Lokś Lolo Lont Lorbiecka Lorbiecki Lorkiewicz Lorkowska Lorkowski Losik Lotka Lotko
    Lototska Loza Lozova Lu Lubak Lubczyk Lubelska Lubelski Luber Lubiak Lubieniecki Lubik Lubocka
    Lubojańska Lubojański Lubowicka Lubowicki Luboń Luchowska Luchowski Luda Ludew Ludian Ludkiewicz Ludwa
    Ludyga Ludynia Lukasek Lukash Lukashchuk Lukashenko Lukashevich Lukashuk Lukaszczyk Lukianova Lupan Lusa
    Lutek Lutkiewicz Luto Lutostańska Lutostański Lutsiuk Lutyńska Lutyński Luzar Luśnia Lynnyk Lys
    Lytvyniuk Lytvynova Lęcznar Ma Macewicz Machaczka Machałek Machej Machel Macherzyńska Macherzyński
    Machnikowska Machnikowski Machola Macholl Machulak Machulik Machynia Maciasz Maciej Macieja Maciejasz
    Maciejek Maciejska Maciejski Macierzyńska Macierzyński Macioch Macionczyk Macios Macioszczyk Maciąga
    Maciągowska Maciągowski Macińska Maciński Macuda Macyszyn Madejak Madetko Madrak Maduzia Madziała Magdoń
    Magdziarek Magdzińska Magdziński Magierowska Magierowski Magrian Maguda Mai Maier Maistrenko Maistruk
    Maisuradze Majchrzycka Majdanik Majder Majecki Majerowicz Majerowski Majnert Majoch Majowicz Majowska
    Majowski Majsner Majszyk Majta Makal Makarevych Makhmudov Makohon Maks Makselon Maksimiuk Maksymov
    Maksymova Maksymovych Makula Mala Malanchuk Malarska Malarski Malawska Malawski Malczuk Malej Malejka
    Maleszyk Maleta Maliarchuk Maliarenko Malich Malinka Malinovska Malitka Maliuk Malkiewicz Mallek Malorny
    Malska Malski Maltsev Maltseva Maluga Malyi Malyk Malysh Malysheva Mamcarczyk Mamczur Mamedovi Mamet
    Mamica Mamińska Mamiński Mamla Mamok Mamos Mamot Mamoń Mamzer Mancewicz Mandat Mandla Mandrela Mandziak
    Maniura Mansfeld Mantaj Manterys Manuszak Marasek Marchak Marchewicz Marchlik Marchwiak Marchwicka
    Marchwicki Marchwińska Marchwiński Marciak Marcinków Marcjan Marcjanik Marcula Marcyniuk Marduła Mardyła
    Marekwica Margiel Mariak Marin Marjańska Marjański Markov Markovych Markulak Markut Marmol Marmurowicz
    Marona Maroz Marszałkiewicz Marszewska Marszewski Martenka Martinez Martowicz Martynov Martynowska
    Martynowski Marusarz Marynych Maryńczak Marzęda Masarczyk Masełko Mashchenko Masiarek Masiukiewicz
    Maslii Maslov Maslova Masna Mastalska Mastalski Maszczak Maszewska Maszewski Maszka Maszkowski Matak
    Matan Matejak Materla Mateńka Mathea Matias Matiash Matiushenko Matląg Matlęga Matosek Matracka Matskiv
    Matsko Matuk Matusek Matuska Matuszyńska Matuszyński Matvieiev Matvieieva Matviiv Matwiejuk Matwij
    Matyaszek Matyga Matyjasiak Matyjek Matyjewicz Matykiewicz Matyla Matysiuk Matyszczyk Matyszewska
    Matyszewski Matz Matłok Matłoka Maurer Mazela Mazerant Maziarek Mazij Mazurok Mazuruk Maćko Małaczek
    Małasiewicz Małczak Małka Małkińska Małkus Małyjurek Mańkiewicz Mańska Mański Maśko Maślińska Maśliński
    Maślona Maśnica Mechlińska Mechliński Medoń Medvediev Meger Mehlich Mejna Mejza Meksuła Mela Melerowicz
    Meleshko Melnykov Melnykova Mendalka Mendera Mendrek Menes Menzel Meredyk Meres Merk Merkel Mermer
    Meszka Metelska Metera Metryka Mełech Mgłosiek Miah Miastkowski Miazio Miałkowska Miałkowski Micewicz
    Michaś Micherda Michewicz Michlewicz Michniewska Michniewski Michnowska Michnowski Michorczyk Michońska
    Michoński Michura Michułka Micor Micuła Micyk Midor Miech Miedziak Miedzianowska Mielczarczyk Mieleszko
    Mielko Mierkiewicz Mietła Migus Mijal Mikielewicz Mikiewicz Mikitiuk Mikołajko Mikołajska Mikołajski
    Mikołajuk Mikula Mikulewicz Mikuta Mikłaszewicz Milan Milaniak Milas Milczarska Milczarski Milejska
    Milejski Milian Milińska Miliński Milke Milkowska Milner Milo Mincewicz Minga Minge Miniailo Minor
    Minorczyk Miodońska Miodoński Mirkowska Mirkowski Miron Mironowicz Miroshnyk Mirota Mirska Mirski Misa
    Misiowiec Misiuda Misiukiewicz Misiuna Misiurek Misiąg Misterkiewicz Mistewicz Misz Miszka Miszke
    Misztak Mital Mitas Mitko Mitrus Mituś Mizerek Miziński Miąsek Miąskiewicz Miązek Międlar Miętek Miętki
    Miłosek Miśtak Mkrtchyan Mlak Mliczek Mlonek Mlostek Moc Mocha Mochocki Mochol Mocna Moczadło Moczarski
    Moczała Moczek Moczyńska Moczyński Moder Modrak Modras Modrzewska Modrzewski Modrzyk Moga Mogielnicka
    Mogielnicki Mogiła Mohamed Mohammed Mojsiewicz Mojżesz Mokosa Mokry Mola Molasy Molchanov Molchanova
    Molczyk Molendowska Molendowski Monastyrska Mondry Monica Moore Mor Mora Moraczewska Moraczewski
    Morańska Morański Mordaka Mordas Mordel Mordzak Moreń Morgaś Moritz Morkisz Moroziuk Moryson Moryto
    Morzy Morzyk Morąg Mosek Mosiej Mosiek Mosiewicz Mosio Mosionek Mosiądz Mosińska Mosiński Moska
    Moskalewicz Moskwik Mosler Mospan Mossakowska Mossakowski Mostova Mostowik Mosurek Mosz Moszkowicz
    Moszyńska Moszyński Mosór Motała Motowidło Motylińska Motyliński Motylska Motylski Motłoch Mozer Mozga
    Mozgawa Mozgała Mozol Mołas Mołda Mołdrzyk Mołoń Moń Mościńska Mościński Mroczyńska Mroczyński Mroszczyk
    Mrowicka Mrowicki Mroziak Mroziewicz Mruczek Mrugacz Mrugalska Mrugalski Mrzyk Muchewicz Muczyńska
    Muczyński Mul Mulak Mulawka Muliar Mulica Mulik Mulka Muntian Muranowicz Muraszko Murawa Murdzek
    Murgrabia Murphy Muryn Murza Musaev Musiatowicz Muskus Mustafa Muszak Muszalik Muszkiet Muzioł
    Muzychenko Muzychuk Muzyczuk Muła Muś Muża Mycka Mydło Mydłowska Mydłowski Myka Mykhailyk Mykhailyshyn
    Mykhaliuk Mykolaichuk Mykytenko Mynarska Myronets Myronova Myrta Mysak Mysiura Mysko Mystek Mystkowska
    Mystkowski Mysłowska Mysłowski Myśków Myślicka Myślicki Myśliwczyk Myśliwy Mórawska Mórawski Mówiński
    Mółka Mączko Mączkowska Mączkowski Mącznik Mądrawska Mądrawski Mąkowska Mąkowski Mąsior Męcina Męczyńska
    Męczyński Mędrzak Mędrzycka Mędrzycki Mędza Mękarska Mękarski Młodożeniec Młodzińska Młotkowska
    Młotkowski Młynarczuk Mścisz Nabiałczyk Naborczyk Nabożny Nabrdalik Nachman Nader Nadobnik Nadrowski
    Nadzieja Nagaj Nagi Nagiel Naglak Nagraba Nagrodzka Nagrodzki Nagy Nagórna Nagórny Nagły Nahorniak
    Najderek Najdowska Najduch Najgebauer Najmowicz Najwer Naklicka Naklicki Nakoneczny Nalborczyk Nalewaj
    Nalewajka Nalyvaiko Namiotko Napieracz Napierska Napierski Naporowska Napłoszek Narojczyk Narolska
    Narolski Narożniak Nartowicz Nartowska Nartowski Narwojsz Nasiadek Nasiadko Nastula Natkańska Natkański
    Naumchuk Naumov Naumova Nawieśniak Nawojczyk Nawojski Naworol Nawotka Nawłoka Nazarczuk Nazim Nechai
    Nechytailo Nemś Nester Nesterchuk Nesterova Netter Ngo Nguyen|Van Ngô Nicieja Niciejewska Niciejewski
    Nicińska Niciński Niechaj Niechwiadowicz Nieciecka Nieciecki Niedbał Niedojadło Niedużak Niedworok
    Niedzielak Niedzwiecka Niedzwiecki Niegowska Niegowski Niejadlik Niekurzak Nielsen Niemas Niemczewska
    Niemczewski Niemczura Niemyt Nienajadło Nienartowicz Nienałtowska Nienałtowski Nierobisz Nierodzik
    Nierzwicka Nierzwicki Niesporek Niesyto Niesłuchowska Niesłuchowski Nietupska Nietupski Niewadzi
    Niewdana Niewiadoma Niewiara Niezabitowska Niezabitowski Niezborała Niezgódka Nieznalski Nieznańska
    Nieznański Niełacny Nieświec Nikoniuk Nikulin Nikulina Nilsson Nisiewicz Niska Nitkowska Nitkowski
    Nitschke Niwa Niwczyk Niźnik Niżyńska Niżyński Nogajczyk Nogala Nogły Nojszewska Nojszewski Nolbert
    Normantowicz Nos Nosarzewska Nosarzewski Nosenko Nosiadek Nosko Noskowicz Nosowicz Novikau Novitska
    Novytska Novytskyi Nowaczewska Nowaczewski Nowaczyńska Nowaczyński Nowicz Nowobilska Nowobilski Nowocin
    Nowogrodzka Nowogrodzki Nowogórska Nowogórski Nowosadko Nowotna Nowotniak Nowowiejski Nuckowski Nurczyk
    Nurkowska Nurkowski Nuszkiewicz Nyc Nycek Nyczka Nyka Nykytiuk Nylec Nyzhnyk Nęcka Obacz Obal Obarska
    Obarski Oberc Oberda Obidzińska Obidziński Obiedzińska Obiedziński Obirek Oblizajek Obolewicz Oborska
    Oboza Obrał Obroślak Obruśnik Obszańska Obszański Obszyńska Obszyński Obłąk Ochenkowska Ochenkowski
    Ochlik Ochocińska Ochociński Ochodek Ochojska Ochojski Ochowiak Ocieczek Ociesa Oczkoś Odoj Odolczyk
    Odrowąż Odrzywolska Odrzywolski Odziemczyk Odziemek Odzimek Odziomek Ofman Ogarek Ogaza Ogierman
    Ogorzelec Ogrodniczak Ogrodniczuk Ogłoza Ohorodnyk Ojczyk Ojdana Ojrzyńska Ojrzyński Okaj Oknińska
    Okniński Okonek Okruta Okrzeja Oktaba Okularczyk Okulewicz Okulska Okulski Okupniak Okupska Okurowska
    Okurowski Okuła Okuń Olbert Olbińska Olbiński Olborska Olborski Olbrich Olcha Olchowy Olefirenko Olejko
    Oleksińska Oleksiński Oleksyk Olenderek Olesik Olesiuk Oleszak Olewicz Oleśków Oleśniewicz Olik
    Olszanowska Olszar Olszok Olszowiec Olszta Olszynka Omachel Omasta Omelianchuk Omelianenko Omilian Omyła
    Onak Ondycz Onishchenko Onisk Oniszk Onoszko Onyszczuk Onyszkiewicz Onyszko Opacka Opalska Opalski
    Opanasenko Opanasiuk Opała Opieka Opiełka Opiła Opiłka Oponowicz Oporska Oporski Opozda Oprządek
    Oraczewska Oraczewski Oraczko Oramus Orchowska Orchowski Orda Ordak Orfin Organek Organista Orlof
    Orlovska Ormaniec Ornowska Ornowski Oroń Oruba Oryszczak Orzeszyna Orzełek Osajda Osek Oset Osiadły
    Osicka Osicki Osiej Osiewała Osiniak Osip Osipchuk Osipiak Osipov Osipova Osmałek Osmulska Osoba
    Osowiecka Osowiecki Ostas Ostatek Ostałowski Ostolska Ostolski Ostrowicz Ostrysz Ostrzołek Ostrzyżek
    Ostrówka Osypchuk Oszajca Oszczyk Oszczęda Oszek Oszywa Osóbka Otawa Otocka Otocki Otrębska Otrębski Ott
    Otta Otwinowska Otwinowski Ovcharuk Owca Owsiana Owsianik Owsianny Owsik Owsińska Owsiński Ozimina
    Ozimkiewicz Ozon Oćwieja Ołownia Ołtarzewska Ołtarzewski Ośmiałowska Ośmiałowski Pabiańczyk Pabijan
    Pabisek Pabisz Pabjan Pacanowska Pacer Pacha Pachacz Pachocka Pachocki Pachota Pachut Paciej
    Paciorkowska Paciorkowski Pacuk Pacuszka Pacut Pacułt Paczek Pacześ Pacześniak Paczka Paczoska Padewska
    Padewski Padiasek Pado Padykuła Paja Pajdo Pajer Pajestka Pajączek Pajączkowska Pajączkowski Pakhomova
    Pakura Palac Palarz Palczak Palenga Palewicz Palichleb Palicka Palicki Paliichuk Palma Palmer Palmąka
    Paluchowska Palusińska Palusiński Paluszczak Paluszewska Pamięta Pancer Pancewicz Panchyshyn Pandel
    Pandey Panic Pankanin Pankevych Panko Panova Panowicz Pantoł Panufnik Papierok Papierowska Papierowski
    Papierska Papka Paradysz Parcheta Parciak Parczewska Parczewski Pardej Pardela Pardyka Parfieniuk Parka
    Parker Parkhomchuk Parma Parszewska Parszewski Parulska Paruszewska Paruszewski Parylak Parysz Paryła
    Paryż Parzybut Parzygnat Pas Pashko Pasiewicz Pasiuk Pasterczyk Pastuch Pasturczak Pastushenko Paszczyk
    Paszkot Paszylk Paszyńska Paszyński Patalan Patalon Patalong Patan Patejuk Patela Patelski Paterka
    Patkowska Patkowski Patok Patoń Patrzek Patrzyk Patynowska Patynowski Patyra Pauk Paulińska Pavelko
    Pavliuchenko Pavlovych Pawelak Pawelczak Pawlata Pawlewicz Pawlisz Pawliszak Pawlińska Pawliński Pawęzka
    Pazderska Pazderski Paziuk Pazur Pazura Pazurek Paćko Paćkowska Paćkowski Pałaszewska Pałaszewski
    Pałdyna Pałkowska Pałosz Pałuba Pańczuk Pańka Pańkowska Pańkowski Pańtak Paździorko Pec Pecio Pedersen
    Pedryc Pejas Pek Peksa Pelekh Pelikan Pelowska Pelowski Pelykh Penkała Pepłowska Pepłowski Peret
    Peretiatko Perets Perełka Pergoł Peroń Perska Perski Pertkiewicz Perun Peryga Peryt Perłowska Perłowski
    Peszek Peta Petela Petrosyan Petrovskyi Petrychenko Petryna Petryszyn Pettke Peć Pełczyńska Pełczyński
    Pełech Pełszyk Pfeifer Pfeiffer Piankowska Piankowski Piaskowy Piasny Piaszczyńska Pichlak Picz Piddubna
    Piechula Piechuta Piechówka Piecka Pieczko Pieczywek Piejak Piekielniak Pielas Pielok Pielorz Pieniek
    Pieniądz Pientka Pieprz Pieprzak Piernicka Piernicki Piernikarczyk Pieronek Pieronkiewicz Pierończyk
    Piersiak Pierwoła Pierzchalska Pierzchalski Pierzchlewicz Pierzyna Pierzyńska Pierścionek Pierścińska
    Pierściński Piesiak Piesiewicz Piesio Piestrak Piestrzeniewicz Piestrzyńska Piesyk Pieszczek Pieter
    Pietkun Pietrala Pietrasiewicz Pietruch Pietruk Pietrusińska Pietrusiński Pietruszczak Pietruś
    Pietrykowska Pietrykowski Pietrzela Pietrzycka Pietrzycki Pietrzyński Pietura Pigan Pigla Pigoń Pijanka
    Pijet Pikora Pilak Pilas Pilawska Pilawski Pilczuk Pilewska Pilewski Pilis Piliszek Pilny Pilorz Pilot
    Pilszak Pilśniak Pinas Pindur Pinkas Pinkiewicz Pinkosz Pinkowicz Pionk Pionka Pionke Piosek Piotr
    Piotrkowska Piotrkowski Piotrzkowska Piotrzkowski Pioś Pipka Piprek Pirek Pisanko Pisarkiewicz Pisiak
    Piska Piskadło Piskała Piskorowska Piskorowski Piskozub Piskuła Piszczatowska Piszczałka Piszko Pitak
    Pitoń Pitucha Piwińska Piwiński Piwnicka Piwnicki Piwoni Piór Piąstka Piątyszek Piętowski Pińkowska
    Pińkowski Pińska Piński Placha Plaszczyk Plech Plenzler Plesiak Pleskacz Plewik Plewniak Plezia Plinta
    Pliś Plota Plura Plutowska Plutowski Pląder Pniok Pochwatka Pochwała Pochylska Pochylski Poddębniak
    Podedworny Podemska Podemski Podgajna Podgajny Podlasiak Podlasińska Podlasiński Podlecka Podlecki
    Podniesińska Podniesiński Podosek Podsiad Podsiadlik Podskarbi Podstawa Podstawek Podstawska Podstawski
    Podulka Podwika Podwysocka Podwysocki Podżorska Podżorski Pogan Pogodzińska Pogodziński Pogonowska
    Pogonowski Pogrzeba Pohrebniak Pojasek Pojawa Pojnar Pokorny Pokrzywka Pokój Polaczyk Polańczyk
    Poleszczuk Polewaczyk Polewczyk Polewiak Poliak Polianska Policha Polis Poliszuk Politańska Politański
    Poliwka Pollak Pollok Polniak Polny Polonis Polowiec Polowy Polski Poltavets Pomianek Pomianowska
    Pomianowski Pondo Poneta Ponieważ Poniewierka Poniewozik Ponikiewska Ponikiewski Ponikwia Ponomarov
    Popadiuk Popanda Poparda Popenda Popielec Popielska Popieluch Popińska Popiński Poplavska Popow Popyk
    Pora Poradzisz Porczak Porczyk Pordzik Poros Porucznik Porwolik Porzezińska Porzeziński Porzuczek
    Posadzy Posiadała Poskrobko Pospieszna Pospieszny Poszytek Potaczała Potapchuk Potapczuk Potapov
    Potapova Potaś Poterała Potomska Potrzebowska Potrzebowski Potyka Povkh Powaga Powichrowska Powierza
    Powęzka Pozniak Poławska Poławski Połomka Połowniak Poździk Pożyczka Prajzner Pranczk Prandzioch Prasał
    Praska Praski Prasoł Prażmowska Prażmowski Predko Preiss Presz Priadko Priebe Prill Probierz Procajło
    Prochera Prochot Prochota Prochowska Prochoń Prochwicz Procyk Profic Prokhorenko Prokopek Prokopiv
    Proksa Promińska Proskura Prostko Prots Protsiuk Pruchniak Pruchniewicz Prudło Prugar Prusko Pruss Pryba
    Pryciak Pryczek Pryga Prymula Pryshchepa Pryshliak Pryt Przebieracz Przednowek Przedpełska Przedpełski
    Przemyk Przeor Przerada Przesmycki Przespolewski Przestrzelska Przestrzelski Przetacznik Przeworska
    Przeworski Przeździak Przeździęk Przybek Przybylińska Przybytek Przybyłka Przyczyna Przydryga Przyjemska
    Przyjemski Przyklenk Przymus Przystasz Przysucha Przytarska Przytarski Przytulska Przytulski Przęczek
    Próba Próchniewicz Prądzińska Prądziński Prądzyńska Prądzyński Prędota Prętka Prętki Pshenychna Psonak
    Psonka Psota Pstrąg Pstrągowska Pstrągowski Psuj Psuja Psujek Psyk Pszeniczna Pszeniczny Ptach
    Ptaszkiewicz Puchala Puchalik Puchałka Puciłowska Pucyk Puczyński Pudo Pudłowska Pudłowski Pukacz Pukała
    Pukowiec Pukownik Pulchny Pulkowska Pulkowski Pupiec Pupka Purchla Purta Purwin Pushkar Pustovit Pustuł
    Puszczewicz Puszka Puszkiewicz Puszko Putko Putkowska Putkowski Putra Putyra Puza Puzia Puzon Puzoń
    Pułtorak Pycia Pycka Pyczek Pydyn Pykało Pyl Pylypiuk Pypłacz Pyrak Pyrcz Pyrczak Pyrda Pyrdoł Pyrgiel
    Pyrtek Pyryt Pyrzyk Pyrzyńska Pyrzyński Pyskło Pytkowska Pytkowski Pytliński Pyvovar Pyzara Pyzel Pyzia
    Pyzio Pyznar Półkoszek Pączka Pączkowska Pączkowski Pągowska Pągowski Pąk Pęcek Pęcherz Pęczkowska
    Pęczkowski Pędzimąż Pędzisz Pęgiel Pękacz Pęzioł Pęśko Płachecka Płachecki Płachetka Płaczkiewicz Płaska
    Płaszczyk Płaszewska Płaszewski Pławska Pławski Płaziak Płoch Płocha Płocki Płoszczyca Płotek Płotkowiak
    Płończak Płucienniczak Płudowska Płudowski Pływaczyk Raban Rabczuk Rabsztyn Rabęda Rachfał Rachoń
    Rachtan Rachuta Racinowska Racinowski Racis Raczko Raczkowiak Raczyk Radawiec Radczuk Rado Radom
    Radomyski Radowska Radowski Radulski Radziak Radziej Radziuk Radziwonka Radzięta Radzińska Radziński
    Radło Rafalik Rafałowicz Rafałowska Rafałowski Rafińska Rafiński Rajczakowska Rajczakowski Rajewicz
    Rajkiewicz Rajs Rajter Rajwa Rakowiecka Rakowiecki Rakuś Rama Ramian Ramiączek Ramos Ranosz Rapacka
    Rasek Raszkowska Raszkowski Ratajek Ratajewska Ratajewski Ratajszczak Ratkiewicz Ratuszniak Ratuszny
    Raubo Rauhut Raus Rawiak Rawicka Rawicki Raźna Raźniewska Raźniewski Rdest Rebizant Rec Reca Rechnio
    Rechul Reclaf Reclik Reczuch Recław Redel Reder Redka Redlicka Redlicki Redosz Redzimska Redzimski
    Reglińska Regliński Reimus Reinke Reiss Reizer Rejak Rejczak Rejdak Rejent Rekiel Rekosz Rembelska
    Rembelski Rembiasz Rembowska Rembowski Remez Remisz Ren Renk Renkiewicz Renusz Reshetniak Ressel Reszel
    Reszko Reut Revenko Rewaj Rezner Reznik Riabchenko Riabokon Riegel Rieger Rink Riznyk Robaczewska
    Robaczewski Robakiewicz Robaszek Robert Roberts Robinson Rochowicz Roczek Roczeń Roczon Rocławska
    Rocławski Rodek Rodewald Rodriguez Rodzinka Rodzoch Rogalewska Rogalewski Rogiewicz Rogowiec Rogoz
    Rogoza Rogozik Rogoń Rogoś Rogucka Rogucki Rogus Roguszczak Roguszka Roik Rojczyk Rokosa Rokowska
    Rokowski Roksela Rolewicz Rolirad Rolińska Roliński Rolla Romanchenko Romanets Romanovych Romanyshyn
    Romanów Rombel Romel Romik Rompca Ronowicz Ropel Ropela Rosek Rosicka Rosicki Rosner Rosochacka
    Rosochacki Rost Rostás Roszczak Rosłonek Rosłoń Rot Rotar Rotari Roth Rotko Rotter Rozborski
    Rozenbajgier Rozenek Rozkosz Rozlach Rozmysłowicz Rozner Rozpędowska Rozpędowski Rozwałka Rozwód Rośniak
    Rożej Rożko Rożniata Rożnowska Rożnowski Rubach Rubas Ruchlewicz Ruczyńska Ruczyński Rudawska Rudawski
    Rudaś Rudecka Rudecki Rudiak Rudiuk Rudka Rudkiewicz Rudniak Rudny Rudnytska Rudź Rugor Rukat Rulka Runo
    Runowska Runowski Rupa Rupar Rura Rurak Rusinowicz Rusinowska Rusinowski Rusiłowicz Rusińska Rusiński
    Russ Russek Russu Rustamov Rusyn Ruszczyński Rusznica Ruzik Rułka Rybachuk Rybakiewicz Rybalchenko
    Rybarz Rybczak Rybczyk Rybiałek Rybkowska Rybkowski Rybnik Rycaj Rycak Rycharska Rycharski Rychlewicz
    Rychlica Rychliński Rychta Rychtarczyk Rychłowska Rychłowski Rychły Ryciak Rycombel Rycyk Rycąbel
    Rydlewska Rydlewski Rydzak Rydzek Ryfka Ryglewicz Rygol Rymaszewska Rymkiewicz Rymsza Rymut Ryng Ryniak
    Ryniec Ryniewicz Rynio Rynkar Rypel Rypień Rypina Rypińska Rypiński Rys Rysak Rysiewicz Ryszawa Ryszawy
    Ryt Rytczak Rytlewska Rytwińska Rytwiński Rytych Ryzhenko Ryzner Ryń Ryż Ryżak Rzadkiewicz Rzadkosz
    Rzadkowska Rzadkowski Rzeczycka Rzeczycki Rzemek Rzemińska Rzempołuch Rzepczyk Rzepiela Rzepińska
    Rzepiński Rzeszot Rzeszotarska Rzeszotarski Rzeszotek Rzeszuto Rzeszótko Rzeźnikiewicz Rzymowska
    Rzymowski Rzymska Rzymski Rzyska Rząp Rzęsa Równicka Równicki Róż Różek Różyc Różyło Rączkiewicz Rączy
    Rębilas Rędzia Rękoś Rżany Rżysko Saba Sabela Sabik Sabiniarz Sabuda Sacewicz Sacharuk Sadkiewicz Sadko
    Sadova Sadovska Sadowa Sadziński Safarov Safaryn Safian Safin Safonova Safronova Sahaidak Sahan Saiko
    Sajak Sajdok Sajko Sajna Saks Sakłak Salak Salamaga Saletnik Salii Salik Salomon Salwerowicz Samel
    Samoilova Samojlik Samojluk Samonek Samołyk Samp Samsonowicz Samuel Samulska Samulski Sandecka Sandecki
    Sandomierska Sandu Saniewska Saniewski Sapota Sapuła Sarad Sarama Saramak Sarat Sarata Sarba Sarbinowska
    Sarbinowski Sarek Sarga Sargsyan Sarlej Sarnik Sarwa Sarzała Sasal Sasiela Sasim Sasinowska Sasinowski
    Satoła Satro Sauer Savchak Savelieva Savin Savina Savitska Savitskyi Savych Savytskyi Sawala Sawczyn
    Sawiak Sawina Sałach Sałaciak Sałaj Sałamacha Sałapatek Sałyga Sałęga Sańko Schabek Schabowska
    Schabowski Scheffler Schenk Schmidtke Schultz Schumacher Schuster Schwartz Schäfer Scott Sebzda Sech
    Seemann Segiet Seklecka Seklecki Sekula Sekular Sekunda Selke Sell Semak Semenchenko Semenets Semkiv
    Semko Sen Sendal Sendecka Sendecki Sendek Sender Senderek Sendrowicz Seniv Senkiv Senko Senkowska
    Senkowski Senska Sepioło Serba Seredyn Serej Serewa Serhieieva Serhiichuk Serkis Sermak Serocka Serocki
    Seruga Serwan Serwata Serweta Serwińska Serwiński Serwotka Setla Sewera Sewiło Seń Seńko Shamrai
    Sharipov Sharko Shcherbakov Shcherbatiuk Sheiko Sherstiuk Shin Shlapak Shramko Shtanko Shtefan Shumeiko
    Shumylo Shvorak Shymanska Shymko Shynkaruk Shyshko Siarkowska Siarkowski Sibilska Sibilski Sidorska
    Sidorski Sidwa Siegert Siegień Siegmund Siejek Siekaniec Siekierko Sieklucka Sieklucki Sielewicz
    Siemieniak Siemieniako Siemionek Siemko Sieniek Sieniuć Sienko Siepak Sieprawska Sieprawski Siepsiak
    Sierak Sierny Sierocińska Sierociński Siewior Siewniak Sieńczak Sieńska Sieński Sijka Silska Silski
    Simlat Singer Sinica Sinicka Sinicki Sinkowska Siok Sioma Siorek Sipak Sipowicz Sira Siryk Siuciak
    Siudut Siudziński Sivak Siwecka Siwecki Siwonia Siwoń Siódmiak Siąkała Siębor Siłka Skaba Skakuj
    Skalińska Skalniak Skawska Skawski Skałbania Skiera Skierkowska Skierkowski Skimina Skitek Skliarenko
    Skokowska Skolmowska Skolmowski Skomorowska Skomorowski Skoniecka Skopińska Skopiński Skora Skorokhod
    Skorus Skoryk Skorża Skotak Skotarczyk Skotniczna Skroban Skrobała Skrocka Skrocki Skruch Skrzat
    Skrzeczkowska Skrzeczkowski Skrzeszewska Skrzeszewski Skrzydlewska Skrzydlewski Skrzydło Skrzynecka
    Skrzynecki Skrzyp Skrzęta Skręta Skrężyna Skuba Skubel Skubik Skubiszewska Skubiszewski Skulimowska
    Skulimowski Skurska Skurski Skurzyńska Skurzyński Skutela Skwarczek Skwark Skwarska Skwarski Skweres
    Skwiercz Skwiot Skórzewski Skąpska Skąpski Składanowska Składanowski Slipchenko Sliusarenko Slobodeniuk
    Slobodianyk Slyvka Smagieł Smalarz Smalcerz Smardzewska Smejda Smentoch Smereka Smiatek Smirnow Smoderek
    Smogorzewska Smogorzewski Smogór Smolin Smolis Smoląg Smoroń Smołkowicz Smołuch Smołucha Smug Smuk Smus
    Smycz Smyczyńska Smyczyński Smyka Smyrek Smyrnov Smyrnova Smyła Smędzik Snihur Snitko Snochowska
    Snochowski Snopkiewicz Snopkowska Snopkowski Sobaniec Sobas Sobaś Sobchuk Sobera Sobesto Sobiczewska
    Sobiczewski Sobiechowska Sobiechowski Sobieralska Sobieralski Sobieszczańska Sobieszczuk Sobiś Sobka
    Sobkowska Sobkowski Sobocik Soboczyńska Soboniak Sobura Sobusiak Sobór Socała Sochaczewska Sochaczewski
    Sochal Sochocka Sochocki Soczyńska Soczyński Sodel Sokolik Sokoliuk Sokolińska Sokoliński Sokolnicka
    Sokolnicki Sokur Solan Solawa Solianyk Solik Solka Soloch Solohub Solon Sominka Song Sonik Sontowska
    Sontowski Sopala Soprych Sopyła Sorek Soroczyńska Sorys Sosik Sotek Sotnyk Sova Sowada Sowul Sozańska
    Sozański Sołtyk Sołyga Sośnierz Spała Specht Spendel Spera Sperka Sperling Spica Spierewka Splitt Sposób
    Sprengel Sprysak Spryszak Spurek Sputo Spyt Spórna Srebro Stabla Stabrawa Stacewicz Stachacz Stachańczyk
    Stachecka Stachecki Stachel Stacherczak Stachniuk Stafiej Stajszczak Stakhiv Stal Stanecki Stangreciak
    Stangret Stanios Stanke Stankevich Stankevych Stanko Stankowiak Stanny Starak Starchenko Starczyk
    Starnawska Starnawski Starobrat Starodub Staros Starosz Staroszczyk Starszak Stasiukiewicz Stasiv Stasz
    Staszałek Staszczuk Staszko Staszków Staszowska Staszyńska Staszyński Stawarczyk Stawarska Stawarski
    Stawecka Stawecki Stawiak Stawik Stawiszyńska Stawowska Stawowski Stań Stańkowska Stańkowski Stecka
    Stecki Steczkiewicz Steczko Stefaniszyn Stefanko Stefanyshyn Stefanów Stefańczuk Stefurak Steinborn
    Steiner Steliga Stelmashchuk Stelmasik Stelmaszczuk Stelmaszek Stelmaszuk Stempak Stempka Stemplewska
    Stemplewski Stempniewicz Stepanchuk Stepanets Stepaniak Stepek Stephan Stern Sternicka Sternicki
    Sterniczuk Stets Stodolak Stodolna Stodolska Stodolski Stoińska Stoiński Stolarczuk Stolińska Stoliński
    Stolz Stopczyk Stopińska Storozhenko Stotko Strachota Stradomska Stradomski Straub Straus Streich
    Strilets Stromska Stromski Strońska Stroński Strożek Strugacz Strulak Strumińska Strumiński Strusińska
    Strusiński Strużyńska Strużyński Strycharczyk Stryjak Strykowska Strykowski Stryzhak Strzałek
    Strzelewicz Strzemieczna Strzemieczny Strzesak Strzeżek Strząbała Stróżak Strączyńska Strączyński Strąg
    Stręciwilk Stuczyńska Stuczyński Styka Stysiak Stós Stącel Stąporek Stąsiek Stępa Stęplewska Stęplewski
    Stężała Subda Suchara Suchańska Suchański Suchcicka Suchcicki Suchenia Sucholas Suchorab Suchorska
    Suchorski Suchowiecka Suchowiecki Sudomir Suduł Sufin Suhak Sujak Sujkowska Sujkowski Sukach Sulecka
    Sulecki Suleimanov Sulisz Sulka Sulyma Sun Supel Supruniuk Supryn Surdej Surdy Surowaniec Surowiak
    Surowiecka Surowiecki Susfał Susz Suszczewicz Suszczyńska Suszczyński Sutowicz Sutuła Suwara Suwińska
    Suwiński Sułecka Sułecki Suś Suślik Svyrydenko Swadźba Swatowska Swatowski Sworowska Sworowski Swół
    Swędrowska Swędrowski Sycha Sychowicz Sychowska Sychowski Sychta Sydorov Sydorova Syga Sygit Syguda
    Syjud Sykulska Sykulski Sylka Synoś Synówka Syper Sypka Sypko Syposz Syrota Syrotiuk Sysa Sysiak Sytnik
    Syvak Szabała Szachta Szacoń Szafer Szaflarski Szaflik Szafoni Szafron Szaja Szajer Szajewska Szajewski
    Szajkowska Szajkowski Szakiel Szalacha Szalaty Szalbot Szaleniec Szalewska Szalewski Szalińska Szaliński
    Szalkowska Szalkowski Szamocka Szamocki Szapiel Szara Szarafin Szarkowicz Szarkowska Szarkowski Szarlej
    Szaroleta Szarota Szast Szastak Szatanek Szaton Szawłowska Szawłowski Szała Szałach Szałapska Szałęga
    Szczapa Szczeblewska Szczeblewski Szczechowiak Szczechowska Szczechowski Szczelina Szczepankowska
    Szczepankowski Szczepara Szczepińska Szczepiński Szczepka Szczerbal Szczerbicka Szczerbicki Szczerbowska
    Szczerbowski Szczerkowska Szczerkowski Szczeszek Szczodry Szczucki Szczukowska Szczukowski Szczurko
    Szczyglak Szczypa Szczypiór Szczypkowska Szczypkowski Szczyrbak Szczyrek Szcząchor Szecówka Szegda
    Szejna Szeligowska Szeligowski Szeloch Szelągiewicz Szelążek Szendera Szenk Szepielak Szepietowska
    Szepietowski Szerląg Szeszuła Szewczykowska Szewczykowski Szindler Szkałuba Szkiłądź Szklanny Szkudlarz
    Szkurłat Szkuta Szkółka Szlacheta Szlachetko Szlagor Szlagowska Szlagowski Szlas Szlasa Szlaska Szlaski
    Szlosek Szmaglińska Szmagliński Szmania Szmańda Szmul Szmulewicz Szmulik Szmydt Szmytkowska Szmytkowski
    Sznapka Szneider Sznober Szober Szocik Szofer Szojda Szoma Szombara Szołtys Szołucha Szpakowicz Szparaga
    Szpejna Szpigiel Szpil Szpinda Szponder Szproch Szpura Szrajber Szreiber Szreter Szromek Sztobryn Szturo
    Sztwiertnia Sztyber Sztyk Sztyler Sztylka Szuber Szuberla Szubińska Szubiński Szubska Szubski Szubzda
    Szuchnik Szudra Szudy Szulborska Szulborski Szulczyńska Szulczyński Szulecka Szulecki Szuleta Szulfer
    Szulga Szulkowska Szulkowski Szultka Szumańska Szumański Szumera Szumigaj Szumlas Szumlańska Szumlański
    Szustek Szustkiewicz Szutenberg Szutko Szutkowska Szutowicz Szwaczka Szwagierczak Szwagrzyk Szwajda
    Szwajka Szwajnoch Szwast Szwech Szwedek Szwedowska Szwedowski Szwejkowska Szwejkowski Szwichtenberg
    Szwoch Szwugier Szybowska Szybowski Szydlak Szygenda Szyk Szylak Szyler Szyller Szymacha Szymak
    Szymańczuk Szymecka Szymecki Szymichowska Szymichowski Szymiec Szymikowska Szymko Szymkowski Szymonowicz
    Szymska Szymski Szymusiak Szymuś Szynaka Szynkaruk Szynkowska Szynkowski Szynol Szyperska Szypryt
    Szypura Szysz Szyłak Szęszoł Sączek Sęczkowska Sęczkowski Sęga Sęktas Słabiak Słabicka Słabicki Słabik
    Słapa Sławuta Słocińska Słociński Słodki Słodkiewicz Słojewski Słomczewska Słomiana Słomkowska Słoniec
    Słoniewska Słoniewski Słowakiewicz Słońska Słoński Sługocki Słupecka Słupecki Słupianek Słupińska
    Słuszniak Służałek Tabaczyńska Tabaczyński Tabin Taborek Taborska Taborski Tadeusz Tadrzak Tadzik Tajak
    Tajchman Tajer Tajs Talacha Talarowska Talarowski Talko Talkowska Talkowski Tama Tambor Tamborska
    Tamborski Tamioła Tandek Tarabasz Tarabuła Taracha Tararuj Tarasevich Taraszka Tarała Tarchała Tarczoń
    Targowska Tarnacki Tarnas Tarsa Tarłowska Tarłowski Tatarchuk Tatarczuch Tatarenko Tataryn Tatka Tatko
    Tatol Taube Taudul Tałałaj Tekielak Tekień Telenga Telążka Templin Tendera Tenderenda Teodorczuk
    Teofilak Teperek Tereba Terech Terefenko Terletska Terletskyi Terpiłowska Terpiłowski Teslia Tesliuk
    Tesmer Tessmer Tetera Tetlak Tetzlaff Tetłak Thiede Thompson Tietz Til Timchenko Tishchenko Titarenko
    Titov Titova Tkachov Tkachova Tkachyk Tlaga Tlołka Tobera Tobiczyk Tobjasz Tobys Tocha Tochowicz
    Toczydłowska Toczydłowski Toczyska Toczyski Toczyńska Toczyński Tokarzewska Tokarzewski Tomalka Tomalska
    Tomalski Tomana Tomasz Tomaszczuk Tomaś Tomchuk Tomczewska Tomczewski Tomczyńska Tomczyński Tomeczek
    Tomica Tomiło Tomkiel Tomusiak Tomza Tondel Toporkiewicz Toporowicz Topyła Tor Torka Torończak Toruń
    Torz Torzewska Torzewski Toton Totoń Tołkacz Tołpa Tołwińska Tołwiński Traczyńska Traczyński Trafas
    Trafna Trafny Tratkiewicz Trawczyński Trawicka Trawicki Trelka Trendak Trendel Tretiakova Troc
    Trochimczuk Trochonowicz Trochowski Trocińska Trociński Troczyński Trofimiuk Trofymchuk Trofymenko
    Trokhymchuk Tront Troska Trotsenko Trukawka Trusewicz Trusiak Trusiewicz Trusz Truszkiewicz Truś
    Trybulec Trybulska Trybulski Tryhub Tryk Trykacz Tryniszewska Tryniszewski Trytek Trytko Trzaskawka
    Trzaskoma Trzcinka Trzepacz Trzepałka Trzewik Trześniowska Trześniowski Trzmielewska Trzmielewski
    Trzonek Trzosek Trzpiot Trzupek Trzópek Tręda Tsap Tsarenko Tsaryk Tsybulska Tubek Tuchowska Tuchowski
    Tucka Tucki Tuczyńska Tukaj Tul Tulej Tulik Tulin Tumidajewicz Tunkiewicz Turała Turbak Turbiarz Turcza
    Turczak Turecka Turecki Turemka Turkot Turniak Turos Turowicz Tusznio Tułodziecka Tułodziecki Tuźnik
    Twarda Twardawa Twardziak Tybor Tyborowska Tyborowski Tyburcy Tyburek Tyda Tykhonova Tylak Tyliszczak
    Tyliński Tylko Tymchyshyn Tymczak Tymoczko Tymosiak Typa Typek Typiak Tyra Tyran Tyras Tyrcha Tyrna
    Tyrpa Tyrpak Tyshchuk Tyszkowska Tyszkowski Tytoń Tytuła Tywonek Tłoczek Tłuścik Uba Uberman Ubik Ubych
    Uchacz Uchto Uchwat Uchyła Uddin Udovychenko Udziela Uhryn Ulbrych Ulczok Ulejczyk Ulenberg Ulfig Ulicka
    Ulicki Uliński Umanets Unger Ura Uram Urbas Urgacz Uryszek Urzędowska Urzędowski Us Ushakova Uszok Utnik
    Uzarska Uzdowska Uzdowski Uzun Ułasiuk Uścinowicz Uścińska Uściński Valchuk Vaskiv Vasko Vasylevska
    Vasyliv Vasylkiv Velyka Venher Verbytska Verbytskyi Veremchuk Verhun Vintoniak Vitiuk Vitán Voronin
    Voronina Voroniuk Voronova Vovchenko Vovchuk Vozna Voznyi Vynohradova Vyshnevskyi Vysotskyi Võ Wabnic
    Wacek Wachel Wachnicka Wachol Wachowiec Wais Wajman Wajnert Wajszczuk Wajszczyk Waksmundzka Waksmundzki
    Wakuluk Walak Walasiak Walawender Walczyna Walenczak Walendowska Walendowski Walentek Waleriańczyk
    Walerych Walesiak Waleńska Waleński Walica Walisiak Walińska Waliński Walker Walko Walków Wall Walnik
    Walos Walotek Walotka Walska Walski Waluga Waląg Walędziak Wandachowicz Wandtke Wandycz Wankiewicz Wanot
    Wantulok Warcaba Warcholak Wardyn Warecka Warecki Wargacka Wargacki Wargin Wargocki Warias Warkocz
    Warmiński Warot Warowna Warsińska Warszewska Wartacz Waryszak Warzych Warzywoda Wasak Wasiek Wasiela
    Wasilczuk Wasilczyk Wasiuta Wasiłek Wastag Wasyl Wasylewicz Wasylik Wasyliszyn Waszut Wasąg Watkowska
    Watkowski Watrak Wawerek Wawryka Wawryszczuk Wawrzacz Wawrzeniuk Wawrzeń Wawrzkowicz Wawrzon
    Wawrzonkowska Wawrzonkowski Wawrzusiszyn Wawrzycka Wawrzycki Wawrzyk Wawrzyniuk Wałachowska Wałachowski
    Wałęka Wańdoch Waśkowiak Waśkowicz Waśkowska Waśkowski Ważydrąg Wdowicz Wdówka Weimann Wejer Wejner
    Welter Wenderlich Wendland Wenerska Wenerski Went Wera Wernicki Weryński Weselak Wesoła Westphal
    Wetoszka Wewiór Wełnic Wełpa White Wiaderna Wicka Wicki Wiczkowska Wiczkowski Wiczling Widak Widenka
    Widerska Widełka Widurski Wiechetek Wiechnik Wiecka Wiejaczka Wielechowska Wielechowski Wielemborek
    Wielgomas Wielkopolan Wiench Wiera Wierciak Wierciszewska Wierciszewski Wiernicka Wiernicki Wierny
    Wierucka Wierucki Wieruszewska Wieruszewski Wierzejska Wierzejski Wierzgacz Wieszczek Wieszołek Wietrak
    Wietrzyńska Wietrzyński Wiewiór Wiewiórska Wiewiórski Wiglusz Wikar Wikieł Wilanowska Wilanowski
    Wilczkiewicz Wilczok Wilczura Wilde Wilewska Wilewski Wileńska Wileński Wilgos Wilhelm Wilke Wilkiewicz
    Wilkołek Wilkus Wilmańska Wilmański Wiloch Wilson Wincek Winciorek Winczewska Winczewski Winczura
    Winkiel Wiora Wisełka Wisińska Wisiński Wistuba Wisłocka Wisłocki Witalec Witasik Witaszczyk Witosz
    Wittek Wittke Wittstock Witucka Witucki Witusik Wiąckiewicz Wiączek Więcaszek Więckowicz Więczkowska
    Więczkowski Więdłocha Więsyk Wiśniak Wiśnicka Wiśnicki Wiśnioch Wiśnios Wlazłowska Wlazłowski Wleciał
    Wloka Wocka Wodara Wodarczyk Wodarz Wodniak Wodyk Wodyńska Wodyński Wojakowska Wojakowski Wojcieszko
    Wojcik Wojciuch Wojdan Wojdas Wojdała Wojdylak Wojkowska Wojkowski Wojnarska Wojnarski Wojsz Wojtachnio
    Wojtanek Wojtasińska Wojtasiński Wojtaszewska Wojtaszewski Wojtków Wojtusik Wojtuś Wojtylak Wojtyło
    Wojtyńska Wojtyński Wolarz Wolas Woldan Woldańska Wolfram Wolniaczyk Wolnicka Wolnicki Wolsza
    Wolsztyniak Wolter Worobiec Worobiej Worona Woroszyło Woryna Worytko Wosińska Wosiński Wosz Woszczyńska
    Woszczyński Woszek Wowk Wozińska Woziński Wołczek Wołejko Wołkowska Wołkowski Wołodkiewicz Wołodko
    Wołosewicz Wołosiuk Wołoszczak Wołoszka Wołowczyk Wołowik Wołyńska Wołyński Wośkowiak Woźniakiewicz
    Woźniczak Woźniewska Woźnik Wraga Wrażeń Wrembel Wrobel Wrocławska Wrocławski Wrodarczyk Wroniewicz
    Wrosz Wrotek Wrotniak Wrożyna Wrycza Wrzalik Wrzeciono Wrzodak Wróblewicz Wrótniak Wrębiak Wszeborowska
    Wszeborowski Wszędybył Wsół Wtykło Wujcik Wujczak Wuwer Wybierała Wychowałek Wycisło Wyczesany
    Wyczółkowska Wyczółkowski Wydro Wyganowska Wyglądacz Wyglądała Wykowska Wykowski Wykrętowicz Wyleżoł
    Wylot Wypart Wypasek Wyrzykiewicz Wysmułek Wysopal Wytrykus Wywrot Wyżga Wyżgoł Wyżlic Wyżykowska
    Wyżykowski Wziętek Wódz Wójciga Wójciuk Wółkiewicz Wągiel Wągrowska Wągrowski Wąsak Wąsiel Wąsikowska
    Wąsikowski Wątorek Węc Węclewska Węclewski Węcławek Węcławiak Węcławik Węcławska Węcławski Wędzicha
    Węgierska Węgierski Węglarczyk Węglarska Węglarski Węglorz Węglowska Węglowski Węgorek Węgrzyńska
    Węgrzyński Węsek Węsiora Własiuk Włochowicz Włodarkiewicz Włosińska Włosiński Włosowicz Włostowska
    Włostowski Włoszczyk Włudarczyk Włudyka Włusek Yablonska Yadav Yakovchuk Yakovets Yakovlev Yakovleva
    Yakovliev Yakubovska Yakymets Yakymiv Yankovska Yaremko Yarmak Yarmolenko Yaroshchuk Yarovyi Yasinska
    Yatskiv Yatsuk Yatsyk Yatsyshyn Yefimova Yefremova Yehorov Yemelianova Yermak Yermakova Yudina
    Yukhymchuk Yukhymenko Yurchak Yurchyk Yurkevych Yurkiv Yushchuk Yusupov Zabagło Zabawska Zabdyr
    Zabiegała Zabolotna Zabolotnyi Zabost Zacharko Zacharz Zacharzewska Zacharzewski Zachciał Zacny
    Zaczkowska Zaczkowski Zaczyńska Zaczyński Zadura Zagawa Zagała Zagańczyk Zagdańska Zagdański Zagozdon
    Zagraba Zagroba Zagrobelny Zagól Zagórny Zahoruiko Zajas Zajchowska Zajchowski Zajdler Zajfert
    Zakaszewska Zakaszewski Zakharenko Zakrocka Zalejska Zalejski Zalewa Zaleśna Zalisz Zalińska Zaliński
    Zamiar Zandecka Zandecki Zapisek Zaporowska Zaporowski Zaprawa Zapłata Zarach Zarembska Zarembski Zaroda
    Zarosa Zarzeka Zarzyka Zarówny Zasadzińska Zasadziński Zasadzka Zasadzki Zaskórska Zaskórski Zasowska
    Zasowski Zasuwa Zasuń Zasłona Zatońska Zatoński Zatyka Zavhorodnia Zavhorodnii Zawacka Zawacki
    Zawadzińska Zawadziński Zawidzka Zawidzki Zawierta Zawilińska Zawiliński Zawiślan Zawodna Zawrotniak
    Zawrzykraj Zawół Zayats Zazula Załucka Załucki Załuga Załóg Zańko Zaśko Zbierska Zbierski Zbieć Zboch
    Zboralska Zboralski Zbozień Zbyrad Zdankiewicz Zdebik Zdebska Zdebski Zdrada Zdral Zdrenka Zdrodowska
    Zdulska Zdulski Zdunkiewicz Zduńczuk Zduńska Zduński Zdybał Zdziebłowska Zdziebłowski Zegarek Zelenko
    Zelenska Zelenskyi Zelewska Zelewski Zelga Zelik Zelinskyi Zelman Zembroń Zemczak Zemke Zemsta Zemło
    Zenka Zenker Zep Zezula Zganiacz Zgiet Zgorzałek Zgorzelska Zgorzelski Zgutka Zgórska Zgórski Zhadan
    Zheng Zhu Zhukovska Zhukovskyi Zhuravlov Zhurba Zhyla Ziach Ziajor Ziarkiewicz Ziebura Zielak
    Zieleniewska Zieleniewski Zielenkiewicz Zielezińska Zieleziński Zieleźnik Zielinska Zielinski Zielnik
    Zielony Zielska Zielski Ziembińska Ziembiński Ziembla Ziemian Ziemianin Ziemnicka Ziemnicki Zieniuk
    Ziental Zientarska Zientarski Ziewiec Zieziula Zimińska Zimon Zimowska Zimończyk Zinkevych Zinko Ziobroń
    Ziółkiewicz Ziębińska Ziębiński Ziętala Ziętarska Ziętarski Ziętkowska Ziętkowski Zięć Zińczuk Zjawin
    Zjawiony Zjawińska Zmarzlik Zmudzińska Zmudziński Znamirowska Znamirowski Zniszczoł Znyk Znój Zolich
    Zorychta Zowada Zowczak Zubenko Zubkowicz Zubrycka Zubrycki Zuchniak Zuchora Zug Zuzga Zwarycz Zwiernik
    Zwiewka Zwijacz Zwolan Zwolenik Zyber Zybert Zychla Zygan Zyma Zymek Zynek Zyra Zyska Zywert Zyśko
    Ząbczyk Ząber Ząbik Złomańczuk Złotowska Złotowski Złotucha Złoty Öztürk Ćwieląg Ćwiklak Ćwiklik
    Ćwikowska Ćwikowski Ćwiok Ćwięk Ćwięka Ćwiękała Łabiak Łabieniec Łabuzek Łabęda Łacheta Łacna Ładno
    Ładosz Łaga Łagan Łagocka Łagocki Łaguna Łagód Łajczak Łakomiak Łamasz Łaniewska Łaniewski Łanoszka
    Łanucha Łapawa Łapczyńska Łapczyński Łapkiewicz Łapucha Łasek Łasińska Łaskarzewska Łaskarzewski
    Łaskawska Łaskawski Łastowska Łastowski Łaszczewska Łaszczewski Łaszczuk Łaszczych Łatacz Łatak Ławiński
    Ławnik Ławska Ławski Łaz Łazar Łazarowicz Łazicka Łazicki Łazińska Łaziński Łazor Łazorczyk Łazuka
    Łażewska Łażewski Łebkowska Łebkowski Łechtańska Łechtański Łobaza Łobejko Łobocka Łobocki Łobodziec
    Łobos Łoboz Łochowicz Łochowska Łochowski Łodziana Łodziński Łojas Łokieć Łomnicka Łomnicki Łomża
    Łopaciuk Łopińska Łopiński Łopuch Łosik Łosin Łoskot Łotysz Łowisz Łońska Łoński Łożyńska Łożyński
    Łubian Łubianka Łubiarz Łubik Łucarz Łuciuk Łuczko Łuczyszyn Łukacz Łukaszczuk Łukiewicz Łusiewicz
    Łuszczewska Łuszczewski Łuszczki Łuszkiewicz Łuć Łuźniak Łużna Łużny Łyczba Łyczywek Łyduch Łykowska
    Łykowski Łysień Łyskawka Łysko Łyszczak Łyszczek Łyszkiewicz Łyszkowicz Łyszkowska Łyszkowski Łączek
    Łączkowska Łączkowski Łąpieś Łątkowska Łątkowski Łęga Łękawa Łękawska Łękawski Łępa Łętocha Łętowska
    Łętowski Łężniak Ściana Ścibak Ścibiorek Ścieszko Ścigaj Ścirka Ścisło Śladowska Śladowski Ślaska Ślaski
    Ślawski Śledziona Ślepowrońska Ślepowroński Ślesicka Ślesicki Ślesińska Ślesiński Śleszyńska Śleszyński
    Śleziona Śliwak Śliwczyńska Śliżewska Śliżewski Ślosarczyk Ślósarczyk Ślączka Ślęczek Ślęk Śmiarowska
    Śmiarowski Śmieciuch Śmielak Śmiertka Śmigasiewicz Śmiłek Śmiłowska Śmiłowski Śniadach Śniadała Śniady
    Śniatała Śniegocka Śniegocki Śniegowska Śniegowski Śniegula Śnieć Śpica Śpiewok Śrama Średniawa
    Średnicka Średnicki Środoń Śron Śrutwa Światły Świca Świda Świdrak Świdwa Świeczka Świerz Świerzko
    Świerzy Świerżewski Świeżak Świeży Świgut Świnoga Świostek Świrk Świstowska Świstowski Świąć Święconek
    Świś Żabik Żabska Żabski Żakieta Żakowicz Żarek Żarkowski Żarnoch Żarłok Żebracka Żebracki Żegota Żejmo
    Żelek Żelezik Żeleźniak Żeleźnik Żelisko Żemła Żerebiec Żerek Żmich Żmudka Żmudzin Żoch Żołdak
    Żołnierczuk Żołnierek Żołyńska Żołyński Żubrowska Żubrowski Żukowicz Żulewska Żulewski Żurakowska
    Żurakowski Żuralska Żuralski Żurawek Żurawicz Żurańska Żurański Żurkiewicz Żurkowska Żurkowski Żuławnik
    Żwirek Żychlińska Żychliński Życka Żygłowicz Żylak Żyluk Żymła Żyra Żyta Żytka Żytkiewicz Żyłowska
    Żyłowski Żyśko Żółkiewska Żółkiewski Żółkowska Żółkowski Żółtak Żółtaszek Żółtańska Żółtański Żółty
  `],
  [1450, `
    Abashidze Abbasov Abdullayev Abramik Abramiuk Abramovich Abramovych Abramska Abramski Abucewicz Abuladze
    Achramowicz Adamarek Adamcewicz Adamovich Adamovych Adasiak Adaszak Adaszek Adaszewska Adaszewski
    Adaszkiewicz Adaś Adolf Adryan Afeltowicz Agacińska Agaciński Agata Agatowska Agatowski Ahmadov
    Akhmedova Akimova Akonom Akopian Aksonov Aksonova Albecka Albecki Alberska Alberski Aleksanderek
    Aleksandruk Aleksieienko Aleksieiev Aleksiewicz Aleksy Aleszczyk Alichniewicz Aliiev Allen Alot Altman
    Amarowicz Ambroż Ambrożkiewicz Amerek Amin An Anasiewicz Andrasik Andrejko Andriievska Andriiuk Andruch
    Andruk Andrusenko Andrushchak Andrusieczko Andrusiuk Andrusyk Andrusyshyn Andruszczak Andruszewska
    Andruszków Andrysiewicz Andrzejewicz Anduła Andzel Angelov Angowski Anikiej Aniołkowska Aniołkowski
    Anisiewicz Anisimov Aniśkiewicz Ankudowicz Antolec Antolik Anton Antoniewski Antoniv Antoshchuk Antoszak
    Antoszczak Antoszczuk Antypenko Anulewicz Anysz Anzel Anzorge Apanasewicz Apel Apolinarski Appel Aptacy
    Aranowska Aranowski Arasim Araucz Araśniewicz Araźna Araźny Arcab Arcimowicz Arczyński Arentowicz Arkit
    Arkita Arnaut Arnista Artemchuk Artym Artymiak Artymowicz Artyszuk Arutiunian Arwaj Asenov Aszkiełowicz
    Asztemborska Asztemborski Atamańczuk Auer Augustin Auguściak Avdieieva Avetisyan Aziz Azizov B|K Babayev
    Babczyńska Babczyński Babecka Babecki Babiec Babin Babina Babis Babiś Babkiewicz Babral Babul Babulewicz
    Babuśka Bacewicz Bachara Bachmura Bachniak Bachor Bachula Bachurska Bachurski Bachynskyi Backiel
    Baczkowska Baczkowski Badaczewska Badaczewski Bader Badełek Badeńska Bado Badowicz Badoń Badurowicz
    Badyna Badzioch Baer Bagniewska Bagniewski Bahdanovich Bahlai Bahniuk Baida Bajcer Bajdak Bajena
    Bajerowska Bajerowski Bajkiewicz Bajorska Bajorski Bajur Bajura Bajwoluk Bakai Baker Bakota Bakunowicz
    Balaniuk Balashova Balcerczyk Balcerska Balcerski Balejko Balewicz Baliga Balkiewicz Balmas Baluch Baluk
    Balukiewicz Balyk Banachewicz Banacka Banacki Banaczek Banaczyk Banakiewicz Banaszyńska Bancewicz
    Bandarenka Banduch Baniewicz Bank Bannach Banot Banucha Baraniewicz Barańczak Barbachowska Barbachowski
    Barcewicz Barchan Barchańska Barchański Barchuk Barciak Barda Bardo Bargieła Barglik Barnak Barnowska
    Barnowski Barowicz Barra Barszczowska Barszczowski Bartek Bartniczuk Bartnikiewicz Bartold Bartoszko
    Bartoszyńska Bartoszyński Bartsch Bartuzel Bartyś Baruch Barut Barycka Barycki Baryluk Barysevich Baryś
    Barzowska Barzycka Barzycki Barłoga Basaraba Basik Basior Basisty Basnet Bassara Bat Batkowski Baturo
    Batycka Batycki Bauch Baumert Baur Baut Bawej Bawiec Bawolska Bawolski Bawół Bazelak Bazgier Bałakier
    Bałamut Bałanda Bałasz Bałata Bałda Bałdowska Bałdowski Bałka Bałuszek Bałuszyńska Bałuszyński Bałwas
    Bańbuła Bańcer Bańdur Bańdura Bańkosz Baśkiewicz Bażant Bebko Bech Becla Beczak Bednara Bednaruk
    Bedrunka Bedus Bedyńska Bedyński Behr Beier Bejer Bejgier Bejgrowicz Bejnar Bekh Bekieszczuk Beksa Belei
    Beleć Belinska Belinskyi Bella Belt Bemben Benc Benda Bendkowska Bendkowski Bendowska Bendowski Benduch
    Benedyczak Benek Benesz Benka Benko Benkowska Benkowski Bennett Berbeka Berdychowska Berdychowski Berdys
    Berej Berezka Bereżańska Bereżański Bergel Bergman Bernady Bernal Bernas Bernasiewicz Bernatska Bernecka
    Bernecki Berny Bernyś Berski Besarab Beska Bespalko Bestry Besz Betiuk Betkier Betleja Betlińska Bettin
    Beyger Beza Bezhenar Bezkorovainyi Bezler Bezuhla Bełch Bełtowska Bełtowski Bełzak Białasiewicz Białasz
    Białko Białousz Bibro Bicka Bicki Bider Biderman Biedacha Biedziak Bieg Biegajło Bielach Bielamowicz
    Bielarczyk Bielaszewski Bielawiec Bielawna Bielawny Bielenia Bielenin Bieliaiev Bielicz Bielikova Bielov
    Bielówka Bienasz Bienert Bieniarz Bieniaszewska Bieniaszewski Bienkiewicz Bierowiec Bieruta Bierć Biesik
    Bieszka Bieńczyk Bieżuńska Bieżuński Bigott Bikowska Bikowski Bilak Bilas Bilicz Bilinska Bilkiewicz
    Bilnik Bilon Bilousov Binias Biniasz Binko Biraga Birek Biriuk Biriukov Birlet Biront Biros Bisewska
    Bisewski Bisikiewicz Bisiorek Bisztyga Bitel Bizan Bizewska Bizewski Biziorek Bizon Biłko Bińkiewicz
    Biśta Biżek Blabuś Blach Blady Bladziak Blashchuk Blaszczyk Blaźniak Blecharz Blejwas Blicharczyk
    Bliźniuk Blus Blyshchyk Bobeł Bobin Bobka Boboń Bobro Bobrov Bobrova Bobrzyk Bobusia Bobyr Bocharova
    Bochat Bochińska Bochiński Bochno Bociańska Bociański Boczulak Boda Bodanka Bodera Bodio Bodnariuk
    Bodora Boduszek Bodziuch Bogaczewicz Bogatko Bogdaniuk Bogocz Bogun Bogut Bohachuk Bohdanets Bohn
    Bohomaz Bohonos Boika Boike Bojakowska Bojakowski Bojanek Bojańczyk Bojdys Bojka Bokwa Bola Bolimowski
    Bolisęga Bolińska Boliński Bolkvadze Bombelka Bonarek Bonarska Bonarski Bonczek Bondarczuk Bondarets
    Bondariev Bondarieva Bondos Bonecka Bonek Boniewicz Bonkowska Bonkowski Bonus Bor Bora Borchardt
    Borchert Borciuch Borczon Borczyńska Borczyński Bordewicz Bordun Boreiko Borejszo Borgieł Borgul Born
    Borodai Boros Borovskyi Borowicka Borowicki Borsukiewicz Bort Bortlik Bortniczuk Bortnowska Borucińska
    Boruciński Borusiewicz Borychowska Boryka Boryna Boryszewska Boryszewski Boryło Bosa Bosacka Bosacki
    Bosenko Bosiacki Bosko Bota Bovkun Bownik Boyke Bozhenko Bozhok Boć Boćko Bołbot Bołdys Bołtuć Bożko
    Bożyczko Bożęcki Bożętka Bracichowicz Braciszewska Braciszewski Bracka Bracki Brakoniecka Brakoniecki
    Braksator Bralewska Bralewski Bramowicz Brand Brandebura Branecka Brankiewicz Brant Braszak Bratos
    Brauner Brauła Brazhnyk Brdej Brembor Bremer Brenda Brendel Brewczak Brewińska Brewiński Brochocka
    Brochocki Brocławik Brodalka Brodzki Brogowska Brogowski Brokos Brom Broma Bromblik Bromirska Bromka
    Brona Bronakowska Broniarz Broniec Broniecka Broniecki Broniewska Broniewski Bronkowska Bronowicz Brosz
    Broszczak Brot Brotoń Brovchenko Browarek Brozio Brońka Broź Broża Brucka Brucki Bruderek Brudzisz Bruhn
    Brusik Bruzi Bruździńska Bruździński Brychka Brycka Bryczkowski Brydniak Bryks Bryksa Brylewicz Brym
    Brymora Brynczka Bryndal Brynkiewicz Brynkus Brysz Bryszewska Bryszewski Bryza Bryśkiewicz Brzdąk Brzdęk
    Brzeskot Brzeszczak Brzeziak Brzezicha Brzezinska Brzezinski Brzosko Brzozowicz Brzuszczak Brzycka
    Brzycki Brzyk Bróg Brączyk Brążkiewicz Bubeła Bubiak Bubicz Bubiłek Bubka Bubniak Buc Buca Buchelt
    Buchner Buchowicz Buchowiecka Buchowiecki Buchowski Buciak Buczel Buczkowicz Budaj Budniok Budnyk Budyn
    Budyś Budziarek Budziłek Budziło Budzyk Budzyła Budźko Bugajak Bugajewski Bugdol Bugdoł Bugzel Buha
    Buhaiov Buhaiova Buja Bujanowicz Bujar Bujdasz Bujnarowska Bujnarowski Bujniak Bujnicka Bujnicki Bujno
    Bujny Bukowczan Bukowińska Bukowiński Buks Bulat Buler Bulhakova Bulman Bultrowicz Bulut Bumbul Bunda
    Bundz Buniowska Buniowski Burban Burchacka Burchacki Burdajewicz Burdelak Burdyl Burdzel Burger Burgiel
    Burkacka Burkacki Burkowicz Burkowska Burkowski Burlachenko Burnagiel Burnus Bursy Burszta Buska Busko
    Buss Buszczak Busłowicz Butor Butrymowicz Buts Butt Buzun Buć Bułaj Bułak Bułhak Bułkowska Bułkowski
    Buńko Buśkiewicz Bychkova Byczkiewicz Byczuk Bydłoń Bykowicz Bylewska Bylewski Byliniak Byrczek Byrdziak
    Bysiak Bysko Bystra Bytniewska Bytniewski Być Bzdek Bzdok Bzdyk Bziuk Bzowy Bzówka Bąbelek Bąbiak Bącler
    Bąska Bębacz Bęczkowska Będzińska Będziński Bęza Bęś Błachaniec Błajet Błajszczak Błasińska
    Błaszczykiewicz Błaszko Błażek Błażuk Błażusiak Błażyca Błażyńska Błażyński Błeszyńska Błeszyński Błocki
    Błoniarczyk Błotnicka Błotnicki Błyskal Bździel Caba Cabańska Caboń Cacek Cachro Cagara Cajdler Calak
    Campbell Can Cander Carter Caruk Całujek Ceberek Cebulla Cecotka Cecuła Cedzich Cejrowska Cejrowski
    Cekiera Ceklarz Cel Celak Celeban Cembrzyńska Cembrzyński Cemka Cempura Cencora Cender Cepielik Cepil
    Cepok Cerajewska Cerajewski Ceranka Ceroń Cesarczyk Cetnarska Cetnarski Chabanenko Chabaniuk Chabasińska
    Chabasiński Chabera Chabińska Chabiński Chabko Chabora Chachura Chacia Chaja Chajdas Chajewska Chajewski
    Chajęcka Chajęcki Chala Chalcarz Chamczyk Chamerska Chamerski Chamik Chamioło Chang Charchuła Charewicz
    Charysz Charążka Chauhan Chaus Chała Chałubek Chebotarova Chechła Chelińska Cheng Chepurna Cherednyk
    Cherkashyn Cherkasov Chernukha Chernyshenko Cherubin Chervinska Chećko Chełkowska Chełkowski Chełpa
    Chibowska Chilicka Chilicki Chilkiewicz Chlabicz Chlaściak Chlebicz Chlebny Chlebus Chluba Chmielek
    Chmielewicz Chmielnik Chmielorz Chmil Chmist Chochoł Chodała Chodnik Chodorska Chodorski Chodoła Chodun
    Chodup Chodzińska Chodziński Choinka Chojan Chojęta Cholewiak Cholewicka Cholewicki Cholewik
    Chomiczewska Chomiczewski Chorab Chorabik Choroszewska Choroszewski Choroszy Choruży Chorzewska
    Chorzewski Chorągwicka Chorągwicki Choła Chramiec Chramęga Chraplak Chrapusta Chraścina Christensen
    Chrobocińska Chrobociński Chroboczek Chromczak Chromicz Chruszczyk Chruślak Chrzuszcz Chrzęszczyk
    Chróścicka Chróścicki Chróścik Chrąchol Chu Chubenko Chuchała Chudaszek Chudzio Chudzyńska Chudzyński
    Chuhai Churas Chwaja Chwalba Chwalczyk Chwaszcz Chwieduk Chwiłka Chyba Chybińska Chybiński Chyczewski
    Chylaszek Chyrek Chyrva Chytry Chytła Chyzhyk Chyćko Chyżyńska Chyżyński Chłanda Chłap Chłapek Chłodek
    Chłond Chłopaś Chłystek Chłód Ciastko Ciałowicz Ciborek Cichacka Cichacki Cichal Cichański Cichomska
    Cichomski Cichopek Cichoszewska Cichoszewski Cidyło Ciechacka Ciechacki Ciechowska Ciechowski Cielas
    Cielma Cielniak Ciemerych Ciemna Ciemniak Ciemniewska Ciemniewski Ciempka Cienciała Cieniewicz Cienkosz
    Cienkusz Ciepielowska Ciepłowska Ciepłowski Cierlik Ciernia Cierpikowska Cierpikowski Ciesek Ciesielczuk
    Ciesińska Ciesiński Cieszko Ciećkiewicz Cieślarczyk Cieśliczka Cieślukowska Cieślukowski Cimcioch Cincio
    Cioczek Ciomek Cioroch Ciostek Ciołkosz Cioś Ciska Ciski Ciszczoń Ciszkiewicz Cisłak Ciukaj Ciulkin
    Ciurysek Ciurzyńska Ciurzyński Ciwińska Cizio Ciąćka Ciążyńska Ciążyński Cięciel Ciężadło Ciężak Clark
    Clarke Cojocari Cojocaru Collins Cooper Cudejko Cudzik Cukierska Cukierski Cupa Cupak Cupek Cupriak
    Cupryjak Cupryn Curzytek Cwajda Cwalińska Cwanek Cwik Cybart Cyboroń Cybulak Cybulko Cyburt Cybułka Cyc
    Cyganiak Cygankiewicz Cyganowska Cyganowski Cygańska Cygański Cygert Cygoń Cylke Cylkowska Cymbalak
    Cymek Cyngot Cypel Cyprys Cyrnek Cyrson Cyrta Cyrus Cywoniuk Cyzio Czabaj Czachowski Czaczkowska
    Czaczkowski Czaczyk Czader Czaj Czajczyk Czajko Czapczyńska Czapczyński Czapińska Czapracka Czapracki
    Czarnak Czarnul Czart Czartoryska Czartoryski Czarzasta Czarzasty Czaus Czechyra Czekirda Czelej Czelny
    Czemerys Czepiec Czereba Czerech Czeremcha Czerepaniak Czermińska Czerniej Czerniewska Czerniewski
    Czernikiewicz Czerwczak Czerwony Czeszak Czeszejko-Sochacka Czeszejko-Sochacki Czeszyk Cześnik Czmok
    Czochra Czokajło Czora Czternastek Czubat Czuber Czubik Czubin Czuchaj Czuczwara Czudak Czuk Czul Czupa
    Czupajło Czupała Czuryszkiewicz Czwakiel Czwórnóg Czynsz Czynszak Czyrko Czyszek Cząstkiewicz Czępińska
    Czępiński Częstochowska Cłapka Dachtera Daczkowska Daczkowski Dadok Dajcz Dajek Dajka Dajnowicz
    Dajnowska Dajnowski Dalach Dalak Daleka Daleki Dalidowicz Dam Damaszke Damaziak Damazyn Damrath Dams
    Damska Damski Dan Danch Danchenko Danchuk Danelczyk Danielik Danielkiewicz Danis Daniuk Daniłko Daniło
    Danych Danylevych Danylko Danylov Danylova Danylyshyn Darczuk Darga Darmetko Darmochwał Darmofał
    Darnowska Darnowski Daroch Darocha Daros Daroszewska Daroszewski Dashko Daszczuk Daszek Datko Dauksza
    Daukszewicz Dawicka Dawicki Dańczuk Decker Deckert Decowska Decowski Dedo Degórska Degórski Dehtiar
    Dehtiarov Dehtiarova Deineko Dejko Dejnaka Dejnarowicz Dekarz Dekert Dekowska Dekowski Delegacz Deleżuch
    Delimat Delura Deląg Demarczyk Dembicki Demczak Demediuk Demeter Demidowicz Demków Demydiuk Denes Denko
    Denysov Deoniziak Deperas Derbis Derc Derdaś Derdziak Derecki Deredas Derejczyk Derenda Derendarz
    Derengowska Derengowski Deres Dereszkiewicz Derlaga Deroń Derus Deruś Deszczyńska Deszczyński Detlaf
    Detyna Deutsch Dewerenda Diakov Diakova Diakowska Diakowski Dibrova Didur Dikhtiar Dimitrova Dinh
    Ditrich Dmuchowska Dmuchowski Dmyterko Dmytryszyn Doan Doba Dobaczewski Dobaj Dobak Dobczyńska
    Dobczyński Dobiech Dobiecka Dobiecki Dobkiewicz Dobko Dobrakowska Dobrakowski Dobranowska Dobranowski
    Dobrianska Dobrianskyi Dobroć Dobroś Dobruk Dobry Dobrydnio Dobrzyniecka Dochniak Doda Dogoda Dojka
    Dokurno Dolacińska Dolaciński Doległo Dolik Dolska Dolski Dolzhenko Domanowska Domanowski Domasiewicz
    Domel Dominas Dominowska Dominowski Domiter Domińczyk Domke Domnik Domogała Domżała Donarska Donarski
    Donder Donica Dora Dord Dorda Dorochowicz Doros Doroshchuk Dorosiński Dorożała Dorożko Dors Dostatni
    Dosz Dovbnia Dovbysh Dovha Dovhaniuk Dowejko Downarowicz Doğan Dołba Dośpiał Drabicki Drabot Dragosz
    Draguła Drahanchuk Draheim Drajer Dral Dramińska Dramiński Dranka Drapacz Drapiewska Drapiewski
    Drapińska Drapiński Dras Dratwińska Dratwiński Dreczka Dreher Drejka Drelichowska Drescher Drewczyńska
    Drewczyński Drobna Drogoń Drohomirecka Drohomirecki Dronia Drosio Drozdov Droździok Drożdżewicz
    Drożdżewska Drożdżewski Drożdżyk Drupka Drużga Drygalska Drygalski Dryjańska Dryjański Dryjer Dryla Dryś
    Drzewicz Drzewosz Drzycimska Drzycimski Drząszcz Dróżka Drążewska Drążewski Duba Dubchak Duber Dubert
    Dubisz Dubovik Dubovyi Dubowik Duchewicz Duchniak Duczyńska Duczyński Dudak Dudas Dudiak Dudych Dujka
    Duklas Duliba Dulka Dulkiewicz Dulny Duman Dumbadze Dumych Dunajewska Dunajewski Dunda Dunets Dunia
    Dunikowska Durakiewicz Durawa Durbacz Durbajło Durbas Durkacz Durko Durman Durmowicz Durok Durtka
    Dutkowiak Duława Duńska Duński Duśko Dworaczyk Dworek Dworok Dworski Dybkowska Dybkowski Dychała
    Dyczewski Dyderska Dyderski Dydyk Dyguda Dyguła Dykiert Dykowska Dykowski Dykty Dykun Dykyi Dym Dymacz
    Dymecka Dymecki Dyndał Dynysiuk Dyraga Dyrga Dyrla Dyrlaga Dyrszka Dzedzej Dzhura Dziabas Dziadko
    Dziadul Dziaduła Dziaduś Dziama Dziamara Dziambor Dzianach Dziarnowska Dziarnowski Dziarska Dziarski
    Działakiewicz Dzidowska Dziech Dzieciuchowicz Dzieciątko Dzieciątkowska Dzieciątkowski Dziedzicki
    Dziedziński Dziejma Dziekanowski Dzielińska Dzielski Dziembała Dziembowska Dziembowski Dziemianowicz
    Dziemiańczuk Dziemiańczyk Dziemińska Dziemiński Dzienisiewicz Dzieran Dzierba Dziergwa Dzierzgowska
    Dzierzgowski Dzierża Dzierżawa Dzierżyńska Dzietczyk Dziewanowska Dziewanowski Dziewiątka Dziewiątkowska
    Dziewiątkowski Dziob Dziobak Dziopak Dzitkowska Dzitkowski Dziubany Dziubała Dziubałka Dziubałtowska
    Dziubałtowski Dziubdziela Dziurdziak Dziurdzik Dziurdź Dziurgot Dziurowicz Dziwis Dziwosz Dziwota
    Dziwulska Dziwulski Dziwura Dziąba Dzięcielska Dzięcielski Dziędziel Dąbrowiecka Dąbrowiecki Dąda
    Dębecka Dębiak Dębowiak Dęby Dędek Dłubis Długopolska Długoszek Długoszewski Dłużeń Dłużniak Dźwigaj
    Dżaman Dżoń Dżugan Echaust Edel Edwards Eggert Egiert Ehlert Eichstaedt Ejsymont Ekman Eksterowicz Elak
    Elas Elgert Ellert Emilianowicz Engelbrecht Erber Ergashev Eriksson Ernestowicz Ertman Etmańska Etmański
    Fabin Fabiniak Fabisiewicz Fabińska Fabiński Fabjańska Fabjański Fadieieva Fafińska Fafiński Fait
    Fajferek Fajt Falasa Falgowska Falkowicz Falkus Fall Faluta Fanslau Fara Farana Farat Farbiś Farbotko
    Farganus Farkas Faryj Faszcza Fatek Fatla Fałda Fałkowski Fedan Fedas Fedenko Federkiewicz Fedirko Fediv
    Fedoniuk Fedorak Fedorchak Fedorczak Fedorets Fedorko Fedyniak Fedyszyn Feja Fejdasz Fejfer Felcenloben
    Felczyńska Felczyński Feledyn Feliksik Feliszek Felka Felkner Felusiak Femiak Fenik Fenske Ferek
    Fereniec Ferensztajn Ferents Ferenz Fernandez Ferster Ferszt Fertała Feruga Fesser Feter Fiałkiewicz
    Fica Fidala Fidrych Fidut Fiedeń Fiedorczyk Fiedorek Fiegler Fiejdasz Fielek Fiet Fietz Figlak Figlarz
    Figler Figlewicz Fiksa Filapek Filary Filbrandt Filewicz Filimoniuk Filimonova Filipak Filipenko Filipov
    Filipova Filiuk Filon Filosek Filozof Finc Fiodorow Fiodorowicz Fior Fiołna Firganek Firląg First
    Fishchuk Fisher Fisiak Fiutek Fiutka Fizia Flader Flajszer Flakowska Flakus Flasiński Flasz Flaszyńska
    Flaszyński Flegel Flejszer Flejszman Fleming Flig Fligiel Flinik Florea Florysiak Fluks Fober Foik Fok
    Fokin Fokina Foksa Foksińska Foksiński Foksowicz Fontosh Forajter Formas Fornagiel Forycki Foryt Foss
    Foterek Fołtyn Frach Franaszczuk Franaszczyk Francis Franckiewicz Francuzik Franiel Franielczyk Franko
    Frasek Frasunkiewicz Frasz Fraszka Frańczuk Freier Frejek Freund Friedek Friedman Frieske Fritsch Fritz
    Froch Froehlich Froncek Fronk Fruba Frydlewicz Frydman Frydryszak Fryga Frys Frysiak Fryska Frysz Fryza
    Fryzeł Fryziel Fryzowicz Frącala Frąś Fugas Fuglewicz Fuhl Fuja Fujarczuk Fuk Fuksa Fundowicz Furca
    Furdal Furlepa Furmann Furmanowicz Furmańczuk Fursa Fuss Futa Fułek Fórmaniak Fąfrowicz Gabała Gabruk
    Gabrychowicz Gabryelska Gabryelski Gacia Gaczkowska Gaczkowski Gadacz Gadawska Gadawski Gafka Gajaszek
    Gajdka Gajdowska Gajdowski Gajdzis Gajewczyk Gajoch Gajor Gajowa Gajowska Gajowski Gajtkowski Gajur
    Galanciak Galarowicz Galbarczyk Galeja Galera Gall Gallas Galor Galusik Gamalczyk Gamza Gamża Ganc
    Ganczarek Gandera Gandor Ganobis Gansiniec Gao Gap Gapik Garbacka Garbaczewska Garbaczewski Garbal
    Garbarek Garbaty Garbera Garbowicz Garbula Garcon Garcorz Gardecka Gardecki Gardiasz Gardzielewska
    Gardzielewski Gargasz Gargaś Gargul Garlacz Garncarczyk Garwacka Garwacki Gasiuk Gaszek Gaszewska
    Gaszewski Gasztych Gaszyńska Gaszyński Gatlik Gattner Gatys Gatz Gauden Gautam Gavryliuk Gawarecka
    Gawarecki Gawarkiewicz Gawart Gawluk Gaworczyk Gawot Gawronek Gawrylczyk Gawrysiuk Gawryło Gawędzka
    Gawędzki Gazarkiewicz Gałas Gałaś Gałda Gałdyś Gałusza Gałuszkiewicz Gałwiaczek Gałąska Gałęska Gałęski
    Gałęziowska Gałęziowski Gańczak Gaża Gdak Gdowik Gebler Gefert Geller Gellert Gemba Gembal Gembiak
    Gembicki Genderka Georgiev Gerasik Gerej Gerek Geremek Gerka Gerwatowska Gevorgyan Ghimire Gibadło
    Gibasiewicz Gibes Gibiec Gibka Gibowicz Gibowska Gibowski Giczewski Giecewicz Giedrys Giefert Gielas
    Gieleta Giemzik Gieraga Gierałt Giergiel Giergielewicz Gierlicka Gierlicki Gierlotka Giernalczyk Gieroba
    Gierszon Gierus Gierz Gierłach Gierłowska Gierłowski Giełażyn Gigiel Gilas Gilowska Gilowski Ginał
    Gintowt Giorgadze Girtler Giruć Giska Giszter Gitner Gizicka Gizicki Gizler Giżewska Giżewski Glama
    Glaner Glapka Glaser Glazar Glejzer Glembin Glibowska Glibowski Glijer Glik Gliniewicz Glista Glita Glos
    Glugla Glura Glądała Gmitrzuk Gmiąt Gmińska Gmiński Gmurek Gnacy Gniewkowska Gniewkowski Gniwek Gnot
    Gnych Gnyla Gocal Gochnio Goclik Goczał Gocłowska Gocłowski Godleś Godoń Godun Godyla Godzic Goebel
    Goetz Gofron Gogulska Gogulski Gogłoza Gojtowska Gojtowski Golacik Golanko Golanowska Golanowski Golczak
    Golder Goldmann Golecka Golecki Golema Goleniewska Goleniewski Goliat Golicz Golińczak Goljanek Golombek
    Gomoluch Gomulak Gomulska Gomulski Goncerzewicz Gondro Gonia Goniwiecha Gontar Gontek Gonzalez Gorajczyk
    Gorajska Gorajski Gorbacz Gorczycka Gorczycki Gorlewska Gorlewski Gorlo Gorski Gorwa Gorycka Gorynia
    Goryszewska Goryszewski Gorywoda Goryńska Goryński Gorzelnik Gorzkowicz Gorzołka Gorzycka Gorzycki
    Gorzynik Gorząd Gorączko Gosa Gostek Goszczycka Goszczycki Gotkowicz Gotlib Gotowicka Gotowicki
    Gottfried Gozdal Gozdalik Gozdan Gozdera Gozdowska Gozdowski Gołacka Gołacki Gołata Gołdys Gołka Gołko
    Gołub Gołyszny Gołębska Gończ Gońka Gościcka Gościcki Gościej Gościk Goślińska Goździuk Goźliński
    Grabalska Grabarczuk Grabarkiewicz Grabczyńska Grabczyński Grabik Grabny Gracjasz Gracka Graczkowska
    Graczkowski Gradecka Gradecki Gradowicz Gradoń Gradzińska Gradziński Graja Grajczak Grajda Grajdek
    Grajner Grajnert Grajny Grajper Gralik Gralka Gramala Granek Graniczka Grasela Grata Gray Grec Greczek
    Grel Greloch Grelowska Greniuk Gretka Grewling Grieger Griner Grobelak Grobelniak Groblica Grobosz
    Grochmal Grocholewska Grocholewski Grochowiak Grochoła Grodoń Grodzińska Grodziński Grodź Grojec Grom
    Gromadzińska Gromadziński Gromelska Gromiec Gromko Gromowska Gromowski Gromska Gromuł Gromysz Grondys
    Gronostajska Grossmann Grosu Grotnik Grotowski Grott Grubecka Grubecki Grubska Grubski Grucel Gruchacz
    Gruchalska Gruchalski Grucza Gruczek Grudkowska Grudkowski Grudziecki Grugel Grula Grunau Gruner
    Gruszczak Gruszkowska Gruszkowski Gruźlewska Gruźlewski Grycan Gryckiewicz Grycko Gryczewska Gryczewski
    Gryczko Gryczyńska Gryglicka Gryglicki Grygorczyk Gryguć Grylewicz Grymek Grymel Grymuła Grynczel Grynia
    Gryś Grzebalska Grzebalski Grzebiela Grzebieluch Grzebuła Grzebyta Grzeca Grzegorczuk Grzegorczyn
    Grzegorowska Grzegórska Grzegórski Grzelakowska Grzelakowski Grzelecka Grzelecki Grzempa Grzesiczak
    Grzesiczek Grzesiewicz Grzeszak Grzeszek Grzywaczyk Grzywniak Grząślewicz Grzędzicka Grzędzicki
    Grąbczewska Grąbczewski Grącka Grączewska Grączewski Grądalska Grądalski Grądys Grązka Grębowicz Grębska
    Grębski Grędzińska Grędziński Guc Guca Gucik Gudaniec Gujda Gulak Gulbinowicz Guliyev Gulka Gunerka
    Gurbanov Gurda Gurska Gurski Gurtowska Gurtowski Gust Gustek Gustowska Gustowski Gustyn Gutman Gutt
    Guzak Guzal Guzera Guziec Guziejko Guziewicz Guziołek Guzman Gułaj Guśtak Guźda Gwardyś Gwiazdoń Gzela
    Gzowska Gzowski Góralewicz Górczewska Górczewski Góreczna Górko Górnaś Górniok Gągola Gągorowska
    Gągorowski Gąsieniec Gąsiewicz Gąsiorkiewicz Gąsiński Gątkiewicz Gębczyńska Gębczyński Gębusia Gęsiak
    Gęsikiewicz Gładek Gładosz Głazik Głodny Głodowicz Głombica Głombik Głowinkowska Głowinkowski Głozak
    Głuszkiewicz Główczak Głąbała Głąbek Głąbicki Głębicka Ha Habera Haberla Habrych Habuda Hac Haczkiewicz
    Hadamek Hadamik Hadas Hadasik Hadasz Hader Hadrych Hadyk Hadzik Haidar Haidash Haievska Haja Hajdus
    Hajek Hajkowska Hajkowski Hajn Hajnos Hajost Hajzler Hala Halahan Halai Halak Halamus Halan Halas Halfar
    Haliuk Halka Halkiewicz Halkin Halkina Halwa Halytska Halytskyi Hamala Hamerlak Hamernik Hamiga Hamkało
    Hammer Hamryszczak Hamza Hancyk Handy Handziuk Hanejko Hanek Hanisz Haniszewski Hans Hansel Hanszke
    Hanulak Hanushchak Hanusz Hanuszek Hanuszewicz Hanuszkiewicz Hanysz Hanzlik Hap Hapek Hapke Haponenko
    Harashchenko Harasymowicz Haraszczuk Haraszkiewicz Hardej Harkavenko Harla Harnik Harrison Hart Haręzga
    Hasanova Hasiec Haska Hat Hatała Hatlapa Haufa Hauser Hausman Hausner Hauzer Hawełka Hawryszko Haziak
    Hazuka Hać Hała Hałabis Hałaburda Hałacz Haładyj Hałajko Hałuszka Haśkiewicz Heda Heimann Hejno
    Hejnowicz Hejnowski Hejzner Heksel Helbik Heliasz Helik Heliosz Helisz Hellwig Helon Helowicz Helt
    Helwig Hempel Hemperek Henc Hencel Hendrych Hendzlik Henek Henel Henicz Herasymiuk Herasymova Herbich
    Herbik Herbst Hereda Herjan Hermaniuk Hernandez Herod Hertman Herud Herus Herzberg Hesse Hetnar Hetnał
    Hełminiak Hilla Himmel Hincke Hintz Hintzke Hipsz Hirt Hiszpańska Hiszpański Hińcza Hladchenko Hladii
    Hladysh Hlebowicz Hloba Hlova Hlushak Hlushchuk Hnatyshyn Hnatyszyn Ho Hoc Hoch Hochman Hodana Hodor
    Hodorowicz Hoduń Hoha Hoi Hoinka Hoja Hojczyk Hojnor Hola Holcman Holender Holesz Holod Holota Holovata
    Holovatyi Holovchak Holovenko Holovina Holubieva Homan Hombek Homenda Homon Honc Hong Honta Hop Hopek
    Hoppa Hora Horabik Horała Horbachov Horbachova Horbatenko Horbowy Horbunov Horczak Horin Horna Hornowska
    Hornowski Horodetska Horodko Horoszczak Horova Horst Horszczaruk Horváth Horyza Hossa Hoszek Hoszowska
    Hoszowski Hotsuliak Hoła Hołod Hołoga Hołowienko Hołowińska Hołowiński Hołtyn Hołubek Hołubowska
    Hołubowski Hołyńska Hołyński Hołówka Hołówko Hrab Hrabar Hrabovskyi Hreczuch Hrehorowicz Hrek Hrinchenko
    Hristov Hrom Hromyk Hruby Hrushko Hruszowiec Hrycak Hryckiewicz Hrycyk Hrycyna Hryhorash Hryhorian
    Hryhoruk Hryncewicz Hrynenko Hryniak Hryniewiecka Hryniewiecki Hryniv Hrynyshyn Hryshyn Hryshyna Hrytsan
    Hrytsyshyn Hryć Hubacz Hubenko Hubisz Hucał Huchenko Hucz Huda Hudyka Hudym Hughes Hulisz Humen Humeniak
    Humenna Humennyi Hupalo Hurek Hurkała Husiev Hutniczak Hutnyk Hutsal Hutsaliuk Hutsol Huzarska Huzarski
    Huzenko Hwang Hyba Hybel Hybiak Hycnar Hylińska Hyliński Hylla Hypiak Hypki Hyska Hytroś Hyz Hędrzak
    Hęćka Hładki Ibek Ibrahimov Ibron Ickiewicz Iglewski Iglińska Igliński Ignaczewska Ignaczewski Ignas
    Ignaszewski Igła Ihnatieva Ihnatiuk Iliev Iliuk Ilkiewicz Imianowski Imiełowska Imiolczyk Ingram Iqbal
    Iracka Iracki Ircha Irlik Irzykowska Irzykowski Isaev Isaienko Isakov Isakova Ismayilov Itrych
    Ivakhnenko Ivankiv Ivanko Ivanochko Ivanyk Ivanytskyi Ivashko Ivashyna Ivasiv Iwachów Iwanejko Iwanów
    Iwon Izbiński Iżycka Iżycki Iżykowski Jabczyk Jabrzyk Jachacz Jacher Jachimczuk Jachymczak Jacko Jackson
    Jacków Jacoszek Jacuńska Jacyszyn Jadacka Jadeszko Jadowska Jadowski Jadwiszczok Jafernik Jagas
    Jagieniak Jagiełowicz Jagiełła Jagiełłowicz Jagodzik Jaguszewski Jaguścik Jain Jajeśnica Jajuga
    Jakielska Jakim Jakimów Jakowski Jaksender Jaksina Jakubisiak Jakubska Jakubski Jakubus Jakuszewska
    Jakuszko Jakutowicz Jakóbek Jakóbiec Jalowski Jamińska Jamiński Jamuła Janaczek Janasek Janasiak
    Janaszczyk Janawa Janca Jancz Janczar Janczur Jang Jangas Jankun Janos Janoszczyk Janowczyk Jansen
    Janson Jantoń Janukowicz Janusek Janusiak Januszczyk Janyst Jaraczewska Jaraczewski Jaremczuk Jarguz
    Jarkowska Jarkowski Jarmoc Jarmolińska Jarmoliński Jarmoluk Jarmoszko Jarmoła Jarmusz Jarmuszkiewicz
    Jarmułowicz Jarno Jarnut Jaroma Jaroniec Jaroszczak Jaroszyk Jarowicz Jarska Jarski Jarszak Jaruszewska
    Jaruszewski Jaruzel Jarząbkowska Jarząbkowski Jasiecka Jasiecki Jasiek Jasielska Jasielski Jasieniecka
    Jasieniecki Jasinowska Jasionowicz Jasiuk Jasiulek Jasiura Jasiurkowska Jasiurkowski Jaskowiak
    Jaskułowska Jaskułowski Jaskółowska Jaskółowski Jasnosz Jastrowicz Jastrzembska Jaszak Jaszczura
    Jaszkiewicz Jaszkowska Jaszkowski Jata Jatkowska Jatkowski Jazgar Jazowska Jazowski Jałkiewicz Jałowy
    Jaś Jedlikowska Jedlikowski Jednacz Jednoróg Jeger Jeglińska Jegliński Jeleńska Jeleński Jelinek
    Jemielita Jemioł Jendryka Jendrzejczyk Jeong Jercha Jerczyńska Jerczyński Jermakowicz Jeromin Jersak
    Jerzykowska Jerzykowski Jerzyńska Jerzyński Jeschke Jesień Jesion Jesionkowska Jeska Jesse Jezuita Ji
    Jikia Jochem Jochym Jochymczyk Jojczyk Jopkiewicz Joppek Jordanek Joshi Joskowski Juchnik Juchnowicz
    Judkowiak Judycka Judycki Judzińska Judziński Jugo Jugowiec Junka Junkiert Jur Juraś Jurczenia Jureńczyk
    Jurków Jurowska Jurowski Jurska Jurski Jursza Jurzec Justka Jutrzenka Juzyszyn Jułga Jóskowska Jóskowski
    Józefek Józefko Józefów Józiak Józwa Jóźwiakowska Jóźwiakowski Jąkalska Jąkała Jęchorek Jęcz Jęczeń
    Jęczmień Jęczmyk Jędrachowicz Jędrejek Jędrszczyk Jędruchniewicz Jędruś Jędrzejas Jędrzejec Jędrzejewicz
    Jędzura Jęsiek Jęśko Kabaj Kabak Kabelis Kabiesz Kachnowicz Kacica Kaciczak Kacorzyk Kacprowska
    Kacprowski Kaczorkiewicz Kadziewicz Kadzik Kafarska Kafarski Kahl Kajca Kajdasz Kajetaniak Kajewska
    Kajewski Kajko Kajkowska Kajkowski Kajoch Kajor Kajpust Kajzerek Kalamarz Kalashnikov Kalczyńska Kalejta
    Kaleniuk Kaliada Kalika Kalinchuk Kaliszewicz Kalmuk Kaluza Kalwajtys Kalwas Kalwasińska Kalwasiński
    Kalyniuk Kameduła Kamer Kamienik Kamont Kamoń Kamyczek Kanabaj Kanar Kancelarczyk Kandulska Kandulski
    Kandybowicz Kanecka Kanecki Kanios Kanivets Kanka Kankowska Kankowski Kanownik Kantak Kantorek
    Kantorowicz Kanty Kapczuk Kapelan Kapelko Kapiszka Kapituła Kapkowska Kapkowski Kapler Kapołka Kaps
    Kapturska Kapturski Kapuściok Kapłoniak Karabasz Karabela Karaman Karaszkiewicz Karauda Karbowa
    Karbowniczak Karczmarska Karczmarski Karczmarzyk Karda Kardzis Karecka Karecki Karkos Karkus Karlsson
    Karmańska Karmański Karmowska Karmowski Karnat Karnaś Karnicka Karnicki Karpets Karpiej Karpinska
    Karpliuk Karpovets Karpovych Karwatka Karwańska Karwański Karwicka Karwicki Karwik Karłowski Kasendra
    Kasianchuk Kasianova Kasicka Kasiewicz Kasina Kasiura Kasowska Kasowski Kasparek Kasperczuk Kasperkowicz
    Kasperuk Kasprowska Kasprowski Kasprzykowska Kasprzykowski Kassner Kaszkiel Kaszkur Kaszta Katamadze
    Katan Katner Katrych Katryniok Katulski Katus Kauczor Kaufmann Kaur Kavalevich Kavun Kawiorska Kawiorski
    Kawska Kawski Kawulak Kaza Kazakov Kazaniecka Kazaniecki Kazieczko Kazimieruk Kazimierz Kaziów Kazmiruk
    Kazubowska Kazubowski Kazubska Kazubski Kazuch Kazula Kazusek Kazuś Kałafut Kałan Kałas Kałasz Kałdonek
    Kałkowska Kałkowski Kałkus Kałus Kańczuga Kaśkiewicz Kaźmierak Kaźmierczuk Kegel Kelly Kemnitz
    Kempczyńska Kempczyński Kempiak Kenar Kensy Kerber Kessler Khalil Khanas Kharuk Kharytonova Khasanov
    Khatri Khilko Khimiak Khodak Khokhlov Khokhlova Khomik Khrushch Khudyk Kiałka Kibler Kiczek Kieblesz
    Kiebzak Kiedrzyn Kiela Kielesińska Kieljan Kieraś Kiermaszek Kiernicki Kierszka Kiersztyn Kieruj
    Kieruzal Kierys Kiesz Kiewel Kiełbasiewicz Kiełbowska Kiełbowski Kiełczyńska Kiełczyński Kieżel Kiiashko
    Kiklica Kikosicka Kikosicki Kilianek Kiliańczyk Kilichowska Kilichowski Kilijańska Kilijański Kilon
    Kimmel Kimszal Kinas Kinast Kinasz Kincel Kionka Kipiel Kipigroch Kiriienko Kirkiewicz Kirpsza Kirsch
    Kirstein Kirszenstein Kiryczuk Kis Kisel Kiselova Kisiela Kisilewicz Kistela Kistowski Kisły Kitala
    Kitta Kiwała Kizior Kińska Kiński Kiślak Kiżewska Kiżewski Klaczek Klajbor Klajnert Klamecka Klamecki
    Klamerus Klasik Klause Klauze Klawitter Klawińska Klawon Kleczaj Kleczko Kleczyńska Kleczyński
    Klejnowska Klejnowski Klekotka Klekowska Klekowski Klementowicz Klementowska Klementowski Klemm Klempka
    Kleniewska Kleniewski Klepaczka Klepczyński Klessa Klewek Kleśta Klicka Klicki Klimanek Klimczewski
    Klimczok Klimenko Klimont Klimosz Klimov Klinke Klinowska Klinowski Klishch Klisowska Klisowski
    Kliuchnyk Kloczkowska Kloczkowski Kloka Klon Klucha Klucz Kluczka Kluczkowski Kluczna Kluga Kluger
    Klugiewicz Kluzik Klymko Klymovych Kmera Kmet Kmit Knafel Knaga Knapiński Knapkiewicz Knast Knebel
    Knecht Knefel Knera Knez Kniazieva Kniaziuk Knieja Knioła Knobel Knobloch Knosala Knot Knotek Knurek
    Knurowska Knurowski Knutelska Knysz Knyt Kobielak Kobielarz Kobielus Kobielusz Kobiera Kobierowska
    Kobierowski Kobylianska Kobyłkiewicz Kobyłko Kobędza Kochalska Kochalski Kocherha Kochowicz Kochubei
    Kocia Kociak Kocielnik Kocikowska Kocikowski Kocimska Kocimski Kociok Kociubińska Kociubiński Koczaj
    Koczar Koczela Koczkodon Koczułap Koczywąs Kocór Kocęba Kodura Kodzis Koguc Kojda Kojs Kojtych
    Kokhanevych Kokolus Kolankowski Kolarska Kolarski Kolator Kolawa Kolb Kolbiarz Kolbuch Kolebuk Kolec
    Kolendowicz Kolenkiewicz Kolera Kolesińska Kolesiński Kolesnichenko Kolesnykova Kolibabka Kolinko Kolk
    Koller Kolny Kolodiazhna Kolodych Kolomiichuk Kolompar Kolon Kolotylo Kolska Kolski Kolwicz Komadowska
    Komaniecka Komaniecki Komarnytska Komarnytskyi Komarowska Komarowski Komornicka Komornicki Komorowicz
    Komorska Komorski Kompa Komza Komędera Konar Konc Konca Konczalska Kondeja Kondel Kondera Kondratiev
    Koneczna Koneczny Konfederak Koniak Konieczniak Konikowski Koniuch Koniusz Koniuszewska Koniuszewski
    Konkolewska Konkolewski Kononova Konopczyńska Konopczyński Konopelska Konopelski Konopnicka Konopnicki
    Konowalczyk Konowalska Konowalski Konowałek Konowrocka Konowrocki Konstanciuk Konsur Konwa Konwent Konys
    Kopaczyńska Kopaczyński Kopchuk Kopciał Kopczewska Koperczak Kopertowska Kopicka Kopicki Kopiecka
    Kopiecki Kopiel Koplin Kopp Koprianiuk Kopyciok Kopydłowska Kopydłowski Kopytowska Kopytowski Korach
    Koralik Korczyc Kordaczuk Kordala Kordaszewska Kordaszewski Kordela Kordiak Kordyka Kordylas Kordylewicz
    Koren Koretskyi Koriat Korin Korkuć Kornasiewicz Kornaszewska Kornaszewski Kornaus Kornieieva Kornowska
    Kornowski Korolko Koroluk Koronka Koronowska Korotko Korpan Korpała Korpowska Korpowski Korpusik Korpysa
    Korpysz Korszla Korszun Korth Korthals Koruba Koryl Koryś Korzan Korzhevych Korzus Korzycka Korzycki
    Korzystka Kosacka Kosacki Kosakiewicz Kosar Kosater Kosała Koseda Koseła Koshova Kosiacka Kosiacki
    Kosiada Kosiuk Kosmacz Kosmała Kosovan Kossek Kossmann Kostanek Kostanowicz Koster Kosterna Kostetska
    Kostetskyi Kostin Kostina Kostiukevych Kostkowska Kostkowski Kostoń Kostun Kostuś Kostyszyn Kosydar
    Kosyk Koszal Koszek Koszmider Koszołko Kotański Kotiash Kotlenga Kotlorz Kotok Kotovych Kotra Kotras
    Kotsur Kotulak Kotusiewicz Kotyl Kotylak Kotysz Kotyza Kovalets Kovalevska Kovalevskyi Kovpak Kovtunenko
    Kovács Kowaczek Kowaleczko Kowalek Kowalicka Kowalicki Kowaliczek Kowalów Kowasz Kozaczyk Kozajda
    Kozakevych Kozan Kozarzewska Kozarzewski Kozber Kozdrowska Kozdrowski Koziarek Kozicz Koziol Koziróg
    Kozlenko Kozliuk Kozubowska Kozubowski Kozuń Kozyrska Koç Koćma Kołatek Kołatka Kołda Kołdys Kołeczek
    Kołeczko Kołnierzak Kołosińska Kołtek Kołtowska Kołtowski Kołtunik Kołuda Kołyszko Kołłątaj Końca Końka
    Końska Koński Kościan Kościelecka Kościelecki Kościelnik Kościewicz Koścień Kościsz Kościuch Kościuczuk
    Kośmińska Kośny Koźba Koźlicka Koźmin Kożdoń Kożuszko Kożyczkowski Kraciuk Krajcarz Krajczyńska
    Krakowiecka Krakowiecki Krakus Kramarczuk Kramkowska Kramkowski Kramm Krasnopolski Krasnov Krasnova
    Krassowski Krauchanka Krauchuk Kravtsiv Krawieczek Krawiel Kraś Kraśkiewicz Kraśko Kreczko Kremser Kresa
    Kretkowski Kretschmer Kriukova Kroczyńska Kroczyński Krogulska Krogulski Krokhmal Krol Krom Kroma
    Kromska Kromski Krop Kropielnicka Kropielnicki Krotla Krotofil Krotowska Krotowski Krośnicka Krośnicki
    Kruba Krudysz Krueger Krug Krugiołka Krugły Kruhliak Krul Krupko Kruppa Krus Kruszczak Krut Krutak Kruz
    Krużołek Krużyńska Krużyński Kryca Krychowiak Krycia Krycki Kryczek Kryla Krylov Krymarys Krymska
    Kryshchuk Krysko Krysztoforska Krysztopa Krysztopik Kryva Kryvko Kryvoshei Kryvosheia Kryvyi Krywko
    Kryzhanivskyi Kryzhanovskyi Kryłowicz Kryń Krzaczkowska Krzaczkowski Krzaczyńska Krzanik Krzeczek
    Krzeczkowski Krzemieniewska Krzemieniewski Krzepina Krzepisz Krzesaj Krzesak Krzus Krzystała
    Krzysztofczyk Krzysztyniak Krzywik Krzywkowska Krzywkowski Krzyścin Krzyśpiak Krzyż Krzyżok Krzyżoszczak
    Krzyżyńska Krzyżyński Króliczak Kręc Kręcioch Krűger Ksionek Ksiądzyna Książczak Księżnik Ksobiak Ksol
    Kubai Kubajek Kubajka Kubarska Kubarski Kubaszczyk Kubaszek Kubaś Kubel Kuberka Kuberna Kubic Kubiciel
    Kubielas Kubin Kubisa Kubista Kubka Kublin Kucek Kucfir Kucharyk Kuchcik Kuchejda Kucheriavyi Kuchniak
    Kuchnicka Kuchnicki Kuchnik Kuchnowska Kuchnowski Kuchynska Kuchynskyi Kuciej Kucman Kucwaj Kucy
    Kucypera Kuczała Kuczka Kuczkowiak Kuczyk Kudera Kudin Kudriavtsev Kudriavtseva Kudzin Kudłaszyk Kudłaty
    Kufieta Kufta Kugiel Kuglin Kuich Kuik Kujawowicz Kujszczyk Kukharenko Kuklewska Kuklewski Kuklicz
    Kuklik Kuklis Kuksa Kukuruza Kukuryk Kukuć Kul Kulakevych Kulakova Kular Kulasiewicz Kulasik Kulasiński
    Kulaszewska Kulaszewski Kulawczuk Kulawczyk Kulawiec Kulba Kulbicka Kulbicki Kulhawik Kulibaba
    Kuliczkowska Kulikov Kulisa Kulisiewicz Kulkowski Kulla Kulok Kulpok Kulwas Kumaszka Kumiega Kummer
    Kunach Kuniewicz Kunik Kuper Kupiecka Kupiecki Kupny Kupper Kuprianowicz Kupriienko Kuptel Kuptz Kuranda
    Kurasik Kurdej Kurdyk Kurenda Kurianowicz Kurinna Kurjata Kurkierewicz Kurko Kurlapska Kurlapski
    Kurnicka Kurnicki Kuropka Kuros Kurowicka Kurowicki Kurpias Kurpiela Kurpierz Kurszewska Kurszewski
    Kurtek Kurtiak Kurtok Kurtycz Kurtys Kurtz Kuryliak Kuryliuk Kurzyca Kurzydlak Kurzyniec Kurzyp
    Kurzątkowska Kurłowicz Kusber Kusch Kushnirchuk Kusina Kusowska Kustosik Kuszak Kuszek Kuszel Kusznier
    Kutaj Kutka Kutryb Kutsyk Kuty Kutyna Kutyło Kutyłowski Kutz Kutzner Kuzan Kuzar Kuzdra Kuzhel Kuzian
    Kuzik Kuzin Kuzina Kuzka Kuzniatsou Kuznowicz Kućko Kućmierczyk Kułaj Kuśmierzak Kuśpiel Kuśpit Kuśta
    Kuźbik Kuźlik Kuźmin Kuźniacka Kuźniacki Kuźniarska Kvasha Kwacz Kwadrans Kwapiszewska Kwapiszewski
    Kwarciany Kwatek Kwater Kwatera Kwaśnicka Kwaśnicki Kwaśniok Kwietniak Kwilosz Kwitowska Kwoczała Kwolik
    Kwon Kyrychok Kyryk Kyrylova Kysliak Köhler Kąca Kątna Kędryna Kędziera Kędzierawska Kędzierawski
    Kędziorska Kędziorski Kękuś Kępczyk Kęszczyk Kłakulak Kłapkowska Kłapkowski Kłobukowska Kłobukowski
    Kłobut Kłopot Kłoskowski Kłoszewska Kłoszewski Kłudka Kłujszo Kłus Kłuś Kłysiak Kłyszejko Kłębczyk Kłęk
    Labuhn Lachawiec Lacheta Lachtara Lackowska Lackowski Ladach Lademan Ladzińska Ladziński Lahoda Lahuta
    Lakwa Lalek Lalka Lambryczak Lamentowicz Lamla Lampert Lampkowska Lampkowski Lamprecht Lanc Lao Lapko
    Lar Larek Larin Larina Larsen Laskosz Laskoś Lasok Lasończyk Laszczkowska Laszczkowski Laszkowska
    Laszkowski Latanowicz Latka Latosek Latoszewska Lauda Lavrenko Lavrinenko Lavriv Lavrova Lavruk Lawera
    Lazarchuk Lazarieva Lazik Lazorenko Lazurek Lebda Lebed Lebica Lebiecka Lebiecki Lebiedowicz Lebiest
    Lebryk Lechniak Lechocka Lechocki Leciak Leciej Ledniowska Ledniowski Ledzińska Ledziński Lefek Legan
    Legat Legięć Legęza Lehka Lehman Leik Lejmanowicz Lejwoda Lekh Leki Leksander Lekston Lelas Lelińska
    Leliński Lelo Lemanczyk Lemanik Lembas Lemeshko Lemka Lempek Lenartowska Lenartowski Lenczyk Lendo Lenga
    Leniec Lenk Lenko Lentas Lentner Lentowicz Leonenko Leopold Leończyk Leper Lepionka Leppert Lepszy
    Leputa Leshko Lesicka Lesicki Lesiecka Lesiecki Leski Lesko Letka Letki Lev Levenets Levko Levkovych
    Lewartowski Lewańska Lewis Lewkowska Lewkowski Lewoń Lewsza Lewy Leńczowska Leńczowski Leńska Leński
    Leśniara Leśniczek Leśniczuk Leżuch Liashchenko Liashchuk Libert Libiszewski Libor Libront Libura Lic
    Licau Lichnerowicz Liczbińska Liczbiński Licznar Liczner Lidak Lieder Ligendza Ligman Lignar Ligęska
    Likos Lilla Limanowska Limbu Linder Linert Lingo Linnik Linnyk Lipecka Lipecki Lipian Lipiecka Lipiecki
    Lipina Lipinska Lipinski Lipke Lipniak Lipus Lishchynska Lisovenko Lisovets Lisovskyi Listewnik Listopad
    Listosz Listwoń Liszcz Liszkowska Liszkowski Litkowska Litkowski Litvinenko Litwicka Litwicki Litwiniec
    Lityński Liuta Liwoch Liwska Liwski Lizakowska Lizakowski Lizun Liżewska Liżewski Lobach Lobanov
    Lobanova Lodzińska Lodziński Loga Loiko Lomidze Lompart Lonczak Longosz Lopez Lorenowicz Lorentowicz
    Lorych Loryś Losa Lota Lotkowska Lototskyi Lozovyi Lozynska Lozynskyi Lubach Lubaszewska Lubiejewska
    Lubiejewski Lubina Lubiszewski Lubka Luboch Lubocki Lubomska Lubomski Lubowicz Luc Luchka Lucińska
    Ludera Ludka Ludwinek Ludwińska Ludwiński Luhova Luhovyi Luka Lukach Lukaniuk Lukashevych Lukianets
    Lukianov Luksa Lulka Lungu Luniak Luo Lusawa Lushchyk Lustig Lustyk Luter Lutomska Lutomski Lutowska
    Lutowski Lutrzykowska Lutrzykowski Luts Lutsak Lutsyshyn Luzak Luzeńczyk Luśtyk Lymarenko Lypka Lysa
    Lysyi Lysytsia Lytvynov Lăcătuș Ląd Macała Machajewska Machał Machałowska Machałowski Machcińska
    Machciński Machejek Machelska Machelski Machera Machlarz Machnica Machniewicz Machno Machnowska
    Machnowski Machocka Machocki Machoczek Macholla Machulska Machut Maciantowicz Maciejec Maciesza
    Macikowska Macikowski Macina Maciszewska Maciszewski Maciuba Maciukiewicz Maciulewicz Maciuła Macniak
    Macoch Macudzińska Macudziński Macutkiewicz Maczek Maczyszyn Madajczak Madany Mader Maderak Madeła
    Madyda Madzio Madziąg Magar Magner Magosz Magulska Magulski Mahas Maidaniuk Maievska Majcherczak
    Majchrzycki Majczyk Majdecka Majdecki Majdziak Majdzik Majdzińska Majdziński Majecka Majeran Majerowska
    Majerz Majk Majkutewicz Majorkiewicz Majsak Majstrak Majszak Majszczyk Majtas Majzel Makarowska
    Makarowski Makaryk Makharadze Makiewicz Makola Makota Makovetska Makovetskyi Makoviichuk Makovska
    Makowiak Makowicz Maksimczyk Maksymets Maksymiec Makuchowska Makukha Malach Malakhov Malakhova
    Malanowicz Malarek Malcer Malchar Malcharczyk Malchenko Malendowicz Malenko Maleska Maleszak Malets
    Maleńczyk Maliar Maliga Malikowska Malikowski Malinger Malinovskyi Malisiewicz Maliuta Malkowska
    Malkowski Malkusz Malmur Malovana Malus Maluszczak Malynovska Malynovskyi Malyshev Malyshko Mamaj Mamala
    Mamczak Mamczarz Mamczura Mammadova Manaj Mandel Mandera Manderla Mandes Mandryka Mandziej Manelska
    Manelski Maniara Manicka Manicki Maniewska Maniewski Mantur Manukyan Manuszewska Manyś Maraj
    Maraszkiewicz Marańda Marcak Marcela Marcinik Marcinowicz Marciszak Marcysiak Marczykowska Marczykowski
    Mardaus Marel Margalska Marian Markevich Markiewka Markiton Markocki Markovska Marlęga Maros Marosek
    Marozau Mars Marszalec Marszolik Marszołek Martens Martewicz Martirosyan Marton Martula Martuszewska
    Martuszewski Martynchuk Martynek Martynów Martys Martyńska Martyński Marud Maruda Maruniak Marusik
    Marych Maryniuk Marynowicz Marzejon Marzol Marzyńska Marzyński Marzęcka Marzęcki Marzęta Mas Masek
    Masełek Masliuk Maslo Mastalerek Maszner Masło Masłowiec Mata Matej Materac Maternia Materniak Maternik
    Maternowska Maternowski Materska Materski Materzok Matloch Matonóg Matoszko Matracki Matsenko Matskevich
    Matukiewicz Matuszewicz Matuszko Matviiuk Matyaszczyk Matych Matyjak Matyniak Matysiok Matyszkowicz
    Mazanka Mazanowska Mazanowski Maziak Maziarska Maziarski Maziec Maziejuk Maziuk Mazurak Mazurkevych
    Mazuś Mała Małaszkiewicz Małaszuk Małkiński Małkowicz Małochleb Małodobry Małozięć Małucha Mańdok
    Mańturzyk Maśka Maśkiewicz Maślana Maślej Maśniak Mażewska Meder Medvedenko Medwid Medyk Mehring Meinert
    Meisner Mej Mejka Mejsner Melerska Melerski Melich Melion Melkowska Melkowski Melnarowicz Melnic
    Melnichenko Melnichuk Melnikau Melnikov Melnikova Melnykovych Melzer Mendakiewicz Mendala Mendelewska
    Mendocha Mendoza Mendoń Mendrala Mendrela Mendrok Menżyk Mering Merkulova Met Metelski Mianowany
    Miastkowska Miaśkiewicz Michael Michajłow Michałczak Michałków Michałuszko Michałów Michlik Michowska
    Michowski Michór Miciuła Micorek Micun Miczołek Mida Midera Miedzianowski Mielcarska Mielcarski
    Mielczarska Mielczarski Mielecka Mielecki Mielewska Mielewski Mielnikiewicz Miemiec Miera Miernicka
    Miernicki Mierzchała Mierzejek Mierzwicka Mierzwicki Mieszaniec Mieszczanin Mieszkowicz Mietelska
    Mietelski Mietlicka Mietlicki Miezio Mieńko Migalska Migalski Migdal Migiel Miguła Mihułka Mijalska
    Mijalski Mike Mikeladze Mikhno Mikiel Miklis Mikosza Mikowska Mikowski Miksiewicz Mikulicz Mikunda
    Mikuszewska Mikuszewski Mikuśkiewicz Mikłas Milak Milaniuk Milarska Milarski Milc Milcz Milczek
    Milczewska Milczewski Milczuk Milde Mildner Miliczek Milkiewicz Milko Milkowski Mincer Mindak Minenko
    Minich Miniewicz Minkowska Minkowski Minkus Minota Mintus Mirkowicz Mirochna Mirosławska Mirosławski
    Mirońska Miroński Mirus Mirzaev Mirzejewska Mirzejewski Misch Mischke Mishra Misiorek Misiorna Misiorny
    Misiun Misiło Misko Misterek Misterka Misterska Misterski Mistygacz Miszk Mitak Mitan Mitał Miter
    Mitkiewicz Mitkowski Mitrenga Mitros Mitrut Mitskevich Mituta Mizerny Mizgalska Mizgalski Mizgier
    Miziniak Mizińska Mizura Miącz Miąskowska Miąskowski Miężał Miłaszewska Miłaszewski Miłoch Miłowska
    Miłowski Miłoń Miżdal Mleko Mochalska Mochniej Mocydlarz Moczarska Moczygemba Mofina Mogielska Mogielski
    Mohammad Mohr Mojak Mojecka Mojek Mojeścik Mojsak Mokras Mokros Mokrzyńska Mokrzyński Mokwińska
    Mokwiński Molas Molicka Molicki Molisak Moll Molnar Molus Mondel Monik Montewka Morajko Moraru Morańda
    Morciniec Mordasiewicz Mordka Morgan Mormol Mormul Morris Morus Morusiewicz Morzyńska Morzyński Mosak
    Moseichuk Mosior Moskalets Moskaluk Moskalyk Moskot Moskwiak Mospinek Mostovyi Mostowiec Mostowy Moszko
    Moszyk Motor Motruk Motyczyńska Motyczyński Moyo Mozdyniewicz Mozghova Mozolewska Mozolewski Mołdawa
    Mołdysz Mołek Możdżyńska Możdżyński Możuch Mrocheń Mrosek Mroszczak Mrowczyk Mrozewska Mrozewski
    Mrozicka Mrozicki Mrula Mruszczyk Mryka Muca Mucek Muchajer Mucharska Mucharski Muda Mudra Mudryi
    Muhammad Mukhin Mukhina Mula Mulyk Mumot Munia Munik Muntean Muradov Muravska Murawiec Murawka Murańska
    Murański Murdzia Murglin Murzynowska Murzynowski Musiałkiewicz Musiałowicz Musidlak Musielewicz
    Musielska Musielski Musińska Musiński Musolf Mustafaev Muszer Muszkieta Muts Muza Muzal Muzalewski
    Muzyczka Muńko Myca Myczka Myhal Mykhailichenko Mykhailiv Mykhailovska Mykhailovskyi Mykhalchenko
    Mykhalevych Mykita Mykolenko Mykoliuk Mykuliak Mynarski Myronov Mysiakowska Mysiakowski Myskiv Myszkier
    Myszko Myszogląd Mytko Myzia Myć Mącik Mączewska Mączewski Mądrowska Mądrowski Mądrzejewska Mądrzejewski
    Mąkosza Mędrygał Mętrak Mężydło Młodziejewski Młodzieniak Młodzikowska Młodzikowski Młudzik Młynarczak
    Młynarkiewicz Młyniec Młynik Mścichowska Mścichowski Nabagło Nabiev Naboka Nabzdyk Naczyńska Naczyński
    Nadaj Nadgrodkiewicz Nadolnik Nadratowska Nadratowski Nadtochii Nadziejko Nadłonek Nafalska Nafalski
    Nagadowska Nagadowski Nagler Naguszewska Naguszewski Nahorniuk Naida Naja Najbar Najberg Najbor
    Najdowski Najduk Najdyhor Najmoła Najuch Nakielny Nakoneczna Nalej Należyty Namięta Namysłowska
    Namysłowski Nandzik Nankiewicz Naparty Napiontek Naporowski Narel Narkowicz Narkun Narodzonek Narowska
    Narowski Nasibov Nastałek Nasternak Natorska Natorski Naumczyk Naumovych Navrotska Navrotskyi Nawojska
    Naworska Naworski Nawracała Nawrath Nawrocik Nazarkiewicz Nedilko Nega Nekrasova Nelec Nelke Nemchenko
    Nenko Nepali Nerka Nerkowska Nerkowski Nerć Nesterov Nestor Nestoruk Neubert Neukirch Nevmerzhytska
    Nguyen|Thi Niciak Nicoś Nidecka Nidecki Niebieszczańska Niebieszczański Niechwiej Niecikowska
    Niecikowski Nieciąg Nieczaj Niedoba Niedojad Niekrasz Niemczycka Niemczycki Niemczyńska Niemiro
    Niemirowska Niemirowski Niemirska Niemirski Niemkiewicz Niemotko Niepiekło Niepokój Nierobiś Nierychło
    Niesiołowska Niesiołowski Niestroj Nietrzeba Nietubyć Nieużyła Niewadzisz Niewiada Niewiedział Niewrzoł
    Niewulis Niewójt Niezbecka Niezbecki Nieznalska Niełacna Nieścier Nieścieruk Nieściur Nikiforova
    Nikitchenko Nikitchuk Nikodemska Nikolov Nisio Niszczak Nisztuk Nitoń Nitsche Nitychoruk Noceń Noch
    Nochowicz Nocula Noetzel Nogas Nolbrzak Nolewajka Norberciak Norkiewicz Norkowski Norman Nosalik
    Nosewicz Nosidlak Noske Noskiewicz Nosol Nosova Nosowska Nosowski Noszczak Noszka Novitskyi Nowakiewicz
    Nowakowicz Nowalińska Nowalska Nowalski Nowatkowska Nowatkowski Noweta Nowocińska Nowociński Noworol
    Noworól Nowosadzka Nowosadzki Nowosiad Nowrotek Nożyńska Nożyński Nuckowska Nych Nychyporuk Nyczak
    Nykaza Nyklewicz Nykolyn Nykonchuk Nykyforuk Obała Oberska Oberski Obidowska Obidowski Obiegała Obiegło
    Obracaj Obremska Obremski Obrok Obtułowicz Obzejta Ochalik Ochała Ochmanek Ochnicki Ochońska Ochoński
    Ochrymiuk Ochyra Ochęduszko Ochędzan Ocimek Oczadły Odachowska Odachowski Odelga Odrobińska Odrobiński
    Odważny Odwrot Odya Odyniec Odzioba Ognik Ogon Oh Ohiievych Ohly Ohorodnik Okapiec Okińczyc Oklińska
    Okliński Okos Okołowicz Okrajek Okrajni Okrasińska Okrasiński Okraszewska Okraszewski Okrojek Okruch
    Okrutny Okręglicka Okręglicki Oksiuta Okulus Okuniewicz Okupnik Okupski Okuszko Okwieka Olasek Olber
    Olechowicz Olefir Olej Olejak Olejarski Olejnicka Oleksenko Oleksiejuk Oleksów Olendzka Olendzki Oleniuk
    Olesek Oleshchuk Oleshko Olesiewicz Olesz Olichwer Olichwier Oliszewski Oliwiak Oliynyk Olińska Oliński
    Oller Olsza Olszanowski Olszyk Olton Omarov Omelaniuk Omelczuk Omelianiuk Omen Omylak Onik Oniśk
    Onofriichuk Onopiuk Onopriienko Onyskiv Onysko Opacki Opalko Opaluch Opar Oparka Opat Opic Opitek Opoń
    Opryshko Oprzędek Opęchowska Opęchowski Orawczak Orawska Orawski Ordowska Ordowski Organ Organa Orlenko
    Orlicz Orlovskyi Orluk Orpik Orszak Orsztynowicz Ortman Ortmann Orujov Orych Orysiak Orzelska Orzelski
    Orzeszko Orzełowska Orzełowski Orzłowska Orzłowski Orłoś Osiewacz Osior Oskiera Osmanov Osmenda Osmolak
    Osmulski Osses Ossolińska Ossoliński Ostach Ostafiichuk Ostapkiewicz Ostapkowicz Ostasiewicz Ostałowska
    Ostańska Ostrouch Ostrowicka Ostrowicki Osumek Oswald Osyra Osytek Oszmian Osęka Otczyk Otfinowska
    Otfinowski Otlewska Otlewski Otolińska Otrzonsek Otrząsek Otłowska Otłowski Ovchar Ovdiienko Overchuk
    Ovsiienko Owczarczuk Owczarzy Owczorz Owedyk Owerczuk Owerko Owsianna Oziębała Ozygała Ołowska Ołowski
    Ołubek Ołubiec Ościk Ościłowska Ościłowski Ośkiewicz Oślak Oświecińska Oświeciński Pabiniak Pabiszczak
    Pabjańczyk Pacana Pacała Pachała Pachciarek Pachel Pachoł Pachucy Pachurka Paciepnik Pacula Pacwa Pacyk
    Paczesna Paczesny Pacześna Pacześny Paczosa Paczóska Paczóski Pacławska Pacławski Padalka Padamczyk
    Paderewska Paderewski Pagieła Pajkert Pajonk Pajęcka Pajęcki Pakhomov Pakiet Pakoca Pakowska Pakowski
    Palczyńska Palczyński Paleczek Paleczna Palenik Paleta Palik Palikot Paliukh Paliś Palkij Palkowska
    Palkowski Pallach Paluszewski Palyvoda Pan Panak Panaś Paniak Pankova Panna Panocha Panov Pantak Panter
    Panusz Papała Papierski Papiewska Papiewski Papińska Papiński Papla Paplińska Papliński Papros Paprotna
    Paradzińska Paradziński Parandyk Paraniak Parapura Parashchuk Parat Parchańska Parchański Parchem
    Parchimowicz Pardała Pardus Parkita Parkot Paroń Parszywka Parulski Parusel Parzniewska Parzniewski
    Parzonko Parzuchowska Parzyjagła Pasak Pasamonik Paschke Pashchuk Pashkevich Pashkevych Pasisz Passon
    Pasterak Pasterny Pasterska Pasterski Pasterz Pastushok Pastuszczak Pasula Paszak Paszcza Paszczuk
    Paszewska Paszewski Paszkiet Paszta Pataj Patecka Patej Patelka Patelska Paterczyk Paterok Paterska
    Paterski Patlewicz Patoleta Patron Patryn Patura Paturej Patuła Pauch Paulewicz Pauliński Paulovich
    Pauszek Pauś Pavlichenko Pavlik Pawella Pawełka Pawletko Pawlikiewicz Pawlisiak Pawluczyk Pawnuk Pawska
    Pawski Pawula Pawęska Pazda Pazdej Pazdyka Pazgrat Pałach Pałetko Pałubiak Pałucha Pańków Pańta
    Paśkiewicz Paśnicka Paśnicki Paździerz Paździoch Paździorek Pażucha Pech Pecheniuk Pechta Pecko
    Peczyńska Pedchenko Peek Pelak Pelcer Pelczyk Pelec Pelińska Pellowska Pellowski Pempera Pempuś Pena
    Pencak Penczek Pender Pendziałek Penk Pepel Perec Perederii Peregrym Perehinets Perenc Pererva Perez
    Pergół Pernach Persona Persson Peruga Perzan Perżyło Peszel Peszke Petelska Petelski Petera Petersen
    Petla Petlic Petrash Petrashchuk Petri Petrovych Petryla Petryniak Petryszak Pewniak Pezdek Pezowicz
    Peła Peśla Phillips Pianko Piask Piastowska Piastowski Piaszczyński Piatrou Pichola Piczak Piddubnyi
    Pidek Pidzik Piecek Piecewicz Piechal Piechoczek Piecychna Pieczek Pieczkowska Pieczkowski Pieczulis
    Pieczyk Piega Piegdoń Piekielny Piekiełko Pieklik Pieknik Pielasa Pielaszek Pielaszkiewicz Pielat
    Pielczyk Pielecka Pielecki Pielesiak Pielesz Pielucha Pienio Pieprzka Piera Pieruszka Pierzgalska
    Pierzgalski Pierzyński Pierścieniak Piesiur Piesta Piestrzyński Pieszczyk Pietluch Pietralik Pietranik
    Pietraszak Pietraszuk Pietrkiewicz Pietrow Pietrowiak Pietrołaj Pietrulewicz Pietrusa Pietrusewicz
    Pietrzko Pietrzyńska Pietyra Pieńczuk Pieńczykowska Pieńczykowski Pieńko Pieślak Pieśniak Pigłowska
    Pigłowski Pijewska Pijewski Pikosz Pikoń Piktel Pikusa Pilaszek Pilat Pilawka Pilichiewicz Pilipiec
    Pilipiuk Piliszko Pilińska Piliński Pilszek Pilzak Pindara Pindera Pingot Pinkawa Pinocy Pintera Piontke
    Piontkowska Piontkowski Piorunek Pioterczak Pioterek Pipała Pipczyńska Pipczyński Piper Pipia Pirch
    Pirga Pirogowicz Pis Pisiewicz Piskoń Piskulak Piskunowicz Piskórz Pistor Piszczan Piszczyk Pitas Piter
    Pitrus Pivtorak Piwka Piwosz Piziak Piznal Pizło Piórecka Piórecki Pięcek Piędziak Piękny Pięt Piętal
    Piętowska Piłatowicz Piłkowska Pińczuk Piś Piśniak Plachetka Plackowska Plackowski Plakhotniuk Plaszczak
    Plebaniak Plesiewicz Plesińska Plesiński Plewko Pleśnierowicz Plitt Pliżga Plotnikov Plotnikova Pludra
    Pluskwa Plutecka Plutecki Pluzhnyk Pląsek Poberezhna Poberezhnyi Pobiega Pobocha Pobudkiewicz Pocałuń
    Pochcioł Pochodaj Pochłopień Pocica Poczobut Początko Podbioł Podczaska Podedworna Podhorodecka
    Podhorodecki Podkalicka Podkalicki Podkańska Podkański Podkowiak Podkowińska Podkowiński Podkowski
    Podkościelny Podkul Podlak Podlas Podlasin Podlaszewska Podlaszewski Podlejska Podlejski Podlińska
    Podliński Podmokły Podobas Podolecka Podoliak Podolian Podsada Podymniak Pohorielova Pohorila Pohorilyi
    Pokotylo Pokropek Pokrywa Pokrzywińska Pokrzywiński Pokrzywnicka Pokrzywnicki Poks Pokładek Pola
    Polarczyk Polaszczyk Polat Polerowicz Polesiak Polewczak Polianskyi Poliwoda Polko Polna Poloch Polova
    Polovyi Polubiec Pomaska Pomaski Pomazan Pomierny Pomykacz Pona Ponczek Ponicka Ponicki Ponitka
    Popardowska Popardowski Popenko Popescu Popielewicz Popielewski Popil Popiołkiewicz Popkiewicz Popkowska
    Popkowski Poplavskyi Popów Popłońska Poraj Poraszka Porc Porczyńska Porczyński Porożyńska Porożyński
    Porwisz Porwit Porzycka Porzycki Porąbka Porębny Posiewała Posiewka Poskart Postrach Posyniak Potapowicz
    Potasiak Poteralska Potoczak Potomski Potorska Potorski Potrac Potrawiak Potrzeba Potrzeszcz Potrząsaj
    Potulska Potulski Potwora Powalisz Powalska Powalski Powałowska Powałowski Powichrowski Powideł Powrózek
    Powąska Pozdniakova Poziemska Poziemski Poznar Poćwiardowska Połajdowicz Połap Połaski Połatyńska
    Połatyński Połcik Połednik Połońska Połoński Połubińska Połubiński Połącarz Poślad Pożarlik Prach
    Prachnio Pracka Pracki Pragacz Pranszke Prasol Prasuła Praszczyk Prekiel Preneta Pres Priadka Probola
    Proc Prochal Prochenka Prochowicz Prochowski Profaska Profus Prokhorova Prokopets Prokopovych Proksza
    Promiński Promny Proniewicz Pronin Proniuk Protasewicz Protsak Protsiv Proń Prończuk Prośniak
    Pruchniewska Pruchniewski Pruciak Prukop Prusakiewicz Prusiewicz Pruszko Pryima Pryimachuk Pryjda Pryka
    Prykiel Prymaka Prymon Prymus Prysak Prysiazhna Przała Przebierała Przech Przekota Przepiórkowska
    Przepiórkowski Przepłata Przeradzka Przeradzki Przerywacz Przespolewska Przeszło Przetak Przewodowska
    Przewodowski Przeździk Przyborska Przyborski Przyboś Przybycin Przybylik Przybyliński Przyczka Przydacz
    Przydanek Przygońska Przypek Przysowa Przystalska Przystaś Przytocka Przytocki Przywecka Przywecki
    Przywoźny Prząda Prószyńska Prątnicka Prątnicki Prędkiewicz Pręgowska Pręgowski Pshenychnyi Psiuch Psut
    Pszeniczka Pszkit Ptaszkowska Ptaszkowski Ptaś Puchniarz Puchowska Puchowski Pucia Pucka Pucułek Puczek
    Puczka Puczko Puczyłowska Puczyłowski Pudlak Pudlis Pudzianowska Pudzianowski Pujanek Pukacki Pukaluk
    Pukocz Pukszta Pulak Pulik Pulikowska Pulikowski Pulka Pulut Pun Pundyk Purc Purcel Purcha Purchała
    Purczyńska Purczyński Purgat Puskarczyk Pustelak Pustelny Pustkowiak Pustoła Puszkar Puszkarski Putowska
    Putowski Putz Puziak Puć Pułkownik Pyciak Pycz Pydo Pydyś Pyk Pykacz Pykosz Pyla Pylak Pypno Pyrc
    Pyrchla Pyrih Pyrlik Pyrzak Pyrzanowska Pyrzanowski Pysiewicz Pyssa Pyszczak Pysznik Pyta Pyter Pytlas
    Pytlewska Pytlewski Pytlińska Pytlowany Pyśniak Pyż Półgrabia Półkośnik Półrola Półćwiartek Późniak
    Pączko Pązik Pąśko Pęcherzewska Pęcherzewski Pędzińska Pędziński Pęksyk Pękul Pętlak Pęza Pęzik Płacheta
    Płachno Płaczkowska Płaczkowski Płaszczymąka Płatkowska Płatkowski Pławny Płazińska Płocharska
    Płocharski Płocińska Płokita Płoskoń Płoszka Płoszyńska Płoszyński Płotczyk Płoucha Płowaś Płowucha
    Płóciniczak Płókarz Rabajczyk Rabcewicz Rabczewski Rabiasz Rabiczko Rabińska Rabska Rabski Rabus
    Rachańska Rachański Rachubińska Rachubiński Rachubka Radajewska Radajewski Radaszkiewicz Radej Radgowska
    Radgowski Radionov Radionova Radny Radoch Radochońska Radochoński Radojewska Radojewski Radomyska Rados
    Radoszewska Radoszewski Radu Raducha Raducki Radulska Radyk Radzicka Radzicki Radzimirska Radzimirski
    Radzimińska Radzimiński Radzimowska Radzimowski Radziun Radziwiłł Radzymińska Radzymiński Rafalak Rainko
    Rajnert Rajpold Rakhimov Rakieć Rakoca Ramaniuk Ramanovich Ramczyk Ramut Raniewicz Raniś Ranoszek Rant
    Rapacki Rapior Rapita Rapp Raróg Rasiak Rasmus Rasulov Raszczyk Raszeja Raszke Rasztabiga Rasztar Ratke
    Ratowska Ratowski Rats Ratushniak Ratuszna Ratusznik Rauch Rauk Rał Rdzak Reczulska Reczulski Reczyńska
    Reczyński Redestowicz Redlich Redlin Redlińska Redliński Redmann Redmer Redo Redyk Redzisz Rega Reginia
    Regner Reis Reiwer Rejkowicz Rejment Rejnowicz Rejowska Rejowski Reks Relich Rembas Rembecka Rembecki
    Rembek Rembielak Rembiesa Remiasz Remlein Rempała Renik Renka Renkas Rentflejsz Replin Rerak Reschke
    Reska Resler Restás Reszkowska Reszkowski Resztak Reszuta Retka Retkiewicz Retkowska Retkowski Reus
    Rewera Reyes Riabchuk Riabko Riabov Riabova Riabukha Riemer Rieznik Ringwelska Ringwelski Robótka
    Rochala Rochna Rochoń Rocka Rocki Rodkiewicz Rodowicz Roeske Roesler Rogała Rogoż Rogusz Roguz Rohova
    Roicka Roicki Rojda Rojkowski Rolewska Rolewski Rolska Rolski Rom Romanovska Romanovskyi Romanow Romanyk
    Romashko Rompczyk Ronkiewicz Ronowska Ronowski Ropelewska Ropelewski Rorbach Rosadziński Rosenberg
    Roshko Rosiewicz Rosocha Rosolak Rosowska Rosowski Rospond Rospondek Rossi Roszczenko Roszkowiak Roszuk
    Rotaru Rothe Rotkegel Rotkiewicz Rotuska Rotuski Roy Rozborska Rozen Rozenberg Rozhkova Rozmysłowska
    Rozmysłowski Rozpondek Rozpędek Rozpłoch Rozwalka Rozwora Roślik Rożak Rożen Rożkiewicz Ruba Rubaszewski
    Rubel Rubiś Ruchniewicz Rudewicz Rudner Rudnyk Rudnytskyi Rudol Rulak Rulewicz Rulewski Rum Rumianek
    Rumik Rumniak Rumpel Runge Runiewicz Rupala Rupiewicz Rupniewska Rupniewski Rurańska Rurański Rurek
    Russo Ruszaj Ruszniak Ruth Rutz Ruła Ruś Ruśniak Ryan Rybachok Rybaczyk Rybchak Rybchuk Rybitwa
    Rybkiewicz Ryborz Rybołowicz Rycek Rycko Rydelek Rydygier Rydzanicz Rydzińska Rydziński Rydzkowska
    Rydzkowski Rydzoń Rydzy Rydzyk Rygał Rykiel Rymarchuk Rymarkiewicz Rymarska Rymarski Rymaszewski Rymuza
    Ryncarz Rynduch Ryngwelska Ryngwelski Rysiak Ryska Ryszczuk Ryszczyk Ryszko Rytelewska Rytelewski
    Rytlewski Rytter Ryzhko Ryzhkova Ryzhuk Rył Ryło Ryńca Ryżek Rzechuła Rzekęć Rzemień Rzemiński Rzenno
    Rzepko Rzeplińska Rzepliński Rzepniewska Rzepniewski Rzetelska Rzetelski Rzewnicka Rzewnicki Rzoska
    Rzymek Rzyski Rzytki Rządca Rzążewska Rzążewski Rólka Rówińska Rówiński Równa Równiak Równy Różewska
    Różewski Różnicka Różnicki Rączkowiak Rębosz Rębowska Rębowski Rędziak Rędziniak Rędzio Rękosiewicz
    Rżanek Saar Sabadash Sabaj Sabala Sabatowska Sabatowski Sabisz Sablik Sabo Sabura Sachajko Sacher Sachs
    Sachuk Saczka Saczko Sadlej Sadocha Sadok Sadovskyi Sadovyi Sadowczyk Sadowniczyk Sadziak Sadzikowska
    Sadzińska Sadłos Saferna Safonov Safronov Saganek Saganiak Sagała Sai Saidov Sajdyk Sajewska Sajewski
    Sajkiewicz Sajkowska Sajkowski Sajnaj Sajur Sakharchuk Sakharuk Sakhniuk Salabura Saladra Salamandra
    Salamonik Salamonowicz Salamońska Salamoński Salamucha Salbert Saleh Salej Salewski Salitra Saliuk
    Salińska Saliński Salska Salski Saluk Salwach Samborek Samczuk Samela Samełko Samko Samoilov Samojedny
    Samoliuk Samorek Samosiuk Samoń Samsoniuk Samulczyk Samulewicz Samuła Samuś Samól Sanak Sanchez Sandak
    Sandomierski Sandul Sanek Sanojca Sanok Santorek Santos Sapek Sapiecha Sapko Sapkota Saracen Sarach
    Sarbak Sarnat Sarnicka Sarnicki Saroka Sasiak Sasor Satała Sauchuk Sauermann Sauter Sava Saveliev
    Savitski Sawera Sawoniuk Sawosz Sawoń Sawuła Sazonova Sałaga Sałajczyk Sałamaj Sałapa Sałasiński
    Sałańska Sałański Sałkowska Sałkowski Saługa Sańczyk Scelina Schabowicz Schaefer Schilling Schindler
    Schmid Schmitt Schmitz Schodowska Schodowski Schramm Schulze Schweda Schütz Sebastian Sedlaczek Segal
    Seidler Seiler Sejbuk Sejdak Sejud Sekita Sekta Sekura Sekścińska Sekściński Selega Seleznov Seleznova
    Selonke Semchyshyn Semczyszyn Semen Semenko Semenovych Semerenko Semkovych Semkło Semmerling Senchuk
    Senda Senderowska Senderowski Sendorek Sendra Sendrowska Sendłak Senftleben Senk Sepioł Serdiuchenko
    Serewiś Serheieva Serhieiev Serwatko Serwicka Serwicki Setkowicz Severyn Seweryńska Seweryński Sewruk
    Shaikh Shainidze Shapran Sheludko Shemchuk Shemet Shengelia Sherpa Shestak Shestakov Shestakova Shi
    Shkliar Shkoda Shkurko Shmatko Shmidt Shnaider Shtepa Shtyk Shulhan Shulika Shulzhenko Shumska Shut
    Shutko Shvydka Shymanskyi Shyshka Shyshkina Siadak Siadul Siama Sianko Siarek Siarka Sibera Sibik
    Sichkar Siciak Sidenko Sideł Sidorenko Sidorkiewicz Sidzina Siebielec Siecla Sieczkarek Siedlak
    Siedlarczyk Siedlarek Siegel Siegieda Siejko Siekańska Siekański Sieklicka Sieklicki Sielczak
    Siemaszkiewicz Siemiaszko Siemienowicz Siemieński Sienica Sienkiel Sienniak Sieradz Sierańska Sierański
    Sierek Sierociuk Sierpowska Sierszeń Sieruta Siewiorek Sigda Sikorra Sikorskyi Sil Siluk Sim Simka
    Simson Sinchuk Siniarska Siniarski Sinkevich Sinkevych Sinkowski Siodła Siołek Sipiora Sipko Sirant
    Sirek Sirocka Sirocki Siryi Sitarczuk Sitarczyk Sitnicki Siuba Siuchta Siurek Siwiaszczyk Siwiecka
    Siwula Siłuch Skalec Skaliński Skalna Skapczyk Skarbińska Skarbiński Skarupa Skaruz Skarżycka Skawina
    Skaza Skałuba Skibowska Skibowski Skierś Skinder Skindzier Sklarek Skliarova Skoczyk Skokowski Skolarus
    Skomiał Skomro Skonecka Skonecki Skoniecki Skoracka Skoracki Skorczyk Skoropad Skory Skowroń Skrabacz
    Skrabalak Skrabucha Skraburska Skraburski Skrobich Skrobiś Skrucha Skrypnik Skrzeczyna Skrzeczyńska
    Skrzeczyński Skrzela Skrzydlak Skrzypkowiak Skrzypniak Skrzypnik Skrzypska Skrzypski Skrzypulec
    Skrzyszowska Skrzyszowski Skręt Skrętkowicz Skrętowska Skrętowski Skubacz Skubida Skubij Skucha
    Skupniewicz Skurzok Skut Skuta Skuła Skvortsova Skwarka Skwarko Skwarło Skwierz Skwirut Skydan
    Skórkiewicz Skórnicka Skórnicki Skórzak Skórzyńska Skórzyński Składowska Składowski Sladek Sliusarchuk
    Sloboda Smagowska Smagowski Smagoń Smajek Smaka Smakosz Smaruj Smarz Smaś Smetana Smetaniuk Smogur
    Smokowska Smokowski Smoktunowicz Smol Smolaga Smoliak Smoliar Smoliga Smolira Smolny Smolska Smolski
    Smorawska Smorawski Smorczewska Smorczewski Smorągiewicz Smosna Smoszna Smreczak Smukała Smura
    Smuszkiewicz Smułka Smyda Smęda Snizhko Snopko Snuszka Sobal Sobarnia Sobczyszyn Sobeczko Sobejko Sobiak
    Sobiepanek Sobierajczyk Sobierańska Sobierański Sobierska Sobierski Sobieszczański Sobieszuk Sobina
    Sobisiak Sobocka Sobocki Soboczyński Sobolieva Sobotko Sobucka Sobucki Sochalski Sochańska Sochański
    Sochor Soczek Sodo Sodzawiczny Sojak Sojko Sok Sokoła Sokołek Sokołowicz Sokurenko Solarewicz Soldatenko
    Solga Solipiwko Solodka Solodovnyk Solomakha Solomko Solomon Solonenko Sondaj Sonnenberg Sonnenfeld
    Sonntag Sopa Sopińska Sopiński Sornek Sorochan Sorochynska Sosinka Sosnovska Sosnowicz Sosulska Sosulski
    Sotnik Sotnikova Sotwin Sowiak Sowizdrzał Sowiźrał Sołtysińska Sołtysiński Sośnica Spaczyńska Spaczyński
    Spalik Spalony Spandel Spas Spinek Spirydowicz Spiżewska Spiżewski Spodar Spodymek Spodzieja Sporny
    Sprada Sprenger Sproch Spruch Spryszyńska Spryszyński Spustek Spych Spytkowska Spytkowski Sraga Srebniak
    Srokowska Srokowski Stabach Stacha Stachal Stachlewska Stachlewski Stachurka Stafa Stajer Stalec
    Stalewska Stalewski Stalica Staliś Staluszka Stalęga Stanasiuk Stancel Standowicz Stani Staniecka
    Staniecki Stanikowska Stanikowski Stanilewicz Stanio Staniuk Stanoch Stanuszek Starostecka Starostecki
    Starościk Starus Stary Starz Starzonek Starzycka Starzycki Stasicki Stasieczek Stasiek Stasiewska
    Stasiełuk Stasieńko Stasiołek Stasiulewicz Stasyshyn Staszczyszyn Staszowski Stateczny Statek Statuch
    Stawiany Stawikowska Stawikowski Stawirej Stawiszyński Stawna Stawniak Stawny Staworko Stawowa Stawowiak
    Stańczykowska Stebelska Stecz Stefani Stefaniv Stefko Steglińska Stegliński Steinberg Steinert Stekla
    Stellmach Stelmachowicz Stelmaszak Stelmaszewska Stelmaszewski Stelter Stempkowska Stempkowski
    Sterczewska Sterczewski Sterkowicz Sterkowiec Sternak Steshenko Stetsko Stetsyk Stewart Stobba
    Stobierski Stobińska Stobiński Stochniałek Stodółka Stoga Stoianov Stoianovych Stoica Stojko Stokfisz
    Stokowy Stoksik Stokłos Stolka Stolp Stoma Stompor Stonoga Stopczyńska Stopczyński Stopiak Stoppa
    Storchak Storczyk Story Stosiek Stosur Stoś Stradowska Stradowski Stramek Stramska Stramski Stranz
    Strasz Straszkiewicz Strauss Strehlau Strelchenko Strelczuk Strilchuk Stroba Stroiwąs Strojecki Strojwąs
    Strokosz Stromecka Stromecki Stronczek Struck Strumidło Strumiłło Strupiechowska Strupiechowski
    Struszczyk Strużek Strycharczuk Strycharska Strycharski Stryszowska Stryszowski Stryszyk Strzecha
    Strzelińska Strzeliński Strzemecka Strzemecki Strzemińska Strzyga Strzykała Strzęciwilk Stróżek
    Stróżewska Stróżewski Strękowska Strękowski Studencka Studencki Studnik Stukan Stuleblak Stusek Stuła
    Stykowska Stykowski Stypczyńska Stypczyński Styperek Stypik Stypińska Stypiński Styra Styrcz Styrnik
    Styrnol Stysiał Styła Stączek Stępczyńska Stępczyński Stęplowska Stęplowski Stępnicka Stępnicki
    Stępowska Stępowski Stężały Stężycka Stężycki Suberlak Subota Substyk Sucha Sucharzewska Sucharzewski
    Suchodoła Sugalska Sugalski Sujewicz Sula Suleja Sulejewska Sulejewski Sulma Sultanov Sum Suma Sumorek
    Supernat Supierz Surała Surdacka Surdacki Surdziel Surga Surlas Surlej Surmaj Surmanidze Surowy Surtel
    Surus Suryś Sushchenko Susik Suszczyk Suszyło Sutryk Suvorov Suvorova Sułowska Sułowski Svitlychna
    Svyryd Svyrydiuk Swakoń Swarcewicz Swatko Swojak Swora Sworek Swęd Swędrak Swędzioł Sybilska Sybilski
    Sychov Sychova Syczewska Syczewski Sygitowicz Sygnowska Sygnowski Syktus Sylwester Syma Synakiewicz
    Synal Syniuk Synoradzka Synoradzki Synowiecka Synowiecki Synowska Synowski Syperek Syrocka Syrocki Sytek
    Syzdek Syzonenko Szablicki Szablińska Szabliński Szach Szachnowska Szachnowski Szachowicz Szadura
    Szaflarska Szaforz Szafruga Szajko Szajnar Szajnowska Szajnowski Szajter Szajwaj Szakoła Szalak
    Szalbierz Szalek Szalewicz Szalonek Szaluś Szalwa Szamałek Szamburska Szamburski Szamota Szampera
    Szandała Szaniec Szarafińska Szarama Szaran Szaranek Szargan Szarko Szarowicz Szarszewska Szarszewski
    Szarwark Szastok Szatyłowicz Szawan Szałapski Szałaśny Szałecka Szałecki Szałowska Szczebak Szczebiot
    Szczechla Szczepanowicz Szczepkowicz Szczepocka Szczepocki Szczesiul Szcześniewska Szcześniewski
    Szcześnik Szczodrak Szczotok Szczubiał Szczudlik Szczukocka Szczupakowska Szczupakowski Szczuraszek
    Szczutkowska Szczutkowski Szczygioł Szczypiorska Szczypiorski Szczyrbowska Szczyrbowski Szczytko
    Szczytowska Szczytowski Szczęk Szejn Szejner Szelc Szelenbaum Szelka Szematowicz Szemik Szemiot
    Szemplińska Szempliński Szenfeld Szeptuch Szer Szerenos Szerszenowicz Szewczenko Szews Szklanko Szkolak
    Szkopiak Szkopińska Szkopiński Szkotak Szkołuda Szkołut Szkucik Szlachciak Szlag Szlak Szlapa Szlauer
    Szlenk Szleszyńska Szleszyński Szlosarek Szlósarczyk Szmaja Szmajdzińska Szmajdziński Szmal Szmalc
    Szmatuła Szmer Szmołda Szmuda Szmuk Szmytke Sznabel Sznajdrowicz Sznejder Sznicer Sznycer Szocińska
    Szoda Szoja Szokalska Szokalski Szokało Szopka Szor Szost Szostakowska Szostakowski Szostkiewicz
    Szotowicz Szpadzik Szpakiewicz Szpecht Szpek Szpilska Szpilski Szpindor Szpond Szpoton Szpruch
    Szramowska Szramowski Szrejder Szrejter Szrek Sztabińska Sztabiński Sztajnert Sztangret Sztark
    Szubarczyk Szubka Szudzik Szufla Szula Szulich Szum Szumal Szumała Szumilak Szumlak Szumniak Szuniewicz
    Szupiluk Szurko Szustakowska Szustakowski Szustka Szut Szuter Szutkowski Szuła Szuścik Szwab Szwabowicz
    Szwagierek Szwajcer Szwajnos Szwak Szwala Szwarczewska Szwarga Szwedkowicz Szwedzińska Szwejda Szwejk
    Szwemin Szybalska Szybalski Szybisty Szybińska Szybiński Szychowiak Szycko Szydeł Szydziak Szydłak
    Szyjkowska Szyjkowski Szykowna Szykowny Szyling Szylko Szymandera Szymbara Szymbor Szymczykiewicz
    Szymczyszyn Szymikowski Szymon Szymor Szymusik Szynalik Szyndlar Szyniec Szynka Szynszecki Szyperek
    Szyperski Szyszkiewicz Szyszlak Szyszło Szywacz Szyłejko Szóstek Szędzielorz Szłapak Sîrbu Sędkowska
    Sędkowski Sędrowska Sędrowski Sędzicka Sędzicki Sędzimir Sękiewicz Sęp Sępek Słaboszewska Słaboszewski
    Sławecka Sławecki Słodka Słodowicz Słodowy Słodzińska Słodziński Słojewska Słomba Słonecka Słonecki
    Słowicka Słowicki Słowiok Słupiński Słyś Słąba Tabaczuk Tabasz Tabaszewska Tabaszewski Tabat Tabatadze
    Taberska Taberski Tacik Tadajewski Tadej Tadel Tadra Tafelska Tafelski Taflińska Tafliński Tajchert Tal
    Talma Tan Tanasiewicz Tanasiichuk Tandecka Tandecki Tang Taperek Taradejna Taranowicz Tarantowicz
    Tarapacz Tarara Tarasevych Tarasińska Tarasiński Taratuta Tarczewska Tarczewski Tarczyluk Targiel
    Targoni Tarko Tarnacka Tarnavska Tarnavskyi Tarnówka Tartanus Tartas Tarwacki Tas Taszarek Tatarowicz
    Tatarska Tatarski Tataruch Tatera Taterka Tatoń Tatur Tatys Tałanda Tchorek Teclaf Teda Teichert
    Tejchman Tekiel Teklak Teklińska Tekliński Telak Telecka Telej Telejko Teler Telma Temchenko Tempczyk
    Tempka Tempska Tempski Tepper Terczyńska Terebus Terekhova Teresiak Teresińska Teresiński Tereszczuk
    Tereszko Terkiewicz Termin Ternova Tersa Teske Teszner Tetela Thapa|Magar Then Theus Thomalla Tic
    Timoszuk Tiszbierek Tobis Tobota Toczyłowska Toczyłowski Toda Todorov Todua Todys Tokajuk Tokarczuk
    Tokarenko Tokarewicz Tomalczyk Tomanik Tomankiewicz Tomashevska Tomashevskyi Tomasiuk Tomaszko Tomaszyk
    Tomaśko Tomes Tometczak Tomkowska Tomkowski Tomporowska Tomporowski Tomska Tomski Tomyślak Tonak
    Tonderys Tondos Tonia Topal Topchii Tora Torbicz Torebko Toruńska Toruński Torłop Toszek Totoś Towpik
    Tołczyk Tołłoczko Traciak Traczuk Trafalska Trafalski Tragarz Trapp Traut Treichel Trelińska Treliński
    Trella Trembecka Trepa Trepiak Trepkowska Trepkowski Treska Trestka Treter Tretiakov Trocewicz
    Trochimczyk Trochowska Trofimchuk Trofimov Trofimova Trojańczyk Trojańska Trojański Trojnacka Trojnacki
    Trojniak Trokhymenko Troszok Trotsiuk Trościanko Truba Trukhan Trus Truskolaska Truskolaski Trybel
    Trybuch Tryfon Trygar Trynda Tryniecka Trypuć Tryzna Trzaskalik Trzaskalski Trzasko Trzaskoś Trzcina
    Trzeciakiewicz Trzonkowska Trzonkowski Trzopek Trzoska Trzpioła Trzybińska Trzybiński Trzósło Trólka
    Trąbińska Trąbiński Trąbski Trąd Trębska Trębski Tsvihun Tsyba Tsybulko Tsybulskyi Tsyhanok Tubacka
    Tubielewicz Tubis Tucznio Tuczyński Tudek Tudruj Tuka Tuliszka Tulińska Tuliński Tumanowicz Tumasz
    Tumiel Tumielewicz Tumińska Tumiński Tupta Tura Turakiewicz Turalska Turalski Turbańska Turbański Turcan
    Turchak Turchan Turchenko Turczyniak Turczynowicz Turewicz Turkosz Turkowiak Turlejska Turlejski
    Turlińska Turliński Turner Tursunov Turtoń Turza Turzańska Turzański Tusień Tuszkiewicz Tużnik Twardak
    Twardochleb Twardoń Tworus Tworuszka Tybora Tyborska Tyborski Tybuś Tycner Tyczkowska Tyczkowski
    Tykhonenko Tykhonov Tyliba Tylińska Tylki Tyll Tyloch Tylska Tylski Tylutka Tyluś Tyman Tymcio Tymczuk
    Tymecki Tymek Tymicka Tymicki Tymków Tymofieiev Tymofieieva Tyndyk Tyrańska Tyrański Tyrek Tyrkiel
    Tyrlik Tys Tysiak Tyska Tyszczuk Tyszecka Tyszecki Tyzo Tyńska Tęgos Tłok Tłustochowicz Tłusty Uchal
    Uchańska Uchański Ucher Uchmanowicz Uchnast Uciechowska Uciechowski Ucinek Uczciwek Udała Udod Udovenko
    Ufa Ujazda Ujazdowska Ujazdowski Ulas Ulaszek Ulikowska Ulikowski Uljasz Ullah Ullmann Ulążka Umarov
    Ungier Urbaczka Urbankiewicz Urbanovich Urlik Ursu Urtnowska Usarz Ushakov Usik Usiądek Usowicz
    Ustaszewska Ustaszewski Utko Uzarek Uzarski Ułamek Vakula Valiev Valko Varava Vardanyan Vashkevich
    Vasileuski Vasilevich Vasiliev Vasilieva Vasilyeu Vasiuk Vasylets Vasylevskyi Vasylevych Vdovenko
    Velykyi Verba Vereshchak Vilchynska Vinichenko Vinnik Vitan Viter Vitkovska Vladyka Voichuk Voigt Voitko
    Voitsekhovska Volodko Volos Volovyk Volyk Voronko Voronov Vorontsova Voss Vovchok Vus Vynohradov
    Vyshniak Wabich Wachnicki Wachulec Wacnik Wadecka Wadecki Wadowiec Wadoń Wajchert Wajrak Wajszczak
    Walasiewicz Walc Walczyszyn Walda Walder Waldowska Waldowski Walec Walecko Waleczko Walenciej Walenciuk
    Walendzewicz Walendziuk Walenta Walerczak Walerczyk Walinowicz Walsh Waltoś Waluda Walęcka Walęcki Wamka
    Wandel Wandor Wandzik Wania Waniak Waniczek Wanielista Waniewski Wanowicz Wanta Wapińska Warakomska
    Warakomski Warchałowska Warchałowski Warcholiński Warchulska Warchulski Ward Wardas Wardaszka Wardaszko
    Wardecka Wardecki Wardenga Wardowska Wardowski Wardzyńska Wardzyński Wardęcka Wardęcki Wargocka Warguła
    Warmus Warsiński Warsz Warszawa Warszewski Warta Wartak Wartalska Warunek Wasek Wasieczko Wasiel
    Wasielak Wasila Wasilak Wasiljew Wasilka Wasiukiewicz Waszczeniuk Waszczyszyn Waszek Waszkowska
    Waszkowski Wasztyl Wasłowicz Wata Watała Watral Watson Wawiórko Wawrejko Wawreniuk Wawruszczak Wawryło
    Wawrzos Wawrzuta Wawrzykowska Wawrzyszko Waćkowska Waćkowski Wałaszewska Wałaszewski Wałcerz Wałecka
    Wałecki Wałejko Wałkiewicz Wałowska Wałowski Wałuszko Wałęsiak Waścińska Waściński Wciórka Wdowiarz
    Wdowińska Wdowiński Wdowska Wdowski Wdzięczna Wdzięczny Wegiera Wei Weiher Weihs Weiland Weilandt Weiser
    Wejs Welcz Welik Welke Weltrowska Weltrowski Wencka Wendel Wenderska Wenglorz Wensierska Wensierski
    Wentland Werens Wereska Wereski Wereszka Wereszko Werkowska Werkowski Wernicka Werno Werpachowska
    Werpachowski Wers Werstak Werwińska Weryk Weryszko Weryńska Wesół Weyer Weyna Wełnicka Wełnicki
    Weżgowiec Wiankowska Wiankowski Wiaterek Wiatrek Wica Wichlińska Wichliński Wichniewicz Wiczyńska
    Wiczyński Widelska Widelski Wider Widerski Widlak Widulińska Widuliński Widurska Widzisz Widzińska
    Widziński Widzyk Widłok Wiechecka Wiechecki Wiechoczek Wieciech Wiecki Wieczyńska Wieczyński Wieczór
    Wieder Wieland Wielebska Wielebski Wielec Wielek Wielgosik Wielgusiak Wielgórska Wielgórski Wielicka
    Wielicki Wielk Wielosik Wielowska Wielowski Wienke Wieprzkowicz Wiernik Wierońska Wierus Wierzbowicz
    Wierzgała Wierzgoń Wierzycka Wierzycki Wierzyk Wietecka Wietecki Wieśniak Wijatkowska Wijatyk Wikarek
    Wiklak Wiklik Wiklińska Wikliński Wiktorczyk Wiktoruk Wilary Wilas Wilaszek Wilbik Wilczko Wilczkowska
    Wilczkowski Wild Wilgocka Wilgocki Wilgosz Wilgucki Wilim Wilisowska Wilisowski Will Wilmanowicz Wilner
    Wilska Windys Wingert Winniczuk Winogrodzka Winogrodzki Winsztal Wiorek Wirski Wirtek Wirth Wis
    Wisniewski Wiszniowska Wiszniowski Witalis Witczyk Wites Witkowiak Witman Witomska Witosławska Wittig
    Witych Wiwatowska Wiwatowski Wiórkiewicz Wiąz Więtczak Więzowska Wlazeł Wleklik Wleklińska Wlezień
    Wnukiewicz Wochal Wochniak Wodka Wodniczak Wodziak Wodzień Wodzisz Wodzisławska Wodzisławski Wojakiewicz
    Wojcieska Wojcieszuk Wojcińska Wojciński Wojczyk Wojdal Wojdalska Wojdalski Wojdon Wojdyr Wojenka
    Wojkiewicz Wojnas Wojniusz Wojsiat Wojszko Wojsznis Wojtasz Wojtaszko Wojtaszyk Wojtkielewicz Wojtko
    Wojtkun Wojtukiewicz Wojtyczko Wojtyla Wojtyłko Wolanowska Wolanowski Wolany Woldański Wolder Wolek
    Wolko Wollny Wolszon Wontorczyk Worosz Worsztynowicz Worwąg Worzała Woskowicz Wower Wozowicz Wołczak
    Wołczański Wołczuk Wołejszo Wołkiewicz Wołodkowicz Wołosik Wołosowicz Wołyniak Woźniewski Woźniok
    Wrazidło Wright Wroniecka Wroniecki Wroniszewska Wroniszewski Wrotny Wruk Wrzask Wrzeszczyńska Wrzochal
    Wszelak Wszelaka Wudarska Wudarski Wujkowska Wujkowski Wulczyńska Wulczyński Wuzik Wyborska Wyborski
    Wybranowska Wybranowski Wybrańczyk Wybrańska Wyciślok Wyczyńska Wyczyński Wydmańska Wydmański Wydryszek
    Wyganowski Wygaś Wykpisz Wyleżałek Wylotek Wymazała Wymysłowska Wymysłowski Wypich Wypijewska Wypijewski
    Wypychowska Wypychowski Wyrazik Wyrembak Wyroda Wyrostkiewicz Wyrozumska Wyrozumski Wyrozębska Wyrwicz
    Wyrwińska Wyrwiński Wyrwoł Wyrębiak Wyrębska Wyrębski Wysiecka Wysiecki Wysk Wysok Wysowska Wysowski
    Wyspiańska Wyspiański Wystrach Wyszogrodzka Wyszogrodzki Wywijas Wywioł Wyzga Wyzuj Wyżkiewicz Wzgarda
    Wódkiewicz Wódkowska Wódkowski Wójkowska Wójkowski Wójtewicz Wójtów Wólczyńska Wólczyński Wąsewicz
    Wąsiak Wąsiewska Wąsiewski Wąsińska Wąsiński Wąś Węcek Wędzik Wędzina Wędzonka Węgielnik Węgiełek
    Węglarek Węglicka Węglicki Węgrowska Węgrowski Węzik Władarz Władysiak Włoczewska Włoczewski Włoka
    Włosik Włoskowicz Włoszczyńska Włoszczyński Włuka Yablonskyi Yakobchuk Yakubenko Yakubovskyi Yakymovych
    Yanchenko Yaniuk Yaniv Yanko Yankova Yankovskyi Yanovska Yarovenko Yashchyshyn Yasinskyi Yatsiv Yatsyna
    Yavuz Yefimov Yefremov Yefymenko Yemelianov Yermakov Yeromina Yershova Yevdokymova Young Yudin Yuldashev
    Yurchyshyn Yurieva Yuriichuk Yurko Yushkevich Yushko Zabawski Zabel Zabiegaj Zabiegło Zablotska
    Zaborowicz Zabrzeska Zachacz Zachaj Zachar Zacharuk Zacheja Zacher Zachura Zadorozhnia Zadorozhnii
    Zadrożniak Zadęcka Zagdan Zagrobelna Zagubień Zagóra Zagórna Zagórowicz Zagórowska Zagórowski Zagłoba
    Zahora Zahorodnia Zahorodnii Zahorska Zahorulko Zahrebelna Zaichuk Zaitsau Zaj Zajczyk Zajder Zajk Zajma
    Zajonc Zająkała Zakharko Zakharuk Zaklika Zakonek Zakościelna Zakościelny Zakrevska Zakrocki Zakrzewicz
    Zalesińska Zalesiński Zaleszczyk Zalevska Zalevskyi Zaleśkiewicz Zalot Zambrowski Zamiatała Zamorowska
    Zamorowski Zamożniewicz Zaniuk Zapałowska Zapałowski Zapiec Zaradkiewicz Zaradna Zaradny Zaradzka
    Zaradzki Zarajczyk Zarańska Zarański Zarczuk Zarecka Zarecki Zarek Zaruba Zarych Zarycka Zarycki
    Zaryczny Zarówna Zasina Zasłonka Zatylna Zatylny Zavadska Zavadskyi Zawadowicz Zawadzak Zawieracz
    Zawieska Zawiska Zawisła Zawojek Zawojska Zawojski Zawrotny Zazulak Zaława Zbieg Zbijowski Zboina Zborek
    Zbroińska Zbroiński Zbroniec Zbucka Zbucki Zbudniewek Zbyszyńska Zbyszyński Zbytniewska Zbytniewski
    Zdanewicz Zdaniewicz Zdon Zdrojek Zdrojkowska Zdrojkowski Zdrzalik Zdunowska Zdunowski Zdziechowicz
    Zdziechowska Zdziechowski Zebzda Zega Zegzuła Zeidler Zejer Zelech Zelenchuk Zeleniuk Zeler Zeller
    Zembala Zembik Zembol Zembrowska Zembrzycka Zembrzycki Zemełka Zemlak Zgadzaj Zgarda Zgiep Zglinicka
    Zglinicki Zgnilec Zgrzywa Zgud Zgłobicka Zgłobicki Zhdaniuk Zhdanov Zhdanova Zhelezniak Zhmurko Zhovnir
    Zhukouski Zhuravska Ziarniak Ziejewska Ziejewski Zielaskiewicz Zieleniak Zieleźny Zielona Zielonko
    Zielosko Zieman Ziembikiewicz Ziemek Ziemichód Ziemka Ziemkowska Ziemkowski Ziemlewska Ziemlewski
    Ziemniewicz Zientala Ziernik Zień Zieńczuk Zimak Zimecka Zimecki Zimerman Zimiński Zimniewicz Zimnik
    Zimnol Zin Zinenko Ziob Ziomko Zipser Ziąbka Ziębicka Ziębicki Ziętak Zięzio Zjawiona Zjawiński
    Zjeżdżałka Zmarlak Zmarzła Zmorzyński Zmuda|Trzebiatowska Zmuda|Trzebiatowski Znajdek Znamiec Znaniecki
    Zobek Zobel Zochniak Zolotarova Zomerfeld Zommer Zoremba Zorina Zoła Zrobek Zubal Zubala Zubchenko
    Zubilewicz Zubkov Zubkova Zubrytska Zubrytskyi Zubyk Zuiev Zuieva Zuterek Zuwała Zuzak Zwiech Zwiefka
    Zwierzyk Zwolenkiewicz Zydorczyk Zydorek Zygarowicz Zygała Zygiel Zygier Zygmanowska Zygmańska Zygmański
    Zygmund Zygner Zygo Zygoń Ząbkowska Ząbkowski Złamaniec Złota Złotnicka Złotnicki Złotorowicz Złotoś
    Çeli̇k Ðặng Ðỗ Özdemi̇r Özkan Ćmil Ćmok Ćwiertka Ćwiertniak Ćwiertniewicz Ćwioro Ćwirzeń Ćwięczek
    Łabanowska Łabanowski Łabenda Łabińska Łabiński Łachman Łaciok Łacińska Łaciński Ładak Ładny Ładocha
    Ładoń Ładyga Ładzińska Ładziński Łajszczak Łanda Łania Łanocha Łapiak Łapicz Łapko Łapok Łapsa Łapuć
    Łasisz Łasut Łaszek Łatanik Ławińska Ławreszuk Łazaj Łazik Łaziuk Łazorko Łazuga Łazur Łepecka Łepecki
    Łoboziak Łoch Łodzińska Łoin Łojszczyk Łomozik Łopacka Łopacki Łopat Łopatkiewicz Łopato Łopatowska
    Łopatowski Łopusiewicz Łos Łosoś Łotocka Łotocki Łoń Łubek Łucek Łuciów Łucjan Łucjanek Łucyk Łuczków
    Łuczywek Łudczak Łukasińska Łukasiński Łukaszka Łukaszów Łukosz Łuksik Łuków Łunkiewicz Łupieżowiec
    Łupkowska Łupkowski Łużyńska Łużyński Łyda Łydzińska Łydziński Łygas Łysio Łytka Łyżwińska Łyżwiński
    Łączka Łączniak Łąka Łęgosz Łępicka Łępicki Łęska Łęski Łęszczak Łężak Ściegienny Ściera Ścierska
    Ścierski Ściuba Ściślak Śladewska Śladewski Ślaga Ślawska Ślepecka Ślepecki Śliwakowska Śliwakowski
    Śliwczyński Śliwkiewicz Śliwonik Ślizak Ślósarz Śląska Śląski Ślązok Ślęzok Śmiatacz Śmiałowska
    Śmiałowski Śmich Śmiecińska Śmierzchalska Śmierzchalski Śmigaj Śmigla Śmigowska Śmigowski Śniadecka
    Śniadecki Śniadek Śniegoń Śnieguła Śniosek Śnioszek Śnitko Śpionek Środek Śródka Świacka Świacki
    Światowiec Światowy Światłoch Świdurska Świdurski Świec Świentek Świerczok Świerzbin Świerzbińska
    Świerzbiński Świerzewska Świerzewski Świerzyńska Świerzyński Świetlak Świniuch Świrad Śwircz Świrydowicz
    Świstun Świta Śwital Świtka Świtkiewicz Świtkowska Świtkowski Świącik Świątecka Świątecki Świątko
    Świątoniowska Świątoniowski Święchowicz Świędrych Świętczak Świętoniowska Świętoniowski Şahi̇n Źrałka
    Żaboklicka Żaboklicki Żabówka Żaglewska Żaglewski Żala Żamojda Żarkowska Żarna Żarnecka Żarnecki Żdanuk
    Żebrak Żegnałek Żerańska Żerański Żerdzińska Żerdziński Żerko Żerkowska Żerkowski Żeromska Żeromski
    Żmiejko Żmij Żmijan Żmuda-Trzebiatowska Żmuda-Trzebiatowski Żoczek Żołek Żołnacz Żołneczko Żołnierz
    Żołnierzak Żołopa Żołędziewska Żuchnik Żukrowska Żulińska Żuliński Żurad Żurawicki Żurawińska Żurawiński
    Żurawka Żurczak Żuromska Żuromski Żuławska Żuławski Żychowicz Życki Życzkowska Życzkowski Życzyńska
    Życzyński Żydak Żydowicz Żydziak Żydzik Żygowska Żygowski Żyszkiewicz Żytko Żytkowiak Żytkowicz Żywiczka
    Żywioł Żywiołek Żywno Żywot Żółkoś Żądełek
  `],
  [1800, `
    Abdulaev Abrahamowicz Abramenko Acar Acharya Ackermann Adasik Adaszyńska Adaszyński Adaśko Aftanas
    Aftowicz Agacka Agacki Aghayev Ahafonova Akacka Akacki Akerman Akhalaia Akimov Aksamitowska Aksamitowski
    Aksman Aksoy Aktaş Akter Akulich Alankiewicz Albingier Aleks Aleksandrovych Alekseienko Aleksiejczyk
    Aleksiejew Aleksiichuk Alexander Alicka Alicki Alievi Alimov Aliyeva Alokhina Altmann Alwin Ambros
    Ambrosiewicz Ambroszkiewicz Ambrożak Ambrożek Amit Amrogowicz Anderwald Andraszak Andreichenko Andreiko
    Andrejas Andrejczyk Andrelczyk Andriiets Andriievskyi Andriiv Andronik Andrukhiv Andrusiv Andruszewski
    Andrychiewicz Andrychowicz Andrykowski Andryszek Andryszkiewicz Angerman Angiel Angielska Angielski
    Anglart Anielska Anielski Anishchenko Anisimowicz Ankiel Ankowska Ankowski Ansari Anszczak Antanovich
    Antochów Antol Antoniów Antonow Antonów Antosiuk Antoł Anusiak Anyszek Anyszka Anyż Apola Apostol
    Arabska Aramowicz Arcisz Ardelli Argasińska Argasiński Arkhipova Arkhypenko Armatowska Armatowski Art
    Artamonova Artwik Artych Artymiuk Asenova Ashurov Aslanov Astakhova Aszklar Atamanenko Atanasov Atras
    Augustynik Aulich Aust Avagyan Avdieiev Avramchuk Awsiukiewicz Azarova Azimov Ałaszewska Babchenko
    Babijczuk Babilas Babko Babowicz Babu Bachan Bachmatiuk Bachora Bachorczyk Bachryj Bachura Bachusz
    Badalov Badan Badecka Badecki Badera Badeński Badtke Bagieńska Bagieński Bagnicki Bagnowska Baidak
    Bailey Bairamova Bajcar Bajgrowicz Bajka Bajołek Bajuk Bajzert Bakan Baklarz Bakowska Bakowski Bakoń
    Bakrev Baksalary Bakumenko Balant Balashov Balbus Balbuza Balcerkiewicz Baleja Balint Balitska Balitskyi
    Balla Balogh Balonek Baltaziuk Baltyn Bamber Bamberska Banas Banasińska Banasz Banaszuk Banaszyk
    Banaszyński Banda Bandera Bandoła Banduła Bandzarewicz Bandziak Bandzul Banel Banert Banicka Banicki
    Baniecka Baniecki Baprawska Baprawski Barabach Baraban Barabas Barabaś Barak Baranau Barancewicz
    Baranenko Baranets Baraniec Baraniok Baranouski Barasińska Barbara Barbarewicz Barbarska Barbarski
    Barbasiewicz Barecka Barecki Barełkowska Barkowska Barkowski Barlak Barnik Barnuś Baros Barta Bartas
    Bartczuk Bartelak Barth Bartkiv Bartlewska Bartlewski Bartochowska Bartolik Bartosewicz Bartosh Bartunek
    Bartuszek Barud Barul Barwiak Barycza Baryczka Baryło Barzak Basałaj Basenko Bashynska Basova Basoń Bass
    Baszczok Baszczyn Batih Batrak Batruch Bauerek Bawołek Bayramov Bazhan Bazior Bazyliuk Baćko Baćmaga
    Bałajewicz Bałazińska Bałaziński Bałażyk Bałchanowska Bałoniak Bałuka Bańbor Bańbura Bańko Bażan Bebek
    Bebło Bebłot Becher Becht Bedka Bednarowska Bednarowski Bednarzak Bedryj Bedynek Bejenka Bejmert Bejster
    Bekasiewicz Bekiesz Belak Belcarz Belcik Beliak Belkiewicz Bell Belowska Belowski Belzyt Bembenik
    Bembnowicz Bendig Bendik Benedykciuk Beniak Beniuk Beraś Berczyńska Berczyński Berehova Berest Berezniak
    Bergandy Berman Bernaczyk Bernatskyi Berowska Berowski Bertrand Berłowska Berłowski Besaraba Bessarab
    Besser Bestwina Betańska Betański Betke Betker Betliński Bevziuk Bewicz Bezkrovna Bezruchko Bezruk
    Bezuhlyi Bezverkha Bełc Bełcik Bełdowska Bełdowski Bełkowska Bełżek Beściak Bhattarai Biadasz Biardzka
    Białaszczyk Białobłocka Białobłocki Białogłowicz Białokozowicz Białorucka Białorucki Białoszewska
    Białoszewski Bidiuk Biedal Biedny Biedrowska Biedrowski Biegacz Bieganek Bielejewska Bielejewski
    Bielewska Bielewski Bielikov Bielonko Bieluch Bieluczyk Bieniewicz Bienioszek Bierczak Bierka Biernot
    Bierska Bierski Bierza Bierzyńska Bierzyński Bieschke Biesok Biestek Biełaga Biełka Bieńka Biga
    Bigosińska Bigosiński Bijoch Bijoś Biliavska Bilichenko Bilinskyi Bilokin Bilokur Bilonozhko Biloshytska
    Bilovus Bimkiewicz Binczyk Bindek Binduga Binert Biniewicz Birk Birnbach Birnbaum Biryło Bischoff Bisko
    Biskupiak Biss Bistram Bistuła Biswas Bisz Biszkont Bitowt Biziuk Biłan Biłda Biłos Bińczycka Bińczycki
    Biśto Blacharska Blacharski Blachnik Blandzi Bleja Blewąska Blinkiewicz Blokesz Blonkowska Blonkowski
    Blusiewicz Bobela Bobrovska Bocharov Bochman Bochna Bochnacka Boczarska Boczarski Boczkaja Boczko
    Boczniewicz Bodnia Bodus Bodzoń Boehm Bogaj Bogdanowska Bogdoł Bogoń Boguszyńska Boguszyński Bohaichuk
    Bohdanovych Bohomol Bohutska Bojaczuk Bojan Bojarowicz Bojarowski Bojaryn Bojkowska Bojkowski Bokowy
    Bolarczyk Bolczak Bolczyk Bolechowska Bolechowski Bolewicz Bolibrzuch Boligłowa Bolimowska Bolka Bolko
    Bolonek Bolt Bonat Boncol Bondara Bondarowicz Bondel Bonecki Borakiewicz Boras Borczak Borda Bordiuh
    Bordon Borlik Borodavka Borodii Borodzicz Borodziej Boroszko Borova Borsiak Borto Borus Boruszak
    Borychowski Borysevych Borysławska Borzuchowska Borzuchowski Borówko Bosowski Bossy Boszke Bot Botnari
    Bozhyk Bozkurt Bołba Bołądź Bożewicz Bożęcka Brachmańska Brachmański Bracisiewicz Braja Brajczewska
    Brajczewski Bral Bralczyk Bralska Bralski Brancewicz Brandeburg Branecki Branny Braszkiewicz Bratus
    Bratuś Bratz Brańczyk Brdys Breitenbach Brejdak Brejna Brejt Brejwo Brejza Brenkus Breszka Breus
    Broczkowska Broczkowski Brodka Brodzka Broj Bromberek Bromirski Bronkowski Bronny Bruchajzer Brudnowska
    Brudnowski Brun Brunke Bruss Bruszkiewicz Bruzdewicz Bryczkowska Brygała Brykalska Brykalski Brykała
    Bryla Brynza Bryńska Brzegowa Brzeszkiewicz Brzeźny Brzoski Brzoskwinia Brzost Brzozowy Brzuchalska
    Brzuchalski Brzuskiewicz Brzustewicz Brzuzan Brzychczy Brzytwa Brzóskiewicz Brzósko Bród Bróż Brąś
    Bręczewska Bubik Bubis Bublewicz Buchaniec Buchla Bucholska Bucholski Buchynska Buchynskyi Buczyk Bucław
    Budacz Budai Budzałek Budziaszek Budzikowska Budzinska Budzioch Bujarska Bujarski Bujniewicz Bukat
    Bukiewicz Bukolt Bukowczyk Bukowicz Buksiński Bukłaho Bulas Bulava Bulba Bulda Bulek Bulhakov Bulkowska
    Bulkowski Bullmann Bulwan Bulzacki Bulzak Bunk Buraczek Burawska Burchacz Burchak Burdalska Burdalski
    Burdeina Burdeinyi Burdun Burdyn Burdyna Burdyński Burdziuk Burenko Bureta Burlak Burlińska Burliński
    Burniak Burno Bursztyn Buryk Buryta Buryś Burzała Burzych Burzykowska Burzykowski Busch Busek Busel
    Busza Busłowska Buturla Butyńska Buwaj Buzalski Buze Buzek Buziak Bułacz Bułakowska Bułakowski
    Bułatowicz Buławska Buławski Bułdak Buż Bużan Bużek Bychawska Bychawski Bychkov Bychowska Bychowski
    Byczko Byjoś Byrka Byrne Byrtus Bysiec Bysiewicz Bystrowska Bystrowski Bzdawka Bzdoń Bzdręga Bzducha
    Bzduła Bzdzion Bzik Bziukiewicz Bzoma Bzowa Böttcher Bąchór Bączak Bądkowska Bądkowski Bębenista
    Bębnowska Błachno Błahuta Błajek Błanek Błanik Błasiński Błatoń Błazińska Błaziński Błażewska Błażewski
    Błocka Błotny Cabanek Cabański Cag Cai Cajler Calów Capaja Capik Carewicz Caryk Cazacu Całko Całkowska
    Całkowski Całusińska Całusiński Cały Cebernik Cechowska Cechowski Cedrowska Cedrowski Cegiełko Cejba
    Cejko Cejnóg Celi Celnik Cenkier Ceplin Cepuch Cerkowniak Certa Cetnarowicz Chabierska Chabierski
    Chabrzyk Chadała Chaim Chajduk Chalińska Chaliński Chalyi Chamernik Chan Chanek Chaplia Chapman Charabin
    Charciarek Charmuszko Charuba Charuk Charytanowicz Chat Chatłas Chava Chaładaj Chałubiec Chałubińska
    Chałubiński Chebda Chebotarov Chechel Chechłowska Chechłowski Chekan Cheliński Chepurko Chepurnyi
    Chernets Chernik Chernikova Chernobai Chervinskyi Chełmicka Chełmowska Chełmowski Chibowski Chilmon
    Chimiak Chiniewicz Chlebica Chlebik Chlebna Chleboś Chmarzyńska Chmarzyński Chmielowicz Chmyr Chochel
    Chochla Chochlewicz Chochliński Chochowska Chochowski Chochołowicz Chocian Chodacz Chodera Chodorowicz
    Chodowska Chodowski Chodubska Chodubski Chodura Chodyniecka Chodyniecki Chodzidło Chodzyński Chodźko
    Cholewczyńska Cholewska Cholewski Chomej Chomentowska Chomentowski Chomontowska Chopyk Chorchos
    Chornenka Chorosz Choroszko Choroszucha Chorążewska Chorążewski Chorążyk Choszczyk Chowdhury Chołaj
    Chołda Chołko Chołota Chołys Chraboł Chraca Chrastek Chreptowicz Chrościcka Chrościcki Chrul Chruślicka
    Chruślicki Chruślińska Chruśliński Chróściel Chróścińska Chuba Chubar Chucherko Chuchmacz Chudyga
    Chudyka Chudzia Chukhrai Chumakova Chwal Chwalibóg Chwaliszewski Chwastyniak Chwedorczuk Chwedorowicz
    Chwil Chwiłkowska Chwiłkowski Chwołka Chybiorz Chylicka Chylicki Chynek Chyruk Chyrzyński Chystiakova
    Chytra Chyzhevska Chyzhuk Chyziak Chęciek Chętkowska Chętkowski Chłodnicka Chłodnicki Chłopicki Ciaciek
    Ciaciuch Ciarach Ciarciński Cichacz Cichaczewski Cichanowicz Cicharska Cicharski Cichała Cichoracki
    Cichowlaz Cichórz Cieciak Ciecior Cieciuch Ciekańska Cieleban Cielec Cielek Cielemęcka Cielemęcki
    Cielepak Cielesz Cielibała Cieliczka Cielińska Cieliński Cieloszczyk Ciemcioch Ciempiel Cieniak Cieniek
    Cienki Cienkowska Ciepichał Ciepielowski Ciepieniak Cieplicka Cierech Cierkosz Cierlica Cierpicka
    Cierpicki Cierpik Cieszewska Cieszewski Cieślakowska Cieślakowski Cieślok Cikacz Cimoszko Ciorga Cioć
    Ciołka Ciołkiewicz Cipior Cira Ciszewicz Ciucias Ciunel Ciuraszkiewicz Ciwiński Ciwoniuk Ciężobka Cmiel
    Cofalik Cofta Cok Compa Constantin Cox Cozac Cubała Cuda Cul Cupał Curlej Curyl Cużytek Cwenar Cybruch
    Cybuch Cybura Cychowska Cychowski Cyfra Cygnar Cygnarowicz Cykowska Cylkowski Cymanowski Cymbaluk
    Cynarska Cynarski Cynkier Cypara Cyprych Cyraniak Cyranka Cyrankiewicz Cyranowska Cyranowski Cyrańska
    Cyris Cyrklaff Cyron Cysarz Cyz Cyza Cyzman Czachara Czachura Czachór Czaderna Czajewski Czaniecka
    Czaniecki Czapek Czapik Czapiński Czapko Czapkowski Czaplarska Czaplarski Czarczyńska Czarnas Czarnasiak
    Czarnek Czarniewska Czarnojan Czarnotta Czarska Czarski Czartoryjska Czebieniak Czekan Czeladka Czeladko
    Czemiel Czempas Czepil Czepiżak Czepułkowska Czepułkowski Czeredys Czerep Czerepko Czermiński
    Czernatowicz Czernic Czernielewska Czernielewski Czesnowska Czeszek Czeszkiewicz Czobot Czochór Czogalik
    Czopko Czorniej Czort Czuban Czuchraj Czudec Czuluk Czuma Czumaj Czwarnóg Czwartos Czwartosz Czwojda
    Czycz Czygier Czykier Czykieta Czykwin Czyrka Czyrnia Czyrwik Czyżewicz Czyżkowska Czyżniewski
    Czyżykiewicz Częczek Częstochowski Da|Silva Dac Daca Dacz Dadał Dadun Dahal Dahl Dahm Dajczer Dajerling
    Dajewska Dajewski Dalewska Dalewski Dalkowska Dalkowski Damas Damaszek Dambiec Damm Danelska Danelski
    Daniek Danilenko Danił Dao Daraszkiewicz Dardas Dargiel Darii Darkowski Darmohrai Darska Darski
    Dashkevich Daszyńska Davidovich Davitadze Davydchuk Davydovych Dawczak Dawczyk Dawidko Dawiskiba Daćko
    Dańczura Dańczyszyn Daź Decewicz Dedek Dederko Dedio Dehmel Dehtiarenko Deik Dejniak Dekhtiar Dekiel
    Dela|Cruz Delczyk Delega Delong Dembiczak Dembitska Dembkowska Dembkowski Dembna Dembny Dembowy Demchyk
    Demenko Dementieva Demian Demianets Demianova Demkiewicz Demkovych Demkowski Dempc Demucha Demus Demuth
    Demydov Demydova Denert Denka Depciuch Depowska Depowski Deptała Dercz Derdak Derdowska Dereniowska
    Derewecka Derewecki Derewicz Derlacz Derlecka Derlecki Dernoga Derra Derucka Derucki Dey Diaków Diallo
    Dias Diasamidze Diduszko Disterheft Dittmann Dmitriieva Dmitroca Dmochewicz Dmytriienko Dobbek Dobber
    Doberstein Dobersztyn Dobias Dobiasz Dobosh Dobrasiewicz Dobraś Dobrek Dobrenko Dobreńko Dobrochowska
    Dobrochowski Dobrogoszcz Dobruchowska Dobruchowski Dobrzykowska Dobrzykowski Dobrzyniecki Dobski Dogiel
    Dojlida Dolewska Dolewski Dolibóg Dolinska Doluk Doman Domaniecka Domaniecki Domanska Domanus
    Domaszczyńska Domaszczyński Domaszewska Domaszewski Domań Dominiuk Domonik Domoradzka Domoradzki
    Domozych Domska Domski Domżałowicz Don Donda Dondalska Dondalski Dong Doniak Donner Dorada Dorczak
    Dorenda Dorn Dorocińska Dorocka Dorocki Dorofieieva Dorosińska Doroż Dost Dostatnia Dovhun Dovhyi
    Dołkowska Dołkowski Dołowa Dołęgiewicz Draba Drabicka Drabiec Drabiuk Drabyk Dracz Draczyńska Draczyński
    Drahun Drak Dranchuk Drapa Draws Drałus Drechsler Drelicharz Drelichowski Dreliszak Drenda Dressler
    Drewniany Dreścik Drobiec Drobnica Drobniewska Drogowski Dron Droniak Dronka Dropińska Dropiński Drossel
    Drożniak Druch Druciak Drukała Druz Druzd Druć Drużdż Dryha Dryjas Dryk Dryniak Drzeniek Drzewi
    Drzewucka Drzewucki Drzyżdżyk Drączkowska Drączkowski Du Dubanik Dube Dubiec Dubielecka Dubielecki Dubil
    Dubin Dubinin Dubinina Dubrawska Dubrova Dubrovska Dubrowska Dubrowski Duczkowska Duczkowski Dudaczyk
    Dudarewicz Dudczyk Dudenko Dudik Dudojć Dudowicz Dudoń Dudra Dudzisz Dufaj Dufrat Dukaczewska
    Dukaczewski Dukowicz Dulba Duliasz Dulniak Dulowska Dumana Dumanska Dumitru Dumka Dumkiewicz Dunajko
    Dunin Duong Duplicki Durałek Durczyńska Durczyński Durejko Duszek Dutczak Duź Dużyk Dwojacka Dworniak
    Dworska Dworzak Dworzecki Dybeł Dybikowski Dybisz Dybizbańska Dybizbański Dybska Dybul Dychto Dychus
    Dyczewska Dygdoń Dygudaj Dyguś Dyko Dyks Dyksa Dylka Dylla Dylus Dyluś Dymanus Dymchenko Dymczak
    Dymitruk Dymko Dymnicka Dymnicki Dymny Dymski Dymura Dyna Dynarek Dyndor Dyngosz Dynus Dyrała Dyrbuś
    Dytkowska Dytkowski Dytman Dyzma Dyło Dzadz Dzhulai Dziachan Dziakiewicz Dziarkowska Dziarkowski
    Działowy Dzidowski Dziedziul Dziegieć Dzieliński Dzielska Dzienia Dzierbicka Dzierlatka Dzierzgwa
    Dzierzęcka Dzierzęcki Dzieszko Dziewic Dziewicka Dziewierz Dziewirz Dziewulak Dzieńkowska Dzieńkowski
    Dzieżyc Dzieżyk Dzikoń Dzimiński Dzionsko Dziony Dziosa Dziubka Dziurkowska Dziurkowski Dziurman Dziułka
    Dziwiszek Dziwoń Dziębor Dziębowska Dziębowski Dzięcielewska Dzoba Dzwolak Dzwoniarek Dzwoniarkiewicz
    Dzyr Dąbała Dębczyńska Dębczyński Dębecki Dębowy Dędys Dłoniak Dłubek Dłubisz Długiewicz Długowska
    Dłutek Dłużyńska Dłużyński Dźbik Dźwigał Dźwilewska Dương Ebel Edelman Eder Ehrlich Eksner Elendt Eljasz
    Elwertowska Empel Enerlich Engelhardt Engiel Englart Erdmańska Esposito Fabrowska Fabrowski Fabrykiewicz
    Fadieiev Fafuła Fajger Falacińska Falaciński Falak Falender Faleńczyk Falfus Falger Falgowski Falko
    Faltynowski Famielec Fan Fangrat Faracik Faraś Farmas Faryńska Faryński Fasiczka Fasuga Fedarovich
    Fedchyshyn Fedec Federczyk Fedina Fedorowska Fedorowski Fedurek Fedus Fekner Fela Felchner Felczerek
    Feldmann Feliciak Felix Felińczak Felkel Felner Felskowski Fender Fendrych Feng Fenger Fengier Fercho
    Ferfet Ferko Fernandes Ferra Ferreira Fertacz Feszter Feć Fiałka Fichna Fidali Fidziukiewicz Fiebich
    Fiecek Fiedziukiewicz Fiejtek Fiema Fiećko Figołuszka Fijałka Fikier Filarowska Filarowski Filcek Filec
    Filenko Filimon Filimonov Filipińska Filipkiewicz Filipovich Filipovych Filipowiak Filla Filochowska
    Filochowski Finke Fir Firaza Firkowska Firkowski Firlejczyk Firlik Firut Firuta Firyn Fisz Fitak Fiuczek
    Fiutowska Fiutowski Flakowski Flaszka Fleger Flejter Flemming Fliegel Flisik Flisiuk Floras Florianowicz
    Florko Florków Floryn Florys Fluda Flądro Focht Fojucik Foltak Foltyniewicz Foltys Folusz Foremska
    Foremski Formaniuk Formejster Formicka Formicki Fornalewicz Forster Fortuńska Fortuński Forycka Forysiuk
    Fota Fotyga Fołda Frajer Franecka Franecki Franelak Frankowiak Frant Frasik Frasunek Fredyk Freiberg
    Frejnik Frelak Fresel Fridman Friebe Fronckiewicz Frosik Frychel Frydrychowska Frydrychowski Frygier
    Fryszkowska Fryszkowski Fryze Fryń Fu Fuczek Fudro Fudyma Fujawa Fularz Fulczyk Fulneczek Funek Furgacz
    Fursenko Furtas Fusiara Fusik Futera Fuz Fułat Fyk Fąferko Gabarkiewicz Gabiga Gabrel Gabryelewicz
    Gachewicz Gadek Gadzinowska Gadzinowski Gaińska Gaiński Gajczak Gajdecka Gajdemska Gajdemski Gajderowicz
    Gajosz Gajowiec Gajtkowska Gajzner Gajęcka Gajęcki Galach Galar Galasińska Galasiński Galbas Galbierczyk
    Galent Galewicz Galimska Galimski Galle Galstyan Galuś Gambal Gambuś Gamracy Ganczarska Ganczarski
    Gandecka Gandecki Gapsa Garbiak Garbocz Garcarz Garczewska Garczewski Garczorz Gardeła Garduła Gardyjas
    Gardyńska Gardzińska Gardziński Garnczarek Garnysz Garyga Gasanova Gasimov Gaszak Gatkowska Gaudy Gaul
    Gawałkiewicz Gawełda Gawełko Gawlicka Gawlicki Gawryl Gawryszak Gaza Gałaszkiewicz Gałażyn Gałczyk
    Gałosz Gałowicz Gałęcka Gałęcki Gałęziewska Gałęziewski Gałęziok Gaździak Gaździcki Gburzyńska
    Gburzyński Gbyl Gdańska Gdański Gembicka Gembka Gemborys Geneja Geniusz Gepert Gerasymenko Gerber
    Gerczak Geresz Gertych Gesing Giczewska Gidaszewska Gidaszewski Gidzińska Gidziński Giebel Giedziun
    Gielmuda Gielo Gieracki Gierasimczuk Gierasimowicz Gierasińska Gierka Gierko Gierlik Gieros Gierszal
    Gierwatowska Gierwatowski Gieryk Giesa Giese Gieszcz Giełdon Giełzak Gileta Gillner Gindera Giniewicz
    Girek Giri Giętkowski Glaba Glabus Glajc Glanert Glensk Glin Glistak Gloger Gluch Gmyr Gnacik Gnacińska
    Gnaciński Gnatkowska Gnatowicz Gniatkowska Gniatkowski Gniaź Gnich Gniecka Gniecki Gnitecka Gnitecki
    Gniza Gnoińska Gnoiński Gnojek Gnoza Gnyszka Goclon Gocman Gocławska Gocławski Godala Godowska Godowski
    Gogoladze Gogolińska Gogoliński Gogołek Gogól Gojke Gojlik Golarz Golasik Golasińska Golasiński Golat
    Golczewska Golczewski Gold Goldstein Golemiec Goleniowska Goleniowski Golimowska Golimowski Golka Goll
    Golly Golmento Golovko Golubiewska Golubiewski Golubska Golubski Gomez Gomulec Gomułkiewicz Goncharenko
    Goncharov Goncharova Goncharuk Gonciarczyk Gonczar Gondko Gonska Goralczyk Gorazd Gorczewski Gorecka
    Gorecki Gorek Gorgolewska Gorgolewski Gorlach Gorlikowska Gorlikowski Gorońska Gorsiak Gorus Goryca
    Gorycki Goryczko Gorzko Gorzula Gorząch Gorączka Gorączniak Gotkiewicz Gotkowska Gotkowski Gotowicz
    Gotowska Gotowski Gotszling Gowik Gozdalska Gołowacz Gołygowski Gołyńska Gołyś Gołębowska Gołębowski
    Gołębski Gościak Gośliński Goździcka Goździcki Grabala Grabalski Grabania Grabczyk Grabelus Grabiasz
    Grabicka Grabicki Grablewska Grablewski Grabna Gradziuk Graham Grajcarek Grajzer Graniczny Grant Graszek
    Graszk Grau Grazda Grduszak Greczka Greczyło Gref Grefkowicz Grega Greger Gregier Gregorkiewicz Greinert
    Grejner Grelewski Grelich Grelik Grelowski Grembowska Grembowski Grempka Grencel Grendysa Gretkowska
    Gretkowski Grim Grimm Grinberg Grobarczyk Grobarek Grochecka Grochocińska Grochociński Grochol
    Grochowiec Grociak Grocka Grocki Grodkiewicz Grodkowska Grodowska Grodowski Grodziska Grodziski Groeger
    Grohs Gromelski Gromniak Gromotowicz Gromski Gromulska Gromulski Grono Gronostajski Grosfeld
    Groszkiewicz Grubek Grubizna Gruchel Gruchlik Grudniak Grudowska Grudowski Grudziak Grudziądz Grudziąż
    Grulkowski Grus Grusiecki Grusza Gruszfeld Gruz Grycel Grychnik Grycner Gryczkowska Gryczkowski
    Gryczyński Grygowska Grygowski Gryn Gryncewicz Grysiewicz Grysko Gryszpanowicz Grysztar Gryt Gryza
    Gryziak Grzebisz Grzebińska Grzebiński Grzegoszczyk Grzegrzułka Grzejdak Grzejka Grzenik Grzesikiewicz
    Grzesiok Grzesista Grzeszyk Grześlak Grzomba Grzondziel Grzybczak Grzybicki Grzybko Grzyśka Grząba
    Grządko Grządkowska Grządkowski Grządzielewski Grząśko Grzędzińska Grzędziński Gráncsa Gródecki
    Grądkowska Grądkowski Grądz Grąz Grążka Grędysa Grędziak Gręziak Gudalewicz Gudan Gudra Gujska Gulbicka
    Gulbicki Gulej Gumeniuk Gumienik Guminiak Gumółka Gura Gurbowicz Gurtat Gurtatowski Gurzęda Gusak
    Guseinova Guth Gutkiewicz Gutmańska Gutmański Guttmann Guzicka Guzicki Guziel Guziuk Guć Gułaś Guśpiel
    Gwardecka Gwardecki Gwardzik Gwazdacz Gwioździk Gwis Gwit Gwizdalska Gworys Gwozdek Gziut Gólcz
    Góralczuk Góralewska Góralewski Górni Górniaczyk Górnikiewicz Güler Gącik Gądzik Gąsińska Gąstoł Gątarz
    Gątkowski Gęba Gębalska Gębalski Gębara Gębołyś Gęga Gęsina Gęsior Gęza Gęślak Gładyszewska Gładyszewski
    Głaszcz Głogiewicz Głomski Głosek Głowaczewska Głowaty Głuchy Głusek Głusiec Głuszkowska Głuszkowski
    Głyda Głąbica Głąbińska Głąbiński Głębicki Haak Haberek Habiak Habiera Habor Habowska Habowski Habrajska
    Habrajski Habryn Habrzyk Habza Hackiewicz Hada Hadrysiak Hady Hadyniak Haftka Haievskyi Haik Hajczuk
    Hajdrych Hajduła Hajdys Hajdyła Hajec Hajkowicz Hajnce Hajnosz Hajnrych Hajt Hakało Halaichuk Halaiko
    Halarewicz Halastra Halbina Halerz Halias Halibożek Haligowska Haligowski Halska Halushchak Halusiak
    Haman Hamilton Hamryszak Hanasz Hanczewski Handerek Haniewicz Hano Hanych Hapunik Haque Haraj Haran
    Harashchuk Harasymchuk Harasymiuk Haraś Harbut Harciarek Harczuk Hardy Harenda Harhaj Harhala Harkabuz
    Harmatiuk Hartung Harupa Harłacz Hasa Hasse Hasterok Hauer Hauk Haupt Haus Hausmann Hauza Havrylyshyn
    Hawliczek Hawrylczak Hawrylik Hawrył Hawryłko Hałabura Haładuda Hałajda Hałasik Hałatek Hałdaś Hałun
    Hańczak Hańczuk Haś Hecht Hedz Heider Heiko Heintze Heinz Heise Hejak Hejka Hejmanowska Hejne Hejniak
    Hejnosz Hejnowska Helios Helis Hellmann Helm Helwing Henclik Henkiel Henne Hennek Henschke Henyk Heppner
    Hera Herasymov Herbasz Herbeć Herchel Hercuń Herdzina Hereha Herhel Herich Hermańska Hermański Hermyt
    Hernacka Herold Hertig Herudzińska Herudziński Herych Hevko Heyduk Heymann Hełdak Hełmecka Hełmecki
    Hillar Hlavatska Hlubek Hluchnik Hnida Hoder Hodovanets Hofer Hoff Hoga Hojak Hojdys Hojna Hojnacka
    Hojnacki Hojniak Hojny Hojoł Holek Holiuk Holk Holko Holovchuk Holovii Holovin Holovnia Holubiev Holuk
    Holzer Homza Hopko Horbaczewska Horbaczewski Horbik Hordieiev Hordieieva Hordii Hornicka Hornicki
    Hornung Horny Horoba Horodetskyi Horodeńska Horodeński Horodyńska Horovyi Horyd Hoshko Hospod Hoszko
    Howis Hołdys Hołdyńska Hołdyński Hołodniak Hołowaty Hołowczak Hołubiec Hościło Hrachova Hrechaniuk Hres
    Hresko Hreśka Hromov Hrusha Hryckowian Hrycyszyn Hryhorovych Hrymaliuk Hrynchak Hryniszyn Hrysiuk
    Hrytsaienko Hrytsko Hrytsuk Hrytsyna Hrywniak Hryńczuk Hubiak Hubicka Hubicki Hubska Huchrak Hud Hudala
    Hudek Hudomięt Hudzenko Hudziec Huebner Hujdus Hukaluk Hulalka Hulboj Huliaieva Huliak Hulyk Humaj
    Humięcka Humięcki Hummel Hunder Hunia Hunt Hupało Hupert Hurin Hurina Hurnik Hurova Hurzhii Husarz
    Huseinov Huseinova Hushcha Hussein Huzarek Huzhva Huzii Huńka Hyc Hylak Hypta Hyski Hytry Hyziak Hyża
    Hącel Hęciak Hęś Hładun Hływa Hồ Ibrahimova Idaszak Ignacek Ignacik Ignacyk Ignaczuk Ignarska Ignarski
    Ignyś Ihnatiev Ihnatov Ihnatova Ihnatovich Ilcewicz Ilienko Illiashenko Imach Imbiorowicz Imianowska
    Imiełowski Imioło Inda Indeka Intek Interewicz Irska Isachenko Iskandarov Itrich Iusubov Ivanitska
    Ivasenko Ivashkiv Ivaskiv Ivasyk Iwaniszyn Iwaszczuk Iwaszek Iwko Izbińska Izydor Iłendo Iżyk Jabłko
    Jabłkowska Jabłkowski Jabłoniec Jachimska Jaciuk Jacob Jacobs Jacoń Jacuński Jadacki Jadanowska
    Jadanowski Jadczyszyn Jafarov Jagielak Jagielnik Jaglewicz Jagos Jagura Jahnke Jainta Jajczyk Jajeśniak
    Jajkiewicz Jakielski Jakimczyk Jakobsze Jakowicz Jakowska Jaks Jakszuk Jakubasz Jakubcewicz Jakubowiak
    Jakusik Jakuszewski Jakś Jalowska Jamborska Jamborski Jamer Jamrocha Jamroszczyk Jamrozińska Jamroziński
    Jana Jancik Janczarska Janczarski Janczukowicz Janelt Janerka Janiaczyk Janiewicz Jankoś Janków Jans
    Jantosz Janura Janusik Januzik Januła Janz Jaraszek Jardzioch Jarmakowicz Jarmuszczak Jarnutowska
    Jarnutowski Jarocińska Jarominiak Jaroszczyk Jarzembińska Jarzembiński Jarzembska Jarzembski Jarzyło
    Jarząbska Jarząbski Jasiakiewicz Jasic Jasiczak Jasinowski Jasinski Jasiok Jasitczak Jasonek Jastrzemska
    Jastrzemski Jaszczerska Jaszke Jaszkowic Jasłowska Jasłowski Jatczyszyn Jawniak Jaworecki Jazienicka
    Jazurek Jałmużna Jaśków Jaślar Jaśnikowska Jaśnikowski Jaśtak Jaźwa Jednac Jeglorz Jekel Jekiel Jelska
    Jelski Jemiołek Jencz Jenczyk Jendraszek Jendrych Jendrysiak Jeon Jerka Jermacz Jerzewska Jerzewski
    Jesiak Jesionkowski Jesiołkiewicz Jewdokimow Jewiak Jocek Jochim Jodkowska Jodkowski Joks Jokś Jonecko
    Jonio Jopa Jopp Jose Joskowska Jost Josz Jovanović Jujeczka Juncewicz Jungiewicz Junker Junkiewicz
    Juraev Jurczyga Jurdeczka Jurdziak Jureczek Juretko Jurgała Jurgiewicz Jurgowiak Jurka Jurko Jusiel Juwa
    Juzak Juzala Juźwin Jäger Jówko Józak Józef Jóźko Jóźków Jóźwiuk Jąkalski Jęch Jęczalik Jęda Jędraszko
    Jędraszyk Jędrczak Jędros Jędrowiak Jędruszko Jędrzak Jędrzejkiewicz Jędrzejuk Jężak Kabacik Kabanets
    Kacak Kaczak Kaczanowicz Kaczerska Kaczmarowska Kaczmarowski Kaczoruk Kaczuga Kaczykowska Kaczykowski
    Kaflik Kaik Kaj Kajdana Kajdaniak Kajrys Kajut Kakowski Kal Kalaga Kalak Kalamat Kalas Kalchuk
    Kalczyński Kaleciak Kalek Kalich Kalis Kaliszak Kalko Kall Kallas Kalmykov Kalmykova Kalska Kalski
    Kaluta Kaluźniak Kalwa Kalwara Kalyn Kalyna Kalynych Kalęba Kamać Kamczyk Kamizela Kamocki Kampczyk
    Kampe Kanarska Kanikowska Kanikowski Kannenberg Kanoza Kansik Kantarek Kantowicz Kapelańczyk Kapelińska
    Kapeliński Kapinus Kaplińska Kaprzyk Kapustina Kaputa Kapyś Karabowicz Karachun Karamuz Karapuda
    Karasewicz Karasiuk Karatysz Karaźniewicz Karbowniczyn Karchut Karczewicz Karczmarczuk Kardasińska
    Kardela Karewicz Karim Karimova Karkosa Karkosza Karmasz Karmiłowicz Karnecka Karpienia Karpinskyi
    Karpisiewicz Karpyn Kartasińska Kartasiński Karteczka Karweta Karzełek Karło Kaseja Kasianiuk Kasianov
    Kasiian Kasiorek Kasiorkiewicz Kasiuk Kasko Kastner Kastsiuk Kasumov Kasyna Kaszczyc Kaszek Kaszlewicz
    Kaszowicz Kaszub Kateusz Kauc Kaul Kaus Kavaleuski Kavaliova Kawalerska Kawalerski Kawałkowska
    Kawałkowski Kawicka Kawicki Kazakevich Kazan Kazibut Kazimierak Kazlova Kazuła Kałabun Kałach Kałczuga
    Kałdunek Kałowska Kałowski Kaługa Kałużka Kałęcka Kałęcki Kałęka Kańczugowska Kańczugowski Kańka
    Kańkowska Kaźmieruk Kellner Kempara Kempista Kemuś Kendra Kendzia Kennedy Kepke Keplin Khachatrian
    Khalilova Khalus Kharko Kharlamova Kharytonov Khmel Khodakivska Khoroshun Khrystiuk Khrystych
    Khutsishvili Khymych Kibil Kibitlewska Kicia Kicki Kicler Kicman Kiczor Kiczyńska Kiczyński Kidacka
    Kidacki Kidyba Kiejko Kiejnich Kielesiński Kieliba Kielińska Kieliński Kieliś Kielmas Kiepiela Kierach
    Kierasińska Kierasiński Kiercul Kierdelewicz Kierepa Kierklo Kieroń Kierończyk Kierstan Kiersztan Kieryk
    Kierznowska Kierznowski Kieta Kietla Kietrys Kiewra Kiełpikowska Kiełpikowski Kieżun Kifer Kijania
    Kijanowska Kijanowski Kika Kikowska Kikowski Kikoła Kilka Kinach Kinakh Kinalska Kinalski Kinasiewicz
    Kindel Kindler Kirko Kiselov Kiss Kisza Kisło Kisłowska Kisłowski Kitrys Kittel Kiwacz Kizielewicz
    Kizyma Klabis Klabisz Klajda Klajna Klakla Klamczyńska Klamczyński Klamer Klamrowska Klamrowski Klarecka
    Klarecki Klarkowska Klarkowski Klasińska Klasiński Klassa Klauzińska Klawa Klawiter Klaś Klecka Klecki
    Klecz Kleemann Kleiber Klejbach Klekociuk Klem Klencz Klenczar Klepaczko Klepak Klepin Klepuszewska
    Klepuszewski Kleta Kletkiewicz Klewin Kliczek Kliczka Klikowicz Klimaj Klimpel Klinicka Klinicki Klius
    Klok Klonowicz Klotz Kluczkowska Klupczyńska Klupczyński Klupieć Klusiewicz Klymets Klęba Klępka Kmetyk
    Kminikowski Kmoch Kmuk Knabe Knach Knesz Knet Kneć Kniaziewicz Knigawka Kniter Knol Knoll Knutel
    Knutelski Knyba Knyziak Kobacki Koban Kobernyk Kobiałko Kobierzyńska Kobierzyński Kobla Koblak Kobylec
    Kobylianskyi Kocak Kochana Kochelak Kochowska Kochowski Kociela Kocima Kocioł Kocz Kocznur Koczura
    Koczyba Koda Kodirov Kodyra Kodź Kofin Kojtek Kojło Kok Kokieć Kokora Kokornaczyk Kokosa Kokoszyńska
    Kokowska Kokowski Koksa Koksanowicz Kolad Kolanus Kolar Kolassa Kolczak Kolecka Kolecki Kolesnykov
    Kolibaba Kolisnychenko Kolisz Kollek Kolodziej Kolosa Kolosov Kolosova Kolp Komadowski Komandera
    Komasińska Komasiński Komicz Kominiarczyk Kominkiewicz Komisarczuk Kompanets Komur Konachowicz Konarczak
    Konaszewska Konaszewski Koncka Konczalski Konczewska Konczewski Kondak Konderla Kondrashova Kondraszuk
    Kondrusik Konecko Konera Konicz Koniczek Konieczyńska Konieczyński Konikowska Koniszewska Koniszewski
    Konka Konkiel Konofalska Konofalski Konofał Kononov Konovalchuk Konowalik Konował Konrady Konsewicz
    Konstantinov Konstantinova Konstantynov Konstantynova Kopaczka Kopaniecka Kopaniecki Kopańczyk
    Kopciewicz Kopcza Kopertowski Kopia Kopieć Kopiszka Kopiś Koprucki Kopyl Kopylov Kopylova Korasiak
    Korbeń Korc Korcala Korchak Korchut Korchynska Korcyl Korczakowska Korczakowski Korczewska Korczewski
    Korczowska Korczowski Kordal Kordasiewicz Kordon Kordyla Korets Koreń Korkmaz Korlaga Korlak Kornata
    Kornatka Kornicki Kornosz Kornowicz Koronowski Korotka Korotkiewicz Korotkov Korotkova Korotusz Korościk
    Korpacz Korpus Koryciorz Korzeniewicz Korzuch Korzybska Korzybski Korzępa Koselska Koselski Koseska
    Koseski Kosheliuk Koshman Koshovyi Koshyk Kosieniak Kosiń Kosmaczewska Kosmaty Kosmela Kospin Kostaniak
    Kostarczyk Kosteczka Kosteniuk Kostiuchyk Kostrubała Kostrzak Kostrzycka Kostrzycki Kostrzębski Kosturek
    Kostyrko Kosuda Kosycarz Kosytorz Koszarska Koszarski Koszczuk Koszelak Koszelnik Koszkul Kosztowniak
    Kosztowny Koszyka Kotaba Kotarak Kotańska Koteluk Kotik Kotliarenko Kotliarova Kotlik Kotońska Kotoński
    Kotrych Kotuk Kotuniak Kotwis Kotyra Kotyła Kotyś Kovaliv Kovbasa Kovtunovych Kowalczykiewicz Kowalenko
    Kowalka Kowalke Kowejsza Kozaczyńska Kozakov Kozakova Kozaryn Kozenko Kozhan Koziana Koziełło Kozinoga
    Koziołkiewicz Koziuk Kozlowski Kozorys Kozołup Kozubik Kozynets Kozyrski Koła Kołaciak Kołbon Kołbuk
    Kołc Kołcon Kołczyk Kołkiewicz Kołoda Kołomyjska Kołomyjski Kołosiński Kołoszyc Kołpacka Kołtan
    Kołtonowska Kołtonowski Kołtuńska Kołtuński Kołucka Kołucki Kołątaj Kończyńska Kończyński Kościarz
    Kościów Koślak Kośmiński Koźlicki Koźniewski Kożuchowicz Kożyczkowska Krac Kraczka Krainyk Krajczy
    Krajczyński Krajenta Kraka Krakiewicz Kramarska Kramarski Kramska Krankowska Krankowski Krasii
    Krasnikova Krasowiak Krat Krautwurst Kravchyk Krawczenko Krawczykiewicz Krawców Krech Kreczman
    Kreczmańska Kredens Krej Krejner Krejpcio Kremiec Kremska Kremski Kriuchkova Kriukov Krogul Kromp Kroner
    Kropkowski Kropornicka Kropornicki Krotoszyńska Kruczkiewicz Kruhlyk Krukiewicz Krulikowska Krupecka
    Krupecki Krupiak Krupop Krupowies Kruszak Kruszakin Kruszko Krutko Krużycka Krużycki Kryj Krymski
    Krynytska Krynytskyi Krysmann Kryst Krystecka Krystecki Krystman Kryszczyńska Kryszczyński Krytska
    Kryvets Kryvonis Kryzel Krzaczyński Krzeczowska Krzeczowski Krzekotowska Krzekotowski Krzemieniecka
    Krzemionka Krzemkowska Krzeptoń Krzesiak Krzewniak Krzok Krzowska Krzowski Krzuś Krzyczmonik Krzysica
    Krzyształowicz Krzywiecka Krzywiecki Krzyśka Królasik Królewska Krążek Kręciwilk Krępeć Krętosz
    Krężelewska Krężelewski Krężlewicz Ksepko Książko Księżarek Ksobiech Ksok Ksybek Kubalak Kubasa Kubatek
    Kubaty Kubczyk Kubicius Kubok Kubś Kucera Kuchmistrz Kuchowicz Kuchuk Kuciara Kucik Kuczara Kuczborska
    Kuczborski Kuczmańska Kuczmański Kuczmera Kuczmierczyk Kuczok Kuczora Kuczowicz Kudelia Kuderska
    Kuderski Kudinova Kudosz Kudrewicz Kudriashova Kufera Kujałowicz Kuka Kukiel Kuklo Kuks Kukurenda
    Kukurowska Kukurudza Kukuryka Kukuś Kulakov Kulasińska Kulawinek Kulbida Kulczewska Kulczewski Kuleba
    Kulejewska Kulejewski Kulesh Kulesha Kuleszewicz Kuleszo Kulichenko Kuliczkowski Kulina Kuling Kulkowska
    Kulling Kulmaczewska Kulmaczewski Kulski Kulupa Kulwikowski Kuma Kumańska Kumański Kumek Kumela Kumoch
    Kumorowska Kumorowski Kumoś Kumur Kunaszyk Kuniec Kunytska Kunze Kupa Kupchak Kupicz Kupijaj Kupilas
    Kupras Kuraszkiewicz Kurbanova Kurcaba Kurchenko Kurczych Kurdyła Kurdyś Kurec Kurhan Kurian Kurii
    Kurinnyi Kurlanc Kurlit Kurnat Kurpan Kurpet Kurpyta Kuryj Kuryła Kurza Kurzawińska Kurzawiński
    Kusiakiewicz Kusideł Kusiołek Kusowski Kusztykiewicz Kutak Kutko Kutny Kutova Kutrowska Kutrowski
    Kutryba Kutrzepa Kutsa Kutsak Kutsyi Kutwin Kutynia Kutyłowska Kuzemczak Kuzemko Kuzenko Kuzimska
    Kuzimski Kuziorowicz Kuzko Kuzminska Kuzmuk Kuzo Kuzon Kuzub Kućka Kuźlak Kuźmik Kvasnytsia Kviatkovska
    Kvitka Kwaczała Kwarciana Kwasik Kwasiżur Kwasowiec Kwaśkiewicz Kwaśniowska Kwela Kwella Kwieciak
    Kwietniowska Kwietniowski Kwil Kwiryng Kwitowski Kwoczko Kwoska Kyrylov Kysla Kąciak Kącik Kąpińska
    Kąpiński Kąś Kęciek Kęcka Kęcki Kędracka Kędracki Kędrak Kępas Kępisty Kłaczyńska Kłaczyński Kłakowicz
    Kłakus Kłap Kłapeć Kłek Kłoskowska Kłyza Kłódka Kściuczyk Labiak Labryga Labun Labusga Labut Laby Lacek
    Lachcik Lachs Lakatos Lakota Laks Laksander Lamcha Lamenta Lamorska Lamorski Lamot Landa Landzwojczak
    Lankamer Lanuszny Lapin Lapina Laps Larionova Larisch Larsson Laser Lashchuk Lashko Laszczyńska
    Laszczyński Latarska Latarski Latasiewicz Latecka Latopolski Latoszewski Latoś Latta Laudańska Lauk
    Lauks Lauterbach Lavrov Lawenda Lawrenz Lazarev Lazareva Lazarewicz Lazariev Lazarowska Lazarowski
    Lazaruk Lazor Lazur Lebediuk Lebok Lechnio Legenza Legin Legun Lehkyi Lehr Leitgeber Lejawa Lejawka
    Lejko Lekowska Leksy Lelewska Leliwa Lembowicz Lembryk Lemek Lemiecha Lemieszka Lempert Lenckowski
    Lenczowska Lenczowski Lender Lenert Lengiewicz Leniar Lenio Leonhard Leontiev Leontieva Lepczak Lepiorz
    Lerner Lesień Leskovets Lester Leszczewicz Leszczewska Leszczewski Leszkowska Leszkowski Levandovska
    Levchyk Levi Lewak Lewartowska Lewin Lewoc Lewosz Lezner Leńczyk Leśniański Liakhova Lialiuk Liang
    Liauchuk Libelt Liberkowska Liberkowski Libich Libiszewska Licbarska Licbarski Lichorobiec Lichołat
    Lichtarska Lichtarski Liczmańska Liczmański Lider Lidke Liebiedieva Liebrecht Liegmann Lietzau Ligięza
    Lignowska Lihs Lijewska Lika Liman Limanowski Liminowicz Linard Linowiecka Lipczak Lipieta Lipowczan
    Lipowiecka Lipowiecki Lira Lisaj Lishchenko Lishchynskyi Lisica Liskowicz Lisok Lison Listek Listkiewicz
    Listos Lisztwan Litarowicz Litera Litovchenko Litwic Litwiniak Litwinko Liutyi Liwocha Liwosz Lizińczyk
    Lniak Loban Loc Lodowska Loewenau Loewnau Lofek Loik Loika Loks Lomakina Longa Lonska Loose Lopata
    Lopatiuk Lopko Losiak Lot Lotek Lotkowski Lotycz Lotz Lozenko Lozinska Lozovska Lubacz Lubaczewska
    Lubaczewski Lubarska Lubasińska Lubasiński Lubaszewski Lubawa Lubawy Lubelczyk Lubenets Luberadzka
    Luberadzki Lubiszewska Lubońska Luboński Lubrant Lubryka Lucas Luciński Ludek Ludowicz Ludwiczuk Luft
    Lukasevych Lukianchenko Lukin Lukina Lukosz Lul Lulińska Lulkiewicz Lulko Luma Lunova Lupu Luraniec
    Lusina Lutak Lutecki Lutka Lutz Luzan Lyra Lysiak Lysik Lyska Lysyk Lăcătuş Macałka Machajewski Machelak
    Machna Machnacz Machoś Machulski Maciończyk Maciuch Maciupa Maciuszko Maciuszonek Maciążka Macuk Macur
    Maczan Madecka Madecki Madeksza Madzelan Madziara Magaj Magalska Magalski Magdziarczyk Magdziorz
    Magierek Magnowska Magnowski Magnus Magnuska Magnuski Magusiak Mahmood Mahmoud Maicher Maison
    Majcherkiewicz Majdosz Majerek Majko Majkusiak Majrowska Majtka Makarczuk Makarow Makhno Makiel Makiła
    Maklakiewicz Makovii Makovskyi Makowczyńska Makowczyński Maksajda Maksalon Maksimczuk Maksimovich Maksoń
    Maksylewicz Maksymczak Maksymczuk Maksymuk Maksymów Makuchowski Makukh Malada Malai Malajka Malatyńska
    Malatyński Malc Malczyńska Malczyński Malejki Malejko Maleńczuk Maliborska Maliborski Maliniak
    Malinkiewicz Maliszczak Maliszkiewicz Malita Malottki Malovanyi Mamai Mamełka Mamiak Mammadli Mamroł
    Mamys Man Manda Mandecka Mandecki Mandok Mandzii Manecka Manek Manios Maniszewska Maniuk Manteufel
    Manthey Mantyk Manuszewski Manzhos Manziuk Marchaj Marchanka Marchelek Marchewczyk Marcola Marczenia
    Marczenko Mardosz Mardoń Mareczko Margalski Margaryan Margiela Marianowska Marinov Markefka Markiefka
    Markin Markina Markisz Markocka Markovets Markovskyi Markwart Markwat Marków Marońska Maroński Marshall
    Marsula Marszelewska Martela Martini Martsyniuk Martusewicz Martynets Martyniv Martynovych Martynyuk
    Marunchak Marunowska Marunowski Marusa Marusiński Marx Maryniarczyk Maryszczak Marzewska Marzewski
    Marzoch Masajada Mashtaler Masierak Masina Maskiewicz Maslak Maslovska Maslovskyi Mason Masoń Massalska
    Massalski Mastalerczuk Mastalerczyk Mastek Maszke Masztafiak Masłocha Mataczyńska Mataj Mataśka Matei
    Matejkowska Matejkowski Materny Mateuszczyk Mateuszuk Matiaszek Matiichuk Matkovska Matlas Matros
    Matskevych Matulis Matusevich Matusevych Matwijów Matyba Matyl Matyska Matysko Matyszczuk Matyszok
    Matyśniak Matłacz Mauer Maury Maza Mazalon Maziar Mazowiecka Mazowiecki Mazuchowska Mazurewicz Mazuro
    Maćkała Małachowicz Małagocka Małagocki Małagowska Małaszewicz Małczuk Małetka Małgorzaciak Małgorzewicz
    Małko Małyga Mańczuk Mańkus Mańkut Maślankowska Maślankowski Maślarz Maśluk Maśnik Maź Maźniak Mażewski
    Mecner Medak Medianyk Medvedchuk Medvediuk Medygrał Medynskyi Mekhtiev Melanowicz Melcher Melson Mencfel
    Mende Mendela Mendelewski Mendygrał Menet Mensfeld Mentek Merena Merezhko Merkulov Merska Merski Mertens
    Mertin Meryk Metyk Metz Metzger Mełgieś Mglej Mia Miazgowicz Mic Michalczyszyn Michalecka Michalecki
    Michałczyk Michcik Michnal Michnicka Michnicki Michor Michota Miciuk Micińska Miciński Micka Micuda
    Miczko Midak Mider Midro Miduch Midzio Mieczyńska Miela Mielańczuk Mielcarzewicz Mielniczyn Mieloszyk
    Mienkina Mierczak Mierniczek Miernikiewicz Miesiączek Mieszczyńska Mieszczyński Mieszek Mieszkalska
    Mieszkalski Migawa Migo Migowska Migowski Mihai Mikava Miketa Mikielska Mikielski Mikinka Miklasz
    Miklewicz Miklus Mikołajun Mikuć Mikułko Mikła Mikłosz Milanowicz Milczyńska Milecka Milecki Mileszko
    Militowska Militowski Minchenko Minchuk Miniak Minior Miniszewska Miniszewski Miodowska Miodowski
    Mioduchowska Mioduchowski Miotła Mira Miranowicz Mirczak Miroś Mirys Misarko Mishyn Mishyna Misielak
    Misik Misiniec Misiurska Misiurski Mistrzyk Miszczyńska Miszczyński Mita Mitchell Mitkowska Mitrowska
    Mitrowski Miturska Mizerna Miziuk Miąc Miąso Mićko Mięgoć Mięsiak Mięsowicz Miłak Miłuch Mińczuk Mińko
    Mińkowska Mińkowski Mlonka Mocanu Mochalski Mochel Mocko Moczkowska Moczkowski Moczulak Moczydlak
    Modelewska Modelewski Modzelan Mogilnicki Moiseieva Mojecki Mojski Mojsym Mojzyk Mokijewska Mokijewski
    Mokrzan Molesztak Molin Molo Momont Monach Monastyrski Monczak Montowska Morar Morari Moras Morawiecka
    Morawiecki Morawietz Mordon Mordyl Morgiel Moric Morkowska Morkowski Moroch Morozow Morończyk Morska
    Morski Morszczyzna Morton Moruś Moryś Morze Morzyc Motek Motulewicz Motylewicz Mowczan Mozoła Moćkun
    Mośko Moździoch Mrachacz Mreńca Mrochen Mroczkiewicz Mroncz Mrozkowiak Mrożkiewicz Mruklik Mrukwa
    Mstowska Mstowski Muchla Muchowicz Mudry Mudyna Mujta Mularczuk Mulewska Mulewski Mundzik Muracki
    Muradyan Murak Murashko Muratov Muravskyi Murjas Murlak Murmyło Murray Murzydło Murzyńska Mus Musiej
    Musiejuk Musiichuk Musur Muszczak Muszel Muszelik Muszka Musztyfaga Muzalewska Muzychka Muzykiewicz
    Muśko Mużyło Mych Mycio Myczkowska Myczkowski Myhovych Mykolaienko Mynarek Myrhorodska Myrlak Myrna
    Myshchyshyn Myshko Mysiewicz Mysiorek Mysona Mysyk Myszczyszyn Myszczyńska Myszczyński Myszke Myszyńska
    Myszyński Mytkowski Mytrofanova Mytrovych Mytsak Myłek Myślisz Mójta Mówka Möller Mądel Mądrala
    Mądraszek Mądzik Mąkol Mędoń Mędrecka Mędrecki Mędryk Mędyk Mętlewicz Mężykowska Młodziejewska
    Młotkiewicz Młynkowiak Nabielec Nabożna Naczas Naczke Nadachewicz Nadarzyńska Nadarzyński Nadstawny
    Nadulska Nadulski Nadworna Nadworny Nagajek Nagięć Nagoda Nagła Nahirniak Najdzion Nalaskowska Naleśnik
    Należyta Nalik Naliwajko Namazov Namiel Nanowska Nanowski Napierajczyk Naplocha Narbut Narbutowicz
    Narejko Narojek Nasierowska Nasierowski Naskrent Nastała Nasuta Naszkiewicz Natkowska Natkowski Natora
    Nauka Naumets Navitski Nawa Nawacka Nawacki Nawała Nazarek Nazarevych Ncube Nec Neczaj Nehoda Nekrasov
    Nepelska Nepelski Nerlo Nesterak Neter Netkowska Netreba Neupane Nevmerzhytskyi Neścior Nicer Nicia
    Niczke Nidzgorska Nidzgorski Nieborek Niebrzegowska Niebrzegowski Niedbalec Niedbałka Niedzielko
    Niedzińska Niedźwiedzińska Niedźwiedziński Niegel Niekłań Nielaba Nielipińska Niemasik Niemaszyk
    Niemczynowicz Niemczyński Niemirka Nierada Niesler Niespodziany Niestatek Niestój Niesyt Nietopiel
    Niewelt Niewidok Niewiem Niewolik Nieznaj Nieścierowicz Nieściór Nieśmiałek Nijaki Nika Nikiciuk
    Nikiforov Nikliborc Nikodemski Nikoliuk Nikończuk Nimets Nir Niśkiewicz Nogacka Nogacki Nogawka Noglik
    Noha Nolka Noparlik Noremberg Norkowska Nosach Noskowiak Nosov Nosyk Novikava Novruzov Novyk Nowaliński
    Nowikow Nowikowska Nowikowski Nowodworska Nowomiejska Nowomiejski Nowosiński Nowotko Nowoświat Nozadze
    Nożewska Nożewski Nychyporchuk Nyckowska Nykolaichuk Nykolyshyn Nykonenko Nyks Nykytenko Nęcek Nędzka
    O'Brien O'Neill Obel Ober Obielak Obojska Obojski Obora Obrocka Obrocki Obuch Obyrtacz Ochel Ochenduszko
    Ochnicka Ochotny Oczachowska Oczachowski Oczak Oczeretko Ocłoń Odolińska Odoliński Odor Odważna Odyjas
    Odój Ogorzelska Ogrodniczek Ogrodzińska Ogrodziński Ogórkis Ogłuszka Ojrzanowski Okas Okaz Okolus
    Okołotowicz Okroy Okrągły Oksentiuk Okulicz Okun Okólska Okólski Olasik Olbromska Olbromski Olchawska
    Olchawski Olchówka Olczykowska Olejarka Olejarnik Olejarska Olejek Olejnicki Oleksiv Olekszyk Oleniak
    Olenkiewicz Olenych Oleszkowicz Oleńczuk Oleńska Oleński Olichwiruk Oliiarnyk Olipra Oliszewska
    Olizarowicz Olk Olkhovyk Olkusz Olobry Olsen Olshevska Olsson Olszewicz Olter Omernik Onaszkiewicz
    Onderka Oniszko Onopa Onufriienko Onyshko Oparcik Opaska Opałko Opielka Opitz Opiłowski Opuchlik Opydo
    Oracki Orchel Orciuch Ordyniak Ordyniec Ordys Orkiszewska Orkiszewski Orkwiszewska Orkwiszewski Orlak
    Orlewicz Orligóra Orlon Orlyk Ormińska Ormiński Ornatowska Ornatowski Orska Orski Oryshchuk Oryńczak
    Orzepowska Orzepowski Orzyłowska Orzyłowski Oręziak Orłow Orłów Osaulenko Osemlak Osenkowska Osenkowski
    Oses Osełka Osiejuk Osiichuk Osikowicz Osikowska Osikowski Osiowy Oskierko Osmelak Osmola Osmoła Osmęda
    Osowicka Osowicki Osowicz Osowiec Ostachowska Ostachowski Ostafińska Ostafiński Ostanek Ostap Ostapiv
    Ostapińska Ostański Ostenda Ostroga Ostropolska Ostropolski Ostrycharczyk Ostój Osyda Osyka Osypova Osys
    Osysko Oszal Oszczak Oszkiel Oszmaniec Osękowska Osękowski Otlik Otoliński Otorowska Otorowski Otwiaska
    Ovcharova Ovsiannikova Ozdarska Ozdarski Oziewicz Ozimińska Ozimiński Ozimkowska Ozimkowski Oziomek
    Ozorowska Ozorowski Ołdziej Ołowiak Ołtuszyk Ośródka Ożdżyńska Ożdżyński Pabianek Pabiasz Pachana Pacho
    Paciejewska Pacierz Pacioch Paciuch Pactwa Paczocha Paczwa Padjasek Paduszyńska Paduszyński Paech Paga
    Pagórek Pajdosz Pajdowska Pajdowski Pajurek Palahniuk Palar Palenica Palian Palianytsia Paliczka Palider
    Paliienko Palion Palko Palm Palowska Palowski Palt Paluszyńska Paluszyński Panasik Panchyrz Panecka
    Panecki Paniczko Panin Panina Pankov Papier Papierniak Papina Papiór Papoń Paprot Parafianowicz Paras
    Parashchak Parchomiuk Parczyk Parczyńska Parczyński Pardel Parecka Parfieńczyk Paris Pariyar Parmar
    Parobczy Parszyk Partacz Parteka Paruszkiewicz Parzoch Parzuchowski Parzymies Parzysz Parzyńska
    Parzyński Pashkov Pashkova Pashkovska Pashynska Pasiek Pasierbiewicz Pasierbska Pasierbski Pasierowska
    Pasierowski Pasiowiec Paskuda Pasowicz Pasternok Pastewka Pastewska Pastewski Pastok Pastukhova
    Pastuszuk Paszczak Paszka Paszkiel Paszt Paszyn Patała Patecki Patera Patil Patocka Patocki Patryarcha
    Patryas Patucha Paturaj Patyńska Patyński Paudel Paulouski Pauter Pavlyuk Pawełczuk Pawicka Pawicki
    Pawlarczyk Pawlewska Pawliczuk Pawluch Pawlusek Pawlusiak Pawlęga Pawłasek Pawłow Pazdyk Paziak Pazniak
    Pałacha Pałczak Pałkiewicz Pałubiński Pałubska Pałubski Pałuska Pałysa Paśniewska Paśniewski Październy
    Paździerska Paździerski Peca Pecold Peczyński Peikert Peisert Pejka Pejs Pejska Pejski Pekar Pekh Pel
    Pelic Peliński Pelon Pels Penc Pendrak Pendzich Peplinska Peplinski Perchel Perchuć Perdion Perdjon
    Perduta Pereira Perekhrest Peresada Peresunko Perlikowska Perlikowski Permus Perończyk Persak Perucka
    Perucki Perykasza Peszyńska Peszyński Petelczyc Petelicka Peterek Peterman Peterson Petko Petrosian
    Petruniak Petrushenko Petrzak Petukhova Petyniak Pełdiak Pełechaty Pełkowska Pfajfer Philipp Piasna
    Piatrovich Pichla Pichura Pick Picur Pidhorna Pidhornyi Pidlisna Pidlisnyi Pidopryhora Piechaczyk
    Piechel Piechulek Piechulska Piechut Pieciul Piecko Pieczul Pieda Piejdak Piejek Piekar Piekaruś
    Piekielna Piekielnik Pieklak Piekoszewska Piekoszewski Piekuś Pielacha Pielarz Pielecha Pielichowska
    Pielichowski Pielot Pieluszczak Piepiora Pieprzowska Pieprzowski Pieprzycki Piergies Pierlak Pierożek
    Pierzynka Piesak Pieszka Pietrakowska Pietrakowski Pietranek Pietranis Pietraszczyk Pietroczuk
    Pietroszek Pietrusik Pietryk Pietryszyn Pietsch Pietz Pieńczak Pieścik Pigiel Pigulska Pigulski Pihan
    Pijar Pikała Pikh Pikiel Pikiewicz Pikron Pikulińska Pikuliński Pikura Pilimon Pilkiewicz Piluś
    Pinczewska Pinczewski Pindelska Pindelski Pindych Pintara Piochacz Piorunowska Piotrkiewicz Piowczyk
    Pipa Piputa Piras Piros Pisarewicz Pistelok Piszczór Pitlok Pitra Pitsyk Piwczyk Piwecka Piwecki
    Piwkowska Piwkowski Piwoń Pizon Pizun Piątak Piątczak Piędzio Piękna Piękosz Piętek Piłaszewicz
    Piłatowska Piłatowski Piłkowski Piśko Plaskacz Platonov Platonova Plawgo Plażuk Plebańczyk Plekaniec
    Ples Pleskach Plewczyńska Plicha Plisak Pliszczyńska Pliszczyński Pliuta Plombon Pluszczyk Plutka Pluto
    Pląskowska Plęs Poberezhnyk Poborca Poborczyk Poborska Poborski Pobożniak Poboży Pobuta Pochwat Pochynok
    Poczekaj Pocztarek Pocztowska Pocztowski Poczynek Podczaski Podejma Podgórzak Podhajny Podhajska
    Podkowska Podkościelna Podolecki Podsędek Podurgiel Podziewska Podziewski Podębska Podębski Poghosyan
    Pogorzała Pogorzałek Pogorzały Pogorzelczyk Pogroszewska Pogroszewski Pogudz Pohnke Pohorielov Pohribna
    Pokojowczyk Pokrop Pokrzywniak Polachowski Polaczkiewicz Polan Polanek Polaniak Polaszewska Polaszewski
    Polechońska Polechoński Poletyło Polewacz Polichnowska Polikowska Polikowski Polivoda Polk Polka
    Pomierska Pomierski Pompka Poncyliusz Poniewiera Ponińska Poniński Poniży Ponomar Ponomarchuk Pontus
    Popadynets Popecka Popecki Popel Popiak Popielewska Popielnicka Popielnicki Popiuk Popowczak Poppe
    Poprawka Poproch Popęda Popłoński Poradowska Porazińska Poraziński Porczek Porembska Porembski Porosło
    Portas Porydzaj Porębiak Poseł Posiłek Pospieszyńska Pospieszyński Pospiszył Pospychała Posternak
    Postrożna Postój Potentas Poteraj Poteralski Potiopa Potręć Poturalska Poturalski Potysz Poudel
    Powchowicz Pozdniakov Poziomek Poznaniak Poznań Poćwiardowski Połacik Połaska Połosak Połuch Pośniak
    Pracoń Pracuch Praczuk Pradelok Pradun Praga Prajsner Prakapovich Pranczke Prasałek Praszkiewicz Predel
    Prendota Price Prinz Procak Prochaska Prociak Proczka Projs Prokhorchuk Prokhorov Prokofieva Pron
    Pronina Proske Proszkiewicz Proszkowiec Protaś Protsko Prościak Prościńska Prościński Prośniewski Pruban
    Prudel Prudlik Prusakowska Prusakowski Prusicka Prusicki Pruszczyk Prylutska Pryma Prymka Pryputniewicz
    Prysiazhnyi Prytuliak Pryzmont Przanowska Przanowski Przebięda Przecherka Przechrzta Przedlacki
    Przegendza Przekopowicz Przeorek Przesławska Przesławski Przetakiewicz Przewrocki Prześlica Prześniak
    Przybecka Przybecki Przybytniak Przychocka Przychocki Przychodna Przychodny Przygodzińska Przygodziński
    Przygoński Przykaza Przylepa Przynoga Przypis Przysiecka Przysiecki Przystalski Przystańska Przystański
    Przystup Przysło Przywoźna Przyłuska Przyłuski Przyłęcka Przyłęcki Przyżycka Prószyński Prętkiewicz
    Prętkowska Psik Pstrong Pstrucha Pszenny Pszon Ptashnyk Ptasik Ptaszyk Pucher Puchlik Puciato Pucuła
    Puczkowska Puczkowski Pudelska Pudysz Pudzisz Pufal Pugacewicz Pukacka Pulińska Pulnar Punda Punko Pupel
    Pupko Pusiak Puskarz Pustkowska Pustkowski Pustova Puszkarek Puszkarska Puszkarz Puta Putkaradze Putyło
    Puz Puzan Puzyniak Puścizna Puślecka Puślecki Pużuk Pycek Pyciński Pylypets Pyrchała Pyrozhenko Pyrzyna
    Pyshniak Pyska Pyskaty Pysmenna Pysno Pyszko Pyszkowska Pyt Pytlakowski Pyvovarova Pyzowska Pyzowski
    Pyła Pyłka Pyłko Pyź Półgęsek Półtoraczyk Pąsiek Pęcherczyk Pęcherek Pęcherska Pęcherski Pęcikiewicz
    Pędrys Pękacka Pękacki Pękal Pękosz Pęsiek Pęska Pęski Płachcińska Płachciński Płaskocińska Płaskoń
    Płaszczyca Płaszczyńska Płaszczyński Pławińska Płaziński Płeszka Płocharz Płociński Płodzik Płonowska
    Płonowski Płosa Płotkowski Płotnicka Płócieniczak Płóciniak Qiu Rabczewska Rabe Rabiak Rabij Rabiniak
    Rabiński Rac Raca Racewicz Rachowicz Rackiewicz Raczyło Racławska Racławski Rad Radaszewska Radaszewski
    Radel Radelczuk Radiuk Radkevych Radkowiak Radlica Radomiak Radomińska Radomiński Raducka Radziejowska
    Radziemska Radziemski Rafało Rahimov Railean Rajabov Rajfur Rajnik Rajtak Rakhmonov Ralko Ramanchuk
    Rambiert Ramczykowska Ramczykowski Ramenda Ramuś Randak Randzio Rapciak Rapczyńska Rapczyński Rapkiewicz
    Rapta Rarak Rarok Rashid Rasiewicz Rasmussen Rasz Raszczuk Raszyk Ratoń Ratushna Ratushnyi Rauchut
    Raulin Rausz Ravliuk Rawinis Rawińska Rawiński Rech Recka Recki Reczka Reczkowska Reczkowski Redek Redes
    Redman Reducha Regucki Reichelt Reiman Reimer Reinhardt Reinhold Reinholz Rejch Rejer Rejs Reksa Rekuć
    Rembalska Rembarz Remian Remin Remiorz Remisiewicz Remplewicz Renc Renda Reniewicz Renn Repa Repeta
    Repetowska Repetowski Repka Reroń Reshetnyk Restel Reszkiewicz Retel Reterska Reterski Reuter Reutt
    Revutska Rewak Rewerska Rewińska Rewucki Rezulak Riabenko Riabets Riaboshapka Richards Richardson Rietz
    Rigga Robaczyńska Robaczyński Robaszyńska Robota Rochalska Rochalski Rochewicz Rochmińska Rochon
    Rochowska Rochowski Roczyna Rodionov Rodionova Rodzaj Rodzoń Rogacewicz Rogalka Rogers Rogocz Rogoda
    Roguszewska Roguszewski Rogólska Rogólski Rohach Rohovska Rohraff Roi Roiko Rojecka Rojecki Rojkowska
    Rojowska Rojowski Rokicińska Rokiciński Rokitka Rolik Roloff Romak Romano Romanyuk Romaszewska
    Romatowska Romatowski Romińska Romuzga Ronduda Ronkowski Ropa Ropek Ropka Ros Rosadzińska Rosenthal
    Rosiecka Rosiecki Rosiejka Rosin Rosolski Rospara Rostalska Rostankowska Rostankowski Rostas Rostecka
    Rostecki Roszczyniała Roszczypała Rosłońska Rosłoński Rotman Rozalska Rozalski Rozenfeld Rozenkiewicz
    Rozesłaniec Rozhkov Rozińska Rozkocha Rozkrut Rozmarynowicz Rozpędzik Rozwandowicz Roćko Rońda
    Rościszewska Rościszewski Rożenek Rożkowicz Rożniatowska Rożniatowski Rożyńska Rożyński Rubajczyk
    Rubaszewska Ruczaj Ruczkowska Ruczkowski Rudakova Rudchenko Rudchyk Rudna Rudziak Rujner Ruks Rulewska
    Rumas Rumianowska Rumianowski Rumiantseva Rupacz Rusakiewicz Rusakova Rusanova Rushchak Rusiak Rusjan
    Ruskowiak Rusowicz Rusoń Russell Ruszewska Ruszewski Ruzhytska Ruśniok Rybakova Rybaniec Rybarkiewicz
    Rybol Rybowicz Rycerska Rycerski Ryciuk Ryduchowska Ryduchowski Rygalik Rygalska Rygalski Rygas Rygała
    Rygoł Ryjak Rylewicz Ryll Rymanowski Rymarczuk Rypuła Ryrych Rysińska Rysiński Ryter Rytka Rywacka
    Ryzhkov Ryzhova Ryzińska Ryziński Ryć Ryśkiewicz Ryśnik Ryżewska Ryżewski Ryżko Rzanny Rzegocka Rzegocki
    Rzemieniecka Rzemieniecki Rzemyk Rzepiak Rzepnicka Rzepnicki Rzepnikowska Rzeppa Rzepska Rzodeczko
    Rzychoń Rzyman Rzymkowska Rzymkowski Rzymyszkiewicz Rzysko Rzędzian Różanek Różanowska Różanowski
    Różnowicz Różowicz Różyczka Różyk Rąb Rąba Rębas Ręczkowska Ręczkowski Ręcławowicz Rędaszka Rędzikowska
    Rędzikowski Rędzina Rędzińska Rędziński Rękawiecka Rękawiecki Rękawik Sabadasz Sabok Sacharewicz Sachko
    Sadaj Sadanowicz Sadlok Sadokierska Sadouski Sadzikowski Sadłek Safader Sahakyan Said Saini Sajan
    Sajecka Sajek Sajnog Sakalouski Sakiewicz Sakovich Sakrajda Sakson Saktura Sakwerda Salamakha Salasa
    Salavei Saleta Salewska Sali Salmanowicz Saltarski Salus Salwiczek Salwowska Salwowski Sambora
    Samborskyi Samburska Samburski Samelak Samiczak Samluk Sammler Samofal Samojeden Samojło Samojłowicz
    Samorajczyk Samoszuk Samsonov Samsonova Samulewska Samulewski Sandach Sanik Sanin Sanina Saniuk Sap
    Sapalska Sapalski Sapieha Sapielak Sapok Sapor Sapun Sara Saracyn Sarakhman Saranchuk Sarecki Sareło
    Sari Sarkar Sarnowicz Sarwiński Sarzyniak Sasińska Sasiński Sasuła Sater Satsiuk Sauchanka Sauko Savich
    Savluk Sawaryn Sawczenko Sawczyk Sawczyszyn Sazon Sałacka Sałacki Sałagan Sałapat Sałapata Sałasińska
    Sałdan Sałkiewicz Scharmach Schauer Scheffs Schmelter Schrőder Schumann Schwichtenberg Sebesta Segda
    Segieta Segin Sej Sekh Sekieta Sekrecka Sekrecki Sekret Sekreta Sekutowicz Sela Selin Selivanova Semba
    Semianiuk Semków Senchenko Senderak Senderska Senderski Sendrowski Sendyk Senenko Seo Sepko Serbina
    Serdyńska Serdyński Seredenko Serheiev Serwaczak Serwiak Serówka Setlik Setnik Severin Sewastianowicz
    Sewerynek Sewioło Seyda Seńków Shaban Shabanov Shabanova Shadura Shahzad Shakh Shakhova Shakhrai Shapira
    Shaposhnyk Sharova Shauchenka Shauchuk Shaw Shcherbina Shchyrba Sheikh Shen Shershen Shevel Shkarupa
    Shkliaruk Shkolna Shkribliak Shkurenko Shonia Shot Shtohryn Shulga Shuliar Shum Shumik Shumskyi Shust
    Shvab Shvaiko Shvetsova Shvydkyi Shylov Shylova Shymchuk Shymkiv Shynkar Shysh Shyshkin Siadaczka
    Siadkowska Sibielak Sibila Siciarek Sidarovich Sidełko Sidorek Sidorko Sidun Sidyk Siebyła Sieczkoś
    Siedlanowska Siedlec Siedlok Siejk Siekierzyńska Siekierzyński Sielecka Sielecki Siemasz Siemczuk
    Siemczyk Siemieniuch Siemieńska Sienkowska Sienkowski Siepietowska Siepietowski Sieraj Siergiejuk
    Sierhej Sierko Sierosławska Sierosławski Sierotowicz Sierova Sierpniak Sierpowski Sierszuła Sierszyńska
    Sieruga Sierzchuła Sieńczyk Silchenko Silva Silwanowicz Sima Simchuk Siminiak Simkiewicz Simonov
    Simonova Simonyan Simpson Siniecka Siniło Sinka Sinko Sioch Sioda Siodlaczek Sionko Sionkowska Siporska
    Siporski Siroshtan Sitchinava Sitnicka Siudaj Siudeja Siudem Siudmak Siudowska Siupa Siupik Siupka
    Siuśta Siwiecki Siwierska Siwierski Siódmak Sięka Siłkowska Siłkowski Sińczak Skalmierska Skalmierski
    Skarżycki Skatuła Skałba Skaźnik Skibiak Skinderowicz Skipirzepa Skirzyńska Skirzyński Skliarov Skocka
    Skocki Skoczke Skoczypiec Skolarczyk Skomska Skorodzień Skorowska Skorowski Skorulska Skorulski Skorut
    Skotarska Skotarski Skotnik Skowerski Skołuda Skrabania Skrajda Skrajna Skrajny Skreczko Skrobarczyk
    Skrobas Skrobańska Skrobański Skrońska Skrynnyk Skrypchenko Skrypko Skrzekut Skrzyniecki Skrzypiciel
    Skrzyszewska Skubek Skucińska Skuciński Skupnik Skuratowicz Skurczyńska Skurka Skurtys Skurzewska
    Skurzewski Skórcz Skórnóg Składan Składnik Składzień Slipets Slyva Smaczny Smagło Smaha Smahliuk Smajda
    Smakowska Smakowski Smaluch Smaroń Smarzyńska Smarzyński Smereczyńska Smereczyński Smirnou Smoczek Smola
    Smolarkiewicz Smoliarchuk Smolicz Smoluch Smosarska Smosarski Smul Smulczyk Smurzyński Smutniak Smuła
    Smól Smółko Smęder Smęt Snopczyńska Snopczyński Sobaszkiewicz Sobań Sobchenko Sobich Sobieniak
    Sobieszkoda Sobińska Sobiński Soboliev Soborak Sobotkiewicz Sobotta Sobowiec Sobstel Sobula Sobuta Sobuń
    Sochacz Sochalska Soczawa Sofińska Sofiński Soika Soiński Soj Sokil Sokolska Sokolyk Sokowicz Sokyrko
    Soldatke Soliar Soliman Solod Solodkyi Solodukha Solokha Solomka Solorz Soloshenko Solovii Solowski
    Solpa Son Songin Sonnek Sontag Sopoćko Soppa Sordon Sorota Sosnovskyi Sosnowy Soswa Sota Sotkiewicz
    Sotomska Sotomski Sozoniuk Sołkiewicz Sołowianiuk Sołowińska Sołowiński Sołtykiewicz Sołtyszewska
    Spalińska Spaliński Spanier Sparzak Spasiuk Specjał Spek Spichalska Spiechowicz Spiesz Spisz Spociński
    Spojda Sporna Sporys Sprancel Spratek Sprot Sprutta Spólna Spólny Spętana Spętany Srebrny Srogosz
    Sroślak Stabik Stachelska Stacherska Stacherski Stachnio Stachulec Stadnichenko Stafińska Stafiński
    Stahl Stajkowska Stajkowski Stajno Stajszczyk Stajuda Stalińska Staliński Stamm Standio Standziak
    Stangel Stanienda Stanioch Stanosz Stanoszek Stapińska Stapiński Staranowicz Starczyńska Starczyński
    Starikova Starko Starkowska Starkowski Starostenko Starsiak Staruszkiewicz Starybrat Staryk Starzecka
    Starzecki Starzomska Starzomski Starzyczny Stasch Stashko Stasiaczek Stasicka Stasiewski Stasikowska
    Stasikowski Stasiłowicz Staszkowian Stateczna Statnik Statsenko Staudt Stawiana Stawiska Stawiski
    Stawujak Stańczykowski Stebnicka Stebnicki Stech Stechnij Steciak Steczkowska Steczkowski Stefaniec
    Stefanov Stefek Steffen Stegienko Stegienta Stelmachowska Stelmachowski Stempińska Stempiński
    Stemplowska Stemplowski Stendera Stepa Stepchuk Stepczuk Stepka Stepuch Stepura Stereńczak Stich Stieler
    Stiler Stobierska Stochla Stochmiałek Stochła Stodółkiewicz Stogowska Stogowski Stoianova Stoiko
    Stojecka Stojecki Stokwisz Stoliarenko Stoliarova Stonio Stoparek Stoppel Stoszko Strabel Strachowska
    Straszyńska Straszyński Strauch Strauchmann Strawiński Straś Straż Strecker Stroisz Strojec Strojecka
    Strok Strona Strugalska Strugalski Strugińska Strugiński Strumnik Strupczewska Strutyńska Strutyński
    Strużyk Stryj Stryjska Stryjski Strzebońska Strzeboński Strzeduła Strzelak Strzemiński Strzempek
    Strześniewska Strześniewski Strzeżysz Strzodka Strzębała Strzęp Strzępa Stróżniak Stróżyna Strąkowska
    Stube Stuchły Studenny Studniak Studziżba Stukalo Stulgis Stupka Stychno Styczek Styczyrz Styrc Stysz
    Stęclik Stępczak Stępniewicz Stępniowska Stępniowski Stępska Stępski Su Subczyńska Subik Subotowicz
    Suchanecka Suchanecki Suchanowski Suchorowska Suchorowski Suchowska Suchowski Suchożebrska Suchożebrski
    Suchwałko Sudra Sufleta Sujdak Sukha Sukhanova Sukhar Sukhenko Sukhomlyn Sukta Sulak Suligowska
    Suligowski Sulska Sulski Sumisławska Sumiła Sumka Sunar Suplicka Suplicki Supranowicz Supronik Suproń
    Suprunenko Suprynowicz Surawska Surel Surkont Surmańska Surmański Surosz Suruło Surynt Suseł Suskiewicz
    Suszycka Suszycki Suty Sutyła Suwada Suwart Suwiczak Sułowicz Suśniak Svensson Sviderska Svintsitska
    Svitlychnyi Svyrydova Svyshch Swachta Swarbuła Swałtek Swierzy Sworczuk Sworst Sydow Syed Sygidus Sygiet
    Sygulska Sygulski Sylla Sylwanowicz Sylwestrowicz Symela Synenko Syniak Syniavska Syniavskyi Synyshyn
    Sypion Syrnik Syrotenko Syryca Syryjczyk Sysik Sysio Sysoieva Sywak Syzdół Szabela Szablicka Szablowska
    Szablowski Szabrańska Szabunia Szabó Szachewicz Szacik Szaciłło Szade Szado Szadurska Szadurski
    Szafarska Szafarski Szafaryn Szafert Szafirowicz Szafirska Szajstek Szalczyk Szalla Szalony Szamborska
    Szapował Szarafiński Szarawara Szarecka Szarecki Szarf Szargut Szarowska Szarowski Szarłata Szaszkiewicz
    Szataniak Szatka Szatkiewicz Szauer Szawiel Szałamacha Szałowski Szałwińska Szałwiński Szałyga
    Szczeponek Szczepura Szczepuła Szczerbaty Szczerbetka Szczerbuk Szczoczarz Szczotkowska Szczotkowski
    Szczukocki Szczutowska Szczutowski Szczybyło Szczyglewska Szczyglewski Szczygło Szczyra Szebesta Szega
    Szejda Szejka Szekalski Szelwach Szemiel Szempruch Szendel Szendzielarz Szepelak Szeremet Szewczul
    Szewców Szewera Szewerda Szewerniak Szewko Szełemej Szkamruk Szkatulska Szkatulski Szkiela Szkliniarz
    Szklorz Szkolnicka Szkolnicki Szkolnik Szkorupa Szkuat Szkudlarska Szkudlarski Szlachcikowska
    Szlachcikowski Szlachtowicz Szlama Szlejter Szleper Szlichta Szlosarczyk Szloser Szmatloch Szmeichel
    Szmiel Szmigiero Szmitka Szmitko Szmolke Sznel Szner Szoblik Szociński Szokaluk Szol Szopiak Szoplik
    Szorcz Szorek Szornak Szoska Szotkiewicz Szpałek Szpera Szperka Szperlik Szperna Szpilewska Szpilewski
    Szpojda Szpotowicz Szpruta Szpulak Szpurka Szpytko Szraga Szrajer Szramek Szramke Szrom Sztachelska
    Sztachelski Sztajer Sztandarska Sztandarski Sztejka Sztejter Szteliga Sztendel Sztolcman Sztompka
    Sztucka Sztucki Sztul Sztur Sztych Szubarga Szubartowska Szubartowski Szuberska Szubra Szubrycht Szuca
    Szuda Szudera Szufrajda Szukiel Szukiełowicz Szulakiewicz Szular Szulżycka Szulżycki Szuma Szumczyk
    Szumiel Szumierz Szumigała Szur Szurma Szurmak Szurman Szuryga Szust Szutkiewicz Szutta Szućko Szwabe
    Szwaczyk Szwagiel Szwagrzak Szwajkosz Szwal Szwalec Szwan Szwankowska Szwankowski Szwaracka Szwaracki
    Szwarczewski Szwarczyńska Szwarczyński Szwat Szweblik Szwechłowicz Szwedowicz Szwedziak Szwedzik
    Szwedziński Szwonder Szybowicz Szychulska Szychulski Szydzik Szyfer Szyluk Szymaczek Szyman Szymanski
    Szymaś Szymczycha Szymla Szymlet Szymona Szymorek Szymoszek Szymończyk Szymońska Szymoński Szyndlarewicz
    Szynszecka Szynwelska Szynwelski Szypcio Szypowska Szypowski Szypszak Szyra Szyrszeń Szysiak Szyłko
    Szóstka Sząszor Szłyk Sądaj Sądowska Sągała Sąpór Sęczyk Sędrowicz Sędzikowska Sędzikowski Sękala
    Sękulska Sękulski Sępioł Sępka Słabisz Słabińska Słabiński Sładkowska Sładkowski Sławeta Sławkowska
    Sławkowski Sławniak Słocki Słodowa Słodowska Słodowski Słomowicz Słoninka Słoniowska Słowak Słowy Słubik
    Słuja Słupczewska Słupczyńska Słupczyński Służalec Służewska Służewski Słyż Tabaczek Tabaczka Tabała
    Taboła Taczkowska Taczkowski Tadajewska Tafel Tajduś Talarska Talarski Taler Tamm Tanistra Tankiewicz
    Tantsiura Tara Tarabura Taranets Taraniuk Taranova Taranta Taraszewska Taraszewski Tarazewicz Targos
    Tarnopolska Tarwacka Tasarek Tataj Tatarata Tatarewicz Tatoj Tałach Tałajczyk Tcaci Tchorzewska
    Tchorzewski Tecmer Teister Telakowiec Telec Telecki Telicki Telęga Tendaj Teneta Teodorowska Teodorowski
    Terczyński Terejko Terekhov Terentiev Terentieva Tereshko Termena Terzi Teteruk Tetkowska Tetkowski
    Tetla Tews Teśluk Thrun Tichoniuk Tiwari Tkaczenko Tkaczewska Tkaczewski Tobias Tobiś Tobojka Tobolik
    Toborowicz Tobór Tochman Todorova Todryk Tofan Tofel Tokariev Tokarieva Toll Tolmachov Tolochko Tom
    Tomaniak Tomashchuk Tomczok Tomenko Tomko Tomowiak Tomyn Tonn Topol Topolińska Topoliński Topolnicka
    Topolnicki Topor Topoła Torbicki Torczyńska Torczyński Torianyk Torres Toruńczak Tosiek Tosnowiec
    Tovkach Tovt Tołysz Tracichleb Traczewska Traczewski Traczykowska Traczykowski Trafidło Trafisz Trawa
    Trała Trebunia Trehub Trembacz Trembecki Trendowicz Trepczyńska Trepczyński Treppa Treścińska Treściński
    Trinh Tritt Trojniar Trots Trubacz Trubiłowicz Truchanowicz Trybalska Tryniecki Trynka Trynkiewicz
    Trzaskacz Trzaskalska Trzcionkowska Trzcionkowski Trzebniak Trzebunia Trzeciakowska Trzeciakowski
    Trzeciecka Trzeja Trzepaczka Trzeszczkowska Trzeszczkowski Trzewiczek Trześniak Trzuskowska Trzęsicka
    Trzęsicki Trzęsimiech Trójca Trójniak Trąbska Trędewicz Trędowicz Trętowska Tsetskhladze Tsikhanovich
    Tsiklauri Tsiupa Tsukanova Tsvietkova Tsyhanenko Tsyhankova Tubacki Tubisz Tucharz Tuchewicz Tudyka
    Tujaka Tunia Turan Turchyna Turenko Turkowicz Turlewicz Turoboś Turosz Turovska Tusz Tuta Tutkaj Tutko
    Tutkowska Tutkowski Tutro Tuziak Tuzik Tuła Tułak Tułaza Tułowiecka Tułowiecki Tuńska Tuński Twardo
    Tychmanowicz Tychyna Tykhonchuk Tykhoniuk Tyksiński Tylczyńska Tylczyński Tym Tymecka Tymkiewicz Tymko
    Tymorek Tymosiewicz Tymoszczuk Tymrakiewicz Tynka Tynkiewicz Tynor Tyrawa Tyrcz Tyshkevych Tysiąc Tyski
    Tyvoniuk Tyński Tóth Tądel Tąta Tłomak Tłuczykont Tłuszcz Tłuściak Ucherek Udycz Ufir Uglik Uherek
    Uhlenberg Ul Ulanicka Ulanicki Ulaszewska Ulańska Ulański Ulianova Ulita Umer Umiastowski Undziakiewicz
    Ungureanu Uracz Uramowski Uran Urantówka Urawska Urawski Urbacka Urbaszek Urbańczak Urbisz Uriasz
    Urszulak Urtnowski Uruski Urych Uryć Usatenko Usmanov Usmonov Usova Ustenko Ustupska Ustupski Utecht
    Utkin Utkowska Utkowski Utnicki Uvarova Uzarowicz Uzdrowska Uzdrowski Ułan Ułanowska Ułanowski Ułasewicz
    Ułasiewicz Vakoliuk Varabei Varenyk Varenytsia Varghese Varha Vashchyshyn Vasianovych Vasilev Vasilyeva
    Vasina Vasiuta Vasylechko Vatamaniuk Vavryk Vavryniuk Vehera Verbitska Veremiienko Veres Vereshchaka
    Verma Vernyhora Veselovska Vinnichenko Vinnyk Viola Vitenko Vitko Vitkovskyi Vitruk Vitvitska Vivchar
    Vlad Vo Voievoda Voit Voitsekhivska Voitsekhovskyi Volianiuk Volianska Volk Volkau Volodina Volokh
    Voloshchenko Volosheniuk Voloshko Volska Voronkova Vorontsov Voropai Vrublevska Vyhivska Waberska
    Waberski Wabińska Wabiński Wabnik Wacewicz Wachaczyk Wachelka Wachta Wachulak Wacko Wacowska Waczyńska
    Wadelska Wadelski Wahl Wajler Wajner Wajzer Wakulińska Wakuliński Walach Walachowska Walachowski Walacik
    Walaszkowska Walaszkowski Walawska Walawski Walburg Walczok Walczuch Walczykiewicz Walczykowska
    Walczykowski Walek Walencka Walentyn Waleryś Walerzak Walesiuk Waleska Waleszczyk Walewicz Walichnowski
    Walisiewicz Walisko Waliszek Waliś Walkarz Wallach Walorczyk Walędzik Wanago Wanatowicz Wancerz Wanecka
    Wanecki Wanic Waniewska Wanio Wantoch-Rekowska Wapiński Waracka Warchala Warcholińska Warczok
    Warczygłowa Warczyk Warczyńska Warczyński Wardal Wardyńska Wardyński Warelis Wareliś Warga Wargala
    Warian Warkocka Warlikowska Warmijak Warmowska Warpechowska Warpechowski Warsiewicz Wartalski Wartecka
    Wartecki Waruszewska Waruszewski Warzała Warzyc Wasilik Wasilkowska Wasilkowski Wasiołek Wasiłowska
    Wasiłowski Wasylko Waszczyńska Waszewska Waszewski Waszkiel Waszyńska Waszyński Wawerska Wawerski
    Wawiernia Wawryn Wawrzeczko Wawrzeńczak Wawrzonkiewicz Wawrzoła Wawrzykowski Wawrzynowska Wawrzynowski
    Wawrzynów Wawrzyńczuk Wawrów Waz Wałdowska Wałdowski Wałkuska Wałkuski Wańska Ważyńska Wciślak Wczasek
    Wcześniak Wedziuk Wejda Wejher Wekwert Welk Welka Wencek Wende Wenderski Wendlandt Wendzonka Wenecka
    Wepa Werbińska Werbiński Werda Werelich Weremiuk Weres Wereszczak Wermińska Wermiński Werwiński Wessel
    Wester Wełyczko Weśniuk Wiatrowicz Wicek Wicenciak Wichman Wichniarek Wiczuk Widacha Widanka Widyńska
    Widyński Widziak Widło Wiechno Wiedro Wiejacha Wielewicki Wielgocka Wielkiewicz Wielopolska Wielopolski
    Wielosz Wienconek Wienczek Wiercimak Wiernasz Wiernek Wieroński Wiertelorz Wierzbic Wierzchucka
    Wierzchucki Wieszała Wiewiórowska Wiewiórowski Wija Wijatkowski Wikarska Wiktorko Wiland Wilczkowiak
    Wilczopolska Wilczyk Wildner Wilgucka Wilkaniec Wilkanowski Wilkońska Wilkoński Willma Willmann Wilski
    Wincza Winkiewicz Wioska Wirkowska Wirkowski Wirska Wisiorek Wiska Wiski Witaszak Witała Witnik Witomski
    Witosławski Witoś Wittchen Wituszyńska Wituszyński Wityk Wizła Wiórek Wiązek Wiązowska Wiązowski
    Więcławik Więsak Więsik Więzowski Wiła Wiśniewicz Wlaszczyk Wlaźlik Wleklak Wlekliński Wlekły Wnuczko
    Wnuk-Lipińska Wnuk-Lipiński Wnęczak Wnękowicz Wodejko Wodo Wodowska Wodowski Woelke Wohlert Woińska
    Woiński Woja Wojarska Wojarski Wojciaczyk Wojciak Wojcieski Wojcieszczak Wojcieszczyk Wojcieszkiewicz
    Wojcieszyńska Wojcieszyński Wojciul Wojciuszkiewicz Wojczyszyn Wojdanowicz Wojdowska Wojdowski Wojdziak
    Wojewnik Wojewska Wojewski Wojs Wojsyk Wojszczyk Wojtacka Wojtacki Wojtalak Wojtarek Wojtuściszyn
    Wojtyczek Wolarek Wolkiewicz Wolman Wolniczak Wolszleger Wolszlegier Wood Woroniak Woroniec Woropaj
    Wostal Woszczyło Wozniak Wołczańska Wołkow Wołkowycka Wołkowycki Wołosiak Wołosiewicz Wołoszynek
    Wołoszyńska Wołoszyński Wołpiuk Wołtosz Wołujewicz Woźniacka Woźniacki Woźniel Woźniewicz Wrana Wranik
    Wroczyńska Wroczyński Wronecka Wronisz Wronko Wrotecka Wrotecki Wrotkowska Wrotkowski Wryk Wrzaszcz
    Wrzałek Wrzałka Wrzeszczyński Wrzoskiewicz Wrzoł Wróżek Wręga Wudniak Wujczyk Wujda Wulkiewicz Wus Wutke
    Wybieralska Wybraniak Wybrański Wycinka Wyczawska Wyczawski Wyczałkowska Wyczałkowski Wyderska Wyderski
    Wydrowska Wydrowski Wyduba Wygnał Wygrabek Wygralak Wylaź Wyleżuch Wylon Wyląg Wymysło Wyparło Wypchał
    Wypij Wypior Wypiorczyk Wyraz Wyrodek Wyrozębski Wyrwicka Wyrwicki Wyrwisz Wyród Wyrąbkiewicz Wyrębak
    Wysińska Wysiński Wyskwar Wysoczyńska Wysoczyński Występek Wyszecka Wyszecki Wyszka Wytrykowska
    Wytrykowski Wywrót Wyzińska Wyziński Wódczak Wójcińska Wójciński Wójkiewicz Wąchal Wądołkowska
    Wądołkowski Wągrodzka Wągrodzki Wąsicka Wąsicki Wąsikiewicz Wąsiołek Wątek Wątły Węclewicz Węcław Węcłaś
    Węgielska Węgielski Węgorowska Węgorowski Węgrzecki Wężowicz Wężowska Wężowski Władzińska Władziński
    Właśniak Włodyga Włudarska Włóczyk Włódarczyk Wściubiak Xia Xie Yakimovich Yakubov Yakusheva Yalçin Yan
    Yanush Yanushkevich Yarashevich Yaroshuk Yaroshyk Yasko Yaskovets Yatsko Yatsun Yavtushenko Yemelianenko
    Yeremeichuk Yermolaieva Yerokhina Yeromin Yershov Yeshchenko Yevchuk Yevdokymenko Yevdokymov Yevtushok
    Yoon Yukhno Yukhymets Yun Yuriev Yurkevich Yuskiv Zabara Zabiega Zabijak Zablotskyi Zaboklicka
    Zaboklicki Zabolotnia Zaborna Zaborny Zabraniak Zabroń Zabrzeski Zabrzeńska Zabrzeński Zabuska Zabuski
    Zabój Zabłotni Zacharczyk Zacharjasz Zacharkiewicz Zachwiej Zaciera Zacłona Zadorożna Zadorożny Zadęcki
    Zagacka Zagacki Zagaj Zagajska Zagajski Zagrabska Zagrabski Zagrodna Zagrodny Zahorodniuk Zahorski
    Zahrebelnyi Zaiko Zajdlewicz Zajega Zajusz Zajączek Zajęcka Zajęcki Zakharkiv Zakielarz Zakierska
    Zakierski Zaklukiewicz Zakrawacz Zakręta Zalasa Zalepa Zalesko Zaliwska Zaliwski Zalwert Zamarlik Zamaro
    Zambrowska Zamiela Zamkowska Zamkowski Zamolska Zamolski Zamęcka Zamęcki Zanko Zaperty Zapolnik Zaprzała
    Zaprzałka Zapór Zarachowicz Zarazińska Zaritska Zarytska Zarzyczny Zarębczan Zasadny Zasiadczyk Zastawa
    Zastawnik Zastróżny Zasucha Zasuwik Zatoka Zaton Zatwarnicka Zatwarnicki Zavada Zavalniuk Zaverukha
    Zawadowska Zawadowski Zawicka Zawicki Zawielak Zawilska Zawilski Zawisz Zawiszewska Zawitkowska
    Zawitkowski Zawitowski Zawiło Zawlik Zawodzińska Zawrotna Załubska Załubski Zbiegień Zbień Zbijowska
    Zboińska Zboiński Zbojna Zbrońska Zbroński Zbrzezna Zbrzezny Zdanek Zdanovich Zdanuczyk Zdańska Zdański
    Zdebiak Zdechlik Zdobych Zdolska Zdrowak Zdrzałka Zdunik Zduń Zdybek Zdych Zdzieborski Zdzienicka
    Zdzienicki Zdziennicka Zdziennicki Zegiel Zelma Zelmańska Zelmański Zembaty Zembrowski Zglenicka
    Zglenicki Zgliczyńska Zgliczyński Zgondek Zguda Zgórka Zgórzak Zhakun Zhdan Zhdanovich Zhuravskyi Zhylko
    Zhytnyk Ziarnek Ziejka Zielazny Zielecki Zieleniewicz Zielewicz Zielewska Zielewski Zielniewicz Ziemczyk
    Ziemecka Ziemecki Ziemianowicz Ziemiańczyk Ziemnik Zienkowicz Zienowicz Zieńko Zimek Zimin Zimka
    Zimmerman Zimnica Zimnowoda Zinevych Ziniuk Zinkel Zinoviev Zinovieva Zinówko Ziomkowska Ziomkowski
    Ziołek Ziuzia Ziąber Ziębacz Ziębowicz Zięta Zjadewicz Zlenko Zmaczyńska Zmaczyński Zmełty Zmora
    Zmorzyńska Zmysło Znaczko Znaniecka Znosko Zoch Zolotarov Zomer Zomkowska Zomkowski Zonenberg Zonik
    Zoria Zorn Zosiuk Zotova Zou Zozula Zubach Zubiak Zubiel Zubova Zuch Zuchniewicz Zujko Zuzek Zuzel Zuń
    Zuśka Zvierieva Zwada Zwalińska Zwiercan Zwierko Zwierzak Zwierzykowska Zwierzykowski Zychal Zydek Zydor
    Zydorczak Zydorowicz Zygadlewicz Zygar Zygarlicka Zygarlicki Zygmanowski Zygmunciak Zygnerska Zygnerski
    Zym Zymon Zysiak Zysko Zywar Zyzańska Zyzański Ząbczyńska Ząbczyński Ząbroń Zątek Złakowska Złakowski
    Złocka Złocki Złydaszyk Çelik Özcan Özdemir Ünal Ćwielong Ćwil Ćwir Łabacz Łabanowicz Łabaziewicz Łabuć
    Łabuński Ładna Ładowska Ładowski Ładyńska Łaganowska Łaganowski Łagiewka Łaguniak Łajca Łajewska
    Łajewski Łakus Łamacz Łaniecka Łankiewicz Łapuszek Łasecka Łaskowska Łassa Łastówka Łatkowska Łatkowski
    Ławik Ławnicka Ławnicki Łańcucka Łańcucki Łańko Łański Łepik Łeppek Łesyk Łeszyk Łobaczewska Łobaczewski
    Łodygowska Łodygowski Łogin Łomińska Łomiński Łopatecka Łopuszańska Łopuszański Łopąg Łosak Łosicka
    Łoszewska Łoszewski Łowczak Łowigus Łozak Łozicka Łozicki Łośko Łucak Łuckoś Łucyszyn Łukańko Łukianiuk
    Łukiewska Łukoszek Łukowiec Łupicka Łupicki Łygan Łyk Łykus Łysikowska Łysikowski Łyska Łyszczarczyk
    Łyszyk Łyzińska Łyziński Łyźniak Łądka Łągiewczyk Łąkowska Łąkowski Łęczyńska Łęczyński Łęgowiak Łęt
    Łętek Ściborowski Ścibura Ściegienna Ściepura Ściepuro Ściesińska Ściesiński Ścieżka Ścigacz Ścipień
    Ściubidło Ściążko Ścięgaj Ścięgosz Ślanda Ślaz Ślefarska Ślefarski Ślepko Ślesik Ślewa Ślifierz
    Ślifirczyk Śliwecka Śliwecki Śliwicka Śliwicki Śliwoń Ślotała Ślugaj Śluzek Ślęczkowska Ślęczkowski
    Śmidowicz Śmiechura Śmieciński Śmiejczak Śmierzchała Śmieszny Śmigała Śmiglak Śmiglewska Śmiszek Śniada
    Śniecikowska Śniecikowski Śniecińska Śnieciński Śnietka Śpiewakowska Śpiewakowski Śpiewla Środecka
    Środecki Światlak Światła Świdnicka Świdnicki Świechowicz Świechowski Świerblewski Świerek Świergosz
    Świerguła Świerniak Świerska Świerski Świgost Świnarska Świnarski Świokło Świrgoń Świrko Świrszcz Świrta
    Świsłocki Świtacz Świątnicka Świątnicki Święszek Świętosławska Świętosławski Ździebło Źrubek Źróbek
    Żadziłko Żagiel Żarkiewicz Żarnowiecka Żarnowiecki Żarowski Żałoba Żebro Żebryk Żeglińska Żegliński
    Żelewska Żelewski Żemojtel Żera Żerdka Żerebecka Żerebecki Żmigrodzki Żmurko Żołnierkiewicz Żołnierowicz
    Żołynia Żołędziewski Żuchlińska Żuchliński Żuchniewicz Żuczkowska Żukrowski Żurak Żurawel Żurawicka
    Żurawiecka Żurawiecki Żurowicz Żwawiak Żwirko Żych Żyguła Żylewicz Żylska Żylski Żymańczyk Żyndul Żynel
    Żytkowska Żywczyk Żywek Żywina Żyznowski Żyża Żółciak Żółcińska Żółciński Żędzian Żłobecka Żłobecki
    Żłobicka Żłobicki
  `],
  [2300, `
    Abakumova Abasov Abbasova Abdalla Abdullah Abdurakhmanov Abdurakhmonov Ablewicz Ablewska Abrachamczyk
    Abrahamczyk Abrahamyan Absalon Acewicz Achrem Achtenberg Adamajtys Adamiok Adamiszyn Adamkowicz Adamusik
    Adamuszek Adranowicz Adryańczyk Afanasenko Afek Afelt Affeldt Afonin Afonina Aftewicz Agaś Agnieszczak
    Ahafonov Ajdukiewicz Ajdys Akbarov Akbulut Akhtar Akin Akulenko Akulova Akus Akymenko Alaba
    Alabrudzińska Alabrudziński Alaburda Alakhverdiev Alaszkiewicz Albinowska Albinowski Alboszta Alcer
    Aleinik Aleksandrowska Aleksandrowski Aleksandrów Aleksiun Alf Alfut Alfuth Aliashkevich Alibożek
    Alimova Alizada Alker Alokhin Aloshyna Alter Alvarez Ambicka Ambicki Ambo Amborska Amborski Ambroch
    Ambrochowicz Ambrozińska Ambroziński Ambrożej Ambrożuk Ambryszewska Amenda Amer Amiri Amirov Amonowicz
    Ampulska Ampulski Ampuła Amroziewicz Amrozik Amrozy Ananchenko Ananicz Ananieva Anastaziak Ancerowicz
    Anchim Anchimiuk Ancuta Anczewska Anczewski Anczyk Anczykowska Anderko Andraczek Andrasiak Andraszek
    Andraszyk Andrałojć Andreczko Andreev Andrejew Andrews Andreyeu Andriichenko Andriishyn Androsova
    Androsz Andruchewicz Andrukajtis Andrukh Andrukonis Andrus Andrusewicz Andrushkiv Andruszczyszyn
    Andruszewicz Andrychowska Andrychowski Andryka Andrykowska Andryskowska Andryskowski Andryszewska
    Andryszewski Andrzejaszek Andrzejkiewicz Andrzejkowicz Angelova Anger Anhalt Anikin Aniołczyk Aniołowska
    Aniołowski Aniserowicz Aniszczyk Aniszkiewicz Ankutowicz Anokhin Anokhina Antipov Antipova Antonchyk
    Antonets Antony Antonyk Antonyshyn Antoszków Antoszuk Antośkiewicz Antropik Antypiuk Anus Anusz
    Anuszczyk Anwar Anyszkiewicz Apanasowicz Apanel Apiecionek Apostoluk Apostoł Appelt Apriasz Arabas
    Arabski Arakelyan Aras Araszewska Araszewski Archutowska Ardeli Arend Arentewicz Argalska Argalski Arif
    Arkhipov Arkhypova Arlt Armada Armanowska Armanowski Armknecht Armuła Aronowicz Aronowska Arora
    Artamonov Artiukhova Artiushenko Artman Artomova Artysiewicz Aryal Asadov Asatryan Askarov Askerov
    Astakhov Astapenka Astramowicz Aszurkiewicz Atanasova Ateş Atraszkiewicz Atłachowicz Atłasik Augustyniok
    Augustyńczyk Avci Avdieienko Awad Awdziej Awiżeń Azarov Ałaszewski Ałdaś Ałtyn Babacz Babaev Babaiev
    Babaieva Babayan Babańczyk Babchuk Babczyk Babiarska Babiarski Babiasz Babiel Babinska Babirecka
    Babirecki Babiy Babka Babkin Babkina Babuszkiewicz Babyn Babynko Bachanowicz Bachar Bacher Bachmann
    Bachur Baciak Bacińska Baciński Baczmański Baczul Badaj Badowiec Badur Badurak Badurska Badurski Badylak
    Badzio Bae Baghdasaryan Bagier Bagnicka Bagnowski Bagsik Bahan Bahdanau Bahinska Bahr Baidiuk Baieva
    Bairak Bairamovi Bajczyk Bajdas Bajdo Bajdor Bajerczak Bajerlein Bajgier Bajgot Bajodek Bajowski
    Bajsztok Bajtek Bajus Bakal Bakhur Bakierska Bakiewicz Baklan Bakum Balabanov Balahura Balana Balanda
    Balandiuk Balasińska Balasiński Balbierz Balcarczyk Balczyńska Balczyński Bald Balda Baldys Balikowski
    Balina Baliniak Balion Baliś Balog Balonis Balukh Balun Balura Baluś Balytska Balytskyi Balzer Bamberski
    Bambrowicz Banachiewicz Banakh Banasiński Banaszczuk Banc Bancer Bancerek Bandel Bandelak Bander Bandoch
    Bandurka Bandych Bandyra Bandzerewicz Banecka Banecki Banet Baniel Baniewska Baniewski Baniowski Banisz
    Banit Banko Banna Banowska Banowski Bant Banuch Barannik Barannyk Baranow Barasiński Baraszkiewicz Baraś
    Barbakadze Barbarowicz Barc Barciok Barczyszyn Bardak Bardega Bardel Bardońska Bardoński Bardyga Barejka
    Barejko Barełkowski Bargańska Bargański Bargielska Bargielski Bargłowska Bargłowski Bark Barker Barkova
    Barlasz Barnes Barniak Barry Barsuk Barsukova Barsul Barsznica Bart Bartashevich Bartczyszyn Bartha
    Bartlewicz Bartmańska Bartochowski Bartosek Bartusz Bartycha Bartylak Bartyna Bartyska Bartłomiejczuk
    Bartłomowicz Barwa Barwikowska Barwikowski Barycz Baryliuk Barylo Barysenka Barysiuk Barłowska Barłowski
    Barłożek Basan Basałyga Basha Bashchuk Bashynskyi Basiukiewicz Basko Basov Basza Baszanowska Baszanowski
    Baszczak Baszczuk Baszczyj Baszko Basztura Basąg Batarowicz Bats Baucz Bautista Bauć Bawer Bawełkiewicz
    Bayram Bazal Bazaniak Bazar Bazarov Bazeliuk Bazga Bazyk Bazylevych Bazylińska Bazyliński Bałachowska
    Bałaj Bałchanowski Bałdyka Bałkowiec Bałucka Bałucki Bałuta Bańburska Bańcerek Bażela Beba Becella
    Bechcińska Becherka Becmerowicz Bedełek Bedlechowicz Bedlińska Bedliński Bednar Bednik Bedyniak Begger
    Begiert Behal Behei Behmke Behrens Bei Beim Bej Bejman Bekacz Bekalarczyk Bekalarek Bekała Bekker
    Beksiak Belczyńska Belda Beldzik Belgrau Belicka Belicki Belkius Belko Belmeha Belta Bely Bembenista
    Bemka Bemke Bemowska Bemowski Bencal Bendlin Benedyczuk Benedykczak Benedykt Benet Benewiat Benk Bensch
    Beraia Berak Berbeś Bercal Berchuk Berda Berdak Berdnyk Berdowska Berdowski Berdych Berecka Berehovyi
    Berenda Beresińska Berestecka Berestecki Bereszyńska Bereszyński Bereziak Berezina Berezińska Bereziński
    Berezniuk Bereśniewicz Bergolc Bering Berisha Berishvili Berki Berkieta Berko Berlak Berlin Bernach
    Bernadek Bernadyn Bernert Bernhard Berniak Bernyk Bero Berry Berta Berthold Bertman Bertram Beruś Besler
    Bespalov Bespalova Bet Betler Betyna Bevza Bezara Bezat Bezkrovnyi Beznosiuk Bezpala Bezpalyi Bezrąk
    Bezsmertna Bezsmertnyi Bezulska Bezulski Bezushko Bezverkhyi Bezłada Beć Bełbot Bełczowska Bełczowski
    Bełczącka Bełczącki Bełdycka Bełdycki Bełdyga Bełej Bełka Bełkowski Bełzo Bełzowska Bełzowski Bhatt
    Bhujel Bhusal Biadasiewicz Bialas Bialucha Bianek Biardzki Bias Białachowska Białasek Białaszek Białaś
    Białdyga Białkiewicz Białoch Białogłowska Białogłowski Białogłowy Białomyzy Białowicz Biba Bich
    Biczkowska Biczkowski Bidenko Biduś Biecek Biedermann Biedna Biedrzyńska Biedrzyński Biedulska Biedulski
    Biegas Biegasiewicz Bielaczek Bielaska Bielaś Bielenica Bieleninik Bielerzewska Bielerzewski Bielesza
    Bielica Bielous Bielousov Bielousova Bieluń Bielykh Bieniada Bieniaś Bieniewska Bienio Bieranowski
    Bierbasz Bierca Biercewicz Biernaciak Biernatek Biernath Bieroń Biesiadzińska Biesiadziński
    Biesiekierska Biesiekierski Bieszcz Bieć Biełous Bigielmajer Bigoraj Bigoszewska Bihuniak Bijas Bilaniuk
    Bilant Bilbin Bilenka Bilenkyi Bilewska Bilewski Biliaieva Biliavskyi Bilich Bilko Billewicz Bilodid
    Biloshytskyi Bilovol Bilozor Bimek Binas Binaś Binczak Biniarz Binio Biniszewska Biniszewski Binkowicz
    Binkul Biodrowicz Birkholz Birkos Birkowska Birkowski Birna Birska Birski Birus Birut Birycka Birycki
    Birówka Bishko Bisińska Bisiński Bismor Bistroń Bistyga Biszczuk Biszewska Biszewski Biszko Biszof Biwan
    Bizunowicz Biłous Biń Bińka Bk Blachnierek Black Bladocha Bladzich Blaha Blama Blania Blanik Blask
    Blaski Blaszczok Blaszkiewicz Blaszko Blaszyński Blezień Bliashuk Blige Blim Blimel Blin Blinda Blinova
    Blochel Blomberg Blonska Bludnik Bludova Bluhm Blumkowska Boberska Boberski Bobiec Bobkov Bobkova Bobla
    Boboryko Boboshko Bobowiec Bobras Bobrovskyi Bobrucki Bocer Bochaczyk Bochan Bochenkiewicz Bochentin
    Bochentyn Bochnacki Bocho Bochonko Bochowicz Bocianiak Bociąg Bodal Bodecka Bodniak Boduła Bodynek Bodył
    Bodzan Bodzenta Bodziany Bodziarczyk Boettcher Bogalecka Bogalecki Bogdalska Bogdanov Bogdanova Bogdanow
    Bogdanowski Bogielczyk Bogobowicz Bogulska Bogulski Bohachova Bohatkiewicz Bohatyr Bohatyrewicz
    Bohatyrova Bohomolov Bohomolova Bohoslavets Bohuslavska Bohuszewicz Bohutskyi Boiar Boiarska Boiarskyi
    Boiechko Boik Boikiv Boitsun Bojarojć Bojarowska Bojarun Bojaruniec Bojba Bojsza Bokalo Bokhan Bokiniec
    Boksz Bokun Bolach Bolc Bolcek Boldt Bolech Bolesławska Bolesławski Bolin Boliukh Bolon Bolotova
    Bolshakova Bombrych Bomersbach Bon Bonalska Bonalski Bonawenturczyk Bonczar Bonczyk Bonda Bondarev
    Bondareva Bondarewicz Bondaryk Bondzio Bondziul Bonia Boniakowska Boniakowski Boniec Bonior Bonter
    Borchmann Bordzoł Boreichuk Boretska Boretskyi Borgiel Borgula Borisov Borisova Borka Borkała Borkułak
    Bornus Borodacz Borodajko Borodenko Borodo Boronowski Borovyi Borowińska Borowiński Boroś Borsa Bortko
    Bortniak Boruczkowska Boruczkowski Boruk Borukało Borukh Borusiak Boruszczak Borwik Boryga Boryshkevych
    Borysionek Borysovets Borysowska Borysowski Borysławski Boryta Borzestowska Borzestowski Borzucka
    Borzucki Borzykowska Borzykowski Borzyńska Borzyński Bosiuk Bosowska Bostan Bosyi Botkiewicz Botko
    Botorek Botta Bova Bovt Boychuk Bołd Bołdak Bołdyzer Bołka Bołtowicz Bołtromiuk Bołtruczuk Bołzan Bośka
    Bożkiewicz Bradley Braha Bram Branas Branc Brandyk Branica Braniewski Braszczok Braszko Bratash Brdoń
    Brdąkała Brechelke Brejta Brelak Brener Brenner Bresińska Bresiński Breske Bresler Bressa Bretes
    Bretsznajder Brewko Brezgieł Breńska Breński Briks Brill Brillowski Brniak Broczek Brodacz Brodaczewska
    Brodaczewski Brodniewicz Brodowiak Brodowy Brodzicka Brodzicki Brojanowska Brokowska Brokowski Bromber
    Brondel Bronecka Bronecki Bronik Broniś Brooks Broshko Bross Brovchuk Browarnik Browarny Broy Brozdowska
    Brozdowski Broż Brożyniak Bruc Bruchal Brudkiewicz Bruk Brukiewicz Bruniecka Bruniecki Brunner Brust
    Brutkowska Brutkowski Bruzgo Bruzik Bruź Brydak Brygider Brygman Bryguła Brykowska Bryksy Brylka Bryn
    Brysch Brysiewicz Brysik Brytańczyk Bryłkowska Bryłkowski Bryńczak Bryński Brzank Brzechwa Brzeczek
    Brzeczkowska Brzenczek Brzenska Brzezek Brzeziański Brzeziecka Brzeziecki Brzezoń Brześkiewicz
    Brzeźnicka Brzeźnicki Brzeżańska Brzeżański Brzozowa Brzuchala Brzustowska Brzustowski Brzyszko Brzywczy
    Brzyzek Brzóstowicz Brückner Brączkowska Brączkowski Brąszkiewicz Bręczewski Bubas Bubela Buben Bubiec
    Bubienko Bubień Bubieńczyk Bubnova Bucała Bucewka Buchajczuk Buchajczyk Buchak Buchczyk Buchenfeld
    Bucher Buchholc Buchkovska Buchkovskyi Buchnajzer Buchnat Buchok Bucik Buck Bucur Bucyk Buczkiewicz
    Buczny Buczyło Budas Budhathoki Budiak Budniewska Budryk Budynkiewicz Budzanowska Budzanowski
    Budzianowska Budzianowski Budzicka Budzicki Budzicz Budziewski Budzikowski Budzko Budzyna Budzynowska
    Bugańska Bugański Bugieda Bugiera Bugnacka Bugnacki Bugowska Bugowski Bujna Buka Bukarewicz Bukartyk
    Bukata Bukato Bukański Bukiel Bukowian Bukraba Buksińska Bukład Bulandra Bulatova Bulavina Bulczyńska
    Bulera Bulewicz Bulira Buliszak Bulsa Buluk Bulwa Bulyha Bulzacka Bumbi Bun Bunalska Bunar Bunchuk
    Bundziów Bunia Buniek Bunikowska Bunikowski Bunio Buraczyk Burawski Buraś Burblis Burbo Burcz Burczaniuk
    Burdan Burdecka Burdeniuk Burdiak Burdyka Burdyńska Burdzań Burgs Buriachenko Buriachok Buriańska
    Buriański Burke Burkert Burkovska Burkovskyi Burlacu Burlaga Burlakov Burlakova Burlikowska Burlikowski
    Burman Burmer Burmistrzak Burna Burnicka Burnicki Burniewicz Burns Burny Burnóg Burova Buroń Bursiak
    Bursztyka Bursztyńska Bursztyński Burtseva Buryi Buryn Burz Burzan Burzycka Buschmann Busiakiewicz Busk
    Busler Busma Buszewska Buszewski Busłowski Butkevych Butkowska Butkowski Butlewska Butlewski Butsko
    Butyński Buzalska Buzdygan Buziewicz Buziuk Buzor Bućkowska Bućkowski Bułach Bułas Bułatek Bułatewicz
    Bułdys Bułgajewska Buńda Buńka Buńkowska Buńkowski Buśka Byba Bychenko Bychko Bychok Byczak Bydałek
    Bydołek Bydłosz Bylinowska Bylinowski Bylok Byrdak Bystryk Bystrzanowski Byszuk Bytom Byzia Byśkiniewicz
    Bzdel Bzduch Bzikot Bzinkowska Bzinkowski Bzodek Bzyl Bógdał Bürger Büttner Bącalska Bąchor Bączar
    Bączkowicz Bąder Bątkiewicz Bątkowska Bątkowski Bątruk Bębeńca Bębnik Bębnowicz Bębnowski Bęcki Będuch
    Będzieszak Błacha Błachewicz Błachnia Błachowska Błachowski Błaszczykowska Błaszczykowski Błaszkowiak
    Bławut Błażko Błażkowska Błażkowski Błażowska Błażowski Błochowicz Błocian Błonka Błotniak Błyszcz
    Błądziński Błędek Błędniak Błędzińska Błędziński Błędzka Błędzki Bőhm Bździon Cabel Cak Caldarar Camara
    Capanda Capłap Castillo Całkiewicz Całuch Cebularz Cecelska Cecelski Cedzyńska Cedzyński Cegiel Cejer
    Cejman Cekus Celban Celebańska Celebański Celebucka Celebucki Celeda Cellmer Celmerowska Celmerowski
    Celniak Celt Cembrowicz Cembrowska Cembrowski Cempulik Cencek Cencelewicz Cendal Ceniuk Centner Cep
    Cepek Cepiga Cepowska Cepowski Cepuchowicz Cerba Cesak Cesarek Cesarska Cesarski Ceszke Cetner Ceylan
    Chabanov Chabik Chabinka Chabraszewska Chabraszewski Chabura Chabzda Chacewicz Chachlowska Chachlowski
    Chachurska Chachurski Chaciewicz Chacuś Chada Chadrysiak Chaikivska Chaikivskyi Chajduga Chajdys
    Chalenko Chamarczuk Chamela Chamier-Gliszczyński Chamska Chamski Chapska Chapski Charazińska Charaziński
    Charczenko Charlińska Charliński Charniak Charniauski Charusta Charuta Charyga Charytonowicz Charyyev
    Charyło Charłampowicz Chazan Chałada Chałaj Chałko Chałubowicz Chałuda Chaś Chebanenko Chekhovska
    Chemperek Chendoszko Chepak Chepel Cherepakha Cherkes Cherniaieva Cherniakova Cherniienko Chernikov
    Chernysheva Cherpak Chervoniak Chełmicki Chhetri Chicheł Chilewska Chilewski Chilla Chilmanowicz Chim
    Chimkowska Chirek Chiriac Chirowska Chkhaidze Chlebiej Chlebisz Chlewińska Chlubek Chmielina Chmioła
    Chmur Chmurak Choban Chobotar Chocaj Chochlińska Chocholska Chocholski Chochła Chociaj Chocianowska
    Chocianowski Chocyk Choda Chodasewicz Chodoń Chodukiewicz Chodurek Chodyła Chodziutko Chodzyńska Choim
    Choja Chojaczyk Chojnecka Chojnecki Chojniarz Cholajda Cholak Cholcha Cholerzyńska Cholerzyński
    Cholewczyński Chomin Chomiszczak Chomontek Chomontowski Chomska Chomski Chomycz Choniawko Chop Chopenko
    Chopko Choptiany Chornei Chornenkyi Chornomaz Chornomorets Chornous Choroszczak Choroszewicz
    Chorzelewska Chorzelewski Chorzempa Chorąziak Chorębała Chotkowska Chotkowski Chołyst Chrabańska
    Chrabański Chrapczyńska Chrapczyński Chrapko Chrapkowicz Chrapla Chrapowicka Chrapowicki Chrebor
    Christiansen Christoph Chromniak Chroł Chroń Chrośniak Chrubasik Chrulska Chrulski Chrupcała Chrustowicz
    Chruszczewska Chruszczewski Chrut Chruścielewska Chruścielewski Chryplewicz Chryń Chrzczon Chrześcijanek
    Chrząszczewska Chrząszczewski Chrząszczyk Chról Chróściński Chubko Chubyk Chuchko Chuchman Chuchrowska
    Chuderewicz Chuderska Chuderski Chudowolski Chukhrii Chuma Chumakov Chung Chura Chustecka Chustecki
    Chutkowska Chutkowski Chuć Chwajoł Chwaleba Chwaliszewska Chwasta Chwastowska Chwastowski Chwaszczewska
    Chwaszczewski Chwiałkiewicz Chwieśko Chwojko Chwyć Chybicka Chybicki Chycka Chycki Chyhryn Chyrc
    Chyrchel Chyrko Chyrkova Chyrzyńska Chystiakov Chyzhevskyi Chyzhova Chyłka Chyża Chyżewska Chęcik
    Chęsiak Chęsy Chłopicka Chłopowiec Chłus Ciabach Ciamaga Cianciara Ciaranek Ciarcińska Ciasto Ciastoch
    Ciałkowska Ciałkowski Ciałoń Cichaczewska Cichor Cichoracka Cichorczyk Cichorska Cichorski Cichończyk
    Cicirko Ciebiada Ciechalska Ciechalski Ciecholewska Ciecholewski Ciechońska Ciechoński Ciecieręga
    Cieciorko Ciecińska Cieciński Ciejak Ciejek Ciekański Cielepa Cielesta Cielewicz Cieloszyk Ciemiecki
    Ciemienga Cieniawa Cieniawska Cieniawski Cieniewska Cieniewski Cienkowski Cienkus Ciepałowicz Ciepiel
    Ciepielak Ciepierska Ciepierski Cieplechowicz Cieplicki Cierach Cierlak Cierniewska Cierniewski
    Cierpiała Cierpica Cierpińska Cierpiński Cierzan Cień Cieńciała Cieślawska Cieślawski Cieśnik Cilulko
    Ciodyk Ciolek Ciompała Ciomperlik Cioska Ciota Ciozda Cipora Cirka Cirko Ciruk Cisińska Cisiński
    Ciszowska Ciszowski Ciszyńska Ciszyński Citkowska Citkowski Cituk Ciuksza Ciulak Ciunowicz Ciupik Ciupke
    Ciurlik Ciurys Ciuśniak Ciwis Ciągwa Cięciara Cięgotura Ciężadlik Ciężar Ciężczak Ciślik Ciździel Ciźla
    Ciżewska Ciżewski Clopotar Cmok Cokot Coleman Comber Con Coner Conrad Cook Costa Cołoś Cołta Coşkun
    Cristea Cruz Cudakiewicz Cudnoch Cudok Cudowska Cudowski Cui Cukierda Cukierman Cukiernik Cukras Cup
    Cupok Cuprjak Cuprych Curkowicz Curyłło Cwielong Cyboran Cycak Cych Cyfert Cyfka Cygańczuk Cygon Cyka
    Cykman Cykowiak Cykowski Cylc Cylińska Cymanowska Cymborski Cymerkiewicz Cymorek Cyparska Cyparski
    Cypcar Cypcarz Cyplik Cyprysiak Cyrana Cyranik Cyrański Cyrkiel Cyrklewicz Cyrul Cyrulewska Cyrulewski
    Cyrych Cyryl Cyrys Cytacka Cytacki Cytawa Cytlak Cytloch Cytryniak Czabańska Czabański Czacharowska
    Czacharowski Czachurska Czachurski Czajer Czajewska Czajowska Czajowski Czakańska Czakański Czapelka
    Czapkiewicz Czapkowicz Czapkowska Czaplik Czapran Czarczyk Czarczyński Czarnata Czarniawska Czarniewski
    Czarnobaj Czarnogórski Czartoryjski Czasak Czasnojć Czeberkus Czebotar Czebreszuk Czeczotka Czekajska
    Czekajski Czekałowski Czekiel Czemko Czempińska Czempiński Czemplik Czepczyńska Czepczyński Czepik
    Czepulonis Czerbniak Czereda Czeremuga Czerko Czerna Czernichowska Czernichowski Czerniga Czernij
    Czernikarz Czernikowska Czernikowski Czernysz Czerwinska Czerwinski Czerwionke Czerwonko Czeryna
    Czesnowski Czesny Czestkowski Czeszel Czeszewska Czeszewski Czetyrbok Czichon Czmielewski Czmut Czmyr
    Czogalla Czoik Czopur Czornak Czosnowska Czosnowski Czołba Czpak Czubachowska Czubachowski Czubiak
    Czubska Czubski Czuczko Czugała Czuja Czulewicz Czulińska Czuliński Czupak Czupich Czupik Czurczak
    Czuryk Czusz Czuwaj Czuwara Czułek Czułowska Czwartek Czwałga Czwordon Czyjt Czykiel Czypek Czyrkiewicz
    Czyrska Czyrski Czyżkowski Czyżniak Czyżniewska Czyżnikiewicz Człapińska Człapiński Cąber Cąpała Cęcek
    Dabrowski Dackiewicz Dacków Dacyk Dadasiewicz Dadzibóg Dagiel Dajda Dajos Dakhno Dal Dalba Dalbiak
    Daleszak Dalgiewicz Dalkiewicz Damaz Damczyk Damrych Damszel Damętka Danelia Danicka Danicki Danielczok
    Danielek Daniels Daniewska Daniewski Danilchenko Danilevich Daniliuk Danilkiewicz Daniv Daniłkiewicz
    Dankevych Dankiv Danyleiko Danyliak Danylo Danyluk Danylyuk Danysz Darabasz Darecka Darecki Darkowska
    Darmach Darosz Daruk Darżynkiewicz Dashchenko Dashkevych Dastych Daszewska Daszewski Daszke Daszko
    Daszyński Datkiewicz Datoń Datsiv Datskiv Datsyk Davidson Davlatov Davtyan Davyd Dawidiuk Day Dałkowska
    Dałomis Dańkowska Dańkowski Dańków De|Vries Deba Deberny Debert Debudaj Dedyk Defińska Defiński
    Defratyka Deinert Dejas Dejer Dejnak Dejneko Dejworek Dekier Delegiewicz Deleska Delewska Delewski Delik
    Delipacy Deliś Delmanowicz Delost Dembitskyi Demby Demchyshyn Demczur Dementiev Demeshko Demianiv
    Demianov Demianyk Demidov Demidova Demidziuk Demirov Demkowska Denc Dendek Dendewicz Dendura Deneha
    Denesiuk Deng Denisiewicz Denisov Denisova Deniszczuk Deniziak Denuszek Depcik Depko Depo Deput Der
    Derach Derba Derbot Derdowski Derdzińska Derdziński Derej Derencz Dereniowski Deresh Dereszewska
    Dereszewski Derewenda Derii Dermont Deryng Desiatnyk Desput Deszczak Deuter Dewor Deyk Deyna Deńca
    Dhakal Diadiuk Diadiura Diakowicz Diaz Didek Didkivska Diduk Didych Dihtiar Dikhtiarenko Diks Dikta
    Diller Dimov Ding Dinter Diurczak Dixon Dmitriiev Dmitrowicz Dmitrowska Dmuchała Dmytrash Dmytriuk
    Dmytrów Dobiegała Dobiosz Dobis Dobisz Dobińska Dobiński Dobkowicz Dobra Dobroch Dobrołowicz Dobruszek
    Dobrzyniak Dobska Dobush Doczekalska Doczekalski Doczyk Dodot Dojlidko Dojlido Dojutrek Dokowicz Dokupil
    Dolczewska Dolczewski Dolewka Dolhopolova Dolhova Dolidze Doligała Dolinskyi Dolnik Dolota Dolynska
    Dolynskyi Domaciuk Domanskyi Domaracka Domaracki Domashenko Dombrowa Domerecka Domerecki Domicz Domider
    Domienik Dominek Domiza Domjan Domosławska Domosławski Domszy Domżoł Donajska Donajski Doncer
    Dondajewska Dondajewski Dondziak Dondziło Donga Doniek Donoch Dontsov Dontsova Dopka Dorak Dorcz Dorf
    Dorman Dornia Doroch Dorociński Dorofieiev Doronin Doronina Doroszczyk Doroszewska Doroszewski
    Dorosławska Dorozińska Doroziński Doroś Dorszewska Dorszewski Dorszyńska Dorszyński Dorywalska
    Dorywalski Doryń Dos|Santos Doskoch Doszczeczko Dota Dotka Dovbenko Dovbush Dovgan Dovhanych Dovhopol
    Dovzhyk Dowgielewicz Dowhan Dowhań Dowlaszewicz Downar-Zapolska Downar-Zapolski Doyle Dołasińska
    Dołasiński Dołbniak Dołgań Dołhan Dołhań Dołomisiewicz Dołowicz Dołowiec Dołubizno Dołężka Dołżycka
    Dołżycki Doś Doǧan Drabarz Draber Drabiniok Dradrach Draganek Draganiak Draganik Dragańska Drajem
    Drajewicz Draniak Dranikowska Dranikowski Drankiewicz Drapczuk Drapik Drapikowska Drapikowski
    Draszanowska Draszanowski Draszczyk Dratkiewicz Drawska Drażyk Drdzeń Drechny Dreczko Dregier Dreksler
    Dremo Drewienkowska Drewienkowski Drewka Drewnicka Drewnicki Drobczyk Drobiazko Drobiszewski Drobniewski
    Drobysz Drogowska Drong Dropek Dropia Drozdalska Drozdalski Drozdenko Drozdiuk Drozdyk Droździak
    Droździewicz Drożdżał Drubkowska Drubkowski Druk Drukarczyk Drutel Drutowska Drużbiak Drużdżel Drwiła
    Drwęcka Drwęcki Dryll Drymel Drypa Dryps Drytkiewicz Dryzek Dryło Drzastwa Drzażdżewski Drzewoszewska
    Drzewoszewski Drzymota Drzyzguła Drzęźla Drążczyk Drążkowiak Dubacka Dubacki Dubak Dubaniowska
    Dubaniowski Dubanowicz Dubanowska Dubanowski Dubczyk Dubec Dubenko Dubij Dubiło Dubla Dublas Dubois
    Dubovenko Dubrawski Dubrovina Dubrovskyi Dubrownik Duchenko Duchowicz Duczman Duczmańska Dudacy Dudajek
    Dudaniec Dudarchuk Dudarenko Dudaryk Dudel Dudina Dudkin Dudkina Dudło Dukarska Dukiel Dukielska
    Dukowska Dukowski Duks Dulek Duliniec Dull Dullek Dulowski Duluk Dumanskyi Dumas Dumicz Dunajczan Dunder
    Duniak Dunowska Dunowski Dupla Duplicka Duralska Duralski Duranc Durau Durczewska Durdyn Durecki
    Durkowska Durkowski Durmała Durniat Durtan Dusiło Dusznik Duzinkiewicz Duzowska Duła Dużak Dvalishvili
    Dvorak Dvoretska Dvoretskyi Dwojacki Dwojakowska Dwojakowski Dwojewska Dwojewski Dworczyńska Dworczyński
    Dworniczek Dwornikowska Dwornikowski Dworszczak Dworzecka Dworzycka Dwulat Dwurznik Dwużnik Dyachenko
    Dybczyński Dybikowska Dybioch Dybionka Dybińska Dybiński Dybko Dybski Dycfeld Dychko Dychtoń Dydymska
    Dydymski Dydyńska Dydyński Dygant Dygulska Dygulski Dykcik Dyksy Dyktyńska Dyktyński Dylińska Dyliński
    Dyllong Dylon Dylowicz Dymarkowska Dymarkowski Dymarz Dymiter Dymna Dymska Dymus Dynarska Dynarski Dyner
    Dynerowicz Dyngus Dyniak Dyniec Dypa Dypolt Dyra Dyrbusz Dyrdał Dyrduł Dyriv Dyrszlag Dyshkant Dysiewicz
    Dysput Dyszer Dyszewska Dyszewski Dyszkant Dytkiewicz Dywel Dyzio Dyńska Dyński Dzbanuszek Dzbeńska
    Dzbeński Dzbik Dzebchuk Dzedzyk Dzemidovich Dzenisiuk Dziacko Dziad Dziadas Dziaduszek Dziadykiewicz
    Dziagacz Dziakowicz Dzialuk Dziamba Dziankowski Dzianok Dziaszyk Dziatko Dziatkowiak Dziawgo Działdowska
    Działdowski Działkowska Działkowski Działoszyńska Działoszyński Dziechciowska Dziechciowski Dzieciaszek
    Dziecielska Dziecielski Dziedzia Dziedziech Dziedzioch Dziekiewicz Dziekoń Dziemidok Dziemitko Dzieniak
    Dzierbicki Dzierga Dziergowska Dziergowski Dzieruk Dzierzba Dzierzbicka Dzierzbicki Dzierzęga Dzierżyk
    Dzieweczyńska Dziewicki Dziewiczkiewicz Dziewisz Dziewińska Dziewiński Dzilińska Dziliński Dzimińska
    Dziobiak Dzioboń Dziocha Dziodzio Dzionk Dziołak Dziubas Dziubczyńska Dziubecka Dziubecki Dziubiel
    Dziudzia Dziudziel Dziudzik Dziurkiewicz Dziurleja Dziurny Dziurok Dziurosz Dziurska Dziurski Dziwik
    Dziwnik Dzióba Dziółko Dziąbor Dziądziak Dziągwa Dziąćko Dzięcielewski Dziędzioł Dzięga Dzięglewicz
    Dziża Dzmitruk Dzundza Dzwoniarska Dzwoniarski Dzwończyk Dąbrowna Dąbrowny Dąchór Dądzik Dąga Dębowa
    Dębowiec Dętkoś Dłucik Długińska Długiński Długoborska Długoborski Długowski Dłutowska Dłutowski
    Dźwierzyńska Dźwierzyński Dźwigoń Dźwil Dźwilewski Dżbik Dżus Eberhardt Eckhardt Egeman Eichhorn Eichner
    Eisler Eismont Eitner Ejankowska Ejankowski Ejma Ejnik Ejsmond Ejzak Ekiel Ekonomiuk Elbin Elbruda Elend
    Eliks Elliott Ellis Ellmann Ellwardt Elmerych Elster Eluszkiewicz Elwertowski Emanowicz Eminov Ender
    Englisz Englot Erdem Erdmański Erdoğan Eremus Erenc Erfurt Erkiert Eron Erwardt Erwińska Estkowska
    Estkowski Eszer Etryk Ezman Fabczak Fabek Faberska Faberski Fabianowska Fabianowski Fabicka Fabicki
    Fabijańczuk Fabjan Fabjańczyk Fabrowicz Fabrycy Facon Fadrowska Fadrowski Fahl Fajczyk Fajga Fajgier
    Fajks Fajst Fajto Falandys Falbierska Falbierski Falecka Falecki Falewicz Faleńska Falis Falisz
    Falkenberg Faltin Faltynowska Fandrejewska Fandrejewski Fandrych Fang Farasiewicz Farbisz Farian Farkash
    Faroń Fassa Fasula Fatalska Fatalski Fatieieva Fatz Faust Fałdowski Fałdyga Fałdzińska Fałdziński
    Faściszewska Faściszewski Fecek Feculak Fedaruk Fedchyk Fedczyszyn Fedde Fedder Fedechko Fedeczko
    Fedejko Federak Fedio Fedkiv Fedków Fedosenko Fedosiuk Fedosova Fedro Feist Fejklowicz Felberg Felczuk
    Feld Feler Feliczak Feliś Feller Felskowska Felsmann Felsztyńska Felsztyński Feniuk Fenko Ferdzyn Fergon
    Ferguson Ferlewicz Fernando Ferrari Fersz Fertyk Fertykowska Fertykowski Feręc Feshchak Fester Fesyk
    Fesz Fetela Fetraś Fetta Fetter Fiał Fibakiewicz Fibic Fibik Fidecka Fidecki Fidera Fiderek Fidowicz
    Fidrysiak Fidyka Fiech Fiedorow Fiedosiuk Fiedurek Fiedziuk Fierke Fifer Fifielska Fifielski Figaszewska
    Figaszewski Figel Figielek Figielska Figielski Figlarek Figlon Figurniak Fihol Fijałkiewicz Filaber
    Filanowska Filanowski Filant Filc Filiciak Filik Filin Filinowicz Filipecka Filipecki Filipiński Filipow
    Filipów Filuba Filuciak Filut Filutowska Filutowski Fimiak Fingas Finger Finkelstein Finster Fiodarau
    Fiodor Firak Firka Firman Firosz Firsiuk Firsov Firsova Firsowicz Firus Fischbach Fisenko Fistek Fisun
    Fitek Fitel Fitowska Fitowski Fitoł Fitt Fituła Fityka Fitz Fitzner Fiącek Fiłka Fiłon Fiłończuk Flaczyk
    Flaczyńska Flaczyński Flaka Flakowicz Flanc Flaum Flazik Flejterski Fleszer Fletcher Flicińska Fliegner
    Flik Flisińska Flisiński Flisowska Flisowski Flitta Florecka Florecki Flores Florjańczyk Floryszczyk
    Foder Foerster Fogler Foj Foja Fojtar Fojtuch Fojud Fojuth Fojutowski Folaron Folmer Foltyniak Folęga
    Fons Ford Fordońska Fordoński Foremna Foremnik Forenc Foriasz Forkosh Fornol Forreiter Forst Fortas
    Foryszewski Foryta Fostacz Foster Foszczyńska Frajtag Frala Fralou Franciszczak Francke Francus
    Francuziak Franieczek Franka Frankiv Franuszkiewicz Frask Fraszek Frań Fredo Frei Frejno Frel Frela
    Frelas Frelichowska Frelichowski Freliga Frenkel Frenkiel Frenzel Freyer Friede Friedel Fritza Froelich
    From Fromm Froncz Fros Frołow Fruga Frunza Frunze Frużyńska Frużyński Fryczek Fryczkowska Fryczkowski
    Frydecka Frydecki Fryder Frynas Fryszka Frysztacka Frysztacki Fryta Frąckowska Frąckowski Frąsiak Fuczko
    Fuczyło Fufalko Fuksiewicz Ful Fular Fularska Fulko Fundakowska Fundakowski Fundanicz Funke Furch Furdak
    Furdykoń Furdzik Furgalska Furgalski Furmanchuk Furmańczak Fursewicz Fursov Fursova Furtok Fusek Fuszara
    Futro Fuśnik Fydryszewska Fydryszewski Förster Fąfera Gabas Gabiec Gabińska Gabiński Gaborska Gaborski
    Gabrielczyk Gabrylewicz Gabryluk Gabunia Gacal Gackiewicz Gackowiec Gacuta Gadalińska Gadaliński Gadoś
    Gadzicka Gadzicki Gaertner Gagatko Gagracz Gagua Gaicki Gajdak Gajdecki Gajdeczka Gajdulewicz Gajdur
    Gajdus Gajdzica Gajewy Gajiev Gajkoś Gajny Gajowik Gajór Galak Galan Galantowicz Galarda Galary Galbierz
    Galecka Galemba Galer Galert Galia Galicz Galios Galler Gallo Galowy Galuhn Gambiec Gambka Gamon Gamus
    Gancarska Gancarski Ganczarczyk Gandyk Gandyra Gandzel Gandziarowska Gandziarowski Gania Ganiek Ganita
    Gankiewicz Ganowicz Ganowska Ganowski Ganszczyk Garas Garb Garbaciok Garbalińska Garbaliński Garbela
    Garbolińska Garboliński Garbulińska Garbuliński Garbuz Garcarek Garda Gardaś Gardulska Gardyan Gardyński
    Gardziejczyk Gardziejewska Gardziejewski Gardzielik Gardzioła Garela Garkowska Garkowski Garlak
    Garlikowska Garlikowski Garmulewicz Garniec Garnuszek Garycka Garycki Garzeł Gasch Gashi Gasiewicz
    Gasparyan Gass Gast Gastołek Gaszczyńska Gaszczyński Gatkowski Gavrylenko Gawecka Gawecki Gawidziel
    Gawinkowska Gawinkowski Gawlina Gawlista Gawlita Gawlyta Gaworecka Gaworecki Gawrychowska Gawrychowski
    Gawrylak Gawąd Gazdecka Gazdecki Gazur Gazurek Gałajda Gałamon Gałaszewska Gałaszewski Gałgańska
    Gałgański Gałucha Gałuszewska Gałuszewski Gałęzewska Gałęzewski Gałęzia Gałęzki Gańcza Gańczorz
    Gaździcka Gdeczyk Gdela Gdesz Gdyk Gdynia Gebert Gediga Gehrmann Geiger Gejda Gejdel Geldner Gelert
    Geleta Gelmuda Gelo Gembała Gemra Genc Generowicz Gensler Genç Georgieva Gepfert Geras Gerega Gergont
    Gerhardt Gering Gerlic Germel Gertig Gerwel Geryk Geva Gełdon Ghale Gheorghe Ghosh Gibalska Gibalski
    Gibert Gibson Gibus Gicewicz Gidek Gidel Gidelska Gidelski Gidziela Giebień Gieda Giedo Giedrowicz
    Giegiel Gieglis Giela Gielar Gielarowska Gielarowski Gielecińska Gieleciński Gielniewska Gielniowska
    Gienieczko Gientka Gier Gieracka Gieracz Gierasiński Gierałka Gierba Giercuszkiewicz Gierejkiewicz
    Gierejko Gieremek Giereś Gierga Gierlasiński Gierlich Gierlińska Gierliński Giermak Giermasińska
    Giermańska Gierok Giertler Gierusz Gieruszczak Gierzyńska Gierzyński Giesek Gietek Giezgała Giełdoń
    Gigauri Gigla Gilbert Gilge Gilicka Gilicki Gilla Gillmeister Gilska Gilski Gimel Gimińska Gimiński
    Ginko Gintrowicz Gipsiak Giszczyńska Giszczyński Giszka Gizara Gizdoń Gizela Giziewicz Giętka Giętkowska
    Giś Giżka Glacel Glados Glajcar Glajzner Glanda Glass Glaz Gleb Gleich Gleinert Glich Glicner Gliga
    Glimos Gliniany Glinicka Glinicki Glinko Glock Glombica Glondys Glowania Glubiak Gluma Glushchenko Glück
    Gmitrzak Gmys Gnacek Gnach Gnas Gnatiuk Gnatkowski Gneba Gnela Gniba Gnielka Gniełka Gniotek Gniła Gnus
    Gnypek Gocejna Goceł Gocha Gochna Gocko Gockowiak Gocoł Gocyk Godawska Godawski Godecki Godniak Godoj
    Goga Gogia Gogitidze Gogler Gogoc Gogokhia Gogołkiewicz Goguła Goińska Goiński Gojowczyk Gojowy Golara
    Golasa Golatowski Golbiak Goldsztajn Golembka Golicka Golicki Goliwąs Goljan Goljasz Goljat Golomb
    Golwiej Gonchar Gonda Gonder Gonek Gonerska Gonerski Goniewicz Gonkiewicz Gontarczuk Gonzales Gorbenko
    Gorczak Gorczewska Gordiienko Gordziejewska Gordziejewski Goren Gorgadze Gorgiel Gorla Gorlicka Gorlicki
    Gorobets Goroński Gorska Goryniak Gorzałka Gorzelana Gorzelniak Gorzelska Gorzelski Gorzoch Gorzolnik
    Gorzyńska Gorzyński Gorządek Gorzędowska Gorzędowski Gospodarowicz Gostkiewicz Goszczyk Gotowalska
    Gotowalski Gotter Gottschling Gottwald Gotwald Gotówka Gotówko Gowkielewicz Gozdalski Gołasiewicz Gołasz
    Gołdas Gołdon Gołdy Gołdych Gołdyka Gołecka Gołecki Gołembka Gołowicz Gołubowska Gołubowski Gołucka
    Gołucki Gołuszko Gołuzd Gołyga Gołygowska Gołyska Gołyski Gołyński Gołza Gołąbiewska Gołąbiewski
    Gołębczyk Gołębiak Gołębicka Gołębicki Gołębiewicz Gołębniak Goń Gościańska Gościański Gościewska
    Gościewski Gościniewicz Gościło Gość Goździaszek Goździela Grabiak Grabianowski Grabinski Grabiszewska
    Grabiszewski Grabiwoda Grabolus Grabosz Grabowa Grabus Grabuś Gracek Gradkowska Gradkowski Gradomski
    Gradys Gradzi Grajdura Gralczyk Gramek Gramsz Granatowska Granatowski Grancea Graniczna Granis Granos
    Granowska Granowski Grapa Graszkiewicz Gratka Grażewicz Grażul Grechuta Greczkowska Gredes Gredys Grefka
    Grefling Greif Grekowicz Grelewska Grell Grelus Gren Grendus Greszkiewicz Gretkierewicz Griffiths Grill
    Grinholc Grobara Groblicka Groblicki Grobys Grochała Grochecki Grochowiecka Grochowiecki Grodkowski
    Grodnicka Grodny Groele Groen Groenwald Grolewska Grolewski Gromacka Gromacki Gromadowska Gromadowski
    Gromak Groman Gromaszek Gromczak Gromke Gromkiewicz Gromnicka Gromnicki Gromny Gronau Gronert Gront
    Grosch Grossman Grotha Grotkiewicz Gruchociak Grudek Grudniewicz Grudny Grudzka Grulkowska Grum Gruna
    Grunert Gruntkowska Gruntkowski Grupińska Grupka Grusiecka Gruss Gruszko Gruziel Grycaj Grychowski
    Grychtolik Grycza Gryczman Grygas Grygianiec Grygielewicz Grygielska Grygielski Grygieńć Grygny Grygutis
    Gryguś Grykałowska Grykałowski Gryla Grynda Grynienko Gryniuk Grysak Gryshchenko Gryszczuk Gryszówka
    Grytsenko Gryzełko Gryziec Gryżewska Gryżewski Grzana Grzebielec Grzebieniowska Grzebieniowski Grzebska
    Grzebski Grzechca Grzechowski Grzechynka Grzeganek Grzegowska Grzegowski Grzegółka Grzelachowska
    Grzelachowski Grzelik Grzella Grzeluk Grzemba Grzempowska Grzempowski Grzenkowska Grzenkowski
    Grzesiowska Grzesiowski Grzeszcz Grzeszczyszyn Grzeszuk Grześka Grześkowicz Grześniak Grzybała Grzybicka
    Grzybkowska Grzybkowski Grzych Grzyl Grzymisławska Grzymisławski Grzywka Grzywok Grzyś Grząbka
    Grządzielewska Grządzielska Grząś Grzębska Grzębski Gródecka Grüner Grądecki Grążawska Grążawski
    Grębowska Grębowski Grępka Gręzak Gręźlikowska Gręźlikowski Gu Gubiec Gucma Gucze Gudajczyk Gudalewska
    Guder Gudewicz Gudzik Guenther Guglas Gugnacka Gugnacki Gugulska Gugulski Gujski Guk Gulajew Gularek
    Gulbierz Gulbińska Gulbiński Gulis Gulko Gulska Gulski Gumul Gumulińska Gumuliński Gumulska Gumulski Gur
    Gural Gurban Gurbin Gurga Gurgielewicz Gurok Gurowiec Guroś Gurtatowska Guryn Gurynowicz Gus Guse
    Guseinovi Gussmann Gustafsson Gustof Guszczak Guszkiewicz Gutka Gutowicz Gutsche Guzanek Guziałek
    Guzierowicz Guzina Guzmann Guńka Guźla Guźlińska Guźliński Gużda Guțu Gvasalia Gwiozda Gwizdal
    Gwizdalski Gwiździel Gwozda Gwozdowska Gwozdowski Gzel Gzula Gzyra Gólczyński Górajczyk Górajek Górawska
    Górawski Górazda Górewicz Górkowska Górkowski Górlicka Górlicki Górnikowska Górnikowski Górnioczek
    Górowicz Górszczak Górzan Górzkowska Górzkowski Götz Gül Güneş Güngör Güven Güzel Gąciarek Gądor Gądziak
    Gągor Gąsak Gątarska Gątarski Gątkowska Gębarska Gębarski Gębica Gęborek Gędoś Gędźba Gęsich Gęsty
    Gładczak Gładecka Gładoch Gładun Gładysiewicz Gładzik Głazek Głochowiak Głodo Głogosz Głomska
    Głowaczewski Głośny Głuchaczka Głuchowicz Głuszczuk Głuszyńska Głuszyński Głyżewski Głów Głąba Głąbiak
    Głębowska Głębowski Gűnther Haberko Haberny Habet Habib Habieda Haborak Habraszka Habryło Hachaj Haciuk
    Haczela Haczykowska Haczykowski Hadacz Hadyński Hadław Hagedorn Hagel Hagen Haglauer Hagno Haidaienko
    Haidamaka Haider Haiduchyk Haivoronska Hajbos Hajdacka Hajdaś Hajdenrajch Hajducki Hajdul Hajdun Hajduś
    Hajiyev Hajkiewicz Hajko Hajman Hajnas Hajzer Hajłasz Hakh Hakman Halaba Halamoda Halavach Halaś
    Halbiniak Halchuk Halec Halenko Haleta Halii Halińska Haliński Haliżak Haller Halski Haluza Hamadyk
    Hamczyk Hamer Hamielec Hamot Hampf Hamulska Hamulski Hanaj Hanchar Hancharou Hancharuk Hanczaruk
    Hanczewska Handel Hanf Hangiel Haniaczyk Hanik Hanisch Hanka Hanko Hanna Hansson Hansz Hantke Hanulok
    Hanusik Hapanowicz Hapeta Haponov Haponova Hapoń Haptaś Harasymiv Harań Harbarchuk Harbaruk Harbat
    Harcej Harchut Hardek Hardyn Harel Haremska Haremski Hareńczyk Harkava Harkavyi Harlejczyk Harmacińska
    Harmaciński Harmasz Harmider Harnasz Harsze Hartabus Hartel Hartlieb Harvey Harwat Harwig Harych Hasek
    Hasińska Hasiński Hatka Hatlaś Hats Hatsenko Haupa Hauschild Havryk Havrylchyk Havrylko Havryshko Hawran
    Hawranek Hawrylewicz Hawrysz Hawryłkiewicz Hawryś Haznar Hazy Hałabiś Hałabuda Hałada Hałajczak Hałaś
    Hałdys Hałek Hałub Hałubek Hałubiec Hałuszko Hałuza Hańćkowiak Haśko Hebisz Hec Heder Hedrych Heflik
    Heft Hefta Hegenbarth Heidenreich Heigelmann Heimowski Heine Heinich Heisig Hejczyk Hejmanowski Hejza
    Hek Hekert Hekiert Heland Helbig Held Heleta Helicka Helicki Heliniak Helit Helmin Helta Helwin
    Hemerling Henczel Henderson Hendrich Hendrys Henig Henkelman Henry Henschel Henszel Henszke Hentschel
    Hepa Herasimchyk Herasimova Herasimovich Herasymovych Herbert Herbet Herbin Hercka Herczyńska Herczyński
    Herduś Herdzin Hereta Heretyk Hereć Herisz Hermanovych Hermasz Hernacki Herner Hernet Heron Heronimek
    Herta Hertmanowska Hertmanowski Herun Hetel Hetka Hetmanchuk Hetmaniok Hetmanowska Hetzig Hewig Heyda
    Heyer Heyka Hezner Hećko Hibszer Hickiewicz Hiero Higgins Hila Hilevych Hilger Hille Himel Hincka
    Hinzmann Hipnarowicz Hirny Hirnyk Hirszfeld Hirth Hladchuk Hladkova Hladkykh Hlavatskyi Hlukh Hlukhova
    Hlushchak Hnatko Hnidenko Hnidets Hnyp Hober Hochel Hochół Hoczek Hodera Hodunko Hodura Hodyl Hodyna
    Hodór Hofbauer Hoffer Hofmańska Hogiel Hoida Hoim Hoinca Hoinkis Hojdak Hojeńska Hojeński Holas
    Holdenmajer Holec Holenko Holets Holiak Holikova Holinei Holla Holland Holm Holmes Holodiuk Holonko
    Holovanova Holovashchenko Holovatenko Holovatska Holubets Holubnycha Holweg Holwek Homziuk Honcharyk
    Honhalo Honkowicz Hontarenko Hontaruk Honysz Hopcia Hopej Hopkowicz Hoque Horab Horaczy Horanin
    Horbachenko Horbachuk Horbanowicz Horbowicz Horbowiec Horbyk Horda Hordyj Hordyńska Hordyński Horecka
    Horecki Horeczy Horenko Horetska Horetskyi Horka Horla Horniatko Horobchuk Horodyński Horojdko Horokh
    Horokhova Horpynych Horshkov Horshkova Horska Horun Horyn Hosaja Hosaniak Hoshovska Hoshovskyi Hosiawa
    Hossen Hosz Hots Hovdi Hovorukha Hovorun Hovsepyan Howard Hoxha Hoza Hołdak Hołderny Hołodniuk Hołojuch
    Hołomek Hołoweńko Hołowiak Hołowiecka Hołowiecki Hołoś Hołubiuk Hołys Hołyszko Hońca Hońdo Hońko
    Hościłowicz Hrabchak Hrabko Hrabova Hrabovetska Hrachov Hramyka Hreben Hrechana Hreshchuk Hristova
    Hromiak Hruba Hrushetska Hrushka Hruszka Hruzik Hryban Hrycaniuk Hrydziuszko Hryha Hryhoriak Hryhoriv
    Hryhorychenko Hrymak Hrynczyszyn Hrynda Hryniewska Hryniewski Hryshkevich Hrytsevych Hubala Hubanova
    Hubczyk Hubenia Hubin Hubina Hubko Hubskyi Hucaluk Huculak Hudela Hudzińska Huivan Hukałowicz Hukiewicz
    Hulanicka Hulek Hulenko Huliaiev Hulii Huliuk Hulka Hull Humbla Humenchuk Humienna Humienny Humin Humska
    Hunchak Hundert Hundt Hunger Hunter Huptas Huptyś Hurenko Hurieva Hurman Hurny Hurov Hurtova Hurynovich
    Hurysz Huryń Husarek Husarova Husejko Huska Huszaluk Huszczo Huszno Hutman Hutna Huts Hutsalo Huzarewicz
    Hvozd Hvozdetska Hvozdyk Hyb Hybner Hybsz Hyclak Hypka Hypś Hyrc Hyrczyk Hyrenko Hyrnik Hyrych Hyszko
    Hytrek Hyżak Hyżorek Hà Hącia Hładczuk Hładka Hłasko Hławiczka Hłond Ibragimova Iciak Idaczyk
    Idziaszczyk Idzińska Idziński Igel Igleniec Ignar Ignatenko Ignerowicz Ignor Ikier Ikoniak Iks Iksal
    Ikwanty Ilczyna Ilewicz Iliashenko Ilieva Iliushchenko Ilić Ilińska Iliński Ilkowska Ilkowski Ilnitska
    Ilukowicz Ilyin Ilyk Imanov Imielińska Imińska Imiński Imran Indycka Indycki Iremadze Irski Isaeva Isak
    Ishchyk Isko Iskrzak Iskrzyńska Iskrzyński Islamov Ismoilov Issa Istomina Iszczek Isztok Itczak Ivakh
    Ivakhiv Ivanchyk Ivanishyn Ivanitskyi Ivanovych Ivantsova Ivashkevych Ivasyshyn Ivko Ivlieva Ivzhenko
    Iwanecka Iwaneczko Iwanicz Iwanik Iwanisik Iwankiewicz Iwanus Iwasiuk Iwaszczyszyn Iwaszuk Iwaśków Iwoła
    Iwulska Iwulski Izba Izbaner Izhyk Izotov Izotova Izydorczak Izydorska Izydorski Iłczyk Iłowiecka
    Iłowiecki Iłowska Iłowski Işik Iżak Iżewska Iżewski Jablonski Jaborska Jabs Jabłczyk Jabłeka Jachimski
    Jachniak Jachnicka Jachorek Jachtoma Jachymska Jachymski Jaciów Jacolik Jacukowicz Jacuniak Jacyk Jaczun
    Jadasz Jadwisieńczak Jadwiżyc Jadzińska Jaeger Jagiella Jagiełko Jagucka Jagucki Jagustyn Jagóra Jagło
    Jahnz Jajus Jakima Jakimcio Jaklewicz Jaklik Jakosz Jakowczyk Jakowicka Jakowicki Jakowiec Jakowlew
    Jakrzewska Jakrzewski Jaksim Jakubanis Jakubicz Jakubina Jakubiszak Jakusz-Gostomski Jakuszczonek
    Jamioła Jamorska Jamorski Jamrozek Jan Janakowska Janakowski Jancelewicz Jancy Janczulewicz Janczyn
    Jandała Jander Jandzińska Jandziński Janecko Janewicz Janicz Janiel Janikula Jankosz Jankowy Jannasz
    Janora Janssen Janta-Lipińska Janta-Lipiński Janulek Januszak Januszanis Januszka Janysek Janyszek
    Jarawka Jaremba Jaremczak Jaremkiewicz Jargan Jarkulisz Jarmakowska Jarmakowski Jarmarczyk Jarmolik
    Jarmosz Jarmoszewicz Jarmoszuk Jarmołowska Jarmołowski Jarmuziewicz Jarmużewska Jarmużewski Jarnicka
    Jarnicki Jarochowicz Jarociński Jaroniek Jaroszczuk Jarotek Jarzemska Jarzemski Jarzina Jarząbkiewicz
    Jarzębiak Jarzębowicz Jarzęcka Jarzęcki Jasiaczyk Jasianek Jasieniak Jasieńczuk Jasiniak Jasinska
    Jasiocha Jasiorowska Jasiorowski Jaskiernia Jaskierny Jaskulak Jastak Jasyk Jasz Jaszczerski
    Jaszczurowska Jaszczurowski Jaszczułt Jaszuk Jaszul Jaszyk Jaworecka Jawornicka Jawornicki Jazdończyk
    Jazienicki Jazy Jałbrzykowska Jałbrzykowski Jałosińska Jałosiński Jałowska Jałowski Jańta Jaślan
    Jaślanek Jaźwiecka Jaźwiecki Jechalik Jeczeń Jedlecka Jedlecki Jednorowska Jednorowski Jedwabna
    Jedwabnik Jedwabny Jedynasty Jedynowicz Jedyńska Jedyński Jefimow Jegorow Jelak Jeleszuk Jeleśniańska
    Jeleśniański Jenczak Jenczmionka Jendernal Jendernalik Jendras Jendrasik Jendryca Jendryczka Jendryczko
    Jendrzejek Jenerowicz Jeniec Jenkins Jenkner Jenta Jernaś Jersz Jerszyńska Jerszyński Jeruzalska
    Jeruzalski Jerz Jerzmanowska Jerzmanowski Jerzyna Jewtuch Jezierna Jezierny Jeziorkowska Jeziorkowski
    Jeziórska Jeziórski Jeł Jeżewicz Jintcharadze Jo Joachim Jobs Jochacy Jochemczak Jodełko Jodzis Johansen
    Johna Johnston Jojua Joka Jokel Jona Jonaszek Jonatowska Jonienc Jonko Joschko Josek Jowik Jowsa Joy Joć
    Jucewicz Juchimowicz Juhnke Juja Jukowska Jukowski Juma Junczyk Junger Junke Junkier Junko Juralewicz
    Jurałowicz Jurcaba Jurczewska Jurczewski Jurczykowska Jurczykowski Jurdzińska Jurdziński Jurgawka
    Jurgilewicz Jurgowian Jurguć Jurkojć Jurkun Jurochnik Jurowczyk Juryniec Jurzyca Jurzyńska Jurzyński
    Jusiewicz Jusis Jusza Juszczakiewicz Juszcze Juszka Juzaszek Juzba Juziuk Juzoń Juzwiszyn Jułkowska
    Juńczyk Juńska Juścińska Juściński Juśkowiak Juźków Jórdeczka Józefaciuk Józefacka Józefacki Józefiok
    Józefkowicz Józkowicz Józwicka Józwicki Józwowicz Jóśko Jóźwin Jørgensen Jączyk Jąderko Jądrzyk
    Jęczkowska Jęczkowski Jęderko Jędo Jędrasiewicz Jędrejko Jędrek Jędroszka Jędrycha Jędrychowicz
    Jędryszka Jędrzejaszek Jędrzejczuk Jędrzychowska Jędrzychowski Jęksa Jęsiak K|C Kaba Kabaja Kaban
    Kabanov Kabanova Kabara Kabulska Kabulski Kacalak Kachaniuk Kachelska Kachelski Kachmaryk Kachura
    Kaciupa Kacperkiewicz Kacprzykowska Kacprzykowski Kacprzyńska Kacprzyński Kacwin Kacy Kacza Kaczalska
    Kaczalski Kaczara Kaczerski Kaczkan Kaczmara Kaczmaryk Kaczmarzewska Kaczmarzewski Kaczyk Kadaj Kadamus
    Kadelska Kadelski Kadirov Kadlec Kado Kadylak Kadzińska Kadziński Kadłubiec Kaganek Kaganiec
    Kagankiewicz Kahan Kahraman Kainka Kajdanek Kajdanowicz Kajder Kajdy Kajdzik Kajtaniak Kajtek Kajtoch
    Kakhidze Kakiet Kakowska Kalabis Kalach Kalamon Kalamus Kalashnik Kalawska Kalawski Kalenda Kalenska
    Kalenyk Kalesnik Kaliberda Kaliczak Kaliga Kaliniewicz Kalinko Kalinovska Kalinovskyi Kalishchuk
    Kaliszczuk Kaliszyk Kalitowska Kalitowski Kaliukh Kaliuta Kaliwoda Kallus Kalotka Kaluhin Kaluhina
    Kalużna Kalużny Kalwarczyk Kalwik Kalwinek Kalynchuk Kalyniak Kalynovska Kalytiuk Kamaj Kamal Kamasa
    Kamasz Kamańczyk Kamel Kamelski Kamenchuk Kamieniorz Kamin Kamionek Kamionowska Kamionowski Kamler
    Kammer Kamocka Kampik Kamrad Kamrat Kamycka Kamycki Kamykowska Kamykowski Kan Kanach Kanafek Kananovich
    Kanarski Kancelista Kancerek Kandel Kandratsenka Kandratsiuk Kandzior Kaniasty Kanikuła Kanior Kaniuga
    Kaniut Kanonik Kant Kantecka Kantecki Kantorowska Kantorowski Kap Kapcińska Kapciński Kapecka Kapecki
    Kapelak Kapelańska Kapelański Kapelewska Kapelewski Kapelska Kapelski Kapeluszna Kapeluszny Kapis
    Kapitaniak Kapitula Kapińska Kapko Kapliński Kaplyta Kapol Kapruziak Kapszewicz Kapushchak Kapustian
    Kapustin Kapustynska Kapuła Kapuśnik Kapłanek Kapłaniak Kapłoński Kapłun Karabulut Karabut Karaca
    Karaczyn Karaev Karaim Karakaya Karakula Karaliou Karaluch Karandys Karapetian Karashchuk Karasov
    Karasova Karasz Karataş Karatkevich Karaush Karavan Karczmar Kardasiewicz Kardasiński Kardava Kardyka
    Karendał Karepin Kareta Karge Kargól Karkhut Karkosik Karkusiewicz Karlicka Karlicki Karmazin Karmiński
    Karna Karnecki Karniej Karny Karnówka Karos Karowska Karowski Karpiarz Karpicz Karpina Karpinets
    Karpyshyn Karst Kartal Kartashova Karulak Karut Karwalski Karwaszewska Karwaszewski Karwińska Karwiński
    Karykowska Karykowski Kas Kasa Kasela Kashchenko Kasieczka Kasiedczak Kasik Kasior Kasiuba Kasjanowicz
    Kask Kasolik Kasowicz Kaspera Kaspiarovich Kasprolewicz Kasprzyca Kasprzyczak Kasprów Kastek Kastrau
    Kastsiukevich Kaszczyk Kaszczyńska Kaszczyński Kaszewiak Kaszluga Kaszper Kasztan Kasztelewicz Kaszuwara
    Katarzyniak Katkowska Katrycz Kauch Kavetska Kavka Kavtaradze Kawałkiewicz Kawczyk Kayser Kazantsev
    Kazantseva Kazarian Kazimierek Kazimierowska Kazimierowski Kazimov Kazirodek Kaziszyn Kazlouskaya
    Kazmierczak Kaznocha Kazub Kałamaga Kałamaja Kałamajska Kałasa Kałczak Kałdon Kałdowska Kałdowski
    Kałduńska Kałduński Kałmucka Kałmucki Kałmuczak Kałwińska Kałwiński Kałążny Kałędkiewicz Kańkowski
    Kaślewicz Kaźmierowicz Kaźmirek Kaźnica Kecler Keczmerski Keda Keil Kejna Kelman Kemona Kemp Kempf
    Kempys Kemska Kemski Kendyś Kendzierski Kendziora Kepka Keren Kerimov Kerl Kesling Kesner Khakimov
    Khalid Khamidov Khamula Khanal Khanenko Kharechko Kharel Kharenko Kharina Khariv Kharkevych Kharlamov
    Khatsko Khaydarov Khilchenko Khlystun Khmaruk Khmelevska Khmeliuk Khmelnytska Khmelnytskyi Khodan Khodos
    Khomchenko Khomiakova Khomiuk Khomko Khorolska Khozrevanidze Khrapach Khuda Khudiakova Khudolii
    Khurtsidze Khurtsilava Khvostenko Khylchuk Kibała Kibitlewski Kibysh Kicak Kicek Kiczkajło Kiczko Kiczuk
    Kidaj Kidziak Kiecak Kiecko Kiedrzynek Kiedrzyńska Kiedrzyński Kiek Kielas Kieliszak Kielmann Kielusiak
    Kienast Kieplin Kiera Kieraga Kierakowicz Kierc Kiercz Kierczuk Kierczyńska Kierczyński Kierlik Kierszk
    Kieruczenko Kierus Kierył Kierzk Kierznikowicz Kiewicz Kiewlak Kieza Kiełbas Kiełbaska Kiełbicka
    Kiełbicki Kiełboń Kiiko Kijaczko Kijańska Kijański Kijoch Kijonka Kijora Kikla Kikolska Kikolski Kikta
    Kiladze Kilańczyk Kilich Kilijan Kilimnik Kilinç Kiliszewska Kiliszewski Kilkiewicz Kilkowska Kilkowski
    Kimbar Kimborowicz Kimsa Kindra Kinecka Kinecki Kiniorska Kiniorski Kiona Kiołbasa Kipczak Kipen Kiria
    Kirieieva Kirschenstein Kirszling Kirylczuk Kiryła Kiryło Kiryłowicz Kiser Kish Kishchak Kishko
    Kisialiou Kisicka Kisicki Kisio Kisz Kiszczuk Kiszewska Kiszewski Kiszkurno Kitkowska Kitowicz Kiwacka
    Kiwic Kiwilsza Kiwus Kiziak Kiziuk Kizner Kić Kińczyk Kiśluk Kiżuk Klaba Klabacha Klaban Klach Klacza
    Klaczkowski Klafta Klahs Klajmon Klamra Klank Klapczyńska Klapczyński Klapuch Klarenbach Klarzyńska
    Klarzyński Klass Klasura Klasło Klatkiewicz Klaudel Klauz Klauziński Klawe Klebaniuk Kleber Klec Klech
    Klechowicz Klefas Kleiner Kleisa Klejbuk Klejka Klejman Klejment Klejn Klejnot Klejsa Klek Klemarczyk
    Klemenska Klemke Klempert Klepach Kleparska Klepczyk Kleps Kler Kleska Klesyk Kleszko Kleszowski Klets
    Klewicz Klichowska Klichowski Kliczkowska Klimańska Klimański Klimeczko Klimonda Klimovych Klimuszko
    Klinder Kling Klingenberg Kliniewska Kliniewski Klinkusz Klisik Klisko Kliszczak Kliuchka Kliuchko
    Kliuiev Kliuieva Klockiewicz Klockowska Klockowski Klosek Kloske Kloss Klots Klub Klubek Kluczniak Kluf
    Klukiewicz Klupsch Klupsz Klusa Klusak Kluszczyk Kluwak Kluziński Klymov Klymova Klymuk Klój Klębowska
    Klębowski Klęka Kmietowicz Kmiećkowiak Kminikowska Kmon Knajp Knapiuk Knappe Knauer Kneba Kniazevych
    Kniaziev Knight Knioch Kniotek Knoblauch Knopczyk Knopf Knopkiewicz Knosała Knowa Ko Kobacka Kobakhidze
    Kobalia Kobienia Kobierzycka Kobierzycki Kobiołka Kobis Kobińska Koblańska Koblański Kobosko Kobroń
    Kobryńska Kobryński Kobryś Kobrzak Kobylarek Kobylas Kobylecki Kobylnik Kobyra Kobyłczyk Kobyłt Kobzda
    Kocaba Kocek Kocent Kocerka Kocełuch Kochaj Kochaniewicz Kochanik Kocherhan Kochetkova Kochoń Kochura
    Kochut Kochutek Kociel Kocieniewska Kocieniewski Kocisz Kociuga Kocyan Kocyło Koczenasz Koczewska
    Koczewski Koczeń Koczoń Koczuk Kocząb Kodzik Koehler Kofel Kogutek Kohn Koim Kojak Kojzar Kokhaniuk
    Kokocha Kokorniak Kokorzycka Kokorzycki Kokoszanek Kokoszczyk Kokoszewska Kokoszewski Kokoszyński Kokoć
    Kol Kola Kolaczek Kolaniak Kolanoś Kolany Kolbe Kolebacz Koleczko Koleda Kolej Kolekta Kolender Koler
    Kolesnychenko Kolibska Kolibski Koliesnikov Koliesnikova Kolimaga Kolloch Kolmaga Kolmas Kolmasiak
    Kolmer Koloczek Koloda Kolodiazhnyi Kolodka Kolondra Kolosek Kolosovska Kolosovskyi Kolot Kolpakova
    Kolter Koltsov Koltsova Koltun Koma Komala Komarenko Komasara Komańska Komański Komendant Komendarczyk
    Komendarek Komiażyk Kominko Komisar Komisarska Komisarski Komisaruk Komkowska Komkowski Komoda
    Komodzińska Komodziński Komolka Komornik Komoszyńska Komoszyński Kompanowska Kompanowski Konarkowska
    Konarkowski Konaszczuk Konatowska Konatowski Konciak Koncki Koncur Konczak Konczal Kondela Kondla Kondoł
    Kondrashov Kondysiak Kondzielnik Kondzioła Koneszko Koniczuk Konieckiewicz Koniewicz Konikiewicz
    Koniorczyk Koniukh Koniushenko Koniuszek Konkiewicz Konko Kononets Konopczak Konopek Konopelko
    Konopielko Konotop Konovaliuk Konowalczuk Konsik Konstańczak Kontna Kontsevych Konwicka Konwicki
    Kopaczel Kopańko Kopcewicz Kopciak Kopciara Kopcych Kopernik Kopica Kopieniak Kopiika Kopijka Kopot
    Kopowska Kopowski Koprucka Kopryk Koptas Koptoń Koptyra Kopystyńska Kopytsia Kopówka Korbacz Korbaś
    Korch Korchynskyi Korcipa Korczek Korczykowska Korczykowski Kord Kordalewska Kordalewski Kordasz Kordaś
    Kordulewska Kordulewski Korduła Kordy Kordykiewicz Kordylasińska Kordylasiński Kordysz Kordzikowska
    Kordzikowski Kordzińska Kordziński Korenik Koreniuk Korgel Korinets Korinth Korjat Korkh Korkiewicz
    Korkishko Kormylo Kornel Korneć Korniat Kornicka Kornieiev Kornieva Korniewicz Kornilov Kornilova
    Korniłowicz Korobchuk Korobczuk Korobova Korolevych Koronowicz Korop Korotenko Korotkyi Korotun Korotych
    Korowajczyk Korpacka Korpacki Korpanty Korpikiewicz Korpok Korporowicz Korput Korpys Korpyś Korsan
    Korshun Kort Kortyka Koruch Korwin Korybska Korybski Koryluk Korynt Koryto Koryzma Koryzna Korza
    Korzańska Korzep Korzepa Korzeńska Korzhenko Korzhova Korzonkiewicz Korzunowicz Korzyniewska
    Korzyniewski Korzyńska Korzyński Korólczyk Korż Korżyńska Korżyński Kosacz Koshelenko Koshelieva
    Koshelnyk Kosheva Koshil Kosianchuk Kosiara Kosiarz Kosiecka Kosiecki Kosiela Kosiniak Kosiorkiewicz
    Kosiło Kosmaczewski Kosmecka Kosmecki Kosmyna Kosnowicz Kosok Kosonóg Kosova Kosovska Kosovych Kossewski
    Kosteczko Kosterski Kostiukova Koston Kostov Kostowska Kostowski Kostruba Kostrytsia Kostrzanowska
    Kostrzanowski Kostrzeba Kostrząb Kostrzębska Kostucha Kosturkiewicz Kostycz Kostyniuk Kostyria Kostyrka
    Kostyuk Kostępska Kostępski Kosubek Kosyra Koszara Koszarna Koszarny Koszałko Koszko Koszlaga Kosztowna
    Koszycka Koszycki Kotalczyk Kotasińska Kotasiński Kotelevets Kotelon Koterla Koterwas Kotiai Kotiuszko
    Kotko Kotkowiak Kotkowicz Kotleszka Kotliarov Kotniewicz Kotomska Kotomski Kotovskyi Kots Kotsan Kotsar
    Kotul Kotulla Kotur Kotvytska Kotwasiński Kotyczka Kotz Kovacs Kovba Kowalczykowska Kowalczykowski
    Kowalew Kowalikowska Kowalkiewicz Kowalko Kowanda Kowarska Kowańdy Kowcun Kowgier Kowiel Kowina
    Kowszewicz Koy Kozacka Kozacki Kozaczkiewicz Kozaczyński Kozala Kozarska Kozarski Kozaryna Kozela
    Kozelan Kozhevnikova Kozhokar Kozibroda Koziel Kozieradzka Kozieradzki Kozierkiewicz Koziełek Kozieńska
    Kozieński Kozij Kozin Kozior Kozlovets Kozos Kozoń Kozubenko Kozyk Kozyriev Kozyrieva Kozłecka Kozłecki
    Kozłow Koçak Kołaczkiewicz Kołada Kołder Kołdon Kołodzik Kołosza Kołoszko Kołowrocka Kołowrocki Kołowska
    Kołowski Kołpacki Kołtko Kończalska Kończalski Kończewska Kończewski Końko Kościańczuk Kościej
    Kościkiewicz Kościołowska Kościołowski Kośkiewicz Kośko Koślińska Kośliński Kośmieja Kośna Koźbiel
    Koźlińska Koźliński Koźmic Koźniewska Kożan Kraczaj Kraczla Kraievska Kraievskyi Krain Krajczewska
    Krajczewski Krajczok Krajczyk Krajna Krajniewska Krakos Krall Kralska Kralski Kramp Kramski Krankiewicz
    Krasek Krasiejko Krasieńko Krasinkiewicz Kraskowska Kraskowski Krasnikov Krasniqi Krasniuk Krasnokutska
    Krasnoshchok Krasnozhon Krasula Krasulak Krasówka Krautsou Kravchenia Kravchyshyn Krawczewska
    Krawczewski Krawczonek Krawczun Krawul Krawętek Krawętkowska Krawętkowski Krać Kraśner Kraśniak Kraśnik
    Krechko Krechowicz Krecz Kreczmański Krejza Kremza Kremzer Krenca Krenska Krenski Krent Krepel Kreps
    Kretschmann Kreńska Kreński Kriachko Kriese Kriesel Kripak Kriuchkov Krobska Krobski Kroczyk Krohn
    Krolik Kromołowska Kromrych Kronenberg Kropa Kropaczewska Kropaczewski Kropidło Kropiwiec Kropińska
    Kropiński Kropka Kropkowska Kropop Kropp Kropska Kropski Kropyvnytska Kroshka Krosman Krosnowska
    Krosnowski Kroszka Krotiuk Krotoszyński Krowiarz Krowińska Krowiński Krubnik Kruchok Krucińska Kruciński
    Krucka Krucki Kruczak Kruhlii Kruhlik Kruhlova Krukowicz Krulak Krulik Krulikowski Krumin Krupczyńska
    Krupczyński Krupenko Krupiarz Krupicka Krupicki Krupicz Krupych Krushelnytska Krushelnytskyi Krusiec
    Krusik Krusz Kruszniewska Kruszniewski Kruszyniak Krutii Kruts Kruźlak Krychniak Krychowska Krychowski
    Krychun Kryda Kryg Krymer Krynda Krypa Krypciak Krysicka Krysicki Krystaszek Krystel Krystians
    Krystowczyk Krystoń Kryszajtys Kryszeń Kryszpin Krysztopowicz Kryta Krytskyi Kryus Kryvda Kryvobok
    Kryvosheiev Kryvosheieva Kryvych Kryvytska Krywald Krywalska Krywalski Kryścio Krzek Krzemianowska
    Krzemianowski Krzemieniecki Krzemkowski Krzemyk Krzeptowski Krzesicka Krzesicki Krzeska Krzeski Krzon
    Krzosa Krzycka Krzycki Krzymyk Krzyna Krzypkowska Krzypkowski Krzystolik Krzystoń Krzyształa
    Krzysztoforska Krzysztoforski Krzysztonek Krzywak Krzywaźnia Krzyważnia Krzywniak Krzyworączka
    Krzyzińska Krzyziński Krzyżanowicz Krzyżkowiak Krzyżkowski Krzętowska Krämer Królewiak Królewski Królski
    Krótka Krąpiec Krąż Krążała Krążyńska Kręcicka Kręcicki Kręcidło Kręciewski Krępic Krępska Krępski
    Kręźlewicz Kseń Ksit Ksiuk Ksiąg Księżniakiewicz Księżyc Ksoll Ksoń Ksyt Kubach Kubacha Kubacik Kubacz
    Kubajewska Kubajewski Kubalewska Kubalewski Kubasińska Kubata Kubała Kubeczka Kubejko Kuberczyk Kuberek
    Kubiczak Kubiela Kubinek Kubiniec Kubinka Kubisty Kublicka Kublicki Kubocz Kubon Kubosz Kubryń Kubulus
    Kubusiak Kucak Kucel Kucemba Kuceł Kucharzyszyn Kuchczyńska Kuchczyński Kucheriavenko Kucherova
    Kuchynski Kuciapska Kuciapski Kuciejczyk Kuciemba Kuciewicz Kuck Kucka Kucki Kucper Kuczawska Kuczkowicz
    Kuczmarz Kuczmik Kuczmińska Kuczmiński Kudala Kudan Kudasik Kudaszewicz Kudaś Kuderczak Kudeń Kudina
    Kudinov Kudlai Kudlicka Kudlicki Kudrel Kudrelek Kudriashov Kudrycka Kudrycki Kudrys Kudryńska Kudryński
    Kudrzycka Kudrzycki Kudłak Kudławiec Kufka Kuflik Kuhnert Kuibida Kujach Kujaczyńska Kujaczyński Kujanek
    Kujat Kujbida Kujtkowska Kujtkowski Kukava Kukharska Kukharskyi Kukielska Kukielski Kukiełko Kuklok
    Kukuc Kukurowski Kukuł Kukułowicz Kulaha Kulai Kulanek Kulanica Kulawiecka Kulczykowska Kulczykowski
    Kulda Kulecka Kulecki Kulenko Kulenty Kuleshova Kuleszczyk Kuleszka Kulewska Kulewski Kulfan Kulgawczuk
    Kulikovska Kulikovskyi Kulinicz Kulinowska Kulinska Kulishova Kulita Kullas Kulman Kuls Kulska
    Kulwikowska Kulza Kulągowski Kumari Kumik Kumińska Kumiński Kumkowska Kumkowski Kumosz Kunca Kuncik
    Kuncio Kunets Kuniczuk Kunisz Kuniszyk Kunsztowicz Kuntsevich Kunwar Kunyk Kunytskyi Kupchenko Kupchyk
    Kupiszewska Kupiszewski Kupnicki Kuprel Kupriianov Kupriianova Kuprowska Kuprowski Kupsik Kuracińska
    Kuraciński Kuraczyk Kuraj Kurańda Kurbonov Kurcab Kurcius Kurczek Kurczoba Kurczuk Kurdas Kurdybacha
    Kurdziałek Kurecka Kurecki Kurlenda Kurmin Kurnatowska Kurnatowski Kurochkin Kurochkina Kuropatnicka
    Kuropatnicki Kuropatwińska Kuropatwiński Kuropieska Kurosad Kuroszczyk Kurowiak Kurpaska Kurpiers
    Kurstak Kurtanidze Kurto Kurtysiak Kurus Kuryk Kurylko Kurylonek Kuryluk Kuryshko Kuryłło Kurzajczyk
    Kurzelewska Kurzelewski Kurzempa Kurzep Kurzydem Kurzydym Kurzydłowska Kurzydłowski Kushchenko
    Kushnarenko Kushta Kusia Kusicielek Kusidło Kusiek Kusiewicz Kusper Kussy Kustos Kuszela Kuszmar
    Kuszmider Kusznierewicz Kusznieruk Kusznir Kuszpa Kutermak Kuternoga Kutna Kutovyi Kutowska Kutowski
    Kutra Kutsevol Kutta Kutzmann Kuzawińska Kuzawiński Kuzańska Kuzański Kuziela Kuziemko Kuziemkowska
    Kuziuk Kuzminskyi Kuzmyk Kuzmyn Kuznets Kuzniatsova Kułaczkowska Kułaczkowski Kułagowska Kułagowski
    Kułdo Kułyk Kuśmierkiewicz Kuśmierowska Kuśmierowski Kuśnierkiewicz Kuź Kuźniecow Kużdowicz Kvach Kvas
    Kvasniuk Kviatkovskyi Kvitko Kvych Kwapik Kwapniewska Kwapniewski Kwast Kwaśniowski Kwiatkiewicz Kwiatos
    Kwidzinska Kwik Kwika Kwilińska Kwiliński Kwilman Kwiędacz Kwocz Kwosek Kybukevych Kycko Kyiashko Kykot
    Kyliushyk Kyriienko Kyrpa Kyslenko Kysliuk Kyslyi Kyslytsia Kółeczko Kądzielska Kątniak Kębłowski
    Kęczkowska Kęczkowski Kędys Kępkowicz Kępniak Kęsa Kęsiak Kęskiewicz Kęsoń Kłaczek Kłaczkiewicz Kłapa
    Kłapcia Kłobucka Kłobucki Kłoczewiak Kłok Kłosak Kłosin Kłosowiak Kłossowska Kłubowicz Kłuciński Kłysik
    Kőnig Kściuk Kűhn Laban Laber Labijak Labiś Labunets Labza Lachiewicz Lachmann Lachnik Laddach Ladyka
    Laga Lagner Lahun Lahutta Lai Lajs Lakatosz Lakhman Laksy Laktionova Lakusta Lam Lamber Lambrecht
    Lambrych Lamkiewicz Lamperska Lamprycht Lan Lancman Landau Landmesser Landsberg Landwójtowicz Langmesser
    Lango Langos Langrzyk Lankocz Lantukh Lany Lanzer Lapa Lapchuk Lapenko Laptiev Laptieva Larchenko
    Larionov Larisz Lasa Lashch Laske Laskowicz Laskowiecka Laskowiecki Laszewska Laszewski Laszko Latecki
    Latopolska Latosi Latosiewicz Latowska Latowski Latuszkiewicz Latysh Latysheva Laudański Laudy Laur
    Lavrentieva Lavrynovych Lawer Lawrence Lazaj Lazer Laziuk Lazorko Lazoryk Lazurenko Lebedynets
    Lebedynska Lebelt Lebiedziewicz Lebowska Lec Lechańska Lechański Lechert Lechociński Lechoszest Lecki
    Lecko Leczkowska Leczkowski Leduchowska Ledwożyw Ledwójcik Lefler Legieta Legucka Legucki Legumina Legęć
    Lehner Lehnert Leicht Leiko Leitner Lejda Lejnert Lejza Lekacz Lekarczyk Lekowski Lekstan Lelakowska
    Lelakowski Leleka Lelewski Lelko Lellek Lema Lembke Lemczak Lemierz Lemieszko Lempka Lempke Lempkowski
    Lenarciak Lencewicz Lenckowska Lengier Leniartek Leniv Leno Leo Leonarcik Leonard Leonarska Leonarski
    Leonchyk Leonczuk Leoniec Leosz Lepczyk Lepekha Lepel Lepieszka Lepsza Lepucka Lepucki Lerczak Lerke Les
    Lesak Lesiakowska Lesiakowski Lesman Lesnau Lesniak Leszak Leszman Letniowska Letniowski Levandovskyi
    Levina Levkivska Lewa Lewaszkiewicz Lewenda Lewkiewicz Lewnau Leyko Leziak Leśniańska Leśniok
    Leśnowolski Leżyńska Leżyński Liakhov Liao Liashkevich Liashok Liaukovich Liberka Liberman Liboska
    Libowicz Librant Libudzic Lichaj Lichańska Lichański Lichończak Lichtańska Lichtenstein Lichwiarz
    Liczberska Liczbik Liczkowska Liczkowski Lieber Liebersbach Liebert Liebiediev Liedke Lier Ligmann
    Ligmanowska Ligmanowski Lignowski Ligowska Ligudzińska Ligudziński Liguz Lijewski Limańska Limański
    Linart Linca Lindemann Lindenau Lindert Lindstedt Linetty Ling Liniewska Liniewski Linkert Linnert
    Linowiecki Lipczyk Lipertowicz Lipianin Lipiejko Lipigórska Lipiszko Lipniewicz Lipowczyk Lipowy Lipp
    Lisakowska Lisakowski Lisiakiewicz Lisikiewicz Lisiuk Lisius Liska Liske Liskiewicz Liskowiak Lisna
    Lisnic Lisouski Listkowska Listkowski Listwon Lisy Liszaj Liszczyk Litman Litner Litwiak Litwiejko
    Litwinienko Litwora Liubchyk Liubenko Liuklian Liulka Liwacz Liwerska Liziniewicz Lizis Lizner Lizończyk
    Lizura Lińska Liński Lobas Lobko Lobur Lodowski Loewe Lohin Lohinova Lohvin Lohvinenko Lohvinov
    Lohvinova Lojtek Lokaj Lola Loll Lomaka Lomakin Lomako Lomania Lomber Lompas Londzin Long Longawa
    Lopatin Lopatina Lopushanska Lopushanskyi Lora Lorczak Lorczyk Lorencka Lorencki Loręcka Loręcki Losiev
    Losieva Loskot Loster Lotarska Lotarski Lotawiec Lower Lozinskyi Lozko Lozovskyi Lubacha Lubarski
    Lubawska Lubawski Lubert Lubicka Lubicki Lubiewska Lubiewski Lubkiewicz Lubnau Lubner Lubosz Lubowska
    Lubowski Luca Luch Luchak Luchkiv Luchyn Luciak Ludkowska Ludkowski Ludorf Ludwichowska Ludwichowski
    Ludwiszewska Ludwiszewski Ludziak Ludziejewska Ludziejewski Luhovska Lukan Lukashova Lukashyk
    Lukiianchuk Lukosek Lukowski Luleczka Luliński Lum Lunov Lus Lustofin Luszczyk Lusztyk Lutchenko Lutchyn
    Lutecka Lutkowska Lutkowski Lutowicz Lutska Lutskyi Luu Lux Luzarowska Luźniak Lużyńska Lvova Lychak
    Lyfar Lykhach Lykholat Lykova Lylyk Lynch Lypko Lysek Lysohor Lystopad Lysy Lytovka Lytvak Lytvynets
    Löffler Lüdtke Lęgas Maas Maca Macander Macegoniuk Maceluch Machacz Machaczek Machajska Machajski
    Machala Machalewska Machalewski Machalińska Machaliński Machi Machińska Machlik Machlowska Machlowski
    Machnacka Machnacki Machniewska Machniewski Machol Machota Machowiec Machowina Machtyl Machunik Machuta
    Maciaczyk Maciakiewicz Maciaszkiewicz Maciata Maciejaszek Maciejkowicz Maciejny Macieląg Macion Maciszka
    Maciuga Maciura Maciątek Mackojć Macoń Maczkowska Maczugowski Maczyńska Maczyński Madajewska Madajewski
    Madanowska Madejewska Madejewski Madsen Madziarz Madziewicz Madzińska Madziński Mager Magiełda Magnes
    Magnor Magnucki Magoch Magolan Magura Maguza Mahato Mahda Mahdych Mahera Mahmud Mahmudov Maidan
    Maievskyi Maiko Mainczyk Maior Maiorov Maiorova Maiwald Majca Majcherska Majcherski Majerkiewicz
    Majkowicz Majorowska Majorowski Majrowski Majstrowicz Majusiak Majówka Makaranka Makarau Makarczyk
    Makarowicz Makać Makała Makaś Makhnach Makhynia Makieieva Makiej Makiola Makohin Makosiej Makovei
    Makselan Maksimov Maksimova Maksimowska Maksimowski Maksiuta Maksymow Makulik Makus Makusek Makuszewska
    Makuszewski Makutynowicz Malaca Maladyn Malaka Malankowski Malarewicz Malarowski Malasiewicz Malawko
    Malenta Malepszak Malerczyk Malerowicz Malesińska Malesiński Maleszko Maletska Maletskyi Maletych
    Maleńczak Maliczak Malig Maligranda Malikov Malikova Malimon Malinouski Maliszak Malitska Malitskyi
    Maliuha Malkova Malota Malotka Malovichko Malowaniec Malowany Maludy Maludzińska Maluty Maluśka Maluśki
    Malykhina Malyshenko Malz Mamadaliev Mamajek Mamatov Mamczarek Mamel Mames Mameła Manchenko Mandela
    Mandra Manecki Mangold Manias Maniera Manijak Manik Maniszewski Manowiec Manowiecka Mansour Mansurov
    Mantej Mantey Mantiuk Manukian Manulik Manys Manzel Mao Maranda Marasz Maraś Marcalik Marchacz Marchela
    Marchelak Marchelewicz Marchwiany Marchwica Marchyk Marcinczak Marciniewicz Marcioch Marciocha
    Marciszonek Marciszyn Marcjanek Marcjasz Marcu Marculewicz Marczok Marczykiewicz Mardas Mardofel
    Marekwia Marenych Maresz Margasińska Margasiński Margańska Margański Margielewska Margielewski
    Margiewicz Margosiak Margraf Margula Marianowski Mariasik Mariańczyk Marienko Marinova Marker Markieton
    Markitan Markot Marković Markuc Markulis Markun Markusik Markwant Markwitz Marlewska Marlewski
    Marmulewicz Marmur Marmura Marnik Marniok Marnocha Maro Marondel Marosik Maroszczyk Marozava Marquardt
    Marschall Marszelewski Marszk Marszycka Marszycki Mart Marta Martinek Martins Martko Martofel
    Martsinovich Martuś Martyniec Martynko Martynus Martynyshyn Martyshchuk Martysz Marus Marusińska Marusza
    Marynchenko Marynenko Marynets Maryon Marysiak Marzeion Marzycka Marzycki Marzęciak Masa Masajło
    Masewicz Mashtalir Masica Masiejczyk Masiera Masiul Masiulaniec Masko Masliak Masnyk Massel Master
    Mastyga Mastyj Mastyna Maszk Masztaler Masłosz Mataczyński Matcharashvili Matczyńska Matczyński
    Mateichuk Matejka Matel Matelak Matelowska Materak Materkowska Materkowski Matern Mathew Mathias
    Matiishyn Matiiv Matiuk Matiukha Matjas Matkovskyi Matlakiewicz Matlok Matolicz Matonia Matowicka Matraj
    Matrejek Matryba Matsak Matseliukh Matsola Matsyk Matsyshyn Matthews Matug Matujewicz Maturlak
    Matuszkowiak Matuszna Matviiets Matviishyn Matwiejszyn Matyas Matyjasz Matyjaśkiewicz Matyskiel
    Matyszkiel Matła Matławska Matławski Matłoch Mazanik Mazankiewicz Mazany Mazelanik Mazella Mazewska
    Mazewski Mazhara Maziarczuk Mazoń Mazuchowski Mazura Mazurets Mazurska Mazurski Małacha Małachwiej
    Małachwiejczyk Małaczyńska Małaczyński Małagowski Małaj Małaszek Małaszewska Małaszewski Małańczuk
    Małczyńska Małczyński Małeta Małodzińska Małodziński Małopolska Małoszyc Małoń Małuszek Małyniak Małysko
    Maścianica Maścibroda Maślakiewicz Maślanek Maślaniec Maślerz Maślij Maślonka Maślorz Maśluch Maśląg
    Maźnio Mażul Meca Mechuła Meckier Mederska Mederski Medes Medved Medvedeva Medwediuk Medycka Medynska
    Mega Megier Mehl Mehmed Mehmood Mehta Meinhardt Meister Mejger Mejsak Meka Mekh Meladze Melak Melańczuk
    Melchior Melech Meleshchuk Melewska Melibruda Melkonyan Melnikava Melnyczuk Melnytska Meloch Melonek
    Melska Melski Menc Mencner Mendelowska Mendelska Mendelski Mendla Mendroch Mendryk Mendys Menke Merc
    Merchuk Mergalska Mergalski Mergner Merklinger Mermela Meronk Meroń Mes Mesek Meshcheriakov
    Meshcheriakova Messyasz Meszek Meszko Meszyńska Meszyński Metel Metzler Metzner Mews Meyka Miadzvedzeu
    Miakisz Miakota Mialeshka Mianowana Mianowicz Miarecka Miarecki Miastowska Miazgowska Miałkas Michacz
    Michaelis Michajluk Michałka Michałko Michałkowski Michelis Michen Michniacka Michniacki Michowicz
    Michrowska Michrowski Michurska Michurski Micielska Miciukiewicz Miczke Miczuga Miechowiecka
    Miechowiecki Miechowska Miechowski Miechurska Miechurski Miechówka Mieczyński Miedviedieva Miedza
    Miedzik Mielcuch Mielechowicz Mieleszczuk Mieleszkiewicz Mielimonka Mielimąka Miemczyk Mienik Mientka
    Mientki Mierniczak Mierska Miesiąc Mieszczanek Mietlińska Mietliński Miezianko Migasiewicz Migocka
    Migocki Migryt Migura Migza Mihaylov Mihaylova Mihilewicz Mihovka Mihály Mijał Mikadze Mikhailau
    Mikhalchuk Mikhalevich Mikhieiev Mikhieieva Mikicka Mikicki Mikitów Mikke Miklar Miklasiewicz Miklińska
    Mikliński Miklusiak Miko Mikociak Mikolas Mikosik Mikoszek Mikołajczewska Mikołajczewski Mikołajów
    Mikołaszek Mikołowicz Mikołowska Mikołowski Mikruta Miksztal Mikulich Mikuliszyn Mikusz Mikłusiak Milart
    Milasz Milcarek Milchenko Milcuszek Milczak Milczarz Milczyński Milek Mileszczyk Milevska Milicz
    Milinchuk Milinkiewicz Miliszewska Miliszewski Miliszkiewicz Mills Milon Miluska Miluski Mimier Minaiev
    Minaieva Minakova Minasyan Minder Mindur Mindykowska Mindykowski Miniach Minias Minicki Miniuk Miodunka
    Mioduska Mioduski Mionskowska Mionskowski Miosga Miras Miraszewska Miraszewski Mirchuk Mirka Mironov
    Mirowicz Miroń Mirzayev Misala Misan Misiaczyk Misiakiewicz Misiarek Misiec Misina Misiorowska
    Misiorowski Misiukanis Misiurka Misińska Misiński Mistak Mistela Mistera Misterevych Miszker Miszkowska
    Miszuk Mitana Mitaszka Mitela Miterka Mitin Mitina Mitrosz Mitschke Mittelstaedt Mittmann Mitula
    Mitulska Mitulski Mituniewicz Miturski Mizerka Miziak Mizielińska Miziewicz Miączyńska Miączyński
    Miądowicz Miążek Mićka Międlarz Mięsak Miłaszewicz Miłobędzka Miłota Miłowicka Miłowicki Mińska Miński
    Miściur Miśka Miśniakiewicz Miśtura Mkhitaryan Mlazga Mlaś Mlekodaj Mlicka Mlicki Mlost Mlącka Mlącki
    Mnatsakanyan Mocała Mocherniuk Mochnacz Mociak Mocigemba Mocior Moczarny Moczygęba Modlisz Modliszewska
    Modliszewski Modrakowska Modrakowski Modranka Modrowska Modzel Mogilany Mogilnicka Mogilska Mogilski
    Mogiłka Mohyla Mohylna Moik Moisa Moisei Moiseiev Moisieiev Moisieieva Moisiuk Mojka Mojsiej Mojska
    Mojza Mojżuk Mojżyszek Mokliak Mokra Moksa Molawka Molchan Molis Molitor Molla Mollin Mollus Molnár
    Molsa Moląg Momola Momotiuk Monarcha Monastyrskyi Mondal Monich Monieta Monka Monkos Montowski Moon
    Moraczyńska Moraczyński Morajka Morales Moran Moraniec Morawik Morawka Moraś Morcinczyk Mordacz
    Mordalska Mordalski Mordasewicz Mordwa Mordzińska Morenc Morgiewicz Morgun Morhunov Morhunova Morkis
    Morman Moros Morozenko Morsztyn Morta Mortek Mortel Moruzgała Moruń Morzuch Morzywołek Mos Moser
    Mosiienko Mosiniak Mosiuk Mosiężna Mosiężny Moskalchuk Moskalov Moskalova Moskiewicz Moskovchenko
    Moskovchuk Moskowicz Mosor Moss Mossur Mostowa Mostowiak Moszak Moszek Moszkowska Moszkowski Moszumańska
    Motal Motas Motorna Motoszko Motuz Motybel Motycka Motyczka Motławska Moussa Mowel Mowińska Mowiński
    Mozal Mozghovyi Mozgowiec Mozler Mołocznik Mołodecka Mołodecki Mościbrodzka Mościpan Mościszko Możdrzeń
    Możdżan Mrajca Mraz Mreła Mrochem Mroczyk Mroskowiak Mroziuk Mrug Mrugas Mrugowska Mrugowski Mrukowicz
    Mrzewa Mrzyczek Mtchedlishvili Muczko Muczyń Mudant Mudel Mudy Mudzo Muklewicz Mukoid Mularzuk Mulas
    Mulczyńska Mulczyński Mulewicz Mulko Muller Muminov Muracka Mural Murashka Muratova Muraviova Murawiak
    Murawko Murczek Murgała Murha Murszewska Murszewski Murzańska Murzański Murzyński Musa Musaeva Musayev
    Mushynska Mushynskyi Musiałczyk Musiel Musiela Musiol Muskietorz Mustafayev Muster Muszkiewicz Muter
    Muth Mutka Muttke Muzeja Muzia Muzińska Muziński Muzychko Muzykant Mułyk Myc Mycyk Mykhailo Mykhailovych
    Mykhailychenko Mykhalska Mykhalyk Mykhno Mykyta Mykytchuk Myler Mync Myrhorodskyi Myroshnichenko
    Myroshnyk Myshchenko Mysiorska Mysiorski Mysiuk Mysiv Mysnyk Myszewska Myszewski Mytkowska Mytlewska
    Mytlewski Mytnyk Mytrofanov Myts Mytskan Mytsko Mytyk Myśliwska Myśliwski Mącior Mąderek Mądraszewska
    Mądroszyk Mądziel Mąkola Męczkowska Męczykowska Męczykowski Mędak Mędala Mędrak Mędygrał Mędziak Męzik
    Mężykowski Młoczek Młodak Młodecka Młodecki Młodnicka Młodystach Młodziankiewicz Młoźniak Nabakowska
    Nabakowski Nabywaniec Nacewicz Nachlik Nadajczyk Nadobna Nadobny Nadstawek Nadstawna Nadstazik Nadstoga
    Nadtoka Naduk Nadwodna Nadwodny Nadybał Nadziałek Nadzikiewicz Nagiewicz Nagieł Nagnajewicz Nagłowska
    Nagłowski Nahirna Nahirnyi Naidenko Naidonova Nair Najdecka Najdecki Najdrowska Najewska Najmanowicz
    Najmrodzka Najmrodzki Najmuła Najs Nalaskowski Nalbach Nalborska Nalborski Nalewaja Nalewajska
    Nalewajski Nalezińska Naleziński Nalichowska Nalikowska Nalikowski Nam Namerła Namiota Nanko
    Napierkowska Napierkowski Napolska Napolski Naprawa Narbutt Narolewska Narolewski Nasalska Nasalski
    Naskręcka Naskręcki Naspińska Naspiński Nass Nast Nastachowski Nastaga Nastał Nastenko Natchkebia Nath
    Natonek Natońska Naturalny Naum Naumchyk Naumczuk Naumiak Naumiec Naus Navitskaya Nawotczyński Nawra
    Nawrotkiewicz Nawłatyna Nazarets Nazarkevych Nazarowicz Nazorek Ndlovu Nechaiev Nechaieva Necheporenko
    Nechepurenko Neckar Nedashkivska Nedashkivskyi Negru Nej Nejfeld Nelka Nelson Nems Nenca Nepyivoda Ner
    Nering Neroda Ners Neryng Nesen Nessel Nesterovych Nestsiarovich Netkowski Netzel Neudek Neufeld
    Neupauer Newman Neyman Neć Niburski Nica Nicałek Niciarz Nicke Nicz Niczyj Nida Niebylska Niebylski
    Nieczypor Niedek Niedobecka Niedobecki Niedolistek Niedomagała Niedopytalska Niedopytalski Niedośmiałek
    Niedurny Nieduziak Niedziejko Niedziocha Niedziołko Niedziński Niedzwiedzka Niedzwiedzki Niedźwiedziuk
    Niekowal Niekraszewicz Niekraś Nielepkowicz Nielipiński Niemann Niemasz Niemc Niemcewicz Niemierka
    Niemyska Nieoczym Nieora Niepala Nierle Nieroba Nieruchalska Nieruchalski Nierychlewska Nierychlewski
    Niesiobędzka Niesiobędzki Niesmak Niesobska Niesobski Niespodziana Niestępska Niestępski Niesyn
    Niesłańczyk Nietrzebka Niewada Niewadził Niewalda Niewiadowska Niewiatowska Niewiatowski Niewieczerzał
    Niewielska Niewielski Niewierowska Niewierowski Niewolska Niezgodzka Niezgodzki Nieśpiał Nieśpielak
    Nieżurawska Nieżurawski Nigbor Nigborowicz Nijaka Nijakowski Nikadon Nikiforuk Nikisz Nikitsin Niklasz
    Niklaus Niklewska Nikolas Nikolin Nikolić Nikonchuk Nikonenko Nikonov Nikonova Nikołajew Nikścin Nimchuk
    Nistor Nitner Nitsch Nitz Nizielska Nizielski Niziurska Niziurski Niścior Niźnikowska Niźnikowski Noak
    Nobik Nocko Nockowska Nockowski Nocny Nocon Noczyńska Noczyński Nodzak Nogaś Nogowczyk Nogowska Nogowski
    Nokielska Nokielski Nolberczak Nonas Nonckiewicz Norberczyk Norko Norwa Norymberczyk Nosalska Noskowska
    Noskowski Noster Noszczyńska Noszczyński Novakovska Novokhatska Novokhatskyi Novosolova Novykov Novykova
    Novák Nowaczkiewicz Nowaszczuk Nowatkiewicz Nować Nowecka Nowecki Nowel Nowikiewicz Nowinowska
    Nowinowski Nowoczek Nowodworski Nowopolska Nowopolski Noworolska Noworolski Noworzyn Nowosada
    Nowosielecka Nowosielecki Nowosińska Nowosz Nowotczyńska Nowotyńska Nowotyński Nowy Nozderka Nożownik
    Nurczyńska Nurczyński Nurmatov Nurska Nurski Nuszczyńska Nuszczyński Nyckowski Nyczaj Nyderek Nydza
    Nykoliuk Nyrek Nyrka Nyzio Nyćkowiak Nęcki Nędzyński O'Connor O'Sullivan Obarek Obałek Obecna Obecny
    Oberemok Oberle Oberman Oberzig Obiegły Obierak Obliński Oblong Obodzińska Obodziński Obstarczyk Obstój
    Obukh Obukhova Obłuska Obłuski Obłąkowska Obłąkowski Ocetek Ochalska Ochalski Ochap Ochej Ochelska Ochla
    Ochlak Ochotna Ochowicz Ochrymowicz Ochtera Ochęcka Ochęcki Ocipka Ocytko Oczek Oczki Oczujda
    Odbierzychleb Odej Odolak Odrobna Odrobny Odrowska Odrowski Odwald Odynets Odzimkowska Odzimkowski
    Oganiaczyk Ogara Ogiba Ogiejko Ogniewska Ogniewski Ogorzelski Ogrodny Ogrodzka Ogrodzki Ogulewicz Ogór
    Ogłodzińska Ogłozińska Ogłoziński Ohiienko Ohirko Ojczenasz Ojdowska Ojdowski Ojrzanowska Okapa Okhota
    Okhremchuk Okhrimchuk Okienko Okleja Oklejewicz Oklesińska Oklesiński Okoczuk Okolita Okon Okonkowska
    Okonkowski Okraj Okrent Okrucińska Okruciński Okruszko Okrutna Okrzos Okrągła Okręt Oksenchuk Oksiejuk
    Oksińska Okular Okupna Okupny Okuński Olah Olanin Olar Olasiuk Olawa Olbrot Olbryt Olchowa Olchowska
    Olchowski Olczykowski Olearczuk Olearnik Olechny Olechwierowicz Olecka Olecki Oleczek Oleksiej Oleksii
    Oleksiichuk Oleksowicz Oleksza Olenchuk Olenkowicz Oleshchenko Oleska Oleski Olewska Olewski Oleśko
    Oliferchuk Oliferuk Olishchuk Oliver Oliwkowska Oliwkowski Oliwniak Oljasz Olkhovska Olkhovskyi Olkuska
    Olkuski Olkuśnik Ollik Olshanska Olshanskyi Olszacka Olszacki Olszanka Olszewik Olszowiak Olsztyn Olwert
    Oman Omar Omarova Omańska Omański Omelan Omelian Omiatacz Omiecińska Omieciński Omieczyński Omilianowicz
    Onasz Onichimiuk Onipko Oniśko Onopriichuk Onufrak Onufriichuk Onuszko Onyśk Onyśko Onyśków Opanowicz
    Oparczyk Oparowski Opasiak Opasik Opasińska Opasiński Opatowicz Opatowska Opatowski Opatrzyk Opałacz
    Opielewicz Opiłowska Opolony Opora Oporek Oprea Oprych Opryszek Opulska Opulski Opłotna Opłotny Oracka
    Oraniec Orankiewicz Orbik Oremek Oren Orent Orepuk Organistka Oriekhov Oriekhova Orliuk Ormańczyk Ornaf
    Ornafa Ornawka Oronowicz Oros Orszewska Orszewski Ortel Orylska Orylski Oryniak Oryshchenko Orzechowicz
    Orzel Orzeszak Orzińska Osadczuk Osesek Osewska Osewski Osieczko Osieka Osieleniec Osierda Osinka
    Osinska Osipa Osipczuk Ositek Osmak Osmala Osmanova Osmyk Osolińska Osoliński Ososińska Ososiński
    Ostalczyk Ostalska Ostalski Ostaniewicz Ostapiński Ostapko Ostapovych Ostash Ostaszewicz Ostrach
    Ostrogórski Ostromecka Ostromecki Ostroushko Ostroverkh Ostrzycka Ostrzycki Ostróżka Osuszek Osypka
    Osypov Osypowicz Oszczapińska Oszczepalska Oszczepalski Oszczygieł Oszczypała Oszkinis Oszuścik Osówniak
    Otapowicz Otka Otkała Otok Otoka Otola Ottenbreit Otulakowska Otulakowski Otworowska Otworowski Ovcharov
    Ovchinnikova Ovchynnikova Ovdiichuk Overchenko Ovsiannikov Ovsiichuk Owad Owocka Owocki Oworuszko Owsian
    Owsianowska Owsianowski Owsiejczuk Owsiejko Owłasiuk Ozdowska Ozdowski Ozerova Ozgowicz Oziembło
    Oziembłowska Oziembłowski Oziemczuk Oziemska Oziębłowska Oziębłowski Ozorkiewicz Ozóg Ołdziejewska
    Ołdziejewski Ołota Ołowniuk Ołówek Ołówka Ościak Oświęcimka Oświęcimska Oświęcimski Oźmina Oźminkowska
    Ożadowicz Ożańska Ożański Pabijanek Paca Pacanek Pacelt Pachecka Pachela Pachliński Pachniak Pachniewicz
    Pachniewska Pachniewski Pacholewicz Pachowska Pachuc Pachuła Pachwicewicz Paciejewski Pacion
    Paciorkiewicz Packa Packiewicz Pacler Pacoń Pacyńska Pacyński Paczewski Padarz Padowska Padowski
    Padyasek Padzińska Padziński Paetz Pahl Paiuk Pajchrowska Pajchrowski Pajerska Pajerski Pajko Pajszczyk
    Pajzert Pająkowska Pająkowski Pakhniuk Pakholiuk Pakholok Pakla Paklepa Pakuszewska Pakuszewski Pakłos
    Palach Paladii Palanis Palasz Palat Palchyk Palec Palenta Palewska Palewski Paliakou Paliashchuk Palich
    Palinkiewicz Paliszewska Paliszewski Paloc Paluchiewicz Palusiak Palutkiewicz Palyha Panasz Panchak
    Pancherz Pandyra Panfilov Panfilova Paniczek Paniec Pankowiak Pankratov Pankratova Pankros Panyło Pap
    Papacz Papierkiewicz Papierkowska Papierkowski Papierzyńska Papierzyński Papko Papou Papp Papusha
    Parafińska Parafiński Paralusz Paramonova Parasiewicz Paraszczuk Parchan Parecki Parfianowicz Parfonov
    Parfonova Pargieła Parii Parkasiewicz Parkosz Parkoła Parlak Parniewicz Parobiec Parszcz Parszuto
    Partyga Partyńska Partyński Parypa Paryska Paryś Parzychowska Parzychowski Parzyk Parzątka Pasela
    Pasemko Pashkovskyi Pashuk Pasichna Pasichniak Pasichnyi Pasiciel Pasicz Pasierbiak Pasierbowicz Paskal
    Paskudzka Paskudzki Paslavska Paslavskyi Pasteczka Pasterkiewicz Pasternacka Pasternacki Pastorczyk
    Pastryk Pastukhov Pasturek Pasymowska Pasymowski Paszel Paszki Pasztelan Pasztor Paszuk Paszun Patacz
    Patas Patałuch Patałąg Patejko Paterewicz Paterkiewicz Paternoga Patola Patorska Patorski Patra Patriak
    Patruś Patrylak Patrzylas Patsiuk Patsula Patulska Patulski Patycka Patyjewicz Patynek Patynko Patzer
    Pauba Paudyna Paulau Pauli Pauliukevich Paulouskaya Pavliukh Pavlus Pavlushenko Pawelczuk Pawera Pawełas
    Pawełkowicz Pawikowska Pawikowski Pawilcz Pawka Pawlaszczyk Pawlewski Pawlic Pawliszko Pawlowski
    Pawlukowicz Pawlukowska Pawlukowski Pawlusińska Pawlusiński Pawlyta Pawulska Pawulski Pawusiak Pawłat
    Pawłoś Pawłucka Pawłucki Pawłów Paz Pazdyga Pazurkiewicz Pać Pałamarz Pałasińska Pałeczka Pałubińska
    Pałuczak Pałuszka Pałęcka Pałęcki Pańpuch Paśka Pchełka Pearson Pechcin Pecuch Pecura Peczka Pedan Pegza
    Pejta Pekról Peled Peleg Peleshok Peliwo Penconek Penda Pendel Peng Penkalla Penkova Penkowska Penkowski
    Peno Pentek Pentsak Pepaś Pepera Peplak Per Peraj Perdoch Perdon Perdyła Perebyinis Perehuda Perekhodko
    Perendyk Pereverzieva Pereć Perih Perkiewicz Perko Perkosz Perlicjan Perlicka Perlicki Perońska Peroński
    Perry Perskawiec Perszewska Perszewski Perszon Peruń Perużyńska Perużyński Perwejnis Perwenis Perzak
    Perła Perłak Peshko Pest Peszka Peteja Petelicki Peterko Peterwas Petit Petke Petkiewicz Petkowicz
    Petner Petniak Petrivska Petrochenko Petrovets Petrović Petrow Petruczenko Petruczynik Petrusenko
    Petrushka Petrushko Petrusiewicz Petrychuk Petryków Petryshak Petryshyna Petrów Petta Pettersson
    Petukhov Pewińska Pewiński Pezała Pezdan Pełkowski Pełszyńska Pełszyński Pełtak Pflaum Pianowska
    Pianowski Piast Piastowicz Piatak Piatrova Pic Picewicz Pichalski Picher Pichniarczyk Pichór Piczura
    Piddubniak Pidhaina Pidhurska Pidleteichuk Piecak Piechalak Piechotka Piechulski Piechurska Piechurski
    Pieciukiewicz Pieckowska Pieckowski Pieczaba Pieczeniak Pieczewska Pieczewski Pieczora Pieczur Pieczątka
    Piedo Piegsa Piegzik Piekaj Piekarzewicz Piekarzewska Piekarzewski Piekiełek Piekoś Piekunko Piekuta
    Pieles Pielich Pieniążkiewicz Pieniężna Pieniężny Piepka Piepke Pieprzycka Pierko Piernikowska
    Piernikowski Pierog Pieroń Pierożak Pierucka Pierucki Pierunek Pierzchałka Pierzchnica Pierzynowska
    Pierzynowski Pieszczoch Pietek Pietera Pieterwas Pietnoczka Pietraczyk Pietralczyk Pietraniuk Pietrasina
    Pietrasiuk Pietroniec Pietruczak Pietrukaniec Pietrukiewicz Pietrusza Pietruszko Pietruńko Pietrych
    Pietrycha Pietryja Pietryniak Pietryszak Pietryszek Pietrzniak Pietrzyca Pietuch Pietuszko Piećko Pieła
    Piełka Pieńczewska Pieńczewski Pieńkus Pieśko Pigulak Pigła Pigło Pika Pikuta Pilcek Pilek Pilitowska
    Pilitowski Pilna Pilniak Pilsak Pilska Pilski Piluch Piluk Pilz Pilżys Pinczak Piniarska Piniarski
    Pinior Pinker Pinkos Pinto Piorunowski Pioruńska Pioruński Pioskowik Piotruk Piotrów Piperek Pipowska
    Pipowski Pira Pirowicz Pirowska Pirowski Pirożek Pirus Pisarczuk Pisarzewska Pisarzewski Pisarzowska
    Pisarzowski Pisklak Piskunova Piskur Piskurewicz Piskór Pisotska Pisotskyi Pisowicz Pisulska Pisulski
    Piszczała Piszczorowicz Pita Pitaś Pitner Pittner Pius Piwnica Piwoda Piworowicz Piwowarczuk Piórczyk
    Piórczyńska Piórczyński Pić Piędzia Piędzioch Pięk Piętko Piętosa Piłacik Piłasiewicz Piłatyk Piłot
    Pińczak Piśkiewicz Piżuch Placzek Placzyńska Placzyński Plajzer Plakhotnyk Plakhtii Plaksii Plakwicz
    Plaskiewicz Plasota Plato Platta Plebańska Plebański Plec Pleciak Plekan Plesner Pleszczyńska
    Pleszczyński Pleszkun Plewako Plewczyński Plewniok Pleń Pleśniarska Pleśniarski Plicko Plish Plisko
    Pliszczak Pliushch Pliwka Plińska Pliński Plokhotniuk Plonka Plotnik Plust Plysiuk Pląska Pląskowski
    Pniaczek Poberezhets Pobiedzińska Pobiedziński Pobrotyn Pocałujko Poch Pocha Pochanke Pochodyła
    Pochowska Pochrzęst Pochtar Pochyła Pociej Pocielej Pocięgiel Poczekajło Poczwardowska Poczwardowski
    Poczęsny Poczęty Poda Podawca Podchul Podczaszy Podczerwiński Poddenek Podeszwik Podgrudna Podgrudny
    Podgórczyk Podgórzec Podhajna Podhajski Podhalicz Podjacka Podjacki Podjaska Podjaski Podkanowicz
    Podkowicz Podkowik Podkoń Podlach Podlawska Podlawski Podleska Podlipniak Podlipny Podlipska Podolskyi
    Podowska Podowski Podrazik Podrez Podrzycka Podrzycki Podsadny Podsiadłowicz Podsiadłowska Podsiadłowski
    Podstawny Podstolak Poduch Podwojewska Podwojewski Podworska Podworski Podwyszyńska Podwyszyński Pogoń
    Pograniczna Pograniczny Pohorecka Pohorecki Pohrebna Pohribnyi Poida Pojawis Pokalchuk Pokhyla Pokorna
    Pokorniecka Pokorzyńska Pokorzyński Pokropska Pokropski Pokryszka Pokrywczyńska Pokrywczyński Pokrzyk
    Pokuta Pokydko Pokładnik Polachowska Polaczy Polanin Polarz Polasz Polaszyk Polatowski Polczak Polecka
    Polecki Polejowska Polejowski Poleska Poleski Poleszuk Polewko Poliarush Polichnowski Polinceusz
    Poliszak Poliszczuk Polita Politewicz Polito Polityło Poliuha Poliwczak Polniaszek Polonska Polonskyi
    Polovko Polovynka Polowa Poloz Poltorak Poltoratska Pomes Pomiankiewicz Pomichowska Pomichowski
    Pomichter Pomierna Pompała Pomper Pomykalski Pomykoł Poniecka Poniecki Ponisz Ponka Ponto Pope Popera
    Popielak Popkova Popovici Popp Porabik Poradowski Porazik Poremska Porkhun Porolniczak Porombka Porosa
    Poroszewska Poroszewski Poroś Portacha Portalska Portalski Portianko Portuś Porwich Porwol Porycka
    Porycki Porzak Porzuc Porzyczka Porębna Posacka Posacki Posełek Posiak Posieczek Posor Pospiszyl Pospuła
    Postaremczak Postawka Postolska Postolski Postoł Postrzech Postrzygacz Postół Posuniak Posłajko
    Potakiewicz Potakowska Potakowski Potapczyk Potargowicz Potasińska Potasiński Potasz Potasznik Potaśnik
    Poter Poterucha Potiuk Potkaj Potkańska Potkański Potoczniak Pototska Pototskyi Potrapeluk Potratz
    Potrawa Potrzuska Potrzuski Potsiluiko Potuczko Poturała Potyraj Potyralska Potyralski Povar Povorozniuk
    Povoroznyk Poważa Powell Powierska Powierski Powietrzyńska Powolny Pozańska Pozański Pozhar Połata
    Połczyk Połok Połosa Połubok Południkiewicz Połukord Połóg Pońc Pończocha Pońska Poński Poślada Poświat
    Poświatowska Poświatowski Pożarowska Pożarowski Pożarycka Pożdał Prachniak Praciak Pradel Pradhan
    Pragnący Prahl Prais Prajapati Prakopchyk Prange Pranica Pranschke Prasad Prasak Prask Prass Praszek
    Pratasevich Prawica Prażanowska Prażanowski Prażniewska Prażniewski Prech Predenkiewicz Pregiel Preihs
    Prejzner Prekop Prekurat Prelewicz Prentki Preus Priadun Primus Princ Proba Probst Prochacka Prochacki
    Prochasek Procka Procyszyn Procz Proficz Proga Prokocka Prokocki Prokofiev Prokopova Prokopyshyn
    Prokorym Proksz Prondzinski Proniewska Proniewski Prosińska Prosiński Proskurina Proskurnia Prosowicz
    Prosowska Prosowski Prostek Proszak Prot Protasova Protaziuk Protokowicz Protsyshyn Prozapas Prońko
    Prośniewska Pruba Pruc Prucia Pruczkowska Prudnikova Prudyus Pruk Prukała Prusisz Prussak Pruszewicz
    Pruszkiewicz Pryczkowska Pryczkowski Prydatko Pryhoda Prykhodchenko Prykhodzka Pryl Prylipko Prylińska
    Pryliński Prylutskyi Prylypko Prymachenko Prymek Prystai Prystasz Prytko Prytuła Prywer Przasnek
    Przastek Przeczek Przeczewska Przeczewski Przedlacka Przedwojska Przedwojski Przegalińska Przegaliński
    Przekaza Przekora Przemielewski Przemus Przeniczna Przeniczny Przeorska Przeorski Przeperska Przeperski
    Przepiórska Przepiórski Przeszłowska Przesór Przesław Przetacka Przetacki Przetocka Przetocki Przewdzing
    Przewieźlik Przewięźlikowska Przewięźlikowski Przewrocka Przezak Przezdzięk Prześlak Prześlakiewicz
    Przybilla Przybojewska Przybojewski Przybylok Przybysiak Przybyt Przybytkowska Przybyłkowicz Przychodaj
    Przychodni Przydróżna Przydróżny Przygrodzka Przygrodzki Przygódzka Przykłota Przymusińska Przymusiński
    Przymęcka Przyrowska Przysiwek Przysiężna Przysiężniak Przysiężny Przystajko Przystawski Przyszło
    Przywarty Przywała Przywitowska Przywitowski Przyłoga Przyżycki Prządak Prządo Przęzak Próchno
    Pręcikowska Pręcikowski Pręciuk Prędotka Prętkowski Pshyk Psica Pskiet Pstraś Pstrzoch Psuty Psykała
    Pszczolińska Pszczoliński Pszenna Pszenniak Ptasiewicz Ptaśnik Puacz Puchajda Puchkov Puchrowicz Puchyr
    Pucińska Puciński Pucyło Pucz Puczel Pudelko Pudelski Pudlarz Pudlewska Pudlewski Pugacz Puhachova
    Pujdak Pujer Pukajło Pukal Pukalska Pukalski Pukhalska Pukrop Pukło Pul Puliński Pulnik Puls Pultyn
    Pulwin Pupacz Pupin Puppel Purgacz Purska Purski Purszke Purzyńska Purzyński Pushkarenko Pushkarova
    Pustelniak Pustovoit Pustovyi Pusty Pustówka Puszczyk Puszczyńska Puszczyński Puszek Puszer Puszkarewicz
    Puszyńska Puszyński Putaj Putkiewicz Puwalska Puwalski Puzewicz Puziewicz Puzyna Puzyr Puzyrewska Pułapa
    Puścion Puślednik Pycha Pychyński Pyciarz Pycior Pycińska Pyczak Pydzik Pyjor Pylyp Pylypaka Pylypchak
    Pylypiak Pylypko Pyrcioch Pyrko Pyrkowska Pyrkowski Pyrohova Pyrozhok Pyrć Pysarchuk Pysera Pysik
    Pysmennyi Pyszel Pyszkiewicz Pyszkowski Pyszora Pyszyńska Pyszyński Pytlakowska Pytlowska Pytlowski Pyts
    Pyttel Pyvovarov Pyz Pyzdek Pyzh Pyzikiewicz Pyziołek Pyziński Pyśkiewicz Pyźlak Póda Pólkowska
    Pólkowski Półrolnik Półtoranos Pąklak Pąpka Pęczkowicz Pędowska Pędowski Pędras Pędziwilk Pękowski
    Pępiak Pętlicka Pętlicki Płachciak Płachetko Płaskociński Płaszcz Płatosz Pławiński Płażewski Płocieniak
    Płociniczak Płodowska Płodowski Płokarz Płosaj Płoszajczak Płotkowska Płotnicki Płowik Płucisz Płuszka
    Płużek Płużyczka Pływaczewska Pływaczewski Pściuk Quinn Raab Rabczyńska Rabczyński Rabiańska Rabiański
    Rabin Rabinek Rabka Raburska Raburski Rachańczyk Rachelski Rachmaciej Rachmajda Rachok Rachubik Rachuna
    Rachwalak Racibor Raciniewska Raciniewski Racz Raczycka Raczycki Radacz Radaczyńska Radaczyński Radczak
    Radczyc Rademacher Radetska Radetskyi Radio Radkevich Radna Radolińska Radoliński Radota Radowicz Radtka
    Raduj Raduszewska Raduszewski Radys Radysh Radzaj Radzajewska Radzajewski Radzanowska Radzanowski
    Radzevich Radziejowski Radzion Radziukiewicz Radziwanowska Radziwanowski Radziwiłowicz Radziwiłłowicz
    Radziwoniuk Radziwonowicz Radziwołek Radzyńska Radzyński Ragiel Ragin Raginia Rahn Railian Rainer Rainka
    Rajner Rajszczak Rajtor Rajzyngier Rakhmanov Rakhmatov Rakociński Rakocy Rakocz Rakovets Ralcewicz Ram
    Ramadan Ramanau Ramanenka Ramanouski Ramazanov Ramik Ramirez Ramska Ramski Ranachowska Ranachowski
    Rangosz Ranik Rapalska Rapcewicz Rapcia Rapeła Rapiej Rapiejko Rapsiewicz Raputa Rassek Raszpla Rathnau
    Ratman Ratomska Ratomski Ratyna Ratz Rauba Raudzis Rauer Rausch Raut Rawat Rawecka Rawecki Ray Raz Raza
    Razhyk Razmadze Rdzeń Rebelka Rebryk Reclaw Reddig Redecka Redecki Redkiewicz Redlak Redlarska Redlarski
    Redlica Redmerska Redmerski Reduch Reduta Redziak Redzynia Redźko Reetz Reformat Regent Regucka Rehman
    Reid Reif Reinhard Reisner Reja Rejchert Rejczyk Rejewska Rejewski Rejf Rejkiewicz Rejmus Rejner Rejter
    Reka Rekieć Rektor Rekść Relewicz Relidzyńska Relidzyński Reliszka Remba Rembak Rembalski Rembiszewska
    Rembiszewski Rembowicz Remer Remiś Rendak Rendaszka Reniec Renkel Renner Rentz Renz Repczyńska
    Repczyński Repelewicz Reperowicz Repetska Repich Repińska Repiński Repko Reptak Rerek Rerich Resel
    Reshetnik Reshetylo Resmer Respekta Restas Reszczyk Reszelewska Reszelewski Retecka Retecki Retman
    Retmańczyk Rettig Retzlaff Revutskyi Rewa Rewer Rewerski Rewiński Rewolińska Rewoliński Rewucka Rey
    Reynolds Reznikov Reznikova Reznychenko Reńda Reńska Reński Reś Reślińska Reśliński Ri Riaba Riabchun
    Riabokin Riabovol Riabtseva Riabushchyts Riabyi Riazanova Riazantseva Richard Riebandt Riemel Rinc
    Ringel Rinke Ripa Rippel Riss Ristau Rittau Rivera Rizhko Riznychenko Robaszewska Robaszewski
    Robaszyński Robel Robertson Robińska Rocha Rochmiński Rochniak Rochnowska Rochnowski Roczkowska
    Roczkowski Rocznik Roczniok Rodacka Rodacki Rodenko Rodin Rodina Rodrigues Rodzewicz Rodziak Rodzim
    Rodzińska Rodzoś Rodź Roga Rogalla Rogaś Rogocka Rogocki Rogozinska Rogozinski Rogoźnicka Roguś Rogóz
    Rohda Rohoza Roienko Rojkiewicz Rokitowska Rokitowski Rokoszak Rokoszewska Rokoszewski Rokuszewska Rol
    Rolecka Rolecki Rolf Roll Romaniewicz Romas Romashchenko Romasz Romaszewski Romańczak Romańczukiewicz
    Rombalska Rombalski Romer Romiński Romowicz Rompalska Rompalski Ron Rondoś Ronek Ronewicz Ronkowska
    Ropińska Ropiński Ropska Rosenau Rosenbaum Rosenberger Rosenfeld Rosenkiewicz Roshchuk Rosikiewicz
    Rosinke Rosman Rosokha Rosolska Rosołowicz Rostalski Rostaş Rostaș Rostocka Rostocki Rostowska Rostowski
    Roszkowicz Roszman Rothkegel Rott Rotta Rouba Roubo Roza Rozdobudko Rozenbaum Rozental Rozentalska
    Rozentalski Rozhok Rozicka Rozicki Rozik Roziński Rozkuszka Rozlazły Rozmysł Rozmyślak Roznerska
    Rozpendek Rozpłochowski Rozworska Rozworski Rożeń Rożnawska Rożnawski Rożniak Rożniakowski Rożnowicz
    Rożynek Rubakha Rubaniak Rubets Rubinkiewicz Rubinkowska Rubinstein Rubis Rubińska Rubka Rubtsova Rubys
    Ruc Ruchka Ruchniak Ruciak Rudakov Rudalska Rudalski Rudenok Rudik Rudkovska Rudniev Rudnieva Rudnitska
    Rudoi Rudomina Ruducha Rudych Rudyka Rudzewicz Rudzis Rukasz Ruliński Rumiantsev Ruminkiewicz Rumowska
    Rumowski Rumpca Run Runowicz Rupiczak Ruprecht Rusa Rusakov Rusanov Rusecka Rusewicz Rusina Rusinkiewicz
    Rusnac Rust Rustamova Rusyniak Rusz Ruszak Rusztowicz Rusztyn Rutowska Rutowski Ruzhytskyi Ruść Rużyło
    Rybachenko Rybakov Rybandt Rybałtowska Rybałtowski Rybchenko Rybii Rybin Rybina Rybok Rybotycka
    Rychwalska Rychwalski Rychła Rycka Ryczaj Ryczak Ryczan Rydarowicz Ryder Rydian Rydza Rydzio Rylik
    Rymaniak Rymanowska Rymek Rymszewicz Rymuszka Rynarzewska Rynarzewski Rynas Rynczak Rynda Rynk Rynka
    Rynkun Rynowiecka Rynowiecki Rypa Rysiewska Rysiewski Rystwej Rysztak Ryta Rywacki Rywak Ryzha Ryzhak
    Ryzhov Ryzop Ryłka Ryłowicz Ryźlak Ryżka Ryżyk Rzadek Rzayev Rzeczyca Rzedzicka Rzedzicki Rzekiecka
    Rzekiecki Rzemieniak Rzemieniec Rzemieniewska Rzemieniewski Rzemieniuk Rzepczak Rzepiel Rzepisko
    Rzepiszczak Rzepnikowski Rzepski Rzepus Rzeszewicz Rzezak Rzeńca Rześna Rześny Rzeźwicki Rzotkiewicz
    Rzycka Rzym Rzymanek Rzępała Rzęsiewicz Rólkiewicz Rózik Róża Różana Różowska Różowski Rąbalski Rąbel
    Rąg Rąpel Rębała Rębecka Rębecki Rębelska Rębelski Ręka Rękiewicz Saad Saakian Sabadach Sabalski Saban
    Sabatowicz Sabina Sacawa Sacała Sachaj Sachanowicz Sachar Sachenko Saczek Sad Sadawa Sadikov Sadokierski
    Sadolewska Sadolewski Sadrak Sadrakuła Sadurek Sadyś Sadzak Sadzewicz Sadzyńska Sadzyński Saeed Safarova
    Saga Sagadyn Sagalara Saginadze Sagun Sahin Sajaia Sajdera Sajecki Sajnaga Sakalou Sakalova Sakharova
    Sakhnenko Sakhnevych Sakun Sakuta Sakwińska Sakwiński Salabai Salauyou Salecka Salem Salenko Salewicz
    Salicka Salicki Salim Salimov Salisz Salman Salnik Salnikova Salnyk Saltarska Salwierak Salwierz
    Salwińska Salwiński Samardak Samarska Samarskyi Sambór Samchenko Samcik Samkharadze Samoiliuk Samolczyk
    Samolewicz Samoluk Samoćko Sampolski Sampławska Sampławski Samsonenko Samujło Samuliak Samus Samusenko
    Sanakiewicz Sancewicz Sanders Sandhu Sandomierz Sandrzyk Sandulenko Sanduliak Sanecznik Saniak Sanicka
    Sanicki Sanigórska Sanko Saparov Sapela Sapich Sapierzyńska Sapierzyński Sapieszko Sapieżko Sapiha
    Sapikowska Sapikowski Sapkowska Sapryk Saprykin Saprykina Saputa Sarafin Sarana Sarapuk Sarara
    Sarbiewska Sarbiewski Sarecka Sarka Sarkisian Sarleja Sarnek Sarokin Sarowska Sarowski Sarwińska Sasiuk
    Saska Sasko Saskowska Sasnal Satkiewicz Saulewicz Sauliak Saunders Savanchuk Savaryn Savenkova
    Savitskaya Saviuk Savkiv Savko Savonik Savva Sawczyńska Sawczyński Saweczko Sawic Sawiniec Sawiuk
    Sawkiewicz Sawlewicz Sawoch Sawośko Sawron Sazonov Saładajczyk Saładyga Sałak Sałamun Sałatka Sało
    Sańpruch Scharf Scheibe Scheller Scherer Schewe Schick Schier Schiffer Schlegel Schlesinger Schmeichel
    Schodnik Schoen Schoepe Schott Schreier Schröter Schuetz Schwarzer Schwierz Schön Sczesny Scąber Segeth
    Segev Segieda Seheda Seibert Seiffert Sejda Selenta Selerowicz Selivanov Seliwiak Selka Selmaj Selonka
    Selwesiuk Selwon Seman Sembratowicz Semeniuta Semeniv Semenyshyn Semenyuk Semerak Semeryło Semianchuk
    Semkowicz Semmler Semper Sempowicz Senchyshyn Senczyszyn Sendera Senderecka Senderowicz Sendyka Senejko
    Senetra Seniuta Sennik Sentkowska Sentkowski Senyshyn Sepczyński Sepielak Sepiół Serafiniak Serafinowska
    Serafinowski Serczyk Serdak Serdiukova Seredyka Seretny Sergiej Serkies Serniak Servetnyk Serwańska
    Serwański Serwecińska Serwik Seręga Serżysko Setera Seternus Setiawan Setny Sevastianov Sevastianova
    Sewastynowicz Sewioł Seńczuk Shablii Shafran Shahi Shaida Shaik Shakhov Shakirov Shalamai Shalev Shandra
    Shani Shaparenko Shapka Shapovalenko Sharai Sharan Sharapov Sharapova Sharifov Sharon Sharov Shatalov
    Shatalova Shatokhina Shatruk Shatylo Shautsou Shavadze Shavel Shchehlova Shcherbaniuk Shchuka Shchukin
    Shchukina Shchurko Shein Shekhovtsova Shendryk Shershun Shestopal Shestopalova Sheuchyk Shevtsiv
    Shkabara Shkil Shkinder Shkola Shkolnyi Shkurat Shliakhova Shmalko Shmat Shmorhun Shmyhelska Shmyhelskyi
    Shovkoplias Shovkun Shpakouski Shram Shtelmakh Shtoiko Shtuka Shuba Shubin Shubina Shubitidze Shukurov
    Shulhin Shulhina Shults Shulyk Shumakov Shumakova Shumyk Shutenko Shutiak Shveda Shvediuk Shvedov
    Shvedova Shvetsov Shydlovska Shydlovskyi Shyika Shyliuk Shynkarchuk Shynkevich Shypka Shyriaieva
    Shyshkova Shyshova Siadek Siadkowski Siamashka Siamionau Siankiewicz Sianos Siata Siatecka Siatecki
    Siaśkiewicz Sibanda Sibilak Sibora Sic Sich Sidarenka Sidaruk Sidelnik Sidelnyk Sidletska Sidletskyi
    Sidorov Sidorova Sidz Siech Sieciechowicz Sieczak Sieczkiewicz Siedlanowski Siedlarska Siedlarski
    Siedlikowska Siedliska Siedliski Siedlińska Siedliński Siedykh Sieger Siejda Siejkowska Siejkowski
    Siekirka Sielezin Sieluk Siemak Siembor Siembrzuch Siemianowicz Siemieniecka Siemieniecki Siemieniewska
    Siemieniewski Siemienik Siemienkiewicz Siemionko Siemionkowicz Siemionow Sier Siera Sieraczek Sierawska
    Sierawski Sierdzińska Sierdziński Sierkowska Sierkowski Sierla Sierov Sierpina Sierszulska Sierszulski
    Sierszyński Sierzan Sierzchała Sietnik Siewak Siewielec Siewier Siewko Sikorzyński Sikut Silarska
    Silarski Silchuk Silezin Silin Silina Siliwoniuk Silko Silkowska Silny Similak Simonenko Simoniuk Simora
    Sindrewicz Siniak Siniecki Sinior Siodmok Siodłowska Siodłowski Sionkowski Sipika Sipior Sipińska
    Sipiński Sipta Sirak Sirman Siruk Sitak Sitar Sitowska Sitowski Siudowski Siudym Siudyła Siudziak Siurda
    Siuty Siwakowska Siwakowski Siwarska Siwczuk Siwczyńska Siwczyński Siwica Siwiela Siwkowska Siwkowski
    Siwocha Siąkowska Siąkowski Sićko Sięda Siłaczuk Siłakowska Siłakowski Siłuszyk Sińczuk Sińska Siński
    Skabara Skabek Skachko Skaczyło Skalak Skarba Skarbowska Skarboń Skaskiewicz Skałban Skelnik Skerka
    Skibiszewska Skibska Skibski Skica Skierczyńska Skieresz Skipioł Skipor Skirło Skitał Sklepik Skliaruk
    Sknadaj Skobodzińska Skobodziński Skoczykłoda Skolasińska Skolasiński Skomin Skomorucha Skomski
    Skonieczek Skonieczko Skonka Skopiak Skopowska Skopowski Skorb Skornia Skorusa Skorwider Skoryna
    Skotowski Skowerska Skowyrska Skowyrski Skowysz Skośkiewicz Skrabut Skrobiranda Skrobiszewska
    Skrobiszewski Skrodziuk Skrouba Skroński Skroś Skrudlik Skrycka Skrycki Skrypak Skrypnychenko Skrzatek
    Skrzeczek Skrzoska Skrzycka Skrzycki Skrzydeł Skrzydłowska Skrzydłowski Skrzymowska Skrzymowski
    Skrzyniecka Skrzypaszek Skrzypecka Skrzypecki Skrzypik Skrzypoń Skrzyszewski Skrzątek Skrętkowski Skręty
    Skubela Skubera Skubich Skubiszyńska Skubiszyński Skumiał Skupiewska Skupiewski Skupski Skurak Skurat
    Skuratko Skurczyński Skurnóg Skurzak Skutecka Skutecki Skvortsov Skwarcan Skwarna Skwarzec Skwarzyńska
    Skwarzyński Skwirowska Skwirowski Skworzec Skóbel Skórak Skórczewska Skórczewski Skórczyńska Skórczyński
    Skórko Skęczek Składnikiewicz Slavinska Slavych Slawik Sledz Sleziona Slipchuk Slisarenko Slota Slynko
    Slyvchuk Slyzhuk Smaciarz Smacka Smacki Smagowicz Smagur Smagłowski Smakulska Smakulski Smalara Smalera
    Smarul Smarzewska Smarzewski Smarzyk Smarż Smażyk Smelcerz Smelkowska Smelkowski Smerczek Smerdel
    Smerecka Smerecki Smereczniak Smiatacz Smieszkoł Smiian Smilgin Smishko Smit Smitiukh Smoguła Smolana
    Smolczyk Smolewski Smolich Smolii Smoliniec Smolinska Smolkovych Smolna Smolnicka Smolnicki Smorga
    Smorongiewicz Smotryś Smrek Smugała Smukowska Smukowski Smulczyńska Smulczyński Smulewicz Smulik
    Smuniewska Smuniewski Smurawa Smurzyńska Smutkiewicz Smużniak Smużyńska Smyczyk Smyrgała Smólska Smólski
    Smółkowska Smółkowski Smędra Smętkowska Smętkowski Snażyk Sneka Snella Snisarenko Snitsar Snop Sobalak
    Sobalska Sobalski Sobaniak Sobała Sobechowicz Soberka Sobiela Sobiepan Sobierajewicz Sobiesiek
    Sobiesińska Sobiesiński Sobieszczak Sobiewski Sobipan Sobirov Sobolevska Sobolevskyi Soborska Soborski
    Soboszek Sobutka Sochala Sochań Socińska Sociński Soczewica Soczka Soczomska Sodkiewicz Soińska Sokha
    Sokhan Sokolewicz Sokolski Sokoluk Sokołow Soldat Soldatov Soldatova Soleniec Soliev Solisz Sollich
    Solonynka Solop Solowska Soltan Solus Somak Somerfeld Somerlik Somionka Somla Sompolska Sompolski Somyk
    Soni Sonsala Sopała Sopek Sopiarz Sopilniak Sopniewska Sopniewski Sopolińska Soporek Soproniuk Sopuch
    Sopyło Sorbjan Sordoń Sorn Sorochuk Sorochynskyi Sorokhan Sorokopud Sorokosz Soroń Sorówka Sosa Sosenko
    Sosnowiec Sotel Soter Sotnikov Sotor Sotoła Soviak Sowierszenko Sowijak Sowisz Sowka Sowulewska
    Sołdaczuk Sołdek Sołga Sołkowicz Sołomianko Sołowij Sołowska Sołowski Sołtysiuk Sołtyszewski Sołśnia
    Sośnik Spadek Spallek Spaltabaka Spasówka Spałka Speier Sperczyńska Sperczyński Spiak Spich Spicha
    Spichalski Spiegel Spigiel Spik Spiszak Spiżak Spochacz Spocińska Spoczyński Spodniewska Spodniewski
    Spora Sprus Spędzia Spławińska Spławiński Sral Srebnicka Srebnicki Sribna Sribniak Stabrowska Stabrowski
    Stachak Stachelski Stachiewicz Stachulak Stachulska Stachulski Stachuła Stackiewicz Stafin Stafiniak
    Staisz Stakhova Stalska Stalski Stana Stanach Stanchły Stanczewska Stanczewski Staneczek Stanejko
    Stanieczek Stanior Stanishevska Stanislavchuk Stanislavska Stanisławczuk Stanisławowska Staniukiewicz
    Staniul Staniów Stanka Stankovych Stankowicz Stanna Stanok Stanosek Staravoitau Starba Starczak Starczan
    Starczynowska Starczynowski Starego Stareńczak Starikov Starkbauer Starkiewicz Staroch Starodubets
    Starodubtseva Staromłyńska Staromłyński Starosielec Starovoit Starszuk Starzewska Starzewski
    Starzykiewicz Stasak Stasenko Stasevich Stashenko Stasiaczyk Stasienko Stasiełowicz Stasina Stasio
    Stasiorowska Stasiorowski Stasiurka Stasiła Staszuk Staszyk Statkevych Statucka Statucki Stavytska
    Stawieraj Stawierej Stawisińska Stańczewska Stańczewski Staśczak Staśto Stebelski Steblik Stecewicz
    Stechura Stecura Stefanicka Stefanicki Stefanides Stefanova Stefańczak Stegenda Stegienka Steindor
    Steinhof Steinka Steinmetz Stella Steller Stelmarczyk Stelmasiewicz Stelęgowska Stelęgowski Stembalska
    Stembalski Stemler Stempa Stempniewska Stempniewski Stempnik Stempowska Stempowski Stempska Stempski
    Stengert Stepan Stepanchenko Stepanian Stepanyan Stepańczuk Stepczyńska Stepko Steppa Ster Stera
    Stercuła Sterczyńska Sterczyński Sternalska Sternalski Stetsiura Stetsiv Stetsyshyn Stevens Stećko Stoba
    Stobnicka Stobnicki Stobrawa Stochniał Stock Stoczko Stoczkowska Stoczkowski Stodolnik Stogniew Stohnii
    Stojda Stojowska Stojowski Stolarzewicz Stolaś Stolcman Stoliarov Stoll Stolpa Stolpe Stompel Stompór
    Stomski Stone Stoparczyk Stor Storma Stormowska Stormowski Storonowicz Storozh Stosz Stotska Stoyanov
    Stołek Stpiczyńska Strachowski Stradza Strahl Stram Stramowska Stramowski Strankowska Strankowski
    Strapczuk Strasburger Strashko Stratulat Straube Strawczyńska Strawczyński Strawińska Streb Streflik
    Strelau Strelchuk Streltsov Streltsova Stremlau Striletska Striletskyi Stroczyńska Stroczyński Strohush
    Strojewska Strojewski Strojk Strojnowska Strojnowski Stromczyńska Stromidło Stronk Stropa Strucińska
    Struciński Struczyk Struczyński Struniawska Struniawski Strunk Strupczewski Strupińska Strupiński
    Strusiewicz Struts Strutynska Strutynskyi Strycharek Stryczniewicz Stryczyńska Stryczyński Stryjakiewicz
    Stryjecka Stryjecki Stryjniak Stryzheus Strzalińska Strzaliński Strzałko Strzelbicka Strzelbicki
    Strzemkowska Strzemkowski Strzeszyńska Strzeszyński Strzewiczek Strzop Strzylak Strzys Stróżczyk
    Strączewska Strąkowski Stsiapanau Stuba Stubba Stuczyk Studenna Stuka Stukus Stupiec Stupińska Stupiński
    Stupnicka Stupnicki Sturgulewska Sturgulewski Sturlis Stusik Stusio Stusińska Stusiński Stuzhuk Stułka
    Styba Stybak Stybel Styburska Styburski Stych Styga Stylok Stylska Stylski Styrkacz Styrkowiec Styrylska
    Styrylski Styszko Stęc Stękała Stępek Stęsik Stężewska Stężewski Stężowska Stężowski Stǎnescu Subbotina
    Subczyński Subedi Subel Subsar Substelny Subzda Suchacz Suchanowska Suchar Suchińska Suchodół
    Suchorzewska Suchorzewski Suchowierska Suchowierski Suchowolec Suchołbiak Suchońska Suchoński Sudek
    Sudenis Sudolska Sudolski Sudomirska Sudomirski Sudyka Sudzik Sudzińska Sudziński Sufa Sufryd Sujeta Suk
    Sukhanov Sukhina Sukhodolska Sukhorukov Sukhorukova Sukhova Sukhovii Sukhyi Sukhyna Sul Sularczyk
    Suleimanova Sulejczak Sulenta Suleymanov Sulgostowska Sulgostowski Sulicka Sulicki Sulim Sultanova
    Sultonov Sulwińska Sulwiński Sulżycka Sulżycki Sumionka Sumisławski Sumyk Supa Superczyńska Superczyński
    Supieta Supron Suproniuk Supronowicz Suprunowicz Supłat Suraj Sural Surawski Surażyńska Surażyński
    Surdykowska Surdykowski Surgał Surgiel Surgiewicz Surkova Surmacewicz Surmacka Surmacki Surmik Surmińska
    Surowik Surowska Surowski Surwiło Surygała Sushchyk Susidko Suslov Suslova Susuł Suszyna Susłowicz Suter
    Suwald Suwisz Suzuki Suława Svanidze Sviderskyi Svintsitskyi Svitlyk Svyryda Svyrydov Swajda
    Swaryczewska Swaryczewski Swendrowska Swientek Swinarska Swinarski Swobodzińska Swobodziński Swojnóg
    Sworobowicz Swędra Sybidło Sychevska Sychla Sychniak Sycik Sydorak Sydorko Sydorovych Sygdziak Sygnet
    Sygocka Sygocki Syk Sylenko Sylwesiuk Sylwestrzuk Symko Symon Symonchuk Symonovych Symotiuk Symołon
    Symula Syncerz Synchuk Syniec Synowczyk Synytska Synytskyi Sypniewicz Sypytkowska Sypytkowski Syrewicz
    Syrkiewicz Syrovatka Syrytczyk Syrówka Sys Syski Sysoiev Sysoł Sytniewska Sytniewski Syvolap Szaban
    Szabelak Szabra Szabrański Szachogłuchowicz Szacht Szaciło Szaciłowska Szaciłowski Szadach Szadowiak
    Szadziul Szafara Szafarowicz Szaferska Szaferski Szafirski Szafranowicz Szafranowska Szafranowski
    Szagała Szajba Szajbe Szajbel Szajczyk Szajder Szajerka Szajerski Szajnoga Szajowska Szajowski Szajrych
    Szak Szalc Szalecka Szalecki Szalkiewicz Szamborski Szamot Szamotulska Szamotulski Szamrej Szamreta
    Szandar Szandrach Szanter Szantula Szar Szaradowska Szaradowski Szarla Szarowolec Szarwas Szarłat
    Szatałowicz Szatańska Szatybełko Szawala Szawica Szawkało Szawuła Szał Szałagan Szałajda Szałapata
    Szczakowska Szczałba Szczałuba Szczeciak Szczegot Szczekała Szczeklik Szczep Szczeponik Szczepska
    Szczepski Szczerbaniewicz Szczerbień Szczerbowicz Szczerepa Szczerska Szczerski Szczesik Szczeszak
    Szcześ Szczodra Szczodruch Szczołko Szczublewska Szczublewski Szczucińska Szczuciński Szczudlak
    Szczudlińska Szczudrawa Szczukiecki Szczuko Szczupał Szczurkowska Szczurkowski Szczybura Szczycińska
    Szczygiełek Szczygliński Szczypel Szczypuła Szczyrk Szczębara Szczęszek Szecel Szefczyk Szeffer Szeffler
    Szefka Szeflińska Szefliński Szefner Szefs Szejko Szekalska Szelast Szelech Szelejewska Szelejewski
    Szeler Szeller Szemberg Szemis Szemla Szemro Szeniak Szepe Szepieniec Szeptak Szeptycka Szeptycki
    Szeraszewicz Szereda Szerejko Szerement Szerer Szerewicz Szerment Szermer Szerszeniewska Szerszeniewski
    Szerszunowicz Szestowicki Szeszycka Szeszycki Szetlak Szewczyńska Szewczyński Szewieczek Szewior
    Szewioła Szkalska Szkalski Szkaradnik Szkatulnik Szklany Szklar Szklarzewska Szklarzewski Szkobel
    Szkodny Szkudelska Szkudelski Szkudlarczyk Szlafka Szlage Szlanta Szlaużys Szlawska Szlawski Szlegel
    Szlembarska Szlembarski Szlempo Szlezak Szlezinger Szląskiewicz Szlędak Szlęg Szmagara Szmajdka Szmeja
    Szmejter Szmel Szmelc Szmidel Szmidla Szmidtka Szmidtke Szmist Szmiłyk Szmukała Szmygiel Szmyła
    Sznajdrowska Sznaza Sznek Sznerch Sznigir Sznurawa Sznurkowska Sznurkowski Szombierska Szombierski
    Szomborg Szomko Szopieraj Szortyka Szotko Szoła Szołdrowska Szołdrowski Szołtun Szpaczek Szpaczyńska
    Szpaczyński Szpajer Szpalerska Szpalerski Szpejda Szperlak Szperling Szpiega Szpiganowicz Szpik
    Szpikowska Szpikowski Szpin Szplit Szponarska Szponarski Szponik Szpoper Szporak Szpotańska Szpotański
    Szprengel Szprengiel Szprync Szpryngiel Szpulecka Szpulecki Szpurek Szpytman Szrajda Szrajner
    Szramkowska Szramowiat Szremska Szremski Szroeder Sztabnik Sztachańska Sztachański Sztafa Sztafińska
    Sztajerwald Sztajner Sztal Sztama Sztandara Sztando Sztandur Sztanga Sztangierska Sztangierski Sztanka
    Sztejn Sztejna Sztelmach Szternel Sztogryn Sztolc Sztor Sztrajt Sztramska Sztrauch Sztubecka Sztubecki
    Sztuder Sztukiewicz Szturma Sztwiorok Sztybor Sztybrych Sztykiel Sztylc Sztyma Sztymelska Sztymelski
    Sztąberek Szuban Szuberski Szubiak Szubstarska Szucka Szucki Szufa Szuflita Szuflińska Szufliński
    Szufnara Szuk Szukaj Szukiewicz Szuksztul Szulak Szulakowska Szulakowski Szulda Szulejewska Szulejewski
    Szulejko Szuler Szulewska Szulewski Szulgo Szulikowska Szulikowski Szulska Szulski Szultk Szulwic
    Szulęcka Szulęcki Szumert Szumełda Szumiata Szumiał Szumigraj Szumlewicz Szumotalska Szumotalski
    Szumowicz Szupieńko Szupke Szupryczyńska Szupryczyński Szuran Szurgacz Szurgocińska Szurgociński
    Szurkiewicz Szurmiej Szurpit Szuryn Szutenbach Szutka Szuty Szuwara Szuwart Szułakiewicz Szułczyńska
    Szułczyński Szwabowski Szwach Szwajcowska Szwajcowski Szwajczak Szwajdych Szwajgier Szwalbe Szwanke
    Szwarcer Szwedka Szwedko Szwejser Szwinge Szwęch Szybilska Szybilski Szybist Szybko Szybkowska
    Szybkowski Szyburska Szyburski Szychowicz Szychułda Szyfter Szyjer Szykowska Szykowski Szykut Szylin
    Szylka Szylkiewicz Szymalak Szymalski Szymczakowski Szymczewska Szymczewski Szymczukiewicz Szymczykowska
    Szymczykowski Szymczyna Szymczyńska Szymeczek Szymek Szymelfenig Szymerowska Szymerowski Szymlak Szymlek
    Szymoniuk Szymyślik Szynalska Szynalski Szyndzielorz Szynkler Szypa Szypczyński Szyrner Szyroki
    Szyrwiński Szywalska Szyłobryt Szóstakowski Szóstkiewicz Szłykowicz Sönmez Sørensen Sądelska Sądelski
    Sądkiewicz Sądowicz Sądowski Sągol Sąsiada Sęczek Sędzińska Sędziński Sękalska Sękalski Sękara Sępkowska
    Sępkowski Sętkowska Sętkowski Słabek Słabkowska Słabkowski Słabolepsza Słabolepszy Słabowska Słabowski
    Słabuszewska Słabuszewski Sładkiewicz Słania Słapińska Słapiński Sławczyk Sławęta Słociak Słocka
    Słoczyńska Słodkowicz Słomiak Słomianny Słoniowski Słowek Słupczewski Słupina Służały Tabachuk Tabaczyk
    Tabas Tabiszewska Tabiszewski Taborowska Taborowski Taboł Tabuła Tacka Taczanowska Taczyńska Taczyński
    Tadaj Tadaszak Tadeja Tadeuszak Tadevosyan Tadewicz Tadyszak Taisner Tajl Takuśki Talaska Talbierz
    Talibov Talpa Tam Tamaka Tamas Tamborek Tamkun Tamoń Tamul Tamulewicz Tankielun Tanona Taper Taraban
    Taradaj Taradyś Tarajko Taramas Taranov Taranowska Taranowski Tarasin Targaszewska Targaszewski
    Targańska Targański Tarhonii Tarkiewicz Tarnawczyk Tarnecka Tarnecki Tarnogórska Tarnogórski Tarnopolski
    Tasiemska Tasiemski Tasz Tatarka Tatkowska Tatkowski Tatomir Tatura Tavartkiladze Tawrel Tańczyk Taş
    Taźbirek Tchanturia Tchelidze Tchir Tchoryk Tchórznicka Tchórznicki Techmańska Techmański Teichman
    Teichmann Tejs Tekla Teleon Telesiewicz Telesińska Telesiński Telicka Telinga Teliuk Teluk Telychko
    Temel Templer Tenenbaum Tenus Terebiński Terebun Terechowicz Terefeńko Terek Terekh Terepka Tereszczak
    Terman Ternovyi Terpińska Terpiński Tertychna Tertychnyi Tes Tesarczyk Tesarska Tessar Teszka Tesznar
    Thakur Tharu Theil Thiele Thielmann Thiem Thoma Thomann Thomson Tian Tikhonov Tikhonova Till Tim
    Timofieieva Timoszyk Titenko Tiupa Tiurin Tiurina Tkaczyszyn Tkaczyńska Tkaczyński Tkalenko Tlak Tlatlik
    Tobiasiewicz Tobiański Tobolewska Tobolewski Tobółka Tochwin Tocka Tocki Todorowska Todorowski Tofiluk
    Tojza Tokareva Tokarskyi Tokaruk Tokłowicz Tolasz Tolkach Tolkachova Tolksdorf Tolmachova Tolstykh
    Tomaczkowska Tomak Tomash Tomasikiewicz Tomaszak Tomczykiewicz Tomczykowska Tomczykowski Tomella
    Tomenchuk Tomiałojć Tomik Tomiuk Tomtas Tomtała Tondyra Tonkonoh Topij Topolewicz Toporczyk Toporska
    Toporski Topp Torbiarczyk Torbicka Torbiczuk Torbińska Torenc Torhan Toroń Torzecka Torzecki Torój Tosun
    Tosza Toth Totska Towalska Towalski Towarnicka Towarnicki Tołyż Tońska Toński Traczykiewicz Trafiał
    Trajer Trala Tram Traskowski Tratwal Trautman Trawnik Trałka Trebnio Trefler Trefoń Trejda Trejtowicz
    Trelewicz Trembach Trenda Trepanowski Treszczotko Tretyn Trinczek Trishch Trishchuk Trochanowska
    Trochanowski Trochym Trociuk Trofimenko Trojok Trojszczak Tromsa Troszka Troszyńska Troszyński Trot
    Trościańczyk Truch Truchlewska Truchlewski Truchta Trudnos Trudzik Trukan Trumińska Trumiński Trun Trunk
    Trunov Trunova Truong Trusiuk Trusińska Trusiński Truskawa Truskolawska Truta Trybalski Trybowska
    Trybowski Trych Trychta Tryczyńska Tryczyński Trykoszko Trykowska Trykowski Tryksza Trynkos Trystuła
    Tryzno Trzajna Trzaskuś Trzciałkowska Trzciałkowski Trzcielińska Trzebuchowska Trzeciecki Trzeciok
    Trzecińska Trzeciński Trzepak Trzepla Trzeszczak Trzuskolas Trzuskowski Trząsalska Trząsalski Trzęsiok
    Trzęsowska Trzęsowski Trân Trąba Trębińska Trębiński Trędowski Trętowski Trương Trấn Trịnh Tsalko
    Tsapenko Tsapko Tsar Tsarova Tsehelnyk Tsertsvadze Tsiareshka Tsimashenka Tsintsadze Tsisar Tsitou
    Tsiupka Tsoi Tsoma Tsukanov Tsulaia Tsurtsumia Tsvietkov Tsvyk Tsybenko Tsybulia Tsyhaniuk Tsyhankov
    Tsymbala Tsymbalista Tubaja Tuchalska Tuchalski Tudaj Tuderek Tudrujek Tujak Tukiendorf Tulejko
    Tulikowska Tulwin Tumas Tumidajska Tumidajski Tumula Tumulka Tunk Tunkel Tuora Tupalska Tupalski Tupko
    Turadek Turaev Turant Turbakiewicz Turczanik Turel Turlik Turmanidze Turno Turok Turostowska Turovskyi
    Turuk Turulska Turulski Turuta Turzyniecka Turło Tuszkowska Tuszkowski Tuzinek Tuśnio Twardokęs Twarduś
    Twardygrosz Twardysko Twarogowska Twarogowski Twarużek Twerd Twork Tworko Tworzewska Tworzewski Tybel
    Tyborczyk Tybulczuk Tybuszewska Tybuszewski Tyde Tyfel Tykarska Tykarski Tykha Tykhomyrova Tyksińska
    Tykwińska Tykwiński Tylisz Tymchak Tymiec Tymkowski Tymochko Tymochowicz Tymofiichuk Tymon Tymoshchenko
    Tymoshyk Tymosz Tymowicz Tympalska Tymura Tyndel Tynecka Tynecki Tynek Tynkaliuk Typańska Typrowicz
    Tyrajska Tyrajski Tyranowska Tyrpuła Tyrybon Tysarczyk Tyshko Tyshkovets Tyshyk Tysler Tyszuk Tytychko
    Tywanek Tyza Tyła Tyśkiewicz Tănase Tęgowska Tęgowski Tęsiorowska Tęsiorowski Tętnowska Tłuchowska
    Tłuczkiewicz Ubowska Ubowski Ubycha Uchrońska Uchroński Ucieklak Ufel Ugarenko Ugolik Uhl Ujas Ujda
    Ujejska Ujejski Ujek Ulak Ulan Ulaniuk Ulaszewski Uler Ulianov Uliczny Ulidowski Ulko Ulkowska Uller
    Ullrich Ulma Umanska Umańska Umański Umerle Umiastowska Umlauf Undro Ungeheuer Unhurian Uniejewska
    Uniejewski Uniwersał Unton Uptas Uramowska Urba Urbaczewska Urbaczewski Urbanczyk Urbankowska
    Urbankowski Urbanovych Urbanska Urbasik Urda Urjasz Urlich Urman Ursul Uruska Urwan Uryasz Uryn Uryniak
    Uryniuk Uryzaj Usach Usachova Usatiuk Usidus Usińska Usman Usnarski Usov Ustach Ustarbowska Ustarbowski
    Ustianowska Ustianowski Ustinov Ustinova Ustrzycka Ustrzycki Ustymchuk Ustymowicz Usydus Utkina Utnicka
    Utracka Utracki Utratny Utzig Uvarov Uzarczyk Uzarewicz Uziak Uścio Uściłowicz Uściłowska Uściłowski
    Uździło Vaida Vaitovich Vakarchuk Vakhula Vakulich Vakuliuk Valihura Valiyev Varabyou Varchenko
    Varlamova Varodi Vartsabiuk Varvaruk Varyvoda Vasenko Vasilenka Vasileuskaya Vasileva Vasiliuk Vasin
    Vaskevych Vaskovska Vasylyshyna Vatseba Vatsyk Vdovin Vedmid Veklych Velhan Velichko Venhryn Verbitskyi
    Verbova Vereskun Verheles Verkhohliad Veselov Veselova Veselovskyi Veselska Vetter Vialichka Viarenich
    Vietrov Vietrova Vilchynskyi Villanueva Vincent Vinichuk Vinnichuk Virstiuk Vitiv Vitrenko Vitvitskyi
    Vityk Viun Vivcharyk Vladimirova Vlas Vodopian Voichenko Voina Voinalovych Voitsekhivskyi Volchenko
    Volianskyi Volianyk Volkava Volkovska Volobuiev Volobuieva Volochii Volodin Voloshenko Volosiuk Volskyi
    Vonsovych Voron Voronenko Voroniak Voronkov Voropaieva Voroshchuk Vorozhbyt Vorreiter Voskoboinyk
    Voytovych Vrublevskyi Vyhovska Vykhopen Vykhovanets Vykhrystiuk Vynnychenko Vynnychuk Vynokurova
    Vyshniakov Vyshniakova Vyshynska Vysochanska Vysochyn Vysotski Vytrykush Wabia Wabiszczewicz Wabno Wacha
    Wacholc Wachoń Wachoński Wacht Wachtarczyk Wacięga Wacowski Wacyk Waczyński Wadych Wadyl Wagan Wagstyl
    Waiss Wajcht Wajdowicz Wajsman Walada Walancik Walania Walankiewicz Walasz Walatek Walczybok Wald
    Waldman Walencki Walentowska Walentowski Waler Walerian Walerowska Walerowski Walerysiak Waleryszak
    Walesa Waleszczak Waleszczyńska Waleszczyński Walewacz Waleń Waleśkiewicz Walich Walichniewicz
    Walichnowska Walicht Waliszko Walka Walke Walla Walniczek Walor Walorska Walorski Walosczyk Waltar
    Waluch Walusz Waluszko Waluśkiewicz Walęciak Walęga Wan Wanczura Wanda Wandelt Wandzioch Wandzlewicz
    Wanicka Wanicki Wanik Wanowska Wanowski Wansel Wantoch|Rekowska Wantoch|Rekowski Wantoch-Rekowski
    Wantoła Wantusiak Wantuła Wapiennik Wapniarz Warachewicz Warachowska Warachowski Waracki Waraczewska
    Waraczewski Waradzyn Waras Warchlewska Warcholik Warciak Warczachowska Wardawa Wardawy Wardeńska
    Wardeński Wardin Wardzyk Warejko Wareluk Waresiak Wareńczak Warjas Warkocki Warkusz Warlikowski Warmiak
    Warmke Warmowski Warmusz Warnel Waroch Warsicka Warsicki Warska Warski Warso Warszycka Warszycki Warulik
    Warywoda Waryś Warzeszka Warzycka Warzycki Waręda Warężak Wasela Waseńczuk Wasicka Wasicki Wasieńko
    Wasikowska Wasikowski Wasilew Wasiniak Wasiniewska Wasiniewski Wasiucionek Wasiura Wasyk Wasylczuk
    Wasylkiewicz Wasylkowska Wasylkowski Wasylków Wasyłyk Waszczyński Waszkielewicz Watracz Watrakiewicz
    Watychowicz Wawok Wawreczko Wawreńczuk Wawrocka Wawrocki Wawrosz Wawrowicz Wawruszak Wawryca Wawryków
    Wawrynowicz Wawrzecka Wawrzeniec Wawrzko Wawrzosek Wawrzusiak Wawrzyczny Wawrzyniec Wawszkiewicz
    Wałaszczyk Wałkowska Wałkowski Wałoszek Wałęska Wałęza Wańczura Wański Waśk Waśków Ważyński Wciseł
    Wcisłek Wdowikowska Wdowikowski Wdziękońska Wdziękoński Webb Wechman Wechterowicz Weckwerth Weder Wedman
    Weichert Weideman Weidemann Weidner Weier Weigel Weigt Weinar Weintritt Weirauch Weisbrodt Weisman Weitz
    Wejchert Welman Welon Wels Welz Wencki Wendler Wendorff Wenecki Wenek Wengel Wentowska Wentowski Wentrys
    Wenus Wepsięć Werbel Werbicka Werblińska Werbowy Werczyńska Werczyński Werecka Werecki Werema
    Weremijewicz Werenc Weresa Werewka Werle Wernerowicz Wernio Weron Werstler Werszko Wertka Weselska
    Weselski Wesołowicz Wesserling West Westerlich Westrych Wetula Wewióra Weychan Wezner Weznerowicz
    Wełnowska Wiaderkiewicz Wianecka Wianecki Wicenty Wicherski Wichmann Wichtowska Wichtowski Wichura
    Wiciok Wiczk Wiczołek Wida Wideńska Wideński Widlińska Widliński Widok Widuto Widyna Widziewicz
    Wiechcińska Wiechciński Wiechniak Wiechowicz Wiechuła Wiedemann Wielandt Wielanek Wielbłąd Wielebińska
    Wielebiński Wielesik Wielewicka Wielewska Wielewski Wielga Wielgocki Wielgolewska Wielgolewski
    Wielgopolan Wielgosińska Wielgosiński Wielgołaska Wielgołaski Wieliczka Wielobób Wielochowska
    Wielowiejska Wieluńska Wieluński Wienchol Wiendlocha Wieraszka Wiercimok Wierczyńska Wierczyński
    Wieremiejczyk Wieremiejuk Wiergowska Wiergowski Wierkiewicz Wierna Wierszak Wiertlewska Wierzbanowska
    Wierzbanowski Wierzbiak Wierzbik Wierzchowiak Wierzchołowska Wierzchołowski Wierzchoś Wierzowiecka
    Wierzowiecki Wieszala Wieszczak Wieszczeczyńska Wieszczeczyński Wieszczyk Wietek Wietrzak Wietrzycka
    Wietrzycki Wiewiura Wieżel Wigda Wigłasz Wijaszka Wikariak Wikarjusz Wikarski Wikira Wilak Wilandt
    Wilant Wilbrandt Wilczarska Wilczarski Wilczopolski Wilczęga Wilda Wileczek Wilemska Wilemski
    Wilgosiewicz Wilhelmi Wilimberg Wilimczyk Wilkanowska Wilkiel Wilkinson Wilkoszewska Wilkoszewski
    Wilkowicz Wilkowiecka Wilkowiecki Wilkołazka Wilkołazki Wilkoń Willim Willner Wiluk Wiluś Wimmer
    Wincencik Wincewicz Wincierz Winckiewicz Winczakiewicz Windorpska Windorpski Winer Winiewicz Wink
    Winkelmann Winny Winowicz Winowiecka Winowiecki Winowska Winowski Wintoniak Wirowska Wirowski Wisiecki
    Wisowaty Wisowska Wisowski Wiszenko Wiszyńska Wiszyński Wisławska Wisławski Witala Witanowska Witanowski
    Witasek Witasiak Witaszewska Witaszewski Witańska Witański Witczuk Witeczek Witenberg Witeska Witon
    Witor Witosław Witońska Witoński Witte Wittich Wittmann Wituch Wityńska Wityński Wize Wiznerowicz Wizor
    Wiór Wiórko Wićko Więckowiak Więsław Wiśniecka Wiśniecki Wlach Wlazik Wlazińska Wlaziński Wlazła Wleczyk
    Wnuczyńska Wnuczyński Wnuk|Lipińska Wnuk|Lipiński Wnukowicz Wochowska Wochowski Wociór Wocław Wocławek
    Wodnik Wodok Wodziczko Wodzik Woga Wojaczyk Wojcieszonek Wojcieszyk Wojcinowicz Wojciukiewicz Wojciula
    Wojciulewicz Wojczak Wojczyńska Wojczyński Wojdacz Wojdanowska Wojdanowski Wojdasiewicz Wojdałowicz
    Wojech Wojeńska Wojeński Wojnach Wojniłowicz Wojszwiłło Wojtakowska Wojtalczyk Wojtaluk Wojtasiuk
    Wojteczko Wojtkowicz Wojtun Wojtuniak Wojturska Wojtuszek Wojtuszkiewicz Wojtuła Wojtycza Wojtyszyn
    Wojtyto Wojtów Wokurka Wola Wolarczak Wolarczyk Wolbach Wolczyk Wolender Wolert Wolka Wollnik
    Wolniakowska Wolniakowski Wolnica Wolnowska Wolnowski Woltman Woltmann Wolwowicz Wong Wontka Wontor
    Worobij Woronicz Woronin Worońko Wos Wosek Wosiewicz Wosinek Woszak Wowak Wowro Woziwoda Wołcz Wołczko
    Wołoncewicz Wołoszko Wołynkiewicz Wołynko Wołyńczuk Wołąkiewicz Wołąsewicz Woźnialis Woźnikowska
    Woźnikowski Wrombel Wronecki Wronek Wronikowski Wrotna Wrucha Wruck Wruszczak Wrutniak Wrzal Wrzecion
    Wrzecionek Wrzecionko Wrzesiak Wrześniowska Wrześniowski Wrzochol Wrzodek Wrzosok Wrzołek Wrzyciel
    Wsolak Wsołek Wsuł Wtorkiewicz Wtorkowska Wtorkowski Wudel Wujak Wujkiewicz Wunsch Wurst Wurszt Wuttke
    Wybacz Wybieralski Wybierek Wybult Wycichowska Wycichowski Wycik Wyciślak Wyczołek Wyderkiewicz Wydymus
    Wygachiewicz Wyglenda Wygonowska Wygonowski Wygryz Wyjadłowska Wyjadłowski Wyleciał Wylenżek Wylezińska
    Wyleziński Wyligała Wylęga Wylęgała Wymiatał Wynimko Wypchlak Wypchoł Wyporek Wyporska Wyporski Wypustek
    Wyrembek Wyrwiak Wystub Wystup Wystyrk Wyszczelska Wyszczelski Wysztygiel Wysłuch Wysłucha Wytrych
    Wytrążek Wytwer Wytyk Wywigacz Wywiórka Wywrocka Wywrocki Wyzujak Wyżnikiewicz Wójciszyn Wójsik
    Wójtowiec Wór Wąchalska Wąchalski Wąchocka Wąchocki Wącior Wądolny Wąsat Wątkowska Wątkowski Wątorska
    Wątorski Wątróbka Wątróbska Wątróbski Węckowska Węckowski Węcławowicz Wędołowska Wędołowski Wędrowska
    Wędzel Wędzikowska Wędzikowski Wędzińska Wędziński Węgielewska Węgielewski Węglarzy Węglewicz Węgrecka
    Węgrecki Węgrzecka Węgrzycka Węgrzycki Węska Węzka Władek Władyczak Władyczuk Właszczuk Włochal Włoczek
    Włoczyk Włodara Włoga Włos Włosiak Włoszczak Włudarski Włudarz Włudzik Włódarczak Xiao Yahorau Yakauleu
    Yakhno Yakibchuk Yakovyshyn Yakuba Yakubets Yakubiv Yakubovich Yakubovych Yakunin Yakunina Yakushev
    Yakym Yakymyshyn Yalova Yalovenko Yaman Yanenko Yanishevska Yankevych Yankouski Yankovych Yanovskyi
    Yanovych Yao Yaremii Yaresko Yarish Yarmola Yarmolchuk Yarotska Yaruta Yarych Yarysh Yaskevich Yaskiv
    Yastremska Yasynska Yatskevich Yatskevych Yatskova Yatsura Yaşar Yefimchuk Yefremenko Yelenets
    Yelisieiev Yelisieieva Yermakovich Yermolaiev Yerokhin Yeroshenko Yesypenko Yevchenko Yevdokimov
    Yevdokimova Yevpak Yevsieieva Yevtushyk Yin Yoo Yordanov Youssef Yuan Yukhymuk Yunusov Yurchanka
    Yurechko Yurevich Yurkova Yushchak Yushchyk Yusupova Yuzefovych Yuziuk Yuzkiv Yuzva Yuzypchuk Yüksel
    Zabadała Zabiegałowska Zabiegałowski Zabiegliński Zabiegły Zabierowska Zabierowski Zabiełło Zabiiaka
    Zabojszcz Zabolotnii Zabor Zabrodska Zabłotowicz Zabłudowska Zabłudowski Zacha Zachmyc Zacholska
    Zacholski Zachoszcz Zachurzok Zachwyc Zaciek Zacierka Zacios Zaciura Zaczeniuk Zadara Zadrąg Zadwórny
    Zadylak Zagalska Zagalski Zagulska Zagulski Zagumny Zahorodna Zahurska Zaik Zaikin Zaikina Zaitsava
    Zajac Zajc Zajdlic Zajdowicz Zajkiewicz Zajonz Zakharau Zakharevych Zaklikiewicz Zakolska Zakolski
    Zakrevskyi Zakryś Zakręt Zakęs Zalasińska Zalasiński Zalcman Zalesiak Zalizniak Zalutska Zalutskyi
    Zamachowska Zaman Zamarska Zamarski Zambrowicz Zamecki Zamel Zamelczyk Zamiatowska Zamielska Zamirski
    Zamojcin Zamrzycka Zamrzycki Zamula Zamysłowska Zamysłowski Zamłyńska Zamłyński Zan Zapara Zaparty
    Zaparucha Zapałowicz Zaporowicz Zaporozhchenko Zarabska Zarabski Zaraza Zaraziński Zardzewiały Zaremska
    Zaremski Zarichna Zaritskyi Zarodkiewicz Zarucki Zarytskyi Zarzyczna Zarzyńska Zarzyński Zasadowska
    Zasadowski Zasempa Zasiadko Zasim Zasońska Zasoński Zastavna Zastocka Zastocki Zastróżna Zastępa
    Zasławska Zataj Zatora Zauer Zavalii Zawalonka Zawartko Zawarty Zawała Zawis Zawiszewski Zawitaj
    Zawitowska Zawiłowicz Zawiślańska Zawiślański Zawodziński Zawolik Zawolski Załachowska Załachowski
    Załęczna Załęczny Zbieranek Zbierańska Zbierański Zbierzak Zbiżek Zborała Zborovska Zbożeń Zbroch
    Zbrojewska Zbrojewski Zbrojkiewicz Zbroś Zbrożyna Zbrzeska Zbrzeski Zbrzeźna Zbrzeźny Zbrzyzny Zbyrowska
    Zbyrowski Zbyszewska Zbytek Zdanevych Zdaniuk Zdańkowska Zdańkowski Zdolski Zdończyk Zdroik Zdrowowicz
    Zduniewicz Zduniuk Zdziabek Zdziarstek Zdzieborska Zdzierak Zdzieszyńska Zdzieszyński Zdzuj Zdzymira
    Zdżalik Zebrała Zegarowicz Zegarowska Zegarowski Zegarska Zegarski Zehner Zejma Zel Zelcer Zelena
    Zelenyi Zeliaś Zelisko Zellner Zelwak Zemankiewicz Zembal Zemela Zemla Zemler Zemliana Zemlianyi Zemska
    Zender Zenderowska Zenderowski Zenel Zeng Zenowicz Zeprzałka Zerek Zerka Zeszutek Zeynalov Zgajewska
    Zgardzińska Zgardziński Zgieb Zgierun Zglejszewska Zgodzaj Zgodzińska Zgodziński Zgolak Zgolińska
    Zgoliński Zgrajek Zgryza Zgryziewicz Zgryźniak Zgrzeba Zgrzeblak Zgrzebna Zgrzebnicka Zgrzebnicki
    Zgrzebny Zgrzendek Zgudka Zgudziak Zhabchyk Zharko Zharkova Zhelizniak Zhmud Zholob Zhorniak Zhosan
    Zhuchenko Zhukau Zhukouskaya Zhupnyk Zhurakivska Zhurbenko Zhyhadlo Zhyhailo Zhylenko Zhyliuk Zhylka
    Ziajkiewicz Ziajko Ziara Ziarniewicz Ziarnowska Ziatyk Zielant Zielas Zielaskowska Zielaskowski Zielazna
    Zielecka Zieleśkiewicz Zielka Zielkowska Zielkowski Zielnica Ziembowicz Ziemczonek Ziemer Ziemiecka
    Ziemlewicz Ziemlińska Ziemliński Zientak Zientalak Zientkiewicz Ziewacz Zieziulewicz Zimina Zimkowska
    Zimnal Zimnawoda Zimnowodzka Zimnowodzki Zimolong Zimolzak Zimorska Zimorski Zimroz Zinczuk Ziniak Zinka
    Zinkovska Zinkovskyi Ziomber Ziomka Ziopaja Ziubińska Ziółczyk Ziąbska Ziąbski Ziątek Ziębiec Ziębka
    Zięty Zlezarczyk Zlobin Zlot Zmarz Zmorek Znaj Znak Znamierowska Znamierowski Zogata Zoidze Zolotar
    Zolotarenko Zolotukhin Zolotukhina Zoran Zorii Zorin Zoruk Zotov Zozuliak Zołotar Zrada Zreda Zroślak
    Zubar Zubelewicz Zubka Zubkiewicz Zubok Zubov Zuchowska Zuchowski Zui Zuienko Zulewska Zulewski Zurek
    Zuska Zuzański Zuzelska Zuzelski Zużewicz Zviahintseva Zvieriev Zvir Zwaliński Zwierniak Zwierowicz
    Zwierzchlewska Zwierzchlewski Zyborowicz Zychalak Zychma Zychora Zydel Zydlewska Zydlewski Zygarska
    Zygarski Zygler Zygma Zygmaniak Zygmont Zygmuntowska Zygowski Zyk Zykov Zykova Zykubek Zyl Zylka Zylla
    Zymela Zymróz Zysek Zyszczak Zywer Zyza Zyzek Ząbecka Ząbecki Złomaniec Złomek Złonkiewicz Złotkiewicz
    Złotorzyńska Złośnik Çakir Çakmak Çalişkan Çetin Çeti̇n Ðinh Ðào Özer Ćmak Ćmikiewicz Ćmoch Ćwian
    Ćwieluch Ćwikałowska Ćwikałowski Ćwirta Łaban Łabecka Łabecki Łabendowicz Łabiga Łabik Łabinowicz
    Łabowicz Łabowska Łabudek Łabul Łabuzińska Łabuziński Łabuńska Łabądź Łachmańska Łachmański Łachowska
    Łachowski Łachwa Łacisz Łacniak Łacwik Łaczek Łaczkowski Ładyński Ładzik Łagodzka Łagodzki Łajs Łajtar
    Łaksa Łamek Łaniak Łaniec Łaniecki Łanik Łanowy Łapcik Łapczuk Łapin Łapkowska Łappo Łasa Łasecki
    Łasicka Łasicki Łasiewicka Łasiewicki Łaskowski Łaszczyńska Łaszczyński Łaszewicz Łatas Ławrowska
    Ławrowski Łazaruk Łazowy Łazuchiewicz Łazuk Łazęcka Łazęcki Łańczak Łańduch Łańska Łaźniak Łbik Łebko
    Łebska Łebski Łebzuch Łech Łenc Łepko Łepska Łepski Łeptuch Łesak Łobko Łochyński Łodkowska Łodkowski
    Łodziato Łokas Łokietko Łomako Łomiak Łomotowska Łomotowski Łomzik Łonak Łopaczyk Łopatecki Łopatek
    Łopatko Łopatniuk Łopatyńska Łopatyński Łopieńska Łopieński Łopion Łopuska Łopuski Łopyta Łosek Łosicki
    Łosowska Łoszak Łotowska Łotowski Łotys Łowas Łowczyk Łowczyński Łowiec Łowińska Łowiński Łowkis Łoziak
    Łozowicka Łozowicki Łubisz Łubnicka Łubnicki Łubniewska Łubniewski Łubowicz Łubowska Łubowski Łucewicz
    Łuczejko Łuczkowiak Łuczycka Łuczycki Łuczyn Łuczywo Łudzeń Łukaczyk Łukanowska Łukanowski Łukanus
    Łukaszkiewicz Łukian Łukiewski Łukjaniuk Łukojć Łukuć Łupak Łuska Łuszczkiewicz Łuszczyna Łutczyk Łuś
    Łużak Łyczewski Łydek Łyga Łypik Łysenko Łysiuk Łyskawińska Łyskawiński Łysoniewska Łysoniewski Łyszczyk
    Łytkowska Łyżczarz Łyżeń Łączyk Łęczek Łęgocka Łęgocki Ścibiorska Ścibiorski Ściborowska Ściepko
    Ściesiek Ściga Ścigalska Ścigalski Ścioch Ściseł Ścisła Ścisły Ściubak Ściubeł Ściubisz Ściuk Ściupider
    Ściurka Ściślewska Ściślewski Ślachciak Śladkowska Śladkowski Ślak Ślepaczuk Śleziński Śliczniak
    Ślifirska Ślifirski Ślimok Ślisz Ślizankiewicz Ślizowska Ślizowski Śluz Ślósarek Ślężak Śmiatek Śmiałko
    Śmiały Śmidoda Śmiejkowska Śmiejkowski Śmierzyńska Śmierzyński Śmieszna Śmieszniak Śmietanko Śmigiera
    Śmiglewski Śmistek Śniadowska Śniadowski Śniechowska Śniegucka Śniegucki Śnieżyńska Śnieżyński Śnios
    Śpiechowicz Śpitalniak Śpiączka Śruba Śróda Śródecka Światkowska Światkowski Światowa Światowska
    Światowski Świdergał Świdroń Świecak Świechowska Świeciak Świecik Świecka Świecki Świenty Świerblewska
    Świerczak Świerczyk Świerdza Świergoń Świerkula Świerżyńska Świetlikowska Świetlikowski Świetlińska
    Świetliński Świeściak Świgońska Świniarek Świnka Świrkosz Świrydziuk Świstuń Świsłocka Świsłowska
    Świtajska Świtalik Świtlik Świzdor Święcik Święcińska Święciński Święczkowska Święczkowski Święszkowska
    Święszkowski Świętalska Świętojańska Świętojański Şahin Şen Źródłowska Źródłowski Żabczak Żabczyńska
    Żabczyński Żabnicki Żabowska Żabowski Żaguń Żakowiecka Żakowiecki Żalikowska Żalikowski Żalińska
    Żaliński Żamojtuk Żandarska Żandarski Żardecka Żardecki Żarnowiec Żarowska Żaworonek Żdan Żeberek
    Żeberkiewicz Żegunia Żelaznowska Żelaśkiewicz Żelaźnicka Żelech Żelechowicz Żeliszczak Żemło Żendzian
    Żesławska Żmigrodzka Żmijowska Żmijowski Żminkowska Żminkowski Żmojda Żmudziak Żmujdzin Żokowska
    Żokowski Żołowicz Żołubak Żołądkowska Żołędowska Żołędowski Żołędziowska Żołędź Żrałka Żubert Żubka
    Żuchewicz Żuczkowski Żukiel Żulczyk Żupa Żupnik Żurada Żuradzka Żuradzki Żurawa Żurawlew Żuryńska
    Żuryński Żuwała Żuława Żuławińska Żuławiński Żybort Żychlewicz Żychniewicz Żychoń Żychska Żychski Żyga
    Żygała Żyjewska Żyjewski Żyngiel Żyniewicz Żyrkowska Żyrkowski Żyro Żytkowski Żytniak Żywanowska
    Żywanowski Żywczok Żywiecka Żywiecki Żyznowska Żyłko Żyłkowska Żyłkowski Żyźniewska Żyźniewski Żóraw
    Żółtko Żółć Żądlak Żęgota Țurcan
  `],
  [5000, `
    Kutasko
  `],
];

export default groups.flatMap(([meters, names]) => names.trim().split(/\s+/).map((name) => [meters, name.replaceAll('|', ' ')]));
