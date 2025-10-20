"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_contreanalyse_afg_filiale_DAJ-PR-CORPORATE-OLD_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/afg/filiale/DAJ-PR-CORPORATE-OLD.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/afg/filiale/DAJ-PR-CORPORATE-OLD.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/ContextMenu */ "./resources/js/components/shared/ContextMenu.vue");
/* harmony import */ var _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/ContextMenuItem */ "./resources/js/components/shared/ContextMenuItem.vue");
/* harmony import */ var _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vueform/multiselect/dist/multiselect.vue2 */ "./node_modules/@vueform/multiselect/dist/multiselect.vue2.js");
/* harmony import */ var _services_ebapis_service_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/ebapis.service.js */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_connects_service_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/connects.service.js */ "./resources/js/services/connects.service.js");
/* harmony import */ var _services_auth_service_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/auth.service.js */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_proxy_service_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/proxy.service.js */ "./resources/js/services/proxy.service.js");
/* harmony import */ var _services_credit_service_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/credit.service.js */ "./resources/js/services/credit.service.js");
/* harmony import */ var _services_afg_f8_constants_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/afg/f8-constants.js */ "./resources/js/services/afg/f8-constants.js");
/* harmony import */ var _services_afg_dajc_check_list_manager_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../services/afg/dajc-check-list-manager.js */ "./resources/js/services/afg/dajc-check-list-manager.js");
/* harmony import */ var _services_afg_check_list_manager_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../services/afg/check-list-manager.js */ "./resources/js/services/afg/check-list-manager.js");
/* harmony import */ var _services_afg_dajc_constants_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../services/afg/dajc-constants.js */ "./resources/js/services/afg/dajc-constants.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _shared_Tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/Tabs */ "./resources/js/components/shared/Tabs.vue");
/* harmony import */ var _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @johmun/vue-tags-input */ "./node_modules/@johmun/vue-tags-input/dist/vue-tags-input.js");
/* harmony import */ var _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_13__);
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
















