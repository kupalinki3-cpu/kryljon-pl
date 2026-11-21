// Ministerstwo Cyfryzacji, rejestr PESEL osób żyjących, stan na 20.01.2026, CC0 1.0.
// https://dane.gov.pl/pl/dataset/1681 (zasoby 1148808 i 1148811)
// Suma obu wykazów, od 200 wystąpień. Kutasko jest osobno potwierdzonym wyjątkiem.
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
  [5000, `
    Kutasko
  `],
];

export default groups.flatMap(([meters, names]) => names.trim().split(/\s+/).map((name) => [meters, name.replaceAll('|', ' ')]));
