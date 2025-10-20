"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_workspace_nsia_WorkspaceOnRSEAnlCenter_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES1.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES1.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/ContextMenu */ "./resources/js/components/shared/ContextMenu.vue");
/* harmony import */ var _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/ContextMenuItem */ "./resources/js/components/shared/ContextMenuItem.vue");
/* harmony import */ var _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vueform/multiselect/dist/multiselect.vue2 */ "./node_modules/@vueform/multiselect/dist/multiselect.vue2.js");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../helpers/helper */ "./resources/js/helpers/helper.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../helpers/indexedDB */ "./resources/js/helpers/indexedDB.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_helpers_indexedDB__WEBPACK_IMPORTED_MODULE_7__);
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
  name: "pieces_jointes",
  display: "pieces_jointes",
  components: {
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.TrashIcon,
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.ChevronDownIcon,
    ContextMenu: _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__["default"],
    ContextMenuItem: _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__["default"],
    Multiselect: _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_2__["default"],
    AirplayIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.AirplayIcon
  },
  props: {
    meta_data: Object,
    tb_name: String,
    tb_display_name: String
  },
  created: function created() {
    var _this = this;
    // EventBus.$on('event-T1',(data)=> {

    //     console.log("Numero prêt à racheter ==> ",data.numero_pret_a_rachete)
    //     // this.retract4()
    // })
    // ? Setup cache listeners and stuff
    // this.setupCache();
    //
    // EventBus.$on('changeIt', (data) => {
    //     alert(data)
    //     this.num_pret_a_rach = data;
    // })

    _services_credit_service__WEBPACK_IMPORTED_MODULE_5__["default"].loadpaysindicatif().then(function (res) {
      _this.countries = res.data;
    })["catch"](function (err) {
      console.log(err);
    });
  },
  mounted: function mounted() {
    var _this2 = this;
    // Initiate cache
    EventBus.$on('send-numero-rachat', function (data) {
      var index = _this2.cond_particulieres.findIndex(function (el) {
        return el.cond_name === "numero_pret_a_rachete";
      });
      if (index != -1) {
        var obj = {
          cond_name: "numero_pret_a_rachete",
          cond_description: "Soldé le prêt N° " + data + " à la mise en place du prêt"
        };
        if (data.length > 0) _this2.cond_particulieres.splice(index, 1, obj);else _this2.removeByKey(index, 'cond_particulieres');
      } else {
        _this2.cond_particulieres.push({
          cond_name: "numero_pret_a_rachete",
          cond_description: "Soldé le prêt N° " + data + " à la mise en place du prêt"
        });
        return;
      }
    });
    this.tableClosedOrOpened();
    this.loadRetrieved();
    this.loadTbAttrs();
    // console.log('pieces_jointes', this.pieces_jointes)
    // charge les attributs + sous attributs des tables
    EventBus.$on("montant-credit-updated", function (data) {
      var _data$garantie, _data$crsd, _data$montant_credit, _this2$montant_dep_ga;
      // console.log(data.numero_pret_a_rachete)
      _this2.montant_dep_gar_crsd = Number((_data$garantie = data.garantie) === null || _data$garantie === void 0 ? void 0 : _data$garantie.toString().replace(/\s/g, "")) + Number((_data$crsd = data.crsd) === null || _data$crsd === void 0 ? void 0 : _data$crsd.toString().replace(/\s/g, ""));
      var a = Number((_data$montant_credit = data.montant_credit) === null || _data$montant_credit === void 0 ? void 0 : _data$montant_credit.toString().replace(/\s/g, ""));
      a = !a ? 1 : a;
      var value = Number((_this2$montant_dep_ga = _this2.montant_dep_gar_crsd) === null || _this2$montant_dep_ga === void 0 ? void 0 : _this2$montant_dep_ga.toString().replace(/\s+/g, "")) * 100 / a;
      _this2.taux_dep_gar_crsd = isFinite(value) ? value.toFixed(2) : 0;
      var datapaste = {
        duree_credit: data.duree_credit,
        mode_paiement: data.mode_paiement
      };
      _this2.recomputeSouscriptionValue(datapaste);

      // this.defaultSuretes = [
      //     {
      //         label: `Souscription de ${this.souscriptionValue} billets à ordre signés par l'emprunteur`,
      //         value: {
      //             label: `Souscription de ${this.souscriptionValue} billets à ordre signés par l'emprunteur`,
      //             nom: "souscription",
      //             billets: this.souscriptionValue,
      //         },
      //         id: "souscription",
      //     },
      //     {
      //         label: `Dépôt de garantie et compte de réserve du service de la dette (DG + CRSD) à hauteur de ${this.montant_dep_gar_crsd} FCFA soit ${this.taux_dep_gar_crsd}% du montant proposé`,
      //         value: {
      //             label: `Dépôt de garantie et compte de réserve du service de la dette (DG + CRSD) à hauteur de ${this.montant_dep_gar_crsd} FCFA soit ${this.taux_dep_gar_crsd}% du montant proposé`,
      //             nom: "depot",
      //             taux: this.taux_dep_gar_crsd,
      //             montant: this.montant_dep_gar_crsd,
      //         },
      //         id: "depot",
      //     },
      // ];

      _this2.formDataToBeWatched.suretes_diverses.forEach(function (el, index) {
        _this2.defaultSuretes.forEach(function (elem) {
          if (elem.value.nom === el.nom) {
            _this2.formDataToBeWatched.suretes_diverses[index] = elem.value;
            // console.log({ el: el.label, elem: elem.label })
          }
        });
      });
      // this.loadRetrieved()
    });
    EventBus.$on("period-change", function (period) {
      _this2.meta_data.dossier_credit.cred_pub_tb_1.mode_paiement = period;
      var data = {
        mode_paiement: period,
        duree_credit: _this2.duree_credit0
      };
      _this2.recomputeSouscriptionValue(data);
    });
    EventBus.$on("mode-paiement-updated", function (data) {
      _this2.recomputeSouscriptionValue(data);
    });
  },
  computed: {
    totalEngagementGlobal: function totalEngagementGlobal() {
      var trying = this.engagement_globales.map(function (el) {
        el.montant_engagement_globale = String(el.montant_engagement_globale).replace(/\s+/g, "");
        if (!el.montant_engagement_globale) return 0;
        return Number(el.montant_engagement_globale);
      }).reduce(function (sum, curr) {
        return sum + curr;
      }, 0);
      return trying.toLocaleString("fr-FR");
    },
    souscriptionValue: function souscriptionValue() {
      var _this$meta_data$dossi, _this$meta_data$dossi2;
      var res = 0;
      var dure = Number((_this$meta_data$dossi = this.meta_data.dossier_credit) === null || _this$meta_data$dossi === void 0 || (_this$meta_data$dossi = _this$meta_data$dossi.cred_pub_tb_00) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi.duree_credit) || 0;
      var mode = (_this$meta_data$dossi2 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi2 === void 0 || (_this$meta_data$dossi2 = _this$meta_data$dossi2.cred_pub_tb_1) === null || _this$meta_data$dossi2 === void 0 || (_this$meta_data$dossi2 = _this$meta_data$dossi2.mode_paiement) === null || _this$meta_data$dossi2 === void 0 ? void 0 : _this$meta_data$dossi2.toLowerCase();
      var diviseur = 1;
      if (mode === "mensuelle") {
        diviseur = 1;
        res = dure / diviseur;
      }
      if (mode === "bi-mensuel") {
        diviseur = 2;
        res = dure * diviseur;
      }
      if (mode === "trimestriel") {
        diviseur = 3;
        res = dure / diviseur;
      }
      if (mode === "semestriel") {
        diviseur = 6;
        res = dure / diviseur;
      }
      if (mode === "in fine") {
        diviseur = dure || 1;
        res = dure / diviseur;
      }
      return res;
    },
    engagement_value: function engagement_value() {
      return {
        label: "Engagement de domiciliation globale de ".concat(this.totalEngagementGlobal, " "),
        nom: "engagement",
        total_montant_engagement_globale: this.totalEngagementGlobal
      };
    },
    nantissement_dat: function nantissement_dat() {
      return {
        label: "Nantissement DAT de ".concat(this.formDataToBeWatched.montant_dat, " qui a pour r\xE9f\xE9rence ").concat(this.formDataToBeWatched.reference_dat),
        nom: "nantissement",
        montant_dat: this.formDataToBeWatched.montant_dat,
        reference_dat: this.formDataToBeWatched.reference_dat
      };
    }
  },
  data: function data() {
    var vm = this;
    return {
      num_pret_a_rach: "",
      defaultSuretes: [],
      newSurete: "",
      suretes_diverses: [],
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
      duree_credit0: null,
      mode_paiement0: null,
      // credits: [],
      // clients: [],
      // encours: null,
      // placeholder: "Chercher clients",
      // matcli: "matcli",
      // nomcli: "nomcli",
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
      formDataToBeWatched: {
        notes: [],
        pieces_jointes: "",
        synthese_principales: "",
        principaux_risques: "",
        convention_credits: "",
        commentaires_pj: "",
        commentaires_synt: "",
        commentaires_prin: "",
        commentaires_convent: "",
        chargee_rse: ""
      },
      countries: [],
      pieces_jointes: [{
        label: "Fiche de screening E&S client complétée",
        value: false,
        categorie_eleve: "Requis",
        categorie_moyenne: "Requis"
      }, {
        label: "Résumé du rapport de Due Diligence",
        value: false,
        categorie_eleve: "Requis",
        categorie_moyenne: "Non requis"
      }, {
        label: "Plan d'Action E&S (PAES)",
        value: false,
        categorie_eleve: "Requis",
        categorie_moyenne: "Requis si nécessaire"
      }, {
        label: "Questionnaire client risques E&S moyens",
        value: false,
        categorie_eleve: "Non requis",
        categorie_moyenne: "Requis"
      }, {
        label: "Revue questionnaire client risques E&S moyens",
        value: false,
        categorie_eleve: "Non requis",
        categorie_moyenne: "Requis"
      }],
      synthese_principales: [{
        label: "Visite de site",
        value: false
      }, {
        label: "Appui par des spécialistes E&S (consultants. Responsable RSE NSIA BANQUE Cl)",
        value: false
      }, {
        label: "Revue de documentation E&S",
        value: false
      }, {
        label: "Entretiens avec le client (Questionnaire ES. compte rendu de visite)",
        value: false
      }],
      convention_credits: [{
        label: "Clauses E&S standards",
        value: false
      }, {
        label: "Modification des clauses E&S standards (si oui joindre la validation par le juridique)",
        value: false
      }],
      principaux_risques: [{
        label: "Main d'œuvre et conditions de travail",
        niveau1: "Suffisant par le client",
        value1: false,
        niveau2: "Insuffisant, donc PAES",
        value2: false
      }, {
        label: "Risque de Santé et sécurité des travailleurs",
        niveau1: "Suffisant par le client",
        value1: false,
        niveau2: "Insuffisant, donc PAES",
        value2: false
      }, {
        label: "Mesures générales d'hygiène",
        niveau1: "Suffisant par le client",
        value1: false,
        niveau2: "Insuffisant, donc PAES",
        value2: false
      }, {
        label: "Production et gestion des déchets et eaux usées",
        niveau1: "Suffisant par le client",
        value1: false,
        niveau2: "Insuffisant, donc PAES",
        value2: false
      }, {
        label: "Achats responsables",
        niveau1: "Suffisant par le client",
        value1: false,
        niveau2: "Insuffisant, donc PAES",
        value2: false
      }, {
        label: "Consommation des ressources en eau",
        niveau1: "Suffisant par le client",
        value1: false,
        niveau2: "Insuffisant, donc PAES",
        value2: false
      }]
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
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (_DEBUG) console.log(">> updateFormDataForDeletion");
              _this3.formDataToBeWatched.is_deleted = true;
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
      var _this4 = this;
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
              if (!_this4.formDataToBeWatched.is_deleted) {
                _context2.next = 5;
                break;
              }
              return _context2.abrupt("return");
            case 5:
              // Upload current (and arguably latest) formDataToBeWatched data

              _this4.uploadDataToServerAndUpdateLastSave(_this4.formDataToBeWatched, _this4.formDataToBeWatched);
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
      var _this5 = this;
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
                  _this5.uploadDataToServerAndUpdateLastSave(newVal, oldVal);
                }
              }
              // First upload
              if (!_lastSaveTime) {
                _this5.uploadDataToServerAndUpdateLastSave(newVal, oldVal);
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
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              if (_DEBUG) console.log(">> uploadDataToServerAndUpdateLastSave");
              _context4.prev = 1;
              if (_DEBUG) console.log(">> this.autosaving");
              _context4.next = 5;
              return _this6.autosaving(newVal, oldVal);
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
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              if (_DEBUG) console.log(">> uploadDataToServerBeforePageCloses");
              _context5.prev = 1;
              _context5.next = 4;
              return _this7.autosaving(newVal, oldVal);
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
      var _this8 = this;
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
              return _this8.autosaving(_this8.formDataToBeWatched, _this8.formDataToBeWatched);
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
    refreshSurete: function refreshSurete(e) {
      var index = this.suretes_diverses.findIndex(function (el) {
        return el.nom == "engagement";
      });
      this.formDataToBeWatched.total_montant_engagement_globale = this.totalEngagementGlobal;
      this.$set(this.suretes_diverses, index, this.engagement_value);
    },
    refreshSurete1: function refreshSurete1(e) {
      var index = this.suretes_diverses.findIndex(function (el) {
        return el.nom == "nantissement";
      });
      this.$set(this.suretes_diverses, index, this.nantissement_dat);
    },
    addMore1: function addMore1() {
      this.cautionnement_solidaires.push({
        nom_prenoms: "",
        profession: "",
        indicatif_caution_solidaire: "",
        numero_tel_caution_solidaire: "",
        localisation_caution_solidaire: "",
        revenu_mensuel: 0,
        valeur_patrimoine: 0
      });
      this.handleInput();
    },
    remove: function remove(index) {
      this.pieces_jointes.splice(index, 1);
      // this.formDataToBeWatched.total_part =
      //     this.totalPartPourcentageActionnariats;
      this.handleInput();
    },
    isChecked: function isChecked(listName) {
      this[listName].push({
        label: "",
        value: false
        // max: this.ActionnariatMaxNumber,
      });
    },
    remove1: function remove1(index) {
      this.cautionnement_solidaires.splice(index, 1);
    },
    removeEngagementGlobale: function removeEngagementGlobale(index) {
      this.engagement_globales.splice(index, 1);
      this.refreshSurete();
    },
    addAutreSurete: function addAutreSurete() {
      if (this.newSurete) {
        this.formDataToBeWatched.autres_suretes_diverses.push({
          label: this.newSurete,
          value: this.newSurete
        });
      }
      this.newSurete = "";
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
      var _this$meta_data$dossi3;
      var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];
      this.defaultRetract(false, (_this$meta_data$dossi3 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi3 === void 0 ? void 0 : _this$meta_data$dossi3.applied_templ_id);
      if (this.meta_data["dossier_credit"][createdKey] == undefined) {
        var value;
        if (this.meta_data["dossier_credit"]["cred_pub_tb_1"] != undefined) {
          var _this$meta_data$dossi4;
          value = Number((_this$meta_data$dossi4 = this.meta_data["dossier_credit"]["cred_pub_tb_1"].echeance) === null || _this$meta_data$dossi4 === void 0 || (_this$meta_data$dossi4 = _this$meta_data$dossi4.echeance) === null || _this$meta_data$dossi4 === void 0 ? void 0 : _this$meta_data$dossi4.toString().replace(/\s/g, ""));
          value = isNaN(value) ? 0 : value;
        } else {
          value = 0;
        }
        this.formDataToBeWatched.montant_engagement = Math.ceil(value * 1.2 / 4);
      }
      if (lentb.length > 0) {
        if (this.meta_data["dossier_credit"][createdKey] != undefined) {
          this.formDataToBeWatched = this.meta_data["dossier_credit"][createdKey];
          //console.log(this.formDataToBeWatched);
          if (this.meta_data["dossier_credit"][createdKey]["pieces_jointes"] != "") {
            this.pieces_jointes = this.meta_data["dossier_credit"][createdKey]["pieces_jointes"];
          }
          if (this.meta_data["dossier_credit"][createdKey]["synthese_principales"] != "") {
            this.synthese_principales = this.meta_data["dossier_credit"][createdKey]["synthese_principales"];
          }
          if (this.meta_data["dossier_credit"][createdKey]["principaux_risques"] != "") {
            this.principaux_risques = this.meta_data["dossier_credit"][createdKey]["principaux_risques"];
          }
          if (this.meta_data["dossier_credit"][createdKey]["convention_credits"] != "") {
            this.convention_credits = this.meta_data["dossier_credit"][createdKey]["convention_credits"];
          }

          // if (
          //       this.formDataToBeWatched != ""
          //   ) {
          //       this.pieces_jointes = this.formDataToBeWatched["pieces_jointes"]

          //   }
        }
      }

      // Close table by default
      // this.defaultRetract(
      //     false,
      //     this.meta_data["dossier_credit"]?.applied_templ_id
      // );
    },
    // if (data.duree_credit != null) {
    //     this.duree_credit0 = data.duree_credit?.toLowerCase()
    // } else {
    //     if (this.duree_credit0 == null) {
    //         this.duree_credit0 = this.meta_data.dossier_credit.cred_pub_tb_1.duree_credit?.toLowerCase()
    //         console.log('duree_credit0', this.duree_credit0)
    //     }
    //     console.log('duree_credit1', this.duree_credit0)
    // }
    convertNumber: function convertNumber(valeur) {
      return Number(String(valeur).replace(/\s+/g, ""));
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
    addMore: function addMore(listName) {
      this[listName].push({
        article: "",
        proprietaire: "",
        numero_tel: "",
        annee_achat: "",
        adresse_emplacement: "",
        date_evaluation: "",
        valeur_marchande: 0,
        valeur_considere: 0
      });
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
        id: "pp4-head"
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
            this.formDataToBeWatched.chargee_rse = this.authcheckUsr.name;
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
      // this.hypotheques.forEach((element, key) => {
      //     element.valeur_considere = this.convertNumber(element.valeur_marchande) * 20 /100
      //     console.log(element.valeur_considere)
      // })
      // this.gages.forEach((element, key) => {
      //     element.valeur_considere = this.convertNumber(element.valeur_marchande) * 20 /100
      //     console.log(element.valeur_considere)
      // })

      this.pieces_jointes.forEach(function (item) {
        // console.log("iem ==> ", item["label"])

        item["label"].toUpperCase();
      });
      this.synthese_principales.forEach(function (item) {
        // console.log("iem ==> ", item["label"])

        item["label"].toUpperCase();
      });
      this.principaux_risques.forEach(function (item) {
        // console.log("iem ==> ", item["label"])

        item["label"].toUpperCase();
      });
      this.convention_credits.forEach(function (item) {
        // console.log("iem ==> ", item["label"])

        item["label"].toUpperCase();
      });
      this.formDataToBeWatched["pieces_jointes"] = this.pieces_jointes;
      this.formDataToBeWatched["synthese_principales"] = this.synthese_principales;
      this.formDataToBeWatched["principaux_risques"] = this.principaux_risques;
      this.formDataToBeWatched["convention_credits"] = this.convention_credits;
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
    retract5: function retract5() {
      this.seen5 = !this.seen4;
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES2.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES2.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/ContextMenu */ "./resources/js/components/shared/ContextMenu.vue");
/* harmony import */ var _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/ContextMenuItem */ "./resources/js/components/shared/ContextMenuItem.vue");
/* harmony import */ var _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vueform/multiselect/dist/multiselect.vue2 */ "./node_modules/@vueform/multiselect/dist/multiselect.vue2.js");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../helpers/helper */ "./resources/js/helpers/helper.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../helpers/indexedDB */ "./resources/js/helpers/indexedDB.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_helpers_indexedDB__WEBPACK_IMPORTED_MODULE_7__);
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
  name: "synthese_principaux_etapes_due_dilligence_es",
  display: "synthese_principaux_etapes_due_dilligence_es",
  components: {
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.TrashIcon,
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.ChevronDownIcon,
    ContextMenu: _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__["default"],
    ContextMenuItem: _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__["default"],
    Multiselect: _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_2__["default"],
    AirplayIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.AirplayIcon
  },
  props: {
    meta_data: Object,
    tb_name: String,
    tb_display_name: String
  },
  created: function created() {
    var _this = this;
    // EventBus.$on('event-T1',(data)=> {

    //     console.log("Numero prêt à racheter ==> ",data.numero_pret_a_rachete)
    //     // this.retract4()
    // })
    // ? Setup cache listeners and stuff
    // this.setupCache();
    //
    // EventBus.$on('changeIt', (data) => {
    //     alert(data)
    //     this.num_pret_a_rach = data;
    // })

    _services_credit_service__WEBPACK_IMPORTED_MODULE_5__["default"].loadpaysindicatif().then(function (res) {
      _this.countries = res.data;
    })["catch"](function (err) {
      console.log(err);
    });
  },
  mounted: function mounted() {
    var _this2 = this;
    // Initiate cache
    EventBus.$on('send-numero-rachat', function (data) {
      var index = _this2.cond_particulieres.findIndex(function (el) {
        return el.cond_name === "numero_pret_a_rachete";
      });
      if (index != -1) {
        var obj = {
          cond_name: "numero_pret_a_rachete",
          cond_description: "Soldé le prêt N° " + data + " à la mise en place du prêt"
        };
        if (data.length > 0) _this2.cond_particulieres.splice(index, 1, obj);else _this2.removeByKey(index, 'cond_particulieres');
      } else {
        _this2.cond_particulieres.push({
          cond_name: "numero_pret_a_rachete",
          cond_description: "Soldé le prêt N° " + data + " à la mise en place du prêt"
        });
        return;
      }
    });
    this.tableClosedOrOpened();
    this.loadRetrieved();
    this.loadTbAttrs();
    // console.log('pieces_jointes', this.pieces_jointes)
    // charge les attributs + sous attributs des tables
    EventBus.$on("montant-credit-updated", function (data) {
      var _data$garantie, _data$crsd, _data$montant_credit, _this2$montant_dep_ga;
      // console.log(data.numero_pret_a_rachete)
      _this2.montant_dep_gar_crsd = Number((_data$garantie = data.garantie) === null || _data$garantie === void 0 ? void 0 : _data$garantie.toString().replace(/\s/g, "")) + Number((_data$crsd = data.crsd) === null || _data$crsd === void 0 ? void 0 : _data$crsd.toString().replace(/\s/g, ""));
      var a = Number((_data$montant_credit = data.montant_credit) === null || _data$montant_credit === void 0 ? void 0 : _data$montant_credit.toString().replace(/\s/g, ""));
      a = !a ? 1 : a;
      var value = Number((_this2$montant_dep_ga = _this2.montant_dep_gar_crsd) === null || _this2$montant_dep_ga === void 0 ? void 0 : _this2$montant_dep_ga.toString().replace(/\s+/g, "")) * 100 / a;
      _this2.taux_dep_gar_crsd = isFinite(value) ? value.toFixed(2) : 0;
      var datapaste = {
        duree_credit: data.duree_credit,
        mode_paiement: data.mode_paiement
      };
      _this2.recomputeSouscriptionValue(datapaste);

      // this.defaultSuretes = [
      //     {
      //         label: `Souscription de ${this.souscriptionValue} billets à ordre signés par l'emprunteur`,
      //         value: {
      //             label: `Souscription de ${this.souscriptionValue} billets à ordre signés par l'emprunteur`,
      //             nom: "souscription",
      //             billets: this.souscriptionValue,
      //         },
      //         id: "souscription",
      //     },
      //     {
      //         label: `Dépôt de garantie et compte de réserve du service de la dette (DG + CRSD) à hauteur de ${this.montant_dep_gar_crsd} FCFA soit ${this.taux_dep_gar_crsd}% du montant proposé`,
      //         value: {
      //             label: `Dépôt de garantie et compte de réserve du service de la dette (DG + CRSD) à hauteur de ${this.montant_dep_gar_crsd} FCFA soit ${this.taux_dep_gar_crsd}% du montant proposé`,
      //             nom: "depot",
      //             taux: this.taux_dep_gar_crsd,
      //             montant: this.montant_dep_gar_crsd,
      //         },
      //         id: "depot",
      //     },
      // ];

      _this2.formDataToBeWatched.suretes_diverses.forEach(function (el, index) {
        _this2.defaultSuretes.forEach(function (elem) {
          if (elem.value.nom === el.nom) {
            _this2.formDataToBeWatched.suretes_diverses[index] = elem.value;
            // console.log({ el: el.label, elem: elem.label })
          }
        });
      });
      // this.loadRetrieved()
    });
    EventBus.$on("period-change", function (period) {
      _this2.meta_data.dossier_credit.cred_pub_tb_1.mode_paiement = period;
      var data = {
        mode_paiement: period,
        duree_credit: _this2.duree_credit0
      };
      _this2.recomputeSouscriptionValue(data);
    });
    EventBus.$on("mode-paiement-updated", function (data) {
      _this2.recomputeSouscriptionValue(data);
    });
  },
  computed: {
    totalEngagementGlobal: function totalEngagementGlobal() {
      var trying = this.engagement_globales.map(function (el) {
        el.montant_engagement_globale = String(el.montant_engagement_globale).replace(/\s+/g, "");
        if (!el.montant_engagement_globale) return 0;
        return Number(el.montant_engagement_globale);
      }).reduce(function (sum, curr) {
        return sum + curr;
      }, 0);
      return trying.toLocaleString("fr-FR");
    },
    souscriptionValue: function souscriptionValue() {
      var _this$meta_data$dossi, _this$meta_data$dossi2;
      var res = 0;
      var dure = Number((_this$meta_data$dossi = this.meta_data.dossier_credit) === null || _this$meta_data$dossi === void 0 || (_this$meta_data$dossi = _this$meta_data$dossi.cred_pub_tb_00) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi.duree_credit) || 0;
      var mode = (_this$meta_data$dossi2 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi2 === void 0 || (_this$meta_data$dossi2 = _this$meta_data$dossi2.cred_pub_tb_1) === null || _this$meta_data$dossi2 === void 0 || (_this$meta_data$dossi2 = _this$meta_data$dossi2.mode_paiement) === null || _this$meta_data$dossi2 === void 0 ? void 0 : _this$meta_data$dossi2.toLowerCase();
      var diviseur = 1;
      if (mode === "mensuelle") {
        diviseur = 1;
        res = dure / diviseur;
      }
      if (mode === "bi-mensuel") {
        diviseur = 2;
        res = dure * diviseur;
      }
      if (mode === "trimestriel") {
        diviseur = 3;
        res = dure / diviseur;
      }
      if (mode === "semestriel") {
        diviseur = 6;
        res = dure / diviseur;
      }
      if (mode === "in fine") {
        diviseur = dure || 1;
        res = dure / diviseur;
      }
      return res;
    },
    engagement_value: function engagement_value() {
      return {
        label: "Engagement de domiciliation globale de ".concat(this.totalEngagementGlobal, "  FCFA"),
        nom: "engagement",
        total_montant_engagement_globale: this.totalEngagementGlobal
      };
    },
    nantissement_dat: function nantissement_dat() {
      return {
        label: "Nantissement DAT de ".concat(this.formDataToBeWatched.montant_dat, " FCFA  qui a pour r\xE9f\xE9rence ").concat(this.formDataToBeWatched.reference_dat),
        nom: "nantissement",
        montant_dat: this.formDataToBeWatched.montant_dat,
        reference_dat: this.formDataToBeWatched.reference_dat
      };
    }
  },
  data: function data() {
    var vm = this;
    return {
      num_pret_a_rach: "",
      defaultSuretes: [],
      newSurete: "",
      suretes_diverses: [],
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
      duree_credit0: null,
      mode_paiement0: null,
      // credits: [],
      // clients: [],
      // encours: null,
      // placeholder: "Chercher clients",
      // matcli: "matcli",
      // nomcli: "nomcli",
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
      formDataToBeWatched: {
        notes: [],
        pieces_jointes: "",
        synthese_principales: "",
        principaux_risques: "",
        convention_credits: "",
        commentaires_pj: "",
        commentaires_synt: "",
        commentaires_prin: "",
        commentaires_convent: ""
      },
      countries: [],
      pieces_jointes: [{
        label: "Fiche de screening E&S client complétée",
        value: false,
        categorie_eleve: "Requis",
        categorie_moyenne: "Requis"
      }, {
        label: "Résumé du rapport de Due Diligence",
        value: false,
        categorie_eleve: "Requis",
        categorie_moyenne: "Non requis"
      }, {
        label: "Plan d'Action E&S (PAES)",
        value: false,
        categorie_eleve: "Requis",
        categorie_moyenne: "Requis si nécessaire"
      }, {
        label: "Questionnaire client risques E&S moyens",
        value: false,
        categorie_eleve: "Non requis",
        categorie_moyenne: "Requis"
      }, {
        label: "Revue questionnaire client risques E&S moyens",
        value: false,
        categorie_eleve: "Non requis",
        categorie_moyenne: "Requis"
      }],
      synthese_principales: [{
        label: "Visite de site",
        value: false
      }, {
        label: "Appui par des spécialistes E&S (consultants. Responsable RSE NSIA BANQUE Cl)",
        value: false
      }, {
        label: "Revue de documentation E&S",
        value: false
      }, {
        label: "Entretiens avec le client (Questionnaire ES. compte rendu de visite)",
        value: false
      }],
      convention_credits: [{
        label: "Clauses E&S standards",
        value: false
      }, {
        label: "Modification des clauses E&S standards (si oui joindre la validation par le juridique)",
        value: false
      }],
      principaux_risques: [{
        label: "Main d'œuvre et conditions de travail",
        niveau1: "Suffisant par le client",
        value1: false,
        niveau2: "Insuffisant, donc PAES",
        value2: false
      }, {
        label: "Risque de Santé et sécurité des travailleurs",
        niveau1: "Suffisant par le client",
        value1: false,
        niveau2: "Insuffisant, donc PAES",
        value2: false
      }, {
        label: "Mesures générales d'hygiène",
        niveau1: "Suffisant par le client",
        value1: false,
        niveau2: "Insuffisant, donc PAES",
        value2: false
      }, {
        label: "Production et gestion des déchets et eaux usées",
        niveau1: "Suffisant par le client",
        value1: false,
        niveau2: "Insuffisant, donc PAES",
        value2: false
      }, {
        label: "Achats responsables",
        niveau1: "Suffisant par le client",
        value1: false,
        niveau2: "Insuffisant, donc PAES",
        value2: false
      }, {
        label: "Consommation des ressources en eau",
        niveau1: "Suffisant par le client",
        value1: false,
        niveau2: "Insuffisant, donc PAES",
        value2: false
      }]
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
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (_DEBUG) console.log(">> updateFormDataForDeletion");
              _this3.formDataToBeWatched.is_deleted = true;
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
      var _this4 = this;
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
              if (!_this4.formDataToBeWatched.is_deleted) {
                _context2.next = 5;
                break;
              }
              return _context2.abrupt("return");
            case 5:
              // Upload current (and arguably latest) formDataToBeWatched data

              _this4.uploadDataToServerAndUpdateLastSave(_this4.formDataToBeWatched, _this4.formDataToBeWatched);
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
      var _this5 = this;
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
                  _this5.uploadDataToServerAndUpdateLastSave(newVal, oldVal);
                }
              }
              // First upload
              if (!_lastSaveTime) {
                _this5.uploadDataToServerAndUpdateLastSave(newVal, oldVal);
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
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              if (_DEBUG) console.log(">> uploadDataToServerAndUpdateLastSave");
              _context4.prev = 1;
              if (_DEBUG) console.log(">> this.autosaving");
              _context4.next = 5;
              return _this6.autosaving(newVal, oldVal);
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
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              if (_DEBUG) console.log(">> uploadDataToServerBeforePageCloses");
              _context5.prev = 1;
              _context5.next = 4;
              return _this7.autosaving(newVal, oldVal);
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
      var _this8 = this;
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
              return _this8.autosaving(_this8.formDataToBeWatched, _this8.formDataToBeWatched);
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
    refreshSurete: function refreshSurete(e) {
      var index = this.suretes_diverses.findIndex(function (el) {
        return el.nom == "engagement";
      });
      this.formDataToBeWatched.total_montant_engagement_globale = this.totalEngagementGlobal;
      this.$set(this.suretes_diverses, index, this.engagement_value);
    },
    refreshSurete1: function refreshSurete1(e) {
      var index = this.suretes_diverses.findIndex(function (el) {
        return el.nom == "nantissement";
      });
      this.$set(this.suretes_diverses, index, this.nantissement_dat);
    },
    addMore1: function addMore1() {
      this.cautionnement_solidaires.push({
        nom_prenoms: "",
        profession: "",
        indicatif_caution_solidaire: "",
        numero_tel_caution_solidaire: "",
        localisation_caution_solidaire: "",
        revenu_mensuel: 0,
        valeur_patrimoine: 0
      });
      this.handleInput();
    },
    remove: function remove(index) {
      this.pieces_jointes.splice(index, 1);
      // this.formDataToBeWatched.total_part =
      //     this.totalPartPourcentageActionnariats;
      this.handleInput();
    },
    isChecked: function isChecked(listName) {
      this[listName].push({
        label: "",
        value: false
        // max: this.ActionnariatMaxNumber,
      });
    },
    remove1: function remove1(index) {
      this.cautionnement_solidaires.splice(index, 1);
    },
    removeEngagementGlobale: function removeEngagementGlobale(index) {
      this.engagement_globales.splice(index, 1);
      this.refreshSurete();
    },
    addAutreSurete: function addAutreSurete() {
      if (this.newSurete) {
        this.formDataToBeWatched.autres_suretes_diverses.push({
          label: this.newSurete,
          value: this.newSurete
        });
      }
      this.newSurete = "";
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
      var _this$meta_data$dossi3;
      var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];
      this.defaultRetract(false, (_this$meta_data$dossi3 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi3 === void 0 ? void 0 : _this$meta_data$dossi3.applied_templ_id);
      if (this.meta_data["dossier_credit"][createdKey] == undefined) {
        var value;
        if (this.meta_data["dossier_credit"]["cred_pub_tb_1"] != undefined) {
          var _this$meta_data$dossi4;
          value = Number((_this$meta_data$dossi4 = this.meta_data["dossier_credit"]["cred_pub_tb_1"].echeance) === null || _this$meta_data$dossi4 === void 0 || (_this$meta_data$dossi4 = _this$meta_data$dossi4.echeance) === null || _this$meta_data$dossi4 === void 0 ? void 0 : _this$meta_data$dossi4.toString().replace(/\s/g, ""));
          value = isNaN(value) ? 0 : value;
        } else {
          value = 0;
        }
        this.formDataToBeWatched.montant_engagement = Math.ceil(value * 1.2 / 4);
      }
      if (lentb.length > 0) {
        if (this.meta_data["dossier_credit"][createdKey] != undefined) {
          this.formDataToBeWatched = this.meta_data["dossier_credit"][createdKey];
          if (this.meta_data["dossier_credit"][createdKey]["pieces_jointes"] != "") {
            this.pieces_jointes = this.meta_data["dossier_credit"][createdKey]["pieces_jointes"];
          }
          if (this.meta_data["dossier_credit"][createdKey]["synthese_principales"] != "") {
            this.synthese_principales = this.meta_data["dossier_credit"][createdKey]["synthese_principales"];
          }
          if (this.meta_data["dossier_credit"][createdKey]["principaux_risques"] != "") {
            this.principaux_risques = this.meta_data["dossier_credit"][createdKey]["principaux_risques"];
          }
          if (this.meta_data["dossier_credit"][createdKey]["convention_credits"] != "") {
            this.convention_credits = this.meta_data["dossier_credit"][createdKey]["convention_credits"];
          }

          // if (
          //       this.formDataToBeWatched != ""
          //   ) {
          //       this.pieces_jointes = this.formDataToBeWatched["pieces_jointes"]

          //   }
        }
      }

      // Close table by default
      // this.defaultRetract(
      //     false,
      //     this.meta_data["dossier_credit"]?.applied_templ_id
      // );
    },
    // if (data.duree_credit != null) {
    //     this.duree_credit0 = data.duree_credit?.toLowerCase()
    // } else {
    //     if (this.duree_credit0 == null) {
    //         this.duree_credit0 = this.meta_data.dossier_credit.cred_pub_tb_1.duree_credit?.toLowerCase()
    //         console.log('duree_credit0', this.duree_credit0)
    //     }
    //     console.log('duree_credit1', this.duree_credit0)
    // }
    convertNumber: function convertNumber(valeur) {
      return Number(String(valeur).replace(/\s+/g, ""));
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
    addMore: function addMore(listName) {
      this[listName].push({
        article: "",
        proprietaire: "",
        numero_tel: "",
        annee_achat: "",
        adresse_emplacement: "",
        date_evaluation: "",
        valeur_marchande: 0,
        valeur_considere: 0
      });
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
        id: "pp5-head"
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
    handleInput: function handleInput(evt) {
      // this.hypotheques.forEach((element, key) => {
      //     element.valeur_considere = this.convertNumber(element.valeur_marchande) * 20 /100
      //     console.log(element.valeur_considere)
      // })
      // this.gages.forEach((element, key) => {
      //     element.valeur_considere = this.convertNumber(element.valeur_marchande) * 20 /100
      //     console.log(element.valeur_considere)
      // })

      this.pieces_jointes.forEach(function (item) {
        // console.log("iem ==> ", item["label"])

        item["label"].toUpperCase();
      });
      this.synthese_principales.forEach(function (item) {
        // console.log("iem ==> ", item["label"])

        item["label"].toUpperCase();
      });
      this.principaux_risques.forEach(function (item) {
        // console.log("iem ==> ", item["label"])

        item["label"].toUpperCase();
      });
      this.convention_credits.forEach(function (item) {
        // console.log("iem ==> ", item["label"])

        item["label"].toUpperCase();
      });
      this.formDataToBeWatched["pieces_jointes"] = this.pieces_jointes;
      this.formDataToBeWatched["synthese_principales"] = this.synthese_principales;
      this.formDataToBeWatched["principaux_risques"] = this.principaux_risques;
      this.formDataToBeWatched["convention_credits"] = this.convention_credits;
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
    retract5: function retract5() {
      this.seen5 = !this.seen4;
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES3.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES3.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/ContextMenu */ "./resources/js/components/shared/ContextMenu.vue");
/* harmony import */ var _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/ContextMenuItem */ "./resources/js/components/shared/ContextMenuItem.vue");
/* harmony import */ var _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vueform/multiselect/dist/multiselect.vue2 */ "./node_modules/@vueform/multiselect/dist/multiselect.vue2.js");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../helpers/helper */ "./resources/js/helpers/helper.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../helpers/indexedDB */ "./resources/js/helpers/indexedDB.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_helpers_indexedDB__WEBPACK_IMPORTED_MODULE_7__);
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
var DEFAULT_RISK = [{
  label: "Main d'œuvre et conditions de travail",
  value: ""
}, {
  label: "Risque de Santé et sécurité des travailleurs",
  value: ""
}, {
  label: "Mesures générales d'hygiène",
  value: ""
}, {
  label: "Production et gestion des déchets et eaux usées",
  value: ""
}, {
  label: "Achats responsables",
  value: ""
}, {
  label: "Consommation des ressources en eau",
  value: ""
}];









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
  name: "garanties",
  display: "Garanties",
  components: {
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.TrashIcon,
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.ChevronDownIcon,
    ContextMenu: _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__["default"],
    ContextMenuItem: _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__["default"],
    Multiselect: _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_2__["default"],
    AirplayIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.AirplayIcon
  },
  props: {
    meta_data: Object,
    tb_name: String,
    tb_display_name: String
  },
  created: function created() {
    var _this = this;
    // EventBus.$on('event-T1',(data)=> {

    //     console.log("Numero prêt à racheter ==> ",data.numero_pret_a_rachete)
    //     // this.retract4()
    // })
    // ? Setup cache listeners and stuff
    // this.setupCache();
    //
    // EventBus.$on('changeIt', (data) => {
    //     alert(data)
    //     this.num_pret_a_rach = data;
    // })

    _services_credit_service__WEBPACK_IMPORTED_MODULE_5__["default"].loadpaysindicatif().then(function (res) {
      _this.countries = res.data;
    })["catch"](function (err) {
      console.log(err);
    });
  },
  mounted: function mounted() {
    var _this2 = this;
    // Initiate cache
    EventBus.$on('send-numero-rachat', function (data) {
      var index = _this2.cond_particulieres.findIndex(function (el) {
        return el.cond_name === "numero_pret_a_rachete";
      });
      if (index != -1) {
        var obj = {
          cond_name: "numero_pret_a_rachete",
          cond_description: "Soldé le prêt N° " + data + " à la mise en place du prêt"
        };
        if (data.length > 0) _this2.cond_particulieres.splice(index, 1, obj);else _this2.removeByKey(index, 'cond_particulieres');
      } else {
        _this2.cond_particulieres.push({
          cond_name: "numero_pret_a_rachete",
          cond_description: "Soldé le prêt N° " + data + " à la mise en place du prêt"
        });
        return;
      }
    });
    this.tableClosedOrOpened();
    this.loadRetrieved();
    this.loadTbAttrs();
    // console.log('pieces_jointes', this.pieces_jointes)
    // charge les attributs + sous attributs des tables
    EventBus.$on("montant-credit-updated", function (data) {
      var _data$garantie, _data$crsd, _data$montant_credit, _this2$montant_dep_ga;
      // console.log(data.numero_pret_a_rachete)
      _this2.montant_dep_gar_crsd = Number((_data$garantie = data.garantie) === null || _data$garantie === void 0 ? void 0 : _data$garantie.toString().replace(/\s/g, "")) + Number((_data$crsd = data.crsd) === null || _data$crsd === void 0 ? void 0 : _data$crsd.toString().replace(/\s/g, ""));
      var a = Number((_data$montant_credit = data.montant_credit) === null || _data$montant_credit === void 0 ? void 0 : _data$montant_credit.toString().replace(/\s/g, ""));
      a = !a ? 1 : a;
      var value = Number((_this2$montant_dep_ga = _this2.montant_dep_gar_crsd) === null || _this2$montant_dep_ga === void 0 ? void 0 : _this2$montant_dep_ga.toString().replace(/\s+/g, "")) * 100 / a;
      _this2.taux_dep_gar_crsd = isFinite(value) ? value.toFixed(2) : 0;
      var datapaste = {
        duree_credit: data.duree_credit,
        mode_paiement: data.mode_paiement
      };
      _this2.recomputeSouscriptionValue(datapaste);

      // this.defaultSuretes = [
      //     {
      //         label: `Souscription de ${this.souscriptionValue} billets à ordre signés par l'emprunteur`,
      //         value: {
      //             label: `Souscription de ${this.souscriptionValue} billets à ordre signés par l'emprunteur`,
      //             nom: "souscription",
      //             billets: this.souscriptionValue,
      //         },
      //         id: "souscription",
      //     },
      //     {
      //         label: `Dépôt de garantie et compte de réserve du service de la dette (DG + CRSD) à hauteur de ${this.montant_dep_gar_crsd} FCFA soit ${this.taux_dep_gar_crsd}% du montant proposé`,
      //         value: {
      //             label: `Dépôt de garantie et compte de réserve du service de la dette (DG + CRSD) à hauteur de ${this.montant_dep_gar_crsd} FCFA soit ${this.taux_dep_gar_crsd}% du montant proposé`,
      //             nom: "depot",
      //             taux: this.taux_dep_gar_crsd,
      //             montant: this.montant_dep_gar_crsd,
      //         },
      //         id: "depot",
      //     },
      // ];

      _this2.formDataToBeWatched.suretes_diverses.forEach(function (el, index) {
        _this2.defaultSuretes.forEach(function (elem) {
          if (elem.value.nom === el.nom) {
            _this2.formDataToBeWatched.suretes_diverses[index] = elem.value;
            // console.log({ el: el.label, elem: elem.label })
          }
        });
      });
      // this.loadRetrieved()
    });
    EventBus.$on("period-change", function (period) {
      _this2.meta_data.dossier_credit.cred_pub_tb_1.mode_paiement = period;
      var data = {
        mode_paiement: period,
        duree_credit: _this2.duree_credit0
      };
      _this2.recomputeSouscriptionValue(data);
    });
    EventBus.$on("mode-paiement-updated", function (data) {
      _this2.recomputeSouscriptionValue(data);
    });
  },
  computed: {
    totalEngagementGlobal: function totalEngagementGlobal() {
      var trying = this.engagement_globales.map(function (el) {
        el.montant_engagement_globale = String(el.montant_engagement_globale).replace(/\s+/g, "");
        if (!el.montant_engagement_globale) return 0;
        return Number(el.montant_engagement_globale);
      }).reduce(function (sum, curr) {
        return sum + curr;
      }, 0);
      return trying.toLocaleString("fr-FR");
    },
    souscriptionValue: function souscriptionValue() {
      var _this$meta_data$dossi, _this$meta_data$dossi2;
      var res = 0;
      var dure = Number((_this$meta_data$dossi = this.meta_data.dossier_credit) === null || _this$meta_data$dossi === void 0 || (_this$meta_data$dossi = _this$meta_data$dossi.cred_pub_tb_00) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi.duree_credit) || 0;
      var mode = (_this$meta_data$dossi2 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi2 === void 0 || (_this$meta_data$dossi2 = _this$meta_data$dossi2.cred_pub_tb_1) === null || _this$meta_data$dossi2 === void 0 || (_this$meta_data$dossi2 = _this$meta_data$dossi2.mode_paiement) === null || _this$meta_data$dossi2 === void 0 ? void 0 : _this$meta_data$dossi2.toLowerCase();
      var diviseur = 1;
      if (mode === "mensuelle") {
        diviseur = 1;
        res = dure / diviseur;
      }
      if (mode === "bi-mensuel") {
        diviseur = 2;
        res = dure * diviseur;
      }
      if (mode === "trimestriel") {
        diviseur = 3;
        res = dure / diviseur;
      }
      if (mode === "semestriel") {
        diviseur = 6;
        res = dure / diviseur;
      }
      if (mode === "in fine") {
        diviseur = dure || 1;
        res = dure / diviseur;
      }
      return res;
    },
    engagement_value: function engagement_value() {
      return {
        label: "Engagement de domiciliation globale de ".concat(this.totalEngagementGlobal, "  FCFA"),
        nom: "engagement",
        total_montant_engagement_globale: this.totalEngagementGlobal
      };
    },
    nantissement_dat: function nantissement_dat() {
      return {
        label: "Nantissement DAT de ".concat(this.formDataToBeWatched.montant_dat, " FCFA  qui a pour r\xE9f\xE9rence ").concat(this.formDataToBeWatched.reference_dat),
        nom: "nantissement",
        montant_dat: this.formDataToBeWatched.montant_dat,
        reference_dat: this.formDataToBeWatched.reference_dat
      };
    }
  },
  data: function data() {
    var vm = this;
    return {
      num_pret_a_rach: "",
      defaultSuretes: [],
      newSurete: "",
      suretes_diverses: [],
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
      duree_credit0: null,
      mode_paiement0: null,
      // credits: [],
      // clients: [],
      // encours: null,
      // placeholder: "Chercher clients",
      // matcli: "matcli",
      // nomcli: "nomcli",
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
      formDataToBeWatched: {
        notes: [],
        pieces_jointes: "",
        synthese_principales: "",
        principaux_risques: "",
        convention_credits: "",
        commentaires_pj: "",
        commentaires_synt: "",
        commentaires_prin: "",
        commentaires_convent: ""
      },
      countries: [],
      pieces_jointes: [{
        label: "Fiche de screening E&S client complétée",
        value: false,
        categorie_eleve: "Requis",
        categorie_moyenne: "Requis"
      }, {
        label: "Résumé du rapport de Due Diligence",
        value: false,
        categorie_eleve: "Requis",
        categorie_moyenne: "Non requis"
      }, {
        label: "Plan d'Action E&S (PAES)",
        value: false,
        categorie_eleve: "Requis",
        categorie_moyenne: "Requis si nécessaire"
      }, {
        label: "Questionnaire client risques E&S moyens",
        value: false,
        categorie_eleve: "Non requis",
        categorie_moyenne: "Requis"
      }, {
        label: "Revue questionnaire client risques E&S moyens",
        value: false,
        categorie_eleve: "Non requis",
        categorie_moyenne: "Requis"
      }],
      principaux_risques: DEFAULT_RISK
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
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (_DEBUG) console.log(">> updateFormDataForDeletion");
              _this3.formDataToBeWatched.is_deleted = true;
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
      var _this4 = this;
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
              if (!_this4.formDataToBeWatched.is_deleted) {
                _context2.next = 5;
                break;
              }
              return _context2.abrupt("return");
            case 5:
              // Upload current (and arguably latest) formDataToBeWatched data

              _this4.uploadDataToServerAndUpdateLastSave(_this4.formDataToBeWatched, _this4.formDataToBeWatched);
              if (_DEBUG) console.log("<< beforePageIsClosed");
            case 7:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    removeRisk: function removeRisk(index) {
      this.principaux_risques.splice(index, 1);
      this.handleInput();
    },
    addRisk: function addRisk() {
      this.principaux_risques.push({
        label: "",
        value: ""
      });
      this.handleInput();
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
      var _this5 = this;
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
                  _this5.uploadDataToServerAndUpdateLastSave(newVal, oldVal);
                }
              }
              // First upload
              if (!_lastSaveTime) {
                _this5.uploadDataToServerAndUpdateLastSave(newVal, oldVal);
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
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              if (_DEBUG) console.log(">> uploadDataToServerAndUpdateLastSave");
              _context4.prev = 1;
              if (_DEBUG) console.log(">> this.autosaving");
              _context4.next = 5;
              return _this6.autosaving(newVal, oldVal);
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
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              if (_DEBUG) console.log(">> uploadDataToServerBeforePageCloses");
              _context5.prev = 1;
              _context5.next = 4;
              return _this7.autosaving(newVal, oldVal);
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
      var _this8 = this;
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
              return _this8.autosaving(_this8.formDataToBeWatched, _this8.formDataToBeWatched);
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
    refreshSurete: function refreshSurete(e) {
      var index = this.suretes_diverses.findIndex(function (el) {
        return el.nom == "engagement";
      });
      this.formDataToBeWatched.total_montant_engagement_globale = this.totalEngagementGlobal;
      this.$set(this.suretes_diverses, index, this.engagement_value);
    },
    refreshSurete1: function refreshSurete1(e) {
      var index = this.suretes_diverses.findIndex(function (el) {
        return el.nom == "nantissement";
      });
      this.$set(this.suretes_diverses, index, this.nantissement_dat);
    },
    addMore1: function addMore1() {
      this.cautionnement_solidaires.push({
        nom_prenoms: "",
        profession: "",
        indicatif_caution_solidaire: "",
        numero_tel_caution_solidaire: "",
        localisation_caution_solidaire: "",
        revenu_mensuel: 0,
        valeur_patrimoine: 0
      });
      this.handleInput();
    },
    remove: function remove(index) {
      this.pieces_jointes.splice(index, 1);
      // this.formDataToBeWatched.total_part =
      //     this.totalPartPourcentageActionnariats;
      this.handleInput();
    },
    isChecked: function isChecked(listName) {
      this[listName].push({
        label: "",
        value: false
        // max: this.ActionnariatMaxNumber,
      });
    },
    remove1: function remove1(index) {
      this.cautionnement_solidaires.splice(index, 1);
    },
    removeEngagementGlobale: function removeEngagementGlobale(index) {
      this.engagement_globales.splice(index, 1);
      this.refreshSurete();
    },
    addAutreSurete: function addAutreSurete() {
      if (this.newSurete) {
        this.formDataToBeWatched.autres_suretes_diverses.push({
          label: this.newSurete,
          value: this.newSurete
        });
      }
      this.newSurete = "";
    },
    tableClosedOrOpened: function tableClosedOrOpened() {
      this.seen = this.fetchClosedTables(this.tb_name + this.meta_data["cred_pub_key"]);
    },
    openNotesModal: function openNotesModal() {
      var listing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.listingNote = listing;
      this.$modal.show(this.tb_name);
    },
    checkboxValCashCall: function checkboxValCashCall(value, index) {
      this.principaux_risques[index]["value"] = value;
      this.handleInput();
      // this.formDataToBeWatched.pret_couvert_cash_call = value;
    },
    loadRetrieved: function loadRetrieved() {
      var _this$meta_data$dossi3;
      var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];
      this.defaultRetract(false, (_this$meta_data$dossi3 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi3 === void 0 ? void 0 : _this$meta_data$dossi3.applied_templ_id);
      if (this.meta_data["dossier_credit"][createdKey] == undefined) {
        var value;
        if (this.meta_data["dossier_credit"]["cred_pub_tb_1"] != undefined) {
          var _this$meta_data$dossi4;
          value = Number((_this$meta_data$dossi4 = this.meta_data["dossier_credit"]["cred_pub_tb_1"].echeance) === null || _this$meta_data$dossi4 === void 0 || (_this$meta_data$dossi4 = _this$meta_data$dossi4.echeance) === null || _this$meta_data$dossi4 === void 0 ? void 0 : _this$meta_data$dossi4.toString().replace(/\s/g, ""));
          value = isNaN(value) ? 0 : value;
        } else {
          value = 0;
        }
        this.formDataToBeWatched.montant_engagement = Math.ceil(value * 1.2 / 4);
      }
      if (lentb.length > 0) {
        if (this.meta_data["dossier_credit"][createdKey] != undefined) {
          this.formDataToBeWatched = this.meta_data["dossier_credit"][createdKey];
          if (this.meta_data["dossier_credit"][createdKey]["pieces_jointes"] != "") {
            this.pieces_jointes = this.meta_data["dossier_credit"][createdKey]["pieces_jointes"];
          }
          if (this.meta_data["dossier_credit"][createdKey]["synthese_principales"] != "") {
            this.synthese_principales = this.meta_data["dossier_credit"][createdKey]["synthese_principales"];
          }
          if (this.meta_data["dossier_credit"][createdKey]["principaux_risques"] != "") {
            var _this$principaux_risq;
            this.principaux_risques = this.meta_data["dossier_credit"][createdKey]["principaux_risques"];
            if (((_this$principaux_risq = this.principaux_risques) === null || _this$principaux_risq === void 0 ? void 0 : _this$principaux_risq.length) == 0) {
              this.principaux_risques.push({
                label: '',
                value: ''
              });
            }
          } else {
            this.principaux_risques = DEFAULT_RISK;
          }
          if (this.meta_data["dossier_credit"][createdKey]["convention_credits"] != "") {
            this.convention_credits = this.meta_data["dossier_credit"][createdKey]["convention_credits"];
          }

          // if (
          //       this.formDataToBeWatched != ""
          //   ) {
          //       this.pieces_jointes = this.formDataToBeWatched["pieces_jointes"]

          //   }
        }
      }

      // Close table by default
      // this.defaultRetract(
      //     false,
      //     this.meta_data["dossier_credit"]?.applied_templ_id
      // );
    },
    // if (data.duree_credit != null) {
    //     this.duree_credit0 = data.duree_credit?.toLowerCase()
    // } else {
    //     if (this.duree_credit0 == null) {
    //         this.duree_credit0 = this.meta_data.dossier_credit.cred_pub_tb_1.duree_credit?.toLowerCase()
    //         console.log('duree_credit0', this.duree_credit0)
    //     }
    //     console.log('duree_credit1', this.duree_credit0)
    // }
    convertNumber: function convertNumber(valeur) {
      return Number(String(valeur).replace(/\s+/g, ""));
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
    addMore: function addMore(listName) {
      this[listName].push({
        article: "",
        proprietaire: "",
        numero_tel: "",
        annee_achat: "",
        adresse_emplacement: "",
        date_evaluation: "",
        valeur_marchande: 0,
        valeur_considere: 0
      });
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
        id: "pp6-head"
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
    handleInput: function handleInput(evt) {
      var _this$principaux_risq2;
      this.formDataToBeWatched["principaux_risques"] = (_this$principaux_risq2 = this.principaux_risques) === null || _this$principaux_risq2 === void 0 ? void 0 : _this$principaux_risq2.filter(function (pr) {
        var _pr$label;
        return (_pr$label = pr.label) === null || _pr$label === void 0 ? void 0 : _pr$label.trim();
      });
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
    retract5: function retract5() {
      this.seen5 = !this.seen4;
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES4.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES4.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/ContextMenu */ "./resources/js/components/shared/ContextMenu.vue");
/* harmony import */ var _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/ContextMenuItem */ "./resources/js/components/shared/ContextMenuItem.vue");
/* harmony import */ var _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vueform/multiselect/dist/multiselect.vue2 */ "./node_modules/@vueform/multiselect/dist/multiselect.vue2.js");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../helpers/helper */ "./resources/js/helpers/helper.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../helpers/indexedDB */ "./resources/js/helpers/indexedDB.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_helpers_indexedDB__WEBPACK_IMPORTED_MODULE_7__);
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
  name: "convention_credit",
  display: "convention_credit",
  components: {
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.TrashIcon,
    AirplayIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.AirplayIcon,
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.ChevronDownIcon,
    ContextMenu: _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__["default"],
    ContextMenuItem: _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__["default"],
    Multiselect: _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    meta_data: Object,
    tb_name: String,
    tb_display_name: String
  },
  created: function created() {
    var _this = this;
    // EventBus.$on('event-T1',(data)=> {

    //     console.log("Numero prêt à racheter ==> ",data.numero_pret_a_rachete)
    //     // this.retract4()
    // })
    // ? Setup cache listeners and stuff
    // this.setupCache();
    //
    // EventBus.$on('changeIt', (data) => {
    //     alert(data)
    //     this.num_pret_a_rach = data;
    // })

    _services_credit_service__WEBPACK_IMPORTED_MODULE_5__["default"].loadpaysindicatif().then(function (res) {
      _this.countries = res.data;
    })["catch"](function (err) {
      console.log(err);
    });
  },
  mounted: function mounted() {
    var _this2 = this;
    // Initiate cache
    EventBus.$on('send-numero-rachat', function (data) {
      var index = _this2.cond_particulieres.findIndex(function (el) {
        return el.cond_name === "numero_pret_a_rachete";
      });
      if (index != -1) {
        var obj = {
          cond_name: "numero_pret_a_rachete",
          cond_description: "Soldé le prêt N° " + data + " à la mise en place du prêt"
        };
        if (data.length > 0) _this2.cond_particulieres.splice(index, 1, obj);else _this2.removeByKey(index, 'cond_particulieres');
      } else {
        _this2.cond_particulieres.push({
          cond_name: "numero_pret_a_rachete",
          cond_description: "Soldé le prêt N° " + data + " à la mise en place du prêt"
        });
        return;
      }
    });
    this.tableClosedOrOpened();
    this.loadRetrieved();
    this.loadTbAttrs();
    // console.log('pieces_jointes', this.pieces_jointes)
    // charge les attributs + sous attributs des tables
    EventBus.$on("montant-credit-updated", function (data) {
      var _data$garantie, _data$crsd, _data$montant_credit, _this2$montant_dep_ga;
      // console.log(data.numero_pret_a_rachete)
      _this2.montant_dep_gar_crsd = Number((_data$garantie = data.garantie) === null || _data$garantie === void 0 ? void 0 : _data$garantie.toString().replace(/\s/g, "")) + Number((_data$crsd = data.crsd) === null || _data$crsd === void 0 ? void 0 : _data$crsd.toString().replace(/\s/g, ""));
      var a = Number((_data$montant_credit = data.montant_credit) === null || _data$montant_credit === void 0 ? void 0 : _data$montant_credit.toString().replace(/\s/g, ""));
      a = !a ? 1 : a;
      var value = Number((_this2$montant_dep_ga = _this2.montant_dep_gar_crsd) === null || _this2$montant_dep_ga === void 0 ? void 0 : _this2$montant_dep_ga.toString().replace(/\s+/g, "")) * 100 / a;
      _this2.taux_dep_gar_crsd = isFinite(value) ? value.toFixed(2) : 0;
      var datapaste = {
        duree_credit: data.duree_credit,
        mode_paiement: data.mode_paiement
      };
      _this2.recomputeSouscriptionValue(datapaste);

      // this.defaultSuretes = [
      //     {
      //         label: `Souscription de ${this.souscriptionValue} billets à ordre signés par l'emprunteur`,
      //         value: {
      //             label: `Souscription de ${this.souscriptionValue} billets à ordre signés par l'emprunteur`,
      //             nom: "souscription",
      //             billets: this.souscriptionValue,
      //         },
      //         id: "souscription",
      //     },
      //     {
      //         label: `Dépôt de garantie et compte de réserve du service de la dette (DG + CRSD) à hauteur de ${this.montant_dep_gar_crsd} FCFA soit ${this.taux_dep_gar_crsd}% du montant proposé`,
      //         value: {
      //             label: `Dépôt de garantie et compte de réserve du service de la dette (DG + CRSD) à hauteur de ${this.montant_dep_gar_crsd} FCFA soit ${this.taux_dep_gar_crsd}% du montant proposé`,
      //             nom: "depot",
      //             taux: this.taux_dep_gar_crsd,
      //             montant: this.montant_dep_gar_crsd,
      //         },
      //         id: "depot",
      //     },
      // ];

      _this2.formDataToBeWatched.suretes_diverses.forEach(function (el, index) {
        _this2.defaultSuretes.forEach(function (elem) {
          if (elem.value.nom === el.nom) {
            _this2.formDataToBeWatched.suretes_diverses[index] = elem.value;
            // console.log({ el: el.label, elem: elem.label })
          }
        });
      });
      // this.loadRetrieved()
    });
    EventBus.$on("period-change", function (period) {
      _this2.meta_data.dossier_credit.cred_pub_tb_1.mode_paiement = period;
      var data = {
        mode_paiement: period,
        duree_credit: _this2.duree_credit0
      };
      _this2.recomputeSouscriptionValue(data);
    });
    EventBus.$on("mode-paiement-updated", function (data) {
      _this2.recomputeSouscriptionValue(data);
    });
  },
  computed: {
    totalEngagementGlobal: function totalEngagementGlobal() {
      var trying = this.engagement_globales.map(function (el) {
        el.montant_engagement_globale = String(el.montant_engagement_globale).replace(/\s+/g, "");
        if (!el.montant_engagement_globale) return 0;
        return Number(el.montant_engagement_globale);
      }).reduce(function (sum, curr) {
        return sum + curr;
      }, 0);
      return trying.toLocaleString("fr-FR");
    },
    souscriptionValue: function souscriptionValue() {
      var _this$meta_data$dossi, _this$meta_data$dossi2;
      var res = 0;
      var dure = Number((_this$meta_data$dossi = this.meta_data.dossier_credit) === null || _this$meta_data$dossi === void 0 || (_this$meta_data$dossi = _this$meta_data$dossi.cred_pub_tb_00) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi.duree_credit) || 0;
      var mode = (_this$meta_data$dossi2 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi2 === void 0 || (_this$meta_data$dossi2 = _this$meta_data$dossi2.cred_pub_tb_1) === null || _this$meta_data$dossi2 === void 0 || (_this$meta_data$dossi2 = _this$meta_data$dossi2.mode_paiement) === null || _this$meta_data$dossi2 === void 0 ? void 0 : _this$meta_data$dossi2.toLowerCase();
      var diviseur = 1;
      if (mode === "mensuelle") {
        diviseur = 1;
        res = dure / diviseur;
      }
      if (mode === "bi-mensuel") {
        diviseur = 2;
        res = dure * diviseur;
      }
      if (mode === "trimestriel") {
        diviseur = 3;
        res = dure / diviseur;
      }
      if (mode === "semestriel") {
        diviseur = 6;
        res = dure / diviseur;
      }
      if (mode === "in fine") {
        diviseur = dure || 1;
        res = dure / diviseur;
      }
      return res;
    },
    engagement_value: function engagement_value() {
      return {
        label: "Engagement de domiciliation globale de ".concat(this.totalEngagementGlobal, "  FCFA"),
        nom: "engagement",
        total_montant_engagement_globale: this.totalEngagementGlobal
      };
    },
    nantissement_dat: function nantissement_dat() {
      return {
        label: "Nantissement DAT de ".concat(this.formDataToBeWatched.montant_dat, " FCFA  qui a pour r\xE9f\xE9rence ").concat(this.formDataToBeWatched.reference_dat),
        nom: "nantissement",
        montant_dat: this.formDataToBeWatched.montant_dat,
        reference_dat: this.formDataToBeWatched.reference_dat
      };
    }
  },
  data: function data() {
    var vm = this;
    return {
      num_pret_a_rach: "",
      defaultSuretes: [],
      newSurete: "",
      suretes_diverses: [],
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
      duree_credit0: null,
      mode_paiement0: null,
      // credits: [],
      // clients: [],
      // encours: null,
      // placeholder: "Chercher clients",
      // matcli: "matcli",
      // nomcli: "nomcli",
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
      formDataToBeWatched: {
        notes: [],
        pieces_jointes: "",
        synthese_principales: "",
        principaux_risques: "",
        convention_credits: "",
        commentaires_convent: ""
      },
      countries: [],
      convention_credits: [{
        label: "Clauses E&S standards",
        value: false
      }, {
        label: "Modification des clauses E&S standards (si oui joindre la validation par le juridique)",
        value: false
      }]
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
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (_DEBUG) console.log(">> updateFormDataForDeletion");
              _this3.formDataToBeWatched.is_deleted = true;
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
      var _this4 = this;
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
              if (!_this4.formDataToBeWatched.is_deleted) {
                _context2.next = 5;
                break;
              }
              return _context2.abrupt("return");
            case 5:
              // Upload current (and arguably latest) formDataToBeWatched data

              _this4.uploadDataToServerAndUpdateLastSave(_this4.formDataToBeWatched, _this4.formDataToBeWatched);
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
      var _this5 = this;
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
                  _this5.uploadDataToServerAndUpdateLastSave(newVal, oldVal);
                }
              }
              // First upload
              if (!_lastSaveTime) {
                _this5.uploadDataToServerAndUpdateLastSave(newVal, oldVal);
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
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              if (_DEBUG) console.log(">> uploadDataToServerAndUpdateLastSave");
              _context4.prev = 1;
              if (_DEBUG) console.log(">> this.autosaving");
              _context4.next = 5;
              return _this6.autosaving(newVal, oldVal);
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
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              if (_DEBUG) console.log(">> uploadDataToServerBeforePageCloses");
              _context5.prev = 1;
              _context5.next = 4;
              return _this7.autosaving(newVal, oldVal);
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
      var _this8 = this;
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
              return _this8.autosaving(_this8.formDataToBeWatched, _this8.formDataToBeWatched);
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
    refreshSurete: function refreshSurete(e) {
      var index = this.suretes_diverses.findIndex(function (el) {
        return el.nom == "engagement";
      });
      this.formDataToBeWatched.total_montant_engagement_globale = this.totalEngagementGlobal;
      this.$set(this.suretes_diverses, index, this.engagement_value);
    },
    refreshSurete1: function refreshSurete1(e) {
      var index = this.suretes_diverses.findIndex(function (el) {
        return el.nom == "nantissement";
      });
      this.$set(this.suretes_diverses, index, this.nantissement_dat);
    },
    addMore1: function addMore1() {
      this.cautionnement_solidaires.push({
        nom_prenoms: "",
        profession: "",
        indicatif_caution_solidaire: "",
        numero_tel_caution_solidaire: "",
        localisation_caution_solidaire: "",
        revenu_mensuel: 0,
        valeur_patrimoine: 0
      });
      this.handleInput();
    },
    remove: function remove(index) {
      this.pieces_jointes.splice(index, 1);
      // this.formDataToBeWatched.total_part =
      //     this.totalPartPourcentageActionnariats;
      this.handleInput();
    },
    isChecked: function isChecked(listName) {
      this[listName].push({
        label: "",
        value: false
        // max: this.ActionnariatMaxNumber,
      });
    },
    remove1: function remove1(index) {
      this.cautionnement_solidaires.splice(index, 1);
    },
    removeEngagementGlobale: function removeEngagementGlobale(index) {
      this.engagement_globales.splice(index, 1);
      this.refreshSurete();
    },
    addAutreSurete: function addAutreSurete() {
      if (this.newSurete) {
        this.formDataToBeWatched.autres_suretes_diverses.push({
          label: this.newSurete,
          value: this.newSurete
        });
      }
      this.newSurete = "";
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
      var _this$meta_data$dossi3;
      var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];
      this.defaultRetract(false, (_this$meta_data$dossi3 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi3 === void 0 ? void 0 : _this$meta_data$dossi3.applied_templ_id);
      if (this.meta_data["dossier_credit"][createdKey] == undefined) {
        var value;
        if (this.meta_data["dossier_credit"]["cred_pub_tb_1"] != undefined) {
          var _this$meta_data$dossi4;
          value = Number((_this$meta_data$dossi4 = this.meta_data["dossier_credit"]["cred_pub_tb_1"].echeance) === null || _this$meta_data$dossi4 === void 0 || (_this$meta_data$dossi4 = _this$meta_data$dossi4.echeance) === null || _this$meta_data$dossi4 === void 0 ? void 0 : _this$meta_data$dossi4.toString().replace(/\s/g, ""));
          value = isNaN(value) ? 0 : value;
        } else {
          value = 0;
        }
        this.formDataToBeWatched.montant_engagement = Math.ceil(value * 1.2 / 4);
      }
      if (lentb.length > 0) {
        if (this.meta_data["dossier_credit"][createdKey] != undefined) {
          this.formDataToBeWatched = this.meta_data["dossier_credit"][createdKey];
          if (this.meta_data["dossier_credit"][createdKey]["pieces_jointes"] != "") {
            this.pieces_jointes = this.meta_data["dossier_credit"][createdKey]["pieces_jointes"];
          }
          if (this.meta_data["dossier_credit"][createdKey]["synthese_principales"] != "") {
            this.synthese_principales = this.meta_data["dossier_credit"][createdKey]["synthese_principales"];
          }
          if (this.meta_data["dossier_credit"][createdKey]["principaux_risques"] != "") {
            this.principaux_risques = this.meta_data["dossier_credit"][createdKey]["principaux_risques"];
          }
          if (this.meta_data["dossier_credit"][createdKey]["convention_credits"] != "") {
            this.convention_credits = this.meta_data["dossier_credit"][createdKey]["convention_credits"];
          }

          // if (
          //       this.formDataToBeWatched != ""
          //   ) {
          //       this.pieces_jointes = this.formDataToBeWatched["pieces_jointes"]

          //   }
        }
      }

      // Close table by default
      // this.defaultRetract(
      //     false,
      //     this.meta_data["dossier_credit"]?.applied_templ_id
      // );
    },
    // if (data.duree_credit != null) {
    //     this.duree_credit0 = data.duree_credit?.toLowerCase()
    // } else {
    //     if (this.duree_credit0 == null) {
    //         this.duree_credit0 = this.meta_data.dossier_credit.cred_pub_tb_1.duree_credit?.toLowerCase()
    //         console.log('duree_credit0', this.duree_credit0)
    //     }
    //     console.log('duree_credit1', this.duree_credit0)
    // }
    convertNumber: function convertNumber(valeur) {
      return Number(String(valeur).replace(/\s+/g, ""));
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
    addMore: function addMore(listName) {
      this[listName].push({
        article: "",
        proprietaire: "",
        numero_tel: "",
        annee_achat: "",
        adresse_emplacement: "",
        date_evaluation: "",
        valeur_marchande: 0,
        valeur_considere: 0
      });
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
        id: "pp7-head"
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
    handleInput: function handleInput(evt) {
      // this.hypotheques.forEach((element, key) => {
      //     element.valeur_considere = this.convertNumber(element.valeur_marchande) * 20 /100
      //     console.log(element.valeur_considere)
      // })
      // this.gages.forEach((element, key) => {
      //     element.valeur_considere = this.convertNumber(element.valeur_marchande) * 20 /100
      //     console.log(element.valeur_considere)
      // })

      this.convention_credits.forEach(function (item) {
        // console.log("iem ==> ", item["label"])

        item["label"].toUpperCase();
      });
      this.formDataToBeWatched["convention_credits"] = this.convention_credits;
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
    retract5: function retract5() {
      this.seen5 = !this.seen4;
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES5.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES5.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/ContextMenu */ "./resources/js/components/shared/ContextMenu.vue");
/* harmony import */ var _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/ContextMenuItem */ "./resources/js/components/shared/ContextMenuItem.vue");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../helpers/helper */ "./resources/js/helpers/helper.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }









window.$ = window.jQuery = __webpack_require__(/*! jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "PlanAction",
  display: "Plan Action",
  components: {
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.ChevronDownIcon,
    ContextMenu: _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__["default"],
    ContextMenuItem: _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__["default"],
    AirplayIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.AirplayIcon,
    BookOpenIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.BookOpenIcon,
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__.TrashIcon
  },
  props: {
    meta_data: Object,
    tb_name: String,
    tb_display_name: String
  },
  created: function created() {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  computed: {
    isAfterToday: function isAfterToday() {
      var today = new Date().getTime();
      var elem = {
        existante: {},
        caution: {}
      };
      this.lignes_existantes.forEach(function (el, index) {
        var cond = new Date(el.ligne_echeance).getTime() > today;
        if (cond) {
          elem.existante[index] = true;
        } else {
          elem.existante[index] = false;
        }
      });
      this.cautions_lignes_existantes.forEach(function (el, index) {
        var cond = new Date(el.caution_ligne_existante_echeance).getTime() > today;
        if (cond) {
          elem.caution[index] = true;
        } else {
          elem.caution[index] = false;
        }
      });
      return elem;
    }
  },
  mounted: function mounted() {
    this.loadRetrieved();
    this.loadTbAttrs(); // charge les attributs + sous attributs des tables
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
      seen3: true,
      seen4: true,
      placeholder: "Chercher clients",
      meta_parseable: {
        cred_pub_key: this.meta_data["cred_pub_key"],
        tb_name: this.tb_name
      },
      formDataToBeWatched: {
        notes: [],
        norme_performances: []
      },
      norme_performances: [{
        libelle: "Normes de performance 1 de la SFI : Evaluation et gestion sociaux des risques environnementaux",
        contents: [{
          exigence: "Promouvoir des conditions de travail sûres et saines et protéger la santé des travailleurs",
          risque: "",
          action_corrective: "",
          delai: "",
          livrable: ""
        }]
      }, {
        libelle: "Normes de performance 2 de la SFI : Main d’oeuvre et conditions de travail",
        contents: [{
          exigence: "Santé et Sécurité au travail",
          risque: "",
          action_corrective: "",
          delai: "",
          livrable: ""
        }]
      }, {
        libelle: "Normes de Performance 3 de la SFI : Utilisation rationnelle des ressources et prévention de la pollution",
        contents: [{
          exigence: "Utilisation rationnelle des ressources en eau",
          risque: "",
          action_corrective: "",
          delai: "",
          livrable: ""
        }, {
          exigence: "Gestion des déchets fécaux et urinaires des porcs",
          risque: "",
          action_corrective: "",
          delai: "",
          livrable: ""
        }]
      }],
      listingNote: false,
      frais: [],
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
      }]
    };
  },
  methods: {
    tableClosedOrOpened: function tableClosedOrOpened() {
      this.seen = this.fetchClosedTables(this.tb_name + this.meta_data["cred_pub_key"]);
    },
    openNotesModal: function openNotesModal() {
      var listing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.listingNote = listing;
      this.$modal.show(this.tb_name);
    },
    launchAutoSaver: function launchAutoSaver() {
      var _this = this;
      _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["default"].loadUserData().then(function (res) {
        _this.send2Backend(res, 0, 0);
      })["catch"](function (err) {
        _this.loadWithError(err);
      });
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
          if (this.meta_data["dossier_credit"][createdKey]["norme_performances"] != "") {
            this.norme_performances = this.meta_data["dossier_credit"][createdKey]["norme_performances"];
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
    addMore: function addMore() {
      this.norme_performances.push({
        libelle: "",
        contents: [{
          risque: "",
          action_corrective: "",
          delai: "",
          livrable: ""
        }]
      });
      this.handleInput();
    },
    addMoreLine: function addMoreLine(index) {
      this.norme_performances[index]['contents'].push({
        risque: "",
        action_corrective: "",
        delai: "",
        livrable: ""
      });
      this.handleInput();
    },
    formDataVars: function formDataVars(event) {
      this.formDataToBeWatched[event[0]] = event[1];
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
    instruction4: function instruction4(id) {
      var id0 = "#" + id;
      window.$(id0).modal("show");
    },
    remove: function remove(index) {
      this.norme_performances.splice(index, 1);
      this.handleInput();
    },
    removeLine: function removeLine(index, ind) {
      var _this$norme_performan, _this$norme_performan2;
      var contents = (_this$norme_performan = (_this$norme_performan2 = this.norme_performances[index]) === null || _this$norme_performan2 === void 0 ? void 0 : _this$norme_performan2['contents']) !== null && _this$norme_performan !== void 0 ? _this$norme_performan : [];
      if (contents.length > 0) {
        contents.splice(ind, 1);
        this.norme_performances[index]['contents'] = contents;
      }
      this.handleInput();
    },
    // SOMME DES MONTANTS
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
        id: "f42-head"
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
    handleInput: function handleInput(evt) {
      this.formDataToBeWatched["norme_performances"] = this.norme_performances;
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES6.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES6.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/ContextMenu */ "./resources/js/components/shared/ContextMenu.vue");
/* harmony import */ var _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/ContextMenuItem */ "./resources/js/components/shared/ContextMenuItem.vue");
/* harmony import */ var _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vueform/multiselect/dist/multiselect.vue2 */ "./node_modules/@vueform/multiselect/dist/multiselect.vue2.js");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../helpers/helper */ "./resources/js/helpers/helper.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../helpers/indexedDB */ "./resources/js/helpers/indexedDB.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_helpers_indexedDB__WEBPACK_IMPORTED_MODULE_7__);
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
  name: "garanties",
  display: "Garanties",
  components: {
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.TrashIcon,
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.ChevronDownIcon,
    ContextMenu: _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__["default"],
    ContextMenuItem: _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__["default"],
    Multiselect: _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_2__["default"],
    AirplayIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.AirplayIcon
  },
  props: {
    meta_data: Object,
    tb_name: String,
    tb_display_name: String
  },
  created: function created() {
    var _this = this;
    // EventBus.$on('event-T1',(data)=> {

    //     console.log("Numero prêt à racheter ==> ",data.numero_pret_a_rachete)
    //     // this.retract4()
    // })
    // ? Setup cache listeners and stuff
    // this.setupCache();
    //
    // EventBus.$on('changeIt', (data) => {
    //     alert(data)
    //     this.num_pret_a_rach = data;
    // })

    _services_credit_service__WEBPACK_IMPORTED_MODULE_5__["default"].loadpaysindicatif().then(function (res) {
      _this.countries = res.data;
    })["catch"](function (err) {
      console.log(err);
    });
  },
  mounted: function mounted() {
    var _this2 = this;
    // Initiate cache
    EventBus.$on('send-numero-rachat', function (data) {
      var index = _this2.cond_particulieres.findIndex(function (el) {
        return el.cond_name === "numero_pret_a_rachete";
      });
      if (index != -1) {
        var obj = {
          cond_name: "numero_pret_a_rachete",
          cond_description: "Soldé le prêt N° " + data + " à la mise en place du prêt"
        };
        if (data.length > 0) _this2.cond_particulieres.splice(index, 1, obj);else _this2.removeByKey(index, 'cond_particulieres');
      } else {
        _this2.cond_particulieres.push({
          cond_name: "numero_pret_a_rachete",
          cond_description: "Soldé le prêt N° " + data + " à la mise en place du prêt"
        });
        return;
      }
    });
    this.tableClosedOrOpened();
    this.loadRetrieved();
    this.loadTbAttrs();
    // console.log('pieces_jointes', this.pieces_jointes)
    // charge les attributs + sous attributs des tables
    EventBus.$on("montant-credit-updated", function (data) {
      var _data$garantie, _data$crsd, _data$montant_credit, _this2$montant_dep_ga;
      // console.log(data.numero_pret_a_rachete)
      _this2.montant_dep_gar_crsd = Number((_data$garantie = data.garantie) === null || _data$garantie === void 0 ? void 0 : _data$garantie.toString().replace(/\s/g, "")) + Number((_data$crsd = data.crsd) === null || _data$crsd === void 0 ? void 0 : _data$crsd.toString().replace(/\s/g, ""));
      var a = Number((_data$montant_credit = data.montant_credit) === null || _data$montant_credit === void 0 ? void 0 : _data$montant_credit.toString().replace(/\s/g, ""));
      a = !a ? 1 : a;
      var value = Number((_this2$montant_dep_ga = _this2.montant_dep_gar_crsd) === null || _this2$montant_dep_ga === void 0 ? void 0 : _this2$montant_dep_ga.toString().replace(/\s+/g, "")) * 100 / a;
      _this2.taux_dep_gar_crsd = isFinite(value) ? value.toFixed(2) : 0;
      var datapaste = {
        duree_credit: data.duree_credit,
        mode_paiement: data.mode_paiement
      };
      _this2.recomputeSouscriptionValue(datapaste);

      // this.defaultSuretes = [
      //     {
      //         label: `Souscription de ${this.souscriptionValue} billets à ordre signés par l'emprunteur`,
      //         value: {
      //             label: `Souscription de ${this.souscriptionValue} billets à ordre signés par l'emprunteur`,
      //             nom: "souscription",
      //             billets: this.souscriptionValue,
      //         },
      //         id: "souscription",
      //     },
      //     {
      //         label: `Dépôt de garantie et compte de réserve du service de la dette (DG + CRSD) à hauteur de ${this.montant_dep_gar_crsd} FCFA soit ${this.taux_dep_gar_crsd}% du montant proposé`,
      //         value: {
      //             label: `Dépôt de garantie et compte de réserve du service de la dette (DG + CRSD) à hauteur de ${this.montant_dep_gar_crsd} FCFA soit ${this.taux_dep_gar_crsd}% du montant proposé`,
      //             nom: "depot",
      //             taux: this.taux_dep_gar_crsd,
      //             montant: this.montant_dep_gar_crsd,
      //         },
      //         id: "depot",
      //     },
      // ];

      _this2.formDataToBeWatched.suretes_diverses.forEach(function (el, index) {
        _this2.defaultSuretes.forEach(function (elem) {
          if (elem.value.nom === el.nom) {
            _this2.formDataToBeWatched.suretes_diverses[index] = elem.value;
            // console.log({ el: el.label, elem: elem.label })
          }
        });
      });
      // this.loadRetrieved()
    });
    EventBus.$on("period-change", function (period) {
      _this2.meta_data.dossier_credit.cred_pub_tb_1.mode_paiement = period;
      var data = {
        mode_paiement: period,
        duree_credit: _this2.duree_credit0
      };
      _this2.recomputeSouscriptionValue(data);
    });
    EventBus.$on("mode-paiement-updated", function (data) {
      _this2.recomputeSouscriptionValue(data);
    });
  },
  computed: {
    totalEngagementGlobal: function totalEngagementGlobal() {
      var trying = this.engagement_globales.map(function (el) {
        el.montant_engagement_globale = String(el.montant_engagement_globale).replace(/\s+/g, "");
        if (!el.montant_engagement_globale) return 0;
        return Number(el.montant_engagement_globale);
      }).reduce(function (sum, curr) {
        return sum + curr;
      }, 0);
      return trying.toLocaleString("fr-FR");
    },
    souscriptionValue: function souscriptionValue() {
      var _this$meta_data$dossi, _this$meta_data$dossi2;
      var res = 0;
      var dure = Number((_this$meta_data$dossi = this.meta_data.dossier_credit) === null || _this$meta_data$dossi === void 0 || (_this$meta_data$dossi = _this$meta_data$dossi.cred_pub_tb_00) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi.duree_credit) || 0;
      var mode = (_this$meta_data$dossi2 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi2 === void 0 || (_this$meta_data$dossi2 = _this$meta_data$dossi2.cred_pub_tb_1) === null || _this$meta_data$dossi2 === void 0 || (_this$meta_data$dossi2 = _this$meta_data$dossi2.mode_paiement) === null || _this$meta_data$dossi2 === void 0 ? void 0 : _this$meta_data$dossi2.toLowerCase();
      var diviseur = 1;
      if (mode === "mensuelle") {
        diviseur = 1;
        res = dure / diviseur;
      }
      if (mode === "bi-mensuel") {
        diviseur = 2;
        res = dure * diviseur;
      }
      if (mode === "trimestriel") {
        diviseur = 3;
        res = dure / diviseur;
      }
      if (mode === "semestriel") {
        diviseur = 6;
        res = dure / diviseur;
      }
      if (mode === "in fine") {
        diviseur = dure || 1;
        res = dure / diviseur;
      }
      return res;
    }
  },
  data: function data() {
    var vm = this;
    return {
      num_pret_a_rach: "",
      defaultSuretes: [],
      newSurete: "",
      suretes_diverses: [],
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
      duree_credit0: null,
      mode_paiement0: null,
      // credits: [],
      // clients: [],
      // encours: null,
      // placeholder: "Chercher clients",
      // matcli: "matcli",
      // nomcli: "nomcli",
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
      formDataToBeWatched: {
        notes: [],
        avis_rse: ""
      },
      countries: []
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
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (_DEBUG) console.log(">> updateFormDataForDeletion");
              _this3.formDataToBeWatched.is_deleted = true;
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
      var _this4 = this;
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
              if (!_this4.formDataToBeWatched.is_deleted) {
                _context2.next = 5;
                break;
              }
              return _context2.abrupt("return");
            case 5:
              // Upload current (and arguably latest) formDataToBeWatched data

              _this4.uploadDataToServerAndUpdateLastSave(_this4.formDataToBeWatched, _this4.formDataToBeWatched);
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
      var _this5 = this;
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
                  _this5.uploadDataToServerAndUpdateLastSave(newVal, oldVal);
                }
              }
              // First upload
              if (!_lastSaveTime) {
                _this5.uploadDataToServerAndUpdateLastSave(newVal, oldVal);
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
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              if (_DEBUG) console.log(">> uploadDataToServerAndUpdateLastSave");
              _context4.prev = 1;
              if (_DEBUG) console.log(">> this.autosaving");
              _context4.next = 5;
              return _this6.autosaving(newVal, oldVal);
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
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              if (_DEBUG) console.log(">> uploadDataToServerBeforePageCloses");
              _context5.prev = 1;
              _context5.next = 4;
              return _this7.autosaving(newVal, oldVal);
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
      var _this8 = this;
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
              return _this8.autosaving(_this8.formDataToBeWatched, _this8.formDataToBeWatched);
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
    refreshSurete: function refreshSurete(e) {
      var index = this.suretes_diverses.findIndex(function (el) {
        return el.nom == "engagement";
      });
      this.formDataToBeWatched.total_montant_engagement_globale = this.totalEngagementGlobal;
      this.$set(this.suretes_diverses, index, this.engagement_value);
    },
    refreshSurete1: function refreshSurete1(e) {
      var index = this.suretes_diverses.findIndex(function (el) {
        return el.nom == "nantissement";
      });
      this.$set(this.suretes_diverses, index, this.nantissement_dat);
    },
    remove: function remove(index) {
      this.pieces_jointes.splice(index, 1);
      // this.formDataToBeWatched.total_part =
      //     this.totalPartPourcentageActionnariats;
      this.handleInput();
    },
    isChecked: function isChecked(listName) {
      this[listName].push({
        label: "",
        value: false
        // max: this.ActionnariatMaxNumber,
      });
    },
    remove1: function remove1(index) {
      this.cautionnement_solidaires.splice(index, 1);
    },
    removeEngagementGlobale: function removeEngagementGlobale(index) {
      this.engagement_globales.splice(index, 1);
      this.refreshSurete();
    },
    addAutreSurete: function addAutreSurete() {
      if (this.newSurete) {
        this.formDataToBeWatched.autres_suretes_diverses.push({
          label: this.newSurete,
          value: this.newSurete
        });
      }
      this.newSurete = "";
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
      var _this$meta_data$dossi3;
      var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];
      this.defaultRetract(false, (_this$meta_data$dossi3 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi3 === void 0 ? void 0 : _this$meta_data$dossi3.applied_templ_id);
      if (this.meta_data["dossier_credit"][createdKey] == undefined) {
        var value;
        if (this.meta_data["dossier_credit"]["cred_pub_tb_1"] != undefined) {
          var _this$meta_data$dossi4;
          value = Number((_this$meta_data$dossi4 = this.meta_data["dossier_credit"]["cred_pub_tb_1"].echeance) === null || _this$meta_data$dossi4 === void 0 || (_this$meta_data$dossi4 = _this$meta_data$dossi4.echeance) === null || _this$meta_data$dossi4 === void 0 ? void 0 : _this$meta_data$dossi4.toString().replace(/\s/g, ""));
          value = isNaN(value) ? 0 : value;
        } else {
          value = 0;
        }
        this.formDataToBeWatched.montant_engagement = Math.ceil(value * 1.2 / 4);
      }
      if (lentb.length > 0) {
        if (this.meta_data["dossier_credit"][createdKey] != undefined) {
          this.formDataToBeWatched = this.meta_data["dossier_credit"][createdKey];
          // console.log("RSE-FES6");
          // console.log(this.formDataToBeWatched);
        }
      }
    },
    convertNumber: function convertNumber(valeur) {
      return Number(String(valeur).replace(/\s+/g, ""));
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
    addMore: function addMore(listName) {
      this[listName].push({
        article: "",
        proprietaire: "",
        numero_tel: "",
        annee_achat: "",
        adresse_emplacement: "",
        date_evaluation: "",
        valeur_marchande: 0,
        valeur_considere: 0
      });
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
        id: "f46-head"
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
    handleInput: function handleInput(evt) {
      // this.hypotheques.forEach((element, key) => {
      //     element.valeur_considere = this.convertNumber(element.valeur_marchande) * 20 /100
      //     console.log(element.valeur_considere)
      // })
      // this.gages.forEach((element, key) => {
      //     element.valeur_considere = this.convertNumber(element.valeur_marchande) * 20 /100
      //     console.log(element.valeur_considere)
      // })
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES7.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES7.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @johmun/vue-tags-input */ "./node_modules/@johmun/vue-tags-input/dist/vue-tags-input.js");
/* harmony import */ var _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_3__);
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
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_4__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_4__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_4__.ChevronDownIcon,
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_4__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_4__.TrashIcon,
    AirplayIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_4__.AirplayIcon,
    BookOpenIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_4__.BookOpenIcon,
    VueTagsInput: (_johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_3___default())
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
    var roles = ['r472oAxtaFJSlsh5', 'DUxMP2ZQheGFreQt5z2s', 'yYnev325ob1vDkgq'];
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
      var sup_id = (_pub_workflow2 = pub_workflow[stage + 1]) === null || _pub_workflow2 === void 0 ? void 0 : _pub_workflow2.responsible_id;
      var sup = this.filteredUsersDefault.find(function (el) {
        return el.id == sup_id;
      });
      return [caf, ca, sup].filter(function (el) {
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
        fiche_lectures: "",
        notes: []
      },
      fiche_lectures: [{
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
      this.tags[this.fiche_lectures.length] = _toConsumableArray(receivers);
      this.fiche_lectures[0].sender = this.authcheckUsr;
      this.fiche_lectures.push({
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
      this.$set(this.seens, this.fiche_lectures.length - 1, true);
      this.$set(this.isLoding, this.fiche_lectures.length - 1, false);
      this.$set(this.buttonStatus, this.fiche_lectures.length - 1, true);
      console.log("isLoding", this.isLoding);
    },
    removeFiche: function removeFiche(index) {
      this.toDelete = index;
      this.$modal.show("confirm_supp_fiche_lecture", index);
    },
    deleteFiche: function deleteFiche(index) {
      this.fiche_lectures.splice(index, 1);
      this.$modal.hide("confirm_supp_fiche_lecture");
      this.toDelete = '';
    },
    closeModal: function closeModal() {
      this.$modal.hide("confirm_supp_fiche_lecture");
    },
    NotifyUser: function NotifyUser(index) {
      var _this$tags$index,
        _this2 = this;
      if (((_this$tags$index = this.tags[index]) === null || _this$tags$index === void 0 ? void 0 : _this$tags$index.length) > 0) {
        this.$set(this.isLoding, index, true);
        _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["default"].loadUserData().then(function (res) {
          _this2.$axios.post(_this2.ebapisHost + "notifications/api/v1/questions-responses-notifications/", {
            cred_pub_key: _this2.meta_parseable["cred_pub_key"],
            sender: res.data,
            receivers: _this2.tags[index]
          }).then(function (response) {
            _this2.tags = [];
            EventBus.$emit("message-send");
            _this2.$toasted.show("Message envoyé avec succès");
            _this2.$set(_this2.isLoding, index, false);
            _this2.$set(_this2.buttonStatus, index, false);
            _this2.formDataToBeWatched.fiche_lectures[index]["sender"] = res.data;
            _this2.formDataToBeWatched.fiche_lectures[index]["has_notified"] = true;
            _this2.fiche_lectures[index]["has_notified"] = true;
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
      this.fiche_lecture = [[{
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
      var _this$fiche_lectures$;
      (_this$fiche_lectures$ = this.fiche_lectures[index]) === null || _this$fiche_lectures$ === void 0 || _this$fiche_lectures$.fiche.push({
        question: "",
        reponse: "",
        is_answered: false
      });
      this.handleInput();
    },
    remove: function remove(index, idx) {
      this.fiche_lectures[index].fiche.splice(idx, 1);
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
        var _this$meta_data$dossi3;
        if (this.meta_data["dossier_credit"][createdKey] != undefined) {
          this.formDataToBeWatched = this.meta_data["dossier_credit"][createdKey];
          // console.log("RSE-FES7");
          // console.log(this.formDataToBeWatched);
          if (this.meta_data["dossier_credit"][createdKey]["fiche_lectures"] != "") {
            this.fiche_lectures = this.formDataToBeWatched["fiche_lectures"];
            this.tags = this.fiche_lectures.reduce(function (cum, curr, index) {
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
        this.defaultRetract(false, (_this$meta_data$dossi3 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi3 === void 0 ? void 0 : _this$meta_data$dossi3.applied_templ_id);
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
      //console.log("initLoding", this.fiche_lectures)
      if (this.fiche_lectures != undefined) {
        this.fiche_lectures.forEach(function (element, key) {
          _this3.$set(_this3.isLoding, key, false);
        });
      }
    },
    initButtonStatus: function initButtonStatus() {
      var _this4 = this;
      if (this.fiche_lectures != undefined) {
        this.fiche_lectures.forEach(function (element, key) {
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
      this.formDataToBeWatched.fiche_lectures = this.fiche_lectures;
      this.formDataToBeWatched.sender = this.authcheckUsr;
    },
    handleInput1: function handleInput1(evt, index) {
      this.fiche_lectures[index].receivers = this.tags[index];
      this.fiche_lectures[index].notified_users = this.tags[index];
      this.fiche_lectures[index].sender = this.authcheckUsr;
      this.handleInput();
    },
    setButton: function setButton(evt, index) {
      var _this5 = this;
      console.log("index", index);
      console.log("this.fiche_lectures", this.fiche_lectures);
      this.fiche_lectures.forEach(function (element) {
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
            _this7.$toasted.show(message, {
              duration: 5000
            });
          }
          _this7.searchUser = false;
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
      if (this.fiche_lectures[0].receivers == "") {
        this.fiche_lectures[0].receivers = this.defaultActors;
        this.fiche_lectures[0].notified_users = this.defaultActors;
        this.tags[0] = this.defaultActors;
        this.fiche_lectures[0].sender = this.authcheckUsr;
        this.formDataToBeWatched.fiche_lectures = this.fiche_lectures;
      }
    },
    tg: 'initItems'
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES8.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES8.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/ContextMenu */ "./resources/js/components/shared/ContextMenu.vue");
/* harmony import */ var _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/ContextMenuItem */ "./resources/js/components/shared/ContextMenuItem.vue");
/* harmony import */ var _services_connects_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/connects.service */ "./resources/js/services/connects.service.js");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/auth.service */ "./resources/js/services/auth.service.js");
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/nsia/compte_rendu_visite_es/DCEI-PVES1.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/nsia/compte_rendu_visite_es/DCEI-PVES1.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/ContextMenu */ "./resources/js/components/shared/ContextMenu.vue");
/* harmony import */ var _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/ContextMenuItem */ "./resources/js/components/shared/ContextMenuItem.vue");
/* harmony import */ var _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vueform/multiselect/dist/multiselect.vue2 */ "./node_modules/@vueform/multiselect/dist/multiselect.vue2.js");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../helpers/helper */ "./resources/js/helpers/helper.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../helpers/indexedDB */ "./resources/js/helpers/indexedDB.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_helpers_indexedDB__WEBPACK_IMPORTED_MODULE_7__);
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
  name: "Compte_rendu_de_visite_ES_client",
  display: "Compte rendu de visite E&S client",
  components: {
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.TrashIcon,
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.ChevronDownIcon,
    ContextMenu: _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__["default"],
    ContextMenuItem: _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__["default"],
    Multiselect: _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    meta_data: Object,
    tb_name: String,
    tb_display_name: String
  },
  created: function created() {
    var _this = this;
    // EventBus.$on('event-T1',(data)=> {

    //     console.log("Numero prêt à racheter ==> ",data.numero_pret_a_rachete)
    //     // this.retract4()
    // })
    // ? Setup cache listeners and stuff
    // this.setupCache();
    //
    // EventBus.$on('changeIt', (data) => {
    //     alert(data)
    //     this.num_pret_a_rach = data;
    // })

    _services_credit_service__WEBPACK_IMPORTED_MODULE_5__["default"].loadpaysindicatif().then(function (res) {
      _this.countries = res.data;
    })["catch"](function (err) {
      console.log(err);
    });
    _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["default"].loadUserData().then(function (res) {
      var _this$authcheckUsr, _this$authcheckUsr2, _this$authcheckUsr3;
      _this.authcheck = true;
      _this.authcheckUsr = res.data;
      _this.authcheckStatus = res.status;
      _this.formDataToBeWatched.formulaire_rempli_par = (_this$authcheckUsr = _this.authcheckUsr) === null || _this$authcheckUsr === void 0 ? void 0 : _this$authcheckUsr.name;
      _this.formDataToBeWatched.formulaire_rempli_par_email = (_this$authcheckUsr2 = _this.authcheckUsr) === null || _this$authcheckUsr2 === void 0 ? void 0 : _this$authcheckUsr2.email;
      _this.formDataToBeWatched.formulaire_rempli_par_telephone = (_this$authcheckUsr3 = _this.authcheckUsr) === null || _this$authcheckUsr3 === void 0 ? void 0 : _this$authcheckUsr3.contact_whatsap;
    })["catch"](function (err) {
      _this.loadWithError(err);
    });
    console.log('A');
  },
  mounted: function mounted() {
    var _this$meta_data$dossi,
      _this2 = this;
    // Initiate cache

    // // this.initCache();
    //

    var applied_templ_name = (_this$meta_data$dossi = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi.applied_templ_name;
    var tbArrays = this.determineCredPubTables(applied_templ_name);
    this.credpub00 = tbArrays[0];
    EventBus.$on('send-numero-rachat', function (data) {
      // if(data != undefined)
      // {
      /* console.log('length data emit ==> ',data)
      console.log('data emit ==> ',data)
      console.log("taille du tableau => ",this.cond_particulieres.length) */

      var index = _this2.cond_particulieres.findIndex(function (el) {
        return el.cond_name === "numero_pret_a_rachete";
      });
      if (index != -1) {
        var obj = {
          cond_name: "numero_pret_a_rachete",
          cond_description: "Soldé le prêt N° " + data + " à la mise en place du prêt"
        };
        if (data.length > 0) _this2.cond_particulieres.splice(index, 1, obj);else _this2.removeByKey(index, 'cond_particulieres');
      } else {
        _this2.cond_particulieres.push({
          cond_name: "numero_pret_a_rachete",
          cond_description: "Soldé le prêt N° " + data + " à la mise en place du prêt"
        });
        return;
      }
    });
    this.tableClosedOrOpened();
    this.loadRetrieved();
  },
  computed: {},
  data: function data() {
    var vm = this;
    return {
      num_pret_a_rach: "",
      defaultSuretes: [],
      newSurete: "",
      suretes_diverses: [],
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
      duree_credit0: null,
      mode_paiement0: null,
      // credits: [],
      // clients: [],
      // encours: null,
      // placeholder: "Chercher clients",
      // matcli: "matcli",
      // nomcli: "nomcli",
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
      formDataToBeWatched: {
        changement_notables: "",
        impression_sur_la_maitrise: "",
        incident_es_derniere_visite: "",
        actions_mise_en_place: "",
        rapport_annuel: "",
        actions_de_reduction_des_risques: "",
        notes: [],
        //nom_de_la_societe: "",
        convention_credit_numero: "",
        //numero_client_nsia_banque_ci: "",
        site_visite: "",
        formulaire_rempli_par: "",
        formulaire_rempli_par_telephone: "",
        formulaire_rempli_par_email: "",
        formulaire_rempli_par_date: ""
      },
      nom_de_la_societe: "",
      numero_client_nsia_banque_ci: "",
      countries: [],
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
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (_DEBUG) console.log(">> updateFormDataForDeletion");
              _this3.formDataToBeWatched.is_deleted = true;
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
      var _this4 = this;
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
              if (!_this4.formDataToBeWatched.is_deleted) {
                _context2.next = 5;
                break;
              }
              return _context2.abrupt("return");
            case 5:
              // Upload current (and arguably latest) formDataToBeWatched data

              _this4.uploadDataToServerAndUpdateLastSave(_this4.formDataToBeWatched, _this4.formDataToBeWatched);
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
      var _this5 = this;
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
                  _this5.uploadDataToServerAndUpdateLastSave(newVal, oldVal);
                }
              }
              // First upload
              if (!_lastSaveTime) {
                _this5.uploadDataToServerAndUpdateLastSave(newVal, oldVal);
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
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              if (_DEBUG) console.log(">> uploadDataToServerAndUpdateLastSave");
              _context4.prev = 1;
              if (_DEBUG) console.log(">> this.autosaving");
              _context4.next = 5;
              return _this6.autosaving(newVal, oldVal);
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
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              if (_DEBUG) console.log(">> uploadDataToServerBeforePageCloses");
              _context5.prev = 1;
              _context5.next = 4;
              return _this7.autosaving(newVal, oldVal);
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
      var _this8 = this;
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
              return _this8.autosaving(_this8.formDataToBeWatched, _this8.formDataToBeWatched);
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
    refreshSurete: function refreshSurete(e) {
      var index = this.suretes_diverses.findIndex(function (el) {
        return el.nom == "engagement";
      });
      this.formDataToBeWatched.total_montant_engagement_globale = this.totalEngagementGlobal;
      this.$set(this.suretes_diverses, index, this.engagement_value);
    },
    refreshSurete1: function refreshSurete1(e) {
      var index = this.suretes_diverses.findIndex(function (el) {
        return el.nom == "nantissement";
      });
      this.$set(this.suretes_diverses, index, this.nantissement_dat);
    },
    addMore1: function addMore1() {
      this.cautionnement_solidaires.push({
        nom_prenoms: "",
        profession: "",
        indicatif_caution_solidaire: "",
        numero_tel_caution_solidaire: "",
        localisation_caution_solidaire: "",
        revenu_mensuel: 0,
        valeur_patrimoine: 0
      });
      this.handleInput();
    },
    remove1: function remove1(index) {
      this.cautionnement_solidaires.splice(index, 1);
    },
    removeEngagementGlobale: function removeEngagementGlobale(index) {
      this.engagement_globales.splice(index, 1);
      this.refreshSurete();
    },
    addAutreSurete: function addAutreSurete() {
      if (this.newSurete) {
        this.formDataToBeWatched.autres_suretes_diverses.push({
          label: this.newSurete,
          value: this.newSurete
        });
      }
      this.newSurete = "";
    },
    removeAutreSurete: function removeAutreSurete(index) {
      this.formDataToBeWatched.autres_suretes_diverses.splice(index, 1);
    },
    tableClosedOrOpened: function tableClosedOrOpened() {
      this.seen = this.fetchClosedTables(this.tb_name + this.meta_data["cred_pub_key"]);
    },
    openNotesModal: function openNotesModal() {
      var listing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.listingNote = listing;
      this.$modal.show(this.tb_name);
    },
    setCoSignataireVars: function setCoSignataireVars(event, index) {
      this.co_signataire[index][event[0]] = event[1];
      this.handleInput();
    },
    loadRetrieved: function loadRetrieved() {
      var _this$meta_data$dossi2, _this$meta_data$dossi3;
      var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];
      this.defaultRetract(false, (_this$meta_data$dossi2 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi2 === void 0 ? void 0 : _this$meta_data$dossi2.applied_templ_id);
      if (((_this$meta_data$dossi3 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi3 === void 0 ? void 0 : _this$meta_data$dossi3[this.credpub00]) != undefined) {
        var _this$meta_data$dossi4, _this$meta_data$dossi5;
        this.numero_client_nsia_banque_ci = (_this$meta_data$dossi4 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi4 === void 0 || (_this$meta_data$dossi4 = _this$meta_data$dossi4[this.credpub00]) === null || _this$meta_data$dossi4 === void 0 ? void 0 : _this$meta_data$dossi4.matricule_client;
        this.nom_de_la_societe = (_this$meta_data$dossi5 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi5 === void 0 || (_this$meta_data$dossi5 = _this$meta_data$dossi5[this.credpub00]) === null || _this$meta_data$dossi5 === void 0 ? void 0 : _this$meta_data$dossi5.denomination_client;
      }
      if (lentb.length > 0) {
        if (this.meta_data["dossier_credit"][createdKey] != undefined) {
          this.formDataToBeWatched = this.meta_data["dossier_credit"][createdKey];
        }
      }
      // this.defaultSuretes = [
      //
      //     {
      //         label: `Souscription de ${this.souscriptionValue} billets à ordre signés par l'emprunteur`,
      //         value: {
      //             label: `Souscription de ${this.souscriptionValue} billets à ordre signés par l'emprunteur`,
      //             nom: "souscription",
      //             billets: this.souscriptionValue,
      //         },
      //         id: "souscription",
      //     },
      //     {
      //         label: `Dépôt de garantie et compte de réserve du service de la dette (DG + CRSD) à hauteur de ${this.montant_dep_gar_crsd.toLocaleString()} FCFA soit ${this.taux_dep_gar_crsd}% du montant proposé`,
      //         value: {
      //             label: `Dépôt de garantie et compte de réserve du service de la dette (DG + CRSD) à hauteur de ${this.montant_dep_gar_crsd.toLocaleString()} FCFA soit ${this.taux_dep_gar_crsd}% du montant proposé`,
      //             nom: "depot",
      //             taux: this.taux_dep_gar_crsd,
      //             montant: this.montant_dep_gar_crsd,
      //         },
      //         id: "depot",
      //     },
      //     {
      //         label: `Nantissement de stock`,
      //         value: {
      //             label: `Nantissement de stock`,
      //             nom: "nantissement_stock",
      //
      //         },
      //         id: "nantissement_stock",
      //     },
      // {
      //     label: `Nantissement Dat`,
      //     value: {
      //         label: `Nantissement Dat`,
      //         nom: "nantissement_dat",

      //     },
      //     id: "nantissement_dat",
      // },
      // ];

      // this.formDataToBeWatched.suretes_diverses.forEach((el, index) => {
      //     this.defaultSuretes.forEach((elem) => {
      //         if (elem.value.nom === el.nom) {
      //             this.formDataToBeWatched.suretes_diverses[index] =
      //                 elem.value;
      //             // console.log({el: el.label, elem: elem.label})
      //         }
      //     });
      // });

      // Close table by default
      // this.defaultRetract(
      //     false,
      //     this.meta_data["dossier_credit"]?.applied_templ_id
      // );
    },
    convertNumber: function convertNumber(valeur) {
      return Number(String(valeur).replace(/\s+/g, ""));
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
    addMore: function addMore(listName) {
      this[listName].push({
        article: "",
        proprietaire: "",
        numero_tel: "",
        annee_achat: "",
        adresse_emplacement: "",
        date_evaluation: "",
        valeur_marchande: 0,
        valeur_considere: 0
      });
    },
    addCondPart: function addCondPart() {
      this.cond_particulieres.push({
        cond_name: "",
        cond_description: ""
      });
    },
    addEngagementGlobale: function addEngagementGlobale() {
      this.engagement_globales.push({
        montant_engagement_globale: "",
        entreprise_engagement_globale: ""
      });
    },
    somX3: function somX3(ob, key) {
      var som = 0;
      ob.filter(function (elm) {
        var _elm$key;
        som += parseInt((_elm$key = elm[key]) === null || _elm$key === void 0 ? void 0 : _elm$key.toString().replace(/\s/g, ""));
      });
      return som;
    },
    remove: function remove(index, removeList) {
      this[removeList].splice(index, 1);
      this.formDataToBeWatched["total_" + removeList + "_valeur_marchande"] = this.somX3(this[removeList], "valeur_marchande");
      this.formDataToBeWatched["total_" + removeList + "_valeur_considere"] = this.somX3(this[removeList], "valeur_considere");
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
        id: "f23-head"
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
        EventBus.$emit("autosaving");
        this.$axios.post(this.ebapisHost + "creditbuilder/api/v1/autosaving/", {
          user: this.authcheckUsr,
          meta_parseable: this.meta_parseable,
          filledData: this.formDataToBeWatched
        }).then(function (response) {
          EventBus.$emit("autosaving");
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
      // this.hypotheques.forEach((element, key) => {
      //     element.valeur_considere = this.convertNumber(element.valeur_marchande) * 20 /100
      //     console.log(element.valeur_considere)
      // })
      // this.gages.forEach((element, key) => {
      //     element.valeur_considere = this.convertNumber(element.valeur_marchande) * 20 /100
      //     console.log(element.valeur_considere)
      // })
      this.formDataToBeWatched["engagement_globales"] = this.engagement_globales;
      this.formDataToBeWatched.total_montant_engagement_globale = this.totalEngagementGlobal;
      this.formDataToBeWatched.total_hypotheques_valeur_marchande = this.somX3(this.hypotheques, "valeur_marchande");
      this.formDataToBeWatched.total_hypotheques_valeur_considere = this.somX3(this.hypotheques, "valeur_considere");
      this.formDataToBeWatched.total_gages_valeur_marchande = this.somX3(this.gages, "valeur_marchande");
      this.formDataToBeWatched.total_gages_valeur_considere = this.somX3(this.gages, "valeur_considere");
      this.formDataToBeWatched["hypotheques"] = this.hypotheques;
      this.formDataToBeWatched["gages"] = this.gages;
      this.formDataToBeWatched["suretes_diverses"] = this.suretes_diverses;
      this.formDataToBeWatched["co_signataire"] = this.co_signataire;
      this.formDataToBeWatched["cond_particulieres"] = this.cond_particulieres;
      this.formDataToBeWatched["cautionnement_solidaires"] = this.cautionnement_solidaires;
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
    },
    formDataVars: function formDataVars(event) {
      this.formDataToBeWatched[event[0]] = event[1];
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/nsia/form_remonte_inc_es/DCEI-FRES1.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/nsia/form_remonte_inc_es/DCEI-FRES1.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/ContextMenu */ "./resources/js/components/shared/ContextMenu.vue");
/* harmony import */ var _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/ContextMenuItem */ "./resources/js/components/shared/ContextMenuItem.vue");
/* harmony import */ var _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vueform/multiselect/dist/multiselect.vue2 */ "./node_modules/@vueform/multiselect/dist/multiselect.vue2.js");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../helpers/helper */ "./resources/js/helpers/helper.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../helpers/indexedDB */ "./resources/js/helpers/indexedDB.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_helpers_indexedDB__WEBPACK_IMPORTED_MODULE_7__);
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
  name: "Formulaire_de_remontee_d_incident_ES",
  display: "Formulaire de remontée d'incident E&S",
  components: {
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.TrashIcon,
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.ChevronDownIcon,
    ContextMenu: _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__["default"],
    ContextMenuItem: _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__["default"],
    Multiselect: _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    meta_data: Object,
    tb_name: String,
    tb_display_name: String
  },
  created: function created() {
    var _this = this;
    // EventBus.$on('event-T1',(data)=> {

    //     console.log("Numero prêt à racheter ==> ",data.numero_pret_a_rachete)
    //     // this.retract4()
    // })
    // ? Setup cache listeners and stuff
    // this.setupCache();
    //
    // EventBus.$on('changeIt', (data) => {
    //     alert(data)
    //     this.num_pret_a_rach = data;
    // })

    _services_credit_service__WEBPACK_IMPORTED_MODULE_5__["default"].loadpaysindicatif().then(function (res) {
      _this.countries = res.data;
    })["catch"](function (err) {
      console.log(err);
    });
    _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["default"].loadUserData().then(function (res) {
      var _this$authcheckUsr, _this$authcheckUsr2, _this$authcheckUsr3;
      _this.authcheck = true;
      _this.authcheckUsr = res.data;
      _this.authcheckStatus = res.status;
      _this.formDataToBeWatched.formulaire_rempli_par = (_this$authcheckUsr = _this.authcheckUsr) === null || _this$authcheckUsr === void 0 ? void 0 : _this$authcheckUsr.name;
      _this.formDataToBeWatched.formulaire_rempli_par_email = (_this$authcheckUsr2 = _this.authcheckUsr) === null || _this$authcheckUsr2 === void 0 ? void 0 : _this$authcheckUsr2.email;
      _this.formDataToBeWatched.formulaire_rempli_par_telephone = (_this$authcheckUsr3 = _this.authcheckUsr) === null || _this$authcheckUsr3 === void 0 ? void 0 : _this$authcheckUsr3.contact_whatsap;
    })["catch"](function (err) {
      _this.loadWithError(err);
    });
  },
  mounted: function mounted() {
    var _this$meta_data$dossi,
      _this2 = this;
    // Initiate cache

    // // this.initCache();
    //

    var applied_templ_name = (_this$meta_data$dossi = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi.applied_templ_name;
    var tbArrays = this.determineCredPubTables(applied_templ_name);
    this.credpub00 = tbArrays[0];
    EventBus.$on('send-numero-rachat', function (data) {
      // if(data != undefined)
      // {
      console.log('length data emit ==> ', data);
      console.log('data emit ==> ', data);
      console.log("taille du tableau => ", _this2.cond_particulieres.length);
      var index = _this2.cond_particulieres.findIndex(function (el) {
        return el.cond_name === "numero_pret_a_rachete";
      });
      if (index != -1) {
        var obj = {
          cond_name: "numero_pret_a_rachete",
          cond_description: "Soldé le prêt N° " + data + " à la mise en place du prêt"
        };
        if (data.length > 0) _this2.cond_particulieres.splice(index, 1, obj);else _this2.removeByKey(index, 'cond_particulieres');
      } else {
        _this2.cond_particulieres.push({
          cond_name: "numero_pret_a_rachete",
          cond_description: "Soldé le prêt N° " + data + " à la mise en place du prêt"
        });
        return;
      }
    });
    this.tableClosedOrOpened();
    this.loadRetrieved();
  },
  computed: {},
  data: function data() {
    var vm = this;
    return {
      num_pret_a_rach: "",
      defaultSuretes: [],
      newSurete: "",
      suretes_diverses: [],
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
      duree_credit0: null,
      mode_paiement0: null,
      // credits: [],
      // clients: [],
      // encours: null,
      // placeholder: "Chercher clients",
      // matcli: "matcli",
      // nomcli: "nomcli",
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
      formDataToBeWatched: {
        incident_date: "",
        incident_heure: "",
        incident_lieu: "",
        que_s_est_il_produit: "",
        nature_des_consequences: "",
        blessures_sur_despersonnes: "",
        si_oui_decrivez_les_blessures: "",
        intervention_des_services: "",
        quelles_causes_ont_ete_identifiees: "",
        actions_correctives: "",
        si_oui_decrivez: "",
        //nom_de_la_societe: "",
        convention_credit_numero: "",
        //numero_client_nsia_banque_ci: "",
        formulaire_rempli_par: "",
        formulaire_rempli_par_telephone: "",
        formulaire_rempli_par_email: "",
        formulaire_rempli_par_date: "",
        commentaires_action_corrective: "",
        action_correctives: [],
        notes: []
      },
      action_correctives: [{
        actions_correctives: "",
        delai_realisation: "",
        commentaire: ""
      }],
      nom_de_la_societe: "",
      numero_client_nsia_banque_ci: "",
      countries: [],
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
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (_DEBUG) console.log(">> updateFormDataForDeletion");
              _this3.formDataToBeWatched.is_deleted = true;
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
      var _this4 = this;
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
              if (!_this4.formDataToBeWatched.is_deleted) {
                _context2.next = 5;
                break;
              }
              return _context2.abrupt("return");
            case 5:
              // Upload current (and arguably latest) formDataToBeWatched data

              _this4.uploadDataToServerAndUpdateLastSave(_this4.formDataToBeWatched, _this4.formDataToBeWatched);
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
      var _this5 = this;
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
                  _this5.uploadDataToServerAndUpdateLastSave(newVal, oldVal);
                }
              }
              // First upload
              if (!_lastSaveTime) {
                _this5.uploadDataToServerAndUpdateLastSave(newVal, oldVal);
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
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              if (_DEBUG) console.log(">> uploadDataToServerAndUpdateLastSave");
              _context4.prev = 1;
              if (_DEBUG) console.log(">> this.autosaving");
              _context4.next = 5;
              return _this6.autosaving(newVal, oldVal);
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
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              if (_DEBUG) console.log(">> uploadDataToServerBeforePageCloses");
              _context5.prev = 1;
              _context5.next = 4;
              return _this7.autosaving(newVal, oldVal);
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
      var _this8 = this;
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
              return _this8.autosaving(_this8.formDataToBeWatched, _this8.formDataToBeWatched);
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
    refreshSurete: function refreshSurete(e) {
      var index = this.suretes_diverses.findIndex(function (el) {
        return el.nom == "engagement";
      });
      this.formDataToBeWatched.total_montant_engagement_globale = this.totalEngagementGlobal;
      this.$set(this.suretes_diverses, index, this.engagement_value);
    },
    refreshSurete1: function refreshSurete1(e) {
      var index = this.suretes_diverses.findIndex(function (el) {
        return el.nom == "nantissement";
      });
      this.$set(this.suretes_diverses, index, this.nantissement_dat);
    },
    addMore1: function addMore1() {
      this.cautionnement_solidaires.push({
        nom_prenoms: "",
        profession: "",
        indicatif_caution_solidaire: "",
        numero_tel_caution_solidaire: "",
        localisation_caution_solidaire: "",
        revenu_mensuel: 0,
        valeur_patrimoine: 0
      });
      this.handleInput();
    },
    remove1: function remove1(index) {
      this.cautionnement_solidaires.splice(index, 1);
    },
    addMore3: function addMore3() {
      this.action_correctives.push({
        actions_correctives: "",
        delai_realisation: "",
        commentaire: ""
      });
    },
    remove3: function remove3(index) {
      this.action_correctives.splice(index, 1);
    },
    removeEngagementGlobale: function removeEngagementGlobale(index) {
      this.engagement_globales.splice(index, 1);
      this.refreshSurete();
    },
    addAutreSurete: function addAutreSurete() {
      if (this.newSurete) {
        this.formDataToBeWatched.autres_suretes_diverses.push({
          label: this.newSurete,
          value: this.newSurete
        });
      }
      this.newSurete = "";
    },
    removeAutreSurete: function removeAutreSurete(index) {
      this.formDataToBeWatched.autres_suretes_diverses.splice(index, 1);
    },
    tableClosedOrOpened: function tableClosedOrOpened() {
      this.seen = this.fetchClosedTables(this.tb_name + this.meta_data["cred_pub_key"]);
    },
    openNotesModal: function openNotesModal() {
      var listing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.listingNote = listing;
      this.$modal.show(this.tb_name);
    },
    setCoSignataireVars: function setCoSignataireVars(event, index) {
      this.co_signataire[index][event[0]] = event[1];
      this.handleInput();
    },
    loadRetrieved: function loadRetrieved() {
      var _this$meta_data$dossi2, _this$meta_data$dossi3;
      var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];
      this.defaultRetract(false, (_this$meta_data$dossi2 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi2 === void 0 ? void 0 : _this$meta_data$dossi2.applied_templ_id);
      if (((_this$meta_data$dossi3 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi3 === void 0 ? void 0 : _this$meta_data$dossi3[this.credpub00]) != undefined) {
        var _this$meta_data$dossi4, _this$meta_data$dossi5;
        this.numero_client_nsia_banque_ci = (_this$meta_data$dossi4 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi4 === void 0 || (_this$meta_data$dossi4 = _this$meta_data$dossi4[this.credpub00]) === null || _this$meta_data$dossi4 === void 0 ? void 0 : _this$meta_data$dossi4.matricule_client;
        this.nom_de_la_societe = (_this$meta_data$dossi5 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi5 === void 0 || (_this$meta_data$dossi5 = _this$meta_data$dossi5[this.credpub00]) === null || _this$meta_data$dossi5 === void 0 ? void 0 : _this$meta_data$dossi5.denomination_client;
      }
      if (lentb.length > 0) {
        var _this$meta_data$dossi6;
        if (this.meta_data["dossier_credit"][createdKey] != undefined) {
          this.formDataToBeWatched = this.meta_data["dossier_credit"][createdKey];
        }
        if (((_this$meta_data$dossi6 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi6 === void 0 ? void 0 : _this$meta_data$dossi6.action_correctives) != undefined) {
          var _this$meta_data$dossi7;
          if (((_this$meta_data$dossi7 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi7 === void 0 ? void 0 : _this$meta_data$dossi7.action_correctives) != "") {
            this.action_correctives = this.meta_data["dossier_credit"][createdKey]["action_correctives"];
          }
        }
      }
    },
    convertNumber: function convertNumber(valeur) {
      return Number(String(valeur).replace(/\s+/g, ""));
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
    addMore: function addMore(listName) {
      this[listName].push({
        article: "",
        proprietaire: "",
        numero_tel: "",
        annee_achat: "",
        adresse_emplacement: "",
        date_evaluation: "",
        valeur_marchande: 0,
        valeur_considere: 0
      });
    },
    addCondPart: function addCondPart() {
      this.cond_particulieres.push({
        cond_name: "",
        cond_description: ""
      });
    },
    addEngagementGlobale: function addEngagementGlobale() {
      this.engagement_globales.push({
        montant_engagement_globale: "",
        entreprise_engagement_globale: ""
      });
    },
    somX3: function somX3(ob, key) {
      var som = 0;
      ob.filter(function (elm) {
        var _elm$key;
        som += parseInt((_elm$key = elm[key]) === null || _elm$key === void 0 ? void 0 : _elm$key.toString().replace(/\s/g, ""));
      });
      return som;
    },
    remove: function remove(index, removeList) {
      this[removeList].splice(index, 1);
      this.formDataToBeWatched["total_" + removeList + "_valeur_marchande"] = this.somX3(this[removeList], "valeur_marchande");
      this.formDataToBeWatched["total_" + removeList + "_valeur_considere"] = this.somX3(this[removeList], "valeur_considere");
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
        id: "f24-head"
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
        EventBus.$emit("autosaving");
        this.$axios.post(this.ebapisHost + "creditbuilder/api/v1/autosaving/", {
          user: this.authcheckUsr,
          meta_parseable: this.meta_parseable,
          filledData: this.formDataToBeWatched
        }).then(function (response) {
          EventBus.$emit("autosaving");
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
      this.formDataToBeWatched["action_correctives"] = this.action_correctives;
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
    retract5: function retract5() {
      this.seen5 = !this.seen5;
    },
    deleteTB: function deleteTB() {
      if (confirm("Êtes-vous sûr de vouloir supprimer ce tableau ?")) {
        this.$emit("delete-tb", {
          tb_name: this.tb_name
        });
      }
    },
    formDataVars: function formDataVars(event) {
      this.formDataToBeWatched[event[0]] = event[1];
    },
    checkboxVal: function checkboxVal(event, vars) {
      if (event.target.checked) {
        this.formDataToBeWatched[vars] = event.target.value;
      } else {
        this.formDataToBeWatched[vars] = "";
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/workspace/nsia/WorkspaceOnRSEAnlCenter.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/workspace/nsia/WorkspaceOnRSEAnlCenter.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _forms_nsia_cr2_F0010_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../forms/nsia/cr2/F0010.vue */ "./resources/js/components/forms/nsia/cr2/F0010.vue");
/* harmony import */ var _forms_nsia_cr2_F0_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../forms/nsia/cr2/F0.vue */ "./resources/js/components/forms/nsia/cr2/F0.vue");
/* harmony import */ var _forms_nsia_cr2_F1_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../forms/nsia/cr2/F1.vue */ "./resources/js/components/forms/nsia/cr2/F1.vue");
/* harmony import */ var _forms_nsia_cr2_F2_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../forms/nsia/cr2/F2.vue */ "./resources/js/components/forms/nsia/cr2/F2.vue");
/* harmony import */ var _forms_nsia_cr2_F3_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../forms/nsia/cr2/F3.vue */ "./resources/js/components/forms/nsia/cr2/F3.vue");
/* harmony import */ var _forms_nsia_cr2_F4_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../forms/nsia/cr2/F4.vue */ "./resources/js/components/forms/nsia/cr2/F4.vue");
/* harmony import */ var _forms_nsia_cr2_F5_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../forms/nsia/cr2/F5.vue */ "./resources/js/components/forms/nsia/cr2/F5.vue");
/* harmony import */ var _forms_nsia_cr2_F6_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../forms/nsia/cr2/F6.vue */ "./resources/js/components/forms/nsia/cr2/F6.vue");
/* harmony import */ var _forms_nsia_cr2_F7_vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../forms/nsia/cr2/F7.vue */ "./resources/js/components/forms/nsia/cr2/F7.vue");
/* harmony import */ var _forms_nsia_cr2_F8_vue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../forms/nsia/cr2/F8.vue */ "./resources/js/components/forms/nsia/cr2/F8.vue");
/* harmony import */ var _forms_nsia_cr2_F9_vue__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../forms/nsia/cr2/F9.vue */ "./resources/js/components/forms/nsia/cr2/F9.vue");
/* harmony import */ var _forms_nsia_cr2_F10_vue__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../forms/nsia/cr2/F10.vue */ "./resources/js/components/forms/nsia/cr2/F10.vue");
/* harmony import */ var _forms_nsia_cr2_F11_vue__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../forms/nsia/cr2/F11.vue */ "./resources/js/components/forms/nsia/cr2/F11.vue");
/* harmony import */ var _forms_nsia_cr2_F12_vue__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../forms/nsia/cr2/F12.vue */ "./resources/js/components/forms/nsia/cr2/F12.vue");
/* harmony import */ var _forms_nsia_cr2_F13_vue__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../forms/nsia/cr2/F13.vue */ "./resources/js/components/forms/nsia/cr2/F13.vue");
/* harmony import */ var _forms_nsia_cr2_F14_vue__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../forms/nsia/cr2/F14.vue */ "./resources/js/components/forms/nsia/cr2/F14.vue");
/* harmony import */ var _forms_nsia_cr2_F15_vue__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../forms/nsia/cr2/F15.vue */ "./resources/js/components/forms/nsia/cr2/F15.vue");
/* harmony import */ var _forms_nsia_cr2_F16_vue__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../forms/nsia/cr2/F16.vue */ "./resources/js/components/forms/nsia/cr2/F16.vue");
/* harmony import */ var _forms_nsia_cr2_F17_vue__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../forms/nsia/cr2/F17.vue */ "./resources/js/components/forms/nsia/cr2/F17.vue");
/* harmony import */ var _forms_nsia_cr2_F18_vue__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../forms/nsia/cr2/F18.vue */ "./resources/js/components/forms/nsia/cr2/F18.vue");
/* harmony import */ var _forms_nsia_cr2_F19_vue__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../forms/nsia/cr2/F19.vue */ "./resources/js/components/forms/nsia/cr2/F19.vue");
/* harmony import */ var _forms_nsia_notification_acc_DCEI_NACC1_vue__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../forms/nsia/notification_acc/DCEI-NACC1.vue */ "./resources/js/components/forms/nsia/notification_acc/DCEI-NACC1.vue");
/* harmony import */ var _forms_nsia_notification_acc_DCEI_NACC2_vue__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../forms/nsia/notification_acc/DCEI-NACC2.vue */ "./resources/js/components/forms/nsia/notification_acc/DCEI-NACC2.vue");
/* harmony import */ var _forms_nsia_notification_acc_DCEI_NACC3_vue__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../forms/nsia/notification_acc/DCEI-NACC3.vue */ "./resources/js/components/forms/nsia/notification_acc/DCEI-NACC3.vue");
/* harmony import */ var _forms_nsia_notification_acc_DCEI_NACC4_vue__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../forms/nsia/notification_acc/DCEI-NACC4.vue */ "./resources/js/components/forms/nsia/notification_acc/DCEI-NACC4.vue");
/* harmony import */ var _activiterse_filiale_RSE_FES1_vue__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../activiterse/filiale/RSE-FES1.vue */ "./resources/js/components/activiterse/filiale/RSE-FES1.vue");
/* harmony import */ var _activiterse_filiale_RSE_FES2_vue__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../activiterse/filiale/RSE-FES2.vue */ "./resources/js/components/activiterse/filiale/RSE-FES2.vue");
/* harmony import */ var _activiterse_filiale_RSE_FES3_vue__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../activiterse/filiale/RSE-FES3.vue */ "./resources/js/components/activiterse/filiale/RSE-FES3.vue");
/* harmony import */ var _activiterse_filiale_RSE_FES4_vue__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../activiterse/filiale/RSE-FES4.vue */ "./resources/js/components/activiterse/filiale/RSE-FES4.vue");
/* harmony import */ var _activiterse_filiale_RSE_FES5_vue__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../activiterse/filiale/RSE-FES5.vue */ "./resources/js/components/activiterse/filiale/RSE-FES5.vue");
/* harmony import */ var _activiterse_filiale_RSE_FES6_vue__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../activiterse/filiale/RSE-FES6.vue */ "./resources/js/components/activiterse/filiale/RSE-FES6.vue");
/* harmony import */ var _activiterse_filiale_RSE_FES7_vue__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../activiterse/filiale/RSE-FES7.vue */ "./resources/js/components/activiterse/filiale/RSE-FES7.vue");
/* harmony import */ var _activiterse_filiale_RSE_FES8_vue__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../activiterse/filiale/RSE-FES8.vue */ "./resources/js/components/activiterse/filiale/RSE-FES8.vue");
/* harmony import */ var _forms_nsia_compte_rendu_visite_es_DCEI_PVES1_vue__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../../forms/nsia/compte_rendu_visite_es/DCEI-PVES1.vue */ "./resources/js/components/forms/nsia/compte_rendu_visite_es/DCEI-PVES1.vue");
/* harmony import */ var _forms_nsia_form_remonte_inc_es_DCEI_FRES1_vue__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../../forms/nsia/form_remonte_inc_es/DCEI-FRES1.vue */ "./resources/js/components/forms/nsia/form_remonte_inc_es/DCEI-FRES1.vue");
/* harmony import */ var _widgets_MenuTab_vue__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../../widgets/MenuTab.vue */ "./resources/js/components/widgets/MenuTab.vue");



 // Veuillez deposer les tableaux ici
/*------------------------------- Noms des tableaux du Résumé cas (nsia)--------------------------------------------*/
 // Fichiers annexes
// import tb002 from "../../forms/nsia/cr2/F002.vue"; // Documentation soumise
 // Mail d'approbation
 // 1.	T 0 --> Fiche signalétique (T0)
 // 2.	T 1 --> Simulation de prêt – T1
 // 3.	T 2 --> Présentation de l'entreprise cliente – T2
 // 4.	T 3 --> Sûretés proposées et garanties – T13
 // 5.	T 4 --> Evaluation et structuration de l'opération -T12
 // 6.	T 5 --> Condition de ventes et d'approvisionnement – T7
 // 7.	T 6 --> Stocks – TI 9
 // 8.	T 7 --> TOP 10 des ventes et marge brute – TI 10
 // 9.	T 8 --> Estimations des ventes – TI 17
 // 10.	T 9 --> Estimations des achats – TI 18
 // 11.	T 10 --> Immobilisations – TI 12
 // 12.	T 11 --> Principaux débiteurs & créanciers – TI 2
 // 13.	T 12 --> Bilan – TI 1
 // 14.	T 13 --> Compte de résultat – TI 6
 // 15.	T 14 --> Ratios – TI 4
 // 16.	T 15 --> Actionnariat – TB3
 // 17. T 16 -->  Gouvernance, Ressources Humaines & Organisation – TB6
 // 18.	T 17 --> Historiques des crédits – TB 4
 // 19.	T 18 --> Analyse des relevés bancaires – TI 7
 // 20.	T 19 --> TMC Analyse des comptes courants et d'épargne – TB 11
/*------------------------------- Noms des tableaux du Résumé ends  cas (nsia)--------------------------------------------*/

/*------------------------- Notification d'accord-----------------------------------------*/
 // 20.	T 19 --> TMC Analyse des comptes courants et d'épargne – TB 11
 // 20.	T 19 --> TMC Analyse des comptes courants et d'épargne – TB 11
 // 20.	T 19 --> TMC Analyse des comptes courants et d'épargne – TB 11
 // 20.	T 19 --> TMC Analyse des comptes courants et d'épargne – TB 11
/*------------------------- Notification d'accord-----------------------------------------*/

/*------------------------- Fiche de Screening E&S de Crédit -----------------------------------------*/
 // 20.	T 19 --> TMC Analyse des comptes courants et d'épargne – TB 11
 // 20.	T 19 --> TMC Analyse des comptes courants et d'épargne – TB 11
 // 20.	T 19 --> TMC Analyse des comptes courants et d'épargne – TB 11
 // 20.	T 19 --> TMC Analyse des comptes courants et d'épargne – TB 11
 // 20.	T 19 --> TMC Analyse des comptes courants et d'épargne – TB 11
 // 20.	T 19 --> TMC Analyse des comptes courants et d'épargne – TB 11
 // 20.	T 19 --> TMC Analyse des comptes courants et d'épargne – TB 11
 // 20.	T 19 --> TMC Analyse des comptes courants et d'épargne – TB 11

/*------------------------- Fiche de Screening E&S de Crédit -----------------------------------------*/

/*------------------------- Compte rendu de visite E&S client-----------------------------------------*/

/*------------------------- Compte rendu de visite E&S client-----------------------------------------*/

/*------------------------- Formulaire de remontée d'incident E&S-----------------------------------------*/

/*------------------------- Formulaire de remontée d'incident E&S-----------------------------------------*/

/*------------------------- Checklist critère d'éligibilité à l'analyse de risque-----------------------------------------*/
//import tb1001 from "../../forms/nsia/DCEI-CHC1.vue"; // Checklist critère d'éligibilité à l'analyse de risque
/*------------------------- Checklist critère d'éligibilité à l'analyse de risque-----------------------------------------*/

/*------------------------- Fiche d'engagement groupe-----------------------------------------*/
//import tb21001 from "../../forms/nsia/fiche_engagement_groupe/DC-ENGG1.vue"; // Fiche des engagements du groupe
/*------------------------- Fiche d'engagement groupe-----------------------------------------*/

//Import tabs menu

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "WorkspaceOnRSEAnlCenter",
  props: {
    cred_pub_key: String,
    list2: Array,
    dossier_credit: Object
  },
  components: {
    tb0: _tables_annexes_TB0_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    tb00: _forms_nsia_cr2_F0_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    // tb000,
    tb001: _forms_nsia_cr2_F001_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    // tb002,
    tb0010: _forms_nsia_cr2_F0010_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    tb1: _forms_nsia_cr2_F1_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    tb2: _forms_nsia_cr2_F2_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    tb3: _forms_nsia_cr2_F3_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    tb4: _forms_nsia_cr2_F4_vue__WEBPACK_IMPORTED_MODULE_10__["default"],
    tb5: _forms_nsia_cr2_F5_vue__WEBPACK_IMPORTED_MODULE_11__["default"],
    tb6: _forms_nsia_cr2_F6_vue__WEBPACK_IMPORTED_MODULE_12__["default"],
    tb7: _forms_nsia_cr2_F7_vue__WEBPACK_IMPORTED_MODULE_13__["default"],
    tb8: _forms_nsia_cr2_F8_vue__WEBPACK_IMPORTED_MODULE_14__["default"],
    tb9: _forms_nsia_cr2_F9_vue__WEBPACK_IMPORTED_MODULE_15__["default"],
    tb10: _forms_nsia_cr2_F10_vue__WEBPACK_IMPORTED_MODULE_16__["default"],
    tb11: _forms_nsia_cr2_F11_vue__WEBPACK_IMPORTED_MODULE_17__["default"],
    tb12: _forms_nsia_cr2_F12_vue__WEBPACK_IMPORTED_MODULE_18__["default"],
    tb13: _forms_nsia_cr2_F13_vue__WEBPACK_IMPORTED_MODULE_19__["default"],
    tb14: _forms_nsia_cr2_F14_vue__WEBPACK_IMPORTED_MODULE_20__["default"],
    tb15: _forms_nsia_cr2_F15_vue__WEBPACK_IMPORTED_MODULE_21__["default"],
    tb16: _forms_nsia_cr2_F16_vue__WEBPACK_IMPORTED_MODULE_22__["default"],
    tb17: _forms_nsia_cr2_F17_vue__WEBPACK_IMPORTED_MODULE_23__["default"],
    tb18: _forms_nsia_cr2_F18_vue__WEBPACK_IMPORTED_MODULE_24__["default"],
    tb19: _forms_nsia_cr2_F19_vue__WEBPACK_IMPORTED_MODULE_25__["default"],
    /*--------------- Notification d'accord---------------------*/
    tb7001: _forms_nsia_notification_acc_DCEI_NACC1_vue__WEBPACK_IMPORTED_MODULE_26__["default"],
    tb7002: _forms_nsia_notification_acc_DCEI_NACC2_vue__WEBPACK_IMPORTED_MODULE_27__["default"],
    tb7003: _forms_nsia_notification_acc_DCEI_NACC3_vue__WEBPACK_IMPORTED_MODULE_28__["default"],
    tb7004: _forms_nsia_notification_acc_DCEI_NACC4_vue__WEBPACK_IMPORTED_MODULE_29__["default"],
    /*-------------- Notification d'accord---------------------*/

    /*------------------------- Fiche de Screening E&S de Crédit -----------------------------------------*/
    tb22001: _activiterse_filiale_RSE_FES1_vue__WEBPACK_IMPORTED_MODULE_30__["default"],
    tb22002: _activiterse_filiale_RSE_FES2_vue__WEBPACK_IMPORTED_MODULE_31__["default"],
    tb22003: _activiterse_filiale_RSE_FES3_vue__WEBPACK_IMPORTED_MODULE_32__["default"],
    tb22004: _activiterse_filiale_RSE_FES4_vue__WEBPACK_IMPORTED_MODULE_33__["default"],
    tb22005: _activiterse_filiale_RSE_FES5_vue__WEBPACK_IMPORTED_MODULE_34__["default"],
    tb22006: _activiterse_filiale_RSE_FES6_vue__WEBPACK_IMPORTED_MODULE_35__["default"],
    tb22007: _activiterse_filiale_RSE_FES7_vue__WEBPACK_IMPORTED_MODULE_36__["default"],
    tb22008: _activiterse_filiale_RSE_FES8_vue__WEBPACK_IMPORTED_MODULE_37__["default"],
    /*------------------------- Fiche de Screening E&S de Crédit -----------------------------------------*/

    /*------------------------- Compte rendu de visite E&S client-----------------------------------------*/
    tb8001: _forms_nsia_compte_rendu_visite_es_DCEI_PVES1_vue__WEBPACK_IMPORTED_MODULE_38__["default"],
    /*------------------------- Compte rendu de visite E&S client-----------------------------------------*/

    /*------------------------- Formulaire de remontée d'incident E&S-----------------------------------------*/
    tb6001: _forms_nsia_form_remonte_inc_es_DCEI_FRES1_vue__WEBPACK_IMPORTED_MODULE_39__["default"],
    /*------------------------- Formulaire de remontée d'incident E&S-----------------------------------------*/

    /*------------------------- Checklist critère d'éligibilité à l'analyse de risque-----------------------------------------*/
    //tb1001,
    /*------------------------- Checklist critère d'éligibilité à l'analyse de risque-----------------------------------------*/

    /*------------------------- Fiche d'engagement groupe-----------------------------------------*/
    //tb21001,
    /*------------------------- Fiche d'engagement groupe-----------------------------------------*/
    MenuTab: _widgets_MenuTab_vue__WEBPACK_IMPORTED_MODULE_40__["default"]
  },
  data: function data() {
    var vm = this;
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
      producMemo: 'tp_page missing memorandum',
      producContreAnl: 'contre-analyse',
      contextList: [
      // Ajouter note
      {
        title: "Commenter",
        icon: "icofont icofont-comment",
        handler: vm.openNotesModal,
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
    openNotesModal: function openNotesModal() {
      var cred_pub_key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var tb_name = arguments.length > 1 ? arguments[1] : undefined;
      //console.log(tb_name);
      EventBus.$emit("add-comment", false);
      this.$modal.show(tb_name);
    },
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
            var componentName = 'tb' + idx2;
            if (idx2 == 0) {
              componentName = 'tb00';
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
    setSideLoad: function setSideLoad($event) {
      var tb_name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      this.$emit("sidelist-updated", $event);
      // let cards = document.querySelectorAll(
      //     "#" + $event.id + " .col-auto"
      // );
      // //console.log(cards);

      // cards.forEach((card,index) => {
      //     let lastChild = card.lastElementChild;
      //     //console.log(lastChild);
      //     let container = document.createElement("div");
      //     // Insert the new node before the last child element
      //     card.insertBefore(container, lastChild);
      //     // reactivate the right clic
      //     if (index === 0) {
      //         let table = card.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
      //         const children = Array.from(table.childNodes);
      //         let NewTable = document.createElement("div")

      //         Array.from(table.attributes).forEach(attr => {
      //             NewTable.setAttribute(attr.name, attr.value);
      //         })
      //         table.replaceWith(NewTable)
      //         children.forEach((child) => {
      //             NewTable.appendChild(child)
      //         })
      //     }
      //     let propsData = {
      //         //ref:"menu",
      //         id: tb_name,
      //         tb_name: tb_name,
      //         cred_pub_key: this.cred_pub_key,
      //         contextList: this.contextList,
      //     };
      //     //console.log(propsData);
      //     new Vue({
      //         render: (h) => h(MenuTab, { props: propsData }),
      //     }).$mount(container);
      // });
      // // DELETE THE CONTEXT MENU
      // if (![null, undefined].includes(document.querySelector('#context-menu' + tb_name))) {
      //     document.querySelector('#context-menu' + tb_name).remove()
      // }
    },
    setAutosaving: function setAutosaving() {
      this.$emit('autosaving-updated');
    },
    loadShell: function loadShell() {
      this.$emit("value-updated");
    },
    setInVal: function setInVal(dossier_credit, doc_tobe_produced) {
      //console.log('setInVal')
      this.dossier_credit = dossier_credit;
      this.doc_tobe_produced = doc_tobe_produced;
    },
    removeTb: function removeTb(component_name) {
      if (confirm('Voulez-vous vraiment supprimer ce tableau ? Parce que toutes les données du tableau seront supprimées après cette action !')) {
        this.listOfComponents = this.listOfComponents.filter(function (data) {
          return data.component_name !== component_name;
        });
        this.$toasted.show('Tableau supprimé avec succès');
      }
    },
    styleDoc: function styleDoc() {
      if (this.doc_tobe_produced === 'MEMORANDUM_CREDIT' || this.doc_tobe_produced === '' || this.doc_tobe_produced === 'REVIEW_CONTRE_ANALYSE_FILIALE' || this.doc_tobe_produced === 'REVIEW_CONTRE_ANALYSE_GROUPE' || this.doc_tobe_produced === 'REVIEW_CONTRE_ANALYSE_RSE' || this.doc_tobe_produced === 'REVIEW_CONTRE_ANALYSE_DGR' || this.doc_tobe_produced === 'REVIEW_CONTRE_ANALYSE_DAJC' || this.doc_tobe_produced === 'REVIEW_CONTRE_ANALYSE_GAC') {
        this.isDoc = true;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES1.vue?vue&type=template&id=c104f668&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES1.vue?vue&type=template&id=c104f668&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      id: "pp4-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Pièces jointes\n                        ")]), _vm._v(" "), _c("div", {
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
        return _vm.$modal.show("pieces_jointes");
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
    staticClass: "col-12 p-0 position-relative"
  }, [_c("div", {
    staticClass: "col-md-3 pl-5",
    staticStyle: {
      display: "none"
    }
  }, [_vm._m(0), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.formDataToBeWatched.chargee_rse,
      expression: "formDataToBeWatched.chargee_rse",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "text",
      disabled: "",
      id: "chargee_rse"
    },
    domProps: {
      value: _vm.formDataToBeWatched.chargee_rse
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.formDataToBeWatched, "chargee_rse", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("table", {
    staticClass: "table mt-3 table-bordered"
  }, [_vm._m(1), _vm._v(" "), _c("tbody", {
    staticStyle: {
      "font-size": "16px"
    }
  }, _vm._l(_vm.pieces_jointes, function (pieces_jointe, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: pieces_jointe.value,
        expression: "pieces_jointe.value",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-check-input",
      staticStyle: {
        width: "20px",
        height: "20px"
      },
      attrs: {
        type: "checkbox"
      },
      domProps: {
        checked: Array.isArray(pieces_jointe.value) ? _vm._i(pieces_jointe.value, null) > -1 : pieces_jointe.value
      },
      on: {
        change: [function ($event) {
          var $$a = pieces_jointe.value,
            $$el = $event.target,
            $$c = $$el.checked ? true : false;
          if (Array.isArray($$a)) {
            var $$v = null,
              $$i = _vm._i($$a, $$v);
            if ($$el.checked) {
              $$i < 0 && _vm.$set(pieces_jointe, "value", $$a.concat([$$v]));
            } else {
              $$i > -1 && _vm.$set(pieces_jointe, "value", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
            }
          } else {
            _vm.$set(pieces_jointe, "value", $$c);
          }
        }, _vm.handleInput]
      }
    })]), _vm._v(" "), index < 9 ? _c("td", [_c("label", {
      staticClass: "form-check-label"
    }, [_vm._v("\n                                            " + _vm._s(pieces_jointe === null || pieces_jointe === void 0 ? void 0 : pieces_jointe.label) + "\n                                        ")])]) : _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: pieces_jointe.label,
        expression: "pieces_jointe.label\n                                                ",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control",
      staticStyle: {
        border: "0px"
      },
      attrs: {
        type: "text"
      },
      domProps: {
        value: pieces_jointe.label
      },
      on: {
        input: _vm.handleInput,
        change: function change($event) {
          return _vm.$set(pieces_jointe, "label", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("label", {
      staticClass: "form-check-label"
    }, [_vm._v("\n                                            " + _vm._s(pieces_jointe === null || pieces_jointe === void 0 ? void 0 : pieces_jointe.categorie_eleve) + "\n                                        ")])]), _vm._v(" "), _c("td", [_c("label", {
      staticClass: "form-check-label"
    }, [_vm._v("\n                                            " + _vm._s(pieces_jointe === null || pieces_jointe === void 0 ? void 0 : pieces_jointe.categorie_moyenne) + "\n                                        ")])])]);
  }), 0)]), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 mt-4"
  }, [_vm._m(2), _vm._v(" "), _c("vue-editor", {
    attrs: {
      id: "commentaires_pj"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.commentaires_pj,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "commentaires_pj", $$v);
      },
      expression: "formDataToBeWatched.commentaires_pj\n    "
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
  }, [_vm._v("\n                        Fermer le tableau\n                    ")])])])]) : _c("div", {
    staticClass: "card card-width-height"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc pb-0 pt-2"
  }, [_c("h6", {
    staticClass: "head",
    attrs: {
      id: "pp4-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Pièces jointes\n                        ")]), _vm._v(" "), _c("div", {
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
        return _vm.$modal.show("pieces_jointes");
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
      name: "pieces_jointes",
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
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "chargee_rse"
    }
  }, [_vm._v("Chargée RSE"), _c("span", {
    staticClass: "chargee_rse"
  }), _vm._v(" "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      colspan: "2"
    }
  }, [_vm._v("\n                                    cocher les pièces jointes\n                                ")]), _vm._v(" "), _c("th", {
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("\n                                    Catégorie E&S élevée\n\n                                ")]), _vm._v(" "), _c("th", {
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("\n                                    Catégorie E&S moyen\n\n                                ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_c("b", [_vm._v("Commentaires")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES2.vue?vue&type=template&id=c0e8c766&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES2.vue?vue&type=template&id=c0e8c766&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      id: "pp5-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Synthèse des principales étapes de la Due Diligence E&S\n                        ")]), _vm._v(" "), _c("div", {
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
        return _vm.$modal.show("synthese_des_principaux_etapes_de_la_due_dilligence_es");
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
    staticClass: "card-body"
  }, [_c("table", {
    staticClass: "table"
  }, [_vm._m(0), _vm._v(" "), _c("tbody", {
    staticStyle: {
      "font-size": "16px"
    }
  }, _vm._l(_vm.synthese_principales, function (synthese_principale, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: synthese_principale.value,
        expression: "synthese_principale.value",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-check-input",
      staticStyle: {
        width: "20px",
        height: "20px"
      },
      attrs: {
        type: "checkbox"
      },
      domProps: {
        checked: Array.isArray(synthese_principale.value) ? _vm._i(synthese_principale.value, null) > -1 : synthese_principale.value
      },
      on: {
        change: [function ($event) {
          var $$a = synthese_principale.value,
            $$el = $event.target,
            $$c = $$el.checked ? true : false;
          if (Array.isArray($$a)) {
            var $$v = null,
              $$i = _vm._i($$a, $$v);
            if ($$el.checked) {
              $$i < 0 && _vm.$set(synthese_principale, "value", $$a.concat([$$v]));
            } else {
              $$i > -1 && _vm.$set(synthese_principale, "value", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
            }
          } else {
            _vm.$set(synthese_principale, "value", $$c);
          }
        }, _vm.handleInput]
      }
    })]), _vm._v(" "), index < 9 ? _c("td", [_c("label", {
      staticClass: "form-check-label"
    }, [_vm._v("\n                                        " + _vm._s(synthese_principale === null || synthese_principale === void 0 ? void 0 : synthese_principale.label) + "\n                                    ")])]) : _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: synthese_principale.label,
        expression: "synthese_principale.label\n                                            ",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control",
      staticStyle: {
        border: "0px"
      },
      attrs: {
        type: "text"
      },
      domProps: {
        value: synthese_principale.label
      },
      on: {
        input: _vm.handleInput,
        change: function change($event) {
          return _vm.$set(synthese_principale, "label", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td")]);
  }), 0)])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 mt-3 mb-3"
  }, [_vm._m(1), _vm._v(" "), _c("vue-editor", {
    attrs: {
      id: "commentaires_synt"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.commentaires_synt,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "commentaires_synt", $$v);
      },
      expression: "formDataToBeWatched.commentaires_synt\n    "
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
  }, [_vm._v("\n                        Fermer le tableau\n                    ")])]) : _c("div", {
    staticClass: "card card-width-height"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc pb-0 pt-2"
  }, [_c("h6", {
    staticClass: "head",
    attrs: {
      id: "pp5-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Synthèse des principales étapes de la Due Diligence E&S\n                        ")]), _vm._v(" "), _c("div", {
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
        return _vm.$modal.show("synthese_des_principaux_etapes_de_la_due_dilligence_es");
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
      name: "synthese_des_principaux_etapes_de_la_due_dilligence_es",
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
  return _c("tr", [_c("th", {
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      colspan: "",
      scope: "row"
    }
  }), _vm._v(" "), _c("th", {
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      colspan: "",
      scope: "row"
    }
  }), _vm._v(" "), _c("th", {
    staticStyle: {
      "padding-left": "5px"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_c("b", [_vm._v("Commentaires")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES3.vue?vue&type=template&id=c0cc9864&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES3.vue?vue&type=template&id=c0cc9864&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$formDataToBeWatch, _vm$principaux_risque, _vm$formDataToBeWatch2;
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
      id: "pp6-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Principaux risques E&S identifiés\n                        ")]), _vm._v(" "), _c("div", {
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
        return _vm.$modal.show("pricipaux_risque");
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
    staticClass: "col-12 p-0 position-relative"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(0), _vm._v(" "), (_vm$principaux_risque = _vm.principaux_risques) !== null && _vm$principaux_risque !== void 0 && _vm$principaux_risque.length ? _c("tbody", {
    staticStyle: {
      "font-size": "16px"
    }
  }, _vm._l(_vm.principaux_risques, function (principaux_risque, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: principaux_risque.label,
        expression: "principaux_risque.label"
      }],
      staticClass: "form-control",
      staticStyle: {
        "min-width": "350px"
      },
      attrs: {
        type: "text",
        placeholder: "Saisir le libellé"
      },
      domProps: {
        value: principaux_risque.label
      },
      on: {
        input: [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(principaux_risque, "label", $event.target.value);
        }, function ($event) {
          return _vm.handleInput();
        }]
      }
    })]), _vm._v(" "), _c("td", [_c("div", {
      staticClass: "col-md-12 pl-4"
    }, [_c("div", {
      staticClass: "d-flex justify-content-between align-items-center"
    }, [_c("div", {
      staticClass: "d-flex"
    }, [_c("div", {
      staticClass: "m-2 d-flex mr-4"
    }, [_c("input", {
      staticStyle: {
        width: "20px",
        height: "20px"
      },
      attrs: {
        type: "checkbox",
        value: "Oui",
        id: "suffisant_par_le_client" + index
      },
      domProps: {
        checked: principaux_risque.value == "Oui"
      },
      on: {
        change: function change($event) {
          return _vm.checkboxValCashCall($event.target.value, index);
        }
      }
    }), _vm._v(" "), _c("label", {
      staticClass: "text-nowrap",
      attrs: {
        "for": "suffisant_par_le_client" + index
      }
    }, [_vm._v(" Suffisant par le client")])]), _vm._v(" "), _c("div", {
      staticClass: "m-2 d-flex mr-4"
    }, [_c("input", {
      staticStyle: {
        width: "20px",
        height: "20px"
      },
      attrs: {
        type: "checkbox",
        value: "Non",
        id: "insuffisant_donc_paes" + index
      },
      domProps: {
        checked: principaux_risque.value == "Non"
      },
      on: {
        change: function change($event) {
          return _vm.checkboxValCashCall($event.target.value, index);
        }
      }
    }), _vm._v(" "), _c("label", {
      staticClass: "text-nowrap",
      attrs: {
        "for": "insuffisant_donc_paes" + index
      }
    }, [_vm._v(" Insuffisant, donc PAES")])])]), _vm._v(" "), _c("div", [_c("div", {
      staticClass: "m-2 d-flex"
    }, [index == 0 ? _c("button", {
      staticClass: "btn btn-sm dark-blue",
      on: {
        click: function click($event) {
          return _vm.addRisk();
        }
      }
    }, [_c("i", {
      staticClass: "icofont-plus"
    })]) : _c("button", {
      staticStyle: {
        "background-color": "transparent",
        border: "none"
      },
      attrs: {
        type: "button",
        title: "Supprimer cette ligne"
      },
      on: {
        click: function click($event) {
          return _vm.removeRisk(index);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)])])])])])]);
  }), 0) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 mt-4"
  }, [_vm._m(1), _vm._v(" "), _c("vue-editor", {
    attrs: {
      id: "commentaires_synt"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.commentaires_prin,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "commentaires_prin", $$v);
      },
      expression: "formDataToBeWatched.commentaires_prin\n                          "
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
  }, [_vm._v("\n                        Fermer le tableau\n                    ")])])])]) : _c("div", {
    staticClass: "card card-width-height"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc pb-0 pt-2"
  }, [_c("h6", {
    staticClass: "head",
    attrs: {
      id: "pp6-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Principaux risques E&S identifiés\n                        ")]), _vm._v(" "), _c("div", {
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
        return _vm.$modal.show("pricipaux_risque");
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
      name: "pricipaux_risque",
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
  return _c("thead", [_c("tr", [_c("th", {
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      colspan: "",
      scope: "row"
    }
  }, [_vm._v("\n                                        Principaux risques E&S identifiés\n                                    ")]), _vm._v(" "), _c("th", {
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      colspan: "4",
      scope: "row"
    }
  }, [_vm._v("\n                                        Niveau de maîtrise\n                                    ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_c("b", [_vm._v("Commentaires")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES4.vue?vue&type=template&id=c0b06962&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES4.vue?vue&type=template&id=c0b06962&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      id: "pp7-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Convention crédit\n                        ")]), _vm._v(" "), _c("div", {
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
        return _vm.$modal.show("convention_credit");
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
    staticClass: "col-12 p-0 position-relative"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("table", {
    staticClass: "table"
  }, [_vm._m(0), _vm._v(" "), _c("tbody", {
    staticStyle: {
      "font-size": "16px"
    }
  }, _vm._l(_vm.convention_credits, function (convention_credit, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: convention_credit.value,
        expression: "convention_credit.value",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-check-input",
      staticStyle: {
        width: "20px",
        height: "20px"
      },
      attrs: {
        type: "checkbox"
      },
      domProps: {
        checked: Array.isArray(convention_credit.value) ? _vm._i(convention_credit.value, null) > -1 : convention_credit.value
      },
      on: {
        change: [function ($event) {
          var $$a = convention_credit.value,
            $$el = $event.target,
            $$c = $$el.checked ? true : false;
          if (Array.isArray($$a)) {
            var $$v = null,
              $$i = _vm._i($$a, $$v);
            if ($$el.checked) {
              $$i < 0 && _vm.$set(convention_credit, "value", $$a.concat([$$v]));
            } else {
              $$i > -1 && _vm.$set(convention_credit, "value", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
            }
          } else {
            _vm.$set(convention_credit, "value", $$c);
          }
        }, _vm.handleInput]
      }
    })]), _vm._v(" "), index < 7 ? _c("td", [_c("label", {
      staticClass: "form-check-label"
    }, [_vm._v("\n                                                " + _vm._s(convention_credit === null || convention_credit === void 0 ? void 0 : convention_credit.label) + "\n                                            ")])]) : _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: convention_credit.label,
        expression: "convention_credit.label\n                                                    ",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control",
      staticStyle: {
        border: "0px"
      },
      attrs: {
        type: "text"
      },
      domProps: {
        value: convention_credit.label
      },
      on: {
        input: _vm.handleInput,
        change: function change($event) {
          return _vm.$set(convention_credit, "label", $event.target.value);
        }
      }
    })])]);
  }), 0)]), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 mt-4"
  }, [_vm._m(1), _vm._v(" "), _c("vue-editor", {
    attrs: {
      id: "commentaires_synt"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.commentaires_convent,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "commentaires_convent", $$v);
      },
      expression: "formDataToBeWatched.commentaires_convent\n    "
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
  }, [_vm._v("\n                        Fermer le tableau\n                    ")])])])]) : _c("div", {
    staticClass: "card card-width-height"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc pb-0 pt-2"
  }, [_c("h6", {
    staticClass: "head",
    attrs: {
      id: "pp7-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Convention crédit\n                        ")]), _vm._v(" "), _c("div", {
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
        return _vm.$modal.show("convention_credit");
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
      name: "convention_credit",
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
  return _c("tr", [_c("th", {
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      colspan: "",
      scope: "row"
    }
  }), _vm._v(" "), _c("th", {
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      colspan: "",
      scope: "row"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_c("b", [_vm._v("Commentaires")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES5.vue?vue&type=template&id=c0943a60&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES5.vue?vue&type=template&id=c0943a60&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      id: "f42-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Plan d'action\n                        ")]), _vm._v(" "), _c("div", {
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
      size: "0.7x",
      title: "exemple"
    },
    on: {
      click: function click($event) {
        return _vm.$modal.show("plan_d_action");
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
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "table-responsive mt-3"
  }, [_c("table", {
    staticClass: "table mb-5 table-bordered"
  }, [_c("thead", [_c("tr", [_c("td", {
    staticClass: "text-center vertical-middle th"
  }, [_vm._v("N°")]), _vm._v(" "), _c("td", {
    staticClass: "text-center vertical-middle th",
    staticStyle: {
      "min-width": "200px"
    }
  }, [_vm._v("\n                                    Exigence des normes de performance de la\n                                    SFI\n                                ")]), _vm._v(" "), _c("td", {
    staticClass: "text-center vertical-middle th",
    staticStyle: {
      "min-width": "200px"
    }
  }, [_vm._v("Risques")]), _vm._v(" "), _c("td", {
    staticClass: "text-center vertical-middle th",
    staticStyle: {
      "min-width": "200px"
    }
  }, [_vm._v("\n                                    Actions correctives\n                                ")]), _vm._v(" "), _c("td", {
    staticClass: "text-center vertical-middle th",
    staticStyle: {
      "min-width": "200px"
    }
  }, [_vm._v("Délais")]), _vm._v(" "), _c("td", {
    staticClass: "text-center vertical-middle th",
    staticStyle: {
      "min-width": "200px"
    }
  }, [_vm._v("Livrables")]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("button", {
    staticStyle: {
      "background-color": "#2c3e50",
      color: "#ffffff",
      "border-radius": "15%",
      border: "none"
    },
    attrs: {
      type: "button",
      title: "Ajouter"
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
  })], 1)])])]), _vm._v(" "), _c("tbody", [_vm._l(_vm.norme_performances, function (norme, index) {
    return [_c("tr", {
      key: norme.id
    }, [_c("td", {
      staticClass: "fw-bold text-center th"
    }, [_vm._v(_vm._s(index + 1))]), _vm._v(" "), _c("td", {
      staticClass: "th",
      attrs: {
        colspan: "5"
      }
    }, [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: norme.libelle,
        expression: "norme.libelle"
      }],
      staticClass: "form-control",
      domProps: {
        value: norme.libelle
      },
      on: {
        change: _vm.handleInput,
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(norme, "libelle", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "th"
    }, [_c("button", {
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
    })], 1)])]), _vm._v(" "), _vm._l(norme === null || norme === void 0 ? void 0 : norme.contents, function (content, ind) {
      return _c("tr", [_c("td", {
        staticClass: "fw-bold text-center"
      }, [_vm._v(_vm._s(index + 1) + "." + _vm._s(ind + 1))]), _vm._v(" "), _c("td", {
        staticStyle: {
          "min-width": "200px"
        }
      }, [_c("textarea", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: content.exigence,
          expression: "content.exigence"
        }],
        staticClass: "form-control textarea-g",
        domProps: {
          value: content.exigence
        },
        on: {
          change: _vm.handleInput,
          input: function input($event) {
            if ($event.target.composing) return;
            _vm.$set(content, "exigence", $event.target.value);
          }
        }
      })]), _vm._v(" "), _c("td", {
        staticStyle: {
          "min-width": "200px"
        }
      }, [_c("textarea", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: content.risque,
          expression: "content.risque"
        }],
        staticClass: "form-control textarea-g",
        domProps: {
          value: content.risque
        },
        on: {
          change: _vm.handleInput,
          input: function input($event) {
            if ($event.target.composing) return;
            _vm.$set(content, "risque", $event.target.value);
          }
        }
      })]), _vm._v(" "), _c("td", {
        staticStyle: {
          "min-width": "200px"
        }
      }, [_c("textarea", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: content.action_corrective,
          expression: "content.action_corrective"
        }],
        staticClass: "form-control textarea-g",
        domProps: {
          value: content.action_corrective
        },
        on: {
          change: _vm.handleInput,
          input: function input($event) {
            if ($event.target.composing) return;
            _vm.$set(content, "action_corrective", $event.target.value);
          }
        }
      })]), _vm._v(" "), _c("td", {
        staticStyle: {
          "min-width": "200px"
        }
      }, [_c("textarea", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: content.delai,
          expression: "content.delai"
        }],
        staticClass: "form-control textarea-g",
        domProps: {
          value: content.delai
        },
        on: {
          change: _vm.handleInput,
          input: function input($event) {
            if ($event.target.composing) return;
            _vm.$set(content, "delai", $event.target.value);
          }
        }
      })]), _vm._v(" "), _c("td", {
        staticStyle: {
          "min-width": "200px"
        }
      }, [_c("textarea", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: content.livrable,
          expression: "content.livrable"
        }],
        staticClass: "form-control textarea-g",
        domProps: {
          value: content.livrable
        },
        on: {
          change: _vm.handleInput,
          input: function input($event) {
            if ($event.target.composing) return;
            _vm.$set(content, "livrable", $event.target.value);
          }
        }
      })]), _vm._v(" "), _c("td", [ind == 0 ? _c("button", {
        staticStyle: {
          "background-color": "#2c3e50",
          color: "#ffffff",
          "border-radius": "15%",
          border: "none"
        },
        attrs: {
          type: "button",
          title: "Ajouter"
        },
        on: {
          click: function click($event) {
            return _vm.addMoreLine(index);
          }
        }
      }, [_c("plus-icon", {
        staticClass: "custom-class",
        attrs: {
          size: "21"
        }
      })], 1) : _c("button", {
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
            return _vm.removeLine(index, ind);
          }
        }
      }, [_c("trash-icon", {
        staticClass: "custom-class",
        attrs: {
          size: "21"
        }
      })], 1)])]);
    })];
  })], 2)])])]), _vm._v(" "), _c("div", {
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
  }, [_vm._v("\n                Fermer le tableau\n            ")])]) : _c("div", {
    staticClass: "card card-width-height"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc pb-0 pt-2"
  }, [_c("h6", {
    staticClass: "head",
    attrs: {
      id: "f42-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Plan d'action\n                        ")]), _vm._v(" "), _c("div", {
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
        return _vm.$modal.show("plan_d_action");
      }
    }
  }), _vm._v(" "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
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
      id: "instruction6",
      tabindex: "-1",
      "aria-labelledby": "instruction6",
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
      id: "instruction6"
    }
  }, [_vm._v("\n                            Instruction - " + _vm._s(_vm.tb_display_name) + " : Plan Action\n                        ")]), _vm._v(" "), _c("button", {
    staticClass: "btn-close",
    attrs: {
      type: "button",
      "data-bs-dismiss": "modal",
      "aria-label": "Close"
    }
  })]), _vm._v(" "), _vm._m(0), _vm._v(" "), _vm._m(1)])])])]), _vm._v(" "), _c("modal", {
    attrs: {
      name: "plan_d_action",
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
        var _vm$formDataToBeWatch3;
        (_vm$formDataToBeWatch3 = _vm.formDataToBeWatched.notes) === null || _vm$formDataToBeWatch3 === void 0 || _vm$formDataToBeWatch3.unshift($event);
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
  return _c("div", {
    staticClass: "modal-body"
  }, [_c("img", {
    attrs: {
      src: "/images/capture_afg/centrale_risques_adhesion_au_bic.png",
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
  }, [_vm._v("\n                            Fermer\n                        ")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES6.vue?vue&type=template&id=c0780b5e&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES6.vue?vue&type=template&id=c0780b5e&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      id: "f46-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Avis du chargé RSE\n                        ")]), _vm._v(" "), _c("div", {
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
        return _vm.$modal.show("avis_du_responsable_rse");
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
    staticClass: "col-12 p-0 position-relative"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "col-md-12 mt-4"
  }, [_vm._m(0), _vm._v(" "), _c("vue-editor", {
    attrs: {
      id: "avis"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.avis_rse,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "avis_rse", $$v);
      },
      expression: "\n                                        formDataToBeWatched.avis_rse\n                                    "
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
  }, [_vm._v("\n                        Fermer le tableau\n                    ")])])])]) : _c("div", {
    staticClass: "card card-width-height"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc pb-0 pt-2"
  }, [_c("h6", {
    staticClass: "head",
    attrs: {
      id: "f46-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Avis du chargé RSE\n                        ")]), _vm._v(" "), _c("div", {
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
        return _vm.$modal.show("avis_du_responsable_rse");
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
      name: "avis_du_responsable_rse",
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
  return _c("label", [_c("b", [_vm._v("Commentaire")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES7.vue?vue&type=template&id=c05bdc5c&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES7.vue?vue&type=template&id=c05bdc5c&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Fiche de lecture\n                        ")]), _vm._v(" "), _c("div", {
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
  })], 1)])])]), _vm._v(" "), _vm._l(_vm.fiche_lectures, function (ficheLecture, index) {
    return _c("div", {
      key: index.toString() + "fiche_lecture",
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
    })], 1), _vm._v("\n                                    Fiche de lecture " + _vm._s(index + 1) + "\n                                ")]), _vm._v(" "), _c("chevron-up-icon", {
      staticClass: "custom-class",
      staticStyle: {
        "float": "right",
        cursor: "pointer"
      },
      attrs: {
        size: "21"
      }
    })], 1)])]), _vm._v(" "), _vm._l(ficheLecture.fiche, function (elt, index_) {
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
          disabled: elt.is_answered || ficheLecture.has_notified,
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
      })]), _vm._v(" "), index_ == 0 && !ficheLecture.has_notified ? _c("div", {
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
    }), _vm._v(" "), !ficheLecture.has_notified ? _c("div", {
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
    })], 1), _vm._v("\n                                        Fiche de lecture " + _vm._s(index + 1) + "\n                                    ")]), _vm._v(" "), _c("chevron-down-icon", {
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
        value: _vm.fiche_lectures.length - 1 == index,
        expression: "fiche_lectures.length - 1 == index"
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
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Fiche de lecture\n                        ")]), _vm._v(" "), _c("div", {
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
      name: "confirm_supp_fiche_lecture",
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES8.vue?vue&type=template&id=c03fad5a&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES8.vue?vue&type=template&id=c03fad5a&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/nsia/compte_rendu_visite_es/DCEI-PVES1.vue?vue&type=template&id=0ba4a99a&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/nsia/compte_rendu_visite_es/DCEI-PVES1.vue?vue&type=template&id=0ba4a99a&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      id: "f23-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Compte rendu de visite E&S client\n                        ")]), _vm._v(" "), _c("div", {
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
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "nom_de_la_societe"
    }
  }, [_vm._v("Nom de la société")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.nom_de_la_societe,
      expression: "nom_de_la_societe"
    }],
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "text",
      disabled: "",
      id: "nom_de_la_societe"
    },
    domProps: {
      value: _vm.nom_de_la_societe
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.nom_de_la_societe = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "convention_credit_numero"
    }
  }, [_vm._v("Convention crédit n°")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.convention_credit_numero,
      expression: "formDataToBeWatched.convention_credit_numero"
    }],
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "text",
      id: "convention_credit_numero"
    },
    domProps: {
      value: _vm.formDataToBeWatched.convention_credit_numero
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "convention_credit_numero", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "numero_client_nsia_banque_ci"
    }
  }, [_vm._v("Numéro client NSIA BANQUE CI")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.numero_client_nsia_banque_ci,
      expression: "numero_client_nsia_banque_ci"
    }],
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "text",
      disabled: "",
      id: "numero_client_nsia_banque_ci"
    },
    domProps: {
      value: _vm.numero_client_nsia_banque_ci
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.numero_client_nsia_banque_ci = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "site_visite"
    }
  }, [_vm._v("Site visité")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.site_visite,
      expression: "formDataToBeWatched.site_visite"
    }],
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "text",
      id: "site_visite"
    },
    domProps: {
      value: _vm.formDataToBeWatched.site_visite
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "site_visite", $event.target.value);
      }
    }
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "col-md-12 mt-0 mb-4"
  }, [_vm._m(0), _vm._v(" "), _c("vue-editor", {
    attrs: {
      id: "changement_notables"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.changement_notables,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "changement_notables", $$v);
      },
      expression: "\n                                formDataToBeWatched.changement_notables\n                                "
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 mt-0 mb-4"
  }, [_vm._m(1), _vm._v(" "), _c("vue-editor", {
    attrs: {
      id: "impression_sur_la_maitrise"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.impression_sur_la_maitrise,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "impression_sur_la_maitrise", $$v);
      },
      expression: "\n                                formDataToBeWatched.impression_sur_la_maitrise\n                                "
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 mt-0 mb-4"
  }, [_vm._m(2), _vm._v(" "), _c("vue-editor", {
    attrs: {
      id: "incident_es_derniere_visite"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.incident_es_derniere_visite,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "incident_es_derniere_visite", $$v);
      },
      expression: "\n                                formDataToBeWatched.incident_es_derniere_visite\n                                "
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 mt-0 mb-4"
  }, [_vm._m(3), _vm._v(" "), _c("vue-editor", {
    attrs: {
      id: "actions_mise_en_place"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.actions_mise_en_place,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "actions_mise_en_place", $$v);
      },
      expression: "\n                                formDataToBeWatched.actions_mise_en_place\n                                "
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 mt-0 mb-4"
  }, [_vm._m(4), _vm._v(" "), _c("vue-editor", {
    attrs: {
      id: "rapport_annuel"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.rapport_annuel,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "rapport_annuel", $$v);
      },
      expression: "\n                                formDataToBeWatched.rapport_annuel\n                                "
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 mt-0 mb-4"
  }, [_vm._m(5), _vm._v(" "), _c("vue-editor", {
    attrs: {
      id: "actions_de_reduction_des_risques"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.actions_de_reduction_des_risques,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "actions_de_reduction_des_risques", $$v);
      },
      expression: "\n                                formDataToBeWatched.actions_de_reduction_des_risques\n                                "
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "formulaire_rempli_par"
    }
  }, [_vm._v("Formulaire rempli par")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.formulaire_rempli_par,
      expression: "formDataToBeWatched.formulaire_rempli_par"
    }],
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "text",
      disabled: "",
      id: "formulaire_rempli_par"
    },
    domProps: {
      value: _vm.formDataToBeWatched.formulaire_rempli_par
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "formulaire_rempli_par", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "formulaire_rempli_par_telephone"
    }
  }, [_vm._v("N° téléphone")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.formulaire_rempli_par_telephone,
      expression: "formDataToBeWatched.formulaire_rempli_par_telephone"
    }],
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "text",
      disabled: "",
      id: "formulaire_rempli_par_telephone"
    },
    domProps: {
      value: _vm.formDataToBeWatched.formulaire_rempli_par_telephone
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "formulaire_rempli_par_telephone", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "formulaire_rempli_par_email"
    }
  }, [_vm._v("Email")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.formulaire_rempli_par_email,
      expression: "formDataToBeWatched.formulaire_rempli_par_email"
    }],
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "text",
      disabled: "",
      id: "formulaire_rempli_par_email"
    },
    domProps: {
      value: _vm.formDataToBeWatched.formulaire_rempli_par_email
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "formulaire_rempli_par_email", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "formulaire_rempli_par_date"
    }
  }, [_vm._v("Date")]), _vm._v(" "), _c("date-input", {
    attrs: {
      value: _vm.formDataToBeWatched.formulaire_rempli_par_date,
      id: "formulaire_rempli_par_date"
    },
    on: {
      input: _vm.formDataVars
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
      id: "f23-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Compte rendu de visite E&S client\n                        ")]), _vm._v(" "), _c("div", {
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
  return _c("label", [_c("b", [_vm._v("Changements notables depuis la dernière visite (augmenetations ou diminutions de production, changement d'effectifs, déménagement, nouveaux permis, nouvelle organisation, nouvelle réglementation, etc,)")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_c("b", [_vm._v("Quelles sont vos impressions sur la maîtrise des risques E&S (tels que par exemple listés dans le questionnaire d'analyse E&S ou dans le rapport de Due Diligence E&S - donner des éléments factuels) ?")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_c("b", [_vm._v("Y a-t-il eu des incidents E&S depuis la dernière visite (incendie, déversement de produits chimiques, accidents du travail avec arrêt, grève, problème de voisinage ou avec les communautés, amendes de l'administration, etc. - les décrire) ? Si ces incidents entrent dans les catégories d'incidents devant être remontés à NSIA BANQUE CI, ces remontées ont-elles eu lieu dans les temps ?")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_c("b", [_vm._v("Quelles actions ont été mises en place conformément au plan d'action environnemental et social (PAES) de la Convention de Crédit ? Les éléments / livrables démontrant l'avancement des actions sont-ils disponibles ? Le PAES peut-il être considéré comme 100% clos ?")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_c("b", [_vm._v("Le rapport annuel E&S a-t-il bien été transmis dans les temps ? Les éléments permettant de justifier les données fournies sont-ils disponibles ?")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_c("b", [_vm._v("Des actions de réduction des risques E&S ont-elles été identifiées durant la visite ? Si oui, listez-les.")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/nsia/form_remonte_inc_es/DCEI-FRES1.vue?vue&type=template&id=f1261f18&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/nsia/form_remonte_inc_es/DCEI-FRES1.vue?vue&type=template&id=f1261f18&scoped=true ***!
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
      id: "f24-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Formulaire de remontée d'incident E&S\n                        ")]), _vm._v(" "), _c("div", {
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
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "nom_de_la_societe_1"
    }
  }, [_vm._v("Nom de la société")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.nom_de_la_societe,
      expression: "nom_de_la_societe"
    }],
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "text",
      id: "nom_de_la_societe_1",
      disabled: ""
    },
    domProps: {
      value: _vm.nom_de_la_societe
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.nom_de_la_societe = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "convention_credit_numero_1"
    }
  }, [_vm._v("Convention crédit n°")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.convention_credit_numero,
      expression: "formDataToBeWatched.convention_credit_numero"
    }],
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "text",
      id: "convention_credit_numero_1"
    },
    domProps: {
      value: _vm.formDataToBeWatched.convention_credit_numero
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "convention_credit_numero", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "numero_client_nsia_banque_ci_1"
    }
  }, [_vm._v("Numéro client NSIA BANQUE CI")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.numero_client_nsia_banque_ci,
      expression: "numero_client_nsia_banque_ci"
    }],
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "text",
      id: "numero_client_nsia_banque_ci_1",
      disabled: ""
    },
    domProps: {
      value: _vm.numero_client_nsia_banque_ci
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.numero_client_nsia_banque_ci = $event.target.value;
      }
    }
  })])])]), _vm._v(" "), _vm.seen4 ? _c("div", {
    staticClass: "card-body"
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
      id: "risques-et-actions-correctives"
    }
  }, [_vm._v("\n                                Description de l'incident\n                                "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-6"
  }, [_c("label", {
    attrs: {
      "for": "incident_date"
    }
  }, [_vm._v("Date de l'incident")]), _vm._v(" "), _c("date-input", {
    staticStyle: {
      width: "100%"
    },
    attrs: {
      value: _vm.formDataToBeWatched.incident_date,
      id: "incident_date"
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-6"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Heure")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.incident_heure,
      expression: "formDataToBeWatched.incident_heure"
    }],
    staticClass: "form-control",
    staticStyle: {
      width: "100%"
    },
    attrs: {
      type: "time"
    },
    domProps: {
      value: _vm.formDataToBeWatched.incident_heure
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "incident_heure", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Où (lieu de l'incident)")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.incident_lieu,
      expression: "formDataToBeWatched.incident_lieu"
    }],
    staticClass: "form-control",
    staticStyle: {
      width: "100%"
    },
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.formDataToBeWatched.incident_lieu
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "incident_lieu", $event.target.value);
      }
    }
  })])])]) : _c("div", {
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
      id: "risques-et-actions-correctives"
    }
  }, [_vm._v("\n                                Description de l'incident\n                                "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "col-md-12 mt-0 mb-4"
  }, [_vm._m(0), _vm._v(" "), _c("vue-editor", {
    attrs: {
      id: "que_s_est_il_produit"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.que_s_est_il_produit,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "que_s_est_il_produit", $$v);
      },
      expression: "\n                                formDataToBeWatched.que_s_est_il_produit\n                                "
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 mt-0 mb-4"
  }, [_vm._m(1), _vm._v(" "), _c("vue-editor", {
    attrs: {
      id: "nature_des_consequences"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.nature_des_consequences,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "nature_des_consequences", $$v);
      },
      expression: "\n                                formDataToBeWatched.nature_des_consequences\n                                "
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 mt-0 mb-4"
  }, [_c("div", {
    staticClass: "d-flex align-items-baseline"
  }, [_vm._m(2), _vm._v(" "), _c("div", {
    staticClass: "mx-3 d-flex"
  }, [_c("div", {
    staticClass: "m-2 mr-4",
    staticStyle: {
      "vertical-align": "middle"
    }
  }, [_c("input", {
    staticClass: "form-check-input",
    staticStyle: {
      width: "20px",
      height: "20px",
      margin: "3px"
    },
    attrs: {
      type: "checkbox",
      value: "Oui",
      id: "blessures_sur_despersonnes_oui"
    },
    domProps: {
      checked: _vm.formDataToBeWatched.blessures_sur_despersonnes == "Oui"
    },
    on: {
      change: function change($event) {
        return _vm.checkboxVal($event, "blessures_sur_despersonnes");
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "blessures_sur_despersonnes_oui"
    }
  }, [_vm._v("Oui")])]), _vm._v(" "), _c("div", {
    staticClass: "m-2 mr-4",
    staticStyle: {
      "vertical-align": "middle"
    }
  }, [_c("input", {
    staticClass: "form-check-input",
    staticStyle: {
      width: "20px",
      height: "20px",
      margin: "3px"
    },
    attrs: {
      type: "checkbox",
      value: "Non",
      id: "blessures_sur_despersonnes_non"
    },
    domProps: {
      checked: _vm.formDataToBeWatched.blessures_sur_despersonnes == "Non"
    },
    on: {
      change: function change($event) {
        return _vm.checkboxVal($event, "blessures_sur_despersonnes");
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "blessures_sur_despersonnes_non"
    }
  }, [_vm._v("Non")])])])])]), _vm._v(" "), _vm.formDataToBeWatched.blessures_sur_despersonnes === "Oui" ? _c("div", {
    staticClass: "col-md-12 mt-0 mb-4"
  }, [_vm._m(3), _vm._v(" "), _c("vue-editor", {
    attrs: {
      id: "si_oui_decrivez_les_blessures"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.si_oui_decrivez_les_blessures,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "si_oui_decrivez_les_blessures", $$v);
      },
      expression: "\n                                formDataToBeWatched.si_oui_decrivez_les_blessures\n                                "
    }
  })], 1) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 mt-0 mb-4"
  }, [_c("div", {
    staticClass: "d-flex align-items-baseline"
  }, [_vm._m(4), _vm._v(" "), _c("div", {
    staticClass: "mx-3 d-flex"
  }, [_c("div", {
    staticClass: "m-2 mr-4",
    staticStyle: {
      "vertical-align": "middle"
    }
  }, [_c("input", {
    staticClass: "form-check-input",
    staticStyle: {
      width: "20px",
      height: "20px",
      margin: "3px"
    },
    attrs: {
      type: "checkbox",
      value: "Oui",
      id: "intervention_des_services_oui"
    },
    domProps: {
      checked: _vm.formDataToBeWatched.intervention_des_services == "Oui"
    },
    on: {
      change: function change($event) {
        return _vm.checkboxVal($event, "intervention_des_services");
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "intervention_des_services_oui"
    }
  }, [_vm._v("Oui")])]), _vm._v(" "), _c("div", {
    staticClass: "m-2 mr-4",
    staticStyle: {
      "vertical-align": "middle"
    }
  }, [_c("input", {
    staticClass: "form-check-input",
    staticStyle: {
      width: "20px",
      height: "20px",
      margin: "3px"
    },
    attrs: {
      type: "checkbox",
      value: "Non",
      id: "intervention_des_services_non"
    },
    domProps: {
      checked: _vm.formDataToBeWatched.intervention_des_services == "Non"
    },
    on: {
      change: function change($event) {
        return _vm.checkboxVal($event, "intervention_des_services");
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "intervention_des_services_non"
    }
  }, [_vm._v("Non")])])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 mt-0 mb-4"
  }, [_vm._m(5), _vm._v(" "), _c("vue-editor", {
    attrs: {
      id: "quelles_causes_ont_ete_identifiees"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.quelles_causes_ont_ete_identifiees,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "quelles_causes_ont_ete_identifiees", $$v);
      },
      expression: "\n                                formDataToBeWatched.quelles_causes_ont_ete_identifiees\n                                "
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 mt-0 mb-4"
  }, [_c("div", {
    staticClass: "d-flex align-items-baseline"
  }, [_vm._m(6), _vm._v(" "), _c("div", {
    staticClass: "mx-3 d-flex"
  }, [_c("div", {
    staticClass: "m-2 mr-4",
    staticStyle: {
      "vertical-align": "middle"
    }
  }, [_c("input", {
    staticClass: "form-check-input",
    staticStyle: {
      width: "20px",
      height: "20px",
      margin: "3px"
    },
    attrs: {
      type: "checkbox",
      value: "Oui",
      id: "actions_correctives_oui"
    },
    domProps: {
      checked: _vm.formDataToBeWatched.actions_correctives == "Oui"
    },
    on: {
      change: function change($event) {
        return _vm.checkboxVal($event, "actions_correctives");
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "actions_correctives_oui"
    }
  }, [_vm._v("Oui")])]), _vm._v(" "), _c("div", {
    staticClass: "m-2 mr-4",
    staticStyle: {
      "vertical-align": "middle"
    }
  }, [_c("input", {
    staticClass: "form-check-input",
    staticStyle: {
      width: "20px",
      height: "20px",
      margin: "3px"
    },
    attrs: {
      type: "checkbox",
      value: "Non",
      id: "actions_correctives_non"
    },
    domProps: {
      checked: _vm.formDataToBeWatched.actions_correctives == "Non"
    },
    on: {
      change: function change($event) {
        return _vm.checkboxVal($event, "actions_correctives");
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "actions_correctives_non"
    }
  }, [_vm._v("Non")])])])])]), _vm._v(" "), _vm.formDataToBeWatched.actions_correctives === "Oui" ? _c("div", {
    staticClass: "col-md-12 mt-0 mb-4"
  }, [_vm._m(7), _vm._v(" "), _c("vue-editor", {
    attrs: {
      id: "si_oui_decrivez"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.si_oui_decrivez,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "si_oui_decrivez", $$v);
      },
      expression: "\n                                formDataToBeWatched.si_oui_decrivez\n                                "
    }
  })], 1) : _vm._e()]), _vm._v(" "), _vm.seen5 ? _c("div", {
    staticClass: "card-body"
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
      id: "risques-et-actions-correctives"
    }
  }, [_vm._v("\n                                Actions correctives\n                                "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-borderless mb-1"
  }, [_vm._m(8), _vm._v(" "), _c("tbody", _vm._l(_vm.action_correctives, function (action_corrective, index) {
    return _c("tr", {
      key: index
    }, [_c("td", {
      staticClass: "col-4"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: action_corrective.actions_correctives,
        expression: "\n                                                action_corrective.actions_correctives\n                                            "
      }],
      staticClass: "form-control",
      attrs: {
        type: "text"
      },
      domProps: {
        value: action_corrective.actions_correctives
      },
      on: {
        change: _vm.handleInput,
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(action_corrective, "actions_correctives", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "col-4"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: action_corrective.delai_realisation,
        expression: "\n                                                action_corrective.delai_realisation\n                                            "
      }],
      staticClass: "form-control",
      attrs: {
        type: "text"
      },
      domProps: {
        value: action_corrective.delai_realisation
      },
      on: {
        change: _vm.handleInput,
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(action_corrective, "delai_realisation", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "col-4"
    }, [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: action_corrective.commentaire,
        expression: "action_corrective.commentaire"
      }],
      staticClass: "form-control",
      attrs: {
        cols: "1",
        rows: "1"
      },
      domProps: {
        value: action_corrective.commentaire
      },
      on: {
        change: _vm.handleInput,
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(action_corrective, "commentaire", $event.target.value);
        }
      }
    })]), _vm._v(" "), index == 0 ? _c("td", {
      staticStyle: {
        "padding-left": "5px"
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
        title: "Ajouter un bien"
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
          return _vm.remove3(index);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)])]);
  }), 0)])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 mt-4"
  }, [_vm._m(9), _vm._v(" "), _c("vue-editor", {
    attrs: {
      id: "commentaires_action_corrective"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.commentaires_action_corrective,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "commentaires_action_corrective", $$v);
      },
      expression: "formDataToBeWatched.commentaires_action_corrective\n                            "
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
      id: "risques-et-actions-correctives"
    }
  }, [_vm._v("\n                            Actions correctives\n                                "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "formulaire_rempli_par_1"
    }
  }, [_vm._v("Formulaire rempli par")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.formulaire_rempli_par,
      expression: "formDataToBeWatched.formulaire_rempli_par"
    }],
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "text",
      disabled: "",
      id: "formulaire_rempli_par_1"
    },
    domProps: {
      value: _vm.formDataToBeWatched.formulaire_rempli_par
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "formulaire_rempli_par", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "formulaire_rempli_par_telephone_1"
    }
  }, [_vm._v("N° téléphone")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.formulaire_rempli_par_telephone,
      expression: "formDataToBeWatched.formulaire_rempli_par_telephone"
    }],
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "text",
      disabled: "",
      id: "formulaire_rempli_par_telephone_1"
    },
    domProps: {
      value: _vm.formDataToBeWatched.formulaire_rempli_par_telephone
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "formulaire_rempli_par_telephone", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "formulaire_rempli_par_email_1"
    }
  }, [_vm._v("Email")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.formulaire_rempli_par_email,
      expression: "formDataToBeWatched.formulaire_rempli_par_email"
    }],
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "text",
      disabled: "",
      id: "formulaire_rempli_par_email_1"
    },
    domProps: {
      value: _vm.formDataToBeWatched.formulaire_rempli_par_email
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "formulaire_rempli_par_email", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "formulaire_rempli_par_date_1"
    }
  }, [_vm._v("Date")]), _vm._v(" "), _c("date-input", {
    attrs: {
      value: _vm.formDataToBeWatched.formulaire_rempli_par_date,
      id: "formulaire_rempli_par_date"
    },
    on: {
      input: _vm.formDataVars
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
      id: "f24-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Formulaire de remontée d'incident E&S\n                        ")]), _vm._v(" "), _c("div", {
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
  return _c("label", [_c("b", [_vm._v("Que s'est-il produit ? "), _c("br"), _vm._v(" (Descrption détaillée de la localisation, des conditions, matériels et personnel impliqués)")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_c("b", [_vm._v("Nature des conséquences : (accident, arrêt de travail, arrêt de la production, amendes, etc.).")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_c("b", [_vm._v("Des blessures sur des personnes se sont-elles produites ?")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_c("b", [_vm._v("Si oui, décrivez les blessures en incluant les parties du corps concernées")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_c("b", [_vm._v("Une intervention des services médicaux ou forces de l'ordre a eu lieu ?")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_c("b", [_vm._v("Quelles causes ont été identifiées comme ayant mené à l'incident (si connus) ?")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_c("b", [_vm._v("Des actions correctives ont été prises pour prévenir un nouvel incident ?")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_c("b", [_vm._v("Si oui, décrivez -les")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Actions correctives")])]), _vm._v(" "), _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Délai de réalisation")])]), _vm._v(" "), _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Commentaire")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_c("b", [_vm._v("Commentaires")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/workspace/nsia/WorkspaceOnRSEAnlCenter.vue?vue&type=template&id=91c6d552&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/workspace/nsia/WorkspaceOnRSEAnlCenter.vue?vue&type=template&id=91c6d552&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES1.vue?vue&type=style&index=1&id=c104f668&lang=css&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES1.vue?vue&type=style&index=1&id=c104f668&lang=css&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-c104f668] {\r\n    font-family: \"Google sans\";\n}\nlabel[data-v-c104f668] {\r\n    height: 10px;\r\n    font-size: 13px;\n}\ninput[type=\"text\"][data-v-c104f668],\r\ninput[type=\"date\"][data-v-c104f668],\r\nselect[data-v-c104f668] {\r\n    height: 35px;\r\n    border-color: #34495e;\r\n    color: #57606f;\r\n    font-size: 13px;\r\n    font-weight: bold;\n}\n.card-width-height[data-v-c104f668] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-c104f668] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\n.hdc[data-v-c104f668] {\r\n    background-color: #57606f;\n}\n.card-width-height[data-v-c104f668] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-c104f668] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\ninput[type=\"text\"][data-v-c104f668],\r\ninput[type=\"date\"][data-v-c104f668] {\r\n    width: 590px;\n}\n.review[data-v-c104f668] {\r\n    width: 180px !important;\n}\n.engagement input[type=\"text\"][data-v-c104f668],\r\ninput[type=\"date\"][data-v-c104f668] {\r\n    width: 100% !important;\n}\n.th[data-v-c104f668] {\r\n    padding: 4px;\r\n    padding-bottom: 0px;\n}\nselect[data-v-c104f668] {\r\n    width: 250px;\n}\n.badge-sm[data-v-c104f668] {\r\n    display: inline-block;\r\n    width: 15px;\r\n    height: 15px;\r\n    background: rgba(255, 0, 0, 0.882);\r\n    color: white;\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    border-radius: 100%;\r\n    position: absolute;\r\n    top: -20%;\r\n    left: 55%;\r\n    text-align: center;\n}\n.relook-header[data-v-c104f668] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\n.image1[data-v-c104f668] {\r\n    background: url(\"/images/capture_nsia/exemples/pieces_jointes.png\")\r\n        no-repeat;\r\n    background-position: center;\r\n    background-size: contain;\r\n\r\n    width: 500px;\r\n    height: 300px;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES2.vue?vue&type=style&index=1&id=c0e8c766&lang=css&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES2.vue?vue&type=style&index=1&id=c0e8c766&lang=css&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-c0e8c766] {\r\n    font-family: \"Google sans\";\n}\nlabel[data-v-c0e8c766] {\r\n    height: 10px;\r\n    font-size: 13px;\n}\ninput[type=\"text\"][data-v-c0e8c766],\r\ninput[type=\"date\"][data-v-c0e8c766],\r\nselect[data-v-c0e8c766] {\r\n    height: 35px;\r\n    border-color: #34495e;\r\n    color: #57606f;\r\n    font-size: 13px;\r\n    font-weight: bold;\n}\n.card-width-height[data-v-c0e8c766] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-c0e8c766] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\n.hdc[data-v-c0e8c766] {\r\n    background-color: #57606f;\n}\n.card-width-height[data-v-c0e8c766] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-c0e8c766] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\ninput[type=\"text\"][data-v-c0e8c766],\r\ninput[type=\"date\"][data-v-c0e8c766] {\r\n    width: 590px;\n}\n.review[data-v-c0e8c766] {\r\n    width: 180px !important;\n}\n.engagement input[type=\"text\"][data-v-c0e8c766],\r\ninput[type=\"date\"][data-v-c0e8c766] {\r\n    width: 100% !important;\n}\n.th[data-v-c0e8c766] {\r\n    padding: 4px;\r\n    padding-bottom: 0px;\n}\nselect[data-v-c0e8c766] {\r\n    width: 250px;\n}\n.badge-sm[data-v-c0e8c766] {\r\n    display: inline-block;\r\n    width: 15px;\r\n    height: 15px;\r\n    background: rgba(255, 0, 0, 0.882);\r\n    color: white;\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    border-radius: 100%;\r\n    position: absolute;\r\n    top: -20%;\r\n    left: 55%;\r\n    text-align: center;\n}\n.relook-header[data-v-c0e8c766] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\n.image1[data-v-c0e8c766] {\r\n    background: url(\"/images/capture_nsia/exemples/synthese_des_principaux_etapes_de_la_due_dilligence_es.png\")\r\n        no-repeat;\r\n    background-position: center;\r\n    background-size: contain;\r\n\r\n    width: 500px;\r\n    height: 300px;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES3.vue?vue&type=style&index=1&id=c0cc9864&lang=css&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES3.vue?vue&type=style&index=1&id=c0cc9864&lang=css&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-c0cc9864] {\r\n    font-family: \"Google sans\";\n}\nlabel[data-v-c0cc9864] {\r\n    height: 10px;\r\n    font-size: 13px;\n}\ninput[type=\"text\"][data-v-c0cc9864],\r\ninput[type=\"date\"][data-v-c0cc9864],\r\nselect[data-v-c0cc9864] {\r\n    height: 35px;\r\n    border-color: #34495e;\r\n    color: #57606f;\r\n    font-size: 13px;\r\n    font-weight: bold;\n}\n.card-width-height[data-v-c0cc9864] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-c0cc9864] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\n.hdc[data-v-c0cc9864] {\r\n    background-color: #57606f;\n}\n.form-check-input[type=radio][data-v-c0cc9864] {\r\n    border-radius: 22% !important ;\n}\n.card-width-height[data-v-c0cc9864] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-c0cc9864] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\r\n\r\n/* input[type=\"text\"],\r\ninput[type=\"date\"] {\r\n    width: 590px;\r\n} */\n.review[data-v-c0cc9864] {\r\n    width: 180px !important;\n}\n.engagement input[type=\"text\"][data-v-c0cc9864],\r\ninput[type=\"date\"][data-v-c0cc9864] {\r\n    width: 100% !important;\n}\n.th[data-v-c0cc9864] {\r\n    padding: 4px;\r\n    padding-bottom: 0px;\n}\nselect[data-v-c0cc9864] {\r\n    width: 250px;\n}\n.badge-sm[data-v-c0cc9864] {\r\n    display: inline-block;\r\n    width: 15px;\r\n    height: 15px;\r\n    background: rgba(255, 0, 0, 0.882);\r\n    color: white;\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    border-radius: 100%;\r\n    position: absolute;\r\n    top: -20%;\r\n    left: 55%;\r\n    text-align: center;\n}\n.relook-header[data-v-c0cc9864] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\n.image1[data-v-c0cc9864] {\r\n    background: url(\"/images/capture_nsia/exemples/pricipaux_risque.png\")\r\n        no-repeat;\r\n    background-position: center;\r\n    background-size: contain;\r\n\r\n    width: 500px;\r\n    height: 300px;\n}\ntable tr td[data-v-c0cc9864]{\r\n    vertical-align: middle;\n}\n.circle-btn[data-v-c0cc9864]{\r\n\r\n    border-radius: 50%;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES4.vue?vue&type=style&index=1&id=c0b06962&lang=css&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES4.vue?vue&type=style&index=1&id=c0b06962&lang=css&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-c0b06962] {\r\n    font-family: \"Google sans\";\n}\nlabel[data-v-c0b06962] {\r\n    height: 10px;\r\n    font-size: 13px;\n}\ninput[type=\"text\"][data-v-c0b06962],\r\ninput[type=\"date\"][data-v-c0b06962],\r\nselect[data-v-c0b06962] {\r\n    height: 35px;\r\n    border-color: #34495e;\r\n    color: #57606f;\r\n    font-size: 13px;\r\n    font-weight: bold;\n}\n.card-width-height[data-v-c0b06962] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-c0b06962] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\n.hdc[data-v-c0b06962] {\r\n    background-color: #57606f;\n}\n.card-width-height[data-v-c0b06962] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-c0b06962] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\ninput[type=\"text\"][data-v-c0b06962],\r\ninput[type=\"date\"][data-v-c0b06962] {\r\n    width: 590px;\n}\n.review[data-v-c0b06962] {\r\n    width: 180px !important;\n}\n.engagement input[type=\"text\"][data-v-c0b06962],\r\ninput[type=\"date\"][data-v-c0b06962] {\r\n    width: 100% !important;\n}\n.th[data-v-c0b06962] {\r\n    padding: 4px;\r\n    padding-bottom: 0px;\n}\nselect[data-v-c0b06962] {\r\n    width: 250px;\n}\n.badge-sm[data-v-c0b06962] {\r\n    display: inline-block;\r\n    width: 15px;\r\n    height: 15px;\r\n    background: rgba(255, 0, 0, 0.882);\r\n    color: white;\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    border-radius: 100%;\r\n    position: absolute;\r\n    top: -20%;\r\n    left: 55%;\r\n    text-align: center;\n}\n.relook-header[data-v-c0b06962] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\n.image1[data-v-c0b06962] {\r\n    background: url(\"/images/capture_nsia/exemples/convention_credit.png\")\r\n        no-repeat;\r\n    background-position: center;\r\n    background-size: contain;\r\n\r\n    width: 500px;\r\n    height: 300px;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES5.vue?vue&type=style&index=0&id=c0943a60&lang=css&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES5.vue?vue&type=style&index=0&id=c0943a60&lang=css&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-c0943a60] {\r\n    font-family: \"Google sans\";\n}\nth[data-v-c0943a60] {\r\n    font-size: 12px;\r\n    border: 1px solid #ddd;\n}\nthead[data-v-c0943a60] {\r\n    border: 1px solid #ddd;\n}\ntd[data-v-c0943a60] {\r\n    vertical-align: middle;\n}\nlabel[data-v-c0943a60] {\r\n    height: 10px;\r\n    font-size: 13px;\n}\ninput[data-v-c0943a60],\r\nselect[data-v-c0943a60] {\r\n    height: 35px;\r\n    border-color: #34495e;\r\n    color: #57606f;\r\n    font-size: 13px;\r\n    font-weight: bold;\n}\n.gras[data-v-c0943a60] {\r\n    font-weight: 600;\n}\n.card-width-height[data-v-c0943a60] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-c0943a60] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\n.hdc[data-v-c0943a60] {\r\n    background-color: #57606f;\n}\ntextarea[data-v-c0943a60] {\r\n    height: 38px;\n}\n.textarea-g[data-v-c0943a60] {\r\n    height: 100px!important\n}\r\n\r\n/* Ajouter note */\n.badge-sm[data-v-c0943a60] {\r\n    display: inline-block;\r\n    width: 15px;\r\n    height: 15px;\r\n    background: rgba(255, 0, 0, 0.882);\r\n    color: white;\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    border-radius: 100%;\r\n    position: absolute;\r\n    top: -20%;\r\n    left: 55%;\r\n    text-align: center;\n}\r\n\r\n/* td{\r\n    width:250px;\r\n} */\n.relook-header[data-v-c0943a60] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\n.bg-relooker[data-v-c0943a60] {\r\n    background-color: #2c3e50;\r\n    color: white;\n}\n.image1[data-v-c0943a60] {\r\n    background: url(\"/images/capture_nsia/exemples/plan_d_action.png\") no-repeat;\r\n    background-position: center;\r\n    background-size: contain;\r\n\r\n    width: 500px;\r\n    height: 300px;\n}\n.th[data-v-c0943a60] {\r\n    background: #f4f3f3 !important;\n}\r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES6.vue?vue&type=style&index=1&id=c0780b5e&lang=css&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES6.vue?vue&type=style&index=1&id=c0780b5e&lang=css&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-c0780b5e] {\r\n    font-family: \"Google sans\";\n}\nlabel[data-v-c0780b5e] {\r\n    height: 10px;\r\n    font-size: 13px;\n}\ninput[type=\"text\"][data-v-c0780b5e],\r\ninput[type=\"date\"][data-v-c0780b5e],\r\nselect[data-v-c0780b5e] {\r\n    height: 35px;\r\n    border-color: #34495e;\r\n    color: #57606f;\r\n    font-size: 13px;\r\n    font-weight: bold;\n}\n.card-width-height[data-v-c0780b5e] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-c0780b5e] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\n.hdc[data-v-c0780b5e] {\r\n    background-color: #57606f;\n}\n.card-width-height[data-v-c0780b5e] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-c0780b5e] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\ninput[type=\"text\"][data-v-c0780b5e],\r\ninput[type=\"date\"][data-v-c0780b5e] {\r\n    width: 590px;\n}\n.review[data-v-c0780b5e] {\r\n    width: 180px !important;\n}\n.engagement input[type=\"text\"][data-v-c0780b5e],\r\ninput[type=\"date\"][data-v-c0780b5e] {\r\n    width: 100% !important;\n}\n.th[data-v-c0780b5e] {\r\n    padding: 4px;\r\n    padding-bottom: 0px;\n}\nselect[data-v-c0780b5e] {\r\n    width: 250px;\n}\n.badge-sm[data-v-c0780b5e] {\r\n    display: inline-block;\r\n    width: 15px;\r\n    height: 15px;\r\n    background: rgba(255, 0, 0, 0.882);\r\n    color: white;\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    border-radius: 100%;\r\n    position: absolute;\r\n    top: -20%;\r\n    left: 55%;\r\n    text-align: center;\n}\n.relook-header[data-v-c0780b5e] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\n.image1[data-v-c0780b5e] {\r\n    background: url(\"/images/capture_nsia/exemples/avis_du_responsable_rse.png\")\r\n        no-repeat;\r\n    background-position: center;\r\n    background-size: contain;\r\n\r\n    width: 500px;\r\n    height: 300px;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES7.vue?vue&type=style&index=0&id=c05bdc5c&lang=css&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES7.vue?vue&type=style&index=0&id=c05bdc5c&lang=css&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\ninput[data-v-c05bdc5c] {\r\n    /*border: 1px solid red;*/\n}\n*[data-v-c05bdc5c] {\r\n    font-family: \"Google sans\";\n}\nlabel[data-v-c05bdc5c] {\r\n    height: 10px;\r\n    font-size: 13px;\n}\ninput[data-v-c05bdc5c],\r\nselect[data-v-c05bdc5c] {\r\n    height: 35px;\r\n    border-color: #34495e;\r\n    color: #57606f;\r\n    font-size: 13px;\r\n    font-weight: bold;\n}\n.card-width-height[data-v-c05bdc5c] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-c05bdc5c] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\n.hdc[data-v-c05bdc5c] {\r\n    background-color: #57606f;\n}\n.badge-sm[data-v-c05bdc5c] {\r\n    display: inline-block;\r\n    width: 15px;\r\n    height: 15px;\r\n    background: rgba(255, 0, 0, 0.882);\r\n    color: white;\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    border-radius: 100%;\r\n    position: absolute;\r\n    top: -20%;\r\n    left: 55%;\r\n    text-align: center;\n}\n.relook-header[data-v-c05bdc5c] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES8.vue?vue&type=style&index=0&id=c03fad5a&lang=css&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES8.vue?vue&type=style&index=0&id=c03fad5a&lang=css&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-c03fad5a] {\n\n  font-family: \"Google sans\";\n}\nlabel[data-v-c03fad5a] {\n  height: 10px;\n  font-size: 13px;\n}\ninput[type=text][data-v-c03fad5a],\ninput[type=date][data-v-c03fad5a],\nselect[data-v-c03fad5a] {\n  height: 35px;\n  border-color: #34495e;\n  color: #57606f;\n  font-size: 13px;\n  font-weight: bold;\n}\n.card-width-height[data-v-c03fad5a] {\n  width: 100%;\n  height: 100%;\n}\n.head[data-v-c03fad5a] {\n  color: #f1f2f6;\n  font-size: 22px;\n}\n.hdc[data-v-c03fad5a] {\n  background-color: #57606f;\n}\n.card-width-height[data-v-c03fad5a] {\n  width: 100%;\n  height: 100%;\n}\n.head[data-v-c03fad5a] {\n  color: #f1f2f6;\n  font-size: 22px;\n}\ninput[type=text][data-v-c03fad5a],\ninput[type=date][data-v-c03fad5a] {\n  width: 250px;\n}\n.th[data-v-c03fad5a] {\n  padding: 4px;\n  padding-bottom: 0px;\n}\nselect[data-v-c03fad5a] {\n  width: 250px;\n}\n.badge-sm[data-v-c03fad5a] {\n  display: inline-block;\n  width: 15px;\n  height: 15px;\n  background: rgba(255, 0, 0, 0.882);\n  color: white;\n  font-size: 12px;\n  font-weight: 500;\n  border-radius: 100%;\n  position: absolute;\n  top: -20%;\n  left: 55%;\n  text-align: center;\n}\n.relook-header[data-v-c03fad5a] {\n  color: #000;\n  background-color: #f4f3f3;\n  padding: 5px;\n  border-bottom: 1px solid #b6b8bb;\n}\n.selected-gray[data-v-c03fad5a] {\n    background-color: rgb(228, 227, 227);\n}\n.bg-light-green[data-v-c03fad5a] {\n    background: rgba(2, 90, 2, 0.075);\n    /* background-color: rgb(228, 227, 227); */\n        color: green;\n}\n.preview-img[data-v-c03fad5a] {\n  width: 100%;\n    height: auto;\n    min-height: 500px;\n    background-size: contain !important;\n    background-position: center !important;\n    background-repeat: no-repeat !important;\n}\n.fade-enter[data-v-c03fad5a],\n.fade-leave-to[data-v-c03fad5a] {\n    opacity: 0;\n    transition: all .3s\n}\n.fade-enter-to[data-v-c03fad5a],\n.fade-leave[data-v-c03fad5a] {\n    opacity: 1;\n    transition: all .3s\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/nsia/compte_rendu_visite_es/DCEI-PVES1.vue?vue&type=style&index=1&id=0ba4a99a&lang=css&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/nsia/compte_rendu_visite_es/DCEI-PVES1.vue?vue&type=style&index=1&id=0ba4a99a&lang=css&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-0ba4a99a] {\r\n    font-family: \"Google sans\";\n}\nlabel[data-v-0ba4a99a] {\r\n    height: 10px;\r\n    font-size: 13px;\n}\ninput[type=\"text\"][data-v-0ba4a99a],\r\ninput[type=\"date\"][data-v-0ba4a99a],\r\nselect[data-v-0ba4a99a] {\r\n    height: 35px;\r\n    border-color: #34495e;\r\n    color: #57606f;\r\n    font-size: 13px;\r\n    font-weight: bold;\n}\n.card-width-height[data-v-0ba4a99a] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-0ba4a99a] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\n.hdc[data-v-0ba4a99a] {\r\n    background-color: #57606f;\n}\n.card-width-height[data-v-0ba4a99a] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-0ba4a99a] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\r\n\r\n/* input[type=\"text\"],\r\ninput[type=\"date\"] {\r\n    width: 250px;\r\n} */\n.review[data-v-0ba4a99a]{\r\n    width: 180px !important;\n}\n.engagement input[type=\"text\"][data-v-0ba4a99a],\r\ninput[type=\"date\"][data-v-0ba4a99a] {\r\n    width: 100% !important;\n}\n.th[data-v-0ba4a99a] {\r\n    padding: 4px;\r\n    padding-bottom: 0px;\n}\nselect[data-v-0ba4a99a] {\r\n    width: 250px;\n}\n.badge-sm[data-v-0ba4a99a] {\r\n    display: inline-block;\r\n    width: 15px;\r\n    height: 15px;\r\n    background: rgba(255, 0, 0, 0.882);\r\n    color: white;\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    border-radius: 100%;\r\n    position: absolute;\r\n    top: -20%;\r\n    left: 55%;\r\n    text-align: center;\n}\n.relook-header[data-v-0ba4a99a] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/nsia/form_remonte_inc_es/DCEI-FRES1.vue?vue&type=style&index=1&id=f1261f18&lang=css&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/nsia/form_remonte_inc_es/DCEI-FRES1.vue?vue&type=style&index=1&id=f1261f18&lang=css&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-f1261f18] {\r\n    font-family: \"Google sans\";\n}\nlabel[data-v-f1261f18] {\r\n    height: 10px;\r\n    font-size: 13px;\n}\ninput[type=\"text\"][data-v-f1261f18],\r\ninput[type=\"date\"][data-v-f1261f18],\r\ninput[type=\"time\"][data-v-f1261f18],\r\nselect[data-v-f1261f18] {\r\n    height: 35px;\r\n    border-color: #34495e;\r\n    color: #57606f;\r\n    font-size: 13px;\r\n    font-weight: bold;\n}\n.card-width-height[data-v-f1261f18] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-f1261f18] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\n.hdc[data-v-f1261f18] {\r\n    background-color: #57606f;\n}\n.card-width-height[data-v-f1261f18] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-f1261f18] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\n.review[data-v-f1261f18]{\r\n    width: 180px !important;\n}\n.engagement input[type=\"text\"][data-v-f1261f18],\r\ninput[type=\"date\"][data-v-f1261f18] {\r\n    width: 100% !important;\n}\n.th[data-v-f1261f18] {\r\n    padding: 4px;\r\n    padding-bottom: 0px;\n}\nselect[data-v-f1261f18] {\r\n    width: 250px;\n}\n.badge-sm[data-v-f1261f18] {\r\n    display: inline-block;\r\n    width: 15px;\r\n    height: 15px;\r\n    background: rgba(255, 0, 0, 0.882);\r\n    color: white;\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    border-radius: 100%;\r\n    position: absolute;\r\n    top: -20%;\r\n    left: 55%;\r\n    text-align: center;\n}\n.relook-header[data-v-f1261f18] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/workspace/nsia/WorkspaceOnRSEAnlCenter.vue?vue&type=style&index=0&id=91c6d552&lang=css&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/workspace/nsia/WorkspaceOnRSEAnlCenter.vue?vue&type=style&index=0&id=91c6d552&lang=css&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.button[data-v-91c6d552] {\n  margin-top: 35px;\n}\n.flip-list-move[data-v-91c6d552] {\n  transition: transform 0.5s;\n}\n.no-move[data-v-91c6d552] {\n  transition: transform 0s;\n}\n.ghost[data-v-91c6d552] {\n  opacity: 0.5;\n  background: #c8ebfb;\n}\n.list-group[data-v-91c6d552] {\n  min-height: 20px;\n}\n.list-group-item[data-v-91c6d552] {\n  cursor: move;\n}\n.list-group-item i[data-v-91c6d552] {\n  cursor: pointer;\n}\n.hdc[data-v-91c6d552]{\n  height: 40px;\n}\n.memorandum[data-v-91c6d552]{\n  padding: 25px;\n}\n.contre-analyse[data-v-91c6d552]{\n  background-color: white;\n  /* box-shadow: 0 0 5px grey; */\n  padding: 10px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES1.vue?vue&type=style&index=1&id=c104f668&lang=css&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES1.vue?vue&type=style&index=1&id=c104f668&lang=css&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RSE_FES1_vue_vue_type_style_index_1_id_c104f668_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RSE-FES1.vue?vue&type=style&index=1&id=c104f668&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES1.vue?vue&type=style&index=1&id=c104f668&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RSE_FES1_vue_vue_type_style_index_1_id_c104f668_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RSE_FES1_vue_vue_type_style_index_1_id_c104f668_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES2.vue?vue&type=style&index=1&id=c0e8c766&lang=css&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES2.vue?vue&type=style&index=1&id=c0e8c766&lang=css&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RSE_FES2_vue_vue_type_style_index_1_id_c0e8c766_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RSE-FES2.vue?vue&type=style&index=1&id=c0e8c766&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES2.vue?vue&type=style&index=1&id=c0e8c766&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RSE_FES2_vue_vue_type_style_index_1_id_c0e8c766_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RSE_FES2_vue_vue_type_style_index_1_id_c0e8c766_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES3.vue?vue&type=style&index=1&id=c0cc9864&lang=css&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES3.vue?vue&type=style&index=1&id=c0cc9864&lang=css&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RSE_FES3_vue_vue_type_style_index_1_id_c0cc9864_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RSE-FES3.vue?vue&type=style&index=1&id=c0cc9864&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES3.vue?vue&type=style&index=1&id=c0cc9864&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RSE_FES3_vue_vue_type_style_index_1_id_c0cc9864_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RSE_FES3_vue_vue_type_style_index_1_id_c0cc9864_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES4.vue?vue&type=style&index=1&id=c0b06962&lang=css&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES4.vue?vue&type=style&index=1&id=c0b06962&lang=css&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RSE_FES4_vue_vue_type_style_index_1_id_c0b06962_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RSE-FES4.vue?vue&type=style&index=1&id=c0b06962&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES4.vue?vue&type=style&index=1&id=c0b06962&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RSE_FES4_vue_vue_type_style_index_1_id_c0b06962_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RSE_FES4_vue_vue_type_style_index_1_id_c0b06962_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES5.vue?vue&type=style&index=0&id=c0943a60&lang=css&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES5.vue?vue&type=style&index=0&id=c0943a60&lang=css&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RSE_FES5_vue_vue_type_style_index_0_id_c0943a60_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RSE-FES5.vue?vue&type=style&index=0&id=c0943a60&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES5.vue?vue&type=style&index=0&id=c0943a60&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RSE_FES5_vue_vue_type_style_index_0_id_c0943a60_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RSE_FES5_vue_vue_type_style_index_0_id_c0943a60_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES6.vue?vue&type=style&index=1&id=c0780b5e&lang=css&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES6.vue?vue&type=style&index=1&id=c0780b5e&lang=css&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RSE_FES6_vue_vue_type_style_index_1_id_c0780b5e_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RSE-FES6.vue?vue&type=style&index=1&id=c0780b5e&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES6.vue?vue&type=style&index=1&id=c0780b5e&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RSE_FES6_vue_vue_type_style_index_1_id_c0780b5e_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RSE_FES6_vue_vue_type_style_index_1_id_c0780b5e_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES7.vue?vue&type=style&index=0&id=c05bdc5c&lang=css&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES7.vue?vue&type=style&index=0&id=c05bdc5c&lang=css&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RSE_FES7_vue_vue_type_style_index_0_id_c05bdc5c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RSE-FES7.vue?vue&type=style&index=0&id=c05bdc5c&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES7.vue?vue&type=style&index=0&id=c05bdc5c&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RSE_FES7_vue_vue_type_style_index_0_id_c05bdc5c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RSE_FES7_vue_vue_type_style_index_0_id_c05bdc5c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES8.vue?vue&type=style&index=0&id=c03fad5a&lang=css&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES8.vue?vue&type=style&index=0&id=c03fad5a&lang=css&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RSE_FES8_vue_vue_type_style_index_0_id_c03fad5a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RSE-FES8.vue?vue&type=style&index=0&id=c03fad5a&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES8.vue?vue&type=style&index=0&id=c03fad5a&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RSE_FES8_vue_vue_type_style_index_0_id_c03fad5a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RSE_FES8_vue_vue_type_style_index_0_id_c03fad5a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/nsia/compte_rendu_visite_es/DCEI-PVES1.vue?vue&type=style&index=1&id=0ba4a99a&lang=css&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/nsia/compte_rendu_visite_es/DCEI-PVES1.vue?vue&type=style&index=1&id=0ba4a99a&lang=css&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCEI_PVES1_vue_vue_type_style_index_1_id_0ba4a99a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DCEI-PVES1.vue?vue&type=style&index=1&id=0ba4a99a&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/nsia/compte_rendu_visite_es/DCEI-PVES1.vue?vue&type=style&index=1&id=0ba4a99a&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCEI_PVES1_vue_vue_type_style_index_1_id_0ba4a99a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCEI_PVES1_vue_vue_type_style_index_1_id_0ba4a99a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/nsia/form_remonte_inc_es/DCEI-FRES1.vue?vue&type=style&index=1&id=f1261f18&lang=css&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/nsia/form_remonte_inc_es/DCEI-FRES1.vue?vue&type=style&index=1&id=f1261f18&lang=css&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCEI_FRES1_vue_vue_type_style_index_1_id_f1261f18_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DCEI-FRES1.vue?vue&type=style&index=1&id=f1261f18&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/nsia/form_remonte_inc_es/DCEI-FRES1.vue?vue&type=style&index=1&id=f1261f18&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCEI_FRES1_vue_vue_type_style_index_1_id_f1261f18_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCEI_FRES1_vue_vue_type_style_index_1_id_f1261f18_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/workspace/nsia/WorkspaceOnRSEAnlCenter.vue?vue&type=style&index=0&id=91c6d552&lang=css&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/workspace/nsia/WorkspaceOnRSEAnlCenter.vue?vue&type=style&index=0&id=91c6d552&lang=css&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkspaceOnRSEAnlCenter_vue_vue_type_style_index_0_id_91c6d552_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./WorkspaceOnRSEAnlCenter.vue?vue&type=style&index=0&id=91c6d552&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/workspace/nsia/WorkspaceOnRSEAnlCenter.vue?vue&type=style&index=0&id=91c6d552&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkspaceOnRSEAnlCenter_vue_vue_type_style_index_0_id_91c6d552_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkspaceOnRSEAnlCenter_vue_vue_type_style_index_0_id_91c6d552_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/activiterse/filiale/RSE-FES1.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/activiterse/filiale/RSE-FES1.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RSE_FES1_vue_vue_type_template_id_c104f668_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RSE-FES1.vue?vue&type=template&id=c104f668&scoped=true */ "./resources/js/components/activiterse/filiale/RSE-FES1.vue?vue&type=template&id=c104f668&scoped=true");
/* harmony import */ var _RSE_FES1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RSE-FES1.vue?vue&type=script&lang=js */ "./resources/js/components/activiterse/filiale/RSE-FES1.vue?vue&type=script&lang=js");
/* harmony import */ var _vueform_multiselect_themes_default_css_vue_type_style_index_0_lang_css_external__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vueform/multiselect/themes/default.css?vue&type=style&index=0&lang=css&external */ "./node_modules/@vueform/multiselect/themes/default.css?vue&type=style&index=0&lang=css&external");
/* harmony import */ var _RSE_FES1_vue_vue_type_style_index_1_id_c104f668_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RSE-FES1.vue?vue&type=style&index=1&id=c104f668&lang=css&scoped=true */ "./resources/js/components/activiterse/filiale/RSE-FES1.vue?vue&type=style&index=1&id=c104f668&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;



/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _RSE_FES1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _RSE_FES1_vue_vue_type_template_id_c104f668_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _RSE_FES1_vue_vue_type_template_id_c104f668_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "c104f668",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/activiterse/filiale/RSE-FES1.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/activiterse/filiale/RSE-FES1.vue?vue&type=script&lang=js":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/activiterse/filiale/RSE-FES1.vue?vue&type=script&lang=js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RSE_FES1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RSE-FES1.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES1.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RSE_FES1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/activiterse/filiale/RSE-FES1.vue?vue&type=style&index=1&id=c104f668&lang=css&scoped=true":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/components/activiterse/filiale/RSE-FES1.vue?vue&type=style&index=1&id=c104f668&lang=css&scoped=true ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RSE_FES1_vue_vue_type_style_index_1_id_c104f668_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RSE-FES1.vue?vue&type=style&index=1&id=c104f668&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES1.vue?vue&type=style&index=1&id=c104f668&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/activiterse/filiale/RSE-FES1.vue?vue&type=template&id=c104f668&scoped=true":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/activiterse/filiale/RSE-FES1.vue?vue&type=template&id=c104f668&scoped=true ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RSE_FES1_vue_vue_type_template_id_c104f668_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RSE_FES1_vue_vue_type_template_id_c104f668_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RSE_FES1_vue_vue_type_template_id_c104f668_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RSE-FES1.vue?vue&type=template&id=c104f668&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES1.vue?vue&type=template&id=c104f668&scoped=true");


/***/ }),

/***/ "./resources/js/components/activiterse/filiale/RSE-FES2.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/activiterse/filiale/RSE-FES2.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RSE_FES2_vue_vue_type_template_id_c0e8c766_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RSE-FES2.vue?vue&type=template&id=c0e8c766&scoped=true */ "./resources/js/components/activiterse/filiale/RSE-FES2.vue?vue&type=template&id=c0e8c766&scoped=true");
/* harmony import */ var _RSE_FES2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RSE-FES2.vue?vue&type=script&lang=js */ "./resources/js/components/activiterse/filiale/RSE-FES2.vue?vue&type=script&lang=js");
/* harmony import */ var _vueform_multiselect_themes_default_css_vue_type_style_index_0_lang_css_external__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vueform/multiselect/themes/default.css?vue&type=style&index=0&lang=css&external */ "./node_modules/@vueform/multiselect/themes/default.css?vue&type=style&index=0&lang=css&external");
/* harmony import */ var _RSE_FES2_vue_vue_type_style_index_1_id_c0e8c766_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RSE-FES2.vue?vue&type=style&index=1&id=c0e8c766&lang=css&scoped=true */ "./resources/js/components/activiterse/filiale/RSE-FES2.vue?vue&type=style&index=1&id=c0e8c766&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;



/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _RSE_FES2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _RSE_FES2_vue_vue_type_template_id_c0e8c766_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _RSE_FES2_vue_vue_type_template_id_c0e8c766_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "c0e8c766",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/activiterse/filiale/RSE-FES2.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/activiterse/filiale/RSE-FES2.vue?vue&type=script&lang=js":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/activiterse/filiale/RSE-FES2.vue?vue&type=script&lang=js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RSE_FES2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RSE-FES2.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES2.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RSE_FES2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/activiterse/filiale/RSE-FES2.vue?vue&type=style&index=1&id=c0e8c766&lang=css&scoped=true":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/components/activiterse/filiale/RSE-FES2.vue?vue&type=style&index=1&id=c0e8c766&lang=css&scoped=true ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RSE_FES2_vue_vue_type_style_index_1_id_c0e8c766_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RSE-FES2.vue?vue&type=style&index=1&id=c0e8c766&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES2.vue?vue&type=style&index=1&id=c0e8c766&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/activiterse/filiale/RSE-FES2.vue?vue&type=template&id=c0e8c766&scoped=true":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/activiterse/filiale/RSE-FES2.vue?vue&type=template&id=c0e8c766&scoped=true ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RSE_FES2_vue_vue_type_template_id_c0e8c766_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RSE_FES2_vue_vue_type_template_id_c0e8c766_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RSE_FES2_vue_vue_type_template_id_c0e8c766_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RSE-FES2.vue?vue&type=template&id=c0e8c766&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES2.vue?vue&type=template&id=c0e8c766&scoped=true");


/***/ }),

/***/ "./resources/js/components/activiterse/filiale/RSE-FES3.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/activiterse/filiale/RSE-FES3.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RSE_FES3_vue_vue_type_template_id_c0cc9864_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RSE-FES3.vue?vue&type=template&id=c0cc9864&scoped=true */ "./resources/js/components/activiterse/filiale/RSE-FES3.vue?vue&type=template&id=c0cc9864&scoped=true");
/* harmony import */ var _RSE_FES3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RSE-FES3.vue?vue&type=script&lang=js */ "./resources/js/components/activiterse/filiale/RSE-FES3.vue?vue&type=script&lang=js");
/* harmony import */ var _vueform_multiselect_themes_default_css_vue_type_style_index_0_lang_css_external__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vueform/multiselect/themes/default.css?vue&type=style&index=0&lang=css&external */ "./node_modules/@vueform/multiselect/themes/default.css?vue&type=style&index=0&lang=css&external");
/* harmony import */ var _RSE_FES3_vue_vue_type_style_index_1_id_c0cc9864_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RSE-FES3.vue?vue&type=style&index=1&id=c0cc9864&lang=css&scoped=true */ "./resources/js/components/activiterse/filiale/RSE-FES3.vue?vue&type=style&index=1&id=c0cc9864&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;



/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _RSE_FES3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _RSE_FES3_vue_vue_type_template_id_c0cc9864_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _RSE_FES3_vue_vue_type_template_id_c0cc9864_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "c0cc9864",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/activiterse/filiale/RSE-FES3.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/activiterse/filiale/RSE-FES3.vue?vue&type=script&lang=js":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/activiterse/filiale/RSE-FES3.vue?vue&type=script&lang=js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RSE_FES3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RSE-FES3.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES3.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RSE_FES3_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/activiterse/filiale/RSE-FES3.vue?vue&type=style&index=1&id=c0cc9864&lang=css&scoped=true":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/components/activiterse/filiale/RSE-FES3.vue?vue&type=style&index=1&id=c0cc9864&lang=css&scoped=true ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RSE_FES3_vue_vue_type_style_index_1_id_c0cc9864_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RSE-FES3.vue?vue&type=style&index=1&id=c0cc9864&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES3.vue?vue&type=style&index=1&id=c0cc9864&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/activiterse/filiale/RSE-FES3.vue?vue&type=template&id=c0cc9864&scoped=true":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/activiterse/filiale/RSE-FES3.vue?vue&type=template&id=c0cc9864&scoped=true ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RSE_FES3_vue_vue_type_template_id_c0cc9864_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RSE_FES3_vue_vue_type_template_id_c0cc9864_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RSE_FES3_vue_vue_type_template_id_c0cc9864_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RSE-FES3.vue?vue&type=template&id=c0cc9864&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES3.vue?vue&type=template&id=c0cc9864&scoped=true");


/***/ }),

