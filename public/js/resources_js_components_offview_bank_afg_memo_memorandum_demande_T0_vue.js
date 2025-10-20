"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_offview_bank_afg_memo_memorandum_demande_T0_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/memorandum_demande/T0.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/memorandum_demande/T0.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    dossier_credit: Object
  },
  methods: {
    getNiveauPouvoir: function getNiveauPouvoir() {
      var _this$dossier_credit, _this$dossier_credit$, _this$dossier_credit2, _this$dossier_credit$2, _this$dossier_credit3, _final_pub_workflow$r, _final_pub_workflow;
      if (((_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 || (_this$dossier_credit = _this$dossier_credit.workflow) === null || _this$dossier_credit === void 0 || (_this$dossier_credit = _this$dossier_credit.current_stage) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.stage_id) == 0) {
        return;
      }
      var pub_workflow = (_this$dossier_credit$ = (_this$dossier_credit2 = this.dossier_credit) === null || _this$dossier_credit2 === void 0 ? void 0 : _this$dossier_credit2.pub_workflow) !== null && _this$dossier_credit$ !== void 0 ? _this$dossier_credit$ : [];
      var final_outcome = (_this$dossier_credit$2 = (_this$dossier_credit3 = this.dossier_credit) === null || _this$dossier_credit3 === void 0 ? void 0 : _this$dossier_credit3.final_outcome) !== null && _this$dossier_credit$2 !== void 0 ? _this$dossier_credit$2 : null;
      var final_pub_workflow = pub_workflow.at(-1);
      if (!['', null, undefined].includes(final_outcome) && (final_outcome === null || final_outcome === void 0 ? void 0 : final_outcome.outcome) != 0) {
        final_pub_workflow = pub_workflow[final_outcome === null || final_outcome === void 0 ? void 0 : final_outcome.stage_id];
      }
      this.niveau_pouvoir = (_final_pub_workflow$r = (_final_pub_workflow = final_pub_workflow) === null || _final_pub_workflow === void 0 ? void 0 : _final_pub_workflow.responsible_role_sigle) !== null && _final_pub_workflow$r !== void 0 ? _final_pub_workflow$r : "";
    },
    formatDate: function formatDate(date) {
      if (['', null, undefined].includes(date)) return '';
      var options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
      };
      return new Date(date).toLocaleDateString('fr', options);
    },
    removeTags: function removeTags(str) {
      if (str === null || str === '') return false;else str = str.toString();

      // Regular expression to identify HTML tags in
      // the input string. Replacing the identified
      // HTML tag with a null string.
      return str.replace(/(<([^>]+)>)/ig, '');
    },
    loadNoteVerification: function loadNoteVerification() {
      var _this = this;
      EventBus.$emit("open-extra-file-explorer");
      setTimeout(function () {
        EventBus.$emit("data-extra-file-explorer", {
          name: "Pièce justificative {(*)}piece_justificative_note_" + _this.$route.params.templateId,
          view: true
        });
      }, 500);
    }
  },
  data: function data() {
    return {
      niveau_pouvoir: "",
      type_demande_list: [{
        "id": 1,
        "name": "Première demande"
      }, {
        "id": 2,
        "name": "Renouvellement simple ou avec extension *"
      }, {
        "id": 3,
        "name": "Modification de lignes"
      }, {
        "id": 4,
        "name": "Restructuration/incident de paiement"
      }]
    };
  },
  computed: {
    listActionnaire: function listActionnaire() {
      var _this$dossier_credit4;
      if (!Boolean((_this$dossier_credit4 = this.dossier_credit) === null || _this$dossier_credit4 === void 0 || (_this$dossier_credit4 = _this$dossier_credit4.cred_pub_tb_00) === null || _this$dossier_credit4 === void 0 ? void 0 : _this$dossier_credit4.actionnariats)) {
        return [];
      } else {
        var _this$dossier_credit5;
        return (_this$dossier_credit5 = this.dossier_credit) === null || _this$dossier_credit5 === void 0 || (_this$dossier_credit5 = _this$dossier_credit5.cred_pub_tb_00) === null || _this$dossier_credit5 === void 0 ? void 0 : _this$dossier_credit5.actionnariats.filter(function (el) {
          return (el === null || el === void 0 ? void 0 : el.nom_actionnaire) != null && el.pourcentage_participation != "0.00";
        });
      }
    },
    compte_contribuable_label: function compte_contribuable_label() {
      var _this$authenticatedUs;
      if (((_this$authenticatedUs = this.authenticatedUser) === null || _this$authenticatedUs === void 0 ? void 0 : _this$authenticatedUs.filiale) == "AFGB CM") {
        return 'N° IDENTIFIANT UNIQUE';
      } else {
        return 'N° COMPTE CONTRIBUABLE';
      }
    }
  },
  mounted: function mounted() {
    this.getNiveauPouvoir();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/memorandum_demande/T0.vue?vue&type=template&id=c51973e4&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/memorandum_demande/T0.vue?vue&type=template&id=c51973e4&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$dossier_credit2, _vm$dossier_credit3, _vm$dossier_credit4, _vm$dossier_credit5, _vm$dossier_credit6, _vm$dossier_credit7, _vm$dossier_credit8, _vm$dossier_credit9, _vm$dossier_credit0, _vm$dossier_credit1, _vm$dossier_credit10, _vm$dossier_credit11, _vm$dossier_credit12, _vm$dossier_credit13, _vm$dossier_credit14, _vm$dossier_credit15, _vm$dossier_credit16, _vm$dossier_credit17, _vm$dossier_credit18, _vm$dossier_credit19, _vm$dossier_credit20, _vm$dossier_credit21, _vm$authenticatedUser, _vm$dossier_credit22, _vm$dossier_credit23, _vm$dossier_credit24, _vm$dossier_credit25, _vm$dossier_credit26, _vm$dossier_credit27, _vm$dossier_credit28, _vm$dossier_credit29, _vm$dossier_credit30, _vm$dossier_credit31, _vm$dossier_credit32, _vm$dossier_credit33, _vm$dossier_credit34, _vm$dossier_credit35, _vm$dossier_credit36, _vm$dossier_credit37, _vm$dossier_credit38, _vm$dossier_credit39, _vm$dossier_credit40, _vm$dossier_credit41, _vm$dossier_credit42, _vm$dossier_credit43, _vm$dossier_credit44, _vm$dossier_credit45;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "justify-content-center"
  }, [_vm.dossier_credit.tbs_in_use.includes("tb00") ? _c("div", {
    staticClass: "table-responsive mt-3 pt-3"
  }, [_c("table", {
    staticClass: "table table-bordered mb-4"
  }, [_vm._m(0), _vm._v(" "), _c("tbody", [_c("tr", _vm._l(_vm.type_demande_list, function (td) {
    var _vm$dossier_credit;
    return _c("td", {
      staticClass: "text-center text-uppercase col-3"
    }, [_c("input", {
      staticClass: "form-check-input mb-2",
      attrs: {
        type: "checkbox",
        disabled: ""
      },
      domProps: {
        checked: ((_vm$dossier_credit = _vm.dossier_credit) === null || _vm$dossier_credit === void 0 || (_vm$dossier_credit = _vm$dossier_credit.cred_pub_tb_00) === null || _vm$dossier_credit === void 0 ? void 0 : _vm$dossier_credit.type_demande) == td.name
      }
    }), _vm._v(" "), _c("br"), _vm._v(" "), _c("b", [_vm._v(_vm._s(td.name))])]);
  }), 0)])]), _vm._v(" "), ["", null, undefined, false].includes((_vm$dossier_credit2 = _vm.dossier_credit) === null || _vm$dossier_credit2 === void 0 ? void 0 : _vm$dossier_credit2.is_retail_doss) ? [_c("table", {
    staticClass: "table table-bordered mb-4"
  }, [_vm._m(1), _vm._v(" "), _c("tbody", [_c("tr", [((_vm$dossier_credit3 = _vm.dossier_credit) === null || _vm$dossier_credit3 === void 0 || (_vm$dossier_credit3 = _vm$dossier_credit3.cred_pub_tb_00) === null || _vm$dossier_credit3 === void 0 ? void 0 : _vm$dossier_credit3.segment_entreprise) === "Secteur Public" ? _c("td", {
    staticClass: "size"
  }, [_c("center", [_c("input", {
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      id: "Entreprises",
      name: "Entreprises",
      checked: "",
      disabled: ""
    }
  })]), _vm._v(" "), _c("center", [_c("b", [_vm._v("\n                                        Secteur Public\n                                    ")])])], 1) : _c("td", {
    staticClass: "size"
  }, [_c("center", [_c("input", {
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      id: "Entreprises",
      name: "Entreprises",
      disabled: ""
    }
  })]), _vm._v(" "), _c("center", [_c("b", [_vm._v("\n                                        Secteur Public\n                                    ")])])], 1), _vm._v(" "), ((_vm$dossier_credit4 = _vm.dossier_credit) === null || _vm$dossier_credit4 === void 0 || (_vm$dossier_credit4 = _vm$dossier_credit4.cred_pub_tb_00) === null || _vm$dossier_credit4 === void 0 ? void 0 : _vm$dossier_credit4.segment_entreprise) === "Grandes Entreprises" ? _c("td", {
    staticClass: "size"
  }, [_c("center", [_c("input", {
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      id: "TPI",
      name: "TPI",
      checked: "",
      disabled: ""
    }
  })]), _vm._v(" "), _c("center", [_c("b", [_vm._v("\n                                        Grandes Entreprises\n                                    ")])])], 1) : _c("td", {
    staticClass: "size"
  }, [_c("center", [_c("input", {
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      id: "TPI",
      name: "TPI",
      disabled: ""
    }
  })]), _vm._v(" "), _c("center", [_c("b", [_vm._v("\n                                        Grandes Entreprises\n                                    ")])])], 1), _vm._v(" "), ((_vm$dossier_credit5 = _vm.dossier_credit) === null || _vm$dossier_credit5 === void 0 || (_vm$dossier_credit5 = _vm$dossier_credit5.cred_pub_tb_00) === null || _vm$dossier_credit5 === void 0 ? void 0 : _vm$dossier_credit5.segment_entreprise) === "PME/PMI" ? _c("td", {
    staticClass: "size"
  }, [_c("center", [_c("input", {
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      id: "Crédit Bail",
      name: "Crédit Bail",
      checked: "",
      disabled: ""
    }
  })]), _vm._v(" "), _c("center", [_c("b", [_vm._v("\n                                        PME/PMI\n                                    ")])])], 1) : _c("td", {
    staticClass: "size"
  }, [_c("center", [_c("input", {
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      id: "Crédit Bail",
      name: "Crédit Bail",
      disabled: ""
    }
  })]), _vm._v(" "), _c("center", [_c("b", [_vm._v("\n                                        PME/PMI\n                                    ")])])], 1), _vm._v(" "), ((_vm$dossier_credit6 = _vm.dossier_credit) === null || _vm$dossier_credit6 === void 0 || (_vm$dossier_credit6 = _vm$dossier_credit6.cred_pub_tb_00) === null || _vm$dossier_credit6 === void 0 ? void 0 : _vm$dossier_credit6.segment_entreprise) === "Professionnel" ? _c("td", {
    staticClass: "size"
  }, [_c("center", [_c("input", {
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      id: "Crédit Bail",
      name: "Crédit Bail",
      checked: "",
      disabled: ""
    }
  })]), _vm._v(" "), _c("center", [_c("b", [_vm._v("\n                                        Professionnel\n                                    ")])])], 1) : _c("td", {
    staticClass: "size"
  }, [_c("center", [_c("input", {
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      id: "Crédit Bail",
      name: "Crédit Bail",
      disabled: ""
    }
  })]), _vm._v(" "), _c("center", [_c("b", [_vm._v("\n                                        Professionnel\n                                    ")])])], 1)])])]), _vm._v(" "), _c("br")] : _vm._e(), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(2), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {
    staticClass: "align-middle",
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("INDICE DU CLIENT")]), _vm._v(" "), _c("td", {
    staticClass: "align-middle"
  }, [_vm._v(_vm._s((_vm$dossier_credit7 = _vm.dossier_credit) === null || _vm$dossier_credit7 === void 0 || (_vm$dossier_credit7 = _vm$dossier_credit7.cred_pub_tb_00) === null || _vm$dossier_credit7 === void 0 ? void 0 : _vm$dossier_credit7.matricule_client))]), _vm._v(" "), _c("td", {
    staticClass: "align-middle",
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("DENOMINATION CLIENT")]), _vm._v(" "), _c("td", {
    staticClass: "align-middle"
  }, [_vm._v(_vm._s((_vm$dossier_credit8 = _vm.dossier_credit) === null || _vm$dossier_credit8 === void 0 || (_vm$dossier_credit8 = _vm$dossier_credit8.cred_pub_tb_00) === null || _vm$dossier_credit8 === void 0 ? void 0 : _vm$dossier_credit8.denomination_client))])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "align-middle",
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("N° COMPTE COURANT")]), _vm._v(" "), _c("td", {
    staticClass: "align-middle"
  }, [_vm._v(_vm._s((_vm$dossier_credit9 = _vm.dossier_credit) === null || _vm$dossier_credit9 === void 0 || (_vm$dossier_credit9 = _vm$dossier_credit9.cred_pub_tb_00) === null || _vm$dossier_credit9 === void 0 ? void 0 : _vm$dossier_credit9.compte_courant))]), _vm._v(" "), _c("td", {
    staticClass: "align-middle",
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v(" " + _vm._s(_vm.compte_contribuable_label) + " ")]), _vm._v(" "), _c("td", {
    staticClass: "align-middle"
  }, [_vm._v(_vm._s((_vm$dossier_credit0 = _vm.dossier_credit) === null || _vm$dossier_credit0 === void 0 || (_vm$dossier_credit0 = _vm$dossier_credit0.cred_pub_tb_00) === null || _vm$dossier_credit0 === void 0 ? void 0 : _vm$dossier_credit0.compte_contribuable))])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "align-middle",
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("GROUPE")]), _vm._v(" "), _c("td", {
    staticClass: "align-middle"
  }, [_vm._v(_vm._s((_vm$dossier_credit1 = _vm.dossier_credit) === null || _vm$dossier_credit1 === void 0 || (_vm$dossier_credit1 = _vm$dossier_credit1.cred_pub_tb_00) === null || _vm$dossier_credit1 === void 0 ? void 0 : _vm$dossier_credit1.groupe))]), _vm._v(" "), _c("td", {
    staticClass: "align-middle",
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("DATE D'OUVERTURE")]), _vm._v(" "), _c("td", {
    staticClass: "align-middle"
  }, [_vm._v(_vm._s(_vm._f("formatDate")((_vm$dossier_credit10 = _vm.dossier_credit) === null || _vm$dossier_credit10 === void 0 || (_vm$dossier_credit10 = _vm$dossier_credit10.cred_pub_tb_00) === null || _vm$dossier_credit10 === void 0 ? void 0 : _vm$dossier_credit10.date_ouverture)))])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "align-middle",
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("ACTIVITE")]), _vm._v(" "), _c("td", {
    staticClass: "align-middle"
  }, [_vm._v(_vm._s((_vm$dossier_credit11 = _vm.dossier_credit) === null || _vm$dossier_credit11 === void 0 || (_vm$dossier_credit11 = _vm$dossier_credit11.cred_pub_tb_00) === null || _vm$dossier_credit11 === void 0 ? void 0 : _vm$dossier_credit11.secteur_activite))]), _vm._v(" "), _c("td", {
    staticClass: "align-middle",
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("NOTATION/COTATION")]), _vm._v(" "), _c("td", {
    staticClass: "align-middle"
  }, [_vm._v(_vm._s((_vm$dossier_credit12 = _vm.dossier_credit) === null || _vm$dossier_credit12 === void 0 || (_vm$dossier_credit12 = _vm$dossier_credit12.cred_pub_tb_00) === null || _vm$dossier_credit12 === void 0 ? void 0 : _vm$dossier_credit12.note_edane))])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "align-middle",
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("ADRESSE/SIEGE SOCIAL")]), _vm._v(" "), _c("td", {
    staticClass: "align-middle"
  }, [_vm._v(_vm._s((_vm$dossier_credit13 = _vm.dossier_credit) === null || _vm$dossier_credit13 === void 0 || (_vm$dossier_credit13 = _vm$dossier_credit13.cred_pub_tb_00) === null || _vm$dossier_credit13 === void 0 ? void 0 : _vm$dossier_credit13.adresse))]), _vm._v(" "), _c("td", {
    staticClass: "align-middle",
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("CLASSIFICATION")]), _vm._v(" "), _c("td", {
    staticClass: "align-middle"
  }, [_vm._v(_vm._s((_vm$dossier_credit14 = _vm.dossier_credit) === null || _vm$dossier_credit14 === void 0 || (_vm$dossier_credit14 = _vm$dossier_credit14.cred_pub_tb_00) === null || _vm$dossier_credit14 === void 0 ? void 0 : _vm$dossier_credit14.classe_risque))])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "align-middle",
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("DATE DE CREATION")]), _vm._v(" "), _c("td", {
    staticClass: "align-middle"
  }, [_vm._v(_vm._s(_vm._f("formatDate")((_vm$dossier_credit15 = _vm.dossier_credit) === null || _vm$dossier_credit15 === void 0 || (_vm$dossier_credit15 = _vm$dossier_credit15.cred_pub_tb_00) === null || _vm$dossier_credit15 === void 0 ? void 0 : _vm$dossier_credit15.date_creation)))]), _vm._v(" "), _c("td", {
    staticClass: "align-middle",
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("CHARGE D'AFFAIRE")]), _vm._v(" "), _c("td", {
    staticClass: "align-middle"
  }, [_vm._v(_vm._s((_vm$dossier_credit16 = _vm.dossier_credit) === null || _vm$dossier_credit16 === void 0 || (_vm$dossier_credit16 = _vm$dossier_credit16.pub_workflow[0]) === null || _vm$dossier_credit16 === void 0 ? void 0 : _vm$dossier_credit16.responsible))])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "align-middle",
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("FORME JURIDIQUE")]), _vm._v(" "), _c("td", {
    staticClass: "align-middle"
  }, [_vm._v(_vm._s((_vm$dossier_credit17 = _vm.dossier_credit) === null || _vm$dossier_credit17 === void 0 || (_vm$dossier_credit17 = _vm$dossier_credit17.cred_pub_tb_00) === null || _vm$dossier_credit17 === void 0 ? void 0 : _vm$dossier_credit17.forme_juridique))]), _vm._v(" "), _c("td", {
    staticClass: "align-middle",
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("PRINCIPAL DIRIGEANT")]), _vm._v(" "), _c("td", {
    staticClass: "align-middle"
  }, [_vm._v(_vm._s((_vm$dossier_credit18 = _vm.dossier_credit) === null || _vm$dossier_credit18 === void 0 || (_vm$dossier_credit18 = _vm$dossier_credit18.cred_pub_tb_00) === null || _vm$dossier_credit18 === void 0 ? void 0 : _vm$dossier_credit18.principal_dirigeant))])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "align-middle",
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("CAPITAL SOCIAL")]), _vm._v(" "), _c("td", {
    staticClass: "align-middle"
  }, [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit19 = _vm.dossier_credit) === null || _vm$dossier_credit19 === void 0 || (_vm$dossier_credit19 = _vm$dossier_credit19.cred_pub_tb_00) === null || _vm$dossier_credit19 === void 0 ? void 0 : _vm$dossier_credit19.capital)))]), _vm._v(" "), _c("td", {
    staticClass: "align-middle",
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("PRINCIPAL ACTIONNAIRE")]), _vm._v(" "), _c("td", {
    staticClass: "align-middle"
  }, [_vm._v(_vm._s((_vm$dossier_credit20 = _vm.dossier_credit) === null || _vm$dossier_credit20 === void 0 || (_vm$dossier_credit20 = _vm$dossier_credit20.cred_pub_tb_00) === null || _vm$dossier_credit20 === void 0 ? void 0 : _vm$dossier_credit20.principal_actionnaire))])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "align-middle",
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("NOUVELLE RELATION")]), _vm._v(" "), _c("td", {
    staticClass: "align-middle"
  }, [_vm._v(_vm._s((_vm$dossier_credit21 = _vm.dossier_credit) === null || _vm$dossier_credit21 === void 0 || (_vm$dossier_credit21 = _vm$dossier_credit21.cred_pub_tb_00) === null || _vm$dossier_credit21 === void 0 ? void 0 : _vm$dossier_credit21.nouvelle_relation))]), _vm._v(" "), ((_vm$authenticatedUser = _vm.authenticatedUser) === null || _vm$authenticatedUser === void 0 ? void 0 : _vm$authenticatedUser.filiale) != "AFGB CM" ? [_c("td", {
    staticClass: "align-middle",
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("CONSENTEMENT BIC")]), _vm._v(" "), _c("td", {
    staticClass: "align-middle"
  }, [_vm._v(_vm._s((_vm$dossier_credit22 = _vm.dossier_credit) === null || _vm$dossier_credit22 === void 0 || (_vm$dossier_credit22 = _vm$dossier_credit22.cred_pub_tb_00) === null || _vm$dossier_credit22 === void 0 ? void 0 : _vm$dossier_credit22.consentement_bic))])] : _vm._e()], 2), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "align-middle",
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("CONTACT DU CLIENT")]), _vm._v(" "), _c("td", {
    staticClass: "align-middle"
  }, [_vm._v(_vm._s((_vm$dossier_credit23 = _vm.dossier_credit) === null || _vm$dossier_credit23 === void 0 || (_vm$dossier_credit23 = _vm$dossier_credit23.cred_pub_tb_00) === null || _vm$dossier_credit23 === void 0 ? void 0 : _vm$dossier_credit23.contact_client))]), _vm._v(" "), _c("td", {
    staticClass: "align-middle",
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("EMAIL DU CLIENT")]), _vm._v(" "), _c("td", {
    staticClass: "align-middle"
  }, [_vm._v(_vm._s((_vm$dossier_credit24 = _vm.dossier_credit) === null || _vm$dossier_credit24 === void 0 || (_vm$dossier_credit24 = _vm$dossier_credit24.cred_pub_tb_00) === null || _vm$dossier_credit24 === void 0 ? void 0 : _vm$dossier_credit24.email_client))])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "align-middle",
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("PAYS")]), _vm._v(" "), _c("td", {
    staticClass: "align-middle"
  }, [_vm._v(_vm._s((_vm$dossier_credit25 = _vm.dossier_credit) === null || _vm$dossier_credit25 === void 0 || (_vm$dossier_credit25 = _vm$dossier_credit25.cred_pub_tb_00) === null || _vm$dossier_credit25 === void 0 ? void 0 : _vm$dossier_credit25.pays))]), _vm._v(" "), _c("td", {
    staticClass: "align-middle",
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("FILIALE")]), _vm._v(" "), _c("td", {
    staticClass: "align-middle"
  }, [_vm._v(_vm._s((_vm$dossier_credit26 = _vm.dossier_credit) === null || _vm$dossier_credit26 === void 0 || (_vm$dossier_credit26 = _vm$dossier_credit26.cred_pub_tb_00) === null || _vm$dossier_credit26 === void 0 ? void 0 : _vm$dossier_credit26.filiale))])]), _vm._v(" "), _c("tr", [_vm._m(3), _vm._v(" "), _c("td", {
    staticClass: "align-middle"
  }, [_vm._v(_vm._s((_vm$dossier_credit27 = _vm.dossier_credit) === null || _vm$dossier_credit27 === void 0 || (_vm$dossier_credit27 = _vm$dossier_credit27.cred_pub_tb_00) === null || _vm$dossier_credit27 === void 0 ? void 0 : _vm$dossier_credit27.agence))]), _vm._v(" "), _vm._m(4), _vm._v(" "), _c("td", {
    staticClass: "align-middle"
  }, [_vm._v(_vm._s((_vm$dossier_credit28 = _vm.dossier_credit) === null || _vm$dossier_credit28 === void 0 || (_vm$dossier_credit28 = _vm$dossier_credit28.cred_pub_tb_00) === null || _vm$dossier_credit28 === void 0 ? void 0 : _vm$dossier_credit28.agence_domiciliation))])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "align-middle",
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("DATE DE RECEPTION DE DEMANDE CLIENT")]), _vm._v(" "), _c("td", {
    staticClass: "align-middle"
  }, [_vm._v(_vm._s(_vm._f("formatDate")((_vm$dossier_credit29 = _vm.dossier_credit) === null || _vm$dossier_credit29 === void 0 || (_vm$dossier_credit29 = _vm$dossier_credit29.cred_pub_tb_00) === null || _vm$dossier_credit29 === void 0 ? void 0 : _vm$dossier_credit29.date_reception_demande_client)))]), _vm._v(" "), _c("td", {
    staticClass: "align-middle",
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("DATE D'ENTREE EN RELATION")]), _vm._v(" "), _c("td", {
    staticClass: "align-middle"
  }, [_vm._v(_vm._s(_vm._f("formatDate")((_vm$dossier_credit30 = _vm.dossier_credit) === null || _vm$dossier_credit30 === void 0 || (_vm$dossier_credit30 = _vm$dossier_credit30.cred_pub_tb_00) === null || _vm$dossier_credit30 === void 0 ? void 0 : _vm$dossier_credit30.date_entre_relation)))])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "align-middle",
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("CODE CLIENTELE")]), _vm._v(" "), _c("td", {
    staticClass: "align-middle"
  }, [_vm._v(_vm._s((_vm$dossier_credit31 = _vm.dossier_credit) === null || _vm$dossier_credit31 === void 0 || (_vm$dossier_credit31 = _vm$dossier_credit31.cred_pub_tb_00) === null || _vm$dossier_credit31 === void 0 ? void 0 : _vm$dossier_credit31.code_clientele))]), _vm._v(" "), _c("td", {
    staticClass: "align-middle",
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("TYPE DE CLIENTELE")]), _vm._v(" "), _c("td", {
    staticClass: "align-middle"
  }, [_vm._v(_vm._s((_vm$dossier_credit32 = _vm.dossier_credit) === null || _vm$dossier_credit32 === void 0 || (_vm$dossier_credit32 = _vm$dossier_credit32.cred_pub_tb_00) === null || _vm$dossier_credit32 === void 0 ? void 0 : _vm$dossier_credit32.type_de_clientele))])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "align-middle",
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("CREDIT SYNDIQUE")]), _vm._v(" "), _c("td", {
    staticClass: "align-middle"
  }, [_vm._v("\n                            " + _vm._s((_vm$dossier_credit33 = _vm.dossier_credit) === null || _vm$dossier_credit33 === void 0 || (_vm$dossier_credit33 = _vm$dossier_credit33.cred_pub_tb_00) === null || _vm$dossier_credit33 === void 0 ? void 0 : _vm$dossier_credit33.credit_syndique) + "\n                            "), _c("small", [((_vm$dossier_credit34 = _vm.dossier_credit) === null || _vm$dossier_credit34 === void 0 || (_vm$dossier_credit34 = _vm$dossier_credit34.cred_pub_tb_00) === null || _vm$dossier_credit34 === void 0 ? void 0 : _vm$dossier_credit34.credit_syndique) == "Oui" ? _c("i", [_c("br"), _vm._v("\n                                    " + _vm._s((_vm$dossier_credit35 = _vm.dossier_credit) === null || _vm$dossier_credit35 === void 0 || (_vm$dossier_credit35 = _vm$dossier_credit35.caf_recorded_file) === null || _vm$dossier_credit35 === void 0 ? void 0 : _vm$dossier_credit35.filiale) + " est-il le chef de file ?: " + _vm._s((_vm$dossier_credit36 = _vm.dossier_credit) === null || _vm$dossier_credit36 === void 0 || (_vm$dossier_credit36 = _vm$dossier_credit36.cred_pub_tb_00) === null || _vm$dossier_credit36 === void 0 ? void 0 : _vm$dossier_credit36.cheffe_file) + "\n                                ")]) : _vm._e()])]), _vm._v(" "), _c("td", {
    staticClass: "align-middle",
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("BILAN CERTIFIE")]), _vm._v(" "), _c("td", {
    staticClass: "align-middle"
  }, [_vm._v("\n                            " + _vm._s((_vm$dossier_credit37 = _vm.dossier_credit) === null || _vm$dossier_credit37 === void 0 || (_vm$dossier_credit37 = _vm$dossier_credit37.cred_pub_tb_00) === null || _vm$dossier_credit37 === void 0 ? void 0 : _vm$dossier_credit37.bilan_certifie) + "\n                            "), _c("small", [((_vm$dossier_credit38 = _vm.dossier_credit) === null || _vm$dossier_credit38 === void 0 || (_vm$dossier_credit38 = _vm$dossier_credit38.cred_pub_tb_00) === null || _vm$dossier_credit38 === void 0 ? void 0 : _vm$dossier_credit38.bilan_certifie) == "Oui" ? _c("i", [_c("br"), _vm._v("\n                                    Cabinet comptable: " + _vm._s((_vm$dossier_credit39 = _vm.dossier_credit) === null || _vm$dossier_credit39 === void 0 || (_vm$dossier_credit39 = _vm$dossier_credit39.cred_pub_tb_00) === null || _vm$dossier_credit39 === void 0 ? void 0 : _vm$dossier_credit39.nom_cabinet_comptable) + "\n                                    "), _c("br"), _vm._v("\n                                    Commissaire aux comptes: " + _vm._s((_vm$dossier_credit40 = _vm.dossier_credit) === null || _vm$dossier_credit40 === void 0 || (_vm$dossier_credit40 = _vm$dossier_credit40.cred_pub_tb_00) === null || _vm$dossier_credit40 === void 0 ? void 0 : _vm$dossier_credit40.nom_commissaire_aux_comptes) + "\n                                ")]) : _vm._e()])])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "align-middle",
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("COTE EN BOURSE")]), _vm._v(" "), _c("td", {
    staticClass: "align-middle"
  }, [_vm._v(_vm._s((_vm$dossier_credit41 = _vm.dossier_credit) === null || _vm$dossier_credit41 === void 0 || (_vm$dossier_credit41 = _vm$dossier_credit41.cred_pub_tb_00) === null || _vm$dossier_credit41 === void 0 ? void 0 : _vm$dossier_credit41.cote_en_bourse))]), _vm._v(" "), _c("td", {
    staticClass: "align-middle",
    staticStyle: {
      "font-weight": "600",
      "text-transform": "uppercase"
    }
  }, [_vm._v("Montant de l'exposition  sur le groupe")]), _vm._v(" "), _c("td", {
    staticClass: "align-middle"
  }, [_vm._v(_vm._s((_vm$dossier_credit42 = _vm.dossier_credit) !== null && _vm$dossier_credit42 !== void 0 && (_vm$dossier_credit42 = _vm$dossier_credit42.cred_pub_tb_00) !== null && _vm$dossier_credit42 !== void 0 && _vm$dossier_credit42.exposition_groupe ? (_vm$dossier_credit43 = _vm.dossier_credit) === null || _vm$dossier_credit43 === void 0 || (_vm$dossier_credit43 = _vm$dossier_credit43.cred_pub_tb_00) === null || _vm$dossier_credit43 === void 0 ? void 0 : _vm$dossier_credit43.exposition_groupe : "-"))])])])]), _vm._v(" "), _vm._m(5), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mb-4"
  }, [_vm._m(6), _vm._v(" "), _c("tbody", {
    staticStyle: {
      "font-size": "0.9rem"
    }
  }, _vm._l(_vm.listActionnaire, function (actionnariat, key) {
    return _c("tr", {
      key: key
    }, [_c("td", [_vm._v(_vm._s(actionnariat === null || actionnariat === void 0 ? void 0 : actionnariat.nom_actionnaire))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(actionnariat === null || actionnariat === void 0 ? void 0 : actionnariat.pourcentage_participation))])]);
  }), 0)]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mb-4"
  }, [_c("thead"), _vm._v(" "), _c("tbody", [_c("tr", [_c("th", [_vm._v("Niveau de Pouvoir")]), _vm._v(" "), _c("td", [_c("div", {
    staticClass: "d-flex justify-content-between"
  }, [_c("div", {
    staticClass: "d-flex align-items-center justify-content-between p-1",
    staticStyle: {
      width: "max-content"
    }
  }, [_c("label", {
    staticStyle: {
      "margin-right": "10px"
    },
    attrs: {
      "for": ""
    }
  }, [_vm._v("\n                                        DCE\n                                    ")]), _vm._v(" "), _c("input", {
    staticClass: "form-check bg-grey",
    staticStyle: {
      width: "unset",
      height: "unset",
      display: "unset"
    },
    attrs: {
      type: "checkbox",
      disabled: !["RA", "RRA", "MO", "DCE"].includes(_vm.niveau_pouvoir)
    },
    domProps: {
      checked: ["RA", "RRA", "MO", "DCE"].includes(_vm.niveau_pouvoir)
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
      }
    }
  })]), _vm._v(" "), _c("div", [_c("div", {
    staticClass: "d-flex align-items-center justify-content-between p-1",
    staticStyle: {
      width: "max-content"
    }
  }, [_c("label", {
    staticStyle: {
      "margin-right": "10px"
    },
    attrs: {
      "for": ""
    }
  }, [_vm._v("DE")]), _vm._v(" "), _c("input", {
    staticClass: "form-check bg-grey",
    staticStyle: {
      width: "unset",
      height: "unset",
      display: "unset"
    },
    attrs: {
      type: "checkbox",
      disabled: !["R_ARC", "DE"].includes(_vm.niveau_pouvoir)
    },
    domProps: {
      checked: ["R_ARC", "DE"].includes(_vm.niveau_pouvoir)
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
      }
    }
  })])]), _vm._v(" "), _c("div", [_c("div", {
    staticClass: "d-flex align-items-center justify-content-between p-1",
    staticStyle: {
      width: "max-content"
    }
  }, [_c("label", {
    staticStyle: {
      "margin-right": "10px"
    },
    attrs: {
      "for": ""
    }
  }, [_vm._v("CIC")]), _vm._v(" "), _c("input", {
    staticClass: "form-check bg-grey",
    staticStyle: {
      width: "unset",
      height: "unset",
      display: "unset"
    },
    attrs: {
      type: "checkbox",
      disabled: !["DGA", "DG"].includes(_vm.niveau_pouvoir)
    },
    domProps: {
      checked: ["DGA", "DG"].includes(_vm.niveau_pouvoir)
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
      }
    }
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-around"
  }, [_c("div", [_c("div", {
    staticClass: "d-flex align-items-center justify-content-between p-1",
    staticStyle: {
      width: "max-content"
    }
  }, [_c("label", {
    staticStyle: {
      "margin-right": "10px"
    },
    attrs: {
      "for": ""
    }
  }, [_vm._v("CSC")]), _vm._v(" "), _c("input", {
    staticClass: "form-check bg-grey",
    staticStyle: {
      width: "unset",
      height: "unset",
      display: "unset"
    },
    attrs: {
      type: "checkbox",
      disabled: !["DE_CSC", "CSC"].includes(_vm.niveau_pouvoir)
    },
    domProps: {
      checked: ["DE_CSC", "CSC"].includes(_vm.niveau_pouvoir)
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
      }
    }
  })])])])])])])]), _vm._v(" "), Boolean((_vm$dossier_credit44 = _vm.dossier_credit) === null || _vm$dossier_credit44 === void 0 || (_vm$dossier_credit44 = _vm$dossier_credit44.cred_pub_tb_00) === null || _vm$dossier_credit44 === void 0 ? void 0 : _vm$dossier_credit44.commentaires) ? _c("table", {
    staticClass: "table table-bordered mb-4"
  }, [_vm._m(7), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", [_c("span", {
    domProps: {
      innerHTML: _vm._s((_vm$dossier_credit45 = _vm.dossier_credit) === null || _vm$dossier_credit45 === void 0 || (_vm$dossier_credit45 = _vm$dossier_credit45.cred_pub_tb_00) === null || _vm$dossier_credit45 === void 0 ? void 0 : _vm$dossier_credit45.commentaires)
    }
  })])])])]) : _vm._e()], 2) : _vm._e()])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "head-memorandum-title"
  }, [_c("tr", [_c("th", {
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      colspan: "4",
      scope: "row"
    }
  }, [_vm._v("\n                            TYPE DE DEMANDE\n                        ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "head-memorandum-title"
  }, [_c("tr", [_c("th", {
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      colspan: "6",
      scope: "row"
    }
  }, [_vm._v("\n                                SECTION / MARCHE\n                            ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "head-memorandum-title"
  }, [_c("tr", [_c("th", {
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      colspan: "4",
      scope: "row"
    }
  }, [_vm._v("\n                            SIGNALETIQUE\n                        ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "align-middle",
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("AGENCE "), _c("small", {
    attrs: {
      title: "Origination du dossier"
    }
  }, [_vm._v("(Origination du doss.)")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "align-middle",
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("AGENCE "), _c("small", [_vm._v("(Domiciliation)")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "mt-0 pt-0 mb-4"
  }, [_c("small", [_c("i", {
    staticStyle: {
      "font-size": "10px"
    }
  }, [_vm._v("(*) Inclut les cas de réaménagement ou réallocation ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "head-memorandum-title"
  }, [_c("tr", [_c("th", {
    staticClass: "col-12 text-center py-2 m-0",
    attrs: {
      colspan: "2"
    }
  }, [_vm._v("\n                            ACTIONNARIATS\n                        ")])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Nom de l’actionnaire")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("% de Participation")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "head-memorandum-title"
  }, [_c("tr", [_c("th", {
    staticClass: "col-12 text-center py-2 m-0",
    attrs: {
      colspan: "2"
    }
  }, [_vm._v("\n                            Commentaires sur la  fiche signalétique\n                        ")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/memorandum_demande/T0.vue?vue&type=style&index=0&id=c51973e4&lang=css&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/memorandum_demande/T0.vue?vue&type=style&index=0&id=c51973e4&lang=css&scoped=true ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.bg-grey[data-v-c51973e4] {\r\n    background-color: #f4f3f3;\n}\r\n\r\n/* th {\r\n    background: #f4f3f3 !important;\r\n} */\n.size[data-v-c51973e4] {\r\n    width: 130px;\n}\r\n\r\n/* .head-memorandum-title {\r\n    margin-top: 15px;\r\n    padding: 16px;\r\n    color: #dc0030;\r\n    font-weight: bold;\r\n    background-color: #f6f6f6;\r\n    border: 2px solid #575759;\r\n    box-shadow: 1px 3px 4px #ddd;\r\n    font-size: 16px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    border-radius: 10px;\r\n    margin-bottom: 15px;\r\n} */\ninput[type=checkbox][data-v-c51973e4] {\r\n    width: 25px;\r\n    height: 25px;\n}\ninput[type=checkbox][data-v-c51973e4]:disabled{\r\n    opacity:1\n}\n.text-red[data-v-c51973e4] {\r\n    color: red;\n}\n.head-memorandum-title[data-v-c51973e4] {\r\n    font-weight: bold !important;\r\n    text-transform: uppercase;\r\n    text-align: center;\r\n    border: 1px solid;\r\n    margin-bottom: 10px;\r\n    padding: 4px;\r\n    caption-side:top;\n}\r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/memorandum_demande/T0.vue?vue&type=style&index=0&id=c51973e4&lang=css&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/memorandum_demande/T0.vue?vue&type=style&index=0&id=c51973e4&lang=css&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_T0_vue_vue_type_style_index_0_id_c51973e4_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./T0.vue?vue&type=style&index=0&id=c51973e4&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/memorandum_demande/T0.vue?vue&type=style&index=0&id=c51973e4&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_T0_vue_vue_type_style_index_0_id_c51973e4_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_T0_vue_vue_type_style_index_0_id_c51973e4_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/memo/memorandum_demande/T0.vue":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/memo/memorandum_demande/T0.vue ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _T0_vue_vue_type_template_id_c51973e4_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./T0.vue?vue&type=template&id=c51973e4&scoped=true */ "./resources/js/components/offview/bank/afg/memo/memorandum_demande/T0.vue?vue&type=template&id=c51973e4&scoped=true");
/* harmony import */ var _T0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./T0.vue?vue&type=script&lang=js */ "./resources/js/components/offview/bank/afg/memo/memorandum_demande/T0.vue?vue&type=script&lang=js");
/* harmony import */ var _T0_vue_vue_type_style_index_0_id_c51973e4_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./T0.vue?vue&type=style&index=0&id=c51973e4&lang=css&scoped=true */ "./resources/js/components/offview/bank/afg/memo/memorandum_demande/T0.vue?vue&type=style&index=0&id=c51973e4&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _T0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _T0_vue_vue_type_template_id_c51973e4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _T0_vue_vue_type_template_id_c51973e4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "c51973e4",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/offview/bank/afg/memo/memorandum_demande/T0.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/memo/memorandum_demande/T0.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/memo/memorandum_demande/T0.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_T0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./T0.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/memorandum_demande/T0.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_T0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/memo/memorandum_demande/T0.vue?vue&type=style&index=0&id=c51973e4&lang=css&scoped=true":
/*!*****************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/memo/memorandum_demande/T0.vue?vue&type=style&index=0&id=c51973e4&lang=css&scoped=true ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_T0_vue_vue_type_style_index_0_id_c51973e4_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./T0.vue?vue&type=style&index=0&id=c51973e4&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/memorandum_demande/T0.vue?vue&type=style&index=0&id=c51973e4&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/offview/bank/afg/memo/memorandum_demande/T0.vue?vue&type=template&id=c51973e4&scoped=true":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/memo/memorandum_demande/T0.vue?vue&type=template&id=c51973e4&scoped=true ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_T0_vue_vue_type_template_id_c51973e4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_T0_vue_vue_type_template_id_c51973e4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_T0_vue_vue_type_template_id_c51973e4_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./T0.vue?vue&type=template&id=c51973e4&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/memo/memorandum_demande/T0.vue?vue&type=template&id=c51973e4&scoped=true");


/***/ })

}]);