"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_offview_bank_nsia_memo_scene_memo_PPO6_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_memo/PPO6.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_memo/PPO6.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_connects_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../services/connects.service */ "./resources/js/services/connects.service.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "PPO6",
  props: {
    dossier_credit: Object
  },
  created: function created() {
    this.loadData();
  },
  data: function data() {
    var _this$dossier_credit, _this$dossier_credit2, _this$dossier_credit3, _this$dossier_credit4, _this$dossier_credit5, _this$dossier_credit6, _this$dossier_credit7, _this$dossier_credit8, _this$dossier_credit9;
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
      nom: "",
      prenoms: "",
      agence: "",
      connectsHost: _services_connects_service__WEBPACK_IMPORTED_MODULE_0__["default"].loadablehost(),
      isLoadingFile: false,
      nombreEcheance: ""
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
      var _this$dossier_credit0, _this$data_tb;
      if (((_this$dossier_credit0 = this.dossier_credit) === null || _this$dossier_credit0 === void 0 ? void 0 : _this$dossier_credit0.caf_recorded_file.client) != undefined) {
        var _this$dossier_credit1, _this$dossier_credit10;
        var explodeName = (_this$dossier_credit1 = this.dossier_credit) === null || _this$dossier_credit1 === void 0 || (_this$dossier_credit1 = _this$dossier_credit1.caf_recorded_file) === null || _this$dossier_credit1 === void 0 || (_this$dossier_credit1 = _this$dossier_credit1.client) === null || _this$dossier_credit1 === void 0 ? void 0 : _this$dossier_credit1.nomcli.split(" ");
        this.nom = explodeName.shift();
        this.prenoms = explodeName.join(" ");
        this.agence = (_this$dossier_credit10 = this.dossier_credit) === null || _this$dossier_credit10 === void 0 || (_this$dossier_credit10 = _this$dossier_credit10[this.determineCredPubTablesFromDosCred(this.dossier_credit)[1]]) === null || _this$dossier_credit10 === void 0 ? void 0 : _this$dossier_credit10.filiale;
      }
      var frequence_mois = parseInt(this.data_tb9.frequence_mois);
      var frequence_versement = parseInt(this.data_tb9.frequence_versement);
      this.nombreEcheance = ((_this$data_tb = this.data_tb9) === null || _this$data_tb === void 0 ? void 0 : _this$data_tb.duree_credit) * frequence_versement / frequence_mois;
      this.getFiles();
    },
    formatAmount: function formatAmount(x) {
      var _x$toString;
      return x === null || x === void 0 || (_x$toString = x.toString()) === null || _x$toString === void 0 ? void 0 : _x$toString.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
    convertInt: function convertInt(n) {
      var _n$toString;
      return Number(n === null || n === void 0 || (_n$toString = n.toString()) === null || _n$toString === void 0 ? void 0 : _n$toString.replace(/\s/g, ""));
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
      var _this$data_tb2,
        _this2 = this;
      if ((_this$data_tb2 = this.data_tb7) !== null && _this$data_tb2 !== void 0 && _this$data_tb2.pieces_versees_list && this.data_tb7.pieces_versees_list.length > 0) {
        this.isLoadingFile = true;
        this.$axios.post(this.connectsHost + "api/get-files", {
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
              _this2.data_tb7.pieces_versees_list[index]["files"] = count;
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
      var _this$data_tb3,
        _this3 = this,
        _this$data_tb4;
      var data = [];
      if ((_this$data_tb3 = this.data_tb2) !== null && _this$data_tb3 !== void 0 && _this$data_tb3.engagements_en_cours) {
        this.data_tb2.engagements_en_cours.forEach(function (element) {
          var find = false;
          data.forEach(function (el) {
            if (el.libelle == element.libelle) {
              find = true;
              el.montant_emprunteur = _this3.formatAmount(_this3.convertInt(el.montant_emprunteur) + _this3.convertInt(element.montant));
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
      if ((_this$data_tb4 = this.data_tb2) !== null && _this$data_tb4 !== void 0 && (_this$data_tb4 = _this$data_tb4.conjoint) !== null && _this$data_tb4 !== void 0 && _this$data_tb4.engagements_en_cours) {
        var _this$data_tb2$conjoi;
        (_this$data_tb2$conjoi = this.data_tb2.conjoint) === null || _this$data_tb2$conjoi === void 0 || _this$data_tb2$conjoi.engagements_en_cours.forEach(function (element) {
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_memo/PPO6.vue?vue&type=template&id=2aaa288e&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_memo/PPO6.vue?vue&type=template&id=2aaa288e&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$data_tb, _vm$data_tb2, _vm$data_tb3, _vm$data_tb4, _vm$data_tb5, _vm$data_tb6, _vm$data_tb7, _vm$data_tb8, _vm$data_tb9, _vm$data_tb0, _vm$data_tb1, _vm$data_tb10, _vm$data_tb11, _vm$data_tb12, _vm$data_tb13, _vm$data_tb14, _vm$data_tb15, _vm$data_tb16, _vm$data_tb17, _vm$data_tb18, _vm$data_tb19, _vm$data_tb20, _vm$data_tb21, _vm$data_tb22, _vm$data_tb23, _vm$data_tb24;
  var _vm = this,
    _c = _vm._self._c;
  return _vm.data_tb1 || _vm.data_tb6 ? _c("div", {
    staticClass: "row"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "col-12 mt-3"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_c("tbody", {
    staticStyle: {
      "font-size": "0.9rem"
    }
  }, [_c("tr", [_vm._m(1), _vm._v(" "), _c("td", {
    staticClass: "col-md-3 pl-4 text-nowrap"
  }, [_vm._v("\n                        " + _vm._s(_vm.formatAmount((_vm$data_tb = _vm.data_tb1) === null || _vm$data_tb === void 0 ? void 0 : _vm$data_tb.montant_credit)) + "\n                    ")]), _vm._v(" "), _vm._m(2), _vm._v(" "), _c("td", {
    staticClass: "col-md-3 pl-4 text-nowrap"
  }, [_vm._v(_vm._s((_vm$data_tb2 = _vm.data_tb1) === null || _vm$data_tb2 === void 0 ? void 0 : _vm$data_tb2.taux) + " %")])]), _vm._v(" "), _c("tr", [_vm._m(3), _vm._v(" "), _c("td", {
    staticClass: "col-md-3 pl-4 text-nowrap"
  }, [_c("span", [_vm._v(_vm._s((_vm$data_tb3 = _vm.data_tb1) === null || _vm$data_tb3 === void 0 ? void 0 : _vm$data_tb3.duree_credit) + " (Mois)")]), _vm._v(" "), _c("br"), _vm._v(" "), ((_vm$data_tb4 = _vm.data_tb1) === null || _vm$data_tb4 === void 0 ? void 0 : _vm$data_tb4.mode_paiement_demande) == "In fine" ? _c("span", [_vm._v(_vm._s((_vm$data_tb5 = _vm.data_tb1) === null || _vm$data_tb5 === void 0 ? void 0 : _vm$data_tb5.mode_paiement_demande))]) : _c("span", [_vm._v(_vm._s(_vm.nombreEcheance) + " (" + _vm._s(!["", null, undefined].includes((_vm$data_tb6 = _vm.data_tb1) === null || _vm$data_tb6 === void 0 ? void 0 : _vm$data_tb6.mode_paiement_demande) ? (_vm$data_tb7 = _vm.data_tb1) === null || _vm$data_tb7 === void 0 ? void 0 : _vm$data_tb7.mode_paiement_demande : "Mensuelle") + ")")])]), _vm._v(" "), _vm._m(4), _vm._v(" "), _c("td", {
    staticClass: "col-md-3 pl-4 text-nowrap"
  }, [_vm._v("\n                        " + _vm._s((_vm$data_tb8 = _vm.data_tb1) === null || _vm$data_tb8 === void 0 ? void 0 : _vm$data_tb8.r_mensualite) + "\n                    ")])]), _vm._v(" "), _c("tr", [_vm._m(5), _vm._v(" "), _c("td", {
    staticClass: "col-md-3 pl-4 text-nowrap"
  }, [_vm._v("\n                        " + _vm._s((_vm$data_tb9 = _vm.data_tb1) === null || _vm$data_tb9 === void 0 ? void 0 : _vm$data_tb9.r_interet) + "\n                    ")]), _vm._v(" "), _vm._m(6), _vm._v(" "), _c("td", {
    staticClass: "col-md-3 pl-4 text-nowrap"
  }, [_vm._v("\n                        " + _vm._s((_vm$data_tb0 = _vm.data_tb1) === null || _vm$data_tb0 === void 0 ? void 0 : _vm$data_tb0.r_ttcredit) + "\n                    ")])]), _vm._v(" "), _c("tr", [_vm._m(7), _vm._v(" "), _c("td", {
    staticClass: "col-md-3 pl-4 text-nowrap"
  }, [_vm._v("\n                        " + _vm._s(_vm.formatAmount((_vm$data_tb1 = _vm.data_tb3) === null || _vm$data_tb1 === void 0 ? void 0 : _vm$data_tb1.quotite_cessible)) + "\n                    ")]), _vm._v(" "), _vm._m(8), _vm._v(" "), _c("td", {
    staticClass: "col-md-3 pl-4 text-nowrap"
  }, [_vm._v("\n                        " + _vm._s(_vm.formatAmount((_vm$data_tb10 = _vm.data_tb3) === null || _vm$data_tb10 === void 0 ? void 0 : _vm$data_tb10.quotite_cessible_disponible)) + "\n                    ")])])])]), _vm._v(" "), (_vm$data_tb11 = _vm.data_tb6) !== null && _vm$data_tb11 !== void 0 && _vm$data_tb11.avis_1 ? _c("table", {
    staticClass: "table table-bordered mb-4 MT-3"
  }, [_vm._m(9), _vm._v(" "), _c("tbody", {
    staticStyle: {
      "font-size": "0.9rem"
    }
  }, [_c("tr", [_c("td", [_c("div", [_c("span", {
    domProps: {
      innerHTML: _vm._s((_vm$data_tb12 = _vm.data_tb6) === null || _vm$data_tb12 === void 0 ? void 0 : _vm$data_tb12.avis_1)
    }
  })])])])])]) : _vm._e(), _vm._v(" "), (_vm$data_tb13 = _vm.data_tb6) !== null && _vm$data_tb13 !== void 0 && _vm$data_tb13.avis_2 ? _c("table", {
    staticClass: "table table-bordered mb-4"
  }, [_vm._m(10), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", [_c("div", [_vm._m(11), _vm._v(" "), _c("span", {
    domProps: {
      innerHTML: _vm._s((_vm$data_tb14 = _vm.data_tb6) === null || _vm$data_tb14 === void 0 ? void 0 : _vm$data_tb14.avis_2)
    }
  })])])])])]) : _vm._e(), _vm._v(" "), (_vm$data_tb15 = _vm.data_tb6) !== null && _vm$data_tb15 !== void 0 && _vm$data_tb15.avis_3 ? _c("table", {
    staticClass: "table table-bordered mb-4"
  }, [_vm._m(12), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", [_c("div", [_vm._m(13), _vm._v(" "), _c("span", {
    domProps: {
      innerHTML: _vm._s((_vm$data_tb16 = _vm.data_tb6) === null || _vm$data_tb16 === void 0 ? void 0 : _vm$data_tb16.avis_3)
    }
  })])])])])]) : _vm._e(), _vm._v(" "), (_vm$data_tb17 = _vm.data_tb6) !== null && _vm$data_tb17 !== void 0 && _vm$data_tb17.avis_4 ? _c("table", {
    staticClass: "table table-bordered mb-4"
  }, [_vm._m(14), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", [_c("div", [_vm._m(15), _vm._v(" "), _c("span", {
    domProps: {
      innerHTML: _vm._s((_vm$data_tb18 = _vm.data_tb6) === null || _vm$data_tb18 === void 0 ? void 0 : _vm$data_tb18.avis_final)
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "mt-3 col-md-6"
  }, [_c("label", [_c("b", [_vm._v("Montant : ")]), _vm._v(" " + _vm._s((_vm$data_tb19 = _vm.data_tb6) === null || _vm$data_tb19 === void 0 ? void 0 : _vm$data_tb19.montant))])]), _vm._v(" "), _c("div", {
    staticClass: "mt-3 col-md-6"
  }, [_c("label", [_c("b", [_vm._v("Durée : ")]), _vm._v(" " + _vm._s((_vm$data_tb20 = _vm.data_tb6) === null || _vm$data_tb20 === void 0 ? void 0 : _vm$data_tb20.duree) + " mois")])]), _vm._v(" "), _c("div", {
    staticClass: "mt-3 col-md-6"
  }, [_c("label", [_c("b", [_vm._v("Echéances(nombres) : ")]), _vm._v(" " + _vm._s((_vm$data_tb21 = _vm.data_tb6) === null || _vm$data_tb21 === void 0 ? void 0 : _vm$data_tb21.echeance_nombre) + " ")])]), _vm._v(" "), _c("div", {
    staticClass: "mt-3 col-md-6"
  }, [_c("label", [_c("b", [_vm._v("Echéances(montant) : ")]), _vm._v(" " + _vm._s((_vm$data_tb22 = _vm.data_tb6) === null || _vm$data_tb22 === void 0 ? void 0 : _vm$data_tb22.echeance_montant))])])]), _vm._v(" "), _c("div", {
    staticClass: "mt-3"
  }, [_c("label", {
    staticClass: "fw-bold"
  }, [_vm._v("Garanties retenues")]), _vm._v(" "), _c("span", {
    staticClass: "d-block pl-3",
    domProps: {
      innerHTML: _vm._s((_vm$data_tb23 = _vm.data_tb6) === null || _vm$data_tb23 === void 0 ? void 0 : _vm$data_tb23.garanties_retenues)
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "mt-3"
  }, [_c("label", {
    staticClass: "fw-bold"
  }, [_vm._v("Classification")]), _vm._v(" "), _c("span", {
    staticClass: "d-block pl-3",
    domProps: {
      innerHTML: _vm._s((_vm$data_tb24 = _vm.data_tb6) === null || _vm$data_tb24 === void 0 ? void 0 : _vm$data_tb24.classification)
    }
  })])])])])]) : _vm._e()])]) : _vm._e();
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
  }, [_vm._v("\n            DECISION DE CREDIT\n        ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "col-md-3 pl-4 text-nowrap"
  }, [_c("b", [_vm._v("Montant Crédit")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "col-md-3 pl-4 text-nowrap"
  }, [_c("b", [_vm._v("Taux Crédit")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "col-md-3 pl-4 text-nowrap"
  }, [_c("b", [_vm._v("Durée du Crédit")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "col-md-3 pl-4 text-nowrap"
  }, [_c("b", [_vm._v("Mensualité Crédit")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "col-md-3 pl-4 text-nowrap"
  }, [_c("b", [_vm._v("Intérêt Total Crédit")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "col-md-3 pl-4 text-nowrap"
  }, [_c("b", [_vm._v("Total à rembourser")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "col-md-3 pl-4 text-nowrap"
  }, [_c("b", [_vm._v("Quotité cessible")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "col-md-3 pl-4 text-nowrap"
  }, [_c("b", [_vm._v("Quotité disponible")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "bg-ed-primary"
  }, [_c("tr", [_c("th", {
    staticClass: "col-12 text-center py-2 m-0 text-uppercase"
  }, [_vm._v("Avis chargé clientèle")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "bg-ed-primary"
  }, [_c("tr", [_c("th", {
    staticClass: "col-12 text-center py-2 m-0 text-uppercase"
  }, [_vm._v("Deuxième avis")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_c("b", [_vm._v("Commentaire")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "bg-ed-primary"
  }, [_c("tr", [_c("th", {
    staticClass: "col-12 text-center py-2 m-0 text-uppercase"
  }, [_vm._v("Troisième avis (Direction des risques)")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_c("b", [_vm._v("Commentaire")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "bg-ed-primary"
  }, [_c("tr", [_c("th", {
    staticClass: "col-12 text-center py-2 m-0 text-uppercase"
  }, [_vm._v("Décison finale")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_c("b", [_vm._v("Commentaire")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_memo/PPO6.vue?vue&type=style&index=0&id=2aaa288e&lang=css&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_memo/PPO6.vue?vue&type=style&index=0&id=2aaa288e&lang=css&scoped=true ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.bg-grey[data-v-2aaa288e] {\r\n    background-color: #f4f3f3;\n}\nth[data-v-2aaa288e] {\r\n    background: #f4f3f3 !important;\n}\n.vertical-middle[data-v-2aaa288e] {\r\n    vertical-align: middle;\n}\n.font-bold[data-v-2aaa288e] {\r\n    font-weight: bold;\n}\n.head-memorandum-title[data-v-2aaa288e] {\r\n    margin-top: 15px;\r\n    padding: 16px;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    background-color: #34495e;\r\n    border: 2px solid #575759;\r\n    box-shadow: 1px 3px 4px #ddd;\r\n    font-size: 16px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    border-radius: 10px;\r\n    margin-bottom: 15px;\n}\n.text-uppercase[data-v-2aaa288e] {\r\n    text-transform: uppercase;\n}\n._border_right[data-v-2aaa288e] {\r\n    border-right: 1px solid;\n}\n._border_bottom[data-v-2aaa288e] {\r\n    border-bottom: 1px solid;\n}\n.pl-10-px[data-v-2aaa288e] {\r\n    padding-left: 10px;\n}\n.pl-30-px[data-v-2aaa288e] {\r\n    padding-left: 30px;\n}\n.pl-3[data-v-2aaa288e] {\r\n    padding-left: 10px;\n}\n.form-check-input[data-v-2aaa288e]:disabled {\r\n    opacity: 1;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_memo/PPO6.vue?vue&type=style&index=0&id=2aaa288e&lang=css&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_memo/PPO6.vue?vue&type=style&index=0&id=2aaa288e&lang=css&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PPO6_vue_vue_type_style_index_0_id_2aaa288e_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PPO6.vue?vue&type=style&index=0&id=2aaa288e&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_memo/PPO6.vue?vue&type=style&index=0&id=2aaa288e&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PPO6_vue_vue_type_style_index_0_id_2aaa288e_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PPO6_vue_vue_type_style_index_0_id_2aaa288e_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/memo/scene_memo/PPO6.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/memo/scene_memo/PPO6.vue ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PPO6_vue_vue_type_template_id_2aaa288e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PPO6.vue?vue&type=template&id=2aaa288e&scoped=true */ "./resources/js/components/offview/bank/nsia/memo/scene_memo/PPO6.vue?vue&type=template&id=2aaa288e&scoped=true");
/* harmony import */ var _PPO6_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PPO6.vue?vue&type=script&lang=js */ "./resources/js/components/offview/bank/nsia/memo/scene_memo/PPO6.vue?vue&type=script&lang=js");
/* harmony import */ var _PPO6_vue_vue_type_style_index_0_id_2aaa288e_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PPO6.vue?vue&type=style&index=0&id=2aaa288e&lang=css&scoped=true */ "./resources/js/components/offview/bank/nsia/memo/scene_memo/PPO6.vue?vue&type=style&index=0&id=2aaa288e&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PPO6_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _PPO6_vue_vue_type_template_id_2aaa288e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _PPO6_vue_vue_type_template_id_2aaa288e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2aaa288e",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/offview/bank/nsia/memo/scene_memo/PPO6.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/memo/scene_memo/PPO6.vue?vue&type=script&lang=js":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/memo/scene_memo/PPO6.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PPO6_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PPO6.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_memo/PPO6.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PPO6_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/memo/scene_memo/PPO6.vue?vue&type=style&index=0&id=2aaa288e&lang=css&scoped=true":
/*!************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/memo/scene_memo/PPO6.vue?vue&type=style&index=0&id=2aaa288e&lang=css&scoped=true ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PPO6_vue_vue_type_style_index_0_id_2aaa288e_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PPO6.vue?vue&type=style&index=0&id=2aaa288e&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_memo/PPO6.vue?vue&type=style&index=0&id=2aaa288e&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/memo/scene_memo/PPO6.vue?vue&type=template&id=2aaa288e&scoped=true":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/memo/scene_memo/PPO6.vue?vue&type=template&id=2aaa288e&scoped=true ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PPO6_vue_vue_type_template_id_2aaa288e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PPO6_vue_vue_type_template_id_2aaa288e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PPO6_vue_vue_type_template_id_2aaa288e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PPO6.vue?vue&type=template&id=2aaa288e&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_memo/PPO6.vue?vue&type=template&id=2aaa288e&scoped=true");


/***/ })

}]);