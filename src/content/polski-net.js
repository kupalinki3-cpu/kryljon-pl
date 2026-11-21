// Polski internet i popkultura sieciowa. Głębokość w metrach to ocena redakcyjna:
// im mniej osób zna odpowiedź, tym głębiej. Niepewnych wpisów tu nie ma; braki uzupełnia kolejka
// nieznanych odpowiedzi (GET /api/admin/unmatched).
import { cat, group } from './util.js';

export default [
  cat(
    'tworca',
    'Polski twórca internetowy (youtuber, streamer)',
    group(200, ['Paweł Jumper', 'Jumper'], 'Friz', 'Budda', 'Maffashion', ['Sylwester Wardęga', 'Wardęga'], 'Lord Kruszwil',
      'Kuba Klawiter', 'Gimper', 'Rafonix', 'Blowek', 'Izak', 'Wojtek Gola', 'Anelka', 'Dobrodziej'),
    group(600, 'Major Suchodolski', 'Marcin Dubiel', 'Kamil Labudda', 'Mixer', 'Ewron'),
    group(180, 'Stuu', 'Julia Żugaj', 'Team X', 'Mortalcio', 'Bungee', 'Tromba', 'Patec', 'Disowskyy',
      'Mandzio', 'Eleven', 'Naruciak', 'Palion', 'Czajnik', 'Karol Wiśniewski'),
    group(450, 'Mietczyński', 'AdBuster', 'Niekryty Krytyk', 'Cyber Marian', 'Rock Alone',
      'Rojo', 'JJayJoker', 'Pingwin', 'Vertez', 'Ravgor', 'Klocuch', 'Uwaga! Naukowy Bełkot',
      'SciFun', 'Kasia Gandor', 'Złomnik', 'Profesor Chris', 'Motobieda', 'M4K Garage',
      'Historia bez cenzury', 'Gry na Plus', 'Quaz', 'Arhn.eu', 'Astrofaza', 'Kowal',
      'Nie wiem, ale się dowiem', 'BezPlanu', 'Gdzie Bądź', 'Planeta Abstrakcja', 'Podróże Wojownika'),
  ),
  cat(
    'mem',
    'Podaj nazwę polskiego mema lub filmiku. Wystarczy też znany cytat.',
    group(150, 'Janusz', 'Karyna', 'Sebix', 'Grażyna', 'Pan Kiciuś', 'Cebulak', 'Kurła', 'Typowy Polak', 'Dzban', 'Madka'),
    group(500, 'Polak Cebulak', 'Seba', 'Brajan', 'Dżesika', 'Typowa Polka'),
    group(150, ['Paweł Jumper', 'Jumper', 'Paweł Dżamper', 'To się kameruje', 'To już się kameruje', 'Uwaga to się kameruje'],
      ['Ale urwał', 'Ale to było dobre', 'Ale urwał ale to było dobre', 'Ale urawł'],
      ['Małpa Janusz', 'Nosacz sundajski', 'Nosacz', 'Nosacze'], 'Co ja paczę',
      ['Jestem hardkorem', 'Jestem hardcorem', 'Jestem hardkor'], 'Mięsny jeż',
      ['Będę grał w grę', 'Tomb Raider', 'Będę grał w grę Tomb Raider'],
      'Moje pole', 'Daj kamienia', ['Krzysiu, jem zupę', 'Krzysiu jem zupe', 'Jem zupę'], 'Laguna'),
    group(450, 'Nie ma takiego bicia', 'Koniec imprezy', 'Super partia',
      ['Forfiter', 'At least forfiter', 'At list forfiter', 'Forfiter szwagier'],
      ['Pasta o wędkarzu', 'Mój stary to fanatyk wędkarstwa', 'Fanatyk wędkarstwa'],
      ['Andrzeju, nie denerwuj się', 'Andrzeju nie denerwuj się'],
      ['Co to jest używka', 'Co to używka'], 'Zabawa benzyną w garażu',
      'Cygan elektryk', 'Ja nie mogę, śnieg', ['Ale że jak?', 'Ale że jak'],
      ['Papieżowa godzina', '21:37', '2137', '21 37'],
      ['Chłopaki nie płaczą: Grucha', 'Grucha'], 'Jak do tego doszło, nie wiem',
      'Panie Areczku', 'Przypadek? Nie sądzę', 'Oddaj fartucha',
      ['Milion, milion, milion', 'Milion monet'], 'Ja tu jestem kierownikiem'),
    group(1200, ['Podlasie jako stan umysłu', 'Podlasie memy'], ['Żółta morda', 'Rzułta morda', 'Rzulta morda'], ['Bogdan Boner', 'Egzorcysta Boner'], 'Sztywniutko',
      'A miał być taki amerykański', 'No i fajnie', 'A kto umarł, ten nie żyje'),
  ),
];
