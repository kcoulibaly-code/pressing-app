"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_contreanalyse_cofina_filiale_CA4_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/filiale/CA4.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/filiale/CA4.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/ContextMenu */ "./resources/js/components/shared/ContextMenu.vue");
/* harmony import */ var _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/ContextMenuItem */ "./resources/js/components/shared/ContextMenuItem.vue");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../helpers/helper */ "./resources/js/helpers/helper.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _parts_TableauPonderationARC_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../parts/TableauPonderationARC.vue */ "./resources/js/components/parts/TableauPonderationARC.vue");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }








window.$ = window.jQuery = __webpack_require__(/*! jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "garanties",
  display: "Garanties",
  components: {
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.TrashIcon,
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.ChevronDownIcon,
    ContextMenu: _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__["default"],
    ContextMenuItem: _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__["default"],
    TableauPonderationARC: _parts_TableauPonderationARC_vue__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  props: {
    meta_data: Object,
    tb_name: String,
    tb_display_name: String
  },
  created: function created() {},
  mounted: function mounted() {
    this.tableClosedOrOpened();
    this.loadRetrieved();
    this.loadCommentaire();
    this.loadTbAttrs();
    // charge les attributs + sous attributs des tables
    EventBus.$on("montant-credit-updated", function (data) {
      // this.montant_dep_gar_crsd = Number(data.garantie + data.crsd).toLocaleString()
      // let a = Number(data.montant_credit?.toString().replace(/\s/g, ''))
      // a = isNaN(a) ? 0 : a
      // let value = (Number(this.montant_dep_gar_crsd.replace(/\s+/g, "")) * 100) / a
      // this.taux_dep_gar_crsd = isFinite(value) ? value : 0
      // this.defaultSuretes = [
      //     { label: `Souscription de ${this.souscriptionValue} billets à ordre signés par l'emprunteur`, value: { label: `Souscription de ${this.souscriptionValue} billets à ordre signés par l'emprunteur`, nom: "souscription", billets: this.souscriptionValue }, id: "souscription", },
      //     { label: `Dépôt de garantie et compte de réserve du service de la dette (DG + CRSD) à hauteur de ${this.montant_dep_gar_crsd} FCFA soit ${this.taux_dep_gar_crsd}% du montant proposé`, value: { label: `Dépôt de garantie et compte de réserve du service de la dette (DG + CRSD) à hauteur de ${this.montant_dep_gar_crsd} FCFA soit ${this.taux_dep_gar_crsd}% du montant proposé`, nom: "depot", taux: this.taux_dep_gar_crsd, montant: this.montant_dep_gar_crsd }, id: "depot" },
      //     {
      //         label: `Nantissement de stock`,
      //         value: {
      //             label: `Nantissement de stock`,
      //             nom: "nantissement_stock",

      //         },
      //         id: "nantissement_stock",
      //     },
      // ]

      //     this.formDataToBeWatched.suretes_diverses.forEach((el, index) => {
      //         this.defaultSuretes.forEach(elem => {
      //             if (elem.value.nom === el.nom) {
      //                 this.formDataToBeWatched.suretes_diverses[index] = elem.value
      //                 // console.log({ el: el.label, elem: elem.label })
      //             }
      //         })
      //     })
      //     // this.loadRetrieved()
    });
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
      return trying.toLocaleString("fr-FR");
    },
    souscriptionValue: function souscriptionValue() {
      var _this$meta_data$dossi, _this$meta_data$dossi2;
      var res = 0;
      var dure = Number((_this$meta_data$dossi = this.meta_data.dossier_credit) === null || _this$meta_data$dossi === void 0 || (_this$meta_data$dossi = _this$meta_data$dossi.cred_pub_tb_00) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi.duree_credit) || 0;
      var mode = (_this$meta_data$dossi2 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi2 === void 0 || (_this$meta_data$dossi2 = _this$meta_data$dossi2.cred_pub_tb_1) === null || _this$meta_data$dossi2 === void 0 || (_this$meta_data$dossi2 = _this$meta_data$dossi2.mode_paiement) === null || _this$meta_data$dossi2 === void 0 ? void 0 : _this$meta_data$dossi2.toLowerCase();
      var diviseur = 1;
      if (mode === "mensuelle") {
        diviseur = 1;
        res = dure / diviseur;
      }
      if (mode === "bi-mensuel") {
        diviseur = 2;
        res = dure * diviseur;
      }
      if (mode === "trimestriel") {
        diviseur = 3;
        res = dure / diviseur;
      }
      if (mode === "semestriel") {
        diviseur = 6;
        res = dure / diviseur;
      }
      if (mode === "in fine") {
        diviseur = dure || 1;
        res = dure / diviseur;
      }
      return res;
    },
    engagement_value: function engagement_value() {
      return {
        label: "Engagement de domiciliation globale de ".concat(this.totalEngagementGlobal, " "),
        nom: "engagement",
        total_montant_engagement_globale: this.totalEngagementGlobal
      };
    },
    nantissement_dat: function nantissement_dat() {
      return {
        label: "Nantissement DAT de ".concat(this.formDataToBeWatched.montant_dat, " qui a pour r\xE9f\xE9rence ").concat(this.formDataToBeWatched.reference_dat),
        nom: "nantissement",
        montant_dat: this.formDataToBeWatched.montant_dat,
        reference_dat: this.formDataToBeWatched.reference_dat
      };
    }
  },
  data: function data() {
    var vm = this;
    return _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
      isSeenState: {
        hypotheques: true,
        gages: true,
        cautionnement_solidaire: true,
        caution_hypothecaire: true,
        promesse_affectation_hypothecaire: true,
        protections_financieres_eligibles: true,
        conditions_particulières: true,
        suretes_diverses: true
      },
      defaultSuretes: [],
      newSurete: "",
      suretes_diverses: [],
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
      // credits: [],
      // clients: [],
      // encours: null,
      // placeholder: "Chercher clients",
      // matcli: "matcli",
      // nomcli: "nomcli",
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
        montant_engagement: "0",
        hypotheques_analyste: "",
        gages_analyste: '',
        // hypotheques: [],
        caution_hypothecaires: [],
        promesse_affectation_hypothecaires: [],
        protection_financieres: [],
        total_protection_financieres_valeur_considere: 0,
        total_protection_financieres_valeur_marchande: 0,
        total_promesse_affectation_hypothecaires_valeur_considere: 0,
        total_promesse_affectation_hypothecaires_valeur_marchande: 0,
        total_caution_hypothecaires_valeur_considere: 0,
        total_caution_hypothecaires_valeur_marchande: 0,
        cond_particulieres: "",
        co_signataire: "",
        commentaire_activite: "",
        total_hypotheques_valeur_marchande: "",
        total_hypotheques_valeur_considere: "",
        total_gages_valeur_marchande: "",
        total_gages_valeur_considere: "",
        notes: [],
        suretes_diverses: [],
        autres_suretes_diverses: [],
        cautionnement_solidaires: [],
        montant_dat: "",
        reference_dat: "",
        engagement_globales: "",
        comment_garantie_supports: "",
        total_montant_engagement_globale: 0,
        garantie_supports: ""
      },
      hypotheques_analyste: [_defineProperty({
        bien_hypotheque: "",
        proprietaire: "",
        annee_achat: "",
        adresse_emplacement: "",
        longitude: "",
        lattitude: "",
        date_evaluation: "",
        valeur_marchande: 0,
        valeur_considere: 0
      }, "date_evaluation", "")],
      garantie_supports: null,
      gages_analyste: [_defineProperty({
        bien_a_gage: "",
        proprietaire: "",
        annee_achat: "",
        adresse_emplacement: "",
        date_evaluation: "",
        valeur_marchande: 0,
        valeur_considere: 0
      }, "date_evaluation", "")],
      engagement_globales: [{
        montant_engagement_globale: "",
        entreprise_engagement_globale: ""
      }],
      cond_particulieres: [{
        cond_name: "",
        cond_description: ""
      }]
    }, "garantie_supports", [{
      label: "Chèque",
      value: false,
      commentaire: ""
    }, {
      label: "Virement irrévocable du salaire",
      value: false,
      commentaire: ""
    }, {
      label: "Billet à ordre",
      value: false,
      commentaire: ""
    }, {
      label: "Assurance vie/Fonds de prévoyance",
      value: false,
      commentaire: ""
    }, {
      label: "Cession volontaire de revenus",
      value: false,
      commentaire: ""
    }

    // {
    //     label: "Autres (à préciser)",
    //     value: false,
    // },
    ]), "co_signataire", [{
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
    }]), "taux_dep_gar_crsd", 0), "montant_dep_gar_crsd", 0), "cautionnement_solidaires", [{
      nom_prenoms: '',
      profession: '',
      revenu_mensuel: 0,
      valeur_patrimoine: 0
    }]);
  },
  methods: {
    toggleIsSeen: function toggleIsSeen(key) {
      var _ref4;
      var val = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var data = _objectSpread({}, this.isSeenState);
      val = (_ref4 = val !== null && val !== void 0 ? val : data[key]) !== null && _ref4 !== void 0 ? _ref4 : false;
      data[key] = !val;
      this.isSeenState = data;
    },
    refreshSurete: function refreshSurete(e) {
      var index = this.suretes_diverses.findIndex(function (el) {
        return (el === null || el === void 0 ? void 0 : el.nom) == "engagement";
      });
      this.$set(this.suretes_diverses, index, this.engagement_value);
      this.formDataToBeWatched.total_montant_engagement_globale = this.totalEngagementGlobal;
    },
    refreshSurete1: function refreshSurete1(e) {
      var index = this.suretes_diverses.findIndex(function (el) {
        return (el === null || el === void 0 ? void 0 : el.nom) == "nantissement";
      });
      this.$set(this.suretes_diverses, index, this.nantissement_dat);
    },
    addMore1: function addMore1() {
      this.cautionnement_solidaires.push({
        nom_prenoms: '',
        profession: '',
        revenu_mensuel: 0,
        valeur_patrimoine: 0
      });
      this.handleInput();
    },
    remove1: function remove1(index) {
      this.cautionnement_solidaires.splice(index, 1);
    },
    addAutreSurete: function addAutreSurete() {
      if (this.newSurete) {
        this.formDataToBeWatched.autres_suretes_diverses.push({
          label: this.newSurete,
          value: this.newSurete
        });
      }
      this.newSurete = '';
    },
    //
    add_garntie_support: function add_garntie_support() {
      this.garantie_supports.push({
        label: "",
        value: false
      });
      (0,vue__WEBPACK_IMPORTED_MODULE_8__.nextTick)(function () {
        window.$('.garantie_supports').find('tr:last td:first input').focus();
      });
    },
    remove_garntie_support: function remove_garntie_support(index) {
      this.garantie_supports.splice(index, 1);
      // this.formDataToBeWatched.total_part =
      //     this.totalPartPourcentageActionnariats;
      this.handleInput();
    },
    removeAutreSurete: function removeAutreSurete(index) {
      this.formDataToBeWatched.autres_suretes_diverses.splice(index, 1);
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
      var _this = this;
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
      }, {
        label: "Nantissement de stock",
        value: {
          label: "Nantissement de stock",
          nom: "nantissement_stock"
        },
        id: "nantissement_stock"
      }];
      this.formDataToBeWatched.suretes_diverses.forEach(function (el, index) {
        _this.defaultSuretes.forEach(function (elem) {
          if (elem.value.nom === (el === null || el === void 0 ? void 0 : el.nom)) {
            _this.formDataToBeWatched.suretes_diverses[index] = elem.value;
            // console.log({el: el.label, elem: elem.label})
          }
        });
      });
    },
    loadRetrieved: function loadRetrieved() {
      var _this2 = this;
      var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];
      if (lentb.length > 0) {
        var _this$meta_data$dossi23;
        // if(['Crédit conso'].includes(this.meta_data["dossier_credit"]?.applied_templ_name)){
        //         if(this.meta_data["dossier_credit"][createdKey] == undefined){
        //             this.garantie_supports = this.meta_data["dossier_credit"]["cred_pub_tb_7004"]["garantie_supports"]
        //             this.handleInput();
        //         }
        // }

        if (this.meta_data["dossier_credit"][createdKey] != undefined) {
          var _this$meta_data$dossi3, _this$formDataToBeWat, _this$meta_data$dossi4, _this$meta_data$dossi8, _this$meta_data$dossi10, _this$meta_data$dossi12, _this$meta_data$dossi14, _this$meta_data$dossi16, _this$meta_data$dossi18;
          this.formDataToBeWatched = this.meta_data["dossier_credit"][createdKey];
          if (((_this$meta_data$dossi3 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi3 === void 0 ? void 0 : _this$meta_data$dossi3.garantie_supports) != "") {
            this.garantie_supports = this.meta_data["dossier_credit"][createdKey]['garantie_supports'];
          }

          // console.log("promesse_affectation", this.formDataToBeWatched.promesse_affectation_hypothecaires)
          if (["", null, undefined].includes(this.formDataToBeWatched.promesse_affectation_hypothecaires)) {
            var _this$meta_data, _this$meta_data2, _this$meta_data3, _this$meta_data4, _this$meta_data5;
            this.formDataToBeWatched.promesse_affectation_hypothecaires = (_this$meta_data = this.meta_data) === null || _this$meta_data === void 0 || (_this$meta_data = _this$meta_data.dossier_credit) === null || _this$meta_data === void 0 || (_this$meta_data = _this$meta_data.cred_pub_tb_4) === null || _this$meta_data === void 0 ? void 0 : _this$meta_data.promesse_affectation_hypothecaires;
            this.formDataToBeWatched.total_protection_financieres_valeur_considere = (_this$meta_data2 = this.meta_data) === null || _this$meta_data2 === void 0 || (_this$meta_data2 = _this$meta_data2.dossier_credit) === null || _this$meta_data2 === void 0 || (_this$meta_data2 = _this$meta_data2[this.determineCredPubTables((_this$meta_data3 = this.meta_data) === null || _this$meta_data3 === void 0 || (_this$meta_data3 = _this$meta_data3.dossier_credit) === null || _this$meta_data3 === void 0 ? void 0 : _this$meta_data3.applied_templ_name)[4]]) === null || _this$meta_data2 === void 0 ? void 0 : _this$meta_data2.total_protection_financieres_valeur_considere;
            this.formDataToBeWatched.total_protection_financieres_valeur_marchande = (_this$meta_data4 = this.meta_data) === null || _this$meta_data4 === void 0 || (_this$meta_data4 = _this$meta_data4.dossier_credit) === null || _this$meta_data4 === void 0 || (_this$meta_data4 = _this$meta_data4[this.determineCredPubTables((_this$meta_data5 = this.meta_data) === null || _this$meta_data5 === void 0 || (_this$meta_data5 = _this$meta_data5.dossier_credit) === null || _this$meta_data5 === void 0 ? void 0 : _this$meta_data5.applied_templ_name)[4]]) === null || _this$meta_data4 === void 0 ? void 0 : _this$meta_data4.total_protection_financieres_valeur_marchande;
          }
          if (["", null, undefined].includes(this.formDataToBeWatched.caution_hypothecaires)) {
            var _this$meta_data6, _this$meta_data7, _this$meta_data8, _this$meta_data9, _this$meta_data0;
            this.formDataToBeWatched.caution_hypothecaires = (_this$meta_data6 = this.meta_data) === null || _this$meta_data6 === void 0 || (_this$meta_data6 = _this$meta_data6.dossier_credit) === null || _this$meta_data6 === void 0 || (_this$meta_data6 = _this$meta_data6.cred_pub_tb_4) === null || _this$meta_data6 === void 0 ? void 0 : _this$meta_data6.caution_hypothecaires;
            this.formDataToBeWatched.total_promesse_affectation_hypothecaires_valeur_considere = (_this$meta_data7 = this.meta_data) === null || _this$meta_data7 === void 0 || (_this$meta_data7 = _this$meta_data7.dossier_credit) === null || _this$meta_data7 === void 0 || (_this$meta_data7 = _this$meta_data7[this.determineCredPubTables((_this$meta_data8 = this.meta_data) === null || _this$meta_data8 === void 0 || (_this$meta_data8 = _this$meta_data8.dossier_credit) === null || _this$meta_data8 === void 0 ? void 0 : _this$meta_data8.applied_templ_name)[4]]) === null || _this$meta_data7 === void 0 ? void 0 : _this$meta_data7.total_promesse_affectation_hypothecaires_valeur_considere;
            this.formDataToBeWatched.total_promesse_affectation_hypothecaires_valeur_marchande = (_this$meta_data9 = this.meta_data) === null || _this$meta_data9 === void 0 || (_this$meta_data9 = _this$meta_data9.dossier_credit) === null || _this$meta_data9 === void 0 || (_this$meta_data9 = _this$meta_data9[this.determineCredPubTables((_this$meta_data0 = this.meta_data) === null || _this$meta_data0 === void 0 || (_this$meta_data0 = _this$meta_data0.dossier_credit) === null || _this$meta_data0 === void 0 ? void 0 : _this$meta_data0.applied_templ_name)[4]]) === null || _this$meta_data9 === void 0 ? void 0 : _this$meta_data9.total_promesse_affectation_hypothecaires_valeur_marchande;
          }
          if (['', null, undefined].includes((_this$formDataToBeWat = this.formDataToBeWatched) === null || _this$formDataToBeWat === void 0 ? void 0 : _this$formDataToBeWat.protection_financieres)) {
            var _this$meta_data1, _this$meta_data10, _this$meta_data11, _this$meta_data12, _this$meta_data13;
            this.formDataToBeWatched.protection_financieres = (_this$meta_data1 = this.meta_data) === null || _this$meta_data1 === void 0 || (_this$meta_data1 = _this$meta_data1.dossier_credit) === null || _this$meta_data1 === void 0 || (_this$meta_data1 = _this$meta_data1.cred_pub_tb_4) === null || _this$meta_data1 === void 0 ? void 0 : _this$meta_data1.protection_financieres;
            this.formDataToBeWatched.total_caution_hypothecaires_valeur_considere = (_this$meta_data10 = this.meta_data) === null || _this$meta_data10 === void 0 || (_this$meta_data10 = _this$meta_data10.dossier_credit) === null || _this$meta_data10 === void 0 || (_this$meta_data10 = _this$meta_data10[this.determineCredPubTables((_this$meta_data11 = this.meta_data) === null || _this$meta_data11 === void 0 || (_this$meta_data11 = _this$meta_data11.dossier_credit) === null || _this$meta_data11 === void 0 ? void 0 : _this$meta_data11.applied_templ_name)[4]]) === null || _this$meta_data10 === void 0 ? void 0 : _this$meta_data10.total_caution_hypothecaires_valeur_considere;
            this.formDataToBeWatched.total_caution_hypothecaires_valeur_marchande = (_this$meta_data12 = this.meta_data) === null || _this$meta_data12 === void 0 || (_this$meta_data12 = _this$meta_data12.dossier_credit) === null || _this$meta_data12 === void 0 || (_this$meta_data12 = _this$meta_data12[this.determineCredPubTables((_this$meta_data13 = this.meta_data) === null || _this$meta_data13 === void 0 || (_this$meta_data13 = _this$meta_data13.dossier_credit) === null || _this$meta_data13 === void 0 ? void 0 : _this$meta_data13.applied_templ_name)[4]]) === null || _this$meta_data12 === void 0 ? void 0 : _this$meta_data12.total_caution_hypothecaires_valeur_marchande;
          }
          if (((_this$meta_data$dossi4 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi4 === void 0 ? void 0 : _this$meta_data$dossi4.hypotheques_analyste) != undefined) {
            var _this$meta_data$dossi5, _this$meta_data$dossi6, _this$meta_data$dossi7;
            if (((_this$meta_data$dossi5 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi5 === void 0 ? void 0 : _this$meta_data$dossi5.hypotheques_analyste) != "") {
              this.hypotheques_analyste = this.meta_data["dossier_credit"][createdKey]['hypotheques_analyste'];
            }
            if (((_this$meta_data$dossi6 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi6 === void 0 ? void 0 : _this$meta_data$dossi6.total_hypotheques_valeur_marchande) != "") {
              this.total_hypotheques_valeur_marchande = this.meta_data["dossier_credit"][createdKey]['total_hypotheques_valeur_marchande'];
            }
            if (((_this$meta_data$dossi7 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi7 === void 0 ? void 0 : _this$meta_data$dossi7.total_hypotheques_valeur_considere) != "") {
              this.formDataToBeWatched.total_hypotheques_valeur_considere = this.meta_data["dossier_credit"][createdKey]['total_hypotheques_valeur_considere'];
            }
          }
          if (((_this$meta_data$dossi8 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi8 === void 0 ? void 0 : _this$meta_data$dossi8.gages_analyste) != undefined) {
            var _this$meta_data$dossi9, _this$meta_data$dossi0, _this$meta_data$dossi1;
            if (((_this$meta_data$dossi9 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi9 === void 0 ? void 0 : _this$meta_data$dossi9.gages_analyste) != "") {
              this.gages_analyste = this.meta_data["dossier_credit"][createdKey]['gages_analyste'];
            }
            if (((_this$meta_data$dossi0 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi0 === void 0 ? void 0 : _this$meta_data$dossi0.total_gages_valeur_marchande) != "") {
              this.total_gages_valeur_marchande = this.meta_data["dossier_credit"][createdKey]['total_gages_valeur_marchande'];
            }
            if (((_this$meta_data$dossi1 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi1 === void 0 ? void 0 : _this$meta_data$dossi1.total_gages_valeur_considere) != "") {
              this.formDataToBeWatched.total_gages_valeur_considere = this.meta_data["dossier_credit"][createdKey]['total_gages_valeur_considere'];
            }
          }
          if (((_this$meta_data$dossi10 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi10 === void 0 ? void 0 : _this$meta_data$dossi10.suretes_diverses) != undefined) {
            var _this$meta_data$dossi11;
            if (((_this$meta_data$dossi11 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi11 === void 0 ? void 0 : _this$meta_data$dossi11.suretes_diverses) != "") {
              this.suretes_diverses = this.meta_data["dossier_credit"][createdKey]['suretes_diverses'];
            }
          }
          if (((_this$meta_data$dossi12 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi12 === void 0 ? void 0 : _this$meta_data$dossi12.cond_particulieres) != undefined) {
            var _this$meta_data$dossi13;
            if (((_this$meta_data$dossi13 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi13 === void 0 ? void 0 : _this$meta_data$dossi13.cond_particulieres) != "") {
              this.cond_particulieres = this.meta_data["dossier_credit"][createdKey]['cond_particulieres'];
              // console.log("cond part 1", this.cond_particulieres)
            }
          }
          if (((_this$meta_data$dossi14 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi14 === void 0 ? void 0 : _this$meta_data$dossi14.cautionnement_solidaires) != undefined) {
            var _this$meta_data$dossi15;
            if (((_this$meta_data$dossi15 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi15 === void 0 ? void 0 : _this$meta_data$dossi15.cautionnement_solidaires) != "") {
              this.cautionnement_solidaires = this.meta_data["dossier_credit"][createdKey]['cautionnement_solidaires'];
            }
          }
          if (((_this$meta_data$dossi16 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi16 === void 0 ? void 0 : _this$meta_data$dossi16.co_signataire) != undefined) {
            var _this$meta_data$dossi17;
            if (((_this$meta_data$dossi17 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi17 === void 0 ? void 0 : _this$meta_data$dossi17.co_signataire) != "") {
              this.co_signataire = this.meta_data["dossier_credit"][createdKey]['co_signataire'];
            }
          }
          if (((_this$meta_data$dossi18 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi18 === void 0 ? void 0 : _this$meta_data$dossi18.engagement_globales) != undefined) {
            var _this$meta_data$dossi19;
            if (((_this$meta_data$dossi19 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi19 === void 0 ? void 0 : _this$meta_data$dossi19.engagement_globales) != "") {
              this.engagement_globales = this.meta_data["dossier_credit"][createdKey]["engagement_globales"];
            }
          }
          if (this.meta_data.dossier_credit.cred_pub_tb_1 != undefined) {
            var _data$garantie, _data$montant_crsd, _data$montant_credit, _this$montant_dep_gar;
            var data = this.meta_data.dossier_credit.cred_pub_tb_1;
            this.montant_dep_gar_crsd = Number((_data$garantie = data.garantie) === null || _data$garantie === void 0 ? void 0 : _data$garantie.toString().replace(/\s/g, "")) + Number((_data$montant_crsd = data.montant_crsd) === null || _data$montant_crsd === void 0 ? void 0 : _data$montant_crsd.toString().replace(/\s/g, ""));
            var a = Number((_data$montant_credit = data.montant_credit) === null || _data$montant_credit === void 0 ? void 0 : _data$montant_credit.toString().replace(/\s/g, ""));
            a = !a ? 1 : a;
            var value = Number((_this$montant_dep_gar = this.montant_dep_gar_crsd) === null || _this$montant_dep_gar === void 0 ? void 0 : _this$montant_dep_gar.toString().replace(/\s+/g, "")) * 100 / a;
            this.taux_dep_gar_crsd = isFinite(value) ? value.toFixed(2) : 0;
          }
        } else {
          var _this$meta_data14, _this$meta_data$dossi20;
          if ((_this$meta_data14 = this.meta_data) !== null && _this$meta_data14 !== void 0 && (_this$meta_data14 = _this$meta_data14.dossier_credit) !== null && _this$meta_data14 !== void 0 && _this$meta_data14.cred_pub_tb_4) {
            var _this$meta_data15, _this$meta_data16, _this$meta_data17, _this$meta_data18, _this$meta_data19, _this$meta_data20, _this$meta_data21, _this$meta_data22, _this$meta_data23, _this$meta_data24, _this$meta_data25, _this$meta_data26, _this$meta_data27, _this$meta_data28, _this$meta_data29, _this$meta_data30, _this$meta_data31, _this$meta_data32, _this$meta_data33, _this$meta_data34;
            this.hypotheques_analyste = (_this$meta_data15 = this.meta_data) === null || _this$meta_data15 === void 0 || (_this$meta_data15 = _this$meta_data15.dossier_credit) === null || _this$meta_data15 === void 0 || (_this$meta_data15 = _this$meta_data15.cred_pub_tb_4) === null || _this$meta_data15 === void 0 ? void 0 : _this$meta_data15.hypotheques;
            this.formDataToBeWatched.hypotheques_analyste = this.hypotheques_analyste;
            this.formDataToBeWatched.total_hypotheques_valeur_marchande = (_this$meta_data16 = this.meta_data) === null || _this$meta_data16 === void 0 || (_this$meta_data16 = _this$meta_data16.dossier_credit) === null || _this$meta_data16 === void 0 || (_this$meta_data16 = _this$meta_data16.cred_pub_tb_4) === null || _this$meta_data16 === void 0 ? void 0 : _this$meta_data16.total_hypotheques_valeur_marchande;
            this.formDataToBeWatched.total_hypotheques_valeur_considere = this.total_hypotheques_valeur_considere;
            this.gages_analyste = (_this$meta_data17 = this.meta_data) === null || _this$meta_data17 === void 0 || (_this$meta_data17 = _this$meta_data17.dossier_credit) === null || _this$meta_data17 === void 0 || (_this$meta_data17 = _this$meta_data17.cred_pub_tb_4) === null || _this$meta_data17 === void 0 ? void 0 : _this$meta_data17.gages;
            this.formDataToBeWatched.gages_analyste = this.gages_analyste;
            this.cond_particulieres = (_this$meta_data18 = this.meta_data) === null || _this$meta_data18 === void 0 || (_this$meta_data18 = _this$meta_data18.dossier_credit) === null || _this$meta_data18 === void 0 || (_this$meta_data18 = _this$meta_data18.cred_pub_tb_4) === null || _this$meta_data18 === void 0 ? void 0 : _this$meta_data18.cond_particulieres;
            // console.log("cond part 2", this.cond_particulieres)
            this.formDataToBeWatched.cond_particulieres = this.cond_particulieres;
            this.cautionnement_solidaires = (_this$meta_data19 = this.meta_data) === null || _this$meta_data19 === void 0 || (_this$meta_data19 = _this$meta_data19.dossier_credit) === null || _this$meta_data19 === void 0 || (_this$meta_data19 = _this$meta_data19.cred_pub_tb_4) === null || _this$meta_data19 === void 0 ? void 0 : _this$meta_data19.cautionnement_solidaires;
            this.formDataToBeWatched.cautionnement_solidaires = this.cautionnement_solidaires;
            this.formDataToBeWatched.caution_hypothecaires = (_this$meta_data20 = this.meta_data) === null || _this$meta_data20 === void 0 || (_this$meta_data20 = _this$meta_data20.dossier_credit) === null || _this$meta_data20 === void 0 || (_this$meta_data20 = _this$meta_data20.cred_pub_tb_4) === null || _this$meta_data20 === void 0 ? void 0 : _this$meta_data20.caution_hypothecaires;
            this.formDataToBeWatched.promesse_affectation_hypothecaires = (_this$meta_data21 = this.meta_data) === null || _this$meta_data21 === void 0 || (_this$meta_data21 = _this$meta_data21.dossier_credit) === null || _this$meta_data21 === void 0 || (_this$meta_data21 = _this$meta_data21.cred_pub_tb_4) === null || _this$meta_data21 === void 0 ? void 0 : _this$meta_data21.promesse_affectation_hypothecaires;
            this.formDataToBeWatched.protection_financieres = (_this$meta_data22 = this.meta_data) === null || _this$meta_data22 === void 0 || (_this$meta_data22 = _this$meta_data22.dossier_credit) === null || _this$meta_data22 === void 0 || (_this$meta_data22 = _this$meta_data22.cred_pub_tb_4) === null || _this$meta_data22 === void 0 ? void 0 : _this$meta_data22.protection_financieres;
            this.formDataToBeWatched.total_protection_financieres_valeur_considere = (_this$meta_data23 = this.meta_data) === null || _this$meta_data23 === void 0 || (_this$meta_data23 = _this$meta_data23.dossier_credit) === null || _this$meta_data23 === void 0 || (_this$meta_data23 = _this$meta_data23[this.determineCredPubTables((_this$meta_data24 = this.meta_data) === null || _this$meta_data24 === void 0 || (_this$meta_data24 = _this$meta_data24.dossier_credit) === null || _this$meta_data24 === void 0 ? void 0 : _this$meta_data24.applied_templ_name)[4]]) === null || _this$meta_data23 === void 0 ? void 0 : _this$meta_data23.total_protection_financieres_valeur_considere;
            this.formDataToBeWatched.total_protection_financieres_valeur_marchande = (_this$meta_data25 = this.meta_data) === null || _this$meta_data25 === void 0 || (_this$meta_data25 = _this$meta_data25.dossier_credit) === null || _this$meta_data25 === void 0 || (_this$meta_data25 = _this$meta_data25[this.determineCredPubTables((_this$meta_data26 = this.meta_data) === null || _this$meta_data26 === void 0 || (_this$meta_data26 = _this$meta_data26.dossier_credit) === null || _this$meta_data26 === void 0 ? void 0 : _this$meta_data26.applied_templ_name)[4]]) === null || _this$meta_data25 === void 0 ? void 0 : _this$meta_data25.total_protection_financieres_valeur_marchande;
            this.formDataToBeWatched.total_promesse_affectation_hypothecaires_valeur_considere = (_this$meta_data27 = this.meta_data) === null || _this$meta_data27 === void 0 || (_this$meta_data27 = _this$meta_data27.dossier_credit) === null || _this$meta_data27 === void 0 || (_this$meta_data27 = _this$meta_data27[this.determineCredPubTables((_this$meta_data28 = this.meta_data) === null || _this$meta_data28 === void 0 || (_this$meta_data28 = _this$meta_data28.dossier_credit) === null || _this$meta_data28 === void 0 ? void 0 : _this$meta_data28.applied_templ_name)[4]]) === null || _this$meta_data27 === void 0 ? void 0 : _this$meta_data27.total_promesse_affectation_hypothecaires_valeur_considere;
            this.formDataToBeWatched.total_promesse_affectation_hypothecaires_valeur_marchande = (_this$meta_data29 = this.meta_data) === null || _this$meta_data29 === void 0 || (_this$meta_data29 = _this$meta_data29.dossier_credit) === null || _this$meta_data29 === void 0 || (_this$meta_data29 = _this$meta_data29[this.determineCredPubTables((_this$meta_data30 = this.meta_data) === null || _this$meta_data30 === void 0 || (_this$meta_data30 = _this$meta_data30.dossier_credit) === null || _this$meta_data30 === void 0 ? void 0 : _this$meta_data30.applied_templ_name)[4]]) === null || _this$meta_data29 === void 0 ? void 0 : _this$meta_data29.total_promesse_affectation_hypothecaires_valeur_marchande;
            this.formDataToBeWatched.total_caution_hypothecaires_valeur_considere = (_this$meta_data31 = this.meta_data) === null || _this$meta_data31 === void 0 || (_this$meta_data31 = _this$meta_data31.dossier_credit) === null || _this$meta_data31 === void 0 || (_this$meta_data31 = _this$meta_data31[this.determineCredPubTables((_this$meta_data32 = this.meta_data) === null || _this$meta_data32 === void 0 || (_this$meta_data32 = _this$meta_data32.dossier_credit) === null || _this$meta_data32 === void 0 ? void 0 : _this$meta_data32.applied_templ_name)[4]]) === null || _this$meta_data31 === void 0 ? void 0 : _this$meta_data31.total_caution_hypothecaires_valeur_considere;
            this.formDataToBeWatched.total_caution_hypothecaires_valeur_marchande = (_this$meta_data33 = this.meta_data) === null || _this$meta_data33 === void 0 || (_this$meta_data33 = _this$meta_data33.dossier_credit) === null || _this$meta_data33 === void 0 || (_this$meta_data33 = _this$meta_data33[this.determineCredPubTables((_this$meta_data34 = this.meta_data) === null || _this$meta_data34 === void 0 || (_this$meta_data34 = _this$meta_data34.dossier_credit) === null || _this$meta_data34 === void 0 ? void 0 : _this$meta_data34.applied_templ_name)[4]]) === null || _this$meta_data33 === void 0 ? void 0 : _this$meta_data33.total_caution_hypothecaires_valeur_marchande;
          }
          if (['Crédit conso'].includes((_this$meta_data$dossi20 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi20 === void 0 ? void 0 : _this$meta_data$dossi20.applied_templ_name)) {
            var _this$meta_data$dossi21;
            if (((_this$meta_data$dossi21 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi21 === void 0 ? void 0 : _this$meta_data$dossi21.garantie_supports) != undefined) {
              var _this$meta_data$dossi22;
              this.garantie_supports = (_this$meta_data$dossi22 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi22 === void 0 ? void 0 : _this$meta_data$dossi22.garantie_supports;
            }
          }

          // console.log('gages',this.meta_data?.dossier_credit?.cred_pub_tb_4?.gages)
        }
        if (this.meta_data.dossier_credit.cred_pub_tb_1 != undefined) {
          var _data$garantie2, _data$montant_crsd2, _data$montant_credit2, _this$montant_dep_gar2;
          var _data = this.meta_data.dossier_credit.cred_pub_tb_1;
          this.montant_dep_gar_crsd = Number((_data$garantie2 = _data.garantie) === null || _data$garantie2 === void 0 ? void 0 : _data$garantie2.toString().replace(/\s/g, "")) + Number((_data$montant_crsd2 = _data.montant_crsd) === null || _data$montant_crsd2 === void 0 ? void 0 : _data$montant_crsd2.toString().replace(/\s/g, ""));
          var _a = Number((_data$montant_credit2 = _data.montant_credit) === null || _data$montant_credit2 === void 0 ? void 0 : _data$montant_credit2.toString().replace(/\s/g, ""));
          _a = !_a ? 1 : _a;
          var _value = Number((_this$montant_dep_gar2 = this.montant_dep_gar_crsd) === null || _this$montant_dep_gar2 === void 0 ? void 0 : _this$montant_dep_gar2.toString().replace(/\s+/g, "")) * 100 / _a;
          this.taux_dep_gar_crsd = isFinite(_value) ? _value.toFixed(2) : 0;
        }
        // Close table by default
        this.defaultRetract(false, (_this$meta_data$dossi23 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi23 === void 0 ? void 0 : _this$meta_data$dossi23.applied_templ_id);
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
        label: "D\xE9p\xF4t de garantie et compte de r\xE9serve du service de la dette (DG + CRSD) \xE0 hauteur de ".concat(this.montant_dep_gar_crsd.toLocaleString(), " soit ").concat(this.taux_dep_gar_crsd, "% du montant propos\xE9"),
        value: {
          label: "D\xE9p\xF4t de garantie et compte de r\xE9serve du service de la dette (DG + CRSD) \xE0 hauteur de ".concat(this.montant_dep_gar_crsd.toLocaleString(), " soit ").concat(this.taux_dep_gar_crsd, "% du montant propos\xE9"),
          nom: "depot",
          taux: this.taux_dep_gar_crsd,
          montant: this.montant_dep_gar_crsd
        },
        id: "depot"
      }, {
        label: "Nantissement de stock",
        value: {
          label: "Nantissement de stock",
          nom: "nantissement_stock"
        },
        id: "nantissement_stock"
      }
      // {
      //     label: `Nantissement Dat`,
      //     value: {
      //         label: `Nantissement Dat`,
      //         nom: "nantissement_dat",

      //     },
      //     id: "nantissement_dat",
      // },
      ];
      this.formDataToBeWatched.suretes_diverses.forEach(function (el, index) {
        _this2.defaultSuretes.forEach(function (elem) {
          if (elem.value.nom === (el === null || el === void 0 ? void 0 : el.nom)) {
            _this2.formDataToBeWatched.suretes_diverses[index] = elem.value;
            // console.log({el: el.label, elem: elem.label})
          }
        });
      });
    },
    launchAutoSaver: function launchAutoSaver() {
      var _this3 = this;
      _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["default"].loadUserData().then(function (res) {
        _this3.send2Backend(res, 0, 0);
      })["catch"](function (err) {
        _this3.loadWithError(err);
      });
    },
    autosaving: function autosaving(newVal, oldVal) {
      var _this4 = this;
      if (this.canLaunchAutosaving() === true) {
        _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["default"].loadUserData().then(function (res) {
          _this4.send2Backend(res, newVal, oldVal);
        })["catch"](function (err) {
          _this4.loadWithError(err);
        });
      }
    },
    recomputeSouscriptionValue: function recomputeSouscriptionValue(data) {
      var res = 0;
      this.duree_credit0 = data.duree_credit;
      if (data.mode_paiement != null) {
        var _data$mode_paiement;
        this.mode_paiement0 = (_data$mode_paiement = data.mode_paiement) === null || _data$mode_paiement === void 0 ? void 0 : _data$mode_paiement.toLowerCase();
      } else {
        if (this.mode_paiement0 == null) {
          var _this$meta_data$dossi24;
          this.mode_paiement0 = (_this$meta_data$dossi24 = this.meta_data.dossier_credit.cred_pub_tb_1.mode_paiement) === null || _this$meta_data$dossi24 === void 0 ? void 0 : _this$meta_data$dossi24.toLowerCase();
          // console.log('mode_paiement0', this.mode_paiement0)
        }
        // console.log('mode_paiement1', this.mode_paiement0)
      }

      // if (data.duree_credit != null) {
      //     this.duree_credit0 = data.duree_credit?.toLowerCase()
      // } else {
      //     if (this.duree_credit0 == null) {
      //         this.duree_credit0 = this.meta_data.dossier_credit.cred_pub_tb_1.duree_credit?.toLowerCase()
      //         console.log('duree_credit0', this.duree_credit0)
      //     }
      //     console.log('duree_credit1', this.duree_credit0)

      // }

      var dure = Number(this.duree_credit0) || 0;
      var mode = this.mode_paiement0.toLowerCase();
      var diviseur = 1;
      if (mode === "mensuelle") {
        diviseur = 1;
        res = dure / diviseur;
        // console.log('res', res)
      }
      if (mode === "bi-mensuel") {
        diviseur = 2;
        res = dure * diviseur;
        // console.log('res', res)
      }
      if (mode === "trimestriel") {
        diviseur = 3;
        res = dure / diviseur;
        // console.log('res', res)
      }
      if (mode === "semestriel") {
        diviseur = 6;
        res = dure / diviseur;
        // console.log('res', res)
      }
      if (mode === "in fine") {
        diviseur = dure || 1;
        res = dure / diviseur;
        // console.log('res', res)
      }
      var updatedBillet = {
        label: "Souscription de ".concat(res, " billets \xE0 ordre sign\xE9s par l'emprunteur"),
        value: {
          label: "Souscription de ".concat(res, " billets \xE0 ordre sign\xE9s par l'emprunteur"),
          nom: "souscription",
          billets: res
        },
        id: "souscription"
      };
      this.defaultSuretes[0] = updatedBillet;
      this.defaultSuretes[0] = updatedBillet;
      this.$set(this.defaultSuretes, 0, updatedBillet);
      // console.log('defaultSuretes', this.defaultSuretes)
    },
    addEngagementGlobale: function addEngagementGlobale() {
      this.engagement_globales.push({
        montant_engagement_globale: "",
        entreprise_engagement_globale: ""
      });
    },
    removeEngagementGlobale: function removeEngagementGlobale(index) {
      this.engagement_globales.splice(index, 1);
      this.refreshSurete();
    },
    addMoreHypotheque: function addMoreHypotheque() {
      this.hypotheques_analyste.push(_defineProperty({
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
      this.gages_analyste.push(_defineProperty({
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
    somX3: function somX3(ob, key) {
      // console.log("obj", ob)
      var som = 0;
      ob.filter(function (elm) {
        var _elm$key;
        som += parseInt((_elm$key = elm[key]) === null || _elm$key === void 0 ? void 0 : _elm$key.toString().replace(/\s/g, ''));
      });
      return som;
    },
    removeHypotheque: function removeHypotheque(index) {
      this.hypotheques_analyste.splice(index, 1);
      this.formDataToBeWatched["total_hypotheques_valeur_marchande"] = this.somX3(this.hypotheques_analyste, 'valeur_marchande');
      // console.log("indexHypo", this.somX3(this.hypotheques_analyste, ' valeur_marchande'))
      this.formDataToBeWatched["total_hypotheques_valeur_considere"] = this.somX3(this.hypotheques_analyste, 'valeur_considere');
    },
    removeGage: function removeGage(index) {
      this.gages_analyste.splice(index, 1);
      this.formDataToBeWatched["total_gages_valeur_marchande"] = this.somX3(this.gages_analyste, 'valeur_marchande');
      this.formDataToBeWatched["total_gages_valeur_considere"] = this.somX3(this.gages_analyste, 'valeur_considere');
    },
    removeByKey: function removeByKey(index, removeList) {
      this[removeList].splice(index, 1);
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
      // // window.location.href = "/login";
    },
    send2Backend: function send2Backend(res, newVal, oldVal) {
      this.authcheck = true;
      this.authcheckUsr = res.data;
      this.authcheckStatus = res.status;
      if (this.authcheckStatus === 401) {
        // window.location.href = "/login";
      }
      if (this.authcheck === true) {
        this.$emit('autosaving');
        this.$axios.post(this.ebapisHost + "creditbuilder/api/v1/autosaving/", {
          user: this.authcheckUsr,
          meta_parseable: this.meta_parseable,
          filledData: this.formDataToBeWatched
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
      } else {
        alert("Unauthenticated");
      }
    },
    setDateInput: function setDateInput(event) {
      var objectName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var property = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var index = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      if (![null, undefined].includes(this[objectName][index][property])) {
        this[objectName][index][property] = event[1];
      }
      this.handleInput();
    },
    handleInput: function handleInput(evt) {
      this.formDataToBeWatched.garantie_supports = this.garantie_supports;
      this.formDataToBeWatched.total_hypotheques_valeur_marchande = this.somX3(this.hypotheques_analyste, 'valeur_marchande');
      this.formDataToBeWatched.total_hypotheques_valeur_considere = this.somX3(this.hypotheques_analyste, 'valeur_considere');
      // alert(0)
      this.formDataToBeWatched.total_gages_valeur_marchande = this.somX3(this.gages_analyste, 'valeur_marchande');
      this.formDataToBeWatched.total_gages_valeur_considere = this.somX3(this.gages_analyste, 'valeur_considere');
      this.formDataToBeWatched.total_protection_financieres_valeur_considere = this.somX3(this.formDataToBeWatched.protection_financieres, 'valeur_considere');
      this.formDataToBeWatched.total_protection_financieres_valeur_marchande = this.somX3(this.formDataToBeWatched.protection_financieres, 'valeur_marchande');
      this.formDataToBeWatched.total_promesse_affectation_hypothecaires_valeur_considere = this.somX3(this.formDataToBeWatched.promesse_affectation_hypothecaires, 'valeur_marchande');
      this.formDataToBeWatched.total_promesse_affectation_hypothecaires_valeur_marchande = this.somX3(this.formDataToBeWatched.promesse_affectation_hypothecaires, 'valeur_considere');
      this.formDataToBeWatched.total_caution_hypothecaires_valeur_considere = this.somX3(this.formDataToBeWatched.caution_hypothecaires, 'valeur_considere');
      this.formDataToBeWatched.total_caution_hypothecaires_valeur_marchande = this.somX3(this.formDataToBeWatched.caution_hypothecaires, 'valeur_marchande');
      this.formDataToBeWatched.hypotheques_analyste = this.hypotheques_analyste;
      this.formDataToBeWatched.gages_analyste = this.gages_analyste;
      this.formDataToBeWatched['suretes_diverses'] = this.suretes_diverses;
      this.formDataToBeWatched['co_signataire'] = this.co_signataire;
      this.formDataToBeWatched['cond_particulieres'] = this.cond_particulieres;
      this.formDataToBeWatched['cautionnement_solidaires'] = this.cautionnement_solidaires;
      this.formDataToBeWatched["engagement_globales"] = this.engagement_globales;
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
    },
    formatDateForInput: function formatDateForInput(data) {
      var day = data.getDate() <= 9 ? "0" + data.getDate() : data.getDate();
      var monthNumber = data.getMonth() + 1;
      var month = monthNumber <= 9 ? "0" + monthNumber : monthNumber;
      return data.getFullYear() + "-" + month + "-" + day;
    }
  },
  watch: {
    formDataToBeWatched: {
      handler: function handler(newVal, oldVal) {
        this.autosaving(newVal, oldVal);
      },
      deep: true,
      immediate: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/parts/TableauPonderationARC.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/parts/TableauPonderationARC.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'TableauPonderation',
  props: {
    dossier_credit: {
      type: Object,
      required: true,
      "default": {}
    },
    depot_de_garantie: {
      type: Number,
      required: true,
      "default": null
    },
    coming_form: String
  },
  data: function data() {
    return {
      CONFIG: {
        LOADER_DELAY_TIME_IN_MS: 500,
        // half a second
        MIN_UPDATE_INTERVAL_IN_S: 5 // 5 seconds
      },
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_1__["default"].host,
      ERR_AMOUNT_ZERO: 'montant crédit zéro',
      ERR_AMOUNT_UNDEFINED: 'montant crédit non défini',
      errorMessage: null,
      errorHint: null,
      isLoading: null,
      lastUpdateTimestamp: null,
      NULL_INDICATOR: 0,
      ponderationData: null,
      ponderations: [{
        'title': "Montant de crédit proposé",
        'slug': 'montant_credit',
        'value': 100
      }, {
        'title': "Caution hypothécaire",
        'slug': 'caution_hypothecaire',
        'value': 70
      }, {
        'title': "Promesses d'affectation hypothécaire",
        'slug': 'promesse_affectation_hypothecaire',
        'value': 70
      }, {
        'title': 'Caution solidaire',
        'slug': 'caution_solidaire',
        // 'value': 20,
        'value': 0
      }, {
        'title': 'Dépôt de garantie',
        'slug': 'depot_de_garantie',
        'value': 100
      }, {
        'title': 'Gage de biens mobiliers',
        'slug': 'gages',
        'value': 50
      }, {
        'title': 'Hypothèque ferme',
        'slug': 'hypotheque_ferme',
        'value': 80
      }, {
        'title': 'Protections financières éligibles (Garantie/Assurance crédit)',
        'slug': 'protections_financieres_eligibles',
        'value': 90
      }, {
        'title': 'Nantissement de fonds de commerce',
        'slug': 'nantissement_de_fonds_de_commerce',
        'value': 0
      }, {
        'title': 'Nantissement de stock',
        'slug': 'nantissement_de_stock',
        'value': 0
      }],
      ponderationTotals: null,
      read_only: false
    };
  },
  computed: {
    // totalMontantBrutSansPonderation(){
    //     let total = 0;
    //     this.ponderations?.forEach(p => {
    //         const montant = this.montantBrutSansPonderation(p);
    //         if(this.valueIsInvalid(montant)){
    //             total += 0;
    //         }else{
    //             total += parseInt(montant);
    //         }
    //     });
    //     return total;
    // },
    // totalMontantAvecPonderation(){
    //     let total = 0;
    //     this.ponderations?.forEach((p,idx) => {
    //         if(idx != 0){
    //             const montant = this.montantAvecPonderation(p);
    //             if(this.valueIsInvalid(montant)){
    //                 total += 0;
    //             }else{
    //                 total += parseInt(montant);
    //             }
    //         }
    //     });
    //     return total;
    // },
    // ratioDeCouverture(){
    //     if(!this.ponderationTotals) return null;
    //     const montant = this.ponderationTotals?.montant_credit ?? null;
    //     let error = '';
    //     if(montant == 0){
    //         error = this.ERR_AMOUNT_ZERO;
    //     }
    //     if(montant == null || montant == undefined){
    //         error = this.ERR_AMOUNT_UNDEFINED;
    //     }
    //     if(this.valueIsInvalid(montant)){
    //         this.setError("Montant crédit invalide !", "Assurez-vous d'avoir rempli le montant crédit dans la Fiche signalétique T0")
    //         return this.NULL_INDICATOR +' - '+ error;
    //     }
    //     const denom = parseInt(this.trim(montant));
    //     let ratio = (this.totalMontantAvecPonderation  / denom)*100;
    //     return (ratio?.toFixed(2) ?? this.NULL_INDICATOR) + '%'
    // },

    // tableau_ponderation(){
    //     return {
    //         ponderations: this.ponderations,
    //         total_montant_brut_sans_ponderation: this.totalMontantBrutSansPonderation,
    //         total_montant_avec_ponderation: this.totalMontantAvecPonderation,
    //         ratio_de_couverture: this.ratioDeCouverture,
    //     }
    // }
  },
  mounted: function mounted() {
    this.computePonderationTotals();
    EventBus.$on('autosaving', this.computePonderationTotals);
  },
  methods: {
    _formatNumber: function _formatNumber(value) {
      var _this$localeStringToF;
      if (this.valueIsInvalid(value)) return this.NULL_INDICATOR;
      return ((_this$localeStringToF = this.localeStringToFloat(String(value))) === null || _this$localeStringToF === void 0 ? void 0 : _this$localeStringToF.toLocaleString('fr-FR')) || 0;
    },
    autosaving: function autosaving() {
      var _this = this;
      if (this.read_only) return;
      if (this.canLaunchAutosaving() === true) {
        _services_auth_service__WEBPACK_IMPORTED_MODULE_0__["default"].loadUserData().then(function (res) {
          _this.send2Backend(res);
        })["catch"](function (err) {
          // this.loadWithError(err);
        });
      }
    },
    clearError: function clearError() {
      this.errorMessage = null;
      this.errorHint = null;
    },
    calcRatioDeCouverture: function calcRatioDeCouverture() {
      var _this$ponderationTota, _this$ponderationTota2;
      var total_montant_avec_ponderation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      if (!this.ponderationTotals) return null;
      var montant = (_this$ponderationTota = (_this$ponderationTota2 = this.ponderationTotals) === null || _this$ponderationTota2 === void 0 ? void 0 : _this$ponderationTota2.montant_credit) !== null && _this$ponderationTota !== void 0 ? _this$ponderationTota : null;
      var error = '';
      if (montant == 0) {
        error = this.ERR_AMOUNT_ZERO;
      }
      if (montant == null || montant == undefined) {
        error = this.ERR_AMOUNT_UNDEFINED;
      }
      if (this.valueIsInvalid(montant)) {
        this.setError("Montant crédit invalide !", "Assurez-vous d'avoir rempli le montant crédit dans la Fiche signalétique T0");
        return null;
      }
      try {
        var _this$ponderationData, _ratio$toFixed;
        var denom = parseInt(this.trim(montant));
        // let ratio = (this.totalMontantAvecPonderation  / denom)*100;
        var ratio = (total_montant_avec_ponderation !== null && total_montant_avec_ponderation !== void 0 ? total_montant_avec_ponderation : (_this$ponderationData = this.ponderationData) === null || _this$ponderationData === void 0 ? void 0 : _this$ponderationData.total_montant_avec_ponderation) / denom * 100;
        return ((_ratio$toFixed = ratio === null || ratio === void 0 ? void 0 : ratio.toFixed(2)) !== null && _ratio$toFixed !== void 0 ? _ratio$toFixed : this.NULL_INDICATOR) + '%';
      } catch (error) {
        return null;
      }
    },
    calcTotalMontantAvecPonderation: function calcTotalMontantAvecPonderation() {
      var _ref,
        _this2 = this;
      var ponderations = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var total = 0;
      (_ref = ponderations !== null && ponderations !== void 0 ? ponderations : this.ponderations) === null || _ref === void 0 || _ref.forEach(function (p, idx) {
        if (idx != 0) {
          var montant = _this2.montantAvecPonderation(p);
          if (_this2.valueIsInvalid(montant)) {
            total += 0;
          } else {
            total += parseInt(montant);
          }
        }
      });
      return total;
    },
    calcTotalMontantBrutSansPonderation: function calcTotalMontantBrutSansPonderation() {
      var _ref2,
        _this3 = this;
      var ponderations = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var total = 0;
      (_ref2 = ponderations !== null && ponderations !== void 0 ? ponderations : this.ponderations) === null || _ref2 === void 0 || _ref2.forEach(function (p) {
        var montant = _this3.montantBrutSansPonderation(p);
        if (_this3.valueIsInvalid(montant)) {
          total += 0;
        } else {
          total += parseInt(montant);
        }
      });
      return total;
    },
    computePonderationTotals: function computePonderationTotals() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _this4$CONFIG, _this4$CONFIG2, _this4$dossier_credit, _this4$determineCredP, _this4$dossier_credit6, _this4$CONFIG3, _this4$dossier_credit2, _this4$dossier_credit3, _this4$dossier_credit4, _this4$dossier_credit5, credTbKeys, credPubTb1, credPubTb4, montant_credit, total_caution_hypothecaires_valeur_considere, total_promesse_affectation_hypothecaires_valeur_considere, total_cautionnement_solidaires_valeur_cautionnement, cautionnement_solidaires, total_gages_valeur_considere, total_hypotheques_valeur_considere, total_protection_financieres_valeur_marchande, nantissement_de_fonds_de_commerce_valeur_marchande, nantissement_de_stock_valeur_marchande, caution_solidaire, depot_de_garantie, ponderations, total_montant_brut_sans_ponderation, total_montant_avec_ponderation, ratio_de_couverture, updated_at;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!_this4.isLoading) {
                _context.next = 2;
                break;
              }
              return _context.abrupt("return");
            case 2:
              _context.prev = 2;
              _this4.isLoading = true;
              _context.next = 6;
              return _this4.$sleep((_this4$CONFIG = _this4.CONFIG) === null || _this4$CONFIG === void 0 ? void 0 : _this4$CONFIG.LOADER_DELAY_TIME_IN_MS);
            case 6:
              // ?- FOr visual feedback
              _this4.clearError();
              if (!((new Date().getTime() - _this4.lastUpdateTimestamp) / 1000 < ((_this4$CONFIG2 = _this4.CONFIG) === null || _this4$CONFIG2 === void 0 ? void 0 : _this4$CONFIG2.MIN_UPDATE_INTERVAL_IN_S))) {
                _context.next = 10;
                break;
              }
              _this4.$console.log(":: last update less than", (_this4$CONFIG3 = _this4.CONFIG) === null || _this4$CONFIG3 === void 0 ? void 0 : _this4$CONFIG3.MIN_UPDATE_INTERVAL_IN_S, "s ago. Cancelling");
              return _context.abrupt("return");
            case 10:
              if (!((_this4$dossier_credit = _this4.dossier_credit) !== null && _this4$dossier_credit !== void 0 && _this4$dossier_credit.tableau_ponderation_arc)) {
                _context.next = 17;
                break;
              }
              _this4.ponderationData = (_this4$dossier_credit2 = (_this4$dossier_credit3 = _this4.dossier_credit) === null || _this4$dossier_credit3 === void 0 ? void 0 : _this4$dossier_credit3.tableau_ponderation_arc) !== null && _this4$dossier_credit2 !== void 0 ? _this4$dossier_credit2 : null;
              _this4.ponderationTotals = (_this4$dossier_credit4 = (_this4$dossier_credit5 = _this4.dossier_credit) === null || _this4$dossier_credit5 === void 0 || (_this4$dossier_credit5 = _this4$dossier_credit5.tableau_ponderation_arc) === null || _this4$dossier_credit5 === void 0 ? void 0 : _this4$dossier_credit5.totals) !== null && _this4$dossier_credit4 !== void 0 ? _this4$dossier_credit4 : null;
              if (!_this4.read_only) {
                _context.next = 17;
                break;
              }
              _this4.$console.log("::read_only", !!_this4.ponderationData);
              if (!_this4.ponderationData) {
                _context.next = 17;
                break;
              }
              return _context.abrupt("return");
            case 17:
              if (_this4.depot_de_garantie) {
                _context.next = 21;
                break;
              }
              _this4.errorMessage = "Dépot de garantie non défini";
              _this4.errorHint = "Veuillez vous assurez que le montant du dépot de garantie a bien été renseigné";
              return _context.abrupt("return");
            case 21:
              // 
              credTbKeys = (_this4$determineCredP = _this4.determineCredPubTables(_this4.dossier_credit["applied_templ_name"])) !== null && _this4$determineCredP !== void 0 ? _this4$determineCredP : null;
              if (credTbKeys) {
                _context.next = 25;
                break;
              }
              _this4.setError("Certains éléments du dossier crédit sont introuvables", "Veuillez contacter le support technique");
              return _context.abrupt("return");
            case 25:
              credPubTb1 = _this4.dossier_credit[credTbKeys[1]];
              credPubTb4 = _this4.coming_form == "ARC" ? (_this4$dossier_credit6 = _this4.dossier_credit) === null || _this4$dossier_credit6 === void 0 ? void 0 : _this4$dossier_credit6.cred_pub_tb_49 : _this4.dossier_credit[credTbKeys[4]];
              montant_credit = credPubTb1.montant_credit;
              total_caution_hypothecaires_valeur_considere = credPubTb4.total_caution_hypothecaires_valeur_considere, total_promesse_affectation_hypothecaires_valeur_considere = credPubTb4.total_promesse_affectation_hypothecaires_valeur_considere, total_cautionnement_solidaires_valeur_cautionnement = credPubTb4.total_cautionnement_solidaires_valeur_cautionnement, cautionnement_solidaires = credPubTb4.cautionnement_solidaires, total_gages_valeur_considere = credPubTb4.total_gages_valeur_considere, total_hypotheques_valeur_considere = credPubTb4.total_hypotheques_valeur_considere, total_protection_financieres_valeur_marchande = credPubTb4.total_protection_financieres_valeur_marchande, nantissement_de_fonds_de_commerce_valeur_marchande = credPubTb4.nantissement_de_fonds_de_commerce_valeur_marchande, nantissement_de_stock_valeur_marchande = credPubTb4.nantissement_de_stock_valeur_marchande;
              caution_solidaire = total_cautionnement_solidaires_valeur_cautionnement !== null && total_cautionnement_solidaires_valeur_cautionnement !== void 0 ? total_cautionnement_solidaires_valeur_cautionnement : cautionnement_solidaires === null || cautionnement_solidaires === void 0 ? void 0 : cautionnement_solidaires.reduce(function (t, c) {
                var _c$valeur_cautionneme;
                return t + parseInt(((_c$valeur_cautionneme = c === null || c === void 0 ? void 0 : c.valeur_cautionnement) !== null && _c$valeur_cautionneme !== void 0 ? _c$valeur_cautionneme : 0).toString().replace(/\s/g, ''));
              }, 0);
              depot_de_garantie = _this4.depot_de_garantie;
              _this4.ponderationTotals = {
                montant_credit: montant_credit,
                // 
                caution_hypothecaire: total_caution_hypothecaires_valeur_considere,
                promesse_affectation_hypothecaire: total_promesse_affectation_hypothecaires_valeur_considere,
                // 
                caution_solidaire: caution_solidaire,
                depot_de_garantie: depot_de_garantie,
                // 
                gages: total_gages_valeur_considere,
                hypotheque_ferme: total_hypotheques_valeur_considere,
                protections_financieres_eligibles: total_protection_financieres_valeur_marchande,
                nantissement_de_fonds_de_commerce: nantissement_de_fonds_de_commerce_valeur_marchande,
                nantissement_de_stock: nantissement_de_stock_valeur_marchande
              };

              // Parse Ponderation data 
              ponderations = _this4.ponderations;
              total_montant_brut_sans_ponderation = _this4.calcTotalMontantBrutSansPonderation();
              total_montant_avec_ponderation = _this4.calcTotalMontantAvecPonderation(ponderations);
              ratio_de_couverture = _this4.calcRatioDeCouverture(total_montant_avec_ponderation);
              _this4.lastUpdateTimestamp = new Date().getTime();
              updated_at = new Date();
              _this4.ponderationData = {
                ponderations: ponderations,
                total_montant_avec_ponderation: total_montant_avec_ponderation,
                total_montant_brut_sans_ponderation: total_montant_brut_sans_ponderation,
                ratio_de_couverture: ratio_de_couverture,
                totals: _this4.ponderationTotals,
                updated_at: updated_at.toISOString()
              };
              _context.next = 45;
              break;
            case 41:
              _context.prev = 41;
              _context.t0 = _context["catch"](2);
              _this4.errorMessage = "Une erreur s'est produite";
              _this4.errorHint = "Veuillez contacter le support technique";
            case 45:
              _context.prev = 45;
              _this4.isLoading = false;
              return _context.finish(45);
            case 48:
              try {
                _this4.autosaving();
              } catch (error) {
                // this.$console.log("xx error autosaving", error);
              }
            case 49:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[2, 41, 45, 48]]);
      }))();
    },
    montantBrutSansPonderation: function montantBrutSansPonderation() {
      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref3$slug = _ref3.slug,
        slug = _ref3$slug === void 0 ? null : _ref3$slug;
      if (!this.ponderationTotals) return null;
      if (!slug) return null;
      try {
        var _this$ponderationTota3;
        var value = (_this$ponderationTota3 = this.ponderationTotals[slug]) !== null && _this$ponderationTota3 !== void 0 ? _this$ponderationTota3 : null;
        if (this.valueIsInvalid(value)) return null;
        return parseInt(this.trim(value));
      } catch (error) {
        this.$console.log("xx montantBrutSansPonderation ", slug, error);
        return null;
      }
    },
    montantAvecPonderation: function montantAvecPonderation() {
      var ponderation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      if (!ponderation) return null;
      try {
        var montant = this.montantBrutSansPonderation(ponderation);
        if (this.valueIsInvalid(montant)) return null;
        var result = montant * ((ponderation === null || ponderation === void 0 ? void 0 : ponderation.value) / 100);
        return result === null || result === void 0 ? void 0 : result.toFixed(0);
      } catch (error) {
        this.$console.log("xx montantAvecPonderation ", ponderation === null || ponderation === void 0 ? void 0 : ponderation.slug);
        return null;
      }
    },
    send2Backend: function send2Backend(res) {
      var _this$dossier_credit,
        _this5 = this;
      // // this.$console.log("RentaCred::send2Backend");

      var authcheck = true;
      var user = res.data;
      var authcheckStatus = res.status;
      if (authcheckStatus === 401) {
        // // window.location.href = "/login";
        return;
      }
      if (!user) {
        alert("Unauthenticated");
        return;
      }
      this.$emit("autosaving");
      this.$axios.post(this.ebapisHost + 'creditbuilder/api/v1/autosaving-akey/', {
        cred_pub_key: (_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.cred_pub_key,
        key_name: "tableau_ponderation_arc",
        key: this.ponderationData
      }).then(function (response) {
        _this5.$emit("autosaving");
      })["catch"](function (error) {
        _this5.$Progress.finish();
      });
    },
    setError: function setError(message) {
      var hint = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      this.errorMessage = message;
      this.errorHint = hint;
    },
    trim: function trim(value) {
      var _value$toString;
      return value === null || value === void 0 || (_value$toString = value.toString()) === null || _value$toString === void 0 ? void 0 : _value$toString.replace(/\s/g, '');
    },
    valueIsInvalid: function valueIsInvalid(value) {
      return value == null || value == undefined || value == '' || this.trim(value) == '';
    }
  },
  watch: {
    depot_de_garantie: function depot_de_garantie(_) {
      this.computePonderationTotals();
    },
    dossier_credit: function dossier_credit(val) {
      if (!val) {
        this.errorMessage = "Dossier crédit non défini";
        this.errorHint = "Veuillez contacter un support technique";
        return;
      }
      this.computePonderationTotals();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/filiale/CA4.vue?vue&type=template&id=2a7b2980&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/filiale/CA4.vue?vue&type=template&id=2a7b2980&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var render = function render() {
  var _vm$formDataToBeWatch, _vm$meta_data, _this$meta_data, _vm$meta_data2, _this$meta_data2, _this$meta_data3, _this$meta_data4, _this$meta_data5, _this$meta_data6, _this$meta_data7, _this$meta_data8, _this$meta_data9, _this$meta_data0, _this$meta_data1, _this$meta_data10, _this$meta_data11, _this$meta_data12, _this$meta_data13, _this$meta_data14, _this$meta_data15, _vm$meta_data3, _vm$meta_data4, _vm$meta_data5, _vm$meta_data6, _vm$meta_data7, _vm$meta_data8, _this$meta_data16, _this$meta_data17, _this$meta_data18, _this$meta_data19, _this$meta_data20, _this$meta_data21, _this$meta_data22, _this$meta_data23, _this$meta_data24, _this$meta_data25, _this$meta_data26, _this$meta_data27, _this$meta_data28, _this$meta_data29, _this$meta_data30, _this$meta_data31, _vm$meta_data9, _vm$meta_data0, _vm$meta_data1, _vm$meta_data10, _vm$meta_data11, _vm$meta_data12, _this$meta_data32, _this$meta_data33, _this$meta_data34, _this$meta_data35, _this$meta_data36, _this$meta_data37, _this$meta_data38, _this$meta_data39, _vm$meta_data13, _vm$meta_data14, _vm$meta_data15, _vm$meta_data16, _vm$meta_data17, _vm$meta_data18, _vm$meta_data19, _vm$meta_data20, _vm$meta_data21, _vm$meta_data22, _this$meta_data40, _this$meta_data41, _this$meta_data42, _this$meta_data43, _this$meta_data44, _this$meta_data45, _this$meta_data46, _this$meta_data47, _this$meta_data48, _this$meta_data49, _this$meta_data50, _this$meta_data51, _this$meta_data52, _this$meta_data53, _this$meta_data54, _this$meta_data55, _vm$meta_data23, _vm$meta_data24, _this$meta_data56, _this$meta_data57, _this$meta_data58, _this$meta_data59, _this$meta_data60, _this$meta_data61, _this$meta_data62, _this$meta_data63, _this$meta_data64, _this$meta_data65, _this$meta_data66, _this$meta_data67, _this$meta_data68, _this$meta_data69, _this$meta_data70, _this$meta_data71, _vm$meta_data25, _vm$meta_data26, _vm$formDataToBeWatch2, _vm$meta_data27, _vm$formDataToBeWatch3;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    on: {
      contextmenu: function contextmenu($event) {
        return _vm.$refs.menu.open($event, _vm.tb_name);
      }
    }
  }, [_c("div", {
    staticClass: "row bg-light card-width-height"
  }, [_c("ContextMenu", {
    ref: "menu",
    attrs: {
      cred_pub_key: _vm.meta_parseable.cred_pub_key,
      id: _vm.tb_name,
      contextList: _vm.contextList
    }
  }), _vm._v(" "), _vm.seen === true ? _c("div", {
    staticClass: "card card-width-height"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc pb-0 pt-2"
  }, [_c("h6", {
    ref: "topdiv",
    staticClass: "head",
    attrs: {
      id: "ca4-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Sûretés proposées et garanties\n                        ")]), _vm._v(" "), _c("div", {
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
  })], 1)])])]), _vm._v(" "), ["Crédit conso"].includes((_vm$meta_data = _vm.meta_data) === null || _vm$meta_data === void 0 || (_vm$meta_data = _vm$meta_data.dossier_credit) === null || _vm$meta_data === void 0 ? void 0 : _vm$meta_data.applied_templ_name) ? _c("div", [(_this$meta_data = this.meta_data) !== null && _this$meta_data !== void 0 && (_this$meta_data = _this$meta_data.dossier_credit) !== null && _this$meta_data !== void 0 && _this$meta_data.tbs_in_use.includes("tb7004") ? _c("div", {
    staticClass: "card-body table-responsive"
  }, [_c("div", {
    staticClass: "fw-bold text-center"
  }, [_vm._v("\n                            Garanties supports porposés par le CAF\n                        ")]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered garantie_supports"
  }, [_vm._m(0), _vm._v(" "), _c("tbody", {
    staticStyle: {
      "font-size": "16px"
    }
  }, _vm._l((_vm$meta_data2 = _vm.meta_data) === null || _vm$meta_data2 === void 0 || (_vm$meta_data2 = _vm$meta_data2.dossier_credit) === null || _vm$meta_data2 === void 0 || (_vm$meta_data2 = _vm$meta_data2.cred_pub_tb_7004) === null || _vm$meta_data2 === void 0 ? void 0 : _vm$meta_data2.garantie_supports, function (garantie_support, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_c("label", {
      staticClass: "form-check-label"
    }, [_vm._v("\n                                        " + _vm._s(garantie_support === null || garantie_support === void 0 ? void 0 : garantie_support.label) + "\n                                    ")])]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: garantie_support.value,
        expression: "garantie_support.value"
      }],
      staticClass: "form-check-input",
      staticStyle: {
        width: "20px",
        height: "20px"
      },
      attrs: {
        type: "checkbox",
        disabled: ""
      },
      domProps: {
        checked: Array.isArray(garantie_support.value) ? _vm._i(garantie_support.value, null) > -1 : garantie_support.value
      },
      on: {
        change: function change($event) {
          var $$a = garantie_support.value,
            $$el = $event.target,
            $$c = $$el.checked ? true : false;
          if (Array.isArray($$a)) {
            var $$v = null,
              $$i = _vm._i($$a, $$v);
            if ($$el.checked) {
              $$i < 0 && _vm.$set(garantie_support, "value", $$a.concat([$$v]));
            } else {
              $$i > -1 && _vm.$set(garantie_support, "value", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
            }
          } else {
            _vm.$set(garantie_support, "value", $$c);
          }
        }
      }
    })]), _vm._v(" "), _c("td", [_vm._v("\n                                    " + _vm._s(garantie_support.commentaire) + "\n                                ")])]);
  }), 0)])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "col-md-12 mt-0 mb-4"
  }, [_vm._m(1), _vm._v(" "), _c("vue-editor", {
    attrs: {
      id: "comment_garantie_supports"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.comment_garantie_supports,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "comment_garantie_supports", $$v);
      },
      expression: "formDataToBeWatched.comment_garantie_supports\n                            "
    }
  })], 1)]), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "table-responsive card-body"
  }, [_c("div", {
    staticClass: "fw-bold text-center"
  }, [_vm._v("\n                            Garanties renseignés par le ARC\n                        ")]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered garantie_supports"
  }, [_c("tr", [_c("th", {
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      colspan: "",
      scope: "row"
    }
  }), _vm._v(" "), _c("th", {
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      colspan: "",
      scope: "row"
    }
  }), _vm._v(" "), _c("th", {
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      colspan: "",
      scope: "row"
    }
  }), _vm._v(" "), _c("th", {
    staticStyle: {
      "padding-left": "5px"
    }
  }, [_c("button", {
    staticStyle: {
      "background-color": "#2c3e50",
      color: "#ffffff",
      "border-radius": "15%",
      border: "none",
      "font-size": "12px"
    },
    attrs: {
      type: "button",
      title: "Ajouter"
    },
    on: {
      click: function click($event) {
        return _vm.add_garntie_support();
      }
    }
  }, [_c("plus-icon", {
    staticClass: "custom-class",
    attrs: {
      size: "19"
    }
  })], 1)])]), _vm._v(" "), _c("tbody", _vm._l(_vm.garantie_supports, function (garantie_support, index) {
    return _c("tr", {
      key: index
    }, [index < 5 ? _c("td", [_c("label", {
      staticClass: "form-check-label"
    }, [_vm._v("\n                                        " + _vm._s(garantie_support === null || garantie_support === void 0 ? void 0 : garantie_support.label) + "\n                                    ")])]) : _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: garantie_support.label,
        expression: "garantie_support.label\n                                            ",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control",
      staticStyle: {
        border: "0px",
        width: "250px"
      },
      attrs: {
        type: "text"
      },
      domProps: {
        value: garantie_support.label
      },
      on: {
        input: _vm.handleInput,
        change: function change($event) {
          return _vm.$set(garantie_support, "label", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: garantie_support.value,
        expression: "garantie_support.value",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-check-input",
      staticStyle: {
        width: "20px",
        height: "20px"
      },
      attrs: {
        type: "checkbox"
      },
      domProps: {
        checked: Array.isArray(garantie_support.value) ? _vm._i(garantie_support.value, null) > -1 : garantie_support.value
      },
      on: {
        change: [function ($event) {
          var $$a = garantie_support.value,
            $$el = $event.target,
            $$c = $$el.checked ? true : false;
          if (Array.isArray($$a)) {
            var $$v = null,
              $$i = _vm._i($$a, $$v);
            if ($$el.checked) {
              $$i < 0 && _vm.$set(garantie_support, "value", $$a.concat([$$v]));
            } else {
              $$i > -1 && _vm.$set(garantie_support, "value", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
            }
          } else {
            _vm.$set(garantie_support, "value", $$c);
          }
        }, _vm.handleInput]
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: garantie_support.commentaire,
        expression: "garantie_support.commentaire"
      }],
      staticClass: "form-control",
      staticStyle: {
        width: "250px"
      },
      attrs: {
        id: "commentaire" + index,
        rows: "1",
        disabled: !garantie_support.value
      },
      domProps: {
        value: garantie_support.commentaire
      },
      on: {
        change: _vm.handleInput,
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(garantie_support, "commentaire", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("button", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: index > 4,
        expression: "index > 4"
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
          return _vm.remove_garntie_support(index);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)])]);
  }), 0)])])]) : _c("div", {}, [_vm.seen1 === true ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        return _vm.retract1();
      }
    }
  }, [_c("h6", {
    "class": "subdiv" + this.tb_name,
    attrs: {
      id: "hypothèques"
    }
  }, [_vm._v("\n                            Hypothèques\n                            "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)]), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "row px-3"
  }, [(_this$meta_data2 = this.meta_data) !== null && _this$meta_data2 !== void 0 && (_this$meta_data2 = _this$meta_data2.dossier_credit) !== null && _this$meta_data2 !== void 0 && _this$meta_data2.tbs_in_use.includes("tb4") || (_this$meta_data3 = this.meta_data) !== null && _this$meta_data3 !== void 0 && (_this$meta_data3 = _this$meta_data3.dossier_credit) !== null && _this$meta_data3 !== void 0 && _this$meta_data3.tbs_in_use.includes("tb7004") || (_this$meta_data4 = this.meta_data) !== null && _this$meta_data4 !== void 0 && (_this$meta_data4 = _this$meta_data4.dossier_credit) !== null && _this$meta_data4 !== void 0 && _this$meta_data4.tbs_in_use.includes("tb8004") || (_this$meta_data5 = this.meta_data) !== null && _this$meta_data5 !== void 0 && (_this$meta_data5 = _this$meta_data5.dossier_credit) !== null && _this$meta_data5 !== void 0 && _this$meta_data5.tbs_in_use.includes("tb9004") || (_this$meta_data6 = this.meta_data) !== null && _this$meta_data6 !== void 0 && (_this$meta_data6 = _this$meta_data6.dossier_credit) !== null && _this$meta_data6 !== void 0 && _this$meta_data6.tbs_in_use.includes("tb13004") || (_this$meta_data7 = this.meta_data) !== null && _this$meta_data7 !== void 0 && (_this$meta_data7 = _this$meta_data7.dossier_credit) !== null && _this$meta_data7 !== void 0 && _this$meta_data7.tbs_in_use.includes("tb15004") || (_this$meta_data8 = this.meta_data) !== null && _this$meta_data8 !== void 0 && (_this$meta_data8 = _this$meta_data8.dossier_credit) !== null && _this$meta_data8 !== void 0 && _this$meta_data8.tbs_in_use.includes("tb16004") || (_this$meta_data9 = this.meta_data) !== null && _this$meta_data9 !== void 0 && (_this$meta_data9 = _this$meta_data9.dossier_credit) !== null && _this$meta_data9 !== void 0 && _this$meta_data9.tbs_in_use.includes("tb16104") ? _c("div", {
    staticClass: "fw-bold text-center"
  }, [_vm._v("\n                            Hypothèques renseignés par le CAF\n                        ")]) : _vm._e(), _vm._v(" "), (_this$meta_data0 = this.meta_data) !== null && _this$meta_data0 !== void 0 && (_this$meta_data0 = _this$meta_data0.dossier_credit) !== null && _this$meta_data0 !== void 0 && _this$meta_data0.tbs_in_use.includes("tb4") || (_this$meta_data1 = this.meta_data) !== null && _this$meta_data1 !== void 0 && (_this$meta_data1 = _this$meta_data1.dossier_credit) !== null && _this$meta_data1 !== void 0 && _this$meta_data1.tbs_in_use.includes("tb7004") || (_this$meta_data10 = this.meta_data) !== null && _this$meta_data10 !== void 0 && (_this$meta_data10 = _this$meta_data10.dossier_credit) !== null && _this$meta_data10 !== void 0 && _this$meta_data10.tbs_in_use.includes("tb8004") || (_this$meta_data11 = this.meta_data) !== null && _this$meta_data11 !== void 0 && (_this$meta_data11 = _this$meta_data11.dossier_credit) !== null && _this$meta_data11 !== void 0 && _this$meta_data11.tbs_in_use.includes("tb9004") || (_this$meta_data12 = this.meta_data) !== null && _this$meta_data12 !== void 0 && (_this$meta_data12 = _this$meta_data12.dossier_credit) !== null && _this$meta_data12 !== void 0 && _this$meta_data12.tbs_in_use.includes("tb13004") || (_this$meta_data13 = this.meta_data) !== null && _this$meta_data13 !== void 0 && (_this$meta_data13 = _this$meta_data13.dossier_credit) !== null && _this$meta_data13 !== void 0 && _this$meta_data13.tbs_in_use.includes("tb15004") || (_this$meta_data14 = this.meta_data) !== null && _this$meta_data14 !== void 0 && (_this$meta_data14 = _this$meta_data14.dossier_credit) !== null && _this$meta_data14 !== void 0 && _this$meta_data14.tbs_in_use.includes("tb16004") || (_this$meta_data15 = this.meta_data) !== null && _this$meta_data15 !== void 0 && (_this$meta_data15 = _this$meta_data15.dossier_credit) !== null && _this$meta_data15 !== void 0 && _this$meta_data15.tbs_in_use.includes("tb16104") ? _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-borderless"
  }, [_vm._m(2), _vm._v(" "), _c("tbody", [_vm._l((_vm$meta_data3 = _vm.meta_data) === null || _vm$meta_data3 === void 0 || (_vm$meta_data3 = _vm$meta_data3.dossier_credit) === null || _vm$meta_data3 === void 0 || (_vm$meta_data3 = _vm$meta_data3[this.determineCredPubTables((_vm$meta_data4 = _vm.meta_data) === null || _vm$meta_data4 === void 0 || (_vm$meta_data4 = _vm$meta_data4.dossier_credit) === null || _vm$meta_data4 === void 0 ? void 0 : _vm$meta_data4.applied_templ_name)[4]]) === null || _vm$meta_data3 === void 0 ? void 0 : _vm$meta_data3["hypotheques"], function (hypo_du_caf, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_vm._v("\n                                            " + _vm._s(index + 1) + ".\n                                        ")]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: hypo_du_caf.bien_hypotheque,
        expression: "hypo_du_caf.bien_hypotheque",
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
        value: hypo_du_caf.bien_hypotheque
      },
      on: {
        change: function change($event) {
          return _vm.$set(hypo_du_caf, "bien_hypotheque", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: hypo_du_caf.proprietaire,
        expression: "hypo_du_caf.proprietaire",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control",
      attrs: {
        required: "",
        type: "text",
        disabled: ""
      },
      domProps: {
        value: hypo_du_caf.proprietaire
      },
      on: {
        change: function change($event) {
          return _vm.$set(hypo_du_caf, "proprietaire", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: hypo_du_caf.annee_achat,
        expression: "hypo_du_caf.annee_achat",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control",
      attrs: {
        required: "",
        type: "date",
        disabled: ""
      },
      domProps: {
        value: hypo_du_caf.annee_achat
      },
      on: {
        change: function change($event) {
          return _vm.$set(hypo_du_caf, "annee_achat", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: hypo_du_caf.adresse_emplacement,
        expression: "hypo_du_caf.adresse_emplacement",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control",
      attrs: {
        required: "",
        type: "text",
        disabled: ""
      },
      domProps: {
        value: hypo_du_caf.adresse_emplacement
      },
      on: {
        change: function change($event) {
          return _vm.$set(hypo_du_caf, "adresse_emplacement", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: hypo_du_caf.longitude,
        expression: "hypo_du_caf.longitude",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control",
      attrs: {
        required: "",
        type: "text",
        disabled: ""
      },
      domProps: {
        value: hypo_du_caf.longitude
      },
      on: {
        change: function change($event) {
          return _vm.$set(hypo_du_caf, "longitude", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: hypo_du_caf.lattitude,
        expression: "hypo_du_caf.lattitude",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control",
      attrs: {
        required: "",
        type: "text",
        disabled: ""
      },
      domProps: {
        value: hypo_du_caf.lattitude
      },
      on: {
        change: function change($event) {
          return _vm.$set(hypo_du_caf, "lattitude", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: hypo_du_caf.date_evaluation,
        expression: "hypo_du_caf.date_evaluation",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control",
      attrs: {
        required: "",
        type: "date",
        disabled: ""
      },
      domProps: {
        value: hypo_du_caf.date_evaluation
      },
      on: {
        change: function change($event) {
          return _vm.$set(hypo_du_caf, "date_evaluation", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("currency-input", {
      staticClass: "form-control",
      attrs: {
        type: "text",
        disabled: ""
      },
      model: {
        value: hypo_du_caf.valeur_marchande,
        callback: function callback($$v) {
          _vm.$set(hypo_du_caf, "valeur_marchande", $$v);
        },
        expression: "hypo_du_caf.valeur_marchande"
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
      staticClass: "form-control",
      attrs: {
        type: "text",
        disabled: ""
      },
      model: {
        value: hypo_du_caf.valeur_considere,
        callback: function callback($$v) {
          _vm.$set(hypo_du_caf, "valeur_considere", $$v);
        },
        expression: "hypo_du_caf.valeur_considere"
      }
    })], 1)]);
  }), _vm._v(" "), _c("tr", [_vm._m(3), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      readonly: "",
      "default-typing": false,
      value: (_vm$meta_data5 = _vm.meta_data) === null || _vm$meta_data5 === void 0 || (_vm$meta_data5 = _vm$meta_data5.dossier_credit) === null || _vm$meta_data5 === void 0 || (_vm$meta_data5 = _vm$meta_data5[this.determineCredPubTables((_vm$meta_data6 = _vm.meta_data) === null || _vm$meta_data6 === void 0 || (_vm$meta_data6 = _vm$meta_data6.dossier_credit) === null || _vm$meta_data6 === void 0 ? void 0 : _vm$meta_data6.applied_templ_name)[4]]) === null || _vm$meta_data5 === void 0 ? void 0 : _vm$meta_data5["total_hypotheques_valeur_marchande"]
    }
  })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      readonly: "",
      "default-typing": false,
      value: (_vm$meta_data7 = _vm.meta_data) === null || _vm$meta_data7 === void 0 || (_vm$meta_data7 = _vm$meta_data7.dossier_credit) === null || _vm$meta_data7 === void 0 || (_vm$meta_data7 = _vm$meta_data7[this.determineCredPubTables((_vm$meta_data8 = _vm.meta_data) === null || _vm$meta_data8 === void 0 || (_vm$meta_data8 = _vm$meta_data8.dossier_credit) === null || _vm$meta_data8 === void 0 ? void 0 : _vm$meta_data8.applied_templ_name)[4]]) === null || _vm$meta_data7 === void 0 ? void 0 : _vm$meta_data7["total_hypotheques_valeur_considere"]
    }
  })], 1)])], 2)])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "fw-bold mt-4 text-center"
  }, [_vm._v("\n                            Hypothèques renseignés par l'ARC\n                        ")]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-borderless"
  }, [_vm._m(4), _vm._v(" "), _c("tbody", [_vm._l(_vm.hypotheques_analyste, function (hypotheque_ana, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_vm._v("\n                                            " + _vm._s(index + 1) + ".\n                                        ")]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: hypotheque_ana.bien_hypotheque,
        expression: "hypotheque_ana.bien_hypotheque",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control input-box",
      attrs: {
        required: "",
        type: "text"
      },
      domProps: {
        value: hypotheque_ana.bien_hypotheque
      },
      on: {
        change: [function ($event) {
          return _vm.$set(hypotheque_ana, "bien_hypotheque", $event.target.value);
        }, _vm.handleInput]
      }
    })]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: hypotheque_ana.proprietaire,
        expression: "hypotheque_ana.proprietaire",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control input-box",
      attrs: {
        required: "",
        type: "text"
      },
      domProps: {
        value: hypotheque_ana.proprietaire
      },
      on: {
        change: [function ($event) {
          return _vm.$set(hypotheque_ana, "proprietaire", $event.target.value);
        }, _vm.handleInput]
      }
    })]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: hypotheque_ana.annee_achat,
        expression: "hypotheque_ana.annee_achat",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control input-box",
      attrs: {
        required: "",
        type: "date"
      },
      domProps: {
        value: hypotheque_ana.annee_achat
      },
      on: {
        change: [function ($event) {
          return _vm.$set(hypotheque_ana, "annee_achat", $event.target.value);
        }, _vm.handleInput]
      }
    })]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: hypotheque_ana.adresse_emplacement,
        expression: "hypotheque_ana.adresse_emplacement",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control input-box",
      attrs: {
        required: "",
        type: "text"
      },
      domProps: {
        value: hypotheque_ana.adresse_emplacement
      },
      on: {
        change: [function ($event) {
          return _vm.$set(hypotheque_ana, "adresse_emplacement", $event.target.value);
        }, _vm.handleInput]
      }
    })]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: hypotheque_ana.longitude,
        expression: "hypotheque_ana.longitude",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control input-box",
      attrs: {
        required: "",
        type: "text"
      },
      domProps: {
        value: hypotheque_ana.longitude
      },
      on: {
        change: [function ($event) {
          return _vm.$set(hypotheque_ana, "longitude", $event.target.value);
        }, _vm.handleInput]
      }
    })]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: hypotheque_ana.lattitude,
        expression: "hypotheque_ana.lattitude",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control input-box",
      attrs: {
        required: "",
        type: "text"
      },
      domProps: {
        value: hypotheque_ana.lattitude
      },
      on: {
        change: [function ($event) {
          return _vm.$set(hypotheque_ana, "lattitude", $event.target.value);
        }, _vm.handleInput]
      }
    })]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: hypotheque_ana.date_evaluation,
        expression: "hypotheque_ana.date_evaluation",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control input-box",
      attrs: {
        required: "",
        type: "date"
      },
      domProps: {
        value: hypotheque_ana.date_evaluation
      },
      on: {
        change: [function ($event) {
          return _vm.$set(hypotheque_ana, "date_evaluation", $event.target.value);
        }, _vm.handleInput]
      }
    })]), _vm._v(" "), _c("td", [_c("currency-input", {
      staticClass: "form-control input-box",
      attrs: {
        "default-typing": false,
        type: "text"
      },
      on: {
        input: _vm.handleInput
      },
      model: {
        value: hypotheque_ana.valeur_marchande,
        callback: function callback($$v) {
          _vm.$set(hypotheque_ana, "valeur_marchande", $$v);
        },
        expression: "hypotheque_ana.valeur_marchande"
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
      staticClass: "form-control input-box",
      attrs: {
        "default-typing": false,
        type: "text"
      },
      on: {
        input: _vm.handleInput
      },
      model: {
        value: hypotheque_ana.valeur_considere,
        callback: function callback($$v) {
          _vm.$set(hypotheque_ana, "valeur_considere", $$v);
        },
        expression: "hypotheque_ana.valeur_considere"
      }
    })], 1), _vm._v(" "), index == 0 ? _c("td", [_c("button", {
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
        border: "none"
      },
      attrs: {
        type: "button",
        title: "Ajouter une nouvelle garantie"
      },
      on: {
        click: function click($event) {
          return _vm.addMoreHypotheque();
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
          return _vm.removeHypotheque(index);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)])]);
  }), _vm._v(" "), _c("tr", [_vm._m(5), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      readonly: "",
      "default-typing": false
    },
    on: {
      input: _vm.handleInput
    },
    model: {
      value: _vm.formDataToBeWatched.total_hypotheques_valeur_marchande,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "total_hypotheques_valeur_marchande", $$v);
      },
      expression: "formDataToBeWatched.total_hypotheques_valeur_marchande"
    }
  })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      readonly: "",
      "default-typing": false
    },
    on: {
      input: _vm.handleInput
    },
    model: {
      value: _vm.formDataToBeWatched.total_hypotheques_valeur_considere,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "total_hypotheques_valeur_considere", $$v);
      },
      expression: "formDataToBeWatched.total_hypotheques_valeur_considere"
    }
  })], 1)])], 2)])])])]) : _c("div", [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        return _vm.retract1();
      }
    }
  }, [_c("h6", {
    attrs: {
      id: "hypothèques"
    }
  }, [_vm._v("\n                                Hypothèques\n                                "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])])]), _vm._v(" "), _vm.seen2 === true ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        return _vm.retract2();
      }
    }
  }, [_c("h6", {
    "class": "subdiv" + this.tb_name,
    attrs: {
      id: "gages"
    }
  }, [_vm._v("\n                            Gages\n                            "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)]), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "row px-3"
  }, [(_this$meta_data16 = this.meta_data) !== null && _this$meta_data16 !== void 0 && (_this$meta_data16 = _this$meta_data16.dossier_credit) !== null && _this$meta_data16 !== void 0 && _this$meta_data16.tbs_in_use.includes("tb4") || (_this$meta_data17 = this.meta_data) !== null && _this$meta_data17 !== void 0 && (_this$meta_data17 = _this$meta_data17.dossier_credit) !== null && _this$meta_data17 !== void 0 && _this$meta_data17.tbs_in_use.includes("tb7004") || (_this$meta_data18 = this.meta_data) !== null && _this$meta_data18 !== void 0 && (_this$meta_data18 = _this$meta_data18.dossier_credit) !== null && _this$meta_data18 !== void 0 && _this$meta_data18.tbs_in_use.includes("tb8004") || (_this$meta_data19 = this.meta_data) !== null && _this$meta_data19 !== void 0 && (_this$meta_data19 = _this$meta_data19.dossier_credit) !== null && _this$meta_data19 !== void 0 && _this$meta_data19.tbs_in_use.includes("tb9004") || (_this$meta_data20 = this.meta_data) !== null && _this$meta_data20 !== void 0 && (_this$meta_data20 = _this$meta_data20.dossier_credit) !== null && _this$meta_data20 !== void 0 && _this$meta_data20.tbs_in_use.includes("tb13004") || (_this$meta_data21 = this.meta_data) !== null && _this$meta_data21 !== void 0 && (_this$meta_data21 = _this$meta_data21.dossier_credit) !== null && _this$meta_data21 !== void 0 && _this$meta_data21.tbs_in_use.includes("tb15004") || (_this$meta_data22 = this.meta_data) !== null && _this$meta_data22 !== void 0 && (_this$meta_data22 = _this$meta_data22.dossier_credit) !== null && _this$meta_data22 !== void 0 && _this$meta_data22.tbs_in_use.includes("tb16004") || (_this$meta_data23 = this.meta_data) !== null && _this$meta_data23 !== void 0 && (_this$meta_data23 = _this$meta_data23.dossier_credit) !== null && _this$meta_data23 !== void 0 && _this$meta_data23.tbs_in_use.includes("tb16104") ? _c("div", {
    staticClass: "fw-bold text-center"
  }, [_vm._v("\n                            Gages renseignés par le CAF\n                        ")]) : _vm._e(), _vm._v(" "), (_this$meta_data24 = this.meta_data) !== null && _this$meta_data24 !== void 0 && (_this$meta_data24 = _this$meta_data24.dossier_credit) !== null && _this$meta_data24 !== void 0 && _this$meta_data24.tbs_in_use.includes("tb4") || (_this$meta_data25 = this.meta_data) !== null && _this$meta_data25 !== void 0 && (_this$meta_data25 = _this$meta_data25.dossier_credit) !== null && _this$meta_data25 !== void 0 && _this$meta_data25.tbs_in_use.includes("tb7004") || (_this$meta_data26 = this.meta_data) !== null && _this$meta_data26 !== void 0 && (_this$meta_data26 = _this$meta_data26.dossier_credit) !== null && _this$meta_data26 !== void 0 && _this$meta_data26.tbs_in_use.includes("tb8004") || (_this$meta_data27 = this.meta_data) !== null && _this$meta_data27 !== void 0 && (_this$meta_data27 = _this$meta_data27.dossier_credit) !== null && _this$meta_data27 !== void 0 && _this$meta_data27.tbs_in_use.includes("tb9004") || (_this$meta_data28 = this.meta_data) !== null && _this$meta_data28 !== void 0 && (_this$meta_data28 = _this$meta_data28.dossier_credit) !== null && _this$meta_data28 !== void 0 && _this$meta_data28.tbs_in_use.includes("tb13004") || (_this$meta_data29 = this.meta_data) !== null && _this$meta_data29 !== void 0 && (_this$meta_data29 = _this$meta_data29.dossier_credit) !== null && _this$meta_data29 !== void 0 && _this$meta_data29.tbs_in_use.includes("tb15004") || (_this$meta_data30 = this.meta_data) !== null && _this$meta_data30 !== void 0 && (_this$meta_data30 = _this$meta_data30.dossier_credit) !== null && _this$meta_data30 !== void 0 && _this$meta_data30.tbs_in_use.includes("tb16004") || (_this$meta_data31 = this.meta_data) !== null && _this$meta_data31 !== void 0 && (_this$meta_data31 = _this$meta_data31.dossier_credit) !== null && _this$meta_data31 !== void 0 && _this$meta_data31.tbs_in_use.includes("tb16104") ? _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-borderless"
  }, [_vm._m(6), _vm._v(" "), _c("tbody", [_vm._l((_vm$meta_data9 = _vm.meta_data) === null || _vm$meta_data9 === void 0 || (_vm$meta_data9 = _vm$meta_data9.dossier_credit) === null || _vm$meta_data9 === void 0 || (_vm$meta_data9 = _vm$meta_data9[this.determineCredPubTables((_vm$meta_data0 = _vm.meta_data) === null || _vm$meta_data0 === void 0 || (_vm$meta_data0 = _vm$meta_data0.dossier_credit) === null || _vm$meta_data0 === void 0 ? void 0 : _vm$meta_data0.applied_templ_name)[4]]) === null || _vm$meta_data9 === void 0 ? void 0 : _vm$meta_data9["gages"], function (gage, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_vm._v(" " + _vm._s(index + 1) + ". ")]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: gage.bien_a_gage,
        expression: "gage.bien_a_gage",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control",
      attrs: {
        disabled: "",
        type: "text"
      },
      domProps: {
        value: gage.bien_a_gage
      },
      on: {
        change: function change($event) {
          return _vm.$set(gage, "bien_a_gage", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: gage.proprietaire,
        expression: "gage.proprietaire",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control",
      attrs: {
        disabled: "",
        type: "text"
      },
      domProps: {
        value: gage.proprietaire
      },
      on: {
        change: function change($event) {
          return _vm.$set(gage, "proprietaire", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: gage.numero_tel,
        expression: "gage.numero_tel",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control",
      attrs: {
        disabled: "",
        type: "text"
      },
      domProps: {
        value: gage.numero_tel
      },
      on: {
        change: function change($event) {
          return _vm.$set(gage, "numero_tel", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: gage.annee_achat,
        expression: "gage.annee_achat",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control",
      attrs: {
        disabled: "",
        type: "date"
      },
      domProps: {
        value: gage.annee_achat
      },
      on: {
        change: function change($event) {
          return _vm.$set(gage, "annee_achat", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: gage.adresse_emplacement,
        expression: "gage.adresse_emplacement",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control",
      attrs: {
        disabled: "",
        type: "text"
      },
      domProps: {
        value: gage.adresse_emplacement
      },
      on: {
        change: function change($event) {
          return _vm.$set(gage, "adresse_emplacement", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: gage.date_evaluation,
        expression: "gage.date_evaluation",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control",
      attrs: {
        disabled: "",
        type: "date"
      },
      domProps: {
        value: gage.date_evaluation
      },
      on: {
        change: function change($event) {
          return _vm.$set(gage, "date_evaluation", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("currency-input", {
      staticClass: "form-control",
      attrs: {
        "default-typing": false,
        type: "text"
      },
      model: {
        value: gage.valeur_marchande,
        callback: function callback($$v) {
          _vm.$set(gage, "valeur_marchande", $$v);
        },
        expression: "gage.valeur_marchande"
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
      staticClass: "form-control",
      attrs: {
        "default-typing": false,
        type: "text",
        disabled: ""
      },
      model: {
        value: gage.valeur_considere,
        callback: function callback($$v) {
          _vm.$set(gage, "valeur_considere", $$v);
        },
        expression: "gage.valeur_considere"
      }
    })], 1)]);
  }), _vm._v(" "), _c("tr", [_vm._m(7), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      readonly: "",
      "default-typing": false,
      value: (_vm$meta_data1 = _vm.meta_data) === null || _vm$meta_data1 === void 0 || (_vm$meta_data1 = _vm$meta_data1.dossier_credit) === null || _vm$meta_data1 === void 0 || (_vm$meta_data1 = _vm$meta_data1[this.determineCredPubTables((_vm$meta_data10 = _vm.meta_data) === null || _vm$meta_data10 === void 0 || (_vm$meta_data10 = _vm$meta_data10.dossier_credit) === null || _vm$meta_data10 === void 0 ? void 0 : _vm$meta_data10.applied_templ_name)[4]]) === null || _vm$meta_data1 === void 0 ? void 0 : _vm$meta_data1["total_gages_valeur_marchande"]
    },
    on: {
      input: _vm.handleInput
    }
  })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      readonly: "",
      "default-typing": false,
      value: (_vm$meta_data11 = _vm.meta_data) === null || _vm$meta_data11 === void 0 || (_vm$meta_data11 = _vm$meta_data11.dossier_credit) === null || _vm$meta_data11 === void 0 || (_vm$meta_data11 = _vm$meta_data11[this.determineCredPubTables((_vm$meta_data12 = _vm.meta_data) === null || _vm$meta_data12 === void 0 || (_vm$meta_data12 = _vm$meta_data12.dossier_credit) === null || _vm$meta_data12 === void 0 ? void 0 : _vm$meta_data12.applied_templ_name)[4]]) === null || _vm$meta_data11 === void 0 ? void 0 : _vm$meta_data11["total_gages_valeur_considere"]
    },
    on: {
      input: _vm.handleInput
    }
  })], 1)])], 2)])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "fw-bold text-center"
  }, [_vm._v("\n                            Gages renseignés par l'ARC\n                        ")]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table mt-4 table-borderless"
  }, [_vm._m(8), _vm._v(" "), _c("tbody", [_vm._l(_vm.gages_analyste, function (gage, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_vm._v(" " + _vm._s(index + 1) + ". ")]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: gage.bien_a_gage,
        expression: "gage.bien_a_gage",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control input-box",
      attrs: {
        required: "",
        type: "text"
      },
      domProps: {
        value: gage.bien_a_gage
      },
      on: {
        change: [function ($event) {
          return _vm.$set(gage, "bien_a_gage", $event.target.value);
        }, _vm.handleInput]
      }
    })]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: gage.proprietaire,
        expression: "gage.proprietaire",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control input-box",
      attrs: {
        required: "",
        type: "text"
      },
      domProps: {
        value: gage.proprietaire
      },
      on: {
        change: [function ($event) {
          return _vm.$set(gage, "proprietaire", $event.target.value);
        }, _vm.handleInput]
      }
    })]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: gage.numero_tel,
        expression: "gage.numero_tel",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control input-box",
      attrs: {
        required: "",
        type: "text"
      },
      domProps: {
        value: gage.numero_tel
      },
      on: {
        change: [function ($event) {
          return _vm.$set(gage, "numero_tel", $event.target.value);
        }, _vm.handleInput]
      }
    })]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: gage.annee_achat,
        expression: "gage.annee_achat",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control input-box",
      attrs: {
        required: "",
        type: "date"
      },
      domProps: {
        value: gage.annee_achat
      },
      on: {
        change: [function ($event) {
          return _vm.$set(gage, "annee_achat", $event.target.value);
        }, _vm.handleInput]
      }
    })]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: gage.adresse_emplacement,
        expression: "gage.adresse_emplacement",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control input-box",
      attrs: {
        required: "",
        type: "text"
      },
      domProps: {
        value: gage.adresse_emplacement
      },
      on: {
        change: [function ($event) {
          return _vm.$set(gage, "adresse_emplacement", $event.target.value);
        }, _vm.handleInput]
      }
    })]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: gage.date_evaluation,
        expression: "gage.date_evaluation",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control input-box",
      attrs: {
        required: "",
        type: "date"
      },
      domProps: {
        value: gage.date_evaluation
      },
      on: {
        change: [function ($event) {
          return _vm.$set(gage, "date_evaluation", $event.target.value);
        }, _vm.handleInput]
      }
    })]), _vm._v(" "), _c("td", [_c("currency-input", {
      staticClass: "form-control input-box",
      attrs: {
        "default-typing": false,
        type: "text"
      },
      on: {
        input: _vm.handleInput
      },
      model: {
        value: gage.valeur_marchande,
        callback: function callback($$v) {
          _vm.$set(gage, "valeur_marchande", $$v);
        },
        expression: "gage.valeur_marchande"
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
      staticClass: "form-control input-box",
      attrs: {
        "default-typing": false,
        type: "text"
      },
      on: {
        input: _vm.handleInput
      },
      model: {
        value: gage.valeur_considere,
        callback: function callback($$v) {
          _vm.$set(gage, "valeur_considere", $$v);
        },
        expression: "gage.valeur_considere"
      }
    })], 1), _vm._v(" "), index == 0 ? _c("td", [_c("button", {
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
        border: "none"
      },
      attrs: {
        type: "button",
        title: "Ajouter une nouvelle garantie"
      },
      on: {
        click: function click($event) {
          return _vm.addMoreGage();
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
          return _vm.removeGage(index);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)])]);
  }), _vm._v(" "), _c("tr", [_vm._m(9), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      readonly: "",
      "default-typing": false
    },
    on: {
      input: _vm.handleInput
    },
    model: {
      value: _vm.formDataToBeWatched.total_gages_valeur_marchande,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "total_gages_valeur_marchande", $$v);
      },
      expression: "formDataToBeWatched.total_gages_valeur_marchande"
    }
  })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      readonly: "",
      "default-typing": false
    },
    on: {
      input: _vm.handleInput
    },
    model: {
      value: _vm.formDataToBeWatched.total_gages_valeur_considere,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "total_gages_valeur_considere", $$v);
      },
      expression: "formDataToBeWatched.total_gages_valeur_considere"
    }
  })], 1)])], 2)])])])]) : _c("div", [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        return _vm.retract2();
      }
    }
  }, [_c("h6", {
    attrs: {
      id: "gages"
    }
  }, [_vm._v("\n                                Gages\n                                "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])])]), _vm._v(" "), _vm.seen3 === true ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header mb-3",
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        return _vm.retract3();
      }
    }
  }, [_c("h6", {
    "class": "subdiv" + this.tb_name,
    attrs: {
      id: "sûretés-diverses"
    }
  }, [_vm._v("\n                            Sûretés diverses\n                            "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "row px-3"
  }, [(_this$meta_data32 = this.meta_data) !== null && _this$meta_data32 !== void 0 && (_this$meta_data32 = _this$meta_data32.dossier_credit) !== null && _this$meta_data32 !== void 0 && _this$meta_data32.tbs_in_use.includes("tb4") || (_this$meta_data33 = this.meta_data) !== null && _this$meta_data33 !== void 0 && (_this$meta_data33 = _this$meta_data33.dossier_credit) !== null && _this$meta_data33 !== void 0 && _this$meta_data33.tbs_in_use.includes("tb7004") || (_this$meta_data34 = this.meta_data) !== null && _this$meta_data34 !== void 0 && (_this$meta_data34 = _this$meta_data34.dossier_credit) !== null && _this$meta_data34 !== void 0 && _this$meta_data34.tbs_in_use.includes("tb8004") || (_this$meta_data35 = this.meta_data) !== null && _this$meta_data35 !== void 0 && (_this$meta_data35 = _this$meta_data35.dossier_credit) !== null && _this$meta_data35 !== void 0 && _this$meta_data35.tbs_in_use.includes("tb9004") || (_this$meta_data36 = this.meta_data) !== null && _this$meta_data36 !== void 0 && (_this$meta_data36 = _this$meta_data36.dossier_credit) !== null && _this$meta_data36 !== void 0 && _this$meta_data36.tbs_in_use.includes("tb13004") || (_this$meta_data37 = this.meta_data) !== null && _this$meta_data37 !== void 0 && (_this$meta_data37 = _this$meta_data37.dossier_credit) !== null && _this$meta_data37 !== void 0 && _this$meta_data37.tbs_in_use.includes("tb15004") || (_this$meta_data38 = this.meta_data) !== null && _this$meta_data38 !== void 0 && (_this$meta_data38 = _this$meta_data38.dossier_credit) !== null && _this$meta_data38 !== void 0 && _this$meta_data38.tbs_in_use.includes("tb16004") || (_this$meta_data39 = this.meta_data) !== null && _this$meta_data39 !== void 0 && (_this$meta_data39 = _this$meta_data39.dossier_credit) !== null && _this$meta_data39 !== void 0 && _this$meta_data39.tbs_in_use.includes("tb16104") ? _c("div", {
    staticClass: "col-md-12 border-end border-dark border-2"
  }, [_c("div", {
    staticClass: "fw-bold text-center"
  }, [_vm._v("\n                                Sûretés renseignés par le CAF\n                            ")]), _vm._v(" "), _vm._l((_vm$meta_data13 = _vm.meta_data) === null || _vm$meta_data13 === void 0 || (_vm$meta_data13 = _vm$meta_data13.dossier_credit) === null || _vm$meta_data13 === void 0 || (_vm$meta_data13 = _vm$meta_data13[this.determineCredPubTables((_vm$meta_data14 = _vm.meta_data) === null || _vm$meta_data14 === void 0 || (_vm$meta_data14 = _vm$meta_data14.dossier_credit) === null || _vm$meta_data14 === void 0 ? void 0 : _vm$meta_data14.applied_templ_name)[4]]) === null || _vm$meta_data13 === void 0 ? void 0 : _vm$meta_data13["suretes_diverses"], function (sure, index) {
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
    }, [_vm._v("\n                                        " + _vm._s(index + 1 + " " + ".") + " " + _vm._s(sure.label) + "\n                                    ")])])]);
  }), _vm._v(" "), _c("div", {
    staticClass: "form-group py-2 mt-2"
  }, [_vm._m(10), _vm._v(" "), (_vm$meta_data15 = _vm.meta_data) !== null && _vm$meta_data15 !== void 0 && (_vm$meta_data15 = _vm$meta_data15.dossier_credit) !== null && _vm$meta_data15 !== void 0 && (_vm$meta_data15 = _vm$meta_data15[this.determineCredPubTables((_vm$meta_data16 = _vm.meta_data) === null || _vm$meta_data16 === void 0 || (_vm$meta_data16 = _vm$meta_data16.dossier_credit) === null || _vm$meta_data16 === void 0 ? void 0 : _vm$meta_data16.applied_templ_name)[4]]) !== null && _vm$meta_data15 !== void 0 && (_vm$meta_data15 = _vm$meta_data15["autres_suretes_diverses"]) !== null && _vm$meta_data15 !== void 0 && _vm$meta_data15.length ? _c("div", {
    staticClass: "col-12 mt-3"
  }, [_c("table", {
    staticClass: "table table-bordered table-striped table-responsive table-hover"
  }, [_vm._m(11), _vm._v(" "), _c("tbody", _vm._l((_vm$meta_data17 = _vm.meta_data) === null || _vm$meta_data17 === void 0 || (_vm$meta_data17 = _vm$meta_data17.dossier_credit) === null || _vm$meta_data17 === void 0 || (_vm$meta_data17 = _vm$meta_data17[this.determineCredPubTables((_vm$meta_data18 = _vm.meta_data) === null || _vm$meta_data18 === void 0 || (_vm$meta_data18 = _vm$meta_data18.dossier_credit) === null || _vm$meta_data18 === void 0 ? void 0 : _vm$meta_data18.applied_templ_name)[4]]) === null || _vm$meta_data17 === void 0 ? void 0 : _vm$meta_data17["autres_suretes_diverses"], function (autre_surete, index) {
    return _c("tr", {
      key: autre_surete.label + index
    }, [_c("td", {
      staticClass: "col-1"
    }, [_vm._v(_vm._s(index + 1) + ".")]), _vm._v(" "), _c("td", {
      staticClass: "col-10"
    }, [_vm._v(_vm._s(autre_surete.label))])]);
  }), 0)])]) : _vm._e()])], 2) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "col-md-12"
  }, [_c("div", {
    staticClass: "fw-bold text-center"
  }, [_vm._v("\n                                Sûretés renseignés par l'ARC\n                            ")]), _vm._v(" "), !((_vm$meta_data19 = _vm.meta_data) !== null && _vm$meta_data19 !== void 0 && (_vm$meta_data19 = _vm$meta_data19.dossier_credit) !== null && _vm$meta_data19 !== void 0 && _vm$meta_data19[this.determineCredPubTables((_vm$meta_data20 = _vm.meta_data) === null || _vm$meta_data20 === void 0 || (_vm$meta_data20 = _vm$meta_data20.dossier_credit) === null || _vm$meta_data20 === void 0 ? void 0 : _vm$meta_data20.applied_templ_name)[4]]) ? _vm._l(_vm.defaultSuretes, function (sure) {
    return _c("div", {
      key: sure.label,
      staticClass: "form-group py-2"
    }, [_c("div", {
      staticClass: "form-check"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: _vm.suretes_diverses,
        expression: "suretes_diverses",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-check-input",
      attrs: {
        type: "checkbox",
        id: sure.id
      },
      domProps: _defineProperty({
        checked: _vm.suretes_diverses.some(function (el) {
          return (el === null || el === void 0 ? void 0 : el.label) === sure.label;
        }),
        value: sure.value
      }, "checked", Array.isArray(_vm.suretes_diverses) ? _vm._i(_vm.suretes_diverses, sure.value) > -1 : _vm.suretes_diverses),
      on: {
        change: [function ($event) {
          var $$a = _vm.suretes_diverses,
            $$el = $event.target,
            $$c = $$el.checked ? true : false;
          if (Array.isArray($$a)) {
            var $$v = sure.value,
              $$i = _vm._i($$a, $$v);
            if ($$el.checked) {
              $$i < 0 && (_vm.suretes_diverses = $$a.concat([$$v]));
            } else {
              $$i > -1 && (_vm.suretes_diverses = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
            }
          } else {
            _vm.suretes_diverses = $$c;
          }
        }, _vm.handleInput]
      }
    }), _vm._v(" "), _c("label", {
      staticClass: "form-check-label",
      attrs: {
        "for": sure.id
      }
    }, [_vm._v("\n                                            " + _vm._s(sure === null || sure === void 0 ? void 0 : sure.label) + "\n                                        ")])])]);
  }) : _vm._e(), _vm._v(" "), _vm._l((_vm$meta_data21 = _vm.meta_data) === null || _vm$meta_data21 === void 0 || (_vm$meta_data21 = _vm$meta_data21.dossier_credit) === null || _vm$meta_data21 === void 0 || (_vm$meta_data21 = _vm$meta_data21[this.determineCredPubTables((_vm$meta_data22 = _vm.meta_data) === null || _vm$meta_data22 === void 0 || (_vm$meta_data22 = _vm$meta_data22.dossier_credit) === null || _vm$meta_data22 === void 0 ? void 0 : _vm$meta_data22.applied_templ_name)[4]]) === null || _vm$meta_data21 === void 0 ? void 0 : _vm$meta_data21["suretes_diverses"], function (sure) {
    return _c("div", {
      key: sure.label,
      staticClass: "form-group py-2"
    }, [_c("div", {
      staticClass: "form-check"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: _vm.suretes_diverses,
        expression: "suretes_diverses",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-check-input",
      attrs: {
        type: "checkbox",
        id: sure.id
      },
      domProps: _defineProperty({
        checked: _vm.suretes_diverses.some(function (el) {
          return (el === null || el === void 0 ? void 0 : el.label) === sure.label;
        }),
        value: sure.value
      }, "checked", Array.isArray(_vm.suretes_diverses) ? _vm._i(_vm.suretes_diverses, sure.value) > -1 : _vm.suretes_diverses),
      on: {
        change: [function ($event) {
          var $$a = _vm.suretes_diverses,
            $$el = $event.target,
            $$c = $$el.checked ? true : false;
          if (Array.isArray($$a)) {
            var $$v = sure.value,
              $$i = _vm._i($$a, $$v);
            if ($$el.checked) {
              $$i < 0 && (_vm.suretes_diverses = $$a.concat([$$v]));
            } else {
              $$i > -1 && (_vm.suretes_diverses = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
            }
          } else {
            _vm.suretes_diverses = $$c;
          }
        }, _vm.handleInput]
      }
    }), _vm._v(" "), _c("label", {
      staticClass: "form-check-label",
      attrs: {
        "for": sure.id
      }
    }, [_vm._v("\n                                        " + _vm._s(sure === null || sure === void 0 ? void 0 : sure.label) + "\n                                    ")])])]);
  }), _vm._v(" "), _c("div", {
    staticClass: "form-group py-2"
  }, [_c("div", {
    staticClass: "form-check"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.suretes_diverses,
      expression: "suretes_diverses",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-check-input pt-2",
    attrs: {
      name: "surete",
      type: "checkbox",
      id: "nantissement"
    },
    domProps: {
      value: _vm.nantissement_dat,
      checked: Array.isArray(_vm.suretes_diverses) ? _vm._i(_vm.suretes_diverses, _vm.nantissement_dat) > -1 : _vm.suretes_diverses
    },
    on: {
      change: [function ($event) {
        var $$a = _vm.suretes_diverses,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = _vm.nantissement_dat,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.suretes_diverses = $$a.concat([$$v]));
          } else {
            $$i > -1 && (_vm.suretes_diverses = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.suretes_diverses = $$c;
        }
      }, _vm.handleInput]
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "nantissement"
    }
  }, [_vm._v("\n                                        Nantissement de DAT de\n                                        "), _c("currency-input", {
    staticClass: "form-control d-inline",
    attrs: {
      "default-typing": false,
      type: "text",
      value: "0"
    },
    on: {
      input: _vm.refreshSurete1
    },
    model: {
      value: _vm.formDataToBeWatched.montant_dat,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "montant_dat", $$v);
      },
      expression: "formDataToBeWatched.montant_dat\n                                                "
    }
  }), _vm._v("\n                                        qui a pour référence "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.formDataToBeWatched.reference_dat,
      expression: "formDataToBeWatched.reference_dat\n                                            ",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control d-inline",
    attrs: {
      type: "text",
      value: "0"
    },
    domProps: {
      value: _vm.formDataToBeWatched.reference_dat
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.formDataToBeWatched, "reference_dat", $event.target.value);
      }, _vm.refreshSurete1]
    }
  })], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "form-group py-2"
  }, [_c("div", {
    staticClass: "form-check"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.suretes_diverses,
      expression: "suretes_diverses",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-check-input pt-2",
    attrs: {
      name: "engagement",
      type: "checkbox",
      id: "engagement"
    },
    domProps: {
      value: _vm.engagement_value,
      checked: Array.isArray(_vm.suretes_diverses) ? _vm._i(_vm.suretes_diverses, _vm.engagement_value) > -1 : _vm.suretes_diverses
    },
    on: {
      change: [function ($event) {
        var $$a = _vm.suretes_diverses,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = _vm.engagement_value,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.suretes_diverses = $$a.concat([$$v]));
          } else {
            $$i > -1 && (_vm.suretes_diverses = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.suretes_diverses = $$c;
        }
      }, _vm.handleInput]
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "engagement"
    }
  }, [_vm._v("\n                                        Engagement de domiciliation globale de " + _vm._s(_vm.totalEngagementGlobal) + "\n                                    ")]), _vm._v(" "), _vm._m(12), _vm._v(" "), _vm._l(_vm.engagement_globales, function (engagement_globale, index) {
    return _c("div", {
      key: index,
      staticClass: "row mt-2"
    }, [_c("div", {
      staticClass: "col-5 engagement"
    }, [_c("currency-input", {
      attrs: {
        "default-typing": false
      },
      on: {
        input: _vm.refreshSurete
      },
      model: {
        value: engagement_globale.montant_engagement_globale,
        callback: function callback($$v) {
          _vm.$set(engagement_globale, "montant_engagement_globale", $$v);
        },
        expression: "engagement_globale.montant_engagement_globale\n                                                "
      }
    })], 1), _vm._v(" "), _c("div", {
      staticClass: "col-5 engagement"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: engagement_globale.entreprise_engagement_globale,
        expression: "engagement_globale.entreprise_engagement_globale\n                                                    ",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control",
      attrs: {
        required: "",
        type: "text"
      },
      domProps: {
        value: engagement_globale.entreprise_engagement_globale
      },
      on: {
        change: [function ($event) {
          return _vm.$set(engagement_globale, "entreprise_engagement_globale", $event.target.value);
        }, _vm.refreshSurete]
      }
    })]), _vm._v(" "), index == 0 ? _c("div", {
      staticClass: "col-2"
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
        border: "none"
      },
      attrs: {
        type: "button",
        title: "Ajouter une nouvelle garantie"
      },
      on: {
        click: function click($event) {
          return _vm.addEngagementGlobale();
        }
      }
    }, [_c("plus-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)]) : _c("div", {
      staticClass: "col-2"
    }, [_c("div", {
      staticClass: "d-flex align-items-center"
    }, [_c("button", {
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
          return _vm.removeEngagementGlobale(index);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)])])]);
  }), _vm._v(" "), _c("div", {
    staticClass: "row mt-2"
  }, [_c("div", {
    staticClass: "col-5 engagement"
  }, [_c("label", {
    staticClass: "fw-bold"
  }, [_vm._v("\n                                                Total\n                                            ")]), _vm._v(" "), _c("currency-input", {
    attrs: {
      "default-typing": false,
      disabled: ""
    },
    on: {
      input: _vm.refreshSurete
    },
    model: {
      value: _vm.formDataToBeWatched.total_montant_engagement_globale,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "total_montant_engagement_globale", $$v);
      },
      expression: "formDataToBeWatched.total_montant_engagement_globale\n                                                    "
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-5 engagement"
  })])], 2)]), _vm._v(" "), _c("div", {
    staticClass: "form-group py-2 mt-2"
  }, [_vm._m(13), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "d-flex justify-content-between"
  }, [_c("div", {
    staticClass: "col-11"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.newSurete,
      expression: "newSurete",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    staticStyle: {
      width: "100%"
    },
    attrs: {
      placeholder: "Ajouter une autre sureté diverse ici",
      name: "surete",
      type: "text",
      id: "engagement"
    },
    domProps: {
      value: _vm.newSurete
    },
    on: {
      keyup: function keyup($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        return _vm.addAutreSurete.apply(null, arguments);
      },
      change: function change($event) {
        _vm.newSurete = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col d-flex align-items-center justify-content-center"
  }, [_c("button", {
    staticClass: "py-1",
    staticStyle: {
      "background-color": "#2c3e50",
      color: "#ffffff",
      "border-radius": "15%",
      border: "none"
    },
    attrs: {
      type: "button",
      title: "Ajouter une nouvelle garantie"
    },
    on: {
      click: _vm.addAutreSurete
    }
  }, [_c("plus-icon", {
    staticClass: "custom-class",
    attrs: {
      size: "21"
    }
  })], 1)])])]), _vm._v(" "), _vm.formDataToBeWatched.autres_suretes_diverses.length ? _c("div", {
    staticClass: "col-12 mt-3"
  }, [_c("table", {
    staticClass: "table table-bordered table-striped table-responsive table-hover"
  }, [_vm._m(14), _vm._v(" "), _c("tbody", _vm._l(_vm.formDataToBeWatched.autres_suretes_diverses, function (autre_surete, index) {
    return _c("tr", {
      key: autre_surete.label
    }, [_c("td", {
      staticClass: "col-1"
    }, [_vm._v(_vm._s(index + 1) + ".")]), _vm._v(" "), _c("td", {
      staticClass: "col-10"
    }, [_vm._v(_vm._s(autre_surete.label))]), _vm._v(" "), _c("td", {
      staticClass: "col-1 text-center"
    }, [_c("i", {
      staticClass: "icofont-trash",
      on: {
        click: function click($event) {
          return _vm.removeAutreSurete(index);
        }
      }
    })])]);
  }), 0)])]) : _vm._e()])], 2)])]) : _c("div", [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        return _vm.retract3();
      }
    }
  }, [_c("h6", {
    ref: "topdiv",
    attrs: {
      id: "sûretés-diverses"
    }
  }, [_vm._v("\n                                Sûretés diverses\n                                "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])])]), _vm._v(" "), _vm.seen4 === true ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        return _vm.retract4();
      }
    }
  }, [_c("h6", {
    "class": "subdiv" + this.tb_name,
    attrs: {
      id: "conditions-particulières"
    }
  }, [_vm._v("\n                            Conditions particulières\n                            "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)]), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "row px-3"
  }, [(_this$meta_data40 = this.meta_data) !== null && _this$meta_data40 !== void 0 && (_this$meta_data40 = _this$meta_data40.dossier_credit) !== null && _this$meta_data40 !== void 0 && _this$meta_data40.tbs_in_use.includes("tb4") || (_this$meta_data41 = this.meta_data) !== null && _this$meta_data41 !== void 0 && (_this$meta_data41 = _this$meta_data41.dossier_credit) !== null && _this$meta_data41 !== void 0 && _this$meta_data41.tbs_in_use.includes("tb7004") || (_this$meta_data42 = this.meta_data) !== null && _this$meta_data42 !== void 0 && (_this$meta_data42 = _this$meta_data42.dossier_credit) !== null && _this$meta_data42 !== void 0 && _this$meta_data42.tbs_in_use.includes("tb8004") || (_this$meta_data43 = this.meta_data) !== null && _this$meta_data43 !== void 0 && (_this$meta_data43 = _this$meta_data43.dossier_credit) !== null && _this$meta_data43 !== void 0 && _this$meta_data43.tbs_in_use.includes("tb9004") || (_this$meta_data44 = this.meta_data) !== null && _this$meta_data44 !== void 0 && (_this$meta_data44 = _this$meta_data44.dossier_credit) !== null && _this$meta_data44 !== void 0 && _this$meta_data44.tbs_in_use.includes("tb13004") || (_this$meta_data45 = this.meta_data) !== null && _this$meta_data45 !== void 0 && (_this$meta_data45 = _this$meta_data45.dossier_credit) !== null && _this$meta_data45 !== void 0 && _this$meta_data45.tbs_in_use.includes("tb15004") || (_this$meta_data46 = this.meta_data) !== null && _this$meta_data46 !== void 0 && (_this$meta_data46 = _this$meta_data46.dossier_credit) !== null && _this$meta_data46 !== void 0 && _this$meta_data46.tbs_in_use.includes("tb16004") || (_this$meta_data47 = this.meta_data) !== null && _this$meta_data47 !== void 0 && (_this$meta_data47 = _this$meta_data47.dossier_credit) !== null && _this$meta_data47 !== void 0 && _this$meta_data47.tbs_in_use.includes("tb16104") ? _c("div", {
    staticClass: "col bg-card-ana"
  }, [_c("div", {
    staticClass: "fw-bold text-center"
  }, [_vm._v("\n                                Conditions particulières renseignées par le CAF\n                            ")]), _vm._v(" "), (_this$meta_data48 = this.meta_data) !== null && _this$meta_data48 !== void 0 && (_this$meta_data48 = _this$meta_data48.dossier_credit) !== null && _this$meta_data48 !== void 0 && _this$meta_data48.tbs_in_use.includes("tb4") || (_this$meta_data49 = this.meta_data) !== null && _this$meta_data49 !== void 0 && (_this$meta_data49 = _this$meta_data49.dossier_credit) !== null && _this$meta_data49 !== void 0 && _this$meta_data49.tbs_in_use.includes("tb7004") || (_this$meta_data50 = this.meta_data) !== null && _this$meta_data50 !== void 0 && (_this$meta_data50 = _this$meta_data50.dossier_credit) !== null && _this$meta_data50 !== void 0 && _this$meta_data50.tbs_in_use.includes("tb8004") || (_this$meta_data51 = this.meta_data) !== null && _this$meta_data51 !== void 0 && (_this$meta_data51 = _this$meta_data51.dossier_credit) !== null && _this$meta_data51 !== void 0 && _this$meta_data51.tbs_in_use.includes("tb9004") || (_this$meta_data52 = this.meta_data) !== null && _this$meta_data52 !== void 0 && (_this$meta_data52 = _this$meta_data52.dossier_credit) !== null && _this$meta_data52 !== void 0 && _this$meta_data52.tbs_in_use.includes("tb13004") || (_this$meta_data53 = this.meta_data) !== null && _this$meta_data53 !== void 0 && (_this$meta_data53 = _this$meta_data53.dossier_credit) !== null && _this$meta_data53 !== void 0 && _this$meta_data53.tbs_in_use.includes("tb15004") || (_this$meta_data54 = this.meta_data) !== null && _this$meta_data54 !== void 0 && (_this$meta_data54 = _this$meta_data54.dossier_credit) !== null && _this$meta_data54 !== void 0 && _this$meta_data54.tbs_in_use.includes("tb16004") || (_this$meta_data55 = this.meta_data) !== null && _this$meta_data55 !== void 0 && (_this$meta_data55 = _this$meta_data55.dossier_credit) !== null && _this$meta_data55 !== void 0 && _this$meta_data55.tbs_in_use.includes("tb16104") ? _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table mb-5 table-borderless"
  }, [_vm._m(15), _vm._v(" "), _c("tbody", _vm._l((_vm$meta_data23 = _vm.meta_data) === null || _vm$meta_data23 === void 0 || (_vm$meta_data23 = _vm$meta_data23.dossier_credit) === null || _vm$meta_data23 === void 0 || (_vm$meta_data23 = _vm$meta_data23[this.determineCredPubTables((_vm$meta_data24 = _vm.meta_data) === null || _vm$meta_data24 === void 0 || (_vm$meta_data24 = _vm$meta_data24.dossier_credit) === null || _vm$meta_data24 === void 0 ? void 0 : _vm$meta_data24.applied_templ_name)[4]]) === null || _vm$meta_data23 === void 0 ? void 0 : _vm$meta_data23["cond_particulieres"], function (cond_particuliere, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_vm._v(" " + _vm._s(index + 1) + ". ")]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: cond_particuliere.cond_description,
        expression: "cond_particuliere.cond_description",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control",
      attrs: {
        disabled: ""
      },
      domProps: {
        value: cond_particuliere.cond_description
      },
      on: {
        change: function change($event) {
          return _vm.$set(cond_particuliere, "cond_description", $event.target.value);
        }
      }
    })])]);
  }), 0)])]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "col"
  }, [_c("div", {
    staticClass: "fw-bold text-center"
  }, [_vm._v("\n                                Conditions particulières renseignés par le l'ARC\n                            ")]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table mb-5 table-borderless"
  }, [_vm._m(16), _vm._v(" "), _c("tbody", _vm._l(_vm.cond_particulieres, function (cond_particuliere, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_vm._v(" " + _vm._s(index + 1) + ". ")]), _vm._v(" "), _c("td", [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: cond_particuliere.cond_description,
        expression: "cond_particuliere.cond_description",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control input-box",
      attrs: {
        cols: "30",
        rows: "1"
      },
      domProps: {
        value: cond_particuliere.cond_description
      },
      on: {
        change: [function ($event) {
          return _vm.$set(cond_particuliere, "cond_description", $event.target.value);
        }, _vm.handleInput]
      }
    })]), _vm._v(" "), index == 0 ? _c("td", [_c("button", {
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
        border: "none"
      },
      attrs: {
        type: "button",
        title: "Ajouter une nouvelle garantie"
      },
      on: {
        click: function click($event) {
          return _vm.addCondPart();
        }
      }
    }, [_c("plus-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)]) : _c("td", {
      attrs: {
        align: "center"
      }
    }, [_c("div", {
      staticClass: "d-flex align-items-center"
    }, [_c("button", {
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
          return _vm.removeByKey(index, "cond_particulieres");
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)])])]);
  }), 0)])])])])]) : _c("div", [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        return _vm.retract4();
      }
    }
  }, [_c("h6", {
    attrs: {
      id: "conditions-particulières"
    }
  }, [_vm._v("\n                                Conditions particulières\n                                "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])])]), _vm._v(" "), _vm.seen5 ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen5 = !_vm.seen5;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "patrimoine-de-la-l'actionnaire"
    }
  }, [_vm._v("\n                            Cautionnement solidaire\n                            "), _c("i", {
    staticClass: "icofont icofont-rounded-up",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "row px-3"
  }, [(_this$meta_data56 = this.meta_data) !== null && _this$meta_data56 !== void 0 && (_this$meta_data56 = _this$meta_data56.dossier_credit) !== null && _this$meta_data56 !== void 0 && _this$meta_data56.tbs_in_use.includes("tb4") || (_this$meta_data57 = this.meta_data) !== null && _this$meta_data57 !== void 0 && (_this$meta_data57 = _this$meta_data57.dossier_credit) !== null && _this$meta_data57 !== void 0 && _this$meta_data57.tbs_in_use.includes("tb7004") || (_this$meta_data58 = this.meta_data) !== null && _this$meta_data58 !== void 0 && (_this$meta_data58 = _this$meta_data58.dossier_credit) !== null && _this$meta_data58 !== void 0 && _this$meta_data58.tbs_in_use.includes("tb8004") || (_this$meta_data59 = this.meta_data) !== null && _this$meta_data59 !== void 0 && (_this$meta_data59 = _this$meta_data59.dossier_credit) !== null && _this$meta_data59 !== void 0 && _this$meta_data59.tbs_in_use.includes("tb9004") || (_this$meta_data60 = this.meta_data) !== null && _this$meta_data60 !== void 0 && (_this$meta_data60 = _this$meta_data60.dossier_credit) !== null && _this$meta_data60 !== void 0 && _this$meta_data60.tbs_in_use.includes("tb13004") || (_this$meta_data61 = this.meta_data) !== null && _this$meta_data61 !== void 0 && (_this$meta_data61 = _this$meta_data61.dossier_credit) !== null && _this$meta_data61 !== void 0 && _this$meta_data61.tbs_in_use.includes("tb15004") || (_this$meta_data62 = this.meta_data) !== null && _this$meta_data62 !== void 0 && (_this$meta_data62 = _this$meta_data62.dossier_credit) !== null && _this$meta_data62 !== void 0 && _this$meta_data62.tbs_in_use.includes("tb16004") || (_this$meta_data63 = this.meta_data) !== null && _this$meta_data63 !== void 0 && (_this$meta_data63 = _this$meta_data63.dossier_credit) !== null && _this$meta_data63 !== void 0 && _this$meta_data63.tbs_in_use.includes("tb16104") ? _c("div", {
    staticClass: "fw-bold text-center"
  }, [_vm._v("\n                            Cautionnement renseignés par le CAF\n                        ")]) : _vm._e(), _vm._v(" "), (_this$meta_data64 = this.meta_data) !== null && _this$meta_data64 !== void 0 && (_this$meta_data64 = _this$meta_data64.dossier_credit) !== null && _this$meta_data64 !== void 0 && _this$meta_data64.tbs_in_use.includes("tb4") || (_this$meta_data65 = this.meta_data) !== null && _this$meta_data65 !== void 0 && (_this$meta_data65 = _this$meta_data65.dossier_credit) !== null && _this$meta_data65 !== void 0 && _this$meta_data65.tbs_in_use.includes("tb7004") || (_this$meta_data66 = this.meta_data) !== null && _this$meta_data66 !== void 0 && (_this$meta_data66 = _this$meta_data66.dossier_credit) !== null && _this$meta_data66 !== void 0 && _this$meta_data66.tbs_in_use.includes("tb8004") || (_this$meta_data67 = this.meta_data) !== null && _this$meta_data67 !== void 0 && (_this$meta_data67 = _this$meta_data67.dossier_credit) !== null && _this$meta_data67 !== void 0 && _this$meta_data67.tbs_in_use.includes("tb9004") || (_this$meta_data68 = this.meta_data) !== null && _this$meta_data68 !== void 0 && (_this$meta_data68 = _this$meta_data68.dossier_credit) !== null && _this$meta_data68 !== void 0 && _this$meta_data68.tbs_in_use.includes("tb13004") || (_this$meta_data69 = this.meta_data) !== null && _this$meta_data69 !== void 0 && (_this$meta_data69 = _this$meta_data69.dossier_credit) !== null && _this$meta_data69 !== void 0 && _this$meta_data69.tbs_in_use.includes("tb15004") || (_this$meta_data70 = this.meta_data) !== null && _this$meta_data70 !== void 0 && (_this$meta_data70 = _this$meta_data70.dossier_credit) !== null && _this$meta_data70 !== void 0 && _this$meta_data70.tbs_in_use.includes("tb16004") || (_this$meta_data71 = this.meta_data) !== null && _this$meta_data71 !== void 0 && (_this$meta_data71 = _this$meta_data71.dossier_credit) !== null && _this$meta_data71 !== void 0 && _this$meta_data71.tbs_in_use.includes("tb16104") ? _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-borderless mb-1"
  }, [_vm._m(17), _vm._v(" "), _c("tbody", _vm._l((_vm$meta_data25 = _vm.meta_data) === null || _vm$meta_data25 === void 0 || (_vm$meta_data25 = _vm$meta_data25.dossier_credit) === null || _vm$meta_data25 === void 0 || (_vm$meta_data25 = _vm$meta_data25[this.determineCredPubTables((_vm$meta_data26 = _vm.meta_data) === null || _vm$meta_data26 === void 0 || (_vm$meta_data26 = _vm$meta_data26.dossier_credit) === null || _vm$meta_data26 === void 0 ? void 0 : _vm$meta_data26.applied_templ_name)[4]]) === null || _vm$meta_data25 === void 0 ? void 0 : _vm$meta_data25["cautionnement_solidaires"], function (cautionnement, index) {
    return _c("tr", {
      key: index
    }, [_c("td", {
      staticClass: "col-4"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: cautionnement.nom_prenoms,
        expression: "cautionnement.nom_prenoms",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        readonly: ""
      },
      domProps: {
        value: cautionnement.nom_prenoms
      },
      on: {
        change: function change($event) {
          return _vm.$set(cautionnement, "nom_prenoms", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "col-2"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: cautionnement.profession,
        expression: "cautionnement.profession",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        readonly: ""
      },
      domProps: {
        value: cautionnement.profession
      },
      on: {
        change: function change($event) {
          return _vm.$set(cautionnement, "profession", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "col-2"
    }, [_c("currency-input", {
      staticClass: "form-control",
      attrs: {
        "default-typing": false,
        readonly: ""
      },
      model: {
        value: cautionnement.revenu_mensuel,
        callback: function callback($$v) {
          _vm.$set(cautionnement, "revenu_mensuel", $$v);
        },
        expression: "cautionnement.revenu_mensuel"
      }
    })], 1), _vm._v(" "), _c("td", {
      staticClass: "col-2"
    }, [_c("currency-input", {
      staticClass: "form-control",
      attrs: {
        type: "text",
        "default-typing": false,
        readonly: ""
      },
      model: {
        value: cautionnement.valeur_patrimoine,
        callback: function callback($$v) {
          _vm.$set(cautionnement, "valeur_patrimoine", $$v);
        },
        expression: "cautionnement.valeur_patrimoine"
      }
    })], 1)]);
  }), 0)])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "fw-bold text-center"
  }, [_vm._v("\n                            Cautionnement renseignés par l'ARC\n                        ")]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-borderless mb-1"
  }, [_vm._m(18), _vm._v(" "), _c("tbody", _vm._l(_vm.cautionnement_solidaires, function (cautionnement, index) {
    return _c("tr", {
      key: index
    }, [_c("td", {
      staticClass: "col-4"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: cautionnement.nom_prenoms,
        expression: "cautionnement.nom_prenoms",
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
        value: cautionnement.nom_prenoms
      },
      on: {
        change: [function ($event) {
          return _vm.$set(cautionnement, "nom_prenoms", $event.target.value);
        }, _vm.handleInput]
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "col-2"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: cautionnement.profession,
        expression: "cautionnement.profession",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control input-box",
      attrs: {
        type: "text"
      },
      domProps: {
        value: cautionnement.profession
      },
      on: {
        change: [function ($event) {
          return _vm.$set(cautionnement, "profession", $event.target.value);
        }, _vm.handleInput]
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "col-2"
    }, [_c("currency-input", {
      staticClass: "form-control input-box",
      attrs: {
        "default-typing": false,
        id: "valeur_analyse_actuelle_actionnaire"
      },
      model: {
        value: cautionnement.revenu_mensuel,
        callback: function callback($$v) {
          _vm.$set(cautionnement, "revenu_mensuel", $$v);
        },
        expression: "cautionnement.revenu_mensuel"
      }
    })], 1), _vm._v(" "), _c("td", {
      staticClass: "col-2"
    }, [_c("currency-input", {
      staticClass: "form-control input-box",
      attrs: {
        type: "text",
        "default-typing": false
      },
      on: {
        input: _vm.handleInput
      },
      model: {
        value: cautionnement.valeur_patrimoine,
        callback: function callback($$v) {
          _vm.$set(cautionnement, "valeur_patrimoine", $$v);
        },
        expression: "cautionnement.valeur_patrimoine"
      }
    })], 1), _vm._v(" "), index == 0 ? _c("td", {
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
  }), 0)])])])]) : _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen5 = !_vm.seen5;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "patrimoine-de-l'actionnaire"
    }
  }, [_vm._v("\n                            Cautionnement solidaire"), _c("i", {
    staticClass: "icofont icofont-rounded-down",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    }
  })])])]), _vm._v(" "), _vm.isSeenState["caution_hypothecaire"] === true ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        return _vm.toggleIsSeen("caution_hypothecaire");
      }
    }
  }, [_c("h6", {
    "class": "subdiv" + this.tb_name,
    attrs: {
      id: "caution_hypothecaire"
    }
  }, [_vm._v("\n                            Caution hypothécaire\n                            "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)]), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table mb-5 table-borderless"
  }, [_vm._m(19), _vm._v(" "), _c("tbody", [_vm._l(_vm.formDataToBeWatched.caution_hypothecaires, function (caution_hypothecaire, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_vm._v(_vm._s(index + 1) + ".")]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: caution_hypothecaire.bien,
        expression: "\n                                                caution_hypothecaire.bien\n                                            ",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control input-box",
      attrs: {
        required: "",
        type: "text"
      },
      domProps: {
        value: caution_hypothecaire.bien
      },
      on: {
        input: _vm.handleInput,
        change: function change($event) {
          return _vm.$set(caution_hypothecaire, "bien", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: caution_hypothecaire.proprietaire,
        expression: "\n                                                caution_hypothecaire.proprietaire\n                                            ",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control input-box",
      attrs: {
        required: "",
        type: "text"
      },
      domProps: {
        value: caution_hypothecaire.proprietaire
      },
      on: {
        input: _vm.handleInput,
        change: function change($event) {
          return _vm.$set(caution_hypothecaire, "proprietaire", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: caution_hypothecaire.numero_tel,
        expression: "\n                                                caution_hypothecaire.numero_tel\n                                            ",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control input-box",
      attrs: {
        required: "",
        type: "text"
      },
      domProps: {
        value: caution_hypothecaire.numero_tel
      },
      on: {
        input: _vm.handleInput,
        change: function change($event) {
          return _vm.$set(caution_hypothecaire, "numero_tel", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("date-input", {
      staticClass: "input-date",
      attrs: {
        background: "background: #00ffff21",
        color: "color: #000",
        value: caution_hypothecaire.annee_achat
      },
      on: {
        input: function input($event) {
          return _vm.setDateInput($event, "caution_hypothecaires", "annee_achat", index);
        }
      }
    })], 1), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: caution_hypothecaire.adresse_emplacement,
        expression: "\n                                                caution_hypothecaire.adresse_emplacement\n                                            ",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control input-box",
      attrs: {
        required: "",
        type: "text"
      },
      domProps: {
        value: caution_hypothecaire.adresse_emplacement
      },
      on: {
        change: [function ($event) {
          return _vm.$set(caution_hypothecaire, "adresse_emplacement", $event.target.value);
        }, _vm.handleInput]
      }
    })]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: caution_hypothecaire.longitude,
        expression: "\n                                                caution_hypothecaire.longitude\n                                            ",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control input-box",
      attrs: {
        required: "",
        type: "text"
      },
      domProps: {
        value: caution_hypothecaire.longitude
      },
      on: {
        change: [function ($event) {
          return _vm.$set(caution_hypothecaire, "longitude", $event.target.value);
        }, _vm.handleInput]
      }
    })]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: caution_hypothecaire.lattitude,
        expression: "\n                                                caution_hypothecaire.lattitude\n                                            ",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control input-box",
      attrs: {
        required: "",
        type: "text"
      },
      domProps: {
        value: caution_hypothecaire.lattitude
      },
      on: {
        change: [function ($event) {
          return _vm.$set(caution_hypothecaire, "lattitude", $event.target.value);
        }, _vm.handleInput]
      }
    })]), _vm._v(" "), _c("td", [_c("date-input", {
      staticClass: "input-date",
      attrs: {
        background: "background: #00ffff21",
        color: "color: #000",
        value: caution_hypothecaire.date_evaluation
      },
      on: {
        input: function input($event) {
          return _vm.setDateInput($event, "caution_hypothecaires", "date_evaluation", index);
        }
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
      staticClass: "form-control input-box",
      attrs: {
        "default-typing": false,
        type: "text"
      },
      on: {
        input: _vm.handleInput
      },
      model: {
        value: caution_hypothecaire.valeur_marchande,
        callback: function callback($$v) {
          _vm.$set(caution_hypothecaire, "valeur_marchande", $$v);
        },
        expression: "\n                                                caution_hypothecaire.valeur_marchande\n                                            "
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
      staticClass: "form-control input-box",
      attrs: {
        "default-typing": false,
        type: "text"
      },
      on: {
        input: _vm.handleInput
      },
      model: {
        value: caution_hypothecaire.valeur_considere,
        callback: function callback($$v) {
          _vm.$set(caution_hypothecaire, "valeur_considere", $$v);
        },
        expression: "\n                                                caution_hypothecaire.valeur_considere\n                                            "
      }
    })], 1), _vm._v(" "), index == 0 ? _c("td", [_c("button", {
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
        border: "none"
      },
      attrs: {
        type: "button",
        title: "Ajouter une nouvelle garantie"
      },
      on: {
        click: function click($event) {
          return _vm.addMore("caution_hypothecaires");
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
          return _vm.remove(index, "caution_hypothecaires");
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)])]);
  }), _vm._v(" "), _c("tr", [_vm._m(20), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      readonly: "",
      "default-typing": false
    },
    on: {
      input: _vm.handleInput
    },
    model: {
      value: _vm.formDataToBeWatched.total_caution_hypothecaires_valeur_marchande,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "total_caution_hypothecaires_valeur_marchande", $$v);
      },
      expression: "\n                                                formDataToBeWatched.total_caution_hypothecaires_valeur_marchande\n                                            "
    }
  })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      readonly: "",
      "default-typing": false
    },
    on: {
      input: _vm.handleInput
    },
    model: {
      value: _vm.formDataToBeWatched.total_caution_hypothecaires_valeur_considere,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "total_caution_hypothecaires_valeur_considere", $$v);
      },
      expression: "\n                                                formDataToBeWatched.total_caution_hypothecaires_valeur_considere\n                                            "
    }
  })], 1)])], 2)])])]) : _c("div", [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        return _vm.toggleIsSeen("caution_hypothecaire");
      }
    }
  }, [_c("h6", {
    attrs: {
      id: "caution_hypothecaire"
    }
  }, [_vm._v("\n                                Caution hypothécaire\n                                "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])])]), _vm._v(" "), _vm.isSeenState["promesse_affectation_hypothecaire"] === true ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        return _vm.toggleIsSeen("promesse_affectation_hypothecaire");
      }
    }
  }, [_c("h6", {
    "class": "subdiv" + this.tb_name,
    attrs: {
      id: "promesse_affectation_hypothecaire"
    }
  }, [_vm._v("\n                            Promesse d'affectation hypothecaire\n                            "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)]), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table mb-5 table-borderless"
  }, [_vm._m(21), _vm._v(" "), _c("tbody", [_vm._l(_vm.formDataToBeWatched.promesse_affectation_hypothecaires, function (promesse_affectation_hypothecaire, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_vm._v(_vm._s(index + 1) + ".")]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: promesse_affectation_hypothecaire.bien,
        expression: "\n                                                promesse_affectation_hypothecaire.bien\n                                            ",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control input-box",
      attrs: {
        required: "",
        type: "text"
      },
      domProps: {
        value: promesse_affectation_hypothecaire.bien
      },
      on: {
        input: _vm.handleInput,
        change: function change($event) {
          return _vm.$set(promesse_affectation_hypothecaire, "bien", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: promesse_affectation_hypothecaire.proprietaire,
        expression: "\n                                                promesse_affectation_hypothecaire.proprietaire\n                                            ",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control input-box",
      attrs: {
        required: "",
        type: "text"
      },
      domProps: {
        value: promesse_affectation_hypothecaire.proprietaire
      },
      on: {
        input: _vm.handleInput,
        change: function change($event) {
          return _vm.$set(promesse_affectation_hypothecaire, "proprietaire", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: promesse_affectation_hypothecaire.numero_tel,
        expression: "\n                                                promesse_affectation_hypothecaire.numero_tel\n                                            ",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control input-box",
      attrs: {
        required: "",
        type: "text"
      },
      domProps: {
        value: promesse_affectation_hypothecaire.numero_tel
      },
      on: {
        input: _vm.handleInput,
        change: function change($event) {
          return _vm.$set(promesse_affectation_hypothecaire, "numero_tel", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("date-input", {
      staticClass: "input-date",
      attrs: {
        background: "background: #00ffff21",
        color: "color: #000",
        value: promesse_affectation_hypothecaire.annee_achat
      },
      on: {
        input: function input($event) {
          return _vm.setDateInput($event, "promesse_affectation_hypothecaires", "annee_achat", index);
        }
      }
    })], 1), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: promesse_affectation_hypothecaire.adresse_emplacement,
        expression: "\n                                                promesse_affectation_hypothecaire.adresse_emplacement\n                                            ",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control input-box",
      attrs: {
        required: "",
        type: "text"
      },
      domProps: {
        value: promesse_affectation_hypothecaire.adresse_emplacement
      },
      on: {
        change: [function ($event) {
          return _vm.$set(promesse_affectation_hypothecaire, "adresse_emplacement", $event.target.value);
        }, _vm.handleInput]
      }
    })]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: promesse_affectation_hypothecaire.longitude,
        expression: "\n                                                promesse_affectation_hypothecaire.longitude\n                                            ",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control input-box",
      attrs: {
        required: "",
        type: "text"
      },
      domProps: {
        value: promesse_affectation_hypothecaire.longitude
      },
      on: {
        change: [function ($event) {
          return _vm.$set(promesse_affectation_hypothecaire, "longitude", $event.target.value);
        }, _vm.handleInput]
      }
    })]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: promesse_affectation_hypothecaire.lattitude,
        expression: "\n                                                promesse_affectation_hypothecaire.lattitude\n                                            ",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control input-box",
      attrs: {
        required: "",
        type: "text"
      },
      domProps: {
        value: promesse_affectation_hypothecaire.lattitude
      },
      on: {
        change: [function ($event) {
          return _vm.$set(promesse_affectation_hypothecaire, "lattitude", $event.target.value);
        }, _vm.handleInput]
      }
    })]), _vm._v(" "), _c("td", [_c("date-input", {
      staticClass: "input-date",
      attrs: {
        value: promesse_affectation_hypothecaire.date_evaluation
      },
      on: {
        input: function input($event) {
          return _vm.setDateInput($event, "promesse_affectation_hypothecaires", "date_evaluation", index);
        }
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
      staticClass: "form-control input-box",
      attrs: {
        "default-typing": false,
        type: "text"
      },
      on: {
        input: _vm.handleInput
      },
      model: {
        value: promesse_affectation_hypothecaire.valeur_marchande,
        callback: function callback($$v) {
          _vm.$set(promesse_affectation_hypothecaire, "valeur_marchande", $$v);
        },
        expression: "\n                                                promesse_affectation_hypothecaire.valeur_marchande\n                                            "
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
      staticClass: "form-control input-box",
      attrs: {
        "default-typing": false,
        type: "text"
      },
      on: {
        input: _vm.handleInput
      },
      model: {
        value: promesse_affectation_hypothecaire.valeur_considere,
        callback: function callback($$v) {
          _vm.$set(promesse_affectation_hypothecaire, "valeur_considere", $$v);
        },
        expression: "\n                                                promesse_affectation_hypothecaire.valeur_considere\n                                            "
      }
    })], 1), _vm._v(" "), index == 0 ? _c("td", [_c("button", {
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
        border: "none"
      },
      attrs: {
        type: "button",
        title: "Ajouter une nouvelle garantie"
      },
      on: {
        click: function click($event) {
          return _vm.addMore("promesse_affectation_hypothecaires");
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
          return _vm.remove(index, "promesse_affectation_hypothecaires");
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)])]);
  }), _vm._v(" "), _c("tr", [_vm._m(22), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      readonly: "",
      "default-typing": false
    },
    on: {
      input: _vm.handleInput
    },
    model: {
      value: _vm.formDataToBeWatched.total_promesse_affectation_hypothecaires_valeur_marchande,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "total_promesse_affectation_hypothecaires_valeur_marchande", $$v);
      },
      expression: "\n                                                formDataToBeWatched.total_promesse_affectation_hypothecaires_valeur_marchande\n                                            "
    }
  })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      readonly: "",
      "default-typing": false
    },
    on: {
      input: _vm.handleInput
    },
    model: {
      value: _vm.formDataToBeWatched.total_promesse_affectation_hypothecaires_valeur_considere,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "total_promesse_affectation_hypothecaires_valeur_considere", $$v);
      },
      expression: "\n                                                formDataToBeWatched.total_promesse_affectation_hypothecaires_valeur_considere\n                                            "
    }
  })], 1)])], 2)])])]) : _c("div", [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        return _vm.toggleIsSeen("promesse_affectation_hypothecaire");
      }
    }
  }, [_c("h6", {
    attrs: {
      id: "promesse_affectation_hypothecaire"
    }
  }, [_vm._v("\n                                Promesse d'affectation hypothecaire\n                                "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])])]), _vm._v(" "), _vm.isSeenState["protections_financieres_eligibles"] === true ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        return _vm.toggleIsSeen("protections_financieres_eligibles");
      }
    }
  }, [_c("h6", {
    "class": "subdiv" + this.tb_name,
    attrs: {
      id: "protections_financieres_eligibles"
    }
  }, [_vm._v("\n                            Protections financières éligibles (Garantie/Assurance crédit)\n                            "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)]), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table mb-5 table-borderless"
  }, [_vm._m(23), _vm._v(" "), _c("tbody", [_vm._l((_vm$formDataToBeWatch2 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch2 === void 0 ? void 0 : _vm$formDataToBeWatch2.protection_financieres, function (protection_financiere, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_vm._v(_vm._s(index + 1) + ".")]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: protection_financiere.garantie,
        expression: "\n                                                protection_financiere.garantie\n                                            ",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control input-box",
      attrs: {
        required: "",
        type: "text"
      },
      domProps: {
        value: protection_financiere.garantie
      },
      on: {
        change: [function ($event) {
          return _vm.$set(protection_financiere, "garantie", $event.target.value);
        }, _vm.handleInput]
      }
    })]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: protection_financiere.institution,
        expression: "\n                                                protection_financiere.institution\n                                            ",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control input-box",
      attrs: {
        required: "",
        type: "text"
      },
      domProps: {
        value: protection_financiere.institution
      },
      on: {
        change: [function ($event) {
          return _vm.$set(protection_financiere, "institution", $event.target.value);
        }, _vm.handleInput]
      }
    })]), _vm._v(" "), _c("td", [_c("date-input", {
      staticClass: "input-date input-box",
      attrs: {
        background: "background: #00ffff21",
        color: "color: #000",
        value: protection_financiere.date_attribution
      },
      on: {
        input: function input($event) {
          return _vm.setDateInput($event, "protection_financieres", "date_attribution", index);
        }
      }
    })], 1), _vm._v(" "), _c("td", [_c("date-input", {
      staticClass: "input-date input-box",
      attrs: {
        background: "background: #00ffff21",
        color: "color: #000",
        value: protection_financiere.date_evaluation
      },
      on: {
        input: function input($event) {
          return _vm.setDateInput($event, "protection_financieres", "date_evaluation", index);
        }
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
      staticClass: "form-control input-box",
      attrs: {
        "default-typing": false,
        type: "text"
      },
      on: {
        input: _vm.handleInput
      },
      model: {
        value: protection_financiere.valeur_marchande,
        callback: function callback($$v) {
          _vm.$set(protection_financiere, "valeur_marchande", $$v);
        },
        expression: "\n                                                protection_financiere.valeur_marchande\n                                            "
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
      staticClass: "form-control input-box",
      attrs: {
        "default-typing": false,
        type: "text"
      },
      on: {
        input: _vm.handleInput
      },
      model: {
        value: protection_financiere.valeur_considere,
        callback: function callback($$v) {
          _vm.$set(protection_financiere, "valeur_considere", $$v);
        },
        expression: "\n                                                protection_financiere.valeur_considere\n                                            "
      }
    })], 1), _vm._v(" "), index == 0 ? _c("td", [_c("button", {
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
        border: "none"
      },
      attrs: {
        type: "button",
        title: "Ajouter une nouvelle garantie"
      },
      on: {
        click: function click($event) {
          return _vm.addMore("protection_financieres");
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
          return _vm.remove(index, "protection_financieres");
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)])]);
  }), _vm._v(" "), _c("tr", [_vm._m(24), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      readonly: "",
      "default-typing": false
    },
    on: {
      input: _vm.handleInput
    },
    model: {
      value: _vm.formDataToBeWatched.total_protection_financieres_valeur_marchande,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "total_protection_financieres_valeur_marchande", $$v);
      },
      expression: "\n                                                formDataToBeWatched.total_protection_financieres_valeur_marchande\n                                            "
    }
  })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      readonly: "",
      "default-typing": false
    },
    on: {
      input: _vm.handleInput
    },
    model: {
      value: _vm.formDataToBeWatched.total_protection_financieres_valeur_considere,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "total_protection_financieres_valeur_considere", $$v);
      },
      expression: "\n                                                formDataToBeWatched.total_protection_financieres_valeur_considere\n                                            "
    }
  })], 1)])], 2)])])]) : _c("div", [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        return _vm.toggleIsSeen("protections_financieres_eligibles");
      }
    }
  }, [_c("h6", {
    attrs: {
      id: "protections_financieres_eligibles"
    }
  }, [_vm._v("\n                                Protections financières éligibles  (Garantie/Assurance crédit)\n                                "), _c("chevron-down-icon", {
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
  }, [_c("div", {
    staticClass: "col-md-12 mt-0 mb-4"
  }, [_vm._m(25), _vm._v(" "), _c("vue-editor", {
    attrs: {
      id: "commentaire_activite"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.commentaire_activite,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "commentaire_activite", $$v);
      },
      expression: "formDataToBeWatched.commentaire_activite"
    }
  })], 1)]), _vm._v(" "), _c("TableauPonderationARC", {
    staticClass: "card-body",
    attrs: {
      read_only: true,
      dossier_credit: (_vm$meta_data27 = _vm.meta_data) === null || _vm$meta_data27 === void 0 ? void 0 : _vm$meta_data27.dossier_credit,
      depot_de_garantie: _vm.montant_dep_gar_crsd,
      coming_form: "ARC"
    }
  })], 1), _vm._v(" "), _c("div", {
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
  }, [_vm._v("\n                    Fermer le tableau\n                ")])]) : _c("div", {
    staticClass: "card card-width-height"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc pb-0 pt-2"
  }, [_c("h6", {
    staticClass: "head",
    attrs: {
      id: "ca4-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Sûretés proposées et garanties\n                        ")]), _vm._v(" "), _c("div", {
    staticClass: "col-auto"
  }, [((_vm$formDataToBeWatch3 = _vm.formDataToBeWatched.notes) === null || _vm$formDataToBeWatch3 === void 0 ? void 0 : _vm$formDataToBeWatch3.length) > 0 ? _c("div", {
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
  return _c("tr", [_c("th", {
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      colspan: "",
      scope: "row"
    }
  }), _vm._v(" "), _c("th", {
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      colspan: "",
      scope: "row"
    }
  }), _vm._v(" "), _c("th", {
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      colspan: "",
      scope: "row"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_c("b", [_vm._v("Commentaire sur les garanties")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("td"), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Hypothèques ")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Propriétaire")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Date d'achat")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Adresse de l'emplacement")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Longitude")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Latitude")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Date d'évaluation")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Valeur marchande")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Valeur considérée  ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "text-end",
    attrs: {
      colspan: "8"
    }
  }, [_c("b", [_vm._v("Totaux")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("td"), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Hypothèques ")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Propriétaire")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Date d'achat")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Adresse de l'emplacement")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Longitude")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Latitude")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Date d'évaluation")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Valeur marchande")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Valeur considérée")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "text-end",
    attrs: {
      colspan: "8"
    }
  }, [_c("b", [_vm._v("Totaux")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("td", {
    staticClass: "th text-center"
  }), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Gages ")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Propriétaire")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("N° du titre foncier")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Date d'achat")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Adresse de l'emplacement")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Date d'évaluation")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Valeur marchande")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Valeur considérée")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "text-end",
    attrs: {
      colspan: "7"
    }
  }, [_c("b", [_vm._v("Totaux")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("td", {
    staticClass: "th text-center"
  }), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Gages ")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Propriétaire")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("N° du titre foncier")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Date d'achat")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Adresse de l'emplacement")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Date d'évaluation")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Valeur marchande")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Valeur considérée")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "text-end",
    attrs: {
      colspan: "7"
    }
  }, [_c("b", [_vm._v("Totaux")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-12"
  }, [_c("label", {
    staticClass: "fw-bold"
  }, [_vm._v(" Autres suretés diverses ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_vm._v("#")]), _vm._v(" "), _c("th", [_vm._v("Autres suretés diverses")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row mt-2"
  }, [_c("div", {
    staticClass: "col-5"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Montant")])]), _vm._v(" "), _c("div", {
    staticClass: "col-5"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Entreprise")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-12"
  }, [_c("label", {
    staticClass: "fw-bold"
  }, [_vm._v(" Autres suretés diverses ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_vm._v("#")]), _vm._v(" "), _c("th", [_vm._v("Autres suretés diverses")]), _vm._v(" "), _c("th", [_vm._v("Action")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("td"), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v(" Description")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("td"), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v(" Description")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("td", [_c("label", {
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
  }, [_vm._v("Valeur patrimoine")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("td", [_c("label", {
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
  }, [_vm._v("Valeur patrimoine")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("td"), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Cautions hypothécaires ")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Propriétaire")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("N° du titre foncier")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Date d'attribution")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Adresse de l'emplacement")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Longitude")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Latitude")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Date d'évaluation")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Valeur marchande")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Valeur considérée")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "text-end",
    attrs: {
      colspan: "9"
    }
  }, [_c("b", [_vm._v("Totaux")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("td"), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Promesse d'affectation hypothecaire ")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Propriétaire")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("N° du titre foncier")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Date d'attribution")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Adresse de l'emplacement")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Longitude")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Latitude")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Date d'évaluation")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Valeur marchande")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Valeur considérée")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "text-end",
    attrs: {
      colspan: "9"
    }
  }, [_c("b", [_vm._v("Totaux")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("td"), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Garantie ")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Institution")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Date d'attribution")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Date d'évaluation")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Valeur marchande")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Valeur considérée")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "text-end",
    attrs: {
      colspan: "5"
    }
  }, [_c("b", [_vm._v("Totaux")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_c("b", [_vm._v("Commentaire sur les garanties")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/parts/TableauPonderationARC.vue?vue&type=template&id=8c9fc0d2":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/parts/TableauPonderationARC.vue?vue&type=template&id=8c9fc0d2 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$ponderationData, _vm$ponderationData2, _vm$ponderationData3, _vm$ponderationData4, _vm$ponderationData5, _vm$ponderationData$r, _vm$ponderationData6;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {}, [_c("table", {
    staticClass: "table table-bordered table-responsive mb-2"
  }, [_c("thead", {
    staticClass: "bg-ed-primary"
  }, [_c("tr", {
    staticClass: "bg-grey"
  }, [_c("th", {
    staticClass: "p-0",
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      scope: "row",
      colspan: "11"
    }
  }, [_c("div", {
    staticClass: "relative p-2"
  }, [_vm._v("\n\n                        PONDERATIONS\n\n                        "), !_vm.isLoading && !_vm.errorMessage && !_vm.read_only ? _c("div", {
    staticClass: "absolute h-100 px-3 hover-white d-flex gap-2 align-items-center fs-6 fw-medium text-secondary",
    staticStyle: {
      right: "0",
      top: "0"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.computePonderationTotals.apply(null, arguments);
      }
    }
  }, [_c("i", {
    staticClass: "icofont-refresh"
  }), _vm._v("\n                            Actualiser\n                        ")]) : _vm._e()])])]), _vm._v(" "), !_vm.isLoading && !_vm.errorMessage ? _c("tr", {
    staticClass: "bg-light"
  }, [_c("th", {
    attrs: {
      colspan: "7"
    }
  }, [_vm._v("\n                    Intitulés\n                ")]), _vm._v(" "), _c("th", [_vm._v("\n                    Montants bruts\n                ")]), _vm._v(" "), _c("th", {
    attrs: {
      colspan: "2"
    }
  }, [_vm._v("\n                    Poids\n                ")]), _vm._v(" "), _c("th", [_vm._v("\n                    Montants pondérés (net)\n                ")])]) : _vm._e()]), _vm._v(" "), _c("tbody", [_vm.isLoading ? _c("tr", [_c("td", {
    attrs: {
      colspan: "11"
    }
  }, [_c("LoadingIndicator", {
    attrs: {
      text: "Calcul des Ponderations"
    }
  })], 1)]) : [_vm.errorMessage ? _c("tr", [_c("td", {
    attrs: {
      colspan: "11"
    }
  }, [_c("ErrorMessage", {
    staticClass: "border bg-white",
    attrs: {
      errorMessage: _vm.errorMessage,
      errorHint: _vm.errorHint,
      canRetry: !!_vm.dossier_credit && !!_vm.depot_de_garantie,
      retryText: "Recalculer les Ponderations"
    },
    on: {
      retry: _vm.computePonderationTotals
    }
  })], 1)]) : _vm._l((_vm$ponderationData = _vm.ponderationData) === null || _vm$ponderationData === void 0 ? void 0 : _vm$ponderationData.ponderations, function (ponderation, i) {
    var _ponderation$title, _ponderation$value;
    return _c("tr", {
      key: i
    }, [_c("td", {
      attrs: {
        colspan: "7"
      }
    }, [_vm._v("\n                            " + _vm._s((_ponderation$title = ponderation === null || ponderation === void 0 ? void 0 : ponderation.title) !== null && _ponderation$title !== void 0 ? _ponderation$title : _vm.NULL_INDICATOR) + "\n                        ")]), _vm._v(" "), _c("td", {
      staticClass: "text-right"
    }, [_vm._v("\n                            " + _vm._s(_vm.montantBrutSansPonderation(ponderation) != null ? _vm._formatNumber(_vm.montantBrutSansPonderation(ponderation)) : _vm.NULL_INDICATOR) + "\n                        ")]), _vm._v(" "), _c("td", {
      staticClass: "text-right",
      attrs: {
        colspan: "2"
      }
    }, [_vm._v("\n                            " + _vm._s((_ponderation$value = ponderation === null || ponderation === void 0 ? void 0 : ponderation.value) !== null && _ponderation$value !== void 0 ? _ponderation$value : _vm.NULL_INDICATOR) + "% \n                        ")]), _vm._v(" "), _c("td", {
      staticClass: "text-right"
    }, [_vm._v("\n                            " + _vm._s(_vm.montantAvecPonderation(ponderation) != null ? _vm._formatNumber(_vm.montantAvecPonderation(ponderation)) : _vm.NULL_INDICATOR) + "\n                        ")])]);
  })]], 2), _vm._v(" "), !_vm.isLoading && !_vm.errorMessage ? _c("tfoot", [_c("tr", {
    staticClass: "bg-light"
  }, [_c("th", {
    attrs: {
      colspan: "7"
    }
  }, [_vm._v("\n                    Total\n                ")]), _vm._v(" "), _c("th", {
    staticClass: "text-center",
    attrs: {
      colspan: "2"
    }
  }, [_vm._v("\n                    " + _vm._s(((_vm$ponderationData2 = _vm.ponderationData) === null || _vm$ponderationData2 === void 0 ? void 0 : _vm$ponderationData2.total_montant_brut_sans_ponderation) != null ? _vm._formatNumber((_vm$ponderationData3 = _vm.ponderationData) === null || _vm$ponderationData3 === void 0 ? void 0 : _vm$ponderationData3.total_montant_brut_sans_ponderation) : _vm.NULL_INDICATOR) + "\n                ")]), _vm._v(" "), _c("th", {
    staticClass: "text-right",
    attrs: {
      colspan: "2"
    }
  }, [_vm._v("\n                    " + _vm._s(((_vm$ponderationData4 = _vm.ponderationData) === null || _vm$ponderationData4 === void 0 ? void 0 : _vm$ponderationData4.total_montant_avec_ponderation) != null ? _vm._formatNumber((_vm$ponderationData5 = _vm.ponderationData) === null || _vm$ponderationData5 === void 0 ? void 0 : _vm$ponderationData5.total_montant_avec_ponderation) : _vm.NULL_INDICATOR) + "\n                ")])]), _vm._v(" "), _c("tr", {
    staticClass: "bc-teal-light text-white"
  }, [_vm._m(0), _vm._v(" "), _c("td", {
    staticClass: "text-center",
    attrs: {
      colspan: "4"
    }
  }, [_c("h3", {
    staticClass: "mb-0"
  }, [_vm._v("\n                        " + _vm._s((_vm$ponderationData$r = (_vm$ponderationData6 = _vm.ponderationData) === null || _vm$ponderationData6 === void 0 ? void 0 : _vm$ponderationData6.ratio_de_couverture) !== null && _vm$ponderationData$r !== void 0 ? _vm$ponderationData$r : _vm.NULL_INDICATOR) + "\n                    ")])])])]) : _vm._e()])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    attrs: {
      colspan: "7"
    }
  }, [_c("h6", {
    staticClass: "mb-0"
  }, [_vm._v("\n                        RATIO DE COUVERTURE\n                    ")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/filiale/CA4.vue?vue&type=style&index=0&id=2a7b2980&lang=css&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/filiale/CA4.vue?vue&type=style&index=0&id=2a7b2980&lang=css&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-2a7b2980] {\r\n\r\n    font-family: \"Google sans\";\n}\nlabel[data-v-2a7b2980] {\r\n    height: 10px;\r\n    font-size: 13px;\n}\ninput[type=text][data-v-2a7b2980],\r\ninput[type=date][data-v-2a7b2980],\r\nselect[data-v-2a7b2980] {\r\n    height: 35px;\r\n    border-color: #34495e;\r\n    color: #57606f;\r\n    font-size: 13px;\r\n    font-weight: bold;\n}\n.card-width-height[data-v-2a7b2980] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-2a7b2980] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\n.hdc[data-v-2a7b2980] {\r\n    background-color: #57606f;\n}\n.card-width-height[data-v-2a7b2980] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-2a7b2980] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\ninput[type=text][data-v-2a7b2980],\r\ninput[type=date][data-v-2a7b2980] {\r\n    width: 250px;\n}\n.engagement input[type=\"text\"][data-v-2a7b2980],\r\ninput[type=\"date\"][data-v-2a7b2980] {\r\n    width: 100% !important;\n}\n.th[data-v-2a7b2980] {\r\n    padding: 4px;\r\n    padding-bottom: 0px;\n}\nselect[data-v-2a7b2980] {\r\n    width: 250px;\n}\n.badge-sm[data-v-2a7b2980] {\r\n    display: inline-block;\r\n    width: 15px;\r\n    height: 15px;\r\n    background: rgba(255, 0, 0, 0.882);\r\n    color: white;\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    border-radius: 100%;\r\n    position: absolute;\r\n    top: -20%;\r\n    left: 55%;\r\n    text-align: center;\n}\n.relook-header[data-v-2a7b2980] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\ninput.input-box[data-v-2a7b2980] {\r\n    background: #00ffff21;\r\n    color: #000;\n}\ntextarea.input-box[data-v-2a7b2980] {\r\n    background: #00ffff21;\r\n    color: #000;\n}\n.bg-card-ana[data-v-2a7b2980] {\r\n    background-color: rgb(205, 225, 231);\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/filiale/CA4.vue?vue&type=style&index=0&id=2a7b2980&lang=css&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/filiale/CA4.vue?vue&type=style&index=0&id=2a7b2980&lang=css&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA4_vue_vue_type_style_index_0_id_2a7b2980_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CA4.vue?vue&type=style&index=0&id=2a7b2980&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/filiale/CA4.vue?vue&type=style&index=0&id=2a7b2980&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA4_vue_vue_type_style_index_0_id_2a7b2980_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA4_vue_vue_type_style_index_0_id_2a7b2980_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/contreanalyse/cofina/filiale/CA4.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/components/contreanalyse/cofina/filiale/CA4.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CA4_vue_vue_type_template_id_2a7b2980_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CA4.vue?vue&type=template&id=2a7b2980&scoped=true */ "./resources/js/components/contreanalyse/cofina/filiale/CA4.vue?vue&type=template&id=2a7b2980&scoped=true");
