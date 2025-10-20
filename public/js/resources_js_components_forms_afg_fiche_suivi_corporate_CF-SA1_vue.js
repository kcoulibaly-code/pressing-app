"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_forms_afg_fiche_suivi_corporate_CF-SA1_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/fiche_suivi_corporate/CF-SA1.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/fiche_suivi_corporate/CF-SA1.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _services_connects_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/connects.service */ "./resources/js/services/connects.service.js");
/* harmony import */ var _services_proxy_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/proxy.service */ "./resources/js/services/proxy.service.js");
/* harmony import */ var _services_afg_f8_data_extractor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/afg/f8-data-extractor */ "./resources/js/services/afg/f8-data-extractor.js");
/* harmony import */ var _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @johmun/vue-tags-input */ "./node_modules/@johmun/vue-tags-input/dist/vue-tags-input.js");
/* harmony import */ var _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }










/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'fiche-suivi',
  display: 'Fiche de suivi',
  components: {
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.ChevronDownIcon,
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.TrashIcon,
    AirplayIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.AirplayIcon,
    BookOpenIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.BookOpenIcon,
    VueTagsInput: (_johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_6___default())
  },
  props: {
    meta_data: Object,
    tb_name: String,
    tb_display_name: String
  },
  created: function created() {
    var _pub_workflow;
    var _this$meta_data$dossi = this.meta_data['dossier_credit'],
      stage = _this$meta_data$dossi.pub_workflow_curr_stage,
      pub_workflow = _this$meta_data$dossi.pub_workflow;
    var sup_id = (_pub_workflow = pub_workflow[stage + 1]) === null || _pub_workflow === void 0 ? void 0 : _pub_workflow.responsible_id;
    var roles = ['kggrA5A18KdHk452gEtk', 'mq98YcQYj8HXUXca2JMR'];
    var users_id = [];
    if (!['', null, undefined].includes(sup_id)) {
      users_id.push(sup_id);
    }
    this.getUsersDefault(roles, users_id);
  },
  mounted: function mounted() {
    this.loadRetrieved();
    this.loadTbAttrs();
    this.tableClosedOrOpened();
  },
  computed: {
    filteredUsers: function filteredUsers() {
      this.receivers = this.users.map(function (el) {
        return _objectSpread({
          text: "".concat(el.name, " ( ").concat(el.role[0].display_name, " )")
        }, el);
      });
      return this.receivers;
    },
    filteredUsersDefault: function filteredUsersDefault() {
      return this.usersDefault.map(function (el) {
        return _objectSpread({
          text: "".concat(el.name, " ( ").concat(el.role[0].display_name, " )")
        }, el);
      });
    },
    defaultActors: function defaultActors() {
      var _pub_workflow2;
      var caf = this.filteredUsersDefault.find(function (el) {
        return ['kggrA5A18KdHk452gEtk'].includes(el.role_id);
      });
      var ca = this.filteredUsersDefault.find(function (el) {
        return (el === null || el === void 0 ? void 0 : el.role_id) === 'mq98YcQYj8HXUXca2JMR';
      });
      var _this$meta_data$dossi2 = this.meta_data['dossier_credit'],
        stage = _this$meta_data$dossi2.pub_workflow_curr_stage,
        pub_workflow = _this$meta_data$dossi2.pub_workflow;
      var roles_dajc = [];
      var responsibles = this.filteredUsersDefault.filter(function (el) {
        return roles_dajc.includes(el === null || el === void 0 ? void 0 : el.role_id);
      });
      var sup_id = (_pub_workflow2 = pub_workflow[stage + 1]) === null || _pub_workflow2 === void 0 ? void 0 : _pub_workflow2.responsible_id;
      var sup = this.filteredUsersDefault.find(function (el) {
        return el.id === sup_id;
      });
      var actors = [caf, ca, sup];
      if (!['', null, undefined].includes(responsibles) && responsibles.length > 0) {
        actors = actors.concat(responsibles);
      }
      return actors.filter(function (el) {
        return el != null;
      });
    }
  },
  data: function data() {
    var _this = this;
    return {
      isLoding: {
        0: false
      },
      buttonStatus: {
        0: true
      },
      filterInput: '',
      tagValue: undefined,
      tagging: false,
      users: [],
      taggedUsers: [],
      autocompleteItems: [],
      pieces_versees_clients: [],
      pieces_versees_credits: [],
      pieces_versees_suretes: [],
      pieces_versees_autres: [],
      tag: {
        0: ''
      },
      tg: '',
      seens: {
        0: true
      },
      seen: true,
      seen1: true,
      seen2: true,
      template: '',
      files: [],
      connectsHost: _services_connects_service__WEBPACK_IMPORTED_MODULE_3__["default"].loadablehost(),
      tags: {
        0: []
      },
      autorizeRole: ['gTz6TD6V0yVaXAssKaUg', 'WUBaT1LB5GbXzr9ru2D3'],
      f8Data: null,
      f8DataExtractor: _services_afg_f8_data_extractor__WEBPACK_IMPORTED_MODULE_5__["default"],
      contextList: [{
        title: 'Commenter',
        icon: 'icofont icofont-comment',
        handler: function handler() {
          return _this.openNotesModal();
        },
        disabled: false
      }, {
        title: 'Assigner',
        icon: 'icofont icofont-check',
        handler: function handler() {},
        disabled: true
      }, {
        title: 'Supprimer',
        icon: 'icofont icofont-trash',
        handler: this.startDeletingTbFromContext,
        disabled: false
      }],
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__["default"].host,
      authcheck: false,
      authcheckUsr: null,
      authcheckStatus: null,
      watchInPause: false,
      initLoad: true,
      listingNote: false,
      dossier_credit: null,
      toDelete: '',
      meta_parseable: {
        cred_pub_key: this.meta_data['cred_pub_key'],
        tb_name: this.tb_name
      },
      display_response: false,
      formDataToBeWatched: {
        numero_compte: '',
        groupe: '',
        capital_social: '',
        siege_social: '',
        date_creation: '',
        forme_juridique: '',
        actionnaires: '',
        date_douvertue: '',
        activite: '',
        contacts: '',
        charge_d_affaire: '',
        dirigeants: '',
        fiche_suivis: '',
        date_saisie: new Date(),
        notes: []
      },
      fiche_suivis: [{
        fiche: [{
          question: '',
          reponse: '',
          is_answered: false
        }],
        is_answered: false,
        update_at: '',
        created_at: new Date(),
        created_by: '',
        sender: '',
        receivers: '',
        has_notified: false
      }],
      isResponse: false,
      debounce: null,
      searchUser: false,
      usersDefault: []
    };
  },
  methods: {
    formDataVars: function formDataVars(event) {
      var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      if (type) {
        this.formDataToBeWatched[type][index][event.target.id.split('-')[0]] = event.target.value;
      } else {
        this.formDataToBeWatched[event.target.id] = event.target.value;
      }
    },
    addMoreGarantie: function addMoreGarantie() {
      var newItem = {
        id: this.formDataToBeWatched.garanties.length + 1,
        formulation_surete: '',
        state_: {
          is_detained: 'non_detenues'
        },
        numero_compte: '',
        numero_compte_value: '',
        garanties_a_recueillir: '',
        appreciation: ''
      };
      this.formDataToBeWatched.garanties.push(newItem);
    },
    removeGarantie: function removeGarantie(index) {
      this.formDataToBeWatched.garanties.splice(index, 1);
    },
    determineSRC: function determineSRC() {
      this.getUsers();
      var src = this.users.filter(function (el) {
        return (el === null || el === void 0 ? void 0 : el.role_id) === 'tyJLxuAh6F2DJR6e';
      });
      return src[0];
    },
    manageButton: function manageButton(index) {
      return this.isLoding[index] === false && this.buttonStatus[index] === false;
    },
    getTag: function getTag(index) {
      this.tg = this.tag[index];
    },
    retractDynamique: function retractDynamique(index) {
      this.$set(this.seens, index, !this.seens[index]);
    },
    setColor: function setColor(elt) {
      var _elt$;
      return ((_elt$ = elt[1]) === null || _elt$ === void 0 ? void 0 : _elt$.reponse) === '' ? 'text-dark' : '';
    },
    addMoreFiche: function addMoreFiche() {
      var receivers = this.defaultActors;
      var notified_users = _toConsumableArray(receivers);
      this.tags[this.fiche_suivis.length] = _toConsumableArray(receivers);
      this.fiche_suivis[0].sender = this.authcheckUsr;
      this.fiche_suivis.push({
        fiche: [{
          question: '',
          reponse: '',
          is_answered: false
        }],
        is_answered: false,
        update_at: '',
        created_at: new Date(),
        created_by: '',
        sender: this.authcheckUsr,
        receivers: receivers,
        notified_users: notified_users,
        has_notified: false
      });
      this.$set(this.seens, this.fiche_suivis.length - 1, true);
      this.$set(this.isLoding, this.fiche_suivis.length - 1, false);
      this.$set(this.buttonStatus, this.fiche_suivis.length - 1, true);
    },
    removeFiche: function removeFiche(index) {
      this.toDelete = index;
      this.$modal.show('confirm_supp_fiche_suivis', index);
    },
    deleteFiche: function deleteFiche(index) {
      this.fiche_suivis.splice(index, 1);
      this.$modal.hide('confirm_supp_fiche_suivis');
      this.toDelete = '';
    },
    closeModal: function closeModal() {
      this.$modal.hide('confirm_supp_fiche_suivis');
    },
    initFicheLecture: function initFicheLecture() {
      this.fiche_suivis = [[{
        question: '',
        niveau_risque: '',
        avis: ''
      }, {
        reponse: '',
        niveau_risque: '',
        avis: ''
      }]];
    },
    tableClosedOrOpened: function tableClosedOrOpened() {
      this.seen = this.fetchClosedTables(this.tb_name + this.meta_data['cred_pub_key']);
    },
    addMore: function addMore(index) {
      var _this$fiche_suivis$in;
      (_this$fiche_suivis$in = this.fiche_suivis[index]) === null || _this$fiche_suivis$in === void 0 || _this$fiche_suivis$in.fiche.push({
        question: '',
        reponse: '',
        is_answered: false
      });
      this.handleInput();
    },
    remove: function remove(index, idx) {
      this.fiche_suivis[index].fiche.splice(idx, 1);
      this.handleInput();
    },
    pressAtKey: function pressAtKey() {
      this.tagging = true;
    },
    openNotesModal: function openNotesModal() {
      var listing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.listingNote = listing;
      this.$modal.show(this.tb_name);
    },
    loadCheckListData: function loadCheckListData() {
      var _this$meta_data$dossi3, _this$meta_data$dossi4, _this$meta_data$dossi5, _this$meta_data$dossi6;
      var categorie_client = (_this$meta_data$dossi3 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi3 === void 0 ? void 0 : _this$meta_data$dossi3.categorie_client;
      var options = {
        categorie_client: categorie_client,
        type_credit: (_this$meta_data$dossi4 = (_this$meta_data$dossi5 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi5 === void 0 ? void 0 : _this$meta_data$dossi5.applied_templ_name) !== null && _this$meta_data$dossi4 !== void 0 ? _this$meta_data$dossi4 : '',
        occupation: 'NA',
        filiale: (_this$meta_data$dossi6 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi6 === void 0 || (_this$meta_data$dossi6 = _this$meta_data$dossi6.caf_recorded_file) === null || _this$meta_data$dossi6 === void 0 ? void 0 : _this$meta_data$dossi6.filiale,
        is_group: 'non'
      };
    },
    loadRetrieved: function loadRetrieved() {
      var _this$meta_data$dossi7, _this$meta_data$dossi8, _this$meta_data$dossi9, _this$meta_data$dossi0, _this$meta_data$dossi1, _this$meta_data$dossi10, _this$meta_data$dossi11, _this$meta_data$dossi12, _this$meta_data$dossi13, _this$meta_data$dossi14, _this$meta_data$dossi15, _this$meta_data$dossi16, _this$meta_data$dossi17, _this$meta_data$dossi18, _this$meta_data$dossi19;
      var lentb = ((_this$meta_data$dossi7 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi7 === void 0 ? void 0 : _this$meta_data$dossi7.tbs_in_use) || [];
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split('tb');
      createdKey = 'cred_pub_tb_' + createdKeyArr[1];
      var applied_templ_name = (_this$meta_data$dossi8 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi8 === void 0 ? void 0 : _this$meta_data$dossi8.applied_templ_name;
      var tbArrays = this.determineCredPubTables(applied_templ_name, this.meta_data['dossier_credit']);
      this.formDataToBeWatched.groupe = ((_this$meta_data$dossi9 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi9 === void 0 || (_this$meta_data$dossi9 = _this$meta_data$dossi9.cred_pub_tb_00) === null || _this$meta_data$dossi9 === void 0 ? void 0 : _this$meta_data$dossi9.groupe) || '';
      this.formDataToBeWatched.capital_social = ((_this$meta_data$dossi0 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi0 === void 0 || (_this$meta_data$dossi0 = _this$meta_data$dossi0.cred_pub_tb_00) === null || _this$meta_data$dossi0 === void 0 ? void 0 : _this$meta_data$dossi0.capital) || '';
      this.formDataToBeWatched.siege_social = ((_this$meta_data$dossi1 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi1 === void 0 || (_this$meta_data$dossi1 = _this$meta_data$dossi1.cred_pub_tb_00) === null || _this$meta_data$dossi1 === void 0 ? void 0 : _this$meta_data$dossi1.adresse) || '';
      this.formDataToBeWatched.date_creation = ((_this$meta_data$dossi10 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi10 === void 0 || (_this$meta_data$dossi10 = _this$meta_data$dossi10.cred_pub_tb_00) === null || _this$meta_data$dossi10 === void 0 ? void 0 : _this$meta_data$dossi10.date_creation) || '';
      this.formDataToBeWatched.activite = ((_this$meta_data$dossi11 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi11 === void 0 || (_this$meta_data$dossi11 = _this$meta_data$dossi11.cred_pub_tb_00) === null || _this$meta_data$dossi11 === void 0 ? void 0 : _this$meta_data$dossi11.secteur_activite) || '';
      this.formDataToBeWatched.date_douvertue = ((_this$meta_data$dossi12 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi12 === void 0 || (_this$meta_data$dossi12 = _this$meta_data$dossi12.cred_pub_tb_00) === null || _this$meta_data$dossi12 === void 0 ? void 0 : _this$meta_data$dossi12.date_ouverture) || '';
      this.formDataToBeWatched.forme_juridique = ((_this$meta_data$dossi13 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi13 === void 0 || (_this$meta_data$dossi13 = _this$meta_data$dossi13.cred_pub_tb_00) === null || _this$meta_data$dossi13 === void 0 ? void 0 : _this$meta_data$dossi13.forme_juridique) || '';
      this.formDataToBeWatched.actionnaires = ((_this$meta_data$dossi14 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi14 === void 0 || (_this$meta_data$dossi14 = _this$meta_data$dossi14.cred_pub_tb_00) === null || _this$meta_data$dossi14 === void 0 ? void 0 : _this$meta_data$dossi14.actionnariats) || '';
      this.formDataToBeWatched.contacts = ((_this$meta_data$dossi15 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi15 === void 0 || (_this$meta_data$dossi15 = _this$meta_data$dossi15.cred_pub_tb_00) === null || _this$meta_data$dossi15 === void 0 ? void 0 : _this$meta_data$dossi15.contact_client) || '';
      this.formDataToBeWatched.charge_d_affaire = ((_this$meta_data$dossi16 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi16 === void 0 || (_this$meta_data$dossi16 = _this$meta_data$dossi16.cred_pub_tb_00) === null || _this$meta_data$dossi16 === void 0 ? void 0 : _this$meta_data$dossi16.nom_complet_caf) || '';
      this.formDataToBeWatched.dirigeants = ((_this$meta_data$dossi17 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi17 === void 0 || (_this$meta_data$dossi17 = _this$meta_data$dossi17.cred_pub_tb_5) === null || _this$meta_data$dossi17 === void 0 ? void 0 : _this$meta_data$dossi17.equipe_dirigeantes) || '';
      this.formDataToBeWatched.numero_compte = ((_this$meta_data$dossi18 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi18 === void 0 || (_this$meta_data$dossi18 = _this$meta_data$dossi18.cred_pub_tb_00) === null || _this$meta_data$dossi18 === void 0 ? void 0 : _this$meta_data$dossi18.compte_courant) || '';
      this.formDataToBeWatched.dom_client = ((_this$meta_data$dossi19 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi19 === void 0 || (_this$meta_data$dossi19 = _this$meta_data$dossi19.cred_pub_tb_00) === null || _this$meta_data$dossi19 === void 0 ? void 0 : _this$meta_data$dossi19.denomination_client) || '';
      if (lentb.length > 0 && this.meta_data['dossier_credit'][createdKey]) {
        this.formDataToBeWatched = _objectSpread(_objectSpread({}, this.formDataToBeWatched), this.meta_data['dossier_credit'][createdKey]);
        this.isLoadingData = false;
      }
    },
    setTbVal: function setTbVal(val) {
      this.cred_pub_key = val;
    },
    send2Backend: function send2Backend(res, newVal, oldVal) {
      var _this2 = this;
      this.authcheck = true;
      this.authcheckUsr = res.data;
      this.authcheckStatus = res.status;
      if (this.authcheckStatus === 401) {
        return;
      }
      if (this.authcheck) {
        this.$emit('autosaving');
        this.$axios.post(this.ebapisHost + 'creditbuilder/api/v1/autosaving/', {
          user: this.authcheckUsr,
          meta_parseable: this.meta_parseable,
          filledData: this.formDataToBeWatched,
          loadDossier: true
        }).then(function (response) {
          _this2.$emit('autosaving');
          var tbFetcheData = response.data;
          if (tbFetcheData['is_success'] === true) {
            _this2.dossier_credit = tbFetcheData['dossier_credit'];
            _this2.$emit('load-shell');
          }
        })["catch"](function (error) {
          _this2.$Progress.finish();
          console.log(error);
        });
      } else {
        alert('Unauthenticated');
      }
    },
    retract: function retract() {
      this.seen = !this.seen;
      var a = {
        tb_name: this.tb_name + this.meta_data['cred_pub_key'],
        status: this.seen
      };
      EventBus.$emit('savedclosed-table', a);
    },
    defaultRetract: function defaultRetract(rc, ra) {
      if (ra != null) {
        this.seen = rc;
        var a = {
          tb_name: this.tb_name + this.meta_data['cred_pub_key'],
          status: this.seen
        };
        EventBus.$emit('savedclosed-table', a);
      }
    },
    initLoding: function initLoding() {
      var _this3 = this;
      if (this.fiche_suivis) {
        this.fiche_suivis.forEach(function (element, key) {
          _this3.$set(_this3.isLoding, key, false);
        });
      }
    },
    initButtonStatus: function initButtonStatus() {
      var _this4 = this;
      if (this.fiche_suivis) {
        this.fiche_suivis.forEach(function (element, key) {
          _this4.$set(_this4.buttonStatus, key, true);
        });
      }
    },
    loadTbAttrs: function loadTbAttrs() {
      var l = [];
      var topdivel = this.$refs.topdiv;
      var k = document.querySelectorAll('.subdiv' + this.tb_name);
      k.forEach(function (e) {
        l.push(e.innerText);
      });
      var p = {
        name_of_title: topdivel.innerText,
        list_of_content: l,
        id: 'ca6-head'
      };
      this.$emit('load-buffer', p);
    },
    somX3: function somX3(ob, key) {
      var som = 0;
      ob.filter(function (elm) {
        var result = String(elm[key]).replace(/\s+/g, '');
        if (result === '') {
          som += 0;
        } else {
          som += parseInt(result);
        }
      });
      return som;
    },
    somX4: function somX4(ob, key) {
      var val1 = ob.replace(/\s+/g, '');
      var val2 = key.replace(/\s+/g, '');
      return val1 + val2;
    },
    handleInput: function handleInput() {
      //   this.formDataToBeWatched.kyc_ = [
      //             ...this.conformite_juridique,
      //         ];
    },
    handleInput1: function handleInput1(evt, index) {
      this.fiche_suivis[index].receivers = this.tags[index];
      this.fiche_suivis[index].notified_users = this.tags[index];
      this.fiche_suivis[index].sender = this.authcheckUsr;
      this.handleInput();
    },
    setButton: function setButton(evt, index) {
      var _this5 = this;
      this.fiche_suivis.forEach(function (element) {
        element.fiche.forEach(function (elt) {
          if (elt.question !== '') {
            _this5.$set(_this5.buttonStatus, index, true);
          }
        });
      });
    },
    instruction3: function instruction3(id) {
      var id0 = '#' + id;
      window.$(id0).modal('show');
    },
    updateTags: function updateTags(newTags, ficheIndex) {
      this.users = [];
      newTags = newTags.filter(function (el) {
        return el === null || el === void 0 ? void 0 : el.email;
      });
      this.tags[ficheIndex] = newTags;
    },
    getUsersDefault: function getUsersDefault(roles, users_id) {
      var _this$meta_data,
        _this6 = this;
      var url = this.ebapisHost + 'creditbuilder/api/v1/load-all-doc-users/';
      var data = {
        search: '',
        limit: 10,
        roles: roles,
        users_id: users_id,
        cred_pub_key: (_this$meta_data = this.meta_data) === null || _this$meta_data === void 0 ? void 0 : _this$meta_data.cred_pub_key
      };
      this.$axios.post(url, data).then(function (response) {
        var data = response.data.data;
        if (!['', null, undefined].includes(data) && data.length > 0) {
          _this6.usersDefault = data;
        }
        _this6.searchUser = false;
      })["catch"](function (error) {
        _this6.searchUser = false;
        console.warn('Oh. Something went wrong');
      });
    },
    initItems: function initItems() {
      var _this7 = this;
      if (this.tg.trim().length < 3) return;
      clearTimeout(this.debounce);
      this.debounce = setTimeout(function () {
        var _this7$meta_data;
        _this7.searchUser = true;
        var url = _this7.ebapisHost + 'creditbuilder/api/v1/load-all-doc-users/';
        var data = {
          search: _this7.tg,
          limit: 10,
          cred_pub_key: (_this7$meta_data = _this7.meta_data) === null || _this7$meta_data === void 0 ? void 0 : _this7$meta_data.cred_pub_key
        };
        _this7.$axios.post(url, data).then(function (response) {
          var data = response.data.data;
          var message = response.data.message;
          if (!['', null, undefined].includes(data) && data.length > 0) {
            _this7.users = data;
          } else {
            _this7.users = [];
          }
          _this7.$axios.post('/api/search_user', {
            search: _this7.tg,
            limit: 10
          }).then(function (response) {
            var _others_users, _this7$users;
            var data = response.data.data;
            var message = response.data.message;
            var others_users = [];
            if (!['', null, undefined].includes(data) && data.length > 0) {
              others_users = data;
            }
            if (((_others_users = others_users) === null || _others_users === void 0 ? void 0 : _others_users.length) > 0) {
              others_users.forEach(function (el) {
                var find = _this7.users.find(function (u) {
                  return (u === null || u === void 0 ? void 0 : u.id) === (el === null || el === void 0 ? void 0 : el.id);
                });
                if (['', null, undefined].includes(find)) {
                  _this7.users.push(el);
                }
              });
            }
            if (((_this7$users = _this7.users) === null || _this7$users === void 0 ? void 0 : _this7$users.length) === 0) {
              _this7.$toasted.show(message, {
                duration: 5000
              });
            }
            _this7.searchUser = false;
          })["catch"](function (error) {
            _this7.searchUser = false;
            console.warn('Oh. Something went wrong');
          });
        })["catch"](function (error) {
          _this7.searchUser = false;
          console.warn('Oh. Something went wrong');
        });
      }, 800);
    }
  },
  watch: {
    formDataToBeWatched: {
      handler: function handler(newVal, oldVal) {
        this.send2Backend({
          data: this.authcheckUsr,
          status: this.authcheckStatus
        }, newVal, oldVal);
      },
      deep: true,
      immediate: true
    },
    filteredUsersDefault: function filteredUsersDefault() {
      if (this.fiche_suivis[0].receivers === '') {
        this.fiche_suivis[0].receivers = this.defaultActors;
        this.fiche_suivis[0].notified_users = this.defaultActors;
        this.tags[0] = this.defaultActors;
        this.fiche_suivis[0].sender = this.authcheckUsr;
        this.formDataToBeWatched.fiche_suivis = this.fiche_suivis;
      }
    },
    tg: 'initItems'
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/fiche_suivi_corporate/CF-SA1.vue?vue&type=template&id=482e2afc&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/fiche_suivi_corporate/CF-SA1.vue?vue&type=template&id=482e2afc&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$formDataToBeWatch, _vm$formDataToBeWatch2, _vm$formDataToBeWatch6;
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
  }), _vm._v(" "), _vm.seen ? _c("div", {
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
      id: "ca6-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n              " + _vm._s(_vm.tb_display_name) + " : Signaletique\n            ")]), _vm._v(" "), _c("div", {
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
  }, [_c("span", [_vm._v(_vm._s(_vm.formDataToBeWatched.notes.length))])])])]) : _vm._e(), _vm._v(" "), _c(_vm.seen ? "chevron-up-icon" : "chevron-down-icon", {
    tag: "component",
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
    staticClass: "row p-0"
  }, [_c("div", {
    staticClass: "col-12 p-0 position-relative"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-6 mb-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "groupe"
    }
  }, [_vm._v("Denomination Client")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.dom_client,
      expression: "formDataToBeWatched.dom_client"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "dom_client",
      readonly: ""
    },
    domProps: {
      value: _vm.formDataToBeWatched.dom_client
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "dom_client", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 mb-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "groupe"
    }
  }, [_vm._v("Numero de compte")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.numero_compte,
      expression: "formDataToBeWatched.numero_compte"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "numero_compte",
      readonly: ""
    },
    domProps: {
      value: _vm.formDataToBeWatched.numero_compte
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "numero_compte", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 mb-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "groupe"
    }
  }, [_vm._v("Groupe")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.groupe,
      expression: "formDataToBeWatched.groupe"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "groupe",
      readonly: ""
    },
    domProps: {
      value: _vm.formDataToBeWatched.groupe
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "groupe", $event.target.value);
      }, _vm.formDataVars]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 mb-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "capital_social"
    }
  }, [_vm._v("Capital Social")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.capital_social,
      expression: "formDataToBeWatched.capital_social"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "capital_social",
      disabled: ""
    },
    domProps: {
      value: _vm.formDataToBeWatched.capital_social
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "capital_social", $event.target.value);
      }, _vm.formDataVars]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 mb-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "siege_social"
    }
  }, [_vm._v("Adresse/Siège Social")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.siege_social,
      expression: "formDataToBeWatched.siege_social"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "siege_social",
      disabled: ""
    },
    domProps: {
      value: _vm.formDataToBeWatched.siege_social
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "siege_social", $event.target.value);
      }, _vm.formDataVars]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 mb-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "date_creation"
    }
  }, [_vm._v("Date de Création")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.date_creation,
      expression: "formDataToBeWatched.date_creation"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date",
      id: "date_creation",
      disabled: ""
    },
    domProps: {
      value: _vm.formDataToBeWatched.date_creation
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "date_creation", $event.target.value);
      }, _vm.formDataVars]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 mb-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "forme_juridique"
    }
  }, [_vm._v("Forme Juridique")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.forme_juridique,
      expression: "formDataToBeWatched.forme_juridique"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "forme_juridique",
      disabled: ""
    },
    domProps: {
      value: _vm.formDataToBeWatched.forme_juridique
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "forme_juridique", $event.target.value);
      }, _vm.formDataVars]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 mb-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "actionnaires"
    }
  }, [_vm._v("Actionnaires")]), _vm._v(" "), _vm._l((_vm$formDataToBeWatch2 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch2 === void 0 ? void 0 : _vm$formDataToBeWatch2.actionnaires, function (dirigeant, index) {
    var _vm$formDataToBeWatch3, _vm$formDataToBeWatch4;
    return _c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (_vm$formDataToBeWatch3 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch3 === void 0 ? void 0 : _vm$formDataToBeWatch3.actionnaires[index].nom_actionnaire,
        expression: "formDataToBeWatched?.actionnaires[index].nom_actionnaire"
      }],
      key: index,
      staticClass: "form-control",
      attrs: {
        rows: "2",
        id: "actionnaire-" + index,
        disabled: ""
      },
      domProps: {
        value: (_vm$formDataToBeWatch4 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch4 === void 0 ? void 0 : _vm$formDataToBeWatch4.actionnaires[index].nom_actionnaire
      },
      on: {
        input: [function ($event) {
          var _vm$formDataToBeWatch5;
          if ($event.target.composing) return;
          _vm.$set((_vm$formDataToBeWatch5 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch5 === void 0 ? void 0 : _vm$formDataToBeWatch5.actionnaires[index], "nom_actionnaire", $event.target.value);
        }, _vm.formDataVars]
      }
    });
  })], 2), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 mb-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "date_douvertue"
    }
  }, [_vm._v("Date d'Ouverture")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.date_douvertue,
      expression: "formDataToBeWatched.date_douvertue"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date",
      id: "date_douvertue",
      disabled: ""
    },
    domProps: {
      value: _vm.formDataToBeWatched.date_douvertue
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "date_douvertue", $event.target.value);
      }, _vm.formDataVars]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 mb-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "activite"
    }
  }, [_vm._v("Activité")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.activite,
      expression: "formDataToBeWatched.activite"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "activite",
      disabled: ""
    },
    domProps: {
      value: _vm.formDataToBeWatched.activite
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "activite", $event.target.value);
      }, _vm.formDataVars]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 mb-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "contacts"
    }
  }, [_vm._v("Contacts")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.contacts,
      expression: "formDataToBeWatched.contacts"
    }],
    staticClass: "form-control",
    attrs: {
      rows: "2",
      id: "contacts",
      disabled: ""
    },
    domProps: {
      value: _vm.formDataToBeWatched.contacts
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "contacts", $event.target.value);
      }, _vm.formDataVars]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 mb-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "charge_d_affaire"
    }
  }, [_vm._v("Chargé d'Affaire")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.charge_d_affaire,
      expression: "formDataToBeWatched.charge_d_affaire"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "charge_d_affaire",
      disabled: ""
    },
    domProps: {
      value: _vm.formDataToBeWatched.charge_d_affaire
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "charge_d_affaire", $event.target.value);
      }, _vm.formDataVars]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 mb-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "dirigeants"
    }
  }, [_vm._v("Dirigeants")]), _vm._v(" "), _vm._l(_vm.formDataToBeWatched.dirigeants, function (dirigeant, index) {
    return _c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.formDataToBeWatched.dirigeants[index].dirigeants,
        expression: "formDataToBeWatched.dirigeants[index].dirigeants"
      }],
      key: index,
      staticClass: "form-control",
      attrs: {
        rows: "2",
        id: "dirigeants-" + index,
        disabled: ""
      },
      domProps: {
        value: _vm.formDataToBeWatched.dirigeants[index].dirigeants
      },
      on: {
        input: [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(_vm.formDataToBeWatched.dirigeants[index], "dirigeants", $event.target.value);
        }, _vm.formDataVars]
      }
    });
  })], 2)])])])])]), _vm._v(" "), _c("div", {
    staticClass: "mb-5"
  }), _vm._v(" "), _c("button", {
    staticClass: "btn shadow-md text-white position-absolute",
    staticStyle: {
      right: "16px",
      bottom: "10px",
      background: "#2c3e50",
      "max-width": "max-content"
    },
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.retract();
      }
    }
  }, [_vm._v("\n        Fermer le tableau\n      ")])]) : _c("div", {
    staticClass: "card card-width-height"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc pb-0 pt-2"
  }, [_c("h6", {
    ref: "topdiv",
    staticClass: "head",
    attrs: {
      id: "ca6-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n              " + _vm._s(_vm.tb_display_name) + " : Signaletique\n            ")]), _vm._v(" "), _c("div", {
    staticClass: "col-auto"
  }, [((_vm$formDataToBeWatch6 = _vm.formDataToBeWatched.notes) === null || _vm$formDataToBeWatch6 === void 0 ? void 0 : _vm$formDataToBeWatch6.length) > 0 ? _c("div", {
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
  }, [_c("span", [_vm._v(_vm._s(_vm.formDataToBeWatched.notes.length))])])])]) : _vm._e(), _vm._v(" "), _c("chevron-down-icon", {
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
  })], 1)])])])]), _vm._v(" "), _c("modal", {
    staticClass: "pb-5",
    attrs: {
      name: "confirm_supp_fiche_suivis",
      width: "300",
      height: "auto",
      adaptive: true,
      resizable: true
    }
  }, [_c("div", {
    staticClass: "container py-3 mb-2",
    staticStyle: {
      "max-height": "100%",
      overflow: "auto"
    }
  }, [_c("div", {
    staticClass: "col-12 fw-bold mb-2"
  }, [_vm._v("Voulez-vous supprimer cette fiche ?")]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-between"
  }, [_c("button", {
    staticClass: "btn bg-danger border-none",
    on: {
      click: function click($event) {
        return _vm.closeModal();
      }
    }
  }, [_vm._v("NON")]), _vm._v(" "), _c("button", {
    staticClass: "btn bg-success",
    on: {
      click: function click($event) {
        return _vm.deleteFiche(_vm.toDelete);
      }
    }
  }, [_vm._v("OUI")])])])]), _vm._v(" "), _c("note-modal", {
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
  })], 1)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/fiche_suivi_corporate/CF-SA1.vue?vue&type=style&index=0&id=482e2afc&lang=css&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/fiche_suivi_corporate/CF-SA1.vue?vue&type=style&index=0&id=482e2afc&lang=css&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-482e2afc] {\r\n  font-family: 'Google Sans', sans-serif;\n}\nlabel[data-v-482e2afc] {\r\n  font-size: 13px;\n}\ninput[type='text'][data-v-482e2afc],\r\ninput[type='date'][data-v-482e2afc],\r\ntextarea[data-v-482e2afc],\r\nselect[data-v-482e2afc] {\r\n  border-color: #34495e;\r\n  color: #57606f;\r\n  font-size: 13px;\r\n  font-weight: bold;\n}\n.card-width-height[data-v-482e2afc] {\r\n  width: 100%;\r\n  height: 100%;\n}\n.head[data-v-482e2afc] {\r\n  color: #f1f2f6;\r\n  font-size: 22px;\n}\n.hdc[data-v-482e2afc] {\r\n  background-color: #57606f;\n}\n.th[data-v-482e2afc] {\r\n  padding: 4px;\r\n  padding-bottom: 0px;\n}\n.badge-sm[data-v-482e2afc] {\r\n  display: inline-block;\r\n  width: 15px;\r\n  height: 15px;\r\n  background: rgba(255, 0, 0, 0.882);\r\n  color: white;\r\n  font-size: 12px;\r\n  font-weight: 500;\r\n  border-radius: 100%;\r\n  position: absolute;\r\n  top: -20%;\r\n  left: 55%;\r\n  text-align: center;\n}\n.relook-header[data-v-482e2afc] {\r\n  color: #000;\r\n  background-color: #f4f3f3;\r\n  padding: 5px;\r\n  border-bottom: 1px solid #b6b8bb;\n}\n.btn-primary[data-v-482e2afc] {\r\n  background-color: #2c3e50;\r\n  border: none;\n}\n.form-check-input[data-v-482e2afc] {\r\n  margin-top: 0.5rem;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/fiche_suivi_corporate/CF-SA1.vue?vue&type=style&index=0&id=482e2afc&lang=css&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/fiche_suivi_corporate/CF-SA1.vue?vue&type=style&index=0&id=482e2afc&lang=css&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CF_SA1_vue_vue_type_style_index_0_id_482e2afc_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CF-SA1.vue?vue&type=style&index=0&id=482e2afc&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/fiche_suivi_corporate/CF-SA1.vue?vue&type=style&index=0&id=482e2afc&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CF_SA1_vue_vue_type_style_index_0_id_482e2afc_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CF_SA1_vue_vue_type_style_index_0_id_482e2afc_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/forms/afg/fiche_suivi_corporate/CF-SA1.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/components/forms/afg/fiche_suivi_corporate/CF-SA1.vue ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CF_SA1_vue_vue_type_template_id_482e2afc_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CF-SA1.vue?vue&type=template&id=482e2afc&scoped=true */ "./resources/js/components/forms/afg/fiche_suivi_corporate/CF-SA1.vue?vue&type=template&id=482e2afc&scoped=true");
/* harmony import */ var _CF_SA1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CF-SA1.vue?vue&type=script&lang=js */ "./resources/js/components/forms/afg/fiche_suivi_corporate/CF-SA1.vue?vue&type=script&lang=js");
/* harmony import */ var _CF_SA1_vue_vue_type_style_index_0_id_482e2afc_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CF-SA1.vue?vue&type=style&index=0&id=482e2afc&lang=css&scoped=true */ "./resources/js/components/forms/afg/fiche_suivi_corporate/CF-SA1.vue?vue&type=style&index=0&id=482e2afc&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CF_SA1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CF_SA1_vue_vue_type_template_id_482e2afc_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _CF_SA1_vue_vue_type_template_id_482e2afc_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "482e2afc",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/forms/afg/fiche_suivi_corporate/CF-SA1.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/forms/afg/fiche_suivi_corporate/CF-SA1.vue?vue&type=script&lang=js":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/fiche_suivi_corporate/CF-SA1.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CF_SA1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CF-SA1.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/fiche_suivi_corporate/CF-SA1.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CF_SA1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/forms/afg/fiche_suivi_corporate/CF-SA1.vue?vue&type=style&index=0&id=482e2afc&lang=css&scoped=true":
/*!************************************************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/fiche_suivi_corporate/CF-SA1.vue?vue&type=style&index=0&id=482e2afc&lang=css&scoped=true ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CF_SA1_vue_vue_type_style_index_0_id_482e2afc_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CF-SA1.vue?vue&type=style&index=0&id=482e2afc&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/fiche_suivi_corporate/CF-SA1.vue?vue&type=style&index=0&id=482e2afc&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/forms/afg/fiche_suivi_corporate/CF-SA1.vue?vue&type=template&id=482e2afc&scoped=true":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/fiche_suivi_corporate/CF-SA1.vue?vue&type=template&id=482e2afc&scoped=true ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CF_SA1_vue_vue_type_template_id_482e2afc_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CF_SA1_vue_vue_type_template_id_482e2afc_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CF_SA1_vue_vue_type_template_id_482e2afc_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CF-SA1.vue?vue&type=template&id=482e2afc&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/fiche_suivi_corporate/CF-SA1.vue?vue&type=template&id=482e2afc&scoped=true");


/***/ })

}]);