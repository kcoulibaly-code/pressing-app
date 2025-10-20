"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_offview_bank_nsia_memo_scene_memo_PPI1_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_memo/PPI1.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_memo/PPI1.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
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
    },
    getNatureLabel: function getNatureLabel(data_tb) {
      if (data_tb['construction_d_une_maison_individuelle']) return 'Contruction d\'une maison individuelle';
      if (data_tb['acquisition_dans_un_programme_collectif_neuf']) return 'Acquisition dans un programme collectif neuf';
      if (data_tb['achat_d_un_logement_ancien']) return 'Achat d\'un logement ancien';
      if (data_tb['modification_de_batiment']) return 'Modification de bâtiment (Travaux)';
      return '';
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_memo/PPI1.vue?vue&type=template&id=3fb13b0c&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_memo/PPI1.vue?vue&type=template&id=3fb13b0c&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$data_tb, _vm$data_tb2, _vm$data_tb3, _vm$data_tb4, _vm$data_tb5, _vm$data_tb6, _vm$data_tb7, _vm$data_tb8, _vm$data_tb9, _vm$data_tb0, _vm$data_tb1, _vm$data_tb10, _vm$data_tb11, _vm$data_tb12, _vm$data_tb13, _vm$data_tb14, _vm$data_tb15, _vm$data_tb16, _vm$data_tb17, _vm$data_tb18, _vm$data_tb19, _vm$data_tb20, _vm$data_tb21, _vm$data_tb22, _vm$data_tb23, _vm$data_tb24, _vm$data_tb25, _vm$data_tb26, _vm$data_tb27, _vm$data_tb28, _vm$data_tb29, _vm$data_tb30, _vm$data_tb31, _vm$data_tb32, _vm$data_tb33, _vm$data_tb34, _vm$data_tb35, _vm$data_tb36, _vm$data_tb37, _vm$data_tb38, _vm$data_tb39, _vm$data_tb40, _vm$data_tb41, _vm$data_tb42, _vm$data_tb43, _vm$data_tb44, _vm$data_tb45, _vm$data_tb46, _vm$data_tb47, _vm$data_tb48, _vm$data_tb49;
  var _vm = this,
    _c = _vm._self._c;
  return _vm.data_tb1 ? _c("div", [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "card rounded-0 mb-3 w-100"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_vm._v("Demande")]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Type de demande:")]), _vm._v(" " + _vm._s((_vm$data_tb = _vm.data_tb1) === null || _vm$data_tb === void 0 ? void 0 : _vm$data_tb.type_demande))]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Type de crédit:")]), _vm._v(" " + _vm._s((_vm$data_tb2 = _vm.data_tb1) === null || _vm$data_tb2 === void 0 ? void 0 : _vm$data_tb2.type_credit))]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Type de clientèle:")]), _vm._v(" " + _vm._s((_vm$data_tb3 = _vm.data_tb1) === null || _vm$data_tb3 === void 0 ? void 0 : _vm$data_tb3.type_de_clientele))]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Zone:")]), _vm._v(" " + _vm._s((_vm$data_tb4 = _vm.data_tb1) === null || _vm$data_tb4 === void 0 ? void 0 : _vm$data_tb4.segment_entreprise))]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Taux nominal de crédit:")]), _vm._v(" " + _vm._s((_vm$data_tb5 = _vm.data_tb1) === null || _vm$data_tb5 === void 0 ? void 0 : _vm$data_tb5.taux))]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Durée du crédit en mois:")]), _vm._v(" " + _vm._s((_vm$data_tb6 = _vm.data_tb1) === null || _vm$data_tb6 === void 0 ? void 0 : _vm$data_tb6.duree_credit))]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Montant sollicité:")]), _vm._v(" " + _vm._s(_vm.formatAmount((_vm$data_tb7 = _vm.data_tb1) === null || _vm$data_tb7 === void 0 ? void 0 : _vm$data_tb7.montant_sollicite)))]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Montant proposé par le CC:")]), _vm._v(" " + _vm._s(_vm.formatAmount((_vm$data_tb8 = _vm.data_tb1) === null || _vm$data_tb8 === void 0 ? void 0 : _vm$data_tb8.montant_credit)))]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Taux prime assurance:")]), _vm._v(" " + _vm._s((_vm$data_tb9 = _vm.data_tb1) === null || _vm$data_tb9 === void 0 ? void 0 : _vm$data_tb9.taux_prime) + "%")]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Durée différé:")]), _vm._v(" " + _vm._s((_vm$data_tb0 = _vm.data_tb1) === null || _vm$data_tb0 === void 0 ? void 0 : _vm$data_tb0.duree_differee))]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Ce prêt est-il couvert à 100% minimum par un Cash Coll:")]), _vm._v(" " + _vm._s((_vm$data_tb1 = _vm.data_tb1) === null || _vm$data_tb1 === void 0 ? void 0 : _vm$data_tb1.pret_couvert_cash_call))]), _vm._v(" "), ((_vm$data_tb10 = _vm.data_tb1) === null || _vm$data_tb10 === void 0 ? void 0 : _vm$data_tb10.pret_couvert_cash_call) == "Oui" ? _c("div", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Montant de Cash Coll :")]), _vm._v(" " + _vm._s((_vm$data_tb11 = _vm.data_tb1) === null || _vm$data_tb11 === void 0 ? void 0 : _vm$data_tb11.montant_cash_call) + "\n                ")]) : _vm._e(), _vm._v(" "), !["", null, undefined].includes((_vm$data_tb12 = _vm.data_tb1) === null || _vm$data_tb12 === void 0 ? void 0 : _vm$data_tb12.date_reception_demande_client) ? _c("div", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Date de réception de la demande client : ")]), _vm._v(" " + _vm._s(((_vm$data_tb13 = _vm.data_tb1) === null || _vm$data_tb13 === void 0 ? void 0 : _vm$data_tb13.date_reception_demande_client) != "" && ((_vm$data_tb14 = _vm.data_tb1) === null || _vm$data_tb14 === void 0 ? void 0 : _vm$data_tb14.date_reception_demande_client) != undefined ? _vm.formatDate((_vm$data_tb15 = _vm.data_tb1) === null || _vm$data_tb15 === void 0 ? void 0 : _vm$data_tb15.date_reception_demande_client) : "") + "\n                ")]) : _vm._e()])])]), _vm._v(" "), _c("div", {
    staticClass: "card rounded-0 mb-3 w-100"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_vm._v("Simulation")]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_c("tbody", [_c("tr", [_vm._m(1), _vm._v(" "), _c("td", {
    staticClass: "col-md-3 pl-4 text-nowrap"
  }, [_vm._v(_vm._s((_vm$data_tb16 = _vm.data_tb1) === null || _vm$data_tb16 === void 0 ? void 0 : _vm$data_tb16.montant_credit))]), _vm._v(" "), _vm._m(2), _vm._v(" "), _c("td", {
    staticClass: "col-md-3 pl-4 text-nowrap"
  }, [_vm._v(_vm._s((_vm$data_tb17 = _vm.data_tb1) === null || _vm$data_tb17 === void 0 ? void 0 : _vm$data_tb17.taux) + " %")])]), _vm._v(" "), _c("tr", [_vm._m(3), _vm._v(" "), _c("td", {
    staticClass: "col-md-3 pl-4 text-nowrap"
  }, [_vm._v(_vm._s((_vm$data_tb18 = _vm.data_tb1) === null || _vm$data_tb18 === void 0 ? void 0 : _vm$data_tb18.duree_credit) + " Mois")]), _vm._v(" "), _vm._m(4), _vm._v(" "), _c("td", {
    staticClass: "col-md-3 pl-4 text-nowrap"
  }, [_vm._v(_vm._s((_vm$data_tb19 = _vm.data_tb1) === null || _vm$data_tb19 === void 0 ? void 0 : _vm$data_tb19.r_mensualite))])]), _vm._v(" "), _c("tr", [_vm._m(5), _vm._v(" "), _c("td", {
    staticClass: "col-md-3 pl-4 text-nowrap"
  }, [_vm._v(_vm._s((_vm$data_tb20 = _vm.data_tb1) === null || _vm$data_tb20 === void 0 ? void 0 : _vm$data_tb20.r_interet))]), _vm._v(" "), _vm._m(6), _vm._v(" "), _c("td", {
    staticClass: "col-md-3 pl-4 text-nowrap"
  }, [_vm._v(_vm._s((_vm$data_tb21 = _vm.data_tb1) === null || _vm$data_tb21 === void 0 ? void 0 : _vm$data_tb21.r_ttcredit))])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "card rounded-0 mb-3 w-100"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_vm._v("Objet du prêt")]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "row mb-3"
  }, [_c("div", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Ville (localisation):")]), _vm._v(" " + _vm._s((_vm$data_tb22 = _vm.data_tb1) === null || _vm$data_tb22 === void 0 ? void 0 : _vm$data_tb22.localisation_ville))]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Quartier (localisation)")]), _vm._v(" " + _vm._s((_vm$data_tb23 = _vm.data_tb1) === null || _vm$data_tb23 === void 0 ? void 0 : _vm$data_tb23.localisation_quartier))]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Usage:")]), _vm._v(" " + _vm._s((_vm$data_tb24 = _vm.data_tb1) === null || _vm$data_tb24 === void 0 ? void 0 : _vm$data_tb24.usage))]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Commentaire")]), _c("br"), _vm._v(" "), _c("div", {
    domProps: {
      innerHTML: _vm._s((_vm$data_tb25 = _vm.data_tb1) === null || _vm$data_tb25 === void 0 ? void 0 : _vm$data_tb25.objet_du_pret_commentaire)
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "card rounded-0 w-100"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("b", [_vm._v("Nature:")]), _vm._v(" " + _vm._s(_vm.getNatureLabel(_vm.data_tb1)))]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [(_vm$data_tb26 = _vm.data_tb1) !== null && _vm$data_tb26 !== void 0 && _vm$data_tb26.construction_d_une_maison_individuelle ? _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Avis de conformité en date de : ")]), _vm._v(" " + _vm._s(((_vm$data_tb27 = _vm.data_tb1) === null || _vm$data_tb27 === void 0 ? void 0 : _vm$data_tb27.avis_de_confirmite_en_date_de) != "" ? _vm.formatDate((_vm$data_tb28 = _vm.data_tb1) === null || _vm$data_tb28 === void 0 ? void 0 : _vm$data_tb28.avis_de_confirmite_en_date_de) : ""))]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Surface terrain : ")]), _vm._v(" " + _vm._s((_vm$data_tb29 = _vm.data_tb1) === null || _vm$data_tb29 === void 0 ? void 0 : _vm$data_tb29.surface_terrain_1))]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Surface utile : ")]), _vm._v(" " + _vm._s((_vm$data_tb30 = _vm.data_tb1) === null || _vm$data_tb30 === void 0 ? void 0 : _vm$data_tb30.surface_utile_1))]), _vm._v(" "), _vm._m(7)]) : (_vm$data_tb31 = _vm.data_tb1) !== null && _vm$data_tb31 !== void 0 && _vm$data_tb31.acquisition_dans_un_programme_collectif_neuf ? _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Collectif : ")]), _vm._v(" " + _vm._s((_vm$data_tb32 = _vm.data_tb1) === null || _vm$data_tb32 === void 0 ? void 0 : _vm$data_tb32.collectif))]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Surface terrain : ")]), _vm._v(" " + _vm._s((_vm$data_tb33 = _vm.data_tb1) === null || _vm$data_tb33 === void 0 ? void 0 : _vm$data_tb33.surface_terrain_2))]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Surface utile :  ")]), _vm._v(" " + _vm._s((_vm$data_tb34 = _vm.data_tb1) === null || _vm$data_tb34 === void 0 ? void 0 : _vm$data_tb34.surface_utile_2))]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Promoteur : ")]), _vm._v(" " + _vm._s((_vm$data_tb35 = _vm.data_tb1) === null || _vm$data_tb35 === void 0 ? void 0 : _vm$data_tb35.promoteur))]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Programme : ")]), _vm._v(" " + _vm._s((_vm$data_tb36 = _vm.data_tb1) === null || _vm$data_tb36 === void 0 ? void 0 : _vm$data_tb36.programme))]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Attestation de reservation : ")]), _vm._v(" " + _vm._s((_vm$data_tb37 = _vm.data_tb1) === null || _vm$data_tb37 === void 0 ? void 0 : _vm$data_tb37.attestation_de_reservation))]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Crédit promoteur NSIA BANQUE-CI : ")]), _vm._v(" " + _vm._s((_vm$data_tb38 = _vm.data_tb1) === null || _vm$data_tb38 === void 0 ? void 0 : _vm$data_tb38.credit_promoteur_nsia))]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Autres banques : ")]), _vm._v(" " + _vm._s((_vm$data_tb39 = _vm.data_tb1) === null || _vm$data_tb39 === void 0 ? void 0 : _vm$data_tb39.autres_banques))]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Montant : ")]), _vm._v(" " + _vm._s((_vm$data_tb40 = _vm.data_tb1) === null || _vm$data_tb40 === void 0 ? void 0 : _vm$data_tb40.montant_autre_banque_banque))])]) : (_vm$data_tb41 = _vm.data_tb1) !== null && _vm$data_tb41 !== void 0 && _vm$data_tb41.achat_d_un_logement_ancien ? _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Type logement : ")]), _vm._v(" " + _vm._s((_vm$data_tb42 = _vm.data_tb1) === null || _vm$data_tb42 === void 0 ? void 0 : _vm$data_tb42.type_ancien_logement))]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Surface terrain : ")]), _vm._v(" " + _vm._s((_vm$data_tb43 = _vm.data_tb1) === null || _vm$data_tb43 === void 0 ? void 0 : _vm$data_tb43.surface_terrain_3))]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Surface utile : ")]), _vm._v(" " + _vm._s((_vm$data_tb44 = _vm.data_tb1) === null || _vm$data_tb44 === void 0 ? void 0 : _vm$data_tb44.surface_utile_3))]), _vm._v(" "), _vm._m(8)]) : (_vm$data_tb45 = _vm.data_tb1) !== null && _vm$data_tb45 !== void 0 && _vm$data_tb45.modification_de_batiment ? _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Type travaux : ")]), _vm._v(" " + _vm._s((_vm$data_tb46 = _vm.data_tb1) === null || _vm$data_tb46 === void 0 ? void 0 : _vm$data_tb46.type_travaux))]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Type emprunteur : ")]), _vm._v(" " + _vm._s((_vm$data_tb47 = _vm.data_tb1) === null || _vm$data_tb47 === void 0 ? void 0 : _vm$data_tb47.type_emprunteur_proprietaire_ou_locataire))]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Surface habitable actuelle : ")]), _vm._v(" " + _vm._s((_vm$data_tb48 = _vm.data_tb1) === null || _vm$data_tb48 === void 0 ? void 0 : _vm$data_tb48.surface_habitable_actuelle))]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("b", [_vm._v("Surface après travaux : ")]), _vm._v(" " + _vm._s((_vm$data_tb49 = _vm.data_tb1) === null || _vm$data_tb49 === void 0 ? void 0 : _vm$data_tb49.surface_apres_travaux))])]) : _vm._e()])])])])]) : _vm._e();
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
  }, [_vm._v("Demande de prêt")])]);
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
  return _c("div", {
    staticClass: "col-6"
  }, [_c("b")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-6"
  }, [_c("b")]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_memo/PPI1.vue?vue&type=style&index=0&id=3fb13b0c&lang=css&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_memo/PPI1.vue?vue&type=style&index=0&id=3fb13b0c&lang=css&scoped=true ***!
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
___CSS_LOADER_EXPORT___.push([module.id, ".bg-grey[data-v-3fb13b0c], .th[data-v-3fb13b0c] {\r\n    background-color: #f4f3f3;\r\n    font-weight: 600;\n}\n.memo[data-v-3fb13b0c] {\r\n    margin-top: 10px;\r\n    padding: 10px;\r\n    border: 2px solid #fff;\r\n    font-weight: 550;\r\n    font-size: 16px;\r\n    text-align: left;\r\n    text-transform: uppercase;\r\n    background-color: #34495e;\r\n    color: #fff;\n}\n.head-memorandum-title[data-v-3fb13b0c] {\r\n    margin-top: 15px;\r\n    padding: 16px;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    background-color: #34495e;\r\n    border: 2px solid #575759;\r\n    box-shadow: 1px 3px 4px #ddd;\r\n    font-size: 16px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    border-radius: 10px;\r\n    margin-bottom: 15px;\n}\n.vertical-middle[data-v-3fb13b0c] {\r\n    vertical-align: middle;\n}\n.mr-2[data-v-3fb13b0c] {\r\n    margin-right: 0.5rem;\n}\n.ml-25-px[data-v-3fb13b0c] {\r\n    margin-left: 25px;\n}\n.ml-45-px[data-v-3fb13b0c] {\r\n    margin-left: 45px;\n}\n.table-bordered[data-v-3fb13b0c] {\r\n    font-size: 0.9rem;\n}\n.form-check-input[data-v-3fb13b0c]:disabled {\r\n    opacity: 1;\n}\n.activite td[data-v-3fb13b0c] {\r\n    padding: 7px;\n}\n.card-body[data-v-3fb13b0c] {\r\n    font-size: 0.9rem;\n}\n.card-body [class*='col-'][data-v-3fb13b0c]{\r\n    margin-bottom: 10px;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_memo/PPI1.vue?vue&type=style&index=0&id=3fb13b0c&lang=css&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_memo/PPI1.vue?vue&type=style&index=0&id=3fb13b0c&lang=css&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PPI1_vue_vue_type_style_index_0_id_3fb13b0c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PPI1.vue?vue&type=style&index=0&id=3fb13b0c&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_memo/PPI1.vue?vue&type=style&index=0&id=3fb13b0c&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PPI1_vue_vue_type_style_index_0_id_3fb13b0c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PPI1_vue_vue_type_style_index_0_id_3fb13b0c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/memo/scene_memo/PPI1.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/memo/scene_memo/PPI1.vue ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PPI1_vue_vue_type_template_id_3fb13b0c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PPI1.vue?vue&type=template&id=3fb13b0c&scoped=true */ "./resources/js/components/offview/bank/nsia/memo/scene_memo/PPI1.vue?vue&type=template&id=3fb13b0c&scoped=true");
/* harmony import */ var _PPI1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PPI1.vue?vue&type=script&lang=js */ "./resources/js/components/offview/bank/nsia/memo/scene_memo/PPI1.vue?vue&type=script&lang=js");
/* harmony import */ var _PPI1_vue_vue_type_style_index_0_id_3fb13b0c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PPI1.vue?vue&type=style&index=0&id=3fb13b0c&lang=css&scoped=true */ "./resources/js/components/offview/bank/nsia/memo/scene_memo/PPI1.vue?vue&type=style&index=0&id=3fb13b0c&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PPI1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _PPI1_vue_vue_type_template_id_3fb13b0c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _PPI1_vue_vue_type_template_id_3fb13b0c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3fb13b0c",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/offview/bank/nsia/memo/scene_memo/PPI1.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/memo/scene_memo/PPI1.vue?vue&type=script&lang=js":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/memo/scene_memo/PPI1.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PPI1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PPI1.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_memo/PPI1.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PPI1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/memo/scene_memo/PPI1.vue?vue&type=style&index=0&id=3fb13b0c&lang=css&scoped=true":
/*!************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/memo/scene_memo/PPI1.vue?vue&type=style&index=0&id=3fb13b0c&lang=css&scoped=true ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PPI1_vue_vue_type_style_index_0_id_3fb13b0c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PPI1.vue?vue&type=style&index=0&id=3fb13b0c&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_memo/PPI1.vue?vue&type=style&index=0&id=3fb13b0c&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/offview/bank/nsia/memo/scene_memo/PPI1.vue?vue&type=template&id=3fb13b0c&scoped=true":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/nsia/memo/scene_memo/PPI1.vue?vue&type=template&id=3fb13b0c&scoped=true ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PPI1_vue_vue_type_template_id_3fb13b0c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PPI1_vue_vue_type_template_id_3fb13b0c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PPI1_vue_vue_type_template_id_3fb13b0c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PPI1.vue?vue&type=template&id=3fb13b0c&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/nsia/memo/scene_memo/PPI1.vue?vue&type=template&id=3fb13b0c&scoped=true");


/***/ })

}]);