/***/ "./resources/js/components/activiterse/filiale/RSE-FES4.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/activiterse/filiale/RSE-FES4.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RSE_FES4_vue_vue_type_template_id_c0b06962_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RSE-FES4.vue?vue&type=template&id=c0b06962&scoped=true */ "./resources/js/components/activiterse/filiale/RSE-FES4.vue?vue&type=template&id=c0b06962&scoped=true");
/* harmony import */ var _RSE_FES4_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RSE-FES4.vue?vue&type=script&lang=js */ "./resources/js/components/activiterse/filiale/RSE-FES4.vue?vue&type=script&lang=js");
/* harmony import */ var _vueform_multiselect_themes_default_css_vue_type_style_index_0_lang_css_external__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vueform/multiselect/themes/default.css?vue&type=style&index=0&lang=css&external */ "./node_modules/@vueform/multiselect/themes/default.css?vue&type=style&index=0&lang=css&external");
/* harmony import */ var _RSE_FES4_vue_vue_type_style_index_1_id_c0b06962_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RSE-FES4.vue?vue&type=style&index=1&id=c0b06962&lang=css&scoped=true */ "./resources/js/components/activiterse/filiale/RSE-FES4.vue?vue&type=style&index=1&id=c0b06962&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;



/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _RSE_FES4_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _RSE_FES4_vue_vue_type_template_id_c0b06962_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _RSE_FES4_vue_vue_type_template_id_c0b06962_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "c0b06962",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/activiterse/filiale/RSE-FES4.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/activiterse/filiale/RSE-FES4.vue?vue&type=script&lang=js":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/activiterse/filiale/RSE-FES4.vue?vue&type=script&lang=js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RSE_FES4_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RSE-FES4.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES4.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RSE_FES4_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/activiterse/filiale/RSE-FES4.vue?vue&type=style&index=1&id=c0b06962&lang=css&scoped=true":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/components/activiterse/filiale/RSE-FES4.vue?vue&type=style&index=1&id=c0b06962&lang=css&scoped=true ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RSE_FES4_vue_vue_type_style_index_1_id_c0b06962_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RSE-FES4.vue?vue&type=style&index=1&id=c0b06962&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES4.vue?vue&type=style&index=1&id=c0b06962&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/activiterse/filiale/RSE-FES4.vue?vue&type=template&id=c0b06962&scoped=true":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/activiterse/filiale/RSE-FES4.vue?vue&type=template&id=c0b06962&scoped=true ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RSE_FES4_vue_vue_type_template_id_c0b06962_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RSE_FES4_vue_vue_type_template_id_c0b06962_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RSE_FES4_vue_vue_type_template_id_c0b06962_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RSE-FES4.vue?vue&type=template&id=c0b06962&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES4.vue?vue&type=template&id=c0b06962&scoped=true");


