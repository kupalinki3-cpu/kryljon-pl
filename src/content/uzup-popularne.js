// Uzupełnienia redakcyjne popularnych odpowiedzi i typowych zapisów graczy.
import { group } from './util.js';

export default {
  mem: [
    ...group(150, ['Ale urwał', 'ale urwal'], ['Paweł Jumper', 'Pawel Jumper to sie kameruje'],
      ['Co ja paczę', 'co ja pacze kot'], ['Laguna', 'krakowski lagun', 'lagun'],
      ['Będę grał w grę', 'a w jaką tomb raider'], ['Jestem hardkorem', 'hardkorem jestem']),
    ...group(350, ['Mamo, jestem w telewizji', 'Mamo jestem w TV'], 'Pytasz dzika czy sra w lesie',
      ['Koniec imprezy', 'Ale urwał koniec imprezy'],
      ['Memy z Robertem Makłowiczem', 'Makłowicz mem', 'Maklowicz mem'], 'Robert, przestań',
      'Nie będzie niczego',
      ['Kononowicz', 'Krzysztof Kononowicz'], 'Tak było, nie zmyślam', 'Śmiechłem'),
  ],
  tworca: [
    ...group(270, ['Uwaga! Naukowy Bełkot', 'Naukowy Bełkot', 'Dawid Myśliwiec'], ['Karol Paciorek', 'Imponderabilia'],
      ['Kuba Klawiter', 'Kuba Klawiter youtuber'], 'Włodek Markowicz', 'Abstrachuje',
      'Jakub Midel', 'Marcin Iwuć', 'Michał Szafrański', 'Radek Kotarski',
      'Przemek Górczyk', 'Andrzej Tucholski', 'Kasia Babis', 'Klaudia Bieszcz',
      'Michał Marszał', 'Ziemniak', 'Testhub', 'Tivolt',
      'Nexos', 'Gilathiss', 'Hed', 'tvgry', 'Szymon Pękala', 'Maciej Orłoś',
      'Lekko Stronniczy', 'NaukowoTV', 'IrytującyHistoryk', 'Mówiąc Inaczej'),
  ],
  gra: [
    ...group(420, ['Wiedźmin', 'Witcher 3', 'Wiedźmin Trójka'], ['Frostpunk', 'Frost Punk'],
      ['Wiedźmin 2', 'The Witcher 2', 'Zabójcy królów'], 'Manor Lords', 'RoboCop: Rogue City',
      ['Terminator: Resistance', 'Terminator Resistance'], 'RoboCop: Rogue City – Unfinished Business',
      'Against the Storm',
      'The Invincible', 'The Thaumaturge', 'Nobody Wants to Die', 'Blacktail',
      'Bum Simulator', 'Mr. Prepper', 'Timberborn',
      'Gas Station Simulator', 'Contraband Police', 'Helltaker',
      '911 Operator', '112 Operator', 'We. The Revolution', 'The Alters',
      'The Last Case of Benedict Fox', 'Tower of Time', 'Dark Envoy',
      'Gamedec', 'Ruiner', 'Serial Cleaner', 'Serial Cleaners', 'Yet Another Zombie Survivors'),
  ],
  film: [
    ...group(470, 'Chłopi', 'Twój Vincent', 'Rewers', 'Sala samobójców. Hejter', 'Jak pies z kotem',
      'Być jak Kazimierz Deyna', 'Córki dancingu', 'Moje córki krowy', 'Jasminum', 'Plac Zbawiciela',
      'Mój Nikifor', 'Dzień kobiet', 'Broad Peak', 'Johnny', 'Chleb i sól', 'IO', 'Kos', 'Figurant',
      'Fin del Mundo?', 'Śubuk', 'Filip', 'Teściowie', 'Teściowie 2', 'Wesele 2021', 'Jeziorak',
      'Kamienie na szaniec', 'Jack Strong', 'W ciemności', 'Nad Niemnem', 'Chce się żyć',
      'Body/Ciało', 'Pociąg do Hollywood', 'Sztuczki', 'Mój rower', 'Zupa nic',
      'Wymyk', 'Kret', 'Układ zamknięty', 'Czarny czwartek', 'Najlepszy', 'Cicha ziemia',
      'Pożegnania', 'Zaklęte rewiry', 'Pasja', 'Kobieta w kapeluszu', 'Cień', 'Błękitny krzyż',
      'Sprawa Gorgonowej', 'Persona non grata', 'Brat naszego Boga', 'Debiutantka', 'Był jazz', 'Idol'),
  ],
  napoj: [
    ['Kompot', 'kompot z owoców', 'kompot ze świeżych owoców', 'kompocik', 'suszonka wigilijna'],
    ['Miód pitny', 'miod pitny tradycyjny', 'miód do picia'],
    ['Podpiwek', 'podpiwek domowy'], ['Kwas chlebowy', 'domowy kwas chlebowy'],
    ['Zsiadłe mleko', 'mleko kwaśne'], ['Kwas buraczany', 'zakwas z buraków'],
  ],
};
