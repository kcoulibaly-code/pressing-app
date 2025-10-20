"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_forms_nsia_DCEI-CHCR1_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/nsia/DCEI-CHCR1.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/nsia/DCEI-CHCR1.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************/
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
  name: "Check_list_de_restructuration",
  display: "Check list de restructuration",
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
  },
  mounted: function mounted() {
    var _this2 = this;
    // Initiate cache

    // // this.initCache();
    //

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
    this.loadTbAttrs();
    // charge les attributs + sous attributs des tables
    // EventBus.$on("montant-credit-updated", (data) => {
    //     // console.log(data.numero_pret_a_rachete)
    //     this.montant_dep_gar_crsd = Number(data.garantie?.toString().replace(/\s/g, ""))
    //                                 + Number(data.crsd?.toString().replace(/\s/g, ""))
    //
    //     let a = Number(data.montant_credit?.toString().replace(/\s/g, ""));
    //     a = !a ? 1 : a;
    //     let value =
    //         (Number(this.montant_dep_gar_crsd?.toString().replace(/\s+/g, "")) * 100) /
    //         a;
    //
    //     this.taux_dep_gar_crsd = isFinite(value) ? value.toFixed(2) : 0;
    //     let datapaste = {
    //         duree_credit: data.duree_credit,
    //         mode_paiement: data.mode_paiement
    //     }
    //     this.recomputeSouscriptionValue(datapaste)

    // this.defaultSuretes[1] = {
    //     label: `Dépôt de garantie et compte de réserve du service de la dette (DG + CRSD) à hauteur de ${this.montant_dep_gar_crsd.toLocaleString('fr-FR', { maximumSignificantDigits: 2 })} FCFA soit ${this.taux_dep_gar_crsd}% du montant proposé`,
    //     value: {
    //         label: `Dépôt de garantie et compte de réserve du service de la dette (DG + CRSD) à hauteur de ${this.montant_dep_gar_crsd.toLocaleString('fr-FR', { maximumSignificantDigits: 2 })} FCFA soit ${this.taux_dep_gar_crsd}% du montant proposé`,
    //         nom: "depot",
    //         taux: this.taux_dep_gar_crsd,
    //         montant: this.montant_dep_gar_crsd,
    //     },
    //     id: "depot",
    // }

    // this.defaultSuretes[2] =  {
    //         label: `Nantissement de stock`,
    //         value: {
    //             label: `Nantissement de stock`,
    //             nom: "nantissement_stock",
    //
    //         },
    //         id: "nantissement_stock",
    //     },

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

    // this.formDataToBeWatched.suretes_diverses.forEach((el, index) => {
    //     this.defaultSuretes.forEach((elem) => {
    //         if (elem.value.nom === el.nom) {
    //             this.formDataToBeWatched.suretes_diverses[index] =
    //                 elem.value;
    //             // console.log({ el: el.label, elem: elem.label })
    //         }
    //     });
    // });
    // this.loadRetrieved()
    // });

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

    // totalEngagementGlobal() {
    //     const trying = this.engagement_globales
    //         .map((el) => {
    //             el.montant_engagement_globale = String(el.montant_engagement_globale).replace(
    //                 /\s+/g,
    //                 ""
    //             );
    //             if (!el.montant_engagement_globale) return 0;
    //             return Number(el.montant_engagement_globale);
    //         })
    //         .reduce((sum, curr) => {
    //             return sum + curr;
    //         }, 0);
    //
    //     return trying.toLocaleString("fr-FR");
    // },
    // souscriptionValue() {
    //     let res = 0
    //     const dure =
    //         Number(
    //             this.meta_data.dossier_credit?.cred_pub_tb_00?.duree_credit
    //         ) || 0;
    //     const mode =
    //         this.meta_data.dossier_credit?.cred_pub_tb_1?.mode_paiement?.toLowerCase();
    //     let diviseur = 1;
    //     if (mode === "mensuelle") {
    //         diviseur = 1
    //         res = dure / diviseur
    //
    //     }
    //     if (mode === "bi-mensuel") {
    //         diviseur = 2
    //         res = dure * diviseur
    //
    //     }
    //     if (mode === "trimestriel") {
    //         diviseur = 3
    //         res = dure / diviseur
    //
    //     }
    //     if (mode === "semestriel") {
    //         diviseur = 6
    //         res = dure / diviseur
    //
    //     }
    //     if (mode === "in fine") {
    //         diviseur = dure || 1;
    //         res = dure / diviseur
    //
    //     }
    //
    //     return res;
    // },
    // engagement_value() {
    //     return {
    //         label: `Engagement de domiciliation globale de ${this.totalEngagementGlobal}  FCFA`,
    //         nom: "engagement",
    //         total_montant_engagement_globale: this.totalEngagementGlobal,
    //     };
    // },

    // nantissement_dat() {
    //     return {
    //         label: `Nantissement DAT de ${this.formDataToBeWatched.montant_dat} FCFA  qui a pour référence ${this.formDataToBeWatched.reference_dat}`,
    //         nom: "nantissement",
    //         montant_dat: this.formDataToBeWatched.montant_dat,
    //         reference_dat: this.formDataToBeWatched.reference_dat,
    //
    //     };
    // },
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
        concession_reduction_taux_interet: "",
        concession_allongement_duree: "",
        concession_allongement_periodicite_remboursement: "",
        concession_allegement_surete_demande: "",
        difficulte_financiere: "",
        cadre_normatif_a_b: "",
        notes: []
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
      var _this$meta_data$dossi;
      var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];
      this.defaultRetract(false, (_this$meta_data$dossi = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi.applied_templ_id);
      if (this.meta_data["dossier_credit"][createdKey] == undefined) {
        var value;
        if (this.meta_data["dossier_credit"]["cred_pub_tb_1"] != undefined) {
          var _this$meta_data$dossi2;
          value = Number((_this$meta_data$dossi2 = this.meta_data["dossier_credit"]["cred_pub_tb_1"].echeance) === null || _this$meta_data$dossi2 === void 0 || (_this$meta_data$dossi2 = _this$meta_data$dossi2.echeance) === null || _this$meta_data$dossi2 === void 0 ? void 0 : _this$meta_data$dossi2.toString().replace(/\s/g, ""));
          value = isNaN(value) ? 0 : value;
        } else {
          value = 0;
        }
        this.formDataToBeWatched.montant_engagement = Math.ceil(value * 1.2 / 4);
      }
      if (lentb.length > 0) {
        var _this$meta_data$dossi3, _this$meta_data$dossi5, _this$meta_data$dossi7, _this$meta_data$dossi9, _this$meta_data$dossi1, _this$meta_data$dossi12, _this$meta_data$dossi14;
        if (this.meta_data["dossier_credit"][createdKey] != undefined) {
          this.formDataToBeWatched = this.meta_data["dossier_credit"][createdKey];
        }
        if (((_this$meta_data$dossi3 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi3 === void 0 ? void 0 : _this$meta_data$dossi3.hypotheques) != undefined) {
          var _this$meta_data$dossi4;
          if (((_this$meta_data$dossi4 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi4 === void 0 ? void 0 : _this$meta_data$dossi4.hypotheques) != "") {
            this.hypotheques = this.meta_data["dossier_credit"][createdKey]["hypotheques"];
          }
        }
        if (((_this$meta_data$dossi5 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi5 === void 0 ? void 0 : _this$meta_data$dossi5.gages) != undefined) {
          var _this$meta_data$dossi6;
          if (((_this$meta_data$dossi6 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi6 === void 0 ? void 0 : _this$meta_data$dossi6.gages) != "") {
            this.gages = this.meta_data["dossier_credit"][createdKey]["gages"];
          }
        }
        if (((_this$meta_data$dossi7 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi7 === void 0 ? void 0 : _this$meta_data$dossi7.suretes_diverses) != undefined) {
          var _this$meta_data$dossi8;
          if (((_this$meta_data$dossi8 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi8 === void 0 ? void 0 : _this$meta_data$dossi8.suretes_diverses) != "") {
            this.suretes_diverses = this.meta_data["dossier_credit"][createdKey]["suretes_diverses"];
          }
        }
        if (((_this$meta_data$dossi9 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi9 === void 0 ? void 0 : _this$meta_data$dossi9.cond_particulieres) != undefined) {
          var _this$meta_data$dossi0;
          if (((_this$meta_data$dossi0 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi0 === void 0 ? void 0 : _this$meta_data$dossi0.cond_particulieres) != "") {
            this.cond_particulieres = this.meta_data["dossier_credit"][createdKey]["cond_particulieres"];
          }
        }
        if (((_this$meta_data$dossi1 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi1 === void 0 ? void 0 : _this$meta_data$dossi1.cautionnement_solidaires) != undefined) {
          var _this$meta_data$dossi10;
          if (((_this$meta_data$dossi10 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi10 === void 0 ? void 0 : _this$meta_data$dossi10.cautionnement_solidaires) != "") {
            this.cautionnement_solidaires = this.meta_data["dossier_credit"][createdKey]["cautionnement_solidaires"];
          } else {
            if (!this.cautionnement_solidaires[0].nom_prenoms) {
              var _this$meta_data$dossi11;
              this.cautionnement_solidaires[0].nom_prenoms = (_this$meta_data$dossi11 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi11 === void 0 || (_this$meta_data$dossi11 = _this$meta_data$dossi11.cred_pub_tb_00) === null || _this$meta_data$dossi11 === void 0 ? void 0 : _this$meta_data$dossi11.principal_actionnaire;
            }
          }
        }
        if (((_this$meta_data$dossi12 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi12 === void 0 ? void 0 : _this$meta_data$dossi12.co_signataire) != undefined) {
          var _this$meta_data$dossi13;
          if (((_this$meta_data$dossi13 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi13 === void 0 ? void 0 : _this$meta_data$dossi13.co_signataire) != "") {
            this.co_signataire = this.meta_data["dossier_credit"][createdKey]["co_signataire"];
          }
        }
        if (((_this$meta_data$dossi14 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi14 === void 0 ? void 0 : _this$meta_data$dossi14.engagement_globales) != undefined) {
          var _this$meta_data$dossi15;
          if (((_this$meta_data$dossi15 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi15 === void 0 ? void 0 : _this$meta_data$dossi15.engagement_globales) != "") {
            this.engagement_globales = this.meta_data["dossier_credit"][createdKey]["engagement_globales"];
          }
        }
        if (this.meta_data.dossier_credit.cred_pub_tb_1 != undefined) {
          var _this$meta_data$dossi16, _this$montant_dep_gar;
          this.montant_dep_gar_crsd = Number(this.meta_data.dossier_credit.cred_pub_tb_1.garantie + this.meta_data.dossier_credit.cred_pub_tb_1.montant_crsd);
          var a = Number((_this$meta_data$dossi16 = this.meta_data.dossier_credit.cred_pub_tb_1.montant_credit) === null || _this$meta_data$dossi16 === void 0 ? void 0 : _this$meta_data$dossi16.toString().replace(/\s/g, ""));
          a = !a ? 1 : a;
          var _value = Number((_this$montant_dep_gar = this.montant_dep_gar_crsd) === null || _this$montant_dep_gar === void 0 ? void 0 : _this$montant_dep_gar.toString().replace(/\s+/g, "")) * 100 / a;
          this.taux_dep_gar_crsd = isFinite(_value) ? _value.toFixed(2) : 0;
          // this.taux_dep_gar_crsd = (this.montant_dep_gar_crsd * 100) / Number(this.meta_data.dossier_credit.cred_pub_tb_1.montant_credit?.toString().replace(/\s+/g, ''))
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
    recomputeSouscriptionValue: function recomputeSouscriptionValue(data) {
      var res = 0;
      this.duree_credit0 = data.duree_credit;
      if (data.mode_paiement != null) {
        var _data$mode_paiement;
        this.mode_paiement0 = (_data$mode_paiement = data.mode_paiement) === null || _data$mode_paiement === void 0 ? void 0 : _data$mode_paiement.toLowerCase();
      } else {
        if (this.mode_paiement0 == null) {
          var _this$meta_data$dossi17;
          this.mode_paiement0 = (_this$meta_data$dossi17 = this.meta_data.dossier_credit.cred_pub_tb_1.mode_paiement) === null || _this$meta_data$dossi17 === void 0 ? void 0 : _this$meta_data$dossi17.toLowerCase();
        }
      }

      // if (data.duree_credit != null) {
      //     this.duree_credit0 = data.duree_credit?.toLowerCase()
      // } else {
      //     if (this.duree_credit0 == null) {
      //         this.duree_credit0 = this.meta_data.dossier_credit.cred_pub_tb_1.duree_credit?.toLowerCase()
      //         console.log('duree_credit0', this.duree_credit0)
      //     }
      //     console.log('duree_credit1', this.duree_credit0)

      // }

      var dure = Number(this.duree_credit0) || 0;
      var mode = this.mode_paiement0.toLowerCase();
      var diviseur = 1;
      if (mode === "mensuelle") {
        diviseur = 1;
        res = dure / diviseur;
        console.log('res', res);
      }
      if (mode === "bi-mensuel") {
        diviseur = 2;
        res = dure * diviseur;
        console.log('res', res);
      }
      if (mode === "trimestriel") {
        diviseur = 3;
        res = dure / diviseur;
        console.log('res', res);
      }
      if (mode === "semestriel") {
        diviseur = 6;
        res = dure / diviseur;
        console.log('res', res);
      }
      if (mode === "in fine") {
        diviseur = dure || 1;
        res = dure / diviseur;
        console.log('res', res);
      }
      var updatedBillet = {
        label: "Souscription de ".concat(res, " billets \xE0 ordre sign\xE9s par l'emprunteur"),
        value: {
          label: "Souscription de ".concat(res, " billets \xE0 ordre sign\xE9s par l'emprunteur"),
          nom: "souscription",
          billets: res
        },
        id: "souscription"
      };
      // console.
      var index = this.suretes_diverses.findIndex(function (el) {
        return el.id == "souscription";
      });
      // alert(index)
      if (index != -1) {
        this.suretes_diverses[index] = updatedBillet;
        this.$set(this.suretes_diverses, index, updatedBillet);
        this.$set(this.formDataToBeWatched, "suretes_diverses", this.suretes_diverses);
      }
      this.defaultSuretes[0] = updatedBillet;
      this.$set(this.defaultSuretes, 0, updatedBillet);
      console.table(this.suretes_diverses.at(0));
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
        id: "f21-head"
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/nsia/DCEI-CHCR1.vue?vue&type=template&id=c0ef5f6c&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/nsia/DCEI-CHCR1.vue?vue&type=template&id=c0ef5f6c&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      id: "f21-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Check list de restructuration\n                        ")]), _vm._v(" "), _c("div", {
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
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(0), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {
    staticStyle: {
      width: "350px"
    },
    attrs: {
      rowspan: "4"
    }
  }, [_vm._v("A- Concession (modification d'une ou de\n                                            plusieurs conditions d'un contrat)")]), _vm._v(" "), _c("td", {
    staticStyle: {
      width: "230px"
    }
  }, [_vm._v("A1) Réduction du taux d’intérêt")]), _vm._v(" "), _c("td", {
    staticClass: "text-center",
    staticStyle: {
      width: "50px"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.concession_reduction_taux_interet,
      expression: "formDataToBeWatched.concession_reduction_taux_interet"
    }],
    attrs: {
      type: "radio",
      id: "concession_reduction_taux_interet_oui",
      value: "Oui"
    },
    domProps: {
      checked: _vm._q(_vm.formDataToBeWatched.concession_reduction_taux_interet, "Oui")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.formDataToBeWatched, "concession_reduction_taux_interet", "Oui");
      }, _vm.handleInput]
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "concession_reduction_taux_interet_oui"
    }
  }, [_vm._v("Oui")]), _vm._v(" /\n                                            "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.concession_reduction_taux_interet,
      expression: "formDataToBeWatched.concession_reduction_taux_interet"
    }],
    attrs: {
      type: "radio",
      id: "concession_reduction_taux_interet_non",
      value: "Non"
    },
    domProps: {
      checked: _vm._q(_vm.formDataToBeWatched.concession_reduction_taux_interet, "Non")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.formDataToBeWatched, "concession_reduction_taux_interet", "Non");
      }, _vm.handleInput]
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "concession_reduction_taux_interet_non"
    }
  }, [_vm._v("Non")])])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("A2) Allongement la durée")]), _vm._v(" "), _c("td", {
    staticClass: "text-center",
    staticStyle: {
      width: "50px"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.concession_allongement_duree,
      expression: "formDataToBeWatched.concession_allongement_duree"
    }],
    attrs: {
      type: "radio",
      id: "concession_allongement_duree_oui",
      value: "Oui"
    },
    domProps: {
      checked: _vm._q(_vm.formDataToBeWatched.concession_allongement_duree, "Oui")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.formDataToBeWatched, "concession_allongement_duree", "Oui");
      }, _vm.handleInput]
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "concession_allongement_duree_oui"
    }
  }, [_vm._v("Oui")]), _vm._v(" /\n                                            "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.concession_allongement_duree,
      expression: "formDataToBeWatched.concession_allongement_duree"
    }],
    attrs: {
      type: "radio",
      id: "concession_allongement_duree_non",
      value: "Non"
    },
    domProps: {
      checked: _vm._q(_vm.formDataToBeWatched.concession_allongement_duree, "Non")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.formDataToBeWatched, "concession_allongement_duree", "Non");
      }, _vm.handleInput]
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "concession_allongement_duree_non"
    }
  }, [_vm._v("Non")])])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("A3) Allongement de la périodicité de remboursement")]), _vm._v(" "), _c("td", {
    staticClass: "text-center",
    staticStyle: {
      width: "50px"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.concession_allongement_periodicite_remboursement,
      expression: "formDataToBeWatched.concession_allongement_periodicite_remboursement"
    }],
    attrs: {
      type: "radio",
      id: "concession_allongement_periodicite_remboursement_oui",
      value: "Oui"
    },
    domProps: {
      checked: _vm._q(_vm.formDataToBeWatched.concession_allongement_periodicite_remboursement, "Oui")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.formDataToBeWatched, "concession_allongement_periodicite_remboursement", "Oui");
      }, _vm.handleInput]
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "concession_allongement_periodicite_remboursement_oui"
    }
  }, [_vm._v("Oui")]), _vm._v(" /\n                                            "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.concession_allongement_periodicite_remboursement,
      expression: "formDataToBeWatched.concession_allongement_periodicite_remboursement"
    }],
    attrs: {
      type: "radio",
      id: "concession_allongement_periodicite_remboursement_non",
      value: "Non"
    },
    domProps: {
      checked: _vm._q(_vm.formDataToBeWatched.concession_allongement_periodicite_remboursement, "Non")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.formDataToBeWatched, "concession_allongement_periodicite_remboursement", "Non");
      }, _vm.handleInput]
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "concession_allongement_periodicite_remboursement_non"
    }
  }, [_vm._v("Non")])])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("A4) Allègement des sûretés demandées par rapport aux conditions initiales")]), _vm._v(" "), _c("td", {
    staticClass: "text-center",
    staticStyle: {
      width: "50px"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.concession_allegement_surete_demande,
      expression: "formDataToBeWatched.concession_allegement_surete_demande"
    }],
    attrs: {
      type: "radio",
      id: "concession_allegement_surete_demande_oui",
      value: "Oui"
    },
    domProps: {
      checked: _vm._q(_vm.formDataToBeWatched.concession_allegement_surete_demande, "Oui")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.formDataToBeWatched, "concession_allegement_surete_demande", "Oui");
      }, _vm.handleInput]
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "concession_allegement_surete_demande_oui"
    }
  }, [_vm._v("Oui")]), _vm._v(" /\n                                            "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.concession_allegement_surete_demande,
      expression: "formDataToBeWatched.concession_allegement_surete_demande"
    }],
    attrs: {
      type: "radio",
      id: "concession_allegement_surete_demande_non",
      value: "Non"
    },
    domProps: {
      checked: _vm._q(_vm.formDataToBeWatched.concession_allegement_surete_demande, "Non")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.formDataToBeWatched, "concession_allegement_surete_demande", "Non");
      }, _vm.handleInput]
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "concession_allegement_surete_demande_non"
    }
  }, [_vm._v("Non")])])]), _vm._v(" "), _c("tr", [_c("td", {
    staticStyle: {
      width: "350px"
    }
  }, [_vm._v("B- Difficulté financière")]), _vm._v(" "), _c("td", {
    staticStyle: {
      "background-color": "rgb(52, 73, 94)"
    }
  }), _vm._v(" "), _c("td", {
    staticClass: "text-center",
    staticStyle: {
      width: "50px"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.difficulte_financiere,
      expression: "formDataToBeWatched.difficulte_financiere"
    }],
    attrs: {
      type: "radio",
      id: "difficulte_financiere_oui",
      value: "Oui"
    },
    domProps: {
      checked: _vm._q(_vm.formDataToBeWatched.difficulte_financiere, "Oui")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.formDataToBeWatched, "difficulte_financiere", "Oui");
      }, _vm.handleInput]
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "difficulte_financiere_oui"
    }
  }, [_vm._v("Oui")]), _vm._v(" /\n                                            "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.difficulte_financiere,
      expression: "formDataToBeWatched.difficulte_financiere"
    }],
    attrs: {
      type: "radio",
      id: "difficulte_financiere_non",
      value: "Non"
    },
    domProps: {
      checked: _vm._q(_vm.formDataToBeWatched.difficulte_financiere, "Non")
    },
    on: {
      change: [function ($event) {
        return _vm.$set(_vm.formDataToBeWatched, "difficulte_financiere", "Non");
      }, _vm.handleInput]
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "difficulte_financiere_non"
    }
  }, [_vm._v("Non")])])]), _vm._v(" "), _c("tr", [_c("td", {
    staticStyle: {
      width: "350px"
    }
  }, [_vm._v("A+B")]), _vm._v(" "), _c("td", {
    staticStyle: {
      "background-color": "rgb(52, 73, 94)"
    }
  }), _vm._v(" "), _c("td", {
    staticClass: "text-center",
    staticStyle: {
      width: "50px"
    }
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.cadre_normatif_a_b,
      expression: "formDataToBeWatched.cadre_normatif_a_b"
    }],
    staticClass: "form-control",
    attrs: {
      required: ""
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formDataToBeWatched, "cadre_normatif_a_b", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.handleInput]
    }
  }, [_c("option", {
    attrs: {
      value: "",
      hidden: ""
    }
  }, [_vm._v("---")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Restructuration"
    }
  }, [_vm._v("Restructuration")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Renégociation commerciale"
    }
  }, [_vm._v("Renégociation commerciale")])])])])])])])]), _vm._v(" "), _c("div", {
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
      id: "f21-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Check list de restructuration\n                        ")]), _vm._v(" "), _c("div", {
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
  return _c("thead", [_c("tr", [_c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("ITEM / VARIABLE")])]), _vm._v(" "), _c("td", {
    staticClass: "th",
    staticStyle: {
      "background-color": "rgb(52, 73, 94)"
    }
  }), _vm._v(" "), _c("td", {
    staticClass: "th text-center"
  }, [_c("label", [_vm._v("MODALITES ")])])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/nsia/DCEI-CHCR1.vue?vue&type=style&index=1&id=c0ef5f6c&lang=css&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/nsia/DCEI-CHCR1.vue?vue&type=style&index=1&id=c0ef5f6c&lang=css&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-c0ef5f6c] {\r\n    font-family: \"Google sans\";\n}\nlabel[data-v-c0ef5f6c] {\r\n    height: 10px;\r\n    font-size: 13px;\n}\ninput[type=\"text\"][data-v-c0ef5f6c],\r\ninput[type=\"date\"][data-v-c0ef5f6c],\r\nselect[data-v-c0ef5f6c] {\r\n    height: 35px;\r\n    border-color: #34495e;\r\n    color: #57606f;\r\n    font-size: 13px;\r\n    font-weight: bold;\n}\n.card-width-height[data-v-c0ef5f6c] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-c0ef5f6c] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\n.hdc[data-v-c0ef5f6c] {\r\n    background-color: #57606f;\n}\n.card-width-height[data-v-c0ef5f6c] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-c0ef5f6c] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\ninput[type=\"text\"][data-v-c0ef5f6c],\r\ninput[type=\"date\"][data-v-c0ef5f6c] {\r\n    width: 250px;\n}\n.review[data-v-c0ef5f6c] {\r\n    width: 180px !important;\n}\n.engagement input[type=\"text\"][data-v-c0ef5f6c],\r\ninput[type=\"date\"][data-v-c0ef5f6c] {\r\n    width: 100% !important;\n}\n.th[data-v-c0ef5f6c] {\r\n    padding: 4px;\r\n    padding-bottom: 0px;\n}\nselect[data-v-c0ef5f6c] {\r\n    width: 150px;\n}\n.badge-sm[data-v-c0ef5f6c] {\r\n    display: inline-block;\r\n    width: 15px;\r\n    height: 15px;\r\n    background: rgba(255, 0, 0, 0.882);\r\n    color: white;\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    border-radius: 100%;\r\n    position: absolute;\r\n    top: -20%;\r\n    left: 55%;\r\n    text-align: center;\n}\n.relook-header[data-v-c0ef5f6c] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/nsia/DCEI-CHCR1.vue?vue&type=style&index=1&id=c0ef5f6c&lang=css&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/nsia/DCEI-CHCR1.vue?vue&type=style&index=1&id=c0ef5f6c&lang=css&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCEI_CHCR1_vue_vue_type_style_index_1_id_c0ef5f6c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DCEI-CHCR1.vue?vue&type=style&index=1&id=c0ef5f6c&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/nsia/DCEI-CHCR1.vue?vue&type=style&index=1&id=c0ef5f6c&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCEI_CHCR1_vue_vue_type_style_index_1_id_c0ef5f6c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCEI_CHCR1_vue_vue_type_style_index_1_id_c0ef5f6c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/forms/nsia/DCEI-CHCR1.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/forms/nsia/DCEI-CHCR1.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DCEI_CHCR1_vue_vue_type_template_id_c0ef5f6c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DCEI-CHCR1.vue?vue&type=template&id=c0ef5f6c&scoped=true */ "./resources/js/components/forms/nsia/DCEI-CHCR1.vue?vue&type=template&id=c0ef5f6c&scoped=true");
/* harmony import */ var _DCEI_CHCR1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DCEI-CHCR1.vue?vue&type=script&lang=js */ "./resources/js/components/forms/nsia/DCEI-CHCR1.vue?vue&type=script&lang=js");
/* harmony import */ var _vueform_multiselect_themes_default_css_vue_type_style_index_0_lang_css_external__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vueform/multiselect/themes/default.css?vue&type=style&index=0&lang=css&external */ "./node_modules/@vueform/multiselect/themes/default.css?vue&type=style&index=0&lang=css&external");
/* harmony import */ var _DCEI_CHCR1_vue_vue_type_style_index_1_id_c0ef5f6c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DCEI-CHCR1.vue?vue&type=style&index=1&id=c0ef5f6c&lang=css&scoped=true */ "./resources/js/components/forms/nsia/DCEI-CHCR1.vue?vue&type=style&index=1&id=c0ef5f6c&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;



