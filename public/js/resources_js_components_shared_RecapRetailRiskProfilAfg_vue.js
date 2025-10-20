"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_shared_RecapRetailRiskProfilAfg_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/RecapRetailRiskProfilAfg.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/RecapRetailRiskProfilAfg.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "RecapRetailRiskProfilAfg",
  props: {
    dossier_credit: Object,
    authcheckUsr: Object
  },
  components: {},
  data: function data() {
    return {
      credpubIn0: null,
      credpubIn1: null,
      credpubIn2: null,
      credpubIn3: null,
      maskedBtn: false,
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__["default"].host,
      checkVerifyCanApprove: false,
      type_carcasse: "",
      montant_sollicite: 0,
      exposition_globale: 0,
      questions_resume: [],
      mapping_questions: [{
        number_tb: "cred_pub_tb_120001",
        keyof_key: "personne_politiquement_expose",
        question: "Personne politiquement exposé (PPE) ?",
        filiale: ['AFGB CM', 'AFGB ML']
      }, {
        number_tb: "cred_pub_tb_120001",
        keyof_key: "is_partie_liee",
        question: "Parties liées (Administrateurs, dirigeants, actionnaires) ?",
        filiale: ['AFGB CM', 'AFGB ML']
      }, {
        number_tb: "cred_pub_tb_120001",
        keyof_key: "is_ex_contentieux",
        question: "Ce client est-il un ex-contentieux ?",
        filiale: ['AFGB CM', 'AFGB ML']
      }, {
        number_tb: "cred_pub_tb_120004",
        keyof_key: "pret_couvert_cash_call",
        question: "Prêt couvert avec 100% Cash Collatéral ?",
        filiale: ['AFGB CM', 'AFGB ML']
      }, {
        number_tb: "cred_pub_tb_120004",
        keyof_key: "forfait",
        question: "Est-il un forfait ?",
        filiale: ['AFGB ML']
      }, {
        number_tb: "cred_pub_tb_120004",
        keyof_key: "is_except_prog_fin",
        question: "La présente demande est-elle une exception à un/des programme(s) de financements validés",
        filiale: ['AFGB CM', 'AFGB ML']
      }, {
        number_tb: "cred_pub_tb_120004",
        keyof_key: "is_caractere_locatif",
        question: "Le(s) prêt(s) immobilier(s) sollicité(s) ci-dessus sont-ils à caractère locatif ?",
        filiale: ['AFGB CM', 'AFGB ML']
      }]
    };
  },
  created: function created() {
    var _this = this;
    EventBus.$emit('get-exposition-ask');
    EventBus.$on('send-exposition-resp', function (data) {
      var _data$exposition_glob;
      _this.exposition_globale = (_data$exposition_glob = data === null || data === void 0 ? void 0 : data.exposition_globale) !== null && _data$exposition_glob !== void 0 ? _data$exposition_glob : 0;
    });
  },
  mounted: function mounted() {
    var _this2 = this;
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _this2$dossier_credit;
      var applied_templ_name, tbArrays;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            applied_templ_name = (_this2$dossier_credit = _this2.dossier_credit) === null || _this2$dossier_credit === void 0 ? void 0 : _this2$dossier_credit.applied_templ_name;
            tbArrays = _this2.determineCredPubTables(applied_templ_name, _this2.dossier_credit);
            _this2.credpubIn0 = tbArrays[0];
            _this2.credpubIn1 = ["CRESCO", "Découvert Privilège"].includes(applied_templ_name) ? tbArrays[0] : tbArrays[1];
            _this2.credpubIn2 = tbArrays[2];
            _this2.credpubIn3 = tbArrays[3];
            EventBus.$emit('value-updated');
            _this2.initData();
          case 8:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  computed: {
    diffAmount: function diffAmount() {
      if (this.exposition_globale != this.montant_sollicite) {
        return true;
      }
      return false;
    },
    showEmployeur: function showEmployeur() {
      var _this$dossier_credit, _this$dossier_credit3, _this$dossier_credit5, _this$dossier_credit$, _this$dossier_credit6;
      var applied_templ_name = (_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.applied_templ_name;
      if (applied_templ_name == 'DAD / DAE') {
        var _this$dossier_credit2;
        return (_this$dossier_credit2 = this.dossier_credit) === null || _this$dossier_credit2 === void 0 || (_this$dossier_credit2 = _this$dossier_credit2["cred_pub_tb_15010"]) === null || _this$dossier_credit2 === void 0 || (_this$dossier_credit2 = _this$dossier_credit2.convention_entreprise) === null || _this$dossier_credit2 === void 0 ? void 0 : _this$dossier_credit2.denomination;
      }
      if (['', null, undefined].includes((_this$dossier_credit3 = this.dossier_credit) === null || _this$dossier_credit3 === void 0 || (_this$dossier_credit3 = _this$dossier_credit3[this.credpubIn1]) === null || _this$dossier_credit3 === void 0 ? void 0 : _this$dossier_credit3.statut_entreprise)) {
        var _this$dossier_credit4;
        return (_this$dossier_credit4 = this.dossier_credit) === null || _this$dossier_credit4 === void 0 || (_this$dossier_credit4 = _this$dossier_credit4[this.credpubIn1]) === null || _this$dossier_credit4 === void 0 ? void 0 : _this$dossier_credit4.entreprise;
      }
      return ((_this$dossier_credit5 = this.dossier_credit) === null || _this$dossier_credit5 === void 0 || (_this$dossier_credit5 = _this$dossier_credit5[this.credpubIn1]) === null || _this$dossier_credit5 === void 0 ? void 0 : _this$dossier_credit5.entreprise) + ' (' + ((_this$dossier_credit$ = (_this$dossier_credit6 = this.dossier_credit) === null || _this$dossier_credit6 === void 0 || (_this$dossier_credit6 = _this$dossier_credit6[this.credpubIn1]) === null || _this$dossier_credit6 === void 0 ? void 0 : _this$dossier_credit6.statut_entreprise) !== null && _this$dossier_credit$ !== void 0 ? _this$dossier_credit$ : "") + ')';
    },
    accessShowMore: function accessShowMore() {
      var _this$dossier_credit7;
      return ["Proposition de crédit aux particuliers"].includes((_this$dossier_credit7 = this.dossier_credit) === null || _this$dossier_credit7 === void 0 ? void 0 : _this$dossier_credit7.applied_templ_name);
    }
  },
  methods: {
    validateRp: function validateRp(rep) {
      // if (this.ongoingDesc) {
      //     return;
      // }

      this.maskedBtn = true;
      this.$emit('validate-rp', rep);
      this.checkVerifyCanApprove = rep;
    },
    initData: function initData() {
      var _this$dossier_credit8,
        _this$dossier_credit9,
        _this$dossier_credit$2,
        _this$dossier_credit0,
        _this$dossier_credit1,
        _this3 = this;
      this.montant_sollicite = 0;
      this.exposition_globale = 0;
      var applied_templ_name = (_this$dossier_credit8 = this.dossier_credit) === null || _this$dossier_credit8 === void 0 ? void 0 : _this$dossier_credit8.applied_templ_name;
      this.maskedBtn = false;
      this.checkVerifyCanApprove = false;
      this.type_carcasse = (_this$dossier_credit9 = this.dossier_credit) === null || _this$dossier_credit9 === void 0 || (_this$dossier_credit9 = _this$dossier_credit9[this.credpubIn0]) === null || _this$dossier_credit9 === void 0 ? void 0 : _this$dossier_credit9.carcasse_type;
      this.exposition_globale = (_this$dossier_credit$2 = (_this$dossier_credit0 = this.dossier_credit) === null || _this$dossier_credit0 === void 0 || (_this$dossier_credit0 = _this$dossier_credit0[this.credpubIn0]) === null || _this$dossier_credit0 === void 0 ? void 0 : _this$dossier_credit0.exposition_globale) !== null && _this$dossier_credit$2 !== void 0 ? _this$dossier_credit$2 : 0;
      var facilites_sollicitees = [];
      if (!['', null, undefined].includes((_this$dossier_credit1 = this.dossier_credit) === null || _this$dossier_credit1 === void 0 ? void 0 : _this$dossier_credit1[this.credpubIn3])) {
        var _this$dossier_credit$3;
        facilites_sollicitees = (_this$dossier_credit$3 = this.dossier_credit[this.credpubIn3]) === null || _this$dossier_credit$3 === void 0 ? void 0 : _this$dossier_credit$3.facilites_sollicitees;
      }
      if (facilites_sollicitees.length > 0) {
        facilites_sollicitees.forEach(function (el) {
          var _el$montant_credit;
          var mt = Number(el === null || el === void 0 || (_el$montant_credit = el.montant_credit) === null || _el$montant_credit === void 0 ? void 0 : _el$montant_credit.toString().replace(/\s/g, ""));
          if (mt > 0) {
            var _this3$montant_sollic;
            _this3.montant_sollicite = Number((_this3$montant_sollic = _this3.montant_sollicite) === null || _this3$montant_sollic === void 0 ? void 0 : _this3$montant_sollic.toString().replace(/\s/g, "")) + mt;
          }
        });
      }
      if (applied_templ_name == 'DAD / DAE') {
        this.exposition_globale = 0;
        this.montant_sollicite = 0;
        if (facilites_sollicitees.length > 0) {
          facilites_sollicitees.forEach(function (el) {
            var _el$montant_demande, _el$encours_apres;
            var mt = Number(el === null || el === void 0 || (_el$montant_demande = el.montant_demande) === null || _el$montant_demande === void 0 ? void 0 : _el$montant_demande.toString().replace(/\s/g, ""));
            if (mt > 0) {
              _this3.montant_sollicite = mt + _this3.montant_sollicite;
            }
            _this3.exposition_globale = Number(el === null || el === void 0 || (_el$encours_apres = el.encours_apres) === null || _el$encours_apres === void 0 ? void 0 : _el$encours_apres.toString().replace(/\s/g, "")) + _this3.exposition_globale;
          });
        }
      }
      this.questions_resume = this.mapping_questions.reduce(function (acc, mqt) {
        var _this3$dossier_credit, _this3$authcheckUsr;
        var currentTB = (_this3$dossier_credit = _this3.dossier_credit) === null || _this3$dossier_credit === void 0 ? void 0 : _this3$dossier_credit[mqt.number_tb];
        var currentval = currentTB === null || currentTB === void 0 ? void 0 : currentTB[mqt.keyof_key];
        var value = _this3.verifResponse(currentval);
        if (mqt !== null && mqt !== void 0 && mqt.filiale.includes((_this3$authcheckUsr = _this3.authcheckUsr) === null || _this3$authcheckUsr === void 0 ? void 0 : _this3$authcheckUsr.filiale)) {
          acc.push({
            libelle: mqt.question,
            response: value
          });
        }
        return acc;
      }, []);
    },
    openModal: function openModal() {
      this.$modal.show("confirm_voir_plus_retail");
    },
    closeModal: function closeModal() {
      this.$modal.hide("confirm_voir_plus_retail");
    },
    verifResponse: function verifResponse(val) {
      if ([undefined, '', null].includes(val)) {
        return 'NON';
      }
      return val === null || val === void 0 ? void 0 : val.toUpperCase();
    }
  },
  watch: {
    dossier_credit: {
      handler: function handler() {
        if (this.checkVerifyCanApprove) return;
        this.initData();
      },
      deep: true,
      immediate: true
    }
  },
  beforeDestroy: function beforeDestroy() {
    EventBus.$off('send-exposition-resp');
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/RecapRetailRiskProfilAfg.vue?vue&type=template&id=23446504":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/RecapRetailRiskProfilAfg.vue?vue&type=template&id=23446504 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$dossier_credit;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticStyle: {
      margin: "10px"
    }
  }, [[_c("h1", {
    staticClass: "text-center",
    staticStyle: {
      color: "#34495e"
    }
  }, [_vm._v("\n            Récapitulatif du Profil de Risque\n        ")]), _vm._v(" "), _c("hr"), _vm._v(" "), _vm.checkVerifyCanApprove ? [_vm._m(0)] : _c("div", [_c("table", {
    staticClass: "table"
  }, [_c("tbody", [_vm._m(1), _vm._v(" "), _c("tr", [_c("th", {
    attrs: {
      scope: "row"
    }
  }, [_vm._v("Type de Clientèle")]), _vm._v(" "), _c("td", {
    attrs: {
      scope: "row"
    }
  }, [_vm._v("\n                            " + _vm._s((_vm$dossier_credit = _vm.dossier_credit) === null || _vm$dossier_credit === void 0 || (_vm$dossier_credit = _vm$dossier_credit[_vm.credpubIn3]) === null || _vm$dossier_credit === void 0 ? void 0 : _vm$dossier_credit.type_de_clientele) + "\n                        ")])]), _vm._v(" "), _c("tr", [_c("th", {
    attrs: {
      scope: "row"
    }
  }, [_vm._v("Employeur")]), _vm._v(" "), _c("td", {
    attrs: {
      scope: "row"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.showEmployeur) + "\n                        ")])]), _vm._v(" "), _c("tr", [_c("th", {
    attrs: {
      scope: "row"
    }
  }, [_vm._v("Montant du crédit demandé")]), _vm._v(" "), _c("td", {
    attrs: {
      scope: "row"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm._f("formatNumber")(_vm.montant_sollicite)) + "\n                        ")])]), _vm._v(" "), _c("tr", [_c("th", {
    attrs: {
      scope: "row"
    }
  }, [_vm._v("Exposition à autoriser")]), _vm._v(" "), _c("td", {
    style: _vm.diffAmount ? "color: #dd3c4c; font-weight: bold" : "",
    attrs: {
      scope: "row"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm._f("formatNumber")(_vm.exposition_globale)) + "\n                        ")])]), _vm._v(" "), _vm.accessShowMore ? _c("tr", {
    staticStyle: {
      "text-align": "center",
      color: "red",
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        return _vm.openModal();
      }
    }
  }, [_c("th", {
    staticStyle: {
      background: "#00000012"
    },
    attrs: {
      colspan: "2",
      scope: "row"
    }
  }, [_vm._v(" -- Voir plus -- ")])]) : _vm._e()])]), _vm._v(" "), !_vm.maskedBtn ? _c("h6", {
    staticClass: "text-center"
  }, [_vm._v("\n                Approuvez vous ce profil de risque ?\n            ")]) : _vm._e(), _vm._v(" "), !_vm.maskedBtn ? _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm-6 col-md-6 col-lg-6"
  }, [_c("div", {
    staticClass: "text-center"
  }, [_c("button", {
    staticClass: "btn btn-danger",
    staticStyle: {
      width: "100%",
      height: "8vh",
      "background-color": "#e74c3c"
    },
    attrs: {
      title: "Non"
    },
    on: {
      click: function click($event) {
        return _vm.validateRp(false);
      }
    }
  }, [_c("i", {
    staticClass: "icofont icofont-close icofont-3x"
  })]), _vm._v(" "), _vm._m(2)])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-6 col-md-6 col-lg-6"
  }, [_c("div", {
    staticClass: "text-center"
  }, [_c("button", {
    staticClass: "btn btn-success",
    staticStyle: {
      width: "100%",
      height: "8vh",
      "background-color": "#27ae60"
    },
    attrs: {
      title: "Oui"
    },
    on: {
      click: function click($event) {
        return _vm.validateRp(true);
      }
    }
  }, [_c("i", {
    staticClass: "icofont icofont-check icofont-3x"
  })]), _vm._v(" "), _vm._m(3)])])]) : _vm._e()])], _vm._v(" "), _c("modal", {
    staticClass: "pb-5",
    attrs: {
      name: "confirm_voir_plus_retail",
      width: "900",
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
  }, [_c("h1", {
    staticClass: "text-center",
    staticStyle: {
      color: "#34495e"
    }
  }, [_vm._v("\n                Informations supplementaires\n            ")]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("table", {
    staticClass: "table"
  }, [_c("tbody", _vm._l(_vm.questions_resume, function (qst) {
    return _c("tr", [_c("th", {
      staticClass: "col-10",
      attrs: {
        scope: "row"
      }
    }, [_vm._v(" " + _vm._s(qst === null || qst === void 0 ? void 0 : qst.libelle) + " ")]), _vm._v(" "), _c("td", {
      staticClass: "col-2",
      staticStyle: {
        "align-content": "center"
      },
      attrs: {
        scope: "row"
      }
    }, [_vm._v("\n                            " + _vm._s(qst.response) + "\n                        ")])]);
  }), 0)]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-end"
  }, [_c("button", {
    staticClass: "btn border-none",
    staticStyle: {
      "background-color": "rgb(156 166 177) !important",
      color: "white"
    },
    on: {
      click: function click($event) {
        return _vm.closeModal();
      }
    }
  }, [_vm._v("Fermer")])])])])], 2);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "d-flex justify-content-center text-center align-items-center text-muted py-4"
  }, [_c("div", [_c("span", {
    staticClass: "spinner-border spinner-border"
  }), _vm._v(" "), _c("h5", [_vm._v("\n                        Chargement des données en cours ... "), _c("br"), _vm._v("\n                        Ceci peut prendre un peu de temps\n                    ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("th", {
    staticClass: "text-center",
    attrs: {
      colspan: "2"
    }
  }, [_c("span", {
    staticClass: "text-danger fw-bold"
  }, [_vm._v("\n                                Veuillez lire attentivement toutes les informations ci-dessous avant validation. Votre vigilance est essentielle pour assurer le bon routage du dossier de crédit.\n                            ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("b", [_vm._v("Non")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("b", [_vm._v("Oui")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/shared/RecapRetailRiskProfilAfg.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/shared/RecapRetailRiskProfilAfg.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RecapRetailRiskProfilAfg_vue_vue_type_template_id_23446504__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RecapRetailRiskProfilAfg.vue?vue&type=template&id=23446504 */ "./resources/js/components/shared/RecapRetailRiskProfilAfg.vue?vue&type=template&id=23446504");
/* harmony import */ var _RecapRetailRiskProfilAfg_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RecapRetailRiskProfilAfg.vue?vue&type=script&lang=js */ "./resources/js/components/shared/RecapRetailRiskProfilAfg.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RecapRetailRiskProfilAfg_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _RecapRetailRiskProfilAfg_vue_vue_type_template_id_23446504__WEBPACK_IMPORTED_MODULE_0__.render,
  _RecapRetailRiskProfilAfg_vue_vue_type_template_id_23446504__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/shared/RecapRetailRiskProfilAfg.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/shared/RecapRetailRiskProfilAfg.vue?vue&type=script&lang=js":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/shared/RecapRetailRiskProfilAfg.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RecapRetailRiskProfilAfg_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RecapRetailRiskProfilAfg.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/RecapRetailRiskProfilAfg.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RecapRetailRiskProfilAfg_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shared/RecapRetailRiskProfilAfg.vue?vue&type=template&id=23446504":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/shared/RecapRetailRiskProfilAfg.vue?vue&type=template&id=23446504 ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RecapRetailRiskProfilAfg_vue_vue_type_template_id_23446504__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RecapRetailRiskProfilAfg_vue_vue_type_template_id_23446504__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RecapRetailRiskProfilAfg_vue_vue_type_template_id_23446504__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RecapRetailRiskProfilAfg.vue?vue&type=template&id=23446504 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/RecapRetailRiskProfilAfg.vue?vue&type=template&id=23446504");


/***/ })

}]);