"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_offview_microfinance_cofina_convention_cofina_Pret-conv-restructuration_js"],{

/***/ "./resources/js/components/offview/microfinance/cofina/convention/cofina/Pret-conv-restructuration.js":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/offview/microfinance/cofina/convention/cofina/Pret-conv-restructuration.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  Title: "CONTRAT DE PRET",
  paragraphs: [[{
    type: "text",
    content: "Entre les soussignés :"
  }, {
    type: 'br'
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
    content: ",dans la Comune de "
  }, {
    type: "editable",
    key: "nom_commune",
    inputType: "text",
    placeholder: "Nom de la commune",
    hasDefault: false,
    defaultV: "nom_commune"
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
    defaultV: 'filiale_telephone'
  }, {
    type: 'text',
    content: '; '
  }, {
    type: 'br'
  }, {
    type: "text",
    content: 'Représentée par '
  }, {
    type: 'editable',
    inputType: "select",
    key: "titre_representant",
    options: ["Monsieur ", "Madame "],
    placeholder: "Titre du représentant",
    hasDefault: false,
    defaultV: "empty"
  }, {
    type: 'text',
    content: " "
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
  }, {
    type: 'br'
  }], [{
    type: 'text',
    content: "ET"
  }, {
    type: 'br'
  }], [{
    type: "text",
    content: "La Société"
  }, {
    type: 'editable',
    key: 'Emprunter_country',
    inputType: 'text',
    placeholder: 'Pays de la filiale',
    hasDefault: false,
    defaultV: "emprunter"
  }, {
    type: 'editable',
    key: 'entreprise',
    inputType: 'text',
    placeholder: 'Nom de la filiale',
    hasDefault: false,
    defaultV: "entreprise"
  }, {
    type: 'text',
    content: ', société à responsabilité limitée au capital social de '
  }, {
    type: 'editable',
    key: 'emprunter_capital',
    inputType: 'money',
    placeholder: 'Capitalisation',
    hasDefault: false,
    defaultV: "filiale_capital"
  }, {
    type: 'text',
    content: "FCFA , immatriculée au registre du commerce et du crédit mobilier sous le numéro "
  }, {
    type: 'editable',
    key: 'registre',
    inputType: 'text',
    placeholder: 'Numéro de registre',
    hasDefault: false,
    defaultV: "registre"
  }, {
    type: 'text',
    content: ', ayant son siège social à '
  }, {
    type: 'editable',
    key: 'siege_enprunteur',
    inputType: 'text',
    placeholder: 'Siège social',
    hasDefault: false,
    defaultV: "siege_enprunteur"
  }, {
    type: 'text',
    content: ', de '
  }, {
    type: 'editable',
    key: 'code_emprunteur',
    inputType: 'text',
    placeholder: 'Code postal',
    hasDefault: false,
    defaultV: "code_emprunter"
  }, {
    type: 'text',
    content: ", Tel : ",
    placeholder: 'Numéro de téléphone'
  }, {
    type: 'editable',
    key: 'filiale_telephone_emprunter',
    inputType: 'tel',
    placeholder: 'téléphone de la filiale',
    hasDefault: false,
    defaultV: 'filiale_telephone_emprunter'
  }, {
    type: 'br'
  }, {
    type: "text",
    content: 'Représentée par '
  }, {
    type: 'editable',
    inputType: "select",
    key: "titre_empreteur",
    options: ["Monsieur ", "Madame "],
    placeholder: "Titre du représentant",
    hasDefault: false,
    defaultV: "empty"
  }, {
    type: 'text',
    content: " "
  }, {
    type: 'editable',
    key: "nom_du_representant",
    inputType: "text",
    placeholder: "Nom répresentant",
    hasDefault: false,
    defaultV: "nom_g"
  }, {
    type: "text",
    content: ", agissant en sa qualité de gerant,"
  }, {
    type: "br"
  }], [{
    type: 'text',
    content: "Ci-après désignée << l' "
  }, {
    type: 'bold',
    content: "Emprunteur"
  }, {
    type: 'text',
    content: " >>"
  }], [{
    type: 'bold',
    content: "Il a été convenu et arrêté ce qui suit :"
  }, {
    type: 'br'
  }, {
    type: 'underline',
    content: 'Exposé préalable :'
  }, {
    type: 'br'
  }, {
    type: 'bold',
    content: "COFINA "
  }, {
    type: 'editable',
    key: "filiale_contry",
    inputType: "text",
    placeholder: 'Pays de la filiale',
    hasDefault: false,
    defaultV: "filiale"
  }, {
    type: 'text',
    content: " et "
  }, {
    type: 'bold',
    content: "l'Emprunteur "
  }, {
    type: 'text',
    content: "sont convenus dès avant ce jour que le compte N°"
  }, {
    type: 'editable',
    key: "compte",
    inputType: 'text',
    hasDefault: false,
    placeholder: 'Numéro de compte',
    defaultV: "compte"
  }, {
    type: 'text',
    content: " et tous comptes ouverts ou à ouvrir, tant au siège que dans les Agences de "
  }, {
    type: 'bold',
    content: "COFINA "
  }, {
    type: 'editable',
    key: "filiale_contry",
    inputType: "text",
    placeholder: 'Pays de la filiale',
    hasDefault: false,
    defaultV: "filiale"
  }, {
    type: 'bold',
    content: "SA,"
  }, {
    type: 'text',
    content: " constituent un compte courant unique produisant tous les effets légaux et usuels du compte courant et transformant toutes les opérations en simples articles de crédit et le débit, générateurs lors de la clôture, d'un solde qui fera seul apparaître une créance ou une dette exigible. "
  }, {
    type: "br"
  }, {
    type: 'bold',
    content: "L"
  }, {
    type: 'text',
    content: "'ouverture de plusieurs comptes constitue une distinction purement matérielle pour la clarté des écritures, ceux-ci peuvent à la convenance des parties, être supprimés à tout moment sans avis préalable."
  }, {
    type: "br"
  }], [{
    type: 'text',
    content: "Cette convention de compte courant constitue une condition essentielle à l'attribution des crédits qui pourraient être octroyés par "
  }, {
    type: 'bold',
    content: "COFINA"
  }, {
    type: 'editable',
    key: "filiale_contry",
    inputType: 'text',
    hasDefault: false,
    placeholder: "Pays de la filiale",
    defaultV: "filiale"
  }, {
    type: 'text',
    content: ", en conséquence, les garanties particulières qui pourraient être affectées à une créance quelconque entrant dans le compte courant s'appliquent au solde de ce compte."
  }, {
    type: 'bold',
    content: "COFINA"
  }, {
    type: 'editable',
    key: "filiale_contry",
    inputType: 'text',
    hasDefault: false,
    placeholder: "Pays de la filiale",
    defaultV: "filiale"
  }, {
    type: 'text',
    content: " est autorisée à passer d'office au débit du compte courant, et sur simple avis, le montant en principal et accessoires de tous effets de commerce échus et impayés portant la signature de l'emprunteur comme signataire, accepteur, endosseur ou avaliste, alors même que ces effets auraient été négociés par des tiers et hors l'intervention de l’emprunteur."
  }, {
    type: 'text',
    content: "Il est précisé que, sauf convention contraire expressément constatée par écrit, toutes opérations traitées entre l'emprunteur et "
  }, {
    type: 'bold',
    content: "COFINA"
  }, {
    type: 'editable',
    key: "filiale_contry",
    inputType: 'text',
    hasDefault: false,
    defaultV: "filiale",
    placeholder: "Pays de la filiale"
  }, {
    type: 'text',
    content: " seront, de plein droit, incluses dans le compte courant sus énoncé."
  }, {
    type: "br"
  }], [{
    type: 'text',
    content: "De même le compte courant comprendra les créances éventuelles, telles notamment que les recours susceptibles d'être exercés par "
  }, {
    type: 'bold',
    content: "COFINA"
  }, {
    type: 'editable',
    key: "filiale_contry",
    inputType: 'text',
    hasDefault: false,
    defaultV: "filiale",
    placeholder: "Pays de la filiale"
  }, {
    type: 'text',
    content: " si elle s'était portée caution ou avaliste de l’Emprunteur avant la clôture du compte."
  }, {
    type: "br"
  }, {
    type: 'text',
    content: "En conséquence, "
  }, {
    type: 'bold',
    content: "COFINA"
  }, {
    type: 'editable',
    key: "filiale_contry",
    inputType: 'text',
    hasDefault: false,
    defaultV: "filiale",
    placeholder: "Pays de la filiale"
  }, {
    type: 'text',
    content: " est dès maintenant autorisée à inscrire d'office au débit du compte de l’emprunteur toutes sommes que cette dernière pourrait lui devoir en principal, plus tous intérêts, commissions, frais et accessoires, quelles que soient l'origine et la nature desdites créances, même si la cause en était antérieure à ce jour."
  }, {
    type: "br"
  }, {
    type: "text",
    content: "Rentrent donc dans le compte courant notamment et sans que cette \xE9nonciation soit limitative :"
  }, {
    type: "br"
  }, {
    type: "bold",
    content: "   •  Toutes avances et facilités quelconques ;"
  }, {
    type: "br"
  }, {
    type: "bold",
    content: "   \u2022   Tous escomptes d'effets commerciaux portant \xE0 un titre quelconque la signature de l\u2019emprunteur ;"
  }, {
    type: "br"
  }, {
    type: "bold",
    content: "   \u2022   Toutes avances sur produits, sur marchandises ou sur cr\xE9ances \xE0 l'encontre de l\u2019Administration ;"
  }, {
    type: "br"
  }, {
    type: "bold",
    content: "   \u2022\tToutes cautions et avals fournis par "
  }, {
    type: "bold",
    content: "COFINA"
  }, {
    type: "bold",
    content: " auprès de qui que ce soit."
  }, {
    type: 'br'
  }], [{
    type: 'bold',
    content: 'Article 1 : '
  }, {
    type: "text",
    content: "Objet"
  }], [{
    type: "text",
    content: "Sous réserve de la réalisation des conditions préalables visées à l'article 8 ci-après, "
  }, {
    type: "bold",
    content: "COFINA "
  }, {
    type: 'editable',
    key: "filiale_contry",
    inputType: 'text',
    hasDefault: false,
    defaultV: "filiale",
    placeholder: "Pays de la filiale"
  }, {
    type: "text",
    content: " consent à l'Emprunteur, qui accepte et s'engage à en exécuter les termes, conditions et modalités telles que définies ci-après,"
  }, {
    type: 'editable',
    key: 'concours',
    inputType: 'text',
    hasDefault: false,
    defaultV: "type_de_concours"
  }, {
    type: 'text',
    content: " aux caractéristiques suivantes :"
  }, {
    type: 'br'
  }, {
    type: "underline",
    content: "Objet du financement :"
  }, {
    type: 'editable',
    key: 'objet_financement',
    inputType: 'text',
    hasDefault: false,
    defaultV: "objet_financement",
    placeholder: "objet financement"
  }, {
    type: "text",
    content: "Type de concours : "
  }, {
    type: 'editable',
    key: "concours",
    inputType: 'text',
    hasDefault: false,
    defaultV: "type_de_concours"
  }, {
    type: 'bold',
    content: '   •	Montant :'
  }, {
    type: 'editable',
    key: "montant",
    inputType: 'money',
    hasDefault: false,
    defaultV: "montant"
  }, {
    type: "text",
    content: " FCFA"
  }, {
    type: 'br'
  }, {
    type: 'bold',
    content: '   •	Durée  :'
  }, {
    type: 'editable',
    key: "mois",
    inputType: 'number',
    hasDefault: false,
    defaultV: "duree_credit"
  }, {
    type: 'text',
    content: 'mois de différé'
  }], [{
    type: 'bold',
    content: '   •	Périodicité  de remboursement :'
  }, {
    type: 'editable',
    key: "periodicite",
    inputType: 'text',
    hasDefault: false,
    defaultV: "periodicite"
  }, {
    type: 'br'
  }, {
    type: "bold",
    content: "   \u2022  Taux d\u2019int\xE9r\xEAt : "
  }, {
    type: "editable",
    key: "taux_interet_ht",
    inputType: "number",
    placeholder: "Taux d'intérêt HT",
    hasDefault: false,
    defaultV: "taux_interet_ht"
  }, {
    type: "text",
    content: "HT mensuel d\xE9gressif  +"
  }, {
    type: "editable",
    key: "tva",
    inputType: "number",
    placeholder: "Taux TVA",
    hasDefault: false,
    defaultV: "tva"
  }, {
    type: "text",
    content: "% TVA"
  }, {
    type: 'br'
  }, {
    type: "bold",
    content: "   \u2022  Frais de dossier :  "
  }, {
    type: "editable",
    key: "frais_dossier",
    inputType: "money",
    placeholder: "Frais de dossier",
    hasDefault: false,
    defaultV: "frais_dossier"
  }, {
    type: "text",
    content: "FCFA HT (soit "
  }, {
    type: "editable",
    key: "pourcent_montant_accorde_frais_dossier",
    inputType: "number",
    placeholder: "Pourcent montant accorde"
  }, {
    type: "text",
    content: "% TTC du montant accord\xE9)"
  }, {
    type: 'br'
  }, {
    type: "bold",
    content: "   \u2022  Prime de risque + primes d\u2019assurance  :  "
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
  }, {
    type: 'bold',
    content: '   •	TEG : '
  }, {
    type: 'editable',
    key: "pourcentage_TEG",
    inputType: 'number',
    placeholder: "Pourcent montant accorde",
    hasDefault: false,
    defaultV: "pourcent_TEG"
  }, {
    type: "text",
    content: '%'
  }, {
    type: 'br'
  }], [{
    type: "bold",
    content: "Article 2 : "
  }], [{
    type: 'text',
    content: 'Durée'
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
    content: 'Le remboursement conformément au tableau d’amortissement annexé au présent contrat.'
  }, {
    type: "br"
  }], [{
    type: "bold",
    content: "Article 3 : "
  }, {
    type: 'text',
    content: 'Mise à disposition du Prêt – Comptabilisation'
  }], [{
    type: 'text',
    content: "Les opérations relatives au remboursement du présent prêt (intérêts et principal) seront retracées dans le compte N° "
  }, {
    type: 'editable',
    key: "compte",
    inputType: 'text',
    hasDefault: false,
    placeholder: 'Numéro de compte',
    defaultV: "compte"
  }, {
    type: 'text',
    content: 'domicilié à '
  }, {
    type: 'bold',
    content: "COFINA"
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
  }, {
    type: 'br'
  }], [{
    type: "bold",
    content: "Article 4 : "
  }], [{
    type: 'text',
    content: 'Destination des fonds'
  }, {
    type: 'br'
  }, {
    type: 'br'
  }, {
    type: 'bold',
    content: "4.1"
  }, {
    type: 'text',
    content: "L’Emprunteur déclare que les fonts sont "
  }, {
    type: 'editable',
    key: 'objet_financement',
    inputType: 'text',
    hasDefault: false,
    defaultV: "marchandise",
    placeholder: "objet_financement"
  }, {
    type: 'br'
  }, {
    type: 'br'
  }, {
    type: 'bold',
    content: "4.2"
  }, {
    type: 'bold',
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
  }], [{
    type: "bold",
    content: "Article 5 : "
  }, {
    type: 'text',
    content: 'Intérêts'
  }, {
    type: 'br'
  }, {
    type: 'bold',
    content: "5.1"
  }, {
    type: 'text',
    content: "L'Emprunteur s'oblige à payer, sur le montant en principal du Prêt non échu, des intérêts en FCFA déterminés sur la base d'un taux dégressif fixé à "
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
    type: 'bold',
    content: " HT mensuel +"
  }, {
    type: "editable",
    key: 'tva',
    inputType: 'number',
    placeholder: "Taux TVA",
    hasDefault: false,
    defaultV: "taux TVA"
  }, {
    type: "bold",
    content: "% de TVA"
  }], [{
    type: 'bold',
    content: "5.2"
  }, {
    type: 'text',
    content: "Les intérêts seront payables par l'Emprunteur mensuellement sur le capital échu et seront compris dans les remboursements périodiques mentionnés à l'article 6 ci-dessous."
  }], [{
    type: "bold",
    content: "Article 6 : "
  }], [{
    type: 'text',
    content: 'Principal'
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
  }, {
    type: 'text',
    content: "majoré des intérêts au taux stipulé à l'article 5 ci-dessus."
  }], [{
    type: "bold",
    content: "Article 7 : "
  }, {
    type: 'text',
    content: 'Intérêts de retard'
  }], [{
    type: 'bold',
    content: "7.1 "
  }, {
    type: 'text',
    content: "Toute somme exigible en principal, frais ou accessoires, non payée ou non remboursée par l'Emprunteur au titre de la Convention portera intérêt de plein droit et sans mise en demeure, à compter de sa date d'exigibilité, et jusqu’au jour du paiement ou remboursement effectif. "
  }, {
    type: 'br'
  }, {
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
    content: "% par jour du montant dû plus un montant de "
  }, {
    type: 'editable',
    key: 'montant_forfaitaire',
    inputType: 'money'
  }, {
    type: 'text',
    content: "F forfaitaire.*"
  }, {
    type: 'br'
  }, {
    type: 'bold',
    content: "7.3 "
  }, {
    type: 'text',
    content: "Les intérêts, en ce compris les intérêts de retard, porteront eux-mêmes intérêts au taux défini au présent article s'ils sont dus pour une année entière. "
  }], [{
    type: "bold",
    content: "Article 8 : "
  }, {
    type: 'text',
    content: 'Garanties et conforts '
  }], [{
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
    content: "à la garantie de tous intérêts, frais et accessoires, et, d’une manière générale, à la garantie de l’exécution de toutes les obligations du Client résultant du présent acte, le Client confère à "
  }, {
    type: 'bold',
    content: "COFINA "
  }, {
    type: 'editable',
    key: 'filiale_contry',
    inputType: 'text',
    placeholder: "Pays de la filiale"
  }, {
    type: 'text',
    content: ", qui accepte, les garanties ci-après désignées : "
  }, {
    type: 'text',
    content: "   •  Souscription à"
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
    content: "   •  Dépôt de garantie et compte de réserve du service de la dette(DG + CRSD) d'au moins "
  }, {
    type: 'editable',
    key: "montant",
    inputType: "money"
  }, {
    type: "text",
    content: 'FCFA,représentant  '
  }, {
    type: 'editable',
    key: "montant_min_percent",
    inputType: "number"
  }, {
    type: "text",
    content: '% du montant accordé '
  }, {
    type: 'text',
    content: "   •  Maintien du cautionnement hypothécaire ferme de 1er rang  à hauteur de "
  }, {
    type: 'editable',
    key: "montant",
    inputType: "money",
    hasDefault: false,
    defaultV: "montant"
  }, {
    type: "text",
    content: 'FCFA sur un terrain bâti situé à '
  }, {
    type: 'editable',
    key: 'lieu_du_bien',
    inputType: 'text',
    placeholder: 'lieu du bien',
    hasDefault: false
  }, {
    type: "text",
    content: "ou environs (déjà formalisée dans nos livres et élargi à ce prêt )"
  }, {
    type: "text",
    content: " •  Cautionnement personnel et solidaire du gérant"
  }, {
    type: 'br'
  }, {
    type: 'text',
    content: "•	Engagement de domiciliation  d'au moins "
  }, {
    type: 'editable',
    key: "montant_domicialisation",
    inputType: "money"
  }, {
    type: "text",
    content: 'FCFA des recettes par semaine dans nos livres.'
  }], [{
    type: 'underline',
    content: 'Condition particulière :'
  }], [{
    type: "text",
    content: "•	Solder le prêt en cours du client à la mise en place du présent financement"
  }, {
    type: 'text',
    content: "•	Sensibiliser le client sur le respect de l’engagement de domiciliation."
  }, {
    type: 'text',
    content: "•	Entretien pré-déblocage entre le client, le CA et le CAF."
  }, {
    type: 'text',
    content: "•	TF à établir avec cantonnement des frais nécessaires ; "
  }], [{
    type: "text",
    content: "Les fonds seront débloqués après la formalisation effective des garanties ci-dessus listées. "
  }, {
    type: "br"
  }, {
    type: "br"
  }, {
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
    type: "bold",
    content: "Article 9 : "
  }, {
    type: 'br'
  }, {
    type: 'text',
    content: 'Exigibilité anticipée'
  }, {
    type: 'text',
    content: 'Toutes les sommes dues par le Client à '
  }, {
    type: "bold",
    content: "COFINA "
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
  }], [{
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
    type: "bold",
    content: "Article 10 : "
  }, {
    type: 'text',
    content: 'Divers'
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
    content: "10.2 "
  }, {
    type: 'text',
    content: "Le fait que n'exerce pas l’un quelconque de ses droits au titre de la Convention, de même que tout délai apporté par "
  }, {
    type: "bold",
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
    content: "dans l’exercice desdits droits ne vaudra pas abandon de ceux-ci. De même, l'exercice partiel d'un droit ou d'une seule des voies de droit mis à la disposition de "
  }, {
    type: "bold",
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
    content: "n'interdira pas à cette dernière d'exercer totalement ses droits ou d'épuiser toutes les voies de droit mises à sa disposition."
  }], [{
    type: 'bold',
    content: "10.3"
  }, {
    type: 'text',
    content: "Tous préavis, avis, accords ou communications relatifs aux présentes devront être envoyés en langue française par courrier recommandé ou transmis par porteur avec cahier de transmission, ou par télécopie suivie d'une confirmation courrier. "
  }], [{
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
    content: "L’Emprunteur paiera et indemnisera "
  }, {
    type: "bold",
    content: "COFINA "
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
    content: "En cas de remboursement par anticipation  "
  }, {
    type: "bold",
    content: "COFINA "
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
    type: "bold",
    content: "Article 12 : "
  }, {
    type: 'text',
    content: 'Cession'
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
    type: "bold",
    content: "Article 13 : "
  }, {
    type: 'text',
    content: 'Impôts et frais'
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
    type: "bold",
    content: "Article 14 : "
  }, {
    type: 'underline',
    content: 'Réclamation-Service client'
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
    inputType: 'text'
  }, {
    type: 'text',
    content: "ou par mail à l’adresse suivante   "
  }, {
    type: 'editable',
    key: 'mail_service',
    inputType: 'text'
  }, {
    type: 'br'
  }, {
    type: 'text',
    content: "Toute réclamation formulée recevra un accusé de réception et une réponse sera apportée soit dans l’immédiat soit le chargé de clientèle annoncera le délai dans lequel il s’engage à apporter une réponse, étant précisé que ce délai de traitement ne peut excéder un mois, hors cas de force majeure conformément aux articles 5 et suivants de la circulaire n°002/2020/CB/C relative au traitement des réclamations clients et des établissements assujettis au contrôle de la Commission Bancaire de l’UMOA."
  }, {
    type: 'br'
  }, {
    type: 'text',
    content: "La réponse sera communiquée au client soit par téléphone, soit par courriel. "
  }, {
    type: 'br'
  }], [{
    type: 'text',
    content: "Si toutefois le client estime que la réponse obtenue à sa réclamation n’est pas satisfaisante ou qu’elle ne lui a pas été apportée dans les délais ci-dessus, il peut alors formuler, par écrit, un recours auprès de la Commission Bancaire."
  }], [{
    type: "bold",
    content: "Article 15 : "
  }, {
    type: 'text',
    content: 'Droit applicable et attribution de compétence'
  }, {
    type: 'br'
  },
  // ],
  // [
  {
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
  }, {
    type: 'br'
  }, {
    type: 'bold',
    content: "15.2 "
  }, {
    type: 'text',
    content: "Tout litige qui pourrait naître de l’interprétation et/ou de l’exécution du Contrat, qui n’aura pas été réglé à l’amiable, sera de la compétence du tribunal "
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
    type: "right_block",
    content: [{
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
      type: "br"
    }, {
      type: "text",
      content: "En deux (02) exemplaires"
    }]
  }, {
    type: 'br'
  }, {
    type: "table",
    columns: [{
      content: "POUR  COFINA  ",
      width: 40,
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
      content: "POUR L'EMPRUNTEUR* ",
      width: 30
    }]
  }, {
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