/***/ }),

/***/ "./resources/js/components/activiterse/filiale/RSE-FES5.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/activiterse/filiale/RSE-FES5.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RSE_FES5_vue_vue_type_template_id_c0943a60_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RSE-FES5.vue?vue&type=template&id=c0943a60&scoped=true */ "./resources/js/components/activiterse/filiale/RSE-FES5.vue?vue&type=template&id=c0943a60&scoped=true");
/* harmony import */ var _RSE_FES5_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RSE-FES5.vue?vue&type=script&lang=js */ "./resources/js/components/activiterse/filiale/RSE-FES5.vue?vue&type=script&lang=js");
/* harmony import */ var _RSE_FES5_vue_vue_type_style_index_0_id_c0943a60_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RSE-FES5.vue?vue&type=style&index=0&id=c0943a60&lang=css&scoped=true */ "./resources/js/components/activiterse/filiale/RSE-FES5.vue?vue&type=style&index=0&id=c0943a60&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _RSE_FES5_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _RSE_FES5_vue_vue_type_template_id_c0943a60_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _RSE_FES5_vue_vue_type_template_id_c0943a60_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "c0943a60",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/activiterse/filiale/RSE-FES5.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/activiterse/filiale/RSE-FES5.vue?vue&type=script&lang=js":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/activiterse/filiale/RSE-FES5.vue?vue&type=script&lang=js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RSE_FES5_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RSE-FES5.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES5.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RSE_FES5_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/activiterse/filiale/RSE-FES5.vue?vue&type=style&index=0&id=c0943a60&lang=css&scoped=true":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/components/activiterse/filiale/RSE-FES5.vue?vue&type=style&index=0&id=c0943a60&lang=css&scoped=true ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RSE_FES5_vue_vue_type_style_index_0_id_c0943a60_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RSE-FES5.vue?vue&type=style&index=0&id=c0943a60&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES5.vue?vue&type=style&index=0&id=c0943a60&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/activiterse/filiale/RSE-FES5.vue?vue&type=template&id=c0943a60&scoped=true":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/activiterse/filiale/RSE-FES5.vue?vue&type=template&id=c0943a60&scoped=true ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RSE_FES5_vue_vue_type_template_id_c0943a60_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RSE_FES5_vue_vue_type_template_id_c0943a60_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RSE_FES5_vue_vue_type_template_id_c0943a60_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RSE-FES5.vue?vue&type=template&id=c0943a60&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES5.vue?vue&type=template&id=c0943a60&scoped=true");


