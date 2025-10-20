"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_shared_recouvrements_TimelineRecovery_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/recouvrements/TimeLineRecoveryActions.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/recouvrements/TimeLineRecoveryActions.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_recouvrement_service_teams_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/recouvrement.service_teams.js */ "./resources/js/services/recouvrement.service_teams.js");
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


// import recoveryConstants from "../../../services/recovery-constant.js";

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    CheckCircleIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__.CheckCircleIcon,
    XCircleIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__.XCircleIcon
  },
  props: {
    step: {
      "default": {}
    },
    dossier_credit: {
      "default": {}
    },
    current_step: Number,
    durre_imp: 0,
    actionlist: [],
    filiale: String
  },
  data: function data() {
    return {
      activePar: 0,
      openAccordion: 0,
      Recouvrement: _services_recouvrement_service_teams_js__WEBPACK_IMPORTED_MODULE_0__["default"],
      options: [-2, 7, 8],
      procedure: ['obtenu_sur_la_Base_du_Billet_à_Ordre', 'obtenu_sur_la_Base_de_la_Procédure_d_Injonction_de_Payer', 'obtenu_sur_la_Base_Assignation']
    };
  },
  computed: {
    formatedAction: function formatedAction() {
      var _this = this;
      var data = this.actionlist;
      var result = [];
      if (data) {
        var section = data.filter(function (el) {
          return el.intervenants.includes(_this.step.responsible_role_uuid) && el.teams == _this.step.teams;
        });
        section === null || section === void 0 || section.forEach(function (actionPhase) {
          actionPhase.livrables.forEach(function (livrable) {
            if (livrable.restrict_role.includes(_this.step.responsible_role_uuid)) {
              livrable.actions.forEach(function (action, index) {
                result.push({
                  phase: actionPhase.phase,
                  par_max: actionPhase.par_max,
                  action: action,
                  slug: livrable.slug[index] || livrable.slug[0],
                  tbname: livrable.tbToBeUsed[index]
                });
              });
            }
          });
        });
      }
      return result;
    },
    formatedPhase: function formatedPhase() {
      var _this2 = this;
      var data = _services_recouvrement_service_teams_js__WEBPACK_IMPORTED_MODULE_0__["default"].fetchActionsList2(this.filiale);
      var section = data.filter(function (el) {
        return el.intervenants.includes(_this2.step.responsible_role_uuid) && el.teams == _this2.step.teams;
      });
      return section;
    },
    recouvrement_final_outcome: function recouvrement_final_outcome() {
      var _this$dossier_credit;
      return (_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.recouvrement_final_outcome;
    }
  },
  methods: {
    actionHistory: function actionHistory(currentPhaseID) {
      var _this3 = this;
      var history = [];

      // récupérer les action executé en rentard
      // les action de la phase actuelle

      this.formatedAction.forEach(function (el) {
        var _this3$formatedPhase$;
        if ((el === null || el === void 0 ? void 0 : el.phase) == ((_this3$formatedPhase$ = _this3.formatedPhase[currentPhaseID]) === null || _this3$formatedPhase$ === void 0 ? void 0 : _this3$formatedPhase$.phase)) {
          var late;
          if (_this3.GetPhase(el).phase == 'no-phase-check') {
            late = true;
          } else if (_this3.GetPhase(el).late == 0) {
            late = true;
          } else {
            late = false;
          }
          history.push(_objectSpread({
            "late": late,
            "lateDuration": _this3.GetPhase(el).late
          }, el));
        }
        // else{
        //     history.push({
        //                 "late" :  false ,
        //                 "lateDuration" : 0,
        //                 ...el
        //             })
        // } 
      });
      return history;
    },
    toggleAccordion: function toggleAccordion(index) {
      this.openAccordion = this.openAccordion === index ? null : index;
    },
    seeMore: function seeMore(tbname) {
      EventBus.$emit("tab_recovery_offview", tbname);
    },
    actionChecked: function actionChecked(docName) {
      return this.Recouvrement.checkAction(docName.slug, this.dossier_credit, this.step.responsible_id, this.step.teams);
    },
    GetPhase: function GetPhase(docName) {
      return this.Recouvrement.GetPhaseOfcheckAction(docName.slug, this.dossier_credit, this.step.responsible_id, this.step.teams);
    },
    recouvrement_procedure_juridique: function recouvrement_procedure_juridique(item) {
      var _this$dossier_credit2;
      if (![null, undefined, ''].includes((_this$dossier_credit2 = this.dossier_credit) === null || _this$dossier_credit2 === void 0 || (_this$dossier_credit2 = _this$dossier_credit2.demande_procedure_juridique) === null || _this$dossier_credit2 === void 0 || (_this$dossier_credit2 = _this$dossier_credit2.procedure_data) === null || _this$dossier_credit2 === void 0 ? void 0 : _this$dossier_credit2.recovery_procedure_juridique)) {
        var _this$dossier_credit3, _this$dossier_credit4;
        if (item.procedure_juridique_slug == ((_this$dossier_credit3 = this.dossier_credit) === null || _this$dossier_credit3 === void 0 || (_this$dossier_credit3 = _this$dossier_credit3.demande_procedure_juridique) === null || _this$dossier_credit3 === void 0 || (_this$dossier_credit3 = _this$dossier_credit3.procedure_data) === null || _this$dossier_credit3 === void 0 ? void 0 : _this$dossier_credit3.recovery_procedure_juridique) && ![null, undefined].includes((_this$dossier_credit4 = this.dossier_credit) === null || _this$dossier_credit4 === void 0 || (_this$dossier_credit4 = _this$dossier_credit4.demande_procedure_juridique) === null || _this$dossier_credit4 === void 0 ? void 0 : _this$dossier_credit4.date_confirmation) && (item === null || item === void 0 ? void 0 : item.teams) == 'EQUIPE_2') {
          return true;
        }
        return false;
      }
      return false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/recouvrements/TimelineRecovery.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/recouvrements/TimelineRecovery.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _services_recouvrement_service_teams_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/recouvrement.service_teams.js */ "./resources/js/services/recouvrement.service_teams.js");
/* harmony import */ var _TimeLineRecoveryActions_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TimeLineRecoveryActions.vue */ "./resources/js/components/shared/recouvrements/TimeLineRecoveryActions.vue");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
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
// import Recouvrements from "../../../services/recouvrement.service";
// import { duree } from "@/extres/js/Hypo";



// import recoveryConstants from "../../../services/recovery-constant.js";
// import { previousDay } from "date-fns";

// TODO : mettre actual step au dynamique
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "TimelineRecovery",
  computed: {},
  components: {
    CheckCircleIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_2__.CheckCircleIcon,
    XCircleIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_2__.XCircleIcon,
    TimeLineRecoveryActions: _TimeLineRecoveryActions_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    dossier_credit: {
      type: Object,
      require: true
    },
    doc_tobe_produced: String,
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
    workflows: {
      type: Array
    },
    current_step: {
      type: Number
    },
    recouvrement_final_outcome: Object
  },
  created: function created() {
    // console.log("created",recoveryConstants.ACTION_LIST2);
  },
  mounted: function mounted() {
    var _this = this;
    this.getRecoveryTeamLabels();
    // console.log("filteredLivrables",this.filteredLivrables(14))
    // console.log(Recouvrements.fetchActionsList2());
    // this.loadRecoveryConstant()

    this.workflows.filter(function (el) {
      // return el.action.toLowerCase().includes("recouvrement") && !el.responsible_role.toLowerCase().includes("dispatcher")
      return el.action.toLowerCase().includes("recouvrement");
    }).forEach(function (element, idx) {
      if (element.action.toLowerCase().includes("juridique")) {
        var indexMatch = element.action.match(/Team (\d+)/);
        var index = indexMatch ? parseInt(indexMatch[1], 10) : null;
        if (index !== null) {
          // Chercher s'il existe un objet avec team_id égal à l'index
          var teamExists = _this.workflows_recovery.find(function (obj) {
            return obj.team_id === index;
          });
          if (teamExists) {
            // Si l'objet existe, ajouter le label
            // console.log("teamExists **",teamExists);
            teamExists.step.push(_objectSpread(_objectSpread(_objectSpread({}, element), _this.stage_par[idx]), {}, {
              teams: "EQUIPE_".concat(index)
            }));
          } else {
            // Sinon, créer un nouvel objet avec team_id et ajouter le label
            // const teams_juridique = ['aFwisnrdo42c4n9MHCG2', 'tmu3PEDVQsevYH2rhw4o'].includes(element.responsible_role_uuid) ? 'EQUIPE_1' : 'EQUIPE_0';
            _this.workflows_recovery.push({
              action: "Recouvrement",
              level: "Judiciaire ( Equipe ".concat(index, " )"),
              id: _this.workflows_recovery.length,
              team_id: index,
              step: [_objectSpread(_objectSpread(_objectSpread({}, element), _this.stage_par[idx]), {}, {
                teams: "EQUIPE_".concat(index)
              })]
            });
          }
        }
      } else {
        // this.conso_fond_propres.map(ed => ({...ed, comeFrom:'tb_19003'}))
        var teams = ['aFwisnrdo42c4n9MHCG2', 'tmu3PEDVQsevYH2rhw4o', 'icWghWx71w9VpwZ6y1mT'].includes(element.responsible_role_uuid) ? 'EQUIPE_1' : 'EQUIPE_0';
        _this.workflows_recovery[0].step.push(_objectSpread(_objectSpread(_objectSpread({}, element), _this.stage_par[idx]), {}, {
          teams: teams
        }));
      }

      // ici
    });
  },
  data: function data() {
    var _this$dossier_credit_;
    return {
      filteredLivrable2: [],
      components: {},
      actual_step: this.dossier_credit.timesheets[this.dossier_credit.timesheets.length - 1].stage_id,
      duree_impaye: (_this$dossier_credit_ = this.dossier_credit_recovery) === null || _this$dossier_credit_ === void 0 ? void 0 : _this$dossier_credit_.dureeimp,
      // Recouvrements : Recouvrements,
      // actionsList: Recouvrements.fetchActionsList(),
      actionsList2: _toConsumableArray(_services_recouvrement_service_teams_js__WEBPACK_IMPORTED_MODULE_0__["default"].fetchActionsList2(this.authcheckusr.filiale)),
      workflows_recovery: [{
        action: "Recouvrement",
        level: " à l'amiable",
        id: 0,
        team_id: 0,
        step: []
      },
      // {
      //     action: "Recouvrement",
      //     level: "",
      //     id: 1,
      //     is_signature_compulsory: false,
      //     par_min: 46,
      //     par_max: 90,
      //     responsible: "Agent de recouvrement 1",
      //     responsible_id: 121,
      //     responsible_role: "Agent de recouvrement",
      //     responsible_role_sigle: "AR",
      //     responsible_role_uuid: "r472oAxtaFJSlsh5",
      //     step : [],
      // },
      {
        action: "Recouvrement",
        level: "Judiciaire ( Equipe 2 )",
        id: 1,
        team_id: 2,
        step: []
      }],
      stage_par: _toConsumableArray(_services_recouvrement_service_teams_js__WEBPACK_IMPORTED_MODULE_0__["default"].StagePar(this.authcheckusr.filiale)),
      activePar: 0,
      procedure_juridiques: _services_recouvrement_service_teams_js__WEBPACK_IMPORTED_MODULE_0__["default"] === null || _services_recouvrement_service_teams_js__WEBPACK_IMPORTED_MODULE_0__["default"] === void 0 ? void 0 : _services_recouvrement_service_teams_js__WEBPACK_IMPORTED_MODULE_0__["default"].procedureJuridique(this.authcheckusr.filiale),
      PROCEDURE_JURIDIQUE_TB_SLUG: [{
        "label": "Titre Exécutoire obtenu sur la Base du Billet à Ordre",
        "slug": 'obtenu_sur_la_Base_du_Billet_à_Ordre'
      }, {
        "label": "Titre Exécutoire obtenu sur la Base de la Procédure d’Injonction de Payer",
        "slug": 'obtenu_sur_la_Base_de_la_Procédure_d_Injonction_de_Payer'
      }, {
        "label": "Titre Exécutoire obtenu sur la Base d’Assignation",
        "slug": 'obtenu_sur_la_Base_Assignation'
      }],
      recoveryTeamLabels: [{
        display_name: "EQUIPE 1",
        team: "EQUIPE_1"
      }, {
        display_name: "EQUIPE 2",
        team: "EQUIPE_2"
      }, {
        display_name: "EQUIPE 3",
        team: "EQUIPE_3"
      }, {
        display_name: "EQUIPE COMMERCIAL",
        team: "EQUIPE_0"
      }]
    };
  },
  methods: {
    loadRecoveryConstant: function loadRecoveryConstant() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var module;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!['CFN CIV', 'FINL'].includes(_this2.authcheckusr.filiale)) {
                _context.next = 6;
                break;
              }
              _context.next = 3;
              return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../../../services/recovery/recovery-constant-uemoa.js */ "./resources/js/services/recovery/recovery-constant-uemoa.js"));
            case 3:
              module = _context.sent;
              _context.next = 10;
              break;
            case 6:
              if (!['CFN TG'].includes(_this2.authcheckusr.filiale)) {
                _context.next = 10;
                break;
              }
              _context.next = 9;
              return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../../../services/recovery/recovery-constant-tg.js */ "./resources/js/services/recovery/recovery-constant-tg.js"));
            case 9:
              module = _context.sent;
            case 10:
              // Utilisation du module chargé
              if (module) {
                _this2.recoveryConstants = module["default"]; // Appelle la fonction par défaut exportée dans le module
              }
            case 11:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    updateActualPar: function updateActualPar(increment) {
      // this.docSlug_ = ""
      // this.$emit('updateListOfWhatTobeProduced',this.listOfWhatTobeProduced);
      if (this.activePar == 0 && increment < 0) {
        return;
      } else if (this.activePar == this.filteredLivrables.length - 1 && increment > 0) {
        return;
      } else {
        this.activePar = this.activePar + increment;
      }
    },
    getLabelTeams: function getLabelTeams(teams) {
      var _this$recoveryTeamLab, _this$recoveryTeamLab2;
      // if(teams == 'EQUIPE_0'){
      //     return 'EQUIPE COMMERCIAL'
      // }else if(teams == 'EQUIPE_1'){
      //     return 'EQUIPE 1'
      // }else if(teams == 'EQUIPE_2'){
      //     return 'EQUIPE 2'
      // }else if(teams == 'EQUIPE_3'){
      //     return 'EQUIPE 3'
      // }else{
      //     return ''
      // }

      // console.log("teams **** ",teams);
      // console.log("recoveryTeamLabels **** ",this.recoveryTeamLabels);
      // console.log("recoveryTeamLabels *** ",this.recoveryTeamLabels.find(el => el.team == teams)?.display_name);

      return (_this$recoveryTeamLab = (_this$recoveryTeamLab2 = this.recoveryTeamLabels.find(function (el) {
        return el.team == teams;
      })) === null || _this$recoveryTeamLab2 === void 0 ? void 0 : _this$recoveryTeamLab2.display_name) !== null && _this$recoveryTeamLab !== void 0 ? _this$recoveryTeamLab : "";
    },
    seeMore: function seeMore() {
      EventBus.$emit("tab_recovery_offview");
    },
    filteredLivrables: function filteredLivrables(step) {
      // let teams = this.authcheckusr?.recovery_team_info?.teams ?? "EQUIPE_0"

      var result = [];

      // console.log("step",step);
      // console.log("step.teams",step.teams);

      var baseList = _toConsumableArray(_services_recouvrement_service_teams_js__WEBPACK_IMPORTED_MODULE_0__["default"].fetchActionsList2(this.authcheckusr.filiale));

      // console.log(baseList);

      var section = baseList.filter(function (el) {
        return el.intervenants.includes(step.responsible_role_uuid) && el.teams == step.teams;
      });

      // let section2 = this.actionsList2.filter(el => el.intervenants.includes("yYnev325ob1vDkgq") && el.teams == step.teams);

      // if(step?.responsible_role_uuid == "yYnev325ob1vDkgq"){
      //     // yYnev325ob1vDkgq
      //     console.log("responsible_role_uuid",step.responsible_role_uuid);
      //     console.log("teams",step.teams);

      //     console.log("CA");
      //     console.log(" >> section ",section2);

      // }

      // return section

      section === null || section === void 0 || section.forEach(function (actionPhase) {
        actionPhase.livrables.forEach(function (livrable) {
          if (livrable.restrict_role.includes(step.responsible_role_uuid)) {
            livrable.actions.forEach(function (action, index) {
              result.push({
                phase: actionPhase.phase,
                // Ajoute la phase
                action: action,
                slug: livrable.slug[index] || livrable.slug[0] // Associer slug à action, ou utiliser le premier slug si pas de correspondance
              });
            });
          }
        });
      });

      // console.log("filteredLivrables >> result ",result);

      return result;
    },
    procedureJuridique: function procedureJuridique(step) {
      var _this$dossier_credit, _this$dossier_credit2;
      if (["", null, undefined].includes((_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.recovery_procedure_juridique)) {
        return {
          isAvailable: false
        };
      }
      if (!((_this$dossier_credit2 = this.dossier_credit) !== null && _this$dossier_credit2 !== void 0 && _this$dossier_credit2.recovery_procedure_juridique.find(function (el) {
        return el.user_id == step.responsible_id;
      }))) {
        return {
          isAvailable: false
        };
      } else {
        var _this$dossier_credit3;
        return {
          slug: (_this$dossier_credit3 = this.dossier_credit) === null || _this$dossier_credit3 === void 0 ? void 0 : _this$dossier_credit3.recovery_procedure_juridique.find(function (el) {
            return el.user_id == step.responsible_id;
          }).slug,
          isAvailable: true
        };
      }
    },
    getLabelBySlug: function getLabelBySlug(slug) {
      var _iterator = _createForOfIteratorHelper(this.PROCEDURE_JURIDIQUE_TB_SLUG),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;
          if (item.slug === slug) {
            return item.label;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return null;
    },
    getRecoveryTeamLabels: function getRecoveryTeamLabels() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var res;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _this3.$axios.post('/api/get-recovery-team-labels', {})["catch"](function (err) {
                console.error(err);
              });
            case 2:
              res = _context2.sent;
              if (res && res.data) {
                _this3.recoveryTeamLabels = res.data;

                // Ajouter l'objet si recoveryTeamLabels n'est pas vide
                if (_this3.recoveryTeamLabels.length > 0) {
                  _this3.recoveryTeamLabels.push({
                    display_name: "EQUIPE COMMERCIAL",
                    team: "EQUIPE_0"
                  });
                }
              }
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    getDureeImpaye: function getDureeImpaye(step) {
      var _Math$floor, _log$recovery_log;
      var log = this.dossier_credit.recouvrement_decision_logs.find(function (el) {
        return el.stage_id == step.id;
      });
      return (_Math$floor = Math.floor(log === null || log === void 0 || (_log$recovery_log = log.recovery_log) === null || _log$recovery_log === void 0 ? void 0 : _log$recovery_log.par)) !== null && _Math$floor !== void 0 ? _Math$floor : 'N/A';
    },
    getTeamLabel: function getTeamLabel(step) {
      var _this$getLabelTeams, _log$recovery_log2;
      var log = this.dossier_credit.recouvrement_decision_logs.find(function (el) {
        return el.stage_id == step.id;
      });
      return (_this$getLabelTeams = this.getLabelTeams(log === null || log === void 0 || (_log$recovery_log2 = log.recovery_log) === null || _log$recovery_log2 === void 0 ? void 0 : _log$recovery_log2.user_teams)) !== null && _this$getLabelTeams !== void 0 ? _this$getLabelTeams : 'N/A';
    },
    fecthActionList: function fecthActionList(step) {
      // console.log(" *********** BEGIN ****** ")
      // console.log("==> responsible_role_sigle",step.responsible_role_sigle, "==> teams",step.teams)
      var data = _services_recouvrement_service_teams_js__WEBPACK_IMPORTED_MODULE_0__["default"].fetchActionsList2(this.authcheckusr.filiale);
      // console.log(" ==== > data",data, " actionsList2 ===>> ",this.actionsList2)

      // console.log("responsible_role_sigle",this.step.responsible_role_sigle, "responsible_role_uuid",this.step.responsible_role_uuid);
      // console.log("responsible_role_sigle",step.responsible_role_sigle, "responsible_role_uuid",step.responsible_role_uuid, "step.teams",step.teams)
      var section = data.filter(function (el) {
        return el.intervenants.includes(step.responsible_role_uuid) && el.teams == step.teams;
      });
      // console.log(" *********** AFTER FILTER ******")
      // console.log("responsible_role_sigle",step.responsible_role_sigle,"section **** ",section);
      return section;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/recouvrements/TimeLineRecoveryActions.vue?vue&type=template&id=334fc18a":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/recouvrements/TimeLineRecoveryActions.vue?vue&type=template&id=334fc18a ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "table-responsive"
  }, _vm._l(_vm.formatedPhase, function (item, idx) {
    return _c("recovery-accordion", {
      key: idx,
      staticStyle: {
        color: "black",
        "background-color": "#fff"
      },
      attrs: {
        title: item === null || item === void 0 ? void 0 : item.phase,
        isOpen: _vm.openAccordion === idx,
        titleStyle: {
          fontSize: "small",
          margin: "0",
          padding: "0 10px"
        },
        procedureJuridique: _vm.recouvrement_procedure_juridique(item)
      },
      on: {
        toggle: function toggle($event) {
          return _vm.toggleAccordion(idx);
        }
      }
    }, [_c("table", {
      staticClass: "table table-bordered"
    }, [_c("thead", [_c("tr", {
      staticClass: "text-center"
    }, [_c("td", {
      staticClass: "th"
    }, [_c("label", [_vm._v("ACTIONS")])]), _vm._v(" "), _c("td", {
      staticClass: "th"
    }, [_c("label", [_vm._v(_vm._s(_vm.step.responsible_role_sigle))])]), _vm._v(" "), _c("td", {
      staticClass: "th"
    }, [_c("label")])])]), _vm._v(" "), _c("tbody", _vm._l(_vm.actionHistory(idx), function (docName, index_doc) {
      return _c("tr", {
        key: docName + "_" + index_doc
      }, [_c("td", [_vm._v("- " + _vm._s(docName.action))]), _vm._v(" "), !docName.late && _vm.actionChecked(docName) ? _c("td", {
        staticClass: "text-warning",
        attrs: {
          title: "Tâche effectué en retard"
        }
      }, [_c("span", [_c("check-circle-icon", {
        staticClass: "custom-class",
        attrs: {
          size: "1.5x"
        }
      }), _vm._v("\n                            " + _vm._s("Exécuté avec un retard de " + (docName === null || docName === void 0 ? void 0 : docName.lateDuration) + " jrs") + "\n                        ")], 1)]) : _vm.actionChecked(docName) ? _c("td", {
        staticClass: "text-success",
        attrs: {
          title: "Tâche effectué"
        }
      }, [_c("span", [_c("check-circle-icon", {
        staticClass: "custom-class",
        attrs: {
          size: "1.5x"
        }
      }), _vm._v("\n                            " + _vm._s("Exécuté") + "    \n                        ")], 1)]) : !_vm.actionChecked(docName) && _vm.current_step > _vm.step.id ? _c("td", {
        staticClass: "text-danger",
        attrs: {
          title: "Tâche non effectuée"
        }
      }, [_vm._v("\n                        " + _vm._s() + "\n                        "), _c("span", [_c("check-circle-icon", {
        staticClass: "custom-class",
        attrs: {
          size: "1.5x"
        }
      }), _vm._v("\n                            " + _vm._s("Pas Exécuté") + "\n                        ")], 1)]) : !_vm.actionChecked(docName) ? _c("td", {
        staticClass: "text-danger",
        attrs: {
          title: "Tâche non effectuée"
        }
      }, [_c("span", [_c("check-circle-icon", {
        staticClass: "custom-class",
        attrs: {
          size: "1.5x"
        }
      }), _vm._v("\n                            " + _vm._s("En attente d'exécution") + "\n                        ")], 1)]) : _vm._e(), _vm._v(" "), _c("td", [_c("button", {
        staticClass: "btn btn-sm border",
        staticStyle: {
          "box-shadow": "0 2px 4px 0 rgba(0, 0, 0, 0.08)"
        },
        attrs: {
          title: "VOIR LES POINTS"
        },
        on: {
          click: function click($event) {
            return _vm.seeMore(docName.tbname);
          }
        }
      }, [_c("i", {
        staticClass: "icofont-plus"
      }), _vm._v(" VOIR PLUS\n                        ")])])]);
    }), 0)])]);
  }), 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/recouvrements/TimelineRecovery.vue?vue&type=template&id=570f8ef2&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/recouvrements/TimelineRecovery.vue?vue&type=template&id=570f8ef2&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$recouvrement_fina, _vm$recouvrement_fina2, _vm$recouvrement_fina3, _vm$recouvrement_fina4;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [((_vm$recouvrement_fina = _vm.recouvrement_final_outcome) === null || _vm$recouvrement_fina === void 0 ? void 0 : _vm$recouvrement_fina.outcome) != 0 ? _c("div", {
    "class": {
      "box restructure": ((_vm$recouvrement_fina2 = _vm.recouvrement_final_outcome) === null || _vm$recouvrement_fina2 === void 0 ? void 0 : _vm$recouvrement_fina2.outcome) === 8,
      "box radie": ((_vm$recouvrement_fina3 = _vm.recouvrement_final_outcome) === null || _vm$recouvrement_fina3 === void 0 ? void 0 : _vm$recouvrement_fina3.outcome) === -2,
      "box recouvrer": ((_vm$recouvrement_fina4 = _vm.recouvrement_final_outcome) === null || _vm$recouvrement_fina4 === void 0 ? void 0 : _vm$recouvrement_fina4.outcome) === 7
    }
  }) : _vm._e(), _vm._v(" "), _vm.workflows.length ? _c("ul", {
    staticClass: "timeline"
  }, _vm._l(_vm.workflows_recovery, function (workflow, index) {
    return _c("li", {
      key: index,
      staticClass: "direction-r"
    }, [_c("div", [_c("div", {
      staticClass: "flag-wrapper"
    }, [_c("span", {
      staticClass: "flag"
    }, [_vm._v(_vm._s(workflow.action) + " " + _vm._s(workflow.team_id == 0 ? workflow.level : _vm.getLabelTeams("EQUIPE_".concat(workflow.team_id))))])]), _vm._v(" "), _vm._l(workflow.step, function (step) {
      var _Math$floor, _vm$dossier_credit_re, _vm$dossier_credit, _vm$dossier_credit2, _vm$dossier_credit3, _vm$authcheckusr, _vm$getLabelTeams, _vm$dossier_credit4, _vm$dossier_credit5, _vm$dossier_credit6, _vm$authcheckusr2;
      return _c("div", {
        key: step.id
      }, [_vm.current_step === step.id ? _c("div", {
        staticClass: "desc desc_active"
      }, [step.responsible_role_sigle == "DISPRC" ? _c("div", [_c("strong", [_vm._v("Responsable")]), _vm._v("\n                            " + _vm._s(step === null || step === void 0 ? void 0 : step.responsible)), _c("br")]) : _c("div", [_c("strong", [_vm._v("Responsable")]), _vm._v("\n                            " + _vm._s(step === null || step === void 0 ? void 0 : step.responsible)), _c("br"), _vm._v(" "), _c("strong", [_vm._v("Role")]), _vm._v("\n                            " + _vm._s(step === null || step === void 0 ? void 0 : step.responsible_role)), _c("br"), _vm._v(" "), _c("strong", [_vm._v("Durée de l'impayé:")]), _vm._v("\n                            " + _vm._s((_Math$floor = Math.floor((_vm$dossier_credit_re = _vm.dossier_credit_recovery) === null || _vm$dossier_credit_re === void 0 ? void 0 : _vm$dossier_credit_re.dureeimp)) !== null && _Math$floor !== void 0 ? _Math$floor : "N/A") + " jours"), _c("br"), _vm._v(" "), _c("strong", [_vm._v("Equipe: ")]), _vm._v("\n                            " + _vm._s(_vm.getTeamLabel(step))), _c("br"), _vm._v(" "), (step === null || step === void 0 ? void 0 : step.teams) == "EQUIPE_2" && step.responsible_role_sigle != "DISPRC" && (_vm$dossier_credit = _vm.dossier_credit) !== null && _vm$dossier_credit !== void 0 && (_vm$dossier_credit = _vm$dossier_credit.demande_procedure_juridique) !== null && _vm$dossier_credit !== void 0 && (_vm$dossier_credit = _vm$dossier_credit.procedure_data) !== null && _vm$dossier_credit !== void 0 && _vm$dossier_credit.recovery_procedure_juridique && ![null, undefined].includes((_vm$dossier_credit2 = _vm.dossier_credit) === null || _vm$dossier_credit2 === void 0 || (_vm$dossier_credit2 = _vm$dossier_credit2.demande_procedure_juridique) === null || _vm$dossier_credit2 === void 0 ? void 0 : _vm$dossier_credit2.date_confirmation) ? _c("span", [_c("strong", [_vm._v("Procédure juridique autorisée :")]), _vm._v("\n                                " + _vm._s(_vm.getLabelBySlug((_vm$dossier_credit3 = _vm.dossier_credit) === null || _vm$dossier_credit3 === void 0 || (_vm$dossier_credit3 = _vm$dossier_credit3.demande_procedure_juridique) === null || _vm$dossier_credit3 === void 0 || (_vm$dossier_credit3 = _vm$dossier_credit3.procedure_data) === null || _vm$dossier_credit3 === void 0 ? void 0 : _vm$dossier_credit3.recovery_procedure_juridique)) + "\n                            ")]) : _vm._e()]), _vm._v(" "), _c("div", [_c("strong", [_vm._v("Action(s) menées:")]), _vm._v(" "), step.responsible_role_sigle == "DISPRC" ? _c("span", [_vm._v("Dispatching"), _c("br")]) : _vm._e()]), _vm._v(" "), _c("TimeLineRecoveryActions", {
        attrs: {
          filiale: (_vm$authcheckusr = _vm.authcheckusr) === null || _vm$authcheckusr === void 0 ? void 0 : _vm$authcheckusr.filiale,
          durre_imp: _vm.duree_impaye,
          step: step,
          dossier_credit: _vm.dossier_credit,
          current_step: _vm.current_step,
          actionlist: _vm.actionsList2
        }
      })], 1) : _c("div", {
        staticClass: "desc"
      }, [_vm.current_step < step.id ? _c("div", [_c("strong", [_vm._v("Responsable")]), _vm._v(" "), _c("span", {
        staticClass: "text-danger"
      }, [_vm._v("\n                                En attente\n                            ")]), _vm._v(" "), _c("br")]) : step.responsible_role_sigle == "DISPRC" ? _c("div", [_c("strong", [_vm._v("Responsable")]), _vm._v("\n                            " + _vm._s(step === null || step === void 0 ? void 0 : step.responsible)), _c("br")]) : _c("div", [_c("strong", [_vm._v("Responsable")]), _vm._v("\n                            " + _vm._s(step === null || step === void 0 ? void 0 : step.responsible)), _c("br"), _vm._v(" "), _c("strong", [_vm._v("Durée de l'impayé:")]), _vm._v("\n                            " + _vm._s(_vm.getDureeImpaye(step))), _c("br"), _vm._v(" "), _c("strong", [_vm._v("Equipe: ")]), _vm._v("\n                            " + _vm._s((_vm$getLabelTeams = _vm.getLabelTeams(step === null || step === void 0 ? void 0 : step.teams)) !== null && _vm$getLabelTeams !== void 0 ? _vm$getLabelTeams : "N/A")), _c("br"), _vm._v(" "), (step === null || step === void 0 ? void 0 : step.teams) == "EQUIPE_2" && step.responsible_role_sigle != "DISPRC" && (_vm$dossier_credit4 = _vm.dossier_credit) !== null && _vm$dossier_credit4 !== void 0 && (_vm$dossier_credit4 = _vm$dossier_credit4.demande_procedure_juridique) !== null && _vm$dossier_credit4 !== void 0 && _vm$dossier_credit4.procedure_data.recovery_procedure_juridique && ![null, undefined].includes((_vm$dossier_credit5 = _vm.dossier_credit) === null || _vm$dossier_credit5 === void 0 ? void 0 : _vm$dossier_credit5.demande_procedure_juridique.date_confirmation) ? _c("span", [_c("strong", [_vm._v("Procédure juridique autorisée :")]), _vm._v("\n                                " + _vm._s(_vm.getLabelBySlug((_vm$dossier_credit6 = _vm.dossier_credit) === null || _vm$dossier_credit6 === void 0 || (_vm$dossier_credit6 = _vm$dossier_credit6.demande_procedure_juridique) === null || _vm$dossier_credit6 === void 0 || (_vm$dossier_credit6 = _vm$dossier_credit6.procedure_data) === null || _vm$dossier_credit6 === void 0 ? void 0 : _vm$dossier_credit6.recovery_procedure_juridique)) + "\n                            ")]) : _vm._e()]), _vm._v(" "), _vm.current_step > step.id ? _c("div", [_c("div", [_c("strong", [_vm._v("Action(s) menées:")]), _vm._v(" "), step.responsible_role_sigle == "DISPRC" ? _c("span", [_vm._v("Dispatching"), _c("br")]) : _vm._e()]), _vm._v(" "), _c("TimeLineRecoveryActions", {
        attrs: {
          durre_imp: _vm.duree_impaye,
          step: step,
          dossier_credit: _vm.dossier_credit,
          filiale: (_vm$authcheckusr2 = _vm.authcheckusr) === null || _vm$authcheckusr2 === void 0 ? void 0 : _vm$authcheckusr2.filiale,
          current_step: _vm.current_step,
          actionlist: _vm.actionsList2
        }
      })], 1) : _vm._e()]), _vm._v(" "), _c("hr")]);
    })], 2)]);
  }), 0) : _vm._e()]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/recouvrements/TimelineRecovery.vue?vue&type=style&index=0&id=570f8ef2&scoped=true&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/recouvrements/TimelineRecovery.vue?vue&type=style&index=0&id=570f8ef2&scoped=true&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\r\n/*@import url(\"https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,600italic,700,700italic\");*/\r\n\r\n/* Add your CSS here */\nbody[data-v-570f8ef2] {\r\n    margin: 0;\r\n    padding: 0;\r\n    background: rgb(230, 230, 230);\r\n\r\n    color: rgb(50, 50, 50);\r\n    font-family: \"Open Sans\", sans-serif;\r\n    font-size: 112.5%;\r\n    line-height: 1.6em;\n}\r\n\r\n/* ================ The Timeline ================ */\n.timeline[data-v-570f8ef2] {\r\n    position: relative;\r\n    margin-top: 20px;\r\n    padding: 1em 0;\r\n    list-style-type: none;\n}\n.timeline[data-v-570f8ef2]:before {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    content: \" \";\r\n    display: block;\r\n    width: 6px;\r\n    height: 100%;\r\n    /* margin-left: -3px; */\r\n    background: rgb(80, 80, 80);\r\n    background: linear-gradient(\r\n        to bottom,\r\n        rgba(80, 80, 80, 0) 0%,\r\n        rgb(80, 80, 80) 8%,\r\n        rgb(80, 80, 80) 92%,\r\n        rgba(80, 80, 80, 0) 100%\r\n    );\r\n\r\n    z-index: 1;\n}\n.timeline li[data-v-570f8ef2] {\r\n    padding: 1em 0;\n}\n.timeline li[data-v-570f8ef2]:after {\r\n    content: \"\";\r\n    display: block;\r\n    height: 0;\r\n    clear: both;\r\n    visibility: hidden;\n}\n.direction-l[data-v-570f8ef2],\r\n.direction-r[data-v-570f8ef2] {\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    margin-left: 37px;\n}\n.flag-wrapper[data-v-570f8ef2] {\r\n    position: relative;\r\n    display: inline-block;\r\n\r\n    text-align: center;\n}\n.flag[data-v-570f8ef2] {\r\n    position: relative;\r\n    display: inline;\r\n    background: rgb(248, 248, 248);\r\n    padding: 6px 10px;\r\n    border-radius: 5px;\r\n\r\n    font-weight: 600;\r\n    text-align: left;\n}\n.direction-l .flag[data-v-570f8ef2] {\r\n    box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.15);\n}\n.direction-r .flag[data-v-570f8ef2] {\r\n    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.15);\n}\n.direction-l .flag[data-v-570f8ef2]:before,\r\n.direction-r .flag[data-v-570f8ef2]:before {\r\n    position: absolute;\r\n    top: 50%;\r\n    right: -40px;\r\n    content: \" \";\r\n    display: block;\r\n    width: 12px;\r\n    height: 12px;\r\n    margin-top: -10px;\r\n    background: #fff;\r\n    border-radius: 10px;\r\n    border: 4px solid rgb(255, 80, 80);\r\n    z-index: 1;\n}\n.direction-r .flag[data-v-570f8ef2]:before {\r\n    left: -40px;\n}\n.direction-l .flag[data-v-570f8ef2]:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    left: 100%;\r\n    top: 50%;\r\n    height: 0;\r\n    width: 0;\r\n    margin-top: -8px;\r\n    border: solid transparent;\r\n    border-left-color: rgb(248, 248, 248);\r\n    border-width: 8px;\r\n    pointer-events: none;\n}\n.direction-r .flag[data-v-570f8ef2]:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    right: 100%;\r\n    top: 50%;\r\n    height: 0;\r\n    width: 0;\r\n    margin-top: -8px;\r\n    border: solid transparent;\r\n    border-right-color: rgb(248, 248, 248);\r\n    border-width: 8px;\r\n    pointer-events: none;\n}\n.time-wrapper[data-v-570f8ef2] {\r\n    display: inline;\r\n\r\n    line-height: 1em;\r\n    font-size: 0.66666em;\r\n    color: rgb(250, 80, 80);\r\n    vertical-align: middle;\n}\n.direction-l .time-wrapper[data-v-570f8ef2] {\r\n    float: left;\n}\n.direction-r .time-wrapper[data-v-570f8ef2] {\r\n    float: right;\n}\n.time[data-v-570f8ef2] {\r\n    display: inline-block;\r\n    padding: 4px 6px;\r\n    background: rgb(248, 248, 248);\n}\n.desc[data-v-570f8ef2] {\r\n    margin: 1em 0.75em 0 0;\r\n\r\n    font-size: 0.77777em;\r\n    /*font-style: italic;*/\r\n    line-height: 1.5em;\n}\n.desc_active[data-v-570f8ef2]{\r\n    background-color: #FF4500;\r\n    color: #fff;\r\n    padding: 10px;\r\n    border-radius : 5px;\n}\n.desc_active table[data-v-570f8ef2] {\r\n    background-color: #fff;\n}\n.direction-r .desc[data-v-570f8ef2] {\r\n    margin: 1em 0 0 0.75em;\n}\r\n\r\n/* ================ Timeline Media Queries ================ */\n@media screen and (max-width: 660px) {\n.timeline[data-v-570f8ef2] {\r\n        width: 100%;\r\n        padding: 4em 0 1em 0;\n}\n.timeline li[data-v-570f8ef2] {\r\n        padding: 2em 0;\n}\n.direction-l[data-v-570f8ef2],\r\n    .direction-r[data-v-570f8ef2] {\r\n        float: none;\r\n        width: 100%;\r\n\r\n        text-align: center;\n}\n.flag-wrapper[data-v-570f8ef2] {\r\n        text-align: center;\n}\n.flag[data-v-570f8ef2] {\r\n        background: rgb(255, 255, 255);\r\n        z-index: 15;\n}\n.direction-l .flag[data-v-570f8ef2]:before,\r\n    .direction-r .flag[data-v-570f8ef2]:before {\r\n        position: absolute;\r\n        top: -30px;\r\n        left: 50%;\r\n        content: \" \";\r\n        display: block;\r\n        width: 12px;\r\n        height: 12px;\r\n        margin-left: -9px;\r\n        background: #fff;\r\n        border-radius: 10px;\r\n        border: 4px solid rgb(255, 80, 80);\r\n        z-index: 1;\n}\n.direction-l .flag[data-v-570f8ef2]:after,\r\n    .direction-r .flag[data-v-570f8ef2]:after {\r\n        content: \"\";\r\n        position: absolute;\r\n        left: 50%;\r\n        top: -8px;\r\n        height: 0;\r\n        width: 0;\r\n        margin-left: -8px;\r\n        border: solid transparent;\r\n        border-bottom-color: rgb(255, 255, 255);\r\n        border-width: 8px;\r\n        pointer-events: none;\n}\n.time-wrapper[data-v-570f8ef2] {\r\n        display: block;\r\n        position: relative;\r\n        margin: 4px 0 0 0;\r\n        z-index: 14;\n}\n.direction-l .time-wrapper[data-v-570f8ef2] {\r\n        float: none;\n}\n.direction-r .time-wrapper[data-v-570f8ef2] {\r\n        float: none;\n}\n.desc[data-v-570f8ef2] {\r\n        position: relative;\r\n        margin: 1em 0 0 0;\r\n        padding: 1em;\r\n        background: rgb(245, 245, 245);\r\n        box-shadow: 0 0 1px rgba(0, 0, 0, 0.2);\r\n\r\n        z-index: 15;\n}\n.direction-l .desc[data-v-570f8ef2],\r\n    .direction-r .desc[data-v-570f8ef2] {\r\n        position: relative;\r\n        margin: 1em 1em 0 1em;\r\n        padding: 1em;\r\n\r\n        z-index: 15;\n}\n}\n@media screen and (min-width: 400px ?? max-width: 660px) {\n.direction-l .desc[data-v-570f8ef2],\r\n    .direction-r .desc[data-v-570f8ef2] {\r\n        margin: 1em 4em 0 4em;\n}\n}\n.actual_step[data-v-570f8ef2] {\r\n    background-color: #1ec775;\n}\n.see-more-button[data-v-570f8ef2] {\r\n    background-color: #212529;\r\n    color: white;\r\n    border: none;\r\n    padding: 10px 20px;\r\n    font-size: 14px;\r\n    cursor: pointer;\r\n    border-radius: 5px;\r\n    transition: background-color 0.3s ease;\n}\n.see-more-button[data-v-570f8ef2]:hover {\r\n    background-color: #1c1f23;\n}\r\n\r\n/* Extra styles */\r\n/* .table-responsive {\r\n    overflow-x: auto;\r\n}\r\n\r\n.table {\r\n    width: 100%;\r\n    max-width: 100%;\r\n    margin-bottom: 1rem;\r\n    background-color: transparent;\r\n}\r\n\r\n.table-bordered {\r\n    border: 1px solid #dee2e6;\r\n}\r\n\r\n.th {\r\n    width: 20%;\r\n} */\n@media screen and (max-width: 400px) {\n.content-elm[data-v-570f8ef2] {\r\n        background-color: red !important;\n}\n}\ndiv.box.recouvrer[data-v-570f8ef2]:after\r\n{\r\n    content:\"CREDIT RECOUVRE\";\r\n    position:absolute;\r\n    top:85px;\r\n    left:-18px;\r\n    z-index:1;\r\n    font-family:Arial,sans-serif; /* Safari */ /* Firefox */ /* IE */ /* Opera */\r\n    transform: rotate(-45deg);\r\n    font-size:25px;\r\n    color:#3498db;\r\n    background:#fff;\r\n    border:solid 2px #3498db;\r\n    padding:3px;\r\n    border-radius:5px;\r\n    zoom:1;\r\n    filter:alpha(opacity=20);\r\n    opacity:0.3;\r\n    -webkit-text-shadow: 0 0 5px #3498db;\r\n    text-shadow: 0 0 5px #3498db;\r\n    box-shadow: 0 0 5px #3498db;\n}\ndiv.box.restructure[data-v-570f8ef2]:after\r\n{\r\n    content:\"CREDIT RESTRUCTURE\";\r\n    position:absolute;\r\n    top:86px;\r\n    left:-24px;\r\n    z-index:1;\r\n    font-family:Arial,sans-serif; /* Safari */ /* Firefox */ /* IE */ /* Opera */\r\n    transform: rotate(-45deg);\r\n    font-size:22px;\r\n    color:#3498db;\r\n    background:#fff;\r\n    border:solid 2px #3498db;\r\n    padding:3px;\r\n    border-radius:5px;\r\n    zoom:1;\r\n    filter:alpha(opacity=20);\r\n    opacity:0.3;\r\n    -webkit-text-shadow: 0 0 5px #3498db;\r\n    text-shadow: 0 0 5px #3498db;\r\n    box-shadow: 0 0 5px #3498db;\n}\ndiv.box.radie[data-v-570f8ef2]:after\r\n{\r\n    content:\"CREDIT RADIE\";\r\n    position:absolute;\r\n    top:71px;\r\n    left:-12px;\r\n    z-index:1;\r\n    font-family:Arial,sans-serif; /* Safari */ /* Firefox */ /* IE */ /* Opera */\r\n    transform: rotate(-45deg);\r\n    font-size:30px;\r\n    color:#3498db;\r\n    background:#fff;\r\n    border:solid 2px #3498db;\r\n    padding:3px;\r\n    border-radius:5px;\r\n    zoom:1;\r\n    filter:alpha(opacity=20);\r\n    opacity:0.3;\r\n    -webkit-text-shadow: 0 0 5px #3498db;\r\n    text-shadow: 0 0 5px #3498db;\r\n    box-shadow: 0 0 5px #3498db;\n}\r\n\r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/recouvrements/TimelineRecovery.vue?vue&type=style&index=0&id=570f8ef2&scoped=true&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/recouvrements/TimelineRecovery.vue?vue&type=style&index=0&id=570f8ef2&scoped=true&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TimelineRecovery_vue_vue_type_style_index_0_id_570f8ef2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TimelineRecovery.vue?vue&type=style&index=0&id=570f8ef2&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/recouvrements/TimelineRecovery.vue?vue&type=style&index=0&id=570f8ef2&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TimelineRecovery_vue_vue_type_style_index_0_id_570f8ef2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TimelineRecovery_vue_vue_type_style_index_0_id_570f8ef2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/shared/recouvrements/TimeLineRecoveryActions.vue":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/shared/recouvrements/TimeLineRecoveryActions.vue ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TimeLineRecoveryActions_vue_vue_type_template_id_334fc18a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TimeLineRecoveryActions.vue?vue&type=template&id=334fc18a */ "./resources/js/components/shared/recouvrements/TimeLineRecoveryActions.vue?vue&type=template&id=334fc18a");
/* harmony import */ var _TimeLineRecoveryActions_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TimeLineRecoveryActions.vue?vue&type=script&lang=js */ "./resources/js/components/shared/recouvrements/TimeLineRecoveryActions.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TimeLineRecoveryActions_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _TimeLineRecoveryActions_vue_vue_type_template_id_334fc18a__WEBPACK_IMPORTED_MODULE_0__.render,
  _TimeLineRecoveryActions_vue_vue_type_template_id_334fc18a__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/shared/recouvrements/TimeLineRecoveryActions.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/shared/recouvrements/TimeLineRecoveryActions.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/shared/recouvrements/TimeLineRecoveryActions.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TimeLineRecoveryActions_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TimeLineRecoveryActions.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/recouvrements/TimeLineRecoveryActions.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TimeLineRecoveryActions_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shared/recouvrements/TimeLineRecoveryActions.vue?vue&type=template&id=334fc18a":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/shared/recouvrements/TimeLineRecoveryActions.vue?vue&type=template&id=334fc18a ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TimeLineRecoveryActions_vue_vue_type_template_id_334fc18a__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TimeLineRecoveryActions_vue_vue_type_template_id_334fc18a__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TimeLineRecoveryActions_vue_vue_type_template_id_334fc18a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TimeLineRecoveryActions.vue?vue&type=template&id=334fc18a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/recouvrements/TimeLineRecoveryActions.vue?vue&type=template&id=334fc18a");


/***/ }),

