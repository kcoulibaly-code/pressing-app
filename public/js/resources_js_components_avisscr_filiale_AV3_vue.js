"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_avisscr_filiale_AV3_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/avisscr/filiale/AV3.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/avisscr/filiale/AV3.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/ContextMenu */ "./resources/js/components/shared/ContextMenu.vue");
/* harmony import */ var _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/ContextMenuItem */ "./resources/js/components/shared/ContextMenuItem.vue");
var _methods;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



// import { VueEditor } from "vue2-editor";




window.$ = window.jQuery = __webpack_require__(/*! jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "analyse-financiere-force-faiblesse",
  display: "Analyse financière, forces et fablesses",
  components: {
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_4__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_4__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_4__.ChevronDownIcon,
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_4__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_4__.TrashIcon,
    AirplayIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_4__.AirplayIcon,
    BookOpenIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_4__.BookOpenIcon,
    ContextMenu: _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_2__["default"],
    ContextMenuItem: _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: _defineProperty({
    meta_data: Object,
    tb_name: String,
    tb_display_name: String
  }, "tb_display_name", String),
  computed: {
    margeComProp: function margeComProp() {
      var a = this.formDataToBeWatched.chiffre_affaire_src;
      a = Number(String(a).replace(/\s+/g, ""));
      var b = this.formDataToBeWatched.cout_achat_src;
      b = Number(String(b).replace(/\s+/g, ""));
      var c = a - b;
      return c;
    },
    capaciteAutoFin: function capaciteAutoFin() {
      var a = this.formDataToBeWatched.resultat_net_src;
      var b = this.formDataToBeWatched.autre_revenu_src;
      var c = this.formDataToBeWatched.charge_familiale_src;
      var d = this.formDataToBeWatched.autre_charge_src;
      a = Number(String(a).replace(/\s+/g, ""));
      b = Number(String(b).replace(/\s+/g, ""));
      c = Number(String(c).replace(/\s+/g, ""));
      d = Number(String(d).replace(/\s+/g, ""));
      if (isNaN(a)) {
        a = 0;
      }
      if (isNaN(b)) {
        b = 0;
      }
      if (isNaN(c)) {
        c = 0;
      }
      if (isNaN(d)) {
        d = 0;
      }
      var f = a + b - (c + d);
      return f;
    },
    tauxEndettementPropo: function tauxEndettementPropo() {
      // console.log()
      var c = 0;
      var a = this.formDataToBeWatched.capacite_autofinancement_src;
      var b = this.creditConcurrence();
      if (this.formDataToBeWatched.montant_credit_src !== undefined) {
        c = this.formDataToBeWatched.montant_credit_src;
      }
      var res = 0;
      c = Number(String(c).replace(/\s+/g, ""));
      a = Number(String(a).replace(/\s+/g, ""));
      b = Number(String(b).replace(/\s+/g, ""));
      if (a !== 0) {
        res = (b + c) / a;
      } else {
        return 0;
      }
      return res * 100;
    }
  },
  created: function created() {},
  mounted: function mounted() {
    this.loadKey();
    this.loadRetrieved();
    this.loadTbAttrs(); // charge les attributs + sous attributs des tables
    this.tableClosedOrOpened();
    //  this.loadFromTb13()
  },
  data: function data() {
    var vm = this;
    return {
      contextList: [{
        title: "Commenter",
        icon: "icofont icofont-comment",
        handler: function () {
          this.openNotesModal();
        }.bind(vm),
        disabled: false
      }, {
        title: "Assigner",
        icon: "icofont icofont-check",
        handler: function handler() {},
        disabled: true
      }, {
        title: "Supprimer",
        icon: "icofont icofont-trash",
        handler: this.startDeletingTbFromContext,
        disabled: false
      }],
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__["default"].host,
      authcheck: false,
      authcheckUsr: null,
      authcheckStatus: null,
      watchInPause: false,
      initLoad: true,
      seen: true,
      seen1: true,
      seen2: true,
      seen3: true,
      seen4: true,
      seen5: true,
      seen6: true,
      seen7: true,
      seen8: true,
      label_keys: [],
      listingNote: false,
      dossier_credit: null,
      meta_parseable: {
        cred_pub_key: this.meta_data["cred_pub_key"],
        tb_name: this.tb_name
      },
      formDataToBeWatched: {
        analyse_financiere: "",
        derniere_decision: "",
        forces: "",
        forces_caf: "",
        forces_arc: "",
        faiblesses: "",
        faiblesses_caf: "",
        faiblesses_arc: "",
        opportunites: "",
        opportunites_caf: "",
        opportunites_arc: "",
        menaces: "",
        menaces_caf: "",
        menaces_arc: "",
        notes: [],
        chiffre_affaire_src: "",
        cout_achat_src: "",
        charge_exploitation_src: "",
        autre_revenu_src: "",
        resultat_net_src: "",
        autre_charge_src: "",
        charge_familiale_src: "",
        capacite_autofinancement_src: "",
        montant_credit_src: "",
        montant_echeance_credit_src: "",
        tresorerie_src: "",
        marge_commerciale_src: "",
        taux_endettement_src: "",
        justification_chiffre_affaire: "",
        justification_cout_achat: "",
        justification_marge_commerciale: "",
        justification_charge_exploitation: "",
        justification_resultat_net: "",
        justification_autre_revenu: "",
        justification_charge_familiale: "",
        justification_capacite_auto: "",
        justification_capacite_montant_propose: "",
        justification_capacite_montant_echeance: "",
        justification_capacite_tresorerie: "",
        justification_taux: "",
        appreciation_organisation_src: "",
        justification_autre_charge: "",
        appreciation_autre_risque_src: "",
        appreciation_risque_commerciale_src: "",
        avis_appreciation_autre_risque_src: "",
        avis_appreciation_organisation_src: "",
        avis_appreciation_risque_commerciale_src: "",
        quantite_analyse_effectuee_analyse: "",
        quantite_analyse_effectuee_avis_src: "",
        capacite_paiement_analyse: "",
        capacite_paiement_avis_src: "",
        garantie_analyse: "",
        implication_client_analyse: "",
        implication_client_avis_src: "",
        condition_additionnelles_avant_decaissement: "",
        condition_additionnelles_apres_decaissement: "",
        // for bilan
        tresorerie_espece_propo_analyste: "",
        justification_tresorerie_espece: "",
        creance_acompte_propose: "",
        justification_creance_acompte: "",
        stock_propose: "",
        justification_stock: "",
        immobilisation_propose: "",
        justification_immobilisation: "",
        passif_ope_propose: "",
        justification_passif_ope: "",
        passifs_fin_propose: "",
        justification_passifs_fin: ""
        //end for bilan
      },
      condition_additionnelles_avant_decaissement: [{
        avant_decaissement: ""
      }],
      condition_additionnelles_apres_decaissement: [{
        apres_decaissement: ""
      }],
      // caf
      chiffre_affaire_caf: null,
      cout_achat_caf: null,
      marge_commerciale_caf: null,
      charge_exploitation_caf: null,
      resultat_net_caf: null,
      autre_revenu_caf: null,
      autre_charge_caf: null,
      charge_familiale_caf: null,
      capacite_autofinancement_caf: null,
      montant_credit_caf: null,
      montant_echeance_credit_caf: null,
      tresorerie_caf: null,
      taux_endettement_caf: null,
      // arc
      chiffre_affaire_arc: null,
      cout_achat_arc: null,
      marge_commerciale_arc: null,
      charge_exploitation_arc: null,
      resultat_net_arc: null,
      autre_revenu_arc: null,
      autre_charge_arc: null,
      charge_familiale_arc: null,
      capacite_autofinancement_arc: null,
      montant_credit_arc: null,
      montant_echeance_credit_arc: null,
      tresorerie_arc: null,
      taux_endettement_arc: null,
      appreciation_organisation_arc: null,
      appreciation_organisation_caf: null,
      appreciation_autre_risque_caf: null,
      appreciation_risque_commerciale_arc: null,
      appreciation_autre_risque_arc: null,
      appreciation_risque_commerciale_caf: null,
      // bilan
      tresorerie_espece: null,
      tresorerie_espece_arc: null,
      creance_acompte: null,
      creance_acompte_arc: null,
      stock_caf: null,
      stock_arc: null,
      immobilisation: null,
      immobilisation_arc: null,
      passif_ope: null,
      passif_ope_arc: null,
      passifs_fin: null,
      passifs_fin_arc: null
      //end bilan 
    };
  },
  methods: (_methods = {
    // loadFromTb13(){
    //     console.log("metadata", this.meta_data.dossier_credit?.cred_tb_13_.benefices_pertes)
    // },
    formDataVars: function formDataVars(event) {
      this.formDataToBeWatched[event[0]] = event[1];
      this.handleInput();
    },
    loadKey: function loadKey() {
      var _this = this;
      var labels = ['VENTES TOTALES', 'COÛT TOTAL DES MARCHANDISES VENDUES', 'COÛTS OPÉRATIONNELS TOTAUX', 'RÉSULTAT NET PRINCIPALES OPÉRATIONS', 'Autres revenus', 'Charges familiales', "D'autres coûts"];
      labels.forEach(function (element, index) {
        _this.label_keys.push(_this.findIndexByObj(element));
      });
    },
    findIndexByObj: function findIndexByObj(label) {
      var _this$meta_data, _this$meta_data2;
      var tab = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "benefices_pertes";
      var current_tab = (_this$meta_data = this.meta_data) === null || _this$meta_data === void 0 || (_this$meta_data = _this$meta_data.dossier_credit) === null || _this$meta_data === void 0 || (_this$meta_data = _this$meta_data.cred_pub_tb_13) === null || _this$meta_data === void 0 ? void 0 : _this$meta_data[tab];
      if (['Retail BF (Burkina Faso)'].includes((_this$meta_data2 = this.meta_data) === null || _this$meta_data2 === void 0 || (_this$meta_data2 = _this$meta_data2.dossier_credit) === null || _this$meta_data2 === void 0 ? void 0 : _this$meta_data2.applied_templ_name)) {
        var _this$meta_data3;
        current_tab = (_this$meta_data3 = this.meta_data) === null || _this$meta_data3 === void 0 || (_this$meta_data3 = _this$meta_data3.dossier_credit) === null || _this$meta_data3 === void 0 || (_this$meta_data3 = _this$meta_data3.cred_pub_tb_16107) === null || _this$meta_data3 === void 0 ? void 0 : _this$meta_data3[tab];
      }
      if (!['', null, undefined].includes(current_tab)) {
        var _current_tab;
        return (_current_tab = current_tab) === null || _current_tab === void 0 ? void 0 : _current_tab.findIndex(function (el) {
          return el.position === label;
        });
      }
      return -1;
    },
    creditConcurrence: function creditConcurrence() {
      var _this$meta_data4, _this$meta_data5;
      var total = 0;
      var current_credit_hitory = (_this$meta_data4 = this.meta_data) === null || _this$meta_data4 === void 0 || (_this$meta_data4 = _this$meta_data4.dossier_credit) === null || _this$meta_data4 === void 0 ? void 0 : _this$meta_data4.cred_pub_tb_17;
      if (['Retail BF (Burkina Faso)'].includes((_this$meta_data5 = this.meta_data) === null || _this$meta_data5 === void 0 || (_this$meta_data5 = _this$meta_data5.dossier_credit) === null || _this$meta_data5 === void 0 ? void 0 : _this$meta_data5.applied_templ_name)) {
        var _this$meta_data6;
        current_credit_hitory = (_this$meta_data6 = this.meta_data) === null || _this$meta_data6 === void 0 || (_this$meta_data6 = _this$meta_data6.dossier_credit) === null || _this$meta_data6 === void 0 ? void 0 : _this$meta_data6.cred_pub_tb_16105;
      }
      if (current_credit_hitory !== undefined) {
        var _current_credit_hitor;
        if (((_current_credit_hitor = current_credit_hitory) === null || _current_credit_hitor === void 0 ? void 0 : _current_credit_hitor.historiques_des_credits) !== "") {
          var _current_credit_hitor2;
          (_current_credit_hitor2 = current_credit_hitory) === null || _current_credit_hitor2 === void 0 || _current_credit_hitor2.historiques_des_credits.forEach(function (element) {
            if (element.statut === "Financé") {
              total += Number(String(element.encours).replace(/\s+/g, ""));
            }
          });
        }
      }
      return total;
    },
    calculMargeCom: function calculMargeCom() {
      var _this$meta_data$dossi, _this$meta_data7, _dossier, _dossier3;
      var dossier = (_this$meta_data$dossi = this.meta_data.dossier_credit) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi.cred_pub_tb_13;
      var a = 0;
      var b = 0;
      if (['Retail BF (Burkina Faso)'].includes((_this$meta_data7 = this.meta_data) === null || _this$meta_data7 === void 0 || (_this$meta_data7 = _this$meta_data7.dossier_credit) === null || _this$meta_data7 === void 0 ? void 0 : _this$meta_data7.applied_templ_name)) {
        var _this$meta_data$dossi2;
        dossier = (_this$meta_data$dossi2 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi2 === void 0 ? void 0 : _this$meta_data$dossi2.cred_pub_tb_16107;
      }
      if (!['', null, undefined].includes((_dossier = dossier) === null || _dossier === void 0 || (_dossier = _dossier.benefices_pertes[this.findIndexByObj("VENTES TOTALES")]) === null || _dossier === void 0 ? void 0 : _dossier.montant_c)) {
        var _dossier2;
        a = (_dossier2 = dossier) === null || _dossier2 === void 0 || (_dossier2 = _dossier2.benefices_pertes[this.findIndexByObj("VENTES TOTALES")]) === null || _dossier2 === void 0 ? void 0 : _dossier2.montant_c;
        a = Number(String(a).replace(/\s+/g, ""));
      }
      if (!['', null, undefined].includes((_dossier3 = dossier) === null || _dossier3 === void 0 || (_dossier3 = _dossier3.benefices_pertes[this.findIndexByObj("COÛT TOTAL DES MARCHANDISES VENDUES")]) === null || _dossier3 === void 0 ? void 0 : _dossier3.montant_c)) {
        var _dossier4;
        b = (_dossier4 = dossier) === null || _dossier4 === void 0 || (_dossier4 = _dossier4.benefices_pertes[this.findIndexByObj("COÛT TOTAL DES MARCHANDISES VENDUES")]) === null || _dossier4 === void 0 ? void 0 : _dossier4.montant_c;
        b = Number(String(b).replace(/\s+/g, ""));
      }
      return Math.abs(a - b);
    },
    addMore1: function addMore1() {
      this.condition_additionnelles_avant_decaissement.push({
        avant_decaissement: ''
      });
      this.handleInput();
    },
    remove1: function remove1(index) {
      this.condition_additionnelles_avant_decaissement.splice(index, 1);
    },
    addMore2: function addMore2() {
      this.condition_additionnelles_apres_decaissement.push({
        apres_decaissement: ''
      });
      this.handleInput();
    },
    remove2: function remove2(index) {
      this.condition_additionnelles_apres_decaissement.splice(index, 1);
    }
  }, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_methods, "creditConcurrence", function creditConcurrence() {
    var _this$meta_data8, _this$meta_data9;
    var total = 0;
    var history_cred = (_this$meta_data8 = this.meta_data) === null || _this$meta_data8 === void 0 || (_this$meta_data8 = _this$meta_data8.dossier_credit) === null || _this$meta_data8 === void 0 ? void 0 : _this$meta_data8.cred_pub_tb_17;
    if (['Retail BF (Burkina Faso)'].includes((_this$meta_data9 = this.meta_data) === null || _this$meta_data9 === void 0 || (_this$meta_data9 = _this$meta_data9.dossier_credit) === null || _this$meta_data9 === void 0 ? void 0 : _this$meta_data9.applied_templ_name)) {
      var _this$meta_data$dossi3;
      history_cred = (_this$meta_data$dossi3 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi3 === void 0 ? void 0 : _this$meta_data$dossi3.cred_pub_tb_16105;
    }
    if (history_cred !== undefined) {
      var _history_cred;
      if (((_history_cred = history_cred) === null || _history_cred === void 0 ? void 0 : _history_cred.historiques_des_credits) !== "") {
        var _history_cred2;
        (_history_cred2 = history_cred) === null || _history_cred2 === void 0 || _history_cred2.historiques_des_credits.forEach(function (element) {
          if (element.statut === "Financé") {
            total += Number(String(element.encours).replace(/\s+/g, ""));
          }
        });
      }
    }
    return total;
  }), "capaciteAutoFinancementCaf", function capaciteAutoFinancementCaf() {
    var _this$resultat_net_ca, _this$autre_revenu_ca, _this$charge_familial, _this$autre_charge_ca;
    var revenus = (Number((_this$resultat_net_ca = this.resultat_net_caf) === null || _this$resultat_net_ca === void 0 ? void 0 : _this$resultat_net_ca.toString().replace('/\s+/g', '')) || 0) + (Number((_this$autre_revenu_ca = this.autre_revenu_caf) === null || _this$autre_revenu_ca === void 0 ? void 0 : _this$autre_revenu_ca.toString().replace('/\s+/g', '')) || 0);
    var charges = (Number((_this$charge_familial = this.charge_familiale_caf) === null || _this$charge_familial === void 0 ? void 0 : _this$charge_familial.toString().replace('/\s+/g', '')) || 0) + (Number((_this$autre_charge_ca = this.autre_charge_caf) === null || _this$autre_charge_ca === void 0 ? void 0 : _this$autre_charge_ca.toString().replace('/\s+/g', '')) || 0);
    return revenus - charges;
  }), "capaciteAutoFinancement", function capaciteAutoFinancement() {
    var _this$meta_data0;
    var dossier = (_this$meta_data0 = this.meta_data) === null || _this$meta_data0 === void 0 || (_this$meta_data0 = _this$meta_data0.dossier_credit) === null || _this$meta_data0 === void 0 ? void 0 : _this$meta_data0.cred_pub_tb_48;
    var a = 0;
    var b = 0;
    var c = 0;
    var d = 0;
    if ((dossier === null || dossier === void 0 ? void 0 : dossier.resultat_net_propose) !== undefined) {
      a = dossier === null || dossier === void 0 ? void 0 : dossier.resultat_net_propose;
      a = Number(String(a).replace(/\s+/g, ""));
    }
    if ((dossier === null || dossier === void 0 ? void 0 : dossier.autre_revenu_propose) !== undefined) {
      b = dossier === null || dossier === void 0 ? void 0 : dossier.autre_revenu_propose;
      b = Number(String(b).replace(/\s+/g, ""));
    }
    if ((dossier === null || dossier === void 0 ? void 0 : dossier.charge_familiale_propose) !== undefined) {
      c = dossier === null || dossier === void 0 ? void 0 : dossier.charge_familiale_propose;
      c = Number(String(c).replace(/\s+/g, ""));
    }
    if ((dossier === null || dossier === void 0 ? void 0 : dossier.autre_charge_propose) !== undefined) {
      d = dossier === null || dossier === void 0 ? void 0 : dossier.autre_charge_propose;
      d = Number(String(d).replace(/\s+/g, ""));
    }
    var rp = a + b;
    var rm = c + d;
    var res = rp - rm;
    return res;
  }), "tauxEndettement", function tauxEndettement() {
    var _this$meta_data1, _this$meta_data10;
    // console.log()
    var c = 0;
    var a = this.capaciteAutoFinancement();
    var b = this.creditConcurrence();
    if (((_this$meta_data1 = this.meta_data) === null || _this$meta_data1 === void 0 || (_this$meta_data1 = _this$meta_data1.dossier_credit[this.determineCredPubTables((_this$meta_data10 = this.meta_data) === null || _this$meta_data10 === void 0 || (_this$meta_data10 = _this$meta_data10.dossier_credit) === null || _this$meta_data10 === void 0 ? void 0 : _this$meta_data10.applied_templ_name)[1]]) === null || _this$meta_data1 === void 0 ? void 0 : _this$meta_data1.montant_demander) !== undefined) {
      var _this$meta_data11, _this$meta_data12;
      c = (_this$meta_data11 = this.meta_data) === null || _this$meta_data11 === void 0 || (_this$meta_data11 = _this$meta_data11.dossier_credit[this.determineCredPubTables((_this$meta_data12 = this.meta_data) === null || _this$meta_data12 === void 0 || (_this$meta_data12 = _this$meta_data12.dossier_credit) === null || _this$meta_data12 === void 0 ? void 0 : _this$meta_data12.applied_templ_name)[1]]) === null || _this$meta_data11 === void 0 ? void 0 : _this$meta_data11.montant_demander;
    }
    // console.log(a,b,c)
    var res = 0;
    c = Number(String(c).replace(/\s+/g, ""));
    if (a !== 0) {
      res = (b + c) / a;
    } else {
      return 0;
    }
    return res * 100;
  }), "tableClosedOrOpened", function tableClosedOrOpened() {
    this.seen = this.fetchClosedTables(this.tb_name + this.meta_data['cred_pub_key']);
  }), "openNotesModal", function openNotesModal() {
    var listing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    this.listingNote = listing;
    this.$modal.show(this.tb_name);
  }), "convertNumber", function convertNumber(valeur) {
    return Number(valeur === null || valeur === void 0 ? void 0 : valeur.toString().replace(/\s+/g, ""));
  }), "loadFindIndexByObj", function loadFindIndexByObj(label, tab) {
    if (!['', null, undefined].includes(tab)) {
      return tab.findIndex(function (el) {
        return el.position === label;
      });
    }
    return -1;
  }), "loadRetrieved", function loadRetrieved() {
    var _this$meta_data$dossi4, _this$meta_data$dossi5, _this$meta_data$dossi6, _this$meta_data$dossi7, _this$meta_data$dossi8, _this$meta_data$dossi9, _this$meta_data$dossi0, _this$meta_data$dossi1, _this$meta_data13, _this$meta_data14, _this$meta_data15, _this$meta_data16, _this$meta_data17, _this$meta_data18;
    var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
    var createdKey = this.tb_name;
    var createdKeyArr = createdKey.split("tb");
    // recup caf
    this.formDataToBeWatched.forces_caf = (_this$meta_data$dossi4 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi4 === void 0 || (_this$meta_data$dossi4 = _this$meta_data$dossi4.cred_pub_tb_20) === null || _this$meta_data$dossi4 === void 0 ? void 0 : _this$meta_data$dossi4.forces;
    this.formDataToBeWatched.faiblesses_caf = (_this$meta_data$dossi5 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi5 === void 0 || (_this$meta_data$dossi5 = _this$meta_data$dossi5.cred_pub_tb_20) === null || _this$meta_data$dossi5 === void 0 ? void 0 : _this$meta_data$dossi5.faiblesses;
    this.formDataToBeWatched.opportunites_caf = (_this$meta_data$dossi6 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi6 === void 0 || (_this$meta_data$dossi6 = _this$meta_data$dossi6.cred_pub_tb_20) === null || _this$meta_data$dossi6 === void 0 ? void 0 : _this$meta_data$dossi6.opportinutes;
    this.formDataToBeWatched.menaces_caf = (_this$meta_data$dossi7 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi7 === void 0 || (_this$meta_data$dossi7 = _this$meta_data$dossi7.cred_pub_tb_20) === null || _this$meta_data$dossi7 === void 0 ? void 0 : _this$meta_data$dossi7.menaces;
    //
    this.formDataToBeWatched.forces_arc = (_this$meta_data$dossi8 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi8 === void 0 || (_this$meta_data$dossi8 = _this$meta_data$dossi8.cred_pub_tb_48) === null || _this$meta_data$dossi8 === void 0 ? void 0 : _this$meta_data$dossi8.forces;
    this.formDataToBeWatched.faiblesses_arc = (_this$meta_data$dossi9 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi9 === void 0 || (_this$meta_data$dossi9 = _this$meta_data$dossi9.cred_pub_tb_48) === null || _this$meta_data$dossi9 === void 0 ? void 0 : _this$meta_data$dossi9.faiblesses;
    this.formDataToBeWatched.opportunites_arc = (_this$meta_data$dossi0 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi0 === void 0 || (_this$meta_data$dossi0 = _this$meta_data$dossi0.cred_pub_tb_48) === null || _this$meta_data$dossi0 === void 0 ? void 0 : _this$meta_data$dossi0.opportinutes;
    this.formDataToBeWatched.menaces_arc = (_this$meta_data$dossi1 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi1 === void 0 || (_this$meta_data$dossi1 = _this$meta_data$dossi1.cred_pub_tb_48) === null || _this$meta_data$dossi1 === void 0 ? void 0 : _this$meta_data$dossi1.menaces;
    this.appreciation_organisation_caf = (_this$meta_data13 = this.meta_data) === null || _this$meta_data13 === void 0 || (_this$meta_data13 = _this$meta_data13.dossier_credit) === null || _this$meta_data13 === void 0 || (_this$meta_data13 = _this$meta_data13.cred_pub_tb_16) === null || _this$meta_data13 === void 0 ? void 0 : _this$meta_data13.appreciation_organisation;
    this.appreciation_autre_risque_caf = (_this$meta_data14 = this.meta_data) === null || _this$meta_data14 === void 0 || (_this$meta_data14 = _this$meta_data14.dossier_credit) === null || _this$meta_data14 === void 0 || (_this$meta_data14 = _this$meta_data14.cred_pub_tb_16) === null || _this$meta_data14 === void 0 ? void 0 : _this$meta_data14.appreciation_evaluation;
    this.appreciation_autre_risque_arc = (_this$meta_data15 = this.meta_data) === null || _this$meta_data15 === void 0 || (_this$meta_data15 = _this$meta_data15.dossier_credit) === null || _this$meta_data15 === void 0 || (_this$meta_data15 = _this$meta_data15.cred_pub_tb_48) === null || _this$meta_data15 === void 0 ? void 0 : _this$meta_data15.appreciation_autre_risque_arc;
    this.appreciation_organisation_arc = (_this$meta_data16 = this.meta_data) === null || _this$meta_data16 === void 0 || (_this$meta_data16 = _this$meta_data16.dossier_credit) === null || _this$meta_data16 === void 0 || (_this$meta_data16 = _this$meta_data16.cred_pub_tb_48) === null || _this$meta_data16 === void 0 ? void 0 : _this$meta_data16.appreciation_organisation_arc;
    this.appreciation_risque_commerciale_caf = (_this$meta_data17 = this.meta_data) === null || _this$meta_data17 === void 0 || (_this$meta_data17 = _this$meta_data17.dossier_credit) === null || _this$meta_data17 === void 0 || (_this$meta_data17 = _this$meta_data17.cred_pub_tb_16) === null || _this$meta_data17 === void 0 ? void 0 : _this$meta_data17.appreciation;
    this.appreciation_risque_commerciale_arc = (_this$meta_data18 = this.meta_data) === null || _this$meta_data18 === void 0 || (_this$meta_data18 = _this$meta_data18.dossier_credit) === null || _this$meta_data18 === void 0 || (_this$meta_data18 = _this$meta_data18.cred_pub_tb_48) === null || _this$meta_data18 === void 0 ? void 0 : _this$meta_data18.appreciation_risque_commerciale_arc;

    // console.log("le sage", this.meta_data.dossier_credit?.cred_pub_tb_20?.forces)
    if (this.meta_data['dossier_credit']["cred_pub_tb_48"] != undefined) {}
    createdKey = "cred_pub_tb_" + createdKeyArr[1];
    // console.log('franck',this.meta_data['dossier_credit']["cred_pub_tb_13"])

    var remote = this.meta_data['dossier_credit']["cred_pub_tb_48"];

    // let remote_bilan_actifs = this.meta_data['dossier_credit']["cred_pub_tb_12"]?.actifs
    // let remote_bilan_passifs = this.meta_data['dossier_credit']["cred_pub_tb_12"]?.passifs

    if (this.meta_data['dossier_credit'][createdKey] === undefined) {
      var _this$meta_data19, _this$meta_data20, _this$meta_data21, _this$meta_data22, _this$meta_data23, _this$meta_data24, _this$meta_data25, _this$meta_data26, _this$meta_data27, _this$meta_data28;
      this.formDataToBeWatched.chiffre_affaire_src = remote.chiffre_affaire_propo_analyste;
      this.formDataToBeWatched.cout_achat_src = remote.cout_achat_propose;
      this.formDataToBeWatched.marge_commerciale_src = this.calculMargeCom();
      this.formDataToBeWatched.charge_exploitation_src = remote.charge_exploitation_propose;
      this.formDataToBeWatched.resultat_net_src = remote.resultat_net_propose;
      this.formDataToBeWatched.autre_revenu_src = remote.autre_revenu_propose;
      this.formDataToBeWatched.autre_charge_src = remote.autre_charge_propose;
      this.formDataToBeWatched.charge_familiale_src = remote.charge_familiale_propose;
      this.capacite_autofinancement_src = this.capaciteAutoFinancement();
      this.formDataToBeWatched.montant_credit_src = remote.montant_credit_propose;
      this.formDataToBeWatched.montant_echeance_credit_src = remote.montant_echeance_credit_propose;
      this.formDataToBeWatched.tresorerie_src = remote.tresorerie_propose;
      this.formDataToBeWatched.appreciation_organisation_src = (_this$meta_data19 = this.meta_data) === null || _this$meta_data19 === void 0 || (_this$meta_data19 = _this$meta_data19.dossier_credit) === null || _this$meta_data19 === void 0 || (_this$meta_data19 = _this$meta_data19.cred_pub_tb_48) === null || _this$meta_data19 === void 0 ? void 0 : _this$meta_data19.appreciation_organisation_arc;
      this.formDataToBeWatched.appreciation_autre_risque_src = (_this$meta_data20 = this.meta_data) === null || _this$meta_data20 === void 0 || (_this$meta_data20 = _this$meta_data20.dossier_credit) === null || _this$meta_data20 === void 0 || (_this$meta_data20 = _this$meta_data20.cred_pub_tb_48) === null || _this$meta_data20 === void 0 ? void 0 : _this$meta_data20.appreciation_autre_risque_arc;
      this.formDataToBeWatched.appreciation_risque_commerciale_src = (_this$meta_data21 = this.meta_data) === null || _this$meta_data21 === void 0 || (_this$meta_data21 = _this$meta_data21.dossier_credit) === null || _this$meta_data21 === void 0 || (_this$meta_data21 = _this$meta_data21.cred_pub_tb_48) === null || _this$meta_data21 === void 0 ? void 0 : _this$meta_data21.appreciation_autre_risque_arc;
      this.formDataToBeWatched.taux_endettement_src = (_this$meta_data22 = this.meta_data) === null || _this$meta_data22 === void 0 || (_this$meta_data22 = _this$meta_data22.dossier_credit) === null || _this$meta_data22 === void 0 ? void 0 : _this$meta_data22.cred_pub_tb_48.taux_endettement_propose;
      this.formDataToBeWatched.tresorerie_espece_propo_analyste = (_this$meta_data23 = this.meta_data) === null || _this$meta_data23 === void 0 || (_this$meta_data23 = _this$meta_data23.dossier_credit) === null || _this$meta_data23 === void 0 || (_this$meta_data23 = _this$meta_data23.cred_pub_tb_48) === null || _this$meta_data23 === void 0 ? void 0 : _this$meta_data23.tresorerie_espece_propo_analyste;
      this.formDataToBeWatched.creance_acompte_propose = (_this$meta_data24 = this.meta_data) === null || _this$meta_data24 === void 0 || (_this$meta_data24 = _this$meta_data24.dossier_credit) === null || _this$meta_data24 === void 0 || (_this$meta_data24 = _this$meta_data24.cred_pub_tb_48) === null || _this$meta_data24 === void 0 ? void 0 : _this$meta_data24.creance_acompte_propose;
      this.formDataToBeWatched.stock_propose = (_this$meta_data25 = this.meta_data) === null || _this$meta_data25 === void 0 || (_this$meta_data25 = _this$meta_data25.dossier_credit) === null || _this$meta_data25 === void 0 || (_this$meta_data25 = _this$meta_data25.cred_pub_tb_48) === null || _this$meta_data25 === void 0 ? void 0 : _this$meta_data25.stock_propose;
      this.formDataToBeWatched.immobilisation_propose = (_this$meta_data26 = this.meta_data) === null || _this$meta_data26 === void 0 || (_this$meta_data26 = _this$meta_data26.dossier_credit) === null || _this$meta_data26 === void 0 || (_this$meta_data26 = _this$meta_data26.cred_pub_tb_48) === null || _this$meta_data26 === void 0 ? void 0 : _this$meta_data26.immobilisation_propose;
      this.formDataToBeWatched.passif_ope_propose = (_this$meta_data27 = this.meta_data) === null || _this$meta_data27 === void 0 || (_this$meta_data27 = _this$meta_data27.dossier_credit) === null || _this$meta_data27 === void 0 || (_this$meta_data27 = _this$meta_data27.cred_pub_tb_48) === null || _this$meta_data27 === void 0 ? void 0 : _this$meta_data27.passif_ope_propose;
      this.formDataToBeWatched.passifs_fin_propose = (_this$meta_data28 = this.meta_data) === null || _this$meta_data28 === void 0 || (_this$meta_data28 = _this$meta_data28.dossier_credit) === null || _this$meta_data28 === void 0 || (_this$meta_data28 = _this$meta_data28.cred_pub_tb_48) === null || _this$meta_data28 === void 0 ? void 0 : _this$meta_data28.passifs_fin_propose;
    }
    this.loadIncommingData();
    if (lentb.length > 0) {
      var _this$meta_data$dossi10;
      if (this.meta_data["dossier_credit"][createdKey] != undefined) {
        this.formDataToBeWatched = this.meta_data["dossier_credit"][createdKey];
        if (this.meta_data['dossier_credit'][createdKey].condition_additionnelles_avant_decaissement != undefined) {
          if (this.meta_data['dossier_credit'][createdKey].condition_additionnelles_avant_decaissement != "") {
            this.condition_additionnelles_avant_decaissement = this.meta_data['dossier_credit'][createdKey].condition_additionnelles_avant_decaissement;
          }
        }
        if (this.meta_data['dossier_credit'][createdKey].condition_additionnelles_apres_decaissement != undefined) {
          if (this.meta_data['dossier_credit'][createdKey].condition_additionnelles_apres_decaissement != "") {
            this.condition_additionnelles_apres_decaissement = this.meta_data['dossier_credit'][createdKey].condition_additionnelles_apres_decaissement;
          }
        }
      }
      // Close table by default
      this.defaultRetract(false, (_this$meta_data$dossi10 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi10 === void 0 ? void 0 : _this$meta_data$dossi10.applied_templ_id);
    }
  }), "loadIncommingData", function loadIncommingData() {
    var _this$meta_data$dossi11, _this$meta_data$dossi12, _this$meta_data29, _this$meta_data$dossi15, _this$meta_data$dossi16, _this$meta_data$dossi17, _this$meta_data$dossi18, _this$meta_data$dossi19, _this$meta_data$dossi20, _this$meta_data$dossi21, _this$meta_data$dossi22, _this$meta_data$dossi23, _this$meta_data$dossi24, _this$meta_data$dossi25, _this$meta_data$dossi26, _this$meta_data$dossi27, _this$meta_data$dossi28, _this$meta_data$dossi29, _this$meta_data$dossi30, _this$meta_data$dossi31, _this$meta_data$dossi32, _this$meta_data$dossi33, _this$meta_data$dossi34, _this$meta_data$dossi35, _this$meta_data$dossi36, _this$meta_data$dossi37, _this$meta_data$dossi38, _this$meta_data$dossi39, _this$meta_data$dossi40, _this$meta_data$dossi41, _this$meta_data$dossi42, _this$meta_data$dossi43, _this$meta_data$dossi44, _this$meta_data$dossi45, _this$meta_data$dossi46, _this$meta_data$dossi47, _this$meta_data$dossi48, _this$meta_data$dossi49, _this$meta_data$dossi50, _this$meta_data$dossi51;
    var remote_bilan_actif = (_this$meta_data$dossi11 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi11 === void 0 || (_this$meta_data$dossi11 = _this$meta_data$dossi11.cred_pub_tb_12) === null || _this$meta_data$dossi11 === void 0 ? void 0 : _this$meta_data$dossi11.actifs;
    var remote_bilan_passif = (_this$meta_data$dossi12 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi12 === void 0 || (_this$meta_data$dossi12 = _this$meta_data$dossi12.cred_pub_tb_12) === null || _this$meta_data$dossi12 === void 0 ? void 0 : _this$meta_data$dossi12.passifs;
    var cred_tb_13_ = "cred_pub_tb_13";
    var cred_tb_12_ = "cred_pub_tb_12";
    if (['Retail BF (Burkina Faso)'].includes((_this$meta_data29 = this.meta_data) === null || _this$meta_data29 === void 0 || (_this$meta_data29 = _this$meta_data29.dossier_credit) === null || _this$meta_data29 === void 0 ? void 0 : _this$meta_data29.applied_templ_name)) {
      var _this$meta_data$dossi13, _this$meta_data$dossi14;
      // ['BFR (Fonds de Roulement)', 'Investissement', 'Vide'].includes(dossier_credit?.applied_templ_name)
      cred_tb_13_ = "cred_pub_tb_16107";
      cred_tb_12_ = "cred_pub_tb_16106";
      remote_bilan_actif = (_this$meta_data$dossi13 = this.meta_data['dossier_credit']["cred_pub_tb_16106"]) === null || _this$meta_data$dossi13 === void 0 ? void 0 : _this$meta_data$dossi13.actifs;
      remote_bilan_passif = (_this$meta_data$dossi14 = this.meta_data['dossier_credit']["cred_pub_tb_16106"]) === null || _this$meta_data$dossi14 === void 0 ? void 0 : _this$meta_data$dossi14.passifs;
    }
    this.chiffre_affaire_caf = (_this$meta_data$dossi15 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi15 === void 0 || (_this$meta_data$dossi15 = _this$meta_data$dossi15[cred_tb_13_]) === null || _this$meta_data$dossi15 === void 0 || (_this$meta_data$dossi15 = _this$meta_data$dossi15.benefices_pertes[this.label_keys[0]]) === null || _this$meta_data$dossi15 === void 0 ? void 0 : _this$meta_data$dossi15.montant_c;
    this.cout_achat_caf = (_this$meta_data$dossi16 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi16 === void 0 || (_this$meta_data$dossi16 = _this$meta_data$dossi16[cred_tb_13_]) === null || _this$meta_data$dossi16 === void 0 || (_this$meta_data$dossi16 = _this$meta_data$dossi16.benefices_pertes[this.label_keys[1]]) === null || _this$meta_data$dossi16 === void 0 ? void 0 : _this$meta_data$dossi16.montant_c;
    this.marge_commerciale_caf = this.calculMargeCom();
    this.charge_exploitation_caf = (_this$meta_data$dossi17 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi17 === void 0 || (_this$meta_data$dossi17 = _this$meta_data$dossi17[cred_tb_13_]) === null || _this$meta_data$dossi17 === void 0 || (_this$meta_data$dossi17 = _this$meta_data$dossi17.benefices_pertes[this.label_keys[2]]) === null || _this$meta_data$dossi17 === void 0 ? void 0 : _this$meta_data$dossi17.montant_c;
    this.resultat_net_caf = (_this$meta_data$dossi18 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi18 === void 0 || (_this$meta_data$dossi18 = _this$meta_data$dossi18[cred_tb_13_]) === null || _this$meta_data$dossi18 === void 0 || (_this$meta_data$dossi18 = _this$meta_data$dossi18.benefices_pertes[this.label_keys[3]]) === null || _this$meta_data$dossi18 === void 0 ? void 0 : _this$meta_data$dossi18.montant_c;
    this.autre_revenu_caf = (_this$meta_data$dossi19 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi19 === void 0 || (_this$meta_data$dossi19 = _this$meta_data$dossi19[cred_tb_13_]) === null || _this$meta_data$dossi19 === void 0 || (_this$meta_data$dossi19 = _this$meta_data$dossi19.benefices_pertes[this.label_keys[4]]) === null || _this$meta_data$dossi19 === void 0 ? void 0 : _this$meta_data$dossi19.montant_c;
    this.autre_charge_caf = (_this$meta_data$dossi20 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi20 === void 0 || (_this$meta_data$dossi20 = _this$meta_data$dossi20[cred_tb_13_]) === null || _this$meta_data$dossi20 === void 0 || (_this$meta_data$dossi20 = _this$meta_data$dossi20.benefices_pertes[this.label_keys[6]]) === null || _this$meta_data$dossi20 === void 0 ? void 0 : _this$meta_data$dossi20.montant_c;
    this.charge_familiale_caf = (_this$meta_data$dossi21 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi21 === void 0 || (_this$meta_data$dossi21 = _this$meta_data$dossi21[cred_tb_13_]) === null || _this$meta_data$dossi21 === void 0 || (_this$meta_data$dossi21 = _this$meta_data$dossi21.benefices_pertes[this.label_keys[5]]) === null || _this$meta_data$dossi21 === void 0 ? void 0 : _this$meta_data$dossi21.montant_c;
    this.capacite_autofinancement_caf = this.capaciteAutoFinancement();
    this.montant_credit_caf = (_this$meta_data$dossi22 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi22 === void 0 || (_this$meta_data$dossi22 = _this$meta_data$dossi22[this.determineCredPubTables((_this$meta_data$dossi23 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi23 === void 0 ? void 0 : _this$meta_data$dossi23.applied_templ_name)[1]]) === null || _this$meta_data$dossi22 === void 0 ? void 0 : _this$meta_data$dossi22.montant_credit;
    this.montant_echeance_credit_caf = (_this$meta_data$dossi24 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi24 === void 0 || (_this$meta_data$dossi24 = _this$meta_data$dossi24[this.determineCredPubTables((_this$meta_data$dossi25 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi25 === void 0 ? void 0 : _this$meta_data$dossi25.applied_templ_name)[1]]) === null || _this$meta_data$dossi24 === void 0 ? void 0 : _this$meta_data$dossi24.echeance.echeance;
    this.tresorerie_caf = (_this$meta_data$dossi26 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi26 === void 0 || (_this$meta_data$dossi26 = _this$meta_data$dossi26[cred_tb_12_]) === null || _this$meta_data$dossi26 === void 0 ? void 0 : _this$meta_data$dossi26.actifs[0].montant_c;
    // console.log('tresorerie_caf',this.meta_data["dossier_credit"]?.cred_tb_12_?.actifs[0].montant_c)

    if (this.convertNumber(this.capacite_autofinancement_caf) != 0) {
      this.taux_endettement_caf = (this.convertNumber(this.montant_echeance_credit_caf) + this.convertNumber(this.creditConcurrence())) / this.convertNumber(this.capacite_autofinancement_caf) * 100;
    }
    this.chiffre_affaire_arc = (_this$meta_data$dossi27 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi27 === void 0 || (_this$meta_data$dossi27 = _this$meta_data$dossi27.cred_pub_tb_48) === null || _this$meta_data$dossi27 === void 0 ? void 0 : _this$meta_data$dossi27.chiffre_affaire_propo_analyste;
    this.cout_achat_arc = (_this$meta_data$dossi28 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi28 === void 0 || (_this$meta_data$dossi28 = _this$meta_data$dossi28.cred_pub_tb_48) === null || _this$meta_data$dossi28 === void 0 ? void 0 : _this$meta_data$dossi28.cout_achat_propose;
    this.marge_commerciale_arc = (_this$meta_data$dossi29 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi29 === void 0 || (_this$meta_data$dossi29 = _this$meta_data$dossi29.cred_pub_tb_48) === null || _this$meta_data$dossi29 === void 0 ? void 0 : _this$meta_data$dossi29.marge_commerciale_propose;
    this.charge_exploitation_arc = (_this$meta_data$dossi30 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi30 === void 0 || (_this$meta_data$dossi30 = _this$meta_data$dossi30.cred_pub_tb_48) === null || _this$meta_data$dossi30 === void 0 ? void 0 : _this$meta_data$dossi30.charge_exploitation_propose;
    this.resultat_net_arc = (_this$meta_data$dossi31 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi31 === void 0 || (_this$meta_data$dossi31 = _this$meta_data$dossi31.cred_pub_tb_48) === null || _this$meta_data$dossi31 === void 0 ? void 0 : _this$meta_data$dossi31.resultat_net_propose;
    this.autre_revenu_arc = (_this$meta_data$dossi32 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi32 === void 0 || (_this$meta_data$dossi32 = _this$meta_data$dossi32.cred_pub_tb_48) === null || _this$meta_data$dossi32 === void 0 ? void 0 : _this$meta_data$dossi32.autre_revenu_propose;
    this.autre_charge_arc = (_this$meta_data$dossi33 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi33 === void 0 || (_this$meta_data$dossi33 = _this$meta_data$dossi33.cred_pub_tb_48) === null || _this$meta_data$dossi33 === void 0 ? void 0 : _this$meta_data$dossi33.autre_charge_propose;
    this.charge_familiale_arc = (_this$meta_data$dossi34 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi34 === void 0 || (_this$meta_data$dossi34 = _this$meta_data$dossi34.cred_pub_tb_48) === null || _this$meta_data$dossi34 === void 0 ? void 0 : _this$meta_data$dossi34.charge_familiale_propose;
    this.capacite_autofinancement_arc = (_this$meta_data$dossi35 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi35 === void 0 || (_this$meta_data$dossi35 = _this$meta_data$dossi35.cred_pub_tb_48) === null || _this$meta_data$dossi35 === void 0 ? void 0 : _this$meta_data$dossi35.capacite_autofinancement_propose;
    this.montant_credit_arc = (_this$meta_data$dossi36 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi36 === void 0 || (_this$meta_data$dossi36 = _this$meta_data$dossi36.cred_pub_tb_48) === null || _this$meta_data$dossi36 === void 0 ? void 0 : _this$meta_data$dossi36.montant_credit_propose;
    this.montant_echeance_credit_arc = (_this$meta_data$dossi37 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi37 === void 0 || (_this$meta_data$dossi37 = _this$meta_data$dossi37.cred_pub_tb_48) === null || _this$meta_data$dossi37 === void 0 ? void 0 : _this$meta_data$dossi37.montant_echeance_credit_propose;
    this.tresorerie_arc = (_this$meta_data$dossi38 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi38 === void 0 || (_this$meta_data$dossi38 = _this$meta_data$dossi38.cred_pub_tb_48) === null || _this$meta_data$dossi38 === void 0 ? void 0 : _this$meta_data$dossi38.tresorerie_propose;
    // console.log('tresorerie_arc',this.meta_data["dossier_credit"]?.cred_pub_tb_48?.actifs[0].montant_c)
    this.taux_endettement_arc = (_this$meta_data$dossi39 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi39 === void 0 || (_this$meta_data$dossi39 = _this$meta_data$dossi39.cred_pub_tb_48) === null || _this$meta_data$dossi39 === void 0 ? void 0 : _this$meta_data$dossi39.taux_endettement_propose;
    // console.log('of',this.taux_endettement_arc )

    this.tresorerie_espece = (_this$meta_data$dossi40 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi40 === void 0 || (_this$meta_data$dossi40 = _this$meta_data$dossi40[cred_tb_12_]) === null || _this$meta_data$dossi40 === void 0 || (_this$meta_data$dossi40 = _this$meta_data$dossi40.actifs[this.loadFindIndexByObjForBilan("Trésorerie", remote_bilan_actif)]) === null || _this$meta_data$dossi40 === void 0 ? void 0 : _this$meta_data$dossi40.montant_c;
    this.creance_acompte = (_this$meta_data$dossi41 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi41 === void 0 || (_this$meta_data$dossi41 = _this$meta_data$dossi41[cred_tb_12_]) === null || _this$meta_data$dossi41 === void 0 || (_this$meta_data$dossi41 = _this$meta_data$dossi41.actifs[this.loadFindIndexByObjForBilan("Créances", remote_bilan_actif)]) === null || _this$meta_data$dossi41 === void 0 ? void 0 : _this$meta_data$dossi41.montant_c;
    this.stock_caf = (_this$meta_data$dossi42 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi42 === void 0 || (_this$meta_data$dossi42 = _this$meta_data$dossi42[cred_tb_12_]) === null || _this$meta_data$dossi42 === void 0 || (_this$meta_data$dossi42 = _this$meta_data$dossi42.actifs[this.loadFindIndexByObjForBilan("Stock", remote_bilan_actif)]) === null || _this$meta_data$dossi42 === void 0 ? void 0 : _this$meta_data$dossi42.montant_c;
    this.immobilisation = (_this$meta_data$dossi43 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi43 === void 0 || (_this$meta_data$dossi43 = _this$meta_data$dossi43[cred_tb_12_]) === null || _this$meta_data$dossi43 === void 0 || (_this$meta_data$dossi43 = _this$meta_data$dossi43.actifs[this.loadFindIndexByObjForBilan("IMMOBILISATIONS TOTALES", remote_bilan_actif)]) === null || _this$meta_data$dossi43 === void 0 ? void 0 : _this$meta_data$dossi43.montant_c;
    this.passif_ope = (_this$meta_data$dossi44 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi44 === void 0 || (_this$meta_data$dossi44 = _this$meta_data$dossi44[cred_tb_12_]) === null || _this$meta_data$dossi44 === void 0 || (_this$meta_data$dossi44 = _this$meta_data$dossi44.passifs[this.loadFindIndexByObjForBilan("Dettes opérationnelles à court terme", remote_bilan_passif)]) === null || _this$meta_data$dossi44 === void 0 ? void 0 : _this$meta_data$dossi44.montant_c;
    this.passifs_fin = (_this$meta_data$dossi45 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi45 === void 0 || (_this$meta_data$dossi45 = _this$meta_data$dossi45[cred_tb_12_]) === null || _this$meta_data$dossi45 === void 0 || (_this$meta_data$dossi45 = _this$meta_data$dossi45.passifs[this.loadFindIndexByObjForBilan("Dettes financières à court terme", remote_bilan_passif)]) === null || _this$meta_data$dossi45 === void 0 ? void 0 : _this$meta_data$dossi45.montant_c;
    this.tresorerie_espece_arc = (_this$meta_data$dossi46 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi46 === void 0 || (_this$meta_data$dossi46 = _this$meta_data$dossi46.cred_pub_tb_48) === null || _this$meta_data$dossi46 === void 0 ? void 0 : _this$meta_data$dossi46.tresorerie_espece_propo_analyste;
    this.creance_acompte_arc = (_this$meta_data$dossi47 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi47 === void 0 || (_this$meta_data$dossi47 = _this$meta_data$dossi47.cred_pub_tb_48) === null || _this$meta_data$dossi47 === void 0 ? void 0 : _this$meta_data$dossi47.creance_acompte_propose;
    this.stock_arc = (_this$meta_data$dossi48 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi48 === void 0 || (_this$meta_data$dossi48 = _this$meta_data$dossi48.cred_pub_tb_48) === null || _this$meta_data$dossi48 === void 0 ? void 0 : _this$meta_data$dossi48.stock_propose;
    this.immobilisation_arc = (_this$meta_data$dossi49 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi49 === void 0 || (_this$meta_data$dossi49 = _this$meta_data$dossi49.cred_pub_tb_48) === null || _this$meta_data$dossi49 === void 0 ? void 0 : _this$meta_data$dossi49.immobilisation_propose;
    this.passif_ope_arc = (_this$meta_data$dossi50 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi50 === void 0 || (_this$meta_data$dossi50 = _this$meta_data$dossi50.cred_pub_tb_48) === null || _this$meta_data$dossi50 === void 0 ? void 0 : _this$meta_data$dossi50.passif_ope_propose;
    this.passifs_fin_arc = (_this$meta_data$dossi51 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi51 === void 0 || (_this$meta_data$dossi51 = _this$meta_data$dossi51.cred_pub_tb_48) === null || _this$meta_data$dossi51 === void 0 ? void 0 : _this$meta_data$dossi51.passifs_fin_propose;
  }), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_methods, "setTbVal", function setTbVal(val) {
    this.cred_pub_key = val;
  }), "loadWithError", function loadWithError(err) {
    // window.location.href = "/login";
  }), "loadFindIndexByObjForBilan", function loadFindIndexByObjForBilan(label, tab) {
    if (!['', null, undefined].includes(tab)) {
      return tab === null || tab === void 0 ? void 0 : tab.findIndex(function (el) {
        return el.label === label;
      });
    }
    return -1;
  }), "send2Backend", function send2Backend(res, newVal, oldVal) {
    this.authcheck = true;
    this.authcheckUsr = res.data;
    this.authcheckStatus = res.status;
    if (this.authcheckStatus === 401) {
      // window.location.href = "/login";
    }
    if (this.authcheck === true) {
      this.$emit("autosaving");
      this.$axios.post(this.ebapisHost + "creditbuilder/api/v1/autosaving/", {
        user: this.authcheckUsr,
        meta_parseable: this.meta_parseable,
        filledData: this.formDataToBeWatched,
        loadDossier: true
      }).then(function (response) {
        this.$emit("autosaving");
        // this.$Progress.finish();
        // console.log(response);
        var tbFetcheData = response.data;
        if (tbFetcheData["is_success"] === true) {
          this.dossier_credit = tbFetcheData['dossier_credit'];
          this.$emit("load-shell");
        }
      }.bind(this))["catch"](function (error) {
        this.$Progress.finish();
        console.log(error);
      }.bind(this));
    } else {
      alert("Unauthenticated");
    }
  }), "retract", function retract() {
    this.seen = !this.seen;
    var a = {
      "tb_name": this.tb_name + this.meta_data['cred_pub_key'],
      "status": this.seen
    };
    EventBus.$emit("savedclosed-table", a);
  }), "defaultRetract", function defaultRetract(rc, ra) {
    if (ra != null) {
      this.seen = rc;
      var a = {
        "tb_name": this.tb_name + this.meta_data['cred_pub_key'],
        "status": this.seen
      };
      EventBus.$emit("savedclosed-table", a);
    }
  }), "loadTbAttrs", function loadTbAttrs() {
    var l = [];
    var topdivel = this.$refs.topdiv;
    var k = document.querySelectorAll(".subdiv" + this.tb_name);
    // console.log(k)
    k.forEach(function (e) {
      l.push(e.innerText);
      // console.log(l)
    });
    var p = {
      name_of_title: topdivel.innerText,
      list_of_content: l,
      id: "av3-head"
    };
    // console.log(p)
    this.$emit("load-buffer", p);
  }), "somX3", function somX3(ob, key) {
    var som = 0;
    ob.filter(function (elm) {
      var result = String(elm[key]).replace(/\s+/g, "");
      if (result === "") {
        som += 0;
      } else {
        som += parseInt(result);
      }
    });
    return som;
  }), "somX4", function somX4(ob, key) {
    var som = 0;
    var val1 = ob.replace(/\s+/g, "");
    var val2 = key.replace(/\s+/g, "");
    som = val1 + val2;
    return som;
  }), "handleInput", function handleInput(evt) {
    // this.formDataToBeWatched["lignes_existantes"] = this.lignes_existantes;
    // this.formDataToBeWatched["nouvelles_lignes"] = this.nouvelles_lignes;
    this.formDataToBeWatched["condition_additionnelles_avant_decaissement"] = this.condition_additionnelles_avant_decaissement;
    this.formDataToBeWatched["condition_additionnelles_apres_decaissement"] = this.condition_additionnelles_apres_decaissement;
    this.formDataToBeWatched.marge_commerciale_src = this.margeComProp;
    this.formDataToBeWatched.capacite_autofinancement_src = this.capaciteAutoFin;
    // this.formDataToBeWatched.taux_endettement_src = this.convertNumber(this.formDataToBeWatched.montant_echeance_credit_src) / this.convertNumber(this.formDataToBeWatched.capacite_autofinancement_src)
  }), _defineProperty(_methods, "instruction3", function instruction3(id) {
    var id0 = '#' + id;
    window.$(id0).modal('show');
  })),
  watch: {
    formDataToBeWatched: {
      handler: function handler(newVal, oldVal) {
        // if (oldVal === undefined) {
        //   return
        // }
        this.formDataToBeWatched.marge_commerciale_src = this.margeComProp;
        this.formDataToBeWatched.capacite_autofinancement_src = this.capaciteAutoFin;
        this.autosaving(newVal, oldVal);
      },
      deep: true,
      immediate: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/avisscr/filiale/AV3.vue?vue&type=template&id=0eebb37c&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/avisscr/filiale/AV3.vue?vue&type=template&id=0eebb37c&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$formDataToBeWatch, _vm$authcheckUsr, _vm$authcheckUsr2, _vm$authcheckUsr3, _vm$authcheckUsr4, _vm$authcheckUsr5, _vm$authcheckUsr6, _vm$authcheckUsr7, _vm$authcheckUsr8, _vm$authcheckUsr9, _vm$authcheckUsr0, _vm$authcheckUsr1, _vm$authcheckUsr10, _vm$formDataToBeWatch2;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    on: {
      contextmenu: function contextmenu($event) {
        return _vm.$refs.menu.open($event, _vm.tb_name);
      }
    }
  }, [_c("div", {
    staticClass: "row bg-light",
    staticStyle: {
      width: "100%",
      height: "100%"
    }
  }, [_vm.seen === true ? _c("div", {
    staticClass: "card",
    staticStyle: {
      width: "100%",
      height: "100%"
    }
  }, [_c("ContextMenu", {
    ref: "menu",
    attrs: {
      cred_pub_key: _vm.meta_parseable.cred_pub_key,
      id: _vm.tb_name,
      contextList: _vm.contextList
    }
  }), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc pb-0 pt-2"
  }, [_c("h6", {
    ref: "topdiv",
    staticClass: "head",
    attrs: {
      id: "av3-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Analyse financière, forces et faiblesses\n                        ")]), _vm._v(" "), _c("div", {
    staticClass: "col-auto"
  }, [((_vm$formDataToBeWatch = _vm.formDataToBeWatched.notes) === null || _vm$formDataToBeWatch === void 0 ? void 0 : _vm$formDataToBeWatch.length) > 0 ? _c("div", {
    staticStyle: {
      display: "inline-block",
      position: "relative"
    }
  }, [_c("span", {
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.openNotesModal(true);
      }
    }
  }, [_c("i", {
    staticClass: "icofont icofont-comment text-white px-2",
    staticStyle: {
      "font-size": "12px"
    },
    attrs: {
      role: "button"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "badge-sm pb-3"
  }, [_c("span", [_vm._v(" " + _vm._s(_vm.formDataToBeWatched.notes.length) + " ")])])])]) : _vm._e(), _vm._v(" "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    },
    on: {
      click: function click($event) {
        return _vm.retract();
      }
    }
  })], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_vm.seen5 === true ? _c("div", [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen5 = !_vm.seen5;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "analyse-financière"
    }
  }, [_vm._v("\n                                Analyse financière\n                                "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)]), _vm._v(" "), _c("br"), _vm._v(" "), _vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "row gy-2"
  }, [_c("div", {
    staticClass: "col-6"
  }, [_vm._m(1), _vm._v(" "), _c("currency-input", {
    attrs: {
      type: "text",
      id: "chiffre_affaire_caf",
      value: _vm.chiffre_affaire_caf,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_vm._m(2), _vm._v(" "), _c("currency-input", {
    attrs: {
      type: "text",
      id: "chiffre_affaire_arc",
      value: _vm.chiffre_affaire_arc,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_vm._m(3), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control input-box",
    attrs: {
      required: "",
      type: "text",
      id: "chiffre_affaire_src",
      value: _vm.formDataToBeWatched.chiffre_affaire_src
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pl-4"
  }, [_vm._m(4), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.formDataToBeWatched.justification_chiffre_affaire,
      expression: "formDataToBeWatched.justification_chiffre_affaire",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      cols: "30",
      rows: "2"
    },
    domProps: {
      value: _vm.formDataToBeWatched.justification_chiffre_affaire
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.formDataToBeWatched, "justification_chiffre_affaire", $event.target.value);
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_vm._m(5), _vm._v(" "), _c("currency-input", {
    attrs: {
      required: "",
      type: "text",
      value: _vm.cout_achat_caf,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_vm._m(6), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control",
    attrs: {
      disabled: "",
      type: "text",
      id: "cout_achat_arc",
      value: _vm.cout_achat_arc
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_vm._m(7), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control input-box",
    attrs: {
      required: "",
      type: "text",
      id: "cout_achat_src",
      value: _vm.formDataToBeWatched.cout_achat_src
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pl-4"
  }, [_vm._m(8), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.formDataToBeWatched.justification_cout_achat,
      expression: "formDataToBeWatched.justification_cout_achat",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      cols: "30",
      rows: "2"
    },
    domProps: {
      value: _vm.formDataToBeWatched.justification_cout_achat
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.formDataToBeWatched, "justification_cout_achat", $event.target.value);
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_vm._m(9), _vm._v(" "), _c("currency-input", {
    attrs: {
      required: "",
      type: "text",
      id: "marge_commerciale_caf",
      value: _vm.marge_commerciale_caf,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_vm._m(10), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control",
    attrs: {
      disabled: "",
      type: "text",
      id: "marge_commerciale_arc",
      value: _vm.marge_commerciale_arc
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_vm._m(11), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control input-box",
    attrs: {
      required: "",
      type: "text",
      id: "marge_commerciale_src",
      value: _vm.formDataToBeWatched.marge_commerciale_src
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pl-4"
  }, [_vm._m(12), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.formDataToBeWatched.justification_marge_commerciale,
      expression: "formDataToBeWatched.justification_marge_commerciale",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      cols: "30",
      rows: "2"
    },
    domProps: {
      value: _vm.formDataToBeWatched.justification_marge_commerciale
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.formDataToBeWatched, "justification_marge_commerciale", $event.target.value);
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_vm._m(13), _vm._v(" "), _c("currency-input", {
    attrs: {
      disabled: "",
      type: "text",
      value: _vm.charge_exploitation_caf
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_vm._m(14), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control",
    attrs: {
      disabled: "",
      type: "text",
      id: "charge_exploitation_propose",
      value: _vm.charge_exploitation_arc
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_vm._m(15), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control input-box",
    attrs: {
      required: "",
      type: "text",
      id: "charge_exploitation_src",
      value: _vm.formDataToBeWatched.charge_exploitation_src
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pl-4"
  }, [_vm._m(16), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.formDataToBeWatched.justification_charge_exploitation,
      expression: "formDataToBeWatched.justification_charge_exploitation",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      cols: "30",
      rows: "2"
    },
    domProps: {
      value: _vm.formDataToBeWatched.justification_charge_exploitation
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.formDataToBeWatched, "justification_charge_exploitation", $event.target.value);
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_vm._m(17), _vm._v(" "), _c("currency-input", {
    attrs: {
      required: "",
      type: "text",
      value: _vm.resultat_net_caf,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_vm._m(18), _vm._v(" "), _c("currency-input", {
    attrs: {
      disabled: "",
      type: "text",
      value: _vm.resultat_net_arc
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_vm._m(19), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control input-box",
    attrs: {
      required: "",
      type: "text",
      id: "resultat_net_src",
      value: _vm.formDataToBeWatched.resultat_net_src
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pl-4"
  }, [_vm._m(20), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.formDataToBeWatched.justification_resultat_net,
      expression: "formDataToBeWatched.justification_resultat_net",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      cols: "30",
      rows: "2"
    },
    domProps: {
      value: _vm.formDataToBeWatched.justification_resultat_net
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.formDataToBeWatched, "justification_resultat_net", $event.target.value);
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_vm._m(21), _vm._v(" "), _c("currency-input", {
    attrs: {
      required: "",
      type: "text",
      value: _vm.autre_revenu_caf,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_vm._m(22), _vm._v(" "), _c("currency-input", {
    attrs: {
      required: "",
      type: "text",
      value: _vm.autre_revenu_arc,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_vm._m(23), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control input-box",
    attrs: {
      required: "",
      type: "text",
      id: "autre_revenu_src",
      value: _vm.formDataToBeWatched.autre_revenu_src
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pl-4"
  }, [_vm._m(24), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.formDataToBeWatched.justification_autre_revenu,
      expression: "formDataToBeWatched.justification_autre_revenu",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      cols: "30",
      rows: "2"
    },
    domProps: {
      value: _vm.formDataToBeWatched.justification_autre_revenu
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.formDataToBeWatched, "justification_autre_revenu", $event.target.value);
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_vm._m(25), _vm._v(" "), _c("currency-input", {
    attrs: {
      required: "",
      type: "text",
      value: _vm.autre_charge_caf,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_vm._m(26), _vm._v(" "), _c("currency-input", {
    attrs: {
      required: "",
      type: "text",
      value: _vm.autre_charge_arc,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_vm._m(27), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control input-box",
    attrs: {
      required: "",
      type: "text",
      id: "autre_charge_src",
      value: _vm.formDataToBeWatched.autre_charge_src
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pl-4"
  }, [_vm._m(28), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.formDataToBeWatched.justification_autre_charge,
      expression: "formDataToBeWatched.justification_autre_charge",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      cols: "30",
      rows: "2"
    },
    domProps: {
      value: _vm.formDataToBeWatched.justification_autre_charge
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.formDataToBeWatched, "justification_autre_charge", $event.target.value);
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_vm._m(29), _vm._v(" "), _c("currency-input", {
    attrs: {
      required: "",
      type: "text",
      value: _vm.charge_familiale_caf,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_vm._m(30), _vm._v(" "), _c("currency-input", {
    attrs: {
      required: "",
      type: "text",
      value: _vm.charge_familiale_arc,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_vm._m(31), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control input-box",
    attrs: {
      required: "",
      type: "text",
      id: "charge_familiale_src",
      value: _vm.formDataToBeWatched.charge_familiale_src
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pl-4"
  }, [_vm._m(32), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.formDataToBeWatched.justification_charge_familiale,
      expression: "formDataToBeWatched.justification_charge_familiale",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      cols: "30",
      rows: "2"
    },
    domProps: {
      value: _vm.formDataToBeWatched.justification_charge_familiale
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.formDataToBeWatched, "justification_charge_familiale", $event.target.value);
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_vm._m(33), _vm._v(" "), _c("currency-input", {
    attrs: {
      required: "",
      type: "text",
      value: _vm.capacite_autofinancement_caf,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_vm._m(34), _vm._v(" "), _c("currency-input", {
    attrs: {
      required: "",
      type: "text",
      value: _vm.capacite_autofinancement_arc,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_vm._m(35), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "text",
      id: "capacite_autofinancement_src",
      value: _vm.formDataToBeWatched.capacite_autofinancement_src,
      disabled: ""
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pl-4"
  }, [_vm._m(36), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.formDataToBeWatched.justification_capacite_auto,
      expression: "formDataToBeWatched.justification_capacite_auto",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      cols: "30",
      rows: "2"
    },
    domProps: {
      value: _vm.formDataToBeWatched.justification_capacite_auto
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.formDataToBeWatched, "justification_capacite_auto", $event.target.value);
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_vm._m(37), _vm._v(" "), _c("currency-input", {
    attrs: {
      required: "",
      type: "text",
      value: _vm.montant_credit_caf,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_vm._m(38), _vm._v(" "), _c("currency-input", {
    attrs: {
      required: "",
      value: _vm.montant_credit_arc,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_vm._m(39), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control input-box",
    attrs: {
      required: "",
      type: "text",
      id: "montant_credit_src",
      value: _vm.formDataToBeWatched.montant_credit_src
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pl-4"
  }, [_vm._m(40), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.formDataToBeWatched.justification_capacite_montant_propose,
      expression: "formDataToBeWatched.justification_capacite_montant_propose",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      cols: "30",
      rows: "2"
    },
    domProps: {
      value: _vm.formDataToBeWatched.justification_capacite_montant_propose
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.formDataToBeWatched, "justification_capacite_montant_propose", $event.target.value);
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_vm._m(41), _vm._v(" "), _c("currency-input", {
    attrs: {
      value: _vm.montant_echeance_credit_caf,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_vm._m(42), _vm._v(" "), _c("currency-input", {
    attrs: {
      id: "montant_echeance_credit_arc",
      value: _vm.montant_echeance_credit_arc,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_vm._m(43), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control input-box",
    attrs: {
      required: "",
      type: "text",
      id: "montant_echeance_credit_src",
      value: _vm.formDataToBeWatched.montant_echeance_credit_src
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pl-4"
  }, [_vm._m(44), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.formDataToBeWatched.justification_capacite_montant_echeance,
      expression: "formDataToBeWatched.justification_capacite_montant_echeance",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      cols: "30",
      rows: "2"
    },
    domProps: {
      value: _vm.formDataToBeWatched.justification_capacite_montant_echeance
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.formDataToBeWatched, "justification_capacite_montant_echeance", $event.target.value);
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_vm._m(45), _vm._v(" "), _c("currency-input", {
    attrs: {
      required: "",
      type: "text",
      value: _vm.tresorerie_caf,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_vm._m(46), _vm._v(" "), _c("currency-input", {
    attrs: {
      required: "",
      type: "text",
      value: _vm.tresorerie_arc,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_vm._m(47), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control input-box",
    attrs: {
      required: "",
      type: "text",
      id: "tresorerie_src",
      value: _vm.formDataToBeWatched.tresorerie_src
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pl-4"
  }, [_vm._m(48), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.formDataToBeWatched.justification_capacite_tresorerie,
      expression: "formDataToBeWatched.justification_capacite_tresorerie",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      cols: "30",
      rows: "2"
    },
    domProps: {
      value: _vm.formDataToBeWatched.justification_capacite_tresorerie
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.formDataToBeWatched, "justification_capacite_tresorerie", $event.target.value);
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_vm._m(49), _vm._v(" "), _c("currency-input", {
    attrs: {
      required: "",
      type: "text",
      "float": "",
      value: _vm.taux_endettement_caf,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_vm._m(50), _vm._v(" "), _c("currency-input", {
    attrs: {
      required: "",
      type: "text",
      "float": "",
      value: _vm.taux_endettement_arc,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_vm._m(51), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control input-box",
    attrs: {
      required: "",
      type: "text",
      id: "taux_endettement_src",
      "float": "",
      value: _vm.formDataToBeWatched.taux_endettement_src
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pl-4"
  }, [_vm._m(52), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.formDataToBeWatched.justification_taux,
      expression: "formDataToBeWatched.justification_taux",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      cols: "30",
      rows: "2"
    },
    domProps: {
      value: _vm.formDataToBeWatched.justification_taux
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.formDataToBeWatched, "justification_taux", $event.target.value);
      }, _vm.handleInput]
    }
  })])]), _vm._v(" "), _vm._m(53), _vm._v(" "), _c("div", {
    staticClass: "row gy-2"
  }, [_c("div", {
    staticClass: "col-6"
  }, [_vm._m(54), _vm._v(" "), _c("currency-input", {
    attrs: {
      required: "",
      type: "text",
      id: "tresorerie_espece",
      value: _vm.tresorerie_espece,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_vm._m(55), _vm._v(" "), _c("currency-input", {
    attrs: {
      required: "",
      type: "text",
      id: "tresorerie_espece_arc",
      value: _vm.tresorerie_espece_arc,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_vm._m(56), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control input-box",
    attrs: {
      required: "",
      type: "text",
      id: "tresorerie_espece_propo_analyste",
      disabled: ((_vm$authcheckUsr = _vm.authcheckUsr) === null || _vm$authcheckUsr === void 0 ? void 0 : _vm$authcheckUsr.what_tobe_produced) == "PV_CONTRE_ANALYSE_GROUPE",
      value: _vm.formDataToBeWatched.tresorerie_espece_propo_analyste
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-12-pl-4"
  }, [_vm._m(57), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.formDataToBeWatched.justification_tresorerie_espece,
      expression: "formDataToBeWatched.justification_tresorerie_espece",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      disabled: ((_vm$authcheckUsr2 = _vm.authcheckUsr) === null || _vm$authcheckUsr2 === void 0 ? void 0 : _vm$authcheckUsr2.what_tobe_produced) == "PV_CONTRE_ANALYSE_GROUPE",
      cols: "30",
      rows: "2"
    },
    domProps: {
      value: _vm.formDataToBeWatched.justification_tresorerie_espece
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.formDataToBeWatched, "justification_tresorerie_espece", $event.target.value);
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_vm._m(58), _vm._v(" "), _c("currency-input", {
    attrs: {
      required: "",
      type: "text",
      value: _vm.creance_acompte,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_vm._m(59), _vm._v(" "), _c("currency-input", {
    attrs: {
      required: "",
      type: "text",
      id: "creance_acompte_arc",
      value: _vm.creance_acompte_arc,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_vm._m(60), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control input-box",
    attrs: {
      required: "",
      disabled: ((_vm$authcheckUsr3 = _vm.authcheckUsr) === null || _vm$authcheckUsr3 === void 0 ? void 0 : _vm$authcheckUsr3.what_tobe_produced) == "PV_CONTRE_ANALYSE_GROUPE",
      type: "text",
      id: "creance_acompte_propose",
      value: _vm.formDataToBeWatched.creance_acompte_propose
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-12-pl-4"
  }, [_vm._m(61), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.formDataToBeWatched.justification_creance_acompte,
      expression: "formDataToBeWatched.justification_creance_acompte",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      disabled: ((_vm$authcheckUsr4 = _vm.authcheckUsr) === null || _vm$authcheckUsr4 === void 0 ? void 0 : _vm$authcheckUsr4.what_tobe_produced) == "PV_CONTRE_ANALYSE_GROUPE",
      cols: "30",
      rows: "2"
    },
    domProps: {
      value: _vm.formDataToBeWatched.justification_creance_acompte
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.formDataToBeWatched, "justification_creance_acompte", $event.target.value);
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_vm._m(62), _vm._v(" "), _c("currency-input", {
    attrs: {
      required: "",
      type: "text",
      id: "stock_caf",
      value: _vm.stock_caf,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_vm._m(63), _vm._v(" "), _c("currency-input", {
    attrs: {
      required: "",
      type: "text",
      id: "stock_arc",
      value: _vm.stock_arc,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_vm._m(64), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control input-box",
    attrs: {
      required: "",
      disabled: ((_vm$authcheckUsr5 = _vm.authcheckUsr) === null || _vm$authcheckUsr5 === void 0 ? void 0 : _vm$authcheckUsr5.what_tobe_produced) == "PV_CONTRE_ANALYSE_GROUPE",
      type: "text",
      id: "stock_propose",
      value: _vm.formDataToBeWatched.stock_propose
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-12-pl-4"
  }, [_vm._m(65), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.formDataToBeWatched.justification_stock,
      expression: "formDataToBeWatched.justification_stock",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      disabled: ((_vm$authcheckUsr6 = _vm.authcheckUsr) === null || _vm$authcheckUsr6 === void 0 ? void 0 : _vm$authcheckUsr6.what_tobe_produced) == "PV_CONTRE_ANALYSE_GROUPE",
      cols: "30",
      rows: "2"
    },
    domProps: {
      value: _vm.formDataToBeWatched.justification_stock
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.formDataToBeWatched, "justification_stock", $event.target.value);
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_vm._m(66), _vm._v(" "), _c("currency-input", {
    attrs: {
      required: "",
      type: "text",
      value: _vm.immobilisation,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_vm._m(67), _vm._v(" "), _c("currency-input", {
    attrs: {
      required: "",
      type: "text",
      id: "immobilisation_arc",
      value: _vm.immobilisation_arc,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_vm._m(68), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control input-box",
    attrs: {
      required: "",
      disabled: ((_vm$authcheckUsr7 = _vm.authcheckUsr) === null || _vm$authcheckUsr7 === void 0 ? void 0 : _vm$authcheckUsr7.what_tobe_produced) == "PV_CONTRE_ANALYSE_GROUPE",
      type: "text",
      id: "immobilisation_propose",
      value: _vm.formDataToBeWatched.immobilisation_propose
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-12-pl-4"
  }, [_vm._m(69), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.formDataToBeWatched.justification_immobilisation,
      expression: "formDataToBeWatched.justification_immobilisation",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      disabled: ((_vm$authcheckUsr8 = _vm.authcheckUsr) === null || _vm$authcheckUsr8 === void 0 ? void 0 : _vm$authcheckUsr8.what_tobe_produced) == "PV_CONTRE_ANALYSE_GROUPE",
      cols: "30",
      rows: "2"
    },
    domProps: {
      value: _vm.formDataToBeWatched.justification_immobilisation
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.formDataToBeWatched, "justification_immobilisation", $event.target.value);
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_vm._m(70), _vm._v(" "), _c("currency-input", {
    attrs: {
      required: "",
      type: "text",
      id: "passif_ope",
      value: _vm.passif_ope,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_vm._m(71), _vm._v(" "), _c("currency-input", {
    attrs: {
      required: "",
      type: "text",
      id: "passif_ope_arc",
      value: _vm.passif_ope_arc,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_vm._m(72), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control input-box",
    attrs: {
      required: "",
      disabled: ((_vm$authcheckUsr9 = _vm.authcheckUsr) === null || _vm$authcheckUsr9 === void 0 ? void 0 : _vm$authcheckUsr9.what_tobe_produced) == "PV_CONTRE_ANALYSE_GROUPE",
      type: "text",
      id: "passif_ope_propose",
      value: _vm.formDataToBeWatched.passif_ope_propose
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-12-pl-4"
  }, [_vm._m(73), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.formDataToBeWatched.justification_passif_ope,
      expression: "formDataToBeWatched.justification_passif_ope",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      disabled: ((_vm$authcheckUsr0 = _vm.authcheckUsr) === null || _vm$authcheckUsr0 === void 0 ? void 0 : _vm$authcheckUsr0.what_tobe_produced) == "PV_CONTRE_ANALYSE_GROUPE",
      cols: "30",
      rows: "2"
    },
    domProps: {
      value: _vm.formDataToBeWatched.justification_passif_ope
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.formDataToBeWatched, "justification_passif_ope", $event.target.value);
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_vm._m(74), _vm._v(" "), _c("currency-input", {
    attrs: {
      required: "",
      type: "text",
      value: _vm.passifs_fin,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_vm._m(75), _vm._v(" "), _c("currency-input", {
    attrs: {
      required: "",
      type: "text",
      id: "passifs_fin_arc",
      value: _vm.passifs_fin_arc,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_vm._m(76), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control input-box",
    attrs: {
      required: "",
      type: "text",
      disabled: ((_vm$authcheckUsr1 = _vm.authcheckUsr) === null || _vm$authcheckUsr1 === void 0 ? void 0 : _vm$authcheckUsr1.what_tobe_produced) == "PV_CONTRE_ANALYSE_GROUPE",
      id: "passifs_fin_propose",
      value: _vm.formDataToBeWatched.passifs_fin_propose
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-12-pl-4"
  }, [_vm._m(77), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.formDataToBeWatched.justification_passifs_fin,
      expression: "formDataToBeWatched.justification_passifs_fin",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      disabled: ((_vm$authcheckUsr10 = _vm.authcheckUsr) === null || _vm$authcheckUsr10 === void 0 ? void 0 : _vm$authcheckUsr10.what_tobe_produced) == "PV_CONTRE_ANALYSE_GROUPE",
      cols: "30",
      rows: "2"
    },
    domProps: {
      value: _vm.formDataToBeWatched.justification_passifs_fin
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.formDataToBeWatched, "justification_passifs_fin", $event.target.value);
      }, _vm.handleInput]
    }
  })])])]) : _c("div", [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen5 = !_vm.seen5;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "analyse-financière"
    }
  }, [_vm._v("\n                                Analyse financière\n                                "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_vm.seen1 === true ? _c("div", [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen1 = !_vm.seen1;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "forces"
    }
  }, [_vm._v("\n                                Forces\n                                "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)]), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "row gy-2"
  }, [_c("div", {
    staticClass: "col-lg-12"
  }, [_c("label", {
    staticClass: "fs-5 fw-bold"
  }, [_vm._v("Force (CAF)")]), _vm._v(" "), _c("hr", {
    staticClass: "mt-1 mb-3"
  }), _vm._v(" "), _c("div", {
    domProps: {
      innerHTML: _vm._s(_vm.formDataToBeWatched.forces_caf)
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-12"
  }, [_c("label", {
    staticClass: "fs-5 fw-bold"
  }, [_vm._v("Force (ARC)")]), _vm._v(" "), _c("hr", {
    staticClass: "mt-1 mb-3"
  }), _vm._v(" "), _c("div", {
    domProps: {
      innerHTML: _vm._s(_vm.formDataToBeWatched.forces_arc)
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 col-lg-12"
  }, [_c("label", {
    staticClass: "fs-5 fw-bold"
  }, [_vm._v("Force (SRC)")]), _vm._v(" "), _c("hr", {
    staticClass: "mt-1 mb-3"
  }), _vm._v(" "), _c("vue-editor", {
    attrs: {
      id: "forces"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.forces,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "forces", $$v);
      },
      expression: "formDataToBeWatched.forces"
    }
  })], 1)])]) : _c("div", [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen1 = !_vm.seen1;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "forces"
    }
  }, [_vm._v("\n                                Forces\n                                "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_vm.seen2 === true ? _c("div", [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen2 = !_vm.seen2;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "faiblesses"
    }
  }, [_vm._v("\n                                Faiblesses\n                                "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)]), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "row gy-2"
  }, [_c("div", {
    staticClass: "col-lg-12"
  }, [_c("label", {
    staticClass: "fs-5 fw-bold"
  }, [_vm._v("Faiblesses (CAF)")]), _vm._v(" "), _c("hr", {
    staticClass: "mt-1 mb-3"
  }), _vm._v(" "), _c("div", {
    domProps: {
      innerHTML: _vm._s(_vm.formDataToBeWatched.faiblesses_caf)
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-12"
  }, [_c("label", {
    staticClass: "fs-5 fw-bold"
  }, [_vm._v("Faiblesses (ARC)")]), _vm._v(" "), _c("hr", {
    staticClass: "mt-1 mb-3"
  }), _vm._v(" "), _c("div", {
    domProps: {
      innerHTML: _vm._s(_vm.formDataToBeWatched.faiblesses_arc)
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 col-lg-12"
  }, [_c("label", {
    staticClass: "fs-5 fw-bold"
  }, [_vm._v("Faiblesses (SRC)")]), _vm._v(" "), _c("hr", {
    staticClass: "mt-1 mb-3"
  }), _vm._v(" "), _c("vue-editor", {
    attrs: {
      id: "faiblesses"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.faiblesses,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "faiblesses", $$v);
      },
      expression: "formDataToBeWatched.faiblesses"
    }
  })], 1)])]) : _c("div", [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen2 = !_vm.seen2;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "faiblesses"
    }
  }, [_vm._v("\n                                Faiblesses\n                                "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_vm.seen3 === true ? _c("div", [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen3 = !_vm.seen3;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "opportunites"
    }
  }, [_vm._v("\n                                Opportunités\n                                "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)]), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "row gy-2"
  }, [_c("div", {
    staticClass: "col-lg-12"
  }, [_c("label", {
    staticClass: "fs-5 fw-bold"
  }, [_vm._v("Opportunités (CAF)")]), _vm._v(" "), _c("hr", {
    staticClass: "mt-1 mb-3"
  }), _vm._v(" "), _c("div", {
    domProps: {
      innerHTML: _vm._s(_vm.formDataToBeWatched.opportunites_caf)
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-12"
  }, [_c("label", {
    staticClass: "fs-5 fw-bold"
  }, [_vm._v("Opportunités (ARC)")]), _vm._v(" "), _c("hr", {
    staticClass: "mt-1 mb-3"
  }), _vm._v(" "), _c("div", {
    domProps: {
      innerHTML: _vm._s(_vm.formDataToBeWatched.opportunites_arc)
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 col-lg-12"
  }, [_c("label", {
    staticClass: "fs-5 fw-bold"
  }, [_vm._v("Opportunités (SRC)")]), _vm._v(" "), _c("hr", {
    staticClass: "mt-1 mb-3"
  }), _vm._v(" "), _c("vue-editor", {
    attrs: {
      id: "opportunites"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.opportunites,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "opportunites", $$v);
      },
      expression: "formDataToBeWatched.opportunites"
    }
  })], 1)])]) : _c("div", [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen3 = !_vm.seen3;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "opportunites"
    }
  }, [_vm._v("\n                                Opportunités\n                                "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_vm.seen4 === true ? _c("div", [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen4 = !_vm.seen4;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "menaces"
    }
  }, [_vm._v("\n                                Menaces\n                                "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)]), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "row gy-2"
  }, [_c("div", {
    staticClass: "col-lg-12"
  }, [_c("label", {
    staticClass: "fs-5 fw-bold"
  }, [_vm._v("Menaces (CAF)")]), _vm._v(" "), _c("hr", {
    staticClass: "mt-1 mb-3"
  }), _vm._v(" "), _c("div", {
    domProps: {
      innerHTML: _vm._s(_vm.formDataToBeWatched.menaces_caf)
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-12"
  }, [_c("label", {
    staticClass: "fs-5 fw-bold"
  }, [_vm._v("Menaces (ARC)")]), _vm._v(" "), _c("hr", {
    staticClass: "mt-1 mb-3"
  }), _vm._v(" "), _c("div", {
    domProps: {
      innerHTML: _vm._s(_vm.formDataToBeWatched.menaces_arc)
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 col-lg-12"
  }, [_c("label", {
    staticClass: "fs-5 fw-bold"
  }, [_vm._v("Menaces (SRC)")]), _vm._v(" "), _c("hr", {
    staticClass: "mt-1 mb-3"
  }), _vm._v(" "), _c("vue-editor", {
    attrs: {
      id: "menaces"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.menaces,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "menaces", $$v);
      },
      expression: "formDataToBeWatched.menaces"
    }
  })], 1)])]) : _c("div", [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen4 = !_vm.seen4;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "menaces"
    }
  }, [_vm._v("\n                                Menaces\n                                "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_vm.seen6 === true ? _c("div", [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen6 = !_vm.seen6;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "analyse-du-client-et-de-son-activité"
    }
  }, [_vm._v("\n                                Analyse du client et de son activité\n                                "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)]), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "row g-2"
  }, [_c("div", {
    staticClass: "col"
  }, [_c("label", [_vm._v("Appréciation organisation client (CAF)")]), _vm._v(" "), _c("input", {
    staticClass: "form-control",
    attrs: {
      type: "text",
      disabled: ""
    },
    domProps: {
      value: _vm.appreciation_organisation_caf
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col"
  }, [_c("label", [_vm._v("Appréciation organisation client (ARC)")]), _vm._v(" "), _c("input", {
    staticClass: "form-control",
    attrs: {
      type: "text",
      disabled: ""
    },
    domProps: {
      value: _vm.appreciation_organisation_arc
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("label", [_vm._v("Appréciation organisation client (SRC)")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.appreciation_organisation_src,
      expression: "formDataToBeWatched.appreciation_organisation_src"
    }],
    staticClass: "form-select input-box",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formDataToBeWatched, "appreciation_organisation_src", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: ""
    }
  }, [_vm._v("Choisir ....")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Risque élevé"
    }
  }, [_vm._v("Risque élevé")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Risque moyen"
    }
  }, [_vm._v("Risque moyen")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Faible risque"
    }
  }, [_vm._v("Faible risque")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-12"
  }, [_vm._m(78), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.formDataToBeWatched.avis_appreciation_organisation_src,
      expression: "formDataToBeWatched.avis_appreciation_organisation_src",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      cols: "30",
      rows: "2"
    },
    domProps: {
      value: _vm.formDataToBeWatched.avis_appreciation_organisation_src
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.formDataToBeWatched, "avis_appreciation_organisation_src", $event.target.value);
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col"
  }, [_c("label", [_vm._v("Appréciation autres risque (CAF)")]), _vm._v(" "), _c("input", {
    staticClass: "form-control",
    attrs: {
      type: "text",
      disabled: ""
    },
    domProps: {
      value: _vm.appreciation_autre_risque_caf
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col"
  }, [_c("label", [_vm._v("Appréciation autres risque (ARC)")]), _vm._v(" "), _c("input", {
    staticClass: "form-control",
    attrs: {
      type: "text",
      disabled: ""
    },
    domProps: {
      value: _vm.appreciation_autre_risque_arc
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("label", [_vm._v("Appréciation autres risques (SRC)")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.appreciation_autre_risque_src,
      expression: "formDataToBeWatched.appreciation_autre_risque_src"
    }],
    staticClass: "form-select input-box",
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formDataToBeWatched, "appreciation_autre_risque_src", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: ""
    }
  }, [_vm._v("Choisir ....")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Risque élevé"
    }
  }, [_vm._v("Risque élevé")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Risque moyen"
    }
  }, [_vm._v("Risque moyen")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Faible risque"
    }
  }, [_vm._v("Faible risque")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-12"
  }, [_vm._m(79), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.formDataToBeWatched.avis_appreciation_autre_risque_src,
      expression: "formDataToBeWatched.avis_appreciation_autre_risque_src",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      cols: "30",
      rows: "2"
    },
    domProps: {
      value: _vm.formDataToBeWatched.avis_appreciation_autre_risque_src
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.formDataToBeWatched, "avis_appreciation_autre_risque_src", $event.target.value);
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col"
  }, [_c("label", [_vm._v("Appréciation risque commerciale (CAF)")]), _vm._v(" "), _c("input", {
    staticClass: "form-control",
    attrs: {
      type: "text",
      disabled: ""
    },
    domProps: {
      value: _vm.appreciation_risque_commerciale_caf
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col"
  }, [_c("label", [_vm._v("Appréciation risque commerciale (ARC)")]), _vm._v(" "), _c("input", {
    staticClass: "form-control",
    attrs: {
      type: "text",
      disabled: ""
    },
    domProps: {
      value: _vm.appreciation_risque_commerciale_arc
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("label", [_vm._v("Appréciation risque commerciale (SRC)")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.appreciation_risque_commerciale_src,
      expression: "formDataToBeWatched.appreciation_risque_commerciale_src"
    }],
    staticClass: "form-select input-box",
    attrs: {
      id: "appreciation_risque_commerciale_arcs"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formDataToBeWatched, "appreciation_risque_commerciale_src", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "Risque élevé"
    }
  }, [_vm._v("Risque élevé")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Risque moyen"
    }
  }, [_vm._v("Risque moyen")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Faible risque"
    }
  }, [_vm._v("Faible risque")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-12"
  }, [_vm._m(80), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.formDataToBeWatched.avis_appreciation_risque_commerciale_src,
      expression: "formDataToBeWatched.avis_appreciation_risque_commerciale_src",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      cols: "30",
      rows: "2"
    },
    domProps: {
      value: _vm.formDataToBeWatched.avis_appreciation_risque_commerciale_src
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.formDataToBeWatched, "avis_appreciation_risque_commerciale_src", $event.target.value);
      }, _vm.handleInput]
    }
  })])])]) : _c("div", [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen6 = !_vm.seen6;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "analyse-du-client-et-de-son-activité"
    }
  }, [_vm._v("\n                                Analyse du client et de son activité\n                                "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_vm.seen7 === true ? _c("div", [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen7 = !_vm.seen7;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "analyse-global-des-risques-de-credit"
    }
  }, [_vm._v("\n                                Analyse global des risques de crédit\n                                "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)]), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_vm._m(81), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("p"), _vm._v(" "), _c("label", [_vm._v("Analyse")]), _c("br"), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.quantite_analyse_effectuee_analyse,
      expression: "formDataToBeWatched.quantite_analyse_effectuee_analyse"
    }],
    staticClass: "form-select",
    attrs: {
      id: "quantite_analyse_effectuee_analyse"
    },
    on: {
      input: _vm.formDataVars,
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formDataToBeWatched, "quantite_analyse_effectuee_analyse", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "A ameliorer"
    }
  }, [_vm._v("A améliorer")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Satisfaisante"
    }
  }, [_vm._v("Satisfaisante")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Bonne"
    }
  }, [_vm._v("Bonne")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("label", [_vm._v("Avis du SRC")]), _c("br"), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.formDataToBeWatched.quantite_analyse_effectuee_avis_src,
      expression: "formDataToBeWatched.quantite_analyse_effectuee_avis_src",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      id: "quantite_analyse_effectuee_avis_src",
      cols: "30",
      rows: "2"
    },
    domProps: {
      value: _vm.formDataToBeWatched.quantite_analyse_effectuee_avis_src
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.formDataToBeWatched, "quantite_analyse_effectuee_avis_src", $event.target.value);
      }, _vm.formDataVars]
    }
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 mt-3"
  }, [_vm._m(82), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("p"), _vm._v(" "), _c("label", [_vm._v("Analyse")]), _c("br"), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.capacite_paiement_analyse,
      expression: "formDataToBeWatched.capacite_paiement_analyse"
    }],
    staticClass: "form-select",
    attrs: {
      id: "capacite_paiement_analyse"
    },
    on: {
      input: _vm.formDataVars,
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formDataToBeWatched, "capacite_paiement_analyse", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "Faible"
    }
  }, [_vm._v("Faible")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Satisfaisante"
    }
  }, [_vm._v("Satisfaisante")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Solide"
    }
  }, [_vm._v("Solide")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("label", [_vm._v("Avis du SRC")]), _c("br"), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.formDataToBeWatched.capacite_paiement_avis_src,
      expression: "formDataToBeWatched.capacite_paiement_avis_src",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      id: "capacite_paiement_avis_src",
      cols: "30",
      rows: "2"
    },
    domProps: {
      value: _vm.formDataToBeWatched.capacite_paiement_avis_src
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.formDataToBeWatched, "capacite_paiement_avis_src", $event.target.value);
      }, _vm.formDataVars]
    }
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 mt-3"
  }, [_vm._m(83), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("p"), _vm._v(" "), _c("label", [_vm._v("Analyse")]), _c("br"), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.garantie_analyse,
      expression: "formDataToBeWatched.garantie_analyse"
    }],
    staticClass: "form-select",
    attrs: {
      id: "garantie_analyse"
    },
    on: {
      input: _vm.formDataVars,
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formDataToBeWatched, "garantie_analyse", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "Faible"
    }
  }, [_vm._v("Faible")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Satisfaisante"
    }
  }, [_vm._v("Satisfaisante")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Solide"
    }
  }, [_vm._v("Solide")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("label", [_vm._v("Avis du SRC")]), _c("br"), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.formDataToBeWatched.garantie_avis_src,
      expression: "formDataToBeWatched.garantie_avis_src",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      cols: "30",
      rows: "2"
    },
    domProps: {
      value: _vm.formDataToBeWatched.garantie_avis_src
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.formDataToBeWatched, "garantie_avis_src", $event.target.value);
      }, _vm.handleInput]
    }
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 mt-3"
  }, [_vm._m(84), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("p"), _vm._v(" "), _c("label", [_vm._v("Analyse")]), _c("br"), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.implication_client_analyse,
      expression: "formDataToBeWatched.implication_client_analyse"
    }],
    staticClass: "form-select",
    attrs: {
      id: "implication_client_analyse"
    },
    on: {
      input: _vm.formDataVars,
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formDataToBeWatched, "implication_client_analyse", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "Risque elevé"
    }
  }, [_vm._v("Risque elevé")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Risque moyen"
    }
  }, [_vm._v("Risque moyen")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Risque faible"
    }
  }, [_vm._v("Risque faible")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("label", [_vm._v("Avis du SRC")]), _c("br"), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.formDataToBeWatched.implication_client_avis_src,
      expression: "formDataToBeWatched.implication_client_avis_src",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      id: "implication_client_avis_src",
      cols: "30",
      rows: "2"
    },
    domProps: {
      value: _vm.formDataToBeWatched.implication_client_avis_src
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.formDataToBeWatched, "implication_client_avis_src", $event.target.value);
      }, _vm.formDataVars]
    }
  })])])])])]) : _c("div", [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen7 = !_vm.seen7;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "analyse-global-des-risques-de-crédit"
    }
  }, [_vm._v("\n                                Analyse global des risques de crédit\n                                "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_vm.seen8 === true ? _c("div", [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen8 = !_vm.seen8;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "conditions-additionnelles"
    }
  }, [_vm._v("\n                                Conditions additionnelles\n                                "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)]), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-borderless mb-1"
  }, [_vm._m(85), _vm._v(" "), _c("tbody", _vm._l(_vm.condition_additionnelles_avant_decaissement, function (condition_additionnelle_avant_decaissement, index) {
    return _c("tr", {
      key: index
    }, [_c("td", {
      staticStyle: {
        width: "100%"
      }
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: condition_additionnelle_avant_decaissement.avant_decaissement,
        expression: "condition_additionnelle_avant_decaissement.avant_decaissement",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        required: ""
      },
      domProps: {
        value: condition_additionnelle_avant_decaissement.avant_decaissement
      },
      on: {
        change: [function ($event) {
          return _vm.$set(condition_additionnelle_avant_decaissement, "avant_decaissement", $event.target.value);
        }, _vm.handleInput]
      }
    })]), _vm._v(" "), index == 0 ? _c("td", {
      staticStyle: {
        "padding-left": "5px"
      }
    }, [_c("button", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: index == 0,
        expression: "index == 0"
      }],
      staticStyle: {
        "background-color": "#2c3e50",
        color: "#ffffff",
        "border-radius": "15%",
        border: "none",
        "font-size": "16px"
      },
      attrs: {
        type: "button",
        title: "Ajouter un bien"
      },
      on: {
        click: function click($event) {
          return _vm.addMore1();
        }
      }
    }, [_c("plus-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)]) : _c("td", [_c("button", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: index != 0,
        expression: "index != 0"
      }],
      staticStyle: {
        "background-color": "transparent",
        border: "none"
      },
      attrs: {
        type: "button",
        title: "Supprimer"
      },
      on: {
        click: function click($event) {
          return _vm.remove1(index);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)])]);
  }), 0)]), _vm._v(" "), _c("table", {
    staticClass: "table table-borderless mb-1"
  }, [_vm._m(86), _vm._v(" "), _c("tbody", _vm._l(_vm.condition_additionnelles_apres_decaissement, function (condition_additionnelle_apres_decaissement, index) {
    return _c("tr", {
      key: index
    }, [_c("td", {
      staticStyle: {
        width: "100%"
      }
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: condition_additionnelle_apres_decaissement.apres_decaissement,
        expression: "condition_additionnelle_apres_decaissement.apres_decaissement",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        required: ""
      },
      domProps: {
        value: condition_additionnelle_apres_decaissement.apres_decaissement
      },
      on: {
        change: [function ($event) {
          return _vm.$set(condition_additionnelle_apres_decaissement, "apres_decaissement", $event.target.value);
        }, _vm.handleInput]
      }
    })]), _vm._v(" "), index == 0 ? _c("td", {
      staticStyle: {
        "padding-left": "5px"
      }
    }, [_c("button", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: index == 0,
        expression: "index == 0"
      }],
      staticStyle: {
        "background-color": "#2c3e50",
        color: "#ffffff",
        "border-radius": "15%",
        border: "none",
        "font-size": "16px"
      },
      attrs: {
        type: "button",
        title: "Ajouter un bien"
      },
      on: {
        click: function click($event) {
          return _vm.addMore2();
        }
      }
    }, [_c("plus-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)]) : _c("td", [_c("button", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: index != 0,
        expression: "index != 0"
      }],
      staticStyle: {
        "background-color": "transparent",
        border: "none"
      },
      attrs: {
        type: "button",
        title: "Supprimer"
      },
      on: {
        click: function click($event) {
          return _vm.remove2(index);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)])]);
  }), 0)])])])]) : _c("div", [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen8 = !_vm.seen8;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "conditions-additionnelles"
    }
  }, [_vm._v("\n                                Conditions additionnelles\n                                "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])])])]), _vm._v(" "), _c("div", {
    staticClass: "mb-5"
  }), _vm._v(" "), _c("button", {
    staticClass: "btn shadow-md text-white position-absolute",
    staticStyle: {
      cursor: "pointer",
      right: "16px",
      bottom: "10px",
      background: "#2c3e50",
      "max-width": "max-content"
    },
    attrs: {
      type: "button",
      name: "button"
    },
    on: {
      click: function click($event) {
        return _vm.retract();
      }
    }
  }, [_vm._v("\n                Fermer le tableau\n            ")])], 1) : _c("div", {
    staticClass: "card card-width-height"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc pb-0 pt-2"
  }, [_c("h6", {
    ref: "topdiv",
    staticClass: "head",
    attrs: {
      id: "av3-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Analyse financière, forces et faiblesses\n                        ")]), _vm._v(" "), _c("div", {
    staticClass: "col-auto"
  }, [((_vm$formDataToBeWatch2 = _vm.formDataToBeWatched.notes) === null || _vm$formDataToBeWatch2 === void 0 ? void 0 : _vm$formDataToBeWatch2.length) > 0 ? _c("div", {
    staticStyle: {
      display: "inline-block",
      position: "relative"
    }
  }, [_c("span", {
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.openNotesModal(true);
      }
    }
  }, [_c("i", {
    staticClass: "icofont icofont-comment text-white px-2",
    staticStyle: {
      "font-size": "12px"
    },
    attrs: {
      role: "button"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "badge-sm pb-3"
  }, [_c("span", [_vm._v(" " + _vm._s(_vm.formDataToBeWatched.notes.length) + " ")])])])]) : _vm._e(), _vm._v(" "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    },
    on: {
      click: function click($event) {
        return _vm.retract();
      }
    }
  })], 1)])])])])]), _vm._v(" "), _c("note-modal", {
    attrs: {
      name: _vm.tb_name,
      listingNote: _vm.listingNote,
      notes: _vm.formDataToBeWatched.notes
    },
    on: {
      close: function close($event) {
        return _vm.$modal.hide(_vm.tb_name);
      },
      addNote: function addNote($event) {
        return _vm.formDataToBeWatched.notes.unshift($event);
      }
    },
    model: {
      value: _vm.formDataToBeWatched.notes,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "notes", $$v);
      },
      expression: "formDataToBeWatched.notes"
    }
  })], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "p-3 mb-2 bg-secondary text-white"
  }, [_c("h6", {
    attrs: {
      id: "ana_fin_compte_result"
    }
  }, [_vm._v("\n                            Compte de resultat \n                        ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Chiffre d'affaires / mois (CAF)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Chiffre d'affaires / mois (ARC)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Chiffre d'affaires / mois (SRC)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Justification\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Cout d'achat (CAF)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Cout d'achat (ARC)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Cout d'achat (SRC)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Justification\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Marge commerciale (CAF)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Marge commerciale (ARC)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Marge commerciale (SRC)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Justification\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Charges d'exploitation et financière (CAF)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Charges d'exploitation et financière (ARC)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Charges d'exploitation et financière (SRC)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Justification\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Résultat net (CAF)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Résultat net (ARC)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Résultat net (SRC)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Justification\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Autres revenus (CAF)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Autres revenus (ARC)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Autres revenus (SRC)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Justification\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Autres charges (CAF)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Autres charges (ARC)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Autres charges (SRC)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Justification\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Charges familiales (CAF)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Charges familiales (ARC)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Charges familiales (SRC)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Justification\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Capacité d'autofinancement\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Capacité d'autofinancement (ARC)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Capacité d'autofinancement (SRC)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Justification\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Montant crédit (CAF)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Montant crédit (ARC)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Montant crédit (SRC)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Justification\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Montant échéance crédit (CAF)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Montant échéance crédit (ARC)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Montant échéance crédit (SRC)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Justification\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Trésorerie (CAF)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Trésorerie (ARC)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Trésorerie (SRC)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Justification\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Taux d'endettement (CAF)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Taux d'endettement (ARC)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Taux d'endettement (SRC)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Justification\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "p-3 mb-2 bg-secondary text-white"
  }, [_c("h6", {
    attrs: {
      id: "ana_fin_bilan"
    }
  }, [_vm._v("\n                            Bilan\n                        ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Trésorerie (En espèce)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Trésorerie (En espèce) ARC\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Trésorerie (En espèce) proposé (SRC)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Justification (SRC)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Créances et acompte proposé le CAF\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Créances et acompte proposé le ARC\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Créances et acompte proposé (SRC)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Justification (SRC)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Stock proposée par le CAF\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Stock proposée par le ARC\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Stock proposée (SRC)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Justification (SRC)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Immobilisations proposée par le CAF\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Immobilisations proposée par le ARC\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Immobilisations proposées (SRC)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Justification (SRC)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Passifs opérationnels proposé par le CAF\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Passifs opérationnels proposé par le ARC\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Passifs opérationnels proposé (SRC)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Justification (SRC)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Passifs financiers proposées par le CAF\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Passifs financiers proposées par le ARC\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Passifs financiers proposées (SRC)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Justification (SRC)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Avis du SRC\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Avis du SRC\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Avis du SRC\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_c("b", [_vm._v("1. Qualité de l'analyse effectuée par le CAF")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_c("b", [_vm._v("2. Capacité de paiement (évaluation de la rentabilité du client, de la\n                                        solidité financière et de la liquidité - développements historiques et\n                                        futurs prévus)")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_c("b", [_vm._v("3. Garantie ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_c("b", [_vm._v("Implication/Engagement du client dans son activité à payer ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Avant décaissement")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Après décaissement")])])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/avisscr/filiale/AV3.vue?vue&type=style&index=0&id=0eebb37c&lang=css&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/avisscr/filiale/AV3.vue?vue&type=style&index=0&id=0eebb37c&lang=css&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\ninput[data-v-0eebb37c] {\r\n    /*border: 1px solid red;*/\n}\n*[data-v-0eebb37c] {\r\n    font-family: \"Google sans\";\n}\nlabel[data-v-0eebb37c] {\r\n    height: 10px;\r\n    font-size: 13px;\n}\ninput[data-v-0eebb37c],\r\nselect[data-v-0eebb37c] {\r\n    height: 35px;\r\n    border-color: #34495e;\r\n    color: #57606f;\r\n    font-size: 13px;\r\n    font-weight: bold;\n}\n.card-width-height[data-v-0eebb37c] {\r\n    width: 100%;\r\n    height: 100%;\n}\ntextarea[data-v-0eebb37c] {\r\n\r\n    margin-bottom: 8px;\n}\n.head[data-v-0eebb37c] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\n.hdc[data-v-0eebb37c] {\r\n    background-color: #57606f;\n}\ninput.input-box[data-v-0eebb37c] {\r\n    background: #00ffff21;\r\n    color: #000;\n}\nselect.input-box[data-v-0eebb37c] {\r\n    background: #00ffff21;\r\n    color: #000;\n}\n.badge-sm[data-v-0eebb37c] {\r\n    display: inline-block;\r\n    width: 15px;\r\n    height: 15px;\r\n    background: rgba(255, 0, 0, 0.882);\r\n    color: white;\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    border-radius: 100%;\r\n    position: absolute;\r\n    top: -20%;\r\n    left: 55%;\r\n    text-align: center;\n}\n.relook-header[data-v-0eebb37c] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/avisscr/filiale/AV3.vue?vue&type=style&index=0&id=0eebb37c&lang=css&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/avisscr/filiale/AV3.vue?vue&type=style&index=0&id=0eebb37c&lang=css&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AV3_vue_vue_type_style_index_0_id_0eebb37c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AV3.vue?vue&type=style&index=0&id=0eebb37c&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/avisscr/filiale/AV3.vue?vue&type=style&index=0&id=0eebb37c&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AV3_vue_vue_type_style_index_0_id_0eebb37c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AV3_vue_vue_type_style_index_0_id_0eebb37c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/avisscr/filiale/AV3.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/avisscr/filiale/AV3.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AV3_vue_vue_type_template_id_0eebb37c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AV3.vue?vue&type=template&id=0eebb37c&scoped=true */ "./resources/js/components/avisscr/filiale/AV3.vue?vue&type=template&id=0eebb37c&scoped=true");
/* harmony import */ var _AV3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AV3.vue?vue&type=script&lang=js */ "./resources/js/components/avisscr/filiale/AV3.vue?vue&type=script&lang=js");
/* harmony import */ var _AV3_vue_vue_type_style_index_0_id_0eebb37c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AV3.vue?vue&type=style&index=0&id=0eebb37c&lang=css&scoped=true */ "./resources/js/components/avisscr/filiale/AV3.vue?vue&type=style&index=0&id=0eebb37c&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AV3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _AV3_vue_vue_type_template_id_0eebb37c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _AV3_vue_vue_type_template_id_0eebb37c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "0eebb37c",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/avisscr/filiale/AV3.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/avisscr/filiale/AV3.vue?vue&type=script&lang=js":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/avisscr/filiale/AV3.vue?vue&type=script&lang=js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AV3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AV3.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/avisscr/filiale/AV3.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AV3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/avisscr/filiale/AV3.vue?vue&type=style&index=0&id=0eebb37c&lang=css&scoped=true":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/avisscr/filiale/AV3.vue?vue&type=style&index=0&id=0eebb37c&lang=css&scoped=true ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AV3_vue_vue_type_style_index_0_id_0eebb37c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AV3.vue?vue&type=style&index=0&id=0eebb37c&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/avisscr/filiale/AV3.vue?vue&type=style&index=0&id=0eebb37c&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/avisscr/filiale/AV3.vue?vue&type=template&id=0eebb37c&scoped=true":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/avisscr/filiale/AV3.vue?vue&type=template&id=0eebb37c&scoped=true ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AV3_vue_vue_type_template_id_0eebb37c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AV3_vue_vue_type_template_id_0eebb37c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AV3_vue_vue_type_template_id_0eebb37c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AV3.vue?vue&type=template&id=0eebb37c&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/avisscr/filiale/AV3.vue?vue&type=template&id=0eebb37c&scoped=true");


/***/ })

}]);