/***/ }),

/***/ "./resources/js/components/activiterse/filiale/RSE-FES6.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/activiterse/filiale/RSE-FES6.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RSE_FES6_vue_vue_type_template_id_c0780b5e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RSE-FES6.vue?vue&type=template&id=c0780b5e&scoped=true */ "./resources/js/components/activiterse/filiale/RSE-FES6.vue?vue&type=template&id=c0780b5e&scoped=true");
/* harmony import */ var _RSE_FES6_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RSE-FES6.vue?vue&type=script&lang=js */ "./resources/js/components/activiterse/filiale/RSE-FES6.vue?vue&type=script&lang=js");
/* harmony import */ var _vueform_multiselect_themes_default_css_vue_type_style_index_0_lang_css_external__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vueform/multiselect/themes/default.css?vue&type=style&index=0&lang=css&external */ "./node_modules/@vueform/multiselect/themes/default.css?vue&type=style&index=0&lang=css&external");
/* harmony import */ var _RSE_FES6_vue_vue_type_style_index_1_id_c0780b5e_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RSE-FES6.vue?vue&type=style&index=1&id=c0780b5e&lang=css&scoped=true */ "./resources/js/components/activiterse/filiale/RSE-FES6.vue?vue&type=style&index=1&id=c0780b5e&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;



