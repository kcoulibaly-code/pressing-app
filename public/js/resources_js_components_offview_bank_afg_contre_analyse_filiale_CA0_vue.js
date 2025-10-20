"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_offview_bank_afg_contre_analyse_filiale_CA0_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA0.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA0.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    dossier_credit: Object
  },
  computed: {},
  created: function created() {
    var _this = this;
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _this$dossier_credit, _this$dossier_credit2;
      var applied_templ_name, tbArrays;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            applied_templ_name = (_this$dossier_credit = _this.dossier_credit) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.applied_templ_name; // console.log(applied_templ_name);
            tbArrays = _this.determineCredPubTables(applied_templ_name, _this.dossier_credit);
            _this.credpubIn0 = tbArrays[0];
            _this.credpubIn1 = tbArrays[3];
            _this.credpubIn2 = tbArrays[4];
            _this.credpubIn3 = tbArrays[5];
            _this.credpubIn4 = tbArrays[6];
            _this.cred_pub_tb_120001 = (_this$dossier_credit2 = _this.dossier_credit) === null || _this$dossier_credit2 === void 0 ? void 0 : _this$dossier_credit2[_this.credpubIn0],
            // console.log(this.credpubIn0, this.credpubIn1, this.credpubIn2, this.credpubIn3, this.credpubIn4);
            EventBus.$on("dossier-updated-cace-0", function (data) {
              var item = data.data0;
              _this.cred_pub_tb_14070 = item;
            });
          case 8:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  data: function data() {
    var _this$dossier_credit3;
    var vm = this;
    return {
      credpubIn0: null,
      credpubIn1: null,
      credpubIn2: null,
      credpubIn3: null,
      credpubIn4: null,
      cred_pub_tb_120001: null,
      cred_pub_tb_14070: (_this$dossier_credit3 = this.dossier_credit) === null || _this$dossier_credit3 === void 0 ? void 0 : _this$dossier_credit3.cred_pub_tb_14070
    };
  },
  methods: {
    calculerAge: function calculerAge(dateNaissance) {
      // Convertir la date de naissance en objet Date
      var naissance = new Date(dateNaissance);
      var aujourdHui = new Date();

      // Calculer la différence d'années
      var age = aujourdHui.getFullYear() - naissance.getFullYear();

      // Vérifier si l'anniversaire est déjà passé cette année
      var moisActuel = aujourdHui.getMonth();
      var jourActuel = aujourdHui.getDate();
      var moisNaissance = naissance.getMonth();
      var jourNaissance = naissance.getDate();
      if (moisActuel < moisNaissance || moisActuel === moisNaissance && jourActuel < jourNaissance) {
        age--; // L'anniversaire n'est pas encore passé cette année
      }
      return age;
    },
    calculerAnciennete: function calculerAnciennete(dateEmbauche) {
      var embauche = new Date(dateEmbauche);
      var aujourdHui = new Date();
      var annees = aujourdHui.getFullYear() - embauche.getFullYear();
      var mois = aujourdHui.getMonth() - embauche.getMonth();
      var jours = aujourdHui.getDate() - embauche.getDate();
      if (jours < 0) {
        // Aller chercher le nombre de jours du mois précédent
        var dernierJourMoisPrecedent = new Date(aujourdHui.getFullYear(), aujourdHui.getMonth(), 0).getDate();
        jours += dernierJourMoisPrecedent;
        mois--;
      }
      if (mois < 0) {
        mois += 12;
        annees--;
      }

      // Construction du texte de sortie
      var result = [];
      if (annees > 0) result.push("".concat(annees, " an").concat(annees > 1 ? 's' : ''));
      if (mois > 0) result.push("".concat(mois, " mois"));
      if (jours > 0) result.push("".concat(jours, " jour").concat(jours > 1 ? 's' : ''));
      return result.length ? result.join(', ') : "Moins d'un jour";
    },
    formatDate: function formatDate(date) {
      if (!date) return '';
      var d = new Date(date);
      var day = String(d.getDate()).padStart(2, '0');
      var month = String(d.getMonth() + 1).padStart(2, '0');
      var year = d.getFullYear();
      return "".concat(day, "-").concat(month, "-").concat(year);
    },
    showSecureNumber: function showSecureNumber(val) {
      if ([null, undefined].includes(val)) {
        return 0;
      }
      return val;
    },
    formatDateMonthYear: function formatDateMonthYear(dateStr) {
      // console.log('dateStr ', dateStr);

      if (Array.isArray(dateStr)) {
        dateStr = dateStr[1];
      }
      if ([undefined, null, ''].includes(dateStr)) return '';
      var _dateStr$split = dateStr.split('-'),
        _dateStr$split2 = _slicedToArray(_dateStr$split, 2),
        year = _dateStr$split2[0],
        month = _dateStr$split2[1];
      var mois = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
      var moisIndex = parseInt(month, 10) - 1;
      if (moisIndex < 0 || moisIndex > 11) return "".concat(year); // fallback si mauvais mois
      return "".concat(mois[moisIndex], " ").concat(year);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA0.vue?vue&type=template&id=54a346fe&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA0.vue?vue&type=template&id=54a346fe&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$cred_pub_tb_, _vm$cred_pub_tb_2, _vm$cred_pub_tb_3, _vm$cred_pub_tb_4, _vm$cred_pub_tb_5, _vm$cred_pub_tb_6, _vm$cred_pub_tb_7, _vm$cred_pub_tb_8, _vm$cred_pub_tb_9, _vm$cred_pub_tb_0, _vm$cred_pub_tb_1, _vm$cred_pub_tb_10, _vm$cred_pub_tb_11, _vm$cred_pub_tb_12, _vm$cred_pub_tb_13, _vm$cred_pub_tb_14, _vm$cred_pub_tb_15, _vm$cred_pub_tb_16, _vm$cred_pub_tb_17, _vm$cred_pub_tb_18, _vm$cred_pub_tb_19, _this$cred_pub_tb_, _vm$cred_pub_tb_20, _vm$cred_pub_tb_21, _vm$cred_pub_tb_22, _vm$cred_pub_tb_23, _vm$cred_pub_tb_24, _vm$cred_pub_tb_25, _vm$cred_pub_tb_26, _vm$cred_pub_tb_27, _vm$cred_pub_tb_28, _vm$cred_pub_tb_29, _vm$cred_pub_tb_30, _vm$cred_pub_tb_31, _vm$cred_pub_tb_32, _vm$cred_pub_tb_35, _vm$cred_pub_tb_36, _vm$cred_pub_tb_37, _vm$cred_pub_tb_38, _vm$cred_pub_tb_39, _vm$cred_pub_tb_40, _vm$cred_pub_tb_41, _vm$cred_pub_tb_42, _vm$cred_pub_tb_43, _vm$cred_pub_tb_44, _vm$cred_pub_tb_45;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "justify-content-center"
  }, [_vm.dossier_credit.tbs_in_use.includes("tb14070") ? _c("div", {
    staticClass: "table-responsive mt-3 py-3"
  }, [_c("table", {
    staticClass: "table table-bordered mb-4"
  }, [_c("tbody", [_c("tr", [_c("td", {
    staticClass: "col-6 table-title fw-bold"
  }, [_vm._v("Nom du client")]), _vm._v(" "), _c("td", {
    staticClass: "col-6 td-center"
  }, [_vm._v(_vm._s((_vm$cred_pub_tb_ = _vm.cred_pub_tb_120001) === null || _vm$cred_pub_tb_ === void 0 ? void 0 : _vm$cred_pub_tb_.denomination_client))])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "col-6 table-title fw-bold"
  }, [_vm._v("Indice")]), _vm._v(" "), _c("td", {
    staticClass: "col-6 td-center"
  }, [_vm._v(_vm._s((_vm$cred_pub_tb_2 = _vm.cred_pub_tb_120001) === null || _vm$cred_pub_tb_2 === void 0 ? void 0 : _vm$cred_pub_tb_2.indice))])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "col-6 table-title fw-bold"
  }, [_vm._v("Date de naissance")]), _vm._v(" "), _c("td", {
    staticClass: "col-6 td-center"
  }, [_vm._v("\n                            " + _vm._s(_vm._f("formatDate")((_vm$cred_pub_tb_3 = _vm.cred_pub_tb_120001) === null || _vm$cred_pub_tb_3 === void 0 ? void 0 : _vm$cred_pub_tb_3.date_naissance)) + "\n                            ")])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "col-6 table-title fw-bold"
  }, [_vm._v("Ancienneté dans la relation")]), _vm._v(" "), _c("td", {
    staticClass: "col-6 td-center"
  }, [_vm._v(_vm._s(_vm.calculerAnciennete((_vm$cred_pub_tb_4 = _vm.cred_pub_tb_14070) === null || _vm$cred_pub_tb_4 === void 0 ? void 0 : _vm$cred_pub_tb_4.anciennete_de_la_relation)))])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "col-6 table-title fw-bold"
  }, [_vm._v("Société Target Market?")]), _vm._v(" "), _c("td", {
    staticClass: "col-6 td-center"
  }, [_vm._v(_vm._s((_vm$cred_pub_tb_5 = _vm.cred_pub_tb_14070) === null || _vm$cred_pub_tb_5 === void 0 ? void 0 : _vm$cred_pub_tb_5.target_market) + "\n                            " + _vm._s((_vm$cred_pub_tb_6 = _vm.cred_pub_tb_14070) !== null && _vm$cred_pub_tb_6 !== void 0 && _vm$cred_pub_tb_6.employeur ? "(" + _vm.cred_pub_tb_14070.employeur + ")" : "") + "\n                        ")])]), _vm._v(" "), ((_vm$cred_pub_tb_7 = _vm.cred_pub_tb_14070) === null || _vm$cred_pub_tb_7 === void 0 ? void 0 : _vm$cred_pub_tb_7.target_market) == "OUI" ? _c("tr", [_c("td", {
    staticClass: "col-6 table-title fw-bold"
  }, [_vm._v("Date de création de l'employeur")]), _vm._v(" "), _c("td", {
    staticClass: "col-6 td-center"
  }, [_vm._v(_vm._s(_vm._f("formatDate")((_vm$cred_pub_tb_8 = _vm.cred_pub_tb_14070) === null || _vm$cred_pub_tb_8 === void 0 ? void 0 : _vm$cred_pub_tb_8.anciennete_pro)) + " ")])]) : _vm._e(), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "col-6 table-title fw-bold"
  }, [_vm._v("Agence")]), _vm._v(" "), _c("td", {
    staticClass: "col-6 td-center"
  }, [_vm._v(_vm._s((_vm$cred_pub_tb_9 = _vm.cred_pub_tb_14070) === null || _vm$cred_pub_tb_9 === void 0 ? void 0 : _vm$cred_pub_tb_9.agence))])]), _vm._v(" "), !["CRESCO", "Découvert Privilège"].includes(_vm.dossier_credit.applied_templ_name) ? _c("tr", [_c("td", {
    staticClass: "col-6 table-title fw-bold"
  }, [_vm._v("Nationalité")]), _vm._v(" "), _c("td", {
    staticClass: "col-6 td-center"
  }, [_vm._v(_vm._s((_vm$cred_pub_tb_0 = _vm.cred_pub_tb_14070) === null || _vm$cred_pub_tb_0 === void 0 ? void 0 : _vm$cred_pub_tb_0.nationnalite))])]) : _vm._e(), _vm._v(" "), _c("tr", [_vm._m(0), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$cred_pub_tb_1 = _vm.cred_pub_tb_14070) === null || _vm$cred_pub_tb_1 === void 0 ? void 0 : _vm$cred_pub_tb_1.type_contrat))])]), _vm._v(" "), ((_vm$cred_pub_tb_10 = _vm.cred_pub_tb_14070) === null || _vm$cred_pub_tb_10 === void 0 ? void 0 : _vm$cred_pub_tb_10.type_contrat) === "CDI" ? _c("tr", [_vm._m(1), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatDate")((_vm$cred_pub_tb_11 = _vm.cred_pub_tb_14070) === null || _vm$cred_pub_tb_11 === void 0 ? void 0 : _vm$cred_pub_tb_11.annee_act_emploi)))])]) : _vm._e(), _vm._v(" "), ["CDD", "INTÉRIM"].includes((_vm$cred_pub_tb_12 = _vm.cred_pub_tb_14070) === null || _vm$cred_pub_tb_12 === void 0 ? void 0 : _vm$cred_pub_tb_12.type_contrat) ? _c("tr", [_vm._m(2), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatDate")((_vm$cred_pub_tb_13 = _vm.cred_pub_tb_14070) === null || _vm$cred_pub_tb_13 === void 0 ? void 0 : _vm$cred_pub_tb_13.date_debut_cdd_interim)))])]) : _vm._e(), _vm._v(" "), ["CDD", "INTÉRIM"].includes((_vm$cred_pub_tb_14 = _vm.cred_pub_tb_14070) === null || _vm$cred_pub_tb_14 === void 0 ? void 0 : _vm$cred_pub_tb_14.type_contrat) ? _c("tr", [_vm._m(3), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatDate")((_vm$cred_pub_tb_15 = _vm.cred_pub_tb_14070) === null || _vm$cred_pub_tb_15 === void 0 ? void 0 : _vm$cred_pub_tb_15.data_expiration_cdd_interim)))])]) : _vm._e()])])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [!["CRESCO", "Découvert Privilège"].includes(_vm.dossier_credit.applied_templ_name) ? _c("div", {
    staticClass: "col-12"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(4), _vm._v(" "), _c("tbody", {
    staticStyle: {
      "font-size": "0.9rem"
    }
  }, [_c("tr", [_vm._m(5), _vm._v(" "), _c("td", {}, [_vm._v(_vm._s((_vm$cred_pub_tb_16 = _vm.cred_pub_tb_14070) === null || _vm$cred_pub_tb_16 === void 0 ? void 0 : _vm$cred_pub_tb_16.matrimoniale))]), _vm._v(" "), _vm._m(6), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$cred_pub_tb_17 = (_vm$cred_pub_tb_18 = _vm.cred_pub_tb_14070) === null || _vm$cred_pub_tb_18 === void 0 ? void 0 : _vm$cred_pub_tb_18.regime_matrimonial) !== null && _vm$cred_pub_tb_17 !== void 0 ? _vm$cred_pub_tb_17 : "-"))])]), _vm._v(" "), _c("tr", [_vm._m(7), _vm._v(" "), _c("td", {}, [_vm._v(_vm._s((_vm$cred_pub_tb_19 = _vm.cred_pub_tb_14070) === null || _vm$cred_pub_tb_19 === void 0 ? void 0 : _vm$cred_pub_tb_19.habitation))]), _vm._v(" "), _vm._m(8), _vm._v(" "), _c("td", {}, [_vm._v(_vm._s(_vm.formatDateMonthYear((_this$cred_pub_tb_ = this.cred_pub_tb_14070) === null || _this$cred_pub_tb_ === void 0 ? void 0 : _this$cred_pub_tb_.anciennete_adresse)))])]), _vm._v(" "), _c("tr", [_vm._m(9), _vm._v(" "), _c("td", {}, [_vm._v(_vm._s((_vm$cred_pub_tb_20 = _vm.cred_pub_tb_14070) === null || _vm$cred_pub_tb_20 === void 0 ? void 0 : _vm$cred_pub_tb_20.nbre_enfant))]), _vm._v(" "), _vm._m(10), _vm._v(" "), _c("td", [_vm._v("-")])])])])]) : _vm._e()]), _vm._v(" "), ((_vm$cred_pub_tb_21 = _vm.cred_pub_tb_14070) === null || _vm$cred_pub_tb_21 === void 0 ? void 0 : _vm$cred_pub_tb_21.matrimoniale) == "Marié(e)" && !["CRESCO", "Découvert Privilège"].includes(_vm.dossier_credit.applied_templ_name) ? _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(11), _vm._v(" "), _c("tbody", {
    staticStyle: {
      "font-size": "0.9rem"
    }
  }, [_c("tr", [_vm._m(12), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$cred_pub_tb_22 = (_vm$cred_pub_tb_23 = _vm.cred_pub_tb_14070) === null || _vm$cred_pub_tb_23 === void 0 || (_vm$cred_pub_tb_23 = _vm$cred_pub_tb_23.conjoint) === null || _vm$cred_pub_tb_23 === void 0 ? void 0 : _vm$cred_pub_tb_23.nom) !== null && _vm$cred_pub_tb_22 !== void 0 ? _vm$cred_pub_tb_22 : "-"))]), _vm._v(" "), _vm._m(13), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$cred_pub_tb_24 = (_vm$cred_pub_tb_25 = _vm.cred_pub_tb_14070) === null || _vm$cred_pub_tb_25 === void 0 || (_vm$cred_pub_tb_25 = _vm$cred_pub_tb_25.conjoint) === null || _vm$cred_pub_tb_25 === void 0 ? void 0 : _vm$cred_pub_tb_25.prenoms) !== null && _vm$cred_pub_tb_24 !== void 0 ? _vm$cred_pub_tb_24 : "-"))])]), _vm._v(" "), _c("tr", [_vm._m(14), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$cred_pub_tb_26 = (_vm$cred_pub_tb_27 = _vm.cred_pub_tb_14070) === null || _vm$cred_pub_tb_27 === void 0 || (_vm$cred_pub_tb_27 = _vm$cred_pub_tb_27.conjoint) === null || _vm$cred_pub_tb_27 === void 0 ? void 0 : _vm$cred_pub_tb_27.matrimoniale) !== null && _vm$cred_pub_tb_26 !== void 0 ? _vm$cred_pub_tb_26 : "-"))]), _vm._v(" "), _vm._m(15), _vm._v(" "), _c("td", [_vm._v(_vm._s((_vm$cred_pub_tb_28 = (_vm$cred_pub_tb_29 = _vm.cred_pub_tb_14070) === null || _vm$cred_pub_tb_29 === void 0 || (_vm$cred_pub_tb_29 = _vm$cred_pub_tb_29.conjoint) === null || _vm$cred_pub_tb_29 === void 0 ? void 0 : _vm$cred_pub_tb_29.adresse) !== null && _vm$cred_pub_tb_28 !== void 0 ? _vm$cred_pub_tb_28 : "-"))])])])])])]) : _vm._e(), _vm._v(" "), _c("div", [_vm._m(16), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered full-width-table"
  }, [_c("thead", [_c("tr", [_c("td", {
    staticClass: "th",
    staticStyle: {
      "min-width": "200px"
    }
  }, [_vm._v("Revenu")]), _vm._v(" "), _c("td", {
    staticClass: "th",
    staticStyle: {
      "min-width": "150px"
    }
  }, [_vm._v("Montant")]), _vm._v(" "), ((_vm$cred_pub_tb_30 = _vm.cred_pub_tb_14070) === null || _vm$cred_pub_tb_30 === void 0 ? void 0 : _vm$cred_pub_tb_30.matrimoniale) == "Marié(e)" ? _c("td", {
    staticClass: "th",
    staticStyle: {
      "min-width": "150px"
    }
  }, [_vm._v("Conjoint(e)")]) : _vm._e(), _vm._v(" "), ((_vm$cred_pub_tb_31 = _vm.cred_pub_tb_14070) === null || _vm$cred_pub_tb_31 === void 0 ? void 0 : _vm$cred_pub_tb_31.matrimoniale) == "Marié(e)" ? _c("td", {
    staticClass: "th",
    staticStyle: {
      "min-width": "150px"
    }
  }, [_vm._v("Total")]) : _vm._e(), _vm._v(" "), _c("td", {
    staticClass: "th"
  }, [_vm._v("Eligible")]), _vm._v(" "), _c("td", {
    staticClass: "th text-center",
    attrs: {
      "data-toggle": "tooltip",
      title: "Source de remboursement",
      "data-placement": "top"
    }
  }, [_vm._v("SR")]), _vm._v(" "), _c("td", {
    staticClass: "th",
    staticStyle: {
      "min-width": "150px"
    }
  }, [_vm._v("Périodicité")]), _vm._v(" "), _c("td", {
    staticClass: "th",
    staticStyle: {
      "min-width": "150px"
    }
  }, [_vm._v("Mensualité")]), _vm._v(" "), _c("td", {
    staticClass: "th",
    staticStyle: {
      "min-width": "100px"
    }
  }, [_vm._v("Taux")]), _vm._v(" "), _c("td", {
    staticClass: "th",
    staticStyle: {
      "min-width": "150px"
    }
  }, [_vm._v("Montant pondéré")]), _vm._v(" "), _c("td", {
    staticClass: "th",
    staticStyle: {
      "min-width": "100px"
    }
  }, [_vm._v("TQC AFG BANK")]), _vm._v(" "), _c("td", {
    staticClass: "th",
    staticStyle: {
      "min-width": "150px"
    }
  }, [_vm._v("QC AFG BANK")]), _vm._v(" "), _c("td", {
    staticClass: "th",
    staticStyle: {
      "min-width": "100px"
    }
  }, [_vm._v("TQC Général")]), _vm._v(" "), _c("td", {
    staticClass: "th",
    staticStyle: {
      "min-width": "150px"
    }
  }, [_vm._v("QC Général")]), _vm._v(" "), _c("td", {
    staticClass: "th",
    staticStyle: {
      "min-width": "280px"
    }
  }, [_vm._v("Commentaire")])])]), _vm._v(" "), _c("tbody", [_vm._l((_vm$cred_pub_tb_32 = _vm.cred_pub_tb_14070) === null || _vm$cred_pub_tb_32 === void 0 ? void 0 : _vm$cred_pub_tb_32.revenu_domicilie_afg, function (el, ind) {
    var _vm$cred_pub_tb_33, _vm$cred_pub_tb_34;
    return _c("tr", {
      key: ind
    }, [el.checked == true ? [_c("td", [_c("input", {
      staticClass: "form-check bg-grey custom-checkbox",
      staticStyle: {
        width: "unset",
        height: "unset",
        display: "unset"
      },
      attrs: {
        type: "checkbox",
        disabled: ""
      },
      domProps: {
        checked: el.checked
      }
    }), _vm._v("\n                                        " + _vm._s(el.libelle) + "\n                                    ")]), _vm._v(" "), _c("td", [_vm._v("\n                                        " + _vm._s(el.montant_emprunteur) + "\n                                        "), el.libelle == "Salaire net" && el.checked ? _c("div", {
      staticClass: "mt-1 d-flex align-items-baseline",
      staticStyle: {
        "font-size": "12px"
      }
    }, [_vm._m(17, true), _vm._v("\n                                            " + _vm._s(_vm.cred_pub_tb_14070.salaire_brut) + "\n                                        ")]) : _vm._e()]), _vm._v(" "), ((_vm$cred_pub_tb_33 = _vm.cred_pub_tb_14070) === null || _vm$cred_pub_tb_33 === void 0 ? void 0 : _vm$cred_pub_tb_33.matrimoniale) == "Marié(e)" ? _c("td", [_vm._v("\n                                        " + _vm._s(_vm._f("formatNumber")(el.montant_conjoint)) + "\n                                    ")]) : _vm._e(), _vm._v(" "), ((_vm$cred_pub_tb_34 = _vm.cred_pub_tb_14070) === null || _vm$cred_pub_tb_34 === void 0 ? void 0 : _vm$cred_pub_tb_34.matrimoniale) == "Marié(e)" ? _c("td", [_vm._v("\n                                        " + _vm._s(_vm._f("formatNumber")(el.total_ligne)) + "\n                                    ")]) : _vm._e(), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [_c("input", {
      staticClass: "form-check bg-grey custom-checkbox",
      staticStyle: {
        width: "unset",
        height: "unset",
        display: "unset"
      },
      attrs: {
        type: "checkbox",
        disabled: ""
      },
      domProps: {
        checked: el.eligible
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [_c("input", {
      staticClass: "form-check bg-grey custom-checkbox",
      staticStyle: {
        width: "unset",
        height: "unset",
        display: "unset"
      },
      attrs: {
        type: "checkbox",
        disabled: ""
      },
      domProps: {
        checked: el.source_remboursement
      }
    })]), _vm._v(" "), _c("td", [_vm._v(" " + _vm._s(el.periodicite) + " ")]), _vm._v(" "), _c("td", [_vm._v(" " + _vm._s(_vm._f("formatNumber")(el.mensualite)) + " ")]), _vm._v(" "), _c("td", [_vm._v(" " + _vm._s(el.taux) + " % ")]), _vm._v(" "), _c("td", [_vm._v(" " + _vm._s(_vm._f("formatNumber")(el.montant_pondere)) + " ")]), _vm._v(" "), _c("td", [_vm._v(" " + _vm._s(el.taux_qc1) + " % ")]), _vm._v(" "), _c("td", [_vm._v(" " + _vm._s(_vm._f("formatNumber")(el.montant_qc1)) + " ")]), _vm._v(" "), _c("td", [_vm._v(" " + _vm._s(el.taux_qc2) + " % ")]), _vm._v(" "), _c("td", [_vm._v(" " + _vm._s(_vm._f("formatNumber")(el.montant_qc2)) + " ")]), _vm._v(" "), _c("td", [_vm._v(" " + _vm._s(el.commentaire) + " ")])] : _vm._e()], 2);
  }), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "fw-bold vertical-middle"
  }, [_vm._v("Total")]), _vm._v(" "), _c("td", [_vm._v(" " + _vm._s(_vm._f("formatNumber")((_vm$cred_pub_tb_35 = _vm.cred_pub_tb_14070) === null || _vm$cred_pub_tb_35 === void 0 ? void 0 : _vm$cred_pub_tb_35.revenu_total_colonne_emprunteur)) + " ")]), _vm._v(" "), ((_vm$cred_pub_tb_36 = _vm.cred_pub_tb_14070) === null || _vm$cred_pub_tb_36 === void 0 ? void 0 : _vm$cred_pub_tb_36.matrimoniale) == "Marié(e)" ? _c("td", [_vm._v(" \n                                    " + _vm._s(_vm.showSecureNumber((_vm$cred_pub_tb_37 = _vm.cred_pub_tb_14070) === null || _vm$cred_pub_tb_37 === void 0 ? void 0 : _vm$cred_pub_tb_37.revenu_total_colonne_conjoint)) + " \n                                ")]) : _vm._e(), _vm._v(" "), ((_vm$cred_pub_tb_38 = _vm.cred_pub_tb_14070) === null || _vm$cred_pub_tb_38 === void 0 ? void 0 : _vm$cred_pub_tb_38.matrimoniale) == "Marié(e)" ? _c("td", [_vm._v(" \n                                    " + _vm._s(_vm.showSecureNumber((_vm$cred_pub_tb_39 = _vm.cred_pub_tb_14070) === null || _vm$cred_pub_tb_39 === void 0 ? void 0 : _vm$cred_pub_tb_39.revenu_total)) + " \n                                ")]) : _vm._e(), _vm._v(" "), _c("td", {
    attrs: {
      colspan: "3"
    }
  }), _vm._v(" "), _c("td", [_vm._v(" " + _vm._s((_vm$cred_pub_tb_40 = _vm.cred_pub_tb_14070) === null || _vm$cred_pub_tb_40 === void 0 ? void 0 : _vm$cred_pub_tb_40.revenu_total_colonne_mensualite) + " ")]), _vm._v(" "), _c("td"), _vm._v(" "), _c("td", [_vm._v(" " + _vm._s((_vm$cred_pub_tb_41 = _vm.cred_pub_tb_14070) === null || _vm$cred_pub_tb_41 === void 0 ? void 0 : _vm$cred_pub_tb_41.revenu_total_colonne_montant_pondere) + " ")]), _vm._v(" "), _c("td", [_vm._v(" " + _vm._s((_vm$cred_pub_tb_42 = _vm.cred_pub_tb_14070) === null || _vm$cred_pub_tb_42 === void 0 ? void 0 : _vm$cred_pub_tb_42.revenu_total_colonne_taux_qc1) + " % ")]), _vm._v(" "), _c("td", [_vm._v(" " + _vm._s((_vm$cred_pub_tb_43 = _vm.cred_pub_tb_14070) === null || _vm$cred_pub_tb_43 === void 0 ? void 0 : _vm$cred_pub_tb_43.revenu_total_colonne_montant_qc1) + " ")]), _vm._v(" "), _c("td", [_vm._v(" " + _vm._s((_vm$cred_pub_tb_44 = _vm.cred_pub_tb_14070) === null || _vm$cred_pub_tb_44 === void 0 ? void 0 : _vm$cred_pub_tb_44.revenu_total_colonne_taux_qc2) + " % ")]), _vm._v(" "), _c("td", [_vm._v(" " + _vm._s((_vm$cred_pub_tb_45 = _vm.cred_pub_tb_14070) === null || _vm$cred_pub_tb_45 === void 0 ? void 0 : _vm$cred_pub_tb_45.revenu_total_colonne_montant_qc2) + " ")])])], 2)])])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("b", [_vm._v("Type de contrat")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("b", [_vm._v("Date début emploi actuel")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("b", [_vm._v("Date de début du CDD/INTÉRIM")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("b", [_vm._v("Date d'expiration du CDD/INTÉRIM")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticClass: "th text-nowrap text-center bg-grey",
    attrs: {
      colspan: "4"
    }
  }, [_c("b", [_vm._v("Situation familiale")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {}, [_c("b", [_vm._v("Situation matrimoniale")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("b", [_vm._v("Régime matrimonial")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {}, [_c("b", [_vm._v("Type de logement")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {}, [_c("b", [_vm._v("Ancienneté à l'adresse actuelle")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {}, [_c("b", [_vm._v("Nombre d'enfants ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("b", [_vm._v("-")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticClass: "th text-nowrap text-center bg-grey",
    attrs: {
      colspan: "4"
    }
  }, [_c("b", [_vm._v("Conjoint(e)")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("b", [_vm._v("Nom")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("b", [_vm._v("Prénom")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("b", [_vm._v("Situation matrimoniale")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("b", [_vm._v("Adresse")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "text-center mb-2"
  }, [_c("span", {
    staticStyle: {
      "text-decoration": "underline",
      "font-size": "18px"
    }
  }, [_vm._v("Revenu domicilié à AFG BANK")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "text-nowrap mx-1 fw-bold",
    attrs: {
      "for": ""
    }
  }, [_c("i", [_vm._v("Salaire brut :")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA0.vue?vue&type=style&index=0&id=54a346fe&scoped=true&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA0.vue?vue&type=style&index=0&id=54a346fe&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\nfieldset[data-v-54a346fe] {\n    border: 1px solid #ddd !important;\n    position: relative;\n    padding-left: 10px !important;\n    width: 100%;\n    background-color: #f5f5f5;\n    margin-top: 15px;\n}\nlegend[data-v-54a346fe] {\n    font-weight: bold;\n    padding: 4px;\n    width: -moz-max-content;\n    width: max-content;\n    padding: 0 15px;\n    font-size: 16px;\n    float: none;\n    background-color: #ffffff;\n    border: 1px solid #ddd;\n    border-radius: 4px;\n}\n.cell[data-v-54a346fe] {\n    display: flex;\n    gap: 1px;\n    flex-direction: column;\n}\n.bold[data-v-54a346fe] {\n    font-weight: bold;\n}\n.memo[data-v-54a346fe] {\n    margin-top: 10px;\n    padding: 10px;\n    border: 2px solid #fff;\n    font-weight: 550;\n    font-size: 16px;\n    text-align: left;\n    text-transform: uppercase;\n    background-color: #34495e;\n    color: #fff;\n}\n\n/* th {\nbackground: #f4f3f3 !important;\n} */\n.bg-grey[data-v-54a346fe] {\n    background-color: #f4f3f3;\n    width: 32%;\n}\ninput[type=checkbox][data-v-54a346fe] {\n    /* Double-sized Checkboxes */\n    /* IE */\n    /* FF */\n    /* Safari and Chrome */\n    /* Opera */\n    transform: scale(1.4);\n    padding: 10px;\n}\n.head-memorandum-title[data-v-54a346fe] {\n    margin-top: 15px;\n    padding: 16px;\n    color: #fff;\n    font-weight: bold;\n    background-color: #34495e;\n    border: 2px solid #575759;\n    box-shadow: 1px 3px 4px #ddd;\n    font-size: 16px;\n    text-align: center;\n    text-transform: uppercase;\n    border-radius: 10px;\n    margin-bottom: 15px;\n}\n.checkboxtext[data-v-54a346fe] {\n    /* Checkbox text */\n    font-size: 110%;\n    display: inline;\n}\n.nota-bene[data-v-54a346fe] {\n    font-size: 12px !important;\n}\n.table[data-v-54a346fe] {\n    border: unset;\n}\nol[data-v-54a346fe],\nli[data-v-54a346fe] {\n    list-style-type: revert-layer;\n}\ninput[type=\"checkbox\"][data-v-54a346fe]:disabled:checked {\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none;\n    /* Supprime le style natif */\n    /* width: 10px;*/\n    min-height: unset !important;\n\n    padding: 7px;\n    background-color: #007bff;\n    /* Bleu */\n    /* border: 2px solid #007bff; Bordure bleue */\n    border-radius: 2px;\n    position: relative;\n    cursor: not-allowed;\n    margin-top: 5px;\n}\ninput[type=\"checkbox\"][data-v-54a346fe]:disabled:checked::after {\n    content: '✔';\n    color: white;\n    font-size: 8px;\n    font-weight: bold;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n.th[data-v-54a346fe] {\n    text-wrap: nowrap;\n}\n.big-text[data-v-54a346fe] {\n    font-size: 16px;\n    text-transform: uppercase;\n    color: #34495e;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA0.vue?vue&type=style&index=0&id=54a346fe&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA0.vue?vue&type=style&index=0&id=54a346fe&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA0_vue_vue_type_style_index_0_id_54a346fe_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CA0.vue?vue&type=style&index=0&id=54a346fe&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA0.vue?vue&type=style&index=0&id=54a346fe&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA0_vue_vue_type_style_index_0_id_54a346fe_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA0_vue_vue_type_style_index_0_id_54a346fe_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA0.vue":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA0.vue ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CA0_vue_vue_type_template_id_54a346fe_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CA0.vue?vue&type=template&id=54a346fe&scoped=true */ "./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA0.vue?vue&type=template&id=54a346fe&scoped=true");
/* harmony import */ var _CA0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CA0.vue?vue&type=script&lang=js */ "./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA0.vue?vue&type=script&lang=js");
/* harmony import */ var _CA0_vue_vue_type_style_index_0_id_54a346fe_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CA0.vue?vue&type=style&index=0&id=54a346fe&scoped=true&lang=css */ "./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA0.vue?vue&type=style&index=0&id=54a346fe&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CA0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CA0_vue_vue_type_template_id_54a346fe_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _CA0_vue_vue_type_template_id_54a346fe_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "54a346fe",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/offview/bank/afg/contre_analyse_filiale/CA0.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA0.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA0.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CA0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CA0.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA0.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CA0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA0.vue?vue&type=style&index=0&id=54a346fe&scoped=true&lang=css":
/*!*****************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA0.vue?vue&type=style&index=0&id=54a346fe&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA0_vue_vue_type_style_index_0_id_54a346fe_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CA0.vue?vue&type=style&index=0&id=54a346fe&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA0.vue?vue&type=style&index=0&id=54a346fe&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA0.vue?vue&type=template&id=54a346fe&scoped=true":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA0.vue?vue&type=template&id=54a346fe&scoped=true ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA0_vue_vue_type_template_id_54a346fe_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA0_vue_vue_type_template_id_54a346fe_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA0_vue_vue_type_template_id_54a346fe_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CA0.vue?vue&type=template&id=54a346fe&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/contre_analyse_filiale/CA0.vue?vue&type=template&id=54a346fe&scoped=true");


/***/ })

}]);