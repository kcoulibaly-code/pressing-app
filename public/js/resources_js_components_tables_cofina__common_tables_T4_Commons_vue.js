"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_tables_cofina__common_tables_T4_Commons_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/cofina/_common_tables/T4_Commons.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/cofina/_common_tables/T4_Commons.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vueform/multiselect/dist/multiselect.vue2 */ "./node_modules/@vueform/multiselect/dist/multiselect.vue2.js");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../helpers/helper */ "./resources/js/helpers/helper.js");
/* harmony import */ var _services_connects_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/connects.service */ "./resources/js/services/connects.service.js");
/* harmony import */ var _services_proxy_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/proxy.service */ "./resources/js/services/proxy.service.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../helpers/indexedDB */ "./resources/js/helpers/indexedDB.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_helpers_indexedDB__WEBPACK_IMPORTED_MODULE_7__);
/* provided dependency */ var process = __webpack_require__(/*! process/browser.js */ "./node_modules/process/browser.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
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
  name: "t4_commons",
  display: "T4_Communs",
  components: {
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.TrashIcon,
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__.ChevronDownIcon,
    Multiselect: _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    meta_data: Object,
    tb_name: String,
    tb_display_name: String,
    read_only: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    var vm = this;
    return {
      connectsHost: _services_connects_service__WEBPACK_IMPORTED_MODULE_5__["default"].loadablehost(),
      files: [],
      defaultSuretes: [],
      newSurete: "",
      suretes_diverses: [],
      protections_financieres_eligibles: [],
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_1__["default"].host,
      authcheck: false,
      authcheckUsr: null,
      authcheckStatus: null,
      watchInPause: false,
      initLoad: true,
      isSeenState: {
        hypotheques: true,
        gages: true,
        cautionnement_solidaire: true,
        caution_hypothecaire: true,
        promesse_affectation_hypothecaire: true,
        protections_financieres_eligibles: true,
        conditions_particulières: true,
        suretes_diverses: true,
        dat_nanti: true
      },
      duree_credit0: null,
      mode_paiement0: null,
      listingNote: false,
      meta_parseable: {
        cred_pub_key: this.meta_data["cred_pub_key"],
        tb_name: this.tb_name
      },
      formDataToBeWatched: {
        montant_engagement: "0",
        gages: [],
        gages_mobiliers: [],
        // hypotheques: [],
        cond_particulieres: "",
        co_signataire: "",
        commentaire_activite: "",
        hypotheques: [],
        total_hypotheques_valeur_marchande: "",
        total_hypotheques_valeur_considere: "",
        // ?- Caution hypothécaire
        caution_hypothecaires: [],
        total_caution_hypothecaires_valeur_marchande: "",
        total_caution_hypothecaires_valeur_considere: "",
        // ?- Promesse d'affection hypothécaire PAH
        promesse_affectation_hypothecaires: [],
        total_promesse_affectation_hypothecaires_valeur_marchande: "",
        total_promesse_affectation_hypothecaires_valeur_considere: "",
        // ?- Protections financieres
        protection_financieres: [],
        total_protection_financieres_valeur_marchande: "",
        total_protection_financieres_valeur_considere: "",
        //
        total_gages_valeur_marchande: "",
        total_gages_valeur_considere: "",
        total_gages_mobiliers_valeur_marchande: "",
        total_gages_mobiliers_valeur_considere: "",
        notes: [],
        suretes_diverses: [],
        autres_suretes_diverses: [],
        protections_financieres_eligibles: [],
        cautionnement_solidaires: [],
        total_cautionnement_solidaires_valeur_marchande: "",
        total_cautionnement_solidaires_valeur_considere: "",
        engagement_globales: "",
        total_montant_engagement_globale: 0,
        montant_dat: "",
        dat_nanti: {}
      },
      countries: [],
      caution_hypothecaires: [_defineProperty({
        bien: "",
        proprietaire: "",
        numero_tel: "",
        annee_achat: "",
        adresse_emplacement: "",
        longitude: "",
        lattitude: "",
        date_evaluation: "",
        valeur_marchande: 0,
        valeur_considere: 0
      }, "date_evaluation", "")],
      promesse_affectation_hypothecaires: [_defineProperty({
        bien: "",
        proprietaire: "",
        numero_tel: "",
        annee_achat: "",
        adresse_emplacement: "",
        longitude: "",
        lattitude: "",
        date_evaluation: "",
        valeur_marchande: 0,
        valeur_considere: 0
      }, "date_evaluation", "")],
      protection_financieres: [_defineProperty({
        garantie: "",
        institution: "",
        date_attribution: "",
        date_evaluation: "",
        valeur_marchande: 0,
        valeur_considere: 0
      }, "date_evaluation", "")],
      hypotheques: [_defineProperty({
        bien_hypotheque: "",
        rang: "",
        proprietaire: "",
        numero_tel: "",
        annee_achat: "",
        adresse_emplacement: "",
        longitude: "",
        lattitude: "",
        date_evaluation: "",
        valeur_marchande: 0,
        valeur_considere: 0
      }, "date_evaluation", "")],
      engagement_globales: [{
        montant_engagement_globale: "",
        entreprise_engagement_globale: ""
      }],
      gages: [_defineProperty(_defineProperty(_defineProperty({
        bien_a_gage: "",
        date_mise_circulation: "",
        proprietaire: "",
        numero_tel: "",
        annee_achat: "",
        adresse_emplacement: "",
        date_evaluation: "",
        valeur_marchande: 0,
        valeur_considere: 0
      }, "date_evaluation", ""), "marque", ""), "nom_vehicule", "")],
      gages_mobiliers: [_defineProperty({
        bien_a_gage: "",
        proprietaire: "",
        numero_tel: "",
        annee_achat: "",
        adresse_emplacement: "",
        date_evaluation: "",
        valeur_marchande: 0,
        valeur_considere: 0
      }, "date_evaluation", "")],
      cond_particulieres: [{
        cond_name: "",
        cond_description: ""
      }],
      co_signataire: [{
        label: "Co-débiteur",
        nom: "",
        adresse: "",
        tel: "",
        relation_client: "",
        revenu_mensuel: "",
        source_revenue: ""
      }, {
        label: "Garant 1",
        nom: "",
        adresse: "",
        tel: "",
        relation_client: "",
        revenu_mensuel: "",
        source_revenue: ""
      }, {
        label: "Garant 2",
        nom: "",
        adresse: "",
        tel: "",
        relation_client: "",
        revenu_mensuel: "",
        source_revenue: ""
      }, {
        label: "Garant 3",
        nom: "",
        adresse: "",
        tel: "",
        relation_client: "",
        revenu_mensuel: "",
        source_revenue: ""
      }],
      taux_dep_gar_crsd: 0,
      montant_dep_gar_crsd: 0,
      cautionnement_solidaires: [_defineProperty(_defineProperty(_defineProperty({
        nom_prenoms: "",
        email: "",
        numero_piece_identite: '',
        profession: "",
        indicatif_caution_solidaire: "",
        numero_tel_caution_solidaire: "",
        localisation_caution_solidaire: "",
        revenu_mensuel: 0,
        valeur_patrimoine: 0,
        valeur_cautionnement: 0
      }, "numero_piece_identite", ""), "files", 0), "template", "")],
      fileIndex: null,
      dat_nanti: {
        taux_couverture: "",
        montant_dat_nanti: "",
        reference_dat_nanti: "",
        nanti_en_faveur_cofina: "",
        proof_dat_files: {}
      },
      DAT_ACCESS_FILIALE: 'CFN CIV'
    };
  },
  created: function created() {
    var _this = this;
    // EventBus.$on('event-T1',(data)=> {

    //     console.log("Numero prêt à racheter ==> ",data.numero_pret_a_rachete)
    //     // this.retract4()
    // })
    // ? Setup cache listeners and stuff
    // this.setupCache();

    _services_credit_service__WEBPACK_IMPORTED_MODULE_3__["default"].loadpaysindicatif().then(function (res) {
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
        // return;
      }
    });
    // this.loadRecaller()
    // console.log('=====>taptap',this.determineCredPubTables(this.meta_data?.dossier_credit?.applied_templ_name)[1],
    // this.meta_data?.dossier_credit?.[this.determineCredPubTables(this.meta_data?.dossier_credit?.applied_templ_name)[1]].montant_credit)
    this.loadRetrieved();
    // charge les attributs + sous attributs des tables
    EventBus.$on("montant-credit-updated", function (data) {
      var _data$garantie, _data$crsd, _data$montant_credit, _this2$montant_dep_ga;
      // console.log("data ==> ",data)
      _this2.montant_dep_gar_crsd = Number(data === null || data === void 0 || (_data$garantie = data.garantie) === null || _data$garantie === void 0 ? void 0 : _data$garantie.toString().replace(/\s/g, "")) + Number(data === null || data === void 0 || (_data$crsd = data.crsd) === null || _data$crsd === void 0 ? void 0 : _data$crsd.toString().replace(/\s/g, ""));
      var a = Number(data === null || data === void 0 || (_data$montant_credit = data.montant_credit) === null || _data$montant_credit === void 0 ? void 0 : _data$montant_credit.toString().replace(/\s/g, ""));
      a = !a ? 1 : a;
      var value = Number((_this2$montant_dep_ga = _this2.montant_dep_gar_crsd) === null || _this2$montant_dep_ga === void 0 ? void 0 : _this2$montant_dep_ga.toString().replace(/\s+/g, "")) * 100 / a;
      _this2.taux_dep_gar_crsd = isFinite(value) ? value.toFixed(2) : 0;
      var datapaste = {
        duree_credit: data === null || data === void 0 ? void 0 : data.duree_credit,
        mode_paiement: data === null || data === void 0 ? void 0 : data.mode_paiement
      };
      _this2.recomputeSouscriptionValue(datapaste);
      _this2.defaultSuretes[1] = {
        label: "D\xE9p\xF4t de garantie et compte de r\xE9serve du service de la dette (DG + CRSD) \xE0 hauteur de ".concat(_this2.montant_dep_gar_crsd.toLocaleString('fr-FR', {
          maximumSignificantDigits: 2
        }), " FCFA soit ").concat(_this2.taux_dep_gar_crsd, "% du montant propos\xE9"),
        value: {
          label: "D\xE9p\xF4t de garantie et compte de r\xE9serve du service de la dette (DG + CRSD) \xE0 hauteur de ".concat(_this2.montant_dep_gar_crsd.toLocaleString('fr-FR', {
            maximumSignificantDigits: 2
          }), " FCFA soit ").concat(_this2.taux_dep_gar_crsd, "% du montant propos\xE9"),
          nom: "depot",
          taux: _this2.taux_dep_gar_crsd,
          montant: _this2.montant_dep_gar_crsd
        },
        id: "depot"
      };
      _this2.defaultSuretes[2] = {
        label: "Nantissement de stock",
        value: {
          label: "Nantissement de stock",
          nom: "nantissement_stock"
        },
        id: "nantissement_stock"
      };
      _this2.defaultSuretes[3] = {
        label: "Nantissement de fonds de commerce",
        value: {
          label: "Nantissement de fonds de commerce",
          nom: "nantissement_fonds_commerce"
        },
        id: "nantissement_fonds_commerce"
      };

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
    EventBus.$on("created-extra-file-template", function (data) {
      var _data$template5;
      _this2.cautionnement_solidaires.forEach(function (element, index) {
        var _data$template;
        var template_name = "Pièce jointe -cautionnement_solidaires_" + index + '_' + _this2.$route.params.templateId;
        if (template_name == (data === null || data === void 0 || (_data$template = data.template) === null || _data$template === void 0 ? void 0 : _data$template.name)) {
          var _data$template2, _data$template3, _data$template4;
          _this2.cautionnement_solidaires[index]["template"] = {
            id: data === null || data === void 0 || (_data$template2 = data.template) === null || _data$template2 === void 0 ? void 0 : _data$template2.id,
            name: data === null || data === void 0 || (_data$template3 = data.template) === null || _data$template3 === void 0 ? void 0 : _data$template3.name,
            slug: data === null || data === void 0 || (_data$template4 = data.template) === null || _data$template4 === void 0 ? void 0 : _data$template4.slug
          };
        }
      });
      var template_name_dat_nanti = "Pièce jointe -preuve-blocage-dat-nanti_" + _this2.$route.params.templateId;
      if (template_name_dat_nanti == (data === null || data === void 0 || (_data$template5 = data.template) === null || _data$template5 === void 0 ? void 0 : _data$template5.name)) {
        var _data$template6, _data$template7, _data$template8;
        var template = {
          id: data === null || data === void 0 || (_data$template6 = data.template) === null || _data$template6 === void 0 ? void 0 : _data$template6.id,
          name: data === null || data === void 0 || (_data$template7 = data.template) === null || _data$template7 === void 0 ? void 0 : _data$template7.name,
          slug: data === null || data === void 0 || (_data$template8 = data.template) === null || _data$template8 === void 0 ? void 0 : _data$template8.slug
        };
        _this2.dat_nanti = _objectSpread(_objectSpread({}, _this2.dat_nanti), {}, {
          template: template
        });
      }
      _this2.handleInput();
    });
    EventBus.$on("updated-extra-file-upload", function (data) {
      _this2.getFiles();
    });
    EventBus.$on("extra-files-uploaded", function (data) {
      var _this2$dat_nanti, _data$template0;
      var proof_dat_files = data === null || data === void 0 ? void 0 : data.files.filter(function (file) {
        var _data$template9;
        return file.extra_file_template_id == (data === null || data === void 0 || (_data$template9 = data.template) === null || _data$template9 === void 0 ? void 0 : _data$template9.id);
      });
      if (((_this2$dat_nanti = _this2.dat_nanti) === null || _this2$dat_nanti === void 0 || (_this2$dat_nanti = _this2$dat_nanti.template) === null || _this2$dat_nanti === void 0 ? void 0 : _this2$dat_nanti.id) == (data === null || data === void 0 || (_data$template0 = data.template) === null || _data$template0 === void 0 ? void 0 : _data$template0.id)) {
        _this2.$set(_this2.dat_nanti, "proof_dat_files", proof_dat_files);
      }
      _this2.handleInput();
    });
    EventBus.$on('montant-credit-updated', function (data) {
      var _this2$authcheckUsr;
      if (_this2.DAT_ACCESS_FILIALE == ((_this2$authcheckUsr = _this2.authcheckUsr) === null || _this2$authcheckUsr === void 0 ? void 0 : _this2$authcheckUsr.filiale)) {
        _this2.handleInput(data);
      }
    });
    this.getFiles();
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
  methods: {
    addFiles: function addFiles() {
      var slug_ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      EventBus.$emit("open-extra-file-explorer");
      name = "Pi\xE8ce jointe {(*)}".concat(slug_) + '_' + this.$route.params.templateId;
      setTimeout(function () {
        EventBus.$emit("data-extra-file-explorer", {
          name: name
        });
      }, 500);
    },
    checkBoxChange: function checkBoxChange(event, e) {
      if (event) {
        if (e.target.checked) {
          this.dat_nanti["nanti_en_faveur_cofina"] = event;
        } else {
          this.dat_nanti["nanti_en_faveur_cofina"] = '';
        }
      } else {
        this.dat_nanti["nanti_en_faveur_cofina"] = "";
      }
      this.handleInput();
    },
    toggleIsSeen: function toggleIsSeen(key) {
      var _ref8;
      var val = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var data = _objectSpread({}, this.isSeenState);
      val = (_ref8 = val !== null && val !== void 0 ? val : data[key]) !== null && _ref8 !== void 0 ? _ref8 : false;
      data[key] = !val;
      this.isSeenState = data;
    },
    setDateInput: function setDateInput(event) {
      var objectName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var property = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var index = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      if (![null, undefined].includes(this[objectName][index][property])) {
        this[objectName][index][property] = event[1];
      }
      this.handleInput();
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
      this.cautionnement_solidaires.push(_defineProperty(_defineProperty(_defineProperty({
        nom_prenoms: "",
        email: "",
        numero_piece_identite: '',
        profession: "",
        indicatif_caution_solidaire: "",
        numero_tel_caution_solidaire: "",
        localisation_caution_solidaire: "",
        revenu_mensuel: 0,
        valeur_patrimoine: 0,
        valeur_cautionnement: 0
      }, "numero_piece_identite", ""), "files", 0), "template", ""));
      this.handleInput();
    },
    remove1: function remove1(index) {
      this.cautionnement_solidaires.splice(index, 1);
      this.formDataToBeWatched.total_cautionnement_solidaires_valeur_cautionnement = this.somX3(this.cautionnement_solidaires, "valeur_cautionnement");
      this.formDataToBeWatched.total_cautionnement_solidaires_valeur_revenu_mensuel = this.somX3(this.cautionnement_solidaires, "revenu_mensuel");
      this.formDataToBeWatched.total_cautionnement_solidaires_valeur_patrimoine = this.somX3(this.cautionnement_solidaires, "valeur_patrimoine");
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
      var _this$meta_data$dossi3,
        _this9 = this;
      var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];
      var credTbKey = this.determineCredPubTables(this.meta_data['dossier_credit']["applied_templ_name"]);
      // console.log('credTbKey',credTbKey)

      this.defaultRetract(false, (_this$meta_data$dossi3 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi3 === void 0 ? void 0 : _this$meta_data$dossi3.applied_templ_id);
      if (this.meta_data["dossier_credit"][createdKey] == undefined) {
        var value;
        if (this.meta_data["dossier_credit"][credTbKey[1]] != undefined) {
          var _this$meta_data$dossi4;
          value = Number((_this$meta_data$dossi4 = this.meta_data["dossier_credit"]["cred_pub_tb_1"].echeance) === null || _this$meta_data$dossi4 === void 0 || (_this$meta_data$dossi4 = _this$meta_data$dossi4.echeance) === null || _this$meta_data$dossi4 === void 0 ? void 0 : _this$meta_data$dossi4.toString().replace(/\s/g, ""));
          value = isNaN(value) ? 0 : value;
        } else {
          value = 0;
        }
        this.formDataToBeWatched.montant_engagement = Math.ceil(value * 1.2 / 4);
      }
      if (lentb.length > 0) {
        var _this$meta_data$dossi5, _this$meta_data$dossi7, _this$meta_data$dossi9, _this$meta_data$dossi1, _this$meta_data$dossi11, _this$meta_data$dossi13, _this$meta_data$dossi15, _this$meta_data$dossi17, _this$meta_data$dossi20, _this$meta_data$dossi22, _this$meta_data, _this$meta_data2, _this$meta_data$dossi24;
        if (this.meta_data["dossier_credit"][createdKey] != undefined) {
          this.formDataToBeWatched = this.meta_data["dossier_credit"][createdKey];
        }
        if (((_this$meta_data$dossi5 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi5 === void 0 ? void 0 : _this$meta_data$dossi5.hypotheques) != undefined) {
          var _this$meta_data$dossi6;
          if (((_this$meta_data$dossi6 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi6 === void 0 ? void 0 : _this$meta_data$dossi6.hypotheques) != "") {
            this.hypotheques = this.meta_data["dossier_credit"][createdKey]["hypotheques"];
          }
        }
        if (((_this$meta_data$dossi7 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi7 === void 0 ? void 0 : _this$meta_data$dossi7.gages) != undefined) {
          var _this$meta_data$dossi8;
          if (((_this$meta_data$dossi8 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi8 === void 0 ? void 0 : _this$meta_data$dossi8.gages) != "") {
            this.gages = this.meta_data["dossier_credit"][createdKey]["gages"];
          }
        }
        if (((_this$meta_data$dossi9 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi9 === void 0 ? void 0 : _this$meta_data$dossi9.caution_hypothecaires) != undefined) {
          var _this$meta_data$dossi0;
          if (((_this$meta_data$dossi0 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi0 === void 0 ? void 0 : _this$meta_data$dossi0.caution_hypothecaires) != "") {
            this.caution_hypothecaires = this.meta_data["dossier_credit"][createdKey]["caution_hypothecaires"];
          }
        }
        if (((_this$meta_data$dossi1 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi1 === void 0 ? void 0 : _this$meta_data$dossi1.promesse_affectation_hypothecaires) != undefined) {
          var _this$meta_data$dossi10;
          if (((_this$meta_data$dossi10 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi10 === void 0 ? void 0 : _this$meta_data$dossi10.promesse_affectation_hypothecaires) != "") {
            this.promesse_affectation_hypothecaires = this.meta_data["dossier_credit"][createdKey]["promesse_affectation_hypothecaires"];
          }
        }
        if (((_this$meta_data$dossi11 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi11 === void 0 ? void 0 : _this$meta_data$dossi11.protection_financieres) != undefined) {
          var _this$meta_data$dossi12;
          if (((_this$meta_data$dossi12 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi12 === void 0 ? void 0 : _this$meta_data$dossi12.protection_financieres) != "") {
            this.protection_financieres = this.meta_data["dossier_credit"][createdKey]["protection_financieres"];
          }
        }
        if (((_this$meta_data$dossi13 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi13 === void 0 ? void 0 : _this$meta_data$dossi13.suretes_diverses) != undefined) {
          var _this$meta_data$dossi14;
          if (((_this$meta_data$dossi14 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi14 === void 0 ? void 0 : _this$meta_data$dossi14.suretes_diverses) != "") {
            this.suretes_diverses = this.meta_data["dossier_credit"][createdKey]["suretes_diverses"];
          }
        }
        if (((_this$meta_data$dossi15 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi15 === void 0 ? void 0 : _this$meta_data$dossi15.cond_particulieres) != undefined) {
          var _this$meta_data$dossi16;
          if (((_this$meta_data$dossi16 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi16 === void 0 ? void 0 : _this$meta_data$dossi16.cond_particulieres) != "") {
            this.cond_particulieres = this.meta_data["dossier_credit"][createdKey]["cond_particulieres"];
          }
        }
        if (((_this$meta_data$dossi17 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi17 === void 0 ? void 0 : _this$meta_data$dossi17.cautionnement_solidaires) != undefined) {
          var _this$meta_data$dossi18;
          if (((_this$meta_data$dossi18 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi18 === void 0 ? void 0 : _this$meta_data$dossi18.cautionnement_solidaires) != "") {
            this.cautionnement_solidaires = this.meta_data["dossier_credit"][createdKey]["cautionnement_solidaires"];
            var tb = ["latitude_domicile_principale", "longitude_domicile_principale", "latitude_activite", "longitude_activite"];
            var _iterator = _createForOfIteratorHelper(this.cautionnement_solidaires),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var line = _step.value;
                var _iterator2 = _createForOfIteratorHelper(tb),
                  _step2;
                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    var key = _step2.value;
                    if ([null, undefined].includes(line)) {
                      line[key] = "";
                    }
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
            this.formDataToBeWatched.cautionnement_solidaire = this.cautionnement_solidaires;
          } else {
            if (!this.cautionnement_solidaires[0].nom_prenoms) {
              var _this$meta_data$dossi19;
              this.cautionnement_solidaires[0].nom_prenoms = (_this$meta_data$dossi19 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi19 === void 0 || (_this$meta_data$dossi19 = _this$meta_data$dossi19.cred_pub_tb_00) === null || _this$meta_data$dossi19 === void 0 ? void 0 : _this$meta_data$dossi19.principal_actionnaire;
            }
          }
        }
        if (((_this$meta_data$dossi20 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi20 === void 0 ? void 0 : _this$meta_data$dossi20.co_signataire) != undefined) {
          var _this$meta_data$dossi21;
          if (((_this$meta_data$dossi21 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi21 === void 0 ? void 0 : _this$meta_data$dossi21.co_signataire) != "") {
            this.co_signataire = this.meta_data["dossier_credit"][createdKey]["co_signataire"];
          }
        }
        if (((_this$meta_data$dossi22 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi22 === void 0 ? void 0 : _this$meta_data$dossi22.engagement_globales) != undefined) {
          var _this$meta_data$dossi23;
          if (((_this$meta_data$dossi23 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi23 === void 0 ? void 0 : _this$meta_data$dossi23.engagement_globales) != "") {
            this.engagement_globales = this.meta_data["dossier_credit"][createdKey]["engagement_globales"];
          }
        }
        // console.log( 'this.meta_data?.dossier_credit?.gages.bien_a_gage', this.meta_data?.dossier_credit?.cred_pub_tb_4?.gages[0]?.bien_a_gage)

        if (((_this$meta_data = this.meta_data) === null || _this$meta_data === void 0 || (_this$meta_data = _this$meta_data.dossier_credit) === null || _this$meta_data === void 0 ? void 0 : _this$meta_data[this.determineCredPubTables((_this$meta_data2 = this.meta_data) === null || _this$meta_data2 === void 0 || (_this$meta_data2 = _this$meta_data2.dossier_credit) === null || _this$meta_data2 === void 0 ? void 0 : _this$meta_data2.applied_templ_name)[1]]) != undefined) {
          var _this$meta_data3, _this$meta_data4, _this$meta_data5, _this$meta_data6, _this$meta_data7, _this$meta_data8, _this$montant_dep_gar;
          this.montant_dep_gar_crsd = Number(((_this$meta_data3 = this.meta_data) === null || _this$meta_data3 === void 0 || (_this$meta_data3 = _this$meta_data3.dossier_credit) === null || _this$meta_data3 === void 0 || (_this$meta_data3 = _this$meta_data3[this.determineCredPubTables((_this$meta_data4 = this.meta_data) === null || _this$meta_data4 === void 0 || (_this$meta_data4 = _this$meta_data4.dossier_credit) === null || _this$meta_data4 === void 0 ? void 0 : _this$meta_data4.applied_templ_name)[1]]) === null || _this$meta_data3 === void 0 ? void 0 : _this$meta_data3.garantie) + ((_this$meta_data5 = this.meta_data) === null || _this$meta_data5 === void 0 || (_this$meta_data5 = _this$meta_data5.dossier_credit) === null || _this$meta_data5 === void 0 || (_this$meta_data5 = _this$meta_data5[this.determineCredPubTables((_this$meta_data6 = this.meta_data) === null || _this$meta_data6 === void 0 || (_this$meta_data6 = _this$meta_data6.dossier_credit) === null || _this$meta_data6 === void 0 ? void 0 : _this$meta_data6.applied_templ_name)[1]]) === null || _this$meta_data5 === void 0 ? void 0 : _this$meta_data5.montant_crsd));
          var a = Number((_this$meta_data7 = this.meta_data) === null || _this$meta_data7 === void 0 || (_this$meta_data7 = _this$meta_data7.dossier_credit) === null || _this$meta_data7 === void 0 || (_this$meta_data7 = _this$meta_data7[this.determineCredPubTables((_this$meta_data8 = this.meta_data) === null || _this$meta_data8 === void 0 || (_this$meta_data8 = _this$meta_data8.dossier_credit) === null || _this$meta_data8 === void 0 ? void 0 : _this$meta_data8.applied_templ_name)[1]]) === null || _this$meta_data7 === void 0 || (_this$meta_data7 = _this$meta_data7.montant_credit) === null || _this$meta_data7 === void 0 ? void 0 : _this$meta_data7.toString().replace(/\s/g, ""));
          a = !a ? 1 : a;
          var _value = Number((_this$montant_dep_gar = this.montant_dep_gar_crsd) === null || _this$montant_dep_gar === void 0 ? void 0 : _this$montant_dep_gar.toString().replace(/\s+/g, "")) * 100 / a;
          this.taux_dep_gar_crsd = isFinite(_value) ? _value.toFixed(2) : 0;
          // this.taux_dep_gar_crsd = (this.montant_dep_gar_crsd * 100) / Number(this.meta_data.dossier_credit.cred_pub_tb_1.montant_credit?.toString().replace(/\s+/g, ''))
        }
        if (![undefined, ""].includes((_this$meta_data$dossi24 = this.meta_data["dossier_credit"][createdKey]) === null || _this$meta_data$dossi24 === void 0 ? void 0 : _this$meta_data$dossi24.dat_nanti)) {
          this.dat_nanti = this.meta_data["dossier_credit"][createdKey]["dat_nanti"];
        }
      }
      this.defaultSuretes = [{
        label: "Souscription de ".concat(this.souscriptionValue, " billets \xE0 ordre sign\xE9s par l'emprunteur"),
        value: {
          label: "Souscription de ".concat(this.souscriptionValue, " billets \xE0 ordre sign\xE9s par l'emprunteur"),
          nom: "souscription",
          billets: this.souscriptionValue
        },
        id: "souscription"
      }, {
        label: "D\xE9p\xF4t de garantie et compte de r\xE9serve du service de la dette (DG + CRSD) \xE0 hauteur de ".concat(this.montant_dep_gar_crsd.toLocaleString(), " FCFA soit ").concat(this.taux_dep_gar_crsd, "% du montant propos\xE9"),
        value: {
          label: "D\xE9p\xF4t de garantie et compte de r\xE9serve du service de la dette (DG + CRSD) \xE0 hauteur de ".concat(this.montant_dep_gar_crsd.toLocaleString(), " FCFA soit ").concat(this.taux_dep_gar_crsd, "% du montant propos\xE9"),
          nom: "depot",
          taux: this.taux_dep_gar_crsd,
          montant: this.montant_dep_gar_crsd
        },
        id: "depot"
      }, {
        label: "Nantissement de stock",
        value: {
          label: "Nantissement de stock",
          nom: "nantissement_stock"
        },
        id: "nantissement_stock"
      }, {
        label: "Nantissement de fonds de commerce",
        value: {
          label: "Nantissement de fonds de commerce",
          nom: "nantissement_fonds_commerce"
        },
        id: "nantissement_fonds_commerce"
      }
      // {
      //     label: `Nantissement Dat`,
      //     value: {
      //         label: `Nantissement Dat`,
      //         nom: "nantissement_dat",

      //     },
      //     id: "nantissement_dat",
      // },
      ];
      this.formDataToBeWatched.suretes_diverses.forEach(function (el, index) {
        _this9.defaultSuretes.forEach(function (elem) {
          if (elem.value.nom === el.nom) {
            _this9.formDataToBeWatched.suretes_diverses[index] = elem.value;
            // console.log({el: el.label, elem: elem.label})
          }
        });
      });

      // Close table by default
      // this.defaultRetract(
      //     false,
      //     this.meta_data["dossier_credit"]?.applied_templ_id
      // );
    },
    recomputeSouscriptionValue: function recomputeSouscriptionValue(data) {
      var _this$mode_paiement;
      var res = 0;
      this.duree_credit0 = data.duree_credit;
      if (![undefined, null].includes(data === null || data === void 0 ? void 0 : data.mode_paiement)) {
        var _data$mode_paiement;
        this.mode_paiement0 = data === null || data === void 0 || (_data$mode_paiement = data.mode_paiement) === null || _data$mode_paiement === void 0 ? void 0 : _data$mode_paiement.toLowerCase();
      } else {
        if (![undefined, null].includes(this.mode_paiement0)) {
          var _this$meta_data$dossi25;
          this.mode_paiement0 = (_this$meta_data$dossi25 = this.meta_data.dossier_credit.cred_pub_tb_1) === null || _this$meta_data$dossi25 === void 0 || (_this$meta_data$dossi25 = _this$meta_data$dossi25.mode_paiement) === null || _this$meta_data$dossi25 === void 0 ? void 0 : _this$meta_data$dossi25.toLowerCase();
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
      var mode = (_this$mode_paiement = this.mode_paiement0) === null || _this$mode_paiement === void 0 ? void 0 : _this$mode_paiement.toLowerCase();
      var diviseur = 1;
      if (mode === "mensuelle") {
        diviseur = 1;
        res = dure / diviseur;
        // console.log('res', res)
      }
      if (mode === "bi-mensuel") {
        diviseur = 2;
        res = dure * diviseur;
        // console.log('res', res)
      }
      if (mode === "trimestriel") {
        diviseur = 3;
        res = dure / diviseur;
        // console.log('res', res)
      }
      if (mode === "semestriel") {
        diviseur = 6;
        res = dure / diviseur;
        // console.log('res', res)
      }
      if (mode === "in fine") {
        diviseur = dure || 1;
        res = dure / diviseur;
        // console.log('res', res)
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
      // console.table( this.suretes_diverses.at(0))
    },
    convertNumber: function convertNumber(valeur) {
      return Number(String(valeur).replace(/\s+/g, ""));
    },
    // AJOUTER
    launchAutoSaver: function launchAutoSaver() {
      var _this0 = this;
      _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["default"].loadUserData().then(function (res) {
        _this0.send2Backend(res, 0, 0);
      })["catch"](function (err) {
        _this0.loadWithError(err);
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
      ob === null || ob === void 0 || ob.filter(function (elm) {
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
    // retract() {
    //     this.seen = !this.seen;
    //     let a = {
    //         tb_name: this.tb_name + this.meta_data["cred_pub_key"],
    //         status: this.seen,
    //     };
    //     EventBus.$emit("savedclosed-table", a);
    // },
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
    handleInput: function handleInput(data) {
      var _this$authcheckUsr;
      // this.hypotheques.forEach((element, key) => {
      //     element.valeur_considere = this.convertNumber(element.valeur_marchande) * 20 /100
      //     console.log(element.valeur_considere)
      // })
      // this.gages.forEach((element, key) => {
      //     element.valeur_considere = this.convertNumber(element.valeur_marchande) * 20 /100
      //     console.log(element.valeur_considere)
      // })
      if (this.DAT_ACCESS_FILIALE == ((_this$authcheckUsr = this.authcheckUsr) === null || _this$authcheckUsr === void 0 ? void 0 : _this$authcheckUsr.filiale)) {
        var _this$meta_data9, _this$meta_data$dossi26, _this$meta_data0, _this$dat_nanti, _nanti_en_faveur_cofi, _this$meta_data10, _this$meta_data11;
        var applied_templ_name = this.meta_data.dossier_credit.applied_templ_name;
        var importantCredKeys = this.determineCredPubTables(applied_templ_name);
        var credPubTb00 = importantCredKeys.length >= 1 ? importantCredKeys[0] : null;
        var credPubTb1 = importantCredKeys.length >= 1 ? importantCredKeys[1] : null;
        var encours_actuel = credPubTb00 != null ? (_this$meta_data9 = this.meta_data) === null || _this$meta_data9 === void 0 || (_this$meta_data9 = _this$meta_data9.dossier_credit) === null || _this$meta_data9 === void 0 || (_this$meta_data9 = _this$meta_data9[credPubTb00]) === null || _this$meta_data9 === void 0 ? void 0 : _this$meta_data9.encours_actuel_modified : 0;
        var rachat = (_this$meta_data$dossi26 = (_this$meta_data0 = this.meta_data) === null || _this$meta_data0 === void 0 || (_this$meta_data0 = _this$meta_data0.dossier_credit[credPubTb1]) === null || _this$meta_data0 === void 0 ? void 0 : _this$meta_data0.rachat) !== null && _this$meta_data$dossi26 !== void 0 ? _this$meta_data$dossi26 : 0;
        var montant_credit = 0;
        if (data == null) {
          var _this$meta_data$dossi27, _this$meta_data1;
          montant_credit = (_this$meta_data$dossi27 = (_this$meta_data1 = this.meta_data) === null || _this$meta_data1 === void 0 || (_this$meta_data1 = _this$meta_data1.dossier_credit[credPubTb1]) === null || _this$meta_data1 === void 0 ? void 0 : _this$meta_data1.montant_credit) !== null && _this$meta_data$dossi27 !== void 0 ? _this$meta_data$dossi27 : 0;
        } else {
          montant_credit = data.montant_credit;
        }
        rachat = Number(String(rachat).replace(/\s/g, '').replace(',', '.'));
        montant_credit = Number(String(montant_credit).replace(/\s/g, '').replace(',', '.'));
        encours_actuel = Number(String(encours_actuel).replace(/\s/g, '').replace(',', '.'));
        var mtnExposition = encours_actuel - rachat + montant_credit;
        var montant_dat_nanti = Number(String((_this$dat_nanti = this.dat_nanti) === null || _this$dat_nanti === void 0 ? void 0 : _this$dat_nanti.montant_dat_nanti).replace(/\s/g, '').replace(',', '.'));
        var taux_couverture = montant_dat_nanti * 100 / mtnExposition;
        var nanti_en_faveur_cofina = this.dat_nanti.nanti_en_faveur_cofina;
        nanti_en_faveur_cofina = (_nanti_en_faveur_cofi = nanti_en_faveur_cofina) === null || _nanti_en_faveur_cofi === void 0 ? void 0 : _nanti_en_faveur_cofi.trim();
        taux_couverture = taux_couverture.toFixed(2);
        this.dat_nanti = _objectSpread(_objectSpread({}, this.dat_nanti), {}, {
          taux_couverture: taux_couverture
        });
        this.formDataToBeWatched.dat_nanti = this.dat_nanti;
        _services_credit_service__WEBPACK_IMPORTED_MODULE_3__["default"].classifyDoss(this.findCodeAg((_this$meta_data10 = this.meta_data) === null || _this$meta_data10 === void 0 ? void 0 : _this$meta_data10.dossier_credit), (_this$meta_data11 = this.meta_data) === null || _this$meta_data11 === void 0 || (_this$meta_data11 = _this$meta_data11.dossier_credit) === null || _this$meta_data11 === void 0 ? void 0 : _this$meta_data11.cred_pub_key, {
          is_dat_nanti: nanti_en_faveur_cofina == "Oui" && taux_couverture >= 100 ? true : false,
          montant_dat_nanti: montant_dat_nanti
        }).then(function (res) {
          // console.log(res);
        });
      }
      this.formDataToBeWatched["engagement_globales"] = this.engagement_globales;
      this.formDataToBeWatched.total_montant_engagement_globale = this.totalEngagementGlobal;
      this.formDataToBeWatched.total_hypotheques_valeur_marchande = this.somX3(this.hypotheques, "valeur_marchande");
      this.formDataToBeWatched.total_hypotheques_valeur_considere = this.somX3(this.hypotheques, "valeur_considere");
      this.formDataToBeWatched.total_gages_valeur_marchande = this.somX3(this.gages, "valeur_marchande");
      this.formDataToBeWatched.total_gages_valeur_considere = this.somX3(this.gages, "valeur_considere");
      this.formDataToBeWatched.total_gages_mobiliers_valeur_marchande = this.somX3(this.gages_mobiliers, "valeur_marchande");
      this.formDataToBeWatched.total_gages_mobiliers_valeur_considere = this.somX3(this.gages_mobiliers, "valeur_considere");
      this.formDataToBeWatched.total_caution_hypothecaires_valeur_marchande = this.somX3(this.caution_hypothecaires, "valeur_marchande");
      this.formDataToBeWatched.total_promesse_affectation_hypothecaires_valeur_marchande = this.somX3(this.promesse_affectation_hypothecaires, "valeur_marchande");
      this.formDataToBeWatched.total_depot_de_garanties_valeur_marchande = this.somX3(this.depot_de_garanties, "valeur_marchande");
      this.formDataToBeWatched.total_protection_financieres_valeur_marchande = this.somX3(this.protection_financieres, "valeur_marchande");
      //
      this.formDataToBeWatched.total_caution_hypothecaires_valeur_considere = this.somX3(this.caution_hypothecaires, "valeur_considere");
      this.formDataToBeWatched.total_promesse_affectation_hypothecaires_valeur_considere = this.somX3(this.promesse_affectation_hypothecaires, "valeur_considere");
      this.formDataToBeWatched.total_depot_de_garanties_valeur_considere = this.somX3(this.depot_de_garanties, "valeur_considere");
      this.formDataToBeWatched.total_protection_financieres_valeur_considere = this.somX3(this.protection_financieres, "valeur_considere");
      this.formDataToBeWatched.total_cautionnement_solidaires_valeur_cautionnement = this.somX3(this.cautionnement_solidaires, "valeur_cautionnement");
      this.formDataToBeWatched.total_cautionnement_solidaires_valeur_revenu_mensuel = this.somX3(this.cautionnement_solidaires, "revenu_mensuel");
      this.formDataToBeWatched.total_cautionnement_solidaires_valeur_patrimoine = this.somX3(this.cautionnement_solidaires, "valeur_patrimoine");
      // this.formDataToBeWatched.total_cautionnement_solidaires_valeur_marchande = this.somX3(
      //     this.cautionnement_solidaires,
      //     "valeur_marchande"
      // );
      // this.formDataToBeWatched.total_cautionnement_solidaires_valeur_considere = this.somX3(
      //     this.cautionnement_solidaires,
      //     "valeur_considere"
      // );

      // this.formDataToBeWatched.total_cautionnement_solidaires_valeur_cautionnement = this.formDataToBeWatched?.cautionnement_solidaires.reduce((t, c) => t + parseInt((c?.valeur_cautionnement ?? 0).toString().replace(/\s/g,'')), 0);

      // this.formDataToBeWatched.total_cautionnement_solidaires_valeur_revenu_mensuel = this.formDataToBeWatched?.cautionnement_solidaires.reduce((t, c) => t + parseInt((c?.revenu_mensuel ?? 0).toString().replace(/\s/g,'')), 0);
      // this.formDataToBeWatched.total_cautionnement_solidaires_valeur_patrimoine = this.formDataToBeWatched?.cautionnement_solidaires.reduce((t, c) => t + parseInt((c?.valeur_patrimoine ?? 0).toString().replace(/\s/g,'')), 0);

      this.formDataToBeWatched["hypotheques"] = this.hypotheques;
      this.formDataToBeWatched["gages"] = this.gages;
      this.formDataToBeWatched["gages_mobiliers"] = this.gages_mobiliers;
      this.formDataToBeWatched["suretes_diverses"] = this.suretes_diverses;
      this.formDataToBeWatched["co_signataire"] = this.co_signataire;
      this.formDataToBeWatched["cond_particulieres"] = this.cond_particulieres;
      this.formDataToBeWatched["cautionnement_solidaires"] = this.cautionnement_solidaires;
      this.formDataToBeWatched["caution_hypothecaires"] = this.caution_hypothecaires;
      this.formDataToBeWatched["promesse_affectation_hypothecaires"] = this.promesse_affectation_hypothecaires;
      // console.log('this.caution_hypothecaires',this.caution_hypothecaires)
      this.formDataToBeWatched["depot_de_garanties"] = this.depot_de_garanties;
      this.formDataToBeWatched["protection_financieres"] = this.protection_financieres;
    },
    deleteTB: function deleteTB() {
      if (confirm("Êtes-vous sûr de vouloir supprimer ce tableau ?")) {
        this.$emit("delete-tb", {
          tb_name: this.tb_name
        });
      }
    },
    loadRecaller: function loadRecaller() {
      var _this$meta_data12,
        _this$meta_data13,
        _this$meta_data14,
        _this$meta_data15,
        _this$meta_data16,
        _this$meta_data17,
        _this$meta_data18,
        _this1 = this,
        _this$meta_data20;
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];

      // console.log("createdKey loadRecaller 1 ",createdKey)
      this.matClient = (_this$meta_data12 = this.meta_data) !== null && _this$meta_data12 !== void 0 && (_this$meta_data12 = _this$meta_data12.dossier_credit) !== null && _this$meta_data12 !== void 0 && _this$meta_data12.doss_central_file_recorder ? (_this$meta_data13 = this.meta_data) === null || _this$meta_data13 === void 0 || (_this$meta_data13 = _this$meta_data13.dossier_credit) === null || _this$meta_data13 === void 0 ? void 0 : _this$meta_data13.doss_central_file_recorder.client.matcli : (_this$meta_data14 = this.meta_data) === null || _this$meta_data14 === void 0 ? void 0 : _this$meta_data14.dossier_credit.caf_recorded_file.client.matcli;
      this.typePret = (_this$meta_data15 = this.meta_data) !== null && _this$meta_data15 !== void 0 && (_this$meta_data15 = _this$meta_data15.dossier_credit) !== null && _this$meta_data15 !== void 0 && _this$meta_data15.doss_central_file_recorder ? (_this$meta_data16 = this.meta_data) === null || _this$meta_data16 === void 0 || (_this$meta_data16 = _this$meta_data16.dossier_credit) === null || _this$meta_data16 === void 0 ? void 0 : _this$meta_data16.doss_central_file_recorder.type_de_pret : (_this$meta_data17 = this.meta_data) === null || _this$meta_data17 === void 0 ? void 0 : _this$meta_data17.dossier_credit.caf_recorded_file.type_de_pret;
      // console.log("matcli", this.matClient, "type_pret", this.typePret)

      // voir si le dossier est ajourné pending
      if (localStorage.getItem((_this$meta_data18 = this.meta_data) === null || _this$meta_data18 === void 0 ? void 0 : _this$meta_data18.dossier_credit.cred_pub_key) === null) {
        var _this$meta_data19;
        // console.log("localStorage false and tb is not in tb_uses")
        this.recaller(this.matClient, this.typePret, (_this$meta_data19 = this.meta_data) === null || _this$meta_data19 === void 0 ? void 0 : _this$meta_data19.dossier_credit.cred_pub_key).then(function (res) {
          var record = res.data;
          if (record["is_success"] == true && record["recaller"].length > 0) {
            var _this1$meta_data;
            // console.log("data ",record["recaller"])
            localStorage.setItem((_this1$meta_data = _this1.meta_data) === null || _this1$meta_data === void 0 ? void 0 : _this1$meta_data.dossier_credit.cred_pub_key, JSON.stringify(record["recaller"]));
            // this.tbRecallerToLocalStorage = localStorage.getItem('tb_recaller');
          }
        })["catch"](function (err) {
          console.log("err", err);
        });
      }
      // console.log("localStorage  true")
      var recaller_record = localStorage.getItem((_this$meta_data20 = this.meta_data) === null || _this$meta_data20 === void 0 ? void 0 : _this$meta_data20.dossier_credit.cred_pub_key);

      // this.matClient = (this.meta_data?.dossier_credit?.doss_central_file_recorder) ? this.meta_data?.dossier_credit?.doss_central_file_recorder.client.matcli : this.meta_data?.dossier_credit.caf_recorded_file.client.matcli
      // console.log("recaller_record for localstorage",recaller_record)
      if (recaller_record) {
        var data = JSON.parse(recaller_record);
        if (data.length > 0) {
          var _data$, _data$2, _data$3, _data$4, _data$5, _data$6, _this$meta_data21;
          var recaller_matCli = (_data$ = data[0]) !== null && _data$ !== void 0 && _data$.doss_central_file_recorder ? (_data$2 = data[0]) === null || _data$2 === void 0 ? void 0 : _data$2.doss_central_file_recorder.client.matcli : (_data$3 = data[0]) === null || _data$3 === void 0 ? void 0 : _data$3.caf_recorded_file.client.matcli;
          var recaller_typePret = (_data$4 = data[0]) !== null && _data$4 !== void 0 && _data$4.doss_central_file_recorder ? (_data$5 = data[0]) === null || _data$5 === void 0 ? void 0 : _data$5.doss_central_file_recorder.type_de_pret : (_data$6 = data[0]) === null || _data$6 === void 0 ? void 0 : _data$6.caf_recorded_file.type_de_pret;
          if (!((_this$meta_data21 = this.meta_data) !== null && _this$meta_data21 !== void 0 && (_this$meta_data21 = _this$meta_data21.dossier_credit) !== null && _this$meta_data21 !== void 0 && _this$meta_data21.tbs_in_use.includes(this.tb_name))) {
            var _this$meta_data22, _data$7;
            // console.log("tableau pas inclu")
            if (recaller_matCli == this.matClient && recaller_typePret == this.typePret && ((_this$meta_data22 = this.meta_data) === null || _this$meta_data22 === void 0 ? void 0 : _this$meta_data22.dossier_credit.cred_pub_key) != ((_data$7 = data[0]) === null || _data$7 === void 0 ? void 0 : _data$7.cred_pub_key)) {
              // console.log("Trouvé")
              // console.log("recaller_record ===> ",data[0])
              // console.log("createdKey ",data[0][createdKey])

              if (data[0][createdKey] != undefined) {
                for (var el in this.exceptedFormDataToBeWatched) {
                  var _Object$keys;
                  //  obj.hasOwnProperty(el)
                  // data[0][createdKey]?.hasOwnProperty(el)
                  if ((_Object$keys = Object.keys(data[0][createdKey])) !== null && _Object$keys !== void 0 && _Object$keys.includes(el)) {
                    // console.log("this el ",this[el])
                    if (Array.isArray(data[0][createdKey][el])) {
                      this[el] = data[0][createdKey][el];
                    }
                    // console.log("cle "+el+" exist")
                    this.formDataToBeWatched[el] = data[0][createdKey][el];
                  } else {
                    // console.log("cle "+el+" n existe pas")
                    continue;
                  }
                }
                this.handleInput();
                return true;
              }
              return false;
            }
            return false;
          }
          // console.log("tableau inclu")
          return false;
        }
        return false;
      } else {
        return false;
      }
    },
    handleDoubleClickOrClick: function handleDoubleClickOrClick(event, index) {
      var _this$cautionnement_s2,
        _this10 = this;
      EventBus.$emit("open-extra-file-explorer");
      // const dateNow = new Date().toLocaleDateString();
      var numeroPiece = ((_this$cautionnement_s2 = this.cautionnement_solidaires[index]) === null || _this$cautionnement_s2 === void 0 || (_this$cautionnement_s2 = _this$cautionnement_s2.numero_piece_identite) === null || _this$cautionnement_s2 === void 0 ? void 0 : _this$cautionnement_s2.trim()) || '';
      var result = numeroPiece;
      // setTimeout(() => {
      //     EventBus.$emit("data-extra-file-explorer", {
      //         name: result,
      //     });
      // }, 500);
      setTimeout(function () {
        EventBus.$emit("data-extra-file-explorer", {
          name: "Pièce jointe {(*)}cautionnement_solidaires_" + index + '_' + _this10.$route.params.templateId
        });
      }, 500);
    },
    getFiles: function getFiles() {
      var _this11 = this;
      _services_proxy_service__WEBPACK_IMPORTED_MODULE_6__["default"].proxyEbapis({
        url: this.connectsHost + "api/get-files",
        method: "POST",
        data: {
          file_identity: this.meta_data["dossier_credit"].cred_pub_key
        }
      }).then(function (res) {
        var _res$data$data, _res$data$data2;
        res.data = JSON.parse(res.data);
        if (((_res$data$data = res.data.data) === null || _res$data$data === void 0 ? void 0 : _res$data$data.length) > 0 || ((_res$data$data2 = res.data.data) === null || _res$data$data2 === void 0 ? void 0 : _res$data$data2.length) != null) {
          _this11.files = res.data.data;
          _this11.cautionnement_solidaires.forEach(function (element, index) {
            var count = 0;
            _this11.files.forEach(function (file) {
              var _element$template;
              if ((file === null || file === void 0 ? void 0 : file.extra_file_template_id) != null && (element === null || element === void 0 || (_element$template = element.template) === null || _element$template === void 0 ? void 0 : _element$template.id) == (file === null || file === void 0 ? void 0 : file.extra_file_template_id)) {
                count++;
              }
            });
            _this11.cautionnement_solidaires[index]["files"] = count;
            _this11.handleInput();
          });
        }
      })["catch"](function (err) {
        console.error(err);
      });
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/cofina/_common_tables/T4_Commons.vue?vue&type=template&id=dbb370c0&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/cofina/_common_tables/T4_Commons.vue?vue&type=template&id=dbb370c0&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var render = function render() {
  var _this$authcheckUsr, _vm$dat_nanti, _vm$dat_nanti2, _vm$dat_nanti3, _this$meta_data, _this$meta_data2, _this$meta_data3, _vm$meta_data$dossier, _vm$meta_data$dossier3, _vm$meta_data;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row p-0"
  }, [_c("div", {
    staticClass: "col-12 p-0 position-relative"
  }, [_vm.isSeenState["hypotheques"] === true ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        return _vm.toggleIsSeen("hypotheques");
      }
    }
  }, [_c("h6", {
    "class": "subdiv" + this.tb_name,
    attrs: {
      id: "hypotheques"
    }
  }, [_vm._v("\n                    Hypothèque ferme\n                    "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)]), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table mb-5 table-borderless"
  }, [_vm._m(0), _vm._v(" "), _c("tbody", [_vm._l(_vm.hypotheques, function (hypotheque, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_vm._v(_vm._s(index + 1) + ".")]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: hypotheque.bien_hypotheque,
        expression: "\n                                        hypotheque.bien_hypotheque\n                                    ",
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
        value: hypotheque.bien_hypotheque
      },
      on: {
        change: [function ($event) {
          return _vm.$set(hypotheque, "bien_hypotheque", $event.target.value);
        }, _vm.handleInput]
      }
    })]), _vm._v(" "), _c("td", [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: hypotheque.rang,
        expression: "\n                                        hypotheque.rang\n                                    ",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-select single-select",
      attrs: {
        required: "",
        type: "text"
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(hypotheque, "rang", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, _vm.handleInput]
      }
    }, [_c("option", {
      attrs: {
        value: "1er rang"
      }
    }, [_vm._v("1er rang")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "2ème rang"
      }
    }, [_vm._v("2ème rang")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "3ème rang"
      }
    }, [_vm._v("3ème rang")])])]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: hypotheque.proprietaire,
        expression: "\n                                        hypotheque.proprietaire\n                                    ",
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
        value: hypotheque.proprietaire
      },
      on: {
        change: [function ($event) {
          return _vm.$set(hypotheque, "proprietaire", $event.target.value);
        }, _vm.handleInput]
      }
    })]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: hypotheque.numero_tel,
        expression: "\n                                        hypotheque.numero_tel\n                                    ",
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
        value: hypotheque.numero_tel
      },
      on: {
        change: [function ($event) {
          return _vm.$set(hypotheque, "numero_tel", $event.target.value);
        }, _vm.handleInput]
      }
    })]), _vm._v(" "), _c("td", [_c("date-input", {
      staticClass: "input-date",
      attrs: {
        value: hypotheque.annee_achat
      },
      on: {
        input: function input($event) {
          return _vm.setDateInput($event, "hypotheques", "annee_achat", index);
        }
      }
    })], 1), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: hypotheque.adresse_emplacement,
        expression: "\n                                        hypotheque.adresse_emplacement\n                                    ",
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
        value: hypotheque.adresse_emplacement
      },
      on: {
        change: [function ($event) {
          return _vm.$set(hypotheque, "adresse_emplacement", $event.target.value);
        }, _vm.handleInput]
      }
    })]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: hypotheque.longitude,
        expression: "\n                                        hypotheque.longitude\n                                    ",
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
        value: hypotheque.longitude
      },
      on: {
        change: [function ($event) {
          return _vm.$set(hypotheque, "longitude", $event.target.value);
        }, _vm.handleInput]
      }
    })]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: hypotheque.lattitude,
        expression: "\n                                        hypotheque.lattitude\n                                    ",
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
        value: hypotheque.lattitude
      },
      on: {
        change: [function ($event) {
          return _vm.$set(hypotheque, "lattitude", $event.target.value);
        }, _vm.handleInput]
      }
    })]), _vm._v(" "), _c("td", [_c("date-input", {
      staticClass: "input-date",
      attrs: {
        value: hypotheque.date_evaluation
      },
      on: {
        input: function input($event) {
          return _vm.setDateInput($event, "hypotheques", "date_evaluation", index);
        }
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
      staticClass: "form-control",
      attrs: {
        "default-typing": false,
        type: "text"
      },
      on: {
        input: _vm.handleInput
      },
      model: {
        value: hypotheque.valeur_marchande,
        callback: function callback($$v) {
          _vm.$set(hypotheque, "valeur_marchande", $$v);
        },
        expression: "\n                                        hypotheque.valeur_marchande\n                                    "
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
      staticClass: "form-control",
      attrs: {
        "default-typing": false,
        type: "text"
      },
      on: {
        input: _vm.handleInput
      },
      model: {
        value: hypotheque.valeur_considere,
        callback: function callback($$v) {
          _vm.$set(hypotheque, "valeur_considere", $$v);
        },
        expression: "\n                                        hypotheque.valeur_considere\n                                    "
      }
    })], 1), _vm._v(" "), index == 0 ? _c("td", [_c("button", {
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
        title: "Ajouter une nouvelle garantie"
      },
      on: {
        click: function click($event) {
          return _vm.addMore("hypotheques");
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
          return _vm.remove(index, "hypotheques");
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)])]);
  }), _vm._v(" "), _c("tr", [_vm._m(1), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      readonly: "",
      "default-typing": false
    },
    on: {
      input: _vm.handleInput
    },
    model: {
      value: _vm.formDataToBeWatched.total_hypotheques_valeur_marchande,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "total_hypotheques_valeur_marchande", $$v);
      },
      expression: "\n                                        formDataToBeWatched.total_hypotheques_valeur_marchande\n                                    "
    }
  })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      readonly: "",
      "default-typing": false
    },
    on: {
      input: _vm.handleInput
    },
    model: {
      value: _vm.formDataToBeWatched.total_hypotheques_valeur_considere,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "total_hypotheques_valeur_considere", $$v);
      },
      expression: "\n                                        formDataToBeWatched.total_hypotheques_valeur_considere\n                                    "
    }
  })], 1)])], 2)])])]) : _c("div", [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        return _vm.toggleIsSeen("hypotheques");
      }
    }
  }, [_c("h6", {
    attrs: {
      id: "hypotheques"
    }
  }, [_vm._v("\n                        Hypothèque ferme\n                        "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])])]), _vm._v(" "), _vm.DAT_ACCESS_FILIALE == ((_this$authcheckUsr = this.authcheckUsr) === null || _this$authcheckUsr === void 0 ? void 0 : _this$authcheckUsr.filiale) ? [_vm.isSeenState["dat_nanti"] === true ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header mb-3",
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        return _vm.toggleIsSeen("dat_nanti");
      }
    }
  }, [_c("h6", {
    "class": "subdiv" + this.tb_name,
    attrs: {
      id: "dat_nanti"
    }
  }, [_vm._v("\n                        Dépôt à Terme Nanti\n                        "), _c("chevron-up-icon", {
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
    staticClass: "table table-bordered align-middle text-center"
  }, [_vm._m(2), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {
    staticClass: "p-2"
  }, [_c("currency-input", {
    staticClass: "form-control text-end",
    staticStyle: {
      width: "150px !important"
    },
    attrs: {
      "default-typing": false,
      type: "text",
      value: "0"
    },
    on: {
      change: function change($event) {
        return _vm.handleInput();
      }
    },
    model: {
      value: _vm.dat_nanti.montant_dat_nanti,
      callback: function callback($$v) {
        _vm.$set(_vm.dat_nanti, "montant_dat_nanti", $$v);
      },
      expression: "dat_nanti.montant_dat_nanti"
    }
  })], 1), _vm._v(" "), _c("td", {
    staticClass: "p-2 text-center"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dat_nanti.taux_couverture,
      expression: "dat_nanti.taux_couverture"
    }],
    staticClass: "form-control text-end",
    staticStyle: {
      width: "100px"
    },
    attrs: {
      title: "Taux de couveture = Montant DAT Nanti * 100 / Exposition",
      type: "number",
      disabled: "",
      value: "0",
      min: "0"
    },
    domProps: {
      value: _vm.dat_nanti.taux_couverture
    },
    on: {
      change: function change($event) {
        return _vm.handleInput();
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.dat_nanti, "taux_couverture", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("td", {
    staticClass: "p-2"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dat_nanti.reference_dat_nanti,
      expression: "dat_nanti.reference_dat_nanti"
    }],
    staticClass: "form-control",
    staticStyle: {
      width: "160px !important"
    },
    attrs: {
      type: "text",
      value: "0"
    },
    domProps: {
      value: _vm.dat_nanti.reference_dat_nanti
    },
    on: {
      change: function change($event) {
        return _vm.handleInput();
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.dat_nanti, "reference_dat_nanti", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("td", {
    staticClass: "p-2"
  }, [_c("div", {
    staticClass: "d-flex justify-content-center"
  }, [_c("div", {
    staticClass: "form-check form-check-inline"
  }, [_c("input", {
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      id: "nantiOui",
      value: "Oui"
    },
    domProps: {
      checked: _vm.dat_nanti.nanti_en_faveur_cofina == "Oui"
    },
    on: {
      change: function change($event) {
        return _vm.checkBoxChange("Oui", $event);
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "nantiOui"
    }
  }, [_vm._v("Oui")])]), _vm._v(" "), _c("div", {
    staticClass: "form-check form-check-inline"
  }, [_c("input", {
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      id: "nantiNon",
      value: "Non"
    },
    domProps: {
      checked: _vm.dat_nanti.nanti_en_faveur_cofina == "Non"
    },
    on: {
      change: function change($event) {
        return _vm.checkBoxChange("Non", $event);
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "nantiNon"
    }
  }, [_vm._v("Non")])])])]), _vm._v(" "), _c("td", {
    staticClass: "p-2"
  }, [_c("div", {
    staticClass: "d-flex align-items-center"
  }, [_c("div", [((_vm$dat_nanti = _vm.dat_nanti) === null || _vm$dat_nanti === void 0 || (_vm$dat_nanti = _vm$dat_nanti.proof_dat_files) === null || _vm$dat_nanti === void 0 ? void 0 : _vm$dat_nanti.length) > 0 ? _c("span", {
    staticClass: "p-1 px-2 mx-2 text-nowrap",
    staticStyle: {
      "background-color": "rgb(44, 62, 80)",
      color: "white",
      "font-size": "13px",
      "border-radius": "5px",
      "margin-left": "0 !important",
      width: "150px"
    }
  }, [_vm._v("\n                                                " + _vm._s(((_vm$dat_nanti2 = _vm.dat_nanti) === null || _vm$dat_nanti2 === void 0 || (_vm$dat_nanti2 = _vm$dat_nanti2.proof_dat_files) === null || _vm$dat_nanti2 === void 0 ? void 0 : _vm$dat_nanti2.length) > 0 ? ((_vm$dat_nanti3 = _vm.dat_nanti) === null || _vm$dat_nanti3 === void 0 || (_vm$dat_nanti3 = _vm$dat_nanti3.proof_dat_files) === null || _vm$dat_nanti3 === void 0 ? void 0 : _vm$dat_nanti3.length) + " fichier(s) uploadé(s)" : "") + "\n                                            ")]) : _vm._e()]), _vm._v(" "), _c("div", [_c("button", {
    staticClass: "btn shadow-md text-white",
    staticStyle: {
      cursor: "pointer",
      background: "#2c3e50",
      width: "26px",
      "font-size": "13px",
      padding: "1px",
      "margin-right": "7px"
    },
    attrs: {
      type: "button",
      name: "button",
      "data-toggle": "tooltip",
      title: "Cliquer ici pour uploader ou voir le(s) fichier(s)"
    },
    on: {
      click: function click($event) {
        return _vm.addFiles("preuve-blocage-dat-nanti");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-attachment"
  })])])])])])])])])]) : _c("div", [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        return _vm.toggleIsSeen("dat_nanti");
      }
    }
  }, [_c("h6", {
    attrs: {
      id: "dat_nanti"
    }
  }, [_vm._v("\n                            Dépôt à Terme Nanti\n                            "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])])])] : _vm._e(), _vm._v(" "), _vm.isSeenState["gages"] === true ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        return _vm.toggleIsSeen("gages");
      }
    }
  }, [_c("h6", {
    "class": "subdiv" + this.tb_name,
    attrs: {
      id: "gages"
    }
  }, [_vm._v("\n                    Gages\n                    "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)]), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table mb-5 table-borderless"
  }, [_c("thead", [_c("td", {
    staticClass: "th text-center"
  }), _vm._v(" "), _vm._m(3), _vm._v(" "), _vm._m(4), _vm._v(" "), _vm._m(5), _vm._v(" "), _vm._m(6), _vm._v(" "), _vm._m(7), _vm._v(" "), _vm._m(8), _vm._v(" "), _vm._m(9), _vm._v(" "), _vm._m(10), _vm._v(" "), ((_this$meta_data = this.meta_data) === null || _this$meta_data === void 0 || (_this$meta_data = _this$meta_data.dossier_credit) === null || _this$meta_data === void 0 || (_this$meta_data = _this$meta_data.cred_pub_tb_4) === null || _this$meta_data === void 0 || (_this$meta_data = _this$meta_data.gages[0]) === null || _this$meta_data === void 0 ? void 0 : _this$meta_data.bien_a_gage) === "Véhicule" ? _c("td", [_c("label", [_vm._v("Date de mise en circulation")])]) : _vm._e(), _vm._v(" "), ((_this$meta_data2 = this.meta_data) === null || _this$meta_data2 === void 0 || (_this$meta_data2 = _this$meta_data2.dossier_credit) === null || _this$meta_data2 === void 0 || (_this$meta_data2 = _this$meta_data2.cred_pub_tb_4) === null || _this$meta_data2 === void 0 || (_this$meta_data2 = _this$meta_data2.gages[0]) === null || _this$meta_data2 === void 0 ? void 0 : _this$meta_data2.bien_a_gage) === "Véhicule" ? _c("td", [_c("label", [_vm._v("Marque")])]) : _vm._e(), _vm._v(" "), ((_this$meta_data3 = this.meta_data) === null || _this$meta_data3 === void 0 || (_this$meta_data3 = _this$meta_data3.dossier_credit) === null || _this$meta_data3 === void 0 || (_this$meta_data3 = _this$meta_data3.cred_pub_tb_4) === null || _this$meta_data3 === void 0 || (_this$meta_data3 = _this$meta_data3.gages[0]) === null || _this$meta_data3 === void 0 ? void 0 : _this$meta_data3.bien_a_gage) === "Véhicule" ? _c("td", [_c("label", [_vm._v("Nom du vehicule")])]) : _vm._e()]), _vm._v(" "), _c("tbody", [_vm._l(_vm.gages, function (gage, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_vm._v(_vm._s(index + 1) + ".")]), _vm._v(" "), _c("td", [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: gage.bien_a_gage,
        expression: "gage.bien_a_gage"
      }],
      staticClass: "form-select single-select",
      attrs: {
        id: "bien_a_gage"
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(gage, "bien_a_gage", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, _vm.handleInput]
      }
    }, [_c("option", {
      attrs: {
        selected: "",
        disabled: ""
      }
    }, [_vm._v("---")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "Véhicule"
      }
    }, [_vm._v("Véhicule")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "Gage d'or"
      }
    }, [_vm._v("Gage d'or")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "Objet de valeur"
      }
    }, [_vm._v("Objet de valeur")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "Matériel professionnel"
      }
    }, [_vm._v("Matériel professionnel")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "Natissement fond de commerce"
      }
    }, [_vm._v("Natissement fond de commerce")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "Nantissement compte bloqué"
      }
    }, [_vm._v("Nantissement compte bloqué")])])]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: gage.proprietaire,
        expression: "gage.proprietaire",
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
        value: gage.proprietaire
      },
      on: {
        change: [function ($event) {
          return _vm.$set(gage, "proprietaire", $event.target.value);
        }, _vm.handleInput]
      }
    })]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: gage.numero_tel,
        expression: "gage.numero_tel",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control",
      attrs: {
        required: "",
        type: "text",
        disabled: gage.bien_a_gage === "Gage d'or"
      },
      domProps: {
        value: gage.numero_tel
      },
      on: {
        change: [function ($event) {
          return _vm.$set(gage, "numero_tel", $event.target.value);
        }, _vm.handleInput]
      }
    })]), _vm._v(" "), _c("td", [_c("date-input", {
      staticClass: "input-date",
      attrs: {
        value: gage.annee_achat
      },
      on: {
        input: function input($event) {
          return _vm.setDateInput($event, "gages", "annee_achat", index);
        }
      }
    })], 1), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: gage.adresse_emplacement,
        expression: "\n                                        gage.adresse_emplacement\n                                    ",
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
        value: gage.adresse_emplacement
      },
      on: {
        change: [function ($event) {
          return _vm.$set(gage, "adresse_emplacement", $event.target.value);
        }, _vm.handleInput]
      }
    })]), _vm._v(" "), _c("td", [_c("date-input", {
      staticClass: "input-date",
      attrs: {
        value: gage.date_evaluation
      },
      on: {
        input: function input($event) {
          return _vm.setDateInput($event, "gages", "date_evaluation", index);
        }
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
      staticClass: "form-control",
      attrs: {
        "default-typing": false,
        type: "text"
      },
      on: {
        input: _vm.handleInput
      },
      model: {
        value: gage.valeur_marchande,
        callback: function callback($$v) {
          _vm.$set(gage, "valeur_marchande", $$v);
        },
        expression: "\n                                        gage.valeur_marchande\n                                    "
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
      staticClass: "form-control",
      attrs: {
        "default-typing": false,
        type: "text"
      },
      on: {
        input: _vm.handleInput
      },
      model: {
        value: gage.valeur_considere,
        callback: function callback($$v) {
          _vm.$set(gage, "valeur_considere", $$v);
        },
        expression: "\n                                        gage.valeur_considere\n                                    "
      }
    })], 1), _vm._v(" "), gage.bien_a_gage === "Véhicule" ? [_c("td", [_c("date-input", {
      staticClass: "input-date",
      attrs: {
        value: gage.date_mise_circulation
      },
      on: {
        input: function input($event) {
          return _vm.setDateInput($event, "gages", "date_mise_circulation", index);
        }
      }
    })], 1), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: gage.marque,
        expression: "gage.marque",
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
        value: gage.marque
      },
      on: {
        change: [function ($event) {
          return _vm.$set(gage, "marque", $event.target.value);
        }, _vm.handleInput]
      }
    })]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: gage.nom_vehicule,
        expression: "gage.nom_vehicule",
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
        value: gage.nom_vehicule
      },
      on: {
        change: [function ($event) {
          return _vm.$set(gage, "nom_vehicule", $event.target.value);
        }, _vm.handleInput]
      }
    })])] : _vm._e(), _vm._v(" "), index == 0 ? _c("td", [_c("button", {
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
        title: "Ajouter une nouvelle garantie"
      },
      on: {
        click: function click($event) {
          return _vm.addMore("gages");
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
          return _vm.remove(index, "gages");
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)])], 2);
  }), _vm._v(" "), _c("tr", [_vm._m(11), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      readonly: "",
      "default-typing": false
    },
    on: {
      input: _vm.handleInput
    },
    model: {
      value: _vm.formDataToBeWatched.total_gages_valeur_marchande,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "total_gages_valeur_marchande", $$v);
      },
      expression: "\n                                        formDataToBeWatched.total_gages_valeur_marchande\n                                    "
    }
  })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      readonly: "",
      "default-typing": false
    },
    on: {
      input: _vm.handleInput
    },
    model: {
      value: _vm.formDataToBeWatched.total_gages_valeur_considere,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "total_gages_valeur_considere", $$v);
      },
      expression: "\n                                        formDataToBeWatched.total_gages_valeur_considere\n                                    "
    }
  })], 1)])], 2)])])]) : _c("div", [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        return _vm.toggleIsSeen("gages");
      }
    }
  }, [_c("h6", {
    attrs: {
      id: "gages"
    }
  }, [_vm._v("\n                        Gages\n                        "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])])]), _vm._v(" "), _vm.isSeenState["cautionnement_solidaire"] === true ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        return _vm.toggleIsSeen("cautionnement_solidaire");
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "cautionnement_solidaire"
    }
  }, [_vm._v("\n                    Cautionnement solidaire\n                    "), _c("chevron-up-icon", {
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
      "padding-bottom": "100px"
    }
  }, [_c("table", {
    staticClass: "table table-borderless mb-1"
  }, [_c("thead", [_c("tr", [_vm._m(12), _vm._v(" "), _vm._m(13), _vm._v(" "), _vm._m(14), _vm._v(" "), _vm._m(15), _vm._v(" "), _vm._m(16), _vm._v(" "), _vm._m(17), _vm._v(" "), _vm._m(18), _vm._v(" "), ((_vm$meta_data$dossier = _vm.meta_data.dossier_credit) === null || _vm$meta_data$dossier === void 0 ? void 0 : _vm$meta_data$dossier.applied_templ_name) == "Retail BF (Burkina Faso)" ? [_vm._m(19), _vm._v(" "), _vm._m(20), _vm._v(" "), _vm._m(21), _vm._v(" "), _vm._m(22)] : _vm._e(), _vm._v(" "), _vm._m(23), _vm._v(" "), _vm._m(24), _vm._v(" "), _vm._m(25), _vm._v(" "), _vm._m(26)], 2)]), _vm._v(" "), _c("tbody", [_vm._l(_vm.cautionnement_solidaires, function (cautionnement, index) {
    var _vm$meta_data$dossier2;
    return _c("tr", {
      key: index
    }, [_c("td", {
      staticClass: "col-4"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: cautionnement.nom_prenoms,
        expression: "\n                                            cautionnement.nom_prenoms\n                                        ",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        required: ""
      },
      domProps: {
        value: cautionnement.nom_prenoms
      },
      on: {
        input: _vm.handleInput,
        change: function change($event) {
          return _vm.$set(cautionnement, "nom_prenoms", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "col-4"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: cautionnement.email,
        expression: "\n                                            cautionnement.email\n                                        ",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        required: ""
      },
      domProps: {
        value: cautionnement.email
      },
      on: {
        input: _vm.handleInput,
        change: function change($event) {
          return _vm.$set(cautionnement, "email", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", {}, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: cautionnement.numero_piece_identite,
        expression: "\n                                            cautionnement.numero_piece_identite\n                                        ",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control",
      attrs: {
        type: "text",
        required: ""
      },
      domProps: {
        value: cautionnement.numero_piece_identite
      },
      on: {
        input: _vm.handleInput,
        change: function change($event) {
          return _vm.$set(cautionnement, "numero_piece_identite", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "col-2"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: cautionnement.profession,
        expression: "\n                                        cautionnement.profession\n                                    ",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control",
      attrs: {
        type: "text"
      },
      domProps: {
        value: cautionnement.profession
      },
      on: {
        input: _vm.handleInput,
        change: function change($event) {
          return _vm.$set(cautionnement, "profession", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("Multiselect", {
      staticStyle: {
        width: "97px",
        height: "42px"
      },
      attrs: {
        searchable: true,
        trackBy: "name",
        label: "name",
        "value-prop": "phonecode",
        classes: {
          optionPointed: "text-gray-800 bg-gray-100"
        },
        options: _vm.countries
      },
      scopedSlots: _vm._u([{
        key: "option",
        fn: function fn(_ref) {
          var option = _ref.option,
            isPointed = _ref.isPointed;
          return [_c("p", {
            staticClass: "multiselect-option"
          }, [_vm._v("\n                                                " + _vm._s(option.name) + "\n                                            ")])];
        }
      }, {
        key: "singlelabel",
        fn: function fn(_ref2) {
          var value = _ref2.value;
          return [_c("p", {
            staticClass: "multiselect-single-label"
          }, [_vm._v("\n                                                " + _vm._s(value.phonecode) + "\n                                            ")])];
        }
      }], null, true),
      model: {
        value: cautionnement.indicatif_caution_solidaire,
        callback: function callback($$v) {
          _vm.$set(cautionnement, "indicatif_caution_solidaire", $$v);
        },
        expression: "\n                                        cautionnement.indicatif_caution_solidaire\n                                    "
      }
    })], 1), _vm._v(" "), _c("td", {
      staticClass: "col-2"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: cautionnement.numero_tel_caution_solidaire,
        expression: "\n                                        cautionnement.numero_tel_caution_solidaire\n                                    ",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control",
      attrs: {
        type: "text"
      },
      domProps: {
        value: cautionnement.numero_tel_caution_solidaire
      },
      on: {
        input: _vm.handleInput,
        change: function change($event) {
          return _vm.$set(cautionnement, "numero_tel_caution_solidaire", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "col-2"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: cautionnement.localisation_caution_solidaire,
        expression: "\n                                        cautionnement.localisation_caution_solidaire\n                                    ",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control",
      attrs: {
        type: "text"
      },
      domProps: {
        value: cautionnement.localisation_caution_solidaire
      },
      on: {
        input: _vm.handleInput,
        change: function change($event) {
          return _vm.$set(cautionnement, "localisation_caution_solidaire", $event.target.value);
        }
      }
    })]), _vm._v(" "), ((_vm$meta_data$dossier2 = _vm.meta_data.dossier_credit) === null || _vm$meta_data$dossier2 === void 0 ? void 0 : _vm$meta_data$dossier2.applied_templ_name) == "Retail BF (Burkina Faso)" ? [_c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: cautionnement.latitude_domicile_principale,
        expression: "\n                                        cautionnement.latitude_domicile_principale\n                                        ",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control",
      attrs: {
        type: "text"
      },
      domProps: {
        value: cautionnement.latitude_domicile_principale
      },
      on: {
        input: _vm.handleInput,
        change: function change($event) {
          return _vm.$set(cautionnement, "latitude_domicile_principale", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: cautionnement.longitude_domicile_principale,
        expression: "\n                                        cautionnement.longitude_domicile_principale\n                                        ",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control",
      attrs: {
        type: "text"
      },
      domProps: {
        value: cautionnement.longitude_domicile_principale
      },
      on: {
        input: _vm.handleInput,
        change: function change($event) {
          return _vm.$set(cautionnement, "longitude_domicile_principale", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: cautionnement.latitude_activite,
        expression: "\n                                        cautionnement.latitude_activite\n                                        ",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control",
      attrs: {
        type: "text"
      },
      domProps: {
        value: cautionnement.latitude_activite
      },
      on: {
        input: _vm.handleInput,
        change: function change($event) {
          return _vm.$set(cautionnement, "latitude_activite", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: cautionnement.longitude_activite,
        expression: "\n                                        cautionnement.longitude_activite\n                                        ",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control",
      attrs: {
        type: "text"
      },
      domProps: {
        value: cautionnement.longitude_activite
      },
      on: {
        input: _vm.handleInput,
        change: function change($event) {
          return _vm.$set(cautionnement, "longitude_activite", $event.target.value);
        }
      }
    })])] : _vm._e(), _vm._v(" "), _c("td", {
      staticClass: "col-2"
    }, [_c("currency-input", {
      attrs: {
        "default-typing": false
      },
      on: {
        input: _vm.handleInput
      },
      model: {
        value: cautionnement.revenu_mensuel,
        callback: function callback($$v) {
          _vm.$set(cautionnement, "revenu_mensuel", $$v);
        },
        expression: "\n                                        cautionnement.revenu_mensuel\n                                    "
      }
    })], 1), _vm._v(" "), _c("td", {
      staticClass: "col-2"
    }, [_c("currency-input", {
      staticClass: "form-control",
      attrs: {
        type: "text",
        "default-typing": false
      },
      on: {
        input: _vm.handleInput
      },
      model: {
        value: cautionnement.valeur_patrimoine,
        callback: function callback($$v) {
          _vm.$set(cautionnement, "valeur_patrimoine", $$v);
        },
        expression: "\n                                            cautionnement.valeur_patrimoine\n                                        "
      }
    })], 1), _vm._v(" "), _c("td", {
      staticClass: "col-2"
    }, [_c("currency-input", {
      staticClass: "form-control",
      attrs: {
        type: "text",
        "default-typing": false
      },
      on: {
        input: _vm.handleInput
      },
      model: {
        value: cautionnement.valeur_cautionnement,
        callback: function callback($$v) {
          _vm.$set(cautionnement, "valeur_cautionnement", $$v);
        },
        expression: "\n                                            cautionnement.valeur_cautionnement\n                                        "
      }
    })], 1), _vm._v(" "), _c("td", [_c("div", {
      staticClass: "d-flex align-items-center"
    }, [_c("div", [(cautionnement === null || cautionnement === void 0 ? void 0 : cautionnement.files) > 0 ? _c("span", {
      staticClass: "p-1 px-2 mx-2 text-nowrap",
      staticStyle: {
        "background-color": "rgb(44, 62, 80)",
        color: "white",
        "font-size": "13px",
        "border-radius": "5px",
        "margin-left": "0 !important",
        width: "150px"
      }
    }, [_vm._v(_vm._s((cautionnement === null || cautionnement === void 0 ? void 0 : cautionnement.files) > 0 ? (cautionnement === null || cautionnement === void 0 ? void 0 : cautionnement.files) + " fichier(s) uploadé(s)" : ""))]) : _vm._e()]), _vm._v(" "), _c("div", [_c("button", {
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
          return _vm.handleDoubleClickOrClick($event, index);
        }
      }
    }, [_c("i", {
      staticClass: "icofont-attachment"
    })])])])]), _vm._v(" "), index == 0 ? _c("td", {
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
          return _vm.addMore1();
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
          return _vm.remove1(index);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)])], 2);
  }), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "text-end",
    attrs: {
      colspan: ((_vm$meta_data$dossier3 = _vm.meta_data.dossier_credit) === null || _vm$meta_data$dossier3 === void 0 ? void 0 : _vm$meta_data$dossier3.applied_templ_name) == "Retail BF (Burkina Faso)" ? 11 : 7
    }
  }, [_c("b", [_vm._v("Totaux")])]), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      readonly: "",
      "default-typing": false
    },
    on: {
      input: _vm.handleInput
    },
    model: {
      value: _vm.formDataToBeWatched.total_cautionnement_solidaires_valeur_revenu_mensuel,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "total_cautionnement_solidaires_valeur_revenu_mensuel", $$v);
      },
      expression: "\n                                                formDataToBeWatched.total_cautionnement_solidaires_valeur_revenu_mensuel\n                                            "
    }
  })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      readonly: "",
      "default-typing": false
    },
    on: {
      input: _vm.handleInput
    },
    model: {
      value: _vm.formDataToBeWatched.total_cautionnement_solidaires_valeur_patrimoine,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "total_cautionnement_solidaires_valeur_patrimoine", $$v);
      },
      expression: "\n                                                formDataToBeWatched.total_cautionnement_solidaires_valeur_patrimoine\n                                            "
    }
  })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      readonly: "",
      "default-typing": false
    },
    on: {
      input: _vm.handleInput
    },
    model: {
      value: _vm.formDataToBeWatched.total_cautionnement_solidaires_valeur_cautionnement,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "total_cautionnement_solidaires_valeur_cautionnement", $$v);
      },
      expression: "\n                                                formDataToBeWatched.total_cautionnement_solidaires_valeur_cautionnement\n                                            "
    }
  })], 1)])], 2)])])])]) : _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        return _vm.toggleIsSeen("cautionnement_solidaire");
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "cautionnent_solidaire"
    }
  }, [_vm._v("\n                    Cautionnement solidaire\n                    "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])]), _vm._v(" "), _vm.isSeenState["caution_hypothecaire"] === true ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        return _vm.toggleIsSeen("caution_hypothecaire");
      }
    }
  }, [_c("h6", {
    "class": "subdiv" + this.tb_name,
    attrs: {
      id: "caution_hypothecaire"
    }
  }, [_vm._v("\n                    Caution hypothécaire\n                    "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)]), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table mb-5 table-borderless"
  }, [_vm._m(27), _vm._v(" "), _c("tbody", [_vm._l(_vm.caution_hypothecaires, function (caution_hypothecaire, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_vm._v(_vm._s(index + 1) + ".")]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: caution_hypothecaire.bien,
        expression: "\n                                        caution_hypothecaire.bien\n                                    ",
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
        value: caution_hypothecaire.bien
      },
      on: {
        input: _vm.handleInput,
        change: function change($event) {
          return _vm.$set(caution_hypothecaire, "bien", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: caution_hypothecaire.proprietaire,
        expression: "\n                                        caution_hypothecaire.proprietaire\n                                    ",
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
        value: caution_hypothecaire.proprietaire
      },
      on: {
        input: _vm.handleInput,
        change: function change($event) {
          return _vm.$set(caution_hypothecaire, "proprietaire", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: caution_hypothecaire.numero_tel,
        expression: "\n                                        caution_hypothecaire.numero_tel\n                                    ",
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
        value: caution_hypothecaire.numero_tel
      },
      on: {
        input: _vm.handleInput,
        change: function change($event) {
          return _vm.$set(caution_hypothecaire, "numero_tel", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("date-input", {
      staticClass: "input-date",
      attrs: {
        value: caution_hypothecaire.annee_achat
      },
      on: {
        input: function input($event) {
          return _vm.setDateInput($event, "caution_hypothecaires", "annee_achat", index);
        }
      }
    })], 1), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: caution_hypothecaire.adresse_emplacement,
        expression: "\n                                        caution_hypothecaire.adresse_emplacement\n                                    ",
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
        value: caution_hypothecaire.adresse_emplacement
      },
      on: {
        change: [function ($event) {
          return _vm.$set(caution_hypothecaire, "adresse_emplacement", $event.target.value);
        }, _vm.handleInput]
      }
    })]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: caution_hypothecaire.longitude,
        expression: "\n                                        caution_hypothecaire.longitude\n                                    ",
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
        value: caution_hypothecaire.longitude
      },
      on: {
        change: [function ($event) {
          return _vm.$set(caution_hypothecaire, "longitude", $event.target.value);
        }, _vm.handleInput]
      }
    })]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: caution_hypothecaire.lattitude,
        expression: "\n                                        caution_hypothecaire.lattitude\n                                    ",
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
        value: caution_hypothecaire.lattitude
      },
      on: {
        change: [function ($event) {
          return _vm.$set(caution_hypothecaire, "lattitude", $event.target.value);
        }, _vm.handleInput]
      }
    })]), _vm._v(" "), _c("td", [_c("date-input", {
      staticClass: "input-date",
      attrs: {
        value: caution_hypothecaire.date_evaluation
      },
      on: {
        input: function input($event) {
          return _vm.setDateInput($event, "caution_hypothecaires", "date_evaluation", index);
        }
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
      staticClass: "form-control",
      attrs: {
        "default-typing": false,
        type: "text"
      },
      on: {
        input: _vm.handleInput
      },
      model: {
        value: caution_hypothecaire.valeur_marchande,
        callback: function callback($$v) {
          _vm.$set(caution_hypothecaire, "valeur_marchande", $$v);
        },
        expression: "\n                                        caution_hypothecaire.valeur_marchande\n                                    "
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
      staticClass: "form-control",
      attrs: {
        "default-typing": false,
        type: "text"
      },
      on: {
        input: _vm.handleInput
      },
      model: {
        value: caution_hypothecaire.valeur_considere,
        callback: function callback($$v) {
          _vm.$set(caution_hypothecaire, "valeur_considere", $$v);
        },
        expression: "\n                                        caution_hypothecaire.valeur_considere\n                                    "
      }
    })], 1), _vm._v(" "), index == 0 ? _c("td", [_c("button", {
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
        title: "Ajouter une nouvelle garantie"
      },
      on: {
        click: function click($event) {
          return _vm.addMore("caution_hypothecaires");
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
          return _vm.remove(index, "caution_hypothecaires");
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)])]);
  }), _vm._v(" "), _c("tr", [_vm._m(28), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      readonly: "",
      "default-typing": false
    },
    on: {
      input: _vm.handleInput
    },
    model: {
      value: _vm.formDataToBeWatched.total_caution_hypothecaires_valeur_marchande,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "total_caution_hypothecaires_valeur_marchande", $$v);
      },
      expression: "\n                                        formDataToBeWatched.total_caution_hypothecaires_valeur_marchande\n                                    "
    }
  })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      readonly: "",
      "default-typing": false
    },
    on: {
      input: _vm.handleInput
    },
    model: {
      value: _vm.formDataToBeWatched.total_caution_hypothecaires_valeur_considere,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "total_caution_hypothecaires_valeur_considere", $$v);
      },
      expression: "\n                                        formDataToBeWatched.total_caution_hypothecaires_valeur_considere\n                                    "
    }
  })], 1)])], 2)])])]) : _c("div", [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        return _vm.toggleIsSeen("caution_hypothecaire");
      }
    }
  }, [_c("h6", {
    attrs: {
      id: "caution_hypothecaire"
    }
  }, [_vm._v("\n                        Caution hypothécaire\n                        "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])])]), _vm._v(" "), _vm.isSeenState["promesse_affectation_hypothecaire"] === true ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        return _vm.toggleIsSeen("promesse_affectation_hypothecaire");
      }
    }
  }, [_c("h6", {
    "class": "subdiv" + this.tb_name,
    attrs: {
      id: "promesse_affectation_hypothecaire"
    }
  }, [_vm._v("\n                    Promesse d'affectation hypothecaire\n                    "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)]), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table mb-5 table-borderless"
  }, [_vm._m(29), _vm._v(" "), _c("tbody", [_vm._l(_vm.promesse_affectation_hypothecaires, function (promesse_affectation_hypothecaire, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_vm._v(_vm._s(index + 1) + ".")]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: promesse_affectation_hypothecaire.bien,
        expression: "\n                                        promesse_affectation_hypothecaire.bien\n                                    ",
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
        value: promesse_affectation_hypothecaire.bien
      },
      on: {
        input: _vm.handleInput,
        change: function change($event) {
          return _vm.$set(promesse_affectation_hypothecaire, "bien", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: promesse_affectation_hypothecaire.proprietaire,
        expression: "\n                                        promesse_affectation_hypothecaire.proprietaire\n                                    ",
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
        value: promesse_affectation_hypothecaire.proprietaire
      },
      on: {
        input: _vm.handleInput,
        change: function change($event) {
          return _vm.$set(promesse_affectation_hypothecaire, "proprietaire", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: promesse_affectation_hypothecaire.numero_tel,
        expression: "\n                                        promesse_affectation_hypothecaire.numero_tel\n                                    ",
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
        value: promesse_affectation_hypothecaire.numero_tel
      },
      on: {
        input: _vm.handleInput,
        change: function change($event) {
          return _vm.$set(promesse_affectation_hypothecaire, "numero_tel", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("date-input", {
      staticClass: "input-date",
      attrs: {
        value: promesse_affectation_hypothecaire.annee_achat
      },
      on: {
        input: function input($event) {
          return _vm.setDateInput($event, "promesse_affectation_hypothecaires", "annee_achat", index);
        }
      }
    })], 1), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: promesse_affectation_hypothecaire.adresse_emplacement,
        expression: "\n                                        promesse_affectation_hypothecaire.adresse_emplacement\n                                    ",
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
        value: promesse_affectation_hypothecaire.adresse_emplacement
      },
      on: {
        change: [function ($event) {
          return _vm.$set(promesse_affectation_hypothecaire, "adresse_emplacement", $event.target.value);
        }, _vm.handleInput]
      }
    })]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: promesse_affectation_hypothecaire.longitude,
        expression: "\n                                        promesse_affectation_hypothecaire.longitude\n                                    ",
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
        value: promesse_affectation_hypothecaire.longitude
      },
      on: {
        change: [function ($event) {
          return _vm.$set(promesse_affectation_hypothecaire, "longitude", $event.target.value);
        }, _vm.handleInput]
      }
    })]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: promesse_affectation_hypothecaire.lattitude,
        expression: "\n                                        promesse_affectation_hypothecaire.lattitude\n                                    ",
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
        value: promesse_affectation_hypothecaire.lattitude
      },
      on: {
        change: [function ($event) {
          return _vm.$set(promesse_affectation_hypothecaire, "lattitude", $event.target.value);
        }, _vm.handleInput]
      }
    })]), _vm._v(" "), _c("td", [_c("date-input", {
      staticClass: "input-date",
      attrs: {
        value: promesse_affectation_hypothecaire.date_evaluation
      },
      on: {
        input: function input($event) {
          return _vm.setDateInput($event, "promesse_affectation_hypothecaires", "date_evaluation", index);
        }
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
      staticClass: "form-control",
      attrs: {
        "default-typing": false,
        type: "text"
      },
      on: {
        input: _vm.handleInput
      },
      model: {
        value: promesse_affectation_hypothecaire.valeur_marchande,
        callback: function callback($$v) {
          _vm.$set(promesse_affectation_hypothecaire, "valeur_marchande", $$v);
        },
        expression: "\n                                        promesse_affectation_hypothecaire.valeur_marchande\n                                    "
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
      staticClass: "form-control",
      attrs: {
        "default-typing": false,
        type: "text"
      },
      on: {
        input: _vm.handleInput
      },
      model: {
        value: promesse_affectation_hypothecaire.valeur_considere,
        callback: function callback($$v) {
          _vm.$set(promesse_affectation_hypothecaire, "valeur_considere", $$v);
        },
        expression: "\n                                        promesse_affectation_hypothecaire.valeur_considere\n                                    "
      }
    })], 1), _vm._v(" "), index == 0 ? _c("td", [_c("button", {
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
        title: "Ajouter une nouvelle garantie"
      },
      on: {
        click: function click($event) {
          return _vm.addMore("promesse_affectation_hypothecaires");
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
          return _vm.remove(index, "promesse_affectation_hypothecaires");
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)])]);
  }), _vm._v(" "), _c("tr", [_vm._m(30), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      readonly: "",
      "default-typing": false
    },
    on: {
      input: _vm.handleInput
    },
    model: {
      value: _vm.formDataToBeWatched.total_promesse_affectation_hypothecaires_valeur_marchande,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "total_promesse_affectation_hypothecaires_valeur_marchande", $$v);
      },
      expression: "\n                                        formDataToBeWatched.total_promesse_affectation_hypothecaires_valeur_marchande\n                                    "
    }
  })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      readonly: "",
      "default-typing": false
    },
    on: {
      input: _vm.handleInput
    },
    model: {
      value: _vm.formDataToBeWatched.total_promesse_affectation_hypothecaires_valeur_considere,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "total_promesse_affectation_hypothecaires_valeur_considere", $$v);
      },
      expression: "\n                                        formDataToBeWatched.total_promesse_affectation_hypothecaires_valeur_considere\n                                    "
    }
  })], 1)])], 2)])])]) : _c("div", [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        return _vm.toggleIsSeen("promesse_affectation_hypothecaire");
      }
    }
  }, [_c("h6", {
    attrs: {
      id: "promesse_affectation_hypothecaire"
    }
  }, [_vm._v("\n                        Promesse d'affectation hypothecaire\n                        "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])])]), _vm._v(" "), _vm.isSeenState["protections_financieres_eligibles"] === true ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        return _vm.toggleIsSeen("protections_financieres_eligibles");
      }
    }
  }, [_c("h6", {
    "class": "subdiv" + this.tb_name,
    attrs: {
      id: "protections_financieres_eligibles"
    }
  }, [_vm._v("\n                    Protections financières éligibles (Garantie/Assurance crédit)\n                    "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)]), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table mb-5 table-borderless"
  }, [_vm._m(31), _vm._v(" "), _c("tbody", [_vm._l(_vm.protection_financieres, function (protection_financiere, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_vm._v(_vm._s(index + 1) + ".")]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: protection_financiere.garantie,
        expression: "\n                                        protection_financiere.garantie\n                                    ",
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
        value: protection_financiere.garantie
      },
      on: {
        change: [function ($event) {
          return _vm.$set(protection_financiere, "garantie", $event.target.value);
        }, _vm.handleInput]
      }
    })]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: protection_financiere.institution,
        expression: "\n                                        protection_financiere.institution\n                                    ",
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
        value: protection_financiere.institution
      },
      on: {
        change: [function ($event) {
          return _vm.$set(protection_financiere, "institution", $event.target.value);
        }, _vm.handleInput]
      }
    })]), _vm._v(" "), _c("td", [_c("date-input", {
      staticClass: "input-date",
      attrs: {
        value: protection_financiere.date_attribution
      },
      on: {
        input: function input($event) {
          return _vm.setDateInput($event, "protection_financieres", "date_attribution", index);
        }
      }
    })], 1), _vm._v(" "), _c("td", [_c("date-input", {
      staticClass: "input-date",
      attrs: {
        value: protection_financiere.date_evaluation
      },
      on: {
        input: function input($event) {
          return _vm.setDateInput($event, "protection_financieres", "date_evaluation", index);
        }
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
      staticClass: "form-control",
      attrs: {
        "default-typing": false,
        type: "text"
      },
      on: {
        input: _vm.handleInput
      },
      model: {
        value: protection_financiere.valeur_marchande,
        callback: function callback($$v) {
          _vm.$set(protection_financiere, "valeur_marchande", $$v);
        },
        expression: "\n                                        protection_financiere.valeur_marchande\n                                    "
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
      staticClass: "form-control",
      attrs: {
        "default-typing": false,
        type: "text"
      },
      on: {
        input: _vm.handleInput
      },
      model: {
        value: protection_financiere.valeur_considere,
        callback: function callback($$v) {
          _vm.$set(protection_financiere, "valeur_considere", $$v);
        },
        expression: "\n                                        protection_financiere.valeur_considere\n                                    "
      }
    })], 1), _vm._v(" "), index == 0 ? _c("td", [_c("button", {
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
        title: "Ajouter une nouvelle garantie"
      },
      on: {
        click: function click($event) {
          return _vm.addMore("protection_financieres");
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
          return _vm.remove(index, "protection_financieres");
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)])]);
  }), _vm._v(" "), _c("tr", [_vm._m(32), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      readonly: "",
      "default-typing": false
    },
    on: {
      input: _vm.handleInput
    },
    model: {
      value: _vm.formDataToBeWatched.total_protection_financieres_valeur_marchande,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "total_protection_financieres_valeur_marchande", $$v);
      },
      expression: "\n                                        formDataToBeWatched.total_protection_financieres_valeur_marchande\n                                    "
    }
  })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
    attrs: {
      readonly: "",
      "default-typing": false
    },
    on: {
      input: _vm.handleInput
    },
    model: {
      value: _vm.formDataToBeWatched.total_protection_financieres_valeur_considere,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "total_protection_financieres_valeur_considere", $$v);
      },
      expression: "\n                                        formDataToBeWatched.total_protection_financieres_valeur_considere\n                                    "
    }
  })], 1)])], 2)])])]) : _c("div", [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        return _vm.toggleIsSeen("protections_financieres_eligibles");
      }
    }
  }, [_c("h6", {
    attrs: {
      id: "protections_financieres_eligibles"
    }
  }, [_vm._v("\n                        Protections financières éligibles  (Garantie/Assurance crédit)\n                        "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])])]), _vm._v(" "), _vm.isSeenState["conditions_particulières"] === true ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        return _vm.toggleIsSeen("conditions_particulières");
      }
    }
  }, [_c("h6", {
    "class": "subdiv" + this.tb_name,
    attrs: {
      id: "conditions_particulières"
    }
  }, [_vm._v("\n                    Conditions particulières\n                    "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)]), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table mb-5 table-borderless"
  }, [_vm._m(33), _vm._v(" "), _c("tbody", _vm._l(_vm.cond_particulieres, function (cond_particuliere, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_vm._v(_vm._s(index + 1) + ".")]), _vm._v(" "), _c("td", [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: cond_particuliere.cond_description,
        expression: "\n                                    cond_particuliere.cond_description\n                                ",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control",
      attrs: {
        cols: "30",
        rows: "1"
      },
      domProps: {
        value: cond_particuliere.cond_description
      },
      on: {
        input: _vm.handleInput,
        change: function change($event) {
          return _vm.$set(cond_particuliere, "cond_description", $event.target.value);
        }
      }
    })]), _vm._v(" "), index == 0 ? _c("td", [_c("button", {
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
        title: "Ajouter une nouvelle garantie"
      },
      on: {
        click: function click($event) {
          return _vm.addCondPart();
        }
      }
    }, [_c("plus-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)]) : _c("td", {
      attrs: {
        align: "center"
      }
    }, [_c("div", {
      staticClass: "d-flex align-items-center"
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
          return _vm.removeByKey(index, "cond_particulieres");
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)])])]);
  }), 0)])])]) : _c("div", [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        return _vm.toggleIsSeen("conditions_particulières");
      }
    }
  }, [_c("h6", {
    attrs: {
      id: "conditions_particulières"
    }
  }, [_vm._v("\n                        Conditions particulières\n                        "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])])]), _vm._v(" "), _vm.isSeenState["suretes_diverses"] === true ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header mb-3",
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        return _vm.toggleIsSeen("suretes_diverses");
      }
    }
  }, [_c("h6", {
    "class": "subdiv" + this.tb_name,
    attrs: {
      id: "suretes_diverses"
    }
  }, [_vm._v("\n                    Sûretés diverses\n                    "), _c("chevron-up-icon", {
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
  }, [_vm._l(_vm.defaultSuretes, function (sure) {
    return _c("div", {
      key: sure.label,
      staticClass: "form-group py-2"
    }, [_c("div", {
      staticClass: "form-check"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: _vm.suretes_diverses,
        expression: "suretes_diverses",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-check-input",
      attrs: {
        type: "checkbox",
        id: sure.id
      },
      domProps: _defineProperty({
        checked: function checked() {
          return _vm.suretes_diverses.some(function (el) {
            return el.id === sure.id;
          });
        },
        value: sure.value
      }, "checked", Array.isArray(_vm.suretes_diverses) ? _vm._i(_vm.suretes_diverses, sure.value) > -1 : _vm.suretes_diverses),
      on: {
        change: [function ($event) {
          var $$a = _vm.suretes_diverses,
            $$el = $event.target,
            $$c = $$el.checked ? true : false;
          if (Array.isArray($$a)) {
            var $$v = sure.value,
              $$i = _vm._i($$a, $$v);
            if ($$el.checked) {
              $$i < 0 && (_vm.suretes_diverses = $$a.concat([$$v]));
            } else {
              $$i > -1 && (_vm.suretes_diverses = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
            }
          } else {
            _vm.suretes_diverses = $$c;
          }
        }, _vm.handleInput]
      }
    }), _vm._v(" "), _c("label", {
      staticClass: "form-check-label",
      attrs: {
        "for": sure.id
      }
    }, [_vm._v("\n                            " + _vm._s(sure.label) + "\n                        ")])])]);
  }), _vm._v(" "), _c("div", {
    staticClass: "form-group py-2"
  }, [_c("div", {
    staticClass: "form-check"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.suretes_diverses,
      expression: "suretes_diverses",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-check-input pt-2",
    attrs: {
      name: "surete",
      type: "checkbox",
      id: "nantissement"
    },
    domProps: {
      value: _vm.nantissement_dat,
      checked: Array.isArray(_vm.suretes_diverses) ? _vm._i(_vm.suretes_diverses, _vm.nantissement_dat) > -1 : _vm.suretes_diverses
    },
    on: {
      change: [function ($event) {
        var $$a = _vm.suretes_diverses,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = _vm.nantissement_dat,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.suretes_diverses = $$a.concat([$$v]));
          } else {
            $$i > -1 && (_vm.suretes_diverses = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.suretes_diverses = $$c;
        }
      }, _vm.handleInput]
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "nantissement"
    }
  }, [_vm._v("\n                            Nantissement de DAT de\n                            "), _c("currency-input", {
    staticClass: "form-control d-inline",
    attrs: {
      "default-typing": false,
      type: "text",
      value: "0"
    },
    on: {
      input: _vm.refreshSurete1
    },
    model: {
      value: _vm.formDataToBeWatched.montant_dat,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "montant_dat", $$v);
      },
      expression: "\n                                    formDataToBeWatched.montant_dat\n                                "
    }
  }), _vm._v("\n                                qui a pour référence  "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.reference_dat,
      expression: "\n                                    formDataToBeWatched.reference_dat\n                                "
    }],
    staticClass: "form-control d-inline review",
    attrs: {
      type: "text",
      value: "0"
    },
    domProps: {
      value: _vm.formDataToBeWatched.reference_dat
    },
    on: {
      change: _vm.refreshSurete1,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "reference_dat", $event.target.value);
      }
    }
  })], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "form-group py-2"
  }, [_c("div", {
    staticClass: "form-check"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.suretes_diverses,
      expression: "suretes_diverses",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-check-input pt-2",
    attrs: {
      name: "engagement",
      type: "checkbox",
      id: "engagement"
    },
    domProps: {
      value: _vm.engagement_value,
      checked: Array.isArray(_vm.suretes_diverses) ? _vm._i(_vm.suretes_diverses, _vm.engagement_value) > -1 : _vm.suretes_diverses
    },
    on: {
      change: [function ($event) {
        var $$a = _vm.suretes_diverses,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = _vm.engagement_value,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.suretes_diverses = $$a.concat([$$v]));
          } else {
            $$i > -1 && (_vm.suretes_diverses = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.suretes_diverses = $$c;
        }
      }, _vm.handleInput]
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      "for": "engagement"
    }
  }, [_vm._v("\n                            Engagement de domiciliation globale de " + _vm._s(_vm.totalEngagementGlobal) + "\n                        ")]), _vm._v(" "), _vm._m(34), _vm._v(" "), _vm._l(_vm.engagement_globales, function (engagement_globale, index) {
    return _c("div", {
      key: index,
      staticClass: "row mt-2"
    }, [_c("div", {
      staticClass: "col-5 engagement"
    }, [_c("currency-input", {
      attrs: {
        "default-typing": false
      },
      on: {
        input: _vm.refreshSurete
      },
      model: {
        value: engagement_globale.montant_engagement_globale,
        callback: function callback($$v) {
          _vm.$set(engagement_globale, "montant_engagement_globale", $$v);
        },
        expression: "\n                                    engagement_globale.montant_engagement_globale\n                                "
      }
    })], 1), _vm._v(" "), _c("div", {
      staticClass: "col-5 engagement"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: engagement_globale.entreprise_engagement_globale,
        expression: "\n                                        engagement_globale.entreprise_engagement_globale\n                                    ",
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
        value: engagement_globale.entreprise_engagement_globale
      },
      on: {
        change: [function ($event) {
          return _vm.$set(engagement_globale, "entreprise_engagement_globale", $event.target.value);
        }, _vm.refreshSurete]
      }
    })]), _vm._v(" "), index == 0 ? _c("div", {
      staticClass: "col-2"
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
        title: "Ajouter une nouvelle garantie"
      },
      on: {
        click: function click($event) {
          return _vm.addEngagementGlobale();
        }
      }
    }, [_c("plus-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)]) : _c("div", {
      staticClass: "col-2"
    }, [_c("div", {
      staticClass: "d-flex align-items-center"
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
          return _vm.removeEngagementGlobale(index);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)])])]);
  }), _vm._v(" "), _c("div", {
    staticClass: "row mt-2"
  }, [_c("div", {
    staticClass: "col-5 engagement"
  }, [_c("label", {
    staticClass: "fw-bold"
  }, [_vm._v("\n                                    Total\n                                ")]), _vm._v(" "), _c("currency-input", {
    attrs: {
      "default-typing": false,
      disabled: ""
    },
    on: {
      input: _vm.refreshSurete
    },
    model: {
      value: _vm.formDataToBeWatched.total_montant_engagement_globale,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "total_montant_engagement_globale", $$v);
      },
      expression: "\n                                        formDataToBeWatched.total_montant_engagement_globale\n                                    "
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-5 engagement"
  })])], 2)]), _vm._v(" "), _c("div", {
    staticClass: "form-group py-2 mt-2"
  }, [_vm._m(35), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "d-flex justify-content-between"
  }, [_c("div", {
    staticClass: "col-11"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: _vm.newSurete,
      expression: "newSurete",
      modifiers: {
        lazy: true
      }
    }],
    staticClass: "form-control",
    staticStyle: {
      width: "100%"
    },
    attrs: {
      placeholder: "Ajouter une autre sureté diverse ici",
      name: "surete",
      type: "text",
      id: "engagement"
    },
    domProps: {
      value: _vm.newSurete
    },
    on: {
      keyup: function keyup($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        return _vm.addAutreSurete.apply(null, arguments);
      },
      change: function change($event) {
        _vm.newSurete = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col d-flex align-items-center justify-content-center"
  }, [_c("button", {
    staticClass: "py-1",
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
      click: _vm.addAutreSurete
    }
  }, [_c("plus-icon", {
    staticClass: "custom-class",
    attrs: {
      size: "21"
    }
  })], 1)])])]), _vm._v(" "), _vm.formDataToBeWatched.autres_suretes_diverses.length ? _c("div", {
    staticClass: "col-12 mt-3"
  }, [_c("table", {
    staticClass: "table table-bordered table-striped table-responsive table-hover"
  }, [_vm._m(36), _vm._v(" "), _c("tbody", _vm._l(_vm.formDataToBeWatched.autres_suretes_diverses, function (autre_surete, index) {
    return _c("tr", {
      key: autre_surete.label
    }, [_c("td", {
      staticClass: "col-1"
    }, [_vm._v("\n                                        " + _vm._s(index + 1) + ".\n                                    ")]), _vm._v(" "), _c("td", {
      staticClass: "col-10"
    }, [_vm._v("\n                                        " + _vm._s(autre_surete.label) + "\n                                    ")]), _vm._v(" "), _c("td", {
      staticClass: "col-1 text-center"
    }, [_c("i", {
      staticClass: "icofont-trash",
      on: {
        click: function click($event) {
          return _vm.removeAutreSurete(index);
        }
      }
    })])]);
  }), 0)])]) : _vm._e()])], 2)]) : _c("div", [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        return _vm.toggleIsSeen("suretes_diverses");
      }
    }
  }, [_c("h6", {
    attrs: {
      id: "suretes_diverses"
    }
  }, [_vm._v("\n                        Sûretés diverses\n                        "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "col-md-12 mt-0 mb-4"
  }, [_vm._m(37), _vm._v(" "), _c("vue-editor", {
    attrs: {
      id: "commentaire_activite"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.commentaire_activite,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "commentaire_activite", $$v);
      },
      expression: "formDataToBeWatched.commentaire_activite"
    }
  })], 1)]), _vm._v(" "), _c("TableauPonderation", {
    staticClass: "card-body",
    attrs: {
      read_only: _vm.read_only,
      dossier_credit: (_vm$meta_data = _vm.meta_data) === null || _vm$meta_data === void 0 ? void 0 : _vm$meta_data.dossier_credit,
      depot_de_garantie: _vm.montant_dep_gar_crsd
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "mb-5"
  })], 2)]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("td"), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Hypothèques ")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Rang ")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Propriétaire")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("N° du titre foncier")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Date d'attribution")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Adresse de l'emplacement")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Longitude")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Latitude")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Date d'évaluation")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Valeur marchande")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Montant de l'hypothèque inscrite ou à inscrire")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "text-end",
    attrs: {
      colspan: "10"
    }
  }, [_c("b", [_vm._v("Totaux")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "table-light"
  }, [_c("tr", {
    staticClass: "text-center align-middle"
  }, [_c("td", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Montant DAT Nanti")])]), _vm._v(" "), _c("td", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("\n                                        Taux de couverture (%)\n                                    ")])]), _vm._v(" "), _c("td", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("\n                                        Référence DAT Nanti\n                                    ")])]), _vm._v(" "), _c("td", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("\n                                        Ce DAT est-il régulièrement nanti en faveur de COFINA ?\n                                    ")])]), _vm._v(" "), _c("td", [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("\n                                        Preuve de blocage irrévocable\n                                    ")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Gages ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Propriétaire")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("N° d'identification du gage")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Date d'achat")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Adresse de l'emplacement")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Date d'évaluation")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Valeur marchande")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Valeur considérée")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "text-end",
    attrs: {
      colspan: "7"
    }
  }, [_c("b", [_vm._v("Totaux")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("\n                                        Nom et prénoms")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("\n                                        Email")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("\n                                        N° de pièce")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Profession")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Indicatif")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Numéro de téléphone")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Localisation")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Latitude du domicile principale")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Longitude du domicile principale")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Latitude activité")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Longitude activité")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Revenue moyens /\n                                        mois")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Valeur\n                                        patrimoine")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Valeur de\n                                        cautionnement")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("\n                                        Pièce Jointe")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("td"), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Cautions hypothécaires ")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Propriétaire")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("N° du titre foncier")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Date d'attribution")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Adresse de l'emplacement")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Longitude")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Latitude")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Date d'évaluation")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Valeur marchande")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Valeur considérée")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "text-end",
    attrs: {
      colspan: "9"
    }
  }, [_c("b", [_vm._v("Totaux")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("td"), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Promesse d'affectation hypothecaire ")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Propriétaire")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("N° du titre foncier")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Date d'attribution")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Adresse de l'emplacement")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Longitude")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Latitude")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Date d'évaluation")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Valeur marchande")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Valeur considérée")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "text-end",
    attrs: {
      colspan: "9"
    }
  }, [_c("b", [_vm._v("Totaux")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("td"), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Garantie ")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Institution")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Date d'attribution")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Date d'évaluation")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Valeur marchande")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Valeur considérée")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "text-end",
    attrs: {
      colspan: "5"
    }
  }, [_c("b", [_vm._v("Totaux")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("td"), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v(" Description")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row mt-2"
  }, [_c("div", {
    staticClass: "col-5"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Montant")])]), _vm._v(" "), _c("div", {
    staticClass: "col-5"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Entreprise")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-12"
  }, [_c("label", {
    staticClass: "fw-bold"
  }, [_vm._v("\n                            Autres suretés diverses\n                        ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_vm._v("#")]), _vm._v(" "), _c("th", [_vm._v("\n                                        Autres suretés diverses\n                                    ")]), _vm._v(" "), _c("th", [_vm._v("Action")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_c("b", [_vm._v("Commentaire sur les garanties")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/cofina/_common_tables/T4_Commons.vue?vue&type=style&index=0&id=dbb370c0&lang=css&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/cofina/_common_tables/T4_Commons.vue?vue&type=style&index=0&id=dbb370c0&lang=css&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-dbb370c0] {\r\n    font-family: \"Google sans\";\n}\n.input-date[data-v-dbb370c0]{\r\n    width:250px\n}\nlabel[data-v-dbb370c0] {\r\n    height: 10px;\r\n    font-size: 13px;\n}\ninput[type=\"text\"][data-v-dbb370c0],\r\ninput[type=\"date\"][data-v-dbb370c0],\r\nselect[data-v-dbb370c0] {\r\n    height: 35px;\r\n    border-color: #34495e;\r\n    color: #57606f;\r\n    font-size: 13px;\r\n    font-weight: bold;\n}\n.card-width-height[data-v-dbb370c0] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-dbb370c0] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\n.hdc[data-v-dbb370c0] {\r\n    background-color: #57606f;\n}\n.card-width-height[data-v-dbb370c0] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-dbb370c0] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\ninput[type=\"text\"][data-v-dbb370c0],\r\ninput[type=\"date\"][data-v-dbb370c0] {\r\n    width: 250px;\n}\n.review[data-v-dbb370c0]{\r\n    width: 180px !important;\n}\n.engagement input[type=\"text\"][data-v-dbb370c0],\r\ninput[type=\"date\"][data-v-dbb370c0] {\r\n    width: 100% !important;\n}\n.th[data-v-dbb370c0] {\r\n    padding: 4px;\r\n    padding-bottom: 0px;\n}\nselect[data-v-dbb370c0] {\r\n    width: 250px;\n}\n.badge-sm[data-v-dbb370c0] {\r\n    display: inline-block;\r\n    width: 15px;\r\n    height: 15px;\r\n    background: rgba(255, 0, 0, 0.882);\r\n    color: white;\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    border-radius: 100%;\r\n    position: absolute;\r\n    top: -20%;\r\n    left: 55%;\r\n    text-align: center;\n}\n.relook-header[data-v-dbb370c0] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/cofina/_common_tables/T4_Commons.vue?vue&type=style&index=0&id=dbb370c0&lang=css&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/cofina/_common_tables/T4_Commons.vue?vue&type=style&index=0&id=dbb370c0&lang=css&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_T4_Commons_vue_vue_type_style_index_0_id_dbb370c0_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./T4_Commons.vue?vue&type=style&index=0&id=dbb370c0&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/cofina/_common_tables/T4_Commons.vue?vue&type=style&index=0&id=dbb370c0&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_T4_Commons_vue_vue_type_style_index_0_id_dbb370c0_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_T4_Commons_vue_vue_type_style_index_0_id_dbb370c0_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/tables/cofina/_common_tables/T4_Commons.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/tables/cofina/_common_tables/T4_Commons.vue ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _T4_Commons_vue_vue_type_template_id_dbb370c0_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./T4_Commons.vue?vue&type=template&id=dbb370c0&scoped=true */ "./resources/js/components/tables/cofina/_common_tables/T4_Commons.vue?vue&type=template&id=dbb370c0&scoped=true");
/* harmony import */ var _T4_Commons_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./T4_Commons.vue?vue&type=script&lang=js */ "./resources/js/components/tables/cofina/_common_tables/T4_Commons.vue?vue&type=script&lang=js");
/* harmony import */ var _T4_Commons_vue_vue_type_style_index_0_id_dbb370c0_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./T4_Commons.vue?vue&type=style&index=0&id=dbb370c0&lang=css&scoped=true */ "./resources/js/components/tables/cofina/_common_tables/T4_Commons.vue?vue&type=style&index=0&id=dbb370c0&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _T4_Commons_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _T4_Commons_vue_vue_type_template_id_dbb370c0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _T4_Commons_vue_vue_type_template_id_dbb370c0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "dbb370c0",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/tables/cofina/_common_tables/T4_Commons.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/tables/cofina/_common_tables/T4_Commons.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/tables/cofina/_common_tables/T4_Commons.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_T4_Commons_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./T4_Commons.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/cofina/_common_tables/T4_Commons.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_T4_Commons_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/tables/cofina/_common_tables/T4_Commons.vue?vue&type=style&index=0&id=dbb370c0&lang=css&scoped=true":
/*!*************************************************************************************************************************************!*\
  !*** ./resources/js/components/tables/cofina/_common_tables/T4_Commons.vue?vue&type=style&index=0&id=dbb370c0&lang=css&scoped=true ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_T4_Commons_vue_vue_type_style_index_0_id_dbb370c0_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./T4_Commons.vue?vue&type=style&index=0&id=dbb370c0&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/cofina/_common_tables/T4_Commons.vue?vue&type=style&index=0&id=dbb370c0&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/tables/cofina/_common_tables/T4_Commons.vue?vue&type=template&id=dbb370c0&scoped=true":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/tables/cofina/_common_tables/T4_Commons.vue?vue&type=template&id=dbb370c0&scoped=true ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_T4_Commons_vue_vue_type_template_id_dbb370c0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_T4_Commons_vue_vue_type_template_id_dbb370c0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_T4_Commons_vue_vue_type_template_id_dbb370c0_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./T4_Commons.vue?vue&type=template&id=dbb370c0&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tables/cofina/_common_tables/T4_Commons.vue?vue&type=template&id=dbb370c0&scoped=true");


/***/ })

}]);