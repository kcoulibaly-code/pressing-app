"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_forms_afg_carcasse_ppo_DCPP-PCP2_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/carcasse_ppo/DCPP-PCP2.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/carcasse_ppo/DCPP-PCP2.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/auth.service */ "./resources/js/services/auth.service.js");
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/credit.service */ "./resources/js/services/credit.service.js");
/* harmony import */ var _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vueform/multiselect/dist/multiselect.vue2 */ "./node_modules/@vueform/multiselect/dist/multiselect.vue2.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../helpers/helper */ "./resources/js/helpers/helper.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../helpers/indexedDB */ "./resources/js/helpers/indexedDB.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_helpers_indexedDB__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_shared_MothAndYearInput_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/shared/MothAndYearInput.vue */ "./resources/js/components/shared/MothAndYearInput.vue");
/* provided dependency */ var process = __webpack_require__(/*! process/browser.js */ "./node_modules/process/browser.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _methods;
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
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







// ? IndexedDB helper for formDataToBeWatched Cache management


/**
 * Cache Management variables
 */
var indexedDBName = "CREDITFLOW_TABLES";
var collectionName = "TABLES";
var documentName = "T";
var documentId = null;
var _cache,
  _lastSaveTime = null,
  _onlineSaveIntervalTimeInSeconds = 30;
var _DEBUG = process.env.MIX_APP_DEBUG;
var _cacheAutosaveInterval = null;
var _timeSpentInSeconds = 0;
// -- End Cache Management variables

window.$ = window.jQuery = __webpack_require__(/*! jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Profil_professionnel",
  display: "Profil professionnel",
  components: {
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.ChevronDownIcon,
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.TrashIcon,
    AirplayIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.AirplayIcon,
    Multiselect: _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_3__["default"],
    MothAndYearInput: _components_shared_MothAndYearInput_vue__WEBPACK_IMPORTED_MODULE_6__["default"]
    // BookOpenIcon,
  },
  computed: {
    professions_: function professions_() {
      return [{
        id: 0,
        libelle: 'Autre',
        slug: 'autre'
      }].concat(_toConsumableArray(this.professions));
    },
    convention_entreprises_: function convention_entreprises_() {
      var autre_employeur = {
        ent_pub_key: "autre",
        denomination: "Autre",
        type_entreprise: ["ENTREPRISE_NORMALE"],
        info_entreprise: {
          sigle: "",
          denomination: "Autre",
          dpt: "",
          gestionnaire: "",
          indice: ""
        }
      };
      return [_objectSpread({}, autre_employeur)].concat(_toConsumableArray(this.convention_entreprises));
    },
    groupes_activites_: function groupes_activites_() {
      var array = [];
      this.groupes_activites.forEach(function (element) {
        array.push(element);
      });
      return array;
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
      array.push({
        intitule: "Autre"
      });
      return array;
    }
  },
  props: {
    meta_data: Object,
    tb_name: String,
    tb_display_name: String
  },
  created: function created() {
    var _this2 = this;
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _this2.getNationalites();
          case 2:
            _context.next = 4;
            return _this2.getCreditBanques();
          case 4:
            _context.next = 6;
            return _this2.getProfessions();
          case 6:
            _context.next = 8;
            return _this2.loadScoringData();
          case 8:
            _context.next = 10;
            return _this2.loadPourQuotiteData();
          case 10:
            _context.next = 12;
            return _this2.getEntreprises();
          case 12:
            // const cachedSecteurs = localStorage.getItem("secteurs_activites");
            // if (!cachedSecteurs) {
            //     await Credit.secteurs_activites()
            //         .then((res) => {
            //             this.secteurs_activites = res.data;

            //             localStorage.setItem(
            //                 "secteurs_activites",
            //                 JSON.stringify(res.data)
            //             );
            //         })
            //         .catch((err) => {
            //             console.log(err);
            //         });
            // } else {
            //     let data = JSON.parse(cachedSecteurs);
            //     this.secteurs_activites = data;
            // }

            EventBus.$on("cred_pub_tb_10002-updated", function (data) {
              _this2.matrimoniale = data === null || data === void 0 ? void 0 : data.matrimoniale;
              if (_this2.date_naissance != (data === null || data === void 0 ? void 0 : data.date_naissance)) {
                _this2.date_naissance = data === null || data === void 0 ? void 0 : data.date_naissance;
                _this2.formDataToBeWatched.date_depart_retraite = "";
                _this2.updateDateDepartRetraite();
              }

              // this.engagements_en_cours = data?.engagements_en_cours;
              // this.engagements_en_cours_conjoints = data?.engagements_en_cours_conjoints;

              if ((data === null || data === void 0 ? void 0 : data.revenu_domicilie) != undefined) {
                var _data$revenu_domicili, _data$revenu_domicili2;
                if ((data === null || data === void 0 ? void 0 : data.revenu_domicilie[0]) != undefined && (data === null || data === void 0 || (_data$revenu_domicili = data.revenu_domicilie[0]) === null || _data$revenu_domicili === void 0 ? void 0 : _data$revenu_domicili.libelle) != undefined && (data === null || data === void 0 || (_data$revenu_domicili2 = data.revenu_domicilie[0]) === null || _data$revenu_domicili2 === void 0 ? void 0 : _data$revenu_domicili2.libelle) == 'Salaire net') {
                  var _data$revenu_domicili3;
                  _this2.formDataToBeWatched.salaire = data === null || data === void 0 || (_data$revenu_domicili3 = data.revenu_domicilie[0]) === null || _data$revenu_domicili3 === void 0 ? void 0 : _data$revenu_domicili3.montant_emprunteur;
                }
              }
              _this2.formDataToBeWatched.revenu_total_colonne_montant_pondere = data === null || data === void 0 ? void 0 : data.revenu_total_colonne_montant_pondere;

              // this.calculEcheanceTotal();
              _this2.formDataToBeWatched.conjoint.pourcentage_quotite = data === null || data === void 0 ? void 0 : data.revenu_total_colonne_taux_qc1_conjoint;
              _this2.formDataToBeWatched.conjoint.quotite_cessible = data === null || data === void 0 ? void 0 : data.revenu_total_colonne_montant_qc1_conjoint;
              _this2.formDataToBeWatched.conjoint.quotite_cessible_disponible = data === null || data === void 0 ? void 0 : data.revenu_total_colonne_montant_qc1_conjoint;
              _this2.handleInput();
            });
            EventBus.$on("dossier-updated-dcpp-1", function (data) {
              var _data$data_tb, _data$data_tb2;
              // console.log("dcp-0 updated", data);
              _this2.echeance = data === null || data === void 0 || (_data$data_tb = data.data_tb2) === null || _data$data_tb === void 0 ? void 0 : _data$data_tb.r_mensualite;
              // this.duree_credit = data?.data_tb0?.duree_credit;
              // this.engagements_en_cours = data?.data_tb2?.engagements_en_cours;

              if ((data === null || data === void 0 || (_data$data_tb2 = data.data_tb2) === null || _data$data_tb2 === void 0 ? void 0 : _data$data_tb2.revenu_domicilie) != undefined) {
                var _data$data_tb3, _data$data_tb4, _data$data_tb5;
                if ((data === null || data === void 0 || (_data$data_tb3 = data.data_tb2) === null || _data$data_tb3 === void 0 ? void 0 : _data$data_tb3.revenu_domicilie[0]) != undefined && (data === null || data === void 0 || (_data$data_tb4 = data.data_tb2) === null || _data$data_tb4 === void 0 || (_data$data_tb4 = _data$data_tb4.revenu_domicilie[0]) === null || _data$data_tb4 === void 0 ? void 0 : _data$data_tb4.libelle) != undefined && (data === null || data === void 0 || (_data$data_tb5 = data.data_tb2) === null || _data$data_tb5 === void 0 || (_data$data_tb5 = _data$data_tb5.revenu_domicilie[0]) === null || _data$data_tb5 === void 0 ? void 0 : _data$data_tb5.libelle) == 'Salaire net') {
                  var _data$data_tb6, _data$data_tb7, _data$data_tb8;
                  _this2.formDataToBeWatched.salaire = data === null || data === void 0 || (_data$data_tb6 = data.data_tb2) === null || _data$data_tb6 === void 0 || (_data$data_tb6 = _data$data_tb6.revenu_domicilie[0]) === null || _data$data_tb6 === void 0 ? void 0 : _data$data_tb6.montant_emprunteur;
                  _this2.formDataToBeWatched.conjoint.salaire = data === null || data === void 0 || (_data$data_tb7 = data.data_tb2) === null || _data$data_tb7 === void 0 || (_data$data_tb7 = _data$data_tb7.revenu_domicilie[0]) === null || _data$data_tb7 === void 0 ? void 0 : _data$data_tb7.montant_conjoint;
                  _this2.formDataToBeWatched.conjoint.revenu_total_colonne_conjoint = data === null || data === void 0 || (_data$data_tb8 = data.data_tb2) === null || _data$data_tb8 === void 0 ? void 0 : _data$data_tb8.revenu_total_colonne_conjoint;
                }
              }

              // this.formDataToBeWatched.revenu_total_colonne_montant_pondere = data?.data_tb2?.revenu_total_colonne_montant_pondere;
              // this.formDataToBeWatched.revenu_total_colonne_montant_qc1 = data?.data_tb0?.revenu_total_colonne_montant_qc1;
              // this.formDataToBeWatched.revenu_total_colonne_montant_qc2 = data?.data_tb0?.revenu_total_colonne_montant_qc2;

              var convention_entreprise = data === null || data === void 0 ? void 0 : data.convention_entreprise;
              if ((convention_entreprise === null || convention_entreprise === void 0 ? void 0 : convention_entreprise.ent_pub_key) != undefined) {
                var _convention_entrepris, _convention_entrepris2, _convention_entrepris3, _convention_entrepris4;
                _this2.entreprise = convention_entreprise === null || convention_entreprise === void 0 || (_convention_entrepris = convention_entreprise.info_entreprise) === null || _convention_entrepris === void 0 ? void 0 : _convention_entrepris.denomination;
                _this2.formDataToBeWatched.entreprise = convention_entreprise === null || convention_entreprise === void 0 || (_convention_entrepris2 = convention_entreprise.info_entreprise) === null || _convention_entrepris2 === void 0 ? void 0 : _convention_entrepris2.denomination;
                _this2.formDataToBeWatched.statut_entreprise = "".concat((convention_entreprise === null || convention_entreprise === void 0 || (_convention_entrepris3 = convention_entreprise.tiering) === null || _convention_entrepris3 === void 0 || (_convention_entrepris3 = _convention_entrepris3.toString()) === null || _convention_entrepris3 === void 0 ? void 0 : _convention_entrepris3.replace('_', ' ')) || '', " - ").concat((convention_entreprise === null || convention_entreprise === void 0 || (_convention_entrepris4 = convention_entreprise.type_entreprise) === null || _convention_entrepris4 === void 0 ? void 0 : _convention_entrepris4[0]) || '');
                if (convention_entreprise.ent_pub_key == 'autre') {
                  _this2.entreprise = "Autre";
                  _this2.formDataToBeWatched.statut_entreprise = "Non listée";
                }
                _this2.changeStatutEntreprise(_this2.formDataToBeWatched.statut_entreprise);
              }

              // this.calculEcheanceTotal();
              _this2.handleInput();
            });
            EventBus.$on("dossier-updated-dcpp-pcp4-0", function (data) {
              var _data$data_tb9;
              _this2.engagements_en_cours_conjoints = data === null || data === void 0 || (_data$data_tb9 = data.data_tb4) === null || _data$data_tb9 === void 0 ? void 0 : _data$data_tb9.facilites_existante_conjoint;
              _this2.getQuotiteCessible();
              // this.calculEcheanceTotal();
              _this2.handleInput();
            });
            _context.next = 17;
            return _services_credit_service__WEBPACK_IMPORTED_MODULE_2__["default"].loadActivite().then(function (res) {
              _this2.secteurs_activites = res.data.data.activites;
              _this2.groupes_activites = res.data.data.groupes;
              _this2.updateValueSelected();
            })["catch"](function (err) {
              console.log(err);
            });
          case 17:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  mounted: function mounted() {
    var _this3 = this;
    this.loadRetrieved();
    this.loadTbAttrs();
    this.tableClosedOrOpened();
    this.getQuotiteCessible();
    // this.formDataToBeWatched.conjoint.statut_entreprise =  this.meta_data.dossier_credit.convention_entreprise.tiering.replace("_", " ");
    // this.formDataToBeWatched.statut_entreprise =  this.meta_data.dossier_credit.convention_entreprise.tiering.replace("_", " ");

    EventBus.$on("dossier-updated-dcp-0", function (data) {
      var convention_entreprise = data === null || data === void 0 ? void 0 : data.convention_entreprise;
      if ((convention_entreprise === null || convention_entreprise === void 0 ? void 0 : convention_entreprise.ent_pub_key) != undefined) {
        var _convention_entrepris5, _convention_entrepris6;
        _this3.entreprise = convention_entreprise === null || convention_entreprise === void 0 || (_convention_entrepris5 = convention_entreprise.info_entreprise) === null || _convention_entrepris5 === void 0 ? void 0 : _convention_entrepris5.denomination;
        _this3.formDataToBeWatched.entreprise = convention_entreprise === null || convention_entreprise === void 0 || (_convention_entrepris6 = convention_entreprise.info_entreprise) === null || _convention_entrepris6 === void 0 ? void 0 : _convention_entrepris6.denomination;
        _this3.formDataToBeWatched.statut_entreprise = "Listée";
        if (convention_entreprise.ent_pub_key == 'autre') {
          _this3.entreprise = "Autre";
          _this3.formDataToBeWatched.statut_entreprise = "Non listée";
        }
        _this3.changeStatutEntreprise(_this3.formDataToBeWatched.statut_entreprise);
      }
    });
  },
  data: function data() {
    var vm = this;
    return {
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_0__["default"].host,
      authcheck: false,
      authcheckUsr: null,
      authcheckStatus: null,
      watchInPause: false,
      initLoad: true,
      seen: true,
      isLoading: false,
      meta_parseable: {
        cred_pub_key: this.meta_data["cred_pub_key"],
        tb_name: this.tb_name
      },
      type_credits: [],
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
      listingNote: false,
      AGE_RETRAITE: 60,
      formDataToBeWatched: {
        notes: [],
        is_first_time: null,
        nom: "",
        prenoms: "",
        carcasse_type: "",
        denomination_client: "",
        type_demande: "",
        type_credit: "",
        contact_client: "",
        email_client: "",
        entreprise: "",
        conjoint: {
          entreprise: "",
          statut_entreprise: "",
          profession: "",
          fonction: "",
          employeur: "",
          activite: "",
          type_contrat: "",
          annee_act_emploi: "",
          pourcentage_quotite: 0,
          quotite_cessible: 0,
          quotite_cessible_disponible: 0,
          data_expiration_cdd_interim: "",
          annee_prec_emploi: "",
          anciennete_pro: "",
          salaire: 0,
          revenu_total_colonne_conjoint: 0,
          date_debut_cdd_interim: ""
        },
        statut_entreprise: "",
        depart_retraite: "",
        date_depart_retraite: "",
        employeur: "",
        statut_client: "",
        profession: "",
        fonction: "",
        periode_d_essai_achevee: "",
        type_contrat: "",
        date_debut_cdd_interim: "",
        annee_act_emploi: "",
        data_expiration_cdd_interim: "",
        annee_prec_emploi: "",
        date_premier_emploi: "",
        // anciennete_pro: "",
        revenu_total_colonne_montant_pondere: 0,
        // pourcentage_quotite: "",
        // quotite_cessible: "",
        duree_anciennete: [0, 0],
        duree_anciennete2: "",
        description_employeur: "",
        emploteur_data_existence_livre: "",
        emploteur_data_financiere_recente: "",
        secteur_activite: "",
        groupe_activite: "",
        autre_secteur_activite: ""
      },
      mask_telephone: "",
      loadingData: false,
      entreprise: "",
      // echeance: "",
      duree_credit: 0,
      professions: [],
      pourcentages_quotites: [],
      matrimoniale: "",
      engagements_en_cours: [],
      echeance_total: "",
      echeance_total_conjoint: "",
      engagements_en_cours_conjoints: [],
      data_date_de_depart_a_la_retraite: [],
      fonction: "",
      data_le_client_a_t_il: [],
      age_depart_retraite: "",
      data_statut_du_client: [],
      data_type_de_contrat: [],
      seen1: true,
      conjoint_entreprise: "",
      convention_entreprises: [],
      loadConEntreprise: false,
      conjoint_fonction: "",
      seen2: true,
      seen3: true,
      secteurs_activites: [],
      groupes_activites: []
    };
  },
  methods: (_methods = {
    // ? ** formDataToBeWatched Cache Management Functions
    /**
     * sets up formToBeWatched cache management related listeners and stuff
     * ! to be executed in the *created* method
     */
    setupCache: function setupCache() {
      if (_DEBUG) console.log(">> setupCache");

      // ? Upload data to server before the page/tab/browser closes
      // ! Only visibly works on page reload, for some reason
      window.addEventListener("beforeunload", this.beforePageIsClosed);
      // console.log("beforePageIsClosed subscribed");
    },
    /**
     * adds an attribute to the formDataToBeWatched so that when it's deleted the pageunload callback doesn't refill it with empty values
     */
    updateFormDataForDeletion: function updateFormDataForDeletion() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (_DEBUG) console.log(">> updateFormDataForDeletion");
              _this4.formDataToBeWatched.is_deleted = true;
              // Actually delete from cache
              _context2.next = 4;
              return _cache["delete"](documentId);
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    /**
     * executes before the page/tab/browser is closed
     * ! actually only works when the tab is refreshed
     */
    beforePageIsClosed: function beforePageIsClosed(event) {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              event.preventDefault();
              event.returnValue = ""; // ! Won't work without this

              if (_DEBUG) console.log(">> beforePageIsClosed");
              // shows native popup
              // ! Only works on page reloads

              // Check if formDataToBeWatched is empty
              if (!_this5.formDataToBeWatched.is_deleted) {
                _context3.next = 5;
                break;
              }
              return _context3.abrupt("return");
            case 5:
              // Upload current (and arguably latest) formDataToBeWatched data

              _this5.uploadDataToServerAndUpdateLastSave(_this5.formDataToBeWatched, _this5.formDataToBeWatched);
              if (_DEBUG) console.log("<< beforePageIsClosed");
            case 7:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    /**
     * initialises the caches and throws exceptions/notifications when cache is not available
     * @important uses the page param templateId to uniquely identify tables in the indexedDB
     * @param  {void}
     * @return {void}
     */
    initCache: function initCache() {
      if (_DEBUG) console.log(">> initCache");
      if (_cache) return;
      // ! Check if this.tb_name exists, this variable only exists in table components so if it exists it means that a table component is currently active
      if (!this.tb_name) return;
      // ? Config for the indexedDB cache manager
      documentName = this.tb_name;
      var templateId = this.$route.params.templateId;
      // ? This mixin is made for formDataToBeWatched in tables that have templateId
      // If templateDoesn't exist exit
      if (!templateId) return;
      var name = indexedDBName + "-" + templateId;
      var store = collectionName + "-" + templateId;
      documentId = documentName + "-" + templateId;
      //
      try {
        _cache = new (_helpers_indexedDB__WEBPACK_IMPORTED_MODULE_5___default())({
          name: name,
          store: store
        });
        if (_DEBUG) console.log("<< initCache");
      } catch (error) {
        if (_DEBUG) console.error("xx initCache ", error);
      }

      // Start timer
      clearInterval(_cacheAutosaveInterval);
      if (_DEBUG) console.log(">> Set up timer");
      _cacheAutosaveInterval = setInterval(this.uploadDataToServerEvery30Seconds, 1000);

      // Delete formDataToBeWatched without having to upload before reload
      if (_DEBUG) console.log(">> EventBus.$on tbDeleted");
      EventBus.$on("tbDeleted", this.updateFormDataForDeletion);
    },
    /**
     * saves form data in cache before sending form data to backend on ˜user idle˜ or in specified intervals
     * @param  {Object} newVal updated form data
     * @param  {Object} oldVal old form data
     * @return {void}
     */
    saveDataInCache: function saveDataInCache(newVal, oldVal) {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var data, timeSpentInSeconds;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              if (_DEBUG) console.log(">> saveDataInCache");
              // Check if cache exists
              if (!_cache) {
                if (_DEBUG) console.log(">< saveDataInCache no cache");
                // this.initCache();
              }
              // * TODO
              // [x] - Save data locally on strokes as cache in indexedDB
              // [x] - Upload cached data when user is idle or on interval timeout
              // [x] - Clear cache data from indexDB
              // [x] - Rinse & Repeat
              data = _objectSpread({
                documentId: documentId
              }, newVal); // Update or Insert newVal in Object store
              _context4.next = 5;
              return _cache.upsert(documentId, data);
            case 5:
              if (_lastSaveTime != null) {
                // Last save time exists
                timeSpentInSeconds = (Date.now() - _lastSaveTime) / 1000; // Upload data to serve, update last save and clear cache when interval timeout
                if (timeSpentInSeconds >= _onlineSaveIntervalTimeInSeconds) {
                  _this6.uploadDataToServerAndUpdateLastSave(newVal, oldVal);
                }
              }
              // First upload
              if (!_lastSaveTime) {
                _this6.uploadDataToServerAndUpdateLastSave(newVal, oldVal);
              }
            case 7:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    },
    /**
     * does exactly what the long ass name says lol
     * @param  {Object} newVal updated form data
     * @param  {Object} oldVal old form data
     * @return {void}
     */
    uploadDataToServerAndUpdateLastSave: function uploadDataToServerAndUpdateLastSave(newVal, oldVal) {
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              if (_DEBUG) console.log(">> uploadDataToServerAndUpdateLastSave");
              _context5.prev = 1;
              if (_DEBUG) console.log(">> this.autosaving");
              _context5.next = 5;
              return _this7.autosaving(newVal, oldVal);
            case 5:
              // Update last save time
              _lastSaveTime = Date.now();
              // ! DONOT Clear cache
              // _cache.delete(documentId);
              if (_DEBUG) console.log("<< uploadDataToServerAndUpdateLastSave");
              _context5.next = 12;
              break;
            case 9:
              _context5.prev = 9;
              _context5.t0 = _context5["catch"](1);
              // TODO add error
              if (_DEBUG) console.error("xx uploadDataToServerAndUpdateLastSave", _context5.t0);
            case 12:
            case "end":
              return _context5.stop();
          }
        }, _callee5, null, [[1, 9]]);
      }))();
    },
    /**
     * it displays a pop when the user is about to close the tab or browser
     * then uploads formToBeWatched data to server to avoid losing data on unexpected page close
     * @param  {Object} newVal updated form data
     * @param  {Object} oldVal old form data
     * @return {void}
     */
    uploadDataToServerBeforePageCloses: function uploadDataToServerBeforePageCloses() {
      var _this8 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              if (_DEBUG) console.log(">> uploadDataToServerBeforePageCloses");
              _context6.prev = 1;
              _context6.next = 4;
              return _this8.autosaving(newVal, oldVal);
            case 4:
              // Update last save time
              _lastSaveTime = Date.now();
              // Clear cache
              _cache["delete"](documentId);
              if (_DEBUG) console.log("<< uploadDataToServerBeforePageCloses");
              _context6.next = 12;
              break;
            case 9:
              _context6.prev = 9;
              _context6.t0 = _context6["catch"](1);
              // TODO add error
              if (_DEBUG) console.error("xx uploadDataToServerBeforePageCloses", _context6.t0);
            case 12:
            case "end":
              return _context6.stop();
          }
        }, _callee6, null, [[1, 9]]);
      }))();
    },
    /**
     * does exactly what the name says
     * @return {void}
     */
    uploadDataToServerEvery30Seconds: function uploadDataToServerEvery30Seconds() {
      var _this9 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              // if (_DEBUG) console.log(">> uploadDataToServerEvery30Seconds", _timeSpentInSeconds);
              _timeSpentInSeconds++;
              if (!(_timeSpentInSeconds % 30 != 0)) {
                _context7.next = 3;
                break;
              }
              return _context7.abrupt("return");
            case 3:
              if (_DEBUG) console.log(">> uploadDataToServerEvery30Seconds", _timeSpentInSeconds);
              _context7.prev = 4;
              if (_DEBUG) console.log(">> uploadDataToServerEvery30Seconds >> autosaving", _timeSpentInSeconds);
              _context7.next = 8;
              return _this9.autosaving(_this9.formDataToBeWatched, _this9.formDataToBeWatched);
            case 8:
              // Update last save time
              _lastSaveTime = Date.now();
              // Clear cache ?
              // _cache.delete(documentId);
              if (_DEBUG) console.log("<< uploadDataToServerEvery30Seconds << autosaving");
              _context7.next = 15;
              break;
            case 12:
              _context7.prev = 12;
              _context7.t0 = _context7["catch"](4);
              // TODO add error
              if (_DEBUG) console.error("xx uploadDataToServerEvery30Seconds", _context7.t0);
            case 15:
            case "end":
              return _context7.stop();
          }
        }, _callee7, null, [[4, 12]]);
      }))();
    },
    // End Cache management functions
    getNationalites: function getNationalites() {
      var _this0 = this;
      _services_credit_service__WEBPACK_IMPORTED_MODULE_2__["default"].loadNationalites().then(function (res) {
        _this0.nationnalites = res.data;
      })["catch"](function (err) {
        console.log(err);
      });
    },
    getCreditBanques: function getCreditBanques() {
      var _this1 = this;
      var cachedCreditTypes = localStorage.getItem('banque_credit_types');
      if (!cachedCreditTypes) {
        _services_credit_service__WEBPACK_IMPORTED_MODULE_2__["default"].loadCreditBanques().then(function (res) {
          _this1.type_credits = res.data;
          localStorage.setItem('banque_credit_types', JSON.stringify(res.data));
        })["catch"](function (err) {
          console.log(err);
        });
      } else {
        var data = JSON.parse(cachedCreditTypes);
        this.type_credits = data;
      }
    },
    loadTbAttrs: function loadTbAttrs() {
      var l = [];
      var topdivel = this.$refs.topdiv;
      var k = document.querySelectorAll(".subdiv" + this.tb_name);
      k.forEach(function (e) {
        l.push(e.innerText);
      });
      var p = {
        name_of_title: topdivel.innerText,
        list_of_content: l,
        id: "dcp-ppo2-head"
      };
      this.$emit("load-buffer", p);
    },
    tableClosedOrOpened: function tableClosedOrOpened() {
      this.seen = this.fetchClosedTables(this.tb_name + this.meta_data["cred_pub_key"]);
    },
    somX3: function somX3(ob, key) {
      var som = 0;
      ob === null || ob === void 0 || ob.filter(function (elm) {
        var _elm$key;
        som += Number((_elm$key = elm[key]) === null || _elm$key === void 0 ? void 0 : _elm$key.toString().replace(/\s/g, ""));
      });
      return som;
    },
    convertInt: function convertInt(n) {
      var _n$toString;
      return Number(n === null || n === void 0 || (_n$toString = n.toString()) === null || _n$toString === void 0 ? void 0 : _n$toString.replace(/\s/g, ''));
    },
    formDataVars: function formDataVars(event) {
      this.formDataToBeWatched[event[0]] = event[1];
      this.handleInput();
    },
    formDataVars2: function formDataVars2(event, index, objectName, keyName) {
      this[objectName][index][keyName] = event[1];
      this.handleInput();
    },
    formDataVarsConjoint: function formDataVarsConjoint(event, keyName) {
      this.formDataToBeWatched.conjoint.salaire = event[1];
      this.handleInput();
    },
    handleInput: function handleInput(evt, index) {
      var _this$formDataToBeWat;
      // let salaire_conjoint = Number(this.formDataToBeWatched?.conjoint?.salaire?.toString().replace(/\s/g, ""));
      // let salaire_emprunt_pondere = Number(this.formDataToBeWatched.revenu_total_colonne_montant_pondere?.toString().replace(/\s/g, ""));
      // let revenu_qc = Number(this.formDataToBeWatched.revenu_total_colonne_montant_qc1?.toString().replace(/\s/g, ""));
      // let revenu_qc_general = Number(this.formDataToBeWatched.revenu_total_colonne_montant_qc2?.toString().replace(/\s/g, ""));

      // if (revenu_qc > 0) {
      //     this.formDataToBeWatched.pourcentage_quotite = ((revenu_qc / salaire_emprunt_pondere) * 100).toFixed(2);
      // }

      // if (revenu_qc_general > 0) {
      //     this.formDataToBeWatched.pourcentage_quotite_general = ((revenu_qc_general / salaire_emprunt_pondere) * 100).toFixed(2);
      // }

      // this.formDataToBeWatched.conjoint.pourcentage_quotite = this.determinePourQutotite(salaire_conjoint);
      // this.calculQuotite();

      if (this.entreprise == "Autre" && this.formDataToBeWatched.statut_entreprise == "") {
        this.formDataToBeWatched.statut_entreprise = "Non listée";
      }
      if (this.conjoint_entreprise == "Autre" && ((_this$formDataToBeWat = this.formDataToBeWatched.conjoint) === null || _this$formDataToBeWat === void 0 ? void 0 : _this$formDataToBeWat.statut_entreprise) == "") {
        this.formDataToBeWatched.conjoint.statut_entreprise = "Non listée";
      }
      EventBus.$emit("dossier-updated-dcp-3", {
        data_tb3: this.formDataToBeWatched
      });
      this.emitData2();
      // console.log('handleInput');
    },
    retract: function retract() {
      this.seen = !this.seen;
      var a = {
        tb_name: this.tb_name + this.meta_data["cred_pub_key"],
        status: this.seen
      };
      EventBus.$emit("savedclosed-table", a);
    },
    openNotesModal: function openNotesModal() {
      var listing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.listingNote = listing;
      this.$modal.show(this.tb_name);
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
          var tbFetcheData = response.data;
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
    loadWithError: function loadWithError(err) {
      //// window.location.href = "/login";
    },
    launchAutoSaver: function launchAutoSaver() {
      var _this10 = this;
      _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["default"].loadUserData().then(function (res) {
        _this10.send2Backend(res, 0, 0);
      })["catch"](function (err) {
        _this10.loadWithError(err);
      });
    },
    setTbVal: function setTbVal(val) {
      this.cred_pub_key = val;
    },
    loadRetrieved: function loadRetrieved() {
      var _this$meta_data$dossi;
      var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];
      if (![null, undefined, ''].includes((_this$meta_data$dossi = this.meta_data.dossier_credit) === null || _this$meta_data$dossi === void 0 ? void 0 : _this$meta_data$dossi.convention_entreprise)) {
        var _this$meta_data$dossi2, _this$meta_data$dossi3, _this$meta_data$dossi4;
        this.formDataToBeWatched.statut_entreprise = "".concat(((_this$meta_data$dossi2 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi2 === void 0 || (_this$meta_data$dossi2 = _this$meta_data$dossi2.convention_entreprise) === null || _this$meta_data$dossi2 === void 0 || (_this$meta_data$dossi2 = _this$meta_data$dossi2.tiering) === null || _this$meta_data$dossi2 === void 0 || (_this$meta_data$dossi2 = _this$meta_data$dossi2.toString()) === null || _this$meta_data$dossi2 === void 0 ? void 0 : _this$meta_data$dossi2.replace('_', ' ')) || '', " - ").concat(((_this$meta_data$dossi3 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi3 === void 0 || (_this$meta_data$dossi3 = _this$meta_data$dossi3.convention_entreprise) === null || _this$meta_data$dossi3 === void 0 || (_this$meta_data$dossi3 = _this$meta_data$dossi3.type_entreprise) === null || _this$meta_data$dossi3 === void 0 ? void 0 : _this$meta_data$dossi3[0]) || '');
        this.formDataToBeWatched.conjoint.statut_entreprise = (_this$meta_data$dossi4 = this.meta_data.dossier_credit) === null || _this$meta_data$dossi4 === void 0 || (_this$meta_data$dossi4 = _this$meta_data$dossi4.convention_entreprise) === null || _this$meta_data$dossi4 === void 0 || (_this$meta_data$dossi4 = _this$meta_data$dossi4.type_entreprise) === null || _this$meta_data$dossi4 === void 0 ? void 0 : _this$meta_data$dossi4[0];
      }

      // console.log("TIERING",this.meta_data.dossier_credit.convention_entreprise.tiering.replace("_", " "))
      // Close table by default
      // this.defaultRetract(
      //     false,
      //     this.meta_data["dossier_credit"]?.applied_templ_id
      // );

      if (this.meta_data["dossier_credit"][createdKey] == undefined) {
        if (this.meta_data["dossier_credit"]["cred_pub_tb_10009"] != undefined) {
          var data = this.meta_data["dossier_credit"]["cred_pub_tb_10009"];
          if ((data === null || data === void 0 ? void 0 : data.type_client) == 'Fonctionnaire') {
            this.formDataToBeWatched.statut_entreprise = "Listée";
            this.formDataToBeWatched.employeur = "Fonction publique";
            this.formDataToBeWatched.statut_client = "Fonctionnaire";
          }
          if ((data === null || data === void 0 ? void 0 : data.type_client) == 'Privé') {
            this.formDataToBeWatched.employeur = "Privé";
          }
        }
        if (this.meta_data["dossier_credit"]["convention_entreprise"] != undefined) {
          var convention_entreprise = this.meta_data["dossier_credit"]["convention_entreprise"];
          if ((convention_entreprise === null || convention_entreprise === void 0 ? void 0 : convention_entreprise.ent_pub_key) != undefined) {
            var _convention_entrepris7, _convention_entrepris8;
            this.entreprise = convention_entreprise === null || convention_entreprise === void 0 || (_convention_entrepris7 = convention_entreprise.info_entreprise) === null || _convention_entrepris7 === void 0 ? void 0 : _convention_entrepris7.denomination;
            this.formDataToBeWatched.entreprise = convention_entreprise === null || convention_entreprise === void 0 || (_convention_entrepris8 = convention_entreprise.info_entreprise) === null || _convention_entrepris8 === void 0 ? void 0 : _convention_entrepris8.denomination;
            // console.log('entreprise *** ',this.formDataToBeWatched.entreprise)
            if (convention_entreprise.ent_pub_key == 'autre') {
              this.entreprise = "Autre";
              this.formDataToBeWatched.statut_entreprise = "Non listée";
            }
            this.changeStatutEntreprise(this.formDataToBeWatched.statut_entreprise);
          }
        }
      }

      // if (this.meta_data["dossier_credit"]["cred_pub_tb_10001"] != undefined) {
      //     let data = this.meta_data["dossier_credit"]["cred_pub_tb_10001"];
      //     this.echeance = Number(data?.r_mensualite?.toString().replace(/\s/g, ""));
      //     this.duree_credit = Number(data?.duree_credit?.toString().replace(/\s/g, ""));
      // }

      if (lentb.length > 0) {
        var _this$meta_data$dossi0;
        if (this.meta_data["dossier_credit"][createdKey] != undefined) {
          var _this$formDataToBeWat2, _this$formDataToBeWat4, _this$formDataToBeWat5, _this$formDataToBeWat6, _this$meta_data$dossi5;
          this.formDataToBeWatched = this.meta_data["dossier_credit"][createdKey];
          if (!['', null, undefined].includes((_this$formDataToBeWat2 = this.formDataToBeWatched) === null || _this$formDataToBeWat2 === void 0 ? void 0 : _this$formDataToBeWat2.date_depart_retraite)) {
            var _this$formDataToBeWat3;
            var split_date = (_this$formDataToBeWat3 = this.formDataToBeWatched) === null || _this$formDataToBeWat3 === void 0 || (_this$formDataToBeWat3 = _this$formDataToBeWat3.date_depart_retraite) === null || _this$formDataToBeWat3 === void 0 ? void 0 : _this$formDataToBeWat3.split('-');
            if (split_date[1] == '00') {
              this.$set(this.formDataToBeWatched, 'date_depart_retraite', split_date[0] + '-01');
            }
          }
          if (this.formDataToBeWatched["fonction"] != "" && this.formDataToBeWatched["fonction"]) {
            this.fonction = this.formDataToBeWatched["fonction"];
          }
          if (this.formDataToBeWatched["conjoint"] != "" && this.formDataToBeWatched["conjoint"].fonction != undefined && (_this$formDataToBeWat4 = this.formDataToBeWatched["conjoint"]) !== null && _this$formDataToBeWat4 !== void 0 && _this$formDataToBeWat4.fonction) {
            this.conjoint_fonction = this.formDataToBeWatched["conjoint"].fonction;
          }
          if (this.formDataToBeWatched["entreprise"] != "" && this.formDataToBeWatched["entreprise"]) {
            this.entreprise = this.formDataToBeWatched["entreprise"];
          }
          if (this.formDataToBeWatched["conjoint"] != "" && ((_this$formDataToBeWat5 = this.formDataToBeWatched["conjoint"]) === null || _this$formDataToBeWat5 === void 0 ? void 0 : _this$formDataToBeWat5.entreprise) != undefined && (_this$formDataToBeWat6 = this.formDataToBeWatched["conjoint"]) !== null && _this$formDataToBeWat6 !== void 0 && _this$formDataToBeWat6.entreprise) {
            this.conjoint_entreprise = this.formDataToBeWatched["conjoint"].entreprise;
          }
          this.majAutreFonctionActuelle();
          this.majAutreEntrepriseEmployeur();

          // CHECK WHETHER IT IS FIRST TIME
          if (((_this$meta_data$dossi5 = this.meta_data['dossier_credit'][createdKey]) === null || _this$meta_data$dossi5 === void 0 ? void 0 : _this$meta_data$dossi5.is_first_time) === false) {
            this.setAllDefaultFields(createdKey);
          } else {
            var _this$meta_data$dossi6, _this$meta_data$dossi7;
            if (((_this$meta_data$dossi6 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi6 === void 0 ? void 0 : _this$meta_data$dossi6.doss_central_file_recorder) !== undefined) {
              this.setAllDefaultFieldsRecByEnr();
            }
            if (((_this$meta_data$dossi7 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi7 === void 0 ? void 0 : _this$meta_data$dossi7.caf_recorded_file) !== undefined) {
              this.setAllDefaultFieldsRecByCaf();
            }
          }
        } else {
          var _this$meta_data$dossi8, _this$meta_data$dossi9;
          if (((_this$meta_data$dossi8 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi8 === void 0 ? void 0 : _this$meta_data$dossi8.doss_central_file_recorder) !== undefined) {
            this.setAllDefaultFieldsRecByEnr();
          }
          if (((_this$meta_data$dossi9 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi9 === void 0 ? void 0 : _this$meta_data$dossi9.caf_recorded_file) != undefined) {
            this.setAllDefaultFieldsRecByCaf();
          }
        }

        // SET FIRST TIME TO FALSE
        this.formDataToBeWatched.is_first_time = false;
        this.formDataToBeWatched.carcasse_type = (_this$meta_data$dossi0 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi0 === void 0 ? void 0 : _this$meta_data$dossi0.applied_templ_name;
      } else {
        var _this$meta_data$dossi1, _this$meta_data$dossi10;
        if (((_this$meta_data$dossi1 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi1 === void 0 ? void 0 : _this$meta_data$dossi1.doss_central_file_recorder) !== undefined) {
          this.setAllDefaultFieldsRecByEnr();
        }

        // IN CASE THE FILE IS OPENED BY CAF
        else if (((_this$meta_data$dossi10 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi10 === void 0 ? void 0 : _this$meta_data$dossi10.caf_recorded_file) !== undefined) {
          this.setAllDefaultFieldsRecByCaf();
          // let caf_recorded_file = this.meta_data["dossier_credit"]["caf_recorded_file"];
          // this.formDataToBeWatched.montant_sollicite = caf_recorded_file?.montant;
          // this.formDataToBeWatched.montant_credit = caf_recorded_file?.montant;
        }

        // SET FIRST TIME TO FALSE
        this.formDataToBeWatched.is_first_time = false;
      }
      if (this.meta_data["dossier_credit"]["cred_pub_tb_10009"] != undefined) {
        var _data = this.meta_data["dossier_credit"]["cred_pub_tb_10009"];
        this.echeance = _data === null || _data === void 0 ? void 0 : _data.r_mensualite;
        this.duree_credit = _data === null || _data === void 0 ? void 0 : _data.duree_credit;
        this.engagements_en_cours = _data === null || _data === void 0 ? void 0 : _data.engagements_en_cours;
        if ((_data === null || _data === void 0 ? void 0 : _data.revenu_domicilie) != undefined) {
          var _data$revenu_domicili4, _data$revenu_domicili5;
          if ((_data === null || _data === void 0 ? void 0 : _data.revenu_domicilie[0]) != undefined && (_data === null || _data === void 0 || (_data$revenu_domicili4 = _data.revenu_domicilie[0]) === null || _data$revenu_domicili4 === void 0 ? void 0 : _data$revenu_domicili4.libelle) != undefined && (_data === null || _data === void 0 || (_data$revenu_domicili5 = _data.revenu_domicilie[0]) === null || _data$revenu_domicili5 === void 0 ? void 0 : _data$revenu_domicili5.libelle) == 'Salaire net') {
            var _data$revenu_domicili6;
            this.formDataToBeWatched.salaire = _data === null || _data === void 0 || (_data$revenu_domicili6 = _data.revenu_domicilie[0]) === null || _data$revenu_domicili6 === void 0 ? void 0 : _data$revenu_domicili6.montant_salaire;
          }
        }
        this.formDataToBeWatched.revenu_total_colonne_montant_pondere = _data === null || _data === void 0 ? void 0 : _data.revenu_total_colonne_montant_pondere;
        // this.formDataToBeWatched.revenu_total_colonne_montant_qc1 = data?.revenu_total_colonne_montant_qc1;
        // this.formDataToBeWatched.revenu_total_colonne_montant_qc2 = data?.revenu_total_colonne_montant_qc2;
        this.handleInput();
      }
      if (this.meta_data["dossier_credit"]["cred_pub_tb_120001"] != undefined) {
        var _data2$revenu_domicil;
        var _data2 = this.meta_data["dossier_credit"]["cred_pub_tb_120001"];
        this.date_naissance = _data2 === null || _data2 === void 0 ? void 0 : _data2.date_naissance;
        this.matrimoniale = _data2 === null || _data2 === void 0 ? void 0 : _data2.matrimoniale;
        this.formDataToBeWatched.conjoint.pourcentage_quotite = _data2 === null || _data2 === void 0 ? void 0 : _data2.revenu_total_colonne_taux_qc1_conjoint;
        this.formDataToBeWatched.conjoint.quotite_cessible = _data2 === null || _data2 === void 0 ? void 0 : _data2.revenu_total_colonne_montant_qc1_conjoint;
        this.formDataToBeWatched.conjoint.quotite_cessible_disponible = _data2 === null || _data2 === void 0 ? void 0 : _data2.revenu_total_colonne_montant_qc1_conjoint;
        this.formDataToBeWatched.conjoint.salaire = _data2 === null || _data2 === void 0 || (_data2$revenu_domicil = _data2.revenu_domicilie[0]) === null || _data2$revenu_domicil === void 0 ? void 0 : _data2$revenu_domicil.montant_conjoint;
        this.formDataToBeWatched.conjoint.revenu_total_colonne_conjoint = _data2 === null || _data2 === void 0 ? void 0 : _data2.revenu_total_colonne_conjoint;
        if ((_data2 === null || _data2 === void 0 ? void 0 : _data2.revenu_domicilie) != undefined) {
          var _data2$revenu_domicil2, _data2$revenu_domicil3;
          if ((_data2 === null || _data2 === void 0 ? void 0 : _data2.revenu_domicilie[0]) != undefined && (_data2 === null || _data2 === void 0 || (_data2$revenu_domicil2 = _data2.revenu_domicilie[0]) === null || _data2$revenu_domicil2 === void 0 ? void 0 : _data2$revenu_domicil2.libelle) != undefined && (_data2 === null || _data2 === void 0 || (_data2$revenu_domicil3 = _data2.revenu_domicilie[0]) === null || _data2$revenu_domicil3 === void 0 ? void 0 : _data2$revenu_domicil3.libelle) == 'Salaire net') {
            var _data2$revenu_domicil4;
            this.formDataToBeWatched.salaire = _data2 === null || _data2 === void 0 || (_data2$revenu_domicil4 = _data2.revenu_domicilie[0]) === null || _data2$revenu_domicil4 === void 0 ? void 0 : _data2$revenu_domicil4.montant_salaire;
          }
        }
        this.handleInput();
      }

      // this.calculEcheanceTotal();
      this.updateDateDepartRetraite();
    },
    setAllDefaultFieldsRecByEnr: function setAllDefaultFieldsRecByEnr() {
      var _this11 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        var _this11$meta_data$dos, _this11$meta_data$dos2, _this11$meta_data$dos3, _this11$meta_data$dos4, _this11$meta_data$dos5, _this11$meta_data$dos6, _this11$meta_data$dos7, _this11$meta_data$dos8;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _this11.formDataToBeWatched.denomination_client = ((_this11$meta_data$dos = _this11.meta_data['dossier_credit']) === null || _this11$meta_data$dos === void 0 || (_this11$meta_data$dos = _this11$meta_data$dos.doss_central_file_recorder) === null || _this11$meta_data$dos === void 0 || (_this11$meta_data$dos = _this11$meta_data$dos.client) === null || _this11$meta_data$dos === void 0 ? void 0 : _this11$meta_data$dos.nomcli) + ' ' + ((_this11$meta_data$dos2 = _this11.meta_data['dossier_credit']) === null || _this11$meta_data$dos2 === void 0 || (_this11$meta_data$dos2 = _this11$meta_data$dos2.doss_central_file_recorder) === null || _this11$meta_data$dos2 === void 0 || (_this11$meta_data$dos2 = _this11$meta_data$dos2.client) === null || _this11$meta_data$dos2 === void 0 ? void 0 : _this11$meta_data$dos2.prenomcli);
              _this11.formDataToBeWatched.type_demande = (_this11$meta_data$dos3 = _this11.meta_data['dossier_credit']) === null || _this11$meta_data$dos3 === void 0 || (_this11$meta_data$dos3 = _this11$meta_data$dos3.doss_central_file_recorder) === null || _this11$meta_data$dos3 === void 0 ? void 0 : _this11$meta_data$dos3.type_demande;
              _this11.formDataToBeWatched.type_credit = (_this11$meta_data$dos4 = _this11.meta_data['dossier_credit']) === null || _this11$meta_data$dos4 === void 0 || (_this11$meta_data$dos4 = _this11$meta_data$dos4.doss_central_file_recorder) === null || _this11$meta_data$dos4 === void 0 ? void 0 : _this11$meta_data$dos4.type_credit;
              _this11.formDataToBeWatched.contact_client = (_this11$meta_data$dos5 = _this11.meta_data['dossier_credit']) === null || _this11$meta_data$dos5 === void 0 || (_this11$meta_data$dos5 = _this11$meta_data$dos5.doss_central_file_recorder) === null || _this11$meta_data$dos5 === void 0 ? void 0 : _this11$meta_data$dos5.phone;
              _this11.formDataToBeWatched.email_client = (_this11$meta_data$dos6 = _this11.meta_data['dossier_credit']) === null || _this11$meta_data$dos6 === void 0 || (_this11$meta_data$dos6 = _this11$meta_data$dos6.doss_central_file_recorder) === null || _this11$meta_data$dos6 === void 0 ? void 0 : _this11$meta_data$dos6.email;
              _this11.formDataToBeWatched.nom = (_this11$meta_data$dos7 = _this11.meta_data['dossier_credit']) === null || _this11$meta_data$dos7 === void 0 || (_this11$meta_data$dos7 = _this11$meta_data$dos7.doss_central_file_recorder) === null || _this11$meta_data$dos7 === void 0 ? void 0 : _this11$meta_data$dos7.client.nomcli;
              _this11.formDataToBeWatched.prenoms = (_this11$meta_data$dos8 = _this11.meta_data['dossier_credit']) === null || _this11$meta_data$dos8 === void 0 || (_this11$meta_data$dos8 = _this11$meta_data$dos8.doss_central_file_recorder) === null || _this11$meta_data$dos8 === void 0 ? void 0 : _this11$meta_data$dos8.client.prenomcli;
              setTimeout(function () {
                var _this11$meta_data$dos9;
                _this11.formDataToBeWatched.type_credit = (_this11$meta_data$dos9 = _this11.meta_data['dossier_credit']) === null || _this11$meta_data$dos9 === void 0 || (_this11$meta_data$dos9 = _this11$meta_data$dos9.doss_central_file_recorder) === null || _this11$meta_data$dos9 === void 0 ? void 0 : _this11$meta_data$dos9.type_de_pret;
                // this.formDataToBeWatched.montant_sollicite = this.meta_data['dossier_credit']?.doss_central_file_recorder?.montant?.toString().replace(/\s/g, '')
                // this.formDataToBeWatched.montant_credit = this.meta_data['dossier_credit']?.doss_central_file_recorder?.montant?.toString().replace(/\s/g, '');
              }, 1000);
            case 8:
            case "end":
              return _context8.stop();
          }
        }, _callee8);
      }))();
    },
    setAllDefaultFieldsRecByCaf: function setAllDefaultFieldsRecByCaf() {
      var _this12 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
        var _this12$meta_data$dos, _this12$meta_data$dos2, _this12$meta_data$dos3, _this12$meta_data$dos4, _this12$meta_data$dos5, _this12$meta_data$dos6, _this12$meta_data$dos7, _this12$meta_data$dos8;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              _this12.formDataToBeWatched.denomination_client = ((_this12$meta_data$dos = _this12.meta_data['dossier_credit']) === null || _this12$meta_data$dos === void 0 || (_this12$meta_data$dos = _this12$meta_data$dos.caf_recorded_file) === null || _this12$meta_data$dos === void 0 || (_this12$meta_data$dos = _this12$meta_data$dos.client) === null || _this12$meta_data$dos === void 0 ? void 0 : _this12$meta_data$dos.nomcli) + ' ' + ((_this12$meta_data$dos2 = _this12.meta_data['dossier_credit']) === null || _this12$meta_data$dos2 === void 0 || (_this12$meta_data$dos2 = _this12$meta_data$dos2.caf_recorded_file) === null || _this12$meta_data$dos2 === void 0 || (_this12$meta_data$dos2 = _this12$meta_data$dos2.client) === null || _this12$meta_data$dos2 === void 0 ? void 0 : _this12$meta_data$dos2.prenomcli);
              _this12.formDataToBeWatched.type_demande = (_this12$meta_data$dos3 = _this12.meta_data['dossier_credit']) === null || _this12$meta_data$dos3 === void 0 || (_this12$meta_data$dos3 = _this12$meta_data$dos3.caf_recorded_file) === null || _this12$meta_data$dos3 === void 0 ? void 0 : _this12$meta_data$dos3.type_demande;
              _this12.formDataToBeWatched.type_credit = (_this12$meta_data$dos4 = _this12.meta_data['dossier_credit']) === null || _this12$meta_data$dos4 === void 0 || (_this12$meta_data$dos4 = _this12$meta_data$dos4.caf_recorded_file) === null || _this12$meta_data$dos4 === void 0 ? void 0 : _this12$meta_data$dos4.type_credit;
              _this12.formDataToBeWatched.contact_client = (_this12$meta_data$dos5 = _this12.meta_data['dossier_credit']) === null || _this12$meta_data$dos5 === void 0 || (_this12$meta_data$dos5 = _this12$meta_data$dos5.caf_recorded_file) === null || _this12$meta_data$dos5 === void 0 ? void 0 : _this12$meta_data$dos5.phone;
              _this12.formDataToBeWatched.email_client = (_this12$meta_data$dos6 = _this12.meta_data['dossier_credit']) === null || _this12$meta_data$dos6 === void 0 || (_this12$meta_data$dos6 = _this12$meta_data$dos6.caf_recorded_file) === null || _this12$meta_data$dos6 === void 0 ? void 0 : _this12$meta_data$dos6.email;
              _this12.formDataToBeWatched.nom = (_this12$meta_data$dos7 = _this12.meta_data['dossier_credit']) === null || _this12$meta_data$dos7 === void 0 || (_this12$meta_data$dos7 = _this12$meta_data$dos7.caf_recorded_file) === null || _this12$meta_data$dos7 === void 0 ? void 0 : _this12$meta_data$dos7.client.nomcli;
              _this12.formDataToBeWatched.prenoms = (_this12$meta_data$dos8 = _this12.meta_data['dossier_credit']) === null || _this12$meta_data$dos8 === void 0 || (_this12$meta_data$dos8 = _this12$meta_data$dos8.caf_recorded_file) === null || _this12$meta_data$dos8 === void 0 ? void 0 : _this12$meta_data$dos8.client.prenomcli;
              setTimeout(function () {
                var _this12$meta_data$dos9;
                _this12.formDataToBeWatched.type_credit = (_this12$meta_data$dos9 = _this12.meta_data['dossier_credit']) === null || _this12$meta_data$dos9 === void 0 || (_this12$meta_data$dos9 = _this12$meta_data$dos9.caf_recorded_file) === null || _this12$meta_data$dos9 === void 0 ? void 0 : _this12$meta_data$dos9.type_de_pret;
                // this.formDataToBeWatched.montant_sollicite = this.meta_data['dossier_credit']?.caf_recorded_file?.montant?.toString().replace(/\s/g, '')
                // this.formDataToBeWatched.montant_credit = this.meta_data['dossier_credit']?.caf_recorded_file?.montant?.toString().replace(/\s/g, '');
              }, 1000);
            case 8:
            case "end":
              return _context9.stop();
          }
        }, _callee9);
      }))();
    },
    setAllDefaultFields: function setAllDefaultFields(createdKey) {
      this.formDataToBeWatched = this.meta_data['dossier_credit'][createdKey];
    },
    defaultRetract: function defaultRetract(rc, ra) {
      if (ra != null) {
        this.seen = rc;
        var a = {
          tb_name: this.tb_name + this.meta_data["cred_pub_key"],
          status: this.seen
        };
        EventBus.$emit("savedclosed-table", a);
      }
    },
    majAutreEntrepriseEmployeur: function majAutreEntrepriseEmployeur() {
      var _this13 = this;
      if (this.convention_entreprises.length > 0) {
        var findEnprunteurEntr = false;
        var findConjointEntr = false;
        this.convention_entreprises.forEach(function (el) {
          if (el.denomination == _this13.entreprise) {
            findEnprunteurEntr = true;
          }
          if (el.denomination == _this13.conjoint_entreprise) {
            findConjointEntr = true;
          }
        });
        if (!findEnprunteurEntr && this.entreprise != "") {
          this.entreprise = "Autre";
        }
        if (!findConjointEntr && this.conjoint_entreprise != "") {
          this.conjoint_entreprise = "Autre";
        }
        // if (!findConjointEntr && this.conjoint_fonction != "") {
        //     this.conjoint_fonction = "Autre";
        // }
      } else {
        setTimeout(function () {
          _this13.majAutreEntrepriseEmployeur();
        }, 1500);
      }
    },
    searchEntreprise: function searchEntreprise(searchQuery, el) {
      var _el$_setupState;
      var lengthElFounds = el === null || el === void 0 || (_el$_setupState = el._setupState) === null || _el$_setupState === void 0 || (_el$_setupState = _el$_setupState.pfo) === null || _el$_setupState === void 0 ? void 0 : _el$_setupState.value.length;
      if (lengthElFounds > 0) {
        this.formDataToBeWatched.statut_entreprise = "Listée";
        this.isSelectedField = true;
      } else {
        this.formDataToBeWatched.statut_entreprise = "Non listée";
        this.formDataToBeWatched.entreprise = searchQuery;
        this.isSelectedField = false;
      }
    },
    searchEntrepriseInput: function searchEntrepriseInput(searchText) {
      searchText = searchText.toString().toLowerCase();
      var founds = this.entreprises.filter(function (item) {
        var raison_sociale = item.raison_sociale.toString().toLowerCase();
        if (raison_sociale.indexOf(searchText) != -1) {
          return item;
        }
      });
      if (founds.length > 0) {
        this.formDataToBeWatched.statut_entreprise = "Listée";
        this.changeStatutEntreprise('Listée');
        this.formDataToBeWatched.entreprise = "";
        this.isSelectedField = true;
      }
    },
    selectedOptionEntreprise: function selectedOptionEntreprise(value, obj) {
      this.formDataToBeWatched.entreprise = obj === null || obj === void 0 ? void 0 : obj.raison_sociale;
      if (this.entreprise == 'Autre') {
        this.formDataToBeWatched.entreprise = "";
        this.formDataToBeWatched.statut_entreprise = "Non listée";
      } else {
        this.formDataToBeWatched.statut_entreprise = "Listée";
      }
      this.handleInput();
    },
    selectedOptionEntreprise2: function selectedOptionEntreprise2(value, obj) {
      this.formDataToBeWatched.conjoint.entreprise = obj === null || obj === void 0 ? void 0 : obj.denomination;
      if (this.conjoint_entreprise == 'Autre') {
        this.formDataToBeWatched.conjoint.entreprise = "";
        this.formDataToBeWatched.conjoint.statut_entreprise = "Non listée";
      } else {
        this.formDataToBeWatched.conjoint.statut_entreprise = "Listée";
      }
      this.handleInput();
    },
    removedOption: function removedOption() {
      this.formDataToBeWatched.entreprise = "";
      this.handleInput();
    },
    changeStatutEntreprise: function changeStatutEntreprise(value) {
      var _this14 = this;
      var statut_entreprise = value === null || value === void 0 ? void 0 : value.toLowerCase();
      if (this.$el.querySelector('#statut_client')) {
        this.$el.querySelector('#statut_client').querySelectorAll('option').forEach(function (el) {
          if (el.textContent == "Salarié d'entreprise " + statut_entreprise) {
            _this14.formDataToBeWatched.statut_client = el.textContent;
          }
        });
        this.handleInput();
      }
    },
    determinePourQutotite: function determinePourQutotite(value) {
      var _this15 = this;
      var taux = 0;
      if (this.pourcentages_quotites.length == 0) {
        setTimeout(function () {
          _this15.handleInput();
        }, 1500);
      } else {
        this.pourcentages_quotites.forEach(function (element) {
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
        });
      }
      return taux;
    },
    calculQuotite: function calculQuotite() {
      var _this$formDataToBeWat7;
      var salaire_conjoint = Number((_this$formDataToBeWat7 = this.formDataToBeWatched) === null || _this$formDataToBeWat7 === void 0 || (_this$formDataToBeWat7 = _this$formDataToBeWat7.conjoint) === null || _this$formDataToBeWat7 === void 0 || (_this$formDataToBeWat7 = _this$formDataToBeWat7.salaire) === null || _this$formDataToBeWat7 === void 0 ? void 0 : _this$formDataToBeWat7.toString().replace(/\s/g, ""));
      // let salaire_emprunt_pondere = Number(this.formDataToBeWatched.revenu_total_colonne_montant_pondere?.toString().replace(/\s/g, ""));
      // let revenu_qc = Number(this.formDataToBeWatched.revenu_total_colonne_montant_qc1?.toString().replace(/\s/g, ""));
      // let revenu_qc_general = Number(this.formDataToBeWatched.revenu_total_colonne_montant_qc2?.toString().replace(/\s/g, ""));

      // if (revenu_qc > 0) {
      //     this.formDataToBeWatched.pourcentage_quotite = ((revenu_qc / salaire_emprunt_pondere) * 100).toFixed(2);
      // }

      // if (revenu_qc_general > 0) {
      //     this.formDataToBeWatched.pourcentage_quotite_general = ((revenu_qc_general / salaire_emprunt_pondere) * 100).toFixed(2);
      // }

      // this.formDataToBeWatched.quotite_cessible = revenu_qc;
      // this.formDataToBeWatched.quotite_cessible_general = revenu_qc_general;

      // this.formDataToBeWatched.quotite_cessible = parseInt(salaire_emprunt_pondere * (this.formDataToBeWatched.pourcentage_quotite / 100));
      this.formDataToBeWatched.conjoint.quotite_cessible = parseInt(salaire_conjoint * (this.formDataToBeWatched.conjoint.pourcentage_quotite / 100));

      // this.formDataToBeWatched.quotite_cessible_disponible = Number(this.formDataToBeWatched.quotite_cessible?.toString().replace(/\s/g, "")) - Number(this.echeance_total?.toString().replace(/\s/g, ""));
      // this.formDataToBeWatched.quotite_cessible_disponible_general = Number(this.formDataToBeWatched.quotite_cessible_general?.toString().replace(/\s/g, "")) - Number(this.echeance_total?.toString().replace(/\s/g, ""));
      // this.formDataToBeWatched.conjoint.quotite_cessible_disponible = Number(this.formDataToBeWatched.conjoint.quotite_cessible?.toString().replace(/\s/g, "")) - Number(this.echeance_total_conjoint?.toString().replace(/\s/g, ""));

      // EventBus.$emit("cred_pub_tb_10003-updated", {
      //     quotite_cessible: this.formDataToBeWatched.quotite_cessible,
      //     quotite_cessible_disponible: this.formDataToBeWatched.quotite_cessible_disponible,
      // });
    },
    calculEcheanceTotal: function calculEcheanceTotal() {
      var _this16 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee0() {
        return _regeneratorRuntime().wrap(function _callee0$(_context0) {
          while (1) switch (_context0.prev = _context0.next) {
            case 0:
              _this16.echeance_total = _this16.echeance;
              _this16.echeance_total_conjoint = 0;
              if (!['', null, undefined].includes(_this16.engagements_en_cours) && _this16.engagements_en_cours.length > 0) {
                _this16.engagements_en_cours.forEach(function (element) {
                  var _element$encours, _element$mensualite;
                  var mt = Number(element === null || element === void 0 || (_element$encours = element.encours) === null || _element$encours === void 0 ? void 0 : _element$encours.toString().replace(/\s/g, ""));
                  var mt_m = Number(element === null || element === void 0 || (_element$mensualite = element.mensualite) === null || _element$mensualite === void 0 ? void 0 : _element$mensualite.toString().replace(/\s/g, ""));
                  if (mt > 0) {
                    var _this16$echeance_tota;
                    _this16.echeance_total = Number((_this16$echeance_tota = _this16.echeance_total) === null || _this16$echeance_tota === void 0 ? void 0 : _this16$echeance_tota.toString().replace(/\s/g, "")) + mt_m;
                  }
                });
              }
              if (!['', null, undefined].includes(_this16.engagements_en_cours_conjoints) && _this16.engagements_en_cours_conjoints.length > 0) {
                _this16.engagements_en_cours_conjoints.forEach(function (element) {
                  var _element$encours2, _element$mensualite2;
                  var mt = Number(element === null || element === void 0 || (_element$encours2 = element.encours) === null || _element$encours2 === void 0 ? void 0 : _element$encours2.toString().replace(/\s/g, ""));
                  var mt_m = Number(element === null || element === void 0 || (_element$mensualite2 = element.mensualite) === null || _element$mensualite2 === void 0 ? void 0 : _element$mensualite2.toString().replace(/\s/g, ""));
                  if (mt > 0) {
                    var _this16$echeance_tota2;
                    _this16.echeance_total_conjoint = Number((_this16$echeance_tota2 = _this16.echeance_total_conjoint) === null || _this16$echeance_tota2 === void 0 ? void 0 : _this16$echeance_tota2.toString().replace(/\s/g, "")) + mt_m;
                  }
                });
              }
              _this16.calculQuotite();
            case 5:
            case "end":
              return _context0.stop();
          }
        }, _callee0);
      }))();
    },
    // updateDateDepartRetraite() {
    //     if (this.data_date_de_depart_a_la_retraite.length > 0) {
    //         let date_retraite = []
    //         if (!['', null, undefined].includes(this.formDataToBeWatched.date_depart_retraite)) {
    //             date_retraite = this.formDataToBeWatched.date_depart_retraite.split('-');
    //         }
    //         if (date_retraite.length > 1) {
    //             let date_ = new Date();
    //             date_retraite[0] = Number(date_retraite[0]);
    //             date_retraite[1] = Number(date_retraite[1]);
    //             if (this.date_naissance != "") {
    //                 let annee_naissance = Number(this.date_naissance?.toString()?.split('-')[0]);
    //                 if (annee_naissance > 0) {
    //                     this.age_depart_retraite = Number(date_retraite[0]) -  annee_naissance
    //                 }
    //             }
    //             date_retraite = new Date(date_retraite[0], date_retraite[1], 1);
    //             this.duree_credit = Number(this.duree_credit?.toString().replace(/\s/g, ""));
    //             let date_echeance = new Date(date_.setMonth(date_.getMonth() + this.duree_credit));
    //             let diff_month = this.dateDiffInMonths(date_echeance, date_retraite);
    //             if (diff_month >= 6) {
    //                 this.data_date_de_depart_a_la_retraite.forEach(el => {
    //                     if (el.libelle == 'OUI') {
    //                         this.formDataToBeWatched.depart_retraite = el.libelle;
    //                     }
    //                 });
    //             } else {
    //                 this.data_date_de_depart_a_la_retraite.forEach(el => {
    //                     if (el.libelle == 'NON') {
    //                         this.formDataToBeWatched.depart_retraite = el.libelle;
    //                     }
    //                 });
    //             }
    //         } else {
    //             let date_naissance = []
    //             if (!['', null, undefined].includes(this.date_naissance)) {
    //                 date_naissance = this.date_naissance.split('-');
    //             }
    //             if (date_naissance.length > 1) {
    //                 let date_ = new Date(date_naissance[0], date_naissance[1], date_naissance[2]);
    //                 date_ = new Date(date_.setFullYear(date_.getFullYear() + this.AGE_RETRAITE));
    //                 this.formDataToBeWatched.date_depart_retraite = date_.getFullYear() + '-' + ((date_.getMonth() + 1) >= 10 ? (date_.getMonth() + 1) : '0' + (date_.getMonth() + 1));
    //                 this.updateDateDepartRetraite();
    //             }
    //         }
    //         this.handleInput();
    //     } else {
    //         setTimeout(() => {
    //             this.updateDateDepartRetraite();
    //         }, 1500);
    //     }
    // },
    updateDateDepartRetraite: function updateDateDepartRetraite(payload) {
      console.log(payload);
      var dateRetraiteStr = '';
      if (Array.isArray(payload)) {
        dateRetraiteStr = payload[1] || '';
      } else {
        dateRetraiteStr = payload || this.formDataToBeWatched.date_depart_retraite || '';
      }
      var dateRetraite = [];
      var anneeNaissance = 0;
      var dateNaissance = [];
      if (typeof dateRetraiteStr === 'string' && /^\d{4}-\d{1,2}$/.test(dateRetraiteStr)) {
        dateRetraite = dateRetraiteStr.split('-').map(Number);
      }
      if (this.date_naissance && !['', null, undefined].includes(this.date_naissance)) {
        dateNaissance = this.date_naissance.split('-').map(Number);
        anneeNaissance = dateNaissance[0];
      }
      if (dateRetraite.length >= 2 && !isNaN(dateRetraite[0]) && !isNaN(dateRetraite[1])) {
        var _this$duree_credit;
        var _dateRetraite = dateRetraite,
          _dateRetraite2 = _slicedToArray(_dateRetraite, 2),
          year = _dateRetraite2[0],
          month = _dateRetraite2[1];
        if (anneeNaissance > 0) {
          this.age_depart_retraite = year - anneeNaissance;
        } else {
          this.age_depart_retraite = 0;
        }
        var dureeCredit = Number(((_this$duree_credit = this.duree_credit) === null || _this$duree_credit === void 0 ? void 0 : _this$duree_credit.toString().replace(/\s/g, '')) || 0);
        var today = new Date();
        var dateEcheance = new Date(today.setMonth(today.getMonth() + dureeCredit));
        var dateRetraiteObj = new Date(year, month - 1, 1);
        var diffMonths = this.dateDiffInMonths(dateEcheance, dateRetraiteObj);
        if (Array.isArray(this.data_date_de_depart_a_la_retraite) && this.data_date_de_depart_a_la_retraite.length > 0) {
          this.formDataToBeWatched.depart_retraite = diffMonths >= 6 ? 'OUI' : 'NON';
        }
      } else if (dateNaissance.length >= 2 && anneeNaissance > 0) {
        var _this$duree_credit2;
        var _dateNaissance = dateNaissance,
          _dateNaissance2 = _slicedToArray(_dateNaissance, 3),
          _year = _dateNaissance2[0],
          _month = _dateNaissance2[1],
          day = _dateNaissance2[2];
        var dateNaissanceObj = new Date(_year, _month - 1, day || 1);
        var defaultRetirementDate = new Date(dateNaissanceObj.setFullYear(dateNaissanceObj.getFullYear() + this.AGE_RETRAITE));
        var formattedMonth = (defaultRetirementDate.getMonth() + 1).toString().padStart(2, '0');
        this.formDataToBeWatched.date_depart_retraite = "".concat(defaultRetirementDate.getFullYear(), "-").concat(formattedMonth);
        this.age_depart_retraite = this.AGE_RETRAITE;
        var _dureeCredit = Number(((_this$duree_credit2 = this.duree_credit) === null || _this$duree_credit2 === void 0 ? void 0 : _this$duree_credit2.toString().replace(/\s/g, '')) || 0);
        var _today = new Date();
        var _dateEcheance = new Date(_today.setMonth(_today.getMonth() + _dureeCredit));
        var _diffMonths = this.dateDiffInMonths(_dateEcheance, defaultRetirementDate);
        if (Array.isArray(this.data_date_de_depart_a_la_retraite) && this.data_date_de_depart_a_la_retraite.length > 0) {
          this.formDataToBeWatched.depart_retraite = _diffMonths >= 6 ? 'OUI' : 'NON';
        }
      }
      if (typeof this.handleInput === 'function') {
        this.handleInput();
      } else {
        console.warn('handleInput is not defined in the component.');
      }
    },
    dateDiffInMonths: function dateDiffInMonths(date1, date2) {
      var d1 = new Date(date1);
      var d2 = new Date(date2);
      return (d2.getFullYear() - d1.getFullYear()) * 12 + (d2.getMonth() - d1.getMonth());
    },
    majAutreFonctionActuelle: function majAutreFonctionActuelle() {
      var _this17 = this;
      if (this.professions.length > 0) {
        var findEnprunteurFonc = false;
        var findConjointFonc = false;
        this.professions.forEach(function (el) {
          if (el.libelle == _this17.fonction) {
            findEnprunteurFonc = true;
          }
          if (el.libelle == _this17.conjoint_fonction) {
            findConjointFonc = true;
          }
        });
        if (!findEnprunteurFonc && this.fonction != "") {
          this.fonction = "Autre";
        }
        if (!findConjointFonc && this.conjoint_fonction != "") {
          this.conjoint_fonction = "Autre";
        }
      } else {
        setTimeout(function () {
          _this17.majAutreFonctionActuelle();
        }, 1500);
      }
    }
  }, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_methods, "majAutreEntrepriseEmployeur", function majAutreEntrepriseEmployeur() {
    var _this18 = this;
    if (this.convention_entreprises.length > 0) {
      var findEnprunteurEntr = false;
      var findConjointEntr = false;
      this.convention_entreprises.forEach(function (el) {
        if (el.denomination == _this18.entreprise) {
          findEnprunteurEntr = true;
        }
        if (el.denomination == _this18.conjoint_entreprise) {
          findConjointEntr = true;
        }
      });
      if (!findEnprunteurEntr && this.entreprise != "") {
        this.entreprise = "Autre";
      }
      if (!findConjointEntr && this.conjoint_entreprise != "") {
        this.conjoint_entreprise = "Autre";
      }
    } else {
      setTimeout(function () {
        _this18.majAutreEntrepriseEmployeur();
      }, 1500);
    }
  }), "getProfessions", function getProfessions() {
    var _this19 = this;
    // const cachedProfessions = localStorage.getItem('professions');
    // if (!cachedProfessions) {
    _services_credit_service__WEBPACK_IMPORTED_MODULE_2__["default"].loadProfessions().then(function (res) {
      _this19.professions = res.data.data;
      localStorage.setItem('professions', JSON.stringify(res.data.data));
    })["catch"](function (err) {
      console.log(err);
    });
    // } else {
    //     let data = JSON.parse(cachedProfessions);
    //     this.professions = data;
    // }
  }), "loadScoringData", function loadScoringData() {
    var _this20 = this;
    var cachedScoringCritere = localStorage.getItem('scoring_criteres');
    _services_credit_service__WEBPACK_IMPORTED_MODULE_2__["default"].loadScoringData().then(function (res) {
      _this20.scoringData(res);
      localStorage.setItem('scoring_criteres', JSON.stringify(res));
    })["catch"](function (err) {
      console.log(err);
    });
  }), "loadPourQuotiteData", function loadPourQuotiteData() {
    var _this21 = this;
    var cachedPourcentagesQuotites = localStorage.getItem('pourcentages_quotites');
    if (!cachedPourcentagesQuotites) {
      _services_credit_service__WEBPACK_IMPORTED_MODULE_2__["default"].loadPourQuotiteData().then(function (res) {
        _this21.pourcentages_quotites = res.data;
        localStorage.setItem('pourcentages_quotites', JSON.stringify(res.data));
      })["catch"](function (err) {
        console.log(err);
      });
    } else {
      var data = JSON.parse(cachedPourcentagesQuotites);
      this.pourcentages_quotites = data;
    }
  }), "getEntreprises", function getEntreprises() {
    var _this22 = this;
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee1() {
      return _regeneratorRuntime().wrap(function _callee1$(_context1) {
        while (1) switch (_context1.prev = _context1.next) {
          case 0:
            _context1.next = 2;
            return _this22.loadConventionEntreprise().then(function (res) {
              _this22.loadConEntreprise = false;
              _this22.convention_entreprises = res.data.data;
            })["catch"](function (err) {
              console.error(err);
              _this22.loadConEntreprise = false;
            });
          case 2:
          case "end":
            return _context1.stop();
        }
      }, _callee1);
    }))();
  }), "scoringData", function scoringData(res) {
    var _this23 = this;
    var criteres = res.data.data.criteres;
    criteres.forEach(function (element) {
      if (element.type == 'ppo' || element.type == null) {
        if (element.slug == 'statut_du_client_selon_lemployeur') {
          _this23.data_statut_du_client = element.elements.filter(function (item) {
            return item.type == 'ppo' || item.type == null;
          });
        }
        if (element.slug == 'type_de_contrat') {
          _this23.data_type_de_contrat = element.elements.filter(function (item) {
            return item.type == 'ppo' || item.type == null;
          });
        }
        if (element.slug == 'le_client_a_t_il_acheve_sa_periode_dessai_professionnel') {
          _this23.data_le_client_a_t_il = element.elements.filter(function (item) {
            return item.type == 'ppo' || item.type == null;
          });
        }
        if (element.slug == 'date_de_depart_a_la_retraite_ou_06_mois_apres_lecheance_du_credit') {
          _this23.data_date_de_depart_a_la_retraite = element.elements.filter(function (item) {
            return item.type == 'ppo' || item.type == null;
          });
        }
      }
    });
  }), "dateDiffInMonths", function dateDiffInMonths(d1, d2) {
    var d1Y = d1.getFullYear();
    var d2Y = d2.getFullYear();
    var d1M = d1.getMonth();
    var d2M = d2.getMonth();
    return d2M + 12 * d2Y - (d1M + 12 * d1Y);
  }), "onChange", function onChange(e) {
    if (e.target.value == "Non") {
      this.disp = true;
    } else {
      this.disp = false;
    }
  }), "selectedOptionFonction", function selectedOptionFonction(value, obj) {
    this.formDataToBeWatched.fonction = obj === null || obj === void 0 ? void 0 : obj.libelle;
    if (this.fonction == 'Autre') {
      this.formDataToBeWatched.fonction = "";
    }
    this.handleInput();
  }), "selectedOptionFonction2", function selectedOptionFonction2(value, obj) {
    this.formDataToBeWatched.conjoint.fonction = obj === null || obj === void 0 ? void 0 : obj.libelle;
    if (this.conjoint_fonction == 'Autre') {
      this.formDataToBeWatched.conjoint.fonction = "";
    }
    this.handleInput();
  }), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_methods, "updateAnciennete", function updateAnciennete(event) {
    var val = (event === null || event === void 0 ? void 0 : event.target.value) != "" ? event === null || event === void 0 ? void 0 : event.target.value : 0;
    if ((event === null || event === void 0 ? void 0 : event.target.id) == "an") {
      this.formDataToBeWatched.duree_anciennete[0] = val;
    }
    if ((event === null || event === void 0 ? void 0 : event.target.id) == "mois") {
      this.formDataToBeWatched.duree_anciennete[1] = val;
    }
  }), "formatAmount", function formatAmount(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }), "emitData2", function emitData2() {
    EventBus.$emit("dossier-updated-dcpp-2", {
      data_tb2: this.formDataToBeWatched
    });
  }), "getQuotiteCessible", function getQuotiteCessible() {
    var _this$meta_data$dossi11;
    if (!((_this$meta_data$dossi11 = this.meta_data["dossier_credit"]) !== null && _this$meta_data$dossi11 !== void 0 && (_this$meta_data$dossi11 = _this$meta_data$dossi11.cred_pub_tb_120004) !== null && _this$meta_data$dossi11 !== void 0 && _this$meta_data$dossi11.facilites_existante_conjoint)) {
      return;
    }
    var montant = 0;
    this.engagements_en_cours_conjoints.forEach(function (facilite) {
      if ((facilite === null || facilite === void 0 ? void 0 : facilite.montant_echeance) === 0) {} else {
        var _facilite$montant_ech;
        montant += parseInt(facilite === null || facilite === void 0 || (_facilite$montant_ech = facilite.montant_echeance) === null || _facilite$montant_ech === void 0 ? void 0 : _facilite$montant_ech.replace(/\s/g, ""), 10);
      }
    });
    this.formDataToBeWatched.conjoint.quotite_cessible_disponible = Number(this.formDataToBeWatched.conjoint.quotite_cessible) - montant;
    return {
      quotite_cessible_disponible: this.formDataToBeWatched.conjoint.quotite_cessible_disponible
    };
  }), "updateValueSelected", function updateValueSelected() {
    var _this24 = this;
    if (this.formDataToBeWatched.secteur_activite != "") {
      var found = this.secteurs_activites.filter(function (item) {
        return item.intitule == _this24.formDataToBeWatched.secteur_activite;
      });
      if (found.length > 0) {
        this.selected_secteur_activite = found[0];
      }
    }
    if (this.formDataToBeWatched.groupe_activite != "") {
      var _found = this.groupes_activites.filter(function (item) {
        return item.intitule == _this24.formDataToBeWatched.groupe_activite;
      });
      if (_found.length > 0) {
        this.selected_groupe_secteur = _found[0];
      }
    }
  }), "selectedOptionGroupeSecteurActivite", function selectedOptionGroupeSecteurActivite(value, obj) {
    this.selected_groupe_secteur = obj;
    this.selected_secteur_activite = "";
    this.formDataToBeWatched.secteur_activite = "";
    this.handleInput();
  }), "selectedOptionSecteurActivite", function selectedOptionSecteurActivite(value, obj) {
    this.selected_secteur_activite = obj;
    if (!['Autre'].includes(obj.intitule)) {
      var found = this.groupes_activites.filter(function (item) {
        return item.id == obj.groupe_activite_id;
      });
      if (found.length > 0) {
        this.selected_groupe_secteur = found[0];
        this.formDataToBeWatched.groupe_activite = found[0].intitule;
      }
      this.formDataToBeWatched.autre_secteur_activite = "";
    }
    this.handleInput();
  })),
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/carcasse_ppo/DCPP-PCP2.vue?vue&type=template&id=3aa3f80f&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/carcasse_ppo/DCPP-PCP2.vue?vue&type=template&id=3aa3f80f&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$formDataToBeWatch, _vm$formDataToBeWatch2, _vm$formDataToBeWatch3, _vm$formDataToBeWatch4, _vm$formDataToBeWatch5, _vm$formDataToBeWatch6;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    on: {
      contextmenu: function contextmenu($event) {
        return _vm.$refs.menu.open($event, _vm.tb_name);
      }
    }
  }, [_vm.isLoading ? _c("loader") : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "row bg-light card-width-height",
    staticStyle: {
      width: "100%",
      height: "100%"
    }
  }, [_c("ContextMenu", {
    ref: "menu",
    attrs: {
      id: _vm.tb_name,
      cred_pub_key: _vm.meta_parseable.cred_pub_key,
      tb_name: _vm.tb_name,
      contextList: _vm.contextList
    }
  }), _vm._v(" "), _vm.seen === true ? _c("div", {
    staticClass: "card",
    staticStyle: {
      width: "100%",
      height: "100%"
    }
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc pb-0 pt-2"
  }, [_c("h6", {
    ref: "topdiv",
    staticClass: "head",
    attrs: {
      id: "dcp-ppo2-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Profil professionnel\n                        ")]), _vm._v(" "), _c("div", {
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
  }, [_c("span", [_vm._v(" " + _vm._s(_vm.formDataToBeWatched.notes.length) + " ")])])])]) : _vm._e(), _vm._v(" "), _c("airplay-icon", {
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
        return _vm.$modal.show("presentation_employeur");
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
  }, [_vm.loadingData ? _c("div", {
    staticClass: "card-body"
  }, [_vm._m(0)]) : _c("div", [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(1), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.profession,
      expression: "formDataToBeWatched.profession"
    }],
    staticClass: "form-control",
    attrs: {
      id: "profession"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formDataToBeWatched, "profession", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "",
      disabled: "",
      selected: ""
    }
  }, [_vm._v("\n                                            --- Sélectionner la profession ---\n                                        ")]), _vm._v(" "), _c("option", {
    attrs: {
      value: ""
    }
  }), _vm._v(" "), _c("option", {
    attrs: {
      value: "Cadre supérieur/ingénieur assimilé"
    }
  }, [_vm._v("Cadre supérieur/ingénieur assimilé")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Cadre moyen/agent de maîtrise"
    }
  }, [_vm._v("Cadre moyen/agent de maîtrise")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Employé/ouvrier qualifié"
    }
  }, [_vm._v("Employé/ouvrier qualifié")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Employé/ouvrier non qualifié"
    }
  }, [_vm._v("Employé/ouvrier non qualifié")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Homme d'affaires"
    }
  }, [_vm._v("Homme d'affaires")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Technicien Superieur ( DUT -BTS)"
    }
  }, [_vm._v("Technicien Superieur ( DUT -BTS)")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(2), _vm._v(" "), _c("div", {
    staticClass: "d-flex position-relative align-items-center"
  }, [_c("Multiselect", {
    staticStyle: {
      height: "42px",
      "border-color": "#34495e",
      color: "#57606f",
      "font-size": "13px",
      "font-weight": "bold"
    },
    attrs: {
      searchable: true,
      trackBy: "libelle",
      label: "libelle",
      "value-prop": "libelle",
      id: "fonction",
      classes: {
        optionPointed: "text-gray-800 bg-gray-100"
      },
      options: _vm.professions_
    },
    on: {
      select: _vm.selectedOptionFonction
    },
    scopedSlots: _vm._u([{
      key: "option",
      fn: function fn(_ref) {
        var option = _ref.option;
        return [_c("p", {
          staticClass: "multiselect-option"
        }, [_vm._v(_vm._s(option.libelle))])];
      }
    }, {
      key: "singlelabel",
      fn: function fn(_ref2) {
        var value = _ref2.value;
        return [_c("p", {
          staticClass: "multiselect-single-label"
        }, [_vm._v(_vm._s(value.libelle))])];
      }
    }], null, false, 70791940),
    model: {
      value: _vm.fonction,
      callback: function callback($$v) {
        _vm.fonction = $$v;
      },
      expression: "fonction"
    }
  }), _vm._v(" "), _vm.professions == "" || _vm.professions.length == 0 ? _c("span", {
    staticClass: "spinner-border spinner-border spinner-custom-input",
    staticStyle: {
      "margin-right": "17px"
    }
  }) : _vm._e()], 1)]), _vm._v(" "), _vm.fonction == "Autre" ? _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(3), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.fonction,
      expression: "formDataToBeWatched.fonction"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "fonction_"
    },
    domProps: {
      value: _vm.formDataToBeWatched.fonction
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "fonction", $event.target.value);
      }, _vm.handleInput]
    }
  })]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(4), _vm._v(" "), _c("div", {
    staticClass: "d-flex position-relative align-items-center"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.periode_d_essai_achevee,
      expression: "formDataToBeWatched.periode_d_essai_achevee"
    }],
    staticClass: "form-control",
    attrs: {
      id: "periode_d_essai_achevee"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formDataToBeWatched, "periode_d_essai_achevee", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.handleInput]
    }
  }, [_c("option", {
    attrs: {
      value: "",
      disabled: "",
      selected: ""
    }
  }, [_vm._v("\n                                                --- Sélectionner ---\n                                            ")]), _vm._v(" "), _c("option", {
    attrs: {
      value: ""
    }
  }), _vm._v(" "), _vm._l(_vm.data_le_client_a_t_il, function (el, ind) {
    return _c("option", {
      key: ind,
      domProps: {
        value: el.libelle
      }
    }, [_vm._v(_vm._s(el.libelle))]);
  })], 2), _vm._v(" "), _vm.data_le_client_a_t_il == "" || _vm.data_le_client_a_t_il.length == 0 ? _c("span", {
    staticClass: "spinner-border spinner-border spinner-custom-input"
  }) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(5), _vm._v(" "), _c("div", {
    staticClass: "d-flex position-relative align-items-center"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.statut_client,
      expression: "formDataToBeWatched.statut_client"
    }],
    staticClass: "form-control",
    attrs: {
      id: "statut_client"
    },
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formDataToBeWatched, "statut_client", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.handleInput]
    }
  }, [_c("option", {
    attrs: {
      value: "",
      disabled: "",
      selected: ""
    }
  }, [_vm._v("\n                                                --- Sélectionner ---\n                                            ")]), _vm._v(" "), _c("option", {
    attrs: {
      value: ""
    }
  }), _vm._v(" "), _c("option", [_vm._v("Non salarié et autres types de revenus")]), _vm._v(" "), _c("option", [_vm._v("Salarié d'entreprise privée non target")]), _vm._v(" "), _c("option", [_vm._v("Agent de l'Etat (non fonctionnaire)")]), _vm._v(" "), _c("option", [_vm._v("Salarié d'entreprise privée target Tiers 1")]), _vm._v(" "), _c("option", [_vm._v("Salarié d'entreprise privée target Tiers 2 & 3")]), _vm._v(" "), _c("option", [_vm._v("Retraité")]), _vm._v(" "), _c("option", [_vm._v("Fonctionnaire")])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(6), _vm._v(" "), _c("MothAndYearInput", {
    "class": _vm.age_depart_retraite > _vm.AGE_RETRAITE ? "is-invalid " : "",
    attrs: {
      id: "date_depart_retraite",
      readonly: false,
      viewonly: false
    },
    on: {
      change: _vm.updateDateDepartRetraite
    },
    model: {
      value: _vm.formDataToBeWatched.date_depart_retraite,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "date_depart_retraite", $$v);
      },
      expression: "formDataToBeWatched.date_depart_retraite"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "invalid-feedback fw-bold",
    attrs: {
      id: "date_depart_retraiteFeedback"
    }
  }, [_c("small", [_vm._v("Attention l'age de départ retraite est > " + _vm._s(_vm.AGE_RETRAITE) + " ans.")])])], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(7), _vm._v(" "), _c("div", {
    staticClass: "d-flex position-relative align-items-center"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.type_contrat,
      expression: "formDataToBeWatched.type_contrat"
    }],
    staticClass: "form-control",
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
  }, [_vm._m(8), _vm._v(" "), _c("date-input", {
    attrs: {
      value: _vm.formDataToBeWatched.date_debut_cdd_interim,
      id: "date_debut_cdd_interim"
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
      id: "data_expiration_cdd_interim"
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(9), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.annee_prec_emploi,
      expression: "formDataToBeWatched.annee_prec_emploi"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      min: "0",
      id: "annee_prec_emploi"
    },
    domProps: {
      value: _vm.formDataToBeWatched.annee_prec_emploi
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "annee_prec_emploi", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    attrs: {
      "for": "date_premier_emploi"
    }
  }, [_vm._v("Durée au prémier emploi (Nombre de Mois) ")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.date_premier_emploi,
      expression: "formDataToBeWatched.date_premier_emploi"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      min: "0",
      id: "date_premier_emploi"
    },
    domProps: {
      value: _vm.formDataToBeWatched.date_premier_emploi
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "date_premier_emploi", $event.target.value);
      }
    }
  })])])]), _vm._v(" "), _vm.seen3 ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen3 = !_vm.seen3;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "bref-rappel-des-relations-du-client-avec-la-afg-banque-ci"
    }
  }, [_vm._v("\n                                    Identification de l'employeur\n                                    "), _c("chevron-up-icon", {
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
  }, [_vm._m(10), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.entreprise,
      expression: "entreprise"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      disabled: "",
      id: "entreprise"
    },
    domProps: {
      value: _vm.entreprise
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.entreprise = $event.target.value;
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _vm.entreprise == "Autre" ? _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    attrs: {
      "for": "entreprise_"
    }
  }, [_vm._v("Autre entreprise (Employeur) ")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.entreprise,
      expression: "formDataToBeWatched.entreprise"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      disabled: "",
      id: "entreprise_"
    },
    domProps: {
      value: _vm.formDataToBeWatched.entreprise
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "entreprise", $event.target.value);
      }, _vm.handleInput]
    }
  })]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(11), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.statut_entreprise,
      expression: "formDataToBeWatched.statut_entreprise"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      disabled: "",
      id: "statut_entreprise"
    },
    domProps: {
      value: _vm.formDataToBeWatched.statut_entreprise
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "statut_entreprise", $event.target.value);
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(12), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.employeur,
      expression: "formDataToBeWatched.employeur"
    }],
    staticClass: "form-control",
    attrs: {
      id: "employeur"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formDataToBeWatched, "employeur", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "",
      disabled: "",
      selected: ""
    }
  }, [_vm._v("\n                                                --- Sélectionner le Type d'employeur ---\n                                            ")]), _vm._v(" "), _c("option", {
    attrs: {
      value: ""
    }
  }), _vm._v(" "), _c("option", {
    attrs: {
      value: "Fonction publique"
    }
  }, [_vm._v("Fonction publique")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Para-publique"
    }
  }, [_vm._v("Para-publique")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Privé"
    }
  }, [_vm._v("Privé")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Organisme international"
    }
  }, [_vm._v("Organisme international")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    staticClass: "text-nowrap",
    attrs: {
      "for": "duree_anciennete2"
    }
  }, [_vm._v("Depuis quand votre employeur existe-il? (année)")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.duree_anciennete2,
      expression: "formDataToBeWatched.duree_anciennete2"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      id: "duree_anciennete2"
    },
    domProps: {
      value: _vm.formDataToBeWatched.duree_anciennete2
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "duree_anciennete2", $event.target.value);
      }, _vm.handleInput]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    attrs: {
      "for": "adresse_postale"
    }
  }, [_vm._v("Adresse postale")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.boite_postale_employeur,
      expression: "formDataToBeWatched.boite_postale_employeur"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "boite_postale_employeur"
    },
    domProps: {
      value: _vm.formDataToBeWatched.boite_postale_employeur
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "boite_postale_employeur", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(13), _vm._v(" "), _c("div", {
    staticClass: "d-flex position-relative align-items-center"
  }, [_c("Multiselect", {
    staticStyle: {
      height: "42px",
      "border-color": "#34495e",
      color: "#57606f",
      "font-size": "13px",
      "font-weight": "bold"
    },
    attrs: {
      searchable: true,
      trackBy: "intitule",
      label: "intitule",
      "value-prop": "intitule",
      id: "secteur_activite",
      classes: {
        optionPointed: "text-gray-800 bg-gray-100"
      },
      options: _vm.secteurs_activites_,
      "data-bs-original-title": (_vm$formDataToBeWatch2 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch2 === void 0 ? void 0 : _vm$formDataToBeWatch2.secteur_activite,
      title: (_vm$formDataToBeWatch3 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch3 === void 0 ? void 0 : _vm$formDataToBeWatch3.secteur_activite,
      "data-toggle": "tooltip",
      "data-placement": "top"
    },
    on: {
      select: _vm.selectedOptionSecteurActivite
    },
    scopedSlots: _vm._u([{
      key: "option",
      fn: function fn(_ref3) {
        var option = _ref3.option;
        return [_c("p", {
          staticClass: "multiselect-option"
        }, [_vm._v(_vm._s(option.intitule))])];
      }
    }, {
      key: "singlelabel",
      fn: function fn(_ref4) {
        var value = _ref4.value;
        return [_c("p", {
          staticClass: "multiselect-single-label",
          staticStyle: {
            overflow: "hidden"
          }
        }, [_vm._v(_vm._s(value.intitule))])];
      }
    }], null, false, 1667831191),
    model: {
      value: _vm.formDataToBeWatched.secteur_activite,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "secteur_activite", $$v);
      },
      expression: "formDataToBeWatched.secteur_activite"
    }
  }), _vm._v(" "), _vm.secteurs_activites_ == "" || _vm.secteurs_activites_.length == 0 ? _c("span", {
    staticClass: "spinner-border spinner-border spinner-custom-input",
    staticStyle: {
      "margin-right": "17px"
    }
  }) : _vm._e()], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(14), _vm._v(" "), _c("div", {
    staticClass: "d-flex position-relative align-items-center"
  }, [_c("Multiselect", {
    staticStyle: {
      height: "42px",
      "border-color": "#34495e",
      color: "#57606f",
      "font-size": "13px",
      "font-weight": "bold"
    },
    attrs: {
      searchable: true,
      trackBy: "intitule",
      label: "intitule",
      "value-prop": "intitule",
      id: "groupe_activite",
      classes: {
        optionPointed: "text-gray-800 bg-gray-100"
      },
      options: _vm.groupes_activites_,
      "data-bs-original-title": (_vm$formDataToBeWatch4 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch4 === void 0 ? void 0 : _vm$formDataToBeWatch4.groupe_activite,
      title: (_vm$formDataToBeWatch5 = _vm.formDataToBeWatched) === null || _vm$formDataToBeWatch5 === void 0 ? void 0 : _vm$formDataToBeWatch5.groupe_activite,
      "data-toggle": "tooltip",
      "data-placement": "top"
    },
    on: {
      select: _vm.selectedOptionGroupeSecteurActivite
    },
    scopedSlots: _vm._u([{
      key: "option",
      fn: function fn(_ref5) {
        var option = _ref5.option;
        return [_c("p", {
          staticClass: "multiselect-option"
        }, [_vm._v(_vm._s(option.intitule))])];
      }
    }, {
      key: "singlelabel",
      fn: function fn(_ref6) {
        var value = _ref6.value;
        return [_c("p", {
          staticClass: "multiselect-single-label",
          staticStyle: {
            overflow: "hidden"
          }
        }, [_vm._v(_vm._s(value.intitule))])];
      }
    }], null, false, 1667831191),
    model: {
      value: _vm.formDataToBeWatched.groupe_activite,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "groupe_activite", $$v);
      },
      expression: "formDataToBeWatched.groupe_activite"
    }
  }), _vm._v(" "), _vm.groupes_activites_ == "" || _vm.groupes_activites_.length == 0 ? _c("span", {
    staticClass: "spinner-border spinner-border spinner-custom-input",
    staticStyle: {
      "margin-right": "17px"
    }
  }) : _vm._e()], 1)]), _vm._v(" "), ["Autre"].includes(_vm.formDataToBeWatched.secteur_activite) ? _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    attrs: {
      "for": "adresse_postale"
    }
  }, [_vm._v("Autre secteur d'activité")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.autre_secteur_activite,
      expression: "formDataToBeWatched.autre_secteur_activite"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "autre_secteur_activite"
    },
    domProps: {
      value: _vm.formDataToBeWatched.autre_secteur_activite
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "autre_secteur_activite", $event.target.value);
      }
    }
  })]) : _vm._e()])])]) : _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen3 = !_vm.seen3;
      }
    }
  }, [_c("h6", {
    attrs: {
      id: "bref-rappel-des-relations-du-client-avec-la-afg-banque-ci"
    }
  }, [_vm._v("\n                                    Identification de l'employeur\n                                    "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])]), _vm._v(" "), _vm.matrimoniale == "Marié(e)" ? _c("div", [_vm.seen1 ? _c("div", {
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
  }, [_vm._v("\n                                        Conjoint(e)\n                                        "), _c("chevron-up-icon", {
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
  }, [_vm._m(15), _vm._v(" "), _c("div", {
    staticClass: "d-flex position-relative align-items-center"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.conjoint.entreprise,
      expression: "formDataToBeWatched.conjoint.entreprise"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "conjoint_entreprise"
    },
    domProps: {
      value: _vm.formDataToBeWatched.conjoint.entreprise
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched.conjoint, "entreprise", $event.target.value);
      }, _vm.handleInput]
    }
  }), _vm._v(" "), _vm.loadConEntreprise ? _c("span", {
    staticClass: "spinner-border spinner-border spinner-custom-input",
    staticStyle: {
      "margin-right": "17px"
    }
  }) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(16), _vm._v(" "), _c("Multiselect", {
    staticStyle: {
      height: "42px",
      "border-color": "#34495e",
      color: "#57606f",
      "font-size": "13px",
      "font-weight": "bold"
    },
    attrs: {
      searchable: true,
      trackBy: "libelle",
      label: "libelle",
      "value-prop": "libelle",
      id: "conjoint_fonction",
      classes: {
        optionPointed: "text-gray-800 bg-gray-100"
      },
      options: _vm.professions_
    },
    on: {
      select: _vm.selectedOptionFonction2
    },
    scopedSlots: _vm._u([{
      key: "option",
      fn: function fn(_ref7) {
        var option = _ref7.option;
        return [_c("p", {
          staticClass: "multiselect-option"
        }, [_vm._v(_vm._s(option.libelle))])];
      }
    }, {
      key: "singlelabel",
      fn: function fn(_ref8) {
        var value = _ref8.value;
        return [_c("p", {
          staticClass: "multiselect-single-label"
        }, [_vm._v(_vm._s(value.libelle))])];
      }
    }], null, false, 70791940),
    model: {
      value: _vm.conjoint_fonction,
      callback: function callback($$v) {
        _vm.conjoint_fonction = $$v;
      },
      expression: "conjoint_fonction"
    }
  })], 1), _vm._v(" "), _vm.conjoint_fonction == "Autre" ? _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    attrs: {
      "for": "conjoint_fonction_"
    }
  }, [_vm._v("Autre fonction actuelle ")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.conjoint.fonction,
      expression: "formDataToBeWatched.conjoint.fonction"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "conjoint_fonction_"
    },
    domProps: {
      value: _vm.formDataToBeWatched.conjoint.fonction
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched.conjoint, "fonction", $event.target.value);
      }, _vm.handleInput]
    }
  })]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(17), _vm._v(" "), _c("currency-input2", {
    attrs: {
      id: "revenu_total_colonne_conjoint",
      value: _vm.formDataToBeWatched.conjoint.revenu_total_colonne_conjoint,
      readonly: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    attrs: {
      "for": "pour_quotite_conjoint"
    }
  }, [_vm._v("% Quotité ")]), _vm._v(" "), _c("input-group", {
    scopedSlots: _vm._u([{
      key: "input",
      fn: function fn() {
        return [_c("input", {
          staticClass: "form-control",
          attrs: {
            id: "pour_quotite_conjoint",
            type: "number",
            readonly: ""
          },
          domProps: {
            value: _vm.formDataToBeWatched.conjoint.pourcentage_quotite
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
    }], null, false, 378083234)
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    attrs: {
      "for": "conjoint_quotite_cessible"
    }
  }, [_vm._v("Quotité cessible ")]), _vm._v(" "), _c("currency-input2", {
    attrs: {
      id: "conjoint_quotite_cessible",
      value: _vm.formDataToBeWatched.conjoint.quotite_cessible,
      readonly: ""
    },
    on: {
      input: function input($event) {
        return _vm.formDataVarsConjoint($event, "conjoint_quotite_cessible");
      }
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    attrs: {
      "for": "conjoint_quotite_cessible_disponible"
    }
  }, [_vm._v("Quotité disponible ")]), _vm._v(" "), _c("currency-input2", {
    "class": _vm.convertInt(_vm.formDataToBeWatched.conjoint.quotite_cessible_disponible) < 0 ? "is-invalid" : "",
    attrs: {
      id: "conjoint_quotite_cessible_disponible",
      value: _vm.formDataToBeWatched.conjoint.quotite_cessible_disponible,
      readonly: ""
    },
    on: {
      input: _vm.formDataVars
    }
  }), _vm._v(" "), _vm._m(18)], 1)])])]) : _c("div", {
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
  }, [_vm._v("\n                                        Conjoint(e)\n                                        "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])])]) : _vm._e(), _vm._v(" "), _vm.seen2 ? _c("div", {
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
      id: "data-sur-emplyeur"
    }
  }, [_vm._v("\n                                    Présentation de l'employeur\n                                    "), _c("chevron-up-icon", {
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
    staticClass: "col-md-12"
  }, [_vm._m(19), _vm._v(" "), _c("br"), _vm._v(" "), _c("vue-editor", {
    attrs: {
      id: "description_employeur"
    },
    on: {
      "update-value": function updateValue($event) {
        _vm.formDataToBeWatched[$event[0]] = $event[1];
      }
    },
    model: {
      value: _vm.formDataToBeWatched.description_employeur,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "description_employeur", $$v);
      },
      expression: "formDataToBeWatched.description_employeur"
    }
  })], 1)])]) : _c("div", {
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
      id: "data-sur-emplyeur"
    }
  }, [_vm._v("\n                                    Présentation de l'employeur\n                                    "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])])]), _vm._v(" "), _c("div", {
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
  }, [_vm._v("\n                        Fermer le tableau\n                    ")])])])]) : _c("div", {
    staticClass: "card card-width-height"
  }, [_c("br"), _vm._v(" "), _c("div", {
    staticClass: "card-header hdc pb-0 pt-2"
  }, [_c("h6", {
    staticClass: "head",
    attrs: {
      id: "dcp-ppo2-head"
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Profil professionnel\n                        ")]), _vm._v(" "), _c("div", {
    staticClass: "col-auto"
  }, [((_vm$formDataToBeWatch6 = _vm.formDataToBeWatched.notes) === null || _vm$formDataToBeWatch6 === void 0 ? void 0 : _vm$formDataToBeWatch6.length) > 0 ? _c("div", {
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
        return _vm.$modal.show("presentation_employeur");
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
      name: "presentation_employeur",
      images: ["/images/capture_afg/exemples/ppo_presentation_employeur.png"]
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
  return _c("div", {
    staticClass: "d-flex justify-content-center text-center align-items-center text-muted py-4"
  }, [_c("div", [_c("span", {
    staticClass: "spinner-border spinner-border"
  }), _vm._v(" "), _c("h5", [_vm._v("\n                                    Chargement des données en cours ... "), _c("br"), _vm._v("\n                                    Ceci peut prendre un peu de temps\n                                ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": "profession"
    }
  }, [_vm._v("Catégorie professionnelle "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": "fonction"
    }
  }, [_vm._v("Fonction actuelle "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": "fonction_"
    }
  }, [_vm._v("Autre fonction actuelle "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": "periode_d_essai_achevee"
    }
  }, [_vm._v("Période d'essai achevée "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": "statut_client"
    }
  }, [_vm._v("Statut professionel "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": "date_depart_retraite"
    }
  }, [_vm._v("Date de départ retraite "), _c("span", {
    staticStyle: {
      color: "red"
    }
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
      "for": "annee_prec_emploi"
    }
  }, [_vm._v("Durée à l'emploi précédent (Nombre de Mois) "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": "entreprise"
    }
  }, [_vm._v("Entreprise (Employeur)"), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": "statut_entreprise"
    }
  }, [_c("b", [_vm._v("Statut entreprise(Tiering)")]), _vm._v(" "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": "employeur"
    }
  }, [_vm._v("Type d'employeur "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "secteur_activite"
    }
  }, [_vm._v("\n                                            Secteur d'activité"), _c("span", {
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
      "for": "groupe_activite"
    }
  }, [_vm._v("\n                                            Groupe d'activité"), _c("span", {
    staticStyle: {
      color: "red"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": "conjoint_entreprise"
    }
  }, [_vm._v("Entreprise (Employeur)"), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": "conjoint_fonction"
    }
  }, [_vm._v("Fonction actuelle "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": "revenu_total_colonne_conjoint"
    }
  }, [_vm._v("Le montant des revenus "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "invalid-feedback fw-bold",
    attrs: {
      id: "conjoint_quotite_cessible_disponibleFeedback"
    }
  }, [_c("small", [_vm._v("Attention la quotité disponible est négatif.")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("span", {
    staticStyle: {
      "font-size": "10px !important"
    }
  }, [_c("b", [_vm._v("Faites une présentation complète de l'employeur en précisant ")]), _vm._v(":\n                                        "), _c("ul", {
    staticStyle: {
      "list-style": "circle"
    }
  }, [_c("li", [_vm._v("● Caractère privé, public ou para-public, activité principale et historique")]), _vm._v(" "), _c("li", [_vm._v("● Existence (ou pas) sur nos livres")]), _vm._v(" "), _c("li", [_vm._v("● Données financières (si disponibles et récentes)")])])]);
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

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/carcasse_ppo/DCPP-PCP2.vue?vue&type=style&index=0&id=3aa3f80f&lang=css&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/carcasse_ppo/DCPP-PCP2.vue?vue&type=style&index=0&id=3aa3f80f&lang=css&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-3aa3f80f] {\r\n    font-family: \"Google sans\";\n}\nlabel[data-v-3aa3f80f] {\r\n    height: 10px;\r\n    font-size: 13px;\n}\ninput[data-v-3aa3f80f],\r\nselect[data-v-3aa3f80f],\r\ntextarea[data-v-3aa3f80f] {\r\n    /* height: 35px; */\r\n    border-color: #34495e;\r\n    color: #57606f;\r\n    font-size: 13px;\r\n    font-weight: bold;\n}\n.th[data-v-3aa3f80f] {\r\n    padding: 4px;\r\n    padding-bottom: 0px;\n}\n.card-width-height[data-v-3aa3f80f] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-3aa3f80f] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\n.hdc[data-v-3aa3f80f] {\r\n    background-color: #57606f;\n}\n.relook-header[data-v-3aa3f80f] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\n.badge-sm[data-v-3aa3f80f] {\r\n    display: inline-block;\r\n    width: 15px;\r\n    height: 15px;\r\n    background: rgba(255, 0, 0, 0.882);\r\n    color: white;\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    border-radius: 100%;\r\n    position: absolute;\r\n    top: -20%;\r\n    left: 55%;\r\n    text-align: center;\n}\n.imageM22[data-v-3aa3f80f] {\r\n    background: url(\"/images/capture_cofina/exemple_source_revenus.png\") no-repeat;\r\n    background-position: center;\r\n    background-size: contain;\r\n    width: 1000px;\r\n    height: 200px;\n}\ntd[data-v-3aa3f80f],\r\np[data-v-3aa3f80f] {\r\n    font-size: 13px;\n}\n.relook-header[data-v-3aa3f80f] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\n.width-100[data-v-3aa3f80f] {\r\n    width: 90%;\n}\n.personne input[data-v-3aa3f80f] {\r\n    width: 135px;\n}\n._border_right[data-v-3aa3f80f] {\r\n    border-right: 1px solid;\n}\n.text-red[data-v-3aa3f80f] {\r\n    color: red;\n}\n.multiselect-option p[data-v-3aa3f80f] {\r\n    margin: 0 !important;\r\n    padding: 10px !important;\n}\n.vertical-middle[data-v-3aa3f80f] {\r\n    vertical-align: middle;\n}\ninput[type=\"checkbox\"][data-v-3aa3f80f] {\r\n    height: 18px;\r\n    width: 20px;\r\n    margin-right: 5px;\n}\n.revenu input[type=\"checkbox\"][data-v-3aa3f80f],\r\n.engagement input[type=\"checkbox\"][data-v-3aa3f80f],\r\n.garantie input[type=\"checkbox\"][data-v-3aa3f80f] {\r\n    height: 26px;\r\n    width: 24px;\r\n    margin-right: 5px;\n}\n.mt-2_5-px[data-v-3aa3f80f] {\r\n    margin-top: 2.5px;\n}\r\n", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/carcasse_ppo/DCPP-PCP2.vue?vue&type=style&index=0&id=3aa3f80f&lang=css&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/carcasse_ppo/DCPP-PCP2.vue?vue&type=style&index=0&id=3aa3f80f&lang=css&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCPP_PCP2_vue_vue_type_style_index_0_id_3aa3f80f_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DCPP-PCP2.vue?vue&type=style&index=0&id=3aa3f80f&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/carcasse_ppo/DCPP-PCP2.vue?vue&type=style&index=0&id=3aa3f80f&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCPP_PCP2_vue_vue_type_style_index_0_id_3aa3f80f_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCPP_PCP2_vue_vue_type_style_index_0_id_3aa3f80f_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/js/components/forms/afg/carcasse_ppo/DCPP-PCP2.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/components/forms/afg/carcasse_ppo/DCPP-PCP2.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DCPP_PCP2_vue_vue_type_template_id_3aa3f80f_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DCPP-PCP2.vue?vue&type=template&id=3aa3f80f&scoped=true */ "./resources/js/components/forms/afg/carcasse_ppo/DCPP-PCP2.vue?vue&type=template&id=3aa3f80f&scoped=true");
/* harmony import */ var _DCPP_PCP2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DCPP-PCP2.vue?vue&type=script&lang=js */ "./resources/js/components/forms/afg/carcasse_ppo/DCPP-PCP2.vue?vue&type=script&lang=js");
/* harmony import */ var _DCPP_PCP2_vue_vue_type_style_index_0_id_3aa3f80f_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DCPP-PCP2.vue?vue&type=style&index=0&id=3aa3f80f&lang=css&scoped=true */ "./resources/js/components/forms/afg/carcasse_ppo/DCPP-PCP2.vue?vue&type=style&index=0&id=3aa3f80f&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DCPP_PCP2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _DCPP_PCP2_vue_vue_type_template_id_3aa3f80f_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _DCPP_PCP2_vue_vue_type_template_id_3aa3f80f_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3aa3f80f",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/forms/afg/carcasse_ppo/DCPP-PCP2.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/forms/afg/carcasse_ppo/DCPP-PCP2.vue?vue&type=script&lang=js":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/carcasse_ppo/DCPP-PCP2.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DCPP_PCP2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DCPP-PCP2.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/carcasse_ppo/DCPP-PCP2.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DCPP_PCP2_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/forms/afg/carcasse_ppo/DCPP-PCP2.vue?vue&type=style&index=0&id=3aa3f80f&lang=css&scoped=true":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/carcasse_ppo/DCPP-PCP2.vue?vue&type=style&index=0&id=3aa3f80f&lang=css&scoped=true ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCPP_PCP2_vue_vue_type_style_index_0_id_3aa3f80f_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DCPP-PCP2.vue?vue&type=style&index=0&id=3aa3f80f&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/carcasse_ppo/DCPP-PCP2.vue?vue&type=style&index=0&id=3aa3f80f&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/forms/afg/carcasse_ppo/DCPP-PCP2.vue?vue&type=template&id=3aa3f80f&scoped=true":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/carcasse_ppo/DCPP-PCP2.vue?vue&type=template&id=3aa3f80f&scoped=true ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCPP_PCP2_vue_vue_type_template_id_3aa3f80f_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCPP_PCP2_vue_vue_type_template_id_3aa3f80f_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DCPP_PCP2_vue_vue_type_template_id_3aa3f80f_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DCPP-PCP2.vue?vue&type=template&id=3aa3f80f&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/carcasse_ppo/DCPP-PCP2.vue?vue&type=template&id=3aa3f80f&scoped=true");


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