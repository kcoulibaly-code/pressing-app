"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_forms_afg_carcasse_ppo_DCPP-PCP5_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/carcasse_ppo/DCPP-PCP5.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/carcasse_ppo/DCPP-PCP5.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vueform/multiselect/dist/multiselect.vue2 */ "./node_modules/@vueform/multiselect/dist/multiselect.vue2.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../helpers/helper */ "./resources/js/helpers/helper.js");
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
  name: "Fiche_d_endettement",
  display: "Fiche d'endettement",
  components: {
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.ChevronDownIcon,
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.TrashIcon,
    AirplayIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.AirplayIcon,
    Multiselect: _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_3__["default"]
    // BookOpenIcon,
  },
  computed: {
    retrieveFacilitesExistante: function retrieveFacilitesExistante() {
      return this.data_tb4;
    },
    getRevenuSalaire: function getRevenuSalaire() {
      var _this$data_tb, _this$data_tb2, _this$data_tb3;
      // console.log('getRevenuSalaire');
      if (((_this$data_tb = this.data_tb1) === null || _this$data_tb === void 0 ? void 0 : _this$data_tb.revenu_domicilie) == undefined || ((_this$data_tb2 = this.data_tb1) === null || _this$data_tb2 === void 0 ? void 0 : _this$data_tb2.revenu_domicilie) == '') return '';
      var node_salaire = (_this$data_tb3 = this.data_tb1) === null || _this$data_tb3 === void 0 ? void 0 : _this$data_tb3.revenu_domicilie[0];
      if (node_salaire.libelle == "Salaire net" && node_salaire.checked == true) {
        return node_salaire.montant_salaire;
      }
      return '';
    }
  },
  props: {
    meta_data: Object,
    tb_name: String,
    tb_display_name: String
  },
  created: function created() {
    var _this = this;
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _this.getNationalites();
          case 2:
            _context.next = 4;
            return _this.getCreditBanques();
          case 4:
            EventBus.$on("dossier-updated-dcpp-pcp4-0", function (d) {
              if ((d === null || d === void 0 ? void 0 : d.data_tb4) != undefined) {
                var data = d.data_tb4;
                _this.data_tb4 = data === null || data === void 0 ? void 0 : data.facilites_existante;
              }
            });
            EventBus.$on("dossier-updated-dcpp-pcp1-0", function (d) {
              // console.log("lauhght", d );
              if ((d === null || d === void 0 ? void 0 : d.data_tb1) != undefined) {
                var data = d.data_tb1;
                _this.data_tb1 = data;
                _this.getRevenuAutre();
              }
              _this.getRemboursement();
              _this.getTauxEndettement();
            });
            EventBus.$on("dossier-updated-dcp-1", function (data) {
              var _data$data_tb;
              if (data !== null && data !== void 0 && (_data$data_tb = data.data_tb1) !== null && _data$data_tb !== void 0 && _data$data_tb.facilites_sollicitees) {
                var _data$data_tb2, _data$data_tb3;
                _this.facilites_sollicitees = data === null || data === void 0 || (_data$data_tb2 = data.data_tb1) === null || _data$data_tb2 === void 0 ? void 0 : _data$data_tb2.facilites_sollicitees;
                _this.facilites_existante = data === null || data === void 0 || (_data$data_tb3 = data.data_tb1) === null || _data$data_tb3 === void 0 ? void 0 : _data$data_tb3.facilites_existante;
                // console.log('Données invalides ou absentes dans data_tb1.facilites_sollicitees');
              } else {
                // console.warn('Données invalides ou absentes dans data_tb1.facilites_sollicitees');
              }
              _this.getTauxEndettement();
              _this.getRemboursement();
            });
          case 7:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  mounted: function mounted() {
    this.loadRetrieved();
    this.loadTbAttrs();
    this.tableClosedOrOpened();
    this.getRemboursement();
    this.getTauxEndettement();
  },
  data: function data() {
    var _this$meta_data$dossi, _this$meta_data$dossi2, _this$meta_data$dossi3, _this$meta_data$dossi4;
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
      isLoading: false,
      meta_parseable: {
        cred_pub_key: this.meta_data["cred_pub_key"],
        tb_name: this.tb_name
      },
      type_credits: [],
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
      periodicites: [{
        libelle: "Mensuelle",
        month: 1
      }, {
        libelle: "Bimensuelle",
        month: 1
      }, {
        libelle: "Trimestrielle",
        month: 3
      }, {
        libelle: "Semestrielle",
        month: 6
      }, {
        libelle: "Annuelle",
        month: 12
      }],
      listingNote: false,
      formDataToBeWatched: _defineProperty(_defineProperty(_defineProperty(_defineProperty({
        notes: [],
        is_first_time: null,
        nom: "",
        prenoms: "",
        carcasse_type: "",
        denomination_client: "",
        type_demande: "",
        type_credit: "",
        contact_client: "",
        email_client: "",
        montant_sollicite: 0,
        montant_credit: 0,
        duree_credit: 0
      }, "montant_sollicite", 0), "remb_autre_credit", 0), "remb_nouveau_credit", 0), "taux_endettement", 0),
      mask_telephone: "",
      data_tb4: ((_this$meta_data$dossi = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi === void 0 || (_this$meta_data$dossi = _this$meta_data$dossi.cred_pub_tb_120004) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi.facilites_existante) || [],
      data_tb1: (_this$meta_data$dossi2 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi2 === void 0 ? void 0 : _this$meta_data$dossi2.cred_pub_tb_120001,
      facilites_sollicitees: (_this$meta_data$dossi3 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi3 === void 0 || (_this$meta_data$dossi3 = _this$meta_data$dossi3.cred_pub_tb_120004) === null || _this$meta_data$dossi3 === void 0 ? void 0 : _this$meta_data$dossi3.facilites_sollicitees,
      facilites_existante: (_this$meta_data$dossi4 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi4 === void 0 || (_this$meta_data$dossi4 = _this$meta_data$dossi4.cred_pub_tb_120004) === null || _this$meta_data$dossi4 === void 0 ? void 0 : _this$meta_data$dossi4.facilites_existante,
      remb_autre_credit: 0,
      remb_nouveau_credit: 0,
      ravTheorique: 0,
      montant_situation_matrimoniale: [{
        situation: "Célibataire",
        montant: 40000,
        montant_par_enfant: 10000
      }, {
        situation: "Marié(e)",
        montant: 60000,
        montant_par_enfant: 10000
      }]
    };
  },
  methods: {
    formuleQD: function formuleQD(mt, colonn) {
      mt = isNaN(mt) ? 0 : mt;
      var formulas = {
        A: "A = \u2211 RC = SN (Salaire Net) + PR (Prime) + AR (Autre revenu)",
        B: "B = \u2211 %SN + %PR + %AR",
        C: "C = TMP (Total Mt Pond\xE9r\xE9) / TMQC (Total Mt Quotit\xE9 C\xE9ssible)",
        D: "D = B - \u2211 Ms (Mensualit\xE9s des facilit\xE9s sollicit\xE9es)",
        E: "E = TMP (Total Mt Pond\xE9r\xE9) / TMQCL (Total Mt Quotit\xE9 C\xE9ssible L\xE9gal)",
        F: "F = \u2211 %SN + %PR + %AR",
        G: "G = B - \u2211 Ms (Mensualit\xE9s des facilit\xE9s sollicit\xE9es)"
      };
      return "Formule de calcul: ".concat(formulas[colonn] || "Non défini");
    },
    getRavTheorique: function getRavTheorique() {
      var _this2 = this;
      var ravTheorique = 0;
      this.montant_situation_matrimoniale.forEach(function (el, index) {
        var _this2$data_tb;
        if ((el === null || el === void 0 ? void 0 : el.situation.toUpperCase().charAt(0)) == ((_this2$data_tb = _this2.data_tb1) === null || _this2$data_tb === void 0 || (_this2$data_tb = _this2$data_tb.matrimoniale) === null || _this2$data_tb === void 0 || (_this2$data_tb = _this2$data_tb.toUpperCase()) === null || _this2$data_tb === void 0 ? void 0 : _this2$data_tb.charAt(0))) {
          var _this2$data_tb2;
          ravTheorique = parseInt(el.montant_par_enfant) * parseInt((_this2$data_tb2 = _this2.data_tb1) === null || _this2$data_tb2 === void 0 ? void 0 : _this2$data_tb2.nbre_enfant) + parseInt(el.montant);
        }
      });
      this.ravTheorique = ravTheorique;
    },
    transformValue: function transformValue(value) {
      if (typeof value === 'string' && !isNaN(value) && value.trim() !== '') {
        return Number(value);
      } else if (typeof value === 'number') {
        return value;
      }
      return value;
    },
    getRemboursement: function getRemboursement() {
      var _this$facilites_exist,
        _this$facilites_solli,
        _this$facilites_exist2,
        _this3 = this,
        _this$facilites_solli2;
      if (!this.data_tb4) {
        return;
      }
      if (((_this$facilites_exist = this.facilites_existante) === null || _this$facilites_exist === void 0 ? void 0 : _this$facilites_exist.length) == 0 && ((_this$facilites_solli = this.facilites_sollicitees) === null || _this$facilites_solli === void 0 ? void 0 : _this$facilites_solli.length) == 0) {
        return;
      }
      this.formDataToBeWatched.remb_autre_credit = 0;
      (_this$facilites_exist2 = this.facilites_existante) === null || _this$facilites_exist2 === void 0 || _this$facilites_exist2.forEach(function (facilite) {
        var montant_echeance = facilite.montant_echeance;
        var montant_encours = _this3.transformValue(facilite.encours);
        if (typeof montant_echeance === 'string') {
          montant_echeance = montant_echeance.replace(/\s/g, "");
        } else if (typeof montant_echeance === 'number') {
          montant_echeance = montant_echeance.toString();
        }
        var montant = parseInt(montant_echeance, 10);
        if (montant_encours > 0) {
          _this3.formDataToBeWatched.remb_autre_credit += isNaN(montant) ? 0 : montant;
        }
      });
      var rachat_interne = false;
      this.formDataToBeWatched.remb_nouveau_credit = 0;
      (_this$facilites_solli2 = this.facilites_sollicitees) === null || _this$facilites_solli2 === void 0 || _this$facilites_solli2.forEach(function (facilite) {
        if ((facilite === null || facilite === void 0 ? void 0 : facilite.is_rachat) == 'Oui' && (facilite === null || facilite === void 0 ? void 0 : facilite.type_rachat) == 'Rachat interne') {
          rachat_interne = true;
        }
        var montant_echeance = facilite.montant_echeance;
        if (typeof montant_echeance === 'string') {
          montant_echeance = montant_echeance.replace(/\s/g, "");
        } else if (typeof montant_echeance === 'number') {
          montant_echeance = montant_echeance.toString();
        }
        var montant = parseInt(montant_echeance, 10);
        _this3.formDataToBeWatched.remb_nouveau_credit += isNaN(montant) ? 0 : montant;
      });
      if (rachat_interne == true) {
        this.formDataToBeWatched.remb_autre_credit = 0;
      }
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
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (_DEBUG) console.log(">> updateFormDataForDeletion");
              _this4.formDataToBeWatched.is_deleted = true;
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
      var _this5 = this;
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
              if (!_this5.formDataToBeWatched.is_deleted) {
                _context3.next = 5;
                break;
              }
              return _context3.abrupt("return");
            case 5:
              // Upload current (and arguably latest) formDataToBeWatched data

              _this5.uploadDataToServerAndUpdateLastSave(_this5.formDataToBeWatched, _this5.formDataToBeWatched);
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
      var _this6 = this;
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
                  _this6.uploadDataToServerAndUpdateLastSave(newVal, oldVal);
                }
              }
              // First upload
              if (!_lastSaveTime) {
                _this6.uploadDataToServerAndUpdateLastSave(newVal, oldVal);
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
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              if (_DEBUG) console.log(">> uploadDataToServerAndUpdateLastSave");
              _context5.prev = 1;
              if (_DEBUG) console.log(">> this.autosaving");
              _context5.next = 5;
              return _this7.autosaving(newVal, oldVal);
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
      var _this8 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              if (_DEBUG) console.log(">> uploadDataToServerBeforePageCloses");
              _context6.prev = 1;
              _context6.next = 4;
              return _this8.autosaving(newVal, oldVal);
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
      var _this9 = this;
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
              return _this9.autosaving(_this9.formDataToBeWatched, _this9.formDataToBeWatched);
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
    getNationalites: function getNationalites() {
      var _this0 = this;
      _services_credit_service__WEBPACK_IMPORTED_MODULE_2__["default"].loadNationalites().then(function (res) {
        _this0.nationnalites = res.data;
      })["catch"](function (err) {
        console.log(err);
      });
    },
    getCreditBanques: function getCreditBanques() {
      var _this1 = this;
      var cachedCreditTypes = localStorage.getItem('banque_credit_types');
      if (!cachedCreditTypes) {
        _services_credit_service__WEBPACK_IMPORTED_MODULE_2__["default"].loadCreditBanques().then(function (res) {
          _this1.type_credits = res.data;
          localStorage.setItem('banque_credit_types', JSON.stringify(res.data));
        })["catch"](function (err) {
          console.log(err);
        });
      } else {
        var data = JSON.parse(cachedCreditTypes);
        this.type_credits = data;
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
        id: "dcp-ppo2-head"
      };
      this.$emit("load-buffer", p);
    },
    tableClosedOrOpened: function tableClosedOrOpened() {
      this.seen = this.fetchClosedTables(this.tb_name + this.meta_data["cred_pub_key"]);
    },
    somX3: function somX3(ob, key) {
      var som = 0;
      ob === null || ob === void 0 || ob.filter(function (elm) {
        var _elm$key;
        som += Number((_elm$key = elm[key]) === null || _elm$key === void 0 ? void 0 : _elm$key.toString().replace(/\s/g, ""));
      });
      return som;
    },
    convertInt: function convertInt(n) {
      var _n$toString;
      return Number(n === null || n === void 0 || (_n$toString = n.toString()) === null || _n$toString === void 0 ? void 0 : _n$toString.replace(/\s/g, ''));
    },
    formDataVars: function formDataVars(event) {
      this.formDataToBeWatched[event[0]] = event[1];
      this.handleInput();
    },
    formDataVars2: function formDataVars2(event, index, objectName, keyName) {
      this[objectName][index][keyName] = event[1];
      this.handleInput();
    },
    handleInput: function handleInput() {
      var reset_taux_qc = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    } // console.log('handleInput');
    ,
    retract: function retract() {
      this.seen = !this.seen;
      var a = {
        tb_name: this.tb_name + this.meta_data["cred_pub_key"],
        status: this.seen
      };
      EventBus.$emit("savedclosed-table", a);
    },
    openNotesModal: function openNotesModal() {
      var listing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.listingNote = listing;
      this.$modal.show(this.tb_name);
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
    loadWithError: function loadWithError(err) {
      //// window.location.href = "/login";
    },
    launchAutoSaver: function launchAutoSaver() {
      var _this10 = this;
      _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["default"].loadUserData().then(function (res) {
        _this10.send2Backend(res, 0, 0);
      })["catch"](function (err) {
        _this10.loadWithError(err);
      });
    },
    setTbVal: function setTbVal(val) {
      this.cred_pub_key = val;
    },
    loadRetrieved: function loadRetrieved() {
      var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];
      // Close table by default
      // this.defaultRetract(
      //     false,
      //     this.meta_data["dossier_credit"]?.applied_templ_id
      // );

      if (lentb.length > 0) {
        var _this$meta_data$dossi0;
        if (this.meta_data["dossier_credit"][createdKey] != undefined) {
          var _this$meta_data$dossi5;
          this.formDataToBeWatched = this.meta_data["dossier_credit"][createdKey];

          // CHECK WHETHER IT IS FIRST TIME
          if (((_this$meta_data$dossi5 = this.meta_data['dossier_credit'][createdKey]) === null || _this$meta_data$dossi5 === void 0 ? void 0 : _this$meta_data$dossi5.is_first_time) === false) {
            this.setAllDefaultFields(createdKey);
          } else {
            var _this$meta_data$dossi6, _this$meta_data$dossi7;
            if (((_this$meta_data$dossi6 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi6 === void 0 ? void 0 : _this$meta_data$dossi6.doss_central_file_recorder) !== undefined) {
              this.setAllDefaultFieldsRecByEnr();
            }
            if (((_this$meta_data$dossi7 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi7 === void 0 ? void 0 : _this$meta_data$dossi7.caf_recorded_file) !== undefined) {
              this.setAllDefaultFieldsRecByCaf();
            }
          }
        } else {
          var _this$meta_data$dossi8, _this$meta_data$dossi9;
          if (((_this$meta_data$dossi8 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi8 === void 0 ? void 0 : _this$meta_data$dossi8.doss_central_file_recorder) !== undefined) {
            this.setAllDefaultFieldsRecByEnr();
          }
          if (((_this$meta_data$dossi9 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi9 === void 0 ? void 0 : _this$meta_data$dossi9.caf_recorded_file) != undefined) {
            this.setAllDefaultFieldsRecByCaf();
          }
        }

        // SET FIRST TIME TO FALSE
        this.formDataToBeWatched.is_first_time = false;
        this.formDataToBeWatched.carcasse_type = (_this$meta_data$dossi0 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi0 === void 0 ? void 0 : _this$meta_data$dossi0.applied_templ_name;
      } else {
        var _this$meta_data$dossi1, _this$meta_data$dossi10;
        if (((_this$meta_data$dossi1 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi1 === void 0 ? void 0 : _this$meta_data$dossi1.doss_central_file_recorder) !== undefined) {
          this.setAllDefaultFieldsRecByEnr();
        }

        // IN CASE THE FILE IS OPENED BY CAF
        else if (((_this$meta_data$dossi10 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi10 === void 0 ? void 0 : _this$meta_data$dossi10.caf_recorded_file) !== undefined) {
          this.setAllDefaultFieldsRecByCaf();
          var caf_recorded_file = this.meta_data["dossier_credit"]["caf_recorded_file"];
          this.formDataToBeWatched.montant_sollicite = caf_recorded_file === null || caf_recorded_file === void 0 ? void 0 : caf_recorded_file.montant;
          this.formDataToBeWatched.montant_credit = caf_recorded_file === null || caf_recorded_file === void 0 ? void 0 : caf_recorded_file.montant;
        }

        // SET FIRST TIME TO FALSE
        this.formDataToBeWatched.is_first_time = false;
      }
    },
    setAllDefaultFieldsRecByEnr: function setAllDefaultFieldsRecByEnr() {
      var _this11 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        var _this11$meta_data$dos, _this11$meta_data$dos2, _this11$meta_data$dos3, _this11$meta_data$dos4, _this11$meta_data$dos5, _this11$meta_data$dos6, _this11$meta_data$dos7, _this11$meta_data$dos8;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _this11.formDataToBeWatched.denomination_client = ((_this11$meta_data$dos = _this11.meta_data['dossier_credit']) === null || _this11$meta_data$dos === void 0 || (_this11$meta_data$dos = _this11$meta_data$dos.doss_central_file_recorder) === null || _this11$meta_data$dos === void 0 || (_this11$meta_data$dos = _this11$meta_data$dos.client) === null || _this11$meta_data$dos === void 0 ? void 0 : _this11$meta_data$dos.nomcli) + ' ' + ((_this11$meta_data$dos2 = _this11.meta_data['dossier_credit']) === null || _this11$meta_data$dos2 === void 0 || (_this11$meta_data$dos2 = _this11$meta_data$dos2.doss_central_file_recorder) === null || _this11$meta_data$dos2 === void 0 || (_this11$meta_data$dos2 = _this11$meta_data$dos2.client) === null || _this11$meta_data$dos2 === void 0 ? void 0 : _this11$meta_data$dos2.prenomcli);
              _this11.formDataToBeWatched.type_demande = (_this11$meta_data$dos3 = _this11.meta_data['dossier_credit']) === null || _this11$meta_data$dos3 === void 0 || (_this11$meta_data$dos3 = _this11$meta_data$dos3.doss_central_file_recorder) === null || _this11$meta_data$dos3 === void 0 ? void 0 : _this11$meta_data$dos3.type_demande;
              _this11.formDataToBeWatched.type_credit = (_this11$meta_data$dos4 = _this11.meta_data['dossier_credit']) === null || _this11$meta_data$dos4 === void 0 || (_this11$meta_data$dos4 = _this11$meta_data$dos4.doss_central_file_recorder) === null || _this11$meta_data$dos4 === void 0 ? void 0 : _this11$meta_data$dos4.type_credit;
              _this11.formDataToBeWatched.contact_client = (_this11$meta_data$dos5 = _this11.meta_data['dossier_credit']) === null || _this11$meta_data$dos5 === void 0 || (_this11$meta_data$dos5 = _this11$meta_data$dos5.doss_central_file_recorder) === null || _this11$meta_data$dos5 === void 0 ? void 0 : _this11$meta_data$dos5.phone;
              _this11.formDataToBeWatched.email_client = (_this11$meta_data$dos6 = _this11.meta_data['dossier_credit']) === null || _this11$meta_data$dos6 === void 0 || (_this11$meta_data$dos6 = _this11$meta_data$dos6.doss_central_file_recorder) === null || _this11$meta_data$dos6 === void 0 ? void 0 : _this11$meta_data$dos6.email;
              _this11.formDataToBeWatched.nom = (_this11$meta_data$dos7 = _this11.meta_data['dossier_credit']) === null || _this11$meta_data$dos7 === void 0 || (_this11$meta_data$dos7 = _this11$meta_data$dos7.doss_central_file_recorder) === null || _this11$meta_data$dos7 === void 0 ? void 0 : _this11$meta_data$dos7.client.nomcli;
              _this11.formDataToBeWatched.prenoms = (_this11$meta_data$dos8 = _this11.meta_data['dossier_credit']) === null || _this11$meta_data$dos8 === void 0 || (_this11$meta_data$dos8 = _this11$meta_data$dos8.doss_central_file_recorder) === null || _this11$meta_data$dos8 === void 0 ? void 0 : _this11$meta_data$dos8.client.prenomcli;
              setTimeout(function () {
                var _this11$meta_data$dos9, _this11$meta_data$dos0, _this11$meta_data$dos1;
                _this11.formDataToBeWatched.type_credit = (_this11$meta_data$dos9 = _this11.meta_data['dossier_credit']) === null || _this11$meta_data$dos9 === void 0 || (_this11$meta_data$dos9 = _this11$meta_data$dos9.doss_central_file_recorder) === null || _this11$meta_data$dos9 === void 0 ? void 0 : _this11$meta_data$dos9.type_de_pret;
                _this11.formDataToBeWatched.montant_sollicite = (_this11$meta_data$dos0 = _this11.meta_data['dossier_credit']) === null || _this11$meta_data$dos0 === void 0 || (_this11$meta_data$dos0 = _this11$meta_data$dos0.doss_central_file_recorder) === null || _this11$meta_data$dos0 === void 0 || (_this11$meta_data$dos0 = _this11$meta_data$dos0.montant) === null || _this11$meta_data$dos0 === void 0 ? void 0 : _this11$meta_data$dos0.toString().replace(/\s/g, '');
                _this11.formDataToBeWatched.montant_credit = (_this11$meta_data$dos1 = _this11.meta_data['dossier_credit']) === null || _this11$meta_data$dos1 === void 0 || (_this11$meta_data$dos1 = _this11$meta_data$dos1.doss_central_file_recorder) === null || _this11$meta_data$dos1 === void 0 || (_this11$meta_data$dos1 = _this11$meta_data$dos1.montant) === null || _this11$meta_data$dos1 === void 0 ? void 0 : _this11$meta_data$dos1.toString().replace(/\s/g, '');
              }, 1000);
            case 8:
            case "end":
              return _context8.stop();
          }
        }, _callee8);
      }))();
    },
    setAllDefaultFieldsRecByCaf: function setAllDefaultFieldsRecByCaf() {
      var _this12 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
        var _this12$meta_data$dos, _this12$meta_data$dos2, _this12$meta_data$dos3, _this12$meta_data$dos4, _this12$meta_data$dos5, _this12$meta_data$dos6, _this12$meta_data$dos7, _this12$meta_data$dos8;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              _this12.formDataToBeWatched.denomination_client = ((_this12$meta_data$dos = _this12.meta_data['dossier_credit']) === null || _this12$meta_data$dos === void 0 || (_this12$meta_data$dos = _this12$meta_data$dos.caf_recorded_file) === null || _this12$meta_data$dos === void 0 || (_this12$meta_data$dos = _this12$meta_data$dos.client) === null || _this12$meta_data$dos === void 0 ? void 0 : _this12$meta_data$dos.nomcli) + ' ' + ((_this12$meta_data$dos2 = _this12.meta_data['dossier_credit']) === null || _this12$meta_data$dos2 === void 0 || (_this12$meta_data$dos2 = _this12$meta_data$dos2.caf_recorded_file) === null || _this12$meta_data$dos2 === void 0 || (_this12$meta_data$dos2 = _this12$meta_data$dos2.client) === null || _this12$meta_data$dos2 === void 0 ? void 0 : _this12$meta_data$dos2.prenomcli);
              _this12.formDataToBeWatched.type_demande = (_this12$meta_data$dos3 = _this12.meta_data['dossier_credit']) === null || _this12$meta_data$dos3 === void 0 || (_this12$meta_data$dos3 = _this12$meta_data$dos3.caf_recorded_file) === null || _this12$meta_data$dos3 === void 0 ? void 0 : _this12$meta_data$dos3.type_demande;
              _this12.formDataToBeWatched.type_credit = (_this12$meta_data$dos4 = _this12.meta_data['dossier_credit']) === null || _this12$meta_data$dos4 === void 0 || (_this12$meta_data$dos4 = _this12$meta_data$dos4.caf_recorded_file) === null || _this12$meta_data$dos4 === void 0 ? void 0 : _this12$meta_data$dos4.type_credit;
              _this12.formDataToBeWatched.contact_client = (_this12$meta_data$dos5 = _this12.meta_data['dossier_credit']) === null || _this12$meta_data$dos5 === void 0 || (_this12$meta_data$dos5 = _this12$meta_data$dos5.caf_recorded_file) === null || _this12$meta_data$dos5 === void 0 ? void 0 : _this12$meta_data$dos5.phone;
              _this12.formDataToBeWatched.email_client = (_this12$meta_data$dos6 = _this12.meta_data['dossier_credit']) === null || _this12$meta_data$dos6 === void 0 || (_this12$meta_data$dos6 = _this12$meta_data$dos6.caf_recorded_file) === null || _this12$meta_data$dos6 === void 0 ? void 0 : _this12$meta_data$dos6.email;
              _this12.formDataToBeWatched.nom = (_this12$meta_data$dos7 = _this12.meta_data['dossier_credit']) === null || _this12$meta_data$dos7 === void 0 || (_this12$meta_data$dos7 = _this12$meta_data$dos7.caf_recorded_file) === null || _this12$meta_data$dos7 === void 0 ? void 0 : _this12$meta_data$dos7.client.nomcli;
              _this12.formDataToBeWatched.prenoms = (_this12$meta_data$dos8 = _this12.meta_data['dossier_credit']) === null || _this12$meta_data$dos8 === void 0 || (_this12$meta_data$dos8 = _this12$meta_data$dos8.caf_recorded_file) === null || _this12$meta_data$dos8 === void 0 ? void 0 : _this12$meta_data$dos8.client.prenomcli;
              setTimeout(function () {
                var _this12$meta_data$dos9, _this12$meta_data$dos0, _this12$meta_data$dos1;
                _this12.formDataToBeWatched.type_credit = (_this12$meta_data$dos9 = _this12.meta_data['dossier_credit']) === null || _this12$meta_data$dos9 === void 0 || (_this12$meta_data$dos9 = _this12$meta_data$dos9.caf_recorded_file) === null || _this12$meta_data$dos9 === void 0 ? void 0 : _this12$meta_data$dos9.type_de_pret;
                _this12.formDataToBeWatched.montant_sollicite = (_this12$meta_data$dos0 = _this12.meta_data['dossier_credit']) === null || _this12$meta_data$dos0 === void 0 || (_this12$meta_data$dos0 = _this12$meta_data$dos0.caf_recorded_file) === null || _this12$meta_data$dos0 === void 0 || (_this12$meta_data$dos0 = _this12$meta_data$dos0.montant) === null || _this12$meta_data$dos0 === void 0 ? void 0 : _this12$meta_data$dos0.toString().replace(/\s/g, '');
                _this12.formDataToBeWatched.montant_credit = (_this12$meta_data$dos1 = _this12.meta_data['dossier_credit']) === null || _this12$meta_data$dos1 === void 0 || (_this12$meta_data$dos1 = _this12$meta_data$dos1.caf_recorded_file) === null || _this12$meta_data$dos1 === void 0 || (_this12$meta_data$dos1 = _this12$meta_data$dos1.montant) === null || _this12$meta_data$dos1 === void 0 ? void 0 : _this12$meta_data$dos1.toString().replace(/\s/g, '');
              }, 1000);
            case 8:
            case "end":
              return _context9.stop();
          }
        }, _callee9);
      }))();
    },
    setAllDefaultFields: function setAllDefaultFields(createdKey) {
      this.formDataToBeWatched = this.meta_data['dossier_credit'][createdKey];
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
    formatAmount: function formatAmount(x) {
      var _x$toString;
      return x === null || x === void 0 || (_x$toString = x.toString()) === null || _x$toString === void 0 ? void 0 : _x$toString.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
    getTauxEndettement: function getTauxEndettement() {
      var _this$getRevenuSalair;
      var salaire = parseInt(((_this$getRevenuSalair = this.getRevenuSalaire) !== null && _this$getRevenuSalair !== void 0 ? _this$getRevenuSalair : '').toString().replace(/\s/g, ''), 10) || 0;
      var autre_revenus = this.getRevenuAutre() || 0;
      var remb_autre_credit = parseFloat(this.formDataToBeWatched.remb_autre_credit) || 0;
      var remb_nouveau_credit = parseFloat(this.formDataToBeWatched.remb_nouveau_credit) || 0;
      var total_revenu = salaire + autre_revenus;
      var total_remboursement = remb_autre_credit + remb_nouveau_credit;
      if (total_revenu === 0) {
        return {
          taux_endettement: '',
          reste_a_vivre: ''
        };
      }
      var taux_endettement = total_remboursement / total_revenu * 100;
      var reste_a_vivre = total_revenu - total_remboursement;
      this.formDataToBeWatched.taux_endettement = taux_endettement;
      if (taux_endettement >= 100) {
        taux_endettement = 100;
      }
      return {
        taux_endettement: taux_endettement.toFixed(2),
        reste_a_vivre: this.formatAmount(reste_a_vivre)
      };
    },
    getRemboursementAutreCredit: function getRemboursementAutreCredit() {
      var _this$data_tb4,
        _this$data_tb5,
        _this$data_tb6,
        _this13 = this;
      if (((_this$data_tb4 = this.data_tb1) === null || _this$data_tb4 === void 0 ? void 0 : _this$data_tb4.engagements_en_cours) == undefined || ((_this$data_tb5 = this.data_tb1) === null || _this$data_tb5 === void 0 ? void 0 : _this$data_tb5.engagements_en_cours) == '') {
        return '';
      }

      // console.log('++++ hello');

      var remb_autre = 0;
      (_this$data_tb6 = this.data_tb1) === null || _this$data_tb6 === void 0 || _this$data_tb6.engagements_en_cours.forEach(function (el) {
        var encours = _this13.intConverter(el === null || el === void 0 ? void 0 : el.encours);
        remb_autre += encours;
      });
      return this.formatAmount(remb_autre);
    },
    intConverter: function intConverter(val) {
      if (typeof val == 'string') {
        return parseInt(val === null || val === void 0 ? void 0 : val.replace(/\s/g, ''), 10);
      }
      return val;
    },
    getRevenuAutre: function getRevenuAutre() {
      var _this$data_tb7, _this$data_tb8, _this$data_tb9;
      if (((_this$data_tb7 = this.data_tb1) === null || _this$data_tb7 === void 0 ? void 0 : _this$data_tb7.revenu_domicilie) == undefined || ((_this$data_tb8 = this.data_tb1) === null || _this$data_tb8 === void 0 ? void 0 : _this$data_tb8.revenu_domicilie) == '') return '';
      var autre_revenu = 0;
      (_this$data_tb9 = this.data_tb1) === null || _this$data_tb9 === void 0 || _this$data_tb9.revenu_domicilie.forEach(function (el) {
        if (el.libelle != "Salaire net" && el.source_remboursement == true) {
          var _el$montant_salaire;
          autre_revenu += parseInt((el === null || el === void 0 || (_el$montant_salaire = el.montant_salaire) === null || _el$montant_salaire === void 0 ? void 0 : _el$montant_salaire.toString().replace(/\s/g, "")) || "0");
        }
      });
      return autre_revenu;
    },
    checkFaciliteLibelle: function checkFaciliteLibelle(el) {
      return (el === null || el === void 0 ? void 0 : el.type_facilite) != '' || (el === null || el === void 0 ? void 0 : el.type_facilite) == null;
    },
    handleInput2: function handleInput2(key) {
      this.formDataToBeWatched[key] = this[key];
    },
    checkboxElements: function checkboxElements(event, key_name, index) {
      if (event.target.checked) {
        this[key_name][index]["checked"] = event.target.checked;
        this[key_name][index]["value"] = event.target.value;
      } else {
        this[key_name][index]["checked"] = event.target.checked;
        this[key_name][index]["value"] = event.target.value;
      }
      this.handleInput2(key_name);
    }
  },
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/carcasse_ppo/DCPP-PCP5.vue?vue&type=template&id=3ace3e92&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/carcasse_ppo/DCPP-PCP5.vue?vue&type=template&id=3ace3e92&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$formDataToBeWatch, _vm$authenticatedUser, _vm$authenticatedUser2, _vm$formDataToBeWatch2;
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
      id: "dcp-ppo2-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Fiche d'endettement\n                        ")]), _vm._v(" "), _c("div", {
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
  }, [_c("span", [_vm._v(" " + _vm._s(_vm.formDataToBeWatched.notes.length) + " ")])])])]) : _vm._e(), _vm._v(" "), _c("airplay-icon", {
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
        return _vm.$modal.show("fiche_endettement");
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
    staticClass: "row p-4"
  }, [_c("div", {
    staticClass: "col-12 p-0 position-relative"
  }, [_vm.seen1 ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen1 = !_vm.seen1;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "conjoint(e)"
    }
  }, [_vm._v("\n                                    Recap\n                                    "), _c("chevron-up-icon", {
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
    staticClass: "row"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("table", {
    staticClass: "table table-bordered mt-3"
  }, [_c("thead", [_c("tr", [_c("td", {
    staticClass: "bg-beige",
    staticStyle: {
      width: "50%"
    }
  }, [_vm._v("Salaire (A) ")]), _vm._v(" "), _c("td", [_c("currency-input2", {
    attrs: {
      id: "revenu_saalaire",
      value: _vm.getRevenuSalaire,
      readonly: ""
    }
  })], 1)])]), _vm._v(" "), _c("tbody", {
    staticStyle: {
      "font-size": "16px"
    }
  }, [_c("tr", [_c("td", {
    staticClass: "bg-beige",
    staticStyle: {
      width: "50%"
    }
  }, [_vm._v("Autres revenus (B) ")]), _vm._v(" "), _c("td", [_c("currency-input2", {
    attrs: {
      id: "revenu_autre",
      value: _vm.getRevenuAutre(),
      readonly: ""
    }
  })], 1)]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "bg-beige",
    staticStyle: {
      width: "50%"
    }
  }, [_vm._v("Remboursement autres crédits (C) ")]), _vm._v(" "), _c("td", [_c("currency-input2", {
    attrs: {
      id: "remb_autre_credit",
      value: _vm.formDataToBeWatched.remb_autre_credit,
      readonly: ""
    }
  })], 1)]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "bg-beige",
    staticStyle: {
      width: "50%"
    }
  }, [_vm._v("Remboursement Nouveau crédit (D) ")]), _vm._v(" "), _c("td", [_c("currency-input2", {
    attrs: {
      id: "remb_nouveau_credit",
      value: _vm.formDataToBeWatched.remb_nouveau_credit,
      readonly: ""
    }
  })], 1)]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "bg-beige",
    staticStyle: {
      width: "50%",
      "font-weight": "800"
    }
  }, [_vm._v("Taux d'endettement (C+D) /(A+B) ")]), _vm._v(" "), _c("td", [_c("div", {
    staticClass: "d-flex position-relative align-items-center"
  }, [_c("input-group", {
    scopedSlots: _vm._u([{
      key: "input",
      fn: function fn() {
        return [_c("currency-input", {
          attrs: {
            disabled: true,
            value: _vm.getTauxEndettement().taux_endettement,
            max: 100,
            "float": "",
            percentage: ""
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
    }], null, false, 1263306297)
  }), _vm._v(" "),  false ? 0 : _vm._e()], 1)])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "bg-beige",
    staticStyle: {
      width: "50%",
      "font-weight": "800"
    }
  }, [_vm._v("Reste à vivre (A+B) - (C+D) ")]), _vm._v(" "), _c("td", [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.getTauxEndettement().reste_a_vivre,
      expression: "getTauxEndettement().reste_a_vivre"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      readonly: ""
    },
    domProps: {
      value: _vm.getTauxEndettement().reste_a_vivre
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.getTauxEndettement(), "reste_a_vivre", $event.target.value);
      }
    }
  })])])])]), _vm._v(" "), ((_vm$authenticatedUser = _vm.authenticatedUser) === null || _vm$authenticatedUser === void 0 ? void 0 : _vm$authenticatedUser.filiale) === "AFGB ML" ? _c("table", {
    staticClass: "table table-bordered",
    staticStyle: {
      "border-top": "8px solid",
      "border-bottom": "8px solid",
      "font-size": "13px"
    }
  }, [_c("tbody", [_c("tr", [_c("td", [_vm._v("RAV THEORIQUE *")]), _vm._v(" "), _c("td", [_c("span", [_vm._v(_vm._s(_vm._f("formatNumber")(_vm.ravTheorique)))])])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("RAV REEL (A+B-C-D)")]), _vm._v(" "), _c("td", [_c("span", [_vm._v(_vm._s(_vm._f("formatNumber")(_vm.getTauxEndettement().reste_a_vivre)))])])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("RAV REEL > RAV THEORIQUE (O/N)")]), _vm._v(" "), _c("td", [_c("span", [_vm._v("\n                                                            " + _vm._s(_vm.formuleQD().reste_a_vivre > _vm.ravTheorique ? "Oui" : "Non") + "\n                                                        ")])])])])]) : _vm._e()])]), _vm._v(" "), ((_vm$authenticatedUser2 = _vm.authenticatedUser) === null || _vm$authenticatedUser2 === void 0 ? void 0 : _vm$authenticatedUser2.filiale) === "AFGB ML" ? _c("div", {
    staticClass: "mt-3 p-2"
  }, [_vm._m(0)]) : _vm._e()])]) : _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen1 = !_vm.seen1;
      }
    }
  }, [_c("h6", {
    attrs: {
      id: "conjoint(e)"
    }
  }, [_vm._v("\n                                    Recap\n                                    "), _c("chevron-down-icon", {
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
      id: "dcp-ppo2-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Fiche d'endettement\n                        ")]), _vm._v(" "), _c("div", {
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
        return _vm.$modal.show("fiche_endettement");
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
      name: "instruction211a",
      width: 1000,
      resizable: "",
      height: 200
    }
  }, [_c("div", {
    staticClass: "imageM22"
  })]), _vm._v(" "), _c("ketri-modal", {
    attrs: {
      name: "fiche_endettement",
      images: ["/images/capture_afg/exemples/ppo_fiche_endettement.png"]
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
  return _c("i", [_c("span", [_vm._v("Marié : ")]), _vm._v(" "), _c("span", [_vm._v("60 000 ")]), _vm._v(" "), _c("span", [_vm._v(" / ")]), _vm._v(" "), _c("span", [_vm._v("Célibataire : ")]), _vm._v(" "), _c("span", [_vm._v("40 000 ")]), _vm._v(" "), _c("span", [_vm._v(" / ")]), _vm._v(" "), _c("span", [_vm._v("Par enfant : ")]), _vm._v(" "), _c("span", [_vm._v("10 000 ")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/carcasse_ppo/DCPP-PCP5.vue?vue&type=style&index=0&id=3ace3e92&lang=css&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/carcasse_ppo/DCPP-PCP5.vue?vue&type=style&index=0&id=3ace3e92&lang=css&scoped=true ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-3ace3e92] {\r\n    font-family: \"Google sans\";\n}\nlabel[data-v-3ace3e92] {\r\n    height: 10px;\r\n    font-size: 13px;\n}\ninput[data-v-3ace3e92],\r\nselect[data-v-3ace3e92],\r\ntextarea[data-v-3ace3e92] {\r\n    /* height: 35px; */\r\n    border-color: #34495e;\r\n    color: #57606f;\r\n    font-size: 13px;\r\n    font-weight: bold;\n}\n.th[data-v-3ace3e92] {\r\n    padding: 4px;\r\n    padding-bottom: 0px;\n}\n.card-width-height[data-v-3ace3e92] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-3ace3e92] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\n.hdc[data-v-3ace3e92] {\r\n    background-color: #57606f;\n}\n.relook-header[data-v-3ace3e92] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\n.badge-sm[data-v-3ace3e92] {\r\n    display: inline-block;\r\n    width: 15px;\r\n    height: 15px;\r\n    background: rgba(255, 0, 0, 0.882);\r\n    color: white;\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    border-radius: 100%;\r\n    position: absolute;\r\n    top: -20%;\r\n    left: 55%;\r\n    text-align: center;\n}\n.imageM22[data-v-3ace3e92] {\r\n    background: url(\"/images/capture_cofina/exemple_source_revenus.png\") no-repeat;\r\n    background-position: center;\r\n    background-size: contain;\r\n    width: 1000px;\r\n    height: 200px;\n}\ntd[data-v-3ace3e92],\r\np[data-v-3ace3e92] {\r\n    font-size: 13px;\n}\n.relook-header[data-v-3ace3e92] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\n.width-100[data-v-3ace3e92] {\r\n    width: 90%;\n}\n.personne input[data-v-3ace3e92] {\r\n    width: 135px;\n}\n._border_right[data-v-3ace3e92] {\r\n    border-right: 1px solid;\n}\n.text-red[data-v-3ace3e92] {\r\n    color: red;\n}\n.multiselect-option p[data-v-3ace3e92] {\r\n    margin: 0 !important;\r\n    padding: 10px !important;\n}\n.vertical-middle[data-v-3ace3e92] {\r\n    vertical-align: middle;\n}\ninput[type=\"checkbox\"][data-v-3ace3e92] {\r\n    height: 18px;\r\n    width: 20px;\r\n    margin-right: 5px;\n}\n.revenu input[type=\"checkbox\"][data-v-3ace3e92],\r\n.engagement input[type=\"checkbox\"][data-v-3ace3e92],\r\n.garantie input[type=\"checkbox\"][data-v-3ace3e92] {\r\n    height: 26px;\r\n    width: 24px;\r\n    margin-right: 5px;\n}\n.mt-2_5-px[data-v-3ace3e92] {\r\n    margin-top: 2.5px;\n}\n.readonly-checkbox[data-v-3ace3e92] {\r\n    -webkit-appearance: none;\r\n       -moz-appearance: none;\r\n            appearance: none;\r\n    width: 20px;\r\n    height: 20px;\r\n    border: 2px solid #ccc;\r\n    background-color: #f0f0f0;\r\n    cursor: not-allowed;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/carcasse_ppo/DCPP-PCP5.vue?vue&type=style&index=0&id=3ace3e92&lang=css&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/carcasse_ppo/DCPP-PCP5.vue?vue&type=style&index=0&id=3ace3e92&lang=css&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCPP_PCP5_vue_vue_type_style_index_0_id_3ace3e92_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DCPP-PCP5.vue?vue&type=style&index=0&id=3ace3e92&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/carcasse_ppo/DCPP-PCP5.vue?vue&type=style&index=0&id=3ace3e92&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCPP_PCP5_vue_vue_type_style_index_0_id_3ace3e92_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCPP_PCP5_vue_vue_type_style_index_0_id_3ace3e92_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/forms/afg/carcasse_ppo/DCPP-PCP5.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/components/forms/afg/carcasse_ppo/DCPP-PCP5.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DCPP_PCP5_vue_vue_type_template_id_3ace3e92_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DCPP-PCP5.vue?vue&type=template&id=3ace3e92&scoped=true */ "./resources/js/components/forms/afg/carcasse_ppo/DCPP-PCP5.vue?vue&type=template&id=3ace3e92&scoped=true");
/* harmony import */ var _DCPP_PCP5_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DCPP-PCP5.vue?vue&type=script&lang=js */ "./resources/js/components/forms/afg/carcasse_ppo/DCPP-PCP5.vue?vue&type=script&lang=js");
/* harmony import */ var _DCPP_PCP5_vue_vue_type_style_index_0_id_3ace3e92_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DCPP-PCP5.vue?vue&type=style&index=0&id=3ace3e92&lang=css&scoped=true */ "./resources/js/components/forms/afg/carcasse_ppo/DCPP-PCP5.vue?vue&type=style&index=0&id=3ace3e92&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DCPP_PCP5_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _DCPP_PCP5_vue_vue_type_template_id_3ace3e92_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _DCPP_PCP5_vue_vue_type_template_id_3ace3e92_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3ace3e92",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/forms/afg/carcasse_ppo/DCPP-PCP5.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/forms/afg/carcasse_ppo/DCPP-PCP5.vue?vue&type=script&lang=js":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/carcasse_ppo/DCPP-PCP5.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DCPP_PCP5_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DCPP-PCP5.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/carcasse_ppo/DCPP-PCP5.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DCPP_PCP5_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/forms/afg/carcasse_ppo/DCPP-PCP5.vue?vue&type=style&index=0&id=3ace3e92&lang=css&scoped=true":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/carcasse_ppo/DCPP-PCP5.vue?vue&type=style&index=0&id=3ace3e92&lang=css&scoped=true ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCPP_PCP5_vue_vue_type_style_index_0_id_3ace3e92_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DCPP-PCP5.vue?vue&type=style&index=0&id=3ace3e92&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/carcasse_ppo/DCPP-PCP5.vue?vue&type=style&index=0&id=3ace3e92&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/forms/afg/carcasse_ppo/DCPP-PCP5.vue?vue&type=template&id=3ace3e92&scoped=true":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/carcasse_ppo/DCPP-PCP5.vue?vue&type=template&id=3ace3e92&scoped=true ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCPP_PCP5_vue_vue_type_template_id_3ace3e92_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCPP_PCP5_vue_vue_type_template_id_3ace3e92_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCPP_PCP5_vue_vue_type_template_id_3ace3e92_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DCPP-PCP5.vue?vue&type=template&id=3ace3e92&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/carcasse_ppo/DCPP-PCP5.vue?vue&type=template&id=3ace3e92&scoped=true");


/***/ })

}]);