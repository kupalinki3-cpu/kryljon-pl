// Uzupełnienia: kultura, media, jedzenie i marki. Wpisy łączone z istniejącymi po nazwie/aliasie (patrz index.js).
import { group } from './util.js';

export default {
  kabaret: [
    ['Kabaret Moralnego Niepokoju', 'Moralnego Niepokoju', 'KMN'], ['Kabaret Ani Mru-Mru', 'Ani Mru Mru', 'Ani Mru-Mru'], ['Kabaret Hrabi', 'Hrabi'], ['Kabaret Smile', 'Smile'],
    ['Kabaret Młodych Panów', 'Młodych Panów'], ['Kabaret Skeczów Męczących', 'Skeczów Męczących'], ['Kabaret Paranienormalni', 'Paranienormalni'], ['Kabaret Łowcy.B', 'Łowcy.B', 'Łowcy B'],
    ['Kabaret Neonówka', 'Neonówka', 'Neo-Nówka', 'Kabaret Neo-Nówka'], ['Kabaret Limo', 'Limo'], ['Kabaret Chyba', 'Chyba'], ['Kabaret Formacja Chatelet', 'Formacja Chatelet', 'Chatelet'], ['Kabaret Jurki', 'Jurki'],
    ['Kabaret OT.TO', 'OT.TO', 'Otto'], ['Kabaret Czesuaf', 'Czesuaf'], ['Kabaret K2', 'K2'], ['Grupa MoCarta', 'MoCarta'], ['Kabaret Pod Wyrwigroszem', 'Pod Wyrwigroszem'], ['Kabaret Elita', 'Elita'],
    ['Kabaret Potem', 'Potem'], ['Kabaret Dno', 'Dno'], ['Kabaret Koń Polski', 'Koń Polski'], ['Kabaret Starszych Panów', 'Starszych Panów'], ['Kabaret Dudek', 'Dudek'], ['Kabaret Tey', 'Tey'],
    ...group(400, 'Kabaret Mumio', 'Mumio', 'Kabaret Nowaki', 'Nowaki', 'Kabaret Szarpanina', 'Szarpanina', 'Kabaret Rak', 'Kabaret Ciach', 'Kabaret Słuchajcie', 'Kabaret Pod Egidą'),
  ],
  program: [
    ...group(150, 'Taniec z gwiazdami', 'Twoja twarz brzmi znajomo', 'X Factor', 'Must Be the Music', 'Sanatorium miłości', 'Ślub od pierwszego wejrzenia', 'Love Island', 'Azja Express', 'Agent',
      'Idol', 'Bitwa na głosy', 'Jaka to melodia?', 'Jaka to melodia', 'Wiadomości', 'Fakty', 'Teleexpress', 'Panorama', 'Kropka nad i', 'Gość Wiadomości', 'Wiem co jem', 'MasterChef Junior', 'Gogglebox', 'Mam Talent!', 'Mam talent'),
    ...group(1100, 'Studio Yayo', 'Kawa na ławę', 'Teleranek', 'Disco Polo Life', 'Polsat Superhit Festiwal', 'Sopot Festival', 'Festiwal w Opolu', 'KFPP Opole', 'Sylwester Marzeń',
      'Hell\'s Kitchen', 'Kuchenne rewolucje', 'Bake Off Polska', 'Top Chef', 'Big Brother Polska', 'Szansa na sukces', 'Jeden z dziesięciu', 'Postaw na milion', 'Wielka Gra', 'Kocham cię, Polsko!', 'Pytanie na śniadanie',),
  ],
  radio: [
    ...group(300, 'Radio ESKA', 'Zet', 'RMF MAXX', 'RMF 24', 'Radio Wnet', 'Polskie Radio Program 1', 'Polskie Radio Program 2', 'Polskie Radio Program 3', 'Polskie Radio Program 4', 'Program 1', 'Program 2', 'Program 3', 'Program 4',
      'Radio Zet Gold', 'Radio Gdańsk', 'Radio Kraków', 'Radio Wrocław', 'Radio Lublin', 'Radio Olsztyn', 'Radio Szczecin', 'Radio Poznań', 'Radio Katowice', 'Radio Łódź', 'Radio Kielce', 'Radio Rzeszów', 'Radio Opole',
      'Radio Białystok', 'Radio Bydgoszcz', 'Radio Koszalin', 'Radio Gdańsk', 'Radio Lublin', 'Radio Rzeszów', 'RMF Maxxx', 'Radio Zet Chilli', 'Antyradio', 'Radio Złote Przeboje', 'Polskie Radio Dzieciom', 'Radio Dla Ciebie',),
  ],
  slang: [
    ...group(120, 'sztos', 'essa', 'kozak', 'siema', 'elo', 'spoko', 'luzik', 'zajawka', 'cringe', 'krindż', 'ziomek', 'ziom', 'ogarnąć', 'jarać się', 'jarzyć', 'beka', 'lol', 'xd', 'dzban', 'kumpel', 'ziomal', 'ziomeczek', 'luz',
      'wyluzuj', 'czaić', 'czaisz', 'nara', 'narka', 'pozdro', 'chillować', 'chill', 'boomer', 'zoomer', 'sus', 'slay', 'wypas', 'git', 'gites', 'kumaty', 'kumam', 'czad', 'czadowy', 'odjazd', 'odlot',
      'dres', 'karyna', 'brajan', 'dżesika', 'janusz', 'sebix', 'cebula', 'cebulak', 'o co kaman', 'hejka', 'xd',),
  ],
};
