// Czwarta partia: osoby. Ta sama osoba może być w kilku kategoriach (każda kategoria ma własną listę).
import { group } from './util.js';

const S = (s) => s.split(';').map((x) => x.trim()).filter(Boolean);

export default {
  piosenkarz: [
    ...group(300, ...S('Quebonafide;Kaz Bałagane;Sanah;Krzysztof Cugowski;Andrzej Zaucha;Wojciech Młynarski;Czesław Mozil;Kamil Bednarek;Dawid Kwiatkowski;Kasia Moś;Natalia Szroeder;Kaśka Sochacka;Ewelina Lisowska;Ewelina Flinta;Mateusz Ziółko;Maria Peszek;Anna Rusowicz;Marysia Starosta;Janusz Radek;Anita Lipnicka;Kasia Wilk;Kasia Popowska;Sarsa;Baranovski;Halina Kunicka;Karin Stanek;Sława Przybylska;Krystyna Giżowska;Maciej Balcar;Tomasz Lipiński;Marek Jackowski;Kasia Kowalska;Kuba Badach;Mietek Szcześniak;Ola Szwed;Beata Kozidrak;Ewa Bem;Jan Kiepura')),
  ],
  raper: [
    ...group(300, ...S('Quebonafide;Taco Hemingway;Mata;Białas;Bedoes;Tede;Paluch;Otsochodzi;Szpaku;Kękę;Young Igi;Sobel;Żabson;Smolasty;Oki;Szczyl')),
  ],
  aktor: [
    ...group(300, ...S('Mateusz Banasiuk;Bartosz Gelner;Tomasz Włosok;Jacek Poniedziałek;Adrian Zaremba;Krzysztof Czeczot;Michał Meyer;Konrad Eleryk;Przemysław Sadowski;Marcin Kwaśny;Hanna Śleszyńska;Joanna Moro;Joanna Brodzik;Agnieszka Dygant;Magdalena Boczarska;Andrzej Zieliński;Joanna Liszowska;Barbara Kurdej-Szatan;Julia Kamińska;Alicja Bachleda-Curuś;Weronika Książkiewicz;Joanna Koroniewska')),
  ],
  prezenter: [
    ...group(300, ...S('Jarosław Kuźniar;Maciej Dowbor;Tomasz Kammel;Marcin Prokop;Dorota Wellman;Krzysztof Skiba;Kinga Rusin;Magda Mołek;Anna Lewandowska;Beata Pawlikowska;Tomasz Zimoch;Dariusz Szpakowski;Krzysztof Stanowski;Przemysław Babiarz;Tomasz Smokowski')),
  ],
  sportowiec: [
    ...group(300, ...S('Marcin Najman;Michał Materla;Karolina Kowalkiewicz;Mateusz Gamrot;Jan Błachowicz;Tomasz Narkun;Waldemar Ćwik;Mariusz Wach;Krzysztof Głowacki;Andrzej Fonfara;Kamil Szeremeta;Maciej Sulęcki;Stefan Hula;Maciej Kot;Andrzej Stękała;Aleksander Zniszczoł;Piotr Żyła;Adam Małysz;Kamil Stoch;Dawid Kubacki;Tomasz Gollob;Bartosz Zmarzlik;Patryk Dudek;Jarosław Hampel;Maciej Janowski')),
  ],
};
