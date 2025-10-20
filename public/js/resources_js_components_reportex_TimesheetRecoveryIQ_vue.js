"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_reportex_TimesheetRecoveryIQ_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/TimesheetRecoveryIQ.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/TimesheetRecoveryIQ.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./resources/js/services/auth.service.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "TimesheetRecoveryIQ",
  props: {
    authorized_roles: Array
  },
  created: function created() {
    var _this = this;
    _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["default"].loadUserData().then(function (res) {
      _this.user = res.data;
      _this.filiale = _this.__filiale__ || _this.user.filiale;
      _this.$axios.post(_this.reportex_link() + 'creditbuilder/api/v1/get-all-critical-par-mapping/', {
        filiale: _this.__filiale__ || _this.user.filiale
      }).then(function (res_) {
        _this.all_critical_par_mapping = res_.data.all_critical_par_mapping;
        _this.all_critical_par_mapping.forEach(function (el) {
          el.teams.forEach(function (team) {
            if (team.name == 'EQUIPE_0') {
              _this.headers.push("CAF " + team.name);
              var par_ = team.min_PAR + ' à ' + team.max_PAR;
              _this.headerTitles.push("Chargé d'affaire (PAR " + par_ + ")");
            } else {
              var _par_ = team.min_PAR + ' à ' + team.max_PAR;
              if (team.max_PAR == 999999999) {
                _par_ = team.min_PAR + ' à plus';
              }
              _this.headers.push("DISPRC " + team.name);
              _this.headerTitles.push("Dispatcher Recouvrement " + team.name + " (PAR " + _par_ + ")");
              _this.headers.push("AR " + team.name);
              _this.headerTitles.push("Agent de recouvrement " + team.name + " (PAR " + _par_ + ")");
            }
          });
        });

        // this.headers = ['DISPRC EQUIPE 0', 'AR EQUIPE 0', 'DISPRC EQUIPE 30', 'AR EQUIPE 30', 'DISPRC EQUIPE 90', 'AR EQUIPE 90'];
        // this.headerTitles = ['Dispatcher Recouvrement EQUIPE 0', 'Agent de recouvrement EQUIPE 0', 'Dispatcher Recouvrement EQUIPE 30', 'Agent de recouvrement EQUIPE 30', 'Dispatcher Recouvrement EQUIPE 90', 'Agent de recouvrement EQUIPE 90'];
        // this.roleObj = [
        //     { abbr: "DISPRC", name: "Dispatcher Recouvrement", type_par: 0 },
        //     { abbr: "AR", name: "Agent de recouvrement", type_par: 0 },
        //     { abbr: "DISPRC", name: "Dispatcher Recouvrement", type_par: 30 },
        //     { abbr: "AR", name: "Agent de recouvrement", type_par: 30 },
        //     { abbr: "DISPRC", name: "Dispatcher Recouvrement", type_par: 90 },
        //     { abbr: "AR", name: "Agent de recouvrement", type_par: 90 },
        // ];

        _this.$axios.post(_this.reportex_link() + 'creditbuilder/api/v1/get-all-access-roles/', {}).then(function (res) {
          _this.all_access_roles = res.data.all_access;
          _this.superviseurs = res.data.superviseurs;
        })["catch"](function (err) {
          return console.error(err);
        });
        _this.loadRetrieved({
          // code_agence: res.data.codeagence,
          user_id: res.data.user_id,
          role_id: res.data.role_uuid,
          page: _this.page,
          filiale: _this.__filiale__ || res.data.filiale
        });
      })["catch"](function (err) {
        return console.error(err);
      });
    })["catch"](function (err) {
      _this.loadWithError(err);
    });
  },
  mounted: function mounted() {
    this.pageMountedAt = new Date().getTime();
    window.onscroll = function () {};
    this.setTimer();
  },
  data: function data() {
    return {
      reloading: false,
      search: "",
      loading: true,
      loadingSearch: false,
      loadmoreit: false,
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__["default"].host,
      headers: [],
      headerTitles: [],
      stageRole: {
        '-102': "DISPRC",
        '-103': "AR"
      },
      stageRoleOrders: [-102, -103],
      otherHeaders: ["dmep", "mep", "da"],
      rows: [],
      showContext: false,
      contextText: {},
      filter: '',
      currentSortDir: "desc",
      start: 0,
      end: 10000000,
      nbToShow: 100,
      page: 1,
      totalPage: 1,
      roleObj: [],
      right: 0,
      user_id: null,
      role_id: null,
      timerInterval: null,
      timeSpentInSeconds: 0,
      all_critical_par_mapping: [],
      filiale: "",
      agence: ""
    };
  },
  methods: {
    setFiliale: function setFiliale() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var user;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _this2.$store.dispatch('set_filiale', _this2.filiale);
              EventBus.$emit("updateSearchFiliale", _this2.filiale);
              user = _this2.$store.state.reportex.user;
              _this2.loadRetrieved({
                code_agence: _this2.agence || user.codeagence,
                user_id: user.user_id,
                role_id: user.role_uuid,
                page: _this2.page,
                filiale: _this2.__filiale__ || user.filiale
              });
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    shareAndOpen: function shareAndOpen(cred) {
      var _this$all_access_role,
        _this$user,
        _this$superviseurs,
        _this$user2,
        _this$authorized_role,
        _this$user3,
        _this3 = this;
      if ((_this$all_access_role = this.all_access_roles) !== null && _this$all_access_role !== void 0 && _this$all_access_role.includes((_this$user = this.user) === null || _this$user === void 0 ? void 0 : _this$user.role_uuid) || (_this$superviseurs = this.superviseurs) !== null && _this$superviseurs !== void 0 && _this$superviseurs.includes((_this$user2 = this.user) === null || _this$user2 === void 0 ? void 0 : _this$user2.role_uuid) || (_this$authorized_role = this.authorized_roles) !== null && _this$authorized_role !== void 0 && _this$authorized_role.includes((_this$user3 = this.user) === null || _this$user3 === void 0 ? void 0 : _this$user3.role_uuid)) {
        this.$axios.post(this.reportex_link() + 'workflowbuilder/api/v1/sharedocs/', {
          list_of_keys: [cred],
          user_id: this.user.user_id,
          message: "Partage dans le but de voir dans visualizer",
          tables: [],
          senders: this.user
        }).then(function (res) {
          var _this3$user;
          if (((_this3$user = _this3.user) === null || _this3$user === void 0 ? void 0 : _this3$user.role_uuid) == "GHnev410Ua1vDIot") _this3.$router.push({
            name: "creation",
            params: {
              templateId: cred
            }
          });else _this3.$router.push({
            name: "creation",
            params: {
              templateId: cred
            },
            query: {
              view_only: 1
            }
          });
          EventBus.$emit('view-only');
        })["catch"](function (err) {
          return console.log("%cNous n'avons pas pu partager le dossier", 'color: #a22');
        });
      } else {
        this.$router.push({
          name: "creation",
          params: {
            templateId: cred
          },
          query: {
            view_only: 1
          }
        });
      }
    },
    setTimer: function setTimer() {
      clearInterval(this.timerInterval);
      this.timerInterval = setInterval(function () {
        this.timeSpentInSeconds++;
      }.bind(this), 1000);
    },
    reloadTimesheets: function reloadTimesheets() {
      var _this4 = this;
      // ?-
      this.reloading = true;
      this.$axios.post(this.reportex_link() + "reportex/api/v1/load-timesheets/").then(function (res) {
        _this4.reloading = false;
        _this4.toasted.show("Reportex mis a jour patientez pendant que nous recuperons les nouvelles données");
        _this4.loadRetrieved({
          // code_agence: res.data.codeagence,
          user_id: res.data.user_id,
          role_id: res.data.role_uuid,
          page: _this4.page,
          filiale: _this4.__filiale__ || res.data.filiale
        });
      })["catch"](function (err) {
        _this4.reloading = false;
      });
    },
    makeItSticky: function makeItSticky() {
      var _this5 = this;
      var getAllTableRows = new Promise(/*#__PURE__*/function () {
        var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(resolve, reject) {
          var _this5$$refs$table;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                _context2.t0 = resolve;
                _context2.next = 3;
                return (_this5$$refs$table = _this5.$refs.table) === null || _this5$$refs$table === void 0 || (_this5$$refs$table = _this5$$refs$table.tBodies) === null || _this5$$refs$table === void 0 ? void 0 : _this5$$refs$table[0].rows;
              case 3:
                _context2.t1 = _context2.sent;
                (0, _context2.t0)(_context2.t1);
              case 5:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }));
        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }());
      getAllTableRows.then(function (res) {
        var e = 1;
        var val = 0;
        var val2 = 0;
        res.forEach(function (el) {
          var sticky = _toConsumableArray(el.children).reverse().filter(function (el) {
            return el.className.includes('sticky-right');
          });
          var sticky2 = _toConsumableArray(el.children).filter(function (el) {
            return el.className.includes('sticky-left');
          });
          var dec = sticky.length;
          var size = 0;
          var size2 = 0;
          for (var i = 0; i < sticky.length; i++) {
            if (i < sticky.length) {
              dec--;
              if (_this5.$refs.sticky[dec] != undefined) {
                _this5.$refs.sticky[dec].style.right = size + "px";
              }
            }
            sticky[i].style.right = size + "px";
            val = sticky[i].offsetWidth - 1;
            size += val;
          }
          for (var j = 0; j < sticky2.length; j++) {
            if (j < sticky2.length) {
              var stickyLeft = document.querySelectorAll(".stickyLeft");
              if (stickyLeft[j] != undefined) {
                stickyLeft[j].style.left = size2 + "px";
              }
            }
            sticky2[j].style.left = size2 + "px";
            val2 = sticky2[j].offsetWidth - 1;
            size2 += val2;
          }
          e++;
        });
        var tRows = [];
        var _iterator = _createForOfIteratorHelper(res),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var row = _step.value;
            if (_this5.isElementInViewport(row)) {
              tRows.push(row);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      });
    },
    searchBackend: function searchBackend() {
      var _this6 = this;
      this.loadingSearch = false;
      if (!this.search) {
        this.rows = this.rows_backup;
        return;
      }
      if (this.search.length > 3) {
        this.loadingSearch = true;
        this.authBeforeRequest(function (args, user) {
          var data = {
            "user_id": user.user_id,
            "role": user.role_uuid,
            keyword: _this6.search.toLowerCase(),
            // code_agence: user.codeagence,
            filiale: _this6.__filiale__ || user.filiale
          };
          _this6.$axios.post(_this6.reportex_link() + "reportex/api/v1/search-timesheets-recouvrement/", data).then(function (res) {
            var rows = res.data.dossiers;
            rows.forEach(function (element) {
              element.timesheets = element.timesheets_recouvrement; //.filter(this.onlyUnique)
              delete element.timesheets_recouvrement;
            });
            _this6.rows = _toConsumableArray(rows);
            _this6.makeItSticky();
            _this6.$toasted.show("Resultat de la recherche: " + _this6.rows.length + " dossiers trouvés");
          })["catch"](function (err) {
            console.dir(err);
            _this6.$toasted.show("erreur !");
          })["finally"](function () {
            _this6.loadingSearch = false;
          });
        }, {});
      }
    },
    loadTimesheets: function loadTimesheets() {
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (!(_this7.page && !isNaN(_this7.page))) {
                _context3.next = 3;
                break;
              }
              _context3.next = 3;
              return _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["default"].loadUserData().then(function (res) {
                _this7.loadRetrieved({
                  // code_agence: res.data.codeagence,
                  user_id: res.data.user_id,
                  role_id: res.data.role_uuid,
                  page: _this7.page,
                  filiale: _this7.__filiale__ || res.data.filiale
                });
              })["catch"](function (err) {
                _this7.loadWithError(err);
              });
            case 3:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    loadWithError: function loadWithError(err) {
      window.location.href = "/login";
    },
    previousPage: function previousPage() {
      var _this8 = this;
      this.page = this.page - 1;
      _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["default"].loadUserData().then(function (res) {
        _this8.loadRetrieved({
          // code_agence: res.data.codeagence,
          user_id: res.data.user_id,
          role_id: res.data.role_uuid,
          page: _this8.page,
          filiale: _this8.__filiale__ || res.data.filiale
        });
      })["catch"](function (err) {
        _this8.loadWithError(err);
      });
    },
    nextPage: function nextPage() {
      var _this9 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _this9.page = _this9.page + 1;
              _context4.next = 3;
              return _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["default"].loadUserData().then(function (res) {
                _this9.loadRetrieved({
                  // code_agence: res.data.codeagence,
                  user_id: res.data.user_id,
                  role_id: res.data.role_uuid,
                  page: _this9.page,
                  filiale: _this9.__filiale__ || res.data.filiale
                });
              })["catch"](function (err) {
                _this9.loadWithError(err);
              });
            case 3:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    },
    refreshTimesheets: function refreshTimesheets() {
      var _this0 = this;
      _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["default"].loadUserData().then(function (res) {
        _this0.loadRetrieved({
          // code_agence: res.data.codeagence,
          user_id: res.data.user_id,
          role_id: res.data.role_uuid,
          page: _this0.page,
          filiale: _this0.__filiale__ || res.data.filiale
        });
      })["catch"](function (err) {
        _this0.loadWithError(err);
      });
    },
    roleObjFound: function roleObjFound(idx, timesheet) {
      var _timesheet$is_dossier;
      var a = this.truncateName(timesheet === null || timesheet === void 0 || (_timesheet$is_dossier = timesheet.is_dossier_delayed) === null || _timesheet$is_dossier === void 0 ? void 0 : _timesheet$is_dossier.delayed_by_role);
      if (a == this.roleObj[idx]['abbr']) {
        return true;
      }
      return false;
    },
    isElementInViewport: function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) /* or $(window).height() */;
    },
    sort: function sort(s) {
      if (s === this.filter) {
        this.currentSortDir = this.currentSortDir === 'asc' ? 'desc' : 'asc';
      }
      this.filter = s;
    },
    filterBy: function filterBy(value, filter) {
      if (filter == 'dossier') {
        this.rows.sort(function (a, b) {
          return 1;
        });
      } else if (filter == 'user') {
        this.rows.sort(function (a, b) {
          if (a.denomination_client > b.denomination_client) return -1;
          if (a.denomination_client < b.denomination_client) return 1;
          return 0;
        });
        this.rows = _toConsumableArray(this.rows);
      } else return value;
    },
    filterByc: function filterByc(filter) {
      if (filter == 'dossier') {
        this.rows.sort(function (a, b) {
          return 1;
        });
      } else if (filter == 'user') {
        alert('user filter');
        this.rows.sort(function (a, b) {
          if (a.denomination_client > b.denomination_client) return -1;
          if (a.denomination_client < b.denomination_client) return 1;
          return 0;
        });
      }
    },
    ischezEng: function ischezEng(outcome) {
      if (outcome == 1) {
        return "dispatcheng";
      } else if (outcome == -1) {
        return "refused";
      }
      return "published";
    },
    dotColor: function dotColor(timesheets) {
      return timesheets.at(-1).color_theme;
    },
    bgColor: function bgColor(stage_theme, currently_here, aborted, item, index) {
      var _item$timesheets$find,
        _this1 = this;
      if (currently_here === true) {
        if (aborted != undefined) {
          return 'bg-danger';
        }
        var color = "bgColor-theme1_0";
        if (stage_theme == "color_theme1_0") color = "bgColor-theme1_0";
        if (stage_theme == "color_theme1") color = "bgColor-theme1";
        if (stage_theme == "color_theme2") color = "bgColor-theme2";
        if (stage_theme == "color_theme2_0") color = "bgColor-theme2_0";
        if (stage_theme == "color_theme3") color = "bgColor-theme3";
        if (stage_theme == "color_theme4") color = "bgColor-theme4";
        if (stage_theme == "color_theme5_0") color = "bgColor-theme5_0";
        if (stage_theme == "color_theme5_1") color = "bgColor-theme5_1";
        return color;
      }
      if (((_item$timesheets$find = item.timesheets.find(function (t) {
        return t.receiver_role_sigle + ' ' + t.type_team == _this1.headers[index];
      })) === null || _item$timesheets$find === void 0 || (_item$timesheets$find = _item$timesheets$find.state_recovery_iq) === null || _item$timesheets$find === void 0 ? void 0 : _item$timesheets$find.action) == 'CLOSE') {
        return 'bgColor-theme5_1';
      }
    },
    showContextTooltip: function showContextTooltip(event, timesheet_, currently_here, element, headIndex, dblclick) {
      var _timesheet_$state_rec,
        _this10 = this;
      if (currently_here || (timesheet_ === null || timesheet_ === void 0 || (_timesheet_$state_rec = timesheet_.state_recovery_iq) === null || _timesheet_$state_rec === void 0 ? void 0 : _timesheet_$state_rec.action) == 'CLOSE') {
        var _timesheet_$state_rec2;
        var cafStage = element.timesheets.filter(function (el) {
          return el.receiver_role_name.toLowerCase() == "chargé d'affaire";
        });
        this.$refs.tooltip.style.top = "".concat(event.clientY, "px");
        this.$refs.tooltip.style.left = "".concat(event.clientX, "px");
        var timesheet = element.timesheets.find(function (t) {
          return t.receiver_role_sigle + ' ' + t.type_team == _this10.headers[headIndex];
        });
        if (!timesheet) return;
        this.contextText.title = (timesheet === null || timesheet === void 0 ? void 0 : timesheet.receiver_role_name) + ' ' + (timesheet === null || timesheet === void 0 ? void 0 : timesheet.type_team.replace('_', ' '));
        if (timesheet.receiver_role_sigle == 'CAF') this.contextText.title = timesheet === null || timesheet === void 0 ? void 0 : timesheet.receiver_role_name;
        this.contextText.caf = element === null || element === void 0 ? void 0 : element.monteur_doss;
        this.contextText.cafRole = "CAF";
        this.contextText.currentUser = timesheet === null || timesheet === void 0 ? void 0 : timesheet.receiver_name;
        this.contextText.role = timesheet === null || timesheet === void 0 ? void 0 : timesheet.receiver_role_name;
        this.contextText.color = this.dotColor(element.timesheets);
        this.showContext = true;
        if ((timesheet_ === null || timesheet_ === void 0 || (_timesheet_$state_rec2 = timesheet_.state_recovery_iq) === null || _timesheet_$state_rec2 === void 0 ? void 0 : _timesheet_$state_rec2.action) == 'CLOSE') {
          this.contextText.color = 'bgColor-theme5_1';
        }
      }
    },
    isTextRed: function isTextRed(elm) {
      return (elm === null || elm === void 0 ? void 0 : elm.toLowerCase()) === "filtre" || (elm === null || elm === void 0 ? void 0 : elm.toLowerCase()) === "fin";
    },
    isCurrentlyHere: function isCurrentlyHere(elm, rowIndex) {
      var _elm$timesheets$find,
        _this11 = this;
      return (_elm$timesheets$find = elm.timesheets.find(function (t) {
        return t.receiver_role_sigle + ' ' + t.type_team == _this11.headers[rowIndex];
      })) === null || _elm$timesheets$find === void 0 ? void 0 : _elm$timesheets$find.currently_here;
    },
    isDark: function isDark(index, timesheets) {
      var result = Math.random() * 10 > 8;
      return timesheets;
    },
    truncateName: function truncateName(name) {
      if (!name) return;
      var list = this.roleObj;
      var val = list.filter(function (el) {
        return el.name == name;
      });
      if (val.length > 0) return val[0].abbr;
      if (name) {
        if (name.toLowerCase() === "chargé d'affaire") return "CAF";else if (name.includes("(")) {
          return name.split("(")[1].substring(0, 3);
        } else if (name.toLowerCase().includes("dex")) {
          var _name$split$;
          return "DEX" + ((_name$split$ = name.split(" ")[1]) === null || _name$split$ === void 0 ? void 0 : _name$split$.substring(0, 1));
        } else if (name.toLowerCase().includes("d'")) {
          return name.replace("d'", "").split(" ").map(function (el) {
            return el[0];
          }).join('');
        } else if (name.toLowerCase().includes(" des ")) {
          return name.replace("des ", "").split(" ").map(function (el) {
            return el[0];
          }).join('');
        } else if (name.toLowerCase().includes(" de ")) {
          return name.replace("de ", "").split(" ").map(function (el) {
            return el[0];
          }).join('');
        } else if (name.toLowerCase().includes("secretaire general")) {
          return name.split(" ").at(-1);
        }
        var nameSubs = name.split(' ');
        if (nameSubs.length > 1) return nameSubs.map(function (el) {
          return el[0];
        }).join('');
      }
    },
    onlyUnique: function onlyUnique(value, index, self) {
      return self.findLastIndex(function (el) {
        return el.receiver_role == value.receiver_role;
      }) == index;
    },
    loadRetrieved: function loadRetrieved(res) {
      var _this12 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var _rows, _rows2;
        var rows, timesheets;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              // ?-
              _this12.user_id = res.user_id;
              _this12.role_id = res.role_id;
              _this12.loading = true;
              _context5.next = 5;
              return _this12.$axios.post(_this12.reportex_link() + 'reportex/api/v1/timesheets-recouvrement/', res);
            case 5:
              rows = _context5.sent;
              timesheets = (_rows = rows) === null || _rows === void 0 || (_rows = _rows.data) === null || _rows === void 0 ? void 0 : _rows.timesheets; // ?-
              // this.headers = rows?.data?.rolelist
              // this.roleObj = rows?.data?.role_and_sigle
              _this12.totalPage = (_rows2 = rows) === null || _rows2 === void 0 || (_rows2 = _rows2.data) === null || _rows2 === void 0 ? void 0 : _rows2.max_page;
              rows = timesheets;
              rows.forEach(function (element) {
                element.timesheets = element.timesheets_recouvrement; //.filter(this.onlyUnique)
                delete element.timesheets_recouvrement;
              });
              _this12.rows_backup = rows;
              _this12.rows = rows;
              _this12.loading = false;
            case 13:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }))();
    },
    showStats: function showStats() {},
    completed_in: function completed_in() {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref2$received_date = _ref2.received_date,
        received_date = _ref2$received_date === void 0 ? null : _ref2$received_date,
        _ref2$completed_at = _ref2.completed_at,
        completed_at = _ref2$completed_at === void 0 ? null : _ref2$completed_at,
        _ref2$currently_here = _ref2.currently_here,
        currently_here = _ref2$currently_here === void 0 ? false : _ref2$currently_here,
        _ref2$is_paused = _ref2.is_paused,
        is_paused = _ref2$is_paused === void 0 ? false : _ref2$is_paused;
      if (completed_at || received_date) {
        var days = 0,
          hours = 0,
          minutes = 0,
          seconds = 0;
        var _completed_in = 0;
        if (completed_at == null) {
          _completed_in = Math.ceil((new Date().getTime() - new Date(received_date).getTime()) / 1000);
        } else {
          _completed_in = Math.ceil((new Date(completed_at).getTime() - new Date(received_date).getTime()) / 1000);
        }
        days = Math.floor(_completed_in / (60 * 60 * 24));
        hours = Math.floor(_completed_in % (60 * 60 * 24) / (60 * 60));
        minutes = Math.floor(_completed_in % (60 * 60) / 60);
        seconds = Math.floor(_completed_in % 60);
        if (is_paused == false) {
          if (currently_here == true) {
            if (received_date) {
              days = 0, hours = 0, minutes = 0, seconds = 0;
              try {
                var received_date_timestamp = Date.parse(received_date);
                var diffTimeStamp = this.pageMountedAt - received_date_timestamp;
                var daysToAdd = Math.floor(diffTimeStamp / (1000 * 60 * 60 * 24));
                var hoursToAdd = Math.floor(diffTimeStamp / (1000 * 60 * 60)) - daysToAdd * 24;
                var minutesToAdd = Math.floor(diffTimeStamp / (1000 * 60)) - daysToAdd * 24 * 60 - hoursToAdd * 60;
                var secondsToAdd = Math.floor(diffTimeStamp / 1000) - daysToAdd * 24 * 60 * 60 - hoursToAdd * 60 * 60 - minutesToAdd * 60;
                days += daysToAdd > 0 ? daysToAdd : 0;
                hours += hoursToAdd > 0 ? hoursToAdd : 0;
                minutes += minutesToAdd > 0 ? minutesToAdd : 0;
                seconds += secondsToAdd > 0 ? secondsToAdd : 0;
              } catch (error) {
                // console.error('xx date conver', error)
              }
            }
          }
          if (currently_here == true) {
            var daysSpentSinceOpening = Math.floor(this.timeSpentInSeconds / (60 * 60 * 24));
            var hoursSpentSinceOpening = Math.floor(this.timeSpentInSeconds / (60 * 60)) - daysSpentSinceOpening * 24;
            var minutesSpentSinceOpening = Math.floor(this.timeSpentInSeconds / 60) - daysSpentSinceOpening * 24 * 60 - hoursSpentSinceOpening * 60;
            var secondsSpentSinceOpening = Math.floor(this.timeSpentInSeconds) - daysSpentSinceOpening * 24 * 60 * 60 - hoursSpentSinceOpening * 60 * 60 - minutesSpentSinceOpening * 60;
            days += daysSpentSinceOpening > 0 ? daysSpentSinceOpening : 0;
            hours += hoursSpentSinceOpening > 0 ? hoursSpentSinceOpening : 0;
            minutes += minutesSpentSinceOpening > 0 ? minutesSpentSinceOpening : 0;
            seconds += secondsSpentSinceOpening > 0 ? secondsSpentSinceOpening : 0;

            //?- update global times
            if (seconds / 60 >= 1) {
              minutes += Math.floor(seconds / 60);
              seconds = seconds % (Math.floor(seconds / 60) * 60);
            }
            if (minutes / 60 >= 1) {
              hours += Math.floor(minutes / 60);
              minutes = minutes % (Math.floor(minutes / 60) * 60);
            }
            if (hours / 24 >= 1) {
              days += Math.floor(hours / 60);
              hours = hours % (Math.floor(hours / 60) * 60);
            }
          }
        }

        // return `${parseInt(seconds)}s`;

        if (days == 0 && hours == 0 && minutes == 0) return "".concat(parseInt(seconds), "s");
        if (days == 0 && hours == 0) return "".concat(minutes, "m ").concat(parseInt(seconds), "s");
        if (days == 0) return "".concat(hours, "h ").concat(minutes, "m ").concat(parseInt(seconds), "s");
        return "".concat(days, "j ").concat(hours, "h ").concat(minutes, "m ").concat(parseInt(seconds), "s");
      }
      return '';
    }
  },
  computed: {
    rowsData: function rowsData() {
      return this.rows;
    },
    canUserReloadTimeSheets: function canUserReloadTimeSheets() {
      return this.role_id == 'bLyp1lHri4UjON91';
    },
    countList: function countList() {
      var list = [];
      for (var i = 0; i < this.headers.length; i++) {
        list.push(i);
      }
      return list;
    },
    sortedRows: function sortedRows() {
      var _this13 = this;
      return this.filteredRows.slice(this.start, this.end).sort(function (a, b) {
        var modifier = 1;
        if (_this13.currentSortDir === 'desc') modifier = -1;
        if (a[_this13.filter] < b[_this13.filter]) return -1 * modifier;
        if (a[_this13.filter] > b[_this13.filter]) return 1 * modifier;
        return 0;
      });
    },
    filteredRows: function filteredRows() {
      return this.rowsData;
    },
    agences: function agences() {
      var _this$$store$state$re,
        _this14 = this;
      return this.filiale ? (_this$$store$state$re = this.$store.state.reportex.filiales) === null || _this$$store$state$re === void 0 || (_this$$store$state$re = _this$$store$state$re.find(function (el) {
        return el.name == _this14.filiale;
      })) === null || _this$$store$state$re === void 0 ? void 0 : _this$$store$state$re.agences : [];
    }
  },
  watch: {
    page: function page(val) {
      if (val > this.totalPage) this.page = this.totalPage;
    },
    loading: function loading() {
      var _this15 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _this15.makeItSticky();
            case 1:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/TimesheetRecoveryIQ.vue?vue&type=template&id=c83c865c&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/TimesheetRecoveryIQ.vue?vue&type=template&id=c83c865c&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "container-fluid main-container bg-grey"
  }, [_c("div", {
    staticClass: "row bg-light"
  }, [_c("div", {
    staticClass: "col-12 p-4"
  }, [_c("div", {
    staticClass: "d-flex justify-content-between align-items-center mb-3"
  }, [_c("div", {
    staticClass: "col-md-8 col-lg-9 col-xl-10"
  }, [_c("h4", [_vm._v("Etat général & Situation des dossiers ")]), _vm._v(" "), _c("h6", {
    staticClass: "d-flex"
  }, [_c("b", [_vm._v("Date d'aujourd'hui : " + _vm._s(_vm.loadDateString()))]), _vm._v(" "), _vm.canUserReloadTimeSheets ? _c("button", {
    staticClass: "btn btn-secondary btn-sm ms-3",
    on: {
      click: _vm.reloadTimesheets
    }
  }, [_c("i", {
    staticClass: "icofont-refresh",
    "class": {
      rotate: _vm.reloading
    }
  })]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4 col-lg-3 col-xl-2"
  }, [_c("div", {
    staticClass: "input-group"
  }, [_c("span", {
    staticClass: "input-group-text border-end-0 bg-white"
  }, [_vm.loadingSearch ? _c("div", {
    staticClass: "spinner-border spinner-border-sm"
  }) : _c("i", {
    staticClass: "icofont-search"
  })]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.search,
      expression: "search"
    }],
    staticClass: "form-control border-start-0",
    attrs: {
      id: "search",
      type: "search",
      placeholder: "Rechercher ..."
    },
    domProps: {
      value: _vm.search
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.search = $event.target.value;
      }, _vm.searchBackend]
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "container"
  }, [_vm.page > 1 ? _c("i", {
    staticClass: "icofont icofont-simple-left icofont-2x btn",
    staticStyle: {
      "border-radius": "5vh",
      padding: "0px"
    },
    on: {
      click: _vm.previousPage
    }
  }) : _vm._e(), _vm._v(" "), _c("i", {
    staticClass: "icofont icofont-simple-right icofont-2x btn",
    staticStyle: {
      "border-radius": "5vh",
      padding: "0px"
    },
    on: {
      click: _vm.nextPage
    }
  }), _vm._v(" "), !_vm.loading ? _c("h6", {
    staticClass: "d-flex align-items-center"
  }, [_c("div", {
    staticClass: "col-6"
  }, [_vm._v("\n                                    Page\n                                ")]), _vm._v(" "), _c("div", {
    staticClass: "input-group col"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.number",
      value: _vm.page,
      expression: "page",
      modifiers: {
        number: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      max: _vm.totalPage
    },
    domProps: {
      value: _vm.page
    },
    on: {
      keyup: function keyup($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        return _vm.loadTimesheets.apply(null, arguments);
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.page = _vm._n($event.target.value);
      },
      blur: function blur($event) {
        return _vm.$forceUpdate();
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "input-group-text"
  }, [_vm._v("/ " + _vm._s(_vm.totalPage))])])]) : _vm._e()])])])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex gap-2"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filiale,
      expression: "filiale"
    }],
    staticClass: "form-select",
    attrs: {
      id: ""
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.filiale = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, _vm.setFiliale]
    }
  }, _vm._l(_vm.$store.state.reportex.filiales, function (fil) {
    return _c("option", {
      key: fil.name,
      domProps: {
        value: fil.name
      }
    }, [_vm._v(" \n                                " + _vm._s(fil.name) + "\n                            ")]);
  }), 0)])]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("div", {
    staticClass: "table-responsive m-0",
    staticStyle: {
      height: "333px"
    }
  }, [_c("table", {
    ref: "table",
    staticClass: "table table-bordered text-center mt-2 p-0"
  }, [_c("thead", {
    staticClass: "position-sticky bg-grey",
    staticStyle: {
      "z-index": "4",
      top: "-2px"
    }
  }, [_c("tr", {
    staticClass: "table-active text-uppercase"
  }, [_c("th", {
    staticClass: "stickyLeft position-sticky",
    staticStyle: {
      background: "rgb(235, 235, 235)",
      "min-width": "100px",
      "z-index": "2"
    }
  }, [_vm._v("#")]), _vm._v(" "), _c("th", {
    staticClass: "stickyLeft staticLeft position-sticky",
    staticStyle: {
      background: "rgb(235, 235, 235)",
      "min-width": "100px",
      "z-index": "2"
    },
    attrs: {
      role: "button"
    },
    on: {
      click: function click($event) {
        return _vm.sort("doss_name");
      }
    }
  }, [_vm._v("\n                                Nº Doss\n                                "), _vm._m(0)]), _vm._v(" "), _c("th", {
    staticClass: "stickyLeft staticLeft position-sticky",
    staticStyle: {
      background: "rgb(235, 235, 235)",
      "min-width": "100px",
      "z-index": "2"
    },
    attrs: {
      title: "Client",
      role: "button"
    },
    on: {
      click: function click($event) {
        return _vm.sort("denomination_client");
      }
    }
  }, [_vm._v("\n                                Client\n                                "), _vm._m(1)]), _vm._v(" "), _c("th", {
    staticClass: "stickyLeft staticLeft position-sticky",
    staticStyle: {
      background: "rgb(235, 235, 235)",
      "min-width": "100px",
      "z-index": "2"
    },
    attrs: {
      title: "Montant",
      role: "button"
    },
    on: {
      click: function click($event) {
        return _vm.sort("montant_approuve");
      }
    }
  }, [_vm._v("\n                                Montant\n                                "), _vm._m(2)]), _vm._v(" "), _c("th", {
    "class": {
      "text-danger": _vm.isTextRed("Décision Finale")
    },
    attrs: {
      "data-toggle": "tooltip",
      title: "Décision Finale"
    }
  }, [_vm._v("\n                                Décision Finale\n                            ")]), _vm._v(" "), _vm._l(_vm.headers, function (elm, idx_) {
    var _vm$headerTitles$idx_;
    return _c("th", {
      key: elm,
      "class": {
        "text-danger": _vm.isTextRed(elm)
      },
      attrs: {
        "data-toggle": "tooltip",
        title: (_vm$headerTitles$idx_ = _vm.headerTitles[idx_].replace("_", " ")) !== null && _vm$headerTitles$idx_ !== void 0 ? _vm$headerTitles$idx_ : elm.replace("_", " ")
      }
    }, [_vm._v("\n                                " + _vm._s(elm.indexOf("CAF") != -1 ? "CAF" : elm.replace("_", " ")) + "\n                            ")]);
  }), _vm._v(" "), _vm._l(_vm.otherHeaders, function (i) {
    return _c("th", {
      key: i,
      ref: "sticky",
      refInFor: true,
      staticClass: "static",
      staticStyle: {
        background: "rgb(235, 235, 235)",
        "min-width": "100px",
        "z-index": "2"
      }
    }, [_vm._v(_vm._s(i) + "\n                            ")]);
  })], 2)]), _vm._v(" "), _c("transition", {
    attrs: {
      appear: ""
    }
  }, [!_vm.loading ? _c("tbody", _vm._l(_vm.sortedRows, function (elm, idx) {
    return _c("tr", {
      key: elm.cred_pub_key,
      staticClass: "fw-normal",
      staticStyle: {
        "font-size": "14px"
      },
      attrs: {
        role: "button"
      },
      on: {
        click: function click($event) {
          return _vm.shareAndOpen(elm.cred_pub_key);
        }
      }
    }, [_c("td", {
      staticClass: "sticky-left position-sticky",
      staticStyle: {
        background: "rgb(235, 235, 235)",
        "min-width": "100px",
        "z-index": "2"
      }
    }, [_vm._v("\n                                    " + _vm._s(++idx) + "\n                                ")]), _vm._v(" "), _c("td", {
      staticClass: "align-middle sticky-left staticLeft position-sticky",
      staticStyle: {
        background: "rgb(235, 235, 235)",
        "min-width": "100px",
        "z-index": "2"
      },
      attrs: {
        title: elm.numero_dossier
      }
    }, [_c("div", {
      staticClass: "d-flex justify-content-start align-items-center px-1"
    }, [_c("div", {
      staticClass: "me-1 align-items-center",
      "class": _vm.dotColor(elm.timesheets),
      staticStyle: {
        display: "inline-block",
        width: "10px",
        height: "10px",
        "border-radius": "50%"
      }
    }), _vm._v(" "), _c("div", {}, [_vm._v("\n                                            " + _vm._s(_vm._f("textTruncate")(elm.numero_dossier, 6, "fromEnd")) + "\n                                        ")])])]), _vm._v(" "), _c("td", {
      staticClass: "align-middle sticky-left staticLeft position-sticky",
      staticStyle: {
        background: "rgb(235, 235, 235)",
        "min-width": "100px",
        "z-index": "2"
      },
      attrs: {
        title: elm.denomination_client
      }
    }, [_vm._v("\n                                    " + _vm._s(_vm._f("textTruncate")(elm.denomination_client, 20)) + "\n                                ")]), _vm._v(" "), _c("td", {
      staticClass: "align-middle sticky-left staticLeft position-sticky",
      staticStyle: {
        background: "rgb(235, 235, 235)",
        "min-width": "100px",
        "z-index": "2"
      }
    }, [_vm._v("\n                                    " + _vm._s(_vm._f("formatNumber")(elm.montant_approuve)) + "\n                                ")]), _vm._v(" "), _c("td", {
      staticClass: "text-center align-middle"
    }, [_c("span", {
      staticClass: "text-muted"
    }, [_c("b", [_vm._v("\n                                            " + _vm._s(elm.final_outcome.giver_role_sigle) + "\n                                        ")])])]), _vm._v(" "), _vm._l(_vm.countList, function (i) {
      var _elm$timesheets$find, _elm$timesheets$find2, _elm$timesheets$find3, _elm$timesheets$find4;
      return _c("td", {
        key: "algo#" + i,
        staticClass: "text-center align-middle",
        "class": _vm.bgColor((_elm$timesheets$find = elm.timesheets.find(function (t) {
          return t.receiver_role_sigle + " " + t.type_team == _vm.headers[i];
        })) === null || _elm$timesheets$find === void 0 ? void 0 : _elm$timesheets$find.color_theme, _vm.isCurrentlyHere(elm, i), elm.aborted, elm, i),
        on: {
          click: function click($event) {
            _vm.showContextTooltip($event, elm.timesheets.find(function (t) {
              return t.receiver_role_sigle + " " + t.type_team == _vm.headers[i];
            }), _vm.isCurrentlyHere(elm, i), elm, i, true);
          },
          mouseenter: function mouseenter($event) {
            _vm.showContextTooltip($event, elm.timesheets.find(function (t) {
              return t.receiver_role_sigle + " " + t.type_team == _vm.headers[i];
            }), _vm.isCurrentlyHere(elm, i), elm, i);
          },
          mouseleave: function mouseleave($event) {
            _vm.showContext = false;
          }
        }
      }, [((_elm$timesheets$find2 = elm.timesheets.find(function (t) {
        return t.receiver_role_sigle + " " + t.type_team == _vm.headers[i];
      })) === null || _elm$timesheets$find2 === void 0 || (_elm$timesheets$find2 = _elm$timesheets$find2.state_recovery_iq) === null || _elm$timesheets$find2 === void 0 ? void 0 : _elm$timesheets$find2.action) == "CLOSE" ? _c("i", {
        staticClass: "icofont-ui-pause m-1",
        staticStyle: {
          color: "white"
        }
      }) : _vm._e(), _vm._v(" "), _c("span", [_vm._v("\n\n                                        " + _vm._s(_vm.completed_in({
        received_date: (_elm$timesheets$find3 = elm.timesheets.find(function (t) {
          return t.receiver_role_sigle + " " + t.type_team == _vm.headers[i];
        })) === null || _elm$timesheets$find3 === void 0 ? void 0 : _elm$timesheets$find3.received_date,
        completed_at: (_elm$timesheets$find4 = elm.timesheets.find(function (t) {
          return t.receiver_role_sigle + " " + t.type_team == _vm.headers[i];
        })) === null || _elm$timesheets$find4 === void 0 ? void 0 : _elm$timesheets$find4.actual_cpl,
        currently_here: _vm.isCurrentlyHere(elm, i)
      })) + "\n                                        \n                                    ")]), _vm._v(" "), _c("br")]);
    }), _vm._v(" "), _vm._l(_vm.otherHeaders.length, function (i, index) {
      var _elm$eng_monitoring, _elm$mise_en_place_lo;
      return _c("td", {
        key: i + index,
        staticClass: "align-middle static position-sticky sticky-right",
        staticStyle: {
          background: "rgb(235, 235, 235)",
          "min-width": "100px",
          "z-index": "2"
        }
      }, [index == 0 ? _c("span", {}, [elm !== null && elm !== void 0 && elm.mise_en_place_logs ? _c("span", {
        staticClass: "eng1",
        attrs: {
          title: "Dossier mis en place"
        }
      }, [_vm._v("\n                                            Mis en place\n                                        ")]) : _vm._e(), _vm._v(" "), _c("br"), _vm._v(" "), elm !== null && elm !== void 0 && elm.mise_en_place ? _c("small", [_vm._v(_vm._s(elm === null || elm === void 0 || (_elm$eng_monitoring = elm.eng_monitoring) === null || _elm$eng_monitoring === void 0 || (_elm$eng_monitoring = _elm$eng_monitoring.eng_CE) === null || _elm$eng_monitoring === void 0 ? void 0 : _elm$eng_monitoring.name))]) : _vm._e()]) : _vm._e(), _vm._v(" "), index == 1 && elm !== null && elm !== void 0 && elm.mise_en_place_logs ? _c("span", {
        "class": _vm.ischezEng(elm.outcome_),
        attrs: {
          title: "Date de mise en place"
        }
      }, [_vm._v("\n                                        " + _vm._s(elm === null || elm === void 0 || (_elm$mise_en_place_lo = elm.mise_en_place_logs) === null || _elm$mise_en_place_lo === void 0 ? void 0 : _elm$mise_en_place_lo.date_mise_place.split("-").reverse().join("/")) + "\n                                    ")]) : _vm._e()]);
    })], 2);
  }), 0) : _c("tbody", [_c("tr", [_c("td", {
    staticClass: "align-middle",
    attrs: {
      colspan: "100"
    }
  }, [_c("div", {
    staticClass: "d-flex justify-content-center align-items-center text-center",
    staticStyle: {
      width: "100%",
      height: "300px"
    }
  }, [!_vm.loading ? _c("h4", [_vm._v("\n                                            Aucun dossier trouvé\n                                        ")]) : _c("div", {
    staticClass: "column"
  }, [_c("div", {
    staticClass: "spinner-border spinner-border-xl"
  }), _vm._v(" "), _c("div", {
    staticClass: "d-block"
  }, [_vm._v("\n                                                Chargement des données en cours\n                                            ")])])])])])])])], 1)]), _vm._v(" "),  false ? 0 : _vm._e(), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.showContext,
      expression: "showContext"
    }],
    ref: "tooltip",
    staticClass: "context-menu pb-3 px-3",
    attrs: {
      id: "tooltip"
    },
    on: {
      mouseover: function mouseover($event) {
        _vm.showContext = true;
      }
    }
  }, [_c("div", {
    staticClass: "sticky-top mb-3 w-100 border-bottom border-1 top-0 bg-white mt-0"
  }, [_c("h1", {
    staticClass: "fs-5 pt-3 pb-1 mb-0 d-flex justify-content-between align-items-center"
  }, [_vm._v("\n                        " + _vm._s(_vm.contextText.title) + " "), _c("div", {
    staticClass: "me-1",
    "class": _vm.contextText.color,
    staticStyle: {
      display: "inline-block",
      width: "20px",
      height: "20px",
      "border-radius": "50%"
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex fw-normal px-1",
    staticStyle: {
      "font-size": ".9rem"
    }
  }, [_c("div", {
    staticClass: "col"
  }, [_c("div", {
    staticClass: "colum"
  }, [_c("div", {
    staticClass: "py-1"
  }, [_c("h6", {
    staticClass: "m-0 col-12 fw-bold"
  }, [_vm._v("Responsable ")]), _vm._v(" "), _c("div", {
    staticClass: "text-muted"
  }, [_vm._v(_vm._s(_vm.contextText.currentUser) + " ")])]), _vm._v(" "), _c("div", {
    staticClass: "py-1"
  }, [_c("h6", {
    staticClass: "m-0 col-12 fw-bold"
  }, [_vm._v("Role ")]), _vm._v(" "), _c("div", {
    staticClass: "text-muted"
  }, [_vm._v(_vm._s(_vm.contextText.role) + " ")])]), _vm._v(" "), _c("div", {
    staticClass: "py-1"
  }, [_c("h6", {
    staticClass: "m-0 col-12 fw-bold"
  }, [_vm._v("Chargé d'affaire ")]), _vm._v(" "), _c("div", {
    staticClass: "text-muted"
  }, [_vm._v(_vm._s(_vm.contextText.caf) + " ")])])])])])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("span", [_c("i", {
    staticClass: "icofont-sort"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("span", [_c("i", {
    staticClass: "icofont-sort"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("span", [_c("i", {
    staticClass: "icofont-sort"
  })]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/TimesheetRecoveryIQ.vue?vue&type=style&index=0&id=c83c865c&lang=css&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/TimesheetRecoveryIQ.vue?vue&type=style&index=0&id=c83c865c&lang=css&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n#search[data-v-c83c865c] {\r\n    box-shadow: none !important;\r\n    outline: none !important;\r\n    border: 1px solid lightgrey\n}\n#search[data-v-c83c865c]:valid,\r\n#search[data-v-c83c865c]:focus {\r\n    box-shadow: none !important;\r\n    outline: none !important;\r\n    border: 1px solid lightgrey\n}\ntd[data-v-c83c865c] {\r\n    min-width: 6vw\n}\n.eng1[data-v-c83c865c] {\r\n    background: rgba(255, 0, 0, 0.1);\r\n    color: red;\r\n    padding: 1px 5px;\r\n    border-radius: 3px;\n}\n.not-published[data-v-c83c865c] {\r\n    background: rgba(255, 0, 0, 0.1);\r\n    color: red;\r\n    padding: 1px 5px;\r\n    border-radius: 3px;\n}\n.dispatcheng[data-v-c83c865c] {\r\n    background: rgba(39, 174, 96, 1);\r\n    color: white;\r\n    padding: 1px 3px;\r\n    border-radius: 3px;\r\n    display: inline-block;\r\n    width: 180px;\n}\n.published[data-v-c83c865c] {\r\n    background: rgb(0, 110, 110);\r\n    color: white;\r\n    padding: 1px 3px;\r\n    border-radius: 3px;\r\n    display: inline-block;\r\n    width: 180px;\n}\n.refused[data-v-c83c865c] {\r\n    background: rgba(192, 57, 43, 1);\r\n    color: white;\r\n    padding: 1px 3px;\r\n    border-radius: 3px;\r\n    display: inline-block;\r\n    width: 180px;\n}\n.name-badge[data-v-c83c865c] {\r\n    background: rgba(52, 73, 94, 0.8);\r\n    color: white;\r\n    padding: 1px 3px;\r\n    border-radius: 3px;\r\n    display: inline-block;\r\n    margin-top: 10px;\r\n    width: 180px;\n}\n.bg-dark[data-v-c83c865c] {\r\n    background-color: rgb(11, 0, 34);\r\n    font-weight: bold;\r\n    min-height: 25px;\r\n    height: auto\n}\n.color_theme5_0[data-v-c83c865c] {\r\n    box-shadow: inset 0vh 5vh 2vh 150vh rgba(192, 57, 43, 1);\n}\n.color_theme5_1[data-v-c83c865c] {\r\n    box-shadow: inset 0vh 5vh 2vh 150vh rgba(39, 174, 96, 1);\n}\n.color_theme4[data-v-c83c865c] {\r\n    box-shadow: inset 0vh 5vh 2vh 150vh rgba(24, 122, 53, 0.8);\n}\n.color_theme2[data-v-c83c865c] {\r\n    box-shadow: inset 0vh 5vh 2vh 150vh rgba(237, 28, 36, 0.8);\n}\n.color_theme2_0[data-v-c83c865c] {\r\n    box-shadow: inset 0vh 5vh 2vh 150vh rgba(155, 89, 182, 0.8);\n}\n.color_theme1_0[data-v-c83c865c] {\r\n    box-shadow: inset 0vh 5vh 2vh 150vh rgba(52, 73, 94, 0.8);\n}\n.color_theme1[data-v-c83c865c] {\r\n    box-shadow: inset 0vh 5vh 2vh 150vh rgba(69, 170, 242, 0.8);\n}\n.color_theme3[data-v-c83c865c] {\r\n    box-shadow: inset 0vh 5vh 2vh 150vh rgba(235, 126, 34, 0.8);\n}\n.table-responsive[data-v-c83c865c] {\r\n    position: relative !important;\n}\nthead>tr[data-v-c83c865c]:first-child {\r\n    position: sticky;\r\n    top: 0;\n}\nth[data-v-c83c865c] {\r\n    position: sticky !important;\r\n    top: 0;\r\n    z-index: 1;\r\n    font-size: 0.8rem;\n}\n@media screen and (max-width:1140px) {\n.staticLeft[data-v-c83c865c],\r\n    .static[data-v-c83c865c] {\r\n        position: static !important;\n}\n}\n.context-menu[data-v-c83c865c] {\r\n    position: fixed;\r\n    min-width: 300px;\r\n    max-width: 350px;\r\n    max-height: 350px;\r\n    overflow: auto;\r\n    z-index: 100;\r\n    background-color: #fff;\r\n    border-radius: 4px;\r\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .1), 0 3px 4px 0 rgba(0, 0, 0, .1)\n}\n.bg-bl[data-v-c83c865c] {\r\n    background: #0abde3;\n}\n.bgColor-theme1_0[data-v-c83c865c] {\r\n    background-color: rgba(52, 73, 94, 0.8);\r\n    color: white;\n}\n.bgColor-theme1[data-v-c83c865c] {\r\n    background-color: rgba(69, 170, 242, 0.8);\r\n    color: white;\n}\n.bgColor-theme2[data-v-c83c865c] {\r\n    background-color: rgba(237, 28, 36, 0.8);\r\n    color: white;\n}\n.bgColor-theme2_0[data-v-c83c865c] {\r\n    background-color: rgba(155, 89, 182, 0.8);\r\n    color: white;\n}\n.bgColor-theme3[data-v-c83c865c] {\r\n    background-color: rgba(235, 126, 34, 0.8);\r\n    color: white;\n}\n.bgColor-theme4[data-v-c83c865c] {\r\n    background-color: rgba(24, 122, 53, 0.8);\r\n    color: white;\n}\n.bgColor-theme5_0[data-v-c83c865c] {\r\n    background-color: rgba(192, 57, 43, 1);\r\n    color: white;\n}\n.bgColor-theme5_1[data-v-c83c865c] {\r\n    background-color: rgba(39, 174, 96, 1);\r\n    color: white;\n}\ntbody td[data-v-c83c865c] {\r\n    min-width: 130px !important;\n}\n.v-enter-active[data-v-c83c865c],\r\n.v-leave-active[data-v-c83c865c] {\r\n    transition: opacity 0.5s ease;\n}\n.v-enter-from[data-v-c83c865c],\r\n.v-leave-to[data-v-c83c865c] {\r\n    opacity: 0;\n}\n.tag[data-v-c83c865c] {\r\n    padding: 0.25rem;\r\n    border-radius: 5px;\n}\n.tag.tag-primary[data-v-c83c865c] {\r\n    background: #0d6dfd23;\r\n    color: var(--bs-primary);\n}\n.tag.tag-success[data-v-c83c865c] {\r\n    background: rgba(25, 135, 84, .09);\r\n    color: rgba(39, 174, 96, 1);\n}\n.tag.tag-warning[data-v-c83c865c] {\r\n    background: rgba(25, 135, 84, .09);\r\n    color: rgba(39, 174, 96, 1);\n}\n.rotate[data-v-c83c865c] {\r\n    display: inline-block;\r\n    animation: rotate-c83c865c 1s ease infinite;\r\n    transform: rotate(0deg);\n}\n@keyframes rotate-c83c865c {\n0% {\r\n        transform: rotate(0deg);\n}\n100% {\r\n        transform: rotate(1turn);\n}\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/TimesheetRecoveryIQ.vue?vue&type=style&index=0&id=c83c865c&lang=css&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/TimesheetRecoveryIQ.vue?vue&type=style&index=0&id=c83c865c&lang=css&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TimesheetRecoveryIQ_vue_vue_type_style_index_0_id_c83c865c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TimesheetRecoveryIQ.vue?vue&type=style&index=0&id=c83c865c&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/TimesheetRecoveryIQ.vue?vue&type=style&index=0&id=c83c865c&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TimesheetRecoveryIQ_vue_vue_type_style_index_0_id_c83c865c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TimesheetRecoveryIQ_vue_vue_type_style_index_0_id_c83c865c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/reportex/TimesheetRecoveryIQ.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/reportex/TimesheetRecoveryIQ.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TimesheetRecoveryIQ_vue_vue_type_template_id_c83c865c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TimesheetRecoveryIQ.vue?vue&type=template&id=c83c865c&scoped=true */ "./resources/js/components/reportex/TimesheetRecoveryIQ.vue?vue&type=template&id=c83c865c&scoped=true");
/* harmony import */ var _TimesheetRecoveryIQ_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TimesheetRecoveryIQ.vue?vue&type=script&lang=js */ "./resources/js/components/reportex/TimesheetRecoveryIQ.vue?vue&type=script&lang=js");
/* harmony import */ var _TimesheetRecoveryIQ_vue_vue_type_style_index_0_id_c83c865c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TimesheetRecoveryIQ.vue?vue&type=style&index=0&id=c83c865c&lang=css&scoped=true */ "./resources/js/components/reportex/TimesheetRecoveryIQ.vue?vue&type=style&index=0&id=c83c865c&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TimesheetRecoveryIQ_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _TimesheetRecoveryIQ_vue_vue_type_template_id_c83c865c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _TimesheetRecoveryIQ_vue_vue_type_template_id_c83c865c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "c83c865c",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/reportex/TimesheetRecoveryIQ.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/reportex/TimesheetRecoveryIQ.vue?vue&type=script&lang=js":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/reportex/TimesheetRecoveryIQ.vue?vue&type=script&lang=js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TimesheetRecoveryIQ_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TimesheetRecoveryIQ.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/TimesheetRecoveryIQ.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TimesheetRecoveryIQ_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/reportex/TimesheetRecoveryIQ.vue?vue&type=style&index=0&id=c83c865c&lang=css&scoped=true":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/components/reportex/TimesheetRecoveryIQ.vue?vue&type=style&index=0&id=c83c865c&lang=css&scoped=true ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TimesheetRecoveryIQ_vue_vue_type_style_index_0_id_c83c865c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TimesheetRecoveryIQ.vue?vue&type=style&index=0&id=c83c865c&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/TimesheetRecoveryIQ.vue?vue&type=style&index=0&id=c83c865c&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/reportex/TimesheetRecoveryIQ.vue?vue&type=template&id=c83c865c&scoped=true":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/reportex/TimesheetRecoveryIQ.vue?vue&type=template&id=c83c865c&scoped=true ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TimesheetRecoveryIQ_vue_vue_type_template_id_c83c865c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TimesheetRecoveryIQ_vue_vue_type_template_id_c83c865c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TimesheetRecoveryIQ_vue_vue_type_template_id_c83c865c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TimesheetRecoveryIQ.vue?vue&type=template&id=c83c865c&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/TimesheetRecoveryIQ.vue?vue&type=template&id=c83c865c&scoped=true");


/***/ })

}]);