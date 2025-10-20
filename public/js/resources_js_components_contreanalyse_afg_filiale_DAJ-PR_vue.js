"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_contreanalyse_afg_filiale_DAJ-PR_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/afg/filiale/DAJ-PR.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/afg/filiale/DAJ-PR.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
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
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _shared_Tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/Tabs */ "./resources/js/components/shared/Tabs.vue");
/* harmony import */ var _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @johmun/vue-tags-input */ "./node_modules/@johmun/vue-tags-input/dist/vue-tags-input.js");
/* harmony import */ var _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _LanguageSelector_vue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./LanguageSelector.vue */ "./resources/js/components/contreanalyse/afg/filiale/LanguageSelector.vue");
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
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_15__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_15__.TrashIcon,
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_15__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_15__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_15__.ChevronDownIcon,
    ContextMenu: _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__["default"],
    ContextMenuItem: _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__["default"],
    Multiselect: _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_2__["default"],
    AirplayIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_15__.AirplayIcon,
    Tabs: _shared_Tabs__WEBPACK_IMPORTED_MODULE_12__["default"],
    VueTagsInput: (_johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_13___default()),
    LanguageSelector: _LanguageSelector_vue__WEBPACK_IMPORTED_MODULE_14__["default"]
  },
  props: {
    meta_data: Object,
    tb_name: String,
    tb_display_name: String
  },
  created: function created() {
    var _this$meta_data, _this$meta_data2, _this$meta_data$dossi;
    this.filteredContexMenu();
    this.carcasse_type = (_this$meta_data = this.meta_data) === null || _this$meta_data === void 0 || (_this$meta_data = _this$meta_data.dossier_credit) === null || _this$meta_data === void 0 || (_this$meta_data = _this$meta_data.applied_templ_name) === null || _this$meta_data === void 0 || (_this$meta_data = _this$meta_data.toString()) === null || _this$meta_data === void 0 ? void 0 : _this$meta_data.toLowerCase();
    this.type_credits = (_this$meta_data2 = this.meta_data) === null || _this$meta_data2 === void 0 || (_this$meta_data2 = _this$meta_data2.dossier_credit) === null || _this$meta_data2 === void 0 || (_this$meta_data2 = _this$meta_data2.cred_pub_tb_10001) === null || _this$meta_data2 === void 0 || (_this$meta_data2 = _this$meta_data2.type_credit) === null || _this$meta_data2 === void 0 || (_this$meta_data2 = _this$meta_data2.toString()) === null || _this$meta_data2 === void 0 ? void 0 : _this$meta_data2.toLowerCase();
    var applied_templ_name = (_this$meta_data$dossi = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi.applied_templ_name;
    var tbArrays = this.determineCredPubTables(applied_templ_name);

    // EventBus.$on('refresh-dajc', (data) => {
    //     // console.log("refresh-dajc",data?.cred_pub_tb_8);
    //     if (this.meta_data?.dossier_credit?.categorie_client?.toUpperCase() != 'RETAIL') {
    //         this.isLoadingData = true
    //         this.loadCheckListData(this.meta_data?.dossier_credit, this.meta_data?.dossier_credit?.[tbArrays[0]], data, false)
    //     }
    // })

    // EventBus.$on("type_de_clientele_change", (data) => {
    //     if (data?.type_de_clientele != '') {
    //         if (this.meta_data?.dossier_credit?.categorie_client?.toUpperCase() != 'RETAIL') {
    //             this.isLoadingData = true
    //             this.loadCheckListData(this.meta_data?.dossier_credit, data, this.meta_data?.dossier_credit?.[tbArrays[2]], false)
    //         }

    //     }
    // });
  },
  mounted: function mounted() {
    var _this = this;
    this.tableClosedOrOpened();
    this.loadTbAttrs();
    this.loadRetrieved();
    EventBus.$on("created-extra-file-template", function (data) {
      _this.pieces_versees_list.forEach(function (element, index) {
        var _data$template;
        var template_name = (element === null || element === void 0 ? void 0 : element.name) + " -pieces_versees_list" + index + "_" + _this.$route.params.templateId;
        if (template_name == (data === null || data === void 0 || (_data$template = data.template) === null || _data$template === void 0 ? void 0 : _data$template.name)) {
          var _data$template2, _data$template3, _data$template4;
          _this.pieces_versees_list[index]['template'] = {
            id: data === null || data === void 0 || (_data$template2 = data.template) === null || _data$template2 === void 0 ? void 0 : _data$template2.id,
            name: data === null || data === void 0 || (_data$template3 = data.template) === null || _data$template3 === void 0 ? void 0 : _data$template3.name,
            slug: data === null || data === void 0 || (_data$template4 = data.template) === null || _data$template4 === void 0 ? void 0 : _data$template4.slug
          };
          _this.handleInput();
        }
      });
    });
    EventBus.$on("updated-extra-file-upload", function (data) {
      _this.getFiles();
    });
    this.getFiles();
  },
  computed: {
    isPostAppro: function isPostAppro() {
      var _this$meta_data$dossi2, _this$authcheckUsr;
      return ((_this$meta_data$dossi2 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi2 === void 0 || (_this$meta_data$dossi2 = _this$meta_data$dossi2.final_outcome) === null || _this$meta_data$dossi2 === void 0 ? void 0 : _this$meta_data$dossi2.outcome) == 1 && this.autorizeRole.includes((_this$authcheckUsr = this.authcheckUsr) === null || _this$authcheckUsr === void 0 ? void 0 : _this$authcheckUsr.role_uuid);
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
      var _this2 = this;
      return this.credit_family.filter(function (item) {
        var _item$parent, _this2$search_credit_;
        return (_item$parent = item.parent) === null || _item$parent === void 0 ? void 0 : _item$parent.toLowerCase().includes((_this2$search_credit_ = _this2.search_credit_type) === null || _this2$search_credit_ === void 0 ? void 0 : _this2$search_credit_.toLowerCase());
      });
    },
    filteredSureteReele: function filteredSureteReele() {
      var _this$surete_family$f,
        _this3 = this;
      return (_this$surete_family$f = this.surete_family.filter(function (el) {
        return el.to == "réelles";
      })) === null || _this$surete_family$f === void 0 ? void 0 : _this$surete_family$f.filter(function (item) {
        var _item$parent2, _this3$search_surete_;
        return (_item$parent2 = item.parent) === null || _item$parent2 === void 0 ? void 0 : _item$parent2.toLowerCase().includes((_this3$search_surete_ = _this3.search_surete_reelle) === null || _this3$search_surete_ === void 0 ? void 0 : _this3$search_surete_.toLowerCase());
      });
    },
    filteredSuretePersonnelle: function filteredSuretePersonnelle() {
      var _this$surete_family$f2,
        _this4 = this;
      return (_this$surete_family$f2 = this.surete_family.filter(function (el) {
        return el.to == "personnelles";
      })) === null || _this$surete_family$f2 === void 0 ? void 0 : _this$surete_family$f2.filter(function (item) {
        var _item$parent3, _this4$search_surete_;
        return (_item$parent3 = item.parent) === null || _item$parent3 === void 0 ? void 0 : _item$parent3.toLowerCase().includes((_this4$search_surete_ = _this4.search_surete_personnele) === null || _this4$search_surete_ === void 0 ? void 0 : _this4$search_surete_.toLowerCase());
      });
    },
    filteredCheckListData: function filteredCheckListData() {
      var _this5 = this;
      if (this.checkListSearchInput) {
        return this[this.determineCurrentKey()].filter(function (item) {
          var _item$name, _this5$checkListSearc;
          return item === null || item === void 0 || (_item$name = item.name) === null || _item$name === void 0 ? void 0 : _item$name.toLowerCase().includes((_this5$checkListSearc = _this5.checkListSearchInput) === null || _this5$checkListSearc === void 0 ? void 0 : _this5$checkListSearc.toLowerCase());
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
      lang: "",
      activeMenu: "client",
      current_filter: "All",
      pieces_versees_list: [],
      pieces_versees_clients: [],
      pieces_versees_suretes: [],
      pieces_versees_credits: [],
      pieces_versees_autres: [],
      ebapisHost: _services_ebapis_service_js__WEBPACK_IMPORTED_MODULE_3__["default"].host,
      autorizeRole: ['r472oAxtaFJSlsh5', 'DUxMP2ZQheGFreQt5z2s', 'weu2BjZkaf0Y4tHguD2Y', 'kggrA5A18KdHk452gEtk'],
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
        // handler: this.startDeletingTbFromContext,
        handler: this.startDeletingTbFromContextWithDeleteTbFile,
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
        is_old_checklist: false,
        lang: ""
        // all_surete:[...this.formDataToBeWatched.suretes_reelles,...this.formDataToBeWatched.surete_personneles],
      },
      countries: [],
      client_type: _services_afg_dajc_constants_js__WEBPACK_IMPORTED_MODULE_11__["default"].client_type,
      carcasse_type: "",
      type_credits: "",
      data_automate_checker: {},
      get_old_data: false,
      pret_rachat_prive: "",
      filesToDelete: []
      // ligne_credits
    };
  },
  methods: {
    openContext: function openContext(event) {
      var _this$meta_data$dossi3;
      if (((_this$meta_data$dossi3 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi3 === void 0 || (_this$meta_data$dossi3 = _this$meta_data$dossi3.final_outcome) === null || _this$meta_data$dossi3 === void 0 ? void 0 : _this$meta_data$dossi3.outcome) != 0 && !this.isPostAppro) return;
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
      var _this6 = this;
      var arr_personnelles = [];
      var arr_reelles = [];
      if (data.length > 0) {
        data.forEach(function (el, index) {
          var current_el = _this6.surete_family.find(function (item) {
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
      var _this$meta_data$dossi1;
      // this.showCheckList = true
      var applied_templ_name = (_this$meta_data$dossi1 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi1 === void 0 ? void 0 : _this$meta_data$dossi1.applied_templ_name;
      var tbArrays = this.determineCredPubTables(applied_templ_name);
      // this.loadCheckListData(this.meta_data?.dossier_credit, tbArrays[0], tbArrays[2], true);
    },
    getCreditBanques: function getCreditBanques() {
      var _this$meta_data3,
        _this7 = this;
      var categorie_client = (_this$meta_data3 = this.meta_data) === null || _this$meta_data3 === void 0 || (_this$meta_data3 = _this$meta_data3.dossier_credit) === null || _this$meta_data3 === void 0 ? void 0 : _this$meta_data3.categorie_client;
      _services_credit_service_js__WEBPACK_IMPORTED_MODULE_7__["default"].loadCreditBanques({
        categorie_client: categorie_client
      }).then(function (res) {
        _this7.type_credits = res.data;
        localStorage.setItem("banque_credit_types", JSON.stringify(res.data));
      })["catch"](function (err) {
        console.log(err);
      });
    },
    filteredContexMenu: function filteredContexMenu() {
      var _this8 = this;
      _services_auth_service_js__WEBPACK_IMPORTED_MODULE_5__["default"].loadUserData().then(function (res) {
        var _this8$authcheckUsr;
        _this8.authcheckUsr = res.data;
        // canNotDeleteTb
        if (_this8.canNotDeleteTb.includes((_this8$authcheckUsr = _this8.authcheckUsr) === null || _this8$authcheckUsr === void 0 ? void 0 : _this8$authcheckUsr.role_uuid)) {
          _this8.contextList.splice(2, 1);
        }
      })["catch"](function (err) {
        _this8.loadWithError(err);
      });
      //
    },
    loadingDefaultData: function loadingDefaultData(dossier_credit0, f0, f8, use_dossier_credit) {
      var _this$data_automate_c, _this$data_automate_c2, _this$data_automate_c3, _this$data_automate_c4, _this$data_automate_c5, _this$meta_data4;
      this.data_automate_checker = _services_afg_check_list_manager_js__WEBPACK_IMPORTED_MODULE_10__["default"].automateChecker(dossier_credit0, f0, f8, use_dossier_credit);
      var dispatchData = this.dispatchSurete((_this$data_automate_c = this.data_automate_checker) === null || _this$data_automate_c === void 0 ? void 0 : _this$data_automate_c.type_de_suretes);
      // console.log("concat test",[...new Set(this.data_automate_checker?.type_de_credits?.concat(this.meta_data?.dossier_credit?.cred_pub_tb_200601?.ligne_credits))], this.data_automate_checker?.type_de_credits);
      this.formDataToBeWatched.type_de_clientele = (_this$data_automate_c2 = this.data_automate_checker) === null || _this$data_automate_c2 === void 0 ? void 0 : _this$data_automate_c2.type_de_clientele;
      this.formDataToBeWatched.ligne_credits = (_this$data_automate_c3 = this.data_automate_checker) !== null && _this$data_automate_c3 !== void 0 && _this$data_automate_c3.use_dossier_credit ? (_this$data_automate_c4 = this.data_automate_checker) === null || _this$data_automate_c4 === void 0 ? void 0 : _this$data_automate_c4.type_de_credits : _toConsumableArray(new Set((_this$data_automate_c5 = this.data_automate_checker) === null || _this$data_automate_c5 === void 0 || (_this$data_automate_c5 = _this$data_automate_c5.type_de_credits) === null || _this$data_automate_c5 === void 0 ? void 0 : _this$data_automate_c5.concat((_this$meta_data4 = this.meta_data) === null || _this$meta_data4 === void 0 || (_this$meta_data4 = _this$meta_data4.dossier_credit) === null || _this$meta_data4 === void 0 || (_this$meta_data4 = _this$meta_data4.cred_pub_tb_200601) === null || _this$meta_data4 === void 0 ? void 0 : _this$meta_data4.ligne_credits)));
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
      var _this9 = this;
      this.pieces_versees_clients = [];
      this.pieces_versees_suretes = [];
      this.pieces_versees_credits = [];
      _services_afg_check_list_manager_js__WEBPACK_IMPORTED_MODULE_10__["default"].load(this.ebapisHost, options).then(function (response) {
        _this9.isLoadingData = false;
        var check_list_data = response.check_list_document;
        _this9.formDataToBeWatched.lang = _this9.lang;
        if (check_list_data.length > 0) {
          var _this9$meta_data;
          _this9.pieces_versees_list = check_list_data;
          var pieces_versees = _toConsumableArray(check_list_data);
          _this9.pieces_versees_list = pieces_versees;
          check_list_data = pieces_versees;
          check_list_data.forEach(function (liste) {
            if (liste.id == "") {
              liste.id = (0,uuid__WEBPACK_IMPORTED_MODULE_16__["default"])();
            }
          });
          _this9.pieces_versees_list = check_list_data;
          _this9.pieces_versees_clients = pieces_versees === null || pieces_versees === void 0 ? void 0 : pieces_versees.filter(function (liste) {
            return liste.is_client == true;
          });
          _this9.pieces_versees_suretes = pieces_versees === null || pieces_versees === void 0 ? void 0 : pieces_versees.filter(function (liste) {
            return liste.is_surete == true;
          });
          _this9.pieces_versees_credits = pieces_versees === null || pieces_versees === void 0 ? void 0 : pieces_versees.filter(function (liste) {
            return liste.is_credit == true;
          });
          _this9.pieces_versees_autres = pieces_versees === null || pieces_versees === void 0 ? void 0 : pieces_versees.filter(function (liste) {
            return [liste.is_client, liste.is_surete, liste.is_credit].every(function (el) {
              return el !== true;
            });
          });
          if (['Retail'].includes((_this9$meta_data = _this9.meta_data) === null || _this9$meta_data === void 0 || (_this9$meta_data = _this9$meta_data.dossier_credit) === null || _this9$meta_data === void 0 ? void 0 : _this9$meta_data.categorie_client)) {} else {}
          _this9.handleInput();
        }
      })["catch"](function (error) {
        // this.$Progress.finish();
        console.log(error);
        _this9.isLoadingData = false;
      });
    },
    loadBalancingCrosstab: function loadBalancingCrosstab() {
      var _this$formDataToBeWat,
        _this$formDataToBeWat2,
        _this$formDataToBeWat3,
        _this$formDataToBeWat4,
        _this0 = this;
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
              if (_this0.formDataToBeWatched.arr_data.length > 0) {
                _this0.formDataToBeWatched.arr_data.forEach(function (arr) {
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
              copy_el['id'] = (0,uuid__WEBPACK_IMPORTED_MODULE_16__["default"])();
              copy_el['name'] = copy_el['name'] + ' ' + el0['cross_tab_name'];
              copy_el['is_client'] = el0['is_client'];
              copy_el['is_surete'] = el0['is_surete'];
              copy_el['is_credit'] = el0['is_credit'];

              // console.log("autoriz_to_push",autoriz_to_push);
              if (autoriz_to_push) {
                if (_this0.determineBoolFamily(pc) != _this0.determineBoolFamily(el0)) {
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
      var _this1 = this;
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
              var check_parent = _this1.determineBoolFamily(element);
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
            return_obj = _this1.organizeObject(element, return_obj);
          }
        };
        for (var index = 0; index < listeOfElement.length; index++) {
          _loop();
        }
      }
      return return_obj;
    },
    loadCheckListData: function loadCheckListData() {
      var _this$meta_data$dossi10, _this$meta_data$dossi11, _this$meta_data$dossi12, _this$meta_data$dossi13, _this$lang;
      var categorie_client = (_this$meta_data$dossi10 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi10 === void 0 ? void 0 : _this$meta_data$dossi10.categorie_client;
      var options = {
        categorie_client: categorie_client,
        type_credit: (_this$meta_data$dossi11 = (_this$meta_data$dossi12 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi12 === void 0 ? void 0 : _this$meta_data$dossi12.applied_templ_name) !== null && _this$meta_data$dossi11 !== void 0 ? _this$meta_data$dossi11 : "",
        occupation: "NA",
        filiale: (_this$meta_data$dossi13 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi13 === void 0 || (_this$meta_data$dossi13 = _this$meta_data$dossi13.caf_recorded_file) === null || _this$meta_data$dossi13 === void 0 ? void 0 : _this$meta_data$dossi13.filiale,
        is_group: "non",
        lang: (_this$lang = this.lang) !== null && _this$lang !== void 0 ? _this$lang : "fr"
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
      var value = event.target.checked ? event.target.value : "";
      this.pieces_versees_list[index]["value"] = value;
      var isClient = this.pieces_versees_list[index].is_client;
      var isCredit = this.pieces_versees_list[index].is_credit;
      var isSurete = this.pieces_versees_list[index].is_surete;
      var name = this.pieces_versees_list[index].name;
      var findIdxByName = function findIdxByName(arr) {
        return arr.findIndex(function (item) {
          return item.name === name;
        });
      };
      if (isClient) {
        var _index = findIdxByName(this.pieces_versees_clients);
        this.pieces_versees_clients[_index]["value"] = value;
      } else if (isCredit) {
        var _index2 = findIdxByName(this.pieces_versees_credits);
        this.pieces_versees_credits[_index2]["value"] = value;
      } else if (isSurete) {
        var _index3 = findIdxByName(this.pieces_versees_suretes);
        this.pieces_versees_suretes[_index3]["value"] = value;
      } else {
        var _index4 = findIdxByName(this.pieces_versees_autres);
        this.pieces_versees_autres[_index4]["value"] = value;
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
      var _this$meta_data$dossi14, _this$meta_data$dossi15, _this$meta_data5;
      var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];
      var applied_templ_name = (_this$meta_data$dossi14 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi14 === void 0 ? void 0 : _this$meta_data$dossi14.applied_templ_name;
      var tbArrays = this.determineCredPubTables(applied_templ_name, this.meta_data["dossier_credit"]);
      var tbPiecesVerseesList = ((_this$meta_data$dossi15 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi15 === void 0 ? void 0 : _this$meta_data$dossi15.pieces_versees_list) || [];
      if (((_this$meta_data5 = this.meta_data) === null || _this$meta_data5 === void 0 || (_this$meta_data5 = _this$meta_data5.dossier_credit) === null || _this$meta_data5 === void 0 || (_this$meta_data5 = _this$meta_data5.final_outcome) === null || _this$meta_data5 === void 0 ? void 0 : _this$meta_data5.outcome) == 1) {
        this.seen = true;
      }
      if (!Array.isArray(tbPiecesVerseesList) || tbPiecesVerseesList.length === 0) {
        var _this$meta_data6;
        this.loadCheckListData((_this$meta_data6 = this.meta_data) === null || _this$meta_data6 === void 0 ? void 0 : _this$meta_data6.dossier_credit, tbArrays[0], tbArrays[2], true);
      }
      if (lentb.length > 0) {
        if (this.meta_data["dossier_credit"][createdKey] != undefined) {
          var _this$meta_data$dossi16;
          this.formDataToBeWatched = this.meta_data["dossier_credit"][createdKey];
          if (((_this$meta_data$dossi16 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi16 === void 0 ? void 0 : _this$meta_data$dossi16.pieces_versees_list) != undefined) {
            var _this$meta_data$dossi17;
            if (((_this$meta_data$dossi17 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi17 === void 0 ? void 0 : _this$meta_data$dossi17.pieces_versees_list) != "") {
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
            this.pieces_versees_autres = this.pieces_versees_list.filter(function (liste) {
              return [liste.is_client, liste.is_surete, liste.is_credit].every(function (el) {
                return el !== true;
              });
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
      var _this10 = this;
      _services_auth_service_js__WEBPACK_IMPORTED_MODULE_5__["default"].loadUserData().then(function (res) {
        _this10.send2Backend(res, 0, 0);
      })["catch"](function (err) {
        _this10.loadWithError(err);
      });
    },
    addMore: function addMore() {
      var obj = {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_16__["default"])(),
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
        is_client: false,
        // this.activeMenu == "client" ? true : false,
        is_surete: false,
        // this.activeMenu == "surete" ? true : false,
        is_credit: false,
        // this.activeMenu == "credit" ? true : false,
        is_autre: true,
        // this.activeMenu == "autre" ? true : false,
        "default": false,
        is_dajc: false,
        is_post_approval: this.isPostAppro
      };
      this.pieces_versees_list.push(obj);
      this.pieces_versees_autres.push(this.pieces_versees_list[this.pieces_versees_list.length - 1]);
    },
    remove: function remove(id) {
      this.pieces_versees_list = this.pieces_versees_list.filter(function (item) {
        return item.id !== id;
      });
      this.handleInput();
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
      this.formDataToBeWatched.pieces_versees_list = _toConsumableArray(this.pieces_versees_list);
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
      var _this$pieces_versees_,
        _this11 = this;
      EventBus.$emit("open-extra-file-explorer");
      var filename = (_this$pieces_versees_ = this.pieces_versees_list[index]) === null || _this$pieces_versees_ === void 0 ? void 0 : _this$pieces_versees_.name;
      setTimeout(function () {
        EventBus.$emit("data-extra-file-explorer", {
          id: _this11.slugify(filename),
          name: filename + ' {(*)}pieces_versees_list' + index + "_" + _this11.$route.params.templateId
          // name: filename,
        });
      }, 500);
    },
    determineCurrentKey: function determineCurrentKey(element) {
      // if (element.is_client) {
      //     return "pieces_versees_clients";
      // } else if (element.is_credit) {
      //     return "pieces_versees_credits";
      // } else if (element.is_surete) {
      //     return "pieces_versees_suretes";
      // } else {
      //     return "pieces_versees_autres";
      // }
      return "pieces_versees_list";
    },
    getFiles: function getFiles() {
      var _this$meta_data7,
        _this12 = this;
      _services_proxy_service_js__WEBPACK_IMPORTED_MODULE_6__["default"].proxyEbapis({
        url: this.connectsHost + 'api/get-files',
        method: 'POST',
        data: {
          file_identity: (_this$meta_data7 = this.meta_data) === null || _this$meta_data7 === void 0 || (_this$meta_data7 = _this$meta_data7.dossier_credit) === null || _this$meta_data7 === void 0 ? void 0 : _this$meta_data7.cred_pub_key
        }
      }).then(function (res) {
        var _res$data$data, _res$data$data2;
        res.data = JSON.parse(res.data);
        _this12.filesToDelete = [];
        if (((_res$data$data = res.data.data) === null || _res$data$data === void 0 ? void 0 : _res$data$data.length) > 0 || ((_res$data$data2 = res.data.data) === null || _res$data$data2 === void 0 ? void 0 : _res$data$data2.length) != null) {
          _this12.files = res.data.data;
          var current_key = _this12.determineCurrentKey();
          _this12[current_key].forEach(function (element, index) {
            var count = 0;
            _this12.files.forEach(function (file) {
              var _element$template;
              if ((file === null || file === void 0 ? void 0 : file.extra_file_template_id) != null && (element === null || element === void 0 || (_element$template = element.template) === null || _element$template === void 0 ? void 0 : _element$template.id) == (file === null || file === void 0 ? void 0 : file.extra_file_template_id)) {
                _this12.filesToDelete.push({
                  id: file.id,
                  file_url: file.file_url
                });
                count++;
              }
            });
            _this12[current_key][index]['files'] = count;
          });
          // console.log('filesToDelete',this.filesToDelete);
        }
      })["catch"](function (err) {
        console.error("getFiles error", err);
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
    },
    lang: function lang(newVal, oldVal) {
      if (newVal) {
        if (this.formDataToBeWatched.lang) {
          if (newVal != this.formDataToBeWatched.lang) {
            this.loadCheckListData();
          }
        } else {
          this.loadCheckListData();
          this.formDataToBeWatched.lang = newVal;
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/afg/filiale/LanguageSelector.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/afg/filiale/LanguageSelector.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'LanguageSelector',
  props: {
    value: {
      type: String,
      "default": ''
    }
  },
  data: function data() {
    return {
      languages: [{
        code: 'fr',
        name: 'Français',
        flag: '🇫🇷'
      }, {
        code: 'en',
        name: 'English',
        flag: '🇬🇧'
      }],
      selectedLanguage: this.value
    };
  },
  watch: {
    value: function value(newValue) {
      this.selectedLanguage = newValue;
    }
  },
  methods: {
    selectLanguage: function selectLanguage(code) {
      this.selectedLanguage = code;
      this.$emit('input', code);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/afg/filiale/DAJ-PR.vue?vue&type=template&id=262f0250&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/afg/filiale/DAJ-PR.vue?vue&type=template&id=262f0250&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$formDataToBeWatch, _vm$meta_data, _this$meta_data$dossi, _vm$formDataToBeWatch2;
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
  }, [!_vm.isPostAppro ? _c("ContextMenu", {
    ref: "menu",
    attrs: {
      id: _vm.tb_name,
      cred_pub_key: _vm.meta_parseable.cred_pub_key,
      tb_name: _vm.tb_name,
      contextList: _vm.contextList,
      filesToDelete: []
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
  }, [_vm._v("\n                                " + _vm._s(_vm.tb_display_name) + " : Checklist\n                            ")]), _vm._v(" "), _c("div", {
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
  }, [_c("span", [_vm._v("\n                                                " + _vm._s(_vm.formDataToBeWatched.notes.length) + "\n                                            ")])])])]) : _vm._e(), _vm._v(" "), _c("chevron-up-icon", {
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
  }, [_vm.isLoadingData ? _c("div", [_vm._m(1)]) : _c("div", [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(2), _vm._v(" "), _c("tbody", [_vm._l(_vm.pieces_versees_list, function (el, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_vm._v(" " + _vm._s(index + 1) + " ")]), _vm._v(" "), _c("td", [!el["default"] ? _c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.name,
        expression: "el.name"
      }],
      staticClass: "form-control",
      attrs: {
        cols: "5",
        rows: "2"
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
        disabled: _vm.isPostAppro && !el.is_post_approval
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
        disabled: _vm.isPostAppro && !el.is_post_approval
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
        disabled: _vm.isPostAppro && !el.is_post_approval
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
    }, [_vm._v("\n                                                        Aucun fichier(s) uploadé(s)\n                                                    ")])]), _vm._v(" "), _c("td", [_c("textarea", {
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
        disabled: _vm.isPostAppro && !el.is_post_approval
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
    })]), _vm._v(" "), _c("td", [!_vm.isPostAppro && !el["default"] || el.is_post_approval ? _c("button", {
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
    })], 1) : _vm._e()])]);
  }), _vm._v(" "), _c("tr", [_c("td", {
    attrs: {
      colspan: "7"
    }
  }), _vm._v(" "), _c("td", {
    attrs: {
      rowspan: _vm.pieces_versees_list.length - 1
    }
  }, [_c("button", {
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
  })], 1)])])], 2)])]), _vm._v(" "), ((_vm$meta_data = _vm.meta_data) === null || _vm$meta_data === void 0 || (_vm$meta_data = _vm$meta_data.dossier_credit) === null || _vm$meta_data === void 0 || (_vm$meta_data = _vm$meta_data.final_outcome) === null || _vm$meta_data === void 0 ? void 0 : _vm$meta_data.outcome) == 0 ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "col-md-12 mt-0 mb-4"
  }, [_vm._m(3), _vm._v(" "), _c("vue-editor", {
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
      expression: "formDataToBeWatched.comment_pieces_requises\n                                                "
    }
  })], 1)]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "mb-5"
  }), _vm._v(" "), !((_this$meta_data$dossi = this.meta_data["dossier_credit"]) !== null && _this$meta_data$dossi !== void 0 && (_this$meta_data$dossi = _this$meta_data$dossi.final_outcome) !== null && _this$meta_data$dossi !== void 0 && _this$meta_data$dossi.outcome) != 0 || _vm.isPostAppro ? _c("button", {
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
  }, [_vm._v("\n                                Fermer le tableau\n                            ")]) : _vm._e()])])])]) : _c("div", {
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
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Checklist\n                        ")]), _vm._v(" "), _c("div", {
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
  }), _vm._v(" "), _c("h5", [_vm._v("\n                                Chargement des données en cours ... "), _c("br"), _vm._v("\n                                Ceci peut prendre un peu de temps\n                            ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "d-flex justify-content-center text-center align-items-center text-muted py-4"
  }, [_c("div", [_c("span", {
    staticClass: "spinner-border spinner-border"
  }), _vm._v(" "), _c("h5", [_vm._v("\n                                                Chargement des données en cours ... "), _c("br"), _vm._v("\n                                                Ceci peut prendre un peu de temps\n                                            ")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", {
    staticClass: "text-center"
  }, [_c("td", {
    staticClass: "th fw-bold"
  }, [_c("label", [_vm._v("N°")])]), _vm._v(" "), _c("td", {
    staticClass: "th fw-bold",
    staticStyle: {
      "min-width": "300px"
    }
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
  }, [_c("label")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_c("b", [_vm._v("Commentaire")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/afg/filiale/LanguageSelector.vue?vue&type=template&id=67d7fb65&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/afg/filiale/LanguageSelector.vue?vue&type=template&id=67d7fb65&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "language-selector text-center"
  }, [_c("span", {
    staticClass: "question"
  }, [_vm._v("Veuillez choisir une langue :")]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("div", {
    staticClass: "language-cards"
  }, _vm._l(_vm.languages, function (language) {
    return _c("div", {
      key: language.code,
      staticClass: "language-card",
      "class": {
        selected: _vm.selectedLanguage === language.code
      },
      on: {
        click: function click($event) {
          return _vm.selectLanguage(language.code);
        }
      }
    }, [_c("div", {
      staticClass: "flag-container"
    }, [language.code === "fr" ? _c("svg", {
      staticClass: "flag-svg",
      attrs: {
        viewBox: "0 0 900 600",
        xmlns: "http://www.w3.org/2000/svg"
      }
    }, [_c("rect", {
      attrs: {
        width: "300",
        height: "600",
        fill: "#002654"
      }
    }), _vm._v(" "), _c("rect", {
      attrs: {
        x: "300",
        width: "300",
        height: "600",
        fill: "white"
      }
    }), _vm._v(" "), _c("rect", {
      attrs: {
        x: "600",
        width: "300",
        height: "600",
        fill: "#CE1126"
      }
    })]) : language.code === "en" ? _c("svg", {
      staticClass: "flag-svg",
      attrs: {
        viewBox: "0 0 1200 600",
        xmlns: "http://www.w3.org/2000/svg"
      }
    }, [_c("rect", {
      attrs: {
        width: "1200",
        height: "600",
        fill: "#012169"
      }
    }), _vm._v(" "), _c("path", {
      attrs: {
        d: "M0,0 L1200,600 M1200,0 L0,600",
        stroke: "white",
        "stroke-width": "120"
      }
    }), _vm._v(" "), _c("path", {
      attrs: {
        d: "M0,0 L1200,600 M1200,0 L0,600",
        stroke: "#C8102E",
        "stroke-width": "80"
      }
    }), _vm._v(" "), _c("path", {
      attrs: {
        d: "M600,0 V600 M0,300 H1200",
        stroke: "white",
        "stroke-width": "200"
      }
    }), _vm._v(" "), _c("path", {
      attrs: {
        d: "M600,0 V600 M0,300 H1200",
        stroke: "#C8102E",
        "stroke-width": "120"
      }
    })]) : _vm._e()]), _vm._v(" "), _c("div", {
      staticClass: "language-name"
    }, [_vm._v(_vm._s(language.name))])]);
  }), 0)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/afg/filiale/DAJ-PR.vue?vue&type=style&index=1&id=262f0250&lang=css&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/afg/filiale/DAJ-PR.vue?vue&type=style&index=1&id=262f0250&lang=css&scoped=true ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-262f0250] {\r\n    font-family: \"Google sans\";\n}\nlabel[data-v-262f0250] {\r\n    height: 10px;\r\n    font-size: 13px;\n}\ninput[type=\"text\"][data-v-262f0250],\r\ninput[type=\"date\"][data-v-262f0250],\r\nselect[data-v-262f0250] {\r\n    height: 35px;\r\n    border-color: #34495e;\r\n    color: #57606f;\r\n    font-size: 13px;\r\n    font-weight: bold;\n}\n.card-width-height[data-v-262f0250] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-262f0250] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\n.hdc[data-v-262f0250] {\r\n    background-color: #57606f;\n}\n.card-width-height[data-v-262f0250] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-262f0250] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\n.review[data-v-262f0250] {\r\n    width: 180px !important;\n}\n.engagement input[type=\"text\"][data-v-262f0250],\r\ninput[type=\"date\"][data-v-262f0250] {\r\n    width: 100% !important;\n}\n.th[data-v-262f0250] {\r\n    padding: 4px;\r\n    padding-bottom: 0px;\n}\r\n\r\n/* select {\r\n    width: 250px;\r\n} */\n.badge-sm[data-v-262f0250] {\r\n    display: inline-block;\r\n    width: 15px;\r\n    height: 15px;\r\n    background: rgba(255, 0, 0, 0.882);\r\n    color: white;\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    border-radius: 100%;\r\n    position: absolute;\r\n    top: -20%;\r\n    left: 55%;\r\n    text-align: center;\n}\n.relook-header[data-v-262f0250] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\ninput[type=\"checkbox\"][data-v-262f0250] {\r\n    height: 18px;\r\n    width: 20px;\r\n    margin-right: 5px;\n}\n.image1[data-v-262f0250] {\r\n    background: url(\"/images/capture/exemples/documentation_somise.png\") no-repeat;\r\n    background-position: center;\r\n    background-size: contain;\r\n\r\n    width: 500px;\r\n    height: 300px;\n}\n.btn-group .multiselect[data-v-262f0250] {\r\n    border: 1px solid #ced4da;\n}\r\n\r\n/* .select-with-checkbox {\r\n  border: 1px solid #ddd;\r\n  padding: 10px;\r\n  width: 200px;\r\n} */\n.select-with-checkbox[data-v-262f0250] {\r\n    position: relative;\n}\n.select-with-checkbox .options[data-v-262f0250] {\r\n    z-index: 15;\r\n    position: absolute;\r\n    background: white;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/afg/filiale/LanguageSelector.vue?vue&type=style&index=0&id=67d7fb65&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/afg/filiale/LanguageSelector.vue?vue&type=style&index=0&id=67d7fb65&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.language-selector[data-v-67d7fb65] {\r\n  padding: 20px;\r\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n.question[data-v-67d7fb65] {\r\n  font-size: 13px;\r\n  font-weight: 600;\r\n  color: #333;\r\n  margin-bottom: 20px;\r\n  text-align: center;\n}\n.language-cards[data-v-67d7fb65] {\r\n  display: flex;\r\n  gap: 20px;\r\n  justify-content: center;\r\n  flex-wrap: wrap;\n}\n.language-card[data-v-67d7fb65] {\r\n  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);\r\n  border: 2px solid #dee2e6;\r\n  border-radius: 12px;\r\n  padding: 24px 20px;\r\n  cursor: pointer;\r\n  transition: all 0.3s ease;\r\n  text-align: center;\r\n  min-width: 140px;\r\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.language-card[data-v-67d7fb65]:hover {\r\n  transform: translateY(-4px);\r\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);\r\n  border-color: #6c757d;\n}\n.language-card.selected[data-v-67d7fb65] {\r\n  background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);\r\n  border-color: #0056b3;\r\n  color: white;\r\n  transform: translateY(-4px);\r\n  box-shadow: 0 8px 25px rgba(0, 123, 255, 0.3);\n}\n.flag-container[data-v-67d7fb65] {\r\n  margin-bottom: 12px;\n}\n.flag-svg[data-v-67d7fb65] {\r\n  width: 48px;\r\n  height: 32px;\r\n  border-radius: 4px;\r\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\r\n  border: 1px solid #dee2e6;\n}\n.language-name[data-v-67d7fb65] {\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  margin: 0;\n}\n.language-card.selected .language-name[data-v-67d7fb65] {\r\n  color: white;\n}\n@media (max-width: 768px) {\n.language-cards[data-v-67d7fb65] {\r\n    flex-direction: column;\r\n    align-items: center;\n}\n.language-card[data-v-67d7fb65] {\r\n    width: 100%;\r\n    max-width: 200px;\n}\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/afg/filiale/DAJ-PR.vue?vue&type=style&index=1&id=262f0250&lang=css&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/afg/filiale/DAJ-PR.vue?vue&type=style&index=1&id=262f0250&lang=css&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJ_PR_vue_vue_type_style_index_1_id_262f0250_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DAJ-PR.vue?vue&type=style&index=1&id=262f0250&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/afg/filiale/DAJ-PR.vue?vue&type=style&index=1&id=262f0250&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJ_PR_vue_vue_type_style_index_1_id_262f0250_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJ_PR_vue_vue_type_style_index_1_id_262f0250_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/afg/filiale/LanguageSelector.vue?vue&type=style&index=0&id=67d7fb65&scoped=true&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/afg/filiale/LanguageSelector.vue?vue&type=style&index=0&id=67d7fb65&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LanguageSelector_vue_vue_type_style_index_0_id_67d7fb65_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LanguageSelector.vue?vue&type=style&index=0&id=67d7fb65&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/afg/filiale/LanguageSelector.vue?vue&type=style&index=0&id=67d7fb65&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LanguageSelector_vue_vue_type_style_index_0_id_67d7fb65_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LanguageSelector_vue_vue_type_style_index_0_id_67d7fb65_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/contreanalyse/afg/filiale/DAJ-PR.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/components/contreanalyse/afg/filiale/DAJ-PR.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DAJ_PR_vue_vue_type_template_id_262f0250_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DAJ-PR.vue?vue&type=template&id=262f0250&scoped=true */ "./resources/js/components/contreanalyse/afg/filiale/DAJ-PR.vue?vue&type=template&id=262f0250&scoped=true");
/* harmony import */ var _DAJ_PR_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DAJ-PR.vue?vue&type=script&lang=js */ "./resources/js/components/contreanalyse/afg/filiale/DAJ-PR.vue?vue&type=script&lang=js");
/* harmony import */ var _vueform_multiselect_themes_default_css_vue_type_style_index_0_lang_css_external__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vueform/multiselect/themes/default.css?vue&type=style&index=0&lang=css&external */ "./node_modules/@vueform/multiselect/themes/default.css?vue&type=style&index=0&lang=css&external");
/* harmony import */ var _DAJ_PR_vue_vue_type_style_index_1_id_262f0250_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DAJ-PR.vue?vue&type=style&index=1&id=262f0250&lang=css&scoped=true */ "./resources/js/components/contreanalyse/afg/filiale/DAJ-PR.vue?vue&type=style&index=1&id=262f0250&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;



/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _DAJ_PR_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _DAJ_PR_vue_vue_type_template_id_262f0250_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _DAJ_PR_vue_vue_type_template_id_262f0250_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "262f0250",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/contreanalyse/afg/filiale/DAJ-PR.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/contreanalyse/afg/filiale/DAJ-PR.vue?vue&type=script&lang=js":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/afg/filiale/DAJ-PR.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJ_PR_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DAJ-PR.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/afg/filiale/DAJ-PR.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJ_PR_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/contreanalyse/afg/filiale/DAJ-PR.vue?vue&type=style&index=1&id=262f0250&lang=css&scoped=true":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/afg/filiale/DAJ-PR.vue?vue&type=style&index=1&id=262f0250&lang=css&scoped=true ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJ_PR_vue_vue_type_style_index_1_id_262f0250_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DAJ-PR.vue?vue&type=style&index=1&id=262f0250&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/afg/filiale/DAJ-PR.vue?vue&type=style&index=1&id=262f0250&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/contreanalyse/afg/filiale/DAJ-PR.vue?vue&type=template&id=262f0250&scoped=true":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/afg/filiale/DAJ-PR.vue?vue&type=template&id=262f0250&scoped=true ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJ_PR_vue_vue_type_template_id_262f0250_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJ_PR_vue_vue_type_template_id_262f0250_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJ_PR_vue_vue_type_template_id_262f0250_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DAJ-PR.vue?vue&type=template&id=262f0250&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/afg/filiale/DAJ-PR.vue?vue&type=template&id=262f0250&scoped=true");


/***/ }),

/***/ "./resources/js/components/contreanalyse/afg/filiale/LanguageSelector.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/afg/filiale/LanguageSelector.vue ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LanguageSelector_vue_vue_type_template_id_67d7fb65_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LanguageSelector.vue?vue&type=template&id=67d7fb65&scoped=true */ "./resources/js/components/contreanalyse/afg/filiale/LanguageSelector.vue?vue&type=template&id=67d7fb65&scoped=true");
/* harmony import */ var _LanguageSelector_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LanguageSelector.vue?vue&type=script&lang=js */ "./resources/js/components/contreanalyse/afg/filiale/LanguageSelector.vue?vue&type=script&lang=js");
/* harmony import */ var _LanguageSelector_vue_vue_type_style_index_0_id_67d7fb65_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LanguageSelector.vue?vue&type=style&index=0&id=67d7fb65&scoped=true&lang=css */ "./resources/js/components/contreanalyse/afg/filiale/LanguageSelector.vue?vue&type=style&index=0&id=67d7fb65&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _LanguageSelector_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _LanguageSelector_vue_vue_type_template_id_67d7fb65_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _LanguageSelector_vue_vue_type_template_id_67d7fb65_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "67d7fb65",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/contreanalyse/afg/filiale/LanguageSelector.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/contreanalyse/afg/filiale/LanguageSelector.vue?vue&type=script&lang=js":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/afg/filiale/LanguageSelector.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LanguageSelector_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LanguageSelector.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/afg/filiale/LanguageSelector.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LanguageSelector_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/contreanalyse/afg/filiale/LanguageSelector.vue?vue&type=style&index=0&id=67d7fb65&scoped=true&lang=css":
/*!****************************************************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/afg/filiale/LanguageSelector.vue?vue&type=style&index=0&id=67d7fb65&scoped=true&lang=css ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LanguageSelector_vue_vue_type_style_index_0_id_67d7fb65_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LanguageSelector.vue?vue&type=style&index=0&id=67d7fb65&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/afg/filiale/LanguageSelector.vue?vue&type=style&index=0&id=67d7fb65&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/contreanalyse/afg/filiale/LanguageSelector.vue?vue&type=template&id=67d7fb65&scoped=true":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/afg/filiale/LanguageSelector.vue?vue&type=template&id=67d7fb65&scoped=true ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LanguageSelector_vue_vue_type_template_id_67d7fb65_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LanguageSelector_vue_vue_type_template_id_67d7fb65_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LanguageSelector_vue_vue_type_template_id_67d7fb65_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LanguageSelector.vue?vue&type=template&id=67d7fb65&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/afg/filiale/LanguageSelector.vue?vue&type=template&id=67d7fb65&scoped=true");


/***/ }),

/***/ "./resources/js/services/afg/check-list-constants.js":
/*!***********************************************************!*\
  !*** ./resources/js/services/afg/check-list-constants.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var CheckListConstant = {
  banque: "AFG BANQUE",
  direction: "DAJ",
  client_type: [{
    slug: "physique_ordinaire",
    name: "physique ordinaire"
  }, {
    slug: "physique_commercante",
    name: "Physique commerçante"
  }, {
    slug: "morale_ordinaire",
    name: "Morale ordinaire"
  }, {
    slug: "societes_commerciales",
    name: "Sociétés commerciales / entreprises"
  }, {
    slug: "ong_et_associations",
    name: "ONG et associations"
  }, {
    slug: "sci",
    name: "SCI"
  }],
  credit_family: [{
    parent: "AVANCE SUR FACTURE",
    slug: "avance_sur_facture",
    children: [{
      slug: "",
      name: "Avance sur facture"
    }, {
      slug: "",
      name: "Escompte commerciale"
    }, {
      slug: "",
      name: "Escompte financier"
    }, {
      slug: "",
      name: "Escompte effets"
    }, {
      slug: "",
      name: "Escompte de traite"
    }, {
      slug: "",
      name: "Escompte documentaire"
    }]
  }, {
    parent: "AVANCE SUR BON DE COMMANDE",
    slug: "avance_sur_bon_de_commande",
    children: [{
      slug: "",
      name: "Avance sur bon de commande"
    }, {
      slug: "",
      name: "Avance sur marché"
    }]
  }, {
    parent: "PRÊTS AMORTISSABLES",
    slug: "pret_amortissables",
    children: [{
      name: "Découvert",
      slug: ""
    }, {
      name: "Crédit d'investissement",
      slug: ""
    }, {
      name: "Crédit Court Terme",
      slug: ""
    }, {
      name: "Crédit Moyen Terme",
      slug: ""
    }, {
      name: "Crédit Long Terme",
      slug: ""
    }, {
      name: "Spot",
      slug: ""
    }, {
      name: "Facilité de caisse",
      slug: ""
    }]
  }, {
    parent: "OUVERTURE DE CREDIT NEGOCE ICAFE-CACAO",
    slug: "ouverture_de_credit_negoce_icafe_cacao",
    children: [{
      name: "Crédit de Campagne",
      slug: ""
    }, {
      name: "ASPG",
      slug: ""
    }, {
      name: "ASPM",
      slug: ""
    }, {
      name: "ACM (Avance Contre Marchandises)",
      slug: ""
    }]
  }, {
    parent: "LES CAUTIONS SUR MARCHES (Provisoires, Définitives, de Retenue de Garantie, d'Avance de Démarrage) ",
    slug: "cautions_sur_marche",
    children: [{
      name: "Caution de soumissission",
      slug: ""
    }, {
      name: "Caution de demarrage",
      slug: ""
    }, {
      name: "Caution provisoire",
      slug: ""
    }, {
      name: "Caution définitive",
      slug: ""
    }, {
      name: "Caution de bonne fin",
      slug: ""
    }, {
      name: "Caution de retenue de garantie",
      slug: ""
    }, {
      name: "Caution marché",
      slug: ""
    }, {
      name: "Caution de déblocage",
      slug: ""
    }, {
      name: "Cautions",
      slug: ""
    }]
  }, {
    parent: "LES CAUTIONS FISCALES & DIVERSES (Tva, Caution en Garantie de Paiement...)",
    slug: "cautions_fiscales_et_diverses",
    children: [{
      name: "Caution de garantie de paiement",
      slug: ""
    }, {
      name: "Caution fiscale",
      slug: ""
    }, {
      name: "Caution d'agrément",
      slug: ""
    }, {
      name: "Caution pour impôt contesté",
      slug: ""
    }]
  }, {
    parent: "CREDIT D'ENLEVEMENT",
    slug: "credit_enlevement",
    children: []
  }, {
    parent: "LES OBLIGATIONS CAUTIONNEES",
    slug: "les_obligations_cautionnees",
    children: [{
      name: "Obligation Cautionnée",
      slug: ""
    }]
  }, {
    parent: "ENTREPOTS FICTIFS",
    slug: "entrepots_fictifs",
    children: [{
      name: "Caution d'admission temporaire",
      slug: ""
    }]
  }, {
    parent: "AVAL SUR EFFET",
    slug: "aval_sur_effet",
    children: [{
      name: "Aval de traites",
      slug: ""
    }]
  }, {
    parent: "CREDIT-BAIL",
    slug: "credit_bail",
    children: [{
      name: "Crédit bail",
      slug: ""
    }]
  }, {
    parent: "CREDIT DOCUMENTAIRE",
    slug: "credit_documentaire",
    children: [{
      name: "Credoc Irrévocable",
      slug: ""
    }, {
      name: "Credoc notifié",
      slug: ""
    }, {
      name: "Credoc confirmé",
      slug: ""
    }, {
      name: "Engagement de financement",
      slug: ""
    }, {
      name: "LC's",
      slug: ""
    }, {
      name: "SBLC",
      slug: ""
    }]
  }, {
    parent: "AUTRE BILAN",
    slug: "autre_bilan",
    children: [{
      name: "Autres",
      slug: ""
    }]
  }, {
    parent: "AUTRE HORS-BILAN",
    slug: "autre_hors_bilan",
    children: [{
      name: "Autres",
      slug: ""
    }]
  }],
  surete_keys_map: [{
    name: "hypotheques",
    key: "bien_hypotheque"
  }, {
    name: "gages",
    key: "type"
  }, {
    name: "cautionnement_solidaires",
    key: "nom_prenoms"
  }, {
    name: "cautionnement_solidaires_personnes_morales",
    key: "denomination_sociale"
  }, {
    name: "caution_hypothecaires",
    key: "bien"
  }, {
    name: "protection_financieres",
    key: "garantie"
  }, {
    name: "cond_particulieres",
    key: "cond_name"
  }, {
    name: "suretes_diverses",
    key: "isChecked"
  }, {
    name: "autres_suretes_diverses",
    key: "label"
  }, {
    name: "nantissements",
    key: "type"
  }, {
    name: "cession_creances",
    key: "type"
  }],
  surete_family: [{
    parent: "NANTISSEMENT DE TITRES ",
    slug: "nantissement_de_titres",
    children: [{
      name: "Nantissement de titres",
      slug: "nantissement_de_titres",
      ens_family: ["CC"]
    }],
    to: "réelles"
  }, {
    parent: "NANTISSEMENT DE COMPTE",
    slug: "nantissement_de_compte",
    children: [{
      name: "Nantissement de compte",
      slug: "nantissement_de_compte"
    }],
    to: "réelles"
  }, {
    parent: "NANTISSEMENT DE MARCHE PUBLIC",
    slug: "nantissement_de_marche_public",
    children: [{
      name: "Nantissement de marché public",
      slug: "nantissement_de_marche_public"
    }],
    to: "réelles"
  }, {
    parent: "GAGE DE MATERIELS GAGE DE STOCKS GAGE DE MARCHANDISES ET PRODUITS NANTIS",
    slug: "gage_materiel_stock_machandises_produits_nantis",
    children: [{
      name: "Autres matériels",
      slug: "gage_materiel_stock_machandises_produits_nantis",
      ens_family: ["PPC", "PMC"]
    }],
    to: "réelles"
  }, {
    parent: "GAGE DE VEHICULE",
    slug: "gage_de_vehicule",
    children: [{
      name: "Gage véhicule",
      slug: "gage_de_vehicule"
    }],
    to: "réelles"
  }, {
    parent: "NANTISSEMENT DE FDC ETENDU AU MATERIEL",
    slug: "nantissement_de_fdc_au_materiel",
    children: [{
      name: "Nantissement de FDC etendu au matériel",
      slug: "nantissement_de_fdc_au_materiel"
    }],
    to: "réelles"
  }, {
    parent: "CESSION DE CREANCE",
    slug: "cession_creance",
    children: [{
      name: "Cession de créance",
      slug: "cession_creances"
    }, {
      name: "Nantissement de créance",
      slug: "nantissements_creation"
    }],
    to: "réelles"
  }, {
    parent: "HYPOTHEQUE",
    slug: "hypotheque",
    children: [{
      name: "Hypothèques",
      slug: "hypotheques",
      ens_family: ["PP", "CPM"]
    }, {
      name: "Caution hypothécaire",
      slug: "caution_hypothecaires"
    }, {
      name: "PAH",
      slug: "pah"
    }],
    to: "réelles"
  }, {
    parent: "CAUTIONNEMENT SOLIDAIRE ET PERSONNEL",
    slug: "cautionnement_solidaire_et_personnel",
    children: [{
      name: "Cautionnement solidaire physique",
      slug: "cautionnement_solidaires",
      ens_family: ["PP"]
    }, {
      name: "Cautionnement solidaire morale",
      slug: "cautionnement_solidaires_personnes_morales",
      ens_family: ["PM"]
    }],
    to: "personnelles"
  }, {
    parent: "GARANTIES AUTONOMES ET CONTRE GARANTIES AUTONOMES ",
    slug: "garanties_autonomes_et_contre_garanties_autonomes",
    children: [{
      name: "Protections financières éligibles",
      slug: "protection_financieres"
    }],
    to: "personnelles"
  }, {
    parent: "AUTRE",
    slug: "autre_reeles",
    children: [{
      name: "Sûretés diverses",
      slug: "suretes_diverses"
    }, {
      name: "Conditions particulières",
      slug: "cond_particulieres"
    }],
    to: "personnelles"
  }, {
    parent: "AUTRE",
    slug: "autre_personnelles",
    children: [{
      name: "Sûretés diverses",
      slug: "autres_suretes_diverses"
    }, {
      name: "Conditions particulières",
      slug: "cond_particulieres"
    }],
    to: "réelles"
  }]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckListConstant);

/***/ }),

/***/ "./resources/js/services/afg/check-list-manager.js":
/*!*********************************************************!*\
  !*** ./resources/js/services/afg/check-list-manager.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _custom_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom.axios */ "./resources/js/services/custom.axios.js");
/* harmony import */ var _check_list_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./check-list-constants */ "./resources/js/services/afg/check-list-constants.js");
/* harmony import */ var _f8_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./f8-constants */ "./resources/js/services/afg/f8-constants.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



var CheckListManager = /*#__PURE__*/function () {
  function CheckListManager() {
    _classCallCheck(this, CheckListManager);
  }
  return _createClass(CheckListManager, [{
    key: "determineParentSlugByChildName",
    value: function determineParentSlugByChildName(childName, obj) {
      var key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var find = {
        "children": [],
        "parent": null,
        "ens_family": ""
      };
      var _iterator = _createForOfIteratorHelper(_check_list_constants__WEBPACK_IMPORTED_MODULE_1__["default"][obj]),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var category = _step.value;
          var _iterator2 = _createForOfIteratorHelper(category.children),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var child = _step2.value;
              if (obj == "credit_family") {
                if (child.name === childName) {
                  // console.log(child.name,childName,"comparaison credit",child.name == childName,category.slug);
                  return category.slug;
                }
              }

              // Gage véhicule
              // Autres matériels

              if (obj == "surete_family") {
                var compare_key = child.slug;
                if (![null, undefined].includes(key) && ["nantissements", "gages"].includes(key)) {
                  compare_key = child.name;
                }
                if (compare_key === childName) {
                  var child_ens_family = child === null || child === void 0 ? void 0 : child.ens_family;
                  // console.log("childName",childName);
                  // console.log(child.slug,childName,"comparaison sûrete",child.slug == childName,category.slug);

                  if (![null, undefined].includes(key) && ["nantissements", "gages"].includes(key)) {
                    find['children'].push(child.slug);
                  } else {
                    find['children'].push(childName);
                  }
                  find['parent'] = category.slug;
                  find['ens_family'] = child_ens_family;
                  // return category.slug
                }
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return find;
    }
  }, {
    key: "load",
    value: function () {
      var _load = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(host, params) {
        var response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _custom_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(host + "creditbuilder/api/v1/afg/get-checklist/", {
                params: params
              });
            case 3:
              response = _context.sent;
              return _context.abrupt("return", {
                check_list_document: response.data.check_list_document
              });
            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              throw Error('Error occured when loading  check list');
            case 10:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 7]]);
      }));
      function load(_x, _x2) {
        return _load.apply(this, arguments);
      }
      return load;
    }()
  }, {
    key: "automateChecker",
    value: function automateChecker(dossier_credit, tb_00, tb_08, use_dossier_credit) {
      // console.log("tb_00 ** ",tb_00, "dossier_credit **",dossier_credit);

      var data = dossier_credit === null || dossier_credit === void 0 ? void 0 : dossier_credit[tb_00];
      var dataf8 = use_dossier_credit && tb_08 == 'cred_pub_tb_8' ? dossier_credit === null || dossier_credit === void 0 ? void 0 : dossier_credit[tb_08] : tb_08;
      var type_de_clientele = use_dossier_credit ? data === null || data === void 0 ? void 0 : data.type_de_clientele : tb_00 === null || tb_00 === void 0 ? void 0 : tb_00.type_de_clientele;

      // console.log("dataf8 * ",dataf8, "type_de_clientele -",type_de_clientele, "data",data);

      var type_credits_selected = [];
      var type_de_suretes_selected = [];
      var type_de_clientele_selected = this.typeClienteleAutomate(type_de_clientele);

      // for type clientele

      // for type_credits and surete_type

      type_credits_selected = this.typecreditsAutomate(dataf8);
      type_de_suretes_selected = this.typesureteAutomate(dataf8);
      return {
        type_de_clientele: type_de_clientele_selected,
        type_de_credits: type_credits_selected,
        type_de_suretes: type_de_suretes_selected,
        use_dossier_credit: use_dossier_credit
      };
    }
  }, {
    key: "typeClienteleAutomate",
    value: function typeClienteleAutomate(data) {
      var type_de_clientele_selected = "";
      if (['Professionnel'].includes(data)) {
        type_de_clientele_selected = 'physique_ordinaire';
      }
      if (['Entreprises', 'PME/PMI', 'TPE/TPI'].includes(data)) {
        type_de_clientele_selected = 'societes_commerciales';
      }
      if (['Autres'].includes(data)) {
        type_de_clientele_selected = 'autres';
      }
      if (['SCI'].includes(data)) {
        type_de_clientele_selected = 'sci';
      }
      if (['ONG et associations'].includes(data)) {
        type_de_clientele_selected = 'ong_et_associations';
      }
      if (['Microfinances', 'Mutuelles'].includes(data)) {
        type_de_clientele_selected = 'structure_financiere_decentralise_sfd';
      }
      if (['Assurances'].includes(data)) {
        type_de_clientele_selected = 'assurances';
      }
      if (['Fonds Commun de Placement'].includes(data)) {
        type_de_clientele_selected = 'fonds_commun_de_placement';
      }
      if (['Institutionnels', 'États'].includes(data)) {
        type_de_clientele_selected = 'institutionnels';
      }
      if (['États'].includes(data)) {
        type_de_clientele_selected = 'etats';
      }
      return type_de_clientele_selected;
    }
  }, {
    key: "typecreditsAutomate",
    value: function typecreditsAutomate(dataf8) {
      var _this = this;
      var type_credits = [];
      var f8_cred_key = dataf8;
      var dataLigneKey = ["nouvelles_lignes_caisse", "nouvelles_lignes_signature"];
      if (![undefined, null, []].includes(f8_cred_key)) {
        var _iterator3 = _createForOfIteratorHelper(dataLigneKey),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var key = _step3.value;
            var current_ligne_key = f8_cred_key[key];
            // console.log("current_ligne_key",current_ligne_key);
            if (![undefined, null, []].includes(current_ligne_key)) {
              if ((current_ligne_key === null || current_ligne_key === void 0 ? void 0 : current_ligne_key.length) > 0) {
                current_ligne_key.forEach(function (credit) {
                  var ligne = credit.ligne;
                  // console.log("ligne",ligne);
                  if (ligne != "" && (credit === null || credit === void 0 ? void 0 : credit.statut) != "Abandon") {
                    var parent_slug = _this.determineParentSlugByChildName(ligne, "credit_family");
                    // console.log("parent_slug",parent_slug, "typeof parent_slug",typeof parent_slug);
                    if (_typeof(parent_slug) != 'object') {
                      if (![undefined, null, ""].includes(parent_slug)) {
                        if (!type_credits.includes(parent_slug)) {
                          type_credits.push(parent_slug);
                        }
                      }
                    }
                  }
                });
              }
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
      // console.log("typecreditsAutomate type_credits",type_credits);
      return type_credits;
    }
  }, {
    key: "determineKeySurete",
    value: function determineKeySurete(search) {
      var _CheckListConstant$su;
      return (_CheckListConstant$su = _check_list_constants__WEBPACK_IMPORTED_MODULE_1__["default"].surete_keys_map.find(function (el) {
        return el.name == search;
      })) === null || _CheckListConstant$su === void 0 ? void 0 : _CheckListConstant$su.key;
    }
  }, {
    key: "typesureteAutomate",
    value: function typesureteAutomate(dataf8) {
      var _this2 = this;
      var type_suretes = [];
      var type_suretes_ = [];
      var f8_cred_key = dataf8;
      if (![undefined, null, []].includes(f8_cred_key)) {
        var _iterator4 = _createForOfIteratorHelper(_f8_constants__WEBPACK_IMPORTED_MODULE_2__["default"].surete_keys),
          _step4;
        try {
          var _loop = function _loop() {
            var key = _step4.value;
            // const current_surete_key = f8_cred_key[key]
            var current_surete_key = f8_cred_key[key] ? JSON.parse(JSON.stringify(f8_cred_key[key])) : null;
            if (![undefined, null, []].includes(current_surete_key)) {
              if ((current_surete_key === null || current_surete_key === void 0 ? void 0 : current_surete_key.length) > 0) {
                var parent_slug = null;
                var key_used = _this2.determineKeySurete(key);
                var check_ = false;
                if (key == 'suretes_diverses') {
                  check_ = current_surete_key.some(function (el) {
                    return el === null || el === void 0 ? void 0 : el[key_used];
                  });
                } else {
                  check_ = current_surete_key.some(function (el) {
                    var _ref, _el$key_used;
                    return !((_ref = ["", null, undefined]) !== null && _ref !== void 0 && _ref.includes(el === null || el === void 0 || (_el$key_used = el[key_used]) === null || _el$key_used === void 0 ? void 0 : _el$key_used.trim()));
                  });
                }
                // console.log("check_",check_);
                if (check_) {
                  var _parent_slug;
                  if (["nantissements", "gages"].includes(key)) {
                    current_surete_key.forEach(function (natiss) {
                      var kk = natiss === null || natiss === void 0 ? void 0 : natiss.type;
                      // console.log("key",key,"kk",kk);

                      // if(key == "gages"){
                      //     kk = natiss?.bien_a_gage
                      //     console.log("key",key,"kk",kk);
                      // } 

                      if (!["", null, undefined].includes(kk)) {
                        // console.log("natiss?.type ",natiss?.type);
                        parent_slug = _this2.determineParentSlugByChildName(kk, "surete_family", key);
                      }
                    });
                  } else {
                    parent_slug = _this2.determineParentSlugByChildName(key, "surete_family");
                  }
                  if (["hypotheques", "gages"].includes(key)) {
                    var extra_check_doc = {};
                    extra_check_doc['type_personne'] = [];
                    extra_check_doc['type_emplacement'] = [];
                    current_surete_key.forEach(function (el) {
                      if (!['', null, undefined].includes(el === null || el === void 0 ? void 0 : el.proprietaire)) {
                        if (el.proprietaire.indexOf('Lui même') != -1) {
                          el.proprietaire = el.proprietaire.replace('Lui même (', '').replace(')', '');
                          if (key == 'hypotheque') {
                            el.proprietaire = el.proprietaire.replace('commerçante', '');
                          }
                        }
                      }
                      if (!['', null, undefined].includes(el === null || el === void 0 ? void 0 : el.proprietaire) && !extra_check_doc['type_personne'].includes(el === null || el === void 0 ? void 0 : el.proprietaire)) {
                        extra_check_doc['type_personne'].push(el === null || el === void 0 ? void 0 : el.proprietaire);
                      }
                      if (!['', null, undefined].includes(el === null || el === void 0 ? void 0 : el.adresse_emplacement) && !extra_check_doc['type_emplacement'].includes(el === null || el === void 0 ? void 0 : el.adresse_emplacement)) {
                        extra_check_doc['type_emplacement'].push(el === null || el === void 0 ? void 0 : el.adresse_emplacement);
                      }
                    });
                    parent_slug['extra_check_doc'] = extra_check_doc;
                  }
                  if (![undefined, null, ""].includes((_parent_slug = parent_slug) === null || _parent_slug === void 0 ? void 0 : _parent_slug.parent)) {
                    var _parent_slug2;
                    if (!type_suretes_.includes((_parent_slug2 = parent_slug) === null || _parent_slug2 === void 0 ? void 0 : _parent_slug2.parent)) {
                      var _parent_slug3;
                      type_suretes.push(parent_slug);
                      type_suretes_.push((_parent_slug3 = parent_slug) === null || _parent_slug3 === void 0 ? void 0 : _parent_slug3.parent);
                    }
                  }
                }
              }
            }
          };
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            _loop();
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      }

      // console.log("typecreditsAutomate type_suretes",type_suretes);
      return type_suretes;
    }
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new CheckListManager());

/***/ }),

/***/ "./resources/js/services/afg/dajc-check-list-manager.js":
/*!**************************************************************!*\
  !*** ./resources/js/services/afg/dajc-check-list-manager.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _custom_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../custom.axios */ "./resources/js/services/custom.axios.js");
/* harmony import */ var _dajc_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dajc-constants */ "./resources/js/services/afg/dajc-constants.js");
/* harmony import */ var _f8_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./f8-constants */ "./resources/js/services/afg/f8-constants.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




var DajcCheckListManager = /*#__PURE__*/function () {
  function DajcCheckListManager() {
    _classCallCheck(this, DajcCheckListManager);
  }
  return _createClass(DajcCheckListManager, [{
    key: "determineParentSlugByChildName",
    value: function determineParentSlugByChildName(childName, obj) {
      var key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var find = {
        "children": [],
        "parent": null,
        "ens_family": ""
      };
      var _iterator = _createForOfIteratorHelper(_dajc_constants__WEBPACK_IMPORTED_MODULE_2__["default"][obj]),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var category = _step.value;
          var _iterator2 = _createForOfIteratorHelper(category.children),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var child = _step2.value;
              if (obj == "credit_family") {
                if (child.name === childName) {
                  // console.log(child.name,childName,"comparaison credit",child.name == childName,category.slug);
                  return category.slug;
                }
              }

              // Gage véhicule
              // Autres matériels

              if (obj == "surete_family") {
                var compare_key = child.slug;
                if (![null, undefined].includes(key) && ["nantissements", "gages"].includes(key)) {
                  compare_key = child.name;
                }
                if (compare_key === childName) {
                  var child_ens_family = child === null || child === void 0 ? void 0 : child.ens_family;
                  // console.log("childName",childName);
                  // console.log(child.slug,childName,"comparaison sûrete",child.slug == childName,category.slug);

                  if (![null, undefined].includes(key) && ["nantissements", "gages"].includes(key)) {
                    find['children'].push(child.slug);
                  } else {
                    find['children'].push(childName);
                  }
                  find['parent'] = category.slug;
                  find['ens_family'] = child_ens_family;
                  // return category.slug
                }
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return find;
    }
  }, {
    key: "load",
    value: function () {
      var _load = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(host, params) {
        var response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _custom_axios__WEBPACK_IMPORTED_MODULE_1__["default"].post(host + "creditbuilder/api/v1/get-dajc-checklist/", {
                params: params
              });
            case 3:
              response = _context.sent;
              return _context.abrupt("return", {
                check_list_document: response.data.check_list_document
              });
            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              throw Error('Error occured when loading dajc check list');
            case 10:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 7]]);
      }));
      function load(_x, _x2) {
        return _load.apply(this, arguments);
      }
      return load;
    }()
  }, {
    key: "automateChecker",
    value: function automateChecker(dossier_credit, tb_00, tb_08, use_dossier_credit) {
      console.log("tb_00 ** ", tb_00, "dossier_credit **", dossier_credit);
      var data = dossier_credit === null || dossier_credit === void 0 ? void 0 : dossier_credit[tb_00];
      var dataf8 = use_dossier_credit && tb_08 == 'cred_pub_tb_8' ? dossier_credit === null || dossier_credit === void 0 ? void 0 : dossier_credit[tb_08] : tb_08;
      var type_de_clientele = use_dossier_credit ? data === null || data === void 0 ? void 0 : data.type_de_clientele : tb_00 === null || tb_00 === void 0 ? void 0 : tb_00.type_de_clientele;

      // console.log("dataf8 * ",dataf8, "type_de_clientele -",type_de_clientele, "data",data);

      var type_credits_selected = [];
      var type_de_suretes_selected = [];
      var type_de_clientele_selected = this.typeClienteleAutomate(type_de_clientele);

      // for type clientele

      // for type_credits and surete_type

      type_credits_selected = this.typecreditsAutomate(dataf8);
      type_de_suretes_selected = this.typesureteAutomate(dataf8);
      return {
        type_de_clientele: type_de_clientele_selected,
        type_de_credits: type_credits_selected,
        type_de_suretes: type_de_suretes_selected,
        use_dossier_credit: use_dossier_credit
      };
    }
  }, {
    key: "typeClienteleAutomate",
    value: function typeClienteleAutomate(data) {
      var type_de_clientele_selected = "";
      if (['Professionnel'].includes(data)) {
        type_de_clientele_selected = 'physique_ordinaire';
      }
      if (['Entreprises', 'PME/PMI', 'TPE/TPI'].includes(data)) {
        type_de_clientele_selected = 'societes_commerciales';
      }
      if (['Autres'].includes(data)) {
        type_de_clientele_selected = 'autres';
      }
      if (['SCI'].includes(data)) {
        type_de_clientele_selected = 'sci';
      }
      if (['ONG et associations'].includes(data)) {
        type_de_clientele_selected = 'ong_et_associations';
      }
      if (['Microfinances', 'Mutuelles'].includes(data)) {
        type_de_clientele_selected = 'structure_financiere_decentralise_sfd';
      }
      if (['Assurances'].includes(data)) {
        type_de_clientele_selected = 'assurances';
      }
      if (['Fonds Commun de Placement'].includes(data)) {
        type_de_clientele_selected = 'fonds_commun_de_placement';
      }
      if (['Institutionnels', 'États'].includes(data)) {
        type_de_clientele_selected = 'institutionnels';
      }
      if (['États'].includes(data)) {
        type_de_clientele_selected = 'etats';
      }
      return type_de_clientele_selected;
    }
  }, {
    key: "typecreditsAutomate",
    value: function typecreditsAutomate(dataf8) {
      var _this = this;
      var type_credits = [];
      var f8_cred_key = dataf8;
      var dataLigneKey = ["nouvelles_lignes_caisse", "nouvelles_lignes_signature"];
      if (![undefined, null, []].includes(f8_cred_key)) {
        var _iterator3 = _createForOfIteratorHelper(dataLigneKey),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var key = _step3.value;
            var current_ligne_key = f8_cred_key[key];
            // console.log("current_ligne_key",current_ligne_key);
            if (![undefined, null, []].includes(current_ligne_key)) {
              if ((current_ligne_key === null || current_ligne_key === void 0 ? void 0 : current_ligne_key.length) > 0) {
                current_ligne_key.forEach(function (credit) {
                  var ligne = credit.ligne;
                  // console.log("ligne",ligne);
                  if (ligne != "" && (credit === null || credit === void 0 ? void 0 : credit.statut) != "Abandon") {
                    var parent_slug = _this.determineParentSlugByChildName(ligne, "credit_family");
                    // console.log("parent_slug",parent_slug, "typeof parent_slug",typeof parent_slug);
                    if (_typeof(parent_slug) != 'object') {
                      if (![undefined, null, ""].includes(parent_slug)) {
                        if (!type_credits.includes(parent_slug)) {
                          type_credits.push(parent_slug);
                        }
                      }
                    }
                  }
                });
              }
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
      // console.log("typecreditsAutomate type_credits",type_credits);
      return type_credits;
    }
  }, {
    key: "determineKeySurete",
    value: function determineKeySurete(search) {
      var _dajcConstant$surete_;
      return (_dajcConstant$surete_ = _dajc_constants__WEBPACK_IMPORTED_MODULE_2__["default"].surete_keys_map.find(function (el) {
        return el.name == search;
      })) === null || _dajcConstant$surete_ === void 0 ? void 0 : _dajcConstant$surete_.key;
    }
  }, {
    key: "typesureteAutomate",
    value: function typesureteAutomate(dataf8) {
      var _this2 = this;
      var type_suretes = [];
      var type_suretes_ = [];
      var f8_cred_key = dataf8;
      if (![undefined, null, []].includes(f8_cred_key)) {
        var _iterator4 = _createForOfIteratorHelper(_f8_constants__WEBPACK_IMPORTED_MODULE_3__["default"].surete_keys),
          _step4;
        try {
          var _loop = function _loop() {
            var key = _step4.value;
            // const current_surete_key = f8_cred_key[key]
            var current_surete_key = f8_cred_key[key] ? JSON.parse(JSON.stringify(f8_cred_key[key])) : null;
            if (![undefined, null, []].includes(current_surete_key)) {
              if ((current_surete_key === null || current_surete_key === void 0 ? void 0 : current_surete_key.length) > 0) {
                var parent_slug = null;
                var key_used = _this2.determineKeySurete(key);
                var check_ = false;
                if (key == 'suretes_diverses') {
                  check_ = current_surete_key.some(function (el) {
                    return el === null || el === void 0 ? void 0 : el[key_used];
                  });
                } else {
                  check_ = current_surete_key.some(function (el) {
                    var _ref, _el$key_used;
                    return !((_ref = ["", null, undefined]) !== null && _ref !== void 0 && _ref.includes(el === null || el === void 0 || (_el$key_used = el[key_used]) === null || _el$key_used === void 0 ? void 0 : _el$key_used.trim()));
                  });
                }
                // console.log("check_",check_);
                if (check_) {
                  var _parent_slug;
                  if (["nantissements", "gages"].includes(key)) {
                    current_surete_key.forEach(function (natiss) {
                      var kk = natiss === null || natiss === void 0 ? void 0 : natiss.type;
                      // console.log("key",key,"kk",kk);

                      // if(key == "gages"){
                      //     kk = natiss?.bien_a_gage
                      //     console.log("key",key,"kk",kk);
                      // }

                      if (!["", null, undefined].includes(kk)) {
                        // console.log("natiss?.type ",natiss?.type);
                        parent_slug = _this2.determineParentSlugByChildName(kk, "surete_family", key);
                      }
                    });
                  } else {
                    parent_slug = _this2.determineParentSlugByChildName(key, "surete_family");
                  }
                  if (["hypotheques", "gages"].includes(key)) {
                    var extra_check_doc = {};
                    extra_check_doc['type_personne'] = [];
                    extra_check_doc['type_emplacement'] = [];
                    current_surete_key.forEach(function (el) {
                      if (!['', null, undefined].includes(el === null || el === void 0 ? void 0 : el.proprietaire)) {
                        if (el.proprietaire.indexOf('Lui même') != -1) {
                          el.proprietaire = el.proprietaire.replace('Lui même (', '').replace(')', '');
                          if (key == 'hypotheque') {
                            el.proprietaire = el.proprietaire.replace('commerçante', '');
                          }
                        }
                      }
                      if (!['', null, undefined].includes(el === null || el === void 0 ? void 0 : el.proprietaire) && !extra_check_doc['type_personne'].includes(el === null || el === void 0 ? void 0 : el.proprietaire)) {
                        extra_check_doc['type_personne'].push(el === null || el === void 0 ? void 0 : el.proprietaire);
                      }
                      if (!['', null, undefined].includes(el === null || el === void 0 ? void 0 : el.adresse_emplacement) && !extra_check_doc['type_emplacement'].includes(el === null || el === void 0 ? void 0 : el.adresse_emplacement)) {
                        extra_check_doc['type_emplacement'].push(el === null || el === void 0 ? void 0 : el.adresse_emplacement);
                      }
                    });
                    parent_slug['extra_check_doc'] = extra_check_doc;
                  }
                  if (![undefined, null, ""].includes((_parent_slug = parent_slug) === null || _parent_slug === void 0 ? void 0 : _parent_slug.parent)) {
                    var _parent_slug2;
                    if (!type_suretes_.includes((_parent_slug2 = parent_slug) === null || _parent_slug2 === void 0 ? void 0 : _parent_slug2.parent)) {
                      var _parent_slug3;
                      type_suretes.push(parent_slug);
                      type_suretes_.push((_parent_slug3 = parent_slug) === null || _parent_slug3 === void 0 ? void 0 : _parent_slug3.parent);
                    }
                  }
                }
              }
            }
          };
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            _loop();
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      }

      // console.log("typecreditsAutomate type_suretes",type_suretes);
      return type_suretes;
    }
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new DajcCheckListManager());

/***/ }),

/***/ "./resources/js/services/afg/dajc-constants.js":
/*!*****************************************************!*\
  !*** ./resources/js/services/afg/dajc-constants.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var dajcConstant = {
  banque: "AFG BANQUE",
  direction: "DAJC",
  client_type: [{
    slug: "physique_ordinaire",
    name: "physique ordinaire"
  }, {
    slug: "physique_commercante",
    name: "Physique commerçante"
  }, {
    slug: "morale_ordinaire",
    name: "Morale ordinaire"
  }, {
    slug: "societes_commerciales",
    name: "Sociétés commerciales / entreprises"
  }, {
    slug: "ong_et_associations",
    name: "ONG et associations"
  }, {
    slug: "sci",
    name: "SCI"
  }],
  credit_family: [{
    parent: "AVANCE SUR FACTURE",
    slug: "avance_sur_facture",
    children: [{
      slug: "",
      name: "Avance sur facture"
    }, {
      slug: "",
      name: "Escompte commerciale"
    }, {
      slug: "",
      name: "Escompte financier"
    }, {
      slug: "",
      name: "Escompte effets"
    }, {
      slug: "",
      name: "Escompte de traite"
    }, {
      slug: "",
      name: "Escompte documentaire"
    }]
  }, {
    parent: "AVANCE SUR BON DE COMMANDE",
    slug: "avance_sur_bon_de_commande",
    children: [{
      slug: "",
      name: "Avance sur bon de commande"
    }, {
      slug: "",
      name: "Avance sur marché"
    }]
  }, {
    parent: "PRÊTS AMORTISSABLES",
    slug: "pret_amortissables",
    children: [{
      name: "Découvert",
      slug: ""
    }, {
      name: "Crédit d'investissement",
      slug: ""
    }, {
      name: "Crédit Court Terme",
      slug: ""
    }, {
      name: "Crédit Moyen Terme",
      slug: ""
    }, {
      name: "Crédit Long Terme",
      slug: ""
    }, {
      name: "Spot",
      slug: ""
    }, {
      name: "Facilité de caisse",
      slug: ""
    }]
  }, {
    parent: "OUVERTURE DE CREDIT NEGOCE ICAFE-CACAO",
    slug: "ouverture_de_credit_negoce_icafe_cacao",
    children: [{
      name: "Crédit de Campagne",
      slug: ""
    }, {
      name: "ASPG",
      slug: ""
    }, {
      name: "ASPM",
      slug: ""
    }, {
      name: "ACM (Avance Contre Marchandises)",
      slug: ""
    }]
  }, {
    parent: "LES CAUTIONS SUR MARCHES (Provisoires, Définitives, de Retenue de Garantie, d'Avance de Démarrage) ",
    slug: "cautions_sur_marche",
    children: [{
      name: "Caution de soumissission",
      slug: ""
    }, {
      name: "Caution de demarrage",
      slug: ""
    }, {
      name: "Caution provisoire",
      slug: ""
    }, {
      name: "Caution définitive",
      slug: ""
    }, {
      name: "Caution de bonne fin",
      slug: ""
    }, {
      name: "Caution de retenue de garantie",
      slug: ""
    }, {
      name: "Caution marché",
      slug: ""
    }, {
      name: "Caution de déblocage",
      slug: ""
    }, {
      name: "Cautions",
      slug: ""
    }]
  }, {
    parent: "LES CAUTIONS FISCALES & DIVERSES (Tva, Caution en Garantie de Paiement...)",
    slug: "cautions_fiscales_et_diverses",
    children: [{
      name: "Caution de garantie de paiement",
      slug: ""
    }, {
      name: "Caution fiscale",
      slug: ""
    }, {
      name: "Caution d'agrément",
      slug: ""
    }, {
      name: "Caution pour impôt contesté",
      slug: ""
    }]
  }, {
    parent: "CREDIT D'ENLEVEMENT",
    slug: "credit_enlevement",
    children: []
  }, {
    parent: "LES OBLIGATIONS CAUTIONNEES",
    slug: "les_obligations_cautionnees",
    children: [{
      name: "Obligation Cautionnée",
      slug: ""
    }]
  }, {
    parent: "ENTREPOTS FICTIFS",
    slug: "entrepots_fictifs",
    children: [{
      name: "Caution d'admission temporaire",
      slug: ""
    }]
  }, {
    parent: "AVAL SUR EFFET",
    slug: "aval_sur_effet",
    children: [{
      name: "Aval de traites",
      slug: ""
    }]
  }, {
    parent: "CREDIT-BAIL",
    slug: "credit_bail",
    children: [{
      name: "Crédit bail",
      slug: ""
    }]
  }, {
    parent: "CREDIT DOCUMENTAIRE",
    slug: "credit_documentaire",
    children: [{
      name: "Credoc Irrévocable",
      slug: ""
    }, {
      name: "Credoc notifié",
      slug: ""
    }, {
      name: "Credoc confirmé",
      slug: ""
    }, {
      name: "Engagement de financement",
      slug: ""
    }, {
      name: "LC's",
      slug: ""
    }, {
      name: "SBLC",
      slug: ""
    }]
  }, {
    parent: "AUTRE BILAN",
    slug: "autre_bilan",
    children: [{
      name: "Autres",
      slug: ""
    }]
  }, {
    parent: "AUTRE HORS-BILAN",
    slug: "autre_hors_bilan",
    children: [{
      name: "Autres",
      slug: ""
    }]
  }],
  surete_keys_map: [{
    name: "hypotheques",
    key: "bien_hypotheque"
  }, {
    name: "gages",
    key: "type"
  }, {
    name: "cautionnement_solidaires",
    key: "nom_prenoms"
  }, {
    name: "cautionnement_solidaires_personnes_morales",
    key: "denomination_sociale"
  }, {
    name: "caution_hypothecaires",
    key: "bien"
  }, {
    name: "protection_financieres",
    key: "garantie"
  }, {
    name: "cond_particulieres",
    key: "cond_name"
  }, {
    name: "suretes_diverses",
    key: "isChecked"
  }, {
    name: "autres_suretes_diverses",
    key: "label"
  }, {
    name: "nantissements",
    key: "type"
  }, {
    name: "cession_creances",
    key: "type"
  }],
  surete_family: [{
    parent: "NANTISSEMENT DE TITRES ",
    slug: "nantissement_de_titres",
    children: [{
      name: "Nantissement de titres",
      slug: "nantissement_de_titres",
      ens_family: ["CC"]
    }],
    to: "réelles"
  }, {
    parent: "NANTISSEMENT DE COMPTE",
    slug: "nantissement_de_compte",
    children: [{
      name: "Nantissement de compte",
      slug: "nantissement_de_compte"
    }],
    to: "réelles"
  }, {
    parent: "NANTISSEMENT DE MARCHE PUBLIC",
    slug: "nantissement_de_marche_public",
    children: [{
      name: "Nantissement de marché public",
      slug: "nantissement_de_marche_public"
    }],
    to: "réelles"
  }, {
    parent: "GAGE DE MATERIELS GAGE DE STOCKS GAGE DE MARCHANDISES ET PRODUITS NANTIS",
    slug: "gage_materiel_stock_machandises_produits_nantis",
    children: [{
      name: "Autres matériels",
      slug: "gage_materiel_stock_machandises_produits_nantis",
      ens_family: ["PPC", "PMC"]
    }],
    to: "réelles"
  }, {
    parent: "GAGE DE VEHICULE",
    slug: "gage_de_vehicule",
    children: [{
      name: "Gage véhicule",
      slug: "gage_de_vehicule"
    }],
    to: "réelles"
  }, {
    parent: "NANTISSEMENT DE FDC ETENDU AU MATERIEL",
    slug: "nantissement_de_fdc_au_materiel",
    children: [{
      name: "Nantissement de FDC etendu au matériel",
      slug: "nantissement_de_fdc_au_materiel"
    }],
    to: "réelles"
  }, {
    parent: "CESSION DE CREANCE",
    slug: "cession_creance",
    children: [{
      name: "Cession de créance",
      slug: "cession_creances"
    }, {
      name: "Nantissement de créance",
      slug: "nantissements_creation"
    }],
    to: "réelles"
  }, {
    parent: "HYPOTHEQUE",
    slug: "hypotheque",
    children: [{
      name: "Hypothèques",
      slug: "hypotheques",
      ens_family: ["PP", "CPM"]
    }, {
      name: "Caution hypothécaire",
      slug: "caution_hypothecaires"
    }, {
      name: "PAH",
      slug: "pah"
    }],
    to: "réelles"
  }, {
    parent: "CAUTIONNEMENT SOLIDAIRE ET PERSONNEL",
    slug: "cautionnement_solidaire_et_personnel",
    children: [{
      name: "Cautionnement solidaire physique",
      slug: "cautionnement_solidaires",
      ens_family: ["PP"]
    }, {
      name: "Cautionnement solidaire morale",
      slug: "cautionnement_solidaires_personnes_morales",
      ens_family: ["PM"]
    }],
    to: "personnelles"
  }, {
    parent: "GARANTIES AUTONOMES ET CONTRE GARANTIES AUTONOMES ",
    slug: "garanties_autonomes_et_contre_garanties_autonomes",
    children: [{
      name: "Protections financières éligibles",
      slug: "protection_financieres"
    }],
    to: "personnelles"
  }, {
    parent: "AUTRE",
    slug: "autre_reeles",
    children: [{
      name: "Sûretés diverses",
      slug: "suretes_diverses"
    }, {
      name: "Conditions particulières",
      slug: "cond_particulieres"
    }],
    to: "personnelles"
  }, {
    parent: "AUTRE",
    slug: "autre_personnelles",
    children: [{
      name: "Sûretés diverses",
      slug: "autres_suretes_diverses"
    }, {
      name: "Conditions particulières",
      slug: "cond_particulieres"
    }],
    to: "réelles"
  }]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dajcConstant);

/***/ })

}]);