window.$ = window.jQuery = __webpack_require__(/*! jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Pieces_requises_par_la_dajc",
  display: "Pièces reqquises par la DAJC",
  components: {
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_14__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_14__.TrashIcon,
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_14__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_14__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_14__.ChevronDownIcon,
    ContextMenu: _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__["default"],
    ContextMenuItem: _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__["default"],
    Multiselect: _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_2__["default"],
    AirplayIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_14__.AirplayIcon,
    Tabs: _shared_Tabs__WEBPACK_IMPORTED_MODULE_12__["default"],
    VueTagsInput: (_johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_13___default())
  },
  props: {
    meta_data: Object,
    tb_name: String,
    tb_display_name: String
  },
  created: function created() {
    var _this$meta_data,
      _this$meta_data2,
      _this$meta_data$dossi,
      _this = this;
    this.filteredContexMenu();
    this.carcasse_type = (_this$meta_data = this.meta_data) === null || _this$meta_data === void 0 || (_this$meta_data = _this$meta_data.dossier_credit) === null || _this$meta_data === void 0 || (_this$meta_data = _this$meta_data.applied_templ_name) === null || _this$meta_data === void 0 || (_this$meta_data = _this$meta_data.toString()) === null || _this$meta_data === void 0 ? void 0 : _this$meta_data.toLowerCase();
    this.type_credits = (_this$meta_data2 = this.meta_data) === null || _this$meta_data2 === void 0 || (_this$meta_data2 = _this$meta_data2.dossier_credit) === null || _this$meta_data2 === void 0 || (_this$meta_data2 = _this$meta_data2.cred_pub_tb_10001) === null || _this$meta_data2 === void 0 || (_this$meta_data2 = _this$meta_data2.type_credit) === null || _this$meta_data2 === void 0 || (_this$meta_data2 = _this$meta_data2.toString()) === null || _this$meta_data2 === void 0 ? void 0 : _this$meta_data2.toLowerCase();
    // console.log("debug type_credits",this.type_credits);
    var applied_templ_name = (_this$meta_data$dossi = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi.applied_templ_name;
    var tbArrays = this.determineCredPubTables(applied_templ_name);
    EventBus.$on('refresh-dajc', function (data) {
      var _this$meta_data3;
      // console.log("refresh-dajc",data?.cred_pub_tb_8);
      if (((_this$meta_data3 = _this.meta_data) === null || _this$meta_data3 === void 0 || (_this$meta_data3 = _this$meta_data3.dossier_credit) === null || _this$meta_data3 === void 0 || (_this$meta_data3 = _this$meta_data3.categorie_client) === null || _this$meta_data3 === void 0 ? void 0 : _this$meta_data3.toUpperCase()) != 'RETAIL') {
        var _this$meta_data4, _this$meta_data5;
        _this.isLoadingData = true;
        _this.loadCheckListData((_this$meta_data4 = _this.meta_data) === null || _this$meta_data4 === void 0 ? void 0 : _this$meta_data4.dossier_credit, (_this$meta_data5 = _this.meta_data) === null || _this$meta_data5 === void 0 || (_this$meta_data5 = _this$meta_data5.dossier_credit) === null || _this$meta_data5 === void 0 ? void 0 : _this$meta_data5[tbArrays[0]], data, false);
      }
    });
    EventBus.$on("type_de_clientele_change", function (data) {
      if ((data === null || data === void 0 ? void 0 : data.type_de_clientele) != '') {
        var _this$meta_data6;
        if (((_this$meta_data6 = _this.meta_data) === null || _this$meta_data6 === void 0 || (_this$meta_data6 = _this$meta_data6.dossier_credit) === null || _this$meta_data6 === void 0 || (_this$meta_data6 = _this$meta_data6.categorie_client) === null || _this$meta_data6 === void 0 ? void 0 : _this$meta_data6.toUpperCase()) != 'RETAIL') {
          var _this$meta_data7, _this$meta_data8;
          _this.isLoadingData = true;
          _this.loadCheckListData((_this$meta_data7 = _this.meta_data) === null || _this$meta_data7 === void 0 ? void 0 : _this$meta_data7.dossier_credit, data, (_this$meta_data8 = _this.meta_data) === null || _this$meta_data8 === void 0 || (_this$meta_data8 = _this$meta_data8.dossier_credit) === null || _this$meta_data8 === void 0 ? void 0 : _this$meta_data8[tbArrays[2]], false);
        }
      }
    });
  },
  mounted: function mounted() {
    var _this2 = this;
    this.tableClosedOrOpened();
    this.loadRetrieved();
    this.loadTbAttrs();
    EventBus.$on("created-extra-file-template", function (data) {
      var current_key = _this2.determineCurrentKey();
      _this2[current_key].forEach(function (element, index) {
        var _data$template;
        var template_name_key_0 = current_key + '_' + (element === null || element === void 0 ? void 0 : element.id);
        var template_name_key_1 = data === null || data === void 0 || (_data$template = data.template) === null || _data$template === void 0 || (_data$template = _data$template.name) === null || _data$template === void 0 || (_data$template = _data$template.split(' -')) === null || _data$template === void 0 ? void 0 : _data$template.at(-1);
        if (template_name_key_0 == template_name_key_1) {
          var _this2$current_key$in;
          if (['', null, undefined].includes((_this2$current_key$in = _this2[current_key][index]["template"]) === null || _this2$current_key$in === void 0 ? void 0 : _this2$current_key$in.id)) {
            var _data$template2, _data$template3, _data$template4;
            _this2[current_key][index]["template"] = {
              id: data === null || data === void 0 || (_data$template2 = data.template) === null || _data$template2 === void 0 ? void 0 : _data$template2.id,
              name: data === null || data === void 0 || (_data$template3 = data.template) === null || _data$template3 === void 0 ? void 0 : _data$template3.name,
              slug: data === null || data === void 0 || (_data$template4 = data.template) === null || _data$template4 === void 0 ? void 0 : _data$template4.slug
            };
            _this2.handleInput();
          }
        }
      });
    });
    EventBus.$on("updated-extra-file-upload", function (data) {
      _this2.getFiles();
    });
    this.getFiles();
  },
  computed: {
    isDAJC: function isDAJC() {
      var _this$meta_data$dossi2, _this$authcheckUsr;
      return ((_this$meta_data$dossi2 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi2 === void 0 || (_this$meta_data$dossi2 = _this$meta_data$dossi2.final_outcome) === null || _this$meta_data$dossi2 === void 0 ? void 0 : _this$meta_data$dossi2.outcome) != 0 && this.autorizeRole.includes((_this$authcheckUsr = this.authcheckUsr) === null || _this$authcheckUsr === void 0 ? void 0 : _this$authcheckUsr.role_uuid);
    },
    nb_ligne_credits_selected: function nb_ligne_credits_selected() {
      if (this.formDataToBeWatched.ligne_credits.length > 0) {
        return this.formDataToBeWatched.ligne_credits.length;
      }
      return 0;
    },
    nb_surete_personneles_selected: function nb_surete_personneles_selected() {
      if (this.formDataToBeWatched.surete_personneles.length > 0) {
        return this.formDataToBeWatched.surete_personneles.length;
      }
      return 0;
    },
    nb_suretes_reelles_selected: function nb_suretes_reelles_selected() {
      if (this.formDataToBeWatched.suretes_reelles.length > 0) {
        return this.formDataToBeWatched.suretes_reelles.length;
      }
      return 0;
    },
    filteredList: function filteredList() {
      if (this.activeMenu.toLowerCase() == "client") {
        return this.pieces_versees_clients;
      }
      if (this.activeMenu.toLowerCase() == "surete") {
        return this.pieces_versees_suretes;
      }
      if (this.activeMenu.toLowerCase() == "credit") {
        return this.pieces_versees_credits;
      }
    },
    filteredItems: function filteredItems() {
      var _this3 = this;
      return this.credit_family.filter(function (item) {
        var _item$parent, _this3$search_credit_;
        return (_item$parent = item.parent) === null || _item$parent === void 0 ? void 0 : _item$parent.toLowerCase().includes((_this3$search_credit_ = _this3.search_credit_type) === null || _this3$search_credit_ === void 0 ? void 0 : _this3$search_credit_.toLowerCase());
      });
    },
    filteredSureteReele: function filteredSureteReele() {
      var _this$surete_family$f,
        _this4 = this;
      return (_this$surete_family$f = this.surete_family.filter(function (el) {
        return el.to == "réelles";
      })) === null || _this$surete_family$f === void 0 ? void 0 : _this$surete_family$f.filter(function (item) {
        var _item$parent2, _this4$search_surete_;
        return (_item$parent2 = item.parent) === null || _item$parent2 === void 0 ? void 0 : _item$parent2.toLowerCase().includes((_this4$search_surete_ = _this4.search_surete_reelle) === null || _this4$search_surete_ === void 0 ? void 0 : _this4$search_surete_.toLowerCase());
      });
    },
    filteredSuretePersonnelle: function filteredSuretePersonnelle() {
      var _this$surete_family$f2,
        _this5 = this;
      return (_this$surete_family$f2 = this.surete_family.filter(function (el) {
        return el.to == "personnelles";
      })) === null || _this$surete_family$f2 === void 0 ? void 0 : _this$surete_family$f2.filter(function (item) {
        var _item$parent3, _this5$search_surete_;
        return (_item$parent3 = item.parent) === null || _item$parent3 === void 0 ? void 0 : _item$parent3.toLowerCase().includes((_this5$search_surete_ = _this5.search_surete_personnele) === null || _this5$search_surete_ === void 0 ? void 0 : _this5$search_surete_.toLowerCase());
      });
    },
    filteredCheckListData: function filteredCheckListData() {
      var _this6 = this;
      if (this.checkListSearchInput) {
        return this[this.determineCurrentKey()].filter(function (item) {
          var _item$name, _this6$checkListSearc;
          return item === null || item === void 0 || (_item$name = item.name) === null || _item$name === void 0 ? void 0 : _item$name.toLowerCase().includes((_this6$checkListSearc = _this6.checkListSearchInput) === null || _this6$checkListSearc === void 0 ? void 0 : _this6$checkListSearc.toLowerCase());
        });
      } else {
        return this[this.determineCurrentKey()];
      }
    },
    ligneAutoComplete: function ligneAutoComplete() {
      return this.credit_family.map(function (el) {
        return _objectSpread({
          text: el.parent
        }, el);
      });
    },
    showBtnGenerate: function showBtnGenerate() {
      if (!["", null, undefined].includes(this.formDataToBeWatched.type_de_clientele) && this.formDataToBeWatched.ligne_credits.length > 0 || this.formDataToBeWatched.suretes_reelles.length > 0 || this.formDataToBeWatched.surete_personneles.length > 0) {
        return true;
      }
      return false;
    }
  },
  data: function data() {
    var vm = this;
    return {
      activeMenu: "client",
      current_filter: "All",
      pieces_versees_list: [],
      pieces_versees_clients: [],
      pieces_versees_suretes: [],
      pieces_versees_credits: [],
      ebapisHost: _services_ebapis_service_js__WEBPACK_IMPORTED_MODULE_3__["default"].host,
      autorizeRole: ["gTz6TD6V0yVaXAssKaUg", "WUBaT1LB5GbXzr9ru2D3"],
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
      connectsHost: _services_connects_service_js__WEBPACK_IMPORTED_MODULE_4__["default"].loadablehost(),
      files: [],
      tag: '',
      tags: [],
      ligne_credits: [],
      search_credit_type: "",
      search_surete_personnele: "",
      search_surete_reelle: "",
      ligne_credit: "",
      suretes: [],
      surete: "",
      surete_personnele: '',
      surete_personneles: [],
      surete_reelle: '',
      suretes_reelles: [],
      isLoadingData: true,
      checkListSearchInput: null,
      // nb_ligne_credits_selected:0,
      // nb_surete_personneles_selected:0,
      // nb_suretes_reelles_selected:0,
      showCheckList: false,
      listingNote: false,
      tous_les_lignes_filtres: [].concat(_toConsumableArray(_services_afg_f8_constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].tous_les_lignes), _toConsumableArray(_services_afg_f8_constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].lignes_engagements_signatures)),
      showItems: false,
      showSureteProfessionelle: false,
      showSureteReele: false,
      credit_family: _services_afg_dajc_constants_js__WEBPACK_IMPORTED_MODULE_11__["default"].credit_family,
      surete_family: _services_afg_dajc_constants_js__WEBPACK_IMPORTED_MODULE_11__["default"].surete_family,
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
      RolesForContexMenu: ["DUxMP2ZQheGFreQt5z2s", "r472oAxtaFJSlsh5"],
      canNotDeleteTb: ["gTz6TD6V0yVaXAssKaUg", "WUBaT1LB5GbXzr9ru2D3"],
      meta_parseable: {
        cred_pub_key: this.meta_data["cred_pub_key"],
        tb_name: this.tb_name
      },
      type_de_clientele: "",
      personne_morale_type: "",
      personne_physique_type: "",
      type_credit: "",
      formDataToBeWatched: {
        notes: [],
        pieces_versees_list: [],
        comment_pieces_requises: "",
        type_de_clientele: "",
        ligne_credits: [],
        suretes_reelles: [],
        surete_personneles: [],
        arr_data: [],
        is_old_checklist: false
        // all_surete:[...this.formDataToBeWatched.suretes_reelles,...this.formDataToBeWatched.surete_personneles],
      },
      countries: [],
      client_type: _services_afg_dajc_constants_js__WEBPACK_IMPORTED_MODULE_11__["default"].client_type,
      carcasse_type: "",
      type_credits: "",
      data_automate_checker: {},
      get_old_data: false,
      pret_rachat_prive: ""
      // ligne_credits
    };
  },
  methods: {
    openContext: function openContext(event) {
      var _this$meta_data$dossi3;
      if (((_this$meta_data$dossi3 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi3 === void 0 || (_this$meta_data$dossi3 = _this$meta_data$dossi3.final_outcome) === null || _this$meta_data$dossi3 === void 0 ? void 0 : _this$meta_data$dossi3.outcome) != 0 && !this.isDAJC) return;
      this.$refs.menu.open(event, this.tb_name);
    },
    refreshChecklist: function refreshChecklist() {
      var _this$meta_data$dossi4;
      this.isLoadingData = true;
      if (((_this$meta_data$dossi4 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi4 === void 0 || (_this$meta_data$dossi4 = _this$meta_data$dossi4.categorie_client) === null || _this$meta_data$dossi4 === void 0 ? void 0 : _this$meta_data$dossi4.toUpperCase()) != "RETAIL") {
        var _this$meta_data$dossi5;
        if (((_this$meta_data$dossi5 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi5 === void 0 ? void 0 : _this$meta_data$dossi5.cred_pub_tb_200601) != undefined) {
          var _this$meta_data$dossi6, _this$meta_data$dossi7, _this$meta_data$dossi8, _this$meta_data$dossi9, _this$meta_data$dossi0;
          var categorie_client = (_this$meta_data$dossi6 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi6 === void 0 ? void 0 : _this$meta_data$dossi6.categorie_client;
          var current_key = (_this$meta_data$dossi7 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi7 === void 0 ? void 0 : _this$meta_data$dossi7.cred_pub_tb_200601;
          var options = {
            categorie_client: categorie_client,
            // type_de_clientele:current_key?.type_de_clientele,
            // ligne_credits:current_key?.ligne_credits,
            // surete_personneles:current_key?.surete_personneles,
            // suretes_reelles:current_key?.suretes_reelles

            type_credit: (_this$meta_data$dossi8 = (_this$meta_data$dossi9 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi9 === void 0 ? void 0 : _this$meta_data$dossi9.applied_templ_name) !== null && _this$meta_data$dossi8 !== void 0 ? _this$meta_data$dossi8 : "",
            occupation: "NA",
            filiale: (_this$meta_data$dossi0 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi0 === void 0 || (_this$meta_data$dossi0 = _this$meta_data$dossi0.caf_recorded_file) === null || _this$meta_data$dossi0 === void 0 ? void 0 : _this$meta_data$dossi0.filiale,
            is_group: "non"
          };
          this.sendrequest(options);
          // this.loadCheckListData(this.meta_data?.dossier_credit, use_dossier_credit)
        }
      }
    },
    dispatchSurete: function dispatchSurete(data) {
      var _this7 = this;
      var arr_personnelles = [];
      var arr_reelles = [];
      if (data.length > 0) {
        data.forEach(function (el, index) {
          var current_el = _this7.surete_family.find(function (item) {
            return item.slug == (el === null || el === void 0 ? void 0 : el.parent);
          });
          // console.log("current_el",current_el);
          if ((current_el === null || current_el === void 0 ? void 0 : current_el.to) == "personnelles") {
            arr_personnelles.push(el === null || el === void 0 ? void 0 : el.parent);
          } else {
            arr_reelles.push(el === null || el === void 0 ? void 0 : el.parent);
          }
        });
      }
      return {
        "arr_personnelles": arr_personnelles,
        "arr_reelles": arr_reelles,
        "arr_data": data
      };
    },
    highlightText: function highlightText(text, el) {
      var doc_name = this.$options.filters.highlight(text, this.checkListSearchInput);
      // if (el?.is_dajc == true) {
      //     doc_name = doc_name + ' <span class="text-orange fw-bold">(DAJC)</span>'
      // }
      if (el.is_required) {
        doc_name = doc_name + ' <span class="fw-bold" style="color:red">*</span>';
      }
      return doc_name;
    },
    getElementBySlug: function getElementBySlug(slug, type_element) {
      if (type_element == "type_de_clientele") {
        var _this$client_type;
        return (_this$client_type = this.client_type) === null || _this$client_type === void 0 || (_this$client_type = _this$client_type.find(function (el) {
          return el.slug == slug;
        })) === null || _this$client_type === void 0 ? void 0 : _this$client_type.name;
      }
      if (type_element == "ligne_credits") {
        var _this$credit_family;
        return (_this$credit_family = this.credit_family) === null || _this$credit_family === void 0 || (_this$credit_family = _this$credit_family.find(function (el) {
          return el.slug == slug;
        })) === null || _this$credit_family === void 0 ? void 0 : _this$credit_family.parent;
      }
      if (type_element == "surete_reeles") {
        var _this$surete_family$f3;
        return (_this$surete_family$f3 = this.surete_family.filter(function (el) {
          return el.to == "réelles";
        })) === null || _this$surete_family$f3 === void 0 || (_this$surete_family$f3 = _this$surete_family$f3.find(function (el) {
          return el.slug == slug;
        })) === null || _this$surete_family$f3 === void 0 ? void 0 : _this$surete_family$f3.parent;
      }
      if (type_element == "surete_personnelles") {
        var _this$surete_family$f4;
        return (_this$surete_family$f4 = this.surete_family.filter(function (el) {
          return el.to == "personnelles";
        })) === null || _this$surete_family$f4 === void 0 || (_this$surete_family$f4 = _this$surete_family$f4.find(function (el) {
          return el.slug == slug;
        })) === null || _this$surete_family$f4 === void 0 ? void 0 : _this$surete_family$f4.parent;

        // return this.surete_family[0].children?.find((el)=>el.slug == slug)?.parent
      }
    },
    handleItems: function handleItems(search_key, keys) {
      if (this[search_key].length > 0) {
        this[keys] = true;
      }
    },
    handleFocus: function handleFocus(search_key, keys) {
      this[keys] = true;
    },
    handleFocusOut: function handleFocusOut(search_key, keys, current_key) {
      this[keys] = false;
    },
    retractItems: function retractItems(keys) {
      this[keys] = !this[keys];
      if (this.showItems) {
        this.showSureteReele = false;
        this.showSureteProfessionelle = false;
      }
      if (this.showSureteReele) {
        this.showItems = false;
        this.showSureteProfessionelle = false;
      }
      if (this.showSureteProfessionelle) {
        this.showItems = false;
        this.showSureteReele = false;
      }
    },
    selectAll: function selectAll(keys, fiterItem_key) {
      return this.formDataToBeWatched[keys] = this[fiterItem_key].map(function (item) {
        return item.slug;
      });
    },
    clearSelection: function clearSelection(keys) {
      this.formDataToBeWatched[keys] = [];
    },
    handleTag: function handleTag(newTags, actualObject) {
      var stringObj = actualObject[0];
      var indexObj = actualObject[1];
      newTags = newTags.filter(function (el) {
        var find = credit_family.find(function (credit) {
          return (credit === null || credit === void 0 ? void 0 : credit.parent) == (el === null || el === void 0 ? void 0 : el.parent);
        });
        if (!['', null, undefined].includes(find)) {
          return el;
        }
      });
    },
    generateCheckList: function generateCheckList() {
      var _this$meta_data$dossi1, _this$meta_data9;
      // this.showCheckList = true
      var applied_templ_name = (_this$meta_data$dossi1 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi1 === void 0 ? void 0 : _this$meta_data$dossi1.applied_templ_name;
      var tbArrays = this.determineCredPubTables(applied_templ_name);
      this.loadCheckListData((_this$meta_data9 = this.meta_data) === null || _this$meta_data9 === void 0 ? void 0 : _this$meta_data9.dossier_credit, tbArrays[0], tbArrays[2], true);
    },
    getCreditBanques: function getCreditBanques() {
      var _this$meta_data0,
        _this8 = this;
      var categorie_client = (_this$meta_data0 = this.meta_data) === null || _this$meta_data0 === void 0 || (_this$meta_data0 = _this$meta_data0.dossier_credit) === null || _this$meta_data0 === void 0 ? void 0 : _this$meta_data0.categorie_client;
      _services_credit_service_js__WEBPACK_IMPORTED_MODULE_7__["default"].loadCreditBanques({
        categorie_client: categorie_client
      }).then(function (res) {
        _this8.type_credits = res.data;
        localStorage.setItem("banque_credit_types", JSON.stringify(res.data));
      })["catch"](function (err) {
        console.log(err);
      });
    },
    filteredContexMenu: function filteredContexMenu() {
      var _this9 = this;
      _services_auth_service_js__WEBPACK_IMPORTED_MODULE_5__["default"].loadUserData().then(function (res) {
        var _this9$authcheckUsr;
        _this9.authcheckUsr = res.data;
        // canNotDeleteTb
        if (_this9.canNotDeleteTb.includes((_this9$authcheckUsr = _this9.authcheckUsr) === null || _this9$authcheckUsr === void 0 ? void 0 : _this9$authcheckUsr.role_uuid)) {
          _this9.contextList.splice(2, 1);
        }
      })["catch"](function (err) {
        _this9.loadWithError(err);
      });
      //
    },
    loadingDefaultData: function loadingDefaultData(dossier_credit0, f0, f8, use_dossier_credit) {
      var _this$data_automate_c, _this$data_automate_c2, _this$data_automate_c3, _this$data_automate_c4, _this$data_automate_c5, _this$meta_data1;
      this.data_automate_checker = _services_afg_check_list_manager_js__WEBPACK_IMPORTED_MODULE_10__["default"].automateChecker(dossier_credit0, f0, f8, use_dossier_credit);
      var dispatchData = this.dispatchSurete((_this$data_automate_c = this.data_automate_checker) === null || _this$data_automate_c === void 0 ? void 0 : _this$data_automate_c.type_de_suretes);
      // console.log("concat test",[...new Set(this.data_automate_checker?.type_de_credits?.concat(this.meta_data?.dossier_credit?.cred_pub_tb_200601?.ligne_credits))], this.data_automate_checker?.type_de_credits);
      this.formDataToBeWatched.type_de_clientele = (_this$data_automate_c2 = this.data_automate_checker) === null || _this$data_automate_c2 === void 0 ? void 0 : _this$data_automate_c2.type_de_clientele;
      this.formDataToBeWatched.ligne_credits = (_this$data_automate_c3 = this.data_automate_checker) !== null && _this$data_automate_c3 !== void 0 && _this$data_automate_c3.use_dossier_credit ? (_this$data_automate_c4 = this.data_automate_checker) === null || _this$data_automate_c4 === void 0 ? void 0 : _this$data_automate_c4.type_de_credits : _toConsumableArray(new Set((_this$data_automate_c5 = this.data_automate_checker) === null || _this$data_automate_c5 === void 0 || (_this$data_automate_c5 = _this$data_automate_c5.type_de_credits) === null || _this$data_automate_c5 === void 0 ? void 0 : _this$data_automate_c5.concat((_this$meta_data1 = this.meta_data) === null || _this$meta_data1 === void 0 || (_this$meta_data1 = _this$meta_data1.dossier_credit) === null || _this$meta_data1 === void 0 || (_this$meta_data1 = _this$meta_data1.cred_pub_tb_200601) === null || _this$meta_data1 === void 0 ? void 0 : _this$meta_data1.ligne_credits)));
      this.formDataToBeWatched.suretes_reelles = dispatchData === null || dispatchData === void 0 ? void 0 : dispatchData.arr_reelles;
      this.formDataToBeWatched.surete_personneles = dispatchData === null || dispatchData === void 0 ? void 0 : dispatchData.arr_personnelles;
      this.formDataToBeWatched.arr_data = dispatchData === null || dispatchData === void 0 ? void 0 : dispatchData.arr_data;
      return {
        "type_de_clientele": this.formDataToBeWatched.type_de_clientele,
        "ligne_credits": this.formDataToBeWatched.ligne_credits,
        "suretes_reelles": this.formDataToBeWatched.suretes_reelles,
        "surete_personneles": this.formDataToBeWatched.surete_personneles
      };
    },
    sendrequest: function sendrequest(options) {
      var _this0 = this;
      this.pieces_versees_clients = [];
      this.pieces_versees_suretes = [];
      this.pieces_versees_credits = [];
      _services_afg_check_list_manager_js__WEBPACK_IMPORTED_MODULE_10__["default"].load(this.ebapisHost, options).then(function (response) {
        _this0.isLoadingData = false;
        var check_list_data = response.check_list_document;
        if (check_list_data.length > 0) {
          var _this0$meta_data;
          _this0.pieces_versees_list = check_list_data;
          var pieces_versees = _toConsumableArray(check_list_data);
          _this0.pieces_versees_list = pieces_versees;
          check_list_data = pieces_versees;

          // if(this.meta_data['dossier_credit']?.cred_pub_tb_200601 != undefined){
          //     let exist_data = this.meta_data['dossier_credit']?.cred_pub_tb_200601?.pieces_versees_list

          //     if(exist_data?.length > 0){
          //         check_list_data?.forEach((el,index) => {
          //             let check_obj = exist_data?.find((item) => item.name.trim() == el.name.trim())
          //             if(check_obj){
          //                 if(check_obj?.checked || check_obj?.files > 0  || check_obj?.value){
          //                     el.id = check_obj?.id
          //                     el.files = check_obj?.files
          //                     el.value = check_obj?.value
          //                     el.checked = check_obj?.checked
          //                     el.template = check_obj?.template
          //                     el.comment = check_obj?.comment
          //                     el.remarque_dajc = check_obj?.remarque_dajc

          //                 }
          //             }
          //         })
          //         exist_data?.forEach((el,index) => {
          //             let check_obj = check_list_data?.find((item) => item.name.trim() == el.name.trim())
          //             if (check_obj == undefined) {
          //                 check_list_data.push(el)
          //             }
          //         })

          //     }

          // }

          check_list_data.forEach(function (liste) {
            if (liste.id == "") {
              liste.id = (0,uuid__WEBPACK_IMPORTED_MODULE_15__["default"])();
            }
          });
          _this0.pieces_versees_list = check_list_data;
          _this0.pieces_versees_clients = pieces_versees === null || pieces_versees === void 0 ? void 0 : pieces_versees.filter(function (liste) {
            return liste.is_client == true;
          });
          _this0.pieces_versees_suretes = pieces_versees === null || pieces_versees === void 0 ? void 0 : pieces_versees.filter(function (liste) {
            return liste.is_surete == true;
          });
          _this0.pieces_versees_credits = pieces_versees === null || pieces_versees === void 0 ? void 0 : pieces_versees.filter(function (liste) {
            return liste.is_credit == true;
          });
          if (['Retail'].includes((_this0$meta_data = _this0.meta_data) === null || _this0$meta_data === void 0 || (_this0$meta_data = _this0$meta_data.dossier_credit) === null || _this0$meta_data === void 0 ? void 0 : _this0$meta_data.categorie_client)) {} else {

            // this.pieces_versees_clients = this.pieces_versees_list?.filter(
            //             (liste) => liste.is_client == true
            //         );

            // this.pieces_versees_clients = pieces_versees?.filter((liste) => {
            //     if (liste.is_client == true) {
            //         if (this.formDataToBeWatched.type_de_clientele == 'ong_et_associations') {
            //             if (liste?.type_clientele.includes(this.formDataToBeWatched.type_de_clientele)) {
            //                 return true
            //             }
            //             return false
            //         } else {
            //             return true
            //         }
            //     }
            //     return false
            // })

            // this.pieces_versees_suretes = this.pieces_versees_list?.filter(
            //             (liste) => liste.is_surete == true
            //         );

            // this.pieces_versees_credits = this.pieces_versees_list?.filter(
            //             (liste) => liste.is_credit == true
            //         );

            // let filtered_f8_surete = []
            // let filtered_extra_check_doc = {}
            // filtered_extra_check_doc['type_personne'] = []
            // filtered_extra_check_doc['type_emplacement'] = []

            // this.formDataToBeWatched?.arr_data.forEach(el => {
            //     filtered_f8_surete = filtered_f8_surete.concat(el?.children);
            //     if (!['', null, undefined].includes(el?.extra_check_doc)) {
            //         filtered_extra_check_doc['type_emplacement'] = filtered_extra_check_doc['type_emplacement'].concat(el?.extra_check_doc?.type_emplacement)
            //         filtered_extra_check_doc['type_personne'] = filtered_extra_check_doc['type_personne'].concat(el?.extra_check_doc?.type_personne)
            //     }
            // });

            // console.log('filtered_f8_surete', filtered_f8_surete)

            // const temp = this.pieces_versees_suretes
            // this.pieces_versees_suretes = []

            // temp.forEach(el => {

            //     if (el?.f8_surete) {

            //         let find = false

            //         filtered_f8_surete.forEach(f => {
            //             if (el.f8_surete.includes(f)) {
            //                 find = true
            //             }
            //         });

            //         if (!['', null, undefined].includes(el?.f8_surete_extra)) {
            //             find = false

            //             if (!['', null, undefined].includes(el?.f8_surete_extra['type_emplacement'])) {
            //                 filtered_extra_check_doc['type_emplacement'].forEach(f => {
            //                     if (el.f8_surete_extra['type_emplacement'].includes(f)) {
            //                         find = true
            //                     }
            //                 });
            //             }

            //             if (!['', null, undefined].includes(el?.f8_surete_extra['type_personne'])) {
            //                 filtered_extra_check_doc['type_personne'].forEach(f => {
            //                     if (el.f8_surete_extra['type_personne'].includes(f)) {
            //                         find = true
            //                     }
            //                 });
            //             }
            //         }

            //         if (find) {

            //             this.pieces_versees_suretes.push(el)
            //         }

            //     } else {

            //         if (el.default == false) {

            //             this.pieces_versees_suretes.push(el)

            //         }

            //     }

            // });

            // console.log("pieces_versees after loadBalancingCrosstab",this.pieces_versees_suretes.filter((el)=>el.name == "Les Statuts signés et enregistrés du constituant"));

            // console.log("pieces_versees after loadBalancingCrosstab",this.pieces_versees_clients.filter((el)=>el.name == "La fiche de cotation ES"));
          }
          _this0.handleInput();
        }
      })["catch"](function (error) {
        // this.$Progress.finish();
        console.log(error);
        _this0.isLoadingData = false;
      });
    },
    loadBalancingCrosstab: function loadBalancingCrosstab() {
      var _this$formDataToBeWat,
        _this$formDataToBeWat2,
        _this$formDataToBeWat3,
        _this$formDataToBeWat4,
        _this1 = this;
      var pieces = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var suretes_reelles = (_this$formDataToBeWat = (_this$formDataToBeWat2 = this.formDataToBeWatched) === null || _this$formDataToBeWat2 === void 0 ? void 0 : _this$formDataToBeWat2.suretes_reelles) !== null && _this$formDataToBeWat !== void 0 ? _this$formDataToBeWat : [];
      var surete_personneles = (_this$formDataToBeWat3 = (_this$formDataToBeWat4 = this.formDataToBeWatched) === null || _this$formDataToBeWat4 === void 0 ? void 0 : _this$formDataToBeWat4.surete_personneles) !== null && _this$formDataToBeWat3 !== void 0 ? _this$formDataToBeWat3 : [];
      if (suretes_reelles.length == 0 && surete_personneles.length == 0) {
        return pieces.filter(function (piece) {
          piece.is_surete = false;
        });
      }
      if (pieces.length > 0) {
        var tb = [];
        var copie_pieces = _toConsumableArray(pieces);
        var pieces_has_cross_tab = copie_pieces.filter(function (piece) {
          return (piece === null || piece === void 0 ? void 0 : piece.cross_tab) != undefined && piece.cross_tab.length > 0;
        });
        // let exepted_value = [{name:"gage_materiel_stock_machandises_produits_nantis",pp_key:"PPC",pm_key:"PMC"}]
        // console.log("pieces_has_cross_tab =>",pieces_has_cross_tab);

        if (pieces_has_cross_tab.length > 0) {
          pieces_has_cross_tab.forEach(function (pc) {
            var cross_tab = pc === null || pc === void 0 ? void 0 : pc.cross_tab;
            var autoriz_to_push = false;
            cross_tab.forEach(function (el0) {
              var copy_el = _objectSpread({}, pc);
              delete copy_el[cross_tab];
              if (_this1.formDataToBeWatched.arr_data.length > 0) {
                _this1.formDataToBeWatched.arr_data.forEach(function (arr) {
                  var current_arr = arr === null || arr === void 0 ? void 0 : arr.ens_family;
                  if (![undefined, null].includes(el0 === null || el0 === void 0 ? void 0 : el0.ens_family) && ![undefined, null].includes(current_arr)) {
                    if (current_arr !== null && current_arr !== void 0 && current_arr.includes(el0 === null || el0 === void 0 ? void 0 : el0.ens_family)) {
                      autoriz_to_push = true;
                    }
                  }
                  if (["hypotheque", "gage_materiel_stock_machandises_produits_nantis"].includes(arr === null || arr === void 0 ? void 0 : arr.parent)) {
                    var current_extra_check_doc = arr === null || arr === void 0 ? void 0 : arr.extra_check_doc;
                    if (arr.parent == 'gage_materiel_stock_machandises_produits_nantis') {
                      // if (pc?.name == "Un extrait d’acte de mariage (vérification du régime matrimonial)") {
                      //     autoriz_to_push = true
                      //     el0['f8_surete_extra'] = {"type_personne": [], "type_emplacement": []}
                      //     copy_el['f8_surete_extra'] = el0['f8_surete_extra']
                      // }

                      if (['extrait_acte_mariage_personne_physique_commercante'].includes(el0['cross_tab_slug'])) {
                        if (['', null, undefined].includes(el0['f8_surete_extra'])) {
                          el0['f8_surete_extra'] = {
                            "type_personne": [],
                            "type_emplacement": []
                          };
                        }
                      }
                    }
                    if (!['', null, undefined].includes(current_extra_check_doc)) {
                      if (!['', null, undefined].includes(el0 === null || el0 === void 0 ? void 0 : el0.f8_surete_extra)) {
                        autoriz_to_push = false;
                        copy_el['f8_surete_extra'] = el0['f8_surete_extra'];
                        current_extra_check_doc['type_personne'].forEach(function (el1) {
                          if (el0 !== null && el0 !== void 0 && el0.f8_surete_extra['type_personne'].includes(el1)) {
                            autoriz_to_push = true;
                          }
                        });
                      }
                    }
                  }
                });
              }
              copy_el['id'] = (0,uuid__WEBPACK_IMPORTED_MODULE_15__["default"])();
              copy_el['name'] = copy_el['name'] + ' ' + el0['cross_tab_name'];
              copy_el['is_client'] = el0['is_client'];
              copy_el['is_surete'] = el0['is_surete'];
              copy_el['is_credit'] = el0['is_credit'];

              // console.log("autoriz_to_push",autoriz_to_push);
              if (autoriz_to_push) {
                if (_this1.determineBoolFamily(pc) != _this1.determineBoolFamily(el0)) {
                  tb.push(copy_el);
                  // console.log("pc",this.determineBoolFamily(pc),"el0",this.determineBoolFamily(el0));
                  autoriz_to_push = false;
                }
              }
            });
          });
        }
        // console.log("tb",tb);
        return tb;
      }
    },
    organizeObject: function organizeObject(obj, return_obj) {
      if (obj.is_client) {
        return_obj[0]["pieces_versees_clients"].push(obj);
      }
      if (obj.is_credit) {
        return_obj[1]["pieces_versees_credits"].push(obj);
      }
      if (obj.is_surete) {
        return_obj[2]["pieces_versees_suretes"].push(obj);
      }
      return return_obj;
    },
    determineBoolFamily: function determineBoolFamily(obj) {
      if (obj.is_client) {
        return "is_client";
      }
      if (obj.is_credit) {
        return "is_credit";
      }
      if (obj.is_surete) {
        return "is_surete";
      }
    },
    filterObject: function filterObject() {
      var _this10 = this;
      var listeOfElement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var new_obj = _toConsumableArray(listeOfElement);

      // console.log("new_obj => ",new_obj);
      var a = ["is_client", "is_surete", "is_credit"];
      var return_obj = [{
        pieces_versees_clients: []
      }, {
        pieces_versees_credits: []
      }, {
        pieces_versees_suretes: []
      }];
      if ((listeOfElement === null || listeOfElement === void 0 ? void 0 : listeOfElement.length) > 0) {
        var _loop = function _loop() {
          var element = listeOfElement[index];
          if ((element === null || element === void 0 ? void 0 : element.cross_tab) != undefined && element.cross_tab.length > 0) {
            var cross_tab = element.cross_tab;
            // console.log("cross_tab true **");
            var mutated_item = "";
            cross_tab.forEach(function (item) {
              // console.log("cross_tab_name",item.cross_tab_name);
              var copied_element = element;
              var check_parent = _this10.determineBoolFamily(element);
              var array_filter_ = a.filter(function (el) {
                return el != check_parent;
              });

              // console.log("copied_element.name",copied_element.name, check_parent,array_filter_);

              if (item.is_client) {
                copied_element.is_client = true;
                mutated_item = element.name + " " + item.cross_tab_name;
                copied_element.name = mutated_item;
                return_obj[0]["pieces_versees_clients"].push(copied_element);

                // delete copied_element.cross_tab
              }
              if (item.is_credit) {
                copied_element.is_credit = true;
                mutated_item = element.name + " " + item.cross_tab_name;
                copied_element.name = mutated_item;
                return_obj[1]["pieces_versees_credits"].push(copied_element);

                // delete copied_element.cross_tab
              }
              if (item.is_surete) {
                copied_element.is_surete = true;
                mutated_item = element.name + " " + item.cross_tab_name;
                copied_element.name = mutated_item;
                return_obj[2]["pieces_versees_suretes"].push(copied_element);
              }
            });
          } else {
            return_obj = _this10.organizeObject(element, return_obj);
          }
        };
        for (var index = 0; index < listeOfElement.length; index++) {
          _loop();
        }
      }
      return return_obj;
    },
    loadCheckListData: function loadCheckListData() {
      var _this$meta_data$dossi10, _this$meta_data$dossi11, _this$meta_data$dossi12, _this$meta_data$dossi13;
      var categorie_client = (_this$meta_data$dossi10 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi10 === void 0 ? void 0 : _this$meta_data$dossi10.categorie_client;
      var options = {
        categorie_client: categorie_client,
        type_credit: (_this$meta_data$dossi11 = (_this$meta_data$dossi12 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi12 === void 0 ? void 0 : _this$meta_data$dossi12.applied_templ_name) !== null && _this$meta_data$dossi11 !== void 0 ? _this$meta_data$dossi11 : "",
        occupation: "NA",
        filiale: (_this$meta_data$dossi13 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi13 === void 0 || (_this$meta_data$dossi13 = _this$meta_data$dossi13.caf_recorded_file) === null || _this$meta_data$dossi13 === void 0 ? void 0 : _this$meta_data$dossi13.filiale,
        is_group: "non"
      };
      this.sendrequest(options);
    },
    toggleMenu: function toggleMenu(activeMenu) {
      this.activeMenu = activeMenu;
    },
    removeAutreSurete: function removeAutreSurete(index) {
      this.formDataToBeWatched.autres_suretes_diverses.splice(index, 1);
    },
    tableClosedOrOpened: function tableClosedOrOpened() {
      this.seen = this.fetchClosedTables(this.tb_name + this.meta_data["cred_pub_key"]);
    },
    openNotesModal: function openNotesModal() {
      var listing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.listingNote = listing;
      this.$modal.show(this.tb_name);
    },
    checkboxValCashCall: function checkboxValCashCall(event, index) {
      if (event.target.checked) {
        if (this.activeMenu == "client") {
          this.pieces_versees_clients[index]["value"] = event.target.value;
        } else if (this.activeMenu == "credit") {
          //
          this.pieces_versees_credits[index]["value"] = event.target.value;
        } else {
          this.pieces_versees_suretes[index]["value"] = event.target.value;
        }
        // this.pieces_versees_list[index]["value"] = event.target.value;
      } else {
        if (this.activeMenu == "client") {
          this.pieces_versees_clients[index]["value"] = "";
        } else if (this.activeMenu == "credit") {
          //
          this.pieces_versees_credits[index]["value"] = event.target.value;
        } else {
          this.pieces_versees_suretes[index]["value"] = "";
        }
      }
      this.handleInput();
    },
    getNgrams: function getNgrams(str, n) {
      var ngrams = [];
      for (var i = 0; i <= str.length - n; i++) {
        ngrams.push(str.substring(i, i + n));
      }
      return ngrams;
    },
    similarityPercentage: function similarityPercentage(str1, str2, n) {
      var ngrams1 = new Set(this.getNgrams(str1, n));
      var ngrams2 = new Set(this.getNgrams(str2, n));
      var intersection = new Set(_toConsumableArray(ngrams1).filter(function (x) {
        return ngrams2.has(x);
      }));
      var union = new Set([].concat(_toConsumableArray(ngrams1), _toConsumableArray(ngrams2)));
      return intersection.size / union.size * 100;
    },
    loadRetrieved: function loadRetrieved() {
      var _this$meta_data$dossi14;
      var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];
      var applied_templ_name = (_this$meta_data$dossi14 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi14 === void 0 ? void 0 : _this$meta_data$dossi14.applied_templ_name;
      var tbArrays = this.determineCredPubTables(applied_templ_name);
      if (this.meta_data["dossier_credit"][createdKey] == undefined) {
        var _this$meta_data10;
        this.loadCheckListData((_this$meta_data10 = this.meta_data) === null || _this$meta_data10 === void 0 ? void 0 : _this$meta_data10.dossier_credit, tbArrays[0], tbArrays[2], true);
      }
      if (lentb.length > 0) {
        if (this.meta_data["dossier_credit"][createdKey] != undefined) {
          var _this$meta_data$dossi15;
          this.formDataToBeWatched = this.meta_data["dossier_credit"][createdKey];
          if (((_this$meta_data$dossi15 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi15 === void 0 ? void 0 : _this$meta_data$dossi15.pieces_versees_list) != undefined) {
            var _this$meta_data$dossi16;
            if (((_this$meta_data$dossi16 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi16 === void 0 ? void 0 : _this$meta_data$dossi16.pieces_versees_list) != "") {
              this.showCheckList = true;
              this.pieces_versees_list = this.meta_data["dossier_credit"][createdKey]["pieces_versees_list"];
            }
            this.pieces_versees_clients = this.pieces_versees_list.filter(function (liste) {
              return liste.is_client == true;
            });
            this.pieces_versees_suretes = this.pieces_versees_list.filter(function (liste) {
              return liste.is_surete == true;
            });
            this.pieces_versees_credits = this.pieces_versees_list.filter(function (liste) {
              return liste.is_credit == true;
            });
          }
          this.isLoadingData = false;
        }
      }
    },
    convertNumber: function convertNumber(valeur) {
      return Number(String(valeur).replace(/\s+/g, ""));
    },
    // AJOUTER
    launchAutoSaver: function launchAutoSaver() {
      var _this11 = this;
      _services_auth_service_js__WEBPACK_IMPORTED_MODULE_5__["default"].loadUserData().then(function (res) {
        _this11.send2Backend(res, 0, 0);
      })["catch"](function (err) {
        _this11.loadWithError(err);
      });
    },
    addMore: function addMore() {
      var obj = {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_15__["default"])(),
        name: "",
        type_clientele: ["morale_ordinaire", "physique_ordinaire", "physique_commercante", "societes_commerciales", "ong_et_associations", "sci"],
        type_credits: ["avance_sur_facture_bon_de_commande", "pret_amortissables", "ouverture_de_credit_negoce_icafe_cacao", "cautions_sur_marche", "cautions_fiscales_et_diverses", "credit_enlevement", "les_obligations_cautionnees", "entrepots_fictifs", "aval_sur_effet", "credit_bail"],
        surete: ["nantissement_de_titres", "nantissement_de_compte", "nantissement_de_marche_public", "gage_materiel_stock_machandises_produits_nantis", "gage_de_vehicule", "nantissement_de_fdc_au_materiel", "cession_creance", "hypotheque", "cautionnement_solidaire_et_personnel", "garanties_autonomes_et_contre_garanties_autonomes"],
        value: "",
        checked: true,
        disabled: false,
        files: 0,
        template: "",
        comment: "",
        is_client: this.activeMenu == "client" ? true : false,
        is_surete: this.activeMenu == "surete" ? true : false,
        is_credit: this.activeMenu == "credit" ? true : false,
        "default": false,
        is_dajc: false
      };
      if (this.activeMenu == "client") {
        this.pieces_versees_clients.push(obj);
      } else if (this.activeMenu == "credit") {
        this.pieces_versees_credits.push(obj);
      } else {
        this.pieces_versees_suretes.push(obj);
      }
    },
    remove: function remove(index) {
      if (this.activeMenu == "client") {
        this.pieces_versees_clients = this.pieces_versees_clients.filter(function (pieces_versees) {
          return pieces_versees.id !== index;
        });
      } else if (this.activeMenu == "credit") {
        this.pieces_versees_credits = this.pieces_versees_credits.filter(function (pieces_versees) {
          return pieces_versees.id !== index;
        });
      } else {
        this.pieces_versees_suretes = this.pieces_versees_suretes.filter(function (pieces_versees) {
          return pieces_versees.id !== index;
        });
      }
      this.handleInput();
      // this.pieces_versees_list.splice(index, 1);
    },
    somX3: function somX3(ob, key) {
      var som = 0;
      ob.filter(function (elm) {
        var _elm$key;
        som += parseInt((_elm$key = elm[key]) === null || _elm$key === void 0 ? void 0 : _elm$key.toString().replace(/\s/g, ""));
      });
      return som;
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
        id: "dcp-ppo7-head"
      };
      this.$emit("load-buffer", p);
    },
    retract: function retract() {
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
      if (this.authcheck) {
        this.$emit("autosaving");
        this.$axios.post(this.ebapisHost + "creditbuilder/api/v1/autosaving/", {
          user: this.authcheckUsr,
          meta_parseable: this.meta_parseable,
          filledData: this.formDataToBeWatched
        }).then(function (response) {
          this.$emit("autosaving");
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
      this.formDataToBeWatched.pieces_versees_list = [].concat(_toConsumableArray(this.pieces_versees_clients), _toConsumableArray(this.pieces_versees_suretes), _toConsumableArray(this.pieces_versees_credits));
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
      if (confirm("Êtes-vous sûr de vouloir supprimer ce tableau ?")) {
        this.$emit("delete-tb", {
          tb_name: this.tb_name
        });
      }
    },
    handleDoubleClickOrClick: function handleDoubleClickOrClick(event, index) {
      var _this12 = this;
      var current_key = this.determineCurrentKey();
      EventBus.$emit("open-extra-file-explorer");
      setTimeout(function () {
        var _this12$current_key$i, _this12$current_key$i2, _this12$current_key$i3;
        EventBus.$emit("data-extra-file-explorer", {
          name: ((_this12$current_key$i = _this12[current_key][index]) === null || _this12$current_key$i === void 0 ? void 0 : _this12$current_key$i.name) + " {(*)}" + current_key + '_' + ((_this12$current_key$i2 = _this12[current_key][index]) === null || _this12$current_key$i2 === void 0 ? void 0 : _this12$current_key$i2.id),
          template: (_this12$current_key$i3 = _this12[current_key][index]) === null || _this12$current_key$i3 === void 0 ? void 0 : _this12$current_key$i3.template,
          view: _this12.isDAJC
        });
      }, 500);
    },
    determineCurrentKey: function determineCurrentKey() {
      if (this.activeMenu == "client") {
        return "pieces_versees_clients";
      } else if (this.activeMenu == "credit") {
        return "pieces_versees_credits";
      } else {
        return "pieces_versees_suretes";
      }
    },
    getFiles: function getFiles() {
      var _this13 = this;
      _services_proxy_service_js__WEBPACK_IMPORTED_MODULE_6__["default"].proxyEbapis({
        url: this.connectsHost + "api/get-files",
        method: "POST",
        data: {
          file_identity: this.meta_data["dossier_credit"].cred_pub_key
        }
      })
      //this.$axios.post(this.connectsHost + 'api/get-files', { file_identity: this.meta_data["dossier_credit"].cred_pub_key })
      .then(function (res) {
        var _res$data$data, _res$data$data2;
        res.data = JSON.parse(res.data);
        if (((_res$data$data = res.data.data) === null || _res$data$data === void 0 ? void 0 : _res$data$data.length) > 0 || ((_res$data$data2 = res.data.data) === null || _res$data$data2 === void 0 ? void 0 : _res$data$data2.length) != null) {
          _this13.files = res.data.data;
          var current_key = _this13.determineCurrentKey();
          _this13[current_key].forEach(function (element, index) {
            var count = 0;
            _this13.files.forEach(function (file) {
              var _element$template;
              if ((file === null || file === void 0 ? void 0 : file.extra_file_template_id) != null && (element === null || element === void 0 || (_element$template = element.template) === null || _element$template === void 0 ? void 0 : _element$template.id) == (file === null || file === void 0 ? void 0 : file.extra_file_template_id)) {
                count++;
              }
            });
            _this13[current_key][index]["files"] = count;
            _this13.handleInput();
          });
        }
      })["catch"](function (err) {
        console.error(err);
      });
    }
  },
  watch: {
    formDataToBeWatched: {
      handler: function handler(newVal, oldVal) {
        var obj = JSON.parse(JSON.stringify(newVal));
        if ([null, undefined].includes(obj.comment_pieces_requises)) {
          obj.comment_pieces_requises = "";
        }
        this.autosaving(obj, oldVal);
        // ? Cache management
        // this.saveDataInCache(newVal, oldVal);
      },
      deep: true,
      immediate: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/afg/filiale/DAJ-PR-CORPORATE-OLD.vue?vue&type=template&id=b738c67c&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/afg/filiale/DAJ-PR-CORPORATE-OLD.vue?vue&type=template&id=b738c67c&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$meta_data$dossier, _vm$formDataToBeWatch, _vm$meta_data, _vm$formDataToBeWatch2, _vm$formDataToBeWatch3, _vm$formDataToBeWatch4, _vm$meta_data2, _vm$getElementBySlug4, _vm$carcasse_type, _vm$filteredCheckList, _this$meta_data$dossi, _vm$formDataToBeWatch5;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    on: {
      contextmenu: function contextmenu($event) {
        $event.preventDefault();
        return _vm.openContext($event);
      }
    }
  }, [_c("div", {
    staticClass: "row bg-light card-width-height"
  }, [!((_vm$meta_data$dossier = _vm.meta_data["dossier_credit"]) !== null && _vm$meta_data$dossier !== void 0 && (_vm$meta_data$dossier = _vm$meta_data$dossier.final_outcome) !== null && _vm$meta_data$dossier !== void 0 && _vm$meta_data$dossier.outcome) != 0 || _vm.isDAJC ? _c("ContextMenu", {
    ref: "menu",
    attrs: {
      id: _vm.tb_name,
      cred_pub_key: _vm.meta_parseable.cred_pub_key,
      tb_name: _vm.tb_name,
      contextList: _vm.contextList
    }
  }) : _vm._e(), _vm._v(" "), _vm.seen === true ? _c("div", {
    staticClass: "card card-width-height"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc pb-0 pt-2"
  }, [_c("h6", {
    ref: "topdiv",
    staticClass: "head",
    attrs: {
      id: "dcp-ppo7-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Documentation(s) requise(s)\n                            ")]), _vm._v(" "), _c("div", {
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
  })], 1)])])]), _vm._v(" "), ["", null, undefined].includes(_vm.authcheckUsr) ? _c("div", {
    staticClass: "card-body"
  }, [_vm._m(0)]) : _c("div", {
    staticClass: "card-body mt-1"
  }, [_c("div", {
    staticClass: "row p-0"
  }, [_c("div", {
    staticClass: "col-12 p-0 position-relative"
  }, [_c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !["Retail"].includes((_vm$meta_data = _vm.meta_data) === null || _vm$meta_data === void 0 || (_vm$meta_data = _vm$meta_data.dossier_credit) === null || _vm$meta_data === void 0 ? void 0 : _vm$meta_data.categorie_client),
      expression: "!['Retail'].includes(meta_data?.dossier_credit?.categorie_client)"
    }],
    staticClass: "card-body pt-2 pb-0"
  }, [_c("table", {
    staticClass: "table table-bordered mb-0"
  }, [_vm._m(1), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", [_c("div", {
    staticClass: "d-flex justify-content-center"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.type_de_clientele,
      expression: "formDataToBeWatched.type_de_clientele"
    }],
    staticClass: "form-select single-select",
    staticStyle: {
      width: "50%"
    },
    attrs: {
      required: "",
      id: "type_de_clientele",
      disabled: _vm.isDAJC
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formDataToBeWatched, "type_de_clientele", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, function ($event) {
        return _vm.refreshChecklist();
      }]
    }
  }, [_c("option", {
    attrs: {
      disabled: "",
      selected: ""
    }
  }, [_vm._v("\n                                                        --- Sélectionner le type de clientèle --\n                                                    ")]), _vm._v(" "), _vm._m(2), _vm._v(" "), _vm._m(3), _vm._v(" "), _vm._m(4)])])])])])]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mb-0"
  }, [_vm._m(5), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {
    staticClass: "col-6"
  }, [_c("div", {
    staticClass: "select-with-checkbox"
  }, [_c("div", {
    staticClass: "position-relative"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.search_credit_type,
      expression: "search_credit_type"
    }],
    staticClass: "form-control",
    staticStyle: {
      "min-width": "200px"
    },
    attrs: {
      type: "text",
      disabled: _vm.isDAJC,
      placeholder: "Rechercher le type de crédit"
    },
    domProps: {
      value: _vm.search_credit_type
    },
    on: {
      focus: function focus($event) {
        return _vm.handleFocus("search_credit_type", "showItems");
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.search_credit_type = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("i", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.showItems,
      expression: "!showItems"
    }],
    staticClass: "icofont-thin-down",
    staticStyle: {
      "font-weight": "bold",
      position: "absolute",
      right: "18px",
      top: "10px",
      "font-size": "17px"
    },
    on: {
      click: function click($event) {
        return _vm.retractItems("showItems");
      }
    }
  }), _vm._v(" "), _c("i", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.showItems,
      expression: "showItems"
    }],
    staticClass: "icofont-thin-up",
    staticStyle: {
      "font-weight": "bold",
      position: "absolute",
      right: "18px",
      top: "10px",
      "font-size": "17px"
    },
    on: {
      click: function click($event) {
        return _vm.retractItems("showItems");
      }
    }
  })]), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.showItems,
      expression: "showItems"
    }],
    staticClass: "shadow border border-1 options",
    staticStyle: {
      padding: "10px 8px 8px 8px"
    }
  }, [_c("ul", {
    staticClass: "postion-absolue",
    on: {
      change: _vm.refreshChecklist
    }
  }, _vm._l(_vm.filteredItems, function (item) {
    return _c("li", {
      key: item.slug + "az",
      staticClass: "nowrap d-block text-truncate",
      staticStyle: {
        "min-width": "100px"
      },
      attrs: {
        title: item.parent
      }
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.formDataToBeWatched.ligne_credits,
        expression: "formDataToBeWatched.ligne_credits"
      }],
      staticClass: "form-check-input",
      staticStyle: {
        width: "20px",
        height: "20px"
      },
      attrs: {
        type: "checkbox",
        id: item.slug
      },
      domProps: {
        value: item.slug,
        checked: Array.isArray(_vm.formDataToBeWatched.ligne_credits) ? _vm._i(_vm.formDataToBeWatched.ligne_credits, item.slug) > -1 : _vm.formDataToBeWatched.ligne_credits
      },
      on: {
        change: [function ($event) {
          var $$a = _vm.formDataToBeWatched.ligne_credits,
            $$el = $event.target,
            $$c = $$el.checked ? true : false;
          if (Array.isArray($$a)) {
            var $$v = item.slug,
              $$i = _vm._i($$a, $$v);
            if ($$el.checked) {
              $$i < 0 && _vm.$set(_vm.formDataToBeWatched, "ligne_credits", $$a.concat([$$v]));
            } else {
              $$i > -1 && _vm.$set(_vm.formDataToBeWatched, "ligne_credits", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
            }
          } else {
            _vm.$set(_vm.formDataToBeWatched, "ligne_credits", $$c);
          }
        }, function ($event) {
          return _vm.refreshChecklist();
        }]
      }
    }), _vm._v(" "), _c("label", {
      attrs: {
        "for": item.slug
      }
    }, [_vm._v("\n                                                                    " + _vm._s(item.parent.length > 50 ? item.parent.slice(0, 49) + "..." : item.parent) + "\n\n                                                                ")])]);
  }), 0), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-between pt-2"
  }, [_c("button", {
    staticClass: "btn shadow-md text-white",
    staticStyle: {
      background: "#2c3e50",
      "max-width": "max-content"
    },
    attrs: {
      type: "button",
      name: "button"
    },
    on: {
      click: function click($event) {
        return _vm.selectAll("ligne_credits", "filteredItems");
      }
    }
  }, [_vm._v("\n                                                                Tous sélctionner\n                                                            ")]), _vm._v(" "), _c("button", {
    staticClass: "btn shadow-md text-white",
    staticStyle: {
      background: "#2c3e50",
      "max-width": "max-content"
    },
    attrs: {
      type: "button",
      name: "button"
    },
    on: {
      click: function click($event) {
        return _vm.clearSelection("ligne_credits", "filteredSuretePersonnelle");
      }
    }
  }, [_vm._v("\n                                                                Tous éffacer\n                                                            ")])])])])]), _vm._v(" "), _c("td", {
    staticClass: "col-6"
  }, [((_vm$formDataToBeWatch2 = _vm.formDataToBeWatched.ligne_credits) === null || _vm$formDataToBeWatch2 === void 0 ? void 0 : _vm$formDataToBeWatch2.length) > 0 ? _c("div", [_c("ul", {
    staticClass: "postion-absolue"
  }, _vm._l(_vm.formDataToBeWatched.ligne_credits, function (ligne_cred) {
    var _vm$getElementBySlug;
    return _c("li", {
      key: ligne_cred,
      staticClass: "nowrap d-block text-truncate",
      staticStyle: {
        "min-width": "100px"
      },
      attrs: {
        title: _vm.getElementBySlug(ligne_cred, "ligne_credits")
      }
    }, [_c("label", [_vm._v("\n\n                                                                – " + _vm._s(((_vm$getElementBySlug = _vm.getElementBySlug(ligne_cred, "ligne_credits")) === null || _vm$getElementBySlug === void 0 ? void 0 : _vm$getElementBySlug.length) > 28 ? _vm.getElementBySlug(ligne_cred, "ligne_credits").slice(0, 29) + "..." : _vm.getElementBySlug(ligne_cred, "ligne_credits")) + "\n                                                            ")])]);
  }), 0)]) : _c("div", {
    staticClass: "text-center"
  }, [_c("span", {
    staticClass: "text-danger"
  }, [_vm._v("Aucune ligne de crédit sélectionné")])])])])])]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mb-0"
  }, [_vm._m(6), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {
    staticClass: "col-6"
  }, [_c("div", {
    staticClass: "select-with-checkbox"
  }, [_c("div", {
    staticClass: "position-relative"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.search_surete_reelle,
      expression: "search_surete_reelle"
    }],
    staticClass: "form-control",
    staticStyle: {
      "min-width": "200px"
    },
    attrs: {
      type: "text",
      disabled: _vm.isDAJC,
      placeholder: "Rechercher une surété réelle"
    },
    domProps: {
      value: _vm.search_surete_reelle
    },
    on: {
      focus: function focus($event) {
        return _vm.handleFocus("search_surete_reelle", "showSureteReele");
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.search_surete_reelle = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("i", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.showSureteReele,
      expression: "!showSureteReele"
    }],
    staticClass: "icofont-thin-down",
    staticStyle: {
      "font-weight": "bold",
      position: "absolute",
      right: "18px",
      top: "10px",
      "font-size": "17px"
    },
    on: {
      click: function click($event) {
        return _vm.retractItems("showSureteReele");
      }
    }
  }), _vm._v(" "), _c("i", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.showSureteReele,
      expression: "showSureteReele"
    }],
    staticClass: "icofont-thin-up",
    staticStyle: {
      "font-weight": "bold",
      position: "absolute",
      right: "18px",
      top: "10px",
      "font-size": "17px"
    },
    on: {
      click: function click($event) {
        return _vm.retractItems("showSureteReele");
      }
    }
  })]), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.showSureteReele,
      expression: "showSureteReele"
    }],
    staticClass: "shadow border border-1 options",
    staticStyle: {
      padding: "10px 8px 8px 8px"
    }
  }, [_c("ul", {
    staticClass: "postion-absolue"
  }, _vm._l(_vm.filteredSureteReele, function (item) {
    return _c("li", {
      key: item.slug,
      staticClass: "nowrap d-block text-truncate",
      staticStyle: {
        "min-width": "100px"
      },
      attrs: {
        title: item.parent
      }
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.formDataToBeWatched.suretes_reelles,
        expression: "formDataToBeWatched.suretes_reelles"
      }],
      staticClass: "form-check-input",
      staticStyle: {
        width: "20px",
        height: "20px"
      },
      attrs: {
        type: "checkbox",
        id: item.slug
      },
      domProps: {
        value: item.slug,
        checked: Array.isArray(_vm.formDataToBeWatched.suretes_reelles) ? _vm._i(_vm.formDataToBeWatched.suretes_reelles, item.slug) > -1 : _vm.formDataToBeWatched.suretes_reelles
      },
      on: {
        change: function change($event) {
          var $$a = _vm.formDataToBeWatched.suretes_reelles,
            $$el = $event.target,
            $$c = $$el.checked ? true : false;
          if (Array.isArray($$a)) {
            var $$v = item.slug,
              $$i = _vm._i($$a, $$v);
            if ($$el.checked) {
              $$i < 0 && _vm.$set(_vm.formDataToBeWatched, "suretes_reelles", $$a.concat([$$v]));
            } else {
              $$i > -1 && _vm.$set(_vm.formDataToBeWatched, "suretes_reelles", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
            }
          } else {
            _vm.$set(_vm.formDataToBeWatched, "suretes_reelles", $$c);
          }
        }
      }
    }), _vm._v(" "), _c("label", {
      attrs: {
        "for": item.slug
      }
    }, [_vm._v("\n                                                                " + _vm._s(item.parent.length > 50 ? item.parent.slice(0, 49) + "..." : item.parent) + "\n\n                                                            ")])]);
  }), 0), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-between pt-2"
  }, [_c("button", {
    staticClass: "btn shadow-md text-white",
    staticStyle: {
      background: "#2c3e50",
      "max-width": "max-content"
    },
    attrs: {
      type: "button",
      name: "button"
    },
    on: {
      click: function click($event) {
        return _vm.selectAll("suretes_reelles", "filteredSureteReele");
      }
    }
  }, [_vm._v("\n                                                            Tous sélctionner\n                                                        ")]), _vm._v(" "), _c("button", {
    staticClass: "btn shadow-md text-white",
    staticStyle: {
      background: "#2c3e50",
      "max-width": "max-content"
    },
    attrs: {
      type: "button",
      name: "button"
    },
    on: {
      click: function click($event) {
        return _vm.clearSelection("suretes_reelles", "filteredSureteReele");
      }
    }
  }, [_vm._v("\n                                                            Tous éffacer\n                                                        ")])])])])]), _vm._v(" "), _c("td", {
    staticClass: "col-6"
  }, [((_vm$formDataToBeWatch3 = _vm.formDataToBeWatched.suretes_reelles) === null || _vm$formDataToBeWatch3 === void 0 ? void 0 : _vm$formDataToBeWatch3.length) > 0 ? _c("div", [_c("ul", {
    staticClass: "postion-absolue"
  }, _vm._l(_vm.formDataToBeWatched.suretes_reelles, function (surete_reele) {
    var _vm$getElementBySlug2;
    return _c("li", {
      key: surete_reele,
      staticClass: "nowrap d-block text-truncate",
      staticStyle: {
        "min-width": "100px"
      },
      attrs: {
        title: _vm.getElementBySlug(surete_reele, "surete_reeles")
      }
    }, [_c("label", [_vm._v("\n                                                                – " + _vm._s(((_vm$getElementBySlug2 = _vm.getElementBySlug(surete_reele, "surete_reeles")) === null || _vm$getElementBySlug2 === void 0 ? void 0 : _vm$getElementBySlug2.length) > 50 ? _vm.getElementBySlug(surete_reele, "surete_reeles").slice(0, 49) + "..." : _vm.getElementBySlug(surete_reele, "surete_reeles")) + "\n                                                            ")])]);
  }), 0)]) : _c("div", {
    staticClass: "text-center"
  }, [_c("span", {
    staticClass: "text-danger"
  }, [_vm._v("Aucune surrété(s) réelle(s) sélectionné(s)")])])])])])]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mb-0"
  }, [_vm._m(7), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {
    staticClass: "col-6"
  }, [_c("div", {
    staticClass: "select-with-checkbox"
  }, [_c("div", {
    staticClass: "position-relative"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.search_surete_personnele,
      expression: "search_surete_personnele"
    }],
    staticClass: "form-control",
    staticStyle: {
      "min-width": "200px"
    },
    attrs: {
      type: "text",
      disabled: _vm.isDAJC,
      placeholder: "Rechercher une surété personnelles"
    },
    domProps: {
      value: _vm.search_surete_personnele
    },
    on: {
      focusin: function focusin($event) {
        return _vm.handleFocus("search_surete_personnele", "showSureteProfessionelle");
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.search_surete_personnele = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("i", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.showSureteProfessionelle,
      expression: "!showSureteProfessionelle"
    }],
    staticClass: "icofont-thin-down",
    staticStyle: {
      "font-weight": "bold",
      position: "absolute",
      right: "18px",
      top: "10px",
      "font-size": "17px"
    },
    on: {
      click: function click($event) {
        return _vm.retractItems("showSureteProfessionelle");
      }
    }
  }), _vm._v(" "), _c("i", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.showSureteProfessionelle,
      expression: "showSureteProfessionelle"
    }],
    staticClass: "icofont-thin-up",
    staticStyle: {
      "font-weight": "bold",
      position: "absolute",
      right: "18px",
      top: "10px",
      "font-size": "17px"
    },
    on: {
      click: function click($event) {
        return _vm.retractItems("showSureteProfessionelle");
      }
    }
  })]), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.showSureteProfessionelle,
      expression: "showSureteProfessionelle"
    }],
    staticClass: "shadow border border-1 options",
    staticStyle: {
      padding: "10px 8px 8px 8px"
    }
  }, [_c("ul", {
    staticClass: "postion-absolue"
  }, _vm._l(_vm.filteredSuretePersonnelle, function (item) {
    return _c("li", {
      key: item.slug,
      staticClass: "nowrap d-block text-truncate",
      staticStyle: {
        "min-width": "100px"
      },
      attrs: {
        title: item.parent
      }
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.formDataToBeWatched.surete_personneles,
        expression: "formDataToBeWatched.surete_personneles"
      }],
      staticClass: "form-check-input",
      staticStyle: {
        width: "20px",
        height: "20px"
      },
      attrs: {
        type: "checkbox",
        id: item.slug
      },
      domProps: {
        value: item.slug,
        checked: Array.isArray(_vm.formDataToBeWatched.surete_personneles) ? _vm._i(_vm.formDataToBeWatched.surete_personneles, item.slug) > -1 : _vm.formDataToBeWatched.surete_personneles
      },
      on: {
        change: [function ($event) {
          var $$a = _vm.formDataToBeWatched.surete_personneles,
            $$el = $event.target,
            $$c = $$el.checked ? true : false;
          if (Array.isArray($$a)) {
            var $$v = item.slug,
              $$i = _vm._i($$a, $$v);
            if ($$el.checked) {
              $$i < 0 && _vm.$set(_vm.formDataToBeWatched, "surete_personneles", $$a.concat([$$v]));
            } else {
              $$i > -1 && _vm.$set(_vm.formDataToBeWatched, "surete_personneles", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
            }
          } else {
            _vm.$set(_vm.formDataToBeWatched, "surete_personneles", $$c);
          }
        }, function ($event) {
          return _vm.refreshChecklist();
        }]
      }
    }), _vm._v(" "), _c("label", {
      attrs: {
        "for": item.slug
      }
    }, [_vm._v("\n                                                                " + _vm._s(item.parent.length > 50 ? item.parent.slice(0, 49) + "..." : item.parent) + "\n\n                                                            ")])]);
  }), 0), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-between pt-2"
  }, [_c("button", {
    staticClass: "btn shadow-md text-white",
    staticStyle: {
      background: "#2c3e50",
      "max-width": "max-content"
    },
    attrs: {
      type: "button",
      name: "button"
    },
    on: {
      click: function click($event) {
        return _vm.selectAll("surete_personneles", "filteredSuretePersonnelle");
      }
    }
  }, [_vm._v("\n                                                            Tous sélctionner\n                                                        ")]), _vm._v(" "), _c("button", {
    staticClass: "btn shadow-md text-white",
    staticStyle: {
      background: "#2c3e50",
      "max-width": "max-content"
    },
    attrs: {
      type: "button",
      name: "button"
    },
    on: {
      click: function click($event) {
        return _vm.clearSelection("surete_personneles", "filteredSuretePersonnelle");
      }
    }
  }, [_vm._v("\n                                                            Tous éffacer\n                                                        ")])])])])]), _vm._v(" "), _c("td", {
    staticClass: "col-6"
  }, [((_vm$formDataToBeWatch4 = _vm.formDataToBeWatched.surete_personneles) === null || _vm$formDataToBeWatch4 === void 0 ? void 0 : _vm$formDataToBeWatch4.length) > 0 ? _c("div", [_c("ul", {
    staticClass: "postion-absolue"
  }, _vm._l(_vm.formDataToBeWatched.surete_personneles, function (element) {
    var _vm$getElementBySlug3;
    return _c("li", {
      key: element,
      staticClass: "nowrap d-block text-truncate",
      staticStyle: {
        "min-width": "100px"
      },
      attrs: {
        title: _vm.getElementBySlug(element, "surete_personnelles")
      }
    }, [_c("label", [_vm._v("\n                                                                – " + _vm._s(((_vm$getElementBySlug3 = _vm.getElementBySlug(element, "surete_personnelles")) === null || _vm$getElementBySlug3 === void 0 ? void 0 : _vm$getElementBySlug3.length) > 50 ? _vm.getElementBySlug(element, "surete_personnelles").slice(0, 49) + "..." : _vm.getElementBySlug(element, "surete_personnelles")) + "\n                                                            ")])]);
  }), 0)]) : _c("div", {
    staticClass: "text-center"
  }, [_c("span", {
    staticClass: "text-danger"
  }, [_vm._v("Aucune surrété(s) personnelles sélectionné(s)")])])])])])]), _vm._v(" "), _c("br")]), _vm._v(" "), _vm.isLoadingData ? _c("div", [_vm._m(8)]) : _c("div", [_vm._m(9), _vm._v(" "), _c("div", [_c("div", {
    staticClass: "d-flex mt-1"
  }, [_c("div", {
    staticClass: "p-2 w-100 border d-flex justify-content-center bg-deep-blue fw-semibold cursor-pointer align-items-center",
    "class": {
      "bg-white text-orange": _vm.activeMenu == "client"
    },
    on: {
      click: function click($event) {
        return _vm.toggleMenu("client");
      }
    }
  }, [_vm._m(10)]), _vm._v(" "), _c("div", {
    staticClass: "p-2 w-100 border d-flex justify-content-center bg-deep-blue fw-semibold cursor-pointer align-items-center",
    "class": {
      "bg-white text-orange": _vm.activeMenu == "credit"
    },
    on: {
      click: function click($event) {
        return _vm.toggleMenu("credit");
      }
    }
  }, [_vm._m(11)]), _vm._v(" "), _c("div", {
    staticClass: "p-2 w-100 border d-flex justify-content-center bg-deep-blue fw-semibold cursor-pointer align-items-center",
    "class": {
      "bg-white text-orange": _vm.activeMenu == "surete"
    },
    on: {
      click: function click($event) {
        return _vm.toggleMenu("surete");
      }
    }
  }, [_vm._m(12)])]), _vm._v(" "), !["Retail"].includes((_vm$meta_data2 = _vm.meta_data) === null || _vm$meta_data2 === void 0 || (_vm$meta_data2 = _vm$meta_data2.dossier_credit) === null || _vm$meta_data2 === void 0 ? void 0 : _vm$meta_data2.categorie_client) ? _c("div", {
    staticClass: "d-flex mt-1"
  }, [_vm.activeMenu == "client" ? _c("div", {
    staticClass: "p-2 w-100 border",
    staticStyle: {
      "text-align": "center"
    }
  }, [_c("div", [_c("span", [_vm._v("\n                                                " + _vm._s((_vm$getElementBySlug4 = _vm.getElementBySlug(_vm.formDataToBeWatched.type_de_clientele, "type_de_clientele")) === null || _vm$getElementBySlug4 === void 0 ? void 0 : _vm$getElementBySlug4.toUpperCase()) + "\n                                                ")])])]) : _vm._e(), _vm._v(" "), _vm.activeMenu == "credit" ? _c("div", {
    staticClass: "p-2 w-100 border"
  }, [_c("ul", {
    staticClass: "postion-absolue"
  }, _vm._l(_vm.formDataToBeWatched.ligne_credits, function (ligne_cred) {
    var _vm$getElementBySlug5, _vm$getElementBySlug6, _vm$getElementBySlug$, _vm$getElementBySlug7;
    return _c("li", {
      key: ligne_cred,
      staticClass: "nowrap d-block text-truncate",
      staticStyle: {
        "min-width": "100px"
      },
      attrs: {
        title: (_vm$getElementBySlug5 = _vm.getElementBySlug(ligne_cred, "ligne_credits")) === null || _vm$getElementBySlug5 === void 0 ? void 0 : _vm$getElementBySlug5.toUpperCase()
      }
    }, [_c("label", [_vm._v("\n\n                                                        – " + _vm._s(((_vm$getElementBySlug6 = _vm.getElementBySlug(ligne_cred, "ligne_credits")) === null || _vm$getElementBySlug6 === void 0 ? void 0 : _vm$getElementBySlug6.length) > 49 ? ((_vm$getElementBySlug$ = _vm.getElementBySlug(ligne_cred, "ligne_credits").slice(0, 49)) === null || _vm$getElementBySlug$ === void 0 ? void 0 : _vm$getElementBySlug$.toUpperCase()) + "..." : (_vm$getElementBySlug7 = _vm.getElementBySlug(ligne_cred, "ligne_credits")) === null || _vm$getElementBySlug7 === void 0 ? void 0 : _vm$getElementBySlug7.toUpperCase()) + "\n                                                    ")])]);
  }), 0)]) : _vm._e(), _vm._v(" "), _vm.activeMenu == "surete" ? _c("div", {
    staticClass: "p-2 w-100 border"
  }, [_c("ul", {
    staticClass: "postion-absolue"
  }, [_vm._l(_vm.formDataToBeWatched.surete_personneles, function (element) {
    var _vm$getElementBySlug8, _vm$getElementBySlug$2, _vm$getElementBySlug9;
    return _c("li", {
      key: element,
      staticClass: "nowrap d-block text-truncate",
      staticStyle: {
        "min-width": "100px"
      },
      attrs: {
        title: _vm.getElementBySlug(element, "surete_personnelles")
      }
    }, [_c("label", [_vm._v("\n                                                    – " + _vm._s(((_vm$getElementBySlug8 = _vm.getElementBySlug(element, "surete_personnelles")) === null || _vm$getElementBySlug8 === void 0 ? void 0 : _vm$getElementBySlug8.length) > 49 ? ((_vm$getElementBySlug$2 = _vm.getElementBySlug(element, "surete_personnelles").slice(0, 49)) === null || _vm$getElementBySlug$2 === void 0 ? void 0 : _vm$getElementBySlug$2.toUpperCase()) + "..." : (_vm$getElementBySlug9 = _vm.getElementBySlug(element, "surete_personnelles")) === null || _vm$getElementBySlug9 === void 0 ? void 0 : _vm$getElementBySlug9.toUpperCase()) + "\n                                                ")])]);
  }), _vm._v(" "), _vm._l(_vm.formDataToBeWatched.suretes_reelles, function (surete_reele) {
    var _vm$getElementBySlug0;
    return _c("li", {
      key: surete_reele,
      staticClass: "nowrap d-block text-truncate",
      staticStyle: {
        "min-width": "100px"
      },
      attrs: {
        title: _vm.getElementBySlug(surete_reele, "surete_reeles")
      }
    }, [_c("label", [_vm._v("\n                                                    – " + _vm._s(((_vm$getElementBySlug0 = _vm.getElementBySlug(surete_reele, "surete_reeles")) === null || _vm$getElementBySlug0 === void 0 ? void 0 : _vm$getElementBySlug0.length) > 49 ? _vm.getElementBySlug(surete_reele, "surete_reeles").slice(0, 49) + "..." : _vm.getElementBySlug(surete_reele, "surete_reeles")) + "\n                                                ")])]);
  })], 2)]) : _vm._e()]) : _c("div", {
    staticClass: "d-flex mt-1"
  }, [_c("div", {
    staticClass: "p-2 w-100 border d-flex justify-content-center fw-semibold cursor-pointer align-items-center"
  }, [_c("div", {
    staticClass: "mb-0"
  }, [_c("span", [_vm._v(_vm._s((_vm$carcasse_type = _vm.carcasse_type) === null || _vm$carcasse_type === void 0 ? void 0 : _vm$carcasse_type.toUpperCase()))])])])])]), _vm._v(" "), _vm._m(13), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(14), _vm._v(" "), ((_vm$filteredCheckList = _vm.filteredCheckListData) === null || _vm$filteredCheckList === void 0 ? void 0 : _vm$filteredCheckList.length) > 0 ? [_c("tbody", [_vm._l(_vm.filteredCheckListData, function (el, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [!el["default"] ? _c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.name,
        expression: "el.name"
      }],
      staticClass: "form-control",
      attrs: {
        cols: "5",
        rows: "2",
        disabled: _vm.isDAJC
      },
      domProps: {
        value: el.name
      },
      on: {
        change: _vm.handleInput,
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(el, "name", $event.target.value);
        }
      }
    }) : _c("span", {
      domProps: {
        innerHTML: _vm._s(_vm.highlightText(el.name, el))
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [_c("div", {
      staticClass: "m-2 mr-4",
      staticStyle: {
        "vertical-align": "middle"
      }
    }, [_c("input", {
      staticClass: "form-check-input",
      staticStyle: {
        width: "20px",
        height: "20px"
      },
      attrs: {
        type: "checkbox",
        value: "Oui",
        id: "oui" + index,
        disabled: _vm.isDAJC
      },
      domProps: {
        checked: el.value == "Oui"
      },
      on: {
        change: function change($event) {
          return _vm.checkboxValCashCall($event, index);
        }
      }
    })])]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [_c("div", {
      staticClass: "m-2 mr-4"
    }, [_c("input", {
      staticClass: "form-check-input",
      staticStyle: {
        width: "20px",
        height: "20px"
      },
      attrs: {
        type: "checkbox",
        value: "Non",
        id: "non" + index,
        disabled: _vm.isDAJC
      },
      domProps: {
        checked: el.value == "Non"
      },
      on: {
        change: function change($event) {
          return _vm.checkboxValCashCall($event, index);
        }
      }
    })])]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [_c("div", {
      staticClass: "m-2 mr-4"
    }, [_c("input", {
      staticClass: "form-check-input",
      staticStyle: {
        width: "20px",
        height: "20px"
      },
      attrs: {
        type: "checkbox",
        value: "Non applicable",
        id: "non_applicable" + index,
        disabled: _vm.isDAJC
      },
      domProps: {
        checked: el.value == "Non applicable"
      },
      on: {
        change: function change($event) {
          return _vm.checkboxValCashCall($event, index);
        }
      }
    })])]), _vm._v(" "), _c("td", [el.value == "Oui" ? _c("div", {
      staticClass: "d-flex align-items-center text-center justify-content-center"
    }, [_c("div", [(el === null || el === void 0 ? void 0 : el.files) > 0 ? _c("span", {
      staticClass: "p-1 px-2 mx-2 text-nowrap",
      staticStyle: {
        "background-color": "rgb(44,62,80)",
        color: "white",
        "font-size": "13px",
        "border-radius": "5px",
        "margin-left": "0 !important",
        width: "150px"
      }
    }, [_vm._v(_vm._s((el === null || el === void 0 ? void 0 : el.files) > 0 ? (el === null || el === void 0 ? void 0 : el.files) + " fichier(s) uploadé(s)" : ""))]) : _vm._e()]), _vm._v(" "), el.name.trim() != "" ? _c("div", [_c("button", {
      staticClass: "btn shadow-md text-white",
      staticStyle: {
        cursor: "pointer",
        background: "#2c3e50",
        width: "26px",
        "font-size": "13px",
        padding: "1px"
      },
      attrs: {
        type: "button",
        name: "button",
        "data-toggle": "tooltip",
        title: "Cliquer ici pour uploader ou voir le(s) fichier(s)"
      },
      on: {
        click: function click($event) {
          return _vm.handleDoubleClickOrClick($event, index);
        }
      }
    }, [_c("i", {
      staticClass: "icofont-attachment"
    })])]) : _vm._e()]) : _c("div", {
      staticClass: "text-center text-danger"
    }, [_vm._v("\n                                                    Aucun fichier(s) uploadé(s)\n                                                ")])]), _vm._v(" "), _c("td", [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.comment,
        expression: "el.comment"
      }],
      staticClass: "form-control",
      staticStyle: {
        width: "250px"
      },
      attrs: {
        cols: "1",
        rows: "2",
        disabled: _vm.isDAJC
      },
      domProps: {
        value: el.comment
      },
      on: {
        change: _vm.handleInput,
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(el, "comment", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.remarque_dajc,
        expression: "el.remarque_dajc"
      }],
      staticClass: "form-control",
      staticStyle: {
        width: "250px"
      },
      attrs: {
        cols: "1",
        rows: "2",
        disabled: !_vm.isDAJC
      },
      domProps: {
        value: el.remarque_dajc
      },
      on: {
        change: _vm.handleInput,
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(el, "remarque_dajc", $event.target.value);
        }
      }
    })]), _vm._v(" "), !el["default"] ? _c("td", [!_vm.isDAJC ? _c("button", {
      staticStyle: {
        "background-color": "transparent",
        border: "none"
      },
      attrs: {
        type: "button",
        title: "Supprimer ce document"
      },
      on: {
        click: function click($event) {
          return _vm.remove(el.id);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1) : _vm._e()]) : _c("td")]);
  }), _vm._v(" "), _c("tr", [_c("td", {
    attrs: {
      colspan: "7"
    }
  }), _vm._v(" "), _c("td", {
    attrs: {
      rowspan: _vm.filteredList.length - 1
    }
  }, [!_vm.isDAJC ? _c("button", {
    staticStyle: {
      "background-color": "#2c3e50",
      color: "#ffffff",
      "border-radius": "15%",
      border: "none"
    },
    attrs: {
      type: "button",
      title: "Ajouter un document"
    },
    on: {
      click: function click($event) {
        return _vm.addMore();
      }
    }
  }, [_c("plus-icon", {
    staticClass: "custom-class",
    attrs: {
      size: "21"
    }
  })], 1) : _vm._e()])])], 2)] : [_c("tbody", [_c("tr", [_c("td", {
    staticClass: "text-center justify-content-center align-items-center",
    attrs: {
      colspan: "8"
    }
  }, [_vm.checkListSearchInput ? _c("span", [_vm._v('Aucun Document ne correspond au terme "'), _c("b", [_vm._v(_vm._s(_vm.checkListSearchInput))]), _vm._v('"')]) : _c("span", [_vm._v("Aucun Document")])])]), _vm._v(" "), _c("tr", [_c("td", {
    attrs: {
      colspan: "7"
    }
  }), _vm._v(" "), _c("td", [!_vm.isDAJC ? _c("button", {
    staticStyle: {
      "background-color": "#2c3e50",
      color: "#ffffff",
      "border-radius": "15%",
      border: "none"
    },
    attrs: {
      type: "button",
      title: "Ajouter un document"
    },
    on: {
      click: function click($event) {
        return _vm.addMore();
      }
    }
  }, [_c("plus-icon", {
    staticClass: "custom-class",
    attrs: {
      size: "21"
    }
  })], 1) : _vm._e()])])])]], 2)]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "col-md-12 mt-0 mb-4"
  }, [_vm._m(15), _vm._v(" "), _c("vue-editor", {
    attrs: {
      id: "comment_pieces_requises"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.comment_pieces_requises,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "comment_pieces_requises", $$v);
      },
      expression: "\n                                        formDataToBeWatched.comment_pieces_requises\n                                        "
    }
  })], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "mb-5"
  }), _vm._v(" "), !((_this$meta_data$dossi = this.meta_data["dossier_credit"]) !== null && _this$meta_data$dossi !== void 0 && (_this$meta_data$dossi = _this$meta_data$dossi.final_outcome) !== null && _this$meta_data$dossi !== void 0 && _this$meta_data$dossi.outcome) != 0 || _vm.isDAJC ? _c("button", {
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
  }, [_vm._v("\n                        Fermer le tableau\n                    ")]) : _vm._e()])])])]) : _c("div", {
    staticClass: "card card-width-height"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc pb-0 pt-2"
  }, [_c("h6", {
    staticClass: "head",
    attrs: {
      id: "dcp-ppo7-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Documentation(s) requise(s)\n                        ")]), _vm._v(" "), _c("div", {
    staticClass: "col-auto"
  }, [((_vm$formDataToBeWatch5 = _vm.formDataToBeWatched.notes) === null || _vm$formDataToBeWatch5 === void 0 ? void 0 : _vm$formDataToBeWatch5.length) > 0 ? _c("div", {
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
  }, [_c("span", [_vm._v("\n                                            " + _vm._s(_vm.formDataToBeWatched.notes.length) + "\n                                        ")])])])]) : _vm._e(), _vm._v(" "), _c("chevron-down-icon", {
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
  })], 1)])])])])], 1), _vm._v(" "), _c("modal", {
    attrs: {
      name: "documentation_somise",
      width: 500,
      resizable: "",
      height: "300"
    }
  }, [_c("div", {
    staticClass: "image1"
  })]), _vm._v(" "), _c("note-modal", {
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
    staticClass: "d-flex justify-content-center text-center align-items-center text-muted py-4"
  }, [_c("div", [_c("span", {
    staticClass: "spinner-border spinner-border"
  }), _vm._v(" "), _c("h5", [_vm._v("\n                            Chargement des données en cours ... "), _c("br"), _vm._v("\n                            Ceci peut prendre un peu de temps\n                        ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "bg-ed-primary"
  }, [_c("tr", [_c("th", {
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      colspan: "4",
      scope: "row"
    }
  }, [_c("label", [_vm._v("TYPE DE CLIENTELE "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("optgroup", {
    attrs: {
      label: "Personne physique"
    }
  }, [_c("option", {
    attrs: {
      value: "physique_ordinaire"
    }
  }, [_vm._v(" Physique ordinaire ")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "physique_commercante"
    }
  }, [_vm._v(" Physique commerçante")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("optgroup", {
    attrs: {
      label: "Personne morale"
    }
  }, [_c("option", {
    attrs: {
      value: "societes_commerciales"
    }
  }, [_vm._v(" Sociétés commerciales / entreprises")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "ong_et_associations"
    }
  }, [_vm._v(" ONG et associations")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "sci"
    }
  }, [_vm._v(" SCI")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("optgroup", {
    attrs: {
      label: "Autres"
    }
  }, [_c("option", {
    attrs: {
      value: "structure_financiere_decentralise_sfd"
    }
  }, [_vm._v(" Structure Financière Décentralisé ( SFD )")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "assurances"
    }
  }, [_vm._v(" Assurances")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "fonds_commun_de_placement"
    }
  }, [_vm._v(" Fonds Commun de Placement")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "institutionnels"
    }
  }, [_vm._v(" Institutionnels")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "etats"
    }
  }, [_vm._v(" États")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "autres"
    }
  }, [_vm._v(" Autres")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "bg-ed-primary"
  }, [_c("tr", [_c("th", {
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      colspan: "2",
      scope: "row"
    }
  }, [_c("label", [_vm._v("TYPE DE CREDIT "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "bg-ed-primary"
  }, [_c("tr", [_c("th", {
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      colspan: "2",
      scope: "row"
    }
  }, [_c("label", [_vm._v("SURETES REELLES "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "bg-ed-primary"
  }, [_c("tr", [_c("th", {
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      colspan: "2",
      scope: "row"
    }
  }, [_c("label", [_vm._v("SURETES PERSONNELLES "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "d-flex justify-content-center text-center align-items-center text-muted py-4"
  }, [_c("div", [_c("span", {
    staticClass: "spinner-border spinner-border"
  }), _vm._v(" "), _c("h5", [_vm._v("\n                                            Chargement des données en cours ... "), _c("br"), _vm._v("\n                                            Ceci peut prendre un peu de temps\n                                        ")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "p-2 w-100 border align-items-center bg-deep-blue fw-semibold justify-content-center",
    staticStyle: {
      "text-align": "center"
    }
  }, [_c("span", [_vm._v("\n                                            DOCUMENTS RELATIFS")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "mb-0"
  }, [_c("span", [_vm._v("\n                                                CLIENT")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "mb-0"
  }, [_c("span", [_vm._v("\n                                                PRODUIT")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "mb-0"
  }, [_c("span", [_vm._v("\n                                                SÛRETE")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "p-1 d-flex justify-content-between align-items-center border-bottom px-2 border"
  }, [_c("h5", {
    staticClass: "mb-0"
  }, [_vm._v("Liste des documents")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", {
    staticClass: "text-center"
  }, [_c("td", {
    staticClass: "th fw-bold"
  }, [_c("label", [_vm._v("DOCUMENTATION")])]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold"
  }, [_c("label", [_vm._v("OBTENUE ")])]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold"
  }, [_c("label", [_vm._v("NON OBTENUE ")])]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold"
  }, [_c("label", [_vm._v("NON APPLICABLE")])]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold"
  }, [_c("label", [_vm._v(" FICHIER ATTACHE")])]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold"
  }, [_c("label", [_vm._v("COMMENTAIRE")])]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold"
  }, [_c("label", [_vm._v("REMARQUES")])]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold"
  }, [_c("label")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_c("b", [_vm._v("Commentaire")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/afg/filiale/DAJ-PR-CORPORATE-OLD.vue?vue&type=style&index=1&id=b738c67c&lang=css&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/afg/filiale/DAJ-PR-CORPORATE-OLD.vue?vue&type=style&index=1&id=b738c67c&lang=css&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-b738c67c] {\r\n    font-family: \"Google sans\";\n}\nlabel[data-v-b738c67c] {\r\n    height: 10px;\r\n    font-size: 13px;\n}\ninput[type=\"text\"][data-v-b738c67c],\r\ninput[type=\"date\"][data-v-b738c67c],\r\nselect[data-v-b738c67c] {\r\n    height: 35px;\r\n    border-color: #34495e;\r\n    color: #57606f;\r\n    font-size: 13px;\r\n    font-weight: bold;\n}\n.card-width-height[data-v-b738c67c] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-b738c67c] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\n.hdc[data-v-b738c67c] {\r\n    background-color: #57606f;\n}\n.card-width-height[data-v-b738c67c] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-b738c67c] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\n.review[data-v-b738c67c] {\r\n    width: 180px !important;\n}\n.engagement input[type=\"text\"][data-v-b738c67c],\r\ninput[type=\"date\"][data-v-b738c67c] {\r\n    width: 100% !important;\n}\n.th[data-v-b738c67c] {\r\n    padding: 4px;\r\n    padding-bottom: 0px;\n}\r\n\r\n/* select {\r\n    width: 250px;\r\n} */\n.badge-sm[data-v-b738c67c] {\r\n    display: inline-block;\r\n    width: 15px;\r\n    height: 15px;\r\n    background: rgba(255, 0, 0, 0.882);\r\n    color: white;\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    border-radius: 100%;\r\n    position: absolute;\r\n    top: -20%;\r\n    left: 55%;\r\n    text-align: center;\n}\n.relook-header[data-v-b738c67c] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\ninput[type=\"checkbox\"][data-v-b738c67c] {\r\n    height: 18px;\r\n    width: 20px;\r\n    margin-right: 5px;\n}\n.image1[data-v-b738c67c] {\r\n    background: url(\"/images/capture/exemples/documentation_somise.png\")\r\n        no-repeat;\r\n    background-position: center;\r\n    background-size: contain;\r\n\r\n    width: 500px;\r\n    height: 300px;\n}\n.btn-group .multiselect[data-v-b738c67c] {\r\n  border: 1px solid #ced4da;\n}\r\n/* .select-with-checkbox {\r\n  border: 1px solid #ddd;\r\n  padding: 10px;\r\n  width: 200px;\r\n} */\n.select-with-checkbox[data-v-b738c67c] {\r\n    position: relative;\n}\n.select-with-checkbox .options[data-v-b738c67c] {\r\n    z-index: 15;\r\n    position: absolute;\r\n    background: white;\n}\r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/afg/filiale/DAJ-PR-CORPORATE-OLD.vue?vue&type=style&index=1&id=b738c67c&lang=css&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/afg/filiale/DAJ-PR-CORPORATE-OLD.vue?vue&type=style&index=1&id=b738c67c&lang=css&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJ_PR_CORPORATE_OLD_vue_vue_type_style_index_1_id_b738c67c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DAJ-PR-CORPORATE-OLD.vue?vue&type=style&index=1&id=b738c67c&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/afg/filiale/DAJ-PR-CORPORATE-OLD.vue?vue&type=style&index=1&id=b738c67c&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJ_PR_CORPORATE_OLD_vue_vue_type_style_index_1_id_b738c67c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJ_PR_CORPORATE_OLD_vue_vue_type_style_index_1_id_b738c67c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/contreanalyse/afg/filiale/DAJ-PR-CORPORATE-OLD.vue":
/*!************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/afg/filiale/DAJ-PR-CORPORATE-OLD.vue ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DAJ_PR_CORPORATE_OLD_vue_vue_type_template_id_b738c67c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DAJ-PR-CORPORATE-OLD.vue?vue&type=template&id=b738c67c&scoped=true */ "./resources/js/components/contreanalyse/afg/filiale/DAJ-PR-CORPORATE-OLD.vue?vue&type=template&id=b738c67c&scoped=true");
/* harmony import */ var _DAJ_PR_CORPORATE_OLD_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DAJ-PR-CORPORATE-OLD.vue?vue&type=script&lang=js */ "./resources/js/components/contreanalyse/afg/filiale/DAJ-PR-CORPORATE-OLD.vue?vue&type=script&lang=js");
/* harmony import */ var _vueform_multiselect_themes_default_css_vue_type_style_index_0_lang_css_external__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vueform/multiselect/themes/default.css?vue&type=style&index=0&lang=css&external */ "./node_modules/@vueform/multiselect/themes/default.css?vue&type=style&index=0&lang=css&external");
/* harmony import */ var _DAJ_PR_CORPORATE_OLD_vue_vue_type_style_index_1_id_b738c67c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DAJ-PR-CORPORATE-OLD.vue?vue&type=style&index=1&id=b738c67c&lang=css&scoped=true */ "./resources/js/components/contreanalyse/afg/filiale/DAJ-PR-CORPORATE-OLD.vue?vue&type=style&index=1&id=b738c67c&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;



