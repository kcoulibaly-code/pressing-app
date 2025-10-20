"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_offview_bank_afg_pv_contre_analyse_groupe_CSC0_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/pv_contre_analyse_groupe/CSC0.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/pv_contre_analyse_groupe/CSC0.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    dossier_credit: Object
  },
  components: {
    CheckCircleIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__.CheckCircleIcon,
    XCircleIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__.XCircleIcon
  },
  data: function data() {
    return {
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__["default"].host,
      admin_votes: [],
      automateVote: {},
      data_tb: null,
      load_final_decision: false
    };
  },
  created: function created() {
    var _this = this;
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _this$dossier_credit$, _this$dossier_credit, _this$data_tb$admin_v, _this$data_tb;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _this.data_tb = (_this$dossier_credit$ = (_this$dossier_credit = _this.dossier_credit) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.cred_pub_tb_15800) !== null && _this$dossier_credit$ !== void 0 ? _this$dossier_credit$ : null;
            _this.admin_votes = (_this$data_tb$admin_v = (_this$data_tb = _this.data_tb) === null || _this$data_tb === void 0 ? void 0 : _this$data_tb.admin_votes) !== null && _this$data_tb$admin_v !== void 0 ? _this$data_tb$admin_v : [];
            _context.next = 4;
            return _this.getDecision();
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
    updateAutomateVote: function updateAutomateVote(votes, final_decision) {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _president$decision, _president, _admins$0$decision, _admins$, _admins$1$decision, _admins$2;
        var president, admins, responses;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              president = null;
              admins = [];
              votes.forEach(function (el) {
                var _el$user;
                if ((el === null || el === void 0 || (_el$user = el.user) === null || _el$user === void 0 ? void 0 : _el$user.role_uuid) == 's6HrzzeG7YJVRpaEtfhu') {
                  president = el;
                } else {
                  admins.push(el);
                }
              });
              responses = {
                president: (_president$decision = (_president = president) === null || _president === void 0 ? void 0 : _president.decision) !== null && _president$decision !== void 0 ? _president$decision : null,
                admin1: (_admins$0$decision = (_admins$ = admins[0]) === null || _admins$ === void 0 ? void 0 : _admins$.decision) !== null && _admins$0$decision !== void 0 ? _admins$0$decision : null,
                admin2: (_admins$1$decision = (_admins$2 = admins[1]) === null || _admins$2 === void 0 ? void 0 : _admins$2.decision) !== null && _admins$1$decision !== void 0 ? _admins$1$decision : null
              };
              _this3.load_final_decision = true;
              if (final_decision == "AVIS FAVORABLE") {
                final_decision = "APPROBATION";
              }
              if (final_decision == "AVIS NON FAVORABLE") {
                final_decision = "REFUS";
              }
              _this3.$set(_this3.automateVote, 'responses', responses);
              _this3.$set(_this3.automateVote, 'response', final_decision);
              _this3.load_final_decision = false;
            case 10:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    getDecision: function getDecision() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var decisions, form_data, url;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              decisions = [];
              _this4.load_final_decision = true;
              _this4.admin_votes.forEach(function (el, index) {
                var _el$user2, _el$user3, _el$commentaire, _el$decision;
                decisions.push({
                  id: index,
                  user_id: el === null || el === void 0 || (_el$user2 = el.user) === null || _el$user2 === void 0 ? void 0 : _el$user2.user_id,
                  role_uuid: el === null || el === void 0 || (_el$user3 = el.user) === null || _el$user3 === void 0 ? void 0 : _el$user3.role_uuid,
                  comment: (_el$commentaire = el === null || el === void 0 ? void 0 : el.commentaire) !== null && _el$commentaire !== void 0 ? _el$commentaire : "",
                  cred_pub_key: _this4.dossier_credit['cred_pub_key'],
                  decision: (_el$decision = el === null || el === void 0 ? void 0 : el.decision) !== null && _el$decision !== void 0 ? _el$decision : null,
                  validated_at: ""
                });
              });
              form_data = {};
              form_data['decisions'] = decisions;
              url = _this4.ebapisHost + 'creditbuilder/api/v1/get-automate-vote/';
              _context4.next = 8;
              return _this4.$axios.post(url, form_data).then(/*#__PURE__*/function () {
                var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(response) {
                  var _data$final_decision;
                  var data, final_decision;
                  return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                    while (1) switch (_context3.prev = _context3.next) {
                      case 0:
                        data = response.data.data;
                        final_decision = (_data$final_decision = data['final_decision']) !== null && _data$final_decision !== void 0 ? _data$final_decision : "EN ATTENTE DES AVIS";
                        _context3.next = 4;
                        return _this4.updateAutomateVote(_this4.admin_votes, final_decision);
                      case 4:
                        _this4.load_final_decision = false;
                      case 5:
                      case "end":
                        return _context3.stop();
                    }
                  }, _callee3);
                }));
                return function (_x) {
                  return _ref.apply(this, arguments);
                };
              }())["catch"](function (error) {
                _this4.load_final_decision = false;
                console.log(error);
              });
            case 8:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/pv_contre_analyse_groupe/CSC0.vue?vue&type=template&id=5ec0087f&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/pv_contre_analyse_groupe/CSC0.vue?vue&type=template&id=5ec0087f&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$dossier_credit, _vm$data_tb, _vm$data_tb2, _vm$data_tb3, _vm$automateVote, _vm$automateVote2;
  var _vm = this,
    _c = _vm._self._c;
  return (_vm$dossier_credit = _vm.dossier_credit) !== null && _vm$dossier_credit !== void 0 && _vm$dossier_credit.cred_pub_tb_15800 ? _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "justify-content-center"
  }, [_c("div", {
    staticClass: "head-memorandum-title mt-3",
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("\n            Recueil des avis administrateurs (" + _vm._s((_vm$data_tb = _vm.data_tb) === null || _vm$data_tb === void 0 ? void 0 : _vm$data_tb.methode) + ")\n        ")]), _vm._v(" "), _vm.load_final_decision ? _c("div", {
    staticClass: "card-body"
  }, [_vm._m(0)]) : _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "table-responsive mt-1 py-2"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_c("thead", [_c("tr", [_c("th", {
    staticClass: "col-4 sticky sticky-top-4 text-nowrap",
    staticStyle: {
      background: "#f4f3f3 !important"
    }
  }, [_vm._v("\n                                    Nom & Prénoms\n                                ")]), _vm._v(" "), _c("th", {
    staticClass: "col-3 sticky-top-3 text-center",
    staticStyle: {
      background: "#f4f3f3 !important"
    }
  }, [_vm._v("\n                                    Fonction\n                                ")]), _vm._v(" "), _c("th", {
    staticClass: "col-5 sticky-top-3 text-center",
    staticStyle: {
      background: "#f4f3f3 !important"
    }
  }, [_vm._v("\n                                    Décision\n                                ")]), _vm._v(" "), ((_vm$data_tb2 = _vm.data_tb) === null || _vm$data_tb2 === void 0 ? void 0 : _vm$data_tb2.methode) == "Manuel" ? _c("th", {
    staticClass: "col-5 sticky-top-3 text-center",
    staticStyle: {
      background: "#f4f3f3 !important"
    }
  }, [_vm._v("\n                                    Commentaire\n                                ")]) : _vm._e(), _vm._v(" "), ((_vm$data_tb3 = _vm.data_tb) === null || _vm$data_tb3 === void 0 ? void 0 : _vm$data_tb3.methode) == "Manuel" ? _c("th", {
    staticClass: "col-5 sticky-top-3 text-center",
    staticStyle: {
      background: "#f4f3f3 !important"
    }
  }, [_vm._v("\n                                    Pièce(s) jointe(s) (Mail)\n                                ")]) : _vm._e()])]), _vm._v(" "), _c("tbody", _vm._l(_vm.admin_votes, function (admin, index) {
    var _admin$user, _admin$user2, _vm$data_tb4, _vm$data_tb5, _admin$files, _admin$files2, _admin$files3;
    return _c("tr", {
      key: "admin" + index
    }, [_c("td", {
      staticClass: "sticky"
    }, [_vm._v(_vm._s(admin === null || admin === void 0 || (_admin$user = admin.user) === null || _admin$user === void 0 ? void 0 : _admin$user.name))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(admin === null || admin === void 0 || (_admin$user2 = admin.user) === null || _admin$user2 === void 0 ? void 0 : _admin$user2.display_name))]), _vm._v(" "), _c("td", [["", null, undefined].includes(admin.decision) ? _c("span", {
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
    }), _vm._v("\n                                        " + _vm._s(admin.decision) + "\n                                    ")], 1) : admin.decision == "AVIS NON FAVORABLE" ? _c("span", {
      staticClass: "text-danger",
      attrs: {
        title: admin.decision
      }
    }, [_c("x-circle-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "1.5x"
      }
    }), _vm._v("\n                                        " + _vm._s(admin.decision) + "\n                                    ")], 1) : _vm._e()]), _vm._v(" "), ((_vm$data_tb4 = _vm.data_tb) === null || _vm$data_tb4 === void 0 ? void 0 : _vm$data_tb4.methode) == "Manuel" ? _c("td", [_vm._v(_vm._s(admin === null || admin === void 0 ? void 0 : admin.commentaire))]) : _vm._e(), _vm._v(" "), ((_vm$data_tb5 = _vm.data_tb) === null || _vm$data_tb5 === void 0 ? void 0 : _vm$data_tb5.methode) == "Manuel" ? _c("td", [(admin === null || admin === void 0 || (_admin$files = admin.files) === null || _admin$files === void 0 ? void 0 : _admin$files.length) > 0 ? _c("div", {
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
  }), 0)]), _vm._v(" "), ["AVIS FAVORABLE", "APPROBATION"].includes((_vm$automateVote = _vm.automateVote) === null || _vm$automateVote === void 0 ? void 0 : _vm$automateVote.response) ? _c("div", {
    staticClass: "text-center",
    staticStyle: {
      "font-size": "1.5em"
    }
  }, [_vm._v("Décision final : \n                        "), _c("span", {
    staticClass: "text-center m-1 text-success"
  }, [_c("check-circle-icon", {
    staticClass: "custom-class",
    attrs: {
      size: "1.5x"
    }
  }), _vm._v(" "), _c("b", [_vm._v(_vm._s(_vm.automateVote.response == "APPROBATION" ? "Accord définitif" : "Avis favorable"))])], 1)]) : ["AVIS NON FAVORABLE", "REFUS"].includes((_vm$automateVote2 = _vm.automateVote) === null || _vm$automateVote2 === void 0 ? void 0 : _vm$automateVote2.response) ? _c("div", {
    staticClass: "text-center",
    staticStyle: {
      "font-size": "1.5em"
    }
  }, [_vm._v("Décision final : \n                        "), _c("span", {
    staticClass: "text-center m-1 text-danger"
  }, [_c("x-circle-icon", {
    staticClass: "custom-class",
    attrs: {
      size: "1.5x"
    }
  }), _vm._v(" "), _c("b", [_vm._v(_vm._s(_vm.automateVote.response == "REFUS" ? "Refus définitif" : "Avis non favorable"))])], 1)]) : _vm._e()])])])])]) : _vm._e();
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "d-flex justify-content-center text-center align-items-center text-muted py-4"
  }, [_c("div", [_c("span", {
    staticClass: "spinner-border spinner-border"
  }), _vm._v(" "), _c("h5", [_vm._v("\n                        Chargement des données en cours ... "), _c("br"), _vm._v("\n                        Ceci peut prendre un peu de temps\n                    ")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/pv_contre_analyse_groupe/CSC0.vue?vue&type=style&index=0&id=5ec0087f&scoped=true&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/pv_contre_analyse_groupe/CSC0.vue?vue&type=style&index=0&id=5ec0087f&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.head-memorandum-title[data-v-5ec0087f] {\r\n    font-weight: bold;\r\n    text-transform: uppercase;\r\n    text-align: center;\r\n    border: 1px solid;\r\n    padding: 4px;\n}\n.memo[data-v-5ec0087f] {\r\n    margin-top: 10px;\r\n    padding: 10px;\r\n    border: 2px solid #fff;\r\n    font-weight: 550;\r\n    font-size: 16px;\r\n    text-align: left;\r\n    text-transform: uppercase;\r\n    background-color: #34495e;\r\n    color: #fff;\n}\nth[data-v-5ec0087f] {\r\n    background: #f4f3f3 !important;\n}\n.bg-grey[data-v-5ec0087f] {\r\n    background-color: #f4f3f3;\r\n    width: 32%;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/pv_contre_analyse_groupe/CSC0.vue?vue&type=style&index=0&id=5ec0087f&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/pv_contre_analyse_groupe/CSC0.vue?vue&type=style&index=0&id=5ec0087f&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CSC0_vue_vue_type_style_index_0_id_5ec0087f_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CSC0.vue?vue&type=style&index=0&id=5ec0087f&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/pv_contre_analyse_groupe/CSC0.vue?vue&type=style&index=0&id=5ec0087f&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CSC0_vue_vue_type_style_index_0_id_5ec0087f_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CSC0_vue_vue_type_style_index_0_id_5ec0087f_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/pv_contre_analyse_groupe/CSC0.vue":
/*!************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/pv_contre_analyse_groupe/CSC0.vue ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CSC0_vue_vue_type_template_id_5ec0087f_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CSC0.vue?vue&type=template&id=5ec0087f&scoped=true */ "./resources/js/components/offview/bank/afg/pv_contre_analyse_groupe/CSC0.vue?vue&type=template&id=5ec0087f&scoped=true");
/* harmony import */ var _CSC0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CSC0.vue?vue&type=script&lang=js */ "./resources/js/components/offview/bank/afg/pv_contre_analyse_groupe/CSC0.vue?vue&type=script&lang=js");
/* harmony import */ var _CSC0_vue_vue_type_style_index_0_id_5ec0087f_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CSC0.vue?vue&type=style&index=0&id=5ec0087f&scoped=true&lang=css */ "./resources/js/components/offview/bank/afg/pv_contre_analyse_groupe/CSC0.vue?vue&type=style&index=0&id=5ec0087f&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CSC0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CSC0_vue_vue_type_template_id_5ec0087f_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _CSC0_vue_vue_type_template_id_5ec0087f_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "5ec0087f",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/offview/bank/afg/pv_contre_analyse_groupe/CSC0.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/pv_contre_analyse_groupe/CSC0.vue?vue&type=script&lang=js":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/pv_contre_analyse_groupe/CSC0.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CSC0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CSC0.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/pv_contre_analyse_groupe/CSC0.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CSC0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/offview/bank/afg/pv_contre_analyse_groupe/CSC0.vue?vue&type=style&index=0&id=5ec0087f&scoped=true&lang=css":
/*!********************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/pv_contre_analyse_groupe/CSC0.vue?vue&type=style&index=0&id=5ec0087f&scoped=true&lang=css ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CSC0_vue_vue_type_style_index_0_id_5ec0087f_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CSC0.vue?vue&type=style&index=0&id=5ec0087f&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/pv_contre_analyse_groupe/CSC0.vue?vue&type=style&index=0&id=5ec0087f&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/offview/bank/afg/pv_contre_analyse_groupe/CSC0.vue?vue&type=template&id=5ec0087f&scoped=true":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/bank/afg/pv_contre_analyse_groupe/CSC0.vue?vue&type=template&id=5ec0087f&scoped=true ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CSC0_vue_vue_type_template_id_5ec0087f_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CSC0_vue_vue_type_template_id_5ec0087f_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CSC0_vue_vue_type_template_id_5ec0087f_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CSC0.vue?vue&type=template&id=5ec0087f&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/bank/afg/pv_contre_analyse_groupe/CSC0.vue?vue&type=template&id=5ec0087f&scoped=true");


/***/ })

}]);