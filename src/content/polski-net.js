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
  ),
  cat(
    'mem',
    'Polski mem lub zjawisko z polskiego internetu',
    group(150, 'Janusz', 'Karyna', 'Sebix', 'Grażyna', 'Pan Kiciuś', 'Cebulak', 'Kurła', 'Typowy Polak', 'Dzban', 'Madka'),
    group(500, 'Polak Cebulak', 'Seba', 'Brajan', 'Dżesika', 'Typowa Polka'),
  ),
];