/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _RSE_FES6_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _RSE_FES6_vue_vue_type_template_id_c0780b5e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _RSE_FES6_vue_vue_type_template_id_c0780b5e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "c0780b5e",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/activiterse/filiale/RSE-FES6.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/activiterse/filiale/RSE-FES6.vue?vue&type=script&lang=js":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/activiterse/filiale/RSE-FES6.vue?vue&type=script&lang=js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RSE_FES6_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RSE-FES6.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES6.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RSE_FES6_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/activiterse/filiale/RSE-FES6.vue?vue&type=style&index=1&id=c0780b5e&lang=css&scoped=true":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/components/activiterse/filiale/RSE-FES6.vue?vue&type=style&index=1&id=c0780b5e&lang=css&scoped=true ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RSE_FES6_vue_vue_type_style_index_1_id_c0780b5e_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RSE-FES6.vue?vue&type=style&index=1&id=c0780b5e&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES6.vue?vue&type=style&index=1&id=c0780b5e&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/activiterse/filiale/RSE-FES6.vue?vue&type=template&id=c0780b5e&scoped=true":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/activiterse/filiale/RSE-FES6.vue?vue&type=template&id=c0780b5e&scoped=true ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RSE_FES6_vue_vue_type_template_id_c0780b5e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RSE_FES6_vue_vue_type_template_id_c0780b5e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RSE_FES6_vue_vue_type_template_id_c0780b5e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RSE-FES6.vue?vue&type=template&id=c0780b5e&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES6.vue?vue&type=template&id=c0780b5e&scoped=true");


