"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_offview_bank_nsia_memo_carcasse_ppo_PPO1_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/carcasse_ppo/PPO1.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/carcasse_ppo/PPO1.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_connects_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../services/connects.service */ "./resources/js/services/connects.service.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "PPOCarcasse",
  props: {
    dossier_credit: Object
  },
  created: function created() {
    this.loadData();
  },
  data: function data() {
    var _this$dossier_credit, _this$dossier_credit2, _this$dossier_credit3, _this$dossier_credit4, _this$dossier_credit5, _this$dossier_credit6, _this$dossier_credit7, _this$dossier_credit8, _this$dossier_credit9, _this$dossier_credit0, _this$dossier_credit1, _this$dossier_credit10, _this$dossier_credit11;
    return {
      data_tb1: (_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.cred_pub_tb_10001,
      data_tb2: (_this$dossier_credit2 = this.dossier_credit) === null || _this$dossier_credit2 === void 0 ? void 0 : _this$dossier_credit2.cred_pub_tb_10002,
      data_tb3: (_this$dossier_credit3 = this.dossier_credit) === null || _this$dossier_credit3 === void 0 ? void 0 : _this$dossier_credit3.cred_pub_tb_10003,
      data_tb4: (_this$dossier_credit4 = this.dossier_credit) === null || _this$dossier_credit4 === void 0 ? void 0 : _this$dossier_credit4.cred_pub_tb_10004,
      data_tb5: (_this$dossier_credit5 = this.dossier_credit) === null || _this$dossier_credit5 === void 0 ? void 0 : _this$dossier_credit5.cred_pub_tb_10005,
      data_tb6: (_this$dossier_credit6 = this.dossier_credit) === null || _this$dossier_credit6 === void 0 ? void 0 : _this$dossier_credit6.cred_pub_tb_10006,
      data_tb7: (_this$dossier_credit7 = this.dossier_credit) === null || _this$dossier_credit7 === void 0 ? void 0 : _this$dossier_credit7.cred_pub_tb_10007,
      data_tb9: (_this$dossier_credit8 = this.dossier_credit) === null || _this$dossier_credit8 === void 0 ? void 0 : _this$dossier_credit8.cred_pub_tb_10009,
      caf_recorded_file: (_this$dossier_credit9 = this.dossier_credit) === null || _this$dossier_credit9 === void 0 ? void 0 : _this$dossier_credit9.caf_recorded_file,
      nom: ((_this$dossier_credit0 = this.dossier_credit) === null || _this$dossier_credit0 === void 0 || (_this$dossier_credit0 = _this$dossier_credit0.cred_pub_tb_10002) === null || _this$dossier_credit0 === void 0 ? void 0 : _this$dossier_credit0.nom) != undefined ? (_this$dossier_credit1 = this.dossier_credit) === null || _this$dossier_credit1 === void 0 || (_this$dossier_credit1 = _this$dossier_credit1.cred_pub_tb_10002) === null || _this$dossier_credit1 === void 0 ? void 0 : _this$dossier_credit1.nom : "",
      prenoms: ((_this$dossier_credit10 = this.dossier_credit) === null || _this$dossier_credit10 === void 0 || (_this$dossier_credit10 = _this$dossier_credit10.cred_pub_tb_10002) === null || _this$dossier_credit10 === void 0 ? void 0 : _this$dossier_credit10.prenoms) != undefined ? (_this$dossier_credit11 = this.dossier_credit) === null || _this$dossier_credit11 === void 0 || (_this$dossier_credit11 = _this$dossier_credit11.cred_pub_tb_10002) === null || _this$dossier_credit11 === void 0 ? void 0 : _this$dossier_credit11.prenoms : "",
      agence: "",
      connectsHost: _services_connects_service__WEBPACK_IMPORTED_MODULE_0__["default"].loadablehost(),
      isLoadingFile: false,
      nombreEcheance: "",
      quotite_cessible: 0,
      quotite_cessible_disponible: 0
    };
  },
  methods: {
    formatDate: function formatDate(date) {
      if (['', null, undefined].includes(date)) return "";
      var options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
      };
      return new Date(date).toLocaleDateString('fr', options);
    },
    loadData: function loadData() {
      var _this$dossier_credit12, _this$data_tb, _this$data_tb2, _this$data_tb3, _this$data_tb4, _this$data_tb5;
      if (((_this$dossier_credit12 = this.dossier_credit) === null || _this$dossier_credit12 === void 0 ? void 0 : _this$dossier_credit12.caf_recorded_file.client) != undefined) {
        var _this$dossier_credit13;
        this.agence = (_this$dossier_credit13 = this.dossier_credit) === null || _this$dossier_credit13 === void 0 || (_this$dossier_credit13 = _this$dossier_credit13[this.determineCredPubTablesFromDosCred(this.dossier_credit)[1]]) === null || _this$dossier_credit13 === void 0 ? void 0 : _this$dossier_credit13.agence;
      }
      var frequence_mois = parseInt((_this$data_tb = this.data_tb9) === null || _this$data_tb === void 0 ? void 0 : _this$data_tb.frequence_mois);
      var frequence_versement = parseInt((_this$data_tb2 = this.data_tb9) === null || _this$data_tb2 === void 0 ? void 0 : _this$data_tb2.frequence_versement);
      this.nombreEcheance = ((_this$data_tb3 = this.data_tb9) === null || _this$data_tb3 === void 0 ? void 0 : _this$data_tb3.duree_credit) * frequence_versement / frequence_mois;
      this.quotite_cessible = this.convertInt((_this$data_tb4 = this.data_tb3) === null || _this$data_tb4 === void 0 ? void 0 : _this$data_tb4.quotite_cessible) * frequence_mois;
      this.quotite_cessible_disponible = this.convertInt((_this$data_tb5 = this.data_tb3) === null || _this$data_tb5 === void 0 ? void 0 : _this$data_tb5.quotite_cessible_disponible) * frequence_mois;
      this.getFiles();
    },
    formatAmount: function formatAmount(x) {
      var _x$toString;
      return x === null || x === void 0 || (_x$toString = x.toString()) === null || _x$toString === void 0 ? void 0 : _x$toString.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
    convertInt: function convertInt(n) {
      var _n$toString;
      return Number(n === null || n === void 0 || (_n$toString = n.toString()) === null || _n$toString === void 0 ? void 0 : _n$toString.replace(/\s/g, ''));
    },
    handleDoubleClickOrClick: function handleDoubleClickOrClick(index) {
      var _this = this;
      EventBus.$emit("open-extra-file-explorer");
      setTimeout(function () {
        var _this$data_tb7$pieces;
        EventBus.$emit("data-extra-file-explorer", {
          name: (_this$data_tb7$pieces = _this.data_tb7.pieces_versees_list[index]) === null || _this$data_tb7$pieces === void 0 ? void 0 : _this$data_tb7$pieces.name,
          view: true
        });
      }, 500);
    },
    getFiles: function getFiles() {
      var _this$data_tb6,
        _this2 = this;
      if ((_this$data_tb6 = this.data_tb7) !== null && _this$data_tb6 !== void 0 && _this$data_tb6.pieces_versees_list && this.data_tb7.pieces_versees_list.length > 0) {
        this.isLoadingFile = true;
        this.$axios.post(this.connectsHost + 'api/get-files', {
          file_identity: this.dossier_credit.cred_pub_key
        }).then(function (res) {
          var _res$data$data, _res$data$data2;
          res.data = JSON.parse(res.data);
          if (((_res$data$data = res.data.data) === null || _res$data$data === void 0 ? void 0 : _res$data$data.length) > 0 || ((_res$data$data2 = res.data.data) === null || _res$data$data2 === void 0 ? void 0 : _res$data$data2.length) != null) {
            _this2.files = res.data.data;
            _this2.data_tb7.pieces_versees_list.forEach(function (element, index) {
              var count = 0;
              _this2.files.forEach(function (file) {
                var _element$template;
                if ((file === null || file === void 0 ? void 0 : file.extra_file_template_id) != null && (element === null || element === void 0 || (_element$template = element.template) === null || _element$template === void 0 ? void 0 : _element$template.id) == (file === null || file === void 0 ? void 0 : file.extra_file_template_id)) {
                  count++;
                }
              });
              _this2.data_tb7.pieces_versees_list[index]['files'] = count;
            });
          }
          _this2.isLoadingFile = false;
        })["catch"](function (err) {
          _this2.isLoadingFile = false;
          console.error(err);
        });
      }
    }
  },
  computed: {
    engagements: function engagements() {
      var _this$data_tb7,
        _this3 = this,
        _this$data_tb8;
      var data = [];
      if ((_this$data_tb7 = this.data_tb2) !== null && _this$data_tb7 !== void 0 && _this$data_tb7.engagements_en_cours) {
        this.data_tb2.engagements_en_cours.forEach(function (element) {
          var find = false;
          data.forEach(function (el) {
            if (el.libelle == element.libelle) {
              find = true;
              el.montant_emprunteur = _this3.formatAmount(_this3.convertInt(el.montant_emprunteur) + _this3.convertInt(element.encours));
            }
          });
          if (find == false) {
            if (element.libelle != '') {
              data.push({
                checked: element.checked,
                libelle: element.libelle,
                montant_emprunteur: element.encours,
                montant_conjoint: ""
              });
            }
          }
        });
      }
      if ((_this$data_tb8 = this.data_tb2) !== null && _this$data_tb8 !== void 0 && (_this$data_tb8 = _this$data_tb8.conjoint) !== null && _this$data_tb8 !== void 0 && _this$data_tb8.engagements_en_cours) {
        var _this$data_tb2$conjoi;
        (_this$data_tb2$conjoi = this.data_tb2.conjoint) === null || _this$data_tb2$conjoi === void 0 || _this$data_tb2$conjoi.engagements_en_cours.forEach(function (element) {
          if (element.checked) {
            var find = false;
            data.forEach(function (a) {
              var _a$libelle, _element$libelle;
              if ((a === null || a === void 0 || (_a$libelle = a.libelle) === null || _a$libelle === void 0 ? void 0 : _a$libelle.toString().trim().toLowerCase()) == (element === null || element === void 0 || (_element$libelle = element.libelle) === null || _element$libelle === void 0 ? void 0 : _element$libelle.toString().trim().toLowerCase())) {
                a.montant_conjoint = element.encours;
                find = true;
              }
            });
            if (find == false) {
              if (element.libelle != '') {
                data.push({
                  checked: true,
                  libelle: element.libelle,
                  montant_emprunteur: "",
                  montant_conjoint: element.encours
                });
              }
            }
          }
        });
      }
      return data;
    },
    comptes: function comptes() {
      var _this$data_tb9, _this$data_tb0;
      var data = [];
      if ((_this$data_tb9 = this.data_tb5) !== null && _this$data_tb9 !== void 0 && _this$data_tb9.comptes) {
        this.data_tb5.comptes.forEach(function (element) {
          data.push({
            checked: true,
            libelle: element.banque,
            compte_1: element.compte_cheque,
            compte_2: ""
          });
        });
      }
      if ((_this$data_tb0 = this.data_tb5) !== null && _this$data_tb0 !== void 0 && _this$data_tb0.comptes_conjoint) {
        this.data_tb5.comptes_conjoint.forEach(function (element) {
          var find = false;
          data.forEach(function (a) {
            var _a$libelle2, _element$banque;
            if ((a === null || a === void 0 || (_a$libelle2 = a.libelle) === null || _a$libelle2 === void 0 ? void 0 : _a$libelle2.toString().trim().toLowerCase()) == (element === null || element === void 0 || (_element$banque = element.banque) === null || _element$banque === void 0 ? void 0 : _element$banque.toString().trim().toLowerCase())) {
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/carcasse_ppo/PPO1.vue?vue&type=template&id=0862583e&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/carcasse_ppo/PPO1.vue?vue&type=template&id=0862583e&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$data_tb, _vm$caf_recorded_file, _vm$data_tb2, _vm$data_tb3, _vm$data_tb4, _vm$data_tb5, _vm$data_tb6, _vm$data_tb7, _vm$data_tb8, _vm$data_tb9, _vm$data_tb0, _vm$data_tb1, _vm$data_tb10, _vm$data_tb11, _vm$data_tb12, _vm$data_tb13, _vm$data_tb14, _vm$data_tb15, _vm$data_tb16, _vm$data_tb17, _vm$data_tb18, _vm$data_tb19, _vm$data_tb20, _vm$data_tb21, _vm$data_tb22, _vm$data_tb23, _vm$data_tb24, _vm$data_tb25, _vm$data_tb27, _vm$data_tb29, _vm$data_tb30, _vm$data_tb32, _vm$data_tb33, _vm$data_tb34, _vm$data_tb35, _vm$data_tb36, _vm$data_tb37, _vm$data_tb38, _vm$data_tb39, _vm$data_tb40, _vm$data_tb41, _vm$data_tb42, _vm$data_tb43, _vm$data_tb44, _vm$data_tb45, _vm$data_tb46, _vm$data_tb47, _vm$data_tb48, _vm$data_tb49, _vm$data_tb50, _vm$data_tb51;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 mt-3"
  }, [_c("table", {
    staticClass: "table table-borderless"
  }, [_c("tbody", {
    staticStyle: {
      "font-size": "0.9rem"
    }
  }, [_c("tr", [_c("td", {
    attrs: {
      colspan: "2"
    }
  }, [_c("div", {
    staticStyle: {
      "font-size": "1rem",
      padding: "3rem 0px"
    }
  }, [_c("b", [_vm._v("BENEFICIAIRE : ")]), _vm._v(" " + _vm._s(_vm.nom + " " + _vm.prenoms))])])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("AGENCE : ")]), _vm._v(" " + _vm._s(_vm.agence))]), _vm._v(" "), _c("td", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("SECTEUR : ")]), _vm._v(" " + _vm._s((_vm$data_tb = _vm.data_tb3) === null || _vm$data_tb === void 0 ? void 0 : _vm$data_tb.employeur) + " ")])]), _vm._v(" "), _c("tr", [_c("td", [_c("b", [_vm._v("INDICE : ")]), _vm._v(" " + _vm._s((_vm$caf_recorded_file = _vm.caf_recorded_file.client) === null || _vm$caf_recorded_file === void 0 ? void 0 : _vm$caf_recorded_file.matcli))]), _vm._v(" "), _c("td", [_c("b", [_vm._v("ADRESSE POSTALE : ")]), _vm._v(" " + _vm._s((_vm$data_tb2 = _vm.data_tb2) === null || _vm$data_tb2 === void 0 ? void 0 : _vm$data_tb2.adresse_postale))])]), _vm._v(" "), _c("tr", [_c("td", [_c("b", [_vm._v("TELEPHONE : ")]), _vm._v(" " + _vm._s((_vm$data_tb3 = _vm.data_tb2) === null || _vm$data_tb3 === void 0 ? void 0 : _vm$data_tb3.telephone))]), _vm._v(" "), _vm._m(0)]), _vm._v(" "), _c("tr", [_c("td", [_c("b", [_vm._v("MONTANT SOLLICITÉ : ")]), _vm._v(" " + _vm._s(_vm.formatAmount((_vm$data_tb4 = _vm.data_tb1) === null || _vm$data_tb4 === void 0 ? void 0 : _vm$data_tb4.montant_sollicite)))]), _vm._v(" "), _c("td", [_c("b", [_vm._v("MONTANT PROPOSÉ : ")]), _vm._v(" " + _vm._s(_vm.formatAmount((_vm$data_tb5 = _vm.data_tb1) === null || _vm$data_tb5 === void 0 ? void 0 : _vm$data_tb5.montant_credit)))])]), _vm._v(" "), _c("tr", [_c("td", [_c("b", [_vm._v("VALIDITE : ")]), _vm._v(" "), ((_vm$data_tb6 = _vm.data_tb1) === null || _vm$data_tb6 === void 0 ? void 0 : _vm$data_tb6.mode_paiement_demande) == "In fine" ? _c("span", [_vm._v(_vm._s((_vm$data_tb7 = _vm.data_tb1) === null || _vm$data_tb7 === void 0 ? void 0 : _vm$data_tb7.mode_paiement_demande))]) : _c("span", [_vm._v(_vm._s(_vm.nombreEcheance) + " (" + _vm._s(!["", null, undefined].includes((_vm$data_tb8 = _vm.data_tb1) === null || _vm$data_tb8 === void 0 ? void 0 : _vm$data_tb8.mode_paiement_demande) ? (_vm$data_tb9 = _vm.data_tb1) === null || _vm$data_tb9 === void 0 ? void 0 : _vm$data_tb9.mode_paiement_demande : "Mensuelle") + ")")])]), _vm._v(" "), _c("td", [_c("b", [_vm._v("COMPTE CHEQUE : ")]), _vm._v(" " + _vm._s((_vm$data_tb0 = _vm.data_tb5) === null || _vm$data_tb0 === void 0 || (_vm$data_tb0 = _vm$data_tb0.comptes[0]) === null || _vm$data_tb0 === void 0 ? void 0 : _vm$data_tb0.compte_cheque))])]), _vm._v(" "), _c("tr", [_c("td", [_c("b", [_vm._v("COMPTE D'ENGAGEMENT : ")]), _vm._v(" " + _vm._s((_vm$data_tb1 = _vm.data_tb5) === null || _vm$data_tb1 === void 0 || (_vm$data_tb1 = _vm$data_tb1.comptes[0]) === null || _vm$data_tb1 === void 0 ? void 0 : _vm$data_tb1.compte_d_engagement))]), _vm._v(" "), _c("td", [_c("b", [_vm._v("COMPTE D'IMPAYES : ")]), _vm._v(" " + _vm._s((_vm$data_tb10 = _vm.data_tb5) === null || _vm$data_tb10 === void 0 || (_vm$data_tb10 = _vm$data_tb10.comptes[0]) === null || _vm$data_tb10 === void 0 ? void 0 : _vm$data_tb10.compte_d_impayes))])]), _vm._v(" "), _c("tr", [_c("td", [_c("b", [_vm._v("COMPTE DE GARANTIES : ")]), _vm._v(" " + _vm._s((_vm$data_tb11 = _vm.data_tb5) === null || _vm$data_tb11 === void 0 || (_vm$data_tb11 = _vm$data_tb11.comptes[0]) === null || _vm$data_tb11 === void 0 ? void 0 : _vm$data_tb11.compte_de_garanties))])]), _vm._v(" "), _c("tr")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 mt-3"
  }, [_vm._m(1), _vm._v(" "), _c("div", {
    staticClass: "table-responsive mt-3"
  }, [_c("table", {
    staticClass: "table table-borderless"
  }, [_vm._m(2), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {
    staticClass: "_border_right text-uppercase fw-bold"
  }, [_vm._v("Nom")]), _vm._v(" "), _c("td", {
    staticClass: "_border_right"
  }, [_vm._v(_vm._s(_vm.nom))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$data_tb12 = _vm.data_tb2) === null || _vm$data_tb12 === void 0 || (_vm$data_tb12 = _vm$data_tb12.conjoint) === null || _vm$data_tb12 === void 0 ? void 0 : _vm$data_tb12.nom))])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "_border_right text-uppercase fw-bold"
  }, [_vm._v("Prénoms")]), _vm._v(" "), _c("td", {
    staticClass: "_border_right"
  }, [_vm._v(_vm._s(_vm.prenoms))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$data_tb13 = _vm.data_tb2) === null || _vm$data_tb13 === void 0 || (_vm$data_tb13 = _vm$data_tb13.conjoint) === null || _vm$data_tb13 === void 0 ? void 0 : _vm$data_tb13.prenoms))])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "_border_right text-uppercase fw-bold"
  }, [_vm._v("Situation matrimoniale")]), _vm._v(" "), _c("td", {
    staticClass: "_border_right"
  }, [_vm._v(_vm._s((_vm$data_tb14 = _vm.data_tb2) === null || _vm$data_tb14 === void 0 ? void 0 : _vm$data_tb14.matrimoniale))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$data_tb15 = _vm.data_tb2) === null || _vm$data_tb15 === void 0 || (_vm$data_tb15 = _vm$data_tb15.conjoint) === null || _vm$data_tb15 === void 0 ? void 0 : _vm$data_tb15.matrimoniale))])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "_border_right text-uppercase fw-bold"
  }, [_vm._v("Profession")]), _vm._v(" "), _c("td", {
    staticClass: "_border_right"
  }, [_vm._v(_vm._s((_vm$data_tb16 = _vm.data_tb3) === null || _vm$data_tb16 === void 0 ? void 0 : _vm$data_tb16.fonction))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$data_tb17 = _vm.data_tb3) === null || _vm$data_tb17 === void 0 || (_vm$data_tb17 = _vm$data_tb17.conjoint) === null || _vm$data_tb17 === void 0 ? void 0 : _vm$data_tb17.fonction))])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "_border_right text-uppercase fw-bold"
  }, [_vm._v("Employeur")]), _vm._v(" "), _c("td", {
    staticClass: "_border_right"
  }, [_vm._v(_vm._s((_vm$data_tb18 = _vm.data_tb3) === null || _vm$data_tb18 === void 0 ? void 0 : _vm$data_tb18.entreprise))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$data_tb19 = _vm.data_tb3) === null || _vm$data_tb19 === void 0 || (_vm$data_tb19 = _vm$data_tb19.conjoint) === null || _vm$data_tb19 === void 0 ? void 0 : _vm$data_tb19.entreprise))])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "_border_right pl-30-px fw-normal"
  }, [_vm._v(" \n              LISTE\n            ")]), _vm._v(" "), _c("td", {
    staticClass: "_border_right"
  }, [((_vm$data_tb20 = _vm.data_tb3) === null || _vm$data_tb20 === void 0 ? void 0 : _vm$data_tb20.statut_entreprise) == "Listée" ? _c("input", {
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      checked: "checked",
      disabled: ""
    }
  }) : _c("input", {
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      disabled: ""
    }
  })]), _vm._v(" "), _c("td", [((_vm$data_tb21 = _vm.data_tb3) === null || _vm$data_tb21 === void 0 || (_vm$data_tb21 = _vm$data_tb21.conjoint) === null || _vm$data_tb21 === void 0 ? void 0 : _vm$data_tb21.statut_entreprise) == "Listée" ? _c("input", {
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      checked: "checked",
      disabled: ""
    }
  }) : _c("input", {
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      disabled: ""
    }
  })])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "_border_right pl-30-px fw-normal"
  }, [_vm._v(" \n              NON LISTE\n            ")]), _vm._v(" "), _c("td", {
    staticClass: "_border_right"
  }, [((_vm$data_tb22 = _vm.data_tb3) === null || _vm$data_tb22 === void 0 ? void 0 : _vm$data_tb22.statut_entreprise) == "Non listée" ? _c("input", {
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      checked: "checked",
      disabled: ""
    }
  }) : _c("input", {
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      disabled: ""
    }
  })]), _vm._v(" "), _c("td", [((_vm$data_tb23 = _vm.data_tb3) === null || _vm$data_tb23 === void 0 || (_vm$data_tb23 = _vm$data_tb23.conjoint) === null || _vm$data_tb23 === void 0 ? void 0 : _vm$data_tb23.statut_entreprise) == "Non listée" ? _c("input", {
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      checked: "checked",
      disabled: ""
    }
  }) : _c("input", {
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      disabled: ""
    }
  })])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "_border_right text-uppercase fw-bold"
  }, [_vm._v("Adresse")]), _vm._v(" "), _c("td", {
    staticClass: "_border_right"
  }, [_vm._v(_vm._s((_vm$data_tb24 = _vm.data_tb2) === null || _vm$data_tb24 === void 0 ? void 0 : _vm$data_tb24.adresse))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$data_tb25 = _vm.data_tb2) === null || _vm$data_tb25 === void 0 || (_vm$data_tb25 = _vm$data_tb25.conjoint) === null || _vm$data_tb25 === void 0 ? void 0 : _vm$data_tb25.adresse))])]), _vm._v(" "), _vm._l(_vm.comptes, function (element, ind) {
    var _vm$data_tb26;
    return [element.checked ? _c("tr", {
      key: "compte_" + ind
    }, [_c("td", {
      staticClass: "_border_right text-uppercase fw-bold"
    }, [_vm._v("\n                " + _vm._s(element.libelle == "NSIA BANQUE-CI" ? "Compte chez NSIA Banque-CI" : element.libelle) + "\n              ")]), _vm._v(" "), _c("td", {
      staticClass: "_border_right"
    }, [_vm._v(_vm._s(element === null || element === void 0 ? void 0 : element.compte_1))]), _vm._v(" "), _c("td", [((_vm$data_tb26 = _vm.data_tb2) === null || _vm$data_tb26 === void 0 ? void 0 : _vm$data_tb26.matrimoniale) == "Marié(e)" ? _c("span", [_vm._v(_vm._s(element === null || element === void 0 ? void 0 : element.compte_2))]) : _vm._e()])]) : _vm._e()];
  }), _vm._v(" "), _vm._m(3), _vm._v(" "), _vm._l((_vm$data_tb27 = _vm.data_tb2) === null || _vm$data_tb27 === void 0 ? void 0 : _vm$data_tb27.revenu_domicilie_nsia, function (element, ind) {
    var _vm$data_tb28;
    return [_c("tr", {
      key: "revenu_" + ind
    }, [_c("td", {
      staticClass: "_border_right pl-30-px fw-normal"
    }, [element.checked ? _c("input", {
      staticClass: "form-check-input",
      attrs: {
        type: "checkbox",
        checked: "checked",
        disabled: ""
      }
    }) : _c("input", {
      staticClass: "form-check-input",
      attrs: {
        type: "checkbox",
        disabled: ""
      }
    }), _vm._v("\n                " + _vm._s(element.libelle) + "\n              ")]), _vm._v(" "), _c("td", {
      staticClass: "_border_right"
    }, [_vm._v(_vm._s(element === null || element === void 0 ? void 0 : element.montant_emprunteur))]), _vm._v(" "), _c("td", [((_vm$data_tb28 = _vm.data_tb2) === null || _vm$data_tb28 === void 0 ? void 0 : _vm$data_tb28.matrimoniale) == "Marié(e)" ? _c("span", [_vm._v(_vm._s(element === null || element === void 0 ? void 0 : element.montant_conjoint))]) : _vm._e()])])];
  }), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "_border_right text-uppercase fw-bold"
  }, [_vm._v("Quotité cessible")]), _vm._v(" "), _c("td", {
    staticClass: "_border_right"
  }, [_vm._v(_vm._s(_vm.formatAmount(_vm.quotite_cessible)))]), _vm._v(" "), _c("td", [((_vm$data_tb29 = _vm.data_tb2) === null || _vm$data_tb29 === void 0 ? void 0 : _vm$data_tb29.matrimoniale) == "Marié(e)" ? _c("span", [_vm._v(_vm._s(_vm.formatAmount((_vm$data_tb30 = _vm.data_tb3) === null || _vm$data_tb30 === void 0 || (_vm$data_tb30 = _vm$data_tb30.conjoint) === null || _vm$data_tb30 === void 0 ? void 0 : _vm$data_tb30.quotite_cessible)))]) : _vm._e()])]), _vm._v(" "), _vm._m(4), _vm._v(" "), _vm._l(_vm.engagements, function (element, ind) {
    var _vm$data_tb31;
    return [!["", null, undefined].includes(element.libelle) ? _c("tr", {
      key: "engagement_" + ind
    }, [_c("td", {
      staticClass: "_border_right pl-30-px fw-normal"
    }, [element.checked && !["", null, undefined].includes(element.libelle) ? _c("input", {
      staticClass: "form-check-input",
      attrs: {
        type: "checkbox",
        checked: "checked",
        disabled: ""
      }
    }) : _c("input", {
      staticClass: "form-check-input",
      attrs: {
        type: "checkbox",
        disabled: ""
      }
    }), _vm._v("\n                " + _vm._s(element.libelle) + "\n              ")]), _vm._v(" "), _c("td", {
      staticClass: "_border_right"
    }, [_vm._v(_vm._s(element === null || element === void 0 ? void 0 : element.montant_emprunteur))]), _vm._v(" "), _c("td", [((_vm$data_tb31 = _vm.data_tb2) === null || _vm$data_tb31 === void 0 ? void 0 : _vm$data_tb31.matrimoniale) == "Marié(e)" ? _c("span", [_vm._v(_vm._s(element === null || element === void 0 ? void 0 : element.montant_conjoint))]) : _vm._e()])]) : _vm._e()];
  }), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "_border_right _border_bottom text-uppercase fw-bold"
  }, [_vm._v("Quotité cessible disponible")]), _vm._v(" "), _c("td", {
    staticClass: "_border_right _border_bottom"
  }, [_vm._v(_vm._s(_vm.formatAmount(_vm.quotite_cessible_disponible)))]), _vm._v(" "), _c("td", {
    staticClass: "_border_bottom"
  }, [((_vm$data_tb32 = _vm.data_tb2) === null || _vm$data_tb32 === void 0 ? void 0 : _vm$data_tb32.matrimoniale) == "Marié(e)" ? _c("span", [_vm._v(_vm._s(_vm.formatAmount((_vm$data_tb33 = _vm.data_tb3) === null || _vm$data_tb33 === void 0 || (_vm$data_tb33 = _vm$data_tb33.conjoint) === null || _vm$data_tb33 === void 0 ? void 0 : _vm$data_tb33.quotite_cessible_disponible)))]) : _vm._e()])])], 2)])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "col-md-12 mt-0 mb-1 mt-4 d-flex"
  }, [_c("b", {
    staticClass: "text-uppercase",
    staticStyle: {
      "margin-right": "5px"
    }
  }, [_vm._v("Objet du prêt : ")]), _vm._v(" "), _c("span", {
    staticClass: "objet-pret",
    domProps: {
      innerHTML: _vm._s((_vm$data_tb34 = _vm.data_tb1) === null || _vm$data_tb34 === void 0 ? void 0 : _vm$data_tb34.objet_du_pret)
    }
  }), _vm._v(" "), !_vm.data_tb1 || ((_vm$data_tb35 = _vm.data_tb1) === null || _vm$data_tb35 === void 0 ? void 0 : _vm$data_tb35.objet_du_pret) == "" ? _c("span", [_c("br"), _c("br")]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 mt-0 mb-4"
  }, [_c("b", {
    staticClass: "text-uppercase"
  }, [_vm._v("Montant demande : ")]), _vm._v(" " + _vm._s(_vm.formatAmount((_vm$data_tb36 = _vm.data_tb1) === null || _vm$data_tb36 === void 0 ? void 0 : _vm$data_tb36.montant_credit)) + "\n      ")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 mt-0 mb-4"
  }, [_c("b", {
    staticClass: "text-uppercase"
  }, [_vm._v("Durée souhaitée : ")]), _vm._v(" "), ((_vm$data_tb37 = _vm.data_tb1) === null || _vm$data_tb37 === void 0 ? void 0 : _vm$data_tb37.mode_paiement_demande) == "In fine" ? _c("span", [_vm._v(_vm._s((_vm$data_tb38 = _vm.data_tb1) === null || _vm$data_tb38 === void 0 ? void 0 : _vm$data_tb38.mode_paiement_demande))]) : _c("span", [_vm._v(_vm._s(_vm.nombreEcheance) + " (" + _vm._s(!["", null, undefined].includes((_vm$data_tb39 = _vm.data_tb1) === null || _vm$data_tb39 === void 0 ? void 0 : _vm$data_tb39.mode_paiement_demande) ? (_vm$data_tb40 = _vm.data_tb1) === null || _vm$data_tb40 === void 0 ? void 0 : _vm$data_tb40.mode_paiement_demande : "Mensuelle") + ")")])])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "col-md-12 mt-0 mb-4"
  }, [_c("b", {
    staticClass: "text-uppercase"
  }, [_vm._v("Garanties proposées")]), _vm._v(" "), _c("br"), _vm._v(" "), _vm._l((_vm$data_tb41 = _vm.data_tb2) === null || _vm$data_tb41 === void 0 ? void 0 : _vm$data_tb41.garanties_proposees, function (element, ind) {
    var _element$type;
    return [element !== null && element !== void 0 && element.type ? _c("div", {
      key: ind,
      staticClass: "pl-10-px"
    }, [_c("input", {
      staticClass: "form-check-input",
      attrs: {
        type: "checkbox",
        checked: "",
        disabled: ""
      }
    }), _vm._v(" "), _c("label", [_vm._v(_vm._s(element === null || element === void 0 || (_element$type = element.type) === null || _element$type === void 0 ? void 0 : _element$type.libelle))])]) : _vm._e()];
  })], 2)]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mb-4"
  }, [_vm._m(5), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", [_c("div", {
    staticClass: "pl-10-px"
  }, [_c("b", [_vm._v("• Date d'entrée en relation")]), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "pl-3"
  }, [_c("p", [_vm._v(_vm._s((_vm$data_tb42 = _vm.data_tb2) !== null && _vm$data_tb42 !== void 0 && _vm$data_tb42.date_entree_en_relation && ((_vm$data_tb43 = _vm.data_tb2) === null || _vm$data_tb43 === void 0 ? void 0 : _vm$data_tb43.date_entree_en_relation) != "" ? _vm.formatDate((_vm$data_tb44 = _vm.data_tb2) === null || _vm$data_tb44 === void 0 ? void 0 : _vm$data_tb44.date_entree_en_relation) : ""))])]), _vm._v(" "), _c("b", [_vm._v("• Mouvement 12 derniers mois")]), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "pl-3"
  }, [_c("span", {
    domProps: {
      innerHTML: _vm._s((_vm$data_tb45 = _vm.data_tb2) === null || _vm$data_tb45 === void 0 ? void 0 : _vm$data_tb45.bref_mouvement_12_derniers_mois)
    }
  })]), _vm._v(" "), _c("b", [_vm._v("• Produits éventuellement souscrits")]), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "pl-3"
  }, [_c("span", {
    domProps: {
      innerHTML: _vm._s((_vm$data_tb46 = _vm.data_tb2) === null || _vm$data_tb46 === void 0 ? void 0 : _vm$data_tb46.bref_produit_eventuellement_souscrits)
    }
  })]), _vm._v(" "), _c("b", [_vm._v("• Engagements en cours")]), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "pl-3"
  }, [_c("span", {
    domProps: {
      innerHTML: _vm._s((_vm$data_tb47 = _vm.data_tb2) === null || _vm$data_tb47 === void 0 ? void 0 : _vm$data_tb47.bref_engagement_en_cours)
    }
  })]), _vm._v(" "), _c("b", [_vm._v("• Incidents à signaler")]), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "pl-3"
  }, [_c("span", {
    domProps: {
      innerHTML: _vm._s((_vm$data_tb48 = _vm.data_tb2) === null || _vm$data_tb48 === void 0 ? void 0 : _vm$data_tb48.bref_incident_a_signaler)
    }
  })])])])])])]), _vm._v(" "), (_vm$data_tb49 = _vm.data_tb7) !== null && _vm$data_tb49 !== void 0 && _vm$data_tb49.pieces_versees_list ? [_vm._m(6), _vm._v(" "), _c("div", {
    staticClass: "mx-3 my-3"
  }, [_vm._l((_vm$data_tb50 = _vm.data_tb7) === null || _vm$data_tb50 === void 0 ? void 0 : _vm$data_tb50.pieces_versees_list, function (item, ind) {
    return [item.value == "Oui" ? _c("div", {
      key: "checklist_" + ind,
      staticClass: "my-3"
    }, [_c("input", {
      staticClass: "form-check-input",
      attrs: {
        type: "checkbox",
        checked: "",
        disabled: ""
      }
    }), _vm._v(" "), _c("label", [_vm._v(_vm._s(item.name) + " "), _vm.isLoadingFile ? _c("span", {
      staticClass: "spinner-border spinner-border spinner-custom-input",
      staticStyle: {
        position: "initial!important"
      }
    }) : _vm._e()]), _vm._v(" "), (item === null || item === void 0 ? void 0 : item.files) > 0 && !_vm.isLoadingFile ? _c("span", {
      staticClass: "p-1 px-2 mx-2",
      staticStyle: {
        "background-color": "rgb(44, 62, 80)",
        color: "white",
        "font-size": "13px",
        "border-radius": "5px",
        "margin-left": "0!important",
        cursor: "pointer"
      },
      on: {
        click: function click($event) {
          return _vm.handleDoubleClickOrClick(ind);
        }
      }
    }, [_vm._v(_vm._s((item === null || item === void 0 ? void 0 : item.files) > 0 ? (item === null || item === void 0 ? void 0 : item.files) + " fichier(s) uploadé(s)" : ""))]) : _vm._e()]) : _vm._e()];
  })], 2), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mb-4"
  }, [_vm._m(7), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", [_c("span", {
    domProps: {
      innerHTML: _vm._s((_vm$data_tb51 = _vm.data_tb7) === null || _vm$data_tb51 === void 0 ? void 0 : _vm$data_tb51.indications_particulieres_eventuelles)
    }
  })])])])])] : _vm._e()], 2)]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("b", [_vm._v("DATE D'OCTROI : ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "justify-content-center"
  }, [_c("div", {
    staticClass: "head-memorandum-title px-3 mb-2",
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("DEMANDE DE PRET")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticClass: "_border_right"
  }), _vm._v(" "), _c("th", {
    staticClass: "_border_right th text-center text-uppercase",
    staticStyle: {
      "min-width": "220px"
    }
  }, [_c("u", [_vm._v("Emprunteur")])]), _vm._v(" "), _c("th", {
    staticClass: "th text-center text-uppercase",
    staticStyle: {
      "min-width": "220px"
    }
  }, [_c("u", [_vm._v("Conjoint(e)")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("td", {
    staticClass: "_border_right text-nowrap text-uppercase fw-bold"
  }, [_vm._v("Revenu domicilié à la NSIA Banque-CI")]), _vm._v(" "), _c("td", {
    staticClass: "_border_right"
  }), _vm._v(" "), _c("td", {})]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("td", {
    staticClass: "_border_right text-uppercase fw-bold"
  }, [_vm._v("Engagements en cours")]), _vm._v(" "), _c("td", {
    staticClass: "_border_right"
  }), _vm._v(" "), _c("td", {})]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "bg-ed-primary"
  }, [_c("tr", [_c("th", {
    staticClass: "col-12 text-center py-2 m-0"
  }, [_c("b", {
    staticClass: "text-uppercase"
  }, [_vm._v("Bref rappel des relations du client avec la NSIA BANQUE-CI")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "justify-content-center"
  }, [_c("div", {
    staticClass: "head-memorandum-title px-3 mb-2",
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("Pièces versées au dossier")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "bg-ed-primary"
  }, [_c("tr", [_c("th", {
    staticClass: "col-12 text-center py-2 m-0"
  }, [_c("b", {
    staticClass: "text-uppercase"
  }, [_vm._v("Indications particulières éventuelles")])])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/carcasse_ppo/PPO1.vue?vue&type=style&index=0&id=0862583e&lang=css&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/carcasse_ppo/PPO1.vue?vue&type=style&index=0&id=0862583e&lang=css&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.bg-grey[data-v-0862583e] {\r\n    background-color: #f4f3f3;\n}\nth[data-v-0862583e] {\r\n    background: #f4f3f3 !important;\n}\n.vertical-middle[data-v-0862583e] {\r\n  vertical-align: middle;\n}\n.font-bold[data-v-0862583e] {\r\n  font-weight: bold;\n}\n.head-memorandum-title[data-v-0862583e] {\r\n  margin-top: 15px;\r\n  padding: 16px;\r\n  color: #fff;\r\n  font-weight: bold;\r\n  background-color: #34495e;\r\n  border: 2px solid #575759;\r\n  box-shadow: 1px 3px 4px #ddd;\r\n  font-size: 16px;\r\n  text-align: center;\r\n  text-transform: uppercase;\r\n  border-radius: 10px;\r\n  margin-bottom: 15px;\n}\n.text-uppercase[data-v-0862583e] {\r\n  text-transform: uppercase;\n}\n._border_right[data-v-0862583e] {\r\n  border-right: 1px solid;\n}\n._border_bottom[data-v-0862583e] {\r\n  border-bottom: 1px solid;\n}\n.pl-10-px[data-v-0862583e] {\r\n  padding-left: 10px;\n}\n.pl-30-px[data-v-0862583e] {\r\n  padding-left: 30px;\n}\n.pl-3[data-v-0862583e] {\r\n  padding-left: 10px;\n}\n.form-check-input[data-v-0862583e]:disabled {\r\n    opacity: 1;\n}\r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/carcasse_ppo/PPO1.vue?vue&type=style&index=0&id=0862583e&lang=css&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/carcasse_ppo/PPO1.vue?vue&type=style&index=0&id=0862583e&lang=css&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PPO1_vue_vue_type_style_index_0_id_0862583e_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PPO1.vue?vue&type=style&index=0&id=0862583e&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/carcasse_ppo/PPO1.vue?vue&type=style&index=0&id=0862583e&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PPO1_vue_vue_type_style_index_0_id_0862583e_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PPO1_vue_vue_type_style_index_0_id_0862583e_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/memo/carcasse_ppo/PPO1.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/memo/carcasse_ppo/PPO1.vue ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PPO1_vue_vue_type_template_id_0862583e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PPO1.vue?vue&type=template&id=0862583e&scoped=true */ "./resources/js/components/offview/bank/nsia/memo/carcasse_ppo/PPO1.vue?vue&type=template&id=0862583e&scoped=true");
/* harmony import */ var _PPO1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PPO1.vue?vue&type=script&lang=js */ "./resources/js/components/offview/bank/nsia/memo/carcasse_ppo/PPO1.vue?vue&type=script&lang=js");
/* harmony import */ var _PPO1_vue_vue_type_style_index_0_id_0862583e_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PPO1.vue?vue&type=style&index=0&id=0862583e&lang=css&scoped=true */ "./resources/js/components/offview/bank/nsia/memo/carcasse_ppo/PPO1.vue?vue&type=style&index=0&id=0862583e&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PPO1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _PPO1_vue_vue_type_template_id_0862583e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _PPO1_vue_vue_type_template_id_0862583e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "0862583e",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/offview/bank/nsia/memo/carcasse_ppo/PPO1.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/memo/carcasse_ppo/PPO1.vue?vue&type=script&lang=js":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/memo/carcasse_ppo/PPO1.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PPO1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PPO1.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/carcasse_ppo/PPO1.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PPO1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/memo/carcasse_ppo/PPO1.vue?vue&type=style&index=0&id=0862583e&lang=css&scoped=true":
/*!**************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/memo/carcasse_ppo/PPO1.vue?vue&type=style&index=0&id=0862583e&lang=css&scoped=true ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PPO1_vue_vue_type_style_index_0_id_0862583e_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PPO1.vue?vue&type=style&index=0&id=0862583e&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/carcasse_ppo/PPO1.vue?vue&type=style&index=0&id=0862583e&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/memo/carcasse_ppo/PPO1.vue?vue&type=template&id=0862583e&scoped=true":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/memo/carcasse_ppo/PPO1.vue?vue&type=template&id=0862583e&scoped=true ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PPO1_vue_vue_type_template_id_0862583e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PPO1_vue_vue_type_template_id_0862583e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PPO1_vue_vue_type_template_id_0862583e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PPO1.vue?vue&type=template&id=0862583e&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/carcasse_ppo/PPO1.vue?vue&type=template&id=0862583e&scoped=true");


/***/ })

}]);