"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_contreanalyse_nsia_filiale_dc_DC-DESC1_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dc/DC-DESC1.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dc/DC-DESC1.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/ContextMenu */ "./resources/js/components/shared/ContextMenu.vue");
/* harmony import */ var _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/ContextMenuItem */ "./resources/js/components/shared/ContextMenuItem.vue");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../helpers/indexedDB */ "./resources/js/helpers/indexedDB.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_helpers_indexedDB__WEBPACK_IMPORTED_MODULE_5__);
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
//  import {
//      MoreVerticalIcon,
//      ChevronUpIcon,
//      ChevronDownIcon,
//  } from "vue-feather-icons";




//  import { AirplayIcon } from 'vue-feather-icons'
//  import { BookOpenIcon } from 'vue-feather-icons'




window.$ = window.jQuery = __webpack_require__(/*! jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "fiche-signaletique",
  display: "Fiche signaletique",
  components: {
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.ChevronDownIcon,
    ContextMenu: _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__["default"],
    ContextMenuItem: _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__["default"],
    AirplayIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.AirplayIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.TrashIcon,
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.PlusIcon,
    BookOpenIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.BookOpenIcon
  },
  props: {
    meta_data: Object,
    tb_name: String,
    tb_display_name: String
  },
  created: function created() {
    var _this = this;
    EventBus.$on('emit-value-actionnariats', function (data) {
      _this.actionnariats = data;
      _this.formDataToBeWatched.principaux_actionnaires = "";
      _this.formDataToBeWatched.actionnariats = _this.actionnariats;
      _this.actionnariats.sort(function (a, b) {
        return parseFloat(b.pourcentage_participation) - parseFloat(a.pourcentage_participation);
      });
      _this.actionnariats.forEach(function (el, index) {
        if (index < 5 && !['', null, undefined].includes(el === null || el === void 0 ? void 0 : el.nom_actionnaire)) {
          _this.formDataToBeWatched.principaux_actionnaires += (el === null || el === void 0 ? void 0 : el.nom_actionnaire) + " " + (el === null || el === void 0 ? void 0 : el.pourcentage_participation) + "% , ";
        }
      });
    });

    // EventBus.$on('emit-value-criteres_d_eligibilite_eligible_choix', (data) => {
    //     this.formDataToBeWatched.grand_risque = data?.toString()?.toUpperCase();
    // })

    _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["default"].loadUserData().then(function (res) {
      var _this$authcheckUsr;
      _this.authcheck = true;
      _this.authcheckUsr = res.data;
      _this.authcheckStatus = res.status;
      if (!['4bCvuFcDoKsrvFoBV2Dj', 'cW8z1J3Au0FrFAFJXzDs', '4mmxGX8F56XGFpdzXGMQ', 'jH5XRMMLq2C85RUH7KYW', 'XjGH1ZjmHVECJVv0'].includes((_this$authcheckUsr = _this.authcheckUsr) === null || _this$authcheckUsr === void 0 ? void 0 : _this$authcheckUsr.role_uuid)) {
        _this.formDataToBeWatched.analyste_credit_filiale = _this.authcheckUsr.name;
      }
    })["catch"](function (err) {
      _this.loadWithError(err);
    });
  },
  mounted: function mounted() {
    var _this$meta_data$dossi;
    var applied_templ_name = (_this$meta_data$dossi = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi.applied_templ_name;
    var tbArrays = this.determineCredPubTables(applied_templ_name);
    this.credpub00 = tbArrays[0];
    this.loadRetrieved();
    this.loadTbAttrs(); // charge les attributs + sous attributs des tables
    // helper.loadCurrencyFormatter();
    this.tableClosedOrOpened();
    // this.crdLd();
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
      seen5: true,
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
      actionnariats: [{
        nom_actionnaire: "",
        pourcentage_participation: "",
        max: 100
      }],
      formDataToBeWatched: {
        numero_fiche_ccca_dg: "",
        indice_client: "",
        date_creation: "",
        date_entre_relation: "",
        denomination_client: "",
        grand_risque: "",
        partie_liee: "",
        inhabituel: "",
        credit_restructure: "",
        groupe: "",
        nom_groupe: "",
        forme_juridique: "",
        capital: 0,
        bilan_certifie: "",
        bilan_certifie_par: "",
        cotation_sni: "",
        cotation_risque_es: "",
        classe_risque: "",
        consentement_bic: "",
        analyste_credit_filiale: "",
        principaux_actionnaires: "",
        actionnariats: "",
        objet_demande: "",
        total_part: "",
        actionnaire_principal: "",
        pourcentage_part: 0,
        notes: []
      },
      note_risque_es: [{
        note: "A",
        risque: "Risques elevés"
      }, {
        note: "B-",
        risque: "Risques moyen"
      }, {
        note: "B+",
        risque: "Risques moyen (Nécessitant vigilance)"
      }, {
        note: "C",
        risque: "Risques faible"
      }],
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
      indice_client: null,
      date_creation: null,
      date_entre_relation: null,
      denomination_client: null,
      groupe: null,
      nom_groupe: null,
      forme_juridique: null,
      capital: null,
      bilan_certifie: null,
      bilan_certifie_par: null,
      consentement_bic: null,
      objet_demande: null,
      numero_fiche_ccca_dg: null,
      // cotation_sni:null,
      // cotation_risque_es:null,
      // actionnaire_principal:null,
      // pourcentage_part:null,
      listingNote: false,
      credpub00: null
    };
  },
  methods: {
    setPourcentagePartVars: function setPourcentagePartVars() {
      if (parseFloat(this.formDataToBeWatched.pourcentage_part) > 100) {
        this.formDataToBeWatched.pourcentage_part = 100;
      }
    },
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
    },
    formDataVars2: function formDataVars2(event, index, objectName, keyName) {
      this[objectName][index][keyName] = event[1];
      // this.handleLignesExis(objectName, index, keyName)
      this.handleInput();
    },
    somX3: function somX3(ob, key) {
      var som = 0;
      ob === null || ob === void 0 || ob.filter(function (elm) {
        var _elm$key;
        som += parseInt((_elm$key = elm[key]) === null || _elm$key === void 0 ? void 0 : _elm$key.toString().replace(/\s/g, ""));
      });
      return som;
    },
    loadRetrieved: function loadRetrieved() {
      var _this$meta_data$dossi2,
        _this$meta_data$dossi3,
        _this$meta_data$dossi4,
        _this$meta_data$dossi5,
        _this$meta_data$dossi6,
        _this$note_risque_es$,
        _this2 = this,
        _this$note_risque_es$2;
      var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];
      this.indice_client = (_this$meta_data$dossi2 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi2 === void 0 || (_this$meta_data$dossi2 = _this$meta_data$dossi2[this.credpub00]) === null || _this$meta_data$dossi2 === void 0 ? void 0 : _this$meta_data$dossi2.matricule_client;
      this.denomination_client = (_this$meta_data$dossi3 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi3 === void 0 || (_this$meta_data$dossi3 = _this$meta_data$dossi3[this.credpub00]) === null || _this$meta_data$dossi3 === void 0 ? void 0 : _this$meta_data$dossi3.denomination_client;
      //console.log(this.meta_data?.dossier_credit?.cred_pub_tb_5001);
      this.numero_fiche_ccca_dg = (_this$meta_data$dossi4 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi4 === void 0 ? void 0 : _this$meta_data$dossi4.numero_dossier;
      this.formDataToBeWatched.cotation_sni = ((_this$meta_data$dossi5 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi5 === void 0 || (_this$meta_data$dossi5 = _this$meta_data$dossi5[this.credpub00]) === null || _this$meta_data$dossi5 === void 0 ? void 0 : _this$meta_data$dossi5.note_edane) + " ( " + ((_this$meta_data$dossi6 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi6 === void 0 || (_this$meta_data$dossi6 = _this$meta_data$dossi6[this.credpub00]) === null || _this$meta_data$dossi6 === void 0 ? void 0 : _this$meta_data$dossi6.classe_risque) + " )";
      this.formDataToBeWatched.cotation_risque_es = ((_this$note_risque_es$ = this.note_risque_es.filter(function (item, index) {
        var _this2$meta_data;
        return item.note === ((_this2$meta_data = _this2.meta_data) === null || _this2$meta_data === void 0 || (_this2$meta_data = _this2$meta_data.dossier_credit) === null || _this2$meta_data === void 0 || (_this2$meta_data = _this2$meta_data.cred_pub_tb_5001) === null || _this2$meta_data === void 0 ? void 0 : _this2$meta_data.risque_note);
      })) === null || _this$note_risque_es$ === void 0 || (_this$note_risque_es$ = _this$note_risque_es$[0]) === null || _this$note_risque_es$ === void 0 ? void 0 : _this$note_risque_es$["note"]) + " ( " + ((_this$note_risque_es$2 = this.note_risque_es.filter(function (item, index) {
        var _this2$meta_data2;
        return item.note === ((_this2$meta_data2 = _this2.meta_data) === null || _this2$meta_data2 === void 0 || (_this2$meta_data2 = _this2$meta_data2.dossier_credit) === null || _this2$meta_data2 === void 0 || (_this2$meta_data2 = _this2$meta_data2.cred_pub_tb_5001) === null || _this2$meta_data2 === void 0 ? void 0 : _this2$meta_data2.risque_note);
      })) === null || _this$note_risque_es$2 === void 0 || (_this$note_risque_es$2 = _this$note_risque_es$2[0]) === null || _this$note_risque_es$2 === void 0 ? void 0 : _this$note_risque_es$2["risque"]) + " )";
      if (this.meta_data["dossier_credit"][createdKey] == undefined) {
        if (createdKey == 'cred_pub_tb_19501' && this.meta_data["dossier_credit"]["cred_pub_tb_19001"] != undefined) {
          var _this$meta_data$dossi7, _this$meta_data$dossi8, _this$meta_data$dossi9;
          this.formDataToBeWatched = this.meta_data["dossier_credit"]["cred_pub_tb_19001"];
          for (var _i = 0, _Object$entries = Object.entries(this.formDataToBeWatched); _i < _Object$entries.length; _i++) {
            var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
              key = _Object$entries$_i[0],
              value = _Object$entries$_i[1];
            if (this[key] != undefined) {
              this[key] = value;
            }
          }
          this.indice_client = (_this$meta_data$dossi7 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi7 === void 0 || (_this$meta_data$dossi7 = _this$meta_data$dossi7[this.credpub00]) === null || _this$meta_data$dossi7 === void 0 ? void 0 : _this$meta_data$dossi7.matricule_client;
          this.denomination_client = (_this$meta_data$dossi8 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi8 === void 0 || (_this$meta_data$dossi8 = _this$meta_data$dossi8[this.credpub00]) === null || _this$meta_data$dossi8 === void 0 ? void 0 : _this$meta_data$dossi8.denomination_client;
          this.numero_fiche_ccca_dg = (_this$meta_data$dossi9 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi9 === void 0 ? void 0 : _this$meta_data$dossi9.numero_dossier;
        } else {
          var _this$meta_data$dossi0, _this$meta_data$dossi1, _this$meta_data$dossi10, _this$meta_data$dossi11, _this$meta_data$dossi12, _this$meta_data$dossi13, _this$meta_data$dossi14, _this$meta_data$dossi15, _this$meta_data$dossi16, _this$meta_data$dossi17, _this$meta_data$dossi18;
          var actionnariats = (_this$meta_data$dossi0 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi0 === void 0 || (_this$meta_data$dossi0 = _this$meta_data$dossi0[this.credpub00]) === null || _this$meta_data$dossi0 === void 0 ? void 0 : _this$meta_data$dossi0.actionnariats;
          actionnariats.sort(function (a, b) {
            return parseFloat(b.pourcentage_participation) - parseFloat(a.pourcentage_participation);
          });
          actionnariats.forEach(function (el, index) {
            if (index < 5 && !['', null, undefined].includes(el === null || el === void 0 ? void 0 : el.nom_actionnaire)) {
              _this2.formDataToBeWatched.principaux_actionnaires += (el === null || el === void 0 ? void 0 : el.nom_actionnaire) + " " + (el === null || el === void 0 ? void 0 : el.pourcentage_participation) + "% , ";
            }
          });
          this.formDataToBeWatched.date_creation = (_this$meta_data$dossi1 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi1 === void 0 || (_this$meta_data$dossi1 = _this$meta_data$dossi1[this.credpub00]) === null || _this$meta_data$dossi1 === void 0 ? void 0 : _this$meta_data$dossi1.date_creation;
          this.formDataToBeWatched.date_entre_relation = (_this$meta_data$dossi10 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi10 === void 0 || (_this$meta_data$dossi10 = _this$meta_data$dossi10[this.credpub00]) === null || _this$meta_data$dossi10 === void 0 ? void 0 : _this$meta_data$dossi10.date_entre_relation;
          this.formDataToBeWatched.groupe = (_this$meta_data$dossi11 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi11 === void 0 || (_this$meta_data$dossi11 = _this$meta_data$dossi11[this.credpub00]) === null || _this$meta_data$dossi11 === void 0 ? void 0 : _this$meta_data$dossi11.groupe;
          this.formDataToBeWatched.nom_groupe = (_this$meta_data$dossi12 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi12 === void 0 || (_this$meta_data$dossi12 = _this$meta_data$dossi12[this.credpub00]) === null || _this$meta_data$dossi12 === void 0 ? void 0 : _this$meta_data$dossi12.nom_groupe;
          this.formDataToBeWatched.objet_demande = (_this$meta_data$dossi13 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi13 === void 0 || (_this$meta_data$dossi13 = _this$meta_data$dossi13["cred_pub_tb_1"]) === null || _this$meta_data$dossi13 === void 0 ? void 0 : _this$meta_data$dossi13.objet_demande;
          this.formDataToBeWatched.forme_juridique = (_this$meta_data$dossi14 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi14 === void 0 || (_this$meta_data$dossi14 = _this$meta_data$dossi14[this.credpub00]) === null || _this$meta_data$dossi14 === void 0 ? void 0 : _this$meta_data$dossi14.forme_juridique;
          this.formDataToBeWatched.capital = (_this$meta_data$dossi15 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi15 === void 0 || (_this$meta_data$dossi15 = _this$meta_data$dossi15[this.credpub00]) === null || _this$meta_data$dossi15 === void 0 ? void 0 : _this$meta_data$dossi15.capital;
          this.formDataToBeWatched.bilan_certifie = (_this$meta_data$dossi16 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi16 === void 0 || (_this$meta_data$dossi16 = _this$meta_data$dossi16[this.credpub00]) === null || _this$meta_data$dossi16 === void 0 ? void 0 : _this$meta_data$dossi16.bilan_certifie;
          this.formDataToBeWatched.bilan_certifie_par = (_this$meta_data$dossi17 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi17 === void 0 || (_this$meta_data$dossi17 = _this$meta_data$dossi17[this.credpub00]) === null || _this$meta_data$dossi17 === void 0 ? void 0 : _this$meta_data$dossi17.nom_cabinet_comptable;
          this.formDataToBeWatched.consentement_bic = (_this$meta_data$dossi18 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi18 === void 0 || (_this$meta_data$dossi18 = _this$meta_data$dossi18[this.credpub00]) === null || _this$meta_data$dossi18 === void 0 ? void 0 : _this$meta_data$dossi18.consentement_bic;

          // if (this.meta_data["dossier_credit"]['cred_pub_tb_1001'] != undefined) {
          //     this.formDataToBeWatched.grand_risque = this.meta_data["dossier_credit"]['cred_pub_tb_1001']?.criteres_d_eligibilite_eligible_choix?.toString()?.toUpperCase();
          // }
        }
      }
      if (lentb.length > 0) {
        var _this$meta_data$dossi19;
        if (this.meta_data["dossier_credit"][createdKey] != undefined) {
          this.formDataToBeWatched = this.meta_data["dossier_credit"][createdKey];
          if (this.meta_data["dossier_credit"][createdKey]["actionnariats"] != "") {
            this.actionnariats = this.meta_data["dossier_credit"][createdKey]["actionnariats"];
          }
        }
        // Close table by default
        this.defaultRetract(false, (_this$meta_data$dossi19 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi19 === void 0 ? void 0 : _this$meta_data$dossi19.applied_templ_id);
      }
    },
    setTbVal: function setTbVal(val) {
      this.cred_pub_key = val;
    },
    loadWithError: function loadWithError(err) {
      // // window.location.href = "/login";
    },
    addMore: function addMore(listName) {
      this[listName].push({
        nom_actionnaire: "",
        pourcentage_participation: "",
        max: this.ActionnariatMaxNumber
      });
    },
    remove: function remove(index) {
      this.actionnariats.splice(index, 1);
      this.formDataToBeWatched.total_part = this.totalPartPourcentageActionnariats;
      this.handleInput();
    },
    handleInput: function handleInput(evt) {
      this.formDataToBeWatched["actionnariats"] = this.actionnariats;
      this.formDataToBeWatched.total_part = this.totalPartPourcentageActionnariats;
      EventBus.$emit("event-T0", {
        formdata: this.formDataToBeWatched
      });
    },
    setActionnariatsVars: function setActionnariatsVars(event, index) {
      // si la valeur a été tapée au clavier
      if (event[2]) {
        if (this.actionnariats[index].pourcentage_participation == 0) this.actionnariats[index].max = this.ActionnariatMaxNumber;
        if (Number(this.actionnariats[index].pourcentage_participation) > 0) this.actionnariats[index].max = Number(this.ActionnariatMaxNumber) + Number(this.actionnariats[index][event[0]]);
      }
      this.actionnariats[index][event[0]] = event[1];
      this.handleInput();
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
          //  let actionnariats  = this.meta_data["dossier_credit"]?.[this.credpub00]?.actionnariats
          // let max_actionnariats = Math.max(...actionnariats.map(d => d.pourcentage_participation))
          // let pp = actionnariats.filter((item, index) => Number(item.pourcentage_participation) == max_actionnariats)
          // console.log("principale actionnaire",pp)

          var tbFetcheData = response.data;
          if (tbFetcheData["is_success"] === true) {
            // this.dossier_credit = tbFetcheData['dossier_credit'];
            // this.indice_client =  this.dossier_credit?.[this.credpub00]?.matricule_client
            // // this.date_creation = this.dossier_credit?.[this.credpub00]?.date_creation
            // // this.date_entre_relation = this.dossier_credit?.[this.credpub00]?.date_entre_relation
            // this.denomination_client = this.dossier_credit?.[this.credpub00]?.denomination_client
            // // this.groupe = this.dossier_credit?.[this.credpub00]?.groupe
            // // this.forme_juridique = this.dossier_credit?.[this.credpub00]?.forme_juridique
            // // this.capital = this.dossier_credit?.[this.credpub00]?.capital
            // // this.bilan_certifie = this.dossier_credit?.[this.credpub00]?.bilan_certifie
            // // this.bilan_certifie_par = this.dossier_credit?.[this.credpub00]?.nom_cabinet_comptable
            // // this.consentement_bic = this.dossier_credit?.[this.credpub00]?.consentement_bic

            // this.numero_fiche_ccca_dg = this.dossier_credit?.numero_dossier
            // // this.formDataToBeWatched.actionnaire_principal = pp[0]?.nom_actionnaire
            // // this.formDataToBeWatched.pourcentage_part = pp[0]?.pourcentage_participation
            // this.formDataToBeWatched.cotation_sni = this.dossier_credit?.[this.credpub00]?.note_edane + " ( "+ this.dossier_credit?.[this.credpub00]?.classe_risque +" )"
            // this.formDataToBeWatched.cotation_risque_es =   this.note_risque_es.filter((item, index) => item.note === this.meta_data?.dossier_credit?.cred_pub_tb_5001?.risque_note)[0]["note"]+ " ( "+ this.note_risque_es.filter((item, index) => item.note === this.meta_data?.dossier_credit?.cred_pub_tb_5001?.risque_note)[0]["risque"]+" )"

            // if (!['4bCvuFcDoKsrvFoBV2Dj', 'cW8z1J3Au0FrFAFJXzDs', '4mmxGX8F56XGFpdzXGMQ', 'jH5XRMMLq2C85RUH7KYW', 'XjGH1ZjmHVECJVv0'].includes(this.authcheckUsr?.role_uuid)) {
            //     this.formDataToBeWatched.analyste_credit_filiale = this.authcheckUsr.name
            // }

            this.$emit("load-shell");
          }
        }.bind(this))["catch"](function (error) {
          this.$Progress.finish();
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
        id: "ca1-head"
      };
      // console.log(p)
      this.$emit("load-buffer", p);
    },
    credData: function credData(res) {
      this.credits = res.data;
    },
    onSlctMatCli: function onSlctMatCli(obj) {
      var _this$formDataToBeWat,
        _this3 = this;
      this.formDataToBeWatched.matricule_client = obj.matcli;
      this.formDataToBeWatched.nom_client = obj.nomcli;
      this.autoRenamer();
      _services_credit_service__WEBPACK_IMPORTED_MODULE_4__["default"].encours((_this$formDataToBeWat = this.formDataToBeWatched) === null || _this$formDataToBeWat === void 0 ? void 0 : _this$formDataToBeWat.matricule_client).then(function (res) {
        _this3.encoursData(res);
      })["catch"](function (err) {
        console.log(err);
      });
    },
    send2Backend0: function send2Backend0(res) {
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
    },
    autoRenamer: function autoRenamer() {
      var _this4 = this;
      _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["default"].loadUserData().then(function (res) {
        _this4.send2Backend0(res);
      })["catch"](function (err) {
        _this4.loadWithError(err);
      });
    },
    instruction2: function instruction2(id) {
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
  },
  computed: {
    totalPartPourcentageActionnariats: function totalPartPourcentageActionnariats() {
      var trying = this.actionnariats.map(function (el) {
        el.pourcentage_participation = String(el.pourcentage_participation).replace(/\s+/g, "");
        if (!el.pourcentage_participation) return 0;
        return Number(el.pourcentage_participation);
      }).reduce(function (sum, curr) {
        return sum + curr;
      }, 0);
      if (trying > 100) return "100.00";
      return trying.toLocaleString("fr-FR");
    },
    ActionnariatMaxNumber: function ActionnariatMaxNumber() {
      var restant = 100 - Number(this.totalPartPourcentageActionnariats);
      if (restant < 0) return 0;
      return restant;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dc/DC-DESC1.vue?vue&type=template&id=251dada7&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dc/DC-DESC1.vue?vue&type=template&id=251dada7&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_c("h3", {
    ref: "topdiv",
    staticClass: "head",
    attrs: {
      id: "ca1-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                             " + _vm._s(_vm.tb_display_name) + " : Cover\n                         ")]), _vm._v(" "), _c("div", {
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
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(0), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.numero_fiche_ccca_dg,
      expression: "numero_fiche_ccca_dg"
    }],
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "text",
      id: "numero_fiche_ccca_dg",
      readonly: ""
    },
    domProps: {
      value: _vm.numero_fiche_ccca_dg
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.numero_fiche_ccca_dg = $event.target.value;
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(1), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.indice_client,
      expression: "indice_client"
    }],
    staticClass: "form-control",
    attrs: {
      readonly: "",
      type: "text",
      id: "indice_client"
    },
    domProps: {
      value: _vm.indice_client
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.indice_client = $event.target.value;
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(2), _vm._v(" "), _c("date-input", {
    attrs: {
      value: _vm.formDataToBeWatched.date_creation,
      id: "date_creation",
      background: "background: #00ffff21",
      color: "color: #000"
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(3), _vm._v(" "), _c("date-input", {
    attrs: {
      value: _vm.formDataToBeWatched.date_entre_relation,
      id: "date_entre_relation",
      background: "background: #00ffff21",
      color: "color: #000"
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "denomination_client"
    }
  }, [_vm._v("\n                        Emprunteur\n                       ")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.denomination_client,
      expression: "denomination_client",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      readonly: "",
      type: "text",
      id: "denomination_client"
    },
    domProps: {
      value: _vm.denomination_client
    },
    on: {
      change: function change($event) {
        _vm.denomination_client = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(4), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.groupe,
      expression: "formDataToBeWatched.groupe"
    }],
    staticClass: "form-select single-select",
    staticStyle: {
      background: "#00ffff21",
      color: "#000"
    },
    attrs: {
      id: "nouvelle_relation"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formDataToBeWatched, "groupe", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
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
      value: ""
    }
  }), _vm._v(" "), _c("option", {
    attrs: {
      value: "OUI"
    }
  }, [_vm._v("Oui")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "NON"
    }
  }, [_vm._v("Non")])])]), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.formDataToBeWatched.groupe == "OUI",
      expression: "formDataToBeWatched.groupe == 'OUI'"
    }],
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(5), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.nom_groupe,
      expression: "formDataToBeWatched.nom_groupe"
    }],
    staticClass: "form-control",
    staticStyle: {
      background: "#00ffff21",
      color: "#000"
    },
    attrs: {
      id: "nom_groupe"
    },
    domProps: {
      value: _vm.formDataToBeWatched.nom_groupe
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "nom_groupe", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(6), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.consentement_bic,
      expression: "formDataToBeWatched.consentement_bic"
    }],
    staticClass: "form-select single-select",
    staticStyle: {
      background: "#00ffff21",
      color: "#000"
    },
    attrs: {
      id: "consentement_bic"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formDataToBeWatched, "consentement_bic", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
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
      value: ""
    }
  }), _vm._v(" "), _c("option", {
    attrs: {
      value: "OUI"
    }
  }, [_vm._v("Oui")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "NON"
    }
  }, [_vm._v("Non")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(7), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.forme_juridique,
      expression: "formDataToBeWatched.forme_juridique"
    }],
    staticClass: "form-select single-select",
    staticStyle: {
      background: "#00ffff21",
      color: "#000"
    },
    attrs: {
      id: "forme_juridique"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formDataToBeWatched, "forme_juridique", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
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
      value: "SARL Unipersonnelle"
    }
  }, [_vm._v("SARL Unipersonnelle")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "SARL Pluripersonnelle"
    }
  }, [_vm._v("SARL Pluripersonnelle")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Entreprise Individuelle"
    }
  }, [_vm._v("Entreprise Individuelle")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Société en nom collectif (SNC)"
    }
  }, [_vm._v("Société en nom collectif\n                                    (SNC)")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Société Anonyme (SA)"
    }
  }, [_vm._v("Société Anonyme (SA)")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Société en commandité simple (SCS)"
    }
  }, [_vm._v("Société en commandité\n                                    simple (SCS)")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Groupement d'intérêt Économique (GIE)"
    }
  }, [_vm._v("Groupement d'intérêt\n                                    Économique (GIE)")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "COOPERATIVE"
    }
  }, [_vm._v("COOPERATIVE")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Association et Mutuelles"
    }
  }, [_vm._v("Association et Mutuelles")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Société par actions simplifiées (SAS)"
    }
  }, [_vm._v("Société par actions simplifiées (SAS)")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(8), _vm._v(" "), _c("currency-input", {
    staticClass: "form-control",
    staticStyle: {
      background: "#00ffff21",
      color: "#000"
    },
    attrs: {
      "default-typing": false,
      id: "capital"
    },
    model: {
      value: _vm.formDataToBeWatched.capital,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "capital", $$v);
      },
      expression: "formDataToBeWatched.capital"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(9), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.bilan_certifie,
      expression: "formDataToBeWatched.bilan_certifie"
    }],
    staticClass: "form-select single-select",
    staticStyle: {
      background: "#00ffff21",
      color: "#000"
    },
    attrs: {
      id: "bilan_certifie"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formDataToBeWatched, "bilan_certifie", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      selected: "",
      hidden: ""
    }
  }, [_vm._v("---")]), _vm._v(" "), _c("option", {
    attrs: {
      value: ""
    }
  }), _vm._v(" "), _c("option", {
    attrs: {
      value: "Oui"
    }
  }, [_vm._v("Oui")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Non"
    }
  }, [_vm._v("Non")])])]), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.formDataToBeWatched.bilan_certifie == "Oui",
      expression: "formDataToBeWatched.bilan_certifie == 'Oui'"
    }],
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(10), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.bilan_certifie_par,
      expression: "formDataToBeWatched.bilan_certifie_par"
    }],
    staticClass: "form-control",
    staticStyle: {
      background: "#00ffff21",
      color: "#000"
    },
    attrs: {
      type: "text",
      id: "bilan_certifie_par"
    },
    domProps: {
      value: _vm.formDataToBeWatched.bilan_certifie_par
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "bilan_certifie_par", $event.target.value);
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(11), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.formDataToBeWatched.cotation_sni,
      expression: "formDataToBeWatched.cotation_sni",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "text",
      readonly: "",
      id: "cotation_sni"
    },
    domProps: {
      value: _vm.formDataToBeWatched.cotation_sni
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.formDataToBeWatched, "cotation_sni", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(12), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.formDataToBeWatched.cotation_risque_es,
      expression: "formDataToBeWatched.cotation_risque_es",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "text",
      readonly: "",
      id: "cotation_risque_es"
    },
    domProps: {
      value: _vm.formDataToBeWatched.cotation_risque_es
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.formDataToBeWatched, "cotation_risque_es", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(13), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.formDataToBeWatched.analyste_credit_filiale,
      expression: "formDataToBeWatched.analyste_credit_filiale",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      readonly: "",
      type: "text",
      id: "analyste_credit_filiale"
    },
    domProps: {
      value: _vm.formDataToBeWatched.analyste_credit_filiale
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.formDataToBeWatched, "analyste_credit_filiale", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(14), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.grand_risque,
      expression: "formDataToBeWatched.grand_risque"
    }],
    staticClass: "form-select single-select",
    attrs: {
      id: "grand_risque"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formDataToBeWatched, "grand_risque", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      selected: "",
      hidden: ""
    }
  }, [_vm._v("---")]), _vm._v(" "), _c("option", {
    attrs: {
      value: ""
    }
  }), _vm._v(" "), _c("option", {
    attrs: {
      value: "OUI"
    }
  }, [_vm._v("Oui")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "NON"
    }
  }, [_vm._v("Non")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(15), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.partie_liee,
      expression: "formDataToBeWatched.partie_liee"
    }],
    staticClass: "form-select single-select",
    attrs: {
      id: "partie_liee"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formDataToBeWatched, "partie_liee", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      selected: "",
      hidden: ""
    }
  }, [_vm._v("---")]), _vm._v(" "), _c("option", {
    attrs: {
      value: ""
    }
  }), _vm._v(" "), _c("option", {
    attrs: {
      value: "OUI"
    }
  }, [_vm._v("Oui")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "NON"
    }
  }, [_vm._v("Non")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(16), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.credit_restructure,
      expression: "formDataToBeWatched.credit_restructure"
    }],
    staticClass: "form-select single-select",
    attrs: {
      id: "credit_restructure"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formDataToBeWatched, "credit_restructure", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      selected: "",
      hidden: ""
    }
  }, [_vm._v("---")]), _vm._v(" "), _c("option", {
    attrs: {
      value: ""
    }
  }), _vm._v(" "), _c("option", {
    attrs: {
      value: "Standard"
    }
  }, [_vm._v("Standard")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Restructuré"
    }
  }, [_vm._v("Restructuré")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Rénegociation"
    }
  }, [_vm._v("Rénegociation")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(17), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.inhabituel,
      expression: "formDataToBeWatched.inhabituel"
    }],
    staticClass: "form-select single-select",
    attrs: {
      id: "inhabituel"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formDataToBeWatched, "inhabituel", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      selected: "",
      hidden: ""
    }
  }, [_vm._v("---")]), _vm._v(" "), _c("option", {
    attrs: {
      value: ""
    }
  }), _vm._v(" "), _c("option", {
    attrs: {
      value: "OUI"
    }
  }, [_vm._v("Oui")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "NON"
    }
  }, [_vm._v("Non")])])])]), _vm._v(" "), _c("br"), _vm._v(" "), _c("br"), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-12 pl-4"
  }, [_vm._m(18), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.principaux_actionnaires,
      expression: "formDataToBeWatched.principaux_actionnaires"
    }],
    staticClass: "form-control",
    staticStyle: {
      "min-width": "210px"
    },
    attrs: {
      rows: "3",
      readonly: ""
    },
    domProps: {
      value: _vm.formDataToBeWatched.principaux_actionnaires
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "principaux_actionnaires", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "col-md-12"
  }, [_vm._m(19), _vm._v(" "), _c("vue-editor", {
    attrs: {
      maximum: 1000,
      id: "objet_demande"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.objet_demande,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "objet_demande", $$v);
      },
      expression: "\n                            formDataToBeWatched.objet_demande\n                        "
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
  }, [_vm._v("\n                     Fermer le tableau\n                 ")])])]) : _c("div", {
    staticClass: "card card-width-height"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc pb-0 pt-2"
  }, [_c("h3", {
    staticClass: "head",
    attrs: {
      id: "ca1-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                             " + _vm._s(_vm.tb_display_name) + " : Cover\n                         ")]), _vm._v(" "), _c("div", {
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
  })], 1)])])])])], 1), _vm._v(" "), _c("div", [_c("div", {
    staticClass: "modal fade modal-lg",
    attrs: {
      id: "instruction2",
      tabindex: "-1",
      "aria-labelledby": "instruction2",
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
      id: "instruction2"
    }
  }, [_vm._v("\n                             Instruction - " + _vm._s(_vm.tb_display_name) + " : COVER\n                         ")]), _vm._v(" "), _c("button", {
    staticClass: "btn-close",
    attrs: {
      type: "button",
      "data-bs-dismiss": "modal",
      "aria-label": "Close"
    }
  })]), _vm._v(" "), _vm._m(20), _vm._v(" "), _vm._m(21)])])])]), _vm._v(" "), _c("note-modal", {
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
  }, [_vm._v("Fiche ccca N° DQ\n                            "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Indice client\n                            "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "date_creation_rccm"
    }
  }, [_vm._v("Date de création "), _c("span", {
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
      "for": "date_entre_relation"
    }
  }, [_vm._v("Date d'entré en relation"), _c("span", {
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
  }, [_vm._v("\n                            Groupe "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": ""
    }
  }, [_vm._v("\n                            Nom de groupe "), _c("span", {
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
  }, [_vm._v("\n                            Consentement BIC "), _c("span", {
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
      "for": "forme_juridique"
    }
  }, [_vm._v("Forme juridique\n                                "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Capital\n                            "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": ""
    }
  }, [_vm._v("\n                                    Bilan certifé"), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Par\n                        "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "cotation_sni"
    }
  }, [_vm._v("cotation SNI "), _c("span", {
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
      "for": "cotation_risque_es"
    }
  }, [_vm._v(" Cotation risque E&S :  "), _c("span", {
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
  }, [_vm._v("Analyste crédit filiale"), _c("span", {
    staticClass: "periodicite"
  }), _vm._v(" "), _c("span", {
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
  }, [_vm._v("\n                            Grand risque "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": ""
    }
  }, [_vm._v("\n                            Partie liée "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": ""
    }
  }, [_vm._v("\n                            Credit restructuré / Rénegociation "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": ""
    }
  }, [_vm._v("\n                            Toute exposition sortant du cadre habituel des activités de la banque "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": ""
    }
  }, [_vm._v("\n                            Repartition du capital social"), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_c("b", [_vm._v("Objet de la demande")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "modal-body"
  }, [_c("img", {
    attrs: {
      src: "/images/capture_afg/signaletique.png",
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
  }, [_vm._v("Fermer")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dc/DC-DESC1.vue?vue&type=style&index=0&id=251dada7&lang=css&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dc/DC-DESC1.vue?vue&type=style&index=0&id=251dada7&lang=css&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\ninput[data-v-251dada7] {\n     /*border: 1px solid red;*/\n}\n*[data-v-251dada7] {\n     font-family: \"Google sans\";\n}\nlabel[data-v-251dada7] {\n     height: 10px;\n     font-size: 13px;\n}\ninput[data-v-251dada7],\n select[data-v-251dada7] {\n     height: 35px;\n     border-color: #34495e;\n     color: #57606f;\n     font-size: 13px;\n     font-weight: bold;\n}\n.card-width-height[data-v-251dada7] {\n     width: 100%;\n     height: 100%;\n}\n.head[data-v-251dada7] {\n     color: #f1f2f6;\n     font-size: 22px;\n}\n.hdc[data-v-251dada7] {\n     background-color: #57606f;\n}\n\n /*  List element styles */\n#menu ul[data-v-251dada7],\n #menu li[data-v-251dada7] {\n     list-style: none;\n     padding: 0;\n     margin: 0;\n     display: inline-block;\n}\n#menu li[data-v-251dada7] {\n     padding: 5px 0px;\n}\n\n /* Main menu links */\n#menu a[data-v-251dada7]:link,\n #menu a[data-v-251dada7]:visited,\n #menu a[data-v-251dada7]:active {\n     text-decoration: none;\n     color: var(--link2-color);\n     padding: 5px 7px;\n     font-weight: bold;\n     position: relative;\n     z-index: 2;\n}\n#menu a[data-v-251dada7]:hover,\n #menu a[data-v-251dada7]:focus {\n     background-color: var(--link-color);\n     color: var(--link2-color);\n     text-decoration: underline;\n}\n\n /* The submenu links container*/\n.subdrop[data-v-251dada7] {\n     background: var(--bg-color);\n     height: 0;\n     border-top: 0;\n     min-width: 100%;\n     left: 0;\n     margin: 0;\n     position: absolute;\n     text-align: left;\n     top: 100%;\n     visibility: hidden;\n     height: 1px;\n     overflow: hidden;\n     z-index: 10;\n}\n\n /* Dropdown Parent Link Style */\n.droplink[data-v-251dada7] {\n     display: inline-block;\n     min-width: -moz-fit-content;\n     min-width: fit-content;\n     position: relative;\n}\ninput[type=checkbox][data-v-251dada7] {\n     /* Double-sized Checkboxes */\n     /* IE */\n     /* FF */\n     /* Safari and Chrome */\n     /* Opera */\n     transform: scale(2);\n     padding: 10px;\n}\n\n /* List elements within the dropdown */\n.subdrop li[data-v-251dada7] {\n     display: block !important;\n     padding: 0 !important;\n}\n\n /* Links within the dropdown list */\n.subdrop a[data-v-251dada7] {\n     display: block;\n     padding: 12px 20px;\n     white-space: nowrap;\n}\n\n /* Allows links to show on hover/focus and through keyboard navigation via focus-within */\n.droplink:hover .subdrop[data-v-251dada7] {\n     visibility: visible;\n     height: auto;\n     z-index: 11;\n}\n\n /* Separate these to avoid IE completely ignoring the css above */\n.droplink:focus-within .subdrop[data-v-251dada7] {\n     visibility: visible;\n     height: auto;\n     z-index: 11;\n}\n.relook-header[data-v-251dada7] {\n    color: #000;\n    background-color: #f4f3f3;\n    padding: 2px;\n    border-bottom: 1px solid #b6b8bb;\n}\n.badge-sm[data-v-251dada7] {\n     display: inline-block;\n     width: 15px;\n     height: 15px;\n     background: rgba(255, 0, 0, 0.882);\n     color: white;\n     font-size: 12px;\n     font-weight: 500;\n     border-radius: 100%;\n     position: absolute;\n     top: -20%;\n     left: 55%;\n     text-align: center;\n}\n ", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dc/DC-DESC1.vue?vue&type=style&index=0&id=251dada7&lang=css&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dc/DC-DESC1.vue?vue&type=style&index=0&id=251dada7&lang=css&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_DESC1_vue_vue_type_style_index_0_id_251dada7_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DC-DESC1.vue?vue&type=style&index=0&id=251dada7&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dc/DC-DESC1.vue?vue&type=style&index=0&id=251dada7&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_DESC1_vue_vue_type_style_index_0_id_251dada7_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_DESC1_vue_vue_type_style_index_0_id_251dada7_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/dc/DC-DESC1.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/dc/DC-DESC1.vue ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DC_DESC1_vue_vue_type_template_id_251dada7_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DC-DESC1.vue?vue&type=template&id=251dada7&scoped=true */ "./resources/js/components/contreanalyse/nsia/filiale/dc/DC-DESC1.vue?vue&type=template&id=251dada7&scoped=true");
