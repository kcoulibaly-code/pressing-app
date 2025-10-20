"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_offview_microfinance_cofina_convention_cofina_NANTISSEMENT-CONV_js"],{

/***/ "./resources/js/components/offview/microfinance/cofina/convention/cofina/NANTISSEMENT-CONV.js":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/offview/microfinance/cofina/convention/cofina/NANTISSEMENT-CONV.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// JavaScript file for Nantissement de fonds de commerce et de stock
// Template Name: NANTISSEMENT-CONV

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Nantissement de fonds de commerce et de stock",
  pageHeight: 0.7,
  paragraphs: [[{
    type: 'underline',
    content: "ENTRE-LES SOUSSIGNES :"
  }, {
    type: 'br'
  }], [{
    type: "bold",
    content: "Compagnie Financière Africaine"
  }, {
    type: "editable",
    key: "pays_filiale",
    inputType: "text",
    placeholder: "Pays de la filiale",
    hasDefault: false,
    defaultV: "filiale"
  }, {
    type: "bold",
    content: "S.A,"
  }, {
    type: "text",
    content: "en abrégé COFINA "
  }, {
    type: "editable",
    key: "pays_filiale",
    inputType: "text",
    placeholder: "Pays de la filiale",
    hasDefault: false,
    defaultV: "filiale"
  }, {
    type: "text",
    content: ", société anonyme avec Conseil d’Administration au capital social de  "
  }, {
    type: "editable",
    key: "capital_social_filiale",
    inputType: "money",
    placeholder: "Capital social de la filiale",
    hasDefault: false,
    defaultV: "capital_social"
  }, {
    type: "text",
    content: "FCFA ayant son siège social à "
  }, {
    type: "editable",
    key: "siege_social_filiale",
    inputType: "text",
    placeholder: "Adresse du siège social de la filiale",
    hasDefault: false,
    defaultV: "siege_social"
  }, {
    type: "text",
    content: " "
  }, {
    type: "editable",
    key: "code_postal_filiale",
    inputType: "text",
    placeholder: "Code postal du siège social de la filiale",
    hasDefault: false,
    defaultV: "code_postal"
  }, {
    type: "text",
    content: " ; immatriculée au Registre du Commerce et du Crédit Mobilier sous le numéro modificatif "
  }, {
    type: "editable",
    key: "numero_rccm_filiale",
    inputType: "text",
    placeholder: "Numéro d'immatriculation de la filiale",
    hasDefault: false,
    defaultV: "numero_rccm"
  }, {
    type: "text",
    content: "Tèl : "
  }, {
    type: "editable",
    key: "telephone_filiale",
    inputType: "tel",
    placeholder: "Nº de téléphone",
    hasDefault: false,
    defaultV: "telephone"
  }, {
    type: 'br'
  }], [{
    type: 'bold',
    content: "Représentée par "
  }, {
    type: "editable",
    key: "nom_dg",
    inputType: "text",
    placeholder: "Nom du directeur general",
    hasDefault: false,
    defaultV: "nom_dg"
  }, {
    type: 'bold',
    content: ", agissant en sa qualité de Directeur Général,"
  }, {
    type: 'br'
  }], [{
    type: 'text',
    content: "Ci-après désigné(e) “ Le créancier "
  }, {
    type: 'br'
  }], [{
    type: 'bold',
    content: "ET"
  }, {
    type: 'br'
  }], [{
    type: "editable",
    key: "nom_empruteur",
    inputType: "text",
    placeholder: "Nom du empruteur",
    hasDefault: false,
    defaultV: "nomcli"
  }, {
    type: 'text',
    content: "né(e) le"
  }, {
    type: "editable",
    key: "date_naissance_empruteur",
    inputType: "date",
    placeholder: "Date de naissance du empruteur"
  }, {
    type: 'text',
    content: "à"
  }, {
    type: "editable",
    key: "adresse_empruteur",
    inputType: "text",
    placeholder: "Lieu de naissance de l'empruteur"
  }, {
    type: 'text',
    content: "de nationalité"
  }, {
    type: "editable",
    key: "nationalite_empruteur",
    inputType: "text",
    placeholder: "Nationalité du empruteur"
  }, {
    type: 'text',
    content: " "
  }, {
    type: "editable",
    key: "profession_empruteur",
    inputType: "text",
    placeholder: "Profession du empruteur"
  }, {
    type: 'text',
    content: "titulaire "
  }, {
    type: "editable",
    key: "type_piece_empruteur",
    inputType: "select",
    options: ["de la carte d'identité N° ", "du passeport", "de la carte consulaire N°"],
    placeholder: "Type de pièce d'identité du empruteur",
    hasDefault: false,
    defaultV: "empty"
  }, {
    type: 'text',
    content: " "
  }, {
    type: "editable",
    key: "identite_empruteur",
    inputType: "text",
    placeholder: "Numéro piece d'identité de l'empruteur"
  }, {
    type: 'text',
    content: "du "
  }, {
    type: "editable",
    key: "date_emission_empruteur",
    inputType: "date",
    placeholder: "Date d'emission"
  }, {
    type: 'text',
    content: "valable jusqu’au "
  }, {
    type: "editable",
    key: "date_expiration_empruteur",
    inputType: "date",
    placeholder: "Date d'expiration"
  }, {
    type: 'text',
    content: "ayant lieu d’activités "
  }, {
    type: "editable",
    key: "lieu_activite_empruteur",
    inputType: "text",
    placeholder: "Lieu d'activité de l'empruteur"
  }, {
    type: 'text',
    content: "et ayant son domicile a  "
  }, {
    type: "editable",
    key: "domicile_empruteur",
    inputType: "text",
    placeholder: "Domicile du empruteur"
  }, {
    type: "text",
    content: "Tél : "
  }, {
    type: "editable",
    key: "telephone_empruteur",
    inputType: "tel",
    placeholder: "Nº de téléphone"
  }, {
    type: 'br'
  }], [{
    type: 'text',
    content: "Ci-après désigné(e) « L’Emprunteur » d’autre part"
  }, {
    type: 'br'
  }], [{
    type: 'bold',
    content: "Il a été convenu et arrêté ce qui suit :"
  }], [{
    type: 'text',
    content: 'Le Client affecte en nantissement son fonds de commerce étendu au matériel et stock au profit '
  }, {
    type: 'bold',
    content: "COFINA"
  }, {
    type: "editable",
    key: "pays_filiale",
    inputType: "text",
    placeholder: "Pays de la filiale",
    hasDefault: false,
    defaultV: "filiale"
  }, {
    type: 'text',
    content: "qui l’accepte, conformément aux dispositions des articles 162 à 165 de l’Acte Uniforme de l’OHADA portant organisation des sûretés. "
  }], [{
    type: 'underline',
    content: "ARTICLES 1 :"
  }, {
    type: 'bold',
    content: "CONDITIONS DU PRET"
  }, {
    type: 'br'
  }], [{
    type: 'underline',
    content: "Type de concours :"
  }, {
    type: "editable",
    key: "type_concours",
    inputType: "text",
    placeholder: "Type de concours",
    hasDefault: false,
    defaultV: "type_de_concours"
  }, {
    type: 'br'
  }], [{
    type: "bold",
    content: "  - Montant  : "
  }, {
    type: "editable",
    key: "montant_pret",
    inputType: "money",
    placeholder: "Montant du prê̂t",
    hasDefault: false,
    defaultV: "montant"
  }, {
    type: 'br'
  }], [{
    type: "bold",
    content: "  - Dure\u0301e  : "
  }, {
    type: "editable",
    key: "duree_pret",
    inputType: "number",
    placeholder: "Durée du prê̂t",
    hasDefault: false,
    defaultV: "duree_credit"
  }, {
    type: 'text',
    content: "mois"
  }, {
    type: 'br'
  }],
  // [
  //   {type : 'blank'}
  // ],
  [{
    type: "bold",
    content: "  - P\xE9riodicit\xE9 de remboursement  : "
  }, {
    type: "editable",
    key: "periode_remboursement",
    inputType: "text",
    placeholder: "Périodicité de remboursement",
    hasDefault: false,
    defaultV: "periodicite"
  }, {
    type: 'br'
  }], [{
    type: "bold",
    content: "  - Taux d\u2019int\xE9r\xEAt : "
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
    content: "  -Date de premi\xE8re \xE9ch\xE9ance : "
  }, {
    type: "editable",
    key: "date_prem_echeance",
    inputType: "date"
  }, {
    type: 'br'
  }], [{
    type: "bold",
    content: "  -Date de derni\xE8re \xE9ch\xE9ance : "
  }, {
    type: "editable",
    key: "date_dern_echeance",
    inputType: "date"
  }, {
    type: 'br'
  }], [{
    type: "bold",
    content: "  -Montant de l'\xE9ch\xE9ance : "
  }, {
    type: "editable",
    key: "montant_echeance",
    inputType: "money",
    hasDefault: false,
    defaultV: "montant_echeance"
  }, {
    type: 'br'
  }], [{
    type: 'underline',
    content: "ARTICLE 2 : NANTISSEMENT DE FONDS DE COMMERCE ETENDU AUX MATERIEL ET STOCKS"
  }, {
    type: 'br'
  }], [{
    type: 'text',
    content: 'A la sûreté et garantie du remboursement intégral du concours accordé au client ou qui lui seront accordés, et de façon plus générale à la garantie du solde éventuellement débiteur de son compte courant, le client affecte en nantissement, spécialement en premier rang au profit de '
  }, {
    type: 'bold',
    content: "COFINA"
  }, {
    type: "editable",
    key: "pays_filiale",
    inputType: "text",
    placeholder: "Pays de la filiale",
    hasDefault: false,
    defaultV: "filiale"
  }, {
    type: 'text',
    content: "créancière, les biens ci-dessous désignés dont la liste demeura annexée à la présente : "
  }, {
    type: 'br'
  }], [
  // {type : 'text' , content : 'A la sûreté et garantie du remboursement intégral du concours accordé au client ou qui lui seront accordés, et de façon plus générale à la garantie du solde éventuellement débiteur de son compte courant, le client affecte en nantissement, spécialement en premier rang au profit de '},
  {
    type: 'bold',
    content: "1. Description du stock, du matériel et évaluation : "
  }, {
    type: "editable",
    key: "montant_stock",
    inputType: "money",
    placeholder: "Montant du stock"
  }, {
    type: 'text',
    content: "FCFA. "
  }], [{
    type: 'text',
    content: 'Par suite de ce nantissement, '
  }, {
    type: 'bold',
    content: "COFINA"
  }, {
    type: "editable",
    key: "pays_filiale",
    inputType: "text",
    placeholder: "Pays de la filiale"
  }, {
    type: 'text',
    content: "exercera sur lesdits biens tous les droits et actions conférés par la Loi pour se faire payer sur le prix en cas d’inexécution du"
  }, {
    type: 'bold',
    content: "CLIENT, "
  }, {
    type: 'text',
    content: "et ce par préférence à tous autres créanciers ou cessionnaires."
  }, {
    type: 'br'
  }], [{
    type: 'underline',
    content: "ARTICLE 3 : ASSURANCE "
  }, {
    type: 'br'
  }], [{
    type: 'text',
    content: 'Le '
  }, {
    type: 'bold',
    content: "CLIENT"
  }, {
    type: 'text',
    content: ' s’engage à assurer les biens ci-dessus désignés.'
  }], [{
    type: 'text',
    content: 'Il reste entendu que tant que le '
  }, {
    type: 'bold',
    content: "CLIENT"
  }, {
    type: 'text',
    content: ' sera susceptible d’être débiteur en vertu des présentes, lesdits biens devront rester'
  }, {
    type: 'text',
    content: ' assurés pour un montant au moins égal à la valeur des biens.'
  }], [{
    type: 'text',
    content: 'Ce montant devra être augmenté si '
  }, {
    type: 'bold',
    content: "COFINA"
  }, {
    type: "editable",
    key: "pays_filiale",
    inputType: "text",
    placeholder: "Pays de la filiale",
    hasDefault: false,
    defaultV: "filiale"
  }, {
    type: 'text',
    content: ' le demande, notamment pour éviter les inconvénients pouvant'
  }, {
    type: 'text',
    content: ' résulter de l’application de la règle proportionnelle.'
  }], [{
    type: 'text',
    content: 'Faute d’exécution de ses divers engagements, '
  }, {
    type: 'bold',
    content: "COFINA"
  }, {
    type: "editable",
    key: "pays_filiale",
    inputType: "text",
    placeholder: "Pays de la filiale",
    hasDefault: false,
    defaultV: "filiale"
  }, {
    type: 'text',
    content: ' pourra assurer elle-même le bien donné en garantie'
  }, {
    type: 'text',
    content: ' jusqu’au montant ci-dessus prévu, auprès d’une ou plusieurs compagnies de son choix aux frais du '
  }, {
    type: 'bold',
    content: "CLIENT"
  }, {
    type: 'text',
    content: ' ou si bon semble'
  }, {
    type: 'text',
    content: ' à '
  }, {
    type: 'bold',
    content: "COFINA"
  }, {
    type: "editable",
    key: "pays_filiale",
    inputType: "text",
    placeholder: "Pays de la filiale",
    hasDefault: false,
    defaultV: "filiale"
  }, {
    type: 'text',
    content: ', exiger paiement immédiat des sommes qui lui seraient dues.'
  }],
  // [
  //   {type : 'blank'}
  // ],
  [{
    type: 'text',
    content: 'En cas de sinistre, les sommes dues par les Compagnies devront être versées à '
  }, {
    type: 'bold',
    content: "COFINA"
  }, {
    type: "editable",
    key: "pays_filiale",
    inputType: "text",
    placeholder: "Pays de la filiale",
    hasDefault: false,
    defaultV: "filiale"
  }, {
    type: 'text',
    content: ' sans le concours et hors'
  }, {
    type: 'text',
    content: ' la présence du '
  }, {
    type: 'bold',
    content: "CLIENT"
  }, {
    type: 'text',
    content: ' et ce jusqu’à concurrence de la créance éventuelle de '
  }, {
    type: 'bold',
    content: "COFINA"
  }, {
    type: "editable",
    key: "pays_filiale",
    inputType: "text",
    placeholder: "Pays de la filiale",
    hasDefault: false,
    defaultV: "filiale"
  }, {
    type: 'text',
    content: ', en principal, intérêts'
  }, {
    type: 'text',
    content: ' et accessoires.'
  }], [{
    type: 'underline',
    content: "ARTICLE 4 : INSCRIPTION"
  }, {
    type: 'br'
  }], [{
    type: 'bold',
    content: 'Le présent nantissement sera inscrit au RCCM '
  }, {
    type: "editable",
    key: "ville_rccm",
    inputType: "text",
    placeholder: "Ville du RCCM"
  }, {
    type: 'bold',
    content: 'Pour un montant de '
  }, {
    type: "editable",
    key: "montant_nantissement",
    inputType: "money",
    placeholder: "Montant du nantissement"
  }, {
    type: 'bold',
    content: 'Cette inscription est requise pour une durée de cinq (05) ans renouvelables une fois pour la même durée conformément aux articles 92 et suivants de l’Acte Uniforme portant organisations des Sûretés du 15 décembre 2010.'
  }], [{
    type: 'underline',
    content: "ARTICLE 5 : FRAIS"
  }, {
    type: 'br'
  }], [{
    type: 'text',
    content: 'Tous les frais et droits des présentes et ceux qui en seront la suite ou la conséquence seront supportés par l’emprunteur, qui'
  }, {
    type: 'text',
    content: ' s’y oblige.'
  }, {
    type: 'text',
    content: 'Toutefois dans le but d’accomplir cette formalité avec célérité, le Client donne d’ores et déjà mandat à COFINA'
  }, {
    type: "editable",
    key: "pays_filiale",
    inputType: "text",
    placeholder: "Pays de la filiale",
    hasDefault: false,
    defaultV: "filiale"
  }, {
    type: 'text',
    content: ' d’effectuer les formalités d’enregistrement et d’inscription du nantissement et de lui imputer les frais y afférents.'
  }], [{
    type: 'underline',
    content: "ARTICLE 6 : EXIGIBILITE ANTICIPEE DU CREDIT"
  }, {
    type: 'br'
  }], [{
    type: 'text',
    content: 'Il est expressément convenu que le présent contrat comporte une clause d’exigibilité anticipée, dont '
  }, {
    type: 'bold',
    content: "COFINA"
  }, {
    type: "editable",
    key: "pays_filiale",
    inputType: "text",
    placeholder: "Pays de la filiale",
    hasDefault: false,
    defaultV: "filiale"
  }, {
    type: 'text',
    content: ' pourra se prévaloir pour dénoncer l’ensemble des concours en cas de survenance de tout événement, ou circonstance de'
  }, {
    type: 'text',
    content: ' nature à empêcher le '
  }, {
    type: 'bold',
    content: "CLIENT"
  }, {
    type: 'text',
    content: ' de respecter ses engagements.'
  }], [{
    type: 'text',
    content: 'Les cas ci-après constituent des causes d’exigibilité anticipée :'
  }], [{
    type: 'list',
    listType: false,
    list: [{
      content: "Absence de mouvement créditeur sur le compte pendant une durée de trois (03) mois ;"
    }, {
      content: "Absence de mouvement créditeur significatifs sur le compte pendant une durée de six (06) mois ; il en est ainsi lorsque les versements reçus ne couvrent pas les agios de la même période."
    }, {
      content: "Cession totale ou partielle, des actifs du CLIENT affectant sa solvabilité,"
    }, {
      content: "Utilisation non conforme des fonds par rapport à l’affectation prévue,"
    }, {
      content: "Cessation ou modification significative de son activité,"
    }, {
      content: "Fusion, scission, dissolution ou liquidation du CLIENT,"
    }, {
      content: "Etat de cessation des paiements, ou mise en œuvre de toute procédure collective,"
    }, {
      content: "Réticences du CLIENT vis-à-vis de la constitution des sûretés prévues,"
    }, {
      content: "Inexactitude de l’une des déclarations prévues dans les conventions sus évoquées."
    }]
  }], [{
    type: 'text',
    content: 'Si l’un des cas visés ci-dessus se réalisait, et si '
  }, {
    type: 'bold',
    content: "COFINA"
  }, {
    type: "editable",
    key: "pays_filiale",
    inputType: "text",
    placeholder: "Pays de la filiale",
    hasDefault: false,
    defaultV: "filiale"
  }, {
    type: 'text',
    content: ' entendait retirer au '
  }, {
    type: 'bold',
    content: "CLIENT"
  }, {
    type: 'text',
    content: ' le bénéfice du terme des concours, il lui suffirait de lui faire part de sa décision au moyen d’une lettre recommandée et, sans qu’il soit besoin d’aucune autre formalité, l’exigibilité immédiate et intégrale de toutes sommes dues au titre du prêt prendrait effet de plein droit à la date d’envoi de ladite lettre recommandée.'
  }], [{
    type: 'underline',
    content: "ARTICLE 7: DROIT APPLICABLE- REGLEMENT DE LITIGES"
  }, {
    type: 'br'
  }], [{
    type: 'text',
    content: 'Le présent contrat est soumis au droit '
  }, {
    type: "editable",
    key: "pays_juridiction",
    inputType: "text",
    placeholder: "Pays de la juridiction",
    hasDefault: false,
    defaultV: "nationalite"
  }, {
    type: 'text',
    content: ' et en cas de lacune, aux conditions générales de banques applicables et enfin, aux principes et usages bancaires.'
  }], [{
    type: 'text',
    content: 'Tout litige provenant de l’interprétation et de l’exécution du présent contrat sera soumis, à défaut d’accord amiable entre les parties, au Tribunal de Commerce de '
  }, {
    type: "editable",
    key: "ville_tribunal_commerce",
    inputType: "text",
    placeholder: "Ville du tribunal de commerce",
    hasDefault: false,
    defaultV: "capitale"
  }, {
    type: 'text',
    content: '.'
  }], [{
    type: 'underline',
    content: "ARTICLE 8 : ELECTION DE DOMICILE"
  }, {
    type: 'br'
  }], [{
    type: 'text',
    content: 'Pour l’exécution des présentes et de leurs suites, les parties font élection de domicile en leurs demeures respectives susindiquées. '
  }], [{
    type: 'blank'
  }], [{
    type: 'text',
    content: "Fait à  "
  }, {
    type: "editable",
    key: "lieu_edition_contrat",
    inputType: "text",
    placeholder: "Lieu d'édition du contrat"
  }, {
    type: 'text',
    content: ",le "
  }, {
    type: "editable",
    key: "date_edition_contrat",
    inputType: "date",
    placeholder: "Date d'édition du contrat",
    hasDefault: false,
    defaultV: "now"
  }, {
    type: 'text',
    content: ",en deux (02) exemplaires. "
  }, {
    type: 'br'
  }], [{
    type: "table",
    columns: [{
      content: "Pour le client",
      width: 30,
      subcontent: "(Signature précédée de la mention ”lu et approuvé”) "
    }, {
      content: "",
      width: 40
    }, {
      content: "COFINA   ",
      width: 30,
      subcontent: "Le Directeur Général,",
      input: true,
      key: 'pays_filiale',
      inputType: 'text',
      placeholder: 'Pays de la filiale',
      classe: " gap-2 justify-content-end",
      hasDefault: false,
      defaultV: "filiale"
    }]
  }, {
    type: 'br'
  }, {
    type: 'br'
  }, {
    type: 'br'
  }, {
    type: 'br'
  }, {
    type: 'br'
  }, {
    type: 'br'
  }, {
    type: "editable",
    key: "client",
    inputType: "text",
    placeholder: "CLIENT"
  }, {
    type: "editable",
    key: "nom_dg",
    inputType: "text",
    placeholder: "nom du directeur général",
    style: {
      "float": "right"
    },
    hasDefault: false,
    defaultV: "nom_dg"
  }]]
});

/***/ })

}]);