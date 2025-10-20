"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_contreanalyse_nsia_groupe_rg_RG-CA4_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA4.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA4.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../helpers/helper */ "./resources/js/helpers/helper.js");
/* harmony import */ var _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vueform/multiselect/dist/multiselect.vue2 */ "./node_modules/@vueform/multiselect/dist/multiselect.vue2.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../helpers/indexedDB */ "./resources/js/helpers/indexedDB.js");
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
  name: "presentation-client",
  display: "Presentation_du_client",
  components: {
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.ChevronDownIcon,
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.TrashIcon,
    AirplayIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.AirplayIcon,
    BookOpenIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.BookOpenIcon,
    Multiselect: _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  computed: {
    totalResultatNetSurChiffreAffaire: function totalResultatNetSurChiffreAffaire() {
      var ca = String(this.chiffres_provisoires[0].chiffre_affaire).replace(/\s+/g, "");
      var rn = String(this.chiffres_provisoires[0].resulat_net).replace(/\s+/g, "");
      if (rn <= 0) {
        return 0;
      }
      var tt = Number(rn) / Number(ca);
      return Number(tt) * 100;
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
    var _this = this;
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            // let applied_templ_name = this.meta_data['dossier_credit']?.applied_templ_name;
            // let tbArrays = this.determineCredPubTables(applied_templ_name);
            // this.credpub00 = tbArrays[0];

            // Initiate cache

            // // this.initCache();
            //
            // this.loadParams();
            // this.loadBeforeRequest();
            _this.loadRetrieved();
            _this.loadTbAttrs();
            _this.tableClosedOrOpened();
            EventBus.$on("send-to-ana_fin", function (data) {
              _this.ncc = data.compte_contribuable;
              _this.annee_referentielle = data.annee_referentielle;
              // console.log("this.annee_referentielle-------------", this.annee_referentielle)
              // this.loadBeforeRequest()
            });
            // charge les attributs + sous attributs des tables
            // helper.loadCurrencyFormatter();
            // this.loadPrincChifCle();
            // EventBus.$on('autosubmit', () => {
            //   this.launchAutoSaver()
            // })

            // EventBus.$on("loadchiffcle", this.loadPrincChifCle);
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  data: function data() {
    var vm = this;
    return {
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__["default"].host,
      authcheck: false,
      authcheckUsr: null,
      authcheckStatus: null,
      watchInPause: false,
      loadActiviteRent: false,
      loadedRatios: false,
      loadedAna_fin: false,
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
      disp: false,
      isLoading: false,
      max: 5,
      placeholder: "Chercher clients",
      matcli: "matcli",
      nomcli: "nomcli",
      credits: [],
      clients: [],
      encours: null,
      frais: [],
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
      ratios: "",
      ncc: "",
      annee_referentielle: "",
      formDataToBeWatched: {
        annee_calculees: [],
        modeManuel: false,
        structure_financiere_mode_manuel: "",
        bilan_certifie: "",
        nom_cabinet_comptable: "",
        structure_financiere: "",
        commentaire_structure_financiere: "",
        notes: [],
        exposition_globale: 0
      },
      bilan_certifie: null,
      nom_cabinet_comptable: null,
      // mouvement_confies: [
      //     {
      //         mouvement_n2: 0,
      //         mouvement_n1: 0,
      //         mouvement_n: 0,
      //         ca_n2: 0,
      //         ca_n1: 0,
      //         ca_n: 0,
      //         mvt_ca_n2:0,
      //         mvt_ca_n1:0,
      //         mvt_ca_n:0,
      //         banque_place:"",
      //         date_montant_solde:"",
      //         montant_solde:"",

      //     },
      // ],
      chiffres_provisoires: [{
        chiffre_affaire: 0,
        resulat_net: 0
        // rn_sur_ca:0,
      }],
      activite_rentabilite: [{
        "label": "Chiffre d'affaires H.T.",
        "curr_year_3": "",
        "curr_year_2": "",
        "curr_year_1": "",
        "code": "XB"
      }, {
        "label": "Valeur ajoutée",
        "curr_year_3": "",
        "curr_year_2": "",
        "curr_year_1": "",
        "code": "XC"
      }, {
        "label": "Excedent brut d'exploitation",
        "curr_year_3": "",
        "curr_year_2": "",
        "curr_year_1": "",
        "code": "XD"
      }, {
        label: "EBE/CA",
        "curr_year_3": "",
        "curr_year_2": "",
        "curr_year_1": "",
        code: "R5"
      }, {
        label: "Charges financières",
        "curr_year_3": "",
        "curr_year_2": "",
        "curr_year_1": "",
        code: "DD"
      }, {
        label: "Charges financières / EBE",
        "curr_year_3": "",
        "curr_year_2": "",
        "curr_year_1": "",
        code: "CHARGE_FAMILIERE_EBE"
      }, {
        label: "Resulats d'exploitation",
        "curr_year_3": "",
        "curr_year_2": "",
        "curr_year_1": "",
        code: "XE"
      }, {
        label: "Resultat net",
        "curr_year_3": "",
        "curr_year_2": "",
        "curr_year_1": "",
        code: "XI"
      }, {
        label: "Resultat net / CA",
        "curr_year_3": "",
        "curr_year_2": "",
        "curr_year_1": "",
        code: "RESULTAT_NET_CA"
      }],
      structure_financiere: [{
        "label": "Chiffre d'affaires H.T.",
        "curr_year_3": "",
        "curr_year_2": "",
        "curr_year_1": "",
        "code": "XB"
      }, {
        label: "Resultat net",
        "curr_year_3": "",
        "curr_year_2": "",
        "curr_year_1": "",
        code: "XI"
      }, {
        label: "CAF",
        "curr_year_3": "",
        "curr_year_2": "",
        "curr_year_1": "",
        code: "CAF"
      }, {
        "label": "Fonds propres (FP)",
        curr_year_3: "",
        "curr_year_2": "",
        "curr_year_1": "",
        code: "CP"
      }, {
        "label": "Total bilan",
        curr_year_3: "",
        "curr_year_2": "",
        "curr_year_1": "",
        code: "BZ"
      }, {
        "label": "FP / Total bilan",
        curr_year_3: "",
        "curr_year_2": "",
        "curr_year_1": "",
        code: "FP_B"
      }, {
        "label": "FDR",
        curr_year_3: "",
        "curr_year_2": "",
        "curr_year_1": "",
        code: "FDR"
      }, {
        "label": "BFR",
        curr_year_3: "",
        "curr_year_2": "",
        "curr_year_1": "",
        code: "BFR"
      }, {
        "label": "Trésorerie nette (A-B)",
        curr_year_3: "",
        "curr_year_2": "",
        "curr_year_1": "",
        code: "DT"
      }],
      agregats_chiffre_cle: [],
      listingNote: false,
      credpub00: null
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
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (_DEBUG) console.log(">> updateFormDataForDeletion");
              _this2.formDataToBeWatched.is_deleted = true;
              // Actually delete from cache
              _context2.next = 4;
              return _cache["delete"](documentId);
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    /**
     * executes before the page/tab/browser is closed
     * ! actually only works when the tab is refreshed
     */
    beforePageIsClosed: function beforePageIsClosed(event) {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              event.preventDefault();
              event.returnValue = ""; // ! Won't work without this

              if (_DEBUG) console.log(">> beforePageIsClosed");
              // shows native popup
              // ! Only works on page reloads

              // Check if formDataToBeWatched is empty
              if (!_this3.formDataToBeWatched.is_deleted) {
                _context3.next = 5;
                break;
              }
              return _context3.abrupt("return");
            case 5:
              // Upload current (and arguably latest) formDataToBeWatched data

              _this3.uploadDataToServerAndUpdateLastSave(_this3.formDataToBeWatched, _this3.formDataToBeWatched);
              if (_DEBUG) console.log("<< beforePageIsClosed");
            case 7:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
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
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var data, timeSpentInSeconds;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
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
              _context4.next = 5;
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
              return _context4.stop();
          }
        }, _callee4);
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
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              if (_DEBUG) console.log(">> uploadDataToServerAndUpdateLastSave");
              _context5.prev = 1;
              if (_DEBUG) console.log(">> this.autosaving");
              _context5.next = 5;
              return _this5.autosaving(newVal, oldVal);
            case 5:
              // Update last save time
              _lastSaveTime = Date.now();
              // ! DONOT Clear cache
              // _cache.delete(documentId);
              if (_DEBUG) console.log("<< uploadDataToServerAndUpdateLastSave");
              _context5.next = 12;
              break;
            case 9:
              _context5.prev = 9;
              _context5.t0 = _context5["catch"](1);
              // TODO add error
              if (_DEBUG) console.error("xx uploadDataToServerAndUpdateLastSave", _context5.t0);
            case 12:
            case "end":
              return _context5.stop();
          }
        }, _callee5, null, [[1, 9]]);
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
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              if (_DEBUG) console.log(">> uploadDataToServerBeforePageCloses");
              _context6.prev = 1;
              _context6.next = 4;
              return _this6.autosaving(newVal, oldVal);
            case 4:
              // Update last save time
              _lastSaveTime = Date.now();
              // Clear cache
              _cache["delete"](documentId);
              if (_DEBUG) console.log("<< uploadDataToServerBeforePageCloses");
              _context6.next = 12;
              break;
            case 9:
              _context6.prev = 9;
              _context6.t0 = _context6["catch"](1);
              // TODO add error
              if (_DEBUG) console.error("xx uploadDataToServerBeforePageCloses", _context6.t0);
            case 12:
            case "end":
              return _context6.stop();
          }
        }, _callee6, null, [[1, 9]]);
      }))();
    },
    /**
     * does exactly what the name says
     * @return {void}
     */
    uploadDataToServerEvery30Seconds: function uploadDataToServerEvery30Seconds() {
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              // if (_DEBUG) console.log(">> uploadDataToServerEvery30Seconds", _timeSpentInSeconds);
              _timeSpentInSeconds++;
              if (!(_timeSpentInSeconds % 30 != 0)) {
                _context7.next = 3;
                break;
              }
              return _context7.abrupt("return");
            case 3:
              if (_DEBUG) console.log(">> uploadDataToServerEvery30Seconds", _timeSpentInSeconds);
              _context7.prev = 4;
              if (_DEBUG) console.log(">> uploadDataToServerEvery30Seconds >> autosaving", _timeSpentInSeconds);
              _context7.next = 8;
              return _this7.autosaving(_this7.formDataToBeWatched, _this7.formDataToBeWatched);
            case 8:
              // Update last save time
              _lastSaveTime = Date.now();
              // Clear cache ?
              // _cache.delete(documentId);
              if (_DEBUG) console.log("<< uploadDataToServerEvery30Seconds << autosaving");
              _context7.next = 15;
              break;
            case 12:
              _context7.prev = 12;
              _context7.t0 = _context7["catch"](4);
              // TODO add error
              if (_DEBUG) console.error("xx uploadDataToServerEvery30Seconds", _context7.t0);
            case 15:
            case "end":
              return _context7.stop();
          }
        }, _callee7, null, [[4, 12]]);
      }))();
    },
    // End Cache management functions
    loadParams: function loadParams() {
      var _this$meta_data, _this$meta_data2;
      this.ncc = (_this$meta_data = this.meta_data) === null || _this$meta_data === void 0 || (_this$meta_data = _this$meta_data.dossier_credit) === null || _this$meta_data === void 0 || (_this$meta_data = _this$meta_data[this.credpub00]) === null || _this$meta_data === void 0 ? void 0 : _this$meta_data.compte_contribuable;
      this.annee_referentielle = (_this$meta_data2 = this.meta_data) === null || _this$meta_data2 === void 0 || (_this$meta_data2 = _this$meta_data2.dossier_credit) === null || _this$meta_data2 === void 0 || (_this$meta_data2 = _this$meta_data2[this.credpub00]) === null || _this$meta_data2 === void 0 ? void 0 : _this$meta_data2.annee_referentielle;
    },
    setChiffreProvisoirVars: function setChiffreProvisoirVars(event, index) {
      this.formDataToBeWatched["chiffres_provisoires"] = this.chiffres_provisoires;
    },
    loadBeforeRequest: function loadBeforeRequest() {
      this.getEtatFinancierByAPI();
    },
    getEtatFinancierByAPI: function getEtatFinancierByAPI() {
      var _this8 = this;
      this.isLoding = true;
      var options = {
        method: 'POST',
        url: this.ebapisHost + 'creditbuilder/api/v1/etats-financiers/',
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          ncc: this.ncc
        }
      };
      this.$axios.request(options).then(function (response) {
        // this.getAnalyseFin()
        var etats_financiers = response.data.etats_financiers;
        // this.annee_calculees = Object.keys(etats_financiers)
        _this8.formDataToBeWatched.annee_calculees = Object.keys(etats_financiers);
        // this.formDataToBeWatched.annee_calculees = this.annee_calculees
        _this8.loadProperties(etats_financiers);
        _this8.isLoding = false;
        // annee_calculees = annee_calculees.map(el=>Number(el?.ANNEE))
      })["catch"](function (error) {
        console.error(error);
      });
    },
    loadProperties: function loadProperties(etats_financiers) {
      var _this9 = this;
      // console.log("etats_financiers", etats_financiers.agregats)
      var caf_ = etats_financiers === null || etats_financiers === void 0 ? void 0 : etats_financiers["chiffre-cles"].find(function (el) {
        return el.LIB.trim() == "C.A.F.";
      });
      // console.log("caf_", caf_)
      var APIcaf = _objectSpread(_objectSpread({}, caf_), {}, {
        curr_year_3: caf_.n2,
        curr_year_2: caf_.n1,
        curr_year_1: caf_.n,
        variance: caf_.varn2
      });
      var brf_ = etats_financiers.agregats.find(function (el) {
        return el.LIB.trim() == "Besoin en Fonds de Roulement (B)";
      });
      var APIbfr = _objectSpread(_objectSpread({}, brf_), {}, {
        curr_year_3: brf_.n2,
        curr_year_2: brf_.n1,
        curr_year_1: brf_.n,
        variance: brf_.varn2
      });
      var fr_ = etats_financiers.agregats.find(function (el) {
        return el.LIB.trim() == "Fonds de roulement  (A)";
      });
      var APIfr = _objectSpread(_objectSpread({}, fr_), {}, {
        curr_year_3: fr_.n2,
        curr_year_2: fr_.n1,
        curr_year_1: fr_.n,
        variance: fr_.varn2
      });
      // console.log({APIcaf:APIcaf, APIbfr:APIbfr, APIfr:APIfr})
      // this.activite_rentabilite

      // CAF NOT FIND

      this.structure_financiere.forEach(function (el) {
        var fondsPropre = _this9.structure_financiere.find(function (elem) {
          return elem.code == "CP";
        });
        var totalBilan = _this9.structure_financiere.find(function (elem) {
          return elem.code == "BZ";
        });
        var fdr = _this9.structure_financiere.find(function (elem) {
          return elem.code == "FDR";
        });
        var bfr = _this9.structure_financiere.find(function (elem) {
          return elem.code == "BFR";
        });
        // let caf = this.structure_financiere.find(elem=>elem.code == "CAF")
        if (el.code == "BFR") {
          el.curr_year_3 = APIbfr.curr_year_3;
          el.curr_year_2 = APIbfr.curr_year_2;
          el.curr_year_1 = APIbfr.curr_year_1;
          // el.variance = APIbfr.varn2
        } else if (el.code == "CAF") {
          el.curr_year_3 = APIcaf.curr_year_3;
          el.curr_year_2 = APIcaf.curr_year_2;
          el.curr_year_1 = APIcaf.curr_year_1;
          // el.variance = APIcaf.varn2
        } else if (el.code == "FDR") {
          el.curr_year_3 = APIfr.curr_year_3;
          el.curr_year_2 = APIfr.curr_year_2;
          el.curr_year_1 = APIfr.curr_year_1;
          // el.variance = APIfr.varn2
        } else if (el.code === "FP_B") {
          el.curr_year_3 = ((fondsPropre === null || fondsPropre === void 0 ? void 0 : fondsPropre.curr_year_3) / (totalBilan === null || totalBilan === void 0 ? void 0 : totalBilan.curr_year_3) * 100).toFixed(2);
          el.curr_year_2 = ((fondsPropre === null || fondsPropre === void 0 ? void 0 : fondsPropre.curr_year_2) / (totalBilan === null || totalBilan === void 0 ? void 0 : totalBilan.curr_year_2) * 100).toFixed(2);
          el.curr_year_1 = ((fondsPropre === null || fondsPropre === void 0 ? void 0 : fondsPropre.curr_year_1) / (totalBilan === null || totalBilan === void 0 ? void 0 : totalBilan.curr_year_1) * 100).toFixed(2);
        } else if (el.code === "S3") {
          el.curr_year_3 = bfr !== null && bfr !== void 0 && bfr.curr_year_3 ? ((fdr === null || fdr === void 0 ? void 0 : fdr.curr_year_3) / (bfr === null || bfr === void 0 ? void 0 : bfr.curr_year_3) * 100).toFixed(2) : 0;
          el.curr_year_2 = bfr !== null && bfr !== void 0 && bfr.curr_year_2 ? ((fdr === null || fdr === void 0 ? void 0 : fdr.curr_year_2) / (bfr === null || bfr === void 0 ? void 0 : bfr.curr_year_2) * 100).toFixed(2) : 0;
          el.curr_year_1 = bfr.curr_year_1 ? ((fdr === null || fdr === void 0 ? void 0 : fdr.curr_year_1) / (bfr === null || bfr === void 0 ? void 0 : bfr.curr_year_1) * 100).toFixed(2) : 0;
        } else {
          el.curr_year_3 = _this9.findElement(_this9.formDataToBeWatched.annee_calculees.at(-3), el, etats_financiers, "n2");
          el.curr_year_2 = _this9.findElement(_this9.formDataToBeWatched.annee_calculees.at(-2), el, etats_financiers, "n1");
          el.curr_year_1 = _this9.findElement(_this9.formDataToBeWatched.annee_calculees.at(-1), el, etats_financiers, "n");
        }
        el.variance = el.curr_year_2 ? ([el.curr_year_1 / el.curr_year_2 - 1] * 100).toFixed(2) : 0;
        if (el.label == 'Trésorerie nette (A-B)') {
          el.label = 'Trésorerie';
        }
      });
      this.handleInput();
    },
    findElement: function findElement(key, element, tab, annee) {
      var sources0 = ["chiffre-cles", "agregats", "actif", "passif", "compte_resulta"];
      var sources1 = ["chiffre-cles", "agregats"];
      for (var _i = 0, _sources = sources0; _i < _sources.length; _i++) {
        var source = _sources[_i];
        if (sources1.includes(source)) {
          var _tab$source;
          var found = (_tab$source = tab[source]) === null || _tab$source === void 0 ? void 0 : _tab$source.find(function (el) {
            var _el$LIB, _element$label;
            return ((_el$LIB = el.LIB) === null || _el$LIB === void 0 ? void 0 : _el$LIB.trim()) == ((_element$label = element.label) === null || _element$label === void 0 ? void 0 : _element$label.trim());
          });
          if (found) {
            // if (element.label.trim() == 'Valeur ajoutee') {
            //     console.log('found 0', found);
            //     console.log('element 0', element);
            //     console.log('annee 0', annee);
            // }

            return Number(found === null || found === void 0 ? void 0 : found[annee]);
          }
        } else {
          var _tab$key;
          var _found = (_tab$key = tab[key]) === null || _tab$key === void 0 || (_tab$key = _tab$key[source]) === null || _tab$key === void 0 ? void 0 : _tab$key.find(function (el) {
            var _el$ref, _element$code;
            return ((_el$ref = el.ref) === null || _el$ref === void 0 ? void 0 : _el$ref.trim()) == ((_element$code = element.code) === null || _element$code === void 0 ? void 0 : _element$code.trim());
          });
          if (_found) {
            // if (element.label.trim() == 'Valeur ajoutee') {
            //     console.log('found 1', found);
            //     console.log('element 1', element);
            //     console.log('annee 1', annee);
            // }
            return Number(_found === null || _found === void 0 ? void 0 : _found.valeur);
          }
        }
      }
      return 0;
    },
    strToNum: function strToNum(a) {
      if (/^0/g.test(a)) a = String(a).replace(/^0/g, "");
      return Number(String(a).replace(/\s+/g, ""));
    },
    checkboxValCashCall: function checkboxValCashCall(event) {
      var vars = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      if (vars == 'credit_syndique') {
        if (event.target.checked) {
          this.formDataToBeWatched[vars] = event.target.value;
          if (event.target.value == 'Non') {
            this.formDataToBeWatched.cheffe_file = '';
          }
        }
      } else {
        if (event.target.checked) {
          this.formDataToBeWatched[vars] = event.target.value;
        } else {
          this.formDataToBeWatched[vars] = "";
        }
      }
    },
    setModeMA: function setModeMA() {
      this.formDataToBeWatched.modeManuel = !this.formDataToBeWatched.modeManuel;
    },
    getCAFByApi: function getCAFByApi() {
      var _this0 = this;
      // https://edanescoring.com/sni-versus/apiagregats.php?cc=9606123E

      var options = {
        method: 'POST',
        url: this.ebapisHost + 'creditbuilder/api/v1/apiagregats/',
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          cc: this.ncc
        }
      };
      this.$axios.request(options).then(function (response) {
        var _response$data$caf_ag, _response$data$caf_ag2, _ref, _this0$meta_data$doss, _ref2, _this0$meta_data$doss3, _ref3, _this0$meta_data$doss5;
        _this0.agregats_chiffre_cle = response.data.caf_agregats;
        var data_chiffre_cles = (_response$data$caf_ag = response.data.caf_agregats) === null || _response$data$caf_ag === void 0 ? void 0 : _response$data$caf_ag['chiffre-cles'];
        var data_agregats = (_response$data$caf_ag2 = response.data.caf_agregats) === null || _response$data$caf_ag2 === void 0 ? void 0 : _response$data$caf_ag2['agregats'];
        // annee_calculees
        if (!((_ref = [[], "", null, undefined]) !== null && _ref !== void 0 && _ref.includes((_this0$meta_data$doss = _this0.meta_data['dossier_credit']) === null || _this0$meta_data$doss === void 0 || (_this0$meta_data$doss = _this0$meta_data$doss.cred_pub_tb_19502) === null || _this0$meta_data$doss === void 0 ? void 0 : _this0$meta_data$doss.annee_calculees))) {
          var _this0$meta_data$doss2;
          _this0.formDataToBeWatched.annee_calculees = (_this0$meta_data$doss2 = _this0.meta_data['dossier_credit']) === null || _this0$meta_data$doss2 === void 0 || (_this0$meta_data$doss2 = _this0$meta_data$doss2.cred_pub_tb_19502) === null || _this0$meta_data$doss2 === void 0 ? void 0 : _this0$meta_data$doss2.annee_calculees;
        } else if (!((_ref2 = [[], "", null, undefined]) !== null && _ref2 !== void 0 && _ref2.includes((_this0$meta_data$doss3 = _this0.meta_data['dossier_credit']) === null || _this0$meta_data$doss3 === void 0 || (_this0$meta_data$doss3 = _this0$meta_data$doss3.cred_pub_tb_19002) === null || _this0$meta_data$doss3 === void 0 ? void 0 : _this0$meta_data$doss3.annee_calculees))) {
          var _this0$meta_data$doss4;
          _this0.formDataToBeWatched.annee_calculees = (_this0$meta_data$doss4 = _this0.meta_data['dossier_credit']) === null || _this0$meta_data$doss4 === void 0 || (_this0$meta_data$doss4 = _this0$meta_data$doss4.cred_pub_tb_19002) === null || _this0$meta_data$doss4 === void 0 ? void 0 : _this0$meta_data$doss4.annee_calculees;
        } else if (!((_ref3 = [[], "", null, undefined]) !== null && _ref3 !== void 0 && _ref3.includes((_this0$meta_data$doss5 = _this0.meta_data['dossier_credit']) === null || _this0$meta_data$doss5 === void 0 || (_this0$meta_data$doss5 = _this0$meta_data$doss5.cred_pub_tb_13) === null || _this0$meta_data$doss5 === void 0 ? void 0 : _this0$meta_data$doss5.annee_calculees))) {
          var _this0$meta_data$doss6;
          _this0.formDataToBeWatched.annee_calculees = (_this0$meta_data$doss6 = _this0.meta_data['dossier_credit']) === null || _this0$meta_data$doss6 === void 0 || (_this0$meta_data$doss6 = _this0$meta_data$doss6.cred_pub_tb_13) === null || _this0$meta_data$doss6 === void 0 ? void 0 : _this0$meta_data$doss6.annee_calculees;
        } else {
          var _this0$agregats_chiff;
          _this0.year_filter = (_this0$agregats_chiff = _this0.agregats_chiffre_cle) === null || _this0$agregats_chiff === void 0 ? void 0 : _this0$agregats_chiff["annee calcule"];
          // console.log("year_filter before sorted => ", year_filter)
          _this0.formDataToBeWatched.annee_calculees = _this0.year_filter.sort(function (a, b) {
            return parseInt(a === null || a === void 0 ? void 0 : a["ANNEE"]) - parseInt(b === null || b === void 0 ? void 0 : b["ANNEE"]);
          });
        }
      })["catch"](function (error) {
        console.error(error);
      });
    },
    getRatiosByAPI: function getRatiosByAPI(res) {
      var _this1 = this;
      if (res.status == 200) {
        if (this.ncc != "") {
          if (true) {
            var options = {
              method: 'POST',
              url: this.ebapisHost + 'creditbuilder/api/v1/etats-financiers/',
              headers: {
                'Content-Type': 'application/json'
              },
              data: {
                ncc: this.ncc
              }
            };
            this.$axios.request(options).then(function (response) {
              // this.getAnalyseFin()
              var etats_financiers = response.data.etats_financiers;
              _this1.formDataToBeWatched.annee_calculees = Object.keys(etats_financiers);
              // this.formDataToBeWatched.annee_calculees = this.annee_calculees
              _this1.loadProperties(etats_financiers);
              _this1.isLoding = false;
              // annee_calculees = annee_calculees.map(el=>Number(el?.ANNEE))
            })["catch"](function (error) {
              console.error(error);
            });
            //this.$axios({
            //     method: 'get',
            //     url:'https://ebapis.com/basix/api/v3/public/ultimate-db/',
            //     params:{ncc:this.ncc, annee:"null", operation:"READ"}
            //     })
            //     .then( (response)=>{
            //         this.initActiviteRentabilite(response.data)
            //     });
          }
        } else {
          this.$toasted("Veuillez saisir le ncc dans F0");
        }
      }
    },
    initActiviteRentabilite: function initActiviteRentabilite(agregats) {
      var _this$agregats_chiffr, _this$agregats_chiffr2;
      var annee_ref = this.annee_referentielle.toString();
      this.activite_rentabilite.forEach(function (element) {
        if (element.code == "CHARGE_FAMILIERE_EBE") {
          element.label = element.label;
          if (agregats[annee_ref - 2]) {
            element.curr_year_3 = Number(agregats[annee_ref - 2]["RM"]) / Number(agregats[annee_ref - 2]["XD"]);
          }
          if (agregats[annee_ref - 1]) {
            element.curr_year_2 = Number(agregats[annee_ref - 1]["RM"]) / Number(agregats[annee_ref - 1]["XD"]);
          }
          if (agregats[annee_ref]) {
            element.curr_year_1 = Number(agregats[annee_ref]["RM"]) / Number(agregats[annee_ref]["XD"]);
          }
          element.variance = "";
        } else if (element.code == "RESULTAT_NET_CA") {
          element.label = element.label;
          if (agregats[annee_ref - 2]) {
            element.curr_year_3 = Number(agregats[annee_ref - 2]["XI"]) / Number(agregats[annee_ref - 2]["XB"]);
          }
          if (agregats[annee_ref - 1]) {
            element.curr_year_2 = Number(agregats[annee_ref - 1]["XI"]) / Number(agregats[annee_ref - 1]["XB"]);
          }
          if (agregats[annee_ref]) {
            element.curr_year_1 = Number(agregats[annee_ref]["XI"]) / Number(agregats[annee_ref]["XB"]);
          }
          element.variance = "";
        } else {
          element.label = element.label;
          if (agregats[annee_ref - 2]) {
            element.curr_year_3 = Number(agregats[annee_ref - 2][element.code]);
          }
          if (agregats[annee_ref - 1]) {
            element.curr_year_2 = agregats[annee_ref - 1][element.code];
          }
          if (agregats[annee_ref]) {
            element.curr_year_1 = agregats[annee_ref][element.code];
          }
          element.variance = "";
        }
      });

      // this.agregats_chiffre_cle = response.data.caf_agregats
      var data_chiffre_cles = (_this$agregats_chiffr = this.agregats_chiffre_cle) === null || _this$agregats_chiffr === void 0 ? void 0 : _this$agregats_chiffr['chiffre-cles'];
      var data_agregats = (_this$agregats_chiffr2 = this.agregats_chiffre_cle) === null || _this$agregats_chiffr2 === void 0 ? void 0 : _this$agregats_chiffr2['agregats'];
      var caf = data_chiffre_cles.find(function (el, index) {
        return el["LIB"] == " C.A.F.";
      });
      var bfr = data_agregats.find(function (el, index) {
        return el["LIB"] == " Besoin en Fonds de Roulement (B)";
      });
      var fdr = data_agregats.find(function (el, index) {
        return el["LIB"] == " Fonds de roulement  (A)";
      });
      // let fp =
      this.structure_financiere.forEach(function (element) {
        if (element.code == "FP_B") {
          if (agregats[annee_ref - 2]) {
            element.curr_year_3 = (Number(agregats[annee_ref - 2]["CP"]) / Number(agregats[annee_ref - 2]["BZ"]) * 100).toFixed(2);
          }
          if (agregats[annee_ref - 1]) {
            element.curr_year_2 = (Number(agregats[annee_ref - 1]["CP"]) / Number(agregats[annee_ref - 1]["BZ"]) * 100).toFixed(2);
          }
          if (agregats[annee_ref]) {
            element.curr_year_1 = (Number(agregats[annee_ref]["CP"]) / Number(agregats[annee_ref]["BZ"]) * 100).toFixed(2);
          }
        } else if (element.code == "CAF") {
          console.log("CAF ==> ", caf === null || caf === void 0 ? void 0 : caf.length);
          if (agregats[annee_ref - 2]) {
            element.curr_year_3 = caf !== null && caf !== void 0 && caf.n ? caf === null || caf === void 0 ? void 0 : caf.n : 0;
          }
          if (agregats[annee_ref - 1]) {
            element.curr_year_2 = caf !== null && caf !== void 0 && caf.n1 ? caf === null || caf === void 0 ? void 0 : caf.n1 : 0;
          }
          if (agregats[annee_ref]) {
            element.curr_year_1 = caf !== null && caf !== void 0 && caf.n2 ? caf === null || caf === void 0 ? void 0 : caf.n2 : 0;
          }
          // this.caf_agregats
        } else if (element.code == "FDR") {
          if (agregats[annee_ref - 2]) {
            element.curr_year_3 = fdr !== null && fdr !== void 0 && fdr.n ? fdr === null || fdr === void 0 ? void 0 : fdr.n : 0;
          }
          if (agregats[annee_ref - 1]) {
            element.curr_year_2 = fdr !== null && fdr !== void 0 && fdr.n1 ? fdr === null || fdr === void 0 ? void 0 : fdr.n1 : 0;
          }
          if (agregats[annee_ref]) {
            element.curr_year_1 = fdr !== null && fdr !== void 0 && fdr.n2 ? fdr === null || fdr === void 0 ? void 0 : fdr.n2 : 0;
          }
        } else if (element.code == "BFR") {
          if (agregats[annee_ref - 2]) {
            element.curr_year_3 = bfr !== null && bfr !== void 0 && bfr.n ? bfr === null || bfr === void 0 ? void 0 : bfr.n : 0;
          }
          if (agregats[annee_ref - 1]) {
            element.curr_year_2 = bfr !== null && bfr !== void 0 && bfr.n1 ? bfr === null || bfr === void 0 ? void 0 : bfr.n1 : 0;
          }
          if (agregats[annee_ref]) {
            element.curr_year_1 = bfr !== null && bfr !== void 0 && bfr.n2 ? bfr === null || bfr === void 0 ? void 0 : bfr.n2 : 0;
          }
        } else {
          if (agregats[annee_ref]) {
            element.curr_year_1 = agregats[annee_ref][element.code];
          }
          if (agregats[annee_ref - 1]) {
            element.curr_year_2 = agregats[annee_ref - 1][element.code];
          }
          if (agregats[annee_ref - 2]) {
            if ((element === null || element === void 0 ? void 0 : element.code) == "CP") {
              element.curr_year_3 = Math.ceil(agregats[annee_ref - 2][element.code]);
            } else {
              element.curr_year_3 = agregats[annee_ref - 2][element.code];
            }
          }
        }
      });
      this.handleInput();
    },
    getRatios: function getRatios(res) {
      var _this10 = this;
      var options = {
        method: 'POST',
        url: this.ebapisHost + 'creditbuilder/api/v1/load-analysefin/',
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          cc: this.ncc
        }
      };
      if (res.status == 200) {
        var _this$meta_data3;
        if (((_this$meta_data3 = this.meta_data) === null || _this$meta_data3 === void 0 || (_this$meta_data3 = _this$meta_data3.dossier_credit) === null || _this$meta_data3 === void 0 || (_this$meta_data3 = _this$meta_data3.cred_pub_tb_13) === null || _this$meta_data3 === void 0 ? void 0 : _this$meta_data3.ratios) == undefined) {
          this.loadedRatios = true;
          this.$axios.request(options).then(function (response) {
            _this10.ratios = response.data.analyse_fin;
            _this10.loadedRatios = false;
            _this10.handleInput();
          })["catch"](function (error) {
            console.error(error);
          });
        }
      }
    },
    limitStr: function limitStr(thresold, key) {
      var _this$formDataToBeWat;
      thresold += 3;
      if (((_this$formDataToBeWat = this.formDataToBeWatched[key]) === null || _this$formDataToBeWat === void 0 ? void 0 : _this$formDataToBeWat.replace(/(<([^>]+)>)/gi, "").length) > thresold) {
        this.formDataToBeWatched[key] = this.textTruncate(this.formDataToBeWatched[key], thresold);
      }
    },
    fetchClients: function fetchClients(data) {
      return new Promise(function (resolve, reject) {
        if (data.length > 4) {
          _services_credit_service__WEBPACK_IMPORTED_MODULE_4__["default"].loadClientsAll(data).then(function (res) {
            res.data.forEach(function (element) {
              element["slug"] = element.nomcli + " - " + element.matcli;
            });
            resolve(res.data);
          })["catch"](function (err) {
            console.log(err);
          });
        }
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
    launchAutoSaver: function launchAutoSaver() {
      var _this11 = this;
      _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["default"].loadUserData().then(function (res) {
        _this11.send2Backend(res, 0, 0);
      })["catch"](function (err) {
        _this11.loadWithError(err);
      });
    },
    setChiffreCleVars: function setChiffreCleVars(event, index) {
      this.chiffres_cles[index][event[0]] = event[1];
      this.handleInput();
      this.chiffres_cles[0].nb_an_activite_n_2 = parseInt(this.chiffres_cles[0].nb_an_activite_n_1) - 1;
      this.formDataToBeWatched["chiffres_cles"] = this.chiffres_cles;
    },
    updateValue: function updateValue(val) {
      alert("value to update");
      alert(JSON.stringify(val));
    },
    loadRetrieved: function loadRetrieved() {
      var _this$meta_data$dossi;
      var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];
      var applied_templ_name = (_this$meta_data$dossi = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi.applied_templ_name;
      var tbArrays = this.determineCredPubTables(applied_templ_name);
      this.credpub00 = tbArrays[0];
      // Close table by default

      if (this.meta_data["dossier_credit"][createdKey] == undefined) {
        var _this$meta_data$dossi2, _this$meta_data$dossi3, _this$meta_data$dossi4, _this$meta_data$dossi1;
        // bilan_certifie
        // nom_cabinet_comptable
        // this.formDataToBeWatched.description_activite = this.dossier_credit?.cred_pub_tb_2?.description_activite

        this.formDataToBeWatched.bilan_certifie = (_this$meta_data$dossi2 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi2 === void 0 || (_this$meta_data$dossi2 = _this$meta_data$dossi2[this.credpub00]) === null || _this$meta_data$dossi2 === void 0 ? void 0 : _this$meta_data$dossi2.bilan_certifie;
        // console.log("bilan_certifie ==> ", this.formDataToBeWatched.bilan_certifie)
        this.formDataToBeWatched.nom_cabinet_comptable = (_this$meta_data$dossi3 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi3 === void 0 || (_this$meta_data$dossi3 = _this$meta_data$dossi3[this.credpub00]) === null || _this$meta_data$dossi3 === void 0 ? void 0 : _this$meta_data$dossi3.nom_cabinet_comptable;
        // this.annee_referentielle = 
        if (!["", undefined].includes((_this$meta_data$dossi4 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi4 === void 0 || (_this$meta_data$dossi4 = _this$meta_data$dossi4.cred_pub_tb_19502) === null || _this$meta_data$dossi4 === void 0 ? void 0 : _this$meta_data$dossi4.structure_financiere)) {
          var _this$meta_data$dossi5, _this$meta_data$dossi6, _this$meta_data$dossi7, _this$meta_data$dossi9, _this$meta_data$dossi0;
          this.structure_financiere = (_this$meta_data$dossi5 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi5 === void 0 || (_this$meta_data$dossi5 = _this$meta_data$dossi5.cred_pub_tb_19502) === null || _this$meta_data$dossi5 === void 0 ? void 0 : _this$meta_data$dossi5.structure_financiere;
          this.formDataToBeWatched["annee_calculees"] = (_this$meta_data$dossi6 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi6 === void 0 || (_this$meta_data$dossi6 = _this$meta_data$dossi6.cred_pub_tb_19502) === null || _this$meta_data$dossi6 === void 0 ? void 0 : _this$meta_data$dossi6.annee_calculees;
          this.formDataToBeWatched.modeManuel = (_this$meta_data$dossi7 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi7 === void 0 || (_this$meta_data$dossi7 = _this$meta_data$dossi7.cred_pub_tb_19502) === null || _this$meta_data$dossi7 === void 0 ? void 0 : _this$meta_data$dossi7.modeManuel;
          if (this.formDataToBeWatched.modeManuel == true) {
            var _this$meta_data$dossi8;
            this.formDataToBeWatched.structure_financiere_mode_manuel = (_this$meta_data$dossi8 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi8 === void 0 || (_this$meta_data$dossi8 = _this$meta_data$dossi8.cred_pub_tb_19502) === null || _this$meta_data$dossi8 === void 0 ? void 0 : _this$meta_data$dossi8.structure_financiere_mode_manuel;
          }
          this.formDataToBeWatched.commentaire_structure_financiere = (_this$meta_data$dossi9 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi9 === void 0 || (_this$meta_data$dossi9 = _this$meta_data$dossi9.cred_pub_tb_19502) === null || _this$meta_data$dossi9 === void 0 ? void 0 : _this$meta_data$dossi9.commentaire_structure_financiere;
          if (((_this$meta_data$dossi0 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi0 === void 0 || (_this$meta_data$dossi0 = _this$meta_data$dossi0["cred_pub_tb_19502"]) === null || _this$meta_data$dossi0 === void 0 || (_this$meta_data$dossi0 = _this$meta_data$dossi0.structure_financiere) === null || _this$meta_data$dossi0 === void 0 ? void 0 : _this$meta_data$dossi0.length) > 0) {
            this.structure_financiere = this.structure_financiere.map(function (ed) {
              return _objectSpread(_objectSpread({}, ed), {}, {
                cameFrom: 'tb_19002'
              });
            });
          }
          this.handleInputWhenIncomingToTb();
        } else if (!["", undefined].includes((_this$meta_data$dossi1 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi1 === void 0 || (_this$meta_data$dossi1 = _this$meta_data$dossi1.cred_pub_tb_19002) === null || _this$meta_data$dossi1 === void 0 ? void 0 : _this$meta_data$dossi1.structure_financiere)) {
          var _this$meta_data$dossi10, _this$meta_data$dossi11, _this$meta_data$dossi12, _this$meta_data$dossi14, _this$meta_data$dossi15;
          this.structure_financiere = (_this$meta_data$dossi10 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi10 === void 0 || (_this$meta_data$dossi10 = _this$meta_data$dossi10.cred_pub_tb_19002) === null || _this$meta_data$dossi10 === void 0 ? void 0 : _this$meta_data$dossi10.structure_financiere;
          this.formDataToBeWatched["annee_calculees"] = (_this$meta_data$dossi11 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi11 === void 0 || (_this$meta_data$dossi11 = _this$meta_data$dossi11.cred_pub_tb_19002) === null || _this$meta_data$dossi11 === void 0 ? void 0 : _this$meta_data$dossi11.annee_calculees;
          this.formDataToBeWatched.modeManuel = (_this$meta_data$dossi12 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi12 === void 0 || (_this$meta_data$dossi12 = _this$meta_data$dossi12.cred_pub_tb_19002) === null || _this$meta_data$dossi12 === void 0 ? void 0 : _this$meta_data$dossi12.modeManuel;
          if (this.formDataToBeWatched.modeManuel == true) {
            var _this$meta_data$dossi13;
            this.formDataToBeWatched.structure_financiere_mode_manuel = (_this$meta_data$dossi13 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi13 === void 0 || (_this$meta_data$dossi13 = _this$meta_data$dossi13.cred_pub_tb_19002) === null || _this$meta_data$dossi13 === void 0 ? void 0 : _this$meta_data$dossi13.structure_financiere_mode_manuel;
          }
          this.formDataToBeWatched.commentaire_structure_financiere = (_this$meta_data$dossi14 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi14 === void 0 || (_this$meta_data$dossi14 = _this$meta_data$dossi14.cred_pub_tb_19002) === null || _this$meta_data$dossi14 === void 0 ? void 0 : _this$meta_data$dossi14.commentaire_structure_financiere;
          if (((_this$meta_data$dossi15 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi15 === void 0 || (_this$meta_data$dossi15 = _this$meta_data$dossi15["cred_pub_tb_19002"]) === null || _this$meta_data$dossi15 === void 0 || (_this$meta_data$dossi15 = _this$meta_data$dossi15.structure_financiere) === null || _this$meta_data$dossi15 === void 0 ? void 0 : _this$meta_data$dossi15.length) > 0) {
            this.structure_financiere = this.structure_financiere.map(function (ed) {
              return _objectSpread(_objectSpread({}, ed), {}, {
                cameFrom: 'tb_19002'
              });
            });
          }
          this.handleInputWhenIncomingToTb();
        } else {
          this.loadParams();
          this.loadBeforeRequest();
        }
      }
      if (lentb.length > 0) {
        if (this.meta_data["dossier_credit"][createdKey] != undefined) {
          this.formDataToBeWatched = this.meta_data["dossier_credit"][createdKey];

          // if (this.formDataToBeWatched["structure_financiere"] != undefined) {
          //     if (this.formDataToBeWatched["structure_financiere"] != "") {
          //         this.structure_financiere = this.formDataToBeWatched["structure_financiere"]
          //     }
          // }
          //     if (
          //       this.meta_data["dossier_credit"][createdKey][
          //           "chiffres_provisoires"
          //       ] != ""
          //   ) {
          //       this.chiffres_provisoires =
          //           this.meta_data["dossier_credit"][createdKey][
          //               "chiffres_provisoires"
          //           ];
          //   }
          //   if (
          //         this.meta_data["dossier_credit"][createdKey][
          //         "mouvement_confies"
          //         ] != ""
          //     ) {
          //         this.mouvement_confies =
          //             this.meta_data["dossier_credit"][createdKey][
          //             "mouvement_confies"
          //             ];
          //     }
          if (this.meta_data["dossier_credit"][createdKey]["structure_financiere"] != "") {
            this.structure_financiere = this.meta_data["dossier_credit"][createdKey]["structure_financiere"];
          }
        }
      }

      // Close table by default
      //  this.defaultRetract(
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
          filledData: this.formDataToBeWatched,
          loadDossier: true
        }).then(function (response) {
          this.$emit("autosaving");
          // this.$Progress.finish();
          // console.log(response);
          var tbFetcheData = response.data;
          // this.launchScoringTable("organisation");
          // this.launchScoringTable();
          if (tbFetcheData["is_success"] === true) {
            this.dossier_credit = tbFetcheData['dossier_credit'];

            // this.bilan_certifie = this.dossier_credit?.[this.credpub00]?.bilan_certifie
            // this.nom_cabinet_comptable = this.dossier_credit?.[this.credpub00]?.nom_cabinet_comptable
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
    precomputeScore: function precomputeScore() {
      var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      this.meta_parseable["type_table"] = a;
      var scoringVar = [];
      if (a == "organisation") {
        scoringVar = ["vivre", "competences_manageriales", "formalisation", "interaction"];
      } else {
        scoringVar = ["technologie", "risque_juridique", "risque_politique"];
      }
      for (var i = 0; i < scoringVar.length; i++) {
        if (this.formDataToBeWatched[scoringVar[i]] == "") {
          return false;
        }
      }
      return true;
    },
    // launchScoringTable(a) {
    //     if (this.precomputeScore(a) === true) {
    //        this.$axios
    //             .post(
    //                 this.ebapisHost +
    //                     "cofiscore/api/v1/launchscorer-table/",
    //                 {
    //                     user: this.authcheckUsr,
    //                     meta_parseable: this.meta_parseable,
    //                     filledData: this.formDataToBeWatched,
    //                 }
    //             )
    //             .then(
    //                 function (response) {
    //                     // console.log(response)
    //                     let tbFetcheData = response.data;
    //                     if (a == "organisation") {
    //                         this.decision_theorique1 =
    //                             tbFetcheData["decision_theorique"];
    //                         if (
    //                             this.formDataToBeWatched
    //                                 .decision_theorique1 == ""
    //                         ) {
    //                             this.formDataToBeWatched.decision_theorique1 =
    //                                 this.decision_theorique1;
    //                         }
    //                     } else {
    //                         this.decision_theorique2 =
    //                             tbFetcheData["decision_theorique"];
    //                         if (
    //                             this.formDataToBeWatched
    //                                 .decision_theorique2 == ""
    //                         ) {
    //                             this.formDataToBeWatched.decision_theorique2 =
    //                                 this.decision_theorique2;
    //                         }
    //                     }
    //                 }.bind(this)
    //             )
    //             .catch(
    //                 function (error) {
    //                     this.$Progress.finish();
    //                     console.log(error);
    //                 }.bind(this)
    //             );
    //     }
    // },
    // addMore() {
    //     this.source_revenus.push({
    //         activite: "",
    //         emplacement: "",
    //         depuis_quand: "",
    //         loue: "",
    //         Permanente: 0,
    //         interimaires: 0
    //     });
    // },
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
    addMore2: function addMore2() {
      this.equipe_dirigeantes.push({
        dirigeants: "",
        pouvoir_signature: "",
        fonction_sein_entreprise: "",
        experience: "",
        diplome: ""
      });
    },
    remove2: function remove2(index) {
      this.equipe_dirigeantes.splice(index, 1);
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
        id: "ca4-head"
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
    onSlctMatCli: function onSlctMatCli(obj, key) {
      this.entite_connectes[key]["raison_social_entite_connecte"] = obj.nomcli;
      this.entite_connectes[key]["matricule_client_entite_connecte"] = obj.matclihan;
      this.handleInput();
    },
    calculVarianceWhenIncomingToTb: function calculVarianceWhenIncomingToTb(tab) {
      var a = 0;
      var b = 1;
      if (tab.length > 0) {
        tab.forEach(function (element) {
          if (element.code != 'BFR') {
            var _element$curr_year_, _element$curr_year_2;
            a = Number((_element$curr_year_ = element.curr_year_1) === null || _element$curr_year_ === void 0 ? void 0 : _element$curr_year_.toString().replace(/\s/g, ""));
            if (element.curr_year_2 != "" || element.curr_year_2 != 0) b = Number((_element$curr_year_2 = element.curr_year_2) === null || _element$curr_year_2 === void 0 ? void 0 : _element$curr_year_2.toString().replace(/\s/g, ""));
            element.variance = [a / b - 1] * 100;
            element.variance = Number.parseFloat(element.variance).toFixed(2);
          }
        });
      }
      return tab;
    },
    handleInputWhenIncomingToTb: function handleInputWhenIncomingToTb() {
      this.structure_financiere = this.calculVarianceWhenIncomingToTb(this.structure_financiere);
      this.formDataToBeWatched.structure_financiere = this.structure_financiere;
    },
    calculVariance: function calculVariance(tab) {
      var _this$agregats_chiffr3, _this$agregats_chiffr4;
      var a = 0;
      var b = 1;
      var data_chiffre_cles = (_this$agregats_chiffr3 = this.agregats_chiffre_cle) === null || _this$agregats_chiffr3 === void 0 ? void 0 : _this$agregats_chiffr3['chiffre-cles'];
      var data_agregats = (_this$agregats_chiffr4 = this.agregats_chiffre_cle) === null || _this$agregats_chiffr4 === void 0 ? void 0 : _this$agregats_chiffr4['agregats'];
      var caf = data_chiffre_cles === null || data_chiffre_cles === void 0 ? void 0 : data_chiffre_cles.find(function (el, index) {
        return el["LIB"] == " C.A.F.";
      });
      var bfr = data_agregats === null || data_agregats === void 0 ? void 0 : data_agregats.find(function (el, index) {
        return el["LIB"] == " Besoin en Fonds de Roulement (B)";
      });
      var fdr = data_agregats === null || data_agregats === void 0 ? void 0 : data_agregats.find(function (el, index) {
        return el["LIB"] == " Fonds de roulement  (A)";
      });
      if (tab.length > 0) {
        tab.forEach(function (element) {
          var _element$curr_year_3, _element$curr_year_4;
          a = Number((_element$curr_year_3 = element.curr_year_1) === null || _element$curr_year_3 === void 0 ? void 0 : _element$curr_year_3.toString().replace(/\s/g, ""));
          if (element.curr_year_2 != "" || element.curr_year_2 != 0) b = Number((_element$curr_year_4 = element.curr_year_2) === null || _element$curr_year_4 === void 0 ? void 0 : _element$curr_year_4.toString().replace(/\s/g, ""));
          if (element.code == "CAF") {
            element.variance = caf !== null && caf !== void 0 && caf.varn1 ? caf === null || caf === void 0 ? void 0 : caf.varn1 : 0;
          } else if (element.code == "FDR") {
            element.variance = fdr !== null && fdr !== void 0 && fdr.varn1 ? fdr === null || fdr === void 0 ? void 0 : fdr.varn1 : 0;
          } else if (element.code == "BFR") {
            element.variance = bfr !== null && bfr !== void 0 && bfr.varn1 ? bfr === null || bfr === void 0 ? void 0 : bfr.varn1 : 0;
          } else {
            element.variance = ([a / b - 1] * 100).toFixed(2);
          }
        });
      }
      return tab;
    },
    divTwoNumbers: function divTwoNumbers(a, b) {
      if (!b || b == "0") {
        b = 1;
      }
      var result = this.strToNum(a) / this.strToNum(b) * 100;
      return result;
    },
    setMouvementConfieeVars: function setMouvementConfieeVars(event, index) {
      this.mouvement_confies[index][event[0]] = event[1];
      this.handleInput();
    },
    handleInput: function handleInput(evt, index) {
      this.structure_financiere = this.calculVarianceWhenIncomingToTb(this.structure_financiere);
      this.formDataToBeWatched.structure_financiere = this.structure_financiere;
    },
    instruction3: function instruction3(id) {
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA4.vue?vue&type=template&id=28cce236&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA4.vue?vue&type=template&id=28cce236&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$formDataToBeWatch, _vm$formDataToBeWatch2, _vm$formDataToBeWatch3, _vm$formDataToBeWatch4, _vm$formDataToBeWatch5, _vm$formDataToBeWatch6, _vm$formDataToBeWatch7, _vm$formDataToBeWatch8;
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
      id: "ca4-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Analyse Financière Des Performances\n                        ")]), _vm._v(" "), _c("div", {
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
    staticClass: "col-12 p-0 position-relative"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("div", {
    staticClass: "p-3 mb-2 bg-secondary text-white"
  }, [_c("h6", {
    attrs: {
      id: "actionnariats"
    }
  }, [_vm._v("\n                                        Performances\n                                        "), _c("i", {
    staticClass: "icofont-hand-drag1 manual-mode-icon",
    "class": {
      "automatic-mode-icon": _vm.formDataToBeWatched.modeManuel == false,
      "manual-mode-icon": _vm.formDataToBeWatched.modeManuel
    },
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      title: _vm.formDataToBeWatched.modeManuel ? "Passer en mode automatique" : "Passer en mode manuel"
    },
    on: {
      click: function click($event) {
        $event.stopPropagation();
        return _vm.setModeMA.apply(null, arguments);
      }
    }
  })])]), _vm._v(" "), _c("table", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: this.formDataToBeWatched.modeManuel == false,
      expression: "this.formDataToBeWatched.modeManuel == false"
    }],
    staticClass: "table table-borderless mb-1"
  }, [_c("thead", [_c("tr", {
    staticClass: "fw-bold"
  }, [_vm._m(0), _vm._v(" "), _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("N-2(" + _vm._s(((_vm$formDataToBeWatch2 = _vm.formDataToBeWatched.annee_calculees) === null || _vm$formDataToBeWatch2 === void 0 ? void 0 : _vm$formDataToBeWatch2.at(-3)) != undefined ? (_vm$formDataToBeWatch3 = _vm.formDataToBeWatched.annee_calculees) === null || _vm$formDataToBeWatch3 === void 0 ? void 0 : _vm$formDataToBeWatch3.at(-3) : "") + ")")])]), _vm._v(" "), _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("N-1(" + _vm._s(((_vm$formDataToBeWatch4 = _vm.formDataToBeWatched.annee_calculees) === null || _vm$formDataToBeWatch4 === void 0 ? void 0 : _vm$formDataToBeWatch4.at(-2)) != undefined ? (_vm$formDataToBeWatch5 = _vm.formDataToBeWatched.annee_calculees) === null || _vm$formDataToBeWatch5 === void 0 ? void 0 : _vm$formDataToBeWatch5.at(-2) : "") + ")")])]), _vm._v(" "), _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("N(" + _vm._s(((_vm$formDataToBeWatch6 = _vm.formDataToBeWatched.annee_calculees) === null || _vm$formDataToBeWatch6 === void 0 ? void 0 : _vm$formDataToBeWatch6.at(-1)) != undefined ? (_vm$formDataToBeWatch7 = _vm.formDataToBeWatched.annee_calculees) === null || _vm$formDataToBeWatch7 === void 0 ? void 0 : _vm$formDataToBeWatch7.at(-1) : "") + ")")])]), _vm._v(" "), _vm._m(1)])]), _vm._v(" "), _c("tbody", _vm._l(_vm.structure_financiere, function (act_rent, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_c("label", {
      attrs: {
        "for": ""
      }
    }, [_vm._v("\n                                                        " + _vm._s(act_rent.label) + "\n                                                    ")])]), _vm._v(" "), _c("td", [_c("currency-input", {
      "class": {
        textToRight: index == 4,
        equipe: (act_rent === null || act_rent === void 0 ? void 0 : act_rent.cameFrom) == "tb_19002"
      },
      attrs: {
        "default-typing": false
      },
      on: {
        change: _vm.handleInput
      },
      model: {
        value: act_rent.curr_year_3,
        callback: function callback($$v) {
          _vm.$set(act_rent, "curr_year_3", $$v);
        },
        expression: "act_rent.curr_year_3"
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
      "class": {
        textToRight: index == 4,
        equipe: (act_rent === null || act_rent === void 0 ? void 0 : act_rent.cameFrom) == "tb_19002"
      },
      attrs: {
        "default-typing": false
      },
      on: {
        change: _vm.handleInput
      },
      model: {
        value: act_rent.curr_year_2,
        callback: function callback($$v) {
          _vm.$set(act_rent, "curr_year_2", $$v);
        },
        expression: "act_rent.curr_year_2"
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
      "class": {
        textToRight: index == 4,
        equipe: (act_rent === null || act_rent === void 0 ? void 0 : act_rent.cameFrom) == "tb_19002"
      },
      attrs: {
        "default-typing": false
      },
      on: {
        change: _vm.handleInput
      },
      model: {
        value: act_rent.curr_year_1,
        callback: function callback($$v) {
          _vm.$set(act_rent, "curr_year_1", $$v);
        },
        expression: "act_rent.curr_year_1"
      }
    })], 1), _vm._v(" "), _c("td", [_c("div", {
      staticClass: "btn-group w-100 btn-group-inputPercent",
      attrs: {
        id: "inputPercent"
      }
    }, [_c("currency-input", {
      staticClass: "form-control text-end",
      staticStyle: {
        "border-radius": "unset",
        "padding-right": "7px",
        "border-end-start-radius": "5px",
        "border-start-start-radius": "5px"
      },
      attrs: {
        "default-typing": false,
        disabled: "",
        "float": ""
      },
      on: {
        change: _vm.handleInput
      },
      model: {
        value: act_rent.variance,
        callback: function callback($$v) {
          _vm.$set(act_rent, "variance", $$v);
        },
        expression: "\n                                                                act_rent.variance"
      }
    }), _vm._v(" "), _c("button", {
      staticClass: "btn btn-collapse btn-grey fw-bold",
      staticStyle: {
        padding: "2px 9px 0 0",
        border: "none",
        background: "#e9ecef",
        "border-top": "1px solid",
        "border-bottom": "1px solid",
        "border-right": "1px solid"
      }
    }, [_vm._v("%")])], 1)])]);
  }), 0)])]), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.formDataToBeWatched.modeManuel == true,
      expression: "formDataToBeWatched.modeManuel == true"
    }],
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "col-md-12 mt-0 mb-4"
  }, [_vm._m(2), _vm._v(" "), _c("vue-editor", {
    attrs: {
      id: "structure_financiere_mode_manuel"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.structure_financiere_mode_manuel,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "structure_financiere_mode_manuel", $$v);
      },
      expression: "formDataToBeWatched.structure_financiere_mode_manuel"
    }
  })], 1)]), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "d-flex"
  }, [_vm._m(3), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("div", {
    staticClass: "d-flex justify-content-end"
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
      id: "oui"
    },
    domProps: {
      checked: _vm.formDataToBeWatched.bilan_certifie == "Oui"
    },
    on: {
      change: function change($event) {
        return _vm.checkboxValCashCall($event, "bilan_certifie");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "text-nowrap",
    attrs: {
      "for": "oui"
    }
  }, [_vm._v(" Oui")])]), _vm._v(" "), _c("div", {
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
      id: "non"
    },
    domProps: {
      checked: _vm.formDataToBeWatched.bilan_certifie == "Non"
    },
    on: {
      change: function change($event) {
        return _vm.checkboxValCashCall($event, "bilan_certifie");
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "text-nowrap",
    attrs: {
      "for": "non"
    }
  }, [_vm._v(" Non")])])])])]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive",
    attrs: {
      id: "autres_besoins"
    }
  }, [_c("table", {
    staticClass: "table table-borderless mt-2"
  }, [_c("tbody", [_vm.formDataToBeWatched.bilan_certifie == "Oui" ? _c("tr", [_vm._m(4), _vm._v(" "), _c("td", [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.nom_cabinet_comptable,
      expression: "formDataToBeWatched.nom_cabinet_comptable"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "nom_cabinet_comptable"
    },
    domProps: {
      value: _vm.formDataToBeWatched.nom_cabinet_comptable
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "nom_cabinet_comptable", $event.target.value);
      }
    }
  })])]) : _vm._e()])])])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "col-md-12 mt-0 mb-4"
  }, [_vm._m(5), _vm._v(" "), _c("vue-editor", {
    attrs: {
      id: "commentaire_structure_financiere"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.commentaire_structure_financiere,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "commentaire_structure_financiere", $$v);
      },
      expression: "formDataToBeWatched.commentaire_structure_financiere"
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
      id: "ca4-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Analyse Financière Des Performances\n                        ")]), _vm._v(" "), _c("div", {
    staticClass: "col-auto"
  }, [((_vm$formDataToBeWatch8 = _vm.formDataToBeWatched.notes) === null || _vm$formDataToBeWatch8 === void 0 ? void 0 : _vm$formDataToBeWatch8.length) > 0 ? _c("div", {
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
    attrs: {
      "for": ""
    }
  }, [_vm._v("Années")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Var(%)")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_c("b", [_vm._v("Structure financière")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-md-6"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": ""
    }
  }, [_c("b", [_vm._v("Bilan certifié ? ")]), _c("span", {
    staticClass: "text-danger"
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": ""
    }
  }, [_c("b", [_vm._v("Nom du cabinet comptable")]), _c("span", {
    staticStyle: {
      color: "red"
    }
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_c("b", [_vm._v("Commentaire")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA4.vue?vue&type=style&index=0&id=28cce236&lang=css&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA4.vue?vue&type=style&index=0&id=28cce236&lang=css&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\ninput[data-v-28cce236] {\n  /*border: 1px solid red;*/\n}\n*[data-v-28cce236] {\n  font-family: \"Google sans\";\n}\nlabel[data-v-28cce236] {\n  height: 10px;\n  font-size: 13px;\n}\ntd[data-v-28cce236] {\n  padding: 5px;\n  font-size: 13px;\n}\ninput[data-v-28cce236],\nselect[data-v-28cce236] {\n  height: 35px;\n  border-color: #34495e;\n  color: #57606f;\n  font-size: 13px;\n  font-weight: bold;\n}\n.card-width-height[data-v-28cce236] {\n  width: 100%;\n  height: 100%;\n}\n.head[data-v-28cce236] {\n  color: #f1f2f6;\n  font-size: 22px;\n}\n.hdc[data-v-28cce236] {\n  background-color: #57606f;\n}\n.relook-header[data-v-28cce236] {\n  color: #000;\n  background-color: #f4f3f3;\n  padding: 5px;\n  border-bottom: 1px solid #b6b8bb;\n}\n.badge-sm[data-v-28cce236] {\n  display: inline-block;\n  width: 15px;\n  height: 15px;\n  background: rgba(255, 0, 0, 0.882);\n  color: white;\n  font-size: 12px;\n  font-weight: 500;\n  border-radius: 100%;\n  position: absolute;\n  top: -20%;\n  left: 55%;\n  text-align: center;\n}\n.imageM21i[data-v-28cce236] {\n  background: url(\"/images/capture_cofina/instruction_evaluation_risque.png\")\n      no-repeat;\n  background-position: center;\n  background-size: contain;\n  width: 100%;\n  height: 100%;\n}\n.equipe[data-v-28cce236]{\n  background: #00ffff21;\n  color: #000;\n}\n.imageM21exi[data-v-28cce236] {\n  background: url(\"/images/capture_cofina/exemple_evaluation_risque.png\")\n      no-repeat;\n  background-position: center;\n  background-size: contain;\n  width: 1000px;\n  height: 200px;\n}\n.textToRight[data-v-28cce236]{\n  text-align: right;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA4.vue?vue&type=style&index=0&id=28cce236&lang=css&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA4.vue?vue&type=style&index=0&id=28cce236&lang=css&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RG_CA4_vue_vue_type_style_index_0_id_28cce236_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RG-CA4.vue?vue&type=style&index=0&id=28cce236&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA4.vue?vue&type=style&index=0&id=28cce236&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RG_CA4_vue_vue_type_style_index_0_id_28cce236_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RG_CA4_vue_vue_type_style_index_0_id_28cce236_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA4.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA4.vue ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RG_CA4_vue_vue_type_template_id_28cce236_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RG-CA4.vue?vue&type=template&id=28cce236&scoped=true */ "./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA4.vue?vue&type=template&id=28cce236&scoped=true");
/* harmony import */ var _RG_CA4_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RG-CA4.vue?vue&type=script&lang=js */ "./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA4.vue?vue&type=script&lang=js");
/* harmony import */ var _RG_CA4_vue_vue_type_style_index_0_id_28cce236_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RG-CA4.vue?vue&type=style&index=0&id=28cce236&lang=css&scoped=true */ "./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA4.vue?vue&type=style&index=0&id=28cce236&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _RG_CA4_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _RG_CA4_vue_vue_type_template_id_28cce236_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _RG_CA4_vue_vue_type_template_id_28cce236_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "28cce236",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA4.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA4.vue?vue&type=script&lang=js":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA4.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RG_CA4_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RG-CA4.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA4.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RG_CA4_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA4.vue?vue&type=style&index=0&id=28cce236&lang=css&scoped=true":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA4.vue?vue&type=style&index=0&id=28cce236&lang=css&scoped=true ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RG_CA4_vue_vue_type_style_index_0_id_28cce236_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RG-CA4.vue?vue&type=style&index=0&id=28cce236&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA4.vue?vue&type=style&index=0&id=28cce236&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA4.vue?vue&type=template&id=28cce236&scoped=true":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA4.vue?vue&type=template&id=28cce236&scoped=true ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RG_CA4_vue_vue_type_template_id_28cce236_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RG_CA4_vue_vue_type_template_id_28cce236_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RG_CA4_vue_vue_type_template_id_28cce236_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RG-CA4.vue?vue&type=template&id=28cce236&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA4.vue?vue&type=template&id=28cce236&scoped=true");


/***/ })

}]);