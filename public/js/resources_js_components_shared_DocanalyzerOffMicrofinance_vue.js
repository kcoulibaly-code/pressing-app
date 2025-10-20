"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_shared_DocanalyzerOffMicrofinance_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/DocanalyzerOffMicrofinance.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/DocanalyzerOffMicrofinance.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_cofina_derogation_manager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/cofina/derogation_manager.js */ "./resources/js/services/cofina/derogation_manager.js");
/* harmony import */ var _services_recouvrement_service_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/recouvrement.service.js */ "./resources/js/services/recouvrement.service.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var COMPONENTS = ['off-microfinance', 'docanal-offmicrofinance', 'avisscranal-offmicrofinance', 'pvanal-offmicrofinance', 'commentaire-dossier', 'credavailtickanal-offmicrofinance', 'pvsjanal-offmicrofinance', 'derogation-offmicrofinance', 'recoveryiqanal-offmicrofinance', 'fiche-notif-accord-credit', 'activite-rse'];


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "DocanalyzerOffMicrofinance",
  props: {
    dossier_credit: Object,
    doc_tobe_produced: String,
    dossiers_credit_files: Array,
    authcheckusr: Object,
    has_recovery_iq: {
      type: [Boolean],
      "default": function _default() {
        return false;
      }
    },
    dossier_credit_recovery: {
      type: [Object],
      "default": function _default() {
        return {};
      }
    },
    isPage: {
      "default": false,
      type: Boolean
    }
  },
  computed: {
    has_rse: function has_rse() {
      var _this$dossier_credit, _this$dossier_credit2;
      return !['', null, undefined].includes((_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.cred_pub_tb_4001) || !['', null, undefined].includes((_this$dossier_credit2 = this.dossier_credit) === null || _this$dossier_credit2 === void 0 ? void 0 : _this$dossier_credit2.cred_pub_tb_5001);
    },
    producMemo: function producMemo() {
      return this.isPage ? 'tp_page memorandum' : 'memorandum';
    },
    leftSpans: function leftSpans() {
      var _this$dossier_credit3, _this$authcheckusr, _this$authcheckusr2, _this$dossier_credit16, _this$dossier_credit17, _this$dossier_credit18;
      // ==Derogation
      if (((_this$dossier_credit3 = this.dossier_credit) === null || _this$dossier_credit3 === void 0 ? void 0 : _this$dossier_credit3.applied_templ_name) == 'Derogation' && this.derogationManager.allowedRoles('roles').includes((_this$authcheckusr = this.authcheckusr) === null || _this$authcheckusr === void 0 ? void 0 : _this$authcheckusr.role_uuid)) {
        console.log("In derogatons");
        return ['Derogation'];
      }
      var spans = ["Memorandum", "CCM Face", "Annexes", "Contre Analyse", "Avis SRC", "PV", "Commentaires du Dossier"];
      if (!this.exceptRoles.includes((_this$authcheckusr2 = this.authcheckusr) === null || _this$authcheckusr2 === void 0 ? void 0 : _this$authcheckusr2.role_uuid)) {
        var _this$dossier_credit4, _this$dossier_credit5, _this$dossier_credit6, _this$dossier_credit8, _this$authcheckusr11, _this$dossier_credit9;
        if (((_this$dossier_credit4 = this.dossier_credit) !== null && _this$dossier_credit4 !== void 0 && (_this$dossier_credit4 = _this$dossier_credit4.caf_recorded_file) !== null && _this$dossier_credit4 !== void 0 && _this$dossier_credit4.oldDossRef || (_this$dossier_credit5 = this.dossier_credit) !== null && _this$dossier_credit5 !== void 0 && (_this$dossier_credit5 = _this$dossier_credit5.caf_recorded_file) !== null && _this$dossier_credit5 !== void 0 && _this$dossier_credit5.ref_dossier) && !["Mémo de restructuration"].includes((_this$dossier_credit6 = this.dossier_credit) === null || _this$dossier_credit6 === void 0 ? void 0 : _this$dossier_credit6.applied_templ_name)) {
          var _this$dossier_credit7, _this$authcheckusr3, _this$authcheckusr4, _this$authcheckusr5, _this$authcheckusr6, _this$authcheckusr7;
          if ((_this$dossier_credit7 = this.dossier_credit) !== null && _this$dossier_credit7 !== void 0 && (_this$dossier_credit7 = _this$dossier_credit7.caf_recorded_file) !== null && _this$dossier_credit7 !== void 0 && _this$dossier_credit7.ref_dossier) {
            spans = spans.map(function (el) {
              if (el == "Memorandum") return 'Changement';else return el;
            });
          }
          if (((_this$authcheckusr3 = this.authcheckusr) === null || _this$authcheckusr3 === void 0 ? void 0 : _this$authcheckusr3.what_tobe_produced) == "CONTRE_ANALYSE_FILIALE") spans.splice(5, 2);
          if (((_this$authcheckusr4 = this.authcheckusr) === null || _this$authcheckusr4 === void 0 ? void 0 : _this$authcheckusr4.what_tobe_produced) == "AVIS_SRC_FILIALE") spans.splice(6, 1);
          if (((_this$authcheckusr5 = this.authcheckusr) === null || _this$authcheckusr5 === void 0 ? void 0 : _this$authcheckusr5.what_tobe_produced) == "REVIEW_CONTRE_ANALYSE_FILIALE") spans.splice(6, 1);
          if (((_this$authcheckusr6 = this.authcheckusr) === null || _this$authcheckusr6 === void 0 ? void 0 : _this$authcheckusr6.what_tobe_produced) == "CREDIT_AVAILMENT_TICKET" || ((_this$authcheckusr7 = this.authcheckusr) === null || _this$authcheckusr7 === void 0 ? void 0 : _this$authcheckusr7.what_tobe_produced) == "PV_SERVICE_JURIDIQUE") {
            spans.push("Credit Availment Ticket");
            spans.push("PV Service Juridique");
          }
        } else {
          var _this$authcheckusr8, _this$authcheckusr9, _this$authcheckusr0, _this$authcheckusr1, _this$authcheckusr10;
          spans.splice(1, 1);
          if (((_this$authcheckusr8 = this.authcheckusr) === null || _this$authcheckusr8 === void 0 ? void 0 : _this$authcheckusr8.what_tobe_produced) == "CONTRE_ANALYSE_FILIALE") spans.splice(4, 2);
          if (((_this$authcheckusr9 = this.authcheckusr) === null || _this$authcheckusr9 === void 0 ? void 0 : _this$authcheckusr9.what_tobe_produced) == "AVIS_SRC_FILIALE") spans.splice(5, 1);
          if (((_this$authcheckusr0 = this.authcheckusr) === null || _this$authcheckusr0 === void 0 ? void 0 : _this$authcheckusr0.what_tobe_produced) == "REVIEW_CONTRE_ANALYSE_FILIALE") spans.splice(5, 1);
          if (((_this$authcheckusr1 = this.authcheckusr) === null || _this$authcheckusr1 === void 0 ? void 0 : _this$authcheckusr1.what_tobe_produced) == "CREDIT_AVAILMENT_TICKET" || ((_this$authcheckusr10 = this.authcheckusr) === null || _this$authcheckusr10 === void 0 ? void 0 : _this$authcheckusr10.what_tobe_produced) == "PV_SERVICE_JURIDIQUE") {
            spans.push("Credit Availment Ticket");
            spans.push("PV Service Juridique");
          }
        }
        if ((_this$dossier_credit8 = this.dossier_credit) !== null && _this$dossier_credit8 !== void 0 && _this$dossier_credit8.recouvrement_credit && ['MEMORANDUM_CREDIT', 'REVIEW_MEMORANDUM', 'FICHE_RECOUVREMENT', 'REVIEW_FICHE_RECOUVREMENT', 'DISPATCHING', 'REVIEW_CONTRE_ANALYSE_FILIALE'].includes((_this$authcheckusr11 = this.authcheckusr) === null || _this$authcheckusr11 === void 0 ? void 0 : _this$authcheckusr11.what_tobe_produced) || (_this$dossier_credit9 = this.dossier_credit) !== null && _this$dossier_credit9 !== void 0 && _this$dossier_credit9.archive_recovery) {
          if (![0, '0'].includes(this.dossier_credit.final_outcome.outcome)) {
            spans.push("Credit Availment Ticket");
            spans.push("PV Service Juridique");
            spans.push("Fiche de suivi de recouvrement");
          } else {
            spans.splice(3, 3);
            // console.log("spans", spans)
          }
        }
      } else {
        var _this$dossier_credit0, _this$dossier_credit1, _this$dossier_credit10, _this$dossier_credit12, _this$authcheckusr12, _this$dossier_credit13, _this$dossier_credit14, _this$dossier_credit15;
        if (((_this$dossier_credit0 = this.dossier_credit) !== null && _this$dossier_credit0 !== void 0 && (_this$dossier_credit0 = _this$dossier_credit0.caf_recorded_file) !== null && _this$dossier_credit0 !== void 0 && _this$dossier_credit0.oldDossRef || (_this$dossier_credit1 = this.dossier_credit) !== null && _this$dossier_credit1 !== void 0 && (_this$dossier_credit1 = _this$dossier_credit1.caf_recorded_file) !== null && _this$dossier_credit1 !== void 0 && _this$dossier_credit1.ref_dossier) && !["Mémo de restructuration"].includes((_this$dossier_credit10 = this.dossier_credit) === null || _this$dossier_credit10 === void 0 ? void 0 : _this$dossier_credit10.applied_templ_name)) {
          var _this$dossier_credit11;
          if ((_this$dossier_credit11 = this.dossier_credit) !== null && _this$dossier_credit11 !== void 0 && (_this$dossier_credit11 = _this$dossier_credit11.caf_recorded_file) !== null && _this$dossier_credit11 !== void 0 && _this$dossier_credit11.ref_dossier) {
            spans = spans.map(function (el) {
              if (el == "Memorandum") return 'Changement';else return el;
            });
          }
        }
        if ((_this$dossier_credit12 = this.dossier_credit) !== null && _this$dossier_credit12 !== void 0 && _this$dossier_credit12.recouvrement_credit && ['MEMORANDUM_CREDIT', 'REVIEW_MEMORANDUM', 'FICHE_RECOUVREMENT', 'REVIEW_FICHE_RECOUVREMENT', 'DISPATCHING', 'REVIEW_CONTRE_ANALYSE_FILIALE'].includes((_this$authcheckusr12 = this.authcheckusr) === null || _this$authcheckusr12 === void 0 ? void 0 : _this$authcheckusr12.what_tobe_produced) || (_this$dossier_credit13 = this.dossier_credit) !== null && _this$dossier_credit13 !== void 0 && _this$dossier_credit13.archive_recovery) {
          if (![0, '0'].includes(this.dossier_credit.final_outcome.outcome)) {
            spans.push("Fiche de suivi de recouvrement");
          }
        }
        if ((_this$dossier_credit14 = this.dossier_credit) !== null && _this$dossier_credit14 !== void 0 && (_this$dossier_credit14 = _this$dossier_credit14.caf_recorded_file) !== null && _this$dossier_credit14 !== void 0 && _this$dossier_credit14.oldDossRef && !["Mémo de restructuration"].includes((_this$dossier_credit15 = this.dossier_credit) === null || _this$dossier_credit15 === void 0 ? void 0 : _this$dossier_credit15.applied_templ_name)) {
          spans.splice(1, 0, 'Changement');
        }
      }
      if (((_this$dossier_credit16 = this.dossier_credit) === null || _this$dossier_credit16 === void 0 || (_this$dossier_credit16 = _this$dossier_credit16.final_outcome) === null || _this$dossier_credit16 === void 0 ? void 0 : _this$dossier_credit16.outcome) == 1 && (((_this$dossier_credit17 = this.dossier_credit) === null || _this$dossier_credit17 === void 0 ? void 0 : _this$dossier_credit17.engagement) != true || ((_this$dossier_credit18 = this.dossier_credit) === null || _this$dossier_credit18 === void 0 ? void 0 : _this$dossier_credit18.notif_accord_credit) == true)) {
        spans.push("Notification de crédit");
      }
      if (this.has_rse) {
        if (this.prependLeftSpansMemo.length > 0) {
          var index = spans.findIndex(function (s) {
            return s == "Annexes";
          });
          this.prependLeftSpansMemo.forEach(function (el) {
            spans.splice(index, 0, el);
          });
          spans.push("Compte Rendu de Visite");
          spans.push("Remontée d'incident");
        }
      }
      return spans;
    },
    currentComponent: function currentComponent() {
      if (this.activeSpan === "Derogation") return COMPONENTS[7];else if (this.activeSpan === "Fiche de Screening E&S de Crédit") return COMPONENTS[0];
      //   else if (this.activeSpan === "Fiche de cotation environnementale et sociale") return COMPONENTS[0]
      else if (this.activeSpan === "Fiche de catégorisation E&S") return COMPONENTS[0];else if (this.activeSpan === "Memorandum") return COMPONENTS[0];else if (this.activeSpan === "Changement") return COMPONENTS[0];else if (this.activeSpan === "CCM Face") return COMPONENTS[0];else if (this.activeSpan === "Annexes") return COMPONENTS[0];else if (this.activeSpan === "Contre Analyse") return COMPONENTS[1];else if (this.activeSpan === "Avis SRC") return COMPONENTS[2];else if (this.activeSpan === "PV") return COMPONENTS[3];else if (this.activeSpan === "Fiche de suivi de recouvrement") return COMPONENTS[8];else if (this.activeSpan === "Commentaires du Dossier") return COMPONENTS[4];else if (this.activeSpan === "Credit Availment Ticket") return COMPONENTS[5];else if (this.activeSpan === "PV Service Juridique") return COMPONENTS[6];else if (this.activeSpan === "Notification de crédit") return COMPONENTS[9];else if (this.activeSpan === "Fiche d'informations E&S au comité de credit") return COMPONENTS[10];
      return COMPONENTS[0];
    },
    currentProps: function currentProps() {
      if (this.currentComponent === COMPONENTS[0]) {
        var _this$dossier_credit19, _this$dossier_credit20;
        var obj = {
          dossier_credit: this.dossier_credit,
          doc_tobe_produced: this.doc_tobe_produced,
          authcheckusr: this.authcheckusr,
          "class": this.isPage ? "tp_page off-memo" : " off-memo",
          currentSpanIndex: 0,
          useLeftSpan: false,
          has_recovery_iq: this.has_recovery_iq,
          dossier_credit_recovery: this.dossier_credit_recovery
        };
        if ((_this$dossier_credit19 = this.dossier_credit) !== null && _this$dossier_credit19 !== void 0 && (_this$dossier_credit19 = _this$dossier_credit19.caf_recorded_file) !== null && _this$dossier_credit19 !== void 0 && _this$dossier_credit19.oldDossRef && !["Mémo de restructuration"].includes((_this$dossier_credit20 = this.dossier_credit) === null || _this$dossier_credit20 === void 0 ? void 0 : _this$dossier_credit20.applied_templ_name)) {
          if (this.activeSpan === "Memorandum") {
            obj.key = Math.random();
            obj.currentSpanIndex = 0;
          } else if (this.activeSpan === "Changement") {
            obj.key = Math.random() + 1;
            obj.currentSpanIndex = 1;
          } else if (this.activeSpan === "CCM Face") {
            obj.key = Math.random() + 2;
            obj.currentSpanIndex = 2;
          } else if (this.activeSpan === "Annexes") {
            obj.key = Math.random() + 3;
            obj.currentSpanIndex = 3;
          }
        } else {
          if (this.activeSpan === "Memorandum") {
            obj.key = Math.random();
            obj.currentSpanIndex = 0;
          } else if (this.activeSpan === "CCM Face") {
            obj.key = Math.random() + 1;
            obj.currentSpanIndex = 1;
          } else if (this.activeSpan === "Annexes") {
            obj.key = Math.random() + 2;
            obj.currentSpanIndex = 2;
          }
        }
        if (["Fiche de Screening E&S de Crédit", "Fiche de catégorisation E&S", "Compte Rendu de Visite", "Remontée d'incident"].includes(this.activeSpan)) {
          var _this$activeSpan;
          obj['currentSpanName'] = (_this$activeSpan = this.activeSpan) !== null && _this$activeSpan !== void 0 ? _this$activeSpan : "Memorandum";
        }
        return obj;
      }
      if (this.currentComponent === COMPONENTS[1]) return {
        dossier_credit: this.dossier_credit,
        doc_tobe_produced: this.doc_tobe_produced,
        producMemo: this.producMemo,
        isDoc: this.isDoc,
        dismiss: this.dismiss,
        offBankList: this.offBankList,
        authcheckusr: this.authcheckusr
      };
      if (this.currentComponent === COMPONENTS[2]) return {
        dossier_credit: this.dossier_credit,
        doc_tobe_produced: this.doc_tobe_produced,
        "class": this.producMemo,
        isDoc: this.isDoc,
        dismiss: this.dismiss,
        offBankList: this.offBankList,
        authcheckusr: this.authcheckusr
      };
      if (this.currentComponent === COMPONENTS[3]) return {
        dossier_credit: this.dossier_credit,
        doc_tobe_produced: this.doc_tobe_produced,
        // seeContent : this.seeContent,
        "class": this.producMemo,
        isDoc: this.isDoc,
        dismiss: this.dismiss,
        offBankList: this.offBankList,
        authcheckusr: this.authcheckusr
        // class: "contre-analyse"
        // class: null
      };
      if (this.currentComponent === COMPONENTS[4]) return {
        dossier_credit: this.dossier_credit,
        doc_tobe_produced: this.doc_tobe_produced,
        // seeContent : this.seeContent,
        "class": this.producMemo,
        isDoc: this.isDoc,
        dismiss: this.dismiss,
        offBankList: this.offBankList,
        authcheckusr: this.authcheckusr
        // class: "contre-analyse"
        // class: null
      };
      if (this.currentComponent === COMPONENTS[5]) return {
        dossier_credit: this.dossier_credit,
        doc_tobe_produced: this.doc_tobe_produced,
        "class": this.producMemo,
        isDoc: this.isDoc,
        dismiss: this.dismiss,
        offBankList: this.offBankList,
        authcheckusr: this.authcheckusr,
        components: ["CR1"]
      };
      if (this.currentComponent === COMPONENTS[6]) return {
        dossier_credit: this.dossier_credit,
        doc_tobe_produced: this.doc_tobe_produced,
        "class": this.producMemo,
        isDoc: this.isDoc,
        dismiss: this.dismiss,
        offBankList: this.offBankList,
        authcheckusr: this.authcheckusr,
        components: ["SJ1"]
      };
      if (this.currentComponent === COMPONENTS[7]) return {
        dossier_credit: this.dossier_credit,
        doc_tobe_produced: 'Derogation',
        producMemo: this.producMemo,
        isDoc: true,
        dismiss: this.dismiss,
        offBankList: ['DEROGATION'],
        authcheckusr: this.authcheckusr,
        components: ["DER1"]
      };
      if (this.currentComponent === COMPONENTS[8]) return {
        dossier_credit: this.dossier_credit,
        doc_tobe_produced: this.doc_tobe_produced,
        "class": this.producMemo,
        isDoc: this.isDoc,
        dismiss: this.dismiss,
        offBankList: this.offBankList,
        authcheckusr: this.authcheckusr,
        components: ['FR0', 'FR1', 'FR2', 'FR3', 'FR4'],
        dossier_credit_recovery: this.dossier_credit_recovery,
        dossiers_credit_files: this.dossiers_credit_files
      };
      if (this.currentComponent === COMPONENTS[9]) return {
        dossier_credit: this.dossier_credit,
        doc_tobe_produced: this.doc_tobe_produced,
        "class": this.producMemo,
        isDoc: this.isDoc,
        dismiss: true,
        offBankList: this.offBankList,
        authcheckusr: this.authcheckusr
      };
      if (this.currentComponent === COMPONENTS[10]) return {
        dossier_credit: this.dossier_credit,
        doc_tobe_produced: this.doc_tobe_produced,
        "class": this.producMemo,
        isDoc: this.isDoc,
        dismiss: true,
        offBankList: this.offBankList,
        authcheckusr: this.authcheckusr
      };
      return;
    }
  },
  created: function created() {
    var _this = this;
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (_this.realEntity.toUpperCase() == "COFINA") {
              if (_this.has_rse) {
                _this.loadListOfSpans();
              }
            }
          case 1:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  mounted: function mounted() {
    var _this2 = this;
    this.checkIfEmpty();
    this.activateSpan();
    this.canDissOrNo();
    EventBus.$on("value-updated", function () {
      if (_this2.dossier_credit.has_taken_decision != false) {
        _this2.dismiss = false;
      }
    });
  },
  data: function data() {
    return {
      seeContent: false,
      isDoc: false,
      recovery_access_role: _services_recouvrement_service_js__WEBPACK_IMPORTED_MODULE_1__["default"].getRecoveryAccessRole(),
      recovery_access_what_tobe_product: _services_recouvrement_service_js__WEBPACK_IMPORTED_MODULE_1__["default"].getRecoveryAccessWhaTobeProduct(),
      derogationManager: _services_cofina_derogation_manager_js__WEBPACK_IMPORTED_MODULE_0__["default"],
      producContreAnl: 'contre-analyse',
      dismiss: false,
      offBankList: ['REVIEW_CONTRE_ANALYSE_FILIALE', 'REVIEW_CONTRE_ANALYSE_GROUPE', ''],
      offMicrofinanceCA: ['REVIEW_CONTRE_ANALYSE_FILIALE', 'REVIEW_CONTRE_ANALYSE_GROUPE', 'CONTRE_ANALYSE_FILIALE', 'CONTRE_ANALYSE_GROUPE'],
      offMicrofinanceAvisSCR: ['AVIS_SRC_FILIALE', 'AVIS_SRC_GROUPE'],
      offMicrofinancePV: ['REVIEW_PV_CONTRE_ANALYSE_FILIALE', 'REVIEW_PV_CONTRE_ANALYSE_GROUPE', 'PV_CONTRE_ANALYSE_FILIALE', 'PV_CONTRE_ANALYSE_GROUPE'],
      offMicrofinanceCredAvailTick: ['CREDIT_AVAILMENT_TICKET'],
      offMicrofinanceRecoveryIQanal: ['FICHE_RECOUVREMENT'],
      offMicrofinancePVSJ: ['PV_SERVICE_JURIDIQUE'],
      dpftList: ['ENVOIE_DU_PV'],
      activeSpan: "Contre Analyse",
      exceptRoles: ['NbjnOpn450TgfloZLoUVFF', 'FGXXgcnHgB6uvNaG1ejg', 'eRrsePvy8EaU3tJU'],
      exceptTemplates: ["Mémo de restructuration"],
      spanManager: null,
      prependLeftSpans: [],
      prependComponents: [],
      prependLeftSpansMemo: []
    };
  },
  methods: {
    loadListOfSpans: function loadListOfSpans() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var entity, module, spans, esSpans, spansMemo, spansAnal;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              entity = _this3.realEntity.toLowerCase();
              _context2.next = 3;
              return __webpack_require__("./resources/js/services lazy recursive ^\\.\\/.*\\/SpanManager\\.js$")("./".concat(entity, "/SpanManager.js"));
            case 3:
              module = _context2.sent;
              _this3.spanManager = new module["default"]();
              spans = _this3.spanManager.getCurrentLeftSpans(_this3.categorieClient, _this3.dossier_credit);
              esSpans = spans.filter(function (sp) {
                return ["fiche_remonte_incident", "compte_rendu_de_visite_es"].includes(sp.slug);
              });
              spans = spans.filter(function (sp) {
                return !esSpans.includes(sp);
              });
              spansMemo = spans.filter(function (sp) {
                return sp.linkedTo.includes("MEMORANDUM_CREDIT");
              });
              spansAnal = spans.filter(function (sp) {
                return sp.linkedTo.includes("CONTRE_ANALYSE_FILIALE");
              });
              _this3.prependLeftSpans = spansAnal.map(function (sp) {
                return sp.name;
              });
              _this3.prependLeftSpansMemo = spansMemo.map(function (sp) {
                return sp.name;
              });
              _this3.prependComponents = spans.map(function (sp) {
                return sp.component_offview;
              });
            case 13:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    checkIfEmpty: function checkIfEmpty() {
      if (this.dossier_credit.tbs_in_use.length > 0) {
        this.seeContent = true;
      } else {
        this.$toasted.show('Ce dossier crédit est vide');
      }
    },
    formatDate: function formatDate(date) {
      if (['', null, undefined].includes(date)) return "";
      var options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
      };
      return new Date(date).toLocaleDateString('fr', options);
    },
    styleDoc: function styleDoc() {
      if (this.doc_tobe_produced === 'AVIS_SRC_FILIALE' || this.doc_tobe_produced === 'AVIS_SRC_GROUPE' || this.doc_tobe_produced === 'PV_CONTRE_ANALYSE_FILIALE' || this.doc_tobe_produced === 'PV_CONTRE_ANALYSE_GROUPE' || this.doc_tobe_produced === 'REVIEW_CONTRE_ANALYSE' || this.doc_tobe_produced === 'CREDIT_AVAILMENT_TICKET' || this.doc_tobe_produced === 'PV_SERVICE_JURIDIQUE') {
        this.isDoc = true;
      }
    },
    activateSpan: function activateSpan() {
      var _this$dossier_credit21, _this$authcheckusr13, _this$dossier_credit22, _this$authcheckusr14, _this$dossier_credit23, _this$dossier_credit24, _this$authcheckusr15;
      if (["Mémo de changement de conditions", "Mémo de report d'échéance"].includes(this.dossier_credit.applied_templ_name)) {
        this.activeSpan = "Changement";
        return;
      }
      if (((_this$dossier_credit21 = this.dossier_credit) === null || _this$dossier_credit21 === void 0 ? void 0 : _this$dossier_credit21.applied_templ_name) == 'Derogation' && this.derogationManager.allowedRoles('roles').includes((_this$authcheckusr13 = this.authcheckusr) === null || _this$authcheckusr13 === void 0 ? void 0 : _this$authcheckusr13.role_uuid)) {
        this.activeSpan = 'Derogation';
        return;
      }
      if ((_this$dossier_credit22 = this.dossier_credit) !== null && _this$dossier_credit22 !== void 0 && _this$dossier_credit22.recouvrement_credit && ['MEMORANDUM_CREDIT', 'REVIEW_MEMORANDUM', 'FICHE_RECOUVREMENT', 'REVIEW_FICHE_RECOUVREMENT', 'DISPATCHING', 'REVIEW_CONTRE_ANALYSE_FILIALE'].includes((_this$authcheckusr14 = this.authcheckusr) === null || _this$authcheckusr14 === void 0 ? void 0 : _this$authcheckusr14.what_tobe_produced) || (_this$dossier_credit23 = this.dossier_credit) !== null && _this$dossier_credit23 !== void 0 && _this$dossier_credit23.archive_recovery) {
        if (![0, '0'].includes(this.dossier_credit.final_outcome.outcome)) {
          this.activeSpan = "Fiche de suivi de recouvrement";
          return;
        }
      }
      if (((_this$dossier_credit24 = this.dossier_credit) === null || _this$dossier_credit24 === void 0 || (_this$dossier_credit24 = _this$dossier_credit24.final_outcome) === null || _this$dossier_credit24 === void 0 ? void 0 : _this$dossier_credit24.outcome) == 1) {
        var _this$dossier_credit25, _this$dossier_credit26, _this$dossier_credit27;
        if (((_this$dossier_credit25 = this.dossier_credit) === null || _this$dossier_credit25 === void 0 || (_this$dossier_credit25 = _this$dossier_credit25.notif_accord_final_outcome) === null || _this$dossier_credit25 === void 0 ? void 0 : _this$dossier_credit25.outcome) == 1 || ((_this$dossier_credit26 = this.dossier_credit) === null || _this$dossier_credit26 === void 0 ? void 0 : _this$dossier_credit26.engagement) != true && ((_this$dossier_credit27 = this.dossier_credit) === null || _this$dossier_credit27 === void 0 ? void 0 : _this$dossier_credit27.notif_accord_credit) == true) {
          this.activeSpan = "Notification de crédit";
          return;
        }
      }
      if (!this.exceptRoles.includes((_this$authcheckusr15 = this.authcheckusr) === null || _this$authcheckusr15 === void 0 ? void 0 : _this$authcheckusr15.role_uuid)) {
        var _this$authcheckusr16, _this$authcheckusr17, _this$authcheckusr18, _this$authcheckusr19, _this$authcheckusr20, _this$authcheckusr21;
        if (this.offMicrofinanceCA.includes((_this$authcheckusr16 = this.authcheckusr) === null || _this$authcheckusr16 === void 0 ? void 0 : _this$authcheckusr16.what_tobe_produced)) this.activeSpan = "Contre Analyse";else if (this.offMicrofinanceAvisSCR.includes((_this$authcheckusr17 = this.authcheckusr) === null || _this$authcheckusr17 === void 0 ? void 0 : _this$authcheckusr17.what_tobe_produced)) this.activeSpan = "Avis SRC";else if (this.offMicrofinancePV.includes((_this$authcheckusr18 = this.authcheckusr) === null || _this$authcheckusr18 === void 0 ? void 0 : _this$authcheckusr18.what_tobe_produced)) this.activeSpan = "PV";else if (this.offMicrofinanceCredAvailTick.includes((_this$authcheckusr19 = this.authcheckusr) === null || _this$authcheckusr19 === void 0 ? void 0 : _this$authcheckusr19.what_tobe_produced)) this.activeSpan = "Credit Availment Ticket";else if (this.offMicrofinanceRecoveryIQanal.includes((_this$authcheckusr20 = this.authcheckusr) === null || _this$authcheckusr20 === void 0 ? void 0 : _this$authcheckusr20.what_tobe_produced) && !this.exceptTemplates.includes(this.dossier_credit.applied_templ_name)) this.activeSpan = "Fiche de suivi de recouvrement";else if (this.offMicrofinancePVSJ.includes((_this$authcheckusr21 = this.authcheckusr) === null || _this$authcheckusr21 === void 0 ? void 0 : _this$authcheckusr21.what_tobe_produced)) this.activeSpan = "PV Service Juridique";
      } else {
        this.activeSpan = "PV";
      }
    },
    canDissOrNo: function canDissOrNo() {
      if (this.dossier_credit.has_taken_decision === false) {
        this.dismiss = true;
      }
    },
    setActiveSpan: function setActiveSpan(span) {
      var _this$dossier_credit28;
      if ((_this$dossier_credit28 = this.dossier_credit) !== null && _this$dossier_credit28 !== void 0 && _this$dossier_credit28.is_virtual_doc && span != 'Fiche de suivi de recouvrement') return;
      this.activeSpan = span;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/DocanalyzerOffMicrofinance.vue?vue&type=template&id=04d51694&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/DocanalyzerOffMicrofinance.vue?vue&type=template&id=04d51694&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("div", {
    staticClass: "ctn text-center bg-light left-div"
  }, _vm._l(_vm.leftSpans, function (span) {
    var _vm$dossier_credit, _vm$dossier_credit2;
    return _c("span", {
      key: span,
      staticClass: "py-3 ps-2 pe-2 border-success border-top-0 border-bottom-0 border-start-0 text-center",
      "class": {
        "text-warning2": span === _vm.activeSpan,
        "text-secondary": ((_vm$dossier_credit = _vm.dossier_credit) === null || _vm$dossier_credit === void 0 ? void 0 : _vm$dossier_credit.is_virtual_doc) && span != "Fiche de suivi de recouvrement",
        "cursor-not-allowed": ((_vm$dossier_credit2 = _vm.dossier_credit) === null || _vm$dossier_credit2 === void 0 ? void 0 : _vm$dossier_credit2.is_virtual_doc) && span != "Fiche de suivi de recouvrement"
      },
      on: {
        click: function click($event) {
          return _vm.setActiveSpan(span);
        }
      }
    }, [_vm._v(_vm._s(span) + "\n    ")]);
  }), 0), _vm._v(" "), _c("div", [_c(_vm.currentComponent, _vm._b({
    tag: "component",
    on: {
      changeSeeContent: function changeSeeContent($event) {
        _vm.dismiss = false;
      }
    }
  }, "component", _vm.currentProps, false))], 1)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/DocanalyzerOffMicrofinance.vue?vue&type=style&index=0&id=04d51694&lang=css&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/DocanalyzerOffMicrofinance.vue?vue&type=style&index=0&id=04d51694&lang=css&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-04d51694] {\r\n  font-family: \"Google sans\";\n}\n.text-warning2[data-v-04d51694] {\r\n    color: #e67e22 !important;\n}\n.ctn[data-v-04d51694]{\r\n  position:fixed;\r\n  z-index:25;\r\n  top:115px;\r\n  left:0;\r\n  font-weight:bold;\r\n  writing-mode:\r\n  vertical-lr;\r\n  text-orientation: mixed;\r\n  cursor:pointer;\r\n  box-shadow: 0 0 2px 0px grey;\r\n  width: 3vh;\r\n  height: 80%;\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n  white-space: nowrap;\r\n  padding-right: 26px;\n}\n[data-v-04d51694]::-webkit-scrollbar {\r\n  width: 3px;\n}\n[data-v-04d51694]::-webkit-scrollbar-track {\r\n  background: #f1f1f1;\n}\n[data-v-04d51694]::-webkit-scrollbar-thumb {\r\n  background: rgba(59, 59, 59, 0.263);\r\n  border-radius: 10px ;\n}\n[data-v-04d51694]::-webkit-scrollbar-thumb:hover {\r\n  background: rgb(58, 13, 222);\n}\n.cursor-not-allowed[data-v-04d51694] {\r\n  cursor: not-allowed;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/DocanalyzerOffMicrofinance.vue?vue&type=style&index=0&id=04d51694&lang=css&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/DocanalyzerOffMicrofinance.vue?vue&type=style&index=0&id=04d51694&lang=css&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DocanalyzerOffMicrofinance_vue_vue_type_style_index_0_id_04d51694_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DocanalyzerOffMicrofinance.vue?vue&type=style&index=0&id=04d51694&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/DocanalyzerOffMicrofinance.vue?vue&type=style&index=0&id=04d51694&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DocanalyzerOffMicrofinance_vue_vue_type_style_index_0_id_04d51694_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DocanalyzerOffMicrofinance_vue_vue_type_style_index_0_id_04d51694_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/shared/DocanalyzerOffMicrofinance.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/components/shared/DocanalyzerOffMicrofinance.vue ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DocanalyzerOffMicrofinance_vue_vue_type_template_id_04d51694_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DocanalyzerOffMicrofinance.vue?vue&type=template&id=04d51694&scoped=true */ "./resources/js/components/shared/DocanalyzerOffMicrofinance.vue?vue&type=template&id=04d51694&scoped=true");
/* harmony import */ var _DocanalyzerOffMicrofinance_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DocanalyzerOffMicrofinance.vue?vue&type=script&lang=js */ "./resources/js/components/shared/DocanalyzerOffMicrofinance.vue?vue&type=script&lang=js");
/* harmony import */ var _DocanalyzerOffMicrofinance_vue_vue_type_style_index_0_id_04d51694_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DocanalyzerOffMicrofinance.vue?vue&type=style&index=0&id=04d51694&lang=css&scoped=true */ "./resources/js/components/shared/DocanalyzerOffMicrofinance.vue?vue&type=style&index=0&id=04d51694&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DocanalyzerOffMicrofinance_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _DocanalyzerOffMicrofinance_vue_vue_type_template_id_04d51694_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _DocanalyzerOffMicrofinance_vue_vue_type_template_id_04d51694_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "04d51694",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/shared/DocanalyzerOffMicrofinance.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/shared/DocanalyzerOffMicrofinance.vue?vue&type=script&lang=js":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/shared/DocanalyzerOffMicrofinance.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DocanalyzerOffMicrofinance_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DocanalyzerOffMicrofinance.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/DocanalyzerOffMicrofinance.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DocanalyzerOffMicrofinance_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shared/DocanalyzerOffMicrofinance.vue?vue&type=style&index=0&id=04d51694&lang=css&scoped=true":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/js/components/shared/DocanalyzerOffMicrofinance.vue?vue&type=style&index=0&id=04d51694&lang=css&scoped=true ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DocanalyzerOffMicrofinance_vue_vue_type_style_index_0_id_04d51694_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DocanalyzerOffMicrofinance.vue?vue&type=style&index=0&id=04d51694&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/DocanalyzerOffMicrofinance.vue?vue&type=style&index=0&id=04d51694&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/shared/DocanalyzerOffMicrofinance.vue?vue&type=template&id=04d51694&scoped=true":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/shared/DocanalyzerOffMicrofinance.vue?vue&type=template&id=04d51694&scoped=true ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DocanalyzerOffMicrofinance_vue_vue_type_template_id_04d51694_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DocanalyzerOffMicrofinance_vue_vue_type_template_id_04d51694_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DocanalyzerOffMicrofinance_vue_vue_type_template_id_04d51694_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DocanalyzerOffMicrofinance.vue?vue&type=template&id=04d51694&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/DocanalyzerOffMicrofinance.vue?vue&type=template&id=04d51694&scoped=true");


/***/ })

}]);