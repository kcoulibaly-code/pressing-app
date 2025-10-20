"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_forms_afg_memorandum_F7_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/memorandum/F7.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/memorandum/F7.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../helpers/helper */ "./resources/js/helpers/helper.js");
/* harmony import */ var _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vueform/multiselect/dist/multiselect.vue2 */ "./node_modules/@vueform/multiselect/dist/multiselect.vue2.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../helpers/indexedDB */ "./resources/js/helpers/indexedDB.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_helpers_indexedDB__WEBPACK_IMPORTED_MODULE_4__);
/* provided dependency */ var process = __webpack_require__(/*! process/browser.js */ "./node_modules/process/browser.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }








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
  name: "condition-vente-approvisionnement",
  display: "condition-vente-approvisionnement",
  components: {
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_5__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_5__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_5__.ChevronDownIcon,
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_5__.PlusIcon,
    BookOpenIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_5__.BookOpenIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_5__.TrashIcon,
    AirplayIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_5__.AirplayIcon,
    Multiselect: _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  computed: {
    totalPartPourcentageClient: function totalPartPourcentageClient() {
      var trying = this.condition_ventes.map(function (el) {
        el.part_au_total = String(el.part_au_total).replace(/\s+/g, "");
        if (!el.part_au_total) return 0;
        return Number(el.part_au_total);
      }).reduce(function (sum, curr) {
        return sum + curr;
      }, 0);
      if (trying > 100) return "100.00";
      return trying.toLocaleString("fr-FR");
    },
    clientMaxNumber: function clientMaxNumber() {
      var restant = 100 - Number(this.totalPartPourcentageClient);
      if (restant < 0) return 0;
      return restant;
    },
    totalMontantClient: function totalMontantClient() {
      var trying = this.condition_ventes.map(function (el) {
        el.montant_mensuel_moyen = String(el.montant_mensuel_moyen).replace(/\s+/g, "");
        if (!el.montant_mensuel_moyen) return 0;
        return Number(el.montant_mensuel_moyen);
      }).reduce(function (sum, curr) {
        return sum + curr;
      }, 0);
      return trying.toLocaleString("fr-FR");
    },
    totalPartPourcentageFournisseur: function totalPartPourcentageFournisseur() {
      var trying = this.condition_approvisionnements.map(function (el) {
        el.part_au_total = String(el.part_au_total).replace(/\s+/g, "");
        if (!el.part_au_total) return 0;
        return Number(el.part_au_total);
      }).reduce(function (sum, curr) {
        return sum + curr;
      }, 0);
      if (trying > 100) return "100.00";
      return trying.toLocaleString("fr-FR");
    },
    fournMaxNumber: function fournMaxNumber() {
      var restant = 100 - Number(this.totalPartPourcentageFournisseur);
      if (restant < 0) return 0;
      return restant;
    },
    totalMontantFournisseur: function totalMontantFournisseur() {
      var trying = this.condition_approvisionnements.map(function (el) {
        el.montant_mensuel_moyen = String(el.montant_mensuel_moyen).replace(/\s+/g, "");
        if (!el.montant_mensuel_moyen) return 0;
        return Number(el.montant_mensuel_moyen);
      }).reduce(function (sum, curr) {
        return sum + curr;
      }, 0);
      return trying.toLocaleString("fr-FR");
    }
  },
  props: {
    meta_data: Object,
    tb_name: String,
    tb_display_name: String
  },
  created: function created() {
    // ? Setup cache listeners and stuff
    // this.setupCache();
    //
  },
  mounted: function mounted() {
    // Initiate cache

    // // this.initCache();
    //

    this.loadRetrieved();
    this.loadTbAttrs(); // charge les attributs + sous attributs des tables
    // helper.loadCurrencyFormatter();
    this.tableClosedOrOpened();
  },
  data: function data() {
    var _formDataToBeWatched;
    var vm = this;
    return {
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
      }],
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
      etat: "",
      meta_parseable: {
        cred_pub_key: this.meta_data["cred_pub_key"],
        tb_name: this.tb_name
      },
      cleanedForm: {},
      formDataToBeWatched: (_formDataToBeWatched = {
        condition_approvisionnements: "",
        condition_ventes: "",
        total_fournisseurs: 0,
        total_client: 0,
        participation: "",
        commentaire_rentabilite: "",
        commentaire_conditions_ventes: "",
        notes: [],
        nbre_total_client: "",
        total_montant: "",
        total_part: "",
        total_montant_fournisseur: "",
        total_part_fournisseur: ""
      }, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_formDataToBeWatched, "participation", ""), "notes", []), "commentaire_description__", ""), "diversification", ""), "structure_fournisseur", ""), "Structure_clientele", ""), "saisonnalite", ""), "Couverture_geographique", ""), "concurrence", ""), "appreciation", ""), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_formDataToBeWatched, "commentaire_fournisseur", ""), "commentaire_concurrence", ""), "commentaire_client", ""), "presentation_client", ""), "principaux_concurrents", [])),
      decision_theorique: "",
      // Ajouter note
      //listingNote: false,
      condition_ventes: [{
        client: "",
        destination: "",
        type_vente: "",
        delai_reglement: "",
        mode_reglement: [],
        condition_vente: "",
        part_au_total: "",
        montant_mensuel_moyen: "",
        max: 100,
        autre_type_vente: ""
      }],
      condition_approvisionnements: [{
        fournisseur: "",
        provenance: "",
        type_achat: "",
        delai_reglement: "",
        mode_reglement: [],
        conditions_paiement: "",
        part_au_total: "",
        montant_mensuel_moyen: "",
        max: 100,
        autre_type_achat: ""
      }],
      mode_reglement_options: [{
        value: '',
        label: ''
      }, {
        value: 'CASH',
        label: 'CASH'
      }, {
        value: 'CHEQUE',
        label: 'CHEQUE'
      }, {
        value: 'TRAITE',
        label: 'TRAITE'
      }, {
        value: 'VIREMENT',
        label: 'VIREMENT'
      }, {
        value: 'PAIEMENT A VUE',
        label: 'PAIEMENT A VUE'
      }],
      principaux_concurrents: [{
        concurrent: "",
        part_marche: 0,
        position: ""
      }]
    };
  },
  methods: {
    selectedOptionsToString: function selectedOptionsToString(values) {
      return values.map(function (el) {
        return el.label;
      }).toString();
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
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (_DEBUG) console.log(">> updateFormDataForDeletion");
              _this.formDataToBeWatched.is_deleted = true;
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
      var _this2 = this;
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
              if (!_this2.formDataToBeWatched.is_deleted) {
                _context2.next = 5;
                break;
              }
              return _context2.abrupt("return");
            case 5:
              // Upload current (and arguably latest) formDataToBeWatched data

              _this2.uploadDataToServerAndUpdateLastSave(_this2.formDataToBeWatched, _this2.formDataToBeWatched);
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
      var _this3 = this;
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
                  _this3.uploadDataToServerAndUpdateLastSave(newVal, oldVal);
                }
              }
              // First upload
              if (!_lastSaveTime) {
                _this3.uploadDataToServerAndUpdateLastSave(newVal, oldVal);
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
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              if (_DEBUG) console.log(">> uploadDataToServerAndUpdateLastSave");
              _context4.prev = 1;
              if (_DEBUG) console.log(">> this.autosaving");
              _context4.next = 5;
              return _this4.autosaving(newVal, oldVal);
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
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              if (_DEBUG) console.log(">> uploadDataToServerBeforePageCloses");
              _context5.prev = 1;
              _context5.next = 4;
              return _this5.autosaving(newVal, oldVal);
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
      var _this6 = this;
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
              return _this6.autosaving(_this6.formDataToBeWatched, _this6.formDataToBeWatched);
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
    openNotesModal: function openNotesModal() {
      var listing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.listingNote = listing;
      this.$modal.show(this.tb_name);
    },
    launchAutoSaver: function launchAutoSaver() {
      var _this7 = this;
      _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["default"].loadUserData().then(function (res) {
        _this7.send2Backend(res, 0, 0);
      })["catch"](function (err) {
        _this7.loadWithError(err);
      });
    },
    addNote: function addNote() {
      // this.$set(this.formDataToBeWatched.notes, )
      if (this.newNote.length) {
        var note = {
          id: +new Date(),
          note: this.newNote,
          added_at: new Date().toLocaleDateString() + " à " + new Date().toLocaleTimeString()
        };
        this.formDataToBeWatched.notes.push(note);
        this.newNote = "";
        this.$modal.hide(this.tb_name);
      } else {
        this.$toasted.show("Aucune note saisie.");
      }
    },
    tableClosedOrOpened: function tableClosedOrOpened() {
      this.seen = this.fetchClosedTables(this.tb_name + this.meta_data["cred_pub_key"]);
    },
    setConditionVenteVars: function setConditionVenteVars(event, index, key) {
      // si la valeur a été tapée au clavier
      // if (event[2]) {
      //     if (this.condition_ventes[index].part_au_total == 0)
      //         this.condition_ventes[index].max = this.clientMaxNumber;
      //     if (Number(this.condition_ventes[index].part_au_total) > 0)
      //         this.condition_ventes[index].max =
      //             Number(this.clientMaxNumber) +
      //             Number(this.condition_ventes[index][event[0]]);
      // }
      // this.condition_ventes[index][event[0]] = event[1];
      // this.handleInput();

      if (key == 'part_au_total') {
        if (this.condition_ventes[index].part_au_total == 0) this.condition_ventes[index].max = this.clientMaxNumber;
        if (Number(this.condition_ventes[index].part_au_total) > 0) this.condition_ventes[index].max = Number(this.clientMaxNumber) + Number(this.condition_ventes[index][key]);
      }
      this.condition_ventes[index][key] = event[1];
      this.handleInput();
    },
    setConditionApprovisionnement: function setConditionApprovisionnement(event, index, key) {
      // si la valeur a été tapée au clavier
      // if (event[2]) {
      //     if (this.condition_approvisionnements[index].part_au_total == 0)
      //         this.condition_approvisionnements[index].max =
      //             this.fournMaxNumber;
      //     if (
      //         Number(
      //             this.condition_approvisionnements[index].part_au_total
      //         ) > 0
      //     )
      //         this.condition_approvisionnements[index].max =
      //             Number(this.fournMaxNumber) +
      //             Number(
      //                 this.condition_approvisionnements[index][event[0]]
      //             );
      // }
      // this.condition_approvisionnements[index][key] = event[1];
      // this.handleInput();

      if (key == "part_au_total") {
        if (this.condition_approvisionnements[index].part_au_total == 0) this.condition_approvisionnements[index].max = this.fournMaxNumber;
        if (Number(this.condition_approvisionnements[index].part_au_total) > 0) this.condition_approvisionnements[index].max = Number(this.fournMaxNumber) + Number(this.condition_approvisionnements[index][key]);
      }
      this.condition_approvisionnements[index][key] = event[1];
      this.handleInput();
    },
    setGarantiePrendreVars: function setGarantiePrendreVars(event, index) {
      this.garanties_prendres[index][event[0]] = event[1];
      this.handleInput();
    },
    formDataVars: function formDataVars(event) {
      this.formDataToBeWatched[event[0]] = event[1];
    },
    loadRetrieved: function loadRetrieved() {
      var _this$meta_data$dossi;
      var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];

      // Close table by default
      this.defaultRetract(false, (_this$meta_data$dossi = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi.applied_templ_id);
      if (lentb.length > 0) {
        if (this.meta_data["dossier_credit"][createdKey] != undefined) {
          this.formDataToBeWatched = this.meta_data["dossier_credit"][createdKey];
          if (this.meta_data["dossier_credit"][createdKey]["condition_ventes"] != "") {
            this.condition_ventes = this.meta_data["dossier_credit"][createdKey]["condition_ventes"];
          }
          this.meta_data["dossier_credit"][createdKey];
          if (this.meta_data["dossier_credit"][createdKey]["condition_approvisionnements"] != "") {
            this.condition_approvisionnements = this.meta_data["dossier_credit"][createdKey]["condition_approvisionnements"];
          }
          if (this.meta_data["dossier_credit"][createdKey]["principaux_concurrents"] != "") {
            this.principaux_concurrents = this.meta_data["dossier_credit"][createdKey]["principaux_concurrents"];
          }
        }

        // if (this.meta_data["dossier_credit"][createdKey]['garanties_specifiques'] != "") {
        //   this.garanties_specifiques = this.meta_data["dossier_credit"][createdKey]['garanties_specifiques'];
        // }
      }
      // Close table by default
      // this.defaultRetract(
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
    retract3: function retract3() {
      this.seen3 = !this.seen3;
    },
    addMore: function addMore() {
      this.condition_ventes.push({
        client: "",
        destination: "",
        type_vente: "",
        delai_reglement: "",
        mode_reglement: [],
        condition_vente: "",
        part_au_total: "",
        montant_mensuel_moyen: "",
        max: this.clientMaxNumber
      });
    },
    addMore1: function addMore1() {
      this.condition_approvisionnements.push({
        fournisseur: "",
        provenance: "",
        type_achat: "",
        delai_reglement: "",
        mode_reglement: [],
        conditions_paiement: "",
        part_au_total: "",
        montant_mensuel_moyen: "",
        max: this.fournMaxNumber
      });
    },
    addMore3: function addMore3() {
      this.principaux_concurrents.push({
        concurrent: "",
        part_marche: 0,
        position: ""
      });
    },
    remove3: function remove3(index) {
      this.principaux_concurrents.splice(index, 1);
      this.handleInput();
    },
    remove: function remove(index) {
      this.condition_ventes.splice(index, 1);
      // this.formDataToBeWatched.total_valeur_bilan_debiteur = this.somX3(
      //     this.principaux_debiteurs,
      //     "montant_debiteur"
      // );
      this.formDataToBeWatched.total_montant = this.totalMontantClient;
      this.formDataToBeWatched.total_part = this.totalPartPourcentageClient;
      this.handleInput();
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
        id: "f9-head"
      };
      // console.log(p)
      this.$emit("load-buffer", p);
    },
    remove1: function remove1(index) {
      this.condition_approvisionnements.splice(index, 1);
      this.formDataToBeWatched.total_montant_fournisseur = this.totalMontantFournisseur;
      this.formDataToBeWatched.total_part_fournisseur = this.totalPartPourcentageFournisseur;
      this.handleInput();
    },
    reglementConditionVente: function reglementConditionVente(key) {
      this.condition_ventes.forEach(function (condition_vente, index) {
        if (condition_vente.mode_reglement == "CASH" && index === key) {
          condition_vente.delai_reglement = 0;
        } else {
          condition_vente.delai_reglement = condition_vente.delai_reglement;
        }
      });
    },
    reglementConditionApprovisionnement: function reglementConditionApprovisionnement(key) {
      this.condition_approvisionnements.forEach(function (condition_approvisionnement, index) {
        if (condition_approvisionnement.mode_reglement == "CASH" && index === key) {
          condition_approvisionnement.delai_reglement = 0;
        } else {
          condition_approvisionnement.delai_reglement = condition_approvisionnement.delai_reglement;
        }
      });
    },
    // SOMME DES MONTANTS
    somX3: function somX3(ob, key) {
      var som = 0;
      ob.filter(function (elm) {
        var result = String(elm[key]).replace(/\s+/g, "");
        if (result === "") {
          som += 0;
        } else {
          som += parseInt(result);
        }
      });
      return som;
    },
    precomputeScore: function precomputeScore() {
      var scoringVar = ["diversification", "structure_fournisseur", "Structure_clientele", "saisonnalite", "Couverture_geographique", "concurrence"];
      for (var i = 0; i < scoringVar.length; i++) {
        if (this.formDataToBeWatched[scoringVar[i]] == "") {
          return false;
        } else {
          this.cleanedForm[scoringVar[i]] = this.formDataToBeWatched[scoringVar[i]];
        }
      }
      return true;
    },
    launchScoringTable: function launchScoringTable() {
      if (this.precomputeScore() === true) {
        this.$axios.post(this.ebapisHost + "cofiscore/api/v1/launchscorer-table/", {
          user: this.authcheckUsr,
          meta_parseable: this.meta_parseable,
          filledData: this.cleanedForm
        }).then(function (response) {
          var tbFetcheData = response.data;
          // console.log(tbFetcheData)
          this.decision_theorique = tbFetcheData["decision_theorique"];
        }.bind(this))["catch"](function (error) {
          this.$Progress.finish();
          console.log(error);
        }.bind(this));
      }
    },
    handleInput: function handleInput(evt) {
      this.formDataToBeWatched["condition_ventes"] = this.condition_ventes;
      this.formDataToBeWatched["condition_approvisionnements"] = this.condition_approvisionnements;
      this.formDataToBeWatched.total_montant = this.totalMontantClient;
      this.formDataToBeWatched.total_part = this.totalPartPourcentageClient;
      this.formDataToBeWatched.total_montant_fournisseur = this.totalMontantFournisseur;
      this.formDataToBeWatched.total_part_fournisseur = this.totalPartPourcentageFournisseur;
      this.formDataToBeWatched["principaux_concurrents"] = this.principaux_concurrents;
    },
    instruction4: function instruction4(id) {
      var id0 = "#" + id;
      window.$(id0).modal("show");
    }
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/memorandum/F7.vue?vue&type=template&id=046b87c1&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/memorandum/F7.vue?vue&type=template&id=046b87c1&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      id: "f9-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                                " + _vm._s(_vm.tb_display_name) + " : Analyse du marché et paysage concurrentiel\n                            ")]), _vm._v(" "), _c("div", {
    staticClass: "col-auto"
  }, [_vm.formDataToBeWatched.notes.length > 0 ? _c("div", {
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
  }, [_c("span", [_vm._v("\n                                                " + _vm._s(_vm.formDataToBeWatched.notes.length) + "\n                                            ")])])])]) : _vm._e(), _vm._v(" "), _c("airplay-icon", {
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
        return _vm.$modal.show("qualite_des_contreparties");
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
    staticClass: "col-12 p-0"
  }, [_vm.seen1 === true ? _c("div", {
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
      id: "clients"
    }
  }, [_vm._v("\n                                Clients\n                                    "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    attrs: {
      id: "div_autres_surete"
    }
  }, [_c("div", {
    staticClass: "col-md-12 mt-3 mb-3"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "mx-2 mb-2",
    staticStyle: {
      "font-size": "0.7em"
    }
  }, [_vm._v("\n                                        - Analyse du marché : analyse de l’évolution de la demande ; évolution de l’offre, les principaux acteurs ; les contraintes réglementaires ; le taux de pénétration, le potentiel de développement de la filière\n                                    ")]), _vm._v(" "), _c("vue-editor", {
    attrs: {
      id: "bref_historique"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.presentation_client,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "presentation_client", $$v);
      },
      expression: "\n                                            formDataToBeWatched.presentation_client\n                                        "
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "table-responsive mt-1",
    attrs: {
      id: "div_autres_surete"
    }
  }, [_c("table", {
    staticClass: "table table-borderless"
  }, [_c("thead", [_c("tr", [_vm._m(1), _vm._v(" "), _vm._m(2), _vm._v(" "), _vm._m(3), _vm._v(" "), _vm.condition_ventes.some(function (type) {
    return type.type_vente === "AUTRE";
  }) ? _c("th", [_vm._m(4)]) : _vm._e(), _vm._v(" "), _vm._m(5), _vm._v(" "), _vm._m(6), _vm._v(" "), _vm._m(7), _vm._v(" "), _vm._m(8), _vm._v(" "), _vm._m(9)])]), _vm._v(" "), _c("tfoot", [_c("tr", [_c("td", {
    attrs: {
      colspan: _vm.condition_ventes.some(function (type) {
        return type.type_vente === "AUTRE";
      }) ? 6 : 5
    }
  }), _vm._v(" "), _vm._m(10), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      percentage: "",
      max: 100,
      value: _vm.formDataToBeWatched.total_part,
      id: "total_part",
      "float": "",
      disabled: ""
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      value: _vm.formDataToBeWatched.total_montant,
      id: "total_montant",
      disabled: ""
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1)])]), _vm._v(" "), _c("tbody", _vm._l(_vm.condition_ventes, function (condition_vente, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: condition_vente.client,
        expression: "condition_vente.client",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control",
      staticStyle: {
        "min-width": "120px"
      },
      attrs: {
        required: "",
        type: "text"
      },
      domProps: {
        value: condition_vente.client
      },
      on: {
        change: [function ($event) {
          return _vm.$set(condition_vente, "client", $event.target.value);
        }, _vm.handleInput]
      }
    })]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: condition_vente.destination,
        expression: "condition_vente.destination",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control",
      staticStyle: {
        "min-width": "120px"
      },
      attrs: {
        required: "",
        type: "text"
      },
      domProps: {
        value: condition_vente.destination
      },
      on: {
        change: [function ($event) {
          return _vm.$set(condition_vente, "destination", $event.target.value);
        }, _vm.handleInput]
      }
    })]), _vm._v(" "), _c("td", [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: condition_vente.type_vente,
        expression: "condition_vente.type_vente",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-select single-select",
      staticStyle: {
        "min-width": "120px"
      },
      attrs: {
        required: "",
        id: "type_vente"
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
          _vm.$set(condition_vente, "type_vente", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }
      }
    }, [_c("option", {
      attrs: {
        value: ""
      }
    }), _vm._v(" "), _c("option", {
      attrs: {
        selected: "",
        disabled: "",
        hidden: ""
      }
    }, [_vm._v("\n                                                            ---\n                                                        ")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "EN GROS"
      }
    }, [_vm._v("\n                                                            EN GROS\n                                                        ")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "EN DETAIL"
      }
    }, [_vm._v("\n                                                            EN DETAIL\n                                                        ")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "SERVICES"
      }
    }, [_vm._v("\n                                                            SERVICES\n                                                        ")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "AUTRE"
      }
    }, [_vm._v("\n                                                            AUTRE\n                                                        ")])])]), _vm._v(" "), _vm.condition_ventes.some(function (type) {
      return type.type_vente === "AUTRE";
    }) ? _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: condition_vente.autre_type_vente,
        expression: "condition_vente.autre_type_vente",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control",
      staticStyle: {
        "min-width": "120px"
      },
      attrs: {
        required: "",
        type: "text",
        disabled: condition_vente.type_vente !== "AUTRE"
      },
      domProps: {
        value: condition_vente.autre_type_vente
      },
      on: {
        change: [function ($event) {
          return _vm.$set(condition_vente, "autre_type_vente", $event.target.value);
        }, _vm.handleInput]
      }
    })]) : _vm._e(), _vm._v(" "), _c("td", [_c("multiselect", {
      attrs: {
        options: _vm.mode_reglement_options,
        mode: "multiple",
        "close-on-select": false,
        "clear-on-select": false,
        "preserve-search": true,
        placeholder: "",
        label: "label",
        "track-by": "label",
        "preselect-first": false,
        searchable: true,
        allowAbsent: false
      },
      scopedSlots: _vm._u([{
        key: "multiplelabel",
        fn: function fn(_ref) {
          var values = _ref.values;
          return [_c("div", {
            staticClass: "multiselect-multiple-label"
          }, [_vm._v("\n                                                        " + _vm._s(_vm.selectedOptionsToString(values)) + "\n                                                        ")])];
        }
      }], null, true),
      model: {
        value: condition_vente.mode_reglement,
        callback: function callback($$v) {
          _vm.$set(condition_vente, "mode_reglement", $$v);
        },
        expression: "condition_vente.mode_reglement"
      }
    })], 1), _vm._v(" "), _c("td", [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: condition_vente.condition_vente,
        expression: "\n                                                            condition_vente.condition_vente\n                                                        "
      }],
      staticClass: "form-select single-select",
      staticStyle: {
        "min-width": "120px"
      },
      attrs: {
        required: "",
        id: "mode_reglement"
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(condition_vente, "condition_vente", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, _vm.handleInput],
        input: _vm.handleInput
      }
    }, [_c("option", {
      attrs: {
        value: ""
      }
    }), _vm._v(" "), _c("option", {
      attrs: {
        selected: "",
        disabled: "",
        hidden: ""
      }
    }, [_vm._v("\n                                                            ---\n                                                        ")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "Credit"
      }
    }, [_vm._v("Credit")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "Comptant"
      }
    }, [_vm._v("\n                                                            Comptant\n                                                        ")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "Remise documentaire"
      }
    }, [_vm._v("\n                                                            Remise documentaire\n                                                        ")])])]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: condition_vente.delai_reglement,
        expression: "\n                                                            condition_vente.delai_reglement\n                                                        ",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control",
      staticStyle: {
        "min-width": "120px"
      },
      attrs: {
        required: "",
        readonly: condition_vente.mode_reglement === "CASH",
        type: "number"
      },
      domProps: {
        value: condition_vente.delai_reglement
      },
      on: {
        change: [function ($event) {
          return _vm.$set(condition_vente, "delai_reglement", $event.target.value);
        }, _vm.handleInput]
      }
    })]), _vm._v(" "), _c("td", [_c("currency-input", {
      staticStyle: {
        "min-width": "120px"
      },
      attrs: {
        percentage: "",
        max: condition_vente.max,
        value: condition_vente.part_au_total,
        id: "condition_vente_part_au_total",
        "float": ""
      },
      on: {
        input: function input($event) {
          return _vm.setConditionVenteVars($event, index, "part_au_total");
        }
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
      staticStyle: {
        "min-width": "120px"
      },
      attrs: {
        value: condition_vente.montant_mensuel_moyen,
        id: "condition_vente_montant_mensuel_moyen"
      },
      on: {
        input: function input($event) {
          return _vm.setConditionVenteVars($event, index, "montant_mensuel_moyen");
        }
      }
    })], 1), _vm._v(" "), index == 0 ? _c("td", {
      staticClass: "col-1",
      staticStyle: {
        "margin-left": "0px",
        "margin-top": "5px"
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
        title: "Ajouter une nouvelle condition"
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
    })], 1)]) : _c("td", {
      staticClass: "col-1",
      staticStyle: {
        "margin-left": "0px",
        "margin-top": "5px"
      }
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
          return _vm.remove(index);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)])]);
  }), 0)])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 mt-3 mb-3"
  }, [_vm._m(11), _vm._v(" "), _c("vue-editor", {
    attrs: {
      id: "bref_historique"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.commentaire_client,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "commentaire_client", $$v);
      },
      expression: "\n                                            formDataToBeWatched.commentaire_client\n                                        "
    }
  })], 1)])]) : _c("div", [_c("div", {
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
      id: "clients"
    }
  }, [_vm._v("\n                                        Clients\n                                        "), _c("chevron-down-icon", {
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
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "fournisseurs"
    }
  }, [_vm._v("\n                                    Fournisseurs\n                                    "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    attrs: {
      id: "div_autres_surete"
    }
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-borderless"
  }, [_c("thead", [_c("tr", [_vm._m(12), _vm._v(" "), _vm._m(13), _vm._v(" "), _vm._m(14), _vm._v(" "), _vm.condition_approvisionnements.some(function (type) {
    return type.type_achat === "AUTRE";
  }) ? _c("th", [_vm._m(15)]) : _vm._e(), _vm._v(" "), _vm._m(16), _vm._v(" "), _vm._m(17), _vm._v(" "), _vm._m(18), _vm._v(" "), _vm._m(19), _vm._v(" "), _vm._m(20)])]), _vm._v(" "), _c("tfoot", [_c("tr", [_c("td", {
    attrs: {
      colspan: _vm.condition_approvisionnements.some(function (type) {
        return type.type_achat === "AUTRE";
      }) ? 6 : 5
    }
  }), _vm._v(" "), _vm._m(21), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      max: 100,
      percentage: "",
      value: _vm.formDataToBeWatched.total_part_fournisseur,
      id: "total_part_fournisseur",
      disabled: "",
      "float": ""
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      value: _vm.formDataToBeWatched.total_montant_fournisseur,
      id: "total_montant_fournisseur",
      disabled: ""
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1)])]), _vm._v(" "), _c("tbody", _vm._l(_vm.condition_approvisionnements, function (condition_approvisionnement, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: condition_approvisionnement.fournisseur,
        expression: "\n                                                            condition_approvisionnement.fournisseur\n                                                        ",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control",
      staticStyle: {
        "min-width": "120px"
      },
      attrs: {
        required: "",
        type: "text"
      },
      domProps: {
        value: condition_approvisionnement.fournisseur
      },
      on: {
        input: _vm.handleInput,
        change: function change($event) {
          return _vm.$set(condition_approvisionnement, "fournisseur", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: condition_approvisionnement.provenance,
        expression: "\n                                                            condition_approvisionnement.provenance\n                                                        ",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control",
      staticStyle: {
        "min-width": "120px"
      },
      attrs: {
        required: "",
        type: "text"
      },
      domProps: {
        value: condition_approvisionnement.provenance
      },
      on: {
        input: _vm.handleInput,
        change: function change($event) {
          return _vm.$set(condition_approvisionnement, "provenance", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: condition_approvisionnement.type_achat,
        expression: "\n                                                            condition_approvisionnement.type_achat\n                                                        "
      }],
      staticClass: "form-select single-select",
      staticStyle: {
        "min-width": "120px"
      },
      attrs: {
        required: "",
        id: "type_achat"
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
          _vm.$set(condition_approvisionnement, "type_achat", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }
      }
    }, [_c("option", {
      attrs: {
        value: ""
      }
    }), _vm._v(" "), _c("option", {
      attrs: {
        selected: "",
        disabled: "",
        hidden: ""
      }
    }, [_vm._v("\n                                                            ---\n                                                        ")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "EN GROS"
      }
    }, [_vm._v("\n                                                            EN GROS\n                                                        ")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "EN DETAIL"
      }
    }, [_vm._v("\n                                                            EN DETAIL\n                                                        ")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "SERVICES"
      }
    }, [_vm._v("\n                                                            SERVICES\n                                                        ")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "AUTRE"
      }
    }, [_vm._v("\n                                                            AUTRE\n                                                        ")])])]), _vm._v(" "), _vm.condition_approvisionnements.some(function (type) {
      return type.type_achat === "AUTRE";
    }) ? _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: condition_approvisionnement.autre_type_achat,
        expression: "condition_approvisionnement.autre_type_achat",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control",
      staticStyle: {
        "min-width": "120px"
      },
      attrs: {
        required: "",
        type: "text",
        disabled: condition_approvisionnement.type_achat !== "AUTRE"
      },
      domProps: {
        value: condition_approvisionnement.autre_type_achat
      },
      on: {
        change: [function ($event) {
          return _vm.$set(condition_approvisionnement, "autre_type_achat", $event.target.value);
        }, _vm.handleInput]
      }
    })]) : _vm._e(), _vm._v(" "), _c("td", [_c("multiselect", {
      attrs: {
        options: _vm.mode_reglement_options,
        mode: "multiple",
        "close-on-select": false,
        "clear-on-select": false,
        "preserve-search": true,
        placeholder: "",
        label: "label",
        "track-by": "label",
        "preselect-first": false,
        searchable: true,
        allowAbsent: false
      },
      scopedSlots: _vm._u([{
        key: "multiplelabel",
        fn: function fn(_ref2) {
          var values = _ref2.values;
          return [_c("div", {
            staticClass: "multiselect-multiple-label"
          }, [_vm._v("\n                                                        " + _vm._s(_vm.selectedOptionsToString(values)) + "\n                                                        ")])];
        }
      }], null, true),
      model: {
        value: condition_approvisionnement.mode_reglement,
        callback: function callback($$v) {
          _vm.$set(condition_approvisionnement, "mode_reglement", $$v);
        },
        expression: "condition_approvisionnement.mode_reglement"
      }
    })], 1), _vm._v(" "), _c("td", [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: condition_approvisionnement.conditions_paiement,
        expression: "\n                                                            condition_approvisionnement.conditions_paiement\n                                                        "
      }],
      staticClass: "form-select single-select",
      staticStyle: {
        "min-width": "120px"
      },
      attrs: {
        required: "",
        id: "conditions_paiement"
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(condition_approvisionnement, "conditions_paiement", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, _vm.handleInput],
        input: _vm.handleInput
      }
    }, [_c("option", {
      attrs: {
        value: ""
      }
    }), _vm._v(" "), _c("option", {
      attrs: {
        selected: "",
        disabled: "",
        hidden: ""
      }
    }, [_vm._v("\n                                                            ---\n                                                        ")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "Credit"
      }
    }, [_vm._v("Credit")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "Comptant"
      }
    }, [_vm._v("\n                                                            Comptant\n                                                        ")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "Remise documentaire"
      }
    }, [_vm._v("\n                                                            Remise documentaire\n                                                        ")])])]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: condition_approvisionnement.delai_reglement,
        expression: "\n                                                            condition_approvisionnement.delai_reglement\n                                                        ",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control",
      staticStyle: {
        "min-width": "120px"
      },
      attrs: {
        required: "",
        readonly: condition_approvisionnement.mode_reglement === "CASH",
        type: "text"
      },
      domProps: {
        value: condition_approvisionnement.delai_reglement
      },
      on: {
        change: [function ($event) {
          return _vm.$set(condition_approvisionnement, "delai_reglement", $event.target.value);
        }, _vm.handleInput]
      }
    })]), _vm._v(" "), _c("td", [_c("currency-input", {
      staticStyle: {
        "min-width": "120px"
      },
      attrs: {
        percentage: "",
        max: condition_approvisionnement.max,
        value: condition_approvisionnement.part_au_total,
        id: "condition_approvisionnement_part_au_total",
        "float": ""
      },
      on: {
        input: function input($event) {
          return _vm.setConditionApprovisionnement($event, index, "part_au_total");
        }
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
      staticStyle: {
        "min-width": "120px"
      },
      attrs: {
        value: condition_approvisionnement.montant_mensuel_moyen,
        id: "condition_approvisionnement_montant_mensuel_moyen"
      },
      on: {
        input: function input($event) {
          return _vm.setConditionApprovisionnement($event, index, "montant_mensuel_moyen");
        }
      }
    })], 1), _vm._v(" "), index == 0 ? _c("td", {
      staticStyle: {
        "margin-left": "0px",
        "margin-top": "5px"
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
        title: "Ajouter une nouvelle condition"
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
    })], 1)]) : _c("td", {
      staticStyle: {
        "margin-left": "0px",
        "margin-top": "5px"
      }
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
          return _vm.remove1(index);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)])]);
  }), 0)])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 mt-3 mb-3"
  }, [_vm._m(22), _vm._v(" "), _c("vue-editor", {
    attrs: {
      id: "commentaire_fournisseur"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.commentaire_fournisseur,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "commentaire_fournisseur", $$v);
      },
      expression: "\n                                            formDataToBeWatched.commentaire_fournisseur\n                                        "
    }
  })], 1)])]) : _c("div", [_c("div", {
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
      id: "fournisseurs"
    }
  }, [_vm._v("\n                                    Fournisseurs\n                                        "), _c("chevron-down-icon", {
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
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "fournisseurs"
    }
  }, [_vm._v("\n                                    Principaux concurrents\n                                    "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    attrs: {
      id: "div_autres_surete"
    }
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-borderless"
  }, [_vm._m(23), _vm._v(" "), _c("tbody", _vm._l(_vm.principaux_concurrents, function (principaux_concurrent, indexPc) {
    return _c("tr", {
      key: indexPc
    }, [_c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: principaux_concurrent.concurrent,
        expression: "principaux_concurrent.concurrent",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control",
      attrs: {
        required: "",
        type: "text"
      },
      domProps: {
        value: principaux_concurrent.concurrent
      },
      on: {
        input: _vm.handleInput,
        change: function change($event) {
          return _vm.$set(principaux_concurrent, "concurrent", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", {
      staticStyle: {
        width: "120px"
      }
    }, [_c("input-group", {
      scopedSlots: _vm._u([{
        key: "input",
        fn: function fn() {
          return [_c("currency-input", {
            staticClass: "form-control",
            attrs: {
              "default-typing": false,
              max: 100,
              "float": "",
              percentage: ""
            },
            on: {
              input: _vm.handleInput
            },
            model: {
              value: principaux_concurrent.part_marche,
              callback: function callback($$v) {
                _vm.$set(principaux_concurrent, "part_marche", $$v);
              },
              expression: "principaux_concurrent.part_marche"
            }
          })];
        },
        proxy: true
      }, {
        key: "right",
        fn: function fn() {
          return [_vm._v("%")];
        },
        proxy: true
      }], null, true)
    })], 1), _vm._v(" "), _c("td", [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: principaux_concurrent.position,
        expression: "principaux_concurrent.position",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control",
      attrs: {
        rows: "1"
      },
      domProps: {
        value: principaux_concurrent.position
      },
      on: {
        change: [function ($event) {
          return _vm.$set(principaux_concurrent, "position", $event.target.value);
        }, _vm.handleInput]
      }
    })]), _vm._v(" "), indexPc == 0 ? _c("td", {
      staticStyle: {
        "margin-left": "0px",
        "margin-top": "5px"
      }
    }, [_c("button", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: indexPc == 0,
        expression: "indexPc == 0"
      }],
      staticStyle: {
        "background-color": "#2c3e50",
        color: "#ffffff",
        "border-radius": "15%",
        border: "none"
      },
      attrs: {
        type: "button",
        title: "Ajouter une nouvelle condition"
      },
      on: {
        click: function click($event) {
          return _vm.addMore3();
        }
      }
    }, [_c("plus-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)]) : _c("td", {
      staticStyle: {
        "margin-left": "0px",
        "margin-top": "5px"
      }
    }, [_c("button", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: indexPc != 0,
        expression: "indexPc != 0"
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
          return _vm.remove3(indexPc);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)])]);
  }), 0)])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 mt-3 mb-3"
  }, [_vm._m(24), _vm._v(" "), _c("vue-editor", {
    attrs: {
      id: "commentaire_concurrence"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.commentaire_concurrence,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "commentaire_concurrence", $$v);
      },
      expression: "\n                                            formDataToBeWatched.commentaire_concurrence\n                                        "
    }
  })], 1)])]) : _c("div", [_c("div", {
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
      id: "fournisseurs"
    }
  }, [_vm._v("\n                                    Principaux concurrents\n                                        "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])])]), _vm._v(" "), _c("div", {
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
  }, [_vm._v("\n                            Fermer le tableau\n                        ")])])])]) : _c("div", {
    staticClass: "card card-width-height"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc pb-0 pt-2"
  }, [_c("h6", {
    staticClass: "head",
    attrs: {
      id: "f9-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                               " + _vm._s(_vm.tb_display_name) + " : Analyse du marché et paysage concurrentiel\n\n                            ")]), _vm._v(" "), _c("div", {
    staticClass: "col-auto"
  }, [_vm.formDataToBeWatched.notes.length > 0 ? _c("div", {
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
  }, [_c("span", [_vm._v("\n                                                " + _vm._s(_vm.formDataToBeWatched.notes.length) + "\n                                            ")])])])]) : _vm._e(), _vm._v(" "), _c("airplay-icon", {
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
        return _vm.$modal.show("qualite_des_contreparties");
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
  })], 1)])])])])], 1), _vm._v(" "), _c("div", {
    staticStyle: {
      position: "relative",
      "z-index": "999999999"
    }
  }, [_c("div", {
    staticClass: "modal fade modal-lg",
    attrs: {
      id: "instruction4",
      tabindex: "-1",
      "aria-labelledby": "instruction4",
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
      id: "instruction4"
    }
  }, [_vm._v("\n                                Instruction - " + _vm._s(_vm.tb_display_name) + " : Conditions\n                                de ventes et d'approvisionnements\n                            ")]), _vm._v(" "), _c("button", {
    staticClass: "btn-close",
    attrs: {
      type: "button",
      "data-bs-dismiss": "modal",
      "aria-label": "Close"
    }
  })]), _vm._v(" "), _vm._m(25), _vm._v(" "), _vm._m(26)])])])]), _vm._v(" "), _c("ketri-modal", {
    attrs: {
      name: "qualite_des_contreparties",
      images: ["/images/capture_afg/exemples/principaux_clients.png", "/images/capture_afg/exemples/principaux_fournisseurs.png", "/images/capture_afg/exemples/principaux_partenaires.png"]
    }
  }), _vm._v(" "), _c("note-modal", {
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
    }
  })], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_c("b", [_vm._v("Présentation de façon succincte : ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("th", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Principaux clients\n                                                        "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("th", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Destination\n                                                        "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("th", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Type de vente"), _c("span", {
    staticStyle: {
      color: "red"
    }
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    staticStyle: {
      width: "180px!important"
    }
  }, [_vm._v("Autre type de vente"), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("th", [_c("div", {
    staticStyle: {
      width: "280px!important"
    }
  }, [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Modalité de paiement"), _c("span", {
    staticStyle: {
      color: "red"
    }
  })])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("th", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Condition de Vente"), _c("span", {
    staticStyle: {
      color: "red"
    }
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("th", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Délai de paiements (en mois)"), _c("span", {
    staticStyle: {
      color: "red"
    }
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("th", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("% CA"), _c("span", {
    staticStyle: {
      color: "red"
    }
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("th", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Montant moyen"), _c("span", {
    staticStyle: {
      color: "red"
    }
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("label", {
    staticClass: "form-label mt-1",
    attrs: {
      "for": "total_ligne_existante"
    }
  }, [_c("b", [_vm._v("Total")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_c("b", [_vm._v(" Commentaires")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("th", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Principaux fournisseurs\n                                                        "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("th", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Provenance\n                                                        "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("th", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Type d'achat"), _c("span", {
    staticStyle: {
      color: "red"
    }
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    staticStyle: {
      width: "180px!important"
    }
  }, [_vm._v("Autre type d'achat"), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("th", [_c("div", {
    staticStyle: {
      width: "280px!important"
    }
  }, [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Modalité de paiement"), _c("span", {
    staticStyle: {
      color: "red"
    }
  })])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("th", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Condition d'achat"), _c("span", {
    staticStyle: {
      color: "red"
    }
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("th", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Délais de paiements"), _c("span", {
    staticStyle: {
      color: "red"
    }
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("th", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("% Achats"), _c("span", {
    staticStyle: {
      color: "red"
    }
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("th", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Montant moyen"), _c("span", {
    staticStyle: {
      color: "red"
    }
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("label", {
    staticClass: "form-label mt-1",
    attrs: {
      "for": "total_ligne_existante"
    }
  }, [_c("b", [_vm._v("Total")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_c("b", [_vm._v(" Commentaires")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticStyle: {
      "min-width": "200px"
    }
  }, [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Principaux concurrents\n                                                        "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })])]), _vm._v(" "), _c("th", {
    staticStyle: {
      "min-width": "150px"
    }
  }, [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("% part de marché\n                                                        "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })])]), _vm._v(" "), _c("th", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Position sur le marché"), _c("span", {
    staticStyle: {
      color: "red"
    }
  })])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_c("b", [_vm._v(" Commentaires")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "modal-body"
  }, [_c("img", {
    attrs: {
      src: "/images/capture_afg/garanties.png",
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
  }, [_vm._v("\n                                Fermer\n                            ")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/memorandum/F7.vue?vue&type=style&index=0&id=046b87c1&lang=css&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/memorandum/F7.vue?vue&type=style&index=0&id=046b87c1&lang=css&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-046b87c1] {\r\n    font-family: \"Google sans\";\n}\nlabel[data-v-046b87c1] {\r\n    height: 10px;\r\n    font-size: 13px;\n}\ninput[data-v-046b87c1],\r\nselect[data-v-046b87c1] {\r\n    height: 35px;\r\n    border-color: #34495e;\r\n    color: #57606f;\r\n    font-size: 13px;\r\n    font-weight: bold;\n}\n.card-width-height[data-v-046b87c1] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-046b87c1] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\n.hdc[data-v-046b87c1] {\r\n    background-color: #57606f;\n}\n.badge-sm[data-v-046b87c1] {\r\n    display: inline-block;\r\n    width: 15px;\r\n    height: 15px;\r\n    background: rgba(255, 0, 0, 0.882);\r\n    color: white;\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    border-radius: 100%;\r\n    position: absolute;\r\n    top: -20%;\r\n    left: 55%;\r\n    text-align: center;\n}\n.relook-header[data-v-046b87c1] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\n.image1[data-v-046b87c1] {\r\n    background: url(\"/images/capture/exemples/qualite_des_contreparties.png\")\r\n        no-repeat;\r\n    background-position: center;\r\n    background-size: contain;\r\n\r\n    width: 500px;\r\n    height: 300px;\n}\r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/memorandum/F7.vue?vue&type=style&index=0&id=046b87c1&lang=css&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/memorandum/F7.vue?vue&type=style&index=0&id=046b87c1&lang=css&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_F7_vue_vue_type_style_index_0_id_046b87c1_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./F7.vue?vue&type=style&index=0&id=046b87c1&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/memorandum/F7.vue?vue&type=style&index=0&id=046b87c1&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_F7_vue_vue_type_style_index_0_id_046b87c1_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_F7_vue_vue_type_style_index_0_id_046b87c1_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/forms/afg/memorandum/F7.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/forms/afg/memorandum/F7.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _F7_vue_vue_type_template_id_046b87c1_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./F7.vue?vue&type=template&id=046b87c1&scoped=true */ "./resources/js/components/forms/afg/memorandum/F7.vue?vue&type=template&id=046b87c1&scoped=true");
/* harmony import */ var _F7_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./F7.vue?vue&type=script&lang=js */ "./resources/js/components/forms/afg/memorandum/F7.vue?vue&type=script&lang=js");
/* harmony import */ var _F7_vue_vue_type_style_index_0_id_046b87c1_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./F7.vue?vue&type=style&index=0&id=046b87c1&lang=css&scoped=true */ "./resources/js/components/forms/afg/memorandum/F7.vue?vue&type=style&index=0&id=046b87c1&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _F7_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _F7_vue_vue_type_template_id_046b87c1_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _F7_vue_vue_type_template_id_046b87c1_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "046b87c1",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/forms/afg/memorandum/F7.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/forms/afg/memorandum/F7.vue?vue&type=script&lang=js":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/memorandum/F7.vue?vue&type=script&lang=js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_F7_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./F7.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/memorandum/F7.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_F7_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/forms/afg/memorandum/F7.vue?vue&type=style&index=0&id=046b87c1&lang=css&scoped=true":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/memorandum/F7.vue?vue&type=style&index=0&id=046b87c1&lang=css&scoped=true ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_F7_vue_vue_type_style_index_0_id_046b87c1_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./F7.vue?vue&type=style&index=0&id=046b87c1&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/memorandum/F7.vue?vue&type=style&index=0&id=046b87c1&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/forms/afg/memorandum/F7.vue?vue&type=template&id=046b87c1&scoped=true":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/memorandum/F7.vue?vue&type=template&id=046b87c1&scoped=true ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_F7_vue_vue_type_template_id_046b87c1_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_F7_vue_vue_type_template_id_046b87c1_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_F7_vue_vue_type_template_id_046b87c1_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./F7.vue?vue&type=template&id=046b87c1&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/memorandum/F7.vue?vue&type=template&id=046b87c1&scoped=true");


/***/ })

}]);