// Uzupełnienia istniejących kategorii (po id). Wpisy, których nazwa lub alias już jest w kategorii, są pomijane
// przy scalaniu w index.js, więc można tu dopisywać bez sprawdzania duplikatów ręcznie.
import { group } from './util.js';

export default {
  raper: [
    ...group(220, 'Paktofonika', 'Fisz Emade Tworzywo', ['Pięć Dwa Dubajtury', '52 Dębiec', 'Pięćdziesiąt dwa Dębiec'], 'Grammatik',
      ['Mezo', 'Mezo Rap'], 'Pono', 'Vienio', ['Waldemar Kasta', 'Kasta'], 'Onar', 'Pyskaty', 'Rahim', 'Tymek', 'Żabson', 'Sobota', 'Gural',
      ['Slums Attack', 'Slums'], ['Płomień 81', 'Plomien 81'], 'Wzgórze Ya-Pa 3', 'Tworzywo Sztuczne', 'Zeus', 'Chada', 'Bisz', 'Diox', 'Dwa Sławy', 'Schafter',
      'Kuban', 'Popek', 'Solar', 'Major SPZ', 'Wac Toja', 'Kaen', 'VNM', 'Rafi', 'Pro8l3m', 'Sokół i Marysia Starosta', 'Quebahamas', 'DJ Decks', 'Dizkret', 'Chonabibe', 'Beteo', 'Kękę', 'KęKę',
      'Fisz', 'Emade', 'Mrozu', 'Ostry', 'Skorup', 'Bonus RPK', 'Grubson', 'Lilu', 'Młody Dron', 'Szczyl', 'Tede', 'Dj Eprom', 'Mikser', 'Wojtek Sokół'),
  ],
  zespol: [
    ...group(250, 'TSA', 'Turbo', 'Kat', 'Frontside', 'Mech', 'Exodus', 'Hunter', 'Piersi', 'Łzy', 'Ich Troje', 'Blue Café', 'Feel', 'Video', 'Afromental',
      'De Mono', 'Happysad', 'Pustki', 'Lipali', 'Raz Dwa Trzy', 'Pod Budą', 'Stare Dobre Małżeństwo', 'Śmierć Kliniczna', 'Cool Kids of Death',
      'The Dumplings', 'Pogodno', 'Mikromusic', 'Organek', 'Luxtorpeda', 'Mesajah', 'Vavamuffin', 'Natural Dread Killaz', 'Kombajn do zbierania kur po wioskach',
      'Krzysztof Krawczyk i Trubadurzy', 'Trubadurzy', 'Breakout', 'Niebiesko-Czarni', 'Czerwono-Czarni', 'Dżamble', 'Bracia', 'Akcent', 'Boys', 'Bayer Full', 'Weekend', 'Shazza',
      'Top One', 'Mig', 'Skaner', 'After Party', 'Piękni i Młodzi', 'Candy Girl', 'Classic', 'Zenon Martyniuk', 'Mandaryna', 'Blue Cafe', 'Varius Manx', 'Ścigani', 'Wanda i Banda',
      'Rezerwat', 'Kobranocka', 'Elektryczne Gitary', 'Proletaryat', 'Moskwa', 'Cree', 'Chłopcy z Placu Broni', 'Ziyo', 'Podsiadło', 'Sorry Boys', 'Habakuk'),
  ],
  stereotyp: [
    ...group(150, ['Polak pijak', 'Pijak', 'Polak alkoholik', 'Alkoholik'], ['Polak narzekacz', 'Narzekacz', 'Polak marudzi', 'Maruda'], ['Polak katolik', 'Katolik'],
      ['Kibol', 'Pseudokibic'], ['Wąsacz', 'Pan z wąsem', 'Typ z wąsem'], ['Polak złodziej', 'Złodziej'], ['Typowy Polak', 'Przeciętny Polak'], 'Babcia',
      'Dziadek', ['Pani Krysia', 'Krysia'], ['Pan Mirek', 'Mirek'], ['Pani Halinka', 'Halinka'], ['Pan Zdzisio', 'Zdzisio', 'Zdzisiu'], ['Polak w Anglii', 'Polak w UK'],
      ['Polak za granicą', 'Polak na emigracji'], ['Polak za kierownicą', 'Polak kierowca', 'Kierowca'], 'Sąsiad', ['Sąsiadka', 'Sąsiadka z dołu'], ['Pani z urzędu', 'Urzędniczka'],
      'Pani w okienku', 'Prezes', ['Dres', 'Blokers'], ['Pan Sebastian', 'Sebastian'], ['Polak spod sklepu', 'Spod sklepu']),
  ],
};
