"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_credavailtick_CR3_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/credavailtick/CR3.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/credavailtick/CR3.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ContextMenu */ "./resources/js/components/shared/ContextMenu.vue");
/* harmony import */ var _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/ContextMenuItem */ "./resources/js/components/shared/ContextMenuItem.vue");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/helper */ "./resources/js/helpers/helper.js");
/* harmony import */ var _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @vueform/multiselect/dist/multiselect.vue2 */ "./node_modules/@vueform/multiselect/dist/multiselect.vue2.js");
/* harmony import */ var _Surete_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Surete.vue */ "./resources/js/components/credavailtick/Surete.vue");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }









window.$ = window.jQuery = __webpack_require__(/*! jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_defineProperty(_defineProperty(_defineProperty(_defineProperty({
  name: "garanties",
  display: "Garanties",
  components: {
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.TrashIcon,
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.ChevronDownIcon,
    ContextMenu: _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__["default"],
    ContextMenuItem: _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__["default"],
    Multiselect: _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_6__["default"],
    Surete: _Surete_vue__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  props: {
    meta_data: Object,
    tb_name: String,
    tb_display_name: String
  },
  created: function created() {
    var _this = this;
    _services_credit_service__WEBPACK_IMPORTED_MODULE_4__["default"].loadpaysindicatif().then(function (res) {
      _this.countries = res.data;
    })["catch"](function (err) {
      console.log(err);
    });
  },
  mounted: function mounted() {
    var _this2 = this,
      _this$meta_data$dossi;
    this.tableClosedOrOpened();
    this.loadRetrieved();
    this.loadCommentaire();
    this.loadTbAttrs();
    // charge les attributs + sous attributs des tables
    EventBus.$on("montant-credit-updated", function (data) {
      var _data$montant_credit;
      _this2.montant_dep_gar_crsd = Number(data.garantie + data.crsd).toLocaleString();
      var a = Number((_data$montant_credit = data.montant_credit) === null || _data$montant_credit === void 0 ? void 0 : _data$montant_credit.toString().replace(/\s/g, ''));
      a = isNaN(a) ? 0 : a;
      var value = Number(_this2.montant_dep_gar_crsd.replace(/\s+/g, "")) * 100 / a;
      _this2.taux_dep_gar_crsd = isFinite(value) ? value : 0;
      _this2.defaultSuretes = [{
        label: "Souscription de ".concat(_this2.souscriptionValue, " billets \xE0 ordre sign\xE9s par l'emprunteur"),
        value: {
          label: "Souscription de ".concat(_this2.souscriptionValue, " billets \xE0 ordre sign\xE9s par l'emprunteur"),
          nom: "souscription",
          billets: _this2.souscriptionValue
        },
        id: "souscription"
      }, {
        label: "D\xE9p\xF4t de garantie et compte de r\xE9serve du service de la dette (DG + CRSD) \xE0 hauteur de ".concat(_this2.montant_dep_gar_crsd, " soit ").concat(_this2.taux_dep_gar_crsd, "% du montant propos\xE9"),
        value: {
          label: "D\xE9p\xF4t de garantie et compte de r\xE9serve du service de la dette (DG + CRSD) \xE0 hauteur de ".concat(_this2.montant_dep_gar_crsd, "  soit ").concat(_this2.taux_dep_gar_crsd, "% du montant propos\xE9"),
          nom: "depot",
          taux: _this2.taux_dep_gar_crsd,
          montant: _this2.montant_dep_gar_crsd
        },
        id: "depot"
      }];
      _this2.formDataToBeWatched.suretes_diverses.forEach(function (el, index) {
        _this2.defaultSuretes.forEach(function (elem) {
          if (elem.value.nom === el.nom) {
            _this2.formDataToBeWatched.suretes_diverses[index] = elem.value;
          }
        });
      });
    });
    this.filiale = (_this$meta_data$dossi = this.meta_data.dossier_credit[this.determineCredPubTables(this.meta_data.dossier_credit.applied_templ_name)[0]]) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi.filiale;
  },
  computed: {
    totalEngagementGlobal: function totalEngagementGlobal() {
      var trying = this.engagement_globales.map(function (el) {
        el.montant_engagement_globale = String(el.montant_engagement_globale).replace(/\s+/g, "");
        if (!el.montant_engagement_globale) return 0;
        return Number(el.montant_engagement_globale);
      }).reduce(function (sum, curr) {
        return sum + curr;
      }, 0);
      this.total_montant_engagement_globale = trying;
      return trying.toLocaleString("fr-FR");
    },
    souscriptionValue: function souscriptionValue() {
      var _this$meta_data$dossi2, _this$meta_data$dossi3, _this$meta_data$dossi4;
      var applied_templ_name = (_this$meta_data$dossi2 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi2 === void 0 ? void 0 : _this$meta_data$dossi2.applied_templ_name;
      var tbArrays = this.determineCredPubTables(applied_templ_name);
      var credtb0 = tbArrays[0];
      var credtb1 = tbArrays[1];
      var credtb4 = tbArrays[4];
      var dure = Number((_this$meta_data$dossi3 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi3 === void 0 || (_this$meta_data$dossi3 = _this$meta_data$dossi3[credtb0]) === null || _this$meta_data$dossi3 === void 0 ? void 0 : _this$meta_data$dossi3['duree_credit']) || 0;
      var mode = (_this$meta_data$dossi4 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi4 === void 0 || (_this$meta_data$dossi4 = _this$meta_data$dossi4[credtb1]) === null || _this$meta_data$dossi4 === void 0 || (_this$meta_data$dossi4 = _this$meta_data$dossi4['mode_paiement']) === null || _this$meta_data$dossi4 === void 0 ? void 0 : _this$meta_data$dossi4.toLowerCase();
      var diviseur = 1;
      if (mode === 'mensuelle') diviseur = 1;
      if (mode === 'bi-mensuel') diviseur = 2;
      if (mode === 'trimestriel') diviseur = 3;
      if (mode === 'semestriel') diviseur = 6;
      if (mode === 'in fine') diviseur = dure || 1;
      return dure / diviseur;
    },
    engagement_value: function engagement_value() {
      var _this$meta_data$dossi5, _this$meta_data, _this$meta_data2, _this$meta_data3;
      var applied_templ_name = (_this$meta_data$dossi5 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi5 === void 0 ? void 0 : _this$meta_data$dossi5.applied_templ_name;
      var tbArrays = this.determineCredPubTables(applied_templ_name);
      var credtb4 = tbArrays[4];
      var cred_pub = ((_this$meta_data = this.meta_data) === null || _this$meta_data === void 0 || (_this$meta_data = _this$meta_data.dossier_credit) === null || _this$meta_data === void 0 ? void 0 : _this$meta_data['cred_pub_tb_3002']) != undefined ? (_this$meta_data2 = this.meta_data) === null || _this$meta_data2 === void 0 || (_this$meta_data2 = _this$meta_data2.dossier_credit) === null || _this$meta_data2 === void 0 ? void 0 : _this$meta_data2.cred_pub_tb_3002 : (_this$meta_data3 = this.meta_data) === null || _this$meta_data3 === void 0 || (_this$meta_data3 = _this$meta_data3.dossier_credit) === null || _this$meta_data3 === void 0 ? void 0 : _this$meta_data3[credtb4];
      return {
        label: "Engagement de domiciliation d'au moins ".concat(cred_pub === null || cred_pub === void 0 ? void 0 : cred_pub['montant_engagement'], " des recettes par semaines dans nos livres"),
        nom: 'engagement',
        montant: cred_pub === null || cred_pub === void 0 ? void 0 : cred_pub['montant_engagement']
      };
    },
    nantissement_dat: function nantissement_dat() {
      return {
        label: "Nantissement DAT de ".concat(this.formDataToBeWatched.montant_dat, " FCFA  qui a pour r\xE9f\xE9rence ").concat(this.formDataToBeWatched.reference_dat),
        nom: "nantissement",
        montant_dat: this.formDataToBeWatched.montant_dat,
        reference_dat: this.formDataToBeWatched.reference_dat
      };
    }
  }
}, "created", function created() {
  var _this$meta_data$dossi6, _this$meta_data4, _this$meta_data$dossi7, _this$meta_data5, _this$meta_data6;
  this.data_conditions_particulieres = (_this$meta_data$dossi6 = (_this$meta_data4 = this.meta_data) === null || _this$meta_data4 === void 0 || (_this$meta_data4 = _this$meta_data4.dossier_credit) === null || _this$meta_data4 === void 0 || (_this$meta_data4 = _this$meta_data4.cred_pub_tb_19002) === null || _this$meta_data4 === void 0 ? void 0 : _this$meta_data4.conditions_particulieres) !== null && _this$meta_data$dossi6 !== void 0 ? _this$meta_data$dossi6 : null;
  this.data_garanties_a_recueillir = (_this$meta_data$dossi7 = (_this$meta_data5 = this.meta_data) === null || _this$meta_data5 === void 0 || (_this$meta_data5 = _this$meta_data5.dossier_credit) === null || _this$meta_data5 === void 0 || (_this$meta_data5 = _this$meta_data5.cred_pub_tb_19001) === null || _this$meta_data5 === void 0 ? void 0 : _this$meta_data5.garanties_a_recueillir) !== null && _this$meta_data$dossi7 !== void 0 ? _this$meta_data$dossi7 : null;
  this.notif_accord_credit = (_this$meta_data6 = this.meta_data) === null || _this$meta_data6 === void 0 || (_this$meta_data6 = _this$meta_data6.dossier_credit) === null || _this$meta_data6 === void 0 ? void 0 : _this$meta_data6.notif_accord_credit;
  var resume = "";
  for (var index = 0; index < ((_this$data_garanties_ = this.data_garanties_a_recueillir) === null || _this$data_garanties_ === void 0 ? void 0 : _this$data_garanties_.length); index++) {
    var _this$data_garanties_;
    var element = this.data_garanties_a_recueillir[index];
    resume += '-' + element.name + '&nbsp;';
  }
  this.$set(this.formDataToBeWatched, 'resume_garanties', resume);
}), "data", function data() {
  var vm = this;
  return {
    data_conditions_particulieres: null,
    data_garanties_a_recueillir: null,
    notif_accord_credit: null,
    defaultSuretes: [],
    newSurete: "",
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
    seen5: true,
    seen6: true,
    seen7: true,
    seen8: true,
    seen9: true,
    listingNote: false,
    contextList: [
    // Ajouter note
    {
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
    meta_parseable: {
      cred_pub_key: this.meta_data['cred_pub_key'],
      tb_name: this.tb_name
    },
    formDataToBeWatched: {
      montant_engagement: 0,
      gages: '',
      hypotheques: [],
      cond_particulieres: [],
      comment_garantie_supports: "",
      co_signataire: "",
      commentaire_activite: "",
      notes: [],
      suretes_diverses: [],
      autres_suretes_diverses: [],
      protections_financieres_eligibles: [],
      cautionnement_solidaires: [],
      total_hypotheques_valeur_marchande: 0,
      total_hypotheques_valeur_considere: 0,
      total_gages_valeur_considere: 0,
      total_gages_valeur_marchande: 0,
      total_protection_financieres_valeur_marchande: 0,
      total_protection_financieres_valeur_considere: 0,
      total_caution_hypothecaires_valeur_marchande: 0,
      total_caution_hypothecaires_valeur_considere: 0,
      total_cautionnement_solidaires_valeur_marchande: 0,
      total_cautionnement_solidaires_valeur_considere: 0,
      total_cautionnement_solidaires_valeur_cautionnement: 0,
      total_cautionnement_solidaires_valeur_revenu_mensuel: 0,
      total_cautionnement_solidaires_valeur_patrimoine: 0,
      total_gages_mobiliers_valeur_marchande: "",
      total_gages_mobiliers_valeur_considere: "",
      engagement_globales: "",
      total_montant_engagement_globale: 0,
      montant_dat: "",
      reference_dat: "",
      expiration_due_date: "",
      nature_garanties: "",
      montant_garanties: "",
      autres_frais: "",
      frais_assurance_part_valeur: "",
      frais_assurance_part: "",
      resume_garanties: '',
      etat_garanties: "",
      date_expiration: '',
      source_remboursement_passe: '',
      garanties: null
    },
    // frais_assurance_part:[
    //     {
    //         libelle: "Frais d'assurance part",
    //         valeur:""
    //     }
    // ],
    countries: [],
    total_hypotheques_valeur_marchande: 0,
    total_hypotheques_valeur_considere: 0,
    total_gages_valeur_considere: 0,
    total_gages_valeur_marchande: 0,
    total_protection_financieres_valeur_marchande: 0,
    total_protection_financieres_valeur_considere: 0,
    total_cautionnement_solidaires_valeur_marchande: 0,
    total_cautionnement_solidaires_valeur_considere: 0,
    total_caution_hypothecaires_valeur_marchande: 0,
    total_caution_hypothecaires_valeur_considere: 0,
    //
    total_cautionnement_solidaires_valeur_cautionnement: 0,
    total_cautionnement_solidaires_valeur_revenu_mensuel: 0,
    total_cautionnement_solidaires_valeur_patrimoine: 0,
    //
    suretes_diverses: [],
    autres_suretes_diverses: [],
    caution_hypothecaires: [_defineProperty({
      bien: "",
      proprietaire: "",
      numero_tel: "",
      annee_achat: "",
      adresse_emplacement: "",
      longitude: "",
      lattitude: "",
      date_evaluation: "",
      valeur_marchande: 0,
      valeur_considere: 0
    }, "date_evaluation", "")],
    protection_financieres: [_defineProperty({
      garantie: "",
      institution: "",
      date_attribution: "",
      date_evaluation: "",
      valeur_marchande: 0,
      valeur_considere: 0
    }, "date_evaluation", "")],
    hypotheques: [_defineProperty({
      bien_hypotheque: "",
      proprietaire: "",
      numero_tel: "",
      annee_achat: "",
      adresse_emplacement: "",
      longitude: "",
      lattitude: "",
      date_evaluation: "",
      valeur_marchande: 0,
      valeur_considere: 0
    }, "date_evaluation", "")],
    engagement_globales: [{
      montant_engagement_globale: "",
      entreprise_engagement_globale: ""
    }],
    gages: [_defineProperty({
      bien_a_gage: "",
      date_mise_circulation: "",
      proprietaire: "",
      numero_tel: "",
      annee_achat: "",
      adresse_emplacement: "",
      date_evaluation: "",
      valeur_marchande: 0,
      valeur_considere: 0
    }, "date_evaluation", "")],
    gages_mobiliers: [_defineProperty({
      bien_a_gage: "",
      proprietaire: "",
      numero_tel: "",
      annee_achat: "",
      adresse_emplacement: "",
      date_evaluation: "",
      valeur_marchande: 0,
      valeur_considere: 0
    }, "date_evaluation", "")],
    cond_particulieres: [{
      cond_name: "",
      cond_description: ""
    }],
    co_signataire: [{
      label: "Co-débiteur",
      nom: "",
      adresse: "",
      tel: "",
      relation_client: "",
      revenu_mensuel: "",
      source_revenue: ""
    }, {
      label: "Garant 1",
      nom: "",
      adresse: "",
      tel: "",
      relation_client: "",
      revenu_mensuel: "",
      source_revenue: ""
    }, {
      label: "Garant 2",
      nom: "",
      adresse: "",
      tel: "",
      relation_client: "",
      revenu_mensuel: "",
      source_revenue: ""
    }, {
      label: "Garant 3",
      nom: "",
      adresse: "",
      tel: "",
      relation_client: "",
      revenu_mensuel: "",
      source_revenue: ""
    }],
    taux_dep_gar_crsd: 0,
    montant_dep_gar_crsd: 0,
    cautionnement_solidaires: [{
      nom_prenoms: "",
      email: "",
      profession: "",
      indicatif_caution_solidaire: "",
      numero_tel_caution_solidaire: "",
      localisation_caution_solidaire: "",
      revenu_mensuel: 0,
      valeur_patrimoine: 0,
      valeur_cautionnement: 0
      // formulation:""
    }],
    filiale: ""
  };
}), "methods", {
  collectSuretes: function collectSuretes() {
    var suretes = {};
    suretes["hypotheques"] = this.hypotheques;
    suretes["gages"] = this.gages;
    suretes["defaultSuretes"] = this.defaultSuretes;
    suretes["engagement_globales"] = this.engagement_globales;
    suretes["protection_financieres"] = this.protection_financieres;
    suretes["cond_particulieres"] = this.cond_particulieres;
    suretes["cautionnement_solidaires"] = this.cautionnement_solidaires;
    suretes["caution_hypothecaires"] = this.caution_hypothecaires;
    return suretes;
  },
  setDateInput: function setDateInput(event) {
    var objectName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var property = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var index = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    if (objectName != null) {
      if (![null, undefined].includes(this[objectName][index][property])) {
        this[objectName][index][property] = event[1];
      }
    } else {
      this.formDataToBeWatched[event[0]] = event[1];
    }
    this.handleInput();
  },
  refreshSurete: function refreshSurete(e) {
    var index = this.suretes_diverses.findIndex(function (el) {
      return el.nom == "engagement";
    });
    this.$set(this.suretes_diverses, index, this.engagement_value);
  },
  refreshSurete1: function refreshSurete1(e) {
    var index = this.suretes_diverses.findIndex(function (el) {
      return el.nom == "nantissement";
    });
    this.$set(this.suretes_diverses, index, this.nantissement_dat);
  },
  addMore1: function addMore1() {
    this.cautionnement_solidaires.push({
      nom_prenoms: "",
      email: "",
      profession: "",
      indicatif_caution_solidaire: "",
      numero_tel_caution_solidaire: "",
      localisation_caution_solidaire: "",
      revenu_mensuel: 0,
      valeur_patrimoine: 0,
      valeur_cautionnement: 0
    });
    this.handleInput();
  },
  addMore: function addMore(listName) {
    if (listName = "frais_assurance_part") {
      this[listName].push({
        libelle: "",
        valeur: ""
      });
    } else {
      this[listName].push({
        article: "",
        proprietaire: "",
        numero_tel: "",
        annee_achat: "",
        adresse_emplacement: "",
        date_evaluation: "",
        valeur_marchande: 0,
        valeur_considere: 0
      });
    }
    this.handleInput();
  },
  remove1: function remove1(index) {
    this.cautionnement_solidaires.splice(index, 1);
    this.handleInput();
  },
  removeEngagementGlobale: function removeEngagementGlobale(index) {
    this.engagement_globales.splice(index, 1);
    this.refreshSurete();
    this.handleInput();
  },
  addAutreSurete: function addAutreSurete() {
    if (this.newSurete) {
      this.autres_suretes_diverses.push({
        label: this.newSurete,
        value: this.newSurete
      });
      this.handleInput();
    }
    this.newSurete = '';
  },
  removeAutreSurete: function removeAutreSurete(index) {
    this.autres_suretes_diverses.splice(index, 1);
    this.handleInput();
  },
  tableClosedOrOpened: function tableClosedOrOpened() {
    this.seen = this.fetchClosedTables(this.tb_name + this.meta_data['cred_pub_key']);
  },
  openNotesModal: function openNotesModal() {
    var listing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    this.listingNote = listing;
    this.$modal.show(this.tb_name);
  },
  setCoSignataireVars: function setCoSignataireVars(event, index) {
    this.co_signataire[index][event[0]] = event[1];
    this.handleInput();
  },
  loadCommentaire: function loadCommentaire() {
    var _this3 = this;
    var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
    var createdKey = this.tb_name;
    var createdKeyArr = createdKey.split("tb");
    createdKey = "cred_pub_tb_" + createdKeyArr[1];
    if (lentb.length > 0) {
      if (this.meta_data["dossier_credit"][createdKey] != undefined) {
        this.formDataToBeWatched.commentaire_activite = this.meta_data["dossier_credit"][createdKey]["commentaire_activite"];
      }
    }
    this.defaultSuretes = [{
      label: "Souscription de ".concat(this.souscriptionValue, " billets \xE0 ordre sign\xE9s par l'emprunteur"),
      value: {
        label: "Souscription de ".concat(this.souscriptionValue, " billets \xE0 ordre sign\xE9s par l'emprunteur"),
        nom: "souscription",
        billets: this.souscriptionValue
      },
      id: "souscription"
    }, {
      label: "D\xE9p\xF4t de garantie et compte de r\xE9serve du service de la dette (DG + CRSD) \xE0 hauteur de ".concat(this.montant_dep_gar_crsd, " soit ").concat(this.taux_dep_gar_crsd, "% du montant propos\xE9"),
      value: {
        label: "D\xE9p\xF4t de garantie et compte de r\xE9serve du service de la dette (DG + CRSD) \xE0 hauteur de ".concat(this.montant_dep_gar_crsd, " soit ").concat(this.taux_dep_gar_crsd, "% du montant propos\xE9"),
        nom: "depot",
        taux: this.taux_dep_gar_crsd,
        montant: this.montant_dep_gar_crsd
      },
      id: "depot"
    }];
    this.formDataToBeWatched.suretes_diverses.forEach(function (el, index) {
      _this3.defaultSuretes.forEach(function (elem) {
        if (elem.value.nom === el.nom) {
          _this3.formDataToBeWatched.suretes_diverses[index] = elem.value;
          // console.log({el: el.label, elem: elem.label})
        }
      });
    });
  },
  loadRetrieved: function loadRetrieved() {
    var _this$meta_data$dossi8,
      _this4 = this;
    var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
    var createdKey = this.tb_name;
    var createdKeyArr = createdKey.split("tb");
    createdKey = "cred_pub_tb_" + createdKeyArr[1];
    var applied_templ_name = (_this$meta_data$dossi8 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi8 === void 0 ? void 0 : _this$meta_data$dossi8.applied_templ_name;
    var tbArrays = this.determineCredPubTables(applied_templ_name);
    var credtb0 = tbArrays[0];
    var credtb1 = tbArrays[1];
    var credtb4 = tbArrays[4];
    var arrToUse = [createdKey, 'cred_pub_tb_0490', 'cred_pub_tb_490', 'cred_pub_tb_049',, 'cred_pub_tb_49', credtb4];
    // let arrToUse = [createdKey, 'cred_pub_tb_0490', 'cred_pub_tb_049' , 'cred_pub_tb_49', 'cred_pub_tb_490'];

    if (!(lentb !== null && lentb !== void 0 && lentb.length)) {
      console.warn('no tb');
      return;
    }
    for (var _i = 0, _arrToUse = arrToUse; _i < _arrToUse.length; _i++) {
      var _this$meta_data$dossi9, _this$meta_data7, _this$meta_data8, _this$meta_data9, _this$meta_data$dossi12, _this$meta_data0, _this$meta_data$dossi13, _this$meta_data1, _this$meta_data10, _this$meta_data11, _this$meta_data12, _this$meta_data$dossi14, _this$meta_data13, _this$meta_data$dossi15, _this$meta_data14, _this$meta_data15, _this$meta_data16, _this$meta_data17, _this$meta_data18, _this$meta_data19, _this$meta_data20, _this$meta_data21, _this$meta_data$dossi16, _this$meta_data22, _this$meta_data$dossi17, _this$meta_data23, _this$meta_data24, _this$meta_data25, _this$meta_data26, _this$meta_data27, _this$meta_data28, _this$meta_data29, _this$meta_data30, _this$meta_data31, _this$meta_data32, _this$meta_data33, _this$meta_data$dossi18;
      var credp = _arrToUse[_i];
      // console.log("credp", credp)
      if (((_this$meta_data$dossi9 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi9 === void 0 ? void 0 : _this$meta_data$dossi9[credp]) == undefined) continue;
      if (credp == 'cred_pub_tb_3002') {
        var _this$meta_data$dossi0;
        this.formDataToBeWatched = this.meta_data["dossier_credit"][credp];
        if (((_this$meta_data$dossi0 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi0 === void 0 ? void 0 : _this$meta_data$dossi0[credtb1]) != undefined) {
          var _this$meta_data$dossi1, _this$meta_data$dossi10, _this$meta_data$dossi11;
          this.montant_dep_gar_crsd = Number(((_this$meta_data$dossi1 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi1 === void 0 || (_this$meta_data$dossi1 = _this$meta_data$dossi1[credtb1]) === null || _this$meta_data$dossi1 === void 0 ? void 0 : _this$meta_data$dossi1['garantie']) + ((_this$meta_data$dossi10 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi10 === void 0 || (_this$meta_data$dossi10 = _this$meta_data$dossi10[credtb1]) === null || _this$meta_data$dossi10 === void 0 ? void 0 : _this$meta_data$dossi10['montant_crsd'])).toLocaleString();
          var a = Number((_this$meta_data$dossi11 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi11 === void 0 || (_this$meta_data$dossi11 = _this$meta_data$dossi11[credtb1]) === null || _this$meta_data$dossi11 === void 0 || (_this$meta_data$dossi11 = _this$meta_data$dossi11['montant_credit']) === null || _this$meta_data$dossi11 === void 0 ? void 0 : _this$meta_data$dossi11.toString().replace(/\s/g, ''));
          a = isNaN(a) ? 0 : a;
          var value = Number(this.montant_dep_gar_crsd.replace(/\s+/g, "")) * 100 / a;
          this.taux_dep_gar_crsd = isFinite(value) ? value : 0;
        }
      }
      var hypothequeKey = 'hypotheques' in ((_this$meta_data7 = this.meta_data) === null || _this$meta_data7 === void 0 || (_this$meta_data7 = _this$meta_data7.dossier_credit) === null || _this$meta_data7 === void 0 ? void 0 : _this$meta_data7[credp]) ? 'hypotheques' : 'hypotheques_analyste';
      var h = (_this$meta_data8 = this.meta_data) !== null && _this$meta_data8 !== void 0 && (_this$meta_data8 = _this$meta_data8.dossier_credit) !== null && _this$meta_data8 !== void 0 && (_this$meta_data8 = _this$meta_data8[credp]) !== null && _this$meta_data8 !== void 0 && (_this$meta_data8 = _this$meta_data8[hypothequeKey]) !== null && _this$meta_data8 !== void 0 && _this$meta_data8.length ? (_this$meta_data9 = this.meta_data) === null || _this$meta_data9 === void 0 || (_this$meta_data9 = _this$meta_data9.dossier_credit) === null || _this$meta_data9 === void 0 || (_this$meta_data9 = _this$meta_data9[credp]) === null || _this$meta_data9 === void 0 ? void 0 : _this$meta_data9[hypothequeKey] : this.hypotheques;
      var hypotheques = h === null || h === void 0 ? void 0 : h.map(function (h) {
        var _h$valeur_considere, _h$valeur_marchande;
        if (_typeof(h.valeur_considere) == 'object' && (_h$valeur_considere = h.valeur_considere) !== null && _h$valeur_considere !== void 0 && _h$valeur_considere.length) {
          h.valeur_considere = h.valeur_considere[1];
        }
        if (_typeof(h.valeur_marchande) == 'object' && (_h$valeur_marchande = h.valeur_marchande) !== null && _h$valeur_marchande !== void 0 && _h$valeur_marchande.length) {
          h.valeur_marchande = h.valeur_marchande[1];
        }
        // console.log('type', typeof h.valeur_considere);
        return h;
      });
      this.hypotheques = hypotheques;
      this.total_hypotheques_valeur_marchande = (_this$meta_data$dossi12 = (_this$meta_data0 = this.meta_data) === null || _this$meta_data0 === void 0 || (_this$meta_data0 = _this$meta_data0.dossier_credit) === null || _this$meta_data0 === void 0 || (_this$meta_data0 = _this$meta_data0[credp]) === null || _this$meta_data0 === void 0 ? void 0 : _this$meta_data0['total_hypotheques_valeur_marchande']) !== null && _this$meta_data$dossi12 !== void 0 ? _this$meta_data$dossi12 : 0;
      this.total_hypotheques_valeur_considere = (_this$meta_data$dossi13 = (_this$meta_data1 = this.meta_data) === null || _this$meta_data1 === void 0 || (_this$meta_data1 = _this$meta_data1.dossier_credit) === null || _this$meta_data1 === void 0 || (_this$meta_data1 = _this$meta_data1[credp]) === null || _this$meta_data1 === void 0 ? void 0 : _this$meta_data1['total_hypotheques_valeur_considere']) !== null && _this$meta_data$dossi13 !== void 0 ? _this$meta_data$dossi13 : 0;
      var gageKey = 'gages' in ((_this$meta_data10 = this.meta_data) === null || _this$meta_data10 === void 0 || (_this$meta_data10 = _this$meta_data10.dossier_credit) === null || _this$meta_data10 === void 0 ? void 0 : _this$meta_data10[credp]) ? 'gages' : 'gages_analyste';
      this.gages = (_this$meta_data11 = this.meta_data) !== null && _this$meta_data11 !== void 0 && (_this$meta_data11 = _this$meta_data11.dossier_credit) !== null && _this$meta_data11 !== void 0 && (_this$meta_data11 = _this$meta_data11[credp]) !== null && _this$meta_data11 !== void 0 && (_this$meta_data11 = _this$meta_data11[gageKey]) !== null && _this$meta_data11 !== void 0 && _this$meta_data11.length ? (_this$meta_data12 = this.meta_data) === null || _this$meta_data12 === void 0 || (_this$meta_data12 = _this$meta_data12.dossier_credit) === null || _this$meta_data12 === void 0 || (_this$meta_data12 = _this$meta_data12[credp]) === null || _this$meta_data12 === void 0 ? void 0 : _this$meta_data12[gageKey] : this.gages;
      this.total_gages_valeur_considere = (_this$meta_data$dossi14 = (_this$meta_data13 = this.meta_data) === null || _this$meta_data13 === void 0 || (_this$meta_data13 = _this$meta_data13.dossier_credit) === null || _this$meta_data13 === void 0 || (_this$meta_data13 = _this$meta_data13[credp]) === null || _this$meta_data13 === void 0 ? void 0 : _this$meta_data13['total_gages_valeur_considere']) !== null && _this$meta_data$dossi14 !== void 0 ? _this$meta_data$dossi14 : 0;
      this.total_gages_valeur_marchande = (_this$meta_data$dossi15 = (_this$meta_data14 = this.meta_data) === null || _this$meta_data14 === void 0 || (_this$meta_data14 = _this$meta_data14.dossier_credit) === null || _this$meta_data14 === void 0 || (_this$meta_data14 = _this$meta_data14[credp]) === null || _this$meta_data14 === void 0 ? void 0 : _this$meta_data14['total_gages_valeur_marchande']) !== null && _this$meta_data$dossi15 !== void 0 ? _this$meta_data$dossi15 : 0;
      this.cond_particulieres = (_this$meta_data15 = this.meta_data) !== null && _this$meta_data15 !== void 0 && (_this$meta_data15 = _this$meta_data15.dossier_credit) !== null && _this$meta_data15 !== void 0 && (_this$meta_data15 = _this$meta_data15[credp]) !== null && _this$meta_data15 !== void 0 && (_this$meta_data15 = _this$meta_data15['cond_particulieres']) !== null && _this$meta_data15 !== void 0 && _this$meta_data15.length ? (_this$meta_data16 = this.meta_data) === null || _this$meta_data16 === void 0 || (_this$meta_data16 = _this$meta_data16.dossier_credit) === null || _this$meta_data16 === void 0 || (_this$meta_data16 = _this$meta_data16[credp]) === null || _this$meta_data16 === void 0 ? void 0 : _this$meta_data16['cond_particulieres'] : this.cond_particulieres;
      this.suretes_diverses = (_this$meta_data17 = this.meta_data) !== null && _this$meta_data17 !== void 0 && (_this$meta_data17 = _this$meta_data17.dossier_credit) !== null && _this$meta_data17 !== void 0 && (_this$meta_data17 = _this$meta_data17[credp]) !== null && _this$meta_data17 !== void 0 && (_this$meta_data17 = _this$meta_data17['suretes_diverses']) !== null && _this$meta_data17 !== void 0 && _this$meta_data17.length ? (_this$meta_data18 = this.meta_data) === null || _this$meta_data18 === void 0 || (_this$meta_data18 = _this$meta_data18.dossier_credit) === null || _this$meta_data18 === void 0 || (_this$meta_data18 = _this$meta_data18[credp]) === null || _this$meta_data18 === void 0 ? void 0 : _this$meta_data18['suretes_diverses'] : this.suretes_diverses;
      var protections_financieres_key = 'protection_financieres' in ((_this$meta_data19 = this.meta_data) === null || _this$meta_data19 === void 0 || (_this$meta_data19 = _this$meta_data19.dossier_credit) === null || _this$meta_data19 === void 0 ? void 0 : _this$meta_data19[credp]) ? 'protection_financieres' : 'protections_financieres_eligibles';
      this.protection_financieres = (_this$meta_data20 = this.meta_data) !== null && _this$meta_data20 !== void 0 && (_this$meta_data20 = _this$meta_data20.dossier_credit) !== null && _this$meta_data20 !== void 0 && (_this$meta_data20 = _this$meta_data20[credp]) !== null && _this$meta_data20 !== void 0 && (_this$meta_data20 = _this$meta_data20[protections_financieres_key]) !== null && _this$meta_data20 !== void 0 && _this$meta_data20.length ? (_this$meta_data21 = this.meta_data) === null || _this$meta_data21 === void 0 || (_this$meta_data21 = _this$meta_data21.dossier_credit) === null || _this$meta_data21 === void 0 || (_this$meta_data21 = _this$meta_data21[credp]) === null || _this$meta_data21 === void 0 ? void 0 : _this$meta_data21[protections_financieres_key] : this.protection_financieres;
      this.total_protection_financieres_valeur_considere = (_this$meta_data$dossi16 = (_this$meta_data22 = this.meta_data) === null || _this$meta_data22 === void 0 || (_this$meta_data22 = _this$meta_data22.dossier_credit) === null || _this$meta_data22 === void 0 || (_this$meta_data22 = _this$meta_data22[credp]) === null || _this$meta_data22 === void 0 ? void 0 : _this$meta_data22['total_protection_financieres_valeur_considere']) !== null && _this$meta_data$dossi16 !== void 0 ? _this$meta_data$dossi16 : 0;
      this.total_protection_financieres_valeur_marchande = (_this$meta_data$dossi17 = (_this$meta_data23 = this.meta_data) === null || _this$meta_data23 === void 0 || (_this$meta_data23 = _this$meta_data23.dossier_credit) === null || _this$meta_data23 === void 0 || (_this$meta_data23 = _this$meta_data23[credp]) === null || _this$meta_data23 === void 0 ? void 0 : _this$meta_data23['total_protection_financieres_valeur_marchande']) !== null && _this$meta_data$dossi17 !== void 0 ? _this$meta_data$dossi17 : 0;
      this.caution_hypothecaires = (_this$meta_data24 = this.meta_data) !== null && _this$meta_data24 !== void 0 && (_this$meta_data24 = _this$meta_data24.dossier_credit) !== null && _this$meta_data24 !== void 0 && (_this$meta_data24 = _this$meta_data24[credp]) !== null && _this$meta_data24 !== void 0 && (_this$meta_data24 = _this$meta_data24['caution_hypothecaires']) !== null && _this$meta_data24 !== void 0 && _this$meta_data24.length ? (_this$meta_data25 = this.meta_data) === null || _this$meta_data25 === void 0 || (_this$meta_data25 = _this$meta_data25.dossier_credit) === null || _this$meta_data25 === void 0 || (_this$meta_data25 = _this$meta_data25[credp]) === null || _this$meta_data25 === void 0 ? void 0 : _this$meta_data25['caution_hypothecaires'] : this.caution_hypothecaires;
      this.autres_suretes_diverses = (_this$meta_data26 = this.meta_data) !== null && _this$meta_data26 !== void 0 && (_this$meta_data26 = _this$meta_data26.dossier_credit) !== null && _this$meta_data26 !== void 0 && (_this$meta_data26 = _this$meta_data26[credp]) !== null && _this$meta_data26 !== void 0 && (_this$meta_data26 = _this$meta_data26['autres_suretes_diverses']) !== null && _this$meta_data26 !== void 0 && _this$meta_data26.length ? (_this$meta_data27 = this.meta_data) === null || _this$meta_data27 === void 0 || (_this$meta_data27 = _this$meta_data27.dossier_credit) === null || _this$meta_data27 === void 0 || (_this$meta_data27 = _this$meta_data27[credp]) === null || _this$meta_data27 === void 0 ? void 0 : _this$meta_data27['autres_suretes_diverses'] : this.autres_suretes_diverses;
      this.cautionnement_solidaires = (_this$meta_data28 = this.meta_data) !== null && _this$meta_data28 !== void 0 && (_this$meta_data28 = _this$meta_data28.dossier_credit) !== null && _this$meta_data28 !== void 0 && (_this$meta_data28 = _this$meta_data28[credp]) !== null && _this$meta_data28 !== void 0 && (_this$meta_data28 = _this$meta_data28['cautionnement_solidaires']) !== null && _this$meta_data28 !== void 0 && _this$meta_data28.length ? (_this$meta_data29 = this.meta_data) === null || _this$meta_data29 === void 0 || (_this$meta_data29 = _this$meta_data29.dossier_credit) === null || _this$meta_data29 === void 0 || (_this$meta_data29 = _this$meta_data29[credp]) === null || _this$meta_data29 === void 0 ? void 0 : _this$meta_data29['cautionnement_solidaires'] : this.cautionnement_solidaires;
      this.engagement_globales = (_this$meta_data30 = this.meta_data) !== null && _this$meta_data30 !== void 0 && (_this$meta_data30 = _this$meta_data30.dossier_credit) !== null && _this$meta_data30 !== void 0 && (_this$meta_data30 = _this$meta_data30[credp]) !== null && _this$meta_data30 !== void 0 && (_this$meta_data30 = _this$meta_data30['engagement_globales']) !== null && _this$meta_data30 !== void 0 && _this$meta_data30.length ? (_this$meta_data31 = this.meta_data) === null || _this$meta_data31 === void 0 || (_this$meta_data31 = _this$meta_data31.dossier_credit) === null || _this$meta_data31 === void 0 || (_this$meta_data31 = _this$meta_data31[credp]) === null || _this$meta_data31 === void 0 ? void 0 : _this$meta_data31['engagement_globales'] : this.engagement_globales;
      this.depot_de_garanties = (_this$meta_data32 = this.meta_data) !== null && _this$meta_data32 !== void 0 && (_this$meta_data32 = _this$meta_data32.dossier_credit) !== null && _this$meta_data32 !== void 0 && (_this$meta_data32 = _this$meta_data32[credp]) !== null && _this$meta_data32 !== void 0 && (_this$meta_data32 = _this$meta_data32['depot_de_garanties']) !== null && _this$meta_data32 !== void 0 && _this$meta_data32.length ? (_this$meta_data33 = this.meta_data) === null || _this$meta_data33 === void 0 || (_this$meta_data33 = _this$meta_data33.dossier_credit) === null || _this$meta_data33 === void 0 || (_this$meta_data33 = _this$meta_data33[credp]) === null || _this$meta_data33 === void 0 ? void 0 : _this$meta_data33['depot_de_garanties'] : this.depot_de_garanties;
      // console.log('this.hypotheques', this.hypotheques);
      // console.log('this.total_hypotheques_valeur_marchande', this.total_hypotheques_valeur_marchande);
      // console.log('this.gages', this.gages);
      // console.log('this.total_gages_valeur_considere', this.total_gages_valeur_considere);
      // console.log('this.total_gages_valeur_marchande', this.total_gages_valeur_marchande);
      // console.log('this.cond_particulieres', this.cond_particulieres);
      // console.log('this.suretes_diverses', this.suretes_diverses);
      // console.log('this.autres_suretes_diverses', this.autres_suretes_diverses);
      // console.log('this.protection_financieres', this.protection_financieres);
      // console.log('this.cautionnement_solidaires', this.cautionnement_solidaires);
      this.defaultRetract(false, (_this$meta_data$dossi18 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi18 === void 0 ? void 0 : _this$meta_data$dossi18.applied_templ_id);
      //
      this.defaultSuretes = [{
        label: "Souscription de ".concat(this.souscriptionValue, " billets \xE0 ordre sign\xE9s par l'emprunteur"),
        value: {
          label: "Souscription de ".concat(this.souscriptionValue, " billets \xE0 ordre sign\xE9s par l'emprunteur"),
          nom: "souscription",
          billets: this.souscriptionValue
        },
        id: "souscription"
      }, {
        label: "D\xE9p\xF4t de garantie et compte de r\xE9serve du service de la dette (DG + CRSD) \xE0 hauteur de ".concat(this.montant_dep_gar_crsd, " soit ").concat(this.taux_dep_gar_crsd, "% du montant propos\xE9"),
        value: {
          label: "D\xE9p\xF4t de garantie et compte de r\xE9serve du service de la dette (DG + CRSD) \xE0 hauteur de ".concat(this.montant_dep_gar_crsd, " soit ").concat(this.taux_dep_gar_crsd, "% du montant propos\xE9"),
          nom: "depot",
          taux: this.taux_dep_gar_crsd,
          montant: this.montant_dep_gar_crsd
        },
        id: "depot"
      }];
      this.formDataToBeWatched.suretes_diverses.forEach(function (el, index) {
        _this4.defaultSuretes.forEach(function (elem) {
          if (elem.value.nom === el.nom) {
            _this4.formDataToBeWatched.suretes_diverses[index] = elem.value;
          }
        });
      });
      if (!["", undefined, null].includes(this.formDataToBeWatched.frais_assurance_part)) {
        this.frais_assurance_part = this.formDataToBeWatched.frais_assurance_part;
      }
      this.handleInput();
      //
      return;
    }
  },
  addMoreHypotheque: function addMoreHypotheque() {
    this.hypotheques.push(_defineProperty({
      bien_hypotheque: "",
      proprietaire: "",
      annee_achat: "",
      adresse_emplacement: "",
      longitude: "",
      lattitude: "",
      date_evaluation: "",
      valeur_marchande: 0,
      valeur_considere: 0
    }, "date_evaluation", ""));
  },
  addMoreGage: function addMoreGage() {
    this.gages.push(_defineProperty({
      bien_a_gage: "",
      proprietaire: "",
      annee_achat: "",
      adresse_emplacement: "",
      date_evaluation: "",
      valeur_marchande: 0,
      valeur_considere: 0
    }, "date_evaluation", ""));
  },
  addCondPart: function addCondPart() {
    this.cond_particulieres.push({
      cond_name: "",
      cond_description: ""
    });
  },
  addEngagementGlobale: function addEngagementGlobale() {
    this.engagement_globales.push({
      montant_engagement_globale: "",
      entreprise_engagement_globale: ""
    });
  },
  somX3: function somX3(ob, key) {
    // console.log('key',ob, key);
    if (ob == undefined) return 0;
    var som = 0;
    ob === null || ob === void 0 || ob.filter(function (elm) {
      var _elm$key;
      som += parseInt((_elm$key = elm[key]) === null || _elm$key === void 0 ? void 0 : _elm$key.toString().replace(/\s/g, ''));
    });
    return som;
  },
  remove: function remove(index, removeList) {
    this[removeList].splice(index, 1);
    this["total_" + removeList + "_valeur_marchande"] = this.somX3(this[removeList], "valeur_marchande");
    this["total_" + removeList + "_valeur_considere"] = this.somX3(this[removeList], "valeur_considere");
    this.handleInput();
  },
  removeHypotheque: function removeHypotheque(index) {
    this.hypotheques.splice(index, 1);
    this.handleInput();
  },
  removeGage: function removeGage(index) {
    this.gages.splice(index, 1);
    this.handleInput();
  },
  removeByKey: function removeByKey(index, removeList) {
    this[removeList].splice(index, 1);
    this.handleInput();
  },
  loadTbAttrs: function loadTbAttrs() {
    var l = [];
    var topdivel = this.$refs.topdiv;
    // let k = document.querySelectorAll('.subdiv')
    var k = document.querySelectorAll(".subdiv" + this.tb_name);
    if (k.length > 0) {
      k.forEach(function (e) {
        l.push(e.innerText);
      });
    }
    var p = {
      name_of_title: topdivel.innerText,
      list_of_content: l,
      id: "ca4-head"
    };
    this.$emit("load-buffer", p);
  },
  retract: function retract() {
    this.seen = !this.seen;
    var a = {
      "tb_name": this.tb_name + this.meta_data['cred_pub_key'],
      "status": this.seen
    };
    EventBus.$emit("savedclosed-table", a);
  },
  setTbVal: function setTbVal(val) {
    this.cred_pub_key = val;
  },
  loadWithError: function loadWithError(err) {
    // window.location.href = "/login";
  },
  send2Backend: function send2Backend(res, newVal, oldVal) {
    this.authcheck = true;
    this.authcheckUsr = res.data;
    this.$emit('autosaving');
    var dataToSave = _objectSpread({}, this.formDataToBeWatched);
    // console.log('dataToSave', this.formDataToBeWatched);
    this.$axios.post(this.ebapisHost + "creditbuilder/api/v1/autosaving/", {
      user: this.authcheckUsr,
      meta_parseable: this.meta_parseable,
      filledData: dataToSave
    }).then(function (response) {
      this.$emit('autosaving');
      var tbFetcheData = response.data;
      if (tbFetcheData["is_success"] === true) {
        this.$emit("load-shell");
      }
    }.bind(this))["catch"](function (error) {
      this.$Progress.finish();
      console.log(error);
    }.bind(this));
  },
  handleInput: function handleInput(evt) {
    this.total_hypotheques_valeur_marchande = this.somX3(this.hypotheques, 'valeur_marchande');
    this.total_hypotheques_valeur_considere = this.somX3(this.hypotheques, 'valeur_considere');
    this.total_gages_valeur_marchande = this.somX3(this.gages, 'valeur_marchande');
    this.total_gages_valeur_considere = this.somX3(this.gages, 'valeur_considere');
    this.total_protection_financieres_valeur_marchande = this.somX3(this.protection_financieres, "valeur_marchande");
    this.total_protection_financieres_valeur_considere = this.somX3(this.protection_financieres, "valeur_considere");
    this.total_caution_hypothecaires_valeur_marchande = this.somX3(this.caution_hypothecaires, "valeur_marchande");
    this.total_caution_hypothecaires_valeur_considere = this.somX3(this.caution_hypothecaires, "valeur_considere");
    //
    this.formDataToBeWatched.total_gages_mobiliers_valeur_marchande = this.somX3(this.gages_mobiliers, "valeur_marchande");
    this.formDataToBeWatched.total_gages_mobiliers_valeur_considere = this.somX3(this.gages_mobiliers, "valeur_considere");
    this.formDataToBeWatched.total_depot_de_garanties_valeur_marchande = this.somX3(this.depot_de_garanties, "valeur_marchande");
    this.formDataToBeWatched.total_depot_de_garanties_valeur_considere = this.somX3(this.depot_de_garanties, "valeur_considere");
    this.total_cautionnement_solidaires_valeur_cautionnement = this.somX3(this.cautionnement_solidaires, "valeur_cautionnement");
    this.total_cautionnement_solidaires_valeur_revenu_mensuel = this.somX3(this.cautionnement_solidaires, "revenu_mensuel");
    this.total_cautionnement_solidaires_valeur_patrimoine = this.somX3(this.cautionnement_solidaires, "valeur_patrimoine");
    this.formDataToBeWatched.total_caution_hypothecaires_valeur_marchande = this.total_caution_hypothecaires_valeur_marchande;
    this.formDataToBeWatched.total_caution_hypothecaires_valeur_considere = this.total_caution_hypothecaires_valeur_considere;
    this.formDataToBeWatched.total_cautionnement_solidaires_valeur_cautionnement = this.total_cautionnement_solidaires_valeur_cautionnement;
    this.formDataToBeWatched.total_cautionnement_solidaires_valeur_revenu_mensuel = this.total_cautionnement_solidaires_valeur_revenu_mensuel;
    this.formDataToBeWatched.total_cautionnement_solidaires_valeur_patrimoine = this.total_cautionnement_solidaires_valeur_patrimoine;
    this.formDataToBeWatched["engagement_globales"] = this.engagement_globales;
    this.formDataToBeWatched.total_montant_engagement_globale = this.totalEngagementGlobal;
    this.formDataToBeWatched['total_hypotheques_valeur_marchande'] = this.total_hypotheques_valeur_marchande;
    this.formDataToBeWatched['total_hypotheques_valeur_considere'] = this.total_hypotheques_valeur_considere;
    this.formDataToBeWatched['total_gages_valeur_marchande'] = this.total_gages_valeur_marchande;
    this.formDataToBeWatched['total_gages_valeur_considere'] = this.total_gages_valeur_considere;
    this.formDataToBeWatched['total_protection_financieres_valeur_considere'] = this.total_protection_financieres_valeur_considere;
    this.formDataToBeWatched['total_protection_financieres_valeur_marchande'] = this.total_protection_financieres_valeur_marchande;
    this.formDataToBeWatched["hypotheques"] = this.hypotheques;
    this.formDataToBeWatched["gages"] = this.gages;
    this.formDataToBeWatched["frais_assurance_part"] = this.frais_assurance_part;
    // this.formDataToBeWatched["gages_mobiliers"] = this.gages_mobiliers;
    // this.formDataToBeWatched["suretes_diverses"] = this.suretes_diverses;
    this.formDataToBeWatched["autres_suretes_diverses"] = this.autres_suretes_diverses;

    // this.formDataToBeWatched["co_signataire"] = this.co_signataire;
    this.formDataToBeWatched["cond_particulieres"] = this.cond_particulieres;
    this.formDataToBeWatched["cautionnement_solidaires"] = this.cautionnement_solidaires;
    this.formDataToBeWatched["caution_hypothecaires"] = this.caution_hypothecaires;
    // this.formDataToBeWatched["depot_de_garanties"] = this.depot_de_garanties;
    this.formDataToBeWatched["protection_financieres"] = this.protection_financieres;
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
  retract1: function retract1() {
    this.seen1 = !this.seen1;
  },
  retract2: function retract2() {
    this.seen2 = !this.seen2;
  },
  retract3: function retract3() {
    this.seen3 = !this.seen3;
  },
  retract4: function retract4() {
    this.seen4 = !this.seen4;
  },
  deleteTB: function deleteTB() {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce tableau ?')) {
      this.$emit('delete-tb', {
        tb_name: this.tb_name
      });
    }
  }
}), "watch", {
  formDataToBeWatched: {
    handler: function handler(newVal, oldVal) {
      this.autosaving(newVal, oldVal);
    },
    deep: true,
    immediate: true
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/credavailtick/Surete.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/credavailtick/Surete.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vueform/multiselect/dist/multiselect.vue2 */ "./node_modules/@vueform/multiselect/dist/multiselect.vue2.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "SuretesComponent",
  props: {
    suretes: Object,
    tb_name: String,
    dossier_credit: Object
  },
  components: {
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_2__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_2__.TrashIcon,
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_2__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_2__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_2__.ChevronDownIcon,
    Multiselect: _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  created: function created() {
    var _this = this;
    _services_credit_service__WEBPACK_IMPORTED_MODULE_0__["default"].loadpaysindicatif().then(function (res) {
      _this.countries = res.data;
    })["catch"](function (err) {
      console.log(err);
    });
  },
  data: function data() {
    return {
      seen: {},
      countries: []
    };
  },
  methods: {
    retract: function retract(slug) {
      this.seen[slug] = this.seen[slug] ? !this.seen[slug] : true;
      // console.log("seen", this.seen)
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/credavailtick/CR3.vue?vue&type=template&id=8a53d550&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/credavailtick/CR3.vue?vue&type=template&id=8a53d550&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o;}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o;},_typeof(o);}function _defineProperty(e,r,t){return(r=_toPropertyKey(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e;}function _toPropertyKey(t){var i=_toPrimitive(t,"string");return"symbol"==_typeof(i)?i:i+"";}function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return("string"===r?String:Number)(t);}var render=function render(){var _vm$formDataToBeWatch,_vm$meta_data,_this$meta_data,_this$meta_data2,_this$meta_data3,_this$meta_data4,_this$meta_data5,_this$meta_data6,_this$meta_data7,_this$meta_data8,_this$meta_data9,_this$meta_data0,_this$meta_data1,_this$meta_data10,_this$meta_data11,_this$meta_data12,_this$meta_data13,_this$meta_data14,_this$meta_data15,_this$meta_data16,_vm$formDataToBeWatch2;var _vm=this,_c=_vm._self._c;return _c("div",{on:{contextmenu:function contextmenu($event){return _vm.$refs.menu.open($event,_vm.tb_name);}}},[_c("div",{staticClass:"row bg-light card-width-height"},[_c("ContextMenu",{ref:"menu",attrs:{id:_vm.tb_name,cred_pub_key:_vm.meta_parseable.cred_pub_key,tb_name:_vm.tb_name,contextList:_vm.contextList}}),_vm._v(" "),_vm.seen===true?_c("div",{staticClass:"card card-width-height"},[_c("br"),_vm._v(" "),_c("div",{staticClass:"card-header hdc pb-0 pt-2"},[_c("h6",{ref:"topdiv",staticClass:"head",attrs:{id:"ca4-head"}},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col"},[_vm._v("\n                            "+_vm._s(_vm.tb_display_name)+" : Sûretés proposées et garanties\n                        ")]),_vm._v(" "),_c("div",{staticClass:"col-auto"},[((_vm$formDataToBeWatch=_vm.formDataToBeWatched.notes)===null||_vm$formDataToBeWatch===void 0?void 0:_vm$formDataToBeWatch.length)>0?_c("div",{staticStyle:{display:"inline-block",position:"relative"}},[_c("span",{attrs:{type:"button"},on:{click:function click($event){return _vm.openNotesModal(true);}}},[_c("i",{staticClass:"icofont icofont-comment text-white px-2",staticStyle:{"font-size":"12px"},attrs:{role:"button"}}),_vm._v(" "),_c("span",{staticClass:"badge-sm pb-3"},[_c("span",[_vm._v(" "+_vm._s(_vm.formDataToBeWatched.notes.length)+" ")])])])]):_vm._e(),_vm._v(" "),_c("chevron-up-icon",{staticClass:"custom-class",staticStyle:{cursor:"pointer"},attrs:{size:"21"},on:{click:function click($event){return _vm.retract();}}})],1)])])]),_vm._v(" "),_vm.notif_accord_credit!=true?_c("div",[["Crédit conso"].includes((_vm$meta_data=_vm.meta_data)===null||_vm$meta_data===void 0||(_vm$meta_data=_vm$meta_data.dossier_credit)===null||_vm$meta_data===void 0?void 0:_vm$meta_data.applied_templ_name)?_c("div",[(_this$meta_data=this.meta_data)!==null&&_this$meta_data!==void 0&&(_this$meta_data=_this$meta_data.dossier_credit)!==null&&_this$meta_data!==void 0&&_this$meta_data.tbs_in_use.includes("tb7004")?_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"fw-bold text-center"},[_vm._v("\n                            Garanties supports porposés par le CAF\n                        ")]),_vm._v(" "),_c("table",{staticClass:"table garantie_supports"},[_vm._m(0),_vm._v(" "),_c("tbody",{staticStyle:{"font-size":"16px"}},_vm._l((_this$meta_data2=this.meta_data)===null||_this$meta_data2===void 0||(_this$meta_data2=_this$meta_data2.dossier_credit)===null||_this$meta_data2===void 0||(_this$meta_data2=_this$meta_data2.cred_pub_tb_7004)===null||_this$meta_data2===void 0?void 0:_this$meta_data2.garantie_supports,function(garantie_support,index){return _c("tr",{key:index},[_c("td",[_c("label",{staticClass:"form-check-label"},[_vm._v("\n                                            "+_vm._s(garantie_support===null||garantie_support===void 0?void 0:garantie_support.label)+"\n                                        ")])]),_vm._v(" "),_c("td",[_c("input",{directives:[{name:"model",rawName:"v-model",value:garantie_support.value,expression:"garantie_support.value"}],staticClass:"form-check-input",staticStyle:{width:"20px",height:"20px"},attrs:{type:"checkbox",disabled:""},domProps:{checked:Array.isArray(garantie_support.value)?_vm._i(garantie_support.value,null)>-1:garantie_support.value},on:{change:function change($event){var $$a=garantie_support.value,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(garantie_support,"value",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(garantie_support,"value",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(garantie_support,"value",$$c);}}}})]),_vm._v(" "),_c("td",[_vm._v("\n                                        "+_vm._s(garantie_support.commentaire)+"\n                                    ")])]);}),0)])]):_vm._e(),_vm._v(" "),_c("br"),_vm._v(" "),(_this$meta_data3=this.meta_data)!==null&&_this$meta_data3!==void 0&&(_this$meta_data3=_this$meta_data3.dossier_credit)!==null&&_this$meta_data3!==void 0&&_this$meta_data3.tbs_in_use.includes("tb49")?_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"fw-bold text-center"},[_vm._v("\n                            Garanties supports porposés par le ARC\n                        ")]),_vm._v(" "),_c("table",{staticClass:"table garantie_supports"},[_vm._m(1),_vm._v(" "),_c("tbody",{staticStyle:{"font-size":"16px"}},_vm._l((_this$meta_data4=this.meta_data)===null||_this$meta_data4===void 0||(_this$meta_data4=_this$meta_data4.dossier_credit)===null||_this$meta_data4===void 0||(_this$meta_data4=_this$meta_data4.cred_pub_tb_49)===null||_this$meta_data4===void 0?void 0:_this$meta_data4.garantie_supports,function(garantie_support,index){return _c("tr",{key:index},[_c("td",[_c("label",{staticClass:"form-check-label"},[_vm._v("\n                                            "+_vm._s(garantie_support===null||garantie_support===void 0?void 0:garantie_support.label)+"\n                                        ")])]),_vm._v(" "),_c("td",[_c("input",{directives:[{name:"model",rawName:"v-model",value:garantie_support.value,expression:"garantie_support.value"}],staticClass:"form-check-input",staticStyle:{width:"20px",height:"20px"},attrs:{type:"checkbox",disabled:""},domProps:{checked:Array.isArray(garantie_support.value)?_vm._i(garantie_support.value,null)>-1:garantie_support.value},on:{change:function change($event){var $$a=garantie_support.value,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(garantie_support,"value",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(garantie_support,"value",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(garantie_support,"value",$$c);}}}})]),_vm._v(" "),_c("td",[_vm._v("\n                                        "+_vm._s(garantie_support.commentaire)+"\n                                    ")])]);}),0)])]):_vm._e(),_vm._v(" "),_c("br"),_vm._v(" "),(_this$meta_data5=this.meta_data)!==null&&_this$meta_data5!==void 0&&(_this$meta_data5=_this$meta_data5.dossier_credit)!==null&&_this$meta_data5!==void 0&&_this$meta_data5.tbs_in_use.includes("tb490")&&((_this$meta_data6=this.meta_data)===null||_this$meta_data6===void 0||(_this$meta_data6=_this$meta_data6.dossier_credit)===null||_this$meta_data6===void 0?void 0:_this$meta_data6.cred_pub_tb_490)!=undefined?_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"fw-bold text-center"},[_vm._v("\n                            Garanties supports porposés par le SRC\n                        ")]),_vm._v(" "),_c("table",{staticClass:"table garantie_supports"},[_vm._m(2),_vm._v(" "),_c("tbody",{staticStyle:{"font-size":"16px"}},_vm._l((_this$meta_data7=this.meta_data)===null||_this$meta_data7===void 0||(_this$meta_data7=_this$meta_data7.dossier_credit)===null||_this$meta_data7===void 0||(_this$meta_data7=_this$meta_data7.cred_pub_tb_490)===null||_this$meta_data7===void 0?void 0:_this$meta_data7.garantie_supports,function(garantie_support,index){return _c("tr",{key:index},[_c("td",[_c("label",{staticClass:"form-check-label"},[_vm._v("\n                                            "+_vm._s(garantie_support===null||garantie_support===void 0?void 0:garantie_support.label)+"\n                                        ")])]),_vm._v(" "),_c("td",[_c("input",{directives:[{name:"model",rawName:"v-model",value:garantie_support.value,expression:"garantie_support.value"}],staticClass:"form-check-input",staticStyle:{width:"20px",height:"20px"},attrs:{type:"checkbox",disabled:""},domProps:{checked:Array.isArray(garantie_support.value)?_vm._i(garantie_support.value,null)>-1:garantie_support.value},on:{change:function change($event){var $$a=garantie_support.value,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(garantie_support,"value",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(garantie_support,"value",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(garantie_support,"value",$$c);}}}})]),_vm._v(" "),_c("td",[_vm._v("\n                                        "+_vm._s(garantie_support.commentaire)+"\n                                    ")])]);}),0)])]):_vm._e(),_vm._v(" "),_c("br"),_vm._v(" "),(_this$meta_data8=this.meta_data)!==null&&_this$meta_data8!==void 0&&(_this$meta_data8=_this$meta_data8.dossier_credit)!==null&&_this$meta_data8!==void 0&&_this$meta_data8.tbs_in_use.includes("tb0490")&&((_this$meta_data9=this.meta_data)===null||_this$meta_data9===void 0||(_this$meta_data9=_this$meta_data9.dossier_credit)===null||_this$meta_data9===void 0?void 0:_this$meta_data9.cred_pub_tb_0490)!=undefined?_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"fw-bold text-center"},[_vm._v("\n                            Garanties supports renseignés par le SRCG\n                        ")]),_vm._v(" "),_c("table",{staticClass:"table garantie_supports"},[_vm._m(3),_vm._v(" "),_c("tbody",{staticStyle:{"font-size":"16px"}},_vm._l((_this$meta_data0=this.meta_data)===null||_this$meta_data0===void 0||(_this$meta_data0=_this$meta_data0.dossier_credit)===null||_this$meta_data0===void 0||(_this$meta_data0=_this$meta_data0.cred_pub_tb_0490)===null||_this$meta_data0===void 0?void 0:_this$meta_data0.garantie_supports,function(garantie_support,index){return _c("tr",{key:index},[index<9?_c("td",[_c("label",{staticClass:"form-check-label"},[_vm._v("\n                                            "+_vm._s(garantie_support===null||garantie_support===void 0?void 0:garantie_support.label)+"\n                                        ")])]):_c("td",[_c("input",{directives:[{name:"model",rawName:"v-model.lazy",value:garantie_support.label,expression:"garantie_support.label\n                                                ",modifiers:{lazy:true}}],staticClass:"form-control",staticStyle:{border:"0px"},attrs:{type:"text"},domProps:{value:garantie_support.label},on:{change:[function($event){return _vm.$set(garantie_support,"label",$event.target.value);},_vm.handleInput]}})]),_vm._v(" "),_c("td",[_c("input",{directives:[{name:"model",rawName:"v-model.lazy",value:garantie_support.value,expression:"garantie_support.value",modifiers:{lazy:true}}],staticClass:"form-check-input",staticStyle:{width:"20px",height:"20px"},attrs:{type:"checkbox"},domProps:{checked:Array.isArray(garantie_support.value)?_vm._i(garantie_support.value,null)>-1:garantie_support.value},on:{change:[function($event){var $$a=garantie_support.value,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(garantie_support,"value",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(garantie_support,"value",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(garantie_support,"value",$$c);}},_vm.handleInput]}})]),_vm._v(" "),_c("td",[_vm._v("\n                                        "+_vm._s(garantie_support.commentaire)+"\n                                    ")])]);}),0)])]):_vm._e(),_vm._v(" "),_c("br"),_vm._v(" "),_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"col-md-12 mt-0 mb-4"},[_vm._m(4),_vm._v(" "),_c("vue-editor",{attrs:{id:"comment_garantie_supports"},on:{"update-value":function updateValue($event){_vm.formDataToBeWatched[$event[0]]=$event[1];}},model:{value:_vm.formDataToBeWatched.comment_garantie_supports,callback:function callback($$v){_vm.$set(_vm.formDataToBeWatched,"comment_garantie_supports",$$v);},expression:"formDataToBeWatched.comment_garantie_supports"}})],1)]),_vm._v(" "),["FINL","CFN ML"].includes(_vm.filiale)?_c("div",[_vm.seen9===true?_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"relook-header",staticStyle:{cursor:"pointer"},on:{click:function click($event){_vm.seen9=!_vm.seen9;}}},[_c("h6",{"class":"subdiv"+this.tb_name,attrs:{id:"Resumé-des-garanties"}},[_vm._v("\n                                        Resumé des garanties\n                                        "),_c("chevron-up-icon",{staticClass:"custom-class",staticStyle:{"float":"right",cursor:"pointer"},attrs:{size:"21"}})],1)]),_vm._v(" "),_c("br"),_vm._v(" "),_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-6"},[_c("label",{attrs:{"for":""}},[_vm._v("\n                                            Etat de(s) garantie(s)\n                                        ")]),_vm._v(" "),_c("textarea",{directives:[{name:"model",rawName:"v-model",value:_vm.formDataToBeWatched.etat_garanties,expression:"formDataToBeWatched.etat_garanties"}],staticClass:"col-6 form-control",attrs:{type:"text",rows:"1",id:"etat_garanties"},domProps:{value:_vm.formDataToBeWatched.etat_garanties},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.formDataToBeWatched,"etat_garanties",$event.target.value);}}})]),_vm._v(" "),_c("div",{staticClass:"col-6"},[_c("label",[_vm._v("\n                                            Expiration due date des garanties\n                                        ")]),_vm._v(" "),_c("date-input",{attrs:{value:_vm.formDataToBeWatched.expiration_due_date,id:"expiration_due_date"},on:{input:_vm.setDateInput}})],1),_vm._v(" "),_c("div",{staticClass:"col-6"},[_c("label",[_vm._v("\n                                            Montant de(s) garantie(s)\n                                        ")]),_vm._v(" "),_c("currency-input",{staticClass:"form-control",attrs:{type:"text",defaultTyping:false,id:"montant_garanties"},model:{value:_vm.formDataToBeWatched.montant_garanties,callback:function callback($$v){_vm.$set(_vm.formDataToBeWatched,"montant_garanties",$$v);},expression:"formDataToBeWatched.montant_garanties"}})],1),_vm._v(" "),_c("div",{staticClass:"col-6"},[_c("label",[_vm._v("\n                                            Autres frais\n                                        ")]),_vm._v(" "),_c("input-group",{scopedSlots:_vm._u([{key:"input",fn:function fn(){return[_c("input",{directives:[{name:"model",rawName:"v-model.lazy",value:_vm.formDataToBeWatched.autres_frais,expression:"formDataToBeWatched.autres_frais",modifiers:{lazy:true}}],staticClass:"form-control",attrs:{required:"",type:"number",max:"25",min:"0",id:"autres_frais"},domProps:{value:_vm.formDataToBeWatched.autres_frais},on:{change:function change($event){return _vm.$set(_vm.formDataToBeWatched,"autres_frais",$event.target.value);}}})];},proxy:true},{key:"right",fn:function fn(){return[_vm._v("%")];},proxy:true}],null,false,2403251197)})],1),_vm._v(" "),_c("div",{staticClass:"col-6"},[_c("label",[_vm._v("\n                                            Date d'expiration\n                                        ")]),_vm._v(" "),_c("date-input",{attrs:{value:_vm.formDataToBeWatched.date_expiration,id:"date_expiration"},on:{input:_vm.setDateInput}})],1),_vm._v(" "),_c("div",{staticClass:"col-6"},[_c("label",[_vm._v("\n                                            Source remboursemment passé\n                                        ")]),_vm._v(" "),_c("textarea",{directives:[{name:"model",rawName:"v-model",value:_vm.formDataToBeWatched.source_remboursement_passe,expression:"formDataToBeWatched.source_remboursement_passe"}],staticClass:"col-6 form-control",attrs:{type:"text",rows:"1",id:"source_remboursement_passe"},domProps:{value:_vm.formDataToBeWatched.source_remboursement_passe},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.formDataToBeWatched,"source_remboursement_passe",$event.target.value);}}})])]),_vm._v(" "),_vm._m(5),_vm._v(" "),_vm._m(6),_vm._v(" "),_vm._l(_vm.frais_assurance_part,function(frais_assurance,k){return _c("div",{key:k,staticClass:"row my-4"},[_c("div",{staticClass:"col-5"},[_c("label",{attrs:{"for":""}},[_c("input",{directives:[{name:"model",rawName:"v-model",value:frais_assurance.libelle,expression:"frais_assurance.libelle"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:frais_assurance.libelle},on:{change:_vm.handleInput,input:function input($event){if($event.target.composing)return;_vm.$set(frais_assurance,"libelle",$event.target.value);}}})])]),_vm._v(" "),_c("div",{staticClass:"col-6"},[_c("currency-input",{staticClass:"form-control",attrs:{type:"text",defaultTyping:false},on:{change:_vm.handleInput},model:{value:frais_assurance.valeur,callback:function callback($$v){_vm.$set(frais_assurance,"valeur",$$v);},expression:"frais_assurance.valeur"}})],1),_vm._v(" "),k==0?_c("div",{staticClass:"col-1"},[_c("button",{directives:[{name:"show",rawName:"v-show",value:k==0,expression:"k == 0"}],staticStyle:{"background-color":"#2c3e50",color:"#ffffff","border-radius":"15%",border:"none"},attrs:{type:"button",title:"Ajouter une nouvelle garantie"},on:{click:function click($event){return _vm.addMore("frais_assurance_part");}}},[_c("plus-icon",{staticClass:"custom-class",attrs:{size:"21"}})],1)]):_c("div",{staticClass:"col-1"},[_c("button",{directives:[{name:"show",rawName:"v-show",value:_vm.index!=0,expression:"index != 0"}],staticStyle:{"background-color":"transparent",border:"none"},attrs:{type:"button",title:"Supprimer"},on:{click:function click(){_vm.frais_assurance_part.splice(k,1);}}},[_c("trash-icon",{staticClass:"custom-class",attrs:{size:"21"}})],1)])]);}),_vm._v(" "),_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-12"},[_vm._m(7),_vm._v(" "),_c("vue-editor",{attrs:{id:"resume_garanties"},on:{"update-value":function updateValue($event){_vm.formDataToBeWatched[$event[0]]=$event[1];}},model:{value:_vm.formDataToBeWatched.resume_garanties,callback:function callback($$v){_vm.$set(_vm.formDataToBeWatched,"resume_garanties",$$v);},expression:"formDataToBeWatched.resume_garanties"}})],1)])],2):_c("div",[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"relook-header",staticStyle:{cursor:"pointer"},on:{click:function click($event){_vm.seen9=!_vm.seen9;}}},[_c("h6",{attrs:{id:"Resumé-des-garanties"}},[_vm._v("\n                                            Resumé des garanties\n                                            "),_c("chevron-down-icon",{staticClass:"custom-class",staticStyle:{"float":"right",cursor:"pointer"},attrs:{size:"21"}})],1)])])])]):_vm._e()]):_c("div",[(_this$meta_data1=this.meta_data)!==null&&_this$meta_data1!==void 0&&(_this$meta_data1=_this$meta_data1.dossier_credit)!==null&&_this$meta_data1!==void 0&&_this$meta_data1.tbs_in_use.includes("tb4")||(_this$meta_data10=this.meta_data)!==null&&_this$meta_data10!==void 0&&(_this$meta_data10=_this$meta_data10.dossier_credit)!==null&&_this$meta_data10!==void 0&&_this$meta_data10.tbs_in_use.includes("tb7004")||(_this$meta_data11=this.meta_data)!==null&&_this$meta_data11!==void 0&&(_this$meta_data11=_this$meta_data11.dossier_credit)!==null&&_this$meta_data11!==void 0&&_this$meta_data11.tbs_in_use.includes("tb8004")||(_this$meta_data12=this.meta_data)!==null&&_this$meta_data12!==void 0&&(_this$meta_data12=_this$meta_data12.dossier_credit)!==null&&_this$meta_data12!==void 0&&_this$meta_data12.tbs_in_use.includes("tb9004")||(_this$meta_data13=this.meta_data)!==null&&_this$meta_data13!==void 0&&(_this$meta_data13=_this$meta_data13.dossier_credit)!==null&&_this$meta_data13!==void 0&&_this$meta_data13.tbs_in_use.includes("tb15004")||(_this$meta_data14=this.meta_data)!==null&&_this$meta_data14!==void 0&&(_this$meta_data14=_this$meta_data14.dossier_credit)!==null&&_this$meta_data14!==void 0&&_this$meta_data14.tbs_in_use.includes("tb16004")||(_this$meta_data15=this.meta_data)!==null&&_this$meta_data15!==void 0&&(_this$meta_data15=_this$meta_data15.dossier_credit)!==null&&_this$meta_data15!==void 0&&_this$meta_data15.tbs_in_use.includes("tb16104")||(_this$meta_data16=this.meta_data)!==null&&_this$meta_data16!==void 0&&(_this$meta_data16=_this$meta_data16.dossier_credit)!==null&&_this$meta_data16!==void 0&&_this$meta_data16.tbs_in_use.includes("tb12004")?_c("div",{},[_c("Surete",{attrs:{tb_name:_vm.tb_name,suretes:_vm.collectSuretes()}}),_vm._v(" "),_vm.seen1===true?_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"relook-header",staticStyle:{cursor:"pointer"},on:{click:function click($event){return _vm.retract1();}}},[_c("h6",{"class":"subdiv"+this.tb_name,attrs:{id:"hypothèques"}},[_vm._v("\n                                    Hypothèques\n                                    "),_c("chevron-up-icon",{staticClass:"custom-class",staticStyle:{"float":"right",cursor:"pointer"},attrs:{size:"21"}})],1)]),_vm._v(" "),_c("br"),_vm._v(" "),_c("div",{staticClass:"row px-3"},[_c("div",{staticClass:"fw-bold text-center"},[_vm._v("\n                                    Hypothèques\n                                ")]),_vm._v(" "),_c("div",{staticClass:"table-responsive"},[_c("table",{staticClass:"table table-borderless"},[_vm._m(8),_vm._v(" "),_c("tbody",[_vm._l(_vm.hypotheques,function(hypo_du_caf,index){return _c("tr",{key:index},[_c("td",[_vm._v("\n                                                    "+_vm._s(index+1)+".\n                                                ")]),_vm._v(" "),_c("td",[_c("input",{directives:[{name:"model",rawName:"v-model.lazy",value:hypo_du_caf.bien_hypotheque,expression:"hypo_du_caf.bien_hypotheque",modifiers:{lazy:true}}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:hypo_du_caf.bien_hypotheque},on:{change:function change($event){return _vm.$set(hypo_du_caf,"bien_hypotheque",$event.target.value);}}})]),_vm._v(" "),_c("td",[_c("input",{directives:[{name:"model",rawName:"v-model.lazy",value:hypo_du_caf.proprietaire,expression:"hypo_du_caf.proprietaire",modifiers:{lazy:true}}],staticClass:"form-control",attrs:{required:"",type:"text"},domProps:{value:hypo_du_caf.proprietaire},on:{change:function change($event){return _vm.$set(hypo_du_caf,"proprietaire",$event.target.value);}}})]),_vm._v(" "),_c("td",[_c("input",{directives:[{name:"model",rawName:"v-model.lazy",value:hypo_du_caf.annee_achat,expression:"hypo_du_caf.annee_achat",modifiers:{lazy:true}}],staticClass:"form-control",attrs:{required:"",type:"date"},domProps:{value:hypo_du_caf.annee_achat},on:{change:function change($event){return _vm.$set(hypo_du_caf,"annee_achat",$event.target.value);}}})]),_vm._v(" "),_c("td",[_c("input",{directives:[{name:"model",rawName:"v-model.lazy",value:hypo_du_caf.adresse_emplacement,expression:"hypo_du_caf.adresse_emplacement",modifiers:{lazy:true}}],staticClass:"form-control",attrs:{required:"",type:"text"},domProps:{value:hypo_du_caf.adresse_emplacement},on:{change:function change($event){return _vm.$set(hypo_du_caf,"adresse_emplacement",$event.target.value);}}})]),_vm._v(" "),_c("td",[_c("input",{directives:[{name:"model",rawName:"v-model.lazy",value:hypo_du_caf.longitude,expression:"hypo_du_caf.longitude",modifiers:{lazy:true}}],staticClass:"form-control",attrs:{required:"",type:"text"},domProps:{value:hypo_du_caf.longitude},on:{change:function change($event){return _vm.$set(hypo_du_caf,"longitude",$event.target.value);}}})]),_vm._v(" "),_c("td",[_c("input",{directives:[{name:"model",rawName:"v-model.lazy",value:hypo_du_caf.lattitude,expression:"hypo_du_caf.lattitude",modifiers:{lazy:true}}],staticClass:"form-control",attrs:{required:"",type:"text"},domProps:{value:hypo_du_caf.lattitude},on:{change:function change($event){return _vm.$set(hypo_du_caf,"lattitude",$event.target.value);}}})]),_vm._v(" "),_c("td",[_c("input",{directives:[{name:"model",rawName:"v-model.lazy",value:hypo_du_caf.date_evaluation,expression:"hypo_du_caf.date_evaluation",modifiers:{lazy:true}}],staticClass:"form-control",attrs:{required:"",type:"date"},domProps:{value:hypo_du_caf.date_evaluation},on:{change:function change($event){return _vm.$set(hypo_du_caf,"date_evaluation",$event.target.value);}}})]),_vm._v(" "),_c("td",[_c("currency-input",{staticClass:"form-control",attrs:{type:"text",defaultTyping:false,id:"valeur_marchande"+index},on:{input:_vm.handleInput},model:{value:hypo_du_caf.valeur_marchande,callback:function callback($$v){_vm.$set(hypo_du_caf,"valeur_marchande",$$v);},expression:"hypo_du_caf.valeur_marchande"}})],1),_vm._v(" "),_c("td",[_c("currency-input",{staticClass:"form-control",attrs:{type:"text",defaultTyping:false,id:"valeur_considere"+index},on:{input:_vm.handleInput},model:{value:hypo_du_caf.valeur_considere,callback:function callback($$v){_vm.$set(hypo_du_caf,"valeur_considere",$$v);},expression:"hypo_du_caf.valeur_considere"}})],1),_vm._v(" "),index==0?_c("td",[_c("button",{directives:[{name:"show",rawName:"v-show",value:index==0,expression:"index == 0"}],staticStyle:{"background-color":"#2c3e50",color:"#ffffff","border-radius":"15%",border:"none"},attrs:{type:"button",title:"Ajouter une nouvelle garantie"},on:{click:function click($event){return _vm.addMore("hypotheques");}}},[_c("plus-icon",{staticClass:"custom-class",attrs:{size:"21"}})],1)]):_c("td",[_c("button",{directives:[{name:"show",rawName:"v-show",value:index!=0,expression:"index != 0"}],staticStyle:{"background-color":"transparent",border:"none"},attrs:{type:"button",title:"Supprimer"},on:{click:function click($event){return _vm.remove(index,"hypotheques");}}},[_c("trash-icon",{staticClass:"custom-class",attrs:{size:"21"}})],1)])]);}),_vm._v(" "),_c("tr",[_vm._m(9),_vm._v(" "),_c("td",[_c("currency-input",{attrs:{readonly:"",defaultTyping:false,id:"total_hypotheques_valeur_marchande"},model:{value:_vm.total_hypotheques_valeur_marchande,callback:function callback($$v){_vm.total_hypotheques_valeur_marchande=$$v;},expression:"total_hypotheques_valeur_marchande"}})],1),_vm._v(" "),_c("td",[_c("currency-input",{attrs:{readonly:"",defaultTyping:false,id:"total_hypotheques_valeur_considere"},model:{value:_vm.total_hypotheques_valeur_considere,callback:function callback($$v){_vm.total_hypotheques_valeur_considere=$$v;},expression:"total_hypotheques_valeur_considere"}})],1)])],2)])])])]):_c("div",[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"relook-header",staticStyle:{cursor:"pointer"},on:{click:function click($event){return _vm.retract1();}}},[_c("h6",{attrs:{id:"hypothèques"}},[_vm._v("\n                                        Hypothèques\n                                        "),_c("chevron-down-icon",{staticClass:"custom-class",staticStyle:{"float":"right",cursor:"pointer"},attrs:{size:"21"}})],1)])])]),_vm._v(" "),_vm.seen2===true?_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"relook-header",staticStyle:{cursor:"pointer"},on:{click:function click($event){return _vm.retract2();}}},[_c("h6",{"class":"subdiv"+this.tb_name,attrs:{id:"gages"}},[_vm._v("\n                                    Gages\n                                    "),_c("chevron-up-icon",{staticClass:"custom-class",staticStyle:{"float":"right",cursor:"pointer"},attrs:{size:"21"}})],1)]),_vm._v(" "),_c("br"),_vm._v(" "),_c("div",{staticClass:"row px-3"},[_c("div",{staticClass:"fw-bold text-center"},[_vm._v("\n                                    Gages renseignés\n                                ")]),_vm._v(" "),_c("div",{staticClass:"table-responsive"},[_c("table",{staticClass:"table table-borderless"},[_vm._m(10),_vm._v(" "),_c("tbody",[_vm._l(_vm.gages,function(gage,index){return _c("tr",{key:index},[_c("td",[_vm._v(" "+_vm._s(index+1)+". ")]),_vm._v(" "),_c("td",[_c("select",{directives:[{name:"model",rawName:"v-model",value:gage.bien_a_gage,expression:"gage.bien_a_gage"}],staticClass:"form-select single-select",attrs:{id:"bien_a_gage"+index},on:{change:[function($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(gage,"bien_a_gage",$event.target.multiple?$$selectedVal:$$selectedVal[0]);},_vm.handleInput]}},[_c("option",{attrs:{selected:"",disabled:""}},[_vm._v("---")]),_vm._v(" "),_c("option",{attrs:{value:"Véhicule"}},[_vm._v("Véhicule")]),_vm._v(" "),_c("option",{attrs:{value:"Matériel professionnel"}},[_vm._v("Matériel professionnel\n                                                        ")]),_vm._v(" "),_c("option",{attrs:{value:"Natissement fond de commerce"}},[_vm._v("Natissement fond de\n                                                            commerce")]),_vm._v(" "),_c("option",{attrs:{value:"Nantissement compte bloqué"}},[_vm._v("Nantissement compte\n                                                            bloqué")])])]),_vm._v(" "),_c("td",[_c("input",{directives:[{name:"model",rawName:"v-model.lazy",value:gage.proprietaire,expression:"gage.proprietaire",modifiers:{lazy:true}}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:gage.proprietaire},on:{change:function change($event){return _vm.$set(gage,"proprietaire",$event.target.value);}}})]),_vm._v(" "),_c("td",[_c("input",{directives:[{name:"model",rawName:"v-model.lazy",value:gage.numero_tel,expression:"gage.numero_tel",modifiers:{lazy:true}}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:gage.numero_tel},on:{change:function change($event){return _vm.$set(gage,"numero_tel",$event.target.value);}}})]),_vm._v(" "),_c("td",[_c("input",{directives:[{name:"model",rawName:"v-model.lazy",value:gage.annee_achat,expression:"gage.annee_achat",modifiers:{lazy:true}}],staticClass:"form-control",attrs:{type:"date"},domProps:{value:gage.annee_achat},on:{change:function change($event){return _vm.$set(gage,"annee_achat",$event.target.value);}}})]),_vm._v(" "),_c("td",[_c("input",{directives:[{name:"model",rawName:"v-model.lazy",value:gage.adresse_emplacement,expression:"gage.adresse_emplacement",modifiers:{lazy:true}}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:gage.adresse_emplacement},on:{change:function change($event){return _vm.$set(gage,"adresse_emplacement",$event.target.value);}}})]),_vm._v(" "),_c("td",[_c("input",{directives:[{name:"model",rawName:"v-model.lazy",value:gage.date_evaluation,expression:"gage.date_evaluation",modifiers:{lazy:true}}],staticClass:"form-control",attrs:{type:"date"},domProps:{value:gage.date_evaluation},on:{change:function change($event){return _vm.$set(gage,"date_evaluation",$event.target.value);}}})]),_vm._v(" "),_c("td",[_c("currency-input",{staticClass:"form-control",attrs:{defaultTyping:false,type:"text",id:"g-valeur_marchande"+index},on:{input:_vm.handleInput},model:{value:gage.valeur_marchande,callback:function callback($$v){_vm.$set(gage,"valeur_marchande",$$v);},expression:"gage.valeur_marchande"}})],1),_vm._v(" "),_c("td",[_c("currency-input",{staticClass:"form-control",attrs:{defaultTyping:false,type:"text",id:"g-valeur_considere"+index},on:{input:_vm.handleInput},model:{value:gage.valeur_considere,callback:function callback($$v){_vm.$set(gage,"valeur_considere",$$v);},expression:"gage.valeur_considere"}})],1),_vm._v(" "),index==0?_c("td",[_c("button",{directives:[{name:"show",rawName:"v-show",value:index==0,expression:"index == 0"}],staticStyle:{"background-color":"#2c3e50",color:"#ffffff","border-radius":"15%",border:"none"},attrs:{type:"button",title:"Ajouter une nouvelle garantie"},on:{click:function click($event){return _vm.addMore("gages");}}},[_c("plus-icon",{staticClass:"custom-class",attrs:{size:"21"}})],1)]):_c("td",[_c("button",{directives:[{name:"show",rawName:"v-show",value:index!=0,expression:"index != 0"}],staticStyle:{"background-color":"transparent",border:"none"},attrs:{type:"button",title:"Supprimer"},on:{click:function click($event){return _vm.remove(index,"gages");}}},[_c("trash-icon",{staticClass:"custom-class",attrs:{size:"21"}})],1)])]);}),_vm._v(" "),_c("tr",[_vm._m(11),_vm._v(" "),_c("td",[_c("currency-input",{attrs:{readonly:"",defaultTyping:false,id:"total_gages_valeur_marchande"},model:{value:_vm.total_gages_valeur_marchande,callback:function callback($$v){_vm.total_gages_valeur_marchande=$$v;},expression:"total_gages_valeur_marchande"}})],1),_vm._v(" "),_c("td",[_c("currency-input",{attrs:{readonly:"",defaultTyping:false,id:"total_gages_valeur_considere"},model:{value:_vm.total_gages_valeur_considere,callback:function callback($$v){_vm.total_gages_valeur_considere=$$v;},expression:"total_gages_valeur_considere"}})],1)])],2)])])])]):_c("div",[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"relook-header",staticStyle:{cursor:"pointer"},on:{click:function click($event){return _vm.retract2();}}},[_c("h6",{attrs:{id:"gages"}},[_vm._v("\n                                        Gages\n                                        "),_c("chevron-down-icon",{staticClass:"custom-class",staticStyle:{"float":"right",cursor:"pointer"},attrs:{size:"21"}})],1)])])]),_vm._v(" "),_vm.seen3===true?_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"relook-header mb-3",staticStyle:{cursor:"pointer"},on:{click:function click($event){_vm.seen3=!_vm.seen3;}}},[_c("h6",{"class":"subdiv"+this.tb_name,attrs:{id:"sûretés-diverses"}},[_vm._v("\n                                    Sûretés diverses\n                                    "),_c("chevron-up-icon",{staticClass:"custom-class",staticStyle:{"float":"right",cursor:"pointer"},attrs:{size:"21"}})],1)]),_vm._v(" "),_c("div",{staticClass:"row"},[_vm._l(_vm.defaultSuretes,function(sure){return _c("div",{key:sure.label,staticClass:"form-group py-2"},[_c("div",{staticClass:"form-check"},[_c("input",{directives:[{name:"model",rawName:"v-model.lazy",value:_vm.suretes_diverses,expression:"suretes_diverses",modifiers:{lazy:true}}],staticClass:"form-check-input",attrs:{type:"checkbox",id:sure.id},domProps:_defineProperty({checked:function checked(){return _vm.suretes_diverses.some(function(el){return el.id===sure.id;});},value:sure.value},"checked",Array.isArray(_vm.suretes_diverses)?_vm._i(_vm.suretes_diverses,sure.value)>-1:_vm.suretes_diverses),on:{change:[function($event){var $$a=_vm.suretes_diverses,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=sure.value,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.suretes_diverses=$$a.concat([$$v]));}else{$$i>-1&&(_vm.suretes_diverses=$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.suretes_diverses=$$c;}},_vm.handleInput]}}),_vm._v(" "),_c("label",{staticClass:"form-check-label",attrs:{"for":sure.id}},[_vm._v("\n                                            "+_vm._s(sure.label)+"\n                                        ")])])]);}),_vm._v(" "),_c("div",{staticClass:"form-group py-2"},[_c("div",{staticClass:"form-check"},[_c("input",{directives:[{name:"model",rawName:"v-model.lazy",value:_vm.suretes_diverses,expression:"suretes_diverses",modifiers:{lazy:true}}],staticClass:"form-check-input pt-2",attrs:{name:"surete",type:"checkbox",id:"nantissement"},domProps:{value:_vm.nantissement_dat,checked:Array.isArray(_vm.suretes_diverses)?_vm._i(_vm.suretes_diverses,_vm.nantissement_dat)>-1:_vm.suretes_diverses},on:{change:[function($event){var $$a=_vm.suretes_diverses,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=_vm.nantissement_dat,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.suretes_diverses=$$a.concat([$$v]));}else{$$i>-1&&(_vm.suretes_diverses=$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.suretes_diverses=$$c;}},_vm.handleInput]}}),_vm._v(" "),_c("label",{staticClass:"form-check-label",attrs:{"for":"nantissement"}},[_vm._v("\n                                            Nantissement de DAT de\n                                            "),_c("currency-input",{staticClass:"form-control d-inline",attrs:{defaultTyping:false,type:"text",id:"montant_dat",value:"0"},on:{input:_vm.refreshSurete1},model:{value:_vm.formDataToBeWatched.montant_dat,callback:function callback($$v){_vm.$set(_vm.formDataToBeWatched,"montant_dat",$$v);},expression:"\n                                                    formDataToBeWatched.montant_dat\n                                                "}}),_vm._v("\n                                            qui a pour référence  "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.formDataToBeWatched.reference_dat,expression:"\n                                                    formDataToBeWatched.reference_dat\n                                                "}],staticClass:"form-control d-inline review",attrs:{type:"text",value:"0"},domProps:{value:_vm.formDataToBeWatched.reference_dat},on:{change:_vm.refreshSurete1,input:function input($event){if($event.target.composing)return;_vm.$set(_vm.formDataToBeWatched,"reference_dat",$event.target.value);}}})],1)])]),_vm._v(" "),_c("div",{staticClass:"form-group py-2"},[_c("div",{staticClass:"form-check"},[_c("input",{directives:[{name:"model",rawName:"v-model.lazy",value:_vm.suretes_diverses,expression:"suretes_diverses",modifiers:{lazy:true}}],staticClass:"form-check-input pt-2",attrs:{name:"engagement",type:"checkbox",id:"engagement"},domProps:{value:_vm.engagement_value,checked:Array.isArray(_vm.suretes_diverses)?_vm._i(_vm.suretes_diverses,_vm.engagement_value)>-1:_vm.suretes_diverses},on:{change:[function($event){var $$a=_vm.suretes_diverses,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=_vm.engagement_value,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.suretes_diverses=$$a.concat([$$v]));}else{$$i>-1&&(_vm.suretes_diverses=$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.suretes_diverses=$$c;}},_vm.handleInput]}}),_vm._v(" "),_c("label",{staticClass:"form-check-label",attrs:{"for":"engagement"}},[_vm._v("\n                                            Engagement de domiciliation globale de "+_vm._s(_vm.totalEngagementGlobal)+"\n                                        ")]),_vm._v(" "),_vm._m(12),_vm._v(" "),_vm._l(_vm.engagement_globales,function(engagement_globale,index){return _c("div",{key:index,staticClass:"row mt-2"},[_c("div",{staticClass:"col-5 engagement"},[_c("currency-input",{attrs:{defaultTyping:false,id:"eg-montant_engagement_globale"+index},on:{input:_vm.refreshSurete},model:{value:engagement_globale.montant_engagement_globale,callback:function callback($$v){_vm.$set(engagement_globale,"montant_engagement_globale",$$v);},expression:"\n                                                    engagement_globale.montant_engagement_globale"}})],1),_vm._v(" "),_c("div",{staticClass:"col-5 engagement"},[_c("input",{directives:[{name:"model",rawName:"v-model.lazy",value:engagement_globale.entreprise_engagement_globale,expression:"\n                                                        engagement_globale.entreprise_engagement_globale\n                                                    ",modifiers:{lazy:true}}],staticClass:"form-control",attrs:{required:"",type:"text"},domProps:{value:engagement_globale.entreprise_engagement_globale},on:{change:[function($event){return _vm.$set(engagement_globale,"entreprise_engagement_globale",$event.target.value);},_vm.refreshSurete]}})]),_vm._v(" "),index==0?_c("div",{staticClass:"col-2"},[_c("button",{directives:[{name:"show",rawName:"v-show",value:index==0,expression:"index == 0"}],staticStyle:{"background-color":"#2c3e50",color:"#ffffff","border-radius":"15%",border:"none"},attrs:{type:"button",title:"Ajouter une nouvelle garantie"},on:{click:function click($event){return _vm.addEngagementGlobale();}}},[_c("plus-icon",{staticClass:"custom-class",attrs:{size:"21"}})],1)]):_c("div",{staticClass:"col-2"},[_c("div",{staticClass:"d-flex align-items-center"},[_c("button",{directives:[{name:"show",rawName:"v-show",value:index!=0,expression:"index != 0"}],staticStyle:{"background-color":"transparent",border:"none"},attrs:{type:"button",title:"Supprimer"},on:{click:function click($event){return _vm.removeEngagementGlobale(index);}}},[_c("trash-icon",{staticClass:"custom-class",attrs:{size:"21"}})],1)])])]);}),_vm._v(" "),_c("div",{staticClass:"row mt-2"},[_c("div",{staticClass:"col-5 engagement"},[_c("label",{staticClass:"fw-bold"},[_vm._v("\n                                                    Total\n                                                ")]),_vm._v(" "),_c("currency-input",{attrs:{defaultTyping:false,disabled:"",id:"total_montant_engagement_globale"},on:{input:_vm.refreshSurete},model:{value:_vm.formDataToBeWatched.total_montant_engagement_globale,callback:function callback($$v){_vm.$set(_vm.formDataToBeWatched,"total_montant_engagement_globale",$$v);},expression:"\n                                                        formDataToBeWatched.total_montant_engagement_globale\n                                                    "}})],1),_vm._v(" "),_c("div",{staticClass:"col-5 engagement"})])],2)]),_vm._v(" "),_c("div",{staticClass:"form-group py-2 mt-2"},[_vm._m(13),_vm._v(" "),_c("div",{staticClass:"col-12"},[_c("div",{staticClass:"d-flex justify-content-between"},[_c("div",{staticClass:"col-11"},[_c("input",{directives:[{name:"model",rawName:"v-model.lazy",value:_vm.newSurete,expression:"newSurete",modifiers:{lazy:true}}],staticClass:"form-control",staticStyle:{width:"100%"},attrs:{placeholder:"Ajouter une autre sureté diverse ici",name:"surete",type:"text",id:"engagement"},domProps:{value:_vm.newSurete},on:{keyup:function keyup($event){if(!$event.type.indexOf("key")&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter"))return null;return _vm.addAutreSurete.apply(null,arguments);},change:function change($event){_vm.newSurete=$event.target.value;}}})]),_vm._v(" "),_c("div",{staticClass:"col d-flex align-items-center justify-content-center"},[_c("button",{staticClass:"py-1",staticStyle:{"background-color":"#2c3e50",color:"#ffffff","border-radius":"15%",border:"none"},attrs:{type:"button",title:"Ajouter une nouvelle garantie"},on:{click:_vm.addAutreSurete}},[_c("plus-icon",{staticClass:"custom-class",attrs:{size:"21"}})],1)])])]),_vm._v(" "),_vm.autres_suretes_diverses.length?_c("div",{staticClass:"col-12 mt-3"},[_c("table",{staticClass:"table table-bordered table-striped table-responsive table-hover"},[_vm._m(14),_vm._v(" "),_c("tbody",_vm._l(_vm.autres_suretes_diverses,function(autre_surete,index){return _c("tr",{key:autre_surete.label},[_c("td",{staticClass:"col-1"},[_vm._v("\n                                                        "+_vm._s(index+1)+".\n                                                    ")]),_vm._v(" "),_c("td",{staticClass:"col-10"},[_vm._v("\n                                                        "+_vm._s(autre_surete.label)+"\n                                                    ")]),_vm._v(" "),_c("td",{staticClass:"col-1 text-center"},[_c("i",{staticClass:"icofont-trash",on:{click:function click($event){return _vm.removeAutreSurete(index);}}})])]);}),0)])]):_vm._e()])],2)]):_c("div",[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"relook-header",staticStyle:{cursor:"pointer"},on:{click:function click($event){_vm.seen3=!_vm.seen3;}}},[_c("h6",{attrs:{id:"sûretés-diverses"}},[_vm._v("\n                                        Sûretés diverses\n                                        "),_c("chevron-down-icon",{staticClass:"custom-class",staticStyle:{"float":"right",cursor:"pointer"},attrs:{size:"21"}})],1)])])]),_vm._v(" "),_vm.seen6===true?_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"relook-header",staticStyle:{cursor:"pointer"},on:{click:function click($event){_vm.seen6=!_vm.seen6;}}},[_c("h6",{"class":"subdiv"+this.tb_name,attrs:{id:"protections-financieres-eligibles"}},[_vm._v("\n                                    Protections financières éligibles (Garantie/Assurance crédit)\n                                    "),_c("chevron-up-icon",{staticClass:"custom-class",staticStyle:{"float":"right",cursor:"pointer"},attrs:{size:"21"}})],1)]),_vm._v(" "),_c("br"),_vm._v(" "),_c("div",{staticClass:"table-responsive"},[_c("table",{staticClass:"table mb-5 table-borderless"},[_vm._m(15),_vm._v(" "),_c("tbody",[_vm._l(_vm.protection_financieres,function(protection_financiere,index){return _c("tr",{key:index},[_c("td",[_vm._v(_vm._s(index+1)+".")]),_vm._v(" "),_c("td",[_c("input",{directives:[{name:"model",rawName:"v-model.lazy",value:protection_financiere.garantie,expression:"\n                                                        protection_financiere.garantie\n                                                    ",modifiers:{lazy:true}}],staticClass:"form-control",attrs:{required:"",type:"text"},domProps:{value:protection_financiere.garantie},on:{change:[function($event){return _vm.$set(protection_financiere,"garantie",$event.target.value);},_vm.handleInput]}})]),_vm._v(" "),_c("td",[_c("input",{directives:[{name:"model",rawName:"v-model.lazy",value:protection_financiere.institution,expression:"\n                                                        protection_financiere.institution\n                                                    ",modifiers:{lazy:true}}],staticClass:"form-control",attrs:{required:"",type:"text"},domProps:{value:protection_financiere.institution},on:{change:[function($event){return _vm.$set(protection_financiere,"institution",$event.target.value);},_vm.handleInput]}})]),_vm._v(" "),_c("td",[_c("date-input",{staticClass:"input-date",attrs:{value:protection_financiere.date_attribution},on:{input:function input($event){return _vm.setDateInput($event,"protection_financieres","date_attribution",index);}}})],1),_vm._v(" "),_c("td",[_c("date-input",{staticClass:"input-date",attrs:{value:protection_financiere.date_evaluation},on:{input:function input($event){return _vm.setDateInput($event,"protection_financieres","date_evaluation",index);}}})],1),_vm._v(" "),_c("td",[_c("currency-input",{staticClass:"form-control",attrs:{defaultTyping:false,type:"text",id:"pf-valeur_marchande"+index},on:{input:_vm.handleInput},model:{value:protection_financiere.valeur_marchande,callback:function callback($$v){_vm.$set(protection_financiere,"valeur_marchande",$$v);},expression:"\n                                                        protection_financiere.valeur_marchande\n                                                    "}})],1),_vm._v(" "),_c("td",[_c("currency-input",{staticClass:"form-control",attrs:{defaultTyping:false,type:"text",id:"pf-valeur_considere"+index},on:{input:_vm.handleInput},model:{value:protection_financiere.valeur_considere,callback:function callback($$v){_vm.$set(protection_financiere,"valeur_considere",$$v);},expression:"\n                                                        protection_financiere.valeur_considere\n                                                    "}})],1),_vm._v(" "),index==0?_c("td",[_c("button",{directives:[{name:"show",rawName:"v-show",value:index==0,expression:"index == 0"}],staticStyle:{"background-color":"#2c3e50",color:"#ffffff","border-radius":"15%",border:"none"},attrs:{type:"button",title:"Ajouter une nouvelle garantie"},on:{click:function click($event){return _vm.addMore("protection_financieres");}}},[_c("plus-icon",{staticClass:"custom-class",attrs:{size:"21"}})],1)]):_c("td",[_c("button",{directives:[{name:"show",rawName:"v-show",value:index!=0,expression:"index != 0"}],staticStyle:{"background-color":"transparent",border:"none"},attrs:{type:"button",title:"Supprimer"},on:{click:function click($event){return _vm.remove(index,"protection_financieres");}}},[_c("trash-icon",{staticClass:"custom-class",attrs:{size:"21"}})],1)])]);}),_vm._v(" "),_c("tr",[_vm._m(16),_vm._v(" "),_c("td",[_c("currency-input",{attrs:{readonly:"",defaultTyping:false,id:"total_protection_financieres_valeur_marchande"},model:{value:_vm.total_protection_financieres_valeur_marchande,callback:function callback($$v){_vm.total_protection_financieres_valeur_marchande=$$v;},expression:"total_protection_financieres_valeur_marchande"}})],1),_vm._v(" "),_c("td",[_c("currency-input",{attrs:{readonly:"",defaultTyping:false,id:"total_protection_financieres_valeur_considere"},model:{value:_vm.total_protection_financieres_valeur_considere,callback:function callback($$v){_vm.total_protection_financieres_valeur_considere=$$v;},expression:"total_protection_financieres_valeur_considere"}})],1)])],2)])])]):_c("div",[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"relook-header",staticStyle:{cursor:"pointer"},on:{click:function click($event){_vm.seen6=!_vm.seen6;}}},[_c("h6",{attrs:{id:"protections-financieres-eligibles"}},[_vm._v("\n                                        Protections financières éligibles  (Garantie/Assurance crédit)\n                                        "),_c("chevron-down-icon",{staticClass:"custom-class",staticStyle:{"float":"right",cursor:"pointer"},attrs:{size:"21"}})],1)])])]),_vm._v(" "),_vm.seen4===true?_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"relook-header",staticStyle:{cursor:"pointer"},on:{click:function click($event){return _vm.retract4();}}},[_c("h6",{"class":"subdiv"+this.tb_name,attrs:{id:"conditions-particulières"}},[_vm._v("\n                                    Conditions particulières\n                                    "),_c("chevron-up-icon",{staticClass:"custom-class",staticStyle:{"float":"right",cursor:"pointer"},attrs:{size:"21"}})],1)]),_vm._v(" "),_c("br"),_vm._v(" "),_c("div",{staticClass:"row px-3"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"fw-bold text-center"},[_vm._v("\n                                        Conditions particulières\n                                    ")]),_vm._v(" "),_c("div",{staticClass:"table-responsive"},[_c("table",{staticClass:"table mb-5 table-borderless"},[_vm._m(17),_vm._v(" "),_c("tbody",_vm._l(_vm.cond_particulieres,function(cond_particuliere,index){return _c("tr",{key:index},[_c("td",[_vm._v(" "+_vm._s(index+1)+". ")]),_vm._v(" "),_c("td",[_c("input",{directives:[{name:"model",rawName:"v-model.lazy",value:cond_particuliere.cond_description,expression:"cond_particuliere.cond_description",modifiers:{lazy:true}}],staticClass:"form-control",domProps:{value:cond_particuliere.cond_description},on:{input:_vm.handleInput,change:function change($event){return _vm.$set(cond_particuliere,"cond_description",$event.target.value);}}})]),_vm._v(" "),index==0?_c("td",[_c("button",{directives:[{name:"show",rawName:"v-show",value:index==0,expression:"index == 0"}],staticStyle:{"background-color":"#2c3e50",color:"#ffffff","border-radius":"15%",border:"none"},attrs:{type:"button",title:"Ajouter une nouvelle garantie"},on:{click:function click($event){return _vm.addCondPart();}}},[_c("plus-icon",{staticClass:"custom-class",attrs:{size:"21"}})],1)]):_c("td",{attrs:{align:"center"}},[_c("div",{staticClass:"d-flex align-items-center"},[_c("button",{directives:[{name:"show",rawName:"v-show",value:index!=0,expression:"index != 0"}],staticStyle:{"background-color":"transparent",border:"none"},attrs:{type:"button",title:"Supprimer"},on:{click:function click($event){return _vm.removeByKey(index,"cond_particulieres");}}},[_c("trash-icon",{staticClass:"custom-class",attrs:{size:"21"}})],1)])])]);}),0)])])])])]):_c("div",[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"relook-header",staticStyle:{cursor:"pointer"},on:{click:function click($event){return _vm.retract4();}}},[_c("h6",{attrs:{id:"conditions-particulières"}},[_vm._v("\n                                        Conditions particulières\n                                        "),_c("chevron-down-icon",{staticClass:"custom-class",staticStyle:{"float":"right",cursor:"pointer"},attrs:{size:"21"}})],1)])])]),_vm._v(" "),_vm.seen5?_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"relook-header",on:{click:function click($event){_vm.seen5=!_vm.seen5;}}},[_c("h6",{"class":" subdiv"+this.tb_name,attrs:{id:"patrimoine-de-la-l'actionnaire"}},[_vm._v("\n                                    Cautionnement solidaire\n                                    "),_c("i",{staticClass:"icofont icofont-rounded-up",staticStyle:{"float":"right",cursor:"pointer"}})])]),_vm._v(" "),_c("div",{staticClass:"row px-3"},[_c("div",{staticClass:"fw-bold text-center"},[_vm._v("\n                                    Cautionnement renseignés\n                                ")]),_vm._v(" "),_c("div",{staticClass:"table-responsive"},[_c("table",{staticClass:"table table-borderless mb-1"},[_vm._m(18),_vm._v(" "),_c("tbody",[_vm._l(_vm.cautionnement_solidaires,function(cautionnement,index){return _c("tr",{key:index},[_c("td",{staticClass:"col-4"},[_c("input",{directives:[{name:"model",rawName:"v-model.lazy",value:cautionnement.nom_prenoms,expression:"cautionnement.nom_prenoms\n                                                        ",modifiers:{lazy:true}}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:cautionnement.nom_prenoms},on:{input:_vm.handleInput,change:function change($event){return _vm.$set(cautionnement,"nom_prenoms",$event.target.value);}}})]),_vm._v(" "),_c("td",{staticClass:"col-2"},[_c("input",{directives:[{name:"model",rawName:"v-model.lazy",value:cautionnement.profession,expression:"cautionnement.profession",modifiers:{lazy:true}}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:cautionnement.profession},on:{input:_vm.handleInput,change:function change($event){return _vm.$set(cautionnement,"profession",$event.target.value);}}})]),_vm._v(" "),_c("td",[_c("Multiselect",{staticStyle:{width:"97px",height:"42px"},attrs:{searchable:true,trackBy:"name",label:"name","value-prop":"phonecode",classes:{optionPointed:"text-gray-800 bg-gray-100"},options:_vm.countries},scopedSlots:_vm._u([{key:"option",fn:function fn(_ref){var option=_ref.option,isPointed=_ref.isPointed;return[_c("p",{staticClass:"multiselect-option"},[_vm._v("\n                                                                "+_vm._s(option.name)+"\n                                                            ")])];}},{key:"singlelabel",fn:function fn(_ref2){var value=_ref2.value;return[_c("p",{staticClass:"multiselect-single-label"},[_vm._v("\n                                                                "+_vm._s(value.phonecode)+"\n                                                            ")])];}}],null,true),model:{value:cautionnement.indicatif_caution_solidaire,callback:function callback($$v){_vm.$set(cautionnement,"indicatif_caution_solidaire",$$v);},expression:"cautionnement.indicatif_caution_solidaire\n                                                    "}})],1),_vm._v(" "),_c("td",{staticClass:"col-2"},[_c("input",{directives:[{name:"model",rawName:"v-model.lazy",value:cautionnement.numero_tel_caution_solidaire,expression:"cautionnement.numero_tel_caution_solidaire",modifiers:{lazy:true}}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:cautionnement.numero_tel_caution_solidaire},on:{input:_vm.handleInput,change:function change($event){return _vm.$set(cautionnement,"numero_tel_caution_solidaire",$event.target.value);}}})]),_vm._v(" "),_c("td",{staticClass:"col-2"},[_c("input",{directives:[{name:"model",rawName:"v-model.lazy",value:cautionnement.localisation_caution_solidaire,expression:"\n                                                        cautionnement.localisation_caution_solidaire\n                                                    ",modifiers:{lazy:true}}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:cautionnement.localisation_caution_solidaire},on:{input:_vm.handleInput,change:function change($event){return _vm.$set(cautionnement,"localisation_caution_solidaire",$event.target.value);}}})]),_vm._v(" "),_c("td",{staticClass:"col-2"},[_c("currency-input",{attrs:{defaultTyping:false},on:{input:_vm.handleInput},model:{value:cautionnement.revenu_mensuel,callback:function callback($$v){_vm.$set(cautionnement,"revenu_mensuel",$$v);},expression:"\n                                                        cautionnement.revenu_mensuel\n                                                    "}})],1),_vm._v(" "),_c("td",{staticClass:"col-2"},[_c("currency-input",{staticClass:"form-control",attrs:{type:"text",defaultTyping:false},on:{input:_vm.handleInput},model:{value:cautionnement.valeur_patrimoine,callback:function callback($$v){_vm.$set(cautionnement,"valeur_patrimoine",$$v);},expression:"\n                                                            cautionnement.valeur_patrimoine\n                                                        "}})],1),_vm._v(" "),_c("td",{staticClass:"col-2"},[_c("currency-input",{staticClass:"form-control",attrs:{type:"text",defaultTyping:false},on:{input:_vm.handleInput},model:{value:cautionnement.valeur_cautionnement,callback:function callback($$v){_vm.$set(cautionnement,"valeur_cautionnement",$$v);},expression:"cautionnement.valeur_cautionnement"}})],1),_vm._v(" "),index==0?_c("td",{staticStyle:{"padding-left":"5px"}},[_c("button",{directives:[{name:"show",rawName:"v-show",value:index==0,expression:"index == 0"}],staticStyle:{"background-color":"#2c3e50",color:"#ffffff","border-radius":"15%",border:"none","font-size":"16px"},attrs:{type:"button",title:"Ajouter un bien"},on:{click:function click($event){return _vm.addMore1();}}},[_c("plus-icon",{staticClass:"custom-class",attrs:{size:"21"}})],1)]):_c("td",[_c("button",{directives:[{name:"show",rawName:"v-show",value:index!=0,expression:"index != 0"}],staticStyle:{"background-color":"transparent",border:"none"},attrs:{type:"button",title:"Supprimer"},on:{click:function click($event){return _vm.remove1(index);}}},[_c("trash-icon",{staticClass:"custom-class",attrs:{size:"21"}})],1)])]);}),_vm._v(" "),_c("tr",[_vm._m(19),_vm._v(" "),_c("td",[_c("currency-input",{attrs:{readonly:"",defaultTyping:false},on:{input:_vm.handleInput},model:{value:_vm.total_cautionnement_solidaires_valeur_revenu_mensuel,callback:function callback($$v){_vm.total_cautionnement_solidaires_valeur_revenu_mensuel=$$v;},expression:"total_cautionnement_solidaires_valeur_revenu_mensuel\n                                                            "}})],1),_vm._v(" "),_c("td",[_c("currency-input",{attrs:{readonly:"",defaultTyping:false},on:{input:_vm.handleInput},model:{value:_vm.total_cautionnement_solidaires_valeur_patrimoine,callback:function callback($$v){_vm.total_cautionnement_solidaires_valeur_patrimoine=$$v;},expression:"total_cautionnement_solidaires_valeur_patrimoine\n                                                            "}})],1),_vm._v(" "),_c("td",[_c("currency-input",{attrs:{readonly:"",defaultTyping:false},on:{input:_vm.handleInput},model:{value:_vm.total_cautionnement_solidaires_valeur_cautionnement,callback:function callback($$v){_vm.total_cautionnement_solidaires_valeur_cautionnement=$$v;},expression:"total_cautionnement_solidaires_valeur_cautionnement\n                                                            "}})],1)])],2)])])])]):_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"relook-header",on:{click:function click($event){_vm.seen5=!_vm.seen5;}}},[_c("h6",{"class":" subdiv"+this.tb_name,attrs:{id:"patrimoine-de-l'actionnaire"}},[_vm._v("\n                                    Cautionnement solidaire"),_c("i",{staticClass:"icofont icofont-rounded-down",staticStyle:{"float":"right",cursor:"pointer"}})])])]),_vm._v(" "),_vm.seen8===true?_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"relook-header",staticStyle:{cursor:"pointer"},on:{click:function click($event){_vm.seen8=!_vm.seen8;}}},[_c("h6",{"class":"subdiv"+this.tb_name,attrs:{id:"caution-hypothecaire"}},[_vm._v("\n                                    Caution hypothécaire / Promesse d'affectation\n                                    "),_c("chevron-up-icon",{staticClass:"custom-class",staticStyle:{"float":"right",cursor:"pointer"},attrs:{size:"21"}})],1)]),_vm._v(" "),_c("br"),_vm._v(" "),_c("div",{staticClass:"table-responsive"},[_c("table",{staticClass:"table mb-5 table-borderless"},[_vm._m(20),_vm._v(" "),_c("tbody",[_vm._l(_vm.caution_hypothecaires,function(caution_hypothecaire,index){return _c("tr",{key:index},[_c("td",[_vm._v(_vm._s(index+1)+".")]),_vm._v(" "),_c("td",[_c("input",{directives:[{name:"model",rawName:"v-model.lazy",value:caution_hypothecaire.bien,expression:"\n                                                        caution_hypothecaire.bien\n                                                    ",modifiers:{lazy:true}}],staticClass:"form-control",attrs:{required:"",type:"text"},domProps:{value:caution_hypothecaire.bien},on:{input:_vm.handleInput,change:function change($event){return _vm.$set(caution_hypothecaire,"bien",$event.target.value);}}})]),_vm._v(" "),_c("td",[_c("input",{directives:[{name:"model",rawName:"v-model.lazy",value:caution_hypothecaire.proprietaire,expression:"\n                                                        caution_hypothecaire.proprietaire\n                                                    ",modifiers:{lazy:true}}],staticClass:"form-control",attrs:{required:"",type:"text"},domProps:{value:caution_hypothecaire.proprietaire},on:{input:_vm.handleInput,change:function change($event){return _vm.$set(caution_hypothecaire,"proprietaire",$event.target.value);}}})]),_vm._v(" "),_c("td",[_c("input",{directives:[{name:"model",rawName:"v-model.lazy",value:caution_hypothecaire.numero_tel,expression:"\n                                                        caution_hypothecaire.numero_tel\n                                                    ",modifiers:{lazy:true}}],staticClass:"form-control",attrs:{required:"",type:"text"},domProps:{value:caution_hypothecaire.numero_tel},on:{input:_vm.handleInput,change:function change($event){return _vm.$set(caution_hypothecaire,"numero_tel",$event.target.value);}}})]),_vm._v(" "),_c("td",[_c("date-input",{staticClass:"input-date",attrs:{value:caution_hypothecaire.annee_achat},on:{input:function input($event){return _vm.setDateInput($event,"caution_hypothecaires","annee_achat",index);}}})],1),_vm._v(" "),_c("td",[_c("input",{directives:[{name:"model",rawName:"v-model.lazy",value:caution_hypothecaire.adresse_emplacement,expression:"caution_hypothecaire.adresse_emplacement\n                                                    ",modifiers:{lazy:true}}],staticClass:"form-control",attrs:{required:"",type:"text"},domProps:{value:caution_hypothecaire.adresse_emplacement},on:{change:[function($event){return _vm.$set(caution_hypothecaire,"adresse_emplacement",$event.target.value);},_vm.handleInput]}})]),_vm._v(" "),_c("td",[_c("input",{directives:[{name:"model",rawName:"v-model.lazy",value:caution_hypothecaire.longitude,expression:"\n                                                        caution_hypothecaire.longitude\n                                                    ",modifiers:{lazy:true}}],staticClass:"form-control",attrs:{required:"",type:"text"},domProps:{value:caution_hypothecaire.longitude},on:{change:[function($event){return _vm.$set(caution_hypothecaire,"longitude",$event.target.value);},_vm.handleInput]}})]),_vm._v(" "),_c("td",[_c("input",{directives:[{name:"model",rawName:"v-model.lazy",value:caution_hypothecaire.lattitude,expression:"\n                                                        caution_hypothecaire.lattitude\n                                                    ",modifiers:{lazy:true}}],staticClass:"form-control",attrs:{required:"",type:"text"},domProps:{value:caution_hypothecaire.lattitude},on:{change:[function($event){return _vm.$set(caution_hypothecaire,"lattitude",$event.target.value);},_vm.handleInput]}})]),_vm._v(" "),_c("td",[_c("date-input",{staticClass:"input-date",attrs:{value:caution_hypothecaire.date_evaluation},on:{input:function input($event){return _vm.setDateInput($event,"caution_hypothecaires","date_evaluation",index);}}})],1),_vm._v(" "),_c("td",[_c("currency-input",{staticClass:"form-control",attrs:{"default-typing":false,type:"text"},on:{input:_vm.handleInput},model:{value:caution_hypothecaire.valeur_marchande,callback:function callback($$v){_vm.$set(caution_hypothecaire,"valeur_marchande",$$v);},expression:"\n                                                        caution_hypothecaire.valeur_marchande\n                                                    "}})],1),_vm._v(" "),_c("td",[_c("currency-input",{staticClass:"form-control",attrs:{"default-typing":false,type:"text"},on:{input:_vm.handleInput},model:{value:caution_hypothecaire.valeur_considere,callback:function callback($$v){_vm.$set(caution_hypothecaire,"valeur_considere",$$v);},expression:"\n                                                        caution_hypothecaire.valeur_considere\n                                                    "}})],1),_vm._v(" "),index==0?_c("td",[_c("button",{directives:[{name:"show",rawName:"v-show",value:index==0,expression:"index == 0"}],staticStyle:{"background-color":"#2c3e50",color:"#ffffff","border-radius":"15%",border:"none"},attrs:{type:"button",title:"Ajouter une nouvelle garantie"},on:{click:function click($event){return _vm.addMore("caution_hypothecaires");}}},[_c("plus-icon",{staticClass:"custom-class",attrs:{size:"21"}})],1)]):_c("td",[_c("button",{directives:[{name:"show",rawName:"v-show",value:index!=0,expression:"index != 0"}],staticStyle:{"background-color":"transparent",border:"none"},attrs:{type:"button",title:"Supprimer"},on:{click:function click($event){return _vm.remove(index,"caution_hypothecaires");}}},[_c("trash-icon",{staticClass:"custom-class",attrs:{size:"21"}})],1)])]);}),_vm._v(" "),_c("tr",[_vm._m(21),_vm._v(" "),_c("td",[_c("currency-input",{attrs:{readonly:"","default-typing":false},on:{input:_vm.handleInput},model:{value:_vm.total_caution_hypothecaires_valeur_marchande,callback:function callback($$v){_vm.total_caution_hypothecaires_valeur_marchande=$$v;},expression:"total_caution_hypothecaires_valeur_marchande\n                                                    "}})],1),_vm._v(" "),_c("td",[_c("currency-input",{attrs:{readonly:"","default-typing":false},on:{input:_vm.handleInput},model:{value:_vm.total_caution_hypothecaires_valeur_considere,callback:function callback($$v){_vm.total_caution_hypothecaires_valeur_considere=$$v;},expression:"total_caution_hypothecaires_valeur_considere\n                                                    "}})],1)])],2)])])]):_c("div",[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"relook-header",staticStyle:{cursor:"pointer"},on:{click:function click($event){_vm.seen8=!_vm.seen8;}}},[_c("h6",{attrs:{id:"caution-hypothecaire"}},[_vm._v("\n                                        Caution hypothécaire / Promesse d'affectation\n                                        "),_c("chevron-down-icon",{staticClass:"custom-class",staticStyle:{"float":"right",cursor:"pointer"},attrs:{size:"21"}})],1)])])]),_vm._v(" "),_vm.filiale=="FINL"?_c("div",[_vm.seen9===true?_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"relook-header",staticStyle:{cursor:"pointer"},on:{click:function click($event){_vm.seen9=!_vm.seen9;}}},[_c("h6",{"class":"subdiv"+this.tb_name,attrs:{id:"Resumé-des-garanties"}},[_vm._v("\n                                        Resumé des garanties\n                                        "),_c("chevron-up-icon",{staticClass:"custom-class",staticStyle:{"float":"right",cursor:"pointer"},attrs:{size:"21"}})],1)]),_vm._v(" "),_c("br"),_vm._v(" "),_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-6"},[_c("label",{attrs:{"for":""}},[_vm._v("\n                                            Etat de(s) garantie(s)\n                                        ")]),_vm._v(" "),_c("textarea",{directives:[{name:"model",rawName:"v-model",value:_vm.formDataToBeWatched.etat_garanties,expression:"formDataToBeWatched.etat_garanties"}],staticClass:"col-6 form-control",attrs:{type:"text",rows:"1",id:"etat_garanties"},domProps:{value:_vm.formDataToBeWatched.etat_garanties},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.formDataToBeWatched,"etat_garanties",$event.target.value);}}})]),_vm._v(" "),_c("div",{staticClass:"col-6"},[_c("label",[_vm._v("\n                                            Expiration due date des garanties\n                                        ")]),_vm._v(" "),_c("date-input",{attrs:{value:_vm.formDataToBeWatched.expiration_due_date,id:"expiration_due_date"},on:{input:_vm.setDateInput}})],1),_vm._v(" "),_c("div",{staticClass:"col-6"},[_c("label",[_vm._v("\n                                            Montant de(s) garantie(s)\n                                        ")]),_vm._v(" "),_c("currency-input",{staticClass:"form-control",attrs:{type:"text",defaultTyping:false,id:"montant_garanties"},model:{value:_vm.formDataToBeWatched.montant_garanties,callback:function callback($$v){_vm.$set(_vm.formDataToBeWatched,"montant_garanties",$$v);},expression:"formDataToBeWatched.montant_garanties"}})],1),_vm._v(" "),_c("div",{staticClass:"col-6"},[_c("label",[_vm._v("\n                                            Autres frais\n                                        ")]),_vm._v(" "),_c("input-group",{scopedSlots:_vm._u([{key:"input",fn:function fn(){return[_c("input",{directives:[{name:"model",rawName:"v-model.lazy",value:_vm.formDataToBeWatched.autres_frais,expression:"formDataToBeWatched.autres_frais",modifiers:{lazy:true}}],staticClass:"form-control",attrs:{required:"",type:"number",max:"25",min:"0",id:"autres_frais"},domProps:{value:_vm.formDataToBeWatched.autres_frais},on:{change:function change($event){return _vm.$set(_vm.formDataToBeWatched,"autres_frais",$event.target.value);}}})];},proxy:true},{key:"right",fn:function fn(){return[_vm._v("%")];},proxy:true}],null,false,2403251197)})],1),_vm._v(" "),_c("div",{staticClass:"col-6"},[_c("label",[_vm._v("\n                                            Date d'expiration\n                                        ")]),_vm._v(" "),_c("date-input",{attrs:{value:_vm.formDataToBeWatched.date_expiration,id:"date_expiration"},on:{input:_vm.setDateInput}})],1),_vm._v(" "),_c("div",{staticClass:"col-6"},[_c("label",[_vm._v("\n                                            Source remboursemment passé\n                                        ")]),_vm._v(" "),_c("textarea",{directives:[{name:"model",rawName:"v-model",value:_vm.formDataToBeWatched.source_remboursement_passe,expression:"formDataToBeWatched.source_remboursement_passe"}],staticClass:"col-6 form-control",attrs:{type:"text",rows:"1",id:"source_remboursement_passe"},domProps:{value:_vm.formDataToBeWatched.source_remboursement_passe},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.formDataToBeWatched,"source_remboursement_passe",$event.target.value);}}})])]),_vm._v(" "),_vm._m(22),_vm._v(" "),_vm._m(23),_vm._v(" "),_vm._l(_vm.frais_assurance_part,function(frais_assurance,k){return _c("div",{key:k,staticClass:"row my-4"},[_c("div",{staticClass:"col-5"},[_c("label",{attrs:{"for":""}},[_c("input",{directives:[{name:"model",rawName:"v-model",value:frais_assurance.libelle,expression:"frais_assurance.libelle"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:frais_assurance.libelle},on:{change:_vm.handleInput,input:function input($event){if($event.target.composing)return;_vm.$set(frais_assurance,"libelle",$event.target.value);}}})])]),_vm._v(" "),_c("div",{staticClass:"col-6"},[_c("currency-input",{staticClass:"form-control",attrs:{type:"text",defaultTyping:false},on:{change:_vm.handleInput},model:{value:frais_assurance.valeur,callback:function callback($$v){_vm.$set(frais_assurance,"valeur",$$v);},expression:"frais_assurance.valeur"}})],1),_vm._v(" "),k==0?_c("div",{staticClass:"col-1"},[_c("button",{directives:[{name:"show",rawName:"v-show",value:k==0,expression:"k == 0"}],staticStyle:{"background-color":"#2c3e50",color:"#ffffff","border-radius":"15%",border:"none"},attrs:{type:"button",title:"Ajouter une nouvelle garantie"},on:{click:function click($event){return _vm.addMore("frais_assurance_part");}}},[_c("plus-icon",{staticClass:"custom-class",attrs:{size:"21"}})],1)]):_c("div",{staticClass:"col-1"},[_c("button",{directives:[{name:"show",rawName:"v-show",value:_vm.index!=0,expression:"index != 0"}],staticStyle:{"background-color":"transparent",border:"none"},attrs:{type:"button",title:"Supprimer"},on:{click:function click(){_vm.frais_assurance_part.splice(k,1);}}},[_c("trash-icon",{staticClass:"custom-class",attrs:{size:"21"}})],1)])]);}),_vm._v(" "),_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-12"},[_vm._m(24),_vm._v(" "),_c("vue-editor",{attrs:{id:"resume_garanties"},on:{"update-value":function updateValue($event){_vm.formDataToBeWatched[$event[0]]=$event[1];}},model:{value:_vm.formDataToBeWatched.resume_garanties,callback:function callback($$v){_vm.$set(_vm.formDataToBeWatched,"resume_garanties",$$v);},expression:"formDataToBeWatched.resume_garanties"}})],1)])],2):_c("div",[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"relook-header",staticStyle:{cursor:"pointer"},on:{click:function click($event){_vm.seen9=!_vm.seen9;}}},[_c("h6",{attrs:{id:"Resumé-des-garanties"}},[_vm._v("\n                                            Resumé des garanties\n                                            "),_c("chevron-down-icon",{staticClass:"custom-class",staticStyle:{"float":"right",cursor:"pointer"},attrs:{size:"21"}})],1)])])])]):_vm._e()],1):_c("div",{},[_c("div",{staticClass:"relook-header px-3 mb-2 mt-4 mb-4 text-uppercase",staticStyle:{"text-align":"center"}},[_vm._v("\n                        GARANTIES A RECUEILLIR\n                        ")]),_vm._v(" "),_c("div",{staticClass:"col-md-12 mb-2"},[_c("div",{staticClass:"mx-2"},[_c("vue-editor",{attrs:{id:"resume_garanties"},on:{"update-value":function updateValue($event){_vm.formDataToBeWatched[$event[0]]=$event[1];}},model:{value:_vm.formDataToBeWatched.resume_garanties,callback:function callback($$v){_vm.$set(_vm.formDataToBeWatched,"resume_garanties",$$v);},expression:"formDataToBeWatched.resume_garanties"}})],1)]),_vm._v(" "),_c("div",{staticClass:"relook-header px-3 mb-2 mt-4 mb-4 text-uppercase",staticStyle:{"text-align":"center"}},[_vm._v("\n                            CONDITIONS PARTICULIERES\n                        ")]),_vm._v(" "),_c("div",{staticClass:"col-md-12 mb-2"},[_vm.data_conditions_particulieres!=null?_c("div",{staticClass:"mx-2"},_vm._l(_vm.data_conditions_particulieres,function(conditions_particulieres,index){return _c("span",{key:index},[_vm._v("\n                                    - "+_vm._s(conditions_particulieres.name)+" "),_c("br")]);}),0):_c("div",{staticClass:"mx-2"},[_c("p",{staticClass:"text-danger h5 text-center"},[_vm._v("\n                                    Ce dossier ne comporte aucune condition\n                                    particulière.\n                                ")])])]),_vm._v(" "),_c("div",[_c("div",{staticClass:"relook-header px-3 mb-2 mt-4 mb-4 text-uppercase",staticStyle:{"text-align":"center"}},[_vm._v("\n                                Etats des garanties\n                            ")]),_vm._v(" "),_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-6"},[_c("label",[_vm._v("\n                                        Expiration due date des garanties\n                                    ")]),_vm._v(" "),_c("date-input",{attrs:{value:_vm.formDataToBeWatched.expiration_due_date,id:"expiration_due_date"},on:{input:_vm.setDateInput}})],1),_vm._v(" "),_c("div",{staticClass:"col-6"},[_c("label",[_vm._v("\n                                        Montant de(s) garantie(s)\n                                    ")]),_vm._v(" "),_c("currency-input",{staticClass:"form-control",attrs:{type:"text",defaultTyping:false,id:"montant_garanties"},model:{value:_vm.formDataToBeWatched.montant_garanties,callback:function callback($$v){_vm.$set(_vm.formDataToBeWatched,"montant_garanties",$$v);},expression:"formDataToBeWatched.montant_garanties"}})],1),_vm._v(" "),_c("div",{staticClass:"col-6"},[_c("label",{attrs:{"for":""}},[_vm._v("\n                                        Etat de(s) garantie(s)\n                                    ")]),_vm._v(" "),_c("textarea",{directives:[{name:"model",rawName:"v-model",value:_vm.formDataToBeWatched.etat_garanties,expression:"formDataToBeWatched.etat_garanties"}],staticClass:"col-6 form-control",attrs:{type:"text",rows:"1",id:"etat_garanties"},domProps:{value:_vm.formDataToBeWatched.etat_garanties},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.formDataToBeWatched,"etat_garanties",$event.target.value);}}})])])])])])]):_c("div",[_c("div",{staticClass:"relook-header px-3 mb-2 mt-4 mb-4 text-uppercase",staticStyle:{"text-align":"center"}},[_vm._v("\n                GARANTIES A RECUEILLIR\n                 ")]),_vm._v(" "),_c("div",{staticClass:"col-md-12 mb-2"},[_c("div",{staticClass:"mx-2"},[_c("vue-editor",{attrs:{id:"resume_garanties"},on:{"update-value":function updateValue($event){_vm.formDataToBeWatched[$event[0]]=$event[1];}},model:{value:_vm.formDataToBeWatched.resume_garanties,callback:function callback($$v){_vm.$set(_vm.formDataToBeWatched,"resume_garanties",$$v);},expression:"formDataToBeWatched.resume_garanties"}})],1)]),_vm._v(" "),_c("div",{staticClass:"relook-header px-3 mb-2 mt-4 mb-4 text-uppercase",staticStyle:{"text-align":"center"}},[_vm._v("\n                    CONDITIONS PARTICULIERES\n                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-12 mb-2"},[_vm.data_conditions_particulieres!=null?_c("div",{staticClass:"mx-2"},_vm._l(_vm.data_conditions_particulieres,function(conditions_particulieres,index){return _c("span",{key:index},[_vm._v("\n                            - "+_vm._s(conditions_particulieres.name)+" "),_c("br")]);}),0):_c("div",{staticClass:"mx-2"},[_c("p",{staticClass:"text-danger h5 text-center"},[_vm._v("\n                            Ce dossier ne comporte aucune condition\n                            particulière.\n                        ")])])]),_vm._v(" "),_c("div",[_c("div",{staticClass:"relook-header px-3 mb-2 mt-4 mb-4 text-uppercase",staticStyle:{"text-align":"center"}},[_vm._v("\n                        Etats des garanties\n                    ")]),_vm._v(" "),_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-6"},[_c("label",[_vm._v("\n                                Expiration due date des garanties\n                            ")]),_vm._v(" "),_c("date-input",{attrs:{value:_vm.formDataToBeWatched.expiration_due_date,id:"expiration_due_date"},on:{input:_vm.setDateInput}})],1),_vm._v(" "),_c("div",{staticClass:"col-6"},[_c("label",[_vm._v("\n                                Montant de(s) garantie(s)\n                            ")]),_vm._v(" "),_c("currency-input",{staticClass:"form-control",attrs:{type:"text",defaultTyping:false,id:"montant_garanties"},model:{value:_vm.formDataToBeWatched.montant_garanties,callback:function callback($$v){_vm.$set(_vm.formDataToBeWatched,"montant_garanties",$$v);},expression:"formDataToBeWatched.montant_garanties"}})],1),_vm._v(" "),_c("div",{staticClass:"col-6"},[_c("label",{attrs:{"for":""}},[_vm._v("\n                                Etat de(s) garantie(s)\n                            ")]),_vm._v(" "),_c("textarea",{directives:[{name:"model",rawName:"v-model",value:_vm.formDataToBeWatched.etat_garanties,expression:"formDataToBeWatched.etat_garanties"}],staticClass:"col-6 form-control",attrs:{type:"text",rows:"1",id:"etat_garanties"},domProps:{value:_vm.formDataToBeWatched.etat_garanties},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.formDataToBeWatched,"etat_garanties",$event.target.value);}}})])])])]),_vm._v(" "),_c("div",{staticClass:"mb-5"}),_vm._v(" "),_c("button",{staticClass:"btn shadow-md text-white position-absolute",staticStyle:{cursor:"pointer",right:"16px",bottom:"10px",background:"#2c3e50","max-width":"max-content"},attrs:{type:"button",name:"button"},on:{click:function click($event){return _vm.retract();}}},[_vm._v("\n                Fermer le tableau\n            ")])]):_c("div",{staticClass:"card card-width-height"},[_c("br"),_vm._v(" "),_c("div",{staticClass:"card-header hdc pb-0 pt-2"},[_c("h6",{staticClass:"head",attrs:{id:"ca4-head"}},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col"},[_vm._v("\n                            "+_vm._s(_vm.tb_display_name)+" : Sûretés proposées et garanties\n                        ")]),_vm._v(" "),_c("div",{staticClass:"col-auto"},[((_vm$formDataToBeWatch2=_vm.formDataToBeWatched.notes)===null||_vm$formDataToBeWatch2===void 0?void 0:_vm$formDataToBeWatch2.length)>0?_c("div",{staticStyle:{display:"inline-block",position:"relative"}},[_c("span",{attrs:{type:"button"},on:{click:function click($event){return _vm.openNotesModal(true);}}},[_c("i",{staticClass:"icofont icofont-comment text-white px-2",staticStyle:{"font-size":"12px"},attrs:{role:"button"}}),_vm._v(" "),_c("span",{staticClass:"badge-sm pb-3"},[_c("span",[_vm._v(" "+_vm._s(_vm.formDataToBeWatched.notes.length)+" ")])])])]):_vm._e(),_vm._v(" "),_c("chevron-down-icon",{staticClass:"custom-class",staticStyle:{cursor:"pointer"},attrs:{size:"21"},on:{click:function click($event){return _vm.retract();}}})],1)])])])])],1),_vm._v(" "),_c("note-modal",{attrs:{name:_vm.tb_name,listingNote:_vm.listingNote,notes:_vm.formDataToBeWatched.notes},on:{close:function close($event){return _vm.$modal.hide(_vm.tb_name);},addNote:function addNote($event){return _vm.formDataToBeWatched.notes.unshift($event);}},model:{value:_vm.formDataToBeWatched.notes,callback:function callback($$v){_vm.$set(_vm.formDataToBeWatched,"notes",$$v);},expression:"formDataToBeWatched.notes"}})],1);};var staticRenderFns=[function(){var _vm=this,_c=_vm._self._c;return _c("tr",[_c("th",{staticStyle:{"text-align":"center"},attrs:{colspan:"",scope:"row"}}),_vm._v(" "),_c("th",{staticStyle:{"text-align":"center"},attrs:{colspan:"",scope:"row"}}),_vm._v(" "),_c("th",{staticStyle:{"text-align":"center"},attrs:{colspan:"",scope:"row"}})]);},function(){var _vm=this,_c=_vm._self._c;return _c("tr",[_c("th",{staticStyle:{"text-align":"center"},attrs:{colspan:"",scope:"row"}}),_vm._v(" "),_c("th",{staticStyle:{"text-align":"center"},attrs:{colspan:"",scope:"row"}}),_vm._v(" "),_c("th",{staticStyle:{"text-align":"center"},attrs:{colspan:"",scope:"row"}})]);},function(){var _vm=this,_c=_vm._self._c;return _c("tr",[_c("th",{staticStyle:{"text-align":"center"},attrs:{colspan:"",scope:"row"}}),_vm._v(" "),_c("th",{staticStyle:{"text-align":"center"},attrs:{colspan:"",scope:"row"}}),_vm._v(" "),_c("th",{staticStyle:{"text-align":"center"},attrs:{colspan:"",scope:"row"}})]);},function(){var _vm=this,_c=_vm._self._c;return _c("tr",[_c("th",{staticStyle:{"text-align":"center"},attrs:{colspan:"",scope:"row"}}),_vm._v(" "),_c("th",{staticStyle:{"text-align":"center"},attrs:{colspan:"",scope:"row"}}),_vm._v(" "),_c("th",{staticStyle:{"text-align":"center"},attrs:{colspan:"",scope:"row"}})]);},function(){var _vm=this,_c=_vm._self._c;return _c("label",[_c("b",[_vm._v("Commentaire sur les garanties")])]);},function(){var _vm=this,_c=_vm._self._c;return _c("div",{staticClass:"d-flex mt-4"},[_c("b",{staticStyle:{"font-size":"20px"}},[_vm._v("Frais d'assurances")])]);},function(){var _vm=this,_c=_vm._self._c;return _c("div",{staticClass:"row my-4"},[_c("div",{staticClass:"col-5"},[_c("b",[_vm._v("Libelle")])]),_vm._v(" "),_c("div",{staticClass:"col-6"},[_c("b",[_vm._v("Valeur")])])]);},function(){var _vm=this,_c=_vm._self._c;return _c("label",[_c("b",[_vm._v("Nature de(s) garantie(s)")])]);},function(){var _vm=this,_c=_vm._self._c;return _c("thead",[_c("tr",[_c("td"),_vm._v(" "),_c("td",{staticClass:"th"},[_c("label",[_vm._v("Hypothèques ")])]),_vm._v(" "),_c("td",{staticClass:"th"},[_c("label",[_vm._v("Propriétaire")])]),_vm._v(" "),_c("td",{staticClass:"th"},[_c("label",[_vm._v("Date d'achat")])]),_vm._v(" "),_c("td",{staticClass:"th"},[_c("label",[_vm._v("Adresse de l'emplacement")])]),_vm._v(" "),_c("td",{staticClass:"th"},[_c("label",[_vm._v("Longitude")])]),_vm._v(" "),_c("td",{staticClass:"th"},[_c("label",[_vm._v("Latitude")])]),_vm._v(" "),_c("td",{staticClass:"th"},[_c("label",[_vm._v("Date d'évaluation")])]),_vm._v(" "),_c("td",{staticClass:"th"},[_c("label",[_vm._v("Valeur marchande")])]),_vm._v(" "),_c("td",{staticClass:"th"},[_c("label",[_vm._v("Valeur considérée")])])])]);},function(){var _vm=this,_c=_vm._self._c;return _c("td",{staticClass:"text-end",attrs:{colspan:"8"}},[_c("b",[_vm._v("Totaux")])]);},function(){var _vm=this,_c=_vm._self._c;return _c("thead",[_c("td",{staticClass:"th text-center"}),_vm._v(" "),_c("td",{staticClass:"th"},[_c("label",[_vm._v("Gages ")])]),_vm._v(" "),_c("td",{staticClass:"th"},[_c("label",[_vm._v("Propriétaire")])]),_vm._v(" "),_c("td",{staticClass:"th"},[_c("label",[_vm._v("N° du titre foncier")])]),_vm._v(" "),_c("td",{staticClass:"th"},[_c("label",[_vm._v("Date d'achat")])]),_vm._v(" "),_c("td",{staticClass:"th"},[_c("label",[_vm._v("Adresse de l'emplacement")])]),_vm._v(" "),_c("td",{staticClass:"th"},[_c("label",[_vm._v("Date d'évaluation")])]),_vm._v(" "),_c("td",{staticClass:"th"},[_c("label",[_vm._v("Valeur marchande")])]),_vm._v(" "),_c("td",{staticClass:"th"},[_c("label",[_vm._v("Valeur considérée")])])]);},function(){var _vm=this,_c=_vm._self._c;return _c("td",{staticClass:"text-end",attrs:{colspan:"7"}},[_c("b",[_vm._v("Totaux")])]);},function(){var _vm=this,_c=_vm._self._c;return _c("div",{staticClass:"row mt-2"},[_c("div",{staticClass:"col-5"},[_c("label",{attrs:{"for":""}},[_vm._v("Montant")])]),_vm._v(" "),_c("div",{staticClass:"col-5"},[_c("label",{attrs:{"for":""}},[_vm._v("Entreprise")])])]);},function(){var _vm=this,_c=_vm._self._c;return _c("div",{staticClass:"col-12"},[_c("label",{staticClass:"fw-bold"},[_vm._v("\n                                            Autres suretés diverses\n                                        ")])]);},function(){var _vm=this,_c=_vm._self._c;return _c("thead",[_c("tr",[_c("th",[_vm._v("#")]),_vm._v(" "),_c("th",[_vm._v("\n                                                        Autres suretés diverses\n                                                    ")]),_vm._v(" "),_c("th",[_vm._v("Action")])])]);},function(){var _vm=this,_c=_vm._self._c;return _c("thead",[_c("td"),_vm._v(" "),_c("td",{staticClass:"th"},[_c("label",[_vm._v("Garantie ")])]),_vm._v(" "),_c("td",{staticClass:"th"},[_c("label",[_vm._v("Institution")])]),_vm._v(" "),_c("td",{staticClass:"th"},[_c("label",[_vm._v("Date d'attribution")])]),_vm._v(" "),_c("td",{staticClass:"th"},[_c("label",[_vm._v("Date d'évaluation")])]),_vm._v(" "),_c("td",{staticClass:"th"},[_c("label",[_vm._v("Valeur marchande")])]),_vm._v(" "),_c("td",{staticClass:"th"},[_c("label",[_vm._v("Valeur considérée")])])]);},function(){var _vm=this,_c=_vm._self._c;return _c("td",{staticClass:"text-end",attrs:{colspan:"5"}},[_c("b",[_vm._v("Totaux")])]);},function(){var _vm=this,_c=_vm._self._c;return _c("thead",[_c("td"),_vm._v(" "),_c("td",{staticClass:"th"},[_c("label",[_vm._v(" Description")])])]);},function(){var _vm=this,_c=_vm._self._c;return _c("thead",[_c("tr",[_c("td",[_c("label",{attrs:{"for":""}},[_vm._v("\n                                                        Nom et prénoms")])]),_vm._v(" "),_c("td",[_c("label",{attrs:{"for":""}},[_vm._v("Profession")])]),_vm._v(" "),_c("td",[_c("label",{attrs:{"for":""}},[_vm._v("Indicatif")])]),_vm._v(" "),_c("td",[_c("label",{attrs:{"for":""}},[_vm._v("Numéro de téléphone")])]),_vm._v(" "),_c("td",[_c("label",{attrs:{"for":""}},[_vm._v("Localisation")])]),_vm._v(" "),_c("td",[_c("label",{attrs:{"for":""}},[_vm._v("Revenue moyens /\n                                                        mois")])]),_vm._v(" "),_c("td",[_c("label",{attrs:{"for":""}},[_vm._v("Valeur\n                                                        patrimoine")])]),_vm._v(" "),_c("td",[_c("label",{attrs:{"for":""}},[_vm._v("Valeur de\n                                                        cautionnement")])])])]);},function(){var _vm=this,_c=_vm._self._c;return _c("td",{staticClass:"text-end",attrs:{colspan:"5"}},[_c("b",[_vm._v("Totaux")])]);},function(){var _vm=this,_c=_vm._self._c;return _c("thead",[_c("td"),_vm._v(" "),_c("td",{staticClass:"th"},[_c("label",[_vm._v("Cautions hypothécaires ")])]),_vm._v(" "),_c("td",{staticClass:"th"},[_c("label",[_vm._v("Propriétaire")])]),_vm._v(" "),_c("td",{staticClass:"th"},[_c("label",[_vm._v("N° du titre foncier")])]),_vm._v(" "),_c("td",{staticClass:"th"},[_c("label",[_vm._v("Date d'attribution")])]),_vm._v(" "),_c("td",{staticClass:"th"},[_c("label",[_vm._v("Adresse de l'emplacement")])]),_vm._v(" "),_c("td",{staticClass:"th"},[_c("label",[_vm._v("Longitude")])]),_vm._v(" "),_c("td",{staticClass:"th"},[_c("label",[_vm._v("Latitude")])]),_vm._v(" "),_c("td",{staticClass:"th"},[_c("label",[_vm._v("Date d'évaluation")])]),_vm._v(" "),_c("td",{staticClass:"th"},[_c("label",[_vm._v("Valeur marchande")])]),_vm._v(" "),_c("td",{staticClass:"th"},[_c("label",[_vm._v("Valeur considérée")])])]);},function(){var _vm=this,_c=_vm._self._c;return _c("td",{staticClass:"text-end",attrs:{colspan:"9"}},[_c("b",[_vm._v("Totaux")])]);},function(){var _vm=this,_c=_vm._self._c;return _c("div",{staticClass:"d-flex mt-4"},[_c("b",{staticStyle:{"font-size":"20px"}},[_vm._v("Frais d'assurances")])]);},function(){var _vm=this,_c=_vm._self._c;return _c("div",{staticClass:"row my-4"},[_c("div",{staticClass:"col-5"},[_c("b",[_vm._v("Libelle")])]),_vm._v(" "),_c("div",{staticClass:"col-6"},[_c("b",[_vm._v("Valeur")])])]);},function(){var _vm=this,_c=_vm._self._c;return _c("label",[_c("b",[_vm._v("Nature de(s) garantie(s)")])]);}];render._withStripped=true;

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/credavailtick/Surete.vue?vue&type=template&id=6ae31f3c&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/credavailtick/Surete.vue?vue&type=template&id=6ae31f3c&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$dossier_credit, _vm$suretes, _vm$suretes2, _vm$suretes3, _vm$suretes4, _vm$suretes5, _vm$suretes6, _vm$dossier_credit2, _vm$dossier_credit3, _vm$dossier_credit4, _vm$dossier_credit5;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [((_vm$dossier_credit = _vm.dossier_credit) === null || _vm$dossier_credit === void 0 ? void 0 : _vm$dossier_credit.notif_accord_credit) != true ? _c("div", {
    staticClass: "card-body",
    staticStyle: {}
  }, [_c("div", {
    staticClass: "head-memorandum-title text-uppercase mb-4",
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("Sûretés proposées et garanties")]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_c("tbody", [_vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _vm._l((_vm$suretes = _vm.suretes) === null || _vm$suretes === void 0 ? void 0 : _vm$suretes.hypotheques, function (hypo_du_caf, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_vm._v("\n                            " + _vm._s(hypo_du_caf === null || hypo_du_caf === void 0 ? void 0 : hypo_du_caf.bien_hypotheque) + "\n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(hypo_du_caf === null || hypo_du_caf === void 0 ? void 0 : hypo_du_caf.proprietaire) + "\n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(_vm._f("formatDate")(hypo_du_caf === null || hypo_du_caf === void 0 ? void 0 : hypo_du_caf.annee_achat)) + "\n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(hypo_du_caf === null || hypo_du_caf === void 0 ? void 0 : hypo_du_caf.adresse_emplacement) + "\n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(hypo_du_caf === null || hypo_du_caf === void 0 ? void 0 : hypo_du_caf.longitude) + "\n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(hypo_du_caf === null || hypo_du_caf === void 0 ? void 0 : hypo_du_caf.lattitude) + "\n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(_vm._f("formatDate")(hypo_du_caf === null || hypo_du_caf === void 0 ? void 0 : hypo_du_caf.date_evaluation)) + "\n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(hypo_du_caf === null || hypo_du_caf === void 0 ? void 0 : hypo_du_caf.valeur_marchande) + "\n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(hypo_du_caf === null || hypo_du_caf === void 0 ? void 0 : hypo_du_caf.valeur_considere) + "\n                        ")])]);
  }), _vm._v(" "), _vm._m(2)], 2)])]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(3), _vm._v(" "), _c("tbody", [_vm._m(4), _vm._v(" "), _vm._l((_vm$suretes2 = _vm.suretes) === null || _vm$suretes2 === void 0 ? void 0 : _vm$suretes2.gages, function (gage, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_vm._v("\n                            " + _vm._s(gage === null || gage === void 0 ? void 0 : gage.bien_a_gage) + "\n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(gage === null || gage === void 0 ? void 0 : gage.proprietaire) + "\n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(gage === null || gage === void 0 ? void 0 : gage.numero_tel) + "\n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(_vm._f("formatDate")(gage === null || gage === void 0 ? void 0 : gage.annee_achat)) + "\n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(gage === null || gage === void 0 ? void 0 : gage.adresse_emplacement) + "\n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(_vm._f("formatDate")(gage === null || gage === void 0 ? void 0 : gage.date_evaluation)) + "\n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(gage === null || gage === void 0 ? void 0 : gage.valeur_marchande) + "\n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(gage === null || gage === void 0 ? void 0 : gage.valeur_considere) + "\n                        ")])]);
  }), _vm._v(" "), _vm._m(5)], 2)])]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bodered"
  }, [_vm._m(6), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {
    staticClass: "align-middle p-0",
    attrs: {
      colspan: "6"
    }
  }, [_vm._l((_vm$suretes3 = _vm.suretes) === null || _vm$suretes3 === void 0 ? void 0 : _vm$suretes3.suretes_diverses, function (sure, index) {
    return _c("div", {
      key: index,
      staticClass: "form-group py-2"
    }, [_c("div", {
      staticClass: "form-check"
    }, [_c("label", {
      staticClass: "form-check-label",
      attrs: {
        "for": sure.id
      }
    }, [_vm._v("\n                                        " + _vm._s(index + 1 + " " + ".") + " " + _vm._s(sure === null || sure === void 0 ? void 0 : sure.label) + "\n                                    ")])])]);
  }), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered table-striped table-responsive table-hover"
  }, [_vm._m(7), _vm._v(" "), _c("tbody", [_vm._m(8), _vm._v(" "), _vm._l((_vm$suretes4 = _vm.suretes) === null || _vm$suretes4 === void 0 ? void 0 : _vm$suretes4.autres_suretes_diverses, function (autre_surete, index) {
    return _c("tr", {
      key: autre_surete === null || autre_surete === void 0 ? void 0 : autre_surete.label
    }, [_c("td", {
      staticClass: "col-1"
    }, [_vm._v(_vm._s(index + 1) + ".")]), _vm._v(" "), _c("td", {
      staticClass: "col-10"
    }, [_vm._v(_vm._s(autre_surete === null || autre_surete === void 0 ? void 0 : autre_surete.label))])]);
  })], 2)])], 2)])])])]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(9), _vm._v(" "), _c("tbody", [_vm._m(10), _vm._v(" "), _vm._l((_vm$suretes5 = _vm.suretes) === null || _vm$suretes5 === void 0 ? void 0 : _vm$suretes5.cautionnement_solidaires, function (cautionnement, index) {
    return _c("tr", {
      key: index
    }, [_c("td", {
      staticClass: "col-4"
    }, [_vm._v("\n                            " + _vm._s(cautionnement === null || cautionnement === void 0 ? void 0 : cautionnement.nom_prenoms) + "\n\n                        ")]), _vm._v(" "), _c("td", {
      staticClass: "col-2"
    }, [_vm._v("\n                            " + _vm._s(cautionnement === null || cautionnement === void 0 ? void 0 : cautionnement.profession) + "\n                        ")]), _vm._v(" "), _c("td", {
      staticClass: "col-2"
    }, [_vm._v("\n                            " + _vm._s(cautionnement === null || cautionnement === void 0 ? void 0 : cautionnement.revenu_mensuel) + "\n                        ")]), _vm._v(" "), _c("td", {
      staticClass: "col-2"
    }, [_vm._v("\n                            " + _vm._s(cautionnement === null || cautionnement === void 0 ? void 0 : cautionnement.valeur_patrimoine) + "\n                        ")])]);
  })], 2)])]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(11), _vm._v(" "), _c("tbody", [_vm._m(12), _vm._v(" "), _vm._l((_vm$suretes6 = _vm.suretes) === null || _vm$suretes6 === void 0 ? void 0 : _vm$suretes6.cond_particulieres, function (cond_particuliere, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_vm._v(" " + _vm._s(index + 1) + ". ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(cond_particuliere === null || cond_particuliere === void 0 ? void 0 : cond_particuliere.cond_description) + "\n                        ")])]);
  })], 2)])])]) : _c("div", [_c("div", {
    staticClass: "relook-header px-3 mb-2 mt-4 mb-4 text-uppercase",
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("\n                GARANTIES A RECUEILLIR\n                 ")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 mb-2"
  }, [((_vm$dossier_credit2 = _vm.dossier_credit) === null || _vm$dossier_credit2 === void 0 || (_vm$dossier_credit2 = _vm$dossier_credit2.cred_pub_tb_19001) === null || _vm$dossier_credit2 === void 0 ? void 0 : _vm$dossier_credit2.garanties_a_recueillir) != null ? _c("div", {
    staticClass: "mx-2"
  }, _vm._l((_vm$dossier_credit3 = _vm.dossier_credit) === null || _vm$dossier_credit3 === void 0 || (_vm$dossier_credit3 = _vm$dossier_credit3.cred_pub_tb_19001) === null || _vm$dossier_credit3 === void 0 ? void 0 : _vm$dossier_credit3.garanties_a_recueillir, function (garanties_a_recueillir, index) {
    return _c("span", {
      key: index
    }, [_vm._v("\n                            - " + _vm._s(garanties_a_recueillir.name) + " "), _c("br")]);
  }), 0) : _c("div", {
    staticClass: "mx-2"
  }, [_c("p", {
    staticClass: "text-danger h5 text-center"
  }, [_vm._v("\n                            Ce dossier ne comporte aucune garantie.\n                        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "relook-header px-3 mb-2 mt-4 mb-4 text-uppercase",
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("\n                    CONDITIONS PARTICULIERES\n                ")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 mb-2"
  }, [((_vm$dossier_credit4 = _vm.dossier_credit) === null || _vm$dossier_credit4 === void 0 || (_vm$dossier_credit4 = _vm$dossier_credit4.cred_pub_tb_19002) === null || _vm$dossier_credit4 === void 0 ? void 0 : _vm$dossier_credit4.conditions_particulieres) != null ? _c("div", {
    staticClass: "mx-2"
  }, _vm._l((_vm$dossier_credit5 = _vm.dossier_credit) === null || _vm$dossier_credit5 === void 0 || (_vm$dossier_credit5 = _vm$dossier_credit5.cred_pub_tb_19002) === null || _vm$dossier_credit5 === void 0 ? void 0 : _vm$dossier_credit5.conditions_particulieres, function (conditions_particulieres, index) {
    return _c("span", {
      key: index
    }, [_vm._v("\n                            - " + _vm._s(conditions_particulieres.name) + " "), _c("br")]);
  }), 0) : _c("div", {
    staticClass: "mx-2"
  }, [_c("p", {
    staticClass: "text-danger h5 text-center"
  }, [_vm._v("\n                            Ce dossier ne comporte aucune condition\n                            particulière.\n                        ")])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("th", {
    staticClass: "text-center bg-grey",
    attrs: {
      colspan: "9"
    }
  }, [_vm._v("\n                            Hypothèques\n                        ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("td", [_c("label", [_vm._v("Hypothèques ")])]), _vm._v(" "), _c("td", [_c("label", [_vm._v("Propriétaire")])]), _vm._v(" "), _c("td", [_c("label", [_vm._v("Date d'achat")])]), _vm._v(" "), _c("td", [_c("label", [_vm._v("Adresse de l'emplacement")])]), _vm._v(" "), _c("td", [_c("label", [_vm._v("Longitude")])]), _vm._v(" "), _c("td", [_c("label", [_vm._v("Latitude")])]), _vm._v(" "), _c("td", [_c("label", [_vm._v("Date d'évaluation")])]), _vm._v(" "), _c("td", [_c("label", [_vm._v("Valeur marchande")])]), _vm._v(" "), _c("td", [_c("label", [_vm._v("Valeur considérée")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("td", {
    staticClass: "text-end",
    attrs: {
      colspan: "7"
    }
  }, [_c("b", [_vm._v("Totaux")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", {
    staticClass: "bg-grey"
  }, [_c("th", {
    staticClass: "text-center",
    attrs: {
      colspan: "8"
    }
  }, [_vm._v("\n                            Gages\n                        ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("td", [_c("label", [_vm._v("Gages ")])]), _vm._v(" "), _c("td", [_c("label", [_vm._v("Propriétaire")])]), _vm._v(" "), _c("td", [_c("label", [_vm._v("N° du titre foncier")])]), _vm._v(" "), _c("td", [_c("label", [_vm._v("Date d'achat")])]), _vm._v(" "), _c("td", [_c("label", [_vm._v("Adresse de l'emplacement")])]), _vm._v(" "), _c("td", [_c("label", [_vm._v("Date d'évaluation")])]), _vm._v(" "), _c("td", [_c("label", [_vm._v("Valeur marchande")])]), _vm._v(" "), _c("td", [_c("label", [_vm._v("Valeur considérée")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("td", {
    staticClass: "text-end",
    attrs: {
      colspan: "6"
    }
  }, [_c("b", [_vm._v("Totaux")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticClass: "bg-grey text-center"
  }, [_vm._v("suretés diverses")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    attrs: {
      colspan: "2"
    }
  }, [_vm._v("\n                                            Sûretés diverses\n                                        ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("th", [_vm._v("#")]), _vm._v(" "), _c("th", [_vm._v("Autres suretés diverses")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", {
    staticClass: "bg-grey text-center"
  }, [_c("td", {
    attrs: {
      colspan: "4"
    }
  }, [_vm._v("\n                            Cautionnement solidaire\n                        ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(" Nom et prénoms")])]), _vm._v(" "), _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Profession")])]), _vm._v(" "), _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Revenue moyens / mois")])]), _vm._v(" "), _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Valeur patrimoine")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", {
    staticClass: "bg-grey text-center"
  }, [_c("th", {
    attrs: {
      colspan: "2"
    }
  }, [_vm._v("\n                            Conditions particulières\n                        ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("td", [_vm._v("N°")]), _vm._v(" "), _c("td", [_c("label", [_vm._v(" Description")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/credavailtick/CR3.vue?vue&type=style&index=0&id=8a53d550&lang=css&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/credavailtick/CR3.vue?vue&type=style&index=0&id=8a53d550&lang=css&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-8a53d550] {\r\n\r\n    font-family: \"Google sans\";\n}\nlabel[data-v-8a53d550] {\r\n    height: 10px;\r\n    font-size: 13px;\n}\n.head-memorandum-title[data-v-8a53d550] {\r\n    margin-top: 15px;\r\n    padding: 16px;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    background-color: #34495e;\r\n    border: 2px solid #575759;\r\n    box-shadow: 1px 3px 4px #ddd;\r\n    font-size: 16px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    border-radius: 10px;\r\n    margin-bottom: 15px;\n}\ninput[type=text][data-v-8a53d550],\r\ninput[type=date][data-v-8a53d550],\r\nselect[data-v-8a53d550] {\r\n    height: 35px;\r\n    border-color: #34495e;\r\n    color: #57606f;\r\n    font-size: 13px;\r\n    font-weight: bold;\n}\ninput[type=number][data-v-8a53d550],\r\nselect[data-v-8a53d550] {\r\n    height: 35px;\r\n    border-color: #34495e;\r\n    color: #57606f;\r\n    font-size: 13px;\r\n    font-weight: bold;\n}\n.card-width-height[data-v-8a53d550] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-8a53d550] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\n.hdc[data-v-8a53d550] {\r\n    background-color: #57606f;\n}\n.card-width-height[data-v-8a53d550] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-8a53d550] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\ninput[type=text][data-v-8a53d550],\r\ninput[type=date][data-v-8a53d550] {\r\n    width: 250px;\n}\n.th[data-v-8a53d550] {\r\n    padding: 4px;\r\n    padding-bottom: 0px;\n}\nselect[data-v-8a53d550] {\r\n    width: 250px;\n}\n.badge-sm[data-v-8a53d550] {\r\n    display: inline-block;\r\n    width: 15px;\r\n    height: 15px;\r\n    background: rgba(255, 0, 0, 0.882);\r\n    color: white;\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    border-radius: 100%;\r\n    position: absolute;\r\n    top: -20%;\r\n    left: 55%;\r\n    text-align: center;\n}\n.relook-header[data-v-8a53d550] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\ninput.input-box[data-v-8a53d550] {\r\n    background: #00ffff21;\r\n    color: #000;\n}\ntextarea.input-box[data-v-8a53d550] {\r\n    background: #00ffff21;\r\n    color: #000;\n}\n.bg-card-ana[data-v-8a53d550] {\r\n    background-color: rgb(205, 225, 231);\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/credavailtick/Surete.vue?vue&type=style&index=0&id=6ae31f3c&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/credavailtick/Surete.vue?vue&type=style&index=0&id=6ae31f3c&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-6ae31f3c] {\r\n\r\n    font-family: \"Google sans\";\n}\nlabel[data-v-6ae31f3c] {\r\n    height: 10px;\r\n    font-size: 13px;\n}\ninput[type=text][data-v-6ae31f3c],\r\ninput[type=date][data-v-6ae31f3c],\r\nselect[data-v-6ae31f3c] {\r\n    height: 35px;\r\n    border-color: #34495e;\r\n    color: #57606f;\r\n    font-size: 13px;\r\n    font-weight: bold;\n}\n.card-width-height[data-v-6ae31f3c] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-6ae31f3c] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\n.hdc[data-v-6ae31f3c] {\r\n    background-color: #57606f;\n}\n.card-width-height[data-v-6ae31f3c] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-6ae31f3c] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\ninput[type=text][data-v-6ae31f3c],\r\ninput[type=date][data-v-6ae31f3c] {\r\n    width: 250px;\n}\n.th[data-v-6ae31f3c] {\r\n    padding: 4px;\r\n    padding-bottom: 0px;\n}\nselect[data-v-6ae31f3c] {\r\n    width: 250px;\n}\n.badge-sm[data-v-6ae31f3c] {\r\n    display: inline-block;\r\n    width: 15px;\r\n    height: 15px;\r\n    background: rgba(255, 0, 0, 0.882);\r\n    color: white;\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    border-radius: 100%;\r\n    position: absolute;\r\n    top: -20%;\r\n    left: 55%;\r\n    text-align: center;\n}\n.relook-header[data-v-6ae31f3c] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\ninput.input-box[data-v-6ae31f3c] {\r\n    background: #00ffff21;\r\n    color: #000;\n}\ntextarea.input-box[data-v-6ae31f3c] {\r\n    background: #00ffff21;\r\n    color: #000;\n}\n.bg-card-ana[data-v-6ae31f3c] {\r\n    background-color: rgb(205, 225, 231);\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/credavailtick/CR3.vue?vue&type=style&index=0&id=8a53d550&lang=css&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/credavailtick/CR3.vue?vue&type=style&index=0&id=8a53d550&lang=css&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CR3_vue_vue_type_style_index_0_id_8a53d550_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CR3.vue?vue&type=style&index=0&id=8a53d550&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/credavailtick/CR3.vue?vue&type=style&index=0&id=8a53d550&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CR3_vue_vue_type_style_index_0_id_8a53d550_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CR3_vue_vue_type_style_index_0_id_8a53d550_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/credavailtick/Surete.vue?vue&type=style&index=0&id=6ae31f3c&scoped=true&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/credavailtick/Surete.vue?vue&type=style&index=0&id=6ae31f3c&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Surete_vue_vue_type_style_index_0_id_6ae31f3c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Surete.vue?vue&type=style&index=0&id=6ae31f3c&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/credavailtick/Surete.vue?vue&type=style&index=0&id=6ae31f3c&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Surete_vue_vue_type_style_index_0_id_6ae31f3c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Surete_vue_vue_type_style_index_0_id_6ae31f3c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/credavailtick/CR3.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/credavailtick/CR3.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CR3_vue_vue_type_template_id_8a53d550_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CR3.vue?vue&type=template&id=8a53d550&scoped=true */ "./resources/js/components/credavailtick/CR3.vue?vue&type=template&id=8a53d550&scoped=true");
/* harmony import */ var _CR3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CR3.vue?vue&type=script&lang=js */ "./resources/js/components/credavailtick/CR3.vue?vue&type=script&lang=js");
/* harmony import */ var _CR3_vue_vue_type_style_index_0_id_8a53d550_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CR3.vue?vue&type=style&index=0&id=8a53d550&lang=css&scoped=true */ "./resources/js/components/credavailtick/CR3.vue?vue&type=style&index=0&id=8a53d550&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CR3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CR3_vue_vue_type_template_id_8a53d550_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _CR3_vue_vue_type_template_id_8a53d550_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "8a53d550",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/credavailtick/CR3.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/credavailtick/CR3.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/credavailtick/CR3.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CR3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CR3.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/credavailtick/CR3.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CR3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/credavailtick/CR3.vue?vue&type=style&index=0&id=8a53d550&lang=css&scoped=true":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/credavailtick/CR3.vue?vue&type=style&index=0&id=8a53d550&lang=css&scoped=true ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CR3_vue_vue_type_style_index_0_id_8a53d550_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CR3.vue?vue&type=style&index=0&id=8a53d550&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/credavailtick/CR3.vue?vue&type=style&index=0&id=8a53d550&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/credavailtick/CR3.vue?vue&type=template&id=8a53d550&scoped=true":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/credavailtick/CR3.vue?vue&type=template&id=8a53d550&scoped=true ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CR3_vue_vue_type_template_id_8a53d550_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CR3_vue_vue_type_template_id_8a53d550_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CR3_vue_vue_type_template_id_8a53d550_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CR3.vue?vue&type=template&id=8a53d550&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/credavailtick/CR3.vue?vue&type=template&id=8a53d550&scoped=true");


/***/ }),

/***/ "./resources/js/components/credavailtick/Surete.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/credavailtick/Surete.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Surete_vue_vue_type_template_id_6ae31f3c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Surete.vue?vue&type=template&id=6ae31f3c&scoped=true */ "./resources/js/components/credavailtick/Surete.vue?vue&type=template&id=6ae31f3c&scoped=true");
/* harmony import */ var _Surete_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Surete.vue?vue&type=script&lang=js */ "./resources/js/components/credavailtick/Surete.vue?vue&type=script&lang=js");
/* harmony import */ var _Surete_vue_vue_type_style_index_0_id_6ae31f3c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Surete.vue?vue&type=style&index=0&id=6ae31f3c&scoped=true&lang=css */ "./resources/js/components/credavailtick/Surete.vue?vue&type=style&index=0&id=6ae31f3c&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Surete_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Surete_vue_vue_type_template_id_6ae31f3c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _Surete_vue_vue_type_template_id_6ae31f3c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "6ae31f3c",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/credavailtick/Surete.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/credavailtick/Surete.vue?vue&type=script&lang=js":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/credavailtick/Surete.vue?vue&type=script&lang=js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Surete_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Surete.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/credavailtick/Surete.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Surete_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/credavailtick/Surete.vue?vue&type=style&index=0&id=6ae31f3c&scoped=true&lang=css":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/credavailtick/Surete.vue?vue&type=style&index=0&id=6ae31f3c&scoped=true&lang=css ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Surete_vue_vue_type_style_index_0_id_6ae31f3c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Surete.vue?vue&type=style&index=0&id=6ae31f3c&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/credavailtick/Surete.vue?vue&type=style&index=0&id=6ae31f3c&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/credavailtick/Surete.vue?vue&type=template&id=6ae31f3c&scoped=true":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/credavailtick/Surete.vue?vue&type=template&id=6ae31f3c&scoped=true ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Surete_vue_vue_type_template_id_6ae31f3c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Surete_vue_vue_type_template_id_6ae31f3c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Surete_vue_vue_type_template_id_6ae31f3c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Surete.vue?vue&type=template&id=6ae31f3c&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/credavailtick/Surete.vue?vue&type=template&id=6ae31f3c&scoped=true");


/***/ })

}]);