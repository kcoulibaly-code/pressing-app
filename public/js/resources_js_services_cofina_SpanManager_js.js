"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_services_cofina_SpanManager_js"],{

/***/ "./resources/js/services/cofina/SpanManager.js":
/*!*****************************************************!*\
  !*** ./resources/js/services/cofina/SpanManager.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _list_of_left_spans__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list_of_left_spans */ "./resources/js/services/cofina/list_of_left_spans.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var SpanManager = /*#__PURE__*/function () {
  function SpanManager() {
    _classCallCheck(this, SpanManager);
    this.listOfSpans = _list_of_left_spans__WEBPACK_IMPORTED_MODULE_0__["default"].spans;
  }
  return _createClass(SpanManager, [{
    key: "getCurrentLeftSpans",
    value: function getCurrentLeftSpans() {
      var category = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var dossier = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      // Récupérer les spans correspondant à la catégorie spécifiée

      return this.listOfSpans.filter(function (span) {
        if (span.categorie_client.includes(category) || span.categorie_client.includes("Both")) {
          if (['', null, undefined].includes(span === null || span === void 0 ? void 0 : span.applied_templ_id)) {
            return span;
          } else {
            var _dossier$applied_temp;
            var applied_templ_id = (_dossier$applied_temp = dossier === null || dossier === void 0 ? void 0 : dossier.applied_templ_id) !== null && _dossier$applied_temp !== void 0 ? _dossier$applied_temp : null;
            if (['', null, undefined].includes(dossier === null || dossier === void 0 ? void 0 : dossier.applied_templ_id)) {
              applied_templ_id = 1;
            }
            if (span !== null && span !== void 0 && span.applied_templ_id.includes(applied_templ_id)) {
              return span;
            }
          }
        }
      });
    }
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SpanManager);

/***/ }),

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