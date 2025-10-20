"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_forms_afg_memorandum_F11_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/memorandum/F11.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/memorandum/F11.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/ContextMenu */ "./resources/js/components/shared/ContextMenu.vue");
/* harmony import */ var _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/ContextMenuItem */ "./resources/js/components/shared/ContextMenuItem.vue");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vueform/multiselect/dist/multiselect.vue2 */ "./node_modules/@vueform/multiselect/dist/multiselect.vue2.js");
/* harmony import */ var _shared_widgets_subtable_ST2_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/widgets/subtable/ST2.vue */ "./resources/js/components/shared/widgets/subtable/ST2.vue");
/* harmony import */ var _shared_widgets_subtable_subatable_manuel_STM1_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/widgets/subtable/subatable_manuel/STM1.vue */ "./resources/js/components/shared/widgets/subtable/subatable_manuel/STM1.vue");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
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








window.$ = window.jQuery = __webpack_require__(/*! jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "AnalyseFinanciere",
  display: "AnalyseFinanciere",
  components: {
    ContextMenu: _shared_ContextMenu__WEBPACK_IMPORTED_MODULE_0__["default"],
    ContextMenuItem: _shared_ContextMenuItem__WEBPACK_IMPORTED_MODULE_1__["default"],
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.ChevronDownIcon,
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.PlusIcon,
    BookOpenIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.BookOpenIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.TrashIcon,
    AirplayIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.AirplayIcon,
    Multiselect: _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_4__["default"],
    ST2: _shared_widgets_subtable_ST2_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    STM1: _shared_widgets_subtable_subatable_manuel_STM1_vue__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  props: {
    meta_data: Object,
    tb_name: String,
    tb_display_name: String
  },
  computed: {
    no_modify_data: function no_modify_data() {
      var _this$data_from_f;
      if (!['', null, undefined].includes((_this$data_from_f = this.data_from_f0) === null || _this$data_from_f === void 0 ? void 0 : _this$data_from_f.coming_from_sni)) {
        var _this$data_from_f2;
        if (((_this$data_from_f2 = this.data_from_f0) === null || _this$data_from_f2 === void 0 ? void 0 : _this$data_from_f2.coming_from_sni) == true) {
          return true;
        }
      }
      return false;
    },
    allTable: function allTable() {
      var _this$ratiosByCategor;
      var clusters = {
        rentabilite: ["Excedent brut d'exploitation (EBE)", "EBE/CA", "Resulats d'exploitation", "Resultat net", "Resultat net / CA", "C.A.F.", "Rentabilité Commerciale "],
        activite: ["Chiffre d'affaires H.T.", "Valeur ajoutee"],
        liquidite: ["Ratio de Liquidité Générale", "Trésorerie", "FR", "BFR", "FDR/BFR"],
        endetement: ["Charges financières", "Charges financières / EBE", "Dettes financières", "Capacité Remboursement (année de Cash Flow)"],
        structure: ["Capital", "Fonds propres (FP)", "Total bilan", "FP / Total bilan", "Autonomie financière"]
      };
      var financialData = [];
      if (!['', null, undefined].includes(this.activite_rentabilite)) {
        financialData = [].concat(_toConsumableArray(financialData), _toConsumableArray(this.activite_rentabilite));
      }
      if (!['', null, undefined].includes((_this$ratiosByCategor = this.ratiosByCategory) === null || _this$ratiosByCategor === void 0 ? void 0 : _this$ratiosByCategor['RATIO REGLEMENTAIRE'])) {
        financialData = [].concat(_toConsumableArray(financialData), _toConsumableArray(this.ratiosByCategory['RATIO REGLEMENTAIRE']));
      }
      if (!['', null, undefined].includes(this.structure_financiere)) {
        financialData = [].concat(_toConsumableArray(financialData), _toConsumableArray(this.structure_financiere));
      }

      // console.log("financialData",financialData);

      // let financialData = [...this.activite_rentabilite,...this.structure_financiere,...this.ratiosByCategory['RATIO REGLEMENTAIRE']]
      if (!financialData) financialData = [];
      var newtable = {};
      for (var _i = 0, _Object$entries = Object.entries(clusters); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          cluster = _Object$entries$_i[0],
          labels = _Object$entries$_i[1];
        newtable[cluster] = [];
        var _iterator = _createForOfIteratorHelper(labels),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var label = _step.value;
            var _iterator2 = _createForOfIteratorHelper(financialData),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var _element$label;
                var element = _step2.value;
                var the_label = (_element$label = element.label) !== null && _element$label !== void 0 ? _element$label : element.libelle;
                if (label == the_label) {
                  newtable[cluster].push(element);
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      if ([undefined, null, ""].includes(newtable)) {
        return null;
      }
      // console.log('newtable',newtable);

      return newtable;
    },
    groupedByCluster: function groupedByCluster() {
      var result = {
        compte_de_resultat: [],
        rentabilite: [],
        liquidite: [],
        endetement: [],
        structure: [],
        autres: []
      };
      var clusters = {
        compte_de_resultat: ["Chiffres d'Affaires", "Resultat Net", "Cash-Flow"],
        rentabilite: ["Profitabilité: Résultat Net/ Chiffres d'Affaires", "Rentabilite financiere : Resultat net / Capitaux propres", "Rentabilite Economique: Resultat Net/ Capitaux propres + Dettes"],
        liquidite: ["Endettement à court terme : Actif cir./ passif circulant", "Capacite de remboursement : DLMT/Cash Flow"],
        endetement: ["Endettement bancaire (Tresorerie passif en cours / CA)", "Autonomie financiére (DMLT/ Cap. Propres)", "Poids des charges fin. (Charges financiéres / CA)"],
        structure: ["Fonds propres / Total Bilan", "Fonds de roulement", "Besoins en Fonds de roulement d'exploitation", "Tresorerie nette", "Taux de couverture BFR par le FDR", "BFR en jours Chiffre d'affaires"]
      };
      var types = {
        montant: ["Chiffres d'Affaires", "Resultat Net", "Cash-Flow", "Fonds de roulement", "Besoins en Fonds de roulement d'exploitation", "Tresorerie nette", "BFR en jours Chiffre d'affaires"],
        "float": ["Profitabilité: Résultat Net/ Chiffres d'Affaires", "Rentabilite financiere : Resultat net / Capitaux propres", "Rentabilite Economique: Resultat Net/ Capitaux propres + Dettes", "Fonds propres / Total Bilan"],
        ratio: ["Endettement à court terme : Actif cir./ passif circulant", "Capacite de remboursement : DLMT/Cash Flow", "Autonomie financiére (DMLT/ Cap. Propres)", "Poids des charges fin. (Charges financiéres / CA)"]
        // jours: [

        // ]
      };
      if (!Array.isArray(this.ratiosByCategory)) return result;
      this.ratiosByCategory.forEach(function (originalItem) {
        var item = _objectSpread({}, originalItem);

        // Nettoyage : transformer les 999999 en 0 pour valeurs numériques
        ['n', 'n1', 'n2'].forEach(function (key) {
          if (item[key] === 999999) {
            item[key] = 0;
          }
        });

        // Recalcul des variances si nécessaire
        if (item.varn1 === 999999 || item.varn1 === undefined || item.varn1 === null) {
          var base = Math.abs(item.n1);
          item.varn1 = base !== 0 ? (item.n2 - item.n1) / base * 100 : 0;
        }
        if (item.varn2 === 999999 || item.varn2 === undefined || item.varn2 === null) {
          var _base = Math.abs(item.n);
          item.varn2 = _base !== 0 ? (item.n1 - item.n) / _base * 100 : 0;
        }

        // Ajout du type selon le libellé
        var typeFound = false;
        for (var type in types) {
          if (types[type].includes(item.LIB)) {
            item.type = type;
            typeFound = true;
            break;
          }
        }
        if (!typeFound) {
          item.type = 'montant';
        }

        // Classement par cluster
        var found = false;
        for (var cluster in clusters) {
          if (clusters[cluster].includes(item.LIB)) {
            result[cluster].push(item);
            found = true;
            break;
          }
        }
        if (!found) {
          result.autres.push(item);
        }
      });
      return result;
    },
    isGroupedResultEmpty: function isGroupedResultEmpty() {
      var grouped = this.groupedByCluster;
      return Object.values(grouped).every(function (arr) {
        return Array.isArray(arr) && arr.length === 0;
      });
    }
  },
  created: function created() {
    var _this = this;
    EventBus.$on("send-f0-to-f13", function (data) {
      var _this$data_from_f3;
      _this.data_from_f0 = data;
      if (!['', null, undefined].includes((_this$data_from_f3 = _this.data_from_f0) === null || _this$data_from_f3 === void 0 ? void 0 : _this$data_from_f3.coming_from_sni)) {
        var _this$data_from_f4;
        if (((_this$data_from_f4 = _this.data_from_f0) === null || _this$data_from_f4 === void 0 ? void 0 : _this$data_from_f4.coming_from_sni) == true) {
          _this.formDataToBeWatched.modeManuel['resume_bilan_manuel'] = false;
          _this.formDataToBeWatched.modeManuel['principaux_aggregats'] = false;
          _this.formDataToBeWatched.modeManuel['ratios_reglementaires_manuel'] = false;
          return;
        }
      }
      _this.formDataToBeWatched.modeManuel['resume_bilan_manuel'] = true;
      _this.formDataToBeWatched.modeManuel['principaux_aggregats'] = true;
      _this.formDataToBeWatched.modeManuel['ratios_reglementaires_manuel'] = true;
    });
    EventBus.$on("send-to-ana_fin", function (data) {
      _this.ncc = data.compte_contribuable;
      _this.annee_referentielle = data.annee_referentielle;
      if (!_this.annee_referentielle) _this.annee_referentielle = new Date().getFullYear() - 1;
      _this.remplirAnnees(); // ← ici

      _this.reload_force_data = true;
      _this.isLoding = true;
      _this.isFailed = false;
      _this.loadBeforeRequest();
    });
  },
  mounted: function mounted() {
    var _this2 = this;
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _this2$meta_data;
      var tbArrays;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            tbArrays = _this2.determineCredPubTables((_this2$meta_data = _this2.meta_data) === null || _this2$meta_data === void 0 || (_this2$meta_data = _this2$meta_data.dossier_credit) === null || _this2$meta_data === void 0 ? void 0 : _this2$meta_data.applied_templ_name);
            _this2.credpub0 = tbArrays[0];
            _this2.loadParams();
            // this.loadBeforeRequest();
            _this2.loadRetrieved();
            _this2.loadTbAttrs(); // charge les attributs + sous attributs des tables
            _this2.tableClosedOrOpened();

            // EventBus.$on("send-to-ana_fin", (data) => {
            //     this.ncc = data.compte_contribuable
            //     this.annee_referentielle = data.annee_referentielle
            //     if (!this.annee_referentielle) this.annee_referentielle = new Date().getFullYear();
            //     this.reload_force_data = true
            //     this.loadBeforeRequest()
            // })
            EventBus.$on("ST2-content", function (data) {
              _this2.formDataToBeWatched.bilan_passif = data === null || data === void 0 ? void 0 : data.bilan_passif;
              _this2.formDataToBeWatched.bilan_actif = data === null || data === void 0 ? void 0 : data.bilan_actif;
            });
            EventBus.$on("from-STM-1", function (data) {
              // console.log("data in STM", data)
              _this2.formDataToBeWatched.modeManuelVars[data.slug_name] = data === null || data === void 0 ? void 0 : data.slug;
            });
          case 8:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  data: function data() {
    var _formDataToBeWatched, _ref;
    var vm = this;
    return _ref = {
      bfr: {},
      caf: {},
      modeManuel: _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
        principaux_aggregats: false,
        activite_rentabilite_manuel: false,
        structure_financiere_manuel: false,
        ratios_reglementaires_manuel: false,
        ratios_activite_manuel: false
      }, "structure_financiere_manuel", false), "exploitation_prev_manuel", true), "resume_bilan_manuel", false), "test_stress_manuel", true), "realisation", true),
      allSeen: {
        seen1: true,
        seen2: true,
        seen3: true,
        seen4: true,
        seen5: true,
        seen6: true,
        seen7: true,
        seen8: true,
        seen9: true,
        seen10: true,
        seen11: true,
        seen12: true,
        seen13: true
      },
      isLoding: true,
      seen: true,
      agregats: "",
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_2__["default"].host,
      loadActiviteRent: false,
      loadedRatios: false,
      loadedAna_fin: false,
      ratios: "",
      ncc: "",
      annee_referentielle: "",
      contextList: [
      // Ajouter note
      {
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
      }, {
        title: "Supprimer",
        icon: "icofont icofont-trash",
        handler: this.startDeletingTbFromContext,
        disabled: false
      }],
      meta_parseable: {
        cred_pub_key: this.meta_data['cred_pub_key'],
        tb_name: this.tb_name
      },
      formDataToBeWatched: (_formDataToBeWatched = {
        activite_rentabilite: "",
        commentaire_activite_rentabilite: "",
        structure_financiere: "",
        realisation: "",
        commentaire_structure_financiere: "",
        date_debut: "",
        date_fin: "",
        principaux_aggregats: "",
        compte_exploitation_prev: "",
        commentaire_compte_exploitation_previsionnel: "",
        commentaire_compte_resume_bilan_manuel: "",
        commentaire_compte_principaux_aggregats: "",
        commentaire_ratios_reglementaires: "",
        commentaire_progression_charge: "",
        testStress25: "",
        testStress50: "",
        commentaire_test_stress: "",
        commentaire_ratios: ''
      }, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_formDataToBeWatched, "commentaire_ratios", ''), "notes", []), "years", {
        compte_exploitation_prev: {
          y: "",
          y1: "",
          y2: "",
          y3: "",
          y4: "",
          y5: "",
          y6: "",
          y7: ""
        },
        other: {
          y: "",
          y1: "",
          y2: "",
          y3: "",
          y4: "",
          y5: ""
        }
      }), "ratiosActivite", ""), "ratiosLiquidites", ""), "ratiosByCategory", ""), "bilan_actif", []), "bilan_passif", []), "modeManuelVars", _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
        activite_rentabilite_manuel: '',
        structure_financiere_manuel: '',
        ratios_reglementaires_manuel: '',
        ratios_activite_manuel: ""
      }, "structure_financiere_manuel", ''), "exploitation_prev_manuel", ""), "resume_bilan_manuel", ''), "principaux_aggregats", ''), "test_stress_manuel", ''), "realisation", '')), "modeManuel", _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
        principaux_aggregats: false,
        activite_rentabilite_manuel: false,
        structure_financiere_manuel: false,
        ratios_reglementaires_manuel: false,
        ratios_activite_manuel: false
      }, "structure_financiere_manuel", false), "exploitation_prev_manuel", true), "resume_bilan_manuel", false), "test_stress_manuel", true), "realisation", true)), _defineProperty(_defineProperty(_formDataToBeWatched, "annee_calculees", []), "charge_fin", {})),
      comeFromF0: false,
      capital: {},
      ratiosByCategory: "",
      activite_rentabilite: [{
        "label": "Chiffre d'afffaires H.T.",
        lib: "Chiffre d'affaires",
        "curr_year_3": "",
        "curr_year_2": "",
        "curr_year_1": "",
        "code": "XB"
      }, {
        "label": "Valeur ajoutee",
        lib: "Valeur Ajoutée (VA)",
        "curr_year_3": "",
        "curr_year_2": "",
        "curr_year_1": "",
        "code": "XC"
      }, {
        "label": "Excedent brut d'exploitation (EBE)",
        lib: "Exédent Brut d'Exploitation (EBE)",
        "curr_year_3": "",
        "curr_year_2": "",
        "curr_year_1": "",
        "code": "XD"
      }, {
        label: "EBE/CA",
        lib: "EBE-CA",
        "curr_year_3": "",
        "curr_year_2": "",
        "curr_year_1": "",
        code: "R5"
      }, {
        label: "Charges financières",
        lib: "Charges financières",
        "curr_year_3": "",
        "curr_year_2": "",
        "curr_year_1": "",
        code: "DD"
      }, {
        label: "Charges financières / EBE",
        lib: "CHARGE_FAMILIERE_EBE",
        "curr_year_3": "",
        "curr_year_2": "",
        "curr_year_1": "",
        code: "CHARGE_FAMILIERE_EBE"
      }, {
        label: "Resulats d'exploitation",
        lib: "Résultat d'exploitation",
        "curr_year_3": "",
        "curr_year_2": "",
        "curr_year_1": "",
        code: "XE"
      }, {
        label: "Resultat net",
        lib: "Résultat Net",
        "curr_year_3": "",
        "curr_year_2": "",
        "curr_year_1": "",
        code: "XI"
      }, {
        label: "Resultat net / CA",
        lib: "RESULTAT_NET_CA",
        "curr_year_3": "",
        "curr_year_2": "",
        "curr_year_1": "",
        code: "RESULTAT_NET_CA"
      }, {
        label: "C.A.F.",
        lib: "C.A.F",
        "curr_year_3": "",
        "curr_year_2": "",
        "curr_year_1": "",
        code: "C.A.F"
      }],
      structure_financiere: [{
        "label": "Capital",
        lib: "Capital",
        curr_year_3: "",
        "curr_year_2": "",
        "curr_year_1": "",
        code: "CA"
      }, {
        "label": "Fonds propres (FP)",
        lib: "Capitaux Propres",
        curr_year_3: "",
        "curr_year_2": "",
        "curr_year_1": "",
        code: "CP"
      }, {
        "label": "Total bilan",
        lib: "Total bilan",
        curr_year_3: "",
        "curr_year_2": "",
        "curr_year_1": "",
        code: "BZ"
      }, {
        "label": "FP / Total bilan",
        lib: "FP_B",
        curr_year_3: "",
        "curr_year_2": "",
        "curr_year_1": "",
        code: "FP_B"
      }, {
        "label": "Dettes financières",
        lib: "Dettes Financières",
        curr_year_3: "",
        "curr_year_2": "",
        "curr_year_1": "",
        code: "DD"
      }, {
        "label": "FR",
        lib: "Fonds de Roulement",
        curr_year_3: "",
        "curr_year_2": "",
        "curr_year_1": "",
        code: "L9"
      }, {
        "label": "BFR",
        lib: "Besoin en Fonds de Roulement",
        curr_year_3: "",
        "curr_year_2": "",
        "curr_year_1": "",
        code: "BFR"
      }, {
        "label": "FDR/BFR",
        lib: "FR-BFR",
        curr_year_3: "",
        "curr_year_2": "",
        "curr_year_1": "",
        code: "S3"
      }, {
        "label": "Trésorerie nette (A-B)",
        lib: "Trésorerie Nette",
        curr_year_3: "",
        "curr_year_2": "",
        "curr_year_1": "",
        code: "DT"
      }],
      realisation: [{
        "libelle": "CA",
        "montant": ""
      }, {
        "libelle": "EBE",
        "montant": ""
      }, {
        "libelle": "EBE/CA",
        "montant": ""
      }, {
        "libelle": "Résultat d'exploitation",
        "montant": ""
      }, {
        "libelle": "Resultat net",
        "montant": ""
      }, {
        "libelle": "RN/CA",
        "montant": ""
      }, {
        "libelle": "CAF",
        "montant": ""
      }],
      compte_exploitation_prev: [{
        "libelle": "CHIFFRE D'AFFAIRES",
        "curr_year_2": "",
        "curr_year_1": "",
        "current_year": "",
        "an_ulterieur_1": "",
        "an_ulterieur_2": "",
        "an_ulterieur_3": "",
        "an_ulterieur_4": "",
        code: "XB"
      }, {
        "libelle": "Autres produits d'exploitation",
        "curr_year_2": "",
        "curr_year_1": "",
        "current_year": "",
        "an_ulterieur_1": "",
        "an_ulterieur_2": "",
        "an_ulterieur_3": "",
        "an_ulterieur_4": "",
        code: ""
      }, {
        "libelle": "Matières premières, Marchandises & fournitures",
        "curr_year_2": "",
        "curr_year_1": "",
        "current_year": "",
        "an_ulterieur_1": "",
        "an_ulterieur_2": "",
        "an_ulterieur_3": "",
        "an_ulterieur_4": "",
        code: "RC"
      }, {
        "libelle": "Transports",
        "curr_year_2": "",
        "curr_year_1": "",
        "current_year": "",
        "an_ulterieur_1": "",
        "an_ulterieur_2": "",
        "an_ulterieur_3": "",
        "an_ulterieur_4": "",
        code: "RG"
      }, {
        "libelle": "Locations",
        "curr_year_2": "",
        "curr_year_1": "",
        "current_year": "",
        "an_ulterieur_1": "",
        "an_ulterieur_2": "",
        "an_ulterieur_3": "",
        "an_ulterieur_4": ""
      }, {
        "libelle": "Entretiens matériels  et bureaux",
        "curr_year_2": "",
        "curr_year_1": "",
        "current_year": "",
        "an_ulterieur_1": "",
        "an_ulterieur_2": "",
        "an_ulterieur_3": "",
        "an_ulterieur_4": ""
      }, {
        "libelle": "Assurances ",
        "curr_year_2": "",
        "curr_year_1": "",
        "current_year": "",
        "an_ulterieur_1": "",
        "an_ulterieur_2": "",
        "an_ulterieur_3": "",
        "an_ulterieur_4": ""
      }, {
        "libelle": "Communications publicités ",
        "curr_year_2": "",
        "curr_year_1": "",
        "current_year": "",
        "an_ulterieur_1": "",
        "an_ulterieur_2": "",
        "an_ulterieur_3": "",
        "an_ulterieur_4": ""
      }, {
        "libelle": "Frais bancaires",
        "curr_year_2": "",
        "curr_year_1": "",
        "current_year": "",
        "an_ulterieur_1": "",
        "an_ulterieur_2": "",
        "an_ulterieur_3": "",
        "an_ulterieur_4": ""
      }, {
        "libelle": "Autres services",
        "curr_year_2": "",
        "curr_year_1": "",
        "current_year": "",
        "an_ulterieur_1": "",
        "an_ulterieur_2": "",
        "an_ulterieur_3": "",
        "an_ulterieur_4": ""
      }, {
        "libelle": "Impôt et taxes",
        "curr_year_2": "",
        "curr_year_1": "",
        "current_year": "",
        "an_ulterieur_1": "",
        "an_ulterieur_2": "",
        "an_ulterieur_3": "",
        "an_ulterieur_4": "",
        code: "RI"
      }, {
        "libelle": "TOTAL CONSOMMATIONS INTERMEDIAIRES",
        "curr_year_2": "",
        "curr_year_1": "",
        "current_year": "",
        "an_ulterieur_1": "",
        "an_ulterieur_2": "",
        "an_ulterieur_3": "",
        "an_ulterieur_4": ""
      }, {
        "libelle": "VALEUR AJOUTEE",
        "curr_year_2": "",
        "curr_year_1": "",
        "current_year": "",
        "an_ulterieur_1": "",
        "an_ulterieur_2": "",
        "an_ulterieur_3": "",
        "an_ulterieur_4": "",
        code: "XC"
      }, {
        "libelle": "Rémunérations",
        "curr_year_2": "",
        "curr_year_1": "",
        "current_year": "",
        "an_ulterieur_1": "",
        "an_ulterieur_2": "",
        "an_ulterieur_3": "",
        "an_ulterieur_4": ""
      }, {
        "libelle": "Indemnités de transport",
        "curr_year_2": "",
        "curr_year_1": "",
        "current_year": "",
        "an_ulterieur_1": "",
        "an_ulterieur_2": "",
        "an_ulterieur_3": "",
        "an_ulterieur_4": ""
      }, {
        "libelle": "Charges sociales directes",
        "curr_year_2": "",
        "curr_year_1": "",
        "current_year": "",
        "an_ulterieur_1": "",
        "an_ulterieur_2": "",
        "an_ulterieur_3": "",
        "an_ulterieur_4": "",
        code: "RK"
      }, {
        "libelle": "Personnel temporaire",
        "curr_year_2": "",
        "curr_year_1": "",
        "current_year": "",
        "an_ulterieur_1": "",
        "an_ulterieur_2": "",
        "an_ulterieur_3": "",
        "an_ulterieur_4": ""
      }, {
        "libelle": "EXCEDENT BRUT D'EXPLOITATION",
        "curr_year_2": "",
        "curr_year_1": "",
        "current_year": "",
        "an_ulterieur_1": "",
        "an_ulterieur_2": "",
        "an_ulterieur_3": "",
        "an_ulterieur_4": "",
        code: "XD"
      }, {
        "libelle": "Amortissements",
        "curr_year_2": "",
        "curr_year_1": "",
        "current_year": "",
        "an_ulterieur_1": "",
        "an_ulterieur_2": "",
        "an_ulterieur_3": "",
        "an_ulterieur_4": ""
      }, {
        "libelle": "Provisions",
        "curr_year_2": "",
        "curr_year_1": "",
        "current_year": "",
        "an_ulterieur_1": "",
        "an_ulterieur_2": "",
        "an_ulterieur_3": "",
        "an_ulterieur_4": ""
      }, {
        "libelle": "RESULTAT D'EXPLOITATION",
        "curr_year_2": "",
        "curr_year_1": "",
        "current_year": "",
        "an_ulterieur_1": "",
        "an_ulterieur_2": "",
        "an_ulterieur_3": "",
        "an_ulterieur_4": ""
      }, {
        "libelle": "Produit financier",
        "curr_year_2": "",
        "curr_year_1": "",
        "current_year": "",
        "an_ulterieur_1": "",
        "an_ulterieur_2": "",
        "an_ulterieur_3": "",
        "an_ulterieur_4": ""
      }, {
        "libelle": "Frais financier",
        "curr_year_2": "",
        "curr_year_1": "",
        "current_year": "",
        "an_ulterieur_1": "",
        "an_ulterieur_2": "",
        "an_ulterieur_3": "",
        "an_ulterieur_4": ""
      }, {
        "libelle": "RESULTAT FINANCIER",
        "curr_year_2": "",
        "curr_year_1": "",
        "current_year": "",
        "an_ulterieur_1": "",
        "an_ulterieur_2": "",
        "an_ulterieur_3": "",
        "an_ulterieur_4": ""
      }, {
        "libelle": "RESULTAT HORS ACTIVITES ORDINAIRES",
        "curr_year_2": "",
        "curr_year_1": "",
        "current_year": "",
        "an_ulterieur_1": "",
        "an_ulterieur_2": "",
        "an_ulterieur_3": "",
        "an_ulterieur_4": ""
      }, {
        "libelle": "RESULTAT BRUT",
        "curr_year_2": "",
        "curr_year_1": "",
        "current_year": "",
        "an_ulterieur_1": "",
        "an_ulterieur_2": "",
        "an_ulterieur_3": "",
        "an_ulterieur_4": ""
      }, {
        "libelle": "BIC/ IMF (Impôts sur les Sociétés)",
        "curr_year_2": "",
        "curr_year_1": "",
        "current_year": "",
        "an_ulterieur_1": "",
        "an_ulterieur_2": "",
        "an_ulterieur_3": "",
        "an_ulterieur_4": ""
      }, {
        "libelle": "RESULTANT NET COMPTABLE",
        "curr_year_2": "",
        "curr_year_1": "",
        "current_year": "",
        "an_ulterieur_1": "",
        "an_ulterieur_2": "",
        "an_ulterieur_3": "",
        "an_ulterieur_4": ""
      }, {
        "libelle": "RENTABILITE ECONOMIQUE",
        "curr_year_2": "",
        "curr_year_1": "",
        "current_year": "",
        "an_ulterieur_1": "",
        "an_ulterieur_2": "",
        "an_ulterieur_3": "",
        "an_ulterieur_4": ""
      }, {
        "libelle": "CASH FLOW",
        "curr_year_2": "",
        "curr_year_1": "",
        "current_year": "",
        "an_ulterieur_1": "",
        "an_ulterieur_2": "",
        "an_ulterieur_3": "",
        "an_ulterieur_4": ""
      }, {
        "libelle": "Loyer CB",
        "curr_year_2": "",
        "curr_year_1": "",
        "current_year": "",
        "an_ulterieur_1": "",
        "an_ulterieur_2": "",
        "an_ulterieur_3": "",
        "an_ulterieur_4": ""
      }, {
        "libelle": "CASH FLOW NET",
        "curr_year_2": "",
        "curr_year_1": "",
        "current_year": "",
        "an_ulterieur_1": "",
        "an_ulterieur_2": "",
        "an_ulterieur_3": "",
        "an_ulterieur_4": ""
      }],
      testStress25: [{
        "libelle": "Résultat net prévu",
        "curr_year_2": "",
        "curr_year_1": "",
        "current_year": "",
        "an_ulterieur_1": "",
        "an_ulterieur_2": ""
      }, {
        "libelle": "Dotation amortissements",
        "curr_year_2": "",
        "curr_year_1": "",
        "current_year": "",
        "an_ulterieur_1": "",
        "an_ulterieur_2": ""
      }, {
        "libelle": "CAF prévisionnelle",
        "curr_year_2": "",
        "curr_year_1": "",
        "current_year": "",
        "an_ulterieur_1": "",
        "an_ulterieur_2": ""
      }, {
        "libelle": "Loyers CB TTC demandé",
        "curr_year_2": "",
        "curr_year_1": "",
        "current_year": "",
        "an_ulterieur_1": "",
        "an_ulterieur_2": ""
      }, {
        "libelle": "Net CAF",
        "curr_year_2": "",
        "curr_year_1": "",
        "current_year": "",
        "an_ulterieur_1": "",
        "an_ulterieur_2": ""
      }],
      testStress50: [{
        "libelle": "Résultat net prévu",
        "curr_year_2": "",
        "curr_year_1": "",
        "current_year": "",
        "an_ulterieur_1": "",
        "an_ulterieur_2": ""
      }, {
        "libelle": "Dotation amortissements",
        "curr_year_2": "",
        "curr_year_1": "",
        "current_year": "",
        "an_ulterieur_1": "",
        "an_ulterieur_2": ""
      }, {
        "libelle": "CAF prévisionnelle",
        "curr_year_2": "",
        "curr_year_1": "",
        "current_year": "",
        "an_ulterieur_1": "",
        "an_ulterieur_2": ""
      }, {
        "libelle": "Loyers CB TTC demandé",
        "curr_year_2": "",
        "curr_year_1": "",
        "current_year": "",
        "an_ulterieur_1": "",
        "an_ulterieur_2": ""
      }, {
        "libelle": "Net CAF",
        "curr_year_2": "",
        "curr_year_1": "",
        "current_year": "",
        "an_ulterieur_1": "",
        "an_ulterieur_2": ""
      }]
    }, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_ref, "ratios", []), "listingNote", false), "caf_agregats", []), "total_bilan", {}), "isFailed", false), "credpub0", null), "data_from_f0", null), "reload_force_data", false), "activite_rentabiliteOld", [{
      "label_old": "Chiffre d'afffaires H.T.",
      // old
      "label": "Chiffres d'Affaires",
      // new
      lib: "Chiffre d'affaires",
      "curr_year_3": "",
      "curr_year_2": "",
      "curr_year_1": "",
      "code": "XB"
    }, {
      "label": "Valeur ajoutee",
      lib: "Valeur Ajoutée (VA)",
      "curr_year_3": "",
      "curr_year_2": "",
      "curr_year_1": "",
      "code": "XC"
    }, {
      "label": "Excedent brut d'exploitation (EBE)",
      lib: "Exédent Brut d'Exploitation (EBE)",
      "curr_year_3": "",
      "curr_year_2": "",
      "curr_year_1": "",
      "code": "XD"
    }, {
      label: "EBE/CA",
      lib: "EBE-CA",
      "curr_year_3": "",
      "curr_year_2": "",
      "curr_year_1": "",
      code: "R5"
    }, {
      label: "Charges financières",
      lib: "Charges financières",
      "curr_year_3": "",
      "curr_year_2": "",
      "curr_year_1": "",
      code: "DD"
    }, {
      label: "Charges financières / EBE",
      lib: "CHARGE_FAMILIERE_EBE",
      "curr_year_3": "",
      "curr_year_2": "",
      "curr_year_1": "",
      code: "CHARGE_FAMILIERE_EBE"
    }, {
      label: "Resulats d'exploitation",
      lib: "Résultat d'exploitation",
      "curr_year_3": "",
      "curr_year_2": "",
      "curr_year_1": "",
      code: "XE"
    }, {
      label_old: "Resultat net",
      // old
      label: "Resultat Net",
      // new
      lib: "Résultat Net",
      "curr_year_3": "",
      "curr_year_2": "",
      "curr_year_1": "",
      code: "XI"
    }, {
      label_old: "Resultat net / CA",
      // old
      label: "Profitabilité: Résultat Net/ Chiffres d'Affaires",
      // new
      lib: "RESULTAT_NET_CA",
      "curr_year_3": "",
      "curr_year_2": "",
      "curr_year_1": "",
      code: "RESULTAT_NET_CA"
    }, {
      label_old: "C.A.F.",
      // old
      label: "Cash-Flow",
      // new
      lib: "C.A.F",
      "curr_year_3": "",
      "curr_year_2": "",
      "curr_year_1": "",
      code: "C.A.F"
    }]), "structure_financiereOld", [{
      "label": "Capital",
      lib: "Capital",
      curr_year_3: "",
      "curr_year_2": "",
      "curr_year_1": "",
      code: "CA"
    }, {
      "label": "Fonds propres (FP)",
      lib: "Capitaux Propres",
      curr_year_3: "",
      "curr_year_2": "",
      "curr_year_1": "",
      code: "CP"
    }, {
      "label": "Total bilan",
      lib: "Total bilan",
      curr_year_3: "",
      "curr_year_2": "",
      "curr_year_1": "",
      code: "BZ"
    }, {
      "label": "Fonds propres / Total Bilan",
      lib: "FP_B",
      curr_year_3: "",
      "curr_year_2": "",
      "curr_year_1": "",
      code: "FP_B"
    }, {
      "label": "Dettes financières",
      lib: "Dettes Financières",
      curr_year_3: "",
      "curr_year_2": "",
      "curr_year_1": "",
      code: "DD"
    }, {
      "label": "Fonds de roulement",
      lib: "Fonds de Roulement",
      curr_year_3: "",
      "curr_year_2": "",
      "curr_year_1": "",
      code: "L9"
    }, {
      "label": "Besoins en Fonds de roulement d'exploitation",
      lib: "Besoin en Fonds de Roulement",
      curr_year_3: "",
      "curr_year_2": "",
      "curr_year_1": "",
      code: "BFR"
    }, {
      "label": "FDR/BFR",
      lib: "FR-BFR",
      curr_year_3: "",
      "curr_year_2": "",
      "curr_year_1": "",
      code: "S3"
    }, {
      "label": "Tresorerie nette",
      lib: "Trésorerie Nette",
      curr_year_3: "",
      "curr_year_2": "",
      "curr_year_1": "",
      code: "DT"
    }]), _defineProperty(_ref, "floatLib", ["Profitabilité: Résultat Net/ Chiffres d'Affaires", "Rentabilite financiere : Resultat net / Capitaux propres", "Rentabilite Economique: Resultat Net/ Capitaux propres + Dettes"]);
  },
  methods: {
    ratioOld: function ratioOld(element_1, element_2) {
      if (!element_2 || isNaN(element_1) || isNaN(element_2)) {
        return 0;
      }
      var ratio = element_1 / element_2;
      // return ratio
      return Math.round(ratio * 100) / 100;
    },
    getInputComponent: function getInputComponent(type) {
      return ['float', 'ratio', 'jours'].includes(type) ? 'currency-input' : 'currency-input2';
    },
    isFloatLike: function isFloatLike(type) {
      return ['float', 'ratio'].includes(type);
    },
    isPercentage: function isPercentage(type) {
      return type === 'float';
    },
    ratio: function ratio(a, b) {
      if (!b || b === 0) return 0;
      return (a - b) / Math.abs(b) * 100;
    },
    getFormattedFinancialName: function getFormattedFinancialName(key) {
      var financialNames = {
        structure: 'Structure',
        endettement: 'Endettement',
        liquidite: 'Liquidité',
        activite: 'Activité',
        rentabilite: 'Rentabilité'
      };
      return financialNames[key] || key;
    },
    getFormattedFinancialNameV2: function getFormattedFinancialNameV2(key) {
      var financialNames = {
        compte_de_resultat: 'Compte de Résultat',
        rentabilite: 'Rentabilité ',
        liquidite: 'Liquidité ',
        endetement: 'Endettement financier',
        structure: 'Structure financière'
      };
      return financialNames[key] || key;
    },
    reloadData: function reloadData() {
      this.isLoding = true;
      this.isFailed = false;
      this.reload_force_data = true;
      this.loadBeforeRequest();
    },
    modeManuel_: function modeManuel_(arg) {
      this.formDataToBeWatched.modeManuel[arg] = !this.formDataToBeWatched.modeManuel[arg];
    },
    getEtatFinancierByAPI: function getEtatFinancierByAPI() {
      var _this3 = this;
      this.isLoding = true;
      var options = {
        method: 'POST',
        url: this.ebapisHost + 'creditbuilder/api/v1/etats-financiers/',
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          ncc: this.ncc
        }
      };
      this.$axios.request(options).then(function (response) {
        // this.getAnalyseFin()
        var etats_financiers = response.data.etats_financiers;

        // this.annee_calculees = Object.keys(etats_financiers)
        var annee_calculees = etats_financiers === null || etats_financiers === void 0 ? void 0 : etats_financiers["annee calcule"];
        // console.log('annee_calculees ** ',annee_calculees);

        if (!['', null, undefined].includes(annee_calculees)) {
          var _annee_calculees$map;
          _this3.annee_calculees = (_annee_calculees$map = annee_calculees.map(function (el) {
            return Number(el === null || el === void 0 ? void 0 : el.ANNEE);
          })) === null || _annee_calculees$map === void 0 ? void 0 : _annee_calculees$map.sort(function (a, b) {
            return a - b;
          });
          _this3.updateYears(_this3.annee_calculees);
        } else {
          _this3.annee_calculees = [];
        }
        _this3.formDataToBeWatched.annee_calculees = _this3.annee_calculees;
        _this3.loadProperties(etats_financiers);
        _this3.isLoding = false;
        // annee_calculees = annee_calculees.map(el=>Number(el?.ANNEE))
      })["catch"](function (error) {
        _this3.isLoding = false;
        console.error(error);
      });
    },
    updateYears: function updateYears(annee_calculees) {
      var years = annee_calculees;
      if (!Array.isArray(years) || years.length < 3) {
        console.warn("annee_calculees doit contenir au moins 3 éléments.");
        return;
      }
      var last = years.at(-1);
      var prev1 = years.at(-2);
      var prev2 = years.at(-3);
      var prev3 = years.at(-1) + 1;
      var prev4 = years.at(-1) + 2;
      var prev5 = years.at(-1) + 3;

      // Mise à jour des années pour compte_exploitation_prev
      var compte_exploitation_prev = {
        y: last
      };
      for (var i = 1; i <= 7; i++) {
        compte_exploitation_prev["y".concat(i)] = last + i;
      }

      // Mise à jour des années pour la clé other
      var other = {
        y: last,
        y1: prev1,
        y2: prev2,
        y3: prev3,
        y4: prev4,
        y5: prev5
      };

      // update keys [compte_exploitation_prev,other]
      this.formDataToBeWatched.years.compte_exploitation_prev = compte_exploitation_prev;
      this.formDataToBeWatched.years.other = other;
    },
    loadProperties: function loadProperties(etats_financiers) {
      var _etats_financiers$chi,
        _etats_financiers$agr,
        _etats_financiers$agr2,
        _etats_financiers$agr3,
        _this4 = this;
      // console.log("etats_financiers", etats_financiers.agregats)
      var caf_ = etats_financiers === null || etats_financiers === void 0 || (_etats_financiers$chi = etats_financiers["chiffre-cles"]) === null || _etats_financiers$chi === void 0 ? void 0 : _etats_financiers$chi.find(function (el) {
        return el.LIB.trim() == "C.A.F.";
      });
      // console.log("caf_", caf_)
      // let APIcaf = {...caf_, curr_year_3: caf_.n, curr_year_2: caf_.n1, curr_year_1: caf_.n2, variance: caf_.varn2 }
      var brf_ = etats_financiers === null || etats_financiers === void 0 || (_etats_financiers$agr = etats_financiers.agregats) === null || _etats_financiers$agr === void 0 ? void 0 : _etats_financiers$agr.find(function (el) {
        return el.LIB.trim() == "Besoin en Fonds de Roulement (B)";
      });
      var APIbfr = ![undefined, null, ''].includes(brf_) ? _objectSpread(_objectSpread({}, brf_), {}, {
        curr_year_3: brf_.n2,
        curr_year_2: brf_.n1,
        curr_year_1: brf_.n,
        variance: brf_.varn2
      }) : {};
      var fr_ = etats_financiers === null || etats_financiers === void 0 || (_etats_financiers$agr2 = etats_financiers.agregats) === null || _etats_financiers$agr2 === void 0 ? void 0 : _etats_financiers$agr2.find(function (el) {
        return el.LIB.trim() == "Fonds de roulement  (A)";
      });
      var APIfr = ![undefined, null, ''].includes(fr_) ? _objectSpread(_objectSpread({}, fr_), {}, {
        curr_year_3: fr_.n2,
        curr_year_2: fr_.n1,
        curr_year_1: fr_.n,
        variance: fr_.varn2
      }) : {};
      var tresorerie_ = etats_financiers === null || etats_financiers === void 0 || (_etats_financiers$agr3 = etats_financiers.agregats) === null || _etats_financiers$agr3 === void 0 ? void 0 : _etats_financiers$agr3.find(function (el) {
        return el.LIB.trim() == "Trésorerie nette (A-B)";
      });
      var APItresorerie = ![undefined, null, ''].includes(tresorerie_) ? _objectSpread(_objectSpread({}, tresorerie_), {}, {
        curr_year_3: tresorerie_.n2,
        curr_year_2: tresorerie_.n1,
        curr_year_1: tresorerie_.n,
        variance: tresorerie_.varn2
      }) : {};

      // console.log({APIcaf:APIcaf, APIbfr:APIbfr, APIfr:APIfr})
      // this.activite_rentabilite
      this.activite_rentabilite.forEach(function (el) {
        var charge_fin = _this4.activite_rentabilite.find(function (elem) {
          return elem.code == "DD";
        });
        var ebe = _this4.activite_rentabilite.find(function (elem) {
          return elem.code == "XD";
        });
        var ca = _this4.activite_rentabilite.find(function (elem) {
          return elem.code == "XB";
        });
        var resnet = _this4.activite_rentabilite.find(function (elem) {
          return elem.code == "XI";
        });
        // if(el.code == "C.A.F") {
        //     el.curr_year_3 =  APIcaf.curr_year_3

        //     el.curr_year_2 =  APIcaf.curr_year_2

        //     el.curr_year_1 =  APIcaf.curr_year_1
        //     el.variance = APIcaf.varn2
        // } else
        if (el.code === "CHARGE_FAMILIERE_EBE") {
          // console.log({ebe:ebe, charge_fin:charge_fin})
          el.curr_year_3 = ((charge_fin === null || charge_fin === void 0 ? void 0 : charge_fin.curr_year_3) / (ebe === null || ebe === void 0 ? void 0 : ebe.curr_year_3) * 100).toFixed(2);
          el.curr_year_2 = ((charge_fin === null || charge_fin === void 0 ? void 0 : charge_fin.curr_year_2) / (ebe === null || ebe === void 0 ? void 0 : ebe.curr_year_2) * 100).toFixed(2);
          el.curr_year_1 = ((charge_fin === null || charge_fin === void 0 ? void 0 : charge_fin.curr_year_1) / (ebe === null || ebe === void 0 ? void 0 : ebe.curr_year_1) * 100).toFixed(2);
          // console.log("elbl", this.activite_rentabilite.find(elem=>elem.code == "XD"))
        } else if (el.code === "R5") {
          el.curr_year_3 = ((ebe === null || ebe === void 0 ? void 0 : ebe.curr_year_3) / (ca === null || ca === void 0 ? void 0 : ca.curr_year_3) * 100).toFixed(2);
          el.curr_year_2 = ((ebe === null || ebe === void 0 ? void 0 : ebe.curr_year_2) / (ca === null || ca === void 0 ? void 0 : ca.curr_year_2) * 100).toFixed(2);
          el.curr_year_1 = ((ebe === null || ebe === void 0 ? void 0 : ebe.curr_year_1) / (ca === null || ca === void 0 ? void 0 : ca.curr_year_1) * 100).toFixed(2);
          // console.log("elbl", this.activite_rentabilite.find(elem=>elem.code == "XD"))
        } else if (el.code === "RESULTAT_NET_CA") {
          el.curr_year_3 = ((resnet === null || resnet === void 0 ? void 0 : resnet.curr_year_3) / (ca === null || ca === void 0 ? void 0 : ca.curr_year_3) * 100).toFixed(2);
          el.curr_year_2 = ((resnet === null || resnet === void 0 ? void 0 : resnet.curr_year_2) / (ca === null || ca === void 0 ? void 0 : ca.curr_year_2) * 100).toFixed(2);
          el.curr_year_1 = ((resnet === null || resnet === void 0 ? void 0 : resnet.curr_year_1) / (ca === null || ca === void 0 ? void 0 : ca.curr_year_1) * 100).toFixed(2);
          // console.log("elbl", el)
        } else {
          // el.curr_year_3 = this.findElement(this.annee_calculees[0], el, etats_financiers)
          // el.curr_year_2 = this.findElement(this.annee_calculees[1], el, etats_financiers)
          // el.curr_year_1 = this.findElement(this.annee_calculees[2], el, etats_financiers)
          el.curr_year_3 = _this4.findElement(_this4.annee_calculees.at(-3), el, etats_financiers, "n2");
          el.curr_year_2 = _this4.findElement(_this4.annee_calculees.at(-2), el, etats_financiers, "n1");
          el.curr_year_1 = _this4.findElement(_this4.annee_calculees.at(-1), el, etats_financiers, "n");
        }
        el.variance = el.curr_year_2 ? [el.curr_year_1 / el.curr_year_2 - 1] * 100 : 0;
      });
      // CAF NOT FIND
      this.structure_financiere.forEach(function (el) {
        var fondsPropre = _this4.structure_financiere.find(function (elem) {
          return elem.code == "CP";
        });
        var totalBilan = _this4.structure_financiere.find(function (elem) {
          return elem.code == "BZ";
        });
        var fdr = _this4.structure_financiere.find(function (elem) {
          return elem.code == "L9";
        });
        var bfr = _this4.structure_financiere.find(function (elem) {
          return elem.code == "BFR";
        });
        if (el.code == "BFR") {
          el.curr_year_3 = APIbfr.curr_year_3;
          el.curr_year_2 = APIbfr.curr_year_2;
          el.curr_year_1 = APIbfr.curr_year_1;
          //el.variance = APIbfr.varn2
        } else if (el.code == "L9") {
          el.curr_year_3 = APIfr.curr_year_3;
          el.curr_year_2 = APIfr.curr_year_2;
          el.curr_year_1 = APIfr.curr_year_1;
          //el.variance = APIfr.varn2
        } else if (el.code === "FP_B") {
          el.curr_year_3 = ((fondsPropre === null || fondsPropre === void 0 ? void 0 : fondsPropre.curr_year_3) / (totalBilan === null || totalBilan === void 0 ? void 0 : totalBilan.curr_year_3) * 100).toFixed(2);
          el.curr_year_2 = ((fondsPropre === null || fondsPropre === void 0 ? void 0 : fondsPropre.curr_year_2) / (totalBilan === null || totalBilan === void 0 ? void 0 : totalBilan.curr_year_2) * 100).toFixed(2);
          el.curr_year_1 = ((fondsPropre === null || fondsPropre === void 0 ? void 0 : fondsPropre.curr_year_1) / (totalBilan === null || totalBilan === void 0 ? void 0 : totalBilan.curr_year_1) * 100).toFixed(2);
        } else if (el.code === "DT") {
          el.curr_year_3 = APItresorerie.curr_year_3;
          el.curr_year_2 = APItresorerie.curr_year_2;
          el.curr_year_1 = APItresorerie.curr_year_1;
        } else if (el.code === "S3") {
          el.curr_year_3 = bfr !== null && bfr !== void 0 && bfr.curr_year_3 ? ((fdr === null || fdr === void 0 ? void 0 : fdr.curr_year_3) / (bfr === null || bfr === void 0 ? void 0 : bfr.curr_year_3) * 100).toFixed(2) : 0;
          el.curr_year_2 = bfr !== null && bfr !== void 0 && bfr.curr_year_2 ? ((fdr === null || fdr === void 0 ? void 0 : fdr.curr_year_2) / (bfr === null || bfr === void 0 ? void 0 : bfr.curr_year_2) * 100).toFixed(2) : 0;
          el.curr_year_1 = bfr.curr_year_1 ? ((fdr === null || fdr === void 0 ? void 0 : fdr.curr_year_1) / (bfr === null || bfr === void 0 ? void 0 : bfr.curr_year_1) * 100).toFixed(2) : 0;
        } else {
          el.curr_year_3 = _this4.findElement(_this4.annee_calculees.at(-3), el, etats_financiers, "n2");
          el.curr_year_2 = _this4.findElement(_this4.annee_calculees.at(-2), el, etats_financiers, "n1");
          el.curr_year_1 = _this4.findElement(_this4.annee_calculees.at(-1), el, etats_financiers, "n");
        }
        el.variance = el.curr_year_2 ? [el.curr_year_1 / el.curr_year_2 - 1] * 100 : 0;
        if (el.label == 'Trésorerie nette (A-B)') {
          el.label = 'Trésorerie';
        }
      });
      this.handleInput();
    },
    findElement: function findElement(key, element, tab, annee) {
      var sources0 = ["chiffre-cles", "agregats", "actif", "passif", "compte_resulta"];
      var sources1 = ["chiffre-cles", "agregats"];
      for (var _i2 = 0, _sources = sources0; _i2 < _sources.length; _i2++) {
        var source = _sources[_i2];
        if (sources1.includes(source)) {
          var _tab$source;
          var found = tab === null || tab === void 0 || (_tab$source = tab[source]) === null || _tab$source === void 0 ? void 0 : _tab$source.find(function (el) {
            var _el$LIB, _element$label2;
            return ((_el$LIB = el.LIB) === null || _el$LIB === void 0 ? void 0 : _el$LIB.trim()) == ((_element$label2 = element.label) === null || _element$label2 === void 0 ? void 0 : _element$label2.trim());
          });
          if (found) {
            // if (element.label.trim() == 'Valeur ajoutee') {
            //     console.log('found 0', found);
            //     console.log('element 0', element);
            //     console.log('annee 0', annee);
            // }

            return Number(found === null || found === void 0 ? void 0 : found[annee]);
          }
        } else {
          var _tab$key;
          var _found = tab === null || tab === void 0 || (_tab$key = tab[key]) === null || _tab$key === void 0 || (_tab$key = _tab$key[source]) === null || _tab$key === void 0 ? void 0 : _tab$key.find(function (el) {
            var _el$ref, _element$code;
            return ((_el$ref = el.ref) === null || _el$ref === void 0 ? void 0 : _el$ref.trim()) == ((_element$code = element.code) === null || _element$code === void 0 ? void 0 : _element$code.trim());
          });
          if (_found) {
            // if (element.label.trim() == 'Valeur ajoutee') {
            //     console.log('found 1', found);
            //     console.log('element 1', element);
            //     console.log('annee 1', annee);
            // }
            return Number(_found === null || _found === void 0 ? void 0 : _found.valeur);
          }
        }
      }
      return 0;
    },
    groupByCategory: function groupByCategory(data) {
      var groupedData = {};
      if (!['', null, undefined].includes(data) && (data === null || data === void 0 ? void 0 : data.length) > 0) {
        data.forEach(function (item) {
          var category = item.categorie;

          // Ignorer si la propriété 'categorie' est absente ou vide
          if (!category) return;
          if (groupedData[category]) {
            groupedData[category].push(item);
          } else {
            groupedData[category] = [item];
          }
        });
      }
      this.ratiosByCategory = groupedData;
      // console.log('groupByCategory ->ratiosByCategory', this.ratiosByCategory);
    },
    cleanLib: function cleanLib(lib) {
      return lib.replace(/\\\//g, "/") // Corriger les barres obliques échappées
      .replace(/\?/g, "é") // Corriger les caractères mal encodés (adapter selon les cas)
      .replace(/\s+/g, " ") // Réduire tous les espaces multiples à un seul
      .replace(/\s+\)/g, ")") // Supprimer l'espace avant la parenthèse fermante
      .replace(/\(\s+/g, "(") // Supprimer l'espace après la parenthèse ouvrante
      .trim(); // Supprimer les espaces en début/fin
    },
    getRatios: function getRatios() {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var options;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              options = {
                method: 'POST',
                url: _this5.ebapisHost + 'creditbuilder/api/v1/load-ratios/',
                headers: {
                  'Content-Type': 'application/json'
                },
                data: {
                  cc: _this5.ncc
                }
              };
              _this5.$axios.request(options).then(function (response) {
                var fromBackend = response.data.ratios_core;
                // console.log('fromBackend', fromBackend);

                var cleanData = fromBackend.map(function (item) {
                  return _objectSpread(_objectSpread({}, item), {}, {
                    LIB: _this5.cleanLib(item.LIB)
                  });
                });
                // console.log('cleanData', cleanData);

                var libList = _this5.getLibList(cleanData);
                // console.log('Liste des LIB nettoyés :', libList);
                _this5.ratiosByCategory = cleanData;
                _this5.loadedRatios = false;
                // this.groupByCategory(cleanData)

                _this5.handleInput();
              })["catch"](function (error) {
                console.error(error);
              });
            case 2:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    getLibList: function getLibList(ratiosArray) {
      if (!Array.isArray(ratiosArray)) return [];
      return ratiosArray.map(function (item) {
        return item.LIB;
      });
    },
    loadParams: function loadParams() {
      var _this$meta_data, _this$meta_data2, _this$meta_data3, _this$meta_data4, _this$meta_data5, _this$meta_data6, _this$meta_data7, _this$data_from_f5;
      this.data_from_f0 = {
        annee_referentielle: (_this$meta_data = this.meta_data) === null || _this$meta_data === void 0 || (_this$meta_data = _this$meta_data.dossier_credit) === null || _this$meta_data === void 0 || (_this$meta_data = _this$meta_data[this.credpub0]) === null || _this$meta_data === void 0 ? void 0 : _this$meta_data.annee_referentielle,
        compte_contribuable: (_this$meta_data2 = this.meta_data) === null || _this$meta_data2 === void 0 || (_this$meta_data2 = _this$meta_data2.dossier_credit) === null || _this$meta_data2 === void 0 || (_this$meta_data2 = _this$meta_data2[this.credpub0]) === null || _this$meta_data2 === void 0 ? void 0 : _this$meta_data2.compte_contribuable,
        coming_from_sni: (_this$meta_data3 = this.meta_data) === null || _this$meta_data3 === void 0 || (_this$meta_data3 = _this$meta_data3.dossier_credit) === null || _this$meta_data3 === void 0 || (_this$meta_data3 = _this$meta_data3[this.credpub0]) === null || _this$meta_data3 === void 0 ? void 0 : _this$meta_data3.coming_from_sni,
        status_note_sni: (_this$meta_data4 = this.meta_data) === null || _this$meta_data4 === void 0 || (_this$meta_data4 = _this$meta_data4.dossier_credit) === null || _this$meta_data4 === void 0 || (_this$meta_data4 = _this$meta_data4[this.credpub0]) === null || _this$meta_data4 === void 0 ? void 0 : _this$meta_data4.status_note_sni,
        sni_details: (_this$meta_data5 = this.meta_data) === null || _this$meta_data5 === void 0 || (_this$meta_data5 = _this$meta_data5.dossier_credit) === null || _this$meta_data5 === void 0 || (_this$meta_data5 = _this$meta_data5[this.credpub0]) === null || _this$meta_data5 === void 0 ? void 0 : _this$meta_data5.sni_details
      };
      this.ncc = (_this$meta_data6 = this.meta_data) === null || _this$meta_data6 === void 0 || (_this$meta_data6 = _this$meta_data6.dossier_credit) === null || _this$meta_data6 === void 0 || (_this$meta_data6 = _this$meta_data6[this.credpub0]) === null || _this$meta_data6 === void 0 ? void 0 : _this$meta_data6.compte_contribuable;
      this.annee_referentielle = (_this$meta_data7 = this.meta_data) === null || _this$meta_data7 === void 0 || (_this$meta_data7 = _this$meta_data7.dossier_credit) === null || _this$meta_data7 === void 0 || (_this$meta_data7 = _this$meta_data7[this.credpub0]) === null || _this$meta_data7 === void 0 ? void 0 : _this$meta_data7.annee_referentielle;
      if (!this.annee_referentielle) this.annee_referentielle = new Date().getFullYear();
      if (!['', null, undefined].includes((_this$data_from_f5 = this.data_from_f0) === null || _this$data_from_f5 === void 0 ? void 0 : _this$data_from_f5.coming_from_sni)) {
        var _this$data_from_f6;
        if (((_this$data_from_f6 = this.data_from_f0) === null || _this$data_from_f6 === void 0 ? void 0 : _this$data_from_f6.coming_from_sni) == true) {
          this.formDataToBeWatched.modeManuel['resume_bilan_manuel'] = false;
          this.formDataToBeWatched.modeManuel['principaux_aggregats'] = false;
          this.formDataToBeWatched.modeManuel['ratios_reglementaires_manuel'] = false;
          return;
        }
      }
      this.formDataToBeWatched.modeManuel['resume_bilan_manuel'] = true;
      this.formDataToBeWatched.modeManuel['principaux_aggregats'] = true;
      this.formDataToBeWatched.modeManuel['ratios_reglementaires_manuel'] = true;
    },
    loadBeforeRequest: function loadBeforeRequest() {
      this.getEtatFinancierByAPI();
      // this.getCAFByApi();
      // this.getRatiosByAPI();
      // this.getRatios(res)
      // this.getAnalyseFin()
      // this.getRatiosT14()
      this.getRatios();
    },
    addmore: function addmore() {
      this.activite_rentabilite.push({
        "label": "Chiffre d'affaires H.T.",
        "curr_year_2": "",
        "curr_year_1": "",
        "variance": ""
      });
    },
    remove: function remove(index) {
      this.activite_rentabilite.splice(index, 1);
    },
    findIndexByObj: function findIndexByObj(label) {
      var _this$tab;
      var tab = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "secteurs_activites";
      return (_this$tab = this[tab]) === null || _this$tab === void 0 ? void 0 : _this$tab.findIndex(function (el) {
        return (el === null || el === void 0 ? void 0 : el.secteurs_cofina) === label;
      });
    },
    tableClosedOrOpened: function tableClosedOrOpened() {
      this.seen = this.fetchClosedTables(this.tb_name + this.meta_data['cred_pub_key']);
    },
    openNotesModal: function openNotesModal() {
      var listing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.listingNote = listing;
      this.$modal.show(this.tb_name);
    },
    // AJOUTER
    launchAutoSaver: function launchAutoSaver() {
      var _this6 = this;
      _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["default"].loadUserData().then(function (res) {
        _this6.send2Backend(res, 0, 0);
      })["catch"](function (err) {
        _this6.loadWithError(err);
      });
    },
    loadRetrieved: function loadRetrieved() {
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var _this7$meta_data$doss;
        var lentb, createdKey, createdKeyArr, _this7$meta_data$doss2, _this7$formDataToBeWa, _this7$formDataToBeWa2, _this7$formDataToBeWa3, _this7$formDataToBeWa4, _this7$formDataToBeWa5;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              lentb = _this7.meta_data['dossier_credit']['tbs_in_use'];
              createdKey = _this7.tb_name;
              createdKeyArr = createdKey.split("tb");
              createdKey = "cred_pub_tb_" + createdKeyArr[1];
              _this7.gl_key = createdKey;
              _this7.defaultRetract(false, (_this7$meta_data$doss = _this7.meta_data["dossier_credit"]) === null || _this7$meta_data$doss === void 0 ? void 0 : _this7$meta_data$doss.applied_templ_id);
              if (_this7.meta_data['dossier_credit'][createdKey] == undefined) {
                if (_this7.meta_data['dossier_credit']['cred_pub_tb_00'] != undefined) {
                  _this7.annee_referentielle = (_this7$meta_data$doss2 = _this7.meta_data['dossier_credit']['cred_pub_tb_00']) === null || _this7$meta_data$doss2 === void 0 ? void 0 : _this7$meta_data$doss2.annee_referentielle;
                  if (_this7.annee_referentielle) {
                    _this7.comeFromF0 = true;
                    _this7.remplirAnnees();
                  }
                }
                // 
              }
              if (lentb.length > 0) {
                if (_this7.meta_data['dossier_credit'][createdKey] != undefined) {
                  _this7.isLoding = false;
                  _this7.formDataToBeWatched = _this7.meta_data['dossier_credit'][createdKey];
                  Object.keys((_this7$formDataToBeWa = _this7.formDataToBeWatched) === null || _this7$formDataToBeWa === void 0 ? void 0 : _this7$formDataToBeWa.modeManuelVars).forEach(function (element) {
                    if (!["", undefined, null].includes(_this7.formDataToBeWatched.modeManuelVars[element])) {
                      _this7.modeManuel[element] = true;
                    }
                  });
                  // console.log("")

                  if (_this7.formDataToBeWatched["activite_rentabilite"] != undefined) {
                    if (_this7.formDataToBeWatched["activite_rentabilite"] != "") {
                      _this7.activite_rentabilite = _this7.formDataToBeWatched["activite_rentabilite"];
                    }
                  }
                  if (_this7.formDataToBeWatched["structure_financiere"] != undefined) {
                    if (_this7.formDataToBeWatched["structure_financiere"] != "") {
                      _this7.structure_financiere = _this7.formDataToBeWatched["structure_financiere"];
                    }
                  }
                  if (_this7.formDataToBeWatched["realisation"] != undefined) {
                    if (_this7.formDataToBeWatched["realisation"] != "") {
                      _this7.realisation = _this7.formDataToBeWatched["realisation"];
                    }
                  }
                  if (_this7.formDataToBeWatched["compte_exploitation_prev"] != undefined) {
                    if (_this7.formDataToBeWatched["compte_exploitation_prev"] != "") {
                      _this7.compte_exploitation_prev = _this7.formDataToBeWatched["compte_exploitation_prev"];
                    }
                  }
                  if (_this7.formDataToBeWatched["testStress25"] != undefined) {
                    if (_this7.formDataToBeWatched["testStress25"] != "") {
                      _this7.testStress25 = _this7.formDataToBeWatched["testStress25"];
                    }
                  }
                  if (_this7.formDataToBeWatched["testStress50"] != undefined) {
                    if (_this7.formDataToBeWatched["testStress50"] != "") {
                      _this7.testStress50 = _this7.formDataToBeWatched["testStress50"];
                    }
                  }
                  if (_this7.formDataToBeWatched["ratios"] != undefined) {
                    if (_this7.formDataToBeWatched["ratios"] != "") {
                      _this7.ratios = _this7.formDataToBeWatched["ratios"];
                    }
                  }
                  if (_this7.formDataToBeWatched["ratiosByCategory"] != undefined) {
                    if (_this7.formDataToBeWatched["ratiosByCategory"] != "") {
                      _this7.ratiosByCategory = _this7.formDataToBeWatched.ratiosByCategory;
                    }
                  }

                  // COntent of F14
                  if (_this7.formDataToBeWatched.ratiosActivite) {
                    _this7.ratiosActivite = (_this7$formDataToBeWa2 = _this7.formDataToBeWatched) === null || _this7$formDataToBeWa2 === void 0 ? void 0 : _this7$formDataToBeWa2.ratiosActivite;
                  }
                  if (_this7.formDataToBeWatched.ratiosEndettements) {
                    _this7.ratiosEndettements = (_this7$formDataToBeWa3 = _this7.formDataToBeWatched) === null || _this7$formDataToBeWa3 === void 0 ? void 0 : _this7$formDataToBeWa3.ratiosEndettements;
                  }
                  if (_this7.formDataToBeWatched.ratiosLiquidites) {
                    _this7.ratiosLiquidites = (_this7$formDataToBeWa4 = _this7.formDataToBeWatched) === null || _this7$formDataToBeWa4 === void 0 ? void 0 : _this7$formDataToBeWa4.ratiosLiquidites;
                  }
                  if (_this7.formDataToBeWatched.ratiosRentabilites) {
                    _this7.ratiosRentabilites = (_this7$formDataToBeWa5 = _this7.formDataToBeWatched) === null || _this7$formDataToBeWa5 === void 0 ? void 0 : _this7$formDataToBeWa5.ratiosRentabilites;
                  }
                  if (!_this7.formDataToBeWatched['commentaire_ratios_reglementaires']) _this7.formDataToBeWatched['commentaire_ratios_reglementaires'] = "";
                } else {
                  _this7.loadBeforeRequest();
                }
                _this7.formDataToBeWatched.is_first_time = false;
              }
            case 8:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    setTbVal: function setTbVal(val) {
      this.cred_pub_key = val;
    },
    send2Backend: function send2Backend(res, newVal, oldVal) {
      this.authcheck = true;
      this.authcheckUsr = res.data;
      this.authcheckStatus = res.status;
      if (this.authcheck === true) {
        this.$emit('autosaving');
        this.$axios.post(this.ebapisHost + 'creditbuilder/api/v1/autosaving/', {
          user: this.authcheckUsr,
          meta_parseable: this.meta_parseable,
          filledData: this.formDataToBeWatched
        }).then(function (response) {
          // this.$Progress.finish();

          this.$emit('autosaving');

          // console.log(response)

          var tbFetcheData = response.data;
          if (tbFetcheData['is_success'] === true) {
            this.$emit('load-shell');
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
        "tb_name": this.tb_name + this.meta_data['cred_pub_key'],
        "status": this.seen
      };
      EventBus.$emit("savedclosed-table", a);
    },
    // add defaultRetract
    defaultRetract: function defaultRetract(rc, ra) {
      if (ra != null) {
        this.seen = rc;
        var a = {
          "tb_name": this.tb_name + this.meta_data['cred_pub_key'],
          "status": this.seen
        };
        EventBus.$emit("savedclosed-table", a);
      }
    },
    deleteTB: function deleteTB() {
      if (confirm('Êtes-vous sûr de vouloir supprimer ce tableau ?')) {
        this.$emit('delete-tb', {
          tb_name: this.tb_name
        });
      }
    },
    loadTbAttrs: function loadTbAttrs() {
      var l = [];
      var topdivel = this.$refs.topdiv;
      var k = document.querySelectorAll('.subdiv' + this.tb_name);
      k.forEach(function (e) {
        l.push(e.innerText);
      });
      var p = {
        'name_of_title': topdivel.innerText,
        'list_of_content': l,
        id: "f13-head"
      };
      // console.log(p)
      this.$emit('load-buffer', p);
    },
    handleInput: function handleInput() {
      this.structure_financiere = this.calculVariance('structure_financiere');
      this.activite_rentabilite = this.calculVariance('activite_rentabilite');
      this.formDataToBeWatched.activite_rentabilite = this.activite_rentabilite;
      this.formDataToBeWatched.structure_financiere = this.structure_financiere;
      this.formDataToBeWatched.realisation = this.realisation;
      this.formDataToBeWatched.compte_exploitation_prev = this.compte_exploitation_prev;
      this.computedStress25("testStress25");
      this.computedStress25("testStress50");
      this.formDataToBeWatched.testStress25 = this.testStress25;
      this.formDataToBeWatched.testStress50 = this.testStress50;
      this.formDataToBeWatched.ratios = this.ratios;
      this.formDataToBeWatched.ratiosByCategory = this.ratiosByCategory;

      // Content of F14
      this.formDataToBeWatched.ratiosActivite = this.ratiosActivite;
      this.formDataToBeWatched.ratiosLiquidites = this.ratiosLiquidites;
      this.formDataToBeWatched.ratiosEndettements = this.ratiosEndettements;
      this.formDataToBeWatched.ratiosRentabilites = this.ratiosRentabilites;
    },
    computedStress25: function computedStress25(tableau) {
      var _this8 = this;
      var cycle = ["curr_year_2", "curr_year_1", "current_year", "an_ulterieur_1", "an_ulterieur_2"];
      this[tableau].forEach(function (obj, key) {
        if (key == 2) {
          cycle.forEach(function (element) {
            obj[element] = _this8.somme([0, 1], element, tableau);
          });
        }
        if (key == 4) {
          cycle.forEach(function (element) {
            obj[element] = _this8.minus([3], element, tableau, _this8[tableau][2][element]);
          });
        }
      });
    },
    disabledCel: function disabledCel(key) {
      return key == 2 || key == 4;
    },
    calculVariance: function calculVariance(tab) {
      var a = 0;
      var b = 1;
      if (this[tab].length > 0) {
        // console.log({ tab : this[tab] })
        var _iterator3 = _createForOfIteratorHelper(this[tab]),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var element = _step3.value;
            // console.log("code", element.code)
            if (element.code != 'BFR') {
              var _element$curr_year_, _element$curr_year_2;
              a = Number((_element$curr_year_ = element.curr_year_1) === null || _element$curr_year_ === void 0 ? void 0 : _element$curr_year_.toString().replace(/\s/g, ""));
              if (element.curr_year_2 != "" || element.curr_year_2 != 0) b = Number((_element$curr_year_2 = element.curr_year_2) === null || _element$curr_year_2 === void 0 ? void 0 : _element$curr_year_2.toString().replace(/\s/g, ""));
              element.variance = [a / b - 1] * 100;
              element.variance = Number.parseFloat(element.variance).toFixed(2);
            }
          }
          // console.log({ tab : this[tab] })
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
      return this[tab];
    },
    sommeVerticale: function sommeVerticale(tab) {
      if (tab.length > 0) {
        tab.forEach(function (element) {
          var _element$curr_year_3, _element$curr_year_4;
          element.variance = Number((_element$curr_year_3 = element.curr_year_1) === null || _element$curr_year_3 === void 0 ? void 0 : _element$curr_year_3.toString().replace(/\s/g, "")) + Number((_element$curr_year_4 = element.curr_year_2) === null || _element$curr_year_4 === void 0 ? void 0 : _element$curr_year_4.toString().replace(/\s/g, ""));
        });
      }
      return tab;
    },
    somme: function somme(tab, key, table) {
      var _this9 = this;
      var value = 0;
      tab.forEach(function (el) {
        var _this9$table$el$key;
        value += Number((_this9$table$el$key = _this9[table][el][key]) === null || _this9$table$el$key === void 0 ? void 0 : _this9$table$el$key.toString().replace(/\s/g, ""));
      });
      return value;
    },
    minus: function minus(tab, key, table) {
      var _this0 = this;
      var initval = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var value = initval;
      tab.forEach(function (el) {
        var _this0$table$el$key;
        value -= Number((_this0$table$el$key = _this0[table][el][key]) === null || _this0$table$el$key === void 0 ? void 0 : _this0$table$el$key.toString().replace(/\s/g, ""));
      });
      return value;
    },
    sommeHorizontal: function sommeHorizontal(tab, table) {
      var _this1 = this;
      var res = 0;
      cycle.forEach(function (el) {
        res = _this1.somme(tab, el, table);
      });
      return res;
    },
    formDataVars: function formDataVars(event) {
      this.formDataToBeWatched[event[0]] = event[1];
    },
    updateOther: function updateOther(_ref2) {
      var key = _ref2.key,
        value = _ref2.value;
      this.formDataToBeWatched.years.other[key] = value;
    },
    remplirAnnees: function remplirAnnees() {
      var ref = parseInt(this.annee_referentielle, 10);
      if (isNaN(ref)) {
        console.warn("Année référentielle invalide.");
        return;
      }

      // Remplissage de "other"
      this.formDataToBeWatched.years.other.y = ref;
      this.formDataToBeWatched.years.other.y1 = ref - 1;
      this.formDataToBeWatched.years.other.y2 = ref - 2;
      this.formDataToBeWatched.years.other.y3 = ref + 1;
      this.formDataToBeWatched.years.other.y4 = ref + 2;
      this.formDataToBeWatched.years.other.y5 = ref + 3;

      // Remplissage de "compte_exploitation_prev"
      var compte = {
        y: ref
      };
      for (var i = 1; i <= 7; i++) {
        compte["y".concat(i)] = ref + i;
      }
      this.formDataToBeWatched.years.compte_exploitation_prev = compte;
    }
  },
  watch: {
    formDataToBeWatched: {
      handler: function handler(newVal, oldVal) {
        this.autosaving(newVal, oldVal);
      },
      deep: true,
      immediate: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/memorandum/F11.vue?vue&type=template&id=7ed1ee86&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/memorandum/F11.vue?vue&type=template&id=7ed1ee86&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$formDataToBeWatch, _vm$data_from_f, _vm$formDataToBeWatch2, _vm$formDataToBeWatch3, _vm$formDataToBeWatch4, _vm$formDataToBeWatch5, _vm$formDataToBeWatch6, _vm$formDataToBeWatch7, _vm$formDataToBeWatch8, _vm$formDataToBeWatch9, _vm$formDataToBeWatch0, _vm$formDataToBeWatch1, _vm$formDataToBeWatch10, _vm$formDataToBeWatch11, _vm$formDataToBeWatch12;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    on: {
      contextmenu: function contextmenu($event) {
        return _vm.$refs.menu.open($event, _vm.tb_name);
      }
    }
  }, [_c("div", {
    staticClass: "row bg-light position-relative",
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
  }, [_c("h6", {
    ref: "topdiv",
    staticClass: "head",
    attrs: {
      id: "f13-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Analyse financière\n                        ")]), _vm._v(" "), _c("div", {
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
  }, [_c("span", [_vm._v(" " + _vm._s(_vm.formDataToBeWatched.notes.length) + " ")])])])]) : _vm._e(), _vm._v(" "), _c("BookOpenIcon", {
    staticClass: "custom-class mt-1",
    staticStyle: {
      cursor: "pointer"
    },
    attrs: {
      size: "0.7x"
    },
    on: {
      click: function click($event) {
        return _vm.$modal.show("instruction_analyse_financiere");
      }
    }
  }), _vm._v(" "), _c("airplay-icon", {
    staticClass: "custom-class",
    staticStyle: {
      cursor: "pointer"
    },
    attrs: {
      size: "0.7x"
    },
    on: {
      click: function click($event) {
        return _vm.$modal.show("analyse_financiere");
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
  })], 1)])])]), _vm._v(" "), _vm.isLoding == false && _vm.isFailed == false ? _c("div", {
    staticClass: "row p-0"
  }, [_c("div", {
    staticClass: "col-12 p-0 position-relative"
  }, [_c("div", {
    staticClass: "card-body mb-5 table-responsive"
  }, [_c("div", {
    staticClass: "row"
  }, [((_vm$data_from_f = _vm.data_from_f0) === null || _vm$data_from_f === void 0 ? void 0 : _vm$data_from_f.coming_from_sni) == true ? _c("div", {
    staticClass: "d-flex justify-content-center py-3"
  }, [_c("button", {
    staticClass: "btn shadow-md text-white",
    staticStyle: {
      cursor: "pointer",
      background: "#ee6a00",
      "max-width": "max-content"
    },
    attrs: {
      type: "button",
      name: "button"
    },
    on: {
      click: _vm.reloadData
    }
  }, [_c("i", {
    staticClass: "icofont-refresh"
  }), _vm._v(" Recharger les données depuis SNI\n                                ")])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticStyle: {
      width: "100%",
      height: "100%"
    }
  }, [_c("br"), _vm._v(" "), _vm.allSeen.seen5 ? _c("div", {
    staticClass: "car-body"
  }, [_c("div", {
    staticClass: "relook-header",
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        var _vm$allSeen;
        _vm.allSeen.seen5 = !((_vm$allSeen = _vm.allSeen) !== null && _vm$allSeen !== void 0 && _vm$allSeen.seen5);
      }
    }
  }, [_c("h6", {
    "class": "subdiv" + this.tb_name,
    attrs: {
      id: "garanties-et-supports-à-receuillir"
    }
  }, [_vm._v("\n                                            Tableau des principaux agrégats & ratios\n                                            "), _c("chevron-up-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  }), _vm._v(" "), _c("i", {
    staticClass: "icofont-hand-drag1 manual-mode-icon",
    "class": {
      "automatic-mode-icon": _vm.formDataToBeWatched.modeManuel.principaux_aggregats == false,
      "manual-mode-icon": _vm.formDataToBeWatched.modeManuel.principaux_aggregats
    },
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      title: _vm.formDataToBeWatched.modeManuel.principaux_aggregats ? "Passer en mode automatique" : "Passer en mode manuel"
    },
    on: {
      click: function click($event) {
        $event.stopPropagation();
        return _vm.modeManuel_("principaux_aggregats");
      }
    }
  })], 1)]), _vm._v(" "), ((_vm$formDataToBeWatch2 = _vm.formDataToBeWatched.modeManuel) === null || _vm$formDataToBeWatch2 === void 0 ? void 0 : _vm$formDataToBeWatch2.principaux_aggregats) == false ? _c("div", {
    staticClass: "table-responsive mt-3"
  }, [_vm.isGroupedResultEmpty ? _c("div", {
    staticClass: "col-12 text-danger text-center mt-3"
  }, [_vm._v("\n                                            Aucun ratio disponible. "), _c("br"), _vm._v("Veuillez valider la note de sni ou passer en mode manuel\n                                        ")]) : _c("table", {
    staticClass: "table table-bordered table-striped"
  }, [_c("thead", {
    staticClass: "table table-borderless mb-1"
  }, [_c("tr", {
    staticClass: "table-dark text-center",
    staticStyle: {
      "vertical-align": "middle"
    }
  }, [_c("th", {
    staticClass: "text-nowrap"
  }, [_vm._v("Périodes")]), _vm._v(" "), _c("th", [_c("input-group", {
    staticStyle: {
      "min-width": "50px"
    },
    scopedSlots: _vm._u([{
      key: "input",
      fn: function fn() {
        return [_c("input", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.formDataToBeWatched.years.other.y2,
            expression: "formDataToBeWatched.years.other.y2"
          }],
          staticClass: "form-control bg-blue-force",
          attrs: {
            type: "text",
            maxlength: "4"
          },
          domProps: {
            value: _vm.formDataToBeWatched.years.other.y2
          },
          on: {
            input: function input($event) {
              if ($event.target.composing) return;
              _vm.$set(_vm.formDataToBeWatched.years.other, "y2", $event.target.value);
            }
          }
        })];
      },
      proxy: true
    }, {
      key: "right",
      fn: function fn() {
        return [_vm._v("\n                                                                " + _vm._s("N-2") + "\n                                                            ")];
      },
      proxy: true
    }], null, false, 469687144)
  })], 1), _vm._v(" "), _c("th", [_c("input-group", {
    staticStyle: {
      "min-width": "50px"
    },
    scopedSlots: _vm._u([{
      key: "input",
      fn: function fn() {
        return [_c("input", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.formDataToBeWatched.years.other.y1,
            expression: "formDataToBeWatched.years.other.y1"
          }],
          staticClass: "form-control bg-blue-force",
          attrs: {
            type: "text",
            maxlength: "4"
          },
          domProps: {
            value: _vm.formDataToBeWatched.years.other.y1
          },
          on: {
            input: function input($event) {
              if ($event.target.composing) return;
              _vm.$set(_vm.formDataToBeWatched.years.other, "y1", $event.target.value);
            }
          }
        })];
      },
      proxy: true
    }, {
      key: "right",
      fn: function fn() {
        return [_vm._v("\n                                                                " + _vm._s("N-1") + "\n                                                            ")];
      },
      proxy: true
    }], null, false, 2370951243)
  })], 1), _vm._v(" "), _c("th", [_c("input-group", {
    staticStyle: {
      "min-width": "50px"
    },
    scopedSlots: _vm._u([{
      key: "input",
      fn: function fn() {
        return [_c("input", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.formDataToBeWatched.years.other.y,
            expression: "formDataToBeWatched.years.other.y"
          }],
          staticClass: "form-control bg-blue-force",
          attrs: {
            type: "text",
            maxlength: "4"
          },
          domProps: {
            value: _vm.formDataToBeWatched.years.other.y
          },
          on: {
            input: function input($event) {
              if ($event.target.composing) return;
              _vm.$set(_vm.formDataToBeWatched.years.other, "y", $event.target.value);
            }
          }
        })];
      },
      proxy: true
    }, {
      key: "right",
      fn: function fn() {
        return [_vm._v("\n                                                                " + _vm._s("N") + "\n                                                            ")];
      },
      proxy: true
    }], null, false, 1533048279)
  })], 1), _vm._v(" "), _c("th", [_vm._v("Var. N/N-1")]), _vm._v(" "), _c("th", [_vm._v("Var. N-1/N-2")])])]), _vm._v(" "), _vm._l(_vm.groupedByCluster, function (elements, clusterName) {
    return [_c("tbody", [_c("tr", {
      staticClass: "table-secondary"
    }, [_c("th", {
      staticStyle: {
        "text-transform": "uppercase"
      },
      attrs: {
        colspan: "6"
      }
    }, [_vm._v("\n                                                    " + _vm._s(_vm.getFormattedFinancialNameV2(clusterName)) + "\n                                                    ")])]), _vm._v(" "), _vm._l(elements, function (element, index) {
      return _c("tr", {
        key: "".concat(clusterName, "-").concat(index)
      }, [_c("td", [_c("label", [_vm._v(_vm._s(element.LIB))])]), _vm._v(" "), _c("td", [_c(_vm.getInputComponent(element.type), {
        tag: "component",
        staticClass: "form-control ajust-width",
        attrs: {
          value: element.n,
          disabled: _vm.no_modify_data,
          "float": _vm.isFloatLike(element.type),
          percentage: _vm.isPercentage(element.type)
        },
        on: {
          input: _vm.handleInput
        },
        model: {
          value: element.n,
          callback: function callback($$v) {
            _vm.$set(element, "n", $$v);
          },
          expression: "element.n"
        }
      })], 1), _vm._v(" "), _c("td", [_c(_vm.getInputComponent(element.type), {
        tag: "component",
        staticClass: "form-control ajust-width",
        attrs: {
          value: element.n1,
          disabled: _vm.no_modify_data,
          "float": _vm.isFloatLike(element.type),
          percentage: _vm.isPercentage(element.type)
        },
        on: {
          input: _vm.handleInput
        },
        model: {
          value: element.n1,
          callback: function callback($$v) {
            _vm.$set(element, "n1", $$v);
          },
          expression: "element.n1"
        }
      })], 1), _vm._v(" "), _c("td", [_c(_vm.getInputComponent(element.type), {
        tag: "component",
        staticClass: "form-control ajust-width",
        attrs: {
          value: element.n2,
          disabled: _vm.no_modify_data,
          "float": _vm.isFloatLike(element.type),
          percentage: _vm.isPercentage(element.type)
        },
        on: {
          input: _vm.handleInput
        },
        model: {
          value: element.n2,
          callback: function callback($$v) {
            _vm.$set(element, "n2", $$v);
          },
          expression: "element.n2"
        }
      })], 1), _vm._v(" "), _c("td", [_c("input-group", {
        staticStyle: {
          width: "135px"
        },
        scopedSlots: _vm._u([{
          key: "input",
          fn: function fn() {
            return [_c("currency-input", {
              staticClass: "form-control",
              attrs: {
                "default-typing": false,
                value: _vm.ratio(element.n2, element.n1),
                "float": "",
                percentage: "",
                disabled: _vm.no_modify_data
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
      })], 1), _vm._v(" "), _c("td", [_c("input-group", {
        staticStyle: {
          width: "135px"
        },
        scopedSlots: _vm._u([{
          key: "input",
          fn: function fn() {
            return [_c("currency-input", {
              staticClass: "form-control",
              attrs: {
                "default-typing": false,
                value: _vm.ratio(element.n1, element.n),
                "float": "",
                percentage: "",
                disabled: _vm.no_modify_data
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
      })], 1)]);
    })], 2)];
  }), _vm._v(" "), _c("br"), _vm._v(" "), _c("br")], 2)]) : _vm._e(), _vm._v(" "), ((_vm$formDataToBeWatch3 = _vm.formDataToBeWatched.modeManuel) === null || _vm$formDataToBeWatch3 === void 0 ? void 0 : _vm$formDataToBeWatch3.principaux_aggregats) == false && !_vm.isGroupedResultEmpty ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "col-md-12 mt-0 mb-1"
  }, [_vm._m(0), _vm._v(" "), _c("vue-editor", {
    attrs: {
      id: "commentaire_compte_principaux_aggregats"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.commentaire_compte_principaux_aggregats,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "commentaire_compte_principaux_aggregats", $$v);
      },
      expression: "formDataToBeWatched.commentaire_compte_principaux_aggregats"
    }
  })], 1)]) : _vm._e(), _vm._v(" "), (_vm$formDataToBeWatch4 = _vm.formDataToBeWatched.modeManuel) !== null && _vm$formDataToBeWatch4 !== void 0 && _vm$formDataToBeWatch4.principaux_aggregats ? _c("div", [_c("STM1", {
    attrs: {
      slug: (_vm$formDataToBeWatch5 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch5 === void 0 || (_vm$formDataToBeWatch5 = _vm$formDataToBeWatch5.modeManuelVars) === null || _vm$formDataToBeWatch5 === void 0 ? void 0 : _vm$formDataToBeWatch5.principaux_aggregats,
      slug_name: "principaux_aggregats"
    }
  })], 1) : _vm._e()]) : _c("div", {
    staticClass: "car-body"
  }, [_c("div", {
    staticClass: "relook-header",
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        var _vm$allSeen2;
        _vm.allSeen.seen5 = !((_vm$allSeen2 = _vm.allSeen) !== null && _vm$allSeen2 !== void 0 && _vm$allSeen2.seen5);
      }
    }
  }, [_c("h6", {
    "class": "subdiv" + this.tb_name,
    attrs: {
      id: "garanties-et-supports-à-receuillir"
    }
  }, [_vm._v("\n                                            Tableau des principaux agrégats & ratios\n                                            "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "mb-2"
  })]), _vm._v(" "), _vm.allSeen.seen3 ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.allSeen.seen3 = !_vm.allSeen.seen3;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "réalisation"
    }
  }, [_vm._v("\n                                        Réalisation\n                                        "), _c("i", {
    staticClass: "icofont icofont-rounded-up",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    }
  }), _vm._v(" "), _c("i", {
    staticClass: "icofont-hand-drag1",
    "class": {
      "automatic-mode-icon": _vm.formDataToBeWatched.modeManuel.realisation == false,
      "manual-mode-icon": _vm.formDataToBeWatched.modeManuel.realisation
    },
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      title: _vm.formDataToBeWatched.modeManuel.realisation ? "Passer en mode automatique" : "Passer en mode manuel"
    },
    on: {
      click: function click($event) {
        $event.stopPropagation();
        return _vm.modeManuel_("realisation");
      }
    }
  })])]), _vm._v(" "), ((_vm$formDataToBeWatch6 = _vm.formDataToBeWatched.modeManuel) === null || _vm$formDataToBeWatch6 === void 0 ? void 0 : _vm$formDataToBeWatch6.realisation) == false ? _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-borderless mb-1"
  }, [_c("thead", [_c("tr", {
    staticClass: "fw-bold"
  }, [_vm._m(1), _vm._v(" "), _c("td", {
    attrs: {
      colspan: "2"
    }
  }, [_c("div", {
    staticClass: "d-flex align-items-baseline text-nowrap"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Du :")]), _vm._v(" "), _c("date-input", {
    staticClass: "mx-3",
    attrs: {
      value: _vm.formDataToBeWatched.date_debut,
      id: "date_debut"
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1)]), _vm._v(" "), _c("td", {
    attrs: {
      colspan: "2"
    }
  }, [_c("div", {
    staticClass: "d-flex align-items-baseline text-nowrap"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Au :")]), _vm._v(" "), _c("date-input", {
    staticClass: "mx-3",
    attrs: {
      value: _vm.formDataToBeWatched.date_fin,
      id: "date_fin"
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1)])])]), _vm._v(" "), _c("tbody", _vm._l(_vm.realisation, function (realization, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_c("label", {
      attrs: {
        "for": ""
      }
    }, [_vm._v("\n                                                        " + _vm._s(realization.libelle) + "\n                                                    ")])]), _vm._v(" "), _c("td", {
      attrs: {
        colspan: "4"
      }
    }, [_c("currency-input", {
      attrs: {
        "default-typing": false
      },
      on: {
        input: _vm.handleInput
      },
      model: {
        value: realization.montant,
        callback: function callback($$v) {
          _vm.$set(realization, "montant", $$v);
        },
        expression: "realization.montant"
      }
    })], 1)]);
  }), 0)])]) : _vm._e(), _vm._v(" "), (_vm$formDataToBeWatch7 = _vm.formDataToBeWatched.modeManuel) !== null && _vm$formDataToBeWatch7 !== void 0 && _vm$formDataToBeWatch7.realisation ? _c("div", [_c("STM1", {
    attrs: {
      slug: (_vm$formDataToBeWatch8 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch8 === void 0 || (_vm$formDataToBeWatch8 = _vm$formDataToBeWatch8.modeManuelVars) === null || _vm$formDataToBeWatch8 === void 0 ? void 0 : _vm$formDataToBeWatch8.realisation,
      slug_name: "realisation"
    }
  })], 1) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "col-md-12 mt-0 mb-4"
  }, [_vm._m(2), _vm._v(" "), _c("vue-editor", {
    attrs: {
      id: "commentaire_realsiation"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.commentaire_realsiation,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "commentaire_realsiation", $$v);
      },
      expression: "formDataToBeWatched.commentaire_realsiation"
    }
  })], 1)])]) : _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.allSeen.seen3 = !_vm.allSeen.seen3;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "réalisation"
    }
  }, [_vm._v("\n                                        Réalisation "), _c("i", {
    staticClass: "icofont icofont-rounded-down",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    }
  })])])]), _vm._v(" "), _vm.allSeen.seen5 ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.allSeen.seen5 = !_vm.allSeen.seen5;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "compte-d'exploitation-prévisionnel"
    }
  }, [_vm._v("\n                                        Analyse des projections financières (Pour les financements d'investissements)\n                                        "), _c("i", {
    staticClass: "icofont icofont-rounded-up",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "col-md-12 mt-0 mb-4"
  }, [_c("vue-editor", {
    attrs: {
      id: "commentaire_analyse_projections_financiere"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.commentaire_commentaire_analyse_projections_financiere,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "commentaire_commentaire_analyse_projections_financiere", $$v);
      },
      expression: "formDataToBeWatched.commentaire_commentaire_analyse_projections_financiere"
    }
  })], 1)])]) : _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.allSeen.seen5 = !_vm.allSeen.seen5;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "compte-d'exploitation-prévisionnel"
    }
  }, [_vm._v("\n                                        Analyse des projections financières (Pour les financements d'investissements) "), _c("i", {
    staticClass: "icofont icofont-rounded-down",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    }
  })])])]), _vm._v(" "), _vm.allSeen.seen7 ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.allSeen.seen7 = !_vm.allSeen.seen7;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "compte-d'exploitation-prévisionnel"
    }
  }, [_vm._v("\n                                        Compte d'exploitation prévisionnel\n                                        "), _c("i", {
    staticClass: "icofont icofont-rounded-up",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    }
  }), _vm._v(" "), _c("i", {
    staticClass: "icofont-hand-drag1",
    "class": {
      "automatic-mode-icon": _vm.formDataToBeWatched.modeManuel.exploitation_prev_manuel == false,
      "manual-mode-icon": _vm.formDataToBeWatched.modeManuel.exploitation_prev_manuel
    },
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      title: _vm.formDataToBeWatched.modeManuel.exploitation_prev_manuel ? "Passer en mode automatique" : "Passer en mode manuel"
    },
    on: {
      click: function click($event) {
        $event.stopPropagation();
        return _vm.modeManuel_("exploitation_prev_manuel");
      }
    }
  })])]), _vm._v(" "), ((_vm$formDataToBeWatch9 = _vm.formDataToBeWatched.modeManuel) === null || _vm$formDataToBeWatch9 === void 0 ? void 0 : _vm$formDataToBeWatch9.exploitation_prev_manuel) == false ? _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-borderless mb-1"
  }, [_c("thead", [_c("tr", {
    staticClass: "fw-bold text-center",
    staticStyle: {
      "vertical-align": "middle"
    }
  }, [_vm._m(3), _vm._v(" "), _c("td", [_c("input-group", {
    staticStyle: {
      "min-width": "50px"
    },
    scopedSlots: _vm._u([{
      key: "input",
      fn: function fn() {
        return [_c("input", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.formDataToBeWatched.years.compte_exploitation_prev.y1,
            expression: "formDataToBeWatched.years.compte_exploitation_prev.y1"
          }],
          staticClass: "form-control bg-blue",
          attrs: {
            type: "text",
            maxlength: "4"
          },
          domProps: {
            value: _vm.formDataToBeWatched.years.compte_exploitation_prev.y1
          },
          on: {
            input: function input($event) {
              if ($event.target.composing) return;
              _vm.$set(_vm.formDataToBeWatched.years.compte_exploitation_prev, "y1", $event.target.value);
            }
          }
        })];
      },
      proxy: true
    }, {
      key: "right",
      fn: function fn() {
        return [_vm._v("\n                                                            " + _vm._s("N+1") + "\n                                                        ")];
      },
      proxy: true
    }], null, false, 924763997)
  })], 1), _vm._v(" "), _c("td", [_c("input-group", {
    staticStyle: {
      "min-width": "50px"
    },
    scopedSlots: _vm._u([{
      key: "input",
      fn: function fn() {
        return [_c("input", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.formDataToBeWatched.years.compte_exploitation_prev.y2,
            expression: "formDataToBeWatched.years.compte_exploitation_prev.y2"
          }],
          staticClass: "form-control bg-blue",
          attrs: {
            type: "text",
            maxlength: "4"
          },
          domProps: {
            value: _vm.formDataToBeWatched.years.compte_exploitation_prev.y2
          },
          on: {
            input: function input($event) {
              if ($event.target.composing) return;
              _vm.$set(_vm.formDataToBeWatched.years.compte_exploitation_prev, "y2", $event.target.value);
            }
          }
        })];
      },
      proxy: true
    }, {
      key: "right",
      fn: function fn() {
        return [_vm._v("\n                                                            " + _vm._s("N+2") + "\n                                                        ")];
      },
      proxy: true
    }], null, false, 884061246)
  })], 1), _vm._v(" "), _c("td", [_c("input-group", {
    staticStyle: {
      "min-width": "50px"
    },
    scopedSlots: _vm._u([{
      key: "input",
      fn: function fn() {
        return [_c("input", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.formDataToBeWatched.years.compte_exploitation_prev.y3,
            expression: "formDataToBeWatched.years.compte_exploitation_prev.y3"
          }],
          staticClass: "form-control bg-blue",
          attrs: {
            type: "text",
            maxlength: "4"
          },
          domProps: {
            value: _vm.formDataToBeWatched.years.compte_exploitation_prev.y3
          },
          on: {
            input: function input($event) {
              if ($event.target.composing) return;
              _vm.$set(_vm.formDataToBeWatched.years.compte_exploitation_prev, "y3", $event.target.value);
            }
          }
        })];
      },
      proxy: true
    }, {
      key: "right",
      fn: function fn() {
        return [_vm._v("\n                                                            " + _vm._s("N+3") + "\n                                                        ")];
      },
      proxy: true
    }], null, false, 1629262239)
  })], 1), _vm._v(" "), _c("td", [_c("input-group", {
    staticStyle: {
      "min-width": "50px"
    },
    scopedSlots: _vm._u([{
      key: "input",
      fn: function fn() {
        return [_c("input", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.formDataToBeWatched.years.compte_exploitation_prev.y4,
            expression: "formDataToBeWatched.years.compte_exploitation_prev.y4"
          }],
          staticClass: "form-control bg-blue",
          attrs: {
            type: "text",
            maxlength: "4"
          },
          domProps: {
            value: _vm.formDataToBeWatched.years.compte_exploitation_prev.y4
          },
          on: {
            input: function input($event) {
              if ($event.target.composing) return;
              _vm.$set(_vm.formDataToBeWatched.years.compte_exploitation_prev, "y4", $event.target.value);
            }
          }
        })];
      },
      proxy: true
    }, {
      key: "right",
      fn: function fn() {
        return [_vm._v("\n                                                            " + _vm._s("N+4") + "\n                                                        ")];
      },
      proxy: true
    }], null, false, 1892263288)
  })], 1), _vm._v(" "), _c("td", [_c("input-group", {
    staticStyle: {
      "min-width": "50px"
    },
    scopedSlots: _vm._u([{
      key: "input",
      fn: function fn() {
        return [_c("input", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.formDataToBeWatched.years.compte_exploitation_prev.y5,
            expression: "formDataToBeWatched.years.compte_exploitation_prev.y5"
          }],
          staticClass: "form-control bg-blue",
          attrs: {
            type: "text",
            maxlength: "4"
          },
          domProps: {
            value: _vm.formDataToBeWatched.years.compte_exploitation_prev.y5
          },
          on: {
            input: function input($event) {
              if ($event.target.composing) return;
              _vm.$set(_vm.formDataToBeWatched.years.compte_exploitation_prev, "y5", $event.target.value);
            }
          }
        })];
      },
      proxy: true
    }, {
      key: "right",
      fn: function fn() {
        return [_vm._v("\n                                                            " + _vm._s("N+5") + "\n                                                        ")];
      },
      proxy: true
    }], null, false, 1238181849)
  })], 1), _vm._v(" "), _c("td", [_c("input-group", {
    staticStyle: {
      "min-width": "50px"
    },
    scopedSlots: _vm._u([{
      key: "input",
      fn: function fn() {
        return [_c("input", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.formDataToBeWatched.years.compte_exploitation_prev.y6,
            expression: "formDataToBeWatched.years.compte_exploitation_prev.y6"
          }],
          staticClass: "form-control bg-blue",
          attrs: {
            type: "text",
            maxlength: "4"
          },
          domProps: {
            value: _vm.formDataToBeWatched.years.compte_exploitation_prev.y6
          },
          on: {
            input: function input($event) {
              if ($event.target.composing) return;
              _vm.$set(_vm.formDataToBeWatched.years.compte_exploitation_prev, "y6", $event.target.value);
            }
          }
        })];
      },
      proxy: true
    }, {
      key: "right",
      fn: function fn() {
        return [_vm._v("\n                                                            " + _vm._s("N+6") + "\n                                                        ")];
      },
      proxy: true
    }], null, false, 1197479098)
  })], 1), _vm._v(" "), _c("td", [_c("input-group", {
    staticStyle: {
      "min-width": "50px"
    },
    scopedSlots: _vm._u([{
      key: "input",
      fn: function fn() {
        return [_c("input", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.formDataToBeWatched.years.compte_exploitation_prev.y7,
            expression: "formDataToBeWatched.years.compte_exploitation_prev.y7"
          }],
          staticClass: "form-control bg-blue",
          attrs: {
            type: "text",
            maxlength: "4"
          },
          domProps: {
            value: _vm.formDataToBeWatched.years.compte_exploitation_prev.y7
          },
          on: {
            input: function input($event) {
              if ($event.target.composing) return;
              _vm.$set(_vm.formDataToBeWatched.years.compte_exploitation_prev, "y7", $event.target.value);
            }
          }
        })];
      },
      proxy: true
    }, {
      key: "right",
      fn: function fn() {
        return [_vm._v("\n                                                            " + _vm._s("N+7") + "\n                                                        ")];
      },
      proxy: true
    }], null, false, 1942680091)
  })], 1)])]), _vm._v(" "), _c("tbody", _vm._l(_vm.compte_exploitation_prev, function (compte_exploitation, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_c("label", {
      attrs: {
        "for": ""
      }
    }, [_vm._v("\n                                                        " + _vm._s(compte_exploitation.libelle) + "\n                                                    ")])]), _vm._v(" "), _c("td", [_c("currency-input", {
      staticClass: "cpte_ex_prev",
      attrs: {
        "default-typing": false
      },
      on: {
        input: _vm.handleInput
      },
      model: {
        value: compte_exploitation.curr_year_2,
        callback: function callback($$v) {
          _vm.$set(compte_exploitation, "curr_year_2", $$v);
        },
        expression: "compte_exploitation.curr_year_2"
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
      staticClass: "cpte_ex_prev",
      attrs: {
        "default-typing": false
      },
      on: {
        input: _vm.handleInput
      },
      model: {
        value: compte_exploitation.curr_year_1,
        callback: function callback($$v) {
          _vm.$set(compte_exploitation, "curr_year_1", $$v);
        },
        expression: "compte_exploitation.curr_year_1"
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
      staticClass: "cpte_ex_prev",
      attrs: {
        "default-typing": false
      },
      on: {
        input: _vm.handleInput
      },
      model: {
        value: compte_exploitation.current_year,
        callback: function callback($$v) {
          _vm.$set(compte_exploitation, "current_year", $$v);
        },
        expression: "compte_exploitation.current_year"
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
      staticClass: "cpte_ex_prev",
      attrs: {
        "default-typing": false
      },
      on: {
        input: _vm.handleInput
      },
      model: {
        value: compte_exploitation.an_ulterieur_1,
        callback: function callback($$v) {
          _vm.$set(compte_exploitation, "an_ulterieur_1", $$v);
        },
        expression: "compte_exploitation.an_ulterieur_1"
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
      staticClass: "cpte_ex_prev",
      attrs: {
        "default-typing": false
      },
      on: {
        input: _vm.handleInput
      },
      model: {
        value: compte_exploitation.an_ulterieur_2,
        callback: function callback($$v) {
          _vm.$set(compte_exploitation, "an_ulterieur_2", $$v);
        },
        expression: "compte_exploitation.an_ulterieur_2"
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
      staticClass: "cpte_ex_prev",
      attrs: {
        "default-typing": false
      },
      on: {
        input: _vm.handleInput
      },
      model: {
        value: compte_exploitation.an_ulterieur_3,
        callback: function callback($$v) {
          _vm.$set(compte_exploitation, "an_ulterieur_3", $$v);
        },
        expression: "compte_exploitation.an_ulterieur_3"
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
      staticClass: "cpte_ex_prev",
      attrs: {
        "default-typing": false
      },
      on: {
        input: _vm.handleInput
      },
      model: {
        value: compte_exploitation.an_ulterieur_4,
        callback: function callback($$v) {
          _vm.$set(compte_exploitation, "an_ulterieur_4", $$v);
        },
        expression: "compte_exploitation.an_ulterieur_4"
      }
    })], 1)]);
  }), 0)])]) : _vm._e(), _vm._v(" "), (_vm$formDataToBeWatch0 = _vm.formDataToBeWatched.modeManuel) !== null && _vm$formDataToBeWatch0 !== void 0 && _vm$formDataToBeWatch0.exploitation_prev_manuel ? _c("div", [_c("STM1", {
    attrs: {
      slug: (_vm$formDataToBeWatch1 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch1 === void 0 || (_vm$formDataToBeWatch1 = _vm$formDataToBeWatch1.modeManuelVars) === null || _vm$formDataToBeWatch1 === void 0 ? void 0 : _vm$formDataToBeWatch1.exploitation_prev_manuel,
      slug_name: "exploitation_prev_manuel"
    }
  })], 1) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "col-md-12 mt-0 mb-4"
  }, [_vm._m(4), _vm._v(" "), _c("vue-editor", {
    attrs: {
      id: "commentaire_compte_exploitation_previsionnel"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.commentaire_compte_exploitation_previsionnel,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "commentaire_compte_exploitation_previsionnel", $$v);
      },
      expression: "formDataToBeWatched.commentaire_compte_exploitation_previsionnel"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "col-md-12 mt-0 mb-4"
  }, [_vm._m(5), _vm._v(" "), _c("vue-editor", {
    attrs: {
      id: "commentaire_progression_charge"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.commentaire_progression_charge,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "commentaire_progression_charge", $$v);
      },
      expression: "formDataToBeWatched.commentaire_progression_charge"
    }
  })], 1)])]) : _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.allSeen.seen7 = !_vm.allSeen.seen7;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "compte-d'exploitation-prévisionnel"
    }
  }, [_vm._v("\n                                        Compte d'exploitation prévisionnel "), _c("i", {
    staticClass: "icofont icofont-rounded-down",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    }
  })])])]), _vm._v(" "), _vm.allSeen.seen9 ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.allSeen.seen9 = !_vm.allSeen.seen9;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "test-de-stress"
    }
  }, [_vm._v("\n                                        Test de stress\n                                        "), _c("i", {
    staticClass: "icofont icofont-rounded-up",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    }
  }), _vm._v(" "), _c("i", {
    staticClass: "icofont-hand-drag1 manual-mode-icon",
    "class": {
      "automatic-mode-icon": _vm.formDataToBeWatched.modeManuel.test_stress_manuel == false,
      "manual-mode-icon": _vm.formDataToBeWatched.modeManuel.test_stress_manuel
    },
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      title: _vm.formDataToBeWatched.modeManuel.test_stress_manuel ? "Passer en mode automatique" : "Passer en mode manuel"
    },
    on: {
      click: function click($event) {
        $event.stopPropagation();
        return _vm.modeManuel_("test_stress_manuel");
      }
    }
  })])]), _vm._v(" "), _vm.formDataToBeWatched.modeManuel.test_stress_manuel == false ? _c("div", [_vm._m(6), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-borderless mb-1"
  }, [_c("thead", [_c("tr", {
    staticClass: "fw-bold text-center",
    staticStyle: {
      "vertical-align": "middle"
    }
  }, [_vm._m(7), _vm._v(" "), _c("td", [_c("input-group", {
    staticStyle: {
      "min-width": "50px"
    },
    scopedSlots: _vm._u([{
      key: "input",
      fn: function fn() {
        return [_c("input", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.formDataToBeWatched.years.other.y2,
            expression: "formDataToBeWatched.years.other.y2"
          }],
          staticClass: "form-control bg-blue",
          attrs: {
            type: "text",
            maxlength: "4"
          },
          domProps: {
            value: _vm.formDataToBeWatched.years.other.y2
          },
          on: {
            input: function input($event) {
              if ($event.target.composing) return;
              _vm.$set(_vm.formDataToBeWatched.years.other, "y2", $event.target.value);
            }
          }
        })];
      },
      proxy: true
    }, {
      key: "right",
      fn: function fn() {
        return [_vm._v("\n                                                                " + _vm._s("N-2") + "\n                                                            ")];
      },
      proxy: true
    }], null, false, 2217373528)
  })], 1), _vm._v(" "), _c("td", [_c("input-group", {
    staticStyle: {
      "min-width": "50px"
    },
    scopedSlots: _vm._u([{
      key: "input",
      fn: function fn() {
        return [_c("input", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.formDataToBeWatched.years.other.y1,
            expression: "formDataToBeWatched.years.other.y1"
          }],
          staticClass: "form-control bg-blue",
          attrs: {
            type: "text",
            maxlength: "4"
          },
          domProps: {
            value: _vm.formDataToBeWatched.years.other.y1
          },
          on: {
            input: function input($event) {
              if ($event.target.composing) return;
              _vm.$set(_vm.formDataToBeWatched.years.other, "y1", $event.target.value);
            }
          }
        })];
      },
      proxy: true
    }, {
      key: "right",
      fn: function fn() {
        return [_vm._v("\n                                                                " + _vm._s("N-1") + "\n                                                            ")];
      },
      proxy: true
    }], null, false, 754985339)
  })], 1), _vm._v(" "), _c("td", [_c("input-group", {
    staticStyle: {
      "min-width": "50px"
    },
    scopedSlots: _vm._u([{
      key: "input",
      fn: function fn() {
        return [_c("input", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.formDataToBeWatched.years.other.y,
            expression: "formDataToBeWatched.years.other.y"
          }],
          staticClass: "form-control bg-blue",
          attrs: {
            type: "text",
            maxlength: "4"
          },
          domProps: {
            value: _vm.formDataToBeWatched.years.other.y
          },
          on: {
            input: function input($event) {
              if ($event.target.composing) return;
              _vm.$set(_vm.formDataToBeWatched.years.other, "y", $event.target.value);
            }
          }
        })];
      },
      proxy: true
    }, {
      key: "right",
      fn: function fn() {
        return [_vm._v("\n                                                                " + _vm._s("N") + "\n                                                            ")];
      },
      proxy: true
    }], null, false, 884210919)
  })], 1), _vm._v(" "), _c("td", [_c("input-group", {
    staticStyle: {
      "min-width": "50px"
    },
    scopedSlots: _vm._u([{
      key: "input",
      fn: function fn() {
        return [_c("input", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.formDataToBeWatched.years.other.y4,
            expression: "formDataToBeWatched.years.other.y4"
          }],
          staticClass: "form-control bg-blue",
          attrs: {
            type: "text",
            maxlength: "4"
          },
          domProps: {
            value: _vm.formDataToBeWatched.years.other.y4
          },
          on: {
            input: function input($event) {
              if ($event.target.composing) return;
              _vm.$set(_vm.formDataToBeWatched.years.other, "y4", $event.target.value);
            }
          }
        })];
      },
      proxy: true
    }, {
      key: "right",
      fn: function fn() {
        return [_vm._v("\n                                                                " + _vm._s("N+1") + "\n                                                            ")];
      },
      proxy: true
    }], null, false, 4257165085)
  })], 1), _vm._v(" "), _c("td", [_c("input-group", {
    staticStyle: {
      "min-width": "50px"
    },
    scopedSlots: _vm._u([{
      key: "input",
      fn: function fn() {
        return [_c("input", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.formDataToBeWatched.years.other.y5,
            expression: "formDataToBeWatched.years.other.y5"
          }],
          staticClass: "form-control bg-blue",
          attrs: {
            type: "text",
            maxlength: "4"
          },
          domProps: {
            value: _vm.formDataToBeWatched.years.other.y5
          },
          on: {
            input: function input($event) {
              if ($event.target.composing) return;
              _vm.$set(_vm.formDataToBeWatched.years.other, "y5", $event.target.value);
            }
          }
        })];
      },
      proxy: true
    }, {
      key: "right",
      fn: function fn() {
        return [_vm._v("\n                                                                " + _vm._s("N+2") + "\n                                                            ")];
      },
      proxy: true
    }], null, false, 1658905918)
  })], 1)])]), _vm._v(" "), _c("tbody", _vm._l(_vm.testStress25, function (test_25, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_c("label", {
      attrs: {
        "for": ""
      }
    }, [_vm._v("\n                                                            " + _vm._s(test_25.libelle) + "\n                                                        ")])]), _vm._v(" "), _c("td", [_c("currency-input", {
      attrs: {
        "default-typing": false,
        disabled: _vm.disabledCel(index)
      },
      on: {
        input: _vm.handleInput
      },
      model: {
        value: test_25.curr_year_2,
        callback: function callback($$v) {
          _vm.$set(test_25, "curr_year_2", $$v);
        },
        expression: "test_25.curr_year_2"
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
      attrs: {
        "default-typing": false,
        disabled: _vm.disabledCel(index)
      },
      on: {
        input: _vm.handleInput
      },
      model: {
        value: test_25.curr_year_1,
        callback: function callback($$v) {
          _vm.$set(test_25, "curr_year_1", $$v);
        },
        expression: "test_25.curr_year_1"
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
      attrs: {
        "default-typing": false,
        disabled: _vm.disabledCel(index)
      },
      on: {
        input: _vm.handleInput
      },
      model: {
        value: test_25.current_year,
        callback: function callback($$v) {
          _vm.$set(test_25, "current_year", $$v);
        },
        expression: "test_25.current_year"
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
      attrs: {
        "default-typing": false,
        disabled: _vm.disabledCel(index)
      },
      on: {
        input: _vm.handleInput
      },
      model: {
        value: test_25.an_ulterieur_1,
        callback: function callback($$v) {
          _vm.$set(test_25, "an_ulterieur_1", $$v);
        },
        expression: "test_25.an_ulterieur_1"
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
      attrs: {
        "default-typing": false,
        disabled: _vm.disabledCel(index)
      },
      on: {
        input: _vm.handleInput
      },
      model: {
        value: test_25.an_ulterieur_2,
        callback: function callback($$v) {
          _vm.$set(test_25, "an_ulterieur_2", $$v);
        },
        expression: "test_25.an_ulterieur_2"
      }
    })], 1)]);
  }), 0)])]), _vm._v(" "), _vm._m(8), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-borderless mb-1"
  }, [_c("thead", [_c("tr", {
    staticClass: "fw-bold text-center",
    staticStyle: {
      "vertical-align": "middle"
    }
  }, [_vm._m(9), _vm._v(" "), _c("td", [_c("input-group", {
    staticStyle: {
      "min-width": "50px"
    },
    scopedSlots: _vm._u([{
      key: "input",
      fn: function fn() {
        return [_c("input", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.formDataToBeWatched.years.other.y2,
            expression: "formDataToBeWatched.years.other.y2"
          }],
          staticClass: "form-control bg-blue",
          attrs: {
            type: "text",
            maxlength: "4"
          },
          domProps: {
            value: _vm.formDataToBeWatched.years.other.y2
          },
          on: {
            input: function input($event) {
              if ($event.target.composing) return;
              _vm.$set(_vm.formDataToBeWatched.years.other, "y2", $event.target.value);
            }
          }
        })];
      },
      proxy: true
    }, {
      key: "right",
      fn: function fn() {
        return [_vm._v("\n                                                                " + _vm._s("N-2") + "\n                                                            ")];
      },
      proxy: true
    }], null, false, 2217373528)
  })], 1), _vm._v(" "), _c("td", [_c("input-group", {
    staticStyle: {
      "min-width": "50px"
    },
    scopedSlots: _vm._u([{
      key: "input",
      fn: function fn() {
        return [_c("input", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.formDataToBeWatched.years.other.y1,
            expression: "formDataToBeWatched.years.other.y1"
          }],
          staticClass: "form-control bg-blue",
          attrs: {
            type: "text",
            maxlength: "4"
          },
          domProps: {
            value: _vm.formDataToBeWatched.years.other.y1
          },
          on: {
            input: function input($event) {
              if ($event.target.composing) return;
              _vm.$set(_vm.formDataToBeWatched.years.other, "y1", $event.target.value);
            }
          }
        })];
      },
      proxy: true
    }, {
      key: "right",
      fn: function fn() {
        return [_vm._v("\n                                                                " + _vm._s("N-1") + "\n                                                            ")];
      },
      proxy: true
    }], null, false, 754985339)
  })], 1), _vm._v(" "), _c("td", [_c("input-group", {
    staticStyle: {
      "min-width": "50px"
    },
    scopedSlots: _vm._u([{
      key: "input",
      fn: function fn() {
        return [_c("input", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.formDataToBeWatched.years.other.y,
            expression: "formDataToBeWatched.years.other.y"
          }],
          staticClass: "form-control bg-blue",
          attrs: {
            type: "text",
            maxlength: "4"
          },
          domProps: {
            value: _vm.formDataToBeWatched.years.other.y
          },
          on: {
            input: function input($event) {
              if ($event.target.composing) return;
              _vm.$set(_vm.formDataToBeWatched.years.other, "y", $event.target.value);
            }
          }
        })];
      },
      proxy: true
    }, {
      key: "right",
      fn: function fn() {
        return [_vm._v("\n                                                                " + _vm._s("N") + "\n                                                            ")];
      },
      proxy: true
    }], null, false, 884210919)
  })], 1), _vm._v(" "), _c("td", [_c("input-group", {
    staticStyle: {
      "min-width": "50px"
    },
    scopedSlots: _vm._u([{
      key: "input",
      fn: function fn() {
        return [_c("input", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.formDataToBeWatched.years.other.y4,
            expression: "formDataToBeWatched.years.other.y4"
          }],
          staticClass: "form-control bg-blue",
          attrs: {
            type: "text",
            maxlength: "4"
          },
          domProps: {
            value: _vm.formDataToBeWatched.years.other.y4
          },
          on: {
            input: function input($event) {
              if ($event.target.composing) return;
              _vm.$set(_vm.formDataToBeWatched.years.other, "y4", $event.target.value);
            }
          }
        })];
      },
      proxy: true
    }, {
      key: "right",
      fn: function fn() {
        return [_vm._v("\n                                                                " + _vm._s("N+1") + "\n                                                            ")];
      },
      proxy: true
    }], null, false, 4257165085)
  })], 1), _vm._v(" "), _c("td", [_c("input-group", {
    staticStyle: {
      "min-width": "50px"
    },
    scopedSlots: _vm._u([{
      key: "input",
      fn: function fn() {
        return [_c("input", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.formDataToBeWatched.years.other.y5,
            expression: "formDataToBeWatched.years.other.y5"
          }],
          staticClass: "form-control bg-blue",
          attrs: {
            type: "text",
            maxlength: "4"
          },
          domProps: {
            value: _vm.formDataToBeWatched.years.other.y5
          },
          on: {
            input: function input($event) {
              if ($event.target.composing) return;
              _vm.$set(_vm.formDataToBeWatched.years.other, "y5", $event.target.value);
            }
          }
        })];
      },
      proxy: true
    }, {
      key: "right",
      fn: function fn() {
        return [_vm._v("\n                                                                " + _vm._s("N+2") + "\n                                                            ")];
      },
      proxy: true
    }], null, false, 1658905918)
  })], 1)])]), _vm._v(" "), _c("tbody", _vm._l(_vm.testStress50, function (test_50, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_c("label", {
      attrs: {
        "for": ""
      }
    }, [_vm._v("\n                                                            " + _vm._s(test_50.libelle) + "\n                                                        ")])]), _vm._v(" "), _c("td", [_c("currency-input", {
      attrs: {
        "default-typing": false,
        disabled: _vm.disabledCel(index)
      },
      on: {
        input: _vm.handleInput
      },
      model: {
        value: test_50.curr_year_2,
        callback: function callback($$v) {
          _vm.$set(test_50, "curr_year_2", $$v);
        },
        expression: "test_50.curr_year_2"
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
      attrs: {
        "default-typing": false,
        disabled: _vm.disabledCel(index)
      },
      on: {
        input: _vm.handleInput
      },
      model: {
        value: test_50.curr_year_1,
        callback: function callback($$v) {
          _vm.$set(test_50, "curr_year_1", $$v);
        },
        expression: "test_50.curr_year_1"
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
      attrs: {
        "default-typing": false,
        disabled: _vm.disabledCel(index)
      },
      on: {
        input: _vm.handleInput
      },
      model: {
        value: test_50.current_year,
        callback: function callback($$v) {
          _vm.$set(test_50, "current_year", $$v);
        },
        expression: "test_50.current_year"
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
      attrs: {
        "default-typing": false,
        disabled: _vm.disabledCel(index)
      },
      on: {
        input: _vm.handleInput
      },
      model: {
        value: test_50.an_ulterieur_1,
        callback: function callback($$v) {
          _vm.$set(test_50, "an_ulterieur_1", $$v);
        },
        expression: "test_50.an_ulterieur_1"
      }
    })], 1), _vm._v(" "), _c("td", [_c("currency-input", {
      attrs: {
        "default-typing": false,
        disabled: _vm.disabledCel(index)
      },
      on: {
        input: _vm.handleInput
      },
      model: {
        value: test_50.an_ulterieur_2,
        callback: function callback($$v) {
          _vm.$set(test_50, "an_ulterieur_2", $$v);
        },
        expression: "test_50.an_ulterieur_2"
      }
    })], 1)]);
  }), 0)])])]) : _vm._e(), _vm._v(" "), (_vm$formDataToBeWatch10 = _vm.formDataToBeWatched.modeManuel) !== null && _vm$formDataToBeWatch10 !== void 0 && _vm$formDataToBeWatch10.test_stress_manuel ? _c("div", [_c("STM1", {
    attrs: {
      slug: (_vm$formDataToBeWatch11 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch11 === void 0 || (_vm$formDataToBeWatch11 = _vm$formDataToBeWatch11.modeManuelVars) === null || _vm$formDataToBeWatch11 === void 0 ? void 0 : _vm$formDataToBeWatch11.test_stress_manuel,
      slug_name: "test_stress_manuel"
    }
  })], 1) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "col-md-12 mt-0 mb-4"
  }, [_vm._m(10), _vm._v(" "), _c("vue-editor", {
    attrs: {
      id: "commentaire_test_stress"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.commentaire_test_stress,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "commentaire_test_stress", $$v);
      },
      expression: "formDataToBeWatched.commentaire_test_stress"
    }
  })], 1)])]) : _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.allSeen.seen9 = !_vm.allSeen.seen9;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "test-de-stress"
    }
  }, [_vm._v("\n                                        Test de stress "), _c("i", {
    staticClass: "icofont icofont-rounded-down",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    }
  })])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "mb-5"
  }), _vm._v(" "), _c("button", {
    staticClass: "btn shadow-md text-white position-absolute",
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
        return _vm.retract();
      }
    }
  }, [_vm._v("\n                    Fermer le tableau\n                ")])]) : _vm._e(), _vm._v(" "), _vm.isLoding == true && _vm.isFailed == false ? _c("div", {
    staticClass: "py-4"
  }, [_vm._m(11)]) : _vm._e(), _vm._v(" "), _vm.isLoding == false && _vm.isFailed == true ? _c("div", {
    staticClass: "py-4"
  }, [_vm._m(12)]) : _vm._e()]) : _c("div", {
    staticClass: "card card-width-height"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc pb-0 pt-2"
  }, [_c("h6", {
    staticClass: "head",
    attrs: {
      id: "f13-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Analyse financière\n                        ")]), _vm._v(" "), _c("div", {
    staticClass: "col-auto"
  }, [((_vm$formDataToBeWatch12 = _vm.formDataToBeWatched.notes) === null || _vm$formDataToBeWatch12 === void 0 ? void 0 : _vm$formDataToBeWatch12.length) > 0 ? _c("div", {
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
  }, [_c("span", [_vm._v(" " + _vm._s(_vm.formDataToBeWatched.notes.length) + " ")])])])]) : _vm._e(), _vm._v(" "), _c("BookOpenIcon", {
    staticClass: "custom-class mt-1",
    staticStyle: {
      cursor: "pointer"
    },
    attrs: {
      size: "0.7x"
    },
    on: {
      click: function click($event) {
        return _vm.$modal.show("instruction_analyse_financiere");
      }
    }
  }), _vm._v(" "), _c("airplay-icon", {
    staticClass: "custom-class",
    staticStyle: {
      cursor: "pointer"
    },
    attrs: {
      size: "0.7x"
    },
    on: {
      click: function click($event) {
        return _vm.$modal.show("analyse_financiere");
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
  })], 1)])])])])], 1), _vm._v(" "), _c("ketri-modal", {
    attrs: {
      name: "analyse_financiere",
      images: ["/images/capture_afg/exemples/analyse_financiere.png"]
    }
  }), _vm._v(" "), _c("ketri-modal", {
    attrs: {
      name: "instruction_analyse_financiere",
      images: ["/images/capture_afg/instructions/analyse_financiere.png", "/images/capture_afg/instructions/analyse_financiere2.png"],
      title: "Instructions"
    }
  }), _vm._v(" "), _c("note-modal", {
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
  return _c("label", [_c("b", [_vm._v("Commentaire des principaux agrégats & ratios")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Performance financière")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_c("b", [_vm._v("Commentaire sur la réalisation")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Années")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_c("b", [_vm._v("Progression du CA")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_c("b", [_vm._v("Progression des charges")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row text-center mt-2 mb-2"
  }, [_c("span", {}, [_vm._v(" *** Test de stress avec une baisse de 25% du resultat net")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Années")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row text-center mt-2 mb-2"
  }, [_c("span", {}, [_vm._v(" *** Test de stress avec une baisse de 50% du resultat net")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Années")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_c("b", [_vm._v("Commentaire")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "d-flex justify-content-center text-center align-items-center text-muted py-4"
  }, [_c("div", [_c("span", {
    staticClass: "spinner-border spinner-border"
  }), _vm._v(" "), _c("h5", [_vm._v("\n                            Chargement des données en cours ... "), _c("br"), _vm._v("\n                            Ceci peut prendre un peu de temps\n                        ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "d-flex justify-content-center text-center align-items-center text-muted py-4"
  }, [_c("div", [_c("i", {
    staticClass: "icofont-close-circled text-danger",
    staticStyle: {
      "font-size": "60px"
    }
  }), _vm._v(" "), _c("h5", {
    staticClass: "text-danger"
  }, [_vm._v("\n                            Le chargement des données a échoué ... "), _c("br")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/memorandum/F11.vue?vue&type=style&index=0&id=7ed1ee86&lang=css&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/memorandum/F11.vue?vue&type=style&index=0&id=7ed1ee86&lang=css&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\ninput[data-v-7ed1ee86] {\r\n    /*border: 1px solid red;*/\n}\n*[data-v-7ed1ee86] {\r\n\r\n    font-family: \"Google sans\";\n}\nlabel[data-v-7ed1ee86] {\r\n    height: 10px;\r\n    font-size: 13px;\n}\ninput[data-v-7ed1ee86],\r\nselect[data-v-7ed1ee86] {\r\n    height: 35px;\r\n    border-color: #34495e;\r\n    color: #57606f;\r\n    font-size: 13px;\r\n    font-weight: bold;\n}\n.ajust-width[data-v-7ed1ee86]{\r\n    width:135px\n}\n.card-width-height[data-v-7ed1ee86] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-7ed1ee86] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\n.hdc[data-v-7ed1ee86] {\r\n    background-color: #57606f;\n}\n.relook-header[data-v-7ed1ee86] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\r\n\r\n/* Ajouter note */\n.badge-sm[data-v-7ed1ee86] {\r\n    display: inline-block;\r\n    width: 15px;\r\n    height: 15px;\r\n    background: rgba(255, 0, 0, 0.882);\r\n    color: white;\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    border-radius: 100%;\r\n    position: absolute;\r\n    top: -20%;\r\n    left: 55%;\r\n    text-align: center;\n}\ninput[type=checkbox][data-v-7ed1ee86] {\r\n    /* Double-sized Checkboxes */\r\n    /* IE */\r\n    /* FF */\r\n    /* Safari and Chrome */\r\n    /* Opera */\r\n    transform: scale(2);\r\n    padding: 10px;\n}\r\n\r\n/* Might want to wrap a span around your checkbox text */\n.checkboxtext[data-v-7ed1ee86] {\r\n    /* Checkbox text */\r\n    font-size: 110%;\r\n    display: inline;\n}\n.bg-grey[data-v-7ed1ee86] {\r\n    background-color: grey;\n}\n.loader[data-v-7ed1ee86] {\r\n    border: solid 2px #000;\n}\n.image1[data-v-7ed1ee86] {\r\n    background: url(\"/images/capture/instructions/analyse_financiere.png\") no-repeat;\r\n    background-position: center;\r\n    background-size: contain;\r\n    width: 370px;\r\n    height: 200px;\n}\n.image2[data-v-7ed1ee86] {\r\n    background: url(\"/images/capture/exemples/activite_et_rentabilite.png\") no-repeat;\r\n    background-position: center;\r\n    background-size: contain;\r\n\r\n    width: 500px;\r\n    height: 300px;\n}\n.image3[data-v-7ed1ee86] {\r\n    background: url(\"/images/capture/exemples/structure_financiere.png\") no-repeat;\r\n    background-position: center;\r\n    background-size: contain;\r\n\r\n    width: 500px;\r\n    height: 300px;\n}\n.cpte_ex_prev[data-v-7ed1ee86] {\r\n    min-width: 110px;\n}\n.bg-blue[data-v-7ed1ee86] {\r\n    background-color: #00ffff21 !important;\n}\n.bg-blue-force[data-v-7ed1ee86] {\r\n   background-color: #00ffff !important;\n}\n.table[data-v-7ed1ee86] {\r\n  table-layout: fixed; /* Force les largeurs définies */\r\n  /* width: 100%;  */\r\n  /* Assure que le tableau utilise toute la largeur disponible */\n}\r\n\r\n\r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/memorandum/F11.vue?vue&type=style&index=0&id=7ed1ee86&lang=css&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/memorandum/F11.vue?vue&type=style&index=0&id=7ed1ee86&lang=css&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_F11_vue_vue_type_style_index_0_id_7ed1ee86_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./F11.vue?vue&type=style&index=0&id=7ed1ee86&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/memorandum/F11.vue?vue&type=style&index=0&id=7ed1ee86&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_F11_vue_vue_type_style_index_0_id_7ed1ee86_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_F11_vue_vue_type_style_index_0_id_7ed1ee86_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/forms/afg/memorandum/F11.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/forms/afg/memorandum/F11.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _F11_vue_vue_type_template_id_7ed1ee86_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./F11.vue?vue&type=template&id=7ed1ee86&scoped=true */ "./resources/js/components/forms/afg/memorandum/F11.vue?vue&type=template&id=7ed1ee86&scoped=true");
/* harmony import */ var _F11_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./F11.vue?vue&type=script&lang=js */ "./resources/js/components/forms/afg/memorandum/F11.vue?vue&type=script&lang=js");
/* harmony import */ var _F11_vue_vue_type_style_index_0_id_7ed1ee86_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./F11.vue?vue&type=style&index=0&id=7ed1ee86&lang=css&scoped=true */ "./resources/js/components/forms/afg/memorandum/F11.vue?vue&type=style&index=0&id=7ed1ee86&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _F11_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _F11_vue_vue_type_template_id_7ed1ee86_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _F11_vue_vue_type_template_id_7ed1ee86_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "7ed1ee86",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/forms/afg/memorandum/F11.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/forms/afg/memorandum/F11.vue?vue&type=script&lang=js":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/memorandum/F11.vue?vue&type=script&lang=js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_F11_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./F11.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/memorandum/F11.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_F11_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/forms/afg/memorandum/F11.vue?vue&type=style&index=0&id=7ed1ee86&lang=css&scoped=true":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/memorandum/F11.vue?vue&type=style&index=0&id=7ed1ee86&lang=css&scoped=true ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_F11_vue_vue_type_style_index_0_id_7ed1ee86_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./F11.vue?vue&type=style&index=0&id=7ed1ee86&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/memorandum/F11.vue?vue&type=style&index=0&id=7ed1ee86&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/forms/afg/memorandum/F11.vue?vue&type=template&id=7ed1ee86&scoped=true":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/memorandum/F11.vue?vue&type=template&id=7ed1ee86&scoped=true ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_F11_vue_vue_type_template_id_7ed1ee86_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_F11_vue_vue_type_template_id_7ed1ee86_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_F11_vue_vue_type_template_id_7ed1ee86_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./F11.vue?vue&type=template&id=7ed1ee86&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/memorandum/F11.vue?vue&type=template&id=7ed1ee86&scoped=true");


/***/ })

}]);