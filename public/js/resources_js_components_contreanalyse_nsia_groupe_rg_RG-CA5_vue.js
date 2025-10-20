"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_contreanalyse_nsia_groupe_rg_RG-CA5_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA5.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA5.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/ContextMenu */ "./resources/js/components/shared/ContextMenu.vue");
/* harmony import */ var _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/ContextMenuItem */ "./resources/js/components/shared/ContextMenuItem.vue");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _services_nsia_f8_constants_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../services/nsia/f8-constants.js */ "./resources/js/services/nsia/f8-constants.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../helpers/helper */ "./resources/js/helpers/helper.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }










window.$ = window.jQuery = __webpack_require__(/*! jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Centrale_Risques_Adhesion_au_BIC",
  display: "Centrale Risques – Adhésion au BIC",
  components: {
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.ChevronDownIcon,
    ContextMenu: _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__["default"],
    ContextMenuItem: _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__["default"],
    AirplayIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.AirplayIcon,
    BookOpenIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.BookOpenIcon,
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.TrashIcon
  },
  props: {
    meta_data: Object,
    tb_name: String,
    tb_display_name: String
  },
  created: function created() {
    // Credit.loadCredits()
    //     .then((res) => {
    //         this.credData(res);
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     });

    // Credit.loadClients("ismael.kamate@cofinacorp.com")
    //     .then((res) => {
    //         this.clientData(res);
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     });
  },
  computed: {
    isAfterToday: function isAfterToday() {
      var today = new Date().getTime();
      var elem = {
        existante: {},
        caution: {}
      };
      this.lignes_existantes.forEach(function (el, index) {
        var cond = new Date(el.ligne_echeance).getTime() > today;
        if (cond) {
          elem.existante[index] = true;
        } else {
          elem.existante[index] = false;
        }
      });
      this.cautions_lignes_existantes.forEach(function (el, index) {
        var cond = new Date(el.caution_ligne_existante_echeance).getTime() > today;
        if (cond) {
          elem.caution[index] = true;
        } else {
          elem.caution[index] = false;
        }
      });
      return elem;
    },
    isAuthorized: function isAuthorized() {
      var _this = this;
      var elem = {
        existante: {},
        caution: {}
      };
      this.lignes_existantes.forEach(function (el, index) {
        var cond = _this.localeStringToFloat(el.ligne_existante_autorisation) >= _this.localeStringToFloat(el.ligne_encours);
        console.log(_this.localeStringToFloat(el.ligne_existante_autorisation), _this.localeStringToFloat(el.ligne_encours), cond);
        if (cond) {
          elem.existante[index] = true;
        } else {
          elem.existante[index] = false;
        }
      });
      this.cautions_lignes_existantes.forEach(function (el, index) {
        var cond = _this.localeStringToFloat(el.caution_ligne_existante_autorisation) >= _this.localeStringToFloat(el.caution_ligne_existante_encours);
        console.log(_this.localeStringToFloat(el.caution_ligne_existante_autorisation), _this.localeStringToFloat(el.caution_ligne_existante_encours), cond);
        if (cond) {
          elem.caution[index] = true;
        } else {
          elem.caution[index] = false;
        }
      });
      return elem;
    },
    isAllAuthorized: function isAllAuthorized() {
      return Object.values(this.isAuthorized).every(function (el) {
        return el === true;
      });
    }
  },
  mounted: function mounted() {
    var _this$meta_data$dossi;
    var applied_templ_name = (_this$meta_data$dossi = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi.applied_templ_name;
    var tbArrays = this.determineCredPubTables(applied_templ_name);
    this.credpub_8 = tbArrays[2];
    this.loadRetrieved();
    this.loadTbAttrs(); // charge les attributs + sous attributs des tables
    // helper.loadCurrencyFormatter();
    // this.crdLd()
    this.banqueData();
  },
  data: function data() {
    var vm = this;
    return {
      f8Constants: _services_nsia_f8_constants_js__WEBPACK_IMPORTED_MODULE_5__["default"],
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
      index: 0,
      credits: [],
      clients: [],
      encours: null,
      placeholder: "Chercher clients",
      matcli: "matcli",
      nomcli: "nomcli",
      banques: "",
      meta_parseable: {
        cred_pub_key: this.meta_data["cred_pub_key"],
        tb_name: this.tb_name
      },
      formDataToBeWatched: {
        notes: [],
        // lignes d'exploitations
        lignes_par_caisse: "",
        engagement_signatures: "",
        lignes_exploitations: "",
        eng_lignes_exploitations: "",
        // cmt cct et cb
        cmt_clt_cb: "",
        eng_cmt_clt_cb: "",
        comment_cmt_clt_cb: "",
        comment_ligne_exploitation: "",
        total_montant_nouvel_ligne: 0,
        total_caisse_nouvelle_ligne_proposition_dcpr: 0,
        total_caisse_nouvelle_ligne_encours: 0,
        total_caisse_nouvelle_ligne_echeance: 0,
        total_signature_nouvelle_ligne_montant: 0,
        total_signature_nouvelle_ligne_autorisation: 0,
        total_signature_nouvelle_ligne_encours: 0,
        total_signature_nouvelle_ligne_echance: 0,
        total_nouvelle_ligne_0: 0,
        total_nouvelle_ligne_1: 0,
        total_nouvelle_ligne_2: 0,
        total_nouvelle_ligne_3: 0,
        cmt_clt_cb_total_montant: 0,
        cmt_clt_cb_total_proposition_dcpr: 0,
        cmt_clt_cb_total_duree_rembourssement: 0,
        cmt_clt_cb_total_taux_interet: 0,
        cmt_clt_cb_total_signature_montant: 0,
        cmt_clt_cb_total_signature_proposition_dcei: 0,
        cmt_clt_cb_total_signature_duree_rembourssement: 0,
        cmt_clt_cb_total_signature_taux_interet: 0,
        cmt_clt_cb_total_general_montant: 0,
        cmt_clt_cb_total_general_proposition_dcei: 0,
        cmt_clt_cb_total_general_duree_rembourssement: 0,
        cmt_clt_cb_total_general_taux_interet: 0
      },
      lignes_par_caisse: [{
        banque: "NSIA BANQUE",
        ligne_mixte: "",
        ligne: "",
        montant_ligne: "",
        montant_ligne_demande: "",
        duree_ligne: "",
        taux_ligne: 0
      }],
      engagement_signatures: [{
        banque: "NSIA BANQUE",
        ligne_mixte: "",
        ligne: "",
        montant_ligne: "",
        montant_ligne_demande: "",
        duree_ligne: "",
        taux_ligne: 0
      }],
      lignes_exploitations: [{
        demande_client: "",
        banque: "NSIA BANQUE",
        ligne_mixte: "",
        montant_nouvel_ligne: 0,
        proposition_dcpr: 0,
        echeance_duree_tirage: 0,
        nouvelle_ligne_taux: 0
      }],
      eng_lignes_exploitations: [{
        cautions_nouvelles_lignes_demande_client: "",
        banque: "NSIA BANQUE",
        ligne_mixte: "",
        caution_nouvelle_lignes_montant: 0,
        cautions_nouvelles_lignes_proposition_dcpr: 0,
        cautions_nouvelles_lignes_echeance_duree_tirage: 0,
        cautions_nouvelles_lignes_taux: 0
      }],
      cmt_clt_cb: [{
        banque: "NSIA BANQUE",
        demande_client: "",
        ligne_mixte: "",
        destination_financement: "",
        montant_nouvel_ligne: 0,
        proposition_dcpr: 0,
        echeance_duree_tirage: 0,
        nouvelle_ligne_taux: 0
      }],
      eng_cmt_clt_cb: [{
        cautions_nouvelles_lignes_demande_client: "",
        banque: "NSIA BANQUE",
        ligne_mixte: "",
        destination_financement: "",
        caution_nouvelle_lignes_montant: 0,
        cautions_nouvelles_lignes_proposition_dcpr: 0,
        cautions_nouvelles_lignes_echeance_duree_tirage: 0,
        cautions_nouvelles_lignes_taux: 0
      }],
      // tous_les_lignes: [
      //     { libelle: 'Découvert' },
      //     { libelle: 'Crédit de Campagne' },
      //     { libelle: 'Avance sur marché' },
      //     { libelle: 'Avance sur facture' },
      //     { libelle: 'Escompte commerciale' },
      //     { libelle: 'Escompte financier' },
      //     { libelle: "Crédit d'investissement" },
      //     { libelle: 'Crédit bail' },
      //     { libelle: 'Crédit Court Terme' },
      //     { libelle: 'Crédit Moyen Terme' },
      //     { libelle: 'Crédit Long Terme' },
      //     { libelle: 'Autres(Impayés)' },
      // ],
      // lignes_engagements_signatures: [
      //     { libelle: 'Caution de soumissission' },
      //     { libelle: 'Caution de demarrage' },
      //     { libelle: 'Caution de bonne fin' },
      //     { libelle: 'Caution de retenue de garantie' },
      //     { libelle: "Caution d'admission temporaire" },
      //     { libelle: 'Caution de garantie de paiement' },
      //     { libelle: "Obligation Cautionnée" },
      //     { libelle: 'Caution pour impôt contesté' },
      //     { libelle: 'Aval de traites' },
      //     { libelle: 'Credoc Irrévocable' },
      //     { libelle: 'Credoc notifié' },
      //     { libelle: 'Credoc confirmé' },
      //     { libelle: 'Engagement de financement' },
      //     { libelle: "LC's" },
      //     { libelle: "SBLC" },
      //     { libelle: "Autres" },
      // ],
      hasLignes_exploitations: false,
      hasCmt_clt_cb: false,
      lignes_existantes: [{
        ligne_mfcfa: "",
        banque: "NSIA BANQUE",
        ligne_mixte: "",
        ligne_existante_autorisation: 0,
        ligne_encours: 0,
        ligne_echeance: "",
        ligne_garantie_covenant_specifique_retenu: "",
        ligne_garantie_covenant_generale_retenu: ""
      }],
      nouvelles_lignes: [{
        demande_client: "",
        ligne_mixte: "",
        banque: "NSIA BANQUE",
        montant_nouvel_ligne: 0,
        proposition_dcpr: 0,
        echeance_duree_tirage: 0,
        nouvelle_ligne_taux: 0,
        ligne_garantie_covenant_specifique_propose: "",
        ligne_garantie_covenant_generale_propose: ""
      }],
      lignes_existantes_selected_ligne: [],
      listingNote: false,
      frais: [],
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
      credpub_8: null
    };
  },
  methods: {
    banqueData: function banqueData() {
      var _this2 = this;
      _services_credit_service__WEBPACK_IMPORTED_MODULE_4__["default"].loadbank("COTE D'IVOIRE", "BK").then(function (res) {
        // console.log("bonjour", res);
        _this2.bankData(res);
      })["catch"](function (err) {
        console.log(err);
      });
    },
    bankData: function bankData(res) {
      this.banques = res.data;
      // console.log({ "banque": this.banques });
    },
    tableClosedOrOpened: function tableClosedOrOpened() {
      this.seen = this.fetchClosedTables(this.tb_name + this.meta_data["cred_pub_key"]);
    },
    openNotesModal: function openNotesModal() {
      var listing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.listingNote = listing;
      this.$modal.show(this.tb_name);
    },
    launchAutoSaver: function launchAutoSaver() {
      var _this3 = this;
      _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["default"].loadUserData().then(function (res) {
        _this3.send2Backend(res, 0, 0);
      })["catch"](function (err) {
        _this3.loadWithError(err);
      });
    },
    setChiffreCleVars: function setChiffreCleVars(event, index) {
      this.chiffres_cles[index][event[0]] = event[1];
      this.handleInput();
      this.chiffres_cles[0].nb_an_activite_n_2 = parseInt(this.chiffres_cles[0].nb_an_activite_n_1) - 1;
      this.formDataToBeWatched["chiffres_cles"] = this.chiffres_cles;
    },
    updateValue: function updateValue(val) {
      alert("value to update");
      alert(JSON.stringify(val));
    },
    loadRetrieved: function loadRetrieved() {
      var _this4 = this;
      var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];

      // Close table by default
      // this.defaultRetract(
      //     false,
      //     this.meta_data["dossier_credit"]?.applied_templ_id
      // );

      if (this.meta_data["dossier_credit"][createdKey] == undefined) {
        var _this$meta_data$dossi2, _this$meta_data$dossi3;
        // if(this.meta_data["dossier_credit"]?.caract_inter_pret_bank?.length > 0){

        //     let dg_rec = this.meta_data["dossier_credit"]?.caract_inter_pret_bank.filter( (el) => el.role_sigle == "DG")
        //     if(dg_rec.length > 0)
        //     {
        //         this.lignes_par_caisse = dg_rec[0]['lignes']?.['lignes_par_caisse']?.filter((item) => Number(item.duree_ligne) > 0 && Number(item.duree_ligne)  < 25 )
        //         this.engagement_signatures = dg_rec[0]['lignes']?.['engagement_signatures']?.filter((item) => Number(item.duree_ligne) > 0 && Number(item.duree_ligne)  < 25 )
        //         this.handleInput();

        //     }

        // }
        var kf = "tb_8";
        if (((_this$meta_data$dossi2 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi2 === void 0 ? void 0 : _this$meta_data$dossi2["cred_pub_tb_19503"]) != undefined) {
          this.credpub_8 = "cred_pub_tb_19503";
          kf = "tb_19003";
        }
        if (((_this$meta_data$dossi3 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi3 === void 0 ? void 0 : _this$meta_data$dossi3[this.credpub_8]) != undefined) {
          var _this$meta_data$dossi4, _this$meta_data$dossi5, _this$meta_data$dossi6, _this$meta_data$dossi7;
          var l_exploi = (_this$meta_data$dossi4 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi4 === void 0 || (_this$meta_data$dossi4 = _this$meta_data$dossi4[this.credpub_8]) === null || _this$meta_data$dossi4 === void 0 ? void 0 : _this$meta_data$dossi4.nouvelles_lignes_caisse.filter(function (item, index) {
            return parseInt(item.duree) > 0 && parseInt(item.duree) < 25;
          });
          var eng_l_exploi = (_this$meta_data$dossi5 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi5 === void 0 || (_this$meta_data$dossi5 = _this$meta_data$dossi5[this.credpub_8]) === null || _this$meta_data$dossi5 === void 0 ? void 0 : _this$meta_data$dossi5.nouvelles_lignes_signature.filter(function (item, index) {
            return parseInt(item.duree) > 0 && parseInt(item.duree) < 25;
          });
          var c = (_this$meta_data$dossi6 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi6 === void 0 || (_this$meta_data$dossi6 = _this$meta_data$dossi6[this.credpub_8]) === null || _this$meta_data$dossi6 === void 0 ? void 0 : _this$meta_data$dossi6.nouvelles_lignes_caisse.filter(function (item, index) {
            return parseInt(item.duree) > 24;
          });
          var eng_c = (_this$meta_data$dossi7 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi7 === void 0 || (_this$meta_data$dossi7 = _this$meta_data$dossi7[this.credpub_8]) === null || _this$meta_data$dossi7 === void 0 ? void 0 : _this$meta_data$dossi7.nouvelles_lignes_signature.filter(function (item, index) {
            return parseInt(item.duree) > 24;
          });

          //     lignes_par_caisse:[
          //     {
          //         banque: "NSIA BANQUE",
          //         ligne:"",
          //         montant_ligne:"",
          //         montant_ligne_demande:"",
          //         duree_ligne:"",
          //         taux_ligne:0
          //     }
          // ],

          if ((l_exploi === null || l_exploi === void 0 ? void 0 : l_exploi.length) > 0) {
            l_exploi.forEach(function (el, index) {
              if (_this4.lignes_par_caisse[index] != undefined) {
                _this4.lignes_par_caisse[index].ligne = el === null || el === void 0 ? void 0 : el.ligne;
                _this4.lignes_par_caisse[index].ligne_mixte = el === null || el === void 0 ? void 0 : el.ligne_mixte;
                _this4.lignes_par_caisse[index].montant_ligne = el === null || el === void 0 ? void 0 : el.proposition;
                _this4.lignes_par_caisse[index].montant_ligne_demande = el === null || el === void 0 ? void 0 : el.proposition;
                _this4.lignes_par_caisse[index].duree_ligne = el === null || el === void 0 ? void 0 : el.duree;
                _this4.lignes_par_caisse[index].taux_ligne = el === null || el === void 0 ? void 0 : el.taux;
                _this4.handleInput();
              } else {
                _this4.lignes_par_caisse[index] = {
                  banque: "NSIA BANQUE",
                  ligne: el.ligne,
                  ligne_mixte: el.ligne_mixte,
                  destination_financement: "",
                  montant_ligne: el === null || el === void 0 ? void 0 : el.proposition,
                  montant_ligne_demande: el === null || el === void 0 ? void 0 : el.proposition,
                  duree_ligne: el === null || el === void 0 ? void 0 : el.duree,
                  taux_ligne: el === null || el === void 0 ? void 0 : el.taux
                };
                _this4.handleInput();
              }
            });
          }

          // engagement_signatures:[
          //     {
          //         banque: "NSIA BANQUE",
          //         ligne:"",
          //         montant_ligne:"",
          //         montant_ligne_demande:"",
          //         duree_ligne:"",
          //         taux_ligne:0
          //     }
          // ],
          if ((eng_l_exploi === null || eng_l_exploi === void 0 ? void 0 : eng_l_exploi.length) > 0) {
            eng_l_exploi.forEach(function (el, index) {
              if (_this4.engagement_signatures[index] != undefined) {
                _this4.engagement_signatures[index].ligne = el === null || el === void 0 ? void 0 : el.ligne;
                _this4.engagement_signatures[index].ligne_mixte = el === null || el === void 0 ? void 0 : el.ligne_mixte;
                _this4.engagement_signatures[index].montant_ligne = el === null || el === void 0 ? void 0 : el.proposition;
                _this4.engagement_signatures[index].montant_ligne_demande = el === null || el === void 0 ? void 0 : el.proposition;
                _this4.engagement_signatures[index].duree_ligne = el === null || el === void 0 ? void 0 : el.duree;
                _this4.engagement_signatures[index].taux_ligne = el === null || el === void 0 ? void 0 : el.taux;
                _this4.handleInput();
              } else {
                _this4.engagement_signatures[index] = {
                  banque: "NSIA BANQUE",
                  ligne: el.ligne,
                  ligne_mixte: el.ligne_mixte,
                  destination_financement: "",
                  montant_ligne: el === null || el === void 0 ? void 0 : el.proposition,
                  montant_ligne_demande: el === null || el === void 0 ? void 0 : el.proposition,
                  duree_ligne: el === null || el === void 0 ? void 0 : el.duree,
                  taux_ligne: el === null || el === void 0 ? void 0 : el.taux
                };
                _this4.handleInput();
              }
            });
          }
          if ((c === null || c === void 0 ? void 0 : c.length) > 0) {
            c.forEach(function (el, index) {
              if (_this4.cmt_clt_cb[index] != undefined) {
                _this4.cmt_clt_cb[index].demande_client = el === null || el === void 0 ? void 0 : el.ligne;
                _this4.cmt_clt_cb[index].ligne_mixte = el === null || el === void 0 ? void 0 : el.ligne_mixte;
                _this4.cmt_clt_cb[index].montant_nouvel_ligne = el === null || el === void 0 ? void 0 : el.proposition;
                _this4.cmt_clt_cb[index].proposition_dcpr = el === null || el === void 0 ? void 0 : el.proposition;
                _this4.cmt_clt_cb[index].echeance_duree_tirage = el === null || el === void 0 ? void 0 : el.duree;
                _this4.cmt_clt_cb[index].nouvelle_ligne_taux = el === null || el === void 0 ? void 0 : el.taux;
                _this4.handleInput();
              } else {
                _this4.cmt_clt_cb[index] = {
                  banque: "NSIA BANQUE",
                  demande_client: el.ligne,
                  ligne_mixte: el.ligne_mixte,
                  destination_financement: "",
                  montant_nouvel_ligne: el === null || el === void 0 ? void 0 : el.proposition,
                  proposition_dcpr: el === null || el === void 0 ? void 0 : el.proposition,
                  echeance_duree_tirage: el === null || el === void 0 ? void 0 : el.duree,
                  nouvelle_ligne_taux: el === null || el === void 0 ? void 0 : el.taux
                };
                _this4.handleInput();
              }
            });
          }
          if ((eng_c === null || eng_c === void 0 ? void 0 : eng_c.length) > 0) {
            eng_c.forEach(function (el, index) {
              if (_this4.eng_cmt_clt_cb[index] != undefined) {
                _this4.eng_cmt_clt_cb[index].cautions_nouvelles_lignes_demande_client = el === null || el === void 0 ? void 0 : el.ligne;
                _this4.eng_cmt_clt_cb[index].ligne_mixte = el === null || el === void 0 ? void 0 : el.ligne_mixte;
                _this4.eng_cmt_clt_cb[index].caution_nouvelle_lignes_montant = el === null || el === void 0 ? void 0 : el.proposition;
                _this4.eng_cmt_clt_cb[index].cautions_nouvelles_lignes_proposition_dcpr = el === null || el === void 0 ? void 0 : el.proposition;
                _this4.eng_cmt_clt_cb[index].cautions_nouvelles_lignes_echeance_duree_tirage = el === null || el === void 0 ? void 0 : el.duree;
                _this4.eng_cmt_clt_cb[index].cautions_nouvelles_lignes_taux = el === null || el === void 0 ? void 0 : el.taux;
                _this4.handleInput();
              } else {
                _this4.eng_cmt_clt_cb[index] = {
                  banque: "NSIA BANQUE",
                  cautions_nouvelles_lignes_demande_client: el.ligne,
                  ligne_mixte: el.ligne_mixte,
                  caution_nouvelle_lignes_montant: el === null || el === void 0 ? void 0 : el.proposition,
                  cautions_nouvelles_lignes_proposition_dcpr: el === null || el === void 0 ? void 0 : el.proposition,
                  cautions_nouvelles_lignes_echeance_duree_tirage: el === null || el === void 0 ? void 0 : el.duree,
                  cautions_nouvelles_lignes_taux: el === null || el === void 0 ? void 0 : el.taux
                };
                _this4.handleInput();
              }
            });
          }
          this.lignes_par_caisse = this.lignes_par_caisse.map(function (ed) {
            return _objectSpread(_objectSpread({}, ed), {}, {
              cameFrom: kf
            });
          });
          this.engagement_signatures = this.engagement_signatures.map(function (ed) {
            return _objectSpread(_objectSpread({}, ed), {}, {
              cameFrom: kf
            });
          });
          this.cmt_clt_cb = this.cmt_clt_cb.map(function (ed) {
            return _objectSpread(_objectSpread({}, ed), {}, {
              cameFrom: kf
            });
          });
          this.eng_cmt_clt_cb = this.eng_cmt_clt_cb.map(function (ed) {
            return _objectSpread(_objectSpread({}, ed), {}, {
              cameFrom: kf
            });
          });
          // this.impacts = this.impacts.map(ed => ({...ed, cameFrom:kf}));
          this.handleInput();
        }
      }
      if (lentb.length > 0) {
        if (this.meta_data["dossier_credit"][createdKey] != undefined) {
          this.formDataToBeWatched = this.meta_data["dossier_credit"][createdKey];

          // if (
          //     this.meta_data["dossier_credit"][createdKey][
          //     "lignes_exploitations"
          //     ] != ""
          // ) {
          //     this.lignes_exploitations =
          //         this.meta_data["dossier_credit"][createdKey][
          //         "lignes_exploitations"
          //         ];
          // }

          if (this.meta_data["dossier_credit"][createdKey]["eng_cmt_clt_cb"] != "") {
            this.eng_cmt_clt_cb = this.meta_data["dossier_credit"][createdKey]["eng_cmt_clt_cb"];
          }
          if (this.meta_data["dossier_credit"][createdKey]["cmt_clt_cb"] != "") {
            this.cmt_clt_cb = this.meta_data["dossier_credit"][createdKey]["cmt_clt_cb"];
          }

          // if (
          //     this.meta_data["dossier_credit"][createdKey][
          //     "eng_lignes_exploitations"
          //     ] != ""
          // ) {
          //     this.eng_lignes_exploitations =
          //         this.meta_data["dossier_credit"][createdKey][
          //         "eng_lignes_exploitations"
          //         ];
          // }

          if (this.meta_data["dossier_credit"][createdKey]["lignes_par_caisse"] != "") {
            this.lignes_par_caisse = this.meta_data["dossier_credit"][createdKey]["lignes_par_caisse"];
          }
          if (this.meta_data["dossier_credit"][createdKey]["engagement_signatures"] != "") {
            this.engagement_signatures = this.meta_data["dossier_credit"][createdKey]["engagement_signatures"];
          }
        }
      }
      // Close table by default
      //  this.defaultRetract(
      //     false,
      //     this.meta_data["dossier_credit"]?.applied_templ_id
      // );
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
        // // window.location.href = "/login";
      }
      if (this.authcheck === true) {
        this.$emit("autosaving");
        this.$axios.post(this.ebapisHost + "creditbuilder/api/v1/autosaving/", {
          user: this.authcheckUsr,
          meta_parseable: this.meta_parseable,
          filledData: this.formDataToBeWatched
        }).then(function (response) {
          this.$emit("autosaving");
          // this.$Progress.finish();
          // console.log(response);
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
    addMore5: function addMore5() {
      this.cautions_nouvelles_lignes.push({
        cautions_nouvelles_lignes_demande_client: "",
        banque: "NSIA BANQUE",
        cautions_nouvelles_lignes_proposition_dcpr: 0,
        cautions_nouvelles_lignes_echeance_duree_tirage: 0,
        cautions_nouvelles_lignes_taux: 0
      });
    },
    // gestion des input personnalisés
    setLigneExistanteVars: function setLigneExistanteVars(event, index) {
      this.lignes_existantes[index][event[0]] = event[1];
      this.handleInput();
    },
    formDataVars: function formDataVars(event) {
      this.formDataToBeWatched[event[0]] = event[1];
    },
    setCautionLigneExistanteVars: function setCautionLigneExistanteVars(event, index) {
      this.cautions_lignes_existantes[index][event[0]] = event[1];
      this.handleInput();
    },
    setNouvelleLigneVars: function setNouvelleLigneVars(event, index) {
      this.nouvelles_lignes[index][event[0]] = event[1];
      this.handleInput();
    },
    setCautionNouvelleLigneVars: function setCautionNouvelleLigneVars(event, index) {
      this.cautions_nouvelles_lignes[index][event[0]] = event[1];
      this.handleInput();
    },
    retract: function retract() {
      this.seen = !this.seen;
      var a = {
        tb_name: this.tb_name + this.meta_data["cred_pub_key"],
        status: this.seen
      };
      EventBus.$emit("savedclosed-table", a);
    },
    retract3: function retract3() {
      this.seen = !this.seen;
      var a = {
        tb_name: this.tb_name + this.meta_data["cred_pub_key"],
        status: this.seen
      };
      EventBus.$emit("savedclosed-table", a);
    },
    // add defaultRetract
    defaultRetract: function defaultRetract(rc, ra) {
      if (ra != null) {
        this.seen = rc;
        var a = {
          tb_name: this.tb_name + this.meta_data["cred_pub_key"],
          status: this.seen
        };
        EventBus.$emit("savedclosed-table", a);
      }
    },
    deleteTB: function deleteTB() {
      if (confirm("Êtes-vous sûr de vouloir supprimer ce tableau ?")) {
        this.$emit("delete-tb", {
          tb_name: this.tb_name
        });
      }
    },
    loadDate: function loadDate() {
      var options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      };
      var today = new Date();
      this.dateOfToday = today.toLocaleDateString("fr-FR");
    },
    instruction4: function instruction4(id) {
      var id0 = "#" + id;
      window.$(id0).modal("show");
    },
    precomputeScore: function precomputeScore() {
      var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      this.meta_parseable["type_table"] = a;
      var scoringVar = [];
      if (a == "organisation") {
        scoringVar = ["vivre", "competences_manageriales", "formalisation", "interaction"];
      } else {
        scoringVar = ["technologie", "risque_juridique", "risque_politique"];
      }
      for (var i = 0; i < scoringVar.length; i++) {
        if (this.formDataToBeWatched[scoringVar[i]] == "") {
          return false;
        }
      }
      return true;
    },
    launchScoringTable: function launchScoringTable(a) {
      if (this.precomputeScore(a) === true) {
        this.$axios.post(this.ebapisHost + "cofiscore/api/v1/launchscorer-table/", {
          user: this.authcheckUsr,
          meta_parseable: this.meta_parseable,
          filledData: this.formDataToBeWatched
        }).then(function (response) {
          // console.log(response)
          var tbFetcheData = response.data;
          if (a == "organisation") {
            this.decision_theorique1 = tbFetcheData["decision_theorique"];
            if (this.formDataToBeWatched.decision_theorique1 == "") {
              this.formDataToBeWatched.decision_theorique1 = this.decision_theorique1;
            }
          } else {
            this.decision_theorique2 = tbFetcheData["decision_theorique"];
            if (this.formDataToBeWatched.decision_theorique2 == "") {
              this.formDataToBeWatched.decision_theorique2 = this.decision_theorique2;
            }
          }
        }.bind(this))["catch"](function (error) {
          this.$Progress.finish();
          console.log(error);
        }.bind(this));
      }
    },
    addMore: function addMore() {
      console.log(this.lignes_existantes);
      this.lignes_existantes.push({
        ligne_mfcfa: "",
        banque: "NSIA BANQUE",
        ligne_mixte: "",
        ligne_existante_autorisation: 0,
        ligne_encours: 0,
        ligne_echeance: "",
        ligne_garantie_covenant_specifique_retenu: "",
        ligne_garantie_covenant_generale_retenu: ""
      });
    },
    addLignes_par_caisse: function addLignes_par_caisse() {
      this.lignes_par_caisse.push({
        banque: "NSIA BANQUE",
        ligne: "",
        ligne_mixte: "",
        montant_ligne: "",
        montant_ligne_demande: "",
        duree_ligne: "",
        taux_ligne: 0
      });
    },
    removeLignes_par_caisse: function removeLignes_par_caisse(index) {
      this.lignes_par_caisse.splice(index, 1);
    },
    addEngagement_signatures: function addEngagement_signatures() {
      this.engagement_signatures.push({
        banque: "NSIA BANQUE",
        ligne: "",
        ligne_mixte: "",
        montant_ligne: "",
        montant_ligne_demande: "",
        duree_ligne: "",
        taux_ligne: 0
      });
    },
    removeEngagement_signatures: function removeEngagement_signatures(index) {
      this.engagement_signatures.splice(index, 1);
    },
    addEmt_clt_cb: function addEmt_clt_cb() {
      this.cmt_clt_cb.push({
        banque: "NSIA BANQUE",
        demande_client: "",
        ligne_mixte: "",
        destination_financement: "",
        montant_nouvel_ligne: 0,
        proposition_dcpr: 0,
        echeance_duree_tirage: 0,
        nouvelle_ligne_taux: 0
      });
    },
    removeEmt_clt_cb: function removeEmt_clt_cb(index) {
      this.cmt_clt_cb.splice(index, 1);
    },
    addEng_cmt_clt_cb: function addEng_cmt_clt_cb() {
      this.eng_cmt_clt_cb.push({
        cautions_nouvelles_lignes_demande_client: "",
        banque: "NSIA BANQUE",
        ligne_mixte: "",
        destination_financement: "",
        caution_nouvelle_lignes_montant: 0,
        cautions_nouvelles_lignes_proposition_dcpr: 0,
        cautions_nouvelles_lignes_echeance_duree_tirage: 0,
        cautions_nouvelles_lignes_taux: 0
      });
    },
    removeEng_cmt_clt_cb: function removeEng_cmt_clt_cb(index) {
      this.eng_cmt_clt_cb.splice(index, 1);
    },
    addMore1: function addMore1() {
      this.cautions_lignes_existantes.push({
        caution_ligne_existante_mfcfa: "",
        banque: "NSIA BANQUE",
        ligne_mixte: "",
        caution_ligne_existante_autorisation: 0,
        caution_ligne_existante_encours: 0,
        caution_ligne_existante_echeance: ""
      });
    },
    // remove(index) {
    //     this.source_revenus.splice(index, 1);
    //     this.formDataToBeWatched.total_interimaires = this.totalInterimaires;
    //     this.formDataToBeWatched.total_permanent = this.totalPermanent;
    // },
    remove4: function remove4(index) {
      this.cautions_lignes_existantes.splice(index, 1);
      this.formDataToBeWatched.total_signature_ligne_existante_autorisation = this.somX3(this.cautions_lignes_existantes, "caution_ligne_existante_autorisation");
      this.formDataToBeWatched.total_signature_ligne_existante_encours = this.somX3(this.cautions_lignes_existantes, "caution_ligne_existante_encours");
      //this.formDataToBeWatched.total_signature_ligne_existante_echance = this.somX3(this.cautions_lignes_existantes, 'caution_ligne_existante_echeance')
      this.formDataToBeWatched.total_ligne_existante_1 = this.formDataToBeWatched.total_caisse_ligne_existante_autorisation + this.formDataToBeWatched.total_signature_ligne_existante_autorisation;
      this.formDataToBeWatched.total_ligne_existante_2 = this.formDataToBeWatched.total_caisse_ligne_existante_encours + this.formDataToBeWatched.total_signature_ligne_existante_encours;
      //this.formDataToBeWatched.total_ligne_existante_3 = this.formDataToBeWatched.total_caisse_ligne_existante_echeance + this.formDataToBeWatched.total_signature_ligne_existante_echance

      this.handleInput();
    },
    // SOMME DES MONTANTS
    somX3: function somX3(ob, key) {
      var som = 0;
      ob.filter(function (elm) {
        var result = String(elm[key]).replace(/\s+/g, "");
        if (result === "" || isNaN(result)) {
          som += 0;
        } else {
          som += parseInt(result);
        }
      });
      return som;
    },
    remove: function remove(index) {
      this.lignes_existantes.splice(index, 1);
      // this.formDataToBeWatched.total_montant_nouvel_ligne = this.somX3(
      //     this.nouvelles_lignes,
      //     "montant_nouvel_ligne"
      // );
      // this.formDataToBeWatched.total_caisse_nouvelle_ligne_proposition_dcpr =
      //     this.somX3(this.nouvelles_lignes, "proposition_dcpr");
      // this.formDataToBeWatched.total_caisse_nouvelle_ligne_encours =
      //     this.somX3(this.nouvelles_lignes, "echeance_duree_tirage");
      // this.formDataToBeWatched.total_caisse_nouvelle_ligne_echeance =
      //     this.somX3(this.nouvelles_lignes, "nouvelle_ligne_taux");
      // this.formDataToBeWatched.total_nouvelle_ligne_0 =
      //     this.formDataToBeWatched.total_montant_nouvel_ligne +
      //     this.formDataToBeWatched.total_signature_nouvelle_ligne_montant;
      // this.formDataToBeWatched.total_nouvelle_ligne_1 =
      //     this.formDataToBeWatched
      //         .total_caisse_nouvelle_ligne_proposition_dcpr +
      //     this.formDataToBeWatched
      //         .total_signature_nouvelle_ligne_autorisation;
      // this.formDataToBeWatched.total_nouvelle_ligne_2 =
      //     this.formDataToBeWatched.total_caisse_nouvelle_ligne_encours +
      //     this.formDataToBeWatched.total_signature_nouvelle_ligne_encours;
      // this.formDataToBeWatched.total_nouvelle_ligne_3 =
      //     this.formDataToBeWatched.total_caisse_nouvelle_ligne_echeance +
      //     this.formDataToBeWatched.total_signature_nouvelle_ligne_echance;
      this.handleInput();
    },
    remove5: function remove5(index) {
      this.cautions_nouvelles_lignes.splice(index, 1);
      this.formDataToBeWatched.total_signature_nouvelle_ligne_montant = this.somX3(this.cautions_nouvelles_lignes, "caution_nouvelle_lignes_montant");
      this.formDataToBeWatched.total_signature_nouvelle_ligne_autorisation = this.somX3(this.cautions_nouvelles_lignes, "cautions_nouvelles_lignes_proposition_dcpr");
      this.formDataToBeWatched.total_signature_nouvelle_ligne_encours = this.somX3(this.cautions_nouvelles_lignes, "cautions_nouvelles_lignes_echeance_duree_tirage");
      this.formDataToBeWatched.total_signature_nouvelle_ligne_echance = this.somX3(this.cautions_nouvelles_lignes, "cautions_nouvelles_lignes_taux");
      this.formDataToBeWatched.total_nouvelle_ligne_0 = this.formDataToBeWatched.total_montant_nouvel_ligne + this.formDataToBeWatched.total_signature_nouvelle_ligne_montant;
      this.formDataToBeWatched.total_nouvelle_ligne_1 = this.formDataToBeWatched.total_caisse_nouvelle_ligne_proposition_dcpr + this.formDataToBeWatched.total_signature_nouvelle_ligne_autorisation;
      this.formDataToBeWatched.total_nouvelle_ligne_2 = this.formDataToBeWatched.total_caisse_nouvelle_ligne_encours + this.formDataToBeWatched.total_signature_nouvelle_ligne_encours;
      this.formDataToBeWatched.total_nouvelle_ligne_3 = this.formDataToBeWatched.total_caisse_nouvelle_ligne_echeance + this.formDataToBeWatched.total_signature_nouvelle_ligne_echance;
      this.handleInput();
    },
    remove1: function remove1(index) {
      this.cautions_lignes_existantes.splice(index, 1);
    },
    remove2: function remove2(index) {
      this.nouvelles_lignes.splice(index, 1);
    },
    removeNew: function removeNew(index, removeList) {
      this[removeList].splice(index, 1);
      console.log(removeList);
      this.formDataToBeWatched["total_" + removeList + "_valeur_marchande"] = this.somX3(this[removeList], "valeur_marchande");
      this.formDataToBeWatched["total_" + removeList + "_valeur_considere"] = this.somX3(this[removeList], "valeur_considere");
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
        id: "f7-head"
      };
      // console.log(p)
      this.$emit("load-buffer", p);
    },
    onChange: function onChange(e) {
      if (e.target.value == "Non") {
        this.disp = true;
      } else {
        this.disp = false;
      }
    },
    onSlctMatCli: function onSlctMatCli(obj, key) {
      this.entite_connectes[key]["raison_social_entite_connecte"] = obj.nomcli;
      this.entite_connectes[key]["matricule_client_entite_connecte"] = obj.matclihan;
      this.handleInput();
    },
    addMore2: function addMore2() {
      this.nouvelles_lignes.push({
        montant_nouvel_ligne: 0,
        banque: "NSIA BANQUE",
        proposition_dcpr: 0,
        echeance_duree_tirage: 0,
        nouvelle_ligne_taux: 0,
        ligne_garantie_covenant_specifique_propose: "",
        ligne_garantie_covenant_generale_propose: ""
      });
    },
    addMoreNew: function addMoreNew(listName) {
      var obj = {
        numero_ligne: "",
        intitule_ligne: "",
        proprietaire: "",
        numero_tel: "",
        annee_achat: "",
        adresse_emplacement: "",
        date_evaluation: "",
        valeur_marchande: 0,
        valeur_considere: 0
      };
      if (listName === 'ligne_existante_banque_hypotheques') {
        obj.longitude = "";
        obj.lattitude = "";
        obj.bien_hypotheque = "";
      }
      if (listName === 'ligne_existante_banque_gages') {
        obj.bien_a_gage = "";
      }
      this[listName].push(obj);
    },
    updateLigneSelected: function updateLigneSelected(evt, index, item_name) {
      this[item_name][index].intitule_ligne = this.lignes_existantes_selected_ligne[evt.target.value];
    },
    handleInput: function handleInput(evt, index) {
      // eng_lignes_exploitations
      // eng_cmt_clt_cb
      this.formDataToBeWatched["lignes_par_caisse"] = this.lignes_par_caisse;
      this.formDataToBeWatched["engagement_signatures"] = this.engagement_signatures;

      // this.formDataToBeWatched["lignes_exploitations"] =
      //     this.lignes_exploitations;
      // this.formDataToBeWatched["eng_lignes_exploitations"] =
      //     this.eng_lignes_exploitations;

      this.formDataToBeWatched["cmt_clt_cb"] = this.cmt_clt_cb;
      this.formDataToBeWatched["eng_cmt_clt_cb"] = this.eng_cmt_clt_cb;

      //----------------lignes exploitations -------------------------------//

      this.formDataToBeWatched.total_montant_nouvel_ligne = this.somX3(this.lignes_par_caisse, "montant_ligne");
      this.formDataToBeWatched["lignes_par_caisse"] = this.lignes_par_caisse;
      this.formDataToBeWatched.total_caisse_nouvelle_ligne_proposition_dcpr = this.somX3(this.lignes_par_caisse, "montant_ligne_demande");
      this.formDataToBeWatched["lignes_par_caisse"] = this.lignes_par_caisse;

      // this.formDataToBeWatched.total_caisse_nouvelle_ligne_encours =
      //     this.somX3(this.lignes_exploitations, "echeance_duree_tirage");

      // this.formDataToBeWatched["lignes_exploitations"] =
      //     this.lignes_exploitations;

      // this.formDataToBeWatched.total_caisse_nouvelle_ligne_echeance =
      //     this.somX3(this.lignes_exploitations, "nouvelle_ligne_taux");

      // this.formDataToBeWatched["lignes_exploitations"] =
      //     this.lignes_exploitations;

      //----------------Signature exploitations -------------------------------//

      //             engagement_signatures
      // montant_ligne
      // montant_ligne_demande
      this.formDataToBeWatched.total_signature_nouvelle_ligne_montant = this.somX3(this.engagement_signatures, "montant_ligne");
      this.formDataToBeWatched["engagement_signatures"] = this.engagement_signatures;
      this.formDataToBeWatched.total_signature_nouvelle_ligne_autorisation = this.somX3(this.engagement_signatures, "montant_ligne_demande");
      this.formDataToBeWatched["engagement_signatures"] = this.engagement_signatures;
      // total_signature_nouvelle_ligne_autorisation
      // this.formDataToBeWatched.total_signature_nouvelle_ligne_encours =
      //     this.somX3(this.eng_lignes_exploitations, "cautions_nouvelles_lignes_echeance_duree_tirage");

      // this.formDataToBeWatched["eng_lignes_exploitations"] =
      //     this.eng_lignes_exploitations;

      // this.formDataToBeWatched.total_signature_nouvelle_ligne_echance =
      //     this.somX3(this.eng_lignes_exploitations, "cautions_nouvelles_lignes_taux");

      // this.formDataToBeWatched["eng_lignes_exploitations"] =
      //     this.eng_lignes_exploitations;

      //----------------cmt cct cb -------------------------------//

      this.formDataToBeWatched.cmt_clt_cb_total_montant = this.somX3(this.cmt_clt_cb, "montant_nouvel_ligne");
      this.formDataToBeWatched.cmt_clt_cb_total_proposition_dcpr = this.somX3(this.cmt_clt_cb, "proposition_dcpr");
      this.formDataToBeWatched.cmt_clt_cb_total_duree_rembourssement = this.somX3(this.cmt_clt_cb, "echeance_duree_tirage");
      this.formDataToBeWatched.cmt_clt_cb_total_taux_interet = this.somX3(this.cmt_clt_cb, "nouvelle_ligne_taux");

      //----------------Signature cmt cct cb -------------------------------//

      this.formDataToBeWatched.cmt_clt_cb_total_signature_montant = this.somX3(this.eng_cmt_clt_cb, "caution_nouvelle_lignes_montant");
      this.formDataToBeWatched["eng_cmt_clt_cb"] = this.eng_cmt_clt_cb;
      this.formDataToBeWatched.cmt_clt_cb_total_signature_proposition_dcei = this.somX3(this.eng_cmt_clt_cb, "cautions_nouvelles_lignes_proposition_dcpr");
      this.formDataToBeWatched["eng_cmt_clt_cb"] = this.eng_cmt_clt_cb;
      this.formDataToBeWatched.cmt_clt_cb_total_signature_duree_rembourssement = this.somX3(this.eng_cmt_clt_cb, "cautions_nouvelles_lignes_echeance_duree_tirage");
      this.formDataToBeWatched["eng_cmt_clt_cb"] = this.eng_cmt_clt_cb;
      this.formDataToBeWatched.cmt_clt_cb_total_signature_taux_interet = this.somX3(this.eng_cmt_clt_cb, "cautions_nouvelles_lignes_taux");
      this.formDataToBeWatched["eng_cmt_clt_cb"] = this.eng_cmt_clt_cb;

      //---------------- Total general ligne explotation-------------------------------//

      this.formDataToBeWatched.total_nouvelle_ligne_0 = this.formDataToBeWatched.total_montant_nouvel_ligne + this.formDataToBeWatched.total_signature_nouvelle_ligne_montant;
      this.formDataToBeWatched.total_nouvelle_ligne_1 = this.formDataToBeWatched.total_caisse_nouvelle_ligne_proposition_dcpr + this.formDataToBeWatched.total_signature_nouvelle_ligne_autorisation;
      this.formDataToBeWatched.total_nouvelle_ligne_2 = this.formDataToBeWatched.total_caisse_nouvelle_ligne_encours + this.formDataToBeWatched.total_signature_nouvelle_ligne_encours;
      this.formDataToBeWatched.total_nouvelle_ligne_3 = this.formDataToBeWatched.total_caisse_nouvelle_ligne_echeance + this.formDataToBeWatched.total_signature_nouvelle_ligne_echance;

      //----------------Total general cmt clt cb -------------------------------//

      this.formDataToBeWatched.cmt_clt_cb_total_general_montant = this.formDataToBeWatched.cmt_clt_cb_total_montant + this.formDataToBeWatched.cmt_clt_cb_total_signature_montant;
      this.formDataToBeWatched.cmt_clt_cb_total_general_proposition_dcei = this.formDataToBeWatched.cmt_clt_cb_total_proposition_dcpr + this.formDataToBeWatched.cmt_clt_cb_total_signature_proposition_dcei;
      this.formDataToBeWatched.cmt_clt_cb_total_general_duree_rembourssement = this.formDataToBeWatched.cmt_clt_cb_total_duree_rembourssement + this.formDataToBeWatched.cmt_clt_cb_total_signature_duree_rembourssement;
      this.formDataToBeWatched.cmt_clt_cb_total_general_taux_interet = this.formDataToBeWatched.cmt_clt_cb_total_taux_interet + this.formDataToBeWatched.cmt_clt_cb_total_signature_taux_interet;
    },
    instruction3: function instruction3(id) {
      var id0 = "#" + id;
      window.$(id0).modal("show");
    },
    dateInputHdl: function dateInputHdl() {
      this.chiffres_cles[0].date_creation_rccm_n_2 = this.chiffres_cles[0].date_creation_rccm_n_1;
      this.formDataToBeWatched["chiffres_cles"] = this.chiffres_cles;
    } // nbActvHdl() {
    //     this.chiffres_cles[0].nb_an_activite_n_2 = parseInt(this.chiffres_cles[0].nb_an_activite_n_1) - 1;
    //     this.formDataToBeWatched['chiffres_cles'] = this.chiffres_cles;
    // },
  },
  watch: {
    formDataToBeWatched: {
      handler: function handler(newVal, oldVal) {
        this.autosaving(newVal, oldVal);
        // ? Cache management
        // this.saveDataInCache(newVal, oldVal);
      },
      deep: true,
      immediate: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA5.vue?vue&type=template&id=28b0b334&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA5.vue?vue&type=template&id=28b0b334&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$formDataToBeWatch;
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
      id: "f7-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Crédit(s) sollicité(s) et justification de la demande\n                        ")]), _vm._v(" "), _c("div", {
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
  }, [_c("span", [_vm._v("\n                                            " + _vm._s(_vm.formDataToBeWatched.notes.length) + "\n                                        ")])])])]) : _vm._e(), _vm._v(" "), _c("chevron-up-icon", {
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
  }, [_c("div", [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "pour-les-lignes-d’exploitation"
    }
  }, [_c("b", [_vm._v("Pour les lignes d’exploitation")])])]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-borderless"
  }, [_vm._m(0), _vm._v(" "), _c("tbody", [_vm._l(_vm.lignes_par_caisse, function (lignes_exploitation, ind) {
    return _c("tr", {
      key: ind
    }, [_c("td", {
      staticClass: "col-2"
    }, [_vm._v("\n                                NSIA BANQUE\n                            ")]), _vm._v(" "), _c("td", {
      staticClass: "col-2"
    }, [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: lignes_exploitation.ligne,
        expression: "lignes_exploitation.ligne"
      }],
      staticClass: "form-select",
      "class": {
        equipe: ["tb_19003", "tb_8"].includes(lignes_exploitation === null || lignes_exploitation === void 0 ? void 0 : lignes_exploitation.cameFrom)
      },
      staticStyle: {
        width: "250px"
      },
      attrs: {
        title: lignes_exploitation.ligne
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(lignes_exploitation, "ligne", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          return _vm.handleInput();
        }]
      }
    }, [_c("option", {
      domProps: {
        value: ""
      }
    }), _vm._v(" "), _vm._l(_vm.f8Constants.tous_les_lignes_filtres, function (line, indexL) {
      return _c("option", {
        key: indexL + "4z_1",
        domProps: {
          value: line.libelle
        }
      }, [_vm._v(_vm._s(line.libelle))]);
    }), _vm._v(" "), (lignes_exploitation === null || lignes_exploitation === void 0 ? void 0 : lignes_exploitation.ligne_mixte) != "" ? _c("option", {
      domProps: {
        value: lignes_exploitation.ligne
      }
    }, [_vm._v(_vm._s(lignes_exploitation.ligne))]) : _vm._e()], 2)]), _vm._v(" "), _c("td", {
      staticClass: "col-2"
    }, [_c("currency-input", {
      staticClass: "form-control",
      "class": {
        equipe: ["tb_19003", "tb_8"].includes(lignes_exploitation === null || lignes_exploitation === void 0 ? void 0 : lignes_exploitation.cameFrom)
      },
      staticStyle: {
        width: "150px"
      },
      attrs: {
        type: "text",
        "default-typing": false,
        id: "montant_nouvel_ligne" + ind
      },
      on: {
        change: _vm.handleInput
      },
      model: {
        value: lignes_exploitation.montant_ligne,
        callback: function callback($$v) {
          _vm.$set(lignes_exploitation, "montant_ligne", $$v);
        },
        expression: "lignes_exploitation.montant_ligne\n                                    "
      }
    })], 1), _vm._v(" "), _c("td", {
      staticClass: "col-2"
    }, [_c("currency-input", {
      staticClass: "form-control",
      "class": {
        equipe: ["tb_19003", "tb_8"].includes(lignes_exploitation === null || lignes_exploitation === void 0 ? void 0 : lignes_exploitation.cameFrom)
      },
      staticStyle: {
        width: "150px"
      },
      attrs: {
        type: "text",
        "default-typing": false,
        id: "proposition_dcpr" + ind
      },
      on: {
        change: _vm.handleInput
      },
      model: {
        value: lignes_exploitation.montant_ligne_demande,
        callback: function callback($$v) {
          _vm.$set(lignes_exploitation, "montant_ligne_demande", $$v);
        },
        expression: "lignes_exploitation.montant_ligne_demande"
      }
    })], 1), _vm._v(" "), _c("td", {
      staticClass: "col-2"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: lignes_exploitation.duree_ligne,
        expression: "lignes_exploitation.duree_ligne"
      }],
      staticClass: "form-control",
      "class": {
        equipe: ["tb_19003", "tb_8"].includes(lignes_exploitation === null || lignes_exploitation === void 0 ? void 0 : lignes_exploitation.cameFrom)
      },
      staticStyle: {
        width: "80px",
        background: "#00ffff21",
        color: "#000"
      },
      attrs: {
        type: "number"
      },
      domProps: {
        value: lignes_exploitation.duree_ligne
      },
      on: {
        change: _vm.handleInput,
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(lignes_exploitation, "duree_ligne", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "col-1"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: lignes_exploitation.taux_ligne,
        expression: "lignes_exploitation.taux_ligne\n                                        "
      }],
      staticClass: "form-control",
      "class": {
        equipe: ["tb_19003", "tb_8"].includes(lignes_exploitation === null || lignes_exploitation === void 0 ? void 0 : lignes_exploitation.cameFrom)
      },
      staticStyle: {
        width: "100px"
      },
      attrs: {
        type: "number",
        id: "nouvelle_ligne_taux" + ind
      },
      domProps: {
        value: lignes_exploitation.taux_ligne
      },
      on: {
        change: _vm.handleInput,
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(lignes_exploitation, "taux_ligne", $event.target.value);
        }
      }
    })]), _vm._v(" "), ind == 0 ? _c("td", [_c("button", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: ind == 0,
        expression: "ind == 0"
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
          return _vm.addLignes_par_caisse();
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
        value: ind > 0,
        expression: "ind > 0"
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
          return _vm.removeLignes_par_caisse(ind);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)])]);
  }), _vm._v(" "), _c("tr", [_vm._m(1), _vm._v(" "), _c("td", [_c("currency-input", {
    staticStyle: {
      width: "150px"
    },
    attrs: {
      value: _vm.formDataToBeWatched.total_montant_nouvel_ligne,
      id: "total_montant_nouvel_ligne",
      disabled: ""
    },
    on: {
      input: _vm.handleInput
    }
  })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
    staticStyle: {
      width: "150px"
    },
    attrs: {
      value: _vm.formDataToBeWatched.total_caisse_nouvelle_ligne_proposition_dcpr,
      id: "total_caisse_nouvelle_ligne_proposition_dcpr",
      disabled: ""
    },
    on: {
      input: _vm.handleInput
    }
  })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      value: _vm.formDataToBeWatched.total_caisse_nouvelle_ligne_encours,
      id: "total_caisse_nouvelle_ligne_encours",
      disabled: ""
    },
    on: {
      input: _vm.handleInput
    }
  })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      value: _vm.formDataToBeWatched.total_caisse_nouvelle_ligne_echeance,
      id: "total_caisse_nouvelle_ligne_echeance",
      disabled: ""
    },
    on: {
      input: _vm.handleInput
    }
  })], 1)]), _vm._v(" "), _vm._m(2), _vm._v(" "), _vm._l(_vm.engagement_signatures, function (eng_lignes_exploitation, i) {
    return _c("tr", {
      key: "eng_lignes_exploitations_caution_nouvelle_ligne.cautions_nouvelles_lignes_demande_client" + i
    }, [_c("td", {
      staticClass: "col-2"
    }, [_vm._v("\n                                            NSIA BANQUE\n                                        ")]), _vm._v(" "), _c("td", {
      staticClass: "col-2"
    }, [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: eng_lignes_exploitation.ligne,
        expression: "eng_lignes_exploitation.ligne"
      }],
      staticClass: "form-select",
      "class": {
        equipe: ["tb_19003", "tb_8"].includes(eng_lignes_exploitation === null || eng_lignes_exploitation === void 0 ? void 0 : eng_lignes_exploitation.cameFrom)
      },
      staticStyle: {
        width: "250px"
      },
      attrs: {
        title: eng_lignes_exploitation.ligne
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(eng_lignes_exploitation, "ligne", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          return _vm.handleInput();
        }]
      }
    }, [_c("option", {
      domProps: {
        value: ""
      }
    }), _vm._v(" "), _vm._l(_vm.f8Constants.lignes_engagements_signatures, function (line, indexL) {
      return _c("option", {
        key: indexL + "4z_1",
        domProps: {
          value: line.libelle
        }
      }, [_vm._v(_vm._s(line.libelle))]);
    }), _vm._v(" "), (eng_lignes_exploitation === null || eng_lignes_exploitation === void 0 ? void 0 : eng_lignes_exploitation.ligne_mixte) != "" ? _c("option", {
      domProps: {
        value: eng_lignes_exploitation.ligne
      }
    }, [_vm._v(_vm._s(eng_lignes_exploitation.ligne))]) : _vm._e()], 2)]), _vm._v(" "), _c("td", {
      staticClass: "col-2"
    }, [_c("currency-input", {
      staticClass: "form-control",
      "class": {
        equipe: ["tb_19003", "tb_8"].includes(eng_lignes_exploitation === null || eng_lignes_exploitation === void 0 ? void 0 : eng_lignes_exploitation.cameFrom)
      },
      staticStyle: {
        width: "150px"
      },
      attrs: {
        type: "text",
        "default-typing": false,
        id: "eng_lignes_exploitations_caution_nouvelle_lignes_montant" + i
      },
      on: {
        change: _vm.handleInput
      },
      model: {
        value: eng_lignes_exploitation.montant_ligne,
        callback: function callback($$v) {
          _vm.$set(eng_lignes_exploitation, "montant_ligne", $$v);
        },
        expression: "eng_lignes_exploitation.montant_ligne\n\n                                    "
      }
    })], 1), _vm._v(" "), _c("td", {
      staticClass: "col-2"
    }, [_c("currency-input", {
      staticClass: "form-control",
      "class": {
        equipe: ["tb_19003", "tb_8"].includes(eng_lignes_exploitation === null || eng_lignes_exploitation === void 0 ? void 0 : eng_lignes_exploitation.cameFrom)
      },
      staticStyle: {
        width: "150px"
      },
      attrs: {
        type: "text",
        "default-typing": false,
        id: "eng_lignes_exploitations_cautions_nouvelles_lignes_proposition_dcpr" + i
      },
      on: {
        change: _vm.handleInput
      },
      model: {
        value: eng_lignes_exploitation.montant_ligne_demande,
        callback: function callback($$v) {
          _vm.$set(eng_lignes_exploitation, "montant_ligne_demande", $$v);
        },
        expression: "eng_lignes_exploitation.montant_ligne_demande\n                                    "
      }
    })], 1), _vm._v(" "), _c("td", {
      staticClass: "col-2"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: eng_lignes_exploitation.duree_ligne,
        expression: "eng_lignes_exploitation.duree_ligne\n                                            "
      }],
      staticClass: "form-control number",
      "class": {
        equipe: ["tb_19003", "tb_8"].includes(eng_lignes_exploitation === null || eng_lignes_exploitation === void 0 ? void 0 : eng_lignes_exploitation.cameFrom)
      },
      attrs: {
        required: "",
        "data-type": "currency",
        id: "eng_lignes_exploitations_cautions_nouvelles_lignes_echeance_duree_tirage" + i
      },
      domProps: {
        value: eng_lignes_exploitation.duree_ligne
      },
      on: {
        change: _vm.handleInput,
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(eng_lignes_exploitation, "duree_ligne", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "col-1"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: eng_lignes_exploitation.taux_ligne,
        expression: "eng_lignes_exploitation.taux_ligne\n                                            "
      }],
      staticClass: "form-control number",
      "class": {
        equipe: ["tb_19003", "tb_8"].includes(eng_lignes_exploitation === null || eng_lignes_exploitation === void 0 ? void 0 : eng_lignes_exploitation.cameFrom)
      },
      attrs: {
        required: "",
        "data-type": "currency",
        id: "eng_lignes_exploitations_cautions_nouvelles_lignes_taux" + i
      },
      domProps: {
        value: eng_lignes_exploitation.taux_ligne
      },
      on: {
        change: _vm.handleInput,
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(eng_lignes_exploitation, "taux_ligne", $event.target.value);
        }
      }
    })]), _vm._v(" "), i == 0 ? _c("td", [_c("button", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: i == 0,
        expression: "i == 0"
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
          return _vm.addEngagement_signatures();
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
        value: i > 0,
        expression: "i > 0"
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
          return _vm.removeEngagement_signatures(i);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)])]);
  }), _vm._v(" "), _c("tr", [_vm._m(3), _vm._v(" "), _c("td", [_c("currency-input", {
    staticStyle: {
      width: "150px"
    },
    attrs: {
      value: _vm.formDataToBeWatched.total_signature_nouvelle_ligne_montant,
      id: "total_signature_nouvelle_ligne_montant",
      disabled: ""
    },
    on: {
      change: _vm.handleInput
    }
  })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
    staticStyle: {
      width: "150px"
    },
    attrs: {
      value: _vm.formDataToBeWatched.total_signature_nouvelle_ligne_autorisation,
      id: "total_signature_nouvelle_ligne_autorisation",
      disabled: ""
    },
    on: {
      change: _vm.handleInput
    }
  })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      value: _vm.formDataToBeWatched.total_signature_nouvelle_ligne_encours,
      id: "total_signature_nouvelle_ligne_encours",
      disabled: ""
    },
    on: {
      change: _vm.handleInput
    }
  })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      value: _vm.formDataToBeWatched.total_signature_nouvelle_ligne_echance,
      id: "total_signature_nouvelle_ligne_echance",
      disabled: ""
    },
    on: {
      change: _vm.handleInput
    }
  })], 1)]), _vm._v(" "), _c("tr", [_vm._m(4), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      value: _vm.formDataToBeWatched.total_nouvelle_ligne_0,
      id: "total_nouvelle_ligne_0",
      disabled: ""
    },
    on: {
      change: _vm.handleInput
    }
  })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      value: _vm.formDataToBeWatched.total_nouvelle_ligne_1,
      id: "total_nouvelle_ligne_1",
      disabled: ""
    },
    on: {
      change: _vm.handleInput
    }
  })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      value: _vm.formDataToBeWatched.total_nouvelle_ligne_2,
      id: "total_nouvelle_ligne_2",
      disabled: ""
    },
    on: {
      change: _vm.handleInput
    }
  })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      value: _vm.formDataToBeWatched.total_nouvelle_ligne_3,
      id: "total_nouvelle_ligne_3",
      disabled: ""
    },
    on: {
      change: _vm.handleInput
    }
  })], 1)])], 2)])]), _vm._v(" "), _c("div", {
    staticClass: "mt-3"
  }, [_vm._m(5), _vm._v(" "), _c("vue-editor", {
    attrs: {
      id: "commentaires_nouvelles_lignes"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.comment_ligne_exploitation,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "comment_ligne_exploitation", $$v);
      },
      expression: "formDataToBeWatched.comment_ligne_exploitation"
    }
  })], 1)]), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "pour-les-cmt-clt-cb"
    }
  }, [_c("b", [_vm._v("Pour les CMT/CLT/CB")])])]), _vm._v(" "), _c("div", [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-borderless"
  }, [_vm._m(6), _vm._v(" "), _c("tbody", [_vm._l(_vm.cmt_clt_cb, function (cmtcltcb, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: cmtcltcb.banque,
        expression: "cmtcltcb.banque"
      }],
      staticClass: "form-control",
      staticStyle: {
        width: "250px"
      },
      attrs: {
        required: "",
        type: "text",
        disabled: ""
      },
      domProps: {
        value: cmtcltcb.banque
      },
      on: {
        change: _vm.handleInput,
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(cmtcltcb, "banque", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: cmtcltcb.destination_financement,
        expression: "cmtcltcb.destination_financement"
      }],
      staticClass: "form-control",
      "class": {
        equipe: ["tb_19003", "tb_8"].includes(cmtcltcb === null || cmtcltcb === void 0 ? void 0 : cmtcltcb.cameFrom)
      },
      staticStyle: {
        width: "250px"
      },
      attrs: {
        id: "destination_financement" + index,
        rows: "1",
        cols: "25"
      },
      domProps: {
        value: cmtcltcb.destination_financement
      },
      on: {
        change: _vm.handleInput,
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(cmtcltcb, "destination_financement", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: cmtcltcb.demande_client,
        expression: "cmtcltcb.demande_client"
      }],
      staticClass: "form-select",
      "class": {
        equipe: ["tb_19003", "tb_8"].includes(cmtcltcb === null || cmtcltcb === void 0 ? void 0 : cmtcltcb.cameFrom)
      },
      staticStyle: {
        width: "150px"
      },
      attrs: {
        title: cmtcltcb.demande_client
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(cmtcltcb, "demande_client", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          return _vm.handleInput();
        }]
      }
    }, [_c("option", {
      domProps: {
        value: ""
      }
    }), _vm._v(" "), _vm._l(_vm.f8Constants.tous_les_lignes_filtres, function (line, indexL) {
      return _c("option", {
        key: indexL + "4z_1",
        domProps: {
          value: line.libelle
        }
      }, [_vm._v(_vm._s(line.libelle))]);
    }), _vm._v(" "), (cmtcltcb === null || cmtcltcb === void 0 ? void 0 : cmtcltcb.ligne_mixte) != "" ? _c("option", {
      domProps: {
        value: cmtcltcb.demande_client
      }
    }, [_vm._v(_vm._s(cmtcltcb.demande_client))]) : _vm._e()], 2)]), _vm._v(" "), _c("td", [_c("currency-input", {
      staticClass: "form-control",
      "class": {
        equipe: ["tb_19003", "tb_8"].includes(cmtcltcb === null || cmtcltcb === void 0 ? void 0 : cmtcltcb.cameFrom)
      },
      staticStyle: {
        width: "250px"
      },
      attrs: {
        type: "text",
        "default-typing": false,
        id: "cmtcltcb_montant_nouvel_ligne" + index
      },
      on: {
        change: _vm.handleInput
      },
      model: {
        value: cmtcltcb.montant_nouvel_ligne,
        callback: function callback($$v) {
          _vm.$set(cmtcltcb, "montant_nouvel_ligne", $$v);
        },
        expression: "cmtcltcb.montant_nouvel_ligne\n                                            "
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
      staticClass: "form-control",
      "class": {
        equipe: ["tb_19003", "tb_8"].includes(cmtcltcb === null || cmtcltcb === void 0 ? void 0 : cmtcltcb.cameFrom)
      },
      staticStyle: {
        width: "250px"
      },
      attrs: {
        type: "text",
        "default-typing": false,
        id: "cmtcltcb_proposition_dcpr" + index
      },
      on: {
        change: _vm.handleInput
      },
      model: {
        value: cmtcltcb.proposition_dcpr,
        callback: function callback($$v) {
          _vm.$set(cmtcltcb, "proposition_dcpr", $$v);
        },
        expression: "cmtcltcb.proposition_dcpr"
      }
    })], 1), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: cmtcltcb.echeance_duree_tirage,
        expression: "cmtcltcb.echeance_duree_tirage"
      }],
      staticClass: "form-control",
      "class": {
        equipe: ["tb_19003", "tb_8"].includes(cmtcltcb === null || cmtcltcb === void 0 ? void 0 : cmtcltcb.cameFrom)
      },
      staticStyle: {
        width: "80px",
        background: "#00ffff21",
        color: "#000"
      },
      attrs: {
        type: "number"
      },
      domProps: {
        value: cmtcltcb.echeance_duree_tirage
      },
      on: {
        change: _vm.handleInput,
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(cmtcltcb, "echeance_duree_tirage", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: cmtcltcb.nouvelle_ligne_taux,
        expression: "cmtcltcb.nouvelle_ligne_taux\n                                                "
      }],
      staticClass: "form-control",
      "class": {
        equipe: ["tb_19003", "tb_8"].includes(cmtcltcb === null || cmtcltcb === void 0 ? void 0 : cmtcltcb.cameFrom)
      },
      attrs: {
        type: "number",
        id: "cmtcltcb_nouvelle_ligne_taux" + index
      },
      domProps: {
        value: cmtcltcb.nouvelle_ligne_taux
      },
      on: {
        change: _vm.handleInput,
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(cmtcltcb, "nouvelle_ligne_taux", $event.target.value);
        }
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
        border: "none",
        "font-size": "16px"
      },
      attrs: {
        type: "button",
        title: "Ajouter un bien"
      },
      on: {
        click: function click($event) {
          return _vm.addEmt_clt_cb();
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
        value: index > 0,
        expression: "index > 0"
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
          return _vm.removeEmt_clt_cb(index);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)])]);
  }), _vm._v(" "), _c("tr", [_vm._m(7), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      value: _vm.formDataToBeWatched.cmt_clt_cb_total_montant,
      id: "cmt_clt_cb_total_montant",
      disabled: ""
    },
    on: {
      change: _vm.handleInput
    }
  })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      value: _vm.formDataToBeWatched.cmt_clt_cb_total_proposition_dcpr,
      id: "cmt_clt_cb_total_proposition_dcpr",
      disabled: ""
    },
    on: {
      change: _vm.handleInput
    }
  })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      value: _vm.formDataToBeWatched.cmt_clt_cb_total_duree_rembourssement,
      id: "cmt_clt_cb_total_duree_rembourssement",
      disabled: ""
    },
    on: {
      change: _vm.handleInput
    }
  })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      value: _vm.formDataToBeWatched.cmt_clt_cb_total_taux_interet,
      id: "cmt_clt_cb_total_taux_interet",
      disabled: ""
    },
    on: {
      change: _vm.handleInput
    }
  })], 1)]), _vm._v(" "), _vm._m(8), _vm._v(" "), _vm._l(_vm.eng_cmt_clt_cb, function (caution_nouvelle_ligne, idl) {
    return _c("tr", {
      key: "caution_nouvelle_ligne.cautions_nouvelles_lignes_demande_client" + idl
    }, [_c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: caution_nouvelle_ligne.banque,
        expression: "caution_nouvelle_ligne.banque"
      }],
      staticClass: "form-control",
      attrs: {
        required: "",
        type: "text",
        disabled: ""
      },
      domProps: {
        value: caution_nouvelle_ligne.banque
      },
      on: {
        change: _vm.handleInput,
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(caution_nouvelle_ligne, "banque", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: caution_nouvelle_ligne.destination_financement,
        expression: "caution_nouvelle_ligne.destination_financement"
      }],
      staticClass: "form-control",
      "class": {
        equipe: ["tb_19003", "tb_8"].includes(caution_nouvelle_ligne === null || caution_nouvelle_ligne === void 0 ? void 0 : caution_nouvelle_ligne.cameFrom)
      },
      staticStyle: {
        width: "250px"
      },
      attrs: {
        id: "destination_financement" + idl,
        rows: "1",
        cols: "25"
      },
      domProps: {
        value: caution_nouvelle_ligne.destination_financement
      },
      on: {
        change: _vm.handleInput,
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(caution_nouvelle_ligne, "destination_financement", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: caution_nouvelle_ligne.cautions_nouvelles_lignes_demande_client,
        expression: "caution_nouvelle_ligne.cautions_nouvelles_lignes_demande_client"
      }],
      staticClass: "form-select",
      "class": {
        equipe: ["tb_19003", "tb_8"].includes(caution_nouvelle_ligne === null || caution_nouvelle_ligne === void 0 ? void 0 : caution_nouvelle_ligne.cameFrom)
      },
      staticStyle: {
        width: "150px"
      },
      attrs: {
        title: caution_nouvelle_ligne.cautions_nouvelles_lignes_demande_client
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(caution_nouvelle_ligne, "cautions_nouvelles_lignes_demande_client", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          return _vm.handleInput();
        }]
      }
    }, [_c("option", {
      domProps: {
        value: ""
      }
    }), _vm._v(" "), _vm._l(_vm.f8Constants.lignes_engagements_signatures, function (line, indexL) {
      return _c("option", {
        key: indexL + "4z_1",
        domProps: {
          value: line.libelle
        }
      }, [_vm._v(_vm._s(line.libelle))]);
    }), _vm._v(" "), (caution_nouvelle_ligne === null || caution_nouvelle_ligne === void 0 ? void 0 : caution_nouvelle_ligne.ligne_mixte) != "" ? _c("option", {
      domProps: {
        value: caution_nouvelle_ligne.cautions_nouvelles_lignes_demande_client
      }
    }, [_vm._v(_vm._s(caution_nouvelle_ligne.cautions_nouvelles_lignes_demande_client))]) : _vm._e()], 2)]), _vm._v(" "), _c("td", [_c("currency-input", {
      staticClass: "form-control",
      "class": {
        equipe: ["tb_19003", "tb_8"].includes(caution_nouvelle_ligne === null || caution_nouvelle_ligne === void 0 ? void 0 : caution_nouvelle_ligne.cameFrom)
      },
      attrs: {
        type: "text",
        "default-typing": false,
        id: "caution_nouvelle_lignes_montant" + idl
      },
      on: {
        change: _vm.handleInput
      },
      model: {
        value: caution_nouvelle_ligne.caution_nouvelle_lignes_montant,
        callback: function callback($$v) {
          _vm.$set(caution_nouvelle_ligne, "caution_nouvelle_lignes_montant", $$v);
        },
        expression: "caution_nouvelle_ligne.caution_nouvelle_lignes_montant\n                                            "
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
      staticClass: "form-control",
      "class": {
        equipe: ["tb_19003", "tb_8"].includes(caution_nouvelle_ligne === null || caution_nouvelle_ligne === void 0 ? void 0 : caution_nouvelle_ligne.cameFrom)
      },
      attrs: {
        type: "text",
        "default-typing": false,
        id: "cautions_nouvelles_lignes_proposition_dcpr" + idl
      },
      on: {
        change: _vm.handleInput
      },
      model: {
        value: caution_nouvelle_ligne.cautions_nouvelles_lignes_proposition_dcpr,
        callback: function callback($$v) {
          _vm.$set(caution_nouvelle_ligne, "cautions_nouvelles_lignes_proposition_dcpr", $$v);
        },
        expression: "caution_nouvelle_ligne.cautions_nouvelles_lignes_proposition_dcpr\n                                            "
      }
    })], 1), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: caution_nouvelle_ligne.cautions_nouvelles_lignes_echeance_duree_tirage,
        expression: "caution_nouvelle_ligne.cautions_nouvelles_lignes_echeance_duree_tirage\n                                                "
      }],
      staticClass: "form-control number",
      "class": {
        equipe: ["tb_19003", "tb_8"].includes(caution_nouvelle_ligne === null || caution_nouvelle_ligne === void 0 ? void 0 : caution_nouvelle_ligne.cameFrom)
      },
      attrs: {
        required: "",
        "data-type": "currency",
        id: "caution_nouvelle_existante3" + idl
      },
      domProps: {
        value: caution_nouvelle_ligne.cautions_nouvelles_lignes_echeance_duree_tirage
      },
      on: {
        change: _vm.handleInput,
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(caution_nouvelle_ligne, "cautions_nouvelles_lignes_echeance_duree_tirage", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: caution_nouvelle_ligne.cautions_nouvelles_lignes_taux,
        expression: "caution_nouvelle_ligne.cautions_nouvelles_lignes_taux\n                                                "
      }],
      staticClass: "form-control number",
      "class": {
        equipe: ["tb_19003", "tb_8"].includes(caution_nouvelle_ligne === null || caution_nouvelle_ligne === void 0 ? void 0 : caution_nouvelle_ligne.cameFrom)
      },
      attrs: {
        required: "",
        "data-type": "currency",
        id: "caution_nouvelle_existante4" + idl
      },
      domProps: {
        value: caution_nouvelle_ligne.cautions_nouvelles_lignes_taux
      },
      on: {
        change: _vm.handleInput,
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(caution_nouvelle_ligne, "cautions_nouvelles_lignes_taux", $event.target.value);
        }
      }
    })]), _vm._v(" "), idl == 0 ? _c("td", [_c("button", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: idl == 0,
        expression: "idl == 0"
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
          return _vm.addEng_cmt_clt_cb();
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
        value: idl > 0,
        expression: "idl > 0"
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
          return _vm.removeEng_cmt_clt_cb(idl);
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
      value: _vm.formDataToBeWatched.cmt_clt_cb_total_signature_montant,
      id: "cmt_clt_cb_total_signature_montant",
      disabled: ""
    },
    on: {
      change: _vm.handleInput
    }
  })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      value: _vm.formDataToBeWatched.cmt_clt_cb_total_signature_proposition_dcei,
      id: "cmt_clt_cb_total_signature_proposition_dcei",
      disabled: ""
    },
    on: {
      change: _vm.handleInput
    }
  })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      value: _vm.formDataToBeWatched.cmt_clt_cb_total_signature_duree_rembourssement,
      id: "cmt_clt_cb_total_signature_duree_rembourssement",
      disabled: ""
    },
    on: {
      change: _vm.handleInput
    }
  })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      value: _vm.formDataToBeWatched.cmt_clt_cb_total_signature_taux_interet,
      id: "cmt_clt_cb_total_signature_taux_interet",
      disabled: ""
    },
    on: {
      change: _vm.handleInput
    }
  })], 1)]), _vm._v(" "), _c("tr", [_vm._m(10), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      value: _vm.formDataToBeWatched.cmt_clt_cb_total_general_montant,
      id: "cmt_clt_cb_total_general_montant",
      disabled: ""
    },
    on: {
      change: _vm.handleInput
    }
  })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      value: _vm.formDataToBeWatched.cmt_clt_cb_total_general_proposition_dcei,
      id: "cmt_clt_cb_total_general_proposition_dcei",
      disabled: ""
    },
    on: {
      change: _vm.handleInput
    }
  })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      value: _vm.formDataToBeWatched.cmt_clt_cb_total_general_duree_rembourssement,
      id: "cmt_clt_cb_total_general_duree_rembourssement",
      disabled: ""
    },
    on: {
      change: _vm.handleInput
    }
  })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      value: _vm.formDataToBeWatched.cmt_clt_cb_total_general_taux_interet,
      id: "cmt_clt_cb_total_general_taux_interet",
      disabled: ""
    },
    on: {
      change: _vm.handleInput
    }
  })], 1)])], 2)])])]), _vm._v(" "), _c("div", {
    staticClass: "mt-3"
  }, [_vm._m(11), _vm._v(" "), _c("vue-editor", {
    attrs: {
      id: "commentaires_nouvelles_lignes"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.comment_cmt_clt_cb,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "comment_cmt_clt_cb", $$v);
      },
      expression: "formDataToBeWatched.comment_cmt_clt_cb"
    }
  })], 1)]), _vm._v(" "), _c("div", {
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
  }, [_c("h3", {
    staticClass: "head",
    attrs: {
      id: "f7-head"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.tb_display_name) + " :Crédit(s) sollicité(s) et justification de la demande\n                    "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
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
  })], 1)])])], 1), _vm._v(" "), _c("div", {
    staticStyle: {
      position: "relative",
      "z-index": "999999999"
    }
  }, [_c("div", {
    staticClass: "modal fade modal-lg",
    attrs: {
      id: "instruction6",
      tabindex: "-1",
      "aria-labelledby": "instruction6",
      "aria-hidden": "true"
    }
  }, [_c("div", {
    staticClass: "modal-dialog",
    staticStyle: {
      width: "650px"
    }
  }, [_c("div", {
    staticClass: "modal-content"
  }, [_c("div", {
    staticClass: "modal-header"
  }, [_c("h5", {
    staticClass: "modal-title",
    attrs: {
      id: "instruction6"
    }
  }, [_vm._v("\n                            Instruction - " + _vm._s(_vm.tb_display_name) + " : Centrales\n                            risques - Adhésion au BIC(si applicable)\n                        ")]), _vm._v(" "), _c("button", {
    staticClass: "btn-close",
    attrs: {
      type: "button",
      "data-bs-dismiss": "modal",
      "aria-label": "Close"
    }
  })]), _vm._v(" "), _vm._m(12), _vm._v(" "), _vm._m(13)])])])]), _vm._v(" "), _c("note-modal", {
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
        var _vm$formDataToBeWatch2;
        (_vm$formDataToBeWatch2 = _vm.formDataToBeWatched.notes) === null || _vm$formDataToBeWatch2 === void 0 || _vm$formDataToBeWatch2.unshift($event);
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
  return _c("thead", [_c("tr", [_c("td", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Banques")])]), _vm._v(" "), _c("td", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Demande client")])]), _vm._v(" "), _c("td", [_c("label", {
    staticClass: "form-label",
    attrs: {
      title: "Montant"
    }
  }, [_vm._v("Montant")])]), _vm._v(" "), _c("td", [_c("label", {
    staticClass: "form-label",
    attrs: {
      title: "Proposition DCEI"
    }
  }, [_vm._v("Proposition groupe")])]), _vm._v(" "), _c("td", [_c("label", {
    staticClass: "form-label",
    attrs: {
      title: "Echéance/Durée tirage"
    }
  }, [_vm._v("Ech/Durée tirage")])]), _vm._v(" "), _c("td", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Taux ")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "text-right",
    attrs: {
      colspan: "2"
    }
  }, [_c("label", {
    staticClass: "form-label mt-1",
    attrs: {
      "for": "total_par_caisse"
    }
  }, [_c("b", [_vm._v("S/Total par caisse")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("td", {
    attrs: {
      colspan: "7"
    }
  }, [_c("label", {
    staticClass: "form-label"
  }, [_c("b", [_vm._v("Engagement signature")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "text-right",
    attrs: {
      colspan: "2"
    }
  }, [_c("label", {
    staticClass: "form-label mt-1",
    attrs: {
      "for": "total_signature"
    }
  }, [_c("b", [_vm._v("S/Total par signature")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "text-right",
    attrs: {
      colspan: "2"
    }
  }, [_c("label", {
    staticClass: "form-label mt-1",
    attrs: {
      "for": "total_signature"
    }
  }, [_c("b", [_vm._v("Total")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": "commentaires_nouvelles_lignes"
    }
  }, [_c("b", [_vm._v("Commentaires sur les nouvelles lignes")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Banques")])]), _vm._v(" "), _c("th", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Destination du financement ")])]), _vm._v(" "), _c("th", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Nature du crédit")])]), _vm._v(" "), _c("th", [_c("label", {
    staticClass: "form-label",
    attrs: {
      title: "Montant"
    }
  }, [_vm._v("Montant")])]), _vm._v(" "), _c("th", [_c("label", {
    staticClass: "form-label",
    attrs: {
      title: "Proposition DCEI"
    }
  }, [_vm._v("Proposition groupe")])]), _vm._v(" "), _c("th", [_c("label", {
    staticClass: "form-label",
    attrs: {
      title: "Echéance/Durée tirage"
    }
  }, [_vm._v("Durée de remboursement :")])]), _vm._v(" "), _c("th", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Taux d’intérêt ")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "text-right",
    attrs: {
      colspan: "3"
    }
  }, [_c("label", {
    staticClass: "form-label mt-1",
    attrs: {
      "for": "total_par_caisse"
    }
  }, [_c("b", [_vm._v("S/Total par caisse")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("td", {
    attrs: {
      colspan: "7"
    }
  }, [_c("label", {
    staticClass: "form-label"
  }, [_c("b", [_vm._v("Engagement signature")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "text-right",
    attrs: {
      colspan: "3"
    }
  }, [_c("label", {
    staticClass: "form-label mt-1",
    attrs: {
      "for": "total_signature"
    }
  }, [_c("b", [_vm._v("S/Total par signature")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "text-right",
    attrs: {
      colspan: "3"
    }
  }, [_c("label", {
    staticClass: "form-label mt-1",
    attrs: {
      "for": "total_signature"
    }
  }, [_c("b", [_vm._v("Total")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": "commentaires_nouvelles_lignes"
    }
  }, [_c("b", [_vm._v("Commentaires sur les nouvelles lignes")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "modal-body"
  }, [_c("img", {
    attrs: {
      src: "/images/capture_afg/centrale_risques_adhesion_au_bic.png",
      width: "100%; height:100%;"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "modal-footer"
  }, [_c("button", {
    staticClass: "btn btn-secondary",
    attrs: {
      type: "button",
      "data-bs-dismiss": "modal"
    }
  }, [_vm._v("\n                            Fermer\n                        ")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA5.vue?vue&type=style&index=0&id=28b0b334&lang=css&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA5.vue?vue&type=style&index=0&id=28b0b334&lang=css&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\ninput[data-v-28b0b334] {\r\n    /*border: 1px solid red;*/\n}\n*[data-v-28b0b334] {\r\n    font-family: \"Google sans\";\n}\nth[data-v-28b0b334] {\r\n    font-size: 12px;\n}\nlabel[data-v-28b0b334] {\r\n    height: 10px;\r\n    font-size: 13px;\n}\ninput[data-v-28b0b334],\r\nselect[data-v-28b0b334] {\r\n    height: 35px;\r\n    border-color: #34495e;\r\n    color: #57606f;\r\n    font-size: 13px;\r\n    font-weight: bold;\n}\n.card-width-height[data-v-28b0b334] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-28b0b334] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\n.hdc[data-v-28b0b334] {\r\n    background-color: #57606f;\n}\r\n\r\n/* Ajouter note */\n.badge-sm[data-v-28b0b334] {\r\n    display: inline-block;\r\n    width: 15px;\r\n    height: 15px;\r\n    background: rgba(255, 0, 0, 0.882);\r\n    color: white;\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    border-radius: 100%;\r\n    position: absolute;\r\n    top: -20%;\r\n    left: 55%;\r\n    text-align: center;\n}\n.relook-header[data-v-28b0b334] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\n.equipe[data-v-28b0b334]{\r\n    background: #00ffff21;\r\n    color: #000;\n}\n.bg-relooker[data-v-28b0b334] {\r\n    background-color: #2c3e50;\r\n    color: white;\n}\n.ligne_existante_banque_hypotheques input[data-v-28b0b334],\r\n.ligne_existante_banque_hypotheques select[data-v-28b0b334],\r\n.ligne_existante_banque_gages input[data-v-28b0b334],\r\n.ligne_existante_banque_gages select[data-v-28b0b334] {\r\n    min-width: 100px;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA5.vue?vue&type=style&index=0&id=28b0b334&lang=css&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA5.vue?vue&type=style&index=0&id=28b0b334&lang=css&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RG_CA5_vue_vue_type_style_index_0_id_28b0b334_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RG-CA5.vue?vue&type=style&index=0&id=28b0b334&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA5.vue?vue&type=style&index=0&id=28b0b334&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RG_CA5_vue_vue_type_style_index_0_id_28b0b334_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RG_CA5_vue_vue_type_style_index_0_id_28b0b334_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA5.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA5.vue ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RG_CA5_vue_vue_type_template_id_28b0b334_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RG-CA5.vue?vue&type=template&id=28b0b334&scoped=true */ "./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA5.vue?vue&type=template&id=28b0b334&scoped=true");
/* harmony import */ var _RG_CA5_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RG-CA5.vue?vue&type=script&lang=js */ "./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA5.vue?vue&type=script&lang=js");
/* harmony import */ var _RG_CA5_vue_vue_type_style_index_0_id_28b0b334_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RG-CA5.vue?vue&type=style&index=0&id=28b0b334&lang=css&scoped=true */ "./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA5.vue?vue&type=style&index=0&id=28b0b334&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _RG_CA5_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _RG_CA5_vue_vue_type_template_id_28b0b334_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _RG_CA5_vue_vue_type_template_id_28b0b334_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "28b0b334",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA5.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA5.vue?vue&type=script&lang=js":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA5.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RG_CA5_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RG-CA5.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA5.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RG_CA5_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA5.vue?vue&type=style&index=0&id=28b0b334&lang=css&scoped=true":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA5.vue?vue&type=style&index=0&id=28b0b334&lang=css&scoped=true ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RG_CA5_vue_vue_type_style_index_0_id_28b0b334_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RG-CA5.vue?vue&type=style&index=0&id=28b0b334&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA5.vue?vue&type=style&index=0&id=28b0b334&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA5.vue?vue&type=template&id=28b0b334&scoped=true":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA5.vue?vue&type=template&id=28b0b334&scoped=true ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RG_CA5_vue_vue_type_template_id_28b0b334_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RG_CA5_vue_vue_type_template_id_28b0b334_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RG_CA5_vue_vue_type_template_id_28b0b334_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RG-CA5.vue?vue&type=template&id=28b0b334&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA5.vue?vue&type=template&id=28b0b334&scoped=true");


/***/ })

}]);