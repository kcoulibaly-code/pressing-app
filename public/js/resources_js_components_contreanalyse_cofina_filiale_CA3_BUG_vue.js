"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_contreanalyse_cofina_filiale_CA3_BUG_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/filiale/CA3_BUG.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/filiale/CA3_BUG.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/ContextMenu */ "./resources/js/components/shared/ContextMenu.vue");
/* harmony import */ var _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/ContextMenuItem */ "./resources/js/components/shared/ContextMenuItem.vue");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/auth.service */ "./resources/js/services/auth.service.js");
var _methods;
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
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_4__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_4__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_4__.ChevronDownIcon,
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_4__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_4__.TrashIcon,
    AirplayIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_4__.AirplayIcon,
    BookOpenIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_4__.BookOpenIcon,
    ContextMenu: _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__["default"],
    ContextMenuItem: _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__["default"]
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
  created: function created() {
    var _this = this,
      _this$meta_data$dossi;
    this.loadLatestAmount();
    EventBus.$on('modifier-montant', function (montant) {
      // alert(montant)
      _this.formDataToBeWatched.montant_credit_propose = montant;
      _this.formDataToBeWatched = Object.assign({}, _this.formDataToBeWatched, _this.formDataToBeWatched);
      // alert(this.formDataToBeWatched.montant_credit_propose)
    });
    var applied_templ_name = (_this$meta_data$dossi = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi.applied_templ_name;
    var tbArrays = this.determineCredPubTables(applied_templ_name);
    this.credpub0 = tbArrays[0];
    this.credpub1 = tbArrays[1];
  },
  mounted: function mounted() {
    this.loadKey();
    this.loadRetrieved();
    this.loadTbAttrs(); // charge les attributs + sous attributs des tables
    this.tableClosedOrOpened();
    // EventBus.$on('modifier-montant', (data) => {
    //     this.formDataToBeWatched.montant_credit_propose = data.montant_credit_propo_analyste
    // })
    //  this.loadFromTb13()
  },
  data: function data() {
    var _ref;
    var vm = this;
    return _ref = {
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
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_2__["default"].host,
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
      seen5: true
    }, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_ref, "seen5", true), "seen6", true), "label_keys", []), "listingNote", false), "dossier_credit", null), "meta_parseable", {
      cred_pub_key: this.meta_data["cred_pub_key"],
      tb_name: this.tb_name
    }), "formDataToBeWatched", {
      analyse_financiere: "",
      derniere_decision: "",
      forces: "",
      forces_caf: "",
      faiblesses: "",
      faiblesses_caf: "",
      opportunites: "",
      opportunites_caf: "",
      menaces: "",
      menaces_caf: "",
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
      appreciation_organisation_arc: "",
      appreciation_autre_risque_arc: "",
      appreciation_risque_commerciale_arc: "",
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
    }), "chiffre_affaire", null), "cout_achat", null), "marge_commerciale", null), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_ref, "charge_exploitation", null), "resultat_net", null), "autre_revenu", null), "autre_charge", null), "charge_familiale", null), "capacite_autofinancement", null), "montant_credit_caf", null), "montant_echeance_credit_caf", null), "tresorerie", null), "taux_endettement", null), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_ref, "forces_caf", null), "appreciation_organisation_caf", null), "appreciation_autre_risque_caf", null), "appreciation_risque_commerciale_caf", null), "tresorerie_espece", null), "creance_acompte", null), "stock_caf", null), "immobilisation", null), "passif_ope", null), "passifs_fin", null), _defineProperty(_defineProperty(_ref, "credpub0", null), "credpub1", null);
  },
  methods: (_methods = {
    // loadFromTb13(){
    //     console.log("metadata", this.meta_data.dossier_credit?.cred_pub_tb_13.benefices_pertes)
    // },
    formDataVars: function formDataVars(event) {
      this.formDataToBeWatched[event[0]] = event[1];
      this.handleInput();
    },
    loadKey: function loadKey() {
      var _this2 = this;
      var labels = ['VENTES TOTALES', 'COÛT TOTAL DES MARCHANDISES VENDUES', 'COÛTS OPÉRATIONNELS TOTAUX', 'RÉSULTAT NET PRINCIPALES OPÉRATIONS', 'Autres revenus', 'Charges familiales', "D'autres coûts"];
      labels.forEach(function (element, index) {
        _this2.label_keys.push(_this2.findIndexByObj(element));
      });
    },
    findIndexByObj: function findIndexByObj(label) {
      var _this$meta_data, _this$meta_data2, _tb_;
      var tab = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "benefices_pertes";
      var tb_13 = (_this$meta_data = this.meta_data) === null || _this$meta_data === void 0 || (_this$meta_data = _this$meta_data.dossier_credit) === null || _this$meta_data === void 0 ? void 0 : _this$meta_data.cred_pub_tb_13;
      if (['Retail BF (Burkina Faso)'].includes((_this$meta_data2 = this.meta_data) === null || _this$meta_data2 === void 0 || (_this$meta_data2 = _this$meta_data2.dossier_credit) === null || _this$meta_data2 === void 0 ? void 0 : _this$meta_data2.applied_templ_name)) {
        var _this$meta_data3;
        tb_13 = (_this$meta_data3 = this.meta_data) === null || _this$meta_data3 === void 0 || (_this$meta_data3 = _this$meta_data3.dossier_credit) === null || _this$meta_data3 === void 0 ? void 0 : _this$meta_data3.cred_pub_tb_16107;
      }
      if (!['', null, undefined].includes((_tb_ = tb_13) === null || _tb_ === void 0 ? void 0 : _tb_[tab])) {
        var _tb_2;
        return (_tb_2 = tb_13) === null || _tb_2 === void 0 || (_tb_2 = _tb_2[tab]) === null || _tb_2 === void 0 ? void 0 : _tb_2.findIndex(function (el) {
          return el.position === label;
        });
      }
      return -1;
    },
    calculMargeCom: function calculMargeCom() {
      var _this$meta_data$dossi2, _this$meta_data4, _dossier, _dossier3;
      var dossier = (_this$meta_data$dossi2 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi2 === void 0 ? void 0 : _this$meta_data$dossi2.cred_pub_tb_13;
      var a = 0;
      var b = 0;
      if (['Retail BF (Burkina Faso)'].includes((_this$meta_data4 = this.meta_data) === null || _this$meta_data4 === void 0 || (_this$meta_data4 = _this$meta_data4.dossier_credit) === null || _this$meta_data4 === void 0 ? void 0 : _this$meta_data4.applied_templ_name)) {
        var _this$meta_data5;
        dossier = (_this$meta_data5 = this.meta_data) === null || _this$meta_data5 === void 0 || (_this$meta_data5 = _this$meta_data5.dossier_credit) === null || _this$meta_data5 === void 0 ? void 0 : _this$meta_data5.cred_pub_tb_16107;
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
    creditConcurrence: function creditConcurrence() {
      var _this$meta_data6, _this$meta_data7;
      var total = 0;
      var ht_cred = (_this$meta_data6 = this.meta_data) === null || _this$meta_data6 === void 0 || (_this$meta_data6 = _this$meta_data6.dossier_credit) === null || _this$meta_data6 === void 0 ? void 0 : _this$meta_data6.cred_pub_tb_17;
      if (['Retail BF (Burkina Faso)'].includes((_this$meta_data7 = this.meta_data) === null || _this$meta_data7 === void 0 || (_this$meta_data7 = _this$meta_data7.dossier_credit) === null || _this$meta_data7 === void 0 ? void 0 : _this$meta_data7.applied_templ_name)) {
        var _this$meta_data8;
        ht_cred = (_this$meta_data8 = this.meta_data) === null || _this$meta_data8 === void 0 || (_this$meta_data8 = _this$meta_data8.dossier_credit) === null || _this$meta_data8 === void 0 ? void 0 : _this$meta_data8.cred_pub_tb_16105;
      }
      if (ht_cred !== undefined) {
        var _ht_cred;
        if (((_ht_cred = ht_cred) === null || _ht_cred === void 0 ? void 0 : _ht_cred.historiques_des_credits) !== "") {
          var _ht_cred2;
          (_ht_cred2 = ht_cred) === null || _ht_cred2 === void 0 || _ht_cred2.historiques_des_credits.forEach(function (element) {
            if (element.statut === "Financé") {
              total += Number(String(element.encours).replace(/\s+/g, ""));
            }
          });
        }
      }
      return total;
    },
    loadLatestAmount: function loadLatestAmount() {
      var caract_inter_pret = this.meta_data['dossier_credit']["caract_inter_pret"];
      var role_sigle = caract_inter_pret[caract_inter_pret.length - 1]["role_sigle"];
      var targetKey = "montant_pret_" + role_sigle;
      // console.log("latest_amount", caract_inter_pret[caract_inter_pret.length -1][targetKey])
      return caract_inter_pret[caract_inter_pret.length - 1][targetKey];
    },
    capaciteAutoFinancement: function capaciteAutoFinancement() {
      var _this$meta_data9, _this$meta_data0, _dossier5, _dossier7, _dossier9, _dossier1;
      var dossier = (_this$meta_data9 = this.meta_data) === null || _this$meta_data9 === void 0 || (_this$meta_data9 = _this$meta_data9.dossier_credit) === null || _this$meta_data9 === void 0 ? void 0 : _this$meta_data9.cred_pub_tb_13;
      var a = 0;
      var b = 0;
      var c = 0;
      var d = 0;
      if (['Retail BF (Burkina Faso)'].includes((_this$meta_data0 = this.meta_data) === null || _this$meta_data0 === void 0 || (_this$meta_data0 = _this$meta_data0.dossier_credit) === null || _this$meta_data0 === void 0 ? void 0 : _this$meta_data0.applied_templ_name)) {
        var _this$meta_data1;
        dossier = (_this$meta_data1 = this.meta_data) === null || _this$meta_data1 === void 0 || (_this$meta_data1 = _this$meta_data1.dossier_credit) === null || _this$meta_data1 === void 0 ? void 0 : _this$meta_data1.cred_pub_tb_16107;
      }
      if (!['', null, undefined].includes((_dossier5 = dossier) === null || _dossier5 === void 0 || (_dossier5 = _dossier5.benefices_pertes[this.findIndexByObj("RÉSULTAT NET PRINCIPALES OPÉRATIONS")]) === null || _dossier5 === void 0 ? void 0 : _dossier5.montant_c)) {
        var _dossier6;
        a = (_dossier6 = dossier) === null || _dossier6 === void 0 || (_dossier6 = _dossier6.benefices_pertes[this.findIndexByObj("RÉSULTAT NET PRINCIPALES OPÉRATIONS")]) === null || _dossier6 === void 0 ? void 0 : _dossier6.montant_c;
        a = Number(String(a).replace(/\s+/g, ""));
      }
      if (!['', null, undefined].includes((_dossier7 = dossier) === null || _dossier7 === void 0 || (_dossier7 = _dossier7.benefices_pertes[this.findIndexByObj("Autres revenus")]) === null || _dossier7 === void 0 ? void 0 : _dossier7.montant_c)) {
        var _dossier8;
        b = (_dossier8 = dossier) === null || _dossier8 === void 0 || (_dossier8 = _dossier8.benefices_pertes[this.findIndexByObj("Autres revenus")]) === null || _dossier8 === void 0 ? void 0 : _dossier8.montant_c;
        b = Number(String(b).replace(/\s+/g, ""));
      }
      if (!['', null, undefined].includes((_dossier9 = dossier) === null || _dossier9 === void 0 || (_dossier9 = _dossier9.benefices_pertes[this.findIndexByObj("Charges familiales")]) === null || _dossier9 === void 0 ? void 0 : _dossier9.montant_c)) {
        var _dossier0;
        c = (_dossier0 = dossier) === null || _dossier0 === void 0 || (_dossier0 = _dossier0.benefices_pertes[this.findIndexByObj("Charges familiales")]) === null || _dossier0 === void 0 ? void 0 : _dossier0.montant_c;
        c = Number(String(c).replace(/\s+/g, ""));
      }
      if (!['', null, undefined].includes((_dossier1 = dossier) === null || _dossier1 === void 0 || (_dossier1 = _dossier1.benefices_pertes[this.findIndexByObj("D'autres coûts")]) === null || _dossier1 === void 0 ? void 0 : _dossier1.montant_c)) {
        var _dossier10;
        d = (_dossier10 = dossier) === null || _dossier10 === void 0 || (_dossier10 = _dossier10.benefices_pertes[this.findIndexByObj("D'autres coûts")]) === null || _dossier10 === void 0 ? void 0 : _dossier10.montant_c;
        d = Number(String(d).replace(/\s+/g, ""));
      }
      var rp = a + b;
      var rm = c + d;
      var res = rp - rm;
      return res;
    },
    tauxEndettement: function tauxEndettement() {
      var _meta_data, _meta_data2;
      // console.log()
      var c = 0;
      var a = this.capaciteAutoFinancement();
      var b = this.creditConcurrence();
      if (((_meta_data = meta_data) === null || _meta_data === void 0 || (_meta_data = _meta_data.dossier_credit) === null || _meta_data === void 0 || (_meta_data = _meta_data[this.determineCredPubTables((_meta_data2 = meta_data) === null || _meta_data2 === void 0 || (_meta_data2 = _meta_data2.dossier_credit) === null || _meta_data2 === void 0 ? void 0 : _meta_data2.applied_templ_name)[1]]) === null || _meta_data === void 0 ? void 0 : _meta_data.montant_demander) !== undefined) {
        var _meta_data3, _meta_data4;
        c = (_meta_data3 = meta_data) === null || _meta_data3 === void 0 || (_meta_data3 = _meta_data3.dossier_credit) === null || _meta_data3 === void 0 || (_meta_data3 = _meta_data3[this.determineCredPubTables((_meta_data4 = meta_data) === null || _meta_data4 === void 0 || (_meta_data4 = _meta_data4.dossier_credit) === null || _meta_data4 === void 0 ? void 0 : _meta_data4.applied_templ_name)[1]]) === null || _meta_data3 === void 0 ? void 0 : _meta_data3.montant_demander;
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
    // for bilan
    loadFindIndexByObjForBilan: function loadFindIndexByObjForBilan(label, tab) {
      if (!['', null, undefined].includes(tab)) {
        return tab === null || tab === void 0 ? void 0 : tab.findIndex(function (el) {
          return el.label === label;
        });
      }
      return -1;
    },
    // end bilan
    loadRetrieved: function loadRetrieved() {
      var _this$meta_data$dossi3, _this$meta_data$dossi4, _this$meta_data$dossi5, _this$meta_data$dossi6, _this$meta_data$dossi7, _this$meta_data$dossi8, _this$meta_data$dossi9, _this$meta_data$dossi0, _this$meta_data$dossi1, _this$meta_data$dossi10, _this$meta_data10;
      var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];
      this.formDataToBeWatched.forces_caf = (_this$meta_data$dossi3 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi3 === void 0 || (_this$meta_data$dossi3 = _this$meta_data$dossi3.cred_pub_tb_20) === null || _this$meta_data$dossi3 === void 0 ? void 0 : _this$meta_data$dossi3.forces;
      this.formDataToBeWatched.faiblesses_caf = (_this$meta_data$dossi4 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi4 === void 0 || (_this$meta_data$dossi4 = _this$meta_data$dossi4.cred_pub_tb_20) === null || _this$meta_data$dossi4 === void 0 ? void 0 : _this$meta_data$dossi4.faiblesses;
      this.formDataToBeWatched.opportunites_caf = (_this$meta_data$dossi5 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi5 === void 0 || (_this$meta_data$dossi5 = _this$meta_data$dossi5.cred_pub_tb_20) === null || _this$meta_data$dossi5 === void 0 ? void 0 : _this$meta_data$dossi5.opportinutes;
      this.formDataToBeWatched.menaces_caf = (_this$meta_data$dossi6 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi6 === void 0 || (_this$meta_data$dossi6 = _this$meta_data$dossi6.cred_pub_tb_20) === null || _this$meta_data$dossi6 === void 0 ? void 0 : _this$meta_data$dossi6.menaces;
      this.formDataToBeWatched.appreciation_organisation_arc = (_this$meta_data$dossi7 = this.meta_data['dossier_credit']["cred_pub_tb_16"]) === null || _this$meta_data$dossi7 === void 0 ? void 0 : _this$meta_data$dossi7.appreciation_organisation;
      this.formDataToBeWatched.appreciation_autre_risque_arc = (_this$meta_data$dossi8 = this.meta_data['dossier_credit']["cred_pub_tb_16"]) === null || _this$meta_data$dossi8 === void 0 ? void 0 : _this$meta_data$dossi8.appreciation_evaluation;
      this.formDataToBeWatched.appreciation_risque_commerciale_arc = (_this$meta_data$dossi9 = this.meta_data['dossier_credit']["cred_pub_tb_16"]) === null || _this$meta_data$dossi9 === void 0 ? void 0 : _this$meta_data$dossi9.appreciation;
      var cred_tb_13 = "cred_pub_tb_13";
      var cred_tb_12 = "cred_pub_tb_12";
      var remote = (_this$meta_data$dossi0 = this.meta_data['dossier_credit'][cred_tb_13]) === null || _this$meta_data$dossi0 === void 0 ? void 0 : _this$meta_data$dossi0.benefices_pertes;
      var remote_bilan_actifs = (_this$meta_data$dossi1 = this.meta_data['dossier_credit']["cred_pub_tb_12"]) === null || _this$meta_data$dossi1 === void 0 ? void 0 : _this$meta_data$dossi1.actifs;
      var remote_bilan_passifs = (_this$meta_data$dossi10 = this.meta_data['dossier_credit']["cred_pub_tb_12"]) === null || _this$meta_data$dossi10 === void 0 ? void 0 : _this$meta_data$dossi10.passifs;
      if (['Retail BF (Burkina Faso)'].includes((_this$meta_data10 = this.meta_data) === null || _this$meta_data10 === void 0 || (_this$meta_data10 = _this$meta_data10.dossier_credit) === null || _this$meta_data10 === void 0 ? void 0 : _this$meta_data10.applied_templ_name)) {
        var _this$meta_data$dossi11, _this$meta_data$dossi12, _this$meta_data$dossi13;
        // ['BFR (Fonds de Roulement)', 'Investissement', 'Vide'].includes(dossier_credit?.applied_templ_name)
        cred_tb_13 = "cred_pub_tb_16107";
        cred_tb_12 = "cred_pub_tb_16106";
        remote = (_this$meta_data$dossi11 = this.meta_data['dossier_credit']["cred_pub_tb_16107"]) === null || _this$meta_data$dossi11 === void 0 ? void 0 : _this$meta_data$dossi11.benefices_pertes;
        remote_bilan_actifs = (_this$meta_data$dossi12 = this.meta_data['dossier_credit']["cred_pub_tb_16106"]) === null || _this$meta_data$dossi12 === void 0 ? void 0 : _this$meta_data$dossi12.actifs;
        remote_bilan_passifs = (_this$meta_data$dossi13 = this.meta_data['dossier_credit']["cred_pub_tb_16106"]) === null || _this$meta_data$dossi13 === void 0 ? void 0 : _this$meta_data$dossi13.passifs;
      }
      if (this.meta_data['dossier_credit'][createdKey] === undefined) {
        if (this.meta_data['dossier_credit'][cred_tb_13] != undefined || this.meta_data['dossier_credit']["cred_pub_tb_16"] != undefined) {
          var _this$meta_data$dossi14, _this$meta_data$dossi15, _this$meta_data$dossi16, _this$meta_data$dossi17, _this$meta_data$dossi18, _this$meta_data$dossi19, _this$meta_data$dossi20, _this$meta_data$dossi21, _this$meta_data$dossi23, _this$meta_data$dossi24, _this$meta_data$dossi25, _this$meta_data$dossi26, _this$meta_data$dossi27, _this$meta_data$dossi28;
          this.formDataToBeWatched.chiffre_affaire_propo_analyste = (_this$meta_data$dossi14 = this.meta_data['dossier_credit'][cred_tb_13].benefices_pertes[this.loadFindIndexByObj("VENTES TOTALES", remote)]) === null || _this$meta_data$dossi14 === void 0 ? void 0 : _this$meta_data$dossi14.montant_c;
          this.formDataToBeWatched.cout_achat_propose = (_this$meta_data$dossi15 = this.meta_data['dossier_credit'][cred_tb_13].benefices_pertes[this.loadFindIndexByObj("COÛT TOTAL DES MARCHANDISES VENDUES", remote)]) === null || _this$meta_data$dossi15 === void 0 ? void 0 : _this$meta_data$dossi15.montant_c;
          this.formDataToBeWatched.marge_commerciale_propose = this.calculMargeCom();
          this.formDataToBeWatched.charge_exploitation_propose = (_this$meta_data$dossi16 = this.meta_data['dossier_credit'][cred_tb_13].benefices_pertes[this.loadFindIndexByObj("COÛTS OPÉRATIONNELS TOTAUX", remote)]) === null || _this$meta_data$dossi16 === void 0 ? void 0 : _this$meta_data$dossi16.montant_c;
          this.formDataToBeWatched.resultat_net_propose = (_this$meta_data$dossi17 = this.meta_data['dossier_credit'][cred_tb_13].benefices_pertes[this.loadFindIndexByObj("RÉSULTAT NET PRINCIPALES OPÉRATIONS", remote)]) === null || _this$meta_data$dossi17 === void 0 ? void 0 : _this$meta_data$dossi17.montant_c;
          this.formDataToBeWatched.autre_revenu_propose = (_this$meta_data$dossi18 = this.meta_data['dossier_credit'][cred_tb_13].benefices_pertes[this.loadFindIndexByObj("Autres revenus", remote)]) === null || _this$meta_data$dossi18 === void 0 ? void 0 : _this$meta_data$dossi18.montant_c;
          this.formDataToBeWatched.autre_charge_propose = (_this$meta_data$dossi19 = this.meta_data['dossier_credit'][cred_tb_13].benefices_pertes[this.loadFindIndexByObj("D'autres coûts", remote)]) === null || _this$meta_data$dossi19 === void 0 ? void 0 : _this$meta_data$dossi19.montant_c;
          this.formDataToBeWatched.charge_familiale_propose = (_this$meta_data$dossi20 = this.meta_data['dossier_credit'][cred_tb_13].benefices_pertes[this.loadFindIndexByObj("Charges familiales", remote)]) === null || _this$meta_data$dossi20 === void 0 ? void 0 : _this$meta_data$dossi20.montant_c;
          this.formDataToBeWatched.capacite_autofinancement_propose = this.capaciteAutoFinancement();
          this.formDataToBeWatched.montant_credit_propose = this.loadLatestAmount();
          this.formDataToBeWatched.montant_echeance_credit_propose = this.meta_data['dossier_credit'][this.credpub1].echeance.echeance;
          this.formDataToBeWatched.tresorerie_propose = (_this$meta_data$dossi21 = this.meta_data['dossier_credit'][cred_tb_12]) === null || _this$meta_data$dossi21 === void 0 || (_this$meta_data$dossi21 = _this$meta_data$dossi21.actifs[0]) === null || _this$meta_data$dossi21 === void 0 ? void 0 : _this$meta_data$dossi21.montant_c;
          if (this.convertNumber(this.capaciteAutoFinancement()) != 0) {
            var _this$meta_data$dossi22;
            this.formDataToBeWatched.taux_endettement_propose = (this.convertNumber((_this$meta_data$dossi22 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi22 === void 0 || (_this$meta_data$dossi22 = _this$meta_data$dossi22[this.credpub1]) === null || _this$meta_data$dossi22 === void 0 ? void 0 : _this$meta_data$dossi22.echeance.echeance) + this.convertNumber(this.creditConcurrence())) / this.convertNumber(this.capaciteAutoFinancement()) * 100;
          }

          // this.formDataToBeWatched.taux_endettement_propose = this.convertNumber(this.meta_data['dossier_credit']["cred_pub_tb_1"].echeance.echeance) / this.convertNumber(this.capaciteAutoFinancement())

          // for bilan 

          this.formDataToBeWatched.tresorerie_espece_propo_analyste = (_this$meta_data$dossi23 = this.meta_data['dossier_credit'][cred_tb_12]) === null || _this$meta_data$dossi23 === void 0 || (_this$meta_data$dossi23 = _this$meta_data$dossi23.actifs[this.loadFindIndexByObjForBilan("Trésorerie", remote_bilan_actifs)]) === null || _this$meta_data$dossi23 === void 0 ? void 0 : _this$meta_data$dossi23.montant_c;
          this.formDataToBeWatched.creance_acompte_propose = (_this$meta_data$dossi24 = this.meta_data['dossier_credit'][cred_tb_12]) === null || _this$meta_data$dossi24 === void 0 || (_this$meta_data$dossi24 = _this$meta_data$dossi24.actifs[this.loadFindIndexByObjForBilan("Créances", remote_bilan_actifs)]) === null || _this$meta_data$dossi24 === void 0 ? void 0 : _this$meta_data$dossi24.montant_c;
          this.formDataToBeWatched.stock_propose = (_this$meta_data$dossi25 = this.meta_data['dossier_credit'][cred_tb_12]) === null || _this$meta_data$dossi25 === void 0 || (_this$meta_data$dossi25 = _this$meta_data$dossi25.actifs[this.loadFindIndexByObjForBilan("Stock", remote_bilan_actifs)]) === null || _this$meta_data$dossi25 === void 0 ? void 0 : _this$meta_data$dossi25.montant_c;
          this.formDataToBeWatched.immobilisation_propose = (_this$meta_data$dossi26 = this.meta_data['dossier_credit'][cred_tb_12]) === null || _this$meta_data$dossi26 === void 0 || (_this$meta_data$dossi26 = _this$meta_data$dossi26.actifs[this.loadFindIndexByObjForBilan("IMMOBILISATIONS TOTALES", remote_bilan_actifs)]) === null || _this$meta_data$dossi26 === void 0 ? void 0 : _this$meta_data$dossi26.montant_c;
          this.formDataToBeWatched.passif_ope_propose = (_this$meta_data$dossi27 = this.meta_data['dossier_credit'][cred_tb_12]) === null || _this$meta_data$dossi27 === void 0 || (_this$meta_data$dossi27 = _this$meta_data$dossi27.passifs[this.loadFindIndexByObjForBilan("Dettes opérationnelles à court terme", remote_bilan_passifs)]) === null || _this$meta_data$dossi27 === void 0 ? void 0 : _this$meta_data$dossi27.montant_c;
          this.formDataToBeWatched.passifs_fin_propose = (_this$meta_data$dossi28 = this.meta_data['dossier_credit'][cred_tb_12]) === null || _this$meta_data$dossi28 === void 0 || (_this$meta_data$dossi28 = _this$meta_data$dossi28.passifs[this.loadFindIndexByObjForBilan("Dettes financières à court terme", remote_bilan_passifs)]) === null || _this$meta_data$dossi28 === void 0 ? void 0 : _this$meta_data$dossi28.montant_c;
          // end bilan 
        }
      }
      if (lentb.length > 0) {
        var _this$meta_data$dossi29;
        if (this.meta_data["dossier_credit"][createdKey] != undefined) {
          this.formDataToBeWatched = this.meta_data["dossier_credit"][createdKey];

          // this.formDataToBeWatched.taux_endettement_propose = (this.convertNumber(this.montant_echeance_credit_caf) + this.convertNumber(this.creditConcurrence())) / this.convertNumber(this.capacite_autofinancement)
          //  console.log('test1991', this.meta_data.dossier_credit?.cred_pub_tb_1?.echeance.echeance, this.creditConcurrence(), this.capaciteAutoFinancement())
        }

        // Close table by default
        this.defaultRetract(false, (_this$meta_data$dossi29 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi29 === void 0 ? void 0 : _this$meta_data$dossi29.applied_templ_id);
      }
      this.getIncommingData();
    }
  }, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_methods, "tauxEndettement", function tauxEndettement() {
    var _this$dossier_credit;
    // console.log()
    var a = this.convertNumber((_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 || (_this$dossier_credit = _this$dossier_credit.cred_pub_tb_1) === null || _this$dossier_credit === void 0 || (_this$dossier_credit = _this$dossier_credit.echeance) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.echeance);
    var b = this.creditConcurrence();
    var c = (a + b) / this.convertNumber(this.capaciteAutoFinancement);

    //  console.log('cap', this.dossier_credit?.cred_pub_tb_1?.echeance?.echeance, a)
    return c;
  }), "setTbVal", function setTbVal(val) {
    this.cred_pub_key = val;
  }), "loadWithError", function loadWithError(err) {
    // // window.location.href = "/login";
  }), "getIncommingData", function getIncommingData() {
    var _this$meta_data$dossi30, _this$meta_data$dossi31, _this$meta_data$dossi32, _this$meta_data11, _this$meta_data$dossi36, _this$meta_data$dossi37, _this$meta_data$dossi38, _this$meta_data$dossi39, _this$meta_data$dossi40, _this$meta_data$dossi41, _this$meta_data$dossi42, _this$meta_data$dossi43, _this$meta_data$dossi44, _this$meta_data$dossi45, _this$meta_data$dossi46, _this$meta_data$dossi47, _this$meta_data$dossi48, _this$meta_data$dossi49, _this$meta_data$dossi50, _this$meta_data$dossi51, _this$meta_data$dossi52, _this$meta_data$dossi53, _this$meta_data$dossi54, _this$meta_data$dossi55;
    var remote = (_this$meta_data$dossi30 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi30 === void 0 || (_this$meta_data$dossi30 = _this$meta_data$dossi30.cred_pub_tb_13) === null || _this$meta_data$dossi30 === void 0 ? void 0 : _this$meta_data$dossi30.benefices_pertes;
    var remote_bilan_actif = (_this$meta_data$dossi31 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi31 === void 0 || (_this$meta_data$dossi31 = _this$meta_data$dossi31.cred_pub_tb_12) === null || _this$meta_data$dossi31 === void 0 ? void 0 : _this$meta_data$dossi31.actifs;
    var remote_bilan_passif = (_this$meta_data$dossi32 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi32 === void 0 || (_this$meta_data$dossi32 = _this$meta_data$dossi32.cred_pub_tb_12) === null || _this$meta_data$dossi32 === void 0 ? void 0 : _this$meta_data$dossi32.passifs;
    var cred_tb_13_ = "cred_pub_tb_13";
    var cred_tb_12_ = "cred_pub_tb_12";
    if (['Retail BF (Burkina Faso)'].includes((_this$meta_data11 = this.meta_data) === null || _this$meta_data11 === void 0 || (_this$meta_data11 = _this$meta_data11.dossier_credit) === null || _this$meta_data11 === void 0 ? void 0 : _this$meta_data11.applied_templ_name)) {
      var _this$meta_data$dossi33, _this$meta_data$dossi34, _this$meta_data$dossi35;
      // ['BFR (Fonds de Roulement)', 'Investissement', 'Vide'].includes(dossier_credit?.applied_templ_name)
      cred_tb_13_ = "cred_pub_tb_16107";
      cred_tb_12_ = "cred_pub_tb_16106";
      remote = (_this$meta_data$dossi33 = this.meta_data['dossier_credit']["cred_pub_tb_16107"]) === null || _this$meta_data$dossi33 === void 0 ? void 0 : _this$meta_data$dossi33.benefices_pertes;
      remote_bilan_actif = (_this$meta_data$dossi34 = this.meta_data['dossier_credit']["cred_pub_tb_16106"]) === null || _this$meta_data$dossi34 === void 0 ? void 0 : _this$meta_data$dossi34.actifs;
      remote_bilan_passif = (_this$meta_data$dossi35 = this.meta_data['dossier_credit']["cred_pub_tb_16106"]) === null || _this$meta_data$dossi35 === void 0 ? void 0 : _this$meta_data$dossi35.passifs;
    }
    this.chiffre_affaire = (_this$meta_data$dossi36 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi36 === void 0 || (_this$meta_data$dossi36 = _this$meta_data$dossi36.cred_tb_13_) === null || _this$meta_data$dossi36 === void 0 || (_this$meta_data$dossi36 = _this$meta_data$dossi36.benefices_pertes[this.loadFindIndexByObj("VENTES TOTALES", remote)]) === null || _this$meta_data$dossi36 === void 0 ? void 0 : _this$meta_data$dossi36.montant_c;
    this.cout_achat = (_this$meta_data$dossi37 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi37 === void 0 || (_this$meta_data$dossi37 = _this$meta_data$dossi37.cred_tb_13_) === null || _this$meta_data$dossi37 === void 0 || (_this$meta_data$dossi37 = _this$meta_data$dossi37.benefices_pertes[this.loadFindIndexByObj("COÛT TOTAL DES MARCHANDISES VENDUES", remote)]) === null || _this$meta_data$dossi37 === void 0 ? void 0 : _this$meta_data$dossi37.montant_c;
    this.marge_commerciale = this.calculMargeCom();
    this.charge_exploitation = (_this$meta_data$dossi38 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi38 === void 0 || (_this$meta_data$dossi38 = _this$meta_data$dossi38.cred_tb_13_) === null || _this$meta_data$dossi38 === void 0 || (_this$meta_data$dossi38 = _this$meta_data$dossi38.benefices_pertes[this.loadFindIndexByObj("COÛTS OPÉRATIONNELS TOTAUX", remote)]) === null || _this$meta_data$dossi38 === void 0 ? void 0 : _this$meta_data$dossi38.montant_c;
    this.resultat_net = (_this$meta_data$dossi39 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi39 === void 0 || (_this$meta_data$dossi39 = _this$meta_data$dossi39.cred_tb_13_) === null || _this$meta_data$dossi39 === void 0 || (_this$meta_data$dossi39 = _this$meta_data$dossi39.benefices_pertes[this.loadFindIndexByObj("RÉSULTAT NET PRINCIPALES OPÉRATIONS", remote)]) === null || _this$meta_data$dossi39 === void 0 ? void 0 : _this$meta_data$dossi39.montant_c;
    this.autre_revenu = (_this$meta_data$dossi40 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi40 === void 0 || (_this$meta_data$dossi40 = _this$meta_data$dossi40.cred_tb_13_) === null || _this$meta_data$dossi40 === void 0 || (_this$meta_data$dossi40 = _this$meta_data$dossi40.benefices_pertes[this.loadFindIndexByObj("Autres revenus", remote)]) === null || _this$meta_data$dossi40 === void 0 ? void 0 : _this$meta_data$dossi40.montant_c;
    this.autre_charge = (_this$meta_data$dossi41 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi41 === void 0 || (_this$meta_data$dossi41 = _this$meta_data$dossi41.cred_tb_13_) === null || _this$meta_data$dossi41 === void 0 || (_this$meta_data$dossi41 = _this$meta_data$dossi41.benefices_pertes[this.loadFindIndexByObj("D'autres coûts", remote)]) === null || _this$meta_data$dossi41 === void 0 ? void 0 : _this$meta_data$dossi41.montant_c;
    this.charge_familiale = (_this$meta_data$dossi42 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi42 === void 0 || (_this$meta_data$dossi42 = _this$meta_data$dossi42.cred_tb_13_) === null || _this$meta_data$dossi42 === void 0 || (_this$meta_data$dossi42 = _this$meta_data$dossi42.benefices_pertes[this.label_keys[5]]) === null || _this$meta_data$dossi42 === void 0 ? void 0 : _this$meta_data$dossi42.montant_c;
    this.capacite_autofinancement = this.capaciteAutoFinancement();
    this.montant_credit_caf = (_this$meta_data$dossi43 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi43 === void 0 || (_this$meta_data$dossi43 = _this$meta_data$dossi43[this.credpub1]) === null || _this$meta_data$dossi43 === void 0 ? void 0 : _this$meta_data$dossi43.montant_credit;
    this.montant_echeance_credit_caf = isNaN((_this$meta_data$dossi44 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi44 === void 0 || (_this$meta_data$dossi44 = _this$meta_data$dossi44[this.credpub1]) === null || _this$meta_data$dossi44 === void 0 || (_this$meta_data$dossi44 = _this$meta_data$dossi44.echeance) === null || _this$meta_data$dossi44 === void 0 ? void 0 : _this$meta_data$dossi44.echeance) ? 0 : (_this$meta_data$dossi45 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi45 === void 0 || (_this$meta_data$dossi45 = _this$meta_data$dossi45.cred_pub_tb_1) === null || _this$meta_data$dossi45 === void 0 || (_this$meta_data$dossi45 = _this$meta_data$dossi45.echeance) === null || _this$meta_data$dossi45 === void 0 ? void 0 : _this$meta_data$dossi45.echeance;
    this.tresorerie = (_this$meta_data$dossi46 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi46 === void 0 || (_this$meta_data$dossi46 = _this$meta_data$dossi46.cred_tb_12_) === null || _this$meta_data$dossi46 === void 0 || (_this$meta_data$dossi46 = _this$meta_data$dossi46.actifs[0]) === null || _this$meta_data$dossi46 === void 0 ? void 0 : _this$meta_data$dossi46.montant_c;
    if (this.convertNumber(this.capacite_autofinancement) != 0) {
      this.taux_endettement = (this.convertNumber(this.montant_echeance_credit_caf) + this.convertNumber(this.creditConcurrence())) / this.convertNumber(this.capacite_autofinancement) * 100;
    } else {
      this.taux_endettement = 0;
    }
    this.appreciation_organisation_caf = (_this$meta_data$dossi47 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi47 === void 0 || (_this$meta_data$dossi47 = _this$meta_data$dossi47.cred_pub_tb_16) === null || _this$meta_data$dossi47 === void 0 ? void 0 : _this$meta_data$dossi47.appreciation_organisation;
    this.appreciation_autre_risque_caf = (_this$meta_data$dossi48 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi48 === void 0 || (_this$meta_data$dossi48 = _this$meta_data$dossi48.cred_pub_tb_16) === null || _this$meta_data$dossi48 === void 0 ? void 0 : _this$meta_data$dossi48.appreciation_evaluation;
    this.appreciation_risque_commerciale_caf = (_this$meta_data$dossi49 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi49 === void 0 || (_this$meta_data$dossi49 = _this$meta_data$dossi49.cred_pub_tb_16) === null || _this$meta_data$dossi49 === void 0 ? void 0 : _this$meta_data$dossi49.appreciation;

    // for bilan 
    this.tresorerie_espece = (_this$meta_data$dossi50 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi50 === void 0 || (_this$meta_data$dossi50 = _this$meta_data$dossi50.cred_tb_12_) === null || _this$meta_data$dossi50 === void 0 || (_this$meta_data$dossi50 = _this$meta_data$dossi50.actifs[this.loadFindIndexByObjForBilan("Trésorerie", remote_bilan_actif)]) === null || _this$meta_data$dossi50 === void 0 ? void 0 : _this$meta_data$dossi50.montant_c;
    this.creance_acompte = (_this$meta_data$dossi51 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi51 === void 0 || (_this$meta_data$dossi51 = _this$meta_data$dossi51.cred_tb_12_) === null || _this$meta_data$dossi51 === void 0 || (_this$meta_data$dossi51 = _this$meta_data$dossi51.actifs[this.loadFindIndexByObjForBilan("Créances", remote_bilan_actif)]) === null || _this$meta_data$dossi51 === void 0 ? void 0 : _this$meta_data$dossi51.montant_c;
    this.stock_caf = (_this$meta_data$dossi52 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi52 === void 0 || (_this$meta_data$dossi52 = _this$meta_data$dossi52.cred_tb_12_) === null || _this$meta_data$dossi52 === void 0 || (_this$meta_data$dossi52 = _this$meta_data$dossi52.actifs[this.loadFindIndexByObjForBilan("Stock", remote_bilan_actif)]) === null || _this$meta_data$dossi52 === void 0 ? void 0 : _this$meta_data$dossi52.montant_c;
    this.immobilisation = (_this$meta_data$dossi53 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi53 === void 0 || (_this$meta_data$dossi53 = _this$meta_data$dossi53.cred_tb_12_) === null || _this$meta_data$dossi53 === void 0 || (_this$meta_data$dossi53 = _this$meta_data$dossi53.actifs[this.loadFindIndexByObjForBilan("IMMOBILISATIONS TOTALES", remote_bilan_actif)]) === null || _this$meta_data$dossi53 === void 0 ? void 0 : _this$meta_data$dossi53.montant_c;
    this.passif_ope = (_this$meta_data$dossi54 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi54 === void 0 || (_this$meta_data$dossi54 = _this$meta_data$dossi54.cred_tb_12_) === null || _this$meta_data$dossi54 === void 0 || (_this$meta_data$dossi54 = _this$meta_data$dossi54.passifs[this.loadFindIndexByObjForBilan("Dettes opérationnelles à court terme", remote_bilan_passif)]) === null || _this$meta_data$dossi54 === void 0 ? void 0 : _this$meta_data$dossi54.montant_c;
    this.passifs_fin = (_this$meta_data$dossi55 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi55 === void 0 || (_this$meta_data$dossi55 = _this$meta_data$dossi55.cred_tb_12_) === null || _this$meta_data$dossi55 === void 0 || (_this$meta_data$dossi55 = _this$meta_data$dossi55.passifs[this.loadFindIndexByObjForBilan("Dettes financières à court terme", remote_bilan_passif)]) === null || _this$meta_data$dossi55 === void 0 ? void 0 : _this$meta_data$dossi55.montant_c;
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
      id: "ca3-head"
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
  }), _defineProperty(_defineProperty(_methods, "handleInput", function handleInput(evt) {
    this.formDataToBeWatched["lignes_existantes"] = this.lignes_existantes;
    this.formDataToBeWatched["nouvelles_lignes"] = this.nouvelles_lignes;
    this.formDataToBeWatched["cautions_lignes_existantes"] = this.cautions_lignes_existantes;
    this.formDataToBeWatched["cautions_nouvelles_lignes"] = this.cautions_nouvelles_lignes;
    this.formDataToBeWatched.marge_commerciale_propose = this.margeComProp;
    this.formDataToBeWatched.capacite_autofinancement_propose = this.capaciteAutoFin;
  }), "instruction3", function instruction3(id) {
    var id0 = '#' + id;
    window.$(id0).modal('show');
  })),
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/filiale/CA3_BUG.vue?vue&type=template&id=0ffe7158&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/filiale/CA3_BUG.vue?vue&type=template&id=0ffe7158&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$formDataToBeWatch, _vm$authcheckUsr, _vm$authcheckUsr2, _vm$authcheckUsr3, _vm$authcheckUsr4, _vm$authcheckUsr5, _vm$authcheckUsr6, _vm$authcheckUsr7, _vm$authcheckUsr8, _vm$authcheckUsr9, _vm$authcheckUsr0, _vm$authcheckUsr1, _vm$authcheckUsr10, _vm$authcheckUsr11, _vm$authcheckUsr12, _vm$authcheckUsr13, _vm$authcheckUsr14, _vm$authcheckUsr15, _vm$authcheckUsr16, _vm$authcheckUsr17, _vm$authcheckUsr18, _vm$authcheckUsr19, _vm$authcheckUsr20, _vm$authcheckUsr21, _vm$authcheckUsr22, _vm$authcheckUsr23, _vm$authcheckUsr24, _vm$authcheckUsr25, _vm$authcheckUsr26, _vm$authcheckUsr27, _vm$authcheckUsr28, _vm$authcheckUsr29, _vm$authcheckUsr30, _vm$authcheckUsr31, _vm$authcheckUsr32, _vm$authcheckUsr33, _vm$authcheckUsr34, _vm$authcheckUsr35, _vm$authcheckUsr36, _vm$authcheckUsr37, _vm$authcheckUsr38, _vm$authcheckUsr39, _vm$authcheckUsr40, _vm$formDataToBeWatch2;
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
  }, [_c("ContextMenu", {
    ref: "menu",
    attrs: {
      cred_pub_key: _vm.meta_parseable.cred_pub_key,
      id: _vm.tb_name,
      contextList: _vm.contextList
    }
  }), _vm._v(" "), _vm.seen === true ? _c("div", {
    staticClass: "card",
    staticStyle: {
      width: "100%",
      height: "100%"
    }
  }, [_c("div", {
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
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(1), _vm._v(" "), _c("currency-input", {
    attrs: {
      required: "",
      type: "text",
      id: "chiffre_affaire",
      value: _vm.chiffre_affaire,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(2), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control input-box",
    attrs: {
      required: "",
      type: "text",
      id: "chiffre_affaire_propo_analyste",
      disabled: ((_vm$authcheckUsr = _vm.authcheckUsr) === null || _vm$authcheckUsr === void 0 ? void 0 : _vm$authcheckUsr.what_tobe_produced) == "PV_CONTRE_ANALYSE_FILIALE",
      value: _vm.formDataToBeWatched.chiffre_affaire_propo_analyste
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pl-4"
  }, [_vm._m(3), _vm._v(" "), _c("textarea", {
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
      disabled: ((_vm$authcheckUsr2 = _vm.authcheckUsr) === null || _vm$authcheckUsr2 === void 0 ? void 0 : _vm$authcheckUsr2.what_tobe_produced) == "PV_CONTRE_ANALYSE_FILIALE",
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
  }, [_vm._m(4), _vm._v(" "), _c("currency-input", {
    attrs: {
      required: "",
      type: "text",
      value: _vm.cout_achat,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(5), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control input-box",
    attrs: {
      required: "",
      disabled: ((_vm$authcheckUsr3 = _vm.authcheckUsr) === null || _vm$authcheckUsr3 === void 0 ? void 0 : _vm$authcheckUsr3.what_tobe_produced) == "PV_CONTRE_ANALYSE_FILIALE",
      type: "text",
      id: "cout_achat_propose",
      value: _vm.formDataToBeWatched.cout_achat_propose
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pl-4"
  }, [_vm._m(6), _vm._v(" "), _c("textarea", {
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
      disabled: ((_vm$authcheckUsr4 = _vm.authcheckUsr) === null || _vm$authcheckUsr4 === void 0 ? void 0 : _vm$authcheckUsr4.what_tobe_produced) == "PV_CONTRE_ANALYSE_FILIALE",
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
  }, [_vm._m(7), _vm._v(" "), _c("currency-input", {
    attrs: {
      required: "",
      type: "text",
      value: _vm.marge_commerciale,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(8), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control input-box",
    attrs: {
      required: "",
      disabled: ((_vm$authcheckUsr5 = _vm.authcheckUsr) === null || _vm$authcheckUsr5 === void 0 ? void 0 : _vm$authcheckUsr5.what_tobe_produced) == "PV_CONTRE_ANALYSE_FILIALE",
      type: "text",
      id: "marge_commerciale_propose",
      value: _vm.formDataToBeWatched.marge_commerciale_propose
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pl-4"
  }, [_vm._m(9), _vm._v(" "), _c("textarea", {
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
      disabled: ((_vm$authcheckUsr6 = _vm.authcheckUsr) === null || _vm$authcheckUsr6 === void 0 ? void 0 : _vm$authcheckUsr6.what_tobe_produced) == "PV_CONTRE_ANALYSE_FILIALE",
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
  }, [_vm._m(10), _vm._v(" "), _c("currency-input", {
    attrs: {
      required: "",
      type: "text",
      value: _vm.charge_exploitation,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(11), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control input-box",
    attrs: {
      required: "",
      disabled: ((_vm$authcheckUsr7 = _vm.authcheckUsr) === null || _vm$authcheckUsr7 === void 0 ? void 0 : _vm$authcheckUsr7.what_tobe_produced) == "PV_CONTRE_ANALYSE_FILIALE",
      type: "text",
      id: "charge_exploitation_propose",
      value: _vm.formDataToBeWatched.charge_exploitation_propose
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
      value: _vm.formDataToBeWatched.justification_charge_exploitation,
      expression: "formDataToBeWatched.justification_charge_exploitation",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      disabled: ((_vm$authcheckUsr8 = _vm.authcheckUsr) === null || _vm$authcheckUsr8 === void 0 ? void 0 : _vm$authcheckUsr8.what_tobe_produced) == "PV_CONTRE_ANALYSE_FILIALE",
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
  }, [_vm._m(13), _vm._v(" "), _c("currency-input", {
    attrs: {
      required: "",
      type: "text",
      value: _vm.resultat_net,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(14), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control input-box",
    attrs: {
      required: "",
      disabled: ((_vm$authcheckUsr9 = _vm.authcheckUsr) === null || _vm$authcheckUsr9 === void 0 ? void 0 : _vm$authcheckUsr9.what_tobe_produced) == "PV_CONTRE_ANALYSE_FILIALE",
      type: "text",
      id: "resultat_net_propose",
      value: _vm.formDataToBeWatched.resultat_net_propose
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pl-4"
  }, [_vm._m(15), _vm._v(" "), _c("textarea", {
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
      disabled: ((_vm$authcheckUsr0 = _vm.authcheckUsr) === null || _vm$authcheckUsr0 === void 0 ? void 0 : _vm$authcheckUsr0.what_tobe_produced) == "PV_CONTRE_ANALYSE_FILIALE",
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
  }, [_vm._m(16), _vm._v(" "), _c("currency-input", {
    attrs: {
      required: "",
      type: "text",
      value: _vm.autre_revenu,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(17), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control input-box",
    attrs: {
      required: "",
      type: "text",
      disabled: ((_vm$authcheckUsr1 = _vm.authcheckUsr) === null || _vm$authcheckUsr1 === void 0 ? void 0 : _vm$authcheckUsr1.what_tobe_produced) == "PV_CONTRE_ANALYSE_FILIALE",
      id: "autre_revenu_propose",
      value: _vm.formDataToBeWatched.autre_revenu_propose
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pl-4"
  }, [_vm._m(18), _vm._v(" "), _c("textarea", {
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
      disabled: ((_vm$authcheckUsr10 = _vm.authcheckUsr) === null || _vm$authcheckUsr10 === void 0 ? void 0 : _vm$authcheckUsr10.what_tobe_produced) == "PV_CONTRE_ANALYSE_FILIALE",
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
  }, [_vm._m(19), _vm._v(" "), _c("currency-input", {
    attrs: {
      required: "",
      type: "text",
      value: _vm.autre_charge,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(20), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control input-box",
    attrs: {
      required: "",
      disabled: ((_vm$authcheckUsr11 = _vm.authcheckUsr) === null || _vm$authcheckUsr11 === void 0 ? void 0 : _vm$authcheckUsr11.what_tobe_produced) == "PV_CONTRE_ANALYSE_FILIALE",
      type: "text",
      id: "autre_charge_propose",
      value: _vm.formDataToBeWatched.autre_charge_propose
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pl-4"
  }, [_vm._m(21), _vm._v(" "), _c("textarea", {
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
      disabled: ((_vm$authcheckUsr12 = _vm.authcheckUsr) === null || _vm$authcheckUsr12 === void 0 ? void 0 : _vm$authcheckUsr12.what_tobe_produced) == "PV_CONTRE_ANALYSE_FILIALE",
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
  }, [_vm._m(22), _vm._v(" "), _c("currency-input", {
    attrs: {
      required: "",
      type: "text",
      value: _vm.charge_familiale,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(23), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control input-box",
    attrs: {
      required: "",
      type: "text",
      disabled: ((_vm$authcheckUsr13 = _vm.authcheckUsr) === null || _vm$authcheckUsr13 === void 0 ? void 0 : _vm$authcheckUsr13.what_tobe_produced) == "PV_CONTRE_ANALYSE_FILIALE",
      id: "charge_familiale_propose",
      value: _vm.formDataToBeWatched.charge_familiale_propose
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
      value: _vm.formDataToBeWatched.justification_charge_familiale,
      expression: "formDataToBeWatched.justification_charge_familiale",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      disabled: ((_vm$authcheckUsr14 = _vm.authcheckUsr) === null || _vm$authcheckUsr14 === void 0 ? void 0 : _vm$authcheckUsr14.what_tobe_produced) == "PV_CONTRE_ANALYSE_FILIALE",
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
  }, [_vm._m(25), _vm._v(" "), _c("currency-input", {
    attrs: {
      required: "",
      type: "text",
      value: _vm.capacite_autofinancement,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(26), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "text",
      disabled: ["PV_CONTRE_ANALYSE_FILIALE", "CONTRE_ANALYSE_FILIALE"].includes((_vm$authcheckUsr15 = _vm.authcheckUsr) === null || _vm$authcheckUsr15 === void 0 ? void 0 : _vm$authcheckUsr15.what_tobe_produced),
      id: "capacite_autofinancement_propose",
      value: _vm.formDataToBeWatched.capacite_autofinancement_propose
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pl-4"
  }, [_vm._m(27), _vm._v(" "), _c("textarea", {
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
      disabled: ((_vm$authcheckUsr16 = _vm.authcheckUsr) === null || _vm$authcheckUsr16 === void 0 ? void 0 : _vm$authcheckUsr16.what_tobe_produced) == "PV_CONTRE_ANALYSE_FILIALE",
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
  }, [_vm._m(28), _vm._v(" "), _c("currency-input", {
    attrs: {
      required: "",
      type: "text",
      value: _vm.montant_credit_caf,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(29), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control input-box",
    attrs: {
      required: "",
      type: "text",
      disabled: ((_vm$authcheckUsr17 = _vm.authcheckUsr) === null || _vm$authcheckUsr17 === void 0 ? void 0 : _vm$authcheckUsr17.what_tobe_produced) == "PV_CONTRE_ANALYSE_FILIALE",
      id: "montant_credit_propose",
      value: _vm.formDataToBeWatched.montant_credit_propose
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pl-4"
  }, [_vm._m(30), _vm._v(" "), _c("textarea", {
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
      disabled: ((_vm$authcheckUsr18 = _vm.authcheckUsr) === null || _vm$authcheckUsr18 === void 0 ? void 0 : _vm$authcheckUsr18.what_tobe_produced) == "PV_CONTRE_ANALYSE_FILIALE",
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
  }, [_vm._m(31), _vm._v(" "), _c("currency-input", {
    attrs: {
      required: "",
      type: "text",
      value: _vm.montant_echeance_credit_caf,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(32), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control input-box",
    attrs: {
      required: "",
      type: "text",
      disabled: ((_vm$authcheckUsr19 = _vm.authcheckUsr) === null || _vm$authcheckUsr19 === void 0 ? void 0 : _vm$authcheckUsr19.what_tobe_produced) == "PV_CONTRE_ANALYSE_FILIALE",
      id: "montant_echeance_credit_propose",
      value: _vm.formDataToBeWatched.montant_echeance_credit_propose
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pl-4"
  }, [_vm._m(33), _vm._v(" "), _c("textarea", {
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
      disabled: ((_vm$authcheckUsr20 = _vm.authcheckUsr) === null || _vm$authcheckUsr20 === void 0 ? void 0 : _vm$authcheckUsr20.what_tobe_produced) == "PV_CONTRE_ANALYSE_FILIALE",
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
  }, [_vm._m(34), _vm._v(" "), _c("currency-input", {
    attrs: {
      required: "",
      type: "text",
      value: _vm.tresorerie,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(35), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control input-box",
    attrs: {
      required: "",
      type: "text",
      disabled: ((_vm$authcheckUsr21 = _vm.authcheckUsr) === null || _vm$authcheckUsr21 === void 0 ? void 0 : _vm$authcheckUsr21.what_tobe_produced) == "PV_CONTRE_ANALYSE_FILIALE",
      id: "tresorerie_propose",
      value: _vm.formDataToBeWatched.tresorerie_propose
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
      value: _vm.formDataToBeWatched.justification_capacite_tresorerie,
      expression: "formDataToBeWatched.justification_capacite_tresorerie",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      disabled: ((_vm$authcheckUsr22 = _vm.authcheckUsr) === null || _vm$authcheckUsr22 === void 0 ? void 0 : _vm$authcheckUsr22.what_tobe_produced) == "PV_CONTRE_ANALYSE_FILIALE",
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
  }, [_vm._m(37), _vm._v(" "), _c("currency-input", {
    attrs: {
      required: "",
      type: "text",
      "float": "",
      value: _vm.taux_endettement,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(38), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control input-box",
    attrs: {
      required: "",
      disabled: ((_vm$authcheckUsr23 = _vm.authcheckUsr) === null || _vm$authcheckUsr23 === void 0 ? void 0 : _vm$authcheckUsr23.what_tobe_produced) == "PV_CONTRE_ANALYSE_FILIALE",
      type: "text",
      id: "taux_endettement_propose",
      "float": "",
      value: _vm.formDataToBeWatched.taux_endettement_propose
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pl-4"
  }, [_vm._m(39), _vm._v(" "), _c("textarea", {
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
      disabled: ((_vm$authcheckUsr24 = _vm.authcheckUsr) === null || _vm$authcheckUsr24 === void 0 ? void 0 : _vm$authcheckUsr24.what_tobe_produced) == "PV_CONTRE_ANALYSE_FILIALE",
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
  })])]), _vm._v(" "), _c("hr"), _vm._v(" "), _vm._m(40), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(41), _vm._v(" "), _c("currency-input", {
    attrs: {
      required: "",
      type: "text",
      id: "tresorerie_espece",
      value: _vm.tresorerie_espece,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(42), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control input-box",
    attrs: {
      required: "",
      type: "text",
      id: "tresorerie_espece_propo_analyste",
      disabled: ((_vm$authcheckUsr25 = _vm.authcheckUsr) === null || _vm$authcheckUsr25 === void 0 ? void 0 : _vm$authcheckUsr25.what_tobe_produced) == "PV_CONTRE_ANALYSE_FILIALE",
      value: _vm.formDataToBeWatched.tresorerie_espece_propo_analyste
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pl-4"
  }, [_vm._m(43), _vm._v(" "), _c("textarea", {
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
      disabled: ((_vm$authcheckUsr26 = _vm.authcheckUsr) === null || _vm$authcheckUsr26 === void 0 ? void 0 : _vm$authcheckUsr26.what_tobe_produced) == "PV_CONTRE_ANALYSE_FILIALE",
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
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(44), _vm._v(" "), _c("currency-input", {
    attrs: {
      required: "",
      type: "text",
      value: _vm.creance_acompte,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(45), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control input-box",
    attrs: {
      required: "",
      disabled: ((_vm$authcheckUsr27 = _vm.authcheckUsr) === null || _vm$authcheckUsr27 === void 0 ? void 0 : _vm$authcheckUsr27.what_tobe_produced) == "PV_CONTRE_ANALYSE_FILIALE",
      type: "text",
      id: "creance_acompte_propose",
      value: _vm.formDataToBeWatched.creance_acompte_propose
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pl-4"
  }, [_vm._m(46), _vm._v(" "), _c("textarea", {
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
      disabled: ((_vm$authcheckUsr28 = _vm.authcheckUsr) === null || _vm$authcheckUsr28 === void 0 ? void 0 : _vm$authcheckUsr28.what_tobe_produced) == "PV_CONTRE_ANALYSE_FILIALE",
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
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(47), _vm._v(" "), _c("currency-input", {
    attrs: {
      required: "",
      type: "text",
      value: _vm.stock_caf,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(48), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control input-box",
    attrs: {
      required: "",
      disabled: ((_vm$authcheckUsr29 = _vm.authcheckUsr) === null || _vm$authcheckUsr29 === void 0 ? void 0 : _vm$authcheckUsr29.what_tobe_produced) == "PV_CONTRE_ANALYSE_FILIALE",
      type: "text",
      id: "stock_propose",
      value: _vm.formDataToBeWatched.stock_propose
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pl-4"
  }, [_vm._m(49), _vm._v(" "), _c("textarea", {
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
      disabled: ((_vm$authcheckUsr30 = _vm.authcheckUsr) === null || _vm$authcheckUsr30 === void 0 ? void 0 : _vm$authcheckUsr30.what_tobe_produced) == "PV_CONTRE_ANALYSE_FILIALE",
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
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(50), _vm._v(" "), _c("currency-input", {
    attrs: {
      required: "",
      type: "text",
      value: _vm.immobilisation,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(51), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control input-box",
    attrs: {
      required: "",
      disabled: ((_vm$authcheckUsr31 = _vm.authcheckUsr) === null || _vm$authcheckUsr31 === void 0 ? void 0 : _vm$authcheckUsr31.what_tobe_produced) == "PV_CONTRE_ANALYSE_FILIALE",
      type: "text",
      id: "immobilisation_propose",
      value: _vm.formDataToBeWatched.immobilisation_propose
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
      value: _vm.formDataToBeWatched.justification_immobilisation,
      expression: "formDataToBeWatched.justification_immobilisation",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      disabled: ((_vm$authcheckUsr32 = _vm.authcheckUsr) === null || _vm$authcheckUsr32 === void 0 ? void 0 : _vm$authcheckUsr32.what_tobe_produced) == "PV_CONTRE_ANALYSE_FILIALE",
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
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(53), _vm._v(" "), _c("currency-input", {
    attrs: {
      required: "",
      type: "text",
      value: _vm.passif_ope,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(54), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control input-box",
    attrs: {
      required: "",
      disabled: ((_vm$authcheckUsr33 = _vm.authcheckUsr) === null || _vm$authcheckUsr33 === void 0 ? void 0 : _vm$authcheckUsr33.what_tobe_produced) == "PV_CONTRE_ANALYSE_FILIALE",
      type: "text",
      id: "passif_ope_propose",
      value: _vm.formDataToBeWatched.passif_ope_propose
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pl-4"
  }, [_vm._m(55), _vm._v(" "), _c("textarea", {
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
      disabled: ((_vm$authcheckUsr34 = _vm.authcheckUsr) === null || _vm$authcheckUsr34 === void 0 ? void 0 : _vm$authcheckUsr34.what_tobe_produced) == "PV_CONTRE_ANALYSE_FILIALE",
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
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(56), _vm._v(" "), _c("currency-input", {
    attrs: {
      required: "",
      type: "text",
      value: _vm.passifs_fin,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(57), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control input-box",
    attrs: {
      required: "",
      type: "text",
      disabled: ((_vm$authcheckUsr35 = _vm.authcheckUsr) === null || _vm$authcheckUsr35 === void 0 ? void 0 : _vm$authcheckUsr35.what_tobe_produced) == "PV_CONTRE_ANALYSE_FILIALE",
      id: "passifs_fin_propose",
      value: _vm.formDataToBeWatched.passifs_fin_propose
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pl-4"
  }, [_vm._m(58), _vm._v(" "), _c("textarea", {
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
      disabled: ((_vm$authcheckUsr36 = _vm.authcheckUsr) === null || _vm$authcheckUsr36 === void 0 ? void 0 : _vm$authcheckUsr36.what_tobe_produced) == "PV_CONTRE_ANALYSE_FILIALE",
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
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("label", {
    staticClass: "fw-bold"
  }, [_vm._v("Forces (CAF)")]), _vm._v(" "), _c("div", {
    domProps: {
      innerHTML: _vm._s(_vm.formDataToBeWatched.forces_caf)
    }
  })]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("label", {
    staticClass: "fw-bold"
  }, [_vm._v("Forces (ARC)")]), _vm._v(" "), _c("vue-editor", {
    attrs: {
      disabled: ((_vm$authcheckUsr37 = _vm.authcheckUsr) === null || _vm$authcheckUsr37 === void 0 ? void 0 : _vm$authcheckUsr37.what_tobe_produced) == "PV_CONTRE_ANALYSE_FILIALE",
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
      innerHTML: _vm._s(_vm.formDataToBeWatched.faiblesses_caf)
    }
  })]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("label", {
    staticClass: "fw-bold"
  }, [_vm._v("Faiblesses (ARC)")]), _vm._v(" "), _c("vue-editor", {
    attrs: {
      disabled: ((_vm$authcheckUsr38 = _vm.authcheckUsr) === null || _vm$authcheckUsr38 === void 0 ? void 0 : _vm$authcheckUsr38.what_tobe_produced) == "PV_CONTRE_ANALYSE_FILIALE",
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
      innerHTML: _vm._s(_vm.formDataToBeWatched.opportunites_caf)
    }
  })]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("label", {
    staticClass: "fw-bold"
  }, [_vm._v("Opportunités (ARC)")]), _vm._v(" "), _c("vue-editor", {
    attrs: {
      disabled: ((_vm$authcheckUsr39 = _vm.authcheckUsr) === null || _vm$authcheckUsr39 === void 0 ? void 0 : _vm$authcheckUsr39.what_tobe_produced) == "PV_CONTRE_ANALYSE_FILIALE",
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
      innerHTML: _vm._s(_vm.formDataToBeWatched.menaces_caf)
    }
  })]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("label", {
    staticClass: "fw-bold"
  }, [_vm._v("Menaces (ARC)")]), _vm._v(" "), _c("vue-editor", {
    attrs: {
      disabled: ((_vm$authcheckUsr40 = _vm.authcheckUsr) === null || _vm$authcheckUsr40 === void 0 ? void 0 : _vm$authcheckUsr40.what_tobe_produced) == "PV_CONTRE_ANALYSE_FILIALE",
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
    staticClass: "form-control",
    attrs: {
      type: "text",
      disabled: ""
    },
    domProps: {
      value: _vm.appreciation_organisation_caf
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("label", [_vm._v("Appréciation organisation client (ARC) ")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.appreciation_organisation_arc,
      expression: "formDataToBeWatched.appreciation_organisation_arc"
    }],
    staticClass: "form-select single-select input-box",
    attrs: {
      id: "appreciation_organisation_arc"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formDataToBeWatched, "appreciation_organisation_arc", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
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
    staticClass: "form-control",
    attrs: {
      type: "text",
      disabled: ""
    },
    domProps: {
      value: _vm.appreciation_autre_risque_caf
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("label", [_vm._v("Appréciation autres risques (ARC)")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.appreciation_autre_risque_arc,
      expression: "formDataToBeWatched.appreciation_autre_risque_arc"
    }],
    staticClass: "form-select input-box",
    attrs: {
      id: "appreciation_autre_risque_arc"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formDataToBeWatched, "appreciation_autre_risque_arc", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
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
    staticClass: "form-control",
    attrs: {
      type: "text",
      disabled: ""
    },
    domProps: {
      value: _vm.appreciation_risque_commerciale_caf
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("label", [_vm._v("Appréciation risque commerciale (ARC)")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.appreciation_risque_commerciale_arc,
      expression: "formDataToBeWatched.appreciation_risque_commerciale_arc"
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
        _vm.$set(_vm.formDataToBeWatched, "appreciation_risque_commerciale_arc", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
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
  }, [_vm._v("\n                Fermer le tableau\n            ")])]) : _c("div", {
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
  })], 1)])])])])], 1), _vm._v(" "), _c("note-modal", {
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
  }, [_vm._v("Charges d'exploitation et financière proposées par l'ARC\n                                    "), _c("span", {
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
  }, [_vm._v("Trésorerie proposée par le CAF\n                                    "), _c("span", {
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
  }, [_vm._v("Justification de l'ARC\n                                    "), _c("span", {
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
  }, [_vm._v("\n                                Bilan\n                            ")])]);
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
  }, [_vm._v("Trésorerie (En espèce) proposé par l'ARC\n                                    "), _c("span", {
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
  }, [_vm._v("Créances et acompte proposé par l'ARC\n                                    "), _c("span", {
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
  }, [_vm._v("Stock proposée par l'ARC\n                                    "), _c("span", {
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
  }, [_vm._v("Immobilisations proposées par l'ARC\n                                    "), _c("span", {
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
  }, [_vm._v("Passifs opérationnels proposé par l'ARC\n                                    "), _c("span", {
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
  }, [_vm._v("Passifs financiers proposées par l'ARC\n                                    "), _c("span", {
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
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/filiale/CA3_BUG.vue?vue&type=style&index=0&id=0ffe7158&lang=css&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/filiale/CA3_BUG.vue?vue&type=style&index=0&id=0ffe7158&lang=css&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\ninput[data-v-0ffe7158] {\r\n    /*border: 1px solid red;*/\n}\n*[data-v-0ffe7158] {\r\n    font-family: \"Google sans\";\n}\nlabel[data-v-0ffe7158] {\r\n    height: 10px;\r\n    font-size: 13px;\n}\ninput[data-v-0ffe7158],\r\nselect[data-v-0ffe7158] {\r\n    height: 35px;\r\n    border-color: #34495e;\r\n    color: #57606f;\r\n    font-size: 13px;\r\n    font-weight: bold;\n}\n.card-width-height[data-v-0ffe7158] {\r\n    width: 100%;\r\n    height: 100%;\n}\ntextarea[data-v-0ffe7158] {\r\n\r\n    margin-bottom: 8px;\n}\n.head[data-v-0ffe7158] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\n.hdc[data-v-0ffe7158] {\r\n    background-color: #57606f;\n}\ninput.input-box[data-v-0ffe7158] {\r\n    background: #00ffff21;\r\n    color: #000;\n}\nselect.input-box[data-v-0ffe7158] {\r\n    background: #00ffff21;\r\n    color: #000;\n}\n.badge-sm[data-v-0ffe7158] {\r\n    display: inline-block;\r\n    width: 15px;\r\n    height: 15px;\r\n    background: rgba(255, 0, 0, 0.882);\r\n    color: white;\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    border-radius: 100%;\r\n    position: absolute;\r\n    top: -20%;\r\n    left: 55%;\r\n    text-align: center;\n}\n.relook-header[data-v-0ffe7158] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/filiale/CA3_BUG.vue?vue&type=style&index=0&id=0ffe7158&lang=css&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/filiale/CA3_BUG.vue?vue&type=style&index=0&id=0ffe7158&lang=css&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA3_BUG_vue_vue_type_style_index_0_id_0ffe7158_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CA3_BUG.vue?vue&type=style&index=0&id=0ffe7158&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/filiale/CA3_BUG.vue?vue&type=style&index=0&id=0ffe7158&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA3_BUG_vue_vue_type_style_index_0_id_0ffe7158_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA3_BUG_vue_vue_type_style_index_0_id_0ffe7158_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/contreanalyse/cofina/filiale/CA3_BUG.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/cofina/filiale/CA3_BUG.vue ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CA3_BUG_vue_vue_type_template_id_0ffe7158_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CA3_BUG.vue?vue&type=template&id=0ffe7158&scoped=true */ "./resources/js/components/contreanalyse/cofina/filiale/CA3_BUG.vue?vue&type=template&id=0ffe7158&scoped=true");
/* harmony import */ var _CA3_BUG_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CA3_BUG.vue?vue&type=script&lang=js */ "./resources/js/components/contreanalyse/cofina/filiale/CA3_BUG.vue?vue&type=script&lang=js");
/* harmony import */ var _CA3_BUG_vue_vue_type_style_index_0_id_0ffe7158_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CA3_BUG.vue?vue&type=style&index=0&id=0ffe7158&lang=css&scoped=true */ "./resources/js/components/contreanalyse/cofina/filiale/CA3_BUG.vue?vue&type=style&index=0&id=0ffe7158&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CA3_BUG_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CA3_BUG_vue_vue_type_template_id_0ffe7158_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _CA3_BUG_vue_vue_type_template_id_0ffe7158_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "0ffe7158",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/contreanalyse/cofina/filiale/CA3_BUG.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/contreanalyse/cofina/filiale/CA3_BUG.vue?vue&type=script&lang=js":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/cofina/filiale/CA3_BUG.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CA3_BUG_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CA3_BUG.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/filiale/CA3_BUG.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CA3_BUG_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/contreanalyse/cofina/filiale/CA3_BUG.vue?vue&type=style&index=0&id=0ffe7158&lang=css&scoped=true":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/cofina/filiale/CA3_BUG.vue?vue&type=style&index=0&id=0ffe7158&lang=css&scoped=true ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA3_BUG_vue_vue_type_style_index_0_id_0ffe7158_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CA3_BUG.vue?vue&type=style&index=0&id=0ffe7158&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/filiale/CA3_BUG.vue?vue&type=style&index=0&id=0ffe7158&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/contreanalyse/cofina/filiale/CA3_BUG.vue?vue&type=template&id=0ffe7158&scoped=true":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/cofina/filiale/CA3_BUG.vue?vue&type=template&id=0ffe7158&scoped=true ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA3_BUG_vue_vue_type_template_id_0ffe7158_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA3_BUG_vue_vue_type_template_id_0ffe7158_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA3_BUG_vue_vue_type_template_id_0ffe7158_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CA3_BUG.vue?vue&type=template&id=0ffe7158&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/filiale/CA3_BUG.vue?vue&type=template&id=0ffe7158&scoped=true");


/***/ })

}]);