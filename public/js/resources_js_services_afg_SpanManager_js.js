(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_services_afg_SpanManager_js"],{

/***/ "./resources/js/components/offview lazy recursive ^\\.\\/.*\\/scenes\\/SceneMemo\\.vue$":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/offview/ lazy ^\.\/.*\/scenes\/SceneMemo\.vue$ namespace object ***!
  \*************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./bank/afg/scenes/SceneMemo.vue": "./resources/js/components/offview/bank/afg/scenes/SceneMemo.vue"
};

function webpackAsyncContext(req) {
	return Promise.resolve().then(() => {
		if(!__webpack_require__.o(map, req)) {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		}

		var id = map[req];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./resources/js/components/offview lazy recursive ^\\.\\/.*\\/scenes\\/SceneMemo\\.vue$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./resources/js/services/afg/SpanManager.js":
/*!**************************************************!*\
  !*** ./resources/js/services/afg/SpanManager.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _list_of_left_spans__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list_of_left_spans */ "./resources/js/services/afg/list_of_left_spans.js");
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
    this.exceptLeftSpans = _list_of_left_spans__WEBPACK_IMPORTED_MODULE_0__["default"].exceptLeftSpans;
  }
  return _createClass(SpanManager, [{
    key: "getCurrentLeftSpans",
    value: function getCurrentLeftSpans() {
      var category = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var dossier = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      // Récupérer les spans correspondant à la catégorie spécifiée

      var pub_workflow = (dossier === null || dossier === void 0 ? void 0 : dossier.pub_workflow) || null;
      var what_to_be_produceds = [];
      if (Array.isArray(pub_workflow) && pub_workflow.length > 0) {
        what_to_be_produceds = pub_workflow.map(function (pw) {
          return pw === null || pw === void 0 ? void 0 : pw.responsible_must_produce;
        });
      }
      what_to_be_produceds.push("AUTRE");
      return this.listOfSpans.filter(function (span) {
        var pass = false;
        span.what_to_be_produced.forEach(function (el) {
          if (what_to_be_produceds.includes(el)) {
            pass = true;
          }
        });
        if (pass && (span.categorie_client.includes(category) || span.categorie_client.includes("Both"))) {
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
  }, {
    key: "getExceptLeftSpans",
    value: function getExceptLeftSpans() {
      return this.exceptLeftSpans;
    }
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SpanManager);

/***/ }),

/***/ "./resources/js/services/afg/list_of_left_spans.js":
/*!*********************************************************!*\
  !*** ./resources/js/services/afg/list_of_left_spans.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
    name: "Memorandum de demande crédit",
    slug: "memorandum_de_demande_credit",
    categorie_client: ["Corporate"],
    component_offview: function component_offview() {
      return __webpack_require__("./resources/js/components/offview lazy recursive ^\\.\\/.*\\/scenes\\/SceneOne\\.vue$")("./".concat(entityType, "/").concat(realEntity, "/scenes/SceneOne.vue"));
    },
    // component_childrens: ["T0","T2","T5","T7","T8","T9","T11","T31","T12"],
    // component_childrens: ["T0","T8", "T17", "T11", "T6", "T51","T7","T12","T2","T5","T9", "T13", "T21", "FDR", "T1", "T3", "T4",  "T10", "T14", "T15", "T16",  "T18", "T19", "T20"],
    component_childrens: ["T0", "T8", "T17", "T11", "T6", "T51", "T7", "T12", "T1", "T5", "T9", "T52", "T53", "T13", "T21", "FDR"],
    divName: "printmemo",
    applied_templ_id: [0, 1],
    is_off_bank: true,
    what_to_be_produced: ["MEMORANDUM_CREDIT"]
  }, {
    name: "Memorandum de revue annuelle / Prorogation",
    slug: "memorandum_de_revue_annuelle_prorogation",
    categorie_client: ["Corporate"],
    component_offview: function component_offview() {
      return __webpack_require__("./resources/js/components/offview lazy recursive ^\\.\\/.*\\/scenes\\/SceneOne\\.vue$")("./".concat(entityType, "/").concat(realEntity, "/scenes/SceneOne.vue"));
    },
    component_childrens: ["RAPA0", "RAPA1", "RAPA2", "RAPA3", "RAPA4"],
    divName: "printmemo",
    applied_templ_id: [3],
    is_off_bank: true,
    what_to_be_produced: ["MEMORANDUM_CREDIT"]
  }, {
    name: "Carcasse",
    slug: "carcasse",
    categorie_client: ["Retail"],
    component_offview: function component_offview() {
      return __webpack_require__("./resources/js/components/offview lazy recursive ^\\.\\/.*\\/scenes\\/SceneOne\\.vue$")("./".concat(entityType, "/").concat(realEntity, "/scenes/SceneOne.vue"));
    },
    component_childrens: ["DCPP-DCP1", "DCPP-DCP2", "DCPP-DCP3", "DCPP-DCP4", "DCPP-DCP5", "DCPP-DCP6", "DCPP-DCP7", "DCPP-DCP8", "DCPP-DCP9", "DCPP-DCP10", "DCPP-DCP11", "DAJ-PROOFS"],
    divName: "printmemo",
    applied_templ_id: [2],
    is_off_bank: true,
    what_to_be_produced: ["MEMORANDUM_CREDIT"]
  }, {
    name: "Memorandum",
    slug: "memorandum",
    categorie_client: ["Retail"],
    component_offview: function component_offview() {
      return __webpack_require__("./resources/js/components/offview lazy recursive ^\\.\\/.*\\/scenes\\/SceneMemo\\.vue$")("./".concat(entityType, "/").concat(realEntity, "/scenes/SceneMemo.vue"));
    },
    component_childrens: ["DCPP1", "DCPP2", "DCPP3", "DCPP4", "DCPP5", "DCPP6", "DCPP7", "DCPP8", "PRDAJC"],
    // PRDAJC
    divName: "printmemo",
    applied_templ_id: [2],
    is_off_bank: true,
    what_to_be_produced: ["MEMORANDUM_CREDIT"]
  }, {
    name: "CRESCO",
    slug: "cresco",
    categorie_client: ["Retail"],
    component_offview: function component_offview() {
      return __webpack_require__("./resources/js/components/offview lazy recursive ^\\.\\/.*\\/scenes\\/SceneOne\\.vue$")("./".concat(entityType, "/").concat(realEntity, "/scenes/SceneOne.vue"));
    },
    component_childrens: ["DPS-DP1"],
    divName: "printmemo",
    applied_templ_id: [6],
    is_off_bank: true,
    what_to_be_produced: ["MEMORANDUM_CREDIT"]
  }, {
    name: "Fiche Cresco",
    slug: "fiche_cresco",
    categorie_client: ["Retail"],
    component_offview: "fiche-cresco",
    component_childrens: [],
    divName: "printpvfil",
    applied_templ_id: [6],
    what_to_be_produced: ["MEMORANDUM_CREDIT"]
  }, {
    name: "Memorandum",
    slug: "memorandum",
    categorie_client: ["Retail"],
    component_offview: function component_offview() {
      return __webpack_require__("./resources/js/components/offview lazy recursive ^\\.\\/.*\\/scenes\\/SceneMemo\\.vue$")("./".concat(entityType, "/").concat(realEntity, "/scenes/SceneMemo.vue"));
    },
    component_childrens: ["CS1", "CS2", "CS3", "CS4", "CS5", "CS6", "CS7", "CS8", "PRDAJC"],
    divName: "printmemo",
    applied_templ_id: [6],
    is_off_bank: true,
    what_to_be_produced: ["MEMORANDUM_CREDIT"]
  }, {
    name: "Découvert Privilège",
    slug: "decouvert_privilege",
    categorie_client: ["Retail"],
    component_offview: function component_offview() {
      return __webpack_require__("./resources/js/components/offview lazy recursive ^\\.\\/.*\\/scenes\\/SceneOne\\.vue$")("./".concat(entityType, "/").concat(realEntity, "/scenes/SceneOne.vue"));
    },
    component_childrens: ["DCPV0"],
    divName: "printmemo",
    applied_templ_id: [7],
    is_off_bank: true,
    what_to_be_produced: ["MEMORANDUM_CREDIT"]
  }, {
    name: "Fiche Découvert Privilège",
    slug: "fiche_decouvert_privilege",
    categorie_client: ["Retail"],
    component_offview: "fiche-decouvert-privilege",
    component_childrens: [],
    divName: "printpvfil",
    applied_templ_id: [7],
    what_to_be_produced: ["MEMORANDUM_CREDIT"]
  }, {
    name: "Memorandum",
    slug: "memorandum",
    categorie_client: ["Retail"],
    component_offview: function component_offview() {
      return __webpack_require__("./resources/js/components/offview lazy recursive ^\\.\\/.*\\/scenes\\/SceneMemo\\.vue$")("./".concat(entityType, "/").concat(realEntity, "/scenes/SceneMemo.vue"));
    },
    component_childrens: ["DP0", "DP1", "DP2", "DP3", "DP4", "DP5", "DP6", "DP7", "PRDAJC"],
    divName: "printmemo",
    applied_templ_id: [7],
    is_off_bank: true,
    what_to_be_produced: ["MEMORANDUM_CREDIT"]
  }, {
    name: "Demande autorisation de dépassement / Exceptionnelle",
    slug: "demande_autorisation_depassement_exceptionnelle",
    categorie_client: ["Corporate"],
    component_offview: function component_offview() {
      return __webpack_require__("./resources/js/components/offview lazy recursive ^\\.\\/.*\\/scenes\\/SceneOne\\.vue$")("./".concat(entityType, "/").concat(realEntity, "/scenes/SceneOne.vue"));
    },
    component_childrens: ["DADE0", "DADE1", "DADE2", "DADE70", "DADE71"],
    divName: "printmemo",
    applied_templ_id: [5],
    is_off_bank: true,
    what_to_be_produced: ["MEMORANDUM_CREDIT"]
  }, {
    name: "Demande autorisation de dépassement / Exceptionnelle",
    slug: "demande_autorisation_depassement_exceptionnelle",
    categorie_client: ["Retail"],
    component_offview: function component_offview() {
      return __webpack_require__("./resources/js/components/offview lazy recursive ^\\.\\/.*\\/scenes\\/SceneOne\\.vue$")("./".concat(entityType, "/").concat(realEntity, "/scenes/SceneOne.vue"));
    },
    component_childrens: ["DADER0", "DADER1", "DADER2", "DADER3", "DAJ-PROOFS"],
    divName: "printmemo",
    applied_templ_id: [5],
    is_off_bank: true,
    what_to_be_produced: ["MEMORANDUM_CREDIT"]
  }, {
    name: "Fiche de scoring",
    slug: "fiche_de_scoring",
    categorie_client: ["Retail"],
    component_offview: "scene-fiche-scoring",
    component_childrens: ["FS0"],
    divName: "printmemo",
    applied_templ_id: [2],
    is_off_bank: true,
    what_to_be_produced: ["MEMORANDUM_CREDIT"]
  }, {
    name: "Tableau d’amortissement",
    slug: "tableau_d_amortissement",
    categorie_client: ["Retail"],
    component_offview: "scene-tableau-amortissement",
    component_childrens: ["TAMOR0"],
    divName: "printmemo",
    is_off_bank: true,
    applied_templ_id: [2],
    what_to_be_produced: ["MEMORANDUM_CREDIT"]
  }, {
    name: "Fiche de cotation ESG",
    slug: "fiche_de_cotation",
    categorie_client: ["Corporate"],
    component_offview: "fiche-cotation",
    component_childrens: ["COTES1", "COTES2"],
    divName: "printmemo",
    applied_templ_id: [0, 1],
    is_off_bank: true,
    what_to_be_produced: ["MEMORANDUM_CREDIT"]
  }, {
    name: "Analyse financière",
    slug: "analyse_financiere",
    categorie_client: ["Corporate"],
    component_offview: "analyse-financiere",
    component_childrens: ["COTES1", "COTES2"],
    divName: "printmemo",
    applied_templ_id: [0, 1],
    is_off_bank: true,
    what_to_be_produced: ["MEMORANDUM_CREDIT"]
  }, {
    name: "Annexes",
    slug: "annexes",
    categorie_client: ["Corporate"],
    component_offview: "annexes",
    component_childrens: ["COTES1", "COTES2"],
    divName: "printmemo",
    applied_templ_id: [0, 1],
    is_off_bank: true,
    what_to_be_produced: ["MEMORANDUM_CREDIT"]
  }, {
    name: "Grille de contrôle",
    slug: "grille_de_controle",
    categorie_client: ["Retail"],
    component_offview: "grille-controle",
    component_childrens: ["GC0", "GC1", "GC2", "GC3", "GC4", "GC5"],
    divName: "printpvfil",
    what_to_be_produced: ["CONTRE_ANALYSE_MO"]
  }, {
    name: "Grille de contrôle (Revue)",
    slug: "grille_de_controle_revue",
    categorie_client: ["Retail"],
    component_offview: "grille-controle-revue",
    component_childrens: ["REV0", "REV1", "REV2", "REV3", "REV4", "REV5"],
    divName: "printpvfil",
    what_to_be_produced: ["REVUE_DCPP"]
  }, {
    name: "Contre Etude",
    slug: "contre_etude",
    categorie_client: ["Retail"],
    component_offview: "contre-etude",
    component_childrens: ["CA0", "CA1", "CA2", "CA3", "CA4"],
    divName: "printpvfil",
    what_to_be_produced: ["CONTRE_ANALYSE_FILIALE"]
  }, {
    name: "Fiche de scoring Final",
    slug: "fiche_de_scoring final",
    categorie_client: ["Retail"],
    component_offview: "scene-fiche-scoring-final",
    component_childrens: ["FS1"],
    divName: "printmemo",
    applied_templ_id: [2],
    what_to_be_produced: ["CONTRE_ANALYSE_FILIALE"]
  }, {
    name: "Contre Etude",
    slug: "contre_etude",
    categorie_client: ["Corporate"],
    component_offview: "contre-etude",
    // "CA5" deleted
    component_childrens: ["CA6", "CA7", "CA8", "CA9", "CA10", "CA11", "CA12", "CA13"],
    divName: "printpvfil",
    what_to_be_produced: ["CONTRE_ANALYSE_FILIALE"]
  }, {
    name: "Offre de crédit aux particuliers",
    slug: "offre_credit_aux_particuliers",
    categorie_client: ["Retail"],
    component_offview: "offre-credit-aux-particuliers",
    component_childrens: ["NODE1"],
    divName: "printpvfil",
    applied_templ_id: [2],
    what_to_be_produced: ["MEMORANDUM_CREDIT"]
  }, {
    name: "Notification concours bancaires",
    slug: "notification_concours_bancaires",
    categorie_client: ["Corporate"],
    component_offview: "notification-concours-bancaire",
    component_childrens: ["NODE1"],
    divName: "printpvfil",
    what_to_be_produced: ["MEMORANDUM_CREDIT"]
  }, {
    name: "Convention de crédit amortissable",
    slug: "convention_de_credit_amortissable",
    categorie_client: ["Retail"],
    component_offview: "convention-de-credit-amortissable",
    component_childrens: ["NODE2"],
    divName: "printpvfil",
    applied_templ_id: [2],
    what_to_be_produced: ["MEMORANDUM_CREDIT"]
  }, {
    name: "Billet à ordre",
    slug: "billet_a_ordre",
    categorie_client: ["Retail"],
    component_offview: "billet-a-ordre",
    component_childrens: ["NODE3"],
    divName: "printpvfil",
    what_to_be_produced: ["MEMORANDUM_CREDIT"]
  },
  // {
  //     name: "Cautionnement personnel solidaire",
  //     slug: "cautionnement_personnel_solidaire",
  //     categorie_client: ["Retail"],
  //     component_offview: "cautionnement-personnel-solidaire",
  //     component_childrens: ["NODE4"],
  //     divName: "printpvfil",
  //     applied_templ_id: [2],
  //     what_to_be_produced: ["MEMORANDUM_CREDIT"],
  // },

  {
    name: "Fiche de suivi du client particulier",
    slug: "fiche_suivi_client_particulier",
    categorie_client: ["Retail"],
    component_offview: "fiche-de-suivi-du-client-particulier",
    component_childrens: ["NODE5"],
    divName: "printmemo",
    applied_templ_id: [2],
    what_to_be_produced: ["MEMORANDUM_CREDIT"]
  }, {
    name: "Condition Génerale",
    slug: "condition_generale",
    categorie_client: ["Retail"],
    component_offview: "condition-generale",
    component_childrens: ["NODE1"],
    divName: "printpvfil",
    applied_templ_id: [6],
    what_to_be_produced: ["MEMORANDUM_CREDIT"]
  }, {
    name: "Fiche de Prélevement",
    slug: "condition_generale",
    categorie_client: ["Retail"],
    component_offview: "fiche-de-prelevement",
    component_childrens: ["NODE1"],
    divName: "printpvfil",
    applied_templ_id: [6],
    what_to_be_produced: ["MEMORANDUM_CREDIT"]
  }, {
    name: "Note Technique",
    slug: "note_technique",
    categorie_client: ["Retail"],
    component_offview: "note-technique",
    component_childrens: ["NT0", "NT1", "NT2", "NT3"],
    divName: "printpvfil",
    what_to_be_produced: ["CONTRE_ANALYSE_GROUPE"]
  }, {
    name: "Note Technique",
    slug: "note_technique",
    categorie_client: ["Corporate"],
    component_offview: "note-technique",
    component_childrens: ["NT0", "NT1", "NT2", "NT3"],
    divName: "printpvfil",
    what_to_be_produced: ["CONTRE_ANALYSE_GROUPE"]
  }, {
    name: "Rédaction des actes de garanties",
    slug: "redaction_des_actes_de_garanties",
    categorie_client: ["Retail"],
    component_offview: "redaction-actes-garanties",
    component_childrens: ["NODE2"],
    divName: "printpvfil",
    what_to_be_produced: ["CONTRE_ANALYSE_DAJ"]
  }, {
    name: "Rédaction des actes de garanties",
    slug: "credit_facility_security_agreement",
    categorie_client: ["Corporate"],
    component_offview: "facility-security-agreement",
    component_childrens: ["CFSA0", "CFSA1"],
    divName: "printpvfil",
    what_to_be_produced: ["CONTRE_ANALYSE_DAJ"]
  }, {
    name: "Fiche d'analyse juridique des dossiers de crédit",
    slug: "Fiche_d_analyse_juridique_des_dossiers_de_credit",
    categorie_client: ["Corporate"],
    component_offview: "fiche-analyse-juridique",
    component_childrens: ["CFSA2"],
    divName: "printpvfil",
    what_to_be_produced: ["CONTRE_ANALYSE_DAJ"]
  }, {
    name: "Autre document juridique",
    slug: "autre_document_juridique",
    categorie_client: ["Retail"],
    component_offview: "autre-document-juridique",
    component_childrens: ["DAJAD0"],
    divName: "printpvfil",
    what_to_be_produced: ["CONTRE_ANALYSE_DAJ"]
  },
  // {
  //     name: "Rédaction de la fiche de décaissement des fonds",
  //     slug: "redaction_de_la_fiche_de_décaissement_des_fonds",
  //     categorie_client: ["Retail", "Corporate"],
  //     component_offview: "redaction-fiche-decaissement-fonds",
  //     component_childrens: [],
  //     divName: "printmemo",
  // },
  {
    name: "Mémorandum de mise en place",
    slug: "memorandum_mise_place",
    categorie_client: ["Retail"],
    component_offview: "memorandum-mise-place",
    component_childrens: ["MP0", "MP1", "MP2", "MP3", "MP4", "MP5"],
    divName: "printpvfil",
    what_to_be_produced: ["CONTRE_ANALYSE_CASE"]
  }, {
    name: "Contrôle/Vérification",
    slug: "controle_verification",
    categorie_client: ["Retail"],
    component_offview: "controle-verification",
    component_childrens: ["CV0", "CV1", "CV2", "CV3", "CV4"],
    divName: "printpvfil",
    what_to_be_produced: ["CONTRE_ANALYSE_CASE"]
  }, {
    name: "Mémorandum de mise en place",
    slug: "memorandum_mise_place",
    categorie_client: ["Corporate"],
    component_offview: "memorandum-mise-place",
    component_childrens: ["MPC0", "MPC1", "MPC2", "MPC3", "MPC4", "MPC5"],
    divName: "printpvfil",
    what_to_be_produced: ["CONTRE_ANALYSE_CASE"]
  }, {
    name: "Contrôle/Vérification",
    slug: "controle_verification",
    categorie_client: ["Corporate"],
    component_offview: "controle-verification",
    component_childrens: ["CVC0", "CVC1", "CVC2", "CVC3", "CVC4"],
    divName: "printpvfil",
    what_to_be_produced: ["CONTRE_ANALYSE_CASE"]
  }, {
    name: "Documents annexes",
    slug: "documents_annexes",
    categorie_client: ["Retail"],
    component_offview: "documents-annexes",
    component_childrens: ["AD0"],
    divName: "printpvfil",
    what_to_be_produced: ["CONTRE_ANALYSE_CASE"]
  }, {
    name: "Fiche de décaissement des fonds",
    slug: "fiche_de_decaissement_des_fonds",
    categorie_client: ["Retail", "Corporate"],
    component_offview: "fiche-decaissement-fonds",
    component_childrens: [],
    divName: "printpvfil",
    what_to_be_produced: ["CONTRE_ANALYSE_BO"]
  }, {
    name: "PV CSC",
    slug: "pv_csc",
    categorie_client: ["Corporate", "Retail"],
    component_offview: "pv-csc",
    component_childrens: [],
    divName: "printpvfil",
    what_to_be_produced: ["PV_CONTRE_ANALYSE_GROUPE"]
  }, {
    name: "Fiches de lectures",
    slug: "fiches_de_lectures",
    categorie_client: ["Both"],
    component_offview: "scene-fiche-lecture",
    component_childrens: ["FL0"],
    divName: "printmemo",
    is_off_bank: true,
    what_to_be_produced: ["AUTRE"]
  }, {
    name: "Commentaires Dossier",
    slug: "commentaires_dossier",
    categorie_client: ["Both"],
    component_offview: "commentaire-dossier",
    divName: "printcomment",
    what_to_be_produced: ["AUTRE"]
  }, {
    name: "Assurance",
    slug: "assurance",
    categorie_client: ["Retail"],
    component_offview: "assurance",
    component_childrens: ["ASSU0"],
    divName: "printmemo",
    is_off_bank: true,
    applied_templ_id: [2],
    what_to_be_produced: ["MEMORANDUM_CREDIT"]
  },
  // {
  //     name: "Déclaration d'engagement",
  //     slug: "declaration_engagement",
  //     categorie_client: ["Retail"],
  //     component_offview: "declaration-engagement",
  //     component_childrens: ["NODE6"],
  //     divName: "printmemo",
  //     is_off_bank: true,
  //     applied_templ_id: [2],
  //     what_to_be_produced: ["MEMORANDUM_CREDIT"],
  // },
  // {
  //     name: "Mandat d'investigation",
  //     slug: "mandat_investigation",
  //     categorie_client: ["Retail"],
  //     component_offview: "mandat-investigation",
  //     component_childrens: ["NODE7"],
  //     divName: "printmemo",
  //     is_off_bank: true,
  //     applied_templ_id: [2],
  //     what_to_be_produced: ["MEMORANDUM_CREDIT"],
  // },
  {
    name: "Autre Document",
    slug: "autre_document",
    categorie_client: ["Retail"],
    component_offview: "autre-document",
    component_childrens: ["AD0"],
    divName: "printmemo",
    is_off_bank: true,
    applied_templ_id: [2],
    what_to_be_produced: ["MEMORANDUM_CREDIT"]
  }, {
    name: "Autre Document",
    slug: "autre_document",
    categorie_client: ["Retail"],
    component_offview: "autres-documents",
    component_childrens: ["AD3"],
    divName: "printmemo",
    is_off_bank: true,
    applied_templ_id: [6],
    what_to_be_produced: ["MEMORANDUM_CREDIT"]
  }],
  leftSpanAndDivName: [],
  exceptLeftSpans: {
    name: "Memorandum",
    slug: "memorandum",
    categorie_client: ["Retail"],
    component_offview: function component_offview() {
      return __webpack_require__("./resources/js/components/offview lazy recursive ^\\.\\/.*\\/scenes\\/SceneMemo\\.vue$")("./".concat(entityType, "/").concat(realEntity, "/scenes/SceneMemo.vue"));
    },
    component_childrens: ["DCPP1", "DCPP2", "DCPP3", "DCPP4", "DCPP5", "DCPP6", "DCPP7", "PRDAJC"],
    divName: "printmemo",
    applied_templ_id: [2],
    is_off_bank: true,
    what_to_be_produced: ["MEMORANDUM_CREDIT"]
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listOfLeftSpans);

/***/ })

}]);