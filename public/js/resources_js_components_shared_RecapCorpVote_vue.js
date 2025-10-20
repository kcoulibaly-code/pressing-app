"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_shared_RecapCorpVote_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/RecapCorpVote.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/RecapCorpVote.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "RecapVote",
  props: {
    dossier_credit: Object,
    displayCanApp: Boolean,
    authcheckUsr: Object
  },
  data: function data() {
    return {
      activeItem: 'ca',
      decision: "",
      head_msg: "",
      voters_list: [],
      ccca_voter_list: [],
      data_voting: {},
      isLoading: false,
      isPubDoss: false,
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__["default"].host
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
            // this.getLastProp()
            EventBus.$on('on-publish-vote', function () {
              _this.isPubDoss = true;
            });
            _this.isLoading = true;
            _context.next = 4;
            return _this.loadData();
          case 4:
            _this.isLoading = false;
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  methods: {
    isActive: function isActive(menuItem) {
      return this.activeItem === menuItem;
    },
    setActive: function setActive(menuItem) {
      this.activeItem = menuItem;
    },
    loadData: function loadData() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _this2$dossier_credit, _this2$dossier_credit2;
        var has_grand_risque, has_partie_lie, code_gr_pl;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              has_grand_risque = (_this2$dossier_credit = _this2.dossier_credit) === null || _this2$dossier_credit === void 0 || (_this2$dossier_credit = _this2$dossier_credit.cred_pub_tb_40001) === null || _this2$dossier_credit === void 0 ? void 0 : _this2$dossier_credit.grand_risque;
              has_partie_lie = (_this2$dossier_credit2 = _this2.dossier_credit) === null || _this2$dossier_credit2 === void 0 || (_this2$dossier_credit2 = _this2$dossier_credit2.cred_pub_tb_40001) === null || _this2$dossier_credit2 === void 0 ? void 0 : _this2$dossier_credit2.partie_liee;
              code_gr_pl = "majorite_simple";
              if (has_partie_lie == "OUI" && ["NON", "", null, undefined].includes(has_grand_risque)) {
                // console.log("has_grand_risque")
                code_gr_pl = "unanimite";
              }

              // if(has_grand_risque == 'OUI' && ["NON","",null,undefined].includes(has_partie_lie)){
              //     console.log("has_grand_risque")
              //     code_gr_pl = "majorite_simple"
              // } 

              // has_gr_pl = request.data.get('gr_pl')
              // paragdims
              _this2.$axios.post(_this2.ebapisHost + "creditbuilder/api/v1/nsia/vote/result/", {
                cred_pub_key: _this2.dossier_credit["cred_pub_key"],
                user: _this2.authcheckUsr,
                paragdims: code_gr_pl
              }).then(function (response) {
                var data = response.data;
                if (data["is_success"] === true) {
                  var _data$receivers_bag, _this2$dossier_credit3;
                  _this2.data_voting = data;
                  if (data !== null && data !== void 0 && data.final_decision) {
                    var _data$final_decision, _data$final_decision2;
                    if (((_data$final_decision = data.final_decision) === null || _data$final_decision === void 0 ? void 0 : _data$final_decision.toUpperCase()) == "Avis favorable".toUpperCase()) {
                      _this2.decision = "APPROBATION";
                    }
                    if (((_data$final_decision2 = data.final_decision) === null || _data$final_decision2 === void 0 ? void 0 : _data$final_decision2.toUpperCase()) == 'Avis défavorable'.toUpperCase()) {
                      _this2.decision = "REFUS";
                    }
                  } else {
                    if ((data === null || data === void 0 ? void 0 : data.code) == 'FAV_EMPORTED') {
                      _this2.decision = "APPROBATION";
                    }
                    if ((data === null || data === void 0 ? void 0 : data.code) == 'DFAV_EMPORTED') {
                      _this2.decision = "REFUS";
                    }
                    if ((data === null || data === void 0 ? void 0 : data.code) == 'HEAD_NOT_EXISTS') {
                      _this2.decision = "HEAD_NOT_EXISTS";
                    }
                    if ((data === null || data === void 0 ? void 0 : data.code) == 'VOTE_PENDING') {
                      _this2.decision = "VOTE_PENDING";
                    }
                    if ((data === null || data === void 0 ? void 0 : data.code) == 'HEAD_EXISTS') {
                      var _data$head_decision, _data$head_decision2;
                      // console.log("HEAD_EXISTS")
                      if ((data === null || data === void 0 || (_data$head_decision = data.head_decision) === null || _data$head_decision === void 0 ? void 0 : _data$head_decision.toUpperCase()) == "Avis favorable".toUpperCase()) {
                        // console.log("HEAD_EXISTS")

                        _this2.decision = "APPROBATION";
                      }
                      if ((data === null || data === void 0 || (_data$head_decision2 = data.head_decision) === null || _data$head_decision2 === void 0 ? void 0 : _data$head_decision2.toUpperCase()) == "Avis défavorable".toUpperCase()) {
                        _this2.decision = "REFUS";
                      }
                    }
                    // 
                  }
                  if (_this2.displayCanApp == false) {
                    if (_this2.decision == 'APPROBATION') {
                      _this2.decision = "AVIS FAVORABLE";
                    }
                    if (_this2.decision == 'REFUS') {
                      _this2.decision = "AVIS NON FAVORABLE";
                    }
                  }
                  // console.log("receivers_bag ==> ",data["receivers_bag"])

                  if (((_data$receivers_bag = data["receivers_bag"]) === null || _data$receivers_bag === void 0 ? void 0 : _data$receivers_bag.length) > 0) {
                    _this2.voters_list = _this2.initProcessVoteList(data["receivers_bag"], data["all_ccca_member_who_has_voted"]);
                    _this2.isLoading = false;
                  }
                  _this2.ccca_voter_list = (_this2$dossier_credit3 = _this2.dossier_credit) === null || _this2$dossier_credit3 === void 0 ? void 0 : _this2$dossier_credit3.ccca_vote_logs;
                  // console.log("ccca_voter_list ==> ",this.ccca_voter_list)
                }
              })["catch"](function (error) {
                console.log(error);
              });
            case 5:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    initProcessVoteList: function initProcessVoteList(receivers_bag, all_ccca_member_who_has_voted) {
      var l = [];
      var should_receiv_ = receivers_bag;
      var has_voted_ = all_ccca_member_who_has_voted;
      if (has_voted_.length > 0) {
        var _loop = function _loop(i) {
          if (i == 0) {
            return 1; // continue
          } else {
            var h = has_voted_.filter(function (item, index) {
              return item.user_id == should_receiv_[i]["id"];
            });
            if (h.length > 0) {
              should_receiv_[i]["vote_bool"] = h[0]["user_decision_bool"];
              should_receiv_[i]["vote_lib"] = h[0]["user_decision_lib"];
            } else {
              should_receiv_[i]["vote_bool"] = undefined;
              should_receiv_[i]["vote_lib"] = undefined;
            }
          }
        };
        // console.log("has_voted_ oui")
        for (var i = 0; i < should_receiv_.length; i++) {
          if (_loop(i)) continue;
        }
        return should_receiv_;
      } else {
        for (var _i = 0; _i < should_receiv_.length; _i++) {
          should_receiv_[_i]["vote_bool"] = undefined;
          should_receiv_[_i]["vote_lib"] = undefined;
        }
        //console.log("has_voted_ non", should_receiv_.length)
        return should_receiv_;
      }
    },
    emitPubDoss: function emitPubDoss() {
      EventBus.$emit('validate-rp-vote', this.decision);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/RecapCorpVote.vue?vue&type=template&id=1449f394":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/RecapCorpVote.vue?vue&type=template&id=1449f394 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _this$authcheckUsr, _vm$data_voting, _vm$data_voting2, _this$authcheckUsr2, _vm$ccca_voter_list, _vm$data_voting3, _vm$data_voting4, _vm$data_voting5, _vm$data_voting6, _vm$data_voting7;
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
  }, [_vm._v("\n        Récapitulatif du vote\n    ")]), _vm._v(" "), _c("hr"), _vm._v(" "), _vm.isLoading ? _c("div", {
    staticClass: "card-body"
  }, [_vm._m(0)]) : _c("div", [_c("div", {
    staticClass: "card-body"
  }, [["2YUrhvU1t9Evin4mXK0e"].includes((_this$authcheckUsr = this.authcheckUsr) === null || _this$authcheckUsr === void 0 ? void 0 : _this$authcheckUsr.role_uuid) ? _c("ul", {
    staticClass: "nav nav-tabs nav-justified"
  }, [_c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    staticClass: "nav-link",
    "class": {
      active: _vm.isActive("ca")
    },
    attrs: {
      href: "#ca"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.setActive("ca");
      }
    }
  }, [_c("b", [_vm._v("Conseil d'administration (CA)")])])]), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    staticClass: "nav-link",
    "class": {
      active: _vm.isActive("ccca")
    },
    attrs: {
      href: "#ccca"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.setActive("ccca");
      }
    }
  }, [_c("b", [_vm._v("Comité de crédit du conseil d'administration (CCCA)")])])])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "tab-content py-3",
    attrs: {
      id: "myTabContent"
    }
  }, [_c("div", {
    staticClass: "tab-pane fade",
    "class": {
      "active show": _vm.isActive("ca")
    },
    attrs: {
      id: "ca"
    }
  }, [_vm.voters_list.length > 0 ? _c("div", {
    staticClass: "table-responsive m-1"
  }, [_c("table", {
    staticClass: "table w-100"
  }, [_c("tbody", _vm._l(_vm.voters_list, function (el, index) {
    return _c("tr", {
      key: index
    }, [!["Bw0yd0WZbRemfdbHiuhK", "2YUrhvU1t9Evin4mXK0e", "4JWcXW4o4Ww8Y1GumHF5", "B1mgnsGXqCYvzi0K05LA"].includes(el === null || el === void 0 ? void 0 : el.role_id) ? _c("td", {
      staticClass: "fw-bold"
    }, [_vm._v(_vm._s(el.name))]) : _vm._e(), _vm._v(" "), el.vote_bool == undefined && !["Bw0yd0WZbRemfdbHiuhK", "2YUrhvU1t9Evin4mXK0e", "4JWcXW4o4Ww8Y1GumHF5", "B1mgnsGXqCYvzi0K05LA"].includes(el === null || el === void 0 ? void 0 : el.role_id) ? _c("td", {
      staticClass: "text-info"
    }, [_vm._v("Avis en attente\n                                        de réception ...")]) : _vm._e(), _vm._v(" "), el.vote_bool == 0 && !["Bw0yd0WZbRemfdbHiuhK", "2YUrhvU1t9Evin4mXK0e", "4JWcXW4o4Ww8Y1GumHF5", "B1mgnsGXqCYvzi0K05LA"].includes(el === null || el === void 0 ? void 0 : el.role_id) ? _c("td", {
      staticClass: "text-success",
      attrs: {
        title: el.vote_lib
      }
    }, [_c("check-circle-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "1.5x"
      }
    }), _vm._v(" " + _vm._s(el.vote_lib))], 1) : _vm._e(), _vm._v(" "), el.vote_bool == 1 && !["Bw0yd0WZbRemfdbHiuhK", "2YUrhvU1t9Evin4mXK0e", "4JWcXW4o4Ww8Y1GumHF5", "B1mgnsGXqCYvzi0K05LA"].includes(el === null || el === void 0 ? void 0 : el.role_id) ? _c("td", {
      staticClass: "text-danger",
      attrs: {
        title: el.vote_lib
      }
    }, [_c("x-circle-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "1.5x"
      }
    }), _vm._v(" " + _vm._s(el.vote_lib))], 1) : _vm._e()]);
  }), 0)])]) : _c("div", [_c("h5", {
    staticClass: "text-center"
  }, [_vm._v(" " + _vm._s((_vm$data_voting = _vm.data_voting) === null || _vm$data_voting === void 0 ? void 0 : _vm$data_voting.msg) + " ")])]), _vm._v(" "), _c("div", [_c("h6", {
    staticClass: "text-right"
  }, [_vm._v("Mode de scrutin : ( " + _vm._s((_vm$data_voting2 = _vm.data_voting) === null || _vm$data_voting2 === void 0 ? void 0 : _vm$data_voting2.voting_paragdims_selected) + " ) ")])])]), _vm._v(" "), ["2YUrhvU1t9Evin4mXK0e"].includes((_this$authcheckUsr2 = this.authcheckUsr) === null || _this$authcheckUsr2 === void 0 ? void 0 : _this$authcheckUsr2.role_uuid) ? _c("div", {
    staticClass: "tab-pane fade",
    "class": {
      "active show": _vm.isActive("ccca")
    },
    attrs: {
      id: "ccca"
    }
  }, [((_vm$ccca_voter_list = _vm.ccca_voter_list) === null || _vm$ccca_voter_list === void 0 ? void 0 : _vm$ccca_voter_list.length) > 0 ? _c("div", {
    staticClass: "table-responsive m-1"
  }, [_c("table", {
    staticClass: "table w-100"
  }, [_c("tbody", _vm._l(_vm.ccca_voter_list, function (el, i) {
    return _c("tr", {
      key: i
    }, [_c("td", {
      staticClass: "fw-bold"
    }, [_vm._v(_vm._s(el.user_name))]), _vm._v(" "), el.user_decision_bool == undefined ? _c("td", {
      staticClass: "text-info"
    }, [_vm._v("Avis en attente\n                                        de réception ...")]) : _vm._e(), _vm._v(" "), el.user_decision_bool == 0 ? _c("td", {
      staticClass: "text-success",
      attrs: {
        title: el.user_decision_lib
      }
    }, [_c("check-circle-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "1.5x"
      }
    }), _vm._v(" " + _vm._s(el.user_decision_lib))], 1) : _vm._e(), _vm._v(" "), el.user_decision_bool == 1 ? _c("td", {
      staticClass: "text-danger",
      attrs: {
        title: el.user_decision_lib
      }
    }, [_c("x-circle-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "1.5x"
      }
    }), _vm._v(" " + _vm._s(el.user_decision_lib))], 1) : _vm._e()]);
  }), 0)])]) : _c("div", [_c("h5", {
    staticClass: "text-center"
  }, [_vm._v(" Aucun  vote disponible ")])])]) : _vm._e()])]), _vm._v(" "), (_vm$data_voting3 = _vm.data_voting) !== null && _vm$data_voting3 !== void 0 && _vm$data_voting3.code ? _c("div", [_c("h5", {
    staticClass: "text-center"
  }, [_vm._v(_vm._s((_vm$data_voting4 = _vm.data_voting) === null || _vm$data_voting4 === void 0 ? void 0 : _vm$data_voting4.msg))]), _vm._v(" "), !["NOT_ALL_MEMBERS_VOTED", "HEAD_NOT_EXISTS", "VOTE_PENDING"].includes((_vm$data_voting5 = _vm.data_voting) === null || _vm$data_voting5 === void 0 ? void 0 : _vm$data_voting5.code) ? _c("h6", {
    staticClass: "text-center mt-4"
  }, [_vm._v("\n                Approuvez vous cette synthèse du vote ?\n            ")]) : _vm._e(), _vm._v(" "), _c("div", {
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
  }, [_vm._m(1), _vm._v(" Prise en compte de la décision en cours ...\n                    ")]) : _c("div", [_vm.displayCanApp === false ? _c("div", [["AVIS FAVORABLE"].includes(_vm.decision) ? _c("div", [_c("button", {
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
  })]), _vm._v(" "), _vm._m(5)]) : _vm._e(), _vm._v(" "), ["HEAD_NOT_EXISTS"].includes(_vm.decision) ? _c("div", [_c("div", {
    staticClass: "text-center m-1"
  }, [_c("b", [_vm._v(" " + _vm._s((_vm$data_voting6 = _vm.data_voting) === null || _vm$data_voting6 === void 0 ? void 0 : _vm$data_voting6.msg) + " ")])])]) : _vm._e(), _vm._v(" "), ["VOTE_PENDING"].includes(_vm.decision) ? _c("div", [_c("div", {
    staticClass: "text-center m-1"
  }, [_c("b", [_vm._v(" " + _vm._s((_vm$data_voting7 = _vm.data_voting) === null || _vm$data_voting7 === void 0 ? void 0 : _vm$data_voting7.msg) + " ")])])]) : _vm._e()])])])])]) : _vm._e()])]);
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

