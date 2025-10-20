"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_contreanalyse_nsia_filiale_dc_DC-DESC3_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dc/DC-DESC3.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dc/DC-DESC3.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/ContextMenu */ "./resources/js/components/shared/ContextMenu.vue");
/* harmony import */ var _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/ContextMenuItem */ "./resources/js/components/shared/ContextMenuItem.vue");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _services_connects_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../services/connects.service */ "./resources/js/services/connects.service.js");
/* harmony import */ var _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @vueform/multiselect/dist/multiselect.vue2 */ "./node_modules/@vueform/multiselect/dist/multiselect.vue2.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../helpers/helper */ "./resources/js/helpers/helper.js");
/* harmony import */ var _shared_widgets_subtable_ST1_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/widgets/subtable/ST1.vue */ "./resources/js/components/shared/widgets/subtable/ST1.vue");
/* harmony import */ var _services_nsia_f8_manager_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../services/nsia/f8-manager.js */ "./resources/js/services/nsia/f8-manager.js");
/* harmony import */ var _services_nsia_f8_constants_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../services/nsia/f8-constants.js */ "./resources/js/services/nsia/f8-constants.js");
/* harmony import */ var _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @johmun/vue-tags-input */ "./node_modules/@johmun/vue-tags-input/dist/vue-tags-input.js");
/* harmony import */ var _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_11__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }











// import Multiselect from "@vueform/multiselect/dist/multiselect.vue2";





