"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_offview_bank_nsia_memo_scene_memo_PPO2_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_memo/PPO2.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_memo/PPO2.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_connects_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../services/connects.service */ "./resources/js/services/connects.service.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "PPO2",
  props: {
    dossier_credit: Object
  },
  created: function created() {
    this.loadData();
  },
  data: function data() {
    var _this$dossier_credit, _this$dossier_credit2, _this$dossier_credit3, _this$dossier_credit4, _this$dossier_credit5, _this$dossier_credit6, _this$dossier_credit7, _this$dossier_credit8;
    return {
      data_tb1: (_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.cred_pub_tb_10001,
      data_tb2: (_this$dossier_credit2 = this.dossier_credit) === null || _this$dossier_credit2 === void 0 ? void 0 : _this$dossier_credit2.cred_pub_tb_10002,
      data_tb3: (_this$dossier_credit3 = this.dossier_credit) === null || _this$dossier_credit3 === void 0 ? void 0 : _this$dossier_credit3.cred_pub_tb_10003,
      data_tb4: (_this$dossier_credit4 = this.dossier_credit) === null || _this$dossier_credit4 === void 0 ? void 0 : _this$dossier_credit4.cred_pub_tb_10004,
      data_tb5: (_this$dossier_credit5 = this.dossier_credit) === null || _this$dossier_credit5 === void 0 ? void 0 : _this$dossier_credit5.cred_pub_tb_10005,
      data_tb6: (_this$dossier_credit6 = this.dossier_credit) === null || _this$dossier_credit6 === void 0 ? void 0 : _this$dossier_credit6.cred_pub_tb_10006,
      data_tb7: (_this$dossier_credit7 = this.dossier_credit) === null || _this$dossier_credit7 === void 0 ? void 0 : _this$dossier_credit7.cred_pub_tb_10007,
      caf_recorded_file: (_this$dossier_credit8 = this.dossier_credit) === null || _this$dossier_credit8 === void 0 ? void 0 : _this$dossier_credit8.caf_recorded_file,
      nom: "",
      prenoms: "",
      agence: "",
      connectsHost: _services_connects_service__WEBPACK_IMPORTED_MODULE_0__["default"].loadablehost(),
      isLoadingFile: false
    };
  },
  methods: {
    formatDate: function formatDate(date) {
      if (['', null, undefined].includes(date)) return "";
      var options = {
        year: "numeric",
        month: "numeric",
        day: "numeric"
      };
      return new Date(date).toLocaleDateString("fr", options);
    },
    loadData: function loadData() {
      var _this$dossier_credit9;
      if (((_this$dossier_credit9 = this.dossier_credit) === null || _this$dossier_credit9 === void 0 ? void 0 : _this$dossier_credit9.caf_recorded_file.client) != undefined) {
        var _this$dossier_credit0, _this$dossier_credit1, _this$dossier_credit10;
        this.nom = (_this$dossier_credit0 = this.dossier_credit) === null || _this$dossier_credit0 === void 0 || (_this$dossier_credit0 = _this$dossier_credit0.caf_recorded_file) === null || _this$dossier_credit0 === void 0 || (_this$dossier_credit0 = _this$dossier_credit0.client) === null || _this$dossier_credit0 === void 0 ? void 0 : _this$dossier_credit0.nomcli;
        this.prenoms = (_this$dossier_credit1 = this.dossier_credit) === null || _this$dossier_credit1 === void 0 || (_this$dossier_credit1 = _this$dossier_credit1.caf_recorded_file) === null || _this$dossier_credit1 === void 0 || (_this$dossier_credit1 = _this$dossier_credit1.client) === null || _this$dossier_credit1 === void 0 ? void 0 : _this$dossier_credit1.prenomcli;
        this.agence = (_this$dossier_credit10 = this.dossier_credit) === null || _this$dossier_credit10 === void 0 || (_this$dossier_credit10 = _this$dossier_credit10[this.determineCredPubTablesFromDosCred(this.dossier_credit)[1]]) === null || _this$dossier_credit10 === void 0 ? void 0 : _this$dossier_credit10.filiale;
      }
    },
    somX3: function somX3(ob, key) {
      var som = 0;
      ob.filter(function (elm) {
        var _elm$key;
        som += Number((_elm$key = elm[key]) === null || _elm$key === void 0 ? void 0 : _elm$key.toString().replace(/\s/g, ""));
      });
      return som;
    },
    formatMonth: function formatMonth(value) {
      return value === null || value === void 0 ? void 0 : value.toString().split('-').reverse().join('/');
    },
    formatAmount: function formatAmount(x) {
      var _x$toString;
      return x === null || x === void 0 || (_x$toString = x.toString()) === null || _x$toString === void 0 ? void 0 : _x$toString.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
    convertInt: function convertInt(n) {
      var _n$toString;
      return Number(n === null || n === void 0 || (_n$toString = n.toString()) === null || _n$toString === void 0 ? void 0 : _n$toString.replace(/\s/g, ""));
    }
  },
  computed: {
    engagements: function engagements() {
      var _this$data_tb,
        _this = this,
        _this$data_tb3;
      var data = [];
      if ((_this$data_tb = this.data_tb2) !== null && _this$data_tb !== void 0 && _this$data_tb.engagements_en_cours) {
        var _this$data_tb2;
        (_this$data_tb2 = this.data_tb2) === null || _this$data_tb2 === void 0 || _this$data_tb2.engagements_en_cours.forEach(function (element) {
          var find = false;
          data.forEach(function (el) {
            if (el.libelle == element.libelle) {
              find = true;
              el.montant_emprunteur = _this.formatAmount(_this.convertInt(el.montant_emprunteur) + _this.convertInt(element.montant));
            }
          });
          if (find == false) {
            data.push({
              checked: element.checked,
              libelle: element.libelle,
              montant_emprunteur: element.montant,
              montant_conjoint: ""
            });
          }
        });
      }
      if ((_this$data_tb3 = this.data_tb2) !== null && _this$data_tb3 !== void 0 && (_this$data_tb3 = _this$data_tb3.conjoint) !== null && _this$data_tb3 !== void 0 && _this$data_tb3.engagements_en_cours) {
        var _this$data_tb4;
        (_this$data_tb4 = this.data_tb2) === null || _this$data_tb4 === void 0 || (_this$data_tb4 = _this$data_tb4.conjoint) === null || _this$data_tb4 === void 0 || _this$data_tb4.engagements_en_cours.forEach(function (element) {
          if (element.checked) {
            var find = false;
            data.forEach(function (a) {
              if (a.libelle.toString().trim().toLowerCase() == element.libelle.toString().trim().toLowerCase()) {
                a.montant_conjoint = element.montant;
                find = true;
              }
            });
            if (find == false) {
              data.push({
                checked: true,
                libelle: element.libelle,
                montant_emprunteur: "",
                montant_conjoint: element.montant
              });
            }
          }
        });
      }
      return data;
    },
    comptes: function comptes() {
      var _this$data_tb5, _this$data_tb6;
      var data = [];
      if ((_this$data_tb5 = this.data_tb5) !== null && _this$data_tb5 !== void 0 && _this$data_tb5.comptes) {
        this.data_tb5.comptes.forEach(function (element) {
          data.push({
            checked: true,
            libelle: element.banque,
            compte_1: element.compte_cheque,
            compte_2: ""
          });
        });
      }
      if ((_this$data_tb6 = this.data_tb5) !== null && _this$data_tb6 !== void 0 && _this$data_tb6.comptes_conjoint) {
        this.data_tb5.comptes_conjoint.forEach(function (element) {
          var find = false;
          data.forEach(function (a) {
            if (a.libelle.toString().trim().toLowerCase() == element.banque.toString().trim().toLowerCase()) {
              a.compte_2 = element.compte_cheque;
              find = true;
            }
          });
          if (find == false) {
            data.push({
              checked: true,
              libelle: element.banque,
              compte_1: "",
              compte_2: element.compte_cheque
            });
          }
        });
      }
      return data;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_memo/PPO2.vue?vue&type=template&id=2b1ae496&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_memo/PPO2.vue?vue&type=template&id=2b1ae496&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$caf_recorded_file, _vm$data_tb, _vm$data_tb2, _vm$data_tb3, _vm$data_tb4, _vm$data_tb5, _vm$data_tb6, _vm$data_tb7, _vm$data_tb8, _vm$data_tb9, _vm$data_tb0, _vm$data_tb1, _vm$data_tb10, _vm$data_tb11, _vm$data_tb12, _vm$data_tb13, _vm$data_tb14, _vm$data_tb15, _vm$data_tb16, _vm$data_tb17, _vm$data_tb18, _vm$data_tb19, _vm$data_tb20, _vm$data_tb21, _vm$data_tb22, _vm$data_tb23, _vm$data_tb24, _vm$data_tb25, _vm$data_tb26, _vm$data_tb27, _vm$data_tb28, _vm$data_tb29, _vm$data_tb30, _vm$data_tb31, _vm$data_tb35, _vm$data_tb36, _vm$data_tb37, _vm$data_tb38, _vm$data_tb39, _vm$data_tb40, _vm$data_tb41, _vm$data_tb42, _vm$data_tb43, _vm$data_tb44, _vm$data_tb45, _vm$data_tb46, _vm$data_tb47, _vm$data_tb48, _vm$data_tb49, _vm$data_tb50, _vm$data_tb51, _vm$data_tb52, _vm$data_tb53, _vm$data_tb54, _vm$data_tb55, _vm$data_tb56, _vm$data_tb57, _vm$data_tb58, _vm$data_tb59, _vm$data_tb60, _vm$data_tb61, _vm$data_tb62, _vm$data_tb63, _vm$data_tb64, _vm$data_tb65, _vm$data_tb66, _vm$data_tb67, _vm$data_tb68, _vm$data_tb69, _vm$data_tb70, _vm$data_tb71;
  var _vm = this,
    _c = _vm._self._c;
  return _vm.data_tb2 ? _c("div", [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "row mt-3"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("table", {
    staticClass: "table table-borderless"
  }, [_c("tbody", {
    staticStyle: {
      "font-size": "0.9rem"
    }
  }, [_c("tr", [_c("td", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Nom : ")]), _vm._v(_vm._s(_vm.nom))]), _vm._v(" "), _c("td", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Prénom(s) : ")]), _vm._v(_vm._s(_vm.prenoms))])]), _vm._v(" "), _c("tr", [_c("td", [_c("b", [_vm._v("Indice : ")]), _vm._v(" " + _vm._s((_vm$caf_recorded_file = _vm.caf_recorded_file.client) === null || _vm$caf_recorded_file === void 0 ? void 0 : _vm$caf_recorded_file.matcli) + "\n                        ")]), _vm._v(" "), _c("td", [_c("b", [_vm._v("Compte N° : ")]), _vm._v(" " + _vm._s((_vm$data_tb = _vm.data_tb2) === null || _vm$data_tb === void 0 ? void 0 : _vm$data_tb.compte_numero) + "\n                        ")])]), _vm._v(" "), _c("tr", [_c("td", [_c("b", [_vm._v("Email : ")]), _vm._v(" " + _vm._s(_vm.caf_recorded_file.email) + "\n                        ")]), _vm._v(" "), _c("td", [_c("b", [_vm._v("Numéro de téléphone : ")]), _vm._v(" " + _vm._s(_vm.caf_recorded_file.phone) + "\n                        ")])]), _vm._v(" "), _c("tr", [_c("td", [_c("b", [_vm._v("Type de pièce d'identité : ")]), _vm._v(" " + _vm._s((_vm$data_tb2 = _vm.data_tb2) === null || _vm$data_tb2 === void 0 ? void 0 : _vm$data_tb2.type_piece) + "\n                        ")]), _vm._v(" "), _c("td", [_c("b", [_vm._v("Numéro de la pièce d'identité : ")]), _vm._v(" " + _vm._s((_vm$data_tb3 = _vm.data_tb2) === null || _vm$data_tb3 === void 0 ? void 0 : _vm$data_tb3.num_piece) + "\n                        ")])]), _vm._v(" "), _c("tr", [_c("td", [_c("b", [_vm._v("Date de délivrance : ")]), _vm._v(" " + _vm._s(((_vm$data_tb4 = _vm.data_tb2) === null || _vm$data_tb4 === void 0 ? void 0 : _vm$data_tb4.date_delivrance_piece) != "" && ((_vm$data_tb5 = _vm.data_tb2) === null || _vm$data_tb5 === void 0 ? void 0 : _vm$data_tb5.date_delivrance_piece) != undefined ? _vm.formatDate((_vm$data_tb6 = _vm.data_tb2) === null || _vm$data_tb6 === void 0 ? void 0 : _vm$data_tb6.date_delivrance_piece) : "") + "\n                        ")]), _vm._v(" "), _c("td", [_c("b", [_vm._v("Lieu de délivrance : ")]), _vm._v(_vm._s((_vm$data_tb7 = _vm.data_tb2) === null || _vm$data_tb7 === void 0 ? void 0 : _vm$data_tb7.lieu_delivrance_piece) + "\n                        ")])]), _vm._v(" "), _c("tr", [_c("td", [_c("b", [_vm._v("Genre : ")]), _vm._v(" " + _vm._s((_vm$data_tb8 = _vm.data_tb2) === null || _vm$data_tb8 === void 0 ? void 0 : _vm$data_tb8.sexe))]), _vm._v(" "), _c("td", [_c("b", [_vm._v("Date de naissance : ")]), _vm._v(" " + _vm._s(((_vm$data_tb9 = _vm.data_tb2) === null || _vm$data_tb9 === void 0 ? void 0 : _vm$data_tb9.date_naissance) != "" ? _vm.formatDate((_vm$data_tb0 = _vm.data_tb2) === null || _vm$data_tb0 === void 0 ? void 0 : _vm$data_tb0.date_naissance) : "") + "\n                        ")])]), _vm._v(" "), _c("tr", [_c("td", [_c("b", [_vm._v("Ville de naissance : ")]), _vm._v(_vm._s((_vm$data_tb1 = _vm.data_tb2) === null || _vm$data_tb1 === void 0 ? void 0 : _vm$data_tb1.ville_naissance) + "\n                        ")]), _vm._v(" "), _c("td", [_c("b", [_vm._v("Ville de résidence : ")]), _vm._v(_vm._s((_vm$data_tb10 = _vm.data_tb2) === null || _vm$data_tb10 === void 0 ? void 0 : _vm$data_tb10.ville_residence) + "\n                        ")])]), _vm._v(" "), _c("tr", [_c("td", [_c("b", [_vm._v("Nationalité : ")]), _vm._v(_vm._s((_vm$data_tb11 = _vm.data_tb2) === null || _vm$data_tb11 === void 0 ? void 0 : _vm$data_tb11.nationnalite) + "\n                        ")]), _vm._v(" "), ((_vm$data_tb12 = _vm.data_tb2) === null || _vm$data_tb12 === void 0 ? void 0 : _vm$data_tb12.matrimoniale) == "Marié(e)" ? _c("td", [_c("b", [_vm._v("situation matrimoniale : ")]), _vm._v(_vm._s((_vm$data_tb13 = _vm.data_tb2) === null || _vm$data_tb13 === void 0 ? void 0 : _vm$data_tb13.matrimoniale) + "\n                        ")]) : _vm._e()]), _vm._v(" "), _c("tr", [_c("td", [_c("b", [_vm._v("Type de logement : ")]), _vm._v(_vm._s((_vm$data_tb14 = _vm.data_tb2) === null || _vm$data_tb14 === void 0 ? void 0 : _vm$data_tb14.habitation) + "\n                        ")]), _vm._v(" "), _c("td", [_c("b", [_vm._v("Ancienneté à l'adresse actuelle : ")]), _vm._v(_vm._s(_vm.formatMonth((_vm$data_tb15 = _vm.data_tb2) === null || _vm$data_tb15 === void 0 ? void 0 : _vm$data_tb15.anciennete_adresse)) + "\n                        ")])]), _vm._v(" "), _c("tr", [_c("td", [_c("b", [_vm._v("Nombre d'enfants : ")]), _vm._v(_vm._s((_vm$data_tb16 = _vm.data_tb2) === null || _vm$data_tb16 === void 0 ? void 0 : _vm$data_tb16.nbre_enfant))]), _vm._v(" "), _c("td", [_c("b", [_vm._v("Adresse : ")]), _vm._v(_vm._s((_vm$data_tb17 = _vm.data_tb2) === null || _vm$data_tb17 === void 0 ? void 0 : _vm$data_tb17.adresse))])]), _vm._v(" "), _c("tr", [_c("td", [_c("b", [_vm._v("Adresse postale : ")]), _vm._v(_vm._s((_vm$data_tb18 = _vm.data_tb2) === null || _vm$data_tb18 === void 0 ? void 0 : _vm$data_tb18.adresse_postale) + "\n                        ")]), _vm._v(" "), _c("td", [_c("b", [_vm._v("Longitude : ")]), _vm._v(_vm._s((_vm$data_tb19 = _vm.data_tb2) === null || _vm$data_tb19 === void 0 ? void 0 : _vm$data_tb19.geo_lon))])]), _vm._v(" "), _c("tr", [_c("td", [_c("b", [_vm._v("Latitude : ")]), _vm._v(_vm._s((_vm$data_tb20 = _vm.data_tb2) === null || _vm$data_tb20 === void 0 ? void 0 : _vm$data_tb20.geo_lat))]), _vm._v(" "), _c("td", [_c("b", [_vm._v("Personne politiquement exposée : ")]), _vm._v(_vm._s((_vm$data_tb21 = _vm.data_tb2) === null || _vm$data_tb21 === void 0 ? void 0 : _vm$data_tb21.personne_politiquement_expose) + "\n                        ")])])])])]), _vm._v(" "), ((_vm$data_tb22 = _vm.data_tb2) === null || _vm$data_tb22 === void 0 ? void 0 : _vm$data_tb22.matrimoniale) == "Marié(e)" ? _c("div", {
    staticClass: "col-12"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(1), _vm._v(" "), _c("tbody", {
    staticStyle: {
      "font-size": "0.9rem"
    }
  }, [_c("tr", [_c("td", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Nom :")]), _vm._v(" " + _vm._s((_vm$data_tb23 = _vm.data_tb2) === null || _vm$data_tb23 === void 0 || (_vm$data_tb23 = _vm$data_tb23.conjoint) === null || _vm$data_tb23 === void 0 ? void 0 : _vm$data_tb23.nom))]), _vm._v(" "), _c("td", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Prenom(s) :")]), _vm._v(" " + _vm._s((_vm$data_tb24 = _vm.data_tb2) === null || _vm$data_tb24 === void 0 || (_vm$data_tb24 = _vm$data_tb24.conjoint) === null || _vm$data_tb24 === void 0 ? void 0 : _vm$data_tb24.prenoms))])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Situation matrimoniale :")]), _vm._v(" " + _vm._s((_vm$data_tb25 = _vm.data_tb2) === null || _vm$data_tb25 === void 0 ? void 0 : _vm$data_tb25.matrimoniale))]), _vm._v(" "), _c("td", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Adresse :")]), _vm._v(" " + _vm._s((_vm$data_tb26 = _vm.data_tb2) === null || _vm$data_tb26 === void 0 || (_vm$data_tb26 = _vm$data_tb26.conjoint) === null || _vm$data_tb26 === void 0 ? void 0 : _vm$data_tb26.adresse))])])])])]) : _vm._e(), _vm._v(" "), (_vm$data_tb27 = _vm.data_tb2) !== null && _vm$data_tb27 !== void 0 && _vm$data_tb27.revenu_domicilie_nsia && ((_vm$data_tb28 = _vm.data_tb2) === null || _vm$data_tb28 === void 0 ? void 0 : _vm$data_tb28.revenu_domicilie_nsia.length) > 0 ? _c("div", {
    staticClass: "col-12 mb-3"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(2), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {
    staticClass: "p-0"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered mb-0",
    staticStyle: {
      "font-size": "0.9rem"
    }
  }, [_c("thead", [_c("tr", [_c("th", {
    staticClass: "vertical-middle text-nowrap",
    staticStyle: {
      "min-width": "100px"
    }
  }, [_vm._v("Revenu")]), _vm._v(" "), _c("th", {
    staticClass: "vertical-middle text-nowrap"
  }, [_vm._v("Emprunteur")]), _vm._v(" "), ((_vm$data_tb29 = _vm.data_tb2) === null || _vm$data_tb29 === void 0 ? void 0 : _vm$data_tb29.matrimoniale) == "Marié(e)" ? _c("th", [_vm._v("Conjoint(e)")]) : _vm._e(), _vm._v(" "), ((_vm$data_tb30 = _vm.data_tb2) === null || _vm$data_tb30 === void 0 ? void 0 : _vm$data_tb30.matrimoniale) == "Marié(e)" ? _c("th", [_vm._v("Total")]) : _vm._e(), _vm._v(" "), _c("th", {
    staticClass: "vertical-middle text-nowrap"
  }, [_vm._v("Eligible")]), _vm._v(" "), _c("th", {
    staticClass: "vertical-middle text-nowrap text-center"
  }, [_vm._v("SR")]), _vm._v(" "), _c("th", {
    staticClass: "vertical-middle text-nowrap"
  }, [_vm._v("Périodicité")]), _vm._v(" "), _c("th", {
    staticClass: "vertical-middle text-nowrap"
  }, [_vm._v("Mensualité")]), _vm._v(" "), _c("th", {
    staticClass: "vertical-middle text-nowrap"
  }, [_vm._v("Taux")]), _vm._v(" "), _c("th", {
    staticClass: "vertical-middle text-nowrap"
  }, [_vm._v("Montant pondére")]), _vm._v(" "), _c("th", {
    staticClass: "vertical-middle text-nowrap"
  }, [_vm._v("TQC NSIA")]), _vm._v(" "), _c("th", {
    staticClass: "vertical-middle text-nowrap"
  }, [_vm._v("QC NSIA")]), _vm._v(" "), _c("th", {
    staticClass: "vertical-middle text-nowrap"
  }, [_vm._v("TQC Général")]), _vm._v(" "), _c("th", {
    staticClass: "vertical-middle text-nowrap"
  }, [_vm._v("QC Général")]), _vm._v(" "), _c("th", {
    staticClass: "vertical-middle text-nowrap",
    staticStyle: {
      "min-width": "100px"
    }
  }, [_vm._v("Commentaire")])])]), _vm._v(" "), _c("tbody", [_vm._l((_vm$data_tb31 = _vm.data_tb2) === null || _vm$data_tb31 === void 0 ? void 0 : _vm$data_tb31.revenu_domicilie_nsia, function (el, ind) {
    var _vm$data_tb32, _vm$data_tb33, _vm$data_tb34;
    return _c("tr", {
      key: "rdn_" + ind
    }, [_c("td", [_vm._v("\n                                                    " + _vm._s(el.libelle) + "\n                                                    "), el.libelle == "Salaire net" && el.checked ? _c("div", {
      staticClass: "mt-1"
    }, [_c("i", {
      staticClass: "text-nowrap mx-1 fw-bold"
    }, [_vm._v("Salaire brut")])]) : _vm._e()]), _vm._v(" "), _c("td", [_vm._v("\n                                                    " + _vm._s(_vm.formatAmount(el.montant_emprunteur)) + "\n                                                    "), el.libelle == "Salaire net" && el.checked ? _c("div", {
      staticClass: "mt-1"
    }, [_c("i", [_vm._v(_vm._s(_vm.formatAmount((_vm$data_tb32 = _vm.data_tb2) === null || _vm$data_tb32 === void 0 ? void 0 : _vm$data_tb32.salaire_brut)))])]) : _vm._e()]), _vm._v(" "), ((_vm$data_tb33 = _vm.data_tb2) === null || _vm$data_tb33 === void 0 ? void 0 : _vm$data_tb33.matrimoniale) == "Marié(e)" ? _c("td", {
      staticClass: "text-right text-nowrap"
    }, [_vm._v("\n                                                    " + _vm._s(_vm.formatAmount(el.montant_conjoint)) + "\n                                                ")]) : _vm._e(), _vm._v(" "), ((_vm$data_tb34 = _vm.data_tb2) === null || _vm$data_tb34 === void 0 ? void 0 : _vm$data_tb34.matrimoniale) == "Marié(e)" ? _c("td", {
      staticClass: "text-right text-nowrap"
    }, [_vm._v(_vm._s(_vm.formatAmount(el.total_ligne)))]) : _vm._e(), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [el.eligible ? _c("input", {
      staticClass: "form-check-input m-0",
      attrs: {
        type: "checkbox",
        checked: "checked",
        disabled: ""
      }
    }) : _c("input", {
      staticClass: "form-check-input m-0",
      attrs: {
        type: "checkbox",
        disabled: ""
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [el.source_remboursement ? _c("input", {
      staticClass: "form-check-input m-0",
      attrs: {
        type: "checkbox",
        checked: "checked",
        disabled: ""
      }
    }) : _c("input", {
      staticClass: "form-check-input m-0",
      attrs: {
        type: "checkbox",
        disabled: ""
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "text-center text-nowrap"
    }, [_vm._v(_vm._s(el.periodicite))]), _vm._v(" "), _c("td", {
      staticClass: "text-nowrap text-right"
    }, [_vm._v(_vm._s(_vm.formatAmount(el.mensualite)))]), _vm._v(" "), _c("td", {
      staticClass: "text-nowrap text-center"
    }, [_vm._v(_vm._s(el.taux) + " %")]), _vm._v(" "), _c("td", {
      staticClass: "text-nowrap text-right"
    }, [_vm._v(_vm._s(_vm.formatAmount(el.montant_pondere)))]), _vm._v(" "), _c("td", {
      staticClass: "text-nowrap text-center"
    }, [_vm._v(_vm._s(el.taux_qc1) + " %")]), _vm._v(" "), _c("td", {
      staticClass: "text-nowrap text-right"
    }, [_vm._v(_vm._s(_vm.formatAmount(el.montant_qc1)))]), _vm._v(" "), _c("td", {
      staticClass: "text-nowrap text-center"
    }, [_vm._v(_vm._s(el.taux_qc2) + " %")]), _vm._v(" "), _c("td", {
      staticClass: "text-nowrap text-right"
    }, [_vm._v(_vm._s(_vm.formatAmount(el.montant_qc2)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(el.commentaire))])]);
  }), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "fw-bold text-right vertical-middle"
  }, [_vm._v("Total")]), _vm._v(" "), _c("td", {
    staticClass: "text-nowrap text-right fw-bold"
  }, [_vm._v(_vm._s(_vm.formatAmount((_vm$data_tb35 = _vm.data_tb2) === null || _vm$data_tb35 === void 0 ? void 0 : _vm$data_tb35.revenu_nsia_total_colonne_emprunteur)))]), _vm._v(" "), ((_vm$data_tb36 = _vm.data_tb2) === null || _vm$data_tb36 === void 0 ? void 0 : _vm$data_tb36.matrimoniale) == "Marié(e)" ? _c("td", {
    staticClass: "text-right fw-bold text-nowrap"
  }, [_vm._v("\n                                                    " + _vm._s(_vm.formatAmount((_vm$data_tb37 = _vm.data_tb2) === null || _vm$data_tb37 === void 0 ? void 0 : _vm$data_tb37.revenu_nsia_total_colonne_conjoint)) + "\n                                                ")]) : _vm._e(), _vm._v(" "), ((_vm$data_tb38 = _vm.data_tb2) === null || _vm$data_tb38 === void 0 ? void 0 : _vm$data_tb38.matrimoniale) == "Marié(e)" ? _c("td", {
    staticClass: "text-right fw-bold text-nowrap"
  }, [_vm._v(_vm._s(_vm.formatAmount((_vm$data_tb39 = _vm.data_tb2) === null || _vm$data_tb39 === void 0 ? void 0 : _vm$data_tb39.revenu_nsia_total)))]) : _vm._e(), _vm._v(" "), _c("td"), _vm._v(" "), _c("td"), _vm._v(" "), _c("td"), _vm._v(" "), _c("td", {
    staticClass: "text-nowrap text-right fw-bold"
  }, [_vm._v(_vm._s(_vm.formatAmount((_vm$data_tb40 = _vm.data_tb2) === null || _vm$data_tb40 === void 0 ? void 0 : _vm$data_tb40.revenu_nsia_total_colonne_mensualite)))]), _vm._v(" "), _c("td"), _vm._v(" "), _c("td", {
    staticClass: "text-nowrap text-right fw-bold"
  }, [_vm._v(_vm._s(_vm.formatAmount((_vm$data_tb41 = _vm.data_tb2) === null || _vm$data_tb41 === void 0 ? void 0 : _vm$data_tb41.revenu_nsia_total_colonne_montant_pondere)))]), _vm._v(" "), _c("td", {
    staticClass: "text-nowrap text-center fw-bold"
  }, [_vm._v(_vm._s((_vm$data_tb42 = _vm.data_tb2) === null || _vm$data_tb42 === void 0 ? void 0 : _vm$data_tb42.revenu_nsia_total_colonne_taux_qc1) + " %")]), _vm._v(" "), _c("td", {
    staticClass: "text-nowrap text-right fw-bold"
  }, [_vm._v(_vm._s(_vm.formatAmount((_vm$data_tb43 = _vm.data_tb2) === null || _vm$data_tb43 === void 0 ? void 0 : _vm$data_tb43.revenu_nsia_total_colonne_montant_qc1)))]), _vm._v(" "), _c("td", {
    staticClass: "text-nowrap text-center fw-bold"
  }, [_vm._v(_vm._s((_vm$data_tb44 = _vm.data_tb2) === null || _vm$data_tb44 === void 0 ? void 0 : _vm$data_tb44.revenu_nsia_total_colonne_taux_qc2) + " %")]), _vm._v(" "), _c("td", {
    staticClass: "text-nowrap text-right fw-bold"
  }, [_vm._v(_vm._s(_vm.formatAmount((_vm$data_tb45 = _vm.data_tb2) === null || _vm$data_tb45 === void 0 ? void 0 : _vm$data_tb45.revenu_nsia_total_colonne_montant_qc2)))]), _vm._v(" "), _c("td")])], 2)])])])])])])])]) : _vm._e(), _vm._v(" "), (_vm$data_tb46 = _vm.data_tb2) !== null && _vm$data_tb46 !== void 0 && _vm$data_tb46.engagements_en_cours && ((_vm$data_tb47 = _vm.data_tb2) === null || _vm$data_tb47 === void 0 ? void 0 : _vm$data_tb47.engagements_en_cours.length) > 0 ? _c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(3), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {
    staticClass: "p-0"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered mb-0",
    staticStyle: {
      "font-size": "0.9rem"
    }
  }, [_vm._m(4), _vm._v(" "), _c("tbody", [_vm._l((_vm$data_tb48 = _vm.data_tb2) === null || _vm$data_tb48 === void 0 ? void 0 : _vm$data_tb48.engagements_en_cours, function (rd, ind) {
    return [rd.checked && rd.libelle != "" ? _c("tr", {
      key: "red_" + ind
    }, [_c("td", [_vm._v(_vm._s(rd.libelle))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(rd.type_credit))]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [_vm._v(_vm._s(rd.date_echeance != "" ? _vm.formatDate(rd.date_echeance) : ""))]), _vm._v(" "), _c("td", {
      staticClass: "text-right text-nowrap"
    }, [_vm._v(_vm._s(_vm.formatAmount(rd.montant)) + "\n                                                    ")]), _vm._v(" "), _c("td", {
      staticClass: "text-right text-nowrap"
    }, [_vm._v(_vm._s(_vm.formatAmount(rd.encours)) + "\n                                                    ")]), _vm._v(" "), _c("td", {
      staticClass: "text-right text-nowrap"
    }, [_vm._v(_vm._s(_vm.formatAmount(rd.mensualite)) + "\n                                                    ")]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [_vm._v(_vm._s(rd.rachat == "R" ? "Oui" : ""))])]) : _vm._e()];
  }), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "text-right fw-bold",
    attrs: {
      colspan: "3"
    }
  }, [_vm._v("TOTAL")]), _vm._v(" "), _c("td", {
    staticClass: "text-right text-nowrap fw-bold"
  }, [_vm._v(_vm._s(_vm.formatAmount((_vm$data_tb49 = _vm.data_tb2) === null || _vm$data_tb49 === void 0 ? void 0 : _vm$data_tb49.engagements_en_cours_total_montant)))]), _vm._v(" "), _c("td", {
    staticClass: "text-right text-nowrap fw-bold"
  }, [_vm._v(_vm._s(_vm.formatAmount((_vm$data_tb50 = _vm.data_tb2) === null || _vm$data_tb50 === void 0 ? void 0 : _vm$data_tb50.engagements_en_cours_total_encours)))]), _vm._v(" "), _c("td", {
    staticClass: "text-right text-nowrap fw-bold"
  }, [_vm._v(_vm._s(_vm.formatAmount((_vm$data_tb51 = _vm.data_tb2) === null || _vm$data_tb51 === void 0 ? void 0 : _vm$data_tb51.engagements_en_cours_total_mensualite)) + "\n                                                ")]), _vm._v(" "), _c("td")])], 2)])])])])])])])]) : _vm._e(), _vm._v(" "), ((_vm$data_tb52 = _vm.data_tb2) === null || _vm$data_tb52 === void 0 ? void 0 : _vm$data_tb52.matrimoniale) == "Marié(e)" && (_vm$data_tb53 = _vm.data_tb2) !== null && _vm$data_tb53 !== void 0 && (_vm$data_tb53 = _vm$data_tb53.conjoint) !== null && _vm$data_tb53 !== void 0 && _vm$data_tb53.engagements_en_cours && ((_vm$data_tb54 = _vm.data_tb2) === null || _vm$data_tb54 === void 0 || (_vm$data_tb54 = _vm$data_tb54.conjoint) === null || _vm$data_tb54 === void 0 ? void 0 : _vm$data_tb54.engagements_en_cours.length) > 0 ? _c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(5), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {
    staticClass: "p-0"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered mb-0",
    staticStyle: {
      "font-size": "0.9rem"
    }
  }, [_vm._m(6), _vm._v(" "), _c("tbody", [_vm._l((_vm$data_tb55 = _vm.data_tb2) === null || _vm$data_tb55 === void 0 ? void 0 : _vm$data_tb55.conjoint.engagements_en_cours, function (rd, ind) {
    return [rd.checked && rd.libelle != "" ? _c("tr", {
      key: "rd__" + ind
    }, [_c("td", [_vm._v(_vm._s(rd.libelle))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(rd.type_credit))]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [_vm._v(_vm._s(rd.date_echeance != "" ? _vm.formatDate(rd.date_echeance) : ""))]), _vm._v(" "), _c("td", {
      staticClass: "text-right text-nowrap"
    }, [_vm._v(_vm._s(_vm.formatAmount(rd.montant)) + "\n                                                    ")]), _vm._v(" "), _c("td", {
      staticClass: "text-right text-nowrap"
    }, [_vm._v(_vm._s(_vm.formatAmount(rd.encours)) + "\n                                                    ")]), _vm._v(" "), _c("td", {
      staticClass: "text-right text-nowrap"
    }, [_vm._v(_vm._s(_vm.formatAmount(rd.mensualite)) + "\n                                                    ")]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [_vm._v(_vm._s(rd.rachat == "R" ? "Oui" : ""))])]) : _vm._e()];
  }), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "text-right fw-bold",
    attrs: {
      colspan: "3"
    }
  }, [_vm._v("TOTAL")]), _vm._v(" "), _c("td", {
    staticClass: "text-right text-nowrap fw-bold"
  }, [_vm._v(_vm._s(_vm.formatAmount((_vm$data_tb56 = _vm.data_tb2) === null || _vm$data_tb56 === void 0 ? void 0 : _vm$data_tb56.engagements_en_cours_conjoint_total_montant)))]), _vm._v(" "), _c("td", {
    staticClass: "text-right text-nowrap fw-bold"
  }, [_vm._v(_vm._s(_vm.formatAmount((_vm$data_tb57 = _vm.data_tb2) === null || _vm$data_tb57 === void 0 ? void 0 : _vm$data_tb57.engagements_en_cours_conjoint_total_encours)))]), _vm._v(" "), _c("td", {
    staticClass: "text-right text-nowrap fw-bold"
  }, [_vm._v(_vm._s(_vm.formatAmount((_vm$data_tb58 = _vm.data_tb2) === null || _vm$data_tb58 === void 0 ? void 0 : _vm$data_tb58.engagements_en_cours_conjoint_total_mensualite)))]), _vm._v(" "), _c("td")])], 2)])])])])])])])]) : _vm._e(), _vm._v(" "), ((_vm$data_tb59 = _vm.data_tb2) === null || _vm$data_tb59 === void 0 ? void 0 : _vm$data_tb59.bref_engagement_en_cours) != "" ? _c("div", {
    staticClass: "col-12"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(7), _vm._v(" "), _c("tbody", {
    staticStyle: {
      "font-size": "0.9rem"
    }
  }, [_c("tr", [_c("td", [_c("span", {
    domProps: {
      innerHTML: _vm._s((_vm$data_tb60 = _vm.data_tb2) === null || _vm$data_tb60 === void 0 ? void 0 : _vm$data_tb60.bref_engagement_en_cours)
    }
  })])])])])]) : _vm._e(), _vm._v(" "), (_vm$data_tb61 = _vm.data_tb2) !== null && _vm$data_tb61 !== void 0 && _vm$data_tb61.garanties_proposees && ((_vm$data_tb62 = _vm.data_tb2) === null || _vm$data_tb62 === void 0 ? void 0 : _vm$data_tb62.garanties_proposees.length) > 0 ? _c("div", {
    staticClass: "col-12"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(8), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {
    staticClass: "p-0"
  }, [_c("table", {
    staticClass: "table table-bordered mb-0",
    staticStyle: {
      "font-size": "0.9rem"
    }
  }, [_vm._m(9), _vm._v(" "), _c("tbody", [_vm._l((_vm$data_tb63 = _vm.data_tb2) === null || _vm$data_tb63 === void 0 ? void 0 : _vm$data_tb63.garanties_proposees, function (rd, ind) {
    var _rd$type, _rd$type2;
    return [((_rd$type = rd.type) === null || _rd$type === void 0 ? void 0 : _rd$type.libelle) != "" ? _c("tr", {
      key: "rd___" + ind
    }, [_c("td", [_vm._v(_vm._s((_rd$type2 = rd.type) === null || _rd$type2 === void 0 ? void 0 : _rd$type2.libelle))]), _vm._v(" "), _c("td", {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(_vm.formatAmount(rd.montant)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(rd.commentaire))])]) : _vm._e()];
  }), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "text-right fw-bold"
  }, [_vm._v("TOTAL")]), _vm._v(" "), _c("td", {
    staticClass: "text-right fw-bold"
  }, [_vm._v(_vm._s(_vm.formatAmount(_vm.somX3((_vm$data_tb64 = _vm.data_tb2) === null || _vm$data_tb64 === void 0 ? void 0 : _vm$data_tb64.garanties_proposees, "montant"))))]), _vm._v(" "), _c("td")])], 2)])])])])])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("table", {
    staticClass: "table table-bordered mb-4"
  }, [_vm._m(10), _vm._v(" "), _c("tbody", {
    staticStyle: {
      "font-size": "0.9rem"
    }
  }, [_c("tr", [_c("td", [_c("div", {
    staticClass: "pl-10-px"
  }, [_c("b", [_vm._v("• Date d'entrée en relation")]), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "pl-3"
  }, [_c("p", [_vm._v(_vm._s((_vm$data_tb65 = _vm.data_tb2) !== null && _vm$data_tb65 !== void 0 && _vm$data_tb65.date_entree_en_relation && ((_vm$data_tb66 = _vm.data_tb2) === null || _vm$data_tb66 === void 0 ? void 0 : _vm$data_tb66.date_entree_en_relation) != "" ? _vm.formatDate((_vm$data_tb67 = _vm.data_tb2) === null || _vm$data_tb67 === void 0 ? void 0 : _vm$data_tb67.date_entree_en_relation) : ""))])]), _vm._v(" "), _c("b", [_vm._v("• Mouvement 12 derniers mois")]), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "pl-3"
  }, [_c("span", {
    domProps: {
      innerHTML: _vm._s((_vm$data_tb68 = _vm.data_tb2) === null || _vm$data_tb68 === void 0 ? void 0 : _vm$data_tb68.bref_mouvement_12_derniers_mois)
    }
  })]), _vm._v(" "), _c("b", [_vm._v("• Produits éventuellement souscrits")]), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "pl-3"
  }, [_c("span", {
    domProps: {
      innerHTML: _vm._s((_vm$data_tb69 = _vm.data_tb2) === null || _vm$data_tb69 === void 0 ? void 0 : _vm$data_tb69.bref_produit_eventuellement_souscrits)
    }
  })]), _vm._v(" "), _c("b", [_vm._v("• Engagements en cours")]), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "pl-3"
  }, [_c("span", {
    domProps: {
      innerHTML: _vm._s((_vm$data_tb70 = _vm.data_tb2) === null || _vm$data_tb70 === void 0 ? void 0 : _vm$data_tb70.bref_engagement_en_cours)
    }
  })]), _vm._v(" "), _c("b", [_vm._v("• Incidents à signaler")]), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "pl-3"
  }, [_c("span", {
    domProps: {
      innerHTML: _vm._s((_vm$data_tb71 = _vm.data_tb2) === null || _vm$data_tb71 === void 0 ? void 0 : _vm$data_tb71.bref_incident_a_signaler)
    }
  })])])])])])])])])]) : _vm._e();
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "justify-content-center"
  }, [_c("div", {
    staticClass: "head-memorandum-title px-3 mb-2",
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("\n            Profil personnel & situation familiale\n        ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "bg-ed-primary"
  }, [_c("tr", [_c("th", {
    staticClass: "text-center py-2 m-0",
    attrs: {
      colspan: "2"
    }
  }, [_c("b", {
    staticClass: "text-uppercase"
  }, [_vm._v("Conjoint(e)")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "bg-ed-primary"
  }, [_c("tr", [_c("th", {
    staticClass: "text-center py-2 m-0"
  }, [_c("b", {
    staticClass: "text-uppercase"
  }, [_vm._v("Revenu domicilié à la NSIA Banque")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "bg-ed-primary"
  }, [_c("tr", [_c("th", {
    staticClass: "text-center py-2 m-0"
  }, [_c("b", {
    staticClass: "text-uppercase"
  }, [_vm._v("Engagement en cours -\n                                    Emprunteur")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_vm._v("Engagement")]), _vm._v(" "), _c("th", [_vm._v("Type de prêt")]), _vm._v(" "), _c("th", [_vm._v("Date d'échéance")]), _vm._v(" "), _c("th", [_vm._v("Montant")]), _vm._v(" "), _c("th", [_vm._v("En cours")]), _vm._v(" "), _c("th", [_vm._v("Mensualité")]), _vm._v(" "), _c("th", [_vm._v("Rachat")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "bg-ed-primary"
  }, [_c("tr", [_c("th", {
    staticClass: "text-center py-2 m-0"
  }, [_c("b", {
    staticClass: "text-uppercase"
  }, [_vm._v("Engagement en cours -\n                                    conjoint(e)")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_vm._v("Engagement")]), _vm._v(" "), _c("th", [_vm._v("Type de prêt")]), _vm._v(" "), _c("th", [_vm._v("Date d'échéance")]), _vm._v(" "), _c("th", [_vm._v("Montant")]), _vm._v(" "), _c("th", [_vm._v("En cours")]), _vm._v(" "), _c("th", [_vm._v("Mensualité")]), _vm._v(" "), _c("th", [_vm._v("Rachat")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "bg-ed-primary"
  }, [_c("tr", [_c("th", {
    staticClass: "text-center py-2 m-0"
  }, [_c("b", {
    staticClass: "text-uppercase"
  }, [_vm._v("Commentaire sur les engagements en\n                                cours")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "bg-ed-primary"
  }, [_c("tr", [_c("th", {
    staticClass: "text-center py-2 m-0"
  }, [_c("b", {
    staticClass: "text-uppercase"
  }, [_vm._v("Garanties proposées")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticClass: "col-5"
  }, [_vm._v("Intitulé")]), _vm._v(" "), _c("th", {
    staticClass: "col-2"
  }, [_vm._v("Valeur")]), _vm._v(" "), _c("th", {
    staticClass: "col-4"
  }, [_vm._v("Commentaire")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "bg-ed-primary"
  }, [_c("tr", [_c("th", {
    staticClass: "text-center py-2 m-0"
  }, [_c("b", {
    staticClass: "text-uppercase"
  }, [_vm._v("Bref rappel des relations du client\n                                avec la NSIA BANQUE-CI")])])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_memo/PPO2.vue?vue&type=style&index=0&id=2b1ae496&lang=css&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_memo/PPO2.vue?vue&type=style&index=0&id=2b1ae496&lang=css&scoped=true ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.bg-grey[data-v-2b1ae496] {\r\n    background-color: #f4f3f3;\n}\nth[data-v-2b1ae496] {\r\n    background: #f4f3f3 !important;\n}\n.vertical-middle[data-v-2b1ae496] {\r\n    vertical-align: middle;\n}\n.font-bold[data-v-2b1ae496] {\r\n    font-weight: bold;\n}\n.head-memorandum-title[data-v-2b1ae496] {\r\n    margin-top: 15px;\r\n    padding: 16px;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    background-color: #34495e;\r\n    border: 2px solid #575759;\r\n    box-shadow: 1px 3px 4px #ddd;\r\n    font-size: 16px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    border-radius: 10px;\r\n    margin-bottom: 15px;\n}\n.text-uppercase[data-v-2b1ae496] {\r\n    text-transform: uppercase;\n}\n._border_right[data-v-2b1ae496] {\r\n    border-right: 1px solid;\n}\n._border_bottom[data-v-2b1ae496] {\r\n    border-bottom: 1px solid;\n}\n.pl-10-px[data-v-2b1ae496] {\r\n    padding-left: 10px;\n}\n.pl-30-px[data-v-2b1ae496] {\r\n    padding-left: 30px;\n}\n.pl-3[data-v-2b1ae496] {\r\n    padding-left: 10px;\n}\n.form-check-input[data-v-2b1ae496]:disabled {\r\n    opacity: 1;\n}\n.card[data-v-2b1ae496] {\r\n    border-radius: 0;\r\n    width: 100%;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_memo/PPO2.vue?vue&type=style&index=0&id=2b1ae496&lang=css&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_memo/PPO2.vue?vue&type=style&index=0&id=2b1ae496&lang=css&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PPO2_vue_vue_type_style_index_0_id_2b1ae496_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PPO2.vue?vue&type=style&index=0&id=2b1ae496&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_memo/PPO2.vue?vue&type=style&index=0&id=2b1ae496&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PPO2_vue_vue_type_style_index_0_id_2b1ae496_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PPO2_vue_vue_type_style_index_0_id_2b1ae496_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/memo/scene_memo/PPO2.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/memo/scene_memo/PPO2.vue ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PPO2_vue_vue_type_template_id_2b1ae496_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PPO2.vue?vue&type=template&id=2b1ae496&scoped=true */ "./resources/js/components/offview/bank/nsia/memo/scene_memo/PPO2.vue?vue&type=template&id=2b1ae496&scoped=true");
/* harmony import */ var _PPO2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PPO2.vue?vue&type=script&lang=js */ "./resources/js/components/offview/bank/nsia/memo/scene_memo/PPO2.vue?vue&type=script&lang=js");
/* harmony import */ var _PPO2_vue_vue_type_style_index_0_id_2b1ae496_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PPO2.vue?vue&type=style&index=0&id=2b1ae496&lang=css&scoped=true */ "./resources/js/components/offview/bank/nsia/memo/scene_memo/PPO2.vue?vue&type=style&index=0&id=2b1ae496&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PPO2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _PPO2_vue_vue_type_template_id_2b1ae496_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _PPO2_vue_vue_type_template_id_2b1ae496_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2b1ae496",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/offview/bank/nsia/memo/scene_memo/PPO2.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/memo/scene_memo/PPO2.vue?vue&type=script&lang=js":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/memo/scene_memo/PPO2.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PPO2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PPO2.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_memo/PPO2.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PPO2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/memo/scene_memo/PPO2.vue?vue&type=style&index=0&id=2b1ae496&lang=css&scoped=true":
/*!************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/memo/scene_memo/PPO2.vue?vue&type=style&index=0&id=2b1ae496&lang=css&scoped=true ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PPO2_vue_vue_type_style_index_0_id_2b1ae496_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PPO2.vue?vue&type=style&index=0&id=2b1ae496&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_memo/PPO2.vue?vue&type=style&index=0&id=2b1ae496&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/memo/scene_memo/PPO2.vue?vue&type=template&id=2b1ae496&scoped=true":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/memo/scene_memo/PPO2.vue?vue&type=template&id=2b1ae496&scoped=true ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PPO2_vue_vue_type_template_id_2b1ae496_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PPO2_vue_vue_type_template_id_2b1ae496_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PPO2_vue_vue_type_template_id_2b1ae496_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PPO2.vue?vue&type=template&id=2b1ae496&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_memo/PPO2.vue?vue&type=template&id=2b1ae496&scoped=true");


/***/ })

}]);