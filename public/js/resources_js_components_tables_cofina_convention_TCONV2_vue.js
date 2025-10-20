"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_tables_cofina_convention_TCONV2_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/cofina/convention/TCONV2.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/cofina/convention/TCONV2.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/ContextMenu */ "./resources/js/components/shared/ContextMenu.vue");
/* harmony import */ var _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/ContextMenuItem */ "./resources/js/components/shared/ContextMenuItem.vue");
/* harmony import */ var _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vueform/multiselect/dist/multiselect.vue2 */ "./node_modules/@vueform/multiselect/dist/multiselect.vue2.js");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../helpers/indexedDB */ "./resources/js/helpers/indexedDB.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_helpers_indexedDB__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_proxy_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/proxy.service */ "./resources/js/services/proxy.service.js");
/* harmony import */ var _services_connects_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/connects.service */ "./resources/js/services/connects.service.js");
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








//   import helper from "../../../helpers/helper";

// ? IndexedDB helper for formDataToBeWatched Cache management



// import ConformiteModal from "modals/ConformiteModal.vue";

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
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_9__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_9__.TrashIcon,
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_9__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_9__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_9__.ChevronDownIcon,
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

    //   if (this.meta_data?.dossier_credit?.categorie_client == 'Retail') {
    //     this.role = "CC"
    //   }

    //   if (this.meta_data?.dossier_credit?.categorie_client == 'Corporate') {
    //     this.role = "CAE"
    //   }
    this.role = "CAF";
    this.getFiles();
    this.getEnvoieContratFiles();
    this.is_notify_conformite = (_this$meta_data$dossi = (_this$meta_data$dossi2 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi2 === void 0 || (_this$meta_data$dossi2 = _this$meta_data$dossi2["contrat_notification"]) === null || _this$meta_data$dossi2 === void 0 ? void 0 : _this$meta_data$dossi2.conformite) !== null && _this$meta_data$dossi !== void 0 ? _this$meta_data$dossi : false;
    this.getContratSigneFiles();
    this.getContratEnvoieFiles();
  },
  computed: {
    montantDefinitif: function montantDefinitif() {
      var _this$meta_data;
      var dossier = (_this$meta_data = this.meta_data) === null || _this$meta_data === void 0 ? void 0 : _this$meta_data.dossier_credit;
      var applied_templ_name = dossier === null || dossier === void 0 ? void 0 : dossier.applied_templ_name;
      var cred0 = this.determineCredPubTables(applied_templ_name)[0];
      var cred1 = this.determineCredPubTables(applied_templ_name)[1];
      var _this$caracteristique = this.caracteristiqueDuPret(dossier, cred0, cred1),
        montantDef = _this$caracteristique.montantDef,
        dureeDef = _this$caracteristique.dureeDef,
        periodicite = _this$caracteristique.periodicite;
      return Number(String(montantDef).replace(/\s/g, '').replace(',', '.'));
    },
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
      montantSeuil: 15000000,
      connectsHost: _services_connects_service__WEBPACK_IMPORTED_MODULE_8__["default"].loadablehost(),
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
        nom: "Billet à ordre",
        value: "Billet à ordre"
      }, {
        nom: "Contrat de cautionnement",
        value: "Contrat de cautionnement"
      }, {
        nom: "Contrat de gage de vehicule sans depossession",
        value: "Contrat de gage de vehicule sans depossession"
      }, {
        nom: "Contrat de prêt",
        value: "Contrat de prêt"
      }, {
        nom: "Contrat de prêt(Entreprise individuelle)",
        value: "Contrat de prêt(Entreprise individuelle)"
      }, {
        nom: "Engagement de domiciliation",
        value: "Engagement de domiciliation"
      }, {
        nom: "Nantissement de fonds de commerce et de stock",
        value: "Nantissement de fonds de commerce et de stock"
      }, {
        nom: "Notification de crédit",
        value: "Notification de crédit"
      }, {
        nom: "Promesse d\'affectation hypothécaire",
        value: "Promesse d\'affectation hypothécaire"
      }, {
        nom: "Convention de remise volontaire de titre",
        value: "Convention de remise volontaire de titre"
      }, {
        nom: "Avis du client",
        value: "Avis du client"
      }, {
        nom: "Convention de transfert",
        value: "Convention de transfert"
      }, {
        nom: "Contrat Synallagmatique de terrain",
        value: "Contrat Synallagmatique de terrain"
      }, {
        nom: "Contrat de pret restructuration",
        value: "Contrat de pret restructuration"
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
    caracteristiqueDuPret: function caracteristiqueDuPret(dossier_credit, cred0, cred1) {
      var _dossier_credit$cred;
      var caract_inter_pret = dossier_credit === null || dossier_credit === void 0 ? void 0 : dossier_credit.caract_inter_pret;
      var latestAmount = 0;
      var latetstDuree = 0;
      var periodicite = "";
      var risque = dossier_credit === null || dossier_credit === void 0 || (_dossier_credit$cred = dossier_credit[cred1]) === null || _dossier_credit$cred === void 0 || (_dossier_credit$cred = _dossier_credit$cred.frais) === null || _dossier_credit$cred === void 0 || (_dossier_credit$cred = _dossier_credit$cred[2]) === null || _dossier_credit$cred === void 0 ? void 0 : _dossier_credit$cred.montant_frais;
      if (caract_inter_pret != null) {
        var _dossier_credit$final, _latestObj$mensualite;
        var finalOutcomeUserRole = dossier_credit === null || dossier_credit === void 0 || (_dossier_credit$final = dossier_credit.final_outcome) === null || _dossier_credit$final === void 0 ? void 0 : _dossier_credit$final.giver_role_sigle;
        // console.log({finalOutcomeUserRole:finalOutcomeUserRole})
        var latestObj = caract_inter_pret.find(function (el) {
          return el.role_sigle == finalOutcomeUserRole;
        });
        latestAmount = latestObj === null || latestObj === void 0 ? void 0 : latestObj['montant_pret_' + finalOutcomeUserRole];
        latetstDuree = latestObj === null || latestObj === void 0 ? void 0 : latestObj.duree_pret;
        periodicite = (_latestObj$mensualite = latestObj === null || latestObj === void 0 ? void 0 : latestObj.mensualite_credit) !== null && _latestObj$mensualite !== void 0 ? _latestObj$mensualite : '';
        // console.log({latestAmountBefor:latestAmount})
        if (!latestAmount) {
          var _caract_inter_pret$at, _caract_inter_pret$at2, _caract_inter_pret$at3, _caract_inter_pret$at4;
          finalOutcomeUserRole = (_caract_inter_pret$at = caract_inter_pret.at(-1)) === null || _caract_inter_pret$at === void 0 ? void 0 : _caract_inter_pret$at.role_sigle;
          latestAmount = (_caract_inter_pret$at2 = caract_inter_pret.at(-1)) === null || _caract_inter_pret$at2 === void 0 ? void 0 : _caract_inter_pret$at2['montant_pret_' + finalOutcomeUserRole];
          latetstDuree = (_caract_inter_pret$at3 = caract_inter_pret.at(-1)) === null || _caract_inter_pret$at3 === void 0 ? void 0 : _caract_inter_pret$at3['duree_pret'];
          periodicite = (_caract_inter_pret$at4 = caract_inter_pret.at(-1)) === null || _caract_inter_pret$at4 === void 0 ? void 0 : _caract_inter_pret$at4['mensualite_credit'];
        }
        if ((dossier_credit === null || dossier_credit === void 0 ? void 0 : dossier_credit.notif_accord_credit) == true) {
          var _dossier_credit$cred_, _dossier_credit$cred_2, _dossier_credit$cred_3, _dossier_credit$cred_4, _dossier_credit$cred_5, _dossier_credit$cred_6;
          var montant = (_dossier_credit$cred_ = dossier_credit === null || dossier_credit === void 0 || (_dossier_credit$cred_2 = dossier_credit.cred_pub_tb_19000) === null || _dossier_credit$cred_2 === void 0 ? void 0 : _dossier_credit$cred_2.montant) !== null && _dossier_credit$cred_ !== void 0 ? _dossier_credit$cred_ : 0;
          latestAmount = this.convertInt(montant);
          latetstDuree = (_dossier_credit$cred_3 = dossier_credit === null || dossier_credit === void 0 || (_dossier_credit$cred_4 = dossier_credit.cred_pub_tb_19000) === null || _dossier_credit$cred_4 === void 0 ? void 0 : _dossier_credit$cred_4.duree_credit) !== null && _dossier_credit$cred_3 !== void 0 ? _dossier_credit$cred_3 : 0;
          risque = (_dossier_credit$cred_5 = dossier_credit === null || dossier_credit === void 0 || (_dossier_credit$cred_6 = dossier_credit.cred_pub_tb_19000) === null || _dossier_credit$cred_6 === void 0 ? void 0 : _dossier_credit$cred_6.primes_risques) !== null && _dossier_credit$cred_5 !== void 0 ? _dossier_credit$cred_5 : 0;
        }
      }
      return {
        montantDef: latestAmount,
        dureeDef: latetstDuree,
        periodicite: periodicite
      };
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
        id: "convention-2-head"
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
        _cache = new (_helpers_indexedDB__WEBPACK_IMPORTED_MODULE_6___default())({
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
      var createdKeycontrat = "cred_pub_tb_21000";
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
      _services_proxy_service__WEBPACK_IMPORTED_MODULE_7__["default"].proxyEbapis({
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
      _services_proxy_service__WEBPACK_IMPORTED_MODULE_7__["default"].proxyEbapis({
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
      _services_proxy_service__WEBPACK_IMPORTED_MODULE_7__["default"].proxyEbapis({
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
          var contrats = (_this10$meta_data$dos = _this10.meta_data["dossier_credit"]["cred_pub_tb_21000"]) === null || _this10$meta_data$dos === void 0 ? void 0 : _this10$meta_data$dos.envoie_contrats;
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
      _services_proxy_service__WEBPACK_IMPORTED_MODULE_7__["default"].proxyEbapis({
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
      this.list_contrats_signes = (_this$meta_data$dossi9 = (_this$meta_data$dossi0 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi0 === void 0 || (_this$meta_data$dossi0 = _this$meta_data$dossi0.cred_pub_tb_21001) === null || _this$meta_data$dossi0 === void 0 ? void 0 : _this$meta_data$dossi0.contrats_signes) !== null && _this$meta_data$dossi9 !== void 0 ? _this$meta_data$dossi9 : [];
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
        var contratSigneNew = (_this13$dossier_credi = (_this13$dossier_credi2 = _this13.dossier_credit["cred_pub_tb_21000"]) === null || _this13$dossier_credi2 === void 0 ? void 0 : _this13$dossier_credi2.contrats_signes) !== null && _this13$dossier_credi !== void 0 ? _this13$dossier_credi : [];
        var contratSigneExist = (_this13$dossier_credi3 = (_this13$dossier_credi4 = _this13.dossier_credit["cred_pub_tb_21001"]) === null || _this13$dossier_credi4 === void 0 ? void 0 : _this13$dossier_credi4.contrats_signes) !== null && _this13$dossier_credi3 !== void 0 ? _this13$dossier_credi3 : [];
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/cofina/convention/TCONV2.vue?vue&type=template&id=40b883ca&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/cofina/convention/TCONV2.vue?vue&type=template&id=40b883ca&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_vm.montantSeuil >= _vm.montantDefinitif ? _c("div", {
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
    }, [_vm._v("Non")])])]) : _c("div", [_vm._v("\n                          Vous ne pouvez pas modifier le statut du contrat\n                        ")])]), _vm._v(" "), _c("td", {
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
  }, [_vm._m(6)])]) : _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "d-flex items-align-center justify-content-center"
  }, [_c("p", {
    staticClass: "text-center",
    staticStyle: {
      "font-size": "large",
      color: "#00d8ff"
    }
  }, [_vm._v(" Vous ne pouvez pas utiliser cette fonctionnalité."), _c("br"), _vm._v("\n                      Le montant maximum requis pour y accéder est de "), _c("strong", [_vm._v(_vm._s(_vm._f("formatNumber")(_vm.montantSeuil)))]), _vm._v(", mais ce dossier a un montant de "), _c("Strong", [_vm._v(_vm._s(_vm._f("formatNumber")(_vm.montantDefinitif)))]), _vm._v(", ce qui dépasse le seuil autorisé.")], 1)])])]) : _c("div", {
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

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/cofina/convention/TCONV2.vue?vue&type=style&index=0&id=40b883ca&lang=css&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/cofina/convention/TCONV2.vue?vue&type=style&index=0&id=40b883ca&lang=css&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-40b883ca] {\r\n  font-family: \"Google sans\";\n}\nlabel[data-v-40b883ca] {\r\n  height: 10px;\r\n  font-size: 13px;\n}\ninput[type=\"text\"][data-v-40b883ca],\r\ninput[type=\"date\"][data-v-40b883ca],\r\nselect[data-v-40b883ca] {\r\n  height: 35px;\r\n  border-color: #34495e;\r\n  color: #57606f;\r\n  font-size: 13px;\r\n  font-weight: bold;\n}\n.card-width-height[data-v-40b883ca] {\r\n  width: 100%;\r\n  height: 100%;\n}\n.head[data-v-40b883ca] {\r\n  color: #f1f2f6;\r\n  font-size: 22px;\n}\n.hdc[data-v-40b883ca] {\r\n  background-color: #57606f;\n}\n.card-width-height[data-v-40b883ca] {\r\n  width: 100%;\r\n  height: 100%;\n}\n.head[data-v-40b883ca] {\r\n  color: #f1f2f6;\r\n  font-size: 22px;\n}\ninput[type=\"text\"][data-v-40b883ca],\r\ninput[type=\"date\"][data-v-40b883ca] {\r\n  width: 250px;\n}\n.review[data-v-40b883ca] {\r\n  width: 180px !important;\n}\n.engagement input[type=\"text\"][data-v-40b883ca],\r\ninput[type=\"date\"][data-v-40b883ca] {\r\n  width: 100% !important;\n}\n.th[data-v-40b883ca] {\r\n  padding: 4px;\r\n  padding-bottom: 0px;\n}\nselect[data-v-40b883ca] {\r\n  width: 250px;\n}\n.badge-sm[data-v-40b883ca] {\r\n  display: inline-block;\r\n  width: 15px;\r\n  height: 15px;\r\n  background: rgba(255, 0, 0, 0.882);\r\n  color: white;\r\n  font-size: 12px;\r\n  font-weight: 500;\r\n  border-radius: 100%;\r\n  position: absolute;\r\n  top: -20%;\r\n  left: 55%;\r\n  text-align: center;\n}\n.relook-header[data-v-40b883ca] {\r\n  color: #000;\r\n  background-color: #f4f3f3;\r\n  padding: 5px;\r\n  border-bottom: 1px solid #b6b8bb;\n}\ninput[type=\"checkbox\"][data-v-40b883ca] {\r\n  height: 18px;\r\n  width: 20px;\r\n  margin-right: 5px;\n}\ntd.sticky[data-v-40b883ca] {\r\n  position: sticky;\r\n  left: 0;\r\n  /* ou right: 0; selon la direction souhaitée */\r\n  background-color: #f4f3f3;\r\n  /* couleur de fond facultative pour masquer le contenu en dessous */\r\n  z-index: 1;\r\n  /* pour s'assurer que l'élément est au-dessus des autres éléments */\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/cofina/convention/TCONV2.vue?vue&type=style&index=0&id=40b883ca&lang=css&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/cofina/convention/TCONV2.vue?vue&type=style&index=0&id=40b883ca&lang=css&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TCONV2_vue_vue_type_style_index_0_id_40b883ca_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TCONV2.vue?vue&type=style&index=0&id=40b883ca&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/cofina/convention/TCONV2.vue?vue&type=style&index=0&id=40b883ca&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TCONV2_vue_vue_type_style_index_0_id_40b883ca_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TCONV2_vue_vue_type_style_index_0_id_40b883ca_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/tables/cofina/convention/TCONV2.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/tables/cofina/convention/TCONV2.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TCONV2_vue_vue_type_template_id_40b883ca_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TCONV2.vue?vue&type=template&id=40b883ca&scoped=true */ "./resources/js/components/tables/cofina/convention/TCONV2.vue?vue&type=template&id=40b883ca&scoped=true");
/* harmony import */ var _TCONV2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TCONV2.vue?vue&type=script&lang=js */ "./resources/js/components/tables/cofina/convention/TCONV2.vue?vue&type=script&lang=js");
/* harmony import */ var _TCONV2_vue_vue_type_style_index_0_id_40b883ca_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TCONV2.vue?vue&type=style&index=0&id=40b883ca&lang=css&scoped=true */ "./resources/js/components/tables/cofina/convention/TCONV2.vue?vue&type=style&index=0&id=40b883ca&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TCONV2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _TCONV2_vue_vue_type_template_id_40b883ca_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _TCONV2_vue_vue_type_template_id_40b883ca_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "40b883ca",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/tables/cofina/convention/TCONV2.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/tables/cofina/convention/TCONV2.vue?vue&type=script&lang=js":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/tables/cofina/convention/TCONV2.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TCONV2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TCONV2.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/cofina/convention/TCONV2.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TCONV2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/tables/cofina/convention/TCONV2.vue?vue&type=style&index=0&id=40b883ca&lang=css&scoped=true":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/components/tables/cofina/convention/TCONV2.vue?vue&type=style&index=0&id=40b883ca&lang=css&scoped=true ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TCONV2_vue_vue_type_style_index_0_id_40b883ca_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TCONV2.vue?vue&type=style&index=0&id=40b883ca&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/cofina/convention/TCONV2.vue?vue&type=style&index=0&id=40b883ca&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/tables/cofina/convention/TCONV2.vue?vue&type=template&id=40b883ca&scoped=true":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/tables/cofina/convention/TCONV2.vue?vue&type=template&id=40b883ca&scoped=true ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TCONV2_vue_vue_type_template_id_40b883ca_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TCONV2_vue_vue_type_template_id_40b883ca_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TCONV2_vue_vue_type_template_id_40b883ca_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TCONV2.vue?vue&type=template&id=40b883ca&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/cofina/convention/TCONV2.vue?vue&type=template&id=40b883ca&scoped=true");


/***/ })

}]);