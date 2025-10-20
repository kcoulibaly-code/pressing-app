"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_reportex_TimesheetCredit_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/TimesheetCredit.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/TimesheetCredit.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./resources/js/services/auth.service.js");
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
  created: function created() {
    var _this = this;
    _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["default"].loadUserData().then(function (res) {
      _this.user = res.data;
      _this.filiale = _this.__filiale__ || _this.user.filiale;
      _this.loadRetrieved({
        user_id: res.data.user_id,
        role_id: res.data.role_uuid,
        page: _this.page
      });
      _this.$axios.post(_this.reportex_link() + 'creditbuilder/api/v1/get-all-access-roles/', {}).then(function (res) {
        _this.all_access_roles = res.data.all_access;
        _this.superviseurs = res.data.superviseurs;
      })["catch"](function (err) {
        return console.error(err);
      });
    })["catch"](function (err) {
      _this.loadWithError(err);
    });
  },
  mounted: function mounted() {
    this.pageMountedAt = new Date().getTime();
    // window.addEventListener("load",()=>{
    //    this.sticky()
    // }),
    window.onscroll = function () {
      // alert(5)
    };

    // window.setInterval(() => {
    //    // this.refreshTimesheets()
    //     location.reload();
    //  }, 1000000) //10min
    this.setTimer();
  },
  data: function data() {
    return {
      user: null,
      reloading: false,
      search: "",
      loading: true,
      loadingSearch: false,
      loadmoreit: false,
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__["default"].host,
      headers: [],
      // UNIQUEMENT QUE LES DONNEES ["rep","eng","fin","dapr","dmep",] EN STICKY
      //DANS L'ORDRE ["rep","eng","fin","dapr","dmep",]
      otherHeaders: [
      // "rep",
      "eng",
      // "fin",
      "dapr", "dmep"],
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
      roleObj: [
        // // { abbr: "ENR", name: "File Recorder" },
        // { abbr: "DISP", name: "Centrale Dispatcher" },
        // { abbr: "CAF", name: "Chargé d'affaire" },
        // { abbr: "CA", name: "Chef d'agence" },
        // // { abbr: "DEX", name: "Directeur d'exploitation" },
        // { abbr: "DEX", name: "Dex generale" },
        // { abbr: "DISPR", name: "Dispatcher Filiale" },
        // { abbr: "ARC", name: "Vérificateur / Analyste crédit Filiale" },
        // { abbr: "SRC", name: "Specialiste Risque Crédit Filiale" },
        // { abbr: "DRC", name: "Directeur Risque Crédit Filiale" },
        // { abbr: "CIC", name: "Secretaire General CIC" },
        // { abbr: "DG", name: "Directeur Général filiale" },
        // { abbr: "SCO1", name: "Senior Credit Officer (SCO1)" },
        // { abbr: "SCO2", name: "Senior Credit Officer (SCO2)" },
        // { abbr: "SCO3", name: "Senior Credit Officer (SCO3)" },
        // { abbr: "SCO4", name: "Senior Credit Officer (SCO4)" },
        // { abbr: "DR", name: "Directeur Regional" },
        // { abbr: "DISPG", name: "Dispatcher Groupe" },
        // { abbr: "SRCG", name: "Specialiste Risque Crédit Groupe" },
        // { abbr: "DRCG", name: "Directeur Risque Crédit Groupe" },
        // { abbr: "CSCG", name: "Comite Superieur de Crédit" },
        // { abbr: "ENG", name: "Engagement" }
      ],
      right: 0,
      user_id: null,
      role_id: null,
      timerInterval: null,
      timeSpentInSeconds: 0,
      filiale: ''
    };
  },
  methods: {
    shareAndOpen: function shareAndOpen(cred) {
      var _this$user,
        _this2 = this;
      if (this.all_access_roles && this.all_access_roles.includes((_this$user = this.user) === null || _this$user === void 0 ? void 0 : _this$user.role_uuid)) {
        this.$axios.post(this.reportex_link() + 'creditbuilder/api/v1/share-with/', {
          cred_pub_key: cred,
          users_id: [this.user.user_id],
          "message": "Partage dans le but de voir dans visualizer",
          tables: []
        }).then(function (res) {
          _this2.$router.push({
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
      var _this3 = this;
      this.reloading = true;
      this.$axios.post(this.reportex_link() + "reportex/api/v1/load-timesheets/").then(function (res) {
        _this3.reloading = false;
        _this3.toasted.show("Reportex mis a jour patientez pendant que nous recuperons les nouvelles données");
        _this3.loadRetrieved({
          user_id: res.data.user_id,
          role_id: res.data.role_uuid,
          page: _this3.page
        });
      })["catch"](function (err) {
        _this3.reloading = false;
      });
    },
    makeItSticky: function makeItSticky() {
      var _this4 = this;
      var getAllTableRows = new Promise(/*#__PURE__*/function () {
        var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(resolve, reject) {
          var _this4$$refs$table;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.t0 = resolve;
                _context.next = 3;
                return (_this4$$refs$table = _this4.$refs.table) === null || _this4$$refs$table === void 0 || (_this4$$refs$table = _this4$$refs$table.tBodies) === null || _this4$$refs$table === void 0 ? void 0 : _this4$$refs$table[0].rows;
              case 3:
                _context.t1 = _context.sent;
                (0, _context.t0)(_context.t1);
              case 5:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }());
      getAllTableRows.then(function (res) {
        // console.log(res)
        // const tds = []
        // const tds2 = []
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
              if (_this4.$refs.sticky[dec] != undefined) {
                _this4.$refs.sticky[dec].style.right = size + "px";
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
            // console.log(row)
            if (_this4.isElementInViewport(row)) {
              tRows.push(row);
            }
          }
          // console.log("from response:", tRows.length)
          // if (tRows.length>1) {
          //     this.nbToShow = tRows.length - 2
          //     this.end = tRows.length - 2
          // }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      });
    },
    searchBackend: function searchBackend() {
      var _this5 = this;
      this.loadingSearch = false;
      if (!this.search) {
        this.rows = this.rows_backup;
        return;
      }
      if (this.search.length > 3) {
        this.loadingSearch = true;
        this.authBeforeRequest(function (args, user) {
          // console.log({args, user})

          var data = {
            "user_id": user.user_id,
            "role": user.role_uuid,
            query: _this5.search.toLowerCase()
          };
          _this5.$axios.post(_this5.reportex_link() + "reportex/api/v1/search-timesheets/", data).then(function (res) {
            // console.log({data: res.data})
            var rows = res.data.dossiers;
            rows.forEach(function (element) {
              element.timesheets = element.timesheets.filter(_this5.onlyUnique);
              // element.dapr = this.calcDAPR(element)
            });
            _this5.rows = _toConsumableArray(rows);
            _this5.makeItSticky();
            _this5.$toasted.show("Resultat de la recherche: " + _this5.rows.length + " dossiers trouvés");
          })["catch"](function (err) {
            console.dir(err);
            _this5.$toasted.show("erreur !");
          })["finally"](function () {
            _this5.loadingSearch = false;
          });
        }, {});
      }
    },
    loadTimesheets: function loadTimesheets() {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!(_this6.page && !isNaN(_this6.page))) {
                _context2.next = 3;
                break;
              }
              _context2.next = 3;
              return _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["default"].loadUserData().then(function (res) {
                _this6.loadRetrieved({
                  user_id: res.data.user_id,
                  role_id: res.data.role_uuid,
                  page: _this6.page
                });
              })["catch"](function (err) {
                _this6.loadWithError(err);
              });
            case 3:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    loadWithError: function loadWithError(err) {
      // console.log(err)
      window.location.href = "/login";
    },
    previousPage: function previousPage() {
      var _this7 = this;
      this.page = this.page - 1;
      _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["default"].loadUserData().then(function (res) {
        _this7.loadRetrieved({
          user_id: res.data.user_id,
          role_id: res.data.role_uuid,
          page: _this7.page
        });
      })["catch"](function (err) {
        _this7.loadWithError(err);
      });
    },
    nextPage: function nextPage() {
      var _this8 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _this8.page = _this8.page + 1;
              _context3.next = 3;
              return _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["default"].loadUserData().then(function (res) {
                _this8.loadRetrieved({
                  user_id: res.data.user_id,
                  role_id: res.data.role_uuid,
                  page: _this8.page
                });
              })["catch"](function (err) {
                _this8.loadWithError(err);
              });
            case 3:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    refreshTimesheets: function refreshTimesheets() {
      var _this9 = this;
      _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["default"].loadUserData().then(function (res) {
        // console.log({user_id: res.data.user_id, role_id: res.data.role_uuid})
        _this9.loadRetrieved({
          user_id: res.data.user_id,
          role_id: res.data.role_uuid
        });
      })["catch"](function (err) {
        _this9.loadWithError(err);
      });
    },
    roleObjFound: function roleObjFound(idx, timesheet) {
      var _timesheet$is_dossier;
      // console.log(idx, this.truncateName(timesheet?.is_dossier_delayed?.delayed_by_role))
      var a = this.truncateName(timesheet === null || timesheet === void 0 || (_timesheet$is_dossier = timesheet.is_dossier_delayed) === null || _timesheet$is_dossier === void 0 ? void 0 : _timesheet$is_dossier.delayed_by_role);
      if (a == this.roleObj[idx]['abbr']) {
        return true;
      }
      return false;
    },
    isElementInViewport: function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) /* or $(window).height() */
      // rect.left >= 0 &&
      // rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
      ;
    },
    sort: function sort(s) {
      // alert(this.filter === s)
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
      // console.log(outcome)
      if (outcome == 1) {
        return "dispatcheng";
      } else if (outcome == -1) {
        return "refused";
      }
      return "published";
    },
    dotColor: function dotColor(timesheets) {
      // const lastStage = timesheets.at(-1).stage_label
      // let color = "color_theme1_0"
      // if (lastStage == "Instruction du dossier") color = "color_theme1"
      // if (lastStage == "Contre analyse filiale") color = "color_theme2"
      // if (lastStage == "Contre analyse groupe") color = "color_theme3"
      // if (lastStage == "Contre analyse SCO") color = "color_theme4"
      // return color

      return timesheets.at(-1).color_theme;
      // let color = "color_theme1_0"
      // if (lastStage == "Instruction du dossier") color = "color_theme1"
      // if (lastStage == "Contre analyse filiale") color = "color_theme2"
      // if (lastStage == "Contre analyse groupe") color = "color_theme3"
      // if (lastStage == "Contre analyse SCO") color = "color_theme4"
      // return color
    },
    bgColor: function bgColor(stage_theme, currently_here) {
      // console.log("stage_theme", stage_theme)
      if (currently_here === true) {
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
    },
    calcDAPR: function calcDAPR(element) {
      var allTime = element.timesheets.map(function (el) {
        return el.completed_in;
      }).filter(function (el) {
        return el != null;
      }).reduce(function (obj, curr, index, list) {
        // if (index == 0)  {obj = {days:0, hours:0, minutes:0, seconds:0, totalMin:0}}
        obj.days += curr === null || curr === void 0 ? void 0 : curr[0];
        obj.hours += curr === null || curr === void 0 ? void 0 : curr[1];
        obj.minutes += curr === null || curr === void 0 ? void 0 : curr[2];
        obj.seconds += Math.round(curr === null || curr === void 0 ? void 0 : curr[3]);
        if (index == list.length - 1) {
          obj.totalMin = obj.days * 1440 + obj.hours * 60 + obj.minutes;
          if (obj.seconds >= 60) {
            obj.totalMin += Math.floor(obj.seconds / 60);
            obj.seconds = Math.ceil(obj.seconds % 60);
          }
          if (obj.totalMin >= 525600) return {
            text: "".concat(Math.floor(obj.totalMin / 525600), " ann\xE9es")
          };
          if (obj.totalMin >= 43800) return {
            text: "".concat(Math.floor(obj.totalMin / 43800), " mois")
          };
          if (obj.totalMin >= 1440) return {
            text: "".concat(Math.floor(obj.totalMin / 1440), " jours")
          };
          if (obj.totalMin >= 60) return {
            text: "".concat(Math.floor(obj.totalMin / 60), " heures")
          };
          if (obj.totalMin >= 1) return {
            text: "".concat(Math.floor(obj.totalMin), " minutes")
          };
          return {
            text: "".concat(obj.seconds, " secondes")
          };
          // return { minutes: obj.totalMin, seconds: obj.seconds, text: `${obj.totalMin}min ${obj.seconds}s` }
        }
        return obj;
      }, {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        totalMin: 0
      });
      return allTime;
    },
    showContextTooltip: function showContextTooltip(event, timesheet, element, dblclick) {
      if (timesheet !== null && timesheet !== void 0 && timesheet.currently_here || dblclick) {
        var _element$timesheets$;
        var cafStage = element.timesheets.filter(function (el) {
          return el.receiver_role.toLowerCase() == "chargé d'affaire";
        });
        this.$refs.tooltip.style.top = "".concat(event.clientY, "px");
        this.$refs.tooltip.style.left = "".concat(event.clientX, "px");
        if ([-1, 1].includes(timesheet === null || timesheet === void 0 ? void 0 : timesheet.outcome)) {
          if ((timesheet === null || timesheet === void 0 ? void 0 : timesheet.outcome) == 1) {
            this.contextText.title = (timesheet === null || timesheet === void 0 ? void 0 : timesheet.stage_label) + "(Clôturé avec avis favorable)";
          } else {
            this.contextText.title = (timesheet === null || timesheet === void 0 ? void 0 : timesheet.stage_label) + "(Clôturé avec avis non favorable)";
          }
        } else {
          this.contextText.title = timesheet === null || timesheet === void 0 ? void 0 : timesheet.stage_label;
        }
        this.contextText.caf = element === null || element === void 0 ? void 0 : element.monteur_doss;
        this.contextText.cafRole = (_element$timesheets$ = element.timesheets[0]) === null || _element$timesheets$ === void 0 ? void 0 : _element$timesheets$.receiver_role;
        this.contextText.currentUser = timesheet === null || timesheet === void 0 ? void 0 : timesheet.receiver_name;
        this.contextText.role = timesheet === null || timesheet === void 0 ? void 0 : timesheet.receiver_role;
        this.contextText.color = this.dotColor(element.timesheets);
        this.showContext = true;
      }
    },
    isTextRed: function isTextRed(elm) {
      return (elm === null || elm === void 0 ? void 0 : elm.toLowerCase()) === "filtre" || (elm === null || elm === void 0 ? void 0 : elm.toLowerCase()) === "fin";
    },
    isDark: function isDark(index, timesheets) {
      var result = Math.random() * 10 > 8;
      return timesheets;
    },
    truncateName: function truncateName(name) {
      if (!name) return;
      var list = this.roleObj;
      // const list = [
      //     // { abbr: "ENR", name: "File Recorder" },
      //     { abbr: "DISP", name: "Centrale Dispatcher" },
      //     { abbr: "CAF", name: "Chargé d'affaire" },
      //     { abbr: "CA", name: "Chef d'agence" },
      //     { abbr: "DEX", name: "Directeur d'exploitation" },
      //     { abbr: "DISPR", name: "Dispatcher Filiale" },
      //     { abbr: "ARC", name: "Vérificateur / Analyste crédit Filiale" },
      //     { abbr: "SRC", name: "Specialiste Risque Crédit Filiale" },
      //     { abbr: "DRC", name: "Directeur Risque Crédit Filiale" },
      //     { abbr: "CIC", name: "Comite Interne de Crédit" },
      //     { abbr: "DG", name: "Directeur Général filiale" },
      //     { abbr: "SCO1", name: "Senior Credit Officer (SCO1)" },
      //     { abbr: "SCO2", name: "Senior Credit Officer (SCO2)" },
      //     { abbr: "SCO3", name: "Senior Credit Officer (SCO3)" },
      //     { abbr: "SCO4", name: "Senior Credit Officer (SCO4)" },
      //     { abbr: "DR", name: "Directeur Regional" },
      //     { abbr: "DISPG", name: "Dispatcher Groupe" },
      //     { abbr: "SRCG", name: "Specialiste Risque Crédit Groupe" },
      //     { abbr: "DRCG", name: "Directeur Risque Crédit Groupe" },
      //     { abbr: "CSCG", name: "Comite Superieur de Crédit" },
      //     { abbr: "ENG", name: "Engagement" }
      // ]
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
      var _this0 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var _rows, _rows2, _rows3, _rows4;
        var rows;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _this0.user_id = res.user_id;
              _this0.role_id = res.role_id;
              _this0.loading = true;
              _context4.next = 5;
              return _this0.$axios.post(_this0.reportex_link() + 'reportex/api/v1/timesheets/', res);
            case 5:
              rows = _context4.sent;
              _this0.headers = (_rows = rows) === null || _rows === void 0 || (_rows = _rows.data) === null || _rows === void 0 ? void 0 : _rows.rolelist;
              _this0.roleObj = (_rows2 = rows) === null || _rows2 === void 0 || (_rows2 = _rows2.data) === null || _rows2 === void 0 ? void 0 : _rows2.role_and_sigle;
              _this0.totalPage = (_rows3 = rows) === null || _rows3 === void 0 || (_rows3 = _rows3.data) === null || _rows3 === void 0 ? void 0 : _rows3.max_page;
              rows = (_rows4 = rows) === null || _rows4 === void 0 || (_rows4 = _rows4.data) === null || _rows4 === void 0 ? void 0 : _rows4.timesheetslist;
              rows.forEach(function (element) {
                element.timesheets = element.timesheets.filter(_this0.onlyUnique);
                // element.dapr = this.calcDAPR(element)
              });
              _this0.rows_backup = rows;
              _this0.rows = rows;
              _this0.loading = false;
            case 14:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    },
    showStats: function showStats() {},
    completed_in: function completed_in() {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref2$received_date = _ref2.received_date,
        received_date = _ref2$received_date === void 0 ? null : _ref2$received_date,
        _ref2$completed_in = _ref2.completed_in,
        completed_in = _ref2$completed_in === void 0 ? null : _ref2$completed_in,
        _ref2$currently_here = _ref2.currently_here,
        currently_here = _ref2$currently_here === void 0 ? false : _ref2$currently_here,
        _ref2$is_paused = _ref2.is_paused,
        is_paused = _ref2$is_paused === void 0 ? false : _ref2$is_paused;
      // console.log('completed_in', 'date:', dateOrList, 'currently_here:', currently_here, 'paused:', is_paused)

      if (completed_in || received_date) {
        var days = 0,
          hours = 0,
          minutes = 0,
          seconds = 0;
        if (completed_in) {
          var list = completed_in.map(function (el) {
            return Math.abs(el);
          });
          days = list[0];
          hours = list[1];
          minutes = list[2];
          seconds = list[3];
        }
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
      var _this1 = this;
      return this.filteredRows.slice(this.start, this.end).sort(function (a, b) {
        var modifier = 1;
        if (_this1.currentSortDir === 'desc') modifier = -1;
        if (a[_this1.filter] < b[_this1.filter]) return -1 * modifier;
        if (a[_this1.filter] > b[_this1.filter]) return 1 * modifier;
        return 0;
      });
    },
    filteredRows: function filteredRows() {
      // if (this.search) {
      //     return this.rows.filter(el =>
      //         el.doss_name?.toString().toLowerCase().includes(this.search.toLowerCase()) ||
      //         el.numero_dossier?.toString().toLowerCase().includes(this.search.toLowerCase()) ||
      //         el.denomination_client?.toString().toLowerCase().includes(this.search.toLowerCase()) ||
      //         el.montant_credit?.toString().toLowerCase().includes(this.search.toLowerCase()))
      // }
      return this.rows;
    }
  },
  watch: {
    page: function page(val) {
      if (val > this.totalPage) this.page = this.totalPage;
    },
    loading: function loading() {
      var _this10 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              // if (!this.loading) {

              _this10.makeItSticky();
            case 1:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/TimesheetCredit.vue?vue&type=template&id=0b9c78ce&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/TimesheetCredit.vue?vue&type=template&id=0b9c78ce&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_c("h4", [_vm._v("Timesheet Crédit > Etat général & Situation des dossiers ")]), _vm._v(" "), _c("h6", {
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
  }, [_vm._v("/ " + _vm._s(_vm.totalPage))])])]) : _vm._e()])])])]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("div", {
    staticClass: "table-responsive m-0",
    staticStyle: {
      height: "500px"
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
        return _vm.sort("montant_credit");
      }
    }
  }, [_vm._v("\n                                Montant\n                                "), _vm._m(2)]), _vm._v(" "), _vm._l(_vm.headers, function (elm) {
    return _c("th", {
      key: elm,
      "class": {
        "text-danger": _vm.isTextRed(elm)
      },
      attrs: {
        "data-toggle": "tooltip",
        title: elm
      }
    }, [_vm._v("\n                                " + _vm._s(_vm.truncateName(elm)) + "\n                            ")]);
  }), _vm._v(" "), _vm._l(_vm.otherHeaders, function (i, index) {
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
    }, [_vm._v(_vm._s(i))]);
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
      }
    }, [_c("td", {
      staticClass: "sticky-left position-sticky",
      staticStyle: {
        background: "rgb(235, 235, 235)",
        "min-width": "100px",
        "z-index": "2"
      }
    }, [_vm._v("\n                                " + _vm._s(++idx) + "\n                                ")]), _vm._v(" "), _c("td", {
      staticClass: "align-middle sticky-left staticLeft position-sticky",
      staticStyle: {
        background: "rgb(235, 235, 235)",
        "min-width": "100px",
        "z-index": "2"
      },
      attrs: {
        title: elm.doss_name
      }
    }, [_c("div", {
      staticClass: "d-flex justify-content-start align-items-center px-1 btn-simple",
      attrs: {
        role: "button"
      },
      on: {
        click: function click($event) {
          return _vm.shareAndOpen(elm.cred_pub_key);
        }
      }
    }, [_c("div", {
      staticClass: "me-1 align-items-center",
      "class": _vm.dotColor(elm.timesheets),
      staticStyle: {
        display: "inline-block",
        width: "10px",
        height: "10px",
        "border-radius": "50%"
      }
    }), _vm._v(" "), _c("div", [_vm._v("\n\n                                                " + _vm._s(_vm._f("textTruncate")(elm.numero_dossier, 6, "fromEnd")) + "\n                                        ")])])]), _vm._v(" "), _c("td", {
      staticClass: "align-middle sticky-left staticLeft position-sticky btn-simple",
      staticStyle: {
        background: "rgb(235, 235, 235)",
        "min-width": "100px",
        "z-index": "2"
      },
      attrs: {
        role: "button",
        title: elm.denomination_client
      },
      on: {
        click: function click($event) {
          return _vm.shareAndOpen(elm.cred_pub_key);
        }
      }
    }, [_vm._v("\n                                    " + _vm._s(_vm._f("textTruncate")(elm.denomination_client, 20)) + "\n                                ")]), _vm._v(" "), _c("td", {
      staticClass: "align-middle sticky-left staticLeft position-sticky",
      staticStyle: {
        background: "rgb(235, 235, 235)",
        "min-width": "100px",
        "z-index": "2"
      }
    }, [_vm._v("\n                                    " + _vm._s(_vm._f("formatNumber")(elm.montant_credit)) + "\n                                ")]), _vm._v(" "), _vm._l(_vm.countList, function (i) {
      var _elm$timesheets$i, _elm$timesheets$i2, _elm$timesheets$i3, _elm$timesheets$i4, _elm$timesheets$i5, _elm$timesheets$i6, _elm$timesheets$i7, _elm$timesheets$i8, _elm$timesheets$i9, _elm$timesheets$i0, _elm$timesheets$i1, _elm$timesheets$i10, _elm$timesheets$i11, _elm$timesheets$i12, _elm$timesheets$i13, _elm$timesheets$i14, _elm$timesheets$i15, _elm$timesheets$i16, _elm$timesheets$i17, _elm$timesheets$i18;
      return _c("td", {
        key: "algo#" + i,
        staticClass: "text-center align-middle",
        "class": _vm.bgColor((_elm$timesheets$i = elm.timesheets[i]) === null || _elm$timesheets$i === void 0 ? void 0 : _elm$timesheets$i.color_theme, (_elm$timesheets$i2 = elm.timesheets[i]) === null || _elm$timesheets$i2 === void 0 ? void 0 : _elm$timesheets$i2.currently_here),
        on: {
          click: function click($event) {
            return _vm.showContextTooltip($event, elm.timesheets[i], elm, true);
          },
          mouseenter: function mouseenter($event) {
            return _vm.showContextTooltip($event, elm.timesheets[i], elm);
          },
          mouseleave: function mouseleave($event) {
            _vm.showContext = false;
          }
        }
      }, [(_elm$timesheets$i3 = elm.timesheets[i]) !== null && _elm$timesheets$i3 !== void 0 && _elm$timesheets$i3.currently_here ? _c("span", [elm.is_ajournee ? _c("span", [_vm._v("Dossier Ajourné")]) : _vm._e(), _vm._v(" "), [-1, 1].includes((_elm$timesheets$i4 = elm.timesheets[i]) === null || _elm$timesheets$i4 === void 0 ? void 0 : _elm$timesheets$i4.outcome) ? _c("i", {
        staticClass: "icofont-ui-pause m-1",
        staticStyle: {
          color: "white"
        }
      }) : _c("i", {
        staticClass: "icofont-ui-play m-1",
        staticStyle: {
          color: "white"
        }
      }), _vm._v(" "), ![-1, 1].includes((_elm$timesheets$i5 = elm.timesheets[i]) === null || _elm$timesheets$i5 === void 0 ? void 0 : _elm$timesheets$i5.outcome) ? _c("span", [_vm._v("\n                                            " + _vm._s(_vm.completed_in({
        received_date: (_elm$timesheets$i6 = elm.timesheets[i]) === null || _elm$timesheets$i6 === void 0 ? void 0 : _elm$timesheets$i6.received_date,
        completed_in: (_elm$timesheets$i7 = elm.timesheets[i]) === null || _elm$timesheets$i7 === void 0 ? void 0 : _elm$timesheets$i7.completed_in,
        currently_here: (_elm$timesheets$i8 = elm.timesheets[i]) === null || _elm$timesheets$i8 === void 0 ? void 0 : _elm$timesheets$i8.currently_here,
        is_paused: [-1, 1].includes((_elm$timesheets$i9 = elm.timesheets[i]) === null || _elm$timesheets$i9 === void 0 ? void 0 : _elm$timesheets$i9.outcome)
      })) + "\n                                        ")]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c("br"), _vm._v(" "), ![-1, 1].includes((_elm$timesheets$i0 = elm.timesheets[i]) === null || _elm$timesheets$i0 === void 0 ? void 0 : _elm$timesheets$i0.outcome) ? _c("span", [((_elm$timesheets$i1 = elm.timesheets[i]) === null || _elm$timesheets$i1 === void 0 || (_elm$timesheets$i1 = _elm$timesheets$i1.is_dossier_delayed) === null || _elm$timesheets$i1 === void 0 ? void 0 : _elm$timesheets$i1.is_delayed) == true && _vm.roleObjFound(i, elm.timesheets[i]) ? _c("span", [_c("i", {
        staticClass: "icofont-ui-alarm",
        staticStyle: {
          color: "white"
        }
      }), _vm._v("\n                                            " + _vm._s(_vm.completed_in({
        completed_in: (_elm$timesheets$i10 = elm.timesheets[i]) === null || _elm$timesheets$i10 === void 0 || (_elm$timesheets$i10 = _elm$timesheets$i10.is_dossier_delayed) === null || _elm$timesheets$i10 === void 0 ? void 0 : _elm$timesheets$i10.delta,
        currently_here: (_elm$timesheets$i11 = elm.timesheets[i]) === null || _elm$timesheets$i11 === void 0 ? void 0 : _elm$timesheets$i11.currently_here,
        is_paused: [-1, 1].includes((_elm$timesheets$i12 = elm.timesheets[i]) === null || _elm$timesheets$i12 === void 0 ? void 0 : _elm$timesheets$i12.outcome)
      })) + "\n                                        ")]) : _vm._e()]) : _vm._e(), _vm._v(" "), !((_elm$timesheets$i13 = elm.timesheets[i]) !== null && _elm$timesheets$i13 !== void 0 && _elm$timesheets$i13.currently_here) || [-1, 1].includes((_elm$timesheets$i14 = elm.timesheets[i]) === null || _elm$timesheets$i14 === void 0 ? void 0 : _elm$timesheets$i14.outcome) ? _c("span", [_vm._v("\n                                        " + _vm._s(_vm.completed_in({
        received_date: (_elm$timesheets$i15 = elm.timesheets[i]) === null || _elm$timesheets$i15 === void 0 ? void 0 : _elm$timesheets$i15.received_date,
        completed_in: (_elm$timesheets$i16 = elm.timesheets[i]) === null || _elm$timesheets$i16 === void 0 ? void 0 : _elm$timesheets$i16.completed_in,
        currently_here: (_elm$timesheets$i17 = elm.timesheets[i]) === null || _elm$timesheets$i17 === void 0 ? void 0 : _elm$timesheets$i17.currently_here,
        is_paused: [-1, 1].includes((_elm$timesheets$i18 = elm.timesheets[i]) === null || _elm$timesheets$i18 === void 0 ? void 0 : _elm$timesheets$i18.outcome)
      })) + "\n                                    ")]) : _vm._e()]);
    }), _vm._v(" "), _vm._l(_vm.otherHeaders.length, function (i, index) {
      var _elm$eng_monitoring, _elm$eng_monitoring2, _elm$eng_monitoring3, _elm$eng_monitoring4, _elm$eng_monitoring5, _elm$eng_monitoring6, _elm$eng_monitoring7;
      return _c("td", {
        key: i + index,
        staticClass: "align-middle static position-sticky sticky-right",
        staticStyle: {
          background: "rgb(235, 235, 235)",
          "min-width": "100px",
          "z-index": "2"
        }
      }, [index == 0 ? _c("span", {}, [elm.mise_en_place == true ? _c("span", {
        staticClass: "eng1",
        attrs: {
          title: "Dossier mis en place"
        }
      }, [_vm._v("\n                                            Mis en place\n                                        ")]) : elm.engagement == true ? _c("span", [elm.eng_monitoring == null ? _c("span", {
        staticClass: "eng1"
      }, [_vm._v("\n                                                Dispatcher des engagements\n                                            ")]) : _vm._e(), _vm._v(" "), (_elm$eng_monitoring = elm.eng_monitoring) !== null && _elm$eng_monitoring !== void 0 && _elm$eng_monitoring.is_with_CDE ? _c("span", {
        attrs: {
          title: "Chef Departement Engagement"
        }
      }, [_c("span", {
        staticClass: "eng1"
      }, [_vm._v("\n                                                    Chef des engagements\n                                                ")]), _vm._v(" "), elm !== null && elm !== void 0 && (_elm$eng_monitoring2 = elm.eng_monitoring) !== null && _elm$eng_monitoring2 !== void 0 && (_elm$eng_monitoring2 = _elm$eng_monitoring2.eng_CDE) !== null && _elm$eng_monitoring2 !== void 0 && _elm$eng_monitoring2.name ? _c("span", {
        staticClass: "name-badge"
      }, [_vm._v("\n                                                    " + _vm._s(elm === null || elm === void 0 || (_elm$eng_monitoring3 = elm.eng_monitoring) === null || _elm$eng_monitoring3 === void 0 || (_elm$eng_monitoring3 = _elm$eng_monitoring3.eng_CDE) === null || _elm$eng_monitoring3 === void 0 ? void 0 : _elm$eng_monitoring3.name) + "\n                                                ")]) : _vm._e()]) : _vm._e(), _vm._v(" "), (_elm$eng_monitoring4 = elm.eng_monitoring) !== null && _elm$eng_monitoring4 !== void 0 && _elm$eng_monitoring4.is_with_CE ? _c("span", {
        attrs: {
          title: "Chargé des Engagement"
        }
      }, [_c("span", {
        staticClass: "eng1"
      }, [_vm._v("\n                                                    Chargé des engagements\n                                                ")]), _vm._v(" "), elm !== null && elm !== void 0 && (_elm$eng_monitoring5 = elm.eng_monitoring) !== null && _elm$eng_monitoring5 !== void 0 && _elm$eng_monitoring5.eng_CE.name ? _c("span", {
        staticClass: "name-badge"
      }, [_vm._v("\n                                                    " + _vm._s(elm === null || elm === void 0 || (_elm$eng_monitoring6 = elm.eng_monitoring) === null || _elm$eng_monitoring6 === void 0 || (_elm$eng_monitoring6 = _elm$eng_monitoring6.eng_CE) === null || _elm$eng_monitoring6 === void 0 ? void 0 : _elm$eng_monitoring6.name) + "\n                                                ")]) : _vm._e()]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c("br"), _vm._v(" "), elm.mise_en_place ? _c("small", [_vm._v(_vm._s((_elm$eng_monitoring7 = elm.eng_monitoring) === null || _elm$eng_monitoring7 === void 0 || (_elm$eng_monitoring7 = _elm$eng_monitoring7.eng_CE) === null || _elm$eng_monitoring7 === void 0 ? void 0 : _elm$eng_monitoring7.name))]) : _vm._e()]) : _vm._e(), _vm._v(" "), index == 1 ? _c("span", [elm.is_published ? _c("span", {
        "class": _vm.ischezEng(elm.outcome_)
      }, [[-1, 1].includes(elm.outcome_) ? _c("i", {
        staticClass: "icofont-ui-pause m-1",
        staticStyle: {
          color: "white"
        }
      }) : _c("i", {
        staticClass: "icofont-ui-play m-1",
        staticStyle: {
          color: "white"
        }
      }), _vm._v("\n                                            " + _vm._s(_vm.completed_in({
        completed_in: elm.delais_apr,
        currently_here: true,
        is_paused: [-1, 1].includes(elm.outcome_)
      })) + "\n                                            "), _c("br"), _vm._v(" "), elm.outcome_ == -1 ? _c("small", [_vm._v(" cloturé avec avis défavorable")]) : _vm._e()]) : _c("span", {
        staticClass: "not-published"
      }, [[-102, -101, -100].includes(elm.current_stage_) ? _c("span", [_vm._v("\n                                            Non dispatché\n                                            ")]) : _c("span", [_vm._v("\n                                            Non publié\n                                            ")])])]) : _vm._e(), _vm._v(" "), index == 2 ? _c("span", [elm.delais_mep ? _c("span", [_vm._v("\n                                            " + _vm._s(_vm.completed_in({
        completed_in: elm.delais_mep,
        currently_here: true,
        is_paused: [-1, 1].includes(elm.outcome_)
      })) + "\n                                        ")]) : _vm._e()]) : _vm._e()]);
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

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/TimesheetCredit.vue?vue&type=style&index=0&id=0b9c78ce&lang=css&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/TimesheetCredit.vue?vue&type=style&index=0&id=0b9c78ce&lang=css&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n#search[data-v-0b9c78ce] {\r\n    box-shadow: none !important;\r\n    outline: none !important;\r\n    border: 1px solid lightgrey\n}\n#search[data-v-0b9c78ce]:valid,\r\n#search[data-v-0b9c78ce]:focus {\r\n    box-shadow: none !important;\r\n    outline: none !important;\r\n    border: 1px solid lightgrey\n}\ntd[data-v-0b9c78ce] {\r\n    min-width: 6vw\n}\n.eng1[data-v-0b9c78ce] {\r\n    background: rgba(255, 0, 0, 0.1);\r\n    color: red;\r\n    padding: 1px 5px;\r\n    border-radius: 3px;\n}\n.not-published[data-v-0b9c78ce] {\r\n    background: rgba(255, 0, 0, 0.1);\r\n    color: red;\r\n    padding: 1px 5px;\r\n    border-radius: 3px;\n}\n.dispatcheng[data-v-0b9c78ce] {\r\n    background: rgba(39, 174, 96, 1);\r\n    color: white;\r\n    padding: 1px 3px;\r\n    border-radius: 3px;\r\n    display: inline-block;\r\n    width: 180px;\n}\n.published[data-v-0b9c78ce] {\r\n    background: rgb(0, 110, 110);\r\n    color: white;\r\n    padding: 1px 3px;\r\n    border-radius: 3px;\r\n    display: inline-block;\r\n    width: 180px;\n}\n.refused[data-v-0b9c78ce] {\r\n    background: rgba(192, 57, 43, 1);\r\n    color: white;\r\n    padding: 1px 3px;\r\n    border-radius: 3px;\r\n    display: inline-block;\r\n    width: 180px;\n}\n.name-badge[data-v-0b9c78ce] {\r\n    background: rgba(52, 73, 94, 0.8);\r\n    color: white;\r\n    padding: 1px 3px;\r\n    border-radius: 3px;\r\n    display: inline-block;\r\n    margin-top: 10px;\r\n    width: 180px;\n}\n.bg-dark[data-v-0b9c78ce] {\r\n    background-color: rgb(11, 0, 34);\r\n    font-weight: bold;\r\n    min-height: 25px;\r\n    height: auto\n}\n.color_theme5_0[data-v-0b9c78ce] {\r\n  box-shadow: inset 0vh 5vh 2vh 150vh rgba(192, 57, 43, 1);\n}\n.color_theme5_1[data-v-0b9c78ce] {\r\n  box-shadow: inset 0vh 5vh 2vh 150vh rgba(39, 174, 96, 1);\n}\n.color_theme4[data-v-0b9c78ce] {\r\n    box-shadow: inset 0vh 5vh 2vh 150vh rgba(24, 122, 53, 0.8);\n}\n.color_theme2[data-v-0b9c78ce] {\r\n    box-shadow: inset 0vh 5vh 2vh 150vh rgba(237, 28, 36, 0.8);\n}\n.color_theme2_0[data-v-0b9c78ce] {\r\n    box-shadow: inset 0vh 5vh 2vh 150vh rgba(155, 89, 182, 0.8);\n}\n.color_theme1_0[data-v-0b9c78ce] {\r\n    box-shadow: inset 0vh 5vh 2vh 150vh rgba(52, 73, 94, 0.8);\n}\n.color_theme1[data-v-0b9c78ce] {\r\n    box-shadow: inset 0vh 5vh 2vh 150vh rgba(69, 170, 242, 0.8);\n}\n.color_theme3[data-v-0b9c78ce] {\r\n    box-shadow: inset 0vh 5vh 2vh 150vh rgba(235, 126, 34, 0.8);\n}\n.color_theme8_0[data-v-0b9c78ce] {\r\n    box-shadow: inset 0vh 5vh 2vh 150vh rgb(255, 196, 18 , 0.8);\n}\n.color_theme8[data-v-0b9c78ce] {\r\n    box-shadow: inset 0vh 5vh 2vh 150vh rgb(238, 90, 36, 0.8);\n}\n.color_theme9_0[data-v-0b9c78ce] {\r\n    box-shadow: inset 0vh 5vh 2vh 150vh rgb(196, 229, 56, 0.8);\n}\n.color_theme9[data-v-0b9c78ce] {\r\n    box-shadow: inset 0vh 5vh 2vh 150vh rgb(0, 148, 50, 0.8);\n}\n.color_theme10_0[data-v-0b9c78ce] {\r\n    box-shadow: inset 0vh 5vh 2vh 150vh rgb(18, 203, 196, 0.8);\n}\n.color_theme10[data-v-0b9c78ce] {\r\n    box-shadow: inset 0vh 5vh 2vh 150vh rgb(6, 82, 217, 0.8);\n}\n.color_theme11_0[data-v-0b9c78ce] {\r\n    box-shadow: inset 0vh 5vh 2vh 150vh rgb(250, 173, 255, 0.8);\n}\n.color_theme11[data-v-0b9c78ce] {\r\n    box-shadow: inset 0vh 5vh 2vh 150vh rgb(153, 128, 250, 0.8);\n}\n.table-responsive[data-v-0b9c78ce] {\r\n    position: relative !important;\n}\nthead>tr[data-v-0b9c78ce]:first-child {\r\n    position: sticky;\r\n    top: 0;\n}\nth[data-v-0b9c78ce] {\r\n    position: sticky !important;\r\n    top: 0;\r\n    z-index: 1;\r\n    font-size: 0.8rem;\n}\n@media screen and (max-width:1140px){\n.staticLeft[data-v-0b9c78ce],.static[data-v-0b9c78ce] {\r\n      position: static !important;\n}\n}\n.context-menu[data-v-0b9c78ce] {\r\n    position: fixed;\r\n    min-width: 300px;\r\n    max-width: 350px;\r\n    max-height: 350px;\r\n    overflow: auto;\r\n    z-index: 100;\r\n    background-color: #fff;\r\n    border-radius: 4px;\r\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .1), 0 3px 4px 0 rgba(0, 0, 0, .1)\n}\n.bg-bl[data-v-0b9c78ce]{\r\n  background:#0abde3;\n}\n.bgColor-theme1_0[data-v-0b9c78ce] {\r\n    background-color: rgba(52, 73, 94, 0.8);\r\n    color:white;\n}\n.bgColor-theme1[data-v-0b9c78ce] {\r\n    background-color: rgba(69, 170, 242, 0.8);\r\n    color:white;\n}\n.bgColor-theme2[data-v-0b9c78ce] {\r\n    background-color:rgba(237, 28, 36, 0.8);\r\n    color:white;\n}\n.bgColor-theme2_0[data-v-0b9c78ce] {\r\n    background-color:rgba(155, 89, 182, 0.8);\r\n    color:white;\n}\n.bgColor-theme3[data-v-0b9c78ce] {\r\n    background-color:rgba(235, 126, 34, 0.8);\r\n    color:white;\n}\n.bgColor-theme4[data-v-0b9c78ce] {\r\n    background-color:rgba(24, 122, 53, 0.8);\r\n    color:white;\n}\n.bgColor-theme5_0[data-v-0b9c78ce] {\r\n    background-color:rgba(192, 57, 43, 1);\r\n    color:white;\n}\n.bgColor-theme5_1[data-v-0b9c78ce] {\r\n    background-color: rgba(39, 174, 96, 1);\r\n    color:white;\n}\ntbody td[data-v-0b9c78ce] {\r\n  min-width : 130px !important;\n}\n.v-enter-active[data-v-0b9c78ce],\r\n.v-leave-active[data-v-0b9c78ce] {\r\n  transition: opacity 0.5s ease;\n}\n.v-enter-from[data-v-0b9c78ce],\r\n.v-leave-to[data-v-0b9c78ce] {\r\n  opacity: 0;\n}\n.tag[data-v-0b9c78ce] {\r\n    padding: 0.25rem;\r\n    border-radius: 5px;\n}\n.tag.tag-primary[data-v-0b9c78ce] {\r\n    background: #0d6dfd23;\r\n    color: var(--bs-primary);\n}\n.tag.tag-success[data-v-0b9c78ce] {\r\n    background: rgba(25, 135, 84, .09);\r\n    color: rgba(39, 174, 96, 1);\n}\n.tag.tag-warning[data-v-0b9c78ce] {\r\n    background: rgba(25, 135, 84, .09);\r\n    color: rgba(39, 174, 96, 1);\n}\n.rotate[data-v-0b9c78ce] {\r\n    display: inline-block;\r\n    animation: rotate-0b9c78ce 1s ease infinite;\r\n    transform: rotate(0deg);\n}\n@keyframes rotate-0b9c78ce {\n0% {\r\n        transform: rotate(0deg);\n}\n100% {\r\n        transform: rotate(1turn);\n}\n}\n.btn-simple[data-v-0b9c78ce]:hover {\r\n    background: rgba(128, 128, 128, 0.196);\r\n    color: rgb(58, 58, 58);\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/TimesheetCredit.vue?vue&type=style&index=0&id=0b9c78ce&lang=css&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/TimesheetCredit.vue?vue&type=style&index=0&id=0b9c78ce&lang=css&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TimesheetCredit_vue_vue_type_style_index_0_id_0b9c78ce_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TimesheetCredit.vue?vue&type=style&index=0&id=0b9c78ce&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/TimesheetCredit.vue?vue&type=style&index=0&id=0b9c78ce&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TimesheetCredit_vue_vue_type_style_index_0_id_0b9c78ce_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TimesheetCredit_vue_vue_type_style_index_0_id_0b9c78ce_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/reportex/TimesheetCredit.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/reportex/TimesheetCredit.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TimesheetCredit_vue_vue_type_template_id_0b9c78ce_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TimesheetCredit.vue?vue&type=template&id=0b9c78ce&scoped=true */ "./resources/js/components/reportex/TimesheetCredit.vue?vue&type=template&id=0b9c78ce&scoped=true");
/* harmony import */ var _TimesheetCredit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TimesheetCredit.vue?vue&type=script&lang=js */ "./resources/js/components/reportex/TimesheetCredit.vue?vue&type=script&lang=js");
/* harmony import */ var _TimesheetCredit_vue_vue_type_style_index_0_id_0b9c78ce_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TimesheetCredit.vue?vue&type=style&index=0&id=0b9c78ce&lang=css&scoped=true */ "./resources/js/components/reportex/TimesheetCredit.vue?vue&type=style&index=0&id=0b9c78ce&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TimesheetCredit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _TimesheetCredit_vue_vue_type_template_id_0b9c78ce_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _TimesheetCredit_vue_vue_type_template_id_0b9c78ce_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "0b9c78ce",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/reportex/TimesheetCredit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/reportex/TimesheetCredit.vue?vue&type=script&lang=js":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/reportex/TimesheetCredit.vue?vue&type=script&lang=js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TimesheetCredit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TimesheetCredit.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/TimesheetCredit.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TimesheetCredit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/reportex/TimesheetCredit.vue?vue&type=style&index=0&id=0b9c78ce&lang=css&scoped=true":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/reportex/TimesheetCredit.vue?vue&type=style&index=0&id=0b9c78ce&lang=css&scoped=true ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TimesheetCredit_vue_vue_type_style_index_0_id_0b9c78ce_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TimesheetCredit.vue?vue&type=style&index=0&id=0b9c78ce&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/TimesheetCredit.vue?vue&type=style&index=0&id=0b9c78ce&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/reportex/TimesheetCredit.vue?vue&type=template&id=0b9c78ce&scoped=true":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/reportex/TimesheetCredit.vue?vue&type=template&id=0b9c78ce&scoped=true ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TimesheetCredit_vue_vue_type_template_id_0b9c78ce_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TimesheetCredit_vue_vue_type_template_id_0b9c78ce_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TimesheetCredit_vue_vue_type_template_id_0b9c78ce_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TimesheetCredit.vue?vue&type=template&id=0b9c78ce&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/reportex/TimesheetCredit.vue?vue&type=template&id=0b9c78ce&scoped=true");


/***/ })

}]);