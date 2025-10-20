"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_tables_cofina_convention_TCONV1_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/cofina/convention/TCONV1.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/cofina/convention/TCONV1.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _shared_ContextMenu_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/ContextMenu.vue */ "./resources/js/components/shared/ContextMenu.vue");
/* harmony import */ var _shared_ContextMenuItem_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/ContextMenuItem.vue */ "./resources/js/components/shared/ContextMenuItem.vue");
/* harmony import */ var _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vueform/multiselect/dist/multiselect.vue2 */ "./node_modules/@vueform/multiselect/dist/multiselect.vue2.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../helpers/indexedDB */ "./resources/js/helpers/indexedDB.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_helpers_indexedDB__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_proxy_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/proxy.service */ "./resources/js/services/proxy.service.js");
/* harmony import */ var _services_connects_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/connects.service */ "./resources/js/services/connects.service.js");
/* harmony import */ var _components_offview_microfinance_cofina_convention_Utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/offview/microfinance/cofina/convention/Utils */ "./resources/js/components/offview/microfinance/cofina/convention/Utils.js");
/* provided dependency */ var process = __webpack_require__(/*! process/browser.js */ "./node_modules/process/browser.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _methods;
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "envoi-contrats_cofina",
  display: "Envoie_contrats_cofina",
  components: {
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_10__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_10__.TrashIcon,
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_10__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_10__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_10__.ChevronDownIcon,
    ContextMenu: _shared_ContextMenu_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    ContextMenuItem: _shared_ContextMenuItem_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Multiselect: _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    meta_data: Object,
    tb_name: String,
    tb_display_name: String
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
      // console.log({montantDef})
      return Number(String(montantDef).replace(/\s/g, '').replace(',', '.'));
    },
    dossier_credit: function dossier_credit() {
      var _this$meta_data2;
      return (_this$meta_data2 = this.meta_data) === null || _this$meta_data2 === void 0 ? void 0 : _this$meta_data2.dossier_credit;
    }
  },
  created: function created() {
    this.loadEntityAddressinfo();
  },
  mounted: function mounted() {
    var _this = this;
    this.tableClosedOrOpened();
    this.loadRetrieved();
    this.loadTbAttrs();
    this.checkAllSent();
    this.checkNotify();
    EventBus.$on('contractor-chosen', function (data) {
      // console.log("data===>", data)
      localStorage.setItem("contractor", JSON.stringify(data));
      var _this$conventionSelec = _this.conventionSelectedParams,
        index = _this$conventionSelec.index,
        selectedConvention = _this$conventionSelec.selectedConvention,
        id = _this$conventionSelec.id;
      _this.contractor = data;
      _this.openConventionModal(index, selectedConvention, id);
    });
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
    EventBus.$on("reload-envoie-contrat-table", function (table) {
      // console.log(">> Table", table)
      if (![undefined, null, ''].includes(table)) {
        var _table$envoie_contrat;
        _this.envoie_contrats = (_table$envoie_contrat = table === null || table === void 0 ? void 0 : table.envoie_contrats) !== null && _table$envoie_contrat !== void 0 ? _table$envoie_contrat : [];
        _this.handleInput();
      }
    });
    EventBus.$on('async-with-contractTable', function (data) {
      //   console.log(">> data", data)
      var is_in = _this.envoie_contrats.find(function (envoie_contrat) {
        return envoie_contrat.id === data.contractId;
      });
      if (is_in) return;
      var new_convention = {
        id: data.contractId,
        nom: data === null || data === void 0 ? void 0 : data.type_convention,
        commentaire: "",
        template: "",
        files: 0,
        autre_nom: "",
        is_send: false
      };
      _this.envoie_contrats.push(new_convention);
    });

    // if (this.meta_data?.dossier_credit?.categorie_client == 'Retail') {
    //   this.role = "CC"
    // }

    // if (this.meta_data?.dossier_credit?.categorie_client == 'Corporate') {
    //   this.role = "CAE"
    // }

    // cofina
    this.role = "CAF";
    this.getFiles();
    this.getEnvoieContratFiles();
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
        nom: "Billet à ordre",
        value: "Billet à ordre"
      }, {
        nom: "Contrat de cautionnement",
        value: "Contrat de cautionnement"
      }, {
        nom: "Contrat de gage de vehicule sans depossession",
        value: "Contrat de gage de vehicule sans depossession"
      }, {
        nom: "Contrat de prêt(Retail)",
        value: "Contrat de prêt"
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
        nom: "Contrat de prêt Corporate",
        value: "Contrat de prêt Corporate"
      }, {
        nom: "Convention de transfert",
        value: "Convention de transfert"
      }, {
        nom: "Contrat Synallagmatique de terrain",
        value: "Contrat Synallagmatique de terrain"
      }, {
        nom: "Contrat de pret restructuration",
        value: "Contrat de pret restructuration"
      }
      // {
      //     nom: "Convention de remise volontaire de titre",
      //     value: "Convention de remise volontaire de titre"
      // },
      // {
      //     nom: "Avis du client",
      //     value: "Avis du client"
      // }
      ],
      is_notify: false,
      file_data_list: [],
      showBtnDownload: false,
      showAllFiles: [],
      showMoreNumber: 2,
      MAX_NAME_LENGTH: 10,
      SHORT_NAME_SEPARATOR: '...',
      isButtonDisabled: false,
      allSent: false,
      contractor: null,
      conventionSelectedParams: null,
      entityInfos: null,
      openConvLoader: {},
      delConvLoader: {}
    };
  },
  methods: (_methods = {
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
    loadEntityAddressinfo: function loadEntityAddressinfo() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _this2$meta_data, _dossier_credit$credK;
        var dossier_credit, credKeys, filiale, res;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              dossier_credit = (_this2$meta_data = _this2.meta_data) === null || _this2$meta_data === void 0 ? void 0 : _this2$meta_data.dossier_credit;
              credKeys = _this2.determineCredPubTables(dossier_credit === null || dossier_credit === void 0 ? void 0 : dossier_credit.applied_templ_name);
              filiale = (_dossier_credit$credK = dossier_credit[credKeys[0]]) === null || _dossier_credit$credK === void 0 ? void 0 : _dossier_credit$credK.filiale;
              _context.next = 5;
              return _services_credit_service__WEBPACK_IMPORTED_MODULE_5__["default"].loadEntityInfos(filiale);
            case 5:
              res = _context.sent;
              _this2.entityInfos = res.data;
            case 7:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    handleInput: function handleInput(evt) {
      this.formDataToBeWatched["envoie_contrats"] = this.envoie_contrats;
      this.validateEnvoieContrats();
      this.checkAllSent();
    },
    openNotesModal: function openNotesModal() {
      var listing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.listingNote = listing;
      this.$modal.show(this.tb_name);
    },
    retract: function retract() {
      this.seen = !this.seen;
      var a = {
        tb_name: this.tb_name + this.meta_data["cred_pub_key"],
        status: this.seen
      };
      EventBus.$emit("savedclosed-table", a);
    },
    validateEnvoieContrats: function validateEnvoieContrats() {
      var _this3 = this;
      this.isButtonDisabled = false;
      this.envoie_contrats.forEach(function (contrat) {
        if (contrat.nom === null || contrat.nom === '') {
          _this3.isButtonDisabled = true;
        } else if (contrat.nom.toUpperCase() === 'AUTRE' && (contrat.autre_nom === null || contrat.autre_nom === '')) {
          _this3.isButtonDisabled = true;
        } else if (contrat.files <= 0) {
          _this3.isButtonDisabled = true;
        }
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
        id: "convention-head"
      };
      this.$emit("load-buffer", p);
    },
    tableClosedOrOpened: function tableClosedOrOpened() {
      this.seen = this.fetchClosedTables(this.tb_name + this.meta_data["cred_pub_key"]);
    }
  }, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_methods, "openNotesModal", function openNotesModal() {
    var listing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    this.listingNote = listing;
    this.$modal.show(this.tb_name);
  }), "loadRetrieved", function loadRetrieved() {
    var _this4 = this;
    var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
    var createdKey = this.tb_name;
    var createdKeyArr = createdKey.split("tb");
    createdKey = "cred_pub_tb_" + createdKeyArr[1];

    // this.defaultRetract(false, this.meta_data["dossier_credit"]?.applied_templ_id);

    if (lentb.length > 0) {
      if (this.meta_data["dossier_credit"][createdKey] != undefined) {
        var _this$meta_data3, _this$meta_data$dossi, _this$meta_data$dossi2;
        this.formDataToBeWatched = this.meta_data["dossier_credit"][createdKey];
        // console.log("credit",this.formDataToBeWatched);
        var Clienttype = (_this$meta_data3 = this.meta_data) === null || _this$meta_data3 === void 0 || (_this$meta_data3 = _this$meta_data3.dossier_credit) === null || _this$meta_data3 === void 0 || (_this$meta_data3 = _this$meta_data3.cred_pub_tb_00) === null || _this$meta_data3 === void 0 ? void 0 : _this$meta_data3.type_de_clientele;
        if (((_this$meta_data$dossi = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi.envoie_contrats) != undefined) {
          this.envoie_contrats = this.meta_data["dossier_credit"][createdKey]["envoie_contrats"];
        }
        if (((_this$meta_data$dossi2 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi2 === void 0 ? void 0 : _this$meta_data$dossi2.contrats_signes) != undefined) {
          var _this$meta_data$dossi3;
          var contrats_signes = (_this$meta_data$dossi3 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi3 === void 0 ? void 0 : _this$meta_data$dossi3.contrats_signes;
          contrats_signes === null || contrats_signes === void 0 || contrats_signes.forEach(function (contrat_signe) {
            var envoie_contrat = _this4.envoie_contrats.find(function (envoie_contrat) {
              return envoie_contrat.id === contrat_signe.contrats_id;
            });
            if (envoie_contrat && contrat_signe.files <= 0) {
              envoie_contrat.is_send = false;
            }
          });
        }
      }
    }
  }), "launchAutoSaver", function launchAutoSaver() {
    var _this5 = this;
    _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["default"].loadUserData().then(function (res) {
      _this5.send2Backend(res, 0, 0);
    })["catch"](function (err) {
      _this5.loadWithError(err);
    });
  }), "loadWithError", function loadWithError(err) {
    // // window.location.href = "/login";
  }), "checkAllSent", function checkAllSent() {
    this.allSent = this.envoie_contrats.every(function (contrat) {
      return contrat.is_send === true;
    });
  }), "send2Backend", function send2Backend(res, newVal, oldVal) {
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
  }), "deleteTB", function deleteTB() {
    if (confirm("Êtes-vous sûr de vouloir supprimer ce tableau ?")) {
      this.$emit("delete-tb", {
        tb_name: this.tb_name
      });
    }
  }), "toggleIsSeen", function toggleIsSeen(key) {
    var _ref;
    var val = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var data = _objectSpread({}, this.isSeenState);
    val = (_ref = val !== null && val !== void 0 ? val : data[key]) !== null && _ref !== void 0 ? _ref : false;
    data[key] = !val;
    this.isSeenState = data;
  }), "addMore1", function addMore1() {
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
  }), "deleteConvention", function deleteConvention(data) {
    var _this6 = this;
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var index;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            index = _this6.envoie_contrats.findIndex(function (envoie_contrat) {
              return envoie_contrat.id === data.id;
            });
            _context2.next = 3;
            return _this6.$confirm("Vous êtes sur le point de supprimer la convention `" + (data === null || data === void 0 ? void 0 : data.type_convention) + "` ! Êtes vous sûr de vouloir continuer ?", "Suppression convention").then(function () {
              var _this6$meta_data;
              _this6.$set(_this6.delConvLoader, data.id, true);
              _this6.$axios.post(_this6.ebapisHost + "creditbuilder/api/v1/delete-redaction-convention/", {
                cred_pub_key: (_this6$meta_data = _this6.meta_data) === null || _this6$meta_data === void 0 ? void 0 : _this6$meta_data.dossier_credit['cred_pub_key'],
                data: data
              }).then(function (response) {
                var _response$data$data, _response$data;
                _this6.$set(_this6.delConvLoader, data.id, false);
                _this6.redaction_conventions = (_response$data$data = response === null || response === void 0 || (_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.data) !== null && _response$data$data !== void 0 ? _response$data$data : [];
                _this6.envoie_contrats.splice(index, 1);
                _this6.handleInput();
              })["catch"](function (error) {
                console.error(error);
                _this6.$set(_this6.delConvLoader, data.id, false);
              });
            })["catch"](function (error) {
              console.error(error);
              _this6.$set(_this6.delConvLoader, data.id, false);
            });
          case 3:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))();
  }), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_methods, "handleDoubleClickOrClick", function handleDoubleClickOrClick(event, index) {
    var _this$envoie_contrats,
      _this7 = this;
    EventBus.$emit("open-extra-file-explorer");
    // const dateNow = new Date().toLocaleDateString();
    var numeroPiece = ((_this$envoie_contrats = this.envoie_contrats[index]) === null || _this$envoie_contrats === void 0 || (_this$envoie_contrats = _this$envoie_contrats.nom) === null || _this$envoie_contrats === void 0 ? void 0 : _this$envoie_contrats.trim()) || "";
    var result = numeroPiece;
    setTimeout(function () {
      EventBus.$emit("data-extra-file-explorer", {
        name: "Contrat {(*)}envoie_contrats_" + index + "_" + _this7.$route.params.templateId
      });
    }, 500);
  }), "getFiles", function getFiles() {
    var _this8 = this;
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
        _this8.files = res.data.data;
        _this8.envoie_contrats.forEach(function (element, index) {
          var count = 0;
          _this8.files.forEach(function (file) {
            var _element$template;
            if ((file === null || file === void 0 ? void 0 : file.extra_file_template_id) != null && (element === null || element === void 0 || (_element$template = element.template) === null || _element$template === void 0 ? void 0 : _element$template.id) == (file === null || file === void 0 ? void 0 : file.extra_file_template_id)) {
              count++;
            }
          });
          _this8.envoie_contrats[index]["files"] = count;
          _this8.handleInput();
          _this8.getEnvoieContratFiles();
        });
      }
    })["catch"](function (err) {
      console.error(err);
    });
  }), "getEnvoieContratFiles", function getEnvoieContratFiles() {
    var _this9 = this;
    _services_proxy_service__WEBPACK_IMPORTED_MODULE_7__["default"].proxyEbapis({
      url: this.connectsHost + "api/get-files",
      method: "POST",
      data: {
        file_identity: this.meta_data["dossier_credit"].cred_pub_key
      }
    }).then(function (res) {
      var _res$data$data3, _res$data$data4;
      res.data = JSON.parse(res.data);
      _this9.file_data_list = [];
      if (((_res$data$data3 = res.data.data) === null || _res$data$data3 === void 0 ? void 0 : _res$data$data3.length) > 0 || ((_res$data$data4 = res.data.data) === null || _res$data$data4 === void 0 ? void 0 : _res$data$data4.length) != null) {
        _this9.files = res.data.data;
        _this9.envoie_contrats.forEach(function (element, index) {
          var fileData = [];
          _this9.files.forEach(function (file) {
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
          _this9.file_data_list.push(fileData);
          _this9.showAllFiles = Array(_this9.file_data_list.length).fill(false);
          _this9.showBtnDownload = true;
        });
      }
    })["catch"](function (err) {
      console.error(err);
    });
  }), "NotifyUser", function NotifyUser() {
    var _this0 = this;
    // activer le loader
    this.sendRequest = true;
    this.is_notify = false;

    // Marquer chaque convention comme status envoyé
    this.updateAllList();
    _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["default"].loadUserData().then(function (res) {
      var user = res.data;
      // recupérer les infos du sender
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

      // l'id du caf
      var targetTargetId = _this0.meta_data["dossier_credit"].primary_owner;
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
        _this0.$axios.post(_this0.ebapisHost + "notifications/api/v1/envoi-contrat-notifications/", {
          cred_pub_key: _this0.meta_parseable["cred_pub_key"],
          sender_data: senderData,
          target_data: targetData,
          conformite: false
        }).then(function (response) {
          _this0.$toasted.show("Notification éffectuée avec succès.");
          _this0.is_notify = true;
          _this0.sendRequest = false;
        })["catch"](function (error) {
          console.log(error);
          this.is_notify = false;
        });
      })["catch"](function (err) {
        _this0.loadWithError(err);
      });
    })["catch"](function (err) {
      _this0.loadWithError(err);
    });
  }), "getContrat", function getContrat(selectedItem) {
    if (selectedItem) {
      this.envoie_contrat.nom = selectedItem.nom;
    } else {
      this.envoie_contrat.nom = "";
    }
  }), "checkNotify", function checkNotify() {
    var _this$meta_data4, _this$meta_data5, _this$meta_data6;
    console.log("type", (_this$meta_data4 = this.meta_data) === null || _this$meta_data4 === void 0 || (_this$meta_data4 = _this$meta_data4.dossier_credit) === null || _this$meta_data4 === void 0 || (_this$meta_data4 = _this$meta_data4.cred_pub_tb_00) === null || _this$meta_data4 === void 0 ? void 0 : _this$meta_data4.type_de_clientele);

    //checker le type du client
    if (((_this$meta_data5 = this.meta_data) === null || _this$meta_data5 === void 0 || (_this$meta_data5 = _this$meta_data5.dossier_credit) === null || _this$meta_data5 === void 0 || (_this$meta_data5 = _this$meta_data5.cred_pub_tb_00) === null || _this$meta_data5 === void 0 ? void 0 : _this$meta_data5.type_de_clientele) == "Corporate") {
      this.liste_contrats.push({
        nom: "Contrat de prêt(Entreprise individuelle)",
        value: "Contrat de prêt(Entreprise individuelle)"
      });
    } else if (((_this$meta_data6 = this.meta_data) === null || _this$meta_data6 === void 0 || (_this$meta_data6 = _this$meta_data6.dossier_credit) === null || _this$meta_data6 === void 0 || (_this$meta_data6 = _this$meta_data6.cred_pub_tb_00) === null || _this$meta_data6 === void 0 ? void 0 : _this$meta_data6.type_de_clientele) == "Retail") {
      this.liste_contrats.push({
        nom: "Contrat de prêt Corporate",
        value: "Contrat de prêt Corporate"
      });
    }
    if (this.meta_data["dossier_credit"]["contrat_notification"] != undefined) {
      this.is_notify = true;
    }
    this.handleInput();
  }), "updateAllList", function updateAllList() {
    this.envoie_contrats.forEach(function (element) {
      element.is_send = true;
    }), this.handleInput();
  }), "getIcon", function getIcon(extension) {
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
  }), "downloadFile", function downloadFile(index, fileIndex) {
    var file = this.file_data_list[index][fileIndex];
    var url = window.location.origin + '/file?f=' + encodeURIComponent(file.file_url);
    window.open(url, '_blank');
  }), "formatFileName", function formatFileName(name) {
    return this.isFileNameTooLong(name) ? this.shortenFileName(name) : name;
  }), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_methods, "shortenFileName", function shortenFileName(name) {
    return (name === null || name === void 0 ? void 0 : name.substring(0, Math.floor(this.MAX_NAME_LENGTH / 2))) + this.SHORT_NAME_SEPARATOR + (name === null || name === void 0 ? void 0 : name.substring((name === null || name === void 0 ? void 0 : name.length) - 1 - Math.floor(this.MAX_NAME_LENGTH / 2), (name === null || name === void 0 ? void 0 : name.length) - 1));
  }), "isFileNameTooLong", function isFileNameTooLong(name) {
    return (name === null || name === void 0 ? void 0 : name.length) > this.MAX_NAME_LENGTH;
  }), "validateEnvoieContrats", function validateEnvoieContrats() {
    var _this1 = this;
    this.isButtonDisabled = false;
    this.envoie_contrats.forEach(function (contrat) {
      if (contrat.nom === null || contrat.nom === '') {
        _this1.isButtonDisabled = true;
      } else if (contrat.nom.toUpperCase() === 'AUTRE' && (contrat.autre_nom === null || contrat.autre_nom === '')) {
        _this1.isButtonDisabled = true;
      } else if (contrat.files <= 0) {
        _this1.isButtonDisabled = true;
      }
    });
  }), "openConventionModal", function openConventionModal(index, selectedConvention) {
    var _arguments = arguments,
      _this10 = this;
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var _this10$meta_data, _this10$meta_data2, _response$data$data2, _response$data2;
      var id, applied_templ_name, tb_keys, response, allContract, found, contractorsFound;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            id = _arguments.length > 2 && _arguments[2] !== undefined ? _arguments[2] : null;
            _this10.$set(_this10.openConvLoader, index, true);

            // Récupération du nom du template appliqué
            applied_templ_name = (_this10$meta_data = _this10.meta_data) === null || _this10$meta_data === void 0 || (_this10$meta_data = _this10$meta_data.dossier_credit) === null || _this10$meta_data === void 0 ? void 0 : _this10$meta_data.applied_templ_name;
            tb_keys = _this10.determineCredPubTables(applied_templ_name); // Stocker les paramètres pour utilisation future
            _this10.conventionSelectedParams = {
              index: index,
              selectedConvention: selectedConvention,
              id: id
            };

            // Requête pour récupérer les contrats
            _context3.next = 7;
            return _this10.$axios.post("".concat(_this10.ebapisHost, "creditbuilder/api/v1/get-redaction-convention/"), {
              cred_pub_key: (_this10$meta_data2 = _this10.meta_data) === null || _this10$meta_data2 === void 0 ? void 0 : _this10$meta_data2.cred_pub_key
            });
          case 7:
            response = _context3.sent;
            allContract = (_response$data$data2 = response === null || response === void 0 || (_response$data2 = response.data) === null || _response$data2 === void 0 ? void 0 : _response$data2.data) !== null && _response$data$data2 !== void 0 ? _response$data$data2 : [];
            console.log("allContract", allContract);

            // Chercher si un contrat existant correspond aux paramètres
            found = allContract.find(function (el) {
              return el.contractId == id && el.type_convention == selectedConvention;
            });
            if (found) {
              _context3.next = 22;
              break;
            }
            // Vérifie les contractants dans les objets internes
            contractorsFound = (0,_components_offview_microfinance_cofina_convention_Utils__WEBPACK_IMPORTED_MODULE_9__.verifyContractObject)(_this10.dossier_credit, selectedConvention, tb_keys);
            if (!(contractorsFound && contractorsFound.length > 0)) {
              _context3.next = 22;
              break;
            }
            if (!(contractorsFound.length > 1)) {
              _context3.next = 21;
              break;
            }
            if (_this10.contractor) {
              _context3.next = 19;
              break;
            }
            EventBus.$emit('contractors-found', contractorsFound);
            _this10.$set(_this10.openConvLoader, index, false);
            return _context3.abrupt("return");
          case 19:
            _context3.next = 22;
            break;
          case 21:
            _this10.contractor = contractorsFound[0];
          case 22:
            // Affiche le modal principal
            _this10.$modal.show('redaction_convention_cofina');

            // Déclenche les événements après un petit délai pour s'assurer que le modal est bien affiché
            setTimeout(function () {
              EventBus.$emit('select-automatic-convention', {
                selectedConvention: selectedConvention,
                contractor: _this10.contractor,
                contractId: id,
                entityInfos: _this10.entityInfos
              });
              EventBus.$emit('redaction-contrat', index);
              _this10.contractor = null; // Réinitialise après utilisation
            }, 500);
            _this10.$set(_this10.openConvLoader, index, false);
          case 25:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }))();
  }), "onChangeStateShowAll", function onChangeStateShowAll(index) {
    this.$set(this.showAllFiles, index, !this.showAllFiles[index]);
  })),
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/cofina/convention/TCONV1.vue?vue&type=template&id=40aa6c49&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/cofina/convention/TCONV1.vue?vue&type=template&id=40aa6c49&scoped=true ***!
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
  }, [_c("span", [_vm._v("\n                        " + _vm._s(_vm.formDataToBeWatched.notes.length) + "\n                      ")])])])]) : _vm._e(), _vm._v(" "), _c("chevron-up-icon", {
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
  }, [_vm.montantSeuil >= _vm.montantDefinitif ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "table-responsive",
    staticStyle: {
      "padding-bottom": "150px"
    }
  }, [_c("table", {
    staticClass: "table table-bordered mb-1"
  }, [_c("thead", [_c("tr", [_vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _vm._m(2), _vm._v(" "), _c("td", {
    staticClass: "col-1 text-center vertical-middle",
    staticStyle: {
      "max-width": "50px"
    }
  }, [_c("button", {
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
  })], 1)])])]), _vm._v(" "), _c("tbody", [_vm._l(_vm.envoie_contrats, function (envoie_contrat, index) {
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
      }), _vm._v(" " + _vm._s(_vm.formatFileName(file === null || file === void 0 ? void 0 : file.file_name)) + "." + _vm._s(file === null || file === void 0 ? void 0 : file.file_ext) + "\n                                      ")]), _vm._v(" "), _c("span", {
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
      }), _vm._v(" " + _vm._s(file === null || file === void 0 ? void 0 : file.file_name) + "\n                                    ")]), _vm._v(" "), _c("span", {
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
    }, [!envoie_contrat.is_send && ["Autre"].includes(envoie_contrat === null || envoie_contrat === void 0 ? void 0 : envoie_contrat.nom) ? _c("button", {
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
    }, [!envoie_contrat.is_send && !["Autre", "", null].includes(envoie_contrat === null || envoie_contrat === void 0 ? void 0 : envoie_contrat.nom) ? _c("button", {
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
        title: "Cliquer ici pour générer automatiquement le(s) convention(s)"
      },
      on: {
        click: function click($event) {
          return _vm.openConventionModal(index, envoie_contrat === null || envoie_contrat === void 0 ? void 0 : envoie_contrat.nom, envoie_contrat === null || envoie_contrat === void 0 ? void 0 : envoie_contrat.id);
        }
      }
    }, [[undefined, null, "", false].includes(_vm.openConvLoader[index]) ? _c("i", {
      staticClass: "icofont-automation"
    }) : _c("div", {
      staticClass: "spinner-border text-light",
      staticStyle: {
        width: "25px",
        height: "25px"
      },
      attrs: {
        role: "status"
      }
    }, [_c("span", {
      staticClass: "visually-hidden"
    }, [_vm._v("Loading...")])])]) : _vm._e()])])]), _vm._v(" "), _c("td", {
      staticClass: "col-1 text-center vertical-middle",
      staticStyle: {
        "max-width": "50px"
      }
    }, [!envoie_contrat.is_send && [undefined, null, "", false].includes(_vm.openConvLoader[envoie_contrat.id]) ? _c("button", {
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
          return _vm.deleteConvention({
            id: envoie_contrat.id,
            type_convention: envoie_contrat.type_convention
          });
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1) : _c("div", {
      staticClass: "spinner-border text-light",
      staticStyle: {
        width: "25px",
        height: "25px"
      },
      attrs: {
        role: "status"
      }
    }, [_c("span", {
      staticClass: "visually-hidden"
    }, [_vm._v("Loading...")])])])]);
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
  }, [_vm._v("\n                              Notification du " + _vm._s(_vm.role) + " en cours...\n                            ")])] : [_c("button", {
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
  }, [_vm._v("\n                              Notifier le " + _vm._s(_vm.role) + "\n                            ")]), _vm._v(" "), _c("div")]], 2) : _vm._e()])], 2)])])]) : _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "d-flex items-align-center justify-content-center"
  }, [_c("p", {
    staticClass: "text-center",
    staticStyle: {
      "font-size": "large",
      color: "#00d8ff"
    }
  }, [_vm._v(" Vous ne pouvez pas utiliser cette fonctionnalité."), _c("br"), _vm._v("\n                    Le montant maximum requis pour y accéder est de "), _c("strong", [_vm._v(_vm._s(_vm._f("formatNumber")(_vm.montantSeuil)))]), _vm._v(", mais ce dossier a un montant de "), _c("Strong", [_vm._v(_vm._s(_vm._f("formatNumber")(_vm.montantDefinitif)))]), _vm._v(", ce qui dépasse le seuil autorisé.")], 1)])])]) : _c("div", {
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
  }, [_vm._v("\n                  Envoie des contrats\n                  "), _c("chevron-down-icon", {
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
  }, [_vm._v("\n              Fermer le tableau\n            ")])])])]) : _c("div", {
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
  }, [_c("span", [_vm._v("\n                        " + _vm._s(_vm.formDataToBeWatched.notes.length) + "\n                      ")])])])]) : _vm._e(), _vm._v(" "), _c("chevron-down-icon", {
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
    staticClass: "th font-weight-bold text-uppercase vertical-middle sticky"
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
    staticClass: "th font-weight-bold text-uppercase vertical-middle"
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
    staticClass: "th font-weight-bold text-uppercase vertical-middle text-center"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(" Contrat(s) à signer")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/cofina/convention/TCONV1.vue?vue&type=style&index=0&id=40aa6c49&lang=css&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/cofina/convention/TCONV1.vue?vue&type=style&index=0&id=40aa6c49&lang=css&scoped=true ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-40aa6c49] {\r\n    font-family: \"Google sans\";\n}\nlabel[data-v-40aa6c49] {\r\n    height: 10px;\r\n    font-size: 13px;\n}\ninput[type=\"text\"][data-v-40aa6c49],\r\n  input[type=\"date\"][data-v-40aa6c49],\r\n  select[data-v-40aa6c49] {\r\n    height: 35px;\r\n    border-color: #34495e;\r\n    color: #57606f;\r\n    font-size: 13px;\r\n    font-weight: bold;\n}\n.card-width-height[data-v-40aa6c49] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-40aa6c49] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\n.hdc[data-v-40aa6c49] {\r\n    background-color: #57606f;\n}\n.card-width-height[data-v-40aa6c49] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-40aa6c49] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\ninput[type=\"text\"][data-v-40aa6c49],\r\n  input[type=\"date\"][data-v-40aa6c49] {\r\n    width: 250px;\n}\n.review[data-v-40aa6c49] {\r\n    width: 180px !important;\n}\n.engagement input[type=\"text\"][data-v-40aa6c49],\r\n  input[type=\"date\"][data-v-40aa6c49] {\r\n    width: 100% !important;\n}\n.th[data-v-40aa6c49] {\r\n    padding: 4px;\r\n    padding-bottom: 0px;\n}\nselect[data-v-40aa6c49] {\r\n    width: 250px;\n}\n.badge-sm[data-v-40aa6c49] {\r\n    display: inline-block;\r\n    width: 15px;\r\n    height: 15px;\r\n    background: rgba(255, 0, 0, 0.882);\r\n    color: white;\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    border-radius: 100%;\r\n    position: absolute;\r\n    top: -20%;\r\n    left: 55%;\r\n    text-align: center;\n}\n.relook-header[data-v-40aa6c49] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\ntd.sticky[data-v-40aa6c49] {\r\n    position: sticky;\r\n    left: 0;\r\n    background-color: #fff;\r\n    z-index: 1;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/cofina/convention/TCONV1.vue?vue&type=style&index=0&id=40aa6c49&lang=css&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/cofina/convention/TCONV1.vue?vue&type=style&index=0&id=40aa6c49&lang=css&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TCONV1_vue_vue_type_style_index_0_id_40aa6c49_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TCONV1.vue?vue&type=style&index=0&id=40aa6c49&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/cofina/convention/TCONV1.vue?vue&type=style&index=0&id=40aa6c49&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TCONV1_vue_vue_type_style_index_0_id_40aa6c49_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TCONV1_vue_vue_type_style_index_0_id_40aa6c49_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/offview/microfinance/cofina/convention/Utils.js":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/offview/microfinance/cofina/convention/Utils.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GetDefaultValue: () => (/* binding */ GetDefaultValue),
/* harmony export */   getDefValBill: () => (/* binding */ getDefValBill),
/* harmony export */   verifyContractObject: () => (/* binding */ verifyContractObject)
/* harmony export */ });
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
// retrouver les valeurs par défaults en fonction de la clé rechercher