/***/ }),

/***/ "./resources/js/components/activiterse/filiale/RSE-FES7.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/activiterse/filiale/RSE-FES7.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RSE_FES7_vue_vue_type_template_id_c05bdc5c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RSE-FES7.vue?vue&type=template&id=c05bdc5c&scoped=true */ "./resources/js/components/activiterse/filiale/RSE-FES7.vue?vue&type=template&id=c05bdc5c&scoped=true");
/* harmony import */ var _RSE_FES7_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RSE-FES7.vue?vue&type=script&lang=js */ "./resources/js/components/activiterse/filiale/RSE-FES7.vue?vue&type=script&lang=js");
/* harmony import */ var _RSE_FES7_vue_vue_type_style_index_0_id_c05bdc5c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RSE-FES7.vue?vue&type=style&index=0&id=c05bdc5c&lang=css&scoped=true */ "./resources/js/components/activiterse/filiale/RSE-FES7.vue?vue&type=style&index=0&id=c05bdc5c&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _RSE_FES7_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _RSE_FES7_vue_vue_type_template_id_c05bdc5c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _RSE_FES7_vue_vue_type_template_id_c05bdc5c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "c05bdc5c",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/activiterse/filiale/RSE-FES7.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/activiterse/filiale/RSE-FES7.vue?vue&type=script&lang=js":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/activiterse/filiale/RSE-FES7.vue?vue&type=script&lang=js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RSE_FES7_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RSE-FES7.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES7.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RSE_FES7_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/activiterse/filiale/RSE-FES7.vue?vue&type=style&index=0&id=c05bdc5c&lang=css&scoped=true":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/components/activiterse/filiale/RSE-FES7.vue?vue&type=style&index=0&id=c05bdc5c&lang=css&scoped=true ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RSE_FES7_vue_vue_type_style_index_0_id_c05bdc5c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RSE-FES7.vue?vue&type=style&index=0&id=c05bdc5c&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES7.vue?vue&type=style&index=0&id=c05bdc5c&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/activiterse/filiale/RSE-FES7.vue?vue&type=template&id=c05bdc5c&scoped=true":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/activiterse/filiale/RSE-FES7.vue?vue&type=template&id=c05bdc5c&scoped=true ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RSE_FES7_vue_vue_type_template_id_c05bdc5c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RSE_FES7_vue_vue_type_template_id_c05bdc5c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RSE_FES7_vue_vue_type_template_id_c05bdc5c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RSE-FES7.vue?vue&type=template&id=c05bdc5c&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES7.vue?vue&type=template&id=c05bdc5c&scoped=true");


