"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_offview_microfinance_cofina_convention_cofina_PROMESSE-CONV_js"],{

/***/ "./resources/js/components/offview/microfinance/cofina/convention/cofina/PROMESSE-CONV.js":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/offview/microfinance/cofina/convention/cofina/PROMESSE-CONV.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// JavaScript file for Promesse d'affectation hypothécaire
// Template Name: PROMESSE-CONV
var remise = [[{
  type: "text",
  content: "Nous soussignés la  "
}, {
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
  type: 'text',
  content: "Représentée par "
}, {
  type: "editable",
  key: "nom_dg",
  inputType: "text",
  placeholder: "Nom du directeur general",
  hasDefault: false,
  defaultV: "nom_dg"
}, {
  type: 'text',
  content: ", agissant en sa qualité de Directeur Général,"
}, {
  type: 'br'
}], [{
  type: 'text',
  content: "Attestons par la présente avoir reçu des mains de "
}, {
  type: "editable",
  key: "denomination_promettant",
  inputType: "select",
  options: ["Madame", "Monsieur"],
  placeholder: "Titre du promettant",
  hasDefault: false,
  defaultV: "empty"
}, {
  type: "editable",
  key: "nom_promettant",
  inputType: "text",
  placeholder: "Nom du promettant"
}, {
  type: 'text',
  content: "né(e) le"
}, {
  type: "editable",
  key: "date_naissance_promettant",
  inputType: "date",
  placeholder: "Date de naissance du promettant"
}, {
  type: 'text',
  content: "à"
}, {
  type: "editable",
  key: "adresse_promettant",
  inputType: "text",
  placeholder: "Adresse du promettant"
}, {
  type: 'text',
  content: "de nationalité"
}, {
  type: "editable",
  key: "nationalite_promettant",
  inputType: "text",
  placeholder: "Nationalité du promettant"
}, {
  type: 'text',
  content: " "
}, {
  type: "editable",
  key: "profession_promettant",
  inputType: "text",
  placeholder: "Profession du promettant"
}, {
  type: 'text',
  content: "titulaire "
}, {
  type: "editable",
  key: "type_piece_promettant",
  inputType: "select",
  options: ["de la carte d'identité N° ", "du passeport", "de la carte consulaire N°"],
  placeholder: "Type de pièce d'identité du promettant",
  hasDefault: false,
  defaultV: "empty"
}, {
  type: 'text',
  content: " "
}, {
  type: "editable",
  key: "identite_promettant",
  inputType: "text",
  placeholder: "Numéro de Piece d'identité du promettant"
}, {
  type: 'text',
  content: "délivré(e) le "
}, {
  type: "editable",
  key: "date_emission_promettant",
  inputType: "date",
  placeholder: "Date d'emission"
}, {
  type: 'text',
  content: "à"
}, {
  type: "editable",
  key: "lieu_emission_piece_promettant",
  inputType: "text",
  placeholder: "Lieu d'emission"
}, {
  type: "text",
  content: "Tèl : "
}, {
  type: "editable",
  key: "telephone_promettant",
  inputType: "tel",
  placeholder: "Nº de téléphone"
}, {
  type: "text",
  content: "domicilié à  "
}, {
  type: "editable",
  key: "domicile_promettant",
  inputType: "text",
  placeholder: "Domicile du promettant"
}, {
  type: "text",
  content: "le(s) document(s) suivant (s) "
}, {
  type: 'br'
}], [{
  type: 'editable',
  inputType: "textarea",
  key: "document",
  placeholder: "Inclure la description du(des) document(s) "
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
  type: 'br'
}], [{
  type: 'br'
}, {
  type: 'text',
  content: "Signature",
  style: {
    "float": "inline-end"
  }
}, {
  type: 'br'
}, {
  type: 'br'
}], [{
  type: 'br'
}, {
  type: 'text',
  content: "Précédé de la mention « lu et approuvé"
}, {
  type: 'br'
}]];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Promesse d'affectation hypothécaire",
  paragraphs: [[{
    type: "underline",
    content: "Entre les soussignés :"
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
    placeholder: "Capital social de la filiale"
  }, {
    type: "text",
    content: "FCFA ayant son siège social à "
  }, {
    type: "editable",
    key: "siege_social_filiale",
    inputType: "text",
    placeholder: "Adresse du siège social de la filiale"
  }, {
    type: "text",
    content: " "
  }, {
    type: "editable",
    key: "code_postal_filiale",
    inputType: "text",
    placeholder: "Code postal du siège social de la filiale"
  }, {
    type: "text",
    content: " ; immatriculée au Registre du Commerce et du Crédit Mobilier sous le numéro modificatif "
  }, {
    type: "editable",
    key: "numero_rccm_filiale",
    inputType: "text",
    placeholder: "Numéro d'immatriculation de la filiale"
  }, {
    type: "text",
    content: "Tèl : "
  }, {
    type: "editable",
    key: "telephone_filiale",
    inputType: "tel",
    placeholder: "Nº de téléphone"
  }, {
    type: 'br'
  }], [{
    type: 'text',
    content: "Représentée par "
  }, {
    type: "editable",
    key: "nom_dg",
    inputType: "text",
    placeholder: "Nom du directeur general"
  }, {
    type: 'text',
    content: ", agissant en sa qualité de Directeur Général,"
  }, {
    type: 'br'
  }], [{
    type: 'text',
    content: "Ci-après désigné(e) “ COFINA "
  }, {
    type: "editable",
    key: "pays_filiale",
    inputType: "text",
    placeholder: "Pays de la filiale",
    hasDefault: false,
    defaultV: "filiale"
  }, {
    type: 'text',
    content: "”,"
  }], [{
    type: 'br',
    content: " ET "
  }], [{
    type: "editable",
    key: "nom_promettant",
    inputType: "text",
    placeholder: "Nom du promettant"
  }, {
    type: 'text',
    content: "né(e) le"
  }, {
    type: "editable",
    key: "date_naissance_promettant",
    inputType: "date",
    placeholder: "Date de naissance du promettant"
  }, {
    type: 'text',
    content: "à"
  }, {
    type: "editable",
    key: "adresse_promettant",
    inputType: "text",
    placeholder: "Adresse du promettant"
  }, {
    type: 'text',
    content: "de nationalité"
  }, {
    type: "editable",
    key: "nationalite_promettant",
    inputType: "text",
    placeholder: "Nationalité du promettant"
  }, {
    type: 'text',
    content: " "
  }, {
    type: "editable",
    key: "profession_promettant",
    inputType: "text",
    placeholder: "Profession du promettant"
  }, {
    type: 'text',
    content: "titulaire "
  }, {
    type: "editable",
    key: "type_piece_promettant",
    inputType: "select",
    options: ["de la carte d'identité N° ", "du passeport", "de la carte consulaire N°"],
    placeholder: "Type de pièce d'identité du promettant",
    hasDefault: false,
    defaultV: "empty"
  }, {
    type: 'text',
    content: " "
  }, {
    type: "editable",
    key: "identite_promettant",
    inputType: "text",
    placeholder: "Piece d'identité du promettant"
  }, {
    type: 'text',
    content: "du "
  }, {
    type: "editable",
    key: "date_emission_promettant",
    inputType: "date",
    placeholder: "Date d'emission"
  }, {
    type: 'text',
    content: "valable jusqu’au "
  }, {
    type: "editable",
    key: "date_expiration_promettant",
    inputType: "date",
    placeholder: "Date d'expiration"
  }, {
    type: 'text',
    content: "ayant lieu d’activités "
  }, {
    type: "editable",
    key: "lieu_activite_promettant",
    inputType: "text",
    placeholder: "Activité du promettant"
  }, {
    type: 'text',
    content: "et ayant son domicile au  "
  }, {
    type: "editable",
    key: "domicile_promettant",
    inputType: "text",
    placeholder: "Domicile du promettant"
  }, {
    type: "text",
    content: "Tél : "
  }, {
    type: "editable",
    key: "telephone_promettant",
    inputType: "tel",
    placeholder: "Nº de téléphone"
  }, {
    type: 'br'
  }], [{
    type: 'text',
    content: "Ci-après désigné(e) « le promettant »"
  }, {
    type: 'br'
  }], [{
    type: 'bold',
    content: "Préambule : "
  }, {
    type: 'br'
  }], [{
    type: 'text',
    content: "Cofina "
  }, {
    type: "editable",
    key: "pays_filiale",
    inputType: "text",
    placeholder: "Pays de la filiale",
    hasDefault: false,
    defaultV: "filiale"
  }, {
    type: 'text',
    content: "SA a consenti à Monsieur "
  }, {
    type: "editable",
    key: "nom_emprunteur",
    inputType: "text",
    placeholder: "Nom de l'emprunteur",
    hasDefault: false,
    defaultV: "nomcli"
  }, {
    type: 'text',
    content: ", aux termes d'un acte sous seing privé en date du "
  }, {
    type: "editable",
    key: "date_signature_pret",
    inputType: "date",
    placeholder: "Date de signature du prê̂t"
  }, {
    type: 'text',
    content: "à"
  }, {
    type: "editable",
    key: "lieu_signature_pret",
    inputType: "text",
    placeholder: "Lieu de signature du prê̂t"
  }, {
    type: 'text',
    content: ", un crédit en fond de roulement d'un montant de  "
  }, {
    type: "editable",
    key: "montant_pret",
    inputType: "money",
    placeholder: "Montant du prê̂t",
    hasDefault: false,
    defaultV: "montant"
  }, {
    type: "text",
    content: "FCFA d'une durée de "
  }, {
    type: "editable",
    key: "duree_pret",
    inputType: "number",
    placeholder: "Durée du prê̂t",
    hasDefault: false,
    defaultV: "duree_credit"
  }, {
    type: "text",
    content: "mois"
  }, {
    type: 'br'
  }], [{
    type: 'text',
    content: "L’Emprunteur s'est engagé à rembourser le crédit conformément au tableau d'amortissement qui lui a été remis lors du décaissement du crédit."
  }, {
    type: 'br'
  }], [{
    type: 'text',
    content: "Pour garantir le paiement de cette dette, Cofina"
  }, {
    type: "editable",
    key: "pays_filiale",
    inputType: "text",
    placeholder: "Pays de la filiale",
    hasDefault: false,
    defaultV: "filiale"
  }, {
    type: 'text',
    content: "a sollicité  "
  }, {
    type: "editable",
    key: "denomination_promettant",
    inputType: "select",
    options: ["Madame", "Monsieur"],
    placeholder: "Titre du promettant",
    hasDefault: false,
    defaultV: "empty"
  }, {
    type: "editable",
    key: "nom_promettant",
    inputType: "text",
    placeholder: "Nom du promettant"
  }, {
    type: 'text',
    content: " une promesse d'affectation d'un bien immobilier lui appartenant. Le promettant déclare ne pas se trouver dans une situation ou soumis à une mesure quelconque de nature à restreindre sa capacité ou son pouvoir et déclare que le bien immobilier ci-après désigné, objet des présentes, n'a fait, à ce jour, l’objet d’aucune convention d’hypothèque, ni d’aucune procédure susceptible de faire obstacle à l'exécution de la présente promesse d’affectation d’hypothécaire."
  }, {
    type: 'br'
  }], [{
    type: 'blank'
  }], [{
    type: 'bold',
    content: "Il a été convenu et arrêté ce qui suit : "
  }, {
    type: 'br'
  }], [{
    type: 'bold',
    content: "Article 1 : "
  }, {
    type: 'text',
    content: "Objet"
  }, {
    type: 'br'
  }], [{
    type: 'text',
    content: "En remboursement de la dette susvisée, intérêts et accessoires, l’Emprunteur s'oblige envers Cofina "
  }, {
    type: "editable",
    key: "pays_filiale",
    inputType: "text",
    placeholder: "Pays de la filiale",
    hasDefault: false,
    defaultV: "filiale"
  }, {
    type: 'text',
    content: ", qui accepte, à hypothéquer en premier rang, au profit de ce dernier, le bien immobilier ci-après désigné, à la première demande de celui-ci."
  }, {
    type: 'br'
  }], [{
    type: 'bold',
    content: "Article 2 : "
  }, {
    type: 'text',
    content: "Désignation"
  }, {
    type: 'br'
  }], [{
    type: 'text',
    content: "La présente convention d'hypothèque porte sur la parcelle :"
  }, {
    type: "editable",
    key: "num_parcelle",
    inputType: "number",
    placeholder: "Numéro de parcelle"
  }, {
    type: 'text',
    content: ",lot :"
  }, {
    type: "editable",
    key: "num_lot",
    inputType: "number",
    placeholder: "Numéro de lot"
  }, {
    type: 'text',
    content: " section :"
  }, {
    type: "editable",
    key: "num_section",
    inputType: "text",
    placeholder: "Numéro de section"
  }, {
    type: 'text',
    content: " d'une superficie de "
  }, {
    type: "editable",
    key: "superficie",
    inputType: "number",
    placeholder: "Superficie"
  }, {
    type: 'text',
    content: " m², sise au secteur : "
  }, {
    type: "editable",
    key: "adresse_secteur",
    inputType: "text",
    placeholder: "Adresse du secteur"
  }, {
    type: 'text',
    content: ", ainsi qu’ensemble les réalisations qu’elle comporte, objet d’attestation d’attribution de parcelle en date "
  }, {
    type: "editable",
    key: "date_attribution_parcelle",
    inputType: "date",
    placeholder: "Date d’attribution de la parcelle"
  }, {
    type: 'text',
    content: " au nom de "
  }, {
    type: "editable",
    key: "nom_promettant",
    inputType: "text",
    placeholder: "Nom du promettant"
  }, {
    type: 'text',
    content: " telle qu'elle se comporte sans exception ni réserve, le prêteur déclare bien la connaitre pour l'avoir visitée en vue des présentes. "
  }, {
    type: 'br'
  }], [{
    type: 'bold',
    content: "Article 3 : "
  }, {
    type: 'text',
    content: "Déclarations et Obligations"
  }, {
    type: 'br'
  }], [{
    type: 'text',
    content: "Le promettant s'oblige, dès demande de Cofina "
  }, {
    type: "editable",
    key: "pays_filiale",
    inputType: "text",
    placeholder: "Pays de la filiale",
    hasDefault: false,
    defaultV: "filiale"
  }, {
    type: 'text',
    content: " SA notifiée par écrit, à saisir tout notaire compétent de son choix, afin de faire dresser l'acte constitutif d'hypothèque du bien immobilier. Cet acte sera publié au bureau des domaines et de la publicité foncière du lieu de situation de l'immeuble."
  }, {
    type: 'br'
  }], [{
    type: 'text',
    content: "Il s'engage à conserver l'immeuble en bon état d'entretien et de ne rien faire qui puisse en diminuer la valeur."
  }, {
    type: 'br'
  }], [{
    type: 'bold',
    content: "Article 4 : "
  }, {
    type: 'text',
    content: "Durée"
  }, {
    type: 'br'
  }], [{
    type: 'text',
    content: "La présente promesse d'affectation hypothécaire est consentie par l’Emprunteur au créancier jusqu à complet remboursement de la dette susvisée, en principal intérêts et accessoires."
  }, {
    type: 'br'
  }], [{
    type: 'bold',
    content: "Article 5 : "
  }, {
    type: 'text',
    content: "Exigibilité anticipée"
  }, {
    type: 'br'
  }], [{
    type: 'list',
    listType: false,
    list: [{
      content: "Violation de l'une des clauses ici énumérées ;"
    }, {
      content: "Toute autre cause contenue dans le contrat."
    }]
  }], [{
    type: 'blank'
  }], [{
    type: 'bold',
    content: "Article 6 : "
  }, {
    type: 'text',
    content: "Pouvoirs (s'il y'a lieu)"
  }, {
    type: 'br'
  }], [{
    type: 'text',
    content: "L’Emprunteur donne pouvoir au prêteur pour poursuivre et réaliser en ses lieux et place les formalités visant à l'obtention du PUH, afin de réaliser l'hypothèque consentie (inscription)."
  }, {
    type: 'br'
  }], [{
    type: 'bold',
    content: "Article 7 : "
  }, {
    type: 'text',
    content: "Résiliation"
  }, {
    type: 'br'
  }], [{
    type: 'text',
    content: "En cas d'inexécution par L’Emprunteur d'une seule de ses obligations contractuelles, Cofina "
  }, {
    type: "editable",
    key: "pays_filiale",
    inputType: "text",
    placeholder: "Pays de la filiale",
    hasDefault: false,
    defaultV: "filiale"
  }, {
    type: 'text',
    content: " SA pourra demander la résiliation du présent après une mise en demeure restée sans effet, sans préjudice de tous dommages intérêts qui pourraient être réclamés au l’Emprunteur."
  }, {
    type: 'br'
  }], [{
    type: 'text',
    content: "La résiliation du présent contrat rend immédiatement exigible la créance susvisée, sans qu'aucune formalité ne soit requise."
  }], [{
    type: 'bold',
    content: "Article 8 : "
  }, {
    type: 'text',
    content: "Frais et divers"
  }, {
    type: 'br'
  }], [{
    type: 'text',
    content: "Tous les frais qui seront la conséquence des présentes seront supportés par l’Emprunteur qui s'y engage."
  }, {
    type: 'br'
  }], [{
    type: 'bold',
    content: "Article 9 : "
  }, {
    type: 'text',
    content: "Election de domicile"
  }, {
    type: 'br'
  }], [{
    type: 'text',
    content: "Pour l'exécution des présentes et de leurs suites, élection de domicile est faîte :"
  }, {
    type: 'list',
    listType: false,
    list: [{
      content: "Pour le Prêteur à son siège social ;"
    }, {
      content: "Pour l'Emprunteur à son domicile."
    }]
  }, {
    type: 'br'
  }], [{
    type: 'bold',
    content: "Article 10 : "
  }, {
    type: 'text',
    content: "Frais"
  }, {
    type: 'br'
  }], [{
    type: 'text',
    content: "Tous les frais des présentes et ceux qui en seront la suite seront supportés par l’Emprunteur qui s'y oblige."
  }, {
    type: 'br'
  }], [{
    type: 'blank'
  }], [{
    type: 'bold',
    content: "Article 11 : "
  }, {
    type: 'text',
    content: "Attribution de juridiction"
  }, {
    type: 'br'
  }], [{
    type: 'text',
    content: "Pour le règlement des litiges qui naîtraient des présentes les parties attribuent compétence au Tribunal de commerce de "
  }, {
    type: "editable",
    key: "lieu_tribunal_commerce",
    inputType: "text",
    placeholder: "lieu_tribunal_commerce",
    hasDefault: false,
    defaultV: "capitale"
  }, {
    type: 'br'
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
      content: "Le promettant",
      width: 30,
      subcontent: "(Signature)",
      classe: "justify-content-center"
    }, {
      content: "L’emprunteur",
      width: 30,
      subcontent: "(Signature)",
      classe: "justify-content-center"
    }, {
      content: "La banque",
      width: 30,
      subcontent: "(Signature + Cachet)",
      classe: "justify-content-center"
    }]
  }], [{
    type: 'blank'
  }], [{
    type: 'underline',
    content: "CONVENTION DE REMISE VOLONTAIRE DE TITRE",
    style: {
      textAlign: "center",
      width: '100%',
      display: "inline-block"
    }
  }]].concat(remise)
});

/***/ })

}]);