function GetDefaultValue(dossier, key, tb_arrays) {
  var _countryWords$entite, _dossier$cred2, _countryWords$entite2, _countryWords$entite3, _ref, _dossier$cred_pub_tb_, _dossier$cred_pub_tb_2, _dossier$cred3, _dossier$cred_pub_tb_3, _dossier$cred1$frais$, _dossier$cred4, _dossier$cred_pub_tb_4, _dossier$cred5, _dossier$cred_pub_tb_5, _dossier$decision_log, _dossier$cred0$dir_ge, _dossier$cred6;
  var extraParams = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  // console.log("key au debut", key)
  var cred0 = tb_arrays[0];
  var cred1 = tb_arrays[1];
  var keys = ["caf_recorded_file", "doss_central_file_recorder"];
  var entite = '';
  var result = '';
  var _caracteristiqueDuPre = caracteristiqueDuPret(dossier, cred0, cred1),
    montantDef = _caracteristiqueDuPre.montantDef,
    dureeDef = _caracteristiqueDuPre.dureeDef,
    periodicite = _caracteristiqueDuPre.periodicite;
  // get entity
  for (var _i = 0, _keys = keys; _i < _keys.length; _i++) {
    var _key = _keys[_i];
    var value = dossier[_key];
    if (value !== null && value !== undefined) {
      if (value.filiale !== null && value.filiale !== undefined) {
        entite = value.filiale;
      }
    }
  }
  switch (key) {
    case 'filiale':
      return (_countryWords$entite = countryWords[entite]) === null || _countryWords$entite === void 0 ? void 0 : _countryWords$entite.pays;
    case 'entite':
      return entite;
    case 'nomcli':
      keys.forEach(function (key) {
        var value = dossier[key];
        if (value !== null && _typeof(value) === 'object') {
          var _value$nomcli;
          result = (_value$nomcli = value.nomcli) !== null && _value$nomcli !== void 0 ? _value$nomcli : value.client.nomcli;
        }
      });
      if (cred0 !== null) {
        var _dossier$cred;
        result = ((_dossier$cred = dossier[cred0]) === null || _dossier$cred === void 0 ? void 0 : _dossier$cred.denomination_client) || result;
      }
      return result;
    case 'numero_compte_courant':
      return (_dossier$cred2 = dossier[cred0]) === null || _dossier$cred2 === void 0 ? void 0 : _dossier$cred2.numero_compte_courant;
    case 'nationalite':
      return (_countryWords$entite2 = countryWords[entite]) === null || _countryWords$entite2 === void 0 ? void 0 : _countryWords$entite2.nationalite;
    case 'capitale':
      return (_countryWords$entite3 = countryWords[entite]) === null || _countryWords$entite3 === void 0 ? void 0 : _countryWords$entite3.capitale;
    case "now":
      return new Date().toISOString().slice(0, 10);
    case "montant":
      return montantDef !== null && montantDef !== void 0 ? montantDef : '';
    case "duree_credit":
      return dureeDef !== null && dureeDef !== void 0 ? dureeDef : '';
    case "type_de_concours":
      return dossier === null || dossier === void 0 ? void 0 : dossier.applied_templ_name;
    case "periodicite":
      return periodicite !== null && periodicite !== void 0 ? periodicite : '';
    case "taux_interet_ht":
      return "1.5";
    case "tva":
      return "18";
    case "frais_dossier":
      return (_ref = (_dossier$cred_pub_tb_ = dossier === null || dossier === void 0 || (_dossier$cred_pub_tb_2 = dossier["cred_pub_tb_19000"]) === null || _dossier$cred_pub_tb_2 === void 0 ? void 0 : _dossier$cred_pub_tb_2.frais_dossier) !== null && _dossier$cred_pub_tb_ !== void 0 ? _dossier$cred_pub_tb_ : dossier === null || dossier === void 0 || (_dossier$cred3 = dossier[cred1]) === null || _dossier$cred3 === void 0 || (_dossier$cred3 = _dossier$cred3.frais) === null || _dossier$cred3 === void 0 || (_dossier$cred3 = _dossier$cred3[0]) === null || _dossier$cred3 === void 0 ? void 0 : _dossier$cred3.montant_frais) !== null && _ref !== void 0 ? _ref : "";
    case "pourcent_montant_accorde_frais_dossier":
      return dossier === null || dossier === void 0 || (_dossier$cred_pub_tb_3 = dossier["cred_pub_tb_19000"]) === null || _dossier$cred_pub_tb_3 === void 0 ? void 0 : _dossier$cred_pub_tb_3.pourcent_montant_accorde_frais_dossier;
    case "prime_risque":
      return (_dossier$cred1$frais$ = dossier === null || dossier === void 0 || (_dossier$cred4 = dossier[cred1]) === null || _dossier$cred4 === void 0 || (_dossier$cred4 = _dossier$cred4['frais'][2]) === null || _dossier$cred4 === void 0 ? void 0 : _dossier$cred4['montant_frais']) !== null && _dossier$cred1$frais$ !== void 0 ? _dossier$cred1$frais$ : dossier === null || dossier === void 0 || (_dossier$cred_pub_tb_4 = dossier["cred_pub_tb_19000"]) === null || _dossier$cred_pub_tb_4 === void 0 ? void 0 : _dossier$cred_pub_tb_4.prime_risque;
    case "pourcent_montant_accorde_prime_risque":
      return dossier === null || dossier === void 0 || (_dossier$cred5 = dossier[cred1]) === null || _dossier$cred5 === void 0 || (_dossier$cred5 = _dossier$cred5['frais'][2]) === null || _dossier$cred5 === void 0 ? void 0 : _dossier$cred5['taux_modififie'];
    case "montant_echeance":
      return Math.ceil(dossier === null || dossier === void 0 || (_dossier$cred_pub_tb_5 = dossier["cred_pub_tb_12001"]) === null || _dossier$cred_pub_tb_5 === void 0 || (_dossier$cred_pub_tb_5 = _dossier$cred_pub_tb_5['echeance']) === null || _dossier$cred_pub_tb_5 === void 0 ? void 0 : _dossier$cred_pub_tb_5['echeance']);
    case "nom_caf":
      return dossier === null || dossier === void 0 ? void 0 : dossier.monteur_doss;
    case "nom_ca":
      return dossier === null || dossier === void 0 || (_dossier$decision_log = dossier.decision_logs.find(function (d) {
        return d.giver_role_sigle == 'CA';
      })) === null || _dossier$decision_log === void 0 ? void 0 : _dossier$decision_log.giver_name;
    case "nom_dg":
      return (_dossier$cred0$dir_ge = (_dossier$cred6 = dossier[cred0]) === null || _dossier$cred6 === void 0 || (_dossier$cred6 = _dossier$cred6.dir_gen_filiale) === null || _dossier$cred6 === void 0 ? void 0 : _dossier$cred6.name) !== null && _dossier$cred0$dir_ge !== void 0 ? _dossier$cred0$dir_ge : '';
    case "empty":
      return "";
    default:
      // console.log({ inSwitchKey: key })

      return populateDefaultKeys(key, extraParams);
  }
}
function verifyContractObject(dossier_credit, selectedConvention, tb_keys) {
  var _tb_keys$;
  // console.log({dossier_credit});
  var cred_pub_tb_4 = (_tb_keys$ = tb_keys[4]) !== null && _tb_keys$ !== void 0 ? _tb_keys$ : null;
  // Verifie si le dossier de credit a un l'objet du contrat.
  // Exemple pour un contract de caution on verifie si le dossier a des cautions

  var res = [];
  if (["Contrat de prêt", "Billet à ordre"].includes(selectedConvention)) {
    var _Object$keys;
    var contractor = null;
    var clients = getClient(dossier_credit);
    if (((_Object$keys = Object.keys(clients)) === null || _Object$keys === void 0 ? void 0 : _Object$keys.length) > 0) {
      contractor = clients;
    }
    res.push(contractor);
    // localStorage.setItem("contractor", JSON.stringify(contractor));
    return res;
  } else if (selectedConvention == "Contrat de cautionnement") {
    var cautions_kyc = [];
    var cautionsPreApp = [];
    var cautionsT4 = [];
    cautions_kyc = getKycCaution(dossier_credit === null || dossier_credit === void 0 ? void 0 : dossier_credit.kwc_checklist);
    cautionsPreApp = getPrerAppCaution(dossier_credit === null || dossier_credit === void 0 ? void 0 : dossier_credit.n_1_checklist);
    // console.log({cred_pub_tb_4})
    if (![undefined, null, ''].includes(cred_pub_tb_4)) {
      cautionsT4 = getT4Caution(dossier_credit[cred_pub_tb_4]);
    }
    // console.log({cautions_kyc, cautionsPreApp, cautionsT4})
    // Merge les cautions distinctement
    res = mergeListsDistinctly(cautions_kyc, cautionsPreApp, cautionsT4, 'nom_prenoms');
    // console.log({res});
  }
  return res;
}
function getDefValBill(dossier_credit, key, tb_arrays) {
  var cred0 = tb_arrays[0];
  var client = getClient(dossier_credit);
  // console.log({client})
  if (client) {
    if (key == "date_naissance_client") {
      var _client$date_naissanc;
      return (_client$date_naissanc = client === null || client === void 0 ? void 0 : client.date_naissance) !== null && _client$date_naissanc !== void 0 ? _client$date_naissanc : '';
    }
    if (key == "lieu_naissance_client") {
      var _client$lieu_naissanc;
      return (_client$lieu_naissanc = client === null || client === void 0 ? void 0 : client.lieu_naissance) !== null && _client$lieu_naissanc !== void 0 ? _client$lieu_naissanc : '';
    }
    if (["nom_client", "nomcli"].includes(key)) {
      if (![undefined, null, ''].includes(client === null || client === void 0 ? void 0 : client['nom_prenom'])) {
        return client === null || client === void 0 ? void 0 : client['nom_prenom'];
      } else if (![undefined, null, ''].includes(client === null || client === void 0 ? void 0 : client.nom_prenoms)) {
        return client === null || client === void 0 ? void 0 : client.nom_prenoms;
      } else if (![undefined, null, ''].includes(client === null || client === void 0 ? void 0 : client.denomination_client)) {
        return client === null || client === void 0 ? void 0 : client.denomination_client;
      } else {
        var _dossier_credit$cred;
        return dossier_credit === null || dossier_credit === void 0 || (_dossier_credit$cred = dossier_credit[cred0]) === null || _dossier_credit$cred === void 0 ? void 0 : _dossier_credit$cred.denomination_client;
      }
      // return client?.['nom_prenom'] ??  ?? client?.denomination_client ?? '';
    }
    if (key == "profession_client") {
      var _client$fonction;
      return (_client$fonction = client === null || client === void 0 ? void 0 : client.fonction) !== null && _client$fonction !== void 0 ? _client$fonction : '';
    }
    if (key == "type_piece_identite") {
      var _client$nature_piece, _client$nature_piece2;
      return ["Carte nationale d'identité", "CNI", "cni"].includes(client === null || client === void 0 || (_client$nature_piece = client.nature_piece) === null || _client$nature_piece === void 0 ? void 0 : _client$nature_piece.trim()) ? "de la carte d'identité N° " : ["Carte consulaire"].includes(client === null || client === void 0 ? void 0 : client.nature_piece) ? "de la carte consulaire N°" : ["passeport", "passport"].includes(client === null || client === void 0 || (_client$nature_piece2 = client.nature_piece) === null || _client$nature_piece2 === void 0 ? void 0 : _client$nature_piece2.toLowerCase()) ? "du passeport N°" : "";
    }
    if (key == "num_piece_identite") {
      var _client$numero_piece;
      return (_client$numero_piece = client === null || client === void 0 ? void 0 : client.numero_piece) !== null && _client$numero_piece !== void 0 ? _client$numero_piece : '';
    }
    if (key == "titre_client") {
      var _ref2;
      return (_ref2 = ["Masculin", "M", "Masc"]) !== null && _ref2 !== void 0 && _ref2.includes(client === null || client === void 0 ? void 0 : client.sexe) ? "Monsieur" : ["Feminin", "F", "Féminin"].includes(client === null || client === void 0 ? void 0 : client.sexe) ? "Madame" : "";
    }
    if (key == "num_compte") {
      var _dossier_credit$cred2, _dossier_credit$cred3;
      return (_dossier_credit$cred2 = dossier_credit === null || dossier_credit === void 0 || (_dossier_credit$cred3 = dossier_credit[cred0]) === null || _dossier_credit$cred3 === void 0 ? void 0 : _dossier_credit$cred3.numero_compte_courant) !== null && _dossier_credit$cred2 !== void 0 ? _dossier_credit$cred2 : '';
    }
  }
  return '';
}
function getKycCaution(kyc_checklist) {
  var res = [];
  if (![undefined, null, ''].includes(kyc_checklist)) {
    var checker_one = kyc_checklist === null || kyc_checklist === void 0 ? void 0 : kyc_checklist.checker_one;
    if (![undefined, null, ''].includes(checker_one)) {
      var entries = checker_one === null || checker_one === void 0 ? void 0 : checker_one.entries;
      if (![undefined, null, ''].includes(entries)) {
        var cautions = entries.cautions;
        if (![undefined, null, ''].includes(cautions)) {
          var caution_added = cautions.caution_added;
          if (![undefined, null, ''].includes(caution_added)) {
            res = caution_added.map(function (el) {
              var _el$nom_prenoms, _el$date_naissance, _el$lieu_naissance, _el$numero_piece_iden;
              return {
                nom_prenoms: (_el$nom_prenoms = el === null || el === void 0 ? void 0 : el.nom_prenoms) !== null && _el$nom_prenoms !== void 0 ? _el$nom_prenoms : '',
                date_naissance: (_el$date_naissance = el === null || el === void 0 ? void 0 : el.date_naissance) !== null && _el$date_naissance !== void 0 ? _el$date_naissance : '',
                lieu_naissance: (_el$lieu_naissance = el === null || el === void 0 ? void 0 : el.lieu_naissance) !== null && _el$lieu_naissance !== void 0 ? _el$lieu_naissance : '',
                numero_piece: (_el$numero_piece_iden = el === null || el === void 0 ? void 0 : el.numero_piece_identite) !== null && _el$numero_piece_iden !== void 0 ? _el$numero_piece_iden : '',
                nature_piece: el === null || el === void 0 ? void 0 : el.nature_piece
              };
            });
          }
        }
      }
    }
  }
  return res;
}
function getPrerAppCaution(n_1_checklist) {
  var res = [];
  if (![undefined, null, ''].includes(n_1_checklist)) {
    var checker_one = n_1_checklist === null || n_1_checklist === void 0 ? void 0 : n_1_checklist.checker_one;
    if (![undefined, null, ''].includes(checker_one)) {
      var entries = checker_one === null || checker_one === void 0 ? void 0 : checker_one.entries;
      if (![undefined, null, ''].includes(entries)) {
        var Verification_caution_solidaire = entries === null || entries === void 0 ? void 0 : entries.Verification_caution_solidaire;
        if (![undefined, null, ''].includes(Verification_caution_solidaire)) {
          var cautions = Verification_caution_solidaire.caution_added;
          if (![undefined, null, ''].includes(cautions)) {
            res = cautions.map(function (el) {
              var _el$nom_prenoms2, _el$date_naissance2, _el$lieu_naissance2, _el$numero_piece_iden2;
              return {
                nom_prenoms: (_el$nom_prenoms2 = el === null || el === void 0 ? void 0 : el.nom_prenoms) !== null && _el$nom_prenoms2 !== void 0 ? _el$nom_prenoms2 : '',
                date_naissance: (_el$date_naissance2 = el === null || el === void 0 ? void 0 : el.date_naissance) !== null && _el$date_naissance2 !== void 0 ? _el$date_naissance2 : '',
                lieu_naissance: (_el$lieu_naissance2 = el === null || el === void 0 ? void 0 : el.lieu_naissance) !== null && _el$lieu_naissance2 !== void 0 ? _el$lieu_naissance2 : '',
                numero_piece: (_el$numero_piece_iden2 = el === null || el === void 0 ? void 0 : el.numero_piece_identite) !== null && _el$numero_piece_iden2 !== void 0 ? _el$numero_piece_iden2 : '',
                nature_piece: el === null || el === void 0 ? void 0 : el.nature_piece
              };
            });
          }
        }
      }
    }
  }
  return res;
}
function getClient(dossier_credit) {
  var n_1_checklist = dossier_credit === null || dossier_credit === void 0 ? void 0 : dossier_credit.n_1_checklist;
  var res = {};
  if (![undefined, null, ''].includes(n_1_checklist)) {
    var checker_one = n_1_checklist === null || n_1_checklist === void 0 ? void 0 : n_1_checklist.checker_one;
    if (![undefined, null, ''].includes(checker_one)) {
      var entries = checker_one === null || checker_one === void 0 ? void 0 : checker_one.entries;
      if (![undefined, null, ''].includes(entries)) {
        var verification_cni = entries === null || entries === void 0 ? void 0 : entries.verification_cni;
        var responsable_entreprise = entries === null || entries === void 0 ? void 0 : entries.responsable_entreprise;
        if (![undefined, null, ''].includes(verification_cni)) {
          res = _objectSpread({}, verification_cni);
          if (!res['nom_prenom']) {
            var _res;
            res['nom_prenoms'] = (_res = res) === null || _res === void 0 ? void 0 : _res['nom_prenom'];
          }
        } else {
          var dirigeant = responsable_entreprise.find(function (e) {
            return e.fonction == "Directeur Géneral";
          });
          // console.log({ dirigeant })
          res = ![undefined, null, ''].includes(dirigeant) ? _objectSpread({}, dirigeant) : {};
          if (!res['nom_prenom']) {
            var _res2;
            res['nom_prenoms'] = (_res2 = res) === null || _res2 === void 0 ? void 0 : _res2['nom_prenom'];
          }
        }
      }
    }
  }
  return res;
}
function getT4Caution(tb4) {
  var res = [];
  if (![undefined, null, ''].includes(tb4)) {
    var caution_solidaire = tb4 === null || tb4 === void 0 ? void 0 : tb4.cautionnement_solidaires;
    res = caution_solidaire.map(function (el) {
      var _el$nom_prenoms3, _el$date_naissance3, _el$lieu_naissance3, _el$numero_piece_iden3, _el$nature_piece;
      return {
        nom_prenoms: (_el$nom_prenoms3 = el === null || el === void 0 ? void 0 : el.nom_prenoms) !== null && _el$nom_prenoms3 !== void 0 ? _el$nom_prenoms3 : '',
        date_naissance: (_el$date_naissance3 = el === null || el === void 0 ? void 0 : el.date_naissance) !== null && _el$date_naissance3 !== void 0 ? _el$date_naissance3 : '',
        lieu_naissance: (_el$lieu_naissance3 = el === null || el === void 0 ? void 0 : el.lieu_naissance) !== null && _el$lieu_naissance3 !== void 0 ? _el$lieu_naissance3 : '',
        numero_piece: (_el$numero_piece_iden3 = el === null || el === void 0 ? void 0 : el.numero_piece_identite) !== null && _el$numero_piece_iden3 !== void 0 ? _el$numero_piece_iden3 : '',
        nature_piece: (_el$nature_piece = el === null || el === void 0 ? void 0 : el.nature_piece) !== null && _el$nature_piece !== void 0 ? _el$nature_piece : ''
      };
    });
  }
  return res.filter(function (el) {
    return !isEmpty(el);
  }) || res;
}
function isEmpty(obj) {
  if (!obj || _typeof(obj) !== 'object') return true;
  return Object.values(obj).every(function (value) {
    return value === undefined || value === null || value === '';
  });
}
function populateDefaultKeys(key, _ref3) {
  var contractor = _ref3.contractor,
    entityInfos = _ref3.entityInfos;
  if (["nom_caution", "emprunteur_name"].includes(key)) {
    var _ref4;
    return (_ref4 = (contractor === null || contractor === void 0 ? void 0 : contractor.nom_prenoms) || (contractor === null || contractor === void 0 ? void 0 : contractor.nom_prenom)) !== null && _ref4 !== void 0 ? _ref4 : '';
  } else if (["date_naissance_caution", "emprunter_birth_date", "date_naissance_client"].includes(key)) {
    var _contractor$date_nais;
    return (_contractor$date_nais = contractor === null || contractor === void 0 ? void 0 : contractor.date_naissance) !== null && _contractor$date_nais !== void 0 ? _contractor$date_nais : '';
  } else if (key == "lieu_naissance_caution") {
    var _contractor$lieu_nais;
    return (_contractor$lieu_nais = contractor === null || contractor === void 0 ? void 0 : contractor.lieu_naissance) !== null && _contractor$lieu_nais !== void 0 ? _contractor$lieu_nais : '';
  } else if (key == "type_piece_caution") {
    var _contractor$nature_pi;
    return ["Carte nationale d'identité", "CNI", "cni"].includes(contractor === null || contractor === void 0 ? void 0 : contractor.nature_piece) ? "de la carte d'identité N° " : ["de la carte consulaire N°"].includes(contractor === null || contractor === void 0 ? void 0 : contractor.nature_piece) ? "du passeport N°" : ["passeport", "passport"].includes(contractor === null || contractor === void 0 || (_contractor$nature_pi = contractor.nature_piece) === null || _contractor$nature_pi === void 0 ? void 0 : _contractor$nature_pi.toLowerCase()) ? "du passeport N°" : "";
  } else if (["cni", "numero_piece_caution"].includes(key === null || key === void 0 ? void 0 : key.toLowerCase())) {
    var _contractor$numero_pi;
    return (_contractor$numero_pi = contractor === null || contractor === void 0 ? void 0 : contractor.numero_piece) !== null && _contractor$numero_pi !== void 0 ? _contractor$numero_pi : "";
  } else if (key == "activite") {
    var _contractor$fonction;
    return (_contractor$fonction = contractor === null || contractor === void 0 ? void 0 : contractor.fonction) !== null && _contractor$fonction !== void 0 ? _contractor$fonction : '';
  } else if (["telephone_emprunteur"].includes(key)) {
    var _contractor$numero_te;
    return (_contractor$numero_te = contractor === null || contractor === void 0 ? void 0 : contractor.numero_tel) !== null && _contractor$numero_te !== void 0 ? _contractor$numero_te : "";
  } else if (["capital_social", "filiale_capital"].includes(key)) {
    var _entityInfos$capital_;
    return (_entityInfos$capital_ = entityInfos === null || entityInfos === void 0 ? void 0 : entityInfos.capital_social) !== null && _entityInfos$capital_ !== void 0 ? _entityInfos$capital_ : '';
  } else if (["code_postal", "code"].includes(key)) {
    var _entityInfos$code_pos;
    return (_entityInfos$code_pos = entityInfos === null || entityInfos === void 0 ? void 0 : entityInfos.code_postal) !== null && _entityInfos$code_pos !== void 0 ? _entityInfos$code_pos : '';
  } else if (["siege_social", "siege"].includes(key)) {
    var _entityInfos$siege_so;
    return (_entityInfos$siege_so = entityInfos === null || entityInfos === void 0 ? void 0 : entityInfos.siege_social) !== null && _entityInfos$siege_so !== void 0 ? _entityInfos$siege_so : '';
  } else if (["telephone", "filiale_telephone"].includes(key)) {
    var _entityInfos$telephon;
    return (_entityInfos$telephon = entityInfos === null || entityInfos === void 0 ? void 0 : entityInfos.telephone) !== null && _entityInfos$telephon !== void 0 ? _entityInfos$telephon : '';
  } else if (["numero_rccm", "immatriculation"].includes(key)) {
    var _entityInfos$rccm;
    return (_entityInfos$rccm = entityInfos === null || entityInfos === void 0 ? void 0 : entityInfos.rccm) !== null && _entityInfos$rccm !== void 0 ? _entityInfos$rccm : '';
  } else {
    return '';
  }
}
function mergeListsDistinctly() {
  var list1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var list2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var list3 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var key = arguments.length > 3 ? arguments[3] : undefined;
  var mergedMap = new Map();

  // Fonction pour compter le nombre de clés non vides dans un objet
  function countFilledKeys(obj) {
    return Object.values(obj).filter(function (value) {
      return value !== null && value !== undefined && value !== "";
    }).length;
  }

  // Fonction pour ajouter ou fusionner les objets dans le Map
  function addToMap(list) {
    list.forEach(function (item) {
      if (item[key] !== undefined) {
        var existingItem = mergedMap.get(item[key]);
        if (!existingItem) {
          // Si aucun objet avec cette clé, on l'ajoute
          mergedMap.set(item[key], item);
        } else {
          // Comparer le nombre de clés remplies
          if (countFilledKeys(item) > countFilledKeys(existingItem)) {
            mergedMap.set(item[key], item);
          }
        }
      }
    });
  }

  // Ajouter les objets des trois listes
  addToMap(list1);
  addToMap(list2);
  addToMap(list3);

  // Retourner la liste fusionnée
  return Array.from(mergedMap.values());
}
function caracteristiqueDuPret(dossier_credit, cred0, cred1) {
  var _dossier_credit$cred4;
  var caract_inter_pret = dossier_credit === null || dossier_credit === void 0 ? void 0 : dossier_credit.caract_inter_pret;
  var latestAmount = 0;
  var latetstDuree = 0;
  var periodicite = "";
  var risque = dossier_credit === null || dossier_credit === void 0 || (_dossier_credit$cred4 = dossier_credit[cred1]) === null || _dossier_credit$cred4 === void 0 || (_dossier_credit$cred4 = _dossier_credit$cred4.frais) === null || _dossier_credit$cred4 === void 0 || (_dossier_credit$cred4 = _dossier_credit$cred4[2]) === null || _dossier_credit$cred4 === void 0 ? void 0 : _dossier_credit$cred4.montant_frais;
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
}
var countryWords = {
  "CFN BF": {
    "pays": "BURKINA FASO",
    "nationalite": "Burkinabé",
    "capitale": "de Ouagadougou"
  },
  "CFN CIV": {
    "pays": "CÔTE D'IVOIRE",
    "nationalite": "Ivoirienne",
    "capitale": "d'Abidjan"
  },
  "CFN CG": {
    "pays": "CONGO",
    "nationalite": "Congolaise",
    "capitale": "de Brazaville"
  },
  "CFN GB": {
    "pays": "GABON",
    "nationalite": "Gabonaise",
    "capitale": "de Libreville"
  },
  "CFN GN": {
    "pays": "GUINEE",
    "nationalite": "Guinéenne",
    "capitale": "de Conakry"
  },
  "CFN ML": {
    "pays": "MALI",
    "nationalite": "Malienne",
    "capitale": "de Bamako"
  },
  "CFN SN": {
    "pays": "SENEGAL",
    "nationalite": "Sénégalaise",
    "capitale": "de Dakar"
  },
  "CFN TG": {
    "pays": "TOGO",
    "nationalite": "Togolaise",
    "capitale": "de Lomé"
  },
  "FINL": {
    "pays": "CÔTE D'IVOIRE",
    "nationalite": "Ivoirienne",
    "capitale": "d'Abidjan"
  }
};

