'use strict';
const LOCAL_LESSONS=[
  {
    "title": "Startpositie en blind typen",
    "goal": "Leer de basis: rechte houding, handen op de starttoetsen en kijken naar het scherm.",
    "instruction": "Leg je linker wijsvinger op F en je rechter wijsvinger op J. De andere vingers rusten op Q, S, D en K, L, M. Gebruik de duimen voor de spatiebalk. Kijk niet naar je toetsenbord.",
    "hint": "Linker wijsvinger: F  •  rechter wijsvinger: J  •  duimen: spatie",
    "exercises": [
      {
        "name": "Vind F en J",
        "type": "sequence",
        "text": "ff jj fj jf ff jj fj jf  fj fj jf jf  f j f j  jj ff jf fj  f j fj jf  ff jj fj jf",
        "desc": "Tik rustig afwisselend met de twee wijsvingers."
      },
      {
        "name": "Rustpositie",
        "type": "sequence",
        "text": "q s d f  j k l m  q s d f  j k l m  f j d k s l q m  q s d f j k l m  f j f j",
        "desc": "Plaats na elke reeks je vingers terug in de startpositie."
      },
      {
        "name": "Blind terugvinden",
        "type": "sequence",
        "text": "fj dk sl qm  jf kd ls mq  ff jj dd kk ss ll qq mm  fj dk sl qm  q m s l d k f j",
        "desc": "Raak de toetsen aan zonder eerst te kijken; controleer pas achteraf."
      },
      {
        "name": "Mini-check",
        "type": "sequence",
        "text": "q s d f j k l m  f d s q m l k j  fj dk sl qm  q m s l d k f j  q s d f j k l m",
        "desc": "Typ de reeks zo nauwkeurig mogelijk Typ de volledige reeks."
      }
    ]
  },
  {
    "title": "De linkerhand",
    "goal": "Automatiseer Q/A/W, Z/S/X, E/D/C en R/T/F/G/V/B met de juiste vinger.",
    "instruction": "Werk van links naar rechts. De linker wijsvinger neemt meerdere toetsen op zich. Laat je pols ontspannen en beweeg vooral vanuit de vingers.",
    "hint": "Q/A/W = pink • S/Z/X = ring • D/E/C = middel • F/R/T/G/V/B = wijs",
    "exercises": [
      {
        "name": "Linker basis",
        "type": "sequence",
        "text": "qq ss dd ff gg  q s d f g  gfdsq  q s d f g  ff gg ff gg  q s d f g gfdsq",
        "desc": "Oefen eerst korte bewegingen en keer steeds terug naar de basis."
      },
      {
        "name": "Kruisen",
        "type": "sequence",
        "text": "qa qw  sz sx  de dc  fr ft fg fv fb  qa qw sz sx de dc fr ft fg fv fb",
        "desc": "Spring rustig tussen toetsen van dezelfde hand."
      },
      {
        "name": "Lettermix",
        "type": "sequence",
        "text": "q a w q a w  s z x s z x  d e c d e c  f r t g v b  q a w s z x d e c f r t g v b",
        "desc": "Typ de letters zonder naar het toetsenbord te kijken."
      },
      {
        "name": "Linker woorden",
        "type": "sequence",
        "text": "qw az sx de dc fr ft fg fv  qa wz sx ed cv bt  q s d f g  q a w s z x d e c r t f g v b",
        "desc": "Nu worden de bewegingen langer. Nauwkeurigheid blijft belangrijk."
      }
    ]
  },
  {
    "title": "De rechterhand",
    "goal": "Automatiseer Y/U/H/J/N/B, I/K, O/L en P/M met de juiste vinger.",
    "instruction": "Houd je rechter wijsvinger als anker op J. De andere vingers bewegen naar hun eigen toetsen en keren terug.",
    "hint": "Y/U/H/J/N/B = wijs • I/K = middel • O/L = ring • P/M = pink",
    "exercises": [
      {
        "name": "Rechter basis",
        "type": "sequence",
        "text": "jj hh nn  kk ii  ll oo  mm pp  j h n j h n  k i k i  l o l o  m p m p",
        "desc": "Start met de basis en breid stap voor stap uit."
      },
      {
        "name": "Boven en onder",
        "type": "sequence",
        "text": "jh jn ju jy  ki ik  lo ol  mp pm  jh jn ju jy  ki lo mp  j k l m  m l k j",
        "desc": "Beweeg één vinger per keer en blijf ontspannen."
      },
      {
        "name": "Lettermix",
        "type": "sequence",
        "text": "j h n y u  k i  l o  m p  j h n y u  k i l o m p  j k l m m l k j",
        "desc": "Typ alle rechterhandletters zonder te kijken."
      },
      {
        "name": "Rechter woorden",
        "type": "sequence",
        "text": "ju jy jh jn  ki ik  lo ol  mp pm  uj yj hj nj  ik ki ol lo pm mp  j k l m",
        "desc": "Typ eenvoudige woorden met vooral rechterhandletters."
      }
    ]
  },
  {
    "title": "Thuisrij automatiseren",
    "goal": "Maak QSDF en JKLM tot een automatische startpositie en combineer beide handen.",
    "instruction": "Na elke aanslag keren de vingers terug naar hun startpositie. F en J zijn je ankerpunten.",
    "hint": "Linker hand: QSDF • rechter hand: JKLM • duimen: spatie",
    "exercises": [
      {
        "name": "Spiegelen",
        "type": "sequence",
        "text": "q s d f  j k l m  q s d f  j k l m  fd sq jk lm  q s d f  j k l m",
        "desc": "Typ links en rechts als spiegelbeelden."
      },
      {
        "name": "Ritme",
        "type": "sequence",
        "text": "fj fj dk dk sl sl qm qm  jf jf kd kd ls ls mq mq  fj dk sl qm  jf kd ls mq",
        "desc": "Typ in een rustig gelijkmatig ritme."
      },
      {
        "name": "Combineren",
        "type": "sequence",
        "text": "q m s l d k f j  j f k d l s m q  q s d f j k l m  m l k j f d s q",
        "desc": "Voeg spaties toe en blijf naar het scherm kijken."
      },
      {
        "name": "Automatisering",
        "type": "sequence",
        "text": "fj dk sl qm  qm sl dk fj  q s d f j k l m  fj dk sl qm  qm sl dk fj",
        "desc": "Typ de volledige reeks. Probeer zo nauwkeurig mogelijk te blijven."
      }
    ]
  },
  {
    "title": "Bovenrij",
    "goal": "Leer de bovenste rij van het Belgische AZERTY-klavier: AZERTYUIOP.",
    "instruction": "Oefen de bovenste letterrij. Gebruik opnieuw de juiste vinger vanuit de startpositie. Kijk niet naar de toetsen.",
    "hint": "AZERTY-bovenrij: A Z E R T Y U I O P",
    "exercises": [
      {
        "name": "Bovenrij links",
        "type": "sequence",
        "text": "aa zz ee rr tt  aa zz ee rr tt  a z e r t  t r e z a  a z e r t",
        "desc": "Oefen links boven de thuisrij."
      },
      {
        "name": "Bovenrij rechts",
        "type": "sequence",
        "text": "yy uu ii oo pp  yy uu ii oo pp  y u i o p  p o i u y  y u i o p",
        "desc": "Oefen rechts boven de thuisrij."
      },
      {
        "name": "Bovenrij mix",
        "type": "sequence",
        "text": "azerty uiop  poiuy treza  a y z u e i r o t p  azerty uiop  poiuy treza",
        "desc": "Mix de hele bovenrij."
      },
      {
        "name": "Bovenrij woorden",
        "type": "sequence",
        "text": "zeer puur type water  zeep taart zuur  eerst eruit route  water type zeer puur",
        "desc": "Combineer bovenrij en thuisrij."
      }
    ]
  },
  {
    "title": "Onderste rij",
    "goal": "Leer de onderste letterrij: W X C V B N en combinaties met de andere rijen.",
    "instruction": "Beweeg de vingers licht naar beneden en keer terug. Gebruik vooral de wijsvingers voor V/B/N wanneer dat nodig is.",
    "hint": "Onderste rij: W X C V B N • let op de juiste vinger",
    "exercises": [
      {
        "name": "Onderste rij",
        "type": "sequence",
        "text": "ww xx cc vv bb nn  w x c v b n  n b v c x w  w x c v b n",
        "desc": "Leer de bewegingen afzonderlijk."
      },
      {
        "name": "Links onder",
        "type": "sequence",
        "text": "qw sx dc fv gb jn  qw sx dc fv gb jn  wq xs cd vf bg nj  qw sx dc fv gb jn",
        "desc": "Combineer onderste rij met de linkerhand."
      },
      {
        "name": "Rechts onder",
        "type": "sequence",
        "text": "wa wx xc cv vb bn  nw bv cx xw  wa wx xc cv vb bn  w x c v b n",
        "desc": "Combineer onderste rij met de rechterhand."
      },
      {
        "name": "Alle rijen",
        "type": "sequence",
        "text": "was ben vak boom  want fijn nieuw  boek school wonen  was ben vak boom",
        "desc": "Typ woorden over verschillende rijen."
      }
    ]
  },
  {
    "title": "Shift en hoofdletters",
    "goal": "Leer hoofdletters typen met de tegenoverliggende shift-toets.",
    "instruction": "Een hoofdletter maak je met Shift + letter. Gebruik bij voorkeur de shift-toets aan de andere kant van de letter.",
    "hint": "Linker letter → rechter Shift • rechter letter → linker Shift",
    "exercises": [
      {
        "name": "Shift per hand",
        "type": "sequence",
        "text": "Qq Ss Dd Ff  Jj Kk Ll Mm  Qq Ss Dd Ff  Jj Kk Ll Mm",
        "desc": "Oefen het combineren van Shift en letter."
      },
      {
        "name": "Hoofdletterwoorden",
        "type": "sequence",
        "text": "Tielt Regina Pacis  School Typen  Tielt Regina Pacis  School Typen",
        "desc": "Let op dat je Shift ingedrukt houdt tot de letter is getypt."
      },
      {
        "name": "Zinnen",
        "type": "sequence",
        "text": "Ik oefen elke dag. Mijn vingers vinden de toetsen. Ik blijf naar het scherm kijken.",
        "desc": "Hoofdletters en punten combineren."
      },
      {
        "name": "Controle",
        "type": "sequence",
        "text": "Vandaag typ ik rustig. Ik kijk naar het scherm. Morgen probeer ik het opnieuw.",
        "desc": "Typ de volledige tekst met extra aandacht voor Shift."
      }
    ]
  },
  {
    "title": "Woorden typen",
    "goal": "Verbind afzonderlijke toetsbewegingen tot vloeiende woorden.",
    "instruction": "Kijk naar het scherm. Spreek het woord eventueel zachtjes mee. Probeer niet elke toets bewust te zoeken.",
    "hint": "Doel: vloeiende bewegingen, weinig pauzes, weinig fouten",
    "exercises": [
      {
        "name": "Korte woorden",
        "type": "sequence",
        "text": "ik jij wij zij  jas dak klas boek  huis fiets tafel stoel  ik jij wij zij",
        "desc": "Typ korte, herkenbare woorden."
      },
      {
        "name": "Schoolwoorden",
        "type": "sequence",
        "text": "school leerling les lokaal  pen schrift boek computer  school leerling les lokaal",
        "desc": "Woorden die je op school gebruikt."
      },
      {
        "name": "Lange woorden",
        "type": "sequence",
        "text": "oefening toetsenbord nauwkeurig  vingers pauze vooruitgang  oefening toetsenbord nauwkeurig",
        "desc": "Blijf rustig bij langere woorden."
      },
      {
        "name": "Woordreeks",
        "type": "sequence",
        "text": "leren typen oefenen  rustig nauwkeurig verder  thuis school opnieuw  leren typen oefenen",
        "desc": "Typ de volledige reeks. Kijk niet naar de toetsen."
      }
    ]
  },
  {
    "title": "Zinnen en teksten",
    "goal": "Typ volledige zinnen met spaties, hoofdletters en leestekens.",
    "instruction": "Lees eerst de hele zin. Typ daarna in een rustig ritme. Een fout is geen probleem: corrigeer rustig en ga verder.",
    "hint": "Kijk naar het scherm • blijf ademen • geen haast",
    "exercises": [
      {
        "name": "Korte zin",
        "type": "sequence",
        "text": "Ik leer blind typen. Ik kijk naar het scherm. Mijn vingers blijven op de starttoetsen.",
        "desc": "Focus op hoofdletter, spatie en punt."
      },
      {
        "name": "Twee zinnen",
        "type": "sequence",
        "text": "Op school oefen ik elke week. Thuis typ ik ook een paar minuten per dag.",
        "desc": "Typ twee zinnen zonder naar je toetsenbord te kijken."
      },
      {
        "name": "Schoolzin",
        "type": "sequence",
        "text": "Ik lees eerst de zin. Daarna typ ik rustig verder. Een fout verbeter ik zonder haast.",
        "desc": "Let op het ritme van een echte schoolzin."
      },
      {
        "name": "Kleine tekst",
        "type": "sequence",
        "text": "Vandaag lukte het iets beter. Ik blijf regelmatig oefenen en geef mezelf de tijd om te leren.",
        "desc": "Typ de volledige reeks. Nauwkeurigheid gaat voor snelheid."
      }
    ]
  },
  {
    "title": "Snelheid en nauwkeurigheid",
    "goal": "Gebruik je nieuwe vaardigheid efficiënt: eerst foutarm, daarna sneller.",
    "instruction": "Kies een tempo dat je controleert. Probeer je foutenpercentage laag te houden en verhoog daarna stap voor stap je snelheid.",
    "hint": "Eerst nauwkeurig → daarna sneller → uiteindelijk automatisch",
    "exercises": [
      {
        "name": "Nauwkeurigheid",
        "type": "sequence",
        "text": "Ik typ eerst nauwkeurig en daarna iets sneller. Mijn ogen blijven op het scherm gericht.",
        "desc": "Typ de volledige tekst met focus op minder fouten."
      },
      {
        "name": "Tempo",
        "type": "sequence",
        "text": "Elke week oefen ik op school en thuis. Door herhaling vinden mijn vingers de toetsen sneller.",
        "desc": "Typ de volledige tekst in een rustig, vloeiend ritme."
      },
      {
        "name": "Testtraining",
        "type": "sequence",
        "text": "Ik lees de tekst eerst aandachtig. Daarna typ ik met tien vingers en verbeter ik fouten rustig.",
        "desc": "Typ de volledige reeks. op een officiële test."
      },
      {
        "name": "Diplomaproef",
        "type": "sequence",
        "text": "Goed typen groeit door korte oefeningen. Ik ben trots op mijn vooruitgang en blijf oefenen.",
        "desc": "Laatste oefening voor je officiële test."
      }
    ]
  }
];
const LOCAL_TEXTS=[
  {
    "id": "game-coop",
    "level": "easy",
    "title": "Een level samen",
    "category": "jongeren",
    "text": "Het nieuwe level lijkt eerst onmogelijk. Noor leest de kaart en Milan zoekt een veilige route. Ze spreken af om rustig te blijven als een poging mislukt. Na drie keer oefenen vinden ze de sleutel achter een verborgen deur. Samen spelen werkt beter dan zomaar op alle knoppen drukken. Aan het einde vieren ze hun kleine overwinning."
  },
  {
    "id": "fiets-route",
    "level": "easy",
    "title": "De fietsroute",
    "category": "jongeren",
    "text": "Na school fietsen drie vrienden naar het park. Ze kiezen een route met rustige straten en stoppen even bij de bakker. Onderweg vertelt iemand over een leuk filmpje dat hij heeft gemaakt. Bij het park zetten ze hun fiets op slot. Ze hebben geen strak plan nodig: buiten zijn en samen praten is al genoeg voor een fijne middag."
  },
  {
    "id": "muziek-lijst",
    "level": "easy",
    "title": "Een nieuwe afspeellijst",
    "category": "jongeren",
    "text": "Tijdens het opruimen maakt Amira een nieuwe afspeellijst. Ze kiest eerst rustige nummers en daarna muziek met meer energie. Haar broer mag ook een lied toevoegen, maar ze spreken af om het volume niet te hoog te zetten. De kamer is nog niet helemaal netjes als het laatste nummer start. Toch is er genoeg gedaan om tevreden te zijn."
  },
  {
    "id": "school-project",
    "level": "easy",
    "title": "Een project in de klas",
    "category": "jongeren",
    "text": "In de klas bouwt een groepje een kleine stad van karton. De ene leerling tekent huizen, de andere maakt een park en een derde bedenkt een buslijn. Ze testen of de straten breed genoeg zijn voor alle voertuigen. Het plan verandert een paar keer. Dat vinden ze prima, want samen iets verbeteren hoort bij een goed project."
  },
  {
    "id": "sport-pauze",
    "level": "easy",
    "title": "Pauze op het plein",
    "category": "jongeren",
    "text": "Tijdens de middagpauze speelt een groepje basketbal. Niet iedereen kent de regels even goed, dus ze spreken eerst eenvoudige afspraken af. De bal rolt soms weg en niemand scoort meteen. Toch blijft het spel leuk omdat iedereen kan meedoen. Na de pauze drinken ze water en gaan ze op tijd terug naar de les."
  },
  {
    "id": "boek-ruil",
    "level": "easy",
    "title": "De boekenruil",
    "category": "jongeren",
    "text": "In de schoolbib ligt een tafel met boeken die leerlingen mogen ruilen. Lotte brengt een stripverhaal mee en neemt een boek over een verre reis. Ze leest de eerste bladzijde terwijl ze op de bus wacht. De volgende week wil ze vertellen of het verhaal haar verraste. Een boek kiezen hoeft niet moeilijk te zijn: nieuwsgierigheid is een goed begin."
  },
  {
    "id": "foto-wandeling",
    "level": "easy",
    "title": "Foto op straat",
    "category": "jongeren",
    "text": "Op weg naar huis ziet Elias een regenboog tussen twee gebouwen. Hij maakt een foto, maar let eerst op het verkeer. Later toont hij de foto aan zijn vrienden. Ze merken allemaal een ander detail op: een fiets, een vogel en een raam dat glanst. Dezelfde plek kan er voor iedereen net iets anders uitzien."
  },
  {
    "id": "news-online",
    "level": "easy",
    "title": "Nieuws: veilig online",
    "category": "actualiteit",
    "asOf": "17 september 2026",
    "source": "https://commission.europa.eu/news-and-media/news/eu-kids-act-helping-children-navigate-safer-online-world-2026-09-17_en",
    "text": "Op 17 september 2026 stelde de Europese Commissie een plan voor om kinderen en jongeren online beter te beschermen. Het voorstel gaat onder meer over sociale media, games en filmpjes. Ook functies die mensen lang laten blijven kijken, komen aan bod. Het is nog een voorstel: het Europees Parlement en de lidstaten moeten de regels eerst bespreken."
  },
  {
    "id": "game-design",
    "level": "medium",
    "title": "Achter de game",
    "category": "jongeren",
    "text": "Een game ziet er pas eenvoudig uit wanneer veel mensen er lang aan hebben gewerkt. Iemand bedenkt het verhaal, een ander ontwerpt de muziek en programmeurs bouwen de spelregels. Daarna testen spelers waar het nog fout loopt. Een springbeweging die te laat reageert, kan een level frustrerend maken. Door feedback te verzamelen wordt het spel stap voor stap beter."
  },
  {
    "id": "podcast",
    "level": "medium",
    "title": "De schoolpodcast",
    "category": "jongeren",
    "text": "Vier leerlingen nemen een korte podcast op over hobby’s na school. Ze verdelen de taken: vragen schrijven, geluid controleren, spreken en monteren. Tijdens de eerste opname klinkt de microfoon veel te stil. Ze proberen opnieuw en laten elkaar rustig uitspreken. Uiteindelijk duurt het gesprek maar vijf minuten, maar er zit een hele middag voorbereiding achter."
  },
  {
    "id": "robot",
    "level": "medium",
    "title": "Een kleine robot",
    "category": "jongeren",
    "text": "Bij een workshop krijgt elk team dezelfde kleine robot. Het doel is eenvoudig: rijd langs drie vakken zonder de rand te raken. De eerste code werkt niet, want een wiel draait de verkeerde kant op. Het team leest de stappen opnieuw, past één regel aan en test nog eens. Een fout is hier geen ramp, maar nuttige informatie voor de volgende poging."
  },
  {
    "id": "klimaat",
    "level": "medium",
    "title": "Groene speelplaats",
    "category": "jongeren",
    "text": "Op een warme dag is het verschil goed te voelen. Onder een boom blijft het koeler dan op een plein vol stenen. Leerlingen tekenen daarom een plan met meer schaduw, planten en een plek om regenwater op te vangen. Ze vragen ook welke ruimte nodig blijft om te spelen. Hun voorstel laat zien dat een goed idee rekening houdt met verschillende wensen."
  },
  {
    "id": "koken",
    "level": "medium",
    "title": "Koken voor vrienden",
    "category": "jongeren",
    "text": "Voor een filmavond spreekt een groep vrienden af dat iedereen iets kleins meebrengt. De een maakt wraps, de ander snijdt groenten en iemand zorgt voor water en fruit. Ze controleren vooraf of iemand een allergie heeft. Wanneer de oven langer nodig heeft dan verwacht, beginnen ze gewoon iets later aan de film. Het belangrijkste is dat iedereen zich welkom voelt."
  },
  {
    "id": "sport-team",
    "level": "medium",
    "title": "Een team dat luistert",
    "category": "jongeren",
    "text": "Een team wint niet door alleen de snelste speler te volgen. Tijdens de training merkt de coach dat sommige leerlingen weinig aan de bal komen. Ze veranderen de regels zodat iedereen een kans krijgt om een aanval te starten. Het spel wordt meteen verrassender. De spelers ontdekken dat goed samenwerken ook betekent dat je elkaar ruimte geeft."
  },
  {
    "id": "news-storms",
    "level": "medium",
    "title": "Nieuws: herstel na stormen",
    "category": "actualiteit",
    "asOf": "17 september 2026",
    "source": "https://ec.europa.eu/commission/presscorner/detail/en/ip_26_1890",
    "text": "In september 2026 stelde de Europese Commissie voor om vier landen te steunen na zware stormen en overstromingen. Portugal, Spanje, Italië en Malta zouden samen 489 miljoen euro kunnen krijgen. Het voorstel gaat over het herstellen van wegen en belangrijke diensten. Het geld is op dit moment nog voorgesteld; de tekst zegt dus niet dat het al is uitbetaald."
  },
  {
    "id": "news-eu",
    "level": "medium",
    "title": "Nieuws: plannen voor Europa",
    "category": "actualiteit",
    "asOf": "16 september 2026",
    "source": "https://ec.europa.eu/commission/presscorner/detail/en/speech_26_1868",
    "text": "Op 16 september 2026 gaf de voorzitter van de Europese Commissie een toespraak over plannen voor Europa. Onderwerpen waren werk, veiligheid, klimaat en de democratie. Zulke plannen hebben invloed op grote keuzes, maar worden niet op één dag werkelijkheid. Bij een nieuwsbericht is het daarom slim om te kijken of iets al besloten is of nog wordt voorgesteld."
  },
  {
    "id": "film-making",
    "level": "challenge",
    "title": "Een film in één weekend",
    "category": "jongeren",
    "text": "Een vriendengroep wil in één weekend een korte film maken. Ze kiezen een eenvoudig verhaal dat op één locatie kan worden opgenomen. Toch moeten ze letten op licht, geluid, toestemming en de volgorde van de scènes. Bij de montage ontdekken ze dat een kleine pauze tussen twee beelden het verhaal duidelijker maakt. De film hoeft niet perfect te zijn om iets te leren."
  },
  {
    "id": "ai-check",
    "level": "challenge",
    "title": "Een antwoord controleren",
    "category": "jongeren",
    "text": "Voor een presentatie vraagt een leerling een digitaal hulpmiddel om ideeën. Het antwoord klinkt zeker, maar een datum blijkt niet te kloppen. Daarom vergelijkt de groep de informatie met twee betrouwbare bronnen. Ze schrijven daarna hun eigen uitleg in woorden die ze begrijpen. Een hulpmiddel kan tijd besparen, maar kritisch lezen en zelf nadenken blijven belangrijk."
  },
  {
    "id": "social-media",
    "level": "challenge",
    "title": "De foto in de groepschat",
    "category": "jongeren",
    "text": "Na een uitstap verschijnt een grappige foto in een groepschat. Niet iedereen op de foto vindt het leuk dat anderen hem doorsturen. De leerlingen verwijderen de foto en vragen voortaan eerst toestemming. Online delen gaat snel; een bericht terughalen is veel moeilijker. Even stoppen voor je op verzenden drukt, is soms de verstandigste keuze."
  },
  {
    "id": "concert",
    "level": "challenge",
    "title": "Achter het podium",
    "category": "jongeren",
    "text": "Bij een klein concert ziet het publiek alleen de artiesten, maar achter het podium werkt een heel team. Iemand controleert kabels, iemand zorgt voor licht en iemand houdt de planning bij. Wanneer een microfoon uitvalt, blijft de groep rustig en zoekt ze samen naar een oplossing. Pas na de laatste noot begint het opruimen. Ook dat hoort bij een geslaagde avond."
  },
  {
    "id": "future-city",
    "level": "challenge",
    "title": "De stad van morgen",
    "category": "jongeren",
    "text": "Stel je een stad voor waarin kinderen veilig kunnen fietsen en de bus op tijd komt. Bedenk ook plekken voor bomen, sport en ontmoeting. Een slim ontwerp maakt ruimte voor mensen die anders reizen of zich moeilijker verplaatsen. In een klasgesprek blijken de plannen heel verschillend. Juist daardoor ontdekken leerlingen welke vragen ze nog moeten onderzoeken."
  },
  {
    "id": "science-fair",
    "level": "challenge",
    "title": "Een proef voor de wetenschapsmarkt",
    "category": "jongeren",
    "text": "Een groep onderzoekt welke stof water het snelst opneemt. Ze gebruiken gelijke hoeveelheden water en meten de tijd met dezelfde klok. De eerste uitkomst lijkt vreemd, dus herhalen ze de proef. Daarna schrijven ze niet alleen op wat er goed ging, maar ook wat onzeker bleef. Bij onderzoek is een eerlijke uitleg waardevoller dan een spectaculair resultaat."
  },
  {
    "id": "news-privacy",
    "level": "challenge",
    "title": "Nieuws: ontwerp van apps",
    "category": "actualiteit",
    "asOf": "17 september 2026",
    "source": "https://commission.europa.eu/news-and-media/news/eu-kids-act-helping-children-navigate-safer-online-world-2026-09-17_en",
    "text": "In het voorstel voor de EU KIDS Act van september 2026 staan ook ideeën over de manier waarop apps worden ontworpen. Meldingen tijdens de nacht, eindeloos scrollen en onverwachte berichten van onbekenden krijgen aandacht. Het doel is dat jongeren meer controle houden. Het gaat om voorgestelde regels; pas na overleg kan duidelijk worden welke regels uiteindelijk gelden."
  },
  {
    "id": "news-climate",
    "level": "challenge",
    "title": "Nieuws: water en herstel",
    "category": "actualiteit",
    "asOf": "17 september 2026",
    "source": "https://european-union.europa.eu/index_en",
    "text": "De Europese Commissie schreef op 17 september 2026 over hulp na overstromingen in Zuid-Europa. De voorgestelde steun is bedoeld voor herstel van onder meer vervoer en noodzakelijke diensten. Dat nieuws toont dat een storm nog gevolgen kan hebben lang nadat het water weg is. Bij het lezen van bedragen en plannen is het belangrijk om goed te onderscheiden tussen een voorstel en een besluit."
  },
  {
    "id": "esports",
    "level": "challenge",
    "title": "Training voor een toernooi",
    "category": "jongeren",
    "text": "Voor een klein game-toernooi oefenen vijf vrienden niet alleen snelle reacties. Ze bespreken ook wie welke taak krijgt, hoe ze elkaar korte aanwijzingen geven en wanneer ze een pauze nemen. Als een wedstrijd verloren gaat, kijken ze samen terug op één moment dat beter kon. Op die manier blijft het oefenen leuk en wordt het team steeds duidelijker in zijn afspraken."
  },
  {
    "id": "museum",
    "level": "medium",
    "title": "Een museum met een missie",
    "category": "jongeren",
    "text": "Tijdens een museumbezoek krijgen leerlingen de opdracht om één voorwerp te kiezen dat hen verrast. De keuze loopt uiteen van een oude camera tot een model van een trein. Iedereen schrijft drie vragen op, zonder meteen op het internet te zoeken. Pas later vergelijken ze hun ideeën met de uitleg van het museum. Zo merken ze hoeveel je kunt ontdekken door goed te kijken."
  }
];
const LOCAL_KEY='rpt_10vingers_lokaal_v1';
const LOCAL_USER_KEY='rpt_10vingers_actieve_leerling';
const localTextById=new Map(LOCAL_TEXTS.map(t=>[t.id,t]));
const localUid=()=>crypto.randomUUID?.()||Date.now().toString(36)+Math.random().toString(36).slice(2);
const localNow=()=>new Date().toISOString();
function localEmpty(){return {version:1,users:[],attempts:[],tests:[],progress:[],rotation:{},testRuns:[]}}
function localLoad(){try{const value=JSON.parse(localStorage.getItem(LOCAL_KEY)||'null');return value?.version===1?value:localEmpty()}catch{return localEmpty()}}
function localSave(data){localStorage.setItem(LOCAL_KEY,JSON.stringify(data))}
async function localHash(value){const bytes=new TextEncoder().encode(value);return [...new Uint8Array(await crypto.subtle.digest('SHA-256',bytes))].map(b=>b.toString(16).padStart(2,'0')).join('')}
function localError(message,status=400){const error=new Error(message);error.status=status;throw error}
function localCurrent(data){const id=localStorage.getItem(LOCAL_USER_KEY);return data.users.find(u=>u.id===id)||null}
function localPerson(u){return u&&{id:u.id,role:'student',name:u.name,username:u.username,className:u.className,schoolYear:u.schoolYear,createdAt:u.createdAt}}
function localAssessment(data,userId){const test=data.tests.filter(t=>t.studentId===userId).sort((a,b)=>b.date.localeCompare(a.date))[0];const settings={minCpm:180,maxPct:5};if(!test)return {status:'test_nodig',message:'Leg eerst een typetest af om je voortgang te beoordelen.',settings};const reasons=[];if(test.cpm<settings.minCpm)reasons.push(`snelheid: ${test.cpm} van ${settings.minCpm} tekens per minuut`);if(test.pct>settings.maxPct)reasons.push(`fouten: ${test.pct.toFixed(1)}% bij maximaal ${settings.maxPct}%`);return {status:reasons.length?'verder_oefenen':'klaar_voor_diploma',message:reasons.length?'Verder oefenen op '+reasons.join(' en ')+'.':'Je laatste test voldoet aan beide ingestelde grenzen.',settings,lastTest:test}}
function localDashboard(data,user){return {student:localPerson(user),attempts:data.attempts.filter(a=>a.studentId===user.id).sort((a,b)=>b.createdAt.localeCompare(a.createdAt)).slice(0,500),tests:data.tests.filter(t=>t.studentId===user.id).sort((a,b)=>b.date.localeCompare(a.date)),progress:data.progress.filter(p=>p.studentId===user.id).map(p=>({lesson_index:p.lessonIndex,exercise_index:p.exerciseIndex})),assessment:localAssessment(data,user.id)}}
function localAttempt(data,user,{kind,title,location,target,typed,seconds,errorEvents,complete,detail}){if(!['school','thuis'].includes(location))localError('Kies school of thuis.');if(typeof typed!=='string'||typed.length>target.length||!Number.isInteger(seconds)||seconds<1)localError('Ongeldige poging.');const mismatch=[...typed].reduce((n,c,i)=>n+(c!==target[i]),0),events=Array.isArray(errorEvents)?errorEvents.filter(e=>Number.isInteger(e.position)&&e.position>0&&e.position<=target.length&&typeof e.actual==='string').slice(0,2000):[];const errors=Math.max(mismatch,events.length),chars=typed.length,pct=chars+errors?Math.round(errors/(chars+errors)*1000)/10:0,cpm=Math.round(chars*60/seconds);const attempt={id:localUid(),studentId:user.id,kind,title,location,seconds,chars,errors,pct,cpm,complete:!!complete,createdAt:localNow(),detail:{...detail,errorEvents:events.map(e=>({position:e.position,expected:target[e.position-1],actual:e.actual}))}};data.attempts.push(attempt);return attempt}
function localPick(data,user,key,pool){let list=data.rotation[user.id+':'+key]||[];if(!list.length)list=pool.map(t=>t.id).sort(()=>Math.random()-.5);const previous=data.rotation[user.id+':'+key+':last'];if(list[0]===previous&&list.length>1)[list[0],list[1]]=[list[1],list[0]];const first=list.shift();data.rotation[user.id+':'+key]=list;data.rotation[user.id+':'+key+':last']=first;return first}
async function localRequest(url,method='GET',payload){const data=localLoad(),user=localCurrent(data),route=url.split('?')[0];
 if(route==='/api/microsoft/config')return {enabled:false};
 if(route==='/api/me')return {user:localPerson(user)};
 if(route==='/api/register'&&method==='POST'){const username=String(payload.username||'').trim().toLowerCase(),name=String(payload.name||'').trim(),className=String(payload.className||'').trim(),schoolYear=String(payload.schoolYear||'').trim(),password=String(payload.password||'');if(payload.role!=='student'||!/^[a-z0-9._-]{4,40}$/.test(username)||name.length<2||!className||!/^20\d{2}-20\d{2}$/.test(schoolYear)||password.length<12)localError('Controleer gebruikersnaam, naam, klas, schooljaar en wachtwoord (minstens 12 tekens).');if(data.users.some(u=>u.username===username))localError('Deze gebruikersnaam bestaat al.',409);const account={id:localUid(),username,name,className,schoolYear,passwordHash:await localHash(password),createdAt:localNow()};data.users.push(account);localSave(data);localStorage.setItem(LOCAL_USER_KEY,account.id);return {user:localPerson(account)}}
 if(route==='/api/login'&&method==='POST'){const account=data.users.find(u=>u.username===String(payload.username||'').trim().toLowerCase());if(!account||payload.expectedRole!=='student'||account.passwordHash!==await localHash(String(payload.password||'')))localError('Ongeldige aanmelding.',401);localStorage.setItem(LOCAL_USER_KEY,account.id);return {user:localPerson(account)}}
 if(route==='/api/logout'&&method==='POST'){localStorage.removeItem(LOCAL_USER_KEY);return {ok:true}}
 if(!user)localError('Meld je aan.',401);
 if(route==='/api/content')return {lessons:LOCAL_LESSONS,texts:LOCAL_TEXTS};
 if(route==='/api/student/home')return localDashboard(data,user);
 if(route==='/api/student/training/next'&&method==='POST'){const duration=Number(payload.duration),level=String(payload.level);if(![60,600].includes(duration)||!['easy','medium','challenge'].includes(level))localError('Ongeldige training');const pool=duration===60?LOCAL_TEXTS.filter(t=>t.level===level):LOCAL_TEXTS,first=localPick(data,user,duration+'-'+(duration===60?level:'mix'),pool),selected=duration===60?[localTextById.get(first)]:[localTextById.get(first),...pool.filter(t=>t.id!==first).sort(()=>Math.random()-.5).slice(0,15)];localSave(data);return {texts:selected,duration}}
 if(route==='/api/student/attempt'&&method==='POST'){let target,title,detail,complete=false;if(payload.kind==='lesson'){const lesson=LOCAL_LESSONS[payload.lessonIndex],exercise=lesson?.exercises[payload.exerciseIndex];if(!exercise)localError('Oefening niet gevonden.');target=exercise.text;title=`Les ${payload.lessonIndex+1} · Oefening ${payload.exerciseIndex+1}: ${exercise.name}`;detail={lessonIndex:payload.lessonIndex,exerciseIndex:payload.exerciseIndex};complete=payload.typed===target}else if(payload.kind==='training'){const ids=payload.textIds;if(!Array.isArray(ids)||ids.some(id=>!localTextById.has(id)))localError('Ongeldige tekstkeuze.');target=ids.map(id=>localTextById.get(id).text).join(' ');title=`${payload.trainingSeconds/60} minuut training · ${localTextById.get(ids[0]).title}`;detail={textIds:ids,trainingSeconds:payload.trainingSeconds};complete=payload.complete!==false}else localError('Onbekend type oefening.');const attempt=localAttempt(data,user,{kind:payload.kind,title,location:payload.location,target,typed:payload.typed,seconds:payload.seconds,errorEvents:payload.errorEvents,complete,detail});if(payload.kind==='lesson'&&complete&&!data.progress.some(p=>p.studentId===user.id&&p.lessonIndex===payload.lessonIndex&&p.exerciseIndex===payload.exerciseIndex))data.progress.push({studentId:user.id,lessonIndex:payload.lessonIndex,exerciseIndex:payload.exerciseIndex,completedAt:localNow()});localSave(data);return {attempt,assessment:localAssessment(data,user.id)}}
 if(route==='/api/student/test/start'&&method==='POST'){const duration=Number(payload.duration);if(![60,120,300].includes(duration)||!['school','thuis'].includes(payload.location))localError('Ongeldige test.');data.testRuns=data.testRuns.filter(r=>r.studentId!==user.id);const first=localPick(data,user,'test-all',LOCAL_TEXTS),target=[localTextById.get(first),...LOCAL_TEXTS.filter(t=>t.id!==first).sort(()=>Math.random()-.5).slice(0,15)].map(t=>t.text).join(' '),run={id:localUid(),studentId:user.id,startedAt:Date.now(),duration,target,location:payload.location};data.testRuns.push(run);localSave(data);return {runId:run.id,target,duration}}
 if(route==='/api/student/test/finish'&&method==='POST'){const run=data.testRuns.find(r=>r.id===payload.runId&&r.studentId===user.id);if(!run)localError('Test niet gevonden of al afgerond.',404);data.testRuns=data.testRuns.filter(r=>r.id!==run.id);const elapsed=Math.max(1,Math.floor((Date.now()-run.startedAt)/1000)),complete=elapsed>=run.duration,attempt=localAttempt(data,user,{kind:'test',title:'Automatische typetest',location:run.location,target:run.target,typed:String(payload.typed||''),seconds:Math.min(run.duration,elapsed),errorEvents:payload.errorEvents,complete,detail:{duration:run.duration}});if(complete&&attempt.chars)data.tests.push({id:localUid(),studentId:user.id,date:localNow(),cpm:attempt.cpm,pct:attempt.pct,errors:attempt.errors,seconds:attempt.seconds});localSave(data);return {attempt,assessment:localAssessment(data,user.id)}}
 localError('Niet beschikbaar in de lokale leerlingenversie.',404)
}
function localFinishOpenTest(run,typed,events){const data=localLoad(),user=localCurrent(data),stored=user&&data.testRuns.find(r=>r.id===run.id&&r.studentId===user.id);if(!stored)return;data.testRuns=data.testRuns.filter(r=>r.id!==stored.id);const elapsed=Math.max(1,Math.floor((Date.now()-stored.startedAt)/1000));localAttempt(data,user,{kind:'test',title:'Automatische typetest',location:stored.location,target:stored.target,typed:String(typed||''),seconds:Math.min(stored.duration,elapsed),errorEvents:events,complete:false,detail:{duration:stored.duration}});localSave(data)}
function exportLocalBackup(){const data=localStorage.getItem(LOCAL_KEY)||JSON.stringify(localEmpty()),blob=new Blob([data],{type:'text/plain;charset=utf-8'}),link=document.createElement('a');link.href=URL.createObjectURL(blob);link.download=`10Vingers-backup-${new Date().toISOString().slice(0,10)}.txt`;link.click();setTimeout(()=>URL.revokeObjectURL(link.href),1000)}
async function importLocalBackup(file){const value=JSON.parse(await file.text());if(value?.version!==1||!Array.isArray(value.users)||!Array.isArray(value.attempts))localError('Dit is geen geldige 10 Vingers-back-up.');localStorage.setItem(LOCAL_KEY,JSON.stringify(value));localStorage.removeItem(LOCAL_USER_KEY);location.reload()}
