"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_reportex_statistics_Top20_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/Top20.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/Top20.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Top20",
  data: function data() {
    return {
      loading: false,
      prod_data: [],
      prod_headers: [],
      count_data: [],
      count_headers: [],
      source_analyse: null,
      type_analyse: 'all',
      period: 'ytd',
      sources: [{
        label: "Top 20 cafs",
        group_by: 'caf',
        order: "descending",
        limit: true
      }, {
        label: "Flop 20 cafs",
        group_by: 'caf',
        order: 'ascending',
        limit: true
      }, {
        label: "Classement Agence",
        group_by: 'agence',
        order: "descending",
        limit: false
      }, {
        label: "Classement type de crédit",
        group_by: 'type_credit',
        order: "descending",
        limit: false
      }, {
        label: "Classement delais de traitement",
        group_by: 'delais',
        order: "descending",
        limit: false
      }, {
        label: "Classement global caf",
        group_by: 'caf',
        order: "descending",
        limit: false
      }],
      types: [{
        label: "Global",
        value: "all"
      }, {
        label: "Restructuré",
        value: "restructured"
      }, {
        label: "Non Restructuré",
        value: "non-restructured"
      }],
      ytd: false,
      periods: [{
        label: "Year To Date",
        value: 'ytd'
      }, {
        label: "Month To Date",
        value: 'mtd'
      }, {
        label: "Date Personalisée",
        value: 'custom'
      }],
      start_date: '',
      end_date: ''
    };
  },
  created: function created() {
    this.source_analyse = this.sources[0];
    var now = new Date();
    var year = now.getFullYear();
    var period = now.getMonth() + 1 > 9 ? "".concat(year, "-").concat(now.getMonth() + 1) : "".concat(year, "-0").concat(now.getMonth() + 1);
    this.start_date = "".concat(year, "-01");
    this.end_date = period;
  },
  mounted: function mounted() {
    var _this = this;
    this.getData();
    EventBus.$on('reportex-update-stats', /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _this.getData();
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    })));
  },
  computed: {
    user: function user() {
      return this.$store.state.reportex.user;
    },
    filiale: function filiale() {
      return this.$store.state.reportex.filiale;
    }
  },
  methods: {
    getData: function getData() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _this2$source_analyse, _this2$source_analyse2, _this2$source_analyse3;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _this2.loading = true;
              _this2.$axios.post(_this2.reportex_link() + "reportex/api/v1/top20/", {
                filiale: _this2.filiale,
                group_by: (_this2$source_analyse = _this2.source_analyse) === null || _this2$source_analyse === void 0 ? void 0 : _this2$source_analyse.group_by,
                order: (_this2$source_analyse2 = _this2.source_analyse) === null || _this2$source_analyse2 === void 0 ? void 0 : _this2$source_analyse2.order,
                period: _this2.period,
                type_deal: _this2.type_analyse,
                start_date: _this2.start_date,
                end_date: _this2.end_date,
                limit: (_this2$source_analyse3 = _this2.source_analyse) === null || _this2$source_analyse3 === void 0 ? void 0 : _this2$source_analyse3.limit
              }).then(function (res) {
                var _this2$prod_data, _this2$count_data;
                var total_prod = res.data.prod.map(function (el) {
                  return el.sum;
                }).reduce(function (sum, curr) {
                  return sum + curr;
                }, 0);
                _this2.prod_data = res.data.prod.map(function (el) {
                  el.percent = (el.sum / (total_prod || 1) * 100).toFixed(2);
                  return el;
                });
                if ((_this2$prod_data = _this2.prod_data) !== null && _this2$prod_data !== void 0 && _this2$prod_data.length) {
                  var keys = Object.keys(_this2.prod_data[0]);
                  _this2.prod_headers = keys.filter(function (el) {
                    return el != 'percent';
                  });
                }

                // same calcul for counts
                var total_count = res.data.count.map(function (el) {
                  return el.count;
                }).reduce(function (sum, curr) {
                  return sum + curr;
                }, 0);
                _this2.count_data = res.data.count.map(function (el) {
                  el.percent = (el.count / (total_count || 1) * 100).toFixed(2);
                  return el;
                });
                if ((_this2$count_data = _this2.count_data) !== null && _this2$count_data !== void 0 && _this2$count_data.length) {
                  var _keys = Object.keys(_this2.count_data[0]);
                  _this2.count_headers = _keys.filter(function (el) {
                    return el != 'percent';
                  });
                }
              })["finally"](function () {
                return _this2.loading = false;
              });
            case 2:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    }
  },
  watch: {
    filiale: function filiale(val) {
      if (val) this.getData();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/Top20.vue?vue&type=template&id=2d328198&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/Top20.vue?vue&type=template&id=2d328198&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$count_data, _vm$count_data2, _vm$count_data3;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "container-fluid",
    staticStyle: {
      position: "relative !important"
    }
  }, [_c("div", {
    staticClass: "row pt-2 gap-2 bg-white"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "px-0 col"
  }, [_c("label", {
    staticClass: "fw-bold",
    attrs: {
      "for": "data-source"
    }
  }, [_vm._v(" Type de classement")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.source_analyse,
      expression: "source_analyse"
    }],
    staticClass: "form-select",
    attrs: {
      id: "data-source"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.source_analyse = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, _vm.getData]
    }
  }, _vm._l(_vm.sources, function (source) {
    return _c("option", {
      key: source.value,
      attrs: {
        label: source.label
      },
      domProps: {
        value: source
      }
    });
  }), 0)]), _vm._v(" "), _c("div", {
    staticClass: "px-0 col"
  }, [_c("label", {
    staticClass: "fw-bold",
    attrs: {
      "for": "data-type"
    }
  }, [_vm._v(" Statut")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.type_analyse,
      expression: "type_analyse"
    }],
    staticClass: "form-select",
    attrs: {
      id: "data-type"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.type_analyse = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, _vm.getData]
    }
  }, _vm._l(_vm.types, function (typ) {
    return _c("option", {
      key: typ.value,
      attrs: {
        label: typ.label
      },
      domProps: {
        value: typ.value
      }
    });
  }), 0)]), _vm._v(" "), _c("div", {
    staticClass: "px-0 col"
  }, [_c("label", {
    staticClass: "fw-bold",
    attrs: {
      "for": "period"
    }
  }, [_vm._v(" Période")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.period,
      expression: "period"
    }],
    staticClass: "form-select",
    attrs: {
      id: "period"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.period = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, _vm.getData]
    }
  }, _vm._l(_vm.periods, function (period) {
    return _c("option", {
      key: period.value,
      attrs: {
        label: period.label
      },
      domProps: {
        value: period.value
      }
    });
  }), 0)]), _vm._v(" "), _vm.period == "custom" ? _c("div", {
    staticClass: "px-0 col"
  }, [_c("label", {
    attrs: {
      "for": "debut"
    }
  }, [_vm._v(" Début ")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.start_date,
      expression: "start_date"
    }],
    staticClass: "form-control",
    attrs: {
      min: "2023-02",
      type: "month",
      placeholder: "choisir un mois",
      id: "debut"
    },
    domProps: {
      value: _vm.start_date
    },
    on: {
      change: _vm.getData,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.start_date = $event.target.value;
      }
    }
  })]) : _vm._e(), _vm._v(" "), _vm.period == "custom" ? _c("div", {
    staticClass: "px-0 col"
  }, [_c("label", {
    attrs: {
      "for": "fin"
    }
  }, [_vm._v(" Fin ")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.end_date,
      expression: "end_date"
    }],
    staticClass: "form-control",
    attrs: {
      min: "2023-02",
      type: "month",
      placeholder: "choisir un mois",
      id: "fin"
    },
    domProps: {
      value: _vm.end_date
    },
    on: {
      change: _vm.getData,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.end_date = $event.target.value;
      }
    }
  })]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "row py-2",
    "class": (_vm$count_data = _vm.count_data) !== null && _vm$count_data !== void 0 && _vm$count_data.length ? "justify-content-between" : "justify-content-around"
  }, [_c("div", {
    "class": (_vm$count_data2 = _vm.count_data) !== null && _vm$count_data2 !== void 0 && _vm$count_data2.length ? "col col-lg-6 px-0" : "col px-0"
  }, [_c("stat-table", {
    attrs: {
      title: "",
      spacer: false,
      useDownload: false,
      loading: _vm.loading,
      headers: _vm.prod_headers,
      items: _vm.prod_data,
      perPage: 10
    },
    scopedSlots: _vm._u([{
      key: "header",
      fn: function fn() {
        var _vm$source_analyse, _vm$source_analyse2;
        return [_c("h4", {
          staticClass: "text-uppercase headers py-3 text-center"
        }, [_vm._v(" " + _vm._s((_vm$source_analyse = _vm.source_analyse) === null || _vm$source_analyse === void 0 ? void 0 : _vm$source_analyse.label) + " "), ((_vm$source_analyse2 = _vm.source_analyse) === null || _vm$source_analyse2 === void 0 ? void 0 : _vm$source_analyse2.group_by) != "delais" ? _c("span", [_vm._v(" ( Production )")]) : _vm._e()])];
      },
      proxy: true
    }, {
      key: "tableHeader",
      fn: function fn() {
        return [_c("tr", {
          staticClass: "cofina text-normal border-danger"
        }, _vm._l(_vm.prod_headers, function (header, i) {
          return _c("th", {
            key: header,
            staticClass: "text-capitalize",
            "class": {
              "text-end": i > 0,
              "text-start w-auto": i == 0
            },
            attrs: {
              role: "button"
            },
            on: {
              click: function click($event) {
                _vm.$emit("sort", header);
                _vm.sortKey = header;
              }
            }
          }, [header == "sum" ? _c("span", [_vm._v("\n                                Production\n                            ")]) : header == "count" ? _c("span", [_vm._v("\n                                Nbre dossiers\n                            ")]) : _c("span", [_vm._v("\n                                " + _vm._s(header.split("_").join(" ")) + "\n                            ")])]);
        }), 0)];
      },
      proxy: true
    }, {
      key: "default",
      fn: function fn(_ref) {
        var items = _ref.items;
        return _vm._l(items, function (item, index) {
          return _c("tr", {
            key: index,
            staticClass: "cursor-pointer",
            attrs: {
              role: "button"
            },
            on: {
              click: function click($event) {
                return _vm.$emit("select", item);
              }
            }
          }, _vm._l(_vm.prod_headers, function (h, ind) {
            var _item$h;
            return _c("td", {
              key: h,
              staticClass: "col text-bold",
              "class": {
                "text-end": ind > 0,
                "text-start": ind == 0,
                montant: h == "sum"
              },
              staticStyle: {
                "min-width": "100px"
              },
              style: "--width: ".concat(item.percent, "%"),
              attrs: {
                title: item === null || item === void 0 ? void 0 : item[h],
                "data-percent": "".concat(item.percent, "%")
              }
            }, [["sum", "count"].includes(h) ? [_vm._v("\n                                " + _vm._s(_vm._f("formatNumber")(item === null || item === void 0 ? void 0 : item[h])) + "\n                            ")] : h == "rang" ? [_c("div", {
              staticClass: "d-flex",
              "class": [1, 1.5, 2, 2.5, 3, 3.5].includes(item[h]) ? "justify-content-between" : "justify-content-end"
            }, [_c("img", {
              directives: [{
                name: "show",
                rawName: "v-show",
                value: [1, 1.5].includes(item[h]),
                expression: "[1, 1.5].includes(item[h])"
              }],
              attrs: {
                src: "/images/gold.png",
                width: "30px",
                height: "30px",
                alt: "gold medal"
              }
            }), _vm._v(" "), _c("img", {
              directives: [{
                name: "show",
                rawName: "v-show",
                value: [2, 2.5].includes(item[h]),
                expression: "[2, 2.5].includes(item[h])"
              }],
              attrs: {
                src: "/images/silver.png",
                width: "30px",
                height: "30px",
                alt: "silver medal"
              }
            }), _vm._v(" "), _c("img", {
              directives: [{
                name: "show",
                rawName: "v-show",
                value: [3, 3.5].includes(item[h]),
                expression: "[3, 3.5].includes(item[h])"
              }],
              attrs: {
                src: "/images/bronze.png",
                width: "30px",
                height: "30px",
                alt: "bronze medal"
              }
            }), _vm._v("\n\n                                    " + _vm._s(parseInt(item === null || item === void 0 ? void 0 : item[h])) + " " + _vm._s([1.5, 1].includes(item === null || item === void 0 ? void 0 : item[h]) ? "er" : "ème") + "\n                                ")])] : h.includes("percent") || h.includes("pourcent") ? [_vm._v("\n                                " + _vm._s(_vm._f("formatNumber")(item === null || item === void 0 || (_item$h = item[h]) === null || _item$h === void 0 ? void 0 : _item$h.toFixed(2))) + " %\n                            ")] : [_c("div", [_vm._v("\n\n                                    " + _vm._s(_vm._f("textTruncate")(item === null || item === void 0 ? void 0 : item[h], 20)) + "\n                                ")])]], 2);
          }), 0);
        });
      }
    }])
  })], 1), _vm._v(" "), (_vm$count_data3 = _vm.count_data) !== null && _vm$count_data3 !== void 0 && _vm$count_data3.length ? _c("div", {
    staticClass: "col col-lg-6 px-0"
  }, [_c("stat-table", {
    attrs: {
      spacer: false,
      useDownload: false,
      loading: _vm.loading,
      headers: _vm.count_headers,
      items: _vm.count_data,
      title: "",
      perPage: 10
    },
    scopedSlots: _vm._u([{
      key: "header",
      fn: function fn() {
        var _vm$source_analyse3;
        return [_c("h4", {
          staticClass: "text-uppercase headers py-3 text-center"
        }, [_vm._v(" " + _vm._s((_vm$source_analyse3 = _vm.source_analyse) === null || _vm$source_analyse3 === void 0 ? void 0 : _vm$source_analyse3.label) + " ( Nombre de\n                        dossiers ) ")])];
      },
      proxy: true
    }, {
      key: "tableHeader",
      fn: function fn() {
        return [_c("tr", {
          staticClass: "cofina text-normal border-danger"
        }, _vm._l(_vm.count_headers, function (header, i) {
          return _c("th", {
            key: header,
            staticClass: "text-capitalize",
            "class": {
              "text-end": i > 0,
              "text-start": i == 0
            },
            attrs: {
              role: "button"
            },
            on: {
              click: function click($event) {
                _vm.$emit("sort", header);
                _vm.sortKey = header;
              }
            }
          }, [header == "sum" ? _c("span", [_vm._v("\n                                Production\n                            ")]) : header == "count" ? _c("span", [_vm._v("\n                                Nbre dossiers\n                            ")]) : _c("span", [_vm._v("\n                                " + _vm._s(header.split("_").join(" ")) + "\n                                \n                            ")])]);
        }), 0)];
      },
      proxy: true
    }, {
      key: "default",
      fn: function fn(_ref2) {
        var items = _ref2.items;
        return _vm._l(items, function (item, index) {
          return _c("tr", {
            key: index,
            staticClass: "cursor-pointer",
            attrs: {
              role: "button"
            },
            on: {
              click: function click($event) {
                return _vm.$emit("select", item);
              }
            }
          }, _vm._l(_vm.count_headers, function (h, ind) {
            return _c("td", {
              key: h,
              staticClass: "col text-bold",
              "class": {
                "text-end": ind > 0,
                "text-start": ind == 0,
                montant2: h == "count"
              },
              staticStyle: {
                "min-width": "100px"
              },
              style: "--width: ".concat(item.percent, "%"),
              attrs: {
                title: item === null || item === void 0 ? void 0 : item[h],
                "data-percent": "".concat(item.percent, "%")
              }
            }, [["sum", "count"].includes(h) ? [_vm._v("\n                                " + _vm._s(_vm._f("formatNumber")(item === null || item === void 0 ? void 0 : item[h])) + "\n                            ")] : h == "rang" ? [_c("div", {
              staticClass: "d-flex",
              "class": [1, 1.5, 2, 2.5, 3, 3.5].includes(item[h]) ? "justify-content-between" : "justify-content-end"
            }, [_c("img", {
              directives: [{
                name: "show",
                rawName: "v-show",
                value: [1, 1.5].includes(item[h]),
                expression: "[1, 1.5].includes(item[h])"
              }],
              attrs: {
                src: "/images/gold.png",
                width: "30px",
                height: "30px",
                alt: "gold medal"
              }
            }), _vm._v(" "), _c("img", {
              directives: [{
                name: "show",
                rawName: "v-show",
                value: [2, 2.5].includes(item[h]),
                expression: "[2, 2.5].includes(item[h])"
              }],
              attrs: {
                src: "/images/silver.png",
                width: "30px",
                height: "30px",
                alt: "silver medal"
              }
            }), _vm._v(" "), _c("img", {
              directives: [{
                name: "show",
                rawName: "v-show",
                value: [3, 3.5].includes(item[h]),
                expression: "[3, 3.5].includes(item[h])"
              }],
              attrs: {
                src: "/images/bronze.png",
                width: "30px",
                height: "30px",
                alt: "bronze medal"
              }
            }), _vm._v("\n\n                                    " + _vm._s(parseInt(item === null || item === void 0 ? void 0 : item[h])) + " " + _vm._s([1.5, 1].includes(item === null || item === void 0 ? void 0 : item[h]) ? "er" : "ème") + "\n\n                                ")])] : [_c("span", {}, [_vm._v("\n\n                                    " + _vm._s(_vm._f("textTruncate")(item === null || item === void 0 ? void 0 : item[h], 22)) + "\n                                ")])]], 2);
          }), 0);
        });
      }
    }], null, false, 1587662615)
  })], 1) : _vm._e()])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "px-0 col-12"
  }, [_c("h5", [_vm._v("Filtrer par")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/Top20.vue?vue&type=style&index=0&id=2d328198&scoped=true&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/Top20.vue?vue&type=style&index=0&id=2d328198&scoped=true&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.montant[data-v-2d328198],\r\n.montant2[data-v-2d328198] {\r\n    position: relative;\r\n    z-index: 1;\r\n    /* font-weight: bold; */\r\n    font-family: monospace !important;\r\n    max-width: 150px !important;\n}\ntd[data-v-2d328198] {\r\n    font-family: 'Courier New', Courier, monospace;\r\n    max-width: 150px !important;\n}\n.montant[data-v-2d328198]::before,\r\n.montant2[data-v-2d328198]::before {\r\n    width: var(--width);\r\n    height: 100%;\r\n    background: linear-gradient(to left, rgb(223, 136, 142), rgb(227, 45, 45));\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    font-size: small;\r\n    opacity: .7;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    color: black;\r\n    z-index: 0 !important;\r\n    transition: width .3s ease-in;\r\n    max-width: 100%;\n}\n.montant[data-v-2d328198]::before {\r\n    background: linear-gradient(to right, rgba(147, 212, 238), rgba(147, 212, 238));\r\n    border: 1px solid rgb(147, 212, 238);\n}\n.montant2[data-v-2d328198]::before {\r\n    background: linear-gradient(to right, rgba(238, 166, 94), rgba(238, 166, 94));\r\n    border: 1px solid rgba(238, 166, 94);\n}\n.cofina[data-v-2d328198] {\r\n    background-color: #dc0030;\r\n    color: white;\r\n    font-weight: normal !important;\n}\n.headers[data-v-2d328198] {\r\n    background-color: #26404c;\r\n    color: white;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/Top20.vue?vue&type=style&index=0&id=2d328198&scoped=true&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/Top20.vue?vue&type=style&index=0&id=2d328198&scoped=true&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Top20_vue_vue_type_style_index_0_id_2d328198_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Top20.vue?vue&type=style&index=0&id=2d328198&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/Top20.vue?vue&type=style&index=0&id=2d328198&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Top20_vue_vue_type_style_index_0_id_2d328198_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Top20_vue_vue_type_style_index_0_id_2d328198_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/reportex/statistics/Top20.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/reportex/statistics/Top20.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Top20_vue_vue_type_template_id_2d328198_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Top20.vue?vue&type=template&id=2d328198&scoped=true */ "./resources/js/components/reportex/statistics/Top20.vue?vue&type=template&id=2d328198&scoped=true");
/* harmony import */ var _Top20_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Top20.vue?vue&type=script&lang=js */ "./resources/js/components/reportex/statistics/Top20.vue?vue&type=script&lang=js");
/* harmony import */ var _Top20_vue_vue_type_style_index_0_id_2d328198_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Top20.vue?vue&type=style&index=0&id=2d328198&scoped=true&lang=css */ "./resources/js/components/reportex/statistics/Top20.vue?vue&type=style&index=0&id=2d328198&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Top20_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Top20_vue_vue_type_template_id_2d328198_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _Top20_vue_vue_type_template_id_2d328198_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2d328198",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/reportex/statistics/Top20.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/reportex/statistics/Top20.vue?vue&type=script&lang=js":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/reportex/statistics/Top20.vue?vue&type=script&lang=js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Top20_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Top20.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/Top20.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Top20_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/reportex/statistics/Top20.vue?vue&type=style&index=0&id=2d328198&scoped=true&lang=css":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/reportex/statistics/Top20.vue?vue&type=style&index=0&id=2d328198&scoped=true&lang=css ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Top20_vue_vue_type_style_index_0_id_2d328198_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Top20.vue?vue&type=style&index=0&id=2d328198&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/Top20.vue?vue&type=style&index=0&id=2d328198&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/reportex/statistics/Top20.vue?vue&type=template&id=2d328198&scoped=true":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/reportex/statistics/Top20.vue?vue&type=template&id=2d328198&scoped=true ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Top20_vue_vue_type_template_id_2d328198_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Top20_vue_vue_type_template_id_2d328198_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Top20_vue_vue_type_template_id_2d328198_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Top20.vue?vue&type=template&id=2d328198&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/statistics/Top20.vue?vue&type=template&id=2d328198&scoped=true");


/***/ })

}]);