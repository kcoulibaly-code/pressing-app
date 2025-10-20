"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_offview_microfinance_cofina_convention_cofina_NOTIFICATION-CONV_js"],{

/***/ "./resources/js/components/offview/microfinance/cofina/convention/cofina/NOTIFICATION-CONV.js":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/offview/microfinance/cofina/convention/cofina/NOTIFICATION-CONV.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// JavaScript file for Notification
// Template Name: NOTIFICATION-CONV

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Notification de crédit",
  paragraphs: [[{
    type: "editable",
    key: "lieu_edition_contrat",
    inputType: "text",
    placeholder: "Lieu d'édition du contrat"
  }, {
    type: 'text',
    content: " le "
  }, {
    type: "editable",
    key: "date_edition_contrat",
    inputType: "date",
    placeholder: "Date d'édition du contrat",
    hasDefault: false,
    defaultV: "now"
  }, {
    type: 'br'
  }, {
    type: 'text',
    content: "A"
  }, {
    type: 'br'
  }, {
    type: "editable",
    key: "denomination_client",
    inputType: "select",
    options: ["Madame", "Monsieur"],
    placeholder: "Titre du client",
    hasDefault: false,
    defaultV: "empty"
  }, {
    type: "text",
    content: " "
  }, {
    type: "editable",
    key: "nom_client",
    inputType: "text",
    placeholder: "Nom du client",
    hasDefault: false,
    defaultV: "nomcli"
  }, {
    type: 'br'
  }, {
    type: "text",
    content: ", T\xE9l. :"
  }, {
    type: "editable",
    key: "tel_client",
    inputType: "tel",
    placeholder: "Numéro de téléphone du client"
  }, {
    type: "br"
  }, {
    type: "text",
    content: "Compte/Matricule : "
  }, {
    type: "editable",
    key: "compte",
    inputType: "text",
    placeholder: "Numéro de compte du client"
  }, {
    type: "text",
    content: "/"
  }, {
    type: "editable",
    key: "matricule_client",
    inputType: "text",
    placeholder: "Numéro de matricule du client"
  }, {
    type: "br"
  }, {
    type: "editable",
    key: "lieu_edition_contrat",
    inputType: "text",
    placeholder: "Lieu d'édition du contrat"
  }, {
    type: "text",
    content: " - "
  }, {
    type: "editable",
    key: "pays_edition_contrat",
    inputType: "text",
    placeholder: "Pays d'édition du contrat"
  }], [{
    type: 'underline',
    content: "N/Ref :"
  }, {
    type: "editable",
    key: "num_ref",
    inputType: "text",
    placeholder: "Numéro de reference"
  }, {
    type: 'br'
  }, {
    type: 'underline',
    content: "Objet :"
  }, {
    type: "text",
    content: "Notification de crédit"
  }, {
    type: 'br'
  }, {
    type: "editable",
    key: "denomination_client",
    inputType: "select",
    options: ["Madame", "Monsieur"],
    placeholder: "Titre du client",
    hasDefault: false,
    defaultV: "empty"
  }], [{
    type: "text",
    content: "Nous avons le plaisir de vous notifier par la pr\xE9sente, que votre demande de financement a re\xE7u l\u2019avis favorable de notre comit\xE9 de cr\xE9dit."
  }, {
    type: 'br'
  }], [{
    type: "text",
    content: "CONDITIONS DU PR\xCAT",
    style: titleStyle
  }], [{
    type: "bold",
    content: "Objet du financement : "
  }, {
    type: "editable",
    key: "objet_financement",
    inputType: "text",
    placeholder: "Objet du financement"
  }, {
    type: 'br'
  }], [{
    type: "bold",
    content: "Type de concours : "
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
    content: "Montant  : "
  }, {
    type: "editable",
    key: "montant_pret",
    inputType: "money",
    placeholder: "Montant du prê̂t",
    hasDefault: false,
    defaultV: "montant"
  }, {
    type: 'text',
    content: "FCFA"
  }, {
    type: 'br'
  }], [{
    type: "bold",
    content: "Dure\u0301e  : "
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
  }], [{
    type: "bold",
    content: "P\xE9riodicit\xE9 de remboursement  : "
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
    placeholder: "Pourcent montant accorde",
    hasDefault: false,
    defaultV: "pourcent_montant_accorde_frais_dossier"
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
  }], [{
    type: "underline",
    content: "Garanties et supports \xE0 recueillir :  "
  }, {
    type: 'br'
  },
  // {
  //   type : "editablelist" , keys : ['garantie'] , list : [
  //     [{
  //       type : "text" , content : "Souscription à 12 billets à ordre par l’emprunteur ;"
  //     }],
  //     [
  //       {
  //         type : "text" , content : "Dépôt de garantie et compte de réserve du service de la dette d’au moins "
  //       },
  //       {
  //         type : "editable" , key : "montant_garantie" , inputType : "money" , placeholder : "Montant de la garantie"
  //       },
  //       {
  //         type : "text" , content : ", représentant "
  //       },
  //       {
  //         type : "editable" , key : "pourcent_montant_accorde_montant_garantie" , inputType : "number" , placeholder : "Pourcent montant accorde"
  //       },
  //       {
  //         type : "text" , content : "% du montant accordé"
  //       }
  //     ],
  //     [
  //       {
  //         type : "text" , content : "Gage sur un véhicule personnel en bonne état ;"
  //       }
  //     ],
  //     [
  //       {
  //         type : "text" , content : "Engagement de domiciliation des recettes de l’activité d’au moins  "
  //       },
  //       {
  //         type : "editable" , key : "engagement_domiciliation" , inputType : "money" , placeholder : "Montant de l'engagement de domiciliation"
  //       },
  //       {
  //         type : "text" , content : " FCFA/semaine dans les livres de COFINA ; "
  //       },
  //     ],
  //     [
  //       {
  //         type : "text" , content : "Cautionnement personnel et solidaire d’une personne de bonne moralité, et solvable ;"
  //       }
  //     ],
  //     [
  //       {
  //         type : "text" , content : "Nantissement de stock et de fonds de commerce."
  //       }
  //     ],
  //   ]
  // }
  {
    type: 'editable',
    inputType: 'textarea',
    placeholder: "Garanties et supports à recueillir",
    key: "garantie"
  }], [{
    type: "underline",
    content: "Conditions particuli\xE8res : "
  },
  // { type : "list" , listType : false , list : [
  //   {
  //     content : "Fournir la documentation requise de la check-list "
  //   },
  //   {
  //     content : "Entretien pré-déblocage"
  //   }

  // ]},
  {
    type: 'editable',
    inputType: 'textarea',
    placeholder: "Conditions particulières",
    key: "conditions_particulieres"
  }], [{
    type: 'br'
  }, {
    type: "text",
    content: "Au cas o\xF9 ces conditions rencontrent votre accord, nous vous prions de bien vouloir retourner \xE0 votre charg\xE9 d\u2019affaires \xE0 COFINA "
  }, {
    type: "editable",
    key: "pays_filiale",
    inputType: "text",
    placeholder: "Pays de la filiale",
    hasDefault: false,
    defaultV: "filiale"
  }, {
    type: 'text',
    content: ', une copie de la présente correspondance revêue de votre signature et le cas échéant de votre cachet avec la mention manuscrite « Lu et approuvé ».'
  }, {
    type: 'br'
  }, {
    type: "text",
    content: "La pr\xE9sente offre est valable pour un d\xE9lai de quinze (15) jours \xE0 compter de la date de sa r\xE9ception. Pass\xE9 ce d\xE9lai, elle devra \xEAtre consid\xE9r\xE9e comme nulle et non avenue. "
  }, {
    type: 'br'
  }, {
    type: "text",
    content: "A compter de l\u2019acceptation de l\u2019offre, vous disposez d\u2019un d\xE9lai de trente (30) jours pour satisfaire aux diff\xE9rentes conditions du cr\xE9dit faute de quoi, la pr\xE9sente deviendra caduque de plein droit."
  }, {
    type: 'br'
  }, {
    type: "text",
    content: "La mise en place du cr\xE9dit est subordonn\xE9e \xE0 la formalisation de la documentation et des supports ci-dessus indiqu\xE9es."
  }, {
    type: 'br'
  }, {
    type: "text",
    content: "Veuillez agr\xE9er, "
  }, {
    type: "editable",
    key: "denomination_client",
    inputType: "select",
    options: ["Madame", "Monsieur"],
    placeholder: "Titre du client",
    hasDefault: false,
    defaultV: "empty"
  }, {
    type: 'text',
    content: ", l’expression de notre considération distinguée."
  }], [{
    type: "table",
    columns: [{
      content: "Chargé d’Affaires",
      width: 30,
      subcontent: "(Signature)"
    }, {
      content: "",
      width: 40,
      subcontent: ""
    }, {
      content: "Chef d’Agence",
      width: 30,
      subcontent: "(Signature)"
    }]
  }, {
    type: 'br'
  }, {
    type: "editable",
    key: "nom_caf",
    inputType: "text",
    placeholder: "nom du chargé d’affaires",
    hasDefault: false,
    defaultV: "nom_caf"
  }, {
    type: 'text',
    content: "                                                               "
  }, {
    type: "editable",
    key: "nom_ca",
    inputType: "text",
    placeholder: "nom du chef d’agence",
    style: {
      "float": "right"
    },
    hasDefault: false,
    defaultV: "nom_ca"
  }], [{
    type: "editable",
    inputType: "component",
    key: "type_id",
    componentName: "AvisClient"
  }]]
});
var titleStyle = {
  width: '100%',
  display: 'block',
  textAlign: 'center',
  backgroundColor: 'darkgray',
  padding: '15px',
  color: 'white',
  borderRadius: '15px'
};

/***/ })

}]);