"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_contreanalyse_nsia_filiale_dajc_DAJC-MEP0_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-MEP0.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-MEP0.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_proxy_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../services/proxy.service */ "./resources/js/services/proxy.service.js");
/* harmony import */ var _services_connects_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../services/connects.service */ "./resources/js/services/connects.service.js");
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../helpers/helper */ "./resources/js/helpers/helper.js");
/* harmony import */ var _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vueform/multiselect/dist/multiselect.vue2 */ "./node_modules/@vueform/multiselect/dist/multiselect.vue2.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _services_nsia_f8_constants_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../services/nsia/f8-constants.js */ "./resources/js/services/nsia/f8-constants.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../helpers/indexedDB */ "./resources/js/helpers/indexedDB.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_helpers_indexedDB__WEBPACK_IMPORTED_MODULE_8__);
/* provided dependency */ var process = __webpack_require__(/*! process/browser.js */ "./node_modules/process/browser.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
  name: "FicheDeLaDocumentation",
  display: "Fiche_de_documentation",
  components: {
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_9__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_9__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_9__.ChevronDownIcon,
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_9__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_9__.TrashIcon,
    AirplayIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_9__.AirplayIcon,
    BookOpenIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_9__.BookOpenIcon,
    Multiselect: _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  computed: {},
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
            return _this.getCreditBanques();
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  mounted: function mounted() {
    var _this$meta_data$dossi,
      _this2 = this;
    this.codeagence = (_this$meta_data$dossi = this.meta_data.dossier_credit) === null || _this$meta_data$dossi === void 0 || (_this$meta_data$dossi = _this$meta_data$dossi.caf_recorded_file) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi.num_agence;
    // Initiate cache

    // // this.initCache();
    //

    this.tableClosedOrOpened();
    this.loadRetrieved();
    this.loadTbAttrs();
    // charge les attributs + sous attributs des tables
    // helper.loadCurrencyFormatter();
    // this.loadPrincChifCle();
    // EventBus.$on('autosubmit', () => {
    //   this.launchAutoSaver()
    // })

    // EventBus.$on("loadchiffcle", this.loadPrincChifCle);

    EventBus.$on("created-extra-file-template", function (data) {
      _this2.conventions.forEach(function (element, index) {
        var _data$template;
        var template_name = "Convention -fichier_conventions_" + index + "_" + _this2.$route.params.templateId;
        if (template_name == (data === null || data === void 0 || (_data$template = data.template) === null || _data$template === void 0 ? void 0 : _data$template.name)) {
          var _data$template2, _data$template3, _data$template4;
          console.log("le log ", data === null || data === void 0 ? void 0 : data.template);
          _this2.conventions[index]["template"] = {
            id: data === null || data === void 0 || (_data$template2 = data.template) === null || _data$template2 === void 0 ? void 0 : _data$template2.id,
            name: data === null || data === void 0 || (_data$template3 = data.template) === null || _data$template3 === void 0 ? void 0 : _data$template3.name,
            slug: data === null || data === void 0 || (_data$template4 = data.template) === null || _data$template4 === void 0 ? void 0 : _data$template4.slug
          };
        }
      });
    });
    EventBus.$on("created-extra-file-template", function (data) {
      _this2.garanties.forEach(function (element, index) {
        var _data$template5;
        var template_name = "Garantie -fichier_garanties_" + index + "_" + _this2.$route.params.templateId;
        if (template_name == (data === null || data === void 0 || (_data$template5 = data.template) === null || _data$template5 === void 0 ? void 0 : _data$template5.name)) {
          var _data$template6, _data$template7, _data$template8;
          console.log("le log ", data === null || data === void 0 ? void 0 : data.template);
          _this2.garanties[index]["template"] = {
            id: data === null || data === void 0 || (_data$template6 = data.template) === null || _data$template6 === void 0 ? void 0 : _data$template6.id,
            name: data === null || data === void 0 || (_data$template7 = data.template) === null || _data$template7 === void 0 ? void 0 : _data$template7.name,
            slug: data === null || data === void 0 || (_data$template8 = data.template) === null || _data$template8 === void 0 ? void 0 : _data$template8.slug
          };
        }
      });
    });
    EventBus.$on("updated-extra-file-upload", function (data) {
      _this2.getFiles();
    });
    EventBus.$on("updated-extra-file-upload", function (data) {
      _this2.getFilesG();
    });
  },
  data: function data() {
    var vm = this;
    return {
      connectsHost: _services_connects_service__WEBPACK_IMPORTED_MODULE_1__["default"].loadablehost(),
      codeagence: "",
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
      seen4: true,
      seen5: true,
      seen6: true,
      seen7: true,
      seen8: true,
      disp: false,
      isLoading: false,
      max: 5,
      Subquestion: false,
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
      selectedItems: [],
      conventions: [{
        libelle_conv: "Convention de",
        date_convention: "",
        ligne_decouvert: "",
        montant_ligne: 0,
        date_echeance: "",
        template: "",
        files: 0
      }],
      garanties: [{
        libelle_garantie: "Garantie autonome du",
        montant_garantie: 0,
        effet_garantie: "",
        echeance_garantie: "",
        code_agence: "",
        nature_garantie: "",
        ref_encodage: "",
        commentaire: "",
        active: false,
        template: "",
        files: 0
      }, {
        libelle_garantie: "Hypothèque Eligible",
        montant_garantie: 0,
        effet_garantie: "",
        echeance_garantie: "",
        code_agence: "",
        nature_garantie: "",
        ref_encodage: "",
        commentaire: "",
        active: false,
        template: "",
        files: 0
      }, {
        libelle_garantie: "Hypothèque non Eligible",
        montant_garantie: 0,
        effet_garantie: "",
        echeance_garantie: "",
        code_agence: "",
        nature_garantie: "",
        ref_encodage: "",
        commentaire: "",
        active: false,
        template: "",
        files: 0
      }, {
        libelle_garantie: "Nantissement de comptes solde fixe",
        montant_garantie: 0,
        effet_garantie: "",
        echeance_garantie: "",
        code_agence: "",
        nature_garantie: "",
        ref_encodage: "",
        commentaire: "",
        active: false,
        template: "",
        files: 0
      }, {
        libelle_garantie: "Nantissement de comptes à constituer progressivement",
        montant_garantie: 0,
        effet_garantie: "",
        echeance_garantie: "",
        code_agence: "",
        nature_garantie: "",
        ref_encodage: "",
        commentaire: "",
        active: false,
        template: "",
        files: 0
      }, {
        libelle_garantie: "Caution personnelle et solidaire de",
        montant_garantie: 0,
        effet_garantie: "",
        echeance_garantie: "",
        code_agence: "",
        nature_garantie: "",
        ref_encodage: "",
        commentaire: "",
        active: false,
        template: "",
        files: 0
      }, {
        libelle_garantie: "Nantissement de fonds de commerce",
        montant_garantie: 0,
        effet_garantie: "",
        echeance_garantie: "",
        code_agence: "",
        nature_garantie: "",
        ref_encodage: "",
        commentaire: "",
        active: false,
        template: "",
        files: 0
      }, {
        libelle_garantie: "Nantissement de fonds de commerce étendu au matériel",
        montant_garantie: 0,
        effet_garantie: "",
        echeance_garantie: "",
        code_agence: "",
        nature_garantie: "",
        ref_encodage: "",
        commentaire: "",
        active: false,
        template: "",
        files: 0
      }, {
        libelle_garantie: "Nantissement de compte de titres financiers/Actions",
        montant_garantie: 0,
        effet_garantie: "",
        echeance_garantie: "",
        code_agence: "",
        nature_garantie: "",
        ref_encodage: "",
        commentaire: "",
        active: false,
        template: "",
        files: 0
      }, {
        libelle_garantie: "Nantissement de droits d'associés et valeurs mobilières",
        montant_garantie: 0,
        effet_garantie: "",
        echeance_garantie: "",
        code_agence: "",
        nature_garantie: "",
        ref_encodage: "",
        commentaire: "",
        active: false,
        template: "",
        files: 0
      }, {
        libelle_garantie: "Cession conditionnelle de loyers",
        montant_garantie: 0,
        effet_garantie: "",
        echeance_garantie: "",
        code_agence: "",
        nature_garantie: "",
        ref_encodage: "",
        commentaire: "",
        active: false,
        template: "",
        files: 0
      }, {
        libelle_garantie: "Billet à ordre",
        montant_garantie: 0,
        effet_garantie: "",
        echeance_garantie: "",
        code_agence: "",
        nature_garantie: "",
        ref_encodage: "",
        commentaire: "",
        active: false,
        template: "",
        files: 0
      }, {
        libelle_garantie: "Domiciliation de salaire",
        montant_garantie: 0,
        effet_garantie: "",
        echeance_garantie: "",
        code_agence: "",
        nature_garantie: "",
        ref_encodage: "",
        commentaire: "",
        active: false,
        template: "",
        files: 0
      }, {
        libelle_garantie: "Cession de salaire et autres revenus",
        montant_garantie: 0,
        effet_garantie: "",
        echeance_garantie: "",
        code_agence: "",
        nature_garantie: "",
        ref_encodage: "",
        commentaire: "",
        active: false,
        template: "",
        files: 0
      }, {
        libelle_garantie: "Lettre de blocage de Compte Courant d'associés avec cession d'antériorité",
        montant_garantie: 0,
        effet_garantie: "",
        echeance_garantie: "",
        code_agence: "",
        nature_garantie: "",
        ref_encodage: "",
        commentaire: "",
        active: false,
        template: "",
        files: 0
      }, {
        libelle_garantie: "Cession conditionnelle de loyers",
        montant_garantie: 0,
        effet_garantie: "",
        echeance_garantie: "",
        code_agence: "",
        nature_garantie: "",
        ref_encodage: "",
        commentaire: "",
        active: false,
        template: "",
        files: 0
      }, {
        libelle_garantie: "Engagement de domiciliation des règlements",
        montant_garantie: 0,
        effet_garantie: "",
        echeance_garantie: "",
        code_agence: "",
        nature_garantie: "",
        ref_encodage: "",
        commentaire: "",
        active: false,
        template: "",
        files: 0
      }, {
        libelle_garantie: "Engagement de domiciliation du chiffre d'affaires",
        montant_garantie: 0,
        effet_garantie: "",
        echeance_garantie: "",
        code_agence: "",
        nature_garantie: "",
        ref_encodage: "",
        commentaire: "",
        active: false,
        template: "",
        files: 0
      }, {
        libelle_garantie: "Nantissement de Police d'assurance (bancassurance)",
        montant_garantie: 0,
        effet_garantie: "",
        echeance_garantie: "",
        code_agence: "",
        nature_garantie: "",
        ref_encodage: "",
        commentaire: "",
        active: false,
        template: "",
        files: 0
      }, {
        libelle_garantie: "Délégation d'assurance",
        montant_garantie: 0,
        effet_garantie: "",
        echeance_garantie: "",
        code_agence: "",
        nature_garantie: "",
        ref_encodage: "",
        commentaire: "",
        active: false,
        template: "",
        files: 0
      }, {
        libelle_garantie: "Souscription d'assurance",
        montant_garantie: 0,
        effet_garantie: "",
        echeance_garantie: "",
        code_agence: "",
        nature_garantie: "",
        ref_encodage: "",
        commentaire: "",
        active: false,
        template: "",
        files: 0
      }, {
        libelle_garantie: "Géolocalisation",
        montant_garantie: 0,
        effet_garantie: "",
        echeance_garantie: "",
        code_agence: "",
        nature_garantie: "",
        ref_encodage: "",
        commentaire: "",
        active: false,
        template: "",
        files: 0
      }, {
        libelle_garantie: "Mandat de gestion",
        montant_garantie: 0,
        effet_garantie: "",
        echeance_garantie: "",
        code_agence: "",
        nature_garantie: "",
        ref_encodage: "",
        commentaire: "",
        active: false,
        template: "",
        files: 0
      }, {
        libelle_garantie: "Engagements divers",
        montant_garantie: 0,
        effet_garantie: "",
        echeance_garantie: "",
        code_agence: "",
        nature_garantie: "",
        ref_encodage: "",
        commentaire: "",
        active: false,
        template: "",
        files: 0
      }],
      tous_les_lignes_filtres: [].concat(_toConsumableArray(_services_nsia_f8_constants_js__WEBPACK_IMPORTED_MODULE_7__["default"].tous_les_lignes), _toConsumableArray(_services_nsia_f8_constants_js__WEBPACK_IMPORTED_MODULE_7__["default"].lignes_engagements_signatures)),
      isChecked: false,
      q3isChecked: false,
      q4isChecked: false,
      formDataToBeWatched: {
        total_montant_ligne: "",
        total_garantie_ligne: "",
        coventions: "",
        garanties: "",
        comment_convention: "",
        comment_garantie: "",
        notes: []
      },
      type_credits: [],
      listingNote: true
    };
  },
  methods: {
    getCreditBanques: function getCreditBanques() {
      var _this$meta_data,
        _this3 = this;
      var categorie_client = (_this$meta_data = this.meta_data) === null || _this$meta_data === void 0 || (_this$meta_data = _this$meta_data.dossier_credit) === null || _this$meta_data === void 0 ? void 0 : _this$meta_data.categorie_client;
      _services_credit_service__WEBPACK_IMPORTED_MODULE_6__["default"].loadCreditBanques({
        categorie_client: categorie_client
      }).then(function (res) {
        _this3.type_credits = res.data;
        localStorage.setItem("banque_credit_types", JSON.stringify(res.data));
      })["catch"](function (err) {
        console.log(err);
      });
    },
    addConvention: function addConvention() {
      this.conventions.push({
        libelle_conv: "Convention de ",
        date_convention: "",
        ligne_decouvert: "",
        montant_ligne: 0,
        date_echeance: "",
        template: "",
        files: 0
      });
    },
    removeConvention: function removeConvention(index) {
      this.conventions.splice(index, 1);
    },
    addGaranties: function addGaranties() {
      this.garanties.push({
        libelle_garantie: "",
        montant_garantie: 0,
        effet_garantie: "",
        echeance_garantie: "",
        code_agence: this.codeagence,
        nature_garantie: "",
        ref_encodage: "",
        commentaire: "",
        active: true,
        template: "",
        files: 0
      });
    },
    removeGaranties: function removeGaranties(index) {
      this.garanties.splice(index, 1);
    },
    handleDoubleClickOrClickUp: function handleDoubleClickOrClickUp(event, index) {
      var _this4 = this;
      EventBus.$emit("open-extra-file-explorer");
      setTimeout(function () {
        EventBus.$emit("data-extra-file-explorer", {
          name: "Convention {(*)}fichier_conventions_" + index + "_" + _this4.$route.params.templateId
        });
      }, 500);
    },
    handleDoubleClickOrClickUpG: function handleDoubleClickOrClickUpG(event, index) {
      var _this5 = this;
      EventBus.$emit("open-extra-file-explorer");
      setTimeout(function () {
        EventBus.$emit("data-extra-file-explorer", {
          name: "Garantie {(*)}fichier_garanties_" + index + "_" + _this5.$route.params.templateId
        });
      }, 500);
    },
    getFiles: function getFiles() {
      var _this6 = this;
      _services_proxy_service__WEBPACK_IMPORTED_MODULE_0__["default"].proxyEbapis({
        url: this.connectsHost + "api/get-files",
        method: "POST",
        data: {
          file_identity: this.meta_data["dossier_credit"].cred_pub_key
        }
      }).then(function (res) {
        var _res$data$data, _res$data$data2;
        res.data = JSON.parse(res.data);
        if (((_res$data$data = res.data.data) === null || _res$data$data === void 0 ? void 0 : _res$data$data.length) > 0 || ((_res$data$data2 = res.data.data) === null || _res$data$data2 === void 0 ? void 0 : _res$data$data2.length) != null) {
          _this6.files = res.data.data;
          _this6.conventions.forEach(function (element, index) {
            var count = 0;
            _this6.files.forEach(function (file) {
              var _element$template;
              if ((file === null || file === void 0 ? void 0 : file.extra_file_template_id) != null && (element === null || element === void 0 || (_element$template = element.template) === null || _element$template === void 0 ? void 0 : _element$template.id) == (file === null || file === void 0 ? void 0 : file.extra_file_template_id)) {
                count++;
              }
            });
            _this6.conventions[index]["files"] = count;
          });
        }
      })["catch"](function (err) {
        console.error(err);
      });
    },
    getFilesG: function getFilesG() {
      var _this7 = this;
      _services_proxy_service__WEBPACK_IMPORTED_MODULE_0__["default"].proxyEbapis({
        url: this.connectsHost + "api/get-files",
        method: "POST",
        data: {
          file_identity: this.meta_data["dossier_credit"].cred_pub_key
        }
      }).then(function (res) {
        var _res$data$data3, _res$data$data4;
        res.data = JSON.parse(res.data);
        if (((_res$data$data3 = res.data.data) === null || _res$data$data3 === void 0 ? void 0 : _res$data$data3.length) > 0 || ((_res$data$data4 = res.data.data) === null || _res$data$data4 === void 0 ? void 0 : _res$data$data4.length) != null) {
          _this7.files = res.data.data;
          _this7.garanties.forEach(function (element, index) {
            var count = 0;
            _this7.files.forEach(function (file) {
              var _element$template2;
              if ((file === null || file === void 0 ? void 0 : file.extra_file_template_id) != null && (element === null || element === void 0 || (_element$template2 = element.template) === null || _element$template2 === void 0 ? void 0 : _element$template2.id) == (file === null || file === void 0 ? void 0 : file.extra_file_template_id)) {
                count++;
              }
            });
            _this7.garanties[index]["files"] = count;
          });
        }
      })["catch"](function (err) {
        console.error(err);
      });
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
      var _this8 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (_DEBUG) console.log(">> updateFormDataForDeletion");
              _this8.formDataToBeWatched.is_deleted = true;
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
      var _this9 = this;
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
              if (!_this9.formDataToBeWatched.is_deleted) {
                _context3.next = 5;
                break;
              }
              return _context3.abrupt("return");
            case 5:
              // Upload current (and arguably latest) formDataToBeWatched data

              _this9.uploadDataToServerAndUpdateLastSave(_this9.formDataToBeWatched, _this9.formDataToBeWatched);
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
        _cache = new (_helpers_indexedDB__WEBPACK_IMPORTED_MODULE_8___default())({
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
      var _this0 = this;
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
                  _this0.uploadDataToServerAndUpdateLastSave(newVal, oldVal);
                }
              }
              // First upload
              if (!_lastSaveTime) {
                _this0.uploadDataToServerAndUpdateLastSave(newVal, oldVal);
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
      var _this1 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              if (_DEBUG) console.log(">> uploadDataToServerAndUpdateLastSave");
              _context5.prev = 1;
              if (_DEBUG) console.log(">> this.autosaving");
              _context5.next = 5;
              return _this1.autosaving(newVal, oldVal);
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
      var _this10 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              if (_DEBUG) console.log(">> uploadDataToServerBeforePageCloses");
              _context6.prev = 1;
              _context6.next = 4;
              return _this10.autosaving(newVal, oldVal);
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
      var _this11 = this;
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
              return _this11.autosaving(_this11.formDataToBeWatched, _this11.formDataToBeWatched);
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
          _services_credit_service__WEBPACK_IMPORTED_MODULE_6__["default"].loadClientsAll(data).then(function (res) {
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
      var _this12 = this;
      _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["default"].loadUserData().then(function (res) {
        _this12.send2Backend(res, 0, 0);
      })["catch"](function (err) {
        _this12.loadWithError(err);
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
    determineDateEcheance: function determineDateEcheance() {
      var _this$meta_data$dossi2, _this$meta_data$dossi3;
      var created_at = (_this$meta_data$dossi2 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi2 === void 0 ? void 0 : _this$meta_data$dossi2["created_at"];
      var tb_use = [{
        "01": 0
      }, {
        "02": 1
      }, {
        "03": 2
      }, {
        "04": 3
      }, {
        "05": 4
      }, {
        "06": 5
      }, {
        "07": 6
      }, {
        "08": 7
      }, {
        "09": 8
      }];
      var d = this.formatDate2(created_at);
      var date_explode = d === null || d === void 0 ? void 0 : d.split("/");
      var month_number_find = tb_use === null || tb_use === void 0 ? void 0 : tb_use.find(function (element) {
        return element[date_explode[1]];
      });
      var month_number = Object.values(month_number_find);
      console.log("date_expode", date_explode, month_number === null || month_number === void 0 ? void 0 : month_number[0]);
      if ((date_explode === null || date_explode === void 0 ? void 0 : date_explode.length) > 0) {
        // Créer une date de départ
        var startDate = new Date(parseInt(date_explode[2]), month_number === null || month_number === void 0 ? void 0 : month_number[0], parseInt(date_explode[0])); // 15 janvier 2023 (les mois sont indexés à 0)

        // Définir le nombre de mois à ajouter
        // let monthsToAdd = this.convertNumber(month_number);
        var monthsToAdd = 25;

        // Créer une copie de la date de départ pour ne pas modifier l'originale
        var newDate = new Date(startDate);

        // Ajouter le nombre de mois à la date
        newDate.setMonth(newDate.getMonth() + monthsToAdd);
        console.log("newDate", newDate);

        // Afficher les résultats
        console.log("Date de départ :", startDate.toLocaleDateString("en")); // 15/01/2023
        console.log("Nouvelle date :", newDate.toLocaleDateString()); // 15/04/2023
      }
      console.log("date", this.formatDate2((_this$meta_data$dossi3 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi3 === void 0 ? void 0 : _this$meta_data$dossi3["created_at"]));
    },
    formatDate2: function formatDate2(date) {
      if (['', null, undefined].includes(date)) return '';
      var options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
      };
      return new Date(date).toLocaleDateString('fr', options);
    },
    loadRetrieved: function loadRetrieved() {
      var _this13 = this;
      var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];
      // Close table by default

      // this.defaultRetract(
      //     false,
      //     this.meta_data["dossier_credit"]?.applied_templ_id
      // );

      if (this.meta_data["dossier_credit"][createdKey] == undefined) {
        this.garanties.map(function (garantie) {
          return garantie.code_agence = _this13.codeagence;
        });
      }
      if (lentb.length > 0) {
        if (this.meta_data["dossier_credit"][createdKey] != undefined) {
          this.formDataToBeWatched = this.meta_data["dossier_credit"][createdKey];
          if (this.meta_data["dossier_credit"][createdKey]["conventions"] != "") {
            this.conventions = this.meta_data["dossier_credit"][createdKey]["conventions"];
          }
          if (this.meta_data["dossier_credit"][createdKey]["garanties"] != "") {
            this.garanties = this.meta_data["dossier_credit"][createdKey]["garanties"];
          }
        }
      }
    },
    setTbVal: function setTbVal(val) {
      this.cred_pub_key = val;
    },
    loadWithError: function loadWithError(err) {
      // // window.location.href = "/login";
    },
    formDataVars2: function formDataVars2(event, index, objectName, keyName) {
      this[objectName][index][keyName] = event[1];
      this.handleInput();
    },
    checkboxValCashCall: function checkboxValCashCall(event, index) {
      // if (event.target.checked) {
      //     this.garanties[index]["value"] = event.target.value;
      // } else {
      //     this.garanties[index]["value"] = "";
      //     this.garanties[index]["montant_garantie"] = 0;
      // }

      if (event.target.checked) {
        this.garanties[index]["active"] = true;
      } else {
        this.garanties[index]["active"] = false;
        this.garanties[index]["montant_garantie"] = 0;
        this.garanties[index]["effet_garantie"] = "";
        this.garanties[index]["echeance_garantie"] = "";
      }
      this.handleInput();
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
          //   this.launchScoringTable();
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
    addMore1: function addMore1() {
      this.entite_connectes.push({
        matricule_client_entite_connecte: "",
        raison_social_entite_connecte: "",
        secteur_activite_entite_connecte: ""
      });
    },
    // remove(index) {
    //     this.source_revenus.splice(index, 1);
    //     this.formDataToBeWatched.total_interimaires = this.totalInterimaires;
    //     this.formDataToBeWatched.total_permanent = this.totalPermanent;
    // },
    remove1: function remove1(index) {
      this.entite_connectes.splice(index, 1);
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
    onSlctMatCli: function onSlctMatCli(obj, key) {
      this.entite_connectes[key]["raison_social_entite_connecte"] = obj.nomcli;
      this.entite_connectes[key]["matricule_client_entite_connecte"] = obj.matclihan;
      this.handleInput();
    },
    somX3: function somX3(ob, key) {
      var som = 0;
      ob.filter(function (elm) {
        var result = String(elm[key]).replace(/\s+/g, "");
        if (result === "" || isNaN(result)) {
          som += 0;
        } else {
          som += parseInt(result);
        }
      });
      return som;
    },
    handleInput: function handleInput() {
      this.formDataToBeWatched.total_montant_ligne = this.somX3(this.conventions, "montant_ligne");
      this.formDataToBeWatched.total_garantie_ligne = this.somX3(this.garanties, "montant_garantie");
      // montant_ligne
      this.formDataToBeWatched["conventions"] = this.conventions, this.formDataToBeWatched["garanties"] = this.garanties;
      // this.formDataToBeWatched["avis_eg_general"] = this.avis_eg_general,
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-MEP0.vue?vue&type=template&id=3500a1fe&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-MEP0.vue?vue&type=template&id=3500a1fe&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      id: "f3-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Fiche de revue de la\n                            documentation pour mise en place\n                        ")]), _vm._v(" "), _c("div", {
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
  })], 1)])])]), _vm._v(" "), _vm.seen4 ? _c("div", {
    staticClass: "card-body mt-1"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen4 = !_vm.seen4;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "conventions"
    }
  }, [_vm._v("\n                        Conventions\n                        "), _c("chevron-up-icon", {
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
    staticStyle: {
      "max-height": "50vh"
    }
  }, [_c("table", {
    staticClass: "table table-bordered mb-1"
  }, [_vm._m(0), _vm._v(" "), _c("tbody", [_vm._l(_vm.conventions, function (element, index) {
    var _vm$meta_data;
    return _c("tr", {
      key: index
    }, [_c("td", {
      staticClass: "sticky"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: element.libelle_conv,
        expression: "element.libelle_conv"
      }],
      staticClass: "form-control",
      staticStyle: {
        "min-width": "250px"
      },
      attrs: {
        type: "text",
        id: index + "libelle_conv"
      },
      domProps: {
        value: element.libelle_conv
      },
      on: {
        change: _vm.handleInput,
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(element, "libelle_conv", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("date-input", {
      staticStyle: {
        "min-width": "250px"
      },
      attrs: {
        id: "date_convention" + index,
        value: element.date_convention
      },
      on: {
        input: function input($event) {
          return _vm.formDataVars2($event, index, "conventions", "date_convention");
        }
      }
    })], 1), _vm._v(" "), _c("td", [!["PPO", "PPI"].includes((_vm$meta_data = _vm.meta_data) === null || _vm$meta_data === void 0 || (_vm$meta_data = _vm$meta_data.dossier_credit) === null || _vm$meta_data === void 0 || (_vm$meta_data = _vm$meta_data.applied_templ_name) === null || _vm$meta_data === void 0 ? void 0 : _vm$meta_data.toUpperCase()) ? _c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: element.ligne_decouvert,
        expression: "\n                                                element.ligne_decouvert\n                                            "
      }],
      staticClass: "form-select",
      staticStyle: {
        "min-width": "250px"
      },
      attrs: {
        title: element.ligne_decouvert
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(element, "ligne_decouvert", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, _vm.handleInput]
      }
    }, [_c("option", {
      domProps: {
        value: ""
      }
    }), _vm._v(" "), _vm._l(_vm.tous_les_lignes_filtres, function (line, indexL) {
      return _c("option", {
        key: indexL + "4z_2",
        domProps: {
          value: line.libelle
        }
      }, [_vm._v("\n                                                " + _vm._s(line.libelle) + "\n                                            ")]);
    }), _vm._v(" "), (element === null || element === void 0 ? void 0 : element.ligne_mixte) != "" ? _c("option", {
      domProps: {
        value: element.ligne
      }
    }, [_vm._v("\n                                                " + _vm._s(element.ligne) + "\n                                            ")]) : _vm._e()], 2) : _c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: element.ligne_decouvert,
        expression: "\n                                                element.ligne_decouvert\n                                            "
      }],
      staticClass: "form-select",
      staticStyle: {
        "min-width": "250px"
      },
      attrs: {
        title: element.ligne_decouvert
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(element, "ligne_decouvert", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, _vm.handleInput]
      }
    }, [_c("option", {
      domProps: {
        value: ""
      }
    }), _vm._v(" "), _vm._l(_vm.type_credits, function (el, index) {
      return _c("option", {
        key: index,
        domProps: {
          value: el.libelle
        }
      }, [_vm._v("\n                                                " + _vm._s(el.libelle) + "\n                                            ")]);
    })], 2)]), _vm._v(" "), _c("td", [_c("currency-input", {
      staticClass: "form-control",
      staticStyle: {
        "min-width": "150px"
      },
      attrs: {
        "default-typing": false,
        type: "text",
        id: "montant_ligne" + index
      },
      on: {
        change: _vm.handleInput
      },
      model: {
        value: element.montant_ligne,
        callback: function callback($$v) {
          _vm.$set(element, "montant_ligne", $$v);
        },
        expression: "element.montant_ligne"
      }
    })], 1), _vm._v(" "), _c("td", [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: element.date_echeance,
        expression: "element.date_echeance"
      }],
      staticClass: "form-control",
      staticStyle: {
        "min-width": "250px"
      },
      attrs: {
        cols: "50",
        rows: "2",
        id: index + "libelle_conv"
      },
      domProps: {
        value: element.date_echeance
      },
      on: {
        change: _vm.handleInput,
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(element, "date_echeance", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("div", {
      staticClass: "d-flex align-items-center"
    }, [_c("div", [(element === null || element === void 0 ? void 0 : element.files) > 0 ? _c("span", {
      staticClass: "p-1 px-2 mx-2 text-nowrap bg-grey",
      staticStyle: {
        color: "white",
        "font-size": "13px",
        "border-radius": "5px",
        "margin-left": "0 !important",
        "background-color": "#2c3e50"
      }
    }, [_vm._v("\n                                                    " + _vm._s((element === null || element === void 0 ? void 0 : element.files) > 0 ? (element === null || element === void 0 ? void 0 : element.files) + " fichier(s) uploadé(s)" : "") + "\n                                                ")]) : _vm._e()]), _vm._v(" "), _c("div", [_c("button", {
      staticClass: "btn shadow-md text-white bg-grey",
      staticStyle: {
        cursor: "pointer",
        "background-color": "#2c3e50",
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
          return _vm.handleDoubleClickOrClickUp($event, index);
        }
      }
    }, [_c("i", {
      staticClass: "icofont-attachment"
    })])])])]), _vm._v(" "), index == 0 ? _c("td", [_c("button", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: index == 0,
        expression: "index ==0 "
      }],
      staticStyle: {
        "background-color": "#2c3e50",
        color: "#ffffff",
        "border-radius": "15%",
        border: "none",
        "font-size": "16px"
      },
      attrs: {
        type: "button",
        title: "Ajouter un bien"
      },
      on: {
        click: function click($event) {
          return _vm.addConvention();
        }
      }
    }, [_c("plus-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)]) : _c("td", [_c("button", {
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
          return _vm.removeConvention(index);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)])]);
  }), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "sticky text-right fw-bold vertical-middle"
  }, [_vm._v("TOTAL")]), _vm._v(" "), _c("td"), _vm._v(" "), _c("td"), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      readonly: "",
      "default-typing": false
    },
    on: {
      change: _vm.handleInput
    },
    model: {
      value: _vm.formDataToBeWatched.total_montant_ligne,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "total_montant_ligne", $$v);
      },
      expression: "\n                                                formDataToBeWatched.total_montant_ligne\n                                            "
    }
  })], 1), _vm._v(" "), _c("td"), _vm._v(" "), _c("td")])], 2)])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 mt-4 mb-4"
  }, [_c("vue-editor", {
    attrs: {
      maximum: 1000,
      id: "comment_convention"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.comment_convention,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "comment_convention", $$v);
      },
      expression: "formDataToBeWatched.comment_convention"
    }
  })], 1)]) : _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen4 = !_vm.seen4;
      }
    }
  }, [_c("h6", {
    attrs: {
      id: "conventions"
    }
  }, [_vm._v("\n                        Conventions\n                        "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])]), _vm._v(" "), _vm.seen5 ? _c("div", {
    staticClass: "card-body mt-1"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen5 = !_vm.seen5;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "garanties"
    }
  }, [_vm._v("\n                        Garanties\n                        "), _c("chevron-up-icon", {
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
    staticStyle: {
      "max-height": "50vh"
    }
  }, [_c("table", {
    staticClass: "table table-bordered mb-1"
  }, [_vm._m(1), _vm._v(" "), _c("tbody", [_vm._l(_vm.garanties, function (garantie, index) {
    return _c("tr", {
      key: index
    }, [_c("td", {
      staticClass: "sticky"
    }, [_c("div", {
      staticClass: "d-flex align-items-center"
    }, [_c("input", {
      staticClass: "form-check-input m-2",
      staticStyle: {
        width: "20px",
        height: "20px"
      },
      attrs: {
        type: "checkbox",
        id: "non_applicable" + index
      },
      domProps: {
        checked: garantie.active
      },
      on: {
        change: function change($event) {
          return _vm.checkboxValCashCall($event, index);
        }
      }
    }), _vm._v(" "), _c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: garantie.libelle_garantie,
        expression: "\n                                                    garantie.libelle_garantie\n                                                "
      }],
      staticClass: "form-control",
      staticStyle: {
        "min-width": "280px"
      },
      attrs: {
        cols: "50",
        rows: "2",
        id: index + "libelle_garantie",
        readonly: !garantie.active
      },
      domProps: {
        value: garantie.libelle_garantie
      },
      on: {
        change: _vm.handleInput,
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(garantie, "libelle_garantie", $event.target.value);
        }
      }
    })])]), _vm._v(" "), _c("td", [_c("currency-input", {
      staticClass: "form-control",
      staticStyle: {
        "min-width": "150px"
      },
      attrs: {
        "default-typing": false,
        type: "text",
        id: "montant_garantie" + index,
        readonly: !garantie.active
      },
      on: {
        change: _vm.handleInput
      },
      model: {
        value: garantie.montant_garantie,
        callback: function callback($$v) {
          _vm.$set(garantie, "montant_garantie", $$v);
        },
        expression: "\n                                                garantie.montant_garantie\n                                            "
      }
    })], 1), _vm._v(" "), _c("td", [garantie.active == false ? _c("div", [_c("date-input", {
      staticStyle: {
        "min-width": "250px"
      },
      attrs: {
        id: "effet_garantie_" + index,
        value: garantie.effet_garantie,
        viewonly: true
      },
      on: {
        input: function input($event) {
          return _vm.formDataVars2($event, index, "garanties", "effet_garantie");
        }
      }
    })], 1) : _c("div", [_c("div", [_c("date-input", {
      staticStyle: {
        "min-width": "250px"
      },
      attrs: {
        id: "effet_garantie" + index,
        value: garantie.effet_garantie,
        viewonly: false
      },
      on: {
        input: function input($event) {
          return _vm.formDataVars2($event, index, "garanties", "effet_garantie");
        }
      }
    })], 1)])]), _vm._v(" "), _c("td", [garantie.active == false ? _c("div", [_c("date-input", {
      staticStyle: {
        "min-width": "250px"
      },
      attrs: {
        id: "echeance_garantie" + index,
        value: garantie.echeance_garantie,
        viewonly: true
      },
      on: {
        input: function input($event) {
          return _vm.formDataVars2($event, index, "garanties", "echeance_garantie");
        }
      }
    })], 1) : _c("div", [_c("div", [_c("date-input", {
      staticStyle: {
        "min-width": "250px"
      },
      attrs: {
        id: "echeance_garantie" + index,
        value: garantie.echeance_garantie,
        viewonly: false
      },
      on: {
        input: function input($event) {
          return _vm.formDataVars2($event, index, "garanties", "echeance_garantie");
        }
      }
    })], 1)])]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: garantie.code_agence,
        expression: "garantie.code_agence"
      }],
      staticClass: "form-control",
      staticStyle: {
        "min-width": "100px"
      },
      attrs: {
        type: "text",
        id: "code_agence" + index,
        readonly: !garantie.active
      },
      domProps: {
        value: garantie.code_agence
      },
      on: {
        change: _vm.handleInput,
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(garantie, "code_agence", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: garantie.nature_garantie,
        expression: "\n                                                garantie.nature_garantie\n                                            "
      }],
      staticClass: "form-control",
      staticStyle: {
        "min-width": "280px"
      },
      attrs: {
        cols: "50",
        rows: "2",
        type: "text",
        id: index + "nature_garantie",
        readonly: !garantie.active
      },
      domProps: {
        value: garantie.nature_garantie
      },
      on: {
        change: _vm.handleInput,
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(garantie, "nature_garantie", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: garantie.ref_encodage,
        expression: "garantie.ref_encodage"
      }],
      staticClass: "form-control",
      staticStyle: {
        "min-width": "280px"
      },
      attrs: {
        cols: "50",
        rows: "2",
        type: "text",
        id: index + "ref_encodage",
        readonly: !garantie.active
      },
      domProps: {
        value: garantie.ref_encodage
      },
      on: {
        change: _vm.handleInput,
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(garantie, "ref_encodage", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: garantie.commentaire,
        expression: "garantie.commentaire"
      }],
      staticClass: "form-control",
      staticStyle: {
        "min-width": "280px"
      },
      attrs: {
        cols: "50",
        rows: "2",
        id: index + "commentaire",
        readonly: !garantie.active
      },
      domProps: {
        value: garantie.commentaire
      },
      on: {
        change: _vm.handleInput,
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(garantie, "commentaire", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [!garantie.active == false ? _c("div", {
      staticClass: "d-flex align-items-center"
    }, [_c("div", [(garantie === null || garantie === void 0 ? void 0 : garantie.files) > 0 ? _c("span", {
      staticClass: "p-1 px-2 mx-2 text-nowrap bg-grey",
      staticStyle: {
        color: "white",
        "font-size": "13px",
        "border-radius": "5px",
        "margin-left": "0 !important",
        "background-color": "#2c3e50"
      }
    }, [_vm._v("\n                                                    " + _vm._s((garantie === null || garantie === void 0 ? void 0 : garantie.files) > 0 ? (garantie === null || garantie === void 0 ? void 0 : garantie.files) + " fichier(s) uploadé(s)" : "") + "\n                                                ")]) : _vm._e()]), _vm._v(" "), _c("div", [_c("button", {
      staticClass: "btn shadow-md text-white bg-grey",
      staticStyle: {
        cursor: "pointer",
        "background-color": "#2c3e50",
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
          return _vm.handleDoubleClickOrClickUpG($event, index);
        }
      }
    }, [_c("i", {
      staticClass: "icofont-attachment"
    })])])]) : _c("div", [_vm._m(2, true)])]), _vm._v(" "), _c("td", [_c("button", {
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
          return _vm.removeGaranties(index);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)])]);
  }), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "text-right fw-bold sticky vertical-middle"
  }, [_vm._v("TOTAL")]), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      readonly: "",
      "default-typing": false
    },
    on: {
      change: _vm.handleInput
    },
    model: {
      value: _vm.formDataToBeWatched.total_garantie_ligne,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "total_garantie_ligne", $$v);
      },
      expression: "\n                                                formDataToBeWatched.total_garantie_ligne\n                                            "
    }
  })], 1), _vm._v(" "), _c("td", {
    attrs: {
      colspan: "7"
    }
  }), _vm._v(" "), _c("td", [_c("button", {
    staticStyle: {
      "background-color": "#2c3e50",
      color: "#ffffff",
      "border-radius": "15%",
      border: "none",
      "font-size": "16px"
    },
    attrs: {
      type: "button",
      title: "Ajouter un bien"
    },
    on: {
      click: function click($event) {
        return _vm.addGaranties();
      }
    }
  }, [_c("plus-icon", {
    staticClass: "custom-class",
    attrs: {
      size: "21"
    }
  })], 1)])])], 2)])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 mt-4 mb-4"
  }, [_c("vue-editor", {
    attrs: {
      maximum: 1000,
      id: "comment_garantie"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.comment_garantie,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "comment_garantie", $$v);
      },
      expression: "formDataToBeWatched.comment_garantie"
    }
  })], 1)]) : _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen5 = !_vm.seen5;
      }
    }
  }, [_c("h6", {
    attrs: {
      id: "garanties"
    }
  }, [_vm._v("\n                        Garanties\n                        "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "mb-5 mt-2"
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
  }, [_vm._v("\n                Fermer le tableau\n            ")])]) : _c("div", {
    staticClass: "card card-width-height"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc pb-0 pt-2"
  }, [_c("h3", {
    staticClass: "head",
    attrs: {
      id: "f3-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Fiche de revue de la\n                            documentation pour mise en place\n                        ")]), _vm._v(" "), _c("div", {
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
  return _c("thead", [_c("tr", [_c("td", {
    staticClass: "th vertical-middle sticky sticky-top-4"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_c("b", [_vm._v("Conventions")])])]), _vm._v(" "), _c("td", {
    staticClass: "th vertical-middle sticky-top-3"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_c("b", [_vm._v("Date de la convention")])])]), _vm._v(" "), _c("td", {
    staticClass: "th vertical-middle sticky-top-3"
  }, [_c("label", {
    staticClass: "fw-bold",
    attrs: {
      "for": ""
    }
  }, [_vm._v("Ligne couverte")])]), _vm._v(" "), _c("td", {
    staticClass: "th vertical-middle sticky-top-3"
  }, [_c("label", {
    staticClass: "fw-bold",
    attrs: {
      "for": ""
    }
  }, [_vm._v("Montant de la ligne")])]), _vm._v(" "), _c("td", {
    staticClass: "th vertical-middle sticky-top-3"
  }, [_c("label", {
    staticClass: "fw-bold",
    attrs: {
      "for": ""
    }
  }, [_vm._v("\n                                            Date echéance de la\n                                            ligne/durée")])]), _vm._v(" "), _c("td", {
    staticClass: "th vertical-middle sticky-top-3"
  }), _vm._v(" "), _c("td", {
    staticClass: "th vertical-middle sticky-top-3"
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("td", {
    staticClass: "sticky sticky-top-4",
    staticStyle: {
      "vertical-align": "middle",
      "text-align": "center"
    },
    attrs: {
      rowspan: "2"
    }
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_c("b", [_vm._v("Intitulé")])])]), _vm._v(" "), _c("td", {
    staticClass: "sticky-top-3",
    staticStyle: {
      "vertical-align": "middle",
      "text-align": "center"
    },
    attrs: {
      rowspan: "2"
    }
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_c("b", [_vm._v("Montant de la garantie")])])]), _vm._v(" "), _c("td", {
    staticClass: "sticky-top-3",
    staticStyle: {
      "vertical-align": "middle",
      "text-align": "center"
    },
    attrs: {
      colspan: "2"
    }
  }, [_c("label", {
    staticClass: "fw-bold",
    attrs: {
      "for": ""
    }
  }, [_vm._v("Garanties")])]), _vm._v(" "), _c("td", {
    staticClass: "sticky-top-3",
    staticStyle: {
      "vertical-align": "middle",
      "text-align": "center"
    },
    attrs: {
      rowspan: "2"
    }
  }, [_c("label", {
    staticClass: "fw-bold",
    attrs: {
      "for": ""
    }
  }, [_vm._v("Code agence")])]), _vm._v(" "), _c("td", {
    staticClass: "sticky-top-3",
    staticStyle: {
      "vertical-align": "middle",
      "text-align": "center"
    },
    attrs: {
      rowspan: "2"
    }
  }, [_c("label", {
    staticClass: "fw-bold",
    attrs: {
      "for": ""
    }
  }, [_vm._v("Nature de la garantie")])]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold sticky-top-3",
    staticStyle: {
      "vertical-align": "middle",
      "text-align": "center"
    },
    attrs: {
      rowspan: "2"
    }
  }, [_vm._v("\n                                        Réf Encodage\n                                    ")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold sticky-top-3",
    staticStyle: {
      "vertical-align": "middle",
      "text-align": "center"
    },
    attrs: {
      rowspan: "2"
    }
  }, [_vm._v("\n                                        Commentaires\n                                    ")]), _vm._v(" "), _c("td", {
    staticClass: "sticky-top-3",
    staticStyle: {
      "vertical-align": "middle",
      "text-align": "center"
    },
    attrs: {
      colspan: "2",
      rowspan: "2"
    }
  })]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "fw-bold sticky-top-3",
    staticStyle: {
      "vertical-align": "middle",
      "text-align": "center",
      top: "30px"
    }
  }, [_vm._v("\n                                        Effet\n                                    ")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold sticky-top-3",
    staticStyle: {
      "vertical-align": "middle",
      "text-align": "center",
      top: "30px"
    }
  }, [_vm._v("\n                                        Échéance\n                                    ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("button", {
    staticClass: "btn shadow-md text-white bg-grey disabled",
    staticStyle: {
      cursor: "pointer",
      "background-color": "#2c3e50",
      width: "26px",
      "font-size": "13px",
      padding: "1px"
    },
    attrs: {
      type: "button",
      name: "button",
      "data-toggle": "tooltip"
    }
  }, [_c("i", {
    staticClass: "icofont-attachment"
  })]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-MEP0.vue?vue&type=style&index=0&id=3500a1fe&lang=css&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-MEP0.vue?vue&type=style&index=0&id=3500a1fe&lang=css&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.ischecked[data-v-3500a1fe] {\r\n    display: none;\n}\ninput[data-v-3500a1fe] {\r\n    /*border: 1px solid red;*/\n}\n*[data-v-3500a1fe] {\r\n    font-family: \"Google sans\";\n}\nlabel[data-v-3500a1fe] {\r\n    height: 10px;\r\n    font-size: 13px;\n}\ntd[data-v-3500a1fe] {\r\n    padding: 5px;\r\n    font-size: 13px;\n}\ninput[data-v-3500a1fe],\r\nselect[data-v-3500a1fe] {\r\n    height: 35px;\r\n    border-color: #34495e;\r\n    color: #57606f;\r\n    font-size: 13px;\r\n    font-weight: bold;\n}\n.card-width-height[data-v-3500a1fe] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-3500a1fe] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\n.hdc[data-v-3500a1fe] {\r\n    background-color: #57606f;\n}\n.relook-header[data-v-3500a1fe] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\n.badge-sm[data-v-3500a1fe] {\r\n    display: inline-block;\r\n    width: 15px;\r\n    height: 15px;\r\n    background: rgba(255, 0, 0, 0.882);\r\n    color: white;\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    border-radius: 100%;\r\n    position: absolute;\r\n    top: -20%;\r\n    left: 55%;\r\n    text-align: center;\n}\n.imageM21i[data-v-3500a1fe] {\r\n    background: url(\"/images/capture_cofina/instruction_evaluation_risque.png\")\r\n        no-repeat;\r\n    background-position: center;\r\n    background-size: contain;\r\n    width: 100%;\r\n    height: 100%;\n}\n.imageM21exi[data-v-3500a1fe] {\r\n    background: url(\"/images/capture_cofina/exemple_evaluation_risque.png\")\r\n        no-repeat;\r\n    background-position: center;\r\n    background-size: contain;\r\n    width: 1000px;\r\n    height: 200px;\n}\ntd.sticky[data-v-3500a1fe] {\r\n  position: sticky;\r\n  left: 0; /* ou right: 0; selon la direction souhaitée */\r\n  background-color: #f4f3f3; /* couleur de fond facultative pour masquer le contenu en dessous */\r\n  z-index: 1; /* pour s'assurer que l'élément est au-dessus des autres éléments */\n}\ntd.sticky-top[data-v-3500a1fe] {\r\n  position: sticky;\r\n  top: 0; /* ou right: 0; selon la direction souhaitée */\r\n  background-color: #f4f3f3; /* couleur de fond facultative pour masquer le contenu en dessous */\r\n  z-index: 2; /* pour s'assurer que l'élément est au-dessus des autres éléments */\n}\ntd.sticky-top-3[data-v-3500a1fe] {\r\n  position: sticky;\r\n  top: 0; /* ou right: 0; selon la direction souhaitée */\r\n  background-color: #f4f3f3; /* couleur de fond facultative pour masquer le contenu en dessous */\r\n  z-index: 3; /* pour s'assurer que l'élément est au-dessus des autres éléments */\n}\ntd.sticky-top-4[data-v-3500a1fe] {\r\n  position: sticky;\r\n  top: 0; /* ou right: 0; selon la direction souhaitée */\r\n  background-color: #f4f3f3; /* couleur de fond facultative pour masquer le contenu en dessous */\r\n  z-index: 4; /* pour s'assurer que l'élément est au-dessus des autres éléments */\n}\r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-MEP0.vue?vue&type=style&index=0&id=3500a1fe&lang=css&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-MEP0.vue?vue&type=style&index=0&id=3500a1fe&lang=css&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_MEP0_vue_vue_type_style_index_0_id_3500a1fe_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DAJC-MEP0.vue?vue&type=style&index=0&id=3500a1fe&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-MEP0.vue?vue&type=style&index=0&id=3500a1fe&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_MEP0_vue_vue_type_style_index_0_id_3500a1fe_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_MEP0_vue_vue_type_style_index_0_id_3500a1fe_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-MEP0.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-MEP0.vue ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DAJC_MEP0_vue_vue_type_template_id_3500a1fe_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DAJC-MEP0.vue?vue&type=template&id=3500a1fe&scoped=true */ "./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-MEP0.vue?vue&type=template&id=3500a1fe&scoped=true");
/* harmony import */ var _DAJC_MEP0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DAJC-MEP0.vue?vue&type=script&lang=js */ "./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-MEP0.vue?vue&type=script&lang=js");
/* harmony import */ var _DAJC_MEP0_vue_vue_type_style_index_0_id_3500a1fe_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DAJC-MEP0.vue?vue&type=style&index=0&id=3500a1fe&lang=css&scoped=true */ "./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-MEP0.vue?vue&type=style&index=0&id=3500a1fe&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DAJC_MEP0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _DAJC_MEP0_vue_vue_type_template_id_3500a1fe_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _DAJC_MEP0_vue_vue_type_template_id_3500a1fe_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3500a1fe",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-MEP0.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-MEP0.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-MEP0.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_MEP0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DAJC-MEP0.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-MEP0.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_MEP0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-MEP0.vue?vue&type=style&index=0&id=3500a1fe&lang=css&scoped=true":
/*!***************************************************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-MEP0.vue?vue&type=style&index=0&id=3500a1fe&lang=css&scoped=true ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_MEP0_vue_vue_type_style_index_0_id_3500a1fe_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DAJC-MEP0.vue?vue&type=style&index=0&id=3500a1fe&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-MEP0.vue?vue&type=style&index=0&id=3500a1fe&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-MEP0.vue?vue&type=template&id=3500a1fe&scoped=true":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-MEP0.vue?vue&type=template&id=3500a1fe&scoped=true ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_MEP0_vue_vue_type_template_id_3500a1fe_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_MEP0_vue_vue_type_template_id_3500a1fe_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_MEP0_vue_vue_type_template_id_3500a1fe_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DAJC-MEP0.vue?vue&type=template&id=3500a1fe&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-MEP0.vue?vue&type=template&id=3500a1fe&scoped=true");


/***/ })

}]);