/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _DCEI_CHCR1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _DCEI_CHCR1_vue_vue_type_template_id_c0ef5f6c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _DCEI_CHCR1_vue_vue_type_template_id_c0ef5f6c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "c0ef5f6c",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/forms/nsia/DCEI-CHCR1.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/forms/nsia/DCEI-CHCR1.vue?vue&type=script&lang=js":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/forms/nsia/DCEI-CHCR1.vue?vue&type=script&lang=js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DCEI_CHCR1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DCEI-CHCR1.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/nsia/DCEI-CHCR1.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DCEI_CHCR1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/forms/nsia/DCEI-CHCR1.vue?vue&type=style&index=1&id=c0ef5f6c&lang=css&scoped=true":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/forms/nsia/DCEI-CHCR1.vue?vue&type=style&index=1&id=c0ef5f6c&lang=css&scoped=true ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCEI_CHCR1_vue_vue_type_style_index_1_id_c0ef5f6c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DCEI-CHCR1.vue?vue&type=style&index=1&id=c0ef5f6c&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/nsia/DCEI-CHCR1.vue?vue&type=style&index=1&id=c0ef5f6c&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/forms/nsia/DCEI-CHCR1.vue?vue&type=template&id=c0ef5f6c&scoped=true":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/forms/nsia/DCEI-CHCR1.vue?vue&type=template&id=c0ef5f6c&scoped=true ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCEI_CHCR1_vue_vue_type_template_id_c0ef5f6c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCEI_CHCR1_vue_vue_type_template_id_c0ef5f6c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCEI_CHCR1_vue_vue_type_template_id_c0ef5f6c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DCEI-CHCR1.vue?vue&type=template&id=c0ef5f6c&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/nsia/DCEI-CHCR1.vue?vue&type=template&id=c0ef5f6c&scoped=true");


/***/ })

}]);