"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_forms_afg_memorandum_F12_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/memorandum/F12.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/memorandum/F12.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/ContextMenu */ "./resources/js/components/shared/ContextMenu.vue");
/* harmony import */ var _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/ContextMenuItem */ "./resources/js/components/shared/ContextMenuItem.vue");
/* harmony import */ var _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vueform/multiselect/dist/multiselect.vue2 */ "./node_modules/@vueform/multiselect/dist/multiselect.vue2.js");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/auth.service */ "./resources/js/services/auth.service.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }






window.$ = window.jQuery = __webpack_require__(/*! jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "garanties",
  display: "Garanties",
  components: {
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_5__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_5__.TrashIcon,
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_5__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_5__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_5__.ChevronDownIcon,
    ContextMenu: _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__["default"],
    ContextMenuItem: _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__["default"],
    Multiselect: _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_2__["default"],
    AirplayIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_5__.AirplayIcon
  },
  props: {
    meta_data: Object,
    tb_name: String,
    tb_display_name: String
  },
  created: function created() {
    var _this = this;
    EventBus.$on("send-f0-to-f13", function (data) {
      _this.data_from_f0 = data;
    });
    EventBus.$on("send-to-ana_fin", function (data) {
      _this.ncc = data.compte_contribuable;
      _this.annee_referentielle = data.annee_referentielle;
      if (!_this.annee_referentielle) _this.annee_referentielle = new Date().getFullYear();
      _this.loadBeforeRequest();
    });
  },
  mounted: function mounted() {
    var _this$meta_data;
    var tbArrays = this.determineCredPubTables((_this$meta_data = this.meta_data) === null || _this$meta_data === void 0 || (_this$meta_data = _this$meta_data.dossier_credit) === null || _this$meta_data === void 0 ? void 0 : _this$meta_data.applied_templ_name);
    this.credpub0 = tbArrays[0];
    this.loadParams();
    this.tableClosedOrOpened();
    this.loadRetrieved();
    this.loadTbAttrs();
    this.loadBeforeRequest();
  },
  computed: {},
  data: function data() {
    var vm = this;
    return {
      seen: true,
      seen1: true,
      seen2: true,
      seen3: true,
      seen4: true,
      maxAnneeRef: new Date().getUTCFullYear() - 1,
      loadActiviteRent: false,
      annee_referentielle: "",
      // maxAnneeRef: 2021,
      listingNote: false,
      ncc: null,
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_3__["default"].host,
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
      meta_parseable: {
        cred_pub_key: this.meta_data["cred_pub_key"],
        tb_name: this.tb_name
      },
      formDataToBeWatched: {
        // ratiosActivite:"",
        // ratiosLiquidites:"",
        notationFinanciere: "",
        notationFinale: "",
        notationQuantitative: "",
        codeRatiosActivite: "",
        commentaire_notation: "",
        annee_referentielle: "",
        notationQualitatif: "",
        notation_qualitative: "",
        ncc: "",
        notes: []
      },
      notationFinale: "",
      notationFinanciere: "",
      codeRatiosActivite: "",
      notationQuantitative: "",
      notationQualitatif: "",
      notation_qualitative: "",
      // ratiosActivite:[
      //     {
      //         libelle:"Délai de paiement client (jours)",
      //         curr_year_1:"",
      //         curr_year_2:"",
      //         curr_year_3:"",
      //         code:"A1"
      //     },
      //     {
      //         libelle:"Rotation des stocks (jours d'achat)",
      //         curr_year_1:"",
      //         curr_year_2:"",
      //         curr_year_3:"",
      //         code:"A2"
      //     },
      //     {
      //         libelle:"Délai de reglement fournisseur(jours d'achat)",
      //         curr_year_1:"",
      //         curr_year_2:"",
      //         curr_year_3:"",
      //         code:"A3"
      //     },
      //     {
      //         libelle:"Rotation des stocks (jours de CA)",
      //         curr_year_1:"",
      //         curr_year_2:"",
      //         curr_year_3:"",
      //         code:"A4"
      //     },
      //     {
      //         libelle:"Poids des frais financiers",
      //         curr_year_1:"",
      //         curr_year_2:"",
      //         curr_year_3:"",
      //         code:"A5"
      //     },
      //     {
      //         libelle:"Repartition de la valeur ajoutée",
      //         curr_year_1:"",
      //         curr_year_2:"",
      //         curr_year_3:"",
      //         code:"A6"
      //     },
      //     {
      //         libelle:"Couverture des interest par le cashflow",
      //         curr_year_1:"",
      //         curr_year_2:"",
      //         curr_year_3:"",
      //         code:"A7"
      //     }
      // ],
      // ratiosLiquidites:[
      //     {
      //         libelle:"Liquidité reduite ou QUick ratio (jours)",
      //         curr_year_1:"",
      //         curr_year_2:"",
      //         curr_year_3:"",
      //         code:"L1"
      //     },
      //     {
      //         libelle:"Liquidité générale",
      //         curr_year_1:"",
      //         curr_year_2:"",
      //         curr_year_3:"",
      //         code:"L2"
      //     },
      //     {
      //         libelle:"Liquidité immediate sur actif",
      //         curr_year_1:"",
      //         curr_year_2:"",
      //         curr_year_3:"",
      //         code:"L3"
      //     },
      //     {
      //         libelle:"Liquidité immediate (Acide Test) sur DCT",
      //         curr_year_1:"",
      //         curr_year_2:"",
      //         curr_year_3:"",
      //         code:"L4"
      //     },
      //     {
      //         libelle:"Liquidité générale courante",
      //         curr_year_1:"",
      //         curr_year_2:"",
      //         curr_year_3:"",
      //         code:"L5"
      //     },
      //     {
      //         libelle:"Le fonds de roulement (en jours de CA)",
      //         curr_year_1:"",
      //         curr_year_2:"",
      //         curr_year_3:"",
      //         code:"L9"
      //     },
      //     {
      //         libelle:"La tresorerie nette (en jours de CA)",
      //         curr_year_1:"",
      //         curr_year_2:"",
      //         curr_year_3:"",
      //         code:"L10"
      //     },
      //     {
      //         libelle:"Liquidité immediate (CA)",
      //         curr_year_1:"",
      //         curr_year_2:"",
      //         curr_year_3:"",
      //         code:"L11"
      //     }
      // ],
      // ratiosEndettements:[{
      //         libelle:"Capacité remboursement (année de Cash Flow)",
      //         curr_year_1:"",
      //         curr_year_2:"",
      //         curr_year_3:"",
      //         code:"E1"
      //     },
      //     {
      //         libelle:"Endettement bancaire",
      //         curr_year_1:"",
      //         curr_year_2:"",
      //         curr_year_3:"",
      //         code:"E2"
      //     },
      //     {
      //         libelle:"Poids de l'Etat (Dettes fiscales et sociales)",
      //         curr_year_1:"",
      //         curr_year_2:"",
      //         curr_year_3:"",
      //         code:"E3"
      //     },
      //     {
      //         libelle:"Levier financier restreint",
      //         curr_year_1:"",
      //         curr_year_2:"",
      //         curr_year_3:"",
      //         code:"E4"
      //     },
      //     {
      //         libelle:"Independance financière",
      //         curr_year_1:"",
      //         curr_year_2:"",
      //         curr_year_3:"",
      //         code:"E5"
      //     },
      //     {
      //         libelle:"Endettement net",
      //         curr_year_1:"",
      //         curr_year_2:"",
      //         curr_year_3:"",
      //         code:"E6"
      //     },
      //     {
      //         libelle:"Couverture de la dette",
      //         curr_year_1:"",
      //         curr_year_2:"",
      //         curr_year_3:"",
      //         code:"E7"
      //     },
      //     {
      //         libelle:"Levier Euler",
      //         curr_year_1:"",
      //         curr_year_2:"",
      //         curr_year_3:"",
      //         code:"E8"
      //     },
      //     {
      //         libelle:"Levier financier général",
      //         curr_year_1:"",
      //         curr_year_2:"",
      //         curr_year_3:"",
      //         code:"E9"
      //     },
      //     {
      //         libelle:"Endettement brut",
      //         curr_year_1:"",
      //         curr_year_2:"",
      //         curr_year_3:"",
      //         code:"E18"
      //     },
      //     {
      //         libelle:"L'impact financier",
      //         curr_year_1:"",
      //         curr_year_2:"",
      //         curr_year_3:"",
      //         code:"E10"
      //     },
      //     {
      //         libelle:"La capacité de financement",
      //         curr_year_1:"",
      //         curr_year_2:"",
      //         curr_year_3:"",
      //         code:"E11"
      //     },
      // ],
      // ratiosRentabilites:[
      //     {
      //         libelle:"Rentabilité operationnelle (EBIT-CA)",
      //         curr_year_1:"",
      //         curr_year_2:"",
      //         curr_year_3:"",
      //         code:"R1"
      //     },
      //     {
      //         libelle:"Rentabilité commerciale",
      //         curr_year_1:"",
      //         curr_year_2:"",
      //         curr_year_3:"",
      //         code:"R2"
      //     },
      //     {
      //         libelle:"Rentabilité économique générale (RoA)",
      //         curr_year_1:"",
      //         curr_year_2:"",
      //         curr_year_3:"",
      //         code:"R3"
      //     },
      //     {
      //         libelle:"Rentabilité financière (RoE)",
      //         curr_year_1:"",
      //         curr_year_2:"",
      //         curr_year_3:"",
      //         code:"R4"
      //     },
      //     {
      //         libelle:"Rentabilité operationnelle (EBE-CA)",
      //         curr_year_1:"",
      //         curr_year_2:"",
      //         curr_year_3:"",
      //         code:"R5"
      //     },
      //     {
      //         libelle:"Rentabilité économique (RCAI)",
      //         curr_year_1:"",
      //         curr_year_2:"",
      //         curr_year_3:"",
      //         code:"R6"
      //     },
      //     {
      //         libelle:"Ratio de marge",
      //         curr_year_1:"",
      //         curr_year_2:"",
      //         curr_year_3:"",
      //         code:"R7"
      //     },
      //     {
      //         libelle:"Rentabilité du capital investi",
      //         curr_year_1:"",
      //         curr_year_2:"",
      //         curr_year_3:"",
      //         code:"R8"
      //     },
      // ],
      countries: [],
      credpub0: null,
      isLoding: true,
      isFailed: false,
      nccInvalide: false,
      has_sni: true
    };
  },
  methods: {
    loadParams: function loadParams() {
      var _this$meta_data2, _this$meta_data3, _this$meta_data4, _this$meta_data5, _this$meta_data6, _this$meta_data7, _this$meta_data8, _this$meta_data9;
      this.data_from_f0 = {
        annee_referentielle: (_this$meta_data2 = this.meta_data) === null || _this$meta_data2 === void 0 || (_this$meta_data2 = _this$meta_data2.dossier_credit) === null || _this$meta_data2 === void 0 || (_this$meta_data2 = _this$meta_data2[this.credpub0]) === null || _this$meta_data2 === void 0 ? void 0 : _this$meta_data2.annee_referentielle,
        compte_contribuable: (_this$meta_data3 = this.meta_data) === null || _this$meta_data3 === void 0 || (_this$meta_data3 = _this$meta_data3.dossier_credit) === null || _this$meta_data3 === void 0 || (_this$meta_data3 = _this$meta_data3[this.credpub0]) === null || _this$meta_data3 === void 0 ? void 0 : _this$meta_data3.compte_contribuable,
        coming_from_sni: (_this$meta_data4 = this.meta_data) === null || _this$meta_data4 === void 0 || (_this$meta_data4 = _this$meta_data4.dossier_credit) === null || _this$meta_data4 === void 0 || (_this$meta_data4 = _this$meta_data4[this.credpub0]) === null || _this$meta_data4 === void 0 ? void 0 : _this$meta_data4.coming_from_sni,
        status_note_sni: (_this$meta_data5 = this.meta_data) === null || _this$meta_data5 === void 0 || (_this$meta_data5 = _this$meta_data5.dossier_credit) === null || _this$meta_data5 === void 0 || (_this$meta_data5 = _this$meta_data5[this.credpub0]) === null || _this$meta_data5 === void 0 ? void 0 : _this$meta_data5.status_note_sni,
        sni_details: (_this$meta_data6 = this.meta_data) === null || _this$meta_data6 === void 0 || (_this$meta_data6 = _this$meta_data6.dossier_credit) === null || _this$meta_data6 === void 0 || (_this$meta_data6 = _this$meta_data6[this.credpub0]) === null || _this$meta_data6 === void 0 ? void 0 : _this$meta_data6.sni_details
      };
      this.has_sni = ((_this$meta_data7 = this.meta_data) === null || _this$meta_data7 === void 0 || (_this$meta_data7 = _this$meta_data7.dossier_credit) === null || _this$meta_data7 === void 0 || (_this$meta_data7 = _this$meta_data7[this.credpub0]) === null || _this$meta_data7 === void 0 ? void 0 : _this$meta_data7.has_sni) != 'Non';
      this.ncc = (_this$meta_data8 = this.meta_data) === null || _this$meta_data8 === void 0 || (_this$meta_data8 = _this$meta_data8.dossier_credit) === null || _this$meta_data8 === void 0 || (_this$meta_data8 = _this$meta_data8[this.credpub0]) === null || _this$meta_data8 === void 0 ? void 0 : _this$meta_data8.compte_contribuable;
      this.annee_referentielle = (_this$meta_data9 = this.meta_data) === null || _this$meta_data9 === void 0 || (_this$meta_data9 = _this$meta_data9.dossier_credit) === null || _this$meta_data9 === void 0 || (_this$meta_data9 = _this$meta_data9[this.credpub0]) === null || _this$meta_data9 === void 0 ? void 0 : _this$meta_data9.annee_referentielle;
      if (!this.annee_referentielle) this.annee_referentielle = new Date().getFullYear();
    },
    loadBeforeRequest: function loadBeforeRequest() {
      var _this2 = this;
      _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["default"].loadUserData().then(function (res) {
        // this.getRatios(res)
        if (!_this2.has_sni) {
          _this2.isLoding = false;
          return;
        }
        if (!Boolean(_this2.ncc)) {
          _this2.$toasted.show("Veuillez saisir le ncc dans F0", {
            duration: 5000
          });
        }
        _this2.isLoding = true;
        _this2.getNotationFinale(res);
        _this2.getNotationFinanciere(res);
        _this2.getNotationQualitative(res);
      })["catch"](function (err) {
        console.log(err);
      });
    },
    getNotationFinanciere: function getNotationFinanciere(res) {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              // this.annee_referentielle = this.meta_data?.dossier_credit?.cred_pub_tb_00?.annee_referentielle
              _this3.formDataToBeWatched.annee_referentielle = _this3.annee_referentielle;

              // this.ncc = this.meta_data?.dossier_credit?.cred_pub_tb_00?.compte_contribuable
              _this3.formDataToBeWatched.ncc = _this3.ncc;
              if (res.status == 200) {
                _this3.$axios.post(_this3.ebapisHost + 'creditbuilder/api/v1/apinoteratio/', {
                  cc: _this3.ncc,
                  annee: _this3.annee_referentielle > _this3.maxAnneeRef ? _this3.maxAnneeRef : _this3.annee_referentielle
                }).then(function (response) {
                  var _response$data, _response$data2;
                  _this3.isLoding = false;
                  _this3.nccInvalide = false;
                  _this3.notationFinanciere = (_response$data = response.data) === null || _response$data === void 0 || (_response$data = _response$data.analyse_fin) === null || _response$data === void 0 ? void 0 : _response$data.RATIO;
                  _this3.notationQuantitative = (_response$data2 = response.data) === null || _response$data2 === void 0 || (_response$data2 = _response$data2.analyse_fin) === null || _response$data2 === void 0 ? void 0 : _response$data2.NOTE_ENTREPRISE[0];
                  _this3.handleInput();
                })["catch"](function (error) {
                  _this3.nccInvalide = true;
                  console.error(error);
                });
              }
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    getNotationFinale: function getNotationFinale(res) {
      var _this4 = this;
      // this.annee_referentielle = this.meta_data?.dossier_credit?.cred_pub_tb_00?.annee_referentielle
      // this.ncc = this.meta_data?.dossier_credit?.cred_pub_tb_00?.compte_contribuable
      if (res.status == 200) {
        if (this.ncc) {
          this.$axios.post(this.ebapisHost + 'creditbuilder/api/v1/load-score/', {
            cc: this.ncc
          }).then(function (response) {
            // console.log("Notation finale",response.data);
            // this.sortedRatios(response.data)
            _this4.isLoding = false;
            _this4.notationFinale = response.data.score;
            _this4.handleInput();
          })["catch"](function (error) {
            console.error(error);
          });
        }
      }
    },
    getNotationQualitative: function getNotationQualitative(res) {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              // this.annee_referentielle = this.meta_data?.dossier_credit?.cred_pub_tb_00?.annee_referentielle
              // this.ncc = this.meta_data?.dossier_credit?.cred_pub_tb_00?.compte_contribuable
              if (res.status == 200) {
                if (_this5.annee_referentielle) {
                  if (_this5.ncc) {
                    _this5.$axios.post(_this5.ebapisHost + 'creditbuilder/api/v1/load-notation-qualitatif/', {
                      cc: _this5.ncc,
                      annee: _this5.annee_referentielle > _this5.maxAnneeRef ? _this5.maxAnneeRef : _this5.annee_referentielle
                    }).then(function (response) {
                      var _response$data3, _response$data4;
                      _this5.isLoding = false;
                      _this5.notationQualitatif = response === null || response === void 0 || (_response$data3 = response.data) === null || _response$data3 === void 0 || (_response$data3 = _response$data3.analyse_fin) === null || _response$data3 === void 0 ? void 0 : _response$data3.notation_categorie;
                      _this5.notation_qualitative = response === null || response === void 0 || (_response$data4 = response.data) === null || _response$data4 === void 0 || (_response$data4 = _response$data4.analyse_fin) === null || _response$data4 === void 0 ? void 0 : _response$data4.notation_qualitative;
                      _this5.handleInput();
                    })["catch"](function (error) {
                      console.error(error);
                    });
                  }
                }
              }
            case 1:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    getRatios: function getRatios(res) {
      var _this6 = this;
      // this.annee_referentielle = this.meta_data?.dossier_credit?.cred_pub_tb_00?.annee_referentielle
      // this.annee_referentielle = this.annee_referentielle.toString()
      // this.ncc = this.meta_data?.dossier_credit?.cred_pub_tb_00?.compte_contribuable
      if (res.status == 200) {
        if (this.annee_referentielle) {
          if (this.ncc) {
            var options = {
              method: 'GET',
              url: 'https://ebapis.com/basix/api/v3/public/ultimate-db/',
              headers: {
                'Content-Type': 'application/json'
              },
              params: {
                ncc: this.ncc,
                annee: "null",
                operation: "READ"
              }
            };
            this.$axios.request(options).then(function (response) {
              // console.log(response.data);
              _this6.sortedRatios(response.data);
            })["catch"](function (error) {
              console.error(error);
            });
          }
        }
      }
    },
    sortedRatios: function sortedRatios(ratios) {
      var annee_ref = this.annee_referentielle.toString();
      this.ratiosActivite.forEach(function (element) {
        element.label = element.label;
        if (ratios[annee_ref - 2]) {
          element.curr_year_3 = Number(ratios[annee_ref - 2][element.code]);
        }
        if (ratios[annee_ref - 1]) {
          element.curr_year_2 = ratios[annee_ref - 1][element.code];
        }
        if (ratios[annee_ref]) {
          element.curr_year_1 = ratios[annee_ref][element.code];
        }
        element.variance = "";
      });
      this.ratiosLiquidites.forEach(function (element) {
        element.label = element.label;
        if (ratios[annee_ref - 2]) {
          element.curr_year_3 = Number(ratios[annee_ref - 2][element.code]);
        }
        if (ratios[annee_ref - 1]) {
          element.curr_year_2 = ratios[annee_ref - 1][element.code];
        }
        if (ratios[annee_ref]) {
          element.curr_year_1 = ratios[annee_ref][element.code];
        }
        element.variance = "";
      });
      this.ratiosEndettements.forEach(function (element) {
        element.label = element.label;
        if (ratios[annee_ref - 2]) {
          element.curr_year_3 = Number(ratios[annee_ref - 2][element.code]);
        }
        if (ratios[annee_ref - 1]) {
          element.curr_year_2 = ratios[annee_ref - 1][element.code];
        }
        if (ratios[annee_ref]) {
          element.curr_year_1 = ratios[annee_ref][element.code];
        }
        element.variance = "";
      });
      this.ratiosRentabilites.forEach(function (element) {
        element.label = element.label;
        if (ratios[annee_ref - 2]) {
          element.curr_year_3 = Number(ratios[annee_ref - 2][element.code]);
        }
        if (ratios[annee_ref - 1]) {
          element.curr_year_2 = ratios[annee_ref - 1][element.code];
        }
        if (ratios[annee_ref]) {
          element.curr_year_1 = ratios[annee_ref][element.code];
        }
        element.variance = "";
      });
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
    loadRetrieved: function loadRetrieved() {
      var _this$meta_data$dossi;
      var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];
      this.defaultRetract(false, (_this$meta_data$dossi = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi.applied_templ_id);
      if (lentb.length > 0) {
        if (this.meta_data["dossier_credit"][createdKey] != undefined) {
          this.formDataToBeWatched = this.meta_data["dossier_credit"][createdKey];
          if (this.formDataToBeWatched.ratiosActivite) {
            var _this$formDataToBeWat;
            this.ratiosActivite = (_this$formDataToBeWat = this.formDataToBeWatched) === null || _this$formDataToBeWat === void 0 ? void 0 : _this$formDataToBeWat.ratiosActivite;
          }
          if (this.formDataToBeWatched.ratiosEndettements) {
            var _this$formDataToBeWat2;
            this.ratiosEndettements = (_this$formDataToBeWat2 = this.formDataToBeWatched) === null || _this$formDataToBeWat2 === void 0 ? void 0 : _this$formDataToBeWat2.ratiosEndettements;
          }
          if (this.formDataToBeWatched.ratiosLiquidites) {
            var _this$formDataToBeWat3;
            this.ratiosLiquidites = (_this$formDataToBeWat3 = this.formDataToBeWatched) === null || _this$formDataToBeWat3 === void 0 ? void 0 : _this$formDataToBeWat3.ratiosLiquidites;
          }
          if (this.formDataToBeWatched.ratiosRentabilites) {
            var _this$formDataToBeWat4;
            this.ratiosRentabilites = (_this$formDataToBeWat4 = this.formDataToBeWatched) === null || _this$formDataToBeWat4 === void 0 ? void 0 : _this$formDataToBeWat4.ratiosRentabilites;
          }
        }
      }
    },
    convertNumber: function convertNumber(valeur) {
      return Number(String(valeur).replace(/\s+/g, ""));
    },
    launchAutoSaver: function launchAutoSaver() {
      var _this7 = this;
      _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["default"].loadUserData().then(function (res) {
        _this7.send2Backend(res, 0, 0);
      })["catch"](function (err) {
        _this7.loadWithError(err);
      });
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
        id: "f14-head"
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
      if (this.authcheck === true) {
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
    handleInput: function handleInput() {
      this.formDataToBeWatched.notationQuantitative = this.notationQuantitative;
      this.formDataToBeWatched.notationQualitatif = this.notationQualitatif;
      this.formDataToBeWatched.notationFinale = this.notationFinale;
      this.formDataToBeWatched.notationFinanciere = this.notationFinanciere;
      this.formDataToBeWatched.ratiosActivite = this.ratiosActivite;
      this.formDataToBeWatched.ratiosLiquidites = this.ratiosLiquidites;
      this.formDataToBeWatched.ratiosEndettements = this.ratiosEndettements;
      this.formDataToBeWatched.ratiosRentabilites = this.ratiosRentabilites;
      this.formDataToBeWatched.notation_qualitative = this.notation_qualitative;
    },
    deleteTB: function deleteTB() {
      if (confirm("Êtes-vous sûr de vouloir supprimer ce tableau ?")) {
        this.$emit("delete-tb", {
          tb_name: this.tb_name
        });
      }
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/memorandum/F12.vue?vue&type=template&id=7ee00607&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/memorandum/F12.vue?vue&type=template&id=7ee00607&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$formDataToBeWatch, _vm$notationQuantitat, _vm$notationQuantitat2, _vm$notationQuantitat3, _vm$notation_qualitat, _vm$notation_qualitat2, _vm$notation_qualitat3, _vm$notationFinale, _vm$notationFinale2, _vm$notationFinale3, _vm$notationFinale4, _vm$notationFinale5, _vm$notationFinale6, _vm$notationFinale7, _vm$formDataToBeWatch2;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    on: {
      contextmenu: function contextmenu($event) {
        return _vm.$refs.menu.open($event, _vm.tb_name);
      }
    }
  }, [_c("div", {
    staticClass: "row bg-light card-width-height"
  }, [_c("ContextMenu", {
    ref: "menu",
    attrs: {
      id: _vm.tb_name,
      cred_pub_key: _vm.meta_parseable.cred_pub_key,
      tb_name: _vm.tb_name,
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
      id: "f14-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Commentaire sur la notation\n                        ")]), _vm._v(" "), _c("div", {
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
  })], 1)])])]), _vm._v(" "), _vm.nccInvalide ? _c("div", [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "col-md-12 mt-0 mb-4"
  }, [_vm._m(0), _vm._v(" "), _c("vue-editor", {
    attrs: {
      id: "commentaire_notation"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.commentaire_notation,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "commentaire_notation", $$v);
      },
      expression: "\n                            formDataToBeWatched.commentaire_notation\n                            "
    }
  })], 1)])]) : _c("div", [_vm.isLoding == false && _vm.isFailed == false ? _c("div", {
    staticClass: "row p-0"
  }, [_vm.has_sni ? _c("div", [_vm.seen1 ? _c("div", {
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
      id: "activité-et-rentabilité"
    }
  }, [_vm._v("\n                                    Notation financière\n                                    "), _c("i", {
    staticClass: "icofont icofont-rounded-up",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "mt-2"
  }, [_c("table", {
    staticClass: "table table-bordered mb-1"
  }, [_vm._m(1), _vm._v(" "), _c("tbody", [_vm._l(_vm.notationFinanciere, function (notation, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_vm._v(_vm._s(notation === null || notation === void 0 ? void 0 : notation.NOM) + " - " + _vm._s(notation === null || notation === void 0 ? void 0 : notation.LIB))]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [_vm._v(_vm._s(_vm._f("numberPrecision")(notation === null || notation === void 0 ? void 0 : notation.SCORE)))]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [_vm._v(_vm._s(notation === null || notation === void 0 ? void 0 : notation.NOTE))]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [_vm._v(_vm._s(notation.CRAN))]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [_vm._v(_vm._s(notation.QUALIFICATION))])]);
  }), _vm._v(" "), _c("tr", {
    staticClass: "fw-bold text-upercase text-white",
    staticStyle: {
      "background-color": "#34495e"
    }
  }, [_c("td", [_vm._v("NOTATION PARTIELLE RATING QUANTITATIF")]), _vm._v(" "), _c("td"), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$notationQuantitat = _vm.notationQuantitative) === null || _vm$notationQuantitat === void 0 ? void 0 : _vm$notationQuantitat.NOTE))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$notationQuantitat2 = _vm.notationQuantitative) === null || _vm$notationQuantitat2 === void 0 ? void 0 : _vm$notationQuantitat2.CRAN))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$notationQuantitat3 = _vm.notationQuantitative) === null || _vm$notationQuantitat3 === void 0 ? void 0 : _vm$notationQuantitat3.QUALIFICATION))])])], 2)])])]) : _c("div", {
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
      id: "activité-et-rentabilité"
    }
  }, [_vm._v("\n                                    Notation financière "), _c("i", {
    staticClass: "icofont icofont-rounded-down",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    }
  })])])])]) : _vm._e(), _vm._v(" "), _vm.has_sni ? _c("div", [_vm.seen2 ? _c("div", {
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
      id: "activité-et-rentabilité"
    }
  }, [_vm._v("\n                                    Notation qualitative\n                                    "), _c("i", {
    staticClass: "icofont icofont-rounded-up",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "mt-2"
  }, [_c("table", {
    staticClass: "table table-bordered mb-1"
  }, [_vm._m(2), _vm._v(" "), _c("tbody", [_vm._l(_vm.notationQualitatif, function (note_qualit, index_) {
    return _c("tr", {
      key: index_
    }, [_c("td", [_vm._v(_vm._s(note_qualit === null || note_qualit === void 0 ? void 0 : note_qualit.categorie))]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [_vm._v(_vm._s(_vm._f("numberPrecision")(note_qualit === null || note_qualit === void 0 ? void 0 : note_qualit.note)))]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [_vm._v(_vm._s(note_qualit === null || note_qualit === void 0 ? void 0 : note_qualit.cran))]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [_vm._v(_vm._s(note_qualit === null || note_qualit === void 0 ? void 0 : note_qualit.qualification))])]);
  }), _vm._v(" "), _c("tr", {
    staticClass: "fw-bold text-upercase text-white",
    staticStyle: {
      "background-color": "#34495e"
    }
  }, [_c("td", [_vm._v("NOTATION QUALITATIVE")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$notation_qualitat = _vm.notation_qualitative) === null || _vm$notation_qualitat === void 0 ? void 0 : _vm$notation_qualitat.note))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$notation_qualitat2 = _vm.notation_qualitative) === null || _vm$notation_qualitat2 === void 0 ? void 0 : _vm$notation_qualitat2.cran))]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$notation_qualitat3 = _vm.notation_qualitative) === null || _vm$notation_qualitat3 === void 0 ? void 0 : _vm$notation_qualitat3.qualification))])])], 2)])])]) : _c("div", {
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
      id: "activité-et-rentabilité"
    }
  }, [_vm._v("\n                                    Notation qualitative "), _c("i", {
    staticClass: "icofont icofont-rounded-down",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    }
  })])])])]) : _vm._e(), _vm._v(" "), _vm.has_sni ? _c("div", [_vm.seen3 ? _c("div", {
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
      id: "activité-et-rentabilité"
    }
  }, [_vm._v("\n                                    Notation finale\n                                    "), _c("i", {
    staticClass: "icofont icofont-rounded-up",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "mt-2"
  }, [_c("table", {
    staticClass: "table table-bordered mb-1"
  }, [_c("tbody", [_c("tr", [_c("td", [_vm._v("RACINE CLIENT")]), _vm._v(" "), _c("td", {
    staticClass: "text-center"
  }, [_vm._v(_vm._s((_vm$notationFinale = _vm.notationFinale) === null || _vm$notationFinale === void 0 || (_vm$notationFinale = _vm$notationFinale[0]) === null || _vm$notationFinale === void 0 ? void 0 : _vm$notationFinale.RACINE))])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("COMPTE CONTRIBUABLE  ")]), _vm._v(" "), _c("td", {
    staticClass: "text-center"
  }, [_vm._v(_vm._s((_vm$notationFinale2 = _vm.notationFinale) === null || _vm$notationFinale2 === void 0 || (_vm$notationFinale2 = _vm$notationFinale2[0]) === null || _vm$notationFinale2 === void 0 ? void 0 : _vm$notationFinale2.NO_CPTE_CTRIB))])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("RAISON SOCIALE / SIGLE")]), _vm._v(" "), _c("td", {
    staticClass: "text-center"
  }, [_vm._v(_vm._s((_vm$notationFinale3 = _vm.notationFinale) === null || _vm$notationFinale3 === void 0 || (_vm$notationFinale3 = _vm$notationFinale3[0]) === null || _vm$notationFinale3 === void 0 ? void 0 : _vm$notationFinale3.NOM_ENT))])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("FORME JURIDIQUE")]), _vm._v(" "), _c("td", {
    staticClass: "text-center"
  }, [_vm._v(_vm._s((_vm$notationFinale4 = _vm.notationFinale) === null || _vm$notationFinale4 === void 0 || (_vm$notationFinale4 = _vm$notationFinale4[0]) === null || _vm$notationFinale4 === void 0 ? void 0 : _vm$notationFinale4.LIB_FRM_JUR))])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("ACTIVITÉ PRINCIPALE ")]), _vm._v(" "), _c("td", {
    staticClass: "text-center"
  }, [_vm._v(_vm._s((_vm$notationFinale5 = _vm.notationFinale) === null || _vm$notationFinale5 === void 0 || (_vm$notationFinale5 = _vm$notationFinale5[0]) === null || _vm$notationFinale5 === void 0 ? void 0 : _vm$notationFinale5.activite))])]), _vm._v(" "), _vm._m(3), _vm._v(" "), _c("tr", [_c("td", [_vm._v("CA " + _vm._s(_vm.annee_referentielle))]), _vm._v(" "), _c("td", {
    staticClass: "text-center"
  }, [_vm.notationFinale && _vm.notationFinale[0] ? _c("span", [_vm._v(_vm._s(_vm._f("formatNumber")(_vm.notationFinale[0].CA)))]) : _c("span", [_vm._v("-")])])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("Capital " + _vm._s(_vm.annee_referentielle))]), _vm._v(" "), _c("td", {
    staticClass: "text-center"
  }, [_vm.notationFinale && _vm.notationFinale[0] ? _c("span", [_vm._v(_vm._s(_vm._f("formatNumber")(_vm.notationFinale[0].XB)))]) : _c("span", [_vm._v("-")])])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("Rating " + _vm._s(_vm.annee_referentielle))]), _vm._v(" "), _c("td", {
    staticClass: "text-center"
  }, [_vm._v(_vm._s((_vm$notationFinale6 = _vm.notationFinale) === null || _vm$notationFinale6 === void 0 || (_vm$notationFinale6 = _vm$notationFinale6[0]) === null || _vm$notationFinale6 === void 0 ? void 0 : _vm$notationFinale6.CRAN))])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("Ancien Rating " + _vm._s(_vm.annee_referentielle - 1))]), _vm._v(" "), _c("td", {
    staticClass: "text-center"
  }, [_vm._v(_vm._s((_vm$notationFinale7 = _vm.notationFinale) === null || _vm$notationFinale7 === void 0 || (_vm$notationFinale7 = _vm$notationFinale7[1]) === null || _vm$notationFinale7 === void 0 ? void 0 : _vm$notationFinale7.CRAN))])]), _vm._v(" "), _vm._m(4)])])])]) : _c("div", {
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
      id: "activité-et-rentabilité"
    }
  }, [_vm._v("\n                                    Notation finale "), _c("i", {
    staticClass: "icofont icofont-rounded-down",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    }
  })])])])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "col-md-12 mt-0 mb-4"
  }, [_vm._m(5), _vm._v(" "), _c("vue-editor", {
    attrs: {
      id: "commentaire_notation"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.commentaire_notation,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "commentaire_notation", $$v);
      },
      expression: "\n                                formDataToBeWatched.commentaire_notation\n                                "
    }
  })], 1)]), _vm._v(" "), _c("div", {
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
  }, [_vm._v("\n                        Fermer le tableau\n                    ")])]) : _vm._e(), _vm._v(" "), _vm.isLoding == true && _vm.isFailed == false ? _c("div", {
    staticClass: "py-4"
  }, [_vm._m(6)]) : _vm._e(), _vm._v(" "), _vm.isLoding == false && _vm.isFailed == true ? _c("div", {
    staticClass: "py-4"
  }, [_vm._m(7)]) : _vm._e()])]) : _c("div", {
    staticClass: "card card-width-height"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc pb-0 pt-2"
  }, [_c("h6", {
    staticClass: "head",
    attrs: {
      id: "f14-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Commentaire sur la notation\n                        ")]), _vm._v(" "), _c("div", {
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
      name: "commantaire_sur_la_notation",
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
  return _c("label", [_c("b", [_vm._v("Commentaire sur la notation")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", {
    staticClass: "fw-bold text-upercase text-white",
    staticStyle: {
      "background-color": "#34495e"
    }
  }, [_c("th", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Rating edane")])]), _vm._v(" "), _c("th", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Ratio")])]), _vm._v(" "), _c("th", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("NI")])]), _vm._v(" "), _c("th", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Notation")])]), _vm._v(" "), _c("th", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Qualification")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", {
    staticClass: "fw-bold text-upercase text-white",
    staticStyle: {
      "background-color": "#34495e"
    }
  }, [_c("th", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Rating edane")])]), _vm._v(" "), _c("th", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("NI")])]), _vm._v(" "), _c("th", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Notation")])]), _vm._v(" "), _c("th", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Qualification")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("td", [_vm._v("OBJET DE LA NOTATION ")]), _vm._v(" "), _c("td", {
    staticClass: "text-center"
  }, [_vm._v("A PRIORI")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("td", [_vm._v("GESTIONNAIRE")]), _vm._v(" "), _c("td", {
    staticClass: "text-center"
  }, [_vm._v("Grande entreprise AFFAIRE")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_c("b", [_vm._v("Commentaire sur la notation")])]);
}, function () {
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
    staticClass: "d-flex justify-content-center text-center align-items-center text-muted py-4"
  }, [_c("div", [_c("i", {
    staticClass: "icofont-close-circled text-danger",
    staticStyle: {
      "font-size": "60px"
    }
  }), _vm._v(" "), _c("h5", {
    staticClass: "text-danger"
  }, [_vm._v("\n                                Le chargement des données a échoué ... "), _c("br")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/memorandum/F12.vue?vue&type=style&index=0&id=7ee00607&lang=css&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/memorandum/F12.vue?vue&type=style&index=0&id=7ee00607&lang=css&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-7ee00607] {\r\n    font-family: \"Google sans\";\n}\nlabel[data-v-7ee00607] {\r\n    height: 10px;\r\n    font-size: 13px;\n}\ninput[type=\"text\"][data-v-7ee00607],\r\ninput[type=\"date\"][data-v-7ee00607],\r\nselect[data-v-7ee00607] {\r\n    height: 35px;\r\n    border-color: #34495e;\r\n    color: #57606f;\r\n    font-size: 13px;\r\n    font-weight: bold;\n}\n.card-width-height[data-v-7ee00607] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-7ee00607] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\n.hdc[data-v-7ee00607] {\r\n    background-color: #57606f;\n}\n.card-width-height[data-v-7ee00607] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-7ee00607] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\n.review[data-v-7ee00607] {\r\n    width: 180px !important;\n}\n.engagement input[type=\"text\"][data-v-7ee00607],\r\ninput[type=\"date\"][data-v-7ee00607] {\r\n    width: 100% !important;\n}\n.th[data-v-7ee00607] {\r\n    padding: 4px;\r\n    padding-bottom: 0px;\n}\n.badge-sm[data-v-7ee00607] {\r\n    display: inline-block;\r\n    width: 15px;\r\n    height: 15px;\r\n    background: rgba(255, 0, 0, 0.882);\r\n    color: white;\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    border-radius: 100%;\r\n    position: absolute;\r\n    top: -20%;\r\n    left: 55%;\r\n    text-align: center;\n}\n.relook-header[data-v-7ee00607] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\n.image1[data-v-7ee00607] {\r\n    background: url(\"/images/capture/exemples/commantaire_sur_la_notation.png\")\r\n        no-repeat;\r\n    background-position: center;\r\n    background-size: contain;\r\n\r\n    width: 500px;\r\n    height: 300px;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/memorandum/F12.vue?vue&type=style&index=0&id=7ee00607&lang=css&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/memorandum/F12.vue?vue&type=style&index=0&id=7ee00607&lang=css&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_F12_vue_vue_type_style_index_0_id_7ee00607_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./F12.vue?vue&type=style&index=0&id=7ee00607&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/memorandum/F12.vue?vue&type=style&index=0&id=7ee00607&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_F12_vue_vue_type_style_index_0_id_7ee00607_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_F12_vue_vue_type_style_index_0_id_7ee00607_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/forms/afg/memorandum/F12.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/forms/afg/memorandum/F12.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _F12_vue_vue_type_template_id_7ee00607_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./F12.vue?vue&type=template&id=7ee00607&scoped=true */ "./resources/js/components/forms/afg/memorandum/F12.vue?vue&type=template&id=7ee00607&scoped=true");
