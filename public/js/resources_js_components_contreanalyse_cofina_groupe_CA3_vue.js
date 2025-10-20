"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_contreanalyse_cofina_groupe_CA3_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/groupe/CA3.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/groupe/CA3.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/auth.service */ "./resources/js/services/auth.service.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



// import { VueEditor } from "vue2-editor";


window.$ = window.jQuery = __webpack_require__(/*! jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "analyse-financiere-forces-et-faiblesses",
  display: "Analyse financière, forces et faiblesses",
  components: {
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_2__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_2__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_2__.ChevronDownIcon,
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_2__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_2__.TrashIcon,
    AirplayIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_2__.AirplayIcon,
    BookOpenIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_2__.BookOpenIcon
  },
  props: _defineProperty({
    meta_data: Object,
    tb_name: String,
    tb_display_name: String
  }, "tb_display_name", String),
  computed: {
    margeComProp: function margeComProp() {
      var a = this.formDataToBeWatched.chiffre_affaire_propo_analyste;
      a = Number(String(a).replace(/\s+/g, ""));
      var b = this.formDataToBeWatched.cout_achat_propose;
      b = Number(String(b).replace(/\s+/g, ""));
      var c = a - b;
      return c;
    },
    capaciteAutoFin: function capaciteAutoFin() {
      var a = this.formDataToBeWatched.resultat_net_propose;
      var b = this.formDataToBeWatched.autre_revenu_propose;
      var c = this.formDataToBeWatched.charge_familiale_propose;
      var d = this.formDataToBeWatched.autre_charge_propose;
      a = Number(String(a).replace(/\s+/g, ""));
      b = Number(String(b).replace(/\s+/g, ""));
      c = Number(String(c).replace(/\s+/g, ""));
      d = Number(String(d).replace(/\s+/g, ""));
      var f = a + b - (c + d);
      return f;
    },
    tauxEndettementPropo: function tauxEndettementPropo() {
      // console.log()
      var c = 0;
      var a = this.formDataToBeWatched.capacite_autofinancement_propose;
      var b = this.creditConcurrence();
      if (this.formDataToBeWatched.montant_credit_propose !== undefined) {
        c = this.formDataToBeWatched.montant_credit_propose;
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
    this.loadTbAttrs(); // charge les attributs + sous attributs des tables
    this.loadRetrieved();
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
      },
      // {
      //     title: "Rejeter",
      //     icon: "icofont icofont-close",
      //     handler: function () { },
      //     disabled: true
      // },
      // {
      //     title: "Vider",
      //     icon: "icofont icofont-paperclip",
      //     handler: function () { },
      //     disabled: true
      // },
      {
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
        faiblesses: "",
        notes: [],
        chiffre_affaire_propo_analyste: "",
        cout_achat_propose: "",
        charge_exploitation_propose: "",
        autre_revenu_propose: "",
        resultat_net_propose: "",
        autre_charge_propose: "",
        charge_familiale_propose: "",
        capacite_autofinancement_propose: "",
        montant_credit_propose: "",
        montant_echeance_credit_propose: "",
        tresorerie_propose: "",
        marge_commerciale_propose: "",
        taux_endettement_propose: "",
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
        justification_autre_charge: "",
        appreciation_organisation: "",
        appreciation_autre_risque: "",
        appreciation_risque_commerciale: ""
      },
      appreciation_organisation_caf: "",
      appreciation_organisation_src: "",
      appreciation_organisation_arc: "",
      appreciation_autre_risque_caf: "",
      appreciation_autre_risque_arc: "",
      appreciation_autre_risque_src: "",
      appreciation_risque_commerciale_caf: "",
      appreciation_risque_commerciale_arc: "",
      appreciation_risque_commerciale_src: "",
      chiffre_affaire: null,
      cout_achat: null,
      marge_commerciale: null,
      charge_exploitation: null,
      resultat_net: null,
      autre_revenu: null,
      autre_charge: null,
      charge_familiale: null,
      capacite_autofinancement: null,
      montant_credit_caf: null,
      montant_echeance_credit_caf: null,
      tresorerie: null,
      taux_endettement: null,
      chiffre_affaire_propo_analyste_filiale: null,
      justification_chiffre_affaire_analyste: null,
      cout_achat_propose_analyste_filiale: null,
      justification_cout_achat_analyste_filiale: null,
      marge_commerciale_propose_analyste_filiale: null,
      justification_marge_commerciale_analyste_filiale: null,
      charge_exploitation_propose_analyste_filiale: null,
      justification_charge_exploitation_analyste_filiale: null,
      resultat_net_propose_analyste_filiale: null,
      justification_resultat_net_analyste_filiale: null,
      autre_revenu_propose_analyste_filiale: null,
      justification_autre_revenu_analyste_filiale: null,
      autre_charge_propose_analyste_filiale: null,
      justification_autre_charge_analyste_filiale: null,
      charge_familiale_propose_analyste_filiale: null,
      justification_charge_familiale_analyste_filiale: null,
      capacite_autofinancement_propose_analyste_filiale: null,
      justification_capacite_auto_analyste_filiale: null,
      montant_credit_propose_analyste_filiale: null,
      justification_capacite_montant_propose_analyste_filiale: null,
      montant_echeance_credit_propose_analyste_filiale: null,
      justification_capacite_montant_echeance_analyste_filiale: null,
      tresorerie_propose_analyste_filiale: null,
      justification_capacite_tresorerie_analyste_filiale: null,
      taux_endettement_propose_analyste_filiale: null,
      justification_taux_analyste_filiale: null
    };
  },
  methods: {
    // loadFromTb13(){
    //     console.log("metadata", this.meta_data.dossier_credit?.cred_pub_tb_13.benefices_pertes)
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
      var _this$meta_data;
      var tab = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "benefices_pertes";
      if (!['', null, undefined].includes((_this$meta_data = this.meta_data) === null || _this$meta_data === void 0 || (_this$meta_data = _this$meta_data.dossier_credit) === null || _this$meta_data === void 0 ? void 0 : _this$meta_data.cred_pub_tb_13[tab])) {
        var _this$meta_data2;
        return (_this$meta_data2 = this.meta_data) === null || _this$meta_data2 === void 0 || (_this$meta_data2 = _this$meta_data2.dossier_credit) === null || _this$meta_data2 === void 0 ? void 0 : _this$meta_data2.cred_pub_tb_13[tab].findIndex(function (el) {
          return el.position === label;
        });
      }
      return -1;
    },
    calculMargeComFiliale: function calculMargeComFiliale() {
      var _this$meta_data$dossi, _dossier$benefices_pe, _dossier$benefices_pe2;
      var dossier = (_this$meta_data$dossi = this.meta_data.dossier_credit) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi.cred_pub_tb_13;
      var a = 0;
      var b = 0;
      if (!['', null, undefined].includes(dossier === null || dossier === void 0 || (_dossier$benefices_pe = dossier.benefices_pertes[this.findIndexByObj("VENTES TOTALES")]) === null || _dossier$benefices_pe === void 0 ? void 0 : _dossier$benefices_pe.montant_c)) {
        a = dossier === null || dossier === void 0 ? void 0 : dossier.benefices_pertes[this.findIndexByObj("VENTES TOTALES")].montant_c;
        a = Number(String(a).replace(/\s+/g, ""));
      }
      if (!['', null, undefined].includes(dossier === null || dossier === void 0 || (_dossier$benefices_pe2 = dossier.benefices_pertes[this.findIndexByObj("COÛT TOTAL DES MARCHANDISES VENDUES")]) === null || _dossier$benefices_pe2 === void 0 ? void 0 : _dossier$benefices_pe2.montant_c)) {
        b = dossier === null || dossier === void 0 ? void 0 : dossier.benefices_pertes[this.findIndexByObj("COÛT TOTAL DES MARCHANDISES VENDUES")].montant_c;
        b = Number(String(b).replace(/\s+/g, ""));
      }
      return Math.abs(a - b);
    },
    calculMargeCom: function calculMargeCom() {
      var _this$meta_data$dossi2;
      var dossier = (_this$meta_data$dossi2 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi2 === void 0 ? void 0 : _this$meta_data$dossi2.cred_pub_tb_48;
      var a = 0;
      var b = 0;
      if ((dossier === null || dossier === void 0 ? void 0 : dossier.chiffre_affaire_propo_analyste) !== undefined) {
        a = dossier === null || dossier === void 0 ? void 0 : dossier.chiffre_affaire_propo_analyste;
        a = Number(String(a).replace(/\s+/g, ""));
      }
      if ((dossier === null || dossier === void 0 ? void 0 : dossier.cout_achat_propose) !== undefined) {
        b = dossier === null || dossier === void 0 ? void 0 : dossier.cout_achat_propose;
        b = Number(String(b).replace(/\s+/g, ""));
      }
      return Math.abs(a - b);
    },
    creditConcurrence: function creditConcurrence() {
      var _this$meta_data3;
      var total = 0;
      if (((_this$meta_data3 = this.meta_data) === null || _this$meta_data3 === void 0 || (_this$meta_data3 = _this$meta_data3.dossier_credit) === null || _this$meta_data3 === void 0 ? void 0 : _this$meta_data3.cred_pub_tb_17) !== undefined) {
        var _this$meta_data4;
        if (((_this$meta_data4 = this.meta_data) === null || _this$meta_data4 === void 0 || (_this$meta_data4 = _this$meta_data4.dossier_credit) === null || _this$meta_data4 === void 0 || (_this$meta_data4 = _this$meta_data4.cred_pub_tb_17) === null || _this$meta_data4 === void 0 ? void 0 : _this$meta_data4.historiques_des_credits) !== "") {
          var _this$meta_data5;
          (_this$meta_data5 = this.meta_data) === null || _this$meta_data5 === void 0 || (_this$meta_data5 = _this$meta_data5.dossier_credit) === null || _this$meta_data5 === void 0 || (_this$meta_data5 = _this$meta_data5.cred_pub_tb_17) === null || _this$meta_data5 === void 0 || _this$meta_data5.historiques_des_credits.forEach(function (element) {
            if (element.statut === "Financé") {
              total += Number(String(element.encours).replace(/\s+/g, ""));
            }
          });
        }
      }
      return total;
    },
    capaciteAutoFinancementFiliale: function capaciteAutoFinancementFiliale() {
      var _this$meta_data6, _dossier$benefices_pe3, _dossier$benefices_pe4, _dossier$benefices_pe5, _dossier$benefices_pe6;
      var dossier = (_this$meta_data6 = this.meta_data) === null || _this$meta_data6 === void 0 || (_this$meta_data6 = _this$meta_data6.dossier_credit) === null || _this$meta_data6 === void 0 ? void 0 : _this$meta_data6.cred_pub_tb_13;
      var a = 0;
      var b = 0;
      var c = 0;
      var d = 0;
      if (!['', null, undefined].includes(dossier === null || dossier === void 0 || (_dossier$benefices_pe3 = dossier.benefices_pertes[this.findIndexByObj("RÉSULTAT NET PRINCIPALES OPÉRATIONS")]) === null || _dossier$benefices_pe3 === void 0 ? void 0 : _dossier$benefices_pe3.montant_c)) {
        a = dossier === null || dossier === void 0 ? void 0 : dossier.benefices_pertes[this.findIndexByObj("RÉSULTAT NET PRINCIPALES OPÉRATIONS")].montant_c;
        a = Number(String(a).replace(/\s+/g, ""));
      }
      if (!['', null, undefined].includes(dossier === null || dossier === void 0 || (_dossier$benefices_pe4 = dossier.benefices_pertes[this.findIndexByObj("Autres revenus")]) === null || _dossier$benefices_pe4 === void 0 ? void 0 : _dossier$benefices_pe4.montant_c)) {
        b = dossier === null || dossier === void 0 ? void 0 : dossier.benefices_pertes[this.findIndexByObj("Autres revenus")].montant_c;
        b = Number(String(b).replace(/\s+/g, ""));
      }
      if (!['', null, undefined].includes(dossier === null || dossier === void 0 || (_dossier$benefices_pe5 = dossier.benefices_pertes[this.findIndexByObj("Charges familiales")]) === null || _dossier$benefices_pe5 === void 0 ? void 0 : _dossier$benefices_pe5.montant_c)) {
        c = dossier === null || dossier === void 0 ? void 0 : dossier.benefices_pertes[this.findIndexByObj("Charges familiales")].montant_c;
        c = Number(String(c).replace(/\s+/g, ""));
      }
      if (!['', null, undefined].includes(dossier === null || dossier === void 0 || (_dossier$benefices_pe6 = dossier.benefices_pertes[this.findIndexByObj("D'autres coûts")]) === null || _dossier$benefices_pe6 === void 0 ? void 0 : _dossier$benefices_pe6.montant_c)) {
        d = dossier === null || dossier === void 0 ? void 0 : dossier.benefices_pertes[this.findIndexByObj("D'autres coûts")].montant_c;
        d = Number(String(d).replace(/\s+/g, ""));
      }
      var rp = a + b;
      var rm = c + d;
      var res = rp - rm;
      return res;
    },
    capaciteAutoFinancement: function capaciteAutoFinancement() {
      var _this$meta_data7;
      var dossier = (_this$meta_data7 = this.meta_data) === null || _this$meta_data7 === void 0 || (_this$meta_data7 = _this$meta_data7.dossier_credit) === null || _this$meta_data7 === void 0 ? void 0 : _this$meta_data7.cred_pub_tb_48;
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
    },
    tauxEndettement: function tauxEndettement() {
      var _this$meta_data8;
      // console.log()
      var c = 0;
      var a = this.capaciteAutoFinancement();
      var b = this.creditConcurrence();
      if (((_this$meta_data8 = this.meta_data) === null || _this$meta_data8 === void 0 || (_this$meta_data8 = _this$meta_data8.dossier_credit.cred_pub_tb_1) === null || _this$meta_data8 === void 0 ? void 0 : _this$meta_data8.montant_demander) !== undefined) {
        var _this$meta_data9;
        c = (_this$meta_data9 = this.meta_data) === null || _this$meta_data9 === void 0 || (_this$meta_data9 = _this$meta_data9.dossier_credit.cred_pub_tb_1) === null || _this$meta_data9 === void 0 ? void 0 : _this$meta_data9.montant_demander;
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
    },
    tableClosedOrOpened: function tableClosedOrOpened() {
      this.seen = this.fetchClosedTables(this.tb_name + this.meta_data['cred_pub_key']);
    },
    openNotesModal: function openNotesModal() {
      var listing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.listingNote = listing;
      this.$modal.show(this.tb_name);
    },
    convertNumber: function convertNumber(valeur) {
      return Number(String(valeur).replace(/\s+/g, ""));
    },
    loadFindIndexByObj: function loadFindIndexByObj(label, tab) {
      if (!['', null, undefined].includes(tab)) {
        return tab.findIndex(function (el) {
          return el.position === label;
        });
      }
      return -1;
    },
    loadRetrieved: function loadRetrieved() {
      var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];
      if (lentb.length > 0) {
        var _this$meta_data$dossi14;
        if (this.meta_data["dossier_credit"][createdKey] != undefined) {
          var _this$meta_data$dossi3, _this$meta_data$dossi4, _this$meta_data$dossi5, _this$meta_data$dossi6, _this$meta_data$dossi7, _this$meta_data$dossi8, _this$meta_data$dossi9, _this$meta_data$dossi0, _this$meta_data$dossi1, _this$meta_data$dossi10;
          this.appreciation_organisation_src = (_this$meta_data$dossi3 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi3 === void 0 || (_this$meta_data$dossi3 = _this$meta_data$dossi3.cred_pub_tb_480) === null || _this$meta_data$dossi3 === void 0 ? void 0 : _this$meta_data$dossi3.appreciation_organisation_src;
          this.appreciation_organisation_arc = (_this$meta_data$dossi4 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi4 === void 0 || (_this$meta_data$dossi4 = _this$meta_data$dossi4.cred_pub_tb_48) === null || _this$meta_data$dossi4 === void 0 ? void 0 : _this$meta_data$dossi4.appreciation_organisation_arc;
          this.appreciation_organisation_caf = (_this$meta_data$dossi5 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi5 === void 0 || (_this$meta_data$dossi5 = _this$meta_data$dossi5.cred_pub_tb_16) === null || _this$meta_data$dossi5 === void 0 ? void 0 : _this$meta_data$dossi5.appreciation_organisation;
          this.appreciation_autre_risque_src = (_this$meta_data$dossi6 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi6 === void 0 || (_this$meta_data$dossi6 = _this$meta_data$dossi6.cred_pub_tb_480) === null || _this$meta_data$dossi6 === void 0 ? void 0 : _this$meta_data$dossi6.appreciation_organisation_src;
          this.appreciation_autre_risque_arc = (_this$meta_data$dossi7 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi7 === void 0 || (_this$meta_data$dossi7 = _this$meta_data$dossi7.cred_pub_tb_48) === null || _this$meta_data$dossi7 === void 0 ? void 0 : _this$meta_data$dossi7.appreciation_autre_risque_arc;
          this.appreciation_autre_risque_caf = (_this$meta_data$dossi8 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi8 === void 0 || (_this$meta_data$dossi8 = _this$meta_data$dossi8.cred_pub_tb_16) === null || _this$meta_data$dossi8 === void 0 ? void 0 : _this$meta_data$dossi8.appreciation_evaluation;
          this.appreciation_risque_commerciale_src = (_this$meta_data$dossi9 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi9 === void 0 || (_this$meta_data$dossi9 = _this$meta_data$dossi9.cred_pub_tb_480) === null || _this$meta_data$dossi9 === void 0 ? void 0 : _this$meta_data$dossi9.appreciation_risque_commerciale_src;
          this.appreciation_risque_commerciale_arc = (_this$meta_data$dossi0 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi0 === void 0 || (_this$meta_data$dossi0 = _this$meta_data$dossi0.cred_pub_tb_48) === null || _this$meta_data$dossi0 === void 0 ? void 0 : _this$meta_data$dossi0.appreciation_risque_commerciale_arc;
          this.appreciation_risque_commerciale_caf = (_this$meta_data$dossi1 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi1 === void 0 || (_this$meta_data$dossi1 = _this$meta_data$dossi1.cred_pub_tb_16) === null || _this$meta_data$dossi1 === void 0 ? void 0 : _this$meta_data$dossi1.appreciation;
          this.formDataToBeWatched.resultat_net_propose = (_this$meta_data$dossi10 = this.meta_data['dossier_credit']["cred_pub_tb_48"]) === null || _this$meta_data$dossi10 === void 0 ? void 0 : _this$meta_data$dossi10.resultat_net_propose;
          this.formDataToBeWatched = this.meta_data["dossier_credit"][createdKey];
          // console.log("formDataToBeWatched",this.formDataToBeWatched)
          if (this.formDataToBeWatched.appreciation_organisation == "") {
            var _this$meta_data$dossi11;
            // this.appreciation_organisation_caf = this.meta_data.dossier_credit.cred_pub_tb_16?.appreciation_organisation
            this.formDataToBeWatched["appreciation_organisation"] = (_this$meta_data$dossi11 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi11 === void 0 || (_this$meta_data$dossi11 = _this$meta_data$dossi11.cred_pub_tb_16) === null || _this$meta_data$dossi11 === void 0 ? void 0 : _this$meta_data$dossi11.appreciation_organisation;
          }
          if (this.formDataToBeWatched.appreciation_autre_risque == "") {
            var _this$meta_data$dossi12;
            // this.appreciation_organisation_caf = this.meta_data.dossier_credit.cred_pub_tb_16?.appreciation_organisation
            this.formDataToBeWatched["appreciation_autre_risque"] = (_this$meta_data$dossi12 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi12 === void 0 || (_this$meta_data$dossi12 = _this$meta_data$dossi12.cred_pub_tb_16) === null || _this$meta_data$dossi12 === void 0 ? void 0 : _this$meta_data$dossi12.appreciation_evaluation;
          }
          if (this.formDataToBeWatched.appreciation_risque_commerciale == "") {
            var _this$meta_data$dossi13;
            // this.appreciation_organisation_caf = this.meta_data.dossier_credit.cred_pub_tb_16?.appreciation_organisation
            this.formDataToBeWatched["appreciation_risque_commerciale"] = (_this$meta_data$dossi13 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi13 === void 0 || (_this$meta_data$dossi13 = _this$meta_data$dossi13.cred_pub_tb_16) === null || _this$meta_data$dossi13 === void 0 ? void 0 : _this$meta_data$dossi13.appreciation;
          }
        }
        // Close table by default
        this.defaultRetract(false, (_this$meta_data$dossi14 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi14 === void 0 ? void 0 : _this$meta_data$dossi14.applied_templ_id);
      }
      var remote = this.meta_data['dossier_credit']["cred_pub_tb_13"].benefices_pertes;
      if (this.meta_data['dossier_credit'][createdKey] === undefined) {
        // this.dossier_credit = tbFetcheData['dossier_credit'];

        if (this.meta_data['dossier_credit']["cred_pub_tb_13"] != undefined && this.meta_data['dossier_credit']["cred_pub_tb_48"] != undefined) {
          var _this$meta_data$dossi15, _this$meta_data$dossi16, _this$meta_data$dossi17, _this$meta_data$dossi18, _this$meta_data$dossi19, _this$meta_data$dossi20, _this$meta_data$dossi21, _this$meta_data$dossi22, _this$meta_data$dossi23, _this$meta_data$dossi24, _this$meta_data$dossi25, _this$meta_data$dossi26, _this$meta_data$dossi27, _this$meta_data$dossi28, _this$meta_data$dossi29;
          this.appreciation_organisation_src = (_this$meta_data$dossi15 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi15 === void 0 || (_this$meta_data$dossi15 = _this$meta_data$dossi15.cred_pub_tb_480) === null || _this$meta_data$dossi15 === void 0 ? void 0 : _this$meta_data$dossi15.appreciation_organisation_src;
          this.appreciation_organisation_arc = (_this$meta_data$dossi16 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi16 === void 0 || (_this$meta_data$dossi16 = _this$meta_data$dossi16.cred_pub_tb_48) === null || _this$meta_data$dossi16 === void 0 ? void 0 : _this$meta_data$dossi16.appreciation_organisation_arc;
          this.appreciation_organisation_caf = (_this$meta_data$dossi17 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi17 === void 0 || (_this$meta_data$dossi17 = _this$meta_data$dossi17.cred_pub_tb_16) === null || _this$meta_data$dossi17 === void 0 ? void 0 : _this$meta_data$dossi17.appreciation_organisation;
          this.appreciation_autre_risque_src = (_this$meta_data$dossi18 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi18 === void 0 || (_this$meta_data$dossi18 = _this$meta_data$dossi18.cred_pub_tb_480) === null || _this$meta_data$dossi18 === void 0 ? void 0 : _this$meta_data$dossi18.appreciation_organisation_src;
          this.appreciation_autre_risque_arc = (_this$meta_data$dossi19 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi19 === void 0 || (_this$meta_data$dossi19 = _this$meta_data$dossi19.cred_pub_tb_48) === null || _this$meta_data$dossi19 === void 0 ? void 0 : _this$meta_data$dossi19.appreciation_autre_risque_arc;
          this.appreciation_autre_risque_caf = (_this$meta_data$dossi20 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi20 === void 0 || (_this$meta_data$dossi20 = _this$meta_data$dossi20.cred_pub_tb_16) === null || _this$meta_data$dossi20 === void 0 ? void 0 : _this$meta_data$dossi20.appreciation_evaluation;
          this.appreciation_risque_commerciale_src = (_this$meta_data$dossi21 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi21 === void 0 || (_this$meta_data$dossi21 = _this$meta_data$dossi21.cred_pub_tb_480) === null || _this$meta_data$dossi21 === void 0 ? void 0 : _this$meta_data$dossi21.appreciation_risque_commerciale_src;
          this.appreciation_risque_commerciale_arc = (_this$meta_data$dossi22 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi22 === void 0 || (_this$meta_data$dossi22 = _this$meta_data$dossi22.cred_pub_tb_48) === null || _this$meta_data$dossi22 === void 0 ? void 0 : _this$meta_data$dossi22.appreciation_risque_commerciale_arc;
          this.appreciation_risque_commerciale_caf = (_this$meta_data$dossi23 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi23 === void 0 || (_this$meta_data$dossi23 = _this$meta_data$dossi23.cred_pub_tb_16) === null || _this$meta_data$dossi23 === void 0 ? void 0 : _this$meta_data$dossi23.appreciation;
          this.formDataToBeWatched.chiffre_affaire_propo_analyste = (_this$meta_data$dossi24 = this.meta_data['dossier_credit']["cred_pub_tb_48"]) === null || _this$meta_data$dossi24 === void 0 ? void 0 : _this$meta_data$dossi24.chiffre_affaire_propo_analyste;
          this.formDataToBeWatched.cout_achat_propose = this.meta_data['dossier_credit']["cred_pub_tb_48"].cout_achat_propose;
          this.formDataToBeWatched.marge_commerciale_propose = this.calculMargeCom();
          this.formDataToBeWatched.charge_exploitation_propose = (_this$meta_data$dossi25 = this.meta_data['dossier_credit']["cred_pub_tb_48"]) === null || _this$meta_data$dossi25 === void 0 ? void 0 : _this$meta_data$dossi25.charge_exploitation_propose;
          this.formDataToBeWatched.resultat_net_propose = (_this$meta_data$dossi26 = this.meta_data['dossier_credit']["cred_pub_tb_48"]) === null || _this$meta_data$dossi26 === void 0 ? void 0 : _this$meta_data$dossi26.resultat_net_propose;
          this.formDataToBeWatched.autre_revenu_propose = (_this$meta_data$dossi27 = this.meta_data['dossier_credit']["cred_pub_tb_48"]) === null || _this$meta_data$dossi27 === void 0 ? void 0 : _this$meta_data$dossi27.autre_revenu_propose;
          this.formDataToBeWatched.autre_charge_propose = (_this$meta_data$dossi28 = this.meta_data['dossier_credit']["cred_pub_tb_48"]) === null || _this$meta_data$dossi28 === void 0 ? void 0 : _this$meta_data$dossi28.autre_charge_propose;
          this.formDataToBeWatched.charge_familiale_propose = (_this$meta_data$dossi29 = this.meta_data['dossier_credit']["cred_pub_tb_48"]) === null || _this$meta_data$dossi29 === void 0 ? void 0 : _this$meta_data$dossi29.charge_familiale_propose;
          this.formDataToBeWatched.capacite_autofinancement_propose = this.capaciteAutoFinancement();
          this.formDataToBeWatched.montant_credit_propose = this.meta_data['dossier_credit']["cred_pub_tb_48"].montant_credit_propose;
          this.formDataToBeWatched.montant_echeance_credit_propose = this.meta_data['dossier_credit']["cred_pub_tb_48"].montant_echeance_credit_propose;
          this.formDataToBeWatched.tresorerie_propose = this.meta_data['dossier_credit']["cred_pub_tb_48"].tresorerie_propose;
          this.formDataToBeWatched.taux_endettement_propose = this.convertNumber(this.meta_data['dossier_credit']["cred_pub_tb_48"].montant_echeance_credit_propose) / this.convertNumber(this.capaciteAutoFinancement());
        }
      }
    },
    setTbVal: function setTbVal(val) {
      this.cred_pub_key = val;
    },
    loadWithError: function loadWithError(err) {
      // // window.location.href = "/login";
    },
    loadIncommingData: function loadIncommingData() {
      var _this$meta_data$dossi30, _this$meta_data$dossi31, _this$meta_data$dossi32, _this$meta_data$dossi33, _this$meta_data$dossi34, _this$meta_data$dossi35, _this$meta_data$dossi36, _this$meta_data$dossi37, _this$meta_data$dossi38, _this$meta_data$dossi39, _this$meta_data$dossi40, _this$meta_data$dossi41, _this$meta_data$dossi42, _this$meta_data$dossi43, _this$meta_data$dossi44, _this$meta_data$dossi45, _this$meta_data$dossi46, _this$meta_data$dossi47, _this$meta_data$dossi48, _this$meta_data$dossi49, _this$meta_data$dossi50, _this$meta_data$dossi51, _this$meta_data$dossi52, _this$meta_data$dossi53, _this$meta_data$dossi54, _this$meta_data$dossi55, _this$meta_data$dossi56, _this$meta_data$dossi57, _this$meta_data$dossi58, _this$meta_data$dossi59, _this$meta_data$dossi60, _this$meta_data$dossi61, _this$meta_data$dossi62, _this$meta_data$dossi63, _this$meta_data$dossi64, _this$meta_data$dossi65;
      this.chiffre_affaire = (_this$meta_data$dossi30 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi30 === void 0 || (_this$meta_data$dossi30 = _this$meta_data$dossi30.cred_pub_tb_13) === null || _this$meta_data$dossi30 === void 0 ? void 0 : _this$meta_data$dossi30.benefices_pertes[this.label_keys[0]].montant_c;
      this.chiffre_affaire_propo_analyste_filiale = (_this$meta_data$dossi31 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi31 === void 0 || (_this$meta_data$dossi31 = _this$meta_data$dossi31.cred_pub_tb_48) === null || _this$meta_data$dossi31 === void 0 ? void 0 : _this$meta_data$dossi31.chiffre_affaire_propo_analyste;
      this.justification_chiffre_affaire_analyste = (_this$meta_data$dossi32 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi32 === void 0 || (_this$meta_data$dossi32 = _this$meta_data$dossi32.cred_pub_tb_48) === null || _this$meta_data$dossi32 === void 0 ? void 0 : _this$meta_data$dossi32.justification_chiffre_affaire;
      this.cout_achat = (_this$meta_data$dossi33 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi33 === void 0 || (_this$meta_data$dossi33 = _this$meta_data$dossi33.cred_pub_tb_13) === null || _this$meta_data$dossi33 === void 0 ? void 0 : _this$meta_data$dossi33.benefices_pertes[this.label_keys[1]].montant_c;
      this.cout_achat_propose_analyste_filiale = (_this$meta_data$dossi34 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi34 === void 0 || (_this$meta_data$dossi34 = _this$meta_data$dossi34.cred_pub_tb_48) === null || _this$meta_data$dossi34 === void 0 ? void 0 : _this$meta_data$dossi34.cout_achat_propose;
      this.justification_cout_achat_analyste_filiale = (_this$meta_data$dossi35 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi35 === void 0 || (_this$meta_data$dossi35 = _this$meta_data$dossi35.cred_pub_tb_48) === null || _this$meta_data$dossi35 === void 0 ? void 0 : _this$meta_data$dossi35.justification_cout_achat;
      this.marge_commerciale = this.calculMargeComFiliale();
      this.marge_commerciale_propose_analyste_filiale = (_this$meta_data$dossi36 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi36 === void 0 || (_this$meta_data$dossi36 = _this$meta_data$dossi36.cred_pub_tb_48) === null || _this$meta_data$dossi36 === void 0 ? void 0 : _this$meta_data$dossi36.marge_commerciale_propose;
      this.justification_marge_commerciale_analyste_filiale = (_this$meta_data$dossi37 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi37 === void 0 || (_this$meta_data$dossi37 = _this$meta_data$dossi37.cred_pub_tb_48) === null || _this$meta_data$dossi37 === void 0 ? void 0 : _this$meta_data$dossi37.justification_marge_commerciale;
      this.charge_exploitation = (_this$meta_data$dossi38 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi38 === void 0 || (_this$meta_data$dossi38 = _this$meta_data$dossi38.cred_pub_tb_13) === null || _this$meta_data$dossi38 === void 0 ? void 0 : _this$meta_data$dossi38.benefices_pertes[this.label_keys[2]].montant_c;
      this.charge_exploitation_propose_analyste_filiale = (_this$meta_data$dossi39 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi39 === void 0 || (_this$meta_data$dossi39 = _this$meta_data$dossi39.cred_pub_tb_48) === null || _this$meta_data$dossi39 === void 0 ? void 0 : _this$meta_data$dossi39.charge_exploitation_propose;
      this.justification_charge_exploitation_analyste_filiale = (_this$meta_data$dossi40 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi40 === void 0 || (_this$meta_data$dossi40 = _this$meta_data$dossi40.cred_pub_tb_48) === null || _this$meta_data$dossi40 === void 0 ? void 0 : _this$meta_data$dossi40.justification_charge_exploitation;
      this.resultat_net = (_this$meta_data$dossi41 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi41 === void 0 || (_this$meta_data$dossi41 = _this$meta_data$dossi41.cred_pub_tb_13) === null || _this$meta_data$dossi41 === void 0 ? void 0 : _this$meta_data$dossi41.benefices_pertes[this.label_keys[3]].montant_c;
      this.resultat_net_propose_analyste_filiale = (_this$meta_data$dossi42 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi42 === void 0 || (_this$meta_data$dossi42 = _this$meta_data$dossi42.cred_pub_tb_48) === null || _this$meta_data$dossi42 === void 0 ? void 0 : _this$meta_data$dossi42.resultat_net_propose;
      this.justification_resultat_net_analyste_filiale = (_this$meta_data$dossi43 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi43 === void 0 || (_this$meta_data$dossi43 = _this$meta_data$dossi43.cred_pub_tb_48) === null || _this$meta_data$dossi43 === void 0 ? void 0 : _this$meta_data$dossi43.justification_resultat_net;
      this.autre_revenu = (_this$meta_data$dossi44 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi44 === void 0 || (_this$meta_data$dossi44 = _this$meta_data$dossi44.cred_pub_tb_13) === null || _this$meta_data$dossi44 === void 0 ? void 0 : _this$meta_data$dossi44.benefices_pertes[this.label_keys[4]].montant_c;
      this.autre_revenu_propose_analyste_filiale = (_this$meta_data$dossi45 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi45 === void 0 || (_this$meta_data$dossi45 = _this$meta_data$dossi45.cred_pub_tb_48) === null || _this$meta_data$dossi45 === void 0 ? void 0 : _this$meta_data$dossi45.autre_revenu_propose;
      this.justification_autre_revenu_analyste_filiale = (_this$meta_data$dossi46 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi46 === void 0 || (_this$meta_data$dossi46 = _this$meta_data$dossi46.cred_pub_tb_48) === null || _this$meta_data$dossi46 === void 0 ? void 0 : _this$meta_data$dossi46.justification_autre_revenu;
      this.autre_charge = (_this$meta_data$dossi47 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi47 === void 0 || (_this$meta_data$dossi47 = _this$meta_data$dossi47.cred_pub_tb_13) === null || _this$meta_data$dossi47 === void 0 ? void 0 : _this$meta_data$dossi47.benefices_pertes[this.label_keys[6]].montant_c;
      this.autre_charge_propose_analyste_filiale = (_this$meta_data$dossi48 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi48 === void 0 || (_this$meta_data$dossi48 = _this$meta_data$dossi48.cred_pub_tb_48) === null || _this$meta_data$dossi48 === void 0 ? void 0 : _this$meta_data$dossi48.autre_charge_propose;
      this.justification_autre_charge_analyste_filiale = (_this$meta_data$dossi49 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi49 === void 0 || (_this$meta_data$dossi49 = _this$meta_data$dossi49.cred_pub_tb_48) === null || _this$meta_data$dossi49 === void 0 ? void 0 : _this$meta_data$dossi49.justification_autre_charge;
      this.charge_familiale = (_this$meta_data$dossi50 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi50 === void 0 || (_this$meta_data$dossi50 = _this$meta_data$dossi50.cred_pub_tb_13) === null || _this$meta_data$dossi50 === void 0 ? void 0 : _this$meta_data$dossi50.benefices_pertes[this.label_keys[5]].montant_c;
      this.charge_familiale_propose_analyste_filiale = (_this$meta_data$dossi51 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi51 === void 0 || (_this$meta_data$dossi51 = _this$meta_data$dossi51.cred_pub_tb_48) === null || _this$meta_data$dossi51 === void 0 ? void 0 : _this$meta_data$dossi51.charge_familiale_propose;
      this.justification_charge_familiale_analyste_filiale = (_this$meta_data$dossi52 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi52 === void 0 || (_this$meta_data$dossi52 = _this$meta_data$dossi52.cred_pub_tb_48) === null || _this$meta_data$dossi52 === void 0 ? void 0 : _this$meta_data$dossi52.justification_charge_familiale;
      this.capacite_autofinancement = this.capaciteAutoFinancementFiliale();
      this.capacite_autofinancement_propose_analyste_filiale = (_this$meta_data$dossi53 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi53 === void 0 || (_this$meta_data$dossi53 = _this$meta_data$dossi53.cred_pub_tb_48) === null || _this$meta_data$dossi53 === void 0 ? void 0 : _this$meta_data$dossi53.capacite_autofinancement_propose;
      this.justification_capacite_auto_analyste_filiale = (_this$meta_data$dossi54 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi54 === void 0 || (_this$meta_data$dossi54 = _this$meta_data$dossi54.cred_pub_tb_48) === null || _this$meta_data$dossi54 === void 0 ? void 0 : _this$meta_data$dossi54.justification_capacite_auto;
      this.montant_credit_caf = (_this$meta_data$dossi55 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi55 === void 0 || (_this$meta_data$dossi55 = _this$meta_data$dossi55.cred_pub_tb_1) === null || _this$meta_data$dossi55 === void 0 ? void 0 : _this$meta_data$dossi55.montant_credit;
      this.montant_credit_propose_analyste_filiale = (_this$meta_data$dossi56 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi56 === void 0 || (_this$meta_data$dossi56 = _this$meta_data$dossi56.cred_pub_tb_48) === null || _this$meta_data$dossi56 === void 0 ? void 0 : _this$meta_data$dossi56.montant_credit_propose;
      this.justification_capacite_montant_propose_analyste_filiale = (_this$meta_data$dossi57 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi57 === void 0 || (_this$meta_data$dossi57 = _this$meta_data$dossi57.cred_pub_tb_48) === null || _this$meta_data$dossi57 === void 0 ? void 0 : _this$meta_data$dossi57.justification_capacite_montant_propose;
      this.montant_echeance_credit_caf = (_this$meta_data$dossi58 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi58 === void 0 || (_this$meta_data$dossi58 = _this$meta_data$dossi58.cred_pub_tb_1) === null || _this$meta_data$dossi58 === void 0 ? void 0 : _this$meta_data$dossi58.echeance.echeance;
      this.montant_echeance_credit_propose_analyste_filiale = (_this$meta_data$dossi59 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi59 === void 0 || (_this$meta_data$dossi59 = _this$meta_data$dossi59.cred_pub_tb_48) === null || _this$meta_data$dossi59 === void 0 ? void 0 : _this$meta_data$dossi59.montant_echeance_credit_propose;
      this.justification_capacite_montant_echeance_analyste_filiale = (_this$meta_data$dossi60 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi60 === void 0 || (_this$meta_data$dossi60 = _this$meta_data$dossi60.cred_pub_tb_48) === null || _this$meta_data$dossi60 === void 0 ? void 0 : _this$meta_data$dossi60.justification_capacite_montant_echeance;
      this.tresorerie = (_this$meta_data$dossi61 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi61 === void 0 || (_this$meta_data$dossi61 = _this$meta_data$dossi61.cred_pub_tb_12) === null || _this$meta_data$dossi61 === void 0 ? void 0 : _this$meta_data$dossi61.actifs[0].montant_c;
      this.tresorerie_propose_analyste_filiale = (_this$meta_data$dossi62 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi62 === void 0 || (_this$meta_data$dossi62 = _this$meta_data$dossi62.cred_pub_tb_48) === null || _this$meta_data$dossi62 === void 0 ? void 0 : _this$meta_data$dossi62.tresorerie_propose;
      this.justification_capacite_tresorerie_analyste_filiale = (_this$meta_data$dossi63 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi63 === void 0 || (_this$meta_data$dossi63 = _this$meta_data$dossi63.cred_pub_tb_48) === null || _this$meta_data$dossi63 === void 0 ? void 0 : _this$meta_data$dossi63.justification_capacite_tresorerie;
      this.taux_endettement_propose_analyste_filiale = (_this$meta_data$dossi64 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi64 === void 0 || (_this$meta_data$dossi64 = _this$meta_data$dossi64.cred_pub_tb_48) === null || _this$meta_data$dossi64 === void 0 ? void 0 : _this$meta_data$dossi64.taux_endettement_propose;
      this.justification_taux_analyste_filiale = (_this$meta_data$dossi65 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi65 === void 0 || (_this$meta_data$dossi65 = _this$meta_data$dossi65.cred_pub_tb_48) === null || _this$meta_data$dossi65 === void 0 ? void 0 : _this$meta_data$dossi65.justification_taux;
      if (this.convertNumber(this.capacite_autofinancement) != 0) {
        this.taux_endettement = (this.convertNumber(this.montant_echeance_credit_caf) + this.convertNumber(this.creditConcurrence())) / this.convertNumber(this.capacite_autofinancement) * 100;
      } else {
        this.taux_endettement = 0;
      }
    },
    send2Backend: function send2Backend(res, newVal, oldVal) {
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

            // this.formDataToBeWatched.ligne_existantes = this.dossier_credit.cred_pub_tb_34.lignes_existantes;
            // this.formDataToBeWatched.ligne_existantes.ligne_mfcfa_ca = this.dossier_credit.cred_pub_tb_34.ligne_existantes.ligne_mfcfa
            this.$emit("load-shell");
          }
        }.bind(this))["catch"](function (error) {
          this.$Progress.finish();
          console.log(error);
        }.bind(this));
      } else {
        alert("Unauthenticated");
      }
    },
    retract: function retract() {
      this.seen = !this.seen;
      var a = {
        "tb_name": this.tb_name + this.meta_data['cred_pub_key'],
        "status": this.seen
      };
      EventBus.$emit("savedclosed-table", a);
    },
    // add defaultRetract
    defaultRetract: function defaultRetract(rc, ra) {
      if (ra != null) {
        this.seen = rc;
        var a = {
          "tb_name": this.tb_name + this.meta_data['cred_pub_key'],
          "status": this.seen
        };
        EventBus.$emit("savedclosed-table", a);
      }
    },
    loadTbAttrs: function loadTbAttrs() {
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
        id: "ca3-head"
      };
      // console.log(p)
      this.$emit("load-buffer", p);
    },
    // SOMME DES MONTANTS
    somX3: function somX3(ob, key) {
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
    },
    somX4: function somX4(ob, key) {
      var som = 0;
      var val1 = ob.replace(/\s+/g, "");
      var val2 = key.replace(/\s+/g, "");
      som = val1 + val2;
      return som;
    },
    handleInput: function handleInput(evt) {
      this.formDataToBeWatched["lignes_existantes"] = this.lignes_existantes;
      this.formDataToBeWatched["nouvelles_lignes"] = this.nouvelles_lignes;
      this.formDataToBeWatched["cautions_lignes_existantes"] = this.cautions_lignes_existantes;
      this.formDataToBeWatched["cautions_nouvelles_lignes"] = this.cautions_nouvelles_lignes;
      this.formDataToBeWatched.marge_commerciale_propose = this.margeComProp;
      this.formDataToBeWatched.capacite_autofinancement_propose = this.capaciteAutoFin;
      this.formDataToBeWatched.taux_endettement_propose = this.convertNumber(this.formDataToBeWatched.montant_echeance_credit_propose) / this.convertNumber(this.formDataToBeWatched.capacite_autofinancement_propose);
    },
    instruction3: function instruction3(id) {
      var id0 = '#' + id;
      window.$(id0).modal('show');
    }
  },
  watch: {
    formDataToBeWatched: {
      handler: function handler(newVal, oldVal) {
        // if (oldVal === undefined) {
        //   return
        // }
        this.autosaving(newVal, oldVal);
      },
      deep: true,
      immediate: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/groupe/CA3.vue?vue&type=template&id=2728be7d&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/groupe/CA3.vue?vue&type=template&id=2728be7d&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$formDataToBeWatch, _vm$authcheckUsr, _vm$authcheckUsr2, _vm$authcheckUsr3, _vm$authcheckUsr4, _vm$authcheckUsr5, _vm$authcheckUsr6, _vm$authcheckUsr7, _vm$authcheckUsr8, _vm$authcheckUsr9, _vm$authcheckUsr0, _vm$authcheckUsr1, _vm$authcheckUsr10, _vm$authcheckUsr11, _vm$authcheckUsr12, _vm$authcheckUsr13, _vm$authcheckUsr14, _vm$authcheckUsr15, _vm$authcheckUsr16, _vm$authcheckUsr17, _vm$authcheckUsr18, _vm$authcheckUsr19, _vm$authcheckUsr20, _vm$authcheckUsr21, _vm$authcheckUsr22, _vm$authcheckUsr23, _vm$authcheckUsr24, _vm$dossier_credit, _vm$dossier_credit2, _vm$dossier_credit3, _vm$dossier_credit4, _vm$dossier_credit5, _vm$dossier_credit6, _vm$dossier_credit7, _vm$dossier_credit8, _vm$formDataToBeWatch2;
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
      id: "ca3-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " :  Analyse financière, forces et faiblesses\n                        ")]), _vm._v(" "), _c("div", {
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
  })], 1)]), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(0), _vm._v(" "), _c("currency-input", {
    attrs: {
      required: "",
      type: "text",
      id: "chiffre_affaire",
      value: _vm.chiffre_affaire,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(1), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "text",
      id: "chiffre_affaire_propo_analyste",
      value: _vm.chiffre_affaire_propo_analyste_filiale,
      disabled: ""
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pl-4"
  }, [_vm._m(2), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control input-box",
    attrs: {
      required: "",
      type: "text",
      disabled: ((_vm$authcheckUsr = _vm.authcheckUsr) === null || _vm$authcheckUsr === void 0 ? void 0 : _vm$authcheckUsr.what_tobe_produced) == "PV_CONTRE_ANALYSE_GROUPE",
      id: "chiffre_affaire_propo_analyste",
      value: _vm.formDataToBeWatched.chiffre_affaire_propo_analyste
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(3), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.justification_chiffre_affaire_analyste,
      expression: "justification_chiffre_affaire_analyste",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      cols: "30",
      rows: "2",
      disabled: ""
    },
    domProps: {
      value: _vm.justification_chiffre_affaire_analyste
    },
    on: {
      change: [function ($event) {
        _vm.justification_chiffre_affaire_analyste = $event.target.value;
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
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
      disabled: ((_vm$authcheckUsr2 = _vm.authcheckUsr) === null || _vm$authcheckUsr2 === void 0 ? void 0 : _vm$authcheckUsr2.what_tobe_produced) == "PV_CONTRE_ANALYSE_GROUPE",
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
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(5), _vm._v(" "), _c("currency-input", {
    attrs: {
      required: "",
      type: "text",
      id: "",
      value: _vm.cout_achat,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(6), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "text",
      disabled: "",
      id: "cout_achat_propose_analyste_filiale",
      value: _vm.cout_achat_propose_analyste_filiale
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pl-4"
  }, [_vm._m(7), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control input-box",
    attrs: {
      required: "",
      type: "text",
      id: "cout_achat_propose",
      disabled: ((_vm$authcheckUsr3 = _vm.authcheckUsr) === null || _vm$authcheckUsr3 === void 0 ? void 0 : _vm$authcheckUsr3.what_tobe_produced) == "PV_CONTRE_ANALYSE_GROUPE",
      value: _vm.formDataToBeWatched.cout_achat_propose
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(8), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.justification_cout_achat_analyste_filiale,
      expression: "justification_cout_achat_analyste_filiale",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      cols: "30",
      rows: "2",
      disabled: ""
    },
    domProps: {
      value: _vm.justification_cout_achat_analyste_filiale
    },
    on: {
      change: [function ($event) {
        _vm.justification_cout_achat_analyste_filiale = $event.target.value;
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(9), _vm._v(" "), _c("textarea", {
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
      disabled: ((_vm$authcheckUsr4 = _vm.authcheckUsr) === null || _vm$authcheckUsr4 === void 0 ? void 0 : _vm$authcheckUsr4.what_tobe_produced) == "PV_CONTRE_ANALYSE_GROUPE",
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
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(10), _vm._v(" "), _c("currency-input", {
    attrs: {
      required: "",
      type: "text",
      id: "marge_commerciale",
      value: _vm.marge_commerciale,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(11), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "text",
      id: "marge_commerciale_propose_analyste_filiale",
      value: _vm.marge_commerciale_propose_analyste_filiale,
      disabled: ""
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pl-4"
  }, [_vm._m(12), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control input-box",
    attrs: {
      required: "",
      disabled: ((_vm$authcheckUsr5 = _vm.authcheckUsr) === null || _vm$authcheckUsr5 === void 0 ? void 0 : _vm$authcheckUsr5.what_tobe_produced) == "PV_CONTRE_ANALYSE_GROUPE",
      type: "text",
      id: "marge_commerciale_propose",
      value: _vm.formDataToBeWatched.marge_commerciale_propose
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(13), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.justification_marge_commerciale_analyste_filiale,
      expression: "justification_marge_commerciale_analyste_filiale",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      cols: "30",
      rows: "2",
      disabled: ""
    },
    domProps: {
      value: _vm.justification_marge_commerciale_analyste_filiale
    },
    on: {
      change: [function ($event) {
        _vm.justification_marge_commerciale_analyste_filiale = $event.target.value;
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(14), _vm._v(" "), _c("textarea", {
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
      disabled: ((_vm$authcheckUsr6 = _vm.authcheckUsr) === null || _vm$authcheckUsr6 === void 0 ? void 0 : _vm$authcheckUsr6.what_tobe_produced) == "PV_CONTRE_ANALYSE_GROUPE",
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
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(15), _vm._v(" "), _c("currency-input", {
    attrs: {
      required: "",
      type: "text",
      id: "",
      value: _vm.charge_exploitation,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(16), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "text",
      id: "charge_exploitation_propose_analyste_filiale",
      value: _vm.charge_exploitation_propose_analyste_filiale,
      disabled: ""
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pl-4"
  }, [_vm._m(17), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control input-box",
    attrs: {
      required: "",
      disabled: ((_vm$authcheckUsr7 = _vm.authcheckUsr) === null || _vm$authcheckUsr7 === void 0 ? void 0 : _vm$authcheckUsr7.what_tobe_produced) == "PV_CONTRE_ANALYSE_GROUPE",
      type: "text",
      id: "charge_exploitation_propose",
      value: _vm.formDataToBeWatched.charge_exploitation_propose
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(18), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.justification_charge_exploitation_analyste_filiale,
      expression: "justification_charge_exploitation_analyste_filiale",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      cols: "30",
      rows: "2",
      disabled: ""
    },
    domProps: {
      value: _vm.justification_charge_exploitation_analyste_filiale
    },
    on: {
      change: [function ($event) {
        _vm.justification_charge_exploitation_analyste_filiale = $event.target.value;
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(19), _vm._v(" "), _c("textarea", {
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
      disabled: ((_vm$authcheckUsr8 = _vm.authcheckUsr) === null || _vm$authcheckUsr8 === void 0 ? void 0 : _vm$authcheckUsr8.what_tobe_produced) == "PV_CONTRE_ANALYSE_GROUPE",
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
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(20), _vm._v(" "), _c("currency-input", {
    attrs: {
      required: "",
      type: "text",
      id: "",
      value: _vm.resultat_net,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(21), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "text",
      id: "resultat_net_propose",
      value: _vm.resultat_net_propose_analyste_filiale,
      disabled: ""
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pl-4"
  }, [_vm._m(22), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control input-box",
    attrs: {
      required: "",
      disabled: ((_vm$authcheckUsr9 = _vm.authcheckUsr) === null || _vm$authcheckUsr9 === void 0 ? void 0 : _vm$authcheckUsr9.what_tobe_produced) == "PV_CONTRE_ANALYSE_GROUPE",
      type: "text",
      id: "resultat_net_propose",
      value: _vm.formDataToBeWatched.resultat_net_propose
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(23), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.justification_resultat_net_analyste_filiale,
      expression: "justification_resultat_net_analyste_filiale",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      cols: "30",
      rows: "2",
      disabled: ""
    },
    domProps: {
      value: _vm.justification_resultat_net_analyste_filiale
    },
    on: {
      change: [function ($event) {
        _vm.justification_resultat_net_analyste_filiale = $event.target.value;
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(24), _vm._v(" "), _c("textarea", {
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
      disabled: ((_vm$authcheckUsr0 = _vm.authcheckUsr) === null || _vm$authcheckUsr0 === void 0 ? void 0 : _vm$authcheckUsr0.what_tobe_produced) == "PV_CONTRE_ANALYSE_GROUPE",
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
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(25), _vm._v(" "), _c("currency-input", {
    attrs: {
      required: "",
      type: "text",
      id: "",
      value: _vm.autre_revenu,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(26), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "text",
      id: "autre_revenu_propose_analyste_filiale",
      value: _vm.autre_revenu_propose_analyste_filiale,
      disabled: ""
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pl-4"
  }, [_vm._m(27), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control input-box",
    attrs: {
      required: "",
      type: "text",
      disabled: ((_vm$authcheckUsr1 = _vm.authcheckUsr) === null || _vm$authcheckUsr1 === void 0 ? void 0 : _vm$authcheckUsr1.what_tobe_produced) == "PV_CONTRE_ANALYSE_GROUPE",
      id: "autre_revenu_propose",
      value: _vm.formDataToBeWatched.autre_revenu_propose
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(28), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.justification_autre_revenu_analyste_filiale,
      expression: "justification_autre_revenu_analyste_filiale",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      cols: "30",
      rows: "2",
      disabled: ""
    },
    domProps: {
      value: _vm.justification_autre_revenu_analyste_filiale
    },
    on: {
      change: [function ($event) {
        _vm.justification_autre_revenu_analyste_filiale = $event.target.value;
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(29), _vm._v(" "), _c("textarea", {
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
      disabled: ((_vm$authcheckUsr10 = _vm.authcheckUsr) === null || _vm$authcheckUsr10 === void 0 ? void 0 : _vm$authcheckUsr10.what_tobe_produced) == "PV_CONTRE_ANALYSE_GROUPE",
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
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(30), _vm._v(" "), _c("currency-input", {
    attrs: {
      required: "",
      type: "text",
      id: "",
      value: _vm.autre_charge,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(31), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "text",
      id: "autre_charge_propose_analyste_filiale",
      value: _vm.autre_charge_propose_analyste_filiale
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pl-4"
  }, [_vm._m(32), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control input-box",
    attrs: {
      required: "",
      disabled: ((_vm$authcheckUsr11 = _vm.authcheckUsr) === null || _vm$authcheckUsr11 === void 0 ? void 0 : _vm$authcheckUsr11.what_tobe_produced) == "PV_CONTRE_ANALYSE_GROUPE",
      type: "text",
      id: "autre_charge_propose",
      value: _vm.formDataToBeWatched.autre_charge_propose
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(33), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.justification_autre_charge_analyste_filiale,
      expression: "justification_autre_charge_analyste_filiale",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      cols: "30",
      rows: "2",
      disabled: ""
    },
    domProps: {
      value: _vm.justification_autre_charge_analyste_filiale
    },
    on: {
      change: [function ($event) {
        _vm.justification_autre_charge_analyste_filiale = $event.target.value;
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(34), _vm._v(" "), _c("textarea", {
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
      disabled: ((_vm$authcheckUsr12 = _vm.authcheckUsr) === null || _vm$authcheckUsr12 === void 0 ? void 0 : _vm$authcheckUsr12.what_tobe_produced) == "PV_CONTRE_ANALYSE_GROUPE",
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
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(35), _vm._v(" "), _c("currency-input", {
    attrs: {
      required: "",
      type: "text",
      id: "",
      value: _vm.charge_familiale,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(36), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "text",
      id: "charge_familiale_propose_analyste_filiale",
      value: _vm.charge_familiale_propose_analyste_filiale,
      disabled: ""
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pl-4"
  }, [_vm._m(37), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control input-box",
    attrs: {
      required: "",
      type: "text",
      disabled: ((_vm$authcheckUsr13 = _vm.authcheckUsr) === null || _vm$authcheckUsr13 === void 0 ? void 0 : _vm$authcheckUsr13.what_tobe_produced) == "PV_CONTRE_ANALYSE_GROUPE",
      id: "charge_familiale_propose",
      value: _vm.formDataToBeWatched.charge_familiale_propose
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(38), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.justification_charge_familiale_analyste_filiale,
      expression: "justification_charge_familiale_analyste_filiale",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      cols: "30",
      rows: "2",
      disabled: ""
    },
    domProps: {
      value: _vm.justification_charge_familiale_analyste_filiale
    },
    on: {
      change: [function ($event) {
        _vm.justification_charge_familiale_analyste_filiale = $event.target.value;
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(39), _vm._v(" "), _c("textarea", {
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
      disabled: ((_vm$authcheckUsr14 = _vm.authcheckUsr) === null || _vm$authcheckUsr14 === void 0 ? void 0 : _vm$authcheckUsr14.what_tobe_produced) == "PV_CONTRE_ANALYSE_GROUPE",
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
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(40), _vm._v(" "), _c("currency-input", {
    attrs: {
      required: "",
      type: "text",
      id: "",
      value: _vm.capacite_autofinancement,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(41), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "text",
      id: "capacite_autofinancement_propose_analyste_filiale",
      value: _vm.capacite_autofinancement_propose_analyste_filiale,
      disabled: ""
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pl-4"
  }, [_vm._m(42), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control input-box",
    attrs: {
      required: "",
      type: "text",
      disabled: ((_vm$authcheckUsr15 = _vm.authcheckUsr) === null || _vm$authcheckUsr15 === void 0 ? void 0 : _vm$authcheckUsr15.what_tobe_produced) == "PV_CONTRE_ANALYSE_GROUPE",
      id: "capacite_autofinancement_propose",
      value: _vm.formDataToBeWatched.capacite_autofinancement_propose
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(43), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.justification_capacite_auto_analyste_filiale,
      expression: "justification_capacite_auto_analyste_filiale"
    }],
    staticClass: "form-control",
    attrs: {
      cols: "30",
      rows: "2",
      disabled: ""
    },
    domProps: {
      value: _vm.justification_capacite_auto_analyste_filiale
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.justification_capacite_auto_analyste_filiale = $event.target.value;
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(44), _vm._v(" "), _c("textarea", {
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
      disabled: ((_vm$authcheckUsr16 = _vm.authcheckUsr) === null || _vm$authcheckUsr16 === void 0 ? void 0 : _vm$authcheckUsr16.what_tobe_produced) == "PV_CONTRE_ANALYSE_GROUPE",
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
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(45), _vm._v(" "), _c("currency-input", {
    attrs: {
      required: "",
      type: "text",
      id: "",
      value: _vm.montant_credit_caf,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(46), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "text",
      id: "montant_credit_propose_analyste_filiale",
      value: _vm.montant_credit_propose_analyste_filiale,
      disabled: ""
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pl-4"
  }, [_vm._m(47), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control input-box",
    attrs: {
      disabled: ((_vm$authcheckUsr17 = _vm.authcheckUsr) === null || _vm$authcheckUsr17 === void 0 ? void 0 : _vm$authcheckUsr17.what_tobe_produced) == "PV_CONTRE_ANALYSE_GROUPE",
      required: "",
      type: "text",
      id: "montant_credit_propose",
      value: _vm.formDataToBeWatched.montant_credit_propose
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(48), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.justification_capacite_montant_propose_analyste_filiale,
      expression: "justification_capacite_montant_propose_analyste_filiale",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      cols: "30",
      rows: "2",
      disabled: ""
    },
    domProps: {
      value: _vm.justification_capacite_montant_propose_analyste_filiale
    },
    on: {
      change: [function ($event) {
        _vm.justification_capacite_montant_propose_analyste_filiale = $event.target.value;
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(49), _vm._v(" "), _c("textarea", {
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
      disabled: ((_vm$authcheckUsr18 = _vm.authcheckUsr) === null || _vm$authcheckUsr18 === void 0 ? void 0 : _vm$authcheckUsr18.what_tobe_produced) == "PV_CONTRE_ANALYSE_GROUPE",
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
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(50), _vm._v(" "), _c("currency-input", {
    attrs: {
      required: "",
      type: "text",
      id: "",
      value: _vm.montant_echeance_credit_caf,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(51), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "text",
      id: "montant_echeance_credit_propose",
      value: _vm.montant_echeance_credit_propose_analyste_filiale,
      disabled: ""
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pl-4"
  }, [_vm._m(52), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control input-box",
    attrs: {
      required: "",
      type: "text",
      disabled: ((_vm$authcheckUsr19 = _vm.authcheckUsr) === null || _vm$authcheckUsr19 === void 0 ? void 0 : _vm$authcheckUsr19.what_tobe_produced) == "PV_CONTRE_ANALYSE_GROUPE",
      id: "montant_echeance_credit_propose",
      value: _vm.formDataToBeWatched.montant_echeance_credit_propose
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(53), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.justification_capacite_montant_echeance_analyste_filiale,
      expression: "justification_capacite_montant_echeance_analyste_filiale",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      cols: "30",
      rows: "2",
      disabled: ""
    },
    domProps: {
      value: _vm.justification_capacite_montant_echeance_analyste_filiale
    },
    on: {
      change: [function ($event) {
        _vm.justification_capacite_montant_echeance_analyste_filiale = $event.target.value;
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(54), _vm._v(" "), _c("textarea", {
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
      disabled: ((_vm$authcheckUsr20 = _vm.authcheckUsr) === null || _vm$authcheckUsr20 === void 0 ? void 0 : _vm$authcheckUsr20.what_tobe_produced) == "PV_CONTRE_ANALYSE_GROUPE",
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
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(55), _vm._v(" "), _c("currency-input", {
    attrs: {
      required: "",
      type: "text",
      id: "",
      value: _vm.tresorerie,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(56), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "text",
      id: "tresorerie_propose",
      value: _vm.tresorerie_propose_analyste_filiale,
      disabled: ""
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pl-4"
  }, [_vm._m(57), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control input-box",
    attrs: {
      required: "",
      disabled: ((_vm$authcheckUsr21 = _vm.authcheckUsr) === null || _vm$authcheckUsr21 === void 0 ? void 0 : _vm$authcheckUsr21.what_tobe_produced) == "PV_CONTRE_ANALYSE_GROUPE",
      type: "text",
      id: "tresorerie_propose",
      value: _vm.formDataToBeWatched.tresorerie_propose
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(58), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.justification_capacite_tresorerie_analyste_filiale,
      expression: "justification_capacite_tresorerie_analyste_filiale",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      cols: "30",
      rows: "2",
      disabled: ""
    },
    domProps: {
      value: _vm.justification_capacite_tresorerie_analyste_filiale
    },
    on: {
      change: [function ($event) {
        _vm.justification_capacite_tresorerie_analyste_filiale = $event.target.value;
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(59), _vm._v(" "), _c("textarea", {
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
      disabled: ((_vm$authcheckUsr22 = _vm.authcheckUsr) === null || _vm$authcheckUsr22 === void 0 ? void 0 : _vm$authcheckUsr22.what_tobe_produced) == "PV_CONTRE_ANALYSE_GROUPE",
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
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(60), _vm._v(" "), _c("currency-input", {
    attrs: {
      required: "",
      type: "text",
      "float": "",
      id: "",
      value: _vm.taux_endettement,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(61), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "text",
      id: "taux_endettement_propose",
      value: _vm.taux_endettement_propose_analyste_filiale,
      disabled: ""
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pl-4"
  }, [_vm._m(62), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control input-box",
    attrs: {
      required: "",
      disabled: ((_vm$authcheckUsr23 = _vm.authcheckUsr) === null || _vm$authcheckUsr23 === void 0 ? void 0 : _vm$authcheckUsr23.what_tobe_produced) == "PV_CONTRE_ANALYSE_GROUPE",
      type: "text",
      id: "taux_endettement_propose",
      value: _vm.formDataToBeWatched.taux_endettement_propose
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(63), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.justification_taux_analyste_filiale,
      expression: "justification_taux_analyste_filiale",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      cols: "30",
      rows: "2",
      disabled: ""
    },
    domProps: {
      value: _vm.justification_taux_analyste_filiale
    },
    on: {
      change: [function ($event) {
        _vm.justification_taux_analyste_filiale = $event.target.value;
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(64), _vm._v(" "), _c("textarea", {
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
      disabled: ((_vm$authcheckUsr24 = _vm.authcheckUsr) === null || _vm$authcheckUsr24 === void 0 ? void 0 : _vm$authcheckUsr24.what_tobe_produced) == "PV_CONTRE_ANALYSE_GROUPE",
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
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("label", {
    staticClass: "fw-bold"
  }, [_vm._v("Forces (CAF)")]), _vm._v(" "), _c("div", {
    domProps: {
      innerHTML: _vm._s((_vm$dossier_credit = _vm.dossier_credit) === null || _vm$dossier_credit === void 0 || (_vm$dossier_credit = _vm$dossier_credit.cred_pub_tb_20) === null || _vm$dossier_credit === void 0 ? void 0 : _vm$dossier_credit.forces)
    }
  })]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("label", {
    staticClass: "fw-bold"
  }, [_vm._v("Forces (ARC)")]), _vm._v(" "), _c("div", {
    domProps: {
      innerHTML: _vm._s((_vm$dossier_credit2 = _vm.dossier_credit) === null || _vm$dossier_credit2 === void 0 || (_vm$dossier_credit2 = _vm$dossier_credit2.cred_pub_tb_48) === null || _vm$dossier_credit2 === void 0 ? void 0 : _vm$dossier_credit2.forces)
    }
  })]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("label", {
    staticClass: "fw-bold"
  }, [_vm._v("Forces (ARCG)")]), _vm._v(" "), _c("vue-editor", {
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
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("label", {
    staticClass: "fw-bold"
  }, [_vm._v("Faiblesses (CAF)")]), _vm._v(" "), _c("div", {
    domProps: {
      innerHTML: _vm._s((_vm$dossier_credit3 = _vm.dossier_credit) === null || _vm$dossier_credit3 === void 0 || (_vm$dossier_credit3 = _vm$dossier_credit3.cred_pub_tb_20) === null || _vm$dossier_credit3 === void 0 ? void 0 : _vm$dossier_credit3.faiblesses)
    }
  })]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("label", {
    staticClass: "fw-bold"
  }, [_vm._v("Faiblesses (ARC)")]), _vm._v(" "), _c("div", {
    domProps: {
      innerHTML: _vm._s((_vm$dossier_credit4 = _vm.dossier_credit) === null || _vm$dossier_credit4 === void 0 || (_vm$dossier_credit4 = _vm$dossier_credit4.cred_pub_tb_48) === null || _vm$dossier_credit4 === void 0 ? void 0 : _vm$dossier_credit4.faiblesses)
    }
  })]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("label", {
    staticClass: "fw-bold"
  }, [_vm._v("Faiblesses (ARCG)")]), _vm._v(" "), _c("vue-editor", {
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
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("label", {
    staticClass: "fw-bold"
  }, [_vm._v("Opportunités (CAF)")]), _vm._v(" "), _c("div", {
    domProps: {
      innerHTML: _vm._s((_vm$dossier_credit5 = _vm.dossier_credit) === null || _vm$dossier_credit5 === void 0 || (_vm$dossier_credit5 = _vm$dossier_credit5.cred_pub_tb_20) === null || _vm$dossier_credit5 === void 0 ? void 0 : _vm$dossier_credit5.opportunites)
    }
  })]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("label", {
    staticClass: "fw-bold"
  }, [_vm._v("Opportunités (ARC)")]), _vm._v(" "), _c("div", {
    domProps: {
      innerHTML: _vm._s((_vm$dossier_credit6 = _vm.dossier_credit) === null || _vm$dossier_credit6 === void 0 || (_vm$dossier_credit6 = _vm$dossier_credit6.cred_pub_tb_48) === null || _vm$dossier_credit6 === void 0 ? void 0 : _vm$dossier_credit6.opportunites)
    }
  })]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("label", {
    staticClass: "fw-bold"
  }, [_vm._v("Opportunités (ARCG)")]), _vm._v(" "), _c("vue-editor", {
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
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("label", {
    staticClass: "fw-bold"
  }, [_vm._v("Menaces (CAF)")]), _vm._v(" "), _c("div", {
    domProps: {
      innerHTML: _vm._s((_vm$dossier_credit7 = _vm.dossier_credit) === null || _vm$dossier_credit7 === void 0 || (_vm$dossier_credit7 = _vm$dossier_credit7.cred_pub_tb_20) === null || _vm$dossier_credit7 === void 0 ? void 0 : _vm$dossier_credit7.menaces)
    }
  })]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("label", {
    staticClass: "fw-bold"
  }, [_vm._v("Menaces (ARC)")]), _vm._v(" "), _c("div", {
    domProps: {
      innerHTML: _vm._s((_vm$dossier_credit8 = _vm.dossier_credit) === null || _vm$dossier_credit8 === void 0 || (_vm$dossier_credit8 = _vm$dossier_credit8.cred_pub_tb_48) === null || _vm$dossier_credit8 === void 0 ? void 0 : _vm$dossier_credit8.menaces)
    }
  })]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("label", {
    staticClass: "fw-bold"
  }, [_vm._v("Menaces (ARCG)")]), _vm._v(" "), _c("vue-editor", {
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
      id: "analyse-du-client-et-de-son-activite"
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
    staticClass: "col-6"
  }, [_c("label", [_vm._v("Appréciation organisation client (CAF)")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.appreciation_organisation_caf,
      expression: "appreciation_organisation_caf",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      disabled: ""
    },
    domProps: {
      value: _vm.appreciation_organisation_caf
    },
    on: {
      change: function change($event) {
        _vm.appreciation_organisation_caf = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("label", [_vm._v("Appréciation organisation client (ARC)")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.appreciation_organisation_arc,
      expression: "appreciation_organisation_arc",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      disabled: ""
    },
    domProps: {
      value: _vm.appreciation_organisation_arc
    },
    on: {
      change: function change($event) {
        _vm.appreciation_organisation_arc = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("label", [_vm._v("Appréciation organisation client (SRC)")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.appreciation_organisation_src,
      expression: "appreciation_organisation_src",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      disabled: ""
    },
    domProps: {
      value: _vm.appreciation_organisation_src
    },
    on: {
      change: function change($event) {
        _vm.appreciation_organisation_src = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("label", [_vm._v("Appréciation organisation client (ARCG) ")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.appreciation_organisation,
      expression: "formDataToBeWatched.appreciation_organisation"
    }],
    staticClass: "form-select single-select input-box",
    attrs: {
      id: "appreciation_organisation"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formDataToBeWatched, "appreciation_organisation", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
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
    staticClass: "col-6"
  }, [_c("label", [_vm._v("Appréciation autres risque (CAF)")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.appreciation_autre_risque_caf,
      expression: "appreciation_autre_risque_caf",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      disabled: ""
    },
    domProps: {
      value: _vm.appreciation_autre_risque_caf
    },
    on: {
      change: function change($event) {
        _vm.appreciation_autre_risque_caf = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("label", [_vm._v("Appréciation autres risque (ARC)")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.appreciation_autre_risque_arc,
      expression: "appreciation_autre_risque_arc",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      disabled: ""
    },
    domProps: {
      value: _vm.appreciation_autre_risque_arc
    },
    on: {
      change: function change($event) {
        _vm.appreciation_autre_risque_arc = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("label", [_vm._v("Appréciation autres risque (SRC)")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.appreciation_autre_risque_src,
      expression: "appreciation_autre_risque_src",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      disabled: ""
    },
    domProps: {
      value: _vm.appreciation_autre_risque_src
    },
    on: {
      change: function change($event) {
        _vm.appreciation_autre_risque_src = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("label", [_vm._v("Appréciation autres risques (ARCG)")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.appreciation_autre_risque,
      expression: "formDataToBeWatched.appreciation_autre_risque"
    }],
    staticClass: "form-select input-box",
    attrs: {
      id: "appreciation_autre_risque"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formDataToBeWatched, "appreciation_autre_risque", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
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
    staticClass: "col-6"
  }, [_c("label", [_vm._v("Appréciation risque commerciale (CAF)")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.appreciation_risque_commerciale_caf,
      expression: "appreciation_risque_commerciale_caf",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      disabled: ""
    },
    domProps: {
      value: _vm.appreciation_risque_commerciale_caf
    },
    on: {
      change: function change($event) {
        _vm.appreciation_risque_commerciale_caf = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("label", [_vm._v("Appréciation risque commerciale (ARC)")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.appreciation_risque_commerciale_arc,
      expression: "appreciation_risque_commerciale_arc",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      disabled: ""
    },
    domProps: {
      value: _vm.appreciation_risque_commerciale_arc
    },
    on: {
      change: function change($event) {
        _vm.appreciation_risque_commerciale_arc = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("label", [_vm._v("Appréciation risque commerciale (SRC)")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.appreciation_risque_commerciale_src,
      expression: "appreciation_risque_commerciale_src",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      disabled: ""
    },
    domProps: {
      value: _vm.appreciation_risque_commerciale_src
    },
    on: {
      change: function change($event) {
        _vm.appreciation_risque_commerciale_src = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("label", [_vm._v("Appréciation risque commerciale (ARCG)")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.appreciation_risque_commerciale,
      expression: "formDataToBeWatched.appreciation_risque_commerciale"
    }],
    staticClass: "form-select input-box",
    attrs: {
      id: "appreciation_risque_commerciale"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formDataToBeWatched, "appreciation_risque_commerciale", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
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
  }, [_vm._v("Faible risque")])])])])]) : _c("div", [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen6 = !_vm.seen6;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "analyse-du-client-et-de-son-activite"
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
      id: "ca3-head"
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
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Chiffre d'affaires / mois\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Chiffre d'affaire proposé par l'ARC\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Chiffre d'affaire proposé par l'ARCG\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Justification de l'ARC\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Justification de l'ARCG\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Cout d'achat proposé par le CAF\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Cout d'achat proposé par l'ARC\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Cout d'achat proposé par l'ARCG\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Justification de l'ARC\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Justification de l'ARCG\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Marge commerciale proposée par le CAF\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Marge commerciale proposée par l'ARC\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Marge commerciale proposée par l'ARCG\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Justification de l'ARC\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Justification de l'ARCG\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Charges d'exploitation et financière proposées par le CAF\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Charges d'exploitation et financières proposées par l'ARC\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Charges d'exploitation et financières proposées par l'ARCG\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Justification de l'ARC\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Justification de l'ARCG\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Résultat net proposé par le CAF\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Résultat net proposé par l'ARC\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Résultat net proposé par l'ARCG\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Justification de l'ARC\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Justification de l'ARCG\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Autres revenus proposés par le CAF\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Autres revenus proposés par l'ARC\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Autres revenus proposés par l'ARCG\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Justification de l'ARC\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Justification de l'ARCG\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Autres charges proposées par le CAF\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Autres charges proposées par l'ARC\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Autres charges proposées par l'ARCG\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Justification de l'ARC\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Justification de l'ARCG\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Charges familiales proposées par le CAF\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Charges familiales proposées par l'ARC\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Charges familiales proposées par l'ARCG\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Justification de l'ARC\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Justification de l'ARCG\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Capacité d'autofinancement proposée par le CAF\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Capacité d'autofinancement proposée par l'ARC\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Capacité d'autofinancement proposée par l'ARCG\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Justification de l'ARC\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Justification de l'ARCG\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Montant crédit proposé par le CAF\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Montant crédit proposé par l'ARC\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Montant crédit proposé par l'ARCG\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Justification de l'ARC\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Justification de l'ARCG\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Montant échéance crédit proposé par le CAF\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Montant échéance crédit proposé par l'ARC\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Montant échéance crédit proposé par l'ARCG\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Justification de l'ARC\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Justification de l'ARCG\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Trésorerie proposé par le CAF\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Trésorerie proposée par l'ARC\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Trésorerie proposée par l'ARCG\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Justification de l'ARC\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Justification de l'ARCG\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Taux d'endettement proposé par le CAF\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Taux d'endettement proposé par l'ARC\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Taux d'endettement proposé par l'ARCG\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Justification de l'ARCG\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Justification de l'ARCG\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/groupe/CA3.vue?vue&type=style&index=0&id=2728be7d&lang=css&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/groupe/CA3.vue?vue&type=style&index=0&id=2728be7d&lang=css&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\ninput[data-v-2728be7d] {\r\n    /*border: 1px solid red;*/\n}\n*[data-v-2728be7d] {\r\n    font-family: \"Google sans\";\n}\nlabel[data-v-2728be7d] {\r\n    height: 10px;\r\n    font-size: 13px;\n}\ninput[data-v-2728be7d],\r\nselect[data-v-2728be7d] {\r\n    height: 35px;\r\n    border-color: #34495e;\r\n    color: #57606f;\r\n    font-size: 13px;\r\n    font-weight: bold;\n}\n.card-width-height[data-v-2728be7d] {\r\n    width: 100%;\r\n    height: 100%;\n}\ntextarea[data-v-2728be7d]{\r\n\r\n    margin-bottom: 8px;\n}\n.head[data-v-2728be7d] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\n.hdc[data-v-2728be7d] {\r\n    background-color: #57606f;\n}\ninput.input-box[data-v-2728be7d] {\r\n    background: #00ffff21;\r\n    color: #000;\n}\nselect.input-box[data-v-2728be7d] {\r\n    background: #00ffff21;\r\n    color: #000;\n}\n.badge-sm[data-v-2728be7d] {\r\n    display: inline-block;\r\n    width: 15px;\r\n    height: 15px;\r\n    background: rgba(255, 0, 0, 0.882);\r\n    color: white;\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    border-radius: 100%;\r\n    position: absolute;\r\n    top: -20%;\r\n    left: 55%;\r\n    text-align: center;\n}\n.relook-header[data-v-2728be7d] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/groupe/CA3.vue?vue&type=style&index=0&id=2728be7d&lang=css&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/groupe/CA3.vue?vue&type=style&index=0&id=2728be7d&lang=css&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA3_vue_vue_type_style_index_0_id_2728be7d_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CA3.vue?vue&type=style&index=0&id=2728be7d&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/groupe/CA3.vue?vue&type=style&index=0&id=2728be7d&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA3_vue_vue_type_style_index_0_id_2728be7d_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA3_vue_vue_type_style_index_0_id_2728be7d_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/contreanalyse/cofina/groupe/CA3.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/contreanalyse/cofina/groupe/CA3.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CA3_vue_vue_type_template_id_2728be7d_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CA3.vue?vue&type=template&id=2728be7d&scoped=true */ "./resources/js/components/contreanalyse/cofina/groupe/CA3.vue?vue&type=template&id=2728be7d&scoped=true");
/* harmony import */ var _CA3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CA3.vue?vue&type=script&lang=js */ "./resources/js/components/contreanalyse/cofina/groupe/CA3.vue?vue&type=script&lang=js");
/* harmony import */ var _CA3_vue_vue_type_style_index_0_id_2728be7d_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CA3.vue?vue&type=style&index=0&id=2728be7d&lang=css&scoped=true */ "./resources/js/components/contreanalyse/cofina/groupe/CA3.vue?vue&type=style&index=0&id=2728be7d&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CA3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CA3_vue_vue_type_template_id_2728be7d_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _CA3_vue_vue_type_template_id_2728be7d_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2728be7d",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/contreanalyse/cofina/groupe/CA3.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/contreanalyse/cofina/groupe/CA3.vue?vue&type=script&lang=js":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/cofina/groupe/CA3.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CA3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CA3.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/groupe/CA3.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CA3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/contreanalyse/cofina/groupe/CA3.vue?vue&type=style&index=0&id=2728be7d&lang=css&scoped=true":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/cofina/groupe/CA3.vue?vue&type=style&index=0&id=2728be7d&lang=css&scoped=true ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA3_vue_vue_type_style_index_0_id_2728be7d_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CA3.vue?vue&type=style&index=0&id=2728be7d&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/groupe/CA3.vue?vue&type=style&index=0&id=2728be7d&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/contreanalyse/cofina/groupe/CA3.vue?vue&type=template&id=2728be7d&scoped=true":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/cofina/groupe/CA3.vue?vue&type=template&id=2728be7d&scoped=true ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA3_vue_vue_type_template_id_2728be7d_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA3_vue_vue_type_template_id_2728be7d_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA3_vue_vue_type_template_id_2728be7d_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CA3.vue?vue&type=template&id=2728be7d&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/groupe/CA3.vue?vue&type=template&id=2728be7d&scoped=true");


/***/ })

}]);