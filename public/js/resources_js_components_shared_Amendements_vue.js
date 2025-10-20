"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_shared_Amendements_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/Amendements.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/Amendements.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
// import Recouvrement from '../../services/recouvrement.service.js'
// import Credit from "../../services/credit.service";
// import Auth from "../../services/auth.service";
// import ebapis from "../../services/ebapis.service";
// import connects from "../../services/connects.service";

// import ProxyService from "../../services/proxy.service";

// import moment from 'moment';
// TODO add reupload component
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Amendements",
  props: {
    dossier_credit: {
      type: [Object],
      required: true,
      "default": function _default() {
        return {};
      }
    },
    amendementsUser: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {};
  },
  mounted: function mounted() {
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
    has_working_time: function has_working_time() {
      var _this$dossier_credit;
      return (_this$dossier_credit = this.dossier_credit) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.timesheets.find(function (el) {
        return !['', null, undefined].includes(el === null || el === void 0 ? void 0 : el.working_time);
      });
    }
  },
  methods: {
    getEvent: function getEvent(eventName) {
      if (eventName == "AFFECTATION_DE_DOSSIER") {
        return {
          name: "Affectation",
          color: "#4b0080"
        };
      } else if (eventName == "AJOURNEMENT_DE_DOSSIER") {
        return {
          name: "Ajournement",
          color: "#e74c3c"
        };
      } else {
        var name = eventName.split('_');
        eventName = name[0] + " " + name[1];
        return {
          name: eventName,
          color: "#3498db"
        };
      }
    },
    calculAmendementDelta: function calculAmendementDelta(dateStart, dateEnd) {
      // Convertir les chaînes de date en objets Date
      var delaisDebut = new Date(dateStart);
      var delaisFin = new Date(dateEnd);

      // Calculer la différence de temps en millisecondes
      var timeDifference = delaisFin - delaisDebut;

      // Convertir completion_total en format "0J - 0H - 7M - 38S"
      var totalSeconds = Math.floor(timeDifference / 1000);
      var days = Math.floor(totalSeconds / 86400);
      var hours = Math.floor(totalSeconds % 86400 / 3600);
      var minutes = Math.floor(totalSeconds % 3600 / 60);
      var seconds = totalSeconds % 60;
      return "".concat(days, "J - ").concat(hours, "H - ").concat(minutes, "M - ").concat(seconds, "S");
    },
    getWorkingTime: function getWorkingTime(amendement, index) {
      var _this$dossier_credit$, _this$dossier_credit2;
      var days = 0;
      var hours = 0;
      var minutes = 0;
      var seconds = 0;
      var timesheets = (_this$dossier_credit$ = (_this$dossier_credit2 = this.dossier_credit) === null || _this$dossier_credit2 === void 0 ? void 0 : _this$dossier_credit2.timesheets) !== null && _this$dossier_credit$ !== void 0 ? _this$dossier_credit$ : [];
      var timesheet = timesheets.find(function (el) {
        var _amendement$who_curre, _amendement$who_curre2;
        return (el === null || el === void 0 ? void 0 : el.user_id) == (amendement === null || amendement === void 0 || (_amendement$who_curre = amendement.who_currently_has_it) === null || _amendement$who_curre === void 0 ? void 0 : _amendement$who_curre.user_id) && (el === null || el === void 0 ? void 0 : el.stage_id) == (amendement === null || amendement === void 0 || (_amendement$who_curre2 = amendement.who_currently_has_it) === null || _amendement$who_curre2 === void 0 ? void 0 : _amendement$who_curre2.stage_id);
      });
      if (!['', null, undefined].includes(timesheet === null || timesheet === void 0 ? void 0 : timesheet.working_time)) {
        var _timesheet$working_ti, _timesheet$working_ti2;
        var wt_amendements = (_timesheet$working_ti = timesheet === null || timesheet === void 0 || (_timesheet$working_ti2 = timesheet.working_time) === null || _timesheet$working_ti2 === void 0 || (_timesheet$working_ti2 = _timesheet$working_ti2.amendement) === null || _timesheet$working_ti2 === void 0 ? void 0 : _timesheet$working_ti2.working_time) !== null && _timesheet$working_ti !== void 0 ? _timesheet$working_ti : null;
        if (!['', null, undefined].includes(wt_amendements)) {
          var _wt_amendements$index;
          var wt_amendement = (_wt_amendements$index = wt_amendements[index]) !== null && _wt_amendements$index !== void 0 ? _wt_amendements$index : null;
          if (!['', null, undefined].includes(wt_amendement)) {
            var _wt_amendement$total_, _wt_amendement$total_2, _wt_amendement$total_3, _wt_amendement$total_4, _wt_amendement$total_5, _wt_amendement$total_6, _wt_amendement$total_7, _wt_amendement$total_8;
            days = (_wt_amendement$total_ = wt_amendement === null || wt_amendement === void 0 || (_wt_amendement$total_2 = wt_amendement.total_working_time) === null || _wt_amendement$total_2 === void 0 ? void 0 : _wt_amendement$total_2['days']) !== null && _wt_amendement$total_ !== void 0 ? _wt_amendement$total_ : 0;
            hours = (_wt_amendement$total_3 = wt_amendement === null || wt_amendement === void 0 || (_wt_amendement$total_4 = wt_amendement.total_working_time) === null || _wt_amendement$total_4 === void 0 ? void 0 : _wt_amendement$total_4['hours']) !== null && _wt_amendement$total_3 !== void 0 ? _wt_amendement$total_3 : 0;
            minutes = (_wt_amendement$total_5 = wt_amendement === null || wt_amendement === void 0 || (_wt_amendement$total_6 = wt_amendement.total_working_time) === null || _wt_amendement$total_6 === void 0 ? void 0 : _wt_amendement$total_6['minutes']) !== null && _wt_amendement$total_5 !== void 0 ? _wt_amendement$total_5 : 0;
            seconds = (_wt_amendement$total_7 = wt_amendement === null || wt_amendement === void 0 || (_wt_amendement$total_8 = wt_amendement.total_working_time) === null || _wt_amendement$total_8 === void 0 ? void 0 : _wt_amendement$total_8['seconds']) !== null && _wt_amendement$total_7 !== void 0 ? _wt_amendement$total_7 : 0;
          }
        }
      }
      return "".concat(days, "J - ").concat(hours, "H - ").concat(minutes, "M - ").concat(seconds, "S");
    }
  },
  watch: {
    amendementsUser: function amendementsUser(newVal) {
      this.amendementsUser = newVal;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/Amendements.vue?vue&type=template&id=52bd47c0&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/Amendements.vue?vue&type=template&id=52bd47c0&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("modal", {
    attrs: {
      name: "amendements",
      width: 1300,
      height: "auto",
      adaptive: true,
      resizable: false,
      draggable: false
    },
    on: {
      close: function close($event) {
        return _vm.onClose();
      }
    }
  }, [_c("div", {
    staticClass: "mx-auto p-3"
  }, [_c("div", {
    staticClass: "container-fluid d-flex flex-column m-0 bg-white border rounded mx-auto p-3",
    staticStyle: {
      height: "100%",
      overflow: "hidden",
      "z-index": "9999"
    }
  }, [_c("div", [_c("div", {
    staticClass: "memo",
    style: {
      "background-color": _vm.entityColor
    }
  }, [_c("div", {
    staticClass: "container-fluid"
  }, [_c("div", {
    staticClass: "d-flex justify-content-between align-items-center"
  }, [_c("div", [_vm._v("\n                                Amendements\n                            ")]), _vm._v(" "), _c("div", [_c("div", {
    staticClass: "d-flex justify-content-between align-items-center"
  }, [_c("i", {
    staticClass: "icofont-close",
    attrs: {
      role: "button"
    },
    on: {
      click: function click($event) {
        return _vm.$modal.hide("amendements");
      }
    }
  })])])])])]), _vm._v(" "), _c("div", {
    staticStyle: {
      "max-height": "80vh",
      overflow: "auto"
    }
  }, [_c("div", {
    staticClass: "container-fluid py-3 mb-2",
    staticStyle: {
      "max-height": "80vh",
      overflow: "auto"
    }
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("form", [_c("fieldset", {
    staticClass: "p-2"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("table", {
    staticClass: "table table-bordered mb-3 mb-2"
  }, [_c("thead", {
    staticClass: "bg-ed-primary"
  }, [_c("tr", {
    staticClass: "bg-grey"
  }, [_c("th", {
    staticStyle: {
      "vertical-align": "middle",
      "text-align": "center"
    },
    attrs: {
      rowspan: "2"
    }
  }, [_vm._v("ID")]), _vm._v(" "), _c("th", {
    staticStyle: {
      "vertical-align": "middle",
      "text-align": "center"
    },
    attrs: {
      rowspan: "2"
    }
  }, [_vm._v("Action")]), _vm._v(" "), _c("th", {
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      colspan: "3"
    }
  }, [_vm._v("\n                                                        Amendeurs\n                                                    ")]), _vm._v(" "), _c("th", {
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      colspan: "3"
    }
  }, [_vm._v("\n                                                        Amendés\n                                                    ")]), _vm._v(" "), _c("th", {
    staticStyle: {
      width: "180px",
      "vertical-align": "middle",
      "text-align": "center"
    },
    attrs: {
      rowspan: "2"
    }
  }, [_vm._v("Délai de cpl.")]), _vm._v(" "), _vm.has_working_time ? _c("th", {
    staticStyle: {
      width: "180px",
      "vertical-align": "middle",
      "text-align": "center"
    },
    attrs: {
      rowspan: "2",
      title: "Délai de complétion (Working Time)"
    }
  }, [_vm._v("Délai de cpl. (WT)")]) : _vm._e()]), _vm._v(" "), _c("tr", {
    staticClass: "bg-grey"
  }, [_c("th", {
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("Nom")]), _vm._v(" "), _c("th", {
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("Role")]), _vm._v(" "), _c("th", {
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("Date de réception")]), _vm._v(" "), _c("th", {
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("Nom")]), _vm._v(" "), _c("th", {
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("Role")]), _vm._v(" "), _c("th", {
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("Date de reponse")])])]), _vm._v(" "), _c("tbody", _vm._l(_vm.amendementsUser, function (amendement, key) {
    var _amendement$why_has_i, _amendement$why_has_i2, _amendement$what_he_h, _amendement$what_he_h2, _amendement$who_curre, _amendement$who_curre2;
    return _c("tr", {
      key: key
    }, [_c("td", [_vm._v(_vm._s(key + 1))]), _vm._v(" "), _c("td", [_c("b", [_c("span", {
      style: {
        color: _vm.getEvent(amendement === null || amendement === void 0 || (_amendement$why_has_i = amendement.why_has_it) === null || _amendement$why_has_i === void 0 ? void 0 : _amendement$why_has_i.event_name).color
      }
    }, [_vm._v("\n                                                                " + _vm._s(_vm.getEvent(amendement === null || amendement === void 0 || (_amendement$why_has_i2 = amendement.why_has_it) === null || _amendement$why_has_i2 === void 0 ? void 0 : _amendement$why_has_i2.event_name).name) + "\n                                                            ")])])]), _vm._v(" "), _c("td", [_vm._v(_vm._s(amendement === null || amendement === void 0 || (_amendement$what_he_h = amendement.what_he_had) === null || _amendement$what_he_h === void 0 ? void 0 : _amendement$what_he_h.name))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(amendement === null || amendement === void 0 || (_amendement$what_he_h2 = amendement.what_he_had) === null || _amendement$what_he_h2 === void 0 ? void 0 : _amendement$what_he_h2.role_name))]), _vm._v(" "), _c("td", {
      staticClass: "text-nowrap"
    }, [_vm._v(_vm._s(_vm._f("formatDate")(amendement === null || amendement === void 0 ? void 0 : amendement.since_when_has_it, true)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(amendement === null || amendement === void 0 || (_amendement$who_curre = amendement.who_currently_has_it) === null || _amendement$who_curre === void 0 ? void 0 : _amendement$who_curre.name))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(amendement === null || amendement === void 0 || (_amendement$who_curre2 = amendement.who_currently_has_it) === null || _amendement$who_curre2 === void 0 ? void 0 : _amendement$who_curre2.role_name))]), _vm._v(" "), _c("td", {
      staticClass: "text-nowrap"
    }, [_vm._v(_vm._s(_vm._f("formatDate")(amendement === null || amendement === void 0 ? void 0 : amendement.since_when_did_he_not_have_it, true)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.calculAmendementDelta(amendement.since_when_has_it, amendement.since_when_did_he_not_have_it)))]), _vm._v(" "), _vm.has_working_time ? _c("td", [_vm._v(_vm._s(_vm.getWorkingTime(amendement, key)))]) : _vm._e()]);
  }), 0)])])])])])])])])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/Amendements.vue?vue&type=style&index=0&id=52bd47c0&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/Amendements.vue?vue&type=style&index=0&id=52bd47c0&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.tableFixedHead[data-v-52bd47c0] {\r\n    background-color: #fff;\r\n    overflow: auto;\r\n    height: 100px;\n}\n.tableFixedHead thead th[data-v-52bd47c0] {\r\n    background-color: #fff;\r\n    position: sticky !important;\r\n    top: 0;\r\n    z-index: 1;\n}\n.sticky[data-v-52bd47c0] {\r\n    background-color: #fff;\r\n    position: sticky !important;\r\n    top: 0;\r\n    z-index: 1;\n}\n.memo[data-v-52bd47c0] {\r\n    padding: 10px;\r\n    border: 2px solid #fff;\r\n    font-weight: 550;\r\n    font-size: 16px;\r\n    /* text-align: center; */\r\n    text-transform: uppercase;\r\n    background-color: #bc872b;\r\n    color: #fff;\n}\n.bg-grey[data-v-52bd47c0] {\r\n    background-color: #f4f3f3;\n}\n.container[data-v-52bd47c0] {\r\n    width: 100%;\r\n    max-width: 1000px;\r\n    margin: 0 auto;\n}\n.feed-container[data-v-52bd47c0] {\r\n    max-width: 800px;\r\n    margin: 0 auto;\r\n    background: white;\r\n    padding: 20px;\r\n    border-radius: 8px;\r\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.feed-date[data-v-52bd47c0] {\r\n    font-size: 18px;\r\n    color: #555;\r\n    margin-bottom: 10px;\r\n    margin-top: 20px;\n}\n.feed-item[data-v-52bd47c0] {\r\n    display: flex;\r\n    align-items: flex-start;\r\n    margin-bottom: 20px;\n}\n.profile-pic[data-v-52bd47c0] {\r\n    width: 40px;\r\n    height: 40px;\r\n    border-radius: 50%;\r\n    margin-right: 10px;\r\n    border: solid 1px #555;\n}\n.feed-content[data-v-52bd47c0] {\r\n    flex: 1;\n}\n.feed-content p[data-v-52bd47c0] {\r\n    margin: 0;\r\n    color: #333;\n}\n.feed-content p b[data-v-52bd47c0] {\r\n    color: #007bff;\n}\n.quote[data-v-52bd47c0] {\r\n    font-style: italic;\r\n    color: #555;\r\n    margin: 5px 0;\n}\n.visibility[data-v-52bd47c0] {\r\n    display: block;\r\n    font-size: 12px;\r\n    color: #999;\r\n    margin-top: 5px;\n}\n.circle-container[data-v-52bd47c0] {\r\n    height: 50px;\r\n    width: 50px;\r\n    background-color: white;\r\n    border: 1px solid #ccc;\r\n    border-radius: 50%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-align: center;\r\n    padding: 4px;\n}\n.circle-link[data-v-52bd47c0] {\r\n    font-size: 11px;\r\n    text-decoration: none;\r\n    color: inherit;\n}\n.circle-text[data-v-52bd47c0] {\r\n    font-size: 26px;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/Amendements.vue?vue&type=style&index=0&id=52bd47c0&scoped=true&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/Amendements.vue?vue&type=style&index=0&id=52bd47c0&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Amendements_vue_vue_type_style_index_0_id_52bd47c0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Amendements.vue?vue&type=style&index=0&id=52bd47c0&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/Amendements.vue?vue&type=style&index=0&id=52bd47c0&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Amendements_vue_vue_type_style_index_0_id_52bd47c0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Amendements_vue_vue_type_style_index_0_id_52bd47c0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/shared/Amendements.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/shared/Amendements.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Amendements_vue_vue_type_template_id_52bd47c0_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Amendements.vue?vue&type=template&id=52bd47c0&scoped=true */ "./resources/js/components/shared/Amendements.vue?vue&type=template&id=52bd47c0&scoped=true");
/* harmony import */ var _Amendements_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Amendements.vue?vue&type=script&lang=js */ "./resources/js/components/shared/Amendements.vue?vue&type=script&lang=js");
/* harmony import */ var _Amendements_vue_vue_type_style_index_0_id_52bd47c0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Amendements.vue?vue&type=style&index=0&id=52bd47c0&scoped=true&lang=css */ "./resources/js/components/shared/Amendements.vue?vue&type=style&index=0&id=52bd47c0&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Amendements_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Amendements_vue_vue_type_template_id_52bd47c0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _Amendements_vue_vue_type_template_id_52bd47c0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "52bd47c0",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/shared/Amendements.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/shared/Amendements.vue?vue&type=script&lang=js":
/*!********************************************************************************!*\
  !*** ./resources/js/components/shared/Amendements.vue?vue&type=script&lang=js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Amendements_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Amendements.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/Amendements.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Amendements_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shared/Amendements.vue?vue&type=style&index=0&id=52bd47c0&scoped=true&lang=css":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/shared/Amendements.vue?vue&type=style&index=0&id=52bd47c0&scoped=true&lang=css ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Amendements_vue_vue_type_style_index_0_id_52bd47c0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Amendements.vue?vue&type=style&index=0&id=52bd47c0&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/Amendements.vue?vue&type=style&index=0&id=52bd47c0&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/shared/Amendements.vue?vue&type=template&id=52bd47c0&scoped=true":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/shared/Amendements.vue?vue&type=template&id=52bd47c0&scoped=true ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Amendements_vue_vue_type_template_id_52bd47c0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Amendements_vue_vue_type_template_id_52bd47c0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Amendements_vue_vue_type_template_id_52bd47c0_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Amendements.vue?vue&type=template&id=52bd47c0&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/Amendements.vue?vue&type=template&id=52bd47c0&scoped=true");


/***/ })

}]);