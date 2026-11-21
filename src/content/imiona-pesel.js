// Ministerstwo Cyfryzacji, pierwsze imiona w rejestrze PESEL osób żyjących, 20.01.2026.
// https://dane.gov.pl/pl/dataset/1667 (zasoby 1159669 i 1159670)
// Suma obu wykazów, od 50 wystąpień. Głębokości bazowe zależą od liczby wystąpień.

const groups = [
  [120, `
    Adam Adrian Adriana Adrianna Agata Agnieszka Alan Albert Aldona Aleksander Aleksandra Alex Alexander
    Alfred Aliaksandr Alicja Alina Alla Alona Amelia Anastasiia Anastazja Anatolii Andrei Andrii Andrzej
    Andżelika Aneta Angelika Anhelina Aniela Anita Anna Anton Antoni Antonina Arkadiusz Arleta Artem Artur
    Aurelia Barbara Bartosz Bartłomiej Beata Bernadeta Bernard Blanka Bogdan Bogumiła Bogusław Bogusława
    Bohdan Bolesław Borys Bożena Bożenna Bronisław Bronisława Bruno Brygida Błażej Cecylia Celina Cezary
    Czesław Czesława Dagmara Damian Daniel Daniela Danuta Danylo Daria Dariusz David Dawid Denys Diana
    Dmytro Dominik Dominika Dorota Dzmitry Edmund Edward Edyta Eliza Elwira Elżbieta Emil Emilia Ernest Eryk
    Eugenia Eugeniusz Ewa Ewelina Fabian Filip Franciszek Gabriel Gabriela Genowefa Gertruda Gracjan Grażyna
    Grzegorz Halina Halyna Hanna Helena Henryk Henryka Honorata Hubert Iga Ignacy Igor Ihor Illia Ilona Inna
    Irena Ireneusz Iryna Ivan Ivanna Iwona Izabela Izabella Jacek Jadwiga Jagoda Jakub Jan Janina Janusz
    Jarosław Jerzy Joachim Joanna Jolanta Julia Julian Julita Justyna Józef Józefa Jędrzej Kacper Kaja
    Kajetan Kalina Kamil Kamila Karina Karol Karolina Katarzyna Kateryna Kazimiera Kazimierz Khrystyna Kinga
    Klara Klaudia Konrad Kornel Kornelia Kostiantyn Krystian Krystyna Krzysztof Ksawery Kuba Larysa Laura
    Lech Lena Leokadia Leon Leonard Leszek Lidia Liliana Lilianna Liliia Liubov Liudmyla Liwia Lucjan Lucyna
    Luiza Maciej Magda Magdalena Maja Maksym Maksymilian Malwina Marcel Marcelina Marcin Marek Maria Marian
    Mariana Marianna Mariia Marika Mariola Mariusz Mark Marlena Marta Martyna Maryna Marzanna Marzena
    Mateusz Matylda Małgorzata Mia Michalina Michał Mieczysław Mieczysława Mikołaj Milena Mirosław Mirosława
    Miłosz Monika Mykhailo Mykola Nadia Nadiia Natalia Nataliia Natan Nazar Nela Nicole Nikodem Nikola Nina
    Norbert Oksana Olaf Oleh Oleksandr Oleksandra Oleksii Olena Olga Olha Olivia Olivier Oliwia Oliwier
    Oskar Patrycja Patryk Paula Paulina Pavlo Paweł Petro Piotr Pola Polina Przemysław Radosław Rafał Regina
    Remigiusz Renata Robert Roksana Roman Romuald Rozalia Ruslan Ryszard Róża Sabina Sandra Sara Sebastian
    Serhii Seweryn Siarhei Sofiia Sonia Stanislav Stanisław Stanisława Stefan Stefania Svitlana Sylwester
    Sylwia Szczepan Szymon Sławomir Tadeusz Tamara Taras Tatiana Teodor Teresa Tetiana Tobiasz Tomasz Tymon
    Tymoteusz Urszula Vadym Valentyna Valerii Valeriia Vasyl Veronika Viacheslav Victoria Viktor Viktoriia
    Violetta Vira Vitalii Vladyslav Volodymyr Wacław Waldemar Wanda Weronika Wiesław Wiesława Wiktor
    Wiktoria Wioleta Wioletta Witold Wojciech Władysław Władysława Włodzimierz Yana Yaroslav Yelyzaveta
    Yevhen Yevhenii Yevheniia Yuliia Yurii Zbigniew Zdzisław Zdzisława Zenon Zofia Zuzanna Zygmunt Łucja
    Łukasz Żaneta
  `],
  [240, `
    Ada Adela Adelajda Adelina Albina Aleh Aleks Aleksandr Aleksy Alena Alexandr Alexandra Alfreda Aliaksei
    Alisa Alojzy Amadeusz Amanda Ana Anastasia Anastasiya Andrea Andriy Anetta Angelina Anzhela Anzhelika
    Apolonia Ariel Arina Arnold Arsen Artsiom Augustyn Benedykt Beniamin Benjamin Bernadetta Bernarda Bianka
    Bogna Bogumił Bohdana Brajan Brunon Christian Claudia Cyprian Daniil Danyil Dariia Darya Daryna Davyd
    Denis Donata Dorian Dzianis Eduard Elena Eleonora Emanuel Emilian Emiliia Emily Emma Erwin Eryka Estera
    Eva Evelina Faustyna Felicja Feliks Florian Franciszka Fryderyk Gaja Galyna Gerard Giorgi Gizela Gustaw
    Hennadii Herbert Hieronim Hildegarda Hlib Hryhorii Hugo Ida Ihar Ilya Inez Inga Ion Irina Irmina Iuliia
    Iurii Iwo Jacob Jagna Jaśmina Jeremi Jeremiasz Jessica John Jowita Judyta Julianna Juliusz Kamilla
    Karyna Katsiaryna Kevin Kewin Kira Kiril Kiryl Klaudiusz Konstancja Konstanty Kordian Kristina Ksenia
    Kseniia Kyrylo Lara Lea Leo Leonid Leopold Lesia Lesław Lev Lidiia Lila Lilia Lilla Liudmila Longina
    Lucja Ludmiła Ludwik Ludwika Makar Maksim Marcela Marceli Marharyta Marina Mariya Marko Martin Maryia
    Maryla Marzenna Matvii Maurycy Max Maximilian Maya Melania Michael Michelle Mieszko Mikalai Mikhail
    Mikita Mila Milan Milana Mirela Mirella Mykyta Myroslav Myroslava Nataliya Natallia Nataniel Natasza
    Nathan Nazarii Nel Nelia Nicola Nicolas Nika Nikita Nikol Noemi Oktawia Oktawian Oleg Olesia Olgierd
    Olimpia Oliver Oliwer Oscar Otylia Pamela Patrick Paul Pavel Pelagia Peter Raisa Rajmund Raman Rita
    Roland Romana Romualda Rostyslav Rudolf Ruslana Ryszarda Samanta Samuel Sarah Serghei Sergii Sergiusz
    Snizhana Sofia Solomiia Sophie Stella Stepan Sviatlana Sviatoslav Sławomira Tatsiana Teodora Teodozja
    Tetyana Thomas Timur Tola Tymofii Tymur Uladzimir Uladzislau Uliana Vadzim Valentyn Valery Vanessa
    Varvara Victor Viktar Viktoria Viktoryia Vita Vitali Vladimir Vladyslava Volha Wacława Walenty Walentyna
    Waleria Wanessa Wincenty Yan Yaroslava Yauheni Yehor Yeva Yuliya Yuriy Yury Zakhar Zenobia Zenona Zhanna
    Zinaida Zlata Zoia Zoja Zoriana Zygfryd Zyta
  `],
  [420, `
    Aaron Abigail Adolf Ahmed Ahmet Aksana Ala Albin Aleksei Alesia Alessandro Alexandru Alfons Ali
    Aliaksandra Alice Alicia Aliona Amina Amir Amit Anatol Anatoli Anatoliy Andreas Andrew Andrey Andriana
    Angela Anika Anthony Antonia Antonio Ariana Arletta Aron Arsenii Arthur Aurora Berenika Bernardyna
    Bianca Bogdana Bolesława Brak|Danych Brayan Brian Carlos Carmen Carolina Caroline Christopher Constantin
    Cristian Cristina Dajana Dalia Damir Dana Danil Davit Demian Dennis Diego Dina Dionizy Dmitrii
    Dobrosława Dominic Dumitru Dżesika Edeltrauda Edgar Edwarda Edwin Ekaterina Elfryda Eliasz Eligiusz
    Elina Elizabeth Elizaveta Ella Elvira Emanuela Eric Erik Erika Erna Eulalia Fedir Feliksa Felix
    Ferdynand Florentyna Francesco Frank Gabriella Galina Ganna George Gerda Gerhard Gheorghe Ginter Gloria
    Greta Hana Hanka Hannah Helga Helmut Henadzi Henry Heorhii Herman Horst Ian Idalia Ievgen Ilia Ina Ines
    Inka Irakli Irma Irmgarda Isabella Iza Izydor Jacenty James Jana Jaromir Jarosława Jennifer Jonasz
    Jonatan Jonathan Jordan Jorge Jose Joseph Joshua Juan Józefina Kai Kanstantsin Karen Kasjan Kasper
    Katerina Kaya Kirill Klaudyna Klemens Klementyna Konstantin Korneliusz Kosma Kryspin Krystsina
    Krzysztofa Ksawier Kseniya Kyryl Larisa Lasha Lechosław Leila Leonarda Leonardo Levan Liam Liana Liliya
    Lilly Lily Lina Linda Liubomyr Livia Lizaveta Longin Luca Lucas Ludmila Luis Luka Lukas Lyubov Lyudmyla
    Maia Maiia Majka Maks Malina Mamuka Manfred Manuel Manuela Marcjanna Marco Margarita Mariam Marietta
    Mario Marita Markus Martina Matteo Matthew Maxim Mehmet Melaniia Melisa Melissa Michal Miguel Mihail
    Mira Miriam Miron Mohamed Mohammad Mohammed Muhammad Mustafa Mykhaylo Myron Nadiya Nadzeya Nadzieja
    Naomi Nastassia Natalie Nathaniel Nelly Nicholas Nicol Nicolae Nicolai Nikolas Nikoletta Nino Noah Ola
    Oleksiy Omar Orest Ostap Palina Pascal Patricia Patrycjusz Philip Platon Radomir Rafael Richard Roch
    Rodion Roger Roksolana Roma Rustam Ruta Ryan Sabrina Salomea Samir Semen Sergei Sergey Sergiu Sergiy
    Serhiy Simon Simona Sofiya Sophia Stanislau Stefaniia Svetlana Taisiia Tamila Teofil Tytus Ulyana Vadim
    Valentin Valentina Valeria Valeryia Vasile Vasili Vasylyna Vera Veranika Veronica Viachaslau Viktoriya
    Vincent Violeta Vitaliia Vitalina Vitaliy Vlada Vladislav Walerian Walter Wanesa Wawrzyniec Werner Wiera
    Wilhelm William Wirginia Wit Xavier Yahor Yanina Yaryna Yauhen Yelizaveta Yuliana Zaza Ziemowit Zoe
    Zurab Łucjan
  `],
  [650, `
    Abdul Abdullah Adel Adi Agnes Ahmad Aida Alberto Alejandro Aleksandre Alevtyna Alexandre Alexei Alexey
    Alisher Allan Alma Alon Amalia Amira Amy Anatolie Andres Andrian André Angel Angelica Angelo Ania
    Ariadna Arianna Arkadii Arman Armen Armin Arseni Artemii Artiom Artsem Aryna August Aureliusz Avtandil
    Axel Balbina Bartek Bastian Bazyli Beka Ben Benedykta Benita Benon Bernardeta Berta Blandyna Bogusz
    Bonifacy Boris Bozhena Brandon Bryan Casper Catherine Celestyna Charles Charlotte Chiara Chloe Christina
    Christine Christoph Chrystian Clara Colin Cyryl Dagna Dan Danila Danilo Darina Davide Daviti Dieter
    Dimitri Dmitri Dmitry Dmytrii Dobrawa Dobrochna Domicela Donat Dylan Dymitr Dziyana Ecaterina Eduardo
    Egor Ela Eldar Eliana Elias Elisa Elisabeth Elmira Elvin Elza Emila Emir Emmanuel Emre Ethan Eunika
    Euzebiusz Evgenii Ewald Fabio Fatima Federico Felicjan Fernando Filomena Francesca Francisco Franek
    Gabriele Gabryela Gaia Gal Gela Georg Gia Giovanni Giulia Giuseppe Gleb Gniewko Gniewomir Gocha Gracjana
    Gregory Gustavo Guy Hans Harald Hasan Heronim Hleb Hordii Iana Iaroslav Ibrahim Illya Inesa Ingeborga
    Ingrid Inha Irene Isabel Isabelle Ismail Iurie Ivo Iwan Iwonna Jack Jacqueline Jakob Jasmin Jasmina
    Jasmine Jason Javier Jean Jesika Jessika Jesus Joel Johannes Jonas Josef Juliana Julitta Jurij Justin
    Karim Karin Karl Kasandra Kaspian Katharina Katherine Klaus Koba Kornela Kristian Krzesimir Kunegunda
    Kurt Laila Layla Leanid Leonia Leontyna Lesya Lesława Letycja Levani Lew Leyla Lia Ligia Lili Lisa Liza
    Lorenzo Louis Luba Lubomir Lubomira Lucia Lucy Luisa Lukian Luna Malkhaz Marat Marc Marcelo Marcus
    Margaret Margareta Margaryta Marie Marieta Marija Marius Markiian Martha Mary Mateo Matilda Matsvei
    Matthias Matviy Maxymilian Md Melanie Michaela Michel Michele Miia Mike Mikheil Miranda Miroslav
    Miroslava Miłosława Monica Muhammed Murat Mylana Nana Nastia Natalya Natasha Nathalie Nell Nella Nelli
    Neonila Nestor Nico Niko Nikolai Nikolay Nikoleta Nikolina Nikoloz Noa Noam Noel Oleksander Oliviia Omer
    Oriana Oryna Orysia Oxana Paata Pablo Patrik Pedro Petr Petru Philipp Ramona Raul Rayan Rehina Renat
    Ricardo Roberto Robin Ronald Roxana Roy Roza Ruben Rymma Samantha Samira Santiago Selena Sergio Seweryna
    Shalva Sharon Shota Silvia Simone Sofija Stanislava Stephen Steven Susanna Swietłana Sybilla Sylvia
    Sława Taisa Tal Tamar Tatyana Tekla Teo Teofila Tereza Theo Timothy Tina Tobias Tom Tomas Tornike
    Tristan Tsimafei Valeri Valeriu Valeriy Valiantsin Valiantsina Vasil Veaceslav Veniamin Vitalie Vivien
    Vsevolod Vyacheslav Wincent Wolfgang Yael Yakiv Yaraslau Yauheniya Yegor Yevanhelina Yevgen Yosyp Yulia
    Yustyna Yusuf Yuval Zachariasz Zachary Zbyszek Zbyszko Zbysław Zoya Ömer Żaklina Żanetta
  `],
  [1000, `
    Abel Abhishek Abraham Adamina Adem Adil Adnan Adriano Adrien Agatha Ahata Aiden Aisha Ajay Akaki Akhmed
    Akim Akmal Alain Alejandra Alek Aleksandar Aleksandrs Aleksey Aleksi Alessandra Alessia Alessio
    Alexandros Alexis Alia Alika Alim Alisiia Aliya Alvaro Ali̇ Amal Amaliia Amber Ambroży Amelie Ameliia
    Amin Amiran Anar Anastasija Anat Anderson Andre Andrej Andrij Andrzelika Andżelina Anh Ani Aniceta Anida
    Anil Anja Ann Anna-Maria Anna-Mariia Anne Annette Annika Antanina Antoine Antony Anvar Anzhalika
    Apolinary Apoloniusz Aram Archil Ari Aria Arian Arif Arjun Arlena Armand Armando Arslan Artom Artyom
    Arun Asaf Ashley Ashot Asia Aslan Astrid Attila Augusta Augustyna Aurela Ava Aviv Avraham Aya Ayla Aylin
    Ayşe Azamat Azat Aziz Azizbek Ałła Badri Bahdan Bakhtiyor Bariş Barys Bazyl Beatrice Beatriz Bekzod
    Bella Benigna Bernardo Bernd Bernhard Besik Besiki Betina Bibianna Bilal Blanca Bogda Bohdanna Bożydar
    Braian Brenda Burak Camila Camilla Camille Camilo Can Carl Carla Carlo Cecilia Cesar Cezariusz Chanel
    Chantal Charlie Chen Chris Christophe Christos Cindy Claire Claudio Conrad Cornelia Cynthia Cyryla
    Daiana Daisy Damien Daniele Daniella Danielle Danny Dante Danyl Darii Dario Darius Dariya Dasha Dastin
    Dato Debora Deborah Deepak Delfina Denisa Denise Deniz Dilshod Dimitrios Dinara Dinesh Dirk Diter
    Dmitrij Dmitriy Dmitro Dobiesław Dobromir Dobromiła Dobrosław Dolores Domenico Dominique Donald Dora
    Dorin Doris Dragan Eden Edith Edvard Eitan Ekaterine Elad Elchin Eleni Elguja Eli Elif Ellie Elmar Elnur
    Elshan Elvis Eli̇f Ema Emanuele Emili Emilie Emilio Emiliya Emin Enes Engelbert Enrico Enrique Enzo Eran
    Eren Erhard Erich Ernestyna Erwina Esra Esteban Ester Esther Eufemia Eugen Eugene Eugeniu Evan Evelyn
    Evgenia Evgeniia Evgeniy Evgeniya Evgeny Evgheni Evghenii Ewaryst Eyal Fabiola Farid Farrukh Fatma
    Fati̇h Fedor Felipe Filippo Fiodar Fiodor Flora Florencia Florin Francis Franco Franz Frederick Frida
    Fryderyka Furkan Gabrielle Ganesh Gaweł Gennadii Gennadiy Georgi Georgii Georgios Gerald German Gevorg
    Ghenadie Giacomo Gianluca Giga Gil Gilbert Givi Glib Gniewosz Goga Gogita Gonzalo Goran Grace Gracja
    Gregor Grigore Grigorii Grygorii Guido Guillaume Guillermo Guram Gurami Gustav Gwidon Gökhan Günter
    Hakan Halszka Hamza Hania Harry Hassan Hector Heidi Heinrich Heinz Hektor Helen Henadz Henrik Heorhi
    Hermina Heronima Hiacynta Hieronima Hila Hilary Hilda Hipolit Hlieb Hüseyi̇n Ibragim Idan Ido Idzi
    Ievgenii Ievgeniia Ignacio Ihnat Ilan Ilana Ilgar Iliana Ilias Ilie Ilkin Ilyas Ilza Iman Imran Inessa
    Ingrida Ingryda Ioan Ioannis Ioseb Iosif Iris Irmgard Isa Isaac Islam Ismael Ismena Israel István Itamar
    Itay Iulia Iulian Iuri Ivana Ivane Iweta Iwetta Izolda Jaba Jagienka Jaime Jakhongir Jamal Jamie Janis
    January Jarema Jaroslav Jasper Jeffrey Jelena Jenny Jens Jeremy Jesica Jhon Jiří Johan Johann Johanna
    Jolenta Joni Josephine José Jozef João Judith Julie Julien Julieta Juliette Juliia Julio Julius Jun
    Jurand Jurek Justyn János Jörg Jürgen Kaia Kaj Kakha Kakhaber Kamal Kamelia Kamran Kanan Karalina Karine
    Karla Karmen Karola Kasia Katarina Kate Kathrin Katia Katrin Katrina Kayla Kelly Kemal Kenan Kenneth
    Keren Kesja Ketevan Khaled Khalid Khasan Khatuna Khvicha Kiara Kilian Kim Kiran Klavdiia Konstantinos
    Konstantyn Konstiantyn Kostyantyn Krishna Kristine Krystiana Krystyn Ksymena Kyle Kyra Lada Lali Lana
    Larissa Lars Lauren Laurencja Laurent Leah Leandro Lee Lela Leona Leonida Leonora Leticia Leu Lida
    Lidiya Liia Lika Lilian Lilli Lionel Lior Liuba Liubomyra Liubou Liya Logan Lola Lolita Lorena Louise
    Lubov Lubow Luciano Lucie Lucjanna Lucjusz Ludmyla Ludomir Ludomira Ludwina Luigi Luke Lukrecja Lusine
    Luz Lydia Lyubomyr Lyudmila Léa Maayan Madina Magnus Magomed Mahmoud Mahmut Maik Maka Makarii Makary
    Malik Malika Malkhazi Malvina Manana Manoj Mansur Manuchar Marcos Margot Marharita Mariami Marin Marine
    Marlon Marsel Martyn Marvin Maryam Maryan Maryana María Mason Massimo Mate Matei Mathias Mathieu Matias
    Mattia Matvei Matvey Mauricio Mauro Maxime Maximillian Medard Megan Merab Mert Merve Micaela Michail
    Mihaela Mihai Mija Mika Mikael Mikhailo Mikheili Mikolaj Milla Milo Miloš Mina Minh Mirona Mirza Mishel
    Miya Miłosław Modest Modesta Mohamad Moshe Muhammet Murad Musa Mykhail Nadav Nadejda Nadezhda Nadija
    Nadine Nadja Naira Nancy Narcyz Narcyza Nastazja Natalija Natanael Natia Nazariy Neil Neli Nelson Neta
    Nichita Nicoleta Nicoletta Nicolás Nijat Niklas Nikolaos Nikolozi Nikos Nila Nils Nir Nodar Noe Noelia
    Noga Nona Nonna Nora Norman Nugzar Nukri Nurlan Octavian Ofelia Ofir Oktawiusz Olek Oles Olesea Olesya
    Omri Onur Or Oren Orhan Ori Orkhan Orlando Osman Oswald Otabek Otar Otari Otolia Otto Oybek Paloma Paola
    Paolo Paskal Patrizia Pauline Paulo Pavlina Pawel Petra Petronela Philippe Phillip Pierre Pietro Prakash
    Prakseda Pylyp Rachel Rachela Rada Radek Radion Radosława Radu Radzisław Rafaela Rahul Rainer Rajan
    Rajesh Rajnard Rajnold Raju Ralf Ram Ramaz Ramazan Ramesh Rami Ramil Ramin Ran Raphael Raquel Rashad
    Rasim Ravi Raymond Rebeca Rebecca Rebeka Reinhard Reinhold Rena Renato Rene René Revaz Riccardo Rimma
    Rinat Roberta Rodica Rodrigo Romeo Romina Ron Roni Rosa Rose Rostislav Rotem Rovshan Rozaliia Rozwita
    Rufin Rut Ruth Ryhor Ryta Róbert Saba Safiya Sagar Said Sajmon Salim Salma Salome Salvatore Sambor Sami
    Samvel Sandeep Sandro Santosh Sasha Savelii Scarlett Scholastyka Scott Sean Serafin Serafina Serafym
    Serdar Sergej Sergo Serkan Shahar Shai Shamil Shay Sherzod Shira Shukhrat Siamion Siergiej Sobiesław
    Sofie Sofya Solomia Solomiya Solomon Sonja Soso Stanislaw Stanley Stefano Stela Stepaniia Stephan
    Stephanie Stsiapan Sultan Suman Sunil Suraj Suresh Susan Susana Susanne Suzanna Suzanne Sven Svyatoslav
    Switłana Syed Sylweriusz Sylwestra Sylwiusz Syntia Szarlota Sławek Tadei Tamari Tamaz Tamazi Tania Tarek
    Tariel Tatjana Tea Teimuraz Temur Temuri Tengiz Teona Thanh Theodor Theodore Thi Thiago Thị Tiago Tigran
    Tim Timo Timofei Timofey Tomer Tommy Tomás Tomáš Toni Tony Tsimur Tudor Tural Tyberiusz Tycjan Tykhon
    Tymofiy Ulrich Ulugbek Umar Umut Uri Ursula Ustym Uwe Vakhtang Valentino Valeriya Van Vanda Vanesa
    Vasilii Vasilisa Vazha Victoriia Vika Vincenzo Viola Viorel Viorica Virginia Vishnu Vital Vitaly
    Vittoria Vivian Viviana Vivienne Viyaleta Vlad Vladimer Vladislava Vladlen Vladlena Vugar Vusal Văn
    Wadim Walery Waltrauda Wasyl Wei Wera Wiaczesław Wielisława Wieńczysław Wilhelmina Wilson Wincentyna
    Winicjusz Witalij Witalis Witosław Wojtek Xawery Xenia Yair Yann Yarema Yasin Yasmin Yasmina Yasmine
    Yelena Yelizavieta Yelysei Yeseniia Yevdokiia Yevgeniy Yevheniya Yoav Yonatan Youssef Yulian Yulianna
    Yunus Yuri Yvonne Zahar Zakaria Zakharii Zara Zarina Zaur Zenaida Zenobiusz Zenovii Zeynep Zinovii
    Zlatoslava Zoran Zoryana Zosia Zurabi Zuzana Zviad Zviadi İbrahi̇m İsmai̇l Żanna
  `],
  [1700, `
    Aaliyah Abbas Abbos Abdalla Abdallah Abdel Abdelkader Abdellah Abdelrahman Abdulaziz Abdulla Abdullo
    Abdulrahman Abdumalik Abdur Abdurrahman Abhijith Abhilash Abid Abin Abram Abror Abu Abubakar Abubakr
    Achim Adalbert Adar Adarsh Adelaida Adele Adelheid Adelia Adeliia Adeline Adham Adilet Adina Aditya
    Adolfa Adolfina Adolfo Adria Adrián Aelita Afina Afrodyta Agam Agathe Agil Agnese Agus Agustin Agustina
    Agustín Aharon Ahlaia Ahnesa Ahniia Aibek Aicha Aidan Aidana Aidar Aigerim Aigul Aikaterini Aileen Ailin
    Aimee Aina Ainur Ainura Aisel Aisza Aizhan Ajith Akash Akbar Akhil Akhmad Akif Akin Akmaljon Akram Aksel
    Akshay Al Alaa Alana Alba Alban Alberta Albertyna Aldo Alec Aleko Aleksa Aleksandros Aleksej Aleksejs
    Aleksiej Alen Ales Alesya Alevtina Alexa Alexia Aleyna Aleš Alfonso Alfredo Algiment Aliaksandar Alibek
    Alida Aliesia Aliia Alijon Alik Alikhan Alin Aline Alireza Alisha Alisia Alison Alissa Aliviya Aliyah
    Aliza Allen Allison Almas Almaz Almira Almog Alodia Alois Alojza Alojzja Alp Alper Alperen Altynbek
    Alvin Alvina Alwin Alwina Alya Alyona Alyssa Amadeus Amaia Aman Amandeep Amar Amaya Amel Ameli Ameliya
    Amer Amieliia Amil Aminat Amine Amirani Ammar Amos Amr Amrit Amélia Amélie Ana|Maria Ana-Maria Anabel
    Anabella Anabelle Anahit Anais Anait Anamaria Anand Anas Anastasios Anastassiya Anastazia Anastazy
    Anatola Anatolia Anatolij Anatoliusz Anatoly Anaya Anda Anders Andi Andranik Andreea Andrejs
    Andres|Felipe Andria Andrianna Andriej Andriiana Andris Andrius Andro Andrzelina András Andrés Andy
    Andżela Aneesh Anel Anelia Aneliia Anette Anfisa Angelique Angelos Angie Angielika Anh|Tuan Anis Anisa
    Anish Anisiia Aniuta Anjali Anjela Anka Ankit Ankita Annabel Annabell Annabella Annabelle Annamaria
    Anneliese Annemarie Anneta Annie Anoop Anri Antek Antonella Antonii Antonino Antonios Antonius António
    Anu Anush Anvarjon Anwar Anya Anzelm Anzelma Anzhelina Anzor Anzori Anżela Anżelika Apollinariia April
    Ara Arabella Aras Araz Arbel Archie Archili Arda Ardian Arek Aren Areta Ariane Arie Ariela Ariella Aris
    Ariusz Ariz Arkadi Arkadia Arkadiy Arkady Arkadzi Arkhyp Arlene Armani Armina Armine Arnaldo Arnaud Arne
    Arnel Arnika Arno Arpine Arsenij Arseniusz Arseniy Arsentii Artak Artashes Artemiusz Artemiy Artsemi
    Arturo Arturs Artūras Artūrs Aruzhan Arwid Arya Aryan Arzu Arzuman Asad Asadbek Asan Asel Asen Asenata
    Asha Asher Ashish Ashok Ashraf Ashwin Asif Asiia Asilbek Asim Askar Askhat Asli Asliddin Asma Assaf
    Assel Assem Asta Astryda Asya Ata Atakan Atanas Atena Athanasios Athena Athina Audrey Audrius Augustin
    Augusto Aura Aurel Aurelian Aurelio Aurica Aurika Austin Avazbek Avi Avigail Avinash Avital Avram Avrora
    Avtandili Ayaan Ayala Ayan Ayaz Aydan Aydin Ayelet Ayesha Ayhan Aykhan Aykut Ayman Aymen Aynur Ayoub
    Aysel Ayshat Ayşegül Aza Azad Azam Azamjon Azar Azer Azim Azimjon Aziza Azizjon Azra Babak Bachana
    Bachuki Bahadir Bahar Bairam Bakhodir Bakhrom Bakhtiyar Bakur Baltazar Balázs Baptiste Bar Barak Baran
    Barbare Barbora Barnaba Barry Bart Baruch Basia Basil Bastien Batuhan Batyr Bauyrzhan Bayram Bazhena
    Beate Beatrycze Begench Bekhzod Bekir Bekzat Beki̇r Bela Belinda Bence Benedict Benedikt Benny Benoit
    Berat Berk Berkay Berke Bernadette Bernadyna Bernardetta Berthold Bertold Bertrand Besarion Beslan
    Bettina Betty Betül Beyza Bharat Bhim Bibek Bibiana Bidzina Bijay Bijaya Biju Bikash Bikram Bilel Billy
    Bimal Bin Binod Binu Birgit Biruta Bishal Bishnu Bjorn Björn Blake Blessing Bo Boaz Bobir Bobur Boburjon
    Bogdanna Bohuslav Bojan Bonawentura Bondo Bora Borislav Boryslav Borysław Botir Bozena Bradley Brahim
    Branislav Branko Brendan Brendon Brigida Brigitte Bronislav Bronislava Bruce Bruna Brunhilda Burcu
    Burhan Buse Bárbara Bülent Büşra Bi̇lal Caio Caitlin Caleb Calvin Cameron Camilo|Andres Candela Caner
    Cansu Carina Carlos|Alberto Carlos|Andres Carmel Carmela Carmelo Carmine Carol Carola Carolin Carolyn
    Carsten Casey Caspian Cassandra Cataleya Catalina Catarina Caterina Cedric Celal Celestyn Celia Celine
    Cem Cemal Cengiz Ceren Cezar Chaim Chaja Chana Chandra Chang Chantelle Chao Charlotta Chaslau Chelsea
    Cheng Chi Chingiz Chiril Chirill Chloé Christa Christiana Christiane Christof Chrystyna Cihan Ciprian
    Ciro Clarissa Claude Claudiu Claus Clemens Clément Cody Colette Collin Connor Conor Constance Corina
    Corinna Corinne Cornel Cornelis Corneliu Cornelius Cosmin Costel Craig Cristhian Cristian|Camilo
    Cristiano Cristin Csaba Cuong Cyntia Cyril Czarek Cédric Céline Cătălin Cătălina Ci̇han Dachi Dacjan
    Dafna Dafne Dagmar Dagny Daiva Dajan Daler Dali Dalibor Dalida Dalila Damaris Damazy Damiana Damiano
    Daminik Daminika Damira Damián Damla Damyr Daneliia Dani Daniiar Daniiel Danijel Daniyal Daniyar Danna
    Dany Danyila Daphne Darek Darian Dariana Darja Darko Daromiła Darosław Darren Darwin Dastan Data Daulet
    Dauren Dave Davi Davron Davronbek Davut Dawyd Dayana Dean Defne Dejan Delia Delphine Demetre Demid Demir
    Demyan Demyd Deni Deniss Denny Deni̇z Derek Derya Detlef Dev Devi Devid Dexter Dezyderiusz Dhan Diane
    Dianna Dias Didier Diego|Fernando Dietmar Dilan Dilara Dilip Dilmurod Dilnaz Dilshodbek Dima Dimitar
    Dinh Dino Dinu Diogo Dionisie Dioniza Dipak Dipendra Dipesh Ditmar Ditta Divya Diyorbek Dmitrijs
    Dobromira Dobromił Doina Dominica Dominick Donatas Dong Doniyor Doniyorbek Donna Dor Dorel Dorina Dorit
    Doron Dorothea Dorothy Doston Dostonbek Douglas Dov Dovlet Dovletgeldi Dovran Doğan Dragomir Dror Duc
    Dung Durga Dursun Dustin Duvan Duy Duygu Dušan Dvir Dymytrii Dymytro Dyonizy Dziana Dzimitry Dzina
    Dzmitryi Dzvenyslava Dániel Dávid Débora Dąbrówka Di̇lara Eberhard Ebru Ece Ecem Eda Eddy Edelgarda
    Edeltraud Edeltraut Edem Edgardo Edgars Edhar Edi Edik Edinson Edison Edita Edmond Edmunda Edna Edoardo
    Edouard Eduards Edvin Edwina Efe Efim Efraim Efrat Ege Egemen Egon Ehor Ehud Eileen Einar Einat Einav
    Eka Eko Ekrem Elaine Elbek Eldaniz Eldor Eleanor Eleanora Elen Elene Elgun Elia Elian Eliane Elidia
    Eliezer Eligia Elijah Elin Elio Eliot Elis Elisabeta Elisabetta Elise Elisei Eliso Elizabet Elizabeta
    Elizbar Elizeusz Eljan Elke Elkhan Elkin Ellen Elli Ellina Elliot Elliott Elman Elmer Elmin Elmir Elnara
    Elodie Elsa Elshad Elton Eltun Elvina Elyor Elyzaveta Elzbieta Emad Eman Emerson Emi Emile Emiliana
    Emiliano Emilija Emiliusz Emilly Emine Emmanouil Emmanuil Emrah Emzar Emzari Emi̇ne Emi̇r Emi̇rhan
    Eneasz Engin Engi̇n Enver Eray Erazm Ercan Erdal Erdem Erekle Erez Erhan Erica Erick Erin Erkan Erkin
    Erlan Ernesta Ernesto Ernst Erol Ervin Esma Esmeralda Esmira Estefania Estela Estella Estelle Eszter
    Eteri Etibar Etienne Eudokia Eufrozyna Eugenio Eunice Eustachy Euzebia Evangelina Evangeline Evangelos
    Eve Evelin Eveline Evgen Evgeni Evgenij Evghenia Evialina Eylül Eyüp Ezequiel Ezgi Ezgi̇ Eziz Ezra
    Fabiana Fabien Fabienne Fabrice Fabrizio Facundo Fadi Fahad Faig Faina Faisal Faith Fakhriddin Famil Fan
    Fanny Farah Fares Farhad Farhod Farida Faris Fariz Fariza Farkhod Faruk Fatemeh Fatih Faustyn Fazil
    Fazliddin Fedar Federica Fei Felicia Felicyta Feng Ferdinand Ferenc Ferhat Fernanda Fidan Filipe
    Filipina Filipp Filippos Finn Fiona Firas Firat Firdavs Firuz Flavia Flavio Flawia Florence Florencja
    Florentina Floriana Florianna Fortunata Fouad Frances Francisca Franciscus Franck Francois Frankie
    Franklin František Frants Franziska François Fred Freddy Frederic Frederico Frederik Fredrik Fredy Freya
    Frieda Friedrich Fritz Fryda Frédéric Fuad Fuat Furkat Fábio Félix Gabi Gabil Gabor Gabryel Gael Gaetano
    Gaga Gagik Gali Galia Galit Galya Gamze Gang Ganga Gareth Garik Gary Gasan Gaspar Gaston Gastón Gaurav
    Gavin Gaya Gayane Gayrat Gegham Gemma Genadi Genadiusz Genevieve Gennady Gennaro Geoffrey Georges
    Georgia Georgij Georgina Georgiy Georgy Geraldine Gerarda Gerardo Gerd Gerrit Gerson Gert Gertrud
    Gerwazy Ghennadi Ghennadii Gheorghi Gheorghii Ghulam Gian Giancarlo Gianfranco Gianni Gideon Gigi Gilad
    Gilberto Gili Gilles Gina Gino Giorgia Giorgio Giovanna Gisela Giselle Gita Giuliana Giuliano Giulio
    Gizella Gizem Gizo Gladys Glen Glenn Goderdzi Godwin Gogi Gohar Gokul Gonçalo Gopal Gor Gordon Gotfryd
    Govinda Graciela Graham Grant Grazyna Greg Gregorio Grigol Grigoli Grigor Grigori Grigoriy Grigory
    Gromosław Grygoriy Gryzelda Gudrun Guilherme Gulmira Gulnar Gulnara Gulnaz Gunay Gunel Gurban Gurgen
    Gurpreet Gusein Gustawa Guvanch Gvantsa Gyula György Gábor Görkem Gözde Günther Gürkan Gi̇zem Gűnter Ha
    Habib Haci Hadar Hadas Hadi Hadrian Hafiz Hagar Hagit Hai Haiane Hailey Haim Hakim Hakob Halil Hali̇l
    Hamdi Hamed Hamid Hamlet Han Hanan Hang Hani Hannelore Hany Hao Harel Hari Haris Harish Harold Harpreet
    Harrison Harsh Hartmut Harun Harutyun Harvey Hasmik Hatice Hati̇ce Hava Haya Haydar Hayk Hazel Hałyna
    Heather Hedwig Heiko Helene Heliodor Hendrik Hennadiy Henning Henri Henrieta Henrietta Henrique Henrykh
    Hermann Hermenegilda Hernan Hernán Hersz Herta Hiacenta Hicham Hien Hilal Hilaria Hildegard Himanshu
    Hiroshi Hlafira Hloriia Hnat Hoa Hoang Holger Holly Hong Horacio Horacy Hortensja Hossam Hovhannes Hoàng
    Hrazhyna Hristina Hristo Hryhoriy Hugon Hui Hulnara Humberto Hung Huong Husein Huseyin Huseyn Hussain
    Hussein Huy Hélène Hüseyin I I|Gede I|Kadek I|Komang I|Made I|Putu I|Wayan Ia Iacob Iago Iamze Ianina
    Iaroslava Iasmina Ibrokhim Ibrokhimjon Idris Iegor Ielyzaveta Ieva Ifeanyi Ignacja Ignat Igors Ihsan Iia
    Ikhtiyor Ikrom Ikromjon Ilai Ilaria Ilariia Ilarion Ilay Ildar Ilham Ilhan Ilian Iliia Ilija Iliya Ilja
    Ilkham Ilkhom Ilkhomjon Illa Illona Ilse Ilyos Imad Imam Imeda Imelda Imre Inbal Inbar India Indira
    Indra Iness Ineza Inge Ingeborg Ingo Innocent Intigam Inès Inés Inês Ioana Ioann Ioanna Iolanta Ionel
    Ionela Ionut Ionuţ Iosebi Iqbal Ira Irada Iraida Irem Irfan Irine Irit Irosław Isabela Isabell Isac
    Iskandar Isla Islom Islombek Islomjon Ismayil Ismet Ismoil Issa Issam Istvan Ita Itai Itan Itzhak
    Iuliana Iva Ivanka Ivar Ivaylo Iveta Ivetta Ivona Ivonne Ivy Iván Iwa Iwanna Iwonka Izaak Izabel Izak
    Izaura Izrael Izydora Jackson Jacobo Jacobus Jacopo Jacques Jade Jafar Jahongir Jaider Jairo Jake Jalal
    Jambul Jamil Jamila Jamshed Jamshid Jamshidbek Jane Janek Janet Janeta Janetta Janette Janice Janine
    Janisław Janka Janna Jano Janos Januariusz Jaqueline Jared Jarek Jarmila Jarogniew Jaroslava Jaroslaw
    Jasur Jasurbek Javid Javlonbek Javokhir Jay Jayden Jayson Jazmin Jean-Pierre Jeanette Jeanne Jeannette
    Jeevan Jeferson Jefferson Jegor Jeikhun Jekaterina Jekatierina Jemal Jemali Jenifer Jeremiah Jeroen
    Jerome Jerry Jesper Jesse Jessie Jesus|David Jewgienij Jeyhun Jhoan Jhon|Jairo Jhonatan Jia Jian Jie
    Jimmy Jimsher Jin Jing Jitendra Jithin Joan Joana Joanne Joao Joaquim Joaquin Joaquín Jocelyn Jochen Joe
    Joey Johana Johnny Jola Jolita Jon Jonah Jonibek Jordi Jorge|Luis Jorgos Jose|Luis Josefina Josh Joshgun
    Josue Jovan Jovana Joy Joyce Juan|Camilo Juan|Carlos Juan|David Juan|Pablo Juan|Sebastian Juana Jude
    Judit Jules Juliano Juliet Julietta Julija Julio|Cesar Julián Jumber Jumberi Junior Jurabek Juraj Jurgen
    Juri Jurii Jurijs Juris Justina Justine Juta Jutta Jyoti Ján Jérôme József Júlia Jānis Kaan Kabir Kadek
    Kadir Kadi̇r Kairat Kakhaberi Kakhramon Kaleb Kalyna Kama Kamala Kamel Kamilia Kamoliddin Kanat Kapil
    Karam Karan Karapet Kareem Karel Karena Karima Kariona Karlo Karmela Karoline Karsten Karthik Kashif
    Kasjana Kasjusz Kassandra Kataleja Katalin Katalina Katarína Kateřina Kathleen Kathryn Kathy Katie Katja
    Katya Kay Kayah Kazim Kazimir Kazymyr Keith Kelvin Ken Kenza Kerem Kerim Kerstin Keshav Ketevani Kfir
    Khachatur Khadija Khadizhat Khagani Khalida Khalil Khamzat Khatia Khava Khayal Kheda Khristina
    Khrystsina Khurshed Khurshid Khusan Khusniddin Kian Kieran Kimberley Kimberly Kingsley Kirilo Klarysa
    Kleopatra Klim Klotylda Klym Klymentii Klára Koleta Kolin Komang Komiljon Konrada Konstantina
    Konstantine Konstantyna Konul Kora Koralia Koray Kordula Korina Koryna Kostas Kostiantin Krasimir Kris
    Kristin Kristof Kristofer Kristoffer Kristopher Krisztina Krisztián Kryspian Kryspina Krystina Ksavier
    Ksawera Kudakwashe Kudzai Kuldeep Kumar Kunal Kuzma Kvitoslava Kwiryna Kylie Kyryll Kévin Kübra Ladislav
    Lado Laetitia Lajos Lala Lalita Laman Lambert Lamia Lan Larry Latika Laurence Lavinia Lawinia Lawrence
    Laxman Laxmi Lazar Lechosława Lei Leia Leidy Leif Lejla Lekso Lenka Lennart Lennox Lenny Leonel Leonidas
    Leonie Leontii Leopolda Leri Leslie Letizia Levent Levente Levi Levon Lewis Li Lian Liang Lianna Liat
    Libby Libi Lidziya Liena Lihi Lija Lilach Liliane Lilija Lilit Lilith Lilja Lillia Lillian Lilliana
    Lilyana Limor Lin Linas Ling Linh Linus Liran Liron Liubava Liubovi Liubow Liusia Liv Liviu Liwiusz
    Lizeth Lizi Long Lora Loredana Loreta Loretta Lorraine Lotar Lothar Lotta Louie Louisa Lourdes Lu Luan
    Luana Lubomiła Luc Lucian Luciana Lucien Lucila Lucio Lucjana Lucía Ludgarda Ludmyła Ludomiła Ludosława
    Ludovic Ludwig Luis|Alberto Luis|Carlos Luis|Eduardo Luis|Fernando Luiz Lukasz Lukáš Lutz Luís Lynn
    Lyubomyra László Léna Léo Léon Maciek Madan Maddox Madeleine Madeline Madhu Madison Madlen Madlena
    Madona Magali Magamed Magdalene Maggie Mahammad Mahdalyna Mahdi Mahendra Maher Mahesh Mahir Mahmud Mai
    Maikel Maira Majid Majkel Makhir Makhmud Makka Maksat Maksimilian Maksims Maksymiliana Malak Malcolm
    Malek Malena Malgorzata Malka Mamed Man Mandeep Manikandan Manish Manisha Manon Manpreet Mansurbek
    Mantas Manu Manuchari Manvel Maor Mara Marcelin Marcell Marcella Marcello Marcia Marcjan Margarete
    Margarethe Margaretta Margerita Margherita Margit Margita Margo Margota Mari Maria|Del|Carmen Marianne
    Mariano Maribel Marica Maricel Marichka Mariela Mariem Marilyn Marion Mariona Marios Marisa Marisol
    Marissa Marián Markha Markian Markiyan Markos Markéta Marlen Marlene Martika Martine Martino Martsin
    Martynian Martín Maruf Marwa Marwan Mary|Ann Marya Marysia Marżolena Masha Massimiliano Masza Matan
    Matej Mateus Matheus Mathew Mathilda Mathilde Matilde Mats Matt Matthieu Matthäus Matti Mattias Matviei
    Matvij Matwiej Matwij Matías Matúš Maura Maurice Maurizio Maximiliano Maximilien Maximus Maxwell Maxym
    May Mayra Mayya Mazlum Medina Megi Mehdi Mehmed Mei Meir Mekan Mela Melana Melani Melaniya Melchior
    Melek Melike Melina Melinda Melita Melody Melvin Meli̇ke Menachem Merabi Merav Mercedes Mercy Merdan
    Meri Meriem Meruyert Meryem Mesut Metin Meti̇n Meylis Mher Michailo Michaił Michalis Michaël Micheasz
    Michela Michell Midhun Miguel|Angel Mihailo Mihails Mihály Mikaela Mikail Mikel Mikhael Mikko Miklós
    Mikola Milada Milagros Milaniia Milen Milenia Miles Milica Miliena Millie Milosz Milton Min Mindaugas
    Mindia Ming Minh|Anh Mirabella Miran Miraslau Miraslava Mircea Mirek Mirian Mirko Mirlan Miroslaw
    Miroslawa Mirra Mirta Misha Miszel Mitchell Mitko Miła Mladen Mohan Mohit Moise Moises Mojżesz Molly
    Mona Monique Mor Moran Mordechai Morgan Moritz Morten Moses Mostafa Mounir Mourad Moustafa Mubariz
    Muhamad Muharrem Mukesh Mukhammad Mukhammadali Mukhammadjon Mukhiddin Mukhtar Munashe Murman Murodjon
    Murtaz Muslim Mustapha Muzaffar Muzaffer Mya Mychailo Mychajło Myhailo Mykhailyna Mykolai Mykoła Myrat
    Myriam Mzia Mária Mátyás Máté Mélanie Mónica Müslüm Māris Mădălina Mścisław Naama Nabi Nabil Nabin Nada
    Nadeem Nader Nadezda Nadieżda Nadim Nadin Nadina Nadir Nadya Nail Naila Naim Nam Namig Namik Nani
    Napoleon Narayan Narek Narendra Naresh Nargiz Nargiza Nariman Narin Narine Narmin Nasim Nasir Nassim
    Nastasiia Natacha Natali Natalja Natalka Nataly Natascha Natela Nathalia Nathanael Natig Natik Natnael
    Nato Natália Naum Naveen Navruz Nawojka Naya Nazarij Nazim Nazira Nazli Nebojša Neeraj Nefeli Neha
    Nellia Nellie Nelya Nemanja Nenad Neo Netta Nevo Nga Ngoc Ngọc Ni Ni|Kadek Ni|Komang Ni|Luh Ni|Wayan Nia
    Nick Nickolas Nicodem Nicolette Nicoll Nicolle Nicolo Niels Nigar Nigel Nihad Nihat Nikhil Niki Nikolaj
    Nikolaus Nikole Nikołaj Nil Nili Nilufar Nimrod Ninel Niraj Nirmal Nisha Nithin Nitin Nitzan Niv Nizami
    Nizar Nodari Nodir Nodirbek Nodirjon Noelle Nofar Nolan Noor Norberto Norma Nour Novruz Noy Noya
    Nozimjon Nugzari Nune Nuno Nur Nurali Nuray Nurbek Nuri Nuria Nuriddin Nurit Nursultan Nurul Nurzhan
    Nyasha Nykyta Octavia Octavio Odarka Oded Odeta Odetta Odiljon Odyseusz Ofek Ofer Ofri Ohad Okan Oktay
    Olav Ole Olech Oleksa Oleksij Olexandr Olexandra Olexiy Olia Olimjon Ollie Olympia Olzhas Omari Omelian
    Ondřej Onise Onufry Oresta Orfeusz Orina Orion Orit Orly Orna Ornella Oruj Oryslava Orysya Osama Osnat
    Osvaldo Osyp Oton Otton Oussama Ovidiu Owen Ozan Ozodbek Oğuz Oğuzhan Oļegs Ołena Panagiotis Panashe
    Pankaj Papuna Paraska Paraskoviia Paris Parth Parvin Parviz Parys Pasha Pasquale Patience Patric Patrice
    Patricio Patrycia Paulin Paulius Pavle Pavlos Pavlyna Pavol Pawan Peleg Penelope Peng Per Perla Petar
    Petimat Petre Petros Petrus Phoebe Phuong Pia Pieter Pikria Pilip Pinar Ping Plamen Pnina Polianna
    Polikarp Pooja Prabin Pradeep Pradip Pramod Pranav Prasad Prashant Pratik Praveen Precious Predrag Prem
    Pridon Prince Priscila Priscilla Priya Priyanka Prokhor Przemysława Putu Péter Qi Qian Qiang Qing Quang
    Quentin Rabia Rabin Rachid Radmila Radomił Radomyr Radoslav Radosz Radovan Radyslav Radzimir Radzisława
    Radzivon Rafail Rafal Raffaele Rafik Ragnar Rahela Rahim Rahman Raimund Raj Raj|Kumar Raja Rajeev
    Rajendra Rajkumar Rajmunda Rajner Rajnhard Rajnhold Rakesh Rakhman Ralph Rama Ramal Ramazi Ramila Ramina
    Ramir Ramiro Ramiz Ramon Ramzan Ramzes Ramzi Rana Randy Rani Rania Ranjit Ranjith Raphaël Rashid
    Rastsislau Rasul Rati Ratmir Rauf Ravan Ravil Ravinder Ravshan Ravshanbek Ray Raya Rayana Rayisa Raz
    Razmik Recep Reda Reginald Reiner Rejnold Remi Remy Renard Renate Renee Renisław Renisława Resul Reuben
    Reut Reuven Revazi Rey Reynaldo Reza Rezo Riana Ricky Rico Ridvan Rienat Rikardo Riley Rima Rina Rio
    Rivka Riwana Riza Rizvan Rizwan Roberts Robinson Rocco Rocio Rodel Rodika Rodolfo Roei Rohan Rohit Roi
    Roial Roin Roini Roksoliana Rolandi Rolando Rolf Rom Romain Romani Romaniia Romanna Romi Rommel Romy
    Rona Ronaldo Ronen Ronit Ronja Ronnie Ronny Rony Rosalia Rosalie Rosana Rosanna Rosario Rosemarie Roshan
    Rosie Rosita Ross Rostom Roswita Rowena Roxanna Roxanne Rozanna Rościsław Rubina Ruby Rudi Ruel Rufat
    Rufina Rui Rumbidzai Rumen Rupert Rusalina Russell Rustamjon Rustem Rusudan Rusłan Rusłana Ruvim Ruvym
    Ruzana Ruzanna Ryma Rynat Rémi Rüdiger Saad Saar Sabin Sabine Sabir Sabri Sabuhi Sacha Sachin Sadig
    Sadik Saeed Safa Safia Sagi Sahar Sahib Sahil Sai Saida Saif Saiful Sajan Sakhib Sakhil Salah Saleh
    Salem Sali Salih Sally Salman Salomon Saltanat Salvador Salwina Sali̇h Sam Samandar Samar Samat Sameer
    Samer Samet Samia Sammy Samson Samuela Samuele Samuil Samy Sana Sanan Sander Sandesh Sandip Sandrine
    Sandy Sang Sangita Sanjar Sanjarbek Sanjay Sanjeev Santa Santana Santhosh Santino Sanzhar Sapir Sarath
    Sardor Sardorbek Sargis Sarit Sarita Sarkhan Sarkis Saroj Sarra Sarvar Sarvarbek Sascha Saskia Sasza
    Satish Saturnin Saturnina Saul Saulius Saurabh Sava Savannah Saveli Savva Sawa Sayed Saša Sebastiano
    Sebastien Sebastián Seda Sedat Sefa Seimur Selen Selim Selin Selina Selma Selçuk Seli̇m Seli̇n Sema
    Semih Semion Semir Sena Serafim Serafima Serafyma Sercan Serena Serge Sergejs Sergi Sergiej Sergij
    Serguei Serhat Serhij Serik Seth Sevak Sevastian Sevda Severin Severyn Sevil Sevinj Sewer Seymur Sezer
    Shachar Shadi Shahid Shahin Shaked Shakhboz Shakhin Shakhzod Shakir Shalom Shane Shani Shankar Shannon
    Shanti Sharif Shatlyk Shaun Shavkat Shawn Sheila Shelly Sherali Sherif Sherzodbek Shimon Shir Shiri
    Shirin Shirley Shirly Shiva Shlomit Shlomo Shmagi Shmuel Shohrat Shokhrukh Shorena Shoshana Shubham
    Shuhrat Shyam Sibel Sidney Siegfried Siegmund Siemowit Sienna Sigal Sigrid Sila Silvana Silviia Silvina
    Silvio Silviya Sima Simbarashe Simeon Simion Simran Sinan Singh Sirojiddin Sita Siuzanna Sivan Skye
    Slava Slobodan Sneha Snejana Snezhana Sniazhana Snizhanna Sofi Sofian Sofiane Sofía Sol Solange Solomija
    Son Sona Sonam Soner Sonny Sonya Sopiko Sopio Soraya Sorin Soufiane Spartak Spencer Sreejith Sri
    Srinivas Stafaniya Stan Stanislas Stas Stav Stavros Stefanie Stefaniya Stefanos Steffen Stepaniya
    Stephane Steve Stiven Stoyan Stuart Stéphane Stéphanie Subash Subin Sude Sudip Sujan Sukhrob Sukhwinder
    Suleiman Suleyman Suliko Sulkhan Sumit Summer Sung Sunita Sunny Suren Surendra Surya Sushil Suzan Suzana
    Svetoslav Sviataslau Sviatoslava Svietlana Swietlana Switlana Sybila Sydney Sydonia Sylvain Sylvester
    Sylvie Sylwana Sylwin Sylwina Symeon Syriusz Syuzanna Szabolcs Szczęsny Sándor Sébastien Sérgio Süleyman
    Si̇nan Sławoj Sławosz Tabriz Tacjana Tadeusza Tadevush Tadiwanashe Tafadzwa Taha Tahir Taia Taida Taisia
    Taisiya Takashi Takhir Takudzwa Talgat Talha Tali Talia Tamer Tamerlan Tamir Tamta Tamuna Tamás Tanaka
    Tanasis Taner Tanja Tanya Tanzila Tao Tara Tarana Tarieli Tarik Tariq Tarlan Tarsylia Tatenda Tatevik
    Tatia Tayfun Taylor Ted Teddy Teia Teimur Teimurazi Telesfor Telimena Telman Temirlan Tendai Tengizi
    Terence Terry Tessa Teymur Thang Thea Theodoros Theresa Therese Thi|Huong Thi|Thuy Thibault Thierry
    Thorsten Thu Thuy Théo Tia Tiana Tibor Tien Tiffany Tihran Tikhon Timea Timofii Timofij Timofiy Timon
    Timothée Tinashe Tinatin Ting Tinotenda Toby Todor Toghrul Tokhir Tolga Toma Tomek Tomir Tomira Tomislav
    Tomisław Tommaso Tonia Torben Torsten Tosia Toyly Traian Trauta Travis Trevor Trung Tsikhan Tsira Tsotne
    Tuan Tuan|Anh Tulia Tuncay Turan Tuğba Tuğçe Tuấn Tuấn|Anh Tyler Tymofij Ucha Udo Ufuk Uktam Ula Ulada
    Uladzislava Ulan Ulana Ulf Ulryk Ulvi Uma Umberto Umesh Umid Umidjon Urban Uriel Usevalad Ushangi Usman
    Ustyna Uta Utku Uttam Uğur Uǧur Vadims Vagif Vahan Vahe Vahid Vaja Vakhtangi Valdemar Valentine Valerian
    Valeriane Valerie Valerij Valerio Vali Valter Van|Hung Vano Vardan Varlam Varun Vasif Vasileios Vasiliki
    Vasilina Vasiliy Vasily Vasylisa Vasylysa Vedat Venera Venkata Venkatesh Vepa Vepkhvia Vered Veronique
    Verónica Veselin Vesna Veysel Vicente Vicky Viera Vieronika Viet Viggo Vignesh Vijay Vikas Vikram
    Viktorija Viktors Viktória Vilena Viliam Vilma Vinay Vinh Vinicius Vinod Violet Viorika Vipin Vishal
    Vitalij Vitaliya Vito Vitold Vitor Vittorio Vitālijs Vivek Viviane Vladimeri Vladimirs Vladimír
    Vladislavs Vladyslaw Vlas Vlasta Vojtěch Volkan Volker Volodimir Volodymir Volodymyra Vusala Vytautas
    Václav Vǎn Wadym Wael Walburga Waldemara Waleed Walentina Walentyn Walerij Waleska Walid Waltraud
    Waltraut Warren Warwara Waseem Wasilis Wawrzyn Wayne Wenancjusz Wendelin Wendy Wenesa Wesley Wieczysław
    Wieńczysława Wiktoriia Wiktorija Wilfried Wiliam Wilibald Willem Willi Willy Wilma Wilmer Wincenta
    Winfried Wiola Wira Wirgiliusz Wisława Wita Witali Witosława Wiwiana Wladimir Wladyslaw Wolf Wolodymyr
    Wołodymyr Władimir Włodzimiera Włodzisław Włodzisława Xander Xaver Xavery Xawier Xiang Xiao Xin Xu Xuan
    Xuân Xymena Yaara Yacine Yadviha Yahya Yakau Yakov Yakub Yakup Yakym Yali Yam Yang Yanis Yaniv Yanna
    Yannick Yanush Yara Yaraslava Yarden Yaromyr Yaron Yaroslavna Yaroslaw Yasemin Yash Yashar Yasir Yasser
    Yassin Yassine Yasi̇n Yavuz Yağmur Yaşar Yehonatan Yehuda Yeison Yekaterina Yekateryna Yeliena Yelisei
    Yerbol Yerlan Yerzhan Yesenia Yevgenii Yevgeniia Yevgeniya Yevhena Yevhenia Yevheniy Yi Yilmaz Ying Yoel
    Yogesh Yolanda Yonathan Yong Yoram Yordan Yosef Yosyf Yotam Youcef Younes Young Yousef Yu Yuan Yue
    Yukhym Yuki Yuli Yulii Yulyana Yun Yuna Yura Yusif Yusup Yuzefa Yves Yvette Yi̇ği̇t Zaal Zachar Zack
    Zafar Zafer Zahid Zahra Zaid Zain Zainab Zaira Zakir Zalina Zamir Zamira Zarema Zauri Zbigniewa Zbisław
    Zdeněk Zeeshan Zeev Zefiryna Zehra Zeinab Zelimkhan Zelma Zenoviia Zhan Zhana Zhasmin Zhasmina Ziad Zina
    Zinoviia Zinoviy Zipora Zita Ziv Zlatan Zoey Zofiia Zohar Zoi Zoltan Zoltán Zoreslava Zorian Zoryna Zoé
    Zoë Zsolt Zsuzsanna Zukhra Zulfiia Zura Zuza Zvi Zygfryda Zygmunta Zygryda Złata Ádám Ágnes Ákos Éva
    Ðình Önder Özcan Özge Özgür Özkan Özlem Ümit Ümi̇t İlayda İrem Łarisa Łarysa Światosław Świętosława
    Şeyma Ştefan Štefan Żaklin Żywia Željko Ștefan
  `],
];

export default groups.flatMap(([meters, names]) => names.trim().split(/\s+/).map((name) => [meters, name.replaceAll('|', ' ')]));