/* harmony import */ var _DC_DESC1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DC-DESC1.vue?vue&type=script&lang=js */ "./resources/js/components/contreanalyse/nsia/filiale/dc/DC-DESC1.vue?vue&type=script&lang=js");
/* harmony import */ var _DC_DESC1_vue_vue_type_style_index_0_id_251dada7_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DC-DESC1.vue?vue&type=style&index=0&id=251dada7&lang=css&scoped=true */ "./resources/js/components/contreanalyse/nsia/filiale/dc/DC-DESC1.vue?vue&type=style&index=0&id=251dada7&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DC_DESC1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _DC_DESC1_vue_vue_type_template_id_251dada7_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _DC_DESC1_vue_vue_type_template_id_251dada7_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "251dada7",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/contreanalyse/nsia/filiale/dc/DC-DESC1.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/dc/DC-DESC1.vue?vue&type=script&lang=js":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/dc/DC-DESC1.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_DESC1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DC-DESC1.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dc/DC-DESC1.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_DESC1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/dc/DC-DESC1.vue?vue&type=style&index=0&id=251dada7&lang=css&scoped=true":
/*!************************************************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/dc/DC-DESC1.vue?vue&type=style&index=0&id=251dada7&lang=css&scoped=true ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_DESC1_vue_vue_type_style_index_0_id_251dada7_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DC-DESC1.vue?vue&type=style&index=0&id=251dada7&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dc/DC-DESC1.vue?vue&type=style&index=0&id=251dada7&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/dc/DC-DESC1.vue?vue&type=template&id=251dada7&scoped=true":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/dc/DC-DESC1.vue?vue&type=template&id=251dada7&scoped=true ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_DESC1_vue_vue_type_template_id_251dada7_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_DESC1_vue_vue_type_template_id_251dada7_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_DESC1_vue_vue_type_template_id_251dada7_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DC-DESC1.vue?vue&type=template&id=251dada7&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dc/DC-DESC1.vue?vue&type=template&id=251dada7&scoped=true");


/***/ })

}]);