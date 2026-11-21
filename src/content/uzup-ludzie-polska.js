import { group } from './util.js';

const names = (list) => list.split(';').map((name) => name.trim());

export default {
  pisarz: group(550, ...names(`
    Maria Dąbrowska; Zofia Kossak-Szczucka; Józef Mackiewicz; Stanisław Mackiewicz;
    Józef Czapski; Jerzy Stempowski; Melchior Wańkowicz; Kazimierz Wierzyński;
    Jan Lechoń; Maria Pawlikowska-Jasnorzewska; Kazimiera Iłłakowiczówna; Halina Poświatowska;
    Tadeusz Peiper; Julian Przyboś; Stanisław Jerzy Lec; Jeremi Przybora;
    Agnieszka Osiecka; Jonasz Kofta; Wojciech Młynarski; Tadeusz Nowak;
    Edward Stachura; Edward Redliński; Tadeusz Konwicki; Marek Hłasko;
    Leopold Tyrmand; Wiesław Myśliwski; Andrzej Stasiuk; Magdalena Tulli;
    Paweł Huelle; Jerzy Pilch; Jacek Dukaj; Dorota Masłowska;
    Jakub Żulczyk; Łukasz Orbitowski; Szczepan Twardoch; Katarzyna Bonda;
    Remigiusz Mróz; Marta Kisiel; Wit Szostak; Jakub Małecki;
    Joanna Bator; Sylwia Chutnik; Joanna Gierak-Onoszko; Grzegorz Kasdepke;
    Marta Guśniowska; Wanda Chotomska; Maria Krüger
  `)),
  postac_historyczna: group(700, ...names(`
    Mikołaj Rej; Jan Kochanowski; Łukasz Górnicki; Andrzej Frycz Modrzewski;
    Hieronim Radziejowski; Krzysztof Opaliński; Jan Karol Chodkiewicz; Stanisław Żółkiewski;
    Stefan Czarniecki; Jerzy Sebastian Lubomirski; Stanisław Koniecpolski; Konstanty Ostrogski;
    Piotr Skarga; Stanisław Hozjusz; Stanisław Małachowski; Hugo Kołłątaj;
    Julian Ursyn Niemcewicz; Walerian Łukasiński; Piotr Wysocki; Józef Bem;
    Henryk Dembiński; Ludwik Mierosławski; Karol Marcinkowski; Hipolit Cegielski;
    Wincenty Pol; Emilia Plater; Aleksander Wielopolski; Jarosław Dąbrowski;
    Marian Langiewicz; Konstanty Kalinowski; Teodor Narbutt; Aleksander Gieysztor;
    Ksawery Pruszyński; Władysław Anders; Stanisław Maczek; Stanisław Sosabowski;
    Franciszek Kleeberg; Tadeusz Kutrzeba; Władysław Raginis; Henryk Dobrzański;
    Franciszek Żwirko; Stanisław Wigura; Janusz Kusociński; Wanda Rutkiewicz;
    Halina Konopacka; Irena Sendlerowa; Jan Karski; Jan Nowak-Jeziorański;
    Zofia Kossak-Szczucka; Wacław Felczak; Krzysztof Kamil Baczyński; Tadeusz Zawadzki;
    Jan Bytnar; Maciej Aleksy Dawidowski; Władysław Bartoszewski; Anna Walentynowicz;
    Alina Pienkowska; Andrzej Gwiazda; Joanna Duda-Gwiazda; Karol Modzelewski;
    Jacek Kuroń; Antoni Patek
  `)),
  wladca: [
    ['Kazimierz Wielki', 'Kazimierz III', 'Kazimierz 3 Wielki'],
    ['Bolesław Krzywousty', 'Bolesław III', 'Bolesław 3 Krzywousty'],
    ['Władysław Jagiełło', 'Jagiełło', 'Władysław II Jagiełło', 'Władysław 2 Jagiełło'],
    ['Jan III Sobieski', 'Jan Sobieski', 'Jan 3 Sobieski'],
    ['Stanisław August Poniatowski', 'Stanisław August', 'Stanisław II August'],
    ['Władysław Łokietek', 'Władysław I Łokietek', 'Łokietek'],
    ['Bolesław Śmiały', 'Bolesław Szczodry', 'Bolesław II Szczodry'],
    ['August Mocny', 'August II Mocny', 'August II', 'August 2 Mocny'],
    ['Jadwiga', 'Jadwiga Andegaweńska', 'Święta Jadwiga Królowa', 'Jadwiga król Polski'],
  ],
  aktor: group(430, ...names(`
    Maja Ostaszewska; Joanna Kulig; Agata Kulesza; Agata Buzek;
    Aleksandra Konieczna; Kinga Preis; Dorota Kolak; Gabriela Muskała;
    Magdalena Cielecka; Danuta Stenka; Katarzyna Figura; Katarzyna Żak;
    Marta Lipińska; Emilia Krakowska; Ewa Wiśniewska; Anna Dymna;
    Maja Komorowska; Gabriela Kownacka; Teresa Budzisz-Krzyżanowska; Stanisława Celińska;
    Ewa Dałkowska; Zofia Rysiówna; Halina Łabonarska; Krystyna Feldman;
    Irena Kwiatkowska; Pola Raksa; Barbara Brylska; Barbara Wrzesińska;
    Kalina Jędrusik; Lucyna Winnicka; Aleksandra Śląska; Jadwiga Jankowska-Cieślak;
    Elżbieta Czyżewska; Anna Ciepielewska; Gustaw Holoubek; Władysław Hańcza;
    Tadeusz Fijewski; Mieczysław Czechowicz; Wiesław Gołas; Wojciech Pszoniak;
    Tadeusz Łomnicki; Zbigniew Zapasiewicz; Krzysztof Globisz; Jan Frycz;
    Marian Dziędziel; Andrzej Chyra; Robert Więckiewicz; Marcin Dorociński;
    Borys Szyc; Tomasz Kot; Dawid Ogrodnik; Jakub Gierszał;
    Bartosz Bielenia; Maciej Musiałowski; Piotr Trojan; Michał Żurawski;
    Piotr Głowacki; Wojciech Mecwaldowski; Tomasz Schuchardt; Eryk Kulm;
    Vanessa Aleksander; Martyna Byczkowska; Zofia Jastrzębska; Helena Englert
  `)),
  piosenkarz: group(450, ...names(`
    Mery Spolsky; Julia Wieniawa; Viki Gabor; Sara James;
    Roksana Węgiel; Daria Zawiałow; Mela Koteluk; Brodka;
    Natalia Przybysz; Paulina Przybysz; Misia Furtak; Kasia Lins;
    Rosalie.; Zalia; Igo; Błażej Król;
    Ralph Kaminski; Kaśka Sochacka; Krzysztof Zalewski; Mrozu;
    Vito Bambino; Kaśka Nosowska; Anita Lipnicka; Edyta Bartosiewicz;
    Urszula Dudziak; Ewa Bem; Hanna Banaszak; Krystyna Prońko;
    Grażyna Łobaszewska; Alicja Majewska; Irena Santor; Urszula Sipińska;
    Halina Frąckowiak; Danuta Rinn; Violetta Villas; Czesław Niemen;
    Marek Grechuta; Grzegorz Turnau; Jacek Kaczmarski; Przemysław Gintrowski;
    Jacek Kleyff; Wojciech Młynarski; Mieczysław Fogg; Andrzej Zaucha;
    Zbigniew Wodecki; Ryszard Rynkowski; Andrzej Rosiewicz; Krzysztof Krawczyk;
    Janusz Radek
  `)),
  prezenter: group(430, ...names(`
    Dorota Wellman; Marcin Prokop; Magda Mołek; Agnieszka Woźniak-Starak;
    Marzena Rogalska; Katarzyna Dowbor; Maciej Dowbor; Paulina Sykut-Jeżyna;
    Katarzyna Cichopek; Maciej Kurzajewski; Ida Nowakowska; Tomasz Kammel;
    Maciej Orłoś; Tomasz Sianecki; Piotr Kraśko; Konrad Piasecki;
    Monika Olejnik; Justyna Pochanke; Kamil Durczok; Jarosław Gugała;
    Hanna Lis; Katarzyna Kolenda-Zaleska; Bogdan Rymanowski; Diana Rudnik;
    Anita Werner; Piotr Marciniak; Grzegorz Kajdanowicz; Tomasz Wolny;
    Aleksander Sikora; Robert El Gendy; Andrzej Sołtysik; Marcin Meller;
    Piotr Gąsowski; Marek Sierocki; Artur Orzech; Tomasz Zimoch;
    Przemysław Babiarz; Włodzimierz Szaranowicz; Mateusz Borek; Dariusz Szpakowski;
    Sebastian Szczęsny; Krzysztof Stanowski; Maciej Iwański
  `)),
  sportowiec: [
    ['Natalia Kaczmarek', 'Natalia Bukowiecka', 'Natalia Kaczmarek-Bukowiecka'],
    ...group(410, ...names(`
    Hubert Hurkacz; Magda Linette; Magdalena Fręch; Agnieszka Radwańska;
    Jerzy Janowicz; Wojciech Fibak; Łukasz Kubot; Alicja Rosolska;
    Katarzyna Piter; Kamil Majchrzak; Tomasz Berkieta; Aleksandra Mirosław;
    Aleksandra Kałucka; Natalia Kałucka; Katarzyna Niewiadoma; Maja Włoszczowska;
    Rafał Majka; Michał Kwiatkowski; Czesław Lang; Ryszard Szurkowski;
    Lech Piasecki; Zenon Jaskuła; Anna Kiełbasińska; Iga Baumgart-Witan;
    Justyna Święty-Ersetic; Patrycja Wyciszkiewicz; Małgorzata Hołub-Kowalik; Ewa Swoboda;
    Pia Skrzyszowska; Marika Popowicz-Drapała; Piotr Lisek; Paweł Wojciechowski;
    Sofia Ennaoui; Konrad Bukowiecki; Michał Haratyk; Wojciech Nowicki;
    Paweł Fajdek; Anita Włodarczyk; Maria Andrejczyk; Malwina Kopron;
    Wiktor Głazunow; Paweł Kaczmarek; Helena Wiśniewska; Karolina Naja;
    Anna Puławska; Justyna Iskrzycka; Natalia Pacierpnik; Marta Walczykiewicz;
    Klaudia Zwolińska; Grzegorz Hedwig; Bartosz Zmarzlik; Maciej Janowski;
    Patryk Dudek; Jarosław Hampel; Tomasz Gollob; Zenon Plech;
    Edward Jancarz; Marek Cieślak; Krzysztof Kasprzak; Piotr Protasiewicz;
    Robert Kubica; Kajetan Kajetanowicz; Kacper Sztuka; Kuba Giermaziak;
    Maciej Oleksowicz; Michał Sołowow; Joanna Jędrzejczyk; Karolina Kowalkiewicz;
    Jan Błachowicz; Mateusz Gamrot; Agnieszka Niedźwiedź; Mamed Khalidov;
    Mariusz Pudzianowski; Krzysztof Włodarczyk; Mateusz Masternak; Kamil Szeremeta;
    Andrzej Gołota; Tomasz Adamek
  `)),
  ],
  klub: [
    ...group(530, ...names(`
    Polonia Bytom; Ruch Radzionków; Polonia Warszawa; Hutnik Warszawa;
    Hutnik Kraków; Garbarnia Kraków; Wieczysta Kraków; Świt Nowy Dwór Mazowiecki;
    Świt Szczecin; Błękitni Stargard; Ząbkovia Ząbki; Legionovia Legionowo;
    Victoria Sulejówek; Olimpia Zambrów; Broń Radom; Pilica Białobrzegi;
    Pogoń Grodzisk Mazowiecki; Pogoń Siedlce; Pogoń Nowe Skalmierzyce; Polonia Środa Wielkopolska;
    Unia Swarzędz; Flota Świnoujście; Kluczevia Stargard; Cartusia Kartuzy;
    Gryf Wejherowo; Gryf Słupsk; Gedania Gdańsk; Bałtyk Gdynia;
    Kaszubia Kościerzyna; Olimpia Elbląg; Concordia Elbląg; Stomil Olsztyn;
    Jeziorak Iława; Granica Kętrzyn; Mamry Giżycko; Mazur Ełk;
    Tur Bielsk Podlaski; Wissa Szczuczyn; Wigry Suwałki; ŁKS Łomża;
    Olimpia Grudziądz; Unia Janikowo; Zawisza Bydgoszcz; Chemik Bydgoszcz;
    Wda Świecie; Elana Toruń; Pomorzanin Toruń; Włocłavia Włocławek;
    BKS Stal Bielsko-Biała; Rekord Bielsko-Biała; Podbeskidzie Bielsko-Biała; Pniówek Pawłowice;
    Gwarek Tarnowskie Góry; LKS Goczałkowice-Zdrój; Unia Turza Śląska; Unia Racibórz;
    Odra Wodzisław Śląski; Pogoń Prudnik; MKS Kluczbork; Ślęza Wrocław;
    Bielawianka Bielawa; Lechia Dzierżoniów; Górnik Polkowice; Karkonosze Jelenia Góra;
    Górnik Wałbrzych; Victoria Świebodzice; Lechia Zielona Góra; Stilon Gorzów;
    Warta Gorzów; Carina Gubin; Odra Bytom Odrzański; Unia Tarnów;
    Watra Białka Tatrzańska; Podhale Nowy Targ; Limanovia Limanowa; Karpaty Krosno;
    JKS Jarosław; Polonia Przemyśl; Czarni Jasło; Siarka Tarnobrzeg;
    Stal Stalowa Wola; Wisłoka Dębica; Igloopol Dębica; Sokół Sieniawa;
    Avia Świdnik; Chełmianka Chełm; Orlęta Radzyń Podlaski; Podlasie Biała Podlaska;
    Wisła Puławy; KSZO Ostrowiec Świętokrzyski; Star Starachowice; Naprzód Jędrzejów;
    Wierna Małogoszcz; GKS Bełchatów; Pelikan Łowicz; Unia Skierniewice;
    Sokół Aleksandrów Łódzki; Concordia Piotrków Trybunalski; RKS Radomsko
  `)),
    ['Siarka Tarnobrzeg', 'Siarka'], ['KSZO Ostrowiec Świętokrzyski', 'KSZO', 'KSZO Ostrowiec'],
    ['GKS Bełchatów', 'Gieksa Bełchatów'], ['Pogoń Grodzisk Mazowiecki', 'Pogoń Grodzisk'],
  ],
  lektura: [
    ...group(490, ...names(`
    Asiunia; Niesamowite przygody dziesięciu skarpetek; Bajki robotów; Cyberiada;
    Felix, Net i Nika oraz Gang Niewidzialnych Ludzi; Kolorowy szalik; Puc, Bursztyn i goście; Cukierku, ty łobuzie!;
    Karolcia; O psie, który jeździł koleją; Detektyw Pozytywka; Oto jest Kasia;
    Anaruk, chłopiec z Grenlandii; Janko Muzykant; Katarynka; Kamizelka;
    Nasza szkapa; Antek; Dobra pani; Mendel Gdański;
    Sachem; Śmierć Pułkownika; Reduta Ordona; Romantyczność;
    Świtezianka; Dziady część IV; Na nieludzkiej ziemi; Raport Witolda;
    Mała Apokalipsa; Dolina Issy; Zniewolony umysł; Pamiętnik z powstania warszawskiego
  `)),
    ['Chłopi', 'Chłopi Jesień', 'Chłopi tom 1'], ['Lalka', 'Lalka Prusa'], ['Kamienie na szaniec', 'Kamienie'],
  ],
  imie: [
    ['Aleksander', 'Olek'], ['Aleksandra', 'Ola'], ['Katarzyna', 'Kasia', 'Kaśka'],
    ['Małgorzata', 'Gosia', 'Małgosia'], ['Jakub', 'Kuba', 'Kubuś'], ['Barbara', 'Basia', 'Baśka'],
    ['Antoni', 'Antek'], ['Franciszek', 'Franek'], ['Stanisław', 'Staszek'], ['Władysław', 'Władek'],
    ['Wojciech', 'Wojtek'], ['Grzegorz', 'Grzesiek'], ['Jadwiga', 'Jadzia'], ['Zofia', 'Zosia'],
    ['Joanna', 'Asia'], ['Agnieszka', 'Aga'], ['Magdalena', 'Magda', 'Magdalenka'],
    ['Krzysztof', 'Krzysiek', 'Krzyś'], ['Bartosz', 'Bartek'], ['Tomasz', 'Tomek'], ['Michał', 'Michaś'],
    ['Ryszard', 'Rysiek'], ['Kazimierz', 'Kazik'], ['Elżbieta', 'Ela', 'Elka'],
  ],
  nazwisko: group(920, ...names(`
    Wójcik; Król; Wieczorek; Czarnecki;
    Mikołajczyk; Konieczny; Szczepański; Urban;
    Jankowski; Lisowski; Buczek; Błaszczyk;
    Borkowski; Marcinkowski; Przybył; Piekarski;
    Pietrucha; Polak; Owczarek; Golonka;
    Baran; Góra; Sroka; Wilk;
    Urbanek; Wójcicki; Ryś; Niedźwiedź;
    Świątek; Niewiadomski; Twardowski; Mielczarek;
    Szafrański; Sawczuk; Pospieszalski; Kwiatkowski;
    Wachowicz; Pawlak; Dębski; Poświatowska;
    Poniedzielski; Zdun; Stępień; Romaniuk;
    Łuczak; Gałecki; Walczak; Jasiński;
    Janicki; Młynarczyk; Zarzycki; Radecki;
    Cholewa; Kiełbasa; Walkowiak; Piotrowski;
    Bereszyński; Sikora
  `)),
};
