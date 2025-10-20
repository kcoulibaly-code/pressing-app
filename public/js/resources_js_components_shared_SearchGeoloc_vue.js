"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_shared_SearchGeoloc_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/SearchGeoloc.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/SearchGeoloc.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "search-geoloc",
  props: {
    user: Object,
    advancedBtnClass: {
      type: String,
      "default": "input-group-text   rounded border-0"
    },
    color: {
      type: String,
      "default": "#29e"
    },
    inputClass: {
      type: String,
      "default": "form-control default darker  shadow-none border-0"
    },
    parentClass: {
      type: String,
      "default": "input-group darker  shadow-none"
    },
    customSearch: {
      type: Boolean,
      "default": false
    },
    customClickHandler: {
      type: Boolean,
      "default": false
    },
    placeholder: {
      type: String,
      "default": "Recherche ..."
    },
    ableAdvancedBtn: {
      type: Boolean,
      "default": true
    },
    take: {
      // 'full' to take full object
      type: String,
      "default": 'cred_pub_key'
    },
    changementCond: {
      type: Object
    },
    geolocKey: {
      type: Object
    },
    activeMenu: {
      type: Object,
      "default": {
        slug: "accueil"
      }
    }
  },
  beforeCreate: function beforeCreate() {
    // Credit.loadCredits()
    // .then(res => this.credits = res.data)
  },
  mounted: function mounted() {
    var _this = this;
    EventBus.$on("updateSearchFiliale", function (event) {
      _this.filiale = event;
    });
  },
  created: function created() {
    var _this2 = this;
    // this.transformInput()

    this.$axios.post(this.ebapisHost + 'creditbuilder/api/v1/get-all-access-roles/', {}).then(function (res) {
      _this2.all_access_roles = res.data.all_access;
      _this2.superviseurs = res.data.superviseurs;
    })["catch"](function (err) {
      return console.error(err);
    });
  },
  computed: {
    itemsLength: function itemsLength() {
      return this.items.length;
    }
  },
  data: function data() {
    return {
      opened: false,
      stayOpened: false,
      advanced: false,
      items: [],
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_1__["default"].host,
      type_search: null,
      montant_inf: '',
      montant_sup: '',
      keyword: '',
      recherches: [{
        search: "Demandes en cours"
      }, {
        search: "Demandes en traités"
      }, {
        search: "Géolocalisé par le client"
      }, {
        search: "Géolocalisé moi"
      }],
      filiale: ""
    };
  },
  methods: {
    searchAdd: function searchAdd(elm) {
      var _this3 = this;
      this.advanced = !this.advanced;
      var getInput = new Promise(/*#__PURE__*/function () {
        var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(resolve, reject) {
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.t0 = resolve;
                _context.next = 3;
                return elm.target.offsetParent.offsetParent.childNodes;
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
      getInput.then(function (res) {
        if (_this3.advanced == true) {
          // console.log(res[2].firstChild.childNodes[4].firstChild.firstChild.childNodes[2])
          var mtminInp = res[2].firstChild.childNodes[2].firstChild.firstChild.childNodes[2];
          var mtminLabel = res[2].firstChild.childNodes[2].firstChild.firstChild.childNodes[0];
          mtminInp.addEventListener("focus", function () {
            mtminLabel.style.width = "0";
            mtminLabel.style.overflow = "hidden";
          });
          var mtmmaxInp = res[2].firstChild.childNodes[4].firstChild.firstChild.childNodes[2];
          var mtmmaxLabel = res[2].firstChild.childNodes[4].firstChild.firstChild.childNodes[0];
          mtmmaxInp.addEventListener("focus", function () {
            mtmmaxLabel.style.width = "0";
            mtmmaxLabel.style.overflow = "hidden";
          });
        }
      });
    },
    clickHandler: function clickHandler(item) {
      var _this$all_access_role,
        _this$user,
        _this$superviseurs,
        _this$user2,
        _this4 = this;
      this.stayOpened = false;
      if (this.customClickHandler) {
        // this.$emit('selected', item.cred_pub_key)
        if (this.take === 'full') {
          this.$emit('selected', item);
          return;
        }
        this.$emit('selected', item[this.take]);
        return;
      }
      if ((_this$all_access_role = this.all_access_roles) !== null && _this$all_access_role !== void 0 && _this$all_access_role.includes((_this$user = this.user) === null || _this$user === void 0 ? void 0 : _this$user.role_uuid) || (_this$superviseurs = this.superviseurs) !== null && _this$superviseurs !== void 0 && _this$superviseurs.includes((_this$user2 = this.user) === null || _this$user2 === void 0 ? void 0 : _this$user2.role_uuid)) {
        this.$axios.post(this.ebapisHost + 'workflowbuilder/api/v1/sharedocs/', {
          list_of_keys: [item.cred_pub_key],
          user_id: this.user.user_id,
          message: "Partage dans le but de voir dans visualizer",
          tables: [],
          senders: this.user
        }).then(function (res) {
          var _this4$user;
          console.log("%cDossier partagé avec succès", 'color: #2a2');
          if (((_this4$user = _this4.user) === null || _this4$user === void 0 ? void 0 : _this4$user.role_uuid) == "GHnev410Ua1vDIot") _this4.$router.push({
            name: "creation",
            params: {
              templateId: item.cred_pub_key
            }
          });else _this4.$router.push({
            name: "creation",
            params: {
              templateId: item.cred_pub_key
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
            templateId: item.cred_pub_key
          },
          query: {
            view_only: 1
          }
        });
      }
    },
    convertNumber: function convertNumber(str) {
      return Number(str.toString().replace(/\s+/g, ''));
    },
    searchFolder: function searchFolder() {
      var _this$keyword;
      // if (this.customSearch) {
      //     this.$emit('search', this.keyword)
      //     return
      // }
      if (((_this$keyword = this.keyword) === null || _this$keyword === void 0 ? void 0 : _this$keyword.length) > 0) {
        var _this$activeMenu, _this$activeMenu2, _this$activeMenu3, _this$activeMenu6, _this$activeMenu7, _this$activeMenu8;
        if (['accueil'].includes((_this$activeMenu = this.activeMenu) === null || _this$activeMenu === void 0 ? void 0 : _this$activeMenu.slug)) {
          this.searchFromEbapis(this.activeMenu);
        }
        if (['clients'].includes((_this$activeMenu2 = this.activeMenu) === null || _this$activeMenu2 === void 0 ? void 0 : _this$activeMenu2.slug)) {
          this.searchClientFromSelf(this.activeMenu);
        }
        // 
        if (['localisation'].includes((_this$activeMenu3 = this.activeMenu) === null || _this$activeMenu3 === void 0 ? void 0 : _this$activeMenu3.slug)) {
          var _this$activeMenu4, _this$activeMenu5;
          if (((_this$activeMenu4 = this.activeMenu) === null || _this$activeMenu4 === void 0 || (_this$activeMenu4 = _this$activeMenu4.ss_obj) === null || _this$activeMenu4 === void 0 ? void 0 : _this$activeMenu4.geolocalisation) == true) {
            this.searchFromEbapis(this.activeMenu);
          }
          if (((_this$activeMenu5 = this.activeMenu) === null || _this$activeMenu5 === void 0 || (_this$activeMenu5 = _this$activeMenu5.ss_obj) === null || _this$activeMenu5 === void 0 ? void 0 : _this$activeMenu5.request_geoloc) == true) {
            this.searchFromSelf(this.activeMenu);
          }
          // console.log('localisation')
        }
        if (['visite'].includes((_this$activeMenu6 = this.activeMenu) === null || _this$activeMenu6 === void 0 ? void 0 : _this$activeMenu6.slug)) {
          this.searchFromEbapis(this.activeMenu);
        }
        if (['photos'].includes((_this$activeMenu7 = this.activeMenu) === null || _this$activeMenu7 === void 0 ? void 0 : _this$activeMenu7.slug)) {
          this.searchFromEbapis(this.activeMenu);
        }
        if (['prospections'].includes((_this$activeMenu8 = this.activeMenu) === null || _this$activeMenu8 === void 0 ? void 0 : _this$activeMenu8.slug)) {
          this.searchFromEbapis(this.activeMenu);
        }
      } else {
        var _this$activeMenu9, _this$activeMenu0, _this$activeMenu1, _this$activeMenu10;
        if (((_this$activeMenu9 = this.activeMenu) === null || _this$activeMenu9 === void 0 ? void 0 : _this$activeMenu9.slug) == 'prospections') {
          EventBus.$emit('search-prospection', []);
          return;
        }
        if (((_this$activeMenu0 = this.activeMenu) === null || _this$activeMenu0 === void 0 ? void 0 : _this$activeMenu0.slug) == 'visite') {
          EventBus.$emit('search-visite', []);
          return;
        }
        if (((_this$activeMenu1 = this.activeMenu) === null || _this$activeMenu1 === void 0 ? void 0 : _this$activeMenu1.slug) == 'clients') {
          EventBus.$emit('search-clients', []);
          return;
        }
        if (['localisation'].includes((_this$activeMenu10 = this.activeMenu) === null || _this$activeMenu10 === void 0 ? void 0 : _this$activeMenu10.slug)) {
          var _this$activeMenu11, _this$activeMenu12;
          if (((_this$activeMenu11 = this.activeMenu) === null || _this$activeMenu11 === void 0 || (_this$activeMenu11 = _this$activeMenu11.ss_obj) === null || _this$activeMenu11 === void 0 ? void 0 : _this$activeMenu11.geolocalisation) == true) {
            EventBus.$emit('search-localisation-ebapis', []);
            return;
          }
          if (((_this$activeMenu12 = this.activeMenu) === null || _this$activeMenu12 === void 0 || (_this$activeMenu12 = _this$activeMenu12.ss_obj) === null || _this$activeMenu12 === void 0 ? void 0 : _this$activeMenu12.request_geoloc) == true) {
            EventBus.$emit('search-localisation-self', []);
            return;
          }
          // console.log('localisation')
        }
      }
    },
    searchFromEbapis: function searchFromEbapis(activeMenu) {
      var _this5 = this;
      var _this$user3 = this.user,
        role = _this$user3.role_uuid,
        user_id = _this$user3.user_id,
        filiale = _this$user3.filiale;
      this.$axios.post(this.ebapisHost + 'cofiloc/api/v1/search-geolocalisation-v1/', {
        keyword: this.keyword,
        role: role,
        user_id: user_id,
        filiale: this.filiale ? this.filiale : filiale,
        type_search: this.type_search,
        montant_inf: this.convertNumber(this.montant_inf),
        montant_sup: this.convertNumber(this.montant_sup),
        activeMenu: activeMenu
      }).then(function (res) {
        var _res$data;
        // this.$emit('search', this.keyword)
        // this.items = res.data.dossiers
        var current_menu = (_res$data = res.data) === null || _res$data === void 0 || (_res$data = _res$data.activeMenu) === null || _res$data === void 0 ? void 0 : _res$data.slug;
        if (current_menu == "prospections") {
          EventBus.$emit('search-prospection', res.data.data);
          return;
        }
        if (current_menu == "visite") {
          console.log('items', res.data);
          EventBus.$emit('search-visite', res.data.data);
          return;
        }
        if (current_menu == "localisation") {
          var _this5$activeMenu;
          if (((_this5$activeMenu = _this5.activeMenu) === null || _this5$activeMenu === void 0 || (_this5$activeMenu = _this5$activeMenu.ss_obj) === null || _this5$activeMenu === void 0 ? void 0 : _this5$activeMenu.geolocalisation) == true) {
            EventBus.$emit('search-localisation-ebapis', res.data.data);
            return;
          }
        }
        console.log('items', res.data);

        // console.log('res.data.search', res.data.data)
        // this.$emit('search-geoloc', res.data.data)
      })["catch"](function (err) {
        console.error(err);
      });
    },
    searchFromSelf: function searchFromSelf(activeMenu) {
      var _this6 = this;
      var _this$user4 = this.user,
        role = _this$user4.role_uuid,
        user_id = _this$user4.user_id,
        filiale = _this$user4.filiale;
      this.$axios.post('/api/cofiloc/search-demande-geolocalisation-v1/', {
        keyword: this.keyword,
        role: role,
        user_id: user_id,
        filiale: this.filiale ? this.filiale : filiale,
        type_search: this.type_search,
        montant_inf: this.convertNumber(this.montant_inf),
        montant_sup: this.convertNumber(this.montant_sup),
        activeMenu: activeMenu
      }).then(function (res) {
        var _this6$activeMenu;
        var current_menu = (_this6$activeMenu = _this6.activeMenu) === null || _this6$activeMenu === void 0 ? void 0 : _this6$activeMenu.slug;
        console.log('demande res.data.search', res.data);
        if (current_menu == "localisation") {
          var _this6$activeMenu2;
          if (((_this6$activeMenu2 = _this6.activeMenu) === null || _this6$activeMenu2 === void 0 || (_this6$activeMenu2 = _this6$activeMenu2.ss_obj) === null || _this6$activeMenu2 === void 0 ? void 0 : _this6$activeMenu2.request_geoloc) == true) {
            EventBus.$emit('search-localisation-self', res.data);
            return;
          }
        }
      })["catch"](function (err) {
        console.error(err);
      });
    },
    searchClientFromSelf: function searchClientFromSelf(activeMenu) {
      var _this7 = this;
      var _this$user5 = this.user,
        role = _this$user5.role_uuid,
        user_id = _this$user5.user_id,
        filiale = _this$user5.filiale;
      this.$axios.post('/api/cofiloc/search-client/', {
        keyword: this.keyword,
        role: role,
        user_id: user_id,
        filiale: this.filiale ? this.filiale : filiale,
        type_search: this.type_search,
        montant_inf: this.convertNumber(this.montant_inf),
        montant_sup: this.convertNumber(this.montant_sup),
        activeMenu: activeMenu
      }).then(function (res) {
        var _this7$activeMenu;
        var current_menu = (_this7$activeMenu = _this7.activeMenu) === null || _this7$activeMenu === void 0 ? void 0 : _this7$activeMenu.slug;
        console.log('demande res.data.search', res.data);
        if (current_menu == "clients") {
          EventBus.$emit('search-client-self', res.data);
          return;
        }
      })["catch"](function (err) {
        console.error(err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/SearchGeoloc.vue?vue&type=template&id=75a2ad26":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/SearchGeoloc.vue?vue&type=template&id=75a2ad26 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "w-100 position-relative"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "input-group"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.keyword,
      expression: "keyword"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: _vm.placeholder
    },
    domProps: {
      value: _vm.keyword
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.keyword = $event.target.value;
      }, _vm.searchFolder],
      focusout: function focusout($event) {
        _vm.opened = false;
      },
      focusin: function focusin($event) {
        _vm.opened = true;
      }
    }
  }), _vm._v(" "), _c("button", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.ableAdvancedBtn,
      expression: "ableAdvancedBtn"
    }],
    staticClass: "input-group-text",
    attrs: {
      title: "Recherche avancée"
    },
    on: {
      click: _vm.searchAdd
    }
  }, [_c("i", {
    staticClass: "icofont-gear"
  })])])]), _vm._v(" "), _vm.advanced ? _c("div", {
    staticClass: "d-flex w-100 justify-content-between px-2 bg-white shadow-sm position-relative",
    staticStyle: {
      "z-index": "2"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm-12 col-md-6 col-lg-4"
  }, [_c("div", {
    staticClass: "rounded py-2 d-flex justify-content-center"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.type_search,
      expression: "type_search"
    }],
    staticClass: "form-select advanced border-0",
    attrs: {
      type: "text",
      id: "type-credit",
      placeholder: "choisir un type de recherche"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.type_search = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, _vm.searchFolder],
      focusin: function focusin($event) {
        _vm.opened = true;
      },
      focusout: function focusout($event) {
        _vm.opened = false;
      }
    }
  }, [_c("option", {
    domProps: {
      value: null
    }
  }, [_vm._v("choisir type de crédit")]), _vm._v(" "), _vm._l(_vm.recherches, function (recherche, index) {
    return _c("option", {
      key: index,
      domProps: {
        value: recherche.search
      }
    }, [_vm._v(_vm._s(recherche.search))]);
  })], 2)])])])]) : _vm._e()]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/SearchGeoloc.vue?vue&type=style&index=0&id=75a2ad26&lang=scss":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/SearchGeoloc.vue?vue&type=style&index=0&id=75a2ad26&lang=scss ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".options {\n  position: absolute;\n  z-index: 2;\n}\n.darker {\n  background: #4c3955;\n  color: #b4a4bb;\n}\n.form-control.default:focus {\n  background: #412f4b;\n  color: white;\n}\n.advanced, .form-control.advanced, .form-select.advanced, .bg-grey-dark {\n  background: rgba(128, 128, 128, 0.16);\n  border: none;\n  box-shadow: none;\n  color: #7a7a7a;\n}\n.advanced:focus, .form-control.advanced:focus, .form-select.advanced:focus, .bg-grey-dark:focus {\n  background: rgba(128, 128, 128, 0.16);\n  border: none;\n  box-shadow: none;\n}\n.bg-grey-dark {\n  background: rgba(128, 128, 128, 0.36);\n  font-weight: 600;\n  font-size: small;\n  font-family: sans-serif;\n  color: #7a7a7a;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/SearchGeoloc.vue?vue&type=style&index=0&id=75a2ad26&lang=scss":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/SearchGeoloc.vue?vue&type=style&index=0&id=75a2ad26&lang=scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchGeoloc_vue_vue_type_style_index_0_id_75a2ad26_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SearchGeoloc.vue?vue&type=style&index=0&id=75a2ad26&lang=scss */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/SearchGeoloc.vue?vue&type=style&index=0&id=75a2ad26&lang=scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchGeoloc_vue_vue_type_style_index_0_id_75a2ad26_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchGeoloc_vue_vue_type_style_index_0_id_75a2ad26_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/shared/SearchGeoloc.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/shared/SearchGeoloc.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SearchGeoloc_vue_vue_type_template_id_75a2ad26__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchGeoloc.vue?vue&type=template&id=75a2ad26 */ "./resources/js/components/shared/SearchGeoloc.vue?vue&type=template&id=75a2ad26");
/* harmony import */ var _SearchGeoloc_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchGeoloc.vue?vue&type=script&lang=js */ "./resources/js/components/shared/SearchGeoloc.vue?vue&type=script&lang=js");
/* harmony import */ var _SearchGeoloc_vue_vue_type_style_index_0_id_75a2ad26_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchGeoloc.vue?vue&type=style&index=0&id=75a2ad26&lang=scss */ "./resources/js/components/shared/SearchGeoloc.vue?vue&type=style&index=0&id=75a2ad26&lang=scss");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SearchGeoloc_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _SearchGeoloc_vue_vue_type_template_id_75a2ad26__WEBPACK_IMPORTED_MODULE_0__.render,
  _SearchGeoloc_vue_vue_type_template_id_75a2ad26__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/shared/SearchGeoloc.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/shared/SearchGeoloc.vue?vue&type=script&lang=js":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/shared/SearchGeoloc.vue?vue&type=script&lang=js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchGeoloc_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SearchGeoloc.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/SearchGeoloc.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchGeoloc_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shared/SearchGeoloc.vue?vue&type=style&index=0&id=75a2ad26&lang=scss":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/shared/SearchGeoloc.vue?vue&type=style&index=0&id=75a2ad26&lang=scss ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchGeoloc_vue_vue_type_style_index_0_id_75a2ad26_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SearchGeoloc.vue?vue&type=style&index=0&id=75a2ad26&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/SearchGeoloc.vue?vue&type=style&index=0&id=75a2ad26&lang=scss");


/***/ }),

/***/ "./resources/js/components/shared/SearchGeoloc.vue?vue&type=template&id=75a2ad26":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/shared/SearchGeoloc.vue?vue&type=template&id=75a2ad26 ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchGeoloc_vue_vue_type_template_id_75a2ad26__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchGeoloc_vue_vue_type_template_id_75a2ad26__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchGeoloc_vue_vue_type_template_id_75a2ad26__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SearchGeoloc.vue?vue&type=template&id=75a2ad26 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/SearchGeoloc.vue?vue&type=template&id=75a2ad26");


/***/ })

}]);