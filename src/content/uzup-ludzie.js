// Uzupełnienia: ludzie, instytucje, Warszawa. Wpisy łączone z istniejącymi po nazwie/aliasie (patrz index.js).
import { group } from './util.js';

export default {
  pisarz: [
    ...group(120, 'Adam Mickiewicz', 'Juliusz Słowacki', 'Henryk Sienkiewicz', 'Bolesław Prus', 'Eliza Orzeszkowa', 'Maria Konopnicka', 'Władysław Reymont', 'Stefan Żeromski', 'Witold Gombrowicz', 'Czesław Miłosz',
      'Wisława Szymborska', 'Julian Tuwim', 'Jan Brzechwa', 'Stanisław Lem', 'Andrzej Sapkowski', 'Olga Tokarczuk', 'Ryszard Kapuściński', 'Janusz Korczak', 'Joanna Chmielewska', 'Kornel Makuszyński', 'Adam Asnyk'),
    ...group(550, 'Cyprian Norwid', 'Zygmunt Krasiński', 'Stanisław Wyspiański', 'Stanisław Przybyszewski', 'Gabriela Zapolska', 'Bruno Schulz', 'Stanisław Ignacy Witkiewicz', 'Witkacy', 'Zbigniew Herbert', 'Tadeusz Różewicz',
      'Konstanty Ildefons Gałczyński', 'Bolesław Leśmian', 'Leopold Staff', 'Jan Kasprowicz', 'Kazimiera Iłłakowiczówna', 'Maria Pawlikowska-Jasnorzewska', 'Julian Przyboś', 'Miron Białoszewski', 'Jacek Dukaj',
      'Szczepan Twardoch', 'Remigiusz Mróz', 'Katarzyna Bonda', 'Wojciech Chmielarz', 'Marek Krajewski', 'Andrzej Stasiuk', 'Dorota Masłowska', 'Magdalena Tulli', 'Jerzy Pilch', 'Hanna Krall', 'Mariusz Szczygieł',
      'Wojciech Jagielski', 'Alfred Szklarski', 'Maria Kuncewiczowa', 'Zofia Nałkowska', 'Maria Dąbrowska', 'Jarosław Iwaszkiewicz', 'Gustaw Herling-Grudziński', 'Sławomir Mrożek', 'Marek Hłasko', 'Tadeusz Borowski',
      'Leopold Tyrmand', 'Stanisław Dygat', 'Jan Parandowski', 'Zbigniew Nienacki', 'Edmund Niziurski', 'Adam Bahdaj', 'Marcin Świetlicki', 'Jakub Żulczyk', 'Mikołaj Łoziński', 'Wit Szostak', 'Aleksander Fredro', 'Ignacy Krasicki',
      'Jan Kochanowski', 'Mikołaj Rej', 'Wacław Berent', 'Tadeusz Dołęga-Mostowicz', 'Maria Rodziewiczówna', 'Józef Ignacy Kraszewski', 'Teofil Lenartowicz', 'Kornel Ujejski', 'Wincenty Pol', 'Bolesław Prus', 'Zbigniew Nienacki',
      'Agnieszka Osiecka', 'Jonasz Kofta', 'Jan Twardowski', 'Ks. Jan Twardowski', 'Halina Poświatowska', 'Ewa Lipska', 'Krzysztof Kamil Baczyński', 'Tadeusz Gajcy', 'Anna Świrszczyńska'),
  ],
  wladca: [
    ['Mieszko I', 'Mieszko Pierwszy', 'Mieszko'], ['Bolesław Chrobry', 'Bolesław I Chrobry', 'Chrobry'], ['Mieszko II Lambert', 'Mieszko II'], ['Kazimierz Odnowiciel', 'Kazimierz I Odnowiciel'],
    ['Bolesław Śmiały', 'Bolesław II Śmiały', 'Bolesław Szczodry'], ['Władysław Herman'], ['Bolesław Krzywousty', 'Bolesław III Krzywousty'], ['Władysław Wygnaniec', 'Władysław II Wygnaniec'],
    ['Bolesław Kędzierzawy', 'Bolesław IV Kędzierzawy'], ['Mieszko Stary', 'Mieszko III Stary'], ['Kazimierz Sprawiedliwy', 'Kazimierz II Sprawiedliwy'], ['Leszek Biały'], ['Władysław Laskonogi'],
    ['Konrad Mazowiecki'], ['Henryk Brodaty'], ['Henryk Pobożny'], ['Bolesław Wstydliwy'], ['Leszek Czarny'], ['Przemysł II', 'Przemysł'], ['Wacław II', 'Wacław Czeski'], ['Władysław Łokietek', 'Władysław I Łokietek', 'Łokietek'],
    ['Kazimierz Wielki', 'Kazimierz III Wielki'], ['Ludwik Węgierski', 'Ludwik Andegaweński'], ['Jadwiga', 'Jadwiga Andegaweńska', 'Królowa Jadwiga'], ['Władysław Jagiełło', 'Jagiełło', 'Władysław II Jagiełło'],
    ['Władysław Warneńczyk', 'Władysław III Warneńczyk'], ['Kazimierz Jagiellończyk', 'Kazimierz IV Jagiellończyk'], ['Jan Olbracht'], ['Aleksander Jagiellończyk'], ['Zygmunt Stary', 'Zygmunt I Stary'],
    ['Zygmunt August', 'Zygmunt II August'], ['Henryk Walezy'], ['Stefan Batory'], ['Zygmunt III Waza', 'Zygmunt III'], ['Władysław IV Waza', 'Władysław IV'], ['Jan Kazimierz', 'Jan II Kazimierz'],
    ['Michał Korybut Wiśniowiecki', 'Michał Korybut'], ['Jan III Sobieski', 'Sobieski', 'Jan Sobieski'], ['August II Mocny', 'August Mocny'], ['Stanisław Leszczyński'], ['August III Sas', 'August III'],
    ['Stanisław August Poniatowski', 'Stanisław August'],
  ],
  aktor: [
    ...group(450, 'Robert Gonera', 'Maciej Zakościelny', 'Paweł Deląg', 'Rafał Maćkowiak', 'Mateusz Damięcki', 'Piotr Polk', 'Adam Ferency', 'Jerzy Trela', 'Radosław Pazura', 'Tomasz Schuchardt', 'Ilona Ostrowska',
      'Magdalena Mielcarz', 'Anna Cieślak', 'Agata Buzek', 'Katarzyna Zielińska', 'Katarzyna Herman', 'Dorota Pomykała', 'Edyta Olszówka', 'Anita Sokołowska', 'Małgorzata Foremniak', 'Magdalena Schejbal', 'Grażyna Barszczewska',
      'Marcin Hycnar', 'Michał Czernecki', 'Piotr Cyrwus', 'Artur Barciś', 'Grzegorz Damięcki', 'Wojciech Pszoniak', 'Zbigniew Zapasiewicz', 'Kazimierz Kaczor', 'Jan Kobuszewski', 'Wiesław Gołas', 'Jerzy Turek', 'Bronisław Pawlik',
      'Stanisław Tym', 'Andrzej Fedorowicz', 'Witold Pyrkosz', 'Roman Wilhelmi', 'Tadeusz Fijewski', 'Mieczysław Voit', 'Zofia Merle', 'Alina Janowska', 'Irena Kwiatkowska', 'Hanna Skarżanka'),
  ],
  piosenkarz: [
    ...group(250, 'Zenek Martyniuk', 'Zenon Martyniuk', 'Sławomir', 'Cleo', 'Blanka', 'Roxie Węgiel', 'Viki Gabor', 'Lanberry', 'Mery Spolsky',
      'Taco Hemingway', 'Mata', 'Kękę', 'Sanah', 'Dawid Podsiadło', 'Edyta Górniak', 'Doda', 'Kayah', 'Maryla Rodowicz', 'Krzysztof Krawczyk', 'Natalia Nykiel', 'Ralph Kaminski'),
  ],
  sportowiec: [
    ...group(500, 'Rafał Majka', 'Michał Kwiatkowski', 'Rafał Sonik', 'Kuba Przygoński', 'Maja Włoszczowska', 'Magdalena Fręch', 'Magda Linette', 'Kamil Majchrzak', 'Jakub Kiwior', 'Łukasz Fabiański', 'Jakub Moder', 'Nicola Zalewski',
      'Tymoteusz Puchacz', 'Bartłomiej Drągowski', 'Dariusz Dudka', 'Ludovic Obraniak', 'Artur Wichniarek', 'Radosław Majewski', 'Tomasz Kuszczak', 'Michał Żewłakow', 'Marcin Wasilewski', 'Ireneusz Jeleń', 'Paweł Brożek',
      'Piotr Świerczewski', 'Andrzej Juskowiak', 'Emmanuel Olisadebe', 'Waldemar Fornalik', 'Zbigniew Boniek', 'Kazimierz Deyna', 'Robert Gadocha', 'Andrzej Szarmach', 'Włodzimierz Lubański',
      'Jan Domarski', 'Henryk Kasperczak', 'Roman Wójcicki', 'Władysław Żmuda', 'Józef Młynarczyk', 'Stefan Majewski', 'Dariusz Szpakowski', 'Andrzej Iwan', 'Mirosław Okoński', 'Ryszard Tarasiewicz'),
  ],
  klub: [
    ['Legia Warszawa', 'Legia'], ['Lech Poznań', 'Lech'], ['Wisła Kraków', 'Wisła'], ['Cracovia', 'Cracovia Kraków'], ['Górnik Zabrze', 'Górnik'], ['Ruch Chorzów', 'Ruch'], ['Śląsk Wrocław', 'Śląsk'],
    ['Pogoń Szczecin', 'Pogoń'], ['Lechia Gdańsk', 'Lechia'], ['Jagiellonia Białystok', 'Jagiellonia', 'Jaga'], ['Widzew Łódź', 'Widzew'], ['ŁKS Łódź', 'ŁKS'], ['Zagłębie Lubin', 'Zagłębie'],
    ['Raków Częstochowa', 'Raków'], ['Korona Kielce', 'Korona'], ['Piast Gliwice'], ['GKS Katowice', 'GKS'], ['Arka Gdynia', 'Arka'], ['Stal Mielec'], ['Warta Poznań', 'Warta'],
    ...group(1500, 'Polonia Bytom', 'Polonia Warszawa', 'Gwardia Warszawa', 'Szombierki Bytom', 'Zawisza Bydgoszcz', 'Pogoń Lwów', 'Garbarnia Kraków', 'Hutnik Kraków', 'Wawel Kraków', 'Jutrzenka Giebułtów', 'Resovia Rzeszów', 'Stal Stalowa Wola',
      'Siarka Tarnobrzeg', 'Motor Lublin', 'Avia Świdnik', 'Lublinianka', 'Hetman Zamość', 'Olimpia Poznań', 'Amica Wronki', 'Polonia Gdańsk'),
  ],
  lektura: [
    ...group(250, ['Pan Tadeusz', 'Pan Tadeusz czyli ostatni zajazd na Litwie'], 'Trylogia', 'Zemsta', 'Balladyna', ['Antygona', 'Antygona Sofoklesa'], ['Edyp', 'Król Edyp'], 'Iliada', 'Odyseja', 'Biblia', 'Księga Hioba',
      ['Bajki Krasickiego', 'Bajki', 'Bajki i przypowieści'], 'Hymn', 'Opowieść wigilijna', 'Dziadek do orzechów', 'Otello', 'Makbet', 'Hamlet', 'Romeo i Julia', 'Skąpiec', 'Świętoszek', 'Faust'),
  ],
  uczelnia: [
    ['Uniwersytet Warszawski', 'UW'], ['Uniwersytet Jagielloński', 'UJ'], ['Akademia Górniczo-Hutnicza', 'AGH'], ['Politechnika Warszawska', 'PW'], ['Politechnika Wrocławska', 'PWr'], ['Uniwersytet im. Adama Mickiewicza', 'UAM', 'Uniwersytet Adama Mickiewicza w Poznaniu'],
    ['Uniwersytet Mikołaja Kopernika', 'UMK'], ['Uniwersytet Łódzki', 'UŁ'], ['Uniwersytet Gdański', 'UG'], ['Uniwersytet Szczeciński', 'US'], ['Uniwersytet Wrocławski', 'UWr'], ['Szkoła Główna Handlowa', 'SGH'],
    ['Szkoła Główna Gospodarstwa Wiejskiego', 'SGGW'], ['Politechnika Gdańska', 'PG'], ['Politechnika Łódzka', 'PŁ'], ['Politechnika Śląska', 'PŚ'], ['Politechnika Poznańska', 'PP'], ['Politechnika Krakowska', 'PK'],
    ['Uniwersytet Marii Curie-Skłodowskiej', 'UMCS'], ['Uniwersytet Kardynała Stefana Wyszyńskiego', 'UKSW'], ['Katolicki Uniwersytet Lubelski', 'KUL'], ['SWPS'], ['Akademia Leona Koźmińskiego', 'ALK'],
    ['Wojskowa Akademia Techniczna', 'WAT'], ['Akademia Wychowania Fizycznego', 'AWF'], ['Akademia Sztuk Pięknych', 'ASP'], ['Uniwersytet Śląski', 'UŚ'], ['Uniwersytet Ekonomiczny w Krakowie', 'UEK'],
    ['Uniwersytet Medyczny w Łodzi', 'UMED'], ['Warszawski Uniwersytet Medyczny', 'WUM'], ['Collegium Civitas'], ['Uniwersytet Rzeszowski', 'UR'], ['Politechnika Rzeszowska', 'PRz'], ['Politechnika Białostocka', 'PB'],
    ['Uniwersytet w Białymstoku', 'UwB'], ['Uniwersytet Opolski', 'UO'], ['Uniwersytet Zielonogórski', 'UZ'], ['Uniwersytet Warmińsko-Mazurski w Olsztynie', 'UWM'], ['Uniwersytet Kazimierza Wielkiego', 'UKW'],
    ['Uniwersytet Jana Kochanowskiego w Kielcach', 'UJK'], ['Uniwersytet Technologiczno-Humanistyczny w Radomiu', 'UTH Radom'], ['Politechnika Częstochowska', 'PCz'], ['Politechnika Opolska', 'PO'],
    ['Politechnika Lubelska', 'PL'], ['Politechnika Koszalińska', 'PK Koszalin'], ['Zachodniopomorski Uniwersytet Technologiczny', 'ZUT'],
  ],
  dzielnica: [
    ...group(150, 'Mokotów', 'Praga Północ', 'Praga Południe', 'Praga-Północ', 'Praga-Południe', 'Wola', 'Ochota', 'Żoliborz', 'Bielany', 'Bemowo', 'Ursynów', 'Wilanów', 'Wawer', 'Włochy', 'Ursus', 'Targówek', 'Białołęka',
      'Wesoła', 'Rembertów', 'Śródmieście', 'Stare Miasto', 'Saska Kępa', 'Sadyba', 'Powiśle', 'Muranów', 'Kabaty', 'Natolin', 'Służew', 'Gocław', 'Grochów', 'Bródno', 'Marymont', 'Praga'),
    ...group(800, 'Stegny', 'Nowe Miasto', 'Kamionek', 'Szmulowizna', 'Nowa Praga', 'Koło', 'Odolany', 'Czyste', 'Mirów', 'Młynów', 'Sady Żoliborskie', 'Wawrzyszew', 'Jelonki', 'Chrzanów', 'Zacisze', 'Piaski', 'Tarchomin',
      'Nowodwory', 'Choszczówka', 'Henryków', 'Anin', 'Falenica', 'Radość', 'Międzylesie', 'Marysin Wawerski', 'Zerzeń', 'Wygoda', 'Salomea', 'Okęcie', 'Raków', 'Opacz', 'Szczęśliwice', 'Rakowiec', 'Filtry', 'Stara Ochota',
      'Wierzbno', 'Sielce', 'Czerniaków', 'Siekierki', 'Powsin', 'Zawady', 'Kępa Zawadowska', 'Stara Miłosna', 'Kawęczyn', 'Gocławek', 'Witolin', 'Brzeziny', 'Targówek Fabryczny', 'Elsnerów', 'Bródno Podgórne', 'Kamionek'),
  ],
  metro: [
    ...group(250, 'Kabaty', 'Natolin', 'Imielin', 'Stokłosy', 'Ursynów', 'Służew', 'Wilanowska', 'Wierzbno', 'Racławicka', 'Pole Mokotowskie', 'Politechnika', 'Centrum', 'Świętokrzyska', 'Ratusz Arsenał', 'Dworzec Gdański',
      'Plac Wilsona', 'Marymont', 'Słodowiec', 'Stare Bielany', 'Wawrzyszew', 'Młociny', 'Bemowo', 'Ulrychów', 'Księcia Janusza', 'Młynów', 'Płocka', 'Rondo Daszyńskiego', 'Rondo ONZ', 'Nowy Świat-Uniwersytet',
      'Centrum Nauki Kopernik', 'Stadion Narodowy', 'Dworzec Wileński', 'Szwedzka', 'Targówek Mieszkaniowy', 'Trocka', 'Zacisze', 'Kondratowicza', 'Bródno', 'Dworzec Zachodni', 'Rondo Daszyńskiego', 'Nowy Świat'),
  ],
  naukowiec: [
    ...group(900, 'Jan Heweliusz', 'Jędrzej Śniadecki', 'Jan Śniadecki', 'Marian Smoluchowski', 'Stefan Kudelski', 'Kazimierz Kuratowski', 'Wacław Sierpiński', 'Hugo Steinhaus', 'Stanisław Mazur',
      'Antoni Zygmund', 'Stanisław Leśniewski', 'Józef Rotblat', 'Andrzej Grzegorczyk', 'Kazimierz Twardowski', 'Jan Łukasiewicz', 'Leopold Infeld', 'Roman Ingarden', 'Ludwik Fleck'),
  ],
  przedmiot: [
    ['język polski', 'polski', 'j. polski', 'polski rozszerzony'], ['matematyka', 'matma', 'matematyka rozszerzona'], ['język angielski', 'angielski', 'angol', 'j. angielski'], ['język niemiecki', 'niemiecki', 'j. niemiecki'],
    ['język francuski', 'francuski', 'j. francuski'], ['język hiszpański', 'hiszpański', 'j. hiszpański'], ['język rosyjski', 'rosyjski', 'j. rosyjski'], ['język włoski', 'włoski', 'j. włoski'], ['historia'],
    ['wiedza o społeczeństwie', 'wos', 'WOS'], ['geografia', 'geo'], ['biologia', 'biol'], ['chemia'], ['fizyka'], ['informatyka'], ['filozofia'], ['historia muzyki'], ['historia sztuki'],
    ['język łaciński i kultura antyczna', 'łacina', 'język łaciński', 'łacina i kultura antyczna'], ['język kaszubski', 'kaszubski'],
    ...group(5000, ['język białoruski', 'białoruski'], ['język litewski', 'litewski'], ['język ukraiński', 'ukraiński'], ['język łemkowski', 'łemkowski']),
  ],
  tworca: [
    ...group(500, 'Krzysztof Gonciarz', 'Karol Paciorek', 'Wersow'),
  ],
};
