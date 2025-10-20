"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_forms_afg_note_technique_NT-HD0_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/note_technique/NT-HD0.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/note_technique/NT-HD0.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../helpers/helper */ "./resources/js/helpers/helper.js");
/* harmony import */ var _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vueform/multiselect/dist/multiselect.vue2 */ "./node_modules/@vueform/multiselect/dist/multiselect.vue2.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _services_afg_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/afg.service */ "./resources/js/services/afg.service.js");
/* harmony import */ var _shared_MothAndYearInput_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/MothAndYearInput.vue */ "./resources/js/components/shared/MothAndYearInput.vue");
var _methods;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }










window.$ = window.jQuery = __webpack_require__(/*! jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "preambule-cas-echeant-holding",
  display: "PreambuleCasEcheantHoldind",
  components: {
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.ChevronDownIcon,
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.TrashIcon,
    AirplayIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.AirplayIcon,
    BookOpenIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.BookOpenIcon,
    Multiselect: _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_2__["default"],
    MothAndYearInput: _shared_MothAndYearInput_vue__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  props: {
    meta_data: Object,
    tb_name: String,
    tb_display_name: String
  },
  created: function created() {
    var _this = this;
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _this$meta_data;
      var cachedCreditTypes;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["default"].loadUserData().then(function (res) {
              var _this$meta_data$dossi, _this$authcheckUsr, _this$meta_data$dossi2;
              _this.authcheck = true;
              _this.authcheckUsr = res.data;
              _this.authcheckStatus = res.status;
              if (((_this$meta_data$dossi = _this.meta_data['dossier_credit']) === null || _this$meta_data$dossi === void 0 || (_this$meta_data$dossi = _this$meta_data$dossi.final_outcome) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi.outcome) == 0 && ['DUxMP2ZQheGFreQt5z2s', 'r472oAxtaFJSlsh5'].includes((_this$authcheckUsr = _this.authcheckUsr) === null || _this$authcheckUsr === void 0 ? void 0 : _this$authcheckUsr.role_uuid) && ((_this$meta_data$dossi2 = _this.meta_data['dossier_credit']) === null || _this$meta_data$dossi2 === void 0 ? void 0 : _this$meta_data$dossi2.is_ajournee) == true) {
                _this.onClasseRisqueChange();
              }
            })["catch"](function (err) {
              _this.loadWithError(err);
            });
          case 2:
            _context.next = 4;
            return _services_credit_service__WEBPACK_IMPORTED_MODULE_4__["default"].loadCAFAfg((_this$meta_data = _this.meta_data) === null || _this$meta_data === void 0 || (_this$meta_data = _this$meta_data.dossier_credit) === null || _this$meta_data === void 0 ? void 0 : _this$meta_data.monteur_doss_email).then(function (res) {
              _this.cafData(res);
            })["catch"](function (err) {
              console.log(err);
            });
          case 4:
            cachedCreditTypes = localStorage.getItem('credit_types');
            _context.next = 7;
            return _services_credit_service__WEBPACK_IMPORTED_MODULE_4__["default"].loadActivite().then(function (res) {
              _this.secteurs_activites = res.data.data.activites;
              _this.groupes_activites = res.data.data.groupes;
              _this.updateValueSelected();
            })["catch"](function (err) {
              console.log(err);
            });
          case 7:
            _context.next = 9;
            return _this.loadScoringData();
          case 9:
            _context.next = 11;
            return _this.loadPourQuotiteData();
          case 11:
            _context.next = 13;
            return _this.getFcubAccountClassTab();
          case 13:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  mounted: function mounted() {
    var _this2 = this;
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var _this2$meta_data, _this2$meta_data2;
      var applied_templ_name, tbArrays;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            applied_templ_name = (_this2$meta_data = _this2.meta_data) === null || _this2$meta_data === void 0 || (_this2$meta_data = _this2$meta_data.dossier_credit) === null || _this2$meta_data === void 0 ? void 0 : _this2$meta_data.applied_templ_name;
            tbArrays = _this2.determineCredPubTables(applied_templ_name, (_this2$meta_data2 = _this2.meta_data) === null || _this2$meta_data2 === void 0 ? void 0 : _this2$meta_data2.dossier_credit); // console.log('tbArrays',tbArrays);
            _this2.credpubIn0 = tbArrays[0];
            _this2.credpubIn1 = tbArrays[3];
            _this2.credpubIn2 = tbArrays[4];
            _this2.credpubIn3 = tbArrays[5];
            _this2.credpubIn4 = tbArrays[6];
            _this2.credpubComptes = tbArrays[2];
            _this2.credpubProfilProfessionnel = tbArrays[1];
            _this2.tableClosedOrOpened();
            _this2.loadRetrieved();
            _this2.loadTbAttrs();
            EventBus.$on("reload-T1", function () {
              EventBus.$emit("event-T0", {
                formdata: _this2.formDataToBeWatched
              });
            });
            EventBus.$on("ligne-selected-updated", function (data) {
              // console.log("data", data)
              _this2.formDataToBeWatched.montant_sollicite = data === null || data === void 0 ? void 0 : data.total_nouvelle_ligne_0;
              // console.log("montant_sollicite ==> ", data?.total_nouvelle_ligne_0)
            });
            EventBus.$on("created-extra-file-template", function (data) {
              var _data$template, _data$template2, _data$template3;
              _this2.formDataToBeWatched.note_verification = {
                id: data === null || data === void 0 || (_data$template = data.template) === null || _data$template === void 0 ? void 0 : _data$template.id,
                name: data === null || data === void 0 || (_data$template2 = data.template) === null || _data$template2 === void 0 ? void 0 : _data$template2.name,
                slug: data === null || data === void 0 || (_data$template3 = data.template) === null || _data$template3 === void 0 ? void 0 : _data$template3.slug,
                files_count: 0
              };
            });
            EventBus.$on('extra-files-uploaded', function (data) {
              var _this2$formDataToBeWa;
              if (((_this2$formDataToBeWa = _this2.formDataToBeWatched) === null || _this2$formDataToBeWa === void 0 || (_this2$formDataToBeWa = _this2$formDataToBeWa.note_verification) === null || _this2$formDataToBeWa === void 0 ? void 0 : _this2$formDataToBeWa.id) == data.template.id) {
                _this2.formDataToBeWatched.note_verification.files_count = data.files.length;
              }
            });
            EventBus.$on('update-sni', function () {
              _this2.onClasseRisqueChange();
            });
            EventBus.$on("export-simulation", function (data) {
              // formDataToBeWatched.salaire_brut
              try {
                var salaireNetIndex = _this2.revenu_domicilie_afg.findIndex(function (el) {
                  return el.libelle === 'Salaire net';
                });
                if (salaireNetIndex !== -1) {
                  var _data$simulation;
                  var salaireNet = data === null || data === void 0 || (_data$simulation = data.simulation) === null || _data$simulation === void 0 || (_data$simulation = _data$simulation.caracteristiques_credit) === null || _data$simulation === void 0 ? void 0 : _data$simulation.salaire_net;
                  if (salaireNet) {
                    var _this2$formatNumber;
                    var event = ['montant_salaire', salaireNet];
                    _this2.formDataVars2([event[0], ((_this2$formatNumber = _this2.formatNumber) === null || _this2$formatNumber === void 0 ? void 0 : _this2$formatNumber.call(_this2, String(event[1]))) || String(event[1])], salaireNetIndex, 'revenu_domicilie_afg', 'montant_salaire');
                    // this.formDataVars2(event, salaireNetIndex, 'revenu_domicilie_afg', 'mensualite');
                    // this.formDataVars2(event, salaireNetIndex, 'revenu_domicilie_afg', 'mensualite');
                  }
                }
                EventBus.$emit("simulation-exported", {
                  success: true,
                  message: "Simulation exportée avec succès"
                });
              } catch (err) {
                console.error("Erreur lors de l'exportation de la simulation :", err);
                EventBus.$emit("simulation-exported", {
                  success: false,
                  message: "Erreur lors de l'exportation de la simulation"
                });
              }
            });
          case 18:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))();
  },
  computed: {
    transformTypeCreditsFacilite_: function transformTypeCreditsFacilite_() {
      return this.type_credits_facilite;
    },
    //  hasEpargneAccount() {
    //     return this.comptesAFGBank.some(el => el.libelle.includes("COMPTES EPARGNE PARTICULIER"));
    // },
    comptesAFGBank: function comptesAFGBank() {
      return this.comptes.filter(function (compte) {
        return compte.banque === 'AFG BANK';
      });
    },
    comptesAutreBank: function comptesAutreBank() {
      return this.comptes_chez_confrere.filter(function (compte) {
        return compte.banque !== 'AFG BANK';
      });
    },
    comptesConjointBank: function comptesConjointBank() {
      return this.comptes_conjoint;
    },
    listFocntionnements: function listFocntionnements() {
      return this.fonctionnement_comptes;
    }
  },
  data: function data() {
    var _formDataToBeWatched;
    var vm = this;
    return {
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__["default"].host,
      authcheck: false,
      authcheckUsr: null,
      authcheckStatus: null,
      watchInPause: false,
      initLoad: true,
      seen: true,
      seen1: true,
      seen2: true,
      seen3: true,
      seen4: true,
      seen5: true,
      seen6: true,
      seen7: true,
      seen8: true,
      disp: false,
      isLoading: false,
      max: 5,
      placeholder: "Chercher clients",
      matcli: "matcli",
      nomcli: "nomcli",
      credits: [],
      clients: [],
      encours: null,
      frais: [],
      contextList: [{
        title: "Commenter",
        icon: "icofont icofont-comment",
        handler: function () {
          this.openNotesModal();
        }.bind(vm),
        disabled: false
      }, {
        title: "Assigner",
        icon: "icofont icofont-check",
        handler: function handler() {},
        disabled: true
      },
      // {
      //     title: "Rejeter",
      //     icon: "icofont icofont-close",
      //     handler: function () { },
      //     disabled: true
      // },
      // {
      //     title: "Vider",
      //     icon: "icofont icofont-paperclip",
      //     handler: function () { },
      //     disabled: true
      // },
      {
        title: "Supprimer",
        icon: "icofont icofont-trash",
        handler: this.startDeletingTbFromContext,
        disabled: false
      }],
      meta_parseable: {
        cred_pub_key: this.meta_data["cred_pub_key"],
        tb_name: this.tb_name,
        type_table: null
      },
      formDataToBeWatched: (_formDataToBeWatched = {
        preanbule: "",
        global_env_entity: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__["default"].loadableEntity()[0].toUpperCase(),
        denomination_client: "",
        indice: "",
        date_de_naissance: '',
        anciennete_de_la_relation: '',
        target_market: "",
        employeur: '',
        date_de_demande: '',
        contact_client: '',
        agence: '',
        nationnalite: '',
        anciennete_pro: '',
        is_first_time: null,
        revenu_domicilie_afg: [],
        revenu_total_colonne_emprunteur: 0,
        revenu_total_colonne_conjoint: 0,
        revenu_total_colonne_mensualite: 0,
        revenu_total_colonne_montant_pondere: 0,
        revenu_total_colonne_montant_qc1: 0,
        revenu_total_colonne_montant_qc2: 0,
        revenu_total_colonne_taux_qc1: 0,
        revenu_total_colonne_taux_qc2: 0,
        revenu_total_colonne_montant_qc1_conjoint: 0,
        revenu_total_colonne_mensualite_conjoint: 0,
        revenu_total_colonne_montant_pondere_conjoint: 0,
        revenu_total_colonne_taux_qc1_conjoint: 0
      }, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_formDataToBeWatched, "revenu_total_colonne_taux_qc1_conjoint", 0), "pourcentage_quotite", ""), "pourcentage_quotite_conjoint", ""), "quotite_cessible", ""), "quotite_cessible_general", ""), "pourcentage_quotite_general", ""), "revenu_total", ""), "salaire_brut", 0), "matrimoniale", ''), "conjoint", null), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_formDataToBeWatched, "type_client", ''), "adresse", ''), "status_object", {}), "regime_matrimonial", ""), "habitation", ""), "anciennete_adresse", ""), "nbre_enfant", ""), "conjoint", {
        nom: "",
        prenoms: "",
        matrimoniale: "",
        adresse: ""
        // profession: "",
      }), "annee_act_emploi", ''), "data_expiration_cdd_interim", ''), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_formDataToBeWatched, "date_debut_cdd_interim", ''), "type_contrat", ''), "comptes", []), "comptes_conjoint", []), "comptes_chez_confrere", []), "fonctionnement_comptes", []), "notes", [])),
      list_comptes: [],
      type_credits_facilite: [],
      comptes: [{
        banque: "AFG BANK",
        libelle: "",
        autre_libelle: "",
        iban: "",
        numero_compte: "",
        montant: "",
        date_extration_releve: "",
        date_ouverture_compte: "",
        montant_epargne: "",
        duree: "",
        is_locale: true
      }],
      comptes_chez_confrere: [{
        banque: "",
        libelle: "",
        autre_libelle: "",
        numero_compte: "",
        rib: "",
        iban: "",
        montant: "",
        date_extration_releve: "",
        date_ouverture_compte: "",
        montant_epargne: "",
        duree: ""
      }],
      comptes_conjoint: [{
        banque: "",
        libelle: "",
        autre_libelle: "",
        numero_compte: "",
        rib: "",
        iban: "",
        montant: "",
        date_extration_releve: "",
        date_ouverture_compte: "",
        montant_epargne: "",
        duree: ""
      }],
      data_type_de_contrat: [],
      data_date_de_depart_a_la_retraite: [],
      data_le_client_a_t_il: [],
      existance_default_value: "",
      // Ajouter note
      listingNote: false,
      entite_connectes: [{
        matricule_client_entite_connecte: "",
        raison_social_entite_connecte: "",
        secteur_activite_entite_connecte: ""
      }],
      mensualite_apres_encours_sollicite: [{
        type: 'CRESCO',
        value: 0,
        isEditable: false
      }, {
        type: 'CMT',
        value: 0,
        isEditable: false
      }, {
        type: 'CCT',
        value: 0,
        isEditable: false
      }],
      mensualite_des_encours: [{
        type: 'CRESCO',
        value: 0,
        isEditable: false
      }, {
        type: 'CMT',
        value: 0,
        isEditable: false
      }, {
        type: 'CCT',
        value: 0,
        isEditable: false
      }],
      mensualite_apres_encours_valide: [{
        type: 'CRESCO',
        value: 0,
        isEditable: false
      }, {
        type: 'CMT',
        value: 0,
        isEditable: false
      }, {
        type: 'CCT',
        value: 0,
        isEditable: false
      }],
      revenu_domicilie_afg: [{
        libelle: "Salaire net",
        checked: false,
        montant_salaire: "",
        montant_conjoint: "",
        total_ligne: "",
        eligible: false,
        source_remboursement: false,
        periodicite: "",
        mensualite: 0,
        mensualite_conjoint: 0,
        taux: 0,
        montant_pondere: 0,
        montant_pondere_conjoint: 0,
        taux_qc1: 0,
        taux_qtc_conjoint: 0,
        montant_qc1: 0,
        montant_qc1_conjoint: 0,
        taux_qc2: 0,
        montant_qc2: 0,
        commentaire: ""
      }, {
        libelle: "Prime",
        checked: false,
        montant_salaire: "",
        montant_conjoint: "",
        total_ligne: "",
        eligible: false,
        source_remboursement: false,
        periodicite: "",
        mensualite: 0,
        mensualite_conjoint: 0,
        taux: 0,
        montant_pondere: 0,
        taux_qc1: 0,
        taux_qtc_conjoint: 0,
        montant_qc1: 0,
        montant_qc1_conjoint: 0,
        taux_qc2: 0,
        montant_qc2: 0,
        commentaire: ""
      }],
      soldeList: ["Compte courant", "Compte CAV", "Compte CSE", "Compte DAT", "Compte PEL", "Compte PEP", "Compte chèque", "Compte d'engagement", "Compte d'impayés", "Compte de garanties", "Compte d'épargne", "Compte de placement", "Compte en devises", "Compte titres", "Autre"],
      fonctionnement_comptes: [{
        "id": 1,
        "numero_compte": "",
        "fonctionnement": "",
        "commentaire": ""
      }],
      periodicites: [{
        libelle: "Mensuelle",
        month: 1
      }, {
        libelle: "Bimensuelle",
        month: 1
      }, {
        libelle: "Trimestrielle",
        month: 3
      }, {
        libelle: "Semestrielle",
        month: 6
      }, {
        libelle: "Annuelle",
        month: 12
      }],
      list_entites: {
        "AFG BF": "BURKINA FASO",
        "AFG CG": "CONGO",
        "AFG CIV": "CÔTE D'IVOIRE",
        "AFG GB": "GABON",
        "AFG GN": "GUINEE",
        "AFGB ML": "MALI",
        "AFG SN": "SENEGAL",
        "AFG TG": "TOGO"
      },
      pourcentages_quotites: [],
      credpubIn0: null,
      credpubIn1: null,
      credpubIn2: null,
      credpubIn3: null,
      credpubIn4: null,
      credpubComptes: null,
      credpubProfilProfessionnel: null
    };
  },
  methods: (_methods = {
    checkValueNbreEnfant: function checkValueNbreEnfant() {
      this.formDataToBeWatched.nbre_enfant = Number(this.formDataToBeWatched.nbre_enfant.toString().replace(/\s/g, ''));
      if (this.formDataToBeWatched.nbre_enfant > 20) {
        this.formDataToBeWatched.nbre_enfant = '20';
      } else if (this.formDataToBeWatched.nbre_enfant < 0 && this.formDataToBeWatched.nbre_enfant == '00') {
        this.formDataToBeWatched.nbre_enfant = '0';
      }
    },
    retrieveEmployerInfo: function retrieveEmployerInfo() {
      var _this$meta_data2, _this$meta_data3;
      var credPubTb120002 = (_this$meta_data2 = this.meta_data) === null || _this$meta_data2 === void 0 || (_this$meta_data2 = _this$meta_data2.dossier_credit) === null || _this$meta_data2 === void 0 ? void 0 : _this$meta_data2[this.credpubIn0];
      if (['Proposition de crédit aux particuliers'].includes((_this$meta_data3 = this.meta_data) === null || _this$meta_data3 === void 0 || (_this$meta_data3 = _this$meta_data3.dossier_credit) === null || _this$meta_data3 === void 0 ? void 0 : _this$meta_data3.applied_templ_name)) {
        var _this$meta_data$dossi3, _this$meta_data4;
        credPubTb120002 = ((_this$meta_data$dossi3 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi3 === void 0 ? void 0 : _this$meta_data$dossi3['cred_pub_tb_14070']) || ((_this$meta_data4 = this.meta_data) === null || _this$meta_data4 === void 0 || (_this$meta_data4 = _this$meta_data4.dossier_credit) === null || _this$meta_data4 === void 0 ? void 0 : _this$meta_data4["cred_pub_tb_120002"]);
      }
      if (!credPubTb120002) return;
      if (!this.formDataToBeWatched.employeur) {
        var _credPubTb;
        this.formDataToBeWatched.employeur = ((_credPubTb = credPubTb120002) === null || _credPubTb === void 0 ? void 0 : _credPubTb.entreprise) || '';
      }
      if (!this.formDataToBeWatched.anciennete_pro) {
        var _this$meta_data$dossi4, _this$meta_data5, _credPubTb2;
        var created_at = (_this$meta_data$dossi4 = (_this$meta_data5 = this.meta_data) === null || _this$meta_data5 === void 0 || (_this$meta_data5 = _this$meta_data5.dossier_credit) === null || _this$meta_data5 === void 0 ? void 0 : _this$meta_data5.created_at) !== null && _this$meta_data$dossi4 !== void 0 ? _this$meta_data$dossi4 : Date.now();
        var existSinceRaw = (_credPubTb2 = credPubTb120002) === null || _credPubTb2 === void 0 ? void 0 : _credPubTb2.duree_anciennete2;
        var existSince = typeof existSinceRaw === "string" ? existSinceRaw.trim() : String(existSinceRaw || '').trim();
        var existSinceNum = parseInt(existSince, 10);
        if (!existSince || isNaN(existSinceNum) || existSinceNum < 0) {
          this.formDataToBeWatched.anciennete_pro = '';
        } else {
          var currentYear = new Date(created_at).getFullYear();
          var creationYear = currentYear - existSinceNum;
          this.formDataToBeWatched.anciennete_pro = "".concat(creationYear, "-01-01");
        }
      }
    },
    handleMarketTarget: function handleMarketTarget(event) {
      this.formDataToBeWatched.target_market = event.target.value;
    },
    formDataVars: function formDataVars(event) {
      this.formDataToBeWatched[event[0]] = event[1];
    },
    getFcubAccountClassTab: function getFcubAccountClassTab() {
      var _this3 = this;
      _services_afg_service__WEBPACK_IMPORTED_MODULE_5__["default"].getFcubAccountClassTab().then(function (res) {
        // this.dynamique_question = res?.data
        _this3.type_credits_facilite = res === null || res === void 0 ? void 0 : res.data;
        // console.log("la data=>",data)
        // this.handleInput()
      })["catch"](function (err) {
        console.log(err);
      });
    },
    addMoreRevenu: function addMoreRevenu() {
      this.revenu_domicilie_afg.push({
        libelle: "",
        checked: true,
        montant_salaire: "",
        montant_conjoint: "",
        total_ligne: "",
        eligible: false,
        source_remboursement: false,
        periodicite: "",
        mensualite: 0,
        taux: 0,
        montant_pondere: 0,
        taux_qc1: 0,
        montant_qc1: 0,
        taux_qc2: 0,
        montant_qc2: 0,
        commentaire: ""
      });
      this.handleInput();
    },
    removeRevenu: function removeRevenu(index) {
      this.revenu_domicilie_afg.splice(index, 1);
      this.handleInput();
    },
    formDataVars2: function formDataVars2(event, index, objectName, keyName) {
      this[objectName][index][keyName] = event[1];
      if (['mensualite', 'mensualite_conjoint', 'taux', 'montant_pondere', 'montant_pondere_conjoint', 'montant_salaire', 'periodicite', 'montant_conjoint', 'source_remboursement'].includes(keyName) && objectName == 'revenu_domicilie_afg') {
        this.handleInput(true);
      } else {
        this.handleInput();
      }
    },
    handleEncours: function handleEncours(event, index, encoursList) {
      this.formDataToBeWatched[encoursList][index].value = event.target.value;
    },
    slctExistant: function slctExistant() {
      var _this$meta_data$dossi5;
      var existance;
      var experience = (_this$meta_data$dossi5 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi5 === void 0 || (_this$meta_data$dossi5 = _this$meta_data$dossi5.cred_pub_tb_00) === null || _this$meta_data$dossi5 === void 0 ? void 0 : _this$meta_data$dossi5.experience_secteur;
      if (experience <= 3) {
        existance = "<3 ans";
      } else {
        if (experience <= 5) {
          existance = ">3 ans";
        } else {
          if (experience <= 10) existance = ">5 ans";else existance = ">10 ans";
        }
      }
      return existance;
    },
    limitStr: function limitStr(thresold, key) {
      var _this$formDataToBeWat;
      thresold += 3;
      if (((_this$formDataToBeWat = this.formDataToBeWatched[key]) === null || _this$formDataToBeWat === void 0 ? void 0 : _this$formDataToBeWat.replace(/(<([^>]+)>)/gi, "").length) > thresold) {
        this.formDataToBeWatched[key] = this.textTruncate(this.formDataToBeWatched[key], thresold);
      }
    },
    tableClosedOrOpened: function tableClosedOrOpened() {
      this.seen = this.fetchClosedTables(this.tb_name + this.meta_data["cred_pub_key"]);
    },
    openNotesModal: function openNotesModal() {
      var listing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.listingNote = listing;
      this.$modal.show(this.tb_name);
    },
    launchAutoSaver: function launchAutoSaver() {
      var _this4 = this;
      _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["default"].loadUserData().then(function (res) {
        _this4.send2Backend(res, 0, 0);
      })["catch"](function (err) {
        _this4.loadWithError(err);
      });
    },
    setChiffreCleVars: function setChiffreCleVars(event, index) {
      this.chiffres_cles[index][event[0]] = event[1];
      this.handleInput();
      this.chiffres_cles[0].nb_an_activite_n_2 = parseInt(this.chiffres_cles[0].nb_an_activite_n_1) - 1;
      this.formDataToBeWatched["chiffres_cles"] = this.chiffres_cles;
    },
    updateValue: function updateValue(val) {
      alert("value to update");
      alert(JSON.stringify(val));
    },
    resetValues: function resetValues(event, index, objectName) {
      if (objectName == 'revenu_domicilie_afg') {
        this[objectName][index].montant_salaire = "";
        this[objectName][index].montant_conjoint = "";
        this[objectName][index].eligible = false;
        this[objectName][index].source_remboursement = false;
        this[objectName][index].periodicite = "";
        this[objectName][index].mensualite = 0;
        this[objectName][index].taux = 0;
        this[objectName][index].montant_pondere = 0;
        this[objectName][index].taux_qc1 = 0;
        this[objectName][index].montant_qc1 = 0;
        this[objectName][index].taux_qc2 = 0;
        this[objectName][index].montant_qc2 = 0;
        this[objectName][index].commentaire = "";
        if (this[objectName][index].libelle == 'Salaire net') {
          this[objectName][index].eligible = true;
          this[objectName][index].source_remboursement = false;
          this[objectName][index].taux = 100;
          this[objectName][index].montant_pondere = 0;
        }
      } else {
        this[objectName][index].date_echeance = "";
        this[objectName][index].montant = "";
        this[objectName][index].encours = "";
        this[objectName][index].mensualite = "";
      }
      this.handleInput();
    },
    cafData: function cafData(res) {
      this.cafInfo = res.data;
      if (this.formDataToBeWatched.telephone_principal_dirg == undefined || this.formDataToBeWatched.telephone_principal_dirg.length === 0) {
        this.formDataToBeWatched.telephone_principal_dirg = this.cafInfo.phonecode;
      }
      // this.formDataToBeWatched.filiale = this.cafInfo.codecaf.replace(/[0-9]/g, "");
      if (this.entityType.toUpperCase() == 'BANK') {
        this.formDataToBeWatched.filiale = "AFGB CIV";
        //   this.formDataToBeWatched.pays = this.list_entites[this.formDataToBeWatched.filiale]
      } else {
        this.formDataToBeWatched.filiale = "CFN CIV";
      }
      this.formDataToBeWatched.agence = this.cafInfo.agence.replaceAll("_", " ");
      this.formDataToBeWatched.agence = this.formDataToBeWatched.agence.replace(this.formDataToBeWatched.filiale, "");
      this.formDataToBeWatched.caf = this.cafInfo.codecaf ? this.cafInfo.nom + " (" + this.cafInfo.codecaf + ")" : this.cafInfo.nom;
      this.formDataToBeWatched.pays = this.list_entites[this.formDataToBeWatched.filiale];
      this.formDataToBeWatched.nom_complet_caf = this.cafInfo.nom;
      this.formDataToBeWatched.email_caf = this.cafInfo.email;
      this.formDataToBeWatched.id_caf = this.cafInfo.id;
      this.formDataToBeWatched.chef_agence = this.cafInfo.chef_agence;
      this.formDataToBeWatched.chef_zone = this.cafInfo.chef_zone;
      this.formDataToBeWatched.dri_1 = this.cafInfo.dri_1;
      this.formDataToBeWatched.dir_engagement = this.cafInfo.dir_engagement;
      this.formDataToBeWatched.disp_engagement = this.cafInfo.disp_engagement;
      this.formDataToBeWatched.centrale_app = this.cafInfo.centrale_app;

      /************************************************************************/
      // this.formDataToBeWatched.chef_depart_dcei = this.cafInfo.chef_depart_dcei
      this.formDataToBeWatched.dir_dcei = this.cafInfo.dir_dcei;
      this.formDataToBeWatched.disp_dsm = this.cafInfo.disp_dsm;
      this.formDataToBeWatched.dir_centr_exploi = this.cafInfo.dir_centr_exploi;
      this.formDataToBeWatched.assistant_rse = this.cafInfo.assistant_rse;
      this.formDataToBeWatched.chef_serv_rse = this.cafInfo.chef_serv_rse;
      this.formDataToBeWatched.chef_depart_rse = this.cafInfo.chef_depart_rse;
      this.formDataToBeWatched.dir_rse = this.cafInfo.dir_rse;
      // this.formDataToBeWatched.disp_dc = this.cafInfo.disp_dc
      this.formDataToBeWatched.analyste_risq_cred = this.cafInfo.analyste_risq_cred;
      this.formDataToBeWatched.chef_serv_acei = this.cafInfo.chef_serv_acei;
      this.formDataToBeWatched.chef_depart_dc = this.cafInfo.chef_depart_dc;
      this.formDataToBeWatched.dir_cred = this.cafInfo.dir_cred;
      this.formDataToBeWatched.disp_dgr = this.cafInfo.disp_dgr;
      this.formDataToBeWatched.agent_grc = this.cafInfo.agent_grc;
      this.formDataToBeWatched.chef_serv_grc = this.cafInfo.chef_serv_grc;
      this.formDataToBeWatched.dir_grc = this.cafInfo.dir_grc;
      this.formDataToBeWatched.disp_grc = this.cafInfo.disp_grc;
      this.formDataToBeWatched.chef_serv_rcg = this.cafInfo.chef_serv_rcg;
      this.formDataToBeWatched.chef_dept_rcg = this.cafInfo.chef_dept_rcg;
      this.formDataToBeWatched.dir_rcg = this.cafInfo.dir_rcg;
      this.formDataToBeWatched.dir_ccca = this.cafInfo.dir_ccca;
      this.formDataToBeWatched.dir_ca = this.cafInfo.dir_ca;
      this.formDataToBeWatched.dir_dcp = this.cafInfo.dir_dcp;
      /************************************************************************/

      //this.formDataToBeWatched.cofiscore = this.meta_data.dossier_credit?.cred_pub_tb_000?.note_interne
    },
    onSlctMatCli: function onSlctMatCli(obj) {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var response, a, b, c;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (!(obj != null)) {
                _context3.next = 19;
                break;
              }
              _context3.next = 3;
              return _this5.getInfoClient(obj.matcli);
            case 3:
              response = _context3.sent;
              _this5.formDataToBeWatched.matricule_client = obj.matcli;
              _this5.formDataToBeWatched.denomination_client = obj.nomcli;
              _this5.formDataToBeWatched.nom_emprunteur = obj.nomcli;
              _this5.formDataToBeWatched.adresse_professionnel_principal = obj.adrescli;
              _this5.formDataToBeWatched.geo_lat = obj.site_lat;
              _this5.formDataToBeWatched.geo_lon = obj.site_long;
              if (_this5.formDataToBeWatched.adresse_professionnel_principal == "" || _this5.formDataToBeWatched.adresse_professionnel_principal == null) {
                _this5.formDataToBeWatched.adresse_professionnel_principal == response.adrescli;
              }
              if (_this5.formDataToBeWatched.geo_lat == "0.0000000" || _this5.formDataToBeWatched.geo_lat == null) {
                _this5.formDataToBeWatched.geo_lat = response.site_lat;
              }
              if (_this5.formDataToBeWatched.geo_lon == "0.0000000" || _this5.formDataToBeWatched.geo_lon == null) {
                _this5.formDataToBeWatched.geo_lon = response.site_long;
              }
              a = obj.matcli;
              b = _this5.formDataToBeWatched.montant_sollicite;
              c = _this5.formDataToBeWatched.duree_credit;
              _context3.next = 18;
              return _this5.crdLd(obj.matcli);
            case 18:
              _this5.handleInput();

              /*EventBus.$emit("event-T0", {
                  formdata: this.formDataToBeWatched
              });*/
            case 19:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    handleInput2: function handleInput2() {
      var _this$revenu_domicili,
        _this6 = this;
      var reset_taux_qc = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var type_client = this.formDataToBeWatched.type_client;
      if (this.formDataToBeWatched.matrimoniale == 'Marié(e)') {
        this.formDataToBeWatched.conjoint.adresse = this.formDataToBeWatched.adresse;
        this.formDataToBeWatched.conjoint.matrimoniale = 'Marié(e)';
      }
      (_this$revenu_domicili = this.revenu_domicilie_afg) === null || _this$revenu_domicili === void 0 || _this$revenu_domicili.forEach(function (el) {
        if (el.eligible) {
          var _el$taux, _el$mensualite, _el$taux_qc2, _el$montant_pondere2;
          var t = (Number((_el$taux = el.taux) === null || _el$taux === void 0 ? void 0 : _el$taux.toString().replace(/\s/g, "")) / 100).toFixed(2);
          var periode = 1;
          var periodicite = _this6.periodicites.find(function (p) {
            return p.libelle == el.periodicite;
          });
          if (periodicite != undefined && (periodicite === null || periodicite === void 0 ? void 0 : periodicite.month) != undefined) {
            periode = periodicite === null || periodicite === void 0 ? void 0 : periodicite.month;
          }
          if ((periodicite === null || periodicite === void 0 ? void 0 : periodicite.libelle) == "Bimensuelle") {
            var _el$montant_salaire;
            el.mensualite = Number((_el$montant_salaire = el.montant_salaire) === null || _el$montant_salaire === void 0 ? void 0 : _el$montant_salaire.toString().replace(/\s/g, "")) * periode;
          } else {
            var _el$montant_salaire2;
            el.mensualite = Number((_el$montant_salaire2 = el.montant_salaire) === null || _el$montant_salaire2 === void 0 ? void 0 : _el$montant_salaire2.toString().replace(/\s/g, "")) / periode;
          }
          el.mensualite = parseInt(el.mensualite.toFixed(2));
          el.montant_pondere = Number((_el$mensualite = el.mensualite) === null || _el$mensualite === void 0 ? void 0 : _el$mensualite.toString().replace(/\s/g, "")) * t;
          if (el.libelle == "Salaire net") {
            var _el$taux_qc, _el$montant_pondere;
            el.taux_qc1 = reset_taux_qc ? _this6.determinePourQutotite(el.montant_pondere, type_client) : el.taux_qc1;
            el.taux_qc2 = reset_taux_qc ? _this6.determinePourQutotite(el.montant_pondere) : el.taux_qc2;
            t = (Number((_el$taux_qc = el.taux_qc2) === null || _el$taux_qc === void 0 ? void 0 : _el$taux_qc.toString().replace(/\s/g, "")) / 100).toFixed(2);
            el.montant_qc2 = Number((_el$montant_pondere = el.montant_pondere) === null || _el$montant_pondere === void 0 ? void 0 : _el$montant_pondere.toString().replace(/\s/g, "")) * t;
          } else {
            if (['Prime', 'Loyer'].includes(el.libelle)) {
              el.taux_qc1 = el.taux_qc1 == 0 ? 75 : el.taux_qc1;
            }
          }
          t = (Number((_el$taux_qc2 = el.taux_qc1) === null || _el$taux_qc2 === void 0 ? void 0 : _el$taux_qc2.toString().replace(/\s/g, "")) / 100).toFixed(2);
          el.montant_qc1 = Number((_el$montant_pondere2 = el.montant_pondere) === null || _el$montant_pondere2 === void 0 ? void 0 : _el$montant_pondere2.toString().replace(/\s/g, "")) * t;
          el.montant_pondere = parseInt(el.montant_pondere.toFixed(2));
          el.montant_qc1 = parseInt(el.montant_qc1.toFixed(2));
          el.montant_qc2 = parseInt(el.montant_qc2.toFixed(2));
        }
      });
      this.formDataToBeWatched.revenu_domicilie_afg = this.revenu_domicilie_afg;
      this.formDataToBeWatched.revenu_total_colonne_montant_qc1 = this.somX3(this.revenu_domicilie_afg, 'montant_qc1');
      this.formDataToBeWatched.revenu_total_colonne_montant_qc2 = this.somX3(this.revenu_domicilie_afg, 'montant_qc2');
      this.formDataToBeWatched.revenu_total_colonne_mensualite = this.somX3(this.revenu_domicilie_afg, 'mensualite');
      this.formDataToBeWatched.revenu_total_colonne_montant_pondere = this.somX3(this.revenu_domicilie_afg, 'montant_pondere');
      this.formDataToBeWatched.revenu_total_colonne_emprunteur = this.somX3(this.revenu_domicilie_afg, 'montant_salaire');
      this.formDataToBeWatched.revenu_total_colonne_conjoint = this.somX3(this.revenu_domicilie_afg, 'montant_conjoint');
      this.formDataToBeWatched.revenu_total = this.formDataToBeWatched.revenu_total_colonne_emprunteur + this.formDataToBeWatched.revenu_total_colonne_conjoint;
      if (this.convertInt(this.formDataToBeWatched.revenu_total_colonne_montant_pondere) > 0) {
        this.formDataToBeWatched.revenu_total_colonne_taux_qc1 = (this.convertInt(this.formDataToBeWatched.revenu_total_colonne_montant_qc1) / this.convertInt(this.formDataToBeWatched.revenu_total_colonne_montant_pondere) * 100).toFixed(2);
        this.formDataToBeWatched.revenu_total_colonne_taux_qc2 = (this.convertInt(this.formDataToBeWatched.revenu_total_colonne_montant_qc2) / this.convertInt(this.formDataToBeWatched.revenu_total_colonne_montant_pondere) * 100).toFixed(2);
      } else {
        this.formDataToBeWatched.revenu_total_colonne_taux_qc1 = 0;
        this.formDataToBeWatched.revenu_total_colonne_taux_qc2 = 0;
      }
      this.revenu_domicilie_afg.forEach(function (element) {
        var _element$montant_sala, _element$montant_conj;
        var total = Number(element === null || element === void 0 || (_element$montant_sala = element.montant_salaire) === null || _element$montant_sala === void 0 ? void 0 : _element$montant_sala.toString().replace(/\s/g, "")) + Number(element === null || element === void 0 || (_element$montant_conj = element.montant_conjoint) === null || _element$montant_conj === void 0 ? void 0 : _element$montant_conj.toString().replace(/\s/g, ""));
        element.total_ligne = total;
      });

      // Assignations 
      this.formDataToBeWatched.pourcentage_quotite = Number(this.formDataToBeWatched.revenu_total_colonne_taux_qc1) || 0;
      this.formDataToBeWatched.quotite_cessible = Number(this.formDataToBeWatched.revenu_total_colonne_montant_qc1) || 0;
      this.formDataToBeWatched.quotite_cessible_general = Number(this.formDataToBeWatched.revenu_total_colonne_montant_qc2) || 0;
      this.formDataToBeWatched.pourcentage_quotite_general = Number(this.formDataToBeWatched.revenu_total_colonne_taux_qc2) || 0;
      this.emitUpdated();
    },
    handleInput: function handleInput() {
      var _this$revenu_domicili2,
        _this7 = this;
      var reset_taux_qc = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var type_client = this.formDataToBeWatched.type_client;
      var mensualiteSuperieur = 0;
      // this.formDataToBeWatched.avoirs_investissements = this.avoirs_investissements
      if (this.formDataToBeWatched.matrimoniale === 'Marié(e)') {
        this.formDataToBeWatched.conjoint.adresse = this.formDataToBeWatched.adresse;
        this.formDataToBeWatched.conjoint.matrimoniale = 'Marié(e)';
      } else {
        this.formDataToBeWatched.conjoint = {
          nom: "",
          prenoms: "",
          email: "",
          telephone: "",
          type_piece: "",
          num_piece: "",
          sexe: "",
          date_naissance: "",
          ville_naissance: "",
          ville_residence: "",
          nationnalite: "",
          matrimoniale: "",
          habitation: "",
          anciennete_adresse: "",
          nbre_enfant: "",
          adresse: "",
          compte_chez_banque_ci: "",
          autres_comptes: "",
          revenu_domicilie: ""
        };
      }
      if (typeof reset_taux_qc != 'boolean') {
        reset_taux_qc = false;
      }
      (_this$revenu_domicili2 = this.revenu_domicilie_afg) === null || _this$revenu_domicili2 === void 0 || _this$revenu_domicili2.forEach(function (el) {
        if (el.eligible) {
          var _el$taux2, _el$mensualite2, _el$mensualite_conjoi, _el$taux_qc4, _el$montant_pondere4, _el$taux_qtc_conjoint, _el$montant_pondere_c;
          var t = (Number(((_el$taux2 = el.taux) === null || _el$taux2 === void 0 ? void 0 : _el$taux2.toString().replace(/\s/g, "")) || 0) / 100).toFixed(2);
          var periode = 1;
          var periodicite = _this7.periodicites.find(function (p) {
            return p.libelle === el.periodicite;
          });
          if (el.taux_qc2 > 0) {
            mensualiteSuperieur += Number(el.mensualite.toString().replace(/\s/g, "") || 0);
          }
          if (periodicite !== null && periodicite !== void 0 && periodicite.month) {
            periode = periodicite.month;
          }
          if ((periodicite === null || periodicite === void 0 ? void 0 : periodicite.libelle) === "Bimensuelle") {
            var _el$montant_salaire3, _el$montant_conjoint;
            el.mensualite = Number(((_el$montant_salaire3 = el.montant_salaire) === null || _el$montant_salaire3 === void 0 ? void 0 : _el$montant_salaire3.toString().replace(/\s/g, "")) || 0) * periode;
            el.mensualite_conjoint = parseInt(((_el$montant_conjoint = el.montant_conjoint) === null || _el$montant_conjoint === void 0 ? void 0 : _el$montant_conjoint.toString().replace(/\s/g, "")) || 0) * periode;
          } else {
            var _el$montant_salaire4, _el$montant_conjoint2;
            el.mensualite = Number(((_el$montant_salaire4 = el.montant_salaire) === null || _el$montant_salaire4 === void 0 ? void 0 : _el$montant_salaire4.toString().replace(/\s/g, "")) || 0) / periode;
            el.mensualite_conjoint = parseInt(((_el$montant_conjoint2 = el.montant_conjoint) === null || _el$montant_conjoint2 === void 0 ? void 0 : _el$montant_conjoint2.toString().replace(/\s/g, "")) || 0) / periode;
          }
          el.mensualite = parseInt(el.mensualite.toFixed(2)) || 0;
          el.mensualite_conjoint = parseInt(el.mensualite_conjoint.toFixed(2)) || 0;
          el.montant_pondere = Number(((_el$mensualite2 = el.mensualite) === null || _el$mensualite2 === void 0 ? void 0 : _el$mensualite2.toString().replace(/\s/g, "")) || 0) * t;
          el.montant_pondere_conjoint = Number(((_el$mensualite_conjoi = el.mensualite_conjoint) === null || _el$mensualite_conjoi === void 0 ? void 0 : _el$mensualite_conjoi.toString().replace(/\s/g, "")) || 0) * t;
          if (el.libelle === "Salaire net" && el.source_remboursement === true) {
            var _el$taux_qc3, _el$montant_pondere3;
            _this7.$set(el, 'taux_qc1', reset_taux_qc ? _this7.determinePourQutotite(el.montant_pondere, type_client) : el.taux_qc1 || 0);
            el.taux_qc1 = reset_taux_qc ? _this7.determinePourQutotite(el.montant_pondere, type_client) : el.taux_qc1 || 0;
            el.taux_qtc_conjoint = reset_taux_qc ? _this7.determinePourQutotite(el.montant_pondere_conjoint, type_client) : el.taux_qtc_conjoint || 0;
            el.taux_qc2 = 33;
            // el.taux_qc2 = reset_taux_qc ? this.determinePourQutotite(el.montant_pondere) : (el.taux_qc2 || 0);

            var t_qc2 = (Number(((_el$taux_qc3 = el.taux_qc2) === null || _el$taux_qc3 === void 0 ? void 0 : _el$taux_qc3.toString().replace(/\s/g, "")) || 0) / 100).toFixed(2);
            el.montant_qc2 = Number(((_el$montant_pondere3 = el.montant_pondere) === null || _el$montant_pondere3 === void 0 ? void 0 : _el$montant_pondere3.toString().replace(/\s/g, "")) || 0) * t_qc2;
          } else if (['Prime', 'Revenu locatif'].includes(el.libelle)) {
            el.taux_qc1 = el.taux_qc1 === 0 ? 75 : el.taux_qc1 || 0;
            el.taux_qtc_conjoint = el.taux_qtc_conjoint === 0 ? 75 : el.taux_qtc_conjoint || 0;
          }
          var t_qc1 = (Number(((_el$taux_qc4 = el.taux_qc1) === null || _el$taux_qc4 === void 0 ? void 0 : _el$taux_qc4.toString().replace(/\s/g, "")) || 0) / 100).toFixed(2);
          el.montant_qc1 = Number(((_el$montant_pondere4 = el.montant_pondere) === null || _el$montant_pondere4 === void 0 ? void 0 : _el$montant_pondere4.toString().replace(/\s/g, "")) || 0) * t_qc1;
          var t_qc_conjoint = (Number(((_el$taux_qtc_conjoint = el.taux_qtc_conjoint) === null || _el$taux_qtc_conjoint === void 0 ? void 0 : _el$taux_qtc_conjoint.toString().replace(/\s/g, "")) || 0) / 100).toFixed(2);
          el.montant_qc1_conjoint = Number(((_el$montant_pondere_c = el.montant_pondere_conjoint) === null || _el$montant_pondere_c === void 0 ? void 0 : _el$montant_pondere_c.toString().replace(/\s/g, "")) || 0) * t_qc_conjoint;
          el.montant_pondere = parseInt(el.montant_pondere.toFixed(2)) || 0;
          el.montant_qc1 = parseInt(el.montant_qc1.toFixed(2)) || 0;
          el.montant_qc1_conjoint = parseInt(el.montant_qc1_conjoint.toFixed(2)) || 0;
          el.montant_qc2 = parseInt(el.montant_qc2.toFixed(2)) || 0;
        } else {
          // Ensure montant_qc1_conjoint is reset to 0 if not eligible
          el.montant_qc1_conjoint = 0;
          el.montant_qc1 = 0;
          el.montant_pondere = 0;
          el.montant_pondere_conjoint = 0;
          el.montant_qc2 = 0;
        }
      });
      this.formDataToBeWatched.revenu_domicilie_afg = this.revenu_domicilie_afg;
      this.formDataToBeWatched.status_object = this.status_object;

      // Calculate totals
      this.formDataToBeWatched.revenu_total_colonne_montant_qc1 = this.somX3(this.revenu_domicilie_afg, 'montant_qc1');
      this.formDataToBeWatched.revenu_total_colonne_montant_qc1_conjoint = this.somX3(this.revenu_domicilie_afg, 'montant_qc1_conjoint');
      this.formDataToBeWatched.revenu_total_colonne_montant_qc2 = this.somX3(this.revenu_domicilie_afg, 'montant_qc2');
      this.formDataToBeWatched.revenu_total_colonne_mensualite = this.somX3(this.revenu_domicilie_afg, 'mensualite');
      this.formDataToBeWatched.revenu_total_colonne_mensualite_conjoint = this.somX3(this.revenu_domicilie_afg, 'mensualite_conjoint');
      this.formDataToBeWatched.revenu_total_colonne_montant_pondere = this.somX3(this.revenu_domicilie_afg, 'montant_pondere');
      this.formDataToBeWatched.revenu_total_colonne_montant_pondere_conjoint = this.somX3(this.revenu_domicilie_afg, 'montant_pondere_conjoint');
      this.formDataToBeWatched.revenu_total_colonne_emprunteur = this.somX3(this.revenu_domicilie_afg, 'montant_salaire');
      this.formDataToBeWatched.revenu_total_colonne_conjoint = this.somX3(this.revenu_domicilie_afg, 'montant_conjoint');
      this.formDataToBeWatched.revenu_total = this.formDataToBeWatched.revenu_total_colonne_emprunteur + this.formDataToBeWatched.revenu_total_colonne_conjoint;
      if (this.convertInt(this.formDataToBeWatched.revenu_total_colonne_montant_pondere) > 0) {
        this.formDataToBeWatched.revenu_total_colonne_taux_qc1 = (this.convertInt(this.formDataToBeWatched.revenu_total_colonne_montant_qc1) / this.convertInt(this.formDataToBeWatched.revenu_total_colonne_montant_pondere) * 100).toFixed(2);
        this.formDataToBeWatched.revenu_total_colonne_taux_qc1_conjoint = (this.convertInt(this.formDataToBeWatched.revenu_total_colonne_montant_qc1_conjoint) / this.convertInt(this.formDataToBeWatched.revenu_total_colonne_montant_pondere_conjoint) * 100).toFixed(2);
        // this.formDataToBeWatched.revenu_total_colonne_taux_qc2 = ((this.convertInt(this.formDataToBeWatched.revenu_total_colonne_montant_qc2) / this.convertInt(this.formDataToBeWatched.revenu_total_colonne_montant_pondere)) * 100).toFixed(2);
        this.formDataToBeWatched.revenu_total_colonne_taux_qc2 = (this.convertInt(this.formDataToBeWatched.quotite_cessible_general) / this.convertInt(mensualiteSuperieur) * 100).toFixed(2);
      } else {
        this.formDataToBeWatched.revenu_total_colonne_taux_qc1 = 0;
        this.formDataToBeWatched.revenu_total_colonne_taux_qc1_conjoint = 0;
        this.formDataToBeWatched.revenu_total_colonne_taux_qc2 = 0;
      }
      this.revenu_domicilie_afg.forEach(function (element) {
        var _element$montant_sala2, _element$montant_conj2;
        var total = Number((element === null || element === void 0 || (_element$montant_sala2 = element.montant_salaire) === null || _element$montant_sala2 === void 0 ? void 0 : _element$montant_sala2.toString().replace(/\s/g, "")) || 0) + Number((element === null || element === void 0 || (_element$montant_conj2 = element.montant_conjoint) === null || _element$montant_conj2 === void 0 ? void 0 : _element$montant_conj2.toString().replace(/\s/g, "")) || 0);
        element.total_ligne = total;
      });
      this.formDataToBeWatched.pourcentage_quotite = Number(this.formDataToBeWatched.revenu_total_colonne_taux_qc1) || 0;
      this.formDataToBeWatched.pourcentage_quotite_conjoint = Number(this.formDataToBeWatched.revenu_total_colonne_taux_qc1_conjoint) || 0;
      this.formDataToBeWatched.quotite_cessible = Number(this.formDataToBeWatched.revenu_total_colonne_montant_qc1) || 0;
      this.formDataToBeWatched.quotite_cessible_general = Number(this.formDataToBeWatched.revenu_total_colonne_montant_qc2) || 0;
      this.formDataToBeWatched.pourcentage_quotite_general = Number(this.formDataToBeWatched.revenu_total_colonne_taux_qc2) || 0;
      this.formDataToBeWatched.comptes = this.comptes;
      this.formDataToBeWatched.comptes_conjoint = this.comptes_conjoint;
      this.formDataToBeWatched.fonctionnement_comptes = this.fonctionnement_comptes;
      this.formDataToBeWatched.comptes_chez_confrere = this.comptes_chez_confrere;
      this.list_comptes = [].concat(_toConsumableArray(this.comptes), _toConsumableArray(this.comptes_chez_confrere));
      this.emitData2();
      this.emitUpdated();
    },
    determinePourQutotite: function determinePourQutotite(value) {
      var _this8 = this;
      var type_client = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var taux = 0;
      if (this.pourcentages_quotites.length == 0) {
        setTimeout(function () {
          _this8.handleInput();
        }, 1500);
      } else {
        this.pourcentages_quotites.forEach(function (element) {
          if (element.entity == 'AFG' && element.type_client == type_client) {
            var min = Number(element.min);
            var max = Number(element.max);
            if (max != 0) {
              if (min <= value && max > value) {
                taux = element.pourcentage;
              }
            } else {
              if (value >= min) {
                taux = element.pourcentage;
              }
            }
          }
        });
      }
      return taux;
    },
    somX3: function somX3(ob, key) {
      var som = 0;
      ob === null || ob === void 0 || ob.forEach(function (elm) {
        var val = elm[key];
        if (val != null && !isNaN(val.toString().replace(/\s/g, ""))) {
          som += Number(val.toString().replace(/\s/g, ""));
        }
      });
      return som;
    },
    convertInt: function convertInt(n) {
      var _n$toString;
      return Number(n === null || n === void 0 || (_n$toString = n.toString()) === null || _n$toString === void 0 ? void 0 : _n$toString.replace(/\s/g, ''));
    },
    loadScoringData: function loadScoringData() {
      var _this9 = this;
      var cachedScoringCritere = localStorage.getItem('scoring_criteres');
      _services_credit_service__WEBPACK_IMPORTED_MODULE_4__["default"].loadScoringData().then(function (res) {
        _this9.scoringData(res);
        // localStorage.setItem('scoring_criteres', JSON.stringify(res));
      })["catch"](function (err) {
        console.log(err);
      });
    },
    scoringData: function scoringData(res) {
      var _this0 = this;
      var criteres = res.data.data.criteres;
      criteres.forEach(function (element) {
        if (element.type == 'ppo' || element.type == null) {
          if (element.slug == 'statut_du_client_selon_lemployeur') {
            _this0.data_statut_du_client = element.elements.filter(function (item) {
              return item.type == 'ppo' || item.type == null;
            });
          }
          if (element.slug == 'type_de_contrat') {
            _this0.data_type_de_contrat = element.elements.filter(function (item) {
              return item.type == 'ppo' || item.type == null;
            });
          }
          if (element.slug == 'le_client_a_t_il_acheve_sa_periode_dessai_professionnel') {
            _this0.data_le_client_a_t_il = element.elements.filter(function (item) {
              return item.type == 'ppo' || item.type == null;
            });
          }
          if (element.slug == 'date_de_depart_a_la_retraite_ou_06_mois_apres_lecheance_du_credit') {
            _this0.data_date_de_depart_a_la_retraite = element.elements.filter(function (item) {
              return item.type == 'ppo' || item.type == null;
            });
          }
        }
      });
    },
    loadPourQuotiteData: function loadPourQuotiteData() {
      var _this1 = this;
      _services_credit_service__WEBPACK_IMPORTED_MODULE_4__["default"].loadPourQuotiteData().then(function (res) {
        _this1.pourcentages_quotites = res.data;
      })["catch"](function (err) {
        console.log(err);
      });
    },
    emitUpdated: function emitUpdated() {
      EventBus.$emit("dossier-updated-nthd-0", {
        data0: this.formDataToBeWatched
      });
    },
    convertDDMMYYYYtoYYYYMMDD: function convertDDMMYYYYtoYYYYMMDD(dateString) {
      if (typeof dateString !== 'string' || !dateString.includes('/')) {
        // console.warn('Date invalide :', dateString);
        return null; // ou retourne une valeur par défaut
      }
      var _dateString$split$map = dateString.split('/').map(Number),
        _dateString$split$map2 = _slicedToArray(_dateString$split$map, 3),
        day = _dateString$split$map2[0],
        month = _dateString$split$map2[1],
        year = _dateString$split$map2[2];

      // Vérification de base
      if (isNaN(day) || isNaN(month) || isNaN(year) || day < 1 || day > 31 || month < 1 || month > 12 || year < 1000) {
        console.warn('Composants de date invalides :', {
          day: day,
          month: month,
          year: year
        });
        return null;
      }
      var date = new Date(year, month - 1, day);
      var formattedYear = date.getFullYear();
      var formattedMonth = String(date.getMonth() + 1).padStart(2, '0');
      var formattedDay = String(date.getDate()).padStart(2, '0');
      return "".concat(formattedYear, "-").concat(formattedMonth, "-").concat(formattedDay);
    },
    getField: function getField(primary, fallback, field) {
      var _primary$field;
      return (_primary$field = primary === null || primary === void 0 ? void 0 : primary[field]) !== null && _primary$field !== void 0 ? _primary$field : fallback === null || fallback === void 0 ? void 0 : fallback[field];
    },
    loadRetrieved: function loadRetrieved() {
      var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];
      // console.log('this.credpubProfilProfessionnel',this.credpubProfilProfessionnel);

      if (this.meta_data["dossier_credit"][createdKey] == undefined) {
        var _this$meta_data$dossi6, _this$meta_data$dossi7, _this$meta_data$dossi8, _this$meta_data$dossi9, _this$meta_data$dossi0, _this$meta_data$dossi1, _this$meta_data$dossi10, _this$meta_data$dossi11, _this$formDataToBeWat2;
        var cred_pub_tb_14070 = (_this$meta_data$dossi6 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi6 === void 0 ? void 0 : _this$meta_data$dossi6['cred_pub_tb_14070'];
        var cred_pub_tb_120001 = (_this$meta_data$dossi7 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi7 === void 0 ? void 0 : _this$meta_data$dossi7[this.credpubIn0];
        var cred_pub_tb_120002 = (_this$meta_data$dossi8 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi8 === void 0 ? void 0 : _this$meta_data$dossi8[this.credpubProfilProfessionnel];
        var cred_pub_tb_120003 = (_this$meta_data$dossi9 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi9 === void 0 ? void 0 : _this$meta_data$dossi9[this.credpubComptes];
        var ficheSignaletique = ((_this$meta_data$dossi0 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi0 === void 0 ? void 0 : _this$meta_data$dossi0['cred_pub_tb_14070']) || ((_this$meta_data$dossi1 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi1 === void 0 ? void 0 : _this$meta_data$dossi1[this.credpubIn0]);
        var profesionalInfo = ((_this$meta_data$dossi10 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi10 === void 0 ? void 0 : _this$meta_data$dossi10['cred_pub_tb_14070']) || ((_this$meta_data$dossi11 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi11 === void 0 ? void 0 : _this$meta_data$dossi11[this.credpubProfilProfessionnel]);
        this.formDataToBeWatched.denomination_client = this.getField(cred_pub_tb_14070, cred_pub_tb_120001, 'denomination_client'); // ficheSignaletique?.denomination_client
        this.formDataToBeWatched.indice = this.getField(cred_pub_tb_14070, cred_pub_tb_120001, 'indice'); //ficheSignaletique?.indice

        if (this.getField(cred_pub_tb_14070, cred_pub_tb_120001, 'date_de_naissance')) {
          this.formDataToBeWatched.date_de_naissance = this.getField(cred_pub_tb_14070, cred_pub_tb_120001, 'date_de_naissance'); //ficheSignaletique?.date_de_naissance
        } else {
          this.formDataToBeWatched.date_de_naissance = this.getField(cred_pub_tb_14070, cred_pub_tb_120001, 'date_naissance'); //ficheSignaletique?.date_naissance
        }
        if (this.getField(cred_pub_tb_14070, cred_pub_tb_120001, 'anciennete_de_la_relation')) {
          this.formDataToBeWatched.anciennete_de_la_relation = this.getField(cred_pub_tb_14070, cred_pub_tb_120001, 'anciennete_de_la_relation'); // ficheSignaletique?.anciennete_de_la_relation
        } else {
          this.formDataToBeWatched.anciennete_de_la_relation = this.getField(cred_pub_tb_14070, cred_pub_tb_120001, 'anciennete_de_la_relation'); // ficheSignaletique?.date_entree_en_relation
        }
        this.formDataToBeWatched.target_market = this.getField(cred_pub_tb_14070, cred_pub_tb_120001, 'target_market'); //ficheSignaletique?.target_market
        this.formDataToBeWatched.agence = this.getField(cred_pub_tb_14070, cred_pub_tb_120001, 'agence'); //ficheSignaletique?.agence
        this.formDataToBeWatched.nationnalite = this.getField(cred_pub_tb_14070, cred_pub_tb_120001, 'nationnalite'); //ficheSignaletique?.nationnalite
        this.formDataToBeWatched.revenu_total_colonne_emprunteur = this.getField(cred_pub_tb_14070, cred_pub_tb_120001, 'revenu_total_colonne_emprunteur'); //ficheSignaletique?.revenu_total_colonne_emprunteur
        this.formDataToBeWatched.revenu_total_colonne_conjoint = this.getField(cred_pub_tb_14070, cred_pub_tb_120001, 'revenu_total_colonne_conjoint'); //ficheSignaletique?.revenu_total_colonne_conjoint
        this.formDataToBeWatched.revenu_total = this.getField(cred_pub_tb_14070, cred_pub_tb_120001, 'revenu_total'); //ficheSignaletique?.revenu_total
        this.formDataToBeWatched.revenu_total_colonne_mensualite = this.getField(cred_pub_tb_14070, cred_pub_tb_120001, 'revenu_total_colonne_mensualite'); //ficheSignaletique?.revenu_total_colonne_mensualite
        this.formDataToBeWatched.revenu_total_colonne_mensualite_conjoint = this.getField(cred_pub_tb_14070, cred_pub_tb_120001, 'revenu_total_colonne_mensualite_conjoint'); //ficheSignaletique?.revenu_total_colonne_mensualite_conjoint
        this.formDataToBeWatched.revenu_total_colonne_montant_pondere = this.getField(cred_pub_tb_14070, cred_pub_tb_120001, 'revenu_total_colonne_montant_pondere'); //ficheSignaletique?.revenu_total_colonne_montant_pondere
        this.formDataToBeWatched.revenu_total_colonne_montant_pondere_conjoint = this.getField(cred_pub_tb_14070, cred_pub_tb_120001, 'revenu_total_colonne_montant_pondere_conjoint'); //ficheSignaletique?.revenu_total_colonne_montant_pondere_conjoint
        this.formDataToBeWatched.revenu_total_colonne_taux_qc1 = this.getField(cred_pub_tb_14070, cred_pub_tb_120001, 'revenu_total_colonne_taux_qc1'); //ficheSignaletique?.revenu_total_colonne_taux_qc1
        this.formDataToBeWatched.revenu_total_colonne_taux_qc1_conjoint = this.getField(cred_pub_tb_14070, cred_pub_tb_120001, 'revenu_total_colonne_taux_qc1_conjoint'); //ficheSignaletique?.revenu_total_colonne_taux_qc1_conjoint
        this.formDataToBeWatched.revenu_total_colonne_montant_qc1 = this.getField(cred_pub_tb_14070, cred_pub_tb_120001, 'revenu_total_colonne_montant_qc1'); //ficheSignaletique?.revenu_total_colonne_montant_qc1
        this.formDataToBeWatched.revenu_total_colonne_montant_qc1_conjoint = this.getField(cred_pub_tb_14070, cred_pub_tb_120001, 'revenu_total_colonne_montant_qc1_conjoint'); //ficheSignaletique?.revenu_total_colonne_montant_qc1_conjoint
        this.formDataToBeWatched.revenu_total_colonne_taux_qc2 = this.getField(cred_pub_tb_14070, cred_pub_tb_120001, 'revenu_total_colonne_taux_qc2'); //ficheSignaletique?.revenu_total_colonne_taux_qc2
        this.formDataToBeWatched.revenu_total_colonne_montant_qc2 = this.getField(cred_pub_tb_14070, cred_pub_tb_120001, 'revenu_total_colonne_montant_qc2'); //ficheSignaletique?.revenu_total_colonne_montant_qc2
        this.formDataToBeWatched.salaire_brut = this.getField(cred_pub_tb_14070, cred_pub_tb_120001, 'salaire_brut'); //ficheSignaletique?.salaire_brut
        this.formDataToBeWatched.pourcentage_quotite_general = this.getField(cred_pub_tb_14070, cred_pub_tb_120001, 'revenu_total_colonne_taux_qc2'); //ficheSignaletique?.revenu_total_colonne_taux_qc2
        this.formDataToBeWatched.type_contrat = this.getField(cred_pub_tb_14070, cred_pub_tb_120002, 'type_contrat'); // profesionalInfo?.type_contrat

        if (this.formDataToBeWatched.type_contrat) {
          this.formDataToBeWatched.data_expiration_cdd_interim = this.getField(cred_pub_tb_14070, cred_pub_tb_120002, 'data_expiration_cdd_interim');
          this.formDataToBeWatched.date_debut_cdd_interim = this.getField(cred_pub_tb_14070, cred_pub_tb_120002, 'date_debut_cdd_interim');
        }
        this.formDataToBeWatched.annee_act_emploi = this.getField(cred_pub_tb_14070, cred_pub_tb_120002, 'annee_act_emploi'); // profesionalInfo?.annee_act_emploi

        this.formDataToBeWatched.type_client = this.getField(cred_pub_tb_14070, cred_pub_tb_120001, 'type_client'); //ficheSignaletique?.type_client
        // this.formDataToBeWatched.type_client = cred_pub_tb_120004?.type_de_clientele
        this.formDataToBeWatched.adresse = this.getField(cred_pub_tb_14070, cred_pub_tb_120001, 'adresse'); //ficheSignaletique?.adresse
        this.formDataToBeWatched.status_object = this.getField(cred_pub_tb_14070, cred_pub_tb_120001, 'status_object'); //ficheSignaletique?.status_object
        this.formDataToBeWatched.matrimoniale = this.getField(cred_pub_tb_14070, cred_pub_tb_120001, 'matrimoniale'); //ficheSignaletique?.matrimoniale
        this.formDataToBeWatched.regime_matrimonial = this.getField(cred_pub_tb_14070, cred_pub_tb_120001, 'regime_matrimonial'); //ficheSignaletique?.regime_matrimonial
        this.formDataToBeWatched.habitation = this.getField(cred_pub_tb_14070, cred_pub_tb_120001, 'habitation'); //ficheSignaletique?.habitation
        this.formDataToBeWatched.anciennete_adresse = this.getField(cred_pub_tb_14070, cred_pub_tb_120001, 'anciennete_adresse'); //ficheSignaletique?.anciennete_adresse
        this.formDataToBeWatched.nbre_enfant = this.getField(cred_pub_tb_14070, cred_pub_tb_120001, 'nbre_enfant'); //ficheSignaletique?.nbre_enfant
        this.formDataToBeWatched.conjoint = this.getField(cred_pub_tb_14070, cred_pub_tb_120001, 'conjoint'); //ficheSignaletique?.conjoint

        this.formDataToBeWatched.revenu_domicilie_afg = (ficheSignaletique === null || ficheSignaletique === void 0 ? void 0 : ficheSignaletique.revenu_domicilie_afg) || (ficheSignaletique === null || ficheSignaletique === void 0 ? void 0 : ficheSignaletique.revenu_domicilie);
        this.revenu_domicilie_afg = (_this$formDataToBeWat2 = this.formDataToBeWatched) === null || _this$formDataToBeWat2 === void 0 ? void 0 : _this$formDataToBeWat2.revenu_domicilie_afg;
        this.revenu_domicilie_afg = this.revenu_domicilie_afg.map(function (ed) {
          return _objectSpread(_objectSpread({}, ed), {}, {
            comeFrom: 'tb_120001'
          });
        });

        //  COMPTES AFG ET CONFRERES
        if ((cred_pub_tb_120003 === null || cred_pub_tb_120003 === void 0 ? void 0 : cred_pub_tb_120003.comptes.length) > 0) {
          this.comptes = cred_pub_tb_120003 === null || cred_pub_tb_120003 === void 0 ? void 0 : cred_pub_tb_120003.comptes;
          this.comptes = this.comptes.map(function (ed) {
            return _objectSpread(_objectSpread({}, ed), {}, {
              comeFrom: 'tb_120003'
            });
          });
          this.handleInput();
        }
        if ((cred_pub_tb_120003 === null || cred_pub_tb_120003 === void 0 ? void 0 : cred_pub_tb_120003.comptes_chez_confrere.length) > 0) {
          this.comptes_chez_confrere = cred_pub_tb_120003 === null || cred_pub_tb_120003 === void 0 ? void 0 : cred_pub_tb_120003.comptes_chez_confrere;
          this.comptes_chez_confrere = this.comptes_chez_confrere.map(function (ed) {
            return _objectSpread(_objectSpread({}, ed), {}, {
              comeFrom: 'tb_120003'
            });
          });
          this.handleInput();
        }
        this.handleInput();
        this.handleInput2();
      }
      if (lentb.length > 0) {
        if (this.meta_data["dossier_credit"][createdKey] != undefined) {
          var _this$meta_data$dossi12, _this$meta_data$dossi13;
          this.formDataToBeWatched = this.meta_data["dossier_credit"][createdKey];
          if (this.meta_data["dossier_credit"][createdKey]["revenu_domicilie_afg"] != "") {
            this.revenu_domicilie_afg = this.meta_data["dossier_credit"][createdKey]["revenu_domicilie_afg"];
          }
          if (this.meta_data["dossier_credit"][createdKey]["comptes"] != "") {
            this.comptes = this.meta_data["dossier_credit"][createdKey]["comptes"];
          }
          if (this.meta_data["dossier_credit"][createdKey]["comptes_conjoint"] != "") {
            this.comptes_conjoint = this.meta_data["dossier_credit"][createdKey]["comptes_conjoint"];
          }
          if (((_this$meta_data$dossi12 = this.meta_data["dossier_credit"][createdKey]["fonctionnement_comptes"]) === null || _this$meta_data$dossi12 === void 0 ? void 0 : _this$meta_data$dossi12.length) > 0) {
            this.fonctionnement_comptes = this.meta_data["dossier_credit"][createdKey]["fonctionnement_comptes"];
          }
          if (((_this$meta_data$dossi13 = this.meta_data["dossier_credit"][createdKey]["comptes_chez_confrere"]) === null || _this$meta_data$dossi13 === void 0 ? void 0 : _this$meta_data$dossi13.length) > 0) {
            this.comptes_chez_confrere = this.meta_data["dossier_credit"][createdKey]["comptes_chez_confrere"];
          }

          // Regrouper les deux listes dans list_comptes
          this.list_comptes = [].concat(_toConsumableArray(this.comptes), _toConsumableArray(this.comptes_chez_confrere));
        }
      }
    },
    setTbVal: function setTbVal(val) {
      this.cred_pub_key = val;
    },
    loadWithError: function loadWithError(err) {
      // // window.location.href = "/login";
    },
    send2Backend: function send2Backend(res, newVal, oldVal) {
      this.authcheck = true;
      this.authcheckUsr = res.data;
      this.authcheckStatus = res.status;
      if (this.authcheckStatus === 401) {
        // // window.location.href = "/login";
      }
      if (this.authcheck === true) {
        this.$emit("autosaving");
        this.$axios.post(this.ebapisHost + "creditbuilder/api/v1/autosaving/", {
          user: this.authcheckUsr,
          meta_parseable: this.meta_parseable,
          filledData: this.formDataToBeWatched
        }).then(function (response) {
          this.$emit("autosaving");
          // this.$Progress.finish();
          // console.log(response);
          var tbFetcheData = response.data;
          // this.launchScoringTable("organisation");
          // this.launchScoringTable();
          if (tbFetcheData["is_success"] === true) {
            this.$emit("load-shell");
          }
        }.bind(this))["catch"](function (error) {
          this.$Progress.finish();
          console.log(error);
        }.bind(this));
      } else {
        alert("Unauthenticated");
      }
    },
    retract: function retract() {
      this.seen = !this.seen;
      var a = {
        tb_name: this.tb_name + this.meta_data["cred_pub_key"],
        status: this.seen
      };
      EventBus.$emit("savedclosed-table", a);
    },
    retract1: function retract1() {
      this.seen1 = !this.seen1;
    },
    retract2: function retract2() {
      this.seen2 = !this.seen2;
    },
    deleteTB: function deleteTB() {
      if (confirm("Êtes-vous sûr de vouloir supprimer ce tableau ?")) {
        this.$emit("delete-tb", {
          tb_name: this.tb_name
        });
      }
    },
    loadDate: function loadDate() {
      var options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      };
      var today = new Date();
      this.dateOfToday = today.toLocaleDateString("fr-FR");
    },
    instruction4: function instruction4(id) {
      var id0 = "#" + id;
      window.$(id0).modal("show");
    },
    precomputeScore: function precomputeScore() {
      var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      this.meta_parseable["type_table"] = a;
      var scoringVar = [];
      if (a == "organisation") {
        scoringVar = ["vivre", "competences_manageriales", "formalisation", "interaction"];
      } else {
        scoringVar = ["technologie", "risque_juridique", "risque_politique"];
      }
      for (var i = 0; i < scoringVar.length; i++) {
        if (this.formDataToBeWatched[scoringVar[i]] == "") {
          return false;
        }
      }
      return true;
    },
    updateValueSelected: function updateValueSelected() {
      var _this10 = this;
      if (this.formDataToBeWatched.secteur_activite != "") {
        var found = this.secteurs_activites.filter(function (item) {
          return item.intitule == _this10.formDataToBeWatched.secteur_activite;
        });
        if (found.length > 0) {
          this.selected_secteur_activite = found[0];
        }
      }
      if (this.formDataToBeWatched.groupe_activite != "") {
        var _found = this.groupes_activites.filter(function (item) {
          return item.intitule == _this10.formDataToBeWatched.groupe_activite;
        });
        if (_found.length > 0) {
          this.selected_groupe_secteur = _found[0];
        }
      }
    },
    updateClasseRisque: function updateClasseRisque() {
      var _this$formDataToBeWat3, _this$formDataToBeWat4, _this$formDataToBeWat5, _this$formDataToBeWat6, _this$formDataToBeWat7, _this$formDataToBeWat8, _this$formDataToBeWat9, _this$formDataToBeWat0, _this$formDataToBeWat1;
      this.formDataToBeWatched.has_default_note = this.shouldHaveDefaultNote;
      var graduations = {
        excellent: ["A3"],
        very_good: ["A2", "A2+", "A2-"],
        good: ["A", "A1+", "A1-"],
        acceptable: ["B", "B+"],
        sensible: ["B-"],
        weak: ["C", 'C+', "C-"],
        not_acceptable: ["D", 'D+', "D-"],
        not_considered: ["E"]
      };
      if (graduations !== null && graduations !== void 0 && graduations.excellent.includes((_this$formDataToBeWat3 = this.formDataToBeWatched) === null || _this$formDataToBeWat3 === void 0 ? void 0 : _this$formDataToBeWat3.note_edane)) {
        this.formDataToBeWatched.classe_risque = 'EXCELLENT';
        this.classe_riques_bg_color = {
          "background-color": '#974EC3',
          'color': "#ffffff"
        };
      } else if (graduations !== null && graduations !== void 0 && graduations.very_good.includes((_this$formDataToBeWat4 = this.formDataToBeWatched) === null || _this$formDataToBeWat4 === void 0 ? void 0 : _this$formDataToBeWat4.note_edane)) {
        // alert(1)
        this.formDataToBeWatched.classe_risque = 'TRES BON';
        this.classe_riques_bg_color = {
          "background-color": '#78C1F3',
          'color': "#ffffff"
        };
      } else if (graduations !== null && graduations !== void 0 && graduations.good.includes((_this$formDataToBeWat5 = this.formDataToBeWatched) === null || _this$formDataToBeWat5 === void 0 ? void 0 : _this$formDataToBeWat5.note_edane)) {
        this.formDataToBeWatched.classe_risque = 'BON';
        this.classe_riques_bg_color = {
          "background-color": '#1D5D9B',
          'color': "#ffffff"
        };
      } else if (graduations !== null && graduations !== void 0 && graduations.acceptable.includes((_this$formDataToBeWat6 = this.formDataToBeWatched) === null || _this$formDataToBeWat6 === void 0 ? void 0 : _this$formDataToBeWat6.note_edane)) {
        this.formDataToBeWatched.classe_risque = 'ACCEPTABLE';
        this.classe_riques_bg_color = {
          "background-color": '#8EAC50',
          'color': "#ffffff"
        };
      } else if (graduations !== null && graduations !== void 0 && graduations.sensible.includes((_this$formDataToBeWat7 = this.formDataToBeWatched) === null || _this$formDataToBeWat7 === void 0 ? void 0 : _this$formDataToBeWat7.note_edane)) {
        this.formDataToBeWatched.classe_risque = 'SENSIBLE';
        this.classe_riques_bg_color = {
          "background-color": '#FFC95F',
          'color': "#ffffff"
        };
      } else if (graduations !== null && graduations !== void 0 && graduations.weak.includes((_this$formDataToBeWat8 = this.formDataToBeWatched) === null || _this$formDataToBeWat8 === void 0 ? void 0 : _this$formDataToBeWat8.note_edane)) {
        this.formDataToBeWatched.classe_risque = 'FRAGILE';
        this.classe_riques_bg_color = {
          "background-color": '#F8DE22',
          'color': "#ffffff"
        };
      } else if (graduations !== null && graduations !== void 0 && graduations.not_acceptable.includes((_this$formDataToBeWat9 = this.formDataToBeWatched) === null || _this$formDataToBeWat9 === void 0 ? void 0 : _this$formDataToBeWat9.note_edane)) {} else if (graduations !== null && graduations !== void 0 && graduations.not_considered.includes((_this$formDataToBeWat0 = this.formDataToBeWatched) === null || _this$formDataToBeWat0 === void 0 ? void 0 : _this$formDataToBeWat0.note_edane)) {
        this.formDataToBeWatched.classe_risque = 'SANS INTERET';
        this.classe_riques_bg_color = {
          "background-color": '#445069',
          'color': "#ffffff"
        };
      } else if (!((_this$formDataToBeWat1 = this.formDataToBeWatched) !== null && _this$formDataToBeWat1 !== void 0 && _this$formDataToBeWat1.note_edane)) {
        this.formDataToBeWatched.classe_risque = '';
      }
    },
    onClasseRisqueChange: function onClasseRisqueChange() {
      var _this11 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var _this11$formDataToBeW;
        var response, score_info;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _this11.formDataToBeWatched.note_edane = "";
              _this11.formDataToBeWatched.classe_risque = "";
              _this11.formDataToBeWatched.capital = "";
              _this11.formDataToBeWatched.coming_from_sni = false;
              _this11.$set(_this11.formDataToBeWatched, 'status_note_sni', null);
              _this11.$set(_this11.formDataToBeWatched, 'sni_details', null);
              if (!(((_this11$formDataToBeW = _this11.formDataToBeWatched) === null || _this11$formDataToBeW === void 0 ? void 0 : _this11$formDataToBeW.has_etat_financier) == "Non")) {
                _context4.next = 8;
                break;
              }
              return _context4.abrupt("return");
            case 8:
              _this11.eventToAnaFin();
              _context4.next = 11;
              return _this11.getClasseRisque(_this11.formDataToBeWatched.compte_contribuable);
            case 11:
              response = _context4.sent;
              _this11.fetch_score = false;
              if (response["is_success"] == true) {
                score_info = response["score"][0]; // console.log(response["score"]["NOTE"])9606123E
                _this11.formDataToBeWatched.note_edane = score_info["CRAN"];
                _this11.formDataToBeWatched.classe_risque = score_info["QUALIFICATION"];
                _this11.formDataToBeWatched.capital = score_info["CA"];
                _this11.formDataToBeWatched.coming_from_sni = true;
                _this11.formDataToBeWatched.has_etat_financier = "Oui";
                _this11.$set(_this11.formDataToBeWatched, 'sni_details', score_info);
                _this11.$set(_this11.formDataToBeWatched, 'status_note_sni', score_info === null || score_info === void 0 ? void 0 : score_info['VALIDATION']);
                _this11.updateClasseRisque();
                EventBus.$emit('update-sni-callback');
              }
            case 14:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    },
    getClasseRisque: function getClasseRisque(compte_comtribuable) {
      var _this12 = this;
      // console.log("compte_contribuable==> ",this.formDataToBeWatched.compte_contribuable)
      return new Promise(function (resolve, reject) {
        if (!['', null, undefined].includes(compte_comtribuable)) {
          if (compte_comtribuable.length > 7) {
            _this12.fetch_score = true;
            _this12.$axios.post(_this12.ebapisHost + "creditbuilder/api/v1/load-score/", {
              cc: compte_comtribuable
            }).then(function (res) {
              _this12.fetch_score = false;
              resolve(res.data);
            })["catch"](function (err) {
              console.log(err);
            });
          }
        }
      });
    },
    addMore1: function addMore1() {
      this.entite_connectes.push({
        matricule_client_entite_connecte: "",
        raison_social_entite_connecte: "",
        secteur_activite_entite_connecte: ""
      });
    },
    // remove(index) {
    //     this.source_revenus.splice(index, 1);
    //     this.formDataToBeWatched.total_interimaires = this.totalInterimaires;
    //     this.formDataToBeWatched.total_permanent = this.totalPermanent;
    // },
    remove: function remove(objectName, index) {
      this[objectName].splice(index, 1);
      this.handleInput();
    },
    remove1: function remove1(index) {
      this.entite_connectes.splice(index, 1);
    },
    loadTbAttrs: function loadTbAttrs() {
      var l = [];
      var topdivel = this.$refs.topdiv;
      var k = document.querySelectorAll(".subdiv" + this.tb_name);
      // console.log(k)
      k.forEach(function (e) {
        l.push(e.innerText);
        // console.log(l)
      });
      var p = {
        name_of_title: topdivel.innerText,
        list_of_content: l,
        id: "f2-head"
      };
      // console.log(p)
      this.$emit("load-buffer", p);
    },
    onChange: function onChange(e) {
      if (e.target.value == "Non") {
        this.disp = true;
      } else {
        this.disp = false;
      }
    }
  }, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_methods, "onSlctMatCli", function onSlctMatCli(obj, key) {
    this.entite_connectes[key]["raison_social_entite_connecte"] = obj.nomcli;
    this.entite_connectes[key]["matricule_client_entite_connecte"] = obj.matclihan;
    this.handleInput();
  }), "instruction3", function instruction3(id) {
    var id0 = "#" + id;
    window.$(id0).modal("show");
  }), "dateInputHdl", function dateInputHdl() {
    this.chiffres_cles[0].date_creation_rccm_n_2 = this.chiffres_cles[0].date_creation_rccm_n_1;
    this.formDataToBeWatched["chiffres_cles"] = this.chiffres_cles;
  }), "changeEligibleValueSR", function changeEligibleValueSR(event, index) {
    var _this13 = this;
    setTimeout(function () {
      if (_this13.revenu_domicilie_afg[index]['source_remboursement'] === false) {
        _this13.revenu_domicilie_afg[index]['taux'] = 0;
        _this13.revenu_domicilie_afg[index]['montant_pondere'] = 0;
        _this13.revenu_domicilie_afg[index]['montant_pondere_conjoint'] = 0;
        _this13.revenu_domicilie_afg[index]['taux_qc1'] = 0;
        _this13.revenu_domicilie_afg[index]['taux_qtc_conjoint'] = 0;
        _this13.revenu_domicilie_afg[index]['montant_qc1'] = 0;
        _this13.revenu_domicilie_afg[index]['montant_qc1_conjoint'] = 0;
        _this13.revenu_domicilie_afg[index]['taux_qc2'] = 0;
        _this13.revenu_domicilie_afg[index]['montant_qc2'] = 0;
        _this13.revenu_domicilie_afg[index]['eligible'] = false;
        _this13.revenu_domicilie_afg[index]['periodicite'] = "";
        _this13.revenu_domicilie_afg[index]['mensualite'] = 0;
        _this13.revenu_domicilie_afg[index]['commentaire'] = "";
        _this13.revenu_domicilie_afg[index]['taux_qc2'] = "";
      } else {
        if (_this13.revenu_domicilie_afg[index]['libelle'] === 'Salaire net') {
          _this13.revenu_domicilie_afg[index]['taux'] = 100;
        }
        if (['Revenu locatif', 'Prime'].includes(_this13.revenu_domicilie_afg[index]['libelle'])) {
          _this13.revenu_domicilie_afg[index]['taux'] = 75;
          _this13.revenu_domicilie_afg[index]['taux_qc1'] = 75;
          _this13.revenu_domicilie_afg[index]['taux_qtc_conjoint'] = 75;
        }
      }
      _this13.handleInput();
    }, 500);
  }), "isEpargneAccount", function isEpargneAccount(libelle) {
    if (!libelle) return false;
    return libelle.toLowerCase().includes("comptes epargne") || libelle.toLowerCase().includes("compte epargne") || libelle.toLowerCase().includes("compte d'épargne") || libelle.toLowerCase().includes("compte d'epargne");
  }), "tousLesComptes", function tousLesComptes() {
    var _this$core_banking_in,
      _this14 = this,
      _accountsData$comptes,
      _accountsData$autres_,
      _accountsData$credits,
      _accountsData$caution,
      _accountsData$credits2,
      _accountsData$autres;
    var accountsData = ((_this$core_banking_in = this.core_banking_info) === null || _this$core_banking_in === void 0 ? void 0 : _this$core_banking_in.accounts_data) || {};
    if (_typeof(accountsData) !== 'object' || accountsData === null) {
      console.error("accounts_data n'est pas un objet valide :", accountsData);
      return [];
    }
    var defaultAttributes = {
      banque: "AFG BANK",
      libelle: "",
      autre_libelle: "",
      numero_compte: "",
      montant: "",
      date_extration_releve: "",
      date_ouverture_compte: "",
      montant_epargne: "",
      duree: ""
    };
    var mapItem = function mapItem(item) {
      var _this14$meta_data;
      return {
        numero_compte: item.code || "",
        date_extration_releve: _this14.formatDate((_this14$meta_data = _this14.meta_data) === null || _this14$meta_data === void 0 || (_this14$meta_data = _this14$meta_data.dossier_credit) === null || _this14$meta_data === void 0 ? void 0 : _this14$meta_data.created_at) || "",
        libelle: item.type || ""
      };
    };
    var tousLesComptes = [].concat(_toConsumableArray(((_accountsData$comptes = accountsData.comptes_courants) === null || _accountsData$comptes === void 0 ? void 0 : _accountsData$comptes.map(function (item) {
      return _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, defaultAttributes), item), mapItem(item)), {}, {
        type: "Compte courant"
      });
    })) || []), _toConsumableArray(((_accountsData$autres_ = accountsData.autres_comptes) === null || _accountsData$autres_ === void 0 ? void 0 : _accountsData$autres_.map(function (item) {
      return _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, defaultAttributes), item), mapItem(item)), {}, {
        type: "Compte d'engagement"
      });
    })) || []), _toConsumableArray(((_accountsData$credits = accountsData.credits_amortissables) === null || _accountsData$credits === void 0 ? void 0 : _accountsData$credits.map(function (item) {
      return _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, defaultAttributes), item), mapItem(item)), {}, {
        type: "Compte d'engagement"
      });
    })) || []), _toConsumableArray(((_accountsData$caution = accountsData.cautions) === null || _accountsData$caution === void 0 ? void 0 : _accountsData$caution.map(function (item) {
      return _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, defaultAttributes), item), mapItem(item)), {}, {
        type: "Compte d'engagement"
      });
    })) || []), _toConsumableArray(((_accountsData$credits2 = accountsData.credits_bail) === null || _accountsData$credits2 === void 0 ? void 0 : _accountsData$credits2.map(function (item) {
      return _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, defaultAttributes), item), mapItem(item)), {}, {
        type: "Compte d'engagement"
      });
    })) || []), _toConsumableArray(((_accountsData$autres = accountsData.autres) === null || _accountsData$autres === void 0 ? void 0 : _accountsData$autres.map(function (item) {
      return _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, defaultAttributes), item), mapItem(item)), {}, {
        type: "Autre"
      });
    })) || []));
    return tousLesComptes;
  }), "contientEpargne", function contientEpargne(phrase) {
    return phrase.toLowerCase().includes('epargne');
  }), "selectedOptionFonction2", function selectedOptionFonction2(value, obj) {
    this.formDataToBeWatched.conjoint.fonction = obj === null || obj === void 0 ? void 0 : obj.libelle;
    if (this.conjoint_fonction == 'Autre') {
      this.formDataToBeWatched.conjoint.fonction = "";
    }
    this.handleInput();
  }), "addMoreCompte", function addMoreCompte() {
    this.comptes.push({
      banque: "AFG BANK",
      libelle: "",
      autre_libelle: "",
      numero_compte: "",
      montant: "",
      date_extration_releve: "",
      date_ouverture_compte: "",
      montant_epargne: "",
      duree: "",
      account_open_date: "",
      is_locale: true
    });
    this.handleInput();
    this.$forceUpdate();
  }), "addMoreCompteConfrere", function addMoreCompteConfrere() {
    this.comptes_chez_confrere.push({
      banque: "",
      libelle: "",
      autre_libelle: "",
      anciennete: "",
      numero_compte: "",
      montant: "",
      date_extration_releve: "",
      date_ouverture_compte: "",
      montant_epargne: "",
      duree: ""
    });
    this.handleInput();
    this.$forceUpdate();
  }), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_methods, "addMoreCompteConjoint", function addMoreCompteConjoint() {
    this.comptes_conjoint.push({
      banque: "",
      libelle: "",
      autre_libelle: "",
      anciennete: "",
      numero_compte: "",
      montant: "",
      date_extration_releve: "",
      date_ouverture_compte: "",
      montant_epargne: "",
      duree: ""
    });
    this.handleInput();
    this.$forceUpdate();
  }), "addMoreCompteAdjoint", function addMoreCompteAdjoint() {
    this.comptes_conjoint.push({
      banque: "",
      libelle: "",
      autre_libelle: "",
      anciennete: "",
      numero_compte: "",
      montant: "",
      date_extration_releve: "",
      date_ouverture_compte: "",
      montant_epargne: "",
      duree: ""
    });
    this.handleInput();
  }), "addMoreFctCompte", function addMoreFctCompte() {
    var id = this.fonctionnement_comptes.length + 1;
    this.fonctionnement_comptes.push({
      "id": id,
      "numero_compte": "",
      "fonctionnement": "",
      "commentaire": ""
    });
    this.handleInput2("fonctionnement_comptes");
  }), "removeLine", function removeLine(index, key) {
    this[key].splice(index, 1);
    this.handleInput2("fonctionnement_comptes");
  }), "matchingCoreBanking", function matchingCoreBanking() {
    this.comptes = this.tousLesComptes();
    if (['', null, undefined].includes(this.comptes) || Array.isArray(this.comptes) && this.comptes.length == 0) {
      this.addMoreCompte();
    }
    this.handleInput();
    // console.log("COMPTES",this.comptes)
  }), "emitData2", function emitData2() {
    EventBus.$emit("dossier-updated-dcpp-3", {
      data_tb3: this.formDataToBeWatched
    });
  })),
  watch: {
    formDataToBeWatched: {
      handler: function handler(newVal, oldVal) {
        this.autosaving(newVal, oldVal);
        this.emitUpdated();
        // ? Cache management
        // this.saveDataInCache(newVal, oldVal);
      },
      deep: true,
      immediate: true
    },
    'formDataToBeWatched.bilan_certifie': function formDataToBeWatchedBilan_certifie() {
      var _this$formDataToBeWat10;
      if (this.formDataToBeWatched.bilan_certifie == 'Non' && ((_this$formDataToBeWat10 = this.formDataToBeWatched.nom_cabinet_comptable) === null || _this$formDataToBeWat10 === void 0 ? void 0 : _this$formDataToBeWat10.length) > 0) {
        // console.log("nom_cabinet_comptable",this.formDataToBeWatched.nom_cabinet_comptable)
        this.formDataToBeWatched.nom_cabinet_comptable = "";
      }
    },
    shouldHaveDefaultNote: function shouldHaveDefaultNote(val) {
      // if (vars == 'has_etat_financier') {
      this.formDataToBeWatched.has_default_note = val;
      if (val) {
        this.formDataToBeWatched.note_edane = "B-";
        this.formDataToBeWatched.classe_risque = "";
        this.formDataToBeWatched.capital = "";
        this.formDataToBeWatched.coming_from_sni = false;
        this.$set(this.formDataToBeWatched, 'status_note_sni', null);
        this.$set(this.formDataToBeWatched, 'sni_details', null);
      } else {
        var _this$formDataToBeWat11;
        if (['', null, undefined, false].includes((_this$formDataToBeWat11 = this.formDataToBeWatched) === null || _this$formDataToBeWat11 === void 0 ? void 0 : _this$formDataToBeWat11.coming_from_sni)) {
          this.formDataToBeWatched.note_edane = "";
          this.formDataToBeWatched.classe_risque = "";
          this.formDataToBeWatched.capital = "";
          this.formDataToBeWatched.coming_from_sni = false;
          this.$set(this.formDataToBeWatched, 'status_note_sni', null);
          this.$set(this.formDataToBeWatched, 'sni_details', null);
        }
        if (!['', null, undefined].includes(this.formDataToBeWatched.compte_contribuable) && !val) {
          this.onClasseRisqueChange();
        }
      }
      this.updateClasseRisque();
      // }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/MothAndYearInput.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/MothAndYearInput.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "MothAndYearInput",
  props: {
    id: String,
    value: {
      type: String,
      "default": ""
    },
    readonly: Boolean,
    viewonly: Boolean,
    defaultTyping: {
      type: Boolean,
      "default": true
    },
    background: {
      type: String,
      "default": ""
    },
    color: {
      type: String,
      "default": ""
    },
    classname: {
      type: String,
      "default": ""
    }
  },
  data: function data() {
    return {
      month: "",
      year: "",
      date: "",
      readonly_: false,
      months: [{
        intitule: "Janvier",
        value: "01"
      }, {
        intitule: "Février",
        value: "02"
      }, {
        intitule: "Mars",
        value: "03"
      }, {
        intitule: "Avril",
        value: "04"
      }, {
        intitule: "Mai",
        value: "05"
      }, {
        intitule: "Juin",
        value: "06"
      }, {
        intitule: "Juillet",
        value: "07"
      }, {
        intitule: "Août",
        value: "08"
      }, {
        intitule: "Septembre",
        value: "09"
      }, {
        intitule: "Octobre",
        value: "10"
      }, {
        intitule: "Novembre",
        value: "11"
      }, {
        intitule: "Décembre",
        value: "12"
      }]
    };
  },
  mounted: function mounted() {
    this.readonly_ = this.viewonly || this.readonly;
    if (this.value) {
      this.defaultValue(this.value);
    }
  },
  methods: {
    handleInput: function handleInput() {
      if (this.month && this.year && /^\d{4}$/.test(this.year)) {
        this.date = "".concat(this.year, "-").concat(this.month);
      } else {
        this.date = "";
      }
      this.emitValue();
    },
    emitValue: function emitValue() {
      this.$emit("input", this.date);
      this.$emit("change", this.date);
    },
    defaultValue: function defaultValue(val) {
      if (!val || typeof val !== "string") {
        this.month = "";
        this.year = "";
        this.date = "";
        return;
      }
      var split = val.split("-");
      if (split.length === 2 && /^\d{4}$/.test(split[0]) && /^\d{2}$/.test(split[1])) {
        // Format attendu : "2040-05"
        this.year = split[0];
        this.month = split[1];
        this.date = val;
      } else {
        this.month = "";
        this.year = "";
        this.date = "";
      }
    }
  },
  watch: {
    value: function value(newVal) {
      if (newVal !== this.date) {
        this.defaultValue(newVal);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/note_technique/NT-HD0.vue?vue&type=template&id=6ac704b1&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/note_technique/NT-HD0.vue?vue&type=template&id=6ac704b1&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$formDataToBeWatch, _vm$formDataToBeWatch2, _vm$meta_data, _vm$formDataToBeWatch3;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    on: {
      contextmenu: function contextmenu($event) {
        return _vm.$refs.menu.open($event, _vm.tb_name);
      }
    }
  }, [_vm.isLoading ? _c("loader") : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "row bg-light",
    staticStyle: {
      width: "100%",
      height: "100%"
    }
  }, [_c("ContextMenu", {
    ref: "menu",
    attrs: {
      cred_pub_key: _vm.meta_parseable.cred_pub_key,
      id: _vm.tb_name,
      contextList: _vm.contextList
    }
  }), _vm._v(" "), _vm.seen === true ? _c("div", {
    staticClass: "card card-width-height"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc pb-0 pt-2"
  }, [_c("h3", {
    ref: "topdiv",
    staticClass: "head",
    attrs: {
      id: "f2-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Fiche Signaletique\n                        ")]), _vm._v(" "), _c("div", {
    staticClass: "col-auto"
  }, [((_vm$formDataToBeWatch = _vm.formDataToBeWatched.notes) === null || _vm$formDataToBeWatch === void 0 ? void 0 : _vm$formDataToBeWatch.length) > 0 ? _c("div", {
    staticStyle: {
      display: "inline-block",
      position: "relative"
    }
  }, [_c("span", {
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.openNotesModal(true);
      }
    }
  }, [_c("i", {
    staticClass: "icofont icofont-comment text-white px-2",
    staticStyle: {
      "font-size": "12px"
    },
    attrs: {
      role: "button"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "badge-sm"
  }, [_c("span", [_vm._v("\n                                            " + _vm._s((_vm$formDataToBeWatch2 = _vm.formDataToBeWatched.notes) === null || _vm$formDataToBeWatch2 === void 0 ? void 0 : _vm$formDataToBeWatch2.length) + "\n                                        ")])])])]) : _vm._e(), _vm._v(" "), _c("airplay-icon", {
    staticClass: "custom-class mt-1",
    staticStyle: {
      cursor: "pointer",
      margin: "0 5px"
    },
    attrs: {
      size: "0.7x",
      title: "exemple"
    },
    on: {
      click: function click($event) {
        return _vm.$modal.show("PREAMBULE");
      }
    }
  }), _vm._v(" "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    },
    on: {
      click: function click($event) {
        return _vm.retract();
      }
    }
  })], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "row p-0"
  }, [_c("div", {
    staticClass: "col-12 p-0 position-relative"
  }, [_vm.seen1 ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen1 = !_vm.seen1;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "Caractéristiques-du-crédit"
    }
  }, [_vm._v("\n                                Présentation client\n                                "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "row my-2"
  }, [_c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "denomination_client"
    }
  }, [_vm._v("\n                                        Nom du  client\n                                    ")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.denomination_client,
      expression: "formDataToBeWatched.denomination_client"
    }],
    staticClass: "form-control",
    attrs: {
      readonly: "",
      disabled: "",
      type: "text",
      id: "denomination_client"
    },
    domProps: {
      value: _vm.formDataToBeWatched.denomination_client
    },
    on: {
      change: _vm.handleInput,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "denomination_client", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(0), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.indice,
      expression: "formDataToBeWatched.indice"
    }],
    staticClass: "form-control",
    attrs: {
      disabled: "",
      readonly: "",
      type: "number"
    },
    domProps: {
      value: _vm.formDataToBeWatched.indice
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "indice", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(1), _vm._v(" "), _c("date-input", {
    attrs: {
      id: "date_de_naissance",
      background: "background: #00ffff21",
      value: _vm.formDataToBeWatched.date_de_naissance
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(2), _vm._v(" "), _c("date-input", {
    attrs: {
      id: "anciennete_de_la_relation",
      background: "background: #00ffff21",
      value: _vm.formDataToBeWatched.anciennete_de_la_relation
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(3), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.target_market,
      expression: "formDataToBeWatched.target_market"
    }],
    staticClass: "form-select single-select",
    attrs: {
      id: "target_market"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formDataToBeWatched, "target_market", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, function ($event) {
        return _vm.handleMarketTarget($event);
      }]
    }
  }, [_c("option", {
    attrs: {
      selected: "",
      disabled: "",
      hidden: ""
    }
  }, [_vm._v("---")]), _vm._v(" "), _c("option", {
    attrs: {
      value: ""
    }
  }), _vm._v(" "), _c("option", {
    attrs: {
      value: "OUI"
    }
  }, [_vm._v("Oui")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "NON"
    }
  }, [_vm._v("Non")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(4), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.employeur,
      expression: "formDataToBeWatched.employeur"
    }],
    staticClass: "form-control",
    staticStyle: {
      "background-color": "#00ffff21"
    },
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.formDataToBeWatched.employeur
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "employeur", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(5), _vm._v(" "), _c("date-input", {
    attrs: {
      id: "anciennete_pro",
      background: "background: #00ffff21",
      value: _vm.formDataToBeWatched.anciennete_pro
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(6), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.agence,
      expression: "formDataToBeWatched.agence"
    }],
    staticClass: "form-control",
    attrs: {
      disabled: "",
      readonly: "",
      type: "text"
    },
    domProps: {
      value: _vm.formDataToBeWatched.agence
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "agence", $event.target.value);
      }
    }
  })]), _vm._v(" "), ["CRESCO", "Découvert Privilège"].includes((_vm$meta_data = _vm.meta_data) === null || _vm$meta_data === void 0 || (_vm$meta_data = _vm$meta_data.dossier_credit) === null || _vm$meta_data === void 0 ? void 0 : _vm$meta_data.applied_templ_name) ? _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(7), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.nationnalite,
      expression: "formDataToBeWatched.nationnalite"
    }],
    staticClass: "form-control",
    attrs: {
      disabled: "",
      readonly: "",
      type: "text"
    },
    domProps: {
      value: _vm.formDataToBeWatched.nationnalite
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "nationnalite", $event.target.value);
      }
    }
  })]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(8), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.type_client,
      expression: "formDataToBeWatched.type_client"
    }],
    staticClass: "form-select single-select",
    staticStyle: {
      "background-color": "#00ffff21"
    },
    attrs: {
      id: "type_client"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formDataToBeWatched, "type_client", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, function ($event) {
        return _vm.handleInput(true);
      }]
    }
  }, [_c("option", {
    attrs: {
      selected: "",
      disabled: "",
      hidden: ""
    }
  }, [_vm._v("---")]), _vm._v(" "), _c("option", {
    attrs: {
      value: ""
    }
  }), _vm._v(" "), _c("option", {
    attrs: {
      value: "Salarié Fonctionnaire"
    }
  }, [_vm._v("Salarié Fonctionnaire")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Salarié Non Fonctionnaire"
    }
  }, [_vm._v("Salarié Non Fonctionnaire")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(9), _vm._v(" "), _c("div", {
    staticClass: "d-flex position-relative align-items-center"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.type_contrat,
      expression: "formDataToBeWatched.type_contrat"
    }],
    staticClass: "form-control",
    staticStyle: {
      "background-color": "#00ffff21"
    },
    attrs: {
      id: "type_contrat"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formDataToBeWatched, "type_contrat", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.handleInput]
    }
  }, [_c("option", {
    attrs: {
      value: "",
      disabled: "",
      selected: ""
    }
  }, [_vm._v("\n                                                --- Sélectionner le type de contrat ---\n                                            ")]), _vm._v(" "), _c("option", {
    attrs: {
      value: ""
    }
  }), _vm._v(" "), _vm._l(_vm.data_type_de_contrat, function (el, ind) {
    return _c("option", {
      key: ind,
      domProps: {
        value: el.libelle
      }
    }, [_vm._v(_vm._s(el.libelle))]);
  })], 2), _vm._v(" "), _vm.data_type_de_contrat == "" || _vm.data_type_de_contrat.length == 0 ? _c("span", {
    staticClass: "spinner-border spinner-border spinner-custom-input"
  }) : _vm._e()])]), _vm._v(" "), ["CDD", "INTERIM"].indexOf(this.formDataToBeWatched.type_contrat) != -1 ? _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(10), _vm._v(" "), _c("date-input", {
    attrs: {
      value: _vm.formDataToBeWatched.date_debut_cdd_interim,
      id: "date_debut_cdd_interim",
      background: "background: #00ffff21"
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", [_vm._v(_vm._s(["CDD", "INTERIM"].indexOf(this.formDataToBeWatched.type_contrat) != -1 ? "Date d'expiration du CDD/INTERIM" : "Date début emploi actuel") + "   "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]), _vm._v(" "), this.formDataToBeWatched.type_contrat == "CDI" ? _c("MothAndYearInput", {
    attrs: {
      background: "background: #00ffff21",
      id: "annee_act_emploi",
      readonly: false,
      viewonly: false
    },
    on: {
      change: _vm.handleInput
    },
    model: {
      value: _vm.formDataToBeWatched.annee_act_emploi,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "annee_act_emploi", $$v);
      },
      expression: "formDataToBeWatched.annee_act_emploi"
    }
  }) : _c("div", [_c("date-input", {
    attrs: {
      value: _vm.formDataToBeWatched.data_expiration_cdd_interim,
      id: "data_expiration_cdd_interim",
      background: "background: #00ffff21"
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1)], 1)])])]) : _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen1 = !_vm.seen1;
      }
    }
  }, [_c("h6", {
    attrs: {
      id: "Caractéristiques-du-crédit"
    }
  }, [_vm._v("\n                                Présentation client\n                                "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])]), _vm._v(" "), _vm.seen2 ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen2 = !_vm.seen2;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "Caractéristiques-du-crédit"
    }
  }, [_vm._v("\n                                Revenu domicilié à AFG BANK\n                                "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-borderless"
  }, [_c("thead", [_c("tr", [_vm._m(11), _vm._v(" "), _vm._m(12), _vm._v(" "), _vm.formDataToBeWatched.matrimoniale == "Marié(e)" ? _c("td", {
    staticClass: "th",
    staticStyle: {
      "min-width": "150px"
    }
  }, [_vm._v("Conjoint(e)")]) : _vm._e(), _vm._v(" "), _vm.formDataToBeWatched.matrimoniale == "Marié(e)" ? _c("td", {
    staticClass: "th",
    staticStyle: {
      "min-width": "150px"
    }
  }, [_vm._v("Total")]) : _vm._e(), _vm._v(" "), _vm._m(13), _vm._v(" "), _vm._m(14), _vm._v(" "), _vm._m(15), _vm._v(" "), _vm._m(16), _vm._v(" "), _vm.formDataToBeWatched.matrimoniale == "Marié(e)" ? _c("td", {
    staticClass: "th",
    staticStyle: {
      "min-width": "150px"
    }
  }, [_vm._v("Revenu  conjoint "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]) : _vm._e(), _vm._v(" "), _vm._m(17), _vm._v(" "), _vm._m(18), _vm._v(" "), _vm.formDataToBeWatched.matrimoniale == "Marié(e)" ? _c("td", {
    staticClass: "th",
    staticStyle: {
      "min-width": "150px"
    }
  }, [_vm._v("Montant considéré conjoint "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]) : _vm._e(), _vm._v(" "), _vm._m(19), _vm._v(" "), _vm.formDataToBeWatched.matrimoniale == "Marié(e)" ? _c("td", {
    staticClass: "th",
    staticStyle: {
      "min-width": "100px"
    }
  }, [_vm._v("TQC CONJOINT")]) : _vm._e(), _vm._v(" "), _vm._m(20), _vm._v(" "), _vm.formDataToBeWatched.matrimoniale == "Marié(e)" ? _c("td", {
    staticClass: "th",
    staticStyle: {
      "min-width": "150px"
    }
  }, [_vm._v("QC CONJOINT")]) : _vm._e(), _vm._v(" "), _vm._m(21), _vm._v(" "), _vm._m(22), _vm._v(" "), _c("td", {
    staticClass: "th",
    staticStyle: {
      "min-width": "280px"
    }
  }, [_vm._v("Commentaire")])])]), _vm._v(" "), _c("tbody", [_vm._l(_vm.revenu_domicilie_afg, function (el, ind) {
    return _c("tr", {
      key: ind
    }, [_c("td", [ind < 3 ? _c("div", {
      staticClass: "d-flex align-content-center revenu",
      staticStyle: {
        "min-width": "200px"
      }
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.checked,
        expression: "el.checked"
      }],
      staticClass: "form-check-input",
      attrs: {
        type: "checkbox"
      },
      domProps: {
        checked: Array.isArray(el.checked) ? _vm._i(el.checked, null) > -1 : el.checked
      },
      on: {
        change: [function ($event) {
          var $$a = el.checked,
            $$el = $event.target,
            $$c = $$el.checked ? true : false;
          if (Array.isArray($$a)) {
            var $$v = null,
              $$i = _vm._i($$a, $$v);
            if ($$el.checked) {
              $$i < 0 && _vm.$set(el, "checked", $$a.concat([$$v]));
            } else {
              $$i > -1 && _vm.$set(el, "checked", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
            }
          } else {
            _vm.$set(el, "checked", $$c);
          }
        }, function ($event) {
          return _vm.resetValues($event, ind, "revenu_domicilie_afg");
        }]
      }
    }), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.libelle,
        expression: "el.libelle"
      }],
      staticClass: "form-control",
      attrs: {
        readonly: "",
        type: "text"
      },
      domProps: {
        value: el.libelle
      },
      on: {
        input: [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(el, "libelle", $event.target.value);
        }, _vm.handleInput]
      }
    })]) : _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.libelle,
        expression: "el.libelle"
      }],
      staticClass: "form-control",
      "class": {
        "bg-blue": ["tb_120001"].includes(el.comeFrom)
      },
      staticStyle: {
        "min-width": "200px"
      },
      attrs: {
        type: "text"
      },
      domProps: {
        value: el.libelle
      },
      on: {
        input: [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(el, "libelle", $event.target.value);
        }, _vm.handleInput]
      }
    })]), _vm._v(" "), _c("td", [_c("currency-input2", {
      "class": {
        "bg-blue": ["tb_120001"].includes(el.comeFrom)
      },
      attrs: {
        readonly: !el.checked,
        value: el.montant_salaire
      },
      on: {
        input: function input($event) {
          return _vm.formDataVars2($event, ind, "revenu_domicilie_afg", "montant_salaire");
        }
      }
    }), _vm._v(" "), el.libelle == "Salaire net" && el.checked ? _c("div", {
      staticClass: "mt-1 d-flex align-items-baseline"
    }, [_vm._m(23, true), _vm._v(" "), _c("currency-input2", {
      "class": {
        "bg-blue": ["tb_120001"].includes(el.comeFrom)
      },
      staticStyle: {
        "min-width": "150px"
      },
      attrs: {
        readonly: !el.checked,
        value: _vm.formDataToBeWatched.salaire_brut,
        id: "salaire_brut"
      },
      on: {
        input: _vm.formDataVars
      }
    })], 1) : _vm._e()], 1), _vm._v(" "), _vm.formDataToBeWatched.matrimoniale == "Marié(e)" ? _c("td", [_c("currency-input2", {
      "class": {
        "bg-blue": ["tb_120001"].includes(el.comeFrom)
      },
      attrs: {
        readonly: !el.checked,
        value: el.montant_conjoint
      },
      on: {
        input: function input($event) {
          return _vm.formDataVars2($event, ind, "revenu_domicilie_afg", "montant_conjoint");
        }
      }
    })], 1) : _vm._e(), _vm._v(" "), _vm.formDataToBeWatched.matrimoniale == "Marié(e)" ? _c("td", [_c("currency-input2", {
      attrs: {
        readonly: "",
        value: el.total_ligne
      }
    })], 1) : _vm._e(), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.eligible,
        expression: "el.eligible"
      }],
      staticClass: "form-check-input m-0",
      attrs: {
        type: "checkbox",
        disabled: !el.checked
      },
      domProps: {
        checked: Array.isArray(el.eligible) ? _vm._i(el.eligible, null) > -1 : el.eligible
      },
      on: {
        change: [function ($event) {
          var $$a = el.eligible,
            $$el = $event.target,
            $$c = $$el.checked ? true : false;
          if (Array.isArray($$a)) {
            var $$v = null,
              $$i = _vm._i($$a, $$v);
            if ($$el.checked) {
              $$i < 0 && _vm.$set(el, "eligible", $$a.concat([$$v]));
            } else {
              $$i > -1 && _vm.$set(el, "eligible", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
            }
          } else {
            _vm.$set(el, "eligible", $$c);
          }
        }, function ($event) {
          return _vm.changeEligibleValue($event, ind);
        }]
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.source_remboursement,
        expression: "el.source_remboursement"
      }],
      staticClass: "form-check-input m-0",
      attrs: {
        type: "checkbox",
        disabled: !el.checked
      },
      domProps: {
        checked: Array.isArray(el.source_remboursement) ? _vm._i(el.source_remboursement, null) > -1 : el.source_remboursement
      },
      on: {
        change: [function ($event) {
          var $$a = el.source_remboursement,
            $$el = $event.target,
            $$c = $$el.checked ? true : false;
          if (Array.isArray($$a)) {
            var $$v = null,
              $$i = _vm._i($$a, $$v);
            if ($$el.checked) {
              $$i < 0 && _vm.$set(el, "source_remboursement", $$a.concat([$$v]));
            } else {
              $$i > -1 && _vm.$set(el, "source_remboursement", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
            }
          } else {
            _vm.$set(el, "source_remboursement", $$c);
          }
        }, function ($event) {
          return _vm.changeEligibleValueSR($event, ind);
        }]
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.periodicite,
        expression: "el.periodicite"
      }],
      staticClass: "form-select",
      "class": {
        "bg-blue": ["tb_120001"].includes(el.comeFrom)
      },
      attrs: {
        disabled: !el.source_remboursement
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(el, "periodicite", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          return _vm.handleInput(true);
        }]
      }
    }, [_c("option", {
      attrs: {
        value: ""
      }
    }), _vm._v(" "), _vm._l(_vm.periodicites, function (op, inOp) {
      return _c("option", {
        key: "op" + inOp,
        domProps: {
          value: op.libelle
        }
      }, [_vm._v(_vm._s(op.libelle))]);
    })], 2)]), _vm._v(" "), _c("td", [_c("currency-input2", {
      attrs: {
        readonly: "",
        value: el.mensualite
      },
      on: {
        input: function input($event) {
          return _vm.formDataVars2($event, ind, "revenu_domicilie_afg", "mensualite");
        }
      }
    })], 1), _vm._v(" "), _vm.formDataToBeWatched.matrimoniale == "Marié(e)" ? _c("td", [_c("currency-input2", {
      attrs: {
        readonly: "",
        value: el.mensualite_conjoint
      },
      on: {
        input: function input($event) {
          return _vm.formDataVars2($event, ind, "revenu_domicilie_afg", "mensualite_conjoint");
        }
      }
    })], 1) : _vm._e(), _vm._v(" "), _c("td", [_c("input-group", {
      staticStyle: {
        "min-width": "110px"
      },
      scopedSlots: _vm._u([{
        key: "input",
        fn: function fn() {
          return [_c("currency-input", {
            "class": {
              "bg-blue": ["tb_120001"].includes(el.comeFrom)
            },
            attrs: {
              disabled: !el.checked,
              readonly: !el.source_remboursement,
              value: el.taux,
              max: 100,
              "float": "",
              percentage: ""
            },
            on: {
              input: function input($event) {
                return _vm.formDataVars2($event, ind, "revenu_domicilie_afg", "taux");
              }
            }
          })];
        },
        proxy: true
      }, {
        key: "right",
        fn: function fn() {
          return [_vm._v("%")];
        },
        proxy: true
      }], null, true)
    })], 1), _vm._v(" "), _c("td", [_c("currency-input2", {
      attrs: {
        readonly: "",
        value: el.montant_pondere
      },
      on: {
        input: function input($event) {
          return _vm.formDataVars2($event, ind, "revenu_domicilie_afg", "montant_pondere");
        }
      }
    })], 1), _vm._v(" "), _vm.formDataToBeWatched.matrimoniale == "Marié(e)" ? _c("td", [_c("currency-input2", {
      attrs: {
        readonly: "",
        value: el.montant_pondere_conjoint
      },
      on: {
        input: function input($event) {
          return _vm.formDataVars2($event, ind, "revenu_domicilie_afg", "montant_pondere_conjoint");
        }
      }
    })], 1) : _vm._e(), _vm._v(" "), _c("td", [_c("input-group", {
      staticStyle: {
        "min-width": "110px"
      },
      scopedSlots: _vm._u([{
        key: "input",
        fn: function fn() {
          return [_c("currency-input", {
            "class": {
              "bg-blue": ["tb_120001"].includes(el.comeFrom)
            },
            attrs: {
              disabled: !el.source_remboursement,
              value: el.taux_qc1,
              max: 100,
              "float": "",
              percentage: ""
            },
            on: {
              input: function input($event) {
                return _vm.formDataVars2($event, ind, "revenu_domicilie_afg", "taux_qc1");
              }
            }
          })];
        },
        proxy: true
      }, {
        key: "right",
        fn: function fn() {
          return [_vm._v("%")];
        },
        proxy: true
      }], null, true)
    })], 1), _vm._v(" "), _vm.formDataToBeWatched.matrimoniale == "Marié(e)" ? _c("td", [_c("input-group", {
      staticStyle: {
        "min-width": "110px"
      },
      scopedSlots: _vm._u([{
        key: "input",
        fn: function fn() {
          return [_c("currency-input", {
            "class": {
              "bg-blue": ["tb_120001"].includes(el.comeFrom)
            },
            attrs: {
              disabled: !el.source_remboursement,
              value: el.taux_qtc_conjoint,
              max: 100,
              "float": "",
              percentage: ""
            },
            on: {
              input: function input($event) {
                return _vm.formDataVars2($event, ind, "revenu_domicilie_afg", "taux_qtc_conjoint");
              }
            }
          })];
        },
        proxy: true
      }, {
        key: "right",
        fn: function fn() {
          return [_vm._v("%")];
        },
        proxy: true
      }], null, true)
    })], 1) : _vm._e(), _vm._v(" "), _c("td", [_c("currency-input2", {
      attrs: {
        value: el.montant_qc1,
        readonly: ""
      },
      on: {
        input: function input($event) {
          return _vm.formDataVars2($event, ind, "revenu_domicilie_afg", "montant_qc1");
        }
      }
    })], 1), _vm._v(" "), _vm.formDataToBeWatched.matrimoniale == "Marié(e)" ? _c("td", [_c("currency-input2", {
      attrs: {
        value: el.montant_qc1_conjoint,
        readonly: ""
      },
      on: {
        input: function input($event) {
          return _vm.formDataVars2($event, ind, "revenu_domicilie_afg", "montant_qc1_conjoint");
        }
      }
    })], 1) : _vm._e(), _vm._v(" "), _c("td", [_c("input-group", {
      staticStyle: {
        "min-width": "110px"
      },
      scopedSlots: _vm._u([{
        key: "input",
        fn: function fn() {
          return [_c("currency-input", {
            "class": {
              "bg-blue": ["tb_120001"].includes(el.comeFrom)
            },
            attrs: {
              disabled: !el.source_remboursement,
              readonly: el.libelle != "Salaire net",
              value: el.taux_qc2,
              max: 100,
              "float": "",
              percentage: ""
            },
            on: {
              input: function input($event) {
                return _vm.formDataVars2($event, ind, "revenu_domicilie_afg", "taux_qc2");
              }
            }
          })];
        },
        proxy: true
      }, {
        key: "right",
        fn: function fn() {
          return [_vm._v("%")];
        },
        proxy: true
      }], null, true)
    })], 1), _vm._v(" "), _c("td", [_c("currency-input2", {
      attrs: {
        value: el.montant_qc2,
        readonly: ""
      },
      on: {
        input: function input($event) {
          return _vm.formDataVars2($event, ind, "revenu_domicilie_afg", "montant_qc2");
        }
      }
    })], 1), _vm._v(" "), _c("td", [_c("textarea", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: el.commentaire,
        expression: "el.commentaire"
      }],
      staticClass: "form-control",
      "class": {
        "bg-blue": ["tb_120001"].includes(el.comeFrom)
      },
      style: _vm.formDataToBeWatched.matrimoniale == "Marié(e)" ? "width: 200px" : "width: 250px",
      attrs: {
        rows: "1"
      },
      domProps: {
        value: el.commentaire
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(el, "commentaire", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "vertical-middle text-right",
      staticStyle: {
        width: "15px"
      }
    }, [ind == 2 ? _c("button", {
      staticStyle: {
        "background-color": "#2c3e50",
        color: "#ffffff",
        "border-radius": "15%",
        border: "none"
      },
      attrs: {
        type: "button",
        title: "Ajouter une ligne"
      },
      on: {
        click: function click($event) {
          return _vm.addMoreRevenu();
        }
      }
    }, [_c("plus-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1) : _vm._e(), _vm._v(" "), ind > 2 ? _c("button", {
      staticStyle: {
        "background-color": "transparent",
        border: "none"
      },
      attrs: {
        type: "button",
        title: "Supprimer cette ligne"
      },
      on: {
        click: function click($event) {
          return _vm.removeRevenu(ind);
        }
      }
    }, [_c("trash-icon", {
      staticClass: "custom-class",
      attrs: {
        size: "21"
      }
    })], 1) : _vm._e()])]);
  }), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "fw-bold text-right vertical-middle"
  }, [_vm._v("Total")]), _vm._v(" "), _c("td", [_c("currency-input2", {
    attrs: {
      readonly: "",
      value: _vm.formDataToBeWatched.revenu_total_colonne_emprunteur
    }
  })], 1), _vm._v(" "), _vm.formDataToBeWatched.matrimoniale == "Marié(e)" ? _c("td", [_c("currency-input2", {
    attrs: {
      readonly: "",
      value: _vm.formDataToBeWatched.revenu_total_colonne_conjoint
    }
  })], 1) : _vm._e(), _vm._v(" "), _vm.formDataToBeWatched.matrimoniale == "Marié(e)" ? _c("td", [_c("currency-input2", {
    attrs: {
      readonly: "",
      value: _vm.formDataToBeWatched.revenu_total
    }
  })], 1) : _vm._e(), _vm._v(" "), _c("td", {
    attrs: {
      colspan: "3"
    }
  }), _vm._v(" "), _c("td", [_c("currency-input2", {
    attrs: {
      readonly: "",
      value: _vm.formDataToBeWatched.revenu_total_colonne_mensualite
    }
  })], 1), _vm._v(" "), _vm.formDataToBeWatched.matrimoniale == "Marié(e)" ? _c("td", [_c("currency-input2", {
    attrs: {
      readonly: "",
      value: _vm.formDataToBeWatched.revenu_total_colonne_mensualite_conjoint
    }
  })], 1) : _vm._e(), _vm._v(" "), _c("td"), _vm._v(" "), _c("td", [_c("currency-input2", {
    attrs: {
      readonly: "",
      value: _vm.formDataToBeWatched.revenu_total_colonne_montant_pondere
    }
  })], 1), _vm._v(" "), _vm.formDataToBeWatched.matrimoniale == "Marié(e)" ? _c("td", [_c("currency-input2", {
    attrs: {
      readonly: "",
      value: _vm.formDataToBeWatched.revenu_total_colonne_montant_pondere_conjoint
    }
  })], 1) : _vm._e(), _vm._v(" "), _c("td", [_c("input-group", {
    staticStyle: {
      "min-width": "110px"
    },
    scopedSlots: _vm._u([{
      key: "input",
      fn: function fn() {
        return [_c("currency-input", {
          attrs: {
            readonly: "",
            value: _vm.formDataToBeWatched.revenu_total_colonne_taux_qc1,
            "float": "",
            percentage: ""
          }
        })];
      },
      proxy: true
    }, {
      key: "right",
      fn: function fn() {
        return [_vm._v("%")];
      },
      proxy: true
    }], null, false, 499303644)
  })], 1), _vm._v(" "), _vm.formDataToBeWatched.matrimoniale == "Marié(e)" ? _c("td", [_c("input-group", {
    staticStyle: {
      "min-width": "110px"
    },
    scopedSlots: _vm._u([{
      key: "input",
      fn: function fn() {
        return [_c("currency-input", {
          attrs: {
            readonly: "",
            value: _vm.formDataToBeWatched.revenu_total_colonne_taux_qc1_conjoint,
            "float": "",
            percentage: ""
          }
        })];
      },
      proxy: true
    }, {
      key: "right",
      fn: function fn() {
        return [_vm._v("%")];
      },
      proxy: true
    }], null, false, 340678231)
  })], 1) : _vm._e(), _vm._v(" "), _c("td", [_c("currency-input2", {
    attrs: {
      readonly: "",
      value: _vm.formDataToBeWatched.revenu_total_colonne_montant_qc1
    }
  })], 1), _vm._v(" "), _vm.formDataToBeWatched.matrimoniale == "Marié(e)" ? _c("td", [_c("currency-input2", {
    attrs: {
      readonly: "",
      value: _vm.formDataToBeWatched.revenu_total_colonne_montant_qc1_conjoint
    }
  })], 1) : _vm._e(), _vm._v(" "), _c("td", [_c("input-group", {
    staticStyle: {
      "min-width": "110px"
    },
    scopedSlots: _vm._u([{
      key: "input",
      fn: function fn() {
        return [_c("currency-input", {
          attrs: {
            readonly: "",
            value: _vm.formDataToBeWatched.revenu_total_colonne_taux_qc2,
            "float": "",
            percentage: ""
          }
        })];
      },
      proxy: true
    }, {
      key: "right",
      fn: function fn() {
        return [_vm._v("%")];
      },
      proxy: true
    }], null, false, 1452648191)
  })], 1), _vm._v(" "), _c("td", [_c("currency-input2", {
    attrs: {
      readonly: "",
      value: _vm.formDataToBeWatched.revenu_total_colonne_montant_qc2
    }
  })], 1), _vm._v(" "), _c("td")])], 2)])])])]) : _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen2 = !_vm.seen2;
      }
    }
  }, [_c("h6", {
    attrs: {
      id: "Caractéristiques-du-crédit"
    }
  }, [_vm._v("\n                                Revenu domicilié à AFG BANK\n                                "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "col-md-12"
  }, [_c("vue-editor", {
    attrs: {
      id: "preanbule"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.preanbule,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "preanbule", $$v);
      },
      expression: "formDataToBeWatched.preanbule"
    }
  })], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "mb-5"
  }), _vm._v(" "), _c("button", {
    staticClass: "btn shadow-md text-white position-absolute",
    staticStyle: {
      cursor: "pointer",
      right: "32px",
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
        return _vm.retract();
      }
    }
  }, [_vm._v("\n                        Fermer le tableau\n                    ")])])])]) : _c("div", {
    staticClass: "card card-width-height"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc pb-0"
  }, [_c("h3", {
    staticClass: "head",
    attrs: {
      id: "f2-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Fiche Signaletique\n                        ")]), _vm._v(" "), _c("div", {
    staticClass: "col-auto"
  }, [((_vm$formDataToBeWatch3 = _vm.formDataToBeWatched.notes) === null || _vm$formDataToBeWatch3 === void 0 ? void 0 : _vm$formDataToBeWatch3.length) > 0 ? _c("div", {
    staticStyle: {
      display: "inline-block",
      position: "relative"
    }
  }, [_c("span", {
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.openNotesModal(true);
      }
    }
  }, [_c("i", {
    staticClass: "icofont icofont-comment text-white px-2",
    staticStyle: {
      "font-size": "12px"
    },
    attrs: {
      role: "button"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "badge-sm"
  }, [_c("span", [_vm._v("\n                                            " + _vm._s(_vm.formDataToBeWatched.notes.length) + "\n                                        ")])])])]) : _vm._e(), _vm._v(" "), _c("airplay-icon", {
    staticClass: "custom-class mt-1",
    staticStyle: {
      cursor: "pointer",
      margin: "0 5px"
    },
    attrs: {
      size: "0.7x",
      title: "exemple"
    },
    on: {
      click: function click($event) {
        return _vm.$modal.show("PREAMBULE");
      }
    }
  }), _vm._v(" "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    },
    on: {
      click: function click($event) {
        return _vm.retract();
      }
    }
  })], 1)])])])])], 1), _vm._v(" "), _c("modal", {
    attrs: {
      name: "PREAMBULE",
      width: 500,
      resizable: "",
      height: "300"
    }
  }, [_c("div", {
    staticClass: "image1"
  })]), _vm._v(" "), _c("note-modal", {
    attrs: {
      name: _vm.tb_name,
      listingNote: _vm.listingNote,
      notes: _vm.formDataToBeWatched.notes
    },
    on: {
      close: function close($event) {
        return _vm.$modal.hide(_vm.tb_name);
      },
      addNote: function addNote($event) {
        return _vm.formDataToBeWatched.notes.unshift($event);
      }
    },
    model: {
      value: _vm.formDataToBeWatched.notes,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "notes", $$v);
      },
      expression: "formDataToBeWatched.notes"
    }
  })], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "indice"
    }
  }, [_vm._v("Indice "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "date_de_naissance"
    }
  }, [_vm._v("Date de naissance "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "anciennete_de_la_relation"
    }
  }, [_vm._v("Ancienneté de la relation "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "target_market"
    }
  }, [_vm._v("\n                                        Société Target Market? "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "indice"
    }
  }, [_vm._v("Employeur /  Société "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "anciennete_pro"
    }
  }, [_vm._v("Date création de l'employeur "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "agence"
    }
  }, [_vm._v("Agence "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "nationnalite"
    }
  }, [_vm._v("Nationnalité "), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "type_client"
    }
  }, [_c("b", [_vm._v("Le client est-il: ?")]), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": "type_contrat"
    }
  }, [_vm._v("Type de contrat "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": "date_debut_cdd_interim"
    }
  }, [_vm._v("Date de début du CDD/INTERIM"), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "th",
    staticStyle: {
      "min-width": "200px"
    }
  }, [_vm._v("Source de revenu "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "th",
    staticStyle: {
      "min-width": "150px"
    }
  }, [_vm._v("Montant "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "th text-nowrap"
  }, [_vm._v("Eligible "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "th text-center",
    attrs: {
      "data-toggle": "tooltip",
      title: "Source de remboursement",
      "data-placement": "top"
    }
  }, [_vm._v("SR "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "th",
    staticStyle: {
      "min-width": "150px"
    }
  }, [_vm._v("Périodicité "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "th",
    staticStyle: {
      "min-width": "150px"
    }
  }, [_vm._v("Revenu  "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "th",
    staticStyle: {
      "min-width": "100px"
    }
  }, [_vm._v("Taux "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "th",
    staticStyle: {
      "min-width": "150px"
    }
  }, [_vm._v("Montant considéré "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "th",
    staticStyle: {
      "min-width": "100px"
    }
  }, [_vm._v("TQC AFG BANK "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "th",
    staticStyle: {
      "min-width": "150px"
    }
  }, [_vm._v("QC AFG BANK "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "th",
    staticStyle: {
      "min-width": "100px"
    }
  }, [_vm._v("TQC Légal "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "th",
    staticStyle: {
      "min-width": "150px"
    }
  }, [_vm._v("QC Légal "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "text-nowrap mx-1 fw-bold",
    attrs: {
      "for": ""
    }
  }, [_c("i", [_vm._v("Salaire brut")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/MothAndYearInput.vue?vue&type=template&id=67421d8a&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/MothAndYearInput.vue?vue&type=template&id=67421d8a&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", _vm._b({
    ref: _vm.id,
    staticClass: "d-flex",
    staticStyle: {
      "min-width": "72%"
    }
  }, "div", _vm.$attrs, false), [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.month,
      expression: "month"
    }],
    staticClass: "mx-1 flex-2 form-control",
    "class": _vm.classname,
    style: _vm.background + ";" + _vm.color,
    attrs: {
      disabled: _vm.readonly_ || _vm.viewonly
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.month = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, _vm.handleInput]
    }
  }, [!_vm.readonly_ && !_vm.viewonly ? _c("option", {
    attrs: {
      selected: "",
      disabled: "",
      value: ""
    }
  }, [_vm._v("MM")]) : _vm._e(), _vm._v(" "), !_vm.readonly_ ? _c("option", {
    attrs: {
      value: ""
    }
  }) : _vm._e(), _vm._v(" "), _vm._l(_vm.months, function (el, index) {
    return _c("option", {
      key: index,
      domProps: {
        value: el.value
      }
    }, [_vm._v("\n      " + _vm._s(el.intitule) + "\n    ")]);
  })], 2), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.year,
      expression: "year"
    }],
    staticClass: "form-control flex-1",
    "class": _vm.classname,
    style: "min-width: 45px;" + _vm.background + ";" + _vm.color,
    attrs: {
      type: "text",
      readonly: _vm.readonly_ || _vm.viewonly,
      placeholder: "AAAA",
      maxlength: "4"
    },
    domProps: {
      value: _vm.year
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.year = $event.target.value;
      }, _vm.handleInput]
    }
  })]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/note_technique/NT-HD0.vue?vue&type=style&index=0&id=6ac704b1&lang=css&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/note_technique/NT-HD0.vue?vue&type=style&index=0&id=6ac704b1&lang=css&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\ninput[data-v-6ac704b1] {\n    /*border: 1px solid red;*/\n}\n*[data-v-6ac704b1] {\n    font-family: \"Google sans\";\n}\nlabel[data-v-6ac704b1] {\n    height: 10px;\n    font-size: 13px;\n}\ntd[data-v-6ac704b1] {\n    padding: 5px;\n    font-size: 13px;\n}\ninput[data-v-6ac704b1],\n  select[data-v-6ac704b1] {\n    height: 35px;\n    border-color: #34495e;\n    color: #57606f;\n    font-size: 13px;\n    font-weight: bold;\n}\n.card-width-height[data-v-6ac704b1] {\n    width: 100%;\n    height: 100%;\n}\n.head[data-v-6ac704b1] {\n    color: #f1f2f6;\n    font-size: 22px;\n}\n.hdc[data-v-6ac704b1] {\n    background-color: #57606f;\n}\n.relook-header[data-v-6ac704b1] {\n    color: #000;\n    background-color: #f4f3f3;\n    padding: 5px;\n    border-bottom: 1px solid #b6b8bb;\n}\n.badge-sm[data-v-6ac704b1] {\n    display: inline-block;\n    width: 15px;\n    height: 15px;\n    background: rgba(255, 0, 0, 0.882);\n    color: white;\n    font-size: 12px;\n    font-weight: 500;\n    border-radius: 100%;\n    position: absolute;\n    top: -20%;\n    left: 55%;\n    text-align: center;\n}\ninput[type=\"checkbox\"][data-v-6ac704b1] {\n        height: 18px;\n        width: 20px;\n        margin-right: 5px;\n}\ninput[type=checkbox][data-v-6ac704b1] {\n        /* Double-sized Checkboxes */\n        /* IE */\n        /* FF */\n        /* Safari and Chrome */\n        /* Opera */\n        transform: scale(2);\n        padding: 10px;\n}\ninput[type=checkbox].form-check-input[data-v-6ac704b1] {\n        /* IE */\n        /* FF */\n        /* Safari and Chrome */\n        /* Opera */\n        transform: scale(1);\n        padding: 0px;\n}\n.revenu input[type=\"checkbox\"][data-v-6ac704b1],\n    .engagement input[type=\"checkbox\"][data-v-6ac704b1],\n    .garantie input[type=\"checkbox\"][data-v-6ac704b1] {\n        height: 26px;\n        width: 24px;\n        margin-right: 5px;\n}\n\n/* Might want to wrap a span around your checkbox text */\n.checkboxtext[data-v-6ac704b1] {\n    /* Checkbox text */\n    font-size: 110%;\n    display: inline;\n}\n.image1[data-v-6ac704b1] {\n      background: url(\"/images/capture_afg/PREAMBULE.png\")\n          no-repeat;\n      background-position: center;\n      background-size: contain;\n  \n      width: 500px;\n      height: 300px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/MothAndYearInput.vue?vue&type=style&index=0&id=67421d8a&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/MothAndYearInput.vue?vue&type=style&index=0&id=67421d8a&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.d-flex[data-v-67421d8a] {\r\n  display: flex !important;\n}\n.flex-1[data-v-67421d8a] {\r\n  flex: 1;\n}\n.flex-2[data-v-67421d8a] {\r\n  flex: 2;\n}\n.mx-1[data-v-67421d8a] {\r\n  margin: 0 0.1rem !important;\n}\ninput[data-v-67421d8a],\r\nselect[data-v-67421d8a] {\r\n  border-color: #34495e;\r\n  color: #57606f;\r\n  font-size: 13px;\r\n  font-weight: bold;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/note_technique/NT-HD0.vue?vue&type=style&index=0&id=6ac704b1&lang=css&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/note_technique/NT-HD0.vue?vue&type=style&index=0&id=6ac704b1&lang=css&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NT_HD0_vue_vue_type_style_index_0_id_6ac704b1_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NT-HD0.vue?vue&type=style&index=0&id=6ac704b1&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/note_technique/NT-HD0.vue?vue&type=style&index=0&id=6ac704b1&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NT_HD0_vue_vue_type_style_index_0_id_6ac704b1_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NT_HD0_vue_vue_type_style_index_0_id_6ac704b1_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/MothAndYearInput.vue?vue&type=style&index=0&id=67421d8a&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/MothAndYearInput.vue?vue&type=style&index=0&id=67421d8a&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MothAndYearInput_vue_vue_type_style_index_0_id_67421d8a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MothAndYearInput.vue?vue&type=style&index=0&id=67421d8a&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/MothAndYearInput.vue?vue&type=style&index=0&id=67421d8a&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MothAndYearInput_vue_vue_type_style_index_0_id_67421d8a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MothAndYearInput_vue_vue_type_style_index_0_id_67421d8a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/forms/afg/note_technique/NT-HD0.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/forms/afg/note_technique/NT-HD0.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NT_HD0_vue_vue_type_template_id_6ac704b1_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NT-HD0.vue?vue&type=template&id=6ac704b1&scoped=true */ "./resources/js/components/forms/afg/note_technique/NT-HD0.vue?vue&type=template&id=6ac704b1&scoped=true");
/* harmony import */ var _NT_HD0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NT-HD0.vue?vue&type=script&lang=js */ "./resources/js/components/forms/afg/note_technique/NT-HD0.vue?vue&type=script&lang=js");
/* harmony import */ var _NT_HD0_vue_vue_type_style_index_0_id_6ac704b1_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NT-HD0.vue?vue&type=style&index=0&id=6ac704b1&lang=css&scoped=true */ "./resources/js/components/forms/afg/note_technique/NT-HD0.vue?vue&type=style&index=0&id=6ac704b1&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _NT_HD0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _NT_HD0_vue_vue_type_template_id_6ac704b1_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _NT_HD0_vue_vue_type_template_id_6ac704b1_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "6ac704b1",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/forms/afg/note_technique/NT-HD0.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/forms/afg/note_technique/NT-HD0.vue?vue&type=script&lang=js":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/note_technique/NT-HD0.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NT_HD0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NT-HD0.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/note_technique/NT-HD0.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NT_HD0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/forms/afg/note_technique/NT-HD0.vue?vue&type=style&index=0&id=6ac704b1&lang=css&scoped=true":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/note_technique/NT-HD0.vue?vue&type=style&index=0&id=6ac704b1&lang=css&scoped=true ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NT_HD0_vue_vue_type_style_index_0_id_6ac704b1_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NT-HD0.vue?vue&type=style&index=0&id=6ac704b1&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/note_technique/NT-HD0.vue?vue&type=style&index=0&id=6ac704b1&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/forms/afg/note_technique/NT-HD0.vue?vue&type=template&id=6ac704b1&scoped=true":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/note_technique/NT-HD0.vue?vue&type=template&id=6ac704b1&scoped=true ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NT_HD0_vue_vue_type_template_id_6ac704b1_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NT_HD0_vue_vue_type_template_id_6ac704b1_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NT_HD0_vue_vue_type_template_id_6ac704b1_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NT-HD0.vue?vue&type=template&id=6ac704b1&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/note_technique/NT-HD0.vue?vue&type=template&id=6ac704b1&scoped=true");


/***/ }),

