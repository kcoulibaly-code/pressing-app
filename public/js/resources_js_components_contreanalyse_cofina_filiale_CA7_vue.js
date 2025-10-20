"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_contreanalyse_cofina_filiale_CA7_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/filiale/CA7.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/filiale/CA7.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../helpers/indexedDB */ "./resources/js/helpers/indexedDB.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_helpers_indexedDB__WEBPACK_IMPORTED_MODULE_5__);
/* provided dependency */ var process = __webpack_require__(/*! process/browser.js */ "./node_modules/process/browser.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_defineProperty(_defineProperty(_defineProperty({
  name: "CA_Historique_des_prets",
  display: "Historique_des_prets",
  components: {
    ContextMenu: _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__["default"],
    ContextMenuItem: _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__["default"],
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.ChevronDownIcon,
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.PlusIcon,
    BookOpenIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.BookOpenIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.TrashIcon,
    AirplayIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.AirplayIcon
  },
  props: {
    meta_data: Object,
    tb_name: String,
    tb_display_name: String
  },
  computed: {
    credPubTb17: function credPubTb17() {
      var _this$meta_data$dossi2;
      var applied_templ_name = this.meta_data.dossier_credit.applied_templ_name;
      if (![undefined, null, ''].includes(applied_templ_name)) {
        var _this$credKeyMapingTb;
        if (![null, undefined, ''].includes((_this$credKeyMapingTb = this.credKeyMapingTb17) === null || _this$credKeyMapingTb === void 0 ? void 0 : _this$credKeyMapingTb[applied_templ_name])) {
          var _this$meta_data$dossi;
          // console.log("applied_templane name", this.credKeyMaping[applied_templ_name])
          return (_this$meta_data$dossi = this.meta_data.dossier_credit) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi[this.credKeyMapingTb17[applied_templ_name]];
        }
      }
      return (_this$meta_data$dossi2 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi2 === void 0 ? void 0 : _this$meta_data$dossi2.cred_pub_tb_17;
    }
  },
  created: function created() {},
  mounted: function mounted() {
    // Initiate cache

    // // this.initCache();
    //

    this.loadRetrieved();
    this.loadTbAttrs(); // charge les attributs + sous attributs des tables
    this.banqueData();
    // helper.loadCurrencyFormatter();
    // this.crdLd()
    // EventBus.$on('autosubmit', ()=> {
    //       this.launchAutoSaver()
    //   })

    // tableClosedOrOpened
    this.tableClosedOrOpened();
  },
  data: function data() {
    var vm = this;
    return {
      credKeyMapingTb17: {
        "Insvestissement": "cred_pub_tb_17",
        "BFR (Besoin en fonds de roulement)": "cred_pub_tb_17",
        "Retail BF (Burkina Faso)": "cred_pub_tb_16105"
      },
      LesVariables: ["cred_pub_tb_17", "cred_pub_tb_18003", "cred_pub_tb_20002"],
      credits: [],
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
      banques: "",
      // credits: [],
      // clients: [],
      // encours: null,
      // placeholder: "Chercher clients",
      // matcli: "matcli",
      // nomcli: "nomcli",

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
        tb_name: this.tb_name
      },
      formDataToBeWatched: {
        historiques_des_credits: "",
        historiques_des_credits_chez_cofina: "",
        date_centrale_risque: "",
        date_adhesion_bic: "",
        commentaire: "",
        analyse_impacts: "",
        notes: []
      },
      analyse_impacts: [{
        date: "",
        montant: "",
        ca_cycle1: "",
        variation1: "",
        ca_cycle2: "",
        variation2: "",
        ca_cycle3: ""
      }],
      historiques_des_credits: [{
        numero: 1,
        banque: "",
        type_credit: "",
        montant: 0,
        objectif: "",
        date_entree_relation: "",
        date_sortie: "",
        duree: "",
        statut: "",
        encours: "",
        // cooperative:"",
        echeance: ""
      }],
      historiques_des_credits_chez_cofina: [{
        numero: 1,
        type_credit: "",
        montant_chez_cofina: 0,
        commentaire: "",
        date_entree_relation: "",
        date_mise_place: "",
        duree_chez_cofina: "",
        statut: "",
        encours_cofina: "",
        // cooperative_cofina:"",
        echeance_cofina: ""
      }],
      // Ajouter note
      listingNote: false

      // frais: [],
    };
  }
}, "created", function created() {
  var _this = this;
  _services_credit_service__WEBPACK_IMPORTED_MODULE_4__["default"].loadCredits().then(function (res) {
    _this.credits = res.data;
  })["catch"](function (err) {
    console.log(err);
  });
}), "methods", {
  getHistoriquesDesCredits: function getHistoriquesDesCredits(variable) {
    var _iterator = _createForOfIteratorHelper(this.LesVariables),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _this$meta_data$dossi3;
        var varName = _step.value;
        if ((_this$meta_data$dossi3 = this.meta_data.dossier_credit[varName]) !== null && _this$meta_data$dossi3 !== void 0 && _this$meta_data$dossi3.historiques_des_credits) {
          return this.meta_data.dossier_credit[varName].historiques_des_credits;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return [];
  },
  getHistoriquesDesCreditsCofina: function getHistoriquesDesCreditsCofina(variable) {
    var historiques_des_credits_chez_cofina = [];
    var _iterator2 = _createForOfIteratorHelper(this.LesVariables),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _this$meta_data$dossi4;
        var varName = _step2.value;
        if ((_this$meta_data$dossi4 = this.meta_data.dossier_credit[varName]) !== null && _this$meta_data$dossi4 !== void 0 && _this$meta_data$dossi4.historiques_des_credits_chez_cofina) {
          historiques_des_credits_chez_cofina = this.meta_data.dossier_credit[varName].historiques_des_credits_chez_cofina;
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    return historiques_des_credits_chez_cofina;
  },
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
  tableClosedOrOpened: function tableClosedOrOpened() {
    this.seen = this.fetchClosedTables(this.tb_name + this.meta_data["cred_pub_key"]);
  },
  openNotesModal: function openNotesModal() {
    var listing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    this.listingNote = listing;
    this.$modal.show(this.tb_name);
  },
  launchAutoSaver: function launchAutoSaver() {
    var _this8 = this;
    _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["default"].loadUserData().then(function (res) {
      _this8.send2Backend(res, 0, 0);
    })["catch"](function (err) {
      _this8.loadWithError(err);
    });
  },
  loadRetrieved: function loadRetrieved() {
    var _this$meta_data$dossi5;
    var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
    var createdKey = this.tb_name;
    var createdKeyArr = createdKey.split("tb");
    createdKey = "cred_pub_tb_" + createdKeyArr[1];

    // Close table by default
    this.defaultRetract(false, (_this$meta_data$dossi5 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi5 === void 0 ? void 0 : _this$meta_data$dossi5.applied_templ_id);
    if (this.meta_data['dossier_credit'][createdKey] === undefined) {
      var _this$credPubTb, _this$credPubTb2, _this$credPubTb3, _this$credPubTb4;
      // console.log("credPubTb17", this.credPubTb17, )
      if (!['', null, undefined].includes((_this$credPubTb = this.credPubTb17) === null || _this$credPubTb === void 0 ? void 0 : _this$credPubTb["historiques_des_credits"])) {
        this.historiques_des_credits = this.credPubTb17["historiques_des_credits"];
      }
      if (!['', null, undefined].includes((_this$credPubTb2 = this.credPubTb17) === null || _this$credPubTb2 === void 0 ? void 0 : _this$credPubTb2["historiques_des_credits_chez_cofina"])) {
        this.historiques_des_credits_chez_cofina = this.credPubTb17["historiques_des_credits_chez_cofina"];
      }
      if (!['', null, undefined].includes((_this$credPubTb3 = this.credPubTb17) === null || _this$credPubTb3 === void 0 ? void 0 : _this$credPubTb3["date_adhesion_bic"])) {
        this.date_adhesion_bic = this.credPubTb17["date_adhesion_bic"];
      }
      if (!['', null, undefined].includes((_this$credPubTb4 = this.credPubTb17) === null || _this$credPubTb4 === void 0 ? void 0 : _this$credPubTb4["date_centrale_risque"])) {
        this.date_centrale_risque = this.credPubTb17["date_centrale_risque"];
      }
      this.formDataToBeWatched.historiques_des_credits = this.historiques_des_credits;
      this.formDataToBeWatched.historiques_des_credits_chez_cofina = this.historiques_des_credits_chez_cofina;
      this.formDataToBeWatched.date_adhesion_bic = this.date_adhesion_bic;
      this.formDataToBeWatched.date_centrale_risque = this.date_centrale_risque;
    }
    if (lentb.length > 0) {
      if (this.meta_data["dossier_credit"][createdKey] != undefined) {
        this.formDataToBeWatched = this.meta_data["dossier_credit"][createdKey];
        if (this.meta_data["dossier_credit"][createdKey]["historiques_des_credits"] != "") {
          this.historiques_des_credits = this.meta_data["dossier_credit"][createdKey]["historiques_des_credits"];
        }
        if (this.meta_data["dossier_credit"][createdKey]["historiques_des_credits_chez_cofina"] != "") {
          this.historiques_des_credits_chez_cofina = this.meta_data["dossier_credit"][createdKey]["historiques_des_credits_chez_cofina"];
        }
        this.meta_data["dossier_credit"][createdKey];
        if (this.meta_data["dossier_credit"][createdKey]["analyse_impacts"] != "") {
          this.analyse_impacts = this.meta_data["dossier_credit"][createdKey]["analyse_impacts"];
        }
      } else {
        if (this.meta_data["dossier_credit"]['cred_pub_tb_14002'] == undefined) return;
        this.formDataToBeWatched = this.meta_data["dossier_credit"]['cred_pub_tb_14002'];
        if (this.meta_data["dossier_credit"]['cred_pub_tb_14002']["historiques_des_credits"] != "") {
          this.historiques_des_credits = this.meta_data["dossier_credit"]['cred_pub_tb_14002']["historiques_des_credits"];
        }
        if (this.meta_data["dossier_credit"]['cred_pub_tb_14002']["historiques_des_credits_chez_cofina"] != "") {
          this.historiques_des_credits_chez_cofina = this.meta_data["dossier_credit"]['cred_pub_tb_14002']["historiques_des_credits_chez_cofina"];
        }
        this.meta_data["dossier_credit"]['cred_pub_tb_14002'];
        if (this.meta_data["dossier_credit"]['cred_pub_tb_14002']["analyse_impacts"] != "") {
          this.analyse_impacts = this.meta_data["dossier_credit"]['cred_pub_tb_14002']["analyse_impacts"];
        }
      }
    }
  },
  setAnalyseImpactVars: function setAnalyseImpactVars(event, index) {
    this.analyse_impacts[index][event[0]] = event[1];
    this.handleInput();
  },
  addMore: function addMore() {
    this.historiques_des_credits.push({
      numero: this.historiques_des_credits.length + 1,
      banque: "",
      type_credit: "",
      montant: 0,
      objectif: "",
      date_entree_relation: "",
      date_sortie: "",
      duree: "",
      statut: "",
      encours: "",
      cooperative: "",
      echeance: ""
    });
  },
  addMore0: function addMore0() {
    this.historiques_des_credits_chez_cofina.push({
      numero: this.historiques_des_credits_chez_cofina.length + 1,
      type_credit: "",
      montant_chez_cofina: 0,
      date_entree_relation: "",
      date_mise_place: "",
      duree: "",
      statut: "",
      encours_cofina: "",
      cooperative_cofina: "",
      echeance_cofina: "",
      commentaire: ""
    });
  },
  addMore2: function addMore2() {
    this.analyse_impacts.push({
      date: "",
      montant: "",
      ca_cycle1: "",
      variation1: "",
      ca_cycle2: "",
      variation2: "",
      ca_cycle3: ""
    });
  },
  remove2: function remove2(index) {
    this.analyse_impacts.splice(index, 1);
    this.handleInput();
  },
  remove: function remove(index) {
    this.historiques_des_credits.splice(index, 1);
    this.update_list(index);
  },
  remove0: function remove0(index) {
    this.historiques_des_credits_chez_cofina.splice(index, 1);
    this.update_list(index);
  },
  update_list: function update_list(idx) {
    for (var index = idx; index < this.historiques_des_credits.length; index++) {
      this.historiques_des_credits[index]["numero"] = this.historiques_des_credits[index].numero - 1;
      // console.log(this.cout_productions)
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
    if (this.authcheck === true) {
      this.$emit("autosaving");
      this.$axios.post(this.ebapisHost + "creditbuilder/api/v1/autosaving/", {
        user: this.authcheckUsr,
        meta_parseable: this.meta_parseable,
        filledData: this.formDataToBeWatched
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
  instruction02: function instruction02(id) {
    var id0 = "#" + id;
    window.$(id0).modal("show");
  },
  convertNumber: function convertNumber(valeur) {
    return Number(String(valeur).replace(/\s+/g, ""));
  },
  handleInput: function handleInput(evt, index) {
    var _this9 = this;
    // if (index !== undefined) {
    //     this.historiques_des_credits[index][evt[0]] = evt[1];

    //     this.historiques_des_credits_chez_cofina[index][evt[0]] =
    //         evt[1];
    // }
    this.formDataToBeWatched["historiques_des_credits"] = this.historiques_des_credits;
    this.formDataToBeWatched["historiques_des_credits_chez_cofina"] = this.historiques_des_credits_chez_cofina;
    this.formDataToBeWatched["analyse_impacts"] = this.analyse_impacts;
    this.analyse_impacts.forEach(function (element, key) {
      element.variation1 = (_this9.convertNumber(element.ca_cycle2) - _this9.convertNumber(element.ca_cycle1)) / _this9.convertNumber(element.ca_cycle1);
      element.variation2 = (_this9.convertNumber(element.ca_cycle3) - _this9.convertNumber(element.ca_cycle2)) / _this9.convertNumber(element.ca_cycle2);
    });

    /***************************************************************/
    var tauxEnd = this.tauxEndettement();
    //   console.log("taux-endettement", tauxEnd)
    EventBus.$emit("taux-endettement", tauxEnd);
    /**************************************************************/
  },
  banqueData: function banqueData() {
    var _this0 = this;
    var imf = "EFAB,BK,SDF";
    if (this.entityType == "BANK") {
      imf = "BK";
    }
    _services_credit_service__WEBPACK_IMPORTED_MODULE_4__["default"].loadbank("COTE D'IVOIRE", imf).then(function (res) {
      _this0.bankData(res);
    })["catch"](function (err) {
      console.log(err);
    });
  },
  bankData: function bankData(res) {
    this.banques = res.data;
    // console.log({ "banque": this.banques });
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
      id: "t17-head"
    };
    // console.log(p)
    this.$emit("load-buffer", p);
  },
  /********************************************************/findIndexByObj: function findIndexByObj(label) {
    var tab = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "benefices_pertes";
    return this.meta_data.dossier_credit.cred_pub_tb_13[tab].findIndex(function (el) {
      return el.position === label;
    });
  },
  capaciteAutoFinancement: function capaciteAutoFinancement() {
    var dossier = this.meta_data.dossier_credit.cred_pub_tb_13;
    // console.log("tb13",dossier)
    var a = 0;
    var b = 0;
    var c = 0;
    var d = 0;
    if ((dossier === null || dossier === void 0 ? void 0 : dossier.benefices_pertes[this.findIndexByObj("RÉSULTAT NET PRINCIPALES OPÉRATIONS")].montant_c) != undefined) {
      a = dossier === null || dossier === void 0 ? void 0 : dossier.benefices_pertes[this.findIndexByObj("RÉSULTAT NET PRINCIPALES OPÉRATIONS")].montant_c;
      a = Number(String(a).replace(/\s+/g, ""));
    }
    if ((dossier === null || dossier === void 0 ? void 0 : dossier.benefices_pertes[this.findIndexByObj("Autres revenus")].montant_c) != undefined) {
      b = dossier === null || dossier === void 0 ? void 0 : dossier.benefices_pertes[this.findIndexByObj("Autres revenus")].montant_c;
      b = Number(String(b).replace(/\s+/g, ""));
    }
    if ((dossier === null || dossier === void 0 ? void 0 : dossier.benefices_pertes[this.findIndexByObj("Charges familiales")].montant_c) != undefined) {
      c = dossier === null || dossier === void 0 ? void 0 : dossier.benefices_pertes[this.findIndexByObj("Charges familiales")].montant_c;
      c = Number(String(c).replace(/\s+/g, ""));
    }
    if ((dossier === null || dossier === void 0 ? void 0 : dossier.benefices_pertes[this.findIndexByObj("D'autres coûts")].montant_c) != undefined) {
      var _this$meta_data$dossi6;
      d = (_this$meta_data$dossi6 = this.meta_data.dossier_credit.cred_pub_tb_13) === null || _this$meta_data$dossi6 === void 0 ? void 0 : _this$meta_data$dossi6.benefices_pertes[this.findIndexByObj("D'autres coûts")].montant_c;
      d = Number(String(d).replace(/\s+/g, ""));
    }
    var rp = a + b;
    var rm = c + d;
    var res = rp - rm;
    return res;
  },
  creditConcurrence: function creditConcurrence() {
    // alert(0)
    var total = 0;
    if (this.meta_data.dossier_credit.cred_pub_tb_17 != undefined) {
      var _this$meta_data$dossi7;
      if (((_this$meta_data$dossi7 = this.meta_data.dossier_credit.cred_pub_tb_17) === null || _this$meta_data$dossi7 === void 0 ? void 0 : _this$meta_data$dossi7.historiques_des_credits) != "") {
        var _this$meta_data$dossi8;
        (_this$meta_data$dossi8 = this.meta_data.dossier_credit.cred_pub_tb_17) === null || _this$meta_data$dossi8 === void 0 || _this$meta_data$dossi8.historiques_des_credits.forEach(function (element) {
          if (element.statut == "Financé") {
            total += Number(String(element.echeance).replace(/\s+/g, ""));
          }
        });
      }
    }
    return total;
  },
  tauxEndettement: function tauxEndettement() {
    var _this$meta_data$dossi9;
    // console.log()
    var c = 0;
    var a = this.capaciteAutoFinancement();
    var b = this.creditConcurrence();
    if (((_this$meta_data$dossi9 = this.meta_data.dossier_credit.cred_pub_tb_1) === null || _this$meta_data$dossi9 === void 0 || (_this$meta_data$dossi9 = _this$meta_data$dossi9.echeance) === null || _this$meta_data$dossi9 === void 0 ? void 0 : _this$meta_data$dossi9.echeance) != undefined) {
      var _this$meta_data$dossi0;
      c = (_this$meta_data$dossi0 = this.meta_data.dossier_credit.cred_pub_tb_1) === null || _this$meta_data$dossi0 === void 0 || (_this$meta_data$dossi0 = _this$meta_data$dossi0.echeance) === null || _this$meta_data$dossi0 === void 0 ? void 0 : _this$meta_data$dossi0.echeance;
    }
    // console.log('a', a, "b",b ,'c', c)

    // console.log(a,b,c)
    var res = 0;
    c = Number(String(c).replace(/\s+/g, ""));
    if (a != 0) {
      res = (b + c) / a;
    } else {
      return 0;
    }
    return res * 100;
  } /**************************************************************/
}), "watch", {
  formDataToBeWatched: {
    handler: function handler(newVal, oldVal) {
      this.autosaving(newVal, oldVal);
      // ? Cache management
      // this.saveDataInCache(newVal, oldVal);
    },
    deep: true,
    immediate: true
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/filiale/CA7.vue?vue&type=template&id=2a269c7a&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/filiale/CA7.vue?vue&type=template&id=2a269c7a&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "card card-width-height"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc pb-0 pt-2"
  }, [_c("h6", {
    ref: "topdiv",
    staticClass: "head",
    attrs: {
      id: "t17-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Historiques des crédits\n                        ")]), _vm._v(" "), _c("div", {
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
  })], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "row p-0"
  }, [_c("div", {
    staticClass: "col-12 p-0"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_vm.seen1 == true ? _c("div", [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen1 = !_vm.seen1;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "historique-des-crédits-chez-cofina-civ"
    }
  }, [_vm._v("\n                                    Historique des crédits chez COFINA\n                                    "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "mt-4"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table mb-5 table-borderless"
  }, [_vm._m(0), _vm._v(" "), _c("tbody", [_vm._l(_vm.getHistoriquesDesCreditsCofina(_vm.LesVariables), function (hist_credit_cofina, index) {
    return _c("tr", {
      key: index + "mkojj"
    }, [_c("td", {
      staticClass: "font-weight-bold",
      domProps: {
        innerHTML: _vm._s(hist_credit_cofina.numero)
      }
    }), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: hist_credit_cofina.type_credit,
        expression: "\n                                                            hist_credit_cofina.type_credit\n                                                        "
      }],
      staticClass: "form-select single-select",
      attrs: {
        type: "text",
        disabled: ""
      },
      domProps: {
        value: hist_credit_cofina.type_credit
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(hist_credit_cofina, "type_credit", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("currency-input", {
      staticClass: "form-control number",
      attrs: {
        "default-typing": false,
        disabled: ""
      },
      model: {
        value: hist_credit_cofina.montant_chez_cofina,
        callback: function callback($$v) {
          _vm.$set(hist_credit_cofina, "montant_chez_cofina", $$v);
        },
        expression: "\n                                                            hist_credit_cofina.montant_chez_cofina\n                                                        "
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
      staticClass: "form-control",
      attrs: {
        type: "text",
        "default-typing": false,
        disabled: ""
      },
      model: {
        value: hist_credit_cofina.duree_chez_cofina,
        callback: function callback($$v) {
          _vm.$set(hist_credit_cofina, "duree_chez_cofina", $$v);
        },
        expression: "\n                                                            hist_credit_cofina.duree_chez_cofina\n                                                        "
      }
    })], 1), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: hist_credit_cofina.statut,
        expression: "\n                                                            hist_credit_cofina.statut\n                                                        "
      }],
      staticClass: "form-select single-select",
      attrs: {
        type: "text",
        disabled: ""
      },
      domProps: {
        value: hist_credit_cofina.statut
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(hist_credit_cofina, "statut", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("currency-input", {
      staticClass: "form-control number",
      attrs: {
        "default-typing": false,
        disabled: ""
      },
      model: {
        value: hist_credit_cofina.encours_cofina,
        callback: function callback($$v) {
          _vm.$set(hist_credit_cofina, "encours_cofina", $$v);
        },
        expression: "\n                                                            hist_credit_cofina.encours_cofina\n                                                        "
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
      staticClass: "form-control number",
      attrs: {
        "default-typing": false,
        disabled: ""
      },
      model: {
        value: hist_credit_cofina.echeance_cofina,
        callback: function callback($$v) {
          _vm.$set(hist_credit_cofina, "echeance_cofina", $$v);
        },
        expression: "\n                                                            hist_credit_cofina.echeance_cofina\n                                                        "
      }
    })], 1), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: hist_credit_cofina.date_entree_relation,
        expression: "\n                                                            hist_credit_cofina.date_entree_relation\n                                                        ",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control",
      attrs: {
        type: "date",
        disabled: ""
      },
      domProps: {
        value: hist_credit_cofina.date_entree_relation
      },
      on: {
        change: function change($event) {
          return _vm.$set(hist_credit_cofina, "date_entree_relation", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: hist_credit_cofina.date_mise_place,
        expression: "\n                                                            hist_credit_cofina.date_mise_place\n                                                        ",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control",
      attrs: {
        type: "date",
        disabled: ""
      },
      domProps: {
        value: hist_credit_cofina.date_mise_place
      },
      on: {
        change: function change($event) {
          return _vm.$set(hist_credit_cofina, "date_mise_place", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: hist_credit_cofina.commentaire,
        expression: "\n                                                            hist_credit_cofina.commentaire\n                                                        ",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control",
      staticStyle: {
        width: "250px"
      },
      attrs: {
        type: "text",
        cols: "25",
        disabled: ""
      },
      domProps: {
        value: hist_credit_cofina.commentaire
      },
      on: {
        change: function change($event) {
          return _vm.$set(hist_credit_cofina, "commentaire", $event.target.value);
        }
      }
    })])]);
  }), _vm._v(" "), _c("br"), _vm._v(" "), _vm._l(_vm.historiques_des_credits_chez_cofina, function (hist_credit_cofina, index) {
    return _c("tr", {
      key: index
    }, [_c("td", {
      staticClass: "font-weight-bold",
      domProps: {
        innerHTML: _vm._s(hist_credit_cofina.numero)
      }
    }), _vm._v(" "), _c("td", [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: hist_credit_cofina.type_credit,
        expression: "\n                                                            hist_credit_cofina.type_credit\n                                                        "
      }],
      staticClass: "form-select single-select input-box",
      attrs: {
        type: "text"
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(hist_credit_cofina, "type_credit", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, _vm.handleInput]
      }
    }, _vm._l(_vm.credits, function (credit, index) {
      return _c("option", {
        key: index + "infdx+",
        domProps: {
          value: credit.libelle
        }
      }, [_vm._v("\n                                                            " + _vm._s(credit.libelle) + "\n                                                        ")]);
    }), 0)]), _vm._v(" "), _c("td", [_c("currency-input", {
      staticClass: "form-control number input-box",
      attrs: {
        id: "montant_chez_cofina",
        "default-typing": false
      },
      on: {
        input: _vm.handleInput
      },
      model: {
        value: hist_credit_cofina.montant_chez_cofina,
        callback: function callback($$v) {
          _vm.$set(hist_credit_cofina, "montant_chez_cofina", $$v);
        },
        expression: "\n                                                            hist_credit_cofina.montant_chez_cofina\n                                                        "
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
      staticClass: "form-control input-box",
      attrs: {
        type: "text",
        id: "duree_chez_cofina",
        "default-typing": false
      },
      on: {
        input: function input($event) {
          return _vm.handleInput($event, index);
        }
      },
      model: {
        value: hist_credit_cofina.duree_chez_cofina,
        callback: function callback($$v) {
          _vm.$set(hist_credit_cofina, "duree_chez_cofina", $$v);
        },
        expression: "\n                                                            hist_credit_cofina.duree_chez_cofina\n                                                        "
      }
    })], 1), _vm._v(" "), _c("td", [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: hist_credit_cofina.statut,
        expression: "\n                                                            hist_credit_cofina.statut\n                                                        "
      }],
      staticClass: "form-select single-select input-box",
      attrs: {
        type: "text"
      },
      on: {
        input: _vm.handleInput,
        change: function change($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(hist_credit_cofina, "statut", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }
      }
    }, [_c("option", {
      attrs: {
        value: "Soldé"
      }
    }, [_vm._v("\n                                                            Soldé\n                                                        ")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "Financé"
      }
    }, [_vm._v("\n                                                            Financé\n                                                        ")])])]), _vm._v(" "), hist_credit_cofina.statut == "Financé" ? _c("td", [_c("currency-input", {
      staticClass: "form-control number input-box",
      attrs: {
        id: "encours_cofina",
        "default-typing": false
      },
      on: {
        input: function input($event) {
          return _vm.handleInput($event, index);
        }
      },
      model: {
        value: hist_credit_cofina.encours_cofina,
        callback: function callback($$v) {
          _vm.$set(hist_credit_cofina, "encours_cofina", $$v);
        },
        expression: "\n                                                            hist_credit_cofina.encours_cofina\n                                                        "
      }
    })], 1) : _c("td", [_c("currency-input", {
      staticClass: "form-control number input-box",
      attrs: {
        id: "encours_cofina",
        "default-typing": false,
        disabled: ""
      },
      on: {
        input: function input($event) {
          return _vm.handleInput($event, index);
        }
      },
      model: {
        value: hist_credit_cofina.encours_cofina,
        callback: function callback($$v) {
          _vm.$set(hist_credit_cofina, "encours_cofina", $$v);
        },
        expression: "\n                                                            hist_credit_cofina.encours_cofina\n                                                        "
      }
    })], 1), _vm._v(" "), hist_credit_cofina.statut == "Financé" ? _c("td", [_c("currency-input", {
      staticClass: "form-control number input-box",
      attrs: {
        id: "echeance_cofina",
        "default-typing": false
      },
      on: {
        input: function input($event) {
          return _vm.handleInput($event, index);
        }
      },
      model: {
        value: hist_credit_cofina.echeance_cofina,
        callback: function callback($$v) {
          _vm.$set(hist_credit_cofina, "echeance_cofina", $$v);
        },
        expression: "\n                                                            hist_credit_cofina.echeance_cofina\n                                                        "
      }
    })], 1) : _c("td", [_c("currency-input", {
      staticClass: "form-control number input-box",
      attrs: {
        id: "echeance_cofina",
        "default-typing": false,
        disabled: ""
      },
      on: {
        input: function input($event) {
          return _vm.handleInput($event, index);
        }
      },
      model: {
        value: hist_credit_cofina.echeance_cofina,
        callback: function callback($$v) {
          _vm.$set(hist_credit_cofina, "echeance_cofina", $$v);
        },
        expression: "\n                                                            hist_credit_cofina.echeance_cofina\n                                                        "
      }
    })], 1), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: hist_credit_cofina.date_entree_relation,
        expression: "\n                                                            hist_credit_cofina.date_entree_relation\n                                                        ",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control input-box",
      attrs: {
        type: "date"
      },
      domProps: {
        value: hist_credit_cofina.date_entree_relation
      },
      on: {
        change: [function ($event) {
          return _vm.$set(hist_credit_cofina, "date_entree_relation", $event.target.value);
        }, function ($event) {
          return _vm.handleInput($event, index);
        }]
      }
    })]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: hist_credit_cofina.date_mise_place,
        expression: "\n                                                            hist_credit_cofina.date_mise_place\n                                                        ",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control input-box",
      attrs: {
        type: "date"
      },
      domProps: {
        value: hist_credit_cofina.date_mise_place
      },
      on: {
        change: [function ($event) {
          return _vm.$set(hist_credit_cofina, "date_mise_place", $event.target.value);
        }, function ($event) {
          return _vm.handleInput($event, index);
        }]
      }
    })]), _vm._v(" "), _c("td", [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: hist_credit_cofina.commentaire,
        expression: "\n                                                            hist_credit_cofina.commentaire\n                                                        ",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control input-box",
      staticStyle: {
        width: "250px"
      },
      attrs: {
        type: "text",
        cols: "25"
      },
      domProps: {
        value: hist_credit_cofina.commentaire
      },
      on: {
        change: [function ($event) {
          return _vm.$set(hist_credit_cofina, "commentaire", $event.target.value);
        }, _vm.handleInput]
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
        border: "none"
      },
      attrs: {
        type: "button",
        title: "Ajouter une nouvelle ligne"
      },
      on: {
        click: function click($event) {
          return _vm.addMore0();
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
          return _vm.remove0(index);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)])]);
  })], 2)])])])]) : _c("div", [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen1 = !_vm.seen1;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "historique-des-crédits-chez-cofina-civ"
    }
  }, [_vm._v("\n                                    Historique des crédits chez COFINA\n                                    "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])]), _vm._v(" "), _c("br"), _vm._v(" "), _vm.seen2 == true ? _c("div", [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen2 = !_vm.seen2;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "historique-des-crédits-chez-autres-banques"
    }
  }, [_vm._v("\n                                    Historique des crédits chez autres\n                                    banques/Confrères\n                                    "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "mt-4"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table mb-5 table-borderless"
  }, [_vm._m(1), _vm._v(" "), _c("tbody", [_vm._l(_vm.getHistoriquesDesCredits(_vm.LesVariables), function (hist_credit, index) {
    return _c("tr", {
      key: index + "mkoj"
    }, [_c("td", [_vm._v(_vm._s(index + 1))]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: hist_credit.banque,
        expression: "\n                                                            hist_credit.banque\n                                                        "
      }],
      staticClass: "form-control",
      attrs: {
        disabled: "",
        title: hist_credit.banque
      },
      domProps: {
        value: hist_credit.banque
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(hist_credit, "banque", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: hist_credit.type_credit,
        expression: "\n                                                            hist_credit.type_credit\n                                                        "
      }],
      staticClass: "form-select single-select",
      attrs: {
        type: "text",
        disabled: ""
      },
      domProps: {
        value: hist_credit.type_credit
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(hist_credit, "type_credit", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("currency-input", {
      staticClass: "form-control number",
      attrs: {
        id: "montant",
        "default-typing": false,
        disabled: ""
      },
      model: {
        value: hist_credit.montant,
        callback: function callback($$v) {
          _vm.$set(hist_credit, "montant", $$v);
        },
        expression: "\n                                                            hist_credit.montant\n                                                        "
      }
    })], 1), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: hist_credit.objectif,
        expression: "\n                                                            hist_credit.objectif\n                                                        ",
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
        value: hist_credit.objectif
      },
      on: {
        change: function change($event) {
          return _vm.$set(hist_credit, "objectif", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("currency-input", {
      staticClass: "form-control",
      attrs: {
        type: "text",
        id: "duree",
        "default-typing": false,
        disabled: ""
      },
      model: {
        value: hist_credit.duree,
        callback: function callback($$v) {
          _vm.$set(hist_credit, "duree", $$v);
        },
        expression: "\n                                                            hist_credit.duree\n                                                        "
      }
    })], 1), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: hist_credit.statut,
        expression: "\n                                                            hist_credit.statut\n                                                        "
      }],
      staticClass: "form-select single-select",
      attrs: {
        type: "text",
        disabled: ""
      },
      domProps: {
        value: hist_credit.statut
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(hist_credit, "statut", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("currency-input", {
      staticClass: "form-control number",
      attrs: {
        id: "encours",
        "default-typing": false,
        disabled: ""
      },
      model: {
        value: hist_credit.encours,
        callback: function callback($$v) {
          _vm.$set(hist_credit, "encours", $$v);
        },
        expression: "\n                                                            hist_credit.encours\n                                                        "
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
      staticClass: "form-control number",
      attrs: {
        id: "echeance",
        "default-typing": false,
        disabled: ""
      },
      model: {
        value: hist_credit.echeance,
        callback: function callback($$v) {
          _vm.$set(hist_credit, "echeance", $$v);
        },
        expression: "\n                                                            hist_credit.echeance\n                                                        "
      }
    })], 1), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: hist_credit.date_entree_relation,
        expression: "\n                                                            hist_credit.date_entree_relation\n                                                        ",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control",
      attrs: {
        type: "date",
        disabled: ""
      },
      domProps: {
        value: hist_credit.date_entree_relation
      },
      on: {
        change: function change($event) {
          return _vm.$set(hist_credit, "date_entree_relation", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: hist_credit.date_sortie,
        expression: "\n                                                            hist_credit.date_sortie\n                                                        ",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control",
      attrs: {
        type: "date",
        disabled: ""
      },
      domProps: {
        value: hist_credit.date_sortie
      },
      on: {
        change: function change($event) {
          return _vm.$set(hist_credit, "date_sortie", $event.target.value);
        }
      }
    })])]);
  }), _vm._v(" "), _c("br"), _vm._v(" "), _vm._l(_vm.historiques_des_credits, function (hist_credit, index) {
    return _c("tr", {
      key: index
    }, [_c("td", {
      staticClass: "font-weight-bold",
      domProps: {
        innerHTML: _vm._s(hist_credit.numero)
      }
    }), _vm._v(" "), _c("td", [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: hist_credit.banque,
        expression: "\n                                                            hist_credit.banque\n                                                        "
      }],
      staticClass: "form-select single-select input-box",
      attrs: {
        id: "banque",
        title: hist_credit.banque
      },
      on: {
        input: _vm.handleInput,
        change: function change($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(hist_credit, "banque", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }
      }
    }, _vm._l(_vm.banques, function (banque, index) {
      return _c("option", {
        key: index,
        domProps: {
          value: banque.libelle
        }
      }, [_vm._v("\n                                                            " + _vm._s(banque.libelle) + "\n                                                        ")]);
    }), 0)]), _vm._v(" "), _c("td", [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: hist_credit.type_credit,
        expression: "\n                                                            hist_credit.type_credit\n                                                        "
      }],
      staticClass: "form-select single-select input-box",
      attrs: {
        type: "text"
      },
      on: {
        input: _vm.handleInput,
        change: function change($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(hist_credit, "type_credit", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }
      }
    }, _vm._l(_vm.credits, function (credit, index) {
      return _c("option", {
        key: index + "indx",
        domProps: {
          value: credit.libelle
        }
      }, [_vm._v("\n                                                            " + _vm._s(credit.libelle) + "\n                                                        ")]);
    }), 0)]), _vm._v(" "), _c("td", [_c("currency-input", {
      staticClass: "form-control number input-box",
      attrs: {
        id: "montant",
        "default-typing": false
      },
      on: {
        input: function input($event) {
          return _vm.handleInput($event, index);
        }
      },
      model: {
        value: hist_credit.montant,
        callback: function callback($$v) {
          _vm.$set(hist_credit, "montant", $$v);
        },
        expression: "\n                                                            hist_credit.montant\n                                                        "
      }
    })], 1), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: hist_credit.objectif,
        expression: "\n                                                            hist_credit.objectif\n                                                        ",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control input-box",
      attrs: {
        type: "text"
      },
      domProps: {
        value: hist_credit.objectif
      },
      on: {
        change: [function ($event) {
          return _vm.$set(hist_credit, "objectif", $event.target.value);
        }, _vm.handleInput]
      }
    })]), _vm._v(" "), _c("td", [_c("currency-input", {
      staticClass: "form-control input-box",
      attrs: {
        type: "text",
        id: "duree",
        "default-typing": false
      },
      on: {
        input: function input($event) {
          return _vm.handleInput($event, index);
        }
      },
      model: {
        value: hist_credit.duree,
        callback: function callback($$v) {
          _vm.$set(hist_credit, "duree", $$v);
        },
        expression: "\n                                                            hist_credit.duree\n                                                        "
      }
    })], 1), _vm._v(" "), _c("td", [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: hist_credit.statut,
        expression: "\n                                                            hist_credit.statut\n                                                        "
      }],
      staticClass: "form-select single-select input-box",
      attrs: {
        type: "text"
      },
      on: {
        input: _vm.handleInput,
        change: function change($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(hist_credit, "statut", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }
      }
    }, [_c("option", {
      attrs: {
        value: "Soldé"
      }
    }, [_vm._v("\n                                                            Soldé\n                                                        ")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "Financé"
      }
    }, [_vm._v("\n                                                            Financé\n                                                        ")])])]), _vm._v(" "), hist_credit.statut == "Financé" ? _c("td", [_c("currency-input", {
      staticClass: "form-control number input-box",
      attrs: {
        id: "encours",
        "default-typing": false
      },
      on: {
        input: function input($event) {
          return _vm.handleInput($event, index);
        }
      },
      model: {
        value: hist_credit.encours,
        callback: function callback($$v) {
          _vm.$set(hist_credit, "encours", $$v);
        },
        expression: "\n                                                            hist_credit.encours\n                                                        "
      }
    })], 1) : _c("td", [_c("currency-input", {
      staticClass: "form-control number input-box",
      attrs: {
        id: "encours",
        "default-typing": false,
        disabled: ""
      },
      on: {
        input: function input($event) {
          return _vm.handleInput($event, index);
        }
      },
      model: {
        value: hist_credit.encours,
        callback: function callback($$v) {
          _vm.$set(hist_credit, "encours", $$v);
        },
        expression: "\n                                                            hist_credit.encours\n                                                        "
      }
    })], 1), _vm._v(" "), hist_credit.statut == "Financé" ? _c("td", [_c("currency-input", {
      staticClass: "form-control number input-box",
      attrs: {
        id: "echeance",
        "default-typing": false
      },
      on: {
        input: function input($event) {
          return _vm.handleInput($event, index);
        }
      },
      model: {
        value: hist_credit.echeance,
        callback: function callback($$v) {
          _vm.$set(hist_credit, "echeance", $$v);
        },
        expression: "\n                                                            hist_credit.echeance\n                                                        "
      }
    })], 1) : _c("td", [_c("currency-input", {
      staticClass: "form-control number input-box",
      attrs: {
        id: "echeance",
        "default-typing": false,
        disabled: ""
      },
      on: {
        input: function input($event) {
          return _vm.handleInput($event, index);
        }
      },
      model: {
        value: hist_credit.echeance,
        callback: function callback($$v) {
          _vm.$set(hist_credit, "echeance", $$v);
        },
        expression: "\n                                                            hist_credit.echeance\n                                                        "
      }
    })], 1), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: hist_credit.date_entree_relation,
        expression: "\n                                                            hist_credit.date_entree_relation\n                                                        ",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control input-box",
      attrs: {
        type: "date"
      },
      domProps: {
        value: hist_credit.date_entree_relation
      },
      on: {
        change: [function ($event) {
          return _vm.$set(hist_credit, "date_entree_relation", $event.target.value);
        }, function ($event) {
          return _vm.handleInput($event, index);
        }]
      }
    })]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: hist_credit.date_sortie,
        expression: "\n                                                            hist_credit.date_sortie\n                                                        ",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control input-box",
      attrs: {
        type: "date"
      },
      domProps: {
        value: hist_credit.date_sortie
      },
      on: {
        change: [function ($event) {
          return _vm.$set(hist_credit, "date_sortie", $event.target.value);
        }, function ($event) {
          return _vm.handleInput($event, index);
        }]
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
        border: "none"
      },
      attrs: {
        type: "button",
        title: "Ajouter une nouvelle ligne"
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
          return _vm.remove(index);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)])]);
  })], 2)])])])]) : _c("div", [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen2 = !_vm.seen2;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "historique-des-crédits-chez-autres-banques"
    }
  }, [_vm._v("\n                                    Historique des crédits chez autres\n                                    banques/Confrères\n                                    "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])]), _vm._v(" "), _c("br"), _vm._v(" "), _vm.seen3 == true ? _c("div", [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen3 = !_vm.seen3;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "centrale-des-risques"
    }
  }, [_vm._v("\n                                    Centrale des risques\n                                    "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "mt-4"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-borderless"
  }, [_c("tbody", [_c("tr", [_c("td", [_vm._v("\n                                                    Centrale des risques au\n                                                ")]), _vm._v(" "), _c("td", [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.formDataToBeWatched.date_centrale_risque,
      expression: "\n                                                            formDataToBeWatched.date_centrale_risque\n                                                        ",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "date"
    },
    domProps: {
      value: _vm.formDataToBeWatched.date_centrale_risque
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.formDataToBeWatched, "date_centrale_risque", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("td", [_vm._v("Adhésion au BIC au")]), _vm._v(" "), _c("td", [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.formDataToBeWatched.date_adhesion_bic,
      expression: "\n                                                            formDataToBeWatched.date_adhesion_bic\n                                                        ",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "date"
    },
    domProps: {
      value: _vm.formDataToBeWatched.date_adhesion_bic
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.formDataToBeWatched, "date_adhesion_bic", $event.target.value);
      }
    }
  })])])])])])])]) : _c("div", [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen3 = !_vm.seen3;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "centrale-des-risques"
    }
  }, [_vm._v("\n                                    Centrale des risques\n                                    "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "card-body mb-5"
  }, [_c("div", [_vm._m(2), _vm._v(" "), _c("div", {}, [_c("vue-editor", {
    attrs: {
      id: "commentaire"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.commentaire,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "commentaire", $$v);
      },
      expression: "\n                                        formDataToBeWatched.commentaire\n                                    "
    }
  })], 1)])]), _vm._v(" "), _vm.seen3 === true ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen3 = !_vm.seen3;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "analyse-de-l’impact-des-crédits-cofina-sur-le-chiffre-d’affaire-du-client"
    }
  }, [_vm._v("\n                                Analyse de l’impact des crédits COFINA sur\n                                le chiffre d’affaire du client\n                                "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "mt-4"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "p-2 mb-5"
  }, [_vm._m(3), _vm._v(" "), _c("tbody", _vm._l(_vm.analyse_impacts, function (analyse_impact, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: analyse_impact.date,
        expression: "\n                                                        analyse_impact.date\n                                                    ",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control",
      attrs: {
        required: "",
        type: "date"
      },
      domProps: {
        value: analyse_impact.date
      },
      on: {
        change: [function ($event) {
          return _vm.$set(analyse_impact, "date", $event.target.value);
        }, _vm.handleInput]
      }
    })]), _vm._v(" "), _c("td", [_c("currency-input", {
      attrs: {
        value: analyse_impact.montant,
        id: "montant"
      },
      on: {
        input: function input($event) {
          return _vm.setAnalyseImpactVars($event, index, "montant");
        }
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
      attrs: {
        value: analyse_impact.ca_cycle1,
        id: "ca_cycle1"
      },
      on: {
        input: function input($event) {
          return _vm.setAnalyseImpactVars($event, index, "ca_cycle1");
        }
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
      attrs: {
        value: analyse_impact.variation1,
        "float": "",
        disabled: "",
        id: "variation1"
      },
      on: {
        input: function input($event) {
          return _vm.setAnalyseImpactVars($event, index, "variation1");
        }
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
      attrs: {
        value: analyse_impact.ca_cycle2,
        id: "ca_cycle2"
      },
      on: {
        input: function input($event) {
          return _vm.setAnalyseImpactVars($event, index, "ca_cycle2");
        }
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
      attrs: {
        value: analyse_impact.variation2,
        "float": "",
        disabled: "",
        id: "variation2"
      },
      on: {
        input: function input($event) {
          return _vm.setAnalyseImpactVars($event, index, "variation2");
        }
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
      attrs: {
        value: analyse_impact.ca_cycle3,
        id: "ca_cycle3"
      },
      on: {
        input: function input($event) {
          return _vm.setAnalyseImpactVars($event, index, "ca_cycle3");
        }
      }
    })], 1), _vm._v(" "), index == 0 ? _c("td", {
      staticStyle: {
        "font-size": "16px"
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
        border: "none"
      },
      attrs: {
        type: "button",
        title: "Ajouter un créancier"
      },
      on: {
        click: function click($event) {
          return _vm.addMore2();
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
        title: "Supprimer ce créancier"
      },
      on: {
        click: function click($event) {
          return _vm.remove2(index);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)])]);
  }), 0)])])]), _vm._v(" "), _c("br")]) : _c("div", [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen3 = !_vm.seen3;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "analyse-de-l’impact-des-crédits-cofina-sur-le-chiffre-d’affaire-du-client"
    }
  }, [_vm._v("\n                                    Analyse de l’impact des crédits COFINA\n                                    sur le chiffre d’affaire du client\n                                    "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])])]), _vm._v(" "), _c("br"), _vm._v(" "), _c("button", {
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
      id: "t17-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Historiques des crédits\n                        ")]), _vm._v(" "), _c("div", {
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
      name: "instruction02",
      width: 450,
      resizable: "",
      height: 200
    }
  }, [_c("div", {
    staticClass: "image02"
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
  return _c("thead", [_c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("#")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Type de crédit")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Montant")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", {
    staticStyle: {
      width: "100px"
    }
  }, [_vm._v("Durée (mois)")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Statut")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Encours")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Echéance (par\n                                                    mois)")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Date de mise en place")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Date de mise en place")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Commentaires")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("#")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Banque/Confrères")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Type de crédit")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Montant")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Objet")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Durée (mois)")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("statut")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Encours")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Echéance (par\n                                                    mois)")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Date de mise en place")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Date de fin d'échéance")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": ""
    }
  }, [_c("b", [_vm._v("Commentaire")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("td", [_c("label", [_vm._v("Date")])]), _vm._v(" "), _c("td", [_c("label", [_vm._v("Montant")])]), _vm._v(" "), _c("td", [_c("label", [_vm._v("Cycle 1 (CA)")])]), _vm._v(" "), _c("td", [_c("label", [_vm._v("Variation")])]), _vm._v(" "), _c("td", [_c("label", [_vm._v("Cycle 2 (CA)")])]), _vm._v(" "), _c("td", [_c("label", [_vm._v("Variation")])]), _vm._v(" "), _c("td", [_c("label", [_vm._v("Cycle 3 (CA)")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/filiale/CA7.vue?vue&type=style&index=0&id=2a269c7a&lang=css&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/filiale/CA7.vue?vue&type=style&index=0&id=2a269c7a&lang=css&scoped=true ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\ninput[data-v-2a269c7a] {\n    /*border: 1px solid red;*/\n}\n*[data-v-2a269c7a] {\n    font-family: \"Google sans\";\n}\nlabel[data-v-2a269c7a] {\n    height: 10px;\n    font-size: 13px;\n}\ninput[data-v-2a269c7a],\n  select[data-v-2a269c7a] {\n    height: 35px;\n    border-color: #34495e;\n    color: #57606f;\n    font-size: 13px;\n    font-weight: bold;\n}\n.card-width-height[data-v-2a269c7a] {\n    width: 100%;\n    height: 100%;\n}\n.head[data-v-2a269c7a] {\n    color: #f1f2f6;\n    font-size: 22px;\n}\n.hdc[data-v-2a269c7a] {\n    background-color: #57606f;\n}\n.image02[data-v-2a269c7a] {\n    background: url(\"/images/capture_cofina/historique.png\") no-repeat;\n    background-position: center;\n    background-size: contain;\n    width: 450px;\n    height: 200px;\n}\ninput[data-v-2a269c7a] {\n    width: 200px;\n}\n.th[data-v-2a269c7a] {\n    padding: 4px;\n    padding-bottom: 0px;\n}\nselect[data-v-2a269c7a] {\n    width: 200px;\n}\n.badge-sm[data-v-2a269c7a] {\n    display: inline-block;\n    width: 15px;\n    height: 15px;\n    background: rgba(255, 0, 0, 0.882);\n    color: white;\n    font-size: 12px;\n    font-weight: 500;\n    border-radius: 100%;\n    position: absolute;\n    top: -20%;\n    left: 55%;\n    text-align: center;\n}\n.relook-header[data-v-2a269c7a] {\n    color: #000;\n    background-color: #f4f3f3;\n    padding: 5px;\n    border-bottom: 1px solid #b6b8bb;\n}\ninput.input-box[data-v-2a269c7a] {\n    background: #00ffff21;\n    color: #000;\n}\nselect.input-box[data-v-2a269c7a] {\n    background: #00ffff21;\n    color: #000;\n}\ntextarea.input-box[data-v-2a269c7a] {\n    background: #00ffff21;\n    color: #000;\n}\n  ", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/filiale/CA7.vue?vue&type=style&index=0&id=2a269c7a&lang=css&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/filiale/CA7.vue?vue&type=style&index=0&id=2a269c7a&lang=css&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA7_vue_vue_type_style_index_0_id_2a269c7a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CA7.vue?vue&type=style&index=0&id=2a269c7a&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/filiale/CA7.vue?vue&type=style&index=0&id=2a269c7a&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA7_vue_vue_type_style_index_0_id_2a269c7a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA7_vue_vue_type_style_index_0_id_2a269c7a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/contreanalyse/cofina/filiale/CA7.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/components/contreanalyse/cofina/filiale/CA7.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CA7_vue_vue_type_template_id_2a269c7a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CA7.vue?vue&type=template&id=2a269c7a&scoped=true */ "./resources/js/components/contreanalyse/cofina/filiale/CA7.vue?vue&type=template&id=2a269c7a&scoped=true");
/* harmony import */ var _CA7_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CA7.vue?vue&type=script&lang=js */ "./resources/js/components/contreanalyse/cofina/filiale/CA7.vue?vue&type=script&lang=js");
/* harmony import */ var _CA7_vue_vue_type_style_index_0_id_2a269c7a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CA7.vue?vue&type=style&index=0&id=2a269c7a&lang=css&scoped=true */ "./resources/js/components/contreanalyse/cofina/filiale/CA7.vue?vue&type=style&index=0&id=2a269c7a&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CA7_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CA7_vue_vue_type_template_id_2a269c7a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _CA7_vue_vue_type_template_id_2a269c7a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2a269c7a",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/contreanalyse/cofina/filiale/CA7.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/contreanalyse/cofina/filiale/CA7.vue?vue&type=script&lang=js":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/cofina/filiale/CA7.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CA7_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CA7.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/filiale/CA7.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CA7_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/contreanalyse/cofina/filiale/CA7.vue?vue&type=style&index=0&id=2a269c7a&lang=css&scoped=true":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/cofina/filiale/CA7.vue?vue&type=style&index=0&id=2a269c7a&lang=css&scoped=true ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA7_vue_vue_type_style_index_0_id_2a269c7a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CA7.vue?vue&type=style&index=0&id=2a269c7a&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/filiale/CA7.vue?vue&type=style&index=0&id=2a269c7a&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/contreanalyse/cofina/filiale/CA7.vue?vue&type=template&id=2a269c7a&scoped=true":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/cofina/filiale/CA7.vue?vue&type=template&id=2a269c7a&scoped=true ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA7_vue_vue_type_template_id_2a269c7a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA7_vue_vue_type_template_id_2a269c7a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA7_vue_vue_type_template_id_2a269c7a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CA7.vue?vue&type=template&id=2a269c7a&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/cofina/filiale/CA7.vue?vue&type=template&id=2a269c7a&scoped=true");


/***/ })

}]);