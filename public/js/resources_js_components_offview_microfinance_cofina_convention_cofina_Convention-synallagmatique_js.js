"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_offview_microfinance_cofina_convention_cofina_Convention-synallagmatique_js"],{

/***/ "./resources/js/components/offview/microfinance/cofina/convention/cofina/Convention-synallagmatique.js":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/offview/microfinance/cofina/convention/cofina/Convention-synallagmatique.js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Contrat Synallagmatique d’Affectation en Garantie de Terrain",
  paragraphs: [[{
    type: "underline",
    content: "ENTRE"
  }, {
    type: 'br'
  }, {
    type: "editable",
    key: "titre_constituant",
    inputType: "select",
    options: ["Madame", "Monsieur"],
    placeholder: "Titre du constituant",
    hasDefault: false,
    defaultV: "empty"
  }, {
    type: 'text',
    content: ' '
  }, {
    type: 'editable',
    key: 'contractor_name',
    inputType: 'text',
    placeholder: "Nom du Constituant"
  }, {
    type: 'text',
    content: 'né(e) le'
  }, {
    type: 'editable',
    key: 'contractor_birth_date',
    inputType: 'date'
  }, {
    type: 'text',
    content: 'à'
  }, {
    type: 'editable',
    key: 'contrator_birth_location',
    inputType: 'text',
    placeholder: "Lieu de naissance du gagiste"
  }, {
    type: 'text',
    content: ', commerçant, de nationalité '
  }, {
    type: 'editable',
    key: 'contrator_nationality',
    inputType: 'text',
    placeholder: "Nationalité du gagiste"
  }, {
    type: 'text',
    content: ", titulaire de  "
  }, {
    type: "editable",
    key: "type_piece_promettant",
    inputType: "select",
    options: ["de la Carte National d'Identité", "du passeport", "de la carte consulaire"],
    placeholder: "Type de pièce d'identité du promettant",
    hasDefault: false,
    defaultV: "empty"
  }, {
    type: 'text',
    content: " N° "
  }, {
    type: 'editable',
    key: 'contractor_carte_id',
    inputType: 'text',
    placeholder: "Numéro de pièce d'identité"
  }, {
    type: 'text',
    content: 'du'
  }, {
    type: 'editable',
    key: 'contractor_carte_produce_date',
    inputType: 'date'
  }, {
    type: 'text',
    content: "valable jusqu'au "
  }, {
    type: 'editable',
    key: 'contractor_carte_expire_date',
    inputType: 'date'
  }, {
    type: 'text',
    content: ", ayant son lieu d'activités au quartier"
  }, {
    type: 'editable',
    key: 'contractor_activity_location',
    inputType: 'text',
    placeholder: "Lieu d'activité du gagiste"
  }, {
    type: 'text',
    content: 'et ayant son domicile au quartier'
  }, {
    type: 'editable',
    key: 'contractor_location',
    inputType: 'text',
    placeholder: "Lieu habitation du gagiste"
  }, {
    type: 'text',
    content: ', Tél :'
  }, {
    type: 'editable',
    key: 'contractor_telephone',
    inputType: 'tel',
    placeholder: "Numéro de téléphone du gagiste"
  }], [{
    type: 'text',
    content: "Ci-après désignée par l'expression << "
  }, {
    type: 'bold',
    content: 'Le Promettant'
  }, {
    type: 'text',
    content: ">>"
  }], [{
    type: 'text',
    content: "Et"
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
    content: ",immatriculée au Registre du Commerce et du Crédit Mobilier sous le numéro  "
  }, {
    type: "editable",
    key: "numero_rccm",
    inputType: "text",
    placeholder: "Numéro d'immatriculation de la filiale",
    hasDefault: false,
    defaultV: "numero_rccm"
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
    content: "Ci-après désignée par l'expression << "
  }, {
    type: 'bold',
    content: 'Le Bénéficiaire'
  }, {
    type: 'text',
    content: ">>"
  }], [{
    type: 'underline',
    content: "IL A ETE PREALABLEMENT EXPOSE QUE :"
  }, {
    type: 'br'
  }, {
    type: 'text',
    content: "Part contrat en date du"
  }, {
    type: 'editable',
    key: 'date_contrat',
    inputType: 'date',
    placeholder: "Date du contrat"
  }, {
    type: 'text',
    content: ','
  }, {
    type: 'bold',
    content: 'COFINA'
  }, {
    type: 'editable',
    key: 'pays_filiale',
    inputType: 'text',
    placeholder: "Pays de la filiale",
    hasDefault: false,
    defaultV: "filiale"
  }, {
    type: 'text',
    content: ' a consenti au profit de '
  }, {
    type: 'editable',
    key: 'contractor_name',
    inputType: 'text',
    placeholder: "Nom du bénéficiaire"
  }, {
    type: 'text',
    content: "un crédit d'exploitation d'un montant de "
  }, {
    type: 'editable',
    key: 'credit_amount',
    inputType: 'money',
    placeholder: "Montant du crédit"
  }, {
    type: 'text',
    content: " FCFA en principal pour les besoins de son activité ."
  }, {
    type: 'br'
  }, {
    type: 'text',
    content: "Le Prêt est consenti pour une durée de "
  }, {
    type: 'editable',
    key: 'credit_duration',
    inputType: 'text',
    placeholder: "Durée du crédit"
  }, {
    type: 'text',
    content: " Le remboursement se fera au moyen de "
  }, {
    type: 'editable',
    key: 'nombre_echeance',
    inputType: 'number',
    placeholder: "nombre d'échéances"
  }, {
    type: 'text',
    content: " échéances mensuelles conforment au tableau d’amortissement. "
  }, {
    type: 'br'
  }, {
    type: 'text',
    content: "La date de la première échéance du prêt est pévue le "
  }, {
    type: 'editable',
    key: 'date_premiere_echeance',
    inputType: 'date',
    placeholder: "Date de la première échéance"
  }, {
    type: 'text',
    content: " et la date de la dernière échéance le "
  }, {
    type: 'editable',
    key: 'date_derniere_echeance',
    inputType: 'date',
    placeholder: "Date de la dernière échéance"
  }, {
    type: 'text',
    content: " comme il ressort du tableau d’amortissement simplement indicatif joint en annexe."
  }, {
    type: 'br'
  }, {
    type: 'text',
    content: 'Le Promettant a décidé d’affecter à titre de garantie du remboursement du crédit susmentionné, le titre de propriété'
  }, {
    type: 'editable',
    key: 'titre_propriete',
    inputType: 'text',
    placeholder: "Titre de propriété"
  }, {
    type: 'text',
    content: " en affectation avec dépossession du Titre de Propriété au profit du Bénéficiaire."
  }, {
    type: 'br'
  }, {
    type: 'text',
    content: "Ceci étant, les Parties décident après négociations, de formaliser les termes de leur accord au travers du présent"
  }, {
    type: 'bold',
    content: "Contrat Synallagmatique d’Affectation en Garantie de Terrain"
  }, {
    type: 'text',
    content: "dans les termes, conditions et modalités ci-après."
  }], [{
    type: 'underline',
    content: "CECI EXPOSE, IL A ETE ARRETE ET CONVENU CE QUI SUIT :"
  }, {
    type: 'br'
  }, {
    type: 'br'
  }, {
    type: 'underline',
    content: "I.	VALEUR DE L’EXPOSE"
  }, {
    type: 'br'
  }, {
    type: 'text',
    content: "L’exposé liminaire a la même valeur juridique que le présent Contrat, dont il fait partie intégrante et avec lequel ils forment entièrement corps."
  }, {
    type: 'br'
  }], [{
    type: 'underline',
    content: "II.	DESIGNATION"
  }, {
    type: 'br'
  }, {
    type: 'text',
    content: "Le terrain se porte sur une parcelle déjà acquise à "
  }, {
    type: 'editable',
    key: 'terrain_acquisition',
    inputType: 'text',
    placeholder: "Lieu d'acquisition du terrain"
  }, {
    type: 'text',
    content: "avec référence du terrain"
  }, {
    type: 'editable',
    key: 'contractor_name',
    inputType: 'text',
    placeholder: "Nom du gagiste"
  }, {
    type: 'text',
    content: " "
  }, {
    type: 'editable',
    key: 'terrain_adresse',
    inputType: 'text',
    placeholder: "Adresse du terrain"
  }, {
    type: 'text',
    content: "; "
  }, {
    type: 'editable',
    key: 'terrain_acquisition',
    inputType: 'text',
    placeholder: "lieu d'acquisition du terrain"
  }, {
    type: 'br'
  }, {
    type: 'underline',
    content: "NATURE DU CREDIT"
  }, {
    type: 'br'
  }, {
    type: 'text',
    content: "-	Objet du crédit : "
  }, {
    type: 'editable',
    key: 'credit_object',
    inputType: 'text',
    placeholder: "Objet du crédit"
  }, {
    type: 'br'
  }, {
    type: 'text',
    content: "-	Montant en lettres du crédit accordé  : "
  }, {
    type: 'editable',
    key: 'credit_amount_letters',
    inputType: 'text',
    placeholder: "Montant en lettres du crédit"
  }, {
    type: 'text',
    content: " de francs CFA"
  }, {
    type: 'br'
  }, {
    type: 'underline',
    content: "III.	ORIGINE DE PROPRIETE"
  }, {
    type: 'br'
  }, {
    type: 'text',
    content: "Le promettant s’oblige à justifier son droit de propriété sur le terrain désigné."
  }], [{
    type: 'underline',
    content: "IV.	CONDITIONS"
  }, {
    type: 'br'
  }, {
    type: 'text',
    content: "En outre, et pour conférer davantage de sûreté et de garantie à l’engagement de ne pas hypothéquer, le promettant s’engage à remettre au bénéficiaire l’original du titre de propriété et à consentir sur première réquisition du bénéficiaire une hypothèque de 1er rang sur les biens désignés ci-dessus."
  }, {
    type: 'br'
  }, {
    type: 'text',
    content: "Ladite hypothèque si elle se réalise, aura lieu conformément aux règles de droit en matière d’hypothèque et de prêt et permettra de couvrir le capital restant du prêt majoré de tous les intérêts, frais, commissions et accessoires y afférents.Le promettant s’interdit, pendant toute la durée de la présente promesse, tout acte susceptible de porter atteinte aux droits et aux privilèges du bénéficiaire résultant de ladite promesse."
  }, {
    type: 'br'
  }, {
    type: 'text',
    content: "Le promettant acquittera tous les frais, droits et émoluments de l’acte qui en constatera la réalisation. Cet engagement conserve son plein effet aussi longtemps que le bénéficiaire apportera son concours au promettant, sauf dérogation expresse et écrite accordée par le bénéficiaire."
  }], [{
    type: 'underline',
    content: "V.	DECLARATIONS ET ENGAGEMENTS DU PROMETTANT"
  }, {
    type: 'br'
  }, {
    type: 'text',
    content: "Le promettant prend l’engagement ferme et irrévocable de ne pas aliéner, ni hypothéquer l’immeuble désigné ci-dessus.Cet engagement est contacté par le promettant et ses héritiers, fussent-ils mineurs ou incapables, pour sûreté et garantie du crédit accordé par le bénéficiaire."
  }, {
    type: 'br'
  }, {
    type: 'text',
    content: "Le promettant déclare qu’il n’existe de son chef aucun obstacle ni aucune restriction d’ordre légal ou contractuel à la libre affectation en garantie du bien, ni à la réalisation de la présente promesse.Le promettant s’engage à acquitter les frais nécessaires à l’enregistrement du présent acte."
  }, {
    type: 'br'
  }, {
    type: 'text',
    content: "Pour l’immeuble à acquérir, le promettant s’engage à acquérir, le promettant s’engage à signer l’hypothèque dès que ledit immeuble sera transféré dans son patrimoine."
  }], [{
    type: "right_block",
    content: [{
      type: 'text',
      content: "Fait en trois exemplaires à "
    }, {
      type: 'editable',
      key: "place",
      inputType: "text",
      placeholder: "Lieu"
    }, {
      type: 'text',
      content: " ,le "
    }, {
      type: 'editable',
      key: "date",
      inputType: "date",
      placeholder: "Date"
    }]
  }, {
    type: 'br'
  }, {
    type: 'br'
  }, {
    type: 'br'
  }, {
    type: 'table',
    columns: [{
      type: 'underline',
      content: "Le Promettant",
      width: 40
    }, {
      content: "La cliente",
      width: 40
    }, {
      type: 'underline',
      content: "Bénéficiaire",
      width: 40
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
    type: 'table',
    columns: [{
      content: "",
      width: 40,
      input: true,
      key: 'contractor_name',
      inputType: 'text',
      placeholder: 'Nom du Promettant',
      hasDefault: false,
      defaultV: "contractor_name"
    }, {
      content: "",
      width: 40,
      input: true,
      key: 'contractor_name',
      inputType: 'text',
      placeholder: 'Nom du Promettant',
      hasDefault: false,
      defaultV: "contractor_name"
    }, {
      content: "",
      width: 40,
      input: true,
      key: 'representative_name',
      inputType: 'text',
      placeholder: 'Nom du Bénéficiaire',
      hasDefault: false,
      defaultV: "nom_dg"
    }]
  }]]
});

/***/ })

}]);