/***/ }),

/***/ "./resources/js/components/activiterse/filiale/RSE-FES8.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/activiterse/filiale/RSE-FES8.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RSE_FES8_vue_vue_type_template_id_c03fad5a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RSE-FES8.vue?vue&type=template&id=c03fad5a&scoped=true */ "./resources/js/components/activiterse/filiale/RSE-FES8.vue?vue&type=template&id=c03fad5a&scoped=true");
/* harmony import */ var _RSE_FES8_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RSE-FES8.vue?vue&type=script&lang=js */ "./resources/js/components/activiterse/filiale/RSE-FES8.vue?vue&type=script&lang=js");
/* harmony import */ var _RSE_FES8_vue_vue_type_style_index_0_id_c03fad5a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RSE-FES8.vue?vue&type=style&index=0&id=c03fad5a&lang=css&scoped=true */ "./resources/js/components/activiterse/filiale/RSE-FES8.vue?vue&type=style&index=0&id=c03fad5a&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _RSE_FES8_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _RSE_FES8_vue_vue_type_template_id_c03fad5a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _RSE_FES8_vue_vue_type_template_id_c03fad5a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "c03fad5a",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/activiterse/filiale/RSE-FES8.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/activiterse/filiale/RSE-FES8.vue?vue&type=script&lang=js":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/activiterse/filiale/RSE-FES8.vue?vue&type=script&lang=js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RSE_FES8_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RSE-FES8.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES8.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RSE_FES8_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/activiterse/filiale/RSE-FES8.vue?vue&type=style&index=0&id=c03fad5a&lang=css&scoped=true":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/components/activiterse/filiale/RSE-FES8.vue?vue&type=style&index=0&id=c03fad5a&lang=css&scoped=true ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RSE_FES8_vue_vue_type_style_index_0_id_c03fad5a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RSE-FES8.vue?vue&type=style&index=0&id=c03fad5a&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES8.vue?vue&type=style&index=0&id=c03fad5a&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/activiterse/filiale/RSE-FES8.vue?vue&type=template&id=c03fad5a&scoped=true":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/activiterse/filiale/RSE-FES8.vue?vue&type=template&id=c03fad5a&scoped=true ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RSE_FES8_vue_vue_type_template_id_c03fad5a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RSE_FES8_vue_vue_type_template_id_c03fad5a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RSE_FES8_vue_vue_type_template_id_c03fad5a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RSE-FES8.vue?vue&type=template&id=c03fad5a&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/activiterse/filiale/RSE-FES8.vue?vue&type=template&id=c03fad5a&scoped=true");


