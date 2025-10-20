"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_offview_microfinance_cofina_convention_cofina_DOMICILIATION-CONV_js"],{

/***/ "./resources/js/components/offview/microfinance/cofina/convention/cofina/DOMICILIATION-CONV.js":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/offview/microfinance/cofina/convention/cofina/DOMICILIATION-CONV.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// JavaScript file for Engagement de domiciliation
// Template Name: DOMICILIATION-CONV

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Engagement de domiciliation",
  paragraphs: [[{
    type: 'block_at_right',
    keys: ['location', 'date_edition'],
    content: [{
      type: 'editable',
      key: 'location',
      inputType: 'text',
      placeholder: 'Lieu'
    }, {
      type: 'text',
      content: ', le'
    }, {
      type: 'editable',
      key: 'date_edition',
      inputType: 'date',
      hasDefault: false,
      defaultV: "now"
    }]
  }, {
    type: 'right',
    content: 'A'
  }, {
    type: 'block_at_right',
    keys: ['pays_filiale'],
    content: [{
      type: 'text',
      content: 'Monsieur le Directeur Général '
    }, {
      type: 'text',
      content: 'de COFINA '
    }, {
      type: 'editable',
      key: 'pays_filiale',
      inputType: 'text',
      placeholder: 'Pays de la filiale',
      hasDefault: false,
      defaultV: "filiale"
    }, {
      type: 'text',
      content: ' '
    }],
    hasDefault: false,
    defaultV: "filiale",
    key: 'pays_filiale'
  }, {
    type: 'right',
    content: '-----------------------------------------'
  }, {
    type: 'block_at_right',
    keys: ['location', 'country'],
    content: [{
      type: 'editable',
      key: 'location',
      inputType: 'text',
      placeholder: 'Ville'
    }, {
      type: 'text',
      content: ' / '
    }, {
      type: 'editable',
      key: 'country',
      inputType: 'text',
      placeholder: 'Pays',
      hasDefault: false,
      defaultV: "filiale"
    }],
    hasDefault: false,
    defaultV: "pays",
    key: 'country'
  }], [{
    type: 'underline',
    content: 'Objet'
  }, {
    type: 'text',
    content: ': Engagement de domiciliation hebdomadaire des recettes'
  }, {
    type: "br"
  }, {
    type: "br"
  }], [{
    type: 'text',
    content: 'Monsieur le Directeur Général,'
  }, {
    type: "br"
  }, {
    type: "br"
  }], [{
    type: 'text',
    content: 'Je viens par la présente vous notifier mon engagement de domiciliation hebdomadaire des recettes de mes activités à hauteur d’au moins '
  }, {
    type: 'editable',
    key: 'montant_recette',
    inputType: 'money'
  }, {
    type: 'text',
    content: 'par semaine conformément à l’accord de crédit datant du'
  }, {
    type: 'editable',
    key: 'date_accord',
    inputType: 'date'
  }, {
    type: 'text',
    content: 'pour un montant de '
  }, {
    type: 'editable',
    key: 'montant_accord',
    inputType: 'money'
  }, {
    type: 'text',
    content: 'remboursable sur '
  }, {
    type: 'editable',
    key: 'mois',
    inputType: 'number'
  }, {
    type: 'text',
    content: 'mois'
  }, {
    type: "br"
  }, {
    type: "br"
  }], [{
    type: 'text',
    content: 'Je vous prie de recevoir, Monsieur le Directeur Général, mes cordiales salutations.'
  }, {
    type: "br"
  }, {
    type: "br"
  }], [{
    type: 'block_at_right',
    keys: ['contractor_name'],
    content: [{
      type: 'editable',
      key: 'contractor_name',
      inputType: 'text',
      placeholder: 'Nom du constituant'
    }]
  }]]
});

/***/ })

}]);