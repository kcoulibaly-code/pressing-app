"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_contreanalyse_cofina_groupe_CA4_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/groupe/CA4.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/groupe/CA4.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/ContextMenu */ "./resources/js/components/shared/ContextMenu.vue");
/* harmony import */ var _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/ContextMenuItem */ "./resources/js/components/shared/ContextMenuItem.vue");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../helpers/helper */ "./resources/js/helpers/helper.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }







window.$ = window.jQuery = __webpack_require__(/*! jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "garanties",
  display: "Garanties",
  components: {
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.TrashIcon,
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.ChevronDownIcon,
    ContextMenu: _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__["default"],
    ContextMenuItem: _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    meta_data: Object,
    tb_name: String,
    tb_display_name: String
  },
  created: function created() {},
  mounted: function mounted() {
    var _this = this;
    this.tableClosedOrOpened();
    this.loadRetrieved();
    this.loadCommentaire();
    this.loadTbAttrs();
    // charge les attributs + sous attributs des tables
    EventBus.$on("montant-credit-updated", function (data) {
      var _data$montant_credit;
      _this.montant_dep_gar_crsd = Number(data.garantie + data.crsd).toLocaleString();
      var a = Number((_data$montant_credit = data.montant_credit) === null || _data$montant_credit === void 0 ? void 0 : _data$montant_credit.toString().replace(/\s/g, ''));
      a = isNaN(a) ? 0 : a;
      var value = Number(_this.montant_dep_gar_crsd.replace(/\s+/g, "")) * 100 / a;
      _this.taux_dep_gar_crsd = isFinite(value) ? value : 0;
      _this.defaultSuretes = [{
        label: "Souscription de ".concat(_this.souscriptionValue, " billets \xE0 ordre sign\xE9s par l'emprunteur"),
        value: {
          label: "Souscription de ".concat(_this.souscriptionValue, " billets \xE0 ordre sign\xE9s par l'emprunteur"),
          nom: "souscription",
          billets: _this.souscriptionValue
        },
        id: "souscription"
      }, {
        label: "D\xE9p\xF4t de garantie et compte de r\xE9serve du service de la dette (DG + CRSD) \xE0 hauteur de ".concat(_this.montant_dep_gar_crsd, " soit ").concat(_this.taux_dep_gar_crsd, "% du montant propos\xE9"),
        value: {
          label: "D\xE9p\xF4t de garantie et compte de r\xE9serve du service de la dette (DG + CRSD) \xE0 hauteur de ".concat(_this.montant_dep_gar_crsd, " soit ").concat(_this.taux_dep_gar_crsd, "% du montant propos\xE9"),
          nom: "depot",
          taux: _this.taux_dep_gar_crsd,
          montant: _this.montant_dep_gar_crsd
        },
        id: "depot"
      }];
      _this.formDataToBeWatched.suretes_diverses.forEach(function (el, index) {
        _this.defaultSuretes.forEach(function (elem) {
          if (elem.value.nom === el.nom) {
            _this.formDataToBeWatched.suretes_diverses[index] = elem.value;
            // console.log({ el: el.label, elem: elem.label })
          }
        });
      });
      // this.loadRetrieved()
    });
  },
  computed: {
    souscriptionValue: function souscriptionValue() {
      var _this$meta_data$dossi, _this$meta_data$dossi2;
      var dure = Number((_this$meta_data$dossi = this.meta_data.dossier_credit) === null || _this$meta_data$dossi === void 0 || (_this$meta_data$dossi = _this$meta_data$dossi.cred_pub_tb_00) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi.duree_credit) || 0;
      var mode = (_this$meta_data$dossi2 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi2 === void 0 || (_this$meta_data$dossi2 = _this$meta_data$dossi2.cred_pub_tb_1) === null || _this$meta_data$dossi2 === void 0 || (_this$meta_data$dossi2 = _this$meta_data$dossi2.mode_paiement) === null || _this$meta_data$dossi2 === void 0 ? void 0 : _this$meta_data$dossi2.toLowerCase();
      var diviseur = 1;
      if (mode === 'mensuelle') diviseur = 1;
      if (mode === 'bi-mensuel') diviseur = 2;
      if (mode === 'trimestriel') diviseur = 3;
      if (mode === 'semestriel') diviseur = 6;
      if (mode === 'in fine') diviseur = dure || 1;
      return dure / diviseur;
    },
    engagement_value: function engagement_value() {
      return {
        label: "Engagement de domiciliation d'au moins ".concat(this.meta_data.dossier_credit.cred_pub_tb_3.montant_engagement, " des recettes par semaines dans nos livres"),
        nom: 'engagement',
        montant: this.meta_data.dossier_credit.cred_pub_tb_3.montant_engagement
      };
    }
  },
  data: function data() {
    var vm = this;
    return {
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
        cautionnement_solidaires: []
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
      gages_analyste: [_defineProperty({
        bien_a_gage: "",
        proprietaire: "",
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
        nom_prenoms: '',
        profession: '',
        revenu_mensuel: 0,
        valeur_patrimoine: 0
      }]
    };
  },
  methods: {
    refreshSurete: function refreshSurete(e) {
      var index = this.suretes_diverses.findIndex(function (el) {
        return el.nom == "engagement";
      });
      this.$set(this.suretes_diverses, index, this.engagement_value);
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
      var _this2 = this;
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
        _this2.defaultSuretes.forEach(function (elem) {
          if (elem.value.nom === el.nom) {
            _this2.formDataToBeWatched.suretes_diverses[index] = elem.value;
            // console.log({el: el.label, elem: elem.label})
          }
        });
      });
    },
    loadRetrieved: function loadRetrieved() {
      var _this3 = this;
      var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];
      if (lentb.length > 0) {
        var _this$meta_data$dossi18;
        if (this.meta_data["dossier_credit"][createdKey] != undefined) {
          var _this$meta_data$dossi3, _this$meta_data$dossi7, _this$meta_data$dossi1, _this$meta_data$dossi11, _this$meta_data$dossi13, _this$meta_data$dossi15;
          this.formDataToBeWatched = this.meta_data["dossier_credit"][createdKey];
          if (((_this$meta_data$dossi3 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi3 === void 0 ? void 0 : _this$meta_data$dossi3.hypotheques_analyste) != undefined) {
            var _this$meta_data$dossi4, _this$meta_data$dossi5, _this$meta_data$dossi6;
            if (((_this$meta_data$dossi4 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi4 === void 0 ? void 0 : _this$meta_data$dossi4.hypotheques_analyste) != "") {
              this.hypotheques_analyste = this.meta_data["dossier_credit"][createdKey]['hypotheques_analyste'];
            }
            if (((_this$meta_data$dossi5 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi5 === void 0 ? void 0 : _this$meta_data$dossi5.total_hypotheques_valeur_marchande) != "") {
              this.total_hypotheques_valeur_marchande = this.meta_data["dossier_credit"][createdKey]['total_hypotheques_valeur_marchande'];
            }
            if (((_this$meta_data$dossi6 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi6 === void 0 ? void 0 : _this$meta_data$dossi6.total_hypotheques_valeur_considere) != "") {
              this.formDataToBeWatched.total_hypotheques_valeur_considere = this.meta_data["dossier_credit"][createdKey]['total_hypotheques_valeur_considere'];
            }
          }
          if (((_this$meta_data$dossi7 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi7 === void 0 ? void 0 : _this$meta_data$dossi7.gages_analyste) != undefined) {
            var _this$meta_data$dossi8, _this$meta_data$dossi9, _this$meta_data$dossi0;
            if (((_this$meta_data$dossi8 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi8 === void 0 ? void 0 : _this$meta_data$dossi8.gages_analyste) != "") {
              this.gages_analyste = this.meta_data["dossier_credit"][createdKey]['gages_analyste'];
            }
            if (((_this$meta_data$dossi9 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi9 === void 0 ? void 0 : _this$meta_data$dossi9.total_gages_valeur_marchande) != "") {
              this.total_gages_valeur_marchande = this.meta_data["dossier_credit"][createdKey]['total_gages_valeur_marchande'];
            }
            if (((_this$meta_data$dossi0 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi0 === void 0 ? void 0 : _this$meta_data$dossi0.total_gages_valeur_considere) != "") {
              this.formDataToBeWatched.total_gages_valeur_considere = this.meta_data["dossier_credit"][createdKey]['total_gages_valeur_considere'];
            }
          }
          if (((_this$meta_data$dossi1 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi1 === void 0 ? void 0 : _this$meta_data$dossi1.suretes_diverses) != undefined) {
            var _this$meta_data$dossi10;
            if (((_this$meta_data$dossi10 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi10 === void 0 ? void 0 : _this$meta_data$dossi10.suretes_diverses) != "") {
              this.suretes_diverses = this.meta_data["dossier_credit"][createdKey]['suretes_diverses'];
            }
          }
          if (((_this$meta_data$dossi11 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi11 === void 0 ? void 0 : _this$meta_data$dossi11.cond_particulieres) != undefined) {
            var _this$meta_data$dossi12;
            if (((_this$meta_data$dossi12 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi12 === void 0 ? void 0 : _this$meta_data$dossi12.cond_particulieres) != "") {
              this.cond_particulieres = this.meta_data["dossier_credit"][createdKey]['cond_particulieres'];
            }
          }
          if (((_this$meta_data$dossi13 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi13 === void 0 ? void 0 : _this$meta_data$dossi13.cautionnement_solidaires) != undefined) {
            var _this$meta_data$dossi14;
            if (((_this$meta_data$dossi14 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi14 === void 0 ? void 0 : _this$meta_data$dossi14.cautionnement_solidaires) != "") {
              this.cautionnement_solidaires = this.meta_data["dossier_credit"][createdKey]['cautionnement_solidaires'];
            }
          }
          if (((_this$meta_data$dossi15 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi15 === void 0 ? void 0 : _this$meta_data$dossi15.co_signataire) != undefined) {
            var _this$meta_data$dossi16;
            if (((_this$meta_data$dossi16 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi16 === void 0 ? void 0 : _this$meta_data$dossi16.co_signataire) != "") {
              this.co_signataire = this.meta_data["dossier_credit"][createdKey]['co_signataire'];
            }
          }
          if (this.meta_data.dossier_credit.cred_pub_tb_1 != undefined) {
            var _this$meta_data$dossi17;
            this.montant_dep_gar_crsd = Number(this.meta_data.dossier_credit.cred_pub_tb_1.garantie + this.meta_data.dossier_credit.cred_pub_tb_1.montant_crsd).toLocaleString();
            var a = Number((_this$meta_data$dossi17 = this.meta_data.dossier_credit.cred_pub_tb_1.montant_credit) === null || _this$meta_data$dossi17 === void 0 ? void 0 : _this$meta_data$dossi17.toString().replace(/\s/g, ''));
            a = isNaN(a) ? 0 : a;
            var value = Number(this.montant_dep_gar_crsd.replace(/\s+/g, "")) * 100 / a;
            this.taux_dep_gar_crsd = isFinite(value) ? value : 0;
          }
        } else {
          var _this$meta_data, _this$meta_data2, _this$meta_data3, _this$meta_data4, _this$meta_data5;
          this.hypotheques_analyste = (_this$meta_data = this.meta_data) === null || _this$meta_data === void 0 || (_this$meta_data = _this$meta_data.dossier_credit) === null || _this$meta_data === void 0 || (_this$meta_data = _this$meta_data.cred_pub_tb_49) === null || _this$meta_data === void 0 ? void 0 : _this$meta_data.hypotheques;
          this.formDataToBeWatched.hypotheques_analyste = this.hypotheques_analyste;
          this.formDataToBeWatched.total_hypotheques_valeur_marchande = (_this$meta_data2 = this.meta_data) === null || _this$meta_data2 === void 0 || (_this$meta_data2 = _this$meta_data2.dossier_credit) === null || _this$meta_data2 === void 0 || (_this$meta_data2 = _this$meta_data2.cred_pub_tb_49) === null || _this$meta_data2 === void 0 ? void 0 : _this$meta_data2.total_hypotheques_valeur_marchande;
          this.formDataToBeWatched.total_hypotheques_valeur_considere = this.total_hypotheques_valeur_considere;
          this.gages_analyste = (_this$meta_data3 = this.meta_data) === null || _this$meta_data3 === void 0 || (_this$meta_data3 = _this$meta_data3.dossier_credit) === null || _this$meta_data3 === void 0 || (_this$meta_data3 = _this$meta_data3.cred_pub_tb_49) === null || _this$meta_data3 === void 0 ? void 0 : _this$meta_data3.gages;
          this.formDataToBeWatched.gages_analyste = this.gages_analyste;
          this.cond_particulieres = (_this$meta_data4 = this.meta_data) === null || _this$meta_data4 === void 0 || (_this$meta_data4 = _this$meta_data4.dossier_credit) === null || _this$meta_data4 === void 0 || (_this$meta_data4 = _this$meta_data4.cred_pub_tb_49) === null || _this$meta_data4 === void 0 ? void 0 : _this$meta_data4.cond_particulieres;
          this.formDataToBeWatched.cond_particulieres = this.cond_particulieres;
          this.cautionnement_solidaires = (_this$meta_data5 = this.meta_data) === null || _this$meta_data5 === void 0 || (_this$meta_data5 = _this$meta_data5.dossier_credit) === null || _this$meta_data5 === void 0 || (_this$meta_data5 = _this$meta_data5.cred_pub_tb_49) === null || _this$meta_data5 === void 0 ? void 0 : _this$meta_data5.cautionnement_solidaires;
          this.formDataToBeWatched.cautionnement_solidaires = this.cautionnement_solidaires;

          // console.log('gages',this.meta_data?.dossier_credit?.cred_pub_tb_3?.gages)
        }

        // Close table by default
        this.defaultRetract(false, (_this$meta_data$dossi18 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi18 === void 0 ? void 0 : _this$meta_data$dossi18.applied_templ_id);
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
    launchAutoSaver: function launchAutoSaver() {
      var _this4 = this;
      _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["default"].loadUserData().then(function (res) {
        _this4.send2Backend(res, 0, 0);
      })["catch"](function (err) {
        _this4.loadWithError(err);
      });
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
      var som = 0;
      ob.filter(function (elm) {
        var _elm$key;
        som += parseInt((_elm$key = elm[key]) === null || _elm$key === void 0 ? void 0 : _elm$key.toString().replace(/\s/g, ''));
      });
      return som;
    },
    removeHypotheque: function removeHypotheque(index) {
      this.hypotheques_analyste.splice(index, 1);
      this.formDataToBeWatched["total_hypotheques_valeur_marchande"] = this.somX3(this.hypotheques_analyste, ' valeur_marchande');
      // console.log("indexHypo", this.somX3(this.hypotheques_analyste, ' valeur_marchande'))
      this.formDataToBeWatched["total_hypotheques_valeur_considere"] = this.somX3(this.hypotheques_analyste, 'valeur_considere');
    },
    removeGage: function removeGage(index) {
      this.gages_analyste.splice(index, 1);
      // console.log("indexHypo", this.somX3(this.gages_analyste[index], ' valeur_marchande'))
      this.formDataToBeWatched["total_gages_valeur_marchande"] = this.somX3(this.gages_analyste, ' valeur_marchande');
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
        id: "t3-head"
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
    handleInput: function handleInput(evt) {
      this.formDataToBeWatched.total_hypotheques_valeur_marchande = this.somX3(this.hypotheques_analyste, 'valeur_marchande');
      this.formDataToBeWatched.total_hypotheques_valeur_considere = this.somX3(this.hypotheques_analyste, 'valeur_considere');
      // alert(0)
      this.formDataToBeWatched.total_gages_valeur_marchande = this.somX3(this.gages_analyste, 'valeur_marchande');
      this.formDataToBeWatched.total_gages_valeur_considere = this.somX3(this.gages_analyste, 'valeur_considere');
      this.formDataToBeWatched.hypotheques_analyste = this.hypotheques_analyste;
      this.formDataToBeWatched.gages_analyste = this.gages_analyste;
      this.formDataToBeWatched['suretes_diverses'] = this.suretes_diverses;
      this.formDataToBeWatched['co_signataire'] = this.co_signataire;
      this.formDataToBeWatched['cond_particulieres'] = this.cond_particulieres;
      this.formDataToBeWatched['cautionnement_solidaires'] = this.cautionnement_solidaires;
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/groupe/CA4.vue?vue&type=template&id=2736d5fe&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/groupe/CA4.vue?vue&type=template&id=2736d5fe&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  var _vm$formDataToBeWatch, _this$meta_data, _vm$meta_data$dossier, _vm$meta_data$dossier2, _vm$meta_data, _vm$meta_data2, _vm$formDataToBeWatch2;
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
      id: _vm.tb_name,
      cred_pub_key: _vm.meta_parseable.cred_pub_key,
      tb_name: _vm.tb_name,
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
      id: "t3-head"
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
  })], 1)])])]), _vm._v(" "), (_this$meta_data = this.meta_data) !== null && _this$meta_data !== void 0 && (_this$meta_data = _this$meta_data.dossier_credit) !== null && _this$meta_data !== void 0 && _this$meta_data.tbs_in_use.includes("tb3") ? _c("div", [_vm.seen1 === true ? _c("div", {
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
  }, [_vm._v("\n                        Hypothèques\n                        "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)]), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "row px-3 mt-4"
  }, [_c("div", {
    staticClass: "fw-bold text-center text-uppercase"
  }, [_vm._v("\n                        Hypothèques renseignés par le CAF\n                    ")]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-borderless"
  }, [_vm._m(0), _vm._v(" "), _c("tbody", [_vm._l((_vm$meta_data$dossier = _vm.meta_data.dossier_credit.cred_pub_tb_3) === null || _vm$meta_data$dossier === void 0 ? void 0 : _vm$meta_data$dossier.hypotheques, function (hypo_du_caf, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_vm._v("\n                                        " + _vm._s(index + 1) + ".\n                                    ")]), _vm._v(" "), _c("td", [_c("input", {
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
        "default-typing": false,
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
        "default-typing": false,
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
  }), _vm._v(" "), _c("tr", [_vm._m(1), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      readonly: "",
      "default-typing": false
    },
    model: {
      value: _vm.meta_data.dossier_credit.cred_pub_tb_3.total_hypotheques_valeur_marchande,
      callback: function callback($$v) {
        _vm.$set(_vm.meta_data.dossier_credit.cred_pub_tb_3, "total_hypotheques_valeur_marchande", $$v);
      },
      expression: "meta_data.dossier_credit.cred_pub_tb_3.total_hypotheques_valeur_marchande"
    }
  })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      readonly: "",
      "default-typing": false
    },
    model: {
      value: _vm.meta_data.dossier_credit.cred_pub_tb_3.total_hypotheques_valeur_considere,
      callback: function callback($$v) {
        _vm.$set(_vm.meta_data.dossier_credit.cred_pub_tb_3, "total_hypotheques_valeur_considere", $$v);
      },
      expression: "meta_data.dossier_credit.cred_pub_tb_3.total_hypotheques_valeur_considere"
    }
  })], 1)])], 2)])])]), _vm._v(" "), _c("div", {
    staticClass: "row px-3 mt-4"
  }, [_c("div", {
    staticClass: "col-md-12"
  }, [_c("div", {
    staticClass: "fw-bold text-center text-uppercase"
  }, [_vm._v("\n                            Hypothèques renseignés par l'ARC\n                        ")]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-borderless"
  }, [_vm._m(2), _vm._v(" "), _c("tbody", [_vm._l((_vm$meta_data$dossier2 = _vm.meta_data.dossier_credit.cred_pub_tb_49) === null || _vm$meta_data$dossier2 === void 0 ? void 0 : _vm$meta_data$dossier2.hypotheques_analyste, function (hypotheque_ana, index) {
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
      staticClass: "form-control",
      attrs: {
        required: "",
        type: "text",
        disabled: ""
      },
      domProps: {
        value: hypotheque_ana.bien_hypotheque
      },
      on: {
        change: function change($event) {
          return _vm.$set(hypotheque_ana, "bien_hypotheque", $event.target.value);
        }
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
      staticClass: "form-control",
      attrs: {
        required: "",
        type: "text",
        disabled: ""
      },
      domProps: {
        value: hypotheque_ana.proprietaire
      },
      on: {
        change: function change($event) {
          return _vm.$set(hypotheque_ana, "proprietaire", $event.target.value);
        }
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
      staticClass: "form-control",
      attrs: {
        required: "",
        type: "date",
        disabled: ""
      },
      domProps: {
        value: hypotheque_ana.annee_achat
      },
      on: {
        change: function change($event) {
          return _vm.$set(hypotheque_ana, "annee_achat", $event.target.value);
        }
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
      staticClass: "form-control",
      attrs: {
        required: "",
        type: "text",
        disabled: ""
      },
      domProps: {
        value: hypotheque_ana.adresse_emplacement
      },
      on: {
        change: function change($event) {
          return _vm.$set(hypotheque_ana, "adresse_emplacement", $event.target.value);
        }
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
      staticClass: "form-control",
      attrs: {
        required: "",
        type: "text",
        disabled: ""
      },
      domProps: {
        value: hypotheque_ana.longitude
      },
      on: {
        change: function change($event) {
          return _vm.$set(hypotheque_ana, "longitude", $event.target.value);
        }
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
      staticClass: "form-control",
      attrs: {
        required: "",
        type: "text",
        disabled: ""
      },
      domProps: {
        value: hypotheque_ana.lattitude
      },
      on: {
        change: function change($event) {
          return _vm.$set(hypotheque_ana, "lattitude", $event.target.value);
        }
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
      staticClass: "form-control",
      attrs: {
        required: "",
        type: "date",
        disabled: ""
      },
      domProps: {
        value: hypotheque_ana.date_evaluation
      },
      on: {
        change: function change($event) {
          return _vm.$set(hypotheque_ana, "date_evaluation", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("currency-input", {
      staticClass: "form-control",
      attrs: {
        "default-typing": false,
        type: "text",
        disabled: ""
      },
      model: {
        value: hypotheque_ana.valeur_marchande,
        callback: function callback($$v) {
          _vm.$set(hypotheque_ana, "valeur_marchande", $$v);
        },
        expression: "hypotheque_ana.valeur_marchande"
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
      staticClass: "form-control",
      attrs: {
        "default-typing": false,
        type: "text",
        disabled: ""
      },
      model: {
        value: hypotheque_ana.valeur_considere,
        callback: function callback($$v) {
          _vm.$set(hypotheque_ana, "valeur_considere", $$v);
        },
        expression: "hypotheque_ana.valeur_considere"
      }
    })], 1)]);
  }), _vm._v(" "), _c("tr", [_vm._m(3), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      disabled: "",
      "default-typing": false
    },
    model: {
      value: _vm.meta_data.dossier_credit.cred_pub_tb_49.total_hypotheques_valeur_marchande,
      callback: function callback($$v) {
        _vm.$set(_vm.meta_data.dossier_credit.cred_pub_tb_49, "total_hypotheques_valeur_marchande", $$v);
      },
      expression: "meta_data.dossier_credit.cred_pub_tb_49.total_hypotheques_valeur_marchande"
    }
  })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      disabled: "",
      "default-typing": false
    },
    model: {
      value: _vm.meta_data.dossier_credit.cred_pub_tb_49.total_hypotheques_valeur_considere,
      callback: function callback($$v) {
        _vm.$set(_vm.meta_data.dossier_credit.cred_pub_tb_49, "total_hypotheques_valeur_considere", $$v);
      },
      expression: "meta_data.dossier_credit.cred_pub_tb_49.total_hypotheques_valeur_considere"
    }
  })], 1)])], 2)])])])]), _vm._v(" "), _c("div", {
    staticClass: "row px-3 mt-4"
  }, [_c("div", {
    staticClass: "col-md-12 text-center text-uppercase fw-bold"
  }, [_vm._v("Hypothèques renseignés par l'ARCG")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-12"
  }, [_c("div", {
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
  })], 1)])], 2)])])])])]) : _c("div", [_c("div", {
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
  }, [_vm._v("\n                            Hypothèques\n                            "), _c("chevron-down-icon", {
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
  }, [_vm._v("\n                        Gages\n                        "), _c("chevron-up-icon", {
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
  }, [_c("div", {
    staticClass: "fw-bold text-center text-uppercase"
  }, [_vm._v("\n                        Gages renseignés par le CAF\n                    ")]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-borderless"
  }, [_vm._m(6), _vm._v(" "), _c("tbody", [_vm._l(_vm.meta_data.dossier_credit.cred_pub_tb_3.gages, function (gage, index) {
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
      "default-typing": false
    },
    on: {
      input: _vm.handleInput
    },
    model: {
      value: _vm.meta_data.dossier_credit.cred_pub_tb_3.total_gages_valeur_marchande,
      callback: function callback($$v) {
        _vm.$set(_vm.meta_data.dossier_credit.cred_pub_tb_3, "total_gages_valeur_marchande", $$v);
      },
      expression: "meta_data.dossier_credit.cred_pub_tb_3.total_gages_valeur_marchande"
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
      value: _vm.meta_data.dossier_credit.cred_pub_tb_3.total_gages_valeur_considere,
      callback: function callback($$v) {
        _vm.$set(_vm.meta_data.dossier_credit.cred_pub_tb_3, "total_gages_valeur_considere", $$v);
      },
      expression: "meta_data.dossier_credit.cred_pub_tb_3.total_gages_valeur_considere"
    }
  })], 1)])], 2)])]), _vm._v(" "), _c("div", {
    staticClass: "fw-bold text-center text-uppercase"
  }, [_vm._v("\n                        Gages renseignés par l'ARC\n                    ")]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-borderless"
  }, [_vm._m(8), _vm._v(" "), _c("tbody", [_vm._l(_vm.meta_data.dossier_credit.cred_pub_tb_49.gages_analyste, function (gage, index) {
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
  }), _vm._v(" "), _c("tr", [_vm._m(9), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      readonly: "",
      "default-typing": false
    },
    on: {
      input: _vm.handleInput
    },
    model: {
      value: _vm.meta_data.dossier_credit.cred_pub_tb_3.total_gages_valeur_marchande,
      callback: function callback($$v) {
        _vm.$set(_vm.meta_data.dossier_credit.cred_pub_tb_3, "total_gages_valeur_marchande", $$v);
      },
      expression: "meta_data.dossier_credit.cred_pub_tb_3.total_gages_valeur_marchande"
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
      value: _vm.meta_data.dossier_credit.cred_pub_tb_3.total_gages_valeur_considere,
      callback: function callback($$v) {
        _vm.$set(_vm.meta_data.dossier_credit.cred_pub_tb_3, "total_gages_valeur_considere", $$v);
      },
      expression: "meta_data.dossier_credit.cred_pub_tb_3.total_gages_valeur_considere"
    }
  })], 1)])], 2)])])]), _vm._v(" "), _c("div", {
    staticClass: "row mt-4 px-3"
  }, [_c("div", {
    staticClass: "fw-bold text-center text-uppercase"
  }, [_vm._v("\n                        Gages renseignés par l'ARCG\n                    ")]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-borderless"
  }, [_vm._m(10), _vm._v(" "), _c("tbody", [_vm._l(_vm.gages_analyste, function (gage, index) {
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
  }), _vm._v(" "), _c("tr", [_vm._m(11), _vm._v(" "), _c("td", [_c("currency-input", {
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
  }, [_vm._v("\n                            Gages\n                            "), _c("chevron-down-icon", {
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
  }, [_vm._v("\n                        Sûretés diverses\n                        "), _c("chevron-up-icon", {
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
  }, [_c("div", {
    staticClass: "col-md-6 border-end border-2 border-dark"
  }, [_c("div", {
    staticClass: "fw-bold text-center"
  }, [_vm._v("\n                            Sûretés renseignés par le CAF\n                        ")]), _vm._v(" "), _vm._l(_vm.meta_data.dossier_credit.cred_pub_tb_3.suretes_diverses, function (sure, index) {
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
    }, [_vm._v("\n                                   " + _vm._s(index + 1 + " " + ".") + " " + _vm._s(sure.label) + "\n                                ")])])]);
  }), _vm._v(" "), _c("div", {
    staticClass: "form-group py-2 mt-2"
  }, [_vm.meta_data.dossier_credit.cred_pub_tb_3.autres_suretes_diverses.length ? _c("div", {
    staticClass: "col-12 mt-3"
  }, [_c("table", {
    staticClass: "table table-bordered table-responsive"
  }, [_vm._m(12), _vm._v(" "), _c("tbody", _vm._l(_vm.meta_data.dossier_credit.cred_pub_tb_3.autres_suretes_diverses, function (autre_surete, index) {
    return _c("tr", {
      key: autre_surete.label
    }, [_c("td", {
      staticClass: "col-1"
    }, [_vm._v(_vm._s(index + 1) + ".")]), _vm._v(" "), _c("td", {
      staticClass: "col-10"
    }, [_vm._v(_vm._s(autre_surete.label))])]);
  }), 0)])]) : _vm._e()])], 2), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 border-start border-2 border-dark"
  }, [_c("div", {
    staticClass: "fw-bold text-center"
  }, [_vm._v("\n                            Sûretés renseignés par l'ARC\n                        ")]), _vm._v(" "), _vm.meta_data.dossier_credit.cred_pub_tb_49.suretes_diverses.length > 0 ? _c("div", _vm._l(_vm.meta_data.dossier_credit.cred_pub_tb_49.suretes_diverses, function (sure, index) {
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
    }, [_vm._v("\n                                       " + _vm._s(index + 1 + " " + ".") + " " + _vm._s(sure.label) + "\n                                    ")])])]);
  }), 0) : _c("div", {
    staticClass: "text-center align-middle",
    staticStyle: {
      height: "300px"
    }
  }, [_c("div", {
    staticClass: "text-danger"
  }, [_vm._v(" Aucune sureté diverse n'a été trouvée")])])])]), _vm._v(" "), _c("div", {
    staticClass: "row px-3 mt-4"
  }, [_c("div", {
    staticClass: "col-md-12"
  }, [_c("div", {
    staticClass: "fw-bold text-center"
  }, [_vm._v("\n                            Sûretés renseignés par l'ARCG\n                        ")]), _vm._v(" "), _vm._l(_vm.defaultSuretes, function (sure) {
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
          return el.label === sure.label;
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
    }, [_vm._v("\n                                    " + _vm._s(sure.label) + "\n                                ")])])]);
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
  }, [_vm._v("\n                                    Engagement de domiciliation d'au moins\n                                    "), _c("currency-input", {
    staticClass: "form-control d-inline",
    attrs: {
      "default-typing": false,
      type: "text",
      value: "0"
    },
    on: {
      input: _vm.refreshSurete
    },
    model: {
      value: _vm.formDataToBeWatched.montant_engagement,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "montant_engagement", $$v);
      },
      expression: "formDataToBeWatched.montant_engagement"
    }
  }), _vm._v(" des recettes par semaines dans nos\n                                    livres\n                                ")], 1)])]), _vm._v(" "), _c("div", {
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
    attrs: {
      id: "sûretés-diverses"
    }
  }, [_vm._v("\n                            Sûretés diverses\n                            "), _c("chevron-down-icon", {
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
  }, [_vm._v("\n                        Conditions particulières\n                        "), _c("chevron-up-icon", {
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
  }, [_c("div", {
    staticClass: "col-md-6 bg-ana-card"
  }, [_c("div", {
    staticClass: "fw-bold text-center"
  }, [_vm._v("\n                            Conditions particulières renseignées par le CAF\n                        ")]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table mb-5 table-borderless"
  }, [_vm._m(15), _vm._v(" "), _c("tbody", _vm._l(_vm.meta_data.dossier_credit.cred_pub_tb_3.cond_particulieres, function (cond_particuliere, index) {
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
  }), 0)])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 bg-card-ana"
  }, [_c("div", {
    staticClass: "fw-bold text-center"
  }, [_vm._v("\n                            Conditions particulières renseignés par le l'ARC\n                        ")]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table mb-5 table-borderless"
  }, [_vm._m(16), _vm._v(" "), _c("tbody", _vm._l(_vm.meta_data.dossier_credit.cred_pub_tb_49.cond_particulieres, function (cond_particuliere, index) {
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
        disabled: "",
        cols: "30",
        rows: "1"
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
  }), 0)])])])]), _vm._v(" "), _vm._m(17), _vm._v(" "), _vm._l(_vm.cond_particulieres, function (cond_particuliere, index) {
    return _c("div", {
      key: index,
      staticClass: "row mt-4 px-3"
    }, [_c("div", {
      staticClass: "col-5"
    }, [_c("textarea", {
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
    })]), _vm._v(" "), index == 0 ? _c("div", {
      staticClass: "col-1"
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
          return _vm.addCondPart();
        }
      }
    }, [_c("plus-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)]) : _c("div", {
      staticClass: "col-1"
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
    })], 1)])]);
  })], 2) : _c("div", [_c("div", {
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
  }, [_vm._v("\n                            Conditions particulières\n                            "), _c("chevron-down-icon", {
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
  }, [_vm._v("\n                        Cautionnement solidaire\n                        "), _c("i", {
    staticClass: "icofont icofont-rounded-up",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "row px-3 mt-4"
  }, [_c("div", {
    staticClass: "col-md-6 bg-ana-card"
  }, [_c("div", {
    staticClass: "fw-bold text-center"
  }, [_vm._v("\n                            Cautionnement renseignés par le CAF\n                        ")]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-borderless mb-1"
  }, [_vm._m(18), _vm._v(" "), _c("tbody", _vm._l((_vm$meta_data = _vm.meta_data) === null || _vm$meta_data === void 0 || (_vm$meta_data = _vm$meta_data.dossier_credit) === null || _vm$meta_data === void 0 || (_vm$meta_data = _vm$meta_data.cred_pub_tb_3) === null || _vm$meta_data === void 0 ? void 0 : _vm$meta_data.cautionnement_solidaires, function (cautionnement, index) {
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
  }), 0)])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 bg-card-ana"
  }, [_c("div", {
    staticClass: "fw-bold text-center"
  }, [_vm._v("\n                            Cautionnement renseignés par l'ARC\n                        ")]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-borderless mb-1"
  }, [_vm._m(19), _vm._v(" "), _c("tbody", _vm._l((_vm$meta_data2 = _vm.meta_data) === null || _vm$meta_data2 === void 0 || (_vm$meta_data2 = _vm$meta_data2.dossier_credit) === null || _vm$meta_data2 === void 0 || (_vm$meta_data2 = _vm$meta_data2.cred_pub_tb_49) === null || _vm$meta_data2 === void 0 ? void 0 : _vm$meta_data2.cautionnement_solidaires, function (cautionnement, index) {
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
  }), 0)])])])]), _vm._v(" "), _c("div", {
    staticClass: "row px-3 mt-4"
  }, [_c("div", {
    staticClass: "fw-bold text-center mb-4"
  }, [_vm._v("\n                        Cautionnements solidaires renseignés par le l'ARCG\n                    ")]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-borderless mb-1"
  }, [_vm._m(20), _vm._v(" "), _c("tbody", _vm._l(_vm.cautionnement_solidaires, function (cautionnement, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_c("input", {
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
    })]), _vm._v(" "), _c("td", [_c("input", {
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
    })]), _vm._v(" "), _c("td", [_c("currency-input", {
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
    })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
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
  }, [_vm._v("\n                        Cautionnement solidaire"), _c("i", {
    staticClass: "icofont icofont-rounded-down",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    }
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "col-md-12 mt-0 mb-4"
  }, [_vm._m(21), _vm._v(" "), _c("vue-editor", {
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
    staticClass: "text-danger text-center"
  }, [_vm._v("\n                Veuillez remplir le tableau 3 SVP\n            ")])]) : _c("div", {
    staticClass: "card card-width-height"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc pb-0 pt-2"
  }, [_c("h6", {
    staticClass: "head",
    attrs: {
      id: "t3-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Sûretés proposées et garanties\n                        ")]), _vm._v(" "), _c("div", {
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
  return _c("thead", [_c("tr", [_c("th", [_vm._v("#")]), _vm._v(" "), _c("th", [_vm._v("Autres suretés diverses")])])]);
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
  return _c("div", {
    staticClass: "row mt-4 px-3"
  }, [_c("div", {
    staticClass: "fw-bold text-center mb-4"
  }, [_vm._v("\n                        Conditions particulières renseignés par l'ARCG\n                    ")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-2"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Description")])])]);
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
  return _c("label", [_c("b", [_vm._v("Commentaire sur les garanties")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/groupe/CA4.vue?vue&type=style&index=0&id=2736d5fe&lang=css&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/groupe/CA4.vue?vue&type=style&index=0&id=2736d5fe&lang=css&scoped=true ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-2736d5fe] {\r\n\r\n    font-family: \"Google sans\";\n}\nlabel[data-v-2736d5fe] {\r\n    height: 10px;\r\n    font-size: 13px;\n}\ninput[type=text][data-v-2736d5fe],\r\ninput[type=date][data-v-2736d5fe],\r\nselect[data-v-2736d5fe] {\r\n    height: 35px;\r\n    border-color: #34495e;\r\n    color: #57606f;\r\n    font-size: 13px;\r\n    font-weight: bold;\n}\n.card-width-height[data-v-2736d5fe] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-2736d5fe] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\n.hdc[data-v-2736d5fe] {\r\n    background-color: #57606f;\n}\n.bg-ana-card[data-v-2736d5fe]{\r\n    background-color: #ddebff;\n}\n.bg-card-ana[data-v-2736d5fe]{\r\n    background-color: rgb(205, 225, 231);\n}\n.card-width-height[data-v-2736d5fe] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-2736d5fe] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\ninput[type=text][data-v-2736d5fe],\r\ninput[type=date][data-v-2736d5fe] {\r\n    width: 200px;\n}\n.th[data-v-2736d5fe] {\r\n    padding: 4px;\r\n    padding-bottom: 0px;\n}\nselect[data-v-2736d5fe] {\r\n    width: 250px;\n}\n.badge-sm[data-v-2736d5fe] {\r\n    display: inline-block;\r\n    width: 15px;\r\n    height: 15px;\r\n    background: rgba(255, 0, 0, 0.882);\r\n    color: white;\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    border-radius: 100%;\r\n    position: absolute;\r\n    top: -20%;\r\n    left: 55%;\r\n    text-align: center;\n}\n.relook-header[data-v-2736d5fe] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\ninput.input-box[data-v-2736d5fe] {\r\n    background: #00ffff21;\r\n    color: #000;\n}\ntextarea.input-box[data-v-2736d5fe] {\r\n    background: #00ffff21;\r\n    color: #000;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/groupe/CA4.vue?vue&type=style&index=0&id=2736d5fe&lang=css&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/groupe/CA4.vue?vue&type=style&index=0&id=2736d5fe&lang=css&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA4_vue_vue_type_style_index_0_id_2736d5fe_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CA4.vue?vue&type=style&index=0&id=2736d5fe&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/groupe/CA4.vue?vue&type=style&index=0&id=2736d5fe&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA4_vue_vue_type_style_index_0_id_2736d5fe_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA4_vue_vue_type_style_index_0_id_2736d5fe_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/contreanalyse/cofina/groupe/CA4.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/contreanalyse/cofina/groupe/CA4.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CA4_vue_vue_type_template_id_2736d5fe_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CA4.vue?vue&type=template&id=2736d5fe&scoped=true */ "./resources/js/components/contreanalyse/cofina/groupe/CA4.vue?vue&type=template&id=2736d5fe&scoped=true");