/***/ "./resources/js/components/shared/RecapCorpVote.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/shared/RecapCorpVote.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RecapCorpVote_vue_vue_type_template_id_1449f394__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RecapCorpVote.vue?vue&type=template&id=1449f394 */ "./resources/js/components/shared/RecapCorpVote.vue?vue&type=template&id=1449f394");
/* harmony import */ var _RecapCorpVote_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RecapCorpVote.vue?vue&type=script&lang=js */ "./resources/js/components/shared/RecapCorpVote.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RecapCorpVote_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _RecapCorpVote_vue_vue_type_template_id_1449f394__WEBPACK_IMPORTED_MODULE_0__.render,
  _RecapCorpVote_vue_vue_type_template_id_1449f394__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/shared/RecapCorpVote.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/shared/RecapCorpVote.vue?vue&type=script&lang=js":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/shared/RecapCorpVote.vue?vue&type=script&lang=js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RecapCorpVote_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RecapCorpVote.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/RecapCorpVote.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RecapCorpVote_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shared/RecapCorpVote.vue?vue&type=template&id=1449f394":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/shared/RecapCorpVote.vue?vue&type=template&id=1449f394 ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RecapCorpVote_vue_vue_type_template_id_1449f394__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RecapCorpVote_vue_vue_type_template_id_1449f394__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RecapCorpVote_vue_vue_type_template_id_1449f394__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RecapCorpVote.vue?vue&type=template&id=1449f394 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/RecapCorpVote.vue?vue&type=template&id=1449f394");


/***/ })

}]);