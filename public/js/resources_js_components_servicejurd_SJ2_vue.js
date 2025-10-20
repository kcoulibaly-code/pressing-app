"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_servicejurd_SJ2_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/servicejurd/SJ2.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/servicejurd/SJ2.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ContextMenu */ "./resources/js/components/shared/ContextMenu.vue");
/* harmony import */ var _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/ContextMenuItem */ "./resources/js/components/shared/ContextMenuItem.vue");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/helper */ "./resources/js/helpers/helper.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }









window.$ = window.jQuery = __webpack_require__(/*! jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "caracteristiques-du-pret",
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
    this.loadLatestAmount();

    // Credit.loadClients("ismael.kamate@cofinacorp.com")
    //   .then((res) => {
    //     this.clientData(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  },
  mounted: function mounted() {
    // await this.loadLatestAmount();
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
      frais_annexe_v: null,
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
        montant_frais_assurance_propo_analyste: "",
        depot_garantie_arcf: 0,
        montant_crsd: 0,
        montant_pep: 0,
        source_remboursement: "",
        remboursement_passe: "",
        taux_teg: "",
        frais_part_cofina: "",
        frais_part_nsia: "",
        derniere_echeance: "",
        premiere_echeance: "",
        rating_risque_credit: "",
        epargne_obligatoire: "",
        etat_garantie: "",
        type_demande: "",
        type_credit: "",
        taux_credit_demande: "",
        duree_credit_approuve: "",
        type_paiement_approuve: "",
        periodicite_paiement_approuve: ""
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
      montant_frais_assurance: null,
      depot_garantie: null,
      montant_crsd: null,
      montant_pep: null,
      motif_credit: null,
      code_caf: null,
      montant_frais_percent: null,
      echeance_interet: null,
      latestAmount: 0,
      source_de_remboursement: null,
      total_source_remboursement: null,
      epargne_obligatoire: null,
      rating_risque_credit: null
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
    // loadRetrieved() {
    //     let lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
    //     let createdKey = this.tb_name;
    //     let createdKeyArr = createdKey.split("tb");
    //     createdKey = "cred_pub_tb_" + createdKeyArr[1];
    //     if (this.meta_data['dossier_credit'][createdKey] === undefined) {
    //         this.formDataToBeWatched.type_demande = this.meta_data.dossier_credit?.cred_pub_tb_1.type_demande
    //         this.formDataToBeWatched.type_credit = this.meta_data.dossier_credit?.cred_pub_tb_1.type_credit
    //         this.formDataToBeWatched.taux_credit_demande = this.meta_data.dossier_credit?.cred_pub_tb_1.taux_credit_propose
    //         this.formDataToBeWatched.type_paiement_approuve = this.meta_data.dossier_credit?.cred_pub_tb_1.type_paiement
    //         this.formDataToBeWatched.periodicite_paiement_approuve = this.meta_data.dossier_credit?.cred_pub_tb_1.mode_paiement_demande
    //         this.formDataToBeWatched.montant_crsd = this.meta_data.dossier_credit?.cred_pub_tb_1.montant_crsd
    //         this.formDataToBeWatched.montant_pep = this.meta_data.dossier_credit?.cred_pub_tb_1.montant_pep
    //         this.formDataToBeWatched.depot_garantie_arcf = this.meta_data['dossier_credit']["cred_pub_tb_1"]?.garantie
    //         this.total_source_remboursement = this.meta_data['dossier_credit']["cred_pub_tb_3"]?.total_source_remboursement
    //         this.source_de_remboursement = this.meta_data['dossier_credit']["cred_pub_tb_3"]?.source_de_remboursement
    //         this.epargne_obligatoire = this.meta_data['dossier_credit']["cred_pub_tb_1"]?.vmontant_pep
    //         this.rating_risque_credit = this.meta_data['dossier_credit']["cred_pub_tb_000"]?.cofiscore
    //         this.formDataToBeWatched.duree_credit_approuve = this.loadLatestDuree()
    //         if (this.meta_data['dossier_credit']["cred_pub_tb_1"] != undefined) {
    //             if (this.meta_data['dossier_credit']["cred_pub_tb_47"] == undefined && this.meta_data['dossier_credit']["cred_pub_tb_470"] == undefined
    //                 && this.meta_data['dossier_credit']["cred_pub_tb_047"] == undefined && this.meta_data['dossier_credit']["cred_pub_tb_0470"] == undefined) {
    //                 // this.montant_credit = this.meta_data['dossier_credit']["cred_pub_tb_1"]?.montant_credit
    //                 this.montant_credit = this.loadLatestAmount()
    //                 this.formDataToBeWatched.duree_credit_approuve = this.loadLatestDuree()
    //                 this.taux_credit = this.meta_data['dossier_credit']["cred_pub_tb_1"]?.taux_credit_propose
    //                 this.duree_credit = this.meta_data['dossier_credit']["cred_pub_tb_1"]?.duree_credit
    //                 this.montant_frais = this.meta_data['dossier_credit']["cred_pub_tb_1"]?.frais[0]?.montant_frais
    //                 this.montant_frais_risque = this.meta_data['dossier_credit']["cred_pub_tb_1"]?.frais[2]?.montant_frais
    //                 this.montant_frais_assurance = this.meta_data['dossier_credit']["cred_pub_tb_1"]?.frais[1]?.montant_frais
    //                 this.depot_garantie = this.meta_data['dossier_credit']["cred_pub_tb_1"]?.garantie
    //                 this.montant_crsd = this.meta_data['dossier_credit']["cred_pub_tb_1"]?.montant_crsd
    //                 this.montant_pep = this.meta_data['dossier_credit']["cred_pub_tb_1"]?.montant_pep
    //                 this.motif_credit = this.meta_data['dossier_credit']["cred_pub_tb_2"]?.objet_detaille_credit
    //                 this.code_caf = this.meta_data['dossier_credit']["cred_pub_tb_00"]?.caf
    //                 this.montant_frais_percent = this.meta_data['dossier_credit']["cred_pub_tb_1"]?.valeur_garantieaccorde
    //                 this.echeance_interet = Math.ceil(this.meta_data['dossier_credit']["cred_pub_tb_1"]?.echeance.interet)
    //                 this.encours = this.meta_data['dossier_credit']["cred_pub_tb_00"]?.encours_actuel
    //                 console.log('source_de_remboursement', this.meta_data['dossier_credit']["cred_pub_tb_3"]?.source_de_remboursement)
    //             } else
    //                 if (this.meta_data['dossier_credit']["cred_pub_tb_470"] == undefined && this.meta_data['dossier_credit']["cred_pub_tb_047"] == undefined && this.meta_data['dossier_credit']["cred_pub_tb_0470"] == undefined) {
    //                     this.montant_credit = this.meta_data['dossier_credit']["cred_pub_tb_47"]?.montant_credit_propo_analyste
    //                     console.log('test1', this.meta_data['dossier_credit']["cred_pub_tb_47"]?.montant_credit_propo_analyste)
    //                 } else
    //                     if (this.meta_data['dossier_credit']["cred_pub_tb_047"] == undefined && this.meta_data['dossier_credit']["cred_pub_tb_0470"] == undefined) {
    //                         this.montant_credit = this.meta_data['dossier_credit']["cred_pub_tb_470"]?.montant_credit_propo_analyste
    //                         this.taux_credit = this.meta_data['dossier_credit']["cred_pub_tb_470"]?.taux_credit_propose_analyste
    //                         this.duree_credit = this.meta_data['dossier_credit']["cred_pub_tb_470"]?.duree_credit_propo_analyste
    //                         this.montant_frais = this.meta_data['dossier_credit']["cred_pub_tb_470"]?.montant_frais_propo_analyste
    //                         this.montant_frais_risque = this.meta_data['dossier_credit']["cred_pub_tb_470"]?.montant_frais_risque_propo_analyste
    //                         this.montant_frais_assurance = this.meta_data['dossier_credit']["cred_pub_tb_470"]?.montant_frais_assurance_propo_analyste
    //                         this.depot_garantie = this.meta_data['dossier_credit']["cred_pub_tb_470"]?.depot_garantie_srcf
    //                         this.montant_crsd = this.meta_data['dossier_credit']["cred_pub_tb_470"]?.montant_crsd_src
    //                         this.montant_pep = this.meta_data['dossier_credit']["cred_pub_tb_470"]?.montant_pep_src
    //                         this.motif_credit = this.meta_data['dossier_credit']["cred_pub_tb_2"]?.objet_detaille_credit
    //                         this.code_caf = this.meta_data['dossier_credit']["cred_pub_tb_00"]?.caf
    //                         this.montant_frais_percent = this.meta_data['dossier_credit']["cred_pub_tb_1"]?.valeur_garantieaccorde
    //                         this.echeance_interet = Math.ceil(this.meta_data['dossier_credit']["cred_pub_tb_1"]?.echeance.interet)
    //                         this.encours = this.meta_data['dossier_credit']["cred_pub_tb_00"]?.encours_actuel
    //                         console.log('echeance_interet', Math.ceil(this.meta_data['dossier_credit']["cred_pub_tb_1"]?.echeance.interet))
    //                     } else
    //                         if (this.meta_data['dossier_credit']["cred_pub_tb_0470"] == undefined) {
    //                             this.montant_credit = this.meta_data['dossier_credit']["cred_pub_tb_047"]?.montant_credit_propo_analyste
    //                             this.taux_credit = this.meta_data['dossier_credit']["cred_pub_tb_047"]?.taux_credit_propose_analyste
    //                             this.duree_credit = this.meta_data['dossier_credit']["cred_pub_tb_047"]?.duree_credit_propo_analyste
    //                             this.montant_frais = this.meta_data['dossier_credit']["cred_pub_tb_047"]?.montant_frais_propo_analyste
    //                             this.montant_frais_risque = this.meta_data['dossier_credit']["cred_pub_tb_047"]?.montant_frais_risque_propo_analyste
    //                             this.montant_frais_assurance = this.meta_data['dossier_credit']["cred_pub_tb_047"]?.montant_frais_assurance_propo_analyste
    //                             this.depot_garantie = this.meta_data['dossier_credit']["cred_pub_tb_047"]?.depot_garantie_arcg
    //                             this.montant_crsd = this.meta_data['dossier_credit']["cred_pub_tb_047"]?.montant_crsd_arcg
    //                             this.montant_pep = this.meta_data['dossier_credit']["cred_pub_tb_047"]?.montant_pep_arcg
    //                             this.motif_credit = this.meta_data['dossier_credit']["cred_pub_tb_2"]?.objet_detaille_credit
    //                             this.code_caf = this.meta_data['dossier_credit']["cred_pub_tb_00"]?.caf
    //                             this.montant_frais_percent = this.meta_data['dossier_credit']["cred_pub_tb_1"]?.valeur_garantieaccorde
    //                             this.echeance_interet = Math.ceil(this.meta_data['dossier_credit']["cred_pub_tb_1"]?.echeance.interet)
    //                             this.encours = this.meta_data['dossier_credit']["cred_pub_tb_00"]?.encours_actuel
    //                         } else
    //                             if (this.meta_data['dossier_credit']["cred_pub_tb_47"] != undefined && this.meta_data['dossier_credit']["cred_pub_tb_470"] != undefined
    //                                 && this.meta_data['dossier_credit']["cred_pub_tb_047"] != undefined && this.meta_data['dossier_credit']["cred_pub_tb_0470"] != undefined) {
    //                                 this.montant_credit = this.meta_data['dossier_credit']["cred_pub_tb_0470"]?.montant_credit_propo_analyste
    //                                 this.taux_credit = this.meta_data['dossier_credit']["cred_pub_tb_0470"]?.taux_credit_propose_analyste
    //                                 this.duree_credit = this.meta_data['dossier_credit']["cred_pub_tb_0470"]?.duree_credit_propo_analyste
    //                                 this.montant_frais = this.meta_data['dossier_credit']["cred_pub_tb_0470"]?.montant_frais_propo_analyste
    //                                 this.montant_frais_risque = this.meta_data['dossier_credit']["cred_pub_tb_0470"]?.montant_frais_risque_propo_analyste
    //                                 this.montant_frais_assurance = this.meta_data['dossier_credit']["cred_pub_tb_0470"]?.montant_frais_assurance_propo_analyste
    //                                 this.depot_garantie = this.meta_data['dossier_credit']["cred_pub_tb_0470"]?.depot_garantie_srcg
    //                                 this.montant_crsd = this.meta_data['dossier_credit']["cred_pub_tb_0470"]?.montant_crsd_srcg
    //                                 this.montant_pep = this.meta_data['dossier_credit']["cred_pub_tb_0470"]?.montant_pep_srcg
    //                                 this.motif_credit = this.meta_data['dossier_credit']["cred_pub_tb_2"]?.objet_detaille_credit
    //                                 this.code_caf = this.meta_data['dossier_credit']["cred_pub_tb_00"]?.caf
    //                                 this.montant_frais_percent = this.meta_data['dossier_credit']["cred_pub_tb_1"]?.valeur_garantieaccorde
    //                                 this.echeance_interet = Math.ceil(this.meta_data['dossier_credit']["cred_pub_tb_1"]?.echeance.interet)
    //                                 this.encours = this.meta_data['dossier_credit']["cred_pub_tb_00"]?.encours_actuel
    //                             }
    //         }
    //     }
    //     if (lentb.length > 0) {
    //         if (this.meta_data["dossier_credit"][createdKey] != undefined) {
    //             //   this.frais_annexe_v = this.meta_data.dossier_credit?.cred_pub_tb_1
    //             this.formDataToBeWatched.type_credit = this.meta_data['dossier_credit']["cred_pub_tb_1"]?.type_credit
    //             this.formDataToBeWatched.type_credit = this.meta_data['dossier_credit']["cred_pub_tb_1"]?.type_demande
    //             this.formDataToBeWatched = this.meta_data["dossier_credit"][createdKey];
    //             this.total_source_remboursement = this.meta_data['dossier_credit']["cred_pub_tb_3"]?.total_source_remboursement
    //             this.epargne_obligatoire = this.meta_data['dossier_credit']["cred_pub_tb_1"]?.vmontant_pep
    //             this.source_de_remboursement = this.meta_data['dossier_credit']["cred_pub_tb_3"]?.source_de_remboursement
    //             if (this.meta_data['dossier_credit']["cred_pub_tb_47"] == undefined && this.meta_data['dossier_credit']["cred_pub_tb_470"] == undefined
    //                 && this.meta_data['dossier_credit']["cred_pub_tb_047"] == undefined && this.meta_data['dossier_credit']["cred_pub_tb_0470"] == undefined) {
    //                 this.montant_credit = this.loadLatestAmount()
    //                 this.taux_credit = this.meta_data['dossier_credit']["cred_pub_tb_1"]?.taux_credit_propose
    //                 this.duree_credit = this.meta_data['dossier_credit']["cred_pub_tb_1"]?.duree_credit
    //                 this.montant_frais = this.meta_data['dossier_credit']["cred_pub_tb_1"]?.frais[0]?.montant_frais
    //                 this.montant_frais_risque = this.meta_data['dossier_credit']["cred_pub_tb_1"]?.frais[2]?.montant_frais
    //                 this.montant_frais_assurance = this.meta_data['dossier_credit']["cred_pub_tb_1"]?.frais[1]?.montant_frais
    //                 this.depot_garantie = this.meta_data['dossier_credit']["cred_pub_tb_1"]?.garantie
    //                 this.montant_crsd = this.meta_data['dossier_credit']["cred_pub_tb_1"]?.montant_crsd
    //                 this.montant_pep = this.meta_data['dossier_credit']["cred_pub_tb_1"]?.montant_pep
    //                 this.motif_credit = this.meta_data['dossier_credit']["cred_pub_tb_2"]?.objet_detaille_credit
    //                 this.code_caf = this.meta_data['dossier_credit']["cred_pub_tb_00"]?.caf
    //                 this.montant_frais_percent = this.meta_data['dossier_credit']["cred_pub_tb_1"]?.valeur_garantieaccorde
    //                 this.echeance_interet = Math.ceil(this.meta_data['dossier_credit']["cred_pub_tb_1"]?.echeance.interet)
    //                 this.encours = this.meta_data['dossier_credit']["cred_pub_tb_00"]?.encours_actuel
    //             } else
    //                 if (this.meta_data['dossier_credit']["cred_pub_tb_470"] == undefined && this.meta_data['dossier_credit']["cred_pub_tb_047"] == undefined && this.meta_data['dossier_credit']["cred_pub_tb_0470"] == undefined) {
    //                     this.montant_credit = this.meta_data['dossier_credit']["cred_pub_tb_47"]?.montant_credit_propo_analyste
    //                 } else
    //                     if (this.meta_data['dossier_credit']["cred_pub_tb_047"] == undefined && this.meta_data['dossier_credit']["cred_pub_tb_0470"] == undefined) {
    //                         this.montant_credit = this.meta_data['dossier_credit']["cred_pub_tb_470"]?.montant_credit_propo_analyste
    //                         this.taux_credit = this.meta_data['dossier_credit']["cred_pub_tb_470"]?.taux_credit_propose_analyste
    //                         this.duree_credit = this.meta_data['dossier_credit']["cred_pub_tb_470"]?.duree_credit_propo_analyste
    //                         this.montant_frais = this.meta_data['dossier_credit']["cred_pub_tb_470"]?.montant_frais_propo_analyste
    //                         this.montant_frais_risque = this.meta_data['dossier_credit']["cred_pub_tb_470"]?.montant_frais_risque_propo_analyste
    //                         this.montant_frais_assurance = this.meta_data['dossier_credit']["cred_pub_tb_470"]?.montant_frais_assurance_propo_analyste
    //                         this.depot_garantie = this.meta_data['dossier_credit']["cred_pub_tb_470"]?.depot_garantie_srcf
    //                         this.montant_crsd = this.meta_data['dossier_credit']["cred_pub_tb_470"]?.montant_crsd_src
    //                         this.montant_pep = this.meta_data['dossier_credit']["cred_pub_tb_470"]?.montant_pep_src
    //                         this.motif_credit = this.meta_data['dossier_credit']["cred_pub_tb_2"]?.objet_detaille_credit
    //                         this.code_caf = this.meta_data['dossier_credit']["cred_pub_tb_00"]?.caf
    //                         this.montant_frais_percent = this.meta_data['dossier_credit']["cred_pub_tb_1"]?.valeur_garantieaccorde
    //                         this.echeance_interet = Math.ceil(this.meta_data['dossier_credit']["cred_pub_tb_1"]?.echeance.interet)
    //                         this.encours = this.meta_data['dossier_credit']["cred_pub_tb_00"]?.encours_actuel
    //                     } else
    //                         if (this.meta_data['dossier_credit']["cred_pub_tb_0470"] == undefined) {
    //                             this.montant_credit = this.meta_data['dossier_credit']["cred_pub_tb_047"]?.montant_credit_propo_analyste
    //                             this.taux_credit = this.meta_data['dossier_credit']["cred_pub_tb_047"]?.taux_credit_propose_analyste
    //                             this.duree_credit = this.meta_data['dossier_credit']["cred_pub_tb_047"]?.duree_credit_propo_analyste
    //                             this.montant_frais = this.meta_data['dossier_credit']["cred_pub_tb_047"]?.montant_frais_propo_analyste
    //                             this.montant_frais_risque = this.meta_data['dossier_credit']["cred_pub_tb_047"]?.montant_frais_risque_propo_analyste
    //                             this.montant_frais_assurance = this.meta_data['dossier_credit']["cred_pub_tb_047"]?.montant_frais_assurance_propo_analyste
    //                             this.depot_garantie = this.meta_data['dossier_credit']["cred_pub_tb_047"]?.depot_garantie_arcg
    //                             this.montant_crsd = this.meta_data['dossier_credit']["cred_pub_tb_047"]?.montant_crsd_arcg
    //                             this.montant_pep = this.meta_data['dossier_credit']["cred_pub_tb_047"]?.montant_pep_arcg
    //                             this.motif_credit = this.meta_data['dossier_credit']["cred_pub_tb_2"]?.objet_detaille_credit
    //                             this.code_caf = this.meta_data['dossier_credit']["cred_pub_tb_00"]?.caf
    //                             this.montant_frais_percent = this.meta_data['dossier_credit']["cred_pub_tb_1"]?.valeur_garantieaccorde
    //                             this.echeance_interet = Math.ceil(this.meta_data['dossier_credit']["cred_pub_tb_1"]?.echeance.interet)
    //                             this.encours = this.meta_data['dossier_credit']["cred_pub_tb_00"]?.encours_actuel
    //                         } else
    //                             if (this.meta_data['dossier_credit']["cred_pub_tb_47"] != undefined && this.meta_data['dossier_credit']["cred_pub_tb_470"] != undefined
    //                                 && this.meta_data['dossier_credit']["cred_pub_tb_047"] != undefined && this.meta_data['dossier_credit']["cred_pub_tb_0470"] != undefined) {
    //                                 this.montant_credit = this.meta_data['dossier_credit']["cred_pub_tb_0470"]?.montant_credit_propo_analyste
    //                                 this.taux_credit = this.meta_data['dossier_credit']["cred_pub_tb_0470"]?.taux_credit_propose_analyste
    //                                 this.duree_credit = this.meta_data['dossier_credit']["cred_pub_tb_0470"]?.duree_credit_propo_analyste
    //                                 this.montant_frais = this.meta_data['dossier_credit']["cred_pub_tb_0470"]?.montant_frais_propo_analyste
    //                                 this.montant_frais_risque = this.meta_data['dossier_credit']["cred_pub_tb_0470"]?.montant_frais_risque_propo_analyste
    //                                 this.montant_frais_assurance = this.meta_data['dossier_credit']["cred_pub_tb_0470"]?.montant_frais_assurance_propo_analyste
    //                                 this.depot_garantie = this.meta_data['dossier_credit']["cred_pub_tb_0470"]?.depot_garantie_srcg
    //                                 this.montant_crsd = this.meta_data['dossier_credit']["cred_pub_tb_0470"]?.montant_crsd_srcg
    //                                 this.montant_pep = this.meta_data['dossier_credit']["cred_pub_tb_0470"]?.montant_pep_srcg
    //                                 this.motif_credit = this.meta_data['dossier_credit']["cred_pub_tb_2"]?.objet_detaille_credit
    //                                 this.code_caf = this.meta_data['dossier_credit']["cred_pub_tb_00"]?.caf
    //                                 this.montant_frais_percent = this.meta_data['dossier_credit']["cred_pub_tb_1"]?.valeur_garantieaccorde
    //                                 this.echeance_interet = Math.ceil(this.meta_data['dossier_credit']["cred_pub_tb_1"]?.echeance.interet)
    //                                 this.encours = this.meta_data['dossier_credit']["cred_pub_tb_00"]?.encours_actuel
    //                             }
    //             // this.montant_demander = this.meta_data['dossier_credit']["cred_pub_tb_1"]?.montant_demander
    //             // this.taux_credit = this.meta_data['dossier_credit']["cred_pub_tb_1"]?.taux_credit
    //             // this.taux_credit_propose = this.meta_data['dossier_credit']["cred_pub_tb_1"]?.taux_credit_propose
    //             // this.duree_credit = this.meta_data['dossier_credit']["cred_pub_tb_1"]?.duree_credit
    //             // this.periodicite = this.meta_data['dossier_credit']["cred_pub_tb_1"]?.periodicite
    //             // this.mode_paiement = this.meta_data['dossier_credit']["cred_pub_tb_1"]?.mode_paiement
    //             // if (this.meta_data['dossier_credit']["cred_pub_tb_1"]?.frais != undefined) {
    //             //     this.montant_frais = this.meta_data['dossier_credit']["cred_pub_tb_1"]?.frais[0]?.montant_frais
    //             //     this.montant_frais_risque = this.meta_data['dossier_credit']["cred_pub_tb_1"]?.frais[2]?.montant_frais
    //             //     this.montant_frais_assurance = this.meta_data['dossier_credit']["cred_pub_tb_1"]?.frais[1]?.montant_frais
    //             // }
    //             // this.formDataToBeWatched.depot_garantie_arcf = this.meta_data['dossier_credit']["cred_pub_tb_1"]?.garantie
    //             // this.depot_garantie = this.meta_data['dossier_credit']["cred_pub_tb_1"]?.garantie
    //             // this.montant_crsd = this.meta_data['dossier_credit']["cred_pub_tb_1"]?.montant_crsd
    //             // this.montant_pep = this.meta_data['dossier_credit']["cred_pub_tb_1"]?.montant_pep
    //             // //   this.crsd=this.meta_data['dossier_credit']["cred_pub_tb_1"]?.montant_crsd
    //             // this.duree_credit_demande = this.meta_data['dossier_credit']["cred_pub_tb_1"]?.duree_credit_demande
    //             // this.mode_paiement_demande = this.meta_data['dossier_credit']["cred_pub_tb_1"]?.mode_paiement_demande
    //         }
    //         // Close table by default
    //         this.defaultRetract(false, this.meta_data["dossier_credit"]?.applied_templ_id)
    //     }
    // },
    loadRetrieved: function loadRetrieved() {
      var _this$meta_data$dossi;
      var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];
      var applied_templ_name = (_this$meta_data$dossi = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi.applied_templ_name;
      var tbArrays = this.determineCredPubTables(applied_templ_name);
      var credtb0 = tbArrays[0];
      var credtb1 = tbArrays[1];
      console.log("tbArrays ****", tbArrays);
      var credtb2 = tbArrays[2];
      var credtb3 = tbArrays[3];
      var credtb4 = tbArrays[4];

      // console.log("montant frais",this.meta_data['dossier_credit']?.[credtb1]?.frais[0]?.["montant_frais"])

      if (this.meta_data['dossier_credit'][createdKey] === undefined) {
        var _this$meta_data$dossi2, _this$meta_data$dossi3, _this$meta_data$dossi4, _this$meta_data$dossi5, _this$meta_data$dossi6, _this$meta_data$dossi7, _this$meta_data$dossi8, _this$meta_data$dossi9, _this$meta_data$dossi0, _this$meta_data$dossi1, _this$meta_data$dossi10, _this$meta_data$dossi11, _this$meta_data$dossi12, _this$meta_data$dossi13;
        // console.log(" cred key not exist")
        // console.log(" type_demande", this.meta_data.dossier_credit?.[credtb1]?.["type_demande"])
        // console.log("type_credit", this.meta_data.dossier_credit?.[credtb1]?.["type_credit"])
        // console.log("taux_credit_propose", this.meta_data.dossier_credit?.[credtb1]?.["taux_credit_propose"])
        // console.log("type_paiement", this.meta_data.dossier_credit?.[credtb1]?.["type_paiement"])
        // console.log("mode_paiement_demande", this.meta_data.dossier_credit?.[credtb1]?.["mode_paiement_demande"])

        // montant_frais
        // montant_frais_percent
        // montant_frais_risque
        // montant_frais_assurance
        // depot_garantie
        // montant_crsd
        // montant_pep
        // code_caf
        // echeance_interet

        this.formDataToBeWatched.type_demande = (_this$meta_data$dossi2 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi2 === void 0 || (_this$meta_data$dossi2 = _this$meta_data$dossi2[credtb1]) === null || _this$meta_data$dossi2 === void 0 ? void 0 : _this$meta_data$dossi2["type_demande"];
        this.formDataToBeWatched.type_credit = (_this$meta_data$dossi3 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi3 === void 0 || (_this$meta_data$dossi3 = _this$meta_data$dossi3[credtb1]) === null || _this$meta_data$dossi3 === void 0 ? void 0 : _this$meta_data$dossi3["type_credit"];
        this.formDataToBeWatched.taux_credit_demande = (_this$meta_data$dossi4 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi4 === void 0 || (_this$meta_data$dossi4 = _this$meta_data$dossi4[credtb1]) === null || _this$meta_data$dossi4 === void 0 ? void 0 : _this$meta_data$dossi4["taux_credit_propose"];
        this.formDataToBeWatched.type_paiement_approuve = (_this$meta_data$dossi5 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi5 === void 0 || (_this$meta_data$dossi5 = _this$meta_data$dossi5[credtb1]) === null || _this$meta_data$dossi5 === void 0 ? void 0 : _this$meta_data$dossi5["type_paiement"];
        this.formDataToBeWatched.periodicite_paiement_approuve = (_this$meta_data$dossi6 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi6 === void 0 || (_this$meta_data$dossi6 = _this$meta_data$dossi6[credtb1]) === null || _this$meta_data$dossi6 === void 0 ? void 0 : _this$meta_data$dossi6["mode_paiement_demande"];

        // console.log("montant frais",this.meta_data['dossier_credit']?.[credtb1]?.frais[0]?.["montant_frais"])
        console.log("montant_crsd", (_this$meta_data$dossi7 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi7 === void 0 || (_this$meta_data$dossi7 = _this$meta_data$dossi7[credtb1]) === null || _this$meta_data$dossi7 === void 0 ? void 0 : _this$meta_data$dossi7["montant_crsd"]);
        this.montant_crsd = ((_this$meta_data$dossi8 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi8 === void 0 || (_this$meta_data$dossi8 = _this$meta_data$dossi8[credtb1]) === null || _this$meta_data$dossi8 === void 0 ? void 0 : _this$meta_data$dossi8["montant_crsd"]) | 0;
        this.montant_pep = (_this$meta_data$dossi9 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi9 === void 0 || (_this$meta_data$dossi9 = _this$meta_data$dossi9[credtb1]) === null || _this$meta_data$dossi9 === void 0 ? void 0 : _this$meta_data$dossi9["montant_pep"];
        this.formDataToBeWatched["depot_garantie_arcf"] = (_this$meta_data$dossi0 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi0 === void 0 || (_this$meta_data$dossi0 = _this$meta_data$dossi0[credtb1]) === null || _this$meta_data$dossi0 === void 0 ? void 0 : _this$meta_data$dossi0["garantie"];
        this.total_source_remboursement = (_this$meta_data$dossi1 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi1 === void 0 || (_this$meta_data$dossi1 = _this$meta_data$dossi1["cred_pub_tb_3"]) === null || _this$meta_data$dossi1 === void 0 ? void 0 : _this$meta_data$dossi1["total_source_remboursement"];
        this.source_de_remboursement = (_this$meta_data$dossi10 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi10 === void 0 || (_this$meta_data$dossi10 = _this$meta_data$dossi10["cred_pub_tb_3"]) === null || _this$meta_data$dossi10 === void 0 ? void 0 : _this$meta_data$dossi10["source_de_remboursement"];
        this.epargne_obligatoire = (_this$meta_data$dossi11 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi11 === void 0 || (_this$meta_data$dossi11 = _this$meta_data$dossi11[credtb1]) === null || _this$meta_data$dossi11 === void 0 ? void 0 : _this$meta_data$dossi11["vmontant_pep"];
        this.rating_risque_credit = (_this$meta_data$dossi12 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi12 === void 0 || (_this$meta_data$dossi12 = _this$meta_data$dossi12["cred_pub_tb_000"]) === null || _this$meta_data$dossi12 === void 0 ? void 0 : _this$meta_data$dossi12["cofiscore"];
        this.formDataToBeWatched.duree_credit_approuve = this.loadLatestDuree();
        if (((_this$meta_data$dossi13 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi13 === void 0 ? void 0 : _this$meta_data$dossi13[credtb1]) != undefined) {
          // this.meta_data['dossier_credit']["cred_pub_tb_047"] == undefined
          if (this.meta_data['dossier_credit']["cred_pub_tb_47"] == undefined && this.meta_data['dossier_credit']["cred_pub_tb_470"] == undefined && this.meta_data['dossier_credit']["cred_pub_tb_0470"] == undefined) {
            var _this$meta_data$dossi14, _this$meta_data$dossi15, _this$meta_data$dossi16, _this$meta_data$dossi17, _this$meta_data$dossi18, _this$meta_data$dossi19, _this$meta_data$dossi20, _this$meta_data$dossi21, _this$meta_data$dossi22, _this$meta_data$dossi23, _this$meta_data$dossi24, _this$meta_data$dossi25, _this$meta_data$dossi26, _this$meta_data$dossi27;
            console.log("credtb1 exist");
            // console.log("loadLatestAmount ",this.loadLatestAmount())

            // this.montant_credit = this.meta_data['dossier_credit']["cred_pub_tb_1"]?.montant_credit
            this.montant_credit = this.loadLatestAmount();
            this.formDataToBeWatched.duree_credit_approuve = this.loadLatestDuree();
            this.taux_credit = (_this$meta_data$dossi14 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi14 === void 0 || (_this$meta_data$dossi14 = _this$meta_data$dossi14[credtb1]) === null || _this$meta_data$dossi14 === void 0 ? void 0 : _this$meta_data$dossi14["taux_credit_propose"];
            this.duree_credit = (_this$meta_data$dossi15 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi15 === void 0 || (_this$meta_data$dossi15 = _this$meta_data$dossi15[credtb1]) === null || _this$meta_data$dossi15 === void 0 ? void 0 : _this$meta_data$dossi15["duree_credit"];
            console.log("montant frais", (_this$meta_data$dossi16 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi16 === void 0 || (_this$meta_data$dossi16 = _this$meta_data$dossi16[credtb1]) === null || _this$meta_data$dossi16 === void 0 || (_this$meta_data$dossi16 = _this$meta_data$dossi16.frais[0]) === null || _this$meta_data$dossi16 === void 0 ? void 0 : _this$meta_data$dossi16["montant_frais"]);
            this.montant_frais = (_this$meta_data$dossi17 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi17 === void 0 || (_this$meta_data$dossi17 = _this$meta_data$dossi17[credtb1]) === null || _this$meta_data$dossi17 === void 0 || (_this$meta_data$dossi17 = _this$meta_data$dossi17.frais[0]) === null || _this$meta_data$dossi17 === void 0 ? void 0 : _this$meta_data$dossi17["montant_frais"];
            this.montant_frais_risque = (_this$meta_data$dossi18 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi18 === void 0 || (_this$meta_data$dossi18 = _this$meta_data$dossi18[credtb1]) === null || _this$meta_data$dossi18 === void 0 || (_this$meta_data$dossi18 = _this$meta_data$dossi18.frais[2]) === null || _this$meta_data$dossi18 === void 0 ? void 0 : _this$meta_data$dossi18["montant_frais"];
            this.montant_frais_assurance = (_this$meta_data$dossi19 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi19 === void 0 || (_this$meta_data$dossi19 = _this$meta_data$dossi19[credtb1]) === null || _this$meta_data$dossi19 === void 0 || (_this$meta_data$dossi19 = _this$meta_data$dossi19.frais[1]) === null || _this$meta_data$dossi19 === void 0 ? void 0 : _this$meta_data$dossi19["montant_frais"];
            this.depot_garantie = (_this$meta_data$dossi20 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi20 === void 0 || (_this$meta_data$dossi20 = _this$meta_data$dossi20[credtb1]) === null || _this$meta_data$dossi20 === void 0 ? void 0 : _this$meta_data$dossi20["garantie"];
            this.montant_crsd = (_this$meta_data$dossi21 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi21 === void 0 || (_this$meta_data$dossi21 = _this$meta_data$dossi21[credtb1]) === null || _this$meta_data$dossi21 === void 0 ? void 0 : _this$meta_data$dossi21["montant_crsd"];
            this.montant_pep = (_this$meta_data$dossi22 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi22 === void 0 || (_this$meta_data$dossi22 = _this$meta_data$dossi22[credtb1]) === null || _this$meta_data$dossi22 === void 0 ? void 0 : _this$meta_data$dossi22["montant_pep"];
            this.motif_credit = (_this$meta_data$dossi23 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi23 === void 0 || (_this$meta_data$dossi23 = _this$meta_data$dossi23[credtb2]) === null || _this$meta_data$dossi23 === void 0 ? void 0 : _this$meta_data$dossi23["objet_detaille_credit"];
            this.code_caf = (_this$meta_data$dossi24 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi24 === void 0 || (_this$meta_data$dossi24 = _this$meta_data$dossi24[credtb0]) === null || _this$meta_data$dossi24 === void 0 ? void 0 : _this$meta_data$dossi24["caf"];
            this.montant_frais_percent = (_this$meta_data$dossi25 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi25 === void 0 || (_this$meta_data$dossi25 = _this$meta_data$dossi25[credtb1]) === null || _this$meta_data$dossi25 === void 0 ? void 0 : _this$meta_data$dossi25["valeur_garantieaccorde"];
            this.echeance_interet = Math.ceil((_this$meta_data$dossi26 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi26 === void 0 || (_this$meta_data$dossi26 = _this$meta_data$dossi26[credtb1]) === null || _this$meta_data$dossi26 === void 0 || (_this$meta_data$dossi26 = _this$meta_data$dossi26["echeance"]) === null || _this$meta_data$dossi26 === void 0 ? void 0 : _this$meta_data$dossi26["interet"]);
            this.encours = (_this$meta_data$dossi27 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi27 === void 0 || (_this$meta_data$dossi27 = _this$meta_data$dossi27[credtb0]) === null || _this$meta_data$dossi27 === void 0 ? void 0 : _this$meta_data$dossi27['encours_actuel'];
            // console.log('source_de_remboursement', this.meta_data['dossier_credit']["cred_pub_tb_3"]?.source_de_remboursement)
          } else if (this.meta_data['dossier_credit']["cred_pub_tb_470"] == undefined && this.meta_data['dossier_credit']["cred_pub_tb_0470"] == undefined) {
            var _this$meta_data$dossi28;
            // console.log("cred_pub_tb_47 exist")
            // && this.meta_data['dossier_credit']["cred_pub_tb_047"] == undefined
            this.montant_credit = (_this$meta_data$dossi28 = this.meta_data['dossier_credit']["cred_pub_tb_47"]) === null || _this$meta_data$dossi28 === void 0 ? void 0 : _this$meta_data$dossi28["montant_credit_propo_analyste"];

            // console.log('test1', this.meta_data['dossier_credit']["cred_pub_tb_47"]?.montant_credit_propo_analyste)
          } else if (this.meta_data['dossier_credit']["cred_pub_tb_0470"] == undefined && this.meta_data['dossier_credit']["cred_pub_tb_470"] != undefined) {
            var _this$meta_data$dossi29, _this$meta_data$dossi30, _this$meta_data$dossi31, _this$meta_data$dossi32, _this$meta_data$dossi33, _this$meta_data$dossi34, _this$meta_data$dossi35, _this$meta_data$dossi36, _this$meta_data$dossi37, _this$meta_data$dossi38, _this$meta_data$dossi39, _this$meta_data$dossi40, _this$meta_data$dossi41, _this$meta_data$dossi42;
            // this.meta_data['dossier_credit']["cred_pub_tb_047"] == undefined &&
            console.log("cred_pub_tb_470 exist");
            // console.log("loadLatestAmount ",this.loadLatestAmount())

            this.montant_credit = (_this$meta_data$dossi29 = this.meta_data['dossier_credit']["cred_pub_tb_470"]) === null || _this$meta_data$dossi29 === void 0 ? void 0 : _this$meta_data$dossi29["montant_credit_propo_analyste"];
            this.taux_credit = (_this$meta_data$dossi30 = this.meta_data['dossier_credit']["cred_pub_tb_470"]) === null || _this$meta_data$dossi30 === void 0 ? void 0 : _this$meta_data$dossi30["taux_credit_propose_analyste"];
            this.duree_credit = (_this$meta_data$dossi31 = this.meta_data['dossier_credit']["cred_pub_tb_470"]) === null || _this$meta_data$dossi31 === void 0 ? void 0 : _this$meta_data$dossi31["duree_credit_propo_analyste"];
            this.montant_frais = (_this$meta_data$dossi32 = this.meta_data['dossier_credit']["cred_pub_tb_470"]) === null || _this$meta_data$dossi32 === void 0 ? void 0 : _this$meta_data$dossi32["montant_frais_propo_analyste"];
            this.montant_frais_risque = (_this$meta_data$dossi33 = this.meta_data['dossier_credit']["cred_pub_tb_470"]) === null || _this$meta_data$dossi33 === void 0 ? void 0 : _this$meta_data$dossi33["montant_frais_risque_propo_analyste"];
            this.montant_frais_assurance = (_this$meta_data$dossi34 = this.meta_data['dossier_credit']["cred_pub_tb_470"]) === null || _this$meta_data$dossi34 === void 0 ? void 0 : _this$meta_data$dossi34["montant_frais_assurance_propo_analyste"];
            this.depot_garantie = (_this$meta_data$dossi35 = this.meta_data['dossier_credit']["cred_pub_tb_470"]) === null || _this$meta_data$dossi35 === void 0 ? void 0 : _this$meta_data$dossi35["depot_garantie_srcf"];
            this.montant_crsd = (_this$meta_data$dossi36 = this.meta_data['dossier_credit']["cred_pub_tb_470"]) === null || _this$meta_data$dossi36 === void 0 ? void 0 : _this$meta_data$dossi36["montant_crsd_src"];
            this.montant_pep = (_this$meta_data$dossi37 = this.meta_data['dossier_credit']["cred_pub_tb_470"]) === null || _this$meta_data$dossi37 === void 0 ? void 0 : _this$meta_data$dossi37["montant_pep_src"];
            this.motif_credit = (_this$meta_data$dossi38 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi38 === void 0 || (_this$meta_data$dossi38 = _this$meta_data$dossi38[credtb2]) === null || _this$meta_data$dossi38 === void 0 ? void 0 : _this$meta_data$dossi38["objet_detaille_credit"];
            this.code_caf = (_this$meta_data$dossi39 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi39 === void 0 || (_this$meta_data$dossi39 = _this$meta_data$dossi39[credtb0]) === null || _this$meta_data$dossi39 === void 0 ? void 0 : _this$meta_data$dossi39["caf"];
            this.montant_frais_percent = (_this$meta_data$dossi40 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi40 === void 0 || (_this$meta_data$dossi40 = _this$meta_data$dossi40[credtb1]) === null || _this$meta_data$dossi40 === void 0 ? void 0 : _this$meta_data$dossi40["valeur_garantieaccorde"];
            this.echeance_interet = Math.ceil((_this$meta_data$dossi41 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi41 === void 0 || (_this$meta_data$dossi41 = _this$meta_data$dossi41[credtb1]) === null || _this$meta_data$dossi41 === void 0 || (_this$meta_data$dossi41 = _this$meta_data$dossi41["echeance"]) === null || _this$meta_data$dossi41 === void 0 ? void 0 : _this$meta_data$dossi41["interet"]);
            this.encours = (_this$meta_data$dossi42 = this.meta_data['dossier_credit'][credtb0]) === null || _this$meta_data$dossi42 === void 0 ? void 0 : _this$meta_data$dossi42['encours_actuel'];

            // console.log('echeance_interet', Math.ceil(this.meta_data['dossier_credit']?.[credtb1]?.["echeance"]?.["interet"]))
          }
          // else
          //     if (this.meta_data['dossier_credit']["cred_pub_tb_0470"] == undefined) {

          //          console.log("cred_pub_tb_047 exist")

          //         this.montant_credit = this.meta_data['dossier_credit']["cred_pub_tb_047"]?.["montant_credit_propo_analyste"]
          //         this.taux_credit = this.meta_data['dossier_credit']["cred_pub_tb_047"]?.["taux_credit_propose_analyste"]
          //         this.duree_credit = this.meta_data['dossier_credit']["cred_pub_tb_047"]?.["duree_credit_propo_analyste"]
          //         this.montant_frais = this.meta_data['dossier_credit']["cred_pub_tb_047"]?.["montant_frais_propo_analyste"]
          //         this.montant_frais_risque = this.meta_data['dossier_credit']["cred_pub_tb_047"]?.["montant_frais_risque_propo_analyste"]
          //         this.montant_frais_assurance = this.meta_data['dossier_credit']["cred_pub_tb_047"]?.["montant_frais_assurance_propo_analyste"]
          //         this.depot_garantie = this.meta_data['dossier_credit']["cred_pub_tb_047"]?.["depot_garantie_arcg"]
          //         this.montant_crsd = this.meta_data['dossier_credit']["cred_pub_tb_047"]?.["montant_crsd_arcg"]
          //         this.montant_pep = this.meta_data['dossier_credit']["cred_pub_tb_047"]?.["montant_pep_arcg"]
          //         this.motif_credit = this.meta_data['dossier_credit']["cred_pub_tb_2"]?.["objet_detaille_credit"]
          //         this.code_caf = this.meta_data['dossier_credit']?.[credtb0]?.["caf"]
          //         this.montant_frais_percent = this.meta_data['dossier_credit']?.[credtb1]?.["valeur_garantieaccorde"]
          //         this.echeance_interet = Math.ceil(this.meta_data['dossier_credit']?.[credtb1]?.["echeance"]?.["interet"])
          //         this.encours = this.meta_data['dossier_credit']?.[credtb0]?.['encours_actuel']

          //     }
          else if (this.meta_data['dossier_credit']["cred_pub_tb_47"] != undefined && this.meta_data['dossier_credit']["cred_pub_tb_470"] != undefined && this.meta_data['dossier_credit']["cred_pub_tb_0470"] != undefined) {
            var _this$meta_data$dossi43, _this$meta_data$dossi44, _this$meta_data$dossi45, _this$meta_data$dossi46, _this$meta_data$dossi47, _this$meta_data$dossi48, _this$meta_data$dossi49, _this$meta_data$dossi50, _this$meta_data$dossi51, _this$meta_data$dossi52, _this$meta_data$dossi53, _this$meta_data$dossi54, _this$meta_data$dossi55, _this$meta_data$dossi56;
            // console.log("exist  cred_pub_tb_47 cred_pub_tb_470 cred_pub_tb_047 cred_pub_tb_0470")
            // && this.meta_data['dossier_credit']["cred_pub_tb_047"] != undefined

            // console.log("loadLatestAmount ",this.loadLatestAmount())

            console.log("cred_pub_tb_0470 exist");
            this.montant_credit = (_this$meta_data$dossi43 = this.meta_data['dossier_credit']["cred_pub_tb_0470"]) === null || _this$meta_data$dossi43 === void 0 ? void 0 : _this$meta_data$dossi43["montant_credit_propo_analyste"];
            this.taux_credit = (_this$meta_data$dossi44 = this.meta_data['dossier_credit']["cred_pub_tb_0470"]) === null || _this$meta_data$dossi44 === void 0 ? void 0 : _this$meta_data$dossi44["taux_credit_propose_analyste"];
            this.duree_credit = (_this$meta_data$dossi45 = this.meta_data['dossier_credit']["cred_pub_tb_0470"]) === null || _this$meta_data$dossi45 === void 0 ? void 0 : _this$meta_data$dossi45["duree_credit_propo_analyste"];
            this.montant_frais = (_this$meta_data$dossi46 = this.meta_data['dossier_credit']["cred_pub_tb_0470"]) === null || _this$meta_data$dossi46 === void 0 ? void 0 : _this$meta_data$dossi46["montant_frais_propo_analyste"];
            this.montant_frais_risque = (_this$meta_data$dossi47 = this.meta_data['dossier_credit']["cred_pub_tb_0470"]) === null || _this$meta_data$dossi47 === void 0 ? void 0 : _this$meta_data$dossi47["montant_frais_risque_propo_analyste"];
            this.montant_frais_assurance = (_this$meta_data$dossi48 = this.meta_data['dossier_credit']["cred_pub_tb_0470"]) === null || _this$meta_data$dossi48 === void 0 ? void 0 : _this$meta_data$dossi48["montant_frais_assurance_propo_analyste"];
            this.depot_garantie = (_this$meta_data$dossi49 = this.meta_data['dossier_credit']["cred_pub_tb_0470"]) === null || _this$meta_data$dossi49 === void 0 ? void 0 : _this$meta_data$dossi49["depot_garantie_srcg"];
            this.montant_crsd = (_this$meta_data$dossi50 = this.meta_data['dossier_credit']["cred_pub_tb_0470"]) === null || _this$meta_data$dossi50 === void 0 ? void 0 : _this$meta_data$dossi50["montant_crsd_srcg"];
            this.montant_pep = (_this$meta_data$dossi51 = this.meta_data['dossier_credit']["cred_pub_tb_0470"]) === null || _this$meta_data$dossi51 === void 0 ? void 0 : _this$meta_data$dossi51["montant_pep_srcg"];
            this.motif_credit = (_this$meta_data$dossi52 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi52 === void 0 || (_this$meta_data$dossi52 = _this$meta_data$dossi52[credtb2]) === null || _this$meta_data$dossi52 === void 0 ? void 0 : _this$meta_data$dossi52["objet_detaille_credit"];
            this.code_caf = (_this$meta_data$dossi53 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi53 === void 0 || (_this$meta_data$dossi53 = _this$meta_data$dossi53[credtb0]) === null || _this$meta_data$dossi53 === void 0 ? void 0 : _this$meta_data$dossi53["caf"];
            this.montant_frais_percent = (_this$meta_data$dossi54 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi54 === void 0 || (_this$meta_data$dossi54 = _this$meta_data$dossi54[credtb1]) === null || _this$meta_data$dossi54 === void 0 ? void 0 : _this$meta_data$dossi54["valeur_garantieaccorde"];
            this.echeance_interet = Math.ceil((_this$meta_data$dossi55 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi55 === void 0 || (_this$meta_data$dossi55 = _this$meta_data$dossi55[credtb1]) === null || _this$meta_data$dossi55 === void 0 || (_this$meta_data$dossi55 = _this$meta_data$dossi55["echeance"]) === null || _this$meta_data$dossi55 === void 0 ? void 0 : _this$meta_data$dossi55["interet"]);
            this.encours = (_this$meta_data$dossi56 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi56 === void 0 || (_this$meta_data$dossi56 = _this$meta_data$dossi56[credtb0]) === null || _this$meta_data$dossi56 === void 0 ? void 0 : _this$meta_data$dossi56["encours_actuel"];
          }
        }
      }
      if (lentb.length > 0) {
        var _this$meta_data$dossi105;
        if (this.meta_data["dossier_credit"][createdKey] != undefined) {
          var _this$meta_data$dossi57, _this$meta_data$dossi58, _this$meta_data$dossi59, _this$meta_data$dossi60, _this$meta_data$dossi61;
          //   this.frais_annexe_v = this.meta_data.dossier_credit?.cred_pub_tb_1
          this.formDataToBeWatched.type_credit = (_this$meta_data$dossi57 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi57 === void 0 || (_this$meta_data$dossi57 = _this$meta_data$dossi57[credtb1]) === null || _this$meta_data$dossi57 === void 0 ? void 0 : _this$meta_data$dossi57["type_credit"];
          this.formDataToBeWatched.type_credit = (_this$meta_data$dossi58 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi58 === void 0 || (_this$meta_data$dossi58 = _this$meta_data$dossi58[credtb1]) === null || _this$meta_data$dossi58 === void 0 ? void 0 : _this$meta_data$dossi58["type_demande"];
          this.formDataToBeWatched = this.meta_data["dossier_credit"][createdKey];
          this.total_source_remboursement = (_this$meta_data$dossi59 = this.meta_data['dossier_credit']["cred_pub_tb_3"]) === null || _this$meta_data$dossi59 === void 0 ? void 0 : _this$meta_data$dossi59["total_source_remboursement"];
          this.epargne_obligatoire = (_this$meta_data$dossi60 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi60 === void 0 || (_this$meta_data$dossi60 = _this$meta_data$dossi60[credtb1]) === null || _this$meta_data$dossi60 === void 0 ? void 0 : _this$meta_data$dossi60["vmontant_pep"];
          this.source_de_remboursement = (_this$meta_data$dossi61 = this.meta_data['dossier_credit']["cred_pub_tb_3"]) === null || _this$meta_data$dossi61 === void 0 ? void 0 : _this$meta_data$dossi61["source_de_remboursement"];
          if (this.meta_data['dossier_credit']["cred_pub_tb_47"] == undefined && this.meta_data['dossier_credit']["cred_pub_tb_470"] == undefined && this.meta_data['dossier_credit']["cred_pub_tb_0470"] == undefined) {
            var _this$meta_data$dossi62, _this$meta_data$dossi63, _this$meta_data$dossi64, _this$meta_data$dossi65, _this$meta_data$dossi66, _this$meta_data$dossi67, _this$meta_data$dossi68, _this$meta_data$dossi69, _this$meta_data$dossi70, _this$meta_data$dossi71, _this$meta_data$dossi72, _this$meta_data$dossi73, _this$meta_data$dossi74, _this$meta_data$dossi75;
            // && this.meta_data['dossier_credit']["cred_pub_tb_047"] == undefined
            this.montant_credit = this.loadLatestAmount();
            this.taux_credit = (_this$meta_data$dossi62 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi62 === void 0 || (_this$meta_data$dossi62 = _this$meta_data$dossi62[credtb1]) === null || _this$meta_data$dossi62 === void 0 ? void 0 : _this$meta_data$dossi62["taux_credit_propose"];
            this.duree_credit = (_this$meta_data$dossi63 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi63 === void 0 || (_this$meta_data$dossi63 = _this$meta_data$dossi63[credtb1]) === null || _this$meta_data$dossi63 === void 0 ? void 0 : _this$meta_data$dossi63["duree_credit"];
            this.montant_frais = (_this$meta_data$dossi64 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi64 === void 0 || (_this$meta_data$dossi64 = _this$meta_data$dossi64[credtb1]) === null || _this$meta_data$dossi64 === void 0 || (_this$meta_data$dossi64 = _this$meta_data$dossi64['frais'][0]) === null || _this$meta_data$dossi64 === void 0 ? void 0 : _this$meta_data$dossi64["montant_frais"];
            this.montant_frais_risque = (_this$meta_data$dossi65 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi65 === void 0 || (_this$meta_data$dossi65 = _this$meta_data$dossi65[credtb1]) === null || _this$meta_data$dossi65 === void 0 || (_this$meta_data$dossi65 = _this$meta_data$dossi65['frais'][2]) === null || _this$meta_data$dossi65 === void 0 ? void 0 : _this$meta_data$dossi65["montant_frais"];
            console.log("montant frais", (_this$meta_data$dossi66 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi66 === void 0 || (_this$meta_data$dossi66 = _this$meta_data$dossi66[credtb1]) === null || _this$meta_data$dossi66 === void 0 || (_this$meta_data$dossi66 = _this$meta_data$dossi66.frais[0]) === null || _this$meta_data$dossi66 === void 0 ? void 0 : _this$meta_data$dossi66["montant_frais"]);
            this.montant_frais_assurance = (_this$meta_data$dossi67 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi67 === void 0 || (_this$meta_data$dossi67 = _this$meta_data$dossi67[credtb1]) === null || _this$meta_data$dossi67 === void 0 || (_this$meta_data$dossi67 = _this$meta_data$dossi67['frais'][1]) === null || _this$meta_data$dossi67 === void 0 ? void 0 : _this$meta_data$dossi67["montant_frais"];
            this.depot_garantie = (_this$meta_data$dossi68 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi68 === void 0 || (_this$meta_data$dossi68 = _this$meta_data$dossi68[credtb1]) === null || _this$meta_data$dossi68 === void 0 ? void 0 : _this$meta_data$dossi68["garantie"];
            this.montant_crsd = (_this$meta_data$dossi69 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi69 === void 0 || (_this$meta_data$dossi69 = _this$meta_data$dossi69[credtb1]) === null || _this$meta_data$dossi69 === void 0 ? void 0 : _this$meta_data$dossi69["montant_crsd"];
            this.montant_pep = (_this$meta_data$dossi70 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi70 === void 0 || (_this$meta_data$dossi70 = _this$meta_data$dossi70[credtb1]) === null || _this$meta_data$dossi70 === void 0 ? void 0 : _this$meta_data$dossi70["montant_pep"];
            this.motif_credit = (_this$meta_data$dossi71 = this.meta_data['dossier_credit']["cred_pub_tb_2"]) === null || _this$meta_data$dossi71 === void 0 ? void 0 : _this$meta_data$dossi71["objet_detaille_credit"];
            this.code_caf = (_this$meta_data$dossi72 = this.meta_data['dossier_credit'][credtb0]) === null || _this$meta_data$dossi72 === void 0 ? void 0 : _this$meta_data$dossi72['caf'];
            this.montant_frais_percent = (_this$meta_data$dossi73 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi73 === void 0 || (_this$meta_data$dossi73 = _this$meta_data$dossi73[credtb1]) === null || _this$meta_data$dossi73 === void 0 ? void 0 : _this$meta_data$dossi73["valeur_garantieaccorde"];
            this.echeance_interet = Math.ceil((_this$meta_data$dossi74 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi74 === void 0 || (_this$meta_data$dossi74 = _this$meta_data$dossi74[credtb1]) === null || _this$meta_data$dossi74 === void 0 || (_this$meta_data$dossi74 = _this$meta_data$dossi74["echeance"]) === null || _this$meta_data$dossi74 === void 0 ? void 0 : _this$meta_data$dossi74["interet"]);
            this.encours = (_this$meta_data$dossi75 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi75 === void 0 || (_this$meta_data$dossi75 = _this$meta_data$dossi75[credtb0]) === null || _this$meta_data$dossi75 === void 0 ? void 0 : _this$meta_data$dossi75["encours_actuel"];
          } else if (this.meta_data['dossier_credit']["cred_pub_tb_470"] == undefined && this.meta_data['dossier_credit']["cred_pub_tb_0470"] == undefined) {
            var _this$meta_data$dossi76;
            // && this.meta_data['dossier_credit']["cred_pub_tb_047"] == undefined
            this.montant_credit = (_this$meta_data$dossi76 = this.meta_data['dossier_credit']["cred_pub_tb_47"]) === null || _this$meta_data$dossi76 === void 0 ? void 0 : _this$meta_data$dossi76['montant_credit_propo_analyste'];
          } else if (this.meta_data['dossier_credit']["cred_pub_tb_0470"] == undefined) {
            var _this$meta_data$dossi77, _this$meta_data$dossi78, _this$meta_data$dossi79, _this$meta_data$dossi80, _this$meta_data$dossi81, _this$meta_data$dossi82, _this$meta_data$dossi83, _this$meta_data$dossi84, _this$meta_data$dossi85, _this$meta_data$dossi86, _this$meta_data$dossi87, _this$meta_data$dossi88, _this$meta_data$dossi89, _this$meta_data$dossi90;
            // this.meta_data['dossier_credit']["cred_pub_tb_047"] == undefined &&
            this.montant_credit = (_this$meta_data$dossi77 = this.meta_data['dossier_credit']["cred_pub_tb_470"]) === null || _this$meta_data$dossi77 === void 0 ? void 0 : _this$meta_data$dossi77["montant_credit_propo_analyste"];
            this.taux_credit = (_this$meta_data$dossi78 = this.meta_data['dossier_credit']["cred_pub_tb_470"]) === null || _this$meta_data$dossi78 === void 0 ? void 0 : _this$meta_data$dossi78["taux_credit_propose_analyste"];
            this.duree_credit = (_this$meta_data$dossi79 = this.meta_data['dossier_credit']["cred_pub_tb_470"]) === null || _this$meta_data$dossi79 === void 0 ? void 0 : _this$meta_data$dossi79["duree_credit_propo_analyste"];
            this.montant_frais = (_this$meta_data$dossi80 = this.meta_data['dossier_credit']["cred_pub_tb_470"]) === null || _this$meta_data$dossi80 === void 0 ? void 0 : _this$meta_data$dossi80["montant_frais_propo_analyste"];
            this.montant_frais_risque = (_this$meta_data$dossi81 = this.meta_data['dossier_credit']["cred_pub_tb_470"]) === null || _this$meta_data$dossi81 === void 0 ? void 0 : _this$meta_data$dossi81["montant_frais_risque_propo_analyste"];
            this.montant_frais_assurance = (_this$meta_data$dossi82 = this.meta_data['dossier_credit']["cred_pub_tb_470"]) === null || _this$meta_data$dossi82 === void 0 ? void 0 : _this$meta_data$dossi82["montant_frais_assurance_propo_analyste"];
            this.depot_garantie = (_this$meta_data$dossi83 = this.meta_data['dossier_credit']["cred_pub_tb_470"]) === null || _this$meta_data$dossi83 === void 0 ? void 0 : _this$meta_data$dossi83["depot_garantie_srcf"];
            this.montant_crsd = (_this$meta_data$dossi84 = this.meta_data['dossier_credit']["cred_pub_tb_470"]) === null || _this$meta_data$dossi84 === void 0 ? void 0 : _this$meta_data$dossi84["montant_crsd_src"];
            this.montant_pep = (_this$meta_data$dossi85 = this.meta_data['dossier_credit']["cred_pub_tb_470"]) === null || _this$meta_data$dossi85 === void 0 ? void 0 : _this$meta_data$dossi85["montant_pep_src"];
            this.motif_credit = (_this$meta_data$dossi86 = this.meta_data['dossier_credit']["cred_pub_tb_2"]) === null || _this$meta_data$dossi86 === void 0 ? void 0 : _this$meta_data$dossi86["objet_detaille_credit"];
            this.code_caf = (_this$meta_data$dossi87 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi87 === void 0 || (_this$meta_data$dossi87 = _this$meta_data$dossi87[credtb1]) === null || _this$meta_data$dossi87 === void 0 ? void 0 : _this$meta_data$dossi87["caf"];
            this.montant_frais_percent = (_this$meta_data$dossi88 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi88 === void 0 || (_this$meta_data$dossi88 = _this$meta_data$dossi88[credtb1]) === null || _this$meta_data$dossi88 === void 0 ? void 0 : _this$meta_data$dossi88["valeur_garantieaccorde"];
            this.echeance_interet = Math.ceil((_this$meta_data$dossi89 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi89 === void 0 || (_this$meta_data$dossi89 = _this$meta_data$dossi89[credtb1]) === null || _this$meta_data$dossi89 === void 0 || (_this$meta_data$dossi89 = _this$meta_data$dossi89["echeance"]) === null || _this$meta_data$dossi89 === void 0 ? void 0 : _this$meta_data$dossi89["interet"]);
            this.encours = (_this$meta_data$dossi90 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi90 === void 0 || (_this$meta_data$dossi90 = _this$meta_data$dossi90[credtb0]) === null || _this$meta_data$dossi90 === void 0 ? void 0 : _this$meta_data$dossi90["encours_actuel"];
          }
          // else
          //     if (this.meta_data['dossier_credit']["cred_pub_tb_0470"] == undefined) {

          //         this.montant_credit = this.meta_data['dossier_credit']["cred_pub_tb_047"]?.["montant_credit_propo_analyste"]
          //         this.taux_credit = this.meta_data['dossier_credit']["cred_pub_tb_047"]?.["taux_credit_propose_analyste"]
          //         this.duree_credit = this.meta_data['dossier_credit']["cred_pub_tb_047"]?.["duree_credit_propo_analyste"]
          //         this.montant_frais = this.meta_data['dossier_credit']["cred_pub_tb_047"]?.["montant_frais_propo_analyste"]
          //         this.montant_frais_risque = this.meta_data['dossier_credit']["cred_pub_tb_047"]?.["montant_frais_risque_propo_analyste"]
          //         this.montant_frais_assurance = this.meta_data['dossier_credit']["cred_pub_tb_047"]?.["montant_frais_assurance_propo_analyste"]
          //         this.depot_garantie = this.meta_data['dossier_credit']["cred_pub_tb_047"]?.["depot_garantie_arcg"]
          //         this.montant_crsd = this.meta_data['dossier_credit']["cred_pub_tb_047"]?.["montant_crsd_arcg"]
          //         this.montant_pep = this.meta_data['dossier_credit']["cred_pub_tb_047"]?.["montant_pep_arcg"]
          //         this.motif_credit = this.meta_data['dossier_credit']["cred_pub_tb_2"]?.["objet_detaille_credit"]
          //         this.code_caf = this.meta_data['dossier_credit']?.[credtb0]?.["caf"]
          //         this.montant_frais_percent = this.meta_data['dossier_credit']?.[credtb1]?.["valeur_garantieaccorde"]
          //         this.echeance_interet = Math.ceil(this.meta_data['dossier_credit']?.[credtb1]?.["echeance"]?.["interet"])
          //         this.encours = this.meta_data['dossier_credit']?.[credtb0]?.["encours_actuel"]

          //     }
          else if (this.meta_data['dossier_credit']["cred_pub_tb_47"] != undefined && this.meta_data['dossier_credit']["cred_pub_tb_470"] != undefined && this.meta_data['dossier_credit']["cred_pub_tb_0470"] != undefined) {
            var _this$meta_data$dossi91, _this$meta_data$dossi92, _this$meta_data$dossi93, _this$meta_data$dossi94, _this$meta_data$dossi95, _this$meta_data$dossi96, _this$meta_data$dossi97, _this$meta_data$dossi98, _this$meta_data$dossi99, _this$meta_data$dossi100, _this$meta_data$dossi101, _this$meta_data$dossi102, _this$meta_data$dossi103, _this$meta_data$dossi104;
            // && this.meta_data['dossier_credit']["cred_pub_tb_047"] != undefined
            this.montant_credit = (_this$meta_data$dossi91 = this.meta_data['dossier_credit']["cred_pub_tb_0470"]) === null || _this$meta_data$dossi91 === void 0 ? void 0 : _this$meta_data$dossi91["montant_credit_propo_analyste"];
            this.taux_credit = (_this$meta_data$dossi92 = this.meta_data['dossier_credit']["cred_pub_tb_0470"]) === null || _this$meta_data$dossi92 === void 0 ? void 0 : _this$meta_data$dossi92["taux_credit_propose_analyste"];
            this.duree_credit = (_this$meta_data$dossi93 = this.meta_data['dossier_credit']["cred_pub_tb_0470"]) === null || _this$meta_data$dossi93 === void 0 ? void 0 : _this$meta_data$dossi93["duree_credit_propo_analyste"];
            this.montant_frais = (_this$meta_data$dossi94 = this.meta_data['dossier_credit']["cred_pub_tb_0470"]) === null || _this$meta_data$dossi94 === void 0 ? void 0 : _this$meta_data$dossi94["montant_frais_propo_analyste"];
            this.montant_frais_risque = (_this$meta_data$dossi95 = this.meta_data['dossier_credit']["cred_pub_tb_0470"]) === null || _this$meta_data$dossi95 === void 0 ? void 0 : _this$meta_data$dossi95["montant_frais_risque_propo_analyste"];
            this.montant_frais_assurance = (_this$meta_data$dossi96 = this.meta_data['dossier_credit']["cred_pub_tb_0470"]) === null || _this$meta_data$dossi96 === void 0 ? void 0 : _this$meta_data$dossi96["montant_frais_assurance_propo_analyste"];
            this.depot_garantie = (_this$meta_data$dossi97 = this.meta_data['dossier_credit']["cred_pub_tb_0470"]) === null || _this$meta_data$dossi97 === void 0 ? void 0 : _this$meta_data$dossi97["depot_garantie_srcg"];
            this.montant_crsd = (_this$meta_data$dossi98 = this.meta_data['dossier_credit']["cred_pub_tb_0470"]) === null || _this$meta_data$dossi98 === void 0 ? void 0 : _this$meta_data$dossi98["montant_crsd_srcg"];
            this.montant_pep = (_this$meta_data$dossi99 = this.meta_data['dossier_credit']["cred_pub_tb_0470"]) === null || _this$meta_data$dossi99 === void 0 ? void 0 : _this$meta_data$dossi99["montant_pep_srcg"];
            this.motif_credit = (_this$meta_data$dossi100 = this.meta_data['dossier_credit']["cred_pub_tb_2"]) === null || _this$meta_data$dossi100 === void 0 ? void 0 : _this$meta_data$dossi100["objet_detaille_credit"];
            this.code_caf = (_this$meta_data$dossi101 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi101 === void 0 || (_this$meta_data$dossi101 = _this$meta_data$dossi101[credtb0]) === null || _this$meta_data$dossi101 === void 0 ? void 0 : _this$meta_data$dossi101["caf"];
            this.montant_frais_percent = (_this$meta_data$dossi102 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi102 === void 0 || (_this$meta_data$dossi102 = _this$meta_data$dossi102[credtb1]) === null || _this$meta_data$dossi102 === void 0 ? void 0 : _this$meta_data$dossi102["valeur_garantieaccorde"];
            this.echeance_interet = Math.ceil((_this$meta_data$dossi103 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi103 === void 0 || (_this$meta_data$dossi103 = _this$meta_data$dossi103[credtb1]) === null || _this$meta_data$dossi103 === void 0 || (_this$meta_data$dossi103 = _this$meta_data$dossi103["echeance"]) === null || _this$meta_data$dossi103 === void 0 ? void 0 : _this$meta_data$dossi103["interet"]);
            this.encours = (_this$meta_data$dossi104 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi104 === void 0 || (_this$meta_data$dossi104 = _this$meta_data$dossi104[credtb0]) === null || _this$meta_data$dossi104 === void 0 ? void 0 : _this$meta_data$dossi104["encours_actuel"];
          }

          // this.montant_demander = this.meta_data['dossier_credit']["cred_pub_tb_1"]?.montant_demander
          // this.taux_credit = this.meta_data['dossier_credit']["cred_pub_tb_1"]?.taux_credit
          // this.taux_credit_propose = this.meta_data['dossier_credit']["cred_pub_tb_1"]?.taux_credit_propose

          // this.duree_credit = this.meta_data['dossier_credit']["cred_pub_tb_1"]?.duree_credit

          // this.periodicite = this.meta_data['dossier_credit']["cred_pub_tb_1"]?.periodicite

          // this.mode_paiement = this.meta_data['dossier_credit']["cred_pub_tb_1"]?.mode_paiement

          // if (this.meta_data['dossier_credit']["cred_pub_tb_1"]?.frais != undefined) {
          //     this.montant_frais = this.meta_data['dossier_credit']["cred_pub_tb_1"]?.frais[0]?.montant_frais
          //     this.montant_frais_risque = this.meta_data['dossier_credit']["cred_pub_tb_1"]?.frais[2]?.montant_frais
          //     this.montant_frais_assurance = this.meta_data['dossier_credit']["cred_pub_tb_1"]?.frais[1]?.montant_frais
          // }
          // this.formDataToBeWatched.depot_garantie_arcf = this.meta_data['dossier_credit']["cred_pub_tb_1"]?.garantie

          // this.depot_garantie = this.meta_data['dossier_credit']["cred_pub_tb_1"]?.garantie
          // this.montant_crsd = this.meta_data['dossier_credit']["cred_pub_tb_1"]?.montant_crsd
          // this.montant_pep = this.meta_data['dossier_credit']["cred_pub_tb_1"]?.montant_pep

          // //   this.crsd=this.meta_data['dossier_credit']["cred_pub_tb_1"]?.montant_crsd

          // this.duree_credit_demande = this.meta_data['dossier_credit']["cred_pub_tb_1"]?.duree_credit_demande
          // this.mode_paiement_demande = this.meta_data['dossier_credit']["cred_pub_tb_1"]?.mode_paiement_demande
        }

        // Close table by default
        this.defaultRetract(false, (_this$meta_data$dossi105 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi105 === void 0 ? void 0 : _this$meta_data$dossi105.applied_templ_id);
      }
    },
    handleInput: function handleInput(evt) {
      // this.formDataToBeWatched['frais'] = this.frais
      //   this.formDataToBeWatched['frais'] = this.frais
      //   this.formDataToBeWatched.val_total_frais = this.totalFrais;

      //   let duree = 0
      //   let taux = 0
      //   let montant = 0
      //   let frais = 0
    },
    loadLatestAmount: function loadLatestAmount() {
      var caract_inter_pret = this.meta_data['dossier_credit']["caract_inter_pret"];
      var role_sigle = caract_inter_pret[caract_inter_pret.length - 1]["role_sigle"];
      var targetKey = "montant_pret_" + role_sigle;
      // console.log("latest_amount", caract_inter_pret[caract_inter_pret.length -1][targetKey])
      return caract_inter_pret[caract_inter_pret.length - 1][targetKey];
    },
    loadLatestDuree: function loadLatestDuree() {
      var caract_inter_pret = this.meta_data['dossier_credit']["caract_inter_pret"];
      // console.log("latest_amount", caract_inter_pret[caract_inter_pret.length -1][targetKey])
      return caract_inter_pret[caract_inter_pret.length - 1]["duree_pret"];
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
        id: "cr2-head"
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/servicejurd/SJ2.vue?vue&type=template&id=31de33a3&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/servicejurd/SJ2.vue?vue&type=template&id=31de33a3&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$formDataToBeWatch, _vm$meta_data, _vm$meta_data2, _vm$meta_data3, _vm$meta_data4, _vm$meta_data5, _vm$meta_data6, _vm$meta_data7, _vm$meta_data8, _vm$meta_data9, _vm$meta_data0, _vm$formDataToBeWatch2;
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
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc pb-0 pt-2"
  }, [_c("h6", {
    ref: "topdiv",
    staticClass: "head",
    attrs: {
      id: "cr2-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Caractéristiques du prêt\n\n                        ")]), _vm._v(" "), _c("div", {
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
      "for": "type_demande"
    }
  }, [_vm._v("Type de demande\n                        ")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.formDataToBeWatched.type_demande,
      expression: "formDataToBeWatched.type_demande\n                            ",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "type_demande",
      disabled: ""
    },
    domProps: {
      value: _vm.formDataToBeWatched.type_demande
    },
    on: {
      input: _vm.handleInput,
      change: function change($event) {
        return _vm.$set(_vm.formDataToBeWatched, "type_demande", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "type_credit"
    }
  }, [_vm._v("Type de crédit\n                        ")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.formDataToBeWatched.type_credit,
      expression: "formDataToBeWatched.type_credit",
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
      value: _vm.formDataToBeWatched.type_credit
    },
    on: {
      input: _vm.handleInput,
      change: function change($event) {
        return _vm.$set(_vm.formDataToBeWatched, "type_credit", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(0), _vm._v(" "), _c("currency-input", {
    attrs: {
      value: _vm.montant_credit,
      id: "montant_credit",
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "taux_credit"
    }
  }, [_vm._v("Taux du crédit demandé (%)\n                        ")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.taux_credit_demande,
      expression: "formDataToBeWatched.taux_credit_demande\n                            "
    }],
    staticClass: "form-control",
    attrs: {
      step: "any",
      type: "number",
      id: "taux_credit_demande",
      disabled: ""
    },
    domProps: {
      value: _vm.formDataToBeWatched.taux_credit_demande
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "taux_credit_demande", $event.target.value);
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(1), _vm._v(" "), _c("currency-input", {
    attrs: {
      value: _vm.taux_credit,
      id: "taux_credit",
      "float": "",
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(2), _vm._v(" "), _c("input", {
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
      type: "number",
      id: "duree_credit",
      disabled: ""
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
  }, [_vm._m(3), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.formDataToBeWatched.duree_credit_approuve,
      expression: "formDataToBeWatched.duree_credit_approuve",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "number",
      id: "duree_credit_approuve",
      disabled: ""
    },
    domProps: {
      value: _vm.formDataToBeWatched.duree_credit_approuve
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.formDataToBeWatched, "duree_credit_approuve", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(4), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.formDataToBeWatched.type_paiement_approuve,
      expression: "formDataToBeWatched.type_paiement_approuve",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      id: "type_paiement_approuve",
      disabled: ""
    },
    domProps: {
      value: _vm.formDataToBeWatched.type_paiement_approuve
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.formDataToBeWatched, "type_paiement_approuve", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(5), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.formDataToBeWatched.periodicite_paiement_approuve,
      expression: "formDataToBeWatched.periodicite_paiement_approuve",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "periodicite_paiement_approuve",
      disabled: ""
    },
    domProps: {
      value: _vm.formDataToBeWatched.periodicite_paiement_approuve
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.formDataToBeWatched, "periodicite_paiement_approuve", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(6), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.formDataToBeWatched.premiere_echeance,
      expression: "formDataToBeWatched.premiere_echeance",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "date",
      id: "premiere_echeance",
      disabled: ""
    },
    domProps: {
      value: _vm.formDataToBeWatched.premiere_echeance
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.formDataToBeWatched, "premiere_echeance", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(7), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.formDataToBeWatched.derniere_echeance,
      expression: "formDataToBeWatched.derniere_echeance",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "date",
      id: "derniere_echeance",
      disabled: ""
    },
    domProps: {
      value: _vm.formDataToBeWatched.derniere_echeance
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.formDataToBeWatched, "derniere_echeance", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(8), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.formDataToBeWatched.date_valeur,
      expression: "formDataToBeWatched.date_valeur",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "date",
      id: "date_valeur",
      disabled: ""
    },
    domProps: {
      value: _vm.formDataToBeWatched.date_valeur
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.formDataToBeWatched, "date_valeur", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _vm.seen2 == true ? _c("div", {
    staticClass: "row mt-4"
  }, [_c("div", {
    staticClass: "relook-header",
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        _vm.seen2 = !_vm.seen2;
      }
    }
  }, [_c("h6", {
    "class": "subdiv" + this.tb_name,
    attrs: {
      id: "frais-annexes"
    }
  }, [_vm._v("\n                            Frais annexes\n                            "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(9), _vm._v(" "), _c("currency-input", {
    attrs: {
      value: _vm.montant_frais,
      id: "montant_frais",
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(10), _vm._v(" "), _c("currency-input", {
    attrs: {
      value: _vm.montant_frais_percent,
      "float": "",
      id: "montant_frais_percent",
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(11), _vm._v(" "), _c("currency-input", {
    attrs: {
      value: _vm.montant_frais_risque,
      id: "montant_frais_risque",
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(12), _vm._v(" "), _c("currency-input", {
    attrs: {
      value: _vm.montant_frais_assurance,
      id: "montant_frais_assurance",
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(13), _vm._v(" "), _c("currency-input", {
    attrs: {
      value: _vm.depot_garantie,
      id: "depot_garantie",
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(14), _vm._v(" "), _c("currency-input", {
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
  }, [_vm._m(15), _vm._v(" "), _c("currency-input", {
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
  }, [_vm._m(16), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.code_caf,
      expression: "code_caf",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "code_caf",
      disabled: ""
    },
    domProps: {
      value: _vm.code_caf
    },
    on: {
      change: function change($event) {
        _vm.code_caf = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(17), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "echeance_interet",
      disabled: ""
    },
    model: {
      value: _vm.echeance_interet,
      callback: function callback($$v) {
        _vm.echeance_interet = $$v;
      },
      expression: "echeance_interet"
    }
  })], 1), _vm._v(" "), ((_vm$meta_data = _vm.meta_data) === null || _vm$meta_data === void 0 || (_vm$meta_data = _vm$meta_data.dossier_credit) === null || _vm$meta_data === void 0 || (_vm$meta_data = _vm$meta_data[this.determineCredPubTables((_vm$meta_data2 = _vm.meta_data) === null || _vm$meta_data2 === void 0 || (_vm$meta_data2 = _vm$meta_data2.dossier_credit) === null || _vm$meta_data2 === void 0 ? void 0 : _vm$meta_data2.applied_templ_name)[1]]) === null || _vm$meta_data === void 0 || (_vm$meta_data = _vm$meta_data["echeance"]) === null || _vm$meta_data === void 0 ? void 0 : _vm$meta_data["echeance"]) != null ? _c("div", {
    staticClass: "mt-4"
  }, [_vm._m(18), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mb-3"
  }, [_vm._m(19), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", [_vm._v("\n                                        " + _vm._s((_vm$meta_data3 = _vm.meta_data) === null || _vm$meta_data3 === void 0 || (_vm$meta_data3 = _vm$meta_data3.dossier_credit) === null || _vm$meta_data3 === void 0 || (_vm$meta_data3 = _vm$meta_data3[this.determineCredPubTables((_vm$meta_data4 = _vm.meta_data) === null || _vm$meta_data4 === void 0 || (_vm$meta_data4 = _vm$meta_data4.dossier_credit) === null || _vm$meta_data4 === void 0 ? void 0 : _vm$meta_data4.applied_templ_name)[1]]) === null || _vm$meta_data3 === void 0 || (_vm$meta_data3 = _vm$meta_data3["echeance"]) === null || _vm$meta_data3 === void 0 ? void 0 : _vm$meta_data3["coutCapital"]) + "\n                                        %\n                                    ")]), _vm._v(" "), _c("td", [_vm._v("\n\n                                        " + _vm._s(_vm._f("formatNumber")(Math.ceil((_vm$meta_data5 = _vm.meta_data) === null || _vm$meta_data5 === void 0 || (_vm$meta_data5 = _vm$meta_data5.dossier_credit) === null || _vm$meta_data5 === void 0 || (_vm$meta_data5 = _vm$meta_data5[this.determineCredPubTables((_vm$meta_data6 = _vm.meta_data) === null || _vm$meta_data6 === void 0 || (_vm$meta_data6 = _vm$meta_data6.dossier_credit) === null || _vm$meta_data6 === void 0 ? void 0 : _vm$meta_data6.applied_templ_name)[1]]) === null || _vm$meta_data5 === void 0 || (_vm$meta_data5 = _vm$meta_data5["echeance"]) === null || _vm$meta_data5 === void 0 ? void 0 : _vm$meta_data5["cashflow"]))) + "\n                                    ")]), _vm._v(" "), _c("td", [_vm._v("\n                                        " + _vm._s((_vm$meta_data7 = _vm.meta_data) === null || _vm$meta_data7 === void 0 || (_vm$meta_data7 = _vm$meta_data7.dossier_credit) === null || _vm$meta_data7 === void 0 || (_vm$meta_data7 = _vm$meta_data7[this.determineCredPubTables((_vm$meta_data8 = _vm.meta_data) === null || _vm$meta_data8 === void 0 || (_vm$meta_data8 = _vm$meta_data8.dossier_credit) === null || _vm$meta_data8 === void 0 ? void 0 : _vm$meta_data8.applied_templ_name)[1]]) === null || _vm$meta_data7 === void 0 ? void 0 : _vm$meta_data7["echeance"]["rentabilitepret"]) + "\n                                        %\n                                    ")]), _vm._v(" "), _c("td", [_vm._v("\n                                        " + _vm._s((_vm$meta_data9 = _vm.meta_data) === null || _vm$meta_data9 === void 0 || (_vm$meta_data9 = _vm$meta_data9.dossier_credit) === null || _vm$meta_data9 === void 0 || (_vm$meta_data9 = _vm$meta_data9[this.determineCredPubTables((_vm$meta_data0 = _vm.meta_data) === null || _vm$meta_data0 === void 0 || (_vm$meta_data0 = _vm$meta_data0.dossier_credit) === null || _vm$meta_data0 === void 0 ? void 0 : _vm$meta_data0.applied_templ_name)[1]]) === null || _vm$meta_data9 === void 0 || (_vm$meta_data9 = _vm$meta_data9["echeance"]) === null || _vm$meta_data9 === void 0 ? void 0 : _vm$meta_data9["rentabiliteAnnuel"]) + "\n                                        %\n                                    ")])])])])]) : _vm._e()]) : _c("div", {
    staticClass: "row mt-4 mb-4"
  }, [_c("div", {
    staticClass: "relook-header",
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        _vm.seen2 = !_vm.seen2;
      }
    }
  }, [_c("h6", {
    "class": "subdiv" + this.tb_name,
    attrs: {
      id: "frais-annexes"
    }
  }, [_vm._v("\n                            Frais annexes\n                            "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])])]), _vm._v(" "), _c("div", {
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
      id: "cr2-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Caractéristiques du prêt\n                        ")]), _vm._v(" "), _c("div", {
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
  })], 1)])])])])], 1), _vm._v(" "), _c("div"), _vm._v(" "), _c("note-modal", {
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
  }, [_vm._v("Montant approuvé"), _c("span", {
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
  }, [_vm._v("Taux du crédit approuvé"), _c("span", {
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
      "for": "duree_credit"
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
  }, [_vm._v("Durée du crédit approuvée"), _c("span", {
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
  }, [_vm._v("Type de paiement approuvé"), _c("span", {
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
      "for": "periodicite_paiement_approuve"
    }
  }, [_vm._v("Periodicité de remboursement\n                            approuvée"), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v(" Date de la première échéance"), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v(" Date de la dernière échéance "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v(" Date de valeur "), _c("span", {
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
  }, [_vm._v("Frais de dossier approuvé"), _c("span", {
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
  }, [_vm._v("Frais de dossier (%)"), _c("span", {
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
  }, [_vm._v("Prime de risque approuvée"), _c("span", {
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
  }, [_vm._v("Prime d'assurance approuvée"), _c("span", {
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
  }, [_vm._v("Dépot de garantie approuvée"), _c("span", {
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
  }, [_vm._v("CRSD approuvé"), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("PEP approuvé"), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Code CAF "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("intérêts TTC "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("h6", {
    staticClass: "d-flex justify-content-between"
  }, [_c("span", [_vm._v(" Information de rentabilité")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", {
    staticClass: "bg-relooker"
  }, [_c("th", [_vm._v("Coût du capital")]), _vm._v(" "), _c("th", [_vm._v("Cash Flow Actualisé")]), _vm._v(" "), _c("th", [_vm._v("\n                                        Rentabilité sur la durée du prêt\n                                    ")]), _vm._v(" "), _c("th", [_vm._v("\n                                        Rentabilité annuelle du prêt\n                                    ")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/servicejurd/SJ2.vue?vue&type=style&index=0&id=31de33a3&lang=css&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/servicejurd/SJ2.vue?vue&type=style&index=0&id=31de33a3&lang=css&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\ninput[data-v-31de33a3] {\r\n    /*border: 1px solid red;*/\n}\n*[data-v-31de33a3] {\r\n    font-family: \"Google sans\";\n}\nlabel[data-v-31de33a3] {\r\n    height: 10px;\r\n    font-size: 13px;\n}\ninput[data-v-31de33a3],\r\nselect[data-v-31de33a3] {\r\n    height: 35px;\r\n    border-color: #34495e;\r\n    color: #57606f;\r\n    font-size: 13px;\r\n    font-weight: bold;\n}\n.card-width-height[data-v-31de33a3] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-31de33a3] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\n.hdc[data-v-31de33a3] {\r\n    background-color: #57606f;\n}\r\n\r\n/*  List element styles */\n#menu ul[data-v-31de33a3],\r\n#menu li[data-v-31de33a3] {\r\n    list-style: none;\r\n    padding: 0;\r\n    margin: 0;\r\n    display: inline-block;\n}\n#menu li[data-v-31de33a3] {\r\n    padding: 5px 0px;\n}\r\n\r\n/* Main menu links */\n#menu a[data-v-31de33a3]:link,\r\n#menu a[data-v-31de33a3]:visited,\r\n#menu a[data-v-31de33a3]:active {\r\n    text-decoration: none;\r\n    color: var(--link2-color);\r\n    padding: 5px 7px;\r\n    font-weight: bold;\r\n    position: relative;\r\n    z-index: 2;\n}\n#menu a[data-v-31de33a3]:hover,\r\n#menu a[data-v-31de33a3]:focus {\r\n    background-color: var(--link-color);\r\n    color: var(--link2-color);\r\n    text-decoration: underline;\n}\r\n\r\n/* The submenu links container*/\n.subdrop[data-v-31de33a3] {\r\n    background: var(--bg-color);\r\n    height: 0;\r\n    border-top: 0;\r\n    min-width: 100%;\r\n    left: 0;\r\n    margin: 0;\r\n    position: absolute;\r\n    text-align: left;\r\n    top: 100%;\r\n    visibility: hidden;\r\n    height: 1px;\r\n    overflow: hidden;\r\n    z-index: 10;\n}\ninput.input-box[data-v-31de33a3],\r\ntextarea[data-v-31de33a3] {\r\n    background: #00ffff21;\r\n    color: #000;\n}\nselect.input-box[data-v-31de33a3],\r\ntextarea[data-v-31de33a3] {\r\n    background: #00ffff21;\r\n    color: #000;\n}\r\n\r\n\r\n/* Dropdown Parent Link Style */\n.droplink[data-v-31de33a3] {\r\n    display: inline-block;\r\n    min-width: -moz-fit-content;\r\n    min-width: fit-content;\r\n    position: relative;\n}\ninput[type=checkbox][data-v-31de33a3] {\r\n    /* Double-sized Checkboxes */\r\n    /* IE */\r\n    /* FF */\r\n    /* Safari and Chrome */\r\n    /* Opera */\r\n    transform: scale(2);\r\n    padding: 10px;\n}\r\n\r\n/* List elements within the dropdown */\n.subdrop li[data-v-31de33a3] {\r\n    display: block !important;\r\n    padding: 0 !important;\n}\r\n\r\n/* Links within the dropdown list */\n.subdrop a[data-v-31de33a3] {\r\n    display: block;\r\n    padding: 12px 20px;\r\n    white-space: nowrap;\n}\r\n\r\n/* Allows links to show on hover/focus and through keyboard navigation via focus-within */\n.droplink:hover .subdrop[data-v-31de33a3] {\r\n    visibility: visible;\r\n    height: auto;\r\n    z-index: 11;\n}\r\n\r\n/* Separate these to avoid IE completely ignoring the css above */\n.droplink:focus-within .subdrop[data-v-31de33a3] {\r\n    visibility: visible;\r\n    height: auto;\r\n    z-index: 11;\n}\n.badge-sm[data-v-31de33a3] {\r\n    display: inline-block;\r\n    width: 15px;\r\n    height: 15px;\r\n    background: rgba(255, 0, 0, 0.882);\r\n    color: white;\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    border-radius: 100%;\r\n    position: absolute;\r\n    top: -20%;\r\n    left: 55%;\r\n    text-align: center;\n}\n.relook-header[data-v-31de33a3] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/servicejurd/SJ2.vue?vue&type=style&index=0&id=31de33a3&lang=css&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/servicejurd/SJ2.vue?vue&type=style&index=0&id=31de33a3&lang=css&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SJ2_vue_vue_type_style_index_0_id_31de33a3_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SJ2.vue?vue&type=style&index=0&id=31de33a3&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/servicejurd/SJ2.vue?vue&type=style&index=0&id=31de33a3&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SJ2_vue_vue_type_style_index_0_id_31de33a3_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SJ2_vue_vue_type_style_index_0_id_31de33a3_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/servicejurd/SJ2.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/servicejurd/SJ2.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SJ2_vue_vue_type_template_id_31de33a3_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SJ2.vue?vue&type=template&id=31de33a3&scoped=true */ "./resources/js/components/servicejurd/SJ2.vue?vue&type=template&id=31de33a3&scoped=true");
/* harmony import */ var _SJ2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SJ2.vue?vue&type=script&lang=js */ "./resources/js/components/servicejurd/SJ2.vue?vue&type=script&lang=js");
/* harmony import */ var _SJ2_vue_vue_type_style_index_0_id_31de33a3_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SJ2.vue?vue&type=style&index=0&id=31de33a3&lang=css&scoped=true */ "./resources/js/components/servicejurd/SJ2.vue?vue&type=style&index=0&id=31de33a3&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SJ2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _SJ2_vue_vue_type_template_id_31de33a3_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _SJ2_vue_vue_type_template_id_31de33a3_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "31de33a3",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/servicejurd/SJ2.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/servicejurd/SJ2.vue?vue&type=script&lang=js":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/servicejurd/SJ2.vue?vue&type=script&lang=js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SJ2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SJ2.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/servicejurd/SJ2.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SJ2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/servicejurd/SJ2.vue?vue&type=style&index=0&id=31de33a3&lang=css&scoped=true":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/servicejurd/SJ2.vue?vue&type=style&index=0&id=31de33a3&lang=css&scoped=true ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SJ2_vue_vue_type_style_index_0_id_31de33a3_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SJ2.vue?vue&type=style&index=0&id=31de33a3&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/servicejurd/SJ2.vue?vue&type=style&index=0&id=31de33a3&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/servicejurd/SJ2.vue?vue&type=template&id=31de33a3&scoped=true":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/servicejurd/SJ2.vue?vue&type=template&id=31de33a3&scoped=true ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SJ2_vue_vue_type_template_id_31de33a3_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SJ2_vue_vue_type_template_id_31de33a3_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SJ2_vue_vue_type_template_id_31de33a3_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SJ2.vue?vue&type=template&id=31de33a3&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/servicejurd/SJ2.vue?vue&type=template&id=31de33a3&scoped=true");


/***/ })

}]);