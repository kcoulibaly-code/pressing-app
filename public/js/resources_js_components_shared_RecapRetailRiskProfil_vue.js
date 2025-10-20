"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_shared_RecapRetailRiskProfil_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/RecapRetailRiskProfil.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/RecapRetailRiskProfil.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _workflow_AutocompleteSearch_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../workflow/AutocompleteSearch.vue */ "./resources/js/components/workflow/AutocompleteSearch.vue");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/credit.service */ "./resources/js/services/credit.service.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "RecapRetailRiskProfil",
  props: {
    dossier_credit: Object,
    authcheckUsr: Object
  },
  components: {
    AutocompleteSearch: _workflow_AutocompleteSearch_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      credpubIn1: null,
      credpubIn2: null,
      credpubIn3: null,
      maskedBtn: false,
      maskedBtn2: false,
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_1__["default"].host,
      sup_exploitations: [],
      approbation_su_exp: false,
      reloadData: 0,
      checkVerifyCanApprove: false,
      codeagence_cc: null,
      codeagence_client: null,
      type_carcasse: "",
      pret_rachat_prive: ""
    };
  },
  mounted: function mounted() {
    var _this = this;
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _this$dossier_credit;
      var credVal, _credVal$, _this$dossier_credit$, _this$dossier_credit2, _this$dossier_credit3, _this$dossier_credit4, credpub_fiche_endettement, variable_sup;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _this.maskedBtn = false;
            _this.maskedBtn2 = false;
            _this.approbation_su_exp = false;
            _this.checkVerifyCanApprove = false;
            EventBus.$emit('value-updated');
            if (((_this$dossier_credit = _this.dossier_credit) === null || _this$dossier_credit === void 0 || (_this$dossier_credit = _this$dossier_credit.final_outcome) === null || _this$dossier_credit === void 0 ? void 0 : _this$dossier_credit.outcome) == 1) {
              _this.approbation_su_exp = true;
            }
            _context.next = 8;
            return _this.determineCredPubTablesFromDosCred(_this.dossier_credit);
          case 8:
            credVal = _context.sent;
            if (credVal[0]) {
              _this.credpubIn1 = credVal[1];
              _this.credpubIn2 = credVal[3];
              _this.credpubIn3 = credVal[5];
              credpub_fiche_endettement = (_credVal$ = credVal[17]) !== null && _credVal$ !== void 0 ? _credVal$ : null;
              _this.pret_rachat_prive = (_this$dossier_credit$ = (_this$dossier_credit2 = _this.dossier_credit) === null || _this$dossier_credit2 === void 0 || (_this$dossier_credit2 = _this$dossier_credit2[credpub_fiche_endettement]) === null || _this$dossier_credit2 === void 0 ? void 0 : _this$dossier_credit2.pret_rachat_prive) !== null && _this$dossier_credit$ !== void 0 ? _this$dossier_credit$ : "";
              _this.type_carcasse = (_this$dossier_credit3 = _this.dossier_credit) === null || _this$dossier_credit3 === void 0 || (_this$dossier_credit3 = _this$dossier_credit3[_this.credpubIn1]) === null || _this$dossier_credit3 === void 0 ? void 0 : _this$dossier_credit3.carcasse_type;
              variable_sup = [{
                role_index: "chef_agence",
                role_uuid: "yYnev325ob1vDkgq",
                role_name: "Chef d'agence"
              }, {
                role_index: "sup_zone",
                role_uuid: "tIr9QhALZPULkbino7T",
                role_name: "Superviseur de Zone"
              }, {
                role_index: "chef_depart_dcp",
                role_uuid: "8W2W42XtN3Dwfwk07Ffz",
                role_name: "Responsable Réseau d'Agences"
              }];
              if (!['', null, undefined].includes((_this$dossier_credit4 = _this.dossier_credit) === null || _this$dossier_credit4 === void 0 ? void 0 : _this$dossier_credit4[_this.credpubIn1])) {
                variable_sup.forEach(function (el) {
                  if (!['', null, undefined].includes(_this.dossier_credit[_this.credpubIn1][el.role_index])) {
                    _this.sup_exploitations.push(_objectSpread(_objectSpread({}, _this.dossier_credit[_this.credpubIn1][el.role_index]), {}, {
                      index_sup: el.role_index,
                      locked: false
                    }));
                  } else {
                    _this.sup_exploitations.push({
                      index_sup: el.role_index,
                      locked: false,
                      contact_whatsap: "",
                      display_name: el.role_name,
                      email: "",
                      name: "Veuillez renseigner le " + el.role_name,
                      role_id: "",
                      role_sigle: "",
                      role_uuid: el.role_uuid,
                      user_id: "",
                      what_to_be_produced: ""
                    });
                  }
                });
                _this.sup_exploitations.forEach(function (element) {
                  if (element.role_uuid == 'yYnev325ob1vDkgq') {
                    var _this$dossier_credit$2, _this$dossier_credit5, _this$dashboardInfo$f, _this$dashboardInfo, _this$dashboardInfo$c, _this$dashboardInfo2;
                    var codeagence_client = (_this$dossier_credit$2 = (_this$dossier_credit5 = _this.dossier_credit) === null || _this$dossier_credit5 === void 0 || (_this$dossier_credit5 = _this$dossier_credit5.client_core_banking) === null || _this$dossier_credit5 === void 0 ? void 0 : _this$dossier_credit5.branch_name) !== null && _this$dossier_credit$2 !== void 0 ? _this$dossier_credit$2 : "";
                    if (!['', null, undefined].includes(codeagence_client)) {
                      codeagence_client = codeagence_client.toUpperCase().replace(/\s/g, '_');
                    }
                    var filiale = (_this$dashboardInfo$f = (_this$dashboardInfo = _this.dashboardInfo) === null || _this$dashboardInfo === void 0 ? void 0 : _this$dashboardInfo.filiale) !== null && _this$dashboardInfo$f !== void 0 ? _this$dashboardInfo$f : "";
                    filiale = filiale.toUpperCase().replace(/\s/g, '_') + '_';
                    var codeagence_cc = (_this$dashboardInfo$c = (_this$dashboardInfo2 = _this.dashboardInfo) === null || _this$dashboardInfo2 === void 0 ? void 0 : _this$dashboardInfo2.codeagence) !== null && _this$dashboardInfo$c !== void 0 ? _this$dashboardInfo$c : "";
                    if (!['', null, undefined].includes(codeagence_cc)) {
                      codeagence_cc = codeagence_cc.toUpperCase().replace(filiale, '').replace('AGENCE_', '');
                    }
                    if (!['', null, undefined].includes(element.email)) {
                      element.locked = true;
                    }

                    // this.codeagence_cc = codeagence_cc
                    // this.codeagence_client = codeagence_client

                    // if (codeagence_cc != codeagence_client) {

                    //     codeagence_client = filiale + 'AGENCE_' + codeagence_client 
                    //     this.getChefAgenceByClient({codeagence: codeagence_client})

                    // } else {

                    //     if (element.email != '') {
                    //         element.locked = true
                    //     } 

                    // }
                  }
                });
              }
            }
          case 10:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  computed: {
    sup_exploitations_: function sup_exploitations_() {
      if (this.reloadData) {}
      return this.sup_exploitations;
    },
    completed_sup_exploitation: function completed_sup_exploitation() {
      if (this.reloadData) {}
      var find = this.sup_exploitations.find(function (el) {
        return ['', null, undefined].includes(el === null || el === void 0 ? void 0 : el.email);
      });
      if (find) {
        return true;
      }
      return false;
    },
    is_pouvoir_agence: function is_pouvoir_agence() {
      var _this$dossier_credit$3, _this$dossier_credit6, _this$dossier_credit$4, _this$dossier_credit7;
      var montant = (_this$dossier_credit$3 = (_this$dossier_credit6 = this.dossier_credit) === null || _this$dossier_credit6 === void 0 || (_this$dossier_credit6 = _this$dossier_credit6[this.credpubIn1]) === null || _this$dossier_credit6 === void 0 ? void 0 : _this$dossier_credit6.exposition_globale) !== null && _this$dossier_credit$3 !== void 0 ? _this$dossier_credit$3 : 0;
      var statut = (_this$dossier_credit$4 = (_this$dossier_credit7 = this.dossier_credit) === null || _this$dossier_credit7 === void 0 || (_this$dossier_credit7 = _this$dossier_credit7[this.credpubIn3]) === null || _this$dossier_credit7 === void 0 ? void 0 : _this$dossier_credit7.statut_entreprise) !== null && _this$dossier_credit$4 !== void 0 ? _this$dossier_credit$4 : "";
      if (this.type_carcasse == "PPO") {
        if (statut == "Listée") {
          if (montant <= 10000000) {
            return true;
          }
        }
      }
      return false;
    },
    diffAmount: function diffAmount() {
      var _this$dossier_credit$5, _this$dossier_credit8, _this$dossier_credit$6, _this$dossier_credit9;
      var exposition_globale = (_this$dossier_credit$5 = (_this$dossier_credit8 = this.dossier_credit) === null || _this$dossier_credit8 === void 0 || (_this$dossier_credit8 = _this$dossier_credit8[this.credpubIn1]) === null || _this$dossier_credit8 === void 0 ? void 0 : _this$dossier_credit8.exposition_globale) !== null && _this$dossier_credit$5 !== void 0 ? _this$dossier_credit$5 : 0;
      var montant_sollicite = (_this$dossier_credit$6 = (_this$dossier_credit9 = this.dossier_credit) === null || _this$dossier_credit9 === void 0 || (_this$dossier_credit9 = _this$dossier_credit9[this.credpubIn1]) === null || _this$dossier_credit9 === void 0 ? void 0 : _this$dossier_credit9.montant_sollicite) !== null && _this$dossier_credit$6 !== void 0 ? _this$dossier_credit$6 : 0;
      if (exposition_globale != montant_sollicite) {
        return true;
      }
      return false;
    }
  },
  methods: {
    validateRp: function validateRp(rep) {
      if (this.ongoingDesc) {
        return;
      }
      this.maskedBtn = true;
      this.$emit('validate-rp', rep);
      this.checkVerifyCanApprove = rep;
    },
    validateRoutage: function validateRoutage(rep) {
      var _this2 = this;
      if (rep) {
        var _this$dossier_credit0;
        // if (![''. null, undefined].includes(this.codeagence_cc) && ![''. null, undefined].includes(this.codeagence_client) && this.codeagence_cc != this.codeagence_client) {
        // }

        this.maskedBtn2 = true;
        this.cred_pub_key = (_this$dossier_credit0 = this.dossier_credit) === null || _this$dossier_credit0 === void 0 ? void 0 : _this$dossier_credit0.cred_pub_key;
        this.$axios.post(this.ebapisHost + "creditbuilder/api/v1/update-actors-in-tb/", {
          cred_pub_key: this.cred_pub_key,
          sup_exploitations: this.sup_exploitations
        }).then(function (res) {
          _this2.approbation_su_exp = rep;
          EventBus.$emit('value-updated');
        })["catch"](function (error) {
          _this2.maskedBtn2 = false;
          _this2.approbation_su_exp = false;
          _this2.$console.error(error);
          _this2.$toasted.show("Une erreur est survenue", {
            duration: 5000
          });
        });
      } else {
        this.validateRp(false);
      }
    },
    supSelected: function supSelected(d) {
      var _d$role$,
        _role$id,
        _role$role_sigle,
        _role$role_uuid,
        _d$user_id,
        _role$what_to_be_prod,
        _this3 = this;
      var role = (_d$role$ = d === null || d === void 0 ? void 0 : d.role[0]) !== null && _d$role$ !== void 0 ? _d$role$ : {};
      var newValue = {
        contact_whatsap: d === null || d === void 0 ? void 0 : d.contact_whatsap,
        display_name: role === null || role === void 0 ? void 0 : role.display_name,
        email: d === null || d === void 0 ? void 0 : d.email,
        name: d === null || d === void 0 ? void 0 : d.name,
        role_id: (_role$id = role === null || role === void 0 ? void 0 : role.id) !== null && _role$id !== void 0 ? _role$id : "",
        role_sigle: (_role$role_sigle = role === null || role === void 0 ? void 0 : role.role_sigle) !== null && _role$role_sigle !== void 0 ? _role$role_sigle : "",
        role_uuid: (_role$role_uuid = role === null || role === void 0 ? void 0 : role.role_uuid) !== null && _role$role_uuid !== void 0 ? _role$role_uuid : "",
        user_id: (_d$user_id = d === null || d === void 0 ? void 0 : d.user_id) !== null && _d$user_id !== void 0 ? _d$user_id : d === null || d === void 0 ? void 0 : d.id,
        what_to_be_produced: (_role$what_to_be_prod = role === null || role === void 0 ? void 0 : role.what_to_be_produced) !== null && _role$what_to_be_prod !== void 0 ? _role$what_to_be_prod : ""
      };
      this.sup_exploitations.forEach(function (el, index) {
        if (el.role_uuid == newValue.role_uuid) {
          _this3.sup_exploitations[index] = _objectSpread(_objectSpread({}, el), newValue);
          _this3.reloadData += 1;
        }
      });
    },
    getChefAgenceByClient: function getChefAgenceByClient(data) {
      var _this4 = this;
      this.checkVerifyCanApprove = true;
      _services_credit_service__WEBPACK_IMPORTED_MODULE_2__["default"].getChefAgenceByClientNsia(data).then(function (res) {
        var newValue = res.data;
        _this4.sup_exploitations.forEach(function (el, index) {
          if (el.role_uuid == newValue.role_uuid) {
            _this4.sup_exploitations[index] = _objectSpread(_objectSpread({}, el), newValue);
            _this4.reloadData += 1;
          }
        });
        _this4.checkVerifyCanApprove = false;
      })["catch"](function (error) {
        _this4.checkVerifyCanApprove = false;
        _this4.$console.error(error);
        _this4.$toasted.show("Une erreur est survenue", {
          duration: 5000
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/RecapRetailRiskProfil.vue?vue&type=template&id=2cde3fa4":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/RecapRetailRiskProfil.vue?vue&type=template&id=2cde3fa4 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$authcheckUsr, _vm$dossier_credit, _vm$dossier_credit2, _vm$dossier_credit3, _vm$dossier_credit4, _vm$dossier_credit5, _vm$dossier_credit6, _vm$dossier_credit7;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticStyle: {
      margin: "10px"
    }
  }, [_vm.approbation_su_exp || !["DUxMP2ZQheGFreQt5z2s"].includes((_vm$authcheckUsr = _vm.authcheckUsr) === null || _vm$authcheckUsr === void 0 ? void 0 : _vm$authcheckUsr.role_uuid) ? [_c("h1", {
    staticClass: "text-center",
    staticStyle: {
      color: "#34495e"
    }
  }, [_vm._v("\n            Récapitulatif du Profil de Risque\n        ")]), _vm._v(" "), _c("hr"), _vm._v(" "), _vm.checkVerifyCanApprove ? [_vm._m(0)] : _c("div", [_c("table", {
    staticClass: "table"
  }, [_c("tbody", [_vm._m(1), _vm._v(" "), _c("tr", [_c("th", {
    attrs: {
      scope: "row"
    }
  }, [_vm._v("Type de Clientèle")]), _vm._v(" "), _c("td", {
    attrs: {
      scope: "row"
    }
  }, [_vm._v("\n                            " + _vm._s((_vm$dossier_credit = _vm.dossier_credit) === null || _vm$dossier_credit === void 0 || (_vm$dossier_credit = _vm$dossier_credit[_vm.credpubIn1]) === null || _vm$dossier_credit === void 0 ? void 0 : _vm$dossier_credit.type_de_clientele) + "\n                        ")])]), _vm._v(" "), _c("tr", [_c("th", {
    attrs: {
      scope: "row"
    }
  }, [_vm._v("Pouvoirs Agences")]), _vm._v(" "), _c("td", {
    style: !_vm.is_pouvoir_agence ? "color: #dd3c4c; font-weight: bold" : "",
    attrs: {
      scope: "row"
    }
  }, [_vm._v(_vm._s(_vm.is_pouvoir_agence ? "Oui" : "Non"))])]), _vm._v(" "), _vm.type_carcasse == "PPO" ? _c("tr", [_c("th", {
    attrs: {
      scope: "row"
    }
  }, [_vm._v("PPO")]), _vm._v(" "), _c("td", {
    attrs: {
      scope: "row"
    }
  }, [_vm._v("Oui")])]) : _vm._e(), _vm._v(" "), _vm.type_carcasse == "PPI" ? _c("tr", [_c("th", {
    attrs: {
      scope: "row"
    }
  }, [_vm._v("PPI")]), _vm._v(" "), _c("td", {
    attrs: {
      scope: "row"
    }
  }, [_vm._v("Oui")])]) : _vm._e(), _vm._v(" "), _vm.type_carcasse == "Crédit Bail" ? _c("tr", [_c("th", {
    attrs: {
      scope: "row"
    }
  }, [_vm._v("Crédit Bail")]), _vm._v(" "), _c("td", {
    attrs: {
      scope: "row"
    }
  }, [_vm._v("Oui")])]) : _vm._e(), _vm._v(" "), _c("tr", [_c("th", {
    attrs: {
      scope: "row"
    }
  }, [_vm._v("100% Cash Coll")]), _vm._v(" "), _c("td", {
    attrs: {
      scope: "row"
    }
  }, [_vm._v("\n                            " + _vm._s((_vm$dossier_credit2 = _vm.dossier_credit) === null || _vm$dossier_credit2 === void 0 || (_vm$dossier_credit2 = _vm$dossier_credit2[_vm.credpubIn1]) === null || _vm$dossier_credit2 === void 0 ? void 0 : _vm$dossier_credit2.pret_couvert_cash_call) + "\n                        ")])]), _vm._v(" "), _c("tr", [_c("th", {
    attrs: {
      scope: "row"
    }
  }, [_vm._v("Employeur")]), _vm._v(" "), _c("td", {
    style: ((_vm$dossier_credit3 = _vm.dossier_credit) === null || _vm$dossier_credit3 === void 0 || (_vm$dossier_credit3 = _vm$dossier_credit3[_vm.credpubIn3]) === null || _vm$dossier_credit3 === void 0 ? void 0 : _vm$dossier_credit3.statut_entreprise) != "Listée" ? "color: #dd3c4c; font-weight: bold" : "",
    attrs: {
      scope: "row"
    }
  }, [_vm._v("\n                            " + _vm._s((_vm$dossier_credit4 = _vm.dossier_credit) === null || _vm$dossier_credit4 === void 0 || (_vm$dossier_credit4 = _vm$dossier_credit4[_vm.credpubIn3]) === null || _vm$dossier_credit4 === void 0 ? void 0 : _vm$dossier_credit4.statut_entreprise) + "\n                        ")])]), _vm._v(" "), _c("tr", [_c("th", {
    attrs: {
      scope: "row"
    }
  }, [_vm._v("PPE")]), _vm._v(" "), _c("td", {
    attrs: {
      scope: "row"
    }
  }, [_vm._v("\n                            " + _vm._s((_vm$dossier_credit5 = _vm.dossier_credit) === null || _vm$dossier_credit5 === void 0 || (_vm$dossier_credit5 = _vm$dossier_credit5[_vm.credpubIn2]) === null || _vm$dossier_credit5 === void 0 ? void 0 : _vm$dossier_credit5.personne_politiquement_expose) + "\n                        ")])]), _vm._v(" "), !["", null, undefined].includes(_vm.pret_rachat_prive) ? _c("tr", [_c("th", {
    attrs: {
      scope: "row"
    }
  }, [_vm._v("Rachat privé (Rachat du prêt chez les confrères)")]), _vm._v(" "), _c("td", {
    style: _vm.pret_rachat_prive == "Oui" ? "color: #dd3c4c; font-weight: bold" : "",
    attrs: {
      scope: "row"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.pret_rachat_prive) + "\n                        ")])]) : _vm._e(), _vm._v(" "), _c("tr", [_c("th", {
    attrs: {
      scope: "row"
    }
  }, [_vm._v("Montant du crédit demandé")]), _vm._v(" "), _c("td", {
    attrs: {
      scope: "row"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm._f("formatNumber")((_vm$dossier_credit6 = _vm.dossier_credit) === null || _vm$dossier_credit6 === void 0 || (_vm$dossier_credit6 = _vm$dossier_credit6[_vm.credpubIn1]) === null || _vm$dossier_credit6 === void 0 ? void 0 : _vm$dossier_credit6.montant_sollicite)) + "\n                        ")])]), _vm._v(" "), _c("tr", [_c("th", {
    attrs: {
      scope: "row"
    }
  }, [_vm._v("Exposition à autoriser")]), _vm._v(" "), _c("td", {
    style: _vm.diffAmount ? "color: #dd3c4c; font-weight: bold" : "",
    attrs: {
      scope: "row"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm._f("formatNumber")((_vm$dossier_credit7 = _vm.dossier_credit) === null || _vm$dossier_credit7 === void 0 || (_vm$dossier_credit7 = _vm$dossier_credit7[_vm.credpubIn1]) === null || _vm$dossier_credit7 === void 0 ? void 0 : _vm$dossier_credit7.exposition_globale)) + "\n                        ")])])])]), _vm._v(" "), !_vm.maskedBtn ? _c("h6", {
    staticClass: "text-center"
  }, [_vm._v("\n                Approuvez vous ce profil de risque ?\n            ")]) : _vm._e(), _vm._v(" "), !_vm.maskedBtn ? _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm-6 col-md-6 col-lg-6"
  }, [_c("div", {
    staticClass: "text-center"
  }, [_c("button", {
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
      click: function click($event) {
        return _vm.validateRp(false);
      }
    }
  }, [_c("i", {
    staticClass: "icofont icofont-close icofont-3x"
  })]), _vm._v(" "), _vm._m(2)])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-6 col-md-6 col-lg-6"
  }, [_c("div", {
    staticClass: "text-center"
  }, [_c("button", {
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
      click: function click($event) {
        return _vm.validateRp(true);
      }
    }
  }, [_c("i", {
    staticClass: "icofont icofont-check icofont-3x"
  })]), _vm._v(" "), _vm._m(3)])])]) : _vm._e()])] : [_c("h1", {
    staticClass: "text-center",
    staticStyle: {
      color: "#34495e"
    }
  }, [_vm._v("\n            Routage du dossier (Exploitation)\n        ")]), _vm._v(" "), _c("hr"), _vm._v(" "), _vm.checkVerifyCanApprove ? [_vm._m(4)] : [_c("p", {
    staticClass: "text-danger text-center fw-bold"
  }, [_vm._v("Vous pouvez modifier la chaine de validation de votre dossier de crédit.")]), _vm._v(" "), _c("div", [_c("table", {
    staticClass: "table"
  }, [_c("tbody", _vm._l(_vm.sup_exploitations_, function (rep, index) {
    return _c("tr", {
      key: "sup" + index
    }, [_c("td", [_c("b", [_vm._v(_vm._s(rep === null || rep === void 0 ? void 0 : rep.display_name) + " ")]), _vm._v(" - " + _vm._s(rep === null || rep === void 0 ? void 0 : rep.name) + "\n                                "), _c("autocomplete-search", {
      attrs: {
        disabledInput: rep.locked,
        items: [],
        value: rep,
        labelKey: ["name", "role_name"],
        payload: {
          role_uuid: [rep.role_uuid]
        },
        valueKey: "email"
      },
      on: {
        change: _vm.supSelected
      }
    })], 1)]);
  }), 0)])]), _vm._v(" "), !_vm.completed_sup_exploitation ? [!_vm.maskedBtn2 ? _c("h6", {
    staticClass: "text-center mt-3"
  }, [_vm._v("Approuvez vous le routage de ce dossier de crédit ?")]) : _vm._e(), _vm._v(" "), !_vm.maskedBtn2 ? _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm-6 col-md-6 col-lg-6"
  }, [_c("div", {
    staticClass: "text-center"
  }, [_c("button", {
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
      click: function click($event) {
        return _vm.validateRoutage(false);
      }
    }
  }, [_c("i", {
    staticClass: "icofont icofont-close icofont-3x"
  })]), _vm._v(" "), _vm._m(5)])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-6 col-md-6 col-lg-6"
  }, [_c("div", {
    staticClass: "text-center"
  }, [_c("button", {
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
      click: function click($event) {
        return _vm.validateRoutage(true);
      }
    }
  }, [_c("i", {
    staticClass: "icofont icofont-check icofont-3x"
  })]), _vm._v(" "), _vm._m(6)])])]) : _c("div", {
    staticClass: "row"
  }, [_vm._m(7)])] : _vm._e()]]], 2);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "d-flex justify-content-center text-center align-items-center text-muted py-4"
  }, [_c("div", [_c("span", {
    staticClass: "spinner-border spinner-border"
  }), _vm._v(" "), _c("h5", [_vm._v("\n                        Chargement des données en cours ... "), _c("br"), _vm._v("\n                        Ceci peut prendre un peu de temps\n                    ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("th", {
    staticClass: "text-center",
    attrs: {
      colspan: "2"
    }
  }, [_c("span", {
    staticClass: "text-danger fw-bold"
  }, [_vm._v("\n                                Veuillez lire attentivement toutes les informations ci-dessous avant validation. Votre vigilance est essentielle pour assurer le bon routage du dossier de crédit.\n                            ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("b", [_vm._v("Non")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("b", [_vm._v("Oui")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "d-flex justify-content-center text-center align-items-center text-muted py-4"
  }, [_c("div", [_c("span", {
    staticClass: "spinner-border spinner-border"
  }), _vm._v(" "), _c("h5", [_vm._v("\n                        Chargement des données en cours ... "), _c("br"), _vm._v("\n                        Ceci peut prendre un peu de temps\n                    ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("b", [_vm._v("Non")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("b", [_vm._v("Oui")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-sm-12 col-md-12 col-lg-12"
  }, [_c("button", {
    staticClass: "btn btn-secondary",
    staticStyle: {
      width: "100%",
      height: "8vh",
      "background-color": "#7f8c8d"
    },
    attrs: {
      disabled: ""
    }
  }, [_c("span", {
    staticClass: "spinner-border spinner-border-sm"
  }, [_c("span", {
    staticClass: "visually-hidden"
  }, [_vm._v("Loading...")])]), _vm._v(" Prise en compte de la décision en cours ...\n                        ")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/shared/RecapRetailRiskProfil.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/shared/RecapRetailRiskProfil.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RecapRetailRiskProfil_vue_vue_type_template_id_2cde3fa4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RecapRetailRiskProfil.vue?vue&type=template&id=2cde3fa4 */ "./resources/js/components/shared/RecapRetailRiskProfil.vue?vue&type=template&id=2cde3fa4");
/* harmony import */ var _RecapRetailRiskProfil_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RecapRetailRiskProfil.vue?vue&type=script&lang=js */ "./resources/js/components/shared/RecapRetailRiskProfil.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RecapRetailRiskProfil_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _RecapRetailRiskProfil_vue_vue_type_template_id_2cde3fa4__WEBPACK_IMPORTED_MODULE_0__.render,
  _RecapRetailRiskProfil_vue_vue_type_template_id_2cde3fa4__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/shared/RecapRetailRiskProfil.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/shared/RecapRetailRiskProfil.vue?vue&type=script&lang=js":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/shared/RecapRetailRiskProfil.vue?vue&type=script&lang=js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RecapRetailRiskProfil_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RecapRetailRiskProfil.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/RecapRetailRiskProfil.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RecapRetailRiskProfil_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shared/RecapRetailRiskProfil.vue?vue&type=template&id=2cde3fa4":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/shared/RecapRetailRiskProfil.vue?vue&type=template&id=2cde3fa4 ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RecapRetailRiskProfil_vue_vue_type_template_id_2cde3fa4__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RecapRetailRiskProfil_vue_vue_type_template_id_2cde3fa4__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RecapRetailRiskProfil_vue_vue_type_template_id_2cde3fa4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RecapRetailRiskProfil.vue?vue&type=template&id=2cde3fa4 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/RecapRetailRiskProfil.vue?vue&type=template&id=2cde3fa4");


/***/ })

}]);