/* harmony import */ var _CA4_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CA4.vue?vue&type=script&lang=js */ "./resources/js/components/contreanalyse/cofina/groupe/CA4.vue?vue&type=script&lang=js");
/* harmony import */ var _CA4_vue_vue_type_style_index_0_id_2736d5fe_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CA4.vue?vue&type=style&index=0&id=2736d5fe&lang=css&scoped=true */ "./resources/js/components/contreanalyse/cofina/groupe/CA4.vue?vue&type=style&index=0&id=2736d5fe&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CA4_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CA4_vue_vue_type_template_id_2736d5fe_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _CA4_vue_vue_type_template_id_2736d5fe_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2736d5fe",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/contreanalyse/cofina/groupe/CA4.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/contreanalyse/cofina/groupe/CA4.vue?vue&type=script&lang=js":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/cofina/groupe/CA4.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CA4_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CA4.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/groupe/CA4.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CA4_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/contreanalyse/cofina/groupe/CA4.vue?vue&type=style&index=0&id=2736d5fe&lang=css&scoped=true":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/cofina/groupe/CA4.vue?vue&type=style&index=0&id=2736d5fe&lang=css&scoped=true ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA4_vue_vue_type_style_index_0_id_2736d5fe_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CA4.vue?vue&type=style&index=0&id=2736d5fe&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/groupe/CA4.vue?vue&type=style&index=0&id=2736d5fe&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/contreanalyse/cofina/groupe/CA4.vue?vue&type=template&id=2736d5fe&scoped=true":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/cofina/groupe/CA4.vue?vue&type=template&id=2736d5fe&scoped=true ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA4_vue_vue_type_template_id_2736d5fe_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA4_vue_vue_type_template_id_2736d5fe_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA4_vue_vue_type_template_id_2736d5fe_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CA4.vue?vue&type=template&id=2736d5fe&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/groupe/CA4.vue?vue&type=template&id=2736d5fe&scoped=true");


/***/ })

}]);