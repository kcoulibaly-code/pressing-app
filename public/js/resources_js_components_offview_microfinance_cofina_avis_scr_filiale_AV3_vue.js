"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_offview_microfinance_cofina_avis_scr_filiale_AV3_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/avis_scr_filiale/AV3.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/avis_scr_filiale/AV3.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    dossier_credit: Object
  },
  computed: {
    calculMargeCom: function calculMargeCom() {
      var _this$dossier_credit, _this$dossier_credit2, _dossier, _dossier3;
      var dossier = (_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.cred_pub_tb_13;
      if (['Retail BF (Burkina Faso)'].includes((_this$dossier_credit2 = this.dossier_credit) === null || _this$dossier_credit2 === void 0 ? void 0 : _this$dossier_credit2.applied_templ_name)) {
        var _this$dossier_credit3;
        dossier = (_this$dossier_credit3 = this.dossier_credit) === null || _this$dossier_credit3 === void 0 ? void 0 : _this$dossier_credit3.cred_pub_tb_16107;
      }
      var a = 0;
      var b = 0;
      if (!['', null, undefined].includes((_dossier = dossier) === null || _dossier === void 0 || (_dossier = _dossier.benefices_pertes[this.findIndexByObj("VENTES TOTALES")]) === null || _dossier === void 0 ? void 0 : _dossier.montant_c)) {
        var _dossier2;
        a = (_dossier2 = dossier) === null || _dossier2 === void 0 ? void 0 : _dossier2.benefices_pertes[this.findIndexByObj("VENTES TOTALES")].montant_c;
        a = Number(String(a).replace(/\s+/g, ""));
      }
      if (!['', null, undefined].includes((_dossier3 = dossier) === null || _dossier3 === void 0 || (_dossier3 = _dossier3.benefices_pertes[this.findIndexByObj("COÛT TOTAL DES MARCHANDISES VENDUES")]) === null || _dossier3 === void 0 ? void 0 : _dossier3.montant_c)) {
        var _dossier4;
        b = (_dossier4 = dossier) === null || _dossier4 === void 0 ? void 0 : _dossier4.benefices_pertes[this.findIndexByObj("COÛT TOTAL DES MARCHANDISES VENDUES")].montant_c;
        b = Number(String(b).replace(/\s+/g, ""));
      }
      return Math.abs(a - b);
    },
    capaciteAutoFinancement: function capaciteAutoFinancement() {
      var _this$dossier_credit4, _this$dossier_credit5, _dossier5, _dossier7, _dossier9, _dossier1;
      var dossier = (_this$dossier_credit4 = this.dossier_credit) === null || _this$dossier_credit4 === void 0 ? void 0 : _this$dossier_credit4.cred_pub_tb_13;
      if (['Retail BF (Burkina Faso)'].includes((_this$dossier_credit5 = this.dossier_credit) === null || _this$dossier_credit5 === void 0 ? void 0 : _this$dossier_credit5.applied_templ_name)) {
        var _this$dossier_credit6;
        dossier = (_this$dossier_credit6 = this.dossier_credit) === null || _this$dossier_credit6 === void 0 ? void 0 : _this$dossier_credit6.cred_pub_tb_16107;
      }
      var a = 0;
      var b = 0;
      var c = 0;
      var d = 0;
      if (!['', null, undefined].includes((_dossier5 = dossier) === null || _dossier5 === void 0 || (_dossier5 = _dossier5.benefices_pertes[this.findIndexByObj("RÉSULTAT NET PRINCIPALES OPÉRATIONS")]) === null || _dossier5 === void 0 ? void 0 : _dossier5.montant_c)) {
        var _dossier6;
        a = (_dossier6 = dossier) === null || _dossier6 === void 0 ? void 0 : _dossier6.benefices_pertes[this.findIndexByObj("RÉSULTAT NET PRINCIPALES OPÉRATIONS")].montant_c;
        a = Number(String(a).replace(/\s+/g, ""));
      }
      if (!['', null, undefined].includes((_dossier7 = dossier) === null || _dossier7 === void 0 || (_dossier7 = _dossier7.benefices_pertes[this.findIndexByObj("Autres revenus")]) === null || _dossier7 === void 0 ? void 0 : _dossier7.montant_c)) {
        var _dossier8;
        b = (_dossier8 = dossier) === null || _dossier8 === void 0 ? void 0 : _dossier8.benefices_pertes[this.findIndexByObj("Autres revenus")].montant_c;
        b = Number(String(b).replace(/\s+/g, ""));
      }
      if (!['', null, undefined].includes((_dossier9 = dossier) === null || _dossier9 === void 0 || (_dossier9 = _dossier9.benefices_pertes[this.findIndexByObj("Charges familiales")]) === null || _dossier9 === void 0 ? void 0 : _dossier9.montant_c)) {
        var _dossier0;
        c = (_dossier0 = dossier) === null || _dossier0 === void 0 ? void 0 : _dossier0.benefices_pertes[this.findIndexByObj("Charges familiales")].montant_c;
        c = Number(String(c).replace(/\s+/g, ""));
      }
      if (!['', null, undefined].includes((_dossier1 = dossier) === null || _dossier1 === void 0 || (_dossier1 = _dossier1.benefices_pertes[this.findIndexByObj("D'autres coûts")]) === null || _dossier1 === void 0 ? void 0 : _dossier1.montant_c)) {
        var _this$dossier_credit7;
        d = (_this$dossier_credit7 = this.dossier_credit) === null || _this$dossier_credit7 === void 0 || (_this$dossier_credit7 = _this$dossier_credit7.cred_pub_tb_13) === null || _this$dossier_credit7 === void 0 ? void 0 : _this$dossier_credit7.benefices_pertes[this.findIndexByObj("D'autres coûts")].montant_c;
        d = Number(String(d).replace(/\s+/g, ""));
      }
      var rp = a + b;
      var rm = c + d;
      var res = rp - rm;
      return res;
    },
    creditConcurrence: function creditConcurrence() {
      var _this$dossier_credit8;
      var total = 0;
      var hys_cred = this.dossier_credit.cred_pub_tb_17;
      if (['Retail BF (Burkina Faso)'].includes((_this$dossier_credit8 = this.dossier_credit) === null || _this$dossier_credit8 === void 0 ? void 0 : _this$dossier_credit8.applied_templ_name)) {
        var _this$dossier_credit9;
        hys_cred = (_this$dossier_credit9 = this.dossier_credit) === null || _this$dossier_credit9 === void 0 ? void 0 : _this$dossier_credit9.cred_pub_tb_16105;
      }
      if (hys_cred !== undefined) {
        var _hys_cred;
        if (((_hys_cred = hys_cred) === null || _hys_cred === void 0 ? void 0 : _hys_cred.historiques_des_credits) !== "") {
          var _hys_cred2;
          (_hys_cred2 = hys_cred) === null || _hys_cred2 === void 0 || _hys_cred2.historiques_des_credits.forEach(function (element) {
            if (element.statut === "Financé") {
              total += Number(String(element.encours).replace(/\s+/g, ""));
            }
          });
        }
      }
      return total;
    },
    tauxEndettement: function tauxEndettement() {
      if (this.convertNumber(this.capaciteAutoFinancement) != 0) {
        var _this$dossier_credit0, _this$dossier_credit1;
        return this.convertNumber((_this$dossier_credit0 = this.dossier_credit) === null || _this$dossier_credit0 === void 0 || (_this$dossier_credit0 = _this$dossier_credit0[this.determineCredPubTables((_this$dossier_credit1 = this.dossier_credit) === null || _this$dossier_credit1 === void 0 ? void 0 : _this$dossier_credit1.applied_templ_name)[1]]) === null || _this$dossier_credit0 === void 0 || (_this$dossier_credit0 = _this$dossier_credit0['echeance']) === null || _this$dossier_credit0 === void 0 ? void 0 : _this$dossier_credit0['echeance']) / this.convertNumber(this.capaciteAutoFinancement) * 100;
      }
      return 0;
    }
  },
  data: function data() {
    return {
      label_keys: [],
      chiffre_aff: "",
      cout_achat: "",
      charge_exploitation: "",
      compt: 0
      //   inventairesTrier:[]
    };
  },
  created: function created() {
    // this.sortInventaires()
  },
  mounted: function mounted() {
    this.loadKey();
  },
  methods: {
    loadKey: function loadKey() {
      var _this = this;
      var labels = ['VENTES TOTALES', 'COÛT TOTAL DES MARCHANDISES VENDUES', 'COÛTS OPÉRATIONNELS TOTAUX', 'RÉSULTAT NET PRINCIPALES OPÉRATIONS', 'Autres revenus', 'Charges familiales', "D'autres coûts"];
      labels.forEach(function (element, index) {
        var _this$label_keys;
        (_this$label_keys = _this.label_keys) === null || _this$label_keys === void 0 || _this$label_keys.push(_this.findIndexByObj(element));
      });
    },
    findIndexByObj: function findIndexByObj(label) {
      var _this$dossier_credit10, _this$dossier_credit11;
      var tab = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "benefices_pertes";
      var curr_tab = (_this$dossier_credit10 = this.dossier_credit) === null || _this$dossier_credit10 === void 0 || (_this$dossier_credit10 = _this$dossier_credit10.cred_pub_tb_13) === null || _this$dossier_credit10 === void 0 ? void 0 : _this$dossier_credit10[tab];
      if (['Retail BF (Burkina Faso)'].includes((_this$dossier_credit11 = this.dossier_credit) === null || _this$dossier_credit11 === void 0 ? void 0 : _this$dossier_credit11.applied_templ_name)) {
        var _this$dossier_credit12;
        curr_tab = (_this$dossier_credit12 = this.dossier_credit) === null || _this$dossier_credit12 === void 0 || (_this$dossier_credit12 = _this$dossier_credit12.cred_pub_tb_16107) === null || _this$dossier_credit12 === void 0 ? void 0 : _this$dossier_credit12[tab];
      }
      if (!['', null, undefined].includes(curr_tab)) {
        var _curr_tab;
        return (_curr_tab = curr_tab) === null || _curr_tab === void 0 ? void 0 : _curr_tab.findIndex(function (el) {
          return el.position === label;
        });
      }
      return -1;
    },
    formatDate: function formatDate(date) {
      var options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
      };
      return new Date(date).toLocaleDateString('fr', options);
    },
    convertNumber: function convertNumber(valeur) {
      return Number(String(valeur).replace(/\s+/g, ""));
    },
    arrondiA2Chiffre: function arrondiA2Chiffre(x) {
      var value = Math.round(x * 100) / 100;
      return value;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/avis_scr_filiale/AV3.vue?vue&type=template&id=d5b527b4&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/avis_scr_filiale/AV3.vue?vue&type=template&id=d5b527b4&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$dossier_credit, _vm$dossier_credit2, _vm$dossier_credit3, _vm$dossier_credit4, _vm$dossier_credit5, _vm$dossier_credit6, _vm$dossier_credit7, _vm$dossier_credit8, _vm$dossier_credit9, _vm$dossier_credit0, _vm$dossier_credit1, _vm$dossier_credit10, _vm$dossier_credit11, _vm$dossier_credit12, _vm$dossier_credit13, _vm$dossier_credit14, _vm$dossier_credit15, _vm$dossier_credit16, _vm$dossier_credit17, _vm$dossier_credit18, _vm$dossier_credit19, _vm$dossier_credit20, _vm$dossier_credit21, _vm$dossier_credit22, _vm$dossier_credit23, _vm$dossier_credit24, _vm$dossier_credit25, _vm$dossier_credit26, _vm$dossier_credit27, _vm$dossier_credit28, _vm$dossier_credit29, _vm$dossier_credit30, _vm$dossier_credit31, _vm$dossier_credit32, _vm$dossier_credit33, _vm$dossier_credit34, _vm$dossier_credit35, _vm$dossier_credit36, _vm$dossier_credit37, _vm$dossier_credit38, _vm$dossier_credit39, _vm$dossier_credit40, _vm$dossier_credit41, _vm$dossier_credit42, _vm$dossier_credit43, _vm$dossier_credit44, _vm$dossier_credit45, _vm$dossier_credit46, _vm$dossier_credit47, _vm$dossier_credit48, _vm$dossier_credit49, _vm$dossier_credit50, _vm$dossier_credit51, _vm$dossier_credit52, _vm$dossier_credit53, _vm$dossier_credit54, _vm$dossier_credit55, _vm$dossier_credit56, _vm$dossier_credit57, _vm$dossier_credit58, _vm$dossier_credit59, _vm$dossier_credit60, _vm$dossier_credit61, _vm$dossier_credit62, _vm$dossier_credit63, _vm$dossier_credit64, _vm$dossier_credit65, _vm$dossier_credit66, _vm$dossier_credit67, _vm$dossier_credit68, _vm$dossier_credit69, _vm$dossier_credit70, _vm$dossier_credit71, _vm$dossier_credit72, _vm$dossier_credit73, _vm$dossier_credit74, _vm$dossier_credit75, _vm$dossier_credit76, _vm$dossier_credit77, _vm$dossier_credit78, _vm$dossier_credit79, _vm$dossier_credit80, _vm$dossier_credit81, _vm$dossier_credit82, _vm$dossier_credit83, _vm$dossier_credit84, _vm$dossier_credit85, _vm$dossier_credit86, _vm$dossier_credit87, _vm$dossier_credit88, _vm$dossier_credit89, _vm$dossier_credit90, _vm$dossier_credit91, _vm$dossier_credit92, _vm$dossier_credit93, _vm$dossier_credit94, _vm$dossier_credit95, _vm$dossier_credit96, _vm$dossier_credit97, _vm$dossier_credit98, _vm$dossier_credit99, _vm$dossier_credit100, _vm$dossier_credit101, _vm$dossier_credit102, _vm$dossier_credit103, _vm$dossier_credit104, _vm$dossier_credit105, _vm$dossier_credit106, _vm$dossier_credit107, _vm$dossier_credit108, _vm$dossier_credit109, _vm$dossier_credit110, _vm$dossier_credit111, _vm$dossier_credit112, _vm$dossier_credit113, _vm$dossier_credit114, _vm$dossier_credit115, _vm$dossier_credit116, _vm$dossier_credit117, _vm$dossier_credit118, _vm$dossier_credit119, _vm$dossier_credit120, _vm$dossier_credit121, _vm$dossier_credit122, _vm$dossier_credit123, _vm$dossier_credit124, _vm$dossier_credit125, _vm$dossier_credit126, _vm$dossier_credit127, _vm$dossier_credit128, _vm$dossier_credit129, _vm$dossier_credit130, _vm$dossier_credit131, _vm$dossier_credit132, _vm$dossier_credit133, _vm$dossier_credit134, _vm$dossier_credit135, _vm$dossier_credit136, _vm$dossier_credit137, _vm$dossier_credit138, _vm$dossier_credit139, _vm$dossier_credit140, _vm$dossier_credit141, _vm$dossier_credit142, _vm$dossier_credit143, _vm$dossier_credit144, _vm$dossier_credit145, _vm$dossier_credit146, _vm$dossier_credit147, _vm$dossier_credit148, _vm$dossier_credit149, _vm$dossier_credit150, _vm$dossier_credit151, _vm$dossier_credit152, _vm$dossier_credit153, _vm$dossier_credit154, _vm$dossier_credit155, _vm$dossier_credit156, _vm$dossier_credit157, _vm$dossier_credit158, _vm$dossier_credit159, _vm$dossier_credit160, _vm$dossier_credit161, _vm$dossier_credit162, _vm$dossier_credit163, _vm$dossier_credit164, _vm$dossier_credit165, _vm$dossier_credit166, _vm$dossier_credit167, _vm$dossier_credit168, _vm$dossier_credit169, _vm$dossier_credit170, _vm$dossier_credit171, _vm$dossier_credit172, _vm$dossier_credit173, _vm$dossier_credit174, _vm$dossier_credit175, _vm$dossier_credit176, _vm$dossier_credit177, _vm$dossier_credit178, _vm$dossier_credit179, _vm$dossier_credit180, _vm$dossier_credit181, _vm$dossier_credit182, _vm$dossier_credit183, _vm$dossier_credit184, _vm$dossier_credit185, _vm$dossier_credit186;
  var _vm = this,
    _c = _vm._self._c;
  return (_vm$dossier_credit = _vm.dossier_credit) !== null && _vm$dossier_credit !== void 0 && _vm$dossier_credit.cred_pub_tb_48 ? _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "justify-content-center"
  }, [_c("div", {
    staticClass: "head-memorandum-title px-3 mb-2 mt-4 mb-4",
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("\n            FORCES ET FAIBLESSES\n        ")]), _vm._v(" "), _c("div", {
    staticClass: "table-responvive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(0), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {
    domProps: {
      innerHTML: _vm._s((_vm$dossier_credit2 = _vm.dossier_credit) === null || _vm$dossier_credit2 === void 0 || (_vm$dossier_credit2 = _vm$dossier_credit2.cred_pub_tb_20) === null || _vm$dossier_credit2 === void 0 ? void 0 : _vm$dossier_credit2.forces)
    }
  }), _vm._v(" "), _c("td", {
    domProps: {
      innerHTML: _vm._s((_vm$dossier_credit3 = _vm.dossier_credit) === null || _vm$dossier_credit3 === void 0 || (_vm$dossier_credit3 = _vm$dossier_credit3.cred_pub_tb_48) === null || _vm$dossier_credit3 === void 0 ? void 0 : _vm$dossier_credit3.forces)
    }
  }), _vm._v(" "), _c("td", {
    domProps: {
      innerHTML: _vm._s((_vm$dossier_credit4 = _vm.dossier_credit) === null || _vm$dossier_credit4 === void 0 || (_vm$dossier_credit4 = _vm$dossier_credit4.cred_pub_tb_480) === null || _vm$dossier_credit4 === void 0 ? void 0 : _vm$dossier_credit4.forces)
    }
  })])])])]), _vm._v(" "), _c("div", {
    staticClass: "table-responvive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(1), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {
    domProps: {
      innerHTML: _vm._s((_vm$dossier_credit5 = _vm.dossier_credit) === null || _vm$dossier_credit5 === void 0 || (_vm$dossier_credit5 = _vm$dossier_credit5.cred_pub_tb_20) === null || _vm$dossier_credit5 === void 0 ? void 0 : _vm$dossier_credit5.faiblesses)
    }
  }), _vm._v(" "), _c("td", {
    domProps: {
      innerHTML: _vm._s((_vm$dossier_credit6 = _vm.dossier_credit) === null || _vm$dossier_credit6 === void 0 || (_vm$dossier_credit6 = _vm$dossier_credit6.cred_pub_tb_48) === null || _vm$dossier_credit6 === void 0 ? void 0 : _vm$dossier_credit6.faiblesses)
    }
  }), _vm._v(" "), _c("td", {
    domProps: {
      innerHTML: _vm._s((_vm$dossier_credit7 = _vm.dossier_credit) === null || _vm$dossier_credit7 === void 0 || (_vm$dossier_credit7 = _vm$dossier_credit7.cred_pub_tb_480) === null || _vm$dossier_credit7 === void 0 ? void 0 : _vm$dossier_credit7.faiblesses)
    }
  })])])])]), _vm._v(" "), _c("div", {
    staticClass: "table-responvive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(2), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {
    domProps: {
      innerHTML: _vm._s((_vm$dossier_credit8 = _vm.dossier_credit) === null || _vm$dossier_credit8 === void 0 || (_vm$dossier_credit8 = _vm$dossier_credit8.cred_pub_tb_20) === null || _vm$dossier_credit8 === void 0 ? void 0 : _vm$dossier_credit8.opportinutes)
    }
  }), _vm._v(" "), _c("td", {
    domProps: {
      innerHTML: _vm._s((_vm$dossier_credit9 = _vm.dossier_credit) === null || _vm$dossier_credit9 === void 0 || (_vm$dossier_credit9 = _vm$dossier_credit9.cred_pub_tb_48) === null || _vm$dossier_credit9 === void 0 ? void 0 : _vm$dossier_credit9.opportunites)
    }
  }), _vm._v(" "), _c("td", {
    domProps: {
      innerHTML: _vm._s((_vm$dossier_credit0 = _vm.dossier_credit) === null || _vm$dossier_credit0 === void 0 || (_vm$dossier_credit0 = _vm$dossier_credit0.cred_pub_tb_480) === null || _vm$dossier_credit0 === void 0 ? void 0 : _vm$dossier_credit0.opportunites)
    }
  })])])])]), _vm._v(" "), _c("div", {
    staticClass: "table-responvive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(3), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {
    domProps: {
      innerHTML: _vm._s((_vm$dossier_credit1 = _vm.dossier_credit) === null || _vm$dossier_credit1 === void 0 || (_vm$dossier_credit1 = _vm$dossier_credit1.cred_pub_tb_20) === null || _vm$dossier_credit1 === void 0 ? void 0 : _vm$dossier_credit1.menaces)
    }
  }), _vm._v(" "), _c("td", {
    domProps: {
      innerHTML: _vm._s((_vm$dossier_credit10 = _vm.dossier_credit) === null || _vm$dossier_credit10 === void 0 || (_vm$dossier_credit10 = _vm$dossier_credit10.cred_pub_tb_48) === null || _vm$dossier_credit10 === void 0 ? void 0 : _vm$dossier_credit10.menaces)
    }
  }), _vm._v(" "), _c("td", {
    domProps: {
      innerHTML: _vm._s((_vm$dossier_credit11 = _vm.dossier_credit) === null || _vm$dossier_credit11 === void 0 || (_vm$dossier_credit11 = _vm$dossier_credit11.cred_pub_tb_480) === null || _vm$dossier_credit11 === void 0 ? void 0 : _vm$dossier_credit11.menaces)
    }
  })])])])]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("div", [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(4), _vm._v(" "), _c("tbody", [["Retail BF (Burkina Faso)"].includes((_vm$dossier_credit12 = _vm.dossier_credit) === null || _vm$dossier_credit12 === void 0 ? void 0 : _vm$dossier_credit12.applied_templ_name) ? _c("tr", [_c("td", [_vm._v("Chiffre d'affaires (par mois)")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit13 = _vm.dossier_credit) === null || _vm$dossier_credit13 === void 0 || (_vm$dossier_credit13 = _vm$dossier_credit13.cred_pub_tb_16107) === null || _vm$dossier_credit13 === void 0 || (_vm$dossier_credit13 = _vm$dossier_credit13.benefices_pertes[_vm.label_keys[0]]) === null || _vm$dossier_credit13 === void 0 ? void 0 : _vm$dossier_credit13.montant_c)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit14 = _vm.dossier_credit) === null || _vm$dossier_credit14 === void 0 || (_vm$dossier_credit14 = _vm$dossier_credit14.cred_pub_tb_48) === null || _vm$dossier_credit14 === void 0 ? void 0 : _vm$dossier_credit14.chiffre_affaire_propo_analyste)) + "\n                            ")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit15 = _vm.dossier_credit) === null || _vm$dossier_credit15 === void 0 || (_vm$dossier_credit15 = _vm$dossier_credit15.cred_pub_tb_480) === null || _vm$dossier_credit15 === void 0 ? void 0 : _vm$dossier_credit15.chiffre_affaire_src)) + "\n                            ")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit16 = _vm.dossier_credit) === null || _vm$dossier_credit16 === void 0 || (_vm$dossier_credit16 = _vm$dossier_credit16.cred_pub_tb_480) === null || _vm$dossier_credit16 === void 0 ? void 0 : _vm$dossier_credit16.justification_chiffre_affaire) + "\n                            ")])]) : _c("tr", [_c("td", [_vm._v("Chiffre d'affaires (par mois)")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit17 = _vm.dossier_credit) === null || _vm$dossier_credit17 === void 0 || (_vm$dossier_credit17 = _vm$dossier_credit17.cred_pub_tb_13) === null || _vm$dossier_credit17 === void 0 || (_vm$dossier_credit17 = _vm$dossier_credit17.benefices_pertes[_vm.label_keys[0]]) === null || _vm$dossier_credit17 === void 0 ? void 0 : _vm$dossier_credit17.montant_c)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit18 = _vm.dossier_credit) === null || _vm$dossier_credit18 === void 0 || (_vm$dossier_credit18 = _vm$dossier_credit18.cred_pub_tb_48) === null || _vm$dossier_credit18 === void 0 ? void 0 : _vm$dossier_credit18.chiffre_affaire_propo_analyste)) + "\n                            ")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit19 = _vm.dossier_credit) === null || _vm$dossier_credit19 === void 0 || (_vm$dossier_credit19 = _vm$dossier_credit19.cred_pub_tb_480) === null || _vm$dossier_credit19 === void 0 ? void 0 : _vm$dossier_credit19.chiffre_affaire_src)) + "\n                            ")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit20 = _vm.dossier_credit) === null || _vm$dossier_credit20 === void 0 || (_vm$dossier_credit20 = _vm$dossier_credit20.cred_pub_tb_480) === null || _vm$dossier_credit20 === void 0 ? void 0 : _vm$dossier_credit20.justification_chiffre_affaire) + "\n                            ")])]), _vm._v(" "), ["Retail BF (Burkina Faso)"].includes((_vm$dossier_credit21 = _vm.dossier_credit) === null || _vm$dossier_credit21 === void 0 ? void 0 : _vm$dossier_credit21.applied_templ_name) ? _c("tr", [_c("td", [_vm._v("Coût d'achat")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit22 = _vm.dossier_credit) === null || _vm$dossier_credit22 === void 0 || (_vm$dossier_credit22 = _vm$dossier_credit22.cred_pub_tb_16107) === null || _vm$dossier_credit22 === void 0 || (_vm$dossier_credit22 = _vm$dossier_credit22.benefices_pertes[_vm.label_keys[1]]) === null || _vm$dossier_credit22 === void 0 ? void 0 : _vm$dossier_credit22.montant_c)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit23 = _vm.dossier_credit) === null || _vm$dossier_credit23 === void 0 || (_vm$dossier_credit23 = _vm$dossier_credit23.cred_pub_tb_48) === null || _vm$dossier_credit23 === void 0 ? void 0 : _vm$dossier_credit23.cout_achat_propose)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit24 = _vm.dossier_credit) === null || _vm$dossier_credit24 === void 0 || (_vm$dossier_credit24 = _vm$dossier_credit24.cred_pub_tb_480) === null || _vm$dossier_credit24 === void 0 ? void 0 : _vm$dossier_credit24.cout_achat_src)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit25 = _vm.dossier_credit) === null || _vm$dossier_credit25 === void 0 || (_vm$dossier_credit25 = _vm$dossier_credit25.cred_pub_tb_480) === null || _vm$dossier_credit25 === void 0 ? void 0 : _vm$dossier_credit25.justification_cout_achat) + "\n                            ")])]) : _c("tr", [_c("td", [_vm._v("Coût d'achat")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit26 = _vm.dossier_credit) === null || _vm$dossier_credit26 === void 0 || (_vm$dossier_credit26 = _vm$dossier_credit26.cred_pub_tb_13) === null || _vm$dossier_credit26 === void 0 || (_vm$dossier_credit26 = _vm$dossier_credit26.benefices_pertes[_vm.label_keys[1]]) === null || _vm$dossier_credit26 === void 0 ? void 0 : _vm$dossier_credit26.montant_c)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit27 = _vm.dossier_credit) === null || _vm$dossier_credit27 === void 0 || (_vm$dossier_credit27 = _vm$dossier_credit27.cred_pub_tb_48) === null || _vm$dossier_credit27 === void 0 ? void 0 : _vm$dossier_credit27.cout_achat_propose)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit28 = _vm.dossier_credit) === null || _vm$dossier_credit28 === void 0 || (_vm$dossier_credit28 = _vm$dossier_credit28.cred_pub_tb_480) === null || _vm$dossier_credit28 === void 0 ? void 0 : _vm$dossier_credit28.cout_achat_src)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit29 = _vm.dossier_credit) === null || _vm$dossier_credit29 === void 0 || (_vm$dossier_credit29 = _vm$dossier_credit29.cred_pub_tb_480) === null || _vm$dossier_credit29 === void 0 ? void 0 : _vm$dossier_credit29.justification_cout_achat) + "\n                            ")])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Marge commerciale")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("\n                                " + _vm._s(_vm._f("formatNumber")(_vm.calculMargeCom)) + "\n                            ")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit30 = _vm.dossier_credit) === null || _vm$dossier_credit30 === void 0 || (_vm$dossier_credit30 = _vm$dossier_credit30.cred_pub_tb_48) === null || _vm$dossier_credit30 === void 0 ? void 0 : _vm$dossier_credit30.marge_commerciale_propose)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit31 = _vm.dossier_credit) === null || _vm$dossier_credit31 === void 0 || (_vm$dossier_credit31 = _vm$dossier_credit31.cred_pub_tb_480) === null || _vm$dossier_credit31 === void 0 ? void 0 : _vm$dossier_credit31.marge_commerciale_src)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit32 = _vm.dossier_credit) === null || _vm$dossier_credit32 === void 0 || (_vm$dossier_credit32 = _vm$dossier_credit32.cred_pub_tb_480) === null || _vm$dossier_credit32 === void 0 ? void 0 : _vm$dossier_credit32.justification_marge_commerciale) + "\n                            ")])]), _vm._v(" "), ["Retail BF (Burkina Faso)"].includes((_vm$dossier_credit33 = _vm.dossier_credit) === null || _vm$dossier_credit33 === void 0 ? void 0 : _vm$dossier_credit33.applied_templ_name) ? _c("tr", [_c("td", [_vm._v("Charges générales d'exploitation et financière")]), _vm._v(" "), ((_vm$dossier_credit34 = _vm.dossier_credit) === null || _vm$dossier_credit34 === void 0 || (_vm$dossier_credit34 = _vm$dossier_credit34.cred_pub_tb_16107) === null || _vm$dossier_credit34 === void 0 || (_vm$dossier_credit34 = _vm$dossier_credit34.benefices_pertes[_vm.label_keys[2]]) === null || _vm$dossier_credit34 === void 0 ? void 0 : _vm$dossier_credit34.montant_c) !== 0 ? _c("td", [_vm._v("\n                                " + _vm._s(_vm._f("formatNumber")((_vm$dossier_credit35 = _vm.dossier_credit) === null || _vm$dossier_credit35 === void 0 || (_vm$dossier_credit35 = _vm$dossier_credit35.cred_pub_tb_16107) === null || _vm$dossier_credit35 === void 0 || (_vm$dossier_credit35 = _vm$dossier_credit35.benefices_pertes[_vm.label_keys[2]]) === null || _vm$dossier_credit35 === void 0 ? void 0 : _vm$dossier_credit35.montant_c)))]) : _c("td", [_vm._v("0")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit36 = _vm.dossier_credit) === null || _vm$dossier_credit36 === void 0 || (_vm$dossier_credit36 = _vm$dossier_credit36.cred_pub_tb_48) === null || _vm$dossier_credit36 === void 0 ? void 0 : _vm$dossier_credit36.charge_exploitation_propose)) + "\n                            ")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit37 = _vm.dossier_credit) === null || _vm$dossier_credit37 === void 0 || (_vm$dossier_credit37 = _vm$dossier_credit37.cred_pub_tb_480) === null || _vm$dossier_credit37 === void 0 ? void 0 : _vm$dossier_credit37.charge_exploitation_src)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit38 = _vm.dossier_credit) === null || _vm$dossier_credit38 === void 0 || (_vm$dossier_credit38 = _vm$dossier_credit38.cred_pub_tb_480) === null || _vm$dossier_credit38 === void 0 ? void 0 : _vm$dossier_credit38.justification_charge_exploitation) + "\n                            ")])]) : _c("tr", [_c("td", [_vm._v("Charges générales d'exploitation et financière")]), _vm._v(" "), ((_vm$dossier_credit39 = _vm.dossier_credit) === null || _vm$dossier_credit39 === void 0 || (_vm$dossier_credit39 = _vm$dossier_credit39.cred_pub_tb_13) === null || _vm$dossier_credit39 === void 0 || (_vm$dossier_credit39 = _vm$dossier_credit39.benefices_pertes[_vm.label_keys[2]]) === null || _vm$dossier_credit39 === void 0 ? void 0 : _vm$dossier_credit39.montant_c) !== 0 ? _c("td", [_vm._v("\n                                " + _vm._s(_vm._f("formatNumber")((_vm$dossier_credit40 = _vm.dossier_credit) === null || _vm$dossier_credit40 === void 0 || (_vm$dossier_credit40 = _vm$dossier_credit40.cred_pub_tb_13) === null || _vm$dossier_credit40 === void 0 || (_vm$dossier_credit40 = _vm$dossier_credit40.benefices_pertes[_vm.label_keys[2]]) === null || _vm$dossier_credit40 === void 0 ? void 0 : _vm$dossier_credit40.montant_c)))]) : _c("td", [_vm._v("0")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit41 = _vm.dossier_credit) === null || _vm$dossier_credit41 === void 0 || (_vm$dossier_credit41 = _vm$dossier_credit41.cred_pub_tb_48) === null || _vm$dossier_credit41 === void 0 ? void 0 : _vm$dossier_credit41.charge_exploitation_propose)) + "\n                            ")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit42 = _vm.dossier_credit) === null || _vm$dossier_credit42 === void 0 || (_vm$dossier_credit42 = _vm$dossier_credit42.cred_pub_tb_480) === null || _vm$dossier_credit42 === void 0 ? void 0 : _vm$dossier_credit42.charge_exploitation_src)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit43 = _vm.dossier_credit) === null || _vm$dossier_credit43 === void 0 || (_vm$dossier_credit43 = _vm$dossier_credit43.cred_pub_tb_480) === null || _vm$dossier_credit43 === void 0 ? void 0 : _vm$dossier_credit43.justification_charge_exploitation) + "\n                            ")])]), _vm._v(" "), ["Retail BF (Burkina Faso)"].includes((_vm$dossier_credit44 = _vm.dossier_credit) === null || _vm$dossier_credit44 === void 0 ? void 0 : _vm$dossier_credit44.applied_templ_name) ? _c("tr", {
    staticClass: "fw-bold"
  }, [_c("td", [_vm._v("Résultat net")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit45 = _vm.dossier_credit) === null || _vm$dossier_credit45 === void 0 || (_vm$dossier_credit45 = _vm$dossier_credit45.cred_pub_tb_16107) === null || _vm$dossier_credit45 === void 0 || (_vm$dossier_credit45 = _vm$dossier_credit45.benefices_pertes[_vm.label_keys[3]]) === null || _vm$dossier_credit45 === void 0 ? void 0 : _vm$dossier_credit45.montant_c)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit46 = _vm.dossier_credit) === null || _vm$dossier_credit46 === void 0 || (_vm$dossier_credit46 = _vm$dossier_credit46.cred_pub_tb_48) === null || _vm$dossier_credit46 === void 0 ? void 0 : _vm$dossier_credit46.resultat_net_propose)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit47 = _vm.dossier_credit) === null || _vm$dossier_credit47 === void 0 || (_vm$dossier_credit47 = _vm$dossier_credit47.cred_pub_tb_480) === null || _vm$dossier_credit47 === void 0 ? void 0 : _vm$dossier_credit47.resultat_net_src)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit48 = _vm.dossier_credit) === null || _vm$dossier_credit48 === void 0 || (_vm$dossier_credit48 = _vm$dossier_credit48.cred_pub_tb_480) === null || _vm$dossier_credit48 === void 0 ? void 0 : _vm$dossier_credit48.justification_resultat_net) + "\n                            ")])]) : _c("tr", {
    staticClass: "fw-bold"
  }, [_c("td", [_vm._v("Résultat net")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit49 = _vm.dossier_credit) === null || _vm$dossier_credit49 === void 0 || (_vm$dossier_credit49 = _vm$dossier_credit49.cred_pub_tb_13) === null || _vm$dossier_credit49 === void 0 || (_vm$dossier_credit49 = _vm$dossier_credit49.benefices_pertes[_vm.label_keys[3]]) === null || _vm$dossier_credit49 === void 0 ? void 0 : _vm$dossier_credit49.montant_c)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit50 = _vm.dossier_credit) === null || _vm$dossier_credit50 === void 0 || (_vm$dossier_credit50 = _vm$dossier_credit50.cred_pub_tb_48) === null || _vm$dossier_credit50 === void 0 ? void 0 : _vm$dossier_credit50.resultat_net_propose)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit51 = _vm.dossier_credit) === null || _vm$dossier_credit51 === void 0 || (_vm$dossier_credit51 = _vm$dossier_credit51.cred_pub_tb_480) === null || _vm$dossier_credit51 === void 0 ? void 0 : _vm$dossier_credit51.resultat_net_src)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit52 = _vm.dossier_credit) === null || _vm$dossier_credit52 === void 0 || (_vm$dossier_credit52 = _vm$dossier_credit52.cred_pub_tb_480) === null || _vm$dossier_credit52 === void 0 ? void 0 : _vm$dossier_credit52.justification_resultat_net) + "\n                            ")])]), _vm._v(" "), ["Retail BF (Burkina Faso)"].includes((_vm$dossier_credit53 = _vm.dossier_credit) === null || _vm$dossier_credit53 === void 0 ? void 0 : _vm$dossier_credit53.applied_templ_name) ? _c("tr", [_c("td", [_vm._v("Autres revenus")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit54 = _vm.dossier_credit) === null || _vm$dossier_credit54 === void 0 || (_vm$dossier_credit54 = _vm$dossier_credit54.cred_pub_tb_16107) === null || _vm$dossier_credit54 === void 0 || (_vm$dossier_credit54 = _vm$dossier_credit54.benefices_pertes[_vm.label_keys[4]]) === null || _vm$dossier_credit54 === void 0 ? void 0 : _vm$dossier_credit54.montant_c) + "\n                            ")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit55 = _vm.dossier_credit) === null || _vm$dossier_credit55 === void 0 || (_vm$dossier_credit55 = _vm$dossier_credit55.cred_pub_tb_48) === null || _vm$dossier_credit55 === void 0 ? void 0 : _vm$dossier_credit55.autre_revenu_propose)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit56 = _vm.dossier_credit) === null || _vm$dossier_credit56 === void 0 || (_vm$dossier_credit56 = _vm$dossier_credit56.cred_pub_tb_480) === null || _vm$dossier_credit56 === void 0 ? void 0 : _vm$dossier_credit56.autre_revenu_src)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit57 = _vm.dossier_credit) === null || _vm$dossier_credit57 === void 0 || (_vm$dossier_credit57 = _vm$dossier_credit57.cred_pub_tb_480) === null || _vm$dossier_credit57 === void 0 ? void 0 : _vm$dossier_credit57.justification_autre_revenu))])]) : _c("tr", [_c("td", [_vm._v("Autres revenus")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit58 = _vm.dossier_credit) === null || _vm$dossier_credit58 === void 0 || (_vm$dossier_credit58 = _vm$dossier_credit58.cred_pub_tb_13) === null || _vm$dossier_credit58 === void 0 || (_vm$dossier_credit58 = _vm$dossier_credit58.benefices_pertes[_vm.label_keys[4]]) === null || _vm$dossier_credit58 === void 0 ? void 0 : _vm$dossier_credit58.montant_c) + "\n                            ")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit59 = _vm.dossier_credit) === null || _vm$dossier_credit59 === void 0 || (_vm$dossier_credit59 = _vm$dossier_credit59.cred_pub_tb_48) === null || _vm$dossier_credit59 === void 0 ? void 0 : _vm$dossier_credit59.autre_revenu_propose)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit60 = _vm.dossier_credit) === null || _vm$dossier_credit60 === void 0 || (_vm$dossier_credit60 = _vm$dossier_credit60.cred_pub_tb_480) === null || _vm$dossier_credit60 === void 0 ? void 0 : _vm$dossier_credit60.autre_revenu_src)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit61 = _vm.dossier_credit) === null || _vm$dossier_credit61 === void 0 || (_vm$dossier_credit61 = _vm$dossier_credit61.cred_pub_tb_480) === null || _vm$dossier_credit61 === void 0 ? void 0 : _vm$dossier_credit61.justification_autre_revenu))])]), _vm._v(" "), ["Retail BF (Burkina Faso)"].includes((_vm$dossier_credit62 = _vm.dossier_credit) === null || _vm$dossier_credit62 === void 0 ? void 0 : _vm$dossier_credit62.applied_templ_name) ? _c("tr", [_c("td", [_vm._v("Autres charges")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit63 = _vm.dossier_credit) === null || _vm$dossier_credit63 === void 0 || (_vm$dossier_credit63 = _vm$dossier_credit63.cred_pub_tb_16107) === null || _vm$dossier_credit63 === void 0 || (_vm$dossier_credit63 = _vm$dossier_credit63.benefices_pertes[_vm.label_keys[5]]) === null || _vm$dossier_credit63 === void 0 ? void 0 : _vm$dossier_credit63.montant_c) + "\n                            ")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit64 = _vm.dossier_credit) === null || _vm$dossier_credit64 === void 0 || (_vm$dossier_credit64 = _vm$dossier_credit64.cred_pub_tb_48) === null || _vm$dossier_credit64 === void 0 ? void 0 : _vm$dossier_credit64.autre_charge_propose)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit65 = _vm.dossier_credit) === null || _vm$dossier_credit65 === void 0 || (_vm$dossier_credit65 = _vm$dossier_credit65.cred_pub_tb_480) === null || _vm$dossier_credit65 === void 0 ? void 0 : _vm$dossier_credit65.autre_charge_src)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit66 = _vm.dossier_credit) === null || _vm$dossier_credit66 === void 0 || (_vm$dossier_credit66 = _vm$dossier_credit66.cred_pub_tb_480) === null || _vm$dossier_credit66 === void 0 ? void 0 : _vm$dossier_credit66.justification_autre_charge))])]) : _c("tr", [_c("td", [_vm._v("Autres charges")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit67 = _vm.dossier_credit) === null || _vm$dossier_credit67 === void 0 || (_vm$dossier_credit67 = _vm$dossier_credit67.cred_pub_tb_13) === null || _vm$dossier_credit67 === void 0 || (_vm$dossier_credit67 = _vm$dossier_credit67.benefices_pertes[_vm.label_keys[5]]) === null || _vm$dossier_credit67 === void 0 ? void 0 : _vm$dossier_credit67.montant_c) + "\n                            ")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit68 = _vm.dossier_credit) === null || _vm$dossier_credit68 === void 0 || (_vm$dossier_credit68 = _vm$dossier_credit68.cred_pub_tb_48) === null || _vm$dossier_credit68 === void 0 ? void 0 : _vm$dossier_credit68.autre_charge_propose)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit69 = _vm.dossier_credit) === null || _vm$dossier_credit69 === void 0 || (_vm$dossier_credit69 = _vm$dossier_credit69.cred_pub_tb_480) === null || _vm$dossier_credit69 === void 0 ? void 0 : _vm$dossier_credit69.autre_charge_src)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit70 = _vm.dossier_credit) === null || _vm$dossier_credit70 === void 0 || (_vm$dossier_credit70 = _vm$dossier_credit70.cred_pub_tb_480) === null || _vm$dossier_credit70 === void 0 ? void 0 : _vm$dossier_credit70.justification_autre_charge))])]), _vm._v(" "), ["Retail BF (Burkina Faso)"].includes((_vm$dossier_credit71 = _vm.dossier_credit) === null || _vm$dossier_credit71 === void 0 ? void 0 : _vm$dossier_credit71.applied_templ_name) ? _c("tr", [_c("td", [_vm._v("Charges familiales")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit72 = _vm.dossier_credit) === null || _vm$dossier_credit72 === void 0 || (_vm$dossier_credit72 = _vm$dossier_credit72.cred_pub_tb_16107) === null || _vm$dossier_credit72 === void 0 || (_vm$dossier_credit72 = _vm$dossier_credit72.benefices_pertes[_vm.label_keys[6]]) === null || _vm$dossier_credit72 === void 0 ? void 0 : _vm$dossier_credit72.montant_c) + "\n                            ")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit73 = _vm.dossier_credit) === null || _vm$dossier_credit73 === void 0 || (_vm$dossier_credit73 = _vm$dossier_credit73.cred_pub_tb_48) === null || _vm$dossier_credit73 === void 0 ? void 0 : _vm$dossier_credit73.charge_familiale_propose)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit74 = _vm.dossier_credit) === null || _vm$dossier_credit74 === void 0 || (_vm$dossier_credit74 = _vm$dossier_credit74.cred_pub_tb_480) === null || _vm$dossier_credit74 === void 0 ? void 0 : _vm$dossier_credit74.charge_familiale_src)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit75 = _vm.dossier_credit) === null || _vm$dossier_credit75 === void 0 || (_vm$dossier_credit75 = _vm$dossier_credit75.cred_pub_tb_480) === null || _vm$dossier_credit75 === void 0 ? void 0 : _vm$dossier_credit75.justification_charge_familiale))])]) : _c("tr", [_c("td", [_vm._v("Charges familiales")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit76 = _vm.dossier_credit) === null || _vm$dossier_credit76 === void 0 || (_vm$dossier_credit76 = _vm$dossier_credit76.cred_pub_tb_13) === null || _vm$dossier_credit76 === void 0 || (_vm$dossier_credit76 = _vm$dossier_credit76.benefices_pertes[_vm.label_keys[6]]) === null || _vm$dossier_credit76 === void 0 ? void 0 : _vm$dossier_credit76.montant_c) + "\n                            ")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit77 = _vm.dossier_credit) === null || _vm$dossier_credit77 === void 0 || (_vm$dossier_credit77 = _vm$dossier_credit77.cred_pub_tb_48) === null || _vm$dossier_credit77 === void 0 ? void 0 : _vm$dossier_credit77.charge_familiale_propose)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit78 = _vm.dossier_credit) === null || _vm$dossier_credit78 === void 0 || (_vm$dossier_credit78 = _vm$dossier_credit78.cred_pub_tb_480) === null || _vm$dossier_credit78 === void 0 ? void 0 : _vm$dossier_credit78.charge_familiale_src)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit79 = _vm.dossier_credit) === null || _vm$dossier_credit79 === void 0 || (_vm$dossier_credit79 = _vm$dossier_credit79.cred_pub_tb_480) === null || _vm$dossier_credit79 === void 0 ? void 0 : _vm$dossier_credit79.justification_charge_familiale))])]), _vm._v(" "), _c("tr", {
    staticClass: "fw-bold"
  }, [_c("td", [_vm._v("Capacité d'autofinancement")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")(_vm.capaciteAutoFinancement)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit80 = _vm.dossier_credit) === null || _vm$dossier_credit80 === void 0 || (_vm$dossier_credit80 = _vm$dossier_credit80.cred_pub_tb_48) === null || _vm$dossier_credit80 === void 0 ? void 0 : _vm$dossier_credit80.capacite_autofinancement_propose)) + "\n                            ")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit81 = _vm.dossier_credit) === null || _vm$dossier_credit81 === void 0 || (_vm$dossier_credit81 = _vm$dossier_credit81.cred_pub_tb_480) === null || _vm$dossier_credit81 === void 0 ? void 0 : _vm$dossier_credit81.capacite_autofinancement_src)) + "\n                            ")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit82 = _vm.dossier_credit) === null || _vm$dossier_credit82 === void 0 || (_vm$dossier_credit82 = _vm$dossier_credit82.cred_pub_tb_480) === null || _vm$dossier_credit82 === void 0 ? void 0 : _vm$dossier_credit82.justification_capacite_autofinancement))])]), _vm._v(" "), _c("tr", {
    staticClass: "fw-bold"
  }, [_c("td", [_vm._v("Montant crédit proposé")]), _vm._v(" "), ((_vm$dossier_credit83 = _vm.dossier_credit) === null || _vm$dossier_credit83 === void 0 ? void 0 : _vm$dossier_credit83[this.determineCredPubTables((_vm$dossier_credit84 = _vm.dossier_credit) === null || _vm$dossier_credit84 === void 0 ? void 0 : _vm$dossier_credit84.applied_templ_name)[1]]) !== undefined ? _c("td", [_vm._v("\n                                " + _vm._s((_vm$dossier_credit85 = _vm.dossier_credit) === null || _vm$dossier_credit85 === void 0 || (_vm$dossier_credit85 = _vm$dossier_credit85[this.determineCredPubTables((_vm$dossier_credit86 = _vm.dossier_credit) === null || _vm$dossier_credit86 === void 0 ? void 0 : _vm$dossier_credit86.applied_templ_name)[1]]) === null || _vm$dossier_credit85 === void 0 ? void 0 : _vm$dossier_credit85["montant_demander"]))]) : _c("td", [_vm._v("0")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit87 = _vm.dossier_credit) === null || _vm$dossier_credit87 === void 0 || (_vm$dossier_credit87 = _vm$dossier_credit87.cred_pub_tb_48) === null || _vm$dossier_credit87 === void 0 ? void 0 : _vm$dossier_credit87.montant_credit_propose)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit88 = _vm.dossier_credit) === null || _vm$dossier_credit88 === void 0 || (_vm$dossier_credit88 = _vm$dossier_credit88.cred_pub_tb_480) === null || _vm$dossier_credit88 === void 0 ? void 0 : _vm$dossier_credit88.montant_credit_src)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit89 = _vm.dossier_credit) === null || _vm$dossier_credit89 === void 0 || (_vm$dossier_credit89 = _vm$dossier_credit89.cred_pub_tb_480) === null || _vm$dossier_credit89 === void 0 ? void 0 : _vm$dossier_credit89.justification_capacite_montant_propose))])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("Montant écheance crédit proposé")]), _vm._v(" "), ((_vm$dossier_credit90 = _vm.dossier_credit) === null || _vm$dossier_credit90 === void 0 ? void 0 : _vm$dossier_credit90[this.determineCredPubTables((_vm$dossier_credit91 = _vm.dossier_credit) === null || _vm$dossier_credit91 === void 0 ? void 0 : _vm$dossier_credit91.applied_templ_name)[1]]) !== undefined ? _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")(Math.ceil((_vm$dossier_credit92 = _vm.dossier_credit) === null || _vm$dossier_credit92 === void 0 || (_vm$dossier_credit92 = _vm$dossier_credit92[this.determineCredPubTables((_vm$dossier_credit93 = _vm.dossier_credit) === null || _vm$dossier_credit93 === void 0 ? void 0 : _vm$dossier_credit93.applied_templ_name)[1]]) === null || _vm$dossier_credit92 === void 0 || (_vm$dossier_credit92 = _vm$dossier_credit92["echeance"]) === null || _vm$dossier_credit92 === void 0 ? void 0 : _vm$dossier_credit92["echeance"]))))]) : _c("td", [_vm._v("0")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit94 = _vm.dossier_credit) === null || _vm$dossier_credit94 === void 0 || (_vm$dossier_credit94 = _vm$dossier_credit94.cred_pub_tb_48) === null || _vm$dossier_credit94 === void 0 ? void 0 : _vm$dossier_credit94.montant_echeance_credit_propose, true)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit95 = _vm.dossier_credit) === null || _vm$dossier_credit95 === void 0 || (_vm$dossier_credit95 = _vm$dossier_credit95.cred_pub_tb_480) === null || _vm$dossier_credit95 === void 0 ? void 0 : _vm$dossier_credit95.montant_echeance_credit_src, true)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit96 = _vm.dossier_credit) === null || _vm$dossier_credit96 === void 0 || (_vm$dossier_credit96 = _vm$dossier_credit96.cred_pub_tb_480) === null || _vm$dossier_credit96 === void 0 ? void 0 : _vm$dossier_credit96.justification_capacite_montant_echeance))])]), _vm._v(" "), ["Retail BF (Burkina Faso)"].includes((_vm$dossier_credit97 = _vm.dossier_credit) === null || _vm$dossier_credit97 === void 0 ? void 0 : _vm$dossier_credit97.applied_templ_name) ? _c("tr", {
    staticClass: "fw-bold"
  }, [_c("td", [_vm._v("Trésorerie")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit98 = _vm.dossier_credit) === null || _vm$dossier_credit98 === void 0 || (_vm$dossier_credit98 = _vm$dossier_credit98.cred_pub_tb_16106) === null || _vm$dossier_credit98 === void 0 ? void 0 : _vm$dossier_credit98.actifs[0].montant_c)) + "\n                            ")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit99 = _vm.dossier_credit) === null || _vm$dossier_credit99 === void 0 || (_vm$dossier_credit99 = _vm$dossier_credit99.cred_pub_tb_48) === null || _vm$dossier_credit99 === void 0 ? void 0 : _vm$dossier_credit99.tresorerie_propose)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit100 = _vm.dossier_credit) === null || _vm$dossier_credit100 === void 0 || (_vm$dossier_credit100 = _vm$dossier_credit100.cred_pub_tb_480) === null || _vm$dossier_credit100 === void 0 ? void 0 : _vm$dossier_credit100.tresorerie_src)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit101 = _vm.dossier_credit) === null || _vm$dossier_credit101 === void 0 || (_vm$dossier_credit101 = _vm$dossier_credit101.cred_pub_tb_480) === null || _vm$dossier_credit101 === void 0 ? void 0 : _vm$dossier_credit101.justification_capacite_tresorerie))])]) : _c("tr", {
    staticClass: "fw-bold"
  }, [_c("td", [_vm._v("Trésorerie")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit102 = _vm.dossier_credit) === null || _vm$dossier_credit102 === void 0 || (_vm$dossier_credit102 = _vm$dossier_credit102.cred_pub_tb_12) === null || _vm$dossier_credit102 === void 0 ? void 0 : _vm$dossier_credit102.actifs[0].montant_c)) + "\n                            ")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit103 = _vm.dossier_credit) === null || _vm$dossier_credit103 === void 0 || (_vm$dossier_credit103 = _vm$dossier_credit103.cred_pub_tb_48) === null || _vm$dossier_credit103 === void 0 ? void 0 : _vm$dossier_credit103.tresorerie_propose)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit104 = _vm.dossier_credit) === null || _vm$dossier_credit104 === void 0 || (_vm$dossier_credit104 = _vm$dossier_credit104.cred_pub_tb_480) === null || _vm$dossier_credit104 === void 0 ? void 0 : _vm$dossier_credit104.tresorerie_src)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit105 = _vm.dossier_credit) === null || _vm$dossier_credit105 === void 0 || (_vm$dossier_credit105 = _vm$dossier_credit105.cred_pub_tb_480) === null || _vm$dossier_credit105 === void 0 ? void 0 : _vm$dossier_credit105.justification_capacite_tresorerie))])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("Taux d'endettement (%)")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")(_vm.tauxEndettement, true)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit106 = _vm.dossier_credit) === null || _vm$dossier_credit106 === void 0 || (_vm$dossier_credit106 = _vm$dossier_credit106.cred_pub_tb_48) === null || _vm$dossier_credit106 === void 0 ? void 0 : _vm$dossier_credit106.taux_endettement_propose, true)) + "\n                            ")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit107 = _vm.dossier_credit) === null || _vm$dossier_credit107 === void 0 || (_vm$dossier_credit107 = _vm$dossier_credit107.cred_pub_tb_480) === null || _vm$dossier_credit107 === void 0 ? void 0 : _vm$dossier_credit107.taux_endettement_src, true)) + "\n                            ")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit108 = _vm.dossier_credit) === null || _vm$dossier_credit108 === void 0 || (_vm$dossier_credit108 = _vm$dossier_credit108.cred_pub_tb_480) === null || _vm$dossier_credit108 === void 0 ? void 0 : _vm$dossier_credit108.justification_capacite_tresorerie))])])])])])]), _vm._v(" "), _c("br"), _vm._v(" "), _c("br"), _c("hr"), _vm._v(" "), _vm.dossier_credit.tbs_in_use.includes("tb048") || _vm.dossier_credit.tbs_in_use.includes("tb48") || _vm.dossier_credit.tbs_in_use.includes("tb480") ? _c("div", {
    staticClass: "table-responsive"
  }, [_c("div", [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(5), _vm._v(" "), _c("tbody", [["Retail BF (Burkina Faso)"].includes((_vm$dossier_credit109 = _vm.dossier_credit) === null || _vm$dossier_credit109 === void 0 ? void 0 : _vm$dossier_credit109.applied_templ_name) ? _c("tr", [_c("td", [_vm._v("Trésorerie (En espèce)")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit110 = _vm.dossier_credit) === null || _vm$dossier_credit110 === void 0 || (_vm$dossier_credit110 = _vm$dossier_credit110.cred_pub_tb_16106) === null || _vm$dossier_credit110 === void 0 || (_vm$dossier_credit110 = _vm$dossier_credit110.actifs[0]) === null || _vm$dossier_credit110 === void 0 ? void 0 : _vm$dossier_credit110.montant_c)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit111 = _vm.dossier_credit) === null || _vm$dossier_credit111 === void 0 || (_vm$dossier_credit111 = _vm$dossier_credit111.cred_pub_tb_48) === null || _vm$dossier_credit111 === void 0 ? void 0 : _vm$dossier_credit111.tresorerie_espece_propo_analyste)) + "\n                            ")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit112 = _vm.dossier_credit) === null || _vm$dossier_credit112 === void 0 || (_vm$dossier_credit112 = _vm$dossier_credit112.cred_pub_tb_480) === null || _vm$dossier_credit112 === void 0 ? void 0 : _vm$dossier_credit112.tresorerie_espece_propo_analyste)) + "\n                            ")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit113 = _vm.dossier_credit) === null || _vm$dossier_credit113 === void 0 || (_vm$dossier_credit113 = _vm$dossier_credit113.cred_pub_tb_480) === null || _vm$dossier_credit113 === void 0 ? void 0 : _vm$dossier_credit113.justification_tresorerie_espece) + "\n                            ")])]) : _c("tr", [_c("td", [_vm._v("Trésorerie (En espèce)")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit114 = _vm.dossier_credit) === null || _vm$dossier_credit114 === void 0 || (_vm$dossier_credit114 = _vm$dossier_credit114.cred_pub_tb_12) === null || _vm$dossier_credit114 === void 0 || (_vm$dossier_credit114 = _vm$dossier_credit114.actifs[0]) === null || _vm$dossier_credit114 === void 0 ? void 0 : _vm$dossier_credit114.montant_c)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit115 = _vm.dossier_credit) === null || _vm$dossier_credit115 === void 0 || (_vm$dossier_credit115 = _vm$dossier_credit115.cred_pub_tb_48) === null || _vm$dossier_credit115 === void 0 ? void 0 : _vm$dossier_credit115.tresorerie_espece_propo_analyste)) + "\n                            ")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit116 = _vm.dossier_credit) === null || _vm$dossier_credit116 === void 0 || (_vm$dossier_credit116 = _vm$dossier_credit116.cred_pub_tb_480) === null || _vm$dossier_credit116 === void 0 ? void 0 : _vm$dossier_credit116.tresorerie_espece_propo_analyste)) + "\n                            ")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit117 = _vm.dossier_credit) === null || _vm$dossier_credit117 === void 0 || (_vm$dossier_credit117 = _vm$dossier_credit117.cred_pub_tb_480) === null || _vm$dossier_credit117 === void 0 ? void 0 : _vm$dossier_credit117.justification_tresorerie_espece) + "\n                            ")])]), _vm._v(" "), ["Retail BF (Burkina Faso)"].includes((_vm$dossier_credit118 = _vm.dossier_credit) === null || _vm$dossier_credit118 === void 0 ? void 0 : _vm$dossier_credit118.applied_templ_name) ? _c("tr", [_c("td", [_vm._v("Créances et acompte")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit119 = _vm.dossier_credit) === null || _vm$dossier_credit119 === void 0 || (_vm$dossier_credit119 = _vm$dossier_credit119.cred_pub_tb_16106) === null || _vm$dossier_credit119 === void 0 || (_vm$dossier_credit119 = _vm$dossier_credit119.actifs[5]) === null || _vm$dossier_credit119 === void 0 ? void 0 : _vm$dossier_credit119.montant_c)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit120 = _vm.dossier_credit) === null || _vm$dossier_credit120 === void 0 || (_vm$dossier_credit120 = _vm$dossier_credit120.cred_pub_tb_48) === null || _vm$dossier_credit120 === void 0 ? void 0 : _vm$dossier_credit120.creance_acompte_propose)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit121 = _vm.dossier_credit) === null || _vm$dossier_credit121 === void 0 || (_vm$dossier_credit121 = _vm$dossier_credit121.cred_pub_tb_480) === null || _vm$dossier_credit121 === void 0 ? void 0 : _vm$dossier_credit121.creance_acompte_propose)) + "\n                            ")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit122 = _vm.dossier_credit) === null || _vm$dossier_credit122 === void 0 || (_vm$dossier_credit122 = _vm$dossier_credit122.cred_pub_tb_480) === null || _vm$dossier_credit122 === void 0 ? void 0 : _vm$dossier_credit122.justification_creance_acompte) + "\n                            ")])]) : _c("tr", [_c("td", [_vm._v("Créances et acompte")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit123 = _vm.dossier_credit) === null || _vm$dossier_credit123 === void 0 || (_vm$dossier_credit123 = _vm$dossier_credit123.cred_pub_tb_12) === null || _vm$dossier_credit123 === void 0 || (_vm$dossier_credit123 = _vm$dossier_credit123.actifs[5]) === null || _vm$dossier_credit123 === void 0 ? void 0 : _vm$dossier_credit123.montant_c)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit124 = _vm.dossier_credit) === null || _vm$dossier_credit124 === void 0 || (_vm$dossier_credit124 = _vm$dossier_credit124.cred_pub_tb_48) === null || _vm$dossier_credit124 === void 0 ? void 0 : _vm$dossier_credit124.creance_acompte_propose)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit125 = _vm.dossier_credit) === null || _vm$dossier_credit125 === void 0 || (_vm$dossier_credit125 = _vm$dossier_credit125.cred_pub_tb_480) === null || _vm$dossier_credit125 === void 0 ? void 0 : _vm$dossier_credit125.creance_acompte_propose)) + "\n                            ")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit126 = _vm.dossier_credit) === null || _vm$dossier_credit126 === void 0 || (_vm$dossier_credit126 = _vm$dossier_credit126.cred_pub_tb_480) === null || _vm$dossier_credit126 === void 0 ? void 0 : _vm$dossier_credit126.justification_creance_acompte) + "\n                            ")])]), _vm._v(" "), ["Retail BF (Burkina Faso)"].includes((_vm$dossier_credit127 = _vm.dossier_credit) === null || _vm$dossier_credit127 === void 0 ? void 0 : _vm$dossier_credit127.applied_templ_name) ? _c("tr", [_c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Stock")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit128 = _vm.dossier_credit) === null || _vm$dossier_credit128 === void 0 || (_vm$dossier_credit128 = _vm$dossier_credit128.cred_pub_tb_16106) === null || _vm$dossier_credit128 === void 0 || (_vm$dossier_credit128 = _vm$dossier_credit128.actifs[7]) === null || _vm$dossier_credit128 === void 0 ? void 0 : _vm$dossier_credit128.montant_c) + "\n                            ")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit129 = _vm.dossier_credit) === null || _vm$dossier_credit129 === void 0 || (_vm$dossier_credit129 = _vm$dossier_credit129.cred_pub_tb_48) === null || _vm$dossier_credit129 === void 0 ? void 0 : _vm$dossier_credit129.stock_propose)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit130 = _vm.dossier_credit) === null || _vm$dossier_credit130 === void 0 || (_vm$dossier_credit130 = _vm$dossier_credit130.cred_pub_tb_480) === null || _vm$dossier_credit130 === void 0 ? void 0 : _vm$dossier_credit130.stock_propose)) + "\n                            ")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit131 = _vm.dossier_credit) === null || _vm$dossier_credit131 === void 0 || (_vm$dossier_credit131 = _vm$dossier_credit131.cred_pub_tb_480) === null || _vm$dossier_credit131 === void 0 ? void 0 : _vm$dossier_credit131.justification_stock) + "\n                            ")])]) : _c("tr", [_c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Stock")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit132 = _vm.dossier_credit) === null || _vm$dossier_credit132 === void 0 || (_vm$dossier_credit132 = _vm$dossier_credit132.cred_pub_tb_12) === null || _vm$dossier_credit132 === void 0 || (_vm$dossier_credit132 = _vm$dossier_credit132.actifs[7]) === null || _vm$dossier_credit132 === void 0 ? void 0 : _vm$dossier_credit132.montant_c) + "\n                            ")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit133 = _vm.dossier_credit) === null || _vm$dossier_credit133 === void 0 || (_vm$dossier_credit133 = _vm$dossier_credit133.cred_pub_tb_48) === null || _vm$dossier_credit133 === void 0 ? void 0 : _vm$dossier_credit133.stock_propose)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit134 = _vm.dossier_credit) === null || _vm$dossier_credit134 === void 0 || (_vm$dossier_credit134 = _vm$dossier_credit134.cred_pub_tb_480) === null || _vm$dossier_credit134 === void 0 ? void 0 : _vm$dossier_credit134.stock_propose)) + "\n                            ")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit135 = _vm.dossier_credit) === null || _vm$dossier_credit135 === void 0 || (_vm$dossier_credit135 = _vm$dossier_credit135.cred_pub_tb_480) === null || _vm$dossier_credit135 === void 0 ? void 0 : _vm$dossier_credit135.justification_stock) + "\n                            ")])]), _vm._v(" "), ["Retail BF (Burkina Faso)"].includes((_vm$dossier_credit136 = _vm.dossier_credit) === null || _vm$dossier_credit136 === void 0 ? void 0 : _vm$dossier_credit136.applied_templ_name) ? _c("tr", [_c("td", [_vm._v("Immobilisations")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit137 = _vm.dossier_credit) === null || _vm$dossier_credit137 === void 0 || (_vm$dossier_credit137 = _vm$dossier_credit137.cred_pub_tb_16106) === null || _vm$dossier_credit137 === void 0 || (_vm$dossier_credit137 = _vm$dossier_credit137.actifs[19]) === null || _vm$dossier_credit137 === void 0 ? void 0 : _vm$dossier_credit137.montant_c) + "\n                            ")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit138 = _vm.dossier_credit) === null || _vm$dossier_credit138 === void 0 || (_vm$dossier_credit138 = _vm$dossier_credit138.cred_pub_tb_48) === null || _vm$dossier_credit138 === void 0 ? void 0 : _vm$dossier_credit138.immobilisation_propose)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit139 = _vm.dossier_credit) === null || _vm$dossier_credit139 === void 0 || (_vm$dossier_credit139 = _vm$dossier_credit139.cred_pub_tb_480) === null || _vm$dossier_credit139 === void 0 ? void 0 : _vm$dossier_credit139.immobilisation_propose)) + "\n                            ")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit140 = _vm.dossier_credit) === null || _vm$dossier_credit140 === void 0 || (_vm$dossier_credit140 = _vm$dossier_credit140.cred_pub_tb_480) === null || _vm$dossier_credit140 === void 0 ? void 0 : _vm$dossier_credit140.justification_immobilisation) + "\n                            ")])]) : _c("tr", [_c("td", [_vm._v("Immobilisations")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit141 = _vm.dossier_credit) === null || _vm$dossier_credit141 === void 0 || (_vm$dossier_credit141 = _vm$dossier_credit141.cred_pub_tb_12) === null || _vm$dossier_credit141 === void 0 || (_vm$dossier_credit141 = _vm$dossier_credit141.actifs[19]) === null || _vm$dossier_credit141 === void 0 ? void 0 : _vm$dossier_credit141.montant_c) + "\n                            ")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit142 = _vm.dossier_credit) === null || _vm$dossier_credit142 === void 0 || (_vm$dossier_credit142 = _vm$dossier_credit142.cred_pub_tb_48) === null || _vm$dossier_credit142 === void 0 ? void 0 : _vm$dossier_credit142.immobilisation_propose)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit143 = _vm.dossier_credit) === null || _vm$dossier_credit143 === void 0 || (_vm$dossier_credit143 = _vm$dossier_credit143.cred_pub_tb_480) === null || _vm$dossier_credit143 === void 0 ? void 0 : _vm$dossier_credit143.immobilisation_propose)) + "\n                            ")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit144 = _vm.dossier_credit) === null || _vm$dossier_credit144 === void 0 || (_vm$dossier_credit144 = _vm$dossier_credit144.cred_pub_tb_480) === null || _vm$dossier_credit144 === void 0 ? void 0 : _vm$dossier_credit144.justification_immobilisation) + "\n                            ")])]), _vm._v(" "), ["Retail BF (Burkina Faso)"].includes((_vm$dossier_credit145 = _vm.dossier_credit) === null || _vm$dossier_credit145 === void 0 ? void 0 : _vm$dossier_credit145.applied_templ_name) ? _c("tr", {
    staticClass: "fw-bold"
  }, [_c("td", [_vm._v("Passifs opérationnels")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit146 = _vm.dossier_credit) === null || _vm$dossier_credit146 === void 0 || (_vm$dossier_credit146 = _vm$dossier_credit146.cred_pub_tb_16106) === null || _vm$dossier_credit146 === void 0 || (_vm$dossier_credit146 = _vm$dossier_credit146.passifs[0]) === null || _vm$dossier_credit146 === void 0 ? void 0 : _vm$dossier_credit146.montant_c)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit147 = _vm.dossier_credit) === null || _vm$dossier_credit147 === void 0 || (_vm$dossier_credit147 = _vm$dossier_credit147.cred_pub_tb_48) === null || _vm$dossier_credit147 === void 0 ? void 0 : _vm$dossier_credit147.passif_ope_propose)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit148 = _vm.dossier_credit) === null || _vm$dossier_credit148 === void 0 || (_vm$dossier_credit148 = _vm$dossier_credit148.cred_pub_tb_480) === null || _vm$dossier_credit148 === void 0 ? void 0 : _vm$dossier_credit148.passif_ope_propose)) + "\n                            ")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit149 = _vm.dossier_credit) === null || _vm$dossier_credit149 === void 0 || (_vm$dossier_credit149 = _vm$dossier_credit149.cred_pub_tb_480) === null || _vm$dossier_credit149 === void 0 ? void 0 : _vm$dossier_credit149.justification_passif_ope) + "\n                            ")])]) : _c("tr", {
    staticClass: "fw-bold"
  }, [_c("td", [_vm._v("Passifs opérationnels")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit150 = _vm.dossier_credit) === null || _vm$dossier_credit150 === void 0 || (_vm$dossier_credit150 = _vm$dossier_credit150.cred_pub_tb_12) === null || _vm$dossier_credit150 === void 0 || (_vm$dossier_credit150 = _vm$dossier_credit150.passifs[0]) === null || _vm$dossier_credit150 === void 0 ? void 0 : _vm$dossier_credit150.montant_c)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit151 = _vm.dossier_credit) === null || _vm$dossier_credit151 === void 0 || (_vm$dossier_credit151 = _vm$dossier_credit151.cred_pub_tb_48) === null || _vm$dossier_credit151 === void 0 ? void 0 : _vm$dossier_credit151.passif_ope_propose)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit152 = _vm.dossier_credit) === null || _vm$dossier_credit152 === void 0 || (_vm$dossier_credit152 = _vm$dossier_credit152.cred_pub_tb_480) === null || _vm$dossier_credit152 === void 0 ? void 0 : _vm$dossier_credit152.passif_ope_propose)) + "\n                            ")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit153 = _vm.dossier_credit) === null || _vm$dossier_credit153 === void 0 || (_vm$dossier_credit153 = _vm$dossier_credit153.cred_pub_tb_480) === null || _vm$dossier_credit153 === void 0 ? void 0 : _vm$dossier_credit153.justification_passif_ope) + "\n                            ")])]), _vm._v(" "), ["Retail BF (Burkina Faso)"].includes((_vm$dossier_credit154 = _vm.dossier_credit) === null || _vm$dossier_credit154 === void 0 ? void 0 : _vm$dossier_credit154.applied_templ_name) ? _c("tr", [_c("td", [_vm._v("Passifs financiers")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit155 = _vm.dossier_credit) === null || _vm$dossier_credit155 === void 0 || (_vm$dossier_credit155 = _vm$dossier_credit155.cred_pub_tb_16106) === null || _vm$dossier_credit155 === void 0 || (_vm$dossier_credit155 = _vm$dossier_credit155.passifs[4]) === null || _vm$dossier_credit155 === void 0 ? void 0 : _vm$dossier_credit155.montant_c) + "\n                            ")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit156 = _vm.dossier_credit) === null || _vm$dossier_credit156 === void 0 || (_vm$dossier_credit156 = _vm$dossier_credit156.cred_pub_tb_48) === null || _vm$dossier_credit156 === void 0 ? void 0 : _vm$dossier_credit156.passifs_fin_propose)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit157 = _vm.dossier_credit) === null || _vm$dossier_credit157 === void 0 || (_vm$dossier_credit157 = _vm$dossier_credit157.cred_pub_tb_480) === null || _vm$dossier_credit157 === void 0 ? void 0 : _vm$dossier_credit157.passifs_fin_propose)) + "\n                            ")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit158 = _vm.dossier_credit) === null || _vm$dossier_credit158 === void 0 || (_vm$dossier_credit158 = _vm$dossier_credit158.cred_pub_tb_480) === null || _vm$dossier_credit158 === void 0 ? void 0 : _vm$dossier_credit158.justification_passifs_fin) + "\n                            ")])]) : _c("tr", [_c("td", [_vm._v("Passifs financiers")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit159 = _vm.dossier_credit) === null || _vm$dossier_credit159 === void 0 || (_vm$dossier_credit159 = _vm$dossier_credit159.cred_pub_tb_12) === null || _vm$dossier_credit159 === void 0 || (_vm$dossier_credit159 = _vm$dossier_credit159.passifs[4]) === null || _vm$dossier_credit159 === void 0 ? void 0 : _vm$dossier_credit159.montant_c) + "\n                            ")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit160 = _vm.dossier_credit) === null || _vm$dossier_credit160 === void 0 || (_vm$dossier_credit160 = _vm$dossier_credit160.cred_pub_tb_48) === null || _vm$dossier_credit160 === void 0 ? void 0 : _vm$dossier_credit160.passifs_fin_propose)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit161 = _vm.dossier_credit) === null || _vm$dossier_credit161 === void 0 || (_vm$dossier_credit161 = _vm$dossier_credit161.cred_pub_tb_480) === null || _vm$dossier_credit161 === void 0 ? void 0 : _vm$dossier_credit161.passifs_fin_propose)) + "\n                            ")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit162 = _vm.dossier_credit) === null || _vm$dossier_credit162 === void 0 || (_vm$dossier_credit162 = _vm$dossier_credit162.cred_pub_tb_480) === null || _vm$dossier_credit162 === void 0 ? void 0 : _vm$dossier_credit162.justification_passifs_fin) + "\n                            ")])])])])])]) : _vm._e(), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("div", [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(6), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", [_vm._v("Analyse sur l'organisation de l’entreprise")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit163 = _vm.dossier_credit) === null || _vm$dossier_credit163 === void 0 || (_vm$dossier_credit163 = _vm$dossier_credit163.cred_pub_tb_16) === null || _vm$dossier_credit163 === void 0 ? void 0 : _vm$dossier_credit163.appreciation_organisation))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit164 = _vm.dossier_credit) === null || _vm$dossier_credit164 === void 0 || (_vm$dossier_credit164 = _vm$dossier_credit164.cred_pub_tb_48) === null || _vm$dossier_credit164 === void 0 ? void 0 : _vm$dossier_credit164.appreciation_organisation_arc))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit165 = _vm.dossier_credit) === null || _vm$dossier_credit165 === void 0 || (_vm$dossier_credit165 = _vm$dossier_credit165.cred_pub_tb_480) === null || _vm$dossier_credit165 === void 0 ? void 0 : _vm$dossier_credit165.appreciation_organisation_src))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit166 = _vm.dossier_credit) === null || _vm$dossier_credit166 === void 0 || (_vm$dossier_credit166 = _vm$dossier_credit166.cred_pub_tb_480) === null || _vm$dossier_credit166 === void 0 ? void 0 : _vm$dossier_credit166.avis_appreciation_organisation_src))])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("Analyse d'autres risques")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit167 = _vm.dossier_credit) === null || _vm$dossier_credit167 === void 0 || (_vm$dossier_credit167 = _vm$dossier_credit167.cred_pub_tb_16) === null || _vm$dossier_credit167 === void 0 ? void 0 : _vm$dossier_credit167.appreciation_evaluation))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit168 = _vm.dossier_credit) === null || _vm$dossier_credit168 === void 0 || (_vm$dossier_credit168 = _vm$dossier_credit168.cred_pub_tb_48) === null || _vm$dossier_credit168 === void 0 ? void 0 : _vm$dossier_credit168.appreciation_autre_risque_arc))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit169 = _vm.dossier_credit) === null || _vm$dossier_credit169 === void 0 || (_vm$dossier_credit169 = _vm$dossier_credit169.cred_pub_tb_480) === null || _vm$dossier_credit169 === void 0 ? void 0 : _vm$dossier_credit169.appreciation_autre_risque_src))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit170 = _vm.dossier_credit) === null || _vm$dossier_credit170 === void 0 || (_vm$dossier_credit170 = _vm$dossier_credit170.cred_pub_tb_480) === null || _vm$dossier_credit170 === void 0 ? void 0 : _vm$dossier_credit170.avis_appreciation_autre_risque_src))])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("Analyse du risque commerciale")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit171 = _vm.dossier_credit) === null || _vm$dossier_credit171 === void 0 || (_vm$dossier_credit171 = _vm$dossier_credit171.cred_pub_tb_16) === null || _vm$dossier_credit171 === void 0 ? void 0 : _vm$dossier_credit171.appreciation))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit172 = _vm.dossier_credit) === null || _vm$dossier_credit172 === void 0 || (_vm$dossier_credit172 = _vm$dossier_credit172.cred_pub_tb_48) === null || _vm$dossier_credit172 === void 0 ? void 0 : _vm$dossier_credit172.appreciation_risque_commerciale_arc))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit173 = _vm.dossier_credit) === null || _vm$dossier_credit173 === void 0 || (_vm$dossier_credit173 = _vm$dossier_credit173.cred_pub_tb_480) === null || _vm$dossier_credit173 === void 0 ? void 0 : _vm$dossier_credit173.appreciation_risque_commerciale_src))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit174 = _vm.dossier_credit) === null || _vm$dossier_credit174 === void 0 || (_vm$dossier_credit174 = _vm$dossier_credit174.cred_pub_tb_480) === null || _vm$dossier_credit174 === void 0 ? void 0 : _vm$dossier_credit174.avis_appreciation_risque_commerciale_src) + "\n                            ")])])])])])]), _vm._v(" "), (_vm$dossier_credit175 = _vm.dossier_credit) !== null && _vm$dossier_credit175 !== void 0 && _vm$dossier_credit175.cred_pub_tb_480 ? _c("div", {
    staticClass: "table-responsive"
  }, [_c("div", [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(7), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", [_vm._v("Qualité de l'analyse effectuée par le CAF")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit176 = _vm.dossier_credit) === null || _vm$dossier_credit176 === void 0 || (_vm$dossier_credit176 = _vm$dossier_credit176.cred_pub_tb_480) === null || _vm$dossier_credit176 === void 0 ? void 0 : _vm$dossier_credit176.quantite_analyse_effectuee_analyse))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit177 = _vm.dossier_credit) === null || _vm$dossier_credit177 === void 0 || (_vm$dossier_credit177 = _vm$dossier_credit177.cred_pub_tb_480) === null || _vm$dossier_credit177 === void 0 ? void 0 : _vm$dossier_credit177.quantite_analyse_effectuee_avis_src))])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("Capacité de paiement")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit178 = _vm.dossier_credit) === null || _vm$dossier_credit178 === void 0 || (_vm$dossier_credit178 = _vm$dossier_credit178.cred_pub_tb_480) === null || _vm$dossier_credit178 === void 0 ? void 0 : _vm$dossier_credit178.capacite_paiement_analyse))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit179 = _vm.dossier_credit) === null || _vm$dossier_credit179 === void 0 || (_vm$dossier_credit179 = _vm$dossier_credit179.cred_pub_tb_480) === null || _vm$dossier_credit179 === void 0 ? void 0 : _vm$dossier_credit179.capacite_paiement_avis_src))])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("Garantie")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit180 = _vm.dossier_credit) === null || _vm$dossier_credit180 === void 0 || (_vm$dossier_credit180 = _vm$dossier_credit180.cred_pub_tb_480) === null || _vm$dossier_credit180 === void 0 ? void 0 : _vm$dossier_credit180.garantie_analyse))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit181 = _vm.dossier_credit) === null || _vm$dossier_credit181 === void 0 || (_vm$dossier_credit181 = _vm$dossier_credit181.cred_pub_tb_480) === null || _vm$dossier_credit181 === void 0 ? void 0 : _vm$dossier_credit181.garantie_avis_src))])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("Implication/Engagement du client dans son activité à payer")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit182 = _vm.dossier_credit) === null || _vm$dossier_credit182 === void 0 || (_vm$dossier_credit182 = _vm$dossier_credit182.cred_pub_tb_480) === null || _vm$dossier_credit182 === void 0 ? void 0 : _vm$dossier_credit182.implication_client_analyse))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit183 = _vm.dossier_credit) === null || _vm$dossier_credit183 === void 0 || (_vm$dossier_credit183 = _vm$dossier_credit183.cred_pub_tb_480) === null || _vm$dossier_credit183 === void 0 ? void 0 : _vm$dossier_credit183.implication_client_avis_src))])])])])])]) : _vm._e(), _vm._v(" "), (_vm$dossier_credit184 = _vm.dossier_credit) !== null && _vm$dossier_credit184 !== void 0 && _vm$dossier_credit184.cred_pub_tb_480 ? _c("div", {
    staticClass: "table-responsive"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_c("tbody", [_vm._m(8), _vm._v(" "), _vm._l((_vm$dossier_credit185 = _vm.dossier_credit) === null || _vm$dossier_credit185 === void 0 || (_vm$dossier_credit185 = _vm$dossier_credit185.cred_pub_tb_480) === null || _vm$dossier_credit185 === void 0 ? void 0 : _vm$dossier_credit185.condition_additionnelles_avant_decaissement, function (condition_additionnelle_avant_decaissement, index) {
    return _c("tr", {
      key: index + Math.random()
    }, [_c("td", [_vm._v(_vm._s(condition_additionnelle_avant_decaissement.avant_decaissement))])]);
  }), _vm._v(" "), _vm._m(9), _vm._v(" "), _vm._l((_vm$dossier_credit186 = _vm.dossier_credit) === null || _vm$dossier_credit186 === void 0 || (_vm$dossier_credit186 = _vm$dossier_credit186.cred_pub_tb_480) === null || _vm$dossier_credit186 === void 0 ? void 0 : _vm$dossier_credit186.condition_additionnelles_apres_decaissement, function (condition_additionnelles_apres_decaissement, index) {
    return _c("tr", {
      key: index + Math.random()
    }, [_c("td", [_vm._v(_vm._s(condition_additionnelles_apres_decaissement.apres_decaissement))])]);
  })], 2)])])]) : _vm._e()])]) : _vm._e();
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", {
    staticClass: "text-center fw-bold"
  }, [_c("th", [_vm._v("Forces (CAF) ")]), _vm._v(" "), _c("th", [_vm._v("Forces (ARC) ")]), _vm._v(" "), _c("th", [_vm._v("Forces (SRC) ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", {
    staticClass: "text-center fw-bold"
  }, [_c("th", [_vm._v("Faiblesses (CAF)")]), _vm._v(" "), _c("th", [_vm._v("Faiblesses (ARC)")]), _vm._v(" "), _c("th", [_vm._v("Faiblesses (SRC)")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", {
    staticClass: "text-center fw-bold"
  }, [_c("th", [_vm._v("Opportunités (CAF) ")]), _vm._v(" "), _c("th", [_vm._v("Opportunités (ARC) ")]), _vm._v(" "), _c("th", [_vm._v("Opportunités (SRC) ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", {
    staticClass: "text-center fw-bold"
  }, [_c("th", [_vm._v("Menaces (CAF)")]), _vm._v(" "), _c("th", [_vm._v("Menaces (ARC)")]), _vm._v(" "), _c("th", [_vm._v("Menaces (SRC)")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      colspan: "5"
    }
  }, [_vm._v("Analyse financière ")])]), _vm._v(" "), _c("tr", [_c("td", {
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("Eléments ")]), _vm._v(" "), _c("td", {
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("Proposition CAF")]), _vm._v(" "), _c("td", {
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("Proposition ARC")]), _vm._v(" "), _c("td", {
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("Proposition SRC")]), _vm._v(" "), _c("td", {
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("Justification SRC")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      colspan: "6"
    }
  }, [_vm._v("Analyse financière (bilan) ")])]), _vm._v(" "), _c("tr", [_c("td", {
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("Eléments ")]), _vm._v(" "), _c("td", {
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("Proposition CAF")]), _vm._v(" "), _c("td", {
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("Proposition ARC")]), _vm._v(" "), _c("td", {
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("Proposition SRC")]), _vm._v(" "), _c("td", {
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("Justification SRC")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      colspan: "5"
    }
  }, [_vm._v("Analyse du client et de son activité\n                            ")])]), _vm._v(" "), _c("tr", [_c("td", {
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("Analyse des risques")]), _vm._v(" "), _c("td", {
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("CAF")]), _vm._v(" "), _c("td", {
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("ARC")]), _vm._v(" "), _c("td", {
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("SRC")]), _vm._v(" "), _c("td", {
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("Avis SRC (si différent)")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      colspan: "5"
    }
  }, [_vm._v("Analyse global des risques de crédit - AVIS\n                                du SRC\n                            ")])]), _vm._v(" "), _c("tr", [_c("td", {
    staticStyle: {
      "font-weight": "600"
    }
  }), _vm._v(" "), _c("td", {
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("Analyse")]), _vm._v(" "), _c("td", {
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("Avis du SRC")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("th", {
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      colspan: "5"
    }
  }, [_vm._v("\n                               Conditions additionnelles (non proposées par l'agence) - Avant décaissement\n                            ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("th", {
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      colspan: "5"
    }
  }, [_vm._v("\n                               Conditions  additionnelles (non proposées par l'agence) - Après décaissement / recommandations de suivi (monitoring)\n                            ")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/avis_scr_filiale/AV3.vue?vue&type=style&index=0&id=d5b527b4&lang=css&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/avis_scr_filiale/AV3.vue?vue&type=style&index=0&id=d5b527b4&lang=css&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.bg-grey[data-v-d5b527b4] {\r\n    background-color: #f4f3f3;\r\n    font-weight: 600;\n}\nth[data-v-d5b527b4] {\r\n    background: #f4f3f3;\n}\n.lgcrd[data-v-d5b527b4] {\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    color: #dc0030;\r\n    text-align: center;\n}\n.head-memorandum-title[data-v-d5b527b4] {\r\n    margin-top: 15px;\r\n    padding: 16px;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    background-color: #34495e;\r\n    border: 2px solid #575759;\r\n    box-shadow: 1px 3px 4px #ddd;\r\n    font-size: 16px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    border-radius: 10px;\r\n    margin-bottom: 15px;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/avis_scr_filiale/AV3.vue?vue&type=style&index=0&id=d5b527b4&lang=css&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/avis_scr_filiale/AV3.vue?vue&type=style&index=0&id=d5b527b4&lang=css&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AV3_vue_vue_type_style_index_0_id_d5b527b4_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AV3.vue?vue&type=style&index=0&id=d5b527b4&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/avis_scr_filiale/AV3.vue?vue&type=style&index=0&id=d5b527b4&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AV3_vue_vue_type_style_index_0_id_d5b527b4_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AV3_vue_vue_type_style_index_0_id_d5b527b4_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/offview/microfinance/cofina/avis_scr_filiale/AV3.vue":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/offview/microfinance/cofina/avis_scr_filiale/AV3.vue ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AV3_vue_vue_type_template_id_d5b527b4_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AV3.vue?vue&type=template&id=d5b527b4&scoped=true */ "./resources/js/components/offview/microfinance/cofina/avis_scr_filiale/AV3.vue?vue&type=template&id=d5b527b4&scoped=true");
/* harmony import */ var _AV3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AV3.vue?vue&type=script&lang=js */ "./resources/js/components/offview/microfinance/cofina/avis_scr_filiale/AV3.vue?vue&type=script&lang=js");
/* harmony import */ var _AV3_vue_vue_type_style_index_0_id_d5b527b4_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AV3.vue?vue&type=style&index=0&id=d5b527b4&lang=css&scoped=true */ "./resources/js/components/offview/microfinance/cofina/avis_scr_filiale/AV3.vue?vue&type=style&index=0&id=d5b527b4&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AV3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _AV3_vue_vue_type_template_id_d5b527b4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _AV3_vue_vue_type_template_id_d5b527b4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "d5b527b4",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/offview/microfinance/cofina/avis_scr_filiale/AV3.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/offview/microfinance/cofina/avis_scr_filiale/AV3.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/offview/microfinance/cofina/avis_scr_filiale/AV3.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AV3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AV3.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/avis_scr_filiale/AV3.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AV3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/offview/microfinance/cofina/avis_scr_filiale/AV3.vue?vue&type=style&index=0&id=d5b527b4&lang=css&scoped=true":
/*!**********************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/microfinance/cofina/avis_scr_filiale/AV3.vue?vue&type=style&index=0&id=d5b527b4&lang=css&scoped=true ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AV3_vue_vue_type_style_index_0_id_d5b527b4_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AV3.vue?vue&type=style&index=0&id=d5b527b4&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/avis_scr_filiale/AV3.vue?vue&type=style&index=0&id=d5b527b4&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/offview/microfinance/cofina/avis_scr_filiale/AV3.vue?vue&type=template&id=d5b527b4&scoped=true":
/*!********************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/microfinance/cofina/avis_scr_filiale/AV3.vue?vue&type=template&id=d5b527b4&scoped=true ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AV3_vue_vue_type_template_id_d5b527b4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AV3_vue_vue_type_template_id_d5b527b4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AV3_vue_vue_type_template_id_d5b527b4_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AV3.vue?vue&type=template&id=d5b527b4&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/avis_scr_filiale/AV3.vue?vue&type=template&id=d5b527b4&scoped=true");


/***/ })

}]);