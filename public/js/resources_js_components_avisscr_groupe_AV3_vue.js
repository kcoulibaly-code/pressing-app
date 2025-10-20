"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_avisscr_groupe_AV3_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/avisscr/groupe/AV3.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/avisscr/groupe/AV3.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/auth.service */ "./resources/js/services/auth.service.js");
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
      var a = this.formDataToBeWatched.chiffre_affaire_src;
      a = Number(String(a).replace(/\s+/g, ""));
      var b = this.formDataToBeWatched.cout_achat_src;
      b = Number(String(b).replace(/\s+/g, ""));
      var c = a - b;
      return c;
    },
    margeComSrcg: function margeComSrcg() {
      var a = this.formDataToBeWatched.chiffre_affaire_srcg;
      a = Number(String(a).replace(/\s+/g, ""));
      var b = this.formDataToBeWatched.cout_achat_srcg;
      b = Number(String(b).replace(/\s+/g, ""));
      var c = a - b;
      return c;
    },
    capaciteAutoFinSrcg: function capaciteAutoFinSrcg() {
      var a = this.formDataToBeWatched.resultat_net_srcg;
      var b = this.formDataToBeWatched.autre_revenu_srcg;
      var c = this.formDataToBeWatched.charge_familiale_srcg;
      var d = this.formDataToBeWatched.autre_charge_srcg;

      // console.log('kut',a,b,c,d)

      a = Number(String(a).replace(/\s+/g, ""));
      b = Number(String(b).replace(/\s+/g, ""));
      c = Number(String(c).replace(/\s+/g, ""));
      d = Number(String(d).replace(/\s+/g, ""));
      var f = a + b - (c + d);
      return f;
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
    var _formDataToBeWatched;
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
      formDataToBeWatched: (_formDataToBeWatched = {
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
        forces_src: "",
        faiblesses_src: "",
        opportunites_src: "",
        menaces_src: "",
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
        chiffre_affaire_srcg: "",
        justification_chiffre_affaire_srcg: "",
        cout_achat_srcg: "",
        justification_cout_achat_srcg: "",
        justification_marge_commerciale_srcg: "",
        marge_commerciale_srcg: "",
        charge_exploitation_srcg: "",
        justification_charge_exploitation_srcg: "",
        resultat_net_srcg: "",
        justification_resultat_net_srcg: "",
        autre_revenu_srcg: "",
        justification_autre_revenu_srcg: "",
        autre_charge_srcg: "",
        justification_autre_charge_srcg: "",
        charge_familiale_srcg: "",
        justification_charge_familiale_srcg: "",
        capacite_autofinancement_srcg: "",
        justification_capacite_auto_srcg: "",
        montant_credit_srcg: "",
        justification_capacite_montant_propose_srcg: "",
        montant_echeance_credit_srcg: "",
        justification_capacite_montant_echeance_srcg: "",
        justification_capacite_tresorerie_srcg: "",
        tresorerie_srcg: "",
        taux_endettement_srcg: "",
        justification_taux_srcg: ""
      }, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_formDataToBeWatched, "quantite_analyse_effectuee_analyse", ""), "quantite_analyse_effectuee_avis_src", ""), "capacite_paiement_avis_src", ""), "garantie_analyse", ""), "implication_client_analyse", ""), "implication_client_avis_src", ""), "quantite_analyse_effectuee_analyse_srcg", ""), "quantite_analyse_effectuee_avis_srcg", ""), "capacite_paiement_analyse_srcg", ""), "capacite_paiement_avis_srcg", ""), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_formDataToBeWatched, "garantie_analyse_srcg", ""), "garantie_avis_srcg", ""), "implication_client_analyse_srcg", ""), "implication_client_avis_srcg", ""), "tresorerie_espece_srcg", ""), "justification_tresorerie_espece_srcg", ""), "creance_acompte_srcg", ""), "justification_creance_acompte_srcg", ""), "stock_srcg", ""), "justification_stock_srcg", ""), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_formDataToBeWatched, "immobilisation_srcg", ""), "justification_immobilisation_srcg", ""), "passif_ope_srcg", ""), "justification_passif_ope_srcg", ""), "passifs_fin_srcg", ""), "justification_passifs_fin_srcg", "")),
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
      //arcg
      chiffre_affaire_arcg: null,
      justification_chiffre_affaire_arcg: null,
      cout_achat_arcg: null,
      justification_cout_achat_arcg: null,
      marge_commerciale_arcg: null,
      justification_marge_commerciale_arcg: null,
      charge_exploitation_arcg: null,
      justification_charge_exploitation_arcg: null,
      resultat_net_arcg: null,
      justification_resultat_net_arcg: null,
      autre_revenu_arcg: null,
      justification_autre_revenu_arcg: null,
      justification_autre_charge_arcg: null,
      autre_charge_arcg: null,
      charge_familiale_arcg: null,
      justification_charge_familiale_arcg: null,
      capacite_autofinancement_arcg: null,
      justification_capacite_auto_arcg: null,
      montant_credit_arcg: null,
      justification_capacite_montant_propose_arcg: null,
      montant_echeance_credit_arcg: null,
      justification_capacite_montant_echeance_arcg: null,
      tresorerie_arcg: null,
      justification_capacite_tresorerie_arcg: null,
      chiffre_affaire_src: null,
      justification_chiffre_affaire: null,
      cout_achat_src: null,
      justification_cout_achat: null,
      justification_marge_commerciale: null,
      marge_commerciale_src: null,
      charge_exploitation_src: null,
      justification_charge_exploitation: null,
      resultat_net_src: null,
      justification_resultat_net: null,
      justification_autre_revenu: null,
      autre_revenu_src: null,
      autre_charge_src: null,
      justification_autre_charge: null,
      charge_familiale_src: null,
      justification_charge_familiale: null,
      capacite_autofinancement_src: null,
      justification_capacite_auto: null,
      montant_credit_src: null,
      justification_capacite_montant_propose: null,
      montant_echeance_credit_src: null,
      justification_capacite_montant_echeance: null,
      tresorerie_src: null,
      justification_capacite_tresorerie_src: null,
      taux_endettement_src: null,
      justification_taux_src: null,
      justification_taux_arcg: null,
      taux_endettement_arcg: null,
      quantite_analyse_effectuee_avis_src: null,
      quantite_analyse_effectuee_analyse: null,
      capacite_paiement_analyse_src: null,
      capacite_paiement_avis_src: null,
      garantie_analyse_src: null,
      garantie_avis_src: null,
      implication_client_analyse_src: null,
      implication_client_avis_src: null,
      appreciation_organisation_arcg: "",
      appreciation_organisation_src: "",
      appreciation_autre_risque_src: "",
      appreciation_autre_risque_arcg: "",
      appreciation_risque_commerciale_srcf: "",
      appreciation_risque_commerciale_arcg: "",
      avis_appreciation_organisation_src: "",
      avis_appreciation_autre_risque_srcf: "",
      avis_appreciation_risque_commerciale_srcf: "",
      condition_avant_decaissement: "",
      condition_apres_decaissement: "",
      // for bilan 
      tresorerie_espece_caf: null,
      tresorerie_espece_arc: null,
      tresorerie_espece_src: null,
      justification_tresorerie_espece_src: null,
      creance_acompte_caf: null,
      creance_acompte_arc: null,
      creance_acompte_src: null,
      justification_creance_acompte_src: null,
      stock_caf: null,
      stock_arc: null,
      stock_src: null,
      justification_stock_src: null,
      immobilisation_caf: null,
      immobilisation_arc: null,
      immobilisation_src: null,
      justification_immobilisation_arc: null,
      passif_ope_caf: null,
      passif_ope_arc: null,
      passif_ope_src: null,
      justification_passif_ope_src: null,
      passifs_fin_caf: null,
      passifs_fin_arc: null,
      passifs_fin_src: null,
      justification_passifs_fin_src: null
      //end bilan 
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
      var _this$meta_data, _this$meta_data2;
      var tab = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "benefices_pertes";
      var cred_13_ = "cred_pub_tb_13";
      var cred_12_ = "cred_pub_tb_12";
      if (['Retail BF (Burkina Faso)'].includes((_this$meta_data = this.meta_data) === null || _this$meta_data === void 0 || (_this$meta_data = _this$meta_data.dossier_credit) === null || _this$meta_data === void 0 ? void 0 : _this$meta_data.applied_templ_name)) {
        // ['BFR (Fonds de Roulement)', 'Investissement', 'Vide'].includes(dossier_credit?.applied_templ_name)
        cred_13_ = "cred_pub_tb_16107";
        cred_12_ = "cred_pub_tb_16106";
      }
      if (!['', null, undefined].includes((_this$meta_data2 = this.meta_data) === null || _this$meta_data2 === void 0 || (_this$meta_data2 = _this$meta_data2.dossier_credit) === null || _this$meta_data2 === void 0 || (_this$meta_data2 = _this$meta_data2.cred_13_) === null || _this$meta_data2 === void 0 ? void 0 : _this$meta_data2[tab])) {
        var _this$meta_data3;
        return (_this$meta_data3 = this.meta_data) === null || _this$meta_data3 === void 0 || (_this$meta_data3 = _this$meta_data3.dossier_credit) === null || _this$meta_data3 === void 0 || (_this$meta_data3 = _this$meta_data3.cred_13_) === null || _this$meta_data3 === void 0 || (_this$meta_data3 = _this$meta_data3[tab]) === null || _this$meta_data3 === void 0 ? void 0 : _this$meta_data3.findIndex(function (el) {
          return el.position === label;
        });
      }
      return -1;
    },
    calculMargeCom: function calculMargeCom() {
      var _this$meta_data$dossi, _this$meta_data4, _dossier, _dossier3;
      var dossier = (_this$meta_data$dossi = this.meta_data.dossier_credit) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi.cred_pub_tb_13;
      var a = 0;
      var b = 0;
      if (['Retail BF (Burkina Faso)'].includes((_this$meta_data4 = this.meta_data) === null || _this$meta_data4 === void 0 || (_this$meta_data4 = _this$meta_data4.dossier_credit) === null || _this$meta_data4 === void 0 ? void 0 : _this$meta_data4.applied_templ_name)) {
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
    },
    creditConcurrence: function creditConcurrence() {
      var _this$meta_data5, _this$meta_data6;
      var total = 0;
      var hytorique_credit = (_this$meta_data5 = this.meta_data) === null || _this$meta_data5 === void 0 || (_this$meta_data5 = _this$meta_data5.dossier_credit) === null || _this$meta_data5 === void 0 ? void 0 : _this$meta_data5.cred_pub_tb_17;
      if (['Retail BF (Burkina Faso)'].includes((_this$meta_data6 = this.meta_data) === null || _this$meta_data6 === void 0 || (_this$meta_data6 = _this$meta_data6.dossier_credit) === null || _this$meta_data6 === void 0 ? void 0 : _this$meta_data6.applied_templ_name)) {
        var _this$meta_data$dossi3;
        hytorique_credit = (_this$meta_data$dossi3 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi3 === void 0 ? void 0 : _this$meta_data$dossi3.cred_pub_tb_16105;
      }
      if (hytorique_credit !== undefined) {
        var _hytorique_credit;
        if (((_hytorique_credit = hytorique_credit) === null || _hytorique_credit === void 0 ? void 0 : _hytorique_credit.historiques_des_credits) !== "") {
          var _hytorique_credit2;
          (_hytorique_credit2 = hytorique_credit) === null || _hytorique_credit2 === void 0 || _hytorique_credit2.historiques_des_credits.forEach(function (element) {
            if (element.statut === "Financé") {
              total += Number(String(element.encours).replace(/\s+/g, ""));
            }
          });
        }
      }
      return total;
    },
    capaciteAutoFinancementCaf: function capaciteAutoFinancementCaf() {
      var _this$resultat_net_ca, _this$autre_revenu_ca, _this$charge_familial, _this$autre_charge_ca;
      var revenus = (Number((_this$resultat_net_ca = this.resultat_net_caf) === null || _this$resultat_net_ca === void 0 ? void 0 : _this$resultat_net_ca.toString().replace('/\s+/g', '')) || 0) + (Number((_this$autre_revenu_ca = this.autre_revenu_caf) === null || _this$autre_revenu_ca === void 0 ? void 0 : _this$autre_revenu_ca.toString().replace('/\s+/g', '')) || 0);
      var charges = (Number((_this$charge_familial = this.charge_familiale_caf) === null || _this$charge_familial === void 0 ? void 0 : _this$charge_familial.toString().replace('/\s+/g', '')) || 0) + (Number((_this$autre_charge_ca = this.autre_charge_caf) === null || _this$autre_charge_ca === void 0 ? void 0 : _this$autre_charge_ca.toString().replace('/\s+/g', '')) || 0);
      return revenus - charges;
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
      var _this$meta_data8, _meta_data;
      // console.log()
      var c = 0;
      var a = this.capaciteAutoFinancement();
      var b = this.creditConcurrence();
      if (((_this$meta_data8 = this.meta_data) === null || _this$meta_data8 === void 0 || (_this$meta_data8 = _this$meta_data8.dossier_credit) === null || _this$meta_data8 === void 0 || (_this$meta_data8 = _this$meta_data8[this.determineCredPubTables((_meta_data = meta_data) === null || _meta_data === void 0 || (_meta_data = _meta_data.dossier_credit) === null || _meta_data === void 0 ? void 0 : _meta_data.applied_templ_name)[1]]) === null || _this$meta_data8 === void 0 ? void 0 : _this$meta_data8.montant_demander) !== undefined) {
        var _this$meta_data9, _meta_data2;
        c = (_this$meta_data9 = this.meta_data) === null || _this$meta_data9 === void 0 || (_this$meta_data9 = _this$meta_data9.dossier_credit) === null || _this$meta_data9 === void 0 || (_this$meta_data9 = _this$meta_data9[this.determineCredPubTables((_meta_data2 = meta_data) === null || _meta_data2 === void 0 || (_meta_data2 = _meta_data2.dossier_credit) === null || _meta_data2 === void 0 ? void 0 : _meta_data2.applied_templ_name)[1]]) === null || _this$meta_data9 === void 0 ? void 0 : _this$meta_data9.montant_demander;
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
      return Number(valeur === null || valeur === void 0 ? void 0 : valeur.toString().replace(/\s+/g, ""));
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
      var _this$meta_data$dossi4, _this$meta_data$dossi5, _this$meta_data$dossi6, _this$meta_data$dossi7, _this$meta_data$dossi8, _this$meta_data$dossi9, _this$meta_data$dossi0, _this$meta_data$dossi1, _this$meta_data0, _this$meta_data1, _this$meta_data10, _this$meta_data11, _this$meta_data12, _this$meta_data13, _this$meta_data$dossi10, _this$meta_data$dossi11, _this$meta_data$dossi12, _this$meta_data$dossi13;
      var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      this.loadIncommingData();
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
      this.appreciation_organisation_caf = (_this$meta_data0 = this.meta_data) === null || _this$meta_data0 === void 0 || (_this$meta_data0 = _this$meta_data0.dossier_credit) === null || _this$meta_data0 === void 0 || (_this$meta_data0 = _this$meta_data0.cred_pub_tb_16) === null || _this$meta_data0 === void 0 ? void 0 : _this$meta_data0.appreciation_organisation;
      this.appreciation_autre_risque_caf = (_this$meta_data1 = this.meta_data) === null || _this$meta_data1 === void 0 || (_this$meta_data1 = _this$meta_data1.dossier_credit) === null || _this$meta_data1 === void 0 || (_this$meta_data1 = _this$meta_data1.cred_pub_tb_16) === null || _this$meta_data1 === void 0 ? void 0 : _this$meta_data1.appreciation_evaluation;
      this.appreciation_autre_risque_arc = (_this$meta_data10 = this.meta_data) === null || _this$meta_data10 === void 0 || (_this$meta_data10 = _this$meta_data10.dossier_credit) === null || _this$meta_data10 === void 0 || (_this$meta_data10 = _this$meta_data10.cred_pub_tb_48) === null || _this$meta_data10 === void 0 ? void 0 : _this$meta_data10.appreciation_autre_risque_arc;
      this.appreciation_organisation_arc = (_this$meta_data11 = this.meta_data) === null || _this$meta_data11 === void 0 || (_this$meta_data11 = _this$meta_data11.dossier_credit) === null || _this$meta_data11 === void 0 || (_this$meta_data11 = _this$meta_data11.cred_pub_tb_48) === null || _this$meta_data11 === void 0 ? void 0 : _this$meta_data11.appreciation_organisation_arc;
      this.appreciation_risque_commerciale_caf = (_this$meta_data12 = this.meta_data) === null || _this$meta_data12 === void 0 || (_this$meta_data12 = _this$meta_data12.dossier_credit) === null || _this$meta_data12 === void 0 || (_this$meta_data12 = _this$meta_data12.cred_pub_tb_16) === null || _this$meta_data12 === void 0 ? void 0 : _this$meta_data12.appreciation;
      this.appreciation_risque_commerciale_arc = (_this$meta_data13 = this.meta_data) === null || _this$meta_data13 === void 0 || (_this$meta_data13 = _this$meta_data13.dossier_credit) === null || _this$meta_data13 === void 0 || (_this$meta_data13 = _this$meta_data13.cred_pub_tb_48) === null || _this$meta_data13 === void 0 ? void 0 : _this$meta_data13.appreciation_risque_commerciale_arc;
      // this.srcf = this.meta_data?.dossier_credit?.cred_pub_tb_480

      this.formDataToBeWatched.forces_src = (_this$meta_data$dossi10 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi10 === void 0 || (_this$meta_data$dossi10 = _this$meta_data$dossi10.cred_pub_tb_480) === null || _this$meta_data$dossi10 === void 0 ? void 0 : _this$meta_data$dossi10.forces;
      this.formDataToBeWatched.faiblesses_src = (_this$meta_data$dossi11 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi11 === void 0 || (_this$meta_data$dossi11 = _this$meta_data$dossi11.cred_pub_tb_480) === null || _this$meta_data$dossi11 === void 0 ? void 0 : _this$meta_data$dossi11.faiblesses;
      this.formDataToBeWatched.opportunites_src = (_this$meta_data$dossi12 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi12 === void 0 || (_this$meta_data$dossi12 = _this$meta_data$dossi12.cred_pub_tb_480) === null || _this$meta_data$dossi12 === void 0 ? void 0 : _this$meta_data$dossi12.opportinutes;
      this.formDataToBeWatched.menaces_src = (_this$meta_data$dossi13 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi13 === void 0 || (_this$meta_data$dossi13 = _this$meta_data$dossi13.cred_pub_tb_480) === null || _this$meta_data$dossi13 === void 0 ? void 0 : _this$meta_data$dossi13.menaces;

      // console.log("le sage", this.meta_data.dossier_credit?.cred_pub_tb_20?.forces)
      if (this.meta_data['dossier_credit']["cred_pub_tb_48"] != undefined) {}
      createdKey = "cred_pub_tb_" + createdKeyArr[1];
      // console.log('franck',this.meta_data['dossier_credit']["cred_pub_tb_13"])

      var remote = this.meta_data['dossier_credit']["cred_pub_tb_48"];
      if (this.meta_data['dossier_credit'][createdKey] === undefined) {
        var _this$meta_data14, _this$meta_data15, _this$meta_data16, _this$meta_data17, _this$meta_data18, _this$meta_data19, _this$meta_data20, _this$meta_data21, _this$meta_data22, _this$meta_data23, _this$meta_data24, _this$meta_data25, _this$meta_data26, _this$meta_data27, _this$meta_data28, _this$meta_data29, _this$meta_data30, _this$meta_data31, _this$meta_data32, _this$meta_data33, _this$meta_data34, _this$meta_data35, _this$meta_data36, _this$meta_data37, _this$meta_data38, _this$meta_data39, _this$meta_data40, _this$meta_data41, _this$meta_data42, _this$meta_data43, _this$meta_data44, _this$meta_data45, _this$meta_data46, _this$meta_data47, _this$meta_data48, _this$meta_data49, _this$meta_data50, _this$meta_data51, _this$meta_data52, _this$meta_data$dossi14, _this$meta_data$dossi15, _this$meta_data53, _this$meta_data54, _this$meta_data55, _this$meta_data56, _this$meta_data57, _this$meta_data58;
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
        this.formDataToBeWatched.appreciation_organisation_src = (_this$meta_data14 = this.meta_data) === null || _this$meta_data14 === void 0 || (_this$meta_data14 = _this$meta_data14.dossier_credit) === null || _this$meta_data14 === void 0 || (_this$meta_data14 = _this$meta_data14.cred_pub_tb_48) === null || _this$meta_data14 === void 0 ? void 0 : _this$meta_data14.appreciation_organisation_arc;
        this.formDataToBeWatched.appreciation_autre_risque_src = (_this$meta_data15 = this.meta_data) === null || _this$meta_data15 === void 0 || (_this$meta_data15 = _this$meta_data15.dossier_credit) === null || _this$meta_data15 === void 0 || (_this$meta_data15 = _this$meta_data15.cred_pub_tb_48) === null || _this$meta_data15 === void 0 ? void 0 : _this$meta_data15.appreciation_autre_risque_arc;
        this.formDataToBeWatched.appreciation_risque_commerciale_src = (_this$meta_data16 = this.meta_data) === null || _this$meta_data16 === void 0 || (_this$meta_data16 = _this$meta_data16.dossier_credit) === null || _this$meta_data16 === void 0 || (_this$meta_data16 = _this$meta_data16.cred_pub_tb_48) === null || _this$meta_data16 === void 0 ? void 0 : _this$meta_data16.appreciation_autre_risque_arc;
        this.formDataToBeWatched.taux_endettement_src = (_this$meta_data17 = this.meta_data) === null || _this$meta_data17 === void 0 || (_this$meta_data17 = _this$meta_data17.dossier_credit) === null || _this$meta_data17 === void 0 ? void 0 : _this$meta_data17.cred_pub_tb_48.taux_endettement_propose;
        this.formDataToBeWatched.chiffre_affaire_srcg = (_this$meta_data18 = this.meta_data) === null || _this$meta_data18 === void 0 || (_this$meta_data18 = _this$meta_data18.dossier_credit) === null || _this$meta_data18 === void 0 ? void 0 : _this$meta_data18.cred_pub_tb_480.chiffre_affaire_src;
        this.formDataToBeWatched.justification_chiffre_affaire_srcg = (_this$meta_data19 = this.meta_data) === null || _this$meta_data19 === void 0 || (_this$meta_data19 = _this$meta_data19.dossier_credit) === null || _this$meta_data19 === void 0 ? void 0 : _this$meta_data19.cred_pub_tb_480.justification_chiffre_affaire;
        this.formDataToBeWatched.cout_achat_srcg = (_this$meta_data20 = this.meta_data) === null || _this$meta_data20 === void 0 || (_this$meta_data20 = _this$meta_data20.dossier_credit) === null || _this$meta_data20 === void 0 ? void 0 : _this$meta_data20.cred_pub_tb_480.cout_achat_src;
        this.formDataToBeWatched.justification_cout_achat_srcg = (_this$meta_data21 = this.meta_data) === null || _this$meta_data21 === void 0 || (_this$meta_data21 = _this$meta_data21.dossier_credit) === null || _this$meta_data21 === void 0 ? void 0 : _this$meta_data21.cred_pub_tb_480.justification_cout_achat;
        this.formDataToBeWatched.marge_commerciale_srcg = (_this$meta_data22 = this.meta_data) === null || _this$meta_data22 === void 0 || (_this$meta_data22 = _this$meta_data22.dossier_credit) === null || _this$meta_data22 === void 0 ? void 0 : _this$meta_data22.cred_pub_tb_480.marge_commerciale_src;
        this.formDataToBeWatched.justification_marge_commerciale_srcg = (_this$meta_data23 = this.meta_data) === null || _this$meta_data23 === void 0 || (_this$meta_data23 = _this$meta_data23.dossier_credit) === null || _this$meta_data23 === void 0 ? void 0 : _this$meta_data23.cred_pub_tb_480.justification_marge_commerciale;
        this.formDataToBeWatched.charge_exploitation_srcg = (_this$meta_data24 = this.meta_data) === null || _this$meta_data24 === void 0 || (_this$meta_data24 = _this$meta_data24.dossier_credit) === null || _this$meta_data24 === void 0 ? void 0 : _this$meta_data24.cred_pub_tb_480.charge_exploitation_src;
        this.formDataToBeWatched.justification_charge_exploitation_srcg = (_this$meta_data25 = this.meta_data) === null || _this$meta_data25 === void 0 || (_this$meta_data25 = _this$meta_data25.dossier_credit) === null || _this$meta_data25 === void 0 ? void 0 : _this$meta_data25.cred_pub_tb_480.justification_charge_exploitation;
        this.formDataToBeWatched.resultat_net_srcg = (_this$meta_data26 = this.meta_data) === null || _this$meta_data26 === void 0 || (_this$meta_data26 = _this$meta_data26.dossier_credit) === null || _this$meta_data26 === void 0 ? void 0 : _this$meta_data26.cred_pub_tb_480.resultat_net_src;
        this.formDataToBeWatched.justification_resultat_net_srcg = (_this$meta_data27 = this.meta_data) === null || _this$meta_data27 === void 0 || (_this$meta_data27 = _this$meta_data27.dossier_credit) === null || _this$meta_data27 === void 0 ? void 0 : _this$meta_data27.cred_pub_tb_480.justification_resultat_net;
        this.formDataToBeWatched.autre_revenu_srcg = (_this$meta_data28 = this.meta_data) === null || _this$meta_data28 === void 0 || (_this$meta_data28 = _this$meta_data28.dossier_credit) === null || _this$meta_data28 === void 0 ? void 0 : _this$meta_data28.cred_pub_tb_480.autre_revenu_src;
        this.formDataToBeWatched.justification_autre_revenu_srcg = (_this$meta_data29 = this.meta_data) === null || _this$meta_data29 === void 0 || (_this$meta_data29 = _this$meta_data29.dossier_credit) === null || _this$meta_data29 === void 0 ? void 0 : _this$meta_data29.cred_pub_tb_480.justification_autre_revenu;
        this.formDataToBeWatched.autre_charge_srcg = (_this$meta_data30 = this.meta_data) === null || _this$meta_data30 === void 0 || (_this$meta_data30 = _this$meta_data30.dossier_credit) === null || _this$meta_data30 === void 0 ? void 0 : _this$meta_data30.cred_pub_tb_480.autre_charge_src;
        this.formDataToBeWatched.justification_autre_charge_srcg = (_this$meta_data31 = this.meta_data) === null || _this$meta_data31 === void 0 || (_this$meta_data31 = _this$meta_data31.dossier_credit) === null || _this$meta_data31 === void 0 ? void 0 : _this$meta_data31.cred_pub_tb_480.justification_autre_charge;
        this.formDataToBeWatched.charge_familiale_srcg = (_this$meta_data32 = this.meta_data) === null || _this$meta_data32 === void 0 || (_this$meta_data32 = _this$meta_data32.dossier_credit) === null || _this$meta_data32 === void 0 ? void 0 : _this$meta_data32.cred_pub_tb_480.charge_familiale_src;
        this.formDataToBeWatched.justification_charge_familiale_srcg = (_this$meta_data33 = this.meta_data) === null || _this$meta_data33 === void 0 || (_this$meta_data33 = _this$meta_data33.dossier_credit) === null || _this$meta_data33 === void 0 ? void 0 : _this$meta_data33.cred_pub_tb_480.justification_charge_familiale;
        this.formDataToBeWatched.capacite_autofinancement_srcg = (_this$meta_data34 = this.meta_data) === null || _this$meta_data34 === void 0 || (_this$meta_data34 = _this$meta_data34.dossier_credit) === null || _this$meta_data34 === void 0 ? void 0 : _this$meta_data34.cred_pub_tb_480.capacite_autofinancement_src;
        this.formDataToBeWatched.justification_capacite_auto_srcg = (_this$meta_data35 = this.meta_data) === null || _this$meta_data35 === void 0 || (_this$meta_data35 = _this$meta_data35.dossier_credit) === null || _this$meta_data35 === void 0 ? void 0 : _this$meta_data35.cred_pub_tb_480.justification_capacite_auto;
        this.formDataToBeWatched.montant_credit_srcg = (_this$meta_data36 = this.meta_data) === null || _this$meta_data36 === void 0 || (_this$meta_data36 = _this$meta_data36.dossier_credit) === null || _this$meta_data36 === void 0 ? void 0 : _this$meta_data36.cred_pub_tb_480.montant_credit_src;
        this.formDataToBeWatched.justification_capacite_montant_propose_srcg = (_this$meta_data37 = this.meta_data) === null || _this$meta_data37 === void 0 || (_this$meta_data37 = _this$meta_data37.dossier_credit) === null || _this$meta_data37 === void 0 ? void 0 : _this$meta_data37.cred_pub_tb_480.justification_capacite_montant_propose;
        this.formDataToBeWatched.montant_echeance_credit_srcg = (_this$meta_data38 = this.meta_data) === null || _this$meta_data38 === void 0 || (_this$meta_data38 = _this$meta_data38.dossier_credit) === null || _this$meta_data38 === void 0 ? void 0 : _this$meta_data38.cred_pub_tb_480.montant_echeance_credit_src;
        this.formDataToBeWatched.justification_capacite_montant_echeance_srcg = (_this$meta_data39 = this.meta_data) === null || _this$meta_data39 === void 0 || (_this$meta_data39 = _this$meta_data39.dossier_credit) === null || _this$meta_data39 === void 0 ? void 0 : _this$meta_data39.cred_pub_tb_480.justification_capacite_montant_echeance;
        this.formDataToBeWatched.tresorerie_srcg = (_this$meta_data40 = this.meta_data) === null || _this$meta_data40 === void 0 || (_this$meta_data40 = _this$meta_data40.dossier_credit) === null || _this$meta_data40 === void 0 ? void 0 : _this$meta_data40.cred_pub_tb_480.tresorerie_src;
        this.formDataToBeWatched.justification_capacite_tresorerie_srcg = (_this$meta_data41 = this.meta_data) === null || _this$meta_data41 === void 0 || (_this$meta_data41 = _this$meta_data41.dossier_credit) === null || _this$meta_data41 === void 0 ? void 0 : _this$meta_data41.cred_pub_tb_480.justification_capacite_tresorerie;
        this.formDataToBeWatched.taux_endettement_srcg = (_this$meta_data42 = this.meta_data) === null || _this$meta_data42 === void 0 || (_this$meta_data42 = _this$meta_data42.dossier_credit) === null || _this$meta_data42 === void 0 ? void 0 : _this$meta_data42.cred_pub_tb_480.taux_endettement_src;
        this.formDataToBeWatched.justification_taux_srcg = (_this$meta_data43 = this.meta_data) === null || _this$meta_data43 === void 0 || (_this$meta_data43 = _this$meta_data43.dossier_credit) === null || _this$meta_data43 === void 0 ? void 0 : _this$meta_data43.cred_pub_tb_480.justification_taux;
        this.formDataToBeWatched.quantite_analyse_effectuee_analyse_srcg = (_this$meta_data44 = this.meta_data) === null || _this$meta_data44 === void 0 || (_this$meta_data44 = _this$meta_data44.dossier_credit) === null || _this$meta_data44 === void 0 ? void 0 : _this$meta_data44.cred_pub_tb_480.quantite_analyse_effectuee_analyse;
        this.formDataToBeWatched.quantite_analyse_effectuee_avis_srcg = (_this$meta_data45 = this.meta_data) === null || _this$meta_data45 === void 0 || (_this$meta_data45 = _this$meta_data45.dossier_credit) === null || _this$meta_data45 === void 0 ? void 0 : _this$meta_data45.cred_pub_tb_480.quantite_analyse_effectuee_avis_src;
        this.formDataToBeWatched.capacite_paiement_analyse_srcg = (_this$meta_data46 = this.meta_data) === null || _this$meta_data46 === void 0 || (_this$meta_data46 = _this$meta_data46.dossier_credit) === null || _this$meta_data46 === void 0 ? void 0 : _this$meta_data46.cred_pub_tb_480.capacite_paiement_analyse;
        this.formDataToBeWatched.capacite_paiement_avis_srcg = (_this$meta_data47 = this.meta_data) === null || _this$meta_data47 === void 0 || (_this$meta_data47 = _this$meta_data47.dossier_credit) === null || _this$meta_data47 === void 0 ? void 0 : _this$meta_data47.cred_pub_tb_480.capacite_paiement_avis_src;
        this.formDataToBeWatched.garantie_analyse_srcg = (_this$meta_data48 = this.meta_data) === null || _this$meta_data48 === void 0 || (_this$meta_data48 = _this$meta_data48.dossier_credit) === null || _this$meta_data48 === void 0 ? void 0 : _this$meta_data48.cred_pub_tb_480.garantie_analyse;
        this.formDataToBeWatched.garantie_avis_srcg = (_this$meta_data49 = this.meta_data) === null || _this$meta_data49 === void 0 || (_this$meta_data49 = _this$meta_data49.dossier_credit) === null || _this$meta_data49 === void 0 ? void 0 : _this$meta_data49.cred_pub_tb_480.garantie_avis_src;
        this.formDataToBeWatched.implication_client_analyse_srcg = (_this$meta_data50 = this.meta_data) === null || _this$meta_data50 === void 0 || (_this$meta_data50 = _this$meta_data50.dossier_credit) === null || _this$meta_data50 === void 0 ? void 0 : _this$meta_data50.cred_pub_tb_480.implication_client_analyse;
        this.formDataToBeWatched.implication_client_avis_srcg = (_this$meta_data51 = this.meta_data) === null || _this$meta_data51 === void 0 || (_this$meta_data51 = _this$meta_data51.dossier_credit) === null || _this$meta_data51 === void 0 ? void 0 : _this$meta_data51.cred_pub_tb_480.implication_client_avis_src;
        this.formDataToBeWatched.avis_appreciation_risque_commerciale_src = (_this$meta_data52 = this.meta_data) === null || _this$meta_data52 === void 0 || (_this$meta_data52 = _this$meta_data52.dossier_credit) === null || _this$meta_data52 === void 0 ? void 0 : _this$meta_data52.cred_pub_tb_480.avis_appreciation_risque_commerciale_src;
        this.formDataToBeWatched.condition_additionnelles_avant_decaissement = (_this$meta_data$dossi14 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi14 === void 0 || (_this$meta_data$dossi14 = _this$meta_data$dossi14.cred_pub_tb_480) === null || _this$meta_data$dossi14 === void 0 ? void 0 : _this$meta_data$dossi14.condition_additionnelles_avant_decaissement;
        this.formDataToBeWatched.condition_additionnelles_apres_decaissement = (_this$meta_data$dossi15 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi15 === void 0 || (_this$meta_data$dossi15 = _this$meta_data$dossi15.cred_pub_tb_480) === null || _this$meta_data$dossi15 === void 0 ? void 0 : _this$meta_data$dossi15.condition_additionnelles_apres_decaissement;

        // for bilan 
        // if(this.meta_data?.dossier_credit?.cred_pub_tb_480 != undefined){

        // }else if(this.meta_data?.dossier_credit?.cred_pub_tb_48){

        // }
        this.formDataToBeWatched.tresorerie_espece_srcg = (_this$meta_data53 = this.meta_data) === null || _this$meta_data53 === void 0 || (_this$meta_data53 = _this$meta_data53.dossier_credit) === null || _this$meta_data53 === void 0 || (_this$meta_data53 = _this$meta_data53.cred_pub_tb_480) === null || _this$meta_data53 === void 0 ? void 0 : _this$meta_data53.tresorerie_espece_propo_analyste;
        this.formDataToBeWatched.creance_acompte_srcg = (_this$meta_data54 = this.meta_data) === null || _this$meta_data54 === void 0 || (_this$meta_data54 = _this$meta_data54.dossier_credit) === null || _this$meta_data54 === void 0 || (_this$meta_data54 = _this$meta_data54.cred_pub_tb_480) === null || _this$meta_data54 === void 0 ? void 0 : _this$meta_data54.creance_acompte_propose;
        this.formDataToBeWatched.stock_srcg = (_this$meta_data55 = this.meta_data) === null || _this$meta_data55 === void 0 || (_this$meta_data55 = _this$meta_data55.dossier_credit) === null || _this$meta_data55 === void 0 || (_this$meta_data55 = _this$meta_data55.cred_pub_tb_480) === null || _this$meta_data55 === void 0 ? void 0 : _this$meta_data55.stock_propose;
        this.formDataToBeWatched.immobilisation_srcg = (_this$meta_data56 = this.meta_data) === null || _this$meta_data56 === void 0 || (_this$meta_data56 = _this$meta_data56.dossier_credit) === null || _this$meta_data56 === void 0 || (_this$meta_data56 = _this$meta_data56.cred_pub_tb_480) === null || _this$meta_data56 === void 0 ? void 0 : _this$meta_data56.immobilisation_propose;
        this.formDataToBeWatched.passif_ope_srcg = (_this$meta_data57 = this.meta_data) === null || _this$meta_data57 === void 0 || (_this$meta_data57 = _this$meta_data57.dossier_credit) === null || _this$meta_data57 === void 0 || (_this$meta_data57 = _this$meta_data57.cred_pub_tb_480) === null || _this$meta_data57 === void 0 ? void 0 : _this$meta_data57.passif_ope_propose;
        this.formDataToBeWatched.passifs_fin_srcg = (_this$meta_data58 = this.meta_data) === null || _this$meta_data58 === void 0 || (_this$meta_data58 = _this$meta_data58.dossier_credit) === null || _this$meta_data58 === void 0 || (_this$meta_data58 = _this$meta_data58.cred_pub_tb_480) === null || _this$meta_data58 === void 0 ? void 0 : _this$meta_data58.passifs_fin_propose;
        // end bilan 
      }
      if (lentb.length > 0) {
        var _this$meta_data$dossi16;
        if (this.meta_data["dossier_credit"][createdKey] != undefined) {
          this.formDataToBeWatched = this.meta_data["dossier_credit"][createdKey];

          // this.appreciation_organisation_src = this.meta_data?.dossier_credit?.cred_pub_tb_480?.appreciation_organisation_src
          // this.appreciation_organisation_arcg = this.meta_data?.dossier_credit?.cred_pub_tb_048?.appreciation_organisation
          // this.appreciation_autre_risque_src = this.meta_data?.dossier_credit?.cred_pub_tb_480?.appreciation_autre_risque_src
          // this.appreciation_autre_risque_arcg = this.meta_data?.dossier_credit?.cred_pub_tb_048?.appreciation_autre_risque

          // this.appreciation_risque_commerciale_srcf= this.meta_data?.dossier_credit?.cred_pub_tb_480?.appreciation_risque_commerciale_src
          // this.appreciation_risque_commerciale_arcg = this.meta_data?.dossier_credit?.cred_pub_tb_048?.appreciation_risque_commerciale

          this.meta_data["dossier_credit"][createdKey];
          if (this.meta_data["dossier_credit"][createdKey]["condition_additionnelles_avant_decaissement"] != "") {
            this.condition_additionnelles_avant_decaissement = this.meta_data["dossier_credit"][createdKey]["condition_additionnelles_avant_decaissement"];
          }
          if (this.meta_data["dossier_credit"][createdKey]["condition_additionnelles_apres_decaissement"] != "") {
            this.condition_additionnelles_apres_decaissement = this.meta_data["dossier_credit"][createdKey]["condition_additionnelles_apres_decaissement"];
          }
        }

        // Close table by default
        this.defaultRetract(false, (_this$meta_data$dossi16 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi16 === void 0 ? void 0 : _this$meta_data$dossi16.applied_templ_id);
      }
    },
    // loadRetrieved() {
    //     let lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
    //     let createdKey = this.tb_name;
    //     let createdKeyArr = createdKey.split("tb");
    //     createdKey = "cred_pub_tb_" + createdKeyArr[1];
    //     if (lentb.length > 0) {
    //         if (this.meta_data["dossier_credit"][createdKey] != undefined) {
    //             this.formDataToBeWatched =
    //                 this.meta_data["dossier_credit"][createdKey];
    //         }
    //     }
    // },
    setTbVal: function setTbVal(val) {
      this.cred_pub_key = val;
    },
    loadWithError: function loadWithError(err) {
      // window.location.href = "/login";
    },
    loadFindIndexByObjForBilan: function loadFindIndexByObjForBilan(label, tab) {
      if (!['', null, undefined].includes(tab)) {
        return tab === null || tab === void 0 ? void 0 : tab.findIndex(function (el) {
          return el.label === label;
        });
      }
      return -1;
    },
    loadIncommingData: function loadIncommingData() {
      var _this$meta_data$dossi17, _this$meta_data$dossi18, _this$meta_data59, _this$meta_data$dossi21, _this$meta_data$dossi22, _this$meta_data$dossi23, _this$meta_data$dossi24, _this$meta_data$dossi25, _this$meta_data$dossi26, _this$meta_data$dossi27, _this$meta_data$dossi28, _this$meta_data$dossi29, _this$meta_data$dossi30, _this$meta_data$dossi31, _this$meta_data$dossi32, _this$meta_data$dossi33, _this$meta_data$dossi34, _this$meta_data$dossi35, _this$meta_data$dossi36, _this$meta_data$dossi37, _this$meta_data$dossi38, _this$meta_data$dossi39, _this$meta_data$dossi40, _this$meta_data$dossi41, _this$meta_data$dossi42, _this$meta_data$dossi43, _this$meta_data$dossi44, _this$meta_data$dossi45, _this$meta_data$dossi46, _this$meta_data$dossi47, _this$meta_data$dossi48, _this$meta_data$dossi49, _this$meta_data$dossi50, _this$meta_data$dossi51, _this$meta_data$dossi52, _this$meta_data$dossi53, _this$meta_data$dossi54, _this$meta_data$dossi55, _this$meta_data$dossi56, _this$meta_data$dossi57, _this$meta_data$dossi58, _this$meta_data$dossi59, _this$meta_data$dossi60, _this$meta_data$dossi61, _this$meta_data$dossi62, _this$meta_data$dossi63, _this$meta_data$dossi64, _this$meta_data$dossi65, _this$meta_data$dossi66, _this$meta_data$dossi67, _this$meta_data$dossi68, _this$meta_data$dossi69, _this$meta_data$dossi70, _this$meta_data$dossi71, _this$meta_data$dossi72, _this$meta_data$dossi73, _this$meta_data$dossi74, _this$meta_data$dossi75, _this$meta_data$dossi76, _this$meta_data$dossi77, _this$meta_data$dossi78, _this$meta_data$dossi79, _this$meta_data$dossi80, _this$meta_data$dossi81, _this$meta_data$dossi82, _this$meta_data$dossi83, _this$meta_data$dossi84, _this$meta_data$dossi85, _this$meta_data$dossi86, _this$meta_data$dossi87, _this$meta_data$dossi88, _this$meta_data$dossi89, _this$meta_data$dossi90, _this$meta_data$dossi91, _this$meta_data$dossi92, _this$meta_data$dossi93, _this$meta_data$dossi94, _this$meta_data$dossi95, _this$meta_data$dossi96, _this$meta_data$dossi97, _this$meta_data$dossi98, _this$meta_data$dossi99, _this$meta_data$dossi100, _this$meta_data$dossi101, _this$meta_data$dossi102, _this$meta_data$dossi103, _this$meta_data$dossi104, _this$meta_data$dossi105, _this$meta_data$dossi106, _this$meta_data$dossi107, _this$meta_data$dossi108, _this$meta_data$dossi109, _this$meta_data$dossi110, _this$meta_data$dossi111, _this$meta_data$dossi112, _this$meta_data$dossi113, _this$meta_data$dossi114, _this$meta_data$dossi115, _this$meta_data$dossi116, _this$meta_data$dossi117, _this$meta_data$dossi118, _this$meta_data$dossi119, _this$meta_data$dossi120, _this$meta_data$dossi121, _this$meta_data$dossi122, _this$meta_data$dossi123, _this$meta_data$dossi124, _this$meta_data$dossi125, _this$meta_data$dossi126, _this$meta_data$dossi127, _this$meta_data$dossi128, _this$meta_data$dossi129, _this$meta_data$dossi130, _this$meta_data$dossi131, _this$meta_data$dossi132, _this$meta_data$dossi133, _this$meta_data$dossi134, _this$meta_data$dossi135, _this$meta_data$dossi136, _this$meta_data$dossi137, _this$meta_data$dossi138;
      var remote_bilan_actif = (_this$meta_data$dossi17 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi17 === void 0 || (_this$meta_data$dossi17 = _this$meta_data$dossi17.cred_pub_tb_12) === null || _this$meta_data$dossi17 === void 0 ? void 0 : _this$meta_data$dossi17.actifs;
      var remote_bilan_passif = (_this$meta_data$dossi18 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi18 === void 0 || (_this$meta_data$dossi18 = _this$meta_data$dossi18.cred_pub_tb_12) === null || _this$meta_data$dossi18 === void 0 ? void 0 : _this$meta_data$dossi18.passifs;
      var cred_tb_13_ = "cred_pub_tb_13";
      var cred_tb_12_ = "cred_pub_tb_12";
      if (['Retail BF (Burkina Faso)'].includes((_this$meta_data59 = this.meta_data) === null || _this$meta_data59 === void 0 || (_this$meta_data59 = _this$meta_data59.dossier_credit) === null || _this$meta_data59 === void 0 ? void 0 : _this$meta_data59.applied_templ_name)) {
        var _this$meta_data$dossi19, _this$meta_data$dossi20;
        // ['BFR (Fonds de Roulement)', 'Investissement', 'Vide'].includes(dossier_credit?.applied_templ_name)
        cred_tb_13_ = "cred_pub_tb_16107";
        cred_tb_12_ = "cred_pub_tb_16106";
        remote_bilan_actif = (_this$meta_data$dossi19 = this.meta_data['dossier_credit']["cred_pub_tb_16106"]) === null || _this$meta_data$dossi19 === void 0 ? void 0 : _this$meta_data$dossi19.actifs;
        remote_bilan_passif = (_this$meta_data$dossi20 = this.meta_data['dossier_credit']["cred_pub_tb_16106"]) === null || _this$meta_data$dossi20 === void 0 ? void 0 : _this$meta_data$dossi20.passifs;
      }
      this.chiffre_affaire_caf = (_this$meta_data$dossi21 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi21 === void 0 || (_this$meta_data$dossi21 = _this$meta_data$dossi21[cred_tb_13_]) === null || _this$meta_data$dossi21 === void 0 || (_this$meta_data$dossi21 = _this$meta_data$dossi21.benefices_pertes[this.label_keys[0]]) === null || _this$meta_data$dossi21 === void 0 ? void 0 : _this$meta_data$dossi21.montant_c;
      this.cout_achat_caf = (_this$meta_data$dossi22 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi22 === void 0 || (_this$meta_data$dossi22 = _this$meta_data$dossi22[cred_tb_13_]) === null || _this$meta_data$dossi22 === void 0 || (_this$meta_data$dossi22 = _this$meta_data$dossi22.benefices_pertes[this.label_keys[1]]) === null || _this$meta_data$dossi22 === void 0 ? void 0 : _this$meta_data$dossi22.montant_c;
      this.marge_commerciale_caf = this.calculMargeCom();
      this.charge_exploitation_caf = (_this$meta_data$dossi23 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi23 === void 0 || (_this$meta_data$dossi23 = _this$meta_data$dossi23[cred_tb_13_]) === null || _this$meta_data$dossi23 === void 0 || (_this$meta_data$dossi23 = _this$meta_data$dossi23.benefices_pertes[this.label_keys[2]]) === null || _this$meta_data$dossi23 === void 0 ? void 0 : _this$meta_data$dossi23.montant_c;
      this.resultat_net_caf = (_this$meta_data$dossi24 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi24 === void 0 || (_this$meta_data$dossi24 = _this$meta_data$dossi24[cred_tb_13_]) === null || _this$meta_data$dossi24 === void 0 || (_this$meta_data$dossi24 = _this$meta_data$dossi24.benefices_pertes[this.label_keys[3]]) === null || _this$meta_data$dossi24 === void 0 ? void 0 : _this$meta_data$dossi24.montant_c;
      this.autre_revenu_caf = (_this$meta_data$dossi25 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi25 === void 0 || (_this$meta_data$dossi25 = _this$meta_data$dossi25[cred_tb_13_]) === null || _this$meta_data$dossi25 === void 0 || (_this$meta_data$dossi25 = _this$meta_data$dossi25.benefices_pertes[this.label_keys[4]]) === null || _this$meta_data$dossi25 === void 0 ? void 0 : _this$meta_data$dossi25.montant_c;
      this.autre_charge_caf = (_this$meta_data$dossi26 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi26 === void 0 || (_this$meta_data$dossi26 = _this$meta_data$dossi26[cred_tb_13_]) === null || _this$meta_data$dossi26 === void 0 || (_this$meta_data$dossi26 = _this$meta_data$dossi26.benefices_pertes[this.label_keys[6]]) === null || _this$meta_data$dossi26 === void 0 ? void 0 : _this$meta_data$dossi26.montant_c;
      this.charge_familiale_caf = (_this$meta_data$dossi27 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi27 === void 0 || (_this$meta_data$dossi27 = _this$meta_data$dossi27[cred_tb_13_]) === null || _this$meta_data$dossi27 === void 0 || (_this$meta_data$dossi27 = _this$meta_data$dossi27.benefices_pertes[this.label_keys[5]]) === null || _this$meta_data$dossi27 === void 0 ? void 0 : _this$meta_data$dossi27.montant_c;
      this.capacite_autofinancement_caf = this.capaciteAutoFinancementCaf();
      this.montant_credit_caf = (_this$meta_data$dossi28 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi28 === void 0 || (_this$meta_data$dossi28 = _this$meta_data$dossi28.cred_pub_tb_1) === null || _this$meta_data$dossi28 === void 0 ? void 0 : _this$meta_data$dossi28.montant_credit;
      this.montant_echeance_credit_caf = (_this$meta_data$dossi29 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi29 === void 0 || (_this$meta_data$dossi29 = _this$meta_data$dossi29[this.determineCredPubTables((_this$meta_data$dossi30 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi30 === void 0 ? void 0 : _this$meta_data$dossi30.applied_templ_name)[1]]) === null || _this$meta_data$dossi29 === void 0 ? void 0 : _this$meta_data$dossi29.echeance.echeance;
      this.tresorerie_caf = (_this$meta_data$dossi31 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi31 === void 0 || (_this$meta_data$dossi31 = _this$meta_data$dossi31[cred_tb_12_]) === null || _this$meta_data$dossi31 === void 0 ? void 0 : _this$meta_data$dossi31.actifs[0].montant_c;
      // console.log('tresorerie_caf',this.meta_data["dossier_credit"]?.cred_tb_12_?.actifs[0].montant_c)
      this.taux_endettement_caf = this.convertNumber(this.montant_echeance_credit_caf) / this.convertNumber(this.capacite_autofinancement_caf);
      // console.log('of',this.taux_endettement_caf )
      this.chiffre_affaire_arc = (_this$meta_data$dossi32 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi32 === void 0 || (_this$meta_data$dossi32 = _this$meta_data$dossi32.cred_pub_tb_48) === null || _this$meta_data$dossi32 === void 0 ? void 0 : _this$meta_data$dossi32.chiffre_affaire_propo_analyste;
      this.cout_achat_arc = (_this$meta_data$dossi33 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi33 === void 0 || (_this$meta_data$dossi33 = _this$meta_data$dossi33.cred_pub_tb_48) === null || _this$meta_data$dossi33 === void 0 ? void 0 : _this$meta_data$dossi33.cout_achat_propose;
      this.marge_commerciale_arc = (_this$meta_data$dossi34 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi34 === void 0 || (_this$meta_data$dossi34 = _this$meta_data$dossi34.cred_pub_tb_48) === null || _this$meta_data$dossi34 === void 0 ? void 0 : _this$meta_data$dossi34.marge_commerciale_propose;
      this.charge_exploitation_arc = (_this$meta_data$dossi35 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi35 === void 0 || (_this$meta_data$dossi35 = _this$meta_data$dossi35.cred_pub_tb_48) === null || _this$meta_data$dossi35 === void 0 ? void 0 : _this$meta_data$dossi35.charge_exploitation_propose;
      this.resultat_net_arc = (_this$meta_data$dossi36 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi36 === void 0 || (_this$meta_data$dossi36 = _this$meta_data$dossi36.cred_pub_tb_48) === null || _this$meta_data$dossi36 === void 0 ? void 0 : _this$meta_data$dossi36.resultat_net_propose;
      this.autre_revenu_arc = (_this$meta_data$dossi37 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi37 === void 0 || (_this$meta_data$dossi37 = _this$meta_data$dossi37.cred_pub_tb_48) === null || _this$meta_data$dossi37 === void 0 ? void 0 : _this$meta_data$dossi37.autre_revenu_propose;
      this.autre_charge_arc = (_this$meta_data$dossi38 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi38 === void 0 || (_this$meta_data$dossi38 = _this$meta_data$dossi38.cred_pub_tb_48) === null || _this$meta_data$dossi38 === void 0 ? void 0 : _this$meta_data$dossi38.autre_charge_propose;
      this.charge_familiale_arc = (_this$meta_data$dossi39 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi39 === void 0 || (_this$meta_data$dossi39 = _this$meta_data$dossi39.cred_pub_tb_48) === null || _this$meta_data$dossi39 === void 0 ? void 0 : _this$meta_data$dossi39.charge_familiale_propose;
      this.capacite_autofinancement_arc = (_this$meta_data$dossi40 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi40 === void 0 || (_this$meta_data$dossi40 = _this$meta_data$dossi40.cred_pub_tb_48) === null || _this$meta_data$dossi40 === void 0 ? void 0 : _this$meta_data$dossi40.capacite_autofinancement_propose;
      this.montant_credit_arc = (_this$meta_data$dossi41 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi41 === void 0 || (_this$meta_data$dossi41 = _this$meta_data$dossi41.cred_pub_tb_48) === null || _this$meta_data$dossi41 === void 0 ? void 0 : _this$meta_data$dossi41.montant_credit_propose;
      this.montant_echeance_credit_arc = (_this$meta_data$dossi42 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi42 === void 0 || (_this$meta_data$dossi42 = _this$meta_data$dossi42.cred_pub_tb_48) === null || _this$meta_data$dossi42 === void 0 ? void 0 : _this$meta_data$dossi42.montant_echeance_credit_propose;
      this.tresorerie_arc = (_this$meta_data$dossi43 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi43 === void 0 || (_this$meta_data$dossi43 = _this$meta_data$dossi43.cred_pub_tb_48) === null || _this$meta_data$dossi43 === void 0 ? void 0 : _this$meta_data$dossi43.tresorerie_propose;
      // console.log('tresorerie_arc',this.meta_data["dossier_credit"]?.cred_pub_tb_48?.actifs[0].montant_c)
      this.taux_endettement_arc = this.convertNumber(this.montant_echeance_credit_arc) / this.convertNumber(this.capacite_autofinancement_arc);
      // console.log('of',this.taux_endettement_arc )

      this.chiffre_affaire_src = (_this$meta_data$dossi44 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi44 === void 0 || (_this$meta_data$dossi44 = _this$meta_data$dossi44.cred_pub_tb_480) === null || _this$meta_data$dossi44 === void 0 ? void 0 : _this$meta_data$dossi44.chiffre_affaire_src;
      this.justification_chiffre_affaire = (_this$meta_data$dossi45 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi45 === void 0 || (_this$meta_data$dossi45 = _this$meta_data$dossi45.cred_pub_tb_480) === null || _this$meta_data$dossi45 === void 0 ? void 0 : _this$meta_data$dossi45.justification_chiffre_affaire;
      this.chiffre_affaire_arcg = (_this$meta_data$dossi46 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi46 === void 0 || (_this$meta_data$dossi46 = _this$meta_data$dossi46.cred_pub_tb_048) === null || _this$meta_data$dossi46 === void 0 ? void 0 : _this$meta_data$dossi46.chiffre_affaire_propo_analyste;
      this.justification_chiffre_affaire_arcg = (_this$meta_data$dossi47 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi47 === void 0 || (_this$meta_data$dossi47 = _this$meta_data$dossi47.cred_pub_tb_048) === null || _this$meta_data$dossi47 === void 0 ? void 0 : _this$meta_data$dossi47.justification_chiffre_affaire;
      this.cout_achat_arcg = (_this$meta_data$dossi48 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi48 === void 0 || (_this$meta_data$dossi48 = _this$meta_data$dossi48.cred_pub_tb_048) === null || _this$meta_data$dossi48 === void 0 ? void 0 : _this$meta_data$dossi48.cout_achat_propose;
      this.justification_cout_achat_arcg = (_this$meta_data$dossi49 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi49 === void 0 || (_this$meta_data$dossi49 = _this$meta_data$dossi49.cred_pub_tb_048) === null || _this$meta_data$dossi49 === void 0 ? void 0 : _this$meta_data$dossi49.justification_cout_achat;
      this.marge_commerciale_arcg = (_this$meta_data$dossi50 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi50 === void 0 || (_this$meta_data$dossi50 = _this$meta_data$dossi50.cred_pub_tb_048) === null || _this$meta_data$dossi50 === void 0 ? void 0 : _this$meta_data$dossi50.marge_commerciale_propose;
      this.justification_marge_commerciale_arcg = (_this$meta_data$dossi51 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi51 === void 0 || (_this$meta_data$dossi51 = _this$meta_data$dossi51.cred_pub_tb_048) === null || _this$meta_data$dossi51 === void 0 ? void 0 : _this$meta_data$dossi51.justification_marge_commerciale;
      this.charge_exploitation_arcg = (_this$meta_data$dossi52 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi52 === void 0 || (_this$meta_data$dossi52 = _this$meta_data$dossi52.cred_pub_tb_048) === null || _this$meta_data$dossi52 === void 0 ? void 0 : _this$meta_data$dossi52.charge_exploitation_propose;
      this.justification_charge_exploitation_arcg = (_this$meta_data$dossi53 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi53 === void 0 || (_this$meta_data$dossi53 = _this$meta_data$dossi53.cred_pub_tb_048) === null || _this$meta_data$dossi53 === void 0 ? void 0 : _this$meta_data$dossi53.justification_charge_exploitation;
      this.resultat_net_arcg = (_this$meta_data$dossi54 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi54 === void 0 || (_this$meta_data$dossi54 = _this$meta_data$dossi54.cred_pub_tb_048) === null || _this$meta_data$dossi54 === void 0 ? void 0 : _this$meta_data$dossi54.resultat_net_propose;
      this.justification_resultat_net_arcg = (_this$meta_data$dossi55 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi55 === void 0 || (_this$meta_data$dossi55 = _this$meta_data$dossi55.cred_pub_tb_048) === null || _this$meta_data$dossi55 === void 0 ? void 0 : _this$meta_data$dossi55.justification_resultat_net;
      this.autre_revenu_arcg = (_this$meta_data$dossi56 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi56 === void 0 || (_this$meta_data$dossi56 = _this$meta_data$dossi56.cred_pub_tb_048) === null || _this$meta_data$dossi56 === void 0 ? void 0 : _this$meta_data$dossi56.autre_revenu_propose;
      this.justification_autre_revenu_arcg = (_this$meta_data$dossi57 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi57 === void 0 || (_this$meta_data$dossi57 = _this$meta_data$dossi57.cred_pub_tb_048) === null || _this$meta_data$dossi57 === void 0 ? void 0 : _this$meta_data$dossi57.justification_autre_revenu;
      this.autre_charge_arcg = (_this$meta_data$dossi58 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi58 === void 0 || (_this$meta_data$dossi58 = _this$meta_data$dossi58.cred_pub_tb_048) === null || _this$meta_data$dossi58 === void 0 ? void 0 : _this$meta_data$dossi58.autre_charge_propose;
      this.justification_autre_charge_arcg = (_this$meta_data$dossi59 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi59 === void 0 || (_this$meta_data$dossi59 = _this$meta_data$dossi59.cred_pub_tb_048) === null || _this$meta_data$dossi59 === void 0 ? void 0 : _this$meta_data$dossi59.justification_autre_charge;
      this.charge_familiale_arcg = (_this$meta_data$dossi60 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi60 === void 0 || (_this$meta_data$dossi60 = _this$meta_data$dossi60.cred_pub_tb_048) === null || _this$meta_data$dossi60 === void 0 ? void 0 : _this$meta_data$dossi60.charge_familiale_propose;
      this.justification_charge_familiale_arcg = (_this$meta_data$dossi61 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi61 === void 0 || (_this$meta_data$dossi61 = _this$meta_data$dossi61.cred_pub_tb_048) === null || _this$meta_data$dossi61 === void 0 ? void 0 : _this$meta_data$dossi61.justification_charge_familiale;
      this.capacite_autofinancement_arcg = (_this$meta_data$dossi62 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi62 === void 0 || (_this$meta_data$dossi62 = _this$meta_data$dossi62.cred_pub_tb_048) === null || _this$meta_data$dossi62 === void 0 ? void 0 : _this$meta_data$dossi62.capacite_autofinancement_propose;
      this.justification_capacite_auto_arcg = (_this$meta_data$dossi63 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi63 === void 0 || (_this$meta_data$dossi63 = _this$meta_data$dossi63.cred_pub_tb_048) === null || _this$meta_data$dossi63 === void 0 ? void 0 : _this$meta_data$dossi63.justification_capacite_auto;
      this.montant_credit_arcg = (_this$meta_data$dossi64 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi64 === void 0 || (_this$meta_data$dossi64 = _this$meta_data$dossi64.cred_pub_tb_048) === null || _this$meta_data$dossi64 === void 0 ? void 0 : _this$meta_data$dossi64.montant_credit_propose;
      this.justification_capacite_montant_propose_arcg = (_this$meta_data$dossi65 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi65 === void 0 || (_this$meta_data$dossi65 = _this$meta_data$dossi65.cred_pub_tb_048) === null || _this$meta_data$dossi65 === void 0 ? void 0 : _this$meta_data$dossi65.justification_capacite_auto;
      this.cout_achat_src = (_this$meta_data$dossi66 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi66 === void 0 || (_this$meta_data$dossi66 = _this$meta_data$dossi66.cred_pub_tb_480) === null || _this$meta_data$dossi66 === void 0 ? void 0 : _this$meta_data$dossi66.cout_achat_src;
      this.justification_cout_achat = (_this$meta_data$dossi67 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi67 === void 0 || (_this$meta_data$dossi67 = _this$meta_data$dossi67.cred_pub_tb_480) === null || _this$meta_data$dossi67 === void 0 ? void 0 : _this$meta_data$dossi67.justification_cout_achat;
      this.marge_commerciale_src = (_this$meta_data$dossi68 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi68 === void 0 || (_this$meta_data$dossi68 = _this$meta_data$dossi68.cred_pub_tb_480) === null || _this$meta_data$dossi68 === void 0 ? void 0 : _this$meta_data$dossi68.marge_commerciale_src;
      this.justification_marge_commerciale = (_this$meta_data$dossi69 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi69 === void 0 || (_this$meta_data$dossi69 = _this$meta_data$dossi69.cred_pub_tb_480) === null || _this$meta_data$dossi69 === void 0 ? void 0 : _this$meta_data$dossi69.justification_marge_commerciale;
      this.charge_exploitation_src = (_this$meta_data$dossi70 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi70 === void 0 || (_this$meta_data$dossi70 = _this$meta_data$dossi70.cred_pub_tb_480) === null || _this$meta_data$dossi70 === void 0 ? void 0 : _this$meta_data$dossi70.charge_exploitation_src;
      this.justification_charge_exploitation = (_this$meta_data$dossi71 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi71 === void 0 || (_this$meta_data$dossi71 = _this$meta_data$dossi71.cred_pub_tb_480) === null || _this$meta_data$dossi71 === void 0 ? void 0 : _this$meta_data$dossi71.justification_charge_exploitation;
      this.resultat_net_src = (_this$meta_data$dossi72 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi72 === void 0 || (_this$meta_data$dossi72 = _this$meta_data$dossi72.cred_pub_tb_480) === null || _this$meta_data$dossi72 === void 0 ? void 0 : _this$meta_data$dossi72.resultat_net_src;
      this.justification_resultat_net = (_this$meta_data$dossi73 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi73 === void 0 || (_this$meta_data$dossi73 = _this$meta_data$dossi73.cred_pub_tb_480) === null || _this$meta_data$dossi73 === void 0 ? void 0 : _this$meta_data$dossi73.justification_resultat_net;
      this.autre_revenu_src = (_this$meta_data$dossi74 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi74 === void 0 || (_this$meta_data$dossi74 = _this$meta_data$dossi74.cred_pub_tb_480) === null || _this$meta_data$dossi74 === void 0 ? void 0 : _this$meta_data$dossi74.resultat_net_src;
      this.justification_autre_revenu = (_this$meta_data$dossi75 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi75 === void 0 || (_this$meta_data$dossi75 = _this$meta_data$dossi75.cred_pub_tb_480) === null || _this$meta_data$dossi75 === void 0 ? void 0 : _this$meta_data$dossi75.justification_resultat_net;
      this.autre_charge_src = (_this$meta_data$dossi76 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi76 === void 0 || (_this$meta_data$dossi76 = _this$meta_data$dossi76.cred_pub_tb_480) === null || _this$meta_data$dossi76 === void 0 ? void 0 : _this$meta_data$dossi76.autre_charge_src;
      this.justification_autre_charge = (_this$meta_data$dossi77 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi77 === void 0 || (_this$meta_data$dossi77 = _this$meta_data$dossi77.cred_pub_tb_480) === null || _this$meta_data$dossi77 === void 0 ? void 0 : _this$meta_data$dossi77.justification_autre_charge;
      this.charge_familiale_src = (_this$meta_data$dossi78 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi78 === void 0 || (_this$meta_data$dossi78 = _this$meta_data$dossi78.cred_pub_tb_480) === null || _this$meta_data$dossi78 === void 0 ? void 0 : _this$meta_data$dossi78.charge_familiale_src;
      this.justification_charge_familiale = (_this$meta_data$dossi79 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi79 === void 0 || (_this$meta_data$dossi79 = _this$meta_data$dossi79.cred_pub_tb_480) === null || _this$meta_data$dossi79 === void 0 ? void 0 : _this$meta_data$dossi79.justification_charge_familiale;
      this.capacite_autofinancement_src = (_this$meta_data$dossi80 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi80 === void 0 || (_this$meta_data$dossi80 = _this$meta_data$dossi80.cred_pub_tb_480) === null || _this$meta_data$dossi80 === void 0 ? void 0 : _this$meta_data$dossi80.capacite_autofinancement_src;
      this.justification_capacite_auto = (_this$meta_data$dossi81 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi81 === void 0 || (_this$meta_data$dossi81 = _this$meta_data$dossi81.cred_pub_tb_480) === null || _this$meta_data$dossi81 === void 0 ? void 0 : _this$meta_data$dossi81.justification_capacite_auto;
      this.montant_credit_src = (_this$meta_data$dossi82 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi82 === void 0 || (_this$meta_data$dossi82 = _this$meta_data$dossi82.cred_pub_tb_480) === null || _this$meta_data$dossi82 === void 0 ? void 0 : _this$meta_data$dossi82.montant_credit_src;
      this.justification_capacite_montant_propose = (_this$meta_data$dossi83 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi83 === void 0 || (_this$meta_data$dossi83 = _this$meta_data$dossi83.cred_pub_tb_480) === null || _this$meta_data$dossi83 === void 0 ? void 0 : _this$meta_data$dossi83.justification_capacite_montant_propose;
      this.montant_echeance_credit_src = (_this$meta_data$dossi84 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi84 === void 0 || (_this$meta_data$dossi84 = _this$meta_data$dossi84.cred_pub_tb_480) === null || _this$meta_data$dossi84 === void 0 ? void 0 : _this$meta_data$dossi84.montant_echeance_credit_src;
      this.justification_capacite_montant_echeance = (_this$meta_data$dossi85 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi85 === void 0 || (_this$meta_data$dossi85 = _this$meta_data$dossi85.cred_pub_tb_480) === null || _this$meta_data$dossi85 === void 0 ? void 0 : _this$meta_data$dossi85.justification_capacite_montant_echeance;
      this.tresorerie_src = (_this$meta_data$dossi86 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi86 === void 0 || (_this$meta_data$dossi86 = _this$meta_data$dossi86.cred_pub_tb_480) === null || _this$meta_data$dossi86 === void 0 ? void 0 : _this$meta_data$dossi86.tresorerie_src;
      this.justification_capacite_tresorerie_src = (_this$meta_data$dossi87 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi87 === void 0 || (_this$meta_data$dossi87 = _this$meta_data$dossi87.cred_pub_tb_480) === null || _this$meta_data$dossi87 === void 0 ? void 0 : _this$meta_data$dossi87.justification_capacite_tresorerie;
      this.taux_endettement_src = (_this$meta_data$dossi88 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi88 === void 0 || (_this$meta_data$dossi88 = _this$meta_data$dossi88.cred_pub_tb_480) === null || _this$meta_data$dossi88 === void 0 ? void 0 : _this$meta_data$dossi88.taux_endettement_src;
      this.justification_taux_src = (_this$meta_data$dossi89 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi89 === void 0 || (_this$meta_data$dossi89 = _this$meta_data$dossi89.cred_pub_tb_480) === null || _this$meta_data$dossi89 === void 0 ? void 0 : _this$meta_data$dossi89.justification_taux;
      this.montant_echeance_credit_arcg = (_this$meta_data$dossi90 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi90 === void 0 || (_this$meta_data$dossi90 = _this$meta_data$dossi90.cred_pub_tb_048) === null || _this$meta_data$dossi90 === void 0 ? void 0 : _this$meta_data$dossi90.montant_echeance_credit_propose;
      this.justification_capacite_montant_echeance_arcg = (_this$meta_data$dossi91 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi91 === void 0 || (_this$meta_data$dossi91 = _this$meta_data$dossi91.cred_pub_tb_048) === null || _this$meta_data$dossi91 === void 0 ? void 0 : _this$meta_data$dossi91.justification_capacite_montant_echeance;
      this.tresorerie_arcg = (_this$meta_data$dossi92 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi92 === void 0 || (_this$meta_data$dossi92 = _this$meta_data$dossi92.cred_pub_tb_048) === null || _this$meta_data$dossi92 === void 0 ? void 0 : _this$meta_data$dossi92.tresorerie_propose;
      this.justification_capacite_tresorerie_arcg = (_this$meta_data$dossi93 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi93 === void 0 || (_this$meta_data$dossi93 = _this$meta_data$dossi93.cred_pub_tb_048) === null || _this$meta_data$dossi93 === void 0 ? void 0 : _this$meta_data$dossi93.justification_capacite_tresorerie;
      this.taux_endettement_arcg = (_this$meta_data$dossi94 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi94 === void 0 || (_this$meta_data$dossi94 = _this$meta_data$dossi94.cred_pub_tb_048) === null || _this$meta_data$dossi94 === void 0 ? void 0 : _this$meta_data$dossi94.taux_endettement_propose;
      this.justification_taux_arcg = (_this$meta_data$dossi95 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi95 === void 0 || (_this$meta_data$dossi95 = _this$meta_data$dossi95.cred_pub_tb_048) === null || _this$meta_data$dossi95 === void 0 ? void 0 : _this$meta_data$dossi95.justification_taux;
      this.quantite_analyse_effectuee_analyse = (_this$meta_data$dossi96 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi96 === void 0 || (_this$meta_data$dossi96 = _this$meta_data$dossi96.cred_pub_tb_480) === null || _this$meta_data$dossi96 === void 0 ? void 0 : _this$meta_data$dossi96.quantite_analyse_effectuee_analyse;
      this.quantite_analyse_effectuee_avis_src = (_this$meta_data$dossi97 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi97 === void 0 || (_this$meta_data$dossi97 = _this$meta_data$dossi97.cred_pub_tb_480) === null || _this$meta_data$dossi97 === void 0 ? void 0 : _this$meta_data$dossi97.quantite_analyse_effectuee_avis_src;
      this.capacite_paiement_analyse_src = (_this$meta_data$dossi98 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi98 === void 0 || (_this$meta_data$dossi98 = _this$meta_data$dossi98.cred_pub_tb_480) === null || _this$meta_data$dossi98 === void 0 ? void 0 : _this$meta_data$dossi98.capacite_paiement_analyse;
      this.capacite_paiement_avis_src = (_this$meta_data$dossi99 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi99 === void 0 || (_this$meta_data$dossi99 = _this$meta_data$dossi99.cred_pub_tb_480) === null || _this$meta_data$dossi99 === void 0 ? void 0 : _this$meta_data$dossi99.capacite_paiement_avis_src;
      this.garantie_analyse_src = (_this$meta_data$dossi100 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi100 === void 0 || (_this$meta_data$dossi100 = _this$meta_data$dossi100.cred_pub_tb_480) === null || _this$meta_data$dossi100 === void 0 ? void 0 : _this$meta_data$dossi100.garantie_analyse;
      this.garantie_avis_src = (_this$meta_data$dossi101 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi101 === void 0 || (_this$meta_data$dossi101 = _this$meta_data$dossi101.cred_pub_tb_480) === null || _this$meta_data$dossi101 === void 0 ? void 0 : _this$meta_data$dossi101.garantie_avis_src;
      this.implication_client_analyse_src = (_this$meta_data$dossi102 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi102 === void 0 || (_this$meta_data$dossi102 = _this$meta_data$dossi102.cred_pub_tb_480) === null || _this$meta_data$dossi102 === void 0 ? void 0 : _this$meta_data$dossi102.implication_client_analyse;
      this.implication_client_avis_src = (_this$meta_data$dossi103 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi103 === void 0 || (_this$meta_data$dossi103 = _this$meta_data$dossi103.cred_pub_tb_480) === null || _this$meta_data$dossi103 === void 0 ? void 0 : _this$meta_data$dossi103.implication_client_avis_src;
      this.appreciation_organisation_src = (_this$meta_data$dossi104 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi104 === void 0 || (_this$meta_data$dossi104 = _this$meta_data$dossi104.cred_pub_tb_480) === null || _this$meta_data$dossi104 === void 0 ? void 0 : _this$meta_data$dossi104.appreciation_organisation_src;
      this.appreciation_organisation_arcg = (_this$meta_data$dossi105 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi105 === void 0 || (_this$meta_data$dossi105 = _this$meta_data$dossi105.cred_pub_tb_048) === null || _this$meta_data$dossi105 === void 0 ? void 0 : _this$meta_data$dossi105.appreciation_organisation;
      this.appreciation_autre_risque_src = (_this$meta_data$dossi106 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi106 === void 0 || (_this$meta_data$dossi106 = _this$meta_data$dossi106.cred_pub_tb_480) === null || _this$meta_data$dossi106 === void 0 ? void 0 : _this$meta_data$dossi106.appreciation_autre_risque_src;
      this.appreciation_autre_risque_arcg = (_this$meta_data$dossi107 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi107 === void 0 || (_this$meta_data$dossi107 = _this$meta_data$dossi107.cred_pub_tb_048) === null || _this$meta_data$dossi107 === void 0 ? void 0 : _this$meta_data$dossi107.appreciation_autre_risque;
      this.appreciation_risque_commerciale_srcf = (_this$meta_data$dossi108 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi108 === void 0 || (_this$meta_data$dossi108 = _this$meta_data$dossi108.cred_pub_tb_480) === null || _this$meta_data$dossi108 === void 0 ? void 0 : _this$meta_data$dossi108.appreciation_risque_commerciale_src;
      this.appreciation_risque_commerciale_arcg = (_this$meta_data$dossi109 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi109 === void 0 || (_this$meta_data$dossi109 = _this$meta_data$dossi109.cred_pub_tb_048) === null || _this$meta_data$dossi109 === void 0 ? void 0 : _this$meta_data$dossi109.appreciation_risque_commerciale;
      this.avis_appreciation_organisation_src = (_this$meta_data$dossi110 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi110 === void 0 || (_this$meta_data$dossi110 = _this$meta_data$dossi110.cred_pub_tb_480) === null || _this$meta_data$dossi110 === void 0 ? void 0 : _this$meta_data$dossi110.avis_appreciation_organisation_src;
      this.avis_appreciation_risque_commerciale_srcf = (_this$meta_data$dossi111 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi111 === void 0 || (_this$meta_data$dossi111 = _this$meta_data$dossi111.cred_pub_tb_480) === null || _this$meta_data$dossi111 === void 0 ? void 0 : _this$meta_data$dossi111.avis_appreciation_risque_commerciale_src;
      this.avis_appreciation_autre_risque_srcf = (_this$meta_data$dossi112 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi112 === void 0 || (_this$meta_data$dossi112 = _this$meta_data$dossi112.cred_pub_tb_480) === null || _this$meta_data$dossi112 === void 0 ? void 0 : _this$meta_data$dossi112.avis_appreciation_autre_risque_src;
      this.condition_avant_decaissement = (_this$meta_data$dossi113 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi113 === void 0 || (_this$meta_data$dossi113 = _this$meta_data$dossi113.cred_pub_tb_480) === null || _this$meta_data$dossi113 === void 0 ? void 0 : _this$meta_data$dossi113.condition_additionnelles_avant_decaissement;
      this.condition_apres_decaissement = (_this$meta_data$dossi114 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi114 === void 0 || (_this$meta_data$dossi114 = _this$meta_data$dossi114.cred_pub_tb_480) === null || _this$meta_data$dossi114 === void 0 ? void 0 : _this$meta_data$dossi114.condition_additionnelles_apres_decaissement;

      // for bilan 
      this.tresorerie_espece_caf = (_this$meta_data$dossi115 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi115 === void 0 || (_this$meta_data$dossi115 = _this$meta_data$dossi115[cred_tb_12_]) === null || _this$meta_data$dossi115 === void 0 || (_this$meta_data$dossi115 = _this$meta_data$dossi115.actifs[this.loadFindIndexByObjForBilan("Trésorerie", remote_bilan_actif)]) === null || _this$meta_data$dossi115 === void 0 ? void 0 : _this$meta_data$dossi115.montant_c;
      this.tresorerie_espece_arc = (_this$meta_data$dossi116 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi116 === void 0 || (_this$meta_data$dossi116 = _this$meta_data$dossi116.cred_pub_tb_48) === null || _this$meta_data$dossi116 === void 0 ? void 0 : _this$meta_data$dossi116.tresorerie_espece_propo_analyste;
      this.tresorerie_espece_src = (_this$meta_data$dossi117 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi117 === void 0 || (_this$meta_data$dossi117 = _this$meta_data$dossi117.cred_pub_tb_480) === null || _this$meta_data$dossi117 === void 0 ? void 0 : _this$meta_data$dossi117.tresorerie_espece_propo_analyste;
      this.justification_tresorerie_espece_src = (_this$meta_data$dossi118 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi118 === void 0 || (_this$meta_data$dossi118 = _this$meta_data$dossi118.cred_pub_tb_480) === null || _this$meta_data$dossi118 === void 0 ? void 0 : _this$meta_data$dossi118.justification_tresorerie_espece;
      this.creance_acompte_caf = (_this$meta_data$dossi119 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi119 === void 0 || (_this$meta_data$dossi119 = _this$meta_data$dossi119[cred_tb_12_]) === null || _this$meta_data$dossi119 === void 0 || (_this$meta_data$dossi119 = _this$meta_data$dossi119.actifs[this.loadFindIndexByObjForBilan("Créances", remote_bilan_actif)]) === null || _this$meta_data$dossi119 === void 0 ? void 0 : _this$meta_data$dossi119.montant_c;
      this.creance_acompte_arc = (_this$meta_data$dossi120 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi120 === void 0 || (_this$meta_data$dossi120 = _this$meta_data$dossi120.cred_pub_tb_48) === null || _this$meta_data$dossi120 === void 0 ? void 0 : _this$meta_data$dossi120.creance_acompte_propose;
      this.creance_acompte_src = (_this$meta_data$dossi121 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi121 === void 0 || (_this$meta_data$dossi121 = _this$meta_data$dossi121.cred_pub_tb_480) === null || _this$meta_data$dossi121 === void 0 ? void 0 : _this$meta_data$dossi121.creance_acompte_propose;
      this.justification_creance_acompte_src = (_this$meta_data$dossi122 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi122 === void 0 || (_this$meta_data$dossi122 = _this$meta_data$dossi122.cred_pub_tb_480) === null || _this$meta_data$dossi122 === void 0 ? void 0 : _this$meta_data$dossi122.justification_creance_acompte;
      this.stock_caf = (_this$meta_data$dossi123 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi123 === void 0 || (_this$meta_data$dossi123 = _this$meta_data$dossi123[cred_tb_12_]) === null || _this$meta_data$dossi123 === void 0 || (_this$meta_data$dossi123 = _this$meta_data$dossi123.actifs[this.loadFindIndexByObjForBilan("Stock", remote_bilan_actif)]) === null || _this$meta_data$dossi123 === void 0 ? void 0 : _this$meta_data$dossi123.montant_c;
      this.stock_arc = (_this$meta_data$dossi124 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi124 === void 0 || (_this$meta_data$dossi124 = _this$meta_data$dossi124.cred_pub_tb_48) === null || _this$meta_data$dossi124 === void 0 ? void 0 : _this$meta_data$dossi124.stock_propose;
      this.stock_src = (_this$meta_data$dossi125 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi125 === void 0 || (_this$meta_data$dossi125 = _this$meta_data$dossi125.cred_pub_tb_480) === null || _this$meta_data$dossi125 === void 0 ? void 0 : _this$meta_data$dossi125.stock_propose;
      this.justification_stock_src = (_this$meta_data$dossi126 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi126 === void 0 || (_this$meta_data$dossi126 = _this$meta_data$dossi126.cred_pub_tb_480) === null || _this$meta_data$dossi126 === void 0 ? void 0 : _this$meta_data$dossi126.justification_stock;
      this.immobilisation_caf = (_this$meta_data$dossi127 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi127 === void 0 || (_this$meta_data$dossi127 = _this$meta_data$dossi127[cred_tb_12_]) === null || _this$meta_data$dossi127 === void 0 || (_this$meta_data$dossi127 = _this$meta_data$dossi127.actifs[this.loadFindIndexByObjForBilan("IMMOBILISATIONS TOTALES", remote_bilan_actif)]) === null || _this$meta_data$dossi127 === void 0 ? void 0 : _this$meta_data$dossi127.montant_c;
      this.immobilisation_arc = (_this$meta_data$dossi128 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi128 === void 0 || (_this$meta_data$dossi128 = _this$meta_data$dossi128.cred_pub_tb_48) === null || _this$meta_data$dossi128 === void 0 ? void 0 : _this$meta_data$dossi128.immobilisation_propose;
      this.immobilisation_src = (_this$meta_data$dossi129 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi129 === void 0 || (_this$meta_data$dossi129 = _this$meta_data$dossi129.cred_pub_tb_480) === null || _this$meta_data$dossi129 === void 0 ? void 0 : _this$meta_data$dossi129.immobilisation_propose;
      this.justification_immobilisation_arc = (_this$meta_data$dossi130 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi130 === void 0 || (_this$meta_data$dossi130 = _this$meta_data$dossi130.cred_pub_tb_480) === null || _this$meta_data$dossi130 === void 0 ? void 0 : _this$meta_data$dossi130.justification_immobilisation;
      this.passif_ope_caf = (_this$meta_data$dossi131 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi131 === void 0 || (_this$meta_data$dossi131 = _this$meta_data$dossi131[cred_tb_12_]) === null || _this$meta_data$dossi131 === void 0 || (_this$meta_data$dossi131 = _this$meta_data$dossi131.passifs[this.loadFindIndexByObjForBilan("Dettes opérationnelles à court terme", remote_bilan_passif)]) === null || _this$meta_data$dossi131 === void 0 ? void 0 : _this$meta_data$dossi131.montant_c;
      this.passif_ope_arc = (_this$meta_data$dossi132 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi132 === void 0 || (_this$meta_data$dossi132 = _this$meta_data$dossi132.cred_pub_tb_48) === null || _this$meta_data$dossi132 === void 0 ? void 0 : _this$meta_data$dossi132.passif_ope_propose;
      this.passif_ope_src = (_this$meta_data$dossi133 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi133 === void 0 || (_this$meta_data$dossi133 = _this$meta_data$dossi133.cred_pub_tb_480) === null || _this$meta_data$dossi133 === void 0 ? void 0 : _this$meta_data$dossi133.passif_ope_propose;
      this.justification_passif_ope_src = (_this$meta_data$dossi134 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi134 === void 0 || (_this$meta_data$dossi134 = _this$meta_data$dossi134.cred_pub_tb_480) === null || _this$meta_data$dossi134 === void 0 ? void 0 : _this$meta_data$dossi134.justification_passif_ope;
      this.passifs_fin_caf = (_this$meta_data$dossi135 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi135 === void 0 || (_this$meta_data$dossi135 = _this$meta_data$dossi135[cred_tb_12_]) === null || _this$meta_data$dossi135 === void 0 || (_this$meta_data$dossi135 = _this$meta_data$dossi135.passifs[this.loadFindIndexByObjForBilan("Dettes financières à court terme", remote_bilan_passif)]) === null || _this$meta_data$dossi135 === void 0 ? void 0 : _this$meta_data$dossi135.montant_c;
      this.passifs_fin_arc = (_this$meta_data$dossi136 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi136 === void 0 || (_this$meta_data$dossi136 = _this$meta_data$dossi136.cred_pub_tb_48) === null || _this$meta_data$dossi136 === void 0 ? void 0 : _this$meta_data$dossi136.passifs_fin_propose;
      this.passifs_fin_src = (_this$meta_data$dossi137 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi137 === void 0 || (_this$meta_data$dossi137 = _this$meta_data$dossi137.cred_pub_tb_480) === null || _this$meta_data$dossi137 === void 0 ? void 0 : _this$meta_data$dossi137.passifs_fin_propose;
      this.justification_passifs_fin_src = (_this$meta_data$dossi138 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi138 === void 0 || (_this$meta_data$dossi138 = _this$meta_data$dossi138.cred_pub_tb_480) === null || _this$meta_data$dossi138 === void 0 ? void 0 : _this$meta_data$dossi138.justification_passifs_fin;
      // end bilan 
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
        id: "av3-head"
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
      this.formDataToBeWatched["condition_additionnelles_avant_decaissement"] = this.condition_additionnelles_avant_decaissement;
      this.formDataToBeWatched["condition_additionnelles_apres_decaissement"] = this.condition_additionnelles_apres_decaissement;
      this.formDataToBeWatched["cautions_nouvelles_lignes"] = this.cautions_nouvelles_lignes;
      this.formDataToBeWatched.marge_commerciale_src = this.margeComProp;
      this.formDataToBeWatched.capacite_autofinancement_src = this.capaciteAutoFin;
      this.formDataToBeWatched.taux_endettement_src = this.convertNumber(this.formDataToBeWatched.montant_echeance_credit_src) / this.convertNumber(this.formDataToBeWatched.capacite_autofinancement_src);
      this.formDataToBeWatched.marge_commerciale_srcg = this.margeComSrcg;
      this.formDataToBeWatched.capacite_autofinancement_srcg = this.capaciteAutoFinSrcg;
      this.formDataToBeWatched.taux_endettement_srcg = this.convertNumber(this.formDataToBeWatched.montant_echeance_credit_srcg) / this.convertNumber(this.formDataToBeWatched.capacite_autofinancement_srcg);
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/avisscr/groupe/AV3.vue?vue&type=template&id=27afbc68&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/avisscr/groupe/AV3.vue?vue&type=template&id=27afbc68&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$formDataToBeWatch, _vm$formDataToBeWatch2;
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
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "text",
      id: "chiffre_affaire_src",
      value: _vm.chiffre_affaire_src,
      disabled: ""
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
      value: _vm.justification_chiffre_affaire,
      expression: "justification_chiffre_affaire",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      disabled: "",
      cols: "30",
      rows: "2"
    },
    domProps: {
      value: _vm.justification_chiffre_affaire
    },
    on: {
      change: [function ($event) {
        _vm.justification_chiffre_affaire = $event.target.value;
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_vm._m(5), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control input-box",
    attrs: {
      required: "",
      type: "text",
      id: "chiffre_affaire_srcg",
      value: _vm.formDataToBeWatched.chiffre_affaire_srcg
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
      value: _vm.formDataToBeWatched.justification_chiffre_affaire_srcg,
      expression: "formDataToBeWatched.justification_chiffre_affaire_srcg",
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
      value: _vm.formDataToBeWatched.justification_chiffre_affaire_srcg
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.formDataToBeWatched, "justification_chiffre_affaire_srcg", $event.target.value);
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_vm._m(7), _vm._v(" "), _c("currency-input", {
    attrs: {
      required: "",
      type: "text",
      id: "",
      value: _vm.cout_achat_caf,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_vm._m(8), _vm._v(" "), _c("currency-input", {
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
  }, [_vm._m(9), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "text",
      id: "cout_achat_src",
      disabled: "",
      value: _vm.cout_achat_src
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pl-4"
  }, [_vm._m(10), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.justification_cout_achat,
      expression: "justification_cout_achat",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      disabled: "",
      cols: "30",
      rows: "2"
    },
    domProps: {
      value: _vm.justification_cout_achat
    },
    on: {
      change: [function ($event) {
        _vm.justification_cout_achat = $event.target.value;
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_vm._m(11), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control input-box",
    attrs: {
      required: "",
      type: "text",
      id: "cout_achat_srcg",
      value: _vm.formDataToBeWatched.cout_achat_srcg
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
      value: _vm.formDataToBeWatched.justification_cout_achat_srcg,
      expression: "formDataToBeWatched.justification_cout_achat_srcg",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control input-box",
    attrs: {
      cols: "30",
      rows: "2"
    },
    domProps: {
      value: _vm.formDataToBeWatched.justification_cout_achat_srcg
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.formDataToBeWatched, "justification_cout_achat_srcg", $event.target.value);
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_vm._m(13), _vm._v(" "), _c("currency-input", {
    attrs: {
      required: "",
      type: "text",
      id: "marge_commerciale_caf",
      value: _vm.marge_commerciale_caf,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_vm._m(14), _vm._v(" "), _c("currency-input", {
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
  }, [_vm._m(15), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control",
    attrs: {
      required: "",
      disabled: "",
      type: "text",
      id: "marge_commerciale_src",
      value: _vm.marge_commerciale_src
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
      value: _vm.justification_marge_commerciale,
      expression: "justification_marge_commerciale",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      disabled: "",
      cols: "30",
      rows: "2"
    },
    domProps: {
      value: _vm.justification_marge_commerciale
    },
    on: {
      change: [function ($event) {
        _vm.justification_marge_commerciale = $event.target.value;
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_vm._m(17), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control input-box",
    attrs: {
      required: "",
      type: "text",
      id: "marge_commerciale_srcg",
      value: _vm.formDataToBeWatched.marge_commerciale_srcg
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
      value: _vm.formDataToBeWatched.justification_marge_commerciale_srcg,
      expression: "formDataToBeWatched.justification_marge_commerciale_srcg",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control input-box",
    attrs: {
      cols: "30",
      rows: "2"
    },
    domProps: {
      value: _vm.formDataToBeWatched.justification_marge_commerciale_srcg
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.formDataToBeWatched, "justification_marge_commerciale_srcg", $event.target.value);
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_vm._m(19), _vm._v(" "), _c("currency-input", {
    attrs: {
      disabled: "",
      type: "text",
      id: "",
      value: _vm.charge_exploitation_caf
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_vm._m(20), _vm._v(" "), _c("currency-input", {
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
  }, [_vm._m(21), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control",
    attrs: {
      required: "",
      disabled: "",
      type: "text",
      id: "charge_exploitation_src",
      value: _vm.charge_exploitation_src
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pl-4"
  }, [_vm._m(22), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.justification_charge_exploitation,
      expression: "justification_charge_exploitation",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      disabled: "",
      cols: "30",
      rows: "2"
    },
    domProps: {
      value: _vm.justification_charge_exploitation
    },
    on: {
      change: [function ($event) {
        _vm.justification_charge_exploitation = $event.target.value;
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_vm._m(23), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control input-box",
    attrs: {
      required: "",
      type: "text",
      id: "charge_exploitation_srcg",
      value: _vm.formDataToBeWatched.charge_exploitation_srcg
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
      value: _vm.formDataToBeWatched.justification_charge_exploitation_srcg,
      expression: "formDataToBeWatched.justification_charge_exploitation_srcg",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control input-box",
    attrs: {
      cols: "30",
      rows: "2"
    },
    domProps: {
      value: _vm.formDataToBeWatched.justification_charge_exploitation_srcg
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.formDataToBeWatched, "justification_charge_exploitation_srcg", $event.target.value);
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_vm._m(25), _vm._v(" "), _c("currency-input", {
    attrs: {
      required: "",
      type: "text",
      id: "",
      value: _vm.resultat_net_caf,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_vm._m(26), _vm._v(" "), _c("currency-input", {
    attrs: {
      disabled: "",
      type: "text",
      id: "",
      value: _vm.resultat_net_arc
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_vm._m(27), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control",
    attrs: {
      required: "",
      disabled: "",
      type: "text",
      id: "resultat_net_src",
      value: _vm.resultat_net_src
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
      value: _vm.justification_resultat_net,
      expression: "justification_resultat_net",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      disabled: "",
      cols: "30",
      rows: "2"
    },
    domProps: {
      value: _vm.justification_resultat_net
    },
    on: {
      change: [function ($event) {
        _vm.justification_resultat_net = $event.target.value;
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_vm._m(29), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control input-box",
    attrs: {
      required: "",
      type: "text",
      id: "resultat_net_srcg",
      value: _vm.formDataToBeWatched.resultat_net_srcg
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
      value: _vm.formDataToBeWatched.justification_resultat_net_srcg,
      expression: "formDataToBeWatched.justification_resultat_net_srcg",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control input-box",
    attrs: {
      cols: "30",
      rows: "2"
    },
    domProps: {
      value: _vm.formDataToBeWatched.justification_resultat_net_srcg
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.formDataToBeWatched, "justification_resultat_net_srcg", $event.target.value);
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_vm._m(31), _vm._v(" "), _c("currency-input", {
    attrs: {
      required: "",
      type: "text",
      id: "",
      value: _vm.autre_revenu_caf,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_vm._m(32), _vm._v(" "), _c("currency-input", {
    attrs: {
      required: "",
      type: "text",
      id: "",
      value: _vm.autre_revenu_arc,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_vm._m(33), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "text",
      disabled: "",
      id: "autre_revenu_src",
      value: _vm.autre_revenu_src
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pl-4"
  }, [_vm._m(34), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.justification_autre_revenu,
      expression: "justification_autre_revenu",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      disabled: "",
      cols: "30",
      rows: "2"
    },
    domProps: {
      value: _vm.justification_autre_revenu
    },
    on: {
      change: [function ($event) {
        _vm.justification_autre_revenu = $event.target.value;
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_vm._m(35), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control input-box",
    attrs: {
      required: "",
      type: "text",
      id: "autre_revenu_srcg",
      value: _vm.formDataToBeWatched.autre_revenu_srcg
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
      value: _vm.formDataToBeWatched.justification_autre_revenu_srcg,
      expression: "formDataToBeWatched.justification_autre_revenu_srcg",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control input-box",
    attrs: {
      cols: "30",
      rows: "2"
    },
    domProps: {
      value: _vm.formDataToBeWatched.justification_autre_revenu_srcg
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.formDataToBeWatched, "justification_autre_revenu_srcg", $event.target.value);
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_vm._m(37), _vm._v(" "), _c("currency-input", {
    attrs: {
      required: "",
      type: "text",
      id: "",
      value: _vm.autre_charge_caf,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_vm._m(38), _vm._v(" "), _c("currency-input", {
    attrs: {
      required: "",
      type: "text",
      id: "",
      value: _vm.autre_charge_arc,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_vm._m(39), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control",
    attrs: {
      required: "",
      disabled: "",
      type: "text",
      id: "autre_charge_src",
      value: _vm.autre_charge_src
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
      value: _vm.justification_autre_charge,
      expression: "justification_autre_charge",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      disabled: "",
      cols: "30",
      rows: "2"
    },
    domProps: {
      value: _vm.justification_autre_charge
    },
    on: {
      change: [function ($event) {
        _vm.justification_autre_charge = $event.target.value;
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_vm._m(41), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control input-box",
    attrs: {
      required: "",
      type: "text",
      id: "autre_charge_srcg",
      value: _vm.formDataToBeWatched.autre_charge_srcg
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pl-4"
  }, [_vm._m(42), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.formDataToBeWatched.justification_autre_charge_srcg,
      expression: "formDataToBeWatched.justification_autre_charge_srcg",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control input-box",
    attrs: {
      cols: "30",
      rows: "2"
    },
    domProps: {
      value: _vm.formDataToBeWatched.justification_autre_charge_srcg
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.formDataToBeWatched, "justification_autre_charge_srcg", $event.target.value);
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_vm._m(43), _vm._v(" "), _c("currency-input", {
    attrs: {
      required: "",
      type: "text",
      id: "",
      value: _vm.charge_familiale_caf,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_vm._m(44), _vm._v(" "), _c("currency-input", {
    attrs: {
      required: "",
      type: "text",
      id: "",
      value: _vm.charge_familiale_arc,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_vm._m(45), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "text",
      disabled: "",
      id: "charge_familiale_src",
      value: _vm.charge_familiale_src
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
      value: _vm.justification_charge_familiale,
      expression: "justification_charge_familiale",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      disabled: "",
      cols: "30",
      rows: "2"
    },
    domProps: {
      value: _vm.justification_charge_familiale
    },
    on: {
      change: [function ($event) {
        _vm.justification_charge_familiale = $event.target.value;
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_vm._m(47), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control input-box",
    attrs: {
      required: "",
      type: "text",
      id: "charge_familiale_srcg",
      value: _vm.formDataToBeWatched.charge_familiale_srcg
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
      value: _vm.formDataToBeWatched.justification_charge_familiale_srcg,
      expression: "formDataToBeWatched.justification_charge_familiale_srcg",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control input-box",
    attrs: {
      cols: "30",
      rows: "2"
    },
    domProps: {
      value: _vm.formDataToBeWatched.justification_charge_familiale_srcg
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.formDataToBeWatched, "justification_charge_familiale_srcg", $event.target.value);
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_vm._m(49), _vm._v(" "), _c("currency-input", {
    attrs: {
      required: "",
      type: "text",
      id: "",
      value: _vm.capacite_autofinancement_caf,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_vm._m(50), _vm._v(" "), _c("currency-input", {
    attrs: {
      required: "",
      type: "text",
      id: "",
      value: _vm.capacite_autofinancement_arc,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_vm._m(51), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "text",
      disabled: "",
      id: "capacite_autofinancement_src",
      value: _vm.capacite_autofinancement_src
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
      value: _vm.justification_capacite_auto,
      expression: "justification_capacite_auto",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      disabled: "",
      cols: "30",
      rows: "2"
    },
    domProps: {
      value: _vm.justification_capacite_auto
    },
    on: {
      change: [function ($event) {
        _vm.justification_capacite_auto = $event.target.value;
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_vm._m(53), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control input-box",
    attrs: {
      required: "",
      type: "text",
      id: "capacite_autofinancement_srcg",
      value: _vm.formDataToBeWatched.capacite_autofinancement_srcg
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pl-4"
  }, [_vm._m(54), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.formDataToBeWatched.justification_capacite_auto_srcg,
      expression: "formDataToBeWatched.justification_capacite_auto_srcg",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control input-box",
    attrs: {
      cols: "30",
      rows: "2"
    },
    domProps: {
      value: _vm.formDataToBeWatched.justification_capacite_auto_srcg
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.formDataToBeWatched, "justification_capacite_auto_srcg", $event.target.value);
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_vm._m(55), _vm._v(" "), _c("currency-input", {
    attrs: {
      required: "",
      type: "text",
      id: "",
      value: _vm.montant_credit_caf,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_vm._m(56), _vm._v(" "), _c("currency-input", {
    attrs: {
      required: "",
      id: "",
      value: _vm.montant_credit_arc,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_vm._m(57), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "text",
      disabled: "",
      id: "montant_credit_src",
      value: _vm.montant_credit_src
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
      value: _vm.justification_capacite_montant_propose,
      expression: "justification_capacite_montant_propose",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      disabled: "",
      cols: "30",
      rows: "2"
    },
    domProps: {
      value: _vm.justification_capacite_montant_propose
    },
    on: {
      change: [function ($event) {
        _vm.justification_capacite_montant_propose = $event.target.value;
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_vm._m(59), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control input-box",
    attrs: {
      required: "",
      type: "text",
      id: "montant_credit_srcg",
      value: _vm.formDataToBeWatched.montant_credit_srcg
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pl-4"
  }, [_vm._m(60), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.formDataToBeWatched.justification_capacite_montant_propose_srcg,
      expression: "formDataToBeWatched.justification_capacite_montant_propose_srcg",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control input-box",
    attrs: {
      cols: "30",
      rows: "2"
    },
    domProps: {
      value: _vm.formDataToBeWatched.justification_capacite_montant_propose_srcg
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.formDataToBeWatched, "justification_capacite_montant_propose_srcg", $event.target.value);
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_vm._m(61), _vm._v(" "), _c("currency-input", {
    attrs: {
      id: "",
      value: _vm.montant_echeance_credit_caf,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_vm._m(62), _vm._v(" "), _c("currency-input", {
    attrs: {
      id: "montant_echeance_credit_arc",
      value: _vm.montant_echeance_credit_arc,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_vm._m(63), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "text",
      disabled: "",
      id: "montant_echeance_credit_src",
      value: _vm.montant_echeance_credit_src
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pl-4"
  }, [_vm._m(64), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.justification_capacite_montant_echeance,
      expression: "justification_capacite_montant_echeance",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      disabled: "",
      cols: "30",
      rows: "2"
    },
    domProps: {
      value: _vm.justification_capacite_montant_echeance
    },
    on: {
      change: [function ($event) {
        _vm.justification_capacite_montant_echeance = $event.target.value;
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_vm._m(65), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control input-box",
    attrs: {
      required: "",
      type: "text",
      id: "montant_echeance_credit_srcg",
      value: _vm.formDataToBeWatched.montant_echeance_credit_srcg
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pl-4"
  }, [_vm._m(66), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.formDataToBeWatched.justification_capacite_montant_echeance_srcg,
      expression: "formDataToBeWatched.justification_capacite_montant_echeance_srcg",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control input-box",
    attrs: {
      cols: "30",
      rows: "2"
    },
    domProps: {
      value: _vm.formDataToBeWatched.justification_capacite_montant_echeance_srcg
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.formDataToBeWatched, "justification_capacite_montant_echeance_srcg", $event.target.value);
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_vm._m(67), _vm._v(" "), _c("currency-input", {
    attrs: {
      required: "",
      type: "text",
      id: "",
      value: _vm.tresorerie_caf,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_vm._m(68), _vm._v(" "), _c("currency-input", {
    attrs: {
      required: "",
      type: "text",
      id: "",
      value: _vm.tresorerie_arc,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_vm._m(69), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "text",
      disabled: "",
      id: "tresorerie_src",
      value: _vm.tresorerie_src
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pl-4"
  }, [_vm._m(70), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.justification_capacite_tresorerie_src,
      expression: "justification_capacite_tresorerie_src",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      disabled: "",
      cols: "30",
      rows: "2"
    },
    domProps: {
      value: _vm.justification_capacite_tresorerie_src
    },
    on: {
      change: [function ($event) {
        _vm.justification_capacite_tresorerie_src = $event.target.value;
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_vm._m(71), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control input-box",
    attrs: {
      required: "",
      type: "text",
      id: "tresorerie_srcg",
      value: _vm.formDataToBeWatched.tresorerie_srcg
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pl-4"
  }, [_vm._m(72), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.formDataToBeWatched.justification_capacite_tresorerie_srcg,
      expression: "formDataToBeWatched.justification_capacite_tresorerie_srcg",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control input-box",
    attrs: {
      cols: "30",
      rows: "2"
    },
    domProps: {
      value: _vm.formDataToBeWatched.justification_capacite_tresorerie_srcg
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.formDataToBeWatched, "justification_capacite_tresorerie_srcg", $event.target.value);
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_vm._m(73), _vm._v(" "), _c("currency-input", {
    attrs: {
      required: "",
      type: "text",
      "float": "",
      id: "",
      value: _vm.taux_endettement_caf,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_vm._m(74), _vm._v(" "), _c("currency-input", {
    attrs: {
      required: "",
      type: "text",
      "float": "",
      id: "",
      value: _vm.taux_endettement_arc,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_vm._m(75), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "text",
      disabled: "",
      id: "taux_endettement_src",
      value: _vm.taux_endettement_src
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pl-4"
  }, [_vm._m(76), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.justification_taux_src,
      expression: "justification_taux_src",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      disabled: "",
      cols: "30",
      rows: "2"
    },
    domProps: {
      value: _vm.justification_taux_src
    },
    on: {
      change: [function ($event) {
        _vm.justification_taux_src = $event.target.value;
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_vm._m(77), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control input-box",
    attrs: {
      required: "",
      type: "text",
      id: "taux_endettement_srcg",
      value: _vm.formDataToBeWatched.taux_endettement_srcg
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pl-4"
  }, [_vm._m(78), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.formDataToBeWatched.justification_taux_srcg,
      expression: "formDataToBeWatched.justification_taux_srcg",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control input-box",
    attrs: {
      cols: "30",
      rows: "2"
    },
    domProps: {
      value: _vm.formDataToBeWatched.justification_taux_srcg
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.formDataToBeWatched, "justification_taux_srcg", $event.target.value);
      }, _vm.handleInput]
    }
  })])]), _vm._v(" "), _c("hr"), _vm._v(" "), _vm._m(79), _vm._v(" "), _c("div", {
    staticClass: "row gy-2"
  }, [_c("div", {
    staticClass: "col-6"
  }, [_vm._m(80), _vm._v(" "), _c("currency-input", {
    attrs: {
      type: "text",
      id: "tresorerie_espece_caf",
      value: _vm.tresorerie_espece_caf,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_vm._m(81), _vm._v(" "), _c("currency-input", {
    attrs: {
      type: "text",
      id: "tresorerie_espece_arc",
      value: _vm.tresorerie_espece_arc,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_vm._m(82), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "text",
      id: "tresorerie_espece_src",
      value: _vm.tresorerie_espece_src,
      disabled: ""
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pl-4"
  }, [_vm._m(83), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.justification_tresorerie_espece_src,
      expression: "justification_tresorerie_espece_src",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      disabled: "",
      cols: "30",
      rows: "2"
    },
    domProps: {
      value: _vm.justification_tresorerie_espece_src
    },
    on: {
      change: [function ($event) {
        _vm.justification_tresorerie_espece_src = $event.target.value;
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_vm._m(84), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control input-box",
    attrs: {
      required: "",
      type: "text",
      id: "tresorerie_espece_srcg",
      value: _vm.formDataToBeWatched.tresorerie_espece_srcg
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pl-4"
  }, [_vm._m(85), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.formDataToBeWatched.justification_tresorerie_espece_srcg,
      expression: "formDataToBeWatched.justification_tresorerie_espece_srcg",
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
      value: _vm.formDataToBeWatched.justification_tresorerie_espece_srcg
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.formDataToBeWatched, "justification_tresorerie_espece_srcg", $event.target.value);
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_vm._m(86), _vm._v(" "), _c("currency-input", {
    attrs: {
      required: "",
      type: "text",
      id: "",
      value: _vm.creance_acompte_caf,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_vm._m(87), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control",
    attrs: {
      disabled: "",
      type: "text",
      id: "creance_acompte_arc",
      value: _vm.creance_acompte_arc
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_vm._m(88), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "text",
      id: "creance_acompte_src",
      disabled: "",
      value: _vm.creance_acompte_src
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pl-4"
  }, [_vm._m(89), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.justification_creance_acompte_src,
      expression: "justification_creance_acompte_src",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      disabled: "",
      cols: "30",
      rows: "2"
    },
    domProps: {
      value: _vm.justification_creance_acompte_src
    },
    on: {
      change: [function ($event) {
        _vm.justification_creance_acompte_src = $event.target.value;
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_vm._m(90), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control input-box",
    attrs: {
      required: "",
      type: "text",
      id: "creance_acompte_srcg",
      value: _vm.formDataToBeWatched.creance_acompte_srcg
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pl-4"
  }, [_vm._m(91), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.formDataToBeWatched.justification_creance_acompte_srcg,
      expression: "formDataToBeWatched.justification_creance_acompte_srcg",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control input-box",
    attrs: {
      cols: "30",
      rows: "2"
    },
    domProps: {
      value: _vm.formDataToBeWatched.justification_creance_acompte_srcg
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.formDataToBeWatched, "justification_creance_acompte_srcg", $event.target.value);
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_vm._m(92), _vm._v(" "), _c("currency-input", {
    attrs: {
      required: "",
      type: "text",
      id: "stock_caf",
      value: _vm.stock_caf,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_vm._m(93), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control",
    attrs: {
      disabled: "",
      type: "text",
      id: "stock_arc",
      value: _vm.stock_arc
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_vm._m(94), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control",
    attrs: {
      required: "",
      disabled: "",
      type: "text",
      id: "stock_src",
      value: _vm.stock_src
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pl-4"
  }, [_vm._m(95), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.justification_stock_src,
      expression: "justification_stock_src",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      disabled: "",
      cols: "30",
      rows: "2"
    },
    domProps: {
      value: _vm.justification_stock_src
    },
    on: {
      change: [function ($event) {
        _vm.justification_stock_src = $event.target.value;
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_vm._m(96), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control input-box",
    attrs: {
      required: "",
      type: "text",
      id: "stock_srcg",
      value: _vm.formDataToBeWatched.stock_srcg
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pl-4"
  }, [_vm._m(97), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.formDataToBeWatched.justification_stock_srcg,
      expression: "formDataToBeWatched.justification_stock_srcg",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control input-box",
    attrs: {
      cols: "30",
      rows: "2"
    },
    domProps: {
      value: _vm.formDataToBeWatched.justification_stock_srcg
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.formDataToBeWatched, "justification_stock_srcg", $event.target.value);
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_vm._m(98), _vm._v(" "), _c("currency-input", {
    attrs: {
      disabled: "",
      type: "text",
      id: "",
      value: _vm.immobilisation_caf
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_vm._m(99), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control",
    attrs: {
      disabled: "",
      type: "text",
      id: "immobilisation_propose",
      value: _vm.immobilisation_arc
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_vm._m(100), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control",
    attrs: {
      required: "",
      disabled: "",
      type: "text",
      id: "immobilisation_src",
      value: _vm.immobilisation_src
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pl-4"
  }, [_vm._m(101), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.justification_immobilisation_arc,
      expression: "justification_immobilisation_arc",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      disabled: "",
      cols: "30",
      rows: "2"
    },
    domProps: {
      value: _vm.justification_immobilisation_arc
    },
    on: {
      change: [function ($event) {
        _vm.justification_immobilisation_arc = $event.target.value;
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_vm._m(102), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control input-box",
    attrs: {
      required: "",
      type: "text",
      id: "immobilisation_srcg",
      value: _vm.formDataToBeWatched.immobilisation_srcg
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pl-4"
  }, [_vm._m(103), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.formDataToBeWatched.justification_immobilisation_srcg,
      expression: "formDataToBeWatched.justification_immobilisation_srcg",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control input-box",
    attrs: {
      cols: "30",
      rows: "2"
    },
    domProps: {
      value: _vm.formDataToBeWatched.justification_immobilisation_srcg
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.formDataToBeWatched, "justification_immobilisation_srcg", $event.target.value);
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_vm._m(104), _vm._v(" "), _c("currency-input", {
    attrs: {
      required: "",
      type: "text",
      id: "",
      value: _vm.passif_ope_caf,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_vm._m(105), _vm._v(" "), _c("currency-input", {
    attrs: {
      disabled: "",
      type: "text",
      id: "",
      value: _vm.passif_ope_arc
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_vm._m(106), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control",
    attrs: {
      required: "",
      disabled: "",
      type: "text",
      id: "passif_ope_src",
      value: _vm.passif_ope_src
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pl-4"
  }, [_vm._m(107), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.justification_passif_ope_src,
      expression: "justification_passif_ope_src",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      disabled: "",
      cols: "30",
      rows: "2"
    },
    domProps: {
      value: _vm.justification_passif_ope_src
    },
    on: {
      change: [function ($event) {
        _vm.justification_passif_ope_src = $event.target.value;
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_vm._m(108), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control input-box",
    attrs: {
      required: "",
      type: "text",
      id: "passif_ope_srcg",
      value: _vm.formDataToBeWatched.passif_ope_srcg
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pl-4"
  }, [_vm._m(109), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.formDataToBeWatched.justification_passif_ope_srcg,
      expression: "formDataToBeWatched.justification_passif_ope_srcg",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control input-box",
    attrs: {
      cols: "30",
      rows: "2"
    },
    domProps: {
      value: _vm.formDataToBeWatched.justification_passif_ope_srcg
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.formDataToBeWatched, "justification_passif_ope_srcg", $event.target.value);
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_vm._m(110), _vm._v(" "), _c("currency-input", {
    attrs: {
      required: "",
      type: "text",
      id: "",
      value: _vm.passifs_fin_caf,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_vm._m(111), _vm._v(" "), _c("currency-input", {
    attrs: {
      required: "",
      type: "text",
      id: "",
      value: _vm.passifs_fin_arc,
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_vm._m(112), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "text",
      disabled: "",
      id: "passifs_fin_src",
      value: _vm.passifs_fin_src
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pl-4"
  }, [_vm._m(113), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.justification_passifs_fin_src,
      expression: "justification_passifs_fin_src",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      disabled: "",
      cols: "30",
      rows: "2"
    },
    domProps: {
      value: _vm.justification_passifs_fin_src
    },
    on: {
      change: [function ($event) {
        _vm.justification_passifs_fin_src = $event.target.value;
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_vm._m(114), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control input-box",
    attrs: {
      required: "",
      type: "text",
      id: "passifs_fin_srcg",
      value: _vm.formDataToBeWatched.passifs_fin_srcg
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pl-4"
  }, [_vm._m(115), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.formDataToBeWatched.justification_passifs_fin_srcg,
      expression: "formDataToBeWatched.justification_passifs_fin_srcg",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control input-box",
    attrs: {
      cols: "30",
      rows: "2"
    },
    domProps: {
      value: _vm.formDataToBeWatched.justification_passifs_fin_srcg
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.formDataToBeWatched, "justification_passifs_fin_srcg", $event.target.value);
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
    staticClass: "col-lg-12"
  }, [_c("label", {
    staticClass: "fs-5 fw-bold"
  }, [_vm._v("Force (SRC)")]), _vm._v(" "), _c("hr", {
    staticClass: "mt-1 mb-3"
  }), _vm._v(" "), _c("div", {
    domProps: {
      innerHTML: _vm._s(_vm.formDataToBeWatched.forces_src)
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 col-lg-12"
  }, [_c("label", {
    staticClass: "fs-5 fw-bold"
  }, [_vm._v("Force (SRCG)")]), _vm._v(" "), _c("hr", {
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
    staticClass: "col-lg-12"
  }, [_c("label", {
    staticClass: "fs-5 fw-bold"
  }, [_vm._v("Faiblesses (SRC)")]), _vm._v(" "), _c("hr", {
    staticClass: "mt-1 mb-3"
  }), _vm._v(" "), _c("div", {
    domProps: {
      innerHTML: _vm._s(_vm.formDataToBeWatched.faiblesses_src)
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 col-lg-12"
  }, [_c("label", {
    staticClass: "fs-5 fw-bold"
  }, [_vm._v("Faiblesses (SRCG)")]), _vm._v(" "), _c("hr", {
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
    staticClass: "col-lg-12"
  }, [_c("label", {
    staticClass: "fs-5 fw-bold"
  }, [_vm._v("Opportunités (SRC)")]), _vm._v(" "), _c("hr", {
    staticClass: "mt-1 mb-3"
  }), _vm._v(" "), _c("div", {
    domProps: {
      innerHTML: _vm._s(_vm.formDataToBeWatched.opportunites_src)
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 col-lg-12"
  }, [_c("label", {
    staticClass: "fs-5 fw-bold"
  }, [_vm._v("Opportunités (SRCG)")]), _vm._v(" "), _c("hr", {
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
    staticClass: "col-lg-12"
  }, [_c("label", {
    staticClass: "fs-5 fw-bold"
  }, [_vm._v("Menaces (SRC)")]), _vm._v(" "), _c("hr", {
    staticClass: "mt-1 mb-3"
  }), _vm._v(" "), _c("div", {
    domProps: {
      innerHTML: _vm._s(_vm.formDataToBeWatched.menaces_src)
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 col-lg-12"
  }, [_c("label", {
    staticClass: "fs-5 fw-bold"
  }, [_vm._v("Menaces (SRCG)")]), _vm._v(" "), _c("hr", {
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
    staticClass: "col"
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
    staticClass: "col-12"
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
    staticClass: "col-md-12"
  }, [_vm._m(116), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.avis_appreciation_organisation_src,
      expression: "avis_appreciation_organisation_src",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      disabled: "",
      cols: "30",
      rows: "2"
    },
    domProps: {
      value: _vm.avis_appreciation_organisation_src
    },
    on: {
      change: function change($event) {
        _vm.avis_appreciation_organisation_src = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("label", [_vm._v("Appréciation organisation client (SRCG)")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.appreciation_organisation_src,
      expression: "formDataToBeWatched.appreciation_organisation_src"
    }],
    staticClass: "form-select input-box",
    attrs: {
      id: ""
    },
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
  }, [_vm._m(117), _vm._v(" "), _c("textarea", {
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
    staticClass: "col"
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
    staticClass: "col-12"
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
    staticClass: "col-md-12"
  }, [_vm._m(118), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.avis_appreciation_autre_risque_srcf,
      expression: "avis_appreciation_autre_risque_srcf",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      disabled: "",
      cols: "30",
      rows: "2"
    },
    domProps: {
      value: _vm.avis_appreciation_autre_risque_srcf
    },
    on: {
      change: function change($event) {
        _vm.avis_appreciation_autre_risque_srcf = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("label", [_vm._v("Appréciation autres risques (SRCG)")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.appreciation_autre_risque_src,
      expression: "formDataToBeWatched.appreciation_autre_risque_src"
    }],
    staticClass: "form-select input-box",
    attrs: {
      id: ""
    },
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
  }, [_vm._m(119), _vm._v(" "), _c("textarea", {
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
    staticClass: "col"
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
    staticClass: "col-12"
  }, [_c("label", [_vm._v("Appréciation risque commerciale (SRC)")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.appreciation_risque_commerciale_srcf,
      expression: "appreciation_risque_commerciale_srcf",
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
      value: _vm.appreciation_risque_commerciale_srcf
    },
    on: {
      change: function change($event) {
        _vm.appreciation_risque_commerciale_srcf = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-12"
  }, [_vm._m(120), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.avis_appreciation_risque_commerciale_srcf,
      expression: "avis_appreciation_risque_commerciale_srcf",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      disabled: "",
      cols: "30",
      rows: "2"
    },
    domProps: {
      value: _vm.avis_appreciation_risque_commerciale_srcf
    },
    on: {
      change: function change($event) {
        _vm.avis_appreciation_risque_commerciale_srcf = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("label", [_vm._v("Appréciation risque commerciale (SRCG)")]), _vm._v(" "), _c("select", {
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
  }, [_vm._m(121), _vm._v(" "), _c("textarea", {
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
  }, [_vm._m(122), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("p"), _vm._v(" "), _c("label", [_vm._v("Analyse (SRC)")]), _c("br"), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.quantite_analyse_effectuee_analyse,
      expression: "quantite_analyse_effectuee_analyse"
    }],
    staticClass: "form-select",
    attrs: {
      disabled: "",
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
        _vm.quantite_analyse_effectuee_analyse = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
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
      value: _vm.quantite_analyse_effectuee_avis_src,
      expression: "quantite_analyse_effectuee_avis_src",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      disabled: "",
      id: "quantite_analyse_effectuee_avis_src",
      cols: "30",
      rows: "2"
    },
    domProps: {
      value: _vm.quantite_analyse_effectuee_avis_src
    },
    on: {
      change: [function ($event) {
        _vm.quantite_analyse_effectuee_avis_src = $event.target.value;
      }, _vm.formDataVars]
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("p"), _vm._v(" "), _c("label", [_vm._v("Analyse (SRCG)")]), _c("br"), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.quantite_analyse_effectuee_analyse_srcg,
      expression: "formDataToBeWatched.quantite_analyse_effectuee_analyse_srcg"
    }],
    staticClass: "form-select input-box",
    attrs: {
      id: "quantite_analyse_effectuee_analyse_srcg"
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
        _vm.$set(_vm.formDataToBeWatched, "quantite_analyse_effectuee_analyse_srcg", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
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
  }, [_c("label", [_vm._v("Avis (SRCG)")]), _c("br"), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.formDataToBeWatched.quantite_analyse_effectuee_avis_srcg,
      expression: "formDataToBeWatched.quantite_analyse_effectuee_avis_srcg",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control input-box",
    attrs: {
      id: "quantite_analyse_effectuee_avis_srcg",
      cols: "30",
      rows: "2"
    },
    domProps: {
      value: _vm.formDataToBeWatched.quantite_analyse_effectuee_avis_srcg
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.formDataToBeWatched, "quantite_analyse_effectuee_avis_srcg", $event.target.value);
      }, _vm.formDataVars]
    }
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 mt-3"
  }, [_vm._m(123), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("p"), _vm._v(" "), _c("label", [_vm._v("Analyse (SRC)")]), _c("br"), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.capacite_paiement_analyse_src,
      expression: "capacite_paiement_analyse_src"
    }],
    staticClass: "form-select",
    attrs: {
      disabled: "",
      id: "capacite_paiement_analyse_src"
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
        _vm.capacite_paiement_analyse_src = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
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
  }, [_c("label", [_vm._v("Avis (SRC)")]), _c("br"), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.capacite_paiement_avis_src,
      expression: "capacite_paiement_avis_src",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      disabled: "",
      id: "capacite_paiement_avis_src",
      cols: "30",
      rows: "2"
    },
    domProps: {
      value: _vm.capacite_paiement_avis_src
    },
    on: {
      change: [function ($event) {
        _vm.capacite_paiement_avis_src = $event.target.value;
      }, _vm.formDataVars]
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("p"), _vm._v(" "), _c("label", [_vm._v("Analyse (SRCG)")]), _c("br"), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.capacite_paiement_analyse_srcg,
      expression: "formDataToBeWatched.capacite_paiement_analyse_srcg"
    }],
    staticClass: "form-select input-box",
    attrs: {
      id: "capacite_paiement_analyse_srcg"
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
        _vm.$set(_vm.formDataToBeWatched, "capacite_paiement_analyse_srcg", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
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
  }, [_c("label", [_vm._v("Avis (SRCG)")]), _c("br"), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.formDataToBeWatched.capacite_paiement_avis_srcg,
      expression: "formDataToBeWatched.capacite_paiement_avis_srcg",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control input-box",
    attrs: {
      id: "capacite_paiement_avis_srcg",
      cols: "30",
      rows: "2"
    },
    domProps: {
      value: _vm.formDataToBeWatched.capacite_paiement_avis_srcg
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.formDataToBeWatched, "capacite_paiement_avis_srcg", $event.target.value);
      }, _vm.formDataVars]
    }
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 mt-3"
  }, [_vm._m(124), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("p"), _vm._v(" "), _c("label", [_vm._v("Analyse (SRC)")]), _c("br"), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.garantie_analyse_src,
      expression: "garantie_analyse_src"
    }],
    staticClass: "form-select",
    attrs: {
      disabled: "",
      id: "garantie_analyse_src"
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
        _vm.garantie_analyse_src = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
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
  }, [_c("label", [_vm._v("Avis (SRC) ")]), _c("br"), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.garantie_avis_src,
      expression: "garantie_avis_src",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      disabled: "",
      cols: "30",
      rows: "2"
    },
    domProps: {
      value: _vm.garantie_avis_src
    },
    on: {
      change: [function ($event) {
        _vm.garantie_avis_src = $event.target.value;
      }, _vm.handleInput]
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("p"), _vm._v(" "), _c("label", [_vm._v("Analyse (SRCG)")]), _c("br"), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.garantie_analyse_srcg,
      expression: "formDataToBeWatched.garantie_analyse_srcg"
    }],
    staticClass: "form-select input-box",
    attrs: {
      id: "garantie_analyse_srcg"
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
        _vm.$set(_vm.formDataToBeWatched, "garantie_analyse_srcg", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
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
  }, [_c("label", [_vm._v("Avis (SRCG)")]), _c("br"), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.formDataToBeWatched.garantie_avis_srcg,
      expression: "formDataToBeWatched.garantie_avis_srcg",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control input-box",
    attrs: {
      cols: "30",
      rows: "2"
    },
    domProps: {
      value: _vm.formDataToBeWatched.garantie_avis_srcg
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.formDataToBeWatched, "garantie_avis_srcg", $event.target.value);
      }, _vm.handleInput]
    }
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 mt-3"
  }, [_vm._m(125), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("p"), _vm._v(" "), _c("label", [_vm._v("Analyse (SRC)")]), _c("br"), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.implication_client_analyse_src,
      expression: "implication_client_analyse_src"
    }],
    staticClass: "form-select",
    attrs: {
      disabled: "",
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
        _vm.implication_client_analyse_src = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
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
  }, [_c("label", [_vm._v("Avis (SRC)")]), _c("br"), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.implication_client_avis_src,
      expression: "implication_client_avis_src",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      disabled: "",
      id: "implication_client_avis_src",
      cols: "30",
      rows: "2"
    },
    domProps: {
      value: _vm.implication_client_avis_src
    },
    on: {
      change: [function ($event) {
        _vm.implication_client_avis_src = $event.target.value;
      }, _vm.formDataVars]
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("p"), _vm._v(" "), _c("label", [_vm._v("Analyse (SRCG)")]), _c("br"), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.implication_client_analyse_srcg,
      expression: "formDataToBeWatched.implication_client_analyse_srcg"
    }],
    staticClass: "form-select input-box",
    attrs: {
      id: "implication_client_analyse_srcg"
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
        _vm.$set(_vm.formDataToBeWatched, "implication_client_analyse_srcg", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
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
  }, [_c("label", [_vm._v("Avis (SRCG)")]), _c("br"), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.formDataToBeWatched.implication_client_avis_srcg,
      expression: "formDataToBeWatched.implication_client_avis_srcg",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control input-box",
    attrs: {
      id: "implication_client_avis_srcg",
      cols: "30",
      rows: "2"
    },
    domProps: {
      value: _vm.formDataToBeWatched.implication_client_avis_srcg
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.formDataToBeWatched, "implication_client_avis_srcg", $event.target.value);
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
  }, [_vm._m(126), _vm._v(" "), _c("tbody", _vm._l(_vm.condition_avant_decaissement, function (cond_avant_decaissement, index) {
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
        value: cond_avant_decaissement.avant_decaissement,
        expression: "cond_avant_decaissement.avant_decaissement",
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
        value: cond_avant_decaissement.avant_decaissement
      },
      on: {
        change: function change($event) {
          return _vm.$set(cond_avant_decaissement, "avant_decaissement", $event.target.value);
        }
      }
    })])]);
  }), 0)])]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-borderless mb-1"
  }, [_vm._m(127), _vm._v(" "), _c("tbody", _vm._l(_vm.condition_apres_decaissement, function (cond_apres_decaissement, index) {
    return _c("tr", {
      key: index
    }, [_c("td", {
      staticStyle: {
        width: "100%"
      }
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: cond_apres_decaissement.apres_decaissement,
        expression: "cond_apres_decaissement.apres_decaissement"
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        disabled: ""
      },
      domProps: {
        value: cond_apres_decaissement.apres_decaissement
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(cond_apres_decaissement, "apres_decaissement", $event.target.value);
        }
      }
    })])]);
  }), 0)])]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-borderless mb-1"
  }, [_vm._m(128), _vm._v(" "), _c("tbody", _vm._l(_vm.condition_additionnelles_avant_decaissement, function (condition_additionnelle_avant_decaissement, index) {
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
      staticClass: "form-control input-box",
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
  }, [_vm._m(129), _vm._v(" "), _c("tbody", _vm._l(_vm.condition_additionnelles_apres_decaissement, function (condition_additionnelle_apres_decaissement, index) {
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
      staticClass: "form-control input-box",
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
  }, [_vm._v("Chiffre d'affaires / mois (SRCG)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Justification (SRCG)\n                                    "), _c("span", {
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
  }, [_vm._v("Cout d'achat (SRCG)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Justification (SRCG)\n                                    "), _c("span", {
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
  }, [_vm._v("Marge commerciale (SRCG)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Justification (SRCG)\n                                    "), _c("span", {
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
  }, [_vm._v("Charges d'exploitation et financière (SRCG)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Justification (SRCG)\n                                    "), _c("span", {
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
  }, [_vm._v("Résultat net (SRCG)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Justification (SRCG)\n                                    "), _c("span", {
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
  }, [_vm._v("Autres revenus (SRCG)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Justification (SRCG)\n                                    "), _c("span", {
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
  }, [_vm._v("Autres charges (SRCG)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Justification (SRCG)\n                                    "), _c("span", {
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
  }, [_vm._v("Charges familiales (SRCG)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Justification (SRCG)\n                                    "), _c("span", {
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
  }, [_vm._v("Capacité d'autofinancement (SRCG)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Justification (SRCG)\n                                    "), _c("span", {
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
  }, [_vm._v("Montant crédit (SRCG)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Justification (SRCG)\n                                    "), _c("span", {
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
  }, [_vm._v("Montant échéance crédit (SRCG)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Justification (SRCG)\n                                    "), _c("span", {
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
  }, [_vm._v("Trésorerie (SRCG)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Justification (SRCG)\n                                    "), _c("span", {
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
  }, [_vm._v("Taux d'endettement (SRCG)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Justification (SRCG)\n                                    "), _c("span", {
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
  }, [_vm._v("Trésorerie (En espèce) / mois (CAF)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Trésorerie (En espèce) / mois (ARC)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Trésorerie (En espèce) / mois (SRC)\n                                    "), _c("span", {
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
  }, [_vm._v("Trésorerie (En espèce) / mois (SRCG)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Justification (SRCG)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Créances et acompte (CAF)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Créances et acompte (ARC)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Créances et acompte (SRC)\n                                    "), _c("span", {
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
  }, [_vm._v("Créances et acompte (SRCG)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Justification (SRCG)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Stock (CAF)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Stock (ARC)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Stock (SRC)\n                                    "), _c("span", {
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
  }, [_vm._v("Stock (SRCG)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Justification (SRCG)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Immobilisations (CAF)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Immobilisations (ARC)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Immobilisations (SRC)\n                                    "), _c("span", {
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
  }, [_vm._v("Immobilisations (SRCG)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Justification (SRCG)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Passifs opérationnels (CAF)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Passifs opérationnels (ARC)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Passifs opérationnels (SRC)\n                                    "), _c("span", {
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
  }, [_vm._v("Passifs opérationnels (SRCG)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Justification (SRCG)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Passifs financiers (CAF)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Passifs financiers (ARC)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Passifs financiers (SRC)\n                                    "), _c("span", {
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
  }, [_vm._v("Passifs financiers (SRCG)\n                                    "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Justification (SRCG)\n                                    "), _c("span", {
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
  }, [_vm._v("Avis du SRCG\n                                    "), _c("span", {
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
  }, [_vm._v("Avis du SRCG\n                                    "), _c("span", {
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
  }, [_vm._v("Avis du SRCG\n                                    "), _c("span", {
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
  return _c("label", [_c("b", [_vm._v("2. Capacité de paiement ")]), _vm._v("(évaluation de la rentabilité du client, de la\n                                        solidité financière et de la liquidité - développements historiques et\n                                        futurs prévus)\n                                ")]);
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
  return _c("thead", [_c("tr", [_c("td", [_vm._v("Avant décaissement (SRC)")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("td", [_vm._v("Après décaissement (SRC)")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Avant décaissement (SRCG)")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Après décaissement (SRCG)")])])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/avisscr/groupe/AV3.vue?vue&type=style&index=0&id=27afbc68&lang=css&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/avisscr/groupe/AV3.vue?vue&type=style&index=0&id=27afbc68&lang=css&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\ninput[data-v-27afbc68] {\r\n    /*border: 1px solid red;*/\n}\n*[data-v-27afbc68] {\r\n    font-family: \"Google sans\";\n}\nlabel[data-v-27afbc68] {\r\n    height: 10px;\r\n    font-size: 13px;\n}\ninput[data-v-27afbc68],\r\nselect[data-v-27afbc68] {\r\n    height: 35px;\r\n    border-color: #34495e;\r\n    color: #57606f;\r\n    font-size: 13px;\r\n    font-weight: bold;\n}\n.card-width-height[data-v-27afbc68] {\r\n    width: 100%;\r\n    height: 100%;\n}\ntextarea[data-v-27afbc68] {\r\n\r\n    margin-bottom: 8px;\n}\n.head[data-v-27afbc68] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\n.hdc[data-v-27afbc68] {\r\n    background-color: #57606f;\n}\ntextarea.input-box[data-v-27afbc68], input.input-box[data-v-27afbc68] {\r\n    background: #00ffff21;\r\n    color: #000;\n}\nselect.input-box[data-v-27afbc68] {\r\n    background: #00ffff21;\r\n    color: #000;\n}\n.badge-sm[data-v-27afbc68] {\r\n    display: inline-block;\r\n    width: 15px;\r\n    height: 15px;\r\n    background: rgba(255, 0, 0, 0.882);\r\n    color: white;\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    border-radius: 100%;\r\n    position: absolute;\r\n    top: -20%;\r\n    left: 55%;\r\n    text-align: center;\n}\n.relook-header[data-v-27afbc68] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/avisscr/groupe/AV3.vue?vue&type=style&index=0&id=27afbc68&lang=css&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/avisscr/groupe/AV3.vue?vue&type=style&index=0&id=27afbc68&lang=css&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AV3_vue_vue_type_style_index_0_id_27afbc68_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AV3.vue?vue&type=style&index=0&id=27afbc68&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/avisscr/groupe/AV3.vue?vue&type=style&index=0&id=27afbc68&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AV3_vue_vue_type_style_index_0_id_27afbc68_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AV3_vue_vue_type_style_index_0_id_27afbc68_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/avisscr/groupe/AV3.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/avisscr/groupe/AV3.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AV3_vue_vue_type_template_id_27afbc68_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AV3.vue?vue&type=template&id=27afbc68&scoped=true */ "./resources/js/components/avisscr/groupe/AV3.vue?vue&type=template&id=27afbc68&scoped=true");
/* harmony import */ var _AV3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AV3.vue?vue&type=script&lang=js */ "./resources/js/components/avisscr/groupe/AV3.vue?vue&type=script&lang=js");
/* harmony import */ var _AV3_vue_vue_type_style_index_0_id_27afbc68_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AV3.vue?vue&type=style&index=0&id=27afbc68&lang=css&scoped=true */ "./resources/js/components/avisscr/groupe/AV3.vue?vue&type=style&index=0&id=27afbc68&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AV3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _AV3_vue_vue_type_template_id_27afbc68_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _AV3_vue_vue_type_template_id_27afbc68_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "27afbc68",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/avisscr/groupe/AV3.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/avisscr/groupe/AV3.vue?vue&type=script&lang=js":
/*!********************************************************************************!*\
  !*** ./resources/js/components/avisscr/groupe/AV3.vue?vue&type=script&lang=js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AV3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AV3.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/avisscr/groupe/AV3.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AV3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/avisscr/groupe/AV3.vue?vue&type=style&index=0&id=27afbc68&lang=css&scoped=true":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/avisscr/groupe/AV3.vue?vue&type=style&index=0&id=27afbc68&lang=css&scoped=true ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AV3_vue_vue_type_style_index_0_id_27afbc68_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AV3.vue?vue&type=style&index=0&id=27afbc68&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/avisscr/groupe/AV3.vue?vue&type=style&index=0&id=27afbc68&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/avisscr/groupe/AV3.vue?vue&type=template&id=27afbc68&scoped=true":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/avisscr/groupe/AV3.vue?vue&type=template&id=27afbc68&scoped=true ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AV3_vue_vue_type_template_id_27afbc68_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AV3_vue_vue_type_template_id_27afbc68_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AV3_vue_vue_type_template_id_27afbc68_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AV3.vue?vue&type=template&id=27afbc68&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/avisscr/groupe/AV3.vue?vue&type=template&id=27afbc68&scoped=true");


/***/ })

}]);