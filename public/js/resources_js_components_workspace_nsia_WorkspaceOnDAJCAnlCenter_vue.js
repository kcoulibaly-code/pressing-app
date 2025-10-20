"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_workspace_nsia_WorkspaceOnDAJCAnlCenter_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-RED0.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-RED0.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/ContextMenu */ "./resources/js/components/shared/ContextMenu.vue");
/* harmony import */ var _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/ContextMenuItem */ "./resources/js/components/shared/ContextMenuItem.vue");
/* harmony import */ var _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vueform/multiselect/dist/multiselect.vue2 */ "./node_modules/@vueform/multiselect/dist/multiselect.vue2.js");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../helpers/helper */ "./resources/js/helpers/helper.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../helpers/indexedDB */ "./resources/js/helpers/indexedDB.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_helpers_indexedDB__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _services_proxy_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../services/proxy.service */ "./resources/js/services/proxy.service.js");
/* harmony import */ var _services_connects_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../services/connects.service */ "./resources/js/services/connects.service.js");
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
  name: "envoi-contrats",
  display: "Envoie_contrats",
  components: {
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_10__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_10__.TrashIcon,
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_10__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_10__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_10__.ChevronDownIcon,
    ContextMenu: _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__["default"],
    ContextMenuItem: _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__["default"],
    Multiselect: _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    meta_data: Object,
    tb_name: String,
    tb_display_name: String
  },
  created: function created() {},
  mounted: function mounted() {
    var _this = this,
      _this$meta_data,
      _this$meta_data2;
    this.tableClosedOrOpened();
    this.loadRetrieved();
    this.loadTbAttrs();
    this.checkAllSent();
    this.checkNotify();
    EventBus.$on("created-extra-file-template", function (data) {
      _this.envoie_contrats.forEach(function (element, index) {
        var _data$template;
        var template_name = "Contrat -envoie_contrats_" + index + "_" + _this.$route.params.templateId;
        if (template_name == (data === null || data === void 0 || (_data$template = data.template) === null || _data$template === void 0 ? void 0 : _data$template.name)) {
          var _data$template2, _data$template3, _data$template4;
          _this.envoie_contrats[index]["template"] = {
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
    if (((_this$meta_data = this.meta_data) === null || _this$meta_data === void 0 || (_this$meta_data = _this$meta_data.dossier_credit) === null || _this$meta_data === void 0 ? void 0 : _this$meta_data.categorie_client) == 'Retail') {
      this.role = "CC";
    }
    if (((_this$meta_data2 = this.meta_data) === null || _this$meta_data2 === void 0 || (_this$meta_data2 = _this$meta_data2.dossier_credit) === null || _this$meta_data2 === void 0 ? void 0 : _this$meta_data2.categorie_client) == 'Corporate') {
      this.role = "CAE";
    }
    this.getFiles();
    this.getEnvoieContratFiles();
  },
  computed: {},
  data: function data() {
    var vm = this;
    return {
      connectsHost: _services_connects_service__WEBPACK_IMPORTED_MODULE_9__["default"].loadablehost(),
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_3__["default"].host,
      authcheck: false,
      authcheckUsr: null,
      authcheckStatus: null,
      seen: true,
      listingNote: false,
      isSeenState: {
        envoie_contrats: true
      },
      role: "",
      sendRequest: false,
      disableTable: false,
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
      meta_parseable: {
        cred_pub_key: this.meta_data["cred_pub_key"],
        tb_name: this.tb_name
      },
      formDataToBeWatched: {
        envoie_contrats: [],
        notes: []
      },
      envoie_contrats: [{
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_11__["default"])(),
        nom: "",
        commentaire: "",
        template: "",
        files: 0,
        autre_nom: "",
        is_send: false
      }],
      liste_contrats: [{
        nom: "Autre",
        value: "Autre"
      }, {
        nom: "Contrat de cession de créances a titre de garantie (revue)",
        value: "Contrat de cession de créances a titre de garantie (revue)"
      }, {
        nom: "Contrat de découvert/spot",
        value: "Contrat de découvert/spot"
      }, {
        nom: "Contrat de domiciliation",
        value: "Contrat de domiciliation"
      }, {
        nom: "Contrat d’avance sur marche",
        value: "Contrat d’avance sur marche"
      }, {
        nom: "Contrat de crédit spot",
        value: "Contrat de crédit spot"
      }, {
        nom: "Contrat de découvert",
        value: "Contrat de découvert"
      }, {
        nom: "Contrat de gage de materiel professionnel",
        value: "Contrat de gage de materiel professionnel"
      }, {
        nom: "Contrat de gage de stocks de marchandises",
        value: "Contrat de gage de stocks de marchandises"
      }, {
        nom: "Contrat d’ engagement de domiciliation de chiffre d'affaires",
        value: "Contrat d’ engagement de domiciliation de chiffre d'affaires"
      }, {
        nom: "Contrat d’ engagement de domiciliation de reglement client",
        value: "Contrat d’ engagement de domiciliation de reglement client"
      }, {
        nom: "Convention de decouvert",
        value: "Convention de decouvert"
      }, {
        nom: "Convention de nantissement de compte de titres",
        value: "Convention de nantissement de compte de titres"
      }, {
        nom: "Convention de nantissement de creances",
        value: "Convention de nantissement de creances"
      }, {
        nom: "Convention de nantissement de fonds de commerce",
        value: "Convention de nantissement de fonds de commerce"
      }, {
        nom: "Convention de nantissement de solde de compte séquestre",
        value: "Convention de nantissement de solde de compte séquestre"
      }, {
        nom: "Contrat d'acte de nantissement de produit bancassurance",
        value: "Contrat d'acte de nantissement de produit bancassurance"
      }, {
        nom: "Contrat de crédit court terme personne morale",
        value: "Contrat de crédit court terme personne morale"
      }, {
        nom: "Contrat de crédit moyen terme personne morale",
        value: "Contrat de crédit moyen terme personne morale"
      }, {
        nom: "Convention de cautionnement de tous engagements",
        value: "Convention de cautionnement de tous engagements"
      }, {
        nom: "Convention de nantissement de compte bancaire",
        value: "Convention de nantissement de compte bancaire"
      }, {
        nom: "Convention de prêt",
        value: "Convention de prêt"
      }, {
        nom: "Convention de nantissement de compte bancaire ppo",
        value: "Convention de nantissement de compte bancaire ppo"
      }, {
        nom: "Convention de pret pp avance sur compte epargne couvert au minimum a 110%.",
        value: "Convention de pret pp avance sur compte epargne couvert au minimum a 110%."
      }],
      is_notify: false,
      file_data_list: [],
      showBtnDownload: false,
      showAllFiles: [],
      showMoreNumber: 2,
      MAX_NAME_LENGTH: 10,
      SHORT_NAME_SEPARATOR: '...',
      isButtonDisabled: false,
      allSent: false
    };
  },
  methods: {
    // ? ** formDataToBeWatched Cache Management Functions
    /**
     * sets up formToBeWatched cache management related listeners and stuff
     * ! to be executed in the *created* method
     */
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
        id: "dajc-red0-head"
      };
      this.$emit("load-buffer", p);
    },
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
        _cache = new (_helpers_indexedDB__WEBPACK_IMPORTED_MODULE_7___default())({
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
    loadRetrieved: function loadRetrieved() {
      var _this8 = this;
      var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];

      // this.defaultRetract(false, this.meta_data["dossier_credit"]?.applied_templ_id);

      if (lentb.length > 0) {
        if (this.meta_data["dossier_credit"][createdKey] != undefined) {
          var _this$meta_data$dossi, _this$meta_data$dossi2;
          this.formDataToBeWatched = this.meta_data["dossier_credit"][createdKey];
          if (((_this$meta_data$dossi = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi.envoie_contrats) != undefined) {
            this.envoie_contrats = this.meta_data["dossier_credit"][createdKey]["envoie_contrats"];
          }
          if (((_this$meta_data$dossi2 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi2 === void 0 ? void 0 : _this$meta_data$dossi2.contrats_signes) != undefined) {
            var _this$meta_data$dossi3;
            var contrats_signes = (_this$meta_data$dossi3 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi3 === void 0 ? void 0 : _this$meta_data$dossi3.contrats_signes;
            contrats_signes.forEach(function (contrat_signe) {
              var envoie_contrat = _this8.envoie_contrats.find(function (envoie_contrat) {
                return envoie_contrat.id === contrat_signe.contrats_id;
              });
              if (envoie_contrat && contrat_signe.files <= 0) {
                envoie_contrat.is_send = false;
              }
            });
          }
        }
      }
    },
    // AJOUTER
    launchAutoSaver: function launchAutoSaver() {
      var _this9 = this;
      _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["default"].loadUserData().then(function (res) {
        _this9.send2Backend(res, 0, 0);
      })["catch"](function (err) {
        _this9.loadWithError(err);
      });
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
    handleInput: function handleInput(evt) {
      this.formDataToBeWatched["envoie_contrats"] = this.envoie_contrats;
      this.validateEnvoieContrats();
      this.checkAllSent();
    },
    deleteTB: function deleteTB() {
      if (confirm("Êtes-vous sûr de vouloir supprimer ce tableau ?")) {
        this.$emit("delete-tb", {
          tb_name: this.tb_name
        });
      }
    },
    toggleIsSeen: function toggleIsSeen(key) {
      var _ref;
      var val = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var data = _objectSpread({}, this.isSeenState);
      val = (_ref = val !== null && val !== void 0 ? val : data[key]) !== null && _ref !== void 0 ? _ref : false;
      data[key] = !val;
      this.isSeenState = data;
    },
    addMore1: function addMore1() {
      this.envoie_contrats.push({
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_11__["default"])(),
        nom: "",
        commentaire: "",
        template: "",
        files: 0,
        conformite: null,
        autre_nom: "",
        is_send: false
      });
      this.handleInput();
    },
    remove1: function remove1(index) {
      this.envoie_contrats.splice(index, 1);
      this.handleInput();
    },
    handleDoubleClickOrClick: function handleDoubleClickOrClick(event, index) {
      var _this$envoie_contrats,
        _this0 = this;
      EventBus.$emit("open-extra-file-explorer");
      // const dateNow = new Date().toLocaleDateString();
      var numeroPiece = ((_this$envoie_contrats = this.envoie_contrats[index]) === null || _this$envoie_contrats === void 0 || (_this$envoie_contrats = _this$envoie_contrats.nom) === null || _this$envoie_contrats === void 0 ? void 0 : _this$envoie_contrats.trim()) || "";
      var result = numeroPiece;
      setTimeout(function () {
        EventBus.$emit("data-extra-file-explorer", {
          name: "Contrat {(*)}envoie_contrats_" + index + "_" + _this0.$route.params.templateId
        });
      }, 500);
    },
    getFiles: function getFiles() {
      var _this1 = this;
      _services_proxy_service__WEBPACK_IMPORTED_MODULE_8__["default"].proxyEbapis({
        url: this.connectsHost + "api/get-files",
        method: "POST",
        data: {
          file_identity: this.meta_data["dossier_credit"].cred_pub_key
        }
      }).then(function (res) {
        var _res$data$data, _res$data$data2;
        res.data = JSON.parse(res.data);
        if (((_res$data$data = res.data.data) === null || _res$data$data === void 0 ? void 0 : _res$data$data.length) > 0 || ((_res$data$data2 = res.data.data) === null || _res$data$data2 === void 0 ? void 0 : _res$data$data2.length) != null) {
          _this1.files = res.data.data;
          _this1.envoie_contrats.forEach(function (element, index) {
            var count = 0;
            _this1.files.forEach(function (file) {
              var _element$template;
              if ((file === null || file === void 0 ? void 0 : file.extra_file_template_id) != null && (element === null || element === void 0 || (_element$template = element.template) === null || _element$template === void 0 ? void 0 : _element$template.id) == (file === null || file === void 0 ? void 0 : file.extra_file_template_id)) {
                count++;
              }
            });
            _this1.envoie_contrats[index]["files"] = count;
            _this1.handleInput();
            _this1.getEnvoieContratFiles();
          });
        }
      })["catch"](function (err) {
        console.error(err);
      });
    },
    getEnvoieContratFiles: function getEnvoieContratFiles() {
      var _this10 = this;
      _services_proxy_service__WEBPACK_IMPORTED_MODULE_8__["default"].proxyEbapis({
        url: this.connectsHost + "api/get-files",
        method: "POST",
        data: {
          file_identity: this.meta_data["dossier_credit"].cred_pub_key
        }
      }).then(function (res) {
        var _res$data$data3, _res$data$data4;
        res.data = JSON.parse(res.data);
        _this10.file_data_list = [];
        if (((_res$data$data3 = res.data.data) === null || _res$data$data3 === void 0 ? void 0 : _res$data$data3.length) > 0 || ((_res$data$data4 = res.data.data) === null || _res$data$data4 === void 0 ? void 0 : _res$data$data4.length) != null) {
          _this10.files = res.data.data;
          _this10.envoie_contrats.forEach(function (element, index) {
            var fileData = [];
            _this10.files.forEach(function (file) {
              var _element$template2;
              if ((file === null || file === void 0 ? void 0 : file.extra_file_template_id) != null && (element === null || element === void 0 || (_element$template2 = element.template) === null || _element$template2 === void 0 ? void 0 : _element$template2.id) == (file === null || file === void 0 ? void 0 : file.extra_file_template_id)) {
                // fileData.push(file.file_url);
                fileData.push({
                  file_name: "".concat(file.file_name + '.' + file.file_ext),
                  file_url: file.file_url,
                  file_ext: file.file_ext
                });
              }
            });
            _this10.file_data_list.push(fileData);
            _this10.showAllFiles = Array(_this10.file_data_list.length).fill(false);
            _this10.showBtnDownload = true;
          });
        }
      })["catch"](function (err) {
        console.error(err);
      });
    },
    NotifyUser: function NotifyUser() {
      var _this11 = this;
      this.sendRequest = true;
      this.is_notify = false;
      this.updateAllList();
      _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["default"].loadUserData().then(function (res) {
        var user = res.data;
        var senderData = {
          user_id: user.user_id,
          name: user.name,
          email: user.email,
          role_id: user.role_uuid,
          role_uuid: user.role_uuid,
          display_name: user.role,
          role_sigle: user.role_sigle,
          what_to_be_produced: user.what_tobe_produced,
          contact_whatsap: user.contact_whatsap
        };
        var targetTargetId = _this11.meta_data["dossier_credit"].primary_owner;
        _services_credit_service__WEBPACK_IMPORTED_MODULE_5__["default"].info_user(targetTargetId).then(function (res) {
          var tempTarget = res.data;
          var targetData = {
            "user_id": tempTarget['id'],
            "name": tempTarget["name"],
            "email": tempTarget['email'],
            "role_id": tempTarget['role'][0]['id'],
            "role_uuid": tempTarget['role'][0]['role_uuid'],
            "display_name": tempTarget['role'][0]['display_name'],
            "role_sigle": tempTarget['role'][0]['role_sigle'],
            "what_to_be_produced": tempTarget['role'][0]['what_to_be_produced'],
            "contact_whatsap": tempTarget["contact_whatsap"]
          };
          _this11.$axios.post(_this11.ebapisHost + "notifications/api/v1/envoi-contrat-notifications/", {
            cred_pub_key: _this11.meta_parseable["cred_pub_key"],
            sender_data: senderData,
            target_data: targetData,
            conformite: false
          }).then(function (response) {
            _this11.$toasted.show("Notification éffectuée avec succès.");
            _this11.is_notify = true;
            _this11.sendRequest = false;
          })["catch"](function (error) {
            console.log(error);
            this.is_notify = false;
          });
        })["catch"](function (err) {
          _this11.loadWithError(err);
        });
      })["catch"](function (err) {
        _this11.loadWithError(err);
      });
    },
    getContrat: function getContrat(selectedItem) {
      if (selectedItem) {
        this.envoie_contrat.nom = selectedItem.nom;
      } else {
        this.envoie_contrat.nom = "";
      }
    },
    checkNotify: function checkNotify() {
      if (this.meta_data["dossier_credit"]["contrat_notification"] != undefined) {
        this.is_notify = true;
      }
      this.handleInput();
    },
    updateAllList: function updateAllList() {
      this.envoie_contrats.forEach(function (element) {
        element.is_send = true;
      }), this.handleInput();
    },
    getIcon: function getIcon(extension) {
      var icon = '';
      switch (extension === null || extension === void 0 ? void 0 : extension.toLowerCase()) {
        case 'png':
        case 'webp':
        case 'jpg':
        case 'jpeg':
          icon = 'icofont-file-jpg text-purple';
          break;
        case 'xls':
        case 'xlsx':
          icon = 'icofont-file-spreadsheet text-success';
          break;
        case 'pdf':
          icon = 'icofont-file-pdf text-danger';
          break;
        case 'doc':
        case 'docx':
          icon = 'icofont-file-word text-primary';
          break;
        case 'ppt':
        case 'pptx':
          icon = 'icofont-file-powerpoint text-warning';
          break;
        default:
          icon = '';
      }
      return icon;
    },
    downloadFile: function downloadFile(index, fileIndex) {
      var file = this.file_data_list[index][fileIndex];
      var url = window.location.origin + '/file?f=' + encodeURIComponent(file.file_url);
      window.open(url, '_blank');
    },
    formatFileName: function formatFileName(name) {
      return this.isFileNameTooLong(name) ? this.shortenFileName(name) : name;
    },
    shortenFileName: function shortenFileName(name) {
      return (name === null || name === void 0 ? void 0 : name.substring(0, Math.floor(this.MAX_NAME_LENGTH / 2))) + this.SHORT_NAME_SEPARATOR + (name === null || name === void 0 ? void 0 : name.substring((name === null || name === void 0 ? void 0 : name.length) - 1 - Math.floor(this.MAX_NAME_LENGTH / 2), (name === null || name === void 0 ? void 0 : name.length) - 1));
    },
    isFileNameTooLong: function isFileNameTooLong(name) {
      return (name === null || name === void 0 ? void 0 : name.length) > this.MAX_NAME_LENGTH;
    },
    validateEnvoieContrats: function validateEnvoieContrats() {
      var _this12 = this;
      this.isButtonDisabled = false;
      this.envoie_contrats.forEach(function (contrat) {
        if (contrat.nom === null || contrat.nom === '') {
          _this12.isButtonDisabled = true;
        } else if (contrat.nom.toUpperCase() === 'AUTRE' && (contrat.autre_nom === null || contrat.autre_nom === '')) {
          _this12.isButtonDisabled = true;
        } else if (contrat.files <= 0) {
          _this12.isButtonDisabled = true;
        }
      });
    },
    checkAllSent: function checkAllSent() {
      this.allSent = this.envoie_contrats.every(function (contrat) {
        return contrat.is_send === true;
      });
    },
    // Ouverture de la modal de sconvention 
    openConventionModal: function openConventionModal(index) {
      this.$modal.show('redaction_convention');
      setTimeout(function () {
        EventBus.$emit('redaction-contrat', index);
      }, 500);
    },
    onChangeStateShowAll: function onChangeStateShowAll(index) {
      this.$set(this.showAllFiles, index, !this.showAllFiles[index]);
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-RED1.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-RED1.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/ContextMenu */ "./resources/js/components/shared/ContextMenu.vue");
/* harmony import */ var _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/ContextMenuItem */ "./resources/js/components/shared/ContextMenuItem.vue");
/* harmony import */ var _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vueform/multiselect/dist/multiselect.vue2 */ "./node_modules/@vueform/multiselect/dist/multiselect.vue2.js");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../helpers/helper */ "./resources/js/helpers/helper.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../helpers/indexedDB */ "./resources/js/helpers/indexedDB.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_helpers_indexedDB__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _services_proxy_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../services/proxy.service */ "./resources/js/services/proxy.service.js");
/* harmony import */ var _services_connects_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../services/connects.service */ "./resources/js/services/connects.service.js");
/* provided dependency */ var process = __webpack_require__(/*! process/browser.js */ "./node_modules/process/browser.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }










// ? IndexedDB helper for formDataToBeWatched Cache management



// import ConformiteModal from "../../../../modals/ConformiteModal.vue";

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
  name: "envoi-contrats",
  display: "Contrats_signes",
  components: {
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_10__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_10__.TrashIcon,
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_10__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_10__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_10__.ChevronDownIcon,
    ContextMenu: _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__["default"],
    ContextMenuItem: _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__["default"],
    Multiselect: _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_2__["default"]
    // ConformiteModal
  },
  props: {
    meta_data: Object,
    tb_name: String,
    tb_display_name: String
  },
  created: function created() {},
  mounted: function mounted() {
    var _this = this,
      _this$meta_data,
      _this$meta_data2,
      _this$meta_data$dossi,
      _this$meta_data$dossi2;
    this.tableClosedOrOpened();
    this.loadRetrieved();
    this.loadTbAttrs();
    this.initDataContratSigne();
    this.checkNotify();
    EventBus.$on("created-extra-file-template", function (data) {
      _this.contrats_signes.forEach(function (element, index) {
        var _data$template;
        var template_name = "Contrat -contrats_signes_" + index + "_" + _this.$route.params.templateId;
        if (template_name == (data === null || data === void 0 || (_data$template = data.template) === null || _data$template === void 0 ? void 0 : _data$template.name)) {
          var _data$template2, _data$template3, _data$template4, _data$template5, _data$template6;
          _this.contrats_signes[index]["template"] = {
            id: data === null || data === void 0 || (_data$template2 = data.template) === null || _data$template2 === void 0 ? void 0 : _data$template2.id,
            name: data === null || data === void 0 || (_data$template3 = data.template) === null || _data$template3 === void 0 ? void 0 : _data$template3.name,
            slug: data === null || data === void 0 || (_data$template4 = data.template) === null || _data$template4 === void 0 ? void 0 : _data$template4.slug,
            file_name: (data === null || data === void 0 || (_data$template5 = data.template) === null || _data$template5 === void 0 ? void 0 : _data$template5.file_name) + "." + (data === null || data === void 0 || (_data$template6 = data.template) === null || _data$template6 === void 0 ? void 0 : _data$template6.file_ext)
          };
          _this.handleInput();
        }
      });
    });
    EventBus.$on("updated-extra-file-upload", function (data) {
      _this.getFiles();
    });
    if (((_this$meta_data = this.meta_data) === null || _this$meta_data === void 0 || (_this$meta_data = _this$meta_data.dossier_credit) === null || _this$meta_data === void 0 ? void 0 : _this$meta_data.categorie_client) == 'Retail') {
      this.role = "CC";
    }
    if (((_this$meta_data2 = this.meta_data) === null || _this$meta_data2 === void 0 || (_this$meta_data2 = _this$meta_data2.dossier_credit) === null || _this$meta_data2 === void 0 ? void 0 : _this$meta_data2.categorie_client) == 'Corporate') {
      this.role = "CAE";
    }
    this.getFiles();
    this.getEnvoieContratFiles();
    this.is_notify_conformite = (_this$meta_data$dossi = (_this$meta_data$dossi2 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi2 === void 0 || (_this$meta_data$dossi2 = _this$meta_data$dossi2["contrat_notification"]) === null || _this$meta_data$dossi2 === void 0 ? void 0 : _this$meta_data$dossi2.conformite) !== null && _this$meta_data$dossi !== void 0 ? _this$meta_data$dossi : false;
    this.getContratSigneFiles();
    this.getContratEnvoieFiles();
  },
  computed: {
    can_notify: function can_notify() {
      var _this$contrats_signes;
      var non_conforme = false;
      (_this$contrats_signes = this.contrats_signes) === null || _this$contrats_signes === void 0 || _this$contrats_signes.forEach(function (el) {
        if ((el === null || el === void 0 ? void 0 : el.conformite) == 'false') {
          non_conforme = true;
        }
      });

      // this.contrats_signes?.some(contrats_signe => contrats_signe?.conformite === 'false')
      return non_conforme;
    }
  },
  data: function data() {
    var vm = this;
    return {
      connectsHost: _services_connects_service__WEBPACK_IMPORTED_MODULE_9__["default"].loadablehost(),
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_3__["default"].host,
      authcheck: false,
      authcheckUsr: null,
      authcheckStatus: null,
      seen: true,
      listingNote: false,
      isSeenState: {
        contrats_signes: true
      },
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
      meta_parseable: {
        cred_pub_key: this.meta_data["cred_pub_key"],
        tb_name: this.tb_name
      },
      formDataToBeWatched: {
        contrats_signes: [],
        notes: []
      },
      contrats_signes: [],
      liste_contrats: [{
        nom: "Autre",
        value: "Autre"
      }, {
        nom: "Contrat de cession de créances a titre de garantie (revue)",
        value: "Contrat de cession de créances a titre de garantie (revue)"
      }, {
        nom: "Contrat de découvert/spot",
        value: "Contrat de découvert/spot"
      }, {
        nom: "Contrat de domiciliation",
        value: "Contrat de domiciliation"
      }, {
        nom: "Contrat d’avance sur marche",
        value: "Contrat d’avance sur marche"
      }, {
        nom: "Contrat de crédit spot",
        value: "Contrat de crédit spot"
      }, {
        nom: "Contrat de découvert",
        value: "Contrat de découvert"
      }, {
        nom: "Contrat de gage de materiel professionnel",
        value: "Contrat de gage de materiel professionnel"
      }, {
        nom: "Contrat de gage de stocks de marchandises",
        value: "Contrat de gage de stocks de marchandises"
      }, {
        nom: "Contrat d’ engagement de domiciliation de chiffre d'affaires",
        value: "Contrat d’ engagement de domiciliation de chiffre d'affaires"
      }, {
        nom: "Contrat d’ engagement de domiciliation de reglement client",
        value: "Contrat d’ engagement de domiciliation de reglement client"
      }, {
        nom: "Contrat convention de decouvert",
        value: "Contrat convention de decouvert"
      }, {
        nom: "Convention de nantissement de compte de titres",
        value: "Convention de nantissement de compte de titres"
      }, {
        nom: "Convention de nantissement de creances",
        value: "Convention de nantissement de creances"
      }, {
        nom: "Convention de nantissement de fonds de commerce",
        value: "Convention de nantissement de fonds de commerce"
      }, {
        nom: "Convention de nantissement de solde de compte séquestre",
        value: "Convention de nantissement de solde de compte séquestre"
      }, {
        nom: "Contrat d'acte de nantissement de produit bancassurance",
        value: "Contrat d'acte de nantissement de produit bancassurance"
      }, {
        nom: "Contrat de crédit court terme personne morale",
        value: "Contrat de crédit court terme personne morale"
      }, {
        nom: "Contrat de crédit moyen terme personne morale",
        value: "Contrat de crédit moyen terme personne morale"
      }, {
        nom: "Convention de cautionnement de tous engagements",
        value: "Convention de cautionnement de tous engagements"
      }, {
        nom: "Convention de nantissement de compte bancaire",
        value: "Convention de nantissement de compte bancaire"
      }, {
        nom: "Convention de prêt",
        value: "Convention de prêt"
      }, {
        nom: "Convention de nantissement de compte bancaire ppo",
        value: "Convention de nantissement de compte bancaire ppo"
      }, {
        nom: "Convention de pret pp avance sur compte epargne couvert au minimum a 110%.",
        value: "Convention de pret pp avance sur compte epargne couvert au minimum a 110%."
      }],
      list_contrats_signes: [],
      is_notify: false,
      is_notify_conformite: null,
      role: "",
      file_data_list: [],
      showBtnDownload: false,
      showAllFiles: [],
      showMoreNumber: 2,
      file_data_list_envoie: [],
      showBtnDownloadEnvoie: false,
      showAllFilesEnvoie: [],
      MAX_NAME_LENGTH: 10,
      SHORT_NAME_SEPARATOR: '...',
      dossier_credit: null,
      get_contrats: true
    };
  },
  methods: {
    // ? ** formDataToBeWatched Cache Management Functions
    /**
     * sets up formToBeWatched cache management related listeners and stuff
     * ! to be executed in the *created* method
     */
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
        id: "dajc-red0-head"
      };
      this.$emit("load-buffer", p);
    },
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
        _cache = new (_helpers_indexedDB__WEBPACK_IMPORTED_MODULE_7___default())({
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
    loadRetrieved: function loadRetrieved() {
      var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
      var createdKey = this.tb_name;
      var createdKeycontrat = "cred_pub_tb_200201";
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];

      // this.defaultRetract(false, this.meta_data["dossier_credit"]?.applied_templ_id);
      if (this.meta_data["dossier_credit"][createdKey] == undefined) {
        var _this$meta_data$dossi3;
        if (((_this$meta_data$dossi3 = this.meta_data["dossier_credit"][createdKeycontrat]) === null || _this$meta_data$dossi3 === void 0 ? void 0 : _this$meta_data$dossi3.contrats_signes) != undefined) {
          this.contrats_signes = this.meta_data["dossier_credit"][createdKeycontrat]["contrats_signes"];
          this.contrats_signes = this.contrats_signes.map(function (contrat) {
            return _objectSpread(_objectSpread({}, contrat), {}, {
              conformite: null
            });
          });
          this.handleInput();
        }
      }
      if (lentb.length > 0) {
        if (this.meta_data["dossier_credit"][createdKey] != undefined) {
          var _this$meta_data$dossi4;
          this.formDataToBeWatched = this.meta_data["dossier_credit"][createdKey];
          if (((_this$meta_data$dossi4 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi4 === void 0 ? void 0 : _this$meta_data$dossi4.contrats_signes) != undefined) {
            var _this$meta_data$dossi5, _this$meta_data$dossi6, _this$meta_data$dossi7, _this$meta_data$dossi8;
            var contratSigneNew = (_this$meta_data$dossi5 = (_this$meta_data$dossi6 = this.meta_data["dossier_credit"][createdKeycontrat]) === null || _this$meta_data$dossi6 === void 0 ? void 0 : _this$meta_data$dossi6.contrats_signes) !== null && _this$meta_data$dossi5 !== void 0 ? _this$meta_data$dossi5 : [];
            var contratSigneExist = (_this$meta_data$dossi7 = (_this$meta_data$dossi8 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi8 === void 0 ? void 0 : _this$meta_data$dossi8.contrats_signes) !== null && _this$meta_data$dossi7 !== void 0 ? _this$meta_data$dossi7 : [];

            // if (contratSigneExist.length != contratSigneNew.length){
            var existantsIds = new Set(contratSigneExist.map(function (contrat) {
              return contrat.id;
            }));
            var _iterator = _createForOfIteratorHelper(contratSigneNew),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var nouveauContrat = _step.value;
                if (!existantsIds.has(nouveauContrat.id)) {
                  nouveauContrat.conformite = null;
                  contratSigneExist.push(nouveauContrat);
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
            this.formDataToBeWatched["contrats_signes"] = contratSigneExist;
            this.contrats_signes = contratSigneExist;
            // }else{
            //   console.log("Created key 3: " + createdKey);
            //     this.contrats_signes = this.meta_data["dossier_credit"][createdKey]["contrats_signes"];
            //     console.log(">>this.contrats_signes",this.contrats_signes);

            //     this.contrats_signes = this.contrats_signes.map(contrat => ({...contrat}));
            //     this.handleInput();
            // }
          }
        }
      }
    },
    // AJOUTER
    launchAutoSaver: function launchAutoSaver() {
      var _this8 = this;
      _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["default"].loadUserData().then(function (res) {
        _this8.send2Backend(res, 0, 0);
      })["catch"](function (err) {
        _this8.loadWithError(err);
      });
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
    handleInput: function handleInput(evt) {
      this.formDataToBeWatched["contrats_signes"] = this.contrats_signes;
      this.emptyConformiteComment();
    },
    deleteTB: function deleteTB() {
      if (confirm("Êtes-vous sûr de vouloir supprimer ce tableau ?")) {
        this.$emit("delete-tb", {
          tb_name: this.tb_name
        });
      }
    },
    toggleIsSeen: function toggleIsSeen(key) {
      var _ref;
      var val = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var data = _objectSpread({}, this.isSeenState);
      val = (_ref = val !== null && val !== void 0 ? val : data[key]) !== null && _ref !== void 0 ? _ref : false;
      data[key] = !val;
      this.isSeenState = data;
    },
    remove1: function remove1(index) {
      this.contrats_signes.splice(index, 1);
    },
    handleDoubleClickOrClick: function handleDoubleClickOrClick(event, index) {
      var _this$contrats_signes2,
        _this9 = this;
      EventBus.$emit("open-extra-file-explorer");
      // const dateNow = new Date().toLocaleDateString();
      var numeroPiece = ((_this$contrats_signes2 = this.contrats_signes[index]) === null || _this$contrats_signes2 === void 0 || (_this$contrats_signes2 = _this$contrats_signes2.nom) === null || _this$contrats_signes2 === void 0 ? void 0 : _this$contrats_signes2.trim()) || "";
      var result = numeroPiece;
      setTimeout(function () {
        EventBus.$emit("data-extra-file-explorer", {
          name: "Contrat {(*)}contrats_signes_" + index + "_" + _this9.$route.params.templateId,
          view: true
        });
      }, 500);
    },
    // handleDoubleClickOrClickSigne(event, index) {
    //   EventBus.$emit("open-extra-file-explorer");
    //   // const dateNow = new Date().toLocaleDateString();
    //   const numeroPiece = this.contrats_signes[index]?.nom?.trim() || "";
    //   const result = numeroPiece;
    //   setTimeout(() => {
    //     EventBus.$emit("data-extra-file-explorer", {
    //       name:
    //         "Contrat {(*)}contrats_signes_" + index + "_" + this.$route.params.templateId,
    //       view: true,
    //     });
    //   }, 500);
    // },
    downloadAllFiles: function downloadAllFiles(index) {
      var listFiles = this.file_data_list[index];
      listFiles.forEach(function (fileUrl) {
        var url = window.location.origin + '/file?f=' + encodeURIComponent(fileUrl);
        window.open(url, '_blank');
      });
    },
    getFiles: function getFiles() {
      var _this0 = this;
      _services_proxy_service__WEBPACK_IMPORTED_MODULE_8__["default"].proxyEbapis({
        url: this.connectsHost + "api/get-files",
        method: "POST",
        data: {
          file_identity: this.meta_data["dossier_credit"].cred_pub_key
        }
      }).then(function (res) {
        var _res$data$data, _res$data$data2;
        res.data = JSON.parse(res.data);
        if (((_res$data$data = res.data.data) === null || _res$data$data === void 0 ? void 0 : _res$data$data.length) > 0 || ((_res$data$data2 = res.data.data) === null || _res$data$data2 === void 0 ? void 0 : _res$data$data2.length) != null) {
          _this0.files = res.data.data;
          _this0.contrats_signes.forEach(function (element, index) {
            var count = 0;
            _this0.files.forEach(function (file) {
              var _element$template;
              if ((file === null || file === void 0 ? void 0 : file.extra_file_template_id) != null && (element === null || element === void 0 || (_element$template = element.template) === null || _element$template === void 0 ? void 0 : _element$template.id) == (file === null || file === void 0 ? void 0 : file.extra_file_template_id)) {
                count++;
              }
            });
            _this0.contrats_signes[index]["files"] = count;
            _this0.handleInput();
          });
        }
      })["catch"](function (err) {
        console.error(err);
      });
    },
    getContratSigneFiles: function getContratSigneFiles() {
      var _this1 = this;
      _services_proxy_service__WEBPACK_IMPORTED_MODULE_8__["default"].proxyEbapis({
        url: this.connectsHost + "api/get-files",
        method: "POST",
        data: {
          file_identity: this.meta_data["dossier_credit"].cred_pub_key
        }
      }).then(function (res) {
        var _res$data$data3, _res$data$data4;
        res.data = JSON.parse(res.data);
        _this1.file_data_list = [];
        if (((_res$data$data3 = res.data.data) === null || _res$data$data3 === void 0 ? void 0 : _res$data$data3.length) > 0 || ((_res$data$data4 = res.data.data) === null || _res$data$data4 === void 0 ? void 0 : _res$data$data4.length) != null) {
          _this1.files = res.data.data;
          _this1.contrats_signes.forEach(function (element, index) {
            var fileData = [];
            _this1.files.forEach(function (file) {
              var _element$template2;
              if ((file === null || file === void 0 ? void 0 : file.extra_file_template_id) != null && (element === null || element === void 0 || (_element$template2 = element.template) === null || _element$template2 === void 0 ? void 0 : _element$template2.id) == (file === null || file === void 0 ? void 0 : file.extra_file_template_id)) {
                // fileData.push(file.file_url);
                fileData.push({
                  file_name: "".concat(file.file_name + '.' + file.file_ext),
                  file_url: file.file_url,
                  file_ext: file.file_ext
                });
              }
            });
            _this1.file_data_list.push(fileData);
            _this1.showAllFiles = Array(_this1.file_data_list.length).fill(false);
            _this1.showBtnDownload = true;
          });
        }
      })["catch"](function (err) {
        console.error(err);
      });
    },
    getContratEnvoieFiles: function getContratEnvoieFiles() {
      var _this10 = this;
      _services_proxy_service__WEBPACK_IMPORTED_MODULE_8__["default"].proxyEbapis({
        url: this.connectsHost + "api/get-files",
        method: "POST",
        data: {
          file_identity: this.meta_data["dossier_credit"].cred_pub_key
        }
      }).then(function (res) {
        var _res$data$data5, _res$data$data6;
        res.data = JSON.parse(res.data);
        _this10.file_data_list_envoie = [];
        if (((_res$data$data5 = res.data.data) === null || _res$data$data5 === void 0 ? void 0 : _res$data$data5.length) > 0 || ((_res$data$data6 = res.data.data) === null || _res$data$data6 === void 0 ? void 0 : _res$data$data6.length) != null) {
          var _this10$meta_data$dos;
          _this10.files = res.data.data;
          var contrats = (_this10$meta_data$dos = _this10.meta_data["dossier_credit"]["cred_pub_tb_200201"]) === null || _this10$meta_data$dos === void 0 ? void 0 : _this10$meta_data$dos.envoie_contrats;
          contrats === null || contrats === void 0 || contrats.forEach(function (element, index) {
            var fileDataEnvoie = [];
            _this10.files.forEach(function (file) {
              var _element$template3;
              if ((file === null || file === void 0 ? void 0 : file.extra_file_template_id) != null && (element === null || element === void 0 || (_element$template3 = element.template) === null || _element$template3 === void 0 ? void 0 : _element$template3.id) == (file === null || file === void 0 ? void 0 : file.extra_file_template_id)) {
                // fileData.push(file.file_url);
                fileDataEnvoie.push({
                  file_name: "".concat(file.file_name + '.' + file.file_ext),
                  file_url: file.file_url,
                  file_ext: file.file_ext
                });
              }
            });
            _this10.file_data_list_envoie.push(fileDataEnvoie);
            _this10.showAllFilesEnvoie = Array(_this10.file_data_list_envoie.length).fill(false);
            _this10.showBtnDownloadEnvoie = true;
          });
        }
      })["catch"](function (err) {
        console.error(err);
      });
    },
    NotifyUser: function NotifyUser() {
      var _this11 = this;
      _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["default"].loadUserData().then(function (res) {
        var user = res.data;
        var senderData = {
          user_id: user.user_id,
          name: user.name,
          email: user.email,
          role_id: user.role_uuid,
          role_uuid: user.role_uuid,
          display_name: user.role,
          role_sigle: user.role_sigle,
          what_to_be_produced: user.what_tobe_produced,
          contact_whatsap: user.contact_whatsap
        };
        var targetTargetId = _this11.meta_data["dossier_credit"].primary_owner;
        _services_credit_service__WEBPACK_IMPORTED_MODULE_5__["default"].info_user(targetTargetId).then(function (res) {
          var tempTarget = res.data;
          var targetData = {
            "user_id": tempTarget['id'],
            "name": tempTarget["name"],
            "email": tempTarget['email'],
            "role_id": tempTarget['role'][0]['id'],
            "role_uuid": tempTarget['role'][0]['role_uuid'],
            "display_name": tempTarget['role'][0]['display_name'],
            "role_sigle": tempTarget['role'][0]['role_sigle'],
            "what_to_be_produced": tempTarget['role'][0]['what_to_be_produced'],
            "contact_whatsap": tempTarget["contact_whatsap"]
          };
          _this11.$axios.post(_this11.ebapisHost + "notifications/api/v1/envoi-contrat-notifications/", {
            cred_pub_key: _this11.meta_parseable["cred_pub_key"],
            sender_data: senderData,
            target_data: targetData,
            conformite: false
          }).then(function (response) {
            _this11.$toasted.show("Notification éffectuée avec succès.");
            _this11.is_notify = true;
          })["catch"](function (error) {
            console.log(error);
            this.is_notify = false;
          });
        })["catch"](function (err) {
          _this11.loadWithError(err);
        });
      })["catch"](function (err) {
        _this11.loadWithError(err);
      });
    },
    checkboxVal: function checkboxVal(event, index) {
      var value = null;
      if (event.target.checked) {
        value = event.target.value;
      } else {
        value = null;
      }
      this.contrats_signes[index]["conformite"] = value;
      this.$set(this.contrats_signes, index, _objectSpread(_objectSpread({}, this.contrats_signes[index]), {}, {
        "conformite": value
      }));
      this.handleInput();
    },
    getEnvoieContratFiles: function getEnvoieContratFiles() {
      var _this12 = this;
      _services_proxy_service__WEBPACK_IMPORTED_MODULE_8__["default"].proxyEbapis({
        url: this.connectsHost + "api/get-files",
        method: "POST",
        data: {
          file_identity: this.meta_data["dossier_credit"].cred_pub_key
        }
      }).then(function (res) {
        var _res$data$data7, _res$data$data8;
        res.data = JSON.parse(res.data);
        _this12.file_data_list = [];
        if (((_res$data$data7 = res.data.data) === null || _res$data$data7 === void 0 ? void 0 : _res$data$data7.length) > 0 || ((_res$data$data8 = res.data.data) === null || _res$data$data8 === void 0 ? void 0 : _res$data$data8.length) != null) {
          var _this12$list_contrats;
          _this12.files = res.data.data;
          (_this12$list_contrats = _this12.list_contrats_signes) === null || _this12$list_contrats === void 0 || _this12$list_contrats.forEach(function (element, index) {
            var fileData = [];
            _this12.files.forEach(function (file) {
              var _element$template4;
              if ((file === null || file === void 0 ? void 0 : file.extra_file_template_id) != null && (element === null || element === void 0 || (_element$template4 = element.template) === null || _element$template4 === void 0 ? void 0 : _element$template4.id) == (file === null || file === void 0 ? void 0 : file.extra_file_template_id)) {
                fileData.push(file.file_url);
              }
            });
            _this12.file_data_list.push(fileData);
          });
        }
      })["catch"](function (err) {
        console.error(err);
      });
    },
    initDataContratSigne: function initDataContratSigne() {
      var _this$meta_data$dossi9, _this$meta_data$dossi0;
      this.list_contrats_signes = (_this$meta_data$dossi9 = (_this$meta_data$dossi0 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi0 === void 0 || (_this$meta_data$dossi0 = _this$meta_data$dossi0.cred_pub_tb_200202) === null || _this$meta_data$dossi0 === void 0 ? void 0 : _this$meta_data$dossi0.contrats_signes) !== null && _this$meta_data$dossi9 !== void 0 ? _this$meta_data$dossi9 : [];
    },
    checkNotify: function checkNotify() {
      var _this$meta_data$dossi1;
      if (((_this$meta_data$dossi1 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi1 === void 0 || (_this$meta_data$dossi1 = _this$meta_data$dossi1["contrat_notification"]) === null || _this$meta_data$dossi1 === void 0 ? void 0 : _this$meta_data$dossi1.conformite) != true) {
        this.is_notify = true;
      }
      this.handleInput();
    },
    getIcon: function getIcon(extension) {
      var icon = '';
      switch (extension === null || extension === void 0 ? void 0 : extension.toLowerCase()) {
        case 'png':
        case 'webp':
        case 'jpg':
        case 'jpeg':
          icon = 'icofont-file-jpg text-purple';
          break;
        case 'xls':
        case 'xlsx':
          icon = 'icofont-file-spreadsheet text-success';
          break;
        case 'pdf':
          icon = 'icofont-file-pdf text-danger';
          break;
        case 'doc':
        case 'docx':
          icon = 'icofont-file-word text-primary';
          break;
        case 'ppt':
        case 'pptx':
          icon = 'icofont-file-powerpoint text-warning';
          break;
        default:
          icon = '';
      }
      return icon;
    },
    downloadFile: function downloadFile(file) {
      var url = window.location.origin + '/file?f=' + encodeURIComponent(file === null || file === void 0 ? void 0 : file.file_url);
      window.open(url, '_blank');
    },
    emptyConformiteComment: function emptyConformiteComment() {
      this.contrats_signes.forEach(function (contrat) {
        if (contrat.conformite === "true") {
          contrat.commentaire_conformite = "";
        }
      });
    },
    formatFileName: function formatFileName(name) {
      return this.isFileNameTooLong(name) ? this.shortenFileName(name) : name;
    },
    shortenFileName: function shortenFileName(name) {
      return (name === null || name === void 0 ? void 0 : name.substring(0, Math.floor(this.MAX_NAME_LENGTH / 2))) + this.SHORT_NAME_SEPARATOR + (name === null || name === void 0 ? void 0 : name.substring((name === null || name === void 0 ? void 0 : name.length) - 1 - Math.floor(this.MAX_NAME_LENGTH / 2), (name === null || name === void 0 ? void 0 : name.length) - 1));
    },
    isFileNameTooLong: function isFileNameTooLong(name) {
      return (name === null || name === void 0 ? void 0 : name.length) > this.MAX_NAME_LENGTH;
    },
    getContratsData: function getContratsData() {
      var _this13 = this;
      this.get_contrats = false;
      this.$axios.post(this.ebapisHost + "creditbuilder/api/v1/get-dossier/", {
        cred_pub_key: this.meta_data["dossier_credit"].cred_pub_key
      }).then(function (res) {
        var _this13$dossier_credi, _this13$dossier_credi2, _this13$dossier_credi3, _this13$dossier_credi4;
        _this13.dossier_credit = res.data;
        var contratSigneNew = (_this13$dossier_credi = (_this13$dossier_credi2 = _this13.dossier_credit["cred_pub_tb_200201"]) === null || _this13$dossier_credi2 === void 0 ? void 0 : _this13$dossier_credi2.contrats_signes) !== null && _this13$dossier_credi !== void 0 ? _this13$dossier_credi : [];
        var contratSigneExist = (_this13$dossier_credi3 = (_this13$dossier_credi4 = _this13.dossier_credit["cred_pub_tb_200202"]) === null || _this13$dossier_credi4 === void 0 ? void 0 : _this13$dossier_credi4.contrats_signes) !== null && _this13$dossier_credi3 !== void 0 ? _this13$dossier_credi3 : [];
        var existantsIds = new Set(contratSigneExist.map(function (contrat) {
          return contrat.id;
        }));
        var _iterator2 = _createForOfIteratorHelper(contratSigneNew),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var nouveauContrat = _step2.value;
            if (!existantsIds.has(nouveauContrat.id)) {
              nouveauContrat.conformite = null;
              contratSigneExist.push(nouveauContrat);
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        _this13.formDataToBeWatched["contrats_signes"] = contratSigneExist;
        _this13.contrats_signes = contratSigneExist;
        _this13.getFiles();
        _this13.getEnvoieContratFiles();
        _this13.getContratSigneFiles();
        _this13.getContratEnvoieFiles();
        _this13.get_contrats = true;
      })["catch"](function (err) {
        //
        _this13.get_contrats = true;
      });
    },
    onChangeStateShowAll: function onChangeStateShowAll(index) {
      this.$set(this.showAllFiles, index, !this.showAllFiles[index]);
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV0.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV0.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/ContextMenu */ "./resources/js/components/shared/ContextMenu.vue");
/* harmony import */ var _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/ContextMenuItem */ "./resources/js/components/shared/ContextMenuItem.vue");
/* harmony import */ var _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vueform/multiselect/dist/multiselect.vue2 */ "./node_modules/@vueform/multiselect/dist/multiselect.vue2.js");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _services_connects_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../services/connects.service */ "./resources/js/services/connects.service.js");
/* harmony import */ var _services_proxy_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../services/proxy.service */ "./resources/js/services/proxy.service.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../helpers/helper */ "./resources/js/helpers/helper.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../helpers/indexedDB */ "./resources/js/helpers/indexedDB.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_helpers_indexedDB__WEBPACK_IMPORTED_MODULE_9__);
/* provided dependency */ var process = __webpack_require__(/*! process/browser.js */ "./node_modules/process/browser.js");












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
  name: "Checklist_primaire",
  display: "Checklist primaire",
  components: {
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_10__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_10__.TrashIcon,
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_10__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_10__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_10__.ChevronDownIcon,
    ContextMenu: _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__["default"],
    ContextMenuItem: _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__["default"],
    Multiselect: _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_2__["default"],
    AirplayIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_10__.AirplayIcon
  },
  props: {
    meta_data: Object,
    tb_name: String,
    tb_display_name: String
  },
  created: function created() {},
  mounted: function mounted() {
    var _this = this;
    this.tableClosedOrOpened();
    this.loadRetrieved();
    this.loadTbAttrs();
    EventBus.$on("created-extra-file-template", function (data) {
      _this.check_list_diligeances.forEach(function (element, index) {
        var _data$template;
        var template_name = "Pièce(s) jointe(s) -check_list_diligeances" + index + "_" + _this.$route.params.templateId;
        if (template_name == (data === null || data === void 0 || (_data$template = data.template) === null || _data$template === void 0 ? void 0 : _data$template.name)) {
          var _data$template2, _data$template3, _data$template4;
          _this.check_list_diligeances[index]["template"] = {
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
  computed: {},
  data: function data() {
    var vm = this;
    return {
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_3__["default"].host,
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
      connectsHost: _services_connects_service__WEBPACK_IMPORTED_MODULE_6__["default"].loadablehost(),
      duree_credit0: null,
      mode_paiement0: null,
      listingNote: false,
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
      check_list_diligeances: [{
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_11__["default"])(),
        name: "Le prêt est-il accordé selon la matrice de subdélégation des pouvoirs",
        value: "",
        parent: "",
        numero_compte: "",
        ss_obj: false,
        checked: false,
        disabled: false,
        files: 0,
        template: "",
        comment: "",
        from_monteur_doss: false
      }, {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_11__["default"])(),
        name: "Les comptes de nantissement à solde fixe sont-ils disponibles ?",
        value: "",
        parent: "",
        numero_compte: "",
        ss_obj: false,
        checked: false,
        disabled: false,
        files: 0,
        template: "",
        comment: "",
        from_monteur_doss: false
      }, {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_11__["default"])(),
        name: "Compte Courant",
        value: "",
        parent: "Les comptes de nantissement à solde fixe sont-ils disponibles ?",
        numero_compte: "",
        ss_obj: true,
        checked: false,
        disabled: false,
        files: 0,
        template: "",
        comment: "",
        from_monteur_doss: false
      }, {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_11__["default"])(),
        name: "Deposit",
        value: "",
        parent: "Les comptes de nantissement à solde fixe sont-ils disponibles ?",
        numero_compte: "",
        ss_obj: true,
        checked: false,
        disabled: false,
        files: 0,
        template: "",
        comment: "",
        from_monteur_doss: false
      }, {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_11__["default"])(),
        name: "DAT",
        value: "",
        parent: "Les comptes de nantissement à solde fixe sont-ils disponibles ?",
        numero_compte: "",
        ss_obj: true,
        checked: false,
        disabled: false,
        files: 0,
        template: "",
        comment: "",
        from_monteur_doss: false
      }, {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_11__["default"])(),
        name: "PEE",
        value: "",
        parent: "Les comptes de nantissement à solde fixe sont-ils disponibles ?",
        numero_compte: "",
        ss_obj: true,
        checked: false,
        disabled: false,
        files: 0,
        template: "",
        comment: "",
        from_monteur_doss: false
      }, {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_11__["default"])(),
        name: "PEC",
        value: "",
        parent: "Les comptes de nantissement à solde fixe sont-ils disponibles ?",
        numero_compte: "",
        ss_obj: true,
        checked: false,
        disabled: false,
        files: 0,
        template: "",
        comment: "",
        from_monteur_doss: false
      }, {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_11__["default"])(),
        name: "Les comptes de nantissement à solde progressif sont-ils disponibles ?",
        value: "",
        parent: "",
        numero_compte: "",
        ss_obj: false,
        checked: false,
        disabled: false,
        files: 0,
        template: "",
        comment: "",
        from_monteur_doss: false
      }, {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_11__["default"])(),
        name: "Compte Courant",
        value: "",
        parent: "Les comptes de nantissement à solde progressif sont-ils disponibles ?",
        numero_compte: "",
        ss_obj: true,
        checked: false,
        disabled: false,
        files: 0,
        template: "",
        comment: "",
        from_monteur_doss: false
      }, {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_11__["default"])(),
        name: "Deposit",
        value: "",
        parent: "Les comptes de nantissement à solde progressif sont-ils disponibles ?",
        numero_compte: "",
        ss_obj: true,
        checked: false,
        disabled: false,
        files: 0,
        template: "",
        comment: "",
        from_monteur_doss: false
      }, {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_11__["default"])(),
        name: "DAT",
        value: "",
        parent: "Les comptes de nantissement à solde progressif sont-ils disponibles ?",
        numero_compte: "",
        ss_obj: true,
        checked: false,
        disabled: false,
        files: 0,
        template: "",
        comment: "",
        from_monteur_doss: false
      }, {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_11__["default"])(),
        name: "PEE",
        value: "",
        parent: "Les comptes de nantissement à solde progressif sont-ils disponibles ?",
        numero_compte: "",
        ss_obj: true,
        checked: false,
        disabled: false,
        files: 0,
        template: "",
        comment: "",
        from_monteur_doss: false
      }, {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_11__["default"])(),
        name: "PEC",
        value: "",
        parent: "Les comptes de nantissement à solde progressif sont-ils disponibles ?",
        numero_compte: "",
        ss_obj: true,
        checked: false,
        disabled: false,
        files: 0,
        template: "",
        comment: "",
        from_monteur_doss: false
      }, {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_11__["default"])(),
        name: "Le TEG est-il disponible ?",
        value: "",
        parent: "",
        numero_compte: "",
        ss_obj: false,
        checked: false,
        disabled: false,
        files: 0,
        template: "",
        comment: "",
        from_monteur_doss: false
      }],
      formDataToBeWatched: {
        notes: [],
        check_list_diligeances: [],
        indications_particulieres_eventuelles: ""
      },
      files: [],
      countries: [],
      notif_accord_credit_signe: null
    };
  },
  methods: {
    handleDoubleClickOrClick: function handleDoubleClickOrClick(event, index, element) {
      var _this2 = this;
      EventBus.$emit("open-extra-file-explorer");
      setTimeout(function () {
        EventBus.$emit("data-extra-file-explorer", {
          name: "Pièce(s) jointe(s) {(*)}check_list_diligeances" + index + "_" + _this2.$route.params.templateId,
          view: element === null || element === void 0 ? void 0 : element.from_monteur_doss
        });
      }, 500);
    },
    handleDoubleClickOrClick2: function handleDoubleClickOrClick2() {
      var _this3 = this;
      EventBus.$emit("open-extra-file-explorer");
      setTimeout(function () {
        EventBus.$emit("data-extra-file-explorer", {
          name: "Notification signée {(*)}notification_signee_" + _this3.$route.params.templateId,
          view: true
        });
      }, 500);
    },
    getFiles: function getFiles() {
      var _this4 = this;
      _services_proxy_service__WEBPACK_IMPORTED_MODULE_7__["default"].proxyEbapis({
        url: this.connectsHost + 'api/get-files',
        method: 'POST',
        data: {
          file_identity: this.meta_data["dossier_credit"].cred_pub_key
        }
      })
      //this.$axios.post(this.connectsHost + 'api/get-files', { file_identity: this.meta_data["dossier_credit"].cred_pub_key })
      .then(function (res) {
        var _res$data$data, _res$data$data2;
        // console.log("resres55",res);
        res.data = JSON.parse(res.data);
        if (((_res$data$data = res.data.data) === null || _res$data$data === void 0 ? void 0 : _res$data$data.length) > 0 || ((_res$data$data2 = res.data.data) === null || _res$data$data2 === void 0 ? void 0 : _res$data$data2.length) != null) {
          _this4.files = res.data.data;
          // console.log("filesfiles",this.files);
          _this4.check_list_diligeances.forEach(function (element, index) {
            var count = 0;
            _this4.files.forEach(function (file) {
              var _element$template;
              if ((file === null || file === void 0 ? void 0 : file.extra_file_template_id) != null && (element === null || element === void 0 || (_element$template = element.template) === null || _element$template === void 0 ? void 0 : _element$template.id) == (file === null || file === void 0 ? void 0 : file.extra_file_template_id)) {
                count++;
              }
            });
            _this4.check_list_diligeances[index]['files'] = count;
            _this4.handleInput();
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
    checkboxValCashCall: function checkboxValCashCall(event, index) {
      if (event.target.checked) {
        this.check_list_diligeances[index]["value"] = event.target.value;
      } else {
        this.check_list_diligeances[index]["value"] = "";
      }
      this.handleInput();
    },
    loadRetrieved: function loadRetrieved() {
      var _this5 = this;
      var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];

      // this.defaultRetract(
      //     false,
      //     this.meta_data["dossier_credit"]?.applied_templ_id
      // );

      if (this.meta_data["dossier_credit"][createdKey] == undefined) {
        // this.formDataToBeWatched =
        //     this.meta_data["dossier_credit"]["cred_pub_tb_200401"];

        if (!['', null, undefined].includes(this.meta_data["dossier_credit"]["cred_pub_tb_200401"])) {
          var _this$meta_data$dossi;
          if (((_this$meta_data$dossi = this.meta_data["dossier_credit"]["cred_pub_tb_200401"]) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi.check_list_diligeances) != "") {
            var _this$meta_data$dossi2, _this$meta_data$dossi3;
            this.check_list_diligeances = (_this$meta_data$dossi2 = this.meta_data["dossier_credit"]["cred_pub_tb_200401"]) === null || _this$meta_data$dossi2 === void 0 ? void 0 : _this$meta_data$dossi2["check_list_diligeances"];
            this.notif_accord_credit_signe = (_this$meta_data$dossi3 = this.meta_data["dossier_credit"]["cred_pub_tb_200401"]) === null || _this$meta_data$dossi3 === void 0 ? void 0 : _this$meta_data$dossi3["notif_accord_credit_signe"];
          }
        }
      }
      if (lentb.length > 0) {
        if (this.meta_data["dossier_credit"][createdKey] != undefined) {
          var _this$meta_data$dossi4;
          this.formDataToBeWatched = this.meta_data["dossier_credit"][createdKey];
          if (((_this$meta_data$dossi4 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi4 === void 0 ? void 0 : _this$meta_data$dossi4.check_list_diligeances) != "") {
            var _this$meta_data$dossi5;
            this.check_list_diligeances = (_this$meta_data$dossi5 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi5 === void 0 ? void 0 : _this$meta_data$dossi5["check_list_diligeances"];
          }
          if (!['', null, undefined].includes(this.meta_data["dossier_credit"]["cred_pub_tb_200401"])) {
            var _this$meta_data$dossi6, _this$meta_data$dossi8;
            if (((_this$meta_data$dossi6 = this.meta_data["dossier_credit"]["cred_pub_tb_200401"]) === null || _this$meta_data$dossi6 === void 0 ? void 0 : _this$meta_data$dossi6.check_list_diligeances) != "") {
              var _this$meta_data$dossi7;
              this.notif_accord_credit_signe = (_this$meta_data$dossi7 = this.meta_data["dossier_credit"]["cred_pub_tb_200401"]) === null || _this$meta_data$dossi7 === void 0 ? void 0 : _this$meta_data$dossi7["notif_accord_credit_signe"];
            }
            if (((_this$meta_data$dossi8 = this.meta_data["dossier_credit"]["cred_pub_tb_200401"]) === null || _this$meta_data$dossi8 === void 0 ? void 0 : _this$meta_data$dossi8.check_list_diligeances) != "") {
              var _this$meta_data$dossi9;
              var check_list_diligeances_from_monteur_doss = (_this$meta_data$dossi9 = this.meta_data["dossier_credit"]["cred_pub_tb_200401"]) === null || _this$meta_data$dossi9 === void 0 ? void 0 : _this$meta_data$dossi9["check_list_diligeances"];
              this.check_list_diligeances.forEach(function (el, ind) {
                if (el !== null && el !== void 0 && el.from_monteur_doss) {
                  var found = check_list_diligeances_from_monteur_doss.find(function (el0) {
                    return (el0 === null || el0 === void 0 ? void 0 : el0.id) == (el === null || el === void 0 ? void 0 : el.id);
                  });
                  if (found) {
                    _this5.check_list_diligeances[ind] = found;
                  }
                }
              });
              var new_lists = [];
              check_list_diligeances_from_monteur_doss.forEach(function (el, ind) {
                var found = _this5.check_list_diligeances.find(function (el0) {
                  return (el0 === null || el0 === void 0 ? void 0 : el0.id) == (el === null || el === void 0 ? void 0 : el.id);
                });
                if ([null, undefined].includes(found)) {
                  _this5.check_list_diligeances.splice(14, 0, el);
                }
              });
              this.handleInput();
            }
          }
        }
      }
    },
    convertNumber: function convertNumber(valeur) {
      return Number(String(valeur).replace(/\s+/g, ""));
    },
    // AJOUTER
    launchAutoSaver: function launchAutoSaver() {
      var _this6 = this;
      _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["default"].loadUserData().then(function (res) {
        _this6.send2Backend(res, 0, 0);
      })["catch"](function (err) {
        _this6.loadWithError(err);
      });
    },
    addMore: function addMore() {
      this.check_list_diligeances.push({
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_11__["default"])(),
        name: "",
        value: "",
        parent: "",
        checked: true,
        disabled: false,
        comment: "",
        numero_compte: "",
        template: "",
        files: 0,
        from_monteur_doss: false
      });
    },
    remove: function remove(index) {
      this.check_list_diligeances.splice(index, 1);
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
      this.formDataToBeWatched.check_list_diligeances = this.check_list_diligeances;
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV1.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV1.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _services_connects_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services/connects.service */ "./resources/js/services/connects.service.js");
/* harmony import */ var _services_proxy_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/proxy.service */ "./resources/js/services/proxy.service.js");
/* harmony import */ var _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @johmun/vue-tags-input */ "./node_modules/@johmun/vue-tags-input/dist/vue-tags-input.js");
/* harmony import */ var _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_5__);
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
  name: "fiche-lecture",
  display: "Fiche de lecture",
  components: {
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.ChevronDownIcon,
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.TrashIcon,
    AirplayIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.AirplayIcon,
    BookOpenIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.BookOpenIcon,
    VueTagsInput: (_johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_5___default())
  },
  props: _defineProperty({
    meta_data: Object,
    tb_name: String,
    tb_display_name: String
  }, "tb_display_name", String),
  created: function created() {
    var _pub_workflow;
    var _this$meta_data$dossi = this.meta_data["dossier_credit"],
      stage = _this$meta_data$dossi.pub_workflow_curr_stage,
      pub_workflow = _this$meta_data$dossi.pub_workflow;
    var sup_id = (_pub_workflow = pub_workflow[stage + 1]) === null || _pub_workflow === void 0 ? void 0 : _pub_workflow.responsible_id;
    var roles = ['r472oAxtaFJSlsh5', 'DUxMP2ZQheGFreQt5z2s', 'yYnev325ob1vDkgq', '2jFxY9ujYHqtMG88KDRR', 'gOLOzQVDyl2eoBLO'];
    var users_id = [];
    if (!['', null, undefined].includes(sup_id)) {
      users_id.push(sup_id);
    }
    this.getUsersDefault(roles, users_id);
  },
  mounted: function mounted() {
    var _this = this;
    this.loadRetrieved();
    this.loadTbAttrs(); // charge les attributs + sous attributs des tables
    this.tableClosedOrOpened();
    EventBus.$on('send-fiche', function (data) {
      _this.$modal.hide('fiche_lecture');
    });
  },
  computed: {
    filteredUsers: function filteredUsers() {
      this.receivers = this.users.map(function (el) {
        return _objectSpread({
          text: "".concat(el.name, " ( ").concat(el.role[0].display_name, " )")
        }, el);
      });
      return this.receivers;
    },
    filteredUsersDefault: function filteredUsersDefault() {
      var users = this.usersDefault.map(function (el) {
        return _objectSpread({
          text: "".concat(el.name, " ( ").concat(el.role[0].display_name, " )")
        }, el);
      });
      return users;
    },
    defaultActors: function defaultActors() {
      var _pub_workflow2;
      var caf = this.filteredUsersDefault.find(function (el) {
        return ['r472oAxtaFJSlsh5', "DUxMP2ZQheGFreQt5z2s"].includes(el.role_id);
      });
      var ca = this.filteredUsersDefault.find(function (el) {
        return (el === null || el === void 0 ? void 0 : el.role_id) == 'yYnev325ob1vDkgq';
      });
      var _this$meta_data$dossi2 = this.meta_data["dossier_credit"],
        stage = _this$meta_data$dossi2.pub_workflow_curr_stage,
        pub_workflow = _this$meta_data$dossi2.pub_workflow;
      var roles_dajc = ["2jFxY9ujYHqtMG88KDRR", "gOLOzQVDyl2eoBLO"];
      var responsibles = this.filteredUsersDefault.filter(function (el) {
        return roles_dajc.includes(el === null || el === void 0 ? void 0 : el.role_id);
      });
      var sup_id = (_pub_workflow2 = pub_workflow[stage + 1]) === null || _pub_workflow2 === void 0 ? void 0 : _pub_workflow2.responsible_id;
      var sup = this.filteredUsersDefault.find(function (el) {
        return el.id == sup_id;
      });
      var actors = [caf, ca, sup];
      if (!['', null, undefined].includes(responsibles) && responsibles.length > 0) {
        actors = actors.concat(responsibles);
      }
      return actors.filter(function (el) {
        return el != null;
      });
    }
  },
  data: function data() {
    var vm = this;
    return {
      isLoding: {
        0: false
      },
      buttonStatus: {
        0: true
      },
      filterInput: "",
      tagValue: undefined,
      tagging: false,
      users: [],
      taggedUsers: [],
      autocompleteItems: [],
      tag: {
        0: ""
      },
      tg: "",
      seens: {
        0: true
      },
      seen1: true,
      tags: {
        0: []
      },
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
      }, {
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
      listingNote: false,
      dossier_credit: null,
      toDelete: '',
      meta_parseable: {
        cred_pub_key: this.meta_data["cred_pub_key"],
        tb_name: this.tb_name
      },
      display_response: false,
      formDataToBeWatched: {
        fiche_suivis: "",
        notes: []
      },
      fiche_suivis: [{
        fiche: [{
          question: "",
          reponse: "",
          is_answered: false
        }],
        is_answered: false,
        update_at: "",
        created_at: new Date(),
        created_by: "",
        sender: "",
        receivers: "",
        has_notified: false
      }],
      isResponse: false,
      debounce: null,
      searchUser: false,
      usersDefault: []
    };
  },
  methods: {
    determineSRC: function determineSRC() {
      this.getUsers();
      var src = this.users.filter(function (el) {
        if ((el === null || el === void 0 ? void 0 : el.role_id) == 'tyJLxuAh6F2DJR6e') {
          return el;
        }
      });
      src = src[0];
      return src;
    },
    manageButton: function manageButton(index) {
      console.log("indexxx", index);
      console.log("isLoding", this.isLoding);
      console.log("buttonStatus", this.buttonStatus);
      if (this.isLoding[index] == false && this.buttonStatus[index] == false) {
        return true;
      }
      return false;
    },
    getTag: function getTag(index) {
      this.tg = this.tag[index];
    },
    retractDynamique: function retractDynamique(index) {
      this.$set(this.seens, index, !this.seens[index]);
    },
    setColor: function setColor(elt) {
      var _elt$;
      if (((_elt$ = elt[1]) === null || _elt$ === void 0 ? void 0 : _elt$.reponse) == "") {
        return "text-dark";
      }
    },
    addMoreFiche: function addMoreFiche() {
      var receivers = this.defaultActors;
      var notified_users = _toConsumableArray(receivers);
      this.tags[this.fiche_suivis.length] = _toConsumableArray(receivers);
      this.fiche_suivis[0].sender = this.authcheckUsr;
      this.fiche_suivis.push({
        fiche: [{
          question: "",
          reponse: "",
          is_answered: false
        }],
        is_answered: false,
        update_at: "",
        created_at: new Date(),
        created_by: "",
        sender: this.authcheckUsr,
        receivers: receivers,
        notified_users: notified_users,
        has_notified: false
      });
      this.$set(this.seens, this.fiche_suivis.length - 1, true);
      this.$set(this.isLoding, this.fiche_suivis.length - 1, false);
      this.$set(this.buttonStatus, this.fiche_suivis.length - 1, true);
      console.log("isLoding", this.isLoding);
    },
    removeFiche: function removeFiche(index) {
      this.toDelete = index;
      this.$modal.show("confirm_supp_fiche_suivis", index);
    },
    deleteFiche: function deleteFiche(index) {
      this.fiche_suivis.splice(index, 1);
      this.$modal.hide("confirm_supp_fiche_suivis");
      this.toDelete = '';
    },
    closeModal: function closeModal() {
      this.$modal.hide("confirm_supp_fiche_suivis");
    },
    // submitFicheSuivi(item) {
    //     const loaders = {};
    //     loaders[item.id] = true;
    //     this.ficheLoading = Object.assign({}, this.ficheLoading, loaders);
    //     // console.log('item', item)
    //     item.content.receivers = this.tags
    //     item.content.sender = this.user
    //     Auth.loadUserData().then((res) => {
    //        this.$axios.post(this.ebapisHost + "creditbuilder/api/v1/save-fiche-suivi/", {
    //             cred_pub_key: this.cred_pub_key,
    //             sender: res.data,
    //             receivers: this.tags,
    //             fiche_suivis: item["content"],
    //             fiche_id: item.id - 1
    //         }).then((response) => {
    //             this.$toasted.show("Reponses sauvegardées avec succès");
    //             this.isLoding = false;
    //             loaders[item.id] = false;
    //             this.ficheLoading = Object.assign(
    //                 {},
    //                 this.ficheLoading,
    //                 loaders
    //             );
    //             this.$set(this.ficheLoading, item.id, false);
    //             this.buttonStatus = false;
    //             // this.NotifyUser(res.data, this.tags)
    //             // EventBus.$emit("savedclosed-table", a)
    //             // this.$forceUpdate();
    //             this.$emit("created")
    //         }).catch((error) => {
    //             console.log(error);
    //             this.isLoding = false;
    //             loaders[item.id] = false;
    //             this.ficheLoading = Object.assign(
    //                 {},
    //                 this.ficheLoading,
    //                 loaders
    //             );
    //             this.$set(this.ficheLoading, item.id, false);
    //         })
    //     })
    // },
    NotifyUser: function NotifyUser(index) {
      var _this$tags$index,
        _this2 = this;
      if (((_this$tags$index = this.tags[index]) === null || _this$tags$index === void 0 ? void 0 : _this$tags$index.length) > 0) {
        this.$set(this.isLoding, index, true);
        _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["default"].loadUserData().then(function (res) {
          _this2.$axios.post(_this2.ebapisHost + "notifications/api/v1/questions-responses-notifications/", {
            cred_pub_key: _this2.meta_parseable["cred_pub_key"],
            sender: res.data,
            receivers: _this2.tags[index],
            what_tobe_notified: "FICHE-SUIVI"
          }).then(function (response) {
            _this2.tags = [];
            EventBus.$emit("message-send");
            _this2.$toasted.show("Message envoyé avec succès");
            _this2.$set(_this2.isLoding, index, false);
            _this2.$set(_this2.buttonStatus, index, false);
            _this2.formDataToBeWatched.fiche_suivis[index]["sender"] = res.data;
            _this2.formDataToBeWatched.fiche_suivis[index]["has_notified"] = true;
            _this2.fiche_suivis[index]["has_notified"] = true;
            EventBus.$emit('launch-bulk-save');
          })["catch"](function (error) {
            console.log(error);
          });
        })["catch"](function (err) {
          _this2.loadWithError(err);
        });
      } else {
        this.$toasted.show("Veuillez saisir le collaborateur à notifier");
      }
    },
    initFicheLecture: function initFicheLecture() {
      this.fiche_suivis = [[{
        question: "",
        niveau_risque: "",
        avis: ""
      }, {
        reponse: "",
        niveau_risque: "",
        avis: ""
      }]];
    },
    tableClosedOrOpened: function tableClosedOrOpened() {
      this.seen = this.fetchClosedTables(this.tb_name + this.meta_data['cred_pub_key']);
    },
    addMore: function addMore(index) {
      var _this$fiche_suivis$in;
      (_this$fiche_suivis$in = this.fiche_suivis[index]) === null || _this$fiche_suivis$in === void 0 || _this$fiche_suivis$in.fiche.push({
        question: "",
        reponse: "",
        is_answered: false
      });
      this.handleInput();
    },
    remove: function remove(index, idx) {
      this.fiche_suivis[index].fiche.splice(idx, 1);
      this.handleInput();
    },
    tagUser: function tagUser(user) {
      this.formDataToBeWatched.commentaire = this.formDataToBeWatched.commentaire.replace(this.formDataToBeWatched.commentaire.at(-1), '') + "<span class=' text-primary' style='color:#e67e22'>" + user.name + ' - ' + user.role_name + "</span> &nbsp;";
      this.tagValue = this.formDataToBeWatched.commentaire;
      this.taggedUsers.push(user);
      this.tagging = false;
      this.formDataToBeWatched.user = user;
    },
    pressAtKey: function pressAtKey(event) {
      this.tagging = true;
    },
    getUsers: function getUsers() {
      //    this.$axios.post(this.ebapisHost + "creditbuilder/api/v1/load-all-doc-users/", {
      //         cred_pub_key: this.meta_data?.cred_pub_key
      //     }).then((data) => {
      //         this.users = data.data.users
      //     }).catch(err => {
      //         console.dir(err)
      //     });
    },
    openNotesModal: function openNotesModal() {
      var listing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.listingNote = listing;
      this.$modal.show(this.tb_name);
    },
    loadRetrieved: function loadRetrieved() {
      var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];
      if (lentb.length > 0) {
        if (this.meta_data["dossier_credit"][createdKey] != undefined) {
          this.formDataToBeWatched = this.meta_data["dossier_credit"][createdKey];
          if (this.meta_data["dossier_credit"][createdKey]["fiche_suivis"] != "") {
            this.fiche_suivis = this.formDataToBeWatched["fiche_suivis"];
            this.tags = this.fiche_suivis.reduce(function (cum, curr, index) {
              var data = {};
              data[index] = curr.notified_users;
              cum = _objectSpread(_objectSpread({}, cum), data);
              return cum;
            }, {});
            this.initLoding();
            this.initButtonStatus();
          }
        }
        // Close table by default
        // this.defaultRetract(false, this.meta_data["dossier_credit"]?.applied_templ_id)
      }
    },
    setTbVal: function setTbVal(val) {
      this.cred_pub_key = val;
    },
    loadWithError: function loadWithError(err) {},
    send2Backend: function send2Backend(res, newVal, oldVal) {
      this.authcheck = true;
      this.authcheckUsr = res.data;
      this.authcheckStatus = res.status;
      if (this.authcheckStatus === 401) {}
      if (this.authcheck === true) {
        this.$emit("autosaving");
        this.$axios.post(this.ebapisHost + "creditbuilder/api/v1/autosaving/", {
          user: this.authcheckUsr,
          meta_parseable: this.meta_parseable,
          filledData: this.formDataToBeWatched,
          loadDossier: true
        }).then(function (response) {
          this.$emit("autosaving");
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
        "tb_name": this.tb_name + this.meta_data['cred_pub_key'],
        "status": this.seen
      };
      EventBus.$emit("savedclosed-table", a);
    },
    defaultRetract: function defaultRetract(rc, ra) {
      if (ra != null) {
        this.seen = rc;
        var a = {
          "tb_name": this.tb_name + this.meta_data['cred_pub_key'],
          "status": this.seen
        };
        EventBus.$emit("savedclosed-table", a);
      }
    },
    initLoding: function initLoding() {
      var _this3 = this;
      //console.log("initLoding", this.fiche_suivis)
      if (this.fiche_suivis != undefined) {
        this.fiche_suivis.forEach(function (element, key) {
          _this3.$set(_this3.isLoding, key, false);
        });
      }
    },
    initButtonStatus: function initButtonStatus() {
      var _this4 = this;
      if (this.fiche_suivis != undefined) {
        this.fiche_suivis.forEach(function (element, key) {
          _this4.$set(_this4.buttonStatus, key, true);
        });
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
        id: "ca6-head"
      };
      this.$emit("load-buffer", p);
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
    somX4: function somX4(ob, key) {
      var som = 0;
      var val1 = ob.replace(/\s+/g, "");
      var val2 = key.replace(/\s+/g, "");
      som = val1 + val2;
      return som;
    },
    handleInput: function handleInput() {
      this.formDataToBeWatched.fiche_suivis = this.fiche_suivis;
      this.formDataToBeWatched.sender = this.authcheckUsr;
    },
    handleInput1: function handleInput1(evt, index) {
      this.fiche_suivis[index].receivers = this.tags[index];
      this.fiche_suivis[index].notified_users = this.tags[index];
      this.fiche_suivis[index].sender = this.authcheckUsr;
      this.handleInput();
    },
    setButton: function setButton(evt, index) {
      var _this5 = this;
      console.log("index", index);
      console.log("this.fiche_suivis", this.fiche_suivis);
      this.fiche_suivis.forEach(function (element) {
        element.fiche.forEach(function (elt) {
          if (elt.question != "") {
            _this5.$set(_this5.buttonStatus, index, true);
          }
        });
      });
    },
    instruction3: function instruction3(id) {
      var id0 = '#' + id;
      window.$(id0).modal('show');
    },
    updateTags: function updateTags(newTags, ficheIndex) {
      this.users = [];
      newTags = newTags.filter(function (el) {
        return el === null || el === void 0 ? void 0 : el.email;
      });
      this.tags[ficheIndex] = newTags;
    },
    getUsersDefault: function getUsersDefault(roles, users_id) {
      var _this$meta_data,
        _this6 = this;
      var url = this.ebapisHost + "creditbuilder/api/v1/load-all-doc-users/";
      var data = {
        "search": "",
        "limit": 10,
        "roles": roles,
        "users_id": users_id,
        "cred_pub_key": (_this$meta_data = this.meta_data) === null || _this$meta_data === void 0 ? void 0 : _this$meta_data.cred_pub_key
      };
      this.$axios.post(url, data).then(function (response) {
        var data = response.data.data;
        if (!['', null, undefined].includes(data) && data.length > 0) {
          _this6.usersDefault = data;
        }
        _this6.searchUser = false;
      })["catch"](function (error) {
        _this6.searchUser = false;
        console.warn('Oh. Something went wrong');
      });
    },
    initItems: function initItems() {
      var _this7 = this;
      if (this.tg.trim().length < 3) return;
      clearTimeout(this.debounce);
      this.debounce = setTimeout(function () {
        var _this7$meta_data;
        _this7.searchUser = true;
        var url = _this7.ebapisHost + "creditbuilder/api/v1/load-all-doc-users/";
        var data = {
          "search": _this7.tg,
          "limit": 10,
          "cred_pub_key": (_this7$meta_data = _this7.meta_data) === null || _this7$meta_data === void 0 ? void 0 : _this7$meta_data.cred_pub_key
        };
        _this7.$axios.post(url, data).then(function (response) {
          var data = response.data.data;
          var message = response.data.message;
          if (!['', null, undefined].includes(data) && data.length > 0) {
            _this7.users = data;
          } else {
            _this7.users = [];
            // this.$toasted.show(message, {
            //     duration: 5000
            // })
          }
          _this7.$axios.post('/api/search_user', {
            "search": _this7.tg,
            "limit": 10
          }).then(function (response) {
            var _others_users, _this7$users;
            var data = response.data.data;
            var message = response.data.message;
            var others_users = [];
            if (!['', null, undefined].includes(data) && data.length > 0) {
              others_users = data;
            } else {
              others_users = [];
            }
            if (((_others_users = others_users) === null || _others_users === void 0 ? void 0 : _others_users.length) > 0) {
              others_users.forEach(function (el) {
                var find = _this7.users.find(function (u) {
                  return (u === null || u === void 0 ? void 0 : u.id) == (el === null || el === void 0 ? void 0 : el.id);
                });
                if (['', null, undefined].includes(find)) {
                  _this7.users.push(el);
                }
              });
            }
            if (((_this7$users = _this7.users) === null || _this7$users === void 0 ? void 0 : _this7$users.length) == 0) {
              _this7.$toasted.show(message, {
                duration: 5000
              });
            }
            _this7.searchUser = false;
          })["catch"](function (error) {
            _this7.searchUser = false;
            console.warn('Oh. Something went wrong');
          });

          // this.searchUser = false
        })["catch"](function (error) {
          _this7.searchUser = false;
          console.warn('Oh. Something went wrong');
        });
      }, 800);
    }
  },
  watch: {
    formDataToBeWatched: {
      handler: function handler(newVal, oldVal) {
        this.autosaving(newVal, oldVal);
      },
      deep: true,
      immediate: true
    },
    filteredUsersDefault: function filteredUsersDefault() {
      if (this.fiche_suivis[0].receivers == "") {
        this.fiche_suivis[0].receivers = this.defaultActors;
        this.fiche_suivis[0].notified_users = this.defaultActors;
        this.tags[0] = this.defaultActors;
        this.fiche_suivis[0].sender = this.authcheckUsr;
        this.formDataToBeWatched.fiche_suivis = this.fiche_suivis;
      }
    },
    tg: 'initItems'
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV2.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV2.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../helpers/helper */ "./resources/js/helpers/helper.js");
/* harmony import */ var _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vueform/multiselect/dist/multiselect.vue2 */ "./node_modules/@vueform/multiselect/dist/multiselect.vue2.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _services_proxy_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../services/proxy.service */ "./resources/js/services/proxy.service.js");
/* harmony import */ var _services_connects_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../services/connects.service */ "./resources/js/services/connects.service.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../helpers/indexedDB */ "./resources/js/helpers/indexedDB.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_helpers_indexedDB__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* provided dependency */ var process = __webpack_require__(/*! process/browser.js */ "./node_modules/process/browser.js");










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
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_9__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_9__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_9__.ChevronDownIcon,
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_9__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_9__.TrashIcon,
    AirplayIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_9__.AirplayIcon,
    BookOpenIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_9__.BookOpenIcon,
    Multiselect: _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  computed: {},
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
    this.tableClosedOrOpened();
    this.loadRetrieved();
    this.loadTbAttrs();
    EventBus.$on("created-extra-file-template", function (data) {
      _this.encodage_effectue.forEach(function (element, index) {
        var _data$template;
        if ((element === null || element === void 0 ? void 0 : element.name) == (data === null || data === void 0 || (_data$template = data.template) === null || _data$template === void 0 ? void 0 : _data$template.name)) {
          var _data$template2, _data$template3, _data$template4;
          _this.encodage_effectue[index]['template'] = {
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
    this.getFiles();
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
      disp: false,
      connectsHost: _services_connects_service__WEBPACK_IMPORTED_MODULE_6__["default"].loadablehost(),
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
      files: [],
      isChecked: false,
      q3isChecked: false,
      q4isChecked: false,
      encodage_effectue: [{
        name: "L'encodage a t-il été effectué",
        slug: "encodage",
        value: "",
        files: 0,
        template: "",
        numero_encodage: "",
        date_encodage: ""
      }],
      formDataToBeWatched: {
        encodage_effectue: "",
        notes: []
      },
      listingNote: true
    };
  },
  methods: {
    handleDoubleClickOrClick: function handleDoubleClickOrClick(event, index) {
      var _this2 = this;
      EventBus.$emit("open-extra-file-explorer");
      setTimeout(function () {
        var _this2$encodage_effec;
        EventBus.$emit("data-extra-file-explorer", {
          name: (_this2$encodage_effec = _this2.encodage_effectue[index]) === null || _this2$encodage_effec === void 0 ? void 0 : _this2$encodage_effec.name
        });
      }, 500);
    },
    getFiles: function getFiles() {
      var _this3 = this;
      _services_proxy_service__WEBPACK_IMPORTED_MODULE_5__["default"].proxyEbapis({
        url: this.connectsHost + 'api/get-files',
        method: 'POST',
        data: {
          file_identity: this.meta_data["dossier_credit"].cred_pub_key
        }
      })
      //this.$axios.post(this.connectsHost + 'api/get-files', { file_identity: this.meta_data["dossier_credit"].cred_pub_key })
      .then(function (res) {
        var _res$data$data, _res$data$data2;
        res.data = JSON.parse(res.data);
        if (((_res$data$data = res.data.data) === null || _res$data$data === void 0 ? void 0 : _res$data$data.length) > 0 || ((_res$data$data2 = res.data.data) === null || _res$data$data2 === void 0 ? void 0 : _res$data$data2.length) != null) {
          _this3.files = res.data.data;
          _this3.encodage_effectue.forEach(function (element, index) {
            var count = 0;
            _this3.files.forEach(function (file) {
              var _element$template;
              if ((file === null || file === void 0 ? void 0 : file.extra_file_template_id) != null && (element === null || element === void 0 || (_element$template = element.template) === null || _element$template === void 0 ? void 0 : _element$template.id) == (file === null || file === void 0 ? void 0 : file.extra_file_template_id)) {
                count++;
              }
            });
            _this3.encodage_effectue[index]['files'] = count;
            _this3.handleInput();
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
    launchAutoSaver: function launchAutoSaver() {
      var _this4 = this;
      _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["default"].loadUserData().then(function (res) {
        _this4.send2Backend(res, 0, 0);
      })["catch"](function (err) {
        _this4.loadWithError(err);
      });
    },
    updateValue: function updateValue(val) {
      alert("value to update");
      alert(JSON.stringify(val));
    },
    loadRetrieved: function loadRetrieved() {
      var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];
      // Close table by default
      //    this.defaultRetract(
      //         false,
      //         this.meta_data["dossier_credit"]?.applied_templ_id
      //     );
      if (lentb.length > 0) {
        if (this.meta_data["dossier_credit"][createdKey] != undefined) {
          var _this$meta_data$dossi;
          this.formDataToBeWatched = this.meta_data["dossier_credit"][createdKey];
          if (((_this$meta_data$dossi = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi["encodage_effectue"]) != undefined) {
            var _this$meta_data$dossi2;
            this.encodage_effectue = (_this$meta_data$dossi2 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi2 === void 0 ? void 0 : _this$meta_data$dossi2["encodage_effectue"];
          }
        }
      }
    },
    checkboxValCashCall: function checkboxValCashCall(event, index) {
      if (event.target.checked) {
        this.encodage_effectue[index]["value"] = event.target.value;
      } else {
        this.encodage_effectue[index]["value"] = "";
      }
      this.handleInput();
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
    handleInput: function handleInput() {
      this.formDataToBeWatched.encodage_effectue = this.encodage_effectue;
    },
    instruction3: function instruction3(id) {
      var id0 = "#" + id;
      window.$(id0).modal("show");
    },
    formDataVars: function formDataVars(event, index) {
      this.formDataToBeWatched.encodage_effectue[index].date_encodage = event[1];
      this.handleInput();
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV3.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV3.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/ContextMenu */ "./resources/js/components/shared/ContextMenu.vue");
/* harmony import */ var _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/ContextMenuItem */ "./resources/js/components/shared/ContextMenuItem.vue");
/* harmony import */ var _services_connects_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services/connects.service */ "./resources/js/services/connects.service.js");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/auth.service */ "./resources/js/services/auth.service.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }






window.$ = window.jQuery = __webpack_require__(/*! jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "FichiersAnnexes",
  display: "FichiersAnnexes",
  components: {
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_5__.PlusIcon,
    EyeIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_5__.EyeIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_5__.TrashIcon,
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_5__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_5__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_5__.ChevronDownIcon,
    ContextMenu: _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__["default"],
    ContextMenuItem: _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    meta_data: Object,
    tb_name: String,
    tb_display_name: String
  },
  created: function created() {},
  mounted: function mounted() {
    var _this = this;
    EventBus.$on("updated-extra-file-upload", function (data) {
      _this.fileToUpload = {
        file_name: '',
        file_url: ""
      };
      _this.getFiles();
    });
    this.tableClosedOrOpened();
    this.loadRetrieved();
    this.loadTbAttrs();
    _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["default"].loadUserData().then(function (res) {
      _this.userConnected = res.data.user_id;
      _this.authBeforeRequest(_this.getFiles);
    })["catch"](function (err) {
      _this.$toasted("Erreur vous n'êtes pas connecté.");
    });
  },
  computed: {},
  data: function data() {
    var _ref;
    var vm = this;
    return _ref = {
      authorizedExt: ["jpg", "png", "jpeg", "pdf", "PDF", "JPG", "PNG", "JPEG", "doc", "docx", "xlsx", "xls", "pptx", "ppt", "XLSX", "XLS", "PPTX", "PPT"],
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_3__["default"].host,
      httpHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_3__["default"].loadableHttpHost(),
      connectsHost: _services_connects_service__WEBPACK_IMPORTED_MODULE_2__["default"].loadablehost(),
      seen: true,
      userConnected: null,
      adding: "",
      rendedpdf: null,
      listingNote: false,
      fileToAddName: "",
      fileToAdd: ""
    }, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_ref, "adding", false), "currentFile", null), "isFullscreen", true), "files", ""), "deleteLoading", {}), "editLoading", {}), "uploadLoading", {}), "updating", {
      index: false
    }), "isLoading", true), "isUploading", false), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_ref, "fileToUpload", {
      file_name: '',
      file_url: "Gabarit"
    }), "selectedUpload", [{
      label: "Gabarit",
      "class": "selected-gray",
      id: 'gabarit'
    }]), "contextList", [
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
    }]), "meta_parseable", {
      cred_pub_key: this.meta_data['cred_pub_key'],
      tb_name: this.tb_name
    }), "formDataToBeWatched", {
      notes: [],
      files: []
    });
  },
  methods: {
    renderDoc: function renderDoc(url) {
      this.rendedpdf = url;
      this.$modal.show('renderpdf');
    },
    showRefs: function showRefs() {
      // console.log("refs", this.$refs)
    },
    tableClosedOrOpened: function tableClosedOrOpened() {
      this.seen = this.fetchClosedTables(this.tb_name + this.meta_data['cred_pub_key']);
    },
    openNotesModal: function openNotesModal() {
      var listing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.listingNote = listing;
      this.$modal.show(this.tb_name);
    },
    fullscreen: function fullscreen(evt) {
      evt.target.requestFullscreen();
      this.isFullscreen = true;
      this.$toasted.show('Appuyez sur le boutton eschap pour sortir du mode plein écran');
    },
    preview: function preview(file) {
      this.currentFile = file;
      // this.$modal.show('preview1')
      var urlImage = this.httpHost + '://' + file.file_url;
      this.$modal.show('imagereader');
      EventBus.$emit('imagereader-url', urlImage);
    },
    openPDFReaderModal: function openPDFReaderModal(url) {
      this.$modal.show('pdfreader');
      EventBus.$emit('pdfreader-url', url);
    },
    downloadFile: function downloadFile(file) {
      var url = window.location.origin + '/file?f=' + file;
      window.open(url, '_blank');
    },
    authBeforeUpload: function authBeforeUpload(_ref2, index) {
      var _this2 = this;
      var id = _ref2.id,
        name = _ref2.name;
      var updating = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      if (updating) this.updating[index] = true;
      this.uploadLoading[index] = true;
      this.$set(this.uploadLoading, index, true);
      this.isUploading = true;
      _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["default"].loadUserData().then(function (res) {
        var _file$name;
        var user = res.data;
        _this2.userConnected = user.user_id;
        var limitSize = 512000 * 1024;
        var file = _this2.$refs[id].files[0];
        if (_this2.authorizedExt.includes(file === null || file === void 0 || (_file$name = file.name) === null || _file$name === void 0 ? void 0 : _file$name.split('.').at(-1))) {
          if (limitSize < file.size) {
            _this2.$toasted.show("La taille de ce fichier est plus élévé que la taille autorisée de 50 Mo.");
            _this2.isLoading = false;
            _this2.isUploading = false;
            return;
          }
          var data = new FormData();
          data.append('user_id', user.user_id);
          data.append('file_name', name);
          data.append('file_url', file);
          data.append('entity_id', user.type_entite);
          data.append('entity_name', user.nom_entite);
          data.append('application_id', user.app_id);
          data.append('dir_name', 'null');
          data.append('file_identity', _this2.meta_data.cred_pub_key);
          // this.uploadLoading[index] = false
          _this2.uploadFile(data, index);
          _this2.$refs[id].value = null;
        } else {
          _this2.$toasted.show("Le type de fichier choisi n'est pas autorisé. Veuillez choisir un autre fichier");
        }
        //   console.log("data:" , this.$refs[id][0].files[0])
      })["catch"](function (err) {
        _this2.uploadLoading[index] = false;
        _this2.isUploading = false;
        console.dir(err);
        // this.loadWithError(err)
      });
    },
    startUpdating: function startUpdating(index) {
      this.updating[index] = !Boolean(this.updating[index]);
      this.updating = _objectSpread({}, this.updating);
    },
    authBeforeUpdate: function authBeforeUpdate(_ref3, index) {
      var _this3 = this;
      var id = _ref3.id,
        name = _ref3.name;
      // if (updating) this.updating[index] = true
      this.uploadLoading[index] = true;
      _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["default"].loadUserData().then(function (res) {
        var user = res.data;
        var file = _this3.$refs[id][0].files[0];
        var data = new FormData();
        data.append('user_id', user.user_id);
        data.append('new_file', name);
        data.append('file_url', file);
        data.append('entity_id', user.type_entite);
        data.append('entity_name', user.nom_entite);
        data.append('application_id', user.app_id);
        data.append('file_identity', _this3.meta_data.cred_pub_key);
        _this3.uploadLoading[index] = false;
        _this3.updateFile(data, index);
      })["catch"](function (err) {
        _this3.uploadLoading[index] = false;
        console.dir(err);
        _this3.loaloadWithError(err);
      });
    },
    addFileType: function addFileType() {
      // console.log("fileToUpload",this.fileToUpload)
      this.formDataToBeWatched.files = this.selectedUpload;
      this.selectedUpload.unshift(this.fileToAdd);
      // this.fileToUpload = this.fileToUpload.filter(el => el.label !== this.fileToAdd.label)
      this.fileToAdd = "";
      this.adding = false;
      //   this.fileToUpload = this.fileToUpload.filter(el => el.label !== this.fileToAdd.label)
      //   this.fileToAdd = ""
      //   this.adding = false
    },
    addNewFile: function addNewFile() {
      this.fileToUpload.push({
        nom: "",
        label: ""
      });
      //   if (this.adding) return
      //   this.adding = true
    },
    removeFile: function removeFile(index) {
      this.fileToUpload.splice(index, 1);
    },
    getFiles: function getFiles() {
      var _this4 = this;
      this.isLoading = true;
      this.$axios.post(this.connectsHost + 'api/get-files', {
        file_identity: this.meta_data.cred_pub_key
      }).then(function (res) {
        res.data = JSON.parse(res.data);
        _this4.files = res.data.data.filter(function (file) {
          return !file.file_type && file.extra_file_template_id == undefined && _this4.userConnected == file.user_id;
        });
        var files_list = [];
        _this4.files.forEach(function (el) {
          var ext = el.file_url.split('.').at(-1).toLowerCase();
          el.file_url = el.file_url;
          el.ext = ext;
          if (el.extra_file_template_id == undefined) {
            files_list.push(el);
          }

          // console.log("slectedUplaod", this.selectedUpload)
          // this.selectedUpload.forEach((elem, index) => {
          //   if (elem.label === el.file_name) {
          //     this.selectedUpload[index].file = el
          //     this.selectedUpload = [...this.selectedUpload]
          //   }
          //   else {
          //     if (!Boolean(this.selectedUpload.map(selected => selected.label).includes(el.file_name))) {

          //       const toAdd = this.fileToUpload.find(element => el.file_name === element.label)
          //       this.fileToUpload.splice(this.fileToUpload.indexOf(toAdd), 1)
          //       toAdd.file = el
          //       this.selectedUpload.push(toAdd)

          //     }
          //   }
          // })
        });
        _this4.formDataToBeWatched.files = files_list;
        //   console.log("selectedUpload", this.selectedUpload)
        // this.$toasted.show('Fichier récupéré avec succès')
        _this4.isLoading = false;
      })["catch"](function (err) {
        console.dir(err);
        _this4.isLoading = false;
      });
    },
    uploadFile: function uploadFile(data, index) {
      var _this5 = this;
      this.uploadLoading[index] = true;
      var headers = {
        'Content-Type': 'multipart/form-data'
      };
      // console.log(data)
      this.$axios.post(this.connectsHost + 'api/upload-file', data, headers).then(function (res) {
        var file = res.data.data;
        var ext = file.file_url.split('.').at(-1).toLowerCase();
        file.ext = ext;
        _this5.currentFile = _objectSpread({}, file);
        _this5.authBeforeRequest(_this5.getFiles);
        _this5.$toasted.show(res.data.message);
        /* this.fileToUpload = [{
              file_name: '',
              file_url: "",
          }] */
        _this5.fileToUpload = {
          file_name: '',
          file_url: ""
        };
        _this5.uploadLoading[index] = false;
        _this5.isUploading = false;
      })["catch"](function (err) {
        console.dir(err);
        _this5.uploadLoading[index] = false;
        _this5.isUploading = false;
      });
    },
    updateFile: function updateFile(data, index) {
      var _this6 = this;
      this.uploadLoading[index] = true;
      var headers = {
        'Content-Type': 'multipart/form-data'
      };
      this.$axios.post(this.connectsHost + 'api/update-file', data, headers).then(function (res) {
        var file = res.data.data;
        var ext = file.file_url.split('.').at(-1).toLowerCase();
        file.ext = ext;
        _this6.currentFile = _objectSpread({}, file);
        _this6.authBeforeRequest(_this6.getFiles);
        _this6.$toasted.show(res.data.message);
        _this6.uploadLoading[index] = false;
        _this6.updating[index] = !Boolean(_this6.updating[index]);
        _this6.updating = _objectSpread({}, _this6.updating);
        _this6.fileToUpload = [{
          file_name: '',
          file_url: ""
        }];
      })["catch"](function (err) {
        console.dir(err);
        _this6.uploadLoading[index] = false;
      });
    },
    deleteFile: function deleteFile(data, file, index) {
      var _this7 = this;
      this.deleteLoading[index] = true;
      this.currentFile = file;
      var headers = {
        'Content-Type': 'multipart/form-data'
      };
      this.$axios.post(this.connectsHost + 'api/delete-file', data, headers).then(function (res) {
        _this7.$toasted.show(res.data.message);
        _this7.deleteLoading[index] = false;
        _this7.getFiles();
        //delete upload.file
        //   this.fileToUpload.push(upload)
        //   this.selectedUpload = this.selectedUpload.filter(el => el.label != file.file_name)
        _this7.$toasted.show(res.data.message);
        _this7.currentFile = null;
        /* this.fileToUpload = [{
              file_name: '',
              file_url: "",
          }] */
        _this7.fileToUpload = {
          file_name: '',
          file_url: ""
        };
      })["catch"](function (err) {
        console.dir(err);
        _this7.deleteLoading[index] = false;
      });
    },
    loadRetrieved: function loadRetrieved() {
      var _this$meta_data$dossi2;
      var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];
      if (lentb.length > 0) {
        var _this$meta_data$dossi;
        if (this.meta_data["dossier_credit"][createdKey] != undefined) {
          this.formDataToBeWatched = this.meta_data["dossier_credit"][createdKey];
          //  this.fileToUpload.unshift(this.meta_data["dossier_credit"][createdKey]["files"])
        }
        // Close table by default
        this.defaultRetract(false, (_this$meta_data$dossi = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi.applied_templ_id);
      }
      // Close table by default
      this.defaultRetract(false, (_this$meta_data$dossi2 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi2 === void 0 ? void 0 : _this$meta_data$dossi2.applied_templ_id);
    },
    // AJOUTER
    launchAutoSaver: function launchAutoSaver() {
      var _this8 = this;
      _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["default"].loadUserData().then(function (res) {
        _this8.send2Backend(res, 0, 0);
      })["catch"](function (err) {
        _this8.loadWithError(err);
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
        id: "ts3-head"
      };
      this.$emit("load-buffer", p);
    },
    retract: function retract() {
      this.seen = !this.seen;
      var a = {
        "tb_name": this.tb_name + this.meta_data['cred_pub_key'],
        "status": this.seen
      };
      EventBus.$emit("savedclosed-table", a);
    },
    // add defaultRetract
    defaultRetract: function defaultRetract(rc, ra) {
      if (ra != null) {
        this.seen = rc;
        var a = {
          "tb_name": this.tb_name + this.meta_data['cred_pub_key'],
          "status": this.seen
        };
        EventBus.$emit("savedclosed-table", a);
      }
    },
    loadWithError: function loadWithError(err) {
      // window.location.href = "/login";
    },
    send2Backend: function send2Backend(res, newVal, oldVal) {
      this.authcheck = true;
      this.authcheckUsr = res.data;
      this.authcheckStatus = res.status;
      if (this.authcheckStatus === 401) {
        // window.location.href = "/login";
      }
      if (this.authcheck === true) {
        this.$emit('autosaving');
        this.$axios.post(this.ebapisHost + "creditbuilder/api/v1/autosaving/", {
          user: this.authcheckUsr,
          meta_parseable: this.meta_parseable,
          filledData: this.formDataToBeWatched
        }).then(function (response) {
          this.$emit('autosaving');
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
    handleInput: function handleInput(evt) {},
    deleteTB: function deleteTB() {
      if (confirm('Êtes-vous sûr de vouloir supprimer ce tableau ?')) {
        this.$emit('delete-tb', {
          tb_name: this.tb_name
        });
      }
    },
    getRandomInt: function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    },
    handleDoubleClickOrClick: function handleDoubleClickOrClick(event, index) {
      var _this9 = this;
      EventBus.$emit("open-extra-file-explorer");
      setTimeout(function () {
        EventBus.$emit("data-extra-file-explorer", {
          name: _this9.fileToUpload.file_name,
          is_annexe: true
        });
      }, 500);
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR1.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR1.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/ContextMenu */ "./resources/js/components/shared/ContextMenu.vue");
/* harmony import */ var _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/ContextMenuItem */ "./resources/js/components/shared/ContextMenuItem.vue");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../helpers/indexedDB */ "./resources/js/helpers/indexedDB.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_helpers_indexedDB__WEBPACK_IMPORTED_MODULE_5__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
//  import {
//      MoreVerticalIcon,
//      ChevronUpIcon,
//      ChevronDownIcon,
//  } from "vue-feather-icons";




//  import { AirplayIcon } from 'vue-feather-icons'
//  import { BookOpenIcon } from 'vue-feather-icons'




window.$ = window.jQuery = __webpack_require__(/*! jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "fiche-signaletique",
  display: "Fiche signaletique",
  components: {
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.ChevronDownIcon,
    ContextMenu: _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__["default"],
    ContextMenuItem: _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__["default"],
    AirplayIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.AirplayIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.TrashIcon,
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.PlusIcon,
    BookOpenIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.BookOpenIcon
  },
  props: {
    meta_data: Object,
    tb_name: String,
    tb_display_name: String
  },
  created: function created() {
    var _this = this;
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var cachedSecteurs, data;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            cachedSecteurs = localStorage.getItem('secteurs_activites');
            if (cachedSecteurs) {
              _context.next = 6;
              break;
            }
            _context.next = 4;
            return _services_credit_service__WEBPACK_IMPORTED_MODULE_4__["default"].secteurs_activites().then(function (res) {
              _this.secteurs_activites = res.data;
              localStorage.setItem('secteurs_activites', JSON.stringify(res.data));
            })["catch"](function (err) {
              console.log(err);
            });
          case 4:
            _context.next = 8;
            break;
          case 6:
            data = JSON.parse(cachedSecteurs);
            _this.secteurs_activites = data;
          case 8:
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["default"].loadUserData().then(function (res) {
              _this.authcheck = true;
              _this.authcheckUsr = res.data;
              _this.authcheckStatus = res.status;
              _this.formDataToBeWatched.analyste_credit_groupe = _this.authcheckUsr.name;
            })["catch"](function (err) {
              _this.loadWithError(err);
            });
          case 9:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  mounted: function mounted() {
    var _this$meta_data$dossi;
    var applied_templ_name = (_this$meta_data$dossi = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi.applied_templ_name;
    var tbArrays = this.determineCredPubTables(applied_templ_name);
    this.credpub00 = tbArrays[0];
    this.loadRetrieved();
    this.loadTbAttrs(); // charge les attributs + sous attributs des tables
    // helper.loadCurrencyFormatter();
    this.tableClosedOrOpened();
    // this.crdLd();
  },
  data: function data() {
    var vm = this;
    return {
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_2__["default"].host,
      authcheck: false,
      authcheckUsr: null,
      authcheckStatus: null,
      watchInPause: false,
      initLoad: true,
      seen: true,
      seen1: true,
      seen2: true,
      seen5: true,
      credits: [],
      clients: [],
      secteurs_activites: [],
      dossier_credit: null,
      encours: null,
      placeholder: "Chercher clients",
      matcli: "matcli",
      nomcli: "nomcli",
      meta_parseable: {
        cred_pub_key: this.meta_data["cred_pub_key"],
        tb_name: this.tb_name
      },
      formDataToBeWatched: {
        notation_interne: "",
        notation_externe: "",
        analyste_credit_groupe: "",
        grand_risque: "",
        partie_liee: "",
        inhabituel: "",
        notes: []
      },
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
      indice_client: null,
      denomination_client: null,
      secteur_activite: null,
      notation_interne: null,
      listingNote: false,
      credpub00: null
    };
  },
  methods: {
    findIndexByObj: function findIndexByObj(label) {
      var _this$tab;
      var tab = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "secteurs_activites";
      return (_this$tab = this[tab]) === null || _this$tab === void 0 ? void 0 : _this$tab.findIndex(function (el) {
        return (el === null || el === void 0 ? void 0 : el.secteurs_cofina) === label;
      });
    },
    tableClosedOrOpened: function tableClosedOrOpened() {
      this.seen = this.fetchClosedTables(this.tb_name + this.meta_data['cred_pub_key']);
    },
    openNotesModal: function openNotesModal() {
      var listing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.listingNote = listing;
      this.$modal.show(this.tb_name);
    },
    formDataVars: function formDataVars(event) {
      this.formDataToBeWatched[event[0]] = event[1];
    },
    setTauxCredVars: function setTauxCredVars() {
      if (parseFloat(this.formDataToBeWatched.taux_credit_propose) > 100) {
        this.formDataToBeWatched.taux_credit_propose = 100;
      }
    },
    loadRetrieved: function loadRetrieved() {
      var _this$meta_data$dossi2, _this$meta_data$dossi3, _this$meta_data$dossi4, _this$meta_data$dossi5;
      var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];
      this.indice_client = (_this$meta_data$dossi2 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi2 === void 0 || (_this$meta_data$dossi2 = _this$meta_data$dossi2[this.credpub00]) === null || _this$meta_data$dossi2 === void 0 ? void 0 : _this$meta_data$dossi2.matricule_client;
      this.denomination_client = (_this$meta_data$dossi3 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi3 === void 0 || (_this$meta_data$dossi3 = _this$meta_data$dossi3[this.credpub00]) === null || _this$meta_data$dossi3 === void 0 ? void 0 : _this$meta_data$dossi3.denomination_client;
      this.secteur_activite = (_this$meta_data$dossi4 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi4 === void 0 || (_this$meta_data$dossi4 = _this$meta_data$dossi4[this.credpub00]) === null || _this$meta_data$dossi4 === void 0 ? void 0 : _this$meta_data$dossi4.secteur_activite;
      this.notation_interne = (_this$meta_data$dossi5 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi5 === void 0 || (_this$meta_data$dossi5 = _this$meta_data$dossi5[this.credpub00]) === null || _this$meta_data$dossi5 === void 0 ? void 0 : _this$meta_data$dossi5.note_edane;
      if (this.formDataToBeWatched.grand_risque == '') {
        var _this$meta_data$dossi6, _this$meta_data$dossi0;
        if ((_this$meta_data$dossi6 = this.meta_data["dossier_credit"]) !== null && _this$meta_data$dossi6 !== void 0 && _this$meta_data$dossi6.cred_pub_tb_19001) {
          var _this$meta_data$dossi7, _this$meta_data$dossi8, _this$meta_data$dossi9;
          this.formDataToBeWatched.grand_risque = (_this$meta_data$dossi7 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi7 === void 0 || (_this$meta_data$dossi7 = _this$meta_data$dossi7.cred_pub_tb_19001) === null || _this$meta_data$dossi7 === void 0 ? void 0 : _this$meta_data$dossi7.grand_risque;
          this.formDataToBeWatched.partie_liee = (_this$meta_data$dossi8 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi8 === void 0 || (_this$meta_data$dossi8 = _this$meta_data$dossi8.cred_pub_tb_19001) === null || _this$meta_data$dossi8 === void 0 ? void 0 : _this$meta_data$dossi8.partie_liee;
          this.formDataToBeWatched.inhabituel = (_this$meta_data$dossi9 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi9 === void 0 || (_this$meta_data$dossi9 = _this$meta_data$dossi9.cred_pub_tb_19001) === null || _this$meta_data$dossi9 === void 0 ? void 0 : _this$meta_data$dossi9.inhabituel;
        }
        if ((_this$meta_data$dossi0 = this.meta_data["dossier_credit"]) !== null && _this$meta_data$dossi0 !== void 0 && _this$meta_data$dossi0.cred_pub_tb_17001) {
          var _this$meta_data$dossi1, _this$meta_data$dossi10, _this$meta_data$dossi11;
          this.formDataToBeWatched.grand_risque = (_this$meta_data$dossi1 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi1 === void 0 || (_this$meta_data$dossi1 = _this$meta_data$dossi1.cred_pub_tb_17001) === null || _this$meta_data$dossi1 === void 0 ? void 0 : _this$meta_data$dossi1.grand_risque;
          this.formDataToBeWatched.partie_liee = (_this$meta_data$dossi10 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi10 === void 0 || (_this$meta_data$dossi10 = _this$meta_data$dossi10.cred_pub_tb_17001) === null || _this$meta_data$dossi10 === void 0 ? void 0 : _this$meta_data$dossi10.partie_liee;
          this.formDataToBeWatched.inhabituel = (_this$meta_data$dossi11 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi11 === void 0 || (_this$meta_data$dossi11 = _this$meta_data$dossi11.cred_pub_tb_17001) === null || _this$meta_data$dossi11 === void 0 ? void 0 : _this$meta_data$dossi11.inhabituel;
        }
      }
      if (lentb.length > 0) {
        var _this$meta_data$dossi12;
        if (this.meta_data["dossier_credit"][createdKey] != undefined) {
          this.formDataToBeWatched = this.meta_data["dossier_credit"][createdKey];
          if (this.meta_data["dossier_credit"][createdKey]["actionnariats"] != "") {
            this.actionnariats = this.meta_data["dossier_credit"][createdKey]["actionnariats"];
          }
        }
        // Close table by default
        this.defaultRetract(false, (_this$meta_data$dossi12 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi12 === void 0 ? void 0 : _this$meta_data$dossi12.applied_templ_id);
      }
    },
    setTbVal: function setTbVal(val) {
      this.cred_pub_key = val;
    },
    loadWithError: function loadWithError(err) {
      // // window.location.href = "/login";
    },
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
    handleInput: function handleInput(evt) {
      this.formDataToBeWatched["actionnariats"] = this.actionnariats;
      this.formDataToBeWatched.total_part = this.totalPartPourcentageActionnariats;
      EventBus.$emit("event-T0", {
        formdata: this.formDataToBeWatched
      });
    },
    setActionnariatsVars: function setActionnariatsVars(event, index) {
      // si la valeur a été tapée au clavier
      if (event[2]) {
        if (this.actionnariats[index].pourcentage_participation == 0) this.actionnariats[index].max = this.ActionnariatMaxNumber;
        if (Number(this.actionnariats[index].pourcentage_participation) > 0) this.actionnariats[index].max = Number(this.ActionnariatMaxNumber) + Number(this.actionnariats[index][event[0]]);
      }
      this.actionnariats[index][event[0]] = event[1];
      this.handleInput();
    },
    send2Backend: function send2Backend(res, newVal, oldVal) {
      this.authcheck = true;
      this.authcheckUsr = res.data;
      this.authcheckStatus = res.status;
      if (this.authcheckStatus === 401) {
        // window.location.href = "/login";
      }
      if (this.authcheck === true) {
        this.$emit("autosaving");
        this.$axios.post(this.ebapisHost + "creditbuilder/api/v1/autosaving/", {
          user: this.authcheckUsr,
          meta_parseable: this.meta_parseable,
          filledData: this.formDataToBeWatched,
          loadDossier: true
        }).then(function (response) {
          // this.$Progress.finish();
          this.$emit("autosaving");
          // console.log(response)

          var tbFetcheData = response.data;
          if (tbFetcheData["is_success"] === true) {
            this.dossier_credit = tbFetcheData['dossier_credit'];

            // this.indice_client =  this.dossier_credit?.[this.credpub00]?.matricule_client
            // this.denomination_client = this.dossier_credit?.[this.credpub00]?.denomination_client
            // this.secteur_activite = this.dossier_credit?.[this.credpub00]?.secteur_activite
            // this.notation_interne = this.dossier_credit?.[this.credpub00]?.note_edane
            // // this.classe_risque = this.dossier_credit.[this.credpub00]?.classe_risque
            // // this.matricule_client = this.dossier_credit.[this.credpub00]?.matricule_client
            // // this.annee_referentielle = this.dossier_credit.[this.credpub00]?.annee_referentielle
            // this.formDataToBeWatched.analyste_credit_groupe = this.authcheckUsr.name

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
        "tb_name": this.tb_name + this.meta_data['cred_pub_key'],
        "status": this.seen
      };
      EventBus.$emit("savedclosed-table", a);
    },
    // add defaultRetract
    defaultRetract: function defaultRetract(rc, ra) {
      if (ra != null) {
        this.seen = rc;
        var a = {
          "tb_name": this.tb_name + this.meta_data['cred_pub_key'],
          "status": this.seen
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
        id: "ca1-head"
      };
      // console.log(p)
      this.$emit("load-buffer", p);
    },
    credData: function credData(res) {
      this.credits = res.data;
    },
    onSlctMatCli: function onSlctMatCli(obj) {
      var _this$formDataToBeWat,
        _this2 = this;
      this.formDataToBeWatched.matricule_client = obj.matcli;
      this.formDataToBeWatched.nom_client = obj.nomcli;
      this.autoRenamer();
      _services_credit_service__WEBPACK_IMPORTED_MODULE_4__["default"].encours((_this$formDataToBeWat = this.formDataToBeWatched) === null || _this$formDataToBeWat === void 0 ? void 0 : _this$formDataToBeWat.matricule_client).then(function (res) {
        _this2.encoursData(res);
      })["catch"](function (err) {
        console.log(err);
      });
    },
    send2Backend0: function send2Backend0(res) {
      this.authcheck = true;
      this.authcheckUsr = res.data;
      this.authcheckStatus = res.status;
      if (this.authcheckStatus === 401) {
        // window.location.href = "/login";
      }
      if (this.authcheck === true) {
        this.$axios.post(this.ebapisHost + "creditbuilder/api/v1/updatedoctitle/", {
          user: this.authcheckUsr,
          cred_pub_key: this.meta_parseable.cred_pub_key,
          filledData: {
            doss_name: this.formDataToBeWatched.nom_client + "_" + this.formDataToBeWatched.prefixe
          }
        }).then(function (response) {
          var tbFetcheData = response.data;
        }.bind(this))["catch"](function (error) {
          this.$Progress.finish();
          console.log(error);
        }.bind(this));
      } else {
        alert("Unauthenticated");
      }
    },
    autoRenamer: function autoRenamer() {
      var _this3 = this;
      _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["default"].loadUserData().then(function (res) {
        _this3.send2Backend0(res);
      })["catch"](function (err) {
        _this3.loadWithError(err);
      });
    },
    instruction2: function instruction2(id) {
      var id0 = '#' + id;
      window.$(id0).modal('show');
    }
  },
  watch: {
    formDataToBeWatched: {
      handler: function handler(newVal, oldVal) {
        // if (oldVal === undefined) {
        //   return
        // }
        this.autosaving(newVal, oldVal);
      },
      deep: true,
      immediate: true
    }
  },
  computed: {
    totalPartPourcentageActionnariats: function totalPartPourcentageActionnariats() {
      var _this$actionnariats;
      var trying = (_this$actionnariats = this.actionnariats) === null || _this$actionnariats === void 0 ? void 0 : _this$actionnariats.map(function (el) {
        el.pourcentage_participation = String(el.pourcentage_participation).replace(/\s+/g, "");
        if (!el.pourcentage_participation) return 0;
        return Number(el.pourcentage_participation);
      }).reduce(function (sum, curr) {
        return sum + curr;
      }, 0);
      if (trying > 100) return "100.00";
      return trying === null || trying === void 0 ? void 0 : trying.toLocaleString("fr-FR");
    },
    ActionnariatMaxNumber: function ActionnariatMaxNumber() {
      var restant = 100 - Number(this.totalPartPourcentageActionnariats);
      if (restant < 0) return 0;
      return restant;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/workspace/nsia/WorkspaceOnDAJCAnlCenter.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/workspace/nsia/WorkspaceOnDAJCAnlCenter.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.umd.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../helpers/helper */ "./resources/js/helpers/helper.js");
/* harmony import */ var _helpers_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../helpers/page */ "./resources/js/helpers/page.js");
/* harmony import */ var _tables_annexes_TB0_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tables/annexes/TB0.vue */ "./resources/js/components/tables/annexes/TB0.vue");
/* harmony import */ var _forms_nsia_cr2_F001_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../forms/nsia/cr2/F001.vue */ "./resources/js/components/forms/nsia/cr2/F001.vue");
/* harmony import */ var _contreanalyse_nsia_filiale_dgr_DGR_FAR1__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../contreanalyse/nsia/filiale/dgr/DGR-FAR1 */ "./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR1.vue");
/* harmony import */ var _contreanalyse_nsia_filiale_dajc_DAJC_REV0__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../contreanalyse/nsia/filiale/dajc/DAJC-REV0 */ "./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV0.vue");
/* harmony import */ var _contreanalyse_nsia_filiale_dajc_DAJC_REV1__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../contreanalyse/nsia/filiale/dajc/DAJC-REV1 */ "./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV1.vue");
/* harmony import */ var _contreanalyse_nsia_filiale_dajc_DAJC_REV2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../contreanalyse/nsia/filiale/dajc/DAJC-REV2 */ "./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV2.vue");
/* harmony import */ var _contreanalyse_nsia_filiale_dajc_DAJC_REV3__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../contreanalyse/nsia/filiale/dajc/DAJC-REV3 */ "./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV3.vue");
/* harmony import */ var _contreanalyse_nsia_filiale_dajc_DAJC_MEP0__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../contreanalyse/nsia/filiale/dajc/DAJC-MEP0 */ "./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-MEP0.vue");
/* harmony import */ var _contreanalyse_nsia_filiale_dajc_DAJC_RED0__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../contreanalyse/nsia/filiale/dajc/DAJC-RED0 */ "./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-RED0.vue");
/* harmony import */ var _contreanalyse_nsia_filiale_dajc_DAJC_RED1__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../contreanalyse/nsia/filiale/dajc/DAJC-RED1 */ "./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-RED1.vue");
/* harmony import */ var _contreanalyse_nsia_filiale_dajc_DAJC_PR_vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../contreanalyse/nsia/filiale/dajc/DAJC-PR.vue */ "./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-PR.vue");



 // Veuillez deposer les tableaux ici
 // Fichiers annexes


/** DAJC TABLE IMPORT**/
 // 20.	T 19 --> TMC Analyse des comptes courants et d'épargne – TB 11







/** DAJC TABLE IMPORT**/

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "WorkspaceOnDAJCAnlCenter",
  props: {
    cred_pub_key: String,
    list2: Array,
    dossier_credit: Object
  },
  components: {
    tb0: _tables_annexes_TB0_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    tb001: _forms_nsia_cr2_F001_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    tb28001: _contreanalyse_nsia_filiale_dgr_DGR_FAR1__WEBPACK_IMPORTED_MODULE_5__["default"],
    tb200101: _contreanalyse_nsia_filiale_dajc_DAJC_REV0__WEBPACK_IMPORTED_MODULE_6__["default"],
    tb200102: _contreanalyse_nsia_filiale_dajc_DAJC_REV1__WEBPACK_IMPORTED_MODULE_7__["default"],
    tb200103: _contreanalyse_nsia_filiale_dajc_DAJC_REV2__WEBPACK_IMPORTED_MODULE_8__["default"],
    tb200104: _contreanalyse_nsia_filiale_dajc_DAJC_REV3__WEBPACK_IMPORTED_MODULE_9__["default"],
    tb200301: _contreanalyse_nsia_filiale_dajc_DAJC_MEP0__WEBPACK_IMPORTED_MODULE_10__["default"],
    tb200201: _contreanalyse_nsia_filiale_dajc_DAJC_RED0__WEBPACK_IMPORTED_MODULE_11__["default"],
    tb200202: _contreanalyse_nsia_filiale_dajc_DAJC_RED1__WEBPACK_IMPORTED_MODULE_12__["default"],
    tb200601: _contreanalyse_nsia_filiale_dajc_DAJC_PR_vue__WEBPACK_IMPORTED_MODULE_13__["default"]
  },
  data: function data() {
    return {
      loadableComponent: undefined,
      tb_name: null,
      tb_name0: null,
      inMemoryList: [],
      auto_sorting: false,
      type_entite: null,
      authcheckUsr: null,
      listOfComponents: this.list2,
      doc_tobe_produced: null,
      isDoc: false,
      producMemo: "tp_page missing memorandum",
      producContreAnl: "contre-analyse",
      is_fullscreen: false
    };
  },
  created: function created() {
    // this.loadDependencies()
  },
  mounted: function mounted() {
    var _this = this;
    this.styleDoc();
    EventBus.$on("close-Workspace-right-left", function (data) {
      _this.is_fullscreen = data;
    });
  },
  computed: {
    currentProperties: function currentProperties() {
      return {
        cred_pub_key: this.cred_pub_key,
        dossier_credit: this.dossier_credit
      };
    },
    dragOptions: function dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      };
    }
  },
  methods: {
    loadDependencies: function loadDependencies() {
      var rootDir = "";
      if (this.entityType == "MICROFINANCE") {
        rootDir = "tables";
      } else {
        rootDir = "forms";
      }
      var subDir = this.realEntity.toLowerCase();
      var finalPath = "./".concat(rootDir, "/").concat(subDir, "/");
      var components = __webpack_require__("./resources/js/components lazy recursive [A-Z0-9]{1,3}\\w+\\.(vue)$");
      var idx2 = 0;
      components.keys().forEach(function (filePath, idx) {
        if (filePath.includes(finalPath)) {
          // load the component
          components(filePath).then(function (module) {
            var componentName = "tb" + idx2;
            if (idx2 == 0) {
              componentName = "tb00";
            }
            Vue.component(componentName, module["default"]);
            idx2++;
          });
        }
      });
    },
    log: function log(evt) {},
    moveCheck: function moveCheck(evt) {
      evt.draggedContext.element;
      this.tb_name = evt.draggedContext.element.component_name;
      this.loadableComponent = evt.draggedContext.element.component_name;
    },
    cloneDog: function cloneDog(_ref) {
      var id = _ref.id,
        name = _ref.name,
        component_name = _ref.component_name;
      this.tb_name = component_name;
      this.loadableComponent = component_name;
      return {
        id: id,
        name: name,
        component_name: component_name
      };
    },
    setSideLoad: function setSideLoad(event) {
      var tb_name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      this.$emit("sidelist-updated", event);
      // // ADD A MENU ON THE TAB
      // let cards = document.querySelectorAll(
      //   "#" + event.id + " .col-auto"
      // );
      // //console.log(event.id);
      // cards.forEach((card,index) => {
      //   let lastChild = card.lastElementChild;
      //   //console.log(lastChild);
      //   let container = document.createElement("div");
      //   // Insert the new node before the last child element
      //   card.insertBefore(container, lastChild);
      //   // reactivate the right clic
      //   if (index === 0) {
      //     let table = card.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
      //     const children = Array.from(table.childNodes);
      //     let NewTable = document.createElement("div")

      //     Array.from(table.attributes).forEach(attr => {
      //       NewTable.setAttribute(attr.name, attr.value);
      //     })
      //     table.replaceWith(NewTable)
      //     children.forEach((child) => {
      //       NewTable.appendChild(child)
      //     })
      //   }
      // // console.log(tb_name);
      //   let propsData = {
      //     //ref:"menu",
      //     id: tb_name,
      //     tb_name: tb_name,
      //     cred_pub_key: this.cred_pub_key,
      //     contextList: this.contextList,
      //   };
      //   //console.log(propsData);
      //   new Vue({
      //     render: (h) => h(MenuTab, { props: propsData }),
      //   }).$mount(container);
      // });
      // // DELETE THE CONTEXT MENU
      // if (![null, undefined].includes(document.querySelector('#context-menu' + tb_name))) {
      //   document.querySelector('#context-menu' + tb_name).remove()
      // }
    },
    setAutosaving: function setAutosaving() {
      this.$emit("autosaving-updated");
    },
    loadShell: function loadShell() {
      this.$emit("value-updated");
    },
    setInVal: function setInVal(dossier_credit, doc_tobe_produced) {
      console.log("setInVal");
      this.dossier_credit = dossier_credit;
      this.doc_tobe_produced = doc_tobe_produced;
    },
    removeTb: function removeTb(component_name) {
      if (confirm("Voulez-vous vraiment supprimer ce tableau ? Parce que toutes les données du tableau seront supprimées après cette action !")) {
        this.listOfComponents = this.listOfComponents.filter(function (data) {
          return data.component_name !== component_name;
        });
        this.$toasted.show("Tableau supprimé avec succès");
      }
    },
    styleDoc: function styleDoc() {
      if (this.doc_tobe_produced === "MEMORANDUM_CREDIT" || this.doc_tobe_produced === "" || this.doc_tobe_produced === "REVIEW_CONTRE_ANALYSE_FILIALE" || this.doc_tobe_produced === "REVIEW_CONTRE_ANALYSE_GROUPE" || this.doc_tobe_produced === "REVIEW_CONTRE_ANALYSE_RSE" || this.doc_tobe_produced === "REVIEW_CONTRE_ANALYSE_DGR" || this.doc_tobe_produced === "REVIEW_CONTRE_ANALYSE_DAJC" || this.doc_tobe_produced === "REVIEW_CONTRE_ANALYSE_GAC") {
        this.isDoc = true;
      }
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-RED0.vue?vue&type=template&id=4f293030&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-RED0.vue?vue&type=template&id=4f293030&scoped=true ***!
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
      id: "dajc-red0-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v(_vm._s(_vm.tb_display_name) + " : Envoie de contrats")]), _vm._v(" "), _c("div", {
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
  }, [_c("span", [_vm._v("\n                      " + _vm._s(_vm.formDataToBeWatched.notes.length) + "\n                    ")])])])]) : _vm._e(), _vm._v(" "), _c("chevron-up-icon", {
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
  }, [_vm.isSeenState["envoie_contrats"] === true ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "table-responsive",
    staticStyle: {
      "padding-bottom": "50px"
    }
  }, [_c("table", {
    staticClass: "table table-bordered mb-1"
  }, [_vm._m(0), _vm._v(" "), _c("tbody", [_vm._l(_vm.envoie_contrats, function (envoie_contrat, index) {
    var _envoie_contrat$nom, _vm$file_data_list$in, _vm$file_data_list$in2;
    return _c("tr", {
      key: index
    }, [_c("td", {
      staticClass: "col-4 vertical-middle",
      staticStyle: {
        "min-width": "450px"
      }
    }, [_c("div", {
      staticClass: "row display-flex",
      staticStyle: {
        width: "100%",
        display: "flex"
      }
    }, [_c("div", {
      staticClass: "col",
      staticStyle: {
        flex: "1"
      }
    }, [_c("Multiselect", {
      attrs: {
        searchable: true,
        trackBy: "nom",
        label: "nom",
        "value-prop": "nom",
        options: _vm.liste_contrats,
        classes: {
          optionPointed: "text-gray-800 bg-gray-100"
        },
        "data-bs-original-title": envoie_contrat.nom,
        title: envoie_contrat === null || envoie_contrat === void 0 ? void 0 : envoie_contrat.nom,
        disabled: envoie_contrat.is_send,
        "data-toggle": "tooltip",
        "data-placement": "top"
      },
      on: {
        change: function change($event) {
          return _vm.handleInput();
        }
      },
      scopedSlots: _vm._u([!_vm.is_notify ? {
        key: "option",
        fn: function fn(_ref) {
          var option = _ref.option;
          return [_c("p", {
            staticClass: "multiselect-option"
          }, [_vm._v(_vm._s(option.nom))])];
        }
      } : null, !_vm.is_notify ? {
        key: "singlelabel",
        fn: function fn(_ref2) {
          var value = _ref2.value;
          return [_c("p", {
            staticClass: "multiselect-single-label",
            staticStyle: {
              overflow: "hidden"
            }
          }, [_vm._v(_vm._s(value.nom))])];
        }
      } : null], null, true),
      model: {
        value: envoie_contrat.nom,
        callback: function callback($$v) {
          _vm.$set(envoie_contrat, "nom", $$v);
        },
        expression: "envoie_contrat.nom"
      }
    })], 1), _vm._v(" "), (envoie_contrat === null || envoie_contrat === void 0 || (_envoie_contrat$nom = envoie_contrat.nom) === null || _envoie_contrat$nom === void 0 ? void 0 : _envoie_contrat$nom.toUpperCase()) === "AUTRE" ? _c("div", {
      staticClass: "col"
    }, [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: envoie_contrat.autre_nom,
        expression: "envoie_contrat.autre_nom",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control",
      attrs: {
        rows: "1",
        readonly: envoie_contrat.is_send
      },
      domProps: {
        value: envoie_contrat.autre_nom
      },
      on: {
        change: [function ($event) {
          return _vm.$set(envoie_contrat, "autre_nom", $event.target.value);
        }, _vm.handleInput]
      }
    })]) : _vm._e()])]), _vm._v(" "), _c("td", {
      staticClass: "col-4 vertical-middle"
    }, [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: envoie_contrat.commentaire,
        expression: "envoie_contrat.commentaire",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control",
      staticStyle: {
        "min-width": "150px",
        width: "100%"
      },
      attrs: {
        rows: "1",
        readonly: envoie_contrat.is_send
      },
      domProps: {
        value: envoie_contrat.commentaire
      },
      on: {
        change: [function ($event) {
          return _vm.$set(envoie_contrat, "commentaire", $event.target.value);
        }, _vm.handleInput]
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "col-2 vertical-middle"
    }, [_c("div", {
      staticClass: "d-flex justify-content-center"
    }, [(envoie_contrat === null || envoie_contrat === void 0 ? void 0 : envoie_contrat.files) > 0 ? _c("div", [_vm.showBtnDownload ? _c("div", {}, [!_vm.showAllFiles[index] ? _vm._l((_vm$file_data_list$in = _vm.file_data_list[index]) === null || _vm$file_data_list$in === void 0 ? void 0 : _vm$file_data_list$in.slice(0, _vm.showMoreNumber), function (file, fileIndex) {
      return _c("div", {
        key: fileIndex + index + "xa",
        staticClass: "mb-2 nowrap"
      }, [_c("span", {
        staticClass: "p-1 px-2 mx-2 text-nowrap",
        staticStyle: {
          color: "black",
          "font-size": "13px",
          "border-radius": "5px",
          "margin-left": "0 !important",
          width: "150px"
        },
        attrs: {
          title: file.file_name + "." + file.file_ext
        }
      }, [_c("i", {
        "class": _vm.getIcon(file === null || file === void 0 ? void 0 : file.file_ext)
      }), _vm._v(" " + _vm._s(_vm.formatFileName(file === null || file === void 0 ? void 0 : file.file_name)) + "." + _vm._s(file === null || file === void 0 ? void 0 : file.file_ext) + "\n                                    ")]), _vm._v(" "), _c("span", {
        staticClass: "p-1 px-2 text-nowrap",
        staticStyle: {
          color: "black",
          "font-size": "13px",
          border: "1px solid rgb(44, 62, 80)",
          "border-radius": "5px",
          "margin-left": "0 !important",
          width: "150px",
          cursor: "pointer"
        },
        attrs: {
          "data-toggle": "tooltip",
          title: "Télécharger le contrat"
        },
        on: {
          click: function click($event) {
            return _vm.downloadFile(index, fileIndex);
          }
        }
      }, [_c("i", {
        staticClass: "icofont-download"
      })])]);
    }) : _vm._e(), _vm._v(" "), _vm.showAllFiles[index] ? _vm._l(_vm.file_data_list[index], function (file, fileIndex) {
      return _c("div", {
        key: fileIndex,
        staticClass: "mb-2 nowrap",
        staticStyle: {
          "margin-top": "5 !important"
        }
      }, [_c("span", {
        staticClass: "p-1 px-2 mx-2 text-nowrap",
        staticStyle: {
          color: "black",
          "font-size": "13px",
          "border-radius": "5px",
          "margin-left": "0 !important",
          width: "150px",
          cursor: "pointer"
        }
      }, [_c("i", {
        "class": _vm.getIcon(file === null || file === void 0 ? void 0 : file.file_ext)
      }), _vm._v(" " + _vm._s(file === null || file === void 0 ? void 0 : file.file_name) + "\n                                  ")]), _vm._v(" "), _c("span", {
        staticClass: "p-1 px-2 text-nowrap btn btn-primary shadow-md text-white",
        staticStyle: {
          color: "black",
          "font-size": "13px",
          "border-radius": "5px",
          "margin-left": "0 !important",
          width: "150px",
          cursor: "pointer",
          background: "#2c3e50 !important",
          padding: "1px"
        },
        attrs: {
          "data-toggle": "tooltip",
          title: "Télécharger le contrat"
        },
        on: {
          click: function click($event) {
            return _vm.downloadFile(index, fileIndex);
          }
        }
      }, [_c("i", {
        staticClass: "icofont-download"
      })])]);
    }) : _vm._e(), _vm._v(" "), ((_vm$file_data_list$in2 = _vm.file_data_list[index]) === null || _vm$file_data_list$in2 === void 0 ? void 0 : _vm$file_data_list$in2.length) > 2 ? _c("a", {
      staticStyle: {
        "font-size": "13px",
        color: "#bc872b",
        cursor: "pointer"
      },
      on: {
        click: function click($event) {
          return _vm.onChangeStateShowAll(index);
        }
      }
    }, [_c("span", {
      staticClass: "showT"
    }, [_vm._v(_vm._s(_vm.showAllFiles[index] ? "reduire" : "Voir plus") + " ")])]) : _vm._e()], 2) : _c("div", [_c("span", {
      staticClass: "spinner-border"
    })])]) : _vm._e(), _vm._v(" "), _c("div", {
      staticStyle: {
        "margin-left": "5px"
      }
    }, [!envoie_contrat.is_send ? _c("button", {
      staticClass: "btn shadow-md text-white",
      staticStyle: {
        cursor: "pointer",
        background: "#2c3e50",
        width: "50px",
        height: "30px",
        border: "1px solid rgb(44, 62, 80)",
        "font-size": "13px",
        padding: "1px"
      },
      attrs: {
        type: "button",
        name: "button",
        "data-toggle": "tooltip",
        title: "Cliquer ici pour uploader ou voir le(s) contrat(s)"
      },
      on: {
        click: function click($event) {
          return _vm.handleDoubleClickOrClick($event, index);
        }
      }
    }, [_c("i", {
      staticClass: "icofont-attachment"
    })]) : _vm._e()]), _vm._v(" "), _c("div", {
      staticStyle: {
        "margin-left": "5px"
      }
    }, [!envoie_contrat.is_send ? _c("button", {
      staticClass: "btn shadow-md text-white",
      staticStyle: {
        cursor: "pointer",
        background: "#04821a",
        width: "50px",
        height: "30px",
        border: "1px solid rgb(4, 130, 26)",
        "font-size": "13px",
        padding: "1px"
      },
      attrs: {
        type: "button",
        name: "button",
        "data-toggle": "tooltip",
        title: "Cliquer ici pour générer automatiquement le(s) convention(s)"
      },
      on: {
        click: function click($event) {
          return _vm.openConventionModal(index);
        }
      }
    }, [_c("i", {
      staticClass: "icofont-automation"
    })]) : _vm._e()])])]), _vm._v(" "), index == 0 ? _c("td", {
      staticClass: "col-1 text-center vertical-middle",
      staticStyle: {
        "max-width": "50px"
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
        border: "none",
        "font-size": "16px"
      },
      attrs: {
        type: "button",
        title: "Ajouter un contrat"
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
      staticClass: "col-1 text-center vertical-middle",
      staticStyle: {
        "max-width": "50px"
      }
    }, [!envoie_contrat.is_send ? _c("button", {
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
    })], 1) : _vm._e()])]);
  }), _vm._v(" "), _c("tr", [!_vm.is_notify || !_vm.allSent ? _c("td", {
    staticClass: "text-center vertical-middle",
    attrs: {
      colspan: "6"
    }
  }, [_vm.sendRequest ? [_c("button", {
    staticClass: "btn text-white mt-3 btn-primary",
    staticStyle: {
      cursor: "pointer",
      right: "16px",
      bottom: "10px",
      "max-width": "max-content"
    },
    attrs: {
      disabled: "",
      type: "button"
    }
  }, [_vm._v("\n                            Notification du " + _vm._s(_vm.role) + " en cours...\n                          ")])] : [_c("button", {
    staticClass: "btn text-white mt-3 btn-primary",
    staticStyle: {
      cursor: "pointer",
      right: "16px",
      bottom: "10px",
      "max-width": "max-content"
    },
    attrs: {
      type: "button",
      disabled: _vm.isButtonDisabled || _vm.allSent
    },
    on: {
      click: function click($event) {
        return _vm.NotifyUser();
      }
    }
  }, [_vm._v("\n                            Notifier le " + _vm._s(_vm.role) + "\n                          ")])]], 2) : _vm._e()])], 2)])])])]) : _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        return _vm.toggleIsSeen("envoie_contrats");
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "envoie_contrats"
    }
  }, [_vm._v("\n                Envoie des contrats\n                "), _c("chevron-down-icon", {
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
  }, [_vm._v("\n            Fermer le tableau\n          ")])])])]) : _c("div", {
    staticClass: "card card-width-height"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc pb-0 pt-2"
  }, [_c("h6", {
    staticClass: "head",
    attrs: {
      id: "dajc-red0-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v(_vm._s(_vm.tb_display_name) + " : Envoie de contrats")]), _vm._v(" "), _c("div", {
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
  }, [_c("span", [_vm._v("\n                      " + _vm._s(_vm.formDataToBeWatched.notes.length) + "\n                    ")])])])]) : _vm._e(), _vm._v(" "), _c("chevron-down-icon", {
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
    staticClass: "th font-weight-bold text-uppercase vertical-middle sticky"
  }, [_c("label", {
    staticStyle: {
      "padding-left": "5px"
    },
    attrs: {
      "for": ""
    }
  }, [_vm._v(" Nom du contrat")])]), _vm._v(" "), _c("td", {
    staticClass: "th font-weight-bold text-uppercase vertical-middle"
  }, [_c("label", {
    staticStyle: {
      "padding-left": "5px"
    },
    attrs: {
      "for": ""
    }
  }, [_vm._v(" Commentaire")])]), _vm._v(" "), _c("td", {
    staticClass: "th font-weight-bold text-uppercase vertical-middle text-center"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(" Contrat(s) à signer")])]), _vm._v(" "), _c("td")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-RED1.vue?vue&type=template&id=4f0d012e&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-RED1.vue?vue&type=template&id=4f0d012e&scoped=true ***!
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
      id: "dajc-red0-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v(_vm._s(_vm.tb_display_name) + " : Validation des contrats")]), _vm._v(" "), _c("div", {
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
  }, [_c("span", [_vm._v("\n                      " + _vm._s(_vm.formDataToBeWatched.notes.length) + "\n                    ")])])])]) : _vm._e(), _vm._v(" "), _c("chevron-up-icon", {
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
  }, [_vm.isSeenState["contrats_signes"] === true ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "table-responsive",
    staticStyle: {
      "padding-bottom": "10px"
    }
  }, [_c("table", {
    staticClass: "table table-bordered mb-1"
  }, [_c("thead", [_c("tr", [_vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _c("td", {
    staticClass: "font-weight-bold text-uppercase vertical-middle",
    staticStyle: {
      "background-color": "#f4f3f3"
    }
  }, [_c("label", {
    staticStyle: {
      "padding-left": "5px"
    },
    attrs: {
      "for": ""
    }
  }, [_vm._v(" Commentaire " + _vm._s(_vm.role))])]), _vm._v(" "), _vm._m(2), _vm._v(" "), _vm._m(3), _vm._v(" "), _vm._m(4), _vm._v(" "), _vm._m(5)])]), _vm._v(" "), _c("tbody", [_vm._l(_vm.contrats_signes, function (contrats_signe, index) {
    var _contrats_signe$nom, _vm$file_data_list_en, _vm$file_data_list_en2, _vm$file_data_list$in, _vm$file_data_list$in2;
    return _c("tr", {
      key: index
    }, [_c("td", {
      staticClass: "col-4 sticky vertical-middle",
      staticStyle: {
        "min-width": "450px"
      }
    }, [_c("div", {
      staticClass: "row display-flex",
      staticStyle: {
        width: "100%",
        display: "flex"
      }
    }, [_c("div", {
      staticClass: "col",
      staticStyle: {
        flex: "1"
      }
    }, [_c("Multiselect", {
      attrs: {
        searchable: true,
        trackBy: "nom",
        label: "nom",
        "value-prop": "nom",
        options: _vm.liste_contrats,
        classes: {
          optionPointed: "text-gray-800 bg-gray-100"
        },
        "data-bs-original-title": contrats_signe.nom,
        title: contrats_signe === null || contrats_signe === void 0 ? void 0 : contrats_signe.nom,
        disabled: _vm.is_notify_conformite && ((contrats_signe === null || contrats_signe === void 0 ? void 0 : contrats_signe.conformite) === "true" || (contrats_signe === null || contrats_signe === void 0 ? void 0 : contrats_signe.conformite) === null) || _vm.is_notify,
        "data-toggle": "tooltip",
        "data-placement": "top"
      },
      on: {
        change: function change($event) {
          return _vm.handleInput();
        }
      },
      scopedSlots: _vm._u([!_vm.is_notify_conformite && ((contrats_signe === null || contrats_signe === void 0 ? void 0 : contrats_signe.conformite) === "true" || (contrats_signe === null || contrats_signe === void 0 ? void 0 : contrats_signe.conformite) === null) || _vm.is_notify ? {
        key: "option",
        fn: function fn(_ref) {
          var option = _ref.option;
          return [_c("p", {
            staticClass: "multiselect-option"
          }, [_vm._v(_vm._s(option.nom))])];
        }
      } : null, !_vm.is_notify_conformite && ((contrats_signe === null || contrats_signe === void 0 ? void 0 : contrats_signe.conformite) === "true" || (contrats_signe === null || contrats_signe === void 0 ? void 0 : contrats_signe.conformite) === null) || _vm.is_notify ? {
        key: "singlelabel",
        fn: function fn(_ref2) {
          var value = _ref2.value;
          return [_c("p", {
            staticClass: "multiselect-single-label",
            staticStyle: {
              overflow: "hidden"
            }
          }, [_vm._v(_vm._s(value.nom))])];
        }
      } : null], null, true),
      model: {
        value: contrats_signe.nom,
        callback: function callback($$v) {
          _vm.$set(contrats_signe, "nom", $$v);
        },
        expression: "contrats_signe.nom"
      }
    })], 1), _vm._v(" "), (contrats_signe === null || contrats_signe === void 0 || (_contrats_signe$nom = contrats_signe.nom) === null || _contrats_signe$nom === void 0 ? void 0 : _contrats_signe$nom.toUpperCase()) === "AUTRE" ? _c("div", {
      staticClass: "col"
    }, [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: contrats_signe.autre_nom,
        expression: "contrats_signe.autre_nom",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control",
      attrs: {
        rows: "1",
        readonly: _vm.is_notify_conformite && ((contrats_signe === null || contrats_signe === void 0 ? void 0 : contrats_signe.conformite) === "true" || (contrats_signe === null || contrats_signe === void 0 ? void 0 : contrats_signe.conformite) === null) || _vm.is_notify
      },
      domProps: {
        value: contrats_signe.autre_nom
      },
      on: {
        change: [function ($event) {
          return _vm.$set(contrats_signe, "autre_nom", $event.target.value);
        }, _vm.handleInput]
      }
    })]) : _vm._e()])]), _vm._v(" "), _c("td", {
      staticClass: "col-3 vertical-middle"
    }, [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: contrats_signe.contrats_commentaire,
        expression: "contrats_signe.contrats_commentaire",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control",
      staticStyle: {
        width: "200px"
      },
      attrs: {
        rows: "1",
        readonly: _vm.is_notify_conformite && ((contrats_signe === null || contrats_signe === void 0 ? void 0 : contrats_signe.conformite) === "true" || (contrats_signe === null || contrats_signe === void 0 ? void 0 : contrats_signe.conformite) === null) || _vm.is_notify
      },
      domProps: {
        value: contrats_signe.contrats_commentaire
      },
      on: {
        change: [function ($event) {
          return _vm.$set(contrats_signe, "contrats_commentaire", $event.target.value);
        }, _vm.handleInput]
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "col-3 vertical-middle"
    }, [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: contrats_signe.commentaire,
        expression: "contrats_signe.commentaire",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control",
      staticStyle: {
        width: "200px",
        color: "green"
      },
      attrs: {
        rows: "1",
        readonly: _vm.is_notify_conformite && ((contrats_signe === null || contrats_signe === void 0 ? void 0 : contrats_signe.conformite) === "true" || (contrats_signe === null || contrats_signe === void 0 ? void 0 : contrats_signe.conformite) === null) || _vm.is_notify
      },
      domProps: {
        value: contrats_signe.commentaire
      },
      on: {
        change: [function ($event) {
          return _vm.$set(contrats_signe, "commentaire", $event.target.value);
        }, _vm.handleInput]
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "col-1 vertical-middle"
    }, [_c("div", {
      staticClass: "d-flex align-items-center"
    }, [(contrats_signe === null || contrats_signe === void 0 ? void 0 : contrats_signe.contrats_files) > 0 ? _c("div", [_vm.showBtnDownloadEnvoie ? _c("div", {}, [!_vm.showAllFilesEnvoie[index] ? _vm._l((_vm$file_data_list_en = _vm.file_data_list_envoie[index]) === null || _vm$file_data_list_en === void 0 ? void 0 : _vm$file_data_list_en.slice(0, _vm.showMoreNumber), function (file, fileIndex) {
      return _c("div", {
        key: fileIndex + index + "xa",
        staticClass: "mb-1 nowrap"
      }, [_c("span", {
        staticClass: "p-1 px-2 mx-2 text-nowrap",
        staticStyle: {
          color: "black",
          "font-size": "13px",
          "border-radius": "5px",
          "margin-left": "0 !important",
          width: "150px"
        }
      }, [_c("i", {
        "class": _vm.getIcon(file === null || file === void 0 ? void 0 : file.file_ext)
      }), _vm._v(" " + _vm._s(_vm.formatFileName(file === null || file === void 0 ? void 0 : file.file_name)) + "." + _vm._s(file === null || file === void 0 ? void 0 : file.file_ext) + "\n                                  ")]), _vm._v(" "), _c("span", {
        staticClass: "p-1 px-2 text-nowrap",
        staticStyle: {
          color: "black",
          "font-size": "13px",
          "border-radius": "5px",
          "margin-left": "0 !important",
          width: "150px",
          cursor: "pointer",
          border: "1px solid rgb(44, 62, 80)"
        },
        attrs: {
          "data-toggle": "tooltip",
          title: "Télécharger le contrat"
        },
        on: {
          click: function click($event) {
            return _vm.downloadFile(file);
          }
        }
      }, [_c("i", {
        staticClass: "icofont-download"
      })])]);
    }) : _vm._e(), _vm._v(" "), _vm.showAllFilesEnvoie[index] ? _vm._l(_vm.file_data_list_envoie[index], function (file, fileIndex) {
      return _c("div", {
        key: fileIndex,
        staticClass: "mb-1 nowrap"
      }, [_c("span", {
        staticClass: "p-1 px-2 mx-2 text-nowrap",
        staticStyle: {
          color: "black",
          "font-size": "13px",
          "border-radius": "5px",
          "margin-left": "0 !important",
          width: "150px",
          cursor: "pointer"
        }
      }, [_c("i", {
        "class": _vm.getIcon(file === null || file === void 0 ? void 0 : file.file_ext)
      }), _vm._v(" " + _vm._s(_vm.formatFileName(file === null || file === void 0 ? void 0 : file.file_name)) + "." + _vm._s(file === null || file === void 0 ? void 0 : file.file_ext) + "\n                                  ")]), _vm._v(" "), _c("span", {
        staticClass: "p-1 px-2 text-nowrap",
        staticStyle: {
          color: "black",
          "font-size": "13px",
          "border-radius": "5px",
          "margin-left": "0 !important",
          width: "150px",
          cursor: "pointer"
        },
        attrs: {
          "data-toggle": "tooltip",
          title: "Télécharger le contrat"
        },
        on: {
          click: function click($event) {
            return _vm.downloadFile(file);
          }
        }
      }, [_c("i", {
        staticClass: "icofont-download"
      })])]);
    }) : _vm._e(), _vm._v(" "), ((_vm$file_data_list_en2 = _vm.file_data_list_envoie[index]) === null || _vm$file_data_list_en2 === void 0 ? void 0 : _vm$file_data_list_en2.length) > 2 ? _c("a", {
      staticStyle: {
        "font-size": "13px",
        color: "#bc872b",
        cursor: "pointer"
      },
      on: {
        click: function click($event) {
          return _vm.onChangeStateShowAll(index);
        }
      }
    }, [_c("span", {
      staticClass: "showT"
    }, [_vm._v(_vm._s(_vm.showAllFilesEnvoie[index] ? "reduire" : "Voir plus") + "\n                                ")])]) : _vm._e()], 2) : _c("div", [_c("span", {
      staticClass: "spinner-border"
    })])]) : _vm._e()])]), _vm._v(" "), _c("td", {
      staticClass: "col-1 vertical-middle"
    }, [_c("div", {
      staticClass: "d-flex align-items-center"
    }, [(contrats_signe === null || contrats_signe === void 0 ? void 0 : contrats_signe.files) > 0 ? _c("div", [_vm.showBtnDownload ? _c("div", {}, [!_vm.showAllFiles[index] ? _vm._l((_vm$file_data_list$in = _vm.file_data_list[index]) === null || _vm$file_data_list$in === void 0 ? void 0 : _vm$file_data_list$in.slice(0, _vm.showMoreNumber), function (file, fileIndex) {
      return _c("div", {
        key: fileIndex + index + "xa",
        staticClass: "mb-1 nowrap"
      }, [_c("span", {
        staticClass: "p-1 px-2 mx-2 text-nowrap",
        staticStyle: {
          color: "black",
          "font-size": "13px",
          "border-radius": "5px",
          "margin-left": "0 !important",
          width: "150px"
        }
      }, [_c("i", {
        "class": _vm.getIcon(file === null || file === void 0 ? void 0 : file.file_ext)
      }), _vm._v("\n                                    " + _vm._s(_vm.formatFileName(file === null || file === void 0 ? void 0 : file.file_name)) + "." + _vm._s(file === null || file === void 0 ? void 0 : file.file_ext) + "\n                                  ")]), _vm._v(" "), _c("span", {
        staticClass: "p-1 px-2 text-nowrap",
        staticStyle: {
          color: "black",
          "font-size": "13px",
          "border-radius": "5px",
          "margin-left": "0 !important",
          width: "150px",
          cursor: "pointer",
          border: "1px solid rgb(44, 62, 80)"
        },
        attrs: {
          "data-toggle": "tooltip",
          title: "Télécharger le contrat"
        },
        on: {
          click: function click($event) {
            return _vm.downloadFile(file);
          }
        }
      }, [_c("i", {
        staticClass: "icofont-download"
      })])]);
    }) : _vm._e(), _vm._v(" "), _vm.showAllFiles[index] ? _vm._l(_vm.file_data_list[index], function (file, fileIndex) {
      return _c("div", {
        key: fileIndex,
        staticClass: "mb-1 nowrap"
      }, [_c("span", {
        staticClass: "p-1 px-2 mx-2 text-nowrap",
        staticStyle: {
          color: "black",
          "font-size": "13px",
          "border-radius": "5px",
          "margin-left": "0 !important",
          width: "150px",
          cursor: "pointer"
        }
      }, [_c("i", {
        "class": _vm.getIcon(file === null || file === void 0 ? void 0 : file.file_ext)
      }), _vm._v("\n                                    " + _vm._s(file === null || file === void 0 ? void 0 : file.file_name) + "\n                                  ")]), _vm._v(" "), _c("span", {
        staticClass: "p-1 px-2 text-nowrap",
        staticStyle: {
          color: "black",
          "font-size": "13px",
          "border-radius": "5px",
          "margin-left": "0 !important",
          width: "150px",
          cursor: "pointer"
        },
        attrs: {
          "data-toggle": "tooltip",
          title: "Télécharger le contrat"
        },
        on: {
          click: function click($event) {
            return _vm.downloadFile(file);
          }
        }
      }, [_c("i", {
        staticClass: "icofont-download"
      })])]);
    }) : _vm._e(), _vm._v(" "), ((_vm$file_data_list$in2 = _vm.file_data_list[index]) === null || _vm$file_data_list$in2 === void 0 ? void 0 : _vm$file_data_list$in2.length) > 2 ? _c("a", {
      staticStyle: {
        "font-size": "13px",
        color: "#bc872b",
        cursor: "pointer"
      },
      on: {
        click: function click($event) {
          return _vm.onChangeStateShowAll(index);
        }
      }
    }, [_c("span", {
      staticClass: "showT"
    }, [_vm._v(_vm._s(_vm.showAllFiles[index] ? "reduire" : "Voir plus") + "\n                                ")])]) : _vm._e()], 2) : _c("div", [_c("span", {
      staticClass: "spinner-border"
    })])]) : _c("div", [_vm._v("\n                            Le " + _vm._s(_vm.role) + " n'a pas uploadé de fichier\n                          ")])])]), _vm._v(" "), _c("td", {
      staticClass: "col-2 vertical-middle",
      staticStyle: {
        width: "100px"
      }
    }, [(contrats_signe === null || contrats_signe === void 0 ? void 0 : contrats_signe.files) > 0 ? _c("div", {
      staticClass: "d-flex"
    }, [_c("div", {
      staticClass: "m-2 d-flex mr-4"
    }, [_c("input", {
      attrs: {
        type: "checkbox",
        id: "contrats_signes_conformite_true_".concat(index),
        disabled: _vm.is_notify
      },
      domProps: {
        checked: (contrats_signe === null || contrats_signe === void 0 ? void 0 : contrats_signe.conformite) == "true",
        value: true
      },
      on: {
        input: function input($event) {
          return _vm.checkboxVal($event, index);
        }
      }
    }), _vm._v(" "), _c("label", {
      staticClass: "text-nowrap",
      attrs: {
        "for": "contrats_signes_conformite_true_".concat(index)
      }
    }, [_vm._v("Oui")])]), _vm._v(" "), _c("div", {
      staticClass: "m-2 d-flex mr-4"
    }, [_c("input", {
      attrs: {
        type: "checkbox",
        id: "contrats_signes_conformite_false_".concat(index),
        disabled: _vm.is_notify
      },
      domProps: {
        checked: (contrats_signe === null || contrats_signe === void 0 ? void 0 : contrats_signe.conformite) == "false",
        value: false
      },
      on: {
        input: function input($event) {
          return _vm.checkboxVal($event, index);
        }
      }
    }), _vm._v(" "), _c("label", {
      staticClass: "text-nowrap",
      attrs: {
        "for": "contrats_signes_conformite_false_".concat(index)
      }
    }, [_vm._v("Non")])])]) : _c("div", [_vm._v("\n                              Vous ne pouvez pas modifier le statut du contrat\n                          ")])]), _vm._v(" "), _c("td", {
      staticClass: "col-3 vertical-middle"
    }, [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: contrats_signe.commentaire_conformite,
        expression: "contrats_signe.commentaire_conformite",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control",
      staticStyle: {
        width: "200px",
        color: "green"
      },
      attrs: {
        rows: "1",
        readonly: _vm.is_notify_conformite && ((contrats_signe === null || contrats_signe === void 0 ? void 0 : contrats_signe.conformite) === "true" || (contrats_signe === null || contrats_signe === void 0 ? void 0 : contrats_signe.conformite) === null) || _vm.is_notify
      },
      domProps: {
        value: contrats_signe.commentaire_conformite
      },
      on: {
        change: [function ($event) {
          return _vm.$set(contrats_signe, "commentaire_conformite", $event.target.value);
        }, _vm.handleInput]
      }
    })])]);
  }), _vm._v(" "), _vm.can_notify ? _c("tr", {
    staticClass: "vertical-middle"
  }, [_c("td", {
    staticClass: "col-4 sticky vertical-middle",
    staticStyle: {
      "min-width": "450px"
    }
  }), _vm._v(" "), _c("td", {
    staticClass: "text-center",
    attrs: {
      colspan: "6"
    }
  }, [_c("button", {
    staticClass: "btn text-white",
    staticStyle: {
      cursor: "pointer",
      right: "16px",
      bottom: "10px",
      background: "rgb(44, 62, 80)",
      "max-width": "max-content"
    },
    attrs: {
      disabled: _vm.is_notify,
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.NotifyUser();
      }
    }
  }, [_vm._v("\n                          Renvoyer le(s) contrat(s)\n                        ")])])]) : _vm._e()], 2)])]), _vm._v(" "), this.get_contrats ? _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "text-center vertical-middle"
  }, [_c("button", {
    staticClass: "btn text-white mt-3 btn-primary",
    staticStyle: {
      cursor: "pointer",
      right: "16px",
      bottom: "10px",
      "max-width": "max-content"
    },
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.getContratsData();
      }
    }
  }, [_vm._v("\n                      Actualiser les contrats\n                    ")])])])]) : _c("div", {
    staticClass: "row"
  }, [_vm._m(6)])])]) : _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        return _vm.toggleIsSeen("contrats_signes");
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "contrats_signes"
    }
  }, [_vm._v("\n                Contrats signés\n                "), _c("chevron-down-icon", {
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
  }, [_vm._v("\n            Fermer le tableau\n          ")])])])]) : _c("div", {
    staticClass: "card card-width-height"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc pb-0 pt-2"
  }, [_c("h6", {
    staticClass: "head",
    attrs: {
      id: "dajc-red0-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v(_vm._s(_vm.tb_display_name) + " : Validation des contrats")]), _vm._v(" "), _c("div", {
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
  }, [_c("span", [_vm._v("\n                      " + _vm._s(_vm.formDataToBeWatched.notes.length) + "\n                    ")])])])]) : _vm._e(), _vm._v(" "), _c("chevron-down-icon", {
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
  return _c("td", {
    staticClass: "font-weight-bold text-uppercase vertical-middle sticky"
  }, [_c("label", {
    staticStyle: {
      "padding-left": "5px"
    },
    attrs: {
      "for": ""
    }
  }, [_vm._v(" Nom du contrat")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "font-weight-bold text-uppercase vertical-middle",
    staticStyle: {
      "background-color": "#f4f3f3"
    }
  }, [_c("label", {
    staticStyle: {
      "padding-left": "5px"
    },
    attrs: {
      "for": ""
    }
  }, [_vm._v(" Commentaire")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "font-weight-bold text-uppercase vertical-middle text-center",
    staticStyle: {
      "background-color": "#f4f3f3"
    }
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(" Contrat(s) envoyé(s)")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "font-weight-bold text-uppercase vertical-middle text-center",
    staticStyle: {
      "background-color": "#f4f3f3"
    }
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(" Contrat(s) signé(s)")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "font-weight-bold text-uppercase vertical-middle text-center"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Conformité")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "font-weight-bold text-uppercase vertical-middle"
  }, [_c("label", {
    staticStyle: {
      "padding-left": "5px"
    },
    attrs: {
      "for": ""
    }
  }, [_vm._v(" Commentaire non conformite")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "text-center vertical-middle"
  }, [_c("span", {
    staticClass: "spinner-border"
  })])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV0.vue?vue&type=template&id=11bab9d4&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV0.vue?vue&type=template&id=11bab9d4&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$formDataToBeWatch, _vm$meta_data$dossier, _vm$notif_accord_cred, _vm$notif_accord_cred2, _vm$notif_accord_cred3, _vm$formDataToBeWatch2;
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
      id: "dcp-ppo7-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Checklist primaire\n                        ")]), _vm._v(" "), _c("div", {
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
    staticClass: "col-12 p-0 position-relative"
  }, [!["", null, undefined].includes(_vm.notif_accord_credit_signe) && ((_vm$meta_data$dossier = _vm.meta_data["dossier_credit"]) === null || _vm$meta_data$dossier === void 0 ? void 0 : _vm$meta_data$dossier.notif_accord_credit) == true ? [_vm.seen2 ? _c("div", {
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
      id: "Signature-de-la-notification-(Optionnel)"
    }
  }, [_vm._v("\n                                    Signature de la notification (Optionnel)\n                                    "), _c("chevron-up-icon", {
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
    staticClass: "table-responsive mt-3"
  }, [_c("table", {
    staticClass: "table mb-2 table-bordered"
  }, [_vm._m(0), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {
    staticClass: "vertical-middle"
  }, [_vm._v("\n                                                    Notification signée\n                                                ")]), _vm._v(" "), _c("td", {
    staticClass: "vertical-middle text-center"
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
      id: "oui_0_",
      disabled: true
    },
    domProps: {
      checked: _vm.notif_accord_credit_signe.checked == "Oui"
    }
  })])]), _vm._v(" "), _c("td", {
    staticClass: "vertical-middle text-center"
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
      id: "non_0_",
      disabled: true
    },
    domProps: {
      checked: _vm.notif_accord_credit_signe.checked == "Non"
    }
  })])]), _vm._v(" "), _c("td", {
    staticClass: "vertical-middle text-center"
  }, [_vm.notif_accord_credit_signe.checked == "Oui" ? _c("div", {
    staticClass: "d-flex align-items-center justify-content-center"
  }, [_c("div", [((_vm$notif_accord_cred = _vm.notif_accord_credit_signe) === null || _vm$notif_accord_cred === void 0 ? void 0 : _vm$notif_accord_cred.files) > 0 ? _c("span", {
    staticClass: "p-1 px-2 mx-2 text-nowrap",
    staticStyle: {
      "background-color": "rgb(44, 62, 80)",
      color: "white",
      "font-size": "13px",
      "border-radius": "5px",
      "margin-left": "0 !important",
      width: "150px"
    }
  }, [_vm._v(_vm._s(((_vm$notif_accord_cred2 = _vm.notif_accord_credit_signe) === null || _vm$notif_accord_cred2 === void 0 ? void 0 : _vm$notif_accord_cred2.files) > 0 ? ((_vm$notif_accord_cred3 = _vm.notif_accord_credit_signe) === null || _vm$notif_accord_cred3 === void 0 ? void 0 : _vm$notif_accord_cred3.files) + " fichier(s) uploadé(s)" : ""))]) : _vm._e()]), _vm._v(" "), _vm.notif_accord_credit_signe.name.trim() != "" ? _c("div", [_c("button", {
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
        return _vm.handleDoubleClickOrClick2();
      }
    }
  }, [_c("i", {
    staticClass: "icofont-attachment"
  })])]) : _vm._e()]) : _c("div", {
    staticClass: "text-center text-danger"
  }, [_vm._v("\n                                                        Aucun fichier(s) attaché(s)\n                                                    ")])])])])])])])]) : _c("div", {
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
      id: "Signature-de-la-notification-(Optionnel)"
    }
  }, [_vm._v("\n                                    Signature de la notification (Optionnel)\n                                    "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])])] : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(1), _vm._v(" "), _c("tbody", [_vm._l(_vm.check_list_diligeances, function (el, index) {
    return _c("tr", {
      key: index
    }, [[1, 7].includes(index) ? [_c("td", {
      attrs: {
        colspan: "8"
      }
    }, [_c("span", [_vm._v(_vm._s(el.name))])])] : [_c("td", [index > 13 && !(el !== null && el !== void 0 && el.from_monteur_doss) ? _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.name,
        expression: "\n                                                    el.name\n                                                "
      }],
      staticClass: "form-control",
      staticStyle: {
        "min-width": "250px"
      },
      attrs: {
        type: "text",
        required: "",
        disabled: el === null || el === void 0 ? void 0 : el.from_monteur_doss
      },
      domProps: {
        value: el.name
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(el, "name", $event.target.value);
        }
      }
    }) : _c("span", {
      "class": {
        floating_text: (el === null || el === void 0 ? void 0 : el.ss_obj) == true
      }
    }, [_vm._v(_vm._s(el.name))])]), _vm._v(" "), _c("td", [_c("div", {
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
        disabled: el === null || el === void 0 ? void 0 : el.from_monteur_doss
      },
      domProps: {
        checked: el.value == "Oui"
      },
      on: {
        change: function change($event) {
          return _vm.checkboxValCashCall($event, index);
        }
      }
    })])]), _vm._v(" "), _c("td", [_c("div", {
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
        value: "Non",
        id: "non" + index,
        disabled: el === null || el === void 0 ? void 0 : el.from_monteur_doss
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
        value: "Non applicable",
        id: "non_applicable" + index,
        disabled: el === null || el === void 0 ? void 0 : el.from_monteur_doss
      },
      domProps: {
        checked: el.value == "Non applicable"
      },
      on: {
        change: function change($event) {
          return _vm.checkboxValCashCall($event, index);
        }
      }
    })])]), _vm._v(" "), _c("td", [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.numero_compte,
        expression: "el.numero_compte"
      }],
      staticClass: "form-control",
      staticStyle: {
        "min-width": "150px"
      },
      attrs: {
        cols: "1",
        rows: "1",
        disabled: el === null || el === void 0 ? void 0 : el.from_monteur_doss
      },
      domProps: {
        value: el.numero_compte
      },
      on: {
        change: _vm.handleInput,
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(el, "numero_compte", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [el.value == "Oui" ? _c("div", {
      staticClass: "d-flex align-items-center text-center justify-content-center"
    }, [_c("div", [(el === null || el === void 0 ? void 0 : el.files) > 0 ? _c("span", {
      staticClass: "p-1 px-2 mx-2 text-nowrap",
      staticStyle: {
        "background-color": "rgb(44, 62, 80)",
        color: "white",
        "font-size": "13px",
        "border-radius": "5px",
        "margin-left": "0!important",
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
          return _vm.handleDoubleClickOrClick($event, index, el);
        }
      }
    }, [_c("i", {
      staticClass: "icofont-attachment"
    })])]) : _vm._e()]) : _c("div", {
      staticClass: "text-center text-danger"
    }, [_vm._v("\n                                            Aucun fichier(s) uploadé(s)\n                                        ")])]), _vm._v(" "), _c("td", [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.comment,
        expression: "el.comment"
      }],
      staticClass: "form-control",
      staticStyle: {
        "min-width": "150px"
      },
      attrs: {
        cols: "1",
        rows: "1",
        disabled: el === null || el === void 0 ? void 0 : el.from_monteur_doss
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
    })]), _vm._v(" "), _c("td", [index > 13 && !(el !== null && el !== void 0 && el.from_monteur_doss) ? _c("button", {
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
          return _vm.remove(index);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1) : _vm._e()])]], 2);
  }), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "text-right",
    attrs: {
      colspan: "8"
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
  })], 1)])])], 2)])])]), _vm._v(" "), _c("div", {
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
  }, [_vm._v("\n                        Fermer le tableau\n                    ")])], 2)])]) : _c("div", {
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
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Checklist primaire\n                        ")]), _vm._v(" "), _c("div", {
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
  return _c("thead", [_c("tr", [_c("td", {
    staticClass: "text-center vertical-middle th fw-bold col-4"
  }), _vm._v(" "), _c("td", {
    staticClass: "text-center vertical-middle th fw-bold col-2"
  }, [_vm._v("\n                                                    Oui\n                                                ")]), _vm._v(" "), _c("td", {
    staticClass: "text-center vertical-middle th fw-bold col-2"
  }, [_vm._v("\n                                                    Non\n                                                ")]), _vm._v(" "), _c("td", {
    staticClass: "text-center vertical-middle th fw-bold col-4"
  }, [_vm._v("\n                                                    Fichier attaché\n                                                ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", {
    staticClass: "text-center"
  }, [_c("td", {
    staticClass: "th vertical-middle fw-bold"
  }, [_c("label", [_vm._v("LIBELLE")])]), _vm._v(" "), _c("td", {
    staticClass: "th vertical-middle fw-bold"
  }, [_c("label", [_vm._v("OUI ")])]), _vm._v(" "), _c("td", {
    staticClass: "th vertical-middle fw-bold"
  }, [_c("label", [_vm._v("NON ")])]), _vm._v(" "), _c("td", {
    staticClass: "th vertical-middle fw-bold"
  }, [_c("label", [_vm._v("NON APPLICABLE")])]), _vm._v(" "), _c("td", {
    staticClass: "th vertical-middle fw-bold"
  }, [_c("label", [_vm._v("NUMERO DE COMPTE")])]), _vm._v(" "), _c("td", {
    staticClass: "th vertical-middle fw-bold"
  }, [_c("label", [_vm._v("FICHIERS ATTACHES")])]), _vm._v(" "), _c("td", {
    staticClass: "th vertical-middle fw-bold"
  }, [_c("label", [_vm._v("COMMENTAIRE")])]), _vm._v(" "), _c("td", {
    staticClass: "th vertical-middle fw-bold"
  }, [_c("label")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV1.vue?vue&type=template&id=119e8ad2&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV1.vue?vue&type=template&id=119e8ad2&scoped=true ***!
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
      id: "ca6-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Fiche de suivi (Optionnelle)\n                        ")]), _vm._v(" "), _c("div", {
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
  }, [_c("span", [_vm._v(" " + _vm._s(_vm.formDataToBeWatched.notes.length) + " ")])])])]) : _vm._e(), _vm._v(" "), _c("chevron-up-icon", {
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
  })], 1)])])]), _vm._v(" "), _vm._l(_vm.fiche_suivis, function (ficheSuivi, index) {
    return _c("div", {
      key: index.toString() + "fiche_suivis",
      staticClass: "card-body"
    }, [_vm.seens[index] == true ? _c("div", {
      staticClass: "card-body"
    }, [_c("div", {
      staticClass: "relook-header",
      staticStyle: {
        cursor: "pointer"
      },
      on: {
        click: function click($event) {
          return _vm.retractDynamique(index);
        }
      }
    }, [_c("h6", {
      "class": "subdiv" + _vm.tb_name + " mb-0",
      attrs: {
        id: "frais-annexes"
      }
    }, [_c("div", {
      staticClass: "d-flex justify-content-between"
    }, [_c("div", [_c("button", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: index != 0,
        expression: "index != 0"
      }],
      staticStyle: {
        "background-color": "transparent",
        "margin-right": "10px",
        border: "none"
      },
      attrs: {
        type: "button",
        title: "Supprimer"
      },
      on: {
        click: function click($event) {
          return _vm.removeFiche(index);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1), _vm._v("\n                                    Fiche de suivi " + _vm._s(index + 1) + "\n                                ")]), _vm._v(" "), _c("chevron-up-icon", {
      staticClass: "custom-class",
      staticStyle: {
        "float": "right",
        cursor: "pointer"
      },
      attrs: {
        size: "21"
      }
    })], 1)])]), _vm._v(" "), _vm._l(ficheSuivi.fiche, function (elt, index_) {
      return _c("div", {
        key: index_
      }, [_c("div", {
        staticClass: "row mt-2"
      }, [_c("div", {
        staticClass: "col-1"
      }, [_vm._v("Q" + _vm._s(index_ + 1))]), _vm._v(" "), _c("div", {
        staticClass: "col"
      }, [_c("textarea", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: elt.question,
          expression: "elt.question"
        }],
        staticClass: "form-control",
        "class": _vm.setColor(elt),
        attrs: {
          disabled: elt.is_answered || ficheSuivi.has_notified,
          type: "text",
          cols: "30",
          rows: "1"
        },
        domProps: {
          value: elt.question
        },
        on: {
          change: function change($event) {
            _vm.handleInput1($event, index);
            _vm.setButton($event, index);
          },
          input: function input($event) {
            if ($event.target.composing) return;
            _vm.$set(elt, "question", $event.target.value);
          }
        }
      })]), _vm._v(" "), index_ == 0 && !ficheSuivi.has_notified ? _c("div", {
        staticClass: "col-auto"
      }, [_c("button", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: index_ == 0,
          expression: "index_ == 0"
        }],
        staticStyle: {
          "background-color": "#2c3e50",
          color: "#ffffff",
          "border-radius": "15%",
          border: "none"
        },
        attrs: {
          type: "button",
          title: "Ajouter une nouvelle garantie"
        },
        on: {
          click: function click($event) {
            return _vm.addMore(index);
          }
        }
      }, [_c("plus-icon", {
        staticClass: "custom-class",
        attrs: {
          size: "21"
        }
      })], 1)]) : _vm._e(), _vm._v(" "), index_ != 0 ? _c("div", {
        staticClass: "col-auto"
      }, [_c("button", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: index_ != 0 && elt.is_answered == false,
          expression: "index_ != 0 && elt.is_answered == false"
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
            return _vm.remove(index, index_);
          }
        }
      }, [_c("trash-icon", {
        staticClass: "custom-class",
        attrs: {
          size: "21"
        }
      })], 1)]) : _vm._e(), _vm._v(" "), elt.is_anwered == true ? _c("div", {
        staticClass: "col-auto"
      }) : _vm._e()]), _vm._v(" "), _c("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: elt.is_answered,
          expression: "elt.is_answered"
        }],
        staticClass: "row mt-2"
      }, [_c("div", {
        staticClass: "col-1"
      }, [_vm._v("R" + _vm._s(index + 1))]), _vm._v(" "), _c("div", {
        staticClass: "col"
      }, [_c("textarea", {
        directives: [{
          name: "model",
          rawName: "v-model.lazy",
          value: elt.reponse,
          expression: "elt.reponse",
          modifiers: {
            lazy: true
          }
        }],
        staticClass: "form-control text-success",
        staticStyle: {
          color: "green"
        },
        attrs: {
          readonly: "",
          type: "text",
          cols: "30",
          rows: "1"
        },
        domProps: {
          value: elt.reponse
        },
        on: {
          change: [function ($event) {
            return _vm.$set(elt, "reponse", $event.target.value);
          }, _vm.handleInput]
        }
      })]), _vm._v(" "), _c("div", {
        staticClass: "col-auto"
      })])]);
    }), _vm._v(" "), !ficheSuivi.has_notified ? _c("div", {
      staticClass: "row mt-4 ml-4"
    }, [_c("div", {
      staticClass: "col-1"
    }), _vm._v(" "), _c("div", {
      staticClass: "col-9"
    }, [_c("div", {
      staticClass: "d-flex position-relative align-items-center"
    }, [_c("vue-tags-input", {
      staticStyle: {
        width: "100%"
      },
      attrs: {
        "autocomplete-items": _vm.filteredUsers,
        tags: _vm.tags[index],
        placeholder: "Ajouter un collaborateur à notifier"
      },
      on: {
        input: function input($event) {
          return _vm.getTag(index);
        },
        "tags-changed": function tagsChanged($event) {
          return _vm.updateTags($event, index);
        }
      },
      model: {
        value: _vm.tag[index],
        callback: function callback($$v) {
          _vm.$set(_vm.tag, index, $$v);
        },
        expression: "tag[index]"
      }
    }), _vm._v(" "), _vm.searchUser ? _c("span", {
      staticClass: "spinner-border spinner-border spinner-custom-input",
      staticStyle: {
        "margin-right": "17px"
      }
    }) : _vm._e()], 1)]), _vm._v(" "), _c("div", {
      staticClass: "col-2"
    }, [_vm.buttonStatus[index] == true && !_vm.isLoding[index] ? _c("button", {
      staticClass: "btn btn-primary",
      attrs: {
        title: "Choisir un utilisateur pour lui envoyer une notification"
      },
      on: {
        click: function click($event) {
          return _vm.NotifyUser(index);
        }
      }
    }, [_vm._v("Notifier")]) : _vm.buttonStatus[index] == true && _vm.isLoding[index] == true ? _c("div", {
      staticClass: "spinner-border text-primary",
      attrs: {
        role: "status"
      }
    }, [_c("span", {
      staticClass: "sr-only"
    }, [_vm._v("Loading...")])]) : _vm.buttonStatus[index] == false && _vm.isLoding[index] == false ? _c("button", {
      staticClass: "btn btn-primary",
      attrs: {
        title: "Choisir un utilisateur pour lui envoyer une notification",
        disabled: ""
      }
    }, [_vm._v("Notifier")]) : _vm._e()])]) : _vm._e()], 2) : _c("div", [_c("div", {
      staticClass: "card-body"
    }, [_c("div", {
      staticClass: "relook-header",
      staticStyle: {
        cursor: "pointer"
      },
      on: {
        click: function click($event) {
          return _vm.retractDynamique(index);
        }
      }
    }, [_c("h6", {
      staticClass: "mb-0",
      attrs: {
        id: "frais-annexes"
      }
    }, [_c("div", {
      staticClass: "d-flex justify-content-between"
    }, [_c("div", [_c("button", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: index != 0,
        expression: "index != 0"
      }],
      staticStyle: {
        "background-color": "transparent",
        "margin-right": "10px",
        border: "none"
      },
      attrs: {
        type: "button",
        title: "Supprimer"
      },
      on: {
        click: function click($event) {
          return _vm.removeFiche(index);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1), _vm._v("\n                                        Fiche de suivi " + _vm._s(index + 1) + "\n                                    ")]), _vm._v(" "), _c("chevron-down-icon", {
      staticClass: "custom-class",
      staticStyle: {
        "float": "right",
        cursor: "pointer"
      },
      attrs: {
        size: "21"
      }
    })], 1)])])])]), _vm._v(" "), _c("div", {
      staticClass: "card-body"
    }, [_c("div", {
      staticClass: "d-flex justify-content-end"
    }, [_c("button", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.fiche_suivis.length - 1 == index,
        expression: "fiche_suivis.length - 1 == index"
      }],
      staticClass: "btn shadow-md text-white text-end mb-3",
      staticStyle: {
        cursor: "pointer",
        background: "#2c3e50",
        "max-width": "max-content"
      },
      attrs: {
        type: "button",
        name: "button"
      },
      on: {
        click: function click($event) {
          return _vm.addMoreFiche();
        }
      }
    }, [_vm._v("\n                            Ajouter une nouvelle fiche\n                        ")])]), _vm._v(" "), _c("hr", {
      staticClass: "my-0 py-0"
    })])]);
  }), _vm._v(" "), _c("div", {
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
  }, [_vm._v("\n                Fermer le tableau\n            ")])], 2) : _c("div", {
    staticClass: "card card-width-height"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc pb-0 pt-2"
  }, [_c("h6", {
    ref: "topdiv",
    staticClass: "head",
    attrs: {
      id: "ca6-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Fiche de suivi (Optionnelle)\n                        ")]), _vm._v(" "), _c("div", {
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
  }, [_c("span", [_vm._v(" " + _vm._s(_vm.formDataToBeWatched.notes.length) + " ")])])])]) : _vm._e(), _vm._v(" "), _c("chevron-down-icon", {
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
    staticClass: "pb-5",
    attrs: {
      name: "confirm_supp_fiche_suivis",
      width: "300",
      height: "auto",
      adaptive: true,
      resizable: true
    }
  }, [_c("div", {
    staticClass: "container py-3 mb-2",
    staticStyle: {
      "max-height": "100%",
      overflow: "auto"
    }
  }, [_c("div", {
    staticClass: "col-12 fw-bold mb-2"
  }, [_vm._v("Voulez-vous supprimer cette fiche ?")]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-between"
  }, [_c("button", {
    staticClass: "btn bg-danger border-none",
    on: {
      click: function click($event) {
        return _vm.closeModal();
      }
    }
  }, [_vm._v("NON")]), _vm._v(" "), _c("button", {
    staticClass: "btn bg-success",
    on: {
      click: function click($event) {
        return _vm.deleteFiche(_vm.toDelete);
      }
    }
  }, [_vm._v("OUI")])])])]), _vm._v(" "), _c("note-modal", {
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
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV2.vue?vue&type=template&id=11825bd0&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV2.vue?vue&type=template&id=11825bd0&scoped=true ***!
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
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Encodage\n                        ")]), _vm._v(" "), _c("div", {
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
      id: "Encodage"
    }
  }, [_vm._v("\n                        Encodage\n                        "), _c("chevron-up-icon", {
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
  }, [_vm._m(0), _vm._v(" "), _c("tbody", _vm._l(_vm.encodage_effectue, function (el, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_vm._v("\n                                        " + _vm._s(el.name) + "\n                                    ")]), _vm._v(" "), _c("td", {
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
        id: "oui" + index
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
        value: "Non",
        id: "non" + index
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
        value: "Non applicable",
        id: "Non applicable" + index
      },
      domProps: {
        checked: el.value == "Non applicable"
      },
      on: {
        change: function change($event) {
          return _vm.checkboxValCashCall($event, index);
        }
      }
    })])]), _vm._v(" "), _c("td", {
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
        value: "Existant",
        id: "Existant" + index
      },
      domProps: {
        checked: el.value == "Existant"
      },
      on: {
        change: function change($event) {
          return _vm.checkboxValCashCall($event, index);
        }
      }
    })])]), _vm._v(" "), _c("td", [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.numero_encodage,
        expression: "el.numero_encodage"
      }],
      staticClass: "form-control",
      staticStyle: {
        "min-width": "150px"
      },
      attrs: {
        cols: "1",
        rows: "1"
      },
      domProps: {
        value: el.numero_encodage
      },
      on: {
        change: _vm.handleInput,
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(el, "numero_encodage", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [_c("div", [_c("date-input", {
      staticStyle: {
        "min-width": "250px"
      },
      attrs: {
        value: el.date_encodage
      },
      on: {
        input: function input($event) {
          return _vm.formDataVars($event, index);
        }
      }
    })], 1)]), _vm._v(" "), _c("td", [el.value == "Oui" ? _c("div", {
      staticClass: "d-flex align-items-center text-center justify-content-center"
    }, [_c("div", [(el === null || el === void 0 ? void 0 : el.files) > 0 ? _c("span", {
      staticClass: "p-1 px-2 mx-2 text-nowrap",
      staticStyle: {
        "background-color": "rgb(44, 62, 80)",
        color: "white",
        "font-size": "13px",
        "border-radius": "5px",
        "margin-left": "0!important",
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
          return _vm.handleDoubleClickOrClick($event, index, el);
        }
      }
    }, [_c("i", {
      staticClass: "icofont-attachment"
    })])]) : _vm._e()]) : _c("div", {
      staticClass: "text-center text-danger"
    }, [_vm._v("\n                                            Aucun fichier(s) uploadé(s)\n                                        ")])])]);
  }), 0)])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 mt-4 mb-4"
  }, [_c("span", [_vm._v("Commentaire")]), _vm._v(" "), _c("vue-editor", {
    attrs: {
      maximum: 1000,
      id: "comment_encodage"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.comment_encodage,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "comment_encodage", $$v);
      },
      expression: "\n                          formDataToBeWatched.comment_encodage\n                      "
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
      id: "Encodage"
    }
  }, [_vm._v("\n                    Encodage\n                      "), _c("chevron-down-icon", {
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
  }, [_vm._v("\n              Fermer le tableau\n          ")])]) : _c("div", {
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
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Encodage\n                        ")]), _vm._v(" "), _c("div", {
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
  return _c("thead", [_c("tr", {
    staticClass: "text-center"
  }, [_c("td", {
    staticClass: "th vertical-middle fw-bold"
  }, [_c("label", [_vm._v("LIBELLE")])]), _vm._v(" "), _c("td", {
    staticClass: "th vertical-middle fw-bold"
  }, [_c("label", [_vm._v("OUI ")])]), _vm._v(" "), _c("td", {
    staticClass: "th vertical-middle fw-bold"
  }, [_c("label", [_vm._v("NON ")])]), _vm._v(" "), _c("td", {
    staticClass: "th vertical-middle fw-bold"
  }, [_c("label", [_vm._v("NON APPLICABLE ")])]), _vm._v(" "), _c("td", {
    staticClass: "th vertical-middle fw-bold"
  }, [_c("label", [_vm._v("EXISTANT ")])]), _vm._v(" "), _c("td", {
    staticClass: "th vertical-middle fw-bold"
  }, [_c("label", [_vm._v("NUMERO ENCODAGE")])]), _vm._v(" "), _c("td", {
    staticClass: "th vertical-middle fw-bold"
  }, [_c("label", [_vm._v("DATE D'ENCODAGE")])]), _vm._v(" "), _c("td", {
    staticClass: "th vertical-middle fw-bold"
  }, [_c("label", [_vm._v("FICHIERS ATTACHES")])])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV3.vue?vue&type=template&id=11662cce&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV3.vue?vue&type=template&id=11662cce&scoped=true ***!
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
      id: "ts3-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n              " + _vm._s(_vm.tb_display_name) + " : Fichiers annexes\n            ")]), _vm._v(" "), _c("div", {
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
  }, [_c("span", [_vm._v(" " + _vm._s(_vm.formDataToBeWatched.notes.length) + " ")])])])]) : _vm._e(), _vm._v(" "), _c("chevron-up-icon", {
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
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "table-responsive mb-4"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.isUploading,
      expression: "isUploading"
    }],
    staticClass: "text-center"
  }, [_c("span", {
    staticClass: "spinner-border"
  }), _vm._v(" "), _c("div", [_vm._v("Upload du fichier...")])]), _vm._v(" "), _c("table", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.isUploading,
      expression: "!isUploading"
    }],
    staticClass: "table table-borderless"
  }, [_vm._m(1), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", [_c("div", {
    staticClass: "d-flex"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.fileToUpload.file_name,
      expression: "fileToUpload.file_name"
    }],
    staticClass: "form-control",
    staticStyle: {
      width: "100%"
    },
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.fileToUpload.file_name
    },
    on: {
      change: _vm.showRefs,
      keyup: function keyup($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        return _vm.addFileType.apply(null, arguments);
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.fileToUpload, "file_name", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.fileToUpload.file_name.trim() != "" ? _c("button", {
    staticClass: "btn shadow-md text-white mx-2",
    staticStyle: {
      cursor: "pointer",
      background: "#2c3e50",
      width: "36px",
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
        return _vm.handleDoubleClickOrClick($event);
      }
    }
  }, [_c("i", {
    staticClass: "icofont-attachment"
  })]) : _vm._e()])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_vm._m(2), _vm._v(" "), _c("table", {
    staticClass: "table table-borderless"
  }, [_vm._m(3), _vm._v(" "), _vm.isLoading ? _c("tbody", [_c("tr", [_vm.isLoading ? _c("td", {
    staticClass: "text-center"
  }, [_c("span", {
    staticClass: "spinner-border"
  }), _vm._v(" "), _c("div", [_vm._v("Chargement des données")])]) : _c("td", [_vm._v("\n                      Aucun fichier attaché\n                  ")])])]) : [_vm.files.length > 0 ? _c("tbody", _vm._l(_vm.files, function (file, index) {
    var _file$ext;
    return _c("tr", {
      key: index
    }, [_c("td", {
      attrs: {
        colspan: "2"
      }
    }, [_c("label", [_vm._v(" " + _vm._s(file.file_name))])]), _vm._v(" "), _c("td", {
      attrs: {
        align: "end"
      }
    }, [["png", "webp", "jpg", "jpeg"].includes(file === null || file === void 0 ? void 0 : file.ext.toLowerCase()) ? _c("button", {
      staticClass: "btn btn-sm",
      attrs: {
        title: "voir le fichier"
      },
      on: {
        click: function click($event) {
          return _vm.preview(file);
        }
      }
    }, [_c("EyeIcon")], 1) : (file === null || file === void 0 || (_file$ext = file.ext) === null || _file$ext === void 0 ? void 0 : _file$ext.toLowerCase()) == "pdf" ? _c("a", {
      staticClass: "btn btn-sm",
      on: {
        click: function click($event) {
          return _vm.openPDFReaderModal(_vm.httpHost + "://" + file.file_url);
        }
      }
    }, [_c("i", {
      staticClass: "icofont icofont-eye"
    })]) : _c("a", {
      staticClass: "btn btn-sm",
      on: {
        click: function click($event) {
          return _vm.downloadFile(file.file_url);
        }
      }
    }, [_c("i", {
      staticClass: "icofont icofont-download"
    })]), _vm._v(" "), _vm.userConnected == file.user_id ? _c("button", {
      staticClass: "btn border-0 btn-sm",
      attrs: {
        disabled: _vm.deleteLoading[index]
      },
      on: {
        click: function click($event) {
          return _vm.deleteFile({
            id: file.id,
            file_url: file.file_url
          }, file, index);
        }
      }
    }, [_c("TrashIcon")], 1) : _vm._e()])]);
  }), 0) : _c("tbody", [_vm._m(4)])]], 2)])]), _vm._v(" "), _c("div", {
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
  }, [_vm._v("\n        Fermer le tableau\n      ")])]) : _c("div", {
    staticClass: "card card-width-height"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc pb-0 pt-2"
  }, [_c("h6", {
    staticClass: "head",
    attrs: {
      id: "ts3-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n              " + _vm._s(_vm.tb_display_name) + " : Fichiers annexes\n            ")]), _vm._v(" "), _c("div", {
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
  }, [_c("span", [_vm._v(" " + _vm._s(_vm.formDataToBeWatched.notes.length) + " ")])])])]) : _vm._e(), _vm._v(" "), _c("chevron-down-icon", {
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
      name: "preview1",
      resizable: "",
      width: "1000",
      height: "auto"
    }
  }, [_vm.currentFile != null ? _c("div", {
    staticClass: "row justify-content-center"
  }, [_c("div", {
    staticClass: "w-100 p-0 m-0 preview-img",
    attrs: {
      allowfullscreen: ""
    },
    on: {
      dblclick: _vm.fullscreen
    }
  }, [_c("img", {
    staticStyle: {
      "max-width": "100%",
      "max-height": "100%"
    },
    attrs: {
      src: _vm.httpHost + "://" + _vm.currentFile.file_url
    }
  })])]) : _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "alert alert-danger"
  }, [_vm._v("\n        Aucun fichier attaché\n      ")])])]), _vm._v(" "), _c("modal", {
    staticClass: "pb-2",
    attrs: {
      name: "renderpdf",
      width: "1000",
      height: "auto",
      adaptive: true,
      resizable: true
    }
  }, [_c("div", {
    staticStyle: {
      height: "550px"
    }
  }, [_c("embed", {
    attrs: {
      src: _vm.httpHost + "://" + _vm.rendedpdf,
      width: "80%",
      height: "80%",
      type: "application/pdf"
    }
  })])]), _vm._v(" "), _c("note-modal", {
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
  return _c("h5", [_vm._v("\n              Fichiers annexes à attacher\n              "), _c("hr", {
    staticClass: "mt-1"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_vm._v("Nom du fichier")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("h5", [_vm._v("\n              Fichiers annexes attachés\n              "), _c("hr", {
    staticClass: "mt-1"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    attrs: {
      colspan: "2"
    }
  }, [_vm._v("\n                          Nom du fichier\n                      ")]), _vm._v(" "), _c("th", {
    staticClass: "align-end text-end",
    attrs: {
      align: "end"
    }
  }, [_vm._v("Actions")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("td", [_vm._v("\n                          Aucun fichier attaché\n                      ")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR1.vue?vue&type=template&id=d2157d3a&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR1.vue?vue&type=template&id=d2157d3a&scoped=true ***!
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
    staticClass: "card",
    staticStyle: {
      width: "100%",
      height: "100%"
    }
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc pb-0 pt-2"
  }, [_c("h3", {
    ref: "topdiv",
    staticClass: "head",
    attrs: {
      id: "ca1-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                             " + _vm._s(_vm.tb_display_name) + " : Cover\n                         ")]), _vm._v(" "), _c("div", {
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
  }, [_c("span", [_vm._v(" " + _vm._s(_vm.formDataToBeWatched.notes.length) + " ")])])])]) : _vm._e(), _vm._v(" "), _c("chevron-up-icon", {
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
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(0), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.denomination_client,
      expression: "denomination_client"
    }],
    staticClass: "form-control",
    attrs: {
      readonly: "",
      type: "text",
      id: "denomination_client"
    },
    domProps: {
      value: _vm.denomination_client
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.denomination_client = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(1), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.indice_client,
      expression: "indice_client"
    }],
    staticClass: "form-control",
    attrs: {
      readonly: "",
      type: "text",
      id: "indice_client"
    },
    domProps: {
      value: _vm.indice_client
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.indice_client = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(2), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.secteur_activite,
      expression: "secteur_activite"
    }],
    staticClass: "form-control",
    attrs: {
      readonly: "",
      type: "text",
      id: "secteur_activite"
    },
    domProps: {
      value: _vm.secteur_activite
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.secteur_activite = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(3), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.notation_interne,
      expression: "notation_interne",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "text",
      readonly: "",
      id: "notation_interne"
    },
    domProps: {
      value: _vm.notation_interne
    },
    on: {
      change: function change($event) {
        _vm.notation_interne = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(4), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.formDataToBeWatched.notation_externe,
      expression: "formDataToBeWatched.notation_externe",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "text",
      id: "notation_externe"
    },
    domProps: {
      value: _vm.formDataToBeWatched.notation_externe
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.formDataToBeWatched, "notation_externe", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(5), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.formDataToBeWatched.analyste_credit_groupe,
      expression: "formDataToBeWatched.analyste_credit_groupe",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "text",
      readonly: "",
      id: "analyste_credit_groupe"
    },
    domProps: {
      value: _vm.formDataToBeWatched.analyste_credit_groupe
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.formDataToBeWatched, "analyste_credit_groupe", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(6), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.grand_risque,
      expression: "formDataToBeWatched.grand_risque"
    }],
    staticClass: "form-select single-select",
    staticStyle: {
      background: "#00ffff21",
      color: "#000"
    },
    attrs: {
      id: "grand_risque"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formDataToBeWatched, "grand_risque", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      selected: "",
      hidden: ""
    }
  }, [_vm._v("---")]), _vm._v(" "), _c("option", {
    attrs: {
      value: ""
    }
  }), _vm._v(" "), _c("option", {
    attrs: {
      value: "OUI"
    }
  }, [_vm._v("Oui")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "NON"
    }
  }, [_vm._v("Non")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(7), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.partie_liee,
      expression: "formDataToBeWatched.partie_liee"
    }],
    staticClass: "form-select single-select",
    staticStyle: {
      background: "#00ffff21",
      color: "#000"
    },
    attrs: {
      id: "partie_liee"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formDataToBeWatched, "partie_liee", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      selected: "",
      hidden: ""
    }
  }, [_vm._v("---")]), _vm._v(" "), _c("option", {
    attrs: {
      value: ""
    }
  }), _vm._v(" "), _c("option", {
    attrs: {
      value: "OUI"
    }
  }, [_vm._v("Oui")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "NON"
    }
  }, [_vm._v("Non")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(8), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.inhabituel,
      expression: "formDataToBeWatched.inhabituel"
    }],
    staticClass: "form-select single-select",
    staticStyle: {
      background: "#00ffff21",
      color: "#000"
    },
    attrs: {
      id: "inhabituel"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formDataToBeWatched, "inhabituel", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      selected: "",
      hidden: ""
    }
  }, [_vm._v("---")]), _vm._v(" "), _c("option", {
    attrs: {
      value: ""
    }
  }), _vm._v(" "), _c("option", {
    attrs: {
      value: "OUI"
    }
  }, [_vm._v("Oui")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "NON"
    }
  }, [_vm._v("Non")])])]), _vm._v(" "), _c("br")]), _vm._v(" "), _c("div", {
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
  }, [_vm._v("\n                     Fermer le tableau\n                 ")])])]) : _c("div", {
    staticClass: "card card-width-height"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc pb-0 pt-2"
  }, [_c("h3", {
    staticClass: "head",
    attrs: {
      id: "ca1-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                             " + _vm._s(_vm.tb_display_name) + " : Cover\n                         ")]), _vm._v(" "), _c("div", {
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
  }, [_c("span", [_vm._v(" " + _vm._s(_vm.formDataToBeWatched.notes.length) + " ")])])])]) : _vm._e(), _vm._v(" "), _c("chevron-down-icon", {
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
  })], 1)])])])])], 1), _vm._v(" "), _c("div", [_c("div", {
    staticClass: "modal fade modal-lg",
    attrs: {
      id: "instruction2",
      tabindex: "-1",
      "aria-labelledby": "instruction2",
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
      id: "instruction2"
    }
  }, [_vm._v("\n                             Instruction - " + _vm._s(_vm.tb_display_name) + " : Présentation du client\n                         ")]), _vm._v(" "), _c("button", {
    staticClass: "btn-close",
    attrs: {
      type: "button",
      "data-bs-dismiss": "modal",
      "aria-label": "Close"
    }
  })]), _vm._v(" "), _vm._m(9), _vm._v(" "), _vm._m(10)])])])]), _vm._v(" "), _c("note-modal", {
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
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Client\n                            "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label"
  }, [_vm._v("Indice client\n                            "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": ""
    }
  }, [_vm._v("\n                            Secteur d'activité"), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": ""
    }
  }, [_vm._v("\n                        Notation interne (profil du risque)"), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": ""
    }
  }, [_vm._v("\n                        Notation externe (profil du risque)"), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": ""
    }
  }, [_vm._v("\n                        Analyste credit groupe"), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": ""
    }
  }, [_vm._v("\n                            Grand risque"), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": ""
    }
  }, [_vm._v("\n                            Partie liée"), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": ""
    }
  }, [_vm._v("\n                            Toute exposition sortant du cadre habituel des activités de la banque "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "modal-body"
  }, [_c("img", {
    attrs: {
      src: "/images/capture_afg/signaletique.png",
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
  }, [_vm._v("Fermer")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/workspace/nsia/WorkspaceOnDAJCAnlCenter.vue?vue&type=template&id=5666cd47&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/workspace/nsia/WorkspaceOnDAJCAnlCenter.vue?vue&type=template&id=5666cd47&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    "class": [_vm.isDoc ? _vm.producMemo : "", _vm.producContreAnl, {
      tp_page_fullscreen: _vm.is_fullscreen
    }]
  }, [_c("draggable", _vm._b({
    staticStyle: {
      "min-height": "84vh"
    },
    attrs: {
      list: _vm.listOfComponents,
      group: {
        name: "people",
        pull: "clone"
      }
    },
    on: {
      change: _vm.log
    }
  }, "draggable", _vm.dragOptions, false), _vm._l(_vm.listOfComponents, function (element) {
    return _c("div", {
      key: element.id
    }, [_c(element.component_name, _vm._b({
      tag: "component",
      on: {
        "load-shell": _vm.loadShell,
        "load-buffer": function loadBuffer($event) {
          return _vm.setSideLoad($event, element === null || element === void 0 ? void 0 : element.component_name);
        },
        autosaving: _vm.setAutosaving
      }
    }, "component", {
      meta_data: _vm.currentProperties,
      tb_name: element.component_name,
      tb_display_name: element.name
    }, false))], 1);
  }), 0)], 1);
};
var staticRenderFns = [];
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

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-RED0.vue?vue&type=style&index=0&id=4f293030&lang=css&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-RED0.vue?vue&type=style&index=0&id=4f293030&lang=css&scoped=true ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-4f293030] {\r\n  font-family: \"Google sans\";\n}\nlabel[data-v-4f293030] {\r\n  height: 10px;\r\n  font-size: 13px;\n}\ninput[type=\"text\"][data-v-4f293030],\r\ninput[type=\"date\"][data-v-4f293030],\r\nselect[data-v-4f293030] {\r\n  height: 35px;\r\n  border-color: #34495e;\r\n  color: #57606f;\r\n  font-size: 13px;\r\n  font-weight: bold;\n}\n.card-width-height[data-v-4f293030] {\r\n  width: 100%;\r\n  height: 100%;\n}\n.head[data-v-4f293030] {\r\n  color: #f1f2f6;\r\n  font-size: 22px;\n}\n.hdc[data-v-4f293030] {\r\n  background-color: #57606f;\n}\n.card-width-height[data-v-4f293030] {\r\n  width: 100%;\r\n  height: 100%;\n}\n.head[data-v-4f293030] {\r\n  color: #f1f2f6;\r\n  font-size: 22px;\n}\ninput[type=\"text\"][data-v-4f293030],\r\ninput[type=\"date\"][data-v-4f293030] {\r\n  width: 250px;\n}\n.review[data-v-4f293030] {\r\n  width: 180px !important;\n}\n.engagement input[type=\"text\"][data-v-4f293030],\r\ninput[type=\"date\"][data-v-4f293030] {\r\n  width: 100% !important;\n}\n.th[data-v-4f293030] {\r\n  padding: 4px;\r\n  padding-bottom: 0px;\n}\nselect[data-v-4f293030] {\r\n  width: 250px;\n}\n.badge-sm[data-v-4f293030] {\r\n  display: inline-block;\r\n  width: 15px;\r\n  height: 15px;\r\n  background: rgba(255, 0, 0, 0.882);\r\n  color: white;\r\n  font-size: 12px;\r\n  font-weight: 500;\r\n  border-radius: 100%;\r\n  position: absolute;\r\n  top: -20%;\r\n  left: 55%;\r\n  text-align: center;\n}\n.relook-header[data-v-4f293030] {\r\n  color: #000;\r\n  background-color: #f4f3f3;\r\n  padding: 5px;\r\n  border-bottom: 1px solid #b6b8bb;\n}\ntd.sticky[data-v-4f293030] {\r\n  position: sticky;\r\n  left: 0; \r\n  background-color: #fff; \r\n  z-index: 1;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-RED1.vue?vue&type=style&index=0&id=4f0d012e&lang=css&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-RED1.vue?vue&type=style&index=0&id=4f0d012e&lang=css&scoped=true ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-4f0d012e] {\r\n  font-family: \"Google sans\";\n}\nlabel[data-v-4f0d012e] {\r\n  height: 10px;\r\n  font-size: 13px;\n}\ninput[type=\"text\"][data-v-4f0d012e],\r\ninput[type=\"date\"][data-v-4f0d012e],\r\nselect[data-v-4f0d012e] {\r\n  height: 35px;\r\n  border-color: #34495e;\r\n  color: #57606f;\r\n  font-size: 13px;\r\n  font-weight: bold;\n}\n.card-width-height[data-v-4f0d012e] {\r\n  width: 100%;\r\n  height: 100%;\n}\n.head[data-v-4f0d012e] {\r\n  color: #f1f2f6;\r\n  font-size: 22px;\n}\n.hdc[data-v-4f0d012e] {\r\n  background-color: #57606f;\n}\n.card-width-height[data-v-4f0d012e] {\r\n  width: 100%;\r\n  height: 100%;\n}\n.head[data-v-4f0d012e] {\r\n  color: #f1f2f6;\r\n  font-size: 22px;\n}\ninput[type=\"text\"][data-v-4f0d012e],\r\ninput[type=\"date\"][data-v-4f0d012e] {\r\n  width: 250px;\n}\n.review[data-v-4f0d012e] {\r\n  width: 180px !important;\n}\n.engagement input[type=\"text\"][data-v-4f0d012e],\r\ninput[type=\"date\"][data-v-4f0d012e] {\r\n  width: 100% !important;\n}\n.th[data-v-4f0d012e] {\r\n  padding: 4px;\r\n  padding-bottom: 0px;\n}\nselect[data-v-4f0d012e] {\r\n  width: 250px;\n}\n.badge-sm[data-v-4f0d012e] {\r\n  display: inline-block;\r\n  width: 15px;\r\n  height: 15px;\r\n  background: rgba(255, 0, 0, 0.882);\r\n  color: white;\r\n  font-size: 12px;\r\n  font-weight: 500;\r\n  border-radius: 100%;\r\n  position: absolute;\r\n  top: -20%;\r\n  left: 55%;\r\n  text-align: center;\n}\n.relook-header[data-v-4f0d012e] {\r\n  color: #000;\r\n  background-color: #f4f3f3;\r\n  padding: 5px;\r\n  border-bottom: 1px solid #b6b8bb;\n}\ninput[type=\"checkbox\"][data-v-4f0d012e] {\r\n    height: 18px;\r\n    width: 20px;\r\n    margin-right: 5px;\n}\ntd.sticky[data-v-4f0d012e] {\r\n  position: sticky;\r\n  left: 0; /* ou right: 0; selon la direction souhaitée */\r\n  background-color: #f4f3f3; /* couleur de fond facultative pour masquer le contenu en dessous */\r\n  z-index: 1; /* pour s'assurer que l'élément est au-dessus des autres éléments */\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV0.vue?vue&type=style&index=0&id=11bab9d4&lang=css&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV0.vue?vue&type=style&index=0&id=11bab9d4&lang=css&scoped=true ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-11bab9d4] {\n    font-family: \"Google sans\";\n}\nlabel[data-v-11bab9d4] {\n    height: 10px;\n    font-size: 13px;\n}\ninput[type=\"text\"][data-v-11bab9d4],\n  input[type=\"date\"][data-v-11bab9d4],\n  select[data-v-11bab9d4] {\n    height: 35px;\n    border-color: #34495e;\n    color: #57606f;\n    font-size: 13px;\n    font-weight: bold;\n}\n.card-width-height[data-v-11bab9d4] {\n    width: 100%;\n    height: 100%;\n}\n.head[data-v-11bab9d4] {\n    color: #f1f2f6;\n    font-size: 22px;\n}\n.hdc[data-v-11bab9d4] {\n    background-color: #57606f;\n}\n.card-width-height[data-v-11bab9d4] {\n    width: 100%;\n    height: 100%;\n}\n.head[data-v-11bab9d4] {\n    color: #f1f2f6;\n    font-size: 22px;\n}\n.review[data-v-11bab9d4]{\n    width: 180px !important;\n}\n.engagement input[type=\"text\"][data-v-11bab9d4],\n  input[type=\"date\"][data-v-11bab9d4] {\n    width: 100% !important;\n}\n.th[data-v-11bab9d4] {\n    padding: 4px;\n    padding-bottom: 0px;\n}\nselect[data-v-11bab9d4] {\n    width: 250px;\n}\n.badge-sm[data-v-11bab9d4] {\n    display: inline-block;\n    width: 15px;\n    height: 15px;\n    background: rgba(255, 0, 0, 0.882);\n    color: white;\n    font-size: 12px;\n    font-weight: 500;\n    border-radius: 100%;\n    position: absolute;\n    top: -20%;\n    left: 55%;\n    text-align: center;\n}\n.relook-header[data-v-11bab9d4] {\n    color: #000;\n    background-color: #f4f3f3;\n    padding: 5px;\n    border-bottom: 1px solid #b6b8bb;\n}\ninput[type=checkbox][data-v-11bab9d4] {\n    /* Double-sized Checkboxes */\n    /* IE */\n    /* FF */\n    /* Safari and Chrome */\n    /* Opera */\n    transform: scale(1);\n    padding: 10px;\n    cursor: pointer;\n}\n.image1[data-v-11bab9d4] {\n    background: url(\"/images/capture_nsia/exemples/documentation_somise.png\")\n        no-repeat;\n    background-position: center;\n    background-size: contain;\n\n    width: 500px;\n    height: 300px;\n}\n.floating_text[data-v-11bab9d4]{\n    float: right;\n    /* text-align: right; */\n}\n  ", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV1.vue?vue&type=style&index=0&id=119e8ad2&lang=css&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV1.vue?vue&type=style&index=0&id=119e8ad2&lang=css&scoped=true ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\ninput[data-v-119e8ad2] {\r\n    /*border: 1px solid red;*/\n}\n*[data-v-119e8ad2] {\r\n    font-family: \"Google sans\";\n}\nlabel[data-v-119e8ad2] {\r\n    height: 10px;\r\n    font-size: 13px;\n}\ninput[data-v-119e8ad2],\r\nselect[data-v-119e8ad2] {\r\n    height: 35px;\r\n    border-color: #34495e;\r\n    color: #57606f;\r\n    font-size: 13px;\r\n    font-weight: bold;\n}\n.card-width-height[data-v-119e8ad2] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-119e8ad2] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\n.hdc[data-v-119e8ad2] {\r\n    background-color: #57606f;\n}\n.badge-sm[data-v-119e8ad2] {\r\n    display: inline-block;\r\n    width: 15px;\r\n    height: 15px;\r\n    background: rgba(255, 0, 0, 0.882);\r\n    color: white;\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    border-radius: 100%;\r\n    position: absolute;\r\n    top: -20%;\r\n    left: 55%;\r\n    text-align: center;\n}\n.relook-header[data-v-119e8ad2] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV2.vue?vue&type=style&index=0&id=11825bd0&lang=css&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV2.vue?vue&type=style&index=0&id=11825bd0&lang=css&scoped=true ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.ischecked[data-v-11825bd0]{\n  display: none;\n}\ninput[data-v-11825bd0] {\n  /*border: 1px solid red;*/\n}\n*[data-v-11825bd0] {\n  font-family: \"Google sans\";\n}\nlabel[data-v-11825bd0] {\n  height: 10px;\n  font-size: 13px;\n}\ntd[data-v-11825bd0] {\n  padding: 5px;\n  font-size: 13px;\n}\ninput[data-v-11825bd0],\nselect[data-v-11825bd0] {\n  height: 35px;\n  border-color: #34495e;\n  color: #57606f;\n  font-size: 13px;\n  font-weight: bold;\n}\n.card-width-height[data-v-11825bd0] {\n  width: 100%;\n  height: 100%;\n}\n.head[data-v-11825bd0] {\n  color: #f1f2f6;\n  font-size: 22px;\n}\n.hdc[data-v-11825bd0] {\n  background-color: #57606f;\n}\n.relook-header[data-v-11825bd0] {\n  color: #000;\n  background-color: #f4f3f3;\n  padding: 5px;\n  border-bottom: 1px solid #b6b8bb;\n}\n.badge-sm[data-v-11825bd0] {\n  display: inline-block;\n  width: 15px;\n  height: 15px;\n  background: rgba(255, 0, 0, 0.882);\n  color: white;\n  font-size: 12px;\n  font-weight: 500;\n  border-radius: 100%;\n  position: absolute;\n  top: -20%;\n  left: 55%;\n  text-align: center;\n}\n.imageM21i[data-v-11825bd0] {\n  background: url(\"/images/capture_cofina/instruction_evaluation_risque.png\")\n      no-repeat;\n  background-position: center;\n  background-size: contain;\n  width: 100%;\n  height: 100%;\n}\n.imageM21exi[data-v-11825bd0] {\n  background: url(\"/images/capture_cofina/exemple_evaluation_risque.png\")\n      no-repeat;\n  background-position: center;\n  background-size: contain;\n  width: 1000px;\n  height: 200px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV3.vue?vue&type=style&index=0&id=11662cce&lang=css&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV3.vue?vue&type=style&index=0&id=11662cce&lang=css&scoped=true ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-11662cce] {\n\n  font-family: \"Google sans\";\n}\nlabel[data-v-11662cce] {\n  height: 10px;\n  font-size: 13px;\n}\ninput[type=text][data-v-11662cce],\ninput[type=date][data-v-11662cce],\nselect[data-v-11662cce] {\n  height: 35px;\n  border-color: #34495e;\n  color: #57606f;\n  font-size: 13px;\n  font-weight: bold;\n}\n.card-width-height[data-v-11662cce] {\n  width: 100%;\n  height: 100%;\n}\n.head[data-v-11662cce] {\n  color: #f1f2f6;\n  font-size: 22px;\n}\n.hdc[data-v-11662cce] {\n  background-color: #57606f;\n}\n.card-width-height[data-v-11662cce] {\n  width: 100%;\n  height: 100%;\n}\n.head[data-v-11662cce] {\n  color: #f1f2f6;\n  font-size: 22px;\n}\ninput[type=text][data-v-11662cce],\ninput[type=date][data-v-11662cce] {\n  width: 250px;\n}\n.th[data-v-11662cce] {\n  padding: 4px;\n  padding-bottom: 0px;\n}\nselect[data-v-11662cce] {\n  width: 250px;\n}\n.badge-sm[data-v-11662cce] {\n  display: inline-block;\n  width: 15px;\n  height: 15px;\n  background: rgba(255, 0, 0, 0.882);\n  color: white;\n  font-size: 12px;\n  font-weight: 500;\n  border-radius: 100%;\n  position: absolute;\n  top: -20%;\n  left: 55%;\n  text-align: center;\n}\n.relook-header[data-v-11662cce] {\n  color: #000;\n  background-color: #f4f3f3;\n  padding: 5px;\n  border-bottom: 1px solid #b6b8bb;\n}\n.selected-gray[data-v-11662cce] {\n    background-color: rgb(228, 227, 227);\n}\n.bg-light-green[data-v-11662cce] {\n    background: rgba(2, 90, 2, 0.075);\n    /* background-color: rgb(228, 227, 227); */\n        color: green;\n}\n.preview-img[data-v-11662cce] {\n  width: 100%;\n    height: auto;\n    min-height: 500px;\n    background-size: contain !important;\n    background-position: center !important;\n    background-repeat: no-repeat !important;\n}\n.fade-enter[data-v-11662cce],\n.fade-leave-to[data-v-11662cce] {\n    opacity: 0;\n    transition: all .3s\n}\n.fade-enter-to[data-v-11662cce],\n.fade-leave[data-v-11662cce] {\n    opacity: 1;\n    transition: all .3s\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR1.vue?vue&type=style&index=0&id=d2157d3a&lang=css&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR1.vue?vue&type=style&index=0&id=d2157d3a&lang=css&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\ninput[data-v-d2157d3a] {\n     /*border: 1px solid red;*/\n}\n*[data-v-d2157d3a] {\n     font-family: \"Google sans\";\n}\nlabel[data-v-d2157d3a] {\n     height: 10px;\n     font-size: 13px;\n}\ninput[data-v-d2157d3a],\n select[data-v-d2157d3a] {\n     height: 35px;\n     border-color: #34495e;\n     color: #57606f;\n     font-size: 13px;\n     font-weight: bold;\n}\n.card-width-height[data-v-d2157d3a] {\n     width: 100%;\n     height: 100%;\n}\n.head[data-v-d2157d3a] {\n     color: #f1f2f6;\n     font-size: 22px;\n}\n.hdc[data-v-d2157d3a] {\n     background-color: #57606f;\n}\n\n /*  List element styles */\n#menu ul[data-v-d2157d3a],\n #menu li[data-v-d2157d3a] {\n     list-style: none;\n     padding: 0;\n     margin: 0;\n     display: inline-block;\n}\n#menu li[data-v-d2157d3a] {\n     padding: 5px 0px;\n}\n\n /* Main menu links */\n#menu a[data-v-d2157d3a]:link,\n #menu a[data-v-d2157d3a]:visited,\n #menu a[data-v-d2157d3a]:active {\n     text-decoration: none;\n     color: var(--link2-color);\n     padding: 5px 7px;\n     font-weight: bold;\n     position: relative;\n     z-index: 2;\n}\n#menu a[data-v-d2157d3a]:hover,\n #menu a[data-v-d2157d3a]:focus {\n     background-color: var(--link-color);\n     color: var(--link2-color);\n     text-decoration: underline;\n}\n\n /* The submenu links container*/\n.subdrop[data-v-d2157d3a] {\n     background: var(--bg-color);\n     height: 0;\n     border-top: 0;\n     min-width: 100%;\n     left: 0;\n     margin: 0;\n     position: absolute;\n     text-align: left;\n     top: 100%;\n     visibility: hidden;\n     height: 1px;\n     overflow: hidden;\n     z-index: 10;\n}\n\n /* Dropdown Parent Link Style */\n.droplink[data-v-d2157d3a] {\n     display: inline-block;\n     min-width: -moz-fit-content;\n     min-width: fit-content;\n     position: relative;\n}\ninput[type=checkbox][data-v-d2157d3a] {\n     /* Double-sized Checkboxes */\n     /* IE */\n     /* FF */\n     /* Safari and Chrome */\n     /* Opera */\n     transform: scale(2);\n     padding: 10px;\n}\n\n /* List elements within the dropdown */\n.subdrop li[data-v-d2157d3a] {\n     display: block !important;\n     padding: 0 !important;\n}\n\n /* Links within the dropdown list */\n.subdrop a[data-v-d2157d3a] {\n     display: block;\n     padding: 12px 20px;\n     white-space: nowrap;\n}\n\n /* Allows links to show on hover/focus and through keyboard navigation via focus-within */\n.droplink:hover .subdrop[data-v-d2157d3a] {\n     visibility: visible;\n     height: auto;\n     z-index: 11;\n}\n\n /* Separate these to avoid IE completely ignoring the css above */\n.droplink:focus-within .subdrop[data-v-d2157d3a] {\n     visibility: visible;\n     height: auto;\n     z-index: 11;\n}\n.relook-header[data-v-d2157d3a] {\n    color: #000;\n    background-color: #f4f3f3;\n    padding: 2px;\n    border-bottom: 1px solid #b6b8bb;\n}\n.badge-sm[data-v-d2157d3a] {\n     display: inline-block;\n     width: 15px;\n     height: 15px;\n     background: rgba(255, 0, 0, 0.882);\n     color: white;\n     font-size: 12px;\n     font-weight: 500;\n     border-radius: 100%;\n     position: absolute;\n     top: -20%;\n     left: 55%;\n     text-align: center;\n}\n ", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/workspace/nsia/WorkspaceOnDAJCAnlCenter.vue?vue&type=style&index=0&id=5666cd47&lang=css&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/workspace/nsia/WorkspaceOnDAJCAnlCenter.vue?vue&type=style&index=0&id=5666cd47&lang=css&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.button[data-v-5666cd47] {\r\n  margin-top: 35px;\n}\n.flip-list-move[data-v-5666cd47] {\r\n  transition: transform 0.5s;\n}\n.no-move[data-v-5666cd47] {\r\n  transition: transform 0s;\n}\n.ghost[data-v-5666cd47] {\r\n  opacity: 0.5;\r\n  background: #c8ebfb;\n}\n.list-group[data-v-5666cd47] {\r\n  min-height: 20px;\n}\n.list-group-item[data-v-5666cd47] {\r\n  cursor: move;\n}\n.list-group-item i[data-v-5666cd47] {\r\n  cursor: pointer;\n}\n.hdc[data-v-5666cd47] {\r\n  height: 40px;\n}\n.memorandum[data-v-5666cd47] {\r\n  padding: 25px;\n}\n.contre-analyse[data-v-5666cd47] {\r\n  background-color: white;\r\n  /* box-shadow: 0 0 5px grey; */\r\n  padding: 10px;\n}\r\n", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-RED0.vue?vue&type=style&index=0&id=4f293030&lang=css&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-RED0.vue?vue&type=style&index=0&id=4f293030&lang=css&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_RED0_vue_vue_type_style_index_0_id_4f293030_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DAJC-RED0.vue?vue&type=style&index=0&id=4f293030&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-RED0.vue?vue&type=style&index=0&id=4f293030&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_RED0_vue_vue_type_style_index_0_id_4f293030_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_RED0_vue_vue_type_style_index_0_id_4f293030_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-RED1.vue?vue&type=style&index=0&id=4f0d012e&lang=css&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-RED1.vue?vue&type=style&index=0&id=4f0d012e&lang=css&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_RED1_vue_vue_type_style_index_0_id_4f0d012e_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DAJC-RED1.vue?vue&type=style&index=0&id=4f0d012e&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-RED1.vue?vue&type=style&index=0&id=4f0d012e&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_RED1_vue_vue_type_style_index_0_id_4f0d012e_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_RED1_vue_vue_type_style_index_0_id_4f0d012e_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV0.vue?vue&type=style&index=0&id=11bab9d4&lang=css&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV0.vue?vue&type=style&index=0&id=11bab9d4&lang=css&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_REV0_vue_vue_type_style_index_0_id_11bab9d4_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DAJC-REV0.vue?vue&type=style&index=0&id=11bab9d4&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV0.vue?vue&type=style&index=0&id=11bab9d4&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_REV0_vue_vue_type_style_index_0_id_11bab9d4_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_REV0_vue_vue_type_style_index_0_id_11bab9d4_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV1.vue?vue&type=style&index=0&id=119e8ad2&lang=css&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV1.vue?vue&type=style&index=0&id=119e8ad2&lang=css&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_REV1_vue_vue_type_style_index_0_id_119e8ad2_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DAJC-REV1.vue?vue&type=style&index=0&id=119e8ad2&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV1.vue?vue&type=style&index=0&id=119e8ad2&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_REV1_vue_vue_type_style_index_0_id_119e8ad2_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_REV1_vue_vue_type_style_index_0_id_119e8ad2_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV2.vue?vue&type=style&index=0&id=11825bd0&lang=css&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV2.vue?vue&type=style&index=0&id=11825bd0&lang=css&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_REV2_vue_vue_type_style_index_0_id_11825bd0_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DAJC-REV2.vue?vue&type=style&index=0&id=11825bd0&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV2.vue?vue&type=style&index=0&id=11825bd0&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_REV2_vue_vue_type_style_index_0_id_11825bd0_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_REV2_vue_vue_type_style_index_0_id_11825bd0_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV3.vue?vue&type=style&index=0&id=11662cce&lang=css&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV3.vue?vue&type=style&index=0&id=11662cce&lang=css&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_REV3_vue_vue_type_style_index_0_id_11662cce_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DAJC-REV3.vue?vue&type=style&index=0&id=11662cce&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV3.vue?vue&type=style&index=0&id=11662cce&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_REV3_vue_vue_type_style_index_0_id_11662cce_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_REV3_vue_vue_type_style_index_0_id_11662cce_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR1.vue?vue&type=style&index=0&id=d2157d3a&lang=css&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR1.vue?vue&type=style&index=0&id=d2157d3a&lang=css&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DGR_FAR1_vue_vue_type_style_index_0_id_d2157d3a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DGR-FAR1.vue?vue&type=style&index=0&id=d2157d3a&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR1.vue?vue&type=style&index=0&id=d2157d3a&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DGR_FAR1_vue_vue_type_style_index_0_id_d2157d3a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DGR_FAR1_vue_vue_type_style_index_0_id_d2157d3a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/workspace/nsia/WorkspaceOnDAJCAnlCenter.vue?vue&type=style&index=0&id=5666cd47&lang=css&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/workspace/nsia/WorkspaceOnDAJCAnlCenter.vue?vue&type=style&index=0&id=5666cd47&lang=css&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkspaceOnDAJCAnlCenter_vue_vue_type_style_index_0_id_5666cd47_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./WorkspaceOnDAJCAnlCenter.vue?vue&type=style&index=0&id=5666cd47&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/workspace/nsia/WorkspaceOnDAJCAnlCenter.vue?vue&type=style&index=0&id=5666cd47&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkspaceOnDAJCAnlCenter_vue_vue_type_style_index_0_id_5666cd47_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkspaceOnDAJCAnlCenter_vue_vue_type_style_index_0_id_5666cd47_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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


/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-RED0.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-RED0.vue ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DAJC_RED0_vue_vue_type_template_id_4f293030_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DAJC-RED0.vue?vue&type=template&id=4f293030&scoped=true */ "./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-RED0.vue?vue&type=template&id=4f293030&scoped=true");
/* harmony import */ var _DAJC_RED0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DAJC-RED0.vue?vue&type=script&lang=js */ "./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-RED0.vue?vue&type=script&lang=js");
/* harmony import */ var _DAJC_RED0_vue_vue_type_style_index_0_id_4f293030_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DAJC-RED0.vue?vue&type=style&index=0&id=4f293030&lang=css&scoped=true */ "./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-RED0.vue?vue&type=style&index=0&id=4f293030&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DAJC_RED0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _DAJC_RED0_vue_vue_type_template_id_4f293030_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _DAJC_RED0_vue_vue_type_template_id_4f293030_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "4f293030",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-RED0.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-RED0.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-RED0.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_RED0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DAJC-RED0.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-RED0.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_RED0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-RED0.vue?vue&type=style&index=0&id=4f293030&lang=css&scoped=true":
/*!***************************************************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-RED0.vue?vue&type=style&index=0&id=4f293030&lang=css&scoped=true ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_RED0_vue_vue_type_style_index_0_id_4f293030_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DAJC-RED0.vue?vue&type=style&index=0&id=4f293030&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-RED0.vue?vue&type=style&index=0&id=4f293030&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-RED0.vue?vue&type=template&id=4f293030&scoped=true":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-RED0.vue?vue&type=template&id=4f293030&scoped=true ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_RED0_vue_vue_type_template_id_4f293030_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_RED0_vue_vue_type_template_id_4f293030_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_RED0_vue_vue_type_template_id_4f293030_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DAJC-RED0.vue?vue&type=template&id=4f293030&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-RED0.vue?vue&type=template&id=4f293030&scoped=true");


/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-RED1.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-RED1.vue ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DAJC_RED1_vue_vue_type_template_id_4f0d012e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DAJC-RED1.vue?vue&type=template&id=4f0d012e&scoped=true */ "./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-RED1.vue?vue&type=template&id=4f0d012e&scoped=true");
/* harmony import */ var _DAJC_RED1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DAJC-RED1.vue?vue&type=script&lang=js */ "./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-RED1.vue?vue&type=script&lang=js");
/* harmony import */ var _DAJC_RED1_vue_vue_type_style_index_0_id_4f0d012e_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DAJC-RED1.vue?vue&type=style&index=0&id=4f0d012e&lang=css&scoped=true */ "./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-RED1.vue?vue&type=style&index=0&id=4f0d012e&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DAJC_RED1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _DAJC_RED1_vue_vue_type_template_id_4f0d012e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _DAJC_RED1_vue_vue_type_template_id_4f0d012e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "4f0d012e",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-RED1.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-RED1.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-RED1.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_RED1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DAJC-RED1.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-RED1.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_RED1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-RED1.vue?vue&type=style&index=0&id=4f0d012e&lang=css&scoped=true":
/*!***************************************************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-RED1.vue?vue&type=style&index=0&id=4f0d012e&lang=css&scoped=true ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_RED1_vue_vue_type_style_index_0_id_4f0d012e_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DAJC-RED1.vue?vue&type=style&index=0&id=4f0d012e&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-RED1.vue?vue&type=style&index=0&id=4f0d012e&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-RED1.vue?vue&type=template&id=4f0d012e&scoped=true":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-RED1.vue?vue&type=template&id=4f0d012e&scoped=true ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_RED1_vue_vue_type_template_id_4f0d012e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_RED1_vue_vue_type_template_id_4f0d012e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_RED1_vue_vue_type_template_id_4f0d012e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DAJC-RED1.vue?vue&type=template&id=4f0d012e&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-RED1.vue?vue&type=template&id=4f0d012e&scoped=true");


/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV0.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV0.vue ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DAJC_REV0_vue_vue_type_template_id_11bab9d4_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DAJC-REV0.vue?vue&type=template&id=11bab9d4&scoped=true */ "./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV0.vue?vue&type=template&id=11bab9d4&scoped=true");
/* harmony import */ var _DAJC_REV0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DAJC-REV0.vue?vue&type=script&lang=js */ "./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV0.vue?vue&type=script&lang=js");
/* harmony import */ var _DAJC_REV0_vue_vue_type_style_index_0_id_11bab9d4_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DAJC-REV0.vue?vue&type=style&index=0&id=11bab9d4&lang=css&scoped=true */ "./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV0.vue?vue&type=style&index=0&id=11bab9d4&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DAJC_REV0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _DAJC_REV0_vue_vue_type_template_id_11bab9d4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _DAJC_REV0_vue_vue_type_template_id_11bab9d4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "11bab9d4",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV0.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV0.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV0.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_REV0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DAJC-REV0.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV0.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_REV0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV0.vue?vue&type=style&index=0&id=11bab9d4&lang=css&scoped=true":
/*!***************************************************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV0.vue?vue&type=style&index=0&id=11bab9d4&lang=css&scoped=true ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_REV0_vue_vue_type_style_index_0_id_11bab9d4_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DAJC-REV0.vue?vue&type=style&index=0&id=11bab9d4&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV0.vue?vue&type=style&index=0&id=11bab9d4&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV0.vue?vue&type=template&id=11bab9d4&scoped=true":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV0.vue?vue&type=template&id=11bab9d4&scoped=true ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_REV0_vue_vue_type_template_id_11bab9d4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_REV0_vue_vue_type_template_id_11bab9d4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_REV0_vue_vue_type_template_id_11bab9d4_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DAJC-REV0.vue?vue&type=template&id=11bab9d4&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV0.vue?vue&type=template&id=11bab9d4&scoped=true");


/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV1.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV1.vue ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DAJC_REV1_vue_vue_type_template_id_119e8ad2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DAJC-REV1.vue?vue&type=template&id=119e8ad2&scoped=true */ "./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV1.vue?vue&type=template&id=119e8ad2&scoped=true");
/* harmony import */ var _DAJC_REV1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DAJC-REV1.vue?vue&type=script&lang=js */ "./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV1.vue?vue&type=script&lang=js");
/* harmony import */ var _DAJC_REV1_vue_vue_type_style_index_0_id_119e8ad2_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DAJC-REV1.vue?vue&type=style&index=0&id=119e8ad2&lang=css&scoped=true */ "./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV1.vue?vue&type=style&index=0&id=119e8ad2&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DAJC_REV1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _DAJC_REV1_vue_vue_type_template_id_119e8ad2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _DAJC_REV1_vue_vue_type_template_id_119e8ad2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "119e8ad2",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV1.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV1.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV1.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_REV1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DAJC-REV1.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV1.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_REV1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV1.vue?vue&type=style&index=0&id=119e8ad2&lang=css&scoped=true":
/*!***************************************************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV1.vue?vue&type=style&index=0&id=119e8ad2&lang=css&scoped=true ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_REV1_vue_vue_type_style_index_0_id_119e8ad2_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DAJC-REV1.vue?vue&type=style&index=0&id=119e8ad2&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV1.vue?vue&type=style&index=0&id=119e8ad2&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV1.vue?vue&type=template&id=119e8ad2&scoped=true":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV1.vue?vue&type=template&id=119e8ad2&scoped=true ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_REV1_vue_vue_type_template_id_119e8ad2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_REV1_vue_vue_type_template_id_119e8ad2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_REV1_vue_vue_type_template_id_119e8ad2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DAJC-REV1.vue?vue&type=template&id=119e8ad2&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV1.vue?vue&type=template&id=119e8ad2&scoped=true");


/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV2.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV2.vue ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DAJC_REV2_vue_vue_type_template_id_11825bd0_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DAJC-REV2.vue?vue&type=template&id=11825bd0&scoped=true */ "./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV2.vue?vue&type=template&id=11825bd0&scoped=true");
/* harmony import */ var _DAJC_REV2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DAJC-REV2.vue?vue&type=script&lang=js */ "./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV2.vue?vue&type=script&lang=js");
/* harmony import */ var _DAJC_REV2_vue_vue_type_style_index_0_id_11825bd0_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DAJC-REV2.vue?vue&type=style&index=0&id=11825bd0&lang=css&scoped=true */ "./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV2.vue?vue&type=style&index=0&id=11825bd0&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DAJC_REV2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _DAJC_REV2_vue_vue_type_template_id_11825bd0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _DAJC_REV2_vue_vue_type_template_id_11825bd0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "11825bd0",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV2.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV2.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV2.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_REV2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DAJC-REV2.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV2.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_REV2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV2.vue?vue&type=style&index=0&id=11825bd0&lang=css&scoped=true":
/*!***************************************************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV2.vue?vue&type=style&index=0&id=11825bd0&lang=css&scoped=true ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_REV2_vue_vue_type_style_index_0_id_11825bd0_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DAJC-REV2.vue?vue&type=style&index=0&id=11825bd0&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV2.vue?vue&type=style&index=0&id=11825bd0&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV2.vue?vue&type=template&id=11825bd0&scoped=true":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV2.vue?vue&type=template&id=11825bd0&scoped=true ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_REV2_vue_vue_type_template_id_11825bd0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_REV2_vue_vue_type_template_id_11825bd0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_REV2_vue_vue_type_template_id_11825bd0_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DAJC-REV2.vue?vue&type=template&id=11825bd0&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV2.vue?vue&type=template&id=11825bd0&scoped=true");


/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV3.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV3.vue ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DAJC_REV3_vue_vue_type_template_id_11662cce_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DAJC-REV3.vue?vue&type=template&id=11662cce&scoped=true */ "./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV3.vue?vue&type=template&id=11662cce&scoped=true");
/* harmony import */ var _DAJC_REV3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DAJC-REV3.vue?vue&type=script&lang=js */ "./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV3.vue?vue&type=script&lang=js");
/* harmony import */ var _DAJC_REV3_vue_vue_type_style_index_0_id_11662cce_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DAJC-REV3.vue?vue&type=style&index=0&id=11662cce&lang=css&scoped=true */ "./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV3.vue?vue&type=style&index=0&id=11662cce&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DAJC_REV3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _DAJC_REV3_vue_vue_type_template_id_11662cce_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _DAJC_REV3_vue_vue_type_template_id_11662cce_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "11662cce",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV3.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV3.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV3.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_REV3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DAJC-REV3.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV3.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_REV3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV3.vue?vue&type=style&index=0&id=11662cce&lang=css&scoped=true":
/*!***************************************************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV3.vue?vue&type=style&index=0&id=11662cce&lang=css&scoped=true ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_REV3_vue_vue_type_style_index_0_id_11662cce_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DAJC-REV3.vue?vue&type=style&index=0&id=11662cce&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV3.vue?vue&type=style&index=0&id=11662cce&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV3.vue?vue&type=template&id=11662cce&scoped=true":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV3.vue?vue&type=template&id=11662cce&scoped=true ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_REV3_vue_vue_type_template_id_11662cce_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_REV3_vue_vue_type_template_id_11662cce_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DAJC_REV3_vue_vue_type_template_id_11662cce_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DAJC-REV3.vue?vue&type=template&id=11662cce&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dajc/DAJC-REV3.vue?vue&type=template&id=11662cce&scoped=true");


/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR1.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR1.vue ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DGR_FAR1_vue_vue_type_template_id_d2157d3a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DGR-FAR1.vue?vue&type=template&id=d2157d3a&scoped=true */ "./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR1.vue?vue&type=template&id=d2157d3a&scoped=true");
/* harmony import */ var _DGR_FAR1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DGR-FAR1.vue?vue&type=script&lang=js */ "./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR1.vue?vue&type=script&lang=js");
/* harmony import */ var _DGR_FAR1_vue_vue_type_style_index_0_id_d2157d3a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DGR-FAR1.vue?vue&type=style&index=0&id=d2157d3a&lang=css&scoped=true */ "./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR1.vue?vue&type=style&index=0&id=d2157d3a&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DGR_FAR1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _DGR_FAR1_vue_vue_type_template_id_d2157d3a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _DGR_FAR1_vue_vue_type_template_id_d2157d3a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "d2157d3a",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR1.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR1.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR1.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DGR_FAR1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DGR-FAR1.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR1.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DGR_FAR1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR1.vue?vue&type=style&index=0&id=d2157d3a&lang=css&scoped=true":
/*!*************************************************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR1.vue?vue&type=style&index=0&id=d2157d3a&lang=css&scoped=true ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DGR_FAR1_vue_vue_type_style_index_0_id_d2157d3a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DGR-FAR1.vue?vue&type=style&index=0&id=d2157d3a&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR1.vue?vue&type=style&index=0&id=d2157d3a&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR1.vue?vue&type=template&id=d2157d3a&scoped=true":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR1.vue?vue&type=template&id=d2157d3a&scoped=true ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DGR_FAR1_vue_vue_type_template_id_d2157d3a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DGR_FAR1_vue_vue_type_template_id_d2157d3a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DGR_FAR1_vue_vue_type_template_id_d2157d3a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DGR-FAR1.vue?vue&type=template&id=d2157d3a&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/filiale/dgr/DGR-FAR1.vue?vue&type=template&id=d2157d3a&scoped=true");


/***/ }),

