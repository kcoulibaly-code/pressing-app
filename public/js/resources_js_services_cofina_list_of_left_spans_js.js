"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_services_cofina_list_of_left_spans_js"],{

/***/ "./resources/js/services/cofina/list_of_left_spans.js":
/*!************************************************************!*\
  !*** ./resources/js/services/cofina/list_of_left_spans.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var realEntity = "AFG";
var entityType = "BANK";
realEntity = realEntity.toLowerCase();
entityType = entityType.toLowerCase();
var listOfLeftSpans = {
  spans: [{
    name: "Fiche de Screening E&S de Crédit",
    slug: "fiche_de_screening_es_de_credit",
    categorie_client: ["Corporate", "Retail", "Both"],
    component_offview: function component_offview() {
      return __webpack_require__("./resources/js/components/offview lazy recursive ^\\.\\/.*\\/scenes\\/SceneFicheScreeningEs\\.vue$")("./".concat(entityType, "/").concat(realEntity, "/scenes/SceneFicheScreeningEs.vue"));
    },
    component_childrens: ['FICHES1'],
    linkedTo: ['MEMORANDUM_CREDIT'],
    divName: "printmemo"
  }, {
    name: "Fiche de catégorisation E&S",
    slug: "fiche_de_categorisation_es",
    categorie_client: ["Corporate", "Retail", "Both"],
    component_offview: function component_offview() {
      return __webpack_require__("./resources/js/components/offview lazy recursive ^\\.\\/.*\\/scenes\\/SceneFicheCotationEs\\.vue$")("./".concat(entityType, "/").concat(realEntity, "/scenes/SceneFicheCotationEs.vue"));
    },
    component_childrens: ['COTES1'],
    linkedTo: ['MEMORANDUM_CREDIT'],
    divName: "printmemo"
  },
  // {
  //     name: "Fiche d'informations E&S au comité de credit",
  //     slug: "Fiche_d_informations_E",
  //     categorie_client: ["Corporate", "Retail", "Both"],
  //     component_offview: "activite-rse",
  //     component_childrens: ['COTES1'],
  //     linkedTo : ['CONTRE_ANALYSE_FILIALE'],
  //     divName: "printmemo",
  // },
  {
    name: "Compte rendu de visite es",
    slug: "compte_rendu_de_visite_es",
    categorie_client: ["Corporate", "Retail", "Both"],
    component_offview: "offview_compte_rendu_visite",
    component_childrens: [],
    linkedTo: ['MEMORANDUM_CREDIT'],
    divName: "printmemo"
  }, {
    name: "Fiches remontée incidents",
    slug: "fiche_remonte_incident",
    categorie_client: ["Corporate", "Retail", "Both"],
    component_offview: "offview_fiche_remonte_incident",
    component_childrens: [],
    linkedTo: ['MEMORANDUM_CREDIT'],
    divName: "printmemo"
  }],
  leftSpanAndDivName: []
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listOfLeftSpans);

/***/ })

}]);