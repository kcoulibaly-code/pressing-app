"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_forms_afg_contre_etude_corporate_NS-AC2_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/contre_etude_corporate/NS-AC2.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/contre_etude_corporate/NS-AC2.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../helpers/helper */ "./resources/js/helpers/helper.js");
/* harmony import */ var _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vueform/multiselect/dist/multiselect.vue2 */ "./node_modules/@vueform/multiselect/dist/multiselect.vue2.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../helpers/indexedDB */ "./resources/js/helpers/indexedDB.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_helpers_indexedDB__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shared_MonthInput_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/MonthInput.vue */ "./resources/js/components/shared/MonthInput.vue");
/* harmony import */ var _services_afg_f8_constants_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/afg/f8-constants.js */ "./resources/js/services/afg/f8-constants.js");
/* provided dependency */ var process = __webpack_require__(/*! process/browser.js */ "./node_modules/process/browser.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }








// import TAMOR from "../carcasse_ppo/TAMOR.vue"
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
  name: "historique-renseignements",
  display: "Historique_renseignements",
  components: {
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.ChevronDownIcon,
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.TrashIcon,
    AirplayIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.AirplayIcon,
    BookOpenIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.BookOpenIcon,
    Multiselect: _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_2__["default"],
    MonthInput: _shared_MonthInput_vue__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  computed: {},
  props: {
    meta_data: Object,
    tb_name: String,
    tb_display_name: String
  },
  created: function created() {},
  mounted: function mounted() {
    this.loadRetrieved();
    this.loadTbAttrs();
    this.tableClosedOrOpened();
    // this.banqueData();
    this.calculateTotals();
  },
  data: function data() {
    var vm = this;
    return {
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__["default"].host,
      authcheck: false,
      authcheckUsr: null,
      authcheckStatus: null,
      seen: true,
      seen2: false,
      seen3: false,
      seen4: false,
      seen5: false,
      isLoading: false,
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
      meta_parseable: {
        cred_pub_key: this.meta_data["cred_pub_key"],
        tb_name: this.tb_name,
        type_table: null
      },
      formDataToBeWatched: {
        notes: [],
        mouvement_confies: [],
        commentaire_fctmt_cmpte: "",
        relations_groupe: [],
        lignes_existantes1: [],
        total_caisse_ligne_existante_encours1: "0",
        ligne_communique_signatures: [],
        total_communique_signature_encours: "",
        commentaire_lignes_clients: ""
      },
      listingNote: false,
      filiale_client: '',
      mouvement_confies: [],
      mouvement_confreres: [],
      banques: "",
      n: 3,
      relations_groupe: [{
        "filiale": "",
        "lines": [{
          "societe": "",
          "type_ligne": "",
          "autorisation": "",
          "encours": "",
          "echeance": "",
          "garantie": "",
          "mvts_confies": ""
        }]
      }],
      filiale_afg: ["AFGB CI", "AFGB GA", "AFGB ML", "AFGB MG", "AFGB CM", "AFGB KM", "AFGB BJ"],
      f8Constants: _services_afg_f8_constants_js__WEBPACK_IMPORTED_MODULE_7__["default"],
      lignes_existantes1: [{
        ligne_mfcfa: "",
        banque: "",
        ligne_encours: 0,
        ligne_echeance: ""
      }],
      ligne_communique_signatures: [{
        ligne_mfcfa: "",
        banque: "",
        ligne_encours: 0,
        ligne_echeance: ""
      }]
    };
  },
  methods: _defineProperty({
    openKetri: function openKetri() {
      EventBus.$emit('open-ketri', ['/images/capture_afg/exemples/contretude/historique_compte.png', '/images/capture_afg/exemples/contretude/historique_compte2.png']);
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
        _cache = new (_helpers_indexedDB__WEBPACK_IMPORTED_MODULE_5___default())({
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
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var data, timeSpentInSeconds;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
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
              _context.next = 5;
              return _cache.upsert(documentId, data);
            case 5:
              if (_lastSaveTime != null) {
                // Last save time exists
                timeSpentInSeconds = (Date.now() - _lastSaveTime) / 1000; // Upload data to serve, update last save and clear cache when interval timeout
                if (timeSpentInSeconds >= _onlineSaveIntervalTimeInSeconds) {
                  _this.uploadDataToServerAndUpdateLastSave(newVal, oldVal);
                }
              }
              // First upload
              if (!_lastSaveTime) {
                _this.uploadDataToServerAndUpdateLastSave(newVal, oldVal);
              }
            case 7:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    /**
     * does exactly what the long ass name says lol
     * @param  {Object} newVal updated form data
     * @param  {Object} oldVal old form data
     * @return {void}
     */
    uploadDataToServerAndUpdateLastSave: function uploadDataToServerAndUpdateLastSave(newVal, oldVal) {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (_DEBUG) console.log(">> uploadDataToServerAndUpdateLastSave");
              _context2.prev = 1;
              if (_DEBUG) console.log(">> this.autosaving");
              _context2.next = 5;
              return _this2.autosaving(newVal, oldVal);
            case 5:
              // Update last save time
              _lastSaveTime = Date.now();
              // ! DONOT Clear cache
              // _cache.delete(documentId);
              if (_DEBUG) console.log("<< uploadDataToServerAndUpdateLastSave");
              _context2.next = 12;
              break;
            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](1);
              // TODO add error
              if (_DEBUG) console.error("xx uploadDataToServerAndUpdateLastSave", _context2.t0);
            case 12:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[1, 9]]);
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
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (_DEBUG) console.log(">> uploadDataToServerBeforePageCloses");
              _context3.prev = 1;
              _context3.next = 4;
              return _this3.autosaving(newVal, oldVal);
            case 4:
              // Update last save time
              _lastSaveTime = Date.now();
              // Clear cache
              _cache["delete"](documentId);
              if (_DEBUG) console.log("<< uploadDataToServerBeforePageCloses");
              _context3.next = 12;
              break;
            case 9:
              _context3.prev = 9;
              _context3.t0 = _context3["catch"](1);
              // TODO add error
              if (_DEBUG) console.error("xx uploadDataToServerBeforePageCloses", _context3.t0);
            case 12:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[1, 9]]);
      }))();
    },
    /**
     * does exactly what the name says
     * @return {void}
     */
    uploadDataToServerEvery30Seconds: function uploadDataToServerEvery30Seconds() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              // if (_DEBUG) console.log(">> uploadDataToServerEvery30Seconds", _timeSpentInSeconds);
              _timeSpentInSeconds++;
              if (!(_timeSpentInSeconds % 30 != 0)) {
                _context4.next = 3;
                break;
              }
              return _context4.abrupt("return");
            case 3:
              if (_DEBUG) console.log(">> uploadDataToServerEvery30Seconds", _timeSpentInSeconds);
              _context4.prev = 4;
              if (_DEBUG) console.log(">> uploadDataToServerEvery30Seconds >> autosaving", _timeSpentInSeconds);
              _context4.next = 8;
              return _this4.autosaving(_this4.formDataToBeWatched, _this4.formDataToBeWatched);
            case 8:
              // Update last save time
              _lastSaveTime = Date.now();
              // Clear cache ?
              // _cache.delete(documentId);
              if (_DEBUG) console.log("<< uploadDataToServerEvery30Seconds << autosaving");
              _context4.next = 15;
              break;
            case 12:
              _context4.prev = 12;
              _context4.t0 = _context4["catch"](4);
              // TODO add error
              if (_DEBUG) console.error("xx uploadDataToServerEvery30Seconds", _context4.t0);
            case 15:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[4, 12]]);
      }))();
    },
    setupCache: function setupCache() {
      if (_DEBUG) console.log(">> setupCache");
      // ? Upload data to server before the page/tab/browser closes
      // ! Only visibly works on page reload, for some reason
      window.addEventListener("beforeunload", this.beforePageIsClosed);
      // console.log("beforePageIsClosed subscribed");
    },
    beforePageIsClosed: function beforePageIsClosed(event) {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              event.preventDefault();
              event.returnValue = ""; // ! Won't work without this

              if (_DEBUG) console.log(">> beforePageIsClosed");
              // shows native popup
              // ! Only works on page reloads

              // Check if formDataToBeWatched is empty
              if (!_this5.formDataToBeWatched.is_deleted) {
                _context5.next = 5;
                break;
              }
              return _context5.abrupt("return");
            case 5:
              // Upload current (and arguably latest) formDataToBeWatched data

              _this5.uploadDataToServerAndUpdateLastSave(_this5.formDataToBeWatched, _this5.formDataToBeWatched);
              if (_DEBUG) console.log("<< beforePageIsClosed");
            case 7:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }))();
    },
    /**
     * adds an attribute to the formDataToBeWatched so that when it's deleted the pageunload callback doesn't refill it with empty values
     */
    updateFormDataForDeletion: function updateFormDataForDeletion() {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              if (_DEBUG) console.log(">> updateFormDataForDeletion");
              _this6.formDataToBeWatched.is_deleted = true;
              // Actually delete from cache
              _context6.next = 4;
              return _cache["delete"](documentId);
            case 4:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }))();
    },
    loadRetrieved: function loadRetrieved() {
      var _this$meta_data$dossi, _this$meta_data$dossi2, _this$meta_data$dossi3, _this$meta_data$dossi5;
      var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];
      var applied_templ_name = (_this$meta_data$dossi = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi.applied_templ_name;
      var tbArrays = this.determineCredPubTables(applied_templ_name, this.meta_data["dossier_credit"]);

      // Close table by default
      this.defaultRetract(false, (_this$meta_data$dossi2 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi2 === void 0 ? void 0 : _this$meta_data$dossi2.applied_templ_id);
      if (((_this$meta_data$dossi3 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi3 === void 0 ? void 0 : _this$meta_data$dossi3.caf_recorded_file) !== undefined) {
        var _this$meta_data$dossi4;
        this.filiale_client = (_this$meta_data$dossi4 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi4 === void 0 || (_this$meta_data$dossi4 = _this$meta_data$dossi4.caf_recorded_file) === null || _this$meta_data$dossi4 === void 0 ? void 0 : _this$meta_data$dossi4.filiale;
      }
      if (((_this$meta_data$dossi5 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi5 === void 0 ? void 0 : _this$meta_data$dossi5.doss_central_file_recorder) !== undefined) {
        var _this$meta_data$dossi6;
        this.filiale_client = (_this$meta_data$dossi6 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi6 === void 0 || (_this$meta_data$dossi6 = _this$meta_data$dossi6.caf_recorded_file) === null || _this$meta_data$dossi6 === void 0 ? void 0 : _this$meta_data$dossi6.filiale;
      }
      if (this.meta_data["dossier_credit"][createdKey] == undefined) {
        var _this$meta_data$dossi7, _cred_pub_tb_11$mouve, _cred_pub_tb_11$mouve2;
        var cred_pub_tb_11 = (_this$meta_data$dossi7 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi7 === void 0 ? void 0 : _this$meta_data$dossi7['cred_pub_tb_11'];
        console.log({
          "F11": cred_pub_tb_11
        });
        var cred_pub_tb_7 = this.meta_data["dossier_credit"]['cred_pub_tb_7'];
        if ((cred_pub_tb_11 === null || cred_pub_tb_11 === void 0 || (_cred_pub_tb_11$mouve = cred_pub_tb_11.mouvement_confies) === null || _cred_pub_tb_11$mouve === void 0 ? void 0 : _cred_pub_tb_11$mouve.length) > 0) {
          var _this$mouvement_confi;
          this.mouvement_confies = cred_pub_tb_11 === null || cred_pub_tb_11 === void 0 ? void 0 : cred_pub_tb_11.mouvement_confies;
          // console.log(">this.mouvement_confies",this.mouvement_confies);
          this.mouvement_confies = this.mouvement_confies.map(function (ed) {
            return _objectSpread(_objectSpread({}, ed), {}, {
              comeFrom: 'tb_11'
            });
          });
          var confies_banques = (_this$mouvement_confi = this.mouvement_confies) === null || _this$mouvement_confi === void 0 ? void 0 : _this$mouvement_confi.map(function (mouvement) {
            return mouvement === null || mouvement === void 0 ? void 0 : mouvement.banque;
          });
          this.banques = confies_banques;
          this.formDataToBeWatched.commentaire_fctmt_cmpte = cred_pub_tb_11 === null || cred_pub_tb_11 === void 0 ? void 0 : cred_pub_tb_11.commentaire_mouvement_confie;
          this.handleInput();
          // this.formDataToBeWatched['mouvement_confies'] = this.mouvement_confies;
        } else {
          this.initializeData();
        }
        if ((cred_pub_tb_11 === null || cred_pub_tb_11 === void 0 || (_cred_pub_tb_11$mouve2 = cred_pub_tb_11.mouvement_confreres) === null || _cred_pub_tb_11$mouve2 === void 0 ? void 0 : _cred_pub_tb_11$mouve2.length) > 0) {
          this.mouvement_confreres = cred_pub_tb_11 === null || cred_pub_tb_11 === void 0 ? void 0 : cred_pub_tb_11.mouvement_confreres;
          this.mouvement_confreres = this.mouvement_confreres.map(function (ed) {
            return _objectSpread(_objectSpread({}, ed), {}, {
              comeFrom: 'tb_11'
            });
          });
          this.handleInput();
        }
        if ((cred_pub_tb_7 === null || cred_pub_tb_7 === void 0 ? void 0 : cred_pub_tb_7.lignes_existantes1) != "") {
          this.lignes_existantes1 = cred_pub_tb_7 === null || cred_pub_tb_7 === void 0 ? void 0 : cred_pub_tb_7.lignes_existantes1.map(function (item) {
            return _objectSpread({}, item);
          });
          this.formDataToBeWatched['lignes_existantes1'] = this.lignes_existantes1;
        }
        if ((cred_pub_tb_7 === null || cred_pub_tb_7 === void 0 ? void 0 : cred_pub_tb_7.ligne_communique_signatures) != "") {
          this.ligne_communique_signatures = cred_pub_tb_7 === null || cred_pub_tb_7 === void 0 ? void 0 : cred_pub_tb_7.ligne_communique_signatures.map(function (item) {
            return _objectSpread({}, item);
          });
          this.formDataToBeWatched['ligne_communique_signatures'] = this.ligne_communique_signatures;
        }
      }
      if (lentb.length > 0) {
        console.log("Key", createdKey);
        console.log("dossier", this.meta_data["dossier_credit"]);
        if (this.meta_data["dossier_credit"][createdKey] != undefined) {
          this.formDataToBeWatched = this.meta_data["dossier_credit"][createdKey];
          if (this.meta_data["dossier_credit"][createdKey]["mouvement_confies"] != "") {
            var _this$mouvement_confi2;
            this.mouvement_confies = this.meta_data["dossier_credit"][createdKey]["mouvement_confies"];
            var _confies_banques = (_this$mouvement_confi2 = this.mouvement_confies) === null || _this$mouvement_confi2 === void 0 ? void 0 : _this$mouvement_confi2.map(function (mouvement) {
              return mouvement === null || mouvement === void 0 ? void 0 : mouvement.banque;
            });
            this.banques = _confies_banques;
          }
          if (this.meta_data["dossier_credit"][createdKey]["relations_groupe"].length > 0) {
            this.relations_groupe = this.meta_data["dossier_credit"][createdKey]["relations_groupe"];
          }
          if (this.meta_data["dossier_credit"][createdKey]["lignes_existantes1"].length > 0) {
            this.lignes_existantes1 = this.meta_data["dossier_credit"][createdKey]["lignes_existantes1"].map(function (item) {
              return _objectSpread(_objectSpread({}, item), {}, {
                is_added: false // Ajout de la clé is_added à false pour les données existantes
              });
            });
          }
          if (this.meta_data["dossier_credit"][createdKey]["ligne_communique_signatures"].length > 0) {
            this.ligne_communique_signatures = this.meta_data["dossier_credit"][createdKey]["ligne_communique_signatures"].map(function (item) {
              return _objectSpread(_objectSpread({}, item), {}, {
                is_added: false // Ajout de la clé is_added à false pour les données existantes
              });
            });
          }
        }
      }
    },
    loadTbAttrs: function loadTbAttrs() {
      var l = [];
      var topdivel = this.$refs.topdiv;
      var k = document.querySelectorAll(".subdiv" + this.tb_name);
      k.forEach(function (e) {
        l.push(e.innerText);
      });
      var p = {
        name_of_title: topdivel.innerText,
        list_of_content: l,
        id: "f1-head"
      };
      this.$emit("load-buffer", p);
    },
    tableClosedOrOpened: function tableClosedOrOpened() {
      this.seen = this.fetchClosedTables(this.tb_name + this.meta_data["cred_pub_key"]);
    },
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
    retract: function retract() {
      this.seen = !this.seen;
      var a = {
        tb_name: this.tb_name + this.meta_data["cred_pub_key"],
        status: this.seen
      };
      EventBus.$emit("savedclosed-table", a);
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
          // this.launchScoringTable("organisation");
          // this.launchScoringTable();
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
    openNotesModal: function openNotesModal() {
      var listing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.listingNote = listing;
      this.$modal.show(this.tb_name);
    },
    handleInput: function handleInput() {
      var _this7 = this;
      this.formDataToBeWatched["mouvement_confies"] = this.mouvement_confies;
      this.formDataToBeWatched["mouvement_confreres"] = this.mouvement_confreres;
      var years = Array.from({
        length: this.n
      }, function (_, i) {
        return "n".concat(_this7.n - i - 1);
      });
      var processMouvements = function processMouvements(mouvements) {
        mouvements.forEach(function (mouvement) {
          years.forEach(function (year) {
            var _mouvement$mouvementK, _mouvement$caKey;
            var mvtCaKey = "mvt_ca_".concat(year);
            var mouvementKey = "mouvement_".concat(year);
            var caKey = "ca_".concat(year);
            var mouvementValue = (_mouvement$mouvementK = mouvement[mouvementKey]) !== null && _mouvement$mouvementK !== void 0 ? _mouvement$mouvementK : 0;
            var caValue = (_mouvement$caKey = mouvement[caKey]) !== null && _mouvement$caKey !== void 0 ? _mouvement$caKey : 1;
            mouvement[mvtCaKey] = _this7.divTwoNumbers(mouvementValue, caValue);
          });
        });
      };
      processMouvements(this.mouvement_confies);
      processMouvements(this.mouvement_confreres);
    },
    divTwoNumbers: function divTwoNumbers(a, b) {
      if (!b || b == "0") {
        b = 1;
      }
      var result = this.strToNum(a) / this.strToNum(b) * 100;
      return result;
    },
    strToNum: function strToNum(a) {
      if (/^0/g.test(a)) a = String(a).replace(/^0/g, "");
      return Number(String(a).replace(/\s+/g, ""));
    },
    setMouvementConfieeVars: function setMouvementConfieeVars(event, index, key) {
      this.mouvement_confies[index][key] = event.target.value;
      this.handleInput();
    },
    addMoreMvt: function addMoreMvt() {
      var _this8 = this;
      var baseKeys = ["annee_tag", "annee", "mouvement", "ca", "mvt_ca", "solde_moyen", "date_creditrice_debut", "date_creditrice_fin"];
      var mouvement_confie = {
        banque: ""
      };
      var _loop = function _loop(i) {
        baseKeys.forEach(function (key) {
          if (key === "annee_tag") {
            mouvement_confie["".concat(key, "_").concat(i)] = "N - ".concat(_this8.n - i - 1);
          } else if (key.startsWith("date_creditrice")) {
            mouvement_confie["".concat(key, "_").concat(i)] = "";
          } else {
            mouvement_confie["".concat(key, "_").concat(i)] = 0;
          }
        });
      };
      for (var i = 0; i < this.n; i++) {
        _loop(i);
      }
      this.mouvement_confies.push(mouvement_confie);
      this.handleInput();
    },
    removeMvt: function removeMvt(index) {
      this.mouvement_confies.splice(index, 1);
      this.handleInput();
    },
    setMouvementConfieeVars2: function setMouvementConfieeVars2(event, index, key) {
      this.mouvement_confies[index][key] = event[1];
      this.handleInput();
    },
    formDataVars2: function formDataVars2(event, index, obj, key) {
      this[obj][index][key] = event[1];
      this.handleInput();
    },
    banqueData: function banqueData() {
      var _this9 = this;
      _services_credit_service__WEBPACK_IMPORTED_MODULE_4__["default"] === null || _services_credit_service__WEBPACK_IMPORTED_MODULE_4__["default"] === void 0 || _services_credit_service__WEBPACK_IMPORTED_MODULE_4__["default"].loadbank("COTE D'IVOIRE", "BK").then(function (res) {
        _this9.bankData(res);
      })["catch"](function (err) {
        console.log(err);
      });
    },
    bankData: function bankData(res) {
      this.banques = res.data;
    },
    initializeData: function initializeData() {
      var _this0 = this;
      var baseKeys = ["annee_tag", "annee", "mouvement", "ca", "mvt_ca", "solde_moyen", "date_creditrice_debut", "date_creditrice_fin"];
      var numberOfMouvements = 1;
      var _loop2 = function _loop2() {
        var mouvement_confie = {
          banque: ""
        };
        var _loop3 = function _loop3(i) {
          baseKeys.forEach(function (key) {
            if (key === "annee_tag") {
              var yearIndex = _this0.n - i - 1;
              mouvement_confie["".concat(key, "_").concat(i)] = yearIndex == 0 ? "N" : "N - ".concat(yearIndex);
            } else if (key.startsWith("date_creditrice")) {
              mouvement_confie["".concat(key, "_").concat(i)] = "";
            } else if (key !== "filiale" && key !== "banque") {
              mouvement_confie["".concat(key, "_").concat(i)] = 0;
            }
          });
        };
        for (var i = 0; i < _this0.n; i++) {
          _loop3(i);
        }
        _this0.mouvement_confies.push(mouvement_confie);
      };
      for (var j = 0; j < numberOfMouvements; j++) {
        _loop2();
      }
      this.handleInput();
    },
    addMoreRelation: function addMoreRelation() {
      var relation = {
        "filiale": "",
        "lines": [{
          "societe": "",
          "type_ligne": "",
          "autorisation": "",
          "encours": "",
          "echeance": "",
          "garantie": "",
          "mvts_confies": ""
        }]
      };
      this.relations_groupe.push(relation);
      this.formDataToBeWatched['relations_groupe'] = this.relations_groupe;
    },
    removeRelation: function removeRelation(index) {
      this.relations_groupe.splice(index, 1);
      this.formDataToBeWatched['relations_groupe'] = this.relations_groupe;
    },
    formDataVars1: function formDataVars1(event, index, key) {
      var id = event.target.id; // "filiale"
      var value = event.target.value;
      this[key][index][id] = value;
      this.formDataToBeWatched[key] = this[key];
    },
    handleInput1: function handleInput1(event, indexParent, indexChild, key, objName) {
      var value = event.target.value;
      this.$set(this[objName][indexParent]['lines'][indexChild], key, value);
      this.formDataToBeWatched[objName] = this[objName];
    },
    handleInput2: function handleInput2(event, indexParent, indexChild, key, objName) {
      var value = event[1];
      this.$set(this[objName][indexParent]['lines'][indexChild], key, value);
      this.formDataToBeWatched[objName] = this[objName];
    },
    addMoreLineRelation: function addMoreLineRelation(indexParent) {
      var line = {
        "societe": "",
        "type_ligne": "",
        "autorisation": "",
        "encours": "",
        "echeance": "",
        "garantie": "",
        "mvts_confies": ""
      };
      this.relations_groupe[indexParent].lines.push(line);
      this.formDataToBeWatched['relations_groupe'] = this.relations_groupe;
    },
    removeLineRelation: function removeLineRelation(indexParent, indexChild) {
      this.relations_groupe[indexParent].lines.splice(indexChild, 1);
      this.formDataToBeWatched['relations_groupe'] = this.relations_groupe;
    },
    setLigneExistanteVars1: function setLigneExistanteVars1(event, index, key) {
      this.lignes_existantes1[index][key] = event[1];
      this.calculateTotals();
      this.handleInputUpdate();
    },
    setLigneCommuniqueVars1: function setLigneCommuniqueVars1(event, index, key) {
      this.ligne_communique_signatures[index][key] = event[1];
      this.calculateTotals();
      this.handleInputUpdate();
    },
    handleInputUpdate: function handleInputUpdate(evt, index) {
      this.formDataToBeWatched["lignes_existantes1"] = this.lignes_existantes1;
      this.formDataToBeWatched.total_caisse_ligne_existante_encours1 = this.somX3(this.lignes_existantes1, "ligne_encours");
      this.formDataToBeWatched["ligne_communique_signatures"] = this.ligne_communique_signatures;
      this.formDataToBeWatched.total_communique_signature_encours = this.somX3(this.ligne_communique_signatures, "ligne_encours");
      this.formDataToBeWatched.total_ligne_communique = this.formDataToBeWatched.total_caisse_ligne_existante_encours1 + this.formDataToBeWatched.total_communique_signature_encours;
    },
    addMore1: function addMore1() {
      this.lignes_existantes1.push({
        ligne_mfcfa: "",
        banque: "",
        ligne_encours: 0,
        ligne_echeance: "",
        is_added: true
      });
    },
    remove1: function remove1(index) {
      this.lignes_existantes1.splice(index, 1);
      this.calculateTotals();
      this.handleInputUpdate();
    },
    addMore4: function addMore4() {
      this.ligne_communique_signatures.push({
        ligne_mfcfa: "",
        banque: "",
        ligne_encours: 0,
        ligne_echeance: "",
        is_added: true
      });
    },
    remove4: function remove4(index) {
      this.ligne_communique_signatures.splice(index, 1);
      this.calculateTotals();
      this.handleInput();
    },
    somX3: function somX3(ob, key) {
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
    formDataVars: function formDataVars(event) {
      this.formDataToBeWatched[event[0]] = event[1];
    },
    calculateTotals: function calculateTotals() {
      // Calcul du sous-total pour caisse
      this.formDataToBeWatched.total_caisse_ligne_existante_encours1 = this.lignes_existantes1.reduce(function (sum, ligne) {
        var encoursStr = String(ligne.ligne_encours).trim().replace(/\s/g, ''); // Supprime tous les espaces
        var encours = parseFloat(encoursStr) || 0;
        return sum + encours;
      }, 0);

      // Calcul du sous-total pour signature
      this.formDataToBeWatched.total_communique_signature_encours = this.ligne_communique_signatures.reduce(function (sum, ligne) {
        var encoursStr = String(ligne.ligne_encours).trim().replace(/\s/g, ''); // Supprime tous les espaces
        var encours = parseFloat(encoursStr) || 0;
        return sum + encours;
      }, 0);

      // Calcul du total global
      this.formDataToBeWatched.total_ligne_communique = this.formDataToBeWatched.total_caisse_ligne_existante_encours1 + this.formDataToBeWatched.total_communique_signature_encours;
    },
    getMouvementConfiesBanques: function getMouvementConfiesBanques() {
      var _this$mouvement_confi3;
      var confies_banques = (_this$mouvement_confi3 = this.mouvement_confies) === null || _this$mouvement_confi3 === void 0 ? void 0 : _this$mouvement_confi3.map(function (mouvement) {
        return mouvement === null || mouvement === void 0 ? void 0 : mouvement.banque;
      });
      this.banques = confies_banques;
    }
  }, "initializeData", function initializeData() {
    var _this1 = this;
    var baseKeys = ["filiale", "banque", "annee_tag", "annee", "mouvement", "ca", "mvt_ca", "solde_moyen", "date_creditrice_debut", "date_creditrice_fin"];
    var baseKeysConfrere = ["banque", "annee_tag", "annee", "mouvement", "ca", "mvt_ca", "solde_moyen", "date_creditrice_debut", "date_creditrice_fin"];
    var numberOfMouvements = 1;

    // Initialize mouvement_confies
    var _loop4 = function _loop4() {
      var mouvement_confie = {
        filiale: _this1.filiale_afg[0],
        banque: "AFG Bank"
      };
      var _loop5 = function _loop5(i) {
        baseKeys.forEach(function (key) {
          if (key === "annee_tag") {
            var yearIndex = _this1.n - i - 1;
            mouvement_confie["".concat(key, "_").concat(i)] = yearIndex == 0 ? "N" : "N - ".concat(yearIndex);
          } else if (key.startsWith("date_creditrice")) {
            mouvement_confie["".concat(key, "_").concat(i)] = "";
          } else if (key !== "filiale" && key !== "banque") {
            mouvement_confie["".concat(key, "_").concat(i)] = 0;
          }
        });
      };
      for (var i = 0; i < _this1.n; i++) {
        _loop5(i);
      }
      _this1.mouvement_confies.push(mouvement_confie);
    };
    for (var j = 0; j < numberOfMouvements; j++) {
      _loop4();
    }
    this.handleInput();
  }),
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/MonthInput.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/MonthInput.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "DateInput",
  props: {
    id: {
      type: String,
      require: false
    },
    value: {
      type: String,
      "default": ""
    },
    readonly: {
      type: Boolean,
      "default": false
    },
    viewonly: {
      type: Boolean,
      "default": false
    },
    defaultTyping: {
      type: Boolean,
      "default": true
    },
    background: "",
    color: "",
    classname: ""
  },
  data: function data() {
    return {
      day: "",
      // year: "",
      date: "",
      days: 31,
      month: "",
      min_day: 1,
      max_day: 31,
      readonly_: false,
      firstCall: false,
      today: new Date(),
      months: [{
        intitule: 'Janvier',
        value: '01'
      }, {
        intitule: 'Février',
        value: '02'
      }, {
        intitule: 'Mars',
        value: '03'
      }, {
        intitule: 'Avril',
        value: '04'
      }, {
        intitule: 'Mai',
        value: '05'
      }, {
        intitule: 'Juin',
        value: '06'
      }, {
        intitule: 'Juillet',
        value: '07'
      }, {
        intitule: 'Août',
        value: '08'
      }, {
        intitule: 'Septembre',
        value: '09'
      }, {
        intitule: 'Octobre',
        value: '10'
      }, {
        intitule: 'Novembre',
        value: '11'
      }, {
        intitule: 'Décembre',
        value: '12'
      }]
    };
  },
  mounted: function mounted() {
    if (this.viewonly) {
      this.readonly_ = this.viewonly;
    } else {
      this.readonly_ = this.readonly;
    }
    if (this.value != "") {
      this.defaultValue(this.value);
    }
  },
  computed: {
    days_: function days_() {
      var d = [];
      for (var i = 0; i < this.days; i++) {
        d.push(i + 1);
      }
      return d;
    }
  },
  methods: {
    updatedMonthOrDay: function updatedMonthOrDay() {
      this.handleInput();
    },
    handleInput: function handleInput() {
      var _this$month, _this$month2, _this$month3, _this$day;
      if (((_this$month = this.month) === null || _this$month === void 0 || (_this$month = _this$month.value) === null || _this$month === void 0 ? void 0 : _this$month.toString()) == "02") {
        this.max_day = "28";
      } else if (["04", "06", "09", "11"].includes((_this$month2 = this.month) === null || _this$month2 === void 0 || (_this$month2 = _this$month2.value) === null || _this$month2 === void 0 ? void 0 : _this$month2.toString())) {
        this.max_day = "30";
      } else {
        this.max_day = "31";
      }
      if (Number(this.day) > this.max_day) {
        this.day = this.max_day;
      }
      if (((_this$month3 = this.month) === null || _this$month3 === void 0 || (_this$month3 = _this$month3.value) === null || _this$month3 === void 0 ? void 0 : _this$month3.toString()) != undefined && ((_this$day = this.day) === null || _this$day === void 0 ? void 0 : _this$day.toString()) != '') {
        var _this$day2, _this$month$value;
        this.day = Number((_this$day2 = this.day) === null || _this$day2 === void 0 ? void 0 : _this$day2.toString().replace(/\s/g, ''));
        var d = this.day < 10 ? '0' + this.day : this.day.toString();
        this.date = d + '-' + ((_this$month$value = this.month.value) === null || _this$month$value === void 0 ? void 0 : _this$month$value.toString());
      }
      this.emitValue();
    },
    lastday: function lastday(m) {
      return new Date(new Date().getFullYear(), m, 0).getDate();
    },
    defaultValue: function defaultValue(val) {
      var _this = this;
      val = [null, undefined].includes(val) ? "" : val;
      var split_date = val.split('-');
      if (split_date.length == 2) {
        var _split_date$;
        this.day = Number((_split_date$ = split_date[0]) === null || _split_date$ === void 0 ? void 0 : _split_date$.toString().replace(/\s/g, ''));
        var m = split_date[1];
        this.months.forEach(function (el) {
          if (el.value == m) {
            _this.month = el;
          }
        });
        this.date = val;
      }
    },
    emitValue: function emitValue() {
      if (this.defaultTyping) {
        this.$emit('input', [this.id, this.date, true]);
        this.$emit('change', [this.id, this.date, true]);
      } else {
        this.$emit('input', this.date);
        this.$emit('change', this.date);
      }
    }
  },
  watch: {
    value: function value(newVal) {
      if (newVal == '') {
        this.day = '';
        this.date = '';
        this.month = '';
      }
      this.defaultValue(newVal);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/contre_etude_corporate/NS-AC2.vue?vue&type=template&id=1487621c&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/contre_etude_corporate/NS-AC2.vue?vue&type=template&id=1487621c&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "card card-width-height"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc pb-0 pt-2"
  }, [_c("h3", {
    ref: "topdiv",
    staticClass: "head",
    attrs: {
      id: "f1-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Historique du compte et renseignements bancaires\n                        ")]), _vm._v(" "), _c("div", {
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
      size: "0.7x"
    },
    on: {
      click: _vm.openKetri
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
  }, [_vm.seen2 ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen2 = !_vm.seen2;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "fct_cpte_1"
    }
  }, [_vm._v("\n                                Antécédent " + _vm._s(_vm.filiale_client) + " : (Fonctionnement du compte/ Incidents/ Mouvements confiés)\n                                "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "table-responsive",
    attrs: {
      id: "tabfct_cmpte"
    }
  }, _vm._l(_vm.mouvement_confies, function (mouvement_confie, index) {
    return _c("div", {
      key: index
    }, [_c("table", {
      staticClass: "table table-bordered"
    }, [_c("thead", [_c("tr", {
      staticClass: "bg-grey"
    }, [_vm._m(0, true), _vm._v(" "), _c("td", {
      attrs: {
        colspan: "2"
      }
    }, [_c("div", {
      staticClass: "d-flex align-items-baseline"
    }, [mouvement_confie.comeFrom == "tb_11" ? _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: mouvement_confie.banque,
        expression: "mouvement_confie.banque"
      }],
      staticClass: "form-control",
      staticStyle: {
        "margin-right": "5px"
      },
      attrs: {
        type: "text",
        disabled: "",
        readonly: ""
      },
      domProps: {
        value: mouvement_confie.banque
      },
      on: {
        input: [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(mouvement_confie, "banque", $event.target.value);
        }, function ($event) {
          return _vm.setMouvementConfieeVars($event, index, "banque");
        }]
      }
    }) : _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: mouvement_confie.banque,
        expression: "mouvement_confie.banque"
      }],
      staticClass: "form-control",
      staticStyle: {
        "margin-right": "5px"
      },
      attrs: {
        type: "text",
        placeholder: "Saisir une banque"
      },
      domProps: {
        value: mouvement_confie.banque
      },
      on: {
        input: [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(mouvement_confie, "banque", $event.target.value);
        }, function ($event) {
          return _vm.setMouvementConfieeVars($event, index, "banque");
        }]
      }
    })])]), _vm._v(" "), _vm._m(1, true), _vm._v(" "), _c("td", {
      attrs: {
        colspan: "2"
      }
    }, [_c("div", {
      staticClass: "d-flex align-items-baseline"
    }, [mouvement_confie.comeFrom == "tb_11" ? _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: mouvement_confie.filiale,
        expression: "mouvement_confie.filiale"
      }],
      staticClass: "form-control",
      staticStyle: {
        "margin-right": "5px"
      },
      attrs: {
        type: "text",
        disabled: "",
        readonly: ""
      },
      domProps: {
        value: mouvement_confie.filiale
      },
      on: {
        input: [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(mouvement_confie, "filiale", $event.target.value);
        }, function ($event) {
          return _vm.setMouvementConfieeVars($event, index, "filiale");
        }]
      }
    }) : _c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: mouvement_confie.filiale,
        expression: "mouvement_confie.filiale"
      }],
      staticClass: "form-select single-select",
      "class": {
        comeFrom: mouvement_confie.comeFrom == "tb_11"
      },
      staticStyle: {
        "margin-right": "5px"
      },
      attrs: {
        type: "text",
        id: "filiale_place"
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(mouvement_confie, "filiale", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          return _vm.setMouvementConfieeVars($event, index, "filiale");
        }]
      }
    }, _vm._l(_vm.filiale_afg, function (filiale, i) {
      return _c("option", {
        key: i,
        domProps: {
          value: filiale
        }
      }, [_vm._v("\n                                                                    " + _vm._s(filiale) + "\n                                                                ")]);
    }), 0), _vm._v(" "), _c("div", {
      staticClass: "d-flex"
    }, [index == 0 ? _c("div", {}, [_c("button", {
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
        title: "Ajouter un nouvel article"
      },
      on: {
        click: function click($event) {
          return _vm.addMoreMvt(index);
        }
      }
    }, [_c("plus-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)]) : _c("div", [_c("button", {
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
        title: "Supprimer cette action"
      },
      on: {
        click: function click($event) {
          return _vm.removeMvt(index);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)])])])])]), _vm._v(" "), _vm._m(2, true), _vm._v(" "), _vm._m(3, true)]), _vm._v(" "), _c("tbody", _vm._l(mouvement_confie, function (value, key) {
      return key.startsWith("annee_") && mouvement_confie[key.replace("annee", "annee_tag")] ? _c("tr", {
        key: "row_".concat(index, "_").concat(key)
      }, [_c("td", {
        staticStyle: {
          "align-content": "center"
        }
      }, [_c("input-group", {
        staticStyle: {
          "min-width": "50px"
        },
        scopedSlots: _vm._u([{
          key: "input",
          fn: function fn() {
            return [_c("input", {
              directives: [{
                name: "model",
                rawName: "v-model",
                value: mouvement_confie[key],
                expression: "mouvement_confie[key]"
              }],
              staticClass: "form-control",
              "class": {
                comeFrom: mouvement_confie.comeFrom == "tb_11"
              },
              attrs: {
                type: "text",
                maxlength: "4"
              },
              domProps: {
                value: mouvement_confie[key]
              },
              on: {
                input: [function ($event) {
                  if ($event.target.composing) return;
                  _vm.$set(mouvement_confie, key, $event.target.value);
                }, function ($event) {
                  return _vm.setMouvementConfieeVars($event, index, key);
                }]
              }
            })];
          },
          proxy: true
        }, {
          key: "right",
          fn: function fn() {
            return [_vm._v("\n                                                            " + _vm._s(mouvement_confie[key.replace("annee", "annee_tag")]) + "\n                                                        ")];
          },
          proxy: true
        }], null, true)
      })], 1), _vm._v(" "), _c("td", {
        staticStyle: {
          "align-content": "center"
        }
      }, [_c("currency-input", {
        staticClass: "form-control number inputmaxwidth",
        "class": {
          comeFrom: mouvement_confie.comeFrom == "tb_11"
        },
        staticStyle: {
          "min-width": "100px !important"
        },
        attrs: {
          value: mouvement_confie[key.replace("annee", "mouvement")],
          required: "",
          type: "text"
        },
        on: {
          input: function input($event) {
            _vm.setMouvementConfieeVars2($event, index, key.replace("annee", "mouvement"));
          }
        }
      })], 1), _vm._v(" "), _c("td", {
        staticStyle: {
          "align-content": "center"
        }
      }, [_c("currency-input", {
        staticClass: "form-control",
        "class": {
          comeFrom: mouvement_confie.comeFrom == "tb_11"
        },
        staticStyle: {
          "min-width": "150px !important"
        },
        attrs: {
          value: mouvement_confie[key.replace("annee", "ca")],
          required: "",
          type: "text"
        },
        on: {
          input: function input($event) {
            _vm.setMouvementConfieeVars2($event, index, key.replace("annee", "ca"));
          }
        }
      })], 1), _vm._v(" "), _c("td", {
        staticStyle: {
          "align-content": "center"
        }
      }, [_c("currency-input", {
        staticClass: "form-control",
        "class": {
          comeFrom: mouvement_confie.comeFrom == "tb_11"
        },
        staticStyle: {
          "min-width": "150px !important"
        },
        attrs: {
          step: "0.001",
          "float": "",
          value: mouvement_confie[key.replace("annee", "mvt_ca")],
          required: "",
          type: "text"
        },
        on: {
          input: function input($event) {
            _vm.setMouvementConfieeVars2($event, index, key.replace("annee", "mvt_ca"));
          }
        }
      })], 1), _vm._v(" "), _c("td", {
        staticStyle: {
          "align-content": "center"
        }
      }, [_c("currency-input", {
        staticClass: "form-control",
        "class": {
          comeFrom: mouvement_confie.comeFrom == "tb_11"
        },
        staticStyle: {
          "min-width": "150px !important"
        },
        attrs: {
          value: mouvement_confie[key.replace("annee", "solde_moyen")],
          required: "",
          type: "text"
        },
        on: {
          input: function input($event) {
            _vm.setMouvementConfieeVars2($event, index, key.replace("annee", "solde_moyen"));
          }
        }
      })], 1), _vm._v(" "), _c("td", {
        staticClass: "td-flex"
      }, [_c("input-group", {
        staticStyle: {
          "flex-wrap": "nowrap"
        },
        scopedSlots: _vm._u([{
          key: "left",
          fn: function fn() {
            return [_vm._v("Du")];
          },
          proxy: true
        }, {
          key: "input",
          fn: function fn() {
            return [_c("month-input", {
              attrs: {
                value: mouvement_confie[key.replace("annee", "date_creditrice_debut")],
                background: mouvement_confie.comeFrom == "tb_11" ? "background:#00ffff21" : "",
                color: mouvement_confie.comeFrom == "tb_11" ? "color:#57606f" : ""
              },
              on: {
                input: function input($event) {
                  _vm.formDataVars2($event, index, "mouvement_confies", key.replace("annee", "date_creditrice_debut"));
                }
              }
            })];
          },
          proxy: true
        }], null, true)
      }), _vm._v(" "), _c("br"), _vm._v(" "), _c("input-group", {
        staticStyle: {
          "flex-wrap": "nowrap"
        },
        scopedSlots: _vm._u([{
          key: "left",
          fn: function fn() {
            return [_vm._v("Au")];
          },
          proxy: true
        }, {
          key: "input",
          fn: function fn() {
            return [_c("month-input", {
              attrs: {
                value: mouvement_confie[key.replace("annee", "date_creditrice_fin")],
                background: mouvement_confie.comeFrom == "tb_11" ? "background:#00ffff21" : "",
                color: mouvement_confie.comeFrom == "tb_11" ? "color:#57606f" : ""
              },
              on: {
                input: function input($event) {
                  _vm.formDataVars2($event, index, "mouvement_confies", key.replace("annee", "date_creditrice_fin"));
                }
              }
            })];
          },
          proxy: true
        }], null, true)
      })], 1)]) : _vm._e();
    }), 0)])]);
  }), 0), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 mb-4 mt-4"
  }, [_vm._m(4), _vm._v(" "), _c("vue-editor", {
    attrs: {
      maximum: 1000,
      id: "fct_compt_coment"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.commentaire_fctmt_cmpte,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "commentaire_fctmt_cmpte", $$v);
      },
      expression: "formDataToBeWatched.commentaire_fctmt_cmpte"
    }
  })], 1)])]) : _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen2 = !_vm.seen2;
      }
    }
  }, [_c("h6", {
    attrs: {
      id: "fct_cpte_2"
    }
  }, [_vm._v("\n                                Antécédent " + _vm._s(_vm.filiale_client) + " : (Fonctionnement du compte/ Incidents/ Mouvements confiés)\n                                "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])]), _vm._v(" "), _vm.seen4 ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen4 = !_vm.seen4;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name
  }, [_vm._v("\n                                Relations avec le Pool Bancaire (Lignes communiquées par le client)\n                                "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(5), _vm._v(" "), _c("tbody", [_vm._l(_vm.lignes_existantes1, function (ligne_existante, index) {
    return _c("tr", {
      key: index + "___"
    }, [_c("td", [_c("div", {
      staticClass: "d-flex position-relative align-items-center"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: ligne_existante.banque,
        expression: "ligne_existante.banque"
      }],
      staticClass: "form-control",
      style: ligne_existante.is_added ? "" : "background-color: #00ffff21; color: #57606f",
      attrs: {
        type: "text"
      },
      domProps: {
        value: ligne_existante.banque
      },
      on: {
        input: [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(ligne_existante, "banque", $event.target.value);
        }, _vm.handleInputUpdate]
      }
    }), _vm._v(" "), _vm.banques == "" || _vm.banques.length == 0 ? _c("span", {
      staticClass: "spinner-border spinner-border spinner-custom-input",
      staticStyle: {
        "margin-right": "8px"
      }
    }) : _vm._e()])]), _vm._v(" "), _c("td", [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: ligne_existante.ligne_mfcfa,
        expression: "ligne_existante.ligne_mfcfa"
      }],
      staticClass: "form-select",
      style: ligne_existante.is_added ? "" : "background-color: #00ffff21; color: #57606f",
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(ligne_existante, "ligne_mfcfa", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, _vm.handleInputUpdate]
      }
    }, [_c("option", {
      domProps: {
        value: ""
      }
    }), _vm._v(" "), _vm._l(_vm.f8Constants.tous_les_lignes, function (line, indexL) {
      return _c("option", {
        key: indexL + "4eg",
        domProps: {
          value: line.libelle
        }
      }, [_vm._v(_vm._s(line.libelle) + "\n                                                    ")]);
    }), _vm._v(" "), _c("optgroup", {
      attrs: {
        label: "--------------------------------"
      }
    }), _vm._v(" "), _c("option", {
      attrs: {
        value: "Mixte"
      }
    }, [_vm._v("Mixte")])], 2)]), _vm._v(" "), _c("td", [_c("currency-input", {
      style: ligne_existante.is_added ? "" : "background-color: #00ffff21; color: #57606f",
      attrs: {
        value: ligne_existante.ligne_encours
      },
      on: {
        input: function input($event) {
          return _vm.setLigneExistanteVars1($event, index, "ligne_encours");
        }
      }
    })], 1), _vm._v(" "), _c("td", [_c("date-input", {
      staticStyle: {
        width: "240px"
      },
      attrs: {
        value: ligne_existante.ligne_echeance,
        background: ligne_existante.is_added ? "" : "background-color: #00ffff21; color: #57606f"
      },
      on: {
        input: function input($event) {
          return _vm.setLigneExistanteVars1($event, index, "ligne_echeance");
        }
      }
    })], 1), _vm._v(" "), _c("td", [index == 0 ? _c("div", [_c("button", {
      staticStyle: {
        "background-color": "#2c3e50",
        color: "#ffffff",
        "border-radius": "15%",
        border: "none"
      },
      attrs: {
        type: "button",
        title: "Ajouter un nouvel article"
      },
      on: {
        click: function click($event) {
          return _vm.addMore1(index);
        }
      }
    }, [_c("plus-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)]) : _c("div", {
      staticStyle: {
        "margin-left": "0px",
        "margin-top": "5px"
      }
    }, [_c("button", {
      staticStyle: {
        "background-color": "transparent",
        border: "none"
      },
      attrs: {
        type: "button",
        title: "Supprimer cette action"
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
    })], 1)])])]);
  }), _vm._v(" "), _c("tr", [_vm._m(6), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      value: _vm.formDataToBeWatched.total_caisse_ligne_existante_encours1,
      id: "total_caisse_ligne_existante_encours1",
      disabled: ""
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("td", {
    attrs: {
      colspan: "2"
    }
  })])], 2)]), _vm._v(" "), _vm._m(7), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(8), _vm._v(" "), _c("tbody", [_vm._l(_vm.ligne_communique_signatures, function (ligne_communique, index) {
    return _c("tr", {
      key: index + "_____"
    }, [_c("td", [_c("div", {
      staticClass: "d-flex position-relative align-items-center"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: ligne_communique.banque,
        expression: "ligne_communique.banque"
      }],
      staticClass: "form-control",
      style: ligne_communique.is_added ? "" : "background-color: #00ffff21; color: #57606f",
      attrs: {
        type: "text"
      },
      domProps: {
        value: ligne_communique.banque
      },
      on: {
        input: [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(ligne_communique, "banque", $event.target.value);
        }, _vm.handleInputUpdate]
      }
    }), _vm._v(" "), _vm.banques == "" || _vm.banques.length == 0 ? _c("span", {
      staticClass: "spinner-border spinner-border spinner-custom-input",
      staticStyle: {
        "margin-right": "8px"
      }
    }) : _vm._e()])]), _vm._v(" "), _c("td", [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: ligne_communique.ligne_mfcfa,
        expression: "ligne_communique.ligne_mfcfa"
      }],
      staticClass: "form-select",
      style: ligne_communique.is_added ? "" : "background-color: #00ffff21; color: #57606f",
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(ligne_communique, "ligne_mfcfa", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, _vm.handleInputUpdate]
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
      }, [_vm._v(_vm._s(line.libelle) + "\n                                                    ")]);
    }), _vm._v(" "), _c("optgroup", {
      attrs: {
        label: "--------------------------------"
      }
    }), _vm._v(" "), _c("option", {
      attrs: {
        value: "Mixte"
      }
    }, [_vm._v("Mixte")])], 2)]), _vm._v(" "), _c("td", [_c("currency-input", {
      style: ligne_communique.is_added ? "" : "background-color: #00ffff21; color: #57606f",
      attrs: {
        value: ligne_communique.ligne_encours
      },
      on: {
        input: function input($event) {
          return _vm.setLigneCommuniqueVars1($event, index, "ligne_encours");
        }
      }
    })], 1), _vm._v(" "), _c("td", [_c("date-input", {
      staticStyle: {
        width: "240px"
      },
      attrs: {
        value: ligne_communique.ligne_echeance,
        background: ligne_communique.is_added ? "" : "background-color: #00ffff21; color: #57606f"
      },
      on: {
        input: function input($event) {
          return _vm.setLigneCommuniqueVars1($event, index, "ligne_echeance");
        }
      }
    })], 1), _vm._v(" "), _c("td", [index == 0 ? _c("div", [_c("button", {
      staticStyle: {
        "background-color": "#2c3e50",
        color: "#ffffff",
        "border-radius": "15%",
        border: "none"
      },
      attrs: {
        type: "button",
        title: "Ajouter un nouvel article"
      },
      on: {
        click: function click($event) {
          return _vm.addMore4(index);
        }
      }
    }, [_c("plus-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)]) : _c("div", {
      staticStyle: {
        "margin-left": "0px",
        "margin-top": "5px"
      }
    }, [_c("button", {
      staticStyle: {
        "background-color": "transparent",
        border: "none"
      },
      attrs: {
        type: "button",
        title: "Supprimer cette action"
      },
      on: {
        click: function click($event) {
          return _vm.remove4(index);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)])])]);
  }), _vm._v(" "), _c("tr", [_vm._m(9), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      value: _vm.formDataToBeWatched.total_communique_signature_encours,
      id: "total_communique_signature_encours",
      disabled: ""
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("td", {
    attrs: {
      colspan: "2"
    }
  })]), _vm._v(" "), _c("tr", [_vm._m(10), _vm._v(" "), _c("td", {
    staticClass: "py-2"
  }, [_c("currency-input", {
    attrs: {
      value: _vm.formDataToBeWatched.total_ligne_communique,
      id: "total_ligne_communique",
      disabled: ""
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("td", {
    attrs: {
      colspan: "2"
    }
  })])], 2)])]), _vm._v(" "), _c("div", {
    staticClass: "mt-3"
  }, [_vm._m(11), _vm._v(" "), _c("vue-editor", {
    attrs: {
      id: "commentaire_lignes_clients"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.commentaire_lignes_clients,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "commentaire_lignes_clients", $$v);
      },
      expression: "formDataToBeWatched.commentaire_lignes_clients"
    }
  })], 1)])]) : _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen4 = !_vm.seen4;
      }
    }
  }, [_c("h6", [_vm._v("\n                                Relations avec le Pool Bancaire (Lignes communiquées par le client)\n                                "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "mb-5"
  }), _vm._v(" "), _c("button", {
    staticClass: "btn shadow-md text-white position-absolute",
    staticStyle: {
      cursor: "pointer",
      right: "32px",
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
    staticClass: "card-header hdc pb-0"
  }, [_c("h3", {
    staticClass: "head",
    attrs: {
      id: "f1-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Historique du compte et renseignements bancaires\n                        ")]), _vm._v(" "), _c("div", {
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
  }, [_c("span", [_vm._v(_vm._s(_vm.formDataToBeWatched.notes.length))])])])]) : _vm._e(), _vm._v(" "), _c("airplay-icon", {
    staticClass: "custom-class mt-1",
    staticStyle: {
      cursor: "pointer",
      margin: "0 5px"
    },
    attrs: {
      size: "0.7x"
    },
    on: {
      click: _vm.openKetri
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
  return _c("td", [_c("label", {
    staticClass: "form-label",
    attrs: {
      title: "Banque"
    }
  }, [_vm._v("Banques"), _c("span", {
    staticStyle: {
      color: "red"
    }
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("label", {
    staticClass: "form-label",
    attrs: {
      title: "Filiale"
    }
  }, [_vm._v("Filiale"), _c("span", {
    staticStyle: {
      color: "red"
    }
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("th", {
    staticClass: "bg-grey",
    attrs: {
      colspan: "4"
    }
  }, [_vm._v("MOUVEMENTS CONFIES")]), _vm._v(" "), _c("th", {
    staticClass: "bg-grey",
    attrs: {
      colspan: "2"
    }
  }, [_vm._v("FONCTIONNEMENT DU COMPTE")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("th", {
    staticClass: "bg-grey"
  }, [_vm._v("ANNÉE")]), _vm._v(" "), _c("th", {
    staticClass: "bg-grey"
  }, [_vm._v("MOUVEMENTS NETS DES DÉBLOCAGES")]), _vm._v(" "), _c("th", {
    staticClass: "bg-grey"
  }, [_vm._v("CA")]), _vm._v(" "), _c("th", {
    staticClass: "bg-grey"
  }, [_vm._v("% CA")]), _vm._v(" "), _c("th", {
    staticClass: "bg-grey"
  }, [_vm._v("SOLDE MOYEN")]), _vm._v(" "), _c("th", {
    staticClass: "bg-grey"
  }, [_vm._v("PÉRIODE CRÉDITRICE")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_c("b", [_vm._v("Commentaires sur le Fonctionnement du Compte")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Banques")])]), _vm._v(" "), _c("th", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Lignes")])]), _vm._v(" "), _c("th", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Encours")])]), _vm._v(" "), _c("th", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Echéance")])]), _vm._v(" "), _c("th", [_c("label", {
    staticClass: "form-label"
  })])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
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
      colspan: "5"
    }
  }, [_c("hr")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Banques")])]), _vm._v(" "), _c("th", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Lignes")])]), _vm._v(" "), _c("th", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Encours")])]), _vm._v(" "), _c("th", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Echéance")])]), _vm._v(" "), _c("th", [_c("label", {
    staticClass: "form-label"
  })])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    attrs: {
      colspan: "2"
    }
  }, [_c("label", {
    staticClass: "form-label mt-1",
    attrs: {
      "for": "total_communique_signature_encours"
    }
  }, [_c("b", [_vm._v("S/Total par signature")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    attrs: {
      colspan: "2"
    }
  }, [_c("label", {
    staticClass: "form-label mt-1",
    attrs: {
      "for": "total_ligne_communique"
    }
  }, [_c("b", [_vm._v("Total")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_c("b", [_vm._v("Commentaires sur les lignes communiquées")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/MonthInput.vue?vue&type=template&id=5a685879&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/MonthInput.vue?vue&type=template&id=5a685879&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", _vm._b({
    ref: _vm.id,
    staticClass: "d-flex",
    staticStyle: {
      "min-width": "72%"
    }
  }, "div", _vm.$attrs, false), [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.day,
      expression: "day"
    }],
    staticClass: "flex-1 form-control",
    "class": _vm.classname,
    style: _vm.background + ";" + _vm.color,
    attrs: {
      readonly: _vm.readonly_,
      viewonly: _vm.viewonly
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.day = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, _vm.handleInput]
    }
  }, [!_vm.readonly && !_vm.viewonly ? _c("option", {
    attrs: {
      selected: "",
      disabled: "",
      value: ""
    }
  }, [_vm._v("JJ")]) : _vm._e(), _vm._v(" "), !_vm.readonly_ ? _c("option", {
    attrs: {
      value: ""
    }
  }) : _vm._e(), _vm._v(" "), _vm._l(_vm.days_, function (el, index) {
    return [_vm.viewonly ? [_vm.day == el ? _c("option", {
      key: index
    }, [_vm._v(_vm._s(el))]) : _vm._e()] : [!_vm.readonly_ ? _c("option", {
      key: index
    }, [_vm._v(_vm._s(el))]) : _vm._e()]];
  })], 2), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.month,
      expression: "month"
    }],
    staticClass: "mx-1 flex-2 form-control",
    "class": _vm.classname,
    style: _vm.background + ";" + _vm.color,
    attrs: {
      readonly: _vm.readonly_,
      viewonly: _vm.viewonly
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.month = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, _vm.handleInput]
    }
  }, [!_vm.readonly && !_vm.viewonly ? _c("option", {
    attrs: {
      selected: "",
      disabled: "",
      value: ""
    }
  }, [_vm._v("MM")]) : _vm._e(), _vm._v(" "), !_vm.readonly_ ? _c("option", {
    attrs: {
      value: ""
    }
  }) : _vm._e(), _vm._v(" "), _vm._l(_vm.months, function (el, index) {
    return [_vm.viewonly ? [_vm.month == el ? _c("option", {
      key: index,
      domProps: {
        value: el
      }
    }, [_vm._v(_vm._s(el.intitule))]) : _vm._e()] : [!_vm.readonly_ ? _c("option", {
      key: index,
      domProps: {
        value: el
      }
    }, [_vm._v(_vm._s(el.intitule))]) : _vm._e()]];
  })], 2)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/contre_etude_corporate/NS-AC2.vue?vue&type=style&index=0&id=1487621c&lang=css&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/contre_etude_corporate/NS-AC2.vue?vue&type=style&index=0&id=1487621c&lang=css&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\r\n/* input {\r\n    border: 1px solid red;\r\n} */\n*[data-v-1487621c] {\r\n    font-family: \"Google sans\";\n}\nlabel[data-v-1487621c] {\r\n    height: 10px;\r\n    font-size: 13px;\n}\ntd[data-v-1487621c] {\r\n    padding: 5px;\r\n    font-size: 13px;\n}\ninput[data-v-1487621c],\r\nselect[data-v-1487621c] {\r\n    height: 35px;\r\n    border-color: #34495e;\r\n    color: #57606f;\r\n    font-size: 13px;\r\n    font-weight: bold;\n}\n.card-width-height[data-v-1487621c] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-1487621c] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\n.hdc[data-v-1487621c] {\r\n    background-color: #57606f;\n}\n.relook-header[data-v-1487621c] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\n.badge-sm[data-v-1487621c] {\r\n    display: inline-block;\r\n    width: 15px;\r\n    height: 15px;\r\n    background: rgba(255, 0, 0, 0.882);\r\n    color: white;\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    border-radius: 100%;\r\n    position: absolute;\r\n    top: -20%;\r\n    left: 55%;\r\n    text-align: center;\n}\n.imageM21i[data-v-1487621c] {\r\n    background: url(\"/images/capture_cofina/instruction_evaluation_risque.png\") no-repeat;\r\n    background-position: center;\r\n    background-size: contain;\r\n    width: 100%;\r\n    height: 100%;\n}\n.imageM21exi[data-v-1487621c] {\r\n    background: url(\"/images/capture_cofina/exemple_evaluation_risque.png\") no-repeat;\r\n    background-position: center;\r\n    background-size: contain;\r\n    width: 1000px;\r\n    height: 200px;\n}\n.form-check-input[data-v-1487621c]:disabled {\r\n    opacity: 1;\n}\n.image1[data-v-1487621c] {\r\n    background: url(\"/images/capture_afg/contre_etude_ob_finance.png\") no-repeat;\r\n    background-position: center;\r\n    background-size: contain;\r\n\r\n    width: 500px;\r\n    height: 300px;\n}\nth[data-v-1487621c], td[data-v-1487621c] {\r\n    text-align: center;\r\n    padding: 8px;\r\n    height: auto;\r\n    word-break: break-word;\r\n    vertical-align: middle;\r\n    font-size: 13px;\n}\nth[data-v-1487621c]:first-child, td[data-v-1487621c]:first-child { min-width: 160px;\n}\nth[data-v-1487621c]:nth-child(2), td[data-v-1487621c]:nth-child(2) { min-width: 150px;\n}\nth[data-v-1487621c]:nth-child(3), td[data-v-1487621c]:nth-child(3) { min-width: 150px;\n}\nth[data-v-1487621c]:nth-child(4), td[data-v-1487621c]:nth-child(4) { min-width: 120px;\n}\nth[data-v-1487621c]:nth-child(5), td[data-v-1487621c]:nth-child(5) { min-width: 150px;\n}\nth[data-v-1487621c]:last-child, td[data-v-1487621c]:last-child { min-width: 250px;\n}\n.comeFrom[data-v-1487621c]{\r\n    background: #00ffff21;\r\n    color: #000;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/MonthInput.vue?vue&type=style&index=0&id=5a685879&lang=css&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/MonthInput.vue?vue&type=style&index=0&id=5a685879&lang=css&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-5a685879] {\r\n    font-family: \"Google sans\";\n}\n.d-flex[data-v-5a685879] {\r\n    display: flex !important;\n}\n.flex-1[data-v-5a685879] {\r\n    flex: 1;\n}\n.flex-2[data-v-5a685879] {\r\n    flex: 2;\n}\n.mx-1[data-v-5a685879] {\r\n    margin-right: 0.1rem !important;\r\n    margin-left: 0.1rem !important;\n}\ninput[data-v-5a685879],\r\nselect[data-v-5a685879] {\r\n    border-color: #34495e;\r\n    color: #57606f;\r\n    font-size: 13px;\r\n    font-weight: bold;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/contre_etude_corporate/NS-AC2.vue?vue&type=style&index=0&id=1487621c&lang=css&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/contre_etude_corporate/NS-AC2.vue?vue&type=style&index=0&id=1487621c&lang=css&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NS_AC2_vue_vue_type_style_index_0_id_1487621c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NS-AC2.vue?vue&type=style&index=0&id=1487621c&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/contre_etude_corporate/NS-AC2.vue?vue&type=style&index=0&id=1487621c&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NS_AC2_vue_vue_type_style_index_0_id_1487621c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NS_AC2_vue_vue_type_style_index_0_id_1487621c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/MonthInput.vue?vue&type=style&index=0&id=5a685879&lang=css&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/MonthInput.vue?vue&type=style&index=0&id=5a685879&lang=css&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MonthInput_vue_vue_type_style_index_0_id_5a685879_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MonthInput.vue?vue&type=style&index=0&id=5a685879&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/MonthInput.vue?vue&type=style&index=0&id=5a685879&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MonthInput_vue_vue_type_style_index_0_id_5a685879_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MonthInput_vue_vue_type_style_index_0_id_5a685879_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/forms/afg/contre_etude_corporate/NS-AC2.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/forms/afg/contre_etude_corporate/NS-AC2.vue ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NS_AC2_vue_vue_type_template_id_1487621c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NS-AC2.vue?vue&type=template&id=1487621c&scoped=true */ "./resources/js/components/forms/afg/contre_etude_corporate/NS-AC2.vue?vue&type=template&id=1487621c&scoped=true");
/* harmony import */ var _NS_AC2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NS-AC2.vue?vue&type=script&lang=js */ "./resources/js/components/forms/afg/contre_etude_corporate/NS-AC2.vue?vue&type=script&lang=js");
/* harmony import */ var _NS_AC2_vue_vue_type_style_index_0_id_1487621c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NS-AC2.vue?vue&type=style&index=0&id=1487621c&lang=css&scoped=true */ "./resources/js/components/forms/afg/contre_etude_corporate/NS-AC2.vue?vue&type=style&index=0&id=1487621c&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _NS_AC2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _NS_AC2_vue_vue_type_template_id_1487621c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _NS_AC2_vue_vue_type_template_id_1487621c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "1487621c",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/forms/afg/contre_etude_corporate/NS-AC2.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/forms/afg/contre_etude_corporate/NS-AC2.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/contre_etude_corporate/NS-AC2.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NS_AC2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NS-AC2.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/contre_etude_corporate/NS-AC2.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NS_AC2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/forms/afg/contre_etude_corporate/NS-AC2.vue?vue&type=style&index=0&id=1487621c&lang=css&scoped=true":
/*!*************************************************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/contre_etude_corporate/NS-AC2.vue?vue&type=style&index=0&id=1487621c&lang=css&scoped=true ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NS_AC2_vue_vue_type_style_index_0_id_1487621c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NS-AC2.vue?vue&type=style&index=0&id=1487621c&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/contre_etude_corporate/NS-AC2.vue?vue&type=style&index=0&id=1487621c&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/forms/afg/contre_etude_corporate/NS-AC2.vue?vue&type=template&id=1487621c&scoped=true":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/contre_etude_corporate/NS-AC2.vue?vue&type=template&id=1487621c&scoped=true ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NS_AC2_vue_vue_type_template_id_1487621c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NS_AC2_vue_vue_type_template_id_1487621c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NS_AC2_vue_vue_type_template_id_1487621c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NS-AC2.vue?vue&type=template&id=1487621c&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/contre_etude_corporate/NS-AC2.vue?vue&type=template&id=1487621c&scoped=true");


/***/ }),