// les défaults
//montant_approuve
//agenceBusinessUnit
// applied_templ_name - type gabarit
// type_credit
// type_demande

// -------------INFO CLIENT
//caf_recorded --+ client --+
// nomcli
// matcli
// phonecli
// monteur doss

// INFO PRET (cred_pub_tb_19000)
// type_de_concours / montant / duree_credit (en mois) /
// periodicite_remboursement (mensuelle ... ) / taux_interet / frais_dossier
// primes_risques /

// cred_pub_tb_3001
// premiere_echeance / derniere_echeance

/***/ }),

/***/ "./resources/js/components/tables/cofina/convention/TCONV1.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/tables/cofina/convention/TCONV1.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TCONV1_vue_vue_type_template_id_40aa6c49_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TCONV1.vue?vue&type=template&id=40aa6c49&scoped=true */ "./resources/js/components/tables/cofina/convention/TCONV1.vue?vue&type=template&id=40aa6c49&scoped=true");
/* harmony import */ var _TCONV1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TCONV1.vue?vue&type=script&lang=js */ "./resources/js/components/tables/cofina/convention/TCONV1.vue?vue&type=script&lang=js");
/* harmony import */ var _TCONV1_vue_vue_type_style_index_0_id_40aa6c49_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TCONV1.vue?vue&type=style&index=0&id=40aa6c49&lang=css&scoped=true */ "./resources/js/components/tables/cofina/convention/TCONV1.vue?vue&type=style&index=0&id=40aa6c49&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TCONV1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _TCONV1_vue_vue_type_template_id_40aa6c49_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _TCONV1_vue_vue_type_template_id_40aa6c49_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "40aa6c49",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/tables/cofina/convention/TCONV1.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/tables/cofina/convention/TCONV1.vue?vue&type=script&lang=js":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/tables/cofina/convention/TCONV1.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TCONV1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TCONV1.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/cofina/convention/TCONV1.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TCONV1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/tables/cofina/convention/TCONV1.vue?vue&type=style&index=0&id=40aa6c49&lang=css&scoped=true":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/components/tables/cofina/convention/TCONV1.vue?vue&type=style&index=0&id=40aa6c49&lang=css&scoped=true ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TCONV1_vue_vue_type_style_index_0_id_40aa6c49_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TCONV1.vue?vue&type=style&index=0&id=40aa6c49&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/cofina/convention/TCONV1.vue?vue&type=style&index=0&id=40aa6c49&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/tables/cofina/convention/TCONV1.vue?vue&type=template&id=40aa6c49&scoped=true":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/tables/cofina/convention/TCONV1.vue?vue&type=template&id=40aa6c49&scoped=true ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TCONV1_vue_vue_type_template_id_40aa6c49_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TCONV1_vue_vue_type_template_id_40aa6c49_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TCONV1_vue_vue_type_template_id_40aa6c49_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TCONV1.vue?vue&type=template&id=40aa6c49&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/cofina/convention/TCONV1.vue?vue&type=template&id=40aa6c49&scoped=true");


/***/ })

}]);