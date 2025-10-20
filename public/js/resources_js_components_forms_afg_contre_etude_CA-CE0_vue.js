"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_forms_afg_contre_etude_CA-CE0_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/contre_etude/CA-CE0.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/contre_etude/CA-CE0.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vueform/multiselect/dist/multiselect.vue2 */ "./node_modules/@vueform/multiselect/dist/multiselect.vue2.js");
/* harmony import */ var _shared_MothAndYearInput_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/MothAndYearInput.vue */ "./resources/js/components/shared/MothAndYearInput.vue");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _methods;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }








// import MothAndYearInput from "../../../../components/shared/MothAndYearInput.vue";

window.$ = window.jQuery = __webpack_require__(/*! jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "FicheIdentification",
  display: "FicheIdentification",
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
    Multiselect: _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_5__["default"],
    MothAndYearInput: _shared_MothAndYearInput_vue__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  props: {
    meta_data: Object,
    tb_name: String,
    tb_display_name: String
  },
  computed: {
    convertToNumber: function convertToNumber(number) {
      return Number(number);
    },
    calculQuotite: function calculQuotite() {
      var convertedc14 = Number(this.formDataToBeWatched.salaire_net);
      var result = 0;
      if (convertedc14 <= 200000) {
        result = 0.4 * convertedc14;
      } else if (convertedc14 <= 250000) {
        result = 0.45 * convertedc14;
      } else {
        result = 0.5 * convertedc14;
      }
      this.formDataToBeWatched.quotite = parseFloat(result.toFixed(2));
      return parseFloat(result.toFixed(2));
    },
    calculQuotiteApresLigne: function calculQuotiteApresLigne() {
      var totalToStract = 0;
      for (var i = 0; i < this.formDataToBeWatched.mensualite_des_encours.length; i++) {
        totalToStract += Number(this.formDataToBeWatched.mensualite_des_encours[i].value);
      }
      var result = this.calculQuotite - totalToStract;
      this.formDataToBeWatched.quotite_disponible_apres_encours = parseFloat(result.toFixed(2));
      return parseFloat(result.toFixed(2));
    },
    calculQuotiteApresLigne1: function calculQuotiteApresLigne1() {
      var totalToStract = 0;
      for (var i = 0; i < this.formDataToBeWatched.mensualite_apres_encours_sollicite.length; i++) {
        totalToStract += Number(this.formDataToBeWatched.mensualite_apres_encours_sollicite[i].value);
      }
      var result = this.calculQuotite - totalToStract;
      this.formDataToBeWatched.quotite_disponible_apres_sollicite = parseFloat(result.toFixed(2));
      return parseFloat(result.toFixed(2));
    },
    calculQuotiteApresLigne2: function calculQuotiteApresLigne2() {
      var totalToStract = 0;
      for (var i = 0; i < this.formDataToBeWatched.mensualite_apres_encours_valide.length; i++) {
        totalToStract += Number(this.formDataToBeWatched.mensualite_apres_encours_valide[i].value);
      }
      var result = this.calculQuotite - totalToStract;
      this.formDataToBeWatched.quotite_disponible_apres_valide = parseFloat(result.toFixed(2));
      return parseFloat(result.toFixed(2));
    },
    etatQuotite: function etatQuotite() {
      if (this.calculQuotiteApresLigne) {
        var result = this.calculQuotiteApresLigne > this.calculQuotite ? "QUOTITE INSUFFISANTE" : "BONNE QUOTITE";
        this.formDataToBeWatched.etatQuotite = result;
        return result;
      } else {
        return '';
      }
    },
    etatQuotite1: function etatQuotite1() {
      if (this.calculQuotiteApresLigne) {
        var result = this.calculQuotiteApresLigne1 > this.calculQuotite ? "QUOTITE INSUFFISANTE" : "BONNE QUOTITE";
        this.formDataToBeWatched.etatQuotite1 = result;
        return result;
      } else {
        return '';
      }
    },
    etatQuotite2: function etatQuotite2() {
      if (this.calculQuotiteApresLigne) {
        var result = this.calculQuotiteApresLigne2 > this.calculQuotite ? "QUOTITE INSUFFISANTE" : "BONNE QUOTITE";
        this.formDataToBeWatched.etatQuotite2 = result;
        return result;
      } else {
        return '';
      }
    },
    totalPartPourcentageActionnariats: function totalPartPourcentageActionnariats() {
      var trying = this.actionnariats.map(function (el) {
        el.pourcentage_participation = String(el.pourcentage_participation).replace(/\s+/g, "");
        if (!el.pourcentage_participation) return 0;
        return Number(el.pourcentage_participation);
      }).reduce(function (sum, curr) {
        return sum + curr;
      }, 0);
      if (trying > 100) return "100.00";
      return trying.toLocaleString("fr-FR");
    },
    ActionnariatMaxNumber: function ActionnariatMaxNumber() {
      var restant = 100 - Number(this.totalPartPourcentageActionnariats);
      if (restant < 0) return 0;
      return restant;
    },
    secteurs_activites_: function secteurs_activites_() {
      var _this = this;
      if (this.formDataToBeWatched.groupe_activite == "" || this.formDataToBeWatched.groupe_activite == null) {
        this.selected_secteur_activite = "";
        this.formDataToBeWatched.secteur_activite = "";
      }
      var array = [];
      this.secteurs_activites.forEach(function (element) {
        if (_this.formDataToBeWatched.groupe_activite == "" || _this.formDataToBeWatched.groupe_activite == null) {
          array.push(element);
        } else {
          if (_this.selected_groupe_secteur == "" || _this.selected_groupe_secteur != '' && _this.selected_groupe_secteur.id == element.groupe_activite_id) {
            array.push(element);
          }
        }
      });
      return array;
    },
    groupes_activites_: function groupes_activites_() {
      var array = [];
      this.groupes_activites.forEach(function (element) {
        array.push(element);
      });
      return array;
    },
    listeClientele: function listeClientele() {
      var items = [];
      if (this.formDataToBeWatched.categorie_clientele == 'Clientèle Ordinaire') {
        var _this$authcheckUsr;
        if (((_this$authcheckUsr = this.authcheckUsr) === null || _this$authcheckUsr === void 0 ? void 0 : _this$authcheckUsr.categorie_client) == "Retail") {
          items = [{
            label: "",
            value: ''
          }, {
            label: "Professionnel",
            value: 'Professionnel'
          }, {
            label: "TPE/TPI",
            value: 'TPE/TPI'
          }];
        } else {
          items = [{
            label: "",
            value: ''
          }, {
            label: "Entreprises",
            value: 'Entreprises'
          }, {
            label: "PME/PMI",
            value: 'PME/PMI'
          }];
        }
      } else if (this.formDataToBeWatched.categorie_clientele == "Structure Financière Décentralisé ( SFD )") {
        items = [{
          label: "",
          value: ''
        }, {
          label: "Microfinances",
          value: 'Microfinances'
        }, {
          label: "Mutuelles",
          value: 'Mutuelles'
        }];
      } else if (this.formDataToBeWatched.categorie_clientele == "Assurances") {
        items = [{
          label: "Assurances",
          value: 'Assurances'
        }];
      } else if (this.formDataToBeWatched.categorie_clientele == "Fonds Commun de Placement") {
        items = [{
          label: "Fonds Commun de Placement",
          value: 'Fonds Commun de Placement'
        }];
      } else if (this.formDataToBeWatched.categorie_clientele == "Institutionnels") {
        items = [{
          label: "Institutionnels",
          value: 'Institutionnels'
        }];
      } else if (this.formDataToBeWatched.categorie_clientele == "SCI") {
        items = [{
          label: "SCI",
          value: 'SCI'
        }];
      } else if (this.formDataToBeWatched.categorie_clientele == "ONG et associations") {
        items = [{
          label: "ONG et associations",
          value: 'ONG et associations'
        }];
      } else if (this.formDataToBeWatched.categorie_clientele == "États") {
        items = [{
          label: "États",
          value: 'États'
        }];
      } else if (this.formDataToBeWatched.categorie_clientele == "Autres") {
        items = [{
          label: "Autres",
          value: 'Autres'
        }];
      }
      return items;
    },
    categoriesClientele: function categoriesClientele() {
      var items = [{
        label: "--- Sélectionner la catégorie de clientèle --",
        value: ''
      }, {
        label: "",
        value: ''
      }, {
        label: "Clientèle Ordinaire",
        value: 'Clientèle Ordinaire'
      }, {
        label: "Structure Financière Décentralisé ( SFD )",
        value: 'Structure Financière Décentralisé ( SFD )'
      }, {
        label: "Assurances",
        value: 'Assurances'
      }, {
        label: "Fonds Commun de Placement",
        value: 'Fonds Commun de Placement'
      }, {
        label: "Institutionnels",
        value: 'Institutionnels'
      }, {
        label: "SCI",
        value: 'SCI'
      }, {
        label: "ONG et associations",
        value: 'ONG et associations'
      }, {
        label: "États",
        value: 'États'
      }, {
        label: "Autres",
        value: 'Autres'
      }];
      return items;
    },
    shouldHaveDefaultNote: function shouldHaveDefaultNote() {
      return this.formDataToBeWatched.categorie_clientele && this.formDataToBeWatched.categorie_clientele != 'Clientèle Ordinaire' || this.formDataToBeWatched.has_etat_financier == 'Non';
    },
    notes_edane: function notes_edane() {
      if (this.shouldHaveDefaultNote) return ["B-"];
      return ["", "A3", "A2+", "A2", "A2-", "A1+", "A1", "A1-", "B+", "B", "B-", "C+", "C", "C-", "D+", "D", "D-", "E"];
    }
  },
  created: function created() {
    var _this2 = this;
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _this2$meta_data;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["default"].loadUserData().then(function (res) {
              var _this2$meta_data$doss, _this2$authcheckUsr, _this2$meta_data$doss2;
              _this2.authcheck = true;
              _this2.authcheckUsr = res.data;
              _this2.authcheckStatus = res.status;
              if (((_this2$meta_data$doss = _this2.meta_data['dossier_credit']) === null || _this2$meta_data$doss === void 0 || (_this2$meta_data$doss = _this2$meta_data$doss.final_outcome) === null || _this2$meta_data$doss === void 0 ? void 0 : _this2$meta_data$doss.outcome) == 0 && ['DUxMP2ZQheGFreQt5z2s', 'r472oAxtaFJSlsh5'].includes((_this2$authcheckUsr = _this2.authcheckUsr) === null || _this2$authcheckUsr === void 0 ? void 0 : _this2$authcheckUsr.role_uuid) && ((_this2$meta_data$doss2 = _this2.meta_data['dossier_credit']) === null || _this2$meta_data$doss2 === void 0 ? void 0 : _this2$meta_data$doss2.is_ajournee) == true) {
                _this2.onClasseRisqueChange();
              }
            })["catch"](function (err) {
              _this2.loadWithError(err);
            });
          case 2:
            _context.next = 4;
            return _services_credit_service__WEBPACK_IMPORTED_MODULE_4__["default"].loadCAFAfg((_this2$meta_data = _this2.meta_data) === null || _this2$meta_data === void 0 || (_this2$meta_data = _this2$meta_data.dossier_credit) === null || _this2$meta_data === void 0 ? void 0 : _this2$meta_data.monteur_doss_email).then(function (res) {
              _this2.cafData(res);
            })["catch"](function (err) {
              console.log(err);
            });
          case 4:
            _context.next = 6;
            return _services_credit_service__WEBPACK_IMPORTED_MODULE_4__["default"].loadActivite().then(function (res) {
              _this2.secteurs_activites = res.data.data.activites;
              _this2.groupes_activites = res.data.data.groupes;
              _this2.updateValueSelected();
            })["catch"](function (err) {
              console.log(err);
            });
          case 6:
            _context.next = 8;
            return _this2.loadScoringData();
          case 8:
            _context.next = 10;
            return _this2.loadPourQuotiteData();
          case 10:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  mounted: function mounted() {
    var _this3 = this;
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var _this3$meta_data, _this3$meta_data2;
      var applied_templ_name, tbArrays;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            applied_templ_name = (_this3$meta_data = _this3.meta_data) === null || _this3$meta_data === void 0 || (_this3$meta_data = _this3$meta_data.dossier_credit) === null || _this3$meta_data === void 0 ? void 0 : _this3$meta_data.applied_templ_name;
            tbArrays = _this3.determineCredPubTables(applied_templ_name, (_this3$meta_data2 = _this3.meta_data) === null || _this3$meta_data2 === void 0 ? void 0 : _this3$meta_data2.dossier_credit);
            _this3.credpubIn0 = tbArrays[0];
            _this3.credpubIn1 = tbArrays[3];
            _this3.credpubIn2 = tbArrays[4];
            _this3.credpubIn3 = tbArrays[5];
            _this3.credpubIn4 = tbArrays[6];
            _this3.credpubComptes = tbArrays[2];
            _this3.credpubProfilProfessionnel = tbArrays[1];
            _this3.loadRetrieved();
            _this3.loadTbAttrs(); // charge les attributs + sous attributs des tables
            _this3.tableClosedOrOpened();
            EventBus.$on("reload-T1", function () {
              EventBus.$emit("event-T0", {
                formdata: _this3.formDataToBeWatched
              });
            });
            EventBus.$on("ligne-selected-updated", function (data) {
              // console.log("data", data)
              _this3.formDataToBeWatched.montant_sollicite = data === null || data === void 0 ? void 0 : data.total_nouvelle_ligne_0;
              // console.log("montant_sollicite ==> ", data?.total_nouvelle_ligne_0)
            });
            EventBus.$on("created-extra-file-template", function (data) {
              var _data$template, _data$template2, _data$template3;
              _this3.formDataToBeWatched.note_verification = {
                id: data === null || data === void 0 || (_data$template = data.template) === null || _data$template === void 0 ? void 0 : _data$template.id,
                name: data === null || data === void 0 || (_data$template2 = data.template) === null || _data$template2 === void 0 ? void 0 : _data$template2.name,
                slug: data === null || data === void 0 || (_data$template3 = data.template) === null || _data$template3 === void 0 ? void 0 : _data$template3.slug,
                files_count: 0
              };
            });
            EventBus.$on('extra-files-uploaded', function (data) {
              var _this3$formDataToBeWa;
              if (((_this3$formDataToBeWa = _this3.formDataToBeWatched) === null || _this3$formDataToBeWa === void 0 || (_this3$formDataToBeWa = _this3$formDataToBeWa.note_verification) === null || _this3$formDataToBeWa === void 0 ? void 0 : _this3$formDataToBeWa.id) == data.template.id) {
                _this3.formDataToBeWatched.note_verification.files_count = data.files.length;
              }
            });
            EventBus.$on('update-sni', function () {
              _this3.onClasseRisqueChange();
            });
            EventBus.$on("export-simulation", function (data) {
              // formDataToBeWatched.salaire_brut
              try {
                var salaireNetIndex = _this3.revenu_domicilie_afg.findIndex(function (el) {
                  return el.libelle === 'Salaire net';
                });
                if (salaireNetIndex !== -1) {
                  var _data$simulation;
                  var salaireNet = data === null || data === void 0 || (_data$simulation = data.simulation) === null || _data$simulation === void 0 || (_data$simulation = _data$simulation.caracteristiques_credit) === null || _data$simulation === void 0 ? void 0 : _data$simulation.salaire_net;
                  if (salaireNet) {
                    var _this3$formatNumber;
                    var event = ['montant_salaire', salaireNet];
                    _this3.formDataVars2([event[0], ((_this3$formatNumber = _this3.formatNumber) === null || _this3$formatNumber === void 0 ? void 0 : _this3$formatNumber.call(_this3, String(event[1]))) || String(event[1])], salaireNetIndex, 'revenu_domicilie_afg', 'montant_salaire');
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
  data: function data() {
    var _formDataToBeWatched;
    var vm = this;
    return {
      classe_riques_bg_color: {
        'background-color': "#e9ecef"
      },
      actionnariats: [{
        nom_actionnaire: "",
        pourcentage_participation: "",
        max: 100
      }],
      credpubIn0: null,
      credpubIn1: null,
      credpubIn2: null,
      credpubIn3: null,
      credpubIn4: null,
      credpubComptes: null,
      credpubProfilProfessionnel: null,
      seen1: true,
      seen2: true,
      seen3: true,
      seen4: true,
      seen5: true,
      seen6: true,
      seen7: true,
      seen8: true,
      date_demande_type: "text",
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_2__["default"].host,
      max_amount_retail: 35000000,
      alert_max_amount_retail: false,
      authcheck: false,
      authcheckUsr: null,
      authcheckStatus: null,
      watchInPause: false,
      initLoad: true,
      seen: true,
      cafInfo: null,
      clients: [],
      encours: null,
      encours_valide: null,
      gl_key: null,
      dpcredit0: false,
      dpcredit1: false,
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
      credits: [],
      secteurs_activites: [],
      groupes_activites: [],
      selected_secteur_activite: "",
      selected_groupe_secteur: "",
      matricule_client: "",
      status_object: {},
      formDataToBeWatched: (_formDataToBeWatched = {
        global_env_entity: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_2__["default"].loadableEntity()[0].toUpperCase(),
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
      }), "annee_act_emploi", ''), "data_expiration_cdd_interim", ''), _defineProperty(_defineProperty(_formDataToBeWatched, "date_debut_cdd_interim", ''), "type_contrat", '')),
      data_type_de_contrat: [],
      data_date_de_depart_a_la_retraite: [],
      data_le_client_a_t_il: [],
      listingNote: false,
      maxdate: "",
      dismissFormData: [5, 6],
      fetch_score: false,
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
      pourcentages_quotites: []
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
      var _this$meta_data, _this$meta_data2;
      var credPubTb120002 = (_this$meta_data = this.meta_data) === null || _this$meta_data === void 0 || (_this$meta_data = _this$meta_data.dossier_credit) === null || _this$meta_data === void 0 ? void 0 : _this$meta_data[this.credpubIn0];
      if (['Proposition de crédit aux particuliers'].includes((_this$meta_data2 = this.meta_data) === null || _this$meta_data2 === void 0 || (_this$meta_data2 = _this$meta_data2.dossier_credit) === null || _this$meta_data2 === void 0 ? void 0 : _this$meta_data2.applied_templ_name)) {
        var _this$meta_data3;
        credPubTb120002 = (_this$meta_data3 = this.meta_data) === null || _this$meta_data3 === void 0 || (_this$meta_data3 = _this$meta_data3.dossier_credit) === null || _this$meta_data3 === void 0 ? void 0 : _this$meta_data3["cred_pub_tb_120002"];
      }
      if (!credPubTb120002) return;
      if (!this.formDataToBeWatched.employeur) {
        var _credPubTb;
        this.formDataToBeWatched.employeur = ((_credPubTb = credPubTb120002) === null || _credPubTb === void 0 ? void 0 : _credPubTb.entreprise) || '';
      }
      if (!this.formDataToBeWatched.anciennete_pro) {
        var _this$meta_data$dossi, _this$meta_data4, _credPubTb2;
        var created_at = (_this$meta_data$dossi = (_this$meta_data4 = this.meta_data) === null || _this$meta_data4 === void 0 || (_this$meta_data4 = _this$meta_data4.dossier_credit) === null || _this$meta_data4 === void 0 ? void 0 : _this$meta_data4.created_at) !== null && _this$meta_data$dossi !== void 0 ? _this$meta_data$dossi : Date.now();
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
      // if(this.formDataToBeWatched.target_market == 'NON') {
      //     this.formDataToBeWatched.employeur = ''
      //     this.formDataToBeWatched.anciennete_pro = ''
      //     return;
      // }
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
    updateClasseRisque: function updateClasseRisque() {
      var _this$formDataToBeWat, _this$formDataToBeWat2, _this$formDataToBeWat3, _this$formDataToBeWat4, _this$formDataToBeWat5, _this$formDataToBeWat6, _this$formDataToBeWat7, _this$formDataToBeWat8, _this$formDataToBeWat9;
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
      if (graduations !== null && graduations !== void 0 && graduations.excellent.includes((_this$formDataToBeWat = this.formDataToBeWatched) === null || _this$formDataToBeWat === void 0 ? void 0 : _this$formDataToBeWat.note_edane)) {
        this.formDataToBeWatched.classe_risque = 'EXCELLENT';
        this.classe_riques_bg_color = {
          "background-color": '#974EC3',
          'color': "#ffffff"
        };
      } else if (graduations !== null && graduations !== void 0 && graduations.very_good.includes((_this$formDataToBeWat2 = this.formDataToBeWatched) === null || _this$formDataToBeWat2 === void 0 ? void 0 : _this$formDataToBeWat2.note_edane)) {
        // alert(1)
        this.formDataToBeWatched.classe_risque = 'TRES BON';
        this.classe_riques_bg_color = {
          "background-color": '#78C1F3',
          'color': "#ffffff"
        };
      } else if (graduations !== null && graduations !== void 0 && graduations.good.includes((_this$formDataToBeWat3 = this.formDataToBeWatched) === null || _this$formDataToBeWat3 === void 0 ? void 0 : _this$formDataToBeWat3.note_edane)) {
        this.formDataToBeWatched.classe_risque = 'BON';
        this.classe_riques_bg_color = {
          "background-color": '#1D5D9B',
          'color': "#ffffff"
        };
      } else if (graduations !== null && graduations !== void 0 && graduations.acceptable.includes((_this$formDataToBeWat4 = this.formDataToBeWatched) === null || _this$formDataToBeWat4 === void 0 ? void 0 : _this$formDataToBeWat4.note_edane)) {
        this.formDataToBeWatched.classe_risque = 'ACCEPTABLE';
        this.classe_riques_bg_color = {
          "background-color": '#8EAC50',
          'color': "#ffffff"
        };
      } else if (graduations !== null && graduations !== void 0 && graduations.sensible.includes((_this$formDataToBeWat5 = this.formDataToBeWatched) === null || _this$formDataToBeWat5 === void 0 ? void 0 : _this$formDataToBeWat5.note_edane)) {
        this.formDataToBeWatched.classe_risque = 'SENSIBLE';
        this.classe_riques_bg_color = {
          "background-color": '#FFC95F',
          'color': "#ffffff"
        };
      } else if (graduations !== null && graduations !== void 0 && graduations.weak.includes((_this$formDataToBeWat6 = this.formDataToBeWatched) === null || _this$formDataToBeWat6 === void 0 ? void 0 : _this$formDataToBeWat6.note_edane)) {
        this.formDataToBeWatched.classe_risque = 'FRAGILE';
        this.classe_riques_bg_color = {
          "background-color": '#F8DE22',
          'color': "#ffffff"
        };
      } else if (graduations !== null && graduations !== void 0 && graduations.not_acceptable.includes((_this$formDataToBeWat7 = this.formDataToBeWatched) === null || _this$formDataToBeWat7 === void 0 ? void 0 : _this$formDataToBeWat7.note_edane)) {} else if (graduations !== null && graduations !== void 0 && graduations.not_considered.includes((_this$formDataToBeWat8 = this.formDataToBeWatched) === null || _this$formDataToBeWat8 === void 0 ? void 0 : _this$formDataToBeWat8.note_edane)) {
        this.formDataToBeWatched.classe_risque = 'SANS INTERET';
        this.classe_riques_bg_color = {
          "background-color": '#445069',
          'color': "#ffffff"
        };
      } else if (!((_this$formDataToBeWat9 = this.formDataToBeWatched) !== null && _this$formDataToBeWat9 !== void 0 && _this$formDataToBeWat9.note_edane)) {
        this.formDataToBeWatched.classe_risque = '';
      }
    },
    eventToAnaFin: function eventToAnaFin() {
      EventBus.$emit("send-to-ana_fin", {
        annee_referentielle: this.formDataToBeWatched.annee_referentielle,
        compte_contribuable: this.formDataToBeWatched.compte_contribuable
      });
    },
    addMore: function addMore(listName) {
      this[listName].push({
        type: '',
        value: '',
        isEditable: true
      });
    },
    remove: function remove(index, listName) {
      this[listName].splice(index, 1);
      this.handleInput();
    },
    checkboxValSegEnt: function checkboxValSegEnt(segment_entreprise, id) {
      var _this4 = this;
      this.formDataToBeWatched['segment_entreprise'] = segment_entreprise;
      for (var i = 0; i < this.segment_entreprise_list.length; i++) {
        if (i != id - 1) {
          this.segment_entreprise_list[i]['disabled'] = !this.segment_entreprise_list[i]['disabled'];
        }
      }
      _services_credit_service__WEBPACK_IMPORTED_MODULE_4__["default"].typeOfChefDCEI(segment_entreprise, this.meta_data.cred_pub_key).then(function (res) {
        var ObjKey = res.data[0];
        var ObjVal = res.data[1];
        _this4.formDataToBeWatched[ObjKey] = ObjVal;
        if (!['', null, undefined].includes(res === null || res === void 0 ? void 0 : res.data[2])) {
          var _res$data$2$, _res$data$2$2;
          var ObjKey2 = (_res$data$2$ = res === null || res === void 0 ? void 0 : res.data[2][0]) !== null && _res$data$2$ !== void 0 ? _res$data$2$ : null;
          var ObjVal2 = (_res$data$2$2 = res === null || res === void 0 ? void 0 : res.data[2][1]) !== null && _res$data$2$2 !== void 0 ? _res$data$2$2 : null;
          if (!['', null, undefined].includes(ObjKey2)) {
            _this4.formDataToBeWatched[ObjKey2] = ObjVal2;
          }
        }
      })["catch"](function (err) {
        console.log(err);
      });
    },
    crdLd: function crdLd(matricule_client) {
      return new Promise(function (resolve, reject) {
        if (matricule_client != "") {
          if (matricule_client.length > 6) {
            // Credit.encours(matricule_client)
            //     .then(res => {
            //         this.encoursData(res);
            //         resolve()
            //     }).catch(err => { console.log(err) })
          }
        }
      });
    },
    sendEventClientele: function sendEventClientele() {
      EventBus.$emit("type_de_clientele_change", this.formDataToBeWatched);
      // EventBus.$emit("type_de_clientele_change",this.formDataToBeWatched.type_de_clientele)
    },
    selectTypeClientele: function selectTypeClientele(typeDeClientele) {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var _this5$authcheckUsr;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (!(_this5.authcheckUsr == null)) {
                _context3.next = 5;
                break;
              }
              _context3.next = 3;
              return _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["default"].loadUserData().then(function (res) {
                _this5.authcheck = true;
                _this5.authcheckUsr = res.data;
                _this5.authcheckStatus = res.status;
                if (_this5.authcheckUsr.categorie_client.toUpperCase() === "RETAIL") typeDeClientele = "Particuliers";
              })["catch"](function (err) {
                _this5.loadWithError(err);
              });
            case 3:
              _context3.next = 6;
              break;
            case 5:
              if (_this5.authcheckUsr.categorie_client.toUpperCase() === "RETAIL") typeDeClientele = "Particuliers";
            case 6:
              if (_this5.formDataToBeWatched.type_de_clientele != '') {
                // console.log("type_de_clientele 1 ",typeDeClientele)
                _this5.sendEventClientele();
              }

              // let tbVal = null
              // let credVal = this.determineCredPubTablesFromDosCred(this.meta_data.dossier_credit)
              _services_credit_service__WEBPACK_IMPORTED_MODULE_4__["default"].typeOfDispatcher(typeDeClientele, _this5.meta_data.cred_pub_key).then(function (res) {
                _this5.formDataToBeWatched.disp_risq_filiale = res.data;
              })["catch"](function (err) {
                console.log(err);
              });
              // if(credVal[0]){
              //     tbVal = credVal[2]

              // }

              if (((_this5$authcheckUsr = _this5.authcheckUsr) === null || _this5$authcheckUsr === void 0 ? void 0 : _this5$authcheckUsr.categorie_client) == "Retail") {
                _this5.formDataToBeWatched.segment_entreprise = "Clientèle des Particuliers et des Professionnels";
                _services_credit_service__WEBPACK_IMPORTED_MODULE_4__["default"].typeOfChefDCEI(_this5.formDataToBeWatched.segment_entreprise, _this5.meta_data.cred_pub_key).then(function (res) {
                  var ObjKey = res.data[0];
                  var ObjVal = res.data[1];
                  _this5.formDataToBeWatched[ObjKey] = ObjVal;
                  if (!['', null, undefined].includes(res === null || res === void 0 ? void 0 : res.data[2])) {
                    var _res$data$2$3, _res$data$2$4;
                    var ObjKey2 = (_res$data$2$3 = res === null || res === void 0 ? void 0 : res.data[2][0]) !== null && _res$data$2$3 !== void 0 ? _res$data$2$3 : null;
                    var ObjVal2 = (_res$data$2$4 = res === null || res === void 0 ? void 0 : res.data[2][1]) !== null && _res$data$2$4 !== void 0 ? _res$data$2$4 : null;
                    if (!['', null, undefined].includes(ObjKey2)) {
                      _this5.formDataToBeWatched[ObjKey2] = ObjVal2;
                    }
                  }
                })["catch"](function (err) {
                  console.log(err);
                });
              }
            case 9:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    // selectTypeClientele(typeDeClientele) {
    //     Credit.typeOfDispatcher(typeDeClientele, this.meta_data.cred_pub_key);
    // },
    onClientSlct: function onClientSlct(event) {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var raw_searchable;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              raw_searchable = _services_credit_service__WEBPACK_IMPORTED_MODULE_4__["default"].search(event, _this6.credits, 'libelle');
              if (_this6.formDataToBeWatched.duree_credit == "") {
                _this6.formDataToBeWatched.duree_credit = raw_searchable.duree_min;
              }
              _this6.dpcredit1 = true;

              // this.loadSlctMatCliEnc();
              _context4.next = 5;
              return _this6.crdLd(_this6.formDataToBeWatched.matricule_client);
            case 5:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
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
      var _this7 = this;
      _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["default"].loadUserData().then(function (res) {
        _this7.send2Backend(res, 0, 0);
      })["catch"](function (err) {
        _this7.loadWithError(err);
      });
    },
    formDataVars: function formDataVars(event) {
      this.formDataToBeWatched[event[0]] = event[1];
      this.handleInput();
    },
    formatDateForInput: function formatDateForInput(data) {
      var day = data.getDate() <= 9 ? "0" + data.getDate() : data.getDate();
      var monthNumber = data.getMonth() + 1;
      var month = monthNumber <= 9 ? "0" + monthNumber : monthNumber;
      return data.getFullYear() + "-" + month + "-" + day;
    },
    getField: function getField(fallback, field) {
      // if(field == 'type_contrat') console.log('fallback',fallback?.[field]);
      return fallback === null || fallback === void 0 ? void 0 : fallback[field];
    },
    loadRetrieved: function loadRetrieved() {
      var _this8 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var lentb, createdKey, createdKeyArr, _this8$meta_data$doss, _this8$meta_data$doss2, _this8$meta_data$doss3, _this8$meta_data$doss4, _this8$meta_data$doss5, _this8$meta_data$doss6, _this8$formDataToBeWa, cred_pub_tb_14070, cred_pub_tb_120001, cred_pub_tb_120002, cred_pub_tb_120003, ficheSignaletique, profesionalInfo, _this8$formDataToBeWa2;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              lentb = _this8.meta_data['dossier_credit']['tbs_in_use'];
              createdKey = _this8.tb_name;
              createdKeyArr = createdKey.split("tb");
              createdKey = "cred_pub_tb_" + createdKeyArr[1];
              _this8.gl_key = createdKey;
              if (_this8.meta_data["dossier_credit"][createdKey] == undefined) {
                cred_pub_tb_14070 = (_this8$meta_data$doss = _this8.meta_data['dossier_credit']) === null || _this8$meta_data$doss === void 0 ? void 0 : _this8$meta_data$doss['cred_pub_tb_14070'];
                cred_pub_tb_120001 = (_this8$meta_data$doss2 = _this8.meta_data['dossier_credit']) === null || _this8$meta_data$doss2 === void 0 ? void 0 : _this8$meta_data$doss2[_this8.credpubIn0];
                cred_pub_tb_120002 = (_this8$meta_data$doss3 = _this8.meta_data['dossier_credit']) === null || _this8$meta_data$doss3 === void 0 ? void 0 : _this8$meta_data$doss3[_this8.credpubProfilProfessionnel];
                cred_pub_tb_120003 = (_this8$meta_data$doss4 = _this8.meta_data['dossier_credit']) === null || _this8$meta_data$doss4 === void 0 ? void 0 : _this8$meta_data$doss4[_this8.credpubComptes];
                ficheSignaletique = (_this8$meta_data$doss5 = _this8.meta_data['dossier_credit']) === null || _this8$meta_data$doss5 === void 0 ? void 0 : _this8$meta_data$doss5[_this8.credpubIn0];
                profesionalInfo = (_this8$meta_data$doss6 = _this8.meta_data['dossier_credit']) === null || _this8$meta_data$doss6 === void 0 ? void 0 : _this8$meta_data$doss6[_this8.credpubProfilProfessionnel];
                _this8.formDataToBeWatched.denomination_client = _this8.getField(cred_pub_tb_120001, 'denomination_client');
                _this8.formDataToBeWatched.indice = _this8.getField(cred_pub_tb_120001, 'indice');
                if (_this8.getField(cred_pub_tb_120001, 'date_de_naissance')) {
                  _this8.formDataToBeWatched.date_de_naissance = _this8.getField(cred_pub_tb_120001, 'date_de_naissance');
                } else {
                  _this8.formDataToBeWatched.date_de_naissance = _this8.getField(cred_pub_tb_120001, 'date_naissance');
                }
                if (_this8.getField(cred_pub_tb_120001, 'anciennete_de_la_relation')) {
                  _this8.formDataToBeWatched.anciennete_de_la_relation = _this8.getField(cred_pub_tb_120001, 'anciennete_de_la_relation');
                } else {
                  _this8.formDataToBeWatched.anciennete_de_la_relation = _this8.getField(cred_pub_tb_120001, 'anciennete_de_la_relation');
                }
                _this8.formDataToBeWatched.target_market = _this8.getField(cred_pub_tb_120001, 'target_market');
                _this8.formDataToBeWatched.agence = _this8.getField(cred_pub_tb_120001, 'agence');
                _this8.formDataToBeWatched.nationnalite = _this8.getField(cred_pub_tb_120001, 'nationnalite');
                _this8.formDataToBeWatched.revenu_total_colonne_emprunteur = _this8.getField(cred_pub_tb_120001, 'revenu_total_colonne_emprunteur');
                _this8.formDataToBeWatched.revenu_total_colonne_conjoint = _this8.getField(cred_pub_tb_120001, 'revenu_total_colonne_conjoint');
                _this8.formDataToBeWatched.revenu_total = _this8.getField(cred_pub_tb_120001, 'revenu_total');
                _this8.formDataToBeWatched.revenu_total_colonne_mensualite = _this8.getField(cred_pub_tb_120001, 'revenu_total_colonne_mensualite');
                _this8.formDataToBeWatched.revenu_total_colonne_mensualite_conjoint = _this8.getField(cred_pub_tb_120001, 'revenu_total_colonne_mensualite_conjoint');
                _this8.formDataToBeWatched.revenu_total_colonne_montant_pondere = _this8.getField(cred_pub_tb_120001, 'revenu_total_colonne_montant_pondere');
                _this8.formDataToBeWatched.revenu_total_colonne_montant_pondere_conjoint = _this8.getField(cred_pub_tb_120001, 'revenu_total_colonne_montant_pondere_conjoint');
                _this8.formDataToBeWatched.revenu_total_colonne_taux_qc1 = _this8.getField(cred_pub_tb_120001, 'revenu_total_colonne_taux_qc1');
                _this8.formDataToBeWatched.revenu_total_colonne_taux_qc1_conjoint = _this8.getField(cred_pub_tb_120001, 'revenu_total_colonne_taux_qc1_conjoint');
                _this8.formDataToBeWatched.revenu_total_colonne_montant_qc1 = _this8.getField(cred_pub_tb_120001, 'revenu_total_colonne_montant_qc1');
                _this8.formDataToBeWatched.revenu_total_colonne_montant_qc1_conjoint = _this8.getField(cred_pub_tb_120001, 'revenu_total_colonne_montant_qc1_conjoint');
                _this8.formDataToBeWatched.revenu_total_colonne_taux_qc2 = _this8.getField(cred_pub_tb_120001, 'revenu_total_colonne_taux_qc2');
                _this8.formDataToBeWatched.revenu_total_colonne_montant_qc2 = _this8.getField(cred_pub_tb_120001, 'revenu_total_colonne_montant_qc2');
                _this8.formDataToBeWatched.salaire_brut = _this8.getField(cred_pub_tb_120001, 'salaire_brut');
                _this8.formDataToBeWatched.pourcentage_quotite_general = _this8.getField(cred_pub_tb_120001, 'revenu_total_colonne_taux_qc2');
                _this8.formDataToBeWatched.type_contrat = _this8.getField(cred_pub_tb_120002, 'type_contrat');
                _this8.formDataToBeWatched.annee_act_emploi = _this8.getField(cred_pub_tb_120002, 'annee_act_emploi');
                if (_this8.formDataToBeWatched.type_contrat) {
                  _this8.formDataToBeWatched.data_expiration_cdd_interim = _this8.getField(cred_pub_tb_120002, 'data_expiration_cdd_interim');
                  _this8.formDataToBeWatched.date_debut_cdd_interim = _this8.getField(cred_pub_tb_120002, 'date_debut_cdd_interim');
                }
                _this8.formDataToBeWatched.type_client = _this8.getField(cred_pub_tb_120001, 'type_client');
                // this.formDataToBeWatched.type_client = cred_pub_tb_120004?.type_de_clientele
                _this8.formDataToBeWatched.adresse = _this8.getField(cred_pub_tb_120001, 'adresse'); //ficheSignaletique?.adresse
                _this8.formDataToBeWatched.status_object = _this8.getField(cred_pub_tb_120001, 'status_object'); //ficheSignaletique?.status_object
                _this8.formDataToBeWatched.matrimoniale = _this8.getField(cred_pub_tb_120001, 'matrimoniale'); //ficheSignaletique?.matrimoniale
                _this8.formDataToBeWatched.regime_matrimonial = _this8.getField(cred_pub_tb_120001, 'regime_matrimonial'); //ficheSignaletique?.regime_matrimonial
                _this8.formDataToBeWatched.habitation = _this8.getField(cred_pub_tb_120001, 'habitation'); //ficheSignaletique?.habitation
                _this8.formDataToBeWatched.anciennete_adresse = _this8.getField(cred_pub_tb_120001, 'anciennete_adresse'); //ficheSignaletique?.anciennete_adresse
                _this8.formDataToBeWatched.nbre_enfant = _this8.getField(cred_pub_tb_120001, 'nbre_enfant'); //ficheSignaletique?.nbre_enfant
                _this8.formDataToBeWatched.conjoint = _this8.getField(cred_pub_tb_120001, 'conjoint'); //ficheSignaletique?.conjoint

                _this8.formDataToBeWatched.revenu_domicilie_afg = (ficheSignaletique === null || ficheSignaletique === void 0 ? void 0 : ficheSignaletique.revenu_domicilie_afg) || (ficheSignaletique === null || ficheSignaletique === void 0 ? void 0 : ficheSignaletique.revenu_domicilie);
                _this8.revenu_domicilie_afg = (_this8$formDataToBeWa = _this8.formDataToBeWatched) === null || _this8$formDataToBeWa === void 0 ? void 0 : _this8$formDataToBeWa.revenu_domicilie_afg;
                _this8.revenu_domicilie_afg = _this8.revenu_domicilie_afg.map(function (ed) {
                  return _objectSpread(_objectSpread({}, ed), {}, {
                    comeFrom: 'tb_120001'
                  });
                });

                //  COMPTES AFG ET CONFRERES
                if ((cred_pub_tb_120003 === null || cred_pub_tb_120003 === void 0 ? void 0 : cred_pub_tb_120003.comptes.length) > 0) {
                  _this8.comptes = cred_pub_tb_120003 === null || cred_pub_tb_120003 === void 0 ? void 0 : cred_pub_tb_120003.comptes;
                  _this8.comptes = _this8.comptes.map(function (ed) {
                    return _objectSpread(_objectSpread({}, ed), {}, {
                      comeFrom: 'tb_120003'
                    });
                  });
                  _this8.handleInput();
                }
                if ((cred_pub_tb_120003 === null || cred_pub_tb_120003 === void 0 ? void 0 : cred_pub_tb_120003.comptes_chez_confrere.length) > 0) {
                  _this8.comptes_chez_confrere = cred_pub_tb_120003 === null || cred_pub_tb_120003 === void 0 ? void 0 : cred_pub_tb_120003.comptes_chez_confrere;
                  _this8.comptes_chez_confrere = _this8.comptes_chez_confrere.map(function (ed) {
                    return _objectSpread(_objectSpread({}, ed), {}, {
                      comeFrom: 'tb_120003'
                    });
                  });
                  _this8.handleInput();
                }
                _this8.handleInput();
                _this8.handleInput2();
              }
              if (lentb.length > 0) {
                if (_this8.meta_data['dossier_credit'][createdKey] != undefined) {
                  _this8.formDataToBeWatched = _this8.meta_data["dossier_credit"][createdKey];
                  _this8.revenu_domicilie_afg = (_this8$formDataToBeWa2 = _this8.formDataToBeWatched) === null || _this8$formDataToBeWa2 === void 0 ? void 0 : _this8$formDataToBeWa2.revenu_domicilie_afg;
                }
              } else {
                // SET FIRST TIME TO FALSE
                _this8.formDataToBeWatched.is_first_time = false;
              }
              _this8.retrieveEmployerInfo();
            case 8:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }))();
    },
    setSegmentEntreprise: function setSegmentEntreprise(segment_entreprise) {
      for (var i = 0; i < this.segment_entreprise_list.length; i++) {
        if (this.segment_entreprise_list[i]['name'] === segment_entreprise) {
          this.segment_entreprise_list[i]['checked'] = true;
          this.checkboxValSegEnt(segment_entreprise, this.segment_entreprise_list[i]['id']);
        }
      }
    },
    send2Backend: function send2Backend(res, newVal, oldVal) {
      this.authcheck = true;
      this.authcheckUsr = res.data;
      this.authcheckStatus = res.status;
      if (this.authcheckStatus === 401) {
        //            // window.location.href = "/login"
      }
      if (this.authcheck === true) {
        if (['', null].includes(this.formDataToBeWatched.global_env_entity)) {
          this.$console.log('global_env_entity', this.formDataToBeWatched.global_env_entity);
          this.formDataToBeWatched.global_env_entity = _services_ebapis_service__WEBPACK_IMPORTED_MODULE_2__["default"].loadableEntity()[0].toUpperCase();
          this.$console.log('global_env_entity', this.formDataToBeWatched.global_env_entity);
        }
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
    loadTbAttrs: function loadTbAttrs() {
      var l = [];
      var topdivel = this.$refs.topdiv;
      // let k = document.querySelectorAll('.subdiv')
      var k = document.querySelectorAll('.subdiv' + this.tb_name);
      // console.log(k)
      k.forEach(function (e) {
        l.push(e.innerText);
      });
      var p = {
        'name_of_title': topdivel.innerText,
        'list_of_content': l,
        id: "f0-head"
      };
      // console.log(p)
      this.$emit('load-buffer', p);
    },
    cafData: function cafData(res) {
      this.cafInfo = res.data;
      if (this.formDataToBeWatched.telephone_principal_dirg == undefined || this.formDataToBeWatched.telephone_principal_dirg.length === 0) {
        this.formDataToBeWatched.telephone_principal_dirg = this.cafInfo.phonecode;
      }
      // this.formDataToBeWatched.filiale = this.cafInfo.codecaf.replace(/[0-9]/g, "");
      if (this.entityType.toUpperCase() == 'BANK') {
        this.formDataToBeWatched.filiale = "AFG CIV";
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
      var _this9 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var response, a, b, c;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              if (!(obj != null)) {
                _context6.next = 19;
                break;
              }
              _context6.next = 3;
              return _this9.getInfoClient(obj.matcli);
            case 3:
              response = _context6.sent;
              _this9.formDataToBeWatched.matricule_client = obj.matcli;
              _this9.formDataToBeWatched.denomination_client = obj.nomcli;
              _this9.formDataToBeWatched.nom_emprunteur = obj.nomcli;
              _this9.formDataToBeWatched.adresse_professionnel_principal = obj.adrescli;
              _this9.formDataToBeWatched.geo_lat = obj.site_lat;
              _this9.formDataToBeWatched.geo_lon = obj.site_long;
              if (_this9.formDataToBeWatched.adresse_professionnel_principal == "" || _this9.formDataToBeWatched.adresse_professionnel_principal == null) {
                _this9.formDataToBeWatched.adresse_professionnel_principal == response.adrescli;
              }
              if (_this9.formDataToBeWatched.geo_lat == "0.0000000" || _this9.formDataToBeWatched.geo_lat == null) {
                _this9.formDataToBeWatched.geo_lat = response.site_lat;
              }
              if (_this9.formDataToBeWatched.geo_lon == "0.0000000" || _this9.formDataToBeWatched.geo_lon == null) {
                _this9.formDataToBeWatched.geo_lon = response.site_long;
              }
              a = obj.matcli;
              b = _this9.formDataToBeWatched.montant_sollicite;
              c = _this9.formDataToBeWatched.duree_credit;
              _context6.next = 18;
              return _this9.crdLd(obj.matcli);
            case 18:
              _this9.handleInput();

              /*EventBus.$emit("event-T0", {
                  formdata: this.formDataToBeWatched
              });*/
            case 19:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }))();
    },
    onClasseRisqueChange: function onClasseRisqueChange() {
      var _this0 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        var _this0$formDataToBeWa;
        var response, score_info;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _this0.formDataToBeWatched.note_edane = "";
              _this0.formDataToBeWatched.classe_risque = "";
              _this0.formDataToBeWatched.capital = "";
              _this0.formDataToBeWatched.coming_from_sni = false;
              _this0.$set(_this0.formDataToBeWatched, 'status_note_sni', null);
              _this0.$set(_this0.formDataToBeWatched, 'sni_details', null);
              if (!(((_this0$formDataToBeWa = _this0.formDataToBeWatched) === null || _this0$formDataToBeWa === void 0 ? void 0 : _this0$formDataToBeWa.has_etat_financier) == "Non")) {
                _context7.next = 8;
                break;
              }
              return _context7.abrupt("return");
            case 8:
              _this0.eventToAnaFin();
              _context7.next = 11;
              return _this0.getClasseRisque(_this0.formDataToBeWatched.compte_contribuable);
            case 11:
              response = _context7.sent;
              _this0.fetch_score = false;
              if (response["is_success"] == true) {
                score_info = response["score"][0]; // console.log(response["score"]["NOTE"])9606123E
                _this0.formDataToBeWatched.note_edane = score_info["CRAN"];
                _this0.formDataToBeWatched.classe_risque = score_info["QUALIFICATION"];
                _this0.formDataToBeWatched.capital = score_info["CA"];
                _this0.formDataToBeWatched.coming_from_sni = true;
                _this0.formDataToBeWatched.has_etat_financier = "Oui";
                _this0.$set(_this0.formDataToBeWatched, 'sni_details', score_info);
                _this0.$set(_this0.formDataToBeWatched, 'status_note_sni', score_info === null || score_info === void 0 ? void 0 : score_info['VALIDATION']);
                _this0.updateClasseRisque();
                EventBus.$emit('update-sni-callback');
              }
            case 14:
            case "end":
              return _context7.stop();
          }
        }, _callee7);
      }))();
    },
    getClasseRisque: function getClasseRisque(compte_comtribuable) {
      var _this1 = this;
      // console.log("compte_contribuable==> ",this.formDataToBeWatched.compte_contribuable)
      return new Promise(function (resolve, reject) {
        if (!['', null, undefined].includes(compte_comtribuable)) {
          if (compte_comtribuable.length > 7) {
            _this1.fetch_score = true;
            _this1.$axios.post(_this1.ebapisHost + "creditbuilder/api/v1/load-score/", {
              cc: compte_comtribuable
            }).then(function (res) {
              _this1.fetch_score = false;
              resolve(res.data);
            })["catch"](function (err) {
              console.log(err);
            });
          }
        }
      });
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
    selectedOptionSecteurActivite: function selectedOptionSecteurActivite(value, obj) {
      this.selected_secteur_activite = obj;
      var found = this.groupes_activites.filter(function (item) {
        return item.id == obj.groupe_activite_id;
      });
      if (found.length > 0) {
        this.selected_groupe_secteur = found[0];
        this.formDataToBeWatched.groupe_activite = found[0].intitule;
      }
      this.handleInput();
    },
    loadNoteVerification: function loadNoteVerification() {
      var _this11 = this;
      EventBus.$emit("open-extra-file-explorer");
      setTimeout(function () {
        EventBus.$emit("data-extra-file-explorer", {
          name: "Pièce justificative {(*)}piece_justificative_note_" + _this11.$route.params.templateId
        });
      }, 500);
    }
  }, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_methods, "formDataVars", function formDataVars(event) {
    this.formDataToBeWatched[event[0]] = event[1];
  }), "resetValues", function resetValues(event, index, objectName) {
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
  }), "handleInput2", function handleInput2() {
    var _this$revenu_domicili,
      _this12 = this;
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
        var periodicite = _this12.periodicites.find(function (p) {
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
          el.taux_qc1 = reset_taux_qc ? _this12.determinePourQutotite(el.montant_pondere, type_client) : el.taux_qc1;
          el.taux_qc2 = reset_taux_qc ? _this12.determinePourQutotite(el.montant_pondere) : el.taux_qc2;
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
  }), "handleInput", function handleInput() {
    var _this$revenu_domicili2,
      _this13 = this;
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
        var periodicite = _this13.periodicites.find(function (p) {
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
          _this13.$set(el, 'taux_qc1', reset_taux_qc ? _this13.determinePourQutotite(el.montant_pondere, type_client) : el.taux_qc1 || 0);
          el.taux_qc1 = reset_taux_qc ? _this13.determinePourQutotite(el.montant_pondere, type_client) : el.taux_qc1 || 0;
          el.taux_qtc_conjoint = reset_taux_qc ? _this13.determinePourQutotite(el.montant_pondere_conjoint, type_client) : el.taux_qtc_conjoint || 0;
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
    this.emitUpdated();
  }), "determinePourQutotite", function determinePourQutotite(value) {
    var _this14 = this;
    var type_client = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var taux = 0;
    if (this.pourcentages_quotites.length == 0) {
      setTimeout(function () {
        _this14.handleInput();
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
  }), "loadPourQuotiteData", function loadPourQuotiteData() {
    var _this15 = this;
    _services_credit_service__WEBPACK_IMPORTED_MODULE_4__["default"].loadPourQuotiteData().then(function (res) {
      _this15.pourcentages_quotites = res.data;
    })["catch"](function (err) {
      console.log(err);
    });
  }), "emitUpdated", function emitUpdated() {
    EventBus.$emit("dossier-updated-cace-0", {
      data0: this.formDataToBeWatched
    });
  }), "changeEligibleValue", function changeEligibleValue(event, index) {
    // setTimeout(() => {
    //     if (this.revenu_domicilie_afg[index]['eligible'] === false) {
    //         this.revenu_domicilie_afg[index]['taux'] = 0;
    //         this.revenu_domicilie_afg[index]['montant_pondere'] = 0;
    //         this.revenu_domicilie_afg[index]['montant_pondere_conjoint'] = 0;
    //         this.revenu_domicilie_afg[index]['taux_qc1'] = 0;
    //         this.revenu_domicilie_afg[index]['taux_qtc_conjoint'] = 0;
    //         this.revenu_domicilie_afg[index]['montant_qc1'] = 0;
    //         this.revenu_domicilie_afg[index]['montant_qc1_conjoint'] = 0;
    //         this.revenu_domicilie_afg[index]['taux_qc2'] = 0;
    //         this.revenu_domicilie_afg[index]['montant_qc2'] = 0;
    //         this.revenu_domicilie_afg[index]['source_remboursement'] = false;
    //         this.revenu_domicilie_afg[index]['periodicite'] = "";
    //         this.revenu_domicilie_afg[index]['mensualite'] = 0;
    //         this.revenu_domicilie_afg[index]['commentaire'] = "";
    //     } else {
    //         if (this.revenu_domicilie_afg[index]['libelle'] === 'Salaire net') {
    //             this.revenu_domicilie_afg[index]['taux'] = 100;
    //         }
    //         if (['Revenu locatif', 'Prime'].includes(this.revenu_domicilie_afg[index]['libelle'])) {
    //             this.revenu_domicilie_afg[index]['taux'] = 75;
    //             this.revenu_domicilie_afg[index]['taux_qc1'] = 75;
    //             this.revenu_domicilie_afg[index]['taux_qtc_conjoint'] = 75;
    //         }
    //     }
    //     this.handleInput();
    // }, 500);
  }), "changeEligibleValueSR", function changeEligibleValueSR(event, index) {
    var _this16 = this;
    setTimeout(function () {
      if (_this16.revenu_domicilie_afg[index]['source_remboursement'] === false) {
        _this16.revenu_domicilie_afg[index]['taux'] = 0;
        _this16.revenu_domicilie_afg[index]['montant_pondere'] = 0;
        _this16.revenu_domicilie_afg[index]['montant_pondere_conjoint'] = 0;
        _this16.revenu_domicilie_afg[index]['taux_qc1'] = 0;
        _this16.revenu_domicilie_afg[index]['taux_qtc_conjoint'] = 0;
        _this16.revenu_domicilie_afg[index]['montant_qc1'] = 0;
        _this16.revenu_domicilie_afg[index]['montant_qc1_conjoint'] = 0;
        _this16.revenu_domicilie_afg[index]['taux_qc2'] = 0;
        _this16.revenu_domicilie_afg[index]['montant_qc2'] = 0;
        _this16.revenu_domicilie_afg[index]['eligible'] = false;
        _this16.revenu_domicilie_afg[index]['periodicite'] = "";
        _this16.revenu_domicilie_afg[index]['mensualite'] = 0;
        _this16.revenu_domicilie_afg[index]['commentaire'] = "";
        _this16.revenu_domicilie_afg[index]['taux_qc2'] = "";
      } else {
        if (_this16.revenu_domicilie_afg[index]['libelle'] === 'Salaire net') {
          _this16.revenu_domicilie_afg[index]['taux'] = 100;
        }
        if (['Revenu locatif', 'Prime'].includes(_this16.revenu_domicilie_afg[index]['libelle'])) {
          _this16.revenu_domicilie_afg[index]['taux'] = 75;
          _this16.revenu_domicilie_afg[index]['taux_qc1'] = 75;
          _this16.revenu_domicilie_afg[index]['taux_qtc_conjoint'] = 75;
        }
      }
      _this16.handleInput();
    }, 500);
  }), "somX3", function somX3(ob, key) {
    var som = 0;
    ob === null || ob === void 0 || ob.forEach(function (elm) {
      var val = elm[key];
      if (val != null && !isNaN(val.toString().replace(/\s/g, ""))) {
        som += Number(val.toString().replace(/\s/g, ""));
      }
    });
    return som;
  }), _defineProperty(_defineProperty(_defineProperty(_methods, "convertInt", function convertInt(n) {
    var _n$toString;
    return Number(n === null || n === void 0 || (_n$toString = n.toString()) === null || _n$toString === void 0 ? void 0 : _n$toString.replace(/\s/g, ''));
  }), "loadScoringData", function loadScoringData() {
    var _this17 = this;
    _services_credit_service__WEBPACK_IMPORTED_MODULE_4__["default"].loadScoringData().then(function (res) {
      _this17.scoringData(res);
      // localStorage.setItem('scoring_criteres', JSON.stringify(res));
    })["catch"](function (err) {
      console.log(err);
    });
  }), "scoringData", function scoringData(res) {
    var _this18 = this;
    var criteres = res.data.data.criteres;
    criteres.forEach(function (element) {
      if (element.type == 'ppo' || element.type == null) {
        if (element.slug == 'statut_du_client_selon_lemployeur') {
          _this18.data_statut_du_client = element.elements.filter(function (item) {
            return item.type == 'ppo' || item.type == null;
          });
        }
        if (element.slug == 'type_de_contrat') {
          _this18.data_type_de_contrat = element.elements.filter(function (item) {
            return item.type == 'ppo' || item.type == null;
          });
        }
        if (element.slug == 'le_client_a_t_il_acheve_sa_periode_dessai_professionnel') {
          _this18.data_le_client_a_t_il = element.elements.filter(function (item) {
            return item.type == 'ppo' || item.type == null;
          });
        }
        if (element.slug == 'date_de_depart_a_la_retraite_ou_06_mois_apres_lecheance_du_credit') {
          _this18.data_date_de_depart_a_la_retraite = element.elements.filter(function (item) {
            return item.type == 'ppo' || item.type == null;
          });
        }
      }
    });
  })),
  watch: {
    formDataToBeWatched: {
      handler: function handler(newVal, oldVal) {
        this.autosaving(newVal, oldVal);
        this.emitUpdated();
      },
      deep: true,
      immediate: true
    },
    'formDataToBeWatched.bilan_certifie': function formDataToBeWatchedBilan_certifie() {
      var _this$formDataToBeWat0;
      if (this.formDataToBeWatched.bilan_certifie == 'Non' && ((_this$formDataToBeWat0 = this.formDataToBeWatched.nom_cabinet_comptable) === null || _this$formDataToBeWat0 === void 0 ? void 0 : _this$formDataToBeWat0.length) > 0) {
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
        var _this$formDataToBeWat1;
        if (['', null, undefined, false].includes((_this$formDataToBeWat1 = this.formDataToBeWatched) === null || _this$formDataToBeWat1 === void 0 ? void 0 : _this$formDataToBeWat1.coming_from_sni)) {
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/contre_etude/CA-CE0.vue?vue&type=template&id=2aeac2d9&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/contre_etude/CA-CE0.vue?vue&type=template&id=2aeac2d9&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$formDataToBeWatch, _vm$meta_data, _vm$meta_data2, _vm$status_object, _vm$status_object2, _vm$meta_data3, _vm$formDataToBeWatch2;
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
      id: "f0-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Identification du client\n                        ")]), _vm._v(" "), _c("div", {
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
  }, [_c("span", [_vm._v(" " + _vm._s(_vm.formDataToBeWatched.notes.length) + " ")])])])]) : _vm._e(), _vm._v(" "), _c("chevron-up-icon", {
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
  })], 1)])]), _vm._v(" "), _vm.seen7 && !["CRESCO", "Découvert Privilège"].includes((_vm$meta_data2 = _vm.meta_data) === null || _vm$meta_data2 === void 0 || (_vm$meta_data2 = _vm$meta_data2.dossier_credit) === null || _vm$meta_data2 === void 0 ? void 0 : _vm$meta_data2.applied_templ_name) ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen7 = !_vm.seen7;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "bref-rappel-des-relations-du-client-avec-la-afg-banque-ci"
    }
  }, [_vm._v("\n                                Situation familiale\n                                "), _c("chevron-up-icon", {
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
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(11), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.matrimoniale,
      expression: "formDataToBeWatched.matrimoniale"
    }],
    staticClass: "form-control",
    staticStyle: {
      "background-color": "#00ffff21"
    },
    attrs: {
      id: "matrimoniale",
      readonly: (_vm$status_object = _vm.status_object) === null || _vm$status_object === void 0 ? void 0 : _vm$status_object.matrimoniale,
      disabled: (_vm$status_object2 = _vm.status_object) === null || _vm$status_object2 === void 0 ? void 0 : _vm$status_object2.matrimoniale
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formDataToBeWatched, "matrimoniale", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.handleInput]
    }
  }, [_c("option", {
    attrs: {
      value: "",
      selected: ""
    }
  }, [_vm._v("\n                                            --- Sélectionner la situation matrimoniale ---\n                                        ")]), _vm._v(" "), _c("option", {
    attrs: {
      value: ""
    }
  }), _vm._v(" "), _c("option", {
    attrs: {
      value: "Divorcé(e)"
    }
  }, [_vm._v("Divorcé(e)")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Célibataire"
    }
  }, [_vm._v("Célibataire")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Marié(e)"
    }
  }, [_vm._v("Marié(e)")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Veuf(ve)"
    }
  }, [_vm._v("Veuf(ve)")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Concubinage"
    }
  }, [_vm._v("Concubinage")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Remarié(e)"
    }
  }, [_vm._v("Remarié(e)")])])]), _vm._v(" "), _vm.formDataToBeWatched.matrimoniale == "Marié(e)" ? _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(12), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.regime_matrimonial,
      expression: "formDataToBeWatched.regime_matrimonial"
    }],
    staticClass: "form-select single-select",
    staticStyle: {
      "background-color": "#00ffff21"
    },
    attrs: {
      id: "regime_matrimonial"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formDataToBeWatched, "regime_matrimonial", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.handleInput]
    }
  }, [_c("option", {
    attrs: {
      value: "",
      disabled: "",
      selected: ""
    }
  }, [_vm._v("\n                                            --- Sélectionner le régime matrimonial ---\n                                        ")]), _vm._v(" "), _c("option", {
    attrs: {
      value: ""
    }
  }), _vm._v(" "), _c("option", {
    attrs: {
      value: "Communauté"
    }
  }, [_vm._v("Communauté")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Séparation de biens"
    }
  }, [_vm._v("Séparation de biens")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Polygamie"
    }
  }, [_vm._v("Polygamie")])])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(13), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.habitation,
      expression: "formDataToBeWatched.habitation"
    }],
    staticClass: "form-control",
    staticStyle: {
      "background-color": "#00ffff21"
    },
    attrs: {
      id: "habitation"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formDataToBeWatched, "habitation", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.handleInput]
    }
  }, [_c("option", {
    attrs: {
      value: "",
      disabled: "",
      selected: ""
    }
  }, [_vm._v("\n                                            --- Sélectionner le type de logement ---\n                                        ")]), _vm._v(" "), _c("option", {
    attrs: {
      value: ""
    }
  }), _vm._v(" "), _c("option", {
    attrs: {
      value: "Locataire"
    }
  }, [_vm._v("Locataire")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Appartement des parents"
    }
  }, [_vm._v("Appartement des parents/logé à titre gratuit")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Propriétaire"
    }
  }, [_vm._v("Propriétaire")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(14), _vm._v(" "), _c("MothAndYearInput", {
    attrs: {
      background: "background: #00ffff21",
      id: "anciennete_adresse",
      readonly: false,
      viewonly: false
    },
    on: {
      change: _vm.handleInput
    },
    model: {
      value: _vm.formDataToBeWatched.anciennete_adresse,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "anciennete_adresse", $$v);
      },
      expression: "formDataToBeWatched.anciennete_adresse"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(15), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.nbre_enfant,
      expression: "formDataToBeWatched.nbre_enfant"
    }],
    staticClass: "form-control",
    staticStyle: {
      "background-color": "#00ffff21"
    },
    attrs: {
      type: "number",
      min: "0",
      id: "nbre_enfant"
    },
    domProps: {
      value: _vm.formDataToBeWatched.nbre_enfant
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "nbre_enfant", $event.target.value);
      }, _vm.checkValueNbreEnfant]
    }
  })]), _vm._v(" "), _vm.formDataToBeWatched.matrimoniale == "Marié(e)" ? _c("div", [_vm.seen1 ? _c("div", {
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
      id: "conjoint(e)"
    }
  }, [_vm._v("\n                                                Conjoint(e)\n                                                "), _c("chevron-up-icon", {
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
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(16), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.conjoint.nom,
      expression: "formDataToBeWatched.conjoint.nom"
    }],
    staticClass: "form-control",
    staticStyle: {
      "background-color": "#00ffff21"
    },
    attrs: {
      type: "text",
      id: "conjoint_nom"
    },
    domProps: {
      value: _vm.formDataToBeWatched.conjoint.nom
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched.conjoint, "nom", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(17), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.conjoint.prenoms,
      expression: "formDataToBeWatched.conjoint.prenoms"
    }],
    staticClass: "form-control",
    staticStyle: {
      "background-color": "#00ffff21"
    },
    attrs: {
      type: "text",
      id: "conjoint_prenoms"
    },
    domProps: {
      value: _vm.formDataToBeWatched.conjoint.prenoms
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched.conjoint, "prenoms", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    attrs: {
      "for": "conjoint_matrimoniale"
    }
  }, [_vm._v("Situation matrimoniale ")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.conjoint.matrimoniale,
      expression: "formDataToBeWatched.conjoint.matrimoniale"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "conjoint_matrimoniale",
      value: "Marié(e)",
      readonly: ""
    },
    domProps: {
      value: _vm.formDataToBeWatched.conjoint.matrimoniale
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched.conjoint, "matrimoniale", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(18), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.conjoint.adresse,
      expression: "formDataToBeWatched.conjoint.adresse"
    }],
    staticClass: "form-control",
    staticStyle: {
      "background-color": "#00ffff21"
    },
    attrs: {
      type: "text",
      id: "conjoint_adresse"
    },
    domProps: {
      value: _vm.formDataToBeWatched.conjoint.adresse
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched.conjoint, "adresse", $event.target.value);
      }
    }
  })])])])]) : _c("div", {
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
      id: "conjoint(e)"
    }
  }, [_vm._v("\n                                                Conjoint(e)\n                                                "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])])]) : _vm._e()])])]) : _c("div", {
    staticClass: "card-body"
  }, [!["CRESCO", "Découvert Privilège"].includes((_vm$meta_data3 = _vm.meta_data) === null || _vm$meta_data3 === void 0 || (_vm$meta_data3 = _vm$meta_data3.dossier_credit) === null || _vm$meta_data3 === void 0 ? void 0 : _vm$meta_data3.applied_templ_name) ? _c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen7 = !_vm.seen7;
      }
    }
  }, [_c("h6", {
    attrs: {
      id: "bref-rappel-des-relations-du-client-avec-la-afg-banque-ci"
    }
  }, [_vm._v("\n                                Situation familiale\n                                "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)]) : _vm._e()]), _vm._v(" "), _vm.seen2 ? _c("div", {
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
  }, [_c("thead", [_c("tr", [_vm._m(19), _vm._v(" "), _vm._m(20), _vm._v(" "), _vm.formDataToBeWatched.matrimoniale == "Marié(e)" ? _c("td", {
    staticClass: "th",
    staticStyle: {
      "min-width": "150px"
    }
  }, [_vm._v("Conjoint(e)")]) : _vm._e(), _vm._v(" "), _vm.formDataToBeWatched.matrimoniale == "Marié(e)" ? _c("td", {
    staticClass: "th",
    staticStyle: {
      "min-width": "150px"
    }
  }, [_vm._v("Total")]) : _vm._e(), _vm._v(" "), _vm._m(21), _vm._v(" "), _vm._m(22), _vm._v(" "), _vm._m(23), _vm._v(" "), _vm._m(24), _vm._v(" "), _vm.formDataToBeWatched.matrimoniale == "Marié(e)" ? _c("td", {
    staticClass: "th",
    staticStyle: {
      "min-width": "150px"
    }
  }, [_vm._v("Revenu  conjoint "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]) : _vm._e(), _vm._v(" "), _vm._m(25), _vm._v(" "), _vm._m(26), _vm._v(" "), _vm.formDataToBeWatched.matrimoniale == "Marié(e)" ? _c("td", {
    staticClass: "th",
    staticStyle: {
      "min-width": "150px"
    }
  }, [_vm._v("Montant considéré conjoint "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]) : _vm._e(), _vm._v(" "), _vm._m(27), _vm._v(" "), _vm.formDataToBeWatched.matrimoniale == "Marié(e)" ? _c("td", {
    staticClass: "th",
    staticStyle: {
      "min-width": "100px"
    }
  }, [_vm._v("TQC CONJOINT")]) : _vm._e(), _vm._v(" "), _vm._m(28), _vm._v(" "), _vm.formDataToBeWatched.matrimoniale == "Marié(e)" ? _c("td", {
    staticClass: "th",
    staticStyle: {
      "min-width": "150px"
    }
  }, [_vm._v("QC CONJOINT")]) : _vm._e(), _vm._v(" "), _vm._m(29), _vm._v(" "), _vm._m(30), _vm._v(" "), _c("td", {
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
    }, [_vm._m(31, true), _vm._v(" "), _c("currency-input2", {
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
  }, [_vm._v("\n                Fermer le tableau\n            ")])])]) : _c("div", {
    staticClass: "card card-width-height"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc pb-0 pt-2"
  }, [_c("h6", {
    staticClass: "head",
    attrs: {
      id: "f0-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Identification du client\n                        ")]), _vm._v(" "), _c("div", {
    staticClass: "col-auto"
  }, [((_vm$formDataToBeWatch2 = _vm.formDataToBeWatched.notes) === null || _vm$formDataToBeWatch2 === void 0 ? void 0 : _vm$formDataToBeWatch2.length) > 0 ? _c("div", {
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
  }, [_c("span", [_vm._v(" " + _vm._s(_vm.formDataToBeWatched.notes.length) + " ")])])])]) : _vm._e(), _vm._v(" "), _c("chevron-down-icon", {
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
  })], 1)])])])])], 1), _vm._v(" "), _c("note-modal", {
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
  return _c("label", {
    attrs: {
      "for": "matrimoniale"
    }
  }, [_vm._v("Situation matrimoniale "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "regime_matrimonial"
    }
  }, [_vm._v("Régime matrimonial "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": "habitation"
    }
  }, [_vm._v("Type de logement "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", [_vm._v("Ancienneté à l'adresse actuelle "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": "nbre_enfant"
    }
  }, [_vm._v("Nombre d'enfants "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": "conjoint_nom"
    }
  }, [_vm._v("Nom "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": "conjoint_prenoms"
    }
  }, [_vm._v("Prénom "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": "conjoint_adresse"
    }
  }, [_vm._v("Adresse "), _c("span", {
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

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/contre_etude/CA-CE0.vue?vue&type=style&index=0&id=2aeac2d9&lang=css&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/contre_etude/CA-CE0.vue?vue&type=style&index=0&id=2aeac2d9&lang=css&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\ninput[data-v-2aeac2d9] {\r\n    /*border: 1px solid red;*/\n}\n*[data-v-2aeac2d9] {\r\n\r\n    font-family: \"Google sans\";\n}\nlabel[data-v-2aeac2d9] {\r\n    height: 10px;\r\n    font-size: 13px;\n}\ninput[data-v-2aeac2d9],\r\nselect[data-v-2aeac2d9] {\r\n    height: 35px;\r\n    border-color: #34495e;\r\n    color: #57606f;\r\n    font-size: 13px;\r\n    font-weight: bold;\n}\n.card-width-height[data-v-2aeac2d9] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-2aeac2d9] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\n.hdc[data-v-2aeac2d9] {\r\n    background-color: #57606f;\n}\n.relook-header[data-v-2aeac2d9] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 2px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\r\n\r\n\r\n/* Ajouter note */\n.badge-sm[data-v-2aeac2d9] {\r\n    display: inline-block;\r\n    width: 15px;\r\n    height: 15px;\r\n    background: rgba(255, 0, 0, 0.882);\r\n    color: white;\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    border-radius: 100%;\r\n    position: absolute;\r\n    top: -20%;\r\n    left: 55%;\r\n    text-align: center;\n}\ninput[type=checkbox][data-v-2aeac2d9] {\r\n    /* Double-sized Checkboxes */\r\n    /* IE */\r\n    /* FF */\r\n    /* Safari and Chrome */\r\n    /* Opera */\r\n    transform: scale(2);\r\n    padding: 10px;\n}\ninput[type=checkbox].form-check-input[data-v-2aeac2d9] {\r\n    /* IE */\r\n    /* FF */\r\n    /* Safari and Chrome */\r\n    /* Opera */\r\n    transform: scale(1);\r\n    padding: 0px;\n}\r\n\r\n/* Might want to wrap a span around your checkbox text */\n.checkboxtext[data-v-2aeac2d9] {\r\n    /* Checkbox text */\r\n    font-size: 110%;\r\n    display: inline;\n}\n[data-v-2aeac2d9]::-webkit-calendar-picker-indicator {}\n#secteur_activite[data-v-2aeac2d9] {\r\n    background: #00ffff21;\r\n    color: #000;\n}\n.to-uppercase[data-v-2aeac2d9] {\r\n    text-transform: uppercase;\n}\n.dossier-table[data-v-2aeac2d9] {\r\n    width: 100%;\n}\n.dossier-cell[data-v-2aeac2d9]{\r\n    text-align: center; \r\n    vertical-align: middle; \r\n    /* padding-top: 0 !important;\r\n    padding-bottom: 0 !important; */\n}\ntextarea[data-v-2aeac2d9] {\r\n    width: 100%;\n}\n.custom-width[data-v-2aeac2d9] {\r\n    max-width: 100px !important;\n}\n.custom-font-weight[data-v-2aeac2d9] {\r\n    font-weight: bold !important;\n}\n.label[data-v-2aeac2d9] {\r\n    font-weight: bold;\r\n    font-size: 18px;\n}\n.incremental[data-v-2aeac2d9] {\r\n    margin-top: 0 !important;\r\n     margin-top: -30px !important;\r\n    margin-left: 5px !important;\n}\n.relook-header[data-v-2aeac2d9] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\n.width-100[data-v-2aeac2d9] {\r\n    width: 90%;\n}\n.personne input[data-v-2aeac2d9] {\r\n    width: 135px;\n}\n._border_right[data-v-2aeac2d9] {\r\n    border-right: 1px solid;\n}\n.text-red[data-v-2aeac2d9] {\r\n    color: red;\n}\n.multiselect-option p[data-v-2aeac2d9] {\r\n    margin: 0 !important;\r\n    padding: 10px !important;\n}\n.vertical-middle[data-v-2aeac2d9] {\r\n    vertical-align: middle;\n}\ninput[type=\"checkbox\"][data-v-2aeac2d9] {\r\n    height: 18px;\r\n    width: 20px;\r\n    margin-right: 5px;\n}\n.revenu input[type=\"checkbox\"][data-v-2aeac2d9],\r\n.engagement input[type=\"checkbox\"][data-v-2aeac2d9],\r\n.garantie input[type=\"checkbox\"][data-v-2aeac2d9] {\r\n    height: 26px;\r\n    width: 24px;\r\n    margin-right: 5px;\n}\n.mt-2_5-px[data-v-2aeac2d9] {\r\n    margin-top: 2.5px;\n}\ntd[data-v-2aeac2d9],\r\np[data-v-2aeac2d9] {\r\n    font-size: 13px;\n}\n.bg-blue[data-v-2aeac2d9] {\r\n    background-color: #00ffff21 !important;\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/contre_etude/CA-CE0.vue?vue&type=style&index=0&id=2aeac2d9&lang=css&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/contre_etude/CA-CE0.vue?vue&type=style&index=0&id=2aeac2d9&lang=css&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA_CE0_vue_vue_type_style_index_0_id_2aeac2d9_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CA-CE0.vue?vue&type=style&index=0&id=2aeac2d9&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/contre_etude/CA-CE0.vue?vue&type=style&index=0&id=2aeac2d9&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA_CE0_vue_vue_type_style_index_0_id_2aeac2d9_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA_CE0_vue_vue_type_style_index_0_id_2aeac2d9_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/js/components/forms/afg/contre_etude/CA-CE0.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/forms/afg/contre_etude/CA-CE0.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CA_CE0_vue_vue_type_template_id_2aeac2d9_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CA-CE0.vue?vue&type=template&id=2aeac2d9&scoped=true */ "./resources/js/components/forms/afg/contre_etude/CA-CE0.vue?vue&type=template&id=2aeac2d9&scoped=true");
/* harmony import */ var _CA_CE0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CA-CE0.vue?vue&type=script&lang=js */ "./resources/js/components/forms/afg/contre_etude/CA-CE0.vue?vue&type=script&lang=js");
/* harmony import */ var _CA_CE0_vue_vue_type_style_index_0_id_2aeac2d9_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CA-CE0.vue?vue&type=style&index=0&id=2aeac2d9&lang=css&scoped=true */ "./resources/js/components/forms/afg/contre_etude/CA-CE0.vue?vue&type=style&index=0&id=2aeac2d9&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CA_CE0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CA_CE0_vue_vue_type_template_id_2aeac2d9_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _CA_CE0_vue_vue_type_template_id_2aeac2d9_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2aeac2d9",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/forms/afg/contre_etude/CA-CE0.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/forms/afg/contre_etude/CA-CE0.vue?vue&type=script&lang=js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/contre_etude/CA-CE0.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CA_CE0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CA-CE0.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/contre_etude/CA-CE0.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CA_CE0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/forms/afg/contre_etude/CA-CE0.vue?vue&type=style&index=0&id=2aeac2d9&lang=css&scoped=true":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/contre_etude/CA-CE0.vue?vue&type=style&index=0&id=2aeac2d9&lang=css&scoped=true ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA_CE0_vue_vue_type_style_index_0_id_2aeac2d9_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CA-CE0.vue?vue&type=style&index=0&id=2aeac2d9&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/contre_etude/CA-CE0.vue?vue&type=style&index=0&id=2aeac2d9&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/forms/afg/contre_etude/CA-CE0.vue?vue&type=template&id=2aeac2d9&scoped=true":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/contre_etude/CA-CE0.vue?vue&type=template&id=2aeac2d9&scoped=true ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA_CE0_vue_vue_type_template_id_2aeac2d9_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA_CE0_vue_vue_type_template_id_2aeac2d9_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CA_CE0_vue_vue_type_template_id_2aeac2d9_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CA-CE0.vue?vue&type=template&id=2aeac2d9&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/contre_etude/CA-CE0.vue?vue&type=template&id=2aeac2d9&scoped=true");


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