/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _DAJ_PR_CORPORATE_OLD_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _DAJ_PR_CORPORATE_OLD_vue_vue_type_template_id_b738c67c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _DAJ_PR_CORPORATE_OLD_vue_vue_type_template_id_b738c67c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "b738c67c",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/contreanalyse/afg/filiale/DAJ-PR-CORPORATE-OLD.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/contreanalyse/afg/filiale/DAJ-PR-CORPORATE-OLD.vue?vue&type=script&lang=js":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/afg/filiale/DAJ-PR-CORPORATE-OLD.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJ_PR_CORPORATE_OLD_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DAJ-PR-CORPORATE-OLD.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/afg/filiale/DAJ-PR-CORPORATE-OLD.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJ_PR_CORPORATE_OLD_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/contreanalyse/afg/filiale/DAJ-PR-CORPORATE-OLD.vue?vue&type=style&index=1&id=b738c67c&lang=css&scoped=true":
/*!********************************************************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/afg/filiale/DAJ-PR-CORPORATE-OLD.vue?vue&type=style&index=1&id=b738c67c&lang=css&scoped=true ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJ_PR_CORPORATE_OLD_vue_vue_type_style_index_1_id_b738c67c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DAJ-PR-CORPORATE-OLD.vue?vue&type=style&index=1&id=b738c67c&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/afg/filiale/DAJ-PR-CORPORATE-OLD.vue?vue&type=style&index=1&id=b738c67c&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/contreanalyse/afg/filiale/DAJ-PR-CORPORATE-OLD.vue?vue&type=template&id=b738c67c&scoped=true":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/afg/filiale/DAJ-PR-CORPORATE-OLD.vue?vue&type=template&id=b738c67c&scoped=true ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJ_PR_CORPORATE_OLD_vue_vue_type_template_id_b738c67c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJ_PR_CORPORATE_OLD_vue_vue_type_template_id_b738c67c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJ_PR_CORPORATE_OLD_vue_vue_type_template_id_b738c67c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DAJ-PR-CORPORATE-OLD.vue?vue&type=template&id=b738c67c&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/afg/filiale/DAJ-PR-CORPORATE-OLD.vue?vue&type=template&id=b738c67c&scoped=true");


/***/ })

}]);