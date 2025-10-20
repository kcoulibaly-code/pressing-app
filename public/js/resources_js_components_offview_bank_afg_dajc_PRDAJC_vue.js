"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_offview_bank_afg_dajc_PRDAJC_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/dajc/PRDAJC.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/dajc/PRDAJC.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _shared_PieceRequiseDajcOff_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/PieceRequiseDajcOff.vue */ "./resources/js/components/shared/PieceRequiseDajcOff.vue");
/* harmony import */ var _memo_carcasse_ppo_PCP1_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../memo/carcasse_ppo/PCP1.vue */ "./resources/js/components/offview/bank/afg/memo/carcasse_ppo/PCP1.vue");
/* harmony import */ var _memo_carcasse_ppo_PCP2_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../memo/carcasse_ppo/PCP2.vue */ "./resources/js/components/offview/bank/afg/memo/carcasse_ppo/PCP2.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    dossier_credit: Object
  },
  components: {
    PieceRequiseDajcOff: _shared_PieceRequiseDajcOff_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    PCP1: _memo_carcasse_ppo_PCP1_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    PCP2: _memo_carcasse_ppo_PCP2_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  }
});

/***/ }),

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/carcasse_ppo/PCP2.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/carcasse_ppo/PCP2.vue?vue&type=script&lang=js ***!
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
  name: "PCP2",
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
      data_tb1: (_this$dossier_credit2 = this.dossier_credit) === null || _this$dossier_credit2 === void 0 ? void 0 : _this$dossier_credit2.cred_pub_tb_10001,
      data_tb2: (_this$dossier_credit3 = this.dossier_credit) === null || _this$dossier_credit3 === void 0 ? void 0 : _this$dossier_credit3.cred_pub_tb_10002,
      data_tb3: (_this$dossier_credit4 = this.dossier_credit) === null || _this$dossier_credit4 === void 0 ? void 0 : _this$dossier_credit4.cred_pub_tb_10003,
      data_tb4: (_this$dossier_credit5 = this.dossier_credit) === null || _this$dossier_credit5 === void 0 ? void 0 : _this$dossier_credit5.cred_pub_tb_10004,
      data_tb5: (_this$dossier_credit6 = this.dossier_credit) === null || _this$dossier_credit6 === void 0 ? void 0 : _this$dossier_credit6.cred_pub_tb_10005,
      data_tb6: (_this$dossier_credit7 = this.dossier_credit) === null || _this$dossier_credit7 === void 0 ? void 0 : _this$dossier_credit7.cred_pub_tb_10006,
      data_tb7: (_this$dossier_credit8 = this.dossier_credit) === null || _this$dossier_credit8 === void 0 ? void 0 : _this$dossier_credit8.cred_pub_tb_10007,
      data_tb8: (_this$dossier_credit9 = this.dossier_credit) === null || _this$dossier_credit9 === void 0 ? void 0 : _this$dossier_credit9.cred_pub_tb_10008,
      data_tb9: ((_this$dossier_credit0 = this.dossier_credit) === null || _this$dossier_credit0 === void 0 ? void 0 : _this$dossier_credit0.cred_pub_tb_10009) || [],
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
    getRevenuSalaire: function getRevenuSalaire() {
      var _this$data_tb, _this$data_tb2, _this$data_tb3;
      if (((_this$data_tb = this.data_tb9) === null || _this$data_tb === void 0 ? void 0 : _this$data_tb.revenu_domicilie) == undefined || ((_this$data_tb2 = this.data_tb9) === null || _this$data_tb2 === void 0 ? void 0 : _this$data_tb2.revenu_domicilie) == '') return '';
      var node_salaire = (_this$data_tb3 = this.data_tb9) === null || _this$data_tb3 === void 0 ? void 0 : _this$data_tb3.revenu_domicilie[0];
      if (node_salaire.libelle == "Salaire net" && node_salaire.checked == true) {
        return node_salaire.montant_emprunteur;
      }
      return '';
    },
    getRevenuAutre: function getRevenuAutre() {
      var _this$data_tb4, _this$data_tb5, _this$data_tb6;
      if (((_this$data_tb4 = this.data_tb9) === null || _this$data_tb4 === void 0 ? void 0 : _this$data_tb4.revenu_domicilie) == undefined || ((_this$data_tb5 = this.data_tb9) === null || _this$data_tb5 === void 0 ? void 0 : _this$data_tb5.revenu_domicilie) == '') return '';
      var autre_revenu = 0;
      (_this$data_tb6 = this.data_tb9) === null || _this$data_tb6 === void 0 || _this$data_tb6.revenu_domicilie.forEach(function (el) {
        if (el.libelle != "Salaire net") {
          autre_revenu += el.mensualite;
        }
      });
      return this.formatAmount(autre_revenu);
    },
    getRemboursementAutreCredit: function getRemboursementAutreCredit() {
      var _this$data_tb7,
        _this$data_tb8,
        _this$data_tb9,
        _this2 = this;
      if (((_this$data_tb7 = this.data_tb9) === null || _this$data_tb7 === void 0 ? void 0 : _this$data_tb7.engagements_en_cours) == undefined || ((_this$data_tb8 = this.data_tb9) === null || _this$data_tb8 === void 0 ? void 0 : _this$data_tb8.engagements_en_cours) == '') {
        return '';
      }
      var remb_autre = 0;
      (_this$data_tb9 = this.data_tb9) === null || _this$data_tb9 === void 0 || _this$data_tb9.engagements_en_cours.forEach(function (el) {
        var encours = _this2.intConverter(el === null || el === void 0 ? void 0 : el.encours);
        remb_autre += encours;
      });
      return this.formatAmount(remb_autre);
    },
    getTauxEndettement: function getTauxEndettement() {
      var _this$getRevenuSalair, _this$getRevenuAutre, _this$getRemboursemen, _this$data_tb0;
      var salaire = parseInt((_this$getRevenuSalair = this.getRevenuSalaire()) === null || _this$getRevenuSalair === void 0 ? void 0 : _this$getRevenuSalair.replace(/\s/g, ''), 10);
      var autre_revenus = parseInt((_this$getRevenuAutre = this.getRevenuAutre()) === null || _this$getRevenuAutre === void 0 ? void 0 : _this$getRevenuAutre.replace(/\s/g, ''), 10);
      var rembAutreCredit = parseInt((_this$getRemboursemen = this.getRemboursementAutreCredit()) === null || _this$getRemboursemen === void 0 ? void 0 : _this$getRemboursemen.replace(/\s/g, ''), 10);
      var nouveau_credit = parseInt((_this$data_tb0 = this.data_tb9) === null || _this$data_tb0 === void 0 || (_this$data_tb0 = _this$data_tb0.montant_credit) === null || _this$data_tb0 === void 0 ? void 0 : _this$data_tb0.replace(/\s/g, ''), 10);
      if (!Number.isInteger(salaire)) {
        return {
          "taux_endettement": "",
          "reste_a_vivre": ""
        };
      }
      var taux_endettement = (rembAutreCredit + nouveau_credit) / (salaire + autre_revenus);
      var reste_a_vivre = salaire + autre_revenus - (rembAutreCredit + nouveau_credit);
      return {
        "taux_endettement": taux_endettement.toFixed(2) + "%",
        "reste_a_vivre": this.formatAmount(reste_a_vivre)
      };
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
        var _this$data_tb1, _this$data_tb13;
        if (((_this$data_tb1 = this.data_tb3) === null || _this$data_tb1 === void 0 ? void 0 : _this$data_tb1.type_contrat) == "CDD") {
          var _this$data_tb10, _this$data_tb11, _this$data_tb12;
          var date_exp = ((_this$data_tb10 = this.data_tb3) === null || _this$data_tb10 === void 0 ? void 0 : _this$data_tb10.data_expiration_cdd_interim) != null ? "au " + this.formatDate((_this$data_tb11 = this.data_tb3) === null || _this$data_tb11 === void 0 ? void 0 : _this$data_tb11.data_expiration_cdd_interim) : "";
          return ((_this$data_tb12 = this.data_tb3) === null || _this$data_tb12 === void 0 ? void 0 : _this$data_tb12.type_contrat) + ' ' + date_exp;
        }
        if (((_this$data_tb13 = this.data_tb3) === null || _this$data_tb13 === void 0 ? void 0 : _this$data_tb13.type_contrat) == "CDI") {
          var _this$data_tb14;
          return (_this$data_tb14 = this.data_tb3) === null || _this$data_tb14 === void 0 ? void 0 : _this$data_tb14.type_contrat;
        }
      }
      return "";
    },
    formatMonthYear: function formatMonthYear(dateStr) {
      // ex: "2070-10"
      var months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
      var _dateStr$split = dateStr.split("-"),
        _dateStr$split2 = _slicedToArray(_dateStr$split, 2),
        year = _dateStr$split2[0],
        month = _dateStr$split2[1];
      var monthName = months[parseInt(month, 10) - 1];
      return "".concat(monthName, " ").concat(year);
    },
    getTotalAutorisation: function getTotalAutorisation() {
      var _this$data_tb15,
        _this$data_tb16,
        _this3 = this;
      if (((_this$data_tb15 = this.data_tb9) === null || _this$data_tb15 === void 0 ? void 0 : _this$data_tb15.engagements_en_cours) == undefined) return '';
      var som = 0;
      (_this$data_tb16 = this.data_tb9) === null || _this$data_tb16 === void 0 || _this$data_tb16.engagements_en_cours.forEach(function (el) {
        return som += _this3.intConverter(el === null || el === void 0 ? void 0 : el.montant);
      });
      return this.formatAmount(som);
    },
    intConverter: function intConverter(val) {
      if (typeof val == 'string') {
        return parseInt(val === null || val === void 0 ? void 0 : val.replace(/\s/g, ''), 10);
      }
      return val;
    }
  },
  computed: {
    engagements: function engagements() {
      var _this$data_tb17,
        _this4 = this,
        _this$data_tb18;
      var data = [];
      if ((_this$data_tb17 = this.data_tb2) !== null && _this$data_tb17 !== void 0 && _this$data_tb17.engagements_en_cours) {
        this.data_tb2.engagements_en_cours.forEach(function (element) {
          var find = false;
          data.forEach(function (el) {
            if (el.libelle == element.libelle) {
              find = true;
              el.montant_emprunteur = _this4.formatAmount(_this4.convertInt(el.montant_emprunteur) + _this4.convertInt(element.encours));
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
      if ((_this$data_tb18 = this.data_tb2) !== null && _this$data_tb18 !== void 0 && (_this$data_tb18 = _this$data_tb18.conjoint) !== null && _this$data_tb18 !== void 0 && _this$data_tb18.engagements_en_cours) {
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
      var _this$data_tb19, _this$data_tb20;
      var data = [];
      if ((_this$data_tb19 = this.data_tb5) !== null && _this$data_tb19 !== void 0 && _this$data_tb19.comptes) {
        this.data_tb5.comptes.forEach(function (element) {
          data.push({
            checked: true,
            libelle: element.banque,
            compte_1: element.compte_cheque,
            compte_2: ""
          });
        });
      }
      if ((_this$data_tb20 = this.data_tb5) !== null && _this$data_tb20 !== void 0 && _this$data_tb20.comptes_conjoint) {
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/PieceRequiseDajcOff.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/PieceRequiseDajcOff.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_connects_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/connects.service */ "./resources/js/services/connects.service.js");
/* harmony import */ var _services_proxy_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/proxy.service */ "./resources/js/services/proxy.service.js");
/* harmony import */ var _services_nsia_dajc_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/nsia/dajc-constants */ "./resources/js/services/nsia/dajc-constants.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "PieceRequiseDajcOff",
  display: "PieceRequiseDajcOff",
  props: {
    data_cred_key: Object
  },
  data: function data() {
    var _this$data_cred_key;
    return {
      activeMenu: "client",
      client_type: _services_nsia_dajc_constants__WEBPACK_IMPORTED_MODULE_2__["default"].client_type,
      isLoadingFile: false,
      carcasse_type: "",
      pieces_versees_clients: [],
      pieces_versees_suretes: [],
      pieces_versees_credits: [],
      connectsHost: _services_connects_service__WEBPACK_IMPORTED_MODULE_0__["default"].loadablehost(),
      pieces_versees_list: (_this$data_cred_key = this.data_cred_key) === null || _this$data_cred_key === void 0 || (_this$data_cred_key = _this$data_cred_key.cred_pub_tb_200601) === null || _this$data_cred_key === void 0 ? void 0 : _this$data_cred_key.pieces_versees_list,
      credit_family: _services_nsia_dajc_constants__WEBPACK_IMPORTED_MODULE_2__["default"].credit_family,
      surete_family: _services_nsia_dajc_constants__WEBPACK_IMPORTED_MODULE_2__["default"].surete_family
    };
  },
  mounted: function mounted() {
    var _this$data_cred_key2;
    this.carcasse_type = (_this$data_cred_key2 = this.data_cred_key) === null || _this$data_cred_key2 === void 0 || (_this$data_cred_key2 = _this$data_cred_key2.applied_templ_name) === null || _this$data_cred_key2 === void 0 || (_this$data_cred_key2 = _this$data_cred_key2.toString()) === null || _this$data_cred_key2 === void 0 ? void 0 : _this$data_cred_key2.toLowerCase();
    // let applied_templ_name = this.meta_data['dossier_credit']?.applied_templ_name;
    this.initData();
  },
  computed: {
    filteredList: function filteredList() {
      if (this.activeMenu.toLowerCase() == "client") {
        return this.pieces_versees_clients;
      }
      if (this.activeMenu.toLowerCase() == "surete") {
        return this.pieces_versees_suretes;
      }
      if (this.activeMenu.toLowerCase() == "credit") {
        return this.pieces_versees_credits;
      }
    }
  },
  methods: {
    getElementBySlug: function getElementBySlug(slug, type_element) {
      if (type_element == "type_de_clientele") {
        var _this$client_type;
        return (_this$client_type = this.client_type) === null || _this$client_type === void 0 || (_this$client_type = _this$client_type.find(function (el) {
          return el.slug == slug;
        })) === null || _this$client_type === void 0 ? void 0 : _this$client_type.name;
      }
      if (type_element == "ligne_credits") {
        var _this$credit_family;
        return (_this$credit_family = this.credit_family) === null || _this$credit_family === void 0 || (_this$credit_family = _this$credit_family.find(function (el) {
          return el.slug == slug;
        })) === null || _this$credit_family === void 0 ? void 0 : _this$credit_family.parent;
      }
      if (type_element == "surete_reeles") {
        var _this$surete_family$f;
        return (_this$surete_family$f = this.surete_family.filter(function (el) {
          return el.to == "réelles";
        })) === null || _this$surete_family$f === void 0 || (_this$surete_family$f = _this$surete_family$f.find(function (el) {
          return el.slug == slug;
        })) === null || _this$surete_family$f === void 0 ? void 0 : _this$surete_family$f.parent;
      }
      if (type_element == "surete_personnelles") {
        var _this$surete_family$f2;
        return (_this$surete_family$f2 = this.surete_family.filter(function (el) {
          return el.to == "personnelles";
        })) === null || _this$surete_family$f2 === void 0 || (_this$surete_family$f2 = _this$surete_family$f2.find(function (el) {
          return el.slug == slug;
        })) === null || _this$surete_family$f2 === void 0 ? void 0 : _this$surete_family$f2.parent;

        // return this.surete_family[0].children?.find((el)=>el.slug == slug)?.parent
      }
    },
    initData: function initData() {
      var _this$data_cred_key3;
      // this.pieces_versees_list = this.data_cred_key?.cred_pub_tb_200601?.pieces_versees_list
      this.pieces_versees_clients = [];
      this.pieces_versees_suretes = [];
      this.pieces_versees_credits = [];
      var client_surete_table = (_this$data_cred_key3 = this.data_cred_key) === null || _this$data_cred_key3 === void 0 || (_this$data_cred_key3 = _this$data_cred_key3.cred_pub_tb_200601) === null || _this$data_cred_key3 === void 0 ? void 0 : _this$data_cred_key3.pieces_versees_list;
      if (!['', null, undefined].includes(client_surete_table)) {
        var _this$data_cred_key4, _this$data_cred_key5;
        if (((_this$data_cred_key4 = this.data_cred_key) === null || _this$data_cred_key4 === void 0 ? void 0 : _this$data_cred_key4.categorie_client) == "Retail") {
          // client_surete_table = client_surete_table?.filter(
          //     (liste) => liste.type_carcasse != undefined && liste.type_carcasse.includes(this.carcasse_type)
          // );

          this.pieces_versees_clients = client_surete_table.filter(function (liste) {
            return liste.is_client == true;
          });
          this.pieces_versees_suretes = client_surete_table.filter(function (liste) {
            return liste.is_surete == true;
          });
          this.pieces_versees_credits = client_surete_table.filter(function (liste) {
            return liste.is_credit == true;
          });
        }
        if (((_this$data_cred_key5 = this.data_cred_key) === null || _this$data_cred_key5 === void 0 ? void 0 : _this$data_cred_key5.categorie_client) == "Corporate") {
          // console.log("Corporate", "client_surete_table",client_surete_table,"carcasse_type",this.carcasse_type);
          // client_surete_table = client_surete_table.filter(
          //     (liste) => liste.type_entreprise?.includes("Corporate")
          // );

          this.pieces_versees_clients = client_surete_table.filter(function (liste) {
            return liste.is_client == true;
          });
          this.pieces_versees_suretes = client_surete_table.filter(function (liste) {
            return liste.is_surete == true;
          });
          this.pieces_versees_credits = client_surete_table.filter(function (liste) {
            return liste.is_credit == true;
          });
        }
      }

      // console.log("this.pieces_versees_list",this.pieces_versees_list, 
      //     "pieces_versees_clients",this.pieces_versees_clients,
      //     "pieces_versees_suretes",this.pieces_versees_suretes,"pieces_versees_credits",this.pieces_versees_credits);
    },
    determineCurrentKey: function determineCurrentKey() {
      if (this.activeMenu == 'client') {
        return "pieces_versees_clients";
      } else if (this.activeMenu == 'surete') {
        return "pieces_versees_suretes";
      } else {
        return "pieces_versees_credits";
      }
    },
    toggleMenu: function toggleMenu(activeMenu) {
      this.activeMenu = activeMenu;
    },
    formatDate: function formatDate(date) {
      var options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
      };
      return new Date(date).toLocaleDateString('fr', options);
    },
    handleDoubleClickOrClick: function handleDoubleClickOrClick(event, index) {
      var _this = this;
      var current_key = this.determineCurrentKey();
      EventBus.$emit("open-extra-file-explorer");
      setTimeout(function () {
        var _this$current_key$ind, _this$current_key$ind2, _this$current_key$ind3;
        EventBus.$emit("data-extra-file-explorer", {
          name: ((_this$current_key$ind = _this[current_key][index]) === null || _this$current_key$ind === void 0 ? void 0 : _this$current_key$ind.name) + " {(*)}" + current_key + '_' + ((_this$current_key$ind2 = _this[current_key][index]) === null || _this$current_key$ind2 === void 0 ? void 0 : _this$current_key$ind2.id),
          template: (_this$current_key$ind3 = _this[current_key][index]) === null || _this$current_key$ind3 === void 0 ? void 0 : _this$current_key$ind3.template,
          view: true
        });
      }, 500);
    },
    getFiles: function getFiles() {
      var _this2 = this;
      _services_proxy_service__WEBPACK_IMPORTED_MODULE_1__["default"].proxyEbapis({
        url: this.connectsHost + 'api/get-files',
        method: 'POST',
        data: {
          file_identity: this.data_cred_key.cred_pub_key
        }
      }).then(function (res) {
        var _res$data$data, _res$data$data2;
        res.data = JSON.parse(res.data);
        if (((_res$data$data = res.data.data) === null || _res$data$data === void 0 ? void 0 : _res$data$data.length) > 0 || ((_res$data$data2 = res.data.data) === null || _res$data$data2 === void 0 ? void 0 : _res$data$data2.length) != null) {
          _this2.files = res.data.data;
          var current_key = _this2.determineCurrentKey();
          _this2[current_key].forEach(function (element, index) {
            var count = 0;
            _this2.files.forEach(function (file) {
              var _element$template;
              if ((file === null || file === void 0 ? void 0 : file.extra_file_template_id) != null && (element === null || element === void 0 || (_element$template = element.template) === null || _element$template === void 0 ? void 0 : _element$template.id) == (file === null || file === void 0 ? void 0 : file.extra_file_template_id)) {
                count++;
              }
            });
            _this2[current_key][index]['files'] = count;
          });
        }
      })["catch"](function (err) {
        console.error(err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/dajc/PRDAJC.vue?vue&type=template&id=0e6b2017&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/dajc/PRDAJC.vue?vue&type=template&id=0e6b2017&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$dossier_credit;
  var _vm = this,
    _c = _vm._self._c;
  return (_vm$dossier_credit = _vm.dossier_credit) !== null && _vm$dossier_credit !== void 0 && _vm$dossier_credit.tbs_in_use.includes("tb200601") ? _c("div", {}, [_c("div", {
    staticClass: "row justify-content-center"
  }, [_c("div", {
    staticClass: "row table-responsive mb-3"
  }, [_c("div", {
    staticClass: "head-memorandum-title mb-4",
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("\n                PIECES REQUISES\n            ")]), _vm._v(" "), _c("PieceRequiseDajcOff", {
    attrs: {
      data_cred_key: _vm.dossier_credit
    }
  })], 1), _vm._v(" "), _c("br")])]) : _vm._e();
};
var staticRenderFns = [];
render._withStripped = true;


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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/carcasse_ppo/PCP2.vue?vue&type=template&id=12bd9556&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/carcasse_ppo/PCP2.vue?vue&type=template&id=12bd9556&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$data_tb, _vm$data_tb2, _vm$data_tb3, _vm$data_tb4, _vm$data_tb5, _vm$data_tb6, _vm$data_tb7, _vm$data_tb8, _vm$data_tb9, _vm$data_tb0, _vm$data_tb1, _vm$data_tb10;
  var _vm = this,
    _c = _vm._self._c;
  return _vm.data_tb9 && _vm.data_tb8 && _vm.data_tb7 && _vm.data_tb6 && _vm.data_tb5 && _vm.data_tb4 && _vm.data_tb3 && _vm.data_tb2 && _vm.data_tb1 ? _c("div", {
    staticClass: "row justify-content-center"
  }, [_c("div", {
    staticClass: "col-12 mt-3"
  }, [_vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mt-3"
  }, [_vm._m(2), _vm._v(" "), _c("tbody", {
    staticStyle: {
      "font-size": "16px"
    }
  }, [_c("tr", [_c("td", {
    staticStyle: {
      "vertical-align": "middle",
      "font-weight": "600"
    },
    attrs: {
      rowspan: ((_vm$data_tb = _vm.data_tb9) === null || _vm$data_tb === void 0 || (_vm$data_tb = _vm$data_tb.engagements_en_cours) === null || _vm$data_tb === void 0 ? void 0 : _vm$data_tb.length) + 1
    }
  }, [_vm._v("Nature du (des) crédit(s) et encours  ")]), _vm._v(" "), _c("td", {
    staticStyle: {
      "vertical-align": "middle",
      "font-weight": "600"
    }
  }, [_vm._v("Type")]), _vm._v(" "), _c("td", {
    staticStyle: {
      "vertical-align": "middle",
      "font-weight": "600"
    }
  }, [_vm._v("Montant ")]), _vm._v(" "), _c("td", {
    staticStyle: {
      "vertical-align": "middle",
      "font-weight": "600"
    }
  }, [_vm._v("Montant échéance ")]), _vm._v(" "), _c("td", {
    staticStyle: {
      "vertical-align": "middle",
      "font-weight": "600"
    }
  }, [_vm._v("Date échéance ")]), _vm._v(" "), _vm._m(3)]), _vm._v(" "), _vm._l((_vm$data_tb2 = _vm.data_tb9) === null || _vm$data_tb2 === void 0 ? void 0 : _vm$data_tb2.engagements_en_cours, function (item, index) {
    return _c("tr", {
      key: index
    }, [(item === null || item === void 0 ? void 0 : item.banque) != null ? [_c("td", {
      staticStyle: {
        "vertical-align": "middle"
      }
    }, [_vm._v(_vm._s(item === null || item === void 0 ? void 0 : item.type_credit) + " ")]), _vm._v(" "), _c("td", {
      staticStyle: {
        "vertical-align": "middle"
      }
    }, [_vm._v(_vm._s(item === null || item === void 0 ? void 0 : item.montant) + " ")]), _vm._v(" "), _c("td", {
      staticStyle: {
        "vertical-align": "middle"
      }
    }, [_vm._v(_vm._s(item === null || item === void 0 ? void 0 : item.montant_periodicite) + " ")]), _vm._v(" "), _c("td", {
      staticStyle: {
        "vertical-align": "middle"
      }
    }, [_vm._v(_vm._s(_vm.formatDate(item === null || item === void 0 ? void 0 : item.date_echeance)) + " ")]), _vm._v(" "), _c("td", {
      staticClass: "text-center",
      staticStyle: {
        "vertical-align": "middle",
        "justify-content": "center"
      }
    }, [_c("input", {
      staticClass: "form-check-input m-0",
      attrs: {
        type: "checkbox",
        disabled: ""
      },
      domProps: {
        checked: (item === null || item === void 0 ? void 0 : item.remboursement_anticipe) == "Oui"
      }
    })])] : _vm._e()], 2);
  })], 2)]), _vm._v(" "), _vm._m(4), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mt-3"
  }, [_c("thead", [_c("tr", [_c("td", {
    staticClass: "bg-beige",
    staticStyle: {
      width: "50%"
    }
  }, [_vm._v("Salaire (A) ")]), _vm._v(" "), _c("td", [_vm._v(" " + _vm._s(_vm.getRevenuSalaire()) + " ")])])]), _vm._v(" "), _c("tbody", {
    staticStyle: {
      "font-size": "16px"
    }
  }, [_c("tr", [_c("td", {
    staticClass: "bg-beige",
    staticStyle: {
      width: "50%"
    }
  }, [_vm._v("Autres revenus (B) ")]), _vm._v(" "), _c("td", [_vm._v(" " + _vm._s(_vm.getRevenuAutre()) + " ")])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "bg-beige",
    staticStyle: {
      width: "50%"
    }
  }, [_vm._v("Remboursement autres crédits (C) ")]), _vm._v(" "), _c("td", [_vm._v(" " + _vm._s(_vm.getRemboursementAutreCredit()) + " ")])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "bg-beige",
    staticStyle: {
      width: "50%"
    }
  }, [_vm._v("Remboursement Nouveau crédit (D) ")]), _vm._v(" "), _c("td", [_vm._v(" " + _vm._s(_vm.formatAmount((_vm$data_tb3 = _vm.data_tb9) === null || _vm$data_tb3 === void 0 ? void 0 : _vm$data_tb3.montant_credit)) + " ")])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "bg-beige",
    staticStyle: {
      width: "50%",
      "font-weight": "800"
    }
  }, [_vm._v("Taux d'endettement (C+D) /(A+B) ")]), _vm._v(" "), _c("td", {
    staticStyle: {
      "font-weight": "800"
    }
  }, [_vm._v(" " + _vm._s(_vm.getTauxEndettement().taux_endettement) + " ")])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "bg-beige",
    staticStyle: {
      width: "50%",
      "font-weight": "800"
    }
  }, [_vm._v("Reste à vivre (A+B) - (C+D) ")]), _vm._v(" "), _c("td", {
    staticStyle: {
      "font-weight": "800"
    }
  }, [_vm._v(" " + _vm._s(_vm.getTauxEndettement().reste_a_vivre) + " ")])])])]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mt-3"
  }, [_c("thead"), _vm._v(" "), _c("tbody", {
    staticStyle: {
      "font-size": "16px"
    }
  }, [_vm._m(5), _vm._v(" "), _vm._l((_vm$data_tb4 = _vm.data_tb9) === null || _vm$data_tb4 === void 0 ? void 0 : _vm$data_tb4.fonctionnement_comptes, function (el, dx) {
    return _c("tr", {
      key: dx
    }, [_c("td", {
      staticStyle: {
        width: "90%"
      }
    }, [_vm._v(_vm._s(el === null || el === void 0 ? void 0 : el.label) + " ")]), _vm._v(" "), _c("td", {
      staticStyle: {
        "text-align": "center"
      }
    }, [_c("input", {
      staticClass: "form-check-input m-0",
      attrs: {
        type: "checkbox",
        disabled: ""
      },
      domProps: {
        checked: (el === null || el === void 0 ? void 0 : el.value) == "Oui"
      }
    })])]);
  })], 2)]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mt-3"
  }, [_c("thead"), _vm._v(" "), _c("tbody", {
    staticStyle: {
      "font-size": "16px"
    }
  }, [_vm._m(6), _vm._v(" "), _vm._l((_vm$data_tb5 = _vm.data_tb9) === null || _vm$data_tb5 === void 0 ? void 0 : _vm$data_tb5.conformite_domiciliation_salaire, function (el, dx) {
    return _c("tr", {
      key: dx
    }, [_c("td", {
      staticStyle: {
        width: "90%"
      }
    }, [_vm._v(_vm._s(el === null || el === void 0 ? void 0 : el.label) + "lllol ")]), _vm._v(" "), _c("td", {
      staticStyle: {
        "text-align": "center"
      }
    }, [_c("input", {
      staticClass: "form-check-input m-0",
      attrs: {
        type: "checkbox",
        disabled: ""
      },
      domProps: {
        checked: el === null || el === void 0 ? void 0 : el.checked
      }
    })])]);
  })], 2)]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mb-4"
  }, [_vm._m(7), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", [_vm._m(8), _vm._v(" "), _c("span", {
    domProps: {
      innerHTML: _vm._s((_vm$data_tb6 = _vm.data_tb1) === null || _vm$data_tb6 === void 0 ? void 0 : _vm$data_tb6.objet_du_pret)
    }
  })])]), _vm._v(" "), _c("tr", [_c("td", [_vm._m(9), _vm._v(" "), _c("span", {
    domProps: {
      innerHTML: _vm._s((_vm$data_tb7 = _vm.data_tb1) === null || _vm$data_tb7 === void 0 ? void 0 : _vm$data_tb7.description_du_projet)
    }
  })])])])]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mb-4"
  }, [_vm._m(10), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", [_c("span", {
    domProps: {
      innerHTML: _vm._s((_vm$data_tb8 = _vm.data_tb1) === null || _vm$data_tb8 === void 0 ? void 0 : _vm$data_tb8.plan_de_financement)
    }
  })])])])]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mb-4"
  }, [_vm._m(11), _vm._v(" "), _c("tbody", [_vm._m(12), _vm._v(" "), _vm._l((_vm$data_tb9 = _vm.data_tb2) === null || _vm$data_tb9 === void 0 ? void 0 : _vm$data_tb9.garanties_proposees, function (el, ind) {
    var _el$type;
    return _c("tr", {
      key: ind
    }, [el.type != null ? [_c("td", [_vm._v(_vm._s(el === null || el === void 0 || (_el$type = el.type) === null || _el$type === void 0 ? void 0 : _el$type.libelle))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(el === null || el === void 0 ? void 0 : el.montant))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(el === null || el === void 0 ? void 0 : el.commentaire))])] : _vm._e()], 2);
  })], 2)]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mb-4"
  }, [_vm._m(13), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {
    staticStyle: {
      width: "50%"
    }
  }, [_vm._v(" Employeur ")]), _vm._v(" "), _c("td", {
    staticStyle: {
      width: "50%"
    }
  }, [_vm._v(" " + _vm._s(_vm.getEmployeurInfos()) + " ")])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v(" Type ")]), _vm._v(" "), _c("td", [_vm._v(" " + _vm._s((_vm$data_tb0 = _vm.data_tb9) === null || _vm$data_tb0 === void 0 ? void 0 : _vm$data_tb0.type_client) + " ")])])])]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mb-4"
  }, [_vm._m(14), _vm._v(" "), _c("tbody", [_vm._m(15), _vm._v(" "), _vm._m(16), _vm._v(" "), _vm._l((_vm$data_tb1 = _vm.data_tb9) === null || _vm$data_tb1 === void 0 ? void 0 : _vm$data_tb1.engagements_en_cours, function (item, index) {
    return _c("tr", {
      key: index
    }, [(item === null || item === void 0 ? void 0 : item.banque) != null ? [_c("td", [_vm._v(" " + _vm._s(index + 1))]), _vm._v(" "), _c("td", [_vm._v(" " + _vm._s(item === null || item === void 0 ? void 0 : item.type_credit) + " ")]), _vm._v(" "), _c("td", [_vm._v(" " + _vm._s(item === null || item === void 0 ? void 0 : item.montant) + " ")]), _vm._v(" "), _c("td", [_vm._v(" " + _vm._s(item === null || item === void 0 ? void 0 : item.taux) + " ")]), _vm._v(" "), _c("td", [_vm._v(" " + _vm._s(item === null || item === void 0 ? void 0 : item.encours))]), _vm._v(" "), _c("td", [_vm._v(" " + _vm._s(item === null || item === void 0 ? void 0 : item.montant_periodicite))]), _vm._v(" "), _c("td", [_vm._v(".")]), _vm._v(" "), _c("td", [_vm._v(".")]), _vm._v(" "), _c("td", [_vm._v(".")]), _vm._v(" "), _c("td", [_vm._v(".")])] : _vm._e()], 2);
  }), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "fw-bold text-center",
    attrs: {
      colspan: "2"
    }
  }, [_vm._v("Total")]), _vm._v(" "), _c("td", {
    staticStyle: {
      background: "#dcdcf1"
    }
  }, [_vm._v(" " + _vm._s(_vm.getTotalAutorisation()) + " ")]), _vm._v(" "), _c("td", {
    staticStyle: {
      background: "#dcdcf1"
    }
  }, [_vm._v(".")]), _vm._v(" "), _c("td", {
    staticStyle: {
      background: "#dcdcf1"
    }
  }, [_vm._v(".")]), _vm._v(" "), _c("td", {
    staticStyle: {
      background: "#dcdcf1"
    }
  }, [_vm._v(".")]), _vm._v(" "), _c("td", {
    staticStyle: {
      background: "#efefef"
    }
  }, [_vm._v(".")]), _vm._v(" "), _c("td", {
    staticStyle: {
      background: "#efefef"
    }
  }, [_vm._v(".")]), _vm._v(" "), _c("td", {
    staticStyle: {
      background: "#efefef"
    }
  }, [_vm._v(".")]), _vm._v(" "), _c("td", {
    staticStyle: {
      background: "#efefef"
    }
  }, [_vm._v(".")])])], 2)]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mb-4"
  }, [_vm._m(17), _vm._v(" "), _c("tbody", [_vm._m(18), _vm._v(" "), _vm._l((_vm$data_tb10 = _vm.data_tb2) === null || _vm$data_tb10 === void 0 ? void 0 : _vm$data_tb10.garanties_proposees, function (el, ind) {
    var _el$type2;
    return _c("tr", {
      key: ind
    }, [el.type != null ? [_c("td", [_vm._v(_vm._s(el === null || el === void 0 || (_el$type2 = el.type) === null || _el$type2 === void 0 ? void 0 : _el$type2.libelle))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(el === null || el === void 0 ? void 0 : el.montant))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(el === null || el === void 0 ? void 0 : el.commentaire))])] : _vm._e()], 2);
  })], 2)])])]) : _vm._e();
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
  }, [_vm._v("EXAMEN DU DOSSIER")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("ul", [_c("li", {
    staticClass: "ul-ps-2 mb-2"
  }, [_vm._v("Autres engagements ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("td", {
    staticStyle: {
      width: "30%",
      "font-weight": "600"
    }
  }, [_vm._v("Etablissement prêteur ")]), _vm._v(" "), _c("td", {
    staticStyle: {
      width: "70%"
    },
    attrs: {
      colspan: "5"
    }
  }, [_vm._v("BICIM ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticStyle: {
      "vertical-align": "middle",
      "font-weight": "600",
      "justify-content": "center"
    }
  }, [_vm._v("\n            Remboursement anticipé ? \n            "), _c("br"), _vm._v(" "), _c("span", {
    staticStyle: {
      color: "red",
      "font-weight": "100",
      "font-size": "13px"
    }
  }, [_vm._v("(cocher si oui)")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("ul", [_c("li", {
    staticClass: "ul-ps-2 mb-2"
  }, [_vm._v("Taux d’endettement ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("td", {
    attrs: {
      colspan: "2"
    }
  }, [_c("b", [_vm._v("Fonctionnement compte(s)")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("td", {
    attrs: {
      colspan: "2"
    }
  }, [_c("b", [_vm._v("Conformité du niveau de domiciliation du salaire (voir 2 derniers mois chez BICIM ou confrère)")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("td", {
    staticClass: "tb-hd-1"
  }, [_vm._v("PRESENTATION DU PROJET ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("ul", [_c("li", {
    staticClass: "ul-ps mb-2"
  }, [_vm._v("Raison de la sollicitation ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("ul", [_c("li", {
    staticClass: "ul-ps mb-2"
  }, [_vm._v("Description (le cas échéant) du projet ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("td", {
    staticClass: "tb-hd-1",
    attrs: {
      colspan: "4"
    }
  }, [_vm._v("PLAN DE FINANCEMENT/REMBOURSEMENT ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("td", {
    staticClass: "tb-hd-1",
    attrs: {
      colspan: "4"
    }
  }, [_vm._v("GARANTIES PROPOSEES ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("th", {
    staticStyle: {
      width: "33%"
    }
  }, [_vm._v("Libelle")]), _vm._v(" "), _c("th", {
    staticStyle: {
      width: "33%"
    }
  }, [_vm._v("Valeur")]), _vm._v(" "), _c("th", {
    staticStyle: {
      width: "33%"
    }
  }, [_vm._v("Commentaire")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("td", {
    staticClass: "tb-hd-1",
    attrs: {
      colspan: "4"
    }
  }, [_vm._v("DONNEES SUR L’EMPLOYEUR ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("td", {
    staticClass: "tb-hd-1",
    attrs: {
      colspan: "10"
    }
  }, [_vm._v("DETAILS DES ENGAGEMENTS ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("td", {
    staticClass: "item-vcenter fw-bold",
    attrs: {
      rowspan: "2"
    }
  }, [_vm._v("N° ")]), _vm._v(" "), _c("td", {
    staticClass: "item-vcenter fw-bold",
    attrs: {
      rowspan: "2"
    }
  }, [_vm._v("Facilités ")]), _vm._v(" "), _c("td", {
    staticClass: "text-center fw-bold",
    staticStyle: {
      background: "#dcdcf1"
    },
    attrs: {
      colspan: "4"
    }
  }, [_vm._v("Actuel ")]), _vm._v(" "), _c("td", {
    staticClass: "text-center fw-bold",
    staticStyle: {
      background: "#efefef"
    },
    attrs: {
      colspan: "4"
    }
  }, [_vm._v("Accordé ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Autorisation")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Taux")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Encours")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Échéance")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Demande")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Taux")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Durée")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Date accord")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("td", {
    staticClass: "tb-hd-1",
    attrs: {
      colspan: "4"
    }
  }, [_vm._v("GARANTIES & COVENANTS ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("th", {
    staticStyle: {
      width: "33%"
    }
  }, [_vm._v("Libelle")]), _vm._v(" "), _c("th", {
    staticStyle: {
      width: "33%"
    }
  }, [_vm._v("Valeur")]), _vm._v(" "), _c("th", {
    staticStyle: {
      width: "33%"
    }
  }, [_vm._v("Commentaire")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/PieceRequiseDajcOff.vue?vue&type=template&id=5888a4c4&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/PieceRequiseDajcOff.vue?vue&type=template&id=5888a4c4&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$data_cred_key, _vm$getElementBySlug, _vm$data_cred_key2, _vm$data_cred_key3, _vm$data_cred_key4, _vm$data_cred_key5, _vm$carcasse_type, _vm$data_cred_key6;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("div", {
    staticClass: "table-responsive justify-content-center",
    staticStyle: {
      padding: "15px 0 0 0"
    }
  }, [_vm._m(0), _vm._v(" "), _c("div", [_c("div", {
    staticClass: "d-flex mt-1"
  }, [_c("div", {
    staticClass: "p-2 w-100 border d-flex justify-content-center bg-deep-blue fw-semibold cursor-pointer align-items-center",
    "class": {
      "bg-white text-orange": _vm.activeMenu == "client"
    },
    on: {
      click: function click($event) {
        return _vm.toggleMenu("client");
      }
    }
  }, [_vm._m(1)]), _vm._v(" "), _c("div", {
    staticClass: "p-2 w-100 border d-flex justify-content-center bg-deep-blue fw-semibold cursor-pointer align-items-center",
    "class": {
      "bg-white text-orange": _vm.activeMenu == "credit"
    },
    on: {
      click: function click($event) {
        return _vm.toggleMenu("credit");
      }
    }
  }, [_vm._m(2)]), _vm._v(" "), _c("div", {
    staticClass: "p-2 w-100 border d-flex justify-content-center bg-deep-blue fw-semibold cursor-pointer align-items-center",
    "class": {
      "bg-white text-orange": _vm.activeMenu == "surete"
    },
    on: {
      click: function click($event) {
        return _vm.toggleMenu("surete");
      }
    }
  }, [_vm._m(3)])]), _vm._v(" "), !["Retail"].includes((_vm$data_cred_key = _vm.data_cred_key) === null || _vm$data_cred_key === void 0 ? void 0 : _vm$data_cred_key.categorie_client) ? _c("div", {
    staticClass: "d-flex mt-1"
  }, [_vm.activeMenu == "client" ? _c("div", {
    staticClass: "p-2 w-100 border",
    staticStyle: {
      "text-align": "center"
    }
  }, [_c("div", [_c("span", [_vm._v("\n                        " + _vm._s((_vm$getElementBySlug = _vm.getElementBySlug((_vm$data_cred_key2 = _vm.data_cred_key) === null || _vm$data_cred_key2 === void 0 || (_vm$data_cred_key2 = _vm$data_cred_key2.cred_pub_tb_200601) === null || _vm$data_cred_key2 === void 0 ? void 0 : _vm$data_cred_key2.type_de_clientele, "type_de_clientele")) === null || _vm$getElementBySlug === void 0 ? void 0 : _vm$getElementBySlug.toUpperCase()) + "\n                        ")])])]) : _vm._e(), _vm._v(" "), _vm.activeMenu == "credit" ? _c("div", {
    staticClass: "p-2 w-100 border"
  }, [_c("ul", {
    staticClass: "postion-absolue"
  }, _vm._l((_vm$data_cred_key3 = _vm.data_cred_key) === null || _vm$data_cred_key3 === void 0 || (_vm$data_cred_key3 = _vm$data_cred_key3.cred_pub_tb_200601) === null || _vm$data_cred_key3 === void 0 ? void 0 : _vm$data_cred_key3.ligne_credits, function (ligne_cred) {
    var _vm$getElementBySlug2, _vm$getElementBySlug3, _vm$getElementBySlug$, _vm$getElementBySlug4;
    return _c("li", {
      key: ligne_cred,
      staticClass: "nowrap d-block text-truncate",
      staticStyle: {
        "min-width": "100px"
      },
      attrs: {
        title: (_vm$getElementBySlug2 = _vm.getElementBySlug(ligne_cred, "ligne_credits")) === null || _vm$getElementBySlug2 === void 0 ? void 0 : _vm$getElementBySlug2.toUpperCase()
      }
    }, [_c("label", [_vm._v("\n\n                                – " + _vm._s(((_vm$getElementBySlug3 = _vm.getElementBySlug(ligne_cred, "ligne_credits")) === null || _vm$getElementBySlug3 === void 0 ? void 0 : _vm$getElementBySlug3.length) > 49 ? ((_vm$getElementBySlug$ = _vm.getElementBySlug(ligne_cred, "ligne_credits").slice(0, 49)) === null || _vm$getElementBySlug$ === void 0 ? void 0 : _vm$getElementBySlug$.toUpperCase()) + "..." : (_vm$getElementBySlug4 = _vm.getElementBySlug(ligne_cred, "ligne_credits")) === null || _vm$getElementBySlug4 === void 0 ? void 0 : _vm$getElementBySlug4.toUpperCase()) + "\n                            ")])]);
  }), 0)]) : _vm._e(), _vm._v(" "), _vm.activeMenu == "surete" ? _c("div", {
    staticClass: "p-2 w-100 border"
  }, [_c("ul", {
    staticClass: "postion-absolue"
  }, [_vm._l((_vm$data_cred_key4 = _vm.data_cred_key) === null || _vm$data_cred_key4 === void 0 || (_vm$data_cred_key4 = _vm$data_cred_key4.cred_pub_tb_200601) === null || _vm$data_cred_key4 === void 0 ? void 0 : _vm$data_cred_key4.surete_personneles, function (element) {
    var _vm$getElementBySlug5, _vm$getElementBySlug$2, _vm$getElementBySlug6;
    return _c("li", {
      key: element,
      staticClass: "nowrap d-block text-truncate",
      staticStyle: {
        "min-width": "100px"
      },
      attrs: {
        title: _vm.getElementBySlug(element, "surete_personnelles")
      }
    }, [_c("label", [_vm._v("\n                            – " + _vm._s(((_vm$getElementBySlug5 = _vm.getElementBySlug(element, "surete_personnelles")) === null || _vm$getElementBySlug5 === void 0 ? void 0 : _vm$getElementBySlug5.length) > 49 ? ((_vm$getElementBySlug$2 = _vm.getElementBySlug(element, "surete_personnelles").slice(0, 49)) === null || _vm$getElementBySlug$2 === void 0 ? void 0 : _vm$getElementBySlug$2.toUpperCase()) + "..." : (_vm$getElementBySlug6 = _vm.getElementBySlug(element, "surete_personnelles")) === null || _vm$getElementBySlug6 === void 0 ? void 0 : _vm$getElementBySlug6.toUpperCase()) + "\n                        ")])]);
  }), _vm._v(" "), _vm._l((_vm$data_cred_key5 = _vm.data_cred_key) === null || _vm$data_cred_key5 === void 0 || (_vm$data_cred_key5 = _vm$data_cred_key5.cred_pub_tb_200601) === null || _vm$data_cred_key5 === void 0 ? void 0 : _vm$data_cred_key5.suretes_reelles, function (surete_reele) {
    var _vm$getElementBySlug7;
    return _c("li", {
      key: surete_reele,
      staticClass: "nowrap d-block text-truncate",
      staticStyle: {
        "min-width": "100px"
      },
      attrs: {
        title: _vm.getElementBySlug(surete_reele, "surete_reeles")
      }
    }, [_c("label", [_vm._v("\n                            – " + _vm._s(((_vm$getElementBySlug7 = _vm.getElementBySlug(surete_reele, "surete_reeles")) === null || _vm$getElementBySlug7 === void 0 ? void 0 : _vm$getElementBySlug7.length) > 49 ? _vm.getElementBySlug(surete_reele, "surete_reeles").slice(0, 49) + "..." : _vm.getElementBySlug(surete_reele, "surete_reeles")) + "\n                        ")])]);
  })], 2)]) : _vm._e()]) : _c("div", {
    staticClass: "d-flex mt-1"
  }, [_c("div", {
    staticClass: "p-2 w-100 border d-flex justify-content-center fw-semibold cursor-pointer align-items-center"
  }, [_c("div", {
    staticClass: "mb-0"
  }, [_c("span", [_vm._v(_vm._s((_vm$carcasse_type = _vm.carcasse_type) === null || _vm$carcasse_type === void 0 ? void 0 : _vm$carcasse_type.toUpperCase()))])])])])]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(4), _vm._v(" "), _c("tbody", _vm._l(_vm.filteredList, function (el, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_c("span", [_vm._v(_vm._s(el.name))]), _vm._v(" "), (el === null || el === void 0 ? void 0 : el.is_dajc) == true ? _c("span", {
      staticClass: "text-orange fw-bold"
    }, [_vm._v("(DAJC)")]) : _vm._e()]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [el.value == "Oui" ? _c("input", {
      staticClass: "form-check-input",
      staticStyle: {
        width: "20px",
        height: "20px"
      },
      attrs: {
        disabled: "",
        type: "checkbox",
        checked: ""
      }
    }) : _c("input", {
      staticClass: "form-check-input",
      staticStyle: {
        width: "20px",
        height: "20px"
      },
      attrs: {
        type: "checkbox",
        disabled: ""
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [el.value == "Non" ? _c("input", {
      staticClass: "form-check-input",
      staticStyle: {
        width: "20px",
        height: "20px"
      },
      attrs: {
        disabled: "",
        type: "checkbox",
        checked: ""
      }
    }) : _c("input", {
      staticClass: "form-check-input",
      staticStyle: {
        width: "20px",
        height: "20px"
      },
      attrs: {
        type: "checkbox",
        disabled: ""
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [el.value == "Non applicable" ? _c("input", {
      staticClass: "form-check-input",
      staticStyle: {
        width: "20px",
        height: "20px"
      },
      attrs: {
        disabled: "",
        type: "checkbox",
        checked: ""
      }
    }) : _c("input", {
      staticClass: "form-check-input",
      staticStyle: {
        width: "20px",
        height: "20px"
      },
      attrs: {
        type: "checkbox",
        disabled: ""
      }
    })]), _vm._v(" "), _c("td", [el.value == "Oui" && (el === null || el === void 0 ? void 0 : el.files) > 0 ? _c("div", {
      staticClass: "d-flex align-items-center"
    }, [_c("div", [(el === null || el === void 0 ? void 0 : el.files) > 0 ? _c("span", {
      staticClass: "p-1 px-2 mx-2 text-nowrap",
      staticStyle: {
        "background-color": "rgb(44, 62, 80)",
        color: "white",
        "font-size": "13px",
        "border-radius": "5px",
        "margin-left": "0!important",
        width: "150px"
      }
    }, [_vm._v(_vm._s((el === null || el === void 0 ? void 0 : el.files) > 0 ? (el === null || el === void 0 ? void 0 : el.files) + " fichier(s) uploadé(s)" : ""))]) : _vm._e()]), _vm._v(" "), el.name.trim() != "" ? _c("div", [_c("button", {
      staticClass: "btn shadow-md text-white",
      staticStyle: {
        cursor: "pointer",
        background: "#2c3e50",
        width: "26px",
        "font-size": "13px",
        padding: "1px"
      },
      attrs: {
        type: "button",
        name: "button",
        "data-toggle": "tooltip",
        title: "Cliquer ici pour uploader ou voir le(s) fichier(s)"
      },
      on: {
        click: function click($event) {
          return _vm.handleDoubleClickOrClick($event, index);
        }
      }
    }, [_c("i", {
      staticClass: "icofont-attachment"
    })])]) : _vm._e()]) : _c("div", {
      staticClass: "text-center text-danger"
    }, [_vm._v("\n                                    Aucun fichier(s) uploadé(s)\n                                ")])]), _vm._v(" "), _c("td", [_vm._v("\n                                " + _vm._s(el.comment) + "\n                            ")]), _vm._v(" "), _c("td", [_vm._v("\n                                " + _vm._s(el.remarque_dajc) + "\n                            ")])]);
  }), 0)])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 mt-4"
  }, [_c("table", {
    staticClass: "table mb-2 table-bordered"
  }, [_vm._m(5), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", [_c("span", {
    domProps: {
      innerHTML: _vm._s((_vm$data_cred_key6 = _vm.data_cred_key) === null || _vm$data_cred_key6 === void 0 || (_vm$data_cred_key6 = _vm$data_cred_key6.cred_pub_tb_200601) === null || _vm$data_cred_key6 === void 0 ? void 0 : _vm$data_cred_key6.comment_pieces_requises)
    }
  })])])])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "p-2 w-100 border align-items-center bg-deep-blue fw-semibold justify-content-center",
    staticStyle: {
      "text-align": "center"
    }
  }, [_c("span", [_vm._v("\n                        DOCUMENTS RELATIFS\n                ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "mb-0"
  }, [_c("span", [_vm._v("\n                        CLIENT")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "mb-0"
  }, [_c("span", [_vm._v("\n                        PRODUIT")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "mb-0"
  }, [_c("span", [_vm._v("\n                        SÛRETE")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", {
    staticClass: "text-center"
  }, [_c("td", {
    staticClass: "th fw-bold"
  }, [_c("label", [_vm._v("DOCUMENTATION")])]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold"
  }, [_c("label", [_vm._v("OBTENUE ")])]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold"
  }, [_c("label", [_vm._v("NON OBTENUE ")])]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold"
  }, [_c("label", [_vm._v("NON APPLICABLE")])]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold"
  }, [_c("label", [_vm._v(" FICHIER ATTACHE")])]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold"
  }, [_c("label", [_vm._v("COMMENTAIRE")])]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold"
  }, [_c("label", [_vm._v("REMARQUES")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("td", {
    staticClass: "text-uppercase bg-grey text-center"
  }, [_vm._v("\n                            Commentaire\n                        ")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/dajc/PRDAJC.vue?vue&type=style&index=0&id=0e6b2017&lang=css&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/dajc/PRDAJC.vue?vue&type=style&index=0&id=0e6b2017&lang=css&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n/* .bg-grey{\n    background-color:#7f8c8d;\n    color:white;\n    width: 35%;\n\n} */\n.memo[data-v-0e6b2017] {\n  margin-top: 10px;\n  padding: 10px;\n  border: 2px solid #fff;\n  font-weight: 550;\n  font-size: 16px;\n  text-align: left;\n  text-transform: uppercase;\n  background-color: #34495e;\n  color: #fff;\n}\nth[data-v-0e6b2017] {\n  background: #f4f3f3 !important;\n}\n.bg-grey[data-v-0e6b2017] {\n  background-color: #f4f3f3;\n  width: 32%;\n}\ninput[type=checkbox][data-v-0e6b2017] {\n  /* Double-sized Checkboxes */\n  /* IE */\n  /* FF */\n  /* Safari and Chrome */\n  /* Opera */\n  transform: scale(2);\n  padding: 10px;\n}\n.head-memorandum-title[data-v-0e6b2017] {\n  margin-top: 15px;\n  padding: 16px;\n  color:#fff;\n  font-weight: bold;\n  background-color: #34495e;\n  border:2px solid #575759;\n  box-shadow: 1px 3px 4px #ddd;\n  font-size: 16px;\n  text-align: center;\n  text-transform: uppercase;\n  border-radius: 10px;\n  margin-bottom: 15px;\n}\n.checkboxtext[data-v-0e6b2017] {\n  /* Checkbox text */\n  font-size: 110%;\n  display: inline;\n}\n.form-check-input[data-v-0e6b2017]:disabled {\n    opacity: 1;\n}\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


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

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/carcasse_ppo/PCP2.vue?vue&type=style&index=0&id=12bd9556&lang=css&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/carcasse_ppo/PCP2.vue?vue&type=style&index=0&id=12bd9556&lang=css&scoped=true ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.bg-grey[data-v-12bd9556] {\r\n    background-color: #f4f3f3;\n}\nth[data-v-12bd9556] {\r\n    background: #f4f3f3 !important;\n}\n.vertical-middle[data-v-12bd9556] {\r\n  vertical-align: middle;\n}\n.font-bold[data-v-12bd9556] {\r\n  font-weight: bold;\n}\n.head-memorandum-title[data-v-12bd9556] {\r\n  margin-top: 15px;\r\n  padding: 16px;\r\n  color: #fff;\r\n  font-weight: bold;\r\n  background-color: #34495e;\r\n  border: 2px solid #575759;\r\n  box-shadow: 1px 3px 4px #ddd;\r\n  font-size: 16px;\r\n  text-align: center;\r\n  text-transform: uppercase;\r\n  border-radius: 10px;\r\n  margin-bottom: 15px;\n}\n.text-uppercase[data-v-12bd9556] {\r\n  text-transform: uppercase;\n}\n._border_right[data-v-12bd9556] {\r\n  border-right: 1px solid;\n}\n._border_bottom[data-v-12bd9556] {\r\n  border-bottom: 1px solid;\n}\n.pl-10-px[data-v-12bd9556] {\r\n  padding-left: 10px;\n}\n.pl-30-px[data-v-12bd9556] {\r\n  padding-left: 30px;\n}\n.pl-3[data-v-12bd9556] {\r\n  padding-left: 10px;\n}\n.form-check-input[data-v-12bd9556]:disabled {\r\n    opacity: 1;\n}\n.item-vcenter[data-v-12bd9556] {\r\n  /* text-align: center; */\r\n  vertical-align: middle;\n}\n.bg-beige[data-v-12bd9556] {\r\n  background: #f4f3f3 !important;\n}\n.label-bold[data-v-12bd9556] {\r\n  font-weight: 600;\n}\n.bgc-tr[data-v-12bd9556] {\r\n  background: #00008ba1;\r\n  color: white;\r\n  font-weight: 600;\n}\n.bg-beige[data-v-12bd9556] {\r\n  background: #f4f3f3 !important;\n}\n.label-bold[data-v-12bd9556] {\r\n  font-weight: 600;\n}\n.bgc-tr[data-v-12bd9556] {\r\n  background: #34495e;\r\n  color: white;\r\n  font-weight: 600;\n}\nul.square[data-v-12bd9556] {\r\n  list-style-type: square;\n}\n.h1-gradient[data-v-12bd9556] {\r\n  text-align: center;\r\n  font-size: 2rem;\r\n  position: relative;\r\n  margin-bottom: 30px;\n}\n.h1-gradient[data-v-12bd9556]::after {\r\n  content: '';\r\n  display: block;\r\n  width: 50%;\r\n  height: 3px;\r\n  background: linear-gradient(to right, #ff7e5f, #feb47b);\r\n  margin: 0 auto;\n}\n.stat-header-cofina[data-v-12bd9556] {\r\n  background: #FCE4D6 !important;\r\n  color: rgb(50, 50, 50);\r\n  /* background : #9e19453a !important;\r\n    color: #9e1945 */\n}\n.tb-hd-1[data-v-12bd9556] {\r\n  background: #34495e;\r\n  color: white;\r\n  font-weight: 600;\r\n  text-align: center;\n}\n.ul-ps[data-v-12bd9556] {\r\n  list-style-type: square;\r\n  margin: 0px 0px 0px 20px;\r\n  font-size: larger;\r\n  font-weight: lighter;\n}\n.ul-ps-2[data-v-12bd9556] {\r\n  list-style-type: circle;\r\n  margin: 0px 0px 0px 20px;\r\n  font-size: larger;\r\n  font-weight: lighter;\r\n  font-size: 17px;\n}\r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/PieceRequiseDajcOff.vue?vue&type=style&index=0&id=5888a4c4&lang=css&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/PieceRequiseDajcOff.vue?vue&type=style&index=0&id=5888a4c4&lang=css&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.bg-grey[data-v-5888a4c4] {\r\n    background-color: #f4f3f3;\n}\nth[data-v-5888a4c4] {\r\n    background: #f4f3f3 !important;\n}\n.head-memorandum-title[data-v-5888a4c4] {\r\n    margin-top: 15px;\r\n    padding: 16px;\r\n    color: #dc0030;\r\n    font-weight: bold;\r\n    background-color: #f6f6f6;\r\n    border: 2px solid #575759;\r\n    box-shadow: 1px 3px 4px #ddd;\r\n    font-size: 16px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    border-radius: 10px;\r\n    margin-bottom: 15px;\n}\n.form-check-input[data-v-5888a4c4]:disabled {\r\n      opacity: 1;\n}\r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/dajc/PRDAJC.vue?vue&type=style&index=0&id=0e6b2017&lang=css&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/dajc/PRDAJC.vue?vue&type=style&index=0&id=0e6b2017&lang=css&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PRDAJC_vue_vue_type_style_index_0_id_0e6b2017_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PRDAJC.vue?vue&type=style&index=0&id=0e6b2017&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/dajc/PRDAJC.vue?vue&type=style&index=0&id=0e6b2017&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PRDAJC_vue_vue_type_style_index_0_id_0e6b2017_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PRDAJC_vue_vue_type_style_index_0_id_0e6b2017_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/carcasse_ppo/PCP2.vue?vue&type=style&index=0&id=12bd9556&lang=css&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/carcasse_ppo/PCP2.vue?vue&type=style&index=0&id=12bd9556&lang=css&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PCP2_vue_vue_type_style_index_0_id_12bd9556_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PCP2.vue?vue&type=style&index=0&id=12bd9556&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/carcasse_ppo/PCP2.vue?vue&type=style&index=0&id=12bd9556&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PCP2_vue_vue_type_style_index_0_id_12bd9556_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PCP2_vue_vue_type_style_index_0_id_12bd9556_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/PieceRequiseDajcOff.vue?vue&type=style&index=0&id=5888a4c4&lang=css&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/PieceRequiseDajcOff.vue?vue&type=style&index=0&id=5888a4c4&lang=css&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PieceRequiseDajcOff_vue_vue_type_style_index_0_id_5888a4c4_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PieceRequiseDajcOff.vue?vue&type=style&index=0&id=5888a4c4&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/PieceRequiseDajcOff.vue?vue&type=style&index=0&id=5888a4c4&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PieceRequiseDajcOff_vue_vue_type_style_index_0_id_5888a4c4_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PieceRequiseDajcOff_vue_vue_type_style_index_0_id_5888a4c4_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/dajc/PRDAJC.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/dajc/PRDAJC.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PRDAJC_vue_vue_type_template_id_0e6b2017_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PRDAJC.vue?vue&type=template&id=0e6b2017&scoped=true */ "./resources/js/components/offview/bank/afg/dajc/PRDAJC.vue?vue&type=template&id=0e6b2017&scoped=true");
/* harmony import */ var _PRDAJC_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PRDAJC.vue?vue&type=script&lang=js */ "./resources/js/components/offview/bank/afg/dajc/PRDAJC.vue?vue&type=script&lang=js");
/* harmony import */ var _PRDAJC_vue_vue_type_style_index_0_id_0e6b2017_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PRDAJC.vue?vue&type=style&index=0&id=0e6b2017&lang=css&scoped=true */ "./resources/js/components/offview/bank/afg/dajc/PRDAJC.vue?vue&type=style&index=0&id=0e6b2017&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PRDAJC_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _PRDAJC_vue_vue_type_template_id_0e6b2017_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _PRDAJC_vue_vue_type_template_id_0e6b2017_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "0e6b2017",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/offview/bank/afg/dajc/PRDAJC.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/dajc/PRDAJC.vue?vue&type=script&lang=js":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/dajc/PRDAJC.vue?vue&type=script&lang=js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PRDAJC_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PRDAJC.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/dajc/PRDAJC.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PRDAJC_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/dajc/PRDAJC.vue?vue&type=style&index=0&id=0e6b2017&lang=css&scoped=true":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/dajc/PRDAJC.vue?vue&type=style&index=0&id=0e6b2017&lang=css&scoped=true ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PRDAJC_vue_vue_type_style_index_0_id_0e6b2017_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PRDAJC.vue?vue&type=style&index=0&id=0e6b2017&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/dajc/PRDAJC.vue?vue&type=style&index=0&id=0e6b2017&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/offview/bank/afg/dajc/PRDAJC.vue?vue&type=template&id=0e6b2017&scoped=true":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/dajc/PRDAJC.vue?vue&type=template&id=0e6b2017&scoped=true ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PRDAJC_vue_vue_type_template_id_0e6b2017_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PRDAJC_vue_vue_type_template_id_0e6b2017_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PRDAJC_vue_vue_type_template_id_0e6b2017_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PRDAJC.vue?vue&type=template&id=0e6b2017&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/dajc/PRDAJC.vue?vue&type=template&id=0e6b2017&scoped=true");


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


/***/ }),

/***/ "./resources/js/components/offview/bank/afg/memo/carcasse_ppo/PCP2.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/memo/carcasse_ppo/PCP2.vue ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PCP2_vue_vue_type_template_id_12bd9556_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PCP2.vue?vue&type=template&id=12bd9556&scoped=true */ "./resources/js/components/offview/bank/afg/memo/carcasse_ppo/PCP2.vue?vue&type=template&id=12bd9556&scoped=true");
/* harmony import */ var _PCP2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PCP2.vue?vue&type=script&lang=js */ "./resources/js/components/offview/bank/afg/memo/carcasse_ppo/PCP2.vue?vue&type=script&lang=js");
/* harmony import */ var _PCP2_vue_vue_type_style_index_0_id_12bd9556_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PCP2.vue?vue&type=style&index=0&id=12bd9556&lang=css&scoped=true */ "./resources/js/components/offview/bank/afg/memo/carcasse_ppo/PCP2.vue?vue&type=style&index=0&id=12bd9556&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PCP2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _PCP2_vue_vue_type_template_id_12bd9556_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _PCP2_vue_vue_type_template_id_12bd9556_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "12bd9556",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/offview/bank/afg/memo/carcasse_ppo/PCP2.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/memo/carcasse_ppo/PCP2.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/memo/carcasse_ppo/PCP2.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PCP2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PCP2.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/carcasse_ppo/PCP2.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PCP2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/memo/carcasse_ppo/PCP2.vue?vue&type=style&index=0&id=12bd9556&lang=css&scoped=true":
/*!*************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/memo/carcasse_ppo/PCP2.vue?vue&type=style&index=0&id=12bd9556&lang=css&scoped=true ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PCP2_vue_vue_type_style_index_0_id_12bd9556_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PCP2.vue?vue&type=style&index=0&id=12bd9556&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/carcasse_ppo/PCP2.vue?vue&type=style&index=0&id=12bd9556&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/offview/bank/afg/memo/carcasse_ppo/PCP2.vue?vue&type=template&id=12bd9556&scoped=true":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/memo/carcasse_ppo/PCP2.vue?vue&type=template&id=12bd9556&scoped=true ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PCP2_vue_vue_type_template_id_12bd9556_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PCP2_vue_vue_type_template_id_12bd9556_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PCP2_vue_vue_type_template_id_12bd9556_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PCP2.vue?vue&type=template&id=12bd9556&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/carcasse_ppo/PCP2.vue?vue&type=template&id=12bd9556&scoped=true");


/***/ }),

/***/ "./resources/js/components/shared/PieceRequiseDajcOff.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/shared/PieceRequiseDajcOff.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PieceRequiseDajcOff_vue_vue_type_template_id_5888a4c4_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PieceRequiseDajcOff.vue?vue&type=template&id=5888a4c4&scoped=true */ "./resources/js/components/shared/PieceRequiseDajcOff.vue?vue&type=template&id=5888a4c4&scoped=true");
/* harmony import */ var _PieceRequiseDajcOff_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PieceRequiseDajcOff.vue?vue&type=script&lang=js */ "./resources/js/components/shared/PieceRequiseDajcOff.vue?vue&type=script&lang=js");
/* harmony import */ var _PieceRequiseDajcOff_vue_vue_type_style_index_0_id_5888a4c4_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PieceRequiseDajcOff.vue?vue&type=style&index=0&id=5888a4c4&lang=css&scoped=true */ "./resources/js/components/shared/PieceRequiseDajcOff.vue?vue&type=style&index=0&id=5888a4c4&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PieceRequiseDajcOff_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _PieceRequiseDajcOff_vue_vue_type_template_id_5888a4c4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _PieceRequiseDajcOff_vue_vue_type_template_id_5888a4c4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "5888a4c4",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/shared/PieceRequiseDajcOff.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/shared/PieceRequiseDajcOff.vue?vue&type=script&lang=js":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/shared/PieceRequiseDajcOff.vue?vue&type=script&lang=js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PieceRequiseDajcOff_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PieceRequiseDajcOff.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/PieceRequiseDajcOff.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PieceRequiseDajcOff_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shared/PieceRequiseDajcOff.vue?vue&type=style&index=0&id=5888a4c4&lang=css&scoped=true":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/shared/PieceRequiseDajcOff.vue?vue&type=style&index=0&id=5888a4c4&lang=css&scoped=true ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PieceRequiseDajcOff_vue_vue_type_style_index_0_id_5888a4c4_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PieceRequiseDajcOff.vue?vue&type=style&index=0&id=5888a4c4&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/PieceRequiseDajcOff.vue?vue&type=style&index=0&id=5888a4c4&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/shared/PieceRequiseDajcOff.vue?vue&type=template&id=5888a4c4&scoped=true":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/shared/PieceRequiseDajcOff.vue?vue&type=template&id=5888a4c4&scoped=true ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PieceRequiseDajcOff_vue_vue_type_template_id_5888a4c4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PieceRequiseDajcOff_vue_vue_type_template_id_5888a4c4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PieceRequiseDajcOff_vue_vue_type_template_id_5888a4c4_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PieceRequiseDajcOff.vue?vue&type=template&id=5888a4c4&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/PieceRequiseDajcOff.vue?vue&type=template&id=5888a4c4&scoped=true");


/***/ })

}]);