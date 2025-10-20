"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_parts_TableauPonderationARC_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/parts/TableauPonderationARC.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/parts/TableauPonderationARC.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'TableauPonderation',
  props: {
    dossier_credit: {
      type: Object,
      required: true,
      "default": {}
    },
    depot_de_garantie: {
      type: Number,
      required: true,
      "default": null
    },
    coming_form: String
  },
  data: function data() {
    return {
      CONFIG: {
        LOADER_DELAY_TIME_IN_MS: 500,
        // half a second
        MIN_UPDATE_INTERVAL_IN_S: 5 // 5 seconds
      },
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_1__["default"].host,
      ERR_AMOUNT_ZERO: 'montant crédit zéro',
      ERR_AMOUNT_UNDEFINED: 'montant crédit non défini',
      errorMessage: null,
      errorHint: null,
      isLoading: null,
      lastUpdateTimestamp: null,
      NULL_INDICATOR: 0,
      ponderationData: null,
      ponderations: [{
        'title': "Montant de crédit proposé",
        'slug': 'montant_credit',
        'value': 100
      }, {
        'title': "Caution hypothécaire",
        'slug': 'caution_hypothecaire',
        'value': 70
      }, {
        'title': "Promesses d'affectation hypothécaire",
        'slug': 'promesse_affectation_hypothecaire',
        'value': 70
      }, {
        'title': 'Caution solidaire',
        'slug': 'caution_solidaire',
        // 'value': 20,
        'value': 0
      }, {
        'title': 'Dépôt de garantie',
        'slug': 'depot_de_garantie',
        'value': 100
      }, {
        'title': 'Gage de biens mobiliers',
        'slug': 'gages',
        'value': 50
      }, {
        'title': 'Hypothèque ferme',
        'slug': 'hypotheque_ferme',
        'value': 80
      }, {
        'title': 'Protections financières éligibles (Garantie/Assurance crédit)',
        'slug': 'protections_financieres_eligibles',
        'value': 90
      }, {
        'title': 'Nantissement de fonds de commerce',
        'slug': 'nantissement_de_fonds_de_commerce',
        'value': 0
      }, {
        'title': 'Nantissement de stock',
        'slug': 'nantissement_de_stock',
        'value': 0
      }],
      ponderationTotals: null,
      read_only: false
    };
  },
  computed: {
    // totalMontantBrutSansPonderation(){
    //     let total = 0;
    //     this.ponderations?.forEach(p => {
    //         const montant = this.montantBrutSansPonderation(p);
    //         if(this.valueIsInvalid(montant)){
    //             total += 0;
    //         }else{
    //             total += parseInt(montant);
    //         }
    //     });
    //     return total;
    // },
    // totalMontantAvecPonderation(){
    //     let total = 0;
    //     this.ponderations?.forEach((p,idx) => {
    //         if(idx != 0){
    //             const montant = this.montantAvecPonderation(p);
    //             if(this.valueIsInvalid(montant)){
    //                 total += 0;
    //             }else{
    //                 total += parseInt(montant);
    //             }
    //         }
    //     });
    //     return total;
    // },
    // ratioDeCouverture(){
    //     if(!this.ponderationTotals) return null;
    //     const montant = this.ponderationTotals?.montant_credit ?? null;
    //     let error = '';
    //     if(montant == 0){
    //         error = this.ERR_AMOUNT_ZERO;
    //     }
    //     if(montant == null || montant == undefined){
    //         error = this.ERR_AMOUNT_UNDEFINED;
    //     }
    //     if(this.valueIsInvalid(montant)){
    //         this.setError("Montant crédit invalide !", "Assurez-vous d'avoir rempli le montant crédit dans la Fiche signalétique T0")
    //         return this.NULL_INDICATOR +' - '+ error;
    //     }
    //     const denom = parseInt(this.trim(montant));
    //     let ratio = (this.totalMontantAvecPonderation  / denom)*100;
    //     return (ratio?.toFixed(2) ?? this.NULL_INDICATOR) + '%'
    // },

    // tableau_ponderation(){
    //     return {
    //         ponderations: this.ponderations,
    //         total_montant_brut_sans_ponderation: this.totalMontantBrutSansPonderation,
    //         total_montant_avec_ponderation: this.totalMontantAvecPonderation,
    //         ratio_de_couverture: this.ratioDeCouverture,
    //     }
    // }
  },
  mounted: function mounted() {
    this.computePonderationTotals();
    EventBus.$on('autosaving', this.computePonderationTotals);
  },
  methods: {
    _formatNumber: function _formatNumber(value) {
      var _this$localeStringToF;
      if (this.valueIsInvalid(value)) return this.NULL_INDICATOR;
      return ((_this$localeStringToF = this.localeStringToFloat(String(value))) === null || _this$localeStringToF === void 0 ? void 0 : _this$localeStringToF.toLocaleString('fr-FR')) || 0;
    },
    autosaving: function autosaving() {
      var _this = this;
      if (this.read_only) return;
      if (this.canLaunchAutosaving() === true) {
        _services_auth_service__WEBPACK_IMPORTED_MODULE_0__["default"].loadUserData().then(function (res) {
          _this.send2Backend(res);
        })["catch"](function (err) {
          // this.loadWithError(err);
        });
      }
    },
    clearError: function clearError() {
      this.errorMessage = null;
      this.errorHint = null;
    },
    calcRatioDeCouverture: function calcRatioDeCouverture() {
      var _this$ponderationTota, _this$ponderationTota2;
      var total_montant_avec_ponderation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      if (!this.ponderationTotals) return null;
      var montant = (_this$ponderationTota = (_this$ponderationTota2 = this.ponderationTotals) === null || _this$ponderationTota2 === void 0 ? void 0 : _this$ponderationTota2.montant_credit) !== null && _this$ponderationTota !== void 0 ? _this$ponderationTota : null;
      var error = '';
      if (montant == 0) {
        error = this.ERR_AMOUNT_ZERO;
      }
      if (montant == null || montant == undefined) {
        error = this.ERR_AMOUNT_UNDEFINED;
      }
      if (this.valueIsInvalid(montant)) {
        this.setError("Montant crédit invalide !", "Assurez-vous d'avoir rempli le montant crédit dans la Fiche signalétique T0");
        return null;
      }
      try {
        var _this$ponderationData, _ratio$toFixed;
        var denom = parseInt(this.trim(montant));
        // let ratio = (this.totalMontantAvecPonderation  / denom)*100;
        var ratio = (total_montant_avec_ponderation !== null && total_montant_avec_ponderation !== void 0 ? total_montant_avec_ponderation : (_this$ponderationData = this.ponderationData) === null || _this$ponderationData === void 0 ? void 0 : _this$ponderationData.total_montant_avec_ponderation) / denom * 100;
        return ((_ratio$toFixed = ratio === null || ratio === void 0 ? void 0 : ratio.toFixed(2)) !== null && _ratio$toFixed !== void 0 ? _ratio$toFixed : this.NULL_INDICATOR) + '%';
      } catch (error) {
        return null;
      }
    },
    calcTotalMontantAvecPonderation: function calcTotalMontantAvecPonderation() {
      var _ref,
        _this2 = this;
      var ponderations = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var total = 0;
      (_ref = ponderations !== null && ponderations !== void 0 ? ponderations : this.ponderations) === null || _ref === void 0 || _ref.forEach(function (p, idx) {
        if (idx != 0) {
          var montant = _this2.montantAvecPonderation(p);
          if (_this2.valueIsInvalid(montant)) {
            total += 0;
          } else {
            total += parseInt(montant);
          }
        }
      });
      return total;
    },
    calcTotalMontantBrutSansPonderation: function calcTotalMontantBrutSansPonderation() {
      var _ref2,
        _this3 = this;
      var ponderations = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var total = 0;
      (_ref2 = ponderations !== null && ponderations !== void 0 ? ponderations : this.ponderations) === null || _ref2 === void 0 || _ref2.forEach(function (p) {
        var montant = _this3.montantBrutSansPonderation(p);
        if (_this3.valueIsInvalid(montant)) {
          total += 0;
        } else {
          total += parseInt(montant);
        }
      });
      return total;
    },
    computePonderationTotals: function computePonderationTotals() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _this4$CONFIG, _this4$CONFIG2, _this4$dossier_credit, _this4$determineCredP, _this4$dossier_credit6, _this4$CONFIG3, _this4$dossier_credit2, _this4$dossier_credit3, _this4$dossier_credit4, _this4$dossier_credit5, credTbKeys, credPubTb1, credPubTb4, montant_credit, total_caution_hypothecaires_valeur_considere, total_promesse_affectation_hypothecaires_valeur_considere, total_cautionnement_solidaires_valeur_cautionnement, cautionnement_solidaires, total_gages_valeur_considere, total_hypotheques_valeur_considere, total_protection_financieres_valeur_marchande, nantissement_de_fonds_de_commerce_valeur_marchande, nantissement_de_stock_valeur_marchande, caution_solidaire, depot_de_garantie, ponderations, total_montant_brut_sans_ponderation, total_montant_avec_ponderation, ratio_de_couverture, updated_at;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!_this4.isLoading) {
                _context.next = 2;
                break;
              }
              return _context.abrupt("return");
            case 2:
              _context.prev = 2;
              _this4.isLoading = true;
              _context.next = 6;
              return _this4.$sleep((_this4$CONFIG = _this4.CONFIG) === null || _this4$CONFIG === void 0 ? void 0 : _this4$CONFIG.LOADER_DELAY_TIME_IN_MS);
            case 6:
              // ?- FOr visual feedback
              _this4.clearError();
              if (!((new Date().getTime() - _this4.lastUpdateTimestamp) / 1000 < ((_this4$CONFIG2 = _this4.CONFIG) === null || _this4$CONFIG2 === void 0 ? void 0 : _this4$CONFIG2.MIN_UPDATE_INTERVAL_IN_S))) {
                _context.next = 10;
                break;
              }
              _this4.$console.log(":: last update less than", (_this4$CONFIG3 = _this4.CONFIG) === null || _this4$CONFIG3 === void 0 ? void 0 : _this4$CONFIG3.MIN_UPDATE_INTERVAL_IN_S, "s ago. Cancelling");
              return _context.abrupt("return");
            case 10:
              if (!((_this4$dossier_credit = _this4.dossier_credit) !== null && _this4$dossier_credit !== void 0 && _this4$dossier_credit.tableau_ponderation_arc)) {
                _context.next = 17;
                break;
              }
              _this4.ponderationData = (_this4$dossier_credit2 = (_this4$dossier_credit3 = _this4.dossier_credit) === null || _this4$dossier_credit3 === void 0 ? void 0 : _this4$dossier_credit3.tableau_ponderation_arc) !== null && _this4$dossier_credit2 !== void 0 ? _this4$dossier_credit2 : null;
              _this4.ponderationTotals = (_this4$dossier_credit4 = (_this4$dossier_credit5 = _this4.dossier_credit) === null || _this4$dossier_credit5 === void 0 || (_this4$dossier_credit5 = _this4$dossier_credit5.tableau_ponderation_arc) === null || _this4$dossier_credit5 === void 0 ? void 0 : _this4$dossier_credit5.totals) !== null && _this4$dossier_credit4 !== void 0 ? _this4$dossier_credit4 : null;
              if (!_this4.read_only) {
                _context.next = 17;
                break;
              }
              _this4.$console.log("::read_only", !!_this4.ponderationData);
              if (!_this4.ponderationData) {
                _context.next = 17;
                break;
              }
              return _context.abrupt("return");
            case 17:
              if (_this4.depot_de_garantie) {
                _context.next = 21;
                break;
              }
              _this4.errorMessage = "Dépot de garantie non défini";
              _this4.errorHint = "Veuillez vous assurez que le montant du dépot de garantie a bien été renseigné";
              return _context.abrupt("return");
            case 21:
              // 
              credTbKeys = (_this4$determineCredP = _this4.determineCredPubTables(_this4.dossier_credit["applied_templ_name"])) !== null && _this4$determineCredP !== void 0 ? _this4$determineCredP : null;
              if (credTbKeys) {
                _context.next = 25;
                break;
              }
              _this4.setError("Certains éléments du dossier crédit sont introuvables", "Veuillez contacter le support technique");
              return _context.abrupt("return");
            case 25:
              credPubTb1 = _this4.dossier_credit[credTbKeys[1]];
              credPubTb4 = _this4.coming_form == "ARC" ? (_this4$dossier_credit6 = _this4.dossier_credit) === null || _this4$dossier_credit6 === void 0 ? void 0 : _this4$dossier_credit6.cred_pub_tb_49 : _this4.dossier_credit[credTbKeys[4]];
              montant_credit = credPubTb1.montant_credit;
              total_caution_hypothecaires_valeur_considere = credPubTb4.total_caution_hypothecaires_valeur_considere, total_promesse_affectation_hypothecaires_valeur_considere = credPubTb4.total_promesse_affectation_hypothecaires_valeur_considere, total_cautionnement_solidaires_valeur_cautionnement = credPubTb4.total_cautionnement_solidaires_valeur_cautionnement, cautionnement_solidaires = credPubTb4.cautionnement_solidaires, total_gages_valeur_considere = credPubTb4.total_gages_valeur_considere, total_hypotheques_valeur_considere = credPubTb4.total_hypotheques_valeur_considere, total_protection_financieres_valeur_marchande = credPubTb4.total_protection_financieres_valeur_marchande, nantissement_de_fonds_de_commerce_valeur_marchande = credPubTb4.nantissement_de_fonds_de_commerce_valeur_marchande, nantissement_de_stock_valeur_marchande = credPubTb4.nantissement_de_stock_valeur_marchande;
              caution_solidaire = total_cautionnement_solidaires_valeur_cautionnement !== null && total_cautionnement_solidaires_valeur_cautionnement !== void 0 ? total_cautionnement_solidaires_valeur_cautionnement : cautionnement_solidaires === null || cautionnement_solidaires === void 0 ? void 0 : cautionnement_solidaires.reduce(function (t, c) {
                var _c$valeur_cautionneme;
                return t + parseInt(((_c$valeur_cautionneme = c === null || c === void 0 ? void 0 : c.valeur_cautionnement) !== null && _c$valeur_cautionneme !== void 0 ? _c$valeur_cautionneme : 0).toString().replace(/\s/g, ''));
              }, 0);
              depot_de_garantie = _this4.depot_de_garantie;
              _this4.ponderationTotals = {
                montant_credit: montant_credit,
                // 
                caution_hypothecaire: total_caution_hypothecaires_valeur_considere,
                promesse_affectation_hypothecaire: total_promesse_affectation_hypothecaires_valeur_considere,
                // 
                caution_solidaire: caution_solidaire,
                depot_de_garantie: depot_de_garantie,
                // 
                gages: total_gages_valeur_considere,
                hypotheque_ferme: total_hypotheques_valeur_considere,
                protections_financieres_eligibles: total_protection_financieres_valeur_marchande,
                nantissement_de_fonds_de_commerce: nantissement_de_fonds_de_commerce_valeur_marchande,
                nantissement_de_stock: nantissement_de_stock_valeur_marchande
              };

              // Parse Ponderation data 
              ponderations = _this4.ponderations;
              total_montant_brut_sans_ponderation = _this4.calcTotalMontantBrutSansPonderation();
              total_montant_avec_ponderation = _this4.calcTotalMontantAvecPonderation(ponderations);
              ratio_de_couverture = _this4.calcRatioDeCouverture(total_montant_avec_ponderation);
              _this4.lastUpdateTimestamp = new Date().getTime();
              updated_at = new Date();
              _this4.ponderationData = {
                ponderations: ponderations,
                total_montant_avec_ponderation: total_montant_avec_ponderation,
                total_montant_brut_sans_ponderation: total_montant_brut_sans_ponderation,
                ratio_de_couverture: ratio_de_couverture,
                totals: _this4.ponderationTotals,
                updated_at: updated_at.toISOString()
              };
              _context.next = 45;
              break;
            case 41:
              _context.prev = 41;
              _context.t0 = _context["catch"](2);
              _this4.errorMessage = "Une erreur s'est produite";
              _this4.errorHint = "Veuillez contacter le support technique";
            case 45:
              _context.prev = 45;
              _this4.isLoading = false;
              return _context.finish(45);
            case 48:
              try {
                _this4.autosaving();
              } catch (error) {
                // this.$console.log("xx error autosaving", error);
              }
            case 49:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[2, 41, 45, 48]]);
      }))();
    },
    montantBrutSansPonderation: function montantBrutSansPonderation() {
      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref3$slug = _ref3.slug,
        slug = _ref3$slug === void 0 ? null : _ref3$slug;
      if (!this.ponderationTotals) return null;
      if (!slug) return null;
      try {
        var _this$ponderationTota3;
        var value = (_this$ponderationTota3 = this.ponderationTotals[slug]) !== null && _this$ponderationTota3 !== void 0 ? _this$ponderationTota3 : null;
        if (this.valueIsInvalid(value)) return null;
        return parseInt(this.trim(value));
      } catch (error) {
        this.$console.log("xx montantBrutSansPonderation ", slug, error);
        return null;
      }
    },
    montantAvecPonderation: function montantAvecPonderation() {
      var ponderation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      if (!ponderation) return null;
      try {
        var montant = this.montantBrutSansPonderation(ponderation);
        if (this.valueIsInvalid(montant)) return null;
        var result = montant * ((ponderation === null || ponderation === void 0 ? void 0 : ponderation.value) / 100);
        return result === null || result === void 0 ? void 0 : result.toFixed(0);
      } catch (error) {
        this.$console.log("xx montantAvecPonderation ", ponderation === null || ponderation === void 0 ? void 0 : ponderation.slug);
        return null;
      }
    },
    send2Backend: function send2Backend(res) {
      var _this$dossier_credit,
        _this5 = this;
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
      this.$axios.post(this.ebapisHost + 'creditbuilder/api/v1/autosaving-akey/', {
        cred_pub_key: (_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.cred_pub_key,
        key_name: "tableau_ponderation_arc",
        key: this.ponderationData
      }).then(function (response) {
        _this5.$emit("autosaving");
      })["catch"](function (error) {
        _this5.$Progress.finish();
      });
    },
    setError: function setError(message) {
      var hint = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      this.errorMessage = message;
      this.errorHint = hint;
    },
    trim: function trim(value) {
      var _value$toString;
      return value === null || value === void 0 || (_value$toString = value.toString()) === null || _value$toString === void 0 ? void 0 : _value$toString.replace(/\s/g, '');
    },
    valueIsInvalid: function valueIsInvalid(value) {
      return value == null || value == undefined || value == '' || this.trim(value) == '';
    }
  },
  watch: {
    depot_de_garantie: function depot_de_garantie(_) {
      this.computePonderationTotals();
    },
    dossier_credit: function dossier_credit(val) {
      if (!val) {
        this.errorMessage = "Dossier crédit non défini";
        this.errorHint = "Veuillez contacter un support technique";
        return;
      }
      this.computePonderationTotals();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/parts/TableauPonderationARC.vue?vue&type=template&id=8c9fc0d2":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/parts/TableauPonderationARC.vue?vue&type=template&id=8c9fc0d2 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$ponderationData, _vm$ponderationData2, _vm$ponderationData3, _vm$ponderationData4, _vm$ponderationData5, _vm$ponderationData$r, _vm$ponderationData6;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {}, [_c("table", {
    staticClass: "table table-bordered table-responsive mb-2"
  }, [_c("thead", {
    staticClass: "bg-ed-primary"
  }, [_c("tr", {
    staticClass: "bg-grey"
  }, [_c("th", {
    staticClass: "p-0",
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      scope: "row",
      colspan: "11"
    }
  }, [_c("div", {
    staticClass: "relative p-2"
  }, [_vm._v("\n\n                        PONDERATIONS\n\n                        "), !_vm.isLoading && !_vm.errorMessage && !_vm.read_only ? _c("div", {
    staticClass: "absolute h-100 px-3 hover-white d-flex gap-2 align-items-center fs-6 fw-medium text-secondary",
    staticStyle: {
      right: "0",
      top: "0"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.computePonderationTotals.apply(null, arguments);
      }
    }
  }, [_c("i", {
    staticClass: "icofont-refresh"
  }), _vm._v("\n                            Actualiser\n                        ")]) : _vm._e()])])]), _vm._v(" "), !_vm.isLoading && !_vm.errorMessage ? _c("tr", {
    staticClass: "bg-light"
  }, [_c("th", {
    attrs: {
      colspan: "7"
    }
  }, [_vm._v("\n                    Intitulés\n                ")]), _vm._v(" "), _c("th", [_vm._v("\n                    Montants bruts\n                ")]), _vm._v(" "), _c("th", {
    attrs: {
      colspan: "2"
    }
  }, [_vm._v("\n                    Poids\n                ")]), _vm._v(" "), _c("th", [_vm._v("\n                    Montants pondérés (net)\n                ")])]) : _vm._e()]), _vm._v(" "), _c("tbody", [_vm.isLoading ? _c("tr", [_c("td", {
    attrs: {
      colspan: "11"
    }
  }, [_c("LoadingIndicator", {
    attrs: {
      text: "Calcul des Ponderations"
    }
  })], 1)]) : [_vm.errorMessage ? _c("tr", [_c("td", {
    attrs: {
      colspan: "11"
    }
  }, [_c("ErrorMessage", {
    staticClass: "border bg-white",
    attrs: {
      errorMessage: _vm.errorMessage,
      errorHint: _vm.errorHint,
      canRetry: !!_vm.dossier_credit && !!_vm.depot_de_garantie,
      retryText: "Recalculer les Ponderations"
    },
    on: {
      retry: _vm.computePonderationTotals
    }
  })], 1)]) : _vm._l((_vm$ponderationData = _vm.ponderationData) === null || _vm$ponderationData === void 0 ? void 0 : _vm$ponderationData.ponderations, function (ponderation, i) {
    var _ponderation$title, _ponderation$value;
    return _c("tr", {
      key: i
    }, [_c("td", {
      attrs: {
        colspan: "7"
      }
    }, [_vm._v("\n                            " + _vm._s((_ponderation$title = ponderation === null || ponderation === void 0 ? void 0 : ponderation.title) !== null && _ponderation$title !== void 0 ? _ponderation$title : _vm.NULL_INDICATOR) + "\n                        ")]), _vm._v(" "), _c("td", {
      staticClass: "text-right"
    }, [_vm._v("\n                            " + _vm._s(_vm.montantBrutSansPonderation(ponderation) != null ? _vm._formatNumber(_vm.montantBrutSansPonderation(ponderation)) : _vm.NULL_INDICATOR) + "\n                        ")]), _vm._v(" "), _c("td", {
      staticClass: "text-right",
      attrs: {
        colspan: "2"
      }
    }, [_vm._v("\n                            " + _vm._s((_ponderation$value = ponderation === null || ponderation === void 0 ? void 0 : ponderation.value) !== null && _ponderation$value !== void 0 ? _ponderation$value : _vm.NULL_INDICATOR) + "% \n                        ")]), _vm._v(" "), _c("td", {
      staticClass: "text-right"
    }, [_vm._v("\n                            " + _vm._s(_vm.montantAvecPonderation(ponderation) != null ? _vm._formatNumber(_vm.montantAvecPonderation(ponderation)) : _vm.NULL_INDICATOR) + "\n                        ")])]);
  })]], 2), _vm._v(" "), !_vm.isLoading && !_vm.errorMessage ? _c("tfoot", [_c("tr", {
    staticClass: "bg-light"
  }, [_c("th", {
    attrs: {
      colspan: "7"
    }
  }, [_vm._v("\n                    Total\n                ")]), _vm._v(" "), _c("th", {
    staticClass: "text-center",
    attrs: {
      colspan: "2"
    }
  }, [_vm._v("\n                    " + _vm._s(((_vm$ponderationData2 = _vm.ponderationData) === null || _vm$ponderationData2 === void 0 ? void 0 : _vm$ponderationData2.total_montant_brut_sans_ponderation) != null ? _vm._formatNumber((_vm$ponderationData3 = _vm.ponderationData) === null || _vm$ponderationData3 === void 0 ? void 0 : _vm$ponderationData3.total_montant_brut_sans_ponderation) : _vm.NULL_INDICATOR) + "\n                ")]), _vm._v(" "), _c("th", {
    staticClass: "text-right",
    attrs: {
      colspan: "2"
    }
  }, [_vm._v("\n                    " + _vm._s(((_vm$ponderationData4 = _vm.ponderationData) === null || _vm$ponderationData4 === void 0 ? void 0 : _vm$ponderationData4.total_montant_avec_ponderation) != null ? _vm._formatNumber((_vm$ponderationData5 = _vm.ponderationData) === null || _vm$ponderationData5 === void 0 ? void 0 : _vm$ponderationData5.total_montant_avec_ponderation) : _vm.NULL_INDICATOR) + "\n                ")])]), _vm._v(" "), _c("tr", {
    staticClass: "bc-teal-light text-white"
  }, [_vm._m(0), _vm._v(" "), _c("td", {
    staticClass: "text-center",
    attrs: {
      colspan: "4"
    }
  }, [_c("h3", {
    staticClass: "mb-0"
  }, [_vm._v("\n                        " + _vm._s((_vm$ponderationData$r = (_vm$ponderationData6 = _vm.ponderationData) === null || _vm$ponderationData6 === void 0 ? void 0 : _vm$ponderationData6.ratio_de_couverture) !== null && _vm$ponderationData$r !== void 0 ? _vm$ponderationData$r : _vm.NULL_INDICATOR) + "\n                    ")])])])]) : _vm._e()])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    attrs: {
      colspan: "7"
    }
  }, [_c("h6", {
    staticClass: "mb-0"
  }, [_vm._v("\n                        RATIO DE COUVERTURE\n                    ")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/parts/TableauPonderationARC.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/parts/TableauPonderationARC.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TableauPonderationARC_vue_vue_type_template_id_8c9fc0d2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TableauPonderationARC.vue?vue&type=template&id=8c9fc0d2 */ "./resources/js/components/parts/TableauPonderationARC.vue?vue&type=template&id=8c9fc0d2");
/* harmony import */ var _TableauPonderationARC_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TableauPonderationARC.vue?vue&type=script&lang=js */ "./resources/js/components/parts/TableauPonderationARC.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TableauPonderationARC_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _TableauPonderationARC_vue_vue_type_template_id_8c9fc0d2__WEBPACK_IMPORTED_MODULE_0__.render,
  _TableauPonderationARC_vue_vue_type_template_id_8c9fc0d2__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/parts/TableauPonderationARC.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/parts/TableauPonderationARC.vue?vue&type=script&lang=js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/parts/TableauPonderationARC.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableauPonderationARC_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TableauPonderationARC.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/parts/TableauPonderationARC.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableauPonderationARC_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/parts/TableauPonderationARC.vue?vue&type=template&id=8c9fc0d2":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/parts/TableauPonderationARC.vue?vue&type=template&id=8c9fc0d2 ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TableauPonderationARC_vue_vue_type_template_id_8c9fc0d2__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TableauPonderationARC_vue_vue_type_template_id_8c9fc0d2__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TableauPonderationARC_vue_vue_type_template_id_8c9fc0d2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TableauPonderationARC.vue?vue&type=template&id=8c9fc0d2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/parts/TableauPonderationARC.vue?vue&type=template&id=8c9fc0d2");


/***/ })

}]);