/* harmony import */ var _CA4_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CA4.vue?vue&type=script&lang=js */ "./resources/js/components/contreanalyse/cofina/filiale/CA4.vue?vue&type=script&lang=js");
/* harmony import */ var _CA4_vue_vue_type_style_index_0_id_2a7b2980_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CA4.vue?vue&type=style&index=0&id=2a7b2980&lang=css&scoped=true */ "./resources/js/components/contreanalyse/cofina/filiale/CA4.vue?vue&type=style&index=0&id=2a7b2980&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CA4_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CA4_vue_vue_type_template_id_2a7b2980_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _CA4_vue_vue_type_template_id_2a7b2980_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2a7b2980",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/contreanalyse/cofina/filiale/CA4.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/contreanalyse/cofina/filiale/CA4.vue?vue&type=script&lang=js":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/cofina/filiale/CA4.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CA4_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CA4.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/filiale/CA4.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CA4_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/contreanalyse/cofina/filiale/CA4.vue?vue&type=style&index=0&id=2a7b2980&lang=css&scoped=true":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/cofina/filiale/CA4.vue?vue&type=style&index=0&id=2a7b2980&lang=css&scoped=true ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA4_vue_vue_type_style_index_0_id_2a7b2980_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CA4.vue?vue&type=style&index=0&id=2a7b2980&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/filiale/CA4.vue?vue&type=style&index=0&id=2a7b2980&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/contreanalyse/cofina/filiale/CA4.vue?vue&type=template&id=2a7b2980&scoped=true":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/cofina/filiale/CA4.vue?vue&type=template&id=2a7b2980&scoped=true ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA4_vue_vue_type_template_id_2a7b2980_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA4_vue_vue_type_template_id_2a7b2980_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA4_vue_vue_type_template_id_2a7b2980_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CA4.vue?vue&type=template&id=2a7b2980&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/filiale/CA4.vue?vue&type=template&id=2a7b2980&scoped=true");


