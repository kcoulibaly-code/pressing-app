"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_offview_bank_afg_memo_fiche_cotation_COTES2_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/fiche_cotation/COTES2.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/fiche_cotation/COTES2.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    dossier_credit: Object,
    tb_display_name: String
  },
  data: function data() {
    return {
      environmentalCriteria: [{
        theme: "Gestion des ressources Émissions de GES",
        question: "L’entreprise utilise-t-elle des énergies renouvelables ou a-t-elle des pratiques éco-efficaces ?",
        ponderation: "20%"
      }, {
        theme: "Gestion des ressources Émissions de GES",
        question: "Quelles sont les mesures prises pour réduire les émissions de CO2, et autres GES ?",
        ponderation: "30%"
      }, {
        theme: "Gestion des déchets",
        question: "Comment l’entreprise gère-t-elle ses déchets (recyclage, réutilisation, élimination) ?",
        ponderation: "20%"
      }, {
        theme: "Biodiversité",
        question: "L’entreprise a-t-elle un impact sur les écosystèmes locaux ? Comment les préserve-t-elle ?",
        ponderation: "15%"
      }, {
        theme: "Risques environnementaux",
        question: "L’entreprise est-elle exposée à des risques climatiques ou réglementaires ? Comment y fait-elle face ?",
        ponderation: "15%"
      }],
      socialCriteria: [{
        theme: "Conditions de travail",
        question: "Les conditions de travail sont-elles sûres et équitables ?",
        ponderation: "25%"
      }, {
        theme: "Diversité et inclusion",
        question: "L’entreprise promeut-elle la diversité et l’inclusion ?",
        ponderation: "20%"
      }, {
        theme: "Relations avec les communautés",
        question: "L’entreprise contribue-t-elle au développement local ?",
        ponderation: "20%"
      }, {
        theme: "Formation et développement",
        question: "Les employés ont-ils accès à des programmes de formation et de développement ?",
        ponderation: "15%"
      }, {
        theme: "Santé et bien-être",
        question: "L’entreprise soutient-elle le bien-être de ses employés ?",
        ponderation: "20%"
      }],
      governanceCriteria: [{
        theme: "Éthique et transparence",
        question: "L'entreprise a-t-elle une politique de lutte contre la corruption et une communication transparente ?",
        ponderation: "25%"
      }, {
        theme: "Structure de gouvernance",
        question: "La gouvernance est-elle indépendante et équilibrée ?",
        ponderation: "20%"
      }, {
        theme: "Gestion des risques",
        question: "L'entreprise identifie-t-elle et gère-t-elle ses risques (opérationnels, financiers, ESG) ?",
        ponderation: "25%"
      }, {
        theme: "Rémunération des dirigeants",
        question: "Les rémunérations des dirigeants sont-elles alignées sur les performances ESG ?",
        ponderation: "15%"
      }, {
        theme: "Engagement des actionnaires",
        question: "L'entreprise dialogue-t-elle avec ses actionnaires et respecte-t-elle leurs droits ?",
        ponderation: "15%"
      }],
      esgRanges: [{
        score: "[0-1.5]",
        category: "D",
        factor: "0",
        description: "Risque ESG élevé, nécessité d’améliorations significatives."
      }, {
        score: "[1.6-3]",
        category: "C",
        factor: "2",
        description: "Risque ESG modéré, potentiel d’amélioration."
      }, {
        score: "[3.1-4]",
        category: "B",
        factor: "3",
        description: "Bonnes pratiques ESG, faible risque."
      }, {
        score: "[4.1-5]",
        category: "A",
        factor: "4",
        description: "Excellence ESG, entreprise leader."
      }],
      formData: {
        notes: [],
        environmentalResponses: [],
        environmentalTotals: [],
        environmentalComments: [],
        environmentalTotalScore: 0,
        socialResponses: [],
        socialTotals: [],
        socialComments: [],
        socialTotalScore: 0,
        governanceResponses: [],
        governanceTotals: [],
        governanceComments: [],
        governanceTotalScore: 0,
        globalEsgComment: ""
      }
    };
  },
  computed: {
    globalEsgScore: function globalEsgScore() {
      var envScore = this.formData.environmentalTotalScore || 0;
      var socScore = this.formData.socialTotalScore || 0;
      var govScore = this.formData.governanceTotalScore || 0;
      return (envScore * 0.4 + socScore * 0.3 + govScore * 0.3).toFixed(1);
    }
  },
  methods: {
    getTotalClass: function getTotalClass(total) {
      var score = parseFloat(total) || 0;
      if (score >= 0 && score <= 1.5) return 'bg-danger text-white';
      if (score >= 1.6 && score <= 3) return 'bg-orange';
      if (score >= 3.1 && score <= 5) return 'bg-green text-white';
      return '';
    },
    getScoreClass: function getScoreClass(range, currentScore) {
      var score = parseFloat(currentScore) || 0;
      if (range.score === "[0-1.5]" && score >= 0 && score <= 1.5) return 'bg-orange text-white';
      if (range.score === "[1.6-3]" && score >= 1.6 && score <= 3) return 'bg-maroon text-white';
      if (range.score === "[3.1-4]" && score >= 3.1 && score <= 4) return 'bg-green text-white';
      if (range.score === "[4.1-5]" && score >= 4.1 && score <= 5) return 'bg-success text-white';
      return '';
    },
    formatDate: function formatDate(dateString) {
      if (!dateString) return '';
      var options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      };
      return new Date(dateString).toLocaleDateString('fr-FR', options);
    },
    loadFormData: function loadFormData() {
      var _this$dossier_credit;
      if ((_this$dossier_credit = this.dossier_credit) !== null && _this$dossier_credit !== void 0 && _this$dossier_credit.cred_pub_tb_170001) {
        this.formData = JSON.parse(JSON.stringify(this.dossier_credit.cred_pub_tb_170001));

        // Initialize arrays if empty
        var initArray = function initArray(arr, length) {
          return arr && arr.length === length ? arr : Array(length).fill('');
        };
        this.formData.environmentalResponses = initArray(this.formData.environmentalResponses, this.environmentalCriteria.length);
        this.formData.socialResponses = initArray(this.formData.socialResponses, this.socialCriteria.length);
        this.formData.governanceResponses = initArray(this.formData.governanceResponses, this.governanceCriteria.length);
      }
    }
  },
  created: function created() {
    this.loadFormData();
  },
  watch: {
    dossier_credit: {
      handler: function handler() {
        this.loadFormData();
      },
      deep: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/fiche_cotation/COTES2.vue?vue&type=template&id=20bc66f1&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/fiche_cotation/COTES2.vue?vue&type=template&id=20bc66f1&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$dossier_credit, _vm$formData$notes;
  var _vm = this,
    _c = _vm._self._c;
  return (_vm$dossier_credit = _vm.dossier_credit) !== null && _vm$dossier_credit !== void 0 && _vm$dossier_credit.cred_pub_tb_170001 ? _c("div", {
    staticClass: "esg-offview-container"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "table-responsive mb-5"
  }, [_c("h5", {
    staticClass: "mb-3 sticky-theme"
  }, [_vm._v("1. Critères Environnementaux (E) - Pondération totale : 40%")]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(1), _vm._v(" "), _c("tbody", [_vm._l(_vm.environmentalCriteria, function (criterion, index) {
    return _c("tr", {
      key: "e-" + index
    }, [_c("td", {
      staticClass: "text-nowrap sticky-theme"
    }, [_c("b", [_vm._v(_vm._s(criterion.theme))])]), _vm._v(" "), _c("td", {
      staticClass: "sticky-question"
    }, [_vm._v(_vm._s(criterion.question))]), _vm._v(" "), _c("td", {
      staticClass: "text-center text-nowrap"
    }, [_vm._v("\n                " + _vm._s(_vm.formData.environmentalResponses[index] || "-") + "\n              ")]), _vm._v(" "), _c("td", {
      staticClass: "text-center text-nowrap"
    }, [_vm._v(_vm._s(criterion.ponderation))]), _vm._v(" "), _c("td", {
      staticClass: "text-center text-nowrap"
    }, [_vm._v("\n                " + _vm._s(_vm.formData.environmentalTotals[index] || 0) + "\n              ")]), _vm._v(" "), _c("td", {
      staticClass: "comments-cell"
    }, [_vm.formData.environmentalComments[index] ? _c("div", {
      staticClass: "comment-content"
    }, [_vm._v("\n                  " + _vm._s(_vm.formData.environmentalComments[index]) + "\n                ")]) : _c("div", {
      staticClass: "text-muted"
    }, [_vm._v("-")])])]);
  }), _vm._v(" "), _c("tr", [_vm._m(2), _vm._v(" "), _c("td"), _vm._v(" "), _c("td", [_vm._v("TOTAL (E)")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold text-center"
  }, [_vm._v("40%")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold text-center",
    "class": _vm.getTotalClass(_vm.formData.environmentalTotalScore)
  }, [_vm._v("\n                " + _vm._s(_vm.formData.environmentalTotalScore || 0) + "\n              ")]), _vm._v(" "), _c("td")])], 2)])]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive mb-5"
  }, [_c("h5", {
    staticClass: "mb-3 sticky-theme"
  }, [_vm._v("2. Critères Sociaux (S) - Pondération totale : 30%")]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(3), _vm._v(" "), _c("tbody", [_vm._l(_vm.socialCriteria, function (criterion, index) {
    return _c("tr", {
      key: "s-" + index
    }, [_c("td", {
      staticClass: "text-nowrap sticky-theme"
    }, [_c("b", [_vm._v(_vm._s(criterion.theme))])]), _vm._v(" "), _c("td", {
      staticClass: "sticky-question"
    }, [_vm._v(_vm._s(criterion.question))]), _vm._v(" "), _c("td", {
      staticClass: "text-center text-nowrap"
    }, [_vm._v("\n                " + _vm._s(_vm.formData.socialResponses[index] || "-") + "\n              ")]), _vm._v(" "), _c("td", {
      staticClass: "text-center text-nowrap"
    }, [_vm._v(_vm._s(criterion.ponderation))]), _vm._v(" "), _c("td", {
      staticClass: "text-center text-nowrap"
    }, [_vm._v("\n                " + _vm._s(_vm.formData.socialTotals[index] || 0) + "\n              ")]), _vm._v(" "), _c("td", {
      staticClass: "comments-cell"
    }, [_vm.formData.socialComments[index] ? _c("div", {
      staticClass: "comment-content"
    }, [_vm._v("\n                  " + _vm._s(_vm.formData.socialComments[index]) + "\n                ")]) : _c("div", {
      staticClass: "text-muted"
    }, [_vm._v("-")])])]);
  }), _vm._v(" "), _c("tr", [_vm._m(4), _vm._v(" "), _c("td"), _vm._v(" "), _c("td", [_vm._v("TOTAL (S)")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold text-center"
  }, [_vm._v("30%")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold text-center",
    "class": _vm.getTotalClass(_vm.formData.socialTotalScore)
  }, [_vm._v("\n                " + _vm._s(_vm.formData.socialTotalScore || 0) + "\n              ")]), _vm._v(" "), _c("td")])], 2)])]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive mb-5"
  }, [_c("h5", {
    staticClass: "mb-3 sticky-theme"
  }, [_vm._v("3. Critères de Gouvernance (G) - Pondération totale : 30%")]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(5), _vm._v(" "), _c("tbody", [_vm._l(_vm.governanceCriteria, function (criterion, index) {
    return _c("tr", {
      key: "g-" + index
    }, [_c("td", {
      staticClass: "text-nowrap sticky-theme"
    }, [_c("b", [_vm._v(_vm._s(criterion.theme))])]), _vm._v(" "), _c("td", {
      staticClass: "sticky-question"
    }, [_vm._v(_vm._s(criterion.question))]), _vm._v(" "), _c("td", {
      staticClass: "text-center text-nowrap"
    }, [_vm._v("\n                " + _vm._s(_vm.formData.governanceResponses[index] || "-") + "\n              ")]), _vm._v(" "), _c("td", {
      staticClass: "text-center text-nowrap"
    }, [_vm._v(_vm._s(criterion.ponderation))]), _vm._v(" "), _c("td", {
      staticClass: "text-center text-nowrap"
    }, [_vm._v("\n                " + _vm._s(_vm.formData.governanceTotals[index] || 0) + "\n              ")]), _vm._v(" "), _c("td", {
      staticClass: "comments-cell"
    }, [_vm.formData.governanceComments[index] ? _c("div", {
      staticClass: "comment-content"
    }, [_vm._v("\n                  " + _vm._s(_vm.formData.governanceComments[index]) + "\n                ")]) : _c("div", {
      staticClass: "text-muted"
    }, [_vm._v("-")])])]);
  }), _vm._v(" "), _c("tr", [_vm._m(6), _vm._v(" "), _c("td"), _vm._v(" "), _c("td", [_vm._v("TOTAL (G)")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold text-center"
  }, [_vm._v("30%")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold text-center",
    "class": _vm.getTotalClass(_vm.formData.governanceTotalScore)
  }, [_vm._v("\n                " + _vm._s(_vm.formData.governanceTotalScore || 0) + "\n              ")]), _vm._v(" "), _c("td")])], 2)])]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive mb-5"
  }, [_c("h5", {
    staticClass: "mb-3"
  }, [_vm._v("Avis ESG global du Gestionnaire")]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(7), _vm._v(" "), _c("tbody", _vm._l(_vm.esgRanges, function (range, index) {
    return _c("tr", {
      key: "esg-range-" + index,
      "class": _vm.getScoreClass(range, _vm.globalEsgScore)
    }, [_c("td", {
      staticClass: "text-center text-nowrap"
    }, [_vm._v(_vm._s(range.score))]), _vm._v(" "), _c("td", {
      staticClass: "text-center text-nowrap"
    }, [_vm._v(_vm._s(range.category))]), _vm._v(" "), _c("td", {
      staticClass: "text-center text-nowrap"
    }, [_vm._v(_vm._s(range.factor))]), _vm._v(" "), _c("td", {
      staticClass: "text-nowrap"
    }, [_vm._v(_vm._s(range.description))])]);
  }), 0)])]), _vm._v(" "), ((_vm$formData$notes = _vm.formData.notes) === null || _vm$formData$notes === void 0 ? void 0 : _vm$formData$notes.length) > 0 ? _c("div", {
    staticClass: "mt-4"
  }, [_c("h5", [_vm._v("Notes (" + _vm._s(_vm.formData.notes.length) + ")")]), _vm._v(" "), _c("div", {
    staticClass: "notes-container"
  }, _vm._l(_vm.formData.notes, function (note, index) {
    return _c("div", {
      key: "note-" + index,
      staticClass: "note-item"
    }, [_c("div", {
      staticClass: "note-header"
    }, [_c("strong", [_vm._v(_vm._s(note.user))]), _vm._v(" "), _c("span", {
      staticClass: "note-date"
    }, [_vm._v(_vm._s(_vm.formatDate(note.created_at)))])]), _vm._v(" "), _c("div", {
      staticClass: "note-content"
    }, [_vm._v(_vm._s(note.content))])]);
  }), 0)]) : _vm._e()])])]) : _vm._e();
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "head-memorandum-title"
  }, [_c("h6", {}, [_vm._v("\n        Fiche de cotation ESG\n      ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticClass: "text-center vertical-middle text-nowrap sticky-theme"
  }, [_vm._v("Thème")]), _vm._v(" "), _c("th", {
    staticClass: "text-center vertical-middle text-nowrap sticky-question"
  }, [_vm._v("Questions Clés")]), _vm._v(" "), _c("th", {
    staticClass: "text-center vertical-middle text-nowrap"
  }, [_vm._v("Réponse")]), _vm._v(" "), _c("th", {
    staticClass: "text-center vertical-middle text-nowrap"
  }, [_vm._v("Pondération")]), _vm._v(" "), _c("th", {
    staticClass: "text-center vertical-middle text-nowrap"
  }, [_vm._v("Total")]), _vm._v(" "), _c("th", {
    staticClass: "text-center vertical-middle text-nowrap"
  }, [_vm._v("Commentaires")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "fw-bold"
  }, [_c("i")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticClass: "text-center vertical-middle text-nowrap sticky-theme"
  }, [_vm._v("Thème")]), _vm._v(" "), _c("th", {
    staticClass: "text-center vertical-middle text-nowrap sticky-question"
  }, [_vm._v("Questions Clés")]), _vm._v(" "), _c("th", {
    staticClass: "text-center vertical-middle text-nowrap"
  }, [_vm._v("Réponse")]), _vm._v(" "), _c("th", {
    staticClass: "text-center vertical-middle text-nowrap"
  }, [_vm._v("Pondération")]), _vm._v(" "), _c("th", {
    staticClass: "text-center vertical-middle text-nowrap"
  }, [_vm._v("Total")]), _vm._v(" "), _c("th", {
    staticClass: "text-center vertical-middle text-nowrap"
  }, [_vm._v("Commentaires")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "fw-bold"
  }, [_c("i")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticClass: "text-center vertical-middle text-nowrap sticky-theme"
  }, [_vm._v("Thème")]), _vm._v(" "), _c("th", {
    staticClass: "text-center vertical-middle text-nowrap sticky-question"
  }, [_vm._v("Questions Clés")]), _vm._v(" "), _c("th", {
    staticClass: "text-center vertical-middle text-nowrap"
  }, [_vm._v("Réponse")]), _vm._v(" "), _c("th", {
    staticClass: "text-center vertical-middle text-nowrap"
  }, [_vm._v("Pondération")]), _vm._v(" "), _c("th", {
    staticClass: "text-center vertical-middle text-nowrap"
  }, [_vm._v("Total")]), _vm._v(" "), _c("th", {
    staticClass: "text-center vertical-middle text-nowrap"
  }, [_vm._v("Commentaires")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "fw-bold"
  }, [_c("i")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticClass: "text-center vertical-middle text-nowrap"
  }, [_vm._v("Score ESG Global")]), _vm._v(" "), _c("th", {
    staticClass: "text-center vertical-middle text-nowrap"
  }, [_vm._v("Catégorie")]), _vm._v(" "), _c("th", {
    staticClass: "text-center vertical-middle text-nowrap"
  }, [_vm._v("Facteur")]), _vm._v(" "), _c("th", {
    staticClass: "text-center vertical-middle text-nowrap"
  }, [_vm._v("Description")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/fiche_cotation/COTES2.vue?vue&type=style&index=0&id=20bc66f1&lang=css&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/fiche_cotation/COTES2.vue?vue&type=style&index=0&id=20bc66f1&lang=css&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.esg-offview-container[data-v-20bc66f1] {\r\n  font-family: \"Google sans\";\n}\n.card[data-v-20bc66f1] {\r\n  width: 100%;\r\n  height: 100%;\n}\n.head[data-v-20bc66f1] {\r\n  color: #f1f2f6;\r\n  font-size: 22px;\n}\n.hdc[data-v-20bc66f1] {\r\n  background-color: #57606f;\n}\r\n\r\n/* Table styles */\n.table-responsive[data-v-20bc66f1] {\r\n  position: relative;\r\n  overflow-x: auto;\n}\n.table[data-v-20bc66f1] {\r\n  width: 100%;\r\n  border-collapse: collapse;\n}\n.table th[data-v-20bc66f1], .table td[data-v-20bc66f1] {\r\n  border: 1px solid #dee2e6;\r\n  padding: 8px;\r\n  vertical-align: middle;\n}\n.table th[data-v-20bc66f1] {\r\n  background-color: #f8f9fa;\r\n  font-weight: bold;\n}\r\n\r\n/* Sticky columns */\n.sticky-theme[data-v-20bc66f1] {\r\n  position: sticky;\r\n  left: 0;\r\n  background-color: #fff;\r\n  z-index: 1;\r\n  min-width: 200px;\r\n  border-right: 1px solid #dee2e6;\n}\n.sticky-question[data-v-20bc66f1] {\r\n  position: sticky;\r\n  left: 200px;\r\n  background-color: #fff;\r\n  z-index: 1;\r\n  min-width: 300px;\r\n  border-right: 1px solid #dee2e6;\n}\r\n\r\n/* Score colors */\n.bg-danger[data-v-20bc66f1] {\r\n  background-color: #dc3545 !important;\n}\n.bg-orange[data-v-20bc66f1] {\r\n  background-color: rgb(215, 140, 0) !important;\n}\n.bg-maroon[data-v-20bc66f1] {\r\n  background-color: rgb(99, 52, 1) !important;\n}\n.bg-green[data-v-20bc66f1] {\r\n  background-color: rgb(72, 96, 36) !important;\n}\n.bg-success[data-v-20bc66f1] {\r\n  background-color: #145022 !important;\n}\r\n\r\n/* Comments cell */\n.comments-cell[data-v-20bc66f1] {\r\n  max-width: 300px;\n}\n.comment-content[data-v-20bc66f1] {\r\n  white-space: pre-wrap;\r\n  word-wrap: break-word;\n}\r\n\r\n/* Notes section */\n.notes-container[data-v-20bc66f1] {\r\n  border: 1px solid #dee2e6;\r\n  border-radius: 4px;\n}\n.note-item[data-v-20bc66f1] {\r\n  padding: 10px;\r\n  border-bottom: 1px solid #eee;\n}\n.note-item[data-v-20bc66f1]:last-child {\r\n  border-bottom: none;\n}\n.note-header[data-v-20bc66f1] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-bottom: 5px;\n}\n.note-date[data-v-20bc66f1] {\r\n  color: #6c757d;\r\n  font-size: 0.85em;\n}\n.note-content[data-v-20bc66f1] {\r\n  white-space: pre-wrap;\n}\n.text-muted[data-v-20bc66f1] {\r\n  color: #6c757d !important;\r\n  font-style: italic;\n}\r\n\r\n/* Responsive adjustments */\n@media (max-width: 768px) {\n.sticky-theme[data-v-20bc66f1], .sticky-question[data-v-20bc66f1] {\r\n    position: relative;\r\n    left: auto;\n}\n.table-responsive[data-v-20bc66f1] {\r\n    overflow-x: auto;\r\n    display: block;\n}\n}\n.head-memorandum-title[data-v-20bc66f1] {\r\n  font-weight: bold !important;\r\n  text-transform: uppercase;\r\n  text-align: center;\r\n  border: 1px solid;\r\n  margin-bottom: 10px;\r\n  padding: 4px;\r\n  caption-side: top;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/fiche_cotation/COTES2.vue?vue&type=style&index=0&id=20bc66f1&lang=css&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/fiche_cotation/COTES2.vue?vue&type=style&index=0&id=20bc66f1&lang=css&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_COTES2_vue_vue_type_style_index_0_id_20bc66f1_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./COTES2.vue?vue&type=style&index=0&id=20bc66f1&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/fiche_cotation/COTES2.vue?vue&type=style&index=0&id=20bc66f1&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_COTES2_vue_vue_type_style_index_0_id_20bc66f1_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_COTES2_vue_vue_type_style_index_0_id_20bc66f1_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/memo/fiche_cotation/COTES2.vue":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/memo/fiche_cotation/COTES2.vue ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _COTES2_vue_vue_type_template_id_20bc66f1_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./COTES2.vue?vue&type=template&id=20bc66f1&scoped=true */ "./resources/js/components/offview/bank/afg/memo/fiche_cotation/COTES2.vue?vue&type=template&id=20bc66f1&scoped=true");
/* harmony import */ var _COTES2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./COTES2.vue?vue&type=script&lang=js */ "./resources/js/components/offview/bank/afg/memo/fiche_cotation/COTES2.vue?vue&type=script&lang=js");
/* harmony import */ var _COTES2_vue_vue_type_style_index_0_id_20bc66f1_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./COTES2.vue?vue&type=style&index=0&id=20bc66f1&lang=css&scoped=true */ "./resources/js/components/offview/bank/afg/memo/fiche_cotation/COTES2.vue?vue&type=style&index=0&id=20bc66f1&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _COTES2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _COTES2_vue_vue_type_template_id_20bc66f1_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _COTES2_vue_vue_type_template_id_20bc66f1_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "20bc66f1",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/offview/bank/afg/memo/fiche_cotation/COTES2.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/memo/fiche_cotation/COTES2.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/memo/fiche_cotation/COTES2.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_COTES2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./COTES2.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/fiche_cotation/COTES2.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_COTES2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/memo/fiche_cotation/COTES2.vue?vue&type=style&index=0&id=20bc66f1&lang=css&scoped=true":
/*!*****************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/memo/fiche_cotation/COTES2.vue?vue&type=style&index=0&id=20bc66f1&lang=css&scoped=true ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_COTES2_vue_vue_type_style_index_0_id_20bc66f1_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./COTES2.vue?vue&type=style&index=0&id=20bc66f1&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/fiche_cotation/COTES2.vue?vue&type=style&index=0&id=20bc66f1&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/offview/bank/afg/memo/fiche_cotation/COTES2.vue?vue&type=template&id=20bc66f1&scoped=true":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/memo/fiche_cotation/COTES2.vue?vue&type=template&id=20bc66f1&scoped=true ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_COTES2_vue_vue_type_template_id_20bc66f1_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_COTES2_vue_vue_type_template_id_20bc66f1_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_COTES2_vue_vue_type_template_id_20bc66f1_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./COTES2.vue?vue&type=template&id=20bc66f1&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/fiche_cotation/COTES2.vue?vue&type=template&id=20bc66f1&scoped=true");


/***/ })

}]);