window.$ = window.jQuery = __webpack_require__(/*! jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");
var NOW = new Date();
// "situations_apres_accords",
var formDataToBeWatchedProperty = ["mode_calcul", "comment_situation_apres_accord", "conso_fond_propre", "conso_fond_propres", "total_bilan_cmt_cct", "total_hor_bilan_cmt_cct", "total_fcec_cmt_cct", "total_hb_apres_fcec_cmt_cct", "total_total_exposition_cmt_cct", "total_tarc_cmt_cct", "total_pond_cmt_cct", "total_apr_cmt_cct", "clt_hb_apres_fcec", "clt_apr", "cmt_hb_apres_fcec", "cmt_apr", "cct_hb_apres_fcec", "cct_apr", "comment_conso_fond_propre", "comment_conso_fond_propre_auto", "comment_conso_fond_propre_manuel", "conso_fond_propre_mode_auto", "ligne_conso_fond_propre_pour", "ligne_conso_fond_propre"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Synthèse_des_anciennes_et_nouvelles_lignes",
  display: "Synthèse des anciennes et nouvelles lignes",
  components: {
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_12__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_12__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_12__.ChevronDownIcon,
    ContextMenu: _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__["default"],
    ContextMenuItem: _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__["default"],
    AirplayIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_12__.AirplayIcon,
    BookOpenIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_12__.BookOpenIcon,
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_12__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_12__.TrashIcon,
    Multiselect: _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_6__["default"],
    VueTagsInput: (_johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_11___default()),
    ST1: _shared_widgets_subtable_ST1_vue__WEBPACK_IMPORTED_MODULE_8__["default"]
  },
  props: {
    meta_data: Object,
    tb_name: String,
    tb_display_name: String
  },
  computed: {
    totalBilaCmtCct: function totalBilaCmtCct() {
      var clt_bil = String(this.conso_fond_propres[0].clt_bilan).replace(/\s+/g, "");
      var cmt_bil = String(this.conso_fond_propres[1].cmt_bilan).replace(/\s+/g, "");
      var cct_bil = String(this.conso_fond_propres[2].cct_bilan).replace(/\s+/g, "");
      // if(cmt_bilan <= 0 || cc_bilan <= 0 ) return 0; this.formDataToBeWatched.total_bilan_cmt_cct = 

      var tt = Number(cmt_bil) + Number(cct_bil) + Number(clt_bil);
      return Number(tt);
    },
    consoFondPropreWhenAutoMode: function consoFondPropreWhenAutoMode() {
      var result = 0;
      var mtn = String(this.conso_fond_propre_mode_auto[0].motant).replace(/\s+/g, "");
      var cste_ = String(this.conso_fond_propre_mode_auto[0].cste).replace(/\s+/g, "");
      result = Number(mtn) * cste_ / 100;
      return Number(result);
      // conso_fond_propre_mode_auto
    },
    totalHorBilanCmtCct: function totalHorBilanCmtCct() {
      var clt_h_bilan = String(this.conso_fond_propres[0].clt_hor_bilan).replace(/\s+/g, "");
      var cmt_h_bilan = String(this.conso_fond_propres[1].cmt_hor_bilan).replace(/\s+/g, "");
      var cct_h_bilan = String(this.conso_fond_propres[2].cct_hor_bilan).replace(/\s+/g, "");
      var tt = Number(cmt_h_bilan) + Number(cct_h_bilan) + Number(clt_h_bilan);
      return Number(tt);
    },
    totalFcecCmtCct: function totalFcecCmtCct() {
      var clt_f = String(this.conso_fond_propres[0].clt_fcec).replace(/\s+/g, "");
      var cmt_f = String(this.conso_fond_propres[1].cmt_fcec).replace(/\s+/g, "");
      var cct_f = String(this.conso_fond_propres[2].cct_fcec).replace(/\s+/g, "");
      var tt = Number(cmt_f) + Number(cct_f) + Number(clt_f);
      return Number(tt);
    },
    cltApresfec: function cltApresfec() {
      var clt_h_bilan = String(this.conso_fond_propres[0].clt_hor_bilan).replace(/\s+/g, "");
      var clt_f = String(this.conso_fond_propres[0].clt_fcec).replace(/\s+/g, "");
      var tt = Number(clt_h_bilan) * (Number(clt_f) / 100);
      return Number(tt);
    },
    cmtApresFec: function cmtApresFec() {
      var cmt_h_bilan = String(this.conso_fond_propres[1].cmt_hor_bilan).replace(/\s+/g, "");
      var cmt_f = String(this.conso_fond_propres[1].cmt_fcec).replace(/\s+/g, "");
      var tt = Number(cmt_h_bilan) * (Number(cmt_f) / 100);
      return Number(tt);
      // cmt_hb_apres_fcec
    },
    cctApresfec: function cctApresfec() {
      var cmt_h_bilan = String(this.conso_fond_propres[2].cct_hor_bilan).replace(/\s+/g, "");
      var cmt_f = String(this.conso_fond_propres[2].cct_fcec).replace(/\s+/g, "");
      var tt = Number(cmt_h_bilan) * (Number(cmt_f) / 100);
      return Number(tt);
    },
    //(h)=(e-f)*(g)
    cltApr: function cltApr() {
      var tt_expo = String(this.conso_fond_propres[0].clt_total_exposition).replace(/\s+/g, "");
      var tarc = String(this.conso_fond_propres[0].clt_tarc).replace(/\s+/g, "");
      var pond = String(this.conso_fond_propres[0].clt_pond).replace(/\s+/g, "");
      var tt = (Number(tt_expo) - Number(tarc)) * (Number(pond) / 100);
      return Number(tt);
    },
    cmtApr: function cmtApr() {
      var tt_expo = String(this.conso_fond_propres[1].cmt_total_exposition).replace(/\s+/g, "");
      var tarc = String(this.conso_fond_propres[1].cmt_tarc).replace(/\s+/g, "");
      var pond = String(this.conso_fond_propres[1].cmt_pond).replace(/\s+/g, "");
      var tt = (Number(tt_expo) - Number(tarc)) * (Number(pond) / 100);
      return Number(tt);
      // cmt_hb_apres_fcec
    },
    cctApr: function cctApr() {
      var tt_expo = String(this.conso_fond_propres[2].cct_total_exposition).replace(/\s+/g, "");
      var tarc = String(this.conso_fond_propres[2].cct_tarc).replace(/\s+/g, "");
      var pond = String(this.conso_fond_propres[2].cct_pond).replace(/\s+/g, "");
      var tt = (Number(tt_expo) - Number(tarc)) * (Number(pond) / 100);
      return Number(tt);
    },
    totalHbApresFcecCmtCct: function totalHbApresFcecCmtCct() {
      var clt_hb_a_fcec = String(this.conso_fond_propres[0].clt_hb_apres_fcec).replace(/\s+/g, "");
      var cmt_hb_a_fcec = String(this.conso_fond_propres[1].cmt_hb_apres_fcec).replace(/\s+/g, "");
      var cct_hb_a_fcec = String(this.conso_fond_propres[2].cct_hb_apres_fcec).replace(/\s+/g, "");
      var tt = Number(cmt_hb_a_fcec) + Number(cct_hb_a_fcec) + Number(clt_hb_a_fcec);
      return Number(tt);
    },
    totalExpositionCmtCct: function totalExpositionCmtCct() {
      var clt_tt_expo = String(this.conso_fond_propres[0].clt_total_exposition).replace(/\s+/g, "");
      var cmt_tt_expo = String(this.conso_fond_propres[1].cmt_total_exposition).replace(/\s+/g, "");
      var cct_tt_expo = String(this.conso_fond_propres[2].cct_total_exposition).replace(/\s+/g, "");
      var tt = Number(cmt_tt_expo) + Number(cct_tt_expo) + Number(clt_tt_expo);
      return Number(tt);
    },
    totalTarcCmtCct: function totalTarcCmtCct() {
      var clt_tc = String(this.conso_fond_propres[0].clt_tarc).replace(/\s+/g, "");
      var cmt_tc = String(this.conso_fond_propres[1].cmt_tarc).replace(/\s+/g, "");
      var cct_tc = String(this.conso_fond_propres[2].cct_tarc).replace(/\s+/g, "");
      var tt = Number(cmt_tc) + Number(cct_tc) + Number(clt_tc);
      return Number(tt);
    },
    totalPondCmtCct: function totalPondCmtCct() {
      var clt_pnd = String(this.conso_fond_propres[0].clt_pond).replace(/\s+/g, "");
      var cmt_pnd = String(this.conso_fond_propres[1].cmt_pond).replace(/\s+/g, "");
      var cct_pnd = String(this.conso_fond_propres[2].cct_pond).replace(/\s+/g, "");
      var tt = Number(cmt_pnd) + Number(cct_pnd) + Number(clt_pnd);
      return Number(tt);
    },
    totalAprCmtCct: function totalAprCmtCct() {
      var clt_t_apr = String(this.conso_fond_propres[0].clt_apr).replace(/\s+/g, "");
      var cmt_t_apr = String(this.conso_fond_propres[1].cmt_apr).replace(/\s+/g, "");
      var cct_t_apr = String(this.conso_fond_propres[2].cct_apr).replace(/\s+/g, "");
      if (cmt_t_apr <= 0 || cct_t_apr <= 0 || clt_t_apr <= 0) return 0;
      var tt = Number(cmt_pnd) + Number(cct_pnd) + Number(clt_t_apr);
      return Number(tt);
    }
  },
  mounted: function mounted() {
    var _this$meta_data$dossi,
      _this = this;
    // console.log("conso_fond_propres => ", this.conso_fond_propres[2].cct_bilan)
    var applied_templ_name = (_this$meta_data$dossi = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi.applied_templ_name;
    var tbArrays = this.determineCredPubTables(applied_templ_name);
    this.credpub_8 = tbArrays[2];
    EventBus.$on("created-extra-file-template", function (data) {
      _this.conso_fond_propre.forEach(function (element, index) {
        var _data$template;
        if ((element === null || element === void 0 ? void 0 : element.name) == (data === null || data === void 0 || (_data$template = data.template) === null || _data$template === void 0 ? void 0 : _data$template.name)) {
          var _data$template2, _data$template3, _data$template4;
          _this.conso_fond_propre[index]['template'] = {
            'id': data === null || data === void 0 || (_data$template2 = data.template) === null || _data$template2 === void 0 ? void 0 : _data$template2.id,
            'name': data === null || data === void 0 || (_data$template3 = data.template) === null || _data$template3 === void 0 ? void 0 : _data$template3.name,
            'slug': data === null || data === void 0 || (_data$template4 = data.template) === null || _data$template4 === void 0 ? void 0 : _data$template4.slug
          };
          _this.handleInput();
        }
      });
    });
    EventBus.$on("updated-extra-file-upload", function (data) {
      _this.getFiles();
    });
    this.loadRetrieved();
    this.loadTbAttrs(); // charge les attributs + sous attributs des tables
  },
  data: function data() {
    var vm = this;
    return {
      f8Manager: _services_nsia_f8_manager_js__WEBPACK_IMPORTED_MODULE_9__["default"],
      f8Constants: _services_nsia_f8_constants_js__WEBPACK_IMPORTED_MODULE_10__["default"],
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_2__["default"].host,
      connectsHost: _services_connects_service__WEBPACK_IMPORTED_MODULE_5__["default"].loadablehost(),
      authcheck: false,
      authcheckUsr: null,
      authcheckStatus: null,
      watchInPause: false,
      initLoad: true,
      isLoading: false,
      seen: true,
      seen1: true,
      seen2: true,
      seen3: true,
      seen4: true,
      seen5: true,
      seen6: true,
      dataToSave: undefined,
      meta_parseable: {
        cred_pub_key: this.meta_data["cred_pub_key"],
        tb_name: this.tb_name
      },
      // situations_apres_accords: "",
      formDataToBeWatched: {
        mode_calcul: "M",
        comment_situation_apres_accord: "",
        conso_fond_propre: "",
        conso_fond_propres: "",
        total_bilan_cmt_cct: "",
        total_hor_bilan_cmt_cct: "",
        total_fcec_cmt_cct: "",
        total_hb_apres_fcec_cmt_cct: "",
        total_total_exposition_cmt_cct: "",
        total_tarc_cmt_cct: "",
        total_pond_cmt_cct: "",
        total_apr_cmt_cct: "",
        clt_hb_apres_fcec: "",
        clt_apr: "",
        cmt_hb_apres_fcec: "",
        cmt_apr: "",
        cct_hb_apres_fcec: "",
        cct_apr: "",
        comment_conso_fond_propre: "",
        comment_conso_fond_propre_auto: "",
        comment_conso_fond_propre_manuel: "",
        conso_fond_propre_mode_auto: "",
        ligne_conso_fond_propre_pour: 0,
        ligne_conso_fond_propre: 0,
        notes: []
      },
      conso_fond_propre: [{
        name: "Consommation fonds propre",
        montant: 0,
        files: 0,
        template: ""
      }],
      conso_fond_propre_mode_auto: [{
        name: "Consommation fonds propre",
        montant: 0,
        cste: 11,
        conso_fp_: 0
      }],
      conso_fond_propres: [{
        clt_libelle: "CLT",
        clt_bilan: 0,
        clt_hor_bilan: 0,
        clt_fcec: 0,
        clt_hb_apres_fcec: 0,
        clt_total_exposition: 0,
        clt_tarc: 0,
        clt_pond: 0,
        clt_apr: 0
      }, {
        cmt_libelle: "CMT",
        cmt_bilan: 0,
        cmt_hor_bilan: 0,
        cmt_fcec: 0,
        cmt_hb_apres_fcec: 0,
        cmt_total_exposition: 0,
        cmt_tarc: 0,
        cmt_pond: 0,
        cmt_apr: 0
      }, {
        cct_libelle: "CCT",
        cct_bilan: 0,
        cct_hor_bilan: 0,
        cct_fcec: 0,
        cct_hb_apres_fcec: 0,
        cct_total_exposition: 0,
        cct_tarc: 0,
        cct_pond: 0,
        cct_apr: 0
      }],
      tb_cct: [],
      tb_cmt: [],
      tb_clt: [],
      tb_cct_hb: [],
      tb_cmt_hb: [],
      tb_clt_hb: [],
      tous_les_lignes_filtres_: [].concat(_toConsumableArray(_services_nsia_f8_constants_js__WEBPACK_IMPORTED_MODULE_10__["default"].tous_les_lignes), _toConsumableArray(_services_nsia_f8_constants_js__WEBPACK_IMPORTED_MODULE_10__["default"].lignes_engagements_signatures)),
      // situations_apres_accords: "",

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
      }, {
        title: "Supprimer",
        icon: "icofont icofont-trash",
        handler: this.startDeletingTbFromContext,
        disabled: false
      }],
      credpub_8: null,
      conso_fps: [{
        libelle: "",
        bilan: 0,
        hor_bilan: 0,
        fcec: 0,
        hb_apres_fcec: 0,
        total_exposition: 0,
        tarc: 0,
        pond: 0,
        apr: 0
      }],
      listingNote: false,
      ligneSelected: {}

      // =======================
    };
  },
  methods: {
    // openModal(modalName, ligneSelected, download=null){
    //     let res = true
    //     this.ligneSelected = ligneSelected
    //     if(!ligneSelected?.ligne){
    //         this.$toasted.show("Veuillez selectionner la ligne avant d'attacher les suretés ")
    //         return
    //     }
    //     if(download){
    //         res = this.f8Manager.loadSuretesOfOldLines(ligneSelected)
    //     }
    //     this.$modal.show(modalName)
    // },
    openModal: function openModal(modalName, ligneSelected) {
      var download = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var res = true;
      this.ligneSelected = ligneSelected;
      if (!(ligneSelected !== null && ligneSelected !== void 0 && ligneSelected.ligne)) {
        this.$toasted.show("Veuillez selectionner la ligne avant d'attacher les suretés ");
        return;
      }
      if (download) {
        res = this.f8Manager.loadSuretesOfOldLines(ligneSelected);
      }
      //this.$modal.show(modalName)
      this.$modal.show('hypo_modal_dc');
      EventBus.$emit('updated-st-1-hypo', {
        ligneSelected: this.ligneSelected,
        meta_data: this.meta_data
      });
    },
    closeModal: function closeModal(modalName, ligneSelected) {
      var a = this.f8Manager.modalConditions(ligneSelected.id);
      // if(a) this.$modal.hide(modalName)
      this.$modal.hide(modalName);
    },
    handleChangeLinges: function handleChangeLinges() {
      var _this2 = this;
      //this.tous_les_lignes_filtres = [];
      this.tous_les_lignes_filtres = this.tous_les_lignes;
      this.lignes_engagements_signatures_filtres = [];
      this.lignes_engagements_signatures.forEach(function (el) {
        var f = false;
        _this2.nv_lignes_signature_2.forEach(function (el1) {
          if (el.libelle == el1.ligne) {
            f = true;
          }
        });
        _this2.nv_lignes_signature_1.forEach(function (el1) {
          if (el.libelle == el1.ligne) {
            f = true;
          }
        });
        if (f == false) {
          _this2.lignes_engagements_signatures_filtres.push(el);
        }
      });
    },
    formDataVars: function formDataVars(event) {
      this.formDataToBeWatched[event[0]] = event[1];
      // this.handleInput()
    },
    formDataVars2: function formDataVars2(event, index, objectName, keyName) {
      this.f8Manager.data[objectName][index][keyName] = event[1];
    },
    tous_les_lignes_sorted: function tous_les_lignes_sorted() {
      tous_les_lignes.sort(function (a, b) {
        return a.libelle.localeCompare(b.libelle);
      });
    },
    determineKey: function determineKey() {
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];
      return createdKey;
    },
    setModeCalculConso: function setModeCalculConso(event, vars, index, Item) {
      var _this3 = this;
      // this.isLoading = true

      if (event.target.value == 'A') {
        var _this$conso_fond_prop;
        if (((_this$conso_fond_prop = this.conso_fond_propre[0]) === null || _this$conso_fond_prop === void 0 ? void 0 : _this$conso_fond_prop.files) > 0) {
          // console.log("ici")
          EventBus.$emit("open-extra-file-explorer");
          setTimeout(function () {
            var _this3$conso_fond_pro;
            EventBus.$emit("data-extra-file-explorer", {
              name: (_this3$conso_fond_pro = _this3.conso_fond_propre[0]) === null || _this3$conso_fond_pro === void 0 ? void 0 : _this3$conso_fond_pro.name
            });
          }, 500);
        }

        // this.conso_fond_propre = [{
        //     name: "Consommation fonds propre",
        //     montant: 0,
        //     files: 0
        // }]

        // this.loadConsoFondsPropres();
        this.formDataToBeWatched.comment_conso_fond_propre_manuel = this.formDataToBeWatched.comment_conso_fond_propre;
        this.formDataToBeWatched.comment_conso_fond_propre = this.formDataToBeWatched.comment_conso_fond_propre_auto;
      }
      if (event.target.value == 'M') {
        // this.conso_fond_propres = [{
        //     clt_libelle: "CLT",
        //     clt_bilan: 0,
        //     clt_hor_bilan: 0,
        //     clt_fcec: 0,
        //     clt_hb_apres_fcec: 0,
        //     clt_total_exposition: 0,
        //     clt_tarc: 0,
        //     clt_pond: 0,
        //     clt_apr: 0,

        // },
        // {
        //     cmt_libelle: "CMT",
        //     cmt_bilan: 0,
        //     cmt_hor_bilan: 0,
        //     cmt_fcec: 0,
        //     cmt_hb_apres_fcec: 0,
        //     cmt_total_exposition: 0,
        //     cmt_tarc: 0,
        //     cmt_pond: 0,
        //     cmt_apr: 0,

        // },
        // {
        //     cct_libelle: "CCT",
        //     cct_bilan: 0,
        //     cct_hor_bilan: 0,
        //     cct_fcec: 0,
        //     cct_hb_apres_fcec: 0,
        //     cct_total_exposition: 0,
        //     cct_tarc: 0,
        //     cct_pond: 0,
        //     cct_apr: 0,

        // },]
        // this.formDataToBeWatched.total_bilan_cmt_cct = ""
        // this.formDataToBeWatched.total_hor_bilan_cmt_cct = ""
        // this.formDataToBeWatched.total_fcec_cmt_cct = ""
        // this.formDataToBeWatched.total_hb_apres_fcec_cmt_cct = ""
        // this.formDataToBeWatched.total_total_exposition_cmt_cct = ""
        // this.formDataToBeWatched.total_tarc_cmt_cct = ""
        // this.formDataToBeWatched.total_pond_cmt_cct = ""
        // this.formDataToBeWatched.total_apr_cmt_cct = ""
        this.formDataToBeWatched.comment_conso_fond_propre_auto = this.formDataToBeWatched.comment_conso_fond_propre;
        this.formDataToBeWatched.comment_conso_fond_propre = this.formDataToBeWatched.comment_conso_fond_propre_manuel;
      }
      this.formDataToBeWatched[vars] = event.target.value;
      // this.isLoading = false
    },
    loadConsoFondsPropres: function loadConsoFondsPropres() {
      var _this$meta_data$dossi2,
        _this4 = this;
      // console.log("hier")
      if (((_this$meta_data$dossi2 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi2 === void 0 ? void 0 : _this$meta_data$dossi2[this.credpub_8]) != undefined) {
        var _this$meta_data$dossi3, _this$meta_data$dossi4;
        // console.log("credpub_8credpub_8 =♠2 ", this.credpub_8)
        (_this$meta_data$dossi3 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi3 === void 0 || (_this$meta_data$dossi3 = _this$meta_data$dossi3[this.credpub_8]) === null || _this$meta_data$dossi3 === void 0 || _this$meta_data$dossi3.nouvelles_lignes_caisse.forEach(function (el, index) {
          var duree_credit = el === null || el === void 0 ? void 0 : el.duree;
          var mtn = el === null || el === void 0 ? void 0 : el.proposition;
          var verif = _this4.determineTypeCreditByDuree(duree_credit);
          if (verif == "CCT") {
            _this4.tb_cct.push(mtn);
          } else if (verif == "CMT") {
            _this4.tb_cmt.push(mtn);
          } else {
            _this4.tb_clt.push(mtn);
          }
        });
        (_this$meta_data$dossi4 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi4 === void 0 || (_this$meta_data$dossi4 = _this$meta_data$dossi4[this.credpub_8]) === null || _this$meta_data$dossi4 === void 0 || _this$meta_data$dossi4.nouvelles_lignes_signature.forEach(function (el, index) {
          var duree_credit_caution = el === null || el === void 0 ? void 0 : el.duree;
          var mtn_caution = el === null || el === void 0 ? void 0 : el.proposition;
          var verif_caution = _this4.determineTypeCreditByDuree(duree_credit_caution);
          if (verif_caution == "CCT") {
            _this4.tb_cct_hb.push(mtn_caution);
          } else if (verif_caution == "CMT") {
            _this4.tb_cmt_hb.push(mtn_caution);
          } else {
            _this4.tb_clt_hb.push(mtn_caution);
          }
        });
        var tb_arr = ["tb_cct", "tb_cmt", "tb_clt", "tb_cct_hb", "tb_cmt_hb", "tb_clt_hb"];
        // console.log("this.conso_fond_propres[0][cct_bilan] ==> ", this.conso_fond_propres[0].cct_bilan)

        tb_arr.forEach(function (el) {
          var element = el;
          var data_ = _this4[element];
          if (data_.length > 0) {
            if (element == "tb_cct") {
              _this4.conso_fond_propres[2]["cct_bilan"] = _this4.someMtn(data_);
              _this4.handleInput();
            }
            if (element == "tb_cmt") {
              _this4.conso_fond_propres[1]["cmt_bilan"] = _this4.someMtn(data_);
              _this4.handleInput();
            }
            if (element == "tb_clt") {
              _this4.conso_fond_propres[0]["clt_bilan"] = _this4.someMtn(data_);
              _this4.handleInput();
            }
            if (element == "tb_cct_hb") {
              _this4.conso_fond_propres[2]["cct_hor_bilan"] = _this4.someMtn(data_);
              _this4.handleInput();
            }
            if (element == "tb_cmt_hb") {
              _this4.conso_fond_propres[1]["cmt_hor_bilan"] = _this4.someMtn(data_);
              _this4.handleInput();
            }
            if (element == "tb_clt_hb") {
              _this4.conso_fond_propres[0]["clt_hor_bilan"] = _this4.someMtn(data_);
              _this4.handleInput();
            }
          }
        });
      }
    },
    loadConsoFondsPropres_: function loadConsoFondsPropres_() {
      var _this$meta_data$dossi5,
        _this5 = this;
      // console.log("hier")
      if (((_this$meta_data$dossi5 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi5 === void 0 ? void 0 : _this$meta_data$dossi5[this.credpub_8]) != undefined) {
        var _this$meta_data$dossi6, _this$meta_data$dossi7;
        // console.log("credpub_8credpub_8 =♠2 ", this.credpub_8)
        if (((_this$meta_data$dossi6 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi6 === void 0 || (_this$meta_data$dossi6 = _this$meta_data$dossi6[this.credpub_8]) === null || _this$meta_data$dossi6 === void 0 || (_this$meta_data$dossi6 = _this$meta_data$dossi6.nouvelles_lignes_caisse) === null || _this$meta_data$dossi6 === void 0 ? void 0 : _this$meta_data$dossi6.length) > 0 || ((_this$meta_data$dossi7 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi7 === void 0 || (_this$meta_data$dossi7 = _this$meta_data$dossi7[this.credpub_8]) === null || _this$meta_data$dossi7 === void 0 ? void 0 : _this$meta_data$dossi7.nouvelles_lignes_signature.length) > 0) {
          var _this$meta_data$dossi8, _this$meta_data$dossi9;
          this.conso_fps = [];
          (_this$meta_data$dossi8 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi8 === void 0 || (_this$meta_data$dossi8 = _this$meta_data$dossi8[this.credpub_8]) === null || _this$meta_data$dossi8 === void 0 || _this$meta_data$dossi8.nouvelles_lignes_caisse.forEach(function (el, index) {
            _this5.conso_fps.push({
              libelle: el.ligne,
              bilan: el.proposition,
              hor_bilan: 0,
              fcec: 0,
              hb_apres_fcec: 0,
              total_exposition: 0,
              tarc: 0,
              pond: 0,
              apr: 0
            });
          });
          this.handleInput();
          (_this$meta_data$dossi9 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi9 === void 0 || (_this$meta_data$dossi9 = _this$meta_data$dossi9[this.credpub_8]) === null || _this$meta_data$dossi9 === void 0 || _this$meta_data$dossi9.nouvelles_lignes_signature.forEach(function (el, index) {
            _this5.conso_fps.push({
              libelle: el.ligne,
              bilan: 0,
              hor_bilan: el.proposition,
              fcec: 0,
              hb_apres_fcec: 0,
              total_exposition: 0,
              tarc: 0,
              pond: 0,
              apr: 0
            });
          });
        }
        this.conso_fps = this.conso_fps.map(function (ed) {
          return _objectSpread(_objectSpread({}, ed), {}, {
            cameFrom: 'tb_8'
          });
        });
        this.handleInput();
      }
    },
    handleDoubleClickOrClick: function handleDoubleClickOrClick(event, index) {
      var _this6 = this;
      EventBus.$emit("open-extra-file-explorer");
      setTimeout(function () {
        var _this6$conso_fond_pro;
        EventBus.$emit("data-extra-file-explorer", {
          name: (_this6$conso_fond_pro = _this6.conso_fond_propre[index]) === null || _this6$conso_fond_pro === void 0 ? void 0 : _this6$conso_fond_pro.name
        });
      }, 500);
    },
    getFiles: function getFiles() {
      var _this7 = this;
      this.$axios.post(this.connectsHost + 'api/get-files', {
        file_identity: this.meta_data["dossier_credit"].cred_pub_key
      }).then(function (res) {
        var _res$data$data, _res$data$data2;
        res.data = JSON.parse(res.data);
        if (((_res$data$data = res.data.data) === null || _res$data$data === void 0 ? void 0 : _res$data$data.length) > 0 || ((_res$data$data2 = res.data.data) === null || _res$data$data2 === void 0 ? void 0 : _res$data$data2.length) != null) {
          _this7.files = res.data.data;
          // console.log("this.files => ", this.files)
          _this7.conso_fond_propre.forEach(function (element, index) {
            var count = 0;
            _this7.files.forEach(function (file) {
              var _element$template;
              if ((file === null || file === void 0 ? void 0 : file.extra_file_template_id) != null && (element === null || element === void 0 || (_element$template = element.template) === null || _element$template === void 0 ? void 0 : _element$template.id) == (file === null || file === void 0 ? void 0 : file.extra_file_template_id)) {
                count++;
              }
            });
            _this7.conso_fond_propre[index]['files'] = count;
            _this7.handleInput();
          });
        }
      })["catch"](function (err) {
        console.error(err);
      });
    },
    tableClosedOrOpened: function tableClosedOrOpened() {
      this.seen = this.fetchClosedTables(this.tb_name + this.meta_data["cred_pub_key"]);
    },
    openNotesModal: function openNotesModal() {
      var listing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.listingNote = listing;
      this.$modal.show(this.tb_name);
    },
    addMoreConso: function addMoreConso(listName) {
      this[listName].push({
        libelle: "",
        bilan: 0,
        hor_bilan: 0,
        fcec: 0,
        hb_apres_fcec: 0,
        total_exposition: 0,
        tarc: 0,
        pond: 0,
        apr: 0
      });
    },
    removeConso: function removeConso(index) {
      this.conso_fps.splice(index, 1);
      this.handleInput();
    },
    loadRetrieved: function loadRetrieved() {
      var _this$meta_data$dossi0;
      var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];
      //console.log(lentb);
      // Close table by default
      this.defaultRetract(false, (_this$meta_data$dossi0 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi0 === void 0 ? void 0 : _this$meta_data$dossi0.applied_templ_id);
      if (lentb.length == 0 || !this.meta_data["dossier_credit"][createdKey]) {
        if (createdKey == 'cred_pub_tb_19503' && this.meta_data["dossier_credit"]["cred_pub_tb_19003"] != undefined) {
          var credit_folder_table_8 = _objectSpread({}, this.meta_data["dossier_credit"]["cred_pub_tb_19003"]);
          this.f8Manager.setData(credit_folder_table_8, 'tb19003');
          this.formDataToBeWatched = this.meta_data["dossier_credit"]["cred_pub_tb_19003"];
          //console.log(this.formDataToBeWatched);
          for (var _i = 0, _Object$entries = Object.entries(this.formDataToBeWatched); _i < _Object$entries.length; _i++) {
            var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
              key = _Object$entries$_i[0],
              value = _Object$entries$_i[1];
            if (this[key] != undefined) {
              this[key] = value;
            }
          }
        } else {
          var _credit_folder_table_ = _objectSpread({}, this.meta_data["dossier_credit"][this.credpub_8]);
          this.f8Manager.setData(_credit_folder_table_, 'tb19003');
        }
        this.f8Manager.handleInput();
        this.loadConsoFondsPropres_();
        return;
      }
      var credit_folder_table = _objectSpread({}, this.meta_data["dossier_credit"][createdKey]);
      this.f8Manager.setData(credit_folder_table, 'tb19003');
      if (lentb.length > 0) {
        if (this.meta_data["dossier_credit"][createdKey] != undefined) {
          for (var _i2 = 0, _formDataToBeWatchedP = formDataToBeWatchedProperty; _i2 < _formDataToBeWatchedP.length; _i2++) {
            var property = _formDataToBeWatchedP[_i2];
            this.formDataToBeWatched[property] = this.meta_data["dossier_credit"][createdKey][property];
          }
          if (this.meta_data["dossier_credit"][createdKey]["conso_fond_propres"] != "") {
            this.conso_fond_propres = this.meta_data["dossier_credit"][createdKey]["conso_fond_propres"];
          }
          if (this.meta_data["dossier_credit"][createdKey]["conso_fps"] != "") {
            this.conso_fps = this.meta_data["dossier_credit"][createdKey]["conso_fps"];
          }
          if (this.meta_data["dossier_credit"][createdKey]["conso_fond_propre"] != "") {
            this.conso_fond_propre = this.meta_data["dossier_credit"][createdKey]["conso_fond_propre"];
          }
          if (this.meta_data["dossier_credit"][createdKey]["conso_fond_propre_mode_auto"] != "") {
            this.conso_fond_propre_mode_auto = this.meta_data["dossier_credit"][createdKey]["conso_fond_propre_mode_auto"];
          }
        }
      }
    },
    // send2Backend(res, newVal,oldVal, key) {
    send2Backend: function send2Backend(res, newVal, oldVal) {
      this.authcheck = true;
      this.authcheckUsr = res.data;
      this.authcheckStatus = res.status;
      // console.log("key => ", key)
      // let ky = key === 'F8' ? {...this.f8Manager.data, ...this.formDataToBeWatched} : {...this.formDataToBeWatched, ...this.f8Manager.data}
      // console.log('ky', ky);
      if (this.authcheckStatus === 401) {
        // // window.location.href = "/login";
      }
      // console.log("this.formDataToBeWatched", this.formDataToBeWatched)
      // console.log("newVal", newVal)
      // console.log("ky", ky)
      if (this.authcheck === true) {
        this.$emit("autosaving");
        this.$axios.post(this.ebapisHost + "creditbuilder/api/v1/autosaving/", {
          user: this.authcheckUsr,
          meta_parseable: this.meta_parseable,
          // filledData: this.formDataToBeWatched,
          filledData: newVal,
          // filledData: {...this.f8Manager.data, ...this.formDataToBeWatched},

          loadDossier: true
        }).then(function (response) {
          this.$emit("autosaving");
          // this.$Progress.finish();
          // console.log(response);
          var tbFetcheData = response.data;
          if (tbFetcheData["is_success"] === true) {
            this.dossier_credit = tbFetcheData['dossier_credit'];
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
    // SOMME DES MONTANTS
    somX3P: function somX3P(ob, key) {
      var som = 0;
      ob === null || ob === void 0 || ob.filter(function (elm) {
        var result = String(elm[key]).replace(/\s+/g, "");
        if (result === "" || isNaN(result)) {
          som += 0;
        } else {
          som += parseInt(result);
        }
      });
      return som;
    },
    someMtn: function someMtn(tb) {
      var som = 0;
      if (tb.length > 0 && tb.length == 1) {
        return tb[0];
      } else {
        tb.forEach(function (el) {
          var result = String(el).replace(/\s+/g, "");
          if (result === "" || isNaN(result)) {
            som += 0;
          } else {
            som += parseInt(result);
          }
        });
      }
      return som;
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
        id: "f3-head"
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
    handleInput: function handleInput(evt, index) {
      // --------------------------CONSOMMATIONS FOND PROPRES ---------------------- // 

      this.formDataToBeWatched["conso_fond_propre"] = this.conso_fond_propre;

      // this.formDataToBeWatched["total_bilan_cmt_cct"] = this.totalBilaCmtCct + this.somX3P(this.conso_fps,"bilan");
      this.formDataToBeWatched["total_bilan_cmt_cct"] = this.somX3P(this.conso_fps, "bilan");
      this.formDataToBeWatched["total_hor_bilan_cmt_cct"] = this.somX3P(this.conso_fps, "hor_bilan");
      // this.formDataToBeWatched["total_hor_bilan_cmt_cct"] = this.totalHorBilanCmtCct + this.somX3P(this.conso_fps,"hor_bilan");

      // this.formDataToBeWatched["cmt_hb_apres_fcec"] = this.cmtApresFec;
      // this.formDataToBeWatched["cct_hb_apres_fcec"] = this.cctApresfec;
      // this.formDataToBeWatched["clt_hb_apres_fcec"] = this.cltApresfec;

      // this.conso_fond_propres[0].clt_total_exposition = this.cltApresfec + Number(String(this.conso_fond_propres[0].clt_bilan).replace(/\s+/g, ""))
      // this.conso_fond_propres[1].cmt_total_exposition = this.cmtApresFec + Number(String(this.conso_fond_propres[1].cmt_bilan).replace(/\s+/g, ""))
      // this.conso_fond_propres[2].cct_total_exposition = this.cctApresfec + Number(String(this.conso_fond_propres[2].cct_bilan).replace(/\s+/g, ""))

      this.formDataToBeWatched["conso_fond_propres"] = this.conso_fond_propres;
      this.formDataToBeWatched["cmt_apr"] = this.cmtApr;
      this.formDataToBeWatched["cct_apr"] = this.cctApr;
      this.formDataToBeWatched["clt_apr"] = this.cltApr;
      this.conso_fps.forEach(function (item, i) {
        item.hb_apres_fcec = parseInt(String(item.hor_bilan).replace(/\s+/g, "")) * parseInt(String(item.fcec).replace(/\s+/g, "")) / 100;
        item.total_exposition = parseInt(String(item.hb_apres_fcec).replace(/\s+/g, "")) + parseInt(String(item.bilan).replace(/\s+/g, ""));
        item.apr = (parseInt(String(item.total_exposition).replace(/\s+/g, "")) - parseInt(String(item.tarc).replace(/\s+/g, ""))) * (parseInt(String(item.pond).replace(/\s+/g, "")) / 100);
      });
      this.formDataToBeWatched["total_hb_apres_fcec_cmt_cct"] = this.somX3P(this.conso_fps, "hb_apres_fcec");
      // this.formDataToBeWatched["total_hb_apres_fcec_cmt_cct"] = this.cmtApresFec + this.cctApresfec + this.cltApresfec + this.somX3P(this.conso_fps,"hb_apres_fcec");

      this.formDataToBeWatched["total_total_exposition_cmt_cct"] = this.somX3P(this.conso_fps, "total_exposition");
      // this.formDataToBeWatched["total_total_exposition_cmt_cct"] = this.totalExpositionCmtCct + this.somX3P(this.conso_fps,"total_exposition");

      this.formDataToBeWatched["total_tarc_cmt_cct"] = this.somX3P(this.conso_fps, "tarc");
      // this.formDataToBeWatched["total_tarc_cmt_cct"] = this.totalTarcCmtCct + this.somX3P(this.conso_fps,"tarc");

      this.formDataToBeWatched["total_apr_cmt_cct"] = this.somX3P(this.conso_fps, "apr");
      // this.formDataToBeWatched["total_apr_cmt_cct"] = this.cmtApr + this.cctApr + this.cltApr + this.somX3P(this.conso_fps,"apr");

      var pour_ = this.convertInt(this.formDataToBeWatched['ligne_conso_fond_propre_pour']) / 100;
      this.formDataToBeWatched["ligne_conso_fond_propre"] = parseInt(this.convertInt(this.formDataToBeWatched['total_apr_cmt_cct']) * pour_);
      this.formDataToBeWatched["conso_fps"] = this.conso_fps;

      // this.conso_fond_propre_mode_auto[0]["montant"] = this.formDataToBeWatched["total_apr_cmt_cct"] != 0 ? (this.formDataToBeWatched["total_apr_cmt_cct"] * 11 ) / 100 : 0

      this.conso_fond_propre_mode_auto[0]["montant"] = this.convertInt(this.formDataToBeWatched["ligne_conso_fond_propre"]);
      this.formDataToBeWatched["conso_fond_propre_mode_auto"] = this.conso_fond_propre_mode_auto;

      // consoFondPropreWhenAutoMode

      EventBus.$emit("send-total_apr", {
        total_apr: this.formDataToBeWatched["total_apr_cmt_cct"]
      });
      // --------------------------CONSOMMATIONS FOND PROPRES ----------------------//

      //----------------Situations après accords -------------------------------//

      //----------------Situations après accords -------------------------------//
    },
    instruction3: function instruction3(id) {
      var id0 = "#" + id;
      window.$(id0).modal("show");
    },
    mergeData: function mergeData() {
      var rr = _objectSpread(_objectSpread({}, this.f8Manager.data), this.formDataToBeWatched);
      console.log("rr => ", rr);
      return rr;
    },
    convertInt: function convertInt(n) {
      var _n$toString;
      return Number(n === null || n === void 0 || (_n$toString = n.toString()) === null || _n$toString === void 0 ? void 0 : _n$toString.replace(/\s/g, ''));
    },
    isFirstOccurrence: function isFirstOccurrence(keyName, index) {
      var ligne = this.f8Manager.data[keyName][index];
      if (!ligne.ligne_mixe_id) return true;
      return !this.f8Manager.data[keyName].slice(0, index).some(function (item) {
        return item.ligne_mixe_id === ligne.ligne_mixe_id;
      });
    },
    getRowspan: function getRowspan(keyName, ligne_mixe_id) {
      if (!ligne_mixe_id) return 1;
      return this.f8Manager.data[keyName].filter(function (item) {
        return item.ligne_mixe_id === ligne_mixe_id;
      }).length;
    },
    isFirstOrLastOccurrence: function isFirstOrLastOccurrence(keyName, index) {
      var data = this.f8Manager.data[keyName];
      var ligne = data[index];

      // Ignore les lignes sans `ligne_mixe_id` en retournant `false` pour les bordures
      if (!ligne.ligne_mixe_id) {
        return {
          isFirst: false,
          isLast: false
        };
      }

      // Filtre pour trouver toutes les lignes avec le même `ligne_mixe_id`
      var sameGroup = data.filter(function (item) {
        return item.ligne_mixe_id === ligne.ligne_mixe_id;
      });

      // Récupère l'index dans le groupe
      var groupIndex = sameGroup.indexOf(ligne);
      return {
        isFirst: groupIndex === 0,
        isLast: groupIndex === sameGroup.length - 1,
        isMiddle: groupIndex > 0 && groupIndex < sameGroup.length - 1
      };
    },
    getMixteIndex: function getMixteIndex(keyName, currentIndex) {
      var data = this.f8Manager.data[keyName];

      // Vérification si 'data' existe bien avant d'y accéder
      if (!data || !Array.isArray(data)) {
        console.error("Donn\xE9es non disponibles pour la cl\xE9: ".concat(keyName));
        return 0; // Retourne une valeur par défaut ou gère l'erreur autrement
      }
      var currentLine = data[currentIndex];

      // Vérification de la ligne courante
      if (!currentLine) {
        console.error("Ligne non disponible pour l'index: ".concat(currentIndex));
        return 0; // Valeur par défaut en cas d'erreur
      }
      var uniqueGroups = new Set();

      // Boucle à travers les éléments jusqu'à currentIndex pour compter le nombre de groupes 'Mixte'
      for (var i = 0; i <= currentIndex; i++) {
        var item = data[i];
        if (item.ligne_mixte === 'Mixte') {
          uniqueGroups.add(item.ligne_mixe_id);
        }
      }
      return Array.from(uniqueGroups).indexOf(currentLine.ligne_mixe_id) + 1;
    }
  },
  watch: {
    "f8Manager.data": {
      handler: function handler(newVal, oldVal) {
        newVal = _objectSpread(_objectSpread({}, newVal), this.formDataToBeWatched);
        this.autosaving(newVal, oldVal);
      },
      deep: true,
      immediate: false
    },
    formDataToBeWatched: {
      handler: function handler(newVal, oldVal) {
        newVal = _objectSpread(_objectSpread({}, this.f8Manager.data), newVal);
        this.autosaving(newVal, oldVal);
      },
      deep: true,
      immediate: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dc/DC-DESC3.vue?vue&type=template&id=2539dca9&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dc/DC-DESC3.vue?vue&type=template&id=2539dca9&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o;}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o;},_typeof(o);}function _defineProperty(e,r,t){return(r=_toPropertyKey(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e;}function _toPropertyKey(t){var i=_toPrimitive(t,"string");return"symbol"==_typeof(i)?i:i+"";}function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return("string"===r?String:Number)(t);}var render=function render(){var _vm$formDataToBeWatch,_vm$formDataToBeWatch2;var _vm=this,_c=_vm._self._c;return _c("div",{on:{contextmenu:function contextmenu($event){return _vm.$refs.menu.open($event,_vm.tb_name);}}},[_c("div",{staticClass:"row bg-light",staticStyle:{width:"100%",height:"100%"}},[_c("ContextMenu",{ref:"menu",attrs:{cred_pub_key:_vm.meta_parseable.cred_pub_key,id:_vm.tb_name,contextList:_vm.contextList}}),_vm._v(" "),_vm.seen===true?_c("div",{staticClass:"card",staticStyle:{width:"100%",height:"100%"}},[_c("br"),_vm._v(" "),_c("br"),_vm._v(" "),_c("div",{staticClass:"card-header hdc pb-0 pt-2"},[_c("h6",{ref:"topdiv",staticClass:"head",attrs:{id:"f3-head"}},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col"},[_vm._v("\n                            "+_vm._s(_vm.tb_display_name)+" : Synthèse des anciennes et nouvelles lignes\n                        ")]),_vm._v(" "),_c("div",{staticClass:"col-auto"},[((_vm$formDataToBeWatch=_vm.formDataToBeWatched.notes)===null||_vm$formDataToBeWatch===void 0?void 0:_vm$formDataToBeWatch.length)>0?_c("div",{staticStyle:{display:"inline-block",position:"relative"}},[_c("span",{attrs:{type:"button"},on:{click:function click($event){return _vm.openNotesModal(true);}}},[_c("i",{staticClass:"icofont icofont-comment text-white px-2",staticStyle:{"font-size":"12px"},attrs:{role:"button"}}),_vm._v(" "),_c("span",{staticClass:"badge-sm"},[_c("span",[_vm._v("\n                                            "+_vm._s(_vm.formDataToBeWatched.notes.length)+"\n                                        ")])])])]):_vm._e(),_vm._v(" "),_c("chevron-up-icon",{staticClass:"custom-class",staticStyle:{cursor:"pointer"},attrs:{size:"21"},on:{click:function click($event){return _vm.retract();}}})],1)])])]),_vm._v(" "),(_vm.seen3=_vm.seen3)?_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"relook-header",on:{click:function click($event){_vm.seen3=!_vm.seen3;}}},[_c("h6",{"class":" subdiv"+this.tb_name,attrs:{id:"lignes-existantes"}},[_vm._v("\n                        B1 Anciennes lignes \n                        "),_c("chevron-up-icon",{staticClass:"custom-class",staticStyle:{"float":"right",cursor:"pointer"},attrs:{size:"21"}})],1)]),_vm._v(" "),_c("br"),_vm._v(" "),_c("div",{staticClass:"table-responsive mt-4"},[_c("div",{staticClass:"table-responsive"},[_c("table",{staticClass:"table table-borderless"},[_c("thead",[_c("tr",{staticClass:"text-center",staticStyle:{"vertical-align":"center"}},[_c("th",[_vm._v("Lignes")]),_vm._v(" "),_c("th",[_vm._v("Autorisations")]),_vm._v(" "),_c("th",[_c("span",[_vm._v("Encours au")]),_vm._v(" "),_c("date-input",{staticStyle:{"min-width":"250px"},attrs:{value:_vm.f8Manager.data.encours_au,id:"encours_au",background:"background: #00ffff21",color:"color: #000"},on:{input:_vm.formDataVars}})],1),_vm._v(" "),_c("th",[_vm._v("Taux")]),_vm._v(" "),_c("th",[_vm._v("Durée (mois)")]),_vm._v(" "),_c("th",[_vm._v("Echéance")]),_vm._v(" "),_c("th",[_vm._v("Suretés")]),_vm._v(" "),_c("th")])]),_vm._v(" "),_c("tbody",[_vm._l(_vm.f8Manager.data.lignes_existantes,function(ligne_existante,idx){return _c("tr",{key:idx+"lg_exv"},[_vm.isFirstOccurrence("lignes_existantes",idx)?_c("td",{attrs:{rowspan:_vm.getRowspan("lignes_existantes",ligne_existante.ligne_mixe_id)}},[ligne_existante.ligne_mixte=="Mixte"?_c("div",{staticClass:"d-flex"},[_c("select",{directives:[{name:"model",rawName:"v-model",value:ligne_existante.ligne_mixte,expression:"ligne_existante.ligne_mixte"}],staticClass:"form-select","class":{"already-exist":(ligne_existante===null||ligne_existante===void 0?void 0:ligne_existante.tb)=="tb8"},staticStyle:{"min-width":"250px"},on:{change:[function($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(ligne_existante,"ligne_mixte",$event.target.multiple?$$selectedVal:$$selectedVal[0]);},function($event){return _vm.f8Manager.handleInput(ligne_existante,"nouvelles_lignes_caisse",["lignes_existantes",idx]);}]}},[_c("option",{domProps:{value:""}}),_vm._v(" "),_vm._l(_vm.f8Constants.tous_les_lignes,function(line,indexL){return _c("option",{key:indexL+"4z_1",domProps:{value:line.libelle}},[_vm._v(_vm._s(line.libelle))]);}),_vm._v(" "),_c("optgroup",{attrs:{label:"--------------------------------"}}),_vm._v(" "),_c("option",{attrs:{value:"Mixte"}},[_vm._v("Mixte")])],2),_vm._v(" "),_c("div",{staticStyle:{"margin-left":"0.5rem!important"}},[_c("vue-tags-input",{"class":{"already-exist":(ligne_existante===null||ligne_existante===void 0?void 0:ligne_existante.tb)=="tb8"},staticStyle:{width:"250px",border:"1px solid #ccc","border-radius":"6px"},attrs:{"autocomplete-items":_vm.f8Constants.ligneAutoComplete("tous_les_lignes"),tags:ligne_existante.tags,placeholder:"Selectionner les lignes"},on:{"tags-changed":function tagsChanged($event){return _vm.f8Manager.handleTag($event,["lignes_existantes",idx],_vm.f8Constants.tous_les_lignes,ligne_existante,"nouvelles_lignes_caisse");},"adding-duplicate":function addingDuplicate(){}},model:{value:ligne_existante.tag,callback:function callback($$v){_vm.$set(ligne_existante,"tag",$$v);},expression:"ligne_existante.tag"}})],1)]):_c("select",{directives:[{name:"model",rawName:"v-model",value:ligne_existante.ligne,expression:"ligne_existante.ligne"}],staticClass:"form-select","class":{"already-exist":(ligne_existante===null||ligne_existante===void 0?void 0:ligne_existante.tb)=="tb8"},staticStyle:{"min-width":"250px"},on:{change:[function($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(ligne_existante,"ligne",$event.target.multiple?$$selectedVal:$$selectedVal[0]);},function($event){return _vm.f8Manager.handleInput(ligne_existante,"nouvelles_lignes_caisse",["lignes_existantes",idx]);}]}},[_c("option",{domProps:{value:""}}),_vm._v(" "),_vm._l(_vm.f8Constants.tous_les_lignes,function(line,indexL){return _c("option",{key:indexL+"4z_1",domProps:{value:line.libelle}},[_vm._v(_vm._s(line.libelle))]);}),_vm._v(" "),_c("optgroup",{attrs:{label:"--------------------------------"}}),_vm._v(" "),_c("option",{attrs:{value:"Mixte"}},[_vm._v("Mixte")])],2)]):_vm._e(),_vm._v(" "),_c("td",[_c("currency-input2",{"class":{"already-exist":(ligne_existante===null||ligne_existante===void 0?void 0:ligne_existante.tb)=="tb8"},staticStyle:{"min-width":"250px"},attrs:{"default-typing":false},on:{change:function change($event){return _vm.f8Manager.handleInput(ligne_existante,"nouvelles_lignes_caisse");}},model:{value:ligne_existante.autorisation,callback:function callback($$v){_vm.$set(ligne_existante,"autorisation",$$v);},expression:"ligne_existante.autorisation"}}),_vm._v(" "),ligne_existante.ligne_mixte_libelle?_c("label",{staticClass:"text-center",staticStyle:{"font-size":"12px !important"},attrs:{"for":"floatingTextarea"}},[_vm._v(_vm._s(ligne_existante.ligne_mixte_libelle))]):_vm._e()],1),_vm._v(" "),_c("td",[_c("currency-input2",{"class":{"already-exist":(ligne_existante===null||ligne_existante===void 0?void 0:ligne_existante.tb)=="tb8"},staticStyle:{"min-width":"250px"},attrs:{"default-typing":false},on:{change:function change($event){return _vm.f8Manager.handleInput(ligne_existante,"nouvelles_lignes_caisse");}},model:{value:ligne_existante.encours,callback:function callback($$v){_vm.$set(ligne_existante,"encours",$$v);},expression:"ligne_existante.encours"}})],1),_vm._v(" "),_c("td",[_c("input",{directives:[{name:"model",rawName:"v-model",value:ligne_existante.taux,expression:"ligne_existante.taux"}],staticClass:"form-control","class":{"already-exist":(ligne_existante===null||ligne_existante===void 0?void 0:ligne_existante.tb)=="tb8"},staticStyle:{width:"60px"},attrs:{type:"number"},domProps:{value:ligne_existante.taux},on:{change:function change($event){return _vm.f8Manager.handleInput(ligne_existante,"nouvelles_lignes_caisse");},input:function input($event){if($event.target.composing)return;_vm.$set(ligne_existante,"taux",$event.target.value);}}})]),_vm._v(" "),_c("td",[_c("input",{directives:[{name:"model",rawName:"v-model",value:ligne_existante.duree,expression:"ligne_existante.duree"}],staticClass:"form-control","class":{"already-exist":(ligne_existante===null||ligne_existante===void 0?void 0:ligne_existante.tb)=="tb8"},staticStyle:{width:"80px"},attrs:{type:"number"},domProps:{value:ligne_existante.duree},on:{change:function change($event){return _vm.f8Manager.handleInput(ligne_existante,"nouvelles_lignes_caisse");},input:function input($event){if($event.target.composing)return;_vm.$set(ligne_existante,"duree",$event.target.value);}}})]),_vm._v(" "),_c("td",[_c("div",{staticStyle:{width:"280px"}},[_c("date-input",{"class":{"already-exist":(ligne_existante===null||ligne_existante===void 0?void 0:ligne_existante.tb)=="tb8"},attrs:{value:ligne_existante.echeance,classname:(ligne_existante===null||ligne_existante===void 0?void 0:ligne_existante.tb)=="tb8"?"already-exist":""},on:{input:function input($event){return _vm.formDataVars2($event,idx,"lignes_existantes","echeance");}}})],1)]),_vm._v(" "),_c("td",[_c("button",{staticStyle:{color:"#ffffff","border-radius":"15%",border:"none"},style:_vm.f8Manager.lineHasSuretes(ligne_existante),attrs:{type:"button",title:"Ajouter des suretés à cette ligne"},on:{click:function click($event){return _vm.openModal("hypoModal",ligne_existante);}}},[_c("i",{staticClass:"icofont-list",attrs:{size:"21"}})])]),_vm._v(" "),_c("td",[_c("button",{staticStyle:{"background-color":"#2c3e50","border-radius":"15%",color:"#ffffff",border:"none"},attrs:{type:"button",title:"Effacer le contenu"},on:{click:function click($event){return _vm.f8Manager.cleanLine("lignes_existantes",ligne_existante.id,"nouvelles_lignes_caisse");}}},[_c("i",{staticClass:"icofont-dropbox"})])]),_vm._v(" "),idx==0?_c("td",[_c("button",{directives:[{name:"show",rawName:"v-show",value:idx==0,expression:"idx == 0"}],staticStyle:{"background-color":"#2c3e50",color:"#ffffff","border-radius":"15%",border:"none"},attrs:{type:"button",title:"Ajouter un nouvel article"},on:{click:function click($event){return _vm.f8Manager.addLine("lignes_existantes","nouvelles_lignes_caisse");}}},[_c("plus-icon",{staticClass:"custom-class",attrs:{size:"21"}})],1)]):_c("td",[_c("button",{directives:[{name:"show",rawName:"v-show",value:idx!=0,expression:"idx != 0"}],staticStyle:{"background-color":"transparent",border:"none"},attrs:{type:"button",title:"Supprimer cette action"},on:{click:function click($event){return _vm.f8Manager.removeLine("lignes_existantes",ligne_existante.id,"nouvelles_lignes_caisse");}}},[_c("trash-icon",{staticClass:"custom-class",attrs:{size:"21"}})],1)])]);}),_vm._v(" "),_c("tr",[_vm._m(0),_vm._v(" "),_c("td",[_c("currency-input2",{staticClass:"form-control",staticStyle:{"min-width":"250px"},attrs:{"default-typing":false,readonly:""},model:{value:_vm.f8Manager.data.st_caisse_ligne_existantes_autorisation,callback:function callback($$v){_vm.$set(_vm.f8Manager.data,"st_caisse_ligne_existantes_autorisation",$$v);},expression:"f8Manager.data.st_caisse_ligne_existantes_autorisation"}})],1),_vm._v(" "),_c("td",[_c("currency-input2",{staticClass:"form-control",staticStyle:{"min-width":"250px"},attrs:{"default-typing":false,readonly:""},model:{value:_vm.f8Manager.data.st_caisse_ligne_existantes_encours,callback:function callback($$v){_vm.$set(_vm.f8Manager.data,"st_caisse_ligne_existantes_encours",$$v);},expression:"f8Manager.data.st_caisse_ligne_existantes_encours"}})],1)])],2)])]),_vm._v(" "),_c("br"),_vm._v(" "),_c("b",[_vm._v("Engagement signature")]),_vm._v(" "),_c("div",{staticClass:"table-responsive"},[_c("table",{staticClass:"table table-borderless"},[_c("thead",[_c("tr",{staticClass:"text-center",staticStyle:{"vertical-align":"center"}},[_c("th",[_vm._v("Lignes")]),_vm._v(" "),_c("th",[_vm._v("Autorisations")]),_vm._v(" "),_c("th",[_c("span",[_vm._v("Encours au")]),_vm._v(" "),_c("date-input",{attrs:{value:_vm.f8Manager.data.encours_au,id:"encours_au",background:"background: #00ffff21",color:"color: #000"},on:{input:_vm.formDataVars}})],1),_vm._v(" "),_c("th",[_vm._v("Taux")]),_vm._v(" "),_c("th",[_vm._v("Durée (mois)")]),_vm._v(" "),_c("th",[_vm._v("Echéance")]),_vm._v(" "),_c("th",[_vm._v("Suretés")]),_vm._v(" "),_c("th")])]),_vm._v(" "),_c("tbody",[_vm._l(_vm.f8Manager.data.lignes_existantes_engagements_signatures,function(eng_sign,i){return _c("tr",{key:i+"lg_ex"},[_vm.isFirstOccurrence("lignes_existantes_engagements_signatures",i)?_c("td",{attrs:{rowspan:_vm.getRowspan("lignes_existantes_engagements_signatures",eng_sign.ligne_mixe_id)}},[eng_sign.ligne_mixte=="Mixte"?_c("div",{staticClass:"d-flex"},[_c("select",{directives:[{name:"model",rawName:"v-model",value:eng_sign.ligne_mixte,expression:"eng_sign.ligne_mixte"}],staticClass:"form-select","class":{"already-exist":(eng_sign===null||eng_sign===void 0?void 0:eng_sign.tb)=="tb8"},staticStyle:{"min-width":"250px"},on:{change:[function($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(eng_sign,"ligne_mixte",$event.target.multiple?$$selectedVal:$$selectedVal[0]);},function($event){return _vm.f8Manager.handleInput(eng_sign,"nouvelles_lignes_signature",["lignes_existantes_engagements_signatures",i]);}]}},[_c("option",{domProps:{value:""}}),_vm._v(" "),_vm._l(_vm.f8Constants.lignes_engagements_signatures,function(line,indexL){return _c("option",{key:indexL+"4eg",domProps:{value:line.libelle}},[_vm._v(_vm._s(line.libelle))]);}),_vm._v(" "),_c("optgroup",{attrs:{label:"--------------------------------"}}),_vm._v(" "),_c("option",{attrs:{value:"Mixte"}},[_vm._v("Mixte")])],2),_vm._v(" "),_c("div",{staticStyle:{"margin-left":"0.5rem!important"}},[_c("vue-tags-input",{"class":{"already-exist":(eng_sign===null||eng_sign===void 0?void 0:eng_sign.tb)=="tb8"},staticStyle:{width:"250px",border:"1px solid #ccc","border-radius":"6px"},attrs:{"autocomplete-items":_vm.f8Constants.ligneAutoComplete("lignes_engagements_signatures"),tags:eng_sign.tags,placeholder:"Selectionner les lignes"},on:{"tags-changed":function tagsChanged($event){return _vm.f8Manager.handleTag($event,["lignes_existantes_engagements_signatures",i],_vm.f8Constants.lignes_engagements_signatures,eng_sign,"nouvelles_lignes_signature");},"adding-duplicate":function addingDuplicate(){}},model:{value:eng_sign.tag,callback:function callback($$v){_vm.$set(eng_sign,"tag",$$v);},expression:"eng_sign.tag"}})],1)]):_c("select",{directives:[{name:"model",rawName:"v-model",value:eng_sign.ligne,expression:"eng_sign.ligne"}],staticClass:"form-select","class":{"already-exist":(eng_sign===null||eng_sign===void 0?void 0:eng_sign.tb)=="tb8"},staticStyle:{"min-width":"250px"},on:{change:[function($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(eng_sign,"ligne",$event.target.multiple?$$selectedVal:$$selectedVal[0]);},function($event){return _vm.f8Manager.handleInput(eng_sign,"nouvelles_lignes_signature",["lignes_existantes_engagements_signatures",i]);}]}},[_c("option",{domProps:{value:""}}),_vm._v(" "),_vm._l(_vm.f8Constants.lignes_engagements_signatures,function(line,indexL){return _c("option",{key:indexL+"4eg",domProps:{value:line.libelle}},[_vm._v(_vm._s(line.libelle))]);}),_vm._v(" "),_c("optgroup",{attrs:{label:"--------------------------------"}}),_vm._v(" "),_c("option",{attrs:{value:"Mixte"}},[_vm._v("Mixte")])],2)]):_vm._e(),_vm._v(" "),_c("td",[_c("currency-input2",{"class":{"already-exist":(eng_sign===null||eng_sign===void 0?void 0:eng_sign.tb)=="tb8"},staticStyle:{"min-width":"250px"},attrs:{"default-typing":false},on:{change:function change($event){return _vm.f8Manager.handleInput(eng_sign,"nouvelles_lignes_signature");}},model:{value:eng_sign.autorisation,callback:function callback($$v){_vm.$set(eng_sign,"autorisation",$$v);},expression:"eng_sign.autorisation"}}),_vm._v(" "),eng_sign.ligne_mixte_libelle?_c("label",{staticClass:"text-center",staticStyle:{"font-size":"12px !important"},attrs:{"for":"floatingTextarea"}},[_vm._v(_vm._s(eng_sign.ligne_mixte_libelle))]):_vm._e()],1),_vm._v(" "),_c("td",[_c("currency-input2",{"class":{"already-exist":(eng_sign===null||eng_sign===void 0?void 0:eng_sign.tb)=="tb8"},staticStyle:{"min-width":"250px"},attrs:{"default-typing":false},on:{change:function change($event){return _vm.f8Manager.handleInput(eng_sign,"nouvelles_lignes_signature");}},model:{value:eng_sign.encours,callback:function callback($$v){_vm.$set(eng_sign,"encours",$$v);},expression:"eng_sign.encours"}})],1),_vm._v(" "),_c("td",[_c("input",{directives:[{name:"model",rawName:"v-model",value:eng_sign.taux,expression:"eng_sign.taux"}],staticClass:"form-control","class":{"already-exist":(eng_sign===null||eng_sign===void 0?void 0:eng_sign.tb)=="tb8"},staticStyle:{width:"60px"},attrs:{type:"number"},domProps:{value:eng_sign.taux},on:{change:function change($event){return _vm.f8Manager.handleInput(eng_sign,"nouvelles_lignes_signature");},input:function input($event){if($event.target.composing)return;_vm.$set(eng_sign,"taux",$event.target.value);}}})]),_vm._v(" "),_c("td",[_c("input",{directives:[{name:"model",rawName:"v-model",value:eng_sign.duree,expression:"eng_sign.duree"}],staticClass:"form-control","class":{"already-exist":(eng_sign===null||eng_sign===void 0?void 0:eng_sign.tb)=="tb8"},staticStyle:{width:"80px"},attrs:{type:"number"},domProps:{value:eng_sign.duree},on:{change:function change($event){return _vm.f8Manager.handleInput(eng_sign,"nouvelles_lignes_signature");},input:function input($event){if($event.target.composing)return;_vm.$set(eng_sign,"duree",$event.target.value);}}})]),_vm._v(" "),_c("td",[_c("div",{staticStyle:{width:"280px"}},[_c("date-input",{attrs:{value:eng_sign.echeance,classname:(eng_sign===null||eng_sign===void 0?void 0:eng_sign.tb)=="tb8"?"already-exist":""},on:{input:function input($event){return _vm.formDataVars2($event,i,"lignes_existantes_engagements_signatures","echeance");}}})],1)]),_vm._v(" "),_c("td",[_c("button",{staticStyle:{"background-color":"#2c3e50","border-radius":"15%",color:"#ffffff",border:"none"},attrs:{type:"button",title:"Effacer le contenu de ligne"},on:{click:function click($event){return _vm.f8Manager.cleanLine("lignes_existantes_engagements_signatures",eng_sign.id,"nouvelles_lignes_signature");}}},[_c("i",{staticClass:"icofont-dropbox"})])]),_vm._v(" "),_c("td",[_c("button",{staticStyle:{color:"#ffffff","border-radius":"15%",border:"none"},style:_vm.f8Manager.lineHasSuretes(eng_sign),attrs:{type:"button",title:"Ajouter des suretés à cette ligne"},on:{click:function click($event){return _vm.openModal("hypoModal",eng_sign);}}},[_c("i",{staticClass:"icofont-list",attrs:{size:"21"}})])]),_vm._v(" "),i==0?_c("td",[_c("button",{directives:[{name:"show",rawName:"v-show",value:i==0,expression:"i == 0"}],staticStyle:{"background-color":"#2c3e50",color:"#ffffff","border-radius":"15%",border:"none"},attrs:{type:"button",title:"Ajouter un nouvel article"},on:{click:function click($event){return _vm.f8Manager.addLine("lignes_existantes_engagements_signatures","nouvelles_lignes_signature");}}},[_c("plus-icon",{staticClass:"custom-class",attrs:{size:"21"}})],1)]):_c("td",[_c("button",{directives:[{name:"show",rawName:"v-show",value:i!=0,expression:"i != 0"}],staticStyle:{"background-color":"transparent",border:"none"},attrs:{type:"button",title:"Supprimer cette action"},on:{click:function click($event){return _vm.f8Manager.removeLine("lignes_existantes_engagements_signatures",eng_sign.id,"nouvelles_lignes_signature");}}},[_c("trash-icon",{staticClass:"custom-class",attrs:{size:"21"}})],1)])]);}),_vm._v(" "),_c("tr",[_vm._m(1),_vm._v(" "),_c("td",[_c("currency-input2",{staticClass:"form-control",staticStyle:{"min-width":"250px"},attrs:{"default-typing":false,readonly:""},model:{value:_vm.f8Manager.data.st_signature_ligne_existantes_autorisation,callback:function callback($$v){_vm.$set(_vm.f8Manager.data,"st_signature_ligne_existantes_autorisation",$$v);},expression:"f8Manager.data.st_signature_ligne_existantes_autorisation"}})],1),_vm._v(" "),_c("td",[_c("currency-input2",{staticClass:"form-control",staticStyle:{"min-width":"250px"},attrs:{"default-typing":false,readonly:""},model:{value:_vm.f8Manager.data.st_signature_ligne_existantes_encours,callback:function callback($$v){_vm.$set(_vm.f8Manager.data,"st_signature_ligne_existantes_encours",$$v);},expression:"f8Manager.data.st_signature_ligne_existantes_encours"}})],1)]),_vm._v(" "),_c("tr",[_vm._m(2),_vm._v(" "),_c("td",[_c("currency-input2",{staticClass:"form-control",staticStyle:{background:"#34495e",color:"#fff","min-width":"250px"},attrs:{"default-typing":false,readonly:""},model:{value:_vm.f8Manager.data.total_lignes_existantes_autorisation,callback:function callback($$v){_vm.$set(_vm.f8Manager.data,"total_lignes_existantes_autorisation",$$v);},expression:"f8Manager.data.total_lignes_existantes_autorisation"}})],1),_vm._v(" "),_c("td",[_c("currency-input2",{staticClass:"form-control",staticStyle:{background:"#34495e",color:"#fff","min-width":"250px"},attrs:{"default-typing":false,readonly:""},model:{value:_vm.f8Manager.data.total_lignes_existantes_encours,callback:function callback($$v){_vm.$set(_vm.f8Manager.data,"total_lignes_existantes_encours",$$v);},expression:"f8Manager.data.total_lignes_existantes_encours"}})],1)])],2)])])]),_vm._v(" "),_c("div",{staticClass:"card-body"},[_c("vue-editor",{attrs:{id:"commentaire_lignes_existantes"},on:{"update-value":function updateValue($event){_vm.f8Manager.data[$event[0]]=$event[1];}},model:{value:_vm.f8Manager.data.commentaire_lignes_existantes,callback:function callback($$v){_vm.$set(_vm.f8Manager.data,"commentaire_lignes_existantes",$$v);},expression:"f8Manager.data.commentaire_lignes_existantes"}})],1),_vm._v(" "),_c("div")]):_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"relook-header mb-5",on:{click:function click($event){_vm.seen3=!_vm.seen3;}}},[_c("h6",{attrs:{id:"lignes-existantes"}},[_vm._v("\n                        B1 Anciennes lignes \n                        "),_c("chevron-down-icon",{staticClass:"custom-class",staticStyle:{"float":"right",cursor:"pointer"},attrs:{size:"21"}})],1)])]),_vm._v(" "),(_vm.seen4=_vm.seen4)?_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"relook-header",on:{click:function click($event){_vm.seen4=!_vm.seen4;}}},[_c("h6",{"class":" subdiv"+this.tb_name,attrs:{id:"nouvelles-lignes"}},[_vm._v("\n                        B2 Nouvelles lignes (objet de la présente demande)\n                        "),_c("chevron-up-icon",{staticClass:"custom-class",staticStyle:{"float":"right",cursor:"pointer"},attrs:{size:"21"}})],1)]),_vm._v(" "),_c("br"),_vm._v(" "),_c("div",{staticClass:"table-responsive mt-4"},[_c("div",{staticClass:"table-responsive"},[_c("table",{staticClass:"table table-borderless"},[_c("thead",[_c("tr",{staticClass:"text-center",staticStyle:{"vertical-align":"center"}},[_c("th",[_vm._v("Lignes")]),_vm._v(" "),_c("th",[_vm._v("Statut")]),_vm._v(" "),_c("th",[_vm._v("Montant")]),_vm._v(" "),_c("th",[_vm._v("Proposition (autorisation)")]),_vm._v(" "),_c("th",[_c("span",[_vm._v("Encours au")]),_vm._v(" "),_c("date-input",{staticStyle:{"min-width":"250px"},attrs:{value:_vm.f8Manager.data.encours_au,id:"encours_au",background:"background: #00ffff21",color:"color: #000"},on:{input:_vm.formDataVars}})],1),_vm._v(" "),_c("th",[_vm._v("Durée (mois)")]),_vm._v(" "),_c("th",[_vm._v("Ech/Durée tirage")]),_vm._v(" "),_c("th",[_vm._v("Taux")]),_vm._v(" "),_c("th"),_vm._v(" "),_c("th",[_vm._v("Suretés")])])]),_vm._v(" "),_c("tbody",[_vm._l(_vm.f8Manager.data.nouvelles_lignes_caisse,function(nv_ligne_caisse,idx_){return _c("tr",{key:idx_+"nv_lg_1"},[_c("td",[nv_ligne_caisse!==null&&nv_ligne_caisse!==void 0&&nv_ligne_caisse.from?[nv_ligne_caisse.ligne_mixte=="Mixte"?_c("div",{staticClass:"d-flex"},[_c("select",{directives:[{name:"model",rawName:"v-model",value:nv_ligne_caisse.ligne,expression:"nv_ligne_caisse.ligne"}],staticClass:"form-select",attrs:{title:nv_ligne_caisse.ligne,disabled:""},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(nv_ligne_caisse,"ligne",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",{domProps:{value:nv_ligne_caisse.ligne}},[_vm._v(_vm._s(nv_ligne_caisse.ligne_mixte)+" - "+_vm._s(_vm.getMixteIndex("nouvelles_lignes_caisse",idx_))+"\n                                                    ")])]),_vm._v(" "),_c("div",{staticStyle:{"margin-left":"0.5rem!important"}},[_c("input",{staticClass:"form-control",staticStyle:{width:"150px",border:"1px solid #ccc","border-radius":"6px"},attrs:{type:"text",disabled:""},domProps:{value:nv_ligne_caisse.ligne}})])]):_c("div",[nv_ligne_caisse!==null&&nv_ligne_caisse!==void 0&&nv_ligne_caisse.from?_c("select",{directives:[{name:"model",rawName:"v-model",value:nv_ligne_caisse.ligne,expression:"nv_ligne_caisse.ligne"}],staticClass:"form-select",attrs:{disabled:!["",null,undefined].includes(nv_ligne_caisse.from)},on:{change:[function($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(nv_ligne_caisse,"ligne",$event.target.multiple?$$selectedVal:$$selectedVal[0]);},function($event){null;}]}},[_c("option",{domProps:{value:""}}),_vm._v(" "),_vm._l(_vm.f8Constants.tous_les_lignes_filtres,function(line,indexL){return _c("option",{key:indexL+"4z_1",domProps:{value:line.libelle}},[_vm._v(_vm._s(line.libelle))]);})],2):_c("select",{directives:[{name:"model",rawName:"v-model",value:nv_ligne_caisse.ligne,expression:"nv_ligne_caisse.ligne"}],staticClass:"form-select",attrs:{disabled:!["",null,undefined].includes(nv_ligne_caisse.from)},on:{change:[function($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(nv_ligne_caisse,"ligne",$event.target.multiple?$$selectedVal:$$selectedVal[0]);},function($event){null;}]}},[_c("option",{domProps:{value:""}}),_vm._v(" "),_vm._l(_vm.f8Constants.tous_les_lignes,function(line,indexL){return _c("option",{key:indexL+"4z_1",domProps:{value:line.libelle}},[_vm._v(_vm._s(line.libelle))]);})],2)])]:[nv_ligne_caisse.ligne_mixte=="Mixte"?_c("div",{staticClass:"d-flex"},[_c("select",{directives:[{name:"model",rawName:"v-model",value:nv_ligne_caisse.ligne_mixte,expression:"nv_ligne_caisse.ligne_mixte"}],staticClass:"form-select","class":{"already-exist":(nv_ligne_caisse===null||nv_ligne_caisse===void 0?void 0:nv_ligne_caisse.tb)=="tb8"},staticStyle:{"min-width":"250px"},on:{change:[function($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(nv_ligne_caisse,"ligne_mixte",$event.target.multiple?$$selectedVal:$$selectedVal[0]);},function($event){return _vm.f8Manager.addVarMixte(["nouvelles_lignes_caisse",idx_]);}]}},[_c("option",{domProps:{value:""}}),_vm._v(" "),_vm._l(_vm.f8Constants.tous_les_lignes_filtres,function(line,indexL){return _c("option",{key:indexL+"4z_1",domProps:{value:line.libelle}},[_vm._v(_vm._s(line.libelle))]);}),_vm._v(" "),_c("optgroup",{attrs:{label:"--------------------------------"}}),_vm._v(" "),_c("option",{attrs:{value:"Mixte"}},[_vm._v("Mixte")])],2),_vm._v(" "),_c("div",{staticStyle:{"margin-left":"0.5rem!important"}},[_c("vue-tags-input",{"class":{"already-exist":(nv_ligne_caisse===null||nv_ligne_caisse===void 0?void 0:nv_ligne_caisse.tb)=="tb8"},staticStyle:{width:"250px",border:"1px solid #ccc","border-radius":"6px"},attrs:{"autocomplete-items":_vm.f8Constants.ligneAutoComplete("tous_les_lignes_filtres"),tags:nv_ligne_caisse.tags,placeholder:"Selectionner les lignes"},on:{"tags-changed":function tagsChanged($event){return _vm.f8Manager.handleTag($event,["nouvelles_lignes_caisse",idx_],_vm.f8Constants.tous_les_lignes_filtres,null,null);},"adding-duplicate":function addingDuplicate(){}},model:{value:nv_ligne_caisse.tag,callback:function callback($$v){_vm.$set(nv_ligne_caisse,"tag",$$v);},expression:"nv_ligne_caisse.tag"}})],1)]):_c("select",{directives:[{name:"model",rawName:"v-model",value:nv_ligne_caisse.ligne,expression:"nv_ligne_caisse.ligne"}],staticClass:"form-select","class":{"already-exist":(nv_ligne_caisse===null||nv_ligne_caisse===void 0?void 0:nv_ligne_caisse.tb)=="tb8"},staticStyle:{"min-width":"250px"},on:{change:[function($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(nv_ligne_caisse,"ligne",$event.target.multiple?$$selectedVal:$$selectedVal[0]);},function($event){return _vm.f8Manager.addVarMixte(["nouvelles_lignes_caisse",idx_]);}]}},[_c("option",{domProps:{value:""}}),_vm._v(" "),_vm._l(_vm.f8Constants.tous_les_lignes_filtres,function(line,indexL){return _c("option",{key:indexL+"4z_1",domProps:{value:line.libelle}},[_vm._v(_vm._s(line.libelle))]);}),_vm._v(" "),_c("optgroup",{attrs:{label:"--------------------------------"}}),_vm._v(" "),_c("option",{attrs:{value:"Mixte"}},[_vm._v("Mixte")])],2)]],2),_vm._v(" "),_c("td",[_c("select",{directives:[{name:"model",rawName:"v-model",value:nv_ligne_caisse.statut,expression:"nv_ligne_caisse.statut"}],staticClass:"form-select","class":_defineProperty({"already-exist":nv_ligne_caisse===null||nv_ligne_caisse===void 0?void 0:nv_ligne_caisse.from},"already-exist",(nv_ligne_caisse===null||nv_ligne_caisse===void 0?void 0:nv_ligne_caisse.tb)=="tb8"),staticStyle:{"min-width":"250px"},attrs:{title:nv_ligne_caisse.statut},on:{change:[function($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(nv_ligne_caisse,"statut",$event.target.multiple?$$selectedVal:$$selectedVal[0]);},function($event){return _vm.f8Manager.computedTypeStatus("lignes_existantes",nv_ligne_caisse,idx_,"nouvelles_lignes_caisse");}]}},[nv_ligne_caisse!==null&&nv_ligne_caisse!==void 0&&nv_ligne_caisse.from?[_c("option",{domProps:{value:"Renouvellement"}},[_vm._v("Renouvellement")]),_vm._v(" "),_c("option",{domProps:{value:"Abandon"}},[_vm._v("Abandon")])]:[_c("option",{domProps:{value:"Nouveau"}},[_vm._v("Nouveau")])]],2)]),_vm._v(" "),_c("td",[_c("currency-input2",{"class":{"already-exist":(nv_ligne_caisse===null||nv_ligne_caisse===void 0?void 0:nv_ligne_caisse.from)||(nv_ligne_caisse===null||nv_ligne_caisse===void 0?void 0:nv_ligne_caisse.tb)=="tb8"},staticStyle:{"min-width":"250px"},attrs:{disabled:!["",null,undefined].includes(nv_ligne_caisse.from),"default-typing":false},on:{change:function change($event){return _vm.f8Manager.computedTypeStatus("lignes_existantes",nv_ligne_caisse,idx_,"nouvelles_lignes_caisse");}},model:{value:nv_ligne_caisse.montant,callback:function callback($$v){_vm.$set(nv_ligne_caisse,"montant",$$v);},expression:"nv_ligne_caisse.montant"}})],1),_vm._v(" "),_c("td",[_c("currency-input2",{"class":{"already-exist":(nv_ligne_caisse===null||nv_ligne_caisse===void 0?void 0:nv_ligne_caisse.from)||(nv_ligne_caisse===null||nv_ligne_caisse===void 0?void 0:nv_ligne_caisse.tb)=="tb8"},staticStyle:{"min-width":"250px"},attrs:{"default-typing":false},on:{change:function change($event){return _vm.f8Manager.computedTypeStatus("lignes_existantes",nv_ligne_caisse,idx_,"nouvelles_lignes_caisse");}},model:{value:nv_ligne_caisse.proposition,callback:function callback($$v){_vm.$set(nv_ligne_caisse,"proposition",$$v);},expression:"nv_ligne_caisse.proposition"}})],1),_vm._v(" "),_c("td",[_c("currency-input2",{"class":{"already-exist":(nv_ligne_caisse===null||nv_ligne_caisse===void 0?void 0:nv_ligne_caisse.from)||(nv_ligne_caisse===null||nv_ligne_caisse===void 0?void 0:nv_ligne_caisse.tb)=="tb8"},staticStyle:{"min-width":"250px"},attrs:{"default-typing":false},on:{change:function change($event){return _vm.f8Manager.computedTypeStatus("lignes_existantes",nv_ligne_caisse,idx_,"nouvelles_lignes_caisse");}},model:{value:nv_ligne_caisse.encours,callback:function callback($$v){_vm.$set(nv_ligne_caisse,"encours",$$v);},expression:"nv_ligne_caisse.encours"}})],1),_vm._v(" "),_c("td",[_c("input",{directives:[{name:"model",rawName:"v-model",value:nv_ligne_caisse.duree,expression:"nv_ligne_caisse.duree"}],staticClass:"form-control","class":{"already-exist":(nv_ligne_caisse===null||nv_ligne_caisse===void 0?void 0:nv_ligne_caisse.from)||(nv_ligne_caisse===null||nv_ligne_caisse===void 0?void 0:nv_ligne_caisse.tb)=="tb8"},staticStyle:{width:"80px"},attrs:{type:"number"},domProps:{value:nv_ligne_caisse.duree},on:{change:function change($event){return _vm.f8Manager.computedTypeStatus("lignes_existantes",nv_ligne_caisse,idx_,"nouvelles_lignes_caisse");},input:function input($event){if($event.target.composing)return;_vm.$set(nv_ligne_caisse,"duree",$event.target.value);}}})]),_vm._v(" "),_c("td",[_c("div",{staticStyle:{width:"280px"}},[_c("date-input",{attrs:{classname:nv_ligne_caisse!==null&&nv_ligne_caisse!==void 0&&nv_ligne_caisse.from||(nv_ligne_caisse===null||nv_ligne_caisse===void 0?void 0:nv_ligne_caisse.tb)=="tb8"?"already-exist":"",value:nv_ligne_caisse.echeance},on:{input:function input($event){return _vm.formDataVars2($event,idx_,"nouvelles_lignes_caisse","echeance");}}})],1)]),_vm._v(" "),_c("td",[_c("input",{directives:[{name:"model",rawName:"v-model",value:nv_ligne_caisse.taux,expression:"nv_ligne_caisse.taux"}],staticClass:"form-control","class":{"already-exist":(nv_ligne_caisse===null||nv_ligne_caisse===void 0?void 0:nv_ligne_caisse.from)||(nv_ligne_caisse===null||nv_ligne_caisse===void 0?void 0:nv_ligne_caisse.tb)=="tb8"},staticStyle:{width:"60px"},attrs:{type:"number"},domProps:{value:nv_ligne_caisse.taux},on:{change:function change($event){null;},input:function input($event){if($event.target.composing)return;_vm.$set(nv_ligne_caisse,"taux",$event.target.value);}}})]),_vm._v(" "),_c("td",[_c("input",{directives:[{name:"model",rawName:"v-model",value:nv_ligne_caisse.type,expression:"nv_ligne_caisse.type"}],staticClass:"form-control","class":{"already-exist":(nv_ligne_caisse===null||nv_ligne_caisse===void 0?void 0:nv_ligne_caisse.from)||(nv_ligne_caisse===null||nv_ligne_caisse===void 0?void 0:nv_ligne_caisse.tb)=="tb8"},staticStyle:{width:"60px"},attrs:{disabled:"",title:nv_ligne_caisse.type=="RI"?"Renouvellement identique":nv_ligne_caisse.type=="RH"?"Renouvellement à la hausse":nv_ligne_caisse.type=="RB"?"Renouvellement à la baisse":nv_ligne_caisse.type=="AB"?"Abandon":""},domProps:{value:nv_ligne_caisse.type},on:{input:function input($event){if($event.target.composing)return;_vm.$set(nv_ligne_caisse,"type",$event.target.value);}}})]),_vm._v(" "),_c("td",[nv_ligne_caisse.from?_c("button",{staticStyle:{color:"#ffffff","border-radius":"15%",border:"none"},style:_vm.f8Manager.lineHasSuretes(nv_ligne_caisse),attrs:{type:"button",title:"Chager les suretés de la ligne existante correspondante"},on:{click:function click($event){return _vm.openModal("hypoModal",nv_ligne_caisse,true);}}},[_c("i",{staticClass:"icofont-download",attrs:{size:"21"}})]):_c("button",{staticStyle:{color:"#ffffff","border-radius":"15%",border:"none"},style:_vm.f8Manager.lineHasSuretes(nv_ligne_caisse),attrs:{type:"button",title:"Ajouter des suretés à cette ligne"},on:{click:function click($event){return _vm.openModal("hypoModal",nv_ligne_caisse);}}},[_c("i",{staticClass:"icofont-list",attrs:{size:"21"}})])]),_vm._v(" "),_c("td",[_c("button",{staticStyle:{"background-color":"#2c3e50","border-radius":"15%",color:"#ffffff",border:"none"},style:!["",null,undefined].includes(nv_ligne_caisse.from)?{"background-color":"#e9ecef"}:"",attrs:{disabled:!["",null,undefined].includes(nv_ligne_caisse.from),type:"button",title:"Effacer le contenu de ligne"},on:{click:function click($event){return _vm.f8Manager.cleanLine("nouvelles_lignes_caisse",nv_ligne_caisse.id);}}},[_c("i",{staticClass:"icofont-dropbox"})])]),_vm._v(" "),_c("td",[idx_===0?[_c("button",{staticStyle:{"background-color":"#2c3e50",color:"#ffffff","border-radius":"15%",border:"none"},attrs:{type:"button",title:"Ajouter un nouvel article"},on:{click:function click($event){return _vm.f8Manager.addLine("nouvelles_lignes_caisse");}}},[_c("plus-icon",{staticClass:"custom-class",attrs:{size:"21"}})],1)]:[!nv_ligne_caisse.from?_c("button",{staticStyle:{"background-color":"transparent",border:"none"},attrs:{type:"button",title:"Supprimer cette action"},on:{click:function click($event){return _vm.f8Manager.removeLine("nouvelles_lignes_caisse",nv_ligne_caisse.id);}}},[_c("trash-icon",{staticClass:"custom-class",attrs:{size:"21"}})],1):_vm._e()]],2)]);}),_vm._v(" "),_c("tr",[_vm._m(3),_vm._v(" "),_c("td",[_c("currency-input2",{staticClass:"form-control",staticStyle:{"min-width":"250px"},attrs:{"default-typing":false,readonly:""},model:{value:_vm.f8Manager.data.st_caisse_nouvelles_lignes_montant,callback:function callback($$v){_vm.$set(_vm.f8Manager.data,"st_caisse_nouvelles_lignes_montant",$$v);},expression:"f8Manager.data.st_caisse_nouvelles_lignes_montant"}})],1),_vm._v(" "),_c("td",[_c("currency-input2",{staticClass:"form-control",staticStyle:{"min-width":"250px"},attrs:{"default-typing":false,readonly:""},model:{value:_vm.f8Manager.data.st_caisse_nouvelles_lignes_proposition,callback:function callback($$v){_vm.$set(_vm.f8Manager.data,"st_caisse_nouvelles_lignes_proposition",$$v);},expression:"f8Manager.data.st_caisse_nouvelles_lignes_proposition"}})],1)])],2)])]),_vm._v(" "),_c("br"),_vm._v(" "),_c("b",[_vm._v("Engagement signature")]),_vm._v(" "),_c("div",{staticClass:"table-responsive"},[_c("table",{staticClass:"table table-borderless"},[_c("thead",[_c("tr",{staticClass:"text-center",staticStyle:{"vertical-align":"center"}},[_c("th",[_vm._v("Lignes")]),_vm._v(" "),_c("th",[_vm._v("Statut")]),_vm._v(" "),_c("th",[_vm._v("Montant (demandé)")]),_vm._v(" "),_c("th",[_vm._v("Proposition (autorisation)")]),_vm._v(" "),_c("th",[_c("span",[_vm._v("Encours au")]),_vm._v(" "),_c("date-input",{staticStyle:{"min-width":"250px"},attrs:{value:_vm.f8Manager.data.encours_au,id:"encours_au",background:"background: #00ffff21",color:"color: #000"},on:{input:_vm.formDataVars}})],1),_vm._v(" "),_c("th",[_vm._v("Durée (mois)")]),_vm._v(" "),_c("th",[_vm._v("Echeance")]),_vm._v(" "),_c("th",[_vm._v("Taux")]),_vm._v(" "),_c("th"),_vm._v(" "),_c("th",[_vm._v("Suretés")])])]),_vm._v(" "),_c("tbody",[_vm._l(_vm.f8Manager.data.nouvelles_lignes_signature,function(nv_ligne_sign,i){return _c("tr",{key:i+"lg_ext"},[_c("td",[nv_ligne_sign!==null&&nv_ligne_sign!==void 0&&nv_ligne_sign.from?[nv_ligne_sign.ligne_mixte=="Mixte"?_c("div",{staticClass:"d-flex"},[_c("select",{directives:[{name:"model",rawName:"v-model",value:nv_ligne_sign.ligne,expression:"nv_ligne_sign.ligne"}],staticClass:"form-select",attrs:{title:nv_ligne_sign.ligne,disabled:""},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(nv_ligne_sign,"ligne",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",{domProps:{value:nv_ligne_sign.ligne}},[_vm._v("\n                                                    "+_vm._s(nv_ligne_sign.ligne_mixte)+" - "+_vm._s(_vm.getMixteIndex("nouvelles_lignes_signature",i))+"\n                                                ")])]),_vm._v(" "),_c("div",{staticStyle:{"margin-left":"0.5rem !important"}},[_c("input",{staticClass:"form-control",staticStyle:{width:"150px",border:"1px solid #ccc","border-radius":"6px"},attrs:{type:"text",disabled:""},domProps:{value:nv_ligne_sign.ligne}})])]):_c("div",[nv_ligne_sign.ligne==""?_c("select",{directives:[{name:"model",rawName:"v-model",value:nv_ligne_sign.ligne,expression:"nv_ligne_sign.ligne"}],staticClass:"form-select",attrs:{disabled:!["",null,undefined].includes(nv_ligne_sign.from)},on:{change:[function($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(nv_ligne_sign,"ligne",$event.target.multiple?$$selectedVal:$$selectedVal[0]);},function($event){null;}]}},[_c("option",{domProps:{value:""}}),_vm._v(" "),_vm._l(_vm.f8Constants.lignes_engagements_signatures,function(line,indexL){return _c("option",{key:indexL+"4z_1",domProps:{value:line.libelle}},[_vm._v(_vm._s(line.libelle))]);})],2):_c("select",{directives:[{name:"model",rawName:"v-model",value:nv_ligne_sign.ligne,expression:"nv_ligne_sign.ligne"}],staticClass:"form-select",attrs:{disabled:!["",null,undefined].includes(nv_ligne_sign.from)},on:{change:[function($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(nv_ligne_sign,"ligne",$event.target.multiple?$$selectedVal:$$selectedVal[0]);},function($event){null;}]}},[_c("option",{domProps:{value:""}}),_vm._v(" "),_vm._l(_vm.f8Constants.lignes_engagements_signatures,function(line,indexL){return _c("option",{key:indexL+"4z_1",domProps:{value:line.libelle}},[_vm._v(_vm._s(line.libelle))]);})],2)])]:[nv_ligne_sign.ligne_mixte=="Mixte"?_c("div",{staticClass:"d-flex"},[_c("select",{directives:[{name:"model",rawName:"v-model",value:nv_ligne_sign.ligne_mixte,expression:"nv_ligne_sign.ligne_mixte"}],staticClass:"form-select","class":{"already-exist":(nv_ligne_sign===null||nv_ligne_sign===void 0?void 0:nv_ligne_sign.tb)=="tb8"},staticStyle:{"min-width":"250px"},on:{change:[function($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(nv_ligne_sign,"ligne_mixte",$event.target.multiple?$$selectedVal:$$selectedVal[0]);},function($event){return _vm.f8Manager.addVarMixte(["nouvelles_lignes_signature",i]);}]}},[_c("option",{domProps:{value:""}}),_vm._v(" "),_vm._l(_vm.f8Constants.lignes_engagements_signatures,function(line,indexL){return _c("option",{key:indexL+"4z_1",domProps:{value:line.libelle}},[_vm._v(_vm._s(line.libelle))]);}),_vm._v(" "),_c("optgroup",{attrs:{label:"--------------------------------"}}),_vm._v(" "),_c("option",{attrs:{value:"Mixte"}},[_vm._v("Mixte")])],2),_vm._v(" "),_c("div",{staticStyle:{"margin-left":"0.5rem!important"}},[_c("vue-tags-input",{"class":{"already-exist":(nv_ligne_sign===null||nv_ligne_sign===void 0?void 0:nv_ligne_sign.tb)=="tb8"},staticStyle:{width:"250px",border:"1px solid #ccc","border-radius":"6px"},attrs:{"autocomplete-items":_vm.f8Constants.ligneAutoComplete("lignes_engagements_signatures"),tags:nv_ligne_sign.tags,placeholder:"Selectionner les lignes"},on:{"tags-changed":function tagsChanged($event){return _vm.f8Manager.handleTag($event,["nouvelles_lignes_signature",i],_vm.f8Constants.lignes_engagements_signatures,null,null);},"adding-duplicate":function addingDuplicate(){}},model:{value:nv_ligne_sign.tag,callback:function callback($$v){_vm.$set(nv_ligne_sign,"tag",$$v);},expression:"nv_ligne_sign.tag"}})],1)]):_c("select",{directives:[{name:"model",rawName:"v-model",value:nv_ligne_sign.ligne,expression:"nv_ligne_sign.ligne"}],staticClass:"form-select","class":{"already-exist":(nv_ligne_sign===null||nv_ligne_sign===void 0?void 0:nv_ligne_sign.tb)=="tb8"},staticStyle:{"min-width":"250px"},on:{change:[function($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(nv_ligne_sign,"ligne",$event.target.multiple?$$selectedVal:$$selectedVal[0]);},function($event){return _vm.f8Manager.addVarMixte(["nouvelles_lignes_signature",i]);}]}},[_c("option",{domProps:{value:""}}),_vm._v(" "),_vm._l(_vm.f8Constants.lignes_engagements_signatures,function(line,indexL){return _c("option",{key:indexL+"4z_1",domProps:{value:line.libelle}},[_vm._v(_vm._s(line.libelle))]);}),_vm._v(" "),_c("optgroup",{attrs:{label:"--------------------------------"}}),_vm._v(" "),_c("option",{attrs:{value:"Mixte"}},[_vm._v("Mixte")])],2)]],2),_vm._v(" "),_c("td",[_c("select",{directives:[{name:"model",rawName:"v-model",value:nv_ligne_sign.statut,expression:"nv_ligne_sign.statut"}],staticClass:"form-select","class":{"already-exist":nv_ligne_sign.from||(nv_ligne_sign===null||nv_ligne_sign===void 0?void 0:nv_ligne_sign.tb)=="tb8"},staticStyle:{"min-width":"250px"},attrs:{title:nv_ligne_sign.statut},on:{change:[function($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(nv_ligne_sign,"statut",$event.target.multiple?$$selectedVal:$$selectedVal[0]);},function($event){return _vm.f8Manager.computedTypeStatus("lignes_existantes_engagements_signatures",nv_ligne_sign,i,"nouvelles_lignes_signature");}]}},[nv_ligne_sign!==null&&nv_ligne_sign!==void 0&&nv_ligne_sign.from?[_c("option",{domProps:{value:"Renouvellement"}},[_vm._v("Renouvellement")]),_vm._v(" "),_c("option",{domProps:{value:"Abandon"}},[_vm._v("Abandon")])]:[_c("option",{domProps:{value:"Nouveau"}},[_vm._v("Nouveau")])]],2)]),_vm._v(" "),_c("td",[_c("currency-input2",{"class":{"already-exist":(nv_ligne_sign===null||nv_ligne_sign===void 0?void 0:nv_ligne_sign.tb)=="tb8"},staticStyle:{"min-width":"250px"},attrs:{disabled:!["",null,undefined].includes(nv_ligne_sign.from),"default-typing":false},on:{change:function change($event){return _vm.f8Manager.computedTypeStatus("lignes_existantes_engagements_signatures",nv_ligne_sign,i,"nouvelles_lignes_signature");}},model:{value:nv_ligne_sign.montant,callback:function callback($$v){_vm.$set(nv_ligne_sign,"montant",$$v);},expression:"nv_ligne_sign.montant"}})],1),_vm._v(" "),_c("td",[_c("currency-input2",{"class":{"already-exist":nv_ligne_sign.from||(nv_ligne_sign===null||nv_ligne_sign===void 0?void 0:nv_ligne_sign.tb)=="tb8"},staticStyle:{"min-width":"250px"},attrs:{"default-typing":false},on:{change:function change($event){return _vm.f8Manager.computedTypeStatus("lignes_existantes_engagements_signatures",nv_ligne_sign,i,"nouvelles_lignes_signature");}},model:{value:nv_ligne_sign.proposition,callback:function callback($$v){_vm.$set(nv_ligne_sign,"proposition",$$v);},expression:"nv_ligne_sign.proposition"}})],1),_vm._v(" "),_c("td",[_c("currency-input2",{"class":{"already-exist":nv_ligne_sign.from||(nv_ligne_sign===null||nv_ligne_sign===void 0?void 0:nv_ligne_sign.tb)=="tb8"},staticStyle:{"min-width":"250px"},attrs:{"default-typing":false},on:{change:function change($event){null;}},model:{value:nv_ligne_sign.encours,callback:function callback($$v){_vm.$set(nv_ligne_sign,"encours",$$v);},expression:"nv_ligne_sign.encours"}})],1),_vm._v(" "),_c("td",[_c("input",{directives:[{name:"model",rawName:"v-model",value:nv_ligne_sign.duree,expression:"nv_ligne_sign.duree"}],staticClass:"form-control","class":{"already-exist":nv_ligne_sign.from||(nv_ligne_sign===null||nv_ligne_sign===void 0?void 0:nv_ligne_sign.tb)=="tb8"},staticStyle:{width:"80px"},attrs:{type:"number"},domProps:{value:nv_ligne_sign.duree},on:{change:function change($event){null;},input:function input($event){if($event.target.composing)return;_vm.$set(nv_ligne_sign,"duree",$event.target.value);}}})]),_vm._v(" "),_c("td",[_c("div",{staticStyle:{width:"280px"}},[_c("date-input",{attrs:{classname:nv_ligne_sign.from||(nv_ligne_sign===null||nv_ligne_sign===void 0?void 0:nv_ligne_sign.tb)=="tb8"?"already-exist":"",value:nv_ligne_sign.echeance},on:{input:function input($event){return _vm.formDataVars2($event,i,"nouvelles_lignes_signature","echeance");}}})],1)]),_vm._v(" "),_c("td",[_c("input",{directives:[{name:"model",rawName:"v-model",value:nv_ligne_sign.taux,expression:"nv_ligne_sign.taux"}],staticClass:"form-control","class":{"already-exist":nv_ligne_sign.from||(nv_ligne_sign===null||nv_ligne_sign===void 0?void 0:nv_ligne_sign.tb)=="tb8"},staticStyle:{width:"60px"},attrs:{type:"number"},domProps:{value:nv_ligne_sign.taux},on:{change:function change($event){null;},input:function input($event){if($event.target.composing)return;_vm.$set(nv_ligne_sign,"taux",$event.target.value);}}})]),_vm._v(" "),_c("td",[_c("input",{directives:[{name:"model",rawName:"v-model",value:nv_ligne_sign.type,expression:"nv_ligne_sign.type"}],staticClass:"form-control","class":{"already-exist":nv_ligne_sign.from||(nv_ligne_sign===null||nv_ligne_sign===void 0?void 0:nv_ligne_sign.tb)=="tb8"},staticStyle:{width:"60px"},attrs:{disabled:"",title:nv_ligne_sign.type=="RI"?"Renouvellement identique":nv_ligne_sign.type=="RH"?"Renouvellement à la hausse":nv_ligne_sign.type=="RB"?"Renouvellement à la baisse":nv_ligne_sign.type=="AB"?"Abandon":""},domProps:{value:nv_ligne_sign.type},on:{change:function change($event){null;},input:function input($event){if($event.target.composing)return;_vm.$set(nv_ligne_sign,"type",$event.target.value);}}})]),_vm._v(" "),_c("td",[nv_ligne_sign.from?_c("button",{staticStyle:{color:"#ffffff","border-radius":"15%",border:"none"},style:nv_ligne_sign.type=="AB"?{"background-color":"#e9ecef",color:"#000",border:"#000"}:_vm.f8Manager.lineHasSuretes(nv_ligne_sign),attrs:{disabled:(nv_ligne_sign===null||nv_ligne_sign===void 0?void 0:nv_ligne_sign.type)=="AB",type:"button",title:"Chager les suretés de la ligne existante correspondante"},on:{click:function click($event){return _vm.openModal("hypoModal",nv_ligne_sign,true);}}},[_c("i",{staticClass:"icofont-download",attrs:{size:"21"}})]):_c("button",{staticStyle:{color:"#ffffff","border-radius":"15%",border:"none"},style:_vm.f8Manager.lineHasSuretes(nv_ligne_sign),attrs:{type:"button",title:"Ajouter des suretés à cette ligne"},on:{click:function click($event){return _vm.openModal("hypoModal",nv_ligne_sign);}}},[_c("i",{staticClass:"icofont-list",attrs:{size:"21"}})])]),_vm._v(" "),_c("td",[_c("button",{staticStyle:{"background-color":"#2c3e50","border-radius":"15%",color:"#ffffff",border:"none"},style:!["",null,undefined].includes(nv_ligne_sign.from)?{"background-color":"#e9ecef"}:"",attrs:{disabled:!["",null,undefined].includes(nv_ligne_sign.from),type:"button",title:"Effacer le contenu de ligne"},on:{click:function click($event){return _vm.f8Manager.cleanLine("nouvelles_lignes_signature",nv_ligne_sign.id);}}},[_c("i",{staticClass:"icofont-dropbox"})])]),_vm._v(" "),_c("td",[i===0?[_c("button",{staticStyle:{"background-color":"#2c3e50",color:"#ffffff","border-radius":"15%",border:"none"},attrs:{type:"button",title:"Ajouter une nouvelle ligne"},on:{click:function click($event){return _vm.f8Manager.addLine("nouvelles_lignes_signature");}}},[_c("plus-icon",{staticClass:"custom-class",attrs:{size:"21"}})],1)]:[!nv_ligne_sign.from?_c("button",{staticStyle:{"background-color":"transparent",border:"none"},attrs:{type:"button",title:"Supprimer cette action"},on:{click:function click($event){return _vm.f8Manager.removeLine("nouvelles_lignes_signature",nv_ligne_sign.id);}}},[_c("trash-icon",{staticClass:"custom-class",attrs:{size:"21"}})],1):_vm._e()]],2)]);}),_vm._v(" "),_c("tr",[_vm._m(4),_vm._v(" "),_c("td",[_c("currency-input2",{staticClass:"form-control",staticStyle:{"min-width":"250px"},attrs:{"default-typing":false,readonly:""},model:{value:_vm.f8Manager.data.st_signature_nouvelles_lignes_montant,callback:function callback($$v){_vm.$set(_vm.f8Manager.data,"st_signature_nouvelles_lignes_montant",$$v);},expression:"f8Manager.data.st_signature_nouvelles_lignes_montant"}})],1),_vm._v(" "),_c("td",[_c("currency-input2",{staticClass:"form-control",staticStyle:{"min-width":"250px"},attrs:{"default-typing":false,readonly:""},model:{value:_vm.f8Manager.data.st_signature_nouvelles_lignes_proposition,callback:function callback($$v){_vm.$set(_vm.f8Manager.data,"st_signature_nouvelles_lignes_proposition",$$v);},expression:"f8Manager.data.st_signature_nouvelles_lignes_proposition"}})],1)]),_vm._v(" "),_c("tr",[_vm._m(5),_vm._v(" "),_c("td",[_c("currency-input2",{staticClass:"form-control",staticStyle:{background:"#34495e",color:"#fff","min-width":"250px"},attrs:{"default-typing":false,readonly:""},model:{value:_vm.f8Manager.data.total_nouvelles_lignes_montant,callback:function callback($$v){_vm.$set(_vm.f8Manager.data,"total_nouvelles_lignes_montant",$$v);},expression:"f8Manager.data.total_nouvelles_lignes_montant"}})],1),_vm._v(" "),_c("td",[_c("currency-input2",{staticClass:"form-control",staticStyle:{background:"#34495e",color:"#fff","min-width":"250px"},attrs:{"default-typing":false,readonly:""},model:{value:_vm.f8Manager.data.total_nouvelles_lignes_proposition,callback:function callback($$v){_vm.$set(_vm.f8Manager.data,"total_nouvelles_lignes_proposition",$$v);},expression:"f8Manager.data.total_nouvelles_lignes_proposition"}})],1)])],2)])])]),_vm._v(" "),_c("div",{staticClass:"card-body"},[_c("vue-editor",{attrs:{id:"commentaire_nouvelles_lignes"},on:{"update-value":function updateValue($event){_vm.f8Manager.data[$event[0]]=$event[1];}},model:{value:_vm.f8Manager.data.commentaire_nouvelles_lignes,callback:function callback($$v){_vm.$set(_vm.f8Manager.data,"commentaire_nouvelles_lignes",$$v);},expression:"f8Manager.data.commentaire_nouvelles_lignes"}})],1)]):_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"relook-header mb-5",on:{click:function click($event){_vm.seen4=!_vm.seen4;}}},[_c("h6",{attrs:{id:"nouvelles-lignes"}},[_vm._v("\n                        B2 Nouvelles lignes (objet de la présente demande)\n                        "),_c("chevron-down-icon",{staticClass:"custom-class",staticStyle:{"float":"right",cursor:"pointer"},attrs:{size:"21"}})],1)])]),_vm._v(" "),(_vm.seen5=_vm.seen5)?_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"relook-header",on:{click:function click($event){_vm.seen5=!_vm.seen5;}}},[_c("h6",{"class":" subdiv"+this.tb_name,attrs:{id:"situation-après-accord"}},[_vm._v("\n                        B3 Situation après accord\n                        "),_c("chevron-up-icon",{staticClass:"custom-class",staticStyle:{"float":"right",cursor:"pointer"},attrs:{size:"21"}})],1)]),_vm._v(" "),_c("br"),_vm._v(" "),_c("div",{staticClass:"table-responsive mt-4"},[_c("div",{staticClass:"table-responsive"},[_c("table",{staticClass:"table table-borderless"},[_c("thead",[_c("tr",{staticClass:"text-center",staticStyle:{"vertical-align":"center"}},[_c("th",[_vm._v("Banque")]),_vm._v(" "),_c("th",[_vm._v("Lignes")]),_vm._v(" "),_c("th",[_vm._v("Statut")]),_vm._v(" "),_c("th",[_vm._v("Montant")]),_vm._v(" "),_c("th",[_vm._v("Proposition (autorisation)")]),_vm._v(" "),_c("th",[_c("span",[_vm._v("Encours au")]),_vm._v(" "),_c("date-input",{staticStyle:{"min-width":"250px"},attrs:{value:_vm.f8Manager.data.encours_au,id:"encours_au",background:"background: #00ffff21",color:"color: #000"},on:{input:_vm.formDataVars}})],1),_vm._v(" "),_c("th",[_vm._v("Durée (mois)")]),_vm._v(" "),_c("th",[_vm._v("Ech/Durée tirage")]),_vm._v(" "),_c("th",[_vm._v("Taux")]),_vm._v(" "),_c("th"),_vm._v(" "),_c("th",[_vm._v("Suretés")])])]),_vm._v(" "),_c("tbody",[_vm._l(_vm.f8Manager.data.nouvelles_lignes_caisse,function(nv_ligne_caisse,idx_){return _c("tr",{key:idx_+"nv_lg_1"},[_c("td",[_c("input",{directives:[{name:"model",rawName:"v-model",value:nv_ligne_caisse.banque,expression:"nv_ligne_caisse.banque"}],staticClass:"form-control",staticStyle:{background:"#e9ecef",color:"#000","min-width":"250px"},attrs:{type:"text",readonly:""},domProps:{value:nv_ligne_caisse.banque},on:{input:function input($event){if($event.target.composing)return;_vm.$set(nv_ligne_caisse,"banque",$event.target.value);}}})]),_vm._v(" "),_c("td",[nv_ligne_caisse!==null&&nv_ligne_caisse!==void 0&&nv_ligne_caisse.from?[nv_ligne_caisse.ligne_mixte=="Mixte"?_c("select",{directives:[{name:"model",rawName:"v-model",value:nv_ligne_caisse.ligne,expression:"nv_ligne_caisse.ligne"}],staticClass:"form-select","class":{"already-exist":(nv_ligne_caisse===null||nv_ligne_caisse===void 0?void 0:nv_ligne_caisse.tb)=="tb8"},staticStyle:{"min-width":"250px"},attrs:{title:nv_ligne_caisse.ligne,disabled:""},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(nv_ligne_caisse,"ligne",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",{domProps:{value:nv_ligne_caisse.ligne}},[_vm._v(_vm._s(nv_ligne_caisse.ligne))])]):_c("div",[nv_ligne_caisse.ligne==""?_c("select",{directives:[{name:"model",rawName:"v-model",value:nv_ligne_caisse.ligne,expression:"nv_ligne_caisse.ligne"}],staticClass:"form-select","class":{"already-exist":(nv_ligne_caisse===null||nv_ligne_caisse===void 0?void 0:nv_ligne_caisse.tb)=="tb8"},staticStyle:{"min-width":"250px"},attrs:{disabled:!["",null,undefined].includes(nv_ligne_caisse.from)},on:{change:[function($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(nv_ligne_caisse,"ligne",$event.target.multiple?$$selectedVal:$$selectedVal[0]);},function($event){null;}]}},[_c("option",{domProps:{value:""}}),_vm._v(" "),_vm._l(_vm.f8Constants.tous_les_lignes_filtres,function(line,indexL){return _c("option",{key:indexL+"4z_1",domProps:{value:line.libelle}},[_vm._v(_vm._s(line.libelle))]);})],2):_c("select",{directives:[{name:"model",rawName:"v-model",value:nv_ligne_caisse.ligne,expression:"nv_ligne_caisse.ligne"}],staticClass:"form-select","class":{"already-exist":(nv_ligne_caisse===null||nv_ligne_caisse===void 0?void 0:nv_ligne_caisse.tb)=="tb8"},staticStyle:{"min-width":"250px"},attrs:{disabled:!["",null,undefined].includes(nv_ligne_caisse.from)},on:{change:[function($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(nv_ligne_caisse,"ligne",$event.target.multiple?$$selectedVal:$$selectedVal[0]);},function($event){null;}]}},[_c("option",{domProps:{value:""}}),_vm._v(" "),_vm._l(_vm.f8Constants.tous_les_lignes,function(line,indexL){return _c("option",{key:indexL+"4z_1",domProps:{value:line.libelle}},[_vm._v(_vm._s(line.libelle))]);})],2)])]:[nv_ligne_caisse.ligne_mixte=="Mixte"?_c("div",{staticClass:"d-flex"},[_c("select",{directives:[{name:"model",rawName:"v-model",value:nv_ligne_caisse.ligne_mixte,expression:"nv_ligne_caisse.ligne_mixte"}],staticClass:"form-select","class":{"already-exist":(nv_ligne_caisse===null||nv_ligne_caisse===void 0?void 0:nv_ligne_caisse.tb)=="tb8"},staticStyle:{"min-width":"250px"},on:{change:[function($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(nv_ligne_caisse,"ligne_mixte",$event.target.multiple?$$selectedVal:$$selectedVal[0]);},function($event){return _vm.f8Manager.addVarMixte(["nouvelles_lignes_caisse",idx_]);}]}},[_c("option",{domProps:{value:""}}),_vm._v(" "),_vm._l(_vm.f8Constants.tous_les_lignes_filtres,function(line,indexL){return _c("option",{key:indexL+"4z_1",domProps:{value:line.libelle}},[_vm._v(_vm._s(line.libelle))]);}),_vm._v(" "),_c("optgroup",{attrs:{label:"--------------------------------"}}),_vm._v(" "),_c("option",{attrs:{value:"Mixte"}},[_vm._v("Mixte")])],2),_vm._v(" "),_c("div",{staticStyle:{"margin-left":"0.5rem!important"}},[_c("vue-tags-input",{"class":{"already-exist":(nv_ligne_caisse===null||nv_ligne_caisse===void 0?void 0:nv_ligne_caisse.tb)=="tb8"},staticStyle:{width:"250px",border:"1px solid #ccc","border-radius":"6px"},attrs:{"autocomplete-items":_vm.f8Constants.ligneAutoComplete("tous_les_lignes_filtres"),tags:nv_ligne_caisse.tags,placeholder:"Selectionner les lignes"},on:{"tags-changed":function tagsChanged($event){return _vm.f8Manager.handleTag($event,["nouvelles_lignes_caisse",idx_],_vm.f8Constants.tous_les_lignes_filtres,null,null);},"adding-duplicate":function addingDuplicate(){}},model:{value:nv_ligne_caisse.tag,callback:function callback($$v){_vm.$set(nv_ligne_caisse,"tag",$$v);},expression:"nv_ligne_caisse.tag"}})],1)]):_c("select",{directives:[{name:"model",rawName:"v-model",value:nv_ligne_caisse.ligne,expression:"nv_ligne_caisse.ligne"}],staticClass:"form-select","class":{"already-exist":(nv_ligne_caisse===null||nv_ligne_caisse===void 0?void 0:nv_ligne_caisse.tb)=="tb8"},staticStyle:{"min-width":"250px"},on:{change:[function($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(nv_ligne_caisse,"ligne",$event.target.multiple?$$selectedVal:$$selectedVal[0]);},function($event){return _vm.f8Manager.addVarMixte(["nouvelles_lignes_caisse",idx_]);}]}},[_c("option",{domProps:{value:""}}),_vm._v(" "),_vm._l(_vm.f8Constants.tous_les_lignes_filtres,function(line,indexL){return _c("option",{key:indexL+"4z_1",domProps:{value:line.libelle}},[_vm._v(_vm._s(line.libelle))]);}),_vm._v(" "),_c("optgroup",{attrs:{label:"--------------------------------"}}),_vm._v(" "),_c("option",{attrs:{value:"Mixte"}},[_vm._v("Mixte")])],2)]],2),_vm._v(" "),_c("td",[_c("select",{directives:[{name:"model",rawName:"v-model",value:nv_ligne_caisse.statut,expression:"nv_ligne_caisse.statut"}],staticClass:"form-select","class":_defineProperty({"already-exist":nv_ligne_caisse===null||nv_ligne_caisse===void 0?void 0:nv_ligne_caisse.from},"already-exist",(nv_ligne_caisse===null||nv_ligne_caisse===void 0?void 0:nv_ligne_caisse.tb)=="tb8"),staticStyle:{"min-width":"250px"},attrs:{title:nv_ligne_caisse.statut},on:{change:[function($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(nv_ligne_caisse,"statut",$event.target.multiple?$$selectedVal:$$selectedVal[0]);},function($event){return _vm.f8Manager.computedTypeStatus("lignes_existantes",nv_ligne_caisse,idx_,"nouvelles_lignes_caisse");}]}},[nv_ligne_caisse!==null&&nv_ligne_caisse!==void 0&&nv_ligne_caisse.from?[_c("option",{domProps:{value:"Renouvellement"}},[_vm._v("Renouvellement")]),_vm._v(" "),_c("option",{domProps:{value:"Abandon"}},[_vm._v("Abandon")])]:[_c("option",{domProps:{value:"Nouveau"}},[_vm._v("Nouveau")])]],2)]),_vm._v(" "),_c("td",[_c("currency-input2",{"class":{"already-exist":(nv_ligne_caisse===null||nv_ligne_caisse===void 0?void 0:nv_ligne_caisse.from)||(nv_ligne_caisse===null||nv_ligne_caisse===void 0?void 0:nv_ligne_caisse.tb)=="tb8"},staticStyle:{"min-width":"250px"},attrs:{disabled:!["",null,undefined].includes(nv_ligne_caisse.from),"default-typing":false},on:{change:function change($event){return _vm.f8Manager.computedTypeStatus("lignes_existantes",nv_ligne_caisse,idx_,"nouvelles_lignes_caisse");}},model:{value:nv_ligne_caisse.montant,callback:function callback($$v){_vm.$set(nv_ligne_caisse,"montant",$$v);},expression:"nv_ligne_caisse.montant"}})],1),_vm._v(" "),_c("td",[_c("currency-input2",{"class":{"already-exist":(nv_ligne_caisse===null||nv_ligne_caisse===void 0?void 0:nv_ligne_caisse.from)||(nv_ligne_caisse===null||nv_ligne_caisse===void 0?void 0:nv_ligne_caisse.tb)=="tb8"},staticStyle:{"min-width":"250px"},attrs:{"default-typing":false},on:{change:function change($event){return _vm.f8Manager.computedTypeStatus("lignes_existantes",nv_ligne_caisse,idx_,"nouvelles_lignes_caisse");}},model:{value:nv_ligne_caisse.proposition,callback:function callback($$v){_vm.$set(nv_ligne_caisse,"proposition",$$v);},expression:"nv_ligne_caisse.proposition"}})],1),_vm._v(" "),_c("td",[_c("currency-input2",{"class":{"already-exist":(nv_ligne_caisse===null||nv_ligne_caisse===void 0?void 0:nv_ligne_caisse.from)||(nv_ligne_caisse===null||nv_ligne_caisse===void 0?void 0:nv_ligne_caisse.tb)=="tb8"},staticStyle:{"min-width":"250px"},attrs:{"default-typing":false},on:{change:function change($event){return _vm.f8Manager.computedTypeStatus("lignes_existantes",nv_ligne_caisse,idx_,"nouvelles_lignes_caisse");}},model:{value:nv_ligne_caisse.encours,callback:function callback($$v){_vm.$set(nv_ligne_caisse,"encours",$$v);},expression:"nv_ligne_caisse.encours"}})],1),_vm._v(" "),_c("td",[_c("input",{directives:[{name:"model",rawName:"v-model",value:nv_ligne_caisse.duree,expression:"nv_ligne_caisse.duree"}],staticClass:"form-control","class":{"already-exist":(nv_ligne_caisse===null||nv_ligne_caisse===void 0?void 0:nv_ligne_caisse.from)||(nv_ligne_caisse===null||nv_ligne_caisse===void 0?void 0:nv_ligne_caisse.tb)=="tb8"},staticStyle:{width:"80px"},attrs:{type:"number"},domProps:{value:nv_ligne_caisse.duree},on:{change:function change($event){return _vm.f8Manager.computedTypeStatus("lignes_existantes",nv_ligne_caisse,idx_,"nouvelles_lignes_caisse");},input:function input($event){if($event.target.composing)return;_vm.$set(nv_ligne_caisse,"duree",$event.target.value);}}})]),_vm._v(" "),_c("td",[_c("div",{staticStyle:{width:"280px"}},[_c("date-input",{attrs:{classname:nv_ligne_caisse!==null&&nv_ligne_caisse!==void 0&&nv_ligne_caisse.from||(nv_ligne_caisse===null||nv_ligne_caisse===void 0?void 0:nv_ligne_caisse.tb)=="tb8"?"already-exist":"",value:nv_ligne_caisse.echeance},on:{input:function input($event){return _vm.formDataVars2($event,idx_,"nouvelles_lignes_caisse","echeance");}}})],1)]),_vm._v(" "),_c("td",[_c("input",{directives:[{name:"model",rawName:"v-model",value:nv_ligne_caisse.taux,expression:"nv_ligne_caisse.taux"}],staticClass:"form-control","class":{"already-exist":(nv_ligne_caisse===null||nv_ligne_caisse===void 0?void 0:nv_ligne_caisse.from)||(nv_ligne_caisse===null||nv_ligne_caisse===void 0?void 0:nv_ligne_caisse.tb)=="tb8"},staticStyle:{width:"60px"},attrs:{type:"number"},domProps:{value:nv_ligne_caisse.taux},on:{change:function change($event){null;},input:function input($event){if($event.target.composing)return;_vm.$set(nv_ligne_caisse,"taux",$event.target.value);}}})]),_vm._v(" "),_c("td",[_c("input",{directives:[{name:"model",rawName:"v-model",value:nv_ligne_caisse.type,expression:"nv_ligne_caisse.type"}],staticClass:"form-control","class":{"already-exist":(nv_ligne_caisse===null||nv_ligne_caisse===void 0?void 0:nv_ligne_caisse.from)||(nv_ligne_caisse===null||nv_ligne_caisse===void 0?void 0:nv_ligne_caisse.tb)=="tb8"},staticStyle:{width:"60px"},attrs:{disabled:"",title:nv_ligne_caisse.type=="RI"?"Renouvellement identique":nv_ligne_caisse.type=="RH"?"Renouvellement à la hausse":nv_ligne_caisse.type=="RB"?"Renouvellement à la baisse":nv_ligne_caisse.type=="AB"?"Abandon":""},domProps:{value:nv_ligne_caisse.type},on:{input:function input($event){if($event.target.composing)return;_vm.$set(nv_ligne_caisse,"type",$event.target.value);}}})]),_vm._v(" "),_c("td",[nv_ligne_caisse.from?_c("button",{staticStyle:{color:"#ffffff","border-radius":"15%",border:"none"},style:_vm.f8Manager.lineHasSuretes(nv_ligne_caisse),attrs:{type:"button",title:"Chager les suretés de la ligne existante correspondante"},on:{click:function click($event){return _vm.openModal("hypoModal",nv_ligne_caisse,true);}}},[_c("i",{staticClass:"icofont-download",attrs:{size:"21"}})]):_c("button",{staticStyle:{color:"#ffffff","border-radius":"15%",border:"none"},style:_vm.f8Manager.lineHasSuretes(nv_ligne_caisse),attrs:{type:"button",title:"Ajouter des suretés à cette ligne"},on:{click:function click($event){return _vm.openModal("hypoModal",nv_ligne_caisse);}}},[_c("i",{staticClass:"icofont-list",attrs:{size:"21"}})])]),_vm._v(" "),_c("td",[_c("button",{staticStyle:{"background-color":"#2c3e50","border-radius":"15%",color:"#ffffff",border:"none"},style:!["",null,undefined].includes(nv_ligne_caisse.from)?{"background-color":"#e9ecef"}:"",attrs:{disabled:!["",null,undefined].includes(nv_ligne_caisse.from),type:"button",title:"Effacer le contenu de ligne"},on:{click:function click($event){return _vm.f8Manager.cleanLine("nouvelles_lignes_caisse",nv_ligne_caisse.id);}}},[_c("i",{staticClass:"icofont-dropbox"})])]),_vm._v(" "),_c("td",[idx_===0?[_c("button",{staticStyle:{"background-color":"#2c3e50",color:"#ffffff","border-radius":"15%",border:"none"},attrs:{type:"button",title:"Ajouter un nouvel article"},on:{click:function click($event){return _vm.f8Manager.addLine("nouvelles_lignes_caisse");}}},[_c("plus-icon",{staticClass:"custom-class",attrs:{size:"21"}})],1)]:[!nv_ligne_caisse.from?_c("button",{staticStyle:{"background-color":"transparent",border:"none"},attrs:{type:"button",title:"Supprimer cette action"},on:{click:function click($event){return _vm.f8Manager.removeLine("nouvelles_lignes_caisse",nv_ligne_caisse.id);}}},[_c("trash-icon",{staticClass:"custom-class",attrs:{size:"21"}})],1):_vm._e()]],2)]);}),_vm._v(" "),_c("tr",[_vm._m(6),_vm._v(" "),_c("td",[_c("currency-input2",{staticClass:"form-control",staticStyle:{"min-width":"250px"},attrs:{"default-typing":false,readonly:""},model:{value:_vm.f8Manager.data.st_caisse_nouvelles_lignes_montant,callback:function callback($$v){_vm.$set(_vm.f8Manager.data,"st_caisse_nouvelles_lignes_montant",$$v);},expression:"f8Manager.data.st_caisse_nouvelles_lignes_montant"}})],1),_vm._v(" "),_c("td",[_c("currency-input2",{staticClass:"form-control",staticStyle:{"min-width":"250px"},attrs:{"default-typing":false,readonly:""},model:{value:_vm.f8Manager.data.st_caisse_nouvelles_lignes_proposition,callback:function callback($$v){_vm.$set(_vm.f8Manager.data,"st_caisse_nouvelles_lignes_proposition",$$v);},expression:"f8Manager.data.st_caisse_nouvelles_lignes_proposition"}})],1)])],2)])]),_vm._v(" "),_c("br"),_vm._v(" "),_c("b",[_vm._v("Engagement signature")]),_vm._v(" "),_c("div",{staticClass:"table-responsive"},[_c("table",{staticClass:"table table-borderless"},[_c("thead",[_c("tr",{staticClass:"text-center",staticStyle:{"vertical-align":"center"}},[_c("th",[_vm._v("Banque")]),_vm._v(" "),_c("th",[_vm._v("Lignes")]),_vm._v(" "),_c("th",[_vm._v("Statut")]),_vm._v(" "),_c("th",[_vm._v("Montant (demandé)")]),_vm._v(" "),_c("th",[_vm._v("Proposition (autorisation)")]),_vm._v(" "),_c("th",[_c("span",[_vm._v("Encours au")]),_vm._v(" "),_c("date-input",{staticStyle:{"min-width":"250px"},attrs:{value:_vm.f8Manager.data.encours_au,id:"encours_au",background:"background: #00ffff21",color:"color: #000"},on:{input:_vm.formDataVars}})],1),_vm._v(" "),_c("th",[_vm._v("Durée (mois)")]),_vm._v(" "),_c("th",[_vm._v("Echeance")]),_vm._v(" "),_c("th",[_vm._v("Taux")]),_vm._v(" "),_c("th"),_vm._v(" "),_c("th",[_vm._v("Suretés")])])]),_vm._v(" "),_c("tbody",[_vm._l(_vm.f8Manager.data.nouvelles_lignes_signature,function(nv_ligne_sign,i){return _c("tr",{key:i+"lg_ext"},[_c("td",[_c("input",{directives:[{name:"model",rawName:"v-model",value:nv_ligne_sign.banque,expression:"nv_ligne_sign.banque"}],staticClass:"form-control",staticStyle:{"min-width":"250px"},attrs:{type:"text",readonly:""},domProps:{value:nv_ligne_sign.banque},on:{input:function input($event){if($event.target.composing)return;_vm.$set(nv_ligne_sign,"banque",$event.target.value);}}})]),_vm._v(" "),_c("td",[nv_ligne_sign!==null&&nv_ligne_sign!==void 0&&nv_ligne_sign.from?[nv_ligne_sign.ligne_mixte=="Mixte"?_c("select",{directives:[{name:"model",rawName:"v-model",value:nv_ligne_sign.ligne,expression:"nv_ligne_sign.ligne"}],staticClass:"form-select","class":{"already-exist":(nv_ligne_sign===null||nv_ligne_sign===void 0?void 0:nv_ligne_sign.tb)=="tb8"},staticStyle:{"min-width":"250px"},attrs:{title:nv_ligne_sign.ligne,disabled:""},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(nv_ligne_sign,"ligne",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",{domProps:{value:nv_ligne_sign.ligne}},[_vm._v(_vm._s(nv_ligne_sign.ligne))])]):_c("div",[nv_ligne_sign.ligne==""?_c("select",{directives:[{name:"model",rawName:"v-model",value:nv_ligne_sign.ligne,expression:"nv_ligne_sign.ligne"}],staticClass:"form-select","class":{"already-exist":(nv_ligne_sign===null||nv_ligne_sign===void 0?void 0:nv_ligne_sign.tb)=="tb8"},staticStyle:{"min-width":"250px"},attrs:{disabled:!["",null,undefined].includes(nv_ligne_sign.from)},on:{change:[function($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(nv_ligne_sign,"ligne",$event.target.multiple?$$selectedVal:$$selectedVal[0]);},function($event){null;}]}},[_c("option",{domProps:{value:""}}),_vm._v(" "),_vm._l(_vm.f8Constants.lignes_engagements_signatures_filtres,function(line,indexL){return _c("option",{key:indexL+"4z_1",domProps:{value:line.libelle}},[_vm._v(_vm._s(line.libelle))]);})],2):_c("select",{directives:[{name:"model",rawName:"v-model",value:nv_ligne_sign.ligne,expression:"nv_ligne_sign.ligne"}],staticClass:"form-select","class":{"already-exist":(nv_ligne_sign===null||nv_ligne_sign===void 0?void 0:nv_ligne_sign.tb)=="tb8"},staticStyle:{"min-width":"250px"},attrs:{disabled:!["",null,undefined].includes(nv_ligne_sign.from)},on:{change:[function($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(nv_ligne_sign,"ligne",$event.target.multiple?$$selectedVal:$$selectedVal[0]);},function($event){null;}]}},[_c("option",{domProps:{value:""}}),_vm._v(" "),_vm._l(_vm.f8Constants.lignes_engagements_signatures,function(line,indexL){return _c("option",{key:indexL+"4z_1",domProps:{value:line.libelle}},[_vm._v(_vm._s(line.libelle))]);})],2)])]:[nv_ligne_sign.ligne_mixte=="Mixte"?_c("div",{staticClass:"d-flex"},[_c("select",{directives:[{name:"model",rawName:"v-model",value:nv_ligne_sign.ligne_mixte,expression:"nv_ligne_sign.ligne_mixte"}],staticClass:"form-select","class":{"already-exist":(nv_ligne_sign===null||nv_ligne_sign===void 0?void 0:nv_ligne_sign.tb)=="tb8"},staticStyle:{"min-width":"250px"},on:{change:[function($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(nv_ligne_sign,"ligne_mixte",$event.target.multiple?$$selectedVal:$$selectedVal[0]);},function($event){return _vm.f8Manager.addVarMixte(["nouvelles_lignes_signature",i]);}]}},[_c("option",{domProps:{value:""}}),_vm._v(" "),_vm._l(_vm.f8Constants.lignes_engagements_signatures,function(line,indexL){return _c("option",{key:indexL+"4z_1",domProps:{value:line.libelle}},[_vm._v(_vm._s(line.libelle))]);}),_vm._v(" "),_c("optgroup",{attrs:{label:"--------------------------------"}}),_vm._v(" "),_c("option",{attrs:{value:"Mixte"}},[_vm._v("Mixte")])],2),_vm._v(" "),_c("div",{staticStyle:{"margin-left":"0.5rem!important"}},[_c("vue-tags-input",{"class":{"already-exist":(nv_ligne_sign===null||nv_ligne_sign===void 0?void 0:nv_ligne_sign.tb)=="tb8"},staticStyle:{width:"250px",border:"1px solid #ccc","border-radius":"6px"},attrs:{"autocomplete-items":_vm.f8Constants.ligneAutoComplete("lignes_engagements_signatures"),tags:nv_ligne_sign.tags,placeholder:"Selectionner les lignes"},on:{"tags-changed":function tagsChanged($event){return _vm.f8Manager.handleTag($event,["nouvelles_lignes_signature",i],_vm.f8Constants.lignes_engagements_signatures,null,null);},"adding-duplicate":function addingDuplicate(){}},model:{value:nv_ligne_sign.tag,callback:function callback($$v){_vm.$set(nv_ligne_sign,"tag",$$v);},expression:"nv_ligne_sign.tag"}})],1)]):_c("select",{directives:[{name:"model",rawName:"v-model",value:nv_ligne_sign.ligne,expression:"nv_ligne_sign.ligne"}],staticClass:"form-select","class":{"already-exist":(nv_ligne_sign===null||nv_ligne_sign===void 0?void 0:nv_ligne_sign.tb)=="tb8"},staticStyle:{"min-width":"250px"},on:{change:[function($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(nv_ligne_sign,"ligne",$event.target.multiple?$$selectedVal:$$selectedVal[0]);},function($event){return _vm.f8Manager.addVarMixte(["nouvelles_lignes_signature",i]);}]}},[_c("option",{domProps:{value:""}}),_vm._v(" "),_vm._l(_vm.f8Constants.lignes_engagements_signatures,function(line,indexL){return _c("option",{key:indexL+"4z_1",domProps:{value:line.libelle}},[_vm._v(_vm._s(line.libelle))]);}),_vm._v(" "),_c("optgroup",{attrs:{label:"--------------------------------"}}),_vm._v(" "),_c("option",{attrs:{value:"Mixte"}},[_vm._v("Mixte")])],2)]],2),_vm._v(" "),_c("td",[_c("select",{directives:[{name:"model",rawName:"v-model",value:nv_ligne_sign.statut,expression:"nv_ligne_sign.statut"}],staticClass:"form-select","class":{"already-exist":nv_ligne_sign.from||(nv_ligne_sign===null||nv_ligne_sign===void 0?void 0:nv_ligne_sign.tb)=="tb8"},staticStyle:{"min-width":"250px"},attrs:{title:nv_ligne_sign.statut},on:{change:[function($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(nv_ligne_sign,"statut",$event.target.multiple?$$selectedVal:$$selectedVal[0]);},function($event){return _vm.f8Manager.computedTypeStatus("lignes_existantes_engagements_signatures",nv_ligne_sign,i,"nouvelles_lignes_signature");}]}},[nv_ligne_sign!==null&&nv_ligne_sign!==void 0&&nv_ligne_sign.from?[_c("option",{domProps:{value:"Renouvellement"}},[_vm._v("Renouvellement")]),_vm._v(" "),_c("option",{domProps:{value:"Abandon"}},[_vm._v("Abandon")])]:[_c("option",{domProps:{value:"Nouveau"}},[_vm._v("Nouveau")])]],2)]),_vm._v(" "),_c("td",[_c("currency-input2",{"class":{"already-exist":(nv_ligne_sign===null||nv_ligne_sign===void 0?void 0:nv_ligne_sign.tb)=="tb8"},staticStyle:{"min-width":"250px"},attrs:{disabled:!["",null,undefined].includes(nv_ligne_sign.from),"default-typing":false},on:{change:function change($event){return _vm.f8Manager.computedTypeStatus("lignes_existantes_engagements_signatures",nv_ligne_sign,i,"nouvelles_lignes_signature");}},model:{value:nv_ligne_sign.montant,callback:function callback($$v){_vm.$set(nv_ligne_sign,"montant",$$v);},expression:"nv_ligne_sign.montant"}})],1),_vm._v(" "),_c("td",[_c("currency-input2",{"class":{"already-exist":nv_ligne_sign.from||(nv_ligne_sign===null||nv_ligne_sign===void 0?void 0:nv_ligne_sign.tb)=="tb8"},staticStyle:{"min-width":"250px"},attrs:{"default-typing":false},on:{change:function change($event){return _vm.f8Manager.computedTypeStatus("lignes_existantes_engagements_signatures",nv_ligne_sign,i,"nouvelles_lignes_signature");}},model:{value:nv_ligne_sign.proposition,callback:function callback($$v){_vm.$set(nv_ligne_sign,"proposition",$$v);},expression:"nv_ligne_sign.proposition"}})],1),_vm._v(" "),_c("td",[_c("currency-input2",{"class":{"already-exist":nv_ligne_sign.from||(nv_ligne_sign===null||nv_ligne_sign===void 0?void 0:nv_ligne_sign.tb)=="tb8"},staticStyle:{"min-width":"250px"},attrs:{"default-typing":false},on:{change:function change($event){null;}},model:{value:nv_ligne_sign.encours,callback:function callback($$v){_vm.$set(nv_ligne_sign,"encours",$$v);},expression:"nv_ligne_sign.encours"}})],1),_vm._v(" "),_c("td",[_c("input",{directives:[{name:"model",rawName:"v-model",value:nv_ligne_sign.duree,expression:"nv_ligne_sign.duree"}],staticClass:"form-control","class":{"already-exist":nv_ligne_sign.from||(nv_ligne_sign===null||nv_ligne_sign===void 0?void 0:nv_ligne_sign.tb)=="tb8"},staticStyle:{width:"80px"},attrs:{type:"number"},domProps:{value:nv_ligne_sign.duree},on:{change:function change($event){null;},input:function input($event){if($event.target.composing)return;_vm.$set(nv_ligne_sign,"duree",$event.target.value);}}})]),_vm._v(" "),_c("td",[_c("div",{staticStyle:{width:"280px"}},[_c("date-input",{attrs:{classname:nv_ligne_sign.from||(nv_ligne_sign===null||nv_ligne_sign===void 0?void 0:nv_ligne_sign.tb)=="tb8"?"already-exist":"",value:nv_ligne_sign.echeance},on:{input:function input($event){return _vm.formDataVars2($event,i,"nouvelles_lignes_signature","echeance");}}})],1)]),_vm._v(" "),_c("td",[_c("input",{directives:[{name:"model",rawName:"v-model",value:nv_ligne_sign.taux,expression:"nv_ligne_sign.taux"}],staticClass:"form-control","class":{"already-exist":nv_ligne_sign.from||(nv_ligne_sign===null||nv_ligne_sign===void 0?void 0:nv_ligne_sign.tb)=="tb8"},staticStyle:{width:"60px"},attrs:{type:"number"},domProps:{value:nv_ligne_sign.taux},on:{change:function change($event){null;},input:function input($event){if($event.target.composing)return;_vm.$set(nv_ligne_sign,"taux",$event.target.value);}}})]),_vm._v(" "),_c("td",[_c("input",{directives:[{name:"model",rawName:"v-model",value:nv_ligne_sign.type,expression:"nv_ligne_sign.type"}],staticClass:"form-control","class":{"already-exist":nv_ligne_sign.from||(nv_ligne_sign===null||nv_ligne_sign===void 0?void 0:nv_ligne_sign.tb)=="tb8"},staticStyle:{width:"60px"},attrs:{disabled:"",title:nv_ligne_sign.type=="RI"?"Renouvellement identique":nv_ligne_sign.type=="RH"?"Renouvellement à la hausse":nv_ligne_sign.type=="RB"?"Renouvellement à la baisse":nv_ligne_sign.type=="AB"?"Abandon":""},domProps:{value:nv_ligne_sign.type},on:{change:function change($event){null;},input:function input($event){if($event.target.composing)return;_vm.$set(nv_ligne_sign,"type",$event.target.value);}}})]),_vm._v(" "),_c("td",[nv_ligne_sign.from?_c("button",{staticStyle:{color:"#ffffff","border-radius":"15%",border:"none"},style:nv_ligne_sign.type=="AB"?{"background-color":"#e9ecef",color:"#000",border:"#000"}:_vm.f8Manager.lineHasSuretes(nv_ligne_sign),attrs:{disabled:(nv_ligne_sign===null||nv_ligne_sign===void 0?void 0:nv_ligne_sign.type)=="AB",type:"button",title:"Chager les suretés de la ligne existante correspondante"},on:{click:function click($event){return _vm.openModal("hypoModal",nv_ligne_sign,true);}}},[_c("i",{staticClass:"icofont-download",attrs:{size:"21"}})]):_c("button",{staticStyle:{color:"#ffffff","border-radius":"15%",border:"none"},style:_vm.f8Manager.lineHasSuretes(nv_ligne_sign),attrs:{type:"button",title:"Ajouter des suretés à cette ligne"},on:{click:function click($event){return _vm.openModal("hypoModal",nv_ligne_sign);}}},[_c("i",{staticClass:"icofont-list",attrs:{size:"21"}})])]),_vm._v(" "),_c("td",[_c("button",{staticStyle:{"background-color":"#2c3e50","border-radius":"15%",color:"#ffffff",border:"none"},style:!["",null,undefined].includes(nv_ligne_sign.from)?{"background-color":"#e9ecef"}:"",attrs:{disabled:!["",null,undefined].includes(nv_ligne_sign.from),type:"button",title:"Effacer le contenu de ligne"},on:{click:function click($event){return _vm.f8Manager.cleanLine("nouvelles_lignes_signature",nv_ligne_sign.id);}}},[_c("i",{staticClass:"icofont-dropbox"})])]),_vm._v(" "),_c("td",[i===0?[_c("button",{staticStyle:{"background-color":"#2c3e50",color:"#ffffff","border-radius":"15%",border:"none"},attrs:{type:"button",title:"Ajouter une nouvelle ligne"},on:{click:function click($event){return _vm.f8Manager.addLine("nouvelles_lignes_signature");}}},[_c("plus-icon",{staticClass:"custom-class",attrs:{size:"21"}})],1)]:[!nv_ligne_sign.from?_c("button",{staticStyle:{"background-color":"transparent",border:"none"},attrs:{type:"button",title:"Supprimer cette action"},on:{click:function click($event){return _vm.f8Manager.removeLine("nouvelles_lignes_signature",nv_ligne_sign.id);}}},[_c("trash-icon",{staticClass:"custom-class",attrs:{size:"21"}})],1):_vm._e()]],2)]);}),_vm._v(" "),_c("tr",[_vm._m(7),_vm._v(" "),_c("td",[_c("currency-input2",{staticClass:"form-control",staticStyle:{"min-width":"250px"},attrs:{"default-typing":false,readonly:""},model:{value:_vm.f8Manager.data.st_signature_nouvelles_lignes_montant,callback:function callback($$v){_vm.$set(_vm.f8Manager.data,"st_signature_nouvelles_lignes_montant",$$v);},expression:"f8Manager.data.st_signature_nouvelles_lignes_montant"}})],1),_vm._v(" "),_c("td",[_c("currency-input2",{staticClass:"form-control",staticStyle:{"min-width":"250px"},attrs:{"default-typing":false,readonly:""},model:{value:_vm.f8Manager.data.st_signature_nouvelles_lignes_proposition,callback:function callback($$v){_vm.$set(_vm.f8Manager.data,"st_signature_nouvelles_lignes_proposition",$$v);},expression:"f8Manager.data.st_signature_nouvelles_lignes_proposition"}})],1)]),_vm._v(" "),_c("tr",[_vm._m(8),_vm._v(" "),_c("td",[_c("currency-input2",{staticClass:"form-control",staticStyle:{background:"#34495e",color:"#fff","min-width":"250px"},attrs:{"default-typing":false,readonly:""},model:{value:_vm.f8Manager.data.total_nouvelles_lignes_montant,callback:function callback($$v){_vm.$set(_vm.f8Manager.data,"total_nouvelles_lignes_montant",$$v);},expression:"f8Manager.data.total_nouvelles_lignes_montant"}})],1),_vm._v(" "),_c("td",[_c("currency-input2",{staticClass:"form-control",staticStyle:{background:"#34495e",color:"#fff","min-width":"250px"},attrs:{"default-typing":false,readonly:""},model:{value:_vm.f8Manager.data.total_nouvelles_lignes_proposition,callback:function callback($$v){_vm.$set(_vm.f8Manager.data,"total_nouvelles_lignes_proposition",$$v);},expression:"f8Manager.data.total_nouvelles_lignes_proposition"}})],1)])],2)])])]),_vm._v(" "),_c("br"),_vm._v(" "),_c("div",{staticClass:"col-md-12 mt-3 mb-3"},[_vm._m(9),_vm._v(" "),_c("vue-editor",{attrs:{id:"comment_situation_apres_accord"},on:{"update-value":function updateValue($event){_vm.formDataToBeWatched[$event[0]]=$event[1];}},model:{value:_vm.formDataToBeWatched.comment_situation_apres_accord,callback:function callback($$v){_vm.$set(_vm.formDataToBeWatched,"comment_situation_apres_accord",$$v);},expression:"formDataToBeWatched.comment_situation_apres_accord\n                    "}})],1),_vm._v(" "),_c("br")]):_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"relook-header mb-5",on:{click:function click($event){_vm.seen5=!_vm.seen5;}}},[_c("h6",{attrs:{id:"situation-après-accord"}},[_vm._v("\n                        B3 Situation après accord\n                        "),_c("chevron-down-icon",{staticClass:"custom-class",staticStyle:{"float":"right",cursor:"pointer"},attrs:{size:"21"}})],1)])]),_vm._v(" "),(_vm.seen6=_vm.seen6)?_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"relook-header",on:{click:function click($event){_vm.seen6=!_vm.seen6;}}},[_c("h6",{"class":" subdiv"+this.tb_name,attrs:{id:"situation-après-accord"}},[_vm._v("\n                        Consommation en Fond Propres du montant sollicité\n                        "),_c("chevron-up-icon",{staticClass:"custom-class",staticStyle:{"float":"right",cursor:"pointer"},attrs:{size:"21"}})],1)]),_vm._v(" "),_c("br"),_vm._v(" "),_c("div",{staticClass:"card-body"},[_c("div",[_c("div",{staticClass:"border border-3 p-2 pt-0 text-center"},[_vm._m(10),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-around"},[_c("div",{staticClass:"m-2 mr-4",staticStyle:{"vertical-align":"middle"}},[_c("input",{staticClass:"form-check-input",staticStyle:{width:"20px",height:"20px"},attrs:{type:"checkbox",id:"manual"},domProps:{checked:_vm.formDataToBeWatched.mode_calcul=="M",value:"M"},on:{click:function click($event){return _vm.setModeCalculConso($event,"mode_calcul");}}}),_vm._v(" "),_c("label",{staticClass:"form-check-label",attrs:{"for":"manual"}},[_vm._v("Manuel")])]),_vm._v(" "),_c("div",{staticClass:"m-2 mr-4"},[_c("input",{staticClass:"form-check-input",staticStyle:{width:"20px",height:"20px"},attrs:{type:"checkbox",id:"auto"},domProps:{checked:_vm.formDataToBeWatched.mode_calcul=="A",value:"A"},on:{click:function click($event){return _vm.setModeCalculConso($event,"mode_calcul");}}}),_vm._v(" "),_c("label",{staticClass:"form-check-label",attrs:{"for":"auto"}},[_vm._v(" Automatique ")])])])]),_vm._v(" "),_c("br"),_vm._v(" "),_c("br"),_vm._v(" "),_c("br"),_vm._v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.formDataToBeWatched.mode_calcul=="A",expression:"formDataToBeWatched.mode_calcul == 'A'"}],staticClass:"table-responsive"},[_c("table",{staticClass:"table table-bordered mb-1"},[_vm._m(11),_vm._v(" "),_c("tbody",[_vm._m(12),_vm._v(" "),_vm._l(_vm.conso_fps,function(cp,index){return _c("tr",{key:index},[_c("td",[_c("select",{directives:[{name:"model",rawName:"v-model",value:cp.libelle,expression:"cp.libelle"}],staticClass:"form-select","class":{equipe:cp.cameFrom=="tb_8"},staticStyle:{width:"250px"},attrs:{title:cp.libelle},on:{change:[function($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(cp,"libelle",$event.target.multiple?$$selectedVal:$$selectedVal[0]);},_vm.handleInput]}},[_c("option",{domProps:{value:""}}),_vm._v(" "),_vm._l(_vm.tous_les_lignes_filtres_,function(line,indexL){return _c("option",{key:indexL+"4z_1",domProps:{value:line.libelle}},[_vm._v(_vm._s(line.libelle))]);}),_vm._v(" "),(cp===null||cp===void 0?void 0:cp.ligne_mixte)!=""?_c("option",{domProps:{value:cp.libelle}},[_vm._v(_vm._s(cp.libelle))]):_vm._e()],2)]),_vm._v(" "),_c("td",[_c("currency-input",{staticClass:"form-control","class":{equipe:cp.cameFrom=="tb_8"},staticStyle:{width:"150px"},attrs:{"default-typing":false,type:"text"},on:{change:_vm.handleInput},model:{value:cp.bilan,callback:function callback($$v){_vm.$set(cp,"bilan",$$v);},expression:"\n                                                   cp.bilan\n                                                "}})],1),_vm._v(" "),_c("td",[_c("currency-input",{staticClass:"form-control","class":{equipe:cp.cameFrom=="tb_8"},staticStyle:{width:"150px"},attrs:{"default-typing":false,type:"text"},on:{change:_vm.handleInput},model:{value:cp.hor_bilan,callback:function callback($$v){_vm.$set(cp,"hor_bilan",$$v);},expression:"\n                                                   cp.hor_bilan\n                                                "}})],1),_vm._v(" "),_c("td",[_c("div",{staticClass:"btn-group w-100"},[_c("input-group",{staticStyle:{"min-width":"150px"},scopedSlots:_vm._u([{key:"input",fn:function fn(){return[_c("currency-input",{staticClass:"form-control text-end","class":{equipe:cp.cameFrom=="tb_8"&&_vm.convertInt(cp.hor_bilan)!=0},staticStyle:{"min-width":"90px","border-radius":"unset","padding-right":"7px","border-end-start-radius":"5px","border-start-start-radius":"5px"},attrs:{"default-typing":false,readonly:_vm.convertInt(cp.hor_bilan)==0,"float":""},on:{change:_vm.handleInput},model:{value:cp.fcec,callback:function callback($$v){_vm.$set(cp,"fcec",$$v);},expression:"\n                                                                    cp.fcec"}})];},proxy:true},{key:"right",fn:function fn(){return[_vm._v("%")];},proxy:true}],null,true)})],1)]),_vm._v(" "),_c("td",[_c("currency-input",{staticStyle:{width:"150px"},attrs:{readonly:"","default-typing":false},on:{input:_vm.handleInput},model:{value:cp.hb_apres_fcec,callback:function callback($$v){_vm.$set(cp,"hb_apres_fcec",$$v);},expression:"\n                                                    cp.hb_apres_fcec\n                                                "}})],1),_vm._v(" "),_c("td",[_c("currency-input",{staticClass:"form-control",staticStyle:{width:"150px"},attrs:{"default-typing":false,type:"text",disabled:""},on:{change:_vm.handleInput},model:{value:cp.total_exposition,callback:function callback($$v){_vm.$set(cp,"total_exposition",$$v);},expression:"\n                                                   cp.total_exposition\n                                                "}})],1),_vm._v(" "),_c("td",[_c("currency-input",{staticClass:"form-control","class":{equipe:cp.cameFrom=="tb_8"},staticStyle:{width:"150px"},attrs:{"default-typing":false,type:"text"},on:{change:_vm.handleInput},model:{value:cp.tarc,callback:function callback($$v){_vm.$set(cp,"tarc",$$v);},expression:"\n                                                   cp.tarc\n                                                "}})],1),_vm._v(" "),_c("td",[_c("div",{staticClass:"btn-group w-100"},[_c("input-group",{staticStyle:{"min-width":"150px"},scopedSlots:_vm._u([{key:"input",fn:function fn(){return[_c("currency-input",{staticClass:"form-control text-end","class":{equipe:cp.cameFrom=="tb_8"},staticStyle:{"min-width":"90px","border-radius":"unset","padding-right":"7px","border-end-start-radius":"5px","border-start-start-radius":"5px"},attrs:{"default-typing":false,id:"clt_pond","float":""},on:{change:_vm.handleInput},model:{value:cp.pond,callback:function callback($$v){_vm.$set(cp,"pond",$$v);},expression:"\n                                                                cp.pond"}})];},proxy:true},{key:"right",fn:function fn(){return[_vm._v("%")];},proxy:true}],null,true)})],1)]),_vm._v(" "),_c("td",[_c("currency-input",{staticStyle:{width:"150px"},attrs:{readonly:"","default-typing":false},on:{input:_vm.handleInput},model:{value:cp.apr,callback:function callback($$v){_vm.$set(cp,"apr",$$v);},expression:"\n                                                    cp.apr\n                                                "}})],1),_vm._v(" "),index==0?_c("td",[_c("button",{directives:[{name:"show",rawName:"v-show",value:index==0,expression:"index == 0"}],staticStyle:{"background-color":"#2c3e50",color:"#ffffff","border-radius":"15%",border:"none","font-size":"16px"},attrs:{type:"button",title:"Ajouter un bien"},on:{click:function click($event){return _vm.addMoreConso("conso_fps");}}},[_c("plus-icon",{staticClass:"custom-class",attrs:{size:"21"}})],1)]):_c("td",[_c("button",{directives:[{name:"show",rawName:"v-show",value:index>0,expression:"index > 0"}],staticStyle:{"background-color":"transparent",border:"none"},attrs:{type:"button",title:"Supprimer"},on:{click:function click($event){return _vm.removeConso(index);}}},[_c("trash-icon",{staticClass:"custom-class",attrs:{size:"21"}})],1)])]);}),_vm._v(" "),_c("tr",[_c("td",[_vm._v("\n                                            TOTAL\n                                        ")]),_vm._v(" "),_c("td",[_c("currency-input",{attrs:{readonly:"","default-typing":false},on:{change:_vm.handleInput},model:{value:_vm.formDataToBeWatched.total_bilan_cmt_cct,callback:function callback($$v){_vm.$set(_vm.formDataToBeWatched,"total_bilan_cmt_cct",$$v);},expression:"formDataToBeWatched.total_bilan_cmt_cct\n                                                    "}})],1),_vm._v(" "),_c("td",[_c("currency-input",{attrs:{readonly:"","default-typing":false},on:{change:_vm.handleInput},model:{value:_vm.formDataToBeWatched.total_hor_bilan_cmt_cct,callback:function callback($$v){_vm.$set(_vm.formDataToBeWatched,"total_hor_bilan_cmt_cct",$$v);},expression:"formDataToBeWatched.total_hor_bilan_cmt_cct\n                                                    "}})],1),_vm._v(" "),_c("td"),_vm._v(" "),_c("td",[_c("currency-input",{attrs:{readonly:"","default-typing":false},on:{change:_vm.handleInput},model:{value:_vm.formDataToBeWatched.total_hb_apres_fcec_cmt_cct,callback:function callback($$v){_vm.$set(_vm.formDataToBeWatched,"total_hb_apres_fcec_cmt_cct",$$v);},expression:"formDataToBeWatched.total_hb_apres_fcec_cmt_cct\n                                                    "}})],1),_vm._v(" "),_c("td",[_c("currency-input",{attrs:{readonly:"","default-typing":false},on:{change:_vm.handleInput},model:{value:_vm.formDataToBeWatched.total_total_exposition_cmt_cct,callback:function callback($$v){_vm.$set(_vm.formDataToBeWatched,"total_total_exposition_cmt_cct",$$v);},expression:"formDataToBeWatched.total_total_exposition_cmt_cct\n                                                    "}})],1),_vm._v(" "),_c("td",[_c("currency-input",{attrs:{readonly:"","default-typing":false},on:{change:_vm.handleInput},model:{value:_vm.formDataToBeWatched.total_tarc_cmt_cct,callback:function callback($$v){_vm.$set(_vm.formDataToBeWatched,"total_tarc_cmt_cct",$$v);},expression:"formDataToBeWatched.total_tarc_cmt_cct\n                                                    "}})],1),_vm._v(" "),_c("td"),_vm._v(" "),_c("td",[_c("currency-input",{attrs:{readonly:"","default-typing":false},on:{change:_vm.handleInput},model:{value:_vm.formDataToBeWatched.total_apr_cmt_cct,callback:function callback($$v){_vm.$set(_vm.formDataToBeWatched,"total_apr_cmt_cct",$$v);},expression:"formDataToBeWatched.total_apr_cmt_cct\n                                                    "}})],1),_vm._v(" "),_c("td")]),_vm._v(" "),_c("tr",[_c("td",{staticClass:"text-right vertical-middle fw-bold",attrs:{colspan:"7"}},[_vm._v("Consommation fonds propres")]),_vm._v(" "),_c("td",[_c("div",{staticClass:"btn-group w-100"},[_c("input-group",{staticStyle:{"min-width":"150px"},scopedSlots:_vm._u([{key:"input",fn:function fn(){return[_c("currency-input",{staticClass:"form-control text-end",staticStyle:{"min-width":"90px","border-radius":"unset","padding-right":"7px","border-end-start-radius":"5px","border-start-start-radius":"5px"},attrs:{"default-typing":false,"float":""},on:{change:_vm.handleInput},model:{value:_vm.formDataToBeWatched.ligne_conso_fond_propre_pour,callback:function callback($$v){_vm.$set(_vm.formDataToBeWatched,"ligne_conso_fond_propre_pour",$$v);},expression:"formDataToBeWatched.ligne_conso_fond_propre_pour"}})];},proxy:true},{key:"right",fn:function fn(){return[_vm._v("%")];},proxy:true}],null,false,2920121830)})],1)]),_vm._v(" "),_c("td",[_c("currency-input",{staticStyle:{width:"150px"},attrs:{readonly:"","default-typing":false},on:{input:_vm.handleInput},model:{value:_vm.formDataToBeWatched.ligne_conso_fond_propre,callback:function callback($$v){_vm.$set(_vm.formDataToBeWatched,"ligne_conso_fond_propre",$$v);},expression:"formDataToBeWatched.ligne_conso_fond_propre"}})],1),_vm._v(" "),_c("td")])],2)]),_vm._v(" "),_c("br")]),_vm._v(" "),_c("br"),_vm._v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.formDataToBeWatched.mode_calcul=="M",expression:"formDataToBeWatched.mode_calcul == 'M'"}],staticClass:"table-responsive"},[_c("table",{staticClass:"table table-bordered mb-1"},[_c("tbody",_vm._l(_vm.conso_fond_propre,function(conso_fp,index){return _c("tr",{key:index},[_c("td",[_c("label",[_c("b",[_vm._v(_vm._s(conso_fp.name))]),_c("span",{staticClass:"text-danger"},[_vm._v("*")])])]),_vm._v(" "),_c("td",[_c("currency-input",{staticClass:"form-control",staticStyle:{width:"150px"},attrs:{"default-typing":false,type:"text"},on:{change:_vm.handleInput},model:{value:conso_fp.montant,callback:function callback($$v){_vm.$set(conso_fp,"montant",$$v);},expression:"conso_fp.montant\n                                                    "}})],1),_vm._v(" "),_c("td",[Number(String(conso_fp.montant).replace(/\s+/g,""))>0?_c("div",{staticClass:"d-flex align-items-center"},[_c("div",[conso_fp.files>0?_c("span",{staticClass:"p-1 px-2 mx-2 text-nowrap",staticStyle:{"background-color":"rgb(44, 62, 80)",color:"white","font-size":"13px","border-radius":"5px","margin-left":"0!important"}},[_vm._v(_vm._s(conso_fp.files>0?conso_fp.files+" fichier(s) uploadé(s)":""))]):_vm._e()]),_vm._v(" "),conso_fp.name.trim()!=""?_c("div",[_c("button",{staticClass:"btn shadow-md text-white",staticStyle:{cursor:"pointer",background:"#2c3e50",width:"26px","font-size":"13px",padding:"1px"},attrs:{type:"button",name:"button","data-toggle":"tooltip",title:"Cliquer ici pour uploader ou voir le(s) fichier(s)"},on:{click:function click($event){return _vm.handleDoubleClickOrClick($event,index);}}},[_c("i",{staticClass:"icofont-attachment"})])]):_vm._e()]):_vm._e()])]);}),0)])]),_vm._v(" "),_c("br"),_vm._v(" "),_c("div",{staticClass:"col-md-12 mt-3 mb-3"},[_vm._m(13),_vm._v(" "),_c("vue-editor",{attrs:{id:"comment_conso_fond_propre"},on:{"update-value":function updateValue($event){_vm.formDataToBeWatched[$event[0]]=$event[1];}},model:{value:_vm.formDataToBeWatched.comment_conso_fond_propre,callback:function callback($$v){_vm.$set(_vm.formDataToBeWatched,"comment_conso_fond_propre",$$v);},expression:"formDataToBeWatched.comment_conso_fond_propre\n                            "}})],1),_vm._v(" "),_c("br")])])]):_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"relook-header mb-5",on:{click:function click($event){_vm.seen6=!_vm.seen6;}}},[_c("h6",{attrs:{id:"situation-après-accord"}},[_vm._v("\n                        Consommation en Fond Propres du montant sollicité\n                        "),_c("chevron-down-icon",{staticClass:"custom-class",staticStyle:{"float":"right",cursor:"pointer"},attrs:{size:"21"}})],1)])]),_vm._v(" "),_c("div",{staticClass:"mb-5"}),_vm._v(" "),_c("button",{staticClass:"btn shadow-md text-white position-absolute",staticStyle:{cursor:"pointer",right:"16px",bottom:"10px",background:"#2c3e50","max-width":"max-content"},attrs:{type:"button",name:"button"},on:{click:function click($event){return _vm.retract();}}},[_vm._v("\n                Fermer le tableau\n            ")])]):_c("div",{staticClass:"card card-width-height"},[_c("br"),_vm._v(" "),_c("div",{staticClass:"card-header hdc pb-0 pt-2"},[_c("h6",{staticClass:"head",attrs:{id:"f3-head"}},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col"},[_vm._v("\n                            "+_vm._s(_vm.tb_display_name)+" : Synthèse des anciennes et nouvelles lignes\n                        ")]),_vm._v(" "),_c("div",{staticClass:"col-auto"},[((_vm$formDataToBeWatch2=_vm.formDataToBeWatched.notes)===null||_vm$formDataToBeWatch2===void 0?void 0:_vm$formDataToBeWatch2.length)>0?_c("div",{staticStyle:{display:"inline-block",position:"relative"}},[_c("span",{attrs:{type:"button"},on:{click:function click($event){return _vm.openNotesModal(true);}}},[_c("i",{staticClass:"icofont icofont-comment text-white px-2",staticStyle:{"font-size":"12px"},attrs:{role:"button"}}),_vm._v(" "),_c("span",{staticClass:"badge-sm"},[_c("span",[_vm._v("\n                                            "+_vm._s(_vm.formDataToBeWatched.notes.length)+"\n                                        ")])])])]):_vm._e(),_vm._v(" "),_c("chevron-down-icon",{staticClass:"custom-class",staticStyle:{"float":"right",cursor:"pointer"},attrs:{size:"21"},on:{click:function click($event){return _vm.retract();}}})],1)])])])])],1),_vm._v(" "),_c("div",{staticStyle:{position:"relative","z-index":"999999999"}},[_c("div",{staticClass:"modal fade modal-lg",attrs:{id:"instruction6",tabindex:"-1","aria-labelledby":"instruction6","aria-hidden":"true"}},[_c("div",{staticClass:"modal-dialog",staticStyle:{width:"650px"}},[_c("div",{staticClass:"modal-content"},[_c("div",{staticClass:"modal-header"},[_c("h5",{staticClass:"modal-title",attrs:{id:"instruction6"}},[_vm._v("\n                            Instruction - "+_vm._s(_vm.tb_display_name)+" : Centrales\n                            risques - Adhésion au BIC(si applicable)\n                        ")]),_vm._v(" "),_c("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}})]),_vm._v(" "),_vm._m(14),_vm._v(" "),_vm._m(15)])])])]),_vm._v(" "),_c("note-modal",{attrs:{name:_vm.tb_name,listingNote:_vm.listingNote,notes:_vm.f8Manager.data.notes},on:{close:function close($event){return _vm.$modal.hide(_vm.tb_name);},addNote:function addNote($event){var _vm$f8Manager$data$no;(_vm$f8Manager$data$no=_vm.f8Manager.data.notes)===null||_vm$f8Manager$data$no===void 0||_vm$f8Manager$data$no.unshift($event);}},model:{value:_vm.f8Manager.data.notes,callback:function callback($$v){_vm.$set(_vm.f8Manager.data,"notes",$$v);},expression:"f8Manager.data.notes"}})],1);};var staticRenderFns=[function(){var _vm=this,_c=_vm._self._c;return _c("td",{staticClass:"text-start",attrs:{colspan:"2"}},[_c("label",[_c("b",[_vm._v("S/Total par caisse")])])]);},function(){var _vm=this,_c=_vm._self._c;return _c("td",{staticClass:"text-start",attrs:{colspan:"2"}},[_c("label",[_c("b",[_vm._v("S/Total par signature")])])]);},function(){var _vm=this,_c=_vm._self._c;return _c("td",{staticClass:"text-start",attrs:{colspan:"2"}},[_c("label",[_c("b",[_vm._v("Total")])])]);},function(){var _vm=this,_c=_vm._self._c;return _c("td",{staticClass:"text-start",attrs:{colspan:"3"}},[_c("label",[_c("b",[_vm._v("S/Total par caisse")])])]);},function(){var _vm=this,_c=_vm._self._c;return _c("td",{staticClass:"text-start",attrs:{colspan:"3"}},[_c("label",[_c("b",[_vm._v("S/Total par signature")])])]);},function(){var _vm=this,_c=_vm._self._c;return _c("td",{staticClass:"text-start",attrs:{colspan:"3"}},[_c("label",[_c("b",[_vm._v("Total")])])]);},function(){var _vm=this,_c=_vm._self._c;return _c("td",{staticClass:"text-start",attrs:{colspan:"3"}},[_c("label",[_c("b",[_vm._v("S/Total par caisse")])])]);},function(){var _vm=this,_c=_vm._self._c;return _c("td",{staticClass:"text-start",attrs:{colspan:"3"}},[_c("label",[_c("b",[_vm._v("S/Total par signature")])])]);},function(){var _vm=this,_c=_vm._self._c;return _c("td",{staticClass:"text-start",attrs:{colspan:"3"}},[_c("label",[_c("b",[_vm._v("Total")])])]);},function(){var _vm=this,_c=_vm._self._c;return _c("label",{staticClass:"form-label"},[_c("b",[_vm._v(" Commentaires")])]);},function(){var _vm=this,_c=_vm._self._c;return _c("div",{staticClass:"d-flex justify-content-center text-center"},[_c("span",{staticClass:"bg-white d-flex text-center",staticStyle:{"margin-top":"-12px"}},[_vm._v("Choix du mode de\n                                    calcul de la Consommation en Fond propres ?")])]);},function(){var _vm=this,_c=_vm._self._c;return _c("thead",[_c("tr",[_c("td",{staticClass:"text-center text-uppercase",attrs:{rowspan:"2"}},[_c("label",{attrs:{"for":""}},[_c("b",[_vm._v("Nature de la facilité")])])]),_vm._v(" "),_c("th",{staticClass:"text-center text-uppercase"},[_c("label",{attrs:{"for":""}},[_c("b",[_vm._v("Bilan")])])]),_vm._v(" "),_c("th",{staticClass:"text-center text-uppercase"},[_c("label",{attrs:{"for":""}},[_c("b",[_vm._v("Hors Bilan")])])]),_vm._v(" "),_c("th",{staticClass:"text-center text-uppercase"},[_c("label",{attrs:{"for":""}},[_c("b",[_vm._v("FCEC")])])]),_vm._v(" "),_c("th",{staticClass:"text-center text-uppercase"},[_c("label",{attrs:{"for":""}},[_c("b",[_vm._v("HB après FCECC")])])]),_vm._v(" "),_c("th",{staticClass:"text-center text-uppercase"},[_c("label",{attrs:{"for":""}},[_c("b",[_vm._v("Total Exposition avant TARC")])])]),_vm._v(" "),_c("th",{staticClass:"text-center text-uppercase"},[_c("label",{attrs:{"for":""}},[_c("b",[_vm._v("TARC")])])]),_vm._v(" "),_c("th",{staticClass:"text-center text-uppercase"},[_c("label",{attrs:{"for":""}},[_c("b",[_vm._v("Pond")])])]),_vm._v(" "),_c("th",{staticClass:"text-center text-uppercase"},[_c("label",{attrs:{"for":""}},[_c("b",[_vm._v("APR")])])])])]);},function(){var _vm=this,_c=_vm._self._c;return _c("tr",[_c("td",[_c("label",{attrs:{"for":""}})]),_vm._v(" "),_c("td",{staticClass:"text-center"},[_vm._v("\n                                            bilan (a)\n                                        ")]),_vm._v(" "),_c("td",{staticClass:"text-center"},[_vm._v("\n                                            hors bilan (b)\n                                        ")]),_vm._v(" "),_c("td",{staticClass:"text-center"},[_vm._v("\n                                            c\n                                        ")]),_vm._v(" "),_c("td",{staticClass:"text-center"},[_vm._v("\n                                            (d)=(b)*(c )\n                                        ")]),_vm._v(" "),_c("td",{staticClass:"text-center"},[_vm._v("\n                                            (e) = (d) + (a)\n                                        ")]),_vm._v(" "),_c("td",{staticClass:"text-center"},[_vm._v("\n                                            (f)\n                                        ")]),_vm._v(" "),_c("td",{staticClass:"text-center"},[_vm._v("\n                                            (g)\n                                        ")]),_vm._v(" "),_c("td",{staticClass:"text-center"},[_vm._v("\n                                            (h)=(e-f)*(g)\n                                        ")])]);},function(){var _vm=this,_c=_vm._self._c;return _c("label",{staticClass:"form-label"},[_c("b",[_vm._v(" Commentaires")])]);},function(){var _vm=this,_c=_vm._self._c;return _c("div",{staticClass:"modal-body"},[_c("img",{attrs:{src:"/images/capture_afg/centrale_risques_adhesion_au_bic.png",width:"100%; height:100%;"}})]);},function(){var _vm=this,_c=_vm._self._c;return _c("div",{staticClass:"modal-footer"},[_c("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-bs-dismiss":"modal"}},[_vm._v("\n                            Fermer\n                        ")])]);}];render._withStripped=true;

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dc/DC-DESC3.vue?vue&type=style&index=0&id=2539dca9&lang=css&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dc/DC-DESC3.vue?vue&type=style&index=0&id=2539dca9&lang=css&scoped=true ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\ninput[data-v-2539dca9] {\r\n    /*border: 1px solid red;*/\n}\n*[data-v-2539dca9] {\r\n    font-family: \"Google sans\";\n}\nth[data-v-2539dca9] {\r\n    font-size: 12px;\n}\nlabel[data-v-2539dca9] {\r\n    height: 10px;\r\n    font-size: 13px;\n}\ninput[data-v-2539dca9],\r\nselect[data-v-2539dca9] {\r\n    height: 35px;\r\n    border-color: #34495e;\r\n    color: #57606f;\r\n    font-size: 13px;\r\n    font-weight: bold;\n}\r\n\r\n/* select{\r\n    width: 150px;\r\n} */\r\n\r\n/* textarea,\r\ninput[type=\"text\"],\r\ninput[type=\"date\"] {\r\n    width: 250px;\r\n} */\n.card-width-height[data-v-2539dca9] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-2539dca9] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\n.hdc[data-v-2539dca9] {\r\n    background-color: #57606f;\n}\r\n\r\n/* Ajouter note */\n.badge-sm[data-v-2539dca9] {\r\n    display: inline-block;\r\n    width: 15px;\r\n    height: 15px;\r\n    background: rgba(255, 0, 0, 0.882);\r\n    color: white;\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    border-radius: 100%;\r\n    position: absolute;\r\n    top: -20%;\r\n    left: 55%;\r\n    text-align: center;\n}\n.equipe[data-v-2539dca9]{\r\n    background: #00ffff21; \r\n    color: #000;\n}\n.relook-header[data-v-2539dca9] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\n.bg-relooker[data-v-2539dca9] {\r\n    background-color: #2c3e50;\r\n    color: white;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dc/DC-DESC3.vue?vue&type=style&index=0&id=2539dca9&lang=css&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dc/DC-DESC3.vue?vue&type=style&index=0&id=2539dca9&lang=css&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_DESC3_vue_vue_type_style_index_0_id_2539dca9_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DC-DESC3.vue?vue&type=style&index=0&id=2539dca9&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dc/DC-DESC3.vue?vue&type=style&index=0&id=2539dca9&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_DESC3_vue_vue_type_style_index_0_id_2539dca9_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_DESC3_vue_vue_type_style_index_0_id_2539dca9_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/dc/DC-DESC3.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/dc/DC-DESC3.vue ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DC_DESC3_vue_vue_type_template_id_2539dca9_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DC-DESC3.vue?vue&type=template&id=2539dca9&scoped=true */ "./resources/js/components/contreanalyse/nsia/filiale/dc/DC-DESC3.vue?vue&type=template&id=2539dca9&scoped=true");
/* harmony import */ var _DC_DESC3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DC-DESC3.vue?vue&type=script&lang=js */ "./resources/js/components/contreanalyse/nsia/filiale/dc/DC-DESC3.vue?vue&type=script&lang=js");
/* harmony import */ var _DC_DESC3_vue_vue_type_style_index_0_id_2539dca9_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DC-DESC3.vue?vue&type=style&index=0&id=2539dca9&lang=css&scoped=true */ "./resources/js/components/contreanalyse/nsia/filiale/dc/DC-DESC3.vue?vue&type=style&index=0&id=2539dca9&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DC_DESC3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _DC_DESC3_vue_vue_type_template_id_2539dca9_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _DC_DESC3_vue_vue_type_template_id_2539dca9_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2539dca9",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/contreanalyse/nsia/filiale/dc/DC-DESC3.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/dc/DC-DESC3.vue?vue&type=script&lang=js":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/dc/DC-DESC3.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_DESC3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DC-DESC3.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dc/DC-DESC3.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_DESC3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/dc/DC-DESC3.vue?vue&type=style&index=0&id=2539dca9&lang=css&scoped=true":
/*!************************************************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/dc/DC-DESC3.vue?vue&type=style&index=0&id=2539dca9&lang=css&scoped=true ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_DESC3_vue_vue_type_style_index_0_id_2539dca9_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DC-DESC3.vue?vue&type=style&index=0&id=2539dca9&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dc/DC-DESC3.vue?vue&type=style&index=0&id=2539dca9&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/dc/DC-DESC3.vue?vue&type=template&id=2539dca9&scoped=true":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/dc/DC-DESC3.vue?vue&type=template&id=2539dca9&scoped=true ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_DESC3_vue_vue_type_template_id_2539dca9_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_DESC3_vue_vue_type_template_id_2539dca9_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_DESC3_vue_vue_type_template_id_2539dca9_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DC-DESC3.vue?vue&type=template&id=2539dca9&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dc/DC-DESC3.vue?vue&type=template&id=2539dca9&scoped=true");


/***/ })

}]);