"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_offview_microfinance_cofina_memo_urgentissimo_TU1_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/urgentissimo/TU1.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/urgentissimo/TU1.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _parts_RentaCred__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../parts/RentaCred */ "./resources/js/components/parts/RentaCred.vue");


// "../../../services/credit.service";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    dossier_credit: Object
  },
  components: {
    RentaCred: _parts_RentaCred__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      inventairesTrier: [],
      encours: null,
      loadEncours: false
    };
  },
  computed: {
    isInfine: function isInfine() {
      var _this$dossier_credit;
      return ((_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 || (_this$dossier_credit = _this$dossier_credit.cred_pub_tb_17001.mode_paiement) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.toLowerCase()) == "in fine";
    }
  },
  created: function created() {
    //this.sortInventaires()
  },
  mounted: function mounted() {
    this.getEncourInfo();
  },
  methods: {
    formatDate: function formatDate(date) {
      var options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
      };
      return new Date(date).toLocaleDateString('fr', options);
    },
    convertNumber: function convertNumber(valeur) {
      return Number(String(valeur).replace(/\s+/g, ""));
    },
    getEncourInfo: function getEncourInfo() {
      var _this$dossier_credit2,
        _this = this;
      this.loadEncours = true;
      _services_credit_service__WEBPACK_IMPORTED_MODULE_0__["default"].encours((_this$dossier_credit2 = this.dossier_credit) === null || _this$dossier_credit2 === void 0 || (_this$dossier_credit2 = _this$dossier_credit2.cred_pub_tb_17000) === null || _this$dossier_credit2 === void 0 ? void 0 : _this$dossier_credit2.matricule_client).then(function (res) {
        _this.encoursData(res);
      })["catch"](function (err) {
        console.log(err);
      });
    },
    encoursData: function encoursData(res) {
      var _this$encours;
      this.encours = res.data;
      if (((_this$encours = this.encours) === null || _this$encours === void 0 ? void 0 : _this$encours.nom_client) == null) {
        var _this$dossier_credit3;
        var encoursFromTb0 = (_this$dossier_credit3 = this.dossier_credit) === null || _this$dossier_credit3 === void 0 ? void 0 : _this$dossier_credit3.cred_pub_tb_17000.encours_actuel;
        if (!['', null, undefined].includes(encoursFromTb0)) {
          var _this$dossier_credit4, _this$dossier_credit5;
          this.encours.nom_client = (_this$dossier_credit4 = this.dossier_credit) === null || _this$dossier_credit4 === void 0 ? void 0 : _this$dossier_credit4.cred_pub_tb_17000.denomination_client;
          this.encours.encours_montant = (_this$dossier_credit5 = this.dossier_credit) === null || _this$dossier_credit5 === void 0 ? void 0 : _this$dossier_credit5.cred_pub_tb_17000.encours_actuel;
        }
      }
      this.loadEncours = false;
    },
    // AffichetotalAchat(){
    //     let value=0
    //     this.inventairesTrier.forEach((inventaire, key) => {
    //         value += (Number(String(inventaire.quantite).replace(/\s+/g,"")) * Number(String(inventaire.prix_achat).replace(/\s+/g,"")))
    //     })
    //     return value
    // },
    // AffichetotalQuantite(){
    //     let value=0
    //     this.inventairesTrier.forEach((inventaire, key) => {
    //         value += Number(String(inventaire.quantite).replace(/\s+/g,""))
    //     })
    //     return value
    // },
    // AffichetotalMargePourcentage(){
    //     let value=0
    //     this.inventairesTrier.forEach((inventaire, key) => {
    //         value += Number(String(inventaire.marge_pourcentage).replace(/\s+/g,""))
    //     })
    //     return value
    // },
    // AffichetotalMargetotal(){
    //     let value=0
    //     this.inventairesTrier.forEach((inventaire, key) => {
    //         value += (Number(String(inventaire.prix_vente).replace(/\s+/g,"")) - Number(String(inventaire.prix_achat).replace(/\s+/g,"")))*inventaire.quantite
    //     })
    //     return value
    // },
    // AffichetotalMarge(){
    //     let value=0
    //     this.inventairesTrier.forEach((inventaire, key) => {
    //         value += (Number(String(inventaire.prix_vente).replace(/\s+/g,"")) - Number(String(inventaire.prix_achat).replace(/\s+/g,"")))
    //     })
    //     return value
    // },
    // sortInventaires(){
    //    let objs= this.dossier_credit?.cred_pub_tb_025?.inventaires
    //     this.inventairesTrier = objs.sort((a,b) => (b.quantite* Number(String(b.prix_vente).replace(/\s+/g,""))) - (a.quantite * Number(String(a.prix_vente).replace(/\s+/g,"")) )).slice(0,5)
    // },
    arrondiA2Chiffre: function arrondiA2Chiffre(x) {
      var value = Math.round(x * 100) / 100;
      return value;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/parts/RentaCred.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/parts/RentaCred.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash.debounce */ "./node_modules/lodash.debounce/index.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'RentaCred',
  props: {
    // authCheckUser: {
    //     type: Object,
    //     required: true,
    // },
    dossier_credit: {
      type: Object,
      required: true
    },
    read_only: {
      type: Boolean,
      "default": false
    },
    niveau: String
  },
  data: function data() {
    return _defineProperty(_defineProperty(_defineProperty({
      //
      TEST_MODE: false,
      authCheckUser: null,
      CURRENCY_CODE: 'XOF',
      data: {
        amortissement2: null,
        //{},
        autres_revenus_sur_credit: null,
        cout_moyen_des_ressources: null,
        frais_de_dossier: null,
        interet_annuel: null,
        montant_echeance: null,
        nombre_echeance: null,
        nombre_paiements_planifies: null,
        paiement_programme: null,
        paiements_par_an: null,
        periode_pret: null,
        plan_amortissement: null,
        //[],
        plan_amortissement2: null,
        //[],
        pourcentage_cout_moyen_des_ressources: null,
        pourcentage_rentabilite_brute_annuelle: null,
        pourcentage_taux_de_cout_du_risque_espere: null,
        prime_de_risque: null,
        rentabilite_brute_annuelle: null,
        rentabilite_nette_annuelle: null,
        rentabilite_status: null,
        revenus_generes_par_les_cashflow: null,
        revenus_annuels_sur_cashflow: null,
        revenu_cashflow: null,
        taux_de_cout_du_risque_espere: null,
        taux_interet: null,
        total_des_interets: null,
        total_revenus_annuel: null,
        total_revenus_generes_par_les_cashflow: null,
        total_revenus_sur_la_duree_du_credit: null,
        VPM: null
      },
      DATA_CONFIG: {
        KEYS: {
          pourcentage_autres_revenus_sur_credit: "Prime d'assurance",
          pourcentage_frais_de_dossier: "Frais de dossier",
          pourcentage_prime_de_risque: "Prime de risque"
        },
        NEGATIVE_STATUS_TEXT: 'NON RENTABLE',
        POSITIVE_STATUS_TEXT: 'RENTABLE',
        T0_NAME: 'la Fiche signalétique (T0)',
        taux_interet_annuel: 18.0
      },
      DEFAULT_NULL_INDICATOR: '--',
      DISPLAY_COMPONENT: true,
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_1__["default"].host,
      errorMessage: null,
      errorHint: null,
      // dossier_credit: null,
      filiales: ["CFN_BF", "CFB_CG", "CFN_CI", "CFN_GB", "CFN_GN", "CFN_ML", "CFN_SN", "CFN_TG", "FINL"],
      formData: {
        code_filiale: null,
        depot_de_garantie: null,
        duree_mois: 0,
        mode_remboursement: null,
        montant_credit: null,
        pourcentage_autres_revenus_sur_credit: 0.00,
        pourcentage_frais_de_dossier: 3.00,
        pourcentage_prime_de_risque: 1.00,
        taux_interet_annuel: null,
        type_de_client: null
      },
      isCalcTableVisible: false,
      isCashflowTableVisible: true,
      isComputing: false,
      isDebugInfoVisible: false,
      isLoading: false,
      isLoadingPage: true,
      isPlanAmortissementVisible: true,
      isPlanAmortissement2Visible: true,
      loadingMessage: "Chargement",
      MAX_AMORTISSEMENT_LINES: 10000,
      // 1 00 000
      MAX_DUREE_CREDIT_IN_MONTHS: 4 * 12,
      // 4 ans
      messageList: [],
      MIN_RENTACRED_AMOUNT: 300000,
      // 500 000
      modes_remboursement: [1, 2, 3, 4, 5, 6, 12]
    }, "TEST_MODE", false), "types_de_client", [{
      name: "Commerçant et Entrepreneurs individuels",
      slug: "commercant_et_entrepreneurs_individuels"
    }, {
      name: "PME Formelles",
      slug: "pme_formelles"
    }, {
      name: "Retails (Particuliers-Salariés-Retraités)",
      slug: "retails_particuliers_salaries_retraites"
    }, {
      name: "Mutuelles-Associations-ONG",
      slug: "mutuelles_associations_ong"
    }, {
      name: "Professions liberales",
      slug: "professions_liberales"
    }]), "raw_type_de_clients", ["Commerçant et Entrepreneurs individuels", "PME Formelles", "Retails (Particuliers-Salariés-Retraités)", "Mutuelles-Associations-ONG", "Professions liberales"]);
  },
  created: function created() {
    var _this$dossier_credit,
      _this = this;
    // this.loadUserData()
    var credTbKey = this.determineCredPubTables((_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.applied_templ_name);
    var keysToWatch = [credTbKey[0], credTbKey[1], 'applied_templ_name', 'cred_pub_tb_47' // ou autre table selon credTbKey
    ];
    keysToWatch.forEach(function (key) {
      _this.$watch("dossier_credit.".concat(key), function (newVal, oldVal) {
        if (newVal !== oldVal) {
          lodash_debounce__WEBPACK_IMPORTED_MODULE_2___default()(function (key) {
            _this.handleRentaCred("watch_".concat(key));
          }, 2000);
        }
      }, {
        deep: key === 'frais' || key === 'cred_pub_tb_47'
      });
    });
  },
  mounted: function mounted() {
    var _this2 = this;
    setTimeout(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _this2.loadUserData();
            // this.initData()
            // if(this.formData?.type_de_client){

            // }
          case 1:
          case "end":
            return _context.stop();
        }
      }, _callee);
    })), 1000);

    // Order of operations : from bottom to top
  },
  computed: {
    computedCalcTableWidth: function computedCalcTableWidth() {
      var _document$getElementB;
      if (this.isLoading) return 0;
      var tableW = (_document$getElementB = document.getElementById('#thead_revenus_sur_credit')) === null || _document$getElementB === void 0 || (_document$getElementB = _document$getElementB.getBoundingClientRect()) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.width;
      return !!tableW ? tableW * .9 + 'px' : '50vw';
    },
    debug_params_info: function debug_params_info() {
      var _this$formData, _this$formData2, _this$formData3, _this$formData4, _this$formData5, _this$formData6, _this$formData7, _this$formData8, _this$formData9, _this$formData0;
      var params = [["code_filiale", (_this$formData = this.formData) === null || _this$formData === void 0 ? void 0 : _this$formData.code_filiale], ["depot_de_garantie", (_this$formData2 = this.formData) === null || _this$formData2 === void 0 ? void 0 : _this$formData2.depot_de_garantie], ["duree_mois", (_this$formData3 = this.formData) === null || _this$formData3 === void 0 ? void 0 : _this$formData3.duree_mois], ["mode_remboursement", (_this$formData4 = this.formData) === null || _this$formData4 === void 0 ? void 0 : _this$formData4.mode_remboursement], ["montant_credit", (_this$formData5 = this.formData) === null || _this$formData5 === void 0 ? void 0 : _this$formData5.montant_credit], ["pourcentage_autres_revenus_sur_credit", (_this$formData6 = this.formData) === null || _this$formData6 === void 0 ? void 0 : _this$formData6.pourcentage_autres_revenus_sur_credit], ["pourcentage_frais_de_dossier", (_this$formData7 = this.formData) === null || _this$formData7 === void 0 ? void 0 : _this$formData7.pourcentage_frais_de_dossier], ["pourcentage_prime_de_risque", (_this$formData8 = this.formData) === null || _this$formData8 === void 0 ? void 0 : _this$formData8.pourcentage_prime_de_risque], ["taux_interet_annuel", (_this$formData9 = this.formData) === null || _this$formData9 === void 0 ? void 0 : _this$formData9.taux_interet_annuel], ["type_de_client", (_this$formData0 = this.formData) === null || _this$formData0 === void 0 ? void 0 : _this$formData0.type_de_client],
      //
      ["periode_pret", this.periode_pret], ["paiements_par_an", this.paiements_par_an], ["paiement_programme", this.paiement_programme], ["nombre_paiements_planifies", this.nombre_paiements_planifies], ["paiementsSupp", this.paiementsSupp], ["total_des_interets", this.total_des_interets], ["rentabilite_brute_annuelle", this.rentabilite_brute_annuelle], ["rentabilite_nette_annuelle", this.rentabilite_nette_annuelle]];
      return params;
    },
    rentacred: function rentacred() {
      var _this$types_de_client,
        _this$types_de_client2,
        _this3 = this;
      var type_de_client_name = (_this$types_de_client = (_this$types_de_client2 = this.types_de_client.find(function (item) {
        var _this3$formData$type_, _this3$formData, _this3$data;
        return item.slug == ((_this3$formData$type_ = (_this3$formData = _this3.formData) === null || _this3$formData === void 0 ? void 0 : _this3$formData.type_de_client) !== null && _this3$formData$type_ !== void 0 ? _this3$formData$type_ : (_this3$data = _this3.data) === null || _this3$data === void 0 ? void 0 : _this3$data.type_de_client);
      })) === null || _this$types_de_client2 === void 0 ? void 0 : _this$types_de_client2.name) !== null && _this$types_de_client !== void 0 ? _this$types_de_client : null;
      return _objectSpread(_objectSpread(_objectSpread({}, this.formData), this.data), {}, {
        type_de_client_name: type_de_client_name
      });
    }
  },
  methods: {
    autosavingRenta: function autosavingRenta() {
      var _this4 = this;
      if (this.read_only) return;
      if (this.canLaunchAutosaving() === true) {
        _services_auth_service__WEBPACK_IMPORTED_MODULE_0__["default"].loadUserData().then(function (res) {
          // this.send2Backend(res);
        })["catch"](function (err) {
          _this4.loadWithError(err);
        });
      }
    },
    computeRentaCred: function computeRentaCred() {
      var _this$formData1,
        _this$formData10,
        _this5 = this;
      if (this.isLoadingPage) return;
      if (this.read_only) return;
      if (this.isComputing) return;
      if (this.isLoading) return;
      if (this.errorMessage) return;
      //
      if (!((_this$formData1 = this.formData) !== null && _this$formData1 !== void 0 && _this$formData1.montant_credit)) {
        this.errorMessage = "Montant crédit non défini";
        this.errorHint = "Assurez vous d'avoir bien rempli " + this.DATA_CONFIG.T0_NAME;
      }
      if (((_this$formData10 = this.formData) === null || _this$formData10 === void 0 ? void 0 : _this$formData10.montant_credit) <= this.MIN_RENTACRED_AMOUNT) {
        var _this$formData11;
        this.errorMessage = "Le montant crédit (" + ((_this$formData11 = this.formData) === null || _this$formData11 === void 0 ? void 0 : _this$formData11.montant_credit) + this.CURRENCY_CODE + ") doit être supérieur à " + (this.MIN_RENTACRED_AMOUNT - 1) + this.CURRENCY_CODE + " pour calculer le RentaCred";
        return;
      }
      this.isComputing = true;
      try {
        var _this$formData$montan, _this$formData12, _this$formData$code_f, _this$formData13, _this$formData$depot_, _this$formData14, _this$formData15, _this$formData$duree_, _this$formData16, _this$formData$mode_r, _this$formData17, _this$formData$pource, _this$formData18, _this$formData19, _this$formData20, _this$formData$taux_i, _this$formData21, _this$formData24;
        // Setup form Data;

        // TODO compute all these vars IN ORDER
        this.loadingMessage = "Vérification des informations";
        // // this.$console.log("Vérification des informations");
        this.data = {
          amortissement2: null,
          //{},
          autres_revenus_sur_credit: null,
          cout_moyen_des_ressources: null,
          frais_de_dossier: null,
          interet_annuel: null,
          montant_echeance: null,
          nombre_echeance: null,
          nombre_paiements_planifies: null,
          paiement_programme: null,
          paiements_par_an: null,
          periode_pret: null,
          plan_amortissement: null,
          //[],
          plan_amortissement2: null,
          //[],
          pourcentage_cout_moyen_des_ressources: null,
          pourcentage_rentabilite_brute_annuelle: null,
          pourcentage_taux_de_cout_du_risque_espere: null,
          prime_de_risque: null,
          rentabilite_brute_annuelle: null,
          rentabilite_nette_annuelle: null,
          rentabilite_status: null,
          revenus_generes_par_les_cashflow: null,
          revenus_annuels_sur_cashflow: null,
          revenu_cashflow: null,
          taux_de_cout_du_risque_espere: null,
          taux_interet: null,
          total_des_interets: null,
          total_revenus_annuel: null,
          total_revenus_generes_par_les_cashflow: null,
          total_revenus_sur_la_duree_du_credit: null,
          VPM: null
        };
        this.loadingMessage = "Calcul des variables";
        // // this.$console.log("Calcul des variables");

        var I7 = null;
        var E13 = null;
        var E23 = null;
        var E16 = null;
        var E17 = null;
        var E18 = null;
        var Q206 = null;
        var E15 = null;
        var E19 = null;
        var E20 = null;
        var E24 = null;
        var E25 = null;
        var E26 = null;
        var E27 = null;
        var E7 = (_this$formData$montan = (_this$formData12 = this.formData) === null || _this$formData12 === void 0 ? void 0 : _this$formData12.montant_credit) !== null && _this$formData$montan !== void 0 ? _this$formData$montan : 0;
        var E1 = (_this$formData$code_f = (_this$formData13 = this.formData) === null || _this$formData13 === void 0 ? void 0 : _this$formData13.code_filiale) !== null && _this$formData$code_f !== void 0 ? _this$formData$code_f : null;
        var E8 = (_this$formData$depot_ = (_this$formData14 = this.formData) === null || _this$formData14 === void 0 ? void 0 : _this$formData14.depot_de_garantie) !== null && _this$formData$depot_ !== void 0 ? _this$formData$depot_ : 0;
        var E6 = (_this$formData15 = this.formData) === null || _this$formData15 === void 0 ? void 0 : _this$formData15.type_de_client;
        var E10 = (_this$formData$duree_ = (_this$formData16 = this.formData) === null || _this$formData16 === void 0 ? void 0 : _this$formData16.duree_mois) !== null && _this$formData$duree_ !== void 0 ? _this$formData$duree_ : 1;
        var E11 = (_this$formData$mode_r = (_this$formData17 = this.formData) === null || _this$formData17 === void 0 ? void 0 : _this$formData17.mode_remboursement) !== null && _this$formData$mode_r !== void 0 ? _this$formData$mode_r : E10;
        var D16 = ((_this$formData$pource = (_this$formData18 = this.formData) === null || _this$formData18 === void 0 ? void 0 : _this$formData18.pourcentage_frais_de_dossier) !== null && _this$formData$pource !== void 0 ? _this$formData$pource : 0) / 100;
        var D17 = ((_this$formData19 = this.formData) === null || _this$formData19 === void 0 ? void 0 : _this$formData19.pourcentage_prime_de_risque) / 100;
        var D18 = ((_this$formData20 = this.formData) === null || _this$formData20 === void 0 ? void 0 : _this$formData20.pourcentage_autres_revenus_sur_credit) / 100;
        // var I7 = amortissement2?.total_des_interets;
        // var E13 = nombre_echeance;
        // var E23 = total_des_interets ?? 0;
        // var E16 = frais_de_dossier;
        // var E17 = prime_de_risque;
        // var E18 = autres_revenus_sur_credit;

        // var Q206 = total_revenus_generes_par_les_cashflow;
        // var E15 = interet_annuel;
        // var E19 = revenus_annuels_sur_cashflow;
        // var E7 = this.formData?.montant_credit;
        // var E20 = total_revenus_annuel;
        // var E24 = pourcentage_rentabilite_brute_annuelle;
        // var E25 = pourcentage_cout_moyen_des_ressources;
        // var E26 = taux_de_cout_du_risque_espere;
        // var E27 = rentabilite_nette_annuelle;

        //
        var periode_pret = E10 / 12;
        // // this.$console.log("periode_pret", periode_pret)

        //
        var paiements_par_an = 12 / E11;
        // // this.$console.log("paiements_par_an", paiements_par_an)
        //
        var frais_de_dossier = E10 < 12 ? D16 * E7 * (12 / E10) : D16 * E7;
        // // this.$console.log("frais_de_dossier", frais_de_dossier)
        E16 = frais_de_dossier;
        var prime_de_risque = E10 < 12 ? D17 * E7 * (12 / E10) : D17 * E7;
        // // this.$console.log("prime_de_risque", prime_de_risque)
        E17 = prime_de_risque;
        var autres_revenus_sur_credit = E10 < 12 ? D18 * E7 * (12 / E10) : D18 * E7;
        // // this.$console.log("autres_revenus_sur_credit", autres_revenus_sur_credit)
        E18 = autres_revenus_sur_credit;
        var nombre_echeance = E10 / E11;
        // // this.$console.log("nombre_echeance", nombre_echeance)
        //
        var nombre_paiements_planifies = periode_pret * paiements_par_an;
        // // this.$console.log("nombre_paiements_planifies", nombre_paiements_planifies)

        //
        var taux_interet = ((_this$formData$taux_i = (_this$formData21 = this.formData) === null || _this$formData21 === void 0 ? void 0 : _this$formData21.taux_interet_annuel) !== null && _this$formData$taux_i !== void 0 ? _this$formData$taux_i : 0) / 100;
        // // this.$console.log("taux_interet", taux_interet)
        //
        var calcVPM = function calcVPM(montant, taux, nombre_echeance) {
          var numerator = montant * taux * Math.pow(1 + taux, nombre_echeance);
          var denominator = Math.pow(1 + taux, nombre_echeance) - 1;
          var VPM = numerator / denominator;
          return VPM;
        };

        // // this.$console.log("Calcul du VPM");
        // const VPM = (() => {
        //     const montant = E7;
        //     const duree = nombre_echeance;
        //     const t = taux_interet;
        //     // this.$console.log("montant", montant, "duree", duree, "t", t);
        //     let R = 1 - Math.pow(1 + t, -duree);
        //     R = R <= 0 ? 1 : R; // Formula from chatGPT

        //     /*
        //         PMT is the periodic payment (what you're solving for).
        //         P is the principal amount (loan amount or initial investment).
        //         r is the periodic interest rate (expressed as a decimal).
        //         n is the number of periods (number of payments).

        //         const P = montant;
        //         const r = t;
        //         const n = duree;

        //         const PMT = P * r * (1 + r)^n / ((1 + r)^n - 1)
        //         return this.formatRound(PMT);
        //     */
        //     const result = (montant * t) / R;
        //     // this.$console.log("R", R, "result", result);
        //     return result;
        // })()
        //
        var paiement_programme = calcVPM(E7, taux_interet / paiements_par_an, nombre_paiements_planifies);
        // // this.$console.log("paiement_programme", paiement_programme)
        //
        var montant_echeance = paiement_programme;
        // // this.$console.log("montant_echeance", montant_echeance)
        //
        var calcPaiementProgramme = function calcPaiementProgramme(montant, nombre_paiements_planifies) {
          return calcVPM(montant, taux_interet / paiements_par_an, nombre_paiements_planifies);
        };
        //
        var calcPlanAmortissement = function calcPlanAmortissement(montant_du_pret) {
          var _plans$at2;
          var total_des_paiements_en_avance = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var paiementsSupp = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
          var plans = [];
          var periode_pret = E10;
          var nombre_paiements_planifies = periode_pret * paiements_par_an;
          var paiement_programme = calcPaiementProgramme(montant_du_pret, nombre_paiements_planifies);
          var amortissement = {
            montant_du_pret: montant_du_pret,
            paiementsSupp: paiementsSupp,
            periode_pret: periode_pret,
            paiements_par_an: paiements_par_an,
            nombre_paiements_planifies: nombre_paiements_planifies,
            paiement_programme: paiement_programme
          };
          for (var increment = 1; increment <= nombre_paiements_planifies; increment++) {
            var _plans$at;
            var paymentIndex = increment - 1;
            var previousPaymentIndex = paymentIndex - 1;
            var previousPlan = increment > 1 ? plans[previousPaymentIndex] : null;
            var numero_paiement = increment;
            // =SI([@[N° PAIEMENT]]<>"";FIN.MOIS(DateDébutPrêt;LIGNE([@[N° PAIEMENT]])-LIGNE(ÉchéancierPaiement[[#En-têtes];[N° PAIEMENT]])-2)+JOUR(DateDébutPrêt);"")
            var date_echeance = null;
            var solde_depart = montant_du_pret;
            if (increment > 1) solde_depart = (_plans$at = plans.at(paymentIndex - 1)) === null || _plans$at === void 0 ? void 0 : _plans$at.solde_final;
            var paiement_supplementaire = 0;
            if (paiement_programme + paiementsSupp < solde_depart) {
              paiement_supplementaire = paiementsSupp;
            } else if (solde_depart - paiement_programme > 0) {
              paiement_supplementaire = solde_depart - paiement_programme;
            } else {
              paiement_supplementaire = 0;
            }

            // =SI([@[N° PAIEMENT]]<>"";SI([@[PAIEMENT PROGRAMMÉ]]+[@[PAIEMENT SUPPLÉMENTAIRE]]<=[@[SOLDE DE DÉPART]];[@[PAIEMENT PROGRAMMÉ]]+[@[PAIEMENT SUPPLÉMENTAIRE]];[@[SOLDE DE DÉPART]]);"")
            var paiement_total = 0;
            var totalPayment = paiement_programme + paiement_supplementaire;
            if (totalPayment <= solde_depart) {
              paiement_total = totalPayment;
            } else {
              paiement_total = solde_depart;
            }

            // =SI([@[N° PAIEMENT]]<>"";[@[SOLDE DE DÉPART]]*(TauxIntérêt/PaiementsParAn);"")
            var interets = solde_depart * (taux_interet / paiements_par_an);

            // =SI([@[N° PAIEMENT]]<>"";[@[PAIEMENT TOTAL]]-[@INTÉRÊTS];"")
            var principal = paiement_total - interets;

            // =SI([@[N° PAIEMENT]]<>"";SI([@[PAIEMENT PROGRAMMÉ]]+[@[PAIEMENT SUPPLÉMENTAIRE]]<=[@[SOLDE DE DÉPART]];[@[SOLDE DE DÉPART]]-[@PRINCIPAL];0);"")
            var solde_final = null;
            var finalPayment = paiement_programme + paiement_supplementaire;

            // solde_final = finalPayment <= solde_depart ? solde_depart - principal : 0;

            if (finalPayment <= solde_depart) {
              solde_final = solde_depart - principal;
            } else {
              solde_final = 0;
            }

            // =SI([@[N° PAIEMENT]]<>"";SOMME(INDEX([INTÉRÊTS];1;1):[@INTÉRÊTS]);"")
            var interets_cumules = interets;
            if (increment > 1) interets_cumules += previousPlan === null || previousPlan === void 0 ? void 0 : previousPlan.interets_cumules;

            // const startDate = new Date(payment['DateDébutPrêt']);
            // const dueDate = new Date(startDate.getFullYear(), startDate.getMonth() + paymentIndex - 1, startDate.getDate());

            // date_echeance = dueDate.toDateString(); // Or format as needed

            //
            plans.push({
              numero_paiement: numero_paiement,
              date_echeance: date_echeance,
              solde_depart: solde_depart,
              paiement_programme: paiement_programme,
              paiement_supplementaire: paiement_supplementaire,
              paiement_total: paiement_total,
              principal: principal,
              interets: interets,
              solde_final: solde_final,
              interets_cumules: interets_cumules
            });
          }

          // const total_des_interets = reduce((acc, curr) => acc + curr?.total ?? 0 , 0)
          var total_des_interets = (_plans$at2 = plans.at(-1)) === null || _plans$at2 === void 0 ? void 0 : _plans$at2.interets_cumules;
          amortissement = _objectSpread(_objectSpread({}, amortissement), {}, {
            plans: plans,
            total_des_interets: total_des_interets
          });
          return amortissement;
        };
        // // this.$console.log("plan_amortissement")

        var plan_amortissement = function () {
          var plans = [];
          for (var increment = 1; increment <= nombre_echeance; increment++) {
            var _this5$formData, _this5$formData$paiem, _this5$formData2;
            var paymentIndex = increment - 1;
            var previousPaymentIndex = paymentIndex - 1;
            var previousPlan = increment > 1 ? plans[previousPaymentIndex] : null;
            var numero_paiement = increment;
            // =SI([@[N° PAIEMENT]]<>"";FIN.MOIS(DateDébutPrêt;LIGNE([@[N° PAIEMENT]])-LIGNE(ÉchéancierPaiement[[#En-têtes];[N° PAIEMENT]])-2)+JOUR(DateDébutPrêt);"")
            var date_echeance = null;
            var solde_depart = (_this5$formData = _this5.formData) === null || _this5$formData === void 0 ? void 0 : _this5$formData.montant_credit;
            if (increment > 1) {
              var _plans$at3;
              solde_depart = (_plans$at3 = plans.at(paymentIndex - 1)) === null || _plans$at3 === void 0 ? void 0 : _plans$at3.solde_final;
            }

            // =SI([@[N° PAIEMENT]]<>"";SI([@[PAIEMENT PROGRAMMÉ]]+PaiementsSupp<[@[SOLDE DE DÉPART]];PaiementsSupp;SI([@[SOLDE DE DÉPART]]-[@[PAIEMENT PROGRAMMÉ]]>0;[@[SOLDE DE DÉPART]]-[@[PAIEMENT PROGRAMMÉ]];0));"")
            var paiementsSupp = (_this5$formData$paiem = (_this5$formData2 = _this5.formData) === null || _this5$formData2 === void 0 ? void 0 : _this5$formData2.paiementsSupp) !== null && _this5$formData$paiem !== void 0 ? _this5$formData$paiem : 0;
            var paiement_supplementaire = 0;
            if (paiement_programme + paiementsSupp < solde_depart) {
              paiement_supplementaire = paiementsSupp;
            } else if (solde_depart - paiement_programme > 0) {
              paiement_supplementaire = solde_depart - paiement_programme;
            } else {
              paiement_supplementaire = 0;
            }

            // =SI([@[N° PAIEMENT]]<>"";SI([@[PAIEMENT PROGRAMMÉ]]+[@[PAIEMENT SUPPLÉMENTAIRE]]<=[@[SOLDE DE DÉPART]];[@[PAIEMENT PROGRAMMÉ]]+[@[PAIEMENT SUPPLÉMENTAIRE]];[@[SOLDE DE DÉPART]]);"")
            var paiement_total = 0;
            var totalPayment = paiement_programme + paiement_supplementaire;
            if (totalPayment <= solde_depart) {
              paiement_total = totalPayment;
            } else {
              paiement_total = solde_depart;
            }

            // =SI([@[N° PAIEMENT]]<>"";[@[SOLDE DE DÉPART]]*(TauxIntérêt/PaiementsParAn);"")
            var interets = null;
            interets = solde_depart * (taux_interet / nombre_echeance);

            // =SI([@[N° PAIEMENT]]<>"";[@[PAIEMENT TOTAL]]-[@INTÉRÊTS];"")
            var principal = null;
            principal = paiement_total - interets;

            // =SI([@[N° PAIEMENT]]<>"";SI([@[PAIEMENT PROGRAMMÉ]]+[@[PAIEMENT SUPPLÉMENTAIRE]]<=[@[SOLDE DE DÉPART]];[@[SOLDE DE DÉPART]]-[@PRINCIPAL];0);"")
            var solde_final = null;
            var finalPayment = paiement_programme + paiement_supplementaire;
            if (finalPayment <= solde_depart) {
              solde_final = solde_depart - principal;
            } else {
              solde_final = 0;
            }

            // =SI([@[N° PAIEMENT]]<>"";SOMME(INDEX([INTÉRÊTS];1;1):[@INTÉRÊTS]);"")
            var interets_cumules = interets;

            // let sum = 0;
            // for (let i = 0; i <= paymentIndex; i++) {
            //     sum += plans[i]?.interets;
            // }
            // interets_cumules = sum;

            if (increment > 1) {
              interets_cumules += previousPlan === null || previousPlan === void 0 ? void 0 : previousPlan.interets_cumules;
            }

            // const startDate = new Date(payment['DateDébutPrêt']);
            // const dueDate = new Date(startDate.getFullYear(), startDate.getMonth() + paymentIndex - 1, startDate.getDate());

            // date_echeance = dueDate.toDateString(); // Or format as needed

            //
            plans.push({
              numero_paiement: numero_paiement,
              date_echeance: date_echeance,
              solde_depart: solde_depart,
              paiement_programme: paiement_programme,
              paiement_supplementaire: paiement_supplementaire,
              paiement_total: paiement_total,
              principal: principal,
              interets: interets,
              solde_final: solde_final,
              interets_cumules: interets_cumules
            });
          }
          return plans;
        }();
        // // this.$console.log("plan_amortissement", plan_amortissement?.length)

        if ((plan_amortissement === null || plan_amortissement === void 0 ? void 0 : plan_amortissement.length) >= this.MAX_AMORTISSEMENT_LINES) {
          var _this$formData22;
          this.errorMessage = "Lignes d'amortissement trop nombreuses (" + (plan_amortissement === null || plan_amortissement === void 0 ? void 0 : plan_amortissement.length) + ")";
          this.errorHint = "Veuillez vérifier le montant crédit (" + ((_this$formData22 = this.formData) === null || _this$formData22 === void 0 ? void 0 : _this$formData22.montant_credit) + this.CURRENCY_CODE + ")";
          return;
        }
        //
        var amortissement2 = function () {
          var montant_du_pret = montant_echeance;
          var amortissement_ = calcPlanAmortissement(montant_du_pret);
          return amortissement_;
        }();
        if ((amortissement2 === null || amortissement2 === void 0 ? void 0 : amortissement2.length) >= this.MAX_AMORTISSEMENT_LINES) {
          var _this$formData23;
          this.errorMessage = "Lignes d'amortissement trop nombreuses (" + (amortissement2 === null || amortissement2 === void 0 ? void 0 : amortissement2.length) + ")";
          this.errorHint = "Veuillez vérifier le montant crédit (" + ((_this$formData23 = this.formData) === null || _this$formData23 === void 0 ? void 0 : _this$formData23.montant_credit) + ")";
          return;
        }
        var plan_amortissement2 = amortissement2 === null || amortissement2 === void 0 ? void 0 : amortissement2.plans;
        // // this.$console.log("plan_amortissement2", plan_amortissement2)

        //
        var revenus_generes_par_les_cashflow = function () {
          var revenus = [];
          for (var increment = 1; increment <= nombre_echeance; increment++) {
            // const frais_de_dossier = montant_echeance * (D16 / 100);
            var _frais_de_dossier = montant_echeance * D16;
            I7 = amortissement2 === null || amortissement2 === void 0 ? void 0 : amortissement2.total_des_interets;
            E13 = nombre_echeance;
            var K6 = increment;
            var _interet_annuel = I7 / E10 * ((E13 - K6) / 12);

            // const autres_revenus_sur_credit = montant_echeance * (D18 / 100);
            // const prime_de_risque = montant_echeance * (D17 / 100);
            var _autres_revenus_sur_credit = montant_echeance * D18;
            var _prime_de_risque = montant_echeance * D17;
            var total = _frais_de_dossier + _interet_annuel + _autres_revenus_sur_credit + _prime_de_risque;
            revenus.push({
              frais_de_dossier: _frais_de_dossier,
              interet_annuel: _interet_annuel,
              prime_de_risque: _prime_de_risque,
              autres_revenus_sur_credit: _autres_revenus_sur_credit,
              total: total
            });
          }
          return revenus;
        }();
        // // this.$console.log("revenus_generes_par_les_cashflow", revenus_generes_par_les_cashflow);
        //
        var total_revenus_generes_par_les_cashflow = function () {
          var echeance_to_omit_index = 0;
          // somme des totaux des revenus_generes_par_les_cashflow
          return revenus_generes_par_les_cashflow.reduce(function (sum, item) {
            var _item$total;
            return sum += echeance_to_omit_index == (revenus_generes_par_les_cashflow === null || revenus_generes_par_les_cashflow === void 0 ? void 0 : revenus_generes_par_les_cashflow.indexOf(item)) ? 0 : (_item$total = item === null || item === void 0 ? void 0 : item.total) !== null && _item$total !== void 0 ? _item$total : 0;
          }, 0);
        }();
        // // this.$console.log("total_revenus_generes_par_les_cashflow", total_revenus_generes_par_les_cashflow);

        //
        Q206 = total_revenus_generes_par_les_cashflow;
        var revenus_annuels_sur_cashflow = E10 < 12 ? Q206 : Q206 / (E10 / 12);
        // // this.$console.log("revenus_annuels_sur_cashflow", revenus_annuels_sur_cashflow)

        //
        var revenu_cashflow = E10 < 12 ? Q206 : Q206 / (E10 / 12);
        // // this.$console.log("revenu_cashflow", revenu_cashflow)

        //
        var total_des_interets = paiement_programme * nombre_echeance - ((_this$formData24 = this.formData) === null || _this$formData24 === void 0 ? void 0 : _this$formData24.montant_credit);
        // // this.$console.log("total_des_interets", total_des_interets)
        E23 = total_des_interets;
        //
        var interet_annuel = E10 < 12 ? E23 * (12 / E10) : E23 / (E10 / 12);
        // // this.$console.log("interet_annuel", interet_annuel)
        E15 = interet_annuel;
        //
        Q206 = total_revenus_generes_par_les_cashflow;
        var total_revenus_sur_la_duree_du_credit = E23 + E16 + E17 + E18 + Q206;
        // // this.$console.log("total_revenus_sur_la_duree_du_credit", total_revenus_sur_la_duree_du_credit)
        //

        E19 = revenus_annuels_sur_cashflow;
        var total_revenus_annuel = E10 <= 12 ? E15 + E16 + E17 + E18 + E19 : E15 + (E16 + E17 + E18) / (E10 / 12) + E19;
        // // this.$console.log("total_revenus_annuel", total_revenus_annuel)
        E20 = total_revenus_annuel;
        //
        var rentabilite_brute_annuelle = E20 / E7;
        // // this.$console.log("rentabilite_brute_annuelle", rentabilite_brute_annuelle)
        //
        var pourcentage_rentabilite_brute_annuelle = !!rentabilite_brute_annuelle ? rentabilite_brute_annuelle * 100 : 0;
        // // this.$console.log("pourcentage_rentabilite_brute_annuelle", pourcentage_rentabilite_brute_annuelle)
        E24 = pourcentage_rentabilite_brute_annuelle;

        //
        var calcTauxDeCoutMoyenDesRessources = function calcTauxDeCoutMoyenDesRessources(code_filiale) {
          if (!code_filiale) return null;
          // TODO store this static data in database
          var data = {
            CFN_BF: 5.06,
            CFB_CG: 4.77,
            CFN_CI: 4.84,
            CFN_CIV: 4.84,
            CFN_GB: 5.54,
            CFN_GN: 7.36,
            CFN_ML: 5.07,
            CFN_SN: 5.3,
            CFN_TG: 4.88,
            FINL: 5.32
          };
          try {
            var _data$code_filiale;
            var result = (_data$code_filiale = data[code_filiale]) !== null && _data$code_filiale !== void 0 ? _data$code_filiale : null;
            result = result != null ? result / 100 : null;
            return result;
          } catch (error) {
            // // this.$console.log("xx calcTauxDeCoutMoyenDesRessources", error)
            return null;
          }
        };
        //
        var cout_moyen_des_ressources = calcTauxDeCoutMoyenDesRessources(E1) * (E7 - E8) / E7;
        // // this.$console.log("cout_moyen_des_ressources", cout_moyen_des_ressources)
        //
        var pourcentage_cout_moyen_des_ressources = !!cout_moyen_des_ressources ? cout_moyen_des_ressources * 100 : 0;
        // // this.$console.log("pourcentage_cout_moyen_des_ressources", pourcentage_cout_moyen_des_ressources)
        E25 = pourcentage_cout_moyen_des_ressources;

        //
        var calcTauxDeCoutDuRisqueEspereAjustParTypesClients = function calcTauxDeCoutDuRisqueEspereAjustParTypesClients(code_filiale, type_de_client) {
          if (!code_filiale || !type_de_client) return null;
          //
          var data = {
            CFN_BF: {
              // "Commerçant et Entrepreneurs individuels" : 0.95,
              // "PME Formelles" : 2.04,
              // "Retails (Particuliers-Salariés-Retraités)" : 1.56,
              // "Mutuelles-Associations-ONG" : 0.00,
              // "Professions liberales" : 0.00,
              // "Total general" : 0.91,
              commercant_et_entrepreneurs_individuels: 0.95,
              pme_formelles: 2.04,
              retails_particuliers_salaries_retraites: 1.56,
              mutuelles_associations_ong: 0.0,
              professions_liberales: 0.0,
              total_general: 0.91
            },
            CFB_CG: {
              commercant_et_entrepreneurs_individuels: 2.08,
              pme_formelles: 2.07,
              retails_particuliers_salaries_retraites: 2.97,
              mutuelles_associations_ong: 0.9,
              professions_liberales: 0.9,
              total_general: 1.78
            },
            CFN_CI: {
              commercant_et_entrepreneurs_individuels: 2.99,
              pme_formelles: 2.7,
              retails_particuliers_salaries_retraites: 4.15,
              mutuelles_associations_ong: 1.9,
              professions_liberales: 1.9,
              total_general: 2.73
            },
            CFN_CIV: {
              commercant_et_entrepreneurs_individuels: 2.99,
              pme_formelles: 2.7,
              retails_particuliers_salaries_retraites: 4.15,
              mutuelles_associations_ong: 1.9,
              professions_liberales: 1.9,
              total_general: 2.73
            },
            CFN_GB: {
              commercant_et_entrepreneurs_individuels: 1.81,
              pme_formelles: 1.33,
              retails_particuliers_salaries_retraites: 1.59,
              mutuelles_associations_ong: 2.7,
              professions_liberales: 0.9,
              total_general: 1.67
            },
            CFN_GN: {
              commercant_et_entrepreneurs_individuels: 2.13,
              pme_formelles: 2.3,
              retails_particuliers_salaries_retraites: 3.15,
              mutuelles_associations_ong: 1.0,
              professions_liberales: 1.0,
              total_general: 1.92
            },
            CFN_ML: {
              commercant_et_entrepreneurs_individuels: 1.61,
              pme_formelles: 1.69,
              retails_particuliers_salaries_retraites: 1.18,
              mutuelles_associations_ong: 2.37,
              professions_liberales: 0.77,
              total_general: 1.52
            },
            CFN_SN: {
              commercant_et_entrepreneurs_individuels: 2.94,
              pme_formelles: 3.18,
              retails_particuliers_salaries_retraites: 4.21,
              mutuelles_associations_ong: 2.2,
              professions_liberales: 0.9,
              total_general: 2.69
            },
            CFN_TG: {
              commercant_et_entrepreneurs_individuels: 1.35,
              pme_formelles: 1.7,
              retails_particuliers_salaries_retraites: 1.57,
              mutuelles_associations_ong: 0.9,
              professions_liberales: 0.9,
              total_general: 1.28
            },
            FINL: {
              commercant_et_entrepreneurs_individuels: 1.92,
              pme_formelles: 0.96,
              retails_particuliers_salaries_retraites: 0.91,
              mutuelles_associations_ong: 1.56,
              professions_liberales: 1.56,
              total_general: 1.38
            }
          };
          try {
            var _data$code_filiale2, _info$type_de_client;
            var info = (_data$code_filiale2 = data[code_filiale]) !== null && _data$code_filiale2 !== void 0 ? _data$code_filiale2 : null;
            var result = (_info$type_de_client = info[type_de_client]) !== null && _info$type_de_client !== void 0 ? _info$type_de_client : null;
            return result;
          } catch (error) {
            // // this.$console.log("xx calcTauxDeCoutDuRisqueEspereAjustParTypesClients", error)

            return null;
          }
        };
        //
        var taux_de_cout_du_risque_espere = calcTauxDeCoutDuRisqueEspereAjustParTypesClients(E1, E6);
        // // this.$console.log("taux_de_cout_du_risque_espere", taux_de_cout_du_risque_espere)
        E26 = taux_de_cout_du_risque_espere;
        //
        var pourcentage_taux_de_cout_du_risque_espere = (taux_de_cout_du_risque_espere !== null && taux_de_cout_du_risque_espere !== void 0 ? taux_de_cout_du_risque_espere : 0) * 100;
        // // this.$console.log("pourcentage_taux_de_cout_du_risque_espere", pourcentage_taux_de_cout_du_risque_espere)
        //
        var rentabilite_nette_annuelle = E24 - E26 - E25;
        // // this.$console.log("rentabilite_nette_annuelle", rentabilite_nette_annuelle)
        E27 = rentabilite_nette_annuelle;
        var pourcentage_rentabilite_nette_annuelle = rentabilite_nette_annuelle;
        // // this.$console.log("pourcentage_rentabilite_nette_annuelle", pourcentage_rentabilite_nette_annuelle)

        var rentabilite_status = function () {
          if (E1 == null || E27 == null) return null;
          var result;
          // TODO refractor lists as key val array
          if (["CFN_CIV", "CFN_CI", "CFN_BF", "CFN_ML", "CFN_SN", "FINL", "CFN_TG"].includes(E1) && E27 < 0.1) {
            result = _this5.DATA_CONFIG.NEGATIVE_STATUS_TEXT;
          } else if (["CFN_GB", "CFN_CG", "CFN_GN"].includes(E1) && E27 < 0.15) {
            result = _this5.DATA_CONFIG.NEGATIVE_STATUS_TEXT;
          } else {
            result = _this5.DATA_CONFIG.POSITIVE_STATUS_TEXT;
          }
          return result;
        }();
        // // this.$console.log("rentabilite_status", rentabilite_status)

        this.data = _objectSpread(_objectSpread({}, this.data), {}, {
          amortissement2: amortissement2,
          autres_revenus_sur_credit: autres_revenus_sur_credit,
          cout_moyen_des_ressources: cout_moyen_des_ressources,
          frais_de_dossier: frais_de_dossier,
          interet_annuel: interet_annuel.toFixed(),
          montant_echeance: montant_echeance.toFixed(),
          nombre_echeance: nombre_echeance,
          nombre_paiements_planifies: nombre_paiements_planifies,
          paiement_programme: paiement_programme,
          paiements_par_an: paiements_par_an,
          periode_pret: periode_pret,
          plan_amortissement: plan_amortissement,
          plan_amortissement2: plan_amortissement2,
          pourcentage_cout_moyen_des_ressources: pourcentage_cout_moyen_des_ressources.toFixed(2),
          pourcentage_rentabilite_brute_annuelle: pourcentage_rentabilite_brute_annuelle.toFixed(2),
          pourcentage_rentabilite_nette_annuelle: pourcentage_rentabilite_nette_annuelle.toFixed(2),
          pourcentage_taux_de_cout_du_risque_espere: pourcentage_taux_de_cout_du_risque_espere.toFixed(2),
          prime_de_risque: prime_de_risque,
          rentabilite_brute_annuelle: rentabilite_brute_annuelle,
          rentabilite_nette_annuelle: rentabilite_nette_annuelle,
          rentabilite_status: rentabilite_status,
          revenus_generes_par_les_cashflow: revenus_generes_par_les_cashflow,
          revenus_annuels_sur_cashflow: revenus_annuels_sur_cashflow.toFixed(),
          revenu_cashflow: revenu_cashflow,
          taux_de_cout_du_risque_espere: taux_de_cout_du_risque_espere,
          taux_interet: taux_interet,
          total_des_interets: total_des_interets,
          total_revenus_annuel: total_revenus_annuel.toFixed(),
          total_revenus_generes_par_les_cashflow: total_revenus_generes_par_les_cashflow.toFixed(2),
          total_revenus_sur_la_duree_du_credit: total_revenus_sur_la_duree_du_credit.toFixed()
          // VPM,
        });
        var config = {
          I7: I7,
          E13: E13,
          E23: E23,
          E16: E16,
          E17: E17,
          E18: E18,
          Q206: Q206,
          E15: E15,
          E19: E19,
          E20: E20,
          E24: E24,
          E25: E25,
          E26: E26,
          E27: E27,
          //
          E7: E7,
          E1: E1,
          E8: E8,
          E6: E6,
          E10: E10,
          E11: E11,
          D16: D16,
          D17: D17,
          D18: D18
        };

        // // this.$console.log("DATA", this.data)
        // // this.$console.log("CONFIG", config)
        // // this.$console.log("FORM", this.formData)
      } catch (error) {
        this.errorMessage = "Erreur";
      } finally {
        this.isComputing = false;
      }
      try {
        this.autosavingRenta();
      } catch (error) {
        // this.$console.log("xx error autosaving", error);
      }
    },
    formatFixed: function formatFixed(val) {
      var point = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
      return val === null || val === void 0 ? void 0 : val.toFixed(point);
    },
    formatRound: function formatRound(val) {
      return Math.ceil(val);
    },
    initData: function initData() {
      var _arguments = arguments,
        _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _ref3, _ref3$from_restart, from_restart, _this6$dossier_credit, _this6$dashboardInfo$, _this6$dashboardInfo, _mode_payment_indexer, _depot_de_garantie, _montant_credit, _this6$dossier_credit9, _ref7, _parsc$taux_modififie, _ref8, _pfdd$taux_modififie, _ref9, _ppdr$taux_modififie, _this6$DATA_CONFIG$ta, _this6$DATA_CONFIG4, _this6$dossier_credit2, credTbKey, credTable, _this6$dossier_credit5, _this6$dossier_credit6, _this6$dossier_credit7, _this6$dossier_credit8, code_filiale, _ref5, depot_de_garantie, duree_credit, montant_credit, mode_paiement, frais, duree_mois, mode_payment_indexer, mode_remboursement, _ref6, type_de_client, parsc, pourcentage_autres_revenus_sur_credit, pfdd, pourcentage_frais_de_dossier, ppdr, pourcentage_prime_de_risque, taux_interet_annuel, hasError, _this6$DATA_CONFIG5;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _ref3 = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : {}, _ref3$from_restart = _ref3.from_restart, from_restart = _ref3$from_restart === void 0 ? false : _ref3$from_restart;
              if (!_this6.isLoadingPage) {
                _context2.next = 3;
                break;
              }
              return _context2.abrupt("return");
            case 3:
              if (!_this6.isLoading) {
                _context2.next = 5;
                break;
              }
              return _context2.abrupt("return");
            case 5:
              _this6.errorMessage = null;
              _this6.errorHint = null;
              // Check if dossier has rentacred then override with actual dossier data if different
              _this6.isLoading = true;
              _context2.prev = 8;
              if (!!((_this6$dossier_credit = _this6.dossier_credit) !== null && _this6$dossier_credit !== void 0 && _this6$dossier_credit.rentacred)) {
                // if(this.dossier_credit?.rentacred?.last_updated_at < this.dossier_credit?.last_modif_date){
                _this6.data = _objectSpread({}, (_this6$dossier_credit2 = _this6.dossier_credit) === null || _this6$dossier_credit2 === void 0 ? void 0 : _this6$dossier_credit2.rentacred);
                // this.formData = {
                //     ...this.dossier_credit?.rentacred
                // }
                _this6.formData = function (_this6$dossier_credit3, _this6$dossier_credit4) {
                  var _ref4 = (_this6$dossier_credit3 = (_this6$dossier_credit4 = _this6.dossier_credit) === null || _this6$dossier_credit4 === void 0 ? void 0 : _this6$dossier_credit4.rentacred) !== null && _this6$dossier_credit3 !== void 0 ? _this6$dossier_credit3 : {},
                    code_filiale = _ref4.code_filiale,
                    depot_de_garantie = _ref4.depot_de_garantie,
                    duree_mois = _ref4.duree_mois,
                    mode_remboursement = _ref4.mode_remboursement,
                    mode_paiement = _ref4.mode_paiement,
                    montant_credit = _ref4.montant_credit,
                    pourcentage_autres_revenus_sur_credit = _ref4.pourcentage_autres_revenus_sur_credit,
                    pourcentage_frais_de_dossier = _ref4.pourcentage_frais_de_dossier,
                    pourcentage_prime_de_risque = _ref4.pourcentage_prime_de_risque,
                    taux_interet_annuel = _ref4.taux_interet_annuel,
                    type_de_client = _ref4.type_de_client;
                  return {
                    code_filiale: code_filiale,
                    depot_de_garantie: depot_de_garantie,
                    duree_mois: duree_mois,
                    mode_remboursement: mode_remboursement,
                    mode_paiement: mode_paiement,
                    montant_credit: montant_credit,
                    pourcentage_autres_revenus_sur_credit: pourcentage_autres_revenus_sur_credit,
                    pourcentage_frais_de_dossier: pourcentage_frais_de_dossier,
                    pourcentage_prime_de_risque: pourcentage_prime_de_risque,
                    taux_interet_annuel: taux_interet_annuel,
                    type_de_client: type_de_client
                  };
                }();
              }
              credTbKey = _this6.determineCredPubTables(_this6.dossier_credit["applied_templ_name"]);
              credTable = null;
              if (_this6.niveau == "ARC") {
                credTable = _objectSpread(_objectSpread({}, (_this6$dossier_credit5 = _this6.dossier_credit) === null || _this6$dossier_credit5 === void 0 ? void 0 : _this6$dossier_credit5.cred_pub_tb_47), {}, {
                  montant_credit: (_this6$dossier_credit6 = _this6.dossier_credit) === null || _this6$dossier_credit6 === void 0 || (_this6$dossier_credit6 = _this6$dossier_credit6.cred_pub_tb_47) === null || _this6$dossier_credit6 === void 0 ? void 0 : _this6$dossier_credit6.montant_credit_propo_analyste,
                  duree_credit: (_this6$dossier_credit7 = _this6.dossier_credit) === null || _this6$dossier_credit7 === void 0 || (_this6$dossier_credit7 = _this6$dossier_credit7.cred_pub_tb_47) === null || _this6$dossier_credit7 === void 0 ? void 0 : _this6$dossier_credit7.duree_credit_propo_analyste,
                  mode_paiement: (_this6$dossier_credit8 = _this6.dossier_credit) === null || _this6$dossier_credit8 === void 0 || (_this6$dossier_credit8 = _this6$dossier_credit8.cred_pub_tb_47) === null || _this6$dossier_credit8 === void 0 ? void 0 : _this6$dossier_credit8.mode_paiement_analyste
                });
              } else {
                credTable = _this6.dossier_credit[credTbKey[1]];
              }

              // console.log('credTable',credTable)

              // const code_filiale = this.authUser?.filiale?.replace(/\s/g, "_") ?? null;
              code_filiale = (_this6$dashboardInfo$ = (_this6$dashboardInfo = _this6.dashboardInfo) === null || _this6$dashboardInfo === void 0 || (_this6$dashboardInfo = _this6$dashboardInfo.filiale) === null || _this6$dashboardInfo === void 0 ? void 0 : _this6$dashboardInfo.replace(/\s/g, "_")) !== null && _this6$dashboardInfo$ !== void 0 ? _this6$dashboardInfo$ : null; // Fetch data from dossier credit
              _ref5 = credTable !== null && credTable !== void 0 ? credTable : {}, depot_de_garantie = _ref5.garantie, duree_credit = _ref5.duree_credit, montant_credit = _ref5.montant_credit, mode_paiement = _ref5.mode_paiement, frais = _ref5.frais;
              duree_mois = parseInt(duree_credit);
              if (!(duree_mois > _this6.MAX_DUREE_CREDIT_IN_MONTHS)) {
                _context2.next = 23;
                break;
              }
              if (!from_restart) {
                _context2.next = 20;
                break;
              }
              _context2.next = 20;
              return _this6.$sleep(500);
            case 20:
              _this6.errorMessage = "La durée du crédit (" + duree_credit + " mois)  est invalide !";
              _this6.errorHint = "Durée maximale autorisée: " + _this6.MAX_DUREE_CREDIT_IN_MONTHS + " mois";
              return _context2.abrupt("return");
            case 23:
              // this.$console.log("durree mois parsed", "duree_credit", duree_credit,  "duree_mois", duree_mois);
              // 1,2,3,4,5,6,12
              mode_payment_indexer = {
                'Mensuelle': 1,
                'Bi-mensuel': 2,
                'Trimestriel': 3,
                'Semestriel': 6,
                'Annuel': 12,
                'In fine': duree_mois
              }; // // this.$console.log("mode_payment_indexer", mode_payment_indexer)
              mode_remboursement = (_mode_payment_indexer = mode_payment_indexer[mode_paiement]) !== null && _mode_payment_indexer !== void 0 ? _mode_payment_indexer : null;
              depot_de_garantie = parseInt((_depot_de_garantie = depot_de_garantie) === null || _depot_de_garantie === void 0 || (_depot_de_garantie = _depot_de_garantie.toString()) === null || _depot_de_garantie === void 0 ? void 0 : _depot_de_garantie.replace(/\s/gi, ''));
              montant_credit = parseInt((_montant_credit = montant_credit) === null || _montant_credit === void 0 || (_montant_credit = _montant_credit.toString()) === null || _montant_credit === void 0 ? void 0 : _montant_credit.replace(/\s/gi, ''));

              // this.$console.log("dossier tb_0", this.dossier_credit[credTbKey[0]])
              _ref6 = (_this6$dossier_credit9 = _this6.dossier_credit[credTbKey[0]]) !== null && _this6$dossier_credit9 !== void 0 ? _this6$dossier_credit9 : {}, type_de_client = _ref6.type_de_client; // this.$console.log("type_de_client", type_de_client)
              // const type_de_client = this.formData?.type_de_client ?? null;
              //
              parsc = frais === null || frais === void 0 ? void 0 : frais.find(function (itm) {
                var _this6$DATA_CONFIG;
                return (itm === null || itm === void 0 ? void 0 : itm.libelle_taux) == ((_this6$DATA_CONFIG = _this6.DATA_CONFIG) === null || _this6$DATA_CONFIG === void 0 || (_this6$DATA_CONFIG = _this6$DATA_CONFIG.KEYS) === null || _this6$DATA_CONFIG === void 0 ? void 0 : _this6$DATA_CONFIG.pourcentage_autres_revenus_sur_credit);
              });
              pourcentage_autres_revenus_sur_credit = (_ref7 = (_parsc$taux_modififie = parsc === null || parsc === void 0 ? void 0 : parsc.taux_modififie) !== null && _parsc$taux_modififie !== void 0 ? _parsc$taux_modififie : parsc === null || parsc === void 0 ? void 0 : parsc.taux_initial) !== null && _ref7 !== void 0 ? _ref7 : 0; // // this.$console.log("pourcentage_autres_revenus_sur_credit", pourcentage_autres_revenus_sur_credit)
              //
              pfdd = frais === null || frais === void 0 ? void 0 : frais.find(function (itm) {
                var _this6$DATA_CONFIG2;
                return (itm === null || itm === void 0 ? void 0 : itm.libelle_taux) == ((_this6$DATA_CONFIG2 = _this6.DATA_CONFIG) === null || _this6$DATA_CONFIG2 === void 0 || (_this6$DATA_CONFIG2 = _this6$DATA_CONFIG2.KEYS) === null || _this6$DATA_CONFIG2 === void 0 ? void 0 : _this6$DATA_CONFIG2.pourcentage_frais_de_dossier);
              });
              pourcentage_frais_de_dossier = (_ref8 = (_pfdd$taux_modififie = pfdd === null || pfdd === void 0 ? void 0 : pfdd.taux_modififie) !== null && _pfdd$taux_modififie !== void 0 ? _pfdd$taux_modififie : pfdd === null || pfdd === void 0 ? void 0 : pfdd.taux_initial) !== null && _ref8 !== void 0 ? _ref8 : 0; // // this.$console.log("pourcentage_frais_de_dossier", pourcentage_frais_de_dossier)
              //
              ppdr = frais === null || frais === void 0 ? void 0 : frais.find(function (itm) {
                var _this6$DATA_CONFIG3;
                return (itm === null || itm === void 0 ? void 0 : itm.libelle_taux) == ((_this6$DATA_CONFIG3 = _this6.DATA_CONFIG) === null || _this6$DATA_CONFIG3 === void 0 || (_this6$DATA_CONFIG3 = _this6$DATA_CONFIG3.KEYS) === null || _this6$DATA_CONFIG3 === void 0 ? void 0 : _this6$DATA_CONFIG3.pourcentage_prime_de_risque);
              });
              pourcentage_prime_de_risque = (_ref9 = (_ppdr$taux_modififie = ppdr === null || ppdr === void 0 ? void 0 : ppdr.taux_modififie) !== null && _ppdr$taux_modififie !== void 0 ? _ppdr$taux_modififie : ppdr === null || ppdr === void 0 ? void 0 : ppdr.taux_initial) !== null && _ref9 !== void 0 ? _ref9 : 0; // // this.$console.log("pourcentage_prime_de_risque", pourcentage_prime_de_risque)
              taux_interet_annuel = (_this6$DATA_CONFIG$ta = (_this6$DATA_CONFIG4 = _this6.DATA_CONFIG) === null || _this6$DATA_CONFIG4 === void 0 ? void 0 : _this6$DATA_CONFIG4.taux_interet_annuel) !== null && _this6$DATA_CONFIG$ta !== void 0 ? _this6$DATA_CONFIG$ta : 0; // // this.$console.log("taux_interet_annuel", taux_interet_annuel)
              _this6.formData = _objectSpread(_objectSpread({}, _this6.formData), {}, {
                code_filiale: code_filiale,
                depot_de_garantie: depot_de_garantie,
                duree_mois: duree_mois,
                mode_remboursement: mode_remboursement,
                mode_paiement: mode_paiement,
                montant_credit: montant_credit,
                pourcentage_autres_revenus_sur_credit: pourcentage_autres_revenus_sur_credit,
                pourcentage_frais_de_dossier: pourcentage_frais_de_dossier,
                pourcentage_prime_de_risque: pourcentage_prime_de_risque,
                taux_interet_annuel: taux_interet_annuel,
                type_de_client: type_de_client
              });
              hasError = false;
              _this6.errorHint = "Veuillez vous assurer d'avoir bien renseigné les caractéristiques du prêt ";
              if (code_filiale == null || code_filiale == undefined || code_filiale == '') {
                _this6.errorMessage = "Le Code filiale (" + code_filiale + ") est invalide.";
                _this6.errorHint = "Veuillez relancer le rentacred";
                hasError = true;
              }
              if (depot_de_garantie == null || depot_de_garantie == undefined || depot_de_garantie == '') {
                _this6.errorMessage = "Le dépot de garantie (" + depot_de_garantie + ") est invalide.";
                hasError = true;
              }
              if (duree_mois == null || duree_mois == undefined || duree_mois == '') {
                _this6.errorMessage = "la durée du crédit (" + duree_mois + ") est invalide.";
                hasError = true;
              }
              if (mode_remboursement == null || mode_remboursement == undefined || mode_remboursement == '') {
                _this6.errorMessage = "Le mode de remboursement (" + mode_remboursement + ") est invalide.";
                hasError = true;
              }
              if (montant_credit == null || montant_credit == undefined || montant_credit == '') {
                _this6.errorMessage = "Le montant credit (" + montant_credit + ") est invalide.";
                hasError = true;
              }
              if (!(type_de_client == null || type_de_client == undefined || type_de_client == '')) {
                _context2.next = 50;
                break;
              }
              if (!from_restart) {
                _context2.next = 47;
                break;
              }
              _context2.next = 47;
              return _this6.$sleep(500);
            case 47:
              _this6.errorMessage = "Le type de clientèle détaillé (" + type_de_client + ")  est invalide !";
              _this6.errorHint = "Veuillez renseigner le type de clientèle détaillé dans " + ((_this6$DATA_CONFIG5 = _this6.DATA_CONFIG) === null || _this6$DATA_CONFIG5 === void 0 ? void 0 : _this6$DATA_CONFIG5.T0_NAME);
              return _context2.abrupt("return");
            case 50:
              if (!hasError) {
                _context2.next = 55;
                break;
              }
              if (!from_restart) {
                _context2.next = 54;
                break;
              }
              _context2.next = 54;
              return _this6.$sleep(500);
            case 54:
              return _context2.abrupt("return");
            case 55:
              _this6.errorHint = null;
              // this.$console.log("initData RENTACRED formData", this.formData)

              _this6.computeRentaCred();
              _context2.next = 63;
              break;
            case 59:
              _context2.prev = 59;
              _context2.t0 = _context2["catch"](8);
              // this.$console.log("xx initData ", error);
              _this6.errorMessage = "Une erreur s'est produite";
              _this6.errorHint = null;
            case 63:
              _context2.prev = 63;
              _this6.isLoading = false;

              //
              return _context2.finish(63);
            case 66:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[8, 59, 63, 66]]);
      }))();
    },
    loadUserData: function loadUserData() {
      var _this7 = this;
      // // this.$console.log("RentaCred::loadUserData");
      // if(this.authUser){
      //     this.isLoadingPage = false;
      //     this.initData();
      //     return;
      // }
      //
      this.$axios.post("/api/user/dashboard2", {}).then(function (response) {
        _this7.authCheckUser = response.data;
      })["catch"](function (error) {})["finally"](function () {
        _this7.isLoadingPage = false;
        _this7.initData();
      });
    },
    send2Backend: function send2Backend(res) {
      var _this$dossier_credit2;
      // // this.$console.log("RentaCred::send2Backend");

      var authcheck = true;
      var user = res.data;
      var authcheckStatus = res.status;
      if (authcheckStatus === 401) {
        // // window.location.href = "/login";
        return;
      }
      if (!user) {
        alert("Unauthenticated");
        return;
      }
      this.$emit("autosaving");
      this.$axios.post(this.ebapisHost + "creditbuilder/api/v1/save-rentacred/", {
        cred_pub_key: (_this$dossier_credit2 = this.dossier_credit) === null || _this$dossier_credit2 === void 0 ? void 0 : _this$dossier_credit2.cred_pub_key,
        rentacred: this.rentacred,
        user: user
      }).then(function (response) {
        this.$emit("autosaving");
      }.bind(this))["catch"](function (error) {
        this.$Progress.finish();
        // this.$console.log(error);
      }.bind(this));
    },
    restartRentacred: function restartRentacred() {
      var _this$formData25;
      // this.$console.log("restartRentacred");
      this.initData({
        from_restart: true
      });
      if (!!((_this$formData25 = this.formData) !== null && _this$formData25 !== void 0 && _this$formData25.type_de_client)) {
        this.computeRentaCred();
      }
    },
    slugify: function slugify(str) {
      return str.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');
    },
    test: function test() {
      this.formData = {
        code_filiale: "CFN_SN",
        depot_de_garantie: 18750000,
        duree_mois: 12,
        mode_remboursement: 1,
        montant_credit: 125000000,
        pourcentage_autres_revenus_sur_credit: 0.00,
        pourcentage_frais_de_dossier: 3.00,
        pourcentage_prime_de_risque: 1.00,
        taux_interet_annuel: 18.00,
        type_de_client: "pme_formelles"
      };
      this.dossier_credit = true;
      this.computeRentaCred();
    },
    handleRentaCred: function handleRentaCred() {
      var _this$formData26;
      if (this.isLoading || this.isLoadingPage || this.isComputing) return;
      if (!!((_this$formData26 = this.formData) !== null && _this$formData26 !== void 0 && _this$formData26.type_de_client)) {
        this.computeRentaCred();
      }
    }
  },
  watch: {
    // this must be rewritten (reviewed by KF 12/05/2024)

    // dossier_credit: function (val){
    //     if(this.isLoading) return;
    //     if(this.isLoadingPage) return;
    //     if(!this.TEST_MODE){
    //         if(!!val){
    //             this.initData();
    //             if(!!this.formData?.type_de_client){
    //                 this.computeRentaCred("watchDossier");
    //             }
    //         }
    //     }
    // },
    formData: function formData(val) {
      var _this$formData27;
      if (this.isLoadingPage) return;
      if (this.isComputing) return;
      if (!!((_this$formData27 = this.formData) !== null && _this$formData27 !== void 0 && _this$formData27.type_de_client)) {
        // // this.$console.log("RentaCred:: oo formData?.type_de_client");
        this.computeRentaCred();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/urgentissimo/TU1.vue?vue&type=template&id=1bcd7c4f&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/urgentissimo/TU1.vue?vue&type=template&id=1bcd7c4f&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$encours, _vm$dossier_credit, _vm$dossier_credit2, _vm$dossier_credit3, _vm$dossier_credit4, _vm$dossier_credit5, _vm$dossier_credit$cr, _vm$dossier_credit$cr2, _vm$dossier_credit$cr3, _vm$dossier_credit$cr4, _vm$dossier_credit6, _vm$dossier_credit7, _vm$dossier_credit8, _vm$dossier_credit9, _vm$dossier_credit0, _vm$dossier_credit1, _vm$dossier_credit18, _vm$dossier_credit19, _vm$dossier_credit24, _vm$encours2, _vm$encours3, _vm$encours4, _vm$dossier_credit25, _vm$dossier_credit26, _vm$dossier_credit27;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {}, [_c("div", {
    staticClass: "row justify-content-center"
  }, [_vm.dossier_credit.tbs_in_use.includes("tb17001") ? _c("div", {
    staticClass: "row table-responsive",
    staticStyle: {
      "padding-top": ""
    }
  }, [_c("div", {
    staticClass: "head-memorandum-title mb-4",
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("\n                CARACTERISTIQUES DU PRET ")]), _vm._v(" "), _c("div", {
    staticClass: "card-body mb-2"
  }, [_vm.loadEncours ? _c("div", {
    staticClass: "d-flex justify-content-center text-center align-items-center text-muted py-4"
  }, [_vm._m(0)]) : _vm._e(), _vm._v(" "), ((_vm$encours = _vm.encours) === null || _vm$encours === void 0 ? void 0 : _vm$encours.nom_client) != null && _vm.loadEncours == false ? _c("div", {
    staticStyle: {
      "margin-top": "0px"
    },
    attrs: {
      id: "dashboard_client"
    }
  }, [_c("div", {
    staticClass: "card-header bg-white text-center d-flex justify-content-center"
  }, [_c("strong", [_vm._v("\n                            ENTREPRISE : " + _vm._s(_vm.encours.nom_client) + "\n                        ")]), _vm._v("\n                          — as of date :\n                        " + _vm._s(_vm.encours.asofdate) + "\n                    ")]), _vm._v(" "), _c("div", {
    staticClass: "card-body d-flex justify-content-end border rounded"
  }, [_c("div", {
    staticClass: "card-body col-4"
  }, [_c("div", {
    staticClass: "d-flex align-items-center",
    staticStyle: {
      "padding-left": "10px"
    }
  }, [_c("div", [_vm._m(1), _vm._v(" "), _c("h6", {
    staticClass: "my-1 text-danger"
  }, [_vm._v("\n                                        " + _vm._s(_vm._f("formatNumber")(_vm.encours.encours_montant)) + "\n                                    ")]), _vm._v(" "), _c("p", {
    staticClass: "my-1"
  }, [_vm._v("\n                                        #Prêts :\n                                        " + _vm._s(_vm._f("formatNumber")(_vm.encours.nbre_encours)) + "\n                                    ")])])])]), _vm._v(" "), _c("div", {
    staticClass: "card-body col-4"
  }, [_c("div", {
    staticClass: "d-flex align-items-center"
  }, [_c("div", [_vm._m(2), _vm._v(" "), _c("h6", {
    staticClass: "my-1 text-success"
  }, [_vm._v("\n                                        " + _vm._s(_vm._f("formatNumber")(_vm.encours.par_0)) + "\n                                    ")]), _vm._v(" "), _c("p", {
    staticClass: "my-1"
  }, [_vm._v("\n                                        #Prêts :\n                                        " + _vm._s(_vm._f("formatNumber")(_vm.encours.nbre_par_0)) + "\n                                    ")])])])]), _vm._v(" "), _c("div", {
    staticClass: "card-body col-4"
  }, [_c("div", {
    staticClass: "d-flex align-items-center"
  }, [_c("div", [_vm._m(3), _vm._v(" "), _c("h6", {
    staticClass: "my-1 text-info"
  }, [_vm._v("\n                                        " + _vm._s(_vm._f("formatNumber")(_vm.encours.par_30)) + "\n                                    ")]), _vm._v(" "), _c("p", {
    staticClass: "my-1"
  }, [_vm._v("\n                                        #Prêts :\n                                        " + _vm._s(_vm._f("formatNumber")(_vm.encours.nbre_par_30)) + "\n                                    ")])])])]), _vm._v(" "), _c("div", {
    staticClass: "card-body col-4"
  }, [_c("div", {
    staticClass: "d-flex align-items-center"
  }, [_c("div", [_vm._m(4), _vm._v(" "), _c("h6", {
    staticClass: "my-1 text-warning"
  }, [_vm._v("\n                                        " + _vm._s(_vm._f("formatNumber")(_vm.encours.par_90)) + "\n                                    ")]), _vm._v(" "), _c("p", {
    staticClass: "my-1"
  }, [_vm._v("\n                                        #Prêts :\n                                        " + _vm._s(_vm._f("formatNumber")(_vm.encours.nbre_par_90)) + "\n                                    ")])])])]), _vm._v(" "), _c("div", {
    staticClass: "card-body col-4"
  }, [_c("div", {
    staticClass: "d-flex align-items-center"
  }, [_c("div", [_vm._m(5), _vm._v(" "), _c("h6", {
    staticClass: "my-1 text-danger"
  }, [_vm._v("\n                                        " + _vm._s(_vm._f("formatNumber")(_vm.encours.solde_cpte_courant)) + "\n                                    ")])])])])])]) : _vm._e()]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mb-2"
  }, [_c("tbody", [_c("tr", [_c("td", {
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("Type de concours ")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit = _vm.dossier_credit) === null || _vm$dossier_credit === void 0 || (_vm$dossier_credit = _vm$dossier_credit.cred_pub_tb_17001) === null || _vm$dossier_credit === void 0 ? void 0 : _vm$dossier_credit.type_credit))]), _vm._v(" "), _c("td", {
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("Montant proposé par le CAF")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$dossier_credit2 = _vm.dossier_credit) === null || _vm$dossier_credit2 === void 0 || (_vm$dossier_credit2 = _vm$dossier_credit2.cred_pub_tb_17001) === null || _vm$dossier_credit2 === void 0 ? void 0 : _vm$dossier_credit2.montant_credit)))])]), _vm._v(" "), _c("tr", [_c("td", {
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("Durée")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit3 = _vm.dossier_credit) === null || _vm$dossier_credit3 === void 0 || (_vm$dossier_credit3 = _vm$dossier_credit3.cred_pub_tb_17001) === null || _vm$dossier_credit3 === void 0 ? void 0 : _vm$dossier_credit3.duree_credit))]), _vm._v(" "), _c("td", {
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("Période de remboursement")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit4 = _vm.dossier_credit) === null || _vm$dossier_credit4 === void 0 || (_vm$dossier_credit4 = _vm$dossier_credit4.cred_pub_tb_17001) === null || _vm$dossier_credit4 === void 0 ? void 0 : _vm$dossier_credit4.mode_paiement))])]), _vm._v(" "), _c("tr", [_c("td", {
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("Taux d’intérêt ")]), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$dossier_credit5 = _vm.dossier_credit) === null || _vm$dossier_credit5 === void 0 || (_vm$dossier_credit5 = _vm$dossier_credit5.cred_pub_tb_17001) === null || _vm$dossier_credit5 === void 0 ? void 0 : _vm$dossier_credit5.taux_credit_propose) + " % HT mensuel dégressif ")]), _vm._v(" "), _c("td", {
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("Frais de dossier ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(_vm._f("formatNumber")((_vm$dossier_credit$cr = _vm.dossier_credit.cred_pub_tb_17001) === null || _vm$dossier_credit$cr === void 0 || (_vm$dossier_credit$cr = _vm$dossier_credit$cr.frais[0]) === null || _vm$dossier_credit$cr === void 0 ? void 0 : _vm$dossier_credit$cr.montant_frais)) + "\n                            ( " + _vm._s((_vm$dossier_credit$cr2 = _vm.dossier_credit.cred_pub_tb_17001) === null || _vm$dossier_credit$cr2 === void 0 || (_vm$dossier_credit$cr2 = _vm$dossier_credit$cr2.frais[0]) === null || _vm$dossier_credit$cr2 === void 0 ? void 0 : _vm$dossier_credit$cr2.taux_modififie) + "% du montant proposé)\n                        ")])]), _vm._v(" "), _c("tr", [_c("td", {
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("Primes de risques ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s((_vm$dossier_credit$cr3 = _vm.dossier_credit.cred_pub_tb_17001) === null || _vm$dossier_credit$cr3 === void 0 || (_vm$dossier_credit$cr3 = _vm$dossier_credit$cr3.frais[2]) === null || _vm$dossier_credit$cr3 === void 0 ? void 0 : _vm$dossier_credit$cr3.montant_frais) + "\n                            ( " + _vm._s((_vm$dossier_credit$cr4 = _vm.dossier_credit.cred_pub_tb_17001) === null || _vm$dossier_credit$cr4 === void 0 || (_vm$dossier_credit$cr4 = _vm$dossier_credit$cr4.frais[2]) === null || _vm$dossier_credit$cr4 === void 0 ? void 0 : _vm$dossier_credit$cr4.taux_modififie) + " % du montant proposé)\n                        ")]), _vm._v(" "), _c("td", {
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("Rentabilité sur la durée du crédit ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s((_vm$dossier_credit6 = _vm.dossier_credit) === null || _vm$dossier_credit6 === void 0 || (_vm$dossier_credit6 = _vm$dossier_credit6.cred_pub_tb_17001) === null || _vm$dossier_credit6 === void 0 || (_vm$dossier_credit6 = _vm$dossier_credit6.echeance) === null || _vm$dossier_credit6 === void 0 ? void 0 : _vm$dossier_credit6.rentabilitepret) + " % ")])]), _vm._v(" "), _c("tr", [_c("td", {
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("Rentabilité Prêt (Annuelle) ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s((_vm$dossier_credit7 = _vm.dossier_credit) === null || _vm$dossier_credit7 === void 0 || (_vm$dossier_credit7 = _vm$dossier_credit7.cred_pub_tb_17001) === null || _vm$dossier_credit7 === void 0 || (_vm$dossier_credit7 = _vm$dossier_credit7.echeance) === null || _vm$dossier_credit7 === void 0 ? void 0 : _vm$dossier_credit7.rentabiliteAnnuel) + " %\n                        ")]), _vm._v(" "), _c("td", {
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("Rachat")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s((_vm$dossier_credit8 = _vm.dossier_credit) === null || _vm$dossier_credit8 === void 0 || (_vm$dossier_credit8 = _vm$dossier_credit8.cred_pub_tb_17001) === null || _vm$dossier_credit8 === void 0 ? void 0 : _vm$dossier_credit8.rachat) + "\n                        ")])]), _vm._v(" "), _c("tr", [_c("td", {
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("N° du prêt à racheter")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s((_vm$dossier_credit9 = _vm.dossier_credit) === null || _vm$dossier_credit9 === void 0 || (_vm$dossier_credit9 = _vm$dossier_credit9.cred_pub_tb_17001) === null || _vm$dossier_credit9 === void 0 ? void 0 : _vm$dossier_credit9.numero_pret_a_rachete) + "\n                        ")]), _vm._v(" "), !["Oui", "Non"].includes((_vm$dossier_credit0 = _vm.dossier_credit) === null || _vm$dossier_credit0 === void 0 || (_vm$dossier_credit0 = _vm$dossier_credit0.cred_pub_tb_17001) === null || _vm$dossier_credit0 === void 0 ? void 0 : _vm$dossier_credit0.ce_client_a_t_il_des_impayes) ? _c("td", {
    staticStyle: {
      background: "#f4f3f3"
    },
    attrs: {
      colspan: "2"
    }
  }) : [_c("td", {
    staticStyle: {
      "font-weight": "600"
    }
  }, [_vm._v("Ce client a-t-il des impayés ?")]), _vm._v(" "), _c("td", [_vm._v("\n                                " + _vm._s((_vm$dossier_credit1 = _vm.dossier_credit) === null || _vm$dossier_credit1 === void 0 || (_vm$dossier_credit1 = _vm$dossier_credit1.cred_pub_tb_17001) === null || _vm$dossier_credit1 === void 0 ? void 0 : _vm$dossier_credit1.ce_client_a_t_il_des_impayes) + "\n                            ")])]], 2)])]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mb-3"
  }, [_c("thead", [_c("tr", {
    staticClass: "bg-relooker fs-small"
  }, [_c("th", {
    staticStyle: {
      "background-color": "#2c3e50"
    }
  }, [_vm._v("Montant du prêt")]), _vm._v(" "), _c("th", {
    staticStyle: {
      "background-color": "#2c3e50"
    }
  }, [_vm._v("Taux du prêt (%)")]), _vm._v(" "), _c("th", {
    staticStyle: {
      "background-color": "#2c3e50"
    }
  }, [_vm._v("Durée du prêt (Mois)")]), _vm._v(" "), _c("th", {
    staticStyle: {
      "background-color": "#2c3e50"
    }
  }, [_vm._v("Intérêt du prêt")]), _vm._v(" "), _c("th", {
    staticStyle: {
      "background-color": "#2c3e50"
    }
  }, [_vm._v("Echéance "), !_vm.isInfine ? _c("span", [_vm._v("(par mois)")]) : _vm._e()]), _vm._v(" "), _c("th", {
    staticStyle: {
      "background-color": "#2c3e50"
    }
  }, [_vm._v("Garantie")]), _vm._v(" "), _c("th", {
    staticStyle: {
      "background-color": "#2c3e50"
    }
  }, [_vm._v("CRSD")]), _vm._v(" "), _c("th", {
    staticStyle: {
      "background-color": "#2c3e50"
    }
  }, [_vm._v("PEP")])])]), _vm._v(" "), _c("tbody", _vm._l(1, function (i) {
    var _vm$dossier_credit10, _vm$dossier_credit11, _vm$dossier_credit12, _vm$dossier_credit13, _vm$dossier_credit14, _vm$dossier_credit15, _vm$dossier_credit16, _vm$dossier_credit17;
    return _c("tr", {
      key: i
    }, [_c("td", [_vm._v("\n                            " + _vm._s(_vm._f("formatNumber")((_vm$dossier_credit10 = _vm.dossier_credit) === null || _vm$dossier_credit10 === void 0 ? void 0 : _vm$dossier_credit10.cred_pub_tb_17001.montant_credit)) + "\n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s((_vm$dossier_credit11 = _vm.dossier_credit) === null || _vm$dossier_credit11 === void 0 ? void 0 : _vm$dossier_credit11.cred_pub_tb_17001.taux_credit_propose) + "\n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s((_vm$dossier_credit12 = _vm.dossier_credit) === null || _vm$dossier_credit12 === void 0 ? void 0 : _vm$dossier_credit12.cred_pub_tb_17001.duree_credit) + "\n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(_vm._f("formatNumber")(Math.ceil((_vm$dossier_credit13 = _vm.dossier_credit) === null || _vm$dossier_credit13 === void 0 ? void 0 : _vm$dossier_credit13.cred_pub_tb_17001.echeance.interet))) + "\n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(_vm._f("formatNumber")(Math.ceil((_vm$dossier_credit14 = _vm.dossier_credit) === null || _vm$dossier_credit14 === void 0 ? void 0 : _vm$dossier_credit14.cred_pub_tb_17001.echeance.echeance))) + "\n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(_vm._f("formatNumber")((_vm$dossier_credit15 = _vm.dossier_credit) === null || _vm$dossier_credit15 === void 0 ? void 0 : _vm$dossier_credit15.cred_pub_tb_17001.garantie)) + "\n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(_vm._f("formatNumber")((_vm$dossier_credit16 = _vm.dossier_credit) === null || _vm$dossier_credit16 === void 0 ? void 0 : _vm$dossier_credit16.cred_pub_tb_17001.montant_crsd)) + "\n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(_vm._f("formatNumber")((_vm$dossier_credit17 = _vm.dossier_credit) === null || _vm$dossier_credit17 === void 0 ? void 0 : _vm$dossier_credit17.cred_pub_tb_17001.vmontant_pep)) + "\n                        ")])]);
  }), 0)]), _vm._v(" "), _vm._m(6), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mb-3"
  }, [_vm._m(7), _vm._v(" "), _c("tbody", [_vm._l((_vm$dossier_credit18 = _vm.dossier_credit) === null || _vm$dossier_credit18 === void 0 ? void 0 : _vm$dossier_credit18.cred_pub_tb_17001.frais, function (frais0, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_vm._v(_vm._s(frais0.libelle_taux))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(frais0.taux_modififie))]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(_vm._f("formatNumber")(frais0.montant_frais)) + "\n                        ")])]);
  }), _vm._v(" "), _c("tr", [_vm._m(8), _vm._v(" "), _c("td", {
    staticStyle: {
      "background-color": "#2c3e50",
      color: "white"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm._f("formatNumber")(Math.ceil((_vm$dossier_credit19 = _vm.dossier_credit) === null || _vm$dossier_credit19 === void 0 ? void 0 : _vm$dossier_credit19.cred_pub_tb_17001.val_total_frais))) + "\n                        ")])])], 2)]), _vm._v(" "), _vm._m(9), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered mb-3"
  }, [_vm._m(10), _vm._v(" "), _c("tbody", _vm._l(1, function (i) {
    var _vm$dossier_credit20, _vm$dossier_credit21, _vm$dossier_credit22, _vm$dossier_credit23;
    return _c("tr", {
      key: i
    }, [_c("td", [_vm._v("\n                            " + _vm._s((_vm$dossier_credit20 = _vm.dossier_credit) === null || _vm$dossier_credit20 === void 0 ? void 0 : _vm$dossier_credit20.cred_pub_tb_17001.echeance.coutCapital) + "\n                            %\n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s(_vm._f("formatNumber")(Math.ceil((_vm$dossier_credit21 = _vm.dossier_credit) === null || _vm$dossier_credit21 === void 0 ? void 0 : _vm$dossier_credit21.cred_pub_tb_17001.echeance.cashflow))) + "\n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s((_vm$dossier_credit22 = _vm.dossier_credit) === null || _vm$dossier_credit22 === void 0 ? void 0 : _vm$dossier_credit22.cred_pub_tb_17001.echeance.rentabilitepret) + "\n                            %\n                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                            " + _vm._s((_vm$dossier_credit23 = _vm.dossier_credit) === null || _vm$dossier_credit23 === void 0 ? void 0 : _vm$dossier_credit23.cred_pub_tb_17001.echeance.rentabiliteAnnuel) + "\n                            %\n                        ")])]);
  }), 0)]), _vm._v(" "), ((_vm$dossier_credit24 = _vm.dossier_credit) === null || _vm$dossier_credit24 === void 0 || (_vm$dossier_credit24 = _vm$dossier_credit24.cred_pub_tb_17001) === null || _vm$dossier_credit24 === void 0 ? void 0 : _vm$dossier_credit24.ce_client_a_t_il_des_impayes) == "Oui" || ((_vm$encours2 = _vm.encours) === null || _vm$encours2 === void 0 ? void 0 : _vm$encours2.par_0) != 0 || ((_vm$encours3 = _vm.encours) === null || _vm$encours3 === void 0 ? void 0 : _vm$encours3.par_30) != 0 || ((_vm$encours4 = _vm.encours) === null || _vm$encours4 === void 0 ? void 0 : _vm$encours4.par_90) != 0 ? _c("table", {
    staticClass: "table table-bordered mb-2 mt-2"
  }, [_vm._m(11), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {
    staticStyle: {
      "font-weight": "600"
    },
    attrs: {
      colspan: ""
    }
  }, [_vm._v(_vm._s((_vm$dossier_credit25 = _vm.dossier_credit) === null || _vm$dossier_credit25 === void 0 || (_vm$dossier_credit25 = _vm$dossier_credit25.cred_pub_tb_17001) === null || _vm$dossier_credit25 === void 0 ? void 0 : _vm$dossier_credit25.motif))])])])]) : _vm._e(), _vm._v(" "), _c("simulateur-teg-off", {
    attrs: {
      simulateur: (_vm$dossier_credit26 = _vm.dossier_credit) === null || _vm$dossier_credit26 === void 0 ? void 0 : _vm$dossier_credit26.taux_effectif_global
    }
  }), _vm._v(" "), !!((_vm$dossier_credit27 = _vm.dossier_credit) !== null && _vm$dossier_credit27 !== void 0 && _vm$dossier_credit27.rentacred) ? _c("rentacred", {
    staticClass: "my-5",
    attrs: {
      dossier_credit: _vm.dossier_credit,
      read_only: true
    }
  }) : _vm._e()], 1) : _vm._e()])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("span", {
    staticClass: "spinner-border spinner-border"
  }), _vm._v(" "), _c("h5", [_vm._v("\n                            Chargement des données de frais en cours ... "), _c("br"), _vm._v("\n                            Ceci peut prendre un peu de temps\n                        ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", {
    staticClass: "mb-0 text-secondary font-weight-bold"
  }, [_c("strong", [_vm._v("Encours")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", {
    staticClass: "mb-0 text-secondary font-weight-bold"
  }, [_c("strong", [_vm._v("Par 0")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", {
    staticClass: "mb-0 text-secondary font-weight-bold"
  }, [_c("strong", [_vm._v("Par 30")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", {
    staticClass: "mb-0 text-secondary font-weight-bold"
  }, [_c("strong", [_vm._v("Par 90 ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", {
    staticClass: "mb-0 text-secondary font-weight-bold"
  }, [_c("strong", [_vm._v("Compte courant\n                                        ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("h6", {
    staticClass: "d-flex justify-content-between"
  }, [_c("span", [_vm._v(" Frais de crédit ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", {
    staticClass: "bg-relooker"
  }, [_c("th", {
    staticStyle: {
      "background-color": "#2c3e50"
    }
  }, [_vm._v("Libellé du frais")]), _vm._v(" "), _c("th", {
    staticStyle: {
      "background-color": "#2c3e50"
    }
  }, [_vm._v("Taux du frais")]), _vm._v(" "), _c("th", {
    staticStyle: {
      "background-color": "#2c3e50"
    }
  }, [_vm._v("Montant du frais")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    attrs: {
      colspan: "2"
    }
  }, [_c("b", [_vm._v("Total Frais")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("h6", {
    staticClass: "d-flex justify-content-between"
  }, [_c("span", [_vm._v(" Information de rentabilité")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", {
    staticClass: "bg-relooker"
  }, [_c("th", {
    staticStyle: {
      "background-color": "#2c3e50"
    }
  }, [_vm._v("Coût du capital")]), _vm._v(" "), _c("th", {
    staticStyle: {
      "background-color": "#2c3e50"
    }
  }, [_vm._v("Cash Flow Actualisé")]), _vm._v(" "), _c("th", {
    staticStyle: {
      "background-color": "#2c3e50"
    }
  }, [_vm._v("\n                            Rentabilité sur la durée du prêt\n                        ")]), _vm._v(" "), _c("th", {
    staticStyle: {
      "background-color": "#2c3e50"
    }
  }, [_vm._v("\n                            Rentabilité annuelle du prêt\n                        ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "bg-ed-primary"
  }, [_c("tr", [_c("th", {
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      colspan: "",
      scope: "row"
    }
  }, [_c("b", [_vm._v("Motif de l'impayé")])])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/parts/RentaCred.vue?vue&type=template&id=eacfd3a8":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/parts/RentaCred.vue?vue&type=template&id=eacfd3a8 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$data, _vm$data2, _vm$data3, _vm$data4, _vm$data5, _vm$data6, _vm$data7, _vm$data8, _vm$data9, _vm$data0, _vm$data1, _vm$data10, _vm$data11, _vm$data12, _vm$data13, _vm$data14, _vm$data15, _vm$data16, _vm$data17, _vm$data18, _vm$data19, _vm$data$rentabilite_, _vm$data20;
  var _vm = this,
    _c = _vm._self._c;
  return _vm.DISPLAY_COMPONENT ? _c("div", {
    staticClass: "col-12 px-0",
    staticStyle: {
      "overflow-x": "scroll"
    }
  }, [_c("table", {
    staticClass: "table table-bordered table-responsive mb-2 bg-white"
  }, [_vm._m(0), _vm._v(" "), _vm.isLoadingPage ? [_c("tr", [_c("td", {
    attrs: {
      colspan: "4"
    }
  }, [_c("div", {
    staticClass: "d-flex flex-column justify-content-center align-items-center text-center py-5"
  }, [_c("div", {
    staticClass: "spinner-border spinner-border-xl mb-2",
    staticStyle: {
      width: "3rem",
      height: "3rem"
    }
  }), _vm._v(" "), _c("h4", {
    staticClass: "my-2"
  }, [_vm._v("\n                            Initialisation du RentaCred"), _c("span", {
    domProps: {
      innerHTML: _vm._s(_vm.loadingDots)
    }
  })])])])])] : [_vm.isLoading ? _c("div", {
    staticClass: "d-flex flex-column justify-content-center align-items-center text-center py-5"
  }, [_c("div", {
    staticClass: "spinner-border spinner-border-xl mb-2",
    staticStyle: {
      width: "3rem",
      height: "3rem"
    }
  }), _vm._v(" "), _c("h4", {
    staticClass: "my-2"
  }, [_vm._v("\n                    Traitement en cours"), _c("span", {
    domProps: {
      innerHTML: _vm._s(_vm.loadingDots)
    }
  })])]) : [_vm.errorMessage ? [_c("tr", [_c("td", {
    attrs: {
      colspan: "4"
    }
  }, [_c("div", {
    staticClass: "d-flex flex-column text-secondary justify-content-center align-items-center text-center py-5"
  }, [_c("i", {
    staticClass: "icofont-warning icofont-4x"
  }), _vm._v(" "), _c("h4", {
    staticClass: "my-2 text-secondary"
  }, [_vm._v("\n                                    " + _vm._s(_vm.errorMessage) + "\n                                ")]), _vm._v(" "), _vm.errorHint ? _c("h6", {
    staticClass: "text-secondary"
  }, [_vm._v("\n                                    " + _vm._s(_vm.errorHint) + "\n                                ")]) : _vm._e(), _vm._v(" "), _c("button", {
    staticClass: "mt-2 btn btn-sm btn-secondary d-flex gap-2 align-items-center",
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.restartRentacred.apply(null, arguments);
      }
    }
  }, [_c("i", {
    staticClass: "icofont-refresh"
  }), _vm._v("\n                                    Relancer le RentaCred\n                                ")])])])])] : [!_vm.dossier_credit ? [_vm._m(1)] : [_vm.isComputing ? _c("tr", [_c("td", {
    attrs: {
      colspan: "4"
    }
  }, [_c("div", [_vm._v("\n                                    Calcul en cours"), _c("span", {
    domProps: {
      innerHTML: _vm._s(_vm.loadingDots)
    }
  })]), _vm._v(" "), _vm.loadingMessage ? _c("div", [_vm._v(_vm._s(_vm.loadingMessage))]) : _vm._e()])]) : _vm._e(), _vm._v(" "), _c("thead", [_c("tr", {}, [_c("td", {
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      scope: "row",
      colspan: "4"
    }
  }, [_c("div", {
    staticClass: "d-flex justify-content-center align-items-center cursor-pointer mb-2",
    on: {
      click: function click($event) {
        _vm.isCalcTableVisible = !_vm.isCalcTableVisible;
      }
    }
  }, [_c("span", [_vm._v("\n                                            " + _vm._s(_vm.isCalcTableVisible ? "Masquer" : "Afficher") + " les calculs\n                                        ")]), _vm._v(" "), _c("span", {
    staticClass: "cursor-pointer",
    attrs: {
      title: (_vm.isCalcTableVisible ? "Masquer" : "Afficher") + " les tableaux de calculs"
    }
  }, [_vm.isCalcTableVisible ? _c("i", {
    staticClass: "icofont-rounded-up"
  }) : _c("i", {
    staticClass: "icofont-rounded-down"
  })])]), _vm._v(" "), _c("div", {
    style: "margin:auto;width:" + _vm.computedCalcTableWidth + ";overflow-x:scroll;"
  }, [_vm.isCalcTableVisible ? [_c("div", [_c("table", {
    staticClass: "table table-bordered table-responsive mb-2 bg-white"
  }, [_c("thead", [_c("tr", {
    staticClass: "bg-grey"
  }, [_c("th", {
    staticClass: "text-center",
    attrs: {
      colspan: "10"
    }
  }, [_c("div", {
    staticClass: "d-flex gap-2 justify-content-between align-items-center"
  }, [_c("span", [_vm._v("\n                                                                        Plan d'amortissement\n                                                                    ")]), _vm._v(" "), _c("span", {
    staticClass: "btn",
    on: {
      click: function click($event) {
        _vm.isPlanAmortissementVisible = !_vm.isPlanAmortissementVisible;
      }
    }
  }, [_vm._v("\n                                                                        " + _vm._s(_vm.isPlanAmortissementVisible ? "Masquer" : "Afficher") + "\n                                                                        "), _c("span", [_vm.isPlanAmortissementVisible ? _c("i", {
    staticClass: "icofont-rounded-up"
  }) : _c("i", {
    staticClass: "icofont-rounded-down"
  })])])])])]), _vm._v(" "), _vm.isPlanAmortissementVisible ? _c("tr", [_c("th", [_vm._v("N°")]), _vm._v(" "), _c("th", [_vm._v("Date Echeance")]), _vm._v(" "), _c("th", [_vm._v("Solde de départ")]), _vm._v(" "), _c("th", [_vm._v("Paiement programmé")]), _vm._v(" "), _c("th", [_vm._v("Paiement supplémentaire")]), _vm._v(" "), _c("th", [_vm._v("Paiement Total")]), _vm._v(" "), _c("th", [_vm._v("Principal")]), _vm._v(" "), _c("th", [_vm._v("Intérêts")]), _vm._v(" "), _c("th", [_vm._v("Solde Final")]), _vm._v(" "), _c("th", [_vm._v("Interets cumulés")])]) : _vm._e()]), _vm._v(" "), _vm.isPlanAmortissementVisible ? _c("tbody", _vm._l((_vm$data = _vm.data) === null || _vm$data === void 0 ? void 0 : _vm$data.plan_amortissement, function (plan, i) {
    var _plan$solde_depart, _plan$paiement_progra, _plan$paiement_supple, _plan$paiement_total, _plan$principal, _plan$interets, _plan$solde_final, _plan$interets_cumule;
    return _c("tr", {
      key: i
    }, [_c("td", [_vm._v(_vm._s(plan === null || plan === void 0 ? void 0 : plan.numero_paiement))]), _vm._v(" "), _c("td", [_vm._v("\n                                                                " + _vm._s(plan === null || plan === void 0 ? void 0 : plan.date_echeance) + "\n                                                            ")]), _vm._v(" "), _c("td", [_vm._v("\n                                                                " + _vm._s(_vm._f("formatNumber")(plan === null || plan === void 0 || (_plan$solde_depart = plan.solde_depart) === null || _plan$solde_depart === void 0 ? void 0 : _plan$solde_depart.toFixed(2))) + "\n                                                            ")]), _vm._v(" "), _c("td", [_vm._v("\n                                                                " + _vm._s(_vm._f("formatNumber")(plan === null || plan === void 0 || (_plan$paiement_progra = plan.paiement_programme) === null || _plan$paiement_progra === void 0 ? void 0 : _plan$paiement_progra.toFixed(2))) + "\n                                                            ")]), _vm._v(" "), _c("td", [_vm._v("\n                                                                " + _vm._s(_vm._f("formatNumber")(plan === null || plan === void 0 || (_plan$paiement_supple = plan.paiement_supplementaire) === null || _plan$paiement_supple === void 0 ? void 0 : _plan$paiement_supple.toFixed(2))) + "\n                                                            ")]), _vm._v(" "), _c("td", [_vm._v("\n                                                                " + _vm._s(_vm._f("formatNumber")(plan === null || plan === void 0 || (_plan$paiement_total = plan.paiement_total) === null || _plan$paiement_total === void 0 ? void 0 : _plan$paiement_total.toFixed(2))) + "\n                                                            ")]), _vm._v(" "), _c("td", [_vm._v("\n                                                                " + _vm._s(_vm._f("formatNumber")(plan === null || plan === void 0 || (_plan$principal = plan.principal) === null || _plan$principal === void 0 ? void 0 : _plan$principal.toFixed(2))) + "\n                                                            ")]), _vm._v(" "), _c("td", [_vm._v("\n                                                                " + _vm._s(_vm._f("formatNumber")(plan === null || plan === void 0 || (_plan$interets = plan.interets) === null || _plan$interets === void 0 ? void 0 : _plan$interets.toFixed(2))) + "\n                                                            ")]), _vm._v(" "), _c("td", [_vm._v("\n                                                                " + _vm._s(_vm._f("formatNumber")(plan === null || plan === void 0 || (_plan$solde_final = plan.solde_final) === null || _plan$solde_final === void 0 ? void 0 : _plan$solde_final.toFixed(2))) + "\n                                                            ")]), _vm._v(" "), _c("td", [_vm._v("\n                                                                " + _vm._s(_vm._f("formatNumber")(plan === null || plan === void 0 || (_plan$interets_cumule = plan.interets_cumules) === null || _plan$interets_cumule === void 0 ? void 0 : _plan$interets_cumule.toFixed(2))) + "\n                                                            ")])]);
  }), 0) : _vm._e()]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered table-responsive mb-2 bg-white"
  }, [_c("thead", [_c("tr", {
    staticClass: "bg-grey"
  }, [_c("th", {
    staticClass: "text-center",
    attrs: {
      colspan: "10"
    }
  }, [_c("div", {
    staticClass: "d-flex gap-2 justify-content-between align-items-center"
  }, [_c("span", [_vm._v("\n                                                                        Plan d'amortissement 2\n                                                                    ")]), _vm._v(" "), _c("span", {
    staticClass: "btn",
    on: {
      click: function click($event) {
        _vm.isPlanAmortissement2Visible = !_vm.isPlanAmortissement2Visible;
      }
    }
  }, [_vm._v("\n                                                                        " + _vm._s(_vm.isPlanAmortissement2Visible ? "Masquer" : "Afficher") + "\n                                                                        "), _c("span", [_vm.isPlanAmortissement2Visible ? _c("i", {
    staticClass: "icofont-rounded-up"
  }) : _c("i", {
    staticClass: "icofont-rounded-down"
  })])])])])]), _vm._v(" "), _vm.isPlanAmortissement2Visible ? _c("tr", [_c("th", [_vm._v("N°")]), _vm._v(" "), _c("th", [_vm._v("Date Echeance")]), _vm._v(" "), _c("th", [_vm._v("Solde de départ")]), _vm._v(" "), _c("th", [_vm._v("Paiement programmé")]), _vm._v(" "), _c("th", [_vm._v("Paiement supplémentaire")]), _vm._v(" "), _c("th", [_vm._v("Paiement Total")]), _vm._v(" "), _c("th", [_vm._v("Principal")]), _vm._v(" "), _c("th", [_vm._v("Intérêts")]), _vm._v(" "), _c("th", [_vm._v("Solde Final")]), _vm._v(" "), _c("th", [_vm._v("Interets cumulés")])]) : _vm._e()]), _vm._v(" "), _vm.isPlanAmortissement2Visible ? _c("tbody", _vm._l((_vm$data2 = _vm.data) === null || _vm$data2 === void 0 ? void 0 : _vm$data2.plan_amortissement2, function (plan, i) {
    var _plan$solde_depart2, _plan$paiement_progra2, _plan$paiement_supple2, _plan$paiement_total2, _plan$principal2, _plan$interets2, _plan$solde_final2, _plan$interets_cumule2;
    return _c("tr", {
      key: i
    }, [_c("td", [_vm._v(_vm._s(plan === null || plan === void 0 ? void 0 : plan.numero_paiement))]), _vm._v(" "), _c("td", [_vm._v("\n                                                                " + _vm._s(plan === null || plan === void 0 ? void 0 : plan.date_echeance) + "\n                                                            ")]), _vm._v(" "), _c("td", [_vm._v("\n                                                                " + _vm._s(_vm._f("formatNumber")(plan === null || plan === void 0 || (_plan$solde_depart2 = plan.solde_depart) === null || _plan$solde_depart2 === void 0 ? void 0 : _plan$solde_depart2.toFixed(2))) + "\n                                                            ")]), _vm._v(" "), _c("td", [_vm._v("\n                                                                " + _vm._s(_vm._f("formatNumber")(plan === null || plan === void 0 || (_plan$paiement_progra2 = plan.paiement_programme) === null || _plan$paiement_progra2 === void 0 ? void 0 : _plan$paiement_progra2.toFixed(2))) + "\n                                                            ")]), _vm._v(" "), _c("td", [_vm._v("\n                                                                " + _vm._s(_vm._f("formatNumber")(plan === null || plan === void 0 || (_plan$paiement_supple2 = plan.paiement_supplementaire) === null || _plan$paiement_supple2 === void 0 ? void 0 : _plan$paiement_supple2.toFixed(2))) + "\n                                                            ")]), _vm._v(" "), _c("td", [_vm._v("\n                                                                " + _vm._s(_vm._f("formatNumber")(plan === null || plan === void 0 || (_plan$paiement_total2 = plan.paiement_total) === null || _plan$paiement_total2 === void 0 ? void 0 : _plan$paiement_total2.toFixed(2))) + "\n                                                            ")]), _vm._v(" "), _c("td", [_vm._v("\n                                                                " + _vm._s(_vm._f("formatNumber")(plan === null || plan === void 0 || (_plan$principal2 = plan.principal) === null || _plan$principal2 === void 0 ? void 0 : _plan$principal2.toFixed(2))) + "\n                                                            ")]), _vm._v(" "), _c("td", [_vm._v("\n                                                                " + _vm._s(_vm._f("formatNumber")(plan === null || plan === void 0 || (_plan$interets2 = plan.interets) === null || _plan$interets2 === void 0 ? void 0 : _plan$interets2.toFixed(2))) + "\n                                                            ")]), _vm._v(" "), _c("td", [_vm._v("\n                                                                " + _vm._s(_vm._f("formatNumber")(plan === null || plan === void 0 || (_plan$solde_final2 = plan.solde_final) === null || _plan$solde_final2 === void 0 ? void 0 : _plan$solde_final2.toFixed(2))) + "\n                                                            ")]), _vm._v(" "), _c("td", [_vm._v("\n                                                                " + _vm._s(_vm._f("formatNumber")(plan === null || plan === void 0 || (_plan$interets_cumule2 = plan.interets_cumules) === null || _plan$interets_cumule2 === void 0 ? void 0 : _plan$interets_cumule2.toFixed(2))) + "\n                                                            ")])]);
  }), 0) : _vm._e()]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered table-responsive mb-2 bg-white"
  }, [_c("thead", [_c("tr", {
    staticClass: "bg-grey"
  }, [_c("th", {
    staticClass: "text-center",
    attrs: {
      colspan: "6"
    }
  }, [_c("div", {
    staticClass: "d-flex gap-2 justify-content-between align-items-center"
  }, [_vm._v("\n\n                                                                Revenus générés par les cash flow (replacé dans les mêmes conditions)\n                                                                "), _c("div", {
    staticClass: "text-center cursor-pointer",
    on: {
      click: function click($event) {
        _vm.isCashflowTableVisible = !_vm.isCashflowTableVisible;
      }
    }
  }, [_vm._v("\n                                                                    " + _vm._s(_vm.isCashflowTableVisible ? "Masquer" : "Afficher") + "\n                                                                    "), _c("span", [_vm.isCashflowTableVisible ? _c("i", {
    staticClass: "icofont-rounded-up"
  }) : _c("i", {
    staticClass: "icofont-rounded-down"
  })])])])])]), _vm._v(" "), _vm._m(2)]), _vm._v(" "), _vm.isCashflowTableVisible ? _c("tbody", _vm._l((_vm$data3 = _vm.data) === null || _vm$data3 === void 0 ? void 0 : _vm$data3.revenus_generes_par_les_cashflow, function (revenu, i) {
    var _revenu$frais_de_doss, _revenu$interet_annue, _revenu$prime_de_risq, _revenu$autres_revenu, _revenu$total;
    return _c("tr", {
      key: i
    }, [_c("td", [_vm._v("Echeance " + _vm._s(i + 1))]), _vm._v(" "), _c("td", [_vm._v("\n                                                                " + _vm._s(_vm._f("formatNumber")(revenu === null || revenu === void 0 || (_revenu$frais_de_doss = revenu.frais_de_dossier) === null || _revenu$frais_de_doss === void 0 ? void 0 : _revenu$frais_de_doss.toFixed(2))) + "\n                                                            ")]), _vm._v(" "), _c("td", [_vm._v("\n                                                                " + _vm._s(_vm._f("formatNumber")(revenu === null || revenu === void 0 || (_revenu$interet_annue = revenu.interet_annuel) === null || _revenu$interet_annue === void 0 ? void 0 : _revenu$interet_annue.toFixed(2))) + "\n                                                            ")]), _vm._v(" "), _c("td", [_vm._v("\n                                                                " + _vm._s(_vm._f("formatNumber")(revenu === null || revenu === void 0 || (_revenu$prime_de_risq = revenu.prime_de_risque) === null || _revenu$prime_de_risq === void 0 ? void 0 : _revenu$prime_de_risq.toFixed(2))) + "\n                                                            ")]), _vm._v(" "), _c("td", [_vm._v("\n                                                                " + _vm._s(_vm._f("formatNumber")(revenu === null || revenu === void 0 || (_revenu$autres_revenu = revenu.autres_revenus_sur_credit) === null || _revenu$autres_revenu === void 0 ? void 0 : _revenu$autres_revenu.toFixed(2))) + "\n                                                            ")]), _vm._v(" "), _c("td", [_vm._v("\n                                                                " + _vm._s(_vm._f("formatNumber")(revenu === null || revenu === void 0 || (_revenu$total = revenu.total) === null || _revenu$total === void 0 ? void 0 : _revenu$total.toFixed(2))) + "\n                                                            ")])]);
  }), 0) : _vm._e(), _vm._v(" "), _c("tfoot", [_c("tr", [_c("td", {
    attrs: {
      colspan: "5"
    }
  }), _vm._v(" "), _c("td", [_vm._v("\n                                                                " + _vm._s(_vm._f("formatNumber")((_vm$data4 = _vm.data) === null || _vm$data4 === void 0 ? void 0 : _vm$data4.total_revenus_generes_par_les_cashflow)) + "\n\n                                                            ")])])])])])] : _vm._e()], 2), _vm._v(" "), _vm.isCalcTableVisible ? _c("div", {
    staticClass: "d-flex justify-content-center align-items-center cursor-pointer mt-3 mb-2",
    on: {
      click: function click($event) {
        _vm.isCalcTableVisible = !_vm.isCalcTableVisible;
      }
    }
  }, [_c("span", [_vm._v("\n                                            Masquer les calculs\n                                        ")]), _vm._v(" "), _vm._m(3)]) : _vm._e()])])]), _vm._v(" "), _vm._m(4), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", {
    attrs: {
      colspan: ""
    }
  }, [_c("label", [_vm._v(" Montant échéance ")]), _vm._v(" "), _c("h5", {
    staticClass: "text-end mb-0"
  }, [_vm._v("\n                                        " + _vm._s(_vm._f("formatNumber")((_vm$data5 = _vm.data) === null || _vm$data5 === void 0 ? void 0 : _vm$data5.montant_echeance)) + "\n                                    ")])]), _vm._v(" "), _c("td", {
    attrs: {
      colspan: ""
    }
  }, [_c("span", [_vm._v(" Nombre échéances ")]), _vm._v(" "), _c("h5", {
    staticClass: "text-end mb-0"
  }, [_vm._v("\n\n                                    " + _vm._s(_vm._f("formatNumber")((_vm$data6 = _vm.data) === null || _vm$data6 === void 0 ? void 0 : _vm$data6.nombre_echeance)) + "\n                                    ")])]), _vm._v(" "), _c("td", {
    attrs: {
      colspan: "2"
    }
  }, [_c("label", [_vm._v("\n                                        Intéret annuel\n                                    ")]), _vm._v(" "), _c("h5", {
    staticClass: "text-end mb-0"
  }, [_vm._v(_vm._s(_vm._f("formatNumber")((_vm$data7 = _vm.data) === null || _vm$data7 === void 0 ? void 0 : _vm$data7.interet_annuel)) + " ")])])]), _vm._v(" "), _c("tr", [_c("td", [_c("label", [_vm._v("\n                                        Frais de dossier / Commissions\n                                    ")]), _vm._v(" "), _c("h5", {
    staticClass: "text-end mb-0"
  }, [_vm._v("\n                                        " + _vm._s(_vm.formData.pourcentage_frais_de_dossier) + "%\n                                    ")]), _vm._v(" "), _c("h5", {
    staticClass: "text-end mb-0"
  }, [_vm._v("\n\n                                    " + _vm._s(_vm._f("formatNumber")((_vm$data8 = _vm.data) === null || _vm$data8 === void 0 ? void 0 : _vm$data8.frais_de_dossier)) + "\n                                    ")])]), _vm._v(" "), _c("td", {
    attrs: {
      colspan: "2"
    }
  }, [_c("label", {
    staticClass: "text-left"
  }, [_vm._v("\n                                        Prime de risque / Assurance\n                                    ")]), _vm._v(" "), _c("h5", {
    staticClass: "text-end mb-0"
  }, [_vm._v("\n                                        " + _vm._s(_vm.formData.pourcentage_prime_de_risque) + "%\n                                    ")]), _vm._v(" "), _c("h5", {
    staticClass: "text-end mb-0"
  }, [_vm._v("\n\n                                    " + _vm._s(_vm._f("formatNumber")((_vm$data9 = _vm.data) === null || _vm$data9 === void 0 ? void 0 : _vm$data9.prime_de_risque)) + "\n                                    ")])]), _vm._v(" "), _c("td", [_c("label", {
    staticClass: "text-left"
  }, [_vm._v("\n                                        Autres revenus sur crédit\n                                    ")]), _vm._v(" "), _c("h5", {
    staticClass: "text-end mb-0"
  }, [_vm._v("\n                                        " + _vm._s(_vm.formData.pourcentage_autres_revenus_sur_credit) + "%\n                                    ")]), _vm._v(" "), _c("h5", {
    staticClass: "text-end mb-0"
  }, [_vm._v("\n\n                                    " + _vm._s(_vm._f("formatNumber")((_vm$data0 = _vm.data) === null || _vm$data0 === void 0 ? void 0 : _vm$data0.autres_revenus_sur_credit)) + "\n                                    ")])])]), _vm._v(" "), _c("tr", [_c("td", [_c("label", {
    staticClass: "text-left"
  }, [_vm._v("\n                                        Revenus annuel sur cashflow\n                                    ")]), _vm._v(" "), _c("h5", {
    staticClass: "text-end mb-0"
  }, [_vm._v("\n\n                                    " + _vm._s(_vm._f("formatNumber")((_vm$data1 = _vm.data) === null || _vm$data1 === void 0 ? void 0 : _vm$data1.revenus_annuels_sur_cashflow)) + "\n                                    ")])]), _vm._v(" "), _c("td", {
    attrs: {
      colspan: "2"
    }
  }, [_c("label", {
    staticClass: "text-left"
  }, [_vm._v("\n                                        Total revenus annuel\n                                    ")]), _vm._v(" "), _c("h5", {
    staticClass: "text-end mb-0"
  }, [_vm._v("\n                                        " + _vm._s(_vm._f("formatNumber")((_vm$data10 = _vm.data) === null || _vm$data10 === void 0 ? void 0 : _vm$data10.total_revenus_annuel)) + "\n                                    ")])]), _vm._v(" "), _c("td", [_c("label", {
    staticClass: "text-left"
  }, [_vm._v("\n                                        Total revenus sur la durée du credit\n                                    ")]), _vm._v(" "), _c("h5", {
    staticClass: "text-end mb-0"
  }, [_vm._v("\n                                        " + _vm._s(_vm._f("formatNumber")((_vm$data11 = _vm.data) === null || _vm$data11 === void 0 ? void 0 : _vm$data11.total_revenus_sur_la_duree_du_credit)) + "\n                                    ")])])])]), _vm._v(" "), _c("tfoot", [_c("tr", {}, [_c("td", [_c("label", [_vm._v("\n                                        Rentabilité brute annuelle\n                                    ")]), _vm._v(" "), _c("h5", {
    staticClass: "text-right"
  }, [_vm._v("\n                                        " + _vm._s(_vm._f("formatNumber")((_vm$data12 = _vm.data) === null || _vm$data12 === void 0 ? void 0 : _vm$data12.pourcentage_rentabilite_brute_annuelle)) + "%\n                                    ")])]), _vm._v(" "), _c("td", {
    attrs: {
      colspan: "2"
    }
  }, [_c("label", {
    staticClass: "text-left"
  }, [_vm._v("\n                                        Coût moyen des ressources\n                                    ")]), _vm._v(" "), _c("h5", {
    staticClass: "text-right"
  }, [_vm._v("\n                                        " + _vm._s(_vm._f("formatNumber")((_vm$data13 = _vm.data) === null || _vm$data13 === void 0 ? void 0 : _vm$data13.pourcentage_cout_moyen_des_ressources)) + "%\n                                    ")])]), _vm._v(" "), _c("td", [_c("label", {
    staticClass: "text-left"
  }, [_vm._v("\n                                        Taux de Coût du risque espéré\n                                    ")]), _vm._v(" "), _c("h5", {
    staticClass: "text-right"
  }, [_vm._v("\n                                        " + _vm._s(_vm._f("formatNumber")((_vm$data14 = _vm.data) === null || _vm$data14 === void 0 ? void 0 : _vm$data14.taux_de_cout_du_risque_espere)) + "%\n                                    ")])])]), _vm._v(" "), _c("tr", [_c("th", {
    attrs: {
      colspan: "4"
    }
  }, [_c("div", {
    staticClass: "d-flex justify-content-between mt-3"
  }, [_c("span", {
    staticClass: "d-flex align-items-end gap-3"
  }, [_c("h5", [_vm._v("\n                                                Rentabilité nette annuelle:\n                                            ")]), _vm._v(" "), _c("h2", {
    "class": [((_vm$data15 = _vm.data) === null || _vm$data15 === void 0 ? void 0 : _vm$data15.rentabilite_status) == _vm.DATA_CONFIG.POSITIVE_STATUS_TEXT ? "text-success" : "", ((_vm$data16 = _vm.data) === null || _vm$data16 === void 0 ? void 0 : _vm$data16.rentabilite_status) == _vm.DATA_CONFIG.NEGATIVE_STATUS_TEXT ? "text-danger" : ""]
  }, [_vm._v("\n                                                " + _vm._s(_vm._f("formatNumber")((_vm$data17 = _vm.data) === null || _vm$data17 === void 0 ? void 0 : _vm$data17.pourcentage_rentabilite_nette_annuelle)) + "%\n                                            ")])]), _vm._v(" "), _c("span", {
    staticClass: "d-flex align-items-end gap-3"
  }, [_c("h5", [_vm._v("\n                                                Appréciation:\n                                            ")]), _vm._v(" "), _c("h2", {
    "class": [((_vm$data18 = _vm.data) === null || _vm$data18 === void 0 ? void 0 : _vm$data18.rentabilite_status) == _vm.DATA_CONFIG.POSITIVE_STATUS_TEXT ? "text-success" : "", ((_vm$data19 = _vm.data) === null || _vm$data19 === void 0 ? void 0 : _vm$data19.rentabilite_status) == _vm.DATA_CONFIG.NEGATIVE_STATUS_TEXT ? "text-danger" : ""]
  }, [_vm._v("\n                                                " + _vm._s((_vm$data$rentabilite_ = (_vm$data20 = _vm.data) === null || _vm$data20 === void 0 ? void 0 : _vm$data20.rentabilite_status) !== null && _vm$data$rentabilite_ !== void 0 ? _vm$data$rentabilite_ : _vm.DEFAULT_NULL_INDICATOR) + "\n                                            ")])])])])])])]]]]], 2)]) : _vm._e();
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "bg-ed-primary"
  }, [_c("tr", {
    staticClass: "bg-grey"
  }, [_c("th", {
    staticClass: "text-center text-uppercase",
    attrs: {
      scope: "row",
      colspan: "4"
    }
  }, [_vm._v("\n                    RentaCred\n                    ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("td", {
    attrs: {
      colspan: "4"
    }
  }, [_c("div", {
    staticClass: "d-flex flex-column text-secondary justify-content-center align-items-center text-center py-5"
  }, [_c("i", {
    staticClass: "icofont-warning icofont-4x"
  }), _vm._v(" "), _c("h4", {
    staticClass: "my-2"
  }, [_vm._v("\n                                        Veuillez renseigner un dossier crédit\n                                    ")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("th"), _vm._v(" "), _c("th", [_vm._v("Frais de dossier / Commissions")]), _vm._v(" "), _c("th", [_vm._v("Intérêt annuel")]), _vm._v(" "), _c("th", [_vm._v("Prime de risque")]), _vm._v(" "), _c("th", [_vm._v("Autres revenus sur crédit")]), _vm._v(" "), _c("th", [_vm._v("Total")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("span", {
    staticClass: "cursor-pointer",
    attrs: {
      title: "Masquer les tableaux de calculs"
    }
  }, [_c("i", {
    staticClass: "icofont-rounded-up"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    attrs: {
      id: "thead_revenus_sur_credit"
    }
  }, [_c("tr", {
    staticClass: "bg-grey"
  }, [_c("th", {
    staticClass: "text-center text-capitalize",
    attrs: {
      colspan: "4"
    }
  }, [_vm._v("Revenus sur crédit")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/urgentissimo/TU1.vue?vue&type=style&index=0&id=1bcd7c4f&lang=css&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/urgentissimo/TU1.vue?vue&type=style&index=0&id=1bcd7c4f&lang=css&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.bg-grey[data-v-1bcd7c4f] {\r\n    background-color: #f4f3f3;\n}\nth[data-v-1bcd7c4f] {\r\n    background: #f4f3f3;\n}\n.head-memorandum-title[data-v-1bcd7c4f] {\r\n    margin-top: 15px;\r\n    padding: 16px;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    background-color: #34495e;\r\n    border: 2px solid #575759;\r\n    box-shadow: 1px 3px 4px #ddd;\r\n    font-size: 16px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    border-radius: 10px;\r\n    margin-bottom: 15px;\n}\n.bg-relooker[data-v-1bcd7c4f] {\r\n    background-color: #2c3e50;\r\n    color: white;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/urgentissimo/TU1.vue?vue&type=style&index=0&id=1bcd7c4f&lang=css&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/urgentissimo/TU1.vue?vue&type=style&index=0&id=1bcd7c4f&lang=css&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TU1_vue_vue_type_style_index_0_id_1bcd7c4f_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TU1.vue?vue&type=style&index=0&id=1bcd7c4f&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/urgentissimo/TU1.vue?vue&type=style&index=0&id=1bcd7c4f&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TU1_vue_vue_type_style_index_0_id_1bcd7c4f_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TU1_vue_vue_type_style_index_0_id_1bcd7c4f_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/offview/microfinance/cofina/memo/urgentissimo/TU1.vue":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/offview/microfinance/cofina/memo/urgentissimo/TU1.vue ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TU1_vue_vue_type_template_id_1bcd7c4f_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TU1.vue?vue&type=template&id=1bcd7c4f&scoped=true */ "./resources/js/components/offview/microfinance/cofina/memo/urgentissimo/TU1.vue?vue&type=template&id=1bcd7c4f&scoped=true");
/* harmony import */ var _TU1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TU1.vue?vue&type=script&lang=js */ "./resources/js/components/offview/microfinance/cofina/memo/urgentissimo/TU1.vue?vue&type=script&lang=js");
/* harmony import */ var _TU1_vue_vue_type_style_index_0_id_1bcd7c4f_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TU1.vue?vue&type=style&index=0&id=1bcd7c4f&lang=css&scoped=true */ "./resources/js/components/offview/microfinance/cofina/memo/urgentissimo/TU1.vue?vue&type=style&index=0&id=1bcd7c4f&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TU1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _TU1_vue_vue_type_template_id_1bcd7c4f_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _TU1_vue_vue_type_template_id_1bcd7c4f_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "1bcd7c4f",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/offview/microfinance/cofina/memo/urgentissimo/TU1.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/offview/microfinance/cofina/memo/urgentissimo/TU1.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/offview/microfinance/cofina/memo/urgentissimo/TU1.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TU1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TU1.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/urgentissimo/TU1.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TU1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/offview/microfinance/cofina/memo/urgentissimo/TU1.vue?vue&type=style&index=0&id=1bcd7c4f&lang=css&scoped=true":
/*!***********************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/microfinance/cofina/memo/urgentissimo/TU1.vue?vue&type=style&index=0&id=1bcd7c4f&lang=css&scoped=true ***!
  \***********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TU1_vue_vue_type_style_index_0_id_1bcd7c4f_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TU1.vue?vue&type=style&index=0&id=1bcd7c4f&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/urgentissimo/TU1.vue?vue&type=style&index=0&id=1bcd7c4f&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/offview/microfinance/cofina/memo/urgentissimo/TU1.vue?vue&type=template&id=1bcd7c4f&scoped=true":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/microfinance/cofina/memo/urgentissimo/TU1.vue?vue&type=template&id=1bcd7c4f&scoped=true ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TU1_vue_vue_type_template_id_1bcd7c4f_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TU1_vue_vue_type_template_id_1bcd7c4f_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TU1_vue_vue_type_template_id_1bcd7c4f_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TU1.vue?vue&type=template&id=1bcd7c4f&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/urgentissimo/TU1.vue?vue&type=template&id=1bcd7c4f&scoped=true");


/***/ }),

/***/ "./resources/js/components/parts/RentaCred.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/parts/RentaCred.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RentaCred_vue_vue_type_template_id_eacfd3a8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RentaCred.vue?vue&type=template&id=eacfd3a8 */ "./resources/js/components/parts/RentaCred.vue?vue&type=template&id=eacfd3a8");
/* harmony import */ var _RentaCred_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RentaCred.vue?vue&type=script&lang=js */ "./resources/js/components/parts/RentaCred.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RentaCred_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _RentaCred_vue_vue_type_template_id_eacfd3a8__WEBPACK_IMPORTED_MODULE_0__.render,
  _RentaCred_vue_vue_type_template_id_eacfd3a8__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/parts/RentaCred.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/parts/RentaCred.vue?vue&type=script&lang=js":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/parts/RentaCred.vue?vue&type=script&lang=js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RentaCred_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RentaCred.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/parts/RentaCred.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RentaCred_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/parts/RentaCred.vue?vue&type=template&id=eacfd3a8":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/parts/RentaCred.vue?vue&type=template&id=eacfd3a8 ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RentaCred_vue_vue_type_template_id_eacfd3a8__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RentaCred_vue_vue_type_template_id_eacfd3a8__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RentaCred_vue_vue_type_template_id_eacfd3a8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RentaCred.vue?vue&type=template&id=eacfd3a8 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/parts/RentaCred.vue?vue&type=template&id=eacfd3a8");


/***/ })

}]);