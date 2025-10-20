"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_offview_microfinance_cofina_memo_derogation_DER1_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/derogation/DER1.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/derogation/DER1.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_cofina_derogation_manager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../services/cofina/derogation_manager.js */ "./resources/js/services/cofina/derogation_manager.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isValid/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isBefore/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isEqual/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }




var DEROGATION_STATUS = {
  late: "RR",
  //Regularisé avec retard
  ontime: "RT" //Regularisé à temps
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    dossier_credit: Object
  },
  data: function data() {
    return {
      userData: null,
      derogations: [],
      all_derogations: [],
      regularizationDate: "",
      statusAfterRegularizationDate: "",
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_1__["default"].host,
      regularizationComment: "",
      derogationManager: _services_cofina_derogation_manager_js__WEBPACK_IMPORTED_MODULE_2__["default"],
      toggleView: {
        main: true
      },
      selectedDerogations: [],
      selectedDerogationIndex: null,
      searchInput: "",
      tbArrays: [],
      selectedDerogation: {},
      hypotheques: [],
      total_hypotheques_valeur_marchande: 0,
      total_hypotheques_valeur_considere: 0,
      gages: [],
      total_gages_valeur_considere: 0,
      total_gages_valeur_marchande: 0,
      cautionnement_solidaires: [],
      total_cautionnement_solidaires_valeur_revenu_mensuel: 0,
      total_cautionnement_solidaires_valeur_patrimoine: 0,
      total_cautionnement_solidaires_valeur_cautionnement: 0,
      caution_hypothecaires: [],
      total_caution_hypothecaires_valeur_marchande: 0,
      total_caution_hypothecaires_valeur_considere: 0,
      protection_financieres: [],
      total_protection_financieres_valeur_considere: 0,
      total_protection_financieres_valeur_marchande: 0,
      cond_particulieres: [],
      suretes_diverses: [],
      autres_suretes_diverses: [],
      allSuretes: [],
      allow: false,
      loadingData: false,
      unAllowViewMode: ["WLGrwo0TgfloZLoUVFF"]
    };
  },
  mounted: function mounted() {
    var _this = this;
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _services_auth_service__WEBPACK_IMPORTED_MODULE_0__["default"].loadUserData().then(function (res) {
              var _this$userData;
              _this.userData = res.data;

              // if ("cred_pub_tb_15500" in this.dossier_credit) {
              //     this.derogations =
              //         this.dossier_credit?.["cred_pub_tb_15500"]?.derogations;
              //     this.all_derogations = [...this.derogations];
              // }
              if (!_this.unAllowViewMode.includes((_this$userData = _this.userData) === null || _this$userData === void 0 ? void 0 : _this$userData.role_uuid)) {
                var _this$dossier_credit;
                _this.allowActions2({
                  user: _this.userData,
                  cred_pub_key: (_this$dossier_credit = _this.dossier_credit) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.cred_pub_key
                });
              }
            })["catch"](function (err) {
              _this.$toasted.show("Erreur d'authentification. Veuillez vous reconnecter");
            });
            _this.loadDerogations();
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  methods: {
    loadDerogations: function loadDerogations() {
      var _this$dossier_credit2;
      var createdKey = "cred_pub_tb_15500";
      if (((_this$dossier_credit2 = this.dossier_credit) === null || _this$dossier_credit2 === void 0 ? void 0 : _this$dossier_credit2[createdKey]) != undefined) {
        var _this$dossier_credit3;
        if (!["", undefined, null].includes((_this$dossier_credit3 = this.dossier_credit) === null || _this$dossier_credit3 === void 0 || (_this$dossier_credit3 = _this$dossier_credit3[createdKey]) === null || _this$dossier_credit3 === void 0 ? void 0 : _this$dossier_credit3["derogations"])) {
          var _this$dossier_credit4;
          this.derogations = (_this$dossier_credit4 = this.dossier_credit) === null || _this$dossier_credit4 === void 0 || (_this$dossier_credit4 = _this$dossier_credit4["cred_pub_tb_15500"]) === null || _this$dossier_credit4 === void 0 ? void 0 : _this$dossier_credit4.derogations;
          this.all_derogations = _toConsumableArray(this.derogations);
        }
        // this.
      }
    },
    handleOpenDoss: function handleOpenDoss(cred_pub_key) {
      EventBus.$emit('open-doss-der', cred_pub_key);
    },
    actionBtnClass: function actionBtnClass(derogation, decision) {
      var _derogation$find,
        _this2 = this;
      // const dk = this.derogationManager.getDecisionKey(
      //     this.userData?.role_uuid
      // );
      var k = derogation === null || derogation === void 0 || (_derogation$find = derogation.find(function (el) {
        var _el$user, _this2$userData;
        return ((_el$user = el.user) === null || _el$user === void 0 ? void 0 : _el$user.user_id) == ((_this2$userData = _this2.userData) === null || _this2$userData === void 0 ? void 0 : _this2$userData.user_id);
      })) === null || _derogation$find === void 0 ? void 0 : _derogation$find.actor_decision;

      // console.log('k?.trim()',k?.trim())

      if (!(k !== null && k !== void 0 && k.trim())) return "btn-outline-".concat(decision == "OUI" ? "success" : "danger");
      return "gray-btn";
    },
    decisionIsActive: function decisionIsActive(derogation, decision) {
      var _this3 = this;
      // console.log("approbations",derogation,"decision",decision);

      if ((derogation === null || derogation === void 0 ? void 0 : derogation.length) > 0) {
        var _derogation$find2;
        return (derogation === null || derogation === void 0 || (_derogation$find2 = derogation.find(function (el) {
          var _el$user2, _this3$userData;
          return ((_el$user2 = el.user) === null || _el$user2 === void 0 ? void 0 : _el$user2.user_id) == ((_this3$userData = _this3.userData) === null || _this3$userData === void 0 ? void 0 : _this3$userData.user_id);
        })) === null || _derogation$find2 === void 0 ? void 0 : _derogation$find2.actor_decision) == decision ? true : false;
      }
      return false;
      // if([undefined].includes(derogation)){
      //     return false
      // }else{
      //     const approb = derogation?.approbations

      //     const dk = approb?.find((el)=> el?.user?.user_id == this.userData?.user_id)
      //     console.log("dk",dk);

      //     if(![undefined,null].includes(dk?.actor_decision)){
      //         const d = dk?.actor_decision == decision ? true : false

      //         console.log("d",d)
      //     }
      //     // console.log("derogation",derogation?.approbations);
      // }

      // return

      // const dk = this.derogationManager.getDecisionKey(
      //     this.userData?.role_uuid
      // );

      // console.log("dk",dk);

      // return derogation?.approbations?.find((el)=> el.user?.user_id == this.userData?.user_id)?.actor_decision == decision ? true : false;
      // return dk[0]?.actor_decision == decision ? true : false;
    },
    getStatusLabel: function getStatusLabel(status) {
      if (!status) return "";
      if (status == "RR") return "Régularisé avec retard";
      if (status == "RT") return "Régularisé à temps";
      return status;
    },
    searchDerogation: function searchDerogation() {
      var _this$searchInput,
        _this$all_derogations,
        _this4 = this;
      if (((_this$searchInput = this.searchInput) === null || _this$searchInput === void 0 ? void 0 : _this$searchInput.trim()) == "") {
        this.resetSearch();
        return;
      }
      this.derogations = (_this$all_derogations = this.all_derogations) === null || _this$all_derogations === void 0 ? void 0 : _this$all_derogations.filter(function (d) {
        var _d$dossier_credit;
        if ((d === null || d === void 0 || (_d$dossier_credit = d.dossier_credit) === null || _d$dossier_credit === void 0 ? void 0 : _d$dossier_credit.cred_pub_key) != undefined) {
          var _d$dossier_credit2, _this4$searchInput, _d$dossier_credit3, _this4$searchInput2, _d$dossier_credit4, _this4$searchInput3, _d$dossier_credit5, _this4$derogationMana, _d$dossier_credit6, _this4$searchInput4;
          if (d !== null && d !== void 0 && (_d$dossier_credit2 = d.dossier_credit) !== null && _d$dossier_credit2 !== void 0 && (_d$dossier_credit2 = _d$dossier_credit2.numero_dossier) !== null && _d$dossier_credit2 !== void 0 && (_d$dossier_credit2 = _d$dossier_credit2.trim()) !== null && _d$dossier_credit2 !== void 0 && _d$dossier_credit2.includes((_this4$searchInput = _this4.searchInput) === null || _this4$searchInput === void 0 ? void 0 : _this4$searchInput.trim()) || d !== null && d !== void 0 && (_d$dossier_credit3 = d.dossier_credit) !== null && _d$dossier_credit3 !== void 0 && (_d$dossier_credit3 = _d$dossier_credit3.caf_recorded_file) !== null && _d$dossier_credit3 !== void 0 && (_d$dossier_credit3 = _d$dossier_credit3.client) !== null && _d$dossier_credit3 !== void 0 && (_d$dossier_credit3 = _d$dossier_credit3.nomcli) !== null && _d$dossier_credit3 !== void 0 && _d$dossier_credit3.toLowerCase().includes((_this4$searchInput2 = _this4.searchInput) === null || _this4$searchInput2 === void 0 ? void 0 : _this4$searchInput2.toLowerCase()) || d !== null && d !== void 0 && (_d$dossier_credit4 = d.dossier_credit) !== null && _d$dossier_credit4 !== void 0 && (_d$dossier_credit4 = _d$dossier_credit4.caf_recorded_file) !== null && _d$dossier_credit4 !== void 0 && (_d$dossier_credit4 = _d$dossier_credit4.client) !== null && _d$dossier_credit4 !== void 0 && (_d$dossier_credit4 = _d$dossier_credit4.matcli) !== null && _d$dossier_credit4 !== void 0 && _d$dossier_credit4.trim().includes((_this4$searchInput3 = _this4.searchInput) === null || _this4$searchInput3 === void 0 ? void 0 : _this4$searchInput3.trim()) || (d === null || d === void 0 || (_d$dossier_credit5 = d.dossier_credit) === null || _d$dossier_credit5 === void 0 ? void 0 : _d$dossier_credit5.caract_inter_pret) != undefined && (_this4$derogationMana = _this4.derogationManager.extractApprovedAmount(d === null || d === void 0 || (_d$dossier_credit6 = d.dossier_credit) === null || _d$dossier_credit6 === void 0 ? void 0 : _d$dossier_credit6.caract_inter_pret)) !== null && _this4$derogationMana !== void 0 && (_this4$derogationMana = _this4$derogationMana.trim()) !== null && _this4$derogationMana !== void 0 && _this4$derogationMana.includes((_this4$searchInput4 = _this4.searchInput) === null || _this4$searchInput4 === void 0 ? void 0 : _this4$searchInput4.trim())) {
            return d;
          }
        }
      });
    },
    resetSearch: function resetSearch() {
      this.searchInput = "";
      this.derogations = _toConsumableArray(this.all_derogations);
    },
    showAttachment: function showAttachment(derogation) {
      this.selectedDerogationIndex = this.derogations.findIndex(function (d) {
        return d.id == derogation.id;
      });
      // this.selectedDerogationIndex = index;
      this.openFileUploader(true);
    },
    updateRegularizationDate: function updateRegularizationDate(d) {
      this.regularizationDate = d[1];
    },
    openFileUploader: function openFileUploader() {
      var _this$dossier_credit5;
      var viewOnly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var derogation = this.derogations[this.selectedDerogationIndex];
      EventBus.$emit("open-extra-file-explorer");
      var options = {
        name: "Pièces jointes Dérogation" + "{(*)}" + (derogation === null || derogation === void 0 ? void 0 : derogation.id),
        applied_templ_name: (_this$dossier_credit5 = this.dossier_credit) === null || _this$dossier_credit5 === void 0 ? void 0 : _this$dossier_credit5.applied_templ_name
      };
      if (viewOnly) options['view'] = true;
      setTimeout(function () {
        EventBus.$emit("data-extra-file-explorer", options);
      }, 500);
    },
    formatDate: function formatDate(date) {
      if (['', null, undefined].includes(date)) return "";
      var options = {
        year: "numeric",
        month: "numeric",
        day: "numeric"
      };
      return new Date(date).toLocaleDateString("fr", options);
    },
    selectDerogation: function selectDerogation(index, derogation) {
      var _this$derogations;
      var realIndex = (_this$derogations = this.derogations) === null || _this$derogations === void 0 ? void 0 : _this$derogations.findIndex(function (d) {
        return d.id == derogation.id;
      });
      this.selectedDerogationIndex = realIndex;
      // this.selectedDerogationIndex = index;

      this.getDoss();
      this.toggleModal("search_dossier_credit", "show");
    },
    formatAmount: function formatAmount(x) {
      return x === null || x === void 0 ? void 0 : x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
    toggleModal: function toggleModal(modal_name) {
      var mode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "show";
      if (mode == "show") {
        this.$modal.show(modal_name);
        return;
      }
      this.$modal.hide(modal_name);
    },
    toggleSubDerogation: function toggleSubDerogation(derogation) {
      var toggleObj = _objectSpread({}, this.toggleView);
      toggleObj[derogation.id] = !toggleObj[derogation.id];
      this.toggleView = toggleObj;
    },
    flagToRegularize: function flagToRegularize(index, derogation) {
      var NOW = new Date();
      // this.selectedDerogationIndex = index;
      var realIndex = this.derogations.findIndex(function (d) {
        return d.id == derogation.id;
      });
      this.selectedDerogationIndex = realIndex;
      this.regularizationDate = "";
      this.statusAfterRegularizationDate = "";
      this.regularizationDate = date_fns__WEBPACK_IMPORTED_MODULE_3__["default"](NOW, "yyyy-MM-dd");
      this.toggleModal("regularize_derogation", "show");
    },
    toggleDerogationSelection: function toggleDerogationSelection() {
      var _this$selectedDerogat3, _this$derogations2, _this$selectedDerogat4, _this$derogations3;
      var derogation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      if (derogation !== null && derogation !== void 0 && derogation.id) {
        var _this$selectedDerogat, _this$selectedDerogat2;
        var index = (_this$selectedDerogat = this.selectedDerogations) === null || _this$selectedDerogat === void 0 ? void 0 : _this$selectedDerogat.indexOf(derogation.id);
        if (index === -1) {
          this.selectedDerogations = [].concat(_toConsumableArray(this.selectedDerogations), [derogation.id]);
          return;
        }
        (_this$selectedDerogat2 = this.selectedDerogations) === null || _this$selectedDerogat2 === void 0 || _this$selectedDerogat2.splice(index, 1);
        return;
      }
      // For main checkbox
      if (((_this$selectedDerogat3 = this.selectedDerogations) === null || _this$selectedDerogat3 === void 0 ? void 0 : _this$selectedDerogat3.length) === ((_this$derogations2 = this.derogations) === null || _this$derogations2 === void 0 ? void 0 : _this$derogations2.length)) {
        this.selectedDerogations = [];
        return;
      }
      if (((_this$selectedDerogat4 = this.selectedDerogations) === null || _this$selectedDerogat4 === void 0 ? void 0 : _this$selectedDerogat4.length) < ((_this$derogations3 = this.derogations) === null || _this$derogations3 === void 0 ? void 0 : _this$derogations3.length)) {
        this.selectedDerogations = this.derogations.map(function (d) {
          return d.id;
        });
        return;
      }
    },
    // updateDecision(derogationIds, decisionKey, decision) {
    //     let derogations = [...this.derogations];
    //     for (const dis of derogationIds) {
    //         const der_index = derogations.findIndex((der) => der.id == dis);
    //         if (der_index == -1) continue;
    //         if (["OUI", "NON"].includes(decision)) {
    //             derogations[der_index][decisionKey] = decision;
    //         } else {
    //             derogations[der_index][decisionKey] =
    //                 derogations[der_index][decision];
    //         }
    //     }
    //     return derogations;
    // },
    updateDecision: function updateDecision(derogationIds) {
      var _this5 = this;
      var decisionKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var decision = arguments.length > 2 ? arguments[2] : undefined;
      var derogations = _toConsumableArray(this.derogations);
      var record = {
        actor_decision: decision,
        user: this.userData
      };
      var _iterator = _createForOfIteratorHelper(derogationIds),
        _step;
      try {
        var _loop = function _loop() {
          var dis = _step.value;
          var der_index = derogations.findIndex(function (der) {
            return der.id == dis;
          });
          if (der_index == -1) return 1; // continue
          if (Object.keys(derogations[der_index]).includes("approbations")) {
            var element = derogations[der_index]["approbations"];
            if ((element === null || element === void 0 ? void 0 : element.length) == 0) {
              element.push(record);
            } else {
              var current_user = element.filter(function (el) {
                var _el$user3, _this5$userData;
                return ((_el$user3 = el.user) === null || _el$user3 === void 0 ? void 0 : _el$user3.user_id) == ((_this5$userData = _this5.userData) === null || _this5$userData === void 0 ? void 0 : _this5$userData.user_id);
              });
              if (current_user.length > 0) {
                // console.log("");
                current_user[0]["actor_decision"] = decision;
              } else {
                element.push(record);
              }
            }
          }
        };
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          if (_loop()) continue;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return derogations;
    },
    followDecision: function followDecision() {
      var _this$selectedDerogat5;
      if (!((_this$selectedDerogat5 = this.selectedDerogations) !== null && _this$selectedDerogat5 !== void 0 && _this$selectedDerogat5.length)) return;
      var derogations = this.updateDerogationsDecision(this.selectedDerogations);
      this.save(derogations);
      this.selectedDerogations = [];
      // console.log(derogations);
    },
    updateDerogationsDecision: function updateDerogationsDecision(derogationIds) {
      var _this6 = this;
      var derogations = _toConsumableArray(this.derogations);
      var _iterator2 = _createForOfIteratorHelper(derogationIds),
        _step2;
      try {
        var _loop2 = function _loop2() {
            var dis = _step2.value;
            var der_index = derogations.findIndex(function (der) {
              return der.id == dis;
            });
            if (der_index == -1) return 0; // continue
            if (Object.keys(derogations[der_index]).includes("approbations")) {
              var element = derogations[der_index]["approbations"];
              if ((element === null || element === void 0 ? void 0 : element.length) == 0) {
                return 0; // continue
              } else {
                var current_user = element.filter(function (el) {
                  var _el$user4, _this6$userData;
                  return ((_el$user4 = el.user) === null || _el$user4 === void 0 ? void 0 : _el$user4.user_id) == ((_this6$userData = _this6.userData) === null || _this6$userData === void 0 ? void 0 : _this6$userData.user_id);
                });
                if (current_user.length > 0) {
                  // console.log("");
                  return 0; // continue
                } else {
                  var duplicatedObject = Object.assign({}, element[element.length - 1]);
                  duplicatedObject.user = _this6.userData;
                  element.splice(element.length, 0, duplicatedObject);
                }
              }
            }
          },
          _ret;
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          _ret = _loop2();
          if (_ret === 0) continue;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      return derogations;
    },
    approveOrDenyDerogation: function approveOrDenyDerogation() {
      var _this$selectedDerogat6;
      var derogation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var decision = arguments.length > 1 ? arguments[1] : undefined;
      this.selectedDerogationIndex = derogation != null ? this.derogations.findIndex(function (d) {
        return d.id == derogation.id;
      }) : null;
      var decisionKey = this.derogationManager.getDecisionKey(this.userData.role_uuid);
      if (this.selectedDerogationIndex != null) {
        var _this$derogations$thi;
        // console.log("this.derogations[this.selectedDerogationIndex]?.id",this.derogations[this.selectedDerogationIndex]?.id);
        // return 
        var _derogations = this.updateDecision([(_this$derogations$thi = this.derogations[this.selectedDerogationIndex]) === null || _this$derogations$thi === void 0 ? void 0 : _this$derogations$thi.id], decisionKey, decision);
        this.save(_derogations);
        return;
      }
      if (!((_this$selectedDerogat6 = this.selectedDerogations) !== null && _this$selectedDerogat6 !== void 0 && _this$selectedDerogat6.length)) return;
      var derogations = this.updateDecision(this.selectedDerogations, decisionKey, decision);
      this.save(derogations);
      this.selectedDerogations = [];
    },
    isOptionAvailable: function isOptionAvailable(action, derogation) {
      return true;
    },
    save: function save() {
      var _this$dossier_credit6,
        _this7 = this;
      var derogations = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      this.$Progress.start();
      this.$axios.post(this.ebapisHost + "creditbuilder/api/v1/update-derogations/", {
        user: this.userData,
        cred_pub_key: (_this$dossier_credit6 = this.dossier_credit) === null || _this$dossier_credit6 === void 0 ? void 0 : _this$dossier_credit6.cred_pub_key,
        derogations: derogations !== null && derogations !== void 0 && derogations.length ? derogations : this.derogations
      }).then(function (response) {
        _this7.$Progress.finish();
        var tbFetcheData = response.data;
        if (tbFetcheData["is_success"] === true) {
          _this7.derogations = tbFetcheData.dossier.cred_pub_tb_15500.derogations;
          _this7.all_derogations = _toConsumableArray(_this7.derogations);
          EventBus.$emit('value-updated');
        }
        _this7.$toasted.show("Votre décision a bien été prise en compte");
      })["catch"](function (error) {
        _this7.$Progress.finish();
        console.log(error);
      });
    },
    regularize: function regularize() {
      // console.log(this.regularizationDate);
      if (date_fns__WEBPACK_IMPORTED_MODULE_4__["default"](new Date(this.regularizationDate))) {
        var _derogations$this$sel, _derogations$this$sel2;
        var derogations = _toConsumableArray(this.derogations);
        derogations[this.selectedDerogationIndex]["date_regularisation"] = this.regularizationDate;
        derogations[this.selectedDerogationIndex]["commentaire_regularisation"] = this.regularizationComment;
        // const regDateisAfter  = datefns.isAfter(new Date(this.regularizationDate), new Date(derogations[this.selectedDerogationIndex]?.delai_regularisation))
        var regDateisBefore = date_fns__WEBPACK_IMPORTED_MODULE_5__["default"](new Date(this.regularizationDate), new Date((_derogations$this$sel = derogations[this.selectedDerogationIndex]) === null || _derogations$this$sel === void 0 ? void 0 : _derogations$this$sel.delai_regularisation));
        var regDateisEqual = date_fns__WEBPACK_IMPORTED_MODULE_6__["default"](new Date(this.regularizationDate), new Date((_derogations$this$sel2 = derogations[this.selectedDerogationIndex]) === null || _derogations$this$sel2 === void 0 ? void 0 : _derogations$this$sel2.delai_regularisation));
        derogations[this.selectedDerogationIndex]["statut_apres_delai_reg"] = regDateisBefore || regDateisEqual ? DEROGATION_STATUS.ontime : DEROGATION_STATUS.late;
        this.save(derogations);
        this.toggleModal("regularize_derogation", "hide");
        return;
      }
      this.$toasted.show("Veuillez renseigner une date valide");
    },
    detenteurInfos: function detenteurInfos(dossier_credit, info) {
      var _dossier_credit$decis, _dl$key;
      if (dossier_credit == null || !info) return '';
      var dl = dossier_credit === null || dossier_credit === void 0 ? void 0 : dossier_credit.decision_logs[(dossier_credit === null || dossier_credit === void 0 || (_dossier_credit$decis = dossier_credit.decision_logs) === null || _dossier_credit$decis === void 0 ? void 0 : _dossier_credit$decis.length) - 1];
      var key = '';
      if (info == 'name') key = 'giver_name';
      if (info == 'fonction') key = 'giver_role';
      return (_dl$key = dl === null || dl === void 0 ? void 0 : dl[key]) !== null && _dl$key !== void 0 ? _dl$key : '';
    },
    getDoss: function getDoss() {
      var _this$selectedDerogat7,
        _this8 = this;
      this.selectedDerogation = this.derogations[this.selectedDerogationIndex];
      this.loadingData = true;
      this.hypotheques = [];
      this.total_hypotheques_valeur_marchande = 0;
      this.total_hypotheques_valeur_considere = 0;
      this.gages = [];
      this.total_gages_valeur_considere = 0;
      this.total_gages_valeur_marchande = 0;
      this.cautionnement_solidaires = [];
      this.total_cautionnement_solidaires_valeur_revenu_mensuel = 0;
      this.total_cautionnement_solidaires_valeur_patrimoine = 0;
      this.total_cautionnement_solidaires_valeur_cautionnement = 0;
      this.caution_hypothecaires = [];
      this.total_caution_hypothecaires_valeur_marchande = 0;
      this.total_caution_hypothecaires_valeur_considere = 0;
      this.protection_financieres = [];
      this.total_protection_financieres_valeur_considere = 0;
      this.total_protection_financieres_valeur_marchande = 0;
      this.cond_particulieres = [];
      this.suretes_diverses = [];
      this.autres_suretes_diverses = [];
      this.allSuretes = [];
      this.$axios.post(this.ebapisHost + 'creditbuilder/api/v1/get-dossier/', {
        cred_pub_key: (_this$selectedDerogat7 = this.selectedDerogation) === null || _this$selectedDerogat7 === void 0 || (_this$selectedDerogat7 = _this$selectedDerogat7.dossier_credit) === null || _this$selectedDerogat7 === void 0 ? void 0 : _this$selectedDerogat7.cred_pub_key
      }).then(function (res) {
        var _this8$selectedDeroga;
        _this8.selectedDerogation.dossier_credit = res.data;
        _this8.loadingData = false;
        var applied_templ_name = (_this8$selectedDeroga = _this8.selectedDerogation.dossier_credit) === null || _this8$selectedDeroga === void 0 ? void 0 : _this8$selectedDeroga.applied_templ_name;
        _this8.tbArrays = _this8.determineCredPubTables(applied_templ_name);
        var credtb1 = _this8.tbArrays[1];
        var credtb4 = _this8.tbArrays[4];
        var arrToUse = ['cred_pub_tb_0490', 'cred_pub_tb_490', 'cred_pub_tb_049',, 'cred_pub_tb_49', credtb4];
        for (var _i = 0, _arrToUse = arrToUse; _i < _arrToUse.length; _i++) {
          var _this8$selectedDeroga2, _this8$selectedDeroga3, _this8$selectedDeroga4, _this8$selectedDeroga5, _this8$selectedDeroga6, _this8$selectedDeroga7, _this8$selectedDeroga8, _this8$selectedDeroga9, _this8$selectedDeroga0, _this8$selectedDeroga1, _this8$selectedDeroga10, _this8$selectedDeroga11, _this8$selectedDeroga12, _this8$selectedDeroga13, _this8$selectedDeroga14, _this8$selectedDeroga15, _this8$selectedDeroga16, _this8$selectedDeroga17, _this8$selectedDeroga18, _this8$selectedDeroga19, _this8$selectedDeroga20, _this8$selectedDeroga21, _this8$selectedDeroga22, _this8$selectedDeroga23, _this8$selectedDeroga24, _this8$selectedDeroga25, _this8$selectedDeroga26, _this8$selectedDeroga27, _this8$selectedDeroga28, _this8$selectedDeroga29, _this8$selectedDeroga30, _this8$selectedDeroga31, _this8$selectedDeroga32, _this8$selectedDeroga33, _this8$selectedDeroga34, _this8$selectedDeroga35, _this8$selectedDeroga36, _this8$selectedDeroga37, _this8$selectedDeroga38, _this8$selectedDeroga39, _this8$selectedDeroga40, _this8$selectedDeroga41;
          var credp = _arrToUse[_i];
          if (((_this8$selectedDeroga2 = _this8.selectedDerogation.dossier_credit) === null || _this8$selectedDeroga2 === void 0 ? void 0 : _this8$selectedDeroga2[credp]) == undefined) continue;
          var hypothequeKey = 'hypotheques' in ((_this8$selectedDeroga3 = _this8.selectedDerogation.dossier_credit) === null || _this8$selectedDeroga3 === void 0 ? void 0 : _this8$selectedDeroga3[credp]) ? 'hypotheques' : 'hypotheques_analyste';
          var h = (_this8$selectedDeroga4 = _this8.selectedDerogation.dossier_credit) !== null && _this8$selectedDeroga4 !== void 0 && (_this8$selectedDeroga4 = _this8$selectedDeroga4[credp]) !== null && _this8$selectedDeroga4 !== void 0 && (_this8$selectedDeroga4 = _this8$selectedDeroga4[hypothequeKey]) !== null && _this8$selectedDeroga4 !== void 0 && _this8$selectedDeroga4.length ? (_this8$selectedDeroga5 = _this8.selectedDerogation.dossier_credit) === null || _this8$selectedDeroga5 === void 0 || (_this8$selectedDeroga5 = _this8$selectedDeroga5[credp]) === null || _this8$selectedDeroga5 === void 0 ? void 0 : _this8$selectedDeroga5[hypothequeKey] : _this8.hypotheques;
          var hypotheques = h === null || h === void 0 ? void 0 : h.map(function (h) {
            var _h$valeur_considere, _h$valeur_marchande;
            if (_typeof(h.valeur_considere) == 'object' && (_h$valeur_considere = h.valeur_considere) !== null && _h$valeur_considere !== void 0 && _h$valeur_considere.length) {
              h.valeur_considere = h.valeur_considere[1];
            }
            if (_typeof(h.valeur_marchande) == 'object' && (_h$valeur_marchande = h.valeur_marchande) !== null && _h$valeur_marchande !== void 0 && _h$valeur_marchande.length) {
              h.valeur_marchande = h.valeur_marchande[1];
            }
            return h;
          });
          _this8.hypotheques = hypotheques;
          _this8.total_hypotheques_valeur_marchande = (_this8$selectedDeroga6 = (_this8$selectedDeroga7 = _this8.selectedDerogation.dossier_credit) === null || _this8$selectedDeroga7 === void 0 || (_this8$selectedDeroga7 = _this8$selectedDeroga7[credp]) === null || _this8$selectedDeroga7 === void 0 ? void 0 : _this8$selectedDeroga7['total_hypotheques_valeur_marchande']) !== null && _this8$selectedDeroga6 !== void 0 ? _this8$selectedDeroga6 : 0;
          _this8.total_hypotheques_valeur_considere = (_this8$selectedDeroga8 = (_this8$selectedDeroga9 = _this8.selectedDerogation.dossier_credit) === null || _this8$selectedDeroga9 === void 0 || (_this8$selectedDeroga9 = _this8$selectedDeroga9[credp]) === null || _this8$selectedDeroga9 === void 0 ? void 0 : _this8$selectedDeroga9['total_hypotheques_valeur_considere']) !== null && _this8$selectedDeroga8 !== void 0 ? _this8$selectedDeroga8 : 0;
          var gageKey = 'gages' in ((_this8$selectedDeroga0 = _this8.selectedDerogation.dossier_credit) === null || _this8$selectedDeroga0 === void 0 ? void 0 : _this8$selectedDeroga0[credp]) ? 'gages' : 'gages_analyste';
          _this8.gages = (_this8$selectedDeroga1 = _this8.selectedDerogation.dossier_credit) !== null && _this8$selectedDeroga1 !== void 0 && (_this8$selectedDeroga1 = _this8$selectedDeroga1[credp]) !== null && _this8$selectedDeroga1 !== void 0 && (_this8$selectedDeroga1 = _this8$selectedDeroga1[gageKey]) !== null && _this8$selectedDeroga1 !== void 0 && _this8$selectedDeroga1.length ? (_this8$selectedDeroga10 = _this8.selectedDerogation.dossier_credit) === null || _this8$selectedDeroga10 === void 0 || (_this8$selectedDeroga10 = _this8$selectedDeroga10[credp]) === null || _this8$selectedDeroga10 === void 0 ? void 0 : _this8$selectedDeroga10[gageKey] : _this8.gages;
          _this8.total_gages_valeur_considere = (_this8$selectedDeroga11 = (_this8$selectedDeroga12 = _this8.selectedDerogation.dossier_credit) === null || _this8$selectedDeroga12 === void 0 || (_this8$selectedDeroga12 = _this8$selectedDeroga12[credp]) === null || _this8$selectedDeroga12 === void 0 ? void 0 : _this8$selectedDeroga12['total_gages_valeur_considere']) !== null && _this8$selectedDeroga11 !== void 0 ? _this8$selectedDeroga11 : 0;
          _this8.total_gages_valeur_marchande = (_this8$selectedDeroga13 = (_this8$selectedDeroga14 = _this8.selectedDerogation.dossier_credit) === null || _this8$selectedDeroga14 === void 0 || (_this8$selectedDeroga14 = _this8$selectedDeroga14[credp]) === null || _this8$selectedDeroga14 === void 0 ? void 0 : _this8$selectedDeroga14['total_gages_valeur_marchande']) !== null && _this8$selectedDeroga13 !== void 0 ? _this8$selectedDeroga13 : 0;
          _this8.cautionnement_solidaires = (_this8$selectedDeroga15 = _this8.selectedDerogation.dossier_credit) !== null && _this8$selectedDeroga15 !== void 0 && (_this8$selectedDeroga15 = _this8$selectedDeroga15[credp]) !== null && _this8$selectedDeroga15 !== void 0 && (_this8$selectedDeroga15 = _this8$selectedDeroga15['cautionnement_solidaires']) !== null && _this8$selectedDeroga15 !== void 0 && _this8$selectedDeroga15.length ? (_this8$selectedDeroga16 = _this8.selectedDerogation.dossier_credit) === null || _this8$selectedDeroga16 === void 0 || (_this8$selectedDeroga16 = _this8$selectedDeroga16[credp]) === null || _this8$selectedDeroga16 === void 0 ? void 0 : _this8$selectedDeroga16['cautionnement_solidaires'] : _this8.cautionnement_solidaires;
          _this8.total_cautionnement_solidaires_valeur_revenu_mensuel = (_this8$selectedDeroga17 = (_this8$selectedDeroga18 = _this8.selectedDerogation.dossier_credit) === null || _this8$selectedDeroga18 === void 0 || (_this8$selectedDeroga18 = _this8$selectedDeroga18[credp]) === null || _this8$selectedDeroga18 === void 0 ? void 0 : _this8$selectedDeroga18['total_cautionnement_solidaires_valeur_revenu_mensuel']) !== null && _this8$selectedDeroga17 !== void 0 ? _this8$selectedDeroga17 : 0;
          _this8.total_cautionnement_solidaires_valeur_patrimoine = (_this8$selectedDeroga19 = (_this8$selectedDeroga20 = _this8.selectedDerogation.dossier_credit) === null || _this8$selectedDeroga20 === void 0 || (_this8$selectedDeroga20 = _this8$selectedDeroga20[credp]) === null || _this8$selectedDeroga20 === void 0 ? void 0 : _this8$selectedDeroga20['total_cautionnement_solidaires_valeur_patrimoine']) !== null && _this8$selectedDeroga19 !== void 0 ? _this8$selectedDeroga19 : 0;
          _this8.total_cautionnement_solidaires_valeur_cautionnement = (_this8$selectedDeroga21 = (_this8$selectedDeroga22 = _this8.selectedDerogation.dossier_credit) === null || _this8$selectedDeroga22 === void 0 || (_this8$selectedDeroga22 = _this8$selectedDeroga22[credp]) === null || _this8$selectedDeroga22 === void 0 ? void 0 : _this8$selectedDeroga22['total_cautionnement_solidaires_valeur_cautionnement']) !== null && _this8$selectedDeroga21 !== void 0 ? _this8$selectedDeroga21 : 0;
          _this8.caution_hypothecaires = (_this8$selectedDeroga23 = _this8.selectedDerogation.dossier_credit) !== null && _this8$selectedDeroga23 !== void 0 && (_this8$selectedDeroga23 = _this8$selectedDeroga23[credp]) !== null && _this8$selectedDeroga23 !== void 0 && (_this8$selectedDeroga23 = _this8$selectedDeroga23['caution_hypothecaires']) !== null && _this8$selectedDeroga23 !== void 0 && _this8$selectedDeroga23.length ? (_this8$selectedDeroga24 = _this8.selectedDerogation.dossier_credit) === null || _this8$selectedDeroga24 === void 0 || (_this8$selectedDeroga24 = _this8$selectedDeroga24[credp]) === null || _this8$selectedDeroga24 === void 0 ? void 0 : _this8$selectedDeroga24['caution_hypothecaires'] : _this8.caution_hypothecaires;
          _this8.total_caution_hypothecaires_valeur_marchande = (_this8$selectedDeroga25 = (_this8$selectedDeroga26 = _this8.selectedDerogation.dossier_credit) === null || _this8$selectedDeroga26 === void 0 || (_this8$selectedDeroga26 = _this8$selectedDeroga26[credp]) === null || _this8$selectedDeroga26 === void 0 ? void 0 : _this8$selectedDeroga26['total_caution_hypothecaires_valeur_marchande']) !== null && _this8$selectedDeroga25 !== void 0 ? _this8$selectedDeroga25 : 0;
          _this8.total_caution_hypothecaires_valeur_considere = (_this8$selectedDeroga27 = (_this8$selectedDeroga28 = _this8.selectedDerogation.dossier_credit) === null || _this8$selectedDeroga28 === void 0 || (_this8$selectedDeroga28 = _this8$selectedDeroga28[credp]) === null || _this8$selectedDeroga28 === void 0 ? void 0 : _this8$selectedDeroga28['total_caution_hypothecaires_valeur_considere']) !== null && _this8$selectedDeroga27 !== void 0 ? _this8$selectedDeroga27 : 0;
          var protections_financieres_key = 'protection_financieres' in ((_this8$selectedDeroga29 = _this8.selectedDerogation.dossier_credit) === null || _this8$selectedDeroga29 === void 0 ? void 0 : _this8$selectedDeroga29[credp]) ? 'protection_financieres' : 'protections_financieres_eligibles';
          _this8.protection_financieres = (_this8$selectedDeroga30 = _this8.selectedDerogation.dossier_credit) !== null && _this8$selectedDeroga30 !== void 0 && (_this8$selectedDeroga30 = _this8$selectedDeroga30[credp]) !== null && _this8$selectedDeroga30 !== void 0 && (_this8$selectedDeroga30 = _this8$selectedDeroga30[protections_financieres_key]) !== null && _this8$selectedDeroga30 !== void 0 && _this8$selectedDeroga30.length ? (_this8$selectedDeroga31 = _this8.selectedDerogation.dossier_credit) === null || _this8$selectedDeroga31 === void 0 || (_this8$selectedDeroga31 = _this8$selectedDeroga31[credp]) === null || _this8$selectedDeroga31 === void 0 ? void 0 : _this8$selectedDeroga31[protections_financieres_key] : _this8.protection_financieres;
          _this8.total_protection_financieres_valeur_considere = (_this8$selectedDeroga32 = (_this8$selectedDeroga33 = _this8.selectedDerogation.dossier_credit) === null || _this8$selectedDeroga33 === void 0 || (_this8$selectedDeroga33 = _this8$selectedDeroga33[credp]) === null || _this8$selectedDeroga33 === void 0 ? void 0 : _this8$selectedDeroga33['total_protection_financieres_valeur_considere']) !== null && _this8$selectedDeroga32 !== void 0 ? _this8$selectedDeroga32 : 0;
          _this8.total_protection_financieres_valeur_marchande = (_this8$selectedDeroga34 = (_this8$selectedDeroga35 = _this8.selectedDerogation.dossier_credit) === null || _this8$selectedDeroga35 === void 0 || (_this8$selectedDeroga35 = _this8$selectedDeroga35[credp]) === null || _this8$selectedDeroga35 === void 0 ? void 0 : _this8$selectedDeroga35['total_protection_financieres_valeur_marchande']) !== null && _this8$selectedDeroga34 !== void 0 ? _this8$selectedDeroga34 : 0;
          _this8.cond_particulieres = (_this8$selectedDeroga36 = _this8.selectedDerogation.dossier_credit) !== null && _this8$selectedDeroga36 !== void 0 && (_this8$selectedDeroga36 = _this8$selectedDeroga36[credp]) !== null && _this8$selectedDeroga36 !== void 0 && (_this8$selectedDeroga36 = _this8$selectedDeroga36['cond_particulieres']) !== null && _this8$selectedDeroga36 !== void 0 && _this8$selectedDeroga36.length ? (_this8$selectedDeroga37 = _this8.selectedDerogation.dossier_credit) === null || _this8$selectedDeroga37 === void 0 || (_this8$selectedDeroga37 = _this8$selectedDeroga37[credp]) === null || _this8$selectedDeroga37 === void 0 ? void 0 : _this8$selectedDeroga37['cond_particulieres'] : _this8.cond_particulieres;
          _this8.suretes_diverses = (_this8$selectedDeroga38 = _this8.selectedDerogation.dossier_credit) !== null && _this8$selectedDeroga38 !== void 0 && (_this8$selectedDeroga38 = _this8$selectedDeroga38[credp]) !== null && _this8$selectedDeroga38 !== void 0 && (_this8$selectedDeroga38 = _this8$selectedDeroga38['suretes_diverses']) !== null && _this8$selectedDeroga38 !== void 0 && _this8$selectedDeroga38.length ? (_this8$selectedDeroga39 = _this8.selectedDerogation.dossier_credit) === null || _this8$selectedDeroga39 === void 0 || (_this8$selectedDeroga39 = _this8$selectedDeroga39[credp]) === null || _this8$selectedDeroga39 === void 0 ? void 0 : _this8$selectedDeroga39['suretes_diverses'] : _this8.suretes_diverses;
          _this8.autres_suretes_diverses = (_this8$selectedDeroga40 = _this8.selectedDerogation.dossier_credit) !== null && _this8$selectedDeroga40 !== void 0 && (_this8$selectedDeroga40 = _this8$selectedDeroga40[credp]) !== null && _this8$selectedDeroga40 !== void 0 && (_this8$selectedDeroga40 = _this8$selectedDeroga40['autres_suretes_diverses']) !== null && _this8$selectedDeroga40 !== void 0 && _this8$selectedDeroga40.length ? (_this8$selectedDeroga41 = _this8.selectedDerogation.dossier_credit) === null || _this8$selectedDeroga41 === void 0 || (_this8$selectedDeroga41 = _this8$selectedDeroga41[credp]) === null || _this8$selectedDeroga41 === void 0 ? void 0 : _this8$selectedDeroga41['autres_suretes_diverses'] : _this8.autres_suretes_diverses;
          _this8.allSuretes = _this8.suretes_diverses.concat(_this8.autres_suretes_diverses);
          return;
        }
      })["catch"](function (err) {
        console.error(err);
        _this8.loadingData = false;
      });
    },
    allowActions2: function allowActions2(data) {
      var _this9 = this;
      this.$axios.post(this.ebapisHost + 'creditbuilder/api/v1/derogations-allowactions/', data).then(function (response) {
        var _response$data;
        _this9.allow = (_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.allow;
        // console.log(response)
      })["catch"](function (error) {
        console.log(error);
      });
    }
  },
  computed: {
    // allSuretes() {
    //     if (this.selectedDerogationIndex != null) {
    //         return this.derogations[
    //             this.selectedDerogationIndex
    //         ]?.dossier_credit?.cred_pub_tb_4?.suretes_diverses?.concat(
    //             this.derogations[this.selectedDerogationIndex]
    //                 ?.dossier_credit?.cred_pub_tb_4?.autres_suretes_diverses
    //         );
    //     }
    //     return [];
    // },
    allowActions: function allowActions() {
      var _this$userData2, _this$dossier_credit7, _this$userData3, _this$dossier_credit8, _this$userData4, _this$dossier_credit9, _this$dossier_credit0;
      if (this.derogationManager.allowedRoles("directeur_general") == ((_this$userData2 = this.userData) === null || _this$userData2 === void 0 ? void 0 : _this$userData2.role_uuid) && ((_this$dossier_credit7 = this.dossier_credit) === null || _this$dossier_credit7 === void 0 || (_this$dossier_credit7 = _this$dossier_credit7.workflow) === null || _this$dossier_credit7 === void 0 || (_this$dossier_credit7 = _this$dossier_credit7.current_stage) === null || _this$dossier_credit7 === void 0 ? void 0 : _this$dossier_credit7.stage_id) == 1) {
        return true;
      }
      if (this.derogationManager.allowedRoles("directeur_regional") == ((_this$userData3 = this.userData) === null || _this$userData3 === void 0 ? void 0 : _this$userData3.role_uuid) && ((_this$dossier_credit8 = this.dossier_credit) === null || _this$dossier_credit8 === void 0 || (_this$dossier_credit8 = _this$dossier_credit8.workflow) === null || _this$dossier_credit8 === void 0 || (_this$dossier_credit8 = _this$dossier_credit8.current_stage) === null || _this$dossier_credit8 === void 0 ? void 0 : _this$dossier_credit8.stage_id) == 2) {
        return true;
      }
      if (this.derogationManager.allowedRoles("drcg") == ((_this$userData4 = this.userData) === null || _this$userData4 === void 0 ? void 0 : _this$userData4.role_uuid) && ((_this$dossier_credit9 = this.dossier_credit) === null || _this$dossier_credit9 === void 0 || (_this$dossier_credit9 = _this$dossier_credit9.workflow) === null || _this$dossier_credit9 === void 0 || (_this$dossier_credit9 = _this$dossier_credit9.current_stage) === null || _this$dossier_credit9 === void 0 ? void 0 : _this$dossier_credit9.stage_id) == 3 && !((_this$dossier_credit0 = this.dossier_credit) !== null && _this$dossier_credit0 !== void 0 && (_this$dossier_credit0 = _this$dossier_credit0.decision_logs) !== null && _this$dossier_credit0 !== void 0 && _this$dossier_credit0.some(function (dl) {
        return (dl === null || dl === void 0 ? void 0 : dl.outcome) == 1;
      }))) {
        return true;
      }
      return false;
    },
    hasFinalValidation: function hasFinalValidation() {
      var _this$dossier_credit1;
      var has_final_validation = (_this$dossier_credit1 = this.dossier_credit) === null || _this$dossier_credit1 === void 0 || (_this$dossier_credit1 = _this$dossier_credit1.decision_logs) === null || _this$dossier_credit1 === void 0 ? void 0 : _this$dossier_credit1.find(function (dl) {
        return (dl === null || dl === void 0 ? void 0 : dl.outcome) == 1;
      });
      return has_final_validation ? true : false;
    },
    allowedToRegularize: function allowedToRegularize() {
      var _this$userData5;
      var allowedToRegularizex = this.derogationManager.allowedRoles("directeur_credit") == ((_this$userData5 = this.userData) === null || _this$userData5 === void 0 ? void 0 : _this$userData5.role_uuid);
      return allowedToRegularizex;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/derogation/DER1.vue?vue&type=template&id=5e5a5588&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/derogation/DER1.vue?vue&type=template&id=5e5a5588&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$all_derogations, _vm$derogations, _ref, _vm$dossier_credit, _vm$selectedDerogatio, _vm$selectedDerogatio2, _vm$selectedDerogatio3, _vm$selectedDerogatio4, _vm$selectedDerogatio5, _vm$selectedDerogatio6, _vm$derogations2, _vm$selectedDerogatio7, _vm$all_derogations2, _vm$derogations3, _vm$selectedDerogatio1, _vm$selectedDerogatio10, _vm$selectedDerogatio11, _vm$selectedDerogatio12, _vm$selectedDerogatio13, _vm$selectedDerogatio14, _vm$selectedDerogatio15, _vm$selectedDerogatio16, _vm$selectedDerogatio17, _vm$selectedDerogatio18, _vm$selectedDerogatio19, _vm$selectedDerogatio20, _vm$selectedDerogatio21, _vm$selectedDerogatio22;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    attrs: {
      id: "memo_derogations"
    }
  }, [_c("div", {
    staticClass: "head-memorandum-title px-3 mb-2",
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("\n        DEROGATIONS\n    ")]), _vm._v(" "), _c("div", {
    staticClass: "row justify-content-center"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "row mx-0",
    "class": _vm.allow == false ? "justify-content-center" : ""
  }, [_c("div", {
    staticClass: "col-lg-8 col-6"
  }, [(_vm$all_derogations = _vm.all_derogations) !== null && _vm$all_derogations !== void 0 && _vm$all_derogations.length ? _c("div", {
    staticClass: "der-option pb-2"
  }, [_c("div", {
    staticClass: "input-group"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.searchInput,
      expression: "searchInput"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Rechercher par nom client, numéro dossier ou montant"
    },
    domProps: {
      value: _vm.searchInput
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.searchInput = $event.target.value;
      }, function ($event) {
        return _vm.searchDerogation();
      }]
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "input-group-append"
  }, [_c("button", {
    staticClass: "btn btn-dark",
    staticStyle: {
      "border-bottom-left-radius": "0",
      "border-top-left-radius": "0"
    },
    on: {
      click: function click($event) {
        return _vm.resetSearch();
      }
    }
  }, [_c("i", {
    staticClass: "icofont-redo"
  })])])])]) : _vm._e()]), _vm._v(" "), (_vm$derogations = _vm.derogations) !== null && _vm$derogations !== void 0 && _vm$derogations.length && _vm.allow == true && !((_ref = [1, -1]) !== null && _ref !== void 0 && _ref.includes((_vm$dossier_credit = _vm.dossier_credit) === null || _vm$dossier_credit === void 0 || (_vm$dossier_credit = _vm$dossier_credit.final_outcome) === null || _vm$dossier_credit === void 0 ? void 0 : _vm$dossier_credit.outcome)) ? _c("div", {
    staticClass: "col-lg-4 col-6 mb-2 der_options-block justify-content-end"
  }, [(_vm$selectedDerogatio = _vm.selectedDerogations) !== null && _vm$selectedDerogatio !== void 0 && _vm$selectedDerogatio.length ? _c("div", {
    staticClass: "der-option",
    staticStyle: {
      "padding-right": "10px"
    }
  }, [_vm._v("\n                        (" + _vm._s((_vm$selectedDerogatio2 = _vm.selectedDerogations) === null || _vm$selectedDerogatio2 === void 0 ? void 0 : _vm$selectedDerogatio2.length) + ")\n                    ")]) : _vm._e(), _vm._v(" "), ((_vm$selectedDerogatio3 = _vm.selectedDerogations) === null || _vm$selectedDerogatio3 === void 0 ? void 0 : _vm$selectedDerogatio3.length) > 1 ? [_c("div", {
    staticClass: "der_option"
  }, [_c("button", {
    staticClass: "btn border-none p-0",
    attrs: {
      disabled: !((_vm$selectedDerogatio4 = _vm.selectedDerogations) !== null && _vm$selectedDerogatio4 !== void 0 && _vm$selectedDerogatio4.length),
      title: "Refuser les dérogations selectionnées"
    },
    on: {
      click: function click($event) {
        return _vm.approveOrDenyDerogation(null, "NON");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-close text-danger",
    staticStyle: {
      "font-size": "1.6rem"
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "der_option"
  }, [_c("button", {
    staticClass: "btn border-none p-0",
    attrs: {
      disabled: !((_vm$selectedDerogatio5 = _vm.selectedDerogations) !== null && _vm$selectedDerogatio5 !== void 0 && _vm$selectedDerogatio5.length),
      title: "Approuver les dérogations selectionnées"
    },
    on: {
      click: function click($event) {
        return _vm.approveOrDenyDerogation(null, "OUI");
      }
    }
  }, [_c("i", {
    staticClass: "icofont-check text-success",
    staticStyle: {
      "font-size": "1.9rem"
    }
  })])]), _vm._v(" "), _vm.derogations.some(function (d) {
    var _d$approbations;
    return (d === null || d === void 0 || (_d$approbations = d.approbations) === null || _d$approbations === void 0 ? void 0 : _d$approbations.length) > 0;
  }) ? _c("div", {
    staticClass: "der_option"
  }, [_c("button", {
    staticClass: "btn border-none p-0",
    attrs: {
      disabled: !((_vm$selectedDerogatio6 = _vm.selectedDerogations) !== null && _vm$selectedDerogatio6 !== void 0 && _vm$selectedDerogatio6.length),
      title: "Suivre la décision précédente"
    },
    on: {
      click: function click($event) {
        return _vm.followDecision();
      }
    }
  }, [_c("i", {
    staticClass: "icofont-check-circled text-success",
    staticStyle: {
      "font-size": "1.6rem"
    }
  })])]) : _vm._e()] : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "der_option"
  }, [_c("input", {
    staticClass: "checkbox-style der_checkbox",
    attrs: {
      type: "checkbox",
      title: "Sélectionner / Déselectionner toutes les dérogations"
    },
    domProps: {
      checked: ((_vm$derogations2 = _vm.derogations) === null || _vm$derogations2 === void 0 ? void 0 : _vm$derogations2.length) && ((_vm$selectedDerogatio7 = _vm.selectedDerogations) === null || _vm$selectedDerogatio7 === void 0 ? void 0 : _vm$selectedDerogatio7.length) == ((_vm$all_derogations2 = _vm.all_derogations) === null || _vm$all_derogations2 === void 0 ? void 0 : _vm$all_derogations2.length)
    },
    on: {
      click: function click($event) {
        return _vm.toggleDerogationSelection();
      }
    }
  })])], 2) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [(_vm$derogations3 = _vm.derogations) !== null && _vm$derogations3 !== void 0 && _vm$derogations3.length ? _c("div", {
    staticClass: "table-responsive p-2",
    staticStyle: {
      "padding-bottom": "100px"
    }
  }, [_c("table", {
    staticClass: "table"
  }, [_c("thead", [_c("tr", [_c("th", [_vm._v("N°")]), _vm._v(" "), _c("th", {
    staticClass: "min150px"
  }, [_vm._v("Dossier")]), _vm._v(" "), _c("th", {
    staticClass: "min300px"
  }, [_vm._v("\n                                Exceptions et garanties concernées par la\n                                dérogation\n                            ")]), _vm._v(" "), _c("th", {
    staticClass: "min200px"
  }, [_vm._v("Commentaire")]), _vm._v(" "), _vm.allow == true ? _c("th", {
    staticClass: "min100px"
  }, [_vm._v("\n                                Action\n                            ")]) : _vm._e(), _vm._v(" "), _vm.derogations.some(function (d) {
    var _d$approbations2;
    return (d === null || d === void 0 || (_d$approbations2 = d.approbations) === null || _d$approbations2 === void 0 ? void 0 : _d$approbations2.length) > 0;
  }) ? _c("th", {
    staticClass: "min150px"
  }, [_vm._v("\n                                Décisions\n                            ")]) : _vm._e(), _vm._v(" "), _c("th", [_vm._v("Délai de régularisation")]), _vm._v(" "), _vm.hasFinalValidation ? _c("th", [_vm._v("\n                                Régularisation\n                            ")]) : _vm._e(), _vm._v(" "), _vm.hasFinalValidation && _vm.derogations.some(function (d) {
    return d === null || d === void 0 ? void 0 : d.commentaire_regularisation;
  }) ? _c("th", [_vm._v("\n                                Commentaire régularisation\n                            ")]) : _vm._e(), _vm._v(" "), _c("th")])]), _vm._v(" "), _c("tbody", _vm._l(_vm.derogations, function (derogation, index) {
    var _vm$selectedDerogatio8, _derogation$dossier_c2, _derogation$dossier_c3, _derogation$dossier_c4, _vm$dossier_credit2, _vm$dossier_credit3, _derogation$approbati, _vm$dossier_credit4, _vm$selectedDerogatio9;
    return _c("tr", {
      key: index,
      "class": (_vm$selectedDerogatio8 = _vm.selectedDerogations) !== null && _vm$selectedDerogatio8 !== void 0 && _vm$selectedDerogatio8.includes(derogation.id) ? "der_is_selected" : ""
    }, [_c("td", [_vm._v(_vm._s(index + 1))]), _vm._v(" "), _c("td", [(derogation === null || derogation === void 0 ? void 0 : derogation.dossier_credit) != null ? _c("small", {
      attrs: {
        title: "Voir les détails du dossier"
      },
      on: {
        click: function click($event) {
          var _derogation$dossier_c;
          return _vm.handleOpenDoss(derogation === null || derogation === void 0 || (_derogation$dossier_c = derogation.dossier_credit) === null || _derogation$dossier_c === void 0 ? void 0 : _derogation$dossier_c.cred_pub_key);
        }
      }
    }, [_c("b", [_vm._v("Montant:")]), _vm._v("\n                                    " + _vm._s(_vm._f("formatNumber")(_vm.derogationManager.extractApprovedAmount(derogation === null || derogation === void 0 || (_derogation$dossier_c2 = derogation.dossier_credit) === null || _derogation$dossier_c2 === void 0 ? void 0 : _derogation$dossier_c2.caract_inter_pret))) + "\n                                    \n                                    "), _c("br"), _vm._v(" "), _c("b", [_vm._v("Client:")]), _vm._v("\n                                    " + _vm._s(derogation === null || derogation === void 0 || (_derogation$dossier_c3 = derogation.dossier_credit) === null || _derogation$dossier_c3 === void 0 || (_derogation$dossier_c3 = _derogation$dossier_c3.caf_recorded_file) === null || _derogation$dossier_c3 === void 0 || (_derogation$dossier_c3 = _derogation$dossier_c3.client) === null || _derogation$dossier_c3 === void 0 ? void 0 : _derogation$dossier_c3.nomcli) + "\n                                    "), _c("br"), _vm._v(" "), _c("span", {
      staticClass: "cofina-text link-obj"
    }, [_c("u", [_vm._v(_vm._s(derogation === null || derogation === void 0 || (_derogation$dossier_c4 = derogation.dossier_credit) === null || _derogation$dossier_c4 === void 0 ? void 0 : _derogation$dossier_c4.doss_name))])])]) : _c("div", [_c("i", {
      staticClass: "icofont-rounded-double-left"
    }), _vm._v(" "), _c("small", [_vm._v("Veuillez selectionner le dossier\n                                        crédit")])])]), _vm._v(" "), _c("td", [_c("div", {
      staticClass: "textarea-content",
      domProps: {
        innerHTML: _vm._s(derogation === null || derogation === void 0 ? void 0 : derogation.garanties_c_ap_derogation)
      }
    })]), _vm._v(" "), _c("td", [_c("div", {
      staticClass: "textarea-content",
      domProps: {
        innerHTML: _vm._s(derogation === null || derogation === void 0 ? void 0 : derogation.commentaire)
      }
    })]), _vm._v(" "), _vm.allow == true ? _c("td", [_c("button", {
      staticClass: "btn btn-sm m-1",
      "class": _vm.decisionIsActive(derogation === null || derogation === void 0 ? void 0 : derogation.approbations, "OUI") ? "btn-success" : _vm.actionBtnClass(derogation === null || derogation === void 0 ? void 0 : derogation.approbations, "OUI"),
      attrs: {
        disabled: (_vm$dossier_credit2 = _vm.dossier_credit) === null || _vm$dossier_credit2 === void 0 || (_vm$dossier_credit2 = _vm$dossier_credit2.decision_logs) === null || _vm$dossier_credit2 === void 0 ? void 0 : _vm$dossier_credit2.find(function (el) {
          var _vm$userData;
          return el.given_by == ((_vm$userData = _vm.userData) === null || _vm$userData === void 0 ? void 0 : _vm$userData.user_id);
        })
      },
      on: {
        click: function click($event) {
          return _vm.approveOrDenyDerogation(derogation, "OUI");
        }
      }
    }, [_vm._v("\n                                    Oui\n                                    "), _vm.decisionIsActive(derogation === null || derogation === void 0 ? void 0 : derogation.approbations, "OUI") ? _c("i", {
      staticClass: "icofont-check"
    }) : _vm._e()]), _vm._v(" "), _c("button", {
      staticClass: "btn btn-sm m-1",
      "class": _vm.decisionIsActive(derogation === null || derogation === void 0 ? void 0 : derogation.approbations, "NON") ? "btn-danger" : _vm.actionBtnClass(derogation === null || derogation === void 0 ? void 0 : derogation.approbations, "NON"),
      attrs: {
        disabled: (_vm$dossier_credit3 = _vm.dossier_credit) === null || _vm$dossier_credit3 === void 0 || (_vm$dossier_credit3 = _vm$dossier_credit3.decision_logs) === null || _vm$dossier_credit3 === void 0 ? void 0 : _vm$dossier_credit3.find(function (el) {
          var _vm$userData2;
          return el.given_by == ((_vm$userData2 = _vm.userData) === null || _vm$userData2 === void 0 ? void 0 : _vm$userData2.user_id);
        })
      },
      on: {
        click: function click($event) {
          return _vm.approveOrDenyDerogation(derogation, "NON");
        }
      }
    }, [_vm._v("\n                                    Non\n                                    "), _vm.decisionIsActive(derogation === null || derogation === void 0 ? void 0 : derogation.approbations, "NON") ? _c("i", {
      staticClass: "icofont-check"
    }) : _vm._e()])]) : _vm._e(), _vm._v(" "), (derogation === null || derogation === void 0 || (_derogation$approbati = derogation.approbations) === null || _derogation$approbati === void 0 ? void 0 : _derogation$approbati.length) > 0 ? _c("td", _vm._l(derogation === null || derogation === void 0 ? void 0 : derogation.approbations, function (approbation, index) {
      var _approbation$user;
      return _c("div", {
        key: "approbation_" + index,
        staticClass: "p-1 custom-bb"
      }, [_vm._v("\n                                    " + _vm._s(approbation === null || approbation === void 0 || (_approbation$user = approbation.user) === null || _approbation$user === void 0 ? void 0 : _approbation$user.role) + "\n                                    "), _c("span", {
        staticClass: "decision-style",
        "class": {
          "text-danger": (approbation === null || approbation === void 0 ? void 0 : approbation.actor_decision) == "NON",
          "text-success": (approbation === null || approbation === void 0 ? void 0 : approbation.actor_decision) == "OUI"
        }
      }, [_vm._v(_vm._s(approbation === null || approbation === void 0 ? void 0 : approbation.actor_decision))])]);
    }), 0) : _vm._e(), _vm._v(" "), _c("td", {
      staticStyle: {
        "min-width": "150px"
      }
    }, [derogation !== null && derogation !== void 0 && derogation.delai_regularisation ? _c("div", [_c("span", [_vm._v(_vm._s(_vm._f("formatDate")(derogation.delai_regularisation)))])]) : _vm._e()]), _vm._v(" "), _vm.hasFinalValidation ? _c("td", {
      staticClass: "text-center"
    }, [derogation !== null && derogation !== void 0 && derogation.approbations.find(function (el) {
      return el.actor_decision == "OUI" && el.user.role_uuid == "aLKrwopT2gfloZL5UVFb8";
    }) ? _c("div", {
      staticClass: "tampon"
    }, [_c("span", {
      staticClass: "stamp is-approved"
    }, [_vm._v("Approuvé")])]) : _vm._e(), _vm._v(" "), derogation !== null && derogation !== void 0 && derogation.approbations.find(function (el) {
      return el.actor_decision == "NON" && el.user.role_uuid == "aLKrwopT2gfloZL5UVFb8";
    }) ? _c("div", {
      staticClass: "tampon"
    }, [_c("span", {
      staticClass: "stamp is-nope"
    }, [_vm._v("Refusé")])]) : _vm._e(), _vm._v(" "), _vm.allowedToRegularize && !(derogation !== null && derogation !== void 0 && derogation.date_regularisation) && derogation !== null && derogation !== void 0 && derogation.approbations.find(function (el) {
      return el.actor_decision == "OUI" && el.user.role_uuid == "aLKrwopT2gfloZL5UVFb8";
    }) ? _c("button", {
      staticClass: "btn btn-dark btn-sm",
      on: {
        click: function click($event) {
          return _vm.flagToRegularize(index, derogation);
        }
      }
    }, [_vm._v("\n                                    Régulariser\n                                ")]) : _vm._e(), _vm._v(" "), derogation !== null && derogation !== void 0 && derogation.date_regularisation ? [_c("div", [_c("span", {
      attrs: {
        title: "Date de régularisation"
      }
    }, [_c("b", {
      staticClass: "text-success"
    }, [_c("i", {
      staticClass: "icofont-ui-calendar"
    }), _vm._v("\n                                                " + _vm._s(_vm._f("formatDate")(derogation.date_regularisation)))])])]), _vm._v(" "), _c("span", [_vm._m(0, true), _vm._v(" "), _c("span", {
      attrs: {
        title: _vm.getStatusLabel(derogation === null || derogation === void 0 ? void 0 : derogation.statut_apres_delai_reg)
      }
    }, [_vm._v(_vm._s(derogation === null || derogation === void 0 ? void 0 : derogation.statut_apres_delai_reg))])]), _vm._v(" "), _c("br"), _vm._v(" "), _c("button", {
      staticClass: "btn btn-sm btn-dark",
      attrs: {
        title: "Pièces jointes"
      },
      on: {
        click: function click($event) {
          return _vm.showAttachment(derogation);
        }
      }
    }, [_c("i", {
      staticClass: "icofont-attachment"
    })])] : _vm._e()], 2) : _vm._e(), _vm._v(" "), _vm.hasFinalValidation && _vm.derogations.some(function (d) {
      return d === null || d === void 0 ? void 0 : d.commentaire_regularisation;
    }) ? _c("td", [_vm._v("\n                                " + _vm._s(derogation === null || derogation === void 0 ? void 0 : derogation.commentaire_regularisation) + "\n                            ")]) : _vm._e(), _vm._v(" "), _c("td", [_vm.allow == true ? _c("div", {
      staticClass: "der_options-block"
    }, [_c("div", {
      staticClass: "der_option"
    }, [_c("input", {
      staticClass: "checkbox-style der_checkbox",
      attrs: {
        disabled: (_vm$dossier_credit4 = _vm.dossier_credit) === null || _vm$dossier_credit4 === void 0 || (_vm$dossier_credit4 = _vm$dossier_credit4.decision_logs) === null || _vm$dossier_credit4 === void 0 ? void 0 : _vm$dossier_credit4.find(function (el) {
          var _vm$userData3;
          return el.given_by == ((_vm$userData3 = _vm.userData) === null || _vm$userData3 === void 0 ? void 0 : _vm$userData3.user_id);
        }),
        type: "checkbox",
        title: "Selectionner / Déselectionner la dérogation" + (index + 1)
      },
      domProps: {
        checked: (_vm$selectedDerogatio9 = _vm.selectedDerogations) === null || _vm$selectedDerogatio9 === void 0 ? void 0 : _vm$selectedDerogatio9.includes(derogation.id)
      },
      on: {
        click: function click($event) {
          return _vm.toggleDerogationSelection(derogation);
        }
      }
    })])]) : _vm._e()])]);
  }), 0)])]) : _vm._e()])]), _vm._v(" "), _c("modal", {
    staticClass: "pb-5",
    attrs: {
      name: "approve_derogation",
      width: "700",
      height: "auto",
      adaptive: true,
      resizable: true
    }
  }, [_c("div", {
    staticClass: "p-4",
    staticStyle: {
      "max-height": "100%",
      "overflow-y": "auto"
    }
  }, [_c("div", {
    staticClass: "row border-bottom pb-3"
  }, [_c("div", {
    staticClass: "col-10 fw-bold"
  }, [_vm._v("\n                    Approbation de dérogation(s)\n                ")]), _vm._v(" "), _c("div", {
    staticClass: "col-2 text-right"
  }, [_c("i", {
    staticClass: "icofont-close",
    on: {
      click: function click($event) {
        return _vm.toggleModal("approve_derogation", "hide");
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "p-4 text-center"
  }, [_vm.selectedDerogationIndex != null ? _c("h6", [_vm._v("\n                    Vous êtes sur le point d'approuver la dérogation\n                    " + _vm._s(_vm.selectedDerogationIndex + 1) + "\n                ")]) : _c("h6", [_vm._v("\n                    Vous êtes sur le point d'approuver toutes les\n                    dérogations selectionnées\n                ")]), _vm._v(" "), _c("div", {
    staticClass: "text-center mt-4"
  }, [_c("button", {
    staticClass: "btn btn-lg btn-blue-color text-white"
  }, [_vm._v("\n                        Confirmer\n                    ")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-lg btn-dark",
    on: {
      click: function click($event) {
        return _vm.toggleModal("approve_derogation", "hide");
      }
    }
  }, [_vm._v("\n                        Annuler\n                    ")])])])])]), _vm._v(" "), _c("modal", {
    staticClass: "pb-5",
    attrs: {
      name: "regularize_derogation",
      width: "500",
      height: "auto",
      adaptive: true,
      resizable: true
    }
  }, [_c("div", {
    staticClass: "p-4",
    staticStyle: {
      "max-height": "100%",
      "overflow-y": "auto"
    }
  }, [_c("div", {
    staticClass: "row border-bottom pb-3"
  }, [_c("div", {
    staticClass: "col-10 fw-bold"
  }, [_vm._v("\n                    Régularisation de dérogation(s)\n                ")]), _vm._v(" "), _c("div", {
    staticClass: "col-2 text-right"
  }, [_c("i", {
    staticClass: "icofont-close",
    on: {
      click: function click($event) {
        return _vm.toggleModal("regularize_derogation", "hide");
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "p-4"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 mb-3 text-center"
  }, [_c("i", {
    staticClass: "icofont-warning text-warning",
    staticStyle: {
      "font-size": "2rem"
    }
  }), _c("br"), _vm._v(" "), _c("small", [_vm._v("Veuillez renseigner tout les détails relatifs à\n                            la régularisation. "), _c("br"), _vm._v("\n                            Une fois validé, vous ne pourrez plus éditer la\n                            dérogation ("), _c("b", [_vm._v(_vm._s(_vm.selectedDerogationIndex != null ? _vm.selectedDerogationIndex + 1 : ""))]), _vm._v(").\n                        ")])]), _vm._v(" "), _c("div", {
    staticClass: "row mb-3"
  }, [_c("div", {
    staticClass: "col-lg-11 col-10 mb-2"
  }, [_c("label", {
    staticClass: "mb-2",
    attrs: {
      "for": ""
    }
  }, [_vm._v("Date de régularisation")]), _vm._v(" "), _c("date-input", {
    attrs: {
      color: "color: #000",
      value: _vm.regularizationDate
    },
    on: {
      input: function input($event) {
        return _vm.updateRegularizationDate($event);
      }
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-lg-1 col-2 text-center"
  }, [_c("button", {
    staticClass: "btn btn-dark",
    staticStyle: {
      position: "relative",
      top: "30px"
    },
    attrs: {
      title: "Pièces jointes"
    },
    on: {
      click: function click($event) {
        return _vm.openFileUploader();
      }
    }
  }, [_c("i", {
    staticClass: "icofont-attachment"
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "row mb-3"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("label", {
    staticClass: "mb-2",
    attrs: {
      "for": ""
    }
  }, [_vm._v("Commentaire")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.regularizationComment,
      expression: "regularizationComment"
    }],
    staticClass: "form-control",
    attrs: {
      rows: "3"
    },
    domProps: {
      value: _vm.regularizationComment
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.regularizationComment = $event.target.value;
      }
    }
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "text-center mt-4"
  }, [_c("button", {
    staticClass: "btn btn-danger",
    on: {
      click: function click($event) {
        return _vm.toggleModal("regularize_derogation", "hide");
      }
    }
  }, [_vm._v("\n                        Annuler\n                    ")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-success text-white",
    on: {
      click: function click($event) {
        return _vm.regularize();
      }
    }
  }, [_vm._v("\n                        Valider\n                    ")])])])])]), _vm._v(" "), _c("modal", {
    staticClass: "pb-5",
    attrs: {
      name: "search_dossier_credit",
      width: "1300",
      height: "auto",
      adaptive: true,
      resizable: true
    }
  }, [_c("div", {
    staticClass: "p-4",
    staticStyle: {
      "max-height": "100%",
      "overflow-y": "auto"
    }
  }, [_c("div", {
    staticClass: "row border-bottom pb-3"
  }, [_c("div", {
    staticClass: "col-10 fw-bold"
  }, [_vm._v("\n                    Détails sur le dossier credit | "), _c("button", {
    staticClass: "btn",
    staticStyle: {
      color: "red"
    },
    attrs: {
      title: "Ouvrir le dossier"
    },
    on: {
      click: function click($event) {
        var _vm$selectedDerogatio0;
        return _vm.handleOpenDoss((_vm$selectedDerogatio0 = _vm.selectedDerogation) === null || _vm$selectedDerogatio0 === void 0 || (_vm$selectedDerogatio0 = _vm$selectedDerogatio0.dossier_credit) === null || _vm$selectedDerogatio0 === void 0 ? void 0 : _vm$selectedDerogatio0.cred_pub_key);
      }
    }
  }, [_c("i", {
    staticClass: "icofont-folder-open cursor-pointer",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" Ouvrir le dossier")])]), _vm._v(" "), _c("div", {
    staticClass: "col-2 text-right"
  }, [_c("i", {
    staticClass: "icofont-close",
    on: {
      click: function click($event) {
        return _vm.toggleModal("search_dossier_credit", "hide");
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "row mt-2"
  }, [_vm.loadingData ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "d-flex justify-content-center text-center align-items-center text-muted py-4"
  }, [_c("div", [_c("span", {
    staticClass: "spinner-border spinner-border"
  }), _vm._v(" "), _c("h5", [_vm._v("\n                                Chargement des données en cours ... "), _c("br"), _vm._v("\n                                Ceci peut prendre un peu de temps\n                            ")])])])]) : [_c("div", [_c("table", {
    staticClass: "table table-bordered"
  }, [_c("tbody", [_c("tr", [_c("td", {
    staticClass: "col-4"
  }, [_c("b", [_vm._v("Agence : ")]), _vm._v(" " + _vm._s((_vm$selectedDerogatio1 = _vm.selectedDerogation) === null || _vm$selectedDerogatio1 === void 0 || (_vm$selectedDerogatio1 = _vm$selectedDerogatio1.dossier_credit) === null || _vm$selectedDerogatio1 === void 0 || (_vm$selectedDerogatio1 = _vm$selectedDerogatio1.caf_recorded_file) === null || _vm$selectedDerogatio1 === void 0 ? void 0 : _vm$selectedDerogatio1.agence))]), _vm._v(" "), _c("td", {
    staticClass: "col-4"
  }, [_c("b", [_vm._v("CAF : ")]), _vm._v(" " + _vm._s((_vm$selectedDerogatio10 = _vm.selectedDerogation) === null || _vm$selectedDerogatio10 === void 0 || (_vm$selectedDerogatio10 = _vm$selectedDerogatio10.dossier_credit) === null || _vm$selectedDerogatio10 === void 0 || (_vm$selectedDerogatio10 = _vm$selectedDerogatio10[_vm.tbArrays[0]]) === null || _vm$selectedDerogatio10 === void 0 ? void 0 : _vm$selectedDerogatio10.nom_complet_caf))]), _vm._v(" "), _c("td", {
    staticClass: "col-4"
  }, [_c("b", [_vm._v("Dossier : ")]), _vm._v(" " + _vm._s((_vm$selectedDerogatio11 = _vm.selectedDerogation) === null || _vm$selectedDerogatio11 === void 0 || (_vm$selectedDerogatio11 = _vm$selectedDerogatio11.dossier_credit) === null || _vm$selectedDerogatio11 === void 0 ? void 0 : _vm$selectedDerogatio11.doss_name) + "\n\n\n                                        \n                                    ")])]), _vm._v(" "), _c("tr", [_c("td", [_c("b", [_vm._v("Matricule : ")]), _vm._v(" " + _vm._s((_vm$selectedDerogatio12 = _vm.selectedDerogation) === null || _vm$selectedDerogatio12 === void 0 || (_vm$selectedDerogatio12 = _vm$selectedDerogatio12.dossier_credit) === null || _vm$selectedDerogatio12 === void 0 || (_vm$selectedDerogatio12 = _vm$selectedDerogatio12.caf_recorded_file) === null || _vm$selectedDerogatio12 === void 0 || (_vm$selectedDerogatio12 = _vm$selectedDerogatio12.client) === null || _vm$selectedDerogatio12 === void 0 ? void 0 : _vm$selectedDerogatio12.matcli))]), _vm._v(" "), _c("td", [_c("b", [_vm._v("Client : ")]), _vm._v(" " + _vm._s((_vm$selectedDerogatio13 = _vm.selectedDerogation) === null || _vm$selectedDerogatio13 === void 0 || (_vm$selectedDerogatio13 = _vm$selectedDerogatio13.dossier_credit) === null || _vm$selectedDerogatio13 === void 0 || (_vm$selectedDerogatio13 = _vm$selectedDerogatio13.caf_recorded_file) === null || _vm$selectedDerogatio13 === void 0 || (_vm$selectedDerogatio13 = _vm$selectedDerogatio13.client) === null || _vm$selectedDerogatio13 === void 0 ? void 0 : _vm$selectedDerogatio13.nomcli))]), _vm._v(" "), _c("td", [_c("b", [_vm._v("Type client : ")]), _vm._v(" " + _vm._s((_vm$selectedDerogatio14 = _vm.selectedDerogation) === null || _vm$selectedDerogatio14 === void 0 || (_vm$selectedDerogatio14 = _vm$selectedDerogatio14.dossier_credit) === null || _vm$selectedDerogatio14 === void 0 ? void 0 : _vm$selectedDerogatio14.categorie_client))])]), _vm._v(" "), _c("tr", [_c("td", [_c("b", [_vm._v("Type demande : ")]), _vm._v(" " + _vm._s((_vm$selectedDerogatio15 = _vm.selectedDerogation) === null || _vm$selectedDerogatio15 === void 0 || (_vm$selectedDerogatio15 = _vm$selectedDerogatio15.dossier_credit) === null || _vm$selectedDerogatio15 === void 0 || (_vm$selectedDerogatio15 = _vm$selectedDerogatio15.caf_recorded_file) === null || _vm$selectedDerogatio15 === void 0 ? void 0 : _vm$selectedDerogatio15.type_demande))]), _vm._v(" "), _c("td", [_c("b", [_vm._v("Type crédit : ")]), _vm._v(" " + _vm._s((_vm$selectedDerogatio16 = _vm.selectedDerogation) === null || _vm$selectedDerogatio16 === void 0 || (_vm$selectedDerogatio16 = _vm$selectedDerogatio16.dossier_credit) === null || _vm$selectedDerogatio16 === void 0 || (_vm$selectedDerogatio16 = _vm$selectedDerogatio16.caf_recorded_file) === null || _vm$selectedDerogatio16 === void 0 ? void 0 : _vm$selectedDerogatio16.type_de_pret))]), _vm._v(" "), _c("td", [_c("b", [_vm._v("Montant : ")]), _vm._v(" " + _vm._s(_vm._f("formatNumber")(_vm.derogationManager.extractApprovedAmount((_vm$selectedDerogatio17 = _vm.selectedDerogation) === null || _vm$selectedDerogatio17 === void 0 || (_vm$selectedDerogatio17 = _vm$selectedDerogatio17.dossier_credit) === null || _vm$selectedDerogatio17 === void 0 ? void 0 : _vm$selectedDerogatio17.caract_inter_pret))))])]), _vm._v(" "), _c("tr", [_c("td", [_c("b", [_vm._v("Niveau d'autorisation (Fonction) : ")]), _vm._v(" " + _vm._s(_vm.detenteurInfos((_vm$selectedDerogatio18 = _vm.selectedDerogation) === null || _vm$selectedDerogatio18 === void 0 ? void 0 : _vm$selectedDerogatio18.dossier_credit, "name")) + " (" + _vm._s(_vm.detenteurInfos((_vm$selectedDerogatio19 = _vm.selectedDerogation) === null || _vm$selectedDerogatio19 === void 0 ? void 0 : _vm$selectedDerogatio19.dossier_credit, "fonction")) + ")")]), _vm._v(" "), _c("td", [_c("b", [_vm._v("Date instruction dossier : ")]), _vm._v(" " + _vm._s(_vm.formatDate((_vm$selectedDerogatio20 = _vm.selectedDerogation) === null || _vm$selectedDerogatio20 === void 0 || (_vm$selectedDerogatio20 = _vm$selectedDerogatio20.dossier_credit) === null || _vm$selectedDerogatio20 === void 0 ? void 0 : _vm$selectedDerogatio20.created_at)))]), _vm._v(" "), _c("td", [_c("b", [_vm._v("Date approbation : ")]), _vm._v(" " + _vm._s(_vm.formatDate((_vm$selectedDerogatio21 = _vm.selectedDerogation) === null || _vm$selectedDerogatio21 === void 0 || (_vm$selectedDerogatio21 = _vm$selectedDerogatio21.dossier_credit) === null || _vm$selectedDerogatio21 === void 0 ? void 0 : _vm$selectedDerogatio21.closing_date)))])])])])]), _vm._v(" "), _vm.selectedDerogationIndex != null && ((_vm$selectedDerogatio22 = _vm.selectedDerogation) === null || _vm$selectedDerogatio22 === void 0 ? void 0 : _vm$selectedDerogatio22.dossier_credit) != null ? [_c("div", {
    staticClass: "col-12 mb-2 mt-2"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("h5", [_vm._v("Garanties retenues")])])]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive mb-2 pb-0"
  }, [_c("table", {
    staticClass: "table table-bordered mb-3"
  }, [_c("thead", [_c("tr", [_c("th", {
    staticClass: "col-12 text-center py-2 m-0",
    attrs: {
      colspan: "7"
    }
  }, [_vm._v("\n                                            Hypothèque ferme (affectation\n                                            hypothécaire)\n                                        ")])]), _vm._v(" "), _c("tr", {}, [_c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Hypothèque")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Propriétaire")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Date d'achat")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("\n                                            Adresse de l'emplacement\n                                        ")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("\n                                            Date d'évaluation\n                                        ")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("\n                                            Valeur marchande\n                                        ")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("\n                                            Valeur considérée\n                                        ")])])]), _vm._v(" "), _c("tbody", {
    staticStyle: {
      "font-size": "0.9rem"
    }
  }, [_vm._l(_vm.hypotheques, function (hypotheque, key) {
    return _c("tr", {
      key: key
    }, [_c("td", [_vm._v("\n                                            " + _vm._s(hypotheque === null || hypotheque === void 0 ? void 0 : hypotheque.bien_hypotheque) + "\n                                        ")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(hypotheque === null || hypotheque === void 0 ? void 0 : hypotheque.proprietaire))]), _vm._v(" "), _c("td", [_vm._v("\n                                            " + _vm._s(_vm._f("formatDate")(hypotheque === null || hypotheque === void 0 ? void 0 : hypotheque.annee_achat)) + "\n                                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                                            " + _vm._s(hypotheque === null || hypotheque === void 0 ? void 0 : hypotheque.adresse_emplacement) + "\n                                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                                            " + _vm._s(_vm._f("formatDate")(hypotheque === null || hypotheque === void 0 ? void 0 : hypotheque.date_evaluation)) + "\n                                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                                            " + _vm._s(_vm._f("formatNumber")(hypotheque === null || hypotheque === void 0 ? void 0 : hypotheque.valeur_marchande)) + "\n                                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                                            " + _vm._s(_vm._f("formatNumber")(hypotheque === null || hypotheque === void 0 ? void 0 : hypotheque.valeur_considere)) + "\n                                        ")])]);
  }), _vm._v(" "), _c("tr", {
    staticClass: "border-bottom-0"
  }, [_c("td", {
    staticClass: "border bg-grey",
    attrs: {
      colspan: "5"
    }
  }, [_vm._v("\n                                            Total\n                                        ")]), _vm._v(" "), _c("td", {
    staticClass: "border bg-grey"
  }, [_vm._v("\n                                            " + _vm._s(_vm._f("formatNumber")(_vm.total_hypotheques_valeur_marchande)) + "\n                                        ")]), _vm._v(" "), _c("td", {
    staticClass: "border bg-grey"
  }, [_vm._v("\n                                            " + _vm._s(_vm._f("formatNumber")(_vm.total_hypotheques_valeur_considere)) + "\n                                        ")])])], 2)]), _vm._v(" "), _c("br")]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive mb-2 pb-0"
  }, [_c("table", {
    staticClass: "table table-bordered mb-3"
  }, [_c("thead", [_c("tr", [_c("th", {
    staticClass: "col-12 text-center py-2 m-0",
    attrs: {
      colspan: "8"
    }
  }, [_vm._v("\n                                            Gages\n                                        ")])]), _vm._v(" "), _c("tr", {}, [_c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Gage")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Propriétaire")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Date d'achat")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("\n                                            Adresse de l'emplacement\n                                        ")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("\n                                            Date d'évaluation\n                                        ")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("\n                                            Valeur marchande\n                                        ")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("\n                                            Valeur considérée\n                                        ")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("\n                                            Date de mise en circulation\n                                        ")])])]), _vm._v(" "), _c("tbody", {
    staticStyle: {
      "font-size": "0.9rem"
    }
  }, [_vm._l(_vm.gages, function (gage, key) {
    return _c("tr", {
      key: key
    }, [_c("td", [_vm._v(_vm._s(gage === null || gage === void 0 ? void 0 : gage.bien_a_gage))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(gage === null || gage === void 0 ? void 0 : gage.proprietaire))]), _vm._v(" "), _c("td", [_vm._v("\n                                            " + _vm._s(_vm._f("formatDate")(gage === null || gage === void 0 ? void 0 : gage.annee_achat)) + "\n                                        ")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(gage === null || gage === void 0 ? void 0 : gage.adresse_emplacement))]), _vm._v(" "), _c("td", [_vm._v("\n                                            " + _vm._s(_vm._f("formatDate")(gage === null || gage === void 0 ? void 0 : gage.date_evaluation)) + "\n                                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                                            " + _vm._s(_vm._f("formatNumber")(gage === null || gage === void 0 ? void 0 : gage.valeur_marchande)) + "\n                                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                                            " + _vm._s(_vm._f("formatNumber")(gage === null || gage === void 0 ? void 0 : gage.valeur_considere)) + "\n                                        ")]), _vm._v(" "), gage !== null && gage !== void 0 && gage.date_mise_circulation ? _c("td", [_vm._v("\n                                            " + _vm._s(_vm._f("formatDate")(gage === null || gage === void 0 ? void 0 : gage.date_mise_circulation)) + "\n                                        ")]) : _c("td")]);
  }), _vm._v(" "), _c("tr", {
    staticClass: "border-bottom-0"
  }, [_c("td", {
    staticClass: "border bg-grey",
    attrs: {
      colspan: "5"
    }
  }, [_vm._v("\n                                            Total\n                                        ")]), _vm._v(" "), _c("td", {
    staticClass: "border bg-grey"
  }, [_vm._v("\n                                            " + _vm._s(_vm._f("formatNumber")(_vm.total_gages_valeur_marchande)) + "\n                                        ")]), _vm._v(" "), _c("td", {
    staticClass: "border bg-grey"
  }, [_vm._v("\n                                            " + _vm._s(_vm._f("formatNumber")(_vm.total_gages_valeur_considere)) + "\n                                        ")]), _vm._v(" "), _c("td", {
    staticClass: "border bg-grey"
  })])], 2)]), _vm._v(" "), _c("br")]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered mb-3"
  }, [_c("thead", [_c("tr", [_c("th", {
    staticClass: "col-12 text-center py-2 m-0",
    attrs: {
      colspan: "8"
    }
  }, [_vm._v("\n                                            Cautionnement solidaire\n                                        ")])]), _vm._v(" "), _c("tr", {}, [_c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Nom et prénoms")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Profession")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Indicatif")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("\n                                            Numéro de téléphone\n                                        ")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Localisation")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("\n                                            Revenus moyens / mois\n                                        ")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("\n                                            Valeur patrimoine\n                                        ")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("\n                                            Valeur cautionnement\n                                        ")])])]), _vm._v(" "), _c("tbody", {
    staticStyle: {
      "font-size": "0.9rem"
    }
  }, [_vm._l(_vm.cautionnement_solidaires, function (cautionnement, key) {
    return _c("tr", {
      key: key
    }, [_c("td", [_vm._v("\n                                            " + _vm._s(cautionnement === null || cautionnement === void 0 ? void 0 : cautionnement.nom_prenoms) + "\n                                        ")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(cautionnement === null || cautionnement === void 0 ? void 0 : cautionnement.profession))]), _vm._v(" "), _c("td", [_vm._v("\n                                            " + _vm._s(cautionnement === null || cautionnement === void 0 ? void 0 : cautionnement.indicatif_caution_solidaire) + "\n                                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                                            " + _vm._s(cautionnement === null || cautionnement === void 0 ? void 0 : cautionnement.numero_tel_caution_solidaire) + "\n                                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                                            " + _vm._s(cautionnement === null || cautionnement === void 0 ? void 0 : cautionnement.localisation_caution_solidaire) + "\n                                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                                            " + _vm._s(_vm._f("formatNumber")(cautionnement === null || cautionnement === void 0 ? void 0 : cautionnement.revenu_mensuel)) + "\n                                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                                            " + _vm._s(_vm._f("formatNumber")(cautionnement === null || cautionnement === void 0 ? void 0 : cautionnement.valeur_patrimoine)) + "\n                                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                                            " + _vm._s(_vm._f("formatNumber")(cautionnement === null || cautionnement === void 0 ? void 0 : cautionnement.valeur_cautionnement)) + "\n                                        ")])]);
  }), _vm._v(" "), _c("tr", {
    staticClass: "border-bottom-0"
  }, [_c("td", {
    staticClass: "border bg-grey",
    attrs: {
      colspan: "5"
    }
  }, [_vm._v("\n                                            Total\n                                        ")]), _vm._v(" "), _c("td", {
    staticClass: "border bg-grey"
  }, [_vm._v("\n                                            " + _vm._s(_vm._f("formatNumber")(_vm.total_cautionnement_solidaires_valeur_revenu_mensuel)) + "\n                                        ")]), _vm._v(" "), _c("td", {
    staticClass: "border bg-grey"
  }, [_vm._v("\n                                            " + _vm._s(_vm._f("formatNumber")(_vm.total_cautionnement_solidaires_valeur_patrimoine)) + "\n                                        ")]), _vm._v(" "), _c("td", {
    staticClass: "border bg-grey"
  }, [_vm._v("\n                                            " + _vm._s(_vm._f("formatNumber")(_vm.total_cautionnement_solidaires_valeur_cautionnement)) + "\n                                        ")])])], 2)]), _vm._v(" "), _c("br")]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered mb-1"
  }, [_c("thead", [_c("tr", [_c("th", {
    staticClass: "col-12 text-center py-2 m-0",
    attrs: {
      colspan: "10"
    }
  }, [_vm._v("\n                                            Caution hypothécaire/Promesse\n                                            d'affectation hypothecaire\n                                        ")])]), _vm._v(" "), _c("tr", {}, [_c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("\n                                            Cautions hypothecaires\n                                        ")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("\n                                            Propriétaire\n                                        ")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("\n                                            N° du titre foncier\n                                        ")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("\n                                            Date d'attribution\n                                        ")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("\n                                            Adresse de l'emplacement\n                                        ")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Longitude")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Latitude")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("\n                                            Date d'evaluation\n                                        ")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("\n                                            Valeur marchande\n                                        ")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("\n                                            Valeur considerée\n                                        ")])])]), _vm._v(" "), _c("tbody", {
    staticStyle: {
      "font-size": "0.9rem"
    }
  }, [_vm._l(_vm.caution_hypothecaires, function (caution, key) {
    return _c("tr", {
      key: key
    }, [_c("td", [_vm._v(_vm._s(caution === null || caution === void 0 ? void 0 : caution.bien))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(caution === null || caution === void 0 ? void 0 : caution.proprietaire))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(caution === null || caution === void 0 ? void 0 : caution.numero_tel))]), _vm._v(" "), _c("td", [_vm._v("\n                                            " + _vm._s(_vm._f("formatDate")(caution === null || caution === void 0 ? void 0 : caution.annee_achat)) + "\n                                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                                            " + _vm._s(caution === null || caution === void 0 ? void 0 : caution.adresse_emplacement) + "\n                                        ")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(caution === null || caution === void 0 ? void 0 : caution.longitude))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(caution === null || caution === void 0 ? void 0 : caution.lattitude))]), _vm._v(" "), _c("td", [_vm._v("\n                                            " + _vm._s(_vm._f("formatDate")(caution === null || caution === void 0 ? void 0 : caution.date_evaluation)) + "\n                                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                                            " + _vm._s(_vm._f("formatNumber")(caution === null || caution === void 0 ? void 0 : caution.valeur_marchande)) + "\n                                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                                            " + _vm._s(_vm._f("formatNumber")(caution === null || caution === void 0 ? void 0 : caution.valeur_considere)) + "\n                                        ")])]);
  }), _vm._v(" "), _c("tr", {
    staticClass: "border-bottom-0"
  }, [_c("td", {
    staticClass: "border bg-grey",
    attrs: {
      colspan: "8"
    }
  }, [_vm._v("\n                                            Total\n                                        ")]), _vm._v(" "), _c("td", {
    staticClass: "border bg-grey"
  }, [_vm._v("\n                                            " + _vm._s(_vm._f("formatNumber")(_vm.total_caution_hypothecaires_valeur_marchande)) + "\n                                        ")]), _vm._v(" "), _c("td", {
    staticClass: "border bg-grey"
  }, [_vm._v("\n                                            " + _vm._s(_vm._f("formatNumber")(_vm.total_caution_hypothecaires_valeur_considere)) + "\n                                        ")])])], 2)]), _vm._v(" "), _c("br")]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-bordered mb-3"
  }, [_c("thead", [_c("tr", [_c("th", {
    staticClass: "col-12 text-center py-2 m-0",
    attrs: {
      colspan: "6"
    }
  }, [_vm._v("\n                                            Protections financières éligibles\n                                            (Garantie/Assurance crédit)\n                                        ")])]), _vm._v(" "), _c("tr", {}, [_c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Garantie")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("Institution")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("\n                                            Date d'attribution\n                                        ")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("\n                                            Date d'evaluation\n                                        ")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("\n                                            Valeur marchande\n                                        ")]), _vm._v(" "), _c("td", {
    staticClass: "fw-bold"
  }, [_vm._v("\n                                            Valeur considerée\n                                        ")])])]), _vm._v(" "), _c("tbody", {
    staticStyle: {
      "font-size": "0.9rem"
    }
  }, [_vm._l(_vm.protection_financieres, function (protection, key) {
    return _c("tr", {
      key: key
    }, [_c("td", [_vm._v(_vm._s(protection === null || protection === void 0 ? void 0 : protection.garantie))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(protection === null || protection === void 0 ? void 0 : protection.institution))]), _vm._v(" "), _c("td", [_vm._v("\n                                            " + _vm._s(_vm._f("formatDate")(protection === null || protection === void 0 ? void 0 : protection.date_attribution)) + "\n                                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                                            " + _vm._s(_vm._f("formatDate")(protection === null || protection === void 0 ? void 0 : protection.date_evaluation)) + "\n                                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                                            " + _vm._s(_vm._f("formatNumber")(protection === null || protection === void 0 ? void 0 : protection.valeur_marchande)) + "\n                                        ")]), _vm._v(" "), _c("td", [_vm._v("\n                                            " + _vm._s(_vm._f("formatNumber")(protection === null || protection === void 0 ? void 0 : protection.valeur_considere)) + "\n                                        ")])]);
  }), _vm._v(" "), _c("tr", {
    staticClass: "border-bottom-0"
  }, [_c("td", {
    staticClass: "border bg-grey",
    attrs: {
      colspan: "4"
    }
  }, [_vm._v("\n                                            Total\n                                        ")]), _vm._v(" "), _c("td", {
    staticClass: "border bg-grey"
  }, [_vm._v("\n                                            " + _vm._s(_vm._f("formatNumber")(_vm.total_protection_financieres_valeur_marchande)) + "\n                                        ")]), _vm._v(" "), _c("td", {
    staticClass: "border bg-grey"
  }, [_vm._v("\n                                            " + _vm._s(_vm._f("formatNumber")(_vm.total_protection_financieres_valeur_considere)) + "\n                                        ")])])], 2)]), _vm._v(" "), _c("br")]), _vm._v(" "), _c("div", [_c("table", {
    staticClass: "table table-bordered mb-3"
  }, [_c("thead", [_c("tr", [_c("th", {
    staticClass: "col-12 text-center py-2 m-0",
    attrs: {
      colspan: "7"
    }
  }, [_vm._v("\n                                            Suretés diverses\n                                        ")])])]), _vm._v(" "), _c("tbody", {
    staticStyle: {
      "font-size": "0.9rem"
    }
  }, _vm._l(_vm.allSuretes, function (surete, index) {
    return _c("tr", {
      key: index
    }, [_c("td", {
      staticClass: "d-flex"
    }, [_c("span", [_vm._v(_vm._s(index + 1) + ".")]), _vm._v("\n                                            " + _vm._s(surete === null || surete === void 0 ? void 0 : surete.label) + "\n                                        ")])]);
  }), 0)]), _vm._v(" "), _c("br")]), _vm._v(" "), _c("div", [_c("table", {
    staticClass: "table table-bordered mb-3"
  }, [_c("thead", [_c("tr", [_c("th", {
    staticClass: "col-12 text-center py-2 m-0",
    attrs: {
      colspan: "7"
    }
  }, [_vm._v("\n                                            Conditions particulières\n                                        ")])])]), _vm._v(" "), _c("tbody", {
    staticStyle: {
      "font-size": "0.9rem"
    }
  }, _vm._l(_vm.cond_particulieres, function (condition, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_vm._v("\n                                            " + _vm._s(condition === null || condition === void 0 ? void 0 : condition.cond_description) + "\n                                        ")])]);
  }), 0)]), _vm._v(" "), _c("br")])] : _vm._e()], _vm._v(" "), _c("div", {
    staticClass: "text-right p-2"
  }, [_c("button", {
    staticClass: "btn shadow-md text-white",
    staticStyle: {
      cursor: "pointer",
      right: "16px",
      bottom: "10px",
      background: "#2c3e50",
      "max-width": "max-content"
    },
    attrs: {
      type: "button",
      name: "button"
    },
    on: {
      click: function click($event) {
        return _vm.toggleModal("search_dossier_credit", "hide");
      }
    }
  }, [_vm._v("\n                        Fermer\n                    ")])])], 2)])])], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("b", {
    staticClass: "text-dark"
  }, [_c("i", {
    staticClass: "icofont-rounded-right"
  }), _vm._v("\n                                            Statut:")]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/derogation/DER1.vue?vue&type=style&index=0&id=5e5a5588&lang=css&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/derogation/DER1.vue?vue&type=style&index=0&id=5e5a5588&lang=css&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-5e5a5588] {\r\n    transition: all 0.3s linear;\n}\n.bg-grey[data-v-5e5a5588] {\r\n    background-color: #f4f3f3;\n}\nth[data-v-5e5a5588] {\r\n    background: #f4f3f3 !important;\n}\n.head-memorandum-title[data-v-5e5a5588] {\r\n    /* margin-top: 15px; */\r\n    padding: 16px;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    background-color: #dc0030;\r\n    /* border: 2px solid #575759; */\r\n    /* box-shadow: 1px 3px 4px #ddd; */\r\n    font-size: 16px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    /* border-radius: 10px; */\r\n    margin-bottom: 15px;\n}\ninput[type=\"checkbox\"][data-v-5e5a5588] {\r\n    /* Double-sized Checkboxes */\r\n    /* IE */\r\n    /* FF */\r\n    /* Safari and Chrome */\r\n    /* Opera */\r\n    transform: scale(2);\r\n    padding: 10px;\n}\n.table-head-bg[data-v-5e5a5588] {\r\n    background-color: #f4f3f3;\n}\n.head[data-v-5e5a5588] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\n.hdc[data-v-5e5a5588] {\r\n    background-color: #57606f;\n}\n.relook-header[data-v-5e5a5588] {\r\n    color: #fff;\r\n    background-color: #7f8c8d;\r\n    /* padding: 5px; */\r\n    border: none;\n}\n.der_header[data-v-5e5a5588] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    padding: 15px;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    margin-bottom: 0;\n}\n.der_options-block[data-v-5e5a5588] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\n}\n.der_option[data-v-5e5a5588] {\r\n    margin: 0 7px;\r\n    cursor: pointer;\r\n    /* width: 38px;\r\n    height: 38px;\r\n    border-radius: 50%; */\r\n    /* border: 1px solid #ddd; */\r\n    /* box-shadow: 0 0 8px 0 rgba(0,0,0,0.05) inset;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center; */\n}\n.der_option[data-v-5e5a5588]:last-child {\r\n    margin-right: 0;\n}\n.der_checkbox[data-v-5e5a5588] {\r\n    position: relative;\r\n    top: 2px;\r\n    transform: scale(1.8) !important;\n}\n.der_is_selected[data-v-5e5a5588] {\r\n    /* border: 2px dashed var(--dark-blue) !important; */\r\n    background-color: #dcf0fa !important;\n}\ntr th[data-v-5e5a5588],\r\ntr td[data-v-5e5a5588],\r\ntr td .form-control[data-v-5e5a5588] {\r\n    vertical-align: middle;\r\n    font-size: 0.9rem;\n}\n.card[data-v-5e5a5588] {\r\n    width: 100%;\r\n    border: 1px solid #ddd;\n}\n.mybox[data-v-5e5a5588] {\r\n    width: 100%;\r\n    border: 1px solid #ddd;\r\n    margin-bottom: 20px;\n}\n.mybox-head[data-v-5e5a5588] {\r\n    background-color: #f4f3f3;\r\n    width: 100%;\r\n    padding: 7px 20px;\r\n    font-weight: bold;\n}\n.mybox-content[data-v-5e5a5588] {\r\n    padding: 20px;\n}\n.btn-blue-color[data-v-5e5a5588] {\r\n    background-color: #0d6efd;\n}\n.min100px[data-v-5e5a5588] {\r\n    min-width: 100px !important;\n}\n.min300px[data-v-5e5a5588] {\r\n    min-width: 300px !important;\n}\n.min200px[data-v-5e5a5588] {\r\n    min-width: 200px !important;\n}\n.min150px[data-v-5e5a5588] {\r\n    min-width: 150px !important;\n}\n.form-control[readonly][data-v-5e5a5588] {\r\n    background-color: #f7f7f7;\n}\n.decision-style[data-v-5e5a5588] {\r\n    font-weight: bold;\n}\n.custom-bb[data-v-5e5a5588] {\r\n    border-bottom: 1px dashed #ddd;\n}\n.shadow[data-v-5e5a5588] {\r\n    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.05) !important;\n}\n.stamp[data-v-5e5a5588] {\r\n    transform: rotate(-4deg);\r\n    color: #3498db;\r\n    font-size: 0.9rem;\r\n    font-weight: 700;\r\n    border: 0.25rem solid #3498db;\r\n    display: inline-block;\r\n    padding: 0.25rem 1rem;\r\n    margin: 1rem auto;\r\n    text-transform: uppercase;\r\n    text-align: center;\r\n    border-radius: 1rem;\r\n    font-family: \"Courier\";\r\n    -webkit-mask-image: url(\"/images/grunge.png\");\r\n    -webkit-mask-size: 944px 604px;\r\n    mix-blend-mode: multiply;\r\n    /* float: right; */\r\n    /*\r\n  position: relative; */\r\n    /* top: 20vh;\r\n  right: -25vh; */\n}\n.is-approved[data-v-5e5a5588] {\r\n    color: #0a9928;\r\n    border: 0.5rem solid #0a9928;\r\n    -webkit-mask-position: 13rem 6rem;\r\n    transform: rotate(-4deg);\r\n    border-radius: 0;\n}\n.is-nope[data-v-5e5a5588] {\r\n    color: #d23;\r\n    border: 0.5rem double #d23;\r\n    transform: rotate(3deg);\r\n    -webkit-mask-position: 2rem 3rem;\n}\n.tampon[data-v-5e5a5588] {\r\n    text-align: center;\n}\ntd textarea[data-v-5e5a5588] {\r\n    background: transparent !important;\r\n    border: none;\r\n    resize: vertical;\n}\ntd textarea[data-v-5e5a5588]:focus,\r\ntd textarea[data-v-5e5a5588]:readonly {\r\n    background: transparent;\r\n    border: none;\r\n    box-shadow: none;\r\n    outline: none;\n}\n.gray-btn[data-v-5e5a5588] {\r\n    background: rgb(149, 165, 166) !important;\r\n    color: #fff !important;\n}\r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/derogation/DER1.vue?vue&type=style&index=0&id=5e5a5588&lang=css&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/derogation/DER1.vue?vue&type=style&index=0&id=5e5a5588&lang=css&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DER1_vue_vue_type_style_index_0_id_5e5a5588_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DER1.vue?vue&type=style&index=0&id=5e5a5588&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/derogation/DER1.vue?vue&type=style&index=0&id=5e5a5588&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DER1_vue_vue_type_style_index_0_id_5e5a5588_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DER1_vue_vue_type_style_index_0_id_5e5a5588_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/offview/microfinance/cofina/memo/derogation/DER1.vue":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/offview/microfinance/cofina/memo/derogation/DER1.vue ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DER1_vue_vue_type_template_id_5e5a5588_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DER1.vue?vue&type=template&id=5e5a5588&scoped=true */ "./resources/js/components/offview/microfinance/cofina/memo/derogation/DER1.vue?vue&type=template&id=5e5a5588&scoped=true");
/* harmony import */ var _DER1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DER1.vue?vue&type=script&lang=js */ "./resources/js/components/offview/microfinance/cofina/memo/derogation/DER1.vue?vue&type=script&lang=js");
/* harmony import */ var _DER1_vue_vue_type_style_index_0_id_5e5a5588_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DER1.vue?vue&type=style&index=0&id=5e5a5588&lang=css&scoped=true */ "./resources/js/components/offview/microfinance/cofina/memo/derogation/DER1.vue?vue&type=style&index=0&id=5e5a5588&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DER1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _DER1_vue_vue_type_template_id_5e5a5588_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _DER1_vue_vue_type_template_id_5e5a5588_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "5e5a5588",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/offview/microfinance/cofina/memo/derogation/DER1.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/offview/microfinance/cofina/memo/derogation/DER1.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/offview/microfinance/cofina/memo/derogation/DER1.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DER1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DER1.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/derogation/DER1.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DER1_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/offview/microfinance/cofina/memo/derogation/DER1.vue?vue&type=style&index=0&id=5e5a5588&lang=css&scoped=true":
/*!**********************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/microfinance/cofina/memo/derogation/DER1.vue?vue&type=style&index=0&id=5e5a5588&lang=css&scoped=true ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DER1_vue_vue_type_style_index_0_id_5e5a5588_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DER1.vue?vue&type=style&index=0&id=5e5a5588&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/derogation/DER1.vue?vue&type=style&index=0&id=5e5a5588&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/offview/microfinance/cofina/memo/derogation/DER1.vue?vue&type=template&id=5e5a5588&scoped=true":
/*!********************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/microfinance/cofina/memo/derogation/DER1.vue?vue&type=template&id=5e5a5588&scoped=true ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DER1_vue_vue_type_template_id_5e5a5588_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DER1_vue_vue_type_template_id_5e5a5588_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DER1_vue_vue_type_template_id_5e5a5588_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DER1.vue?vue&type=template&id=5e5a5588&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/memo/derogation/DER1.vue?vue&type=template&id=5e5a5588&scoped=true");


/***/ })

}]);