/***/ }),

/***/ "./resources/js/components/forms/nsia/compte_rendu_visite_es/DCEI-PVES1.vue":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/forms/nsia/compte_rendu_visite_es/DCEI-PVES1.vue ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DCEI_PVES1_vue_vue_type_template_id_0ba4a99a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DCEI-PVES1.vue?vue&type=template&id=0ba4a99a&scoped=true */ "./resources/js/components/forms/nsia/compte_rendu_visite_es/DCEI-PVES1.vue?vue&type=template&id=0ba4a99a&scoped=true");
/* harmony import */ var _DCEI_PVES1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DCEI-PVES1.vue?vue&type=script&lang=js */ "./resources/js/components/forms/nsia/compte_rendu_visite_es/DCEI-PVES1.vue?vue&type=script&lang=js");
/* harmony import */ var _vueform_multiselect_themes_default_css_vue_type_style_index_0_lang_css_external__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vueform/multiselect/themes/default.css?vue&type=style&index=0&lang=css&external */ "./node_modules/@vueform/multiselect/themes/default.css?vue&type=style&index=0&lang=css&external");
/* harmony import */ var _DCEI_PVES1_vue_vue_type_style_index_1_id_0ba4a99a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DCEI-PVES1.vue?vue&type=style&index=1&id=0ba4a99a&lang=css&scoped=true */ "./resources/js/components/forms/nsia/compte_rendu_visite_es/DCEI-PVES1.vue?vue&type=style&index=1&id=0ba4a99a&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;



/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _DCEI_PVES1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _DCEI_PVES1_vue_vue_type_template_id_0ba4a99a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _DCEI_PVES1_vue_vue_type_template_id_0ba4a99a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "0ba4a99a",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/forms/nsia/compte_rendu_visite_es/DCEI-PVES1.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/forms/nsia/compte_rendu_visite_es/DCEI-PVES1.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/forms/nsia/compte_rendu_visite_es/DCEI-PVES1.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DCEI_PVES1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DCEI-PVES1.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/nsia/compte_rendu_visite_es/DCEI-PVES1.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DCEI_PVES1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/forms/nsia/compte_rendu_visite_es/DCEI-PVES1.vue?vue&type=style&index=1&id=0ba4a99a&lang=css&scoped=true":
/*!******************************************************************************************************************************************!*\
  !*** ./resources/js/components/forms/nsia/compte_rendu_visite_es/DCEI-PVES1.vue?vue&type=style&index=1&id=0ba4a99a&lang=css&scoped=true ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCEI_PVES1_vue_vue_type_style_index_1_id_0ba4a99a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DCEI-PVES1.vue?vue&type=style&index=1&id=0ba4a99a&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/nsia/compte_rendu_visite_es/DCEI-PVES1.vue?vue&type=style&index=1&id=0ba4a99a&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/forms/nsia/compte_rendu_visite_es/DCEI-PVES1.vue?vue&type=template&id=0ba4a99a&scoped=true":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/components/forms/nsia/compte_rendu_visite_es/DCEI-PVES1.vue?vue&type=template&id=0ba4a99a&scoped=true ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCEI_PVES1_vue_vue_type_template_id_0ba4a99a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCEI_PVES1_vue_vue_type_template_id_0ba4a99a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCEI_PVES1_vue_vue_type_template_id_0ba4a99a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DCEI-PVES1.vue?vue&type=template&id=0ba4a99a&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/nsia/compte_rendu_visite_es/DCEI-PVES1.vue?vue&type=template&id=0ba4a99a&scoped=true");


/***/ }),

/***/ "./resources/js/components/forms/nsia/form_remonte_inc_es/DCEI-FRES1.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/forms/nsia/form_remonte_inc_es/DCEI-FRES1.vue ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DCEI_FRES1_vue_vue_type_template_id_f1261f18_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DCEI-FRES1.vue?vue&type=template&id=f1261f18&scoped=true */ "./resources/js/components/forms/nsia/form_remonte_inc_es/DCEI-FRES1.vue?vue&type=template&id=f1261f18&scoped=true");
/* harmony import */ var _DCEI_FRES1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DCEI-FRES1.vue?vue&type=script&lang=js */ "./resources/js/components/forms/nsia/form_remonte_inc_es/DCEI-FRES1.vue?vue&type=script&lang=js");
/* harmony import */ var _vueform_multiselect_themes_default_css_vue_type_style_index_0_lang_css_external__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vueform/multiselect/themes/default.css?vue&type=style&index=0&lang=css&external */ "./node_modules/@vueform/multiselect/themes/default.css?vue&type=style&index=0&lang=css&external");
/* harmony import */ var _DCEI_FRES1_vue_vue_type_style_index_1_id_f1261f18_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DCEI-FRES1.vue?vue&type=style&index=1&id=f1261f18&lang=css&scoped=true */ "./resources/js/components/forms/nsia/form_remonte_inc_es/DCEI-FRES1.vue?vue&type=style&index=1&id=f1261f18&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;



/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _DCEI_FRES1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _DCEI_FRES1_vue_vue_type_template_id_f1261f18_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _DCEI_FRES1_vue_vue_type_template_id_f1261f18_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "f1261f18",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/forms/nsia/form_remonte_inc_es/DCEI-FRES1.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/forms/nsia/form_remonte_inc_es/DCEI-FRES1.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/forms/nsia/form_remonte_inc_es/DCEI-FRES1.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DCEI_FRES1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DCEI-FRES1.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/nsia/form_remonte_inc_es/DCEI-FRES1.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DCEI_FRES1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/forms/nsia/form_remonte_inc_es/DCEI-FRES1.vue?vue&type=style&index=1&id=f1261f18&lang=css&scoped=true":
/*!***************************************************************************************************************************************!*\
  !*** ./resources/js/components/forms/nsia/form_remonte_inc_es/DCEI-FRES1.vue?vue&type=style&index=1&id=f1261f18&lang=css&scoped=true ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCEI_FRES1_vue_vue_type_style_index_1_id_f1261f18_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DCEI-FRES1.vue?vue&type=style&index=1&id=f1261f18&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/nsia/form_remonte_inc_es/DCEI-FRES1.vue?vue&type=style&index=1&id=f1261f18&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/forms/nsia/form_remonte_inc_es/DCEI-FRES1.vue?vue&type=template&id=f1261f18&scoped=true":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/forms/nsia/form_remonte_inc_es/DCEI-FRES1.vue?vue&type=template&id=f1261f18&scoped=true ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCEI_FRES1_vue_vue_type_template_id_f1261f18_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCEI_FRES1_vue_vue_type_template_id_f1261f18_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCEI_FRES1_vue_vue_type_template_id_f1261f18_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DCEI-FRES1.vue?vue&type=template&id=f1261f18&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/nsia/form_remonte_inc_es/DCEI-FRES1.vue?vue&type=template&id=f1261f18&scoped=true");


/***/ }),

/***/ "./resources/js/components/workspace/nsia/WorkspaceOnRSEAnlCenter.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/components/workspace/nsia/WorkspaceOnRSEAnlCenter.vue ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _WorkspaceOnRSEAnlCenter_vue_vue_type_template_id_91c6d552_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WorkspaceOnRSEAnlCenter.vue?vue&type=template&id=91c6d552&scoped=true */ "./resources/js/components/workspace/nsia/WorkspaceOnRSEAnlCenter.vue?vue&type=template&id=91c6d552&scoped=true");
/* harmony import */ var _WorkspaceOnRSEAnlCenter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WorkspaceOnRSEAnlCenter.vue?vue&type=script&lang=js */ "./resources/js/components/workspace/nsia/WorkspaceOnRSEAnlCenter.vue?vue&type=script&lang=js");
/* harmony import */ var _WorkspaceOnRSEAnlCenter_vue_vue_type_style_index_0_id_91c6d552_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WorkspaceOnRSEAnlCenter.vue?vue&type=style&index=0&id=91c6d552&lang=css&scoped=true */ "./resources/js/components/workspace/nsia/WorkspaceOnRSEAnlCenter.vue?vue&type=style&index=0&id=91c6d552&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _WorkspaceOnRSEAnlCenter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _WorkspaceOnRSEAnlCenter_vue_vue_type_template_id_91c6d552_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _WorkspaceOnRSEAnlCenter_vue_vue_type_template_id_91c6d552_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "91c6d552",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/workspace/nsia/WorkspaceOnRSEAnlCenter.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/workspace/nsia/WorkspaceOnRSEAnlCenter.vue?vue&type=script&lang=js":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/workspace/nsia/WorkspaceOnRSEAnlCenter.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkspaceOnRSEAnlCenter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./WorkspaceOnRSEAnlCenter.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/workspace/nsia/WorkspaceOnRSEAnlCenter.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkspaceOnRSEAnlCenter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/workspace/nsia/WorkspaceOnRSEAnlCenter.vue?vue&type=style&index=0&id=91c6d552&lang=css&scoped=true":
/*!************************************************************************************************************************************!*\
  !*** ./resources/js/components/workspace/nsia/WorkspaceOnRSEAnlCenter.vue?vue&type=style&index=0&id=91c6d552&lang=css&scoped=true ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkspaceOnRSEAnlCenter_vue_vue_type_style_index_0_id_91c6d552_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./WorkspaceOnRSEAnlCenter.vue?vue&type=style&index=0&id=91c6d552&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/workspace/nsia/WorkspaceOnRSEAnlCenter.vue?vue&type=style&index=0&id=91c6d552&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/workspace/nsia/WorkspaceOnRSEAnlCenter.vue?vue&type=template&id=91c6d552&scoped=true":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/workspace/nsia/WorkspaceOnRSEAnlCenter.vue?vue&type=template&id=91c6d552&scoped=true ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkspaceOnRSEAnlCenter_vue_vue_type_template_id_91c6d552_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkspaceOnRSEAnlCenter_vue_vue_type_template_id_91c6d552_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkspaceOnRSEAnlCenter_vue_vue_type_template_id_91c6d552_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./WorkspaceOnRSEAnlCenter.vue?vue&type=template&id=91c6d552&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/workspace/nsia/WorkspaceOnRSEAnlCenter.vue?vue&type=template&id=91c6d552&scoped=true");


/***/ })

}]);