/***/ "./resources/js/components/workspace/nsia/WorkspaceOnDAJCAnlCenter.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/workspace/nsia/WorkspaceOnDAJCAnlCenter.vue ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _WorkspaceOnDAJCAnlCenter_vue_vue_type_template_id_5666cd47_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WorkspaceOnDAJCAnlCenter.vue?vue&type=template&id=5666cd47&scoped=true */ "./resources/js/components/workspace/nsia/WorkspaceOnDAJCAnlCenter.vue?vue&type=template&id=5666cd47&scoped=true");
/* harmony import */ var _WorkspaceOnDAJCAnlCenter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WorkspaceOnDAJCAnlCenter.vue?vue&type=script&lang=js */ "./resources/js/components/workspace/nsia/WorkspaceOnDAJCAnlCenter.vue?vue&type=script&lang=js");
/* harmony import */ var _WorkspaceOnDAJCAnlCenter_vue_vue_type_style_index_0_id_5666cd47_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WorkspaceOnDAJCAnlCenter.vue?vue&type=style&index=0&id=5666cd47&lang=css&scoped=true */ "./resources/js/components/workspace/nsia/WorkspaceOnDAJCAnlCenter.vue?vue&type=style&index=0&id=5666cd47&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _WorkspaceOnDAJCAnlCenter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _WorkspaceOnDAJCAnlCenter_vue_vue_type_template_id_5666cd47_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _WorkspaceOnDAJCAnlCenter_vue_vue_type_template_id_5666cd47_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "5666cd47",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/workspace/nsia/WorkspaceOnDAJCAnlCenter.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/workspace/nsia/WorkspaceOnDAJCAnlCenter.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/workspace/nsia/WorkspaceOnDAJCAnlCenter.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkspaceOnDAJCAnlCenter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./WorkspaceOnDAJCAnlCenter.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/workspace/nsia/WorkspaceOnDAJCAnlCenter.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkspaceOnDAJCAnlCenter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/workspace/nsia/WorkspaceOnDAJCAnlCenter.vue?vue&type=style&index=0&id=5666cd47&lang=css&scoped=true":
/*!*************************************************************************************************************************************!*\
  !*** ./resources/js/components/workspace/nsia/WorkspaceOnDAJCAnlCenter.vue?vue&type=style&index=0&id=5666cd47&lang=css&scoped=true ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkspaceOnDAJCAnlCenter_vue_vue_type_style_index_0_id_5666cd47_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./WorkspaceOnDAJCAnlCenter.vue?vue&type=style&index=0&id=5666cd47&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/workspace/nsia/WorkspaceOnDAJCAnlCenter.vue?vue&type=style&index=0&id=5666cd47&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/workspace/nsia/WorkspaceOnDAJCAnlCenter.vue?vue&type=template&id=5666cd47&scoped=true":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/workspace/nsia/WorkspaceOnDAJCAnlCenter.vue?vue&type=template&id=5666cd47&scoped=true ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkspaceOnDAJCAnlCenter_vue_vue_type_template_id_5666cd47_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkspaceOnDAJCAnlCenter_vue_vue_type_template_id_5666cd47_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkspaceOnDAJCAnlCenter_vue_vue_type_template_id_5666cd47_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./WorkspaceOnDAJCAnlCenter.vue?vue&type=template&id=5666cd47&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/workspace/nsia/WorkspaceOnDAJCAnlCenter.vue?vue&type=template&id=5666cd47&scoped=true");


/***/ })

}]);