/** Français. Registre belge : « TVA 6 % rénovation », « chantier », « devis ». */

export default {
  name: 'Français',
  label: 'FR',
  dir: 'ltr',

  meta: {
    home: {
      title: 'Brent Ceulemans — CRM et plateformes opérationnelles sur mesure',
      description:
        'Je construis les systèmes sur lesquels une entreprise tourne vraiment : CRM et ' +
        'plateformes opérationnelles sur mesure, du premier prospect à la facture soldée.',
    },
    case: {
      title: 'Plateforme opérationnelle — Brent Ceulemans',
      description:
        'Une étude de cas, dans les limites d’un NDA : comment une seule plateforme en est ' +
        'venue à couvrir la vente, le planning, l’exécution sur chantier, la logistique, la ' +
        'comptabilité et un portail client — et les décisions qui la soutiennent.',
    },
    notFound: {
      title: 'Page introuvable — Brent Ceulemans',
      description: 'Cette page n’existe pas.',
    },
  },

  ui: {
    skip: 'Aller au contenu',
    language: 'Langue',
    nav: { work: 'Travaux', approach: 'Approche', contact: 'Contact', cta: 'Démarrer une conversation' },
    hero: {
      seeWork: 'Voir les travaux',
      howIWork: 'Ma façon de travailler',
      stack: 'Stack',
      quoteStatus: 'Signé',
      quoteLines: ['Pose, 3 jours', 'Matériaux'],
      quoteVat: 'TVA · 6 % rénovation',
      quoteVatValue: 'auto',
      quoteTotal: 'Total TTC',
      systemLabel: 'Le système',
      systemLive: 'live',
      systemFoot: 'à chaque rôle son écran · RLS comme socle',
      pointLabel: 'Point chantier · résolu',
      pointBody:
        'La photo, l’annotation et le responsable sont attachés au point. Le client voit ' +
        'exactement ce qu’il a le droit de voir — rien de plus.',
      pointFoot: 'signalé 14 mars · clôturé 16 mars',
    },
    preview: { open: 'Ouvert', closed: 'Clôturé', copied: 'copié', link: 'Lien', hidden: 'masqué' },
    work: { eyebrow: 'Portfolio', title: 'Travaux choisis', aside: 'quatre systèmes, pas une galerie' },
    approach: { eyebrow: 'Méthode', title: 'Ma façon de travailler', aside: 'quatre règles, payées en incidents', practice: 'En pratique', cost: 'Sans cette règle' },
    contact: {
      claimBefore: 'Lancer la vérification, lire la sortie, ',
      claimMark: 'ensuite',
      claimAfter: ' dire que ça marche.',
      github: 'GitHub',
      role: 'CRM & systèmes opérationnels',
    },
    case: {
      back: 'Tous les travaux',
      context: { eyebrow: 'Contexte', title: 'Ce qu’elle a remplacé' },
      scope: { eyebrow: 'Périmètre', title: 'Cinq couches, une base de données', aside: 'chaque couche a sa couleur' },
      engineering: { eyebrow: 'Technique', title: 'Les décisions qui comptaient', aside: 'et ce que coûte l’alternative' },
      process: { eyebrow: 'Déroulement', title: 'Comment le travail se passe' },
      whyNot: 'Pourquoi pas l’inverse',
      ndaLabel: 'Sous NDA',
      next: 'Suivant',
      of: 'sur',
    },
    notFound: {
      code: '404',
      title: 'Cette route n’a jamais été construite.',
      body:
        'Soit le lien est ancien, soit j’ai déplacé quelque chose. Les travaux et les ' +
        'coordonnées sont à un clic d’ici.',
      home: 'Retour au début',
      work: 'Travaux choisis',
    },
  },

  profile: {
    role: 'CRM & systèmes opérationnels',
    availability: 'Disponible pour de nouveaux projets',
    headline: ['Je construis les', 'systèmes sur lesquels', 'tout repose vraiment.'],
    highlight: 'vraiment',
    lead:
      'CRM et plateformes opérationnelles sur mesure. Du premier prospect entrant à la facture ' +
      'soldée — chaque rôle reçoit une interface faite pour le travail qu’il effectue, plutôt ' +
      'qu’un seul écran où tout est caché derrière des permissions.',
  },

  layers: {
    leads: { name: 'Prospects', modules: ['qualification', 'origine du lead', 'relance'] },
    quotes: { name: 'Devis', modules: ['prix par ligne', 'régimes de TVA', 'signature numérique'] },
    site: { name: 'Chantier', modules: ['planning', 'exécution', 'stock'] },
    invoices: { name: 'Factures', modules: ['rapprochement', 'déclarations TVA', 'recouvrement'] },
    portal: { name: 'Portail', modules: ['client & partenaire', 'rôles & droits', 'row-level security'] },
  },

  projects: {
    'project-point': {
      name: 'Project-Point',
      badge: 'En ligne',
      summary:
        'Relevé de chantier et suivi de projet pour le bâtiment — « Geen enkel punt raakt ' +
        'kwijt ». Mon propre produit : page d’accueil, application et portail client.',
      previewLabel: 'Chantier · 14 points ouverts',
    },
    'operations-platform': {
      name: 'Plateforme opérationnelle',
      badge: 'Sous NDA',
      summary:
        'Vente, planning, exécution sur chantier, logistique, comptabilité et portail client ' +
        'sur une seule base de données — le système dans lequel une entreprise d’installation ' +
        'entière passe sa journée, du premier prospect au paiement rapproché.',
      previewLabel: 'Dossier · 6 rôles · semaine 11',
    },
    catchbox: {
      name: 'catchbox',
      badge: 'Open source',
      summary:
        'Boîtes mail jetables pour développeurs — une boîte par flux, pour que l’inscription, ' +
        'la facturation et les réinitialisations de mot de passe ne finissent jamais dans le ' +
        'même tas. Il vous donne le code à usage unique et le lien d’action, et lit les ' +
        'en-têtes pour expliquer pourquoi un mail est parti en spam. Node, sans dépendances.',
      previewLabel: 'Flux d’inscription · code extrait',
    },
    stash: {
      name: 'Stash',
      badge: 'Open source',
      summary:
        'Un masqueur de barre de menus pour macOS 27. La réécriture dessine la barre comme une ' +
        'seule fenêtre et a cassé d’un coup tous les outils de cette catégorie — le dépôt ' +
        'documente ce qui a changé, mesuré sur une vraie machine plutôt que deviné.',
      previewLabel: 'macOS 27 · barre de menus',
    },
  },

  principles: [
    {
      title: 'L’exactitude avant l’astuce, partout où il y a de l’argent',
      body:
        'Les prix par ligne, les régimes de TVA et les totaux de facture sont protégés par des ' +
        'contrôles d’invariants au niveau de la base, planifiés, qui n’alertent que lorsque ' +
        'l’état change. Une alarme qui se répète tous les quarts d’heure finit ignorée, et ne ' +
        'vaut plus rien à partir de là.',
      practice: 'Chaque règle monétaire est une contrainte ou un contrôle planifié, jamais un commentaire.',
      cost: 'Des totaux qui divergent en silence, et un client qui le remarque avant vous.',
    },
    {
      title: 'Le contrôle d’accès ne se visse pas après coup',
      body:
        'Un portail client public posé sur la même base que la comptabilité interne rend ' +
        'chaque policy row-level et chaque grant porteurs. Je pars du principe qu’une policy ' +
        'est cassée tant que je ne l’ai pas vue refuser la requête.',
      practice: 'Nouvel endpoint, nouvelle policy — et un test qui se connecte d’abord avec le mauvais compte.',
      cost: 'Un seul prédicat manquant transforme un portail en export de tout.',
    },
    {
      title: 'Chaque incident devient une règle écrite',
      body:
        'Tout ce qui a coûté du temps réel est documenté dans le dépôt — la règle, et ' +
        'l’histoire derrière. Un avertissement en prose ne fonctionne que si vous le lisez ' +
        'juste avant de commettre l’erreur, donc les plus importants deviennent des contrôles ' +
        'automatisés.',
      practice: 'La règle part avec le correctif, dans le même commit, histoire comprise.',
      cost: 'La même panne deux fois, à six mois d’écart, par quelqu’un qui n’a jamais entendu parler de la première.',
    },
    {
      title: 'Mesuré, pas supposé',
      body:
        'Avant d’affirmer que quelque chose fonctionne, je lance la vérification et je lis la ' +
        'sortie. Cette habitude fait toute la différence entre un système auquel on se fie et ' +
        'un système sur lequel on espère.',
      practice: 'Pas de « ça devrait marcher ». Lancer, lire, et citer la ligne qui le prouve.',
      cost: 'Un déploiement vert dans votre tête et rouge en production.',
    },
  ],

  case: {
    eyebrow: 'Cas 02 · Sous NDA',
    title: 'Le système dans lequel une entreprise passe sa journée',
    standfirst:
      'Une entreprise d’installation a dépassé ses tableurs, puis a découvert que les ' +
      'logiciels tout faits ne collent pas à sa façon réelle de travailler. Voici ce qui les a ' +
      'remplacés : une plateforme unique couvrant la vente, le planning, l’exécution sur ' +
      'chantier, la logistique, la comptabilité et un portail client — et les décisions qui la ' +
      'soutiennent.',
    facts: [
      { label: 'Rôle', value: 'Seul développeur — du modèle de données aux déploiements' },
      { label: 'En service depuis', value: 'Début 2026, en production quotidienne' },
      { label: 'Utilisateurs', value: 'Des dizaines de personnes par jour, plus un portail client' },
      { label: 'Stack', value: 'React · TypeScript · Postgres · Supabase' },
    ],
    problem: [
      'Toute entreprise qui atteint une certaine taille possède les mêmes trois outils : un ' +
        'tableur que personne n’ose toucher, une boîte mail partagée, et une personne qui se ' +
        'souvient encore de la façon dont tout s’emboîte. Ça tient jusqu’au jour où ça ne tient ' +
        'plus — en général le jour où cette personne est en congé.',
      'La réponse évidente est d’acheter quelque chose. Elle échoue pour une raison précise : ' +
        'un CRM standard présuppose un processus de vente, un ERP standard présuppose une ' +
        'usine, et une entreprise qui installe des choses chez les gens n’est ni l’un ni ' +
        'l’autre. On finit par plier l’entreprise au logiciel, et le tableur revient ' +
        'discrètement porter tout ce qui n’entrait pas.',
      'La demande n’était donc pas « numérisez ceci ». Elle était : modélisez ce que cette ' +
        'entreprise fait réellement, et raccourcissez la journée de chaque rôle au lieu de ' +
        'mieux la documenter.',
    ],
    layersNote:
      'Un dossier traverse ces couches de gauche à droite, et chaque passage de relais est un ' +
      'endroit où vivait autrefois un tableur. Les poser sur une seule base de données est ce ' +
      'qui supprime la ressaisie — et ce qui fait du contrôle d’accès le problème le plus dur ' +
      'de cette page.',
    decisions: [
      {
        title: 'Un devis est un contrat, ses lignes sont donc immuables',
        body:
          'Un devis signé ne peut plus changer — ni ses prix, ni son régime de TVA, ni l’ordre ' +
          'de ses lignes. Le modifier crée une nouvelle révision et laisse la version signée ' +
          'exactement telle que le client l’a vue. La facture est ensuite générée à partir des ' +
          'lignes signées, et non recalculée avec les prix actuels.',
        why:
          'L’alternative paraît plus simple pendant environ un an, jusqu’à ce qu’une mise à ' +
          'jour du tarif réécrive en silence ce qu’un client avait accepté. Ce bug-là ne se ' +
          'trouve pas en test ; il se trouve en litige.',
      },
      {
        title: 'Le portail est sur la même base, donc le RLS est le socle',
        body:
          'Clients et partenaires lisent leurs propres projets dans les tables où travaille la ' +
          'comptabilité. Pas de base miroir, pas de job de synchronisation. Chaque table que ' +
          'le portail touche porte une policy row-level, et c’est la policy — pas la requête, ' +
          'pas le composant — qui décide de ce qui revient.',
        why:
          'Un modèle de lecture séparé est une deuxième source de vérité, et une deuxième ' +
          'source de vérité dérive. Garder une seule base signifie qu’une policy est la seule ' +
          'chose entre un client et le reste de l’entreprise, ce qui est exactement la ' +
          'pression qu’elle doit subir. Je les teste en me connectant avec le mauvais compte ' +
          'et en regardant la requête échouer.',
      },
      {
        title: 'Les invariants monétaires sont vérifiés par la base, de façon planifiée',
        body:
          'Le total d’une facture doit égaler la somme de ses lignes. La TVA doit correspondre ' +
          'au régime du devis signé. Un paiement ne doit jamais être rapproché d’une facture ' +
          'd’un autre client. Ce sont des contrôles planifiés sur les données réelles, et ils ' +
          'n’alertent que lorsque l’état change — la première fois que c’est faux, et à ' +
          'nouveau quand c’est redevenu juste.',
        why:
          'Les bugs financiers sont silencieux. Rien ne lève d’erreur ; un chiffre est ' +
          'simplement faux, et le reste jusqu’à ce que quelqu’un recompte à la main. Une ' +
          'alarme qui se déclenche tous les quarts d’heure est coupée en un jour et ne sert ' +
          'plus à rien, donc elle se déclenche sur les transitions.',
      },
      {
        title: 'Chaque rôle a son propre écran, pas une version filtrée d’un seul écran',
        body:
          'Le planificateur, l’équipe de chantier, le magasin et le comptable regardent le ' +
          'même projet à travers quatre interfaces différentes. L’application de chantier ' +
          'montre aujourd’hui, cette adresse, ces matériaux, cette photo. Le comptable ne voit ' +
          'jamais une grille de planning.',
        why:
          'Un écran unique où tout est caché derrière des permissions, c’est exactement ainsi ' +
          'qu’un logiciel d’entreprise devient une chose que les gens évitent. Construire ' +
          'quatre écrans ciblés coûte cher ; un écran que personne ne veut ouvrir coûte plus ' +
          'cher encore, et cela se voit au tableur qui réapparaît sur un bureau.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Observer le travail avant de le modéliser',
        body:
          'Le modèle de données sort de l’observation d’un dossier qui avance, pas d’un cahier ' +
          'des charges. Les mots que les gens emploient déjà deviennent les noms de tables.',
      },
      {
        step: '02',
        title: 'Mettre une couche en production, de bout en bout',
        body:
          'Le devis, du prospect au PDF signé, avant de commencer autre chose. Une couche en ' +
          'production apprend plus en une semaine qu’un trimestre de planification.',
      },
      {
        step: '03',
        title: 'Mettre les règles dans la base de données',
        body:
          'Contraintes, policies et contrôles d’invariants, parce que le code applicatif est ' +
          'l’endroit où les règles s’oublient. Si c’est important, ça doit refuser l’écriture.',
      },
      {
        step: '04',
        title: 'Assumer le déploiement et le coup de fil du samedi',
        body:
          'L’architecture, les migrations, les déploiements et l’incident sont le même métier. ' +
          'Savoir que c’est vous qu’on réveillera change ce que vous acceptez de livrer.',
      },
    ],
    nda:
      'Le client, ses chiffres et ses écrans restent en dehors de cette page. Ce qui est ici, ' +
      'c’est la forme du problème et le raisonnement — c’est de toute façon la partie qui suit ' +
      'jusqu’à l’entreprise suivante. Je montre volontiers le vrai système lors d’un entretien.',
  },
}