/***/ }),

/***/ "./resources/js/components/parts/TableauPonderationARC.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/parts/TableauPonderationARC.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TableauPonderationARC_vue_vue_type_template_id_8c9fc0d2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TableauPonderationARC.vue?vue&type=template&id=8c9fc0d2 */ "./resources/js/components/parts/TableauPonderationARC.vue?vue&type=template&id=8c9fc0d2");
/* harmony import */ var _TableauPonderationARC_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TableauPonderationARC.vue?vue&type=script&lang=js */ "./resources/js/components/parts/TableauPonderationARC.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TableauPonderationARC_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _TableauPonderationARC_vue_vue_type_template_id_8c9fc0d2__WEBPACK_IMPORTED_MODULE_0__.render,
  _TableauPonderationARC_vue_vue_type_template_id_8c9fc0d2__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/parts/TableauPonderationARC.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/parts/TableauPonderationARC.vue?vue&type=script&lang=js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/parts/TableauPonderationARC.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableauPonderationARC_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TableauPonderationARC.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/parts/TableauPonderationARC.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableauPonderationARC_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/parts/TableauPonderationARC.vue?vue&type=template&id=8c9fc0d2":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/parts/TableauPonderationARC.vue?vue&type=template&id=8c9fc0d2 ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TableauPonderationARC_vue_vue_type_template_id_8c9fc0d2__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TableauPonderationARC_vue_vue_type_template_id_8c9fc0d2__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TableauPonderationARC_vue_vue_type_template_id_8c9fc0d2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TableauPonderationARC.vue?vue&type=template&id=8c9fc0d2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/parts/TableauPonderationARC.vue?vue&type=template&id=8c9fc0d2");


/***/ })

}]);