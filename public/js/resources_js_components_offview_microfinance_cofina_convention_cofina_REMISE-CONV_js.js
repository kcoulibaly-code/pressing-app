"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_offview_microfinance_cofina_convention_cofina_REMISE-CONV_js"],{

/***/ "./resources/js/components/offview/microfinance/cofina/convention/cofina/REMISE-CONV.js":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/offview/microfinance/cofina/convention/cofina/REMISE-CONV.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Convention de remise volontaire de titre",
  paragraphs: [[{
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
  }]]
});

/***/ })

}]);