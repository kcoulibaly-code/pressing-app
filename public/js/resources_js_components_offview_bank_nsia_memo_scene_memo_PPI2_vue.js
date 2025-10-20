"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_offview_bank_nsia_memo_scene_memo_PPI2_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_memo/PPI2.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_memo/PPI2.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'SM-PPI2',
  props: {
    dossier_credit: Object
  },
  created: function created() {
    this.loadData();
  },
  data: function data() {
    var _this$dossier_credit, _this$dossier_credit2, _this$dossier_credit3, _this$dossier_credit4, _this$dossier_credit5, _this$dossier_credit6, _this$dossier_credit7, _this$dossier_credit8, _this$dossier_credit9, _this$dossier_credit0;
    return {
      data_tb1: (_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.cred_pub_tb_30001,
      data_tb2: (_this$dossier_credit2 = this.dossier_credit) === null || _this$dossier_credit2 === void 0 ? void 0 : _this$dossier_credit2.cred_pub_tb_30002,
      data_tb3: (_this$dossier_credit3 = this.dossier_credit) === null || _this$dossier_credit3 === void 0 ? void 0 : _this$dossier_credit3.cred_pub_tb_30003,
      data_tb4: (_this$dossier_credit4 = this.dossier_credit) === null || _this$dossier_credit4 === void 0 ? void 0 : _this$dossier_credit4.cred_pub_tb_30004,
      data_tb5: (_this$dossier_credit5 = this.dossier_credit) === null || _this$dossier_credit5 === void 0 ? void 0 : _this$dossier_credit5.cred_pub_tb_30005,
      caf_recorded_file: (_this$dossier_credit6 = this.dossier_credit) === null || _this$dossier_credit6 === void 0 ? void 0 : _this$dossier_credit6.caf_recorded_file,
      initiateur: (_this$dossier_credit7 = this.dossier_credit) === null || _this$dossier_credit7 === void 0 ? void 0 : _this$dossier_credit7.monteur_doss,
      gestionnaire: (_this$dossier_credit8 = this.dossier_credit) === null || _this$dossier_credit8 === void 0 ? void 0 : _this$dossier_credit8.monteur_doss,
      nom: (_this$dossier_credit9 = this.dossier_credit) === null || _this$dossier_credit9 === void 0 || (_this$dossier_credit9 = _this$dossier_credit9.cred_pub_tb_30002) === null || _this$dossier_credit9 === void 0 ? void 0 : _this$dossier_credit9.nom,
      prenoms: (_this$dossier_credit0 = this.dossier_credit) === null || _this$dossier_credit0 === void 0 || (_this$dossier_credit0 = _this$dossier_credit0.cred_pub_tb_30002) === null || _this$dossier_credit0 === void 0 ? void 0 : _this$dossier_credit0.prenoms,
      usage: [{
        checked: false,
        libelle: "Habitation de l'emprunteur"
      }, {
        checked: false,
        libelle: "Locatif"
      }, {
        checked: false,
        libelle: "Résidence principale"
      }, {
        checked: false,
        libelle: "Résidence secondaire"
      }],
      agence: ""
    };
  },
  methods: {
    formatDate: function formatDate(date) {
      if (['', null, undefined].includes(date)) return '';
      var options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
      };
      return new Date(date).toLocaleDateString('fr', options);
    },
    formatAmount: function formatAmount(x) {
      return x === null || x === void 0 ? void 0 : x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
    formatMonth: function formatMonth(value) {
      return value === null || value === void 0 ? void 0 : value.toString().split('-').reverse().join('/');
    },
    loadData: function loadData() {
      var _this$dossier_credit1;
      if (((_this$dossier_credit1 = this.dossier_credit) === null || _this$dossier_credit1 === void 0 ? void 0 : _this$dossier_credit1.caf_recorded_file.client) != undefined) {
        var _this$dossier_credit10;
        this.agence = (_this$dossier_credit10 = this.dossier_credit) === null || _this$dossier_credit10 === void 0 || (_this$dossier_credit10 = _this$dossier_credit10[this.determineCredPubTablesFromDosCred(this.dossier_credit)[1]]) === null || _this$dossier_credit10 === void 0 ? void 0 : _this$dossier_credit10.filiale;
      }
    }
  },
  computed: {
    labelHabitation: function labelHabitation() {
      var _this$data_tb, _this$data_tb2;
      if (((_this$data_tb = this.data_tb2) === null || _this$data_tb === void 0 ? void 0 : _this$data_tb.habitation) == 'Propriétaire') {
        return "Dépuis quelle date";
      }
      if (((_this$data_tb2 = this.data_tb2) === null || _this$data_tb2 === void 0 ? void 0 : _this$data_tb2.habitation) == 'Locataire') {
        return "Dépuis quelle date";
      }
      return "Ancienneté à l'adresse";
    },
    valueHabitation: function valueHabitation() {
      var _this$data_tb3, _this$data_tb6, _this$data_tb8, _this$data_tb9;
      if (((_this$data_tb3 = this.data_tb2) === null || _this$data_tb3 === void 0 ? void 0 : _this$data_tb3.habitation) == 'Propriétaire') {
        var _this$data_tb4, _this$data_tb5;
        return ((_this$data_tb4 = this.data_tb2) === null || _this$data_tb4 === void 0 ? void 0 : _this$data_tb4.proprietaire_depuis_quelle_date) != '' ? this.formatMonth((_this$data_tb5 = this.data_tb2) === null || _this$data_tb5 === void 0 ? void 0 : _this$data_tb5.proprietaire_depuis_quelle_date) : '';
      }
      if (((_this$data_tb6 = this.data_tb2) === null || _this$data_tb6 === void 0 ? void 0 : _this$data_tb6.habitation) == 'Locataire') {
        var _this$data_tb7;
        return (_this$data_tb7 = this.data_tb2) === null || _this$data_tb7 === void 0 ? void 0 : _this$data_tb7.loyer_mensuel;
      }
      return ((_this$data_tb8 = this.data_tb2) === null || _this$data_tb8 === void 0 ? void 0 : _this$data_tb8.anciennete_adresse) != '' ? this.formatMonth((_this$data_tb9 = this.data_tb2) === null || _this$data_tb9 === void 0 ? void 0 : _this$data_tb9.anciennete_adresse) : "";
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_memo/PPI2.vue?vue&type=template&id=3f950c0a&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_memo/PPI2.vue?vue&type=template&id=3f950c0a&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$data_tb, _vm$caf_recorded_file, _vm$data_tb2, _vm$data_tb3, _vm$data_tb4, _vm$data_tb5, _vm$data_tb6, _vm$data_tb7, _vm$data_tb8, _vm$data_tb9, _vm$data_tb0, _vm$data_tb1, _vm$data_tb10, _vm$data_tb11, _vm$data_tb12, _vm$data_tb13, _vm$data_tb14, _vm$data_tb15, _vm$data_tb16, _vm$data_tb17, _vm$data_tb18, _vm$data_tb19, _vm$data_tb20, _vm$data_tb21, _vm$data_tb22, _vm$data_tb23, _vm$data_tb24, _vm$data_tb25, _vm$data_tb26, _vm$data_tb27, _vm$data_tb28, _vm$data_tb29, _vm$data_tb30, _vm$data_tb31, _vm$data_tb32, _vm$data_tb33, _vm$data_tb34, _vm$data_tb35;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "card w-100 rounded-0"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_vm._v("Emprunteur")]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Nom :")]), _vm._v(" " + _vm._s(_vm.nom))]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Prénoms :")]), _vm._v(" " + _vm._s(_vm.prenoms))]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Genre :")]), _vm._v(" " + _vm._s((_vm$data_tb = _vm.data_tb2) === null || _vm$data_tb === void 0 ? void 0 : _vm$data_tb.sexe))]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Indice :")]), _vm._v(" " + _vm._s((_vm$caf_recorded_file = _vm.caf_recorded_file) === null || _vm$caf_recorded_file === void 0 ? void 0 : _vm$caf_recorded_file.client.matcli))]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("N° Compte :")]), _vm._v(" " + _vm._s((_vm$data_tb2 = _vm.data_tb2) === null || _vm$data_tb2 === void 0 ? void 0 : _vm$data_tb2.compte_numero))]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Email :")]), _vm._v(" " + _vm._s((_vm$data_tb3 = _vm.data_tb2) === null || _vm$data_tb3 === void 0 ? void 0 : _vm$data_tb3.email))]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("N° Téléphone :")]), _vm._v(" " + _vm._s((_vm$data_tb4 = _vm.data_tb2) === null || _vm$data_tb4 === void 0 ? void 0 : _vm$data_tb4.telephone))]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Type de pièce d'identité : ")]), _vm._v(" " + _vm._s((_vm$data_tb5 = _vm.data_tb2) === null || _vm$data_tb5 === void 0 ? void 0 : _vm$data_tb5.type_piece) + "\n                ")]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("N° pièce : ")]), _vm._v(" " + _vm._s((_vm$data_tb6 = _vm.data_tb2) === null || _vm$data_tb6 === void 0 ? void 0 : _vm$data_tb6.num_piece) + "\n                ")]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Date de délivrance :")]), _vm._v(" " + _vm._s((_vm$data_tb7 = _vm.data_tb2) !== null && _vm$data_tb7 !== void 0 && _vm$data_tb7.date_delivrance_piece && ((_vm$data_tb8 = _vm.data_tb2) === null || _vm$data_tb8 === void 0 ? void 0 : _vm$data_tb8.date_delivrance_piece) != "" ? _vm.formatDate((_vm$data_tb9 = _vm.data_tb2) === null || _vm$data_tb9 === void 0 ? void 0 : _vm$data_tb9.date_delivrance_piece) : "") + "\n                ")]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Lieu de délivrance :")]), _vm._v(" " + _vm._s((_vm$data_tb0 = _vm.data_tb2) === null || _vm$data_tb0 === void 0 ? void 0 : _vm$data_tb0.lieu_delivrance_piece) + "\n                ")]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Ville de naissance :")]), _vm._v(" " + _vm._s((_vm$data_tb1 = _vm.data_tb2) === null || _vm$data_tb1 === void 0 ? void 0 : _vm$data_tb1.ville_naissance) + "\n                ")]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Ville de résidence :")]), _vm._v(" " + _vm._s((_vm$data_tb10 = _vm.data_tb2) === null || _vm$data_tb10 === void 0 ? void 0 : _vm$data_tb10.ville_residence) + "\n                ")]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Lieu de délivrance :")]), _vm._v(" " + _vm._s((_vm$data_tb11 = _vm.data_tb2) === null || _vm$data_tb11 === void 0 ? void 0 : _vm$data_tb11.lieu_delivrance_piece) + "\n                ")]), _vm._v(" "), ((_vm$data_tb12 = _vm.data_tb2) === null || _vm$data_tb12 === void 0 ? void 0 : _vm$data_tb12.matrimoniale) == "Marié(e)" && ((_vm$data_tb13 = _vm.data_tb2) === null || _vm$data_tb13 === void 0 ? void 0 : _vm$data_tb13.genre) == "Feminin" ? _c("div", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Nom de\n                        jeune\n                        fille\n                        :")]), _vm._v(" " + _vm._s((_vm$data_tb14 = _vm.data_tb2) === null || _vm$data_tb14 === void 0 ? void 0 : _vm$data_tb14.nom_jeune_fille))]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Nationalité :")]), _vm._v(" " + _vm._s((_vm$data_tb15 = _vm.data_tb2) === null || _vm$data_tb15 === void 0 ? void 0 : _vm$data_tb15.nationnalite) + "\n                ")]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Né(e) le :")]), _vm._v(" " + _vm._s((_vm$data_tb16 = _vm.data_tb2) !== null && _vm$data_tb16 !== void 0 && _vm$data_tb16.date_naissance && ((_vm$data_tb17 = _vm.data_tb2) === null || _vm$data_tb17 === void 0 ? void 0 : _vm$data_tb17.date_naissance) != "" ? _vm.formatDate((_vm$data_tb18 = _vm.data_tb2) === null || _vm$data_tb18 === void 0 ? void 0 : _vm$data_tb18.date_naissance) : ""))]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("b", {
    staticClass: "text-uppercase"
  }, [_vm._v("à :")]), _vm._v(" " + _vm._s((_vm$data_tb19 = _vm.data_tb2) === null || _vm$data_tb19 === void 0 ? void 0 : _vm$data_tb19.ville_naissance))]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Situation matrimoniale : ")]), _vm._v(" " + _vm._s((_vm$data_tb20 = _vm.data_tb2) === null || _vm$data_tb20 === void 0 ? void 0 : _vm$data_tb20.matrimoniale) + "\n                ")]), _vm._v(" "), ((_vm$data_tb21 = _vm.data_tb2) === null || _vm$data_tb21 === void 0 ? void 0 : _vm$data_tb21.matrimoniale) == "Marié(e)" ? _c("div", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Régime matrimonial :")]), _vm._v(" " + _vm._s((_vm$data_tb22 = _vm.data_tb2) === null || _vm$data_tb22 === void 0 ? void 0 : _vm$data_tb22.regime_matrimonial) + "\n                ")]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Nombre d'enfants à charge : ")]), _vm._v(" " + _vm._s((_vm$data_tb23 = _vm.data_tb2) === null || _vm$data_tb23 === void 0 ? void 0 : _vm$data_tb23.nbre_enfant) + "\n                ")]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Type de logement : ")]), _vm._v(" " + _vm._s((_vm$data_tb24 = _vm.data_tb2) === null || _vm$data_tb24 === void 0 ? void 0 : _vm$data_tb24.habitation) + "\n                ")]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v(_vm._s(_vm.labelHabitation) + " : ")]), _vm._v(" " + _vm._s(_vm.valueHabitation) + "\n                ")]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Date d'entrée en relaton : ")]), _vm._v(" " + _vm._s((_vm$data_tb25 = _vm.data_tb2) === null || _vm$data_tb25 === void 0 ? void 0 : _vm$data_tb25.date_entree_en_relation) + "\n                ")]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Personne politiquement exposée : ")]), _vm._v(" " + _vm._s((_vm$data_tb26 = _vm.data_tb2) === null || _vm$data_tb26 === void 0 ? void 0 : _vm$data_tb26.personne_politiquement_expose) + "\n                ")])])])]), _vm._v(" "), ((_vm$data_tb27 = _vm.data_tb2) === null || _vm$data_tb27 === void 0 ? void 0 : _vm$data_tb27.matrimoniale) == "Marié(e)" ? _c("div", {
    staticClass: "card w-100 rounded-0"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_vm._v("Conjoint(e)")]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Nom :")]), _vm._v(" " + _vm._s((_vm$data_tb28 = _vm.data_tb2) === null || _vm$data_tb28 === void 0 || (_vm$data_tb28 = _vm$data_tb28.conjoint) === null || _vm$data_tb28 === void 0 ? void 0 : _vm$data_tb28.nom) + "\n            ")]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Prénoms :")]), _vm._v(" " + _vm._s((_vm$data_tb29 = _vm.data_tb2) === null || _vm$data_tb29 === void 0 || (_vm$data_tb29 = _vm$data_tb29.conjoint) === null || _vm$data_tb29 === void 0 ? void 0 : _vm$data_tb29.prenoms) + "\n            ")]), _vm._v(" "), ((_vm$data_tb30 = _vm.data_tb2) === null || _vm$data_tb30 === void 0 ? void 0 : _vm$data_tb30.genre) == "Feminin" ? _c("div", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Nom de jeune fille\n                    :")]), _vm._v(" " + _vm._s((_vm$data_tb31 = _vm.data_tb2) === null || _vm$data_tb31 === void 0 || (_vm$data_tb31 = _vm$data_tb31.conjoint) === null || _vm$data_tb31 === void 0 ? void 0 : _vm$data_tb31.nom_jeune_fille))]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Nationalité :")]), _vm._v(" " + _vm._s((_vm$data_tb32 = _vm.data_tb2) === null || _vm$data_tb32 === void 0 || (_vm$data_tb32 = _vm$data_tb32.conjoint) === null || _vm$data_tb32 === void 0 ? void 0 : _vm$data_tb32.nationnalite))]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Né(e) le :")]), _vm._v(" " + _vm._s(((_vm$data_tb33 = _vm.data_tb2) === null || _vm$data_tb33 === void 0 || (_vm$data_tb33 = _vm$data_tb33.conjoint) === null || _vm$data_tb33 === void 0 ? void 0 : _vm$data_tb33.date_naissance) != "" ? _vm.formatDate((_vm$data_tb34 = _vm.data_tb2) === null || _vm$data_tb34 === void 0 || (_vm$data_tb34 = _vm$data_tb34.conjoint) === null || _vm$data_tb34 === void 0 ? void 0 : _vm$data_tb34.date_naissance) : ""))]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("b", {
    staticClass: "text-uppercase"
  }, [_vm._v("à :")]), _vm._v(" " + _vm._s((_vm$data_tb35 = _vm.data_tb2) === null || _vm$data_tb35 === void 0 || (_vm$data_tb35 = _vm$data_tb35.conjoint) === null || _vm$data_tb35 === void 0 ? void 0 : _vm$data_tb35.ville_naissance))])])])]) : _vm._e()]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "justify-content-center"
  }, [_c("div", {
    staticClass: "head-memorandum-title px-3 mb-3",
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("\n            Profil personnel & situation familiale\n        ")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_memo/PPI2.vue?vue&type=style&index=0&id=3f950c0a&lang=css&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_memo/PPI2.vue?vue&type=style&index=0&id=3f950c0a&lang=css&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.bg-grey[data-v-3f950c0a],\r\n.th[data-v-3f950c0a] {\r\n    background-color: #f4f3f3;\r\n    font-weight: 600;\n}\ntable td[data-v-3f950c0a] {\r\n    padding: 5px;\n}\n.memo[data-v-3f950c0a] {\r\n    margin-top: 10px;\r\n    padding: 10px;\r\n    border: 2px solid #fff;\r\n    font-weight: 550;\r\n    font-size: 16px;\r\n    text-align: left;\r\n    text-transform: uppercase;\r\n    background-color: #34495e;\r\n    color: #fff;\n}\n.head-memorandum-title[data-v-3f950c0a] {\r\n    margin-top: 15px;\r\n    padding: 16px;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    background-color: #34495e;\r\n    border: 2px solid #575759;\r\n    box-shadow: 1px 3px 4px #ddd;\r\n    font-size: 16px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    border-radius: 10px;\r\n    margin-bottom: 15px;\n}\n.vertical-middle[data-v-3f950c0a] {\r\n    vertical-align: middle;\n}\n.mr-2[data-v-3f950c0a] {\r\n    margin-right: 0.5rem;\n}\n.ml-25-px[data-v-3f950c0a] {\r\n    margin-left: 25px;\n}\n.ml-45-px[data-v-3f950c0a] {\r\n    margin-left: 45px;\n}\n.table-bordered[data-v-3f950c0a],\r\n.card-body[data-v-3f950c0a] {\r\n    font-size: 0.9rem;\n}\n.card-body [class*='col-'][data-v-3f950c0a]{\r\n    margin-bottom: 10px;\n}\n.form-check-input[data-v-3f950c0a]:disabled {\r\n    opacity: 1;\n}\n.activite td[data-v-3f950c0a] {\r\n    padding: 7px;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_memo/PPI2.vue?vue&type=style&index=0&id=3f950c0a&lang=css&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_memo/PPI2.vue?vue&type=style&index=0&id=3f950c0a&lang=css&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PPI2_vue_vue_type_style_index_0_id_3f950c0a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PPI2.vue?vue&type=style&index=0&id=3f950c0a&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_memo/PPI2.vue?vue&type=style&index=0&id=3f950c0a&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PPI2_vue_vue_type_style_index_0_id_3f950c0a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PPI2_vue_vue_type_style_index_0_id_3f950c0a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/memo/scene_memo/PPI2.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/memo/scene_memo/PPI2.vue ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PPI2_vue_vue_type_template_id_3f950c0a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PPI2.vue?vue&type=template&id=3f950c0a&scoped=true */ "./resources/js/components/offview/bank/nsia/memo/scene_memo/PPI2.vue?vue&type=template&id=3f950c0a&scoped=true");
/* harmony import */ var _PPI2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PPI2.vue?vue&type=script&lang=js */ "./resources/js/components/offview/bank/nsia/memo/scene_memo/PPI2.vue?vue&type=script&lang=js");
/* harmony import */ var _PPI2_vue_vue_type_style_index_0_id_3f950c0a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PPI2.vue?vue&type=style&index=0&id=3f950c0a&lang=css&scoped=true */ "./resources/js/components/offview/bank/nsia/memo/scene_memo/PPI2.vue?vue&type=style&index=0&id=3f950c0a&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PPI2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _PPI2_vue_vue_type_template_id_3f950c0a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _PPI2_vue_vue_type_template_id_3f950c0a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3f950c0a",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/offview/bank/nsia/memo/scene_memo/PPI2.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/memo/scene_memo/PPI2.vue?vue&type=script&lang=js":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/memo/scene_memo/PPI2.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PPI2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PPI2.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_memo/PPI2.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PPI2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/memo/scene_memo/PPI2.vue?vue&type=style&index=0&id=3f950c0a&lang=css&scoped=true":
/*!************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/memo/scene_memo/PPI2.vue?vue&type=style&index=0&id=3f950c0a&lang=css&scoped=true ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PPI2_vue_vue_type_style_index_0_id_3f950c0a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PPI2.vue?vue&type=style&index=0&id=3f950c0a&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_memo/PPI2.vue?vue&type=style&index=0&id=3f950c0a&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/memo/scene_memo/PPI2.vue?vue&type=template&id=3f950c0a&scoped=true":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/memo/scene_memo/PPI2.vue?vue&type=template&id=3f950c0a&scoped=true ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PPI2_vue_vue_type_template_id_3f950c0a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PPI2_vue_vue_type_template_id_3f950c0a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PPI2_vue_vue_type_template_id_3f950c0a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PPI2.vue?vue&type=template&id=3f950c0a&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_memo/PPI2.vue?vue&type=template&id=3f950c0a&scoped=true");


/***/ })

}]);