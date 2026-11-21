// Trzecia partia: zwierzęta, potrawy, muzyka, telewizja, bajki, kabarety. Tylko nazwy znane w Polsce.
import { group } from './util.js';

const S = (s) => s.split(';').map((x) => x.trim()).filter(Boolean);

export default {
  ssak: [
    ...group(250, ...S('pies;kot;koń;krowa;świnia;owca;koza;królik;chomik;świnka morska;mysz;szczur;lis;wilk;niedźwiedź;jeleń;sarna;dzik;zając;wiewiórka;jeż;kret;łoś;żubr;ryś;wydra;borsuk;kuna;gronostaj;łasica;nornik;ryjówka;nietoperz;bóbr;piżmak;daniel;muflon;kozica;świstak;foka;szarytka;morświn;delfin;wieloryb;słoń;lew;tygrys;żyrafa;zebra;hipopotam;nosorożec;małpa;goryl;szympans;orangutan;kangur;koala;panda;wielbłąd;lama;alpaka;renifer;gepard;lampart;jaguar;puma;hiena;pantera;surykatka;mrówkojad;leniwiec;pancernik;wombat;diabeł tasmański;dziobak;kolczatka;nutria;jenot;szop pracz;skunks;wydra morska;mors;lew morski;orka;kaszalot;manat;dugong;nosacz;lemur;mandryl;pawian;gibbon;makak;kapucynka;marmozeta;tamaryna;dingo;kojot;szakal;fenek;karakal;serwal;ocelot;irbis;manul;pantera śnieżna;kuguar;żbik;rosomak;soból;norka;tchórz;szynszyla;degu;gerbil;myszoskoczek;kapibara;paka;mara;wiskacza;pręgowiec;jeż afrykański;tapir;okapi;gnu;bawół;antylopa;impala;eland;gazela;oryks;kudu;jak;bizon;zubr')),
  ],
  zespol: [
    ...group(250, ...S('Lady Pank;Perfect;Kult;T.Love;Budka Suflera;Maanam;Republika;Lombard;Oddział Zamknięty;Czerwone Gitary;Skaldowie;Niebiesko-Czarni;Breakout;Krzysztof Klenczon;Trubadurzy;Bajm;Papa Dance;Kombi;Wilki;Hey;Myslovitz;Coma;Happysad;Strachy na Lachy;Armia;Püdelsi;Sztywny Pal Azji;Voo Voo;Pidżama Porno;Elektryczne Gitarki;Big Cyc;Bracia Figo Fagot;Kazik na Żywo;Kasa Chorych;Acid Drinkers;Vader;Behemoth;Decapitated;Hunter;Turbo;TSA;Wolf Spider;Closterkeller;Illusion;Moskwa;Ziyo;Zakopower;Enej;Weekend;Boys;Akcent;Bayer Full;Shazza;Top One;Toples;Piękni i Młodzi;After Party;Mazowsze;Śląsk;Blue Café;Pectus;Feel;Łzy;Ich Troje;Varius Manx;Afromental;Video;Raz Dwa Trzy;Stare Dobre Małżeństwo;Wawele;Golec uOrkiestra;Zabili mi żółwia;Pod Budą;Siekiera;Dezerter;Kryzys;Anawa;Kombii;Elektryczne Gitary;Strachy Na Lachy')),
  ],
  kabaret: [
    ...group(250, ...S('Kabaret Moralnego Niepokoju;Moralnego Niepokoju;Kabaret Hrabi;Hrabi;Kabaret Ani Mru Mru;Ani Mru Mru;Kabaret Paka;Paka;Kabaret Smile;Smile;Kabaret Młodych Panów;Młodych Panów;Kabaret Limo;Limo;Kabaret Łowcy.B;Łowcy.B;Łowcy B;Kabaret Neo-Nówka;Neo-Nówka;Neonówka;Kabaret Skeczów Męczących;Skeczów Męczących;Kabaret Jurki;Jurki;Kabaret Potem;Potem;Kabaret Nowaki;Nowaki;Kabaret Czesuaf;Czesuaf;Kabaret Mumio;Mumio;Kabaret Kilka Osób;Kilka Osób;Kabaret Formacja Chatelet;Chatelet;Kabaret Rak;Rak;Kabaret Warszawskie Dzieci;Kabaret Dno;Dno;Kabaret OT.TO;OT.TO;Kabaret Pod Wyrwigroszem;Pod Wyrwigroszem;Kabaret Tey;Tey;Kabaret Elita;Elita;Kabaret Szum;Szum;Kabaret Koń Polski;Koń Polski;Kabaret Piotra Bałtroczyka;Bałtroczyk;Kabaret Starszych Panów;Starsi Panowie')),
  ],
  program: [
    ...group(250, ...S('Dzień Dobry TVN;Pytanie na śniadanie;Kawa czy herbata;Teleexpress;Kuchenne rewolucje;MasterChef;Top Chef;Twoja twarz brzmi znajomo;Taniec z gwiazdami;Mam talent;Mam talent!;The Voice of Poland;The Voice Kids;The Voice Senior;Idol;Szansa na sukces;Jaka to melodia;Jaka to melodia?;Milionerzy;Familiada;Awantura o kasę;Koło fortuny;Va banque;Postaw na milion;Idź na całość;Randka w ciemno;Rolnik szuka żony;Gogglebox;Big Brother;Azja Express;Agent;Ninja Warrior;Ninja Warrior Polska;Wyprawa Robinson;Sprawa dla reportera;Uwaga!;Uwaga;Superwizjer;Teleranek;Domowe Przedszkole;Ewa gotuje;Rozmowy w toku;Ukryta prawda;Trudne sprawy;Sędzia Anna Maria Wesołowska;Gwiazdy tańczą na lodzie;Kuba Wojewódzki;Wojewódzki;The Kuba Wojewódzki Show;Ślub od pierwszego wejrzenia;Pytanie na Śniadanie;Dzień dobry TVN')),
  ],
};
