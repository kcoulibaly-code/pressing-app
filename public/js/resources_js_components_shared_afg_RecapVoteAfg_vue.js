"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_shared_afg_RecapVoteAfg_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/RecapVoteAfg.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/RecapVoteAfg.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "RecapVoteAfg",
  props: {
    dossier_credit: Object,
    displayCanApp: Boolean,
    authcheckUsr: Object
  },
  data: function data() {
    return {
      decision: "",
      isLoading: false,
      isPubDoss: false,
      admin_votes: [],
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__["default"].host,
      automateVote: null,
      methode: null
    };
  },
  components: {
    CheckCircleIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__.CheckCircleIcon,
    XCircleIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__.XCircleIcon
  },
  mounted: function mounted() {
    var _this = this;
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            EventBus.$on('on-publish-vote', function () {
              _this.isPubDoss = true;
            });
            EventBus.$on('send-admin-votes', function (data) {
              var _data$admin_votes, _data$automateVote, _this$automateVote$re, _this$automateVote, _this$automateVote$me, _this$automateVote2;
              _this.isLoading = false;
              _this.admin_votes = (_data$admin_votes = data === null || data === void 0 ? void 0 : data.admin_votes) !== null && _data$admin_votes !== void 0 ? _data$admin_votes : [];
              _this.automateVote = (_data$automateVote = data === null || data === void 0 ? void 0 : data.automateVote) !== null && _data$automateVote !== void 0 ? _data$automateVote : null;
              _this.decision = (_this$automateVote$re = (_this$automateVote = _this.automateVote) === null || _this$automateVote === void 0 ? void 0 : _this$automateVote.response) !== null && _this$automateVote$re !== void 0 ? _this$automateVote$re : "";
              _this.methode = (_this$automateVote$me = (_this$automateVote2 = _this.automateVote) === null || _this$automateVote2 === void 0 ? void 0 : _this$automateVote2.methode) !== null && _this$automateVote$me !== void 0 ? _this$automateVote$me : null;
              if (_this.displayCanApp == true) {
                if (_this.decision == "AVIS FAVORABLE") {
                  _this.decision = "APPROBATION";
                }
                if (_this.decision == "AVIS NON FAVORABLE") {
                  _this.decision = "REFUS";
                }
              }
            });
            _this.isLoading = true;
            EventBus.$emit("get-admin-votes");

            // setTimeout(() => {
            //     this.isLoading = false;
            // }, 5000);
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  methods: {
    handleDoubleClickOrClick: function handleDoubleClickOrClick(event, index, element) {
      var _this2 = this;
      EventBus.$emit("open-extra-file-explorer");
      setTimeout(function () {
        EventBus.$emit("data-extra-file-explorer", {
          name: "Pièce(s) jointe(s) {(*)}admin_votes" + index + "_" + _this2.$route.params.templateId,
          view: true
        });
      }, 500);
    },
    emitPubDoss: function emitPubDoss() {
      if (this.methode == "Manuel") {
        var pass = true;
        var user = null;
        var _iterator = _createForOfIteratorHelper(this.admin_votes),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _decision$files, _decision$files2;
            var decision = _step.value;
            if (['', null, undefined].includes(decision === null || decision === void 0 || (_decision$files = decision.files) === null || _decision$files === void 0 ? void 0 : _decision$files.length) || (decision === null || decision === void 0 || (_decision$files2 = decision.files) === null || _decision$files2 === void 0 ? void 0 : _decision$files2.length) == 0) {
              var _decision$user;
              pass = false;
              user = (_decision$user = decision === null || decision === void 0 ? void 0 : decision.user) !== null && _decision$user !== void 0 ? _decision$user : null;
              break;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        if (pass == false) {
          var _user, _user2;
          this.$toasted.error("Veuillez attacher les pi\xE8ce(s) jointe(s) (Mail) de ".concat((_user = user) === null || _user === void 0 ? void 0 : _user.name, " (").concat((_user2 = user) === null || _user2 === void 0 ? void 0 : _user2.display_name, ") avant de continuer."), {
            duration: 5000
          });
          return;
        }
      }
      EventBus.$emit('validate-rp-vote', this.decision);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/RecapVoteAfg.vue?vue&type=template&id=c21fb016":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/RecapVoteAfg.vue?vue&type=template&id=c21fb016 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticStyle: {
      margin: "10px"
    }
  }, [_c("h1", {
    staticClass: "text-center",
    staticStyle: {
      color: "#34495e"
    }
  }, [_vm._v("\n        Récapitulatif des avis\n    ")]), _vm._v(" "), _c("hr"), _vm._v(" "), _vm.isLoading ? _c("div", {
    staticClass: "card-body"
  }, [_vm._m(0)]) : _c("div", [_c("div", {
    staticClass: "card-body"
  }, [_c("div", [_c("table", {
    staticClass: "table table-bordered"
  }, [_c("thead", [_c("tr", [_c("th", {
    staticClass: "col-4 sticky sticky-top-4 text-nowrap",
    staticStyle: {
      background: "#f4f3f3 !important"
    }
  }, [_vm._v("Nom & Prénoms")]), _vm._v(" "), _c("th", {
    staticClass: "col-3 sticky-top-3 text-center",
    staticStyle: {
      background: "#f4f3f3 !important"
    }
  }, [_vm._v("Fonction")]), _vm._v(" "), _c("th", {
    staticClass: "col-5 sticky-top-3 text-center",
    staticStyle: {
      background: "#f4f3f3 !important"
    }
  }, [_vm._v("Décision")]), _vm._v(" "), _vm.methode == "Manuel" ? _c("th", {
    staticClass: "col-5 sticky-top-3 text-center text-nowrap",
    staticStyle: {
      background: "#f4f3f3 !important"
    }
  }, [_vm._v("Pièce(s) jointe(s) (Mail)")]) : _vm._e()])]), _vm._v(" "), _c("tbody", _vm._l(_vm.admin_votes, function (admin, index) {
    var _admin$user, _admin$user2, _admin$files, _admin$files2, _admin$files3;
    return _c("tr", {
      key: "admin" + index
    }, [_c("td", {
      staticClass: "sticky"
    }, [_vm._v(_vm._s(admin === null || admin === void 0 || (_admin$user = admin.user) === null || _admin$user === void 0 ? void 0 : _admin$user.name))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(admin === null || admin === void 0 || (_admin$user2 = admin.user) === null || _admin$user2 === void 0 ? void 0 : _admin$user2.display_name))]), _vm._v(" "), _c("td", {
      staticClass: "text-nowrap"
    }, [["", null, undefined].includes(admin.decision) ? _c("span", {
      staticClass: "text-info"
    }, [_vm._v("Avis en attente de réception ...")]) : admin.decision == "AVIS FAVORABLE" ? _c("span", {
      staticClass: "text-success",
      attrs: {
        title: admin.decision
      }
    }, [_c("check-circle-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "1.5x"
      }
    }), _vm._v(" " + _vm._s(admin.decision) + "\n                                ")], 1) : admin.decision == "AVIS NON FAVORABLE" ? _c("span", {
      staticClass: "text-danger",
      attrs: {
        title: admin.decision
      }
    }, [_c("x-circle-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "1.5x"
      }
    }), _vm._v(" " + _vm._s(admin.decision) + "\n                                ")], 1) : _vm._e()]), _vm._v(" "), _vm.methode == "Manuel" ? _c("td", [(admin === null || admin === void 0 || (_admin$files = admin.files) === null || _admin$files === void 0 ? void 0 : _admin$files.length) > 0 ? _c("div", {
      staticClass: "d-flex align-items-center text-center justify-content-center"
    }, [_c("div", [_c("span", {
      staticClass: "p-1 px-2 mx-2 text-nowrap",
      staticStyle: {
        "background-color": "rgb(44, 62, 80)",
        color: "white",
        "font-size": "13px",
        "border-radius": "5px",
        "margin-left": "0!important",
        width: "150px"
      }
    }, [_vm._v(_vm._s((admin === null || admin === void 0 || (_admin$files2 = admin.files) === null || _admin$files2 === void 0 ? void 0 : _admin$files2.length) > 0 ? (admin === null || admin === void 0 || (_admin$files3 = admin.files) === null || _admin$files3 === void 0 ? void 0 : _admin$files3.length) + " fichier(s) uploadé(s)" : ""))])]), _vm._v(" "), _c("div", [_c("button", {
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
          return _vm.handleDoubleClickOrClick($event, index, admin);
        }
      }
    }, [_c("i", {
      staticClass: "icofont-attachment"
    })])])]) : _vm._e()]) : _vm._e()]);
  }), 0)])])]), _vm._v(" "), _c("div", [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm-12 col-md-12 col-lg-12 m-auto"
  }, [_vm.isPubDoss ? _c("button", {
    staticClass: "btn btn-secondary",
    staticStyle: {
      width: "100%",
      height: "8vh",
      "background-color": "#7f8c8d"
    },
    attrs: {
      disabled: ""
    }
  }, [_vm._m(1), _vm._v(" Prise en compte de la décision en cours ...\n                    ")]) : ["En attente des avis", "En attente du 3ème avis"].includes(_vm.decision) ? _c("button", {
    staticClass: "btn btn-secondary",
    staticStyle: {
      width: "100%",
      height: "8vh",
      "background-color": "#7f8c8d"
    },
    attrs: {
      disabled: ""
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.decision) + "\n                    ")]) : _c("div", [_vm.displayCanApp === false ? _c("div", [["AVIS FAVORABLE"].includes(_vm.decision) ? _c("div", [_c("button", {
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
      click: _vm.emitPubDoss
    }
  }, [_c("i", {
    staticClass: "icofont icofont-check icofont-3x"
  })]), _vm._v(" "), _vm._m(2)]) : _vm._e(), _vm._v(" "), ["AVIS NON FAVORABLE"].includes(_vm.decision) ? _c("div", [_c("button", {
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
      click: _vm.emitPubDoss
    }
  }, [_c("i", {
    staticClass: "icofont icofont-close icofont-3x"
  })]), _vm._v(" "), _vm._m(3)]) : _vm._e()]) : _c("div", [["APPROBATION"].includes(_vm.decision) ? _c("div", [_c("button", {
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
      click: _vm.emitPubDoss
    }
  }, [_c("i", {
    staticClass: "icofont icofont-check icofont-3x"
  })]), _vm._v(" "), _vm._m(4)]) : _vm._e(), _vm._v(" "), ["REFUS"].includes(_vm.decision) ? _c("div", [_c("button", {
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
      click: _vm.emitPubDoss
    }
  }, [_c("i", {
    staticClass: "icofont icofont-close icofont-3x"
  })]), _vm._v(" "), _vm._m(5)]) : _vm._e()])])])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "d-flex justify-content-center text-center align-items-center text-muted py-4"
  }, [_c("div", [_c("span", {
    staticClass: "spinner-border spinner-border"
  }), _vm._v(" "), _c("h5", [_vm._v("\n                    Chargement des données en cours ... "), _c("br"), _vm._v("\n                    Ceci peut prendre un peu de temps\n                ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("span", {
    staticClass: "spinner-border spinner-border-sm"
  }, [_c("span", {
    staticClass: "visually-hidden"
  }, [_vm._v("Loading...")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "text-center m-1"
  }, [_c("b", [_vm._v(" Avis Favorable ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "text-center m-1"
  }, [_c("b", [_vm._v("Avis défavorable")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "text-center m-1"
  }, [_c("b", [_vm._v(" Accord définitif ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "text-center m-1"
  }, [_c("b", [_vm._v(" Refus définitif ")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/shared/afg/RecapVoteAfg.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/shared/afg/RecapVoteAfg.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RecapVoteAfg_vue_vue_type_template_id_c21fb016__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RecapVoteAfg.vue?vue&type=template&id=c21fb016 */ "./resources/js/components/shared/afg/RecapVoteAfg.vue?vue&type=template&id=c21fb016");
/* harmony import */ var _RecapVoteAfg_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RecapVoteAfg.vue?vue&type=script&lang=js */ "./resources/js/components/shared/afg/RecapVoteAfg.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RecapVoteAfg_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _RecapVoteAfg_vue_vue_type_template_id_c21fb016__WEBPACK_IMPORTED_MODULE_0__.render,
  _RecapVoteAfg_vue_vue_type_template_id_c21fb016__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/shared/afg/RecapVoteAfg.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/shared/afg/RecapVoteAfg.vue?vue&type=script&lang=js":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/shared/afg/RecapVoteAfg.vue?vue&type=script&lang=js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RecapVoteAfg_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RecapVoteAfg.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/RecapVoteAfg.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RecapVoteAfg_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shared/afg/RecapVoteAfg.vue?vue&type=template&id=c21fb016":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/shared/afg/RecapVoteAfg.vue?vue&type=template&id=c21fb016 ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RecapVoteAfg_vue_vue_type_template_id_c21fb016__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RecapVoteAfg_vue_vue_type_template_id_c21fb016__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RecapVoteAfg_vue_vue_type_template_id_c21fb016__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RecapVoteAfg.vue?vue&type=template&id=c21fb016 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/afg/RecapVoteAfg.vue?vue&type=template&id=c21fb016");


/***/ })

}]);