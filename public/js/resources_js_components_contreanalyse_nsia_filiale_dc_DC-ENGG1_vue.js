"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_contreanalyse_nsia_filiale_dc_DC-ENGG1_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dc/DC-ENGG1.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dc/DC-ENGG1.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vueform/multiselect/dist/multiselect.vue2 */ "./node_modules/@vueform/multiselect/dist/multiselect.vue2.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../helpers/helper */ "./resources/js/helpers/helper.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../helpers/indexedDB */ "./resources/js/helpers/indexedDB.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_helpers_indexedDB__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_nsia_f8_constants_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../services/nsia/f8-constants.js */ "./resources/js/services/nsia/f8-constants.js");
/* provided dependency */ var process = __webpack_require__(/*! process/browser.js */ "./node_modules/process/browser.js");
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
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }






// ? IndexedDB helper for formDataToBeWatched Cache management




/**
 * Cache Management variables
 */
var indexedDBName = "CREDITFLOW_TABLES";
var collectionName = "TABLES";
var documentName = "T";
var documentId = null;
var _cache,
  _lastSaveTime = null,
  _onlineSaveIntervalTimeInSeconds = 30;
var _DEBUG = process.env.MIX_APP_DEBUG;
var _cacheAutosaveInterval = null;
var _timeSpentInSeconds = 0;
// -- End Cache Management variables

