"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_offview_bank_afg_memo_carcasse_ppo_PCP1_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/carcasse_ppo/PCP1.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/carcasse_ppo/PCP1.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_connects_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../services/connects.service */ "./resources/js/services/connects.service.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "PCP1",
  props: {
    dossier_credit: Object
  },
  created: function created() {
    this.loadData();
  },
  mounted: function mounted() {},
  data: function data() {
    var _this$dossier_credit, _this$dossier_credit2, _this$dossier_credit3, _this$dossier_credit4, _this$dossier_credit5, _this$dossier_credit6, _this$dossier_credit7, _this$dossier_credit8, _this$dossier_credit9, _this$dossier_credit0, _this$dossier_credit1, _this$dossier_credit10, _this$dossier_credit11, _this$dossier_credit12, _this$dossier_credit13;
    return {
      convention_entreprise: (_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.convention_entreprise,
      data_tb1: (_this$dossier_credit2 = this.dossier_credit) === null || _this$dossier_credit2 === void 0 ? void 0 : _this$dossier_credit2.cred_pub_tb_12001,
      data_tb2: (_this$dossier_credit3 = this.dossier_credit) === null || _this$dossier_credit3 === void 0 ? void 0 : _this$dossier_credit3.cred_pub_tb_10002,
      data_tb3: (_this$dossier_credit4 = this.dossier_credit) === null || _this$dossier_credit4 === void 0 ? void 0 : _this$dossier_credit4.cred_pub_tb_10003,
      data_tb4: (_this$dossier_credit5 = this.dossier_credit) === null || _this$dossier_credit5 === void 0 ? void 0 : _this$dossier_credit5.cred_pub_tb_10004,
      data_tb5: (_this$dossier_credit6 = this.dossier_credit) === null || _this$dossier_credit6 === void 0 ? void 0 : _this$dossier_credit6.cred_pub_tb_10005,
      data_tb6: (_this$dossier_credit7 = this.dossier_credit) === null || _this$dossier_credit7 === void 0 ? void 0 : _this$dossier_credit7.cred_pub_tb_10006,
      data_tb7: (_this$dossier_credit8 = this.dossier_credit) === null || _this$dossier_credit8 === void 0 ? void 0 : _this$dossier_credit8.cred_pub_tb_10007,
      data_tb8: (_this$dossier_credit9 = this.dossier_credit) === null || _this$dossier_credit9 === void 0 ? void 0 : _this$dossier_credit9.cred_pub_tb_10008,
      data_tb9: (_this$dossier_credit0 = this.dossier_credit) === null || _this$dossier_credit0 === void 0 ? void 0 : _this$dossier_credit0.cred_pub_tb_10009,
      caf_recorded_file: (_this$dossier_credit1 = this.dossier_credit) === null || _this$dossier_credit1 === void 0 ? void 0 : _this$dossier_credit1.caf_recorded_file,
      nom: ((_this$dossier_credit10 = this.dossier_credit) === null || _this$dossier_credit10 === void 0 || (_this$dossier_credit10 = _this$dossier_credit10.cred_pub_tb_10002) === null || _this$dossier_credit10 === void 0 ? void 0 : _this$dossier_credit10.nom) != undefined ? (_this$dossier_credit11 = this.dossier_credit) === null || _this$dossier_credit11 === void 0 || (_this$dossier_credit11 = _this$dossier_credit11.cred_pub_tb_10002) === null || _this$dossier_credit11 === void 0 ? void 0 : _this$dossier_credit11.nom : "",
      prenoms: ((_this$dossier_credit12 = this.dossier_credit) === null || _this$dossier_credit12 === void 0 || (_this$dossier_credit12 = _this$dossier_credit12.cred_pub_tb_10002) === null || _this$dossier_credit12 === void 0 ? void 0 : _this$dossier_credit12.prenoms) != undefined ? (_this$dossier_credit13 = this.dossier_credit) === null || _this$dossier_credit13 === void 0 || (_this$dossier_credit13 = _this$dossier_credit13.cred_pub_tb_10002) === null || _this$dossier_credit13 === void 0 ? void 0 : _this$dossier_credit13.prenoms : "",
      agence: "",
      connectsHost: _services_connects_service__WEBPACK_IMPORTED_MODULE_0__["default"].loadablehost(),
      isLoadingFile: false
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
      var _this$dossier_credit14;
      if (((_this$dossier_credit14 = this.dossier_credit) === null || _this$dossier_credit14 === void 0 ? void 0 : _this$dossier_credit14.caf_recorded_file.client) != undefined) {
        var _this$dossier_credit15;
        this.agence = (_this$dossier_credit15 = this.dossier_credit) === null || _this$dossier_credit15 === void 0 || (_this$dossier_credit15 = _this$dossier_credit15[this.determineCredPubTablesFromDosCred(this.dossier_credit)[1]]) === null || _this$dossier_credit15 === void 0 ? void 0 : _this$dossier_credit15.agence;
      }
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
      var _this$data_tb,
        _this2 = this;
      if ((_this$data_tb = this.data_tb7) !== null && _this$data_tb !== void 0 && _this$data_tb.pieces_versees_list && this.data_tb7.pieces_versees_list.length > 0) {
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
    },
    getEmployeurInfos: function getEmployeurInfos() {
      if (this.convention_entreprise != undefined || this.convention_entreprise != null) {
        var _this$convention_entr, _this$convention_entr3;
        if (((_this$convention_entr = this.convention_entreprise) === null || _this$convention_entr === void 0 ? void 0 : _this$convention_entr.ent_pub_key) == "autre") {
          var _this$convention_entr2;
          return ((_this$convention_entr2 = this.convention_entreprise) === null || _this$convention_entr2 === void 0 || (_this$convention_entr2 = _this$convention_entr2.info_entreprise) === null || _this$convention_entr2 === void 0 ? void 0 : _this$convention_entr2.denomination) + " (Autre) ";
        }
        return (_this$convention_entr3 = this.convention_entreprise) === null || _this$convention_entr3 === void 0 || (_this$convention_entr3 = _this$convention_entr3.info_entreprise) === null || _this$convention_entr3 === void 0 ? void 0 : _this$convention_entr3.denomination;
      }
      return "";
    },
    getTypeContrat: function getTypeContrat() {
      if (this.data_tb3 != undefined || this.data_tb3 != null) {
        var _this$data_tb2, _this$data_tb6;
        if (((_this$data_tb2 = this.data_tb3) === null || _this$data_tb2 === void 0 ? void 0 : _this$data_tb2.type_contrat) == "CDD") {
          var _this$data_tb3, _this$data_tb4, _this$data_tb5;
          var date_exp = ((_this$data_tb3 = this.data_tb3) === null || _this$data_tb3 === void 0 ? void 0 : _this$data_tb3.data_expiration_cdd_interim) != null ? "au " + this.formatDate((_this$data_tb4 = this.data_tb3) === null || _this$data_tb4 === void 0 ? void 0 : _this$data_tb4.data_expiration_cdd_interim) : "";
          return ((_this$data_tb5 = this.data_tb3) === null || _this$data_tb5 === void 0 ? void 0 : _this$data_tb5.type_contrat) + ' ' + date_exp;
        }
        if (((_this$data_tb6 = this.data_tb3) === null || _this$data_tb6 === void 0 ? void 0 : _this$data_tb6.type_contrat) == "CDI") {
          var _this$data_tb7;
          return (_this$data_tb7 = this.data_tb3) === null || _this$data_tb7 === void 0 ? void 0 : _this$data_tb7.type_contrat;
        }
      }
      return "";
    },
    formatMonthYear: function formatMonthYear(dateStr) {
      if (dateStr == '' || dateStr == undefined) return '';

      // ex: "2070-10"
      var months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
      var _dateStr$split = dateStr.split("-"),
        _dateStr$split2 = _slicedToArray(_dateStr$split, 2),
        year = _dateStr$split2[0],
        month = _dateStr$split2[1];
      var monthName = months[parseInt(month, 10) - 1];
      return "".concat(monthName, " ").concat(year);
    },
    getAncienneteEmp: function getAncienneteEmp() {
      var _this$data_tb8, _this$data_tb9, _this$data_tb0;
      var verif = false;
      (_this$data_tb8 = this.data_tb3) === null || _this$data_tb8 === void 0 || _this$data_tb8.duree_anciennete.forEach(function (el) {
        if (parseInt(el, 10) > 0) {
          verif = true;
        }
      });
      return verif ? ((_this$data_tb9 = this.data_tb3) === null || _this$data_tb9 === void 0 ? void 0 : _this$data_tb9.duree_anciennete[0]) + " an(s) " + ((_this$data_tb0 = this.data_tb3) === null || _this$data_tb0 === void 0 ? void 0 : _this$data_tb0.duree_anciennete[1]) + " mois" : "";
    }
  },
  computed: {
    engagements: function engagements() {
      var _this$data_tb1,
        _this3 = this,
        _this$data_tb10;
      var data = [];
      if ((_this$data_tb1 = this.data_tb2) !== null && _this$data_tb1 !== void 0 && _this$data_tb1.engagements_en_cours) {
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
      if ((_this$data_tb10 = this.data_tb2) !== null && _this$data_tb10 !== void 0 && (_this$data_tb10 = _this$data_tb10.conjoint) !== null && _this$data_tb10 !== void 0 && _this$data_tb10.engagements_en_cours) {
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
      var _this$data_tb11, _this$data_tb12;
      var data = [];
      if ((_this$data_tb11 = this.data_tb5) !== null && _this$data_tb11 !== void 0 && _this$data_tb11.comptes) {
        this.data_tb5.comptes.forEach(function (element) {
          data.push({
            checked: true,
            libelle: element.banque,
            compte_1: element.compte_cheque,
            compte_2: ""
          });
        });
      }
      if ((_this$data_tb12 = this.data_tb5) !== null && _this$data_tb12 !== void 0 && _this$data_tb12.comptes_conjoint) {
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/carcasse_ppo/PCP1.vue?vue&type=template&id=12af7dd5&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/carcasse_ppo/PCP1.vue?vue&type=template&id=12af7dd5&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$data_tb, _vm$data_tb2, _vm$data_tb3, _vm$data_tb4, _vm$data_tb5, _vm$data_tb6, _vm$data_tb7, _vm$data_tb8, _vm$data_tb9, _vm$data_tb0, _vm$data_tb1, _vm$data_tb10, _vm$data_tb11, _vm$data_tb12, _vm$data_tb13, _vm$data_tb14, _vm$data_tb15, _vm$data_tb16;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row justify-content-center"
  }, [_c("div", {
    staticClass: "col-12 mt-3"
  }, [_vm._m(0), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mt-3"
  }, [_c("thead", [_c("tr", [_c("td", {
    staticClass: "bg-beige",
    staticStyle: {
      width: "25%"
    }
  }, [_vm._v("Nom ")]), _vm._v(" "), _c("td", {
    staticStyle: {
      width: "25%"
    }
  }, [_vm._v(" " + _vm._s(_vm.nom) + " ")]), _vm._v(" "), _c("td", {
    staticClass: "bg-beige",
    staticStyle: {
      width: "25%"
    }
  }, [_vm._v("Nom Employeur ")]), _vm._v(" "), _c("td", {
    staticStyle: {
      width: "25%"
    }
  }, [_vm._v(" " + _vm._s(_vm.getEmployeurInfos()) + " ")])])]), _vm._v(" "), _c("tbody", {
    staticStyle: {
      "font-size": "16px"
    }
  }, [_c("tr", [_c("td", {
    staticClass: "bg-beige"
  }, [_vm._v("Prénom ")]), _vm._v(" "), _c("td", [_vm._v(" " + _vm._s(_vm.prenoms) + " ")]), _vm._v(" "), _c("td", {
    staticClass: "bg-beige"
  }, [_vm._v("Profession ")]), _vm._v(" "), _c("td", [_vm._v(" " + _vm._s((_vm$data_tb = _vm.data_tb3) === null || _vm$data_tb === void 0 ? void 0 : _vm$data_tb.fonction) + " ")])]), _vm._v(" "), _c("tr", [_vm._m(1), _vm._v(" "), _c("td", {
    staticClass: "item-vcenter"
  }, [_vm._v(" " + _vm._s(_vm.formatDate(_vm.data_tb2.date_naissance)) + " "), _c("br"), _vm._v(" " + _vm._s(_vm.data_tb2.ville_naissance) + " ")]), _vm._v(" "), _c("td", {
    staticClass: "item-vcenter bg-beige"
  }, [_vm._v("Type de contrat ")]), _vm._v(" "), _c("td", {
    staticClass: "item-vcenter"
  }, [_vm._v(" " + _vm._s(_vm.getTypeContrat()) + " ")])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "item-vcenter bg-beige"
  }, [_vm._v("Nationalité ")]), _vm._v(" "), _c("td", {
    staticClass: "item-vcenter"
  }, [_vm._v(" " + _vm._s((_vm$data_tb2 = _vm.data_tb2) === null || _vm$data_tb2 === void 0 ? void 0 : _vm$data_tb2.nationnalite) + " ")]), _vm._v(" "), _c("td", {
    staticClass: "item-vcenter bg-beige"
  }, [_vm._v("Ancienneté Employeur")]), _vm._v(" "), _c("td", [_vm._v(" " + _vm._s(_vm.getAncienneteEmp()) + " ")])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "item-vcenter bg-beige"
  }, [_vm._v("Situation familiale ")]), _vm._v(" "), _c("td", {
    staticClass: "item-vcenter"
  }, [_vm._v(" " + _vm._s((_vm$data_tb3 = _vm.data_tb2) === null || _vm$data_tb3 === void 0 ? void 0 : _vm$data_tb3.matrimoniale) + " ")]), _vm._v(" "), _vm._m(2), _vm._v(" "), _c("td", {
    staticClass: "item-vcenter"
  }, [_vm._v(" " + _vm._s(_vm.formatMonthYear((_vm$data_tb4 = _vm.data_tb3) === null || _vm$data_tb4 === void 0 ? void 0 : _vm$data_tb4.date_depart_retraite)) + " ")])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "bg-beige"
  }, [_vm._v("Numéro Compte ")]), _vm._v(" "), _c("td", [_vm._v(" " + _vm._s((_vm$data_tb5 = _vm.data_tb2) === null || _vm$data_tb5 === void 0 ? void 0 : _vm$data_tb5.compte_numero) + " ")]), _vm._v(" "), _c("td", {
    staticClass: "bg-beige"
  }, [_vm._v("Adresse Actuelle")]), _vm._v(" "), _c("td", [_vm._v(" " + _vm._s((_vm$data_tb6 = _vm.data_tb2) === null || _vm$data_tb6 === void 0 ? void 0 : _vm$data_tb6.adresse) + " ")])]), _vm._v(" "), _c("tr", [_vm._m(3), _vm._v(" "), _c("td", {
    staticClass: "item-vcenter"
  }, [_vm._v(" " + _vm._s(_vm.formatDate((_vm$data_tb7 = _vm.data_tb2) === null || _vm$data_tb7 === void 0 ? void 0 : _vm$data_tb7.date_entree_en_relation)) + " ")]), _vm._v(" "), _c("td", {
    staticClass: "item-vcenter bg-beige"
  }, [_vm._v("N° Téléphone ")]), _vm._v(" "), _c("td", {
    staticClass: "item-vcenter"
  }, [_vm._v(" " + _vm._s((_vm$data_tb8 = _vm.data_tb2) === null || _vm$data_tb8 === void 0 ? void 0 : _vm$data_tb8.telephone) + " ")])])])]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mt-2"
  }, [_c("thead", [_c("tr", {
    staticClass: "bgc-tr"
  }, [_c("td", {
    staticStyle: {
      width: "50%"
    }
  }, [_vm._v("Type de facilité demandé ")]), _vm._v(" "), _c("td", {
    staticStyle: {
      width: "50%"
    }
  }, [_vm._v(" " + _vm._s((_vm$data_tb9 = _vm.data_tb9) === null || _vm$data_tb9 === void 0 ? void 0 : _vm$data_tb9.type_credit) + " ")])])]), _vm._v(" "), _c("tbody", {
    staticStyle: {
      "font-size": "16px"
    }
  }, [_c("tr", {
    staticClass: "bgc-tr"
  }, [_c("td", {
    staticStyle: {
      width: "50%"
    }
  }, [_vm._v("Montant crédit sollicité ")]), _vm._v(" "), _c("td", [_vm._v(" " + _vm._s((_vm$data_tb0 = _vm.data_tb1) === null || _vm$data_tb0 === void 0 ? void 0 : _vm$data_tb0.montant_sollicite) + " ")])]), _vm._v(" "), _c("tr", {
    staticClass: "bgc-tr"
  }, [_c("td", {
    staticStyle: {
      width: "50%"
    }
  }, [_vm._v("Durée ")]), _vm._v(" "), _c("td", [_vm._v(" " + _vm._s((_vm$data_tb1 = _vm.data_tb1) === null || _vm$data_tb1 === void 0 ? void 0 : _vm$data_tb1.duree_credit) + " (Mensuelle)")])]), _vm._v(" "), _c("tr", {
    staticClass: "bgc-tr"
  }, [_c("td", [_vm._v("Taux ")]), _vm._v(" "), _c("td", [_vm._v(" " + _vm._s((_vm$data_tb10 = _vm.data_tb9) === null || _vm$data_tb10 === void 0 ? void 0 : _vm$data_tb10.taux) + " %")])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "item-vcenter bg-beige"
  }, [_vm._v("Echéancier ")]), _vm._v(" "), _c("td", [_vm._v(" " + _vm._s((_vm$data_tb11 = _vm.data_tb9) === null || _vm$data_tb11 === void 0 ? void 0 : _vm$data_tb11.mode_tranche) + " ")])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "bg-beige"
  }, [_vm._v("Montant de l’échéance ")]), _vm._v(" "), _c("td", [_vm._v(" " + _vm._s((_vm$data_tb12 = _vm.data_tb9) === null || _vm$data_tb12 === void 0 ? void 0 : _vm$data_tb12.r_mensualite) + " ")])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "item-vcenter bg-beige"
  }, [_vm._v("Frais de dossier ")]), _vm._v(" "), _c("td", [_vm._v(" " + _vm._s(_vm._f("formatNumber")((_vm$data_tb13 = _vm.data_tb9) === null || _vm$data_tb13 === void 0 ? void 0 : _vm$data_tb13.total_frais_credit)) + " ")])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "item-vcenter bg-beige"
  }, [_vm._v("Montant de l’assurance ")]), _vm._v(" "), _c("td", [_vm._v(" " + _vm._s((_vm$data_tb14 = _vm.data_tb9) === null || _vm$data_tb14 === void 0 ? void 0 : _vm$data_tb14.montant_assurance) + " ")])])])]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mt-1"
  }, [_c("thead"), _vm._v(" "), _c("tbody", {
    staticStyle: {
      "font-size": "16px"
    }
  }, [_c("tr", {
    staticClass: "bg-beige"
  }, [_c("td", {
    staticStyle: {
      width: "50%"
    }
  }, [_vm._v("Date ")]), _vm._v(" "), _c("td", [_vm._v(" " + _vm._s(_vm.formatDate((_vm$data_tb15 = _vm.data_tb5) === null || _vm$data_tb15 === void 0 ? void 0 : _vm$data_tb15.date_saisie_solde)) + " ")])]), _vm._v(" "), _vm._l((_vm$data_tb16 = _vm.data_tb5) === null || _vm$data_tb16 === void 0 ? void 0 : _vm$data_tb16.comptes, function (item, index) {
    return _c("tr", {
      key: index
    }, [_c("td", {
      staticStyle: {
        width: "50%"
      }
    }, [_vm._v(" " + _vm._s(item === null || item === void 0 ? void 0 : item.libelle) + " ")]), _vm._v(" "), _c("td", [_vm._v(" " + _vm._s(item === null || item === void 0 ? void 0 : item.montant) + " ")])]);
  })], 2)])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "justify-content-center"
  }, [_c("div", {
    staticClass: "head-memorandum-title px-3 mb-4",
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("IDENTIFICATION DU CLIENT")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "item-vcenter bg-beige"
  }, [_vm._v("Date et lieu"), _c("br"), _vm._v(" de naissance ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "item-vcenter bg-beige"
  }, [_vm._v("Date de depart"), _c("br"), _vm._v(" retraite ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "item-vcenter bg-beige"
  }, [_vm._v("Date d'entrée "), _c("br"), _vm._v(" en relation ")]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/carcasse_ppo/PCP1.vue?vue&type=style&index=0&id=12af7dd5&lang=css&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/carcasse_ppo/PCP1.vue?vue&type=style&index=0&id=12af7dd5&lang=css&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.bg-grey[data-v-12af7dd5] {\r\n    background-color: #f4f3f3;\n}\nth[data-v-12af7dd5] {\r\n    background: #f4f3f3 !important;\n}\n.vertical-middle[data-v-12af7dd5] {\r\n  vertical-align: middle;\n}\n.font-bold[data-v-12af7dd5] {\r\n  font-weight: bold;\n}\n.head-memorandum-title[data-v-12af7dd5] {\r\n  margin-top: 15px;\r\n  padding: 16px;\r\n  color: #fff;\r\n  font-weight: bold;\r\n  background-color: #34495e;\r\n  border: 2px solid #575759;\r\n  box-shadow: 1px 3px 4px #ddd;\r\n  font-size: 16px;\r\n  text-align: center;\r\n  text-transform: uppercase;\r\n  border-radius: 10px;\r\n  margin-bottom: 15px;\n}\n.text-uppercase[data-v-12af7dd5] {\r\n  text-transform: uppercase;\n}\n._border_right[data-v-12af7dd5] {\r\n  border-right: 1px solid;\n}\n._border_bottom[data-v-12af7dd5] {\r\n  border-bottom: 1px solid;\n}\n.pl-10-px[data-v-12af7dd5] {\r\n  padding-left: 10px;\n}\n.pl-30-px[data-v-12af7dd5] {\r\n  padding-left: 30px;\n}\n.pl-3[data-v-12af7dd5] {\r\n  padding-left: 10px;\n}\n.form-check-input[data-v-12af7dd5]:disabled {\r\n    opacity: 1;\n}\n.item-vcenter[data-v-12af7dd5] {\r\n  /* text-align: center; */\r\n  vertical-align: middle;\n}\n.bg-beige[data-v-12af7dd5] {\r\n  background: #f4f3f3 !important;\n}\n.label-bold[data-v-12af7dd5] {\r\n  font-weight: 600;\n}\n.bgc-tr[data-v-12af7dd5] {\r\n  background: #34495e;\r\n  color: white;\r\n  font-weight: 600;\n}\r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/carcasse_ppo/PCP1.vue?vue&type=style&index=0&id=12af7dd5&lang=css&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/carcasse_ppo/PCP1.vue?vue&type=style&index=0&id=12af7dd5&lang=css&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PCP1_vue_vue_type_style_index_0_id_12af7dd5_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PCP1.vue?vue&type=style&index=0&id=12af7dd5&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/carcasse_ppo/PCP1.vue?vue&type=style&index=0&id=12af7dd5&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PCP1_vue_vue_type_style_index_0_id_12af7dd5_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PCP1_vue_vue_type_style_index_0_id_12af7dd5_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/memo/carcasse_ppo/PCP1.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/memo/carcasse_ppo/PCP1.vue ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PCP1_vue_vue_type_template_id_12af7dd5_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PCP1.vue?vue&type=template&id=12af7dd5&scoped=true */ "./resources/js/components/offview/bank/afg/memo/carcasse_ppo/PCP1.vue?vue&type=template&id=12af7dd5&scoped=true");
/* harmony import */ var _PCP1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PCP1.vue?vue&type=script&lang=js */ "./resources/js/components/offview/bank/afg/memo/carcasse_ppo/PCP1.vue?vue&type=script&lang=js");
/* harmony import */ var _PCP1_vue_vue_type_style_index_0_id_12af7dd5_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PCP1.vue?vue&type=style&index=0&id=12af7dd5&lang=css&scoped=true */ "./resources/js/components/offview/bank/afg/memo/carcasse_ppo/PCP1.vue?vue&type=style&index=0&id=12af7dd5&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PCP1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _PCP1_vue_vue_type_template_id_12af7dd5_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _PCP1_vue_vue_type_template_id_12af7dd5_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "12af7dd5",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/offview/bank/afg/memo/carcasse_ppo/PCP1.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/memo/carcasse_ppo/PCP1.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/memo/carcasse_ppo/PCP1.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PCP1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PCP1.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/carcasse_ppo/PCP1.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PCP1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/memo/carcasse_ppo/PCP1.vue?vue&type=style&index=0&id=12af7dd5&lang=css&scoped=true":
/*!*************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/memo/carcasse_ppo/PCP1.vue?vue&type=style&index=0&id=12af7dd5&lang=css&scoped=true ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PCP1_vue_vue_type_style_index_0_id_12af7dd5_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PCP1.vue?vue&type=style&index=0&id=12af7dd5&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/carcasse_ppo/PCP1.vue?vue&type=style&index=0&id=12af7dd5&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/offview/bank/afg/memo/carcasse_ppo/PCP1.vue?vue&type=template&id=12af7dd5&scoped=true":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/memo/carcasse_ppo/PCP1.vue?vue&type=template&id=12af7dd5&scoped=true ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PCP1_vue_vue_type_template_id_12af7dd5_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PCP1_vue_vue_type_template_id_12af7dd5_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PCP1_vue_vue_type_template_id_12af7dd5_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PCP1.vue?vue&type=template&id=12af7dd5&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/carcasse_ppo/PCP1.vue?vue&type=template&id=12af7dd5&scoped=true");


/***/ })

}]);