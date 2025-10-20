"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_offview_microfinance_cofina_convention_cofina_PRET-CONV_js"],{

/***/ "./resources/js/components/offview/microfinance/cofina/convention/cofina/PRET-CONV.js":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/offview/microfinance/cofina/convention/cofina/PRET-CONV.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  // title: "Convention de test",
  paragraphs: [[{
    type: "text",
    content: "Entre les soussign\xE9s: "
  }], [{
    type: 'bold',
    content: 'Compagnie Financière Africaine '
  }, {
    type: 'editable',
    key: 'filiale_contry',
    inputType: 'text',
    placeholder: 'Pays de la filiale',
    hasDefault: false,
    defaultV: "filiale"
  }, {
    type: 'bold',
    content: 'S.A'
  }, {
    type: 'text',
    content: ', en abrégé COFINA '
  }, {
    type: 'editable',
    key: 'filiale_contry',
    inputType: 'text',
    placeholder: 'Pays de la filiale',
    hasDefault: false,
    defaultV: "filiale"
  }, {
    type: 'text',
    content: ", société anonyme avec Conseil d’Administration au capital social de "
  }, {
    type: 'editable',
    key: 'filiale_capital',
    inputType: 'money',
    placeholder: 'Capitalisation',
    hasDefault: false,
    defaultV: "filiale_capital"
  }, {
    type: 'text',
    content: "FCFA ayant son siège social à "
  }, {
    type: 'editable',
    key: 'siege',
    inputType: 'text',
    placeholder: 'Siège social',
    hasDefault: false,
    defaultV: "siege"
  }, {
    type: 'text',
    content: ', '
  }, {
    type: 'editable',
    key: 'code',
    inputType: 'text',
    placeholder: 'Adresse postal',
    hasDefault: false,
    defaultV: "code"
  }, {
    type: "text",
    content: "; immatriculée au Registre du Commerce et du Crédit Mobilier sous le numéro modificatif "
  }, {
    type: 'editable',
    key: 'immatriculation',
    inputType: 'text',
    placeholder: 'Immatriculation',
    hasDefault: false,
    defaultV: "immatriculation"
  }, {
    type: 'text',
    content: ", Tel : ",
    placeholder: 'Numéro de téléphone'
  }, {
    type: 'editable',
    key: 'filiale_telephone',
    inputType: 'tel',
    placeholder: 'téléphone de la filiale',
    hasDefault: false,
    defaultV: "filiale_telephone"
  }, {
    type: 'text',
    content: '; '
  }, {
    type: "br"
  }], [{
    type: "text",
    content: 'Représentée par '
  }, {
    type: 'editable',
    key: "representative_name",
    inputType: "text",
    placeholder: "Nom répresentant",
    hasDefault: false,
    defaultV: "nom_dg"
  }, {
    type: "text",
    content: ", agissant en sa qualité de Directeur Général,"
  }, {
    type: "br"
  }], [{
    type: 'text',
    content: "Ci-après désignée “"
  }, {
    type: 'bold',
    content: "COFINA"
  }, {
    type: 'editable',
    key: 'filiale_contry',
    inputType: 'text',
    placeholder: 'Pays de la filiale',
    hasDefault: false,
    defaultV: "filiale"
  }, {
    type: 'text',
    content: "”,"
  }], [{
    type: 'right',
    content: "D'une part,"
  }], [{
    type: 'text',
    content: 'Et'
  }, {
    type: 'br'
  }], [{
    type: "editable",
    key: "titre_emprunteur",
    inputType: "select",
    options: ["Madame", "Monsieur"],
    placeholder: "Titre de l'emprunteur",
    hasDefault: false,
    defaultV: "empty"
  }, {
    type: 'editable',
    key: 'emprunteur_name',
    inputType: 'text',
    placeholder: "Nom de l'emprunteur",
    hasDefault: false,
    defaultV: "emprunteur_name"
  }, {
    type: 'text',
    content: 'né(e) le'
  }, {
    type: 'editable',
    key: "emprunter_birth_date",
    inputType: 'date',
    hasDefault: false,
    defaultV: "emprunter_birth_date"
  }, {
    type: 'text',
    content: 'à'
  }, {
    type: 'editable',
    key: 'birth_location',
    inputType: 'text',
    placeholder: 'Lieu de naissance',
    hasDefault: false,
    defaultV: "birth_location"
  }, {
    type: 'text',
    content: ", de nationalité "
  }, {
    type: 'editable',
    key: "nationalite",
    inputType: 'text',
    placeholder: 'Nationalité'
  }, {
    type: 'text',
    content: ', '
  }, {
    type: 'editable',
    key: "activite",
    inputType: 'text',
    placeholder: "Profession de l'emprunteur",
    hasDefault: false,
    defaultV: "activite"
  }, {
    type: 'text',
    content: ", titulaire "
  }, {
    type: "editable",
    key: "type_piece_caution",
    inputType: "select",
    options: ["de la carte d'identité N° ", "du passeport N°", "de la carte consulaire N°"],
    placeholder: "Type de pièce d'identité de la caution",
    hasDefault: false,
    defaultV: "type_piece_caution"
  }, {
    type: "text",
    content: " N\xB0 "
  }, {
    type: 'editable',
    key: 'cni',
    inputType: 'text',
    placeholder: "Numéro de la piece d'identité",
    hasDefault: false,
    defaultV: "cni"
  }, {
    type: 'text',
    content: 'du'
  }, {
    type: 'editable',
    key: 'cni_produce_date',
    inputType: 'date'
  }, {
    type: 'text',
    content: "valable jusqu’au "
  }, {
    type: 'editable',
    key: 'cni_expire_date',
    inputType: 'date'
  }, {
    type: 'text',
    content: ", ayant son lieu d’activités au quartier "
  }, {
    type: 'editable',
    key: 'quartier_activite',
    inputType: 'text',
    placeholder: "Quartier de l'activité"
  }, {
    type: 'text',
    content: "de"
  }, {
    type: 'editable',
    key: 'city',
    inputType: 'text',
    placeholder: "Ville de l'activité"
  }, {
    type: 'text',
    content: "et ayant son domicile au quartier "
  }, {
    type: 'editable',
    key: 'location',
    inputType: 'text',
    placeholder: "Quartier d'habitation"
  }, {
    type: 'text',
    content: ", Tél: "
  }, {
    type: 'editable',
    key: 'telephone_emprunteur',
    inputType: "tel",
    hasDefault: false,
    defaultV: "telephone_emprunteur"
  }], [{
    type: 'text',
    content: "Ci-après désigné(e) « "
  }, {
    type: 'bold',
    content: "l’Emprunteur"
  }, {
    type: 'text',
    content: "»"
  }], [{
    type: "bold",
    content: "Il a été convenu et arrêté ce qui suit :"
  }], [{
    type: 'underline',
    content: 'Article 1 : Objet'
  }, {
    type: 'br'
  }, {
    type: 'br'
  }, {
    type: 'text',
    content: "Sous réserve de la réalisation des conditions préalables visées à l'article 8 ci-après, COFINA "
  }, {
    type: 'editable',
    key: "filiale_contry",
    inputType: "text",
    placeholder: 'Pays de la filiale',
    hasDefault: false,
    defaultV: "filiale"
  }, {
    type: 'text',
    content: "consent à l'Emprunteur, qui accepte et s'engage à en exécuter les termes, conditions et modalités telles que définies ci-après, un "
  }, {
    type: 'bold',
    content: "crédit d’exploitation"
  }, {
    type: 'text',
    content: " aux caractéristiques suivantes :"
  }, {
    type: 'br'
  }], [{
    type: 'text',
    content: '•	TYPE DE CONCOURS :'
  }, {
    type: 'editable',
    key: "concours",
    inputType: 'text',
    hasDefault: false,
    defaultV: "type_de_concours"
  }, {
    type: 'br'
  }], [{
    type: 'text',
    content: '•	Montant :'
  }, {
    type: 'editable',
    key: "montant",
    inputType: 'money',
    hasDefault: false,
    defaultV: "montant"
  }, {
    type: 'br'
  }], [{
    type: 'text',
    content: '•	Durée  :'
  }, {
    type: 'editable',
    key: "mois",
    inputType: 'number',
    hasDefault: false,
    defaultV: "duree_credit"
  }, {
    type: 'text',
    content: 'mois'
  }, {
    type: 'br'
  }],
  // [
  //   {'type' : 'blank'}
  // ],
  [{
    type: 'text',
    content: '•	Périodicité  :'
  }, {
    type: 'editable',
    key: "periodicite",
    inputType: 'text',
    hasDefault: false,
    defaultV: "periodicite"
  }, {
    type: 'br'
  }], [{
    type: "bold",
    content: "Taux d\u2019int\xE9r\xEAt : "
  }, {
    type: "editable",
    key: "taux_interet_ht",
    inputType: "number",
    placeholder: "Taux d'intérêt HT",
    hasDefault: false,
    defaultV: "taux_interet_ht"
  }, {
    type: "text",
    content: "% HT +"
  }, {
    type: "editable",
    key: "tva",
    inputType: "number",
    placeholder: "Taux TVA",
    hasDefault: false,
    defaultV: "tva"
  }, {
    type: "text",
    content: "% de TVA"
  }, {
    type: 'br'
  }], [{
    type: "bold",
    content: "Frais de dossier :  "
  }, {
    type: "editable",
    key: "frais_dossier",
    inputType: "money",
    placeholder: "Frais de dossier",
    hasDefault: false,
    defaultV: "frais_dossier"
  }, {
    type: "text",
    content: "FCFA HT ("
  }, {
    type: "editable",
    key: "pourcent_montant_accorde_frais_dossier",
    inputType: "number",
    placeholder: "Pourcent montant accorde"
  }, {
    type: "text",
    content: "% HT du montant accord\xE9) + "
  }, {
    type: "editable",
    key: "tva",
    inputType: "number",
    placeholder: "Taux TVA",
    hasDefault: false,
    defaultV: "tva"
  }, {
    type: "text",
    content: "% de TVA"
  }, {
    type: 'br'
  }], [{
    type: "bold",
    content: "Prime de risque :  "
  }, {
    type: "editable",
    key: "prime_risque",
    inputType: "money",
    placeholder: "Prime de risque",
    hasDefault: false,
    defaultV: "prime_risque"
  }, {
    type: "text",
    content: "FCFA TTC ("
  }, {
    type: "editable",
    key: "pourcent_montant_accorde_prime_risque",
    inputType: "number",
    placeholder: "Pourcent montant accorde",
    hasDefault: false,
    defaultV: "pourcent_montant_accorde_prime_risque"
  }, {
    type: "text",
    content: "% du montant accord\xE9)"
  }, {
    type: 'br'
  }], [{
    type: 'bold',
    content: '•	Date de première échéance : '
  }, {
    type: 'editable',
    key: "premiere_echeance",
    inputType: 'date'
  }, {
    type: 'br'
  }], [{
    type: 'bold',
    content: '•	Date de dernière échéance '
  }, {
    type: 'editable',
    key: "derniere_echeance",
    inputType: 'date'
  }, {
    type: 'br'
  }], [{
    type: 'bold',
    content: '•	Montant de l’échéance :  '
  }, {
    type: 'editable',
    key: "montant_echeance",
    inputType: 'money',
    hasDefault: false,
    defaultV: "montant_echeance"
  }, {
    type: 'bold',
    content: 'FCFA '
  }, {
    type: 'br'
  }], [{
    type: 'underline',
    content: 'Article 2 : Durée'
  }, {
    type: 'br'
  }, {
    type: 'br'
  }, {
    type: "text",
    content: 'Le Prêt est consenti pour une durée de '
  }, {
    type: 'editable',
    key: 'month',
    inputType: 'number',
    hasDefault: false,
    defaultV: "duree_credit"
  }, {
    type: 'bold',
    content: 'mois.'
  }, {
    type: "text",
    content: 'Le remboursement se fera au moyen de '
  }, {
    type: 'editable',
    key: 'number_echeance',
    inputType: 'number'
  }, {
    type: 'text',
    content: "échéances"
  }, {
    type: 'bold',
    content: 'Mensuelle'
  }, {
    type: 'text',
    content: "dont"
  }, {
    type: 'bold',
    content: "la première échéance sera d’un montant de "
  }, {
    type: 'editable',
    key: 'montant_premiere_echeance',
    inputType: 'money'
  }, {
    type: 'bold',
    content: "FCFA, les "
  }, {
    type: 'editable',
    key: 'ten_echeance',
    inputType: 'money'
  }, {
    type: 'text',
    content: 'échéances suivantes d’un montant successif de '
  }, {
    type: 'editable',
    key: 'ten_montant_echeance',
    inputType: 'money',
    hasDefault: false,
    defaultV: "montant_echeance"
  }, {
    type: 'bold',
    content: "FCFA"
  }, {
    type: 'text',
    content: "et la dernière échéance d’un montant de"
  }, {
    type: 'editable',
    key: 'derniere_montant_echeance',
    inputType: 'money'
  }, {
    type: 'bold',
    content: "FCFA"
  }, {
    type: 'br'
  }, {
    type: 'text',
    content: "La première échéance du prêt est prévue le "
  }, {
    type: 'editable',
    key: "premier_pret_date",
    inputType: 'date'
  }, {
    type: 'text',
    content: "et la dernière échéance est fixée pour le"
  }, {
    type: 'editable',
    key: "dernier_pret_date",
    inputType: 'date'
  }, {
    type: 'text',
    content: "comme il ressort du tableau d’amortissement simplement indicatif joint en annexe."
  }, {
    type: 'br'
  }, {
    type: 'br'
  }, {
    type: 'br'
  }], [{
    type: 'underline',
    content: 'Article 3 : Mise à disposition du Prêt – Comptabilisation'
  }, {
    type: 'br'
  }, {
    type: 'br'
  }, {
    type: 'text',
    content: "Les opérations relatives au remboursement du présent prêt (intérêts et principal) seront retracées dans le compte N° "
  }, {
    type: 'editable',
    key: 'carte_bancaire',
    inputType: 'text',
    placeholder: 'N° du compte bancaire'
  }, {
    type: 'text',
    content: 'domicilié à COFINA'
  }, {
    type: 'editable',
    key: 'filiale_contry',
    inputType: 'text',
    placeholder: "Pays de la filiale",
    hasDefault: false,
    defaultV: "filiale"
  }, {
    type: 'text',
    content: '.'
  }], [{
    type: 'underline',
    content: 'Article 4 : Destination des fonds'
  }, {
    type: 'br'
  }, {
    type: 'br'
  }, {
    type: 'bold',
    content: "4.1"
  }, {
    type: 'text',
    content: 'L’Emprunteur déclare que les fonds sont destinés à des besoins professionnels.'
  }, {
    type: 'br'
  }, {
    type: 'br'
  }, {
    type: 'bold',
    content: "4.2"
  }, {
    type: 'text',
    content: "COFINA "
  }, {
    type: 'editable',
    key: 'filiale_contry',
    inputType: 'text',
    placeholder: "Pays de la filiale",
    hasDefault: false,
    defaultV: "filiale"
  }, {
    type: 'text',
    content: ' pourra toujours, si bon lui semble, se faire remettre toutes justifications nécessaires pour suivre l’utilisation qui aura été ou qui sera faite des fonds du Prêt mais elle ne sera pas tenue de vérifier leur emploi. Si l’institution vient à constater que les fonds ont finalement été utilisés à une fin non conforme à l’objet du Prêt, elle pourra si bon lui semble, mais sans y être aucunement tenue, mettre fin au Prêt et exiger le remboursement anticipé des sommes dues au titre du Prêt. '
  }, {
    type: 'br'
  }, {
    type: 'br'
  }, {
    type: 'br'
  }], [{
    type: 'underline',
    content: 'Article 5 : Intérêts'
  }, {
    type: 'br'
  }, {
    type: 'br'
  }, {
    type: 'bold',
    content: "5.1"
  }, {
    type: 'text',
    content: "L'Emprunteur s'oblige à payer, sur le montant en principal du Prêt non échu, des intérêts en FCFA déterminés sur la base d'un taux fixé à "
  }, {
    type: "editable",
    key: 'taux_interet_ht',
    inputType: 'text',
    placeholder: "Taux d'interêt",
    hasDefault: false,
    defaultV: "taux_interet_ht"
  }, {
    type: 'text',
    content: " %"
  }, {
    type: 'br'
  }, {
    type: 'br'
  }, {
    type: 'bold',
    content: "5.2"
  }, {
    type: 'text',
    content: "Les intérêts seront payables par l'Emprunteur mensuellement sur le capital échu et seront compris dans les remboursements périodiques mentionnés à l'article 6 ci-dessous."
  }, {
    type: 'br'
  }, {
    type: 'br'
  }, {
    type: 'br'
  }], [{
    type: 'underline',
    content: 'Article 6 : Principal'
  }, {
    type: 'br'
  }, {
    type: 'br'
  }, {
    type: 'text',
    content: "L'Emprunteur s'oblige à rembourser le montant en principal du prêt soit"
  }, {
    type: 'editable',
    key: "montant",
    inputType: 'money',
    hasDefault: false,
    defaultV: "montant"
  },
  //   {type : 'montant', key : 'montant_principal', inputType : 'money', hasDefault: false , defaultV: "montant" },
  {
    type: 'text',
    content: 'au moyen de '
  }, {
    type: 'editable',
    key: 'number_echeance',
    inputType: 'number'
  }, {
    type: 'text',
    content: 'échéances '
  }, {
    type: 'bold',
    content: 'Mensuelle  '
  }, {
    type: 'text',
    content: 'dont'
  }, {
    type: 'bold',
    content: 'la première échéance sera d’un montant de'
  }, {
    type: 'editable',
    key: 'remboursement_premier_montant',
    inputType: 'money'
  }, {
    type: 'bold',
    content: 'F CFA, les '
  }, {
    type: 'editable',
    key: 'rembourssement_ten_echeance',
    inputType: 'number'
  }, {
    type: 'bold',
    content: 'échéances suivantes d’un montant successif de '
  }, {
    type: 'editable',
    key: 'rembourssement_ten_montant',
    inputType: 'money'
  }, {
    type: 'bold',
    content: 'F CFA '
  }, {
    type: 'bold',
    content: 'et la dernière échéance d’un montant de  '
  }, {
    type: 'editable',
    key: 'rembourssement_dernier_montant',
    inputType: 'money'
  }, {
    type: 'bold',
    content: 'F CFA '
  }, {
    type: 'text',
    content: "; comprenant la somme nécessaire à l'amortissement du capital et les intérêts au taux stipulé à l'article 5 ci-dessus.  "
  }, {
    type: 'br'
  }], [{
    type: 'underline',
    content: 'Article 7 : Intérêts de retard'
  }, {
    type: 'br'
  }], [{
    type: 'bold',
    content: "7.1 "
  }, {
    type: 'text',
    content: "Toute somme exigible en principal, frais ou accessoires, non payée ou non remboursée par l'Emprunteur au titre de la Convention portera intérêt de plein droit et sans mise en demeure, à compter de sa date d'exigibilité, et jusqu’au jour du paiement ou remboursement effectif. "
  }, {
    type: 'br'
  }], [{
    type: 'bold',
    content: "7.2 "
  }, {
    type: 'text',
    content: "Le taux d'intérêt appliqué sera égal à "
  }, {
    type: 'editable',
    key: 'taux_interet_retard',
    inputType: 'number'
  }, {
    type: 'text',
    content: "% par jour de l'échéance due plus un montant de  "
  }, {
    type: 'editable',
    key: 'montant_forfaitaire',
    inputType: 'money'
  }, {
    type: 'text',
    content: "F CFA forfaitaire. Il sera appliqué dès le 1er jour de retard. "
  }, {
    type: 'br'
  }, {
    type: 'br'
  }, {
    type: 'bold',
    content: "7.3 "
  }, {
    type: 'text',
    content: "Les intérêts, en ce compris les intérêts de retard, porteront eux-mêmes intérêts au taux défini au présent article s'ils sont dus pour une année entière. "
  }, {
    type: 'br'
  }, {
    type: 'br'
  }], [{
    type: 'underline',
    content: 'Article 8 : Garanties et conforts '
  }, {
    type: 'br'
  }, {
    type: 'br'
  }, {
    type: 'text',
    content: "A la sûreté et garantie du remboursement du présent prêt, soit la somme de "
  }, {
    type: 'editable',
    key: 'somme_rembourssement',
    inputType: 'money'
  }, {
    type: 'bold',
    content: 'F CFA'
  }, {
    type: 'text',
    content: "à la garantie de tous intérêts, frais et accessoires, et, d’une manière générale, à la garantie de l’exécution de toutes les obligations du Client résultant du présent acte, le Client confère à COFINA "
  }, {
    type: 'editable',
    key: 'filiale_contry',
    inputType: 'text',
    placeholder: "Pays de la filiale"
  }, {
    type: 'text',
    content: ", qui accepte, les garanties ci-après désignées : "
  }, {
    type: 'br'
  }, {
    type: 'br'
  }, {
    type: 'bold',
    content: "GARANTIES ET SUPPORTS RETENUS "
  }, {
    type: 'br'
  }, {
    type: 'br'
  }, {
    type: 'text',
    content: "•  Souscription à"
  }, {
    type: 'editable',
    key: "number_billet",
    inputType: "number"
  }, {
    type: "text",
    content: 'billets à ordre par l’emprunteur ;'
  }, {
    type: 'br'
  }, {
    type: 'text',
    content: "•  Dépôt de garantie et compte de réserve du service de la dette d’au moins"
  }, {
    type: 'editable',
    key: "montant_min",
    inputType: "money"
  }, {
    type: "text",
    content: 'F CFA représentant '
  }, {
    type: 'editable',
    key: "montant_min_percent",
    inputType: "number"
  }, {
    type: "text",
    content: '% du montant accordé '
  }, {
    type: 'br'
  }, {
    type: 'text',
    content: "•  Gage sur un véhicule particulier en bon état ;"
  }, {
    type: 'br'
  }, {
    type: 'text',
    content: "•	Engagement de domiciliation à hauteur de "
  }, {
    type: 'editable',
    key: "montant_domicialisation",
    inputType: "money"
  }, {
    type: "text",
    content: 'F CFA par semaine ; '
  }, {
    type: 'br'
  }, {
    type: 'text',
    content: "•	Cautionnement personnel et solidaire d'une personne de bonne moralité, et solvable."
  }, {
    type: 'br'
  }, {
    type: 'br'
  },
  // {type : 'list', list : [
  //   {content : 'Souscription à 12 billets à ordre par l’emprunteur ;'},
  //   {content : 'Dépôt de garantie et compte de réserve du service de la dette d’au moins 975 000 F CFA représentant 15% du montant accordé ;'},
  //   {content : 'Gage sur un véhicule particulier en bon état ;'},
  //   {content : 'Engagement de domiciliation à hauteur de 650 000 F CFA par semaine ; '},
  //   {content : "Cautionnement personnel et solidaire d'une personne de bonne moralité, et solvable."}
  // ]},

  {
    type: 'br'
  }, {
    type: 'underline',
    content: 'Condition particulière :'
  }, {
    type: 'br'
  }, {
    type: 'list',
    list: [{
      content: 'Entretien pré-déblocage avec le CAF ou SUP/CA '
    }]
  }], [{
    type: 'text',
    content: "En cas de disparition totale ou partielle de la garantie ou de l'une quelconque des garanties prises au profit de l’institution, pour quelque cause que ce soit, COFINA"
  }, {
    type: 'editable',
    key: 'filiale_contry',
    inputType: 'text',
    placeholder: 'Pays de la filiale',
    hasDefault: false,
    defaultV: "filiale"
  }, {
    type: 'text',
    content: " pourra demander l'exigibilité anticipée de toute somme due par le Client au titre des présentes, si le Client ne fournit pas une nouvelle garantie équivalente dans le mois suivant la date de survenance de l'événement entraînant ou susceptible d'entraîner la disparition de ladite garantie. "
  }], [{
    type: 'text',
    content: "Les garanties qui précèdent s’ajoutent ou s’ajouteront à toutes garanties réelles ou personnelles qui ont pu ou pourront être fournies au profit de COFINA "
  }, {
    type: 'editable',
    key: 'filiale_contry',
    inputType: 'text',
    placeholder: 'Pays de la filiale',
    hasDefault: false,
    defaultV: "filiale"
  }, {
    type: 'text',
    content: " par le Client."
  }], [{
    type: 'text',
    content: "Les garanties qui précèdent s’ajoutent ou s’ajouteront à toutes garanties réelles ou personnelles qui ont pu ou pourront être fournies au profit de COFINA "
  }, {
    type: 'editable',
    key: 'filiale_contry',
    inputType: 'text',
    placeholder: 'Pays de la filiale',
    hasDefault: false,
    defaultV: "filiale"
  }, {
    type: 'text',
    content: "par le Client ou par tous tiers."
  }], [{
    type: 'underline',
    content: 'Article 9 : Exigibilité anticipée'
  }, {
    type: 'br'
  }, {
    type: 'br'
  }, {
    type: 'text',
    content: 'Toutes les sommes dues par le Client à COFINA'
  }, {
    type: 'editable',
    key: 'filiale_contry',
    inputType: 'text',
    placeholder: 'Pays de la filiale',
    hasDefault: false,
    defaultV: "filiale"
  }, {
    type: 'text',
    content: 'au titre du présent contrat seront exigibles par anticipation, immédiatement et de plein droit en cas de :'
  }, {
    type: 'br'
  }, {
    type: 'br'
  }, {
    type: 'text',
    content: "•	Situation du Client irrémédiablement compromise ou comportement gravement répréhensible, ainsi que tous les cas où la loi le permet."
  }, {
    type: 'br'
  }, {
    type: 'text',
    content: "•	Décès du Client"
  }, {
    type: 'br'
  }, {
    type: 'text',
    content: "•	Exclusion par l’institution Centrale de la signature du Client"
  }, {
    type: 'br'
  }, {
    type: 'text',
    content: "•	Affectation du prêt à un objet autre que celui visé à l'article 1 des présentes"
  }, {
    type: 'br'
  }, {
    type: 'text',
    content: "•	Si les garanties énumérées à l’article « Garanties », dont COFINA "
  }, {
    type: 'editable',
    key: 'filiale_contry',
    inputType: 'text',
    placeholder: 'Pays de la filiale',
    hasDefault: false,
    defaultV: "filiale"
  }, {
    type: 'text',
    content: " doit bénéficier pour sûreté du présent prêt n’étaient pas constituées ou maintenues ou si les garanties ne venaient pas au rang convenu "
  }, {
    type: 'br'
  }, {
    type: 'text',
    content: "•	Non réalisation à première demande de COFINA "
  }, {
    type: 'editable',
    key: 'filiale_contry',
    inputType: 'text',
    placeholder: 'Pays de la filiale',
    hasDefault: false,
    defaultV: "filiale"
  }, {
    type: 'text',
    content: " des promesses de garanties dont il est fait état à l’article « Garanties »"
  }, {
    type: 'br'
  }, {
    type: 'text',
    content: "•	Au cas où plus généralement le Client n'exécuterait pas l'une quelconque de ses obligations résultant du présent contrat et s’il n’y était pas remédié."
  }], [{
    type: 'underline',
    content: 'Article 10 : Divers'
  }, {
    type: 'br'
  }, {
    type: 'br'
  }, {
    type: 'bold',
    content: "10.1  "
  }, {
    type: 'text',
    content: "En aucun cas, l'Emprunteur ne pourra opposer à COFINA"
  }, {
    type: 'editable',
    key: 'filiale_contry',
    inputType: 'text',
    placeholder: 'Pays de la filiale',
    hasDefault: false,
    defaultV: "filiale"
  }, {
    type: 'text',
    content: ", dans le cadre de la présente Convention, des réclamations ou des exceptions quelles qu'elles soient, tirées de toute autre convention la liant avec elle. "
  }], [{
    type: 'bold',
    content: "10.1  "
  }, {
    type: 'text',
    content: "En aucun cas, l'Emprunteur ne pourra opposer à COFINA"
  }, {
    type: 'editable',
    key: 'filiale_contry',
    inputType: 'text',
    placeholder: 'Pays de la filiale',
    hasDefault: false,
    defaultV: "filiale"
  }, {
    type: 'text',
    content: ", dans le cadre de la présente Convention, des réclamations ou des exceptions quelles qu'elles soient, tirées de toute autre convention la liant avec elle. "
  }], [{
    type: 'bold',
    content: "10.2 "
  }, {
    type: 'text',
    content: "Le fait que n'exerce pas l’un quelconque de ses droits au titre de la Convention, de même que tout délai apporté par COFINA "
  }, {
    type: 'editable',
    key: 'filiale_contry',
    inputType: 'text',
    placeholder: 'Pays de la filiale',
    hasDefault: false,
    defaultV: "filiale"
  }, {
    type: 'text',
    content: "dans l’exercice desdits droits ne vaudra pas abandon de ceux-ci. De même, l'exercice partiel d'un droit ou d'une seule des voies de droit mis à la disposition de COFINA "
  }, {
    type: 'editable',
    key: 'filiale_contry',
    inputType: 'text',
    placeholder: 'Pays de la filiale',
    hasDefault: false,
    defaultV: "filiale"
  }, {
    type: 'text',
    content: "n'interdira pas à cette dernière d'exercer totalement ses droits ou d'épuiser toutes les voies de droit mises à sa disposition."
  }], [{
    type: 'bold',
    content: "10.3"
  }, {
    type: 'text',
    content: "Tous préavis, avis, accords ou communications relatifs aux présentes devront être envoyés en langue française par courrier recommandé ou transmis par porteur avec cahier de transmission, ou par télécopie suivie d'une confirmation courrier. "
  }],
  // [
  //   {type : 'blank'}
  // ],
  [{
    type: 'bold',
    content: "10.4 "
  }, {
    type: 'text',
    content: "Au cas où l’une quelconque des dispositions de la Convention deviendrait ou serait déclarée nulle, interdite ou sans effet, la validité des autres dispositions de la Convention n’en serait pour autant pas remise en question, pour autant que l’objet principal de la Convention puisse être déterminé et réalisé. "
  }], [{
    type: 'bold',
    content: "10.5 "
  }, {
    type: 'text',
    content: "L’Emprunteur paiera et indemnisera COFINA "
  }, {
    type: 'editable',
    key: 'filiale_contry',
    inputType: 'text',
    placeholder: 'Pays de la filiale',
    hasDefault: false,
    defaultV: "filiale"
  }, {
    type: 'text',
    content: "outre toute taxe, de tout droit de timbre ou tout autre impôt imposé par quelque autorité nationale ou supranationale qui pourrait être exigible ou déclaré tel à l’occasion de la signature, de l’application ou l’exécution des présentes, et notamment les frais d’enregistrement et de timbres. "
  }], [{
    type: 'underline',
    content: 'Article 11 : Remboursement anticipé'
  }, {
    type: 'br'
  }, {
    type: 'br'
  }, {
    type: 'text',
    content: "En cas de remboursement par anticipation COFINA  "
  }, {
    type: 'editable',
    key: 'filiale_contry',
    inputType: 'text',
    placeholder: 'Pays de la filiale',
    hasDefault: false,
    defaultV: "filiale"
  }, {
    type: 'text',
    content: "se réserve la faculté d’appliquer une pénalité de "
  }, {
    type: 'editable',
    key: 'taux_penalite',
    inputType: 'number',
    placeholder: 'Taux de la pénalité'
  }, {
    type: 'text',
    content: "% HT + "
  }, {
    type: "editable",
    key: "tva",
    inputType: "number",
    placeholder: "Taux TVA"
  }, {
    type: 'text',
    content: "% de TVA sur l’encours restant dû par le client. "
  }], [{
    type: 'underline',
    content: 'Article 12 : Cession'
  }, {
    type: 'br'
  }, {
    type: 'br'
  }, {
    type: 'text',
    content: "COFINA  "
  }, {
    type: 'editable',
    key: 'filiale_contry',
    inputType: 'text',
    placeholder: 'Pays de la filiale',
    hasDefault: false,
    defaultV: "filiale"
  }, {
    type: 'text',
    content: "pourra céder ses droits et obligations en vertu du présent contrat de Prêt. "
  }], [{
    type: 'text',
    content: "En cas de survenance d’une telle éventualité, COFINA  "
  }, {
    type: 'editable',
    key: 'filiale_contry',
    inputType: 'text',
    placeholder: 'Pays de la filiale',
    hasDefault: false,
    defaultV: "filiale"
  }, {
    type: 'text',
    content: "s’engage à ce que la cession n’entraine aucun coût supplémentaire pour l’Emprunteur."
  }], [{
    type: 'underline',
    content: 'Article 13 : Impôts et frais'
  }, {
    type: 'br'
  }, {
    type: 'br'
  }, {
    type: 'text',
    content: "Tous impôts ou taxes quelconques présents et à venir sur le principal ou les intérêts des sommes qui pourront être dues par le client seront à sa charge, y compris ceux dont COFINA  "
  }, {
    type: 'editable',
    key: 'filiale_contry',
    inputType: 'text',
    placeholder: 'Pays de la filiale',
    hasDefault: false,
    defaultV: "filiale"
  }, {
    type: 'text',
    content: "sera légalement redevable. Tous les frais engagés par COFINA "
  }, {
    type: 'editable',
    key: 'filiale_contry',
    inputType: 'text',
    placeholder: 'Pays de la filiale',
    hasDefault: false,
    defaultV: "filiale"
  }, {
    type: 'text',
    content: "pour la mise en place du présent contrat et son exécution, notamment en cas de défaut, seront à la charge du Client. Il en sera de même de tous frais, honoraires engagés par COFINA "
  }, {
    type: 'editable',
    key: 'filiale_contry',
    inputType: 'text',
    placeholder: 'Pays de la filiale',
    hasDefault: false,
    defaultV: "filiale"
  }, {
    type: 'text',
    content: "en vue du recouvrement des sommes due par le Client. "
  }], [{
    type: 'underline',
    content: 'Article 14 : Réclamation-Service client'
  }, {
    type: 'br'
  }, {
    type: 'br'
  }, {
    type: 'text',
    content: "Toute réclamation doit être formulée auprès du Service Client par téléphone au "
  }, {
    type: 'editable',
    key: 'telephone_service',
    inputType: 'tel'
  }, {
    type: 'text',
    content: "ou par mail à l’adresse suivante   "
  }, {
    type: 'editable',
    key: 'mail_service',
    inputType: 'text'
  }], [{
    type: 'blank'
  }], [{
    type: 'text',
    content: "Toute réclamation formulée recevra un accusé de réception et une réponse sera apportée soit dans l’immédiat soit le chargé de clientèle annoncera le délai dans lequel il s’engage à apporter une réponse, étant précisé que ce délai de traitement ne peut excéder un mois, hors cas de force majeure conformément aux articles 5 et suivants de la circulaire n°002/2020/CB/C relative au traitement des réclamations clients et des établissements assujettis au contrôle de la Commission Bancaire de l’UMOA."
  }], [{
    type: 'text',
    content: "La réponse sera communiquée au client soit par téléphone, soit par courriel. "
  }], [{
    type: 'text',
    content: "Si toutefois le client estime que la réponse obtenue à sa réclamation n’est pas satisfaisante ou qu’elle ne lui a pas été apportée dans les délais ci-dessus, il peut alors formuler, par écrit, un recours auprès de la Commission Bancaire."
  }], [{
    type: 'underline',
    content: 'Article 15 : Droit applicable et attribution de compétence'
  }, {
    type: 'br'
  }, {
    type: 'br'
  }], [{
    type: 'bold',
    content: "15.1 "
  }, {
    type: 'text',
    content: "Contrat est régi par le droit "
  }, {
    type: 'editable',
    key: 'pays_droit_convention',
    inputType: 'text',
    placeholder: 'Nom du pays',
    hasDefault: false,
    defaultV: "nationalite"
  }], [{
    type: 'bold',
    content: "15.2 "
  }, {
    type: 'text',
    content: "Tout litige qui pourrait naître de l’interprétation et/ou de l’exécution du Contrat, qui n’aura pas été réglé à l’amiable, sera de la compétence du tribunal de"
  }, {
    type: 'editable',
    key: "tribunal",
    inputType: "text",
    placeholder: "Nom du tribunal",
    hasDefault: false,
    defaultV: "capitale"
  }, {
    type: 'text',
    content: '.'
  }], [{
    type: 'blank'
  }], [{
    type: 'text',
    content: "Fait à "
  }, {
    type: "editable",
    key: 'lieu_signature',
    inputType: "text",
    placeholder: "Lieu de signature"
  }, {
    type: "text",
    content: 'le'
  }, {
    type: "editable",
    key: "date_signature",
    inputType: 'date',
    hasDefault: false,
    defaultV: "now"
  }, {
    type: "text",
    content: "En deux (02) exemplaires"
  }], [{
    type: "table",
    columns: [{
      content: "POUR  COFINA  ",
      width: 40,
      subcontent: "(Signature)",
      input: true,
      key: 'filiale_contry',
      inputType: 'text',
      placeholder: 'Pays de la filiale',
      hasDefault: false,
      defaultV: "filiale",
      style: {
        marginLeft: '15px'
      }
    }, {
      content: "",
      width: 30,
      subcontent: ""
    }, {
      content: "POUR L'EMPRUNTEUR** ",
      width: 30,
      subcontent: "(Signature)"
    }]
  }], [{
    type: 'br'
  }, {
    type: 'text',
    content: "* Le taux des intérêts de retard peut varier en fonction des conditions générales de ventes",
    style: {
      fontStyle: 'italic',
      marginTop: '200px',
      display: 'block'
    }
  }, {
    type: 'text',
    content: "**Faire précéder la signature de la mention « Lu et approuvé »",
    style: {
      fontStyle: 'italic'
    }
  }]]
});

/***/ })

}]);