/***/ "./resources/js/components/shared/MonthInput.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/shared/MonthInput.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MonthInput_vue_vue_type_template_id_5a685879_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MonthInput.vue?vue&type=template&id=5a685879&scoped=true */ "./resources/js/components/shared/MonthInput.vue?vue&type=template&id=5a685879&scoped=true");
/* harmony import */ var _MonthInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MonthInput.vue?vue&type=script&lang=js */ "./resources/js/components/shared/MonthInput.vue?vue&type=script&lang=js");
/* harmony import */ var _MonthInput_vue_vue_type_style_index_0_id_5a685879_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MonthInput.vue?vue&type=style&index=0&id=5a685879&lang=css&scoped=true */ "./resources/js/components/shared/MonthInput.vue?vue&type=style&index=0&id=5a685879&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MonthInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _MonthInput_vue_vue_type_template_id_5a685879_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _MonthInput_vue_vue_type_template_id_5a685879_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "5a685879",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/shared/MonthInput.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/shared/MonthInput.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/shared/MonthInput.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MonthInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MonthInput.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/MonthInput.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MonthInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shared/MonthInput.vue?vue&type=style&index=0&id=5a685879&lang=css&scoped=true":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/shared/MonthInput.vue?vue&type=style&index=0&id=5a685879&lang=css&scoped=true ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MonthInput_vue_vue_type_style_index_0_id_5a685879_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MonthInput.vue?vue&type=style&index=0&id=5a685879&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/MonthInput.vue?vue&type=style&index=0&id=5a685879&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/shared/MonthInput.vue?vue&type=template&id=5a685879&scoped=true":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/shared/MonthInput.vue?vue&type=template&id=5a685879&scoped=true ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MonthInput_vue_vue_type_template_id_5a685879_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MonthInput_vue_vue_type_template_id_5a685879_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MonthInput_vue_vue_type_template_id_5a685879_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MonthInput.vue?vue&type=template&id=5a685879&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/MonthInput.vue?vue&type=template&id=5a685879&scoped=true");


/***/ })

}]);