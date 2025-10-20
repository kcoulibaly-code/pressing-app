"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_avisscr_filiale_AV2_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/avisscr/filiale/AV2.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/avisscr/filiale/AV2.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/ContextMenu */ "./resources/js/components/shared/ContextMenu.vue");
/* harmony import */ var _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/ContextMenuItem */ "./resources/js/components/shared/ContextMenuItem.vue");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../helpers/helper */ "./resources/js/helpers/helper.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }









window.$ = window.jQuery = __webpack_require__(/*! jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "caracteristique-du-pret",
  display: "Caractéristiques du prêt",
  components: {
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.ChevronDownIcon,
    ContextMenu: _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__["default"],
    ContextMenuItem: _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__["default"],
    AirplayIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.AirplayIcon,
    BookOpenIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.BookOpenIcon
  },
  props: {
    meta_data: Object,
    tb_name: String,
    tb_display_name: String
  },
  created: function created() {

    // Credit.loadClients("ismael.kamate@cofinacorp.com")
    //   .then((res) => {
    //     this.clientData(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  },
  mounted: function mounted() {
    this.loadRetrieved();
    this.loadTbAttrs(); // charge les attributs + sous attributs des tables
    this.tableClosedOrOpened();
    // helper.loadCurrencyFormatter();
    // let loadDossier = new Promise(async (resolve, inject) => {
    //      resolve(await this.meta_data)
    // })
    // loadDossier.then(res => {
    //     this.loadRetrieved()
    // })        // this.crdLd();
  },
  data: function data() {
    var vm = this;
    return {
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_2__["default"].host,
      authcheck: false,
      authcheckUsr: null,
      authcheckStatus: null,
      watchInPause: false,
      initLoad: true,
      seen: true,
      seen1: true,
      seen2: true,
      credits: [],
      clients: [],
      dossier_credit: null,
      encours: null,
      placeholder: "Chercher clients",
      matcli: "matcli",
      nomcli: "nomcli",
      meta_parseable: {
        cred_pub_key: this.meta_data["cred_pub_key"],
        tb_name: this.tb_name
      },
      formDataToBeWatched: {
        notes: [],
        taux_credit_propose_analyste: "",
        montant_credit_propo_analyste: "",
        duree_credit_propo_analyste: "",
        mode_paiement_analyste: "",
        montant_frais_propo_analyste: "",
        montant_frais_risque_propo_analyste: "",
        justification_montant_credit: "",
        justification_taux_credit: "",
        justification_duree_credit: "",
        justification_mode_paiement: "",
        justification_frais_dossier: "",
        justification_frais_risque: "",
        justification_frais_assurance: "",
        justification_periode_grace: "",
        montant_frais_assurance_propo_analyste: "",
        periode_grace_proposition_src: "",
        depot_garantie_srcf: "",
        montant_crsd: 0,
        montant_pep: 0,
        justification_depot_garantie_src: "",
        justification_montant_crsd_src: "",
        montant_crsd_src: "",
        montant_pep_arc: "",
        montant_pep_src: "",
        justification_montant_pep_src: ""
      },
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
      listingNote: false,
      denomination_client: null,
      montant_credit: null,
      montant_demander: null,
      taux_credit: null,
      taux_credit_propose: null,
      duree_credit: null,
      periodicite: null,
      mode_paiement: null,
      montant_frais: null,
      montant_frais_risque: null,
      duree_credit_demande: null,
      mode_paiement_demande: null,
      montant_credit_propo_analyste_filiale: null,
      taux_credit_propose_analyste_filiale: null,
      duree_credit_propo_analyste_filiale: null,
      mode_paiement_analyste_filiale: null,
      montant_frais_propo_analyste_filiale: null,
      montant_frais_risque_propo_analyste_filiale: null,
      montant_frais_assurance: null,
      montant_frais_assurance_propo_analyste_filiale: null,
      periode_grace_demande_client: null,
      periode_grace_proposition_agence: null,
      frais_annexe_v: null,
      depot_garantie: null,
      montant_crsd: null,
      montant_pep: null,
      depot_garantie_arcf: null,
      montant_crsd_arc: null,
      montant_pep_arc: null
    };
  },
  methods: _defineProperty(_defineProperty(_defineProperty(_defineProperty({
    tableClosedOrOpened: function tableClosedOrOpened() {
      this.seen = this.fetchClosedTables(this.tb_name + this.meta_data['cred_pub_key']);
    },
    openNotesModal: function openNotesModal() {
      var listing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.listingNote = listing;
      this.$modal.show(this.tb_name);
    },
    formDataVars: function formDataVars(event) {
      this.formDataToBeWatched[event[0]] = event[1];
      this.handleInput();
    },
    loadRetrieved: function loadRetrieved() {
      var _this$meta_data$dossi;
      var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];
      var applied_templ_name = (_this$meta_data$dossi = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi.applied_templ_name;
      var tbArrays = this.determineCredPubTables(applied_templ_name);
      if (this.meta_data['dossier_credit'][createdKey] === undefined) {
        // this.dossier_credit = tbFetcheData['dossier_credit'];

        // this.frais_annexe_v = this.meta_data.dossier_credit?.cred_pub_tb_1

        if (this.meta_data['dossier_credit'][tbArrays[1]] != undefined && this.meta_data['dossier_credit']["cred_pub_tb_47"] != undefined) {
          var _this$meta_data$dossi2, _this$meta_data$dossi3, _this$meta_data$dossi4, _this$meta_data$dossi5, _this$meta_data$dossi6, _this$meta_data$dossi7, _this$meta_data$dossi8, _this$meta_data$dossi9, _this$meta_data$dossi0, _this$meta_data$dossi1, _this$meta_data$dossi10, _this$meta_data$dossi11, _this$meta_data$dossi12, _this$meta_data$dossi13, _this$meta_data$dossi14, _this$meta_data$dossi15, _this$meta_data$dossi16, _this$meta_data$dossi17, _this$meta_data$dossi18, _this$meta_data$dossi19, _this$meta_data$dossi20, _this$meta_data$dossi21, _this$meta_data$dossi22, _this$meta_data$dossi29, _this$meta_data$dossi30, _this$meta_data$dossi31, _this$meta_data$dossi32, _this$meta_data$dossi33, _this$meta_data$dossi34, _this$meta_data$dossi35, _this$meta_data$dossi36;
          this.formDataToBeWatched.montant_credit_propo_analyste = (_this$meta_data$dossi2 = this.meta_data['dossier_credit']["cred_pub_tb_47"]) === null || _this$meta_data$dossi2 === void 0 ? void 0 : _this$meta_data$dossi2.montant_credit_propo_analyste;
          this.formDataToBeWatched.taux_credit_propose_analyste = (_this$meta_data$dossi3 = this.meta_data['dossier_credit']["cred_pub_tb_47"]) === null || _this$meta_data$dossi3 === void 0 ? void 0 : _this$meta_data$dossi3.taux_credit_propose_analyste;
          this.formDataToBeWatched.duree_credit_propo_analyste = (_this$meta_data$dossi4 = this.meta_data['dossier_credit']["cred_pub_tb_47"]) === null || _this$meta_data$dossi4 === void 0 ? void 0 : _this$meta_data$dossi4.duree_credit_propo_analyste;
          this.formDataToBeWatched.mode_paiement_analyste = (_this$meta_data$dossi5 = this.meta_data['dossier_credit']["cred_pub_tb_47"]) === null || _this$meta_data$dossi5 === void 0 ? void 0 : _this$meta_data$dossi5.mode_paiement_analyste;
          this.formDataToBeWatched.montant_frais_risque_propo_analyste = (_this$meta_data$dossi6 = this.meta_data['dossier_credit']["cred_pub_tb_47"]) === null || _this$meta_data$dossi6 === void 0 ? void 0 : _this$meta_data$dossi6.montant_frais_risque_propo_analyste;
          this.formDataToBeWatched.montant_frais_propo_analyste = (_this$meta_data$dossi7 = this.meta_data['dossier_credit']["cred_pub_tb_47"]) === null || _this$meta_data$dossi7 === void 0 ? void 0 : _this$meta_data$dossi7.montant_frais_propo_analyste;
          this.formDataToBeWatched.montant_frais_assurance_propo_analyste = (_this$meta_data$dossi8 = this.meta_data['dossier_credit']["cred_pub_tb_47"]) === null || _this$meta_data$dossi8 === void 0 ? void 0 : _this$meta_data$dossi8.montant_frais_assurance_propo_analyste;
          this.formDataToBeWatched.periode_grace_proposition_src = (_this$meta_data$dossi9 = this.meta_data['dossier_credit']["cred_pub_tb_21"]) === null || _this$meta_data$dossi9 === void 0 ? void 0 : _this$meta_data$dossi9.nombre_mois_propose;
          this.formDataToBeWatched.depot_garantie_srcf = (_this$meta_data$dossi0 = this.meta_data['dossier_credit']["cred_pub_tb_47"]) === null || _this$meta_data$dossi0 === void 0 ? void 0 : _this$meta_data$dossi0.depot_garantie_arcf;
          this.formDataToBeWatched.montant_crsd_src = (_this$meta_data$dossi1 = this.meta_data['dossier_credit']["cred_pub_tb_47"]) === null || _this$meta_data$dossi1 === void 0 ? void 0 : _this$meta_data$dossi1.montant_crsd;
          this.formDataToBeWatched.montant_pep_src = (_this$meta_data$dossi10 = this.meta_data['dossier_credit']["cred_pub_tb_47"]) === null || _this$meta_data$dossi10 === void 0 ? void 0 : _this$meta_data$dossi10.montant_pep;
          this.montant_credit = (_this$meta_data$dossi11 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi11 === void 0 ? void 0 : _this$meta_data$dossi11.montant_credit;
          this.montant_demander = (_this$meta_data$dossi12 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi12 === void 0 ? void 0 : _this$meta_data$dossi12.montant_demander;
          this.montant_credit_propo_analyste_filiale = (_this$meta_data$dossi13 = this.meta_data['dossier_credit']["cred_pub_tb_47"]) === null || _this$meta_data$dossi13 === void 0 ? void 0 : _this$meta_data$dossi13.montant_credit_propo_analyste;
          this.taux_credit = (_this$meta_data$dossi14 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi14 === void 0 ? void 0 : _this$meta_data$dossi14.taux_credit;
          this.taux_credit_propose = (_this$meta_data$dossi15 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi15 === void 0 ? void 0 : _this$meta_data$dossi15.taux_credit_propose;
          this.taux_credit_propose_analyste_filiale = (_this$meta_data$dossi16 = this.meta_data['dossier_credit']["cred_pub_tb_47"]) === null || _this$meta_data$dossi16 === void 0 ? void 0 : _this$meta_data$dossi16.taux_credit_propose_analyste;
          this.duree_credit = (_this$meta_data$dossi17 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi17 === void 0 ? void 0 : _this$meta_data$dossi17.duree_credit;
          this.duree_credit_propo_analyste_filiale = (_this$meta_data$dossi18 = this.meta_data['dossier_credit']["cred_pub_tb_47"]) === null || _this$meta_data$dossi18 === void 0 ? void 0 : _this$meta_data$dossi18.duree_credit_propo_analyste;
          this.periodicite = (_this$meta_data$dossi19 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi19 === void 0 ? void 0 : _this$meta_data$dossi19.periodicite;
          this.mode_paiement = (_this$meta_data$dossi20 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi20 === void 0 ? void 0 : _this$meta_data$dossi20.mode_paiement;
          this.mode_paiement_analyste_filiale = (_this$meta_data$dossi21 = this.meta_data['dossier_credit']["cred_pub_tb_47"]) === null || _this$meta_data$dossi21 === void 0 ? void 0 : _this$meta_data$dossi21.mode_paiement_analyste;
          if (((_this$meta_data$dossi22 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi22 === void 0 ? void 0 : _this$meta_data$dossi22.frais) != undefined) {
            var _this$meta_data$dossi23, _this$meta_data$dossi24, _this$meta_data$dossi25, _this$meta_data$dossi26, _this$meta_data$dossi27, _this$meta_data$dossi28;
            this.montant_frais = (_this$meta_data$dossi23 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi23 === void 0 || (_this$meta_data$dossi23 = _this$meta_data$dossi23.frais[0]) === null || _this$meta_data$dossi23 === void 0 ? void 0 : _this$meta_data$dossi23.montant_frais;
            this.montant_frais_propo_analyste_filiale = (_this$meta_data$dossi24 = this.meta_data['dossier_credit']["cred_pub_tb_47"]) === null || _this$meta_data$dossi24 === void 0 ? void 0 : _this$meta_data$dossi24.montant_frais_propo_analyste;
            this.montant_frais_risque = (_this$meta_data$dossi25 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi25 === void 0 || (_this$meta_data$dossi25 = _this$meta_data$dossi25.frais[2]) === null || _this$meta_data$dossi25 === void 0 ? void 0 : _this$meta_data$dossi25.montant_frais;
            this.montant_frais_risque_propo_analyste_filiale = (_this$meta_data$dossi26 = this.meta_data['dossier_credit']["cred_pub_tb_47"]) === null || _this$meta_data$dossi26 === void 0 ? void 0 : _this$meta_data$dossi26.montant_frais_risque_propo_analyste;
            this.montant_frais_assurance = (_this$meta_data$dossi27 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi27 === void 0 || (_this$meta_data$dossi27 = _this$meta_data$dossi27.frais[1]) === null || _this$meta_data$dossi27 === void 0 ? void 0 : _this$meta_data$dossi27.montant_frais;
            this.montant_frais_assurance_propo_analyste_filiale = (_this$meta_data$dossi28 = this.meta_data['dossier_credit']["cred_pub_tb_47"]) === null || _this$meta_data$dossi28 === void 0 ? void 0 : _this$meta_data$dossi28.montant_frais_assurance_propo_analyste;
          }
          this.depot_garantie = (_this$meta_data$dossi29 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi29 === void 0 ? void 0 : _this$meta_data$dossi29.garantie;
          this.depot_garantie_arcf = (_this$meta_data$dossi30 = this.meta_data['dossier_credit']["cred_pub_tb_47"]) === null || _this$meta_data$dossi30 === void 0 ? void 0 : _this$meta_data$dossi30.depot_garantie_arcf;
          this.montant_crsd = (_this$meta_data$dossi31 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi31 === void 0 ? void 0 : _this$meta_data$dossi31.montant_crsd;
          this.montant_crsd_arc = (_this$meta_data$dossi32 = this.meta_data['dossier_credit']["cred_pub_tb_47"]) === null || _this$meta_data$dossi32 === void 0 ? void 0 : _this$meta_data$dossi32.montant_crsd;
          this.montant_pep = (_this$meta_data$dossi33 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi33 === void 0 ? void 0 : _this$meta_data$dossi33.montant_pep;
          this.montant_pep_arc = (_this$meta_data$dossi34 = this.meta_data['dossier_credit']["cred_pub_tb_47"]) === null || _this$meta_data$dossi34 === void 0 ? void 0 : _this$meta_data$dossi34.montant_pep;
          this.duree_credit_demande = (_this$meta_data$dossi35 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi35 === void 0 ? void 0 : _this$meta_data$dossi35.duree_credit_demande;
          this.mode_paiement_demande = (_this$meta_data$dossi36 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi36 === void 0 ? void 0 : _this$meta_data$dossi36.mode_paiement_demande;
        }
      }
      if (lentb.length > 0) {
        var _this$meta_data$dossi37, _this$meta_data$dossi66;
        this.frais_annexe_v = (_this$meta_data$dossi37 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi37 === void 0 ? void 0 : _this$meta_data$dossi37.cred_pub_tb_1;
        if (this.meta_data["dossier_credit"][createdKey] != undefined) {
          var _this$meta_data$dossi38, _this$meta_data$dossi39, _this$meta_data$dossi40, _this$meta_data$dossi41, _this$meta_data$dossi42, _this$meta_data$dossi43, _this$meta_data$dossi44, _this$meta_data$dossi45, _this$meta_data$dossi46, _this$meta_data$dossi47, _this$meta_data$dossi48, _this$meta_data$dossi49, _this$meta_data$dossi50, _this$meta_data$dossi57, _this$meta_data$dossi58, _this$meta_data$dossi59, _this$meta_data$dossi60, _this$meta_data$dossi61, _this$meta_data$dossi62, _this$meta_data$dossi63, _this$meta_data$dossi64, _this$meta_data$dossi65;
          this.formDataToBeWatched = this.meta_data["dossier_credit"][createdKey];
          this.montant_credit = (_this$meta_data$dossi38 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi38 === void 0 ? void 0 : _this$meta_data$dossi38.montant_credit;
          this.montant_credit_propo_analyste_filiale = (_this$meta_data$dossi39 = this.meta_data['dossier_credit']["cred_pub_tb_47"]) === null || _this$meta_data$dossi39 === void 0 ? void 0 : _this$meta_data$dossi39.montant_credit_propo_analyste;
          this.montant_demander = (_this$meta_data$dossi40 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi40 === void 0 ? void 0 : _this$meta_data$dossi40.montant_demander;
          this.taux_credit = (_this$meta_data$dossi41 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi41 === void 0 ? void 0 : _this$meta_data$dossi41.taux_credit;
          this.taux_credit_propose = (_this$meta_data$dossi42 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi42 === void 0 ? void 0 : _this$meta_data$dossi42.taux_credit_propose;
          this.taux_credit_propose_analyste_filiale = (_this$meta_data$dossi43 = this.meta_data['dossier_credit']["cred_pub_tb_47"]) === null || _this$meta_data$dossi43 === void 0 ? void 0 : _this$meta_data$dossi43.taux_credit_propose_analyste;
          this.duree_credit = (_this$meta_data$dossi44 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi44 === void 0 ? void 0 : _this$meta_data$dossi44.duree_credit;
          this.duree_credit_demande = (_this$meta_data$dossi45 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi45 === void 0 ? void 0 : _this$meta_data$dossi45.duree_credit_demande;
          this.duree_credit_propo_analyste_filiale = (_this$meta_data$dossi46 = this.meta_data['dossier_credit']["cred_pub_tb_47"]) === null || _this$meta_data$dossi46 === void 0 ? void 0 : _this$meta_data$dossi46.duree_credit_propo_analyste;
          this.periodicite = (_this$meta_data$dossi47 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi47 === void 0 ? void 0 : _this$meta_data$dossi47.periodicite;
          this.mode_paiement = (_this$meta_data$dossi48 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi48 === void 0 ? void 0 : _this$meta_data$dossi48.mode_paiement;
          this.mode_paiement_analyste_filiale = (_this$meta_data$dossi49 = this.meta_data['dossier_credit']["cred_pub_tb_47"]) === null || _this$meta_data$dossi49 === void 0 ? void 0 : _this$meta_data$dossi49.mode_paiement_analyste;
          if (((_this$meta_data$dossi50 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi50 === void 0 ? void 0 : _this$meta_data$dossi50.frais) != undefined) {
            var _this$meta_data$dossi51, _this$meta_data$dossi52, _this$meta_data$dossi53, _this$meta_data$dossi54, _this$meta_data$dossi55, _this$meta_data$dossi56;
            this.montant_frais = (_this$meta_data$dossi51 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi51 === void 0 || (_this$meta_data$dossi51 = _this$meta_data$dossi51.frais[0]) === null || _this$meta_data$dossi51 === void 0 ? void 0 : _this$meta_data$dossi51.montant_frais;
            this.montant_frais_propo_analyste_filiale = (_this$meta_data$dossi52 = this.meta_data['dossier_credit']["cred_pub_tb_47"]) === null || _this$meta_data$dossi52 === void 0 ? void 0 : _this$meta_data$dossi52.montant_frais_propo_analyste;
            this.montant_frais_risque = (_this$meta_data$dossi53 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi53 === void 0 || (_this$meta_data$dossi53 = _this$meta_data$dossi53.frais[2]) === null || _this$meta_data$dossi53 === void 0 ? void 0 : _this$meta_data$dossi53.montant_frais;
            this.montant_frais_risque_propo_analyste_filiale = (_this$meta_data$dossi54 = this.meta_data['dossier_credit']["cred_pub_tb_47"]) === null || _this$meta_data$dossi54 === void 0 ? void 0 : _this$meta_data$dossi54.montant_frais_risque_propo_analyste;
            this.montant_frais_assurance = (_this$meta_data$dossi55 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi55 === void 0 || (_this$meta_data$dossi55 = _this$meta_data$dossi55.frais[1]) === null || _this$meta_data$dossi55 === void 0 ? void 0 : _this$meta_data$dossi55.montant_frais;
            this.montant_frais_assurance_propo_analyste_filiale = (_this$meta_data$dossi56 = this.meta_data['dossier_credit']["cred_pub_tb_47"]) === null || _this$meta_data$dossi56 === void 0 ? void 0 : _this$meta_data$dossi56.montant_frais_assurance_propo_analyste;
          }
          this.mode_paiement_demande = (_this$meta_data$dossi57 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi57 === void 0 ? void 0 : _this$meta_data$dossi57.mode_paiement_demande;
          this.periode_grace_demande_client = (_this$meta_data$dossi58 = this.meta_data['dossier_credit']["cred_pub_tb_21"]) === null || _this$meta_data$dossi58 === void 0 ? void 0 : _this$meta_data$dossi58.nombre_mois_demande;
          this.periode_grace_proposition_agence = (_this$meta_data$dossi59 = this.meta_data['dossier_credit']["cred_pub_tb_21"]) === null || _this$meta_data$dossi59 === void 0 ? void 0 : _this$meta_data$dossi59.nombre_mois_propose;
          this.depot_garantie = (_this$meta_data$dossi60 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi60 === void 0 ? void 0 : _this$meta_data$dossi60.garantie;
          this.depot_garantie_arcf = (_this$meta_data$dossi61 = this.meta_data['dossier_credit']["cred_pub_tb_47"]) === null || _this$meta_data$dossi61 === void 0 ? void 0 : _this$meta_data$dossi61.depot_garantie_arcf;
          this.montant_crsd = (_this$meta_data$dossi62 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi62 === void 0 ? void 0 : _this$meta_data$dossi62.montant_crsd;
          this.montant_crsd_arc = (_this$meta_data$dossi63 = this.meta_data['dossier_credit']["cred_pub_tb_47"]) === null || _this$meta_data$dossi63 === void 0 ? void 0 : _this$meta_data$dossi63.montant_crsd;
          this.montant_pep = (_this$meta_data$dossi64 = this.meta_data['dossier_credit'][tbArrays[1]]) === null || _this$meta_data$dossi64 === void 0 ? void 0 : _this$meta_data$dossi64.montant_pep;
          this.montant_pep_arc = (_this$meta_data$dossi65 = this.meta_data['dossier_credit']["cred_pub_tb_47"]) === null || _this$meta_data$dossi65 === void 0 ? void 0 : _this$meta_data$dossi65.montant_pep;
        }
        // Close table by default
        this.defaultRetract(false, (_this$meta_data$dossi66 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi66 === void 0 ? void 0 : _this$meta_data$dossi66.applied_templ_id);
      }
    },
    handleInput: function handleInput(evt) {
      //   this.formDataToBeWatched['frais'] = this.frais
      //   this.formDataToBeWatched.val_total_frais = this.totalFrais;

      //   let duree = 0
      //   let taux = 0
      //   let montant = 0
      //   let frais = 0
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
          // this.$Progress.finish();
          this.$emit("autosaving");
          // console.log(response)

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
    retract1: function retract1() {
      this.seen1 = !this.seen1;
    },
    retract2: function retract2() {
      this.seen2 = !this.seen2;
    },
    deleteTB: function deleteTB() {
      if (confirm("Êtes-vous sûr de vouloir supprimer ce tableau ?")) {
        this.$emit("delete-tb", {
          tb_name: this.tb_name
        });
      }
    },
    loadTbAttrs: function loadTbAttrs() {
      var l = [];
      var topdivel = this.$refs.topdiv;
      // let k = document.querySelectorAll('.subdiv')
      var k = document.querySelectorAll(".subdiv" + this.tb_name);
      // console.log(k)
      k.forEach(function (e) {
        l.push(e.innerText);
      });
      var p = {
        name_of_title: topdivel.innerText,
        list_of_content: l,
        id: "av2-head"
      };
      // console.log(p)
      this.$emit("load-buffer", p);
    },
    credData: function credData(res) {
      this.credits = res.data;
    },
    onSlctMatCli: function onSlctMatCli(obj) {
      var _this$formDataToBeWat,
        _this = this;
      this.formDataToBeWatched.matricule_client = obj.matcli;
      this.formDataToBeWatched.nom_client = obj.nomcli;
      this.autoRenamer();
      _services_credit_service__WEBPACK_IMPORTED_MODULE_4__["default"].encours((_this$formDataToBeWat = this.formDataToBeWatched) === null || _this$formDataToBeWat === void 0 ? void 0 : _this$formDataToBeWat.matricule_client).then(function (res) {
        _this.encoursData(res);
      })["catch"](function (err) {
        console.log(err);
      });
    }
  }, "handleInput", function handleInput(evt) {}), "send2Backend0", function send2Backend0(res) {
    this.authcheck = true;
    this.authcheckUsr = res.data;
    this.authcheckStatus = res.status;
    if (this.authcheckStatus === 401) {
      // window.location.href = "/login";
    }
    if (this.authcheck === true) {
      this.$axios.post(this.ebapisHost + "creditbuilder/api/v1/updatedoctitle/", {
        user: this.authcheckUsr,
        cred_pub_key: this.meta_parseable.cred_pub_key,
        filledData: {
          doss_name: this.formDataToBeWatched.nom_client + "_" + this.formDataToBeWatched.prefixe
        }
      }).then(function (response) {
        var tbFetcheData = response.data;
      }.bind(this))["catch"](function (error) {
        this.$Progress.finish();
        console.log(error);
      }.bind(this));
    } else {
      alert("Unauthenticated");
    }
  }), "autoRenamer", function autoRenamer() {
    var _this2 = this;
    _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["default"].loadUserData().then(function (res) {
      _this2.send2Backend0(res);
    })["catch"](function (err) {
      _this2.loadWithError(err);
    });
  }), "instruction2", function instruction2(id) {
    var id0 = '#' + id;
    window.$(id0).modal('show');
  }),
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
  },
  computed: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/avisscr/filiale/AV2.vue?vue&type=template&id=0f07e27e&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/avisscr/filiale/AV2.vue?vue&type=template&id=0f07e27e&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "row bg-light card-width-height"
  }, [_vm.seen === true ? _c("div", {
    staticClass: "card card-width-height"
  }, [_c("ContextMenu", {
    ref: "menu",
    attrs: {
      cred_pub_key: _vm.meta_parseable.cred_pub_key,
      id: _vm.tb_name,
      contextList: _vm.contextList
    }
  }), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc pb-0 pt-2"
  }, [_c("h3", {
    ref: "topdiv",
    staticClass: "head",
    attrs: {
      id: "av2-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                                " + _vm._s(_vm.tb_display_name) + " : Caractéristiques du prêt\n\n                            ")]), _vm._v(" "), _c("div", {
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
    staticClass: "badge-sm"
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
    attrs: {
      id: "donnees_client"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "montant_demander"
    }
  }, [_vm._v("Montant de crédit demandé\n                            ")]), _vm._v(" "), _c("currency-input", {
    attrs: {
      value: _vm.montant_demander,
      id: "montant_demander",
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(0), _vm._v(" "), _c("currency-input", {
    attrs: {
      value: _vm.montant_credit,
      id: "montant_credit",
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(1), _vm._v(" "), _c("currency-input", {
    attrs: {
      value: _vm.montant_credit_propo_analyste_filiale,
      id: "montant_credit_propo_analyste_filiale",
      disabled: ""
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(2), _vm._v(" "), _c("currency-input", {
    staticClass: "input-box",
    attrs: {
      value: _vm.formDataToBeWatched.montant_credit_propo_analyste,
      id: "montant_credit_propo_analyste"
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pl-4 mb-3"
  }, [_vm._m(3), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.formDataToBeWatched.justification_montant_credit,
      expression: "formDataToBeWatched.justification_montant_credit",
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
      value: _vm.formDataToBeWatched.justification_montant_credit
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.formDataToBeWatched, "justification_montant_credit", $event.target.value);
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(4), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control",
    attrs: {
      readonly: "",
      "float": "",
      required: "",
      value: _vm.taux_credit,
      id: "taux_credit"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(5), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control",
    attrs: {
      readonly: "",
      "float": "",
      required: "",
      value: _vm.taux_credit_propose,
      id: "taux_credit_propose"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(6), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control",
    attrs: {
      "float": "",
      required: "",
      value: _vm.taux_credit_propose_analyste_filiale,
      id: "taux_credit_propose_analyste_filiale",
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(7), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control input-box",
    attrs: {
      "float": "",
      required: "",
      value: _vm.formDataToBeWatched.taux_credit_propose_analyste,
      id: "taux_credit_propose_analyste"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pl-4 mb-3"
  }, [_vm._m(8), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.formDataToBeWatched.justification_taux_credit,
      expression: "formDataToBeWatched.justification_taux_credit",
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
      value: _vm.formDataToBeWatched.justification_taux_credit
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.formDataToBeWatched, "justification_taux_credit", $event.target.value);
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(9), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.duree_credit_demande,
      expression: "duree_credit_demande",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      readonly: "",
      required: "",
      type: "number",
      id: "duree_credit_demande",
      disabled: ""
    },
    domProps: {
      value: _vm.duree_credit_demande
    },
    on: {
      change: function change($event) {
        _vm.duree_credit_demande = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(10), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.duree_credit,
      expression: "duree_credit",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      readonly: "",
      required: "",
      step: "any",
      type: "number",
      id: "duree_credit"
    },
    domProps: {
      value: _vm.duree_credit
    },
    on: {
      change: function change($event) {
        _vm.duree_credit = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(11), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.duree_credit_propo_analyste_filiale,
      expression: "duree_credit_propo_analyste_filiale",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      required: "",
      step: "any",
      type: "number",
      id: "duree_credit_propo_analyste_filiale",
      disabled: ""
    },
    domProps: {
      value: _vm.duree_credit_propo_analyste_filiale
    },
    on: {
      change: function change($event) {
        _vm.duree_credit_propo_analyste_filiale = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(12), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.formDataToBeWatched.duree_credit_propo_analyste,
      expression: "formDataToBeWatched.duree_credit_propo_analyste",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control input-box",
    attrs: {
      required: "",
      step: "any",
      type: "number",
      id: "duree_credit_propo_analyste"
    },
    domProps: {
      value: _vm.formDataToBeWatched.duree_credit_propo_analyste
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.formDataToBeWatched, "duree_credit_propo_analyste", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pl-4 mb-3"
  }, [_vm._m(13), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.formDataToBeWatched.justification_duree_credit,
      expression: "formDataToBeWatched.justification_duree_credit",
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
      value: _vm.formDataToBeWatched.justification_duree_credit
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.formDataToBeWatched, "justification_duree_credit", $event.target.value);
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(14), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.mode_paiement_demande,
      expression: "mode_paiement_demande",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      required: "",
      step: "any",
      type: "text",
      id: "mode_paiement_demande",
      disabled: ""
    },
    domProps: {
      value: _vm.mode_paiement_demande
    },
    on: {
      change: function change($event) {
        _vm.mode_paiement_demande = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(15), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.mode_paiement,
      expression: "mode_paiement",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      required: "",
      step: "any",
      type: "text",
      id: "mode_paiement",
      disabled: ""
    },
    domProps: {
      value: _vm.mode_paiement
    },
    on: {
      change: function change($event) {
        _vm.mode_paiement = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(16), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.mode_paiement_analyste_filiale,
      expression: "mode_paiement_analyste_filiale",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      required: "",
      step: "any",
      type: "text",
      id: "mode_paiement_analyste_filiale",
      disabled: ""
    },
    domProps: {
      value: _vm.mode_paiement_analyste_filiale
    },
    on: {
      change: function change($event) {
        _vm.mode_paiement_analyste_filiale = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(17), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.mode_paiement_analyste,
      expression: "\n                                    formDataToBeWatched.mode_paiement_analyste\n                                "
    }],
    staticClass: "form-select single-select input-box",
    attrs: {
      required: "",
      id: "mode_paiement_analyste"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formDataToBeWatched, "mode_paiement_analyste", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      selected: "",
      disabled: "",
      hidden: ""
    }
  }, [_vm._v("---")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Mensuelle"
    }
  }, [_vm._v("Mensuelle")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Bi-mensuel"
    }
  }, [_vm._v("Bi-mensuel")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Trimestriel"
    }
  }, [_vm._v("Trimestriel")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Semestriel"
    }
  }, [_vm._v("Semestriel")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "In fine"
    }
  }, [_vm._v("In fine")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pl-4 mb-3"
  }, [_vm._m(18), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.formDataToBeWatched.justification_mode_paiement,
      expression: "formDataToBeWatched.justification_mode_paiement",
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
      value: _vm.formDataToBeWatched.justification_mode_paiement
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.formDataToBeWatched, "justification_mode_paiement", $event.target.value);
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(19), _vm._v(" "), _c("currency-input", {
    attrs: {
      value: _vm.montant_frais,
      id: "montant_frais",
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(20), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control",
    attrs: {
      value: _vm.montant_frais_propo_analyste_filiale,
      id: "montant_frais_propo_analyste_filiale",
      disabled: ""
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pl-4"
  }, [_vm._m(21), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control input-box",
    attrs: {
      value: _vm.formDataToBeWatched.montant_frais_propo_analyste,
      id: "montant_frais_propo_analyste"
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pl-4 mb-3"
  }, [_vm._m(22), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.formDataToBeWatched.justification_frais_dossier,
      expression: "formDataToBeWatched.justification_frais_dossier",
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
      value: _vm.formDataToBeWatched.justification_frais_dossier
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.formDataToBeWatched, "justification_frais_dossier", $event.target.value);
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(23), _vm._v(" "), _c("currency-input", {
    attrs: {
      value: _vm.montant_frais_risque,
      id: "montant_frais_risque",
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(24), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control",
    attrs: {
      value: _vm.montant_frais_risque_propo_analyste_filiale,
      id: "montant_frais_risque_propo_analyste_filiale",
      disabled: ""
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pl-4"
  }, [_vm._m(25), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control input-box",
    attrs: {
      value: _vm.formDataToBeWatched.montant_frais_risque_propo_analyste,
      id: "montant_frais_risque_propo_analyste"
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pl-4 mb-3"
  }, [_vm._m(26), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.formDataToBeWatched.justification_frais_risque,
      expression: "formDataToBeWatched.justification_frais_risque",
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
      value: _vm.formDataToBeWatched.justification_frais_risque
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.formDataToBeWatched, "justification_frais_risque", $event.target.value);
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(27), _vm._v(" "), _c("currency-input", {
    attrs: {
      value: _vm.montant_frais_assurance,
      id: "montant_frais_assurance",
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(28), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control",
    attrs: {
      value: _vm.montant_frais_assurance_propo_analyste_filiale,
      id: "montant_frais_assurance_propo_analyste_filiale",
      disabled: ""
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pl-4"
  }, [_vm._m(29), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control input-box",
    attrs: {
      value: _vm.formDataToBeWatched.montant_frais_assurance_propo_analyste,
      id: "montant_frais_assurance_propo_analyste"
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pl-4 mb-3"
  }, [_vm._m(30), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.formDataToBeWatched.justification_frais_assurance,
      expression: "formDataToBeWatched.justification_frais_assurance",
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
      value: _vm.formDataToBeWatched.justification_frais_assurance
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.formDataToBeWatched, "justification_frais_assurance", $event.target.value);
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(31), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.periode_grace_demande_client,
      expression: "periode_grace_demande_client",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      disabled: "",
      required: "",
      step: "any",
      type: "text",
      id: "periode_grace_demande_client"
    },
    domProps: {
      value: _vm.periode_grace_demande_client
    },
    on: {
      change: function change($event) {
        _vm.periode_grace_demande_client = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(32), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.periode_grace_proposition_agence,
      expression: "periode_grace_proposition_agence",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      readonly: "",
      required: "",
      step: "any",
      type: "text",
      id: "periode_grace_proposition_agence"
    },
    domProps: {
      value: _vm.periode_grace_proposition_agence
    },
    on: {
      change: function change($event) {
        _vm.periode_grace_proposition_agence = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pl-4"
  }, [_vm._m(33), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.formDataToBeWatched.periode_grace_proposition_src,
      expression: "formDataToBeWatched.periode_grace_proposition_src",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control input-box",
    attrs: {
      required: "",
      type: "text",
      id: "periode_grace_proposition_src"
    },
    domProps: {
      value: _vm.formDataToBeWatched.periode_grace_proposition_src
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.formDataToBeWatched, "periode_grace_proposition_src", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pl-4 mb-3"
  }, [_vm._m(34), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.formDataToBeWatched.justification_periode_grace,
      expression: "formDataToBeWatched.justification_periode_grace",
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
      value: _vm.formDataToBeWatched.justification_periode_grace
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.formDataToBeWatched, "justification_periode_grace", $event.target.value);
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(35), _vm._v(" "), _c("currency-input", {
    attrs: {
      value: _vm.depot_garantie,
      id: "depot_garantie",
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(36), _vm._v(" "), _c("currency-input", {
    attrs: {
      value: _vm.depot_garantie_arcf,
      disabled: "",
      id: "depot_garantie_arcf"
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pl-4"
  }, [_vm._m(37), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control input-box",
    attrs: {
      value: _vm.formDataToBeWatched.depot_garantie_srcf,
      id: "depot_garantie_srcf"
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pl-4 mb-3"
  }, [_vm._m(38), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.formDataToBeWatched.justification_depot_garantie_src,
      expression: "formDataToBeWatched.justification_depot_garantie_src",
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
      value: _vm.formDataToBeWatched.justification_depot_garantie_src
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.formDataToBeWatched, "justification_depot_garantie_src", $event.target.value);
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(39), _vm._v(" "), _c("currency-input", {
    attrs: {
      value: _vm.montant_crsd,
      id: "montant_crsd",
      disabled: ""
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(40), _vm._v(" "), _c("currency-input", {
    attrs: {
      value: _vm.montant_crsd_arc,
      disabled: "",
      id: "montant_crsd_arc"
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pl-4"
  }, [_vm._m(41), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control input-box",
    attrs: {
      value: _vm.formDataToBeWatched.montant_crsd_src,
      id: "montant_crsd_src"
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pl-4 mb-3"
  }, [_vm._m(42), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.formDataToBeWatched.justification_montant_crsd_src,
      expression: "formDataToBeWatched.justification_montant_crsd_src",
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
      value: _vm.formDataToBeWatched.justification_montant_crsd_src
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.formDataToBeWatched, "justification_montant_crsd_src", $event.target.value);
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(43), _vm._v(" "), _c("currency-input", {
    attrs: {
      value: _vm.montant_pep,
      id: "montant_pep",
      disabled: ""
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(44), _vm._v(" "), _c("currency-input", {
    attrs: {
      value: _vm.montant_pep_arc,
      id: "montant_pep_arc",
      disabled: ""
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pl-4"
  }, [_vm._m(45), _vm._v(" "), _c("currency-input", {
    staticClass: "input-box",
    attrs: {
      value: _vm.formDataToBeWatched.montant_pep_src,
      id: "montant_pep_src"
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 pl-4 mb-3"
  }, [_vm._m(46), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.formDataToBeWatched.justification_montant_pep_src,
      expression: "formDataToBeWatched.justification_montant_pep_src",
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
      value: _vm.formDataToBeWatched.justification_montant_pep_src
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.formDataToBeWatched, "justification_montant_pep_src", $event.target.value);
      }, _vm.handleInput]
    }
  })])])]), _vm._v(" "), _c("div", {
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
  }, [_vm._v("\n                    Fermer le tableau\n                ")])], 1) : _c("div", {
    staticClass: "card card-width-height"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc pb-0 pt-2"
  }, [_c("h3", {
    staticClass: "head",
    attrs: {
      id: "av2-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                                " + _vm._s(_vm.tb_display_name) + " : Caractéristiques du prêt\n                            ")]), _vm._v(" "), _c("div", {
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
    staticClass: "badge-sm"
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
  })], 1)])])])])]), _vm._v(" "), _c("div"), _vm._v(" "), _c("note-modal", {
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
    staticClass: "form-label",
    attrs: {
      "for": "montant_credit"
    }
  }, [_vm._v("Montant crédit proposé (CAF)"), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "montant_credit"
    }
  }, [_vm._v("Montant crédit proposé (ARC)\n                                "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "montant_credit"
    }
  }, [_vm._v("Montant crédit proposé (SRC)"), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Justification (SRC)\n                                "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "taux_credit"
    }
  }, [_vm._v("Taux du crédit"), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "taux_credit"
    }
  }, [_vm._v("Taux du crédit proposé (CAF)"), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "taux_credit"
    }
  }, [_vm._v("Taux du crédit proposé (ARC)\n                                "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "taux_credit"
    }
  }, [_vm._v("Taux du crédit proposé (SRC)"), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Justification (SRC)\n                                "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "taux_credit"
    }
  }, [_vm._v("Durée du crédit demandée"), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "taux_credit"
    }
  }, [_vm._v("Durée du crédit (CAF)"), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "taux_credit"
    }
  }, [_vm._v("Durée du crédit (ARC)\n                                (Mois)"), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "taux_credit"
    }
  }, [_vm._v("Durée du crédit proposée (SRC)\n                                (Mois)"), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Justification (SRC)\n                                "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "taux_credit"
    }
  }, [_vm._v("Périodicité de remboursement demandé"), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "taux_credit"
    }
  }, [_vm._v("Périodicité de remboursement (CAF)"), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "taux_credit"
    }
  }, [_vm._v("Périodicité de remboursement (ARC)\n                                "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "taux_credit"
    }
  }, [_vm._v("Périodicité de remboursement(SRC)"), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Justification (SRC)\n                                "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "montant_credit"
    }
  }, [_vm._v("Frais de dossier"), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "montant_frais_propo_analyste"
    }
  }, [_vm._v("Frais de dossier (ARC)"), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "montant_frais_propo_analyste"
    }
  }, [_vm._v("Frais de dossier (SRC)\n                                "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Justification (SRC)\n                                "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "montant_frais_risque"
    }
  }, [_vm._v("Prime de risque (CAF)"), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "montant_frais_risque_propo_analyste"
    }
  }, [_vm._v("Prime de risque (ARC)"), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "montant_frais_risque_propo_analyste"
    }
  }, [_vm._v("Prime de risque (SRC)"), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Justification (SRC)\n                                "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "montant_frais_risque"
    }
  }, [_vm._v("Prime d'assurance (CAF)"), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "montant_frais_risque_propo_analyste"
    }
  }, [_vm._v("Prime d'assurance (ARC)\n                                "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "montant_frais_risque_propo_analyste"
    }
  }, [_vm._v("Prime d'assurance (SRC)\n                                "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Justification (SRC)\n                                "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": ""
    }
  }, [_vm._v("Période de grâce / Demande du client"), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": ""
    }
  }, [_vm._v("Période de grâce / Proposition de l'agence"), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": ""
    }
  }, [_vm._v("Période de grâce / Proposition du SRC"), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Justification\n                                "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "montant_frais_risque"
    }
  }, [_vm._v("Dépot de garantie (CAF)"), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "montant_frais_risque"
    }
  }, [_vm._v("Dépot de garantie (ARC)"), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Dépot de garantie (SRC)"), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Justification (SRC)\n                                "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "montant_frais_risque"
    }
  }, [_vm._v("CRSD (CAF)"), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("CRSD (ARC)"), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v(" CRSD (SRC)"), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Justification (SRC)\n                                "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("PEP (CAF)"), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("PEP (ARC)"), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v(" PEP (SRC)"), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Justification (SRC)\n                                "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/avisscr/filiale/AV2.vue?vue&type=style&index=0&id=0f07e27e&lang=css&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/avisscr/filiale/AV2.vue?vue&type=style&index=0&id=0f07e27e&lang=css&scoped=true ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\ninput[data-v-0f07e27e] {\r\n    /*border: 1px solid red;*/\n}\n*[data-v-0f07e27e] {\r\n    font-family: \"Google sans\";\n}\nlabel[data-v-0f07e27e] {\r\n    height: 10px;\r\n    font-size: 13px;\n}\ninput[data-v-0f07e27e],\r\nselect[data-v-0f07e27e] {\r\n    height: 35px;\r\n    border-color: #34495e;\r\n    color: #57606f;\r\n    font-size: 13px;\r\n    font-weight: bold;\n}\n.card-width-height[data-v-0f07e27e] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-0f07e27e] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\n.hdc[data-v-0f07e27e] {\r\n    background-color: #57606f;\n}\r\n\r\n/*  List element styles */\n#menu ul[data-v-0f07e27e],\r\n#menu li[data-v-0f07e27e] {\r\n    list-style: none;\r\n    padding: 0;\r\n    margin: 0;\r\n    display: inline-block;\n}\n#menu li[data-v-0f07e27e] {\r\n    padding: 5px 0px;\n}\r\n\r\n/* Main menu links */\n#menu a[data-v-0f07e27e]:link,\r\n#menu a[data-v-0f07e27e]:visited,\r\n#menu a[data-v-0f07e27e]:active {\r\n    text-decoration: none;\r\n    color: var(--link2-color);\r\n    padding: 5px 7px;\r\n    font-weight: bold;\r\n    position: relative;\r\n    z-index: 2;\n}\n#menu a[data-v-0f07e27e]:hover,\r\n#menu a[data-v-0f07e27e]:focus {\r\n    background-color: var(--link-color);\r\n    color: var(--link2-color);\r\n    text-decoration: underline;\n}\r\n\r\n/* The submenu links container*/\n.subdrop[data-v-0f07e27e] {\r\n    background: var(--bg-color);\r\n    height: 0;\r\n    border-top: 0;\r\n    min-width: 100%;\r\n    left: 0;\r\n    margin: 0;\r\n    position: absolute;\r\n    text-align: left;\r\n    top: 100%;\r\n    visibility: hidden;\r\n    height: 1px;\r\n    overflow: hidden;\r\n    z-index: 10;\n}\ninput.input-box[data-v-0f07e27e], textarea[data-v-0f07e27e] { background: #00ffff21; color: #000;}\nselect.input-box[data-v-0f07e27e], textarea[data-v-0f07e27e] { background: #00ffff21; color: #000;}\r\n\r\n\r\n/* Dropdown Parent Link Style */\n.droplink[data-v-0f07e27e] {\r\n    display: inline-block;\r\n    min-width: -moz-fit-content;\r\n    min-width: fit-content;\r\n    position: relative;\n}\ninput[type=checkbox][data-v-0f07e27e] {\r\n    /* Double-sized Checkboxes */\r\n    /* IE */\r\n    /* FF */\r\n    /* Safari and Chrome */\r\n    /* Opera */\r\n    transform: scale(2);\r\n    padding: 10px;\n}\r\n\r\n/* List elements within the dropdown */\n.subdrop li[data-v-0f07e27e] {\r\n    display: block !important;\r\n    padding: 0 !important;\n}\r\n\r\n/* Links within the dropdown list */\n.subdrop a[data-v-0f07e27e] {\r\n    display: block;\r\n    padding: 12px 20px;\r\n    white-space: nowrap;\n}\r\n\r\n/* Allows links to show on hover/focus and through keyboard navigation via focus-within */\n.droplink:hover .subdrop[data-v-0f07e27e] {\r\n    visibility: visible;\r\n    height: auto;\r\n    z-index: 11;\n}\r\n\r\n/* Separate these to avoid IE completely ignoring the css above */\n.droplink:focus-within .subdrop[data-v-0f07e27e] {\r\n    visibility: visible;\r\n    height: auto;\r\n    z-index: 11;\n}\n.badge-sm[data-v-0f07e27e] {\r\n    display: inline-block;\r\n    width: 15px;\r\n    height: 15px;\r\n    background: rgba(255, 0, 0, 0.882);\r\n    color: white;\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    border-radius: 100%;\r\n    position: absolute;\r\n    top: -20%;\r\n    left: 55%;\r\n    text-align: center;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/avisscr/filiale/AV2.vue?vue&type=style&index=0&id=0f07e27e&lang=css&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/avisscr/filiale/AV2.vue?vue&type=style&index=0&id=0f07e27e&lang=css&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AV2_vue_vue_type_style_index_0_id_0f07e27e_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AV2.vue?vue&type=style&index=0&id=0f07e27e&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/avisscr/filiale/AV2.vue?vue&type=style&index=0&id=0f07e27e&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AV2_vue_vue_type_style_index_0_id_0f07e27e_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AV2_vue_vue_type_style_index_0_id_0f07e27e_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/avisscr/filiale/AV2.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/avisscr/filiale/AV2.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AV2_vue_vue_type_template_id_0f07e27e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AV2.vue?vue&type=template&id=0f07e27e&scoped=true */ "./resources/js/components/avisscr/filiale/AV2.vue?vue&type=template&id=0f07e27e&scoped=true");
/* harmony import */ var _AV2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AV2.vue?vue&type=script&lang=js */ "./resources/js/components/avisscr/filiale/AV2.vue?vue&type=script&lang=js");
/* harmony import */ var _AV2_vue_vue_type_style_index_0_id_0f07e27e_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AV2.vue?vue&type=style&index=0&id=0f07e27e&lang=css&scoped=true */ "./resources/js/components/avisscr/filiale/AV2.vue?vue&type=style&index=0&id=0f07e27e&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AV2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _AV2_vue_vue_type_template_id_0f07e27e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _AV2_vue_vue_type_template_id_0f07e27e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "0f07e27e",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/avisscr/filiale/AV2.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/avisscr/filiale/AV2.vue?vue&type=script&lang=js":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/avisscr/filiale/AV2.vue?vue&type=script&lang=js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AV2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AV2.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/avisscr/filiale/AV2.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AV2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/avisscr/filiale/AV2.vue?vue&type=style&index=0&id=0f07e27e&lang=css&scoped=true":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/avisscr/filiale/AV2.vue?vue&type=style&index=0&id=0f07e27e&lang=css&scoped=true ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AV2_vue_vue_type_style_index_0_id_0f07e27e_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AV2.vue?vue&type=style&index=0&id=0f07e27e&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/avisscr/filiale/AV2.vue?vue&type=style&index=0&id=0f07e27e&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/avisscr/filiale/AV2.vue?vue&type=template&id=0f07e27e&scoped=true":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/avisscr/filiale/AV2.vue?vue&type=template&id=0f07e27e&scoped=true ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AV2_vue_vue_type_template_id_0f07e27e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AV2_vue_vue_type_template_id_0f07e27e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AV2_vue_vue_type_template_id_0f07e27e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AV2.vue?vue&type=template&id=0f07e27e&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/avisscr/filiale/AV2.vue?vue&type=template&id=0f07e27e&scoped=true");


/***/ })

}]);