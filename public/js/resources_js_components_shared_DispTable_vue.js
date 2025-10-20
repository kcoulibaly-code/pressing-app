"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_shared_DispTable_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/DispTable.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/DispTable.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/credit.service */ "./resources/js/services/credit.service.js");
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



var DEFAULT_FORM_ASSIGN = {
  cred_pub_key: "",
  user: "",
  new_user: "",
  need_accord: false,
  tobedone: "ASSIGNATION",
  dispatch_id: "",
  num_phone_caf: null
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "DispTable",
  components: {},
  props: {
    dispatchingRoles: Array,
    role_uuid: {
      type: String,
      "default": ""
    },
    categorie_client: {
      type: String,
      "default": ""
    }
  },
  data: function data() {
    return {
      analysts: [],
      loadingAnalyst: true,
      page: 0,
      nbDoss: 10,
      userNbDoss: "",
      loadmore: false,
      loadmoreDoss: "",
      labelAssign: "",
      isLoading: false,
      searchAnalyst: "",
      onFocused: "l",
      formAssing: JSON.parse(JSON.stringify(DEFAULT_FORM_ASSIGN)),
      authcheck: null,
      authcheckUsr: null,
      authcheckStatus: null,
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_1__["default"].host,
      uniqueIndex: this.generateUniqueIndex(),
      max_execution: 30
    };
  },
  created: function created() {
    var _this = this;
    EventBus.$on('disp-table-block-assignation', function (data) {
      _this.isLoading = data;
    });
    EventBus.$on('reload-loadusers', function () {
      _this.loadUsers();
    });
    EventBus.$on('disp-table-get-user', /*#__PURE__*/function () {
      var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(data) {
        var _data$cred_pub_key;
        var result;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _this.formAssing.cred_pub_key = (_data$cred_pub_key = data === null || data === void 0 ? void 0 : data.cred_pub_key) !== null && _data$cred_pub_key !== void 0 ? _data$cred_pub_key : null;
              _context.next = 3;
              return _this.getAnalyst();
            case 3:
              result = _context.sent;
              if (!['', null, undefined].includes(result)) {
                EventBus.$emit('disp-table-user', {
                  new_user: result,
                  uniqueIndex: data === null || data === void 0 ? void 0 : data.uniqueIndex
                });
              }
              if ((data === null || data === void 0 ? void 0 : data.uniqueIndex) != _this.uniqueIndex) {
                _this.formAssing.cred_pub_key = "";
              }
            case 6:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    EventBus.$on('disp-table-user', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(data) {
        var _this$formAssing, _this$formAssing2, _data$new_user;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if ((data === null || data === void 0 ? void 0 : data.uniqueIndex) == _this.uniqueIndex) {
                if (!['', null, undefined].includes((_this$formAssing = _this.formAssing) === null || _this$formAssing === void 0 ? void 0 : _this$formAssing.cred_pub_key) && !['', null, undefined].includes((_this$formAssing2 = _this.formAssing) === null || _this$formAssing2 === void 0 ? void 0 : _this$formAssing2.user)) {
                  _this.formAssing.new_user = (_data$new_user = data === null || data === void 0 ? void 0 : data.new_user) !== null && _data$new_user !== void 0 ? _data$new_user : null;
                  if (_this.formAssing.new_user != null) {
                    _this.assignation();
                  }
                }
              }
            case 1:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());
  },
  mounted: function mounted() {
    var _this2 = this;
    this.loadUsers();
    this.labelAssign = "Analyste";
    if (this.role_uuid == "cv4x451U5dktJAZLxaFo") {
      this.labelAssign = "Dispatcher";
    }
    if (this.authcheckUsr == null) {
      _services_auth_service__WEBPACK_IMPORTED_MODULE_0__["default"].loadUserData().then(function (res) {
        _this2.authcheck = true;
        _this2.authcheckUsr = res.data;
        _this2.authcheckStatus = res.status;
      })["catch"](function (err) {
        console.log(err);
      });
    }
  },
  computed: {
    allAnalysts: function allAnalysts() {
      var _this3 = this;
      return this.analysts.filter(function (wine) {
        return Object.values(wine).some(function (val) {
          return String(val).toLowerCase().includes(_this3.searchAnalyst.toLowerCase());
        });
      });
    },
    totalAssign: function totalAssign() {
      var total = 0;
      this.analysts.forEach(function (element) {
        var _element$dossier;
        total += ((_element$dossier = element.dossier) === null || _element$dossier === void 0 ? void 0 : _element$dossier.length) || 0;
      });
      return total;
    }
  },
  methods: {
    textTruncate: function textTruncate(str, length, ending) {
      if (typeof str === "string") {
        if (length == null) {
          length = 25;
        }
        if (ending == null) {
          ending = "...";
        }
        if (str.length > length) {
          return str.substring(0, length - ending.length) + ending;
        } else {
          return str;
        }
      }
    },
    status: function status(state) {
      var analyst = this.analysts.length;
      var middle = Number(this.totalAssign / analyst).toFixed(0);
      if (state < middle || middle == 0 && state == 0) {
        return "available";
      } else if (state == middle) {
        return "middle";
      } else if (state > middle) {
        return "unavailable";
      }
    },
    loadUsers: function loadUsers() {
      var _this4 = this;
      this.loadingAnalyst = true;
      var is_disp_polivalent = {
        role_uuid: this.role_uuid,
        categorie_client: this.categorie_client
      };
      _services_credit_service__WEBPACK_IMPORTED_MODULE_2__["default"].loadanalysts({
        page: this.page,
        emails_in_use: this.analysts.map(function (a) {
          return a.email;
        }),
        nbDoss: this.nbDoss,
        nbDossUser: this.userNbDoss,
        is_disp_polivalent: is_disp_polivalent
      }).then(function (res) {
        _this4.analystsData(res);
      })["catch"](function (err) {
        console.log(err);
      });
    },
    analystsData: function analystsData(res) {
      var _this5 = this;
      try {
        this.analysts = [];
        res.data.forEach(function (element) {
          _this5.analysts.push(element);
        });
        this.loadingAnalyst = false;
      } catch (error) {
        console.error(error);
      }
      this.loadmore = false;
      this.loadmoreDoss = "";
    },
    loadMoreUsers: function loadMoreUsers() {
      this.loadmore = true;
      this.page += 10;
      this.loadUsers();
    },
    loadMoreDoss: function loadMoreDoss() {
      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      if (id) {
        this.userNbDoss = {
          id: id,
          paginate: this.nbDoss += 5
        };
        this.loadmoreDoss = id;
      }
      this.loadUsers();
    },
    getAnalyst: function getAnalyst() {
      var _this6 = this;
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          var scope = _this6;
          var resp = _.find(_this6.analysts, function (analyst) {
            var dossiers = analyst.dossier;
            var keyDoss = _.find(dossiers, function (dossier) {
              if (dossier.cred_pub_key === scope.formAssing.cred_pub_key) {
                return true;
              }
            });
            return keyDoss;
          });
          resolve(resp);
        }, 500);
      });
    },
    getUser: function getUser(user) {
      return new Promise(function (resolve, reject) {
        _services_credit_service__WEBPACK_IMPORTED_MODULE_2__["default"].info_user(user).then(function (res) {
          resolve(res.data);
        })["catch"](function (err) {
          console.log(err);
        });
      });
    },
    sendForm: function sendForm() {
      var _this7 = this;
      EventBus.$emit('disp-table-block-assignation', true);
      this.$toasted.show("Assignation en cours ...", {
        duration: 100000,
        action: {
          text: ""
        }
      });
      this.isLoading = true;
      return new Promise(/*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(resolve, rej) {
          var response;
          return _regeneratorRuntime().wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _this7.loadFetcher();
              case 2:
                response = _context3.sent;
                resolve(response);
                _this7.isLoading = false;
                EventBus.$emit('disp-table-block-assignation', false);
              case 6:
              case "end":
                return _context3.stop();
            }
          }, _callee3);
        }));
        return function (_x3, _x4) {
          return _ref3.apply(this, arguments);
        };
      }());
    },
    loadFetcher: function loadFetcher() {
      var _this8 = this;
      return new Promise(function (resolve, reject) {
        _this8.formAssing.dispatch_id = _this8.authcheckUsr.user_id;
        _this8.logo = _this8.authcheckUsr["logo"];
        if (_this8.authcheck === true) {
          var _this8$formAssing, _this8$formAssing3, _finalFormAssing$user, _finalFormAssing$new_;
          if (((_this8$formAssing = _this8.formAssing) === null || _this8$formAssing === void 0 || (_this8$formAssing = _this8$formAssing.user) === null || _this8$formAssing === void 0 ? void 0 : _this8$formAssing.dossier) != undefined) {
            var _this8$formAssing2;
            var dossier_minifies = [];
            (_this8$formAssing2 = _this8.formAssing) === null || _this8$formAssing2 === void 0 || (_this8$formAssing2 = _this8$formAssing2.user) === null || _this8$formAssing2 === void 0 || _this8$formAssing2.dossier.forEach(function (el) {
              dossier_minifies.push(_this8.removeKeyInDossierCredit(el));
            });
            _this8.formAssing.user.dossier = dossier_minifies;
          }
          if (((_this8$formAssing3 = _this8.formAssing) === null || _this8$formAssing3 === void 0 || (_this8$formAssing3 = _this8$formAssing3.new_user) === null || _this8$formAssing3 === void 0 ? void 0 : _this8$formAssing3.dossier) != undefined) {
            var _this8$formAssing4;
            var _dossier_minifies = [];
            (_this8$formAssing4 = _this8.formAssing) === null || _this8$formAssing4 === void 0 || (_this8$formAssing4 = _this8$formAssing4.new_user) === null || _this8$formAssing4 === void 0 || _this8$formAssing4.dossier.forEach(function (el) {
              _dossier_minifies.push(_this8.removeKeyInDossierCredit(el));
            });
            _this8.formAssing.new_user.dossier = _dossier_minifies;
          }
          if (_this8.role == "yYnev325ob1vDkgq") {
            _this8.formAssing.reallocate_doss = true;
          }
          var finalFormAssing = JSON.parse(JSON.stringify(_this8.formAssing));
          finalFormAssing === null || finalFormAssing === void 0 || delete finalFormAssing.dossier;
          finalFormAssing === null || finalFormAssing === void 0 || (_finalFormAssing$user = finalFormAssing.user) === null || _finalFormAssing$user === void 0 || delete _finalFormAssing$user.dossier;
          finalFormAssing === null || finalFormAssing === void 0 || (_finalFormAssing$new_ = finalFormAssing.new_user) === null || _finalFormAssing$new_ === void 0 || delete _finalFormAssing$new_.dossier;
          _this8.formAssing = JSON.parse(JSON.stringify(DEFAULT_FORM_ASSIGN));
          _this8.$axios.post(_this8.ebapisHost + "creditbuilder/api/v1/assignation-reassignation/", {
            assignation: finalFormAssing,
            authUser: _this8.authcheckUsr,
            dispatch_workflow: true
          }).then(function (response) {
            this.isLoading = false;
            this.$toasted.clear();
            resolve(response.data);
          }.bind(_this8))["catch"](function (error) {
            this.isLoading = false;
          }.bind(_this8));
        } else {
          alert("Unauthenticated");
        }
      });
    },
    assignation: function assignation() {
      var _this9 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var _this9$formAssing, _this9$formAssing2, _this9$formAssing3, _this9$formAssing4, _this9$formAssing5, _this9$formAssing6, _this9$formAssing7, _this9$formAssing8;
        var msg, respForm;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _this9.formAssing.tobedone = "";
              msg = "";
              if (((_this9$formAssing = _this9.formAssing) === null || _this9$formAssing === void 0 || (_this9$formAssing = _this9$formAssing.user) === null || _this9$formAssing === void 0 ? void 0 : _this9$formAssing.role_id) == 'cv4x451U5dktJAZLxaFo' && ((_this9$formAssing2 = _this9.formAssing) === null || _this9$formAssing2 === void 0 || (_this9$formAssing2 = _this9$formAssing2.new_user) === null || _this9$formAssing2 === void 0 ? void 0 : _this9$formAssing2.role_id) == 'cv4x451U5dktJAZLxaFo') {
                _this9.formAssing.tobedone = "DISPATCH_ASSIGNATION";
                msg = "Dossier assigné !";
              }
              if (((_this9$formAssing3 = _this9.formAssing) === null || _this9$formAssing3 === void 0 || (_this9$formAssing3 = _this9$formAssing3.user) === null || _this9$formAssing3 === void 0 ? void 0 : _this9$formAssing3.role_id) == 'cv4x451U5dktJAZLxaFo' && ((_this9$formAssing4 = _this9.formAssing) === null || _this9$formAssing4 === void 0 || (_this9$formAssing4 = _this9$formAssing4.new_user) === null || _this9$formAssing4 === void 0 ? void 0 : _this9$formAssing4.role_id) == 'tyJLxuAh6F2DJR6e') {
                _this9.formAssing.tobedone = "ASSIGNATION";
                msg = "Dossier assigné !";
                _this9.formAssing.user = _this9.formAssing.new_user;
                _this9.formAssing.new_user = null;
              }
              if (((_this9$formAssing5 = _this9.formAssing) === null || _this9$formAssing5 === void 0 || (_this9$formAssing5 = _this9$formAssing5.user) === null || _this9$formAssing5 === void 0 ? void 0 : _this9$formAssing5.role_id) == 'tyJLxuAh6F2DJR6e' && ((_this9$formAssing6 = _this9.formAssing) === null || _this9$formAssing6 === void 0 || (_this9$formAssing6 = _this9$formAssing6.new_user) === null || _this9$formAssing6 === void 0 ? void 0 : _this9$formAssing6.role_id) == 'tyJLxuAh6F2DJR6e') {
                _this9.formAssing.tobedone = "RE_ASSIGNATION";
                msg = "Dossier reassigné !";
              }
              if (((_this9$formAssing7 = _this9.formAssing) === null || _this9$formAssing7 === void 0 || (_this9$formAssing7 = _this9$formAssing7.user) === null || _this9$formAssing7 === void 0 ? void 0 : _this9$formAssing7.role_id) == 'tyJLxuAh6F2DJR6e' && ((_this9$formAssing8 = _this9.formAssing) === null || _this9$formAssing8 === void 0 || (_this9$formAssing8 = _this9$formAssing8.new_user) === null || _this9$formAssing8 === void 0 ? void 0 : _this9$formAssing8.role_id) == 'cv4x451U5dktJAZLxaFo') {
                _this9.formAssing.tobedone = "DISPATCH_UN_ASSIGNATION";
                msg = "Assignation annulée !";

                // this.formAssing.user = this.formAssing.new_user;
                // this.formAssing.new_user = null;
              }
              if (!(_this9.formAssing.tobedone == "")) {
                _context4.next = 10;
                break;
              }
              _this9.loadUsers();
              _this9.$toasted.show("Erreur lors de l'opération", {
                duration: 8000
              });
              return _context4.abrupt("return");
            case 10:
              _context4.next = 12;
              return _this9.sendForm();
            case 12:
              respForm = _context4.sent;
              if (respForm.is_success) {
                _this9.$toasted.show(msg);
                EventBus.$emit('reload-loadusers');
              }
            case 14:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    },
    moving: function moving(el) {
      var _this0 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              if (_this0.timer != undefined) {
                clearTimeout(_this0.timer);
              }
              if (el.to.id !== "dossier") {
                if (el.from.id.includes("analyst")) {
                  if (el.from.id !== el.to.id) {
                    _this0.timer = setTimeout(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
                      var _this0$formAssing$new, _this0$formAssing$use;
                      var resultUser, result;
                      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                        while (1) switch (_context5.prev = _context5.next) {
                          case 0:
                            _this0.formAssing.cred_pub_key = el.draggedContext.element.cred_pub_key;
                            _context5.next = 3;
                            return _this0.getUser(el.draggedContext.element.lastUser);
                          case 3:
                            resultUser = _context5.sent;
                            _this0.formAssing.user = resultUser;
                            _context5.next = 7;
                            return _this0.getAnalyst();
                          case 7:
                            result = _context5.sent;
                            if (!(result == undefined)) {
                              _context5.next = 11;
                              break;
                            }
                            EventBus.$emit('disp-table-get-user', {
                              cred_pub_key: el.draggedContext.element.cred_pub_key,
                              uniqueIndex: _this0.uniqueIndex
                            });
                            return _context5.abrupt("return");
                          case 11:
                            _this0.formAssing.new_user = result;
                            if (!(((_this0$formAssing$new = _this0.formAssing.new_user) === null || _this0$formAssing$new === void 0 ? void 0 : _this0$formAssing$new.id) == ((_this0$formAssing$use = _this0.formAssing.user) === null || _this0$formAssing$use === void 0 ? void 0 : _this0$formAssing$use.id))) {
                              _context5.next = 19;
                              break;
                            }
                            if (!(_this0.max_execution > 0)) {
                              _context5.next = 17;
                              break;
                            }
                            _this0.max_execution--;
                            _this0.moving(el);
                            return _context5.abrupt("return");
                          case 17:
                            _this0.loadUsers();
                            return _context5.abrupt("return");
                          case 19:
                            _this0.assignation();
                          case 20:
                          case "end":
                            return _context5.stop();
                        }
                      }, _callee5);
                    })), 2000);
                  }
                }
              }
            case 2:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }))();
    },
    removeKeyInDossierCredit: function removeKeyInDossierCredit(dossier) {
      var doss = {};
      var accept_cred_pub_tb_keys = ["cred_pub_tb_00", "cred_pub_tb_10001", "cred_pub_tb_30001", "cred_pub_tb_60001", "cred_pub_tb_70001", "cred_pub_tb_80001", "cred_pub_tb_90001", "cred_pub_tb_100001", "cred_pub_tb_110001", "cred_pub_tb_120001", "cred_pub_tb_130001", "cred_pub_tb_140001", "cred_pub_tb_150001", "cred_pub_tb_160001"];
      var keys_to_remove_explicitely = ["rentacred", "tableau_ponderation", "recommandations", "all_doss_to_recall"];
      for (var _i = 0, _Object$entries = Object.entries(dossier); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          key = _Object$entries$_i[0],
          value = _Object$entries$_i[1];
        if (accept_cred_pub_tb_keys.includes(key)) {
          doss[key] = value;
        } else {
          if (key.indexOf('cred_pub_tb_') == -1) {
            doss[key] = value;
          }
        }
      }
      for (var i = 0; i < keys_to_remove_explicitely.length; i++) {
        var _key = keys_to_remove_explicitely[i];
        if (_key in doss) {
          delete doss[_key];
        }
      }
      return doss;
    },
    openDoss: function openDoss(cred_pub_key) {
      this.$router.push("/creation/".concat(cred_pub_key));
    },
    getDenomination: function getDenomination(dos) {
      var denomination_client = "";
      var tbArray = this.determineCredPubTables(dos === null || dos === void 0 ? void 0 : dos.applied_templ_name);
      if (this.entityType.toUpperCase() == "BANK") {
        if ((dos === null || dos === void 0 ? void 0 : dos.categorie_client) == "Retail") {
          var _tbArray = this.determineCredPubTablesFromDosCred(dos);
          if (!["", null, undefined].includes(_tbArray[0])) {
            var _dos$cred1$denominati, _dos$cred;
            var cred1 = _tbArray[1];
            denomination_client = (_dos$cred1$denominati = dos === null || dos === void 0 || (_dos$cred = dos[cred1]) === null || _dos$cred === void 0 ? void 0 : _dos$cred.denomination_client) !== null && _dos$cred1$denominati !== void 0 ? _dos$cred1$denominati : "";
          }
        } else {
          if (!["", null, undefined].includes(tbArray[0])) {
            var _dos$cred0$denominati, _dos$cred2;
            var cred0 = tbArray[0];
            denomination_client = (_dos$cred0$denominati = dos === null || dos === void 0 || (_dos$cred2 = dos[cred0]) === null || _dos$cred2 === void 0 ? void 0 : _dos$cred2.denomination_client) !== null && _dos$cred0$denominati !== void 0 ? _dos$cred0$denominati : "";
          }
        }
      } else {
        if (!["", null, undefined].includes(tbArray[0])) {
          var _dos$_cred$denominati, _dos$_cred;
          var _cred = tbArray[0];
          denomination_client = (_dos$_cred$denominati = dos === null || dos === void 0 || (_dos$_cred = dos[_cred]) === null || _dos$_cred === void 0 ? void 0 : _dos$_cred.denomination_client) !== null && _dos$_cred$denominati !== void 0 ? _dos$_cred$denominati : "";
        }
      }
      return denomination_client;
    },
    formatFileName: function formatFileName(name) {
      return this.isFileNameTooLong(name) ? this.shortenFileName(name) : name;
    },
    shortenFileName: function shortenFileName(name) {
      return (name === null || name === void 0 ? void 0 : name.substring(0, Math.floor(this.MAX_NAME_LENGTH / 2))) + this.SHORT_NAME_SEPARATOR + (name === null || name === void 0 ? void 0 : name.substring((name === null || name === void 0 ? void 0 : name.length) - 1 - Math.floor(this.MAX_NAME_LENGTH / 2), (name === null || name === void 0 ? void 0 : name.length) - 1));
    },
    isFileNameTooLong: function isFileNameTooLong(name) {
      return (name === null || name === void 0 ? void 0 : name.length) > this.MAX_NAME_LENGTH;
    },
    generateUniqueIndex: function generateUniqueIndex() {
      return Math.floor(10000 + Math.random() * 90000).toString();
    }
  },
  watch: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/DispTable.vue?vue&type=template&id=0d94174d&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/DispTable.vue?vue&type=template&id=0d94174d&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "table-responsive",
    staticStyle: {
      height: "55vh"
    }
  }, [_c("table", {
    staticClass: "table table-bordered"
  }, [_vm.loadingAnalyst == false ? _c("tbody", [_vm._l(_vm.allAnalysts, function (analyst, key) {
    var _analyst$dossier, _analyst$dossier2, _analyst$dossier3, _analyst$dossier4, _analyst$dossier5;
    return _c("tr", {
      key: analyst.name + Math.random()
    }, [_c("td", [_c("div", {
      staticClass: "row p-0 m-0"
    }, [_c("div", {
      staticClass: "col-12 d-flex"
    }, [_c("div", {
      staticClass: "d-flex align-items-center"
    }, [_c("div", {
      staticClass: "text-center p-2",
      staticStyle: {
        "border-radius": "80px",
        width: "53px",
        height: "40px",
        "padding-top": "2px",
        "box-shadow": "0px 0px 5px 0px grey"
      }
    }, [_vm._v("\n                                    " + _vm._s(_vm.textTruncate(analyst.name[0])) + "\n                                ")]), _vm._v(" "), _c("div", {
      staticStyle: {
        width: "100%"
      }
    }, [_c("button", {
      staticClass: "btn m-2 btn btn-block btn-sm",
      staticStyle: {
        background: "#ee6a00",
        color: "white",
        cursor: "pointer"
      },
      on: {
        click: function click($event) {
          return _vm.loadMoreDoss(analyst === null || analyst === void 0 ? void 0 : analyst.id);
        }
      }
    }, [_vm.loadmoreDoss == (analyst === null || analyst === void 0 ? void 0 : analyst.id) ? _c("span", [_c("span", {
      staticClass: "spinner-border spinner-border-sm",
      attrs: {
        role: "status",
        "aria-hidden": "true"
      }
    })]) : _c("span", [_c("i", {
      staticClass: "icofont icofont-refresh"
    })])])])]), _vm._v(" "), _c("div", {}, [_c("div", {
      staticClass: "user-name mx-2 d-inline-block h-25"
    }, [_c("div", {
      staticClass: "relative"
    }, [_c("span", [_vm._v(_vm._s(_vm.labelAssign) + "\n                                            " + _vm._s(key + 1))]), _vm._v(" "), _vm.status((_analyst$dossier = analyst.dossier) === null || _analyst$dossier === void 0 ? void 0 : _analyst$dossier.length) === "available" ? _c("span", {
      staticClass: "bg-success status"
    }) : _vm.status((_analyst$dossier2 = analyst.dossier) === null || _analyst$dossier2 === void 0 ? void 0 : _analyst$dossier2.length) === "middle" ? _c("span", {
      staticClass: "bg-primary status"
    }) : _vm.status((_analyst$dossier3 = analyst.dossier) === null || _analyst$dossier3 === void 0 ? void 0 : _analyst$dossier3.length) === "unavailable" ? _c("span", {
      staticClass: "bg-danger status"
    }) : _vm._e()]), _vm._v(" "), _c("div", [_c("span", {
      staticClass: "time mx-1 h-25 text-nowrap",
      attrs: {
        title: analyst.name
      }
    }, [_vm._v(_vm._s(_vm.textTruncate(analyst.name, 25)) + "\n                                            \n                                            (" + _vm._s(_vm.totalAssign !== 0 ? Number(((analyst === null || analyst === void 0 || (_analyst$dossier4 = analyst.dossier) === null || _analyst$dossier4 === void 0 ? void 0 : _analyst$dossier4.length) || 0) / _vm.totalAssign * 100).toFixed(0) : 0) + " %)\n                                        ")])])])])]), _vm._v(" "), _c("div", {
      staticClass: "col-12 p-2 bg-light rounded"
    }, [((analyst === null || analyst === void 0 || (_analyst$dossier5 = analyst.dossier) === null || _analyst$dossier5 === void 0 ? void 0 : _analyst$dossier5.length) || 0) > 0 ? _c("draggable", {
      staticClass: "row px-2",
      staticStyle: {
        "min-height": "95px"
      },
      style: _vm.isLoading ? {
        cursor: "wait"
      } : {
        cursor: "move"
      },
      attrs: {
        id: "analyst-" + key + "_" + _vm.uniqueIndex,
        list: analyst === null || analyst === void 0 ? void 0 : analyst.dossier,
        move: _vm.moving,
        group: "people",
        options: {
          disabled: _vm.isLoading
        },
        tag: "tbody"
      }
    }, _vm._l(analyst === null || analyst === void 0 ? void 0 : analyst.dossier, function (dos) {
      return _c("div", {
        key: JSON.stringify(dos),
        staticClass: "col-3 px-2 border text-center rounded",
        "class": {
          "my-file": !!dos.doss_central_file_recorder || dos.categorie_client == "Retail",
          dos: !dos.doss_central_file_recorder || dos.categorie_client == "Corporate",
          "border border-3 border-danger": _vm.onFocused == dos
        },
        attrs: {
          title: dos.numero_dossier + " | " + _vm.getDenomination(dos),
          id: "doss_" + (dos === null || dos === void 0 ? void 0 : dos.cred_pub_key)
        },
        on: {
          click: function click($event) {
            return _vm.openDoss(dos === null || dos === void 0 ? void 0 : dos.cred_pub_key);
          }
        }
      }, [_c("span", {
        staticStyle: {
          "font-size": "13px"
        }
      }, [_vm._v("\n                                        " + _vm._s(_vm._f("textTruncate")(dos.numero_dossier, 6, "fromEnd")) + "\n                                        "), _c("br"), _vm._v(" "), _c("span", {
        staticStyle: {
          "font-size": "0.7rem"
        },
        attrs: {
          title: dos.numero_dossier + " | " + _vm.getDenomination(dos)
        }
      }, [_vm._v(_vm._s(_vm._f("textTruncate")(_vm.getDenomination(dos), 15)))])])]);
    }), 0) : _c("draggable", {
      staticClass: "row",
      staticStyle: {
        "min-height": "95px",
        cursor: "move"
      },
      attrs: {
        id: "analyst-" + key + "_" + _vm.uniqueIndex,
        list: analyst === null || analyst === void 0 ? void 0 : analyst.dossier,
        move: _vm.moving,
        group: "people",
        tag: "tbody"
      }
    }, [_c("div", {
      staticClass: "row align-content-center text-center"
    }, [_c("span", {
      staticClass: "text-muted"
    }, [_vm._v("Glissez/Déposez le dossier ici\n                                        ...")])])])], 1)])])]);
  }), _vm._v(" "), _c("tr", {}, [_c("td", {
    staticClass: "text-center fw-bold"
  }, [_c("button", {
    staticClass: "btn m-2 btn btn-block btn-sm",
    staticStyle: {
      background: "#7f8c8d",
      color: "white",
      cursor: "pointer"
    },
    on: {
      click: _vm.loadMoreUsers
    }
  }, [_vm.loadmore ? _c("span", [_c("span", {
    staticClass: "spinner-border spinner-border-sm",
    attrs: {
      role: "status",
      "aria-hidden": "true"
    }
  }), _vm._v("\n                            Chargement ...\n                        ")]) : _c("span", [_c("i", {
    staticClass: "icofont icofont-refresh"
  }), _vm._v("\n                            Charger plus\n                        ")])])])])], 2) : _c("tbody", [_vm._m(0)])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", {
    staticClass: "text-center"
  }, [_c("td", {
    attrs: {
      colspan: "5"
    }
  }, [_c("div", {
    staticClass: "spinner-border text-secondary",
    attrs: {
      role: "status"
    }
  }, [_c("span", {
    staticClass: "visually-hidden"
  }, [_vm._v("Loading...")])])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/DispTable.vue?vue&type=style&index=0&id=0d94174d&lang=css&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/DispTable.vue?vue&type=style&index=0&id=0d94174d&lang=css&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.text-container[data-v-0d94174d]::-webkit-scrollbar-track {\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\r\n    background-color: #f5f5f5;\n}\n.text-container[data-v-0d94174d]::-webkit-scrollbar {\r\n    width: 5px;\r\n    background-color: #f5f5f5;\n}\n.text-container[data-v-0d94174d]::-webkit-scrollbar-thumb {\r\n    background-color: #2c3e50;\r\n    border: 2px solid #555555;\n}\n.badge[data-v-0d94174d] {\r\n    border-radius: 100px;\r\n    right: -10px;\r\n    top: 5px;\r\n    padding: 4px;\r\n    width: 19px;\n}\n.link[data-v-0d94174d]:hover {\r\n    color: #fff;\n}\n.bg-c-pink[data-v-0d94174d] {\r\n    background: linear-gradient(to right, #c0392b, #e74c3c);\n}\n.user-name[data-v-0d94174d] {\r\n    top: 10px;\r\n    font-weight: bold;\n}\n.time[data-v-0d94174d] {\r\n    color: grey;\r\n    font-size: 14px;\r\n    font-weight: normal;\n}\n.status[data-v-0d94174d] {\r\n    width: 10px;\r\n    height: 10px;\r\n    border-radius: 45vh;\r\n    display: inline-block;\r\n    position: absolute;\r\n    top: 5px;\r\n    margin-left: 1vh;\n}\n.dispatch-board[data-v-0d94174d] {\r\n    background: #fff !important;\r\n    border-radius: 2px;\n}\n.dispatch-board[data-v-0d94174d] {\r\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.dispatch-board[data-v-0d94174d]:hover {\r\n    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n}\n.text-container[data-v-0d94174d]::-webkit-scrollbar-track {\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\r\n    background-color: #f5f5f5;\n}\n.text-container[data-v-0d94174d]::-webkit-scrollbar {\r\n    width: 5px;\r\n    background-color: #f5f5f5;\n}\n.text-container[data-v-0d94174d]::-webkit-scrollbar-thumb {\r\n    background-color: #2c3e50;\r\n    border: 2px solid #555555;\n}\n.dos[data-v-0d94174d] {\r\n    background-color: #3498db;\r\n    border: 2px solid #00a4bd;\r\n    color: white;\n}\n.my-file[data-v-0d94174d] {\r\n    background-color: #ee6a00;\r\n    border: 2px solid black;\r\n    color: white;\n}\n.btn-orange[data-v-0d94174d] {\r\n    background-color: #ee6a00;\r\n    color: white;\n}\n.text-orange[data-v-0d94174d] {\r\n    color: #ee6a00;\n}\n.multiselect-dropdown.is-open[data-v-0d94174d] {\r\n    min-width: 250px;\n}\n.on-focused[data-v-0d94174d]:focus {\r\n    border: 2px dashed red;\n}\n.bg-gray[data-v-0d94174d] {\r\n    background: var(--bs-gray-200);\n}\n.edit-mode[data-v-0d94174d] {\r\n    visibility: hidden;\r\n    position: absolute;\r\n    right: 5px;\r\n    top: 5px;\n}\n.edit-mode i[data-v-0d94174d] {\r\n    font-size: 10px;\n}\n.card:hover .edit-mode[data-v-0d94174d] {\r\n    visibility: visible;\n}\n.par[data-v-0d94174d] {\r\n    top: 0;\r\n    left: 0;\r\n    color: #fff;\r\n    padding: 5px;\r\n    width: 35px;\r\n    height: 35px;\r\n    border-bottom-right-radius: 20px !important;\r\n    border-top-left-radius: 5px !important;\r\n    white-space: nowrap;\n}\n.search-action[data-v-0d94174d] {\r\n    cursor: pointer;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/DispTable.vue?vue&type=style&index=0&id=0d94174d&lang=css&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/DispTable.vue?vue&type=style&index=0&id=0d94174d&lang=css&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DispTable_vue_vue_type_style_index_0_id_0d94174d_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DispTable.vue?vue&type=style&index=0&id=0d94174d&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/DispTable.vue?vue&type=style&index=0&id=0d94174d&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DispTable_vue_vue_type_style_index_0_id_0d94174d_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DispTable_vue_vue_type_style_index_0_id_0d94174d_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/shared/DispTable.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/shared/DispTable.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DispTable_vue_vue_type_template_id_0d94174d_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DispTable.vue?vue&type=template&id=0d94174d&scoped=true */ "./resources/js/components/shared/DispTable.vue?vue&type=template&id=0d94174d&scoped=true");
/* harmony import */ var _DispTable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DispTable.vue?vue&type=script&lang=js */ "./resources/js/components/shared/DispTable.vue?vue&type=script&lang=js");
/* harmony import */ var _DispTable_vue_vue_type_style_index_0_id_0d94174d_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DispTable.vue?vue&type=style&index=0&id=0d94174d&lang=css&scoped=true */ "./resources/js/components/shared/DispTable.vue?vue&type=style&index=0&id=0d94174d&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DispTable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _DispTable_vue_vue_type_template_id_0d94174d_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _DispTable_vue_vue_type_template_id_0d94174d_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "0d94174d",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/shared/DispTable.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/shared/DispTable.vue?vue&type=script&lang=js":
/*!******************************************************************************!*\
  !*** ./resources/js/components/shared/DispTable.vue?vue&type=script&lang=js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DispTable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DispTable.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/DispTable.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DispTable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shared/DispTable.vue?vue&type=style&index=0&id=0d94174d&lang=css&scoped=true":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/shared/DispTable.vue?vue&type=style&index=0&id=0d94174d&lang=css&scoped=true ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DispTable_vue_vue_type_style_index_0_id_0d94174d_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DispTable.vue?vue&type=style&index=0&id=0d94174d&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/DispTable.vue?vue&type=style&index=0&id=0d94174d&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/shared/DispTable.vue?vue&type=template&id=0d94174d&scoped=true":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/shared/DispTable.vue?vue&type=template&id=0d94174d&scoped=true ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DispTable_vue_vue_type_template_id_0d94174d_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DispTable_vue_vue_type_template_id_0d94174d_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DispTable_vue_vue_type_template_id_0d94174d_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DispTable.vue?vue&type=template&id=0d94174d&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/DispTable.vue?vue&type=template&id=0d94174d&scoped=true");


/***/ })

}]);