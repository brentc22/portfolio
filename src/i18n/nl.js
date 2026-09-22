/** Nederlands. Vlaams register: “btw”, “werf”, “offerte”, “afpunten”. */

export default {
  name: 'Nederlands',
  label: 'NL',
  dir: 'ltr',

  meta: {
    home: {
      title: 'Brent Ceulemans — CRM- en operationele systemen op maat',
      description:
        'Ik bouw de systemen waar bedrijven écht op draaien: CRM en operationele platformen ' +
        'op maat, van de eerste binnenkomende lead tot de afgepunte factuur.',
    },
    case: {
      title: 'Operationeel platform — Brent Ceulemans',
      description:
        'Een case binnen wat een NDA toelaat: hoe één platform verkoop, planning, uitvoering ' +
        'op de werf, logistiek, boekhouding en een klantenportaal ging dekken voor een ' +
        'installatiebedrijf — en de keuzes die eronder liggen.',
    },
    projectPoint: {
      title: 'Project-Point — Brent Ceulemans',
      description:
        'Werfregistratie en projectbeheer voor de bouw: punten, foto’s, planning en een ' +
        'klantenportaal. Mijn eigen product, en de keuzes erachter.',
    },
    notFound: {
      title: 'Pagina niet gevonden — Brent Ceulemans',
      description: 'Die pagina bestaat niet.',
    },
  },

  ui: {
    skip: 'Naar de inhoud',
    language: 'Taal',
    nav: { work: 'Werk', approach: 'Aanpak', contact: 'Contact', cta: 'Start een gesprek' },
    hero: {
      seeWork: 'Bekijk het werk',
      howIWork: 'Hoe ik werk',
      stack: 'Stack',
      quoteStatus: 'Getekend',
      quoteLines: ['Plaatsing, 3 dagen', 'Materiaal'],
      quoteVat: 'Btw · 6% renovatie',
      quoteVatValue: 'auto',
      quoteTotal: 'Totaal incl.',
      systemLabel: 'Het systeem',
      systemLive: 'live',
      systemFoot: 'elke rol zijn eigen scherm · RLS als bodem',
      pointLabel: 'Werfpunt · opgelost',
      pointBody:
        'Foto, opmerking en eigenaar hangen aan het punt. De klant ziet precies wat hij mag ' +
        'zien — niets meer.',
      pointFoot: 'gemeld 14 mrt · gesloten 16 mrt',
    },
    preview: { open: 'Open', closed: 'Gesloten', copied: 'gekopieerd', link: 'Link', hidden: 'verborgen' },
    work: { eyebrow: 'Portfolio', title: 'Geselecteerd werk', aside: 'vier systemen, geen galerij' },
    approach: { eyebrow: 'Methode', title: 'Hoe ik werk', aside: 'vier regels, betaald met incidenten', practice: 'In de praktijk', cost: 'Zonder die regel' },
    contact: {
      claimBefore: 'Draai de check, lees de output, ',
      claimMark: 'en dan',
      claimAfter: ' pas zeggen dat het werkt.',
      github: 'GitHub',
      role: 'CRM & operationele systemen',
    },
    case: {
      back: 'Al het werk',
      context: { eyebrow: 'Context', title: 'Wat het verving' },
      scope: { eyebrow: 'Omvang', title: 'Vijf lagen, één database', aside: 'elke laag heeft zijn kleur' },
      engineering: { eyebrow: 'Techniek', title: 'Keuzes die telden', aside: 'en wat het alternatief kost' },
      process: { eyebrow: 'Werkwijze', title: 'Hoe het werk verloopt' },
      whatItDoes: { eyebrow: 'Product', title: 'Wat het doet', aside: 'vier dingen, geen veertig' },
      built: { eyebrow: 'Bouw', title: 'Hoe het gebouwd is' },
      whyNot: 'Waarom niet andersom',
      ndaLabel: 'Onder NDA',
      next: 'Volgende',
      of: 'van',
    },
    notFound: {
      code: '404',
      title: 'Deze route is nooit gebouwd.',
      body:
        'Ofwel is de link oud, ofwel heb ik iets verplaatst. Het werk en de contactgegevens ' +
        'staan één klik verderop.',
      home: 'Terug naar het begin',
      work: 'Geselecteerd werk',
    },
  },

  profile: {
    role: 'CRM & operationele systemen',
    availability: 'Open voor nieuw werk',
    headline: ['Ik bouw de systemen', 'waar bedrijven', 'écht op draaien.'],
    highlight: 'écht',
    lead:
      'CRM- en operationele platformen op maat. Van de eerste binnenkomende lead tot de ' +
      'afgepunte factuur — elke rol krijgt een scherm dat past bij het werk dat die rol doet, ' +
      'in plaats van één scherm waar alles achter rechten verstopt zit.',
  },

  layers: {
    leads: { name: 'Leads', modules: ['kwalificatie', 'bronherkomst', 'opvolging'] },
    quotes: { name: 'Offertes', modules: ['regelprijzen', 'btw-regimes', 'digitaal tekenen'] },
    site: { name: 'Werf', modules: ['planning', 'uitvoering', 'voorraad'] },
    invoices: { name: 'Facturen', modules: ['afpunten', 'btw-aangiftes', 'invordering'] },
    portal: { name: 'Portaal', modules: ['klant & partner', 'rollen & rechten', 'row-level security'] },
  },

  projects: {
    'project-point': {
      name: 'Project-Point',
      badge: 'Live',
      summary:
        'Werfregistratie en projectopvolging voor de bouw — “Geen enkel punt raakt kwijt”. ' +
        'Mijn eigen product: landingspagina, app en klantenportaal.',
      previewLabel: 'Werf · 14 punten open',
    },
    'operations-platform': {
      name: 'Operationeel platform',
      badge: 'Onder NDA',
      summary:
        'Verkoop, planning, uitvoering op de werf, logistiek, boekhouding en een ' +
        'klantenportaal op één database — het systeem waar een volledig installatiebedrijf ' +
        'zijn dag in doorbrengt, van de eerste lead tot de afgepunte betaling.',
      previewLabel: 'Dossier · 6 rollen · week 11',
    },
    catchbox: {
      name: 'catchbox',
      badge: 'Open source',
      summary:
        'Wegwerp-mailboxen voor developers — één mailbox per flow, zodat registratie, ' +
        'facturatie en wachtwoordresets nooit op dezelfde hoop belanden. Hij geeft je de ' +
        'eenmalige code en de actielink, en leest de headers uit om te zien waarom een mail ' +
        'in spam belandde. Node, zonder dependencies.',
      previewLabel: 'Registratieflow · code eruit',
    },
    stash: {
      name: 'Stash',
      badge: 'Open source',
      summary:
        'Een menubalk-verberger voor macOS 27. De herschrijving tekent de menubalk als één ' +
        'venster en brak zo elke tool in die categorie tegelijk — de repo documenteert wat er ' +
        'veranderde, gemeten op een echte machine in plaats van gegokt.',
      previewLabel: 'macOS 27 · menubalk',
    },
  },

  principles: [
    {
      title: 'Correctheid vóór vernuft, overal waar geld in het spel is',
      body:
        'Regelprijzen, btw-regimes en factuurtotalen worden bewaakt door invariant-checks in ' +
        'de database zelf. Die draaien volgens een schema en alarmeren alleen wanneer de ' +
        'toestand verandert. Een alarm dat elk kwartier opnieuw afgaat wordt weggeklikt, en is ' +
        'vanaf dat moment waardeloos.',
      practice: 'Elke geldregel is een constraint of een geplande check, nooit een comment.',
      cost: 'Totalen die stilletjes uit elkaar lopen, en een klant die het vóór jou ziet.',
    },
    {
      title: 'Toegangscontrole schroef je er niet achteraf op',
      body:
        'Een publiek klantenportaal op dezelfde database als de interne boekhouding betekent ' +
        'dat elke row-level policy en elke grant dragend is. Ik ga ervan uit dat een policy ' +
        'stuk is tot ik hem een request heb zien weigeren.',
      practice: 'Nieuw endpoint, nieuwe policy — en een test die eerst als de verkeerde gebruiker inlogt.',
      cost: 'Eén ontbrekende voorwaarde maakt van een portaal een export van alles.',
    },
    {
      title: 'Elk incident wordt een geschreven regel',
      body:
        'Alles wat echt tijd heeft gekost, komt in de repo te staan — de regel én het verhaal ' +
        'erachter. Een waarschuwing in proza werkt alleen als je ze toevallig leest net vóór ' +
        'je de fout zou maken, dus de belangrijkste worden geautomatiseerde checks.',
      practice: 'De regel gaat mee met de fix, in dezelfde commit, met het verhaal erbij.',
      cost: 'Dezelfde storing twee keer, zes maanden uit elkaar, door iemand die de eerste nooit hoorde.',
    },
    {
      title: 'Gemeten, niet aangenomen',
      body:
        'Voor ik beweer dat iets werkt, draai ik de check en lees ik de output. Die gewoonte is ' +
        'het grootste verschil tussen een systeem dat je vertrouwt en een systeem waar je op ' +
        'hoopt.',
      practice: 'Geen “zou moeten werken”. Draaien, lezen, en de regel citeren die het bewijst.',
      cost: 'Een deploy die groen was in je hoofd en rood in productie.',
    },
  ],

  projectPointCase: {
    eyebrow: 'Case 01 · Eigen product',
    title: 'Een puntenlijst die de werf overleeft',
    standfirst:
      'Project-Point is mijn eigen product: werfregistratie en projectbeheer voor de bouw. ' +
      'Punten, foto’s en planning op één plek, en een portaal waar de klant meevolgt zonder ' +
      'in je administratie te zitten.',
    facts: [
      { label: 'Rol', value: 'Eigen product — ontwerp, bouw, uitbating' },
      { label: 'Live op', value: 'project-point.be' },
      { label: 'Gebouwd met', value: 'Pure JavaScript · esbuild · Supabase · Cloudflare' },
      { label: 'Vorm', value: 'Werf-app, klantenportaal en marketingsite' },
    ],
    problem: [
      'Een puntenlijst op een werf zit op drie plaatsen tegelijk: foto’s in een groepschat, ' +
        'notities op de achterkant van een leveringsbon, en één telefoontje dat nooit ergens ' +
        'terechtkwam. Iedereen heeft een versie, niemand heeft dé versie.',
      'De rekening komt bij de oplevering. Er is iets afgesproken in maart, de foto die dat ' +
        'bewijst zit ergens in een gesprek met vierhonderd andere beelden, en de discussie gaat ' +
        'niet meer over het werk — ze gaat over wie zich wat herinnert.',
      'Het product is dus geen projectbeheertool met foto’s erbij. Het is een punt: een foto, ' +
        'een markering op die foto, een actie, een eigenaar en een status — vastgelegd terwijl ' +
        'je ervoor staat, op een gsm, met werkhandschoenen aan.',
    ],
    features: [
      {
        title: 'Werven en punten',
        body:
          'Per werf wat er nog moet gebeuren. Elk punt krijgt een actie — opvolging, info ' +
          'nodig, regiewerk of prijs doorgeven — en een status die je in één blik ziet.',
      },
      {
        title: 'Foto’s waarop je tekent',
        body:
          'Maak de foto op de werf en teken er meteen op: pijl, cirkel of markering. De notitie ' +
          'blijft bij het punt staan, met de naam van wie ze schreef.',
      },
      {
        title: 'Planning en Gantt',
        body:
          'Werken uitgezet in de tijd, en al je werven naast elkaar in één Gantt-overzicht — ' +
          'per week, maand of kwartaal.',
      },
      {
        title: 'Klantenportaal',
        body:
          'Eén link per klant, per werf. Jij bepaalt punt per punt wat hij ziet, en hij kan ' +
          'reageren en zelf foto’s toevoegen.',
      },
    ],
    decisions: [
      {
        title: 'De klant raakt binnen zonder account',
        body:
          'Toegang tot het portaal loopt via een e-mailadres en een pincode. Geen registratie, ' +
          'geen wachtwoord om te vergeten, geen account dat iemand moet beheren.',
        why:
          'Een klant opent dit twee keer per jaar. Een registratieformulier is precies de plek ' +
          'waar die persoon afhaakt, en een portaal dat niemand opent is minder waard dan een ' +
          'mail. De prijs is echt: zonder identiteitsprovider draag je zelf de vervaltijd van ' +
          'de link, de rate limiting en de reikwijdte van de sessie — en dat krijg je alleen ' +
          'juist door het te testen als de verkeerde ontvanger.',
      },
      {
        title: 'Zichtbaarheid wordt per punt beslist, niet per werf',
        body:
          'De aannemer zet elk punt op zichtbaar of intern. Prijzen die nog in discussie zijn, ' +
          'opmerkingen over een onderaannemer en de notitie over een betwisting blijven binnen.',
        why:
          'Eén schakelaar per werf dwingt een keuze af tussen alles nuttigs verbergen en de ' +
          'discussie over meerwerk tonen. Per punt is meer werk om te bouwen en het is de enige ' +
          'fijnmazigheid die past bij hoe mensen echt over een werf praten.',
      },
      {
        title: 'Annoteren gebeurt bij het punt, niet later op kantoor',
        body:
          'De pijl wordt op de gsm getekend, staand voor het ding zelf. De foto wordt opgeslagen ' +
          'mét de markering, niet naast een beschrijving ervan.',
        why:
          'Een foto zonder markering is een discussie. Wie erbij stond weet over welke scheur ' +
          'het gaat; drie weken later weet niemand dat nog, hijzelf ook niet. Het achteraf doen ' +
          'is goedkoper om te bouwen en is precies de functie die stilletjes nooit gebruikt wordt.',
      },
      {
        title: 'De planning loopt over werven heen, niet binnen één werf',
        body:
          'Het Gantt-overzicht zet elke lopende werf op dezelfde tijdlijn in plaats van elke ' +
          'werf zijn eigen schema te geven.',
        why:
          'Eén werf plannen is niet moeilijk — dat zit al in het hoofd van de aannemer. De vraag ' +
          'die geld kost is welke ploeg volgende dinsdag waar staat, en die vraag is onzichtbaar ' +
          'tot de werven naast elkaar getekend staan.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Geen framework',
        body:
          'Pure JavaScript, gebundeld met esbuild. Deze app wordt geopend op een gsm op een dak ' +
          'met slechte ontvangst, dus elke kilobyte is een seconde dat iemand staat te wachten.',
      },
      {
        step: '02',
        title: 'De database doet het werk',
        body:
          'Ruwweg 180 KB PL/pgSQL in Postgres: toegangsregels, statusovergangen en wat het ' +
          'portaal van een werf te zien krijgt worden daar beslist, niet in de client.',
      },
      {
        step: '03',
        title: 'Push in plaats van pollen',
        body:
          'Web push, zodat een nieuw punt terechtkomt bij wie er iets mee moet, zonder dat ' +
          'iemand een tabblad moet openhouden.',
      },
      {
        step: '04',
        title: 'Cloudflare van voor tot achter',
        body:
          'De marketingsite, de app en het portaal komen van de edge. Dat houdt het eerste ' +
          'beeld snel op een werfverbinding en de vaste kost zo goed als nul.',
      },
    ],
    live: {
      label: 'Ga kijken',
      body:
        'Project-Point is een echt product, geen demo. De marketingsite legt het uit; de app ' +
        'zelf zit achter een login, want daar staan echte werven in.',
      cta: 'project-point.be',
    },
  },

  operationsCase: {
    eyebrow: 'Case 02 · Onder NDA',
    title: 'Het systeem waar een bedrijf zijn dag in doorbrengt',
    standfirst:
      'Een installatiebedrijf groeide uit zijn Excel-bestanden en ontdekte daarna dat ' +
      'kant-en-klare software niet past op de manier waarop het echt werkt. Dit kwam ervoor ' +
      'in de plaats: één platform voor verkoop, planning, uitvoering op de werf, logistiek, ' +
      'boekhouding en een klantenportaal — en de keuzes die eronder liggen.',
    facts: [
      { label: 'Rol', value: 'Enige developer — van datamodel tot deploy' },
      { label: 'Draait sinds', value: 'Begin 2026, dagelijks in productie' },
      { label: 'Gebruikers', value: 'Tientallen mensen per dag, plus een klantenportaal' },
      { label: 'Stack', value: 'React · TypeScript · Postgres · Supabase' },
    ],
    problem: [
      'Elk bedrijf dat een bepaalde grootte bereikt heeft dezelfde drie werktuigen: een ' +
        'Excel-bestand dat niemand durft aanraken, een gedeelde mailbox, en één persoon die ' +
        'nog weet hoe alles in elkaar past. Dat werkt tot het niet meer werkt — meestal net op ' +
        'de dag dat die persoon met verlof is.',
      'Het voor de hand liggende antwoord is iets kopen. Dat mislukt om een specifieke reden: ' +
        'een standaard-CRM gaat uit van een verkoopproces, een standaard-ERP van een fabriek, ' +
        'en een bedrijf dat dingen plaatst bij mensen thuis is geen van beide. Je buigt het ' +
        'bedrijf naar de software, en het Excel-bestand komt stilletjes terug voor alles wat ' +
        'er niet in paste.',
      'De opdracht was dus niet “digitaliseer dit”. Ze was: modelleer wat dit bedrijf echt ' +
        'doet, en maak de dag van elke rol korter in plaats van beter gedocumenteerd.',
    ],
    layersNote:
      'Een opdracht schuift van links naar rechts door deze lagen, en elke overdracht is een ' +
      'plek waar vroeger een Excel-bestand stond. Ze op één database zetten is wat het ' +
      'overtypen wegneemt — en wat toegangscontrole meteen het moeilijkste probleem op deze ' +
      'pagina maakt.',
    decisions: [
      {
        title: 'Een offerte is een contract, dus haar regels liggen vast',
        body:
          'Een getekende offerte kan niet meer veranderen — niet haar prijzen, niet haar ' +
          'btw-regime, niet de volgorde van de regels. Ze aanpassen maakt een nieuwe revisie ' +
          'en laat de getekende versie exact zoals de klant ze zag. De factuur wordt daarna ' +
          'opgebouwd uit de getekende regels, niet opnieuw berekend met de huidige prijzen.',
        why:
          'Het alternatief lijkt ongeveer een jaar lang eenvoudiger, tot een update van de ' +
          'prijslijst stilletjes herschrijft waarmee een klant akkoord ging. Zo’n bug vind je ' +
          'niet bij het testen; je vindt hem in een discussie.',
      },
      {
        title: 'Het portaal staat op dezelfde database, dus RLS is de bodem',
        body:
          'Klanten en partners lezen hun eigen projecten uit dezelfde tabellen waarin de ' +
          'boekhouding werkt. Er is geen spiegeldatabase en geen sync-job. Elke tabel die het ' +
          'portaal raakt draagt een row-level policy, en die policy — niet de query, niet de ' +
          'component — bepaalt wat er terugkomt.',
        why:
          'Een apart leesmodel is een tweede bron van waarheid, en een tweede bron van ' +
          'waarheid loopt scheef. Eén database houden betekent dat een policy het enige is dat ' +
          'tussen een klant en de rest van het bedrijf staat, en dat is precies de druk die er ' +
          'op hoort te staan. Ik test ze door als de verkeerde gebruiker in te loggen en het ' +
          'request te zien falen.',
      },
      {
        title: 'Geldinvarianten worden door de database gecontroleerd, volgens schema',
        body:
          'Factuurtotalen moeten gelijk zijn aan de som van hun regels. De btw moet overeenkomen ' +
          'met het regime op de getekende offerte. Een betaling mag nooit afgepunt worden tegen ' +
          'een factuur van een andere klant. Dat zijn geplande checks op de echte data, en ze ' +
          'alarmeren alleen wanneer de toestand verandert — één keer bij het foutlopen, en ' +
          'opnieuw wanneer het weer klopt.',
        why:
          'Financiële bugs zijn stil. Er wordt niets gegooid; een getal is gewoon verkeerd, en ' +
          'blijft verkeerd tot iemand met de hand hertelt. Een alarm dat elk kwartier afgaat ' +
          'staat binnen een dag op stil en is daarna waardeloos, dus het gaat af op overgangen.',
      },
      {
        title: 'Elke rol krijgt een eigen scherm, geen gefilterde versie van één scherm',
        body:
          'De planner, de ploeg op de werf, het magazijn en de boekhouder kijken naar hetzelfde ' +
          'project via vier verschillende schermen. De werf-app toont vandaag, dit adres, dit ' +
          'materiaal, deze foto. De boekhouder ziet nooit een planningsraster.',
        why:
          'Eén scherm met alles verstopt achter rechten is precies hoe bedrijfssoftware iets ' +
          'wordt dat mensen vermijden. Vier gerichte schermen bouwen kost echt geld; één scherm ' +
          'dat niemand wil openen kost meer, en dat zie je terug als een Excel-bestand dat ' +
          'opnieuw op iemands bureaublad verschijnt.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Eerst meelopen, dan pas modelleren',
        body:
          'Het datamodel komt uit kijken hoe een opdracht echt beweegt, niet uit een ' +
          'lastenboek. De woorden die mensen al gebruiken worden de tabelnamen.',
      },
      {
        step: '02',
        title: 'Eén laag volledig live zetten',
        body:
          'Offertes, helemaal van lead tot getekende pdf, voor er iets anders begint. Een laag ' +
          'die live staat leert je in een week meer dan een kwartaal plannen.',
      },
      {
        step: '03',
        title: 'De regels in de database zetten',
        body:
          'Constraints, policies en invariant-checks, want applicatiecode is waar regels ' +
          'vergeten raken. Als iets belangrijk is, moet het de schrijfactie weigeren.',
      },
      {
        step: '04',
        title: 'Zelf de deploy én het zaterdagtelefoontje dragen',
        body:
          'Architectuur, migraties, deploys en het incident zijn hetzelfde werk. Weten dat jij ' +
          'degene bent die gebeld wordt verandert wat je bereid bent te shippen.',
      },
    ],
    nda:
      'De klant, hun cijfers en hun schermen blijven van deze pagina af. Wat hier staat is de ' +
      'vorm van het probleem en de redenering — en dat is toch het deel dat meeverhuist naar ' +
      'het volgende bedrijf. Het echte werk toon ik graag in een gesprek.',
  },
}