/***/ "./resources/js/components/shared/MothAndYearInput.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/shared/MothAndYearInput.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MothAndYearInput_vue_vue_type_template_id_67421d8a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MothAndYearInput.vue?vue&type=template&id=67421d8a&scoped=true */ "./resources/js/components/shared/MothAndYearInput.vue?vue&type=template&id=67421d8a&scoped=true");
/* harmony import */ var _MothAndYearInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MothAndYearInput.vue?vue&type=script&lang=js */ "./resources/js/components/shared/MothAndYearInput.vue?vue&type=script&lang=js");
/* harmony import */ var _MothAndYearInput_vue_vue_type_style_index_0_id_67421d8a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MothAndYearInput.vue?vue&type=style&index=0&id=67421d8a&scoped=true&lang=css */ "./resources/js/components/shared/MothAndYearInput.vue?vue&type=style&index=0&id=67421d8a&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MothAndYearInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _MothAndYearInput_vue_vue_type_template_id_67421d8a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _MothAndYearInput_vue_vue_type_template_id_67421d8a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "67421d8a",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/shared/MothAndYearInput.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/shared/MothAndYearInput.vue?vue&type=script&lang=js":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/shared/MothAndYearInput.vue?vue&type=script&lang=js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MothAndYearInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MothAndYearInput.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/MothAndYearInput.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MothAndYearInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shared/MothAndYearInput.vue?vue&type=style&index=0&id=67421d8a&scoped=true&lang=css":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/shared/MothAndYearInput.vue?vue&type=style&index=0&id=67421d8a&scoped=true&lang=css ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MothAndYearInput_vue_vue_type_style_index_0_id_67421d8a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MothAndYearInput.vue?vue&type=style&index=0&id=67421d8a&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/MothAndYearInput.vue?vue&type=style&index=0&id=67421d8a&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/shared/MothAndYearInput.vue?vue&type=template&id=67421d8a&scoped=true":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/shared/MothAndYearInput.vue?vue&type=template&id=67421d8a&scoped=true ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MothAndYearInput_vue_vue_type_template_id_67421d8a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MothAndYearInput_vue_vue_type_template_id_67421d8a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MothAndYearInput_vue_vue_type_template_id_67421d8a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MothAndYearInput.vue?vue&type=template&id=67421d8a&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/shared/MothAndYearInput.vue?vue&type=template&id=67421d8a&scoped=true");


/***/ })

}]);