window.$ = window.jQuery = __webpack_require__(/*! jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Fiche_des_engagements_du_groupe",
  display: "Fiche des engagements du groupe",
  components: {
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.ChevronDownIcon,
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.TrashIcon,
    AirplayIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.AirplayIcon,
    Multiselect: _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  computed: {},
  props: {
    meta_data: Object,
    tb_name: String,
    tb_display_name: String
  },
  created: function created() {
    var _this = this;
    // ? Setup cache listeners and stuff
    // this.setupCache();
    //

    EventBus.$on("event-T0", function (data) {
      // console.log("kkk", this.rtnExistant(data.formdata.experience_secteur))
      _this.formDataToBeWatched.vivre = _this.rtnExistant(data.formdata.experience_secteur);
    });
  },
  mounted: function mounted() {
    var _this$meta_data$dossi;
    // Initiate cache

    // // this.initCache();
    //

    var applied_templ_name = (_this$meta_data$dossi = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi.applied_templ_name;
    var tbArrays = this.determineCredPubTables(applied_templ_name);
    this.credpub00 = tbArrays[0];
    this.credpub02 = tbArrays[2];
    this.loadRetrieved();
    this.loadTbAttrs(); // charge les attributs + sous attributs des tables
    this.tableClosedOrOpened();
    // helper.loadCurrencyFormatter();
    // AJOUTER
    // EventBus.$on('autosubmit', ()=> {
    //     this.launchAutoSaver()
    // })
  },
  data: function data() {
    var vm = this;
    return {
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__["default"].host,
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
      seen6: true,
      seen7: true,
      seen8: true,
      seen9: true,
      seenn1: true,
      vseenn1: true,
      disp: false,
      isLoading: false,
      meta_parseable: {
        cred_pub_key: this.meta_data["cred_pub_key"],
        tb_name: this.tb_name
      },
      formDataToBeWatched: {
        bref_historique: "",
        notes: [],
        engagement_groupes: [],
        engagement_groupe_entetes: [],
        engagement_groupe_totaux_horizontale: {},
        engagement_groupe_totaux_verticale: [],
        engagement_groupe_total_montant_ligne_actuelle: 0,
        engagement_groupe_total_montant_ligne_sollicitee: 0,
        engagement_groupe_total_montant_utilisation_actuelle: 0,
        fond_propre_date: "",
        fond_propre_montant: "",
        fp_date: "",
        fp_text: "",
        ensemble_engagement_fp_date: "",
        pour_eng_actuelle: "",
        pour_eng_sollicite: ""
      },
      optionLines: [].concat(_toConsumableArray(_services_nsia_f8_constants_js__WEBPACK_IMPORTED_MODULE_5__["default"].tous_les_lignes), _toConsumableArray(_services_nsia_f8_constants_js__WEBPACK_IMPORTED_MODULE_5__["default"].lignes_engagements_signatures)),
      engagement_groupe_entetes: [{
        indice: "",
        nom_de_la_relation: ""
      }],
      engagement_groupe_totaux_horizontale: {
        montant_ligne_actuelle_0: 0,
        montant_ligne_sollicitee_0: 0,
        montant_utilisation_actuelle_0: 0
      },
      engagement_groupe_totaux_verticale: [{
        montant_ligne_actuelle: 0,
        montant_ligne_sollicitee: 0,
        montant_utilisation_actuelle: 0
      }],
      engagement_groupes: [{
        ligne: "",
        montant_ligne_actuelle_0: 0,
        montant_ligne_sollicitee_0: 0,
        montant_utilisation_actuelle_0: 0
      }],
      credpub00: null,
      credpub02: null,
      // Ajouter note
      listingNote: false,
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
      }]
    };
  },
  methods: {
    // ? ** formDataToBeWatched Cache Management Functions
    /**
     * sets up formToBeWatched cache management related listeners and stuff
     * ! to be executed in the *created* method
     */
    setupCache: function setupCache() {
      if (_DEBUG) console.log(">> setupCache");

      // ? Upload data to server before the page/tab/browser closes
      // ! Only visibly works on page reload, for some reason
      window.addEventListener("beforeunload", this.beforePageIsClosed);
      // console.log("beforePageIsClosed subscribed");
    },
    /**
     * adds an attribute to the formDataToBeWatched so that when it's deleted the pageunload callback doesn't refill it with empty values
     */
    updateFormDataForDeletion: function updateFormDataForDeletion() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (_DEBUG) console.log(">> updateFormDataForDeletion");
              _this2.formDataToBeWatched.is_deleted = true;
              // Actually delete from cache
              _context.next = 4;
              return _cache["delete"](documentId);
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    /**
     * executes before the page/tab/browser is closed
     * ! actually only works when the tab is refreshed
     */
    beforePageIsClosed: function beforePageIsClosed(event) {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              event.preventDefault();
              event.returnValue = ""; // ! Won't work without this

              if (_DEBUG) console.log(">> beforePageIsClosed");
              // shows native popup
              // ! Only works on page reloads

              // Check if formDataToBeWatched is empty
              if (!_this3.formDataToBeWatched.is_deleted) {
                _context2.next = 5;
                break;
              }
              return _context2.abrupt("return");
            case 5:
              // Upload current (and arguably latest) formDataToBeWatched data

              _this3.uploadDataToServerAndUpdateLastSave(_this3.formDataToBeWatched, _this3.formDataToBeWatched);
              if (_DEBUG) console.log("<< beforePageIsClosed");
            case 7:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    /**
     * initialises the caches and throws exceptions/notifications when cache is not available
     * @important uses the page param templateId to uniquely identify tables in the indexedDB
     * @param  {void}
     * @return {void}
     */
    initCache: function initCache() {
      if (_DEBUG) console.log(">> initCache");
      if (_cache) return;
      // ! Check if this.tb_name exists, this variable only exists in table components so if it exists it means that a table component is currently active
      if (!this.tb_name) return;
      // ? Config for the indexedDB cache manager
      documentName = this.tb_name;
      var templateId = this.$route.params.templateId;
      // ? This mixin is made for formDataToBeWatched in tables that have templateId
      // If templateDoesn't exist exit
      if (!templateId) return;
      var name = indexedDBName + "-" + templateId;
      var store = collectionName + "-" + templateId;
      documentId = documentName + "-" + templateId;
      //
      try {
        _cache = new (_helpers_indexedDB__WEBPACK_IMPORTED_MODULE_4___default())({
          name: name,
          store: store
        });
        if (_DEBUG) console.log("<< initCache");
      } catch (error) {
        if (_DEBUG) console.error("xx initCache ", error);
      }

      // Start timer
      clearInterval(_cacheAutosaveInterval);
      if (_DEBUG) console.log(">> Set up timer");
      _cacheAutosaveInterval = setInterval(this.uploadDataToServerEvery30Seconds, 1000);

      // Delete formDataToBeWatched without having to upload before reload
      if (_DEBUG) console.log(">> EventBus.$on tbDeleted");
      EventBus.$on("tbDeleted", this.updateFormDataForDeletion);
    },
    /**
     * saves form data in cache before sending form data to backend on ˜user idle˜ or in specified intervals
     * @param  {Object} newVal updated form data
     * @param  {Object} oldVal old form data
     * @return {void}
     */
    saveDataInCache: function saveDataInCache(newVal, oldVal) {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var data, timeSpentInSeconds;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (_DEBUG) console.log(">> saveDataInCache");
              // Check if cache exists
              if (!_cache) {
                if (_DEBUG) console.log(">< saveDataInCache no cache");
                // this.initCache();
              }
              // * TODO
              // [x] - Save data locally on strokes as cache in indexedDB
              // [x] - Upload cached data when user is idle or on interval timeout
              // [x] - Clear cache data from indexDB
              // [x] - Rinse & Repeat
              data = _objectSpread({
                documentId: documentId
              }, newVal); // Update or Insert newVal in Object store
              _context3.next = 5;
              return _cache.upsert(documentId, data);
            case 5:
              if (_lastSaveTime != null) {
                // Last save time exists
                timeSpentInSeconds = (Date.now() - _lastSaveTime) / 1000; // Upload data to serve, update last save and clear cache when interval timeout
                if (timeSpentInSeconds >= _onlineSaveIntervalTimeInSeconds) {
                  _this4.uploadDataToServerAndUpdateLastSave(newVal, oldVal);
                }
              }
              // First upload
              if (!_lastSaveTime) {
                _this4.uploadDataToServerAndUpdateLastSave(newVal, oldVal);
              }
            case 7:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    /**
     * does exactly what the long ass name says lol
     * @param  {Object} newVal updated form data
     * @param  {Object} oldVal old form data
     * @return {void}
     */
    uploadDataToServerAndUpdateLastSave: function uploadDataToServerAndUpdateLastSave(newVal, oldVal) {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              if (_DEBUG) console.log(">> uploadDataToServerAndUpdateLastSave");
              _context4.prev = 1;
              if (_DEBUG) console.log(">> this.autosaving");
              _context4.next = 5;
              return _this5.autosaving(newVal, oldVal);
            case 5:
              // Update last save time
              _lastSaveTime = Date.now();
              // ! DONOT Clear cache
              // _cache.delete(documentId);
              if (_DEBUG) console.log("<< uploadDataToServerAndUpdateLastSave");
              _context4.next = 12;
              break;
            case 9:
              _context4.prev = 9;
              _context4.t0 = _context4["catch"](1);
              // TODO add error
              if (_DEBUG) console.error("xx uploadDataToServerAndUpdateLastSave", _context4.t0);
            case 12:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[1, 9]]);
      }))();
    },
    /**
     * it displays a pop when the user is about to close the tab or browser
     * then uploads formToBeWatched data to server to avoid losing data on unexpected page close
     * @param  {Object} newVal updated form data
     * @param  {Object} oldVal old form data
     * @return {void}
     */
    uploadDataToServerBeforePageCloses: function uploadDataToServerBeforePageCloses() {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              if (_DEBUG) console.log(">> uploadDataToServerBeforePageCloses");
              _context5.prev = 1;
              _context5.next = 4;
              return _this6.autosaving(newVal, oldVal);
            case 4:
              // Update last save time
              _lastSaveTime = Date.now();
              // Clear cache
              _cache["delete"](documentId);
              if (_DEBUG) console.log("<< uploadDataToServerBeforePageCloses");
              _context5.next = 12;
              break;
            case 9:
              _context5.prev = 9;
              _context5.t0 = _context5["catch"](1);
              // TODO add error
              if (_DEBUG) console.error("xx uploadDataToServerBeforePageCloses", _context5.t0);
            case 12:
            case "end":
              return _context5.stop();
          }
        }, _callee5, null, [[1, 9]]);
      }))();
    },
    /**
     * does exactly what the name says
     * @return {void}
     */
    uploadDataToServerEvery30Seconds: function uploadDataToServerEvery30Seconds() {
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              // if (_DEBUG) console.log(">> uploadDataToServerEvery30Seconds", _timeSpentInSeconds);
              _timeSpentInSeconds++;
              if (!(_timeSpentInSeconds % 30 != 0)) {
                _context6.next = 3;
                break;
              }
              return _context6.abrupt("return");
            case 3:
              if (_DEBUG) console.log(">> uploadDataToServerEvery30Seconds", _timeSpentInSeconds);
              _context6.prev = 4;
              if (_DEBUG) console.log(">> uploadDataToServerEvery30Seconds >> autosaving", _timeSpentInSeconds);
              _context6.next = 8;
              return _this7.autosaving(_this7.formDataToBeWatched, _this7.formDataToBeWatched);
            case 8:
              // Update last save time
              _lastSaveTime = Date.now();
              // Clear cache ?
              // _cache.delete(documentId);
              if (_DEBUG) console.log("<< uploadDataToServerEvery30Seconds << autosaving");
              _context6.next = 15;
              break;
            case 12:
              _context6.prev = 12;
              _context6.t0 = _context6["catch"](4);
              // TODO add error
              if (_DEBUG) console.error("xx uploadDataToServerEvery30Seconds", _context6.t0);
            case 15:
            case "end":
              return _context6.stop();
          }
        }, _callee6, null, [[4, 12]]);
      }))();
    },
    // End Cache management functions
    setCoSignataireVars: function setCoSignataireVars(event, index) {
      this.co_signataire[index][event[0]] = event[1];
      this.handleInput();
    },
    tableClosedOrOpened: function tableClosedOrOpened() {
      this.seen = this.fetchClosedTables(this.tb_name + this.meta_data["cred_pub_key"]);
    },
    openNotesModal: function openNotesModal() {
      var listing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.listingNote = listing;
      this.$modal.show(this.tb_name);
    },
    // AJOUTER
    launchAutoSaver: function launchAutoSaver() {
      var _this8 = this;
      _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["default"].loadUserData().then(function (res) {
        _this8.send2Backend(res, 0, 0);
      })["catch"](function (err) {
        _this8.loadWithError(err);
      });
    },
    SetPermanantEmp: function SetPermanantEmp(event, index) {
      this.source_revenus[index][event[0]] = event[1];
      // this.som = parseInt(this.source_revenus[index].Permanente?.toString().replace(/\s/g, ''))
      // console.log(this.source_revenus[index].Permanente?.toString().replace(/\s/g, ''))
      // this.formDataToBeWatched['total'] = parseInt(this.som)
      this.formDataToBeWatched["total"] = this.totalMontant;
      this.handleInput();
    },
    formDataVars: function formDataVars(event) {
      this.formDataToBeWatched[event[0]] = event[1];
      this.handleInput();
    },
    formDataVars2: function formDataVars2(event, index, name) {
      if (name.indexOf('_0') == -1 && name.indexOf('montant_ligne_actuelle') > -1) {
        var end = name.split('montant_ligne_actuelle')[1];
        this.engagement_groupes[index]['montant_ligne_sollicitee' + end] = event[1];
      }
      this.engagement_groupes[index][name] = event[1];
      this.handleInput();
    },
    onChange: function onChange(e) {
      if (e.target.value == "Non") {
        this.disp = true;
      } else {
        this.disp = false;
      }
    },
    loadRetrieved: function loadRetrieved() {
      var _this$meta_data$dossi2, _this$meta_data$dossi8;
      var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];

      // Close table by default
      this.defaultRetract(false, (_this$meta_data$dossi2 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi2 === void 0 ? void 0 : _this$meta_data$dossi2.applied_templ_id);
      if (lentb.length > 0) {
        if (this.meta_data["dossier_credit"][createdKey] != undefined) {
          this.formDataToBeWatched = this.meta_data["dossier_credit"][createdKey];
          if (this.meta_data["dossier_credit"][createdKey]["engagement_groupes"] != "") {
            this.engagement_groupes = this.meta_data["dossier_credit"][createdKey]["engagement_groupes"];
          }
          if (this.meta_data["dossier_credit"][createdKey]["engagement_groupe_entetes"] != "") {
            this.engagement_groupe_entetes = this.meta_data["dossier_credit"][createdKey]["engagement_groupe_entetes"];
          }
          if (this.meta_data["dossier_credit"][createdKey]["engagement_groupe_totaux_horizontale"] != "") {
            this.engagement_groupe_totaux_horizontale = this.meta_data["dossier_credit"][createdKey]["engagement_groupe_totaux_horizontale"];
          }
          if (this.meta_data["dossier_credit"][createdKey]["engagement_groupe_totaux_verticale"] != "") {
            this.engagement_groupe_totaux_verticale = this.meta_data["dossier_credit"][createdKey]["engagement_groupe_totaux_verticale"];
          }
        } else {
          var _this$meta_data$dossi3;
          this.formDataToBeWatched.fond_propre_date = this.getPreviousYearAndCurrentMonth()[1] + ' ' + this.getPreviousYearAndCurrentMonth()[2];
          this.formDataToBeWatched.ensemble_engagement_fp_date = this.getPreviousYearAndCurrentMonthAndDay();
          if (((_this$meta_data$dossi3 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi3 === void 0 ? void 0 : _this$meta_data$dossi3[this.credpub02]) != undefined) {
            var _this$meta_data$dossi4, _this$meta_data$dossi5, _this$meta_data$dossi6, _this$meta_data$dossi7;
            var lignes_existantes = (_this$meta_data$dossi4 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi4 === void 0 || (_this$meta_data$dossi4 = _this$meta_data$dossi4[this.credpub02]) === null || _this$meta_data$dossi4 === void 0 ? void 0 : _this$meta_data$dossi4.lignes_existantes;
            var lignes_existantes_engagements_signatures = (_this$meta_data$dossi5 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi5 === void 0 || (_this$meta_data$dossi5 = _this$meta_data$dossi5[this.credpub02]) === null || _this$meta_data$dossi5 === void 0 ? void 0 : _this$meta_data$dossi5.lignes_existantes_engagements_signatures;
            var nouvelles_lignes_caisse = (_this$meta_data$dossi6 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi6 === void 0 || (_this$meta_data$dossi6 = _this$meta_data$dossi6[this.credpub02]) === null || _this$meta_data$dossi6 === void 0 ? void 0 : _this$meta_data$dossi6.nouvelles_lignes_caisse;
            var nouvelles_lignes_signature = (_this$meta_data$dossi7 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi7 === void 0 || (_this$meta_data$dossi7 = _this$meta_data$dossi7[this.credpub02]) === null || _this$meta_data$dossi7 === void 0 ? void 0 : _this$meta_data$dossi7.nouvelles_lignes_signature;
            var array = [];
            if (nouvelles_lignes_caisse != '' && nouvelles_lignes_caisse.length > 0) {
              nouvelles_lignes_caisse.forEach(function (el) {
                if (el.ligne != "" && el.statut != "Abandon") {
                  var new0 = {
                    ligne: el === null || el === void 0 ? void 0 : el.ligne,
                    montant_ligne_actuelle_0: el === null || el === void 0 ? void 0 : el.montant,
                    montant_ligne_sollicitee_0: el === null || el === void 0 ? void 0 : el.proposition,
                    montant_utilisation_actuelle_0: 0
                  };
                  array.push(new0);
                }
              });
            }
            if (nouvelles_lignes_signature != '' && nouvelles_lignes_signature.length > 0) {
              nouvelles_lignes_signature.forEach(function (el) {
                if (el.ligne != "" && el.statut != "Abandon") {
                  var new0 = {
                    ligne: el === null || el === void 0 ? void 0 : el.ligne,
                    montant_ligne_actuelle_0: el === null || el === void 0 ? void 0 : el.montant,
                    montant_ligne_sollicitee_0: el === null || el === void 0 ? void 0 : el.proposition,
                    montant_utilisation_actuelle_0: 0
                  };
                  array.push(new0);
                }
              });
            }
            var array_2 = [];
            array.forEach(function (el, index) {
              array_2.push({
                montant_ligne_actuelle: 0,
                montant_ligne_sollicitee: 0,
                montant_utilisation_actuelle: 0
              });
            });
            this.engagement_groupes = array;
            this.engagement_groupe_totaux_verticale = array_2;
            this.handleInput();
          }
        }
      }
      if (((_this$meta_data$dossi8 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi8 === void 0 ? void 0 : _this$meta_data$dossi8[this.credpub00]) != undefined) {
        var _this$meta_data$dossi9, _this$meta_data$dossi0;
        this.engagement_groupe_entetes[0].indice = (_this$meta_data$dossi9 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi9 === void 0 || (_this$meta_data$dossi9 = _this$meta_data$dossi9[this.credpub00]) === null || _this$meta_data$dossi9 === void 0 ? void 0 : _this$meta_data$dossi9.matricule_client;
        this.engagement_groupe_entetes[0].nom_de_la_relation = (_this$meta_data$dossi0 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi0 === void 0 || (_this$meta_data$dossi0 = _this$meta_data$dossi0[this.credpub00]) === null || _this$meta_data$dossi0 === void 0 ? void 0 : _this$meta_data$dossi0.denomination_client;
        this.handleInput();
      }
    },
    setTbVal: function setTbVal(val) {
      this.cred_pub_key = val;
    },
    loadWithError: function loadWithError(err) {
      //// window.location.href = "/login";
    },
    send2Backend: function send2Backend(res, newVal, oldVal) {
      this.authcheck = true;
      this.authcheckUsr = res.data;
      this.authcheckStatus = res.status;
      if (this.authcheckStatus === 401) {
        // // window.location.href = "/login";
      }
      if (this.authcheck === true) {
        // console.log(this.formDataToBeWatched)
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
          // this.launchScoringTable("organisation");
          // this.launchScoringTable("evaluation");
          // this.launchScoringTable("activite");
          // this.launchScoringTable("competence");
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
    onSlctMatCli: function onSlctMatCli(obj, key) {
      this.entite_connectes[key]["raison_social_entite_connecte"] = obj.nomcli;
      this.entite_connectes[key]["matricule_client_entite_connecte"] = obj.matclihan;
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
    retract1: function retract1() {
      this.seen4 = !this.seen4;
    },
    addMore: function addMore(orientation) {
      var _this9 = this;
      var newO = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      var length = this.engagement_groupe_entetes.length;
      if (orientation === 'horizontal') {
        if (newO == "") {
          newO = {
            ligne: "",
            montant_ligne_actuelle_0: 0,
            montant_ligne_sollicitee_0: 0,
            montant_utilisation_actuelle_0: 0
          };
        }
        this.engagement_groupes.push(newO);
        var last_length = this.engagement_groupes.length;
        for (var index = 1; index < length; index++) {
          this.engagement_groupes[last_length - 1]['montant_ligne_actuelle_' + index] = 0;
          this.engagement_groupes[last_length - 1]['montant_ligne_sollicitee_' + index] = 0;
          this.engagement_groupes[last_length - 1]['montant_utilisation_actuelle_' + index] = 0;
        }
        this.engagement_groupe_totaux_verticale.push({
          montant_ligne_actuelle: 0,
          montant_ligne_sollicitee: 0,
          montant_utilisation_actuelle: 0
        });
      } else {
        this.engagement_groupe_totaux_horizontale['montant_ligne_actuelle_' + length] = 0;
        this.engagement_groupe_totaux_horizontale['montant_ligne_sollicitee_' + length] = 0;
        this.engagement_groupe_totaux_horizontale['montant_utilisation_actuelle_' + length] = 0;
        this.engagement_groupes.forEach(function (element, index) {
          _this9.engagement_groupes[index]['montant_ligne_actuelle_' + length] = 0;
          _this9.engagement_groupes[index]['montant_ligne_sollicitee_' + length] = 0;
          _this9.engagement_groupes[index]['montant_utilisation_actuelle_' + length] = 0;
        });
        this.engagement_groupe_entetes.push({
          indice: "",
          nom_de_la_relation: ""
        });
      }

      /* if (orientation === 'horizontal') {
            let newObject = [];
            let indice = this.engagement_groupes[0][0].indice;
          let nom_de_la_relation = this.engagement_groupes[0][0].nom_de_la_relation;
            newO.indice = indice;
          newO.nom_de_la_relation = nom_de_la_relation;
            let count_item = this.engagement_groupes[0].length;
            for (let index = 0; index < count_item; index++) {
              newObject.push(newO);
          }
            this.engagement_groupes.push(newObject);
            nextTick(() => {
              let length_tr = window.$('.table-engagement').find('tbody tr').length;
              let tr = window.$('.table-engagement').find('tbody tr:nth-child('+(length_tr - 2)+')');
              tr.find('td:first select').focus();
          })
        } else {
            this.engagement_groupes.forEach((element, index) => {
              this.engagement_groupes[index].push(newO)
          });
            nextTick(() => {
              let tr = window.$('.table-engagement').find('tbody tr:first');
              let length_td = tr.find('td').length;
              let td = window.$('.table-engagement').find('tbody tr:first td:nth-child('+(length_td - 6)+')');
              td.find('input').focus();
              document.querySelector('.table-responsive-engagement').scrollLeft = document.querySelector('.table-responsive-engagement').scrollWidth;
          })
        } */
    },
    removeVertical: function removeVertical(index) {
      var _this0 = this;
      this.engagement_groupes.forEach(function (element, ligne) {
        var newOject = {};
        var _index_a = 0;
        var _index_s = 0;
        var _index_u_a = 0;
        for (var _i = 0, _Object$entries = Object.entries(element); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];
          if (!key.includes('_' + index)) {
            var newKey = key;
            if (newKey != 'ligne') {
              if (newKey.includes('montant_ligne_actuelle_')) {
                newKey = 'montant_ligne_actuelle_' + _index_a;
                _index_a++;
              }
              if (newKey.includes('montant_ligne_sollicitee_')) {
                newKey = 'montant_ligne_sollicitee_' + _index_s;
                _index_s++;
              }
              if (newKey.includes('montant_utilisation_actuelle_')) {
                newKey = 'montant_utilisation_actuelle_' + _index_u_a;
                _index_u_a++;
              }
            }
            newOject[newKey] = value;
          }
        }
        _this0.engagement_groupes[ligne] = newOject;
      });
      var newOject = {};
      var _index_a = 0;
      var _index_s = 0;
      var _index_u_a = 0;
      for (var _i2 = 0, _Object$entries2 = Object.entries(this.engagement_groupe_totaux_horizontale); _i2 < _Object$entries2.length; _i2++) {
        var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
          key = _Object$entries2$_i[0],
          value = _Object$entries2$_i[1];
        if (!key.includes('_' + index)) {
          var newKey = key;
          if (newKey.includes('montant_ligne_actuelle_')) {
            newKey = 'montant_ligne_actuelle_' + _index_a;
            _index_a++;
          }
          if (newKey.includes('montant_ligne_sollicitee_')) {
            newKey = 'montant_ligne_sollicitee_' + _index_s;
            _index_s++;
          }
          if (newKey.includes('montant_utilisation_actuelle_')) {
            newKey = 'montant_utilisation_actuelle_' + _index_u_a;
            _index_u_a++;
          }
          newOject[newKey] = value;
        }
      }
      this.engagement_groupe_totaux_horizontale = newOject;
      this.engagement_groupe_entetes.splice(index, 1);
      this.handleInput();
    },
    removeHorizontal: function removeHorizontal(index) {
      this.engagement_groupes.splice(index, 1);
      this.handleInput();
    },
    somX3: function somX3(ob, key) {
      var som = 0;
      ob.filter(function (elm) {
        var _elm$key;
        som += Number((_elm$key = elm[key]) === null || _elm$key === void 0 ? void 0 : _elm$key.toString().replace(/\s/g, ""));
      });
      return som;
    },
    somX4: function somX4(ob, keyA, keyB) {
      var _ob$0$keyA, _ob$0$keyB;
      var som = Number((_ob$0$keyA = ob[0][keyA]) === null || _ob$0$keyA === void 0 ? void 0 : _ob$0$keyA.toString().replace(/\s/g, "")) * Number((_ob$0$keyB = ob[0][keyB]) === null || _ob$0$keyB === void 0 ? void 0 : _ob$0$keyB.toString().replace(/\s/g, ""));
      ob.filter(function (elm, index) {
        if (index > 0) {
          var _elm$keyA, _elm$keyB;
          var result = Number((_elm$keyA = elm[keyA]) === null || _elm$keyA === void 0 ? void 0 : _elm$keyA.toString().replace(/\s/g, "")) * Number((_elm$keyB = elm[keyB]) === null || _elm$keyB === void 0 ? void 0 : _elm$keyB.toString().replace(/\s/g, ""));
          som += result;
        }
      });
      return som;
    },
    somX5: function somX5(ob) {
      var orientation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'verticale';
      var som_1 = [];
      var som_2 = [];
      ob.forEach(function (elm, ind) {
        for (var _i3 = 0, _Object$entries3 = Object.entries(elm); _i3 < _Object$entries3.length; _i3++) {
          var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i3], 2),
            key = _Object$entries3$_i[0],
            value = _Object$entries3$_i[1];
          if (key !== 'ligne') {
            var splitKey = key.toString().split('_');
            var key2 = splitKey[0] + '_' + splitKey[1] + '_' + splitKey[2];
            if (som_1[key] == undefined) som_1[key] = [];
            if (som_2[ind] == undefined) som_2[ind] = [];
            if (som_2[ind][key2] == undefined) som_2[ind][key2] = [];
            som_1[key].push(Number(value.toString().replace(/\s/g, "")));
            som_2[ind][key2].push(Number(value.toString().replace(/\s/g, "")));
          }
        }
      });
      return [som_1, som_2];
    },
    handleInput: function handleInput(evt, index) {
      var _this1 = this,
        _this$formDataToBeWat;
      this.formDataToBeWatched.engagement_groupes = this.engagement_groupes;
      this.formDataToBeWatched.engagement_groupe_entetes = this.engagement_groupe_entetes;
      var _this$somX = this.somX5(this.engagement_groupes),
        _this$somX2 = _slicedToArray(_this$somX, 2),
        som_1 = _this$somX2[0],
        som_2 = _this$somX2[1];
      for (var _i4 = 0, _Object$entries4 = Object.entries(this.engagement_groupe_totaux_horizontale); _i4 < _Object$entries4.length; _i4++) {
        var _Object$entries4$_i = _slicedToArray(_Object$entries4[_i4], 2),
          key = _Object$entries4$_i[0],
          value = _Object$entries4$_i[1];
        if (som_1[key] !== undefined) {
          this.engagement_groupe_totaux_horizontale[key] = som_1[key].reduce(function (accumulator, currentValue) {
            return accumulator + currentValue;
          }, 0);
        }
      }
      ;
      var total_montant_ligne_actuelle = 0;
      var total_montant_ligne_sollicitee = 0;
      var total_montant_utilisation_actuelle = 0;
      this.engagement_groupe_totaux_verticale.forEach(function (element, index) {
        if (som_2[index] !== undefined) {
          for (var _i5 = 0, _Object$entries5 = Object.entries(element); _i5 < _Object$entries5.length; _i5++) {
            var _Object$entries5$_i = _slicedToArray(_Object$entries5[_i5], 2),
              _key = _Object$entries5$_i[0],
              _value = _Object$entries5$_i[1];
            if (som_2[index][_key] !== undefined) {
              _this1.engagement_groupe_totaux_verticale[index][_key] = som_2[index][_key].reduce(function (accumulator, currentValue) {
                return accumulator + currentValue;
              }, 0);
              if (_key === 'montant_ligne_actuelle') {
                total_montant_ligne_actuelle += _this1.engagement_groupe_totaux_verticale[index][_key];
              } else if (_key === 'montant_ligne_sollicitee') {
                total_montant_ligne_sollicitee += _this1.engagement_groupe_totaux_verticale[index][_key];
              } else {
                total_montant_utilisation_actuelle += _this1.engagement_groupe_totaux_verticale[index][_key];
              }
            }
          }
          ;
        }
      });
      this.formDataToBeWatched.engagement_groupe_totaux_horizontale = this.engagement_groupe_totaux_horizontale;
      this.formDataToBeWatched.engagement_groupe_totaux_verticale = this.engagement_groupe_totaux_verticale;
      this.formDataToBeWatched.engagement_groupe_total_montant_ligne_actuelle = total_montant_ligne_actuelle;
      this.formDataToBeWatched.engagement_groupe_total_montant_ligne_sollicitee = total_montant_ligne_sollicitee;
      this.formDataToBeWatched.engagement_groupe_total_montant_utilisation_actuelle = total_montant_utilisation_actuelle;
      var fond_propre_montant = Number((_this$formDataToBeWat = this.formDataToBeWatched.fond_propre_montant) === null || _this$formDataToBeWat === void 0 ? void 0 : _this$formDataToBeWat.toString().replace(/\s/g, ""));
      if (fond_propre_montant > 0) {
        var _total_montant_ligne_, _total_montant_ligne_2;
        this.formDataToBeWatched.pour_eng_sollicite = Number((_total_montant_ligne_ = total_montant_ligne_sollicitee) === null || _total_montant_ligne_ === void 0 ? void 0 : _total_montant_ligne_.toString().replace(/\s/g, "")) / fond_propre_montant;
        this.formDataToBeWatched.pour_eng_actuelle = Number((_total_montant_ligne_2 = total_montant_ligne_actuelle) === null || _total_montant_ligne_2 === void 0 ? void 0 : _total_montant_ligne_2.toString().replace(/\s/g, "")) / fond_propre_montant;
        this.formDataToBeWatched.pour_eng_sollicite = Number(this.formDataToBeWatched.pour_eng_sollicite) * 100;
        this.formDataToBeWatched.pour_eng_actuelle = Number(this.formDataToBeWatched.pour_eng_actuelle) * 100;
        this.formDataToBeWatched.pour_eng_sollicite = Number(this.formDataToBeWatched.pour_eng_sollicite).toFixed(2).toString().replace('.00', '');
        this.formDataToBeWatched.pour_eng_actuelle = Number(this.formDataToBeWatched.pour_eng_actuelle).toFixed(2).toString().replace('.00', '');
      }
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
        id: "f65-head"
      };
      // console.log(p)
      this.$emit("load-buffer", p);
    },
    precomputeScore: function precomputeScore() {
      var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      this.meta_parseable["type_table"] = a;
      var scoringVar = [];
      if (a == "organisation") {
        scoringVar = ["vivre", "competences_manageriales", "formalisation", "interaction"];
      }
      //   else if (a=="evaluation") {
      //     scoringVar = ["diversification", "structure_fournisseur", "structure_clientele", "saisonnalite", "couverture_geographique", "concurrence"];
      //   }
      if (a == "evaluation") {
        scoringVar = ["technologie", "risque_juridique", "risque_politique"];
      }
      if (a == "activite") {
        scoringVar = ["diversification", "structure_fournisseur", "structure_clientele", "saisonnalite", "couverture_geographique", "concurrence"];
      }
      if (a == "competence") {
        scoringVar = ["maitrise", "dynamisme", "compet_gestion", "avis_cc", "reputation", "stabilite", "competence", "historique"];
      }
      for (var i = 0; i < scoringVar.length; i++) {
        if (this.formDataToBeWatched[scoringVar[i]] == "") {
          return false;
        }
      }
      return true;
    },
    getPreviousYearAndCurrentMonth: function getPreviousYearAndCurrentMonth() {
      var tb_month = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
      var d = new Date();
      var current_year = d.getFullYear();
      var last_year = d.getFullYear() - 1;
      var current_month_number = d.getMonth();
      var old_month_number = current_month_number - 1;
      var old_mounth_name = tb_month[old_month_number];
      var current_mounth_name = tb_month[current_month_number];
      var tb_result = [current_mounth_name, old_mounth_name, d.getFullYear()];
      return tb_result;
    },
    getPreviousYearAndCurrentMonthAndDay: function getPreviousYearAndCurrentMonthAndDay() {
      var d = new Date();
      var current_month_number = d.getMonth() > 9 ? d.getMonth() : '0' + d.getMonth();
      var tb_result = d.getFullYear() + '-' + current_month_number + '-' + this.lastday(d.getFullYear(), d.getMonth());
      return tb_result;
    },
    lastday: function lastday(y, m) {
      return new Date(y, m + 1, 0).getDate();
    }
  },
  watch: {
    formDataToBeWatched: {
      handler: function handler(newVal, oldVal) {
        // if (oldVal === undefined) {
        //   return
        // }
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dc/DC-ENGG1.vue?vue&type=template&id=27556822&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dc/DC-ENGG1.vue?vue&type=template&id=27556822&scoped=true ***!
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
  }, [_vm.isLoading ? _c("loader") : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "row bg-light card-width-height",
    staticStyle: {
      width: "100%",
      height: "100%"
    }
  }, [_c("ContextMenu", {
    ref: "menu",
    attrs: {
      id: _vm.tb_name,
      cred_pub_key: _vm.meta_parseable.cred_pub_key,
      tb_name: _vm.tb_name,
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
      id: "f65-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Fiche des engagements du groupe\n                        ")]), _vm._v(" "), _c("div", {
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
  }, [_c("span", [_vm._v("\n                                            " + _vm._s(_vm.formDataToBeWatched.notes.length) + "\n                                        ")])])])]) : _vm._e(), _vm._v(" "), _c("airplay-icon", {
    staticClass: "custom-class mt-1",
    staticStyle: {
      cursor: "pointer",
      margin: "0 5px"
    },
    attrs: {
      size: "0.7x",
      title: "exemple"
    },
    on: {
      click: function click($event) {
        return _vm.$modal.show("fiche_des_engagements");
      }
    }
  }), _vm._v(" "), _c("chevron-up-icon", {
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
    staticClass: "d-flex justify-content-end"
  }, [_c("button", {
    staticClass: "mb-2",
    staticStyle: {
      "background-color": "#2c3e50",
      color: "#ffffff",
      "border-radius": "2%",
      border: "none",
      display: "flex",
      "align-items": "center"
    },
    attrs: {
      type: "button",
      title: "Ajouter une relation"
    },
    on: {
      click: function click($event) {
        return _vm.addMore("vertical");
      }
    }
  }, [_c("plus-icon", {
    staticClass: "custom-class",
    attrs: {
      size: "21"
    }
  }), _vm._v(" "), _c("span", [_vm._v("Ajouter une relation")])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive table-responsive-engagement"
  }, [_c("table", {
    staticClass: "table table-bordered table-engagement"
  }, [_c("thead", [_c("tr", [_c("th", {
    staticClass: "th text-center",
    staticStyle: {
      "vertical-align": "middle"
    },
    attrs: {
      rowspan: "2"
    }
  }, [_vm._v("LIGNES")]), _vm._v(" "), _vm._l(_vm.engagement_groupe_entetes, function (element, index) {
    return _c("th", {
      key: index,
      staticClass: "th text-center",
      attrs: {
        colspan: "3"
      }
    }, [_c("div", {
      staticClass: "m-1 d-flex"
    }, [index != 0 ? _c("button", {
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
        title: "Supprimer cette colonne"
      },
      on: {
        click: function click($event) {
          return _vm.removeVertical(index);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1) : _vm._e(), _vm._v(" "), _c("div", {
      staticStyle: {
        width: "100%"
      }
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: element.nom_de_la_relation,
        expression: "element.nom_de_la_relation"
      }],
      staticClass: "form-control mb-1",
      staticStyle: {
        width: "100%"
      },
      attrs: {
        type: "text",
        readonly: index == 0,
        placeholder: "NOM DE LA RELATION"
      },
      domProps: {
        value: element.nom_de_la_relation
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(element, "nom_de_la_relation", $event.target.value);
        }
      }
    }), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: element.indice,
        expression: "element.indice"
      }],
      staticClass: "form-control",
      staticStyle: {
        width: "100%"
      },
      attrs: {
        type: "text",
        readonly: index == 0,
        placeholder: "INDICE"
      },
      domProps: {
        value: element.indice
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(element, "indice", $event.target.value);
        }
      }
    })])])]);
  }), _vm._v(" "), _vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _vm._m(2), _vm._v(" "), _c("th", {
    staticClass: "th",
    attrs: {
      rowspan: "2"
    }
  })], 2), _vm._v(" "), _c("tr", [_vm._l(_vm.engagement_groupe_entetes, function (el, ind) {
    return [_c("th", {
      key: ind + "1",
      staticClass: "th text-center"
    }, [_vm._v("Lignes "), _c("br"), _vm._v(" actuelles")]), _vm._v(" "), _c("th", {
      key: ind + "2",
      staticClass: "th text-center"
    }, [_vm._v("Lignes "), _c("br"), _vm._v(" sollicitées")]), _vm._v(" "), _c("th", {
      key: ind + "3",
      staticClass: "th text-center"
    }, [_vm._v("Utilisations "), _c("br"), _vm._v(" actuelles")])];
  })], 2)]), _vm._v(" "), _c("tbody", [_vm._l(_vm.engagement_groupes, function (element, index) {
    return _c("tr", {
      key: index + "_e"
    }, [_c("td", [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: element.ligne,
        expression: "element.ligne"
      }],
      staticClass: "form-control",
      staticStyle: {
        "min-width": "120px"
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(element, "ligne", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, _vm.handleInput]
      }
    }, [_c("option", {
      attrs: {
        value: "",
        disabled: ""
      }
    }, [_vm._v("Sélectionner une ligne")]), _vm._v(" "), _c("option", {
      attrs: {
        value: ""
      }
    }), _vm._v(" "), _vm._l(_vm.optionLines, function (option, option_index) {
      return _c("option", {
        key: option_index,
        domProps: {
          value: option.libelle
        }
      }, [_vm._v(_vm._s(option.libelle))]);
    })], 2)]), _vm._v(" "), _vm._l(element, function (value, name) {
      return [name !== "ligne" ? _c("td", {
        key: name + "__2"
      }, [_c("currency-input2", {
        staticStyle: {
          "min-width": "120px"
        },
        attrs: {
          type: "text",
          readonly: name.indexOf("_0") > -1,
          value: value
        },
        on: {
          input: function input($event) {
            return _vm.formDataVars2($event, index, name);
          }
        }
      })], 1) : _vm._e()];
    }), _vm._v(" "), _vm._l(_vm.engagement_groupe_totaux_verticale[index], function (value, name) {
      return [_c("td", {
        key: name + "__3"
      }, [_c("currency-input2", {
        staticStyle: {
          "min-width": "120px"
        },
        attrs: {
          readonly: "",
          type: "text",
          value: value
        }
      })], 1)];
    }), _vm._v(" "), _c("td", [index != 0 ? _c("button", {
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
        title: "Supprimer cette ligne"
      },
      on: {
        click: function click($event) {
          return _vm.removeHorizontal(index);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1) : _vm._e()])], 2);
  }), _vm._v(" "), _c("tr", [_c("td", {
    staticStyle: {
      "vertical-align": "middle",
      "text-align": "center",
      "font-weight": "bold"
    }
  }, [_vm._v("TOTAL")]), _vm._v(" "), _vm._l(_vm.engagement_groupe_totaux_horizontale, function (value, name) {
    return [name !== "ligne" ? _c("td", {
      key: name + "__4"
    }, [_c("currency-input2", {
      staticStyle: {
        "min-width": "120px"
      },
      attrs: {
        readonly: "",
        type: "text",
        value: value
      }
    })], 1) : _vm._e()];
  }), _vm._v(" "), _c("td", [_c("currency-input2", {
    staticStyle: {
      "min-width": "120px"
    },
    attrs: {
      readonly: "",
      type: "text",
      value: _vm.formDataToBeWatched.engagement_groupe_total_montant_ligne_actuelle
    }
  })], 1), _vm._v(" "), _c("td", [_c("currency-input2", {
    staticStyle: {
      "min-width": "120px"
    },
    attrs: {
      readonly: "",
      type: "text",
      value: _vm.formDataToBeWatched.engagement_groupe_total_montant_ligne_sollicitee
    }
  })], 1), _vm._v(" "), _c("td", [_c("currency-input2", {
    staticStyle: {
      "min-width": "120px"
    },
    attrs: {
      readonly: "",
      type: "text",
      value: _vm.formDataToBeWatched.engagement_groupe_total_montant_utilisation_actuelle
    }
  })], 1), _vm._v(" "), _c("td", {
    staticStyle: {
      "vertical-align": "middle",
      "text-align": "center"
    }
  })], 2), _vm._v(" "), _c("tr", [_c("td", {
    staticStyle: {
      "vertical-align": "middle",
      "text-align": "center"
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
      title: "Ajouter une ligne"
    },
    on: {
      click: function click($event) {
        return _vm.addMore("horizontal");
      }
    }
  }, [_c("plus-icon", {
    staticClass: "custom-class",
    attrs: {
      size: "21"
    }
  })], 1)]), _vm._v(" "), _vm._l(_vm.engagement_groupes[0], function (el, ind) {
    return [ind !== "ligne" ? _c("td", {
      key: ind + "__5"
    }) : _vm._e()];
  }), _vm._v(" "), _c("td"), _vm._v(" "), _c("td"), _vm._v(" "), _c("td"), _vm._v(" "), _c("td", {
    staticStyle: {
      "vertical-align": "middle",
      "text-align": "center"
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
      title: "Ajouter une ligne"
    },
    on: {
      click: function click($event) {
        return _vm.addMore("horizontal");
      }
    }
  }, [_c("plus-icon", {
    staticClass: "custom-class",
    attrs: {
      size: "21"
    }
  })], 1)])], 2)], 2)])]), _vm._v(" "), _c("div", {
    staticClass: "mt-3 engagement-part-2"
  }, [_c("h6", {
    staticClass: "d-flex align-items-center flex-wrap"
  }, [_c("div", {
    staticClass: "m-2 mr-0"
  }, [_vm._v("Fonds Propres au mois de " + _vm._s(_vm.formDataToBeWatched.fond_propre_date) + " ")]), _c("div", {
    staticClass: "mx-2"
  }, [_vm._v("=")]), _vm._v(" "), _c("currency-input2", {
    attrs: {
      type: "text",
      id: "fond_propre_montant",
      value: _vm.formDataToBeWatched.fond_propre_montant
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("h6", {
    staticClass: "d-flex align-items-center flex-wrap"
  }, [_c("div", {
    staticClass: "m-2"
  }, [_vm._v("L'ensemble des engagements sollicités du groupe représente " + _vm._s(_vm.formDataToBeWatched.pour_eng_sollicite) + "% des fonds propres au")]), _vm._v(" "), _c("date-input", {
    staticStyle: {
      width: "220px"
    },
    attrs: {
      value: _vm.formDataToBeWatched.ensemble_engagement_fp_date,
      id: "ensemble_engagement_fp_date"
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("h6", {
    staticClass: "d-flex align-items-center flex-wrap"
  }, [_c("div", {
    staticClass: "m-2"
  }, [_vm._v("L'ensemble des engagements actuelles du groupe représente " + _vm._s(_vm.formDataToBeWatched.pour_eng_actuelle) + "% des fonds propres au")]), _vm._v(" "), _c("date-input", {
    staticStyle: {
      width: "220px"
    },
    attrs: {
      viewonly: "",
      readonly: "",
      value: _vm.formDataToBeWatched.ensemble_engagement_fp_date,
      id: "ensemble_engagement_fp_date"
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1)])]), _vm._v(" "), _c("div", {
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
  }, [_vm._v("\n                        Fermer le tableau\n                    ")])])])]) : _c("div", {
    staticClass: "card card-width-height"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc pb-0 pt-2"
  }, [_c("h6", {
    staticClass: "head",
    attrs: {
      id: "f65-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Fiche des engagements du groupe\n                        ")]), _vm._v(" "), _c("div", {
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
  }, [_c("span", [_vm._v("\n                                            " + _vm._s(_vm.formDataToBeWatched.notes.length) + "\n                                        ")])])])]) : _vm._e(), _vm._v(" "), _c("airplay-icon", {
    staticClass: "custom-class mt-1",
    staticStyle: {
      cursor: "pointer",
      margin: "0 5px"
    },
    attrs: {
      size: "0.7x",
      title: "exemple"
    },
    on: {
      click: function click($event) {
        return _vm.$modal.show("fiche_des_engagements");
      }
    }
  }), _vm._v(" "), _c("chevron-down-icon", {
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
      name: "fiche_des_engagements",
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
  return _c("th", {
    staticClass: "th text-center",
    staticStyle: {
      "vertical-align": "middle"
    },
    attrs: {
      rowspan: "2"
    }
  }, [_vm._v("TOTAL LIGNES "), _c("br"), _vm._v(" ACTUELLES")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("th", {
    staticClass: "th text-center",
    staticStyle: {
      "vertical-align": "middle"
    },
    attrs: {
      rowspan: "2"
    }
  }, [_vm._v("TOTAL LIGNES "), _c("br"), _vm._v(" SOLLICITEES")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("th", {
    staticClass: "th text-center text-nowrap",
    staticStyle: {
      "vertical-align": "middle"
    },
    attrs: {
      rowspan: "2"
    }
  }, [_vm._v("TOTAL "), _c("br"), _vm._v(" UTILISATION "), _c("br"), _vm._v(" ACTUELLES")]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dc/DC-ENGG1.vue?vue&type=style&index=0&id=27556822&lang=css&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dc/DC-ENGG1.vue?vue&type=style&index=0&id=27556822&lang=css&scoped=true ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-27556822] {\r\n    font-family: \"Google sans\";\n}\nlabel[data-v-27556822] {\r\n    height: 10px;\r\n    font-size: 13px;\n}\ntd input[data-v-27556822],\r\nselect[data-v-27556822] {\r\n    /* height: 35px; */\r\n    border-color: #34495e;\r\n    color: #57606f;\r\n    font-size: 13px;\r\n    font-weight: bold;\n}\n.th[data-v-27556822] {\r\n    padding: 4px;\r\n    padding-bottom: 0px;\n}\n.card-width-height[data-v-27556822] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-27556822] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\n.hdc[data-v-27556822] {\r\n    background-color: #57606f;\n}\n.relook-header[data-v-27556822] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\n.badge-sm[data-v-27556822] {\r\n    display: inline-block;\r\n    width: 15px;\r\n    height: 15px;\r\n    background: rgba(255, 0, 0, 0.882);\r\n    color: white;\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    border-radius: 100%;\r\n    position: absolute;\r\n    top: -20%;\r\n    left: 55%;\r\n    text-align: center;\n}\n.imageM22[data-v-27556822] {\r\n    background: url(\"/images/capture_cofina/exemple_source_revenus.png\")\r\n        no-repeat;\r\n    background-position: center;\r\n    background-size: contain;\r\n    width: 1000px;\r\n    height: 200px;\n}\ntd[data-v-27556822],\r\np[data-v-27556822] {\r\n    font-size: 13px;\n}\n.relook-header[data-v-27556822] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\n.width-100[data-v-27556822] {\r\n    width: 90%;\n}\n.personne input[data-v-27556822] {\r\n    width: 135px;\n}\n._border_right[data-v-27556822] {\r\n    border-right: 1px solid;\n}\n.engagement-part-2 input[data-v-27556822] {\r\n    width: 180px!important;\n}\n.mr-0[data-v-27556822] {\r\n    margin-right: 0!important;\n}\n.image1[data-v-27556822] {\r\n    background: url(\"/images/capture_nsia/exemples/fiche_des_engagements.png\")\r\n        no-repeat;\r\n    background-position: center;\r\n    background-size: contain;\r\n\r\n    width: 500px;\r\n    height: 300px;\n}\r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dc/DC-ENGG1.vue?vue&type=style&index=0&id=27556822&lang=css&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dc/DC-ENGG1.vue?vue&type=style&index=0&id=27556822&lang=css&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_ENGG1_vue_vue_type_style_index_0_id_27556822_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DC-ENGG1.vue?vue&type=style&index=0&id=27556822&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dc/DC-ENGG1.vue?vue&type=style&index=0&id=27556822&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_ENGG1_vue_vue_type_style_index_0_id_27556822_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_ENGG1_vue_vue_type_style_index_0_id_27556822_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/dc/DC-ENGG1.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/dc/DC-ENGG1.vue ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DC_ENGG1_vue_vue_type_template_id_27556822_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DC-ENGG1.vue?vue&type=template&id=27556822&scoped=true */ "./resources/js/components/contreanalyse/nsia/filiale/dc/DC-ENGG1.vue?vue&type=template&id=27556822&scoped=true");
/* harmony import */ var _DC_ENGG1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DC-ENGG1.vue?vue&type=script&lang=js */ "./resources/js/components/contreanalyse/nsia/filiale/dc/DC-ENGG1.vue?vue&type=script&lang=js");
/* harmony import */ var _DC_ENGG1_vue_vue_type_style_index_0_id_27556822_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DC-ENGG1.vue?vue&type=style&index=0&id=27556822&lang=css&scoped=true */ "./resources/js/components/contreanalyse/nsia/filiale/dc/DC-ENGG1.vue?vue&type=style&index=0&id=27556822&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DC_ENGG1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _DC_ENGG1_vue_vue_type_template_id_27556822_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _DC_ENGG1_vue_vue_type_template_id_27556822_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "27556822",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/contreanalyse/nsia/filiale/dc/DC-ENGG1.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/dc/DC-ENGG1.vue?vue&type=script&lang=js":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/dc/DC-ENGG1.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_ENGG1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DC-ENGG1.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dc/DC-ENGG1.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_ENGG1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/dc/DC-ENGG1.vue?vue&type=style&index=0&id=27556822&lang=css&scoped=true":
/*!************************************************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/dc/DC-ENGG1.vue?vue&type=style&index=0&id=27556822&lang=css&scoped=true ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_ENGG1_vue_vue_type_style_index_0_id_27556822_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DC-ENGG1.vue?vue&type=style&index=0&id=27556822&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dc/DC-ENGG1.vue?vue&type=style&index=0&id=27556822&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/dc/DC-ENGG1.vue?vue&type=template&id=27556822&scoped=true":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/dc/DC-ENGG1.vue?vue&type=template&id=27556822&scoped=true ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_ENGG1_vue_vue_type_template_id_27556822_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_ENGG1_vue_vue_type_template_id_27556822_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DC_ENGG1_vue_vue_type_template_id_27556822_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DC-ENGG1.vue?vue&type=template&id=27556822&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dc/DC-ENGG1.vue?vue&type=template&id=27556822&scoped=true");


/***/ })

}]);