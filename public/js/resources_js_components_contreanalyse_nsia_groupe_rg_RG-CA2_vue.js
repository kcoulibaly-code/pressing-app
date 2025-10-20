"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_contreanalyse_nsia_groupe_rg_RG-CA2_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA2.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA2.vue?vue&type=script&lang=js ***!
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
    totalPartPourcentageActionnariats: function totalPartPourcentageActionnariats() {
      var trying = this.actionnariats.map(function (el) {
        el.pourcentage_participation = String(el.pourcentage_participation).replace(/\s+/g, "");
        if (!el.pourcentage_participation) return 0;
        return Number(el.pourcentage_participation);
      }).reduce(function (sum, curr) {
        return sum + curr;
      }, 0);
      if (trying > 100) return "100.00";
      return trying.toLocaleString("fr-FR");
    },
    ActionnariatMaxNumber: function ActionnariatMaxNumber() {
      var restant = 100 - Number(this.totalPartPourcentageActionnariats);
      if (restant < 0) return 0;
      return restant;
    },
    totalResultatNetSurChiffreAffaire: function totalResultatNetSurChiffreAffaire() {
      var _res;
      var res = 0;
      var ca = String(this.chiffres_provisoires[0].chiffre_affaire).replace(/\s+/g, "");
      var rn = String(this.chiffres_provisoires[0].resulat_net).replace(/\s+/g, "");
      if (rn <= 0) {
        return res;
      }
      var tt = Number(rn) / Number(ca);
      res = Number(tt) * 100;
      return (_res = res) === null || _res === void 0 ? void 0 : _res.toFixed(2);
    },
    totalResultatNetSurChiffreAffaireN2: function totalResultatNetSurChiffreAffaireN2() {
      var ca = String(this.chiffres_provisoires_[0].curr_year_2).replace(/\s+/g, "");
      var rn = String(this.chiffres_provisoires_[1].curr_year_2).replace(/\s+/g, "");
      if (rn <= 0) {
        return 0;
      }
      var tt = Number(rn) / Number(ca);
      return Number(tt) * 100;
    },
    totalResultatNetSurChiffreAffaireN1: function totalResultatNetSurChiffreAffaireN1() {
      var ca = String(this.chiffres_provisoires_[0].curr_year_1).replace(/\s+/g, "");
      var rn = String(this.chiffres_provisoires_[1].curr_year_1).replace(/\s+/g, "");
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
      var _this$meta_data$dossi;
      var applied_templ_name, tbArrays;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            applied_templ_name = (_this$meta_data$dossi = _this.meta_data['dossier_credit']) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi.applied_templ_name;
            tbArrays = _this.determineCredPubTables(applied_templ_name);
            _this.credpub00 = tbArrays[0];
            _this.credpub_pp_6 = tbArrays[3];

            // Initiate cache

            // // this.initCache();
            //
            _this.loadParams();
            //this.loadBeforeRequest();
            _this.loadRetrieved();
            _this.loadTbAttrs();
            _this.tableClosedOrOpened();
            EventBus.$on("send-to-ana_fin", function (data) {
              _this.ncc = data.compte_contribuable;
              _this.annee_referentielle = data.annee_referentielle;
              //console.log("this.annee_referentielle-------------", this.annee_referentielle)
              //this.loadBeforeRequest()
            });
            // charge les attributs + sous attributs des tables
            // helper.loadCurrencyFormatter();
            // this.loadPrincChifCle();
            // EventBus.$on('autosubmit', () => {
            //   this.launchAutoSaver()
            // })

            // EventBus.$on("loadchiffcle", this.loadPrincChifCle);
          case 9:
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
      equipe_dirigeantes_cae: null,
      equipe_dirigeantes_anaris_dcei: null,
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
        actionnariats: "",
        equipe_dirigeantes: "",
        total_part: "",
        presentation_client: "",
        // description_activite:"",
        commentaire_actionnarariat: "",
        commentaire_equipe_dirigeante: "",
        structure_financiere: "",
        commentaire_structure_financiere: "",
        commentaires_chiffres_provisoires: "",
        chiffres_provisoires: "",
        chiffres_provisoires_: "",
        rn_ca_n2: "",
        rn_ca_n1: "",
        rn_sur_ca: "",
        notes: [],
        exposition_globale: 0,
        info_complementaires: "",
        impacts: "",
        chiffre_provisoire_annee_n: "",
        chiffre_provisoire_annee_n1: ""
      },
      impacts: [{
        label: "Sociale : Cocher si le financement apporte des effets et des retombés tant au niveau prenantes externes (bénéficiaire,clients)",
        value: false
      }, {
        label: "Economique : Cocher si le financement entraine des retombés dans le secteur d'activité et apporte de la valeur économique",
        value: false
      }, {
        label: "Environnementale : Cocher si le financement apporte des retombés environnementaux et favorise une économie verte",
        value: false
      }],
      info_complementaires: [{
        effectif: "",
        nbre_femme: "",
        nbre_jeune: ""
      }],
      mouvement_confies: null,
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
      chiffres_provisoires_: [{
        label: "Chiffre d'affaires (CA).",
        curr_year_2: "",
        curr_year_1: "",
        variance: ""
      }, {
        label: "Resultat net (RN)",
        curr_year_2: "",
        curr_year_1: "",
        variance: ""
      }
      // {
      //     label:"RN / CA",
      //     curr_year_2: "",
      //     curr_year_1: "",
      // },
      ],
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
        "label": "FR",
        curr_year_3: "",
        "curr_year_2": "",
        "curr_year_1": "",
        code: "L9"
      },
      // {
      //     "label": "BFR",
      //     curr_year_3:"",
      //     "curr_year_2": "",
      //     "curr_year_1": "",
      //     code:"BFR"
      // },
      {
        "label": "Trésorerie",
        curr_year_3: "",
        "curr_year_2": "",
        "curr_year_1": "",
        code: "DT"
      }],
      equipe_dirigeantes: [{
        dirigeants: "",
        pouvoir_signature: "",
        fonction_sein_entreprise: "",
        experience: "",
        background: "",
        diplome: ""
      }],
      actionnariats: [{
        nom_actionnaire: "",
        pourcentage_participation: "",
        max: 100
      }],
      // equipe_dirigeantes:null,
      // actionnariats: null,
      // total_part:null,
      presentation_client: null,
      description_activite: null,
      listingNote: false,
      credpub00: null,
      credpub_pp_6: null
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
      var _this8 = this;
      _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["default"].loadUserData().then(function (res) {
        _this8.getRatiosByAPI(res);
        _this8.getRatios(res);
      })["catch"](function (err) {
        _this8.loadWithError(err);
      });
    },
    handleDoubleClickOrClick: function handleDoubleClickOrClick(dirigeant) {
      EventBus.$emit("open-extra-file-explorer");
      setTimeout(function () {
        EventBus.$emit("data-extra-file-explorer", {
          name: 'Pièces jointes' + "{(*)}" + (dirigeant === null || dirigeant === void 0 ? void 0 : dirigeant.id)
        });
      }, 500);
    },
    strToNum: function strToNum(a) {
      if (/^0/g.test(a)) a = String(a).replace(/^0/g, "");
      return Number(String(a).replace(/\s+/g, ""));
    },
    getRatiosByAPI: function getRatiosByAPI(res) {
      var _this9 = this;
      if (res.status == 200) {
        if (this.ncc != "") {
          if (true) {
            var data = {
              method: 'get',
              url: 'https://ebapis.com/basix/api/v3/public/ultimate-db/',
              params: {
                ncc: this.ncc,
                annee: "null",
                operation: "READ"
              }
            };
            var options = {
              method: 'POST',
              url: this.ebapisHost + 'creditbuilder/api/v1/proxy-nsia/',
              headers: {
                'Content-Type': 'application/json'
              },
              data: data
            };
            this.$axios(options).then(function (response) {
              _this9.initActiviteRentabilite(response.data);
            });
          }
        } else {
          this.$toasted("Veuillez saisir le ncc dans F0");
        }
      }
    },
    initActiviteRentabilite: function initActiviteRentabilite(agregats) {
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
        } else {
          if (agregats[annee_ref]) {
            element.curr_year_1 = agregats[annee_ref][element.code];
          }
          if (agregats[annee_ref - 1]) {
            element.curr_year_2 = agregats[annee_ref - 1][element.code];
          }
          if (agregats[annee_ref - 2]) {
            element.curr_year_3 = agregats[annee_ref - 2][element.code];
          }
        }
      });
      this.handleInput();
    },
    getRatios: function getRatios(res) {
      var _this0 = this;
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
            _this0.ratios = response.data.analyse_fin;
            _this0.loadedRatios = false;
            _this0.handleInput();
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
      var _this1 = this;
      _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["default"].loadUserData().then(function (res) {
        _this1.send2Backend(res, 0, 0);
      })["catch"](function (err) {
        _this1.loadWithError(err);
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
      var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];

      // Close table by default

      if (this.meta_data["dossier_credit"][createdKey] == undefined) {
        var _this$meta_data$dossi2, _this$meta_data$dossi1, _this$meta_data$dossi30;
        // ACTIONNARIATS
        if (![undefined, ""].includes((_this$meta_data$dossi2 = this.meta_data["dossier_credit"].cred_pub_tb_19502) === null || _this$meta_data$dossi2 === void 0 ? void 0 : _this$meta_data$dossi2.actionnariats)) {
          var _this$meta_data$dossi3, _this$meta_data$dossi4, _this$meta_data$dossi5, _this$meta_data$dossi6;
          this.actionnariats = (_this$meta_data$dossi3 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi3 === void 0 || (_this$meta_data$dossi3 = _this$meta_data$dossi3["cred_pub_tb_19502"]) === null || _this$meta_data$dossi3 === void 0 ? void 0 : _this$meta_data$dossi3.actionnariats;
          this.formDataToBeWatched.total_part = (_this$meta_data$dossi4 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi4 === void 0 || (_this$meta_data$dossi4 = _this$meta_data$dossi4["cred_pub_tb_19502"]) === null || _this$meta_data$dossi4 === void 0 ? void 0 : _this$meta_data$dossi4.total_part;
          this.formDataToBeWatched.commentaire_actionnarariat = (_this$meta_data$dossi5 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi5 === void 0 || (_this$meta_data$dossi5 = _this$meta_data$dossi5.cred_pub_tb_19502) === null || _this$meta_data$dossi5 === void 0 ? void 0 : _this$meta_data$dossi5.commentaire_actionnarariat;

          // = this.meta_data["dossier_credit"].cred_pub_tb_19502?.commentaire_actionnarariat

          if (((_this$meta_data$dossi6 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi6 === void 0 || (_this$meta_data$dossi6 = _this$meta_data$dossi6["cred_pub_tb_19502"]) === null || _this$meta_data$dossi6 === void 0 || (_this$meta_data$dossi6 = _this$meta_data$dossi6.actionnariats) === null || _this$meta_data$dossi6 === void 0 ? void 0 : _this$meta_data$dossi6.length) > 0) {
            this.actionnariats = this.actionnariats.map(function (ed) {
              return _objectSpread(_objectSpread({}, ed), {}, {
                cameFrom: 'tb_19002'
              });
            });
          }
        } else {
          var _this$meta_data$dossi7;
          if (![undefined, ""].includes((_this$meta_data$dossi7 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi7 === void 0 || (_this$meta_data$dossi7 = _this$meta_data$dossi7.cred_pub_tb_00) === null || _this$meta_data$dossi7 === void 0 ? void 0 : _this$meta_data$dossi7.actionnariats)) {
            var _this$meta_data$dossi8, _this$meta_data$dossi9, _this$meta_data$dossi0;
            this.actionnariats = (_this$meta_data$dossi8 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi8 === void 0 || (_this$meta_data$dossi8 = _this$meta_data$dossi8["cred_pub_tb_00"]) === null || _this$meta_data$dossi8 === void 0 ? void 0 : _this$meta_data$dossi8.actionnariats;
            this.formDataToBeWatched.total_part = (_this$meta_data$dossi9 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi9 === void 0 || (_this$meta_data$dossi9 = _this$meta_data$dossi9["cred_pub_tb_00"]) === null || _this$meta_data$dossi9 === void 0 ? void 0 : _this$meta_data$dossi9.total_part;
            if (((_this$meta_data$dossi0 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi0 === void 0 || (_this$meta_data$dossi0 = _this$meta_data$dossi0["cred_pub_tb_00"]) === null || _this$meta_data$dossi0 === void 0 || (_this$meta_data$dossi0 = _this$meta_data$dossi0.actionnariats) === null || _this$meta_data$dossi0 === void 0 ? void 0 : _this$meta_data$dossi0.length) > 0) {
              this.actionnariats = this.actionnariats.map(function (ed) {
                return _objectSpread(_objectSpread({}, ed), {}, {
                  cameFrom: 'tb_5'
                });
              });
            }
          }
        }

        // EQUIPES DIRIGEANTES
        if (![undefined, ""].includes((_this$meta_data$dossi1 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi1 === void 0 ? void 0 : _this$meta_data$dossi1.cred_pub_tb_19502)) {
          var _this$meta_data$dossi10, _this$meta_data$dossi14, _this$meta_data$dossi17;
          if (![undefined, ""].includes((_this$meta_data$dossi10 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi10 === void 0 || (_this$meta_data$dossi10 = _this$meta_data$dossi10.cred_pub_tb_19502) === null || _this$meta_data$dossi10 === void 0 ? void 0 : _this$meta_data$dossi10.equipe_dirigeantes)) {
            var _this$meta_data$dossi11, _this$meta_data$dossi12, _this$meta_data$dossi13;
            this.equipe_dirigeantes = (_this$meta_data$dossi11 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi11 === void 0 || (_this$meta_data$dossi11 = _this$meta_data$dossi11["cred_pub_tb_19502"]) === null || _this$meta_data$dossi11 === void 0 ? void 0 : _this$meta_data$dossi11.equipe_dirigeantes;
            this.formDataToBeWatched.commentaire_equipe_dirigeante = (_this$meta_data$dossi12 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi12 === void 0 || (_this$meta_data$dossi12 = _this$meta_data$dossi12.cred_pub_tb_19502) === null || _this$meta_data$dossi12 === void 0 ? void 0 : _this$meta_data$dossi12.commentaire_equipe_dirigeante;
            if (((_this$meta_data$dossi13 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi13 === void 0 || (_this$meta_data$dossi13 = _this$meta_data$dossi13["cred_pub_tb_19502"]) === null || _this$meta_data$dossi13 === void 0 || (_this$meta_data$dossi13 = _this$meta_data$dossi13.equipe_dirigeantes) === null || _this$meta_data$dossi13 === void 0 ? void 0 : _this$meta_data$dossi13.length) > 0) {
              this.equipe_dirigeantes = this.equipe_dirigeantes.map(function (ed) {
                return _objectSpread(_objectSpread({}, ed), {}, {
                  cameFrom: 'tb_19002'
                });
              });
            }
          }
          if (((_this$meta_data$dossi14 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi14 === void 0 || (_this$meta_data$dossi14 = _this$meta_data$dossi14["cred_pub_tb_19502"]) === null || _this$meta_data$dossi14 === void 0 ? void 0 : _this$meta_data$dossi14.info_complementaires) != "") {
            var _this$meta_data$dossi15, _this$meta_data$dossi16;
            this.info_complementaires = (_this$meta_data$dossi15 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi15 === void 0 || (_this$meta_data$dossi15 = _this$meta_data$dossi15["cred_pub_tb_19502"]) === null || _this$meta_data$dossi15 === void 0 ? void 0 : _this$meta_data$dossi15.info_complementaires;
            if (((_this$meta_data$dossi16 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi16 === void 0 || (_this$meta_data$dossi16 = _this$meta_data$dossi16["cred_pub_tb_19502"]) === null || _this$meta_data$dossi16 === void 0 || (_this$meta_data$dossi16 = _this$meta_data$dossi16.info_complementaires) === null || _this$meta_data$dossi16 === void 0 ? void 0 : _this$meta_data$dossi16.length) > 0) {
              this.info_complementaires = this.info_complementaires.map(function (ed) {
                return _objectSpread(_objectSpread({}, ed), {}, {
                  cameFrom: 'tb_19002'
                });
              });
            }
          }
          if (((_this$meta_data$dossi17 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi17 === void 0 || (_this$meta_data$dossi17 = _this$meta_data$dossi17["cred_pub_tb_19502"]) === null || _this$meta_data$dossi17 === void 0 ? void 0 : _this$meta_data$dossi17.impacts) != "") {
            var _this$meta_data$dossi18, _this$meta_data$dossi19;
            this.impacts = (_this$meta_data$dossi18 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi18 === void 0 || (_this$meta_data$dossi18 = _this$meta_data$dossi18["cred_pub_tb_19502"]) === null || _this$meta_data$dossi18 === void 0 ? void 0 : _this$meta_data$dossi18.impacts;
            if (((_this$meta_data$dossi19 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi19 === void 0 || (_this$meta_data$dossi19 = _this$meta_data$dossi19["cred_pub_tb_19502"]) === null || _this$meta_data$dossi19 === void 0 || (_this$meta_data$dossi19 = _this$meta_data$dossi19.impacts) === null || _this$meta_data$dossi19 === void 0 ? void 0 : _this$meta_data$dossi19.length) > 0) {
              this.impacts = this.impacts.map(function (ed) {
                return _objectSpread(_objectSpread({}, ed), {}, {
                  cameFrom: 'tb_19002'
                });
              });
            }
          }
          this.handleInput();
        } else {
          var _this$meta_data$dossi20;
          if (![undefined, ""].includes((_this$meta_data$dossi20 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi20 === void 0 ? void 0 : _this$meta_data$dossi20.cred_pub_tb_5)) {
            var _this$meta_data$dossi21, _this$meta_data$dossi24, _this$meta_data$dossi27;
            if (![undefined, ""].includes((_this$meta_data$dossi21 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi21 === void 0 || (_this$meta_data$dossi21 = _this$meta_data$dossi21.cred_pub_tb_5) === null || _this$meta_data$dossi21 === void 0 ? void 0 : _this$meta_data$dossi21.equipe_dirigeantes)) {
              var _this$meta_data$dossi22, _this$meta_data$dossi23;
              this.equipe_dirigeantes = (_this$meta_data$dossi22 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi22 === void 0 || (_this$meta_data$dossi22 = _this$meta_data$dossi22["cred_pub_tb_5"]) === null || _this$meta_data$dossi22 === void 0 ? void 0 : _this$meta_data$dossi22.equipe_dirigeantes;
              if (((_this$meta_data$dossi23 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi23 === void 0 || (_this$meta_data$dossi23 = _this$meta_data$dossi23["cred_pub_tb_5"]) === null || _this$meta_data$dossi23 === void 0 || (_this$meta_data$dossi23 = _this$meta_data$dossi23.equipe_dirigeantes) === null || _this$meta_data$dossi23 === void 0 ? void 0 : _this$meta_data$dossi23.length) > 0) {
                this.equipe_dirigeantes = this.equipe_dirigeantes.map(function (ed) {
                  return _objectSpread(_objectSpread({}, ed), {}, {
                    cameFrom: 'tb_5'
                  });
                });
              }
            }
            if (((_this$meta_data$dossi24 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi24 === void 0 || (_this$meta_data$dossi24 = _this$meta_data$dossi24["cred_pub_tb_5"]) === null || _this$meta_data$dossi24 === void 0 ? void 0 : _this$meta_data$dossi24.info_complementaires) != "") {
              var _this$meta_data$dossi25, _this$meta_data$dossi26;
              this.info_complementaires = (_this$meta_data$dossi25 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi25 === void 0 || (_this$meta_data$dossi25 = _this$meta_data$dossi25["cred_pub_tb_5"]) === null || _this$meta_data$dossi25 === void 0 ? void 0 : _this$meta_data$dossi25.info_complementaires;
              if (((_this$meta_data$dossi26 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi26 === void 0 || (_this$meta_data$dossi26 = _this$meta_data$dossi26["cred_pub_tb_5"]) === null || _this$meta_data$dossi26 === void 0 || (_this$meta_data$dossi26 = _this$meta_data$dossi26.info_complementaires) === null || _this$meta_data$dossi26 === void 0 ? void 0 : _this$meta_data$dossi26.length) > 0) {
                this.info_complementaires = this.info_complementaires.map(function (ed) {
                  return _objectSpread(_objectSpread({}, ed), {}, {
                    cameFrom: 'tb_5'
                  });
                });
              }
            }
            if (((_this$meta_data$dossi27 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi27 === void 0 || (_this$meta_data$dossi27 = _this$meta_data$dossi27["cred_pub_tb_5"]) === null || _this$meta_data$dossi27 === void 0 ? void 0 : _this$meta_data$dossi27.impacts) != "") {
              var _this$meta_data$dossi28, _this$meta_data$dossi29;
              this.impacts = (_this$meta_data$dossi28 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi28 === void 0 || (_this$meta_data$dossi28 = _this$meta_data$dossi28["cred_pub_tb_5"]) === null || _this$meta_data$dossi28 === void 0 ? void 0 : _this$meta_data$dossi28.impacts;
              if (((_this$meta_data$dossi29 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi29 === void 0 || (_this$meta_data$dossi29 = _this$meta_data$dossi29["cred_pub_tb_5"]) === null || _this$meta_data$dossi29 === void 0 || (_this$meta_data$dossi29 = _this$meta_data$dossi29.impacts) === null || _this$meta_data$dossi29 === void 0 ? void 0 : _this$meta_data$dossi29.length) > 0) {
                this.impacts = this.impacts.map(function (ed) {
                  return _objectSpread(_objectSpread({}, ed), {}, {
                    cameFrom: 'tb_5'
                  });
                });
              }
            }
          }
        }
        if (![undefined, ""].includes((_this$meta_data$dossi30 = this.meta_data["dossier_credit"].cred_pub_tb_19502) === null || _this$meta_data$dossi30 === void 0 ? void 0 : _this$meta_data$dossi30.chiffres_provisoires_)) {
          var _this$meta_data$dossi31, _this$meta_data$dossi32, _this$meta_data$dossi33, _this$meta_data$dossi34, _this$meta_data$dossi35;
          this.formDataToBeWatched.commentaires_chiffres_provisoires = (_this$meta_data$dossi31 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi31 === void 0 || (_this$meta_data$dossi31 = _this$meta_data$dossi31.cred_pub_tb_19502) === null || _this$meta_data$dossi31 === void 0 ? void 0 : _this$meta_data$dossi31.commentaires_chiffres_provisoires;
          this.chiffres_provisoires_ = (_this$meta_data$dossi32 = this.meta_data["dossier_credit"].cred_pub_tb_19502) === null || _this$meta_data$dossi32 === void 0 ? void 0 : _this$meta_data$dossi32.chiffres_provisoires_;
          this.formDataToBeWatched.rn_ca_n2 = (_this$meta_data$dossi33 = this.meta_data["dossier_credit"].cred_pub_tb_19502) === null || _this$meta_data$dossi33 === void 0 ? void 0 : _this$meta_data$dossi33.rn_ca_n2;
          this.formDataToBeWatched.rn_ca_n1 = (_this$meta_data$dossi34 = this.meta_data["dossier_credit"].cred_pub_tb_19502) === null || _this$meta_data$dossi34 === void 0 ? void 0 : _this$meta_data$dossi34.rn_ca_n1;
          if (((_this$meta_data$dossi35 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi35 === void 0 || (_this$meta_data$dossi35 = _this$meta_data$dossi35["cred_pub_tb_19502"]) === null || _this$meta_data$dossi35 === void 0 || (_this$meta_data$dossi35 = _this$meta_data$dossi35.chiffres_provisoires_) === null || _this$meta_data$dossi35 === void 0 ? void 0 : _this$meta_data$dossi35.length) > 0) {
            this.chiffres_provisoires_ = this.chiffres_provisoires_.map(function (ed) {
              return _objectSpread(_objectSpread({}, ed), {}, {
                cameFrom: 'tb_19002'
              });
            });
          }
        }
        this.handleInput();
      }
      if (lentb.length > 0) {
        if (this.meta_data["dossier_credit"][createdKey] != undefined) {
          this.formDataToBeWatched = this.meta_data["dossier_credit"][createdKey];
          if (this.meta_data["dossier_credit"][createdKey]["equipe_dirigeantes"] != "") {
            this.equipe_dirigeantes = this.meta_data["dossier_credit"][createdKey]["equipe_dirigeantes"];
          }
          if (this.meta_data["dossier_credit"][createdKey]["chiffres_provisoires_"] != "") {
            this.chiffres_provisoires_ = this.meta_data["dossier_credit"][createdKey]["chiffres_provisoires_"];
          }
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
          if (this.meta_data["dossier_credit"][createdKey]["actionnariats"] != "") {
            this.actionnariats = this.meta_data["dossier_credit"][createdKey]["actionnariats"];
          }
          if (this.meta_data["dossier_credit"][createdKey]["info_complementaires"] != "") {
            this.info_complementaires = this.meta_data["dossier_credit"][createdKey]["info_complementaires"];
          }
          if (this.meta_data["dossier_credit"][createdKey]["impacts"] != "") {
            this.impacts = this.meta_data["dossier_credit"][createdKey]["impacts"];
          }
        }
      }

      // Close table by default
      //  this.defaultRetract(
      //     false,
      //     this.meta_data["dossier_credit"]?.applied_templ_id
      // );
    },
    formDataVars: function formDataVars(event) {
      this.formDataToBeWatched[event[0]] = event[1];
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
            var _this$dossier_credit;
            this.dossier_credit = tbFetcheData['dossier_credit'];
            // console.log("this dossier_credit", this.dossier_credit)

            if (this.isGabaritPP((_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.applied_templ_name)) {
              //this.mouvement_confies = this.dossier_credit?.[this.credpub_pp_6]?.mouvement_confies
            }

            // this.description_activite = this.dossier_credit?.cred_pub_tb_2?.description_activite
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
        id: "ca2-head"
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
    calculVariance: function calculVariance(tab) {
      var a = 0;
      var b = 1;
      if (tab.length > 0) {
        tab.forEach(function (element) {
          var _element$curr_year_, _element$curr_year_2;
          a = Number((_element$curr_year_ = element.curr_year_1) === null || _element$curr_year_ === void 0 ? void 0 : _element$curr_year_.toString().replace(/\s/g, ""));
          if (element.curr_year_2 != "" || element.curr_year_2 != 0) b = Number((_element$curr_year_2 = element.curr_year_2) === null || _element$curr_year_2 === void 0 ? void 0 : _element$curr_year_2.toString().replace(/\s/g, ""));
          element.variance = ([a / b - 1] * 100).toFixed(2);
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
      // this.formDataToBeWatched["mouvement_confies"] = this.mouvement_confies;

      // for (let index = 0; index < this.mouvement_confies.length; index++) {
      //     this.mouvement_confies[index].mvt_ca_n2 = this.divTwoNumbers(
      //         this.mouvement_confies[index].mouvement_n2,
      //         this.mouvement_confies[index].ca_n2
      //     );
      //     // this.relations_banques[index].cap_n2.toFixed(2)
      //     this.mouvement_confies[index].mvt_ca_n1 = this.divTwoNumbers(
      //         this.mouvement_confies[index].mouvement_n1,
      //         this.mouvement_confies[index].ca_n1
      //     );

      //     this.mouvement_confies[index].mvt_ca_n = this.divTwoNumbers(
      //         this.mouvement_confies[index].mouvement_n,
      //         this.mouvement_confies[index].ca_n
      //     );
      // }
      //  console.log("venus",this.mouvement_confies[index].mvt_ca_n2)

      // this.structure_financiere = this.calculVariance(this.structure_financiere)
      // this.formDataToBeWatched.structure_financiere = this.structure_financiere

      this.chiffres_provisoires_ = this.calculVariance(this.chiffres_provisoires_);
      this.formDataToBeWatched["chiffres_provisoires_"] = this.chiffres_provisoires_;
      this.formDataToBeWatched["rn_ca_n2"] = this.totalResultatNetSurChiffreAffaireN2;
      this.formDataToBeWatched["rn_ca_n1"] = this.totalResultatNetSurChiffreAffaireN1;
      this.formDataToBeWatched["equipe_dirigeantes"] = this.equipe_dirigeantes;
      this.formDataToBeWatched["info_complementaires"] = this.info_complementaires;
      this.formDataToBeWatched["impacts"] = this.impacts;
      this.formDataToBeWatched["actionnariats"] = this.actionnariats;
      this.formDataToBeWatched.total_part = this.totalPartPourcentageActionnariats;

      //     this.formDataToBeWatched["chiffres_cles"] = this.chiffres_cles;
      // this.formDataToBeWatched["entite_connectes"] =
      //     this.entite_connectes;
      // // console.log(this.formDataToBeWatched["chiffres_cles"]);
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA2.vue?vue&type=template&id=2905403a&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA2.vue?vue&type=template&id=2905403a&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      id: "ca2-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Présentation du client\n                        ")]), _vm._v(" "), _c("div", {
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
  }, [(_vm.seen3 = _vm.seen3) ? _c("div", {
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
      id: "présentation-générique-du-client"
    }
  }, [_vm._v("\n                                A1 (Actionnariat, dirigeants, qualité des dirigeants)\n                                    "), _c("chevron-up-icon", {
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
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-borderless mb-1"
  }, [_vm._m(1), _vm._v(" "), _c("tbody", [_vm._l(_vm.actionnariats, function (actionnariat, index) {
    return _c("tr", {
      key: index
    }, [_c("td", {
      staticClass: "col-8"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: actionnariat.nom_actionnaire,
        expression: "\n                                                            actionnariat.nom_actionnaire\n                                                        ",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control",
      "class": {
        equipe: ["tb_19002", "tb_5"].includes(actionnariat === null || actionnariat === void 0 ? void 0 : actionnariat.cameFrom)
      },
      attrs: {
        type: "text",
        required: ""
      },
      domProps: {
        value: actionnariat.nom_actionnaire
      },
      on: {
        change: [function ($event) {
          return _vm.$set(actionnariat, "nom_actionnaire", $event.target.value);
        }, _vm.handleInput]
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "col-4"
    }, [_c("div", {
      staticStyle: {
        "min-width": "115px"
      }
    }, [_c("input-group", {
      scopedSlots: _vm._u([{
        key: "input",
        fn: function fn() {
          return [_c("currency-input", {
            staticClass: "form-control text-end",
            "class": {
              equipe: ["tb_19002", "tb_5"].includes(actionnariat === null || actionnariat === void 0 ? void 0 : actionnariat.cameFrom)
            },
            attrs: {
              percentage: "",
              max: actionnariat.max,
              "default-typing": false,
              id: "pourcentage_participation"
            },
            on: {
              input: function input($event) {
                return _vm.setActionnariatsVars($event, index, "pourcentage_participation");
              }
            },
            model: {
              value: actionnariat.pourcentage_participation,
              callback: function callback($$v) {
                _vm.$set(actionnariat, "pourcentage_participation", $$v);
              },
              expression: "actionnariat.pourcentage_participation\n                                                                "
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
      }], null, true)
    })], 1)]), _vm._v(" "), index == 0 ? _c("td", [_c("button", {
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
          return _vm.addMore("actionnariats");
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
          return _vm.remove(index);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)])]);
  }), _vm._v(" "), _c("tr", [_c("td", [_vm._v("\n                                                    Total\n                                                ")]), _vm._v(" "), _c("td", [_c("div", {
    staticClass: "btn-group w-100 btn-group-inputPercent"
  }, [_c("currency-input", {
    staticClass: "form-control text-end",
    staticStyle: {
      "border-radius": "unset",
      "padding-right": "7px",
      "border-end-start-radius": "5px",
      "border-start-start-radius": "5px"
    },
    attrs: {
      percentage: "",
      max: 100,
      value: _vm.formDataToBeWatched.total_part,
      id: "total_part",
      "float": "",
      disabled: ""
    },
    on: {
      input: _vm.formDataVars
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
  }, [_vm._v("%")])], 1)])])], 2)])]), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "col-md-12"
  }, [_vm._m(2), _vm._v(" "), _c("vue-editor", {
    attrs: {
      maximum: 1000,
      id: "commentaire_actionnarariat"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.commentaire_actionnarariat,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "commentaire_actionnarariat", $$v);
      },
      expression: "\n                                            formDataToBeWatched.commentaire_actionnarariat\n                                        "
    }
  })], 1)]), _vm._v(" "), _c("br"), _vm._v(" "), _c("br"), _vm._v(" "), _vm._m(3), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(4), _vm._v(" "), _c("tbody", _vm._l(_vm.equipe_dirigeantes, function (equipe_dirigeante, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: equipe_dirigeante.dirigeants,
        expression: "\n                                                            equipe_dirigeante.dirigeants\n                                                        "
      }],
      staticClass: "form-control",
      "class": {
        equipe: ["tb_19002", "tb_5"].includes(equipe_dirigeante === null || equipe_dirigeante === void 0 ? void 0 : equipe_dirigeante.cameFrom)
      },
      staticStyle: {
        width: "250px"
      },
      attrs: {
        type: "text",
        required: "",
        id: "dirigeants" + index
      },
      domProps: {
        value: equipe_dirigeante.dirigeants
      },
      on: {
        change: _vm.handleInput,
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(equipe_dirigeante, "dirigeants", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: equipe_dirigeante.sexe,
        expression: "equipe_dirigeante.sexe"
      }],
      staticClass: "form-select",
      "class": {
        equipe: ["tb_19002", "tb_5"].includes(equipe_dirigeante === null || equipe_dirigeante === void 0 ? void 0 : equipe_dirigeante.cameFrom)
      },
      staticStyle: {
        width: "200px"
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(equipe_dirigeante, "sexe", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, _vm.handleInput]
      }
    }, [_c("option", {
      attrs: {
        value: ""
      }
    }), _vm._v(" "), _c("option", {
      attrs: {
        value: "Femme"
      }
    }, [_vm._v("Femme")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "Homme"
      }
    }, [_vm._v("Homme")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "Indeterminé"
      }
    }, [_vm._v("Indeterminé")])])]), _vm._v(" "), _c("td", [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: equipe_dirigeante.pouvoir_signature,
        expression: "\n                                                            equipe_dirigeante.pouvoir_signature\n                                                        "
      }],
      staticClass: "form-select",
      "class": {
        equipe: ["tb_19002", "tb_5"].includes(equipe_dirigeante === null || equipe_dirigeante === void 0 ? void 0 : equipe_dirigeante.cameFrom)
      },
      staticStyle: {
        width: "250px"
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(equipe_dirigeante, "pouvoir_signature", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, _vm.handleInput]
      }
    }, [_c("option", {
      attrs: {
        value: "O"
      }
    }, [_vm._v("OUI")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "N"
      }
    }, [_vm._v("NON")])])]), _vm._v(" "), _c("td", [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: equipe_dirigeante.fonction_sein_entreprise,
        expression: "\n                                                            equipe_dirigeante.fonction_sein_entreprise\n                                                        "
      }],
      staticClass: "form-select",
      "class": {
        equipe: ["tb_19002", "tb_5"].includes(equipe_dirigeante === null || equipe_dirigeante === void 0 ? void 0 : equipe_dirigeante.cameFrom)
      },
      staticStyle: {
        width: "250px"
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(equipe_dirigeante, "fonction_sein_entreprise", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, _vm.handleInput]
      }
    }, [_c("option", {
      attrs: {
        value: ""
      }
    }), _vm._v(" "), _c("option", {
      attrs: {
        value: "PCA"
      }
    }, [_vm._v("\n                                                        PCA\n                                                    ")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "DG"
      }
    }, [_vm._v("\n                                                        DG\n                                                    ")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "DGA"
      }
    }, [_vm._v("\n                                                        DGA\n                                                    ")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "DRH"
      }
    }, [_vm._v("\n                                                        DRH\n                                                    ")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "DAF"
      }
    }, [_vm._v("\n                                                        DAF\n                                                    ")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "DT"
      }
    }, [_vm._v("\n                                                        DT\n                                                    ")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "DO"
      }
    }, [_vm._v("\n                                                        DO\n                                                    ")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "DC"
      }
    }, [_vm._v("\n                                                        DC (Directeur Commerciale)\n                                                    ")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "DSI"
      }
    }, [_vm._v("\n                                                        DSI\n                                                    ")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "DE"
      }
    }, [_vm._v("\n                                                        DE\n                                                    ")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "Ouvriers"
      }
    }, [_vm._v("\n                                                        Ouvriers\n                                                    ")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "AUTRES"
      }
    }, [_vm._v("\n                                                        AUTRES\n                                                    ")])])]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: equipe_dirigeante.experience,
        expression: "\n                                                            equipe_dirigeante.experience\n                                                        ",
        modifiers: {
          lazy: true
        }
      }],
      staticClass: "form-control",
      "class": {
        equipe: ["tb_19002", "tb_5"].includes(equipe_dirigeante === null || equipe_dirigeante === void 0 ? void 0 : equipe_dirigeante.cameFrom)
      },
      staticStyle: {
        width: "250px"
      },
      attrs: {
        type: "number"
      },
      domProps: {
        value: equipe_dirigeante.experience
      },
      on: {
        change: [function ($event) {
          return _vm.$set(equipe_dirigeante, "experience", $event.target.value);
        }, _vm.handleInput]
      }
    })]), _vm._v(" "), _c("td", [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: equipe_dirigeante.diplome,
        expression: "\n                                                            equipe_dirigeante.diplome\n                                                        "
      }],
      staticClass: "form-control",
      "class": {
        equipe: ["tb_19002", "tb_5"].includes(equipe_dirigeante === null || equipe_dirigeante === void 0 ? void 0 : equipe_dirigeante.cameFrom)
      },
      staticStyle: {
        width: "250px"
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(equipe_dirigeante, "diplome", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, _vm.handleInput]
      }
    }, [_c("option", {
      attrs: {
        value: "BAC"
      }
    }, [_vm._v("\n                                                            BAC\n                                                        ")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "BTS"
      }
    }, [_vm._v("\n                                                            BTS\n                                                        ")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "LICENCE"
      }
    }, [_vm._v("\n                                                            LICENCE\n                                                        ")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "MAITRISE"
      }
    }, [_vm._v("\n                                                            MAITRISE\n                                                        ")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "MASTER"
      }
    }, [_vm._v("\n                                                            MASTER\n                                                        ")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "DOCTORAT"
      }
    }, [_vm._v("\n                                                            DOCTORAT\n                                                        ")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "AUTRES"
      }
    }, [_vm._v("\n                                                            AUTRES\n                                                        ")])])]), _vm._v(" "), _c("td", [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: equipe_dirigeante.background,
        expression: "equipe_dirigeante.background"
      }],
      staticClass: "form-control",
      "class": {
        equipe: ["tb_19002", "tb_5"].includes(equipe_dirigeante === null || equipe_dirigeante === void 0 ? void 0 : equipe_dirigeante.cameFrom)
      },
      staticStyle: {
        width: "300px"
      },
      attrs: {
        id: "exampleFormControlTextarea1",
        rows: "1",
        cols: "25"
      },
      domProps: {
        value: equipe_dirigeante.background
      },
      on: {
        change: _vm.handleInput,
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(equipe_dirigeante, "background", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", [_c("button", {
      staticClass: "btn shadow-md text-white",
      staticStyle: {
        cursor: "pointer",
        background: "#2c3e50"
      },
      attrs: {
        type: "button",
        name: "button",
        "data-toggle": "tooltip",
        title: "Cliquer ici pour uploader ou voir le(s) fichier(s)"
      },
      on: {
        click: function click($event) {
          return _vm.handleDoubleClickOrClick(equipe_dirigeante);
        }
      }
    }, [_c("i", {
      staticClass: "icofont-attachment"
    })])]), _vm._v(" "), index == 0 ? _c("td", {
      staticStyle: {
        "font-size": "16px"
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
        border: "none"
      },
      attrs: {
        type: "button",
        title: "Ajouter une equipe dirigeante"
      },
      on: {
        click: function click($event) {
          return _vm.addMore2();
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
        title: "Supprimer cette ligne"
      },
      on: {
        click: function click($event) {
          return _vm.remove2(index);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1)])]);
  }), 0)])]), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-body p-0 g-2"
  }, _vm._l(_vm.info_complementaires, function (info_complementaire, index) {
    return _c("div", {
      key: index
    }, [_c("table", {
      staticClass: "table"
    }, [_c("tr", [_c("td", {
      staticClass: "px-2"
    }, [_c("label", {
      staticClass: "form-label"
    }, [_vm._v("Effectif")]), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: info_complementaire.effectif,
        expression: "info_complementaire.effectif"
      }],
      staticClass: "form-control",
      "class": {
        equipe: ["tb_19002", "tb_5"].includes(info_complementaire === null || info_complementaire === void 0 ? void 0 : info_complementaire.cameFrom)
      },
      attrs: {
        required: "",
        type: "number",
        id: "effectif"
      },
      domProps: {
        value: info_complementaire.effectif
      },
      on: {
        input: [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(info_complementaire, "effectif", $event.target.value);
        }, _vm.handleInput]
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "px-2"
    }, [_c("label", {
      staticClass: "form-label"
    }, [_vm._v("Nombre de femmes\n                                                    ")]), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: info_complementaire.nbre_femme,
        expression: "info_complementaire.nbre_femme"
      }],
      staticClass: "form-control",
      "class": {
        equipe: ["tb_19002", "tb_5"].includes(info_complementaire === null || info_complementaire === void 0 ? void 0 : info_complementaire.cameFrom)
      },
      attrs: {
        required: "",
        type: "number",
        id: "nbre_femme"
      },
      domProps: {
        value: info_complementaire.nbre_femme
      },
      on: {
        input: [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(info_complementaire, "nbre_femme", $event.target.value);
        }, _vm.handleInput]
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "px-2"
    }, [_c("label", {
      staticClass: "form-label"
    }, [_vm._v("Nombre de jeune (- de 35 ans)")]), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: info_complementaire.nbre_jeune,
        expression: "info_complementaire.nbre_jeune"
      }],
      staticClass: "form-control",
      "class": {
        equipe: ["tb_19002", "tb_5"].includes(info_complementaire === null || info_complementaire === void 0 ? void 0 : info_complementaire.cameFrom)
      },
      attrs: {
        required: "",
        type: "number",
        id: "nbre_jeune"
      },
      domProps: {
        value: info_complementaire.nbre_jeune
      },
      on: {
        input: [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(info_complementaire, "nbre_jeune", $event.target.value);
        }, _vm.handleInput]
      }
    })])])])]);
  }), 0), _vm._v(" "), _c("div", {
    staticClass: "card-body p-0 mt-3"
  }, [_c("div", {
    staticClass: "col-md-12"
  }, _vm._l(_vm.impacts, function (impact, index) {
    return _c("div", {
      key: index,
      staticClass: "form-group py-2"
    }, [_c("div", {
      staticClass: "form-check"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.lazy",
        value: impact.value,
        expression: "impact.value",
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
        type: "checkbox",
        id: "checkeck" + index
      },
      domProps: {
        checked: Array.isArray(impact.value) ? _vm._i(impact.value, null) > -1 : impact.value
      },
      on: {
        change: [function ($event) {
          var $$a = impact.value,
            $$el = $event.target,
            $$c = $$el.checked ? true : false;
          if (Array.isArray($$a)) {
            var $$v = null,
              $$i = _vm._i($$a, $$v);
            if ($$el.checked) {
              $$i < 0 && _vm.$set(impact, "value", $$a.concat([$$v]));
            } else {
              $$i > -1 && _vm.$set(impact, "value", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
            }
          } else {
            _vm.$set(impact, "value", $$c);
          }
        }, _vm.handleInput]
      }
    }), _vm._v(" "), _c("label", {
      staticClass: "form-check-label mx-1",
      staticStyle: {
        "margin-top": "5px"
      },
      attrs: {
        "for": "checkeck" + index
      }
    }, [_vm._v("\n                                                    " + _vm._s(impact === null || impact === void 0 ? void 0 : impact.label) + "\n                                                ")])])]);
  }), 0)]), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "col-md-12"
  }, [_vm._m(5), _vm._v(" "), _c("vue-editor", {
    attrs: {
      maximum: 1000,
      id: "commentaire_equipe_dirigeante"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.commentaire_equipe_dirigeante,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "commentaire_equipe_dirigeante", $$v);
      },
      expression: "\n                                            formDataToBeWatched.commentaire_equipe_dirigeante\n                                        "
    }
  })], 1)])])]) : _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen3 = !_vm.seen3;
      }
    }
  }, [_c("h6", {
    attrs: {
      id: "présentation-générique-de-l’entreprise"
    }
  }, [_vm._v("\n                                    A1 (Actionnariat, dirigeants, qualité des dirigeants)\n                                    "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])]), _vm._v(" "), _vm.seen1 ? _c("div", {
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
      id: "structure-financière"
    }
  }, [_vm._v("\n                                        A3 chiffres provisoires\n                                        "), _c("i", {
    staticClass: "icofont icofont-rounded-up",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    }
  })])]), _vm._v(" "), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_vm._m(6), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mb-1"
  }, [_c("thead", [_c("tr", {
    staticClass: "fw-bold"
  }, [_vm._m(7), _vm._v(" "), _c("td", [_c("input-group", {
    staticStyle: {
      "min-width": "150px"
    },
    scopedSlots: _vm._u([{
      key: "input",
      fn: function fn() {
        return [_c("input", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.formDataToBeWatched.chiffre_provisoire_annee_n1,
            expression: "formDataToBeWatched.chiffre_provisoire_annee_n1"
          }],
          staticClass: "form-control equipe",
          attrs: {
            type: "text",
            maxlength: "4"
          },
          domProps: {
            value: _vm.formDataToBeWatched.chiffre_provisoire_annee_n1
          },
          on: {
            input: [function ($event) {
              if ($event.target.composing) return;
              _vm.$set(_vm.formDataToBeWatched, "chiffre_provisoire_annee_n1", $event.target.value);
            }, _vm.handleInput]
          }
        })];
      },
      proxy: true
    }, {
      key: "right",
      fn: function fn() {
        return [_vm._v("N - 1")];
      },
      proxy: true
    }], null, false, 3388250059)
  })], 1), _vm._v(" "), _c("td", [_c("input-group", {
    staticStyle: {
      "min-width": "150px"
    },
    scopedSlots: _vm._u([{
      key: "input",
      fn: function fn() {
        return [_c("input", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.formDataToBeWatched.chiffre_provisoire_annee_n,
            expression: "formDataToBeWatched.chiffre_provisoire_annee_n"
          }],
          staticClass: "form-control equipe",
          attrs: {
            type: "text",
            maxlength: "4"
          },
          domProps: {
            value: _vm.formDataToBeWatched.chiffre_provisoire_annee_n
          },
          on: {
            input: [function ($event) {
              if ($event.target.composing) return;
              _vm.$set(_vm.formDataToBeWatched, "chiffre_provisoire_annee_n", $event.target.value);
            }, _vm.handleInput]
          }
        })];
      },
      proxy: true
    }, {
      key: "right",
      fn: function fn() {
        return [_vm._v("N")];
      },
      proxy: true
    }], null, false, 448536567)
  })], 1), _vm._v(" "), _vm._m(8)])]), _vm._v(" "), _c("tbody", [_vm._l(_vm.chiffres_provisoires_, function (chiffre_p, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_c("label", {
      attrs: {
        "for": ""
      }
    }, [_vm._v("\n                                                        " + _vm._s(chiffre_p.label) + "\n                                                    ")])]), _vm._v(" "), _c("td", [_c("currency-input", {
      staticClass: "form-control textToRight",
      "class": {
        equipe: ["tb_19002", "tb_5"].includes(chiffre_p === null || chiffre_p === void 0 ? void 0 : chiffre_p.cameFrom)
      },
      attrs: {
        "default-typing": false,
        type: "text"
      },
      on: {
        change: _vm.handleInput
      },
      model: {
        value: chiffre_p.curr_year_2,
        callback: function callback($$v) {
          _vm.$set(chiffre_p, "curr_year_2", $$v);
        },
        expression: "\n                                                        chiffre_p.curr_year_2\n                                                    "
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
      staticClass: "form-control textToRight",
      "class": {
        equipe: ["tb_19002", "tb_5"].includes(chiffre_p === null || chiffre_p === void 0 ? void 0 : chiffre_p.cameFrom)
      },
      attrs: {
        "default-typing": false,
        type: "text"
      },
      on: {
        change: _vm.handleInput
      },
      model: {
        value: chiffre_p.curr_year_1,
        callback: function callback($$v) {
          _vm.$set(chiffre_p, "curr_year_1", $$v);
        },
        expression: "\n                                                            chiffre_p.curr_year_1\n                                                        "
      }
    })], 1), _vm._v(" "), _c("td", [_c("div", {
      staticStyle: {
        "min-width": "115px"
      }
    }, [_c("input-group", {
      scopedSlots: _vm._u([{
        key: "input",
        fn: function fn() {
          return [_c("currency-input", {
            staticClass: "textToRight",
            attrs: {
              percentage: "",
              value: chiffre_p.variance,
              disabled: ""
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
      }], null, true)
    })], 1)])]);
  }), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "text-right text-center"
  }, [_vm._v("\n                                                   RN / CA\n                                                ")]), _vm._v(" "), _c("td", [_c("div", {
    staticStyle: {
      "min-width": "115px"
    }
  }, [_c("input-group", {
    scopedSlots: _vm._u([{
      key: "input",
      fn: function fn() {
        return [_c("currency-input", {
          staticClass: "form-control text-end",
          attrs: {
            "default-typing": false,
            disabled: ""
          },
          model: {
            value: _vm.formDataToBeWatched.rn_ca_n2,
            callback: function callback($$v) {
              _vm.$set(_vm.formDataToBeWatched, "rn_ca_n2", $$v);
            },
            expression: "formDataToBeWatched.rn_ca_n2"
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
    }], null, false, 3057177818)
  })], 1)]), _vm._v(" "), _c("td", [_c("div", {
    staticStyle: {
      "min-width": "115px"
    }
  }, [_c("input-group", {
    scopedSlots: _vm._u([{
      key: "input",
      fn: function fn() {
        return [_c("currency-input", {
          staticClass: "form-control text-end",
          attrs: {
            "default-typing": false,
            disabled: ""
          },
          model: {
            value: _vm.formDataToBeWatched.rn_ca_n1,
            callback: function callback($$v) {
              _vm.$set(_vm.formDataToBeWatched, "rn_ca_n1", $$v);
            },
            expression: "formDataToBeWatched.rn_ca_n1\n                                                               "
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
    }], null, false, 1000310529)
  })], 1)])])], 2)])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "col-md-12"
  }, [_vm._m(9), _vm._v(" "), _c("vue-editor", {
    attrs: {
      maximum: 1000,
      id: "commentaires"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.commentaires_chiffres_provisoires,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "commentaires_chiffres_provisoires", $$v);
      },
      expression: "\n                                        formDataToBeWatched.commentaires_chiffres_provisoires\n                                    "
    }
  })], 1)])]) : _c("div", {
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
      id: "structure-financière"
    }
  }, [_vm._v("\n                                        chiffres provisoires "), _c("i", {
    staticClass: "icofont icofont-rounded-down",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    }
  })])])]), _vm._v(" "), _c("div", {
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
      id: "ca2-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Présentation du client\n                        ")]), _vm._v(" "), _c("div", {
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
  return _c("div", {
    staticClass: "p-3 mb-2 bg-secondary text-white"
  }, [_c("h6", {
    attrs: {
      id: "actionnariats"
    }
  }, [_vm._v("\n                                        Actionnariat\n                                    ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("\n                                                        Nom et prénoms / Dénomination sociale")])]), _vm._v(" "), _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v(" % de Participation")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_c("b", [_vm._v("Commentaire sur l'actionnariat")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "p-3 mb-2 bg-secondary text-white"
  }, [_c("h6", {
    attrs: {
      id: "equipes-dirigeante"
    }
  }, [_vm._v("\n                                        Equipes dirigeantes\n                                ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Noms")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Sexe")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Signature ")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Fonction au sein de l'entreprise ")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v(" Experience (Année) ")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Diplôme")])]), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_c("label", [_vm._v("Background")])]), _vm._v(" "), _c("td"), _vm._v(" "), _c("td")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_c("b", [_vm._v("Commentaire sur l'équipe dirigéante")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "p-3 mb-2 bg-secondary text-white"
  }, [_c("h6", {
    attrs: {
      id: "actionnariats"
    }
  }, [_vm._v("\n                                        Chiffres à mi-parcours ou chiffres provisoires (en Millions de FCFA)\n                                    ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("% de variation")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_c("b", [_vm._v("commentaires sur chiffres à mi-parcours ou chiffres provisoires")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA2.vue?vue&type=style&index=0&id=2905403a&lang=css&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA2.vue?vue&type=style&index=0&id=2905403a&lang=css&scoped=true ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\ninput[data-v-2905403a] {\n  /*border: 1px solid red;*/\n}\n*[data-v-2905403a] {\n  font-family: \"Google sans\";\n}\nlabel[data-v-2905403a] {\n  height: 10px;\n  font-size: 13px;\n}\ntd[data-v-2905403a] {\n  padding: 5px;\n  font-size: 13px;\n}\ninput[data-v-2905403a],\nselect[data-v-2905403a] {\n  height: 35px;\n  border-color: #34495e;\n  color: #57606f;\n  font-size: 13px;\n  font-weight: bold;\n}\n.card-width-height[data-v-2905403a] {\n  width: 100%;\n  height: 100%;\n}\n.head[data-v-2905403a] {\n  color: #f1f2f6;\n  font-size: 22px;\n}\n.hdc[data-v-2905403a] {\n  background-color: #57606f;\n}\n.relook-header[data-v-2905403a] {\n  color: #000;\n  background-color: #f4f3f3;\n  padding: 5px;\n  border-bottom: 1px solid #b6b8bb;\n}\n.badge-sm[data-v-2905403a] {\n  display: inline-block;\n  width: 15px;\n  height: 15px;\n  background: rgba(255, 0, 0, 0.882);\n  color: white;\n  font-size: 12px;\n  font-weight: 500;\n  border-radius: 100%;\n  position: absolute;\n  top: -20%;\n  left: 55%;\n  text-align: center;\n}\n.imageM21i[data-v-2905403a] {\n  background: url(\"/images/capture_cofina/instruction_evaluation_risque.png\")\n      no-repeat;\n  background-position: center;\n  background-size: contain;\n  width: 100%;\n  height: 100%;\n}\n.equipe[data-v-2905403a]{\n  background: #00ffff21;\n  color: #000;\n}\n.imageM21exi[data-v-2905403a] {\n  background: url(\"/images/capture_cofina/exemple_evaluation_risque.png\")\n      no-repeat;\n  background-position: center;\n  background-size: contain;\n  width: 1000px;\n  height: 200px;\n}\n.textToRight[data-v-2905403a]{\n  text-align: right;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA2.vue?vue&type=style&index=0&id=2905403a&lang=css&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA2.vue?vue&type=style&index=0&id=2905403a&lang=css&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RG_CA2_vue_vue_type_style_index_0_id_2905403a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RG-CA2.vue?vue&type=style&index=0&id=2905403a&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA2.vue?vue&type=style&index=0&id=2905403a&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RG_CA2_vue_vue_type_style_index_0_id_2905403a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RG_CA2_vue_vue_type_style_index_0_id_2905403a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA2.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA2.vue ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RG_CA2_vue_vue_type_template_id_2905403a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RG-CA2.vue?vue&type=template&id=2905403a&scoped=true */ "./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA2.vue?vue&type=template&id=2905403a&scoped=true");
/* harmony import */ var _RG_CA2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RG-CA2.vue?vue&type=script&lang=js */ "./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA2.vue?vue&type=script&lang=js");
/* harmony import */ var _RG_CA2_vue_vue_type_style_index_0_id_2905403a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RG-CA2.vue?vue&type=style&index=0&id=2905403a&lang=css&scoped=true */ "./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA2.vue?vue&type=style&index=0&id=2905403a&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _RG_CA2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _RG_CA2_vue_vue_type_template_id_2905403a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _RG_CA2_vue_vue_type_template_id_2905403a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2905403a",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA2.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA2.vue?vue&type=script&lang=js":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA2.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RG_CA2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RG-CA2.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA2.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RG_CA2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA2.vue?vue&type=style&index=0&id=2905403a&lang=css&scoped=true":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA2.vue?vue&type=style&index=0&id=2905403a&lang=css&scoped=true ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RG_CA2_vue_vue_type_style_index_0_id_2905403a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RG-CA2.vue?vue&type=style&index=0&id=2905403a&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA2.vue?vue&type=style&index=0&id=2905403a&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA2.vue?vue&type=template&id=2905403a&scoped=true":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA2.vue?vue&type=template&id=2905403a&scoped=true ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RG_CA2_vue_vue_type_template_id_2905403a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RG_CA2_vue_vue_type_template_id_2905403a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RG_CA2_vue_vue_type_template_id_2905403a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RG-CA2.vue?vue&type=template&id=2905403a&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/contreanalyse/nsia/groupe/rg/RG-CA2.vue?vue&type=template&id=2905403a&scoped=true");


/***/ })

}]);