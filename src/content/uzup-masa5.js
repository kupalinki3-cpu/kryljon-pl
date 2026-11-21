// Piąta partia: pasma, uczelnie, naukowcy, postacie historyczne, kluby, parki, serwisy.
import { group } from './util.js';

const S = (s) => s.split(';').map((x) => x.trim()).filter(Boolean);

export default {
  pasmo: [
    ...group(300, ...S('Tatry;Bieszczady;Karkonosze;Beskid Śląski;Beskid Żywiecki;Beskid Mały;Beskid Sądecki;Beskid Niski;Gorce;Pieniny;Góry Sowie;Góry Bystrzyckie;Góry Orlickie;Masyw Śnieżnika;Góry Izerskie;Rudawy Janowickie;Góry Kaczawskie;Góry Wałbrzyskie;Góry Złote;Góry Opawskie;Beskid Makowski;Beskid Wyspowy;Pasmo Policy;Góry Świętokrzyskie;Roztocze;Sudety;Karpaty;Tatry Zachodnie;Tatry Wysokie;Babia Góra;Góry Bardzkie;Góry Kamienne;Wyżyna Krakowsko-Częstochowska')),
  ],
  uczelnia: [
    ...group(500, ['Uniwersytet Przyrodniczy', 'UP'], ['Uniwersytet Medyczny w Lublinie', 'UM Lublin'], ['Uniwersytet Medyczny w Poznaniu', 'UMP'], ['Uniwersytet Medyczny we Wrocławiu', 'UMW'],
      ['Uniwersytet Medyczny w Białymstoku', 'UMB'], ['Gdański Uniwersytet Medyczny', 'GUMed'], ['Śląski Uniwersytet Medyczny', 'SUM'], ['Pomorski Uniwersytet Medyczny', 'PUM'], ['Collegium Medicum UJ', 'CM UJ'],
      ['Akademia Muzyczna', 'Akademia Muzyczna w Krakowie'], ['Akademia Teatralna', 'Akademia Teatralna w Warszawie', 'Teatrzyk'], ['Państwowa Wyższa Szkoła Filmowa w Łodzi', 'Filmówka', 'Szkoła Filmowa w Łodzi'],
      ['Wyższa Szkoła Bankowa', 'WSB'], ['Akademia Finansów i Biznesu Vistula', 'Vistula'], ['Uczelnia Łazarskiego', 'Łazarski'], ['Politechnika Świętokrzyska', 'PŚk'], ['Politechnika Morska', 'Akademia Morska'],
      ['Uniwersytet Gdański', 'UG'], ['Akademia Pomorska', 'APS'], ['Uniwersytet Humanistyczno-Przyrodniczy', 'UJK'], ['Uniwersytet Pedagogiczny', 'UP Kraków', 'UKEN'], ['Uniwersytet Komisji Edukacji Narodowej', 'UKEN'],
      ['Szkoła Główna Służby Pożarniczej', 'SGSP'], ['Akademia Marynarki Wojennej', 'AMW'], ['Akademia Sztuki Wojennej', 'ASzWoj'], ['Uniwersytet Technologiczno-Przyrodniczy w Bydgoszczy', 'UTP'], ['Uniwersytet Ekonomiczny we Wrocławiu', 'UEW'],
      ['Uniwersytet Ekonomiczny w Poznaniu', 'UEP'], ['Uniwersytet Ekonomiczny w Katowicach', 'UE Katowice'], ['Politechnika Gdańska', 'PG']),
  ],
  naukowiec: [
    ...group(300, ...S('Maria Skłodowska-Curie;Maria Curie;Mikołaj Kopernik;Kopernik;Ignacy Łukasiewicz;Ignacy Domeyko;Kazimierz Funk;Rudolf Weigl;Jan Czochralski;Stefan Banach;Marian Rejewski;Jerzy Różycki;Henryk Zygalski;Zygmunt Wróblewski;Karol Olszewski;Jan Szczepanik;Tadeusz Sendzimir;Kazimierz Prószyński;Stefan Drzewiecki;Ludwik Hirszfeld;Albert Sabin;Marian Smoluchowski;Jan Mikulicz-Radecki;Ludwik Zamenhof;Alfred Tarski;Bronisław Malinowski;Florian Znaniecki;Aleksander Wolszczan;Andrzej Udalski')),
  ],
  postac_historyczna: [
    ...group(300, ...S('Józef Piłsudski;Roman Dmowski;Ignacy Paderewski;Wojciech Korfanty;Wincenty Witos;Ignacy Daszyński;Władysław Sikorski;Edward Rydz-Śmigły;Tadeusz Kościuszko;Józef Poniatowski;Jan Henryk Dąbrowski;Kazimierz Pułaski;Tadeusz Bór-Komorowski;Stefan Grot-Rowecki;Witold Pilecki;Władysław Anders;Stanisław Maczek;Jan Karski;Irena Sendlerowa;Janusz Korczak;Maksymilian Kolbe;Jerzy Popiełuszko;Stefan Wyszyński;Karol Wojtyła;Jan Paweł II;Lech Wałęsa;Wojciech Jaruzelski;Władysław Gomułka;Edward Gierek;Bolesław Bierut;Tadeusz Mazowiecki;Lech Kaczyński;Jarosław Kaczyński;Donald Tusk;Aleksander Kwaśniewski;Bronisław Komorowski;Andrzej Duda;Anna Walentynowicz;Andrzej Gwiazda;Jacek Kuroń;Adam Michnik;Karol Modzelewski;Jan Olszewski;Hanna Suchocka')),
  ],
  klub: [
    ...group(1500, ...S('ZAKSA Kędzierzyn-Koźle;Jastrzębski Węgiel;Skra Bełchatów;Vive Kielce;Łomża Vive Kielce;GKS Tychy;Unia Oświęcim;Comarch Cracovia;JKH GKS Jastrzębie;Podhale Nowy Targ')),
  ],
  park: [
    ...group(300, ...S('Tatrzański Park Narodowy;Karkonoski Park Narodowy;Białowieski Park Narodowy;Bieszczadzki Park Narodowy;Wielkopolski Park Narodowy;Wigierski Park Narodowy;Woliński Park Narodowy;Słowiński Park Narodowy;Narwiański Park Narodowy;Biebrzański Park Narodowy;Poleski Park Narodowy;Roztoczański Park Narodowy;Świętokrzyski Park Narodowy;Gorczański Park Narodowy;Pieniński Park Narodowy;Babiogórski Park Narodowy;Ojcowski Park Narodowy;Magurski Park Narodowy;Drawieński Park Narodowy;Park Narodowy Borów Tucholskich;Park Narodowy Ujście Warty;Kampinoski Park Narodowy;Park Narodowy Gór Stołowych;Tatrzański;Karkonoski;Białowieski;Bieszczadzki;Wielkopolski;Wigierski;Woliński;Słowiński;Narwiański;Biebrzański;Poleski;Roztoczański;Świętokrzyski;Gorczański;Pieniński;Babiogórski;Ojcowski;Magurski;Drawieński;Kampinoski;TPN;KPN;BdPN;BPN;WPN')),
  ],
  serwis: [
    ...group(300, ...S('Allegro;OLX;Onet;WP;Interia;Gazeta.pl;Wykop;Pudelek;Plotek;Pyszne.pl;Glovo;Uber Eats;Bolt;Uber;FreeNow;iTaxi;Booking;Airbnb;Trivago;Skyscanner;eDreams;Wakacje.pl;Itaka;Rainbow;TUI;Gratka;Otodom;Domiporta;Morizon;Otomoto;Allegro Lokalnie;Vinted;Zalando;eobuwie;Modivo;Ceneo;Skąpiec;Nokaut;Morele;x-kom;Komputronik;Mediaexpert;Empik;Lubimyczytac;Filmweb;Cda;CDA;Player.pl;Ipla;Polsat Box;Spotify;Tidal;Deezer;YouTube;TikTok;Instagram;Facebook;Messenger;WhatsApp;Telegram;Discord;Twitch;Steam;Epic Games;Wikipedia;Gadu-Gadu;GG;Nasza-klasa;NK;Fotka;Chomikuj;Demotywatory;Kwejk;Joemonster;JoeMonster;Sadistic;Fakt;Super Express;Gazeta Wyborcza;Rzeczpospolita;Dziennik Gazeta Prawna;Money.pl;Bankier;Business Insider;Spiders Web;Antyweb;Gry-Online;Gry Online;Ppe.pl;PPE;Wyborcza.pl;Polsat News;TVN24;Natemat;naTemat;OKO.press;Kanał Zero;Kanał Sportowy;Weszło;Sport.pl;Przegląd Sportowy;Transfermarkt')),
  ],
};