/***/ "./resources/js/components/shared/recouvrements/TimelineRecovery.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/components/shared/recouvrements/TimelineRecovery.vue ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TimelineRecovery_vue_vue_type_template_id_570f8ef2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TimelineRecovery.vue?vue&type=template&id=570f8ef2&scoped=true */ "./resources/js/components/shared/recouvrements/TimelineRecovery.vue?vue&type=template&id=570f8ef2&scoped=true");
/* harmony import */ var _TimelineRecovery_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TimelineRecovery.vue?vue&type=script&lang=js */ "./resources/js/components/shared/recouvrements/TimelineRecovery.vue?vue&type=script&lang=js");
/* harmony import */ var _TimelineRecovery_vue_vue_type_style_index_0_id_570f8ef2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TimelineRecovery.vue?vue&type=style&index=0&id=570f8ef2&scoped=true&lang=css */ "./resources/js/components/shared/recouvrements/TimelineRecovery.vue?vue&type=style&index=0&id=570f8ef2&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TimelineRecovery_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _TimelineRecovery_vue_vue_type_template_id_570f8ef2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _TimelineRecovery_vue_vue_type_template_id_570f8ef2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "570f8ef2",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/shared/recouvrements/TimelineRecovery.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/shared/recouvrements/TimelineRecovery.vue?vue&type=script&lang=js":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/shared/recouvrements/TimelineRecovery.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TimelineRecovery_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TimelineRecovery.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/recouvrements/TimelineRecovery.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TimelineRecovery_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shared/recouvrements/TimelineRecovery.vue?vue&type=style&index=0&id=570f8ef2&scoped=true&lang=css":
/*!***********************************************************************************************************************************!*\
  !*** ./resources/js/components/shared/recouvrements/TimelineRecovery.vue?vue&type=style&index=0&id=570f8ef2&scoped=true&lang=css ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TimelineRecovery_vue_vue_type_style_index_0_id_570f8ef2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TimelineRecovery.vue?vue&type=style&index=0&id=570f8ef2&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/recouvrements/TimelineRecovery.vue?vue&type=style&index=0&id=570f8ef2&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/shared/recouvrements/TimelineRecovery.vue?vue&type=template&id=570f8ef2&scoped=true":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/shared/recouvrements/TimelineRecovery.vue?vue&type=template&id=570f8ef2&scoped=true ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TimelineRecovery_vue_vue_type_template_id_570f8ef2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TimelineRecovery_vue_vue_type_template_id_570f8ef2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TimelineRecovery_vue_vue_type_template_id_570f8ef2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TimelineRecovery.vue?vue&type=template&id=570f8ef2&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/recouvrements/TimelineRecovery.vue?vue&type=template&id=570f8ef2&scoped=true");


/***/ })

}]);