/* harmony import */ var _F12_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./F12.vue?vue&type=script&lang=js */ "./resources/js/components/forms/afg/memorandum/F12.vue?vue&type=script&lang=js");
/* harmony import */ var _F12_vue_vue_type_style_index_0_id_7ee00607_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./F12.vue?vue&type=style&index=0&id=7ee00607&lang=css&scoped=true */ "./resources/js/components/forms/afg/memorandum/F12.vue?vue&type=style&index=0&id=7ee00607&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _F12_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _F12_vue_vue_type_template_id_7ee00607_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _F12_vue_vue_type_template_id_7ee00607_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "7ee00607",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/forms/afg/memorandum/F12.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/forms/afg/memorandum/F12.vue?vue&type=script&lang=js":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/memorandum/F12.vue?vue&type=script&lang=js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_F12_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./F12.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/memorandum/F12.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_F12_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/forms/afg/memorandum/F12.vue?vue&type=style&index=0&id=7ee00607&lang=css&scoped=true":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/memorandum/F12.vue?vue&type=style&index=0&id=7ee00607&lang=css&scoped=true ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_F12_vue_vue_type_style_index_0_id_7ee00607_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./F12.vue?vue&type=style&index=0&id=7ee00607&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/memorandum/F12.vue?vue&type=style&index=0&id=7ee00607&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/forms/afg/memorandum/F12.vue?vue&type=template&id=7ee00607&scoped=true":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/memorandum/F12.vue?vue&type=template&id=7ee00607&scoped=true ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_F12_vue_vue_type_template_id_7ee00607_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_F12_vue_vue_type_template_id_7ee00607_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_F12_vue_vue_type_template_id_7ee00607_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./F12.vue?vue&type=template&id=7ee00607&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/memorandum/F12.vue?vue&type=template&id=7ee00607&scoped=true");


/***/ })

}]);