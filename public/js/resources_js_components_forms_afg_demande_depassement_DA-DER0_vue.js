"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_forms_afg_demande_depassement_DA-DER0_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/demande_depassement/DA-DER0.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/demande_depassement/DA-DER0.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _services_afg_getSpecificDoc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/afg/getSpecificDoc */ "./resources/js/services/afg/getSpecificDoc.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../helpers/indexedDB */ "./resources/js/helpers/indexedDB.js");
/* harmony import */ var _helpers_indexedDB__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_helpers_indexedDB__WEBPACK_IMPORTED_MODULE_6__);
/* provided dependency */ var process = __webpack_require__(/*! process/browser.js */ "./node_modules/process/browser.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _methods;
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
  name: "Identification_du_client",
  display: "Identification du client",
  components: {
    MoreVerticalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.MoreVerticalIcon,
    ChevronUpIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.ChevronUpIcon,
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.ChevronDownIcon,
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.PlusIcon,
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.TrashIcon,
    AirplayIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__.AirplayIcon,
    Multiselect: _vueform_multiselect_dist_multiselect_vue2__WEBPACK_IMPORTED_MODULE_3__["default"]
    // BookOpenIcon,
  },
  computed: {
    convention_entreprises_: function convention_entreprises_() {
      var autre_employeur = {
        ent_pub_key: "autre",
        denomination: "AUTRE",
        type_entreprise: ["ENTREPRISE_NORMALE"],
        info_entreprise: {
          sigle: "",
          denomination: "AUTRE",
          dpt: "",
          gestionnaire: "",
          indice: ""
        }
      };
      return [_objectSpread({}, autre_employeur)].concat(_toConsumableArray(this.convention_entreprises));
    }
  },
  props: {
    meta_data: Object,
    tb_name: String,
    tb_display_name: String
  },
  created: function created() {
    var _this = this;
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _this$meta_data$dossi, _this$meta_data, _this$getSpecificDoc, _this$meta_data2;
      var oldCredPub, cred_pub_tb_120001;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            oldCredPub = (_this$meta_data$dossi = (_this$meta_data = _this.meta_data) === null || _this$meta_data === void 0 || (_this$meta_data = _this$meta_data.dossier_credit) === null || _this$meta_data === void 0 || (_this$meta_data = _this$meta_data.caf_recorded_file) === null || _this$meta_data === void 0 ? void 0 : _this$meta_data.oldDossRef) !== null && _this$meta_data$dossi !== void 0 ? _this$meta_data$dossi : null;
            _context.next = 3;
            return _this.getSpecificDoc.setData({
              toasted: _this.$toasted,
              instance_vue: _this,
              cred_pub_key: oldCredPub
            });
          case 3:
            cred_pub_tb_120001 = (_this$getSpecificDoc = _this.getSpecificDoc) === null || _this$getSpecificDoc === void 0 || (_this$getSpecificDoc = _this$getSpecificDoc.dossier_credit) === null || _this$getSpecificDoc === void 0 ? void 0 : _this$getSpecificDoc.cred_pub_tb_120001;
            if (cred_pub_tb_120001) {
              _this.formDataToBeWatched.type_piece = cred_pub_tb_120001.type_piece;
              _this.formDataToBeWatched.num_piece = cred_pub_tb_120001.num_piece;
              _this.formDataToBeWatched.date_delivrance_piece = cred_pub_tb_120001.date_delivrance_piece;
              _this.formDataToBeWatched.lieu_delivrance_piece = cred_pub_tb_120001.lieu_delivrance_piece;
              _this.formDataToBeWatched.sexe = cred_pub_tb_120001.sexe;
              _this.formDataToBeWatched.date_naissance = cred_pub_tb_120001.date_naissance;
              _this.formDataToBeWatched.nationnalite = cred_pub_tb_120001.nationnalite;
              _this.formDataToBeWatched.adresse = cred_pub_tb_120001.adresse;
              _this.formDataToBeWatched.matrimoniale = cred_pub_tb_120001.matrimoniale;
              _this.formDataToBeWatched.habitation = cred_pub_tb_120001.habitation;
              _this.formDataToBeWatched.anciennete_adresse = cred_pub_tb_120001.anciennete_adresse;
              _this.formDataToBeWatched.nbre_enfant = cred_pub_tb_120001.nbre_enfant;
              _this.formDataToBeWatched.mouvements_confies = cred_pub_tb_120001.mouvements_confies;
              _this.formDataToBeWatched.mouvements_confies_date = cred_pub_tb_120001.mouvements_confies_date;
              _this.formDataToBeWatched.geo_lat = cred_pub_tb_120001.geo_lat;
              _this.formDataToBeWatched.geo_lon = cred_pub_tb_120001.geo_lon;
              _this.formDataToBeWatched.cotation = cred_pub_tb_120001.cotation;
              _this.formDataToBeWatched.segmentation = cred_pub_tb_120001.segmentation;
              _this.formDataToBeWatched.ville_residence = cred_pub_tb_120001.ville_residence;
              _this.formDataToBeWatched.ville_naissance = cred_pub_tb_120001.ville_naissance;
              _this.formDataToBeWatched.nationnalite = cred_pub_tb_120001.nationnalite;
              _this.formDataToBeWatched.personne_politiquement_expose = cred_pub_tb_120001.personne_politiquement_expose;
            }
            _context.next = 7;
            return _this.getNationalites();
          case 7:
            _context.next = 9;
            return _this.getCreditBanques();
          case 9:
            _context.next = 11;
            return _this.loadPourQuotiteData();
          case 11:
            _this.$axios.post(_this.ebapisHost + "creditbuilder/api/v1/get-entreprise-convention/", {}).then(function (res) {
              _this.loadConEntreprise = false;
              _this.convention_entreprises = res.data.data;
            })["catch"](function (err) {
              console.error(err);
              _this.loadConEntreprise = false;
            });
            _context.next = 14;
            return _services_credit_service__WEBPACK_IMPORTED_MODULE_2__["default"].loadCAFAfg((_this$meta_data2 = _this.meta_data) === null || _this$meta_data2 === void 0 || (_this$meta_data2 = _this$meta_data2.dossier_credit) === null || _this$meta_data2 === void 0 ? void 0 : _this$meta_data2.monteur_doss_email).then(function (res) {
              _this.cafData(res);
            })["catch"](function (err) {
              console.log(err);
            });
          case 14:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  mounted: function mounted() {
    this.loadRetrieved();
    this.loadTbAttrs();
    this.tableClosedOrOpened();
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
      formDataToBeWatched: (_formDataToBeWatched = {
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
        montant_sollicite: 0,
        montant_credit: 0,
        duree_credit: 0
      }, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_formDataToBeWatched, "montant_sollicite", 0), "indice", ""), "compte_numero", ""), "telephone", ""), "type_piece", ""), "num_piece", ""), "date_delivrance_piece", ""), "lieu_delivrance_piece", ""), "sexe", ""), "date_naissance", ""), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_formDataToBeWatched, "ville_naissance", ""), "ville_residence", ""), "nationnalite", ""), "matrimoniale", ""), "regime_matrimonial", ""), "conjoint", {
        nom: "",
        prenoms: "",
        matrimoniale: "",
        adresse: "",
        profession: ""
      }), "anciennete_adresse", ""), "nbre_enfant", ""), "adresse", ""), "adresse_postale", ""), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_formDataToBeWatched, "geo_lon", ""), "geo_lat", ""), "personne_politiquement_expose", ""), "revenu_domicilie", ""), "engagements_en_cours_total_montant", ""), "engagements_en_cours_total_encours", ""), "engagements_en_cours_total_mensualite", ""), "engagements_en_cours_conjoint_total_montant", ""), "engagements_en_cours_conjoint_total_encours", ""), "engagements_en_cours_conjoint_total_mensualite", ""), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_formDataToBeWatched, "revenu_total_colonne_emprunteur", 0), "revenu_total_colonne_conjoint", 0), "revenu_total_colonne_mensualite", 0), "revenu_total_colonne_montant_pondere", 0), "revenu_total_colonne_montant_pondere_conjoint", 0), "revenu_total_colonne_montant_qc1", 0), "revenu_total_colonne_montant_qc1_conjoint", 0), "revenu_total_colonne_montant_qc2", 0), "revenu_total_colonne_taux_qc1", 0), "revenu_total_colonne_taux_qc1_conjoint", 0), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_formDataToBeWatched, "revenu_total_colonne_taux_qc2", 0), "revenu_total", ""), "salaire_brut", 0), "date_entree_en_relation", ""), "bref_mouvement_12_derniers_mois", ""), "bref_produit_eventuellement_souscrits", ""), "bref_incident_a_signaler", ""), "pourcentage_quotite", ""), "pourcentage_quotite_general", ""), "quotite_cessible", ""), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_formDataToBeWatched, "quotite_cessible_general", ""), "quotite_cessible_disponible", ""), "quotite_cessible_disponible_general", ""), "cotation", ""), "segmentation", ""), "convention_entreprise", "")),
      mask_telephone: "",
      nationnalites: [],
      seen1: true,
      seen2: true,
      revenu_domicilie: [{
        libelle: "Salaire net",
        checked: false,
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
        taux: 0,
        montant_pondere: 0,
        taux_qc1: 0,
        taux_qtc_conjoint: 0,
        montant_qc1: 0,
        montant_qc1_conjoint: 0,
        taux_qc2: 0,
        montant_qc2: 0,
        commentaire: ""
      }, {
        libelle: "Loyer",
        checked: false,
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
        taux_qtc_conjoint: 0,
        montant_qc1: 0,
        montant_qc1_conjoint: 0,
        taux_qc2: 0,
        montant_qc2: 0,
        commentaire: ""
      }],
      pourcentages_quotites: [],
      seen3: true,
      seen3_1: true,
      seen3_2: true,
      engagements_en_cours_conjoints: [{
        banque: "",
        libelle: "",
        type_credit: "",
        checked: true,
        montant: 0,
        encours: 0,
        mensualite: 0,
        date_echeance: "",
        rachat: "",
        notaion: ""
      }],
      data_garanties: [],
      seen5: true,
      seen6: true,
      seen7: true,
      seen8: true,
      seen9: true,
      oldDoc: null,
      getSpecificDoc: _services_afg_getSpecificDoc__WEBPACK_IMPORTED_MODULE_5__["default"],
      convention_entreprise: "",
      convention_entreprise_autre: null,
      loadConEntreprise: true,
      convention_entreprises: [],
      entreprise: "",
      seen2_1: true
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
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (_DEBUG) console.log(">> updateFormDataForDeletion");
              _this2.formDataToBeWatched.is_deleted = true;
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
      var _this3 = this;
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
              if (!_this3.formDataToBeWatched.is_deleted) {
                _context3.next = 5;
                break;
              }
              return _context3.abrupt("return");
            case 5:
              // Upload current (and arguably latest) formDataToBeWatched data

              _this3.uploadDataToServerAndUpdateLastSave(_this3.formDataToBeWatched, _this3.formDataToBeWatched);
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
        _cache = new (_helpers_indexedDB__WEBPACK_IMPORTED_MODULE_6___default())({
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
      var _this4 = this;
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
                  _this4.uploadDataToServerAndUpdateLastSave(newVal, oldVal);
                }
              }
              // First upload
              if (!_lastSaveTime) {
                _this4.uploadDataToServerAndUpdateLastSave(newVal, oldVal);
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
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              if (_DEBUG) console.log(">> uploadDataToServerAndUpdateLastSave");
              _context5.prev = 1;
              if (_DEBUG) console.log(">> this.autosaving");
              _context5.next = 5;
              return _this5.autosaving(newVal, oldVal);
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
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              if (_DEBUG) console.log(">> uploadDataToServerBeforePageCloses");
              _context6.prev = 1;
              _context6.next = 4;
              return _this6.autosaving(newVal, oldVal);
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
      var _this7 = this;
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
              return _this7.autosaving(_this7.formDataToBeWatched, _this7.formDataToBeWatched);
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
      var _this8 = this;
      _services_credit_service__WEBPACK_IMPORTED_MODULE_2__["default"].loadNationalites().then(function (res) {
        _this8.nationnalites = res.data;
      })["catch"](function (err) {
        console.log(err);
      });
    },
    getCreditBanques: function getCreditBanques() {
      var _this9 = this;
      _services_credit_service__WEBPACK_IMPORTED_MODULE_2__["default"].loadCreditBanques().then(function (res) {
        _this9.type_credits = res.data;
        localStorage.setItem('banque_credit_types', JSON.stringify(res.data));
      })["catch"](function (err) {
        console.log(err);
      });
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
      if (['mensualite', 'taux', 'montant_pondere'].includes(keyName) && objectName == 'revenu_domicilie') {
        this.handleInput(true);
      } else {
        this.handleInput();
      }
    },
    handleInput: function handleInput() {
      var _this$revenu_domicili,
        _this0 = this;
      var reset_taux_qc = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var type_client = this.formDataToBeWatched.type_client;
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
      (_this$revenu_domicili = this.revenu_domicilie) === null || _this$revenu_domicili === void 0 || _this$revenu_domicili.forEach(function (el) {
        if (el.eligible) {
          var _el$taux, _el$mensualite, _el$taux_qc2, _el$montant_pondere2, _el$taux_qtc_conjoint, _el$montant_pondere3;
          var t = (Number(((_el$taux = el.taux) === null || _el$taux === void 0 ? void 0 : _el$taux.toString().replace(/\s/g, "")) || 0) / 100).toFixed(2);
          var periode = 1;
          var periodicite = _this0.periodicites.find(function (p) {
            return p.libelle === el.periodicite;
          });
          if (periodicite !== null && periodicite !== void 0 && periodicite.month) {
            periode = periodicite.month;
          }
          if ((periodicite === null || periodicite === void 0 ? void 0 : periodicite.libelle) === "Bimensuelle") {
            var _el$montant_salaire;
            el.mensualite = Number(((_el$montant_salaire = el.montant_salaire) === null || _el$montant_salaire === void 0 ? void 0 : _el$montant_salaire.toString().replace(/\s/g, "")) || 0) * periode;
          } else {
            var _el$montant_salaire2;
            el.mensualite = Number(((_el$montant_salaire2 = el.montant_salaire) === null || _el$montant_salaire2 === void 0 ? void 0 : _el$montant_salaire2.toString().replace(/\s/g, "")) || 0) / periode;
          }
          el.mensualite = parseInt(el.mensualite.toFixed(2)) || 0;
          el.montant_pondere = Number(((_el$mensualite = el.mensualite) === null || _el$mensualite === void 0 ? void 0 : _el$mensualite.toString().replace(/\s/g, "")) || 0) * t;
          if (el.libelle === "Salaire net") {
            var _el$taux_qc, _el$montant_pondere;
            el.taux_qc1 = reset_taux_qc ? _this0.determinePourQutotite(el.montant_pondere, type_client) : el.taux_qc1 || 0;
            el.taux_qtc_conjoint = reset_taux_qc ? _this0.determinePourQutotite(el.montant_pondere, type_client) : el.taux_qtc_conjoint || 0;
            el.taux_qc2 = reset_taux_qc ? _this0.determinePourQutotite(el.montant_pondere) : el.taux_qc2 || 0;
            var t_qc2 = (Number(((_el$taux_qc = el.taux_qc2) === null || _el$taux_qc === void 0 ? void 0 : _el$taux_qc.toString().replace(/\s/g, "")) || 0) / 100).toFixed(2);
            el.montant_qc2 = Number(((_el$montant_pondere = el.montant_pondere) === null || _el$montant_pondere === void 0 ? void 0 : _el$montant_pondere.toString().replace(/\s/g, "")) || 0) * t_qc2;
          } else if (['Prime', 'Loyer'].includes(el.libelle)) {
            el.taux_qc1 = el.taux_qc1 === 0 ? 75 : el.taux_qc1 || 0;
            el.taux_qtc_conjoint = el.taux_qtc_conjoint === 0 ? 75 : el.taux_qtc_conjoint || 0;
          }
          var t_qc1 = (Number(((_el$taux_qc2 = el.taux_qc1) === null || _el$taux_qc2 === void 0 ? void 0 : _el$taux_qc2.toString().replace(/\s/g, "")) || 0) / 100).toFixed(2);
          el.montant_qc1 = Number(((_el$montant_pondere2 = el.montant_pondere) === null || _el$montant_pondere2 === void 0 ? void 0 : _el$montant_pondere2.toString().replace(/\s/g, "")) || 0) * t_qc1;
          var t_qc_conjoint = (Number(((_el$taux_qtc_conjoint = el.taux_qtc_conjoint) === null || _el$taux_qtc_conjoint === void 0 ? void 0 : _el$taux_qtc_conjoint.toString().replace(/\s/g, "")) || 0) / 100).toFixed(2);
          el.montant_qc1_conjoint = Number(((_el$montant_pondere3 = el.montant_pondere) === null || _el$montant_pondere3 === void 0 ? void 0 : _el$montant_pondere3.toString().replace(/\s/g, "")) || 0) * t_qc_conjoint;
          el.montant_pondere = parseInt(el.montant_pondere.toFixed(2)) || 0;
          el.montant_qc1 = parseInt(el.montant_qc1.toFixed(2)) || 0;
          el.montant_qc1_conjoint = parseInt(el.montant_qc1_conjoint.toFixed(2)) || 0;
          el.montant_qc2 = parseInt(el.montant_qc2.toFixed(2)) || 0;
        } else {
          el.montant_qc1_conjoint = 0;
          el.montant_qc1 = 0;
          el.montant_pondere = 0;
          el.montant_qc2 = 0;
        }
      });
      this.formDataToBeWatched.revenu_domicilie = this.revenu_domicilie;

      // Calculate totals
      this.formDataToBeWatched.revenu_total_colonne_montant_qc1 = this.somX3(this.revenu_domicilie, 'montant_qc1');
      this.formDataToBeWatched.revenu_total_colonne_montant_qc1_conjoint = this.somX3(this.revenu_domicilie, 'montant_qc1_conjoint');
      this.formDataToBeWatched.revenu_total_colonne_montant_qc2 = this.somX3(this.revenu_domicilie, 'montant_qc2');
      this.formDataToBeWatched.revenu_total_colonne_mensualite = this.somX3(this.revenu_domicilie, 'mensualite');
      this.formDataToBeWatched.revenu_total_colonne_montant_pondere = this.somX3(this.revenu_domicilie, 'montant_pondere');
      this.formDataToBeWatched.revenu_total_colonne_emprunteur = this.somX3(this.revenu_domicilie, 'montant_salaire');
      this.formDataToBeWatched.revenu_total_colonne_conjoint = this.somX3(this.revenu_domicilie, 'montant_conjoint');
      this.formDataToBeWatched.revenu_total = this.formDataToBeWatched.revenu_total_colonne_emprunteur + this.formDataToBeWatched.revenu_total_colonne_conjoint;
      if (this.convertInt(this.formDataToBeWatched.revenu_total_colonne_montant_pondere) > 0) {
        this.formDataToBeWatched.revenu_total_colonne_taux_qc1 = (this.convertInt(this.formDataToBeWatched.revenu_total_colonne_montant_qc1) / this.convertInt(this.formDataToBeWatched.revenu_total_colonne_montant_pondere) * 100).toFixed(2);
        this.formDataToBeWatched.revenu_total_colonne_taux_qc1_conjoint = (this.convertInt(this.formDataToBeWatched.revenu_total_colonne_montant_qc1_conjoint) / this.convertInt(this.formDataToBeWatched.revenu_total_colonne_montant_pondere) * 100).toFixed(2);
        this.formDataToBeWatched.revenu_total_colonne_taux_qc2 = (this.convertInt(this.formDataToBeWatched.revenu_total_colonne_montant_qc2) / this.convertInt(this.formDataToBeWatched.revenu_total_colonne_montant_pondere) * 100).toFixed(2);
      } else {
        this.formDataToBeWatched.revenu_total_colonne_taux_qc1 = 0;
        this.formDataToBeWatched.revenu_total_colonne_taux_qc1_conjoint = 0;
        this.formDataToBeWatched.revenu_total_colonne_taux_qc2 = 0;
      }
      this.revenu_domicilie.forEach(function (element) {
        var _element$montant_sala, _element$montant_conj;
        var total = Number((element === null || element === void 0 || (_element$montant_sala = element.montant_salaire) === null || _element$montant_sala === void 0 ? void 0 : _element$montant_sala.toString().replace(/\s/g, "")) || 0) + Number((element === null || element === void 0 || (_element$montant_conj = element.montant_conjoint) === null || _element$montant_conj === void 0 ? void 0 : _element$montant_conj.toString().replace(/\s/g, "")) || 0);
        element.total_ligne = total;
      });
      this.formDataToBeWatched.pourcentage_quotite = Number(this.formDataToBeWatched.revenu_total_colonne_taux_qc1) || 0;
      this.formDataToBeWatched.pourcentage_quotite_conjoint = Number(this.formDataToBeWatched.revenu_total_colonne_taux_qc1_conjoint) || 0;
      this.formDataToBeWatched.quotite_cessible = Number(this.formDataToBeWatched.revenu_total_colonne_montant_qc1) || 0;
      this.formDataToBeWatched.quotite_cessible_general = Number(this.formDataToBeWatched.revenu_total_colonne_montant_qc2) || 0;
      this.formDataToBeWatched.pourcentage_quotite_general = Number(this.formDataToBeWatched.revenu_total_colonne_taux_qc2) || 0;
      this.emitData();
      this.emitData2();
      this.emitEventForTbRevenuDimocile();
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
      var _this1 = this;
      _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["default"].loadUserData().then(function (res) {
        _this1.send2Backend(res, 0, 0);
      })["catch"](function (err) {
        _this1.loadWithError(err);
      });
    },
    setTbVal: function setTbVal(val) {
      this.cred_pub_key = val;
    },
    loadRetrieved: function loadRetrieved() {
      var lentb = this.meta_data["dossier_credit"]["tbs_in_use"];
      var createdKey = this.tb_name;
      var createdKeyArr = createdKey.split("tb");
      createdKey = "cred_pub_tb_" + createdKeyArr[1];

      // Close table by default
      // this.defaultRetract(
      //     false,
      //     this.meta_data["dossier_credit"]?.applied_templ_id
      // );

      if (this.meta_data["dossier_credit"][createdKey] == undefined) {
        var _this$meta_data$dossi2;
        if (((_this$meta_data$dossi2 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi2 === void 0 ? void 0 : _this$meta_data$dossi2["cred_pub_tb_10009"]) != undefined) {
          var _this$meta_data$dossi3;
          var data_tb0 = (_this$meta_data$dossi3 = this.meta_data["dossier_credit"]) === null || _this$meta_data$dossi3 === void 0 ? void 0 : _this$meta_data$dossi3["cred_pub_tb_10009"];
          // this.engagements_en_cours = data_tb0?.engagements_en_cours;
          // this.formDataToBeWatched.engagements_en_cours = data_tb0?.engagements_en_cours;
          this.revenu_domicilie = data_tb0 === null || data_tb0 === void 0 ? void 0 : data_tb0.revenu_domicilie;
          this.formDataToBeWatched.revenu_domicilie = data_tb0 === null || data_tb0 === void 0 ? void 0 : data_tb0.revenu_domicilie;
        }
      }
      if (lentb.length > 0) {
        var _this$meta_data$dossi9;
        if (this.meta_data["dossier_credit"][createdKey] != undefined) {
          var _this$meta_data$dossi4;
          this.formDataToBeWatched = this.meta_data["dossier_credit"][createdKey];

          // if (this.meta_data["dossier_credit"][createdKey]["conjoint"] != "" && this.meta_data["dossier_credit"][createdKey]["conjoint"]["engagements_en_cours"] != "") {
          //     this.engagements_en_cours_conjoints = this.meta_data["dossier_credit"][createdKey]["conjoint"]["engagements_en_cours"];
          // }

          // if (this.meta_data["dossier_credit"][createdKey]["engagements_en_cours"] != "") {
          //     this.engagements_en_cours = this.meta_data["dossier_credit"][createdKey]["engagements_en_cours"];
          // }

          if (this.meta_data["dossier_credit"][createdKey]["revenu_domicilie"] != "") {
            this.revenu_domicilie = this.meta_data["dossier_credit"][createdKey]["revenu_domicilie"];
          }

          // CHECK WHETHER IT IS FIRST TIME
          if (((_this$meta_data$dossi4 = this.meta_data['dossier_credit'][createdKey]) === null || _this$meta_data$dossi4 === void 0 ? void 0 : _this$meta_data$dossi4.is_first_time) === false) {
            this.setAllDefaultFields(createdKey);
          } else {
            var _this$meta_data$dossi5, _this$meta_data$dossi6;
            if (((_this$meta_data$dossi5 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi5 === void 0 ? void 0 : _this$meta_data$dossi5.doss_central_file_recorder) !== undefined) {
              this.setAllDefaultFieldsRecByEnr();
            }
            if (((_this$meta_data$dossi6 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi6 === void 0 ? void 0 : _this$meta_data$dossi6.caf_recorded_file) !== undefined) {
              this.setAllDefaultFieldsRecByCaf();
            }
          }
        } else {
          var _this$meta_data$dossi7, _this$meta_data$dossi8;
          if (((_this$meta_data$dossi7 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi7 === void 0 ? void 0 : _this$meta_data$dossi7.doss_central_file_recorder) !== undefined) {
            this.setAllDefaultFieldsRecByEnr();
          }
          if (((_this$meta_data$dossi8 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi8 === void 0 ? void 0 : _this$meta_data$dossi8.caf_recorded_file) != undefined) {
            this.setAllDefaultFieldsRecByCaf();
          }
        }

        // SET FIRST TIME TO FALSE
        this.formDataToBeWatched.is_first_time = false;
        this.formDataToBeWatched.carcasse_type = (_this$meta_data$dossi9 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi9 === void 0 ? void 0 : _this$meta_data$dossi9.applied_templ_name;
      } else {
        var _this$meta_data$dossi0, _this$meta_data$dossi1;
        if (((_this$meta_data$dossi0 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi0 === void 0 ? void 0 : _this$meta_data$dossi0.doss_central_file_recorder) !== undefined) {
          this.setAllDefaultFieldsRecByEnr();
        }

        // IN CASE THE FILE IS OPENED BY CAF
        else if (((_this$meta_data$dossi1 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi1 === void 0 ? void 0 : _this$meta_data$dossi1.caf_recorded_file) !== undefined) {
          this.setAllDefaultFieldsRecByCaf();
          var caf_recorded_file = this.meta_data["dossier_credit"]["caf_recorded_file"];
          this.formDataToBeWatched.montant_sollicite = caf_recorded_file === null || caf_recorded_file === void 0 ? void 0 : caf_recorded_file.montant;
          this.formDataToBeWatched.montant_credit = caf_recorded_file === null || caf_recorded_file === void 0 ? void 0 : caf_recorded_file.montant;
        }

        // SET FIRST TIME TO FALSE
        this.formDataToBeWatched.is_first_time = false;
      }
      if (this.meta_data["dossier_credit"]["client_core_banking"] != undefined) {
        var _client_core_banking$;
        var client_core_banking = this.meta_data["dossier_credit"]["client_core_banking"];
        var compte_numero = client_core_banking === null || client_core_banking === void 0 || (_client_core_banking$ = client_core_banking.accounts_data) === null || _client_core_banking$ === void 0 || (_client_core_banking$ = _client_core_banking$.comptes_courants[0]) === null || _client_core_banking$ === void 0 ? void 0 : _client_core_banking$.code;
        if (compte_numero != undefined) {
          this.formDataToBeWatched.compte_numero = compte_numero;
        }
      }
    },
    setAllDefaultFieldsRecByEnr: function setAllDefaultFieldsRecByEnr() {
      var _this10 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        var _this10$meta_data$dos, _this10$meta_data$dos2, _this10$meta_data$dos3, _this10$meta_data$dos4, _this10$meta_data$dos5, _this10$meta_data$dos6, _this10$meta_data$dos7, _this10$meta_data$dos8, _this10$meta_data$dos10, _this10$meta_data$dos11;
        var doss_central_file_recorder;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _this10.formDataToBeWatched.denomination_client = ((_this10$meta_data$dos = _this10.meta_data['dossier_credit']) === null || _this10$meta_data$dos === void 0 || (_this10$meta_data$dos = _this10$meta_data$dos.doss_central_file_recorder) === null || _this10$meta_data$dos === void 0 || (_this10$meta_data$dos = _this10$meta_data$dos.client) === null || _this10$meta_data$dos === void 0 ? void 0 : _this10$meta_data$dos.nomcli) + ' ' + ((_this10$meta_data$dos2 = _this10.meta_data['dossier_credit']) === null || _this10$meta_data$dos2 === void 0 || (_this10$meta_data$dos2 = _this10$meta_data$dos2.doss_central_file_recorder) === null || _this10$meta_data$dos2 === void 0 || (_this10$meta_data$dos2 = _this10$meta_data$dos2.client) === null || _this10$meta_data$dos2 === void 0 ? void 0 : _this10$meta_data$dos2.prenomcli);
              _this10.formDataToBeWatched.type_demande = (_this10$meta_data$dos3 = _this10.meta_data['dossier_credit']) === null || _this10$meta_data$dos3 === void 0 || (_this10$meta_data$dos3 = _this10$meta_data$dos3.doss_central_file_recorder) === null || _this10$meta_data$dos3 === void 0 ? void 0 : _this10$meta_data$dos3.type_demande;
              _this10.formDataToBeWatched.type_credit = (_this10$meta_data$dos4 = _this10.meta_data['dossier_credit']) === null || _this10$meta_data$dos4 === void 0 || (_this10$meta_data$dos4 = _this10$meta_data$dos4.doss_central_file_recorder) === null || _this10$meta_data$dos4 === void 0 ? void 0 : _this10$meta_data$dos4.type_credit;
              _this10.formDataToBeWatched.contact_client = (_this10$meta_data$dos5 = _this10.meta_data['dossier_credit']) === null || _this10$meta_data$dos5 === void 0 || (_this10$meta_data$dos5 = _this10$meta_data$dos5.doss_central_file_recorder) === null || _this10$meta_data$dos5 === void 0 ? void 0 : _this10$meta_data$dos5.phone;
              _this10.formDataToBeWatched.email_client = (_this10$meta_data$dos6 = _this10.meta_data['dossier_credit']) === null || _this10$meta_data$dos6 === void 0 || (_this10$meta_data$dos6 = _this10$meta_data$dos6.doss_central_file_recorder) === null || _this10$meta_data$dos6 === void 0 ? void 0 : _this10$meta_data$dos6.email;
              _this10.formDataToBeWatched.nom = (_this10$meta_data$dos7 = _this10.meta_data['dossier_credit']) === null || _this10$meta_data$dos7 === void 0 || (_this10$meta_data$dos7 = _this10$meta_data$dos7.doss_central_file_recorder) === null || _this10$meta_data$dos7 === void 0 ? void 0 : _this10$meta_data$dos7.client.nomcli;
              _this10.formDataToBeWatched.prenoms = (_this10$meta_data$dos8 = _this10.meta_data['dossier_credit']) === null || _this10$meta_data$dos8 === void 0 || (_this10$meta_data$dos8 = _this10$meta_data$dos8.doss_central_file_recorder) === null || _this10$meta_data$dos8 === void 0 ? void 0 : _this10$meta_data$dos8.client.prenomcli;
              setTimeout(function () {
                var _this10$meta_data$dos9, _this10$meta_data$dos0, _this10$meta_data$dos1;
                _this10.formDataToBeWatched.type_credit = (_this10$meta_data$dos9 = _this10.meta_data['dossier_credit']) === null || _this10$meta_data$dos9 === void 0 || (_this10$meta_data$dos9 = _this10$meta_data$dos9.doss_central_file_recorder) === null || _this10$meta_data$dos9 === void 0 ? void 0 : _this10$meta_data$dos9.type_de_pret;
                _this10.formDataToBeWatched.montant_sollicite = (_this10$meta_data$dos0 = _this10.meta_data['dossier_credit']) === null || _this10$meta_data$dos0 === void 0 || (_this10$meta_data$dos0 = _this10$meta_data$dos0.doss_central_file_recorder) === null || _this10$meta_data$dos0 === void 0 || (_this10$meta_data$dos0 = _this10$meta_data$dos0.montant) === null || _this10$meta_data$dos0 === void 0 ? void 0 : _this10$meta_data$dos0.toString().replace(/\s/g, '');
                _this10.formDataToBeWatched.montant_credit = (_this10$meta_data$dos1 = _this10.meta_data['dossier_credit']) === null || _this10$meta_data$dos1 === void 0 || (_this10$meta_data$dos1 = _this10$meta_data$dos1.doss_central_file_recorder) === null || _this10$meta_data$dos1 === void 0 || (_this10$meta_data$dos1 = _this10$meta_data$dos1.montant) === null || _this10$meta_data$dos1 === void 0 ? void 0 : _this10$meta_data$dos1.toString().replace(/\s/g, '');
              }, 1000);
              _this10.formDataToBeWatched.indice = (_this10$meta_data$dos10 = _this10.meta_data['dossier_credit']) === null || _this10$meta_data$dos10 === void 0 || (_this10$meta_data$dos10 = _this10$meta_data$dos10.doss_central_file_recorder) === null || _this10$meta_data$dos10 === void 0 ? void 0 : _this10$meta_data$dos10.client.matcli;
              _this10.formDataToBeWatched.telephone = (_this10$meta_data$dos11 = _this10.meta_data['dossier_credit']) === null || _this10$meta_data$dos11 === void 0 || (_this10$meta_data$dos11 = _this10$meta_data$dos11.doss_central_file_recorder) === null || _this10$meta_data$dos11 === void 0 ? void 0 : _this10$meta_data$dos11.phone;
              doss_central_file_recorder = _this10.meta_data["dossier_credit"]["doss_central_file_recorder"];
              _this10.mask_telephone = "+".concat(doss_central_file_recorder.indicatif, " ## ## ### ###");
            case 12:
            case "end":
              return _context8.stop();
          }
        }, _callee8);
      }))();
    },
    setAllDefaultFieldsRecByCaf: function setAllDefaultFieldsRecByCaf() {
      var _this11 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
        var _this11$meta_data$dos, _this11$meta_data$dos2, _this11$meta_data$dos3, _this11$meta_data$dos4, _this11$meta_data$dos5, _this11$meta_data$dos6, _this11$meta_data$dos7, _this11$meta_data$dos8, _this11$meta_data$dos10, _this11$meta_data$dos11;
        var caf_recorded_file;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              _this11.formDataToBeWatched.denomination_client = ((_this11$meta_data$dos = _this11.meta_data['dossier_credit']) === null || _this11$meta_data$dos === void 0 || (_this11$meta_data$dos = _this11$meta_data$dos.caf_recorded_file) === null || _this11$meta_data$dos === void 0 || (_this11$meta_data$dos = _this11$meta_data$dos.client) === null || _this11$meta_data$dos === void 0 ? void 0 : _this11$meta_data$dos.nomcli) + ' ' + ((_this11$meta_data$dos2 = _this11.meta_data['dossier_credit']) === null || _this11$meta_data$dos2 === void 0 || (_this11$meta_data$dos2 = _this11$meta_data$dos2.caf_recorded_file) === null || _this11$meta_data$dos2 === void 0 || (_this11$meta_data$dos2 = _this11$meta_data$dos2.client) === null || _this11$meta_data$dos2 === void 0 ? void 0 : _this11$meta_data$dos2.prenomcli);
              _this11.formDataToBeWatched.type_demande = (_this11$meta_data$dos3 = _this11.meta_data['dossier_credit']) === null || _this11$meta_data$dos3 === void 0 || (_this11$meta_data$dos3 = _this11$meta_data$dos3.caf_recorded_file) === null || _this11$meta_data$dos3 === void 0 ? void 0 : _this11$meta_data$dos3.type_demande;
              _this11.formDataToBeWatched.type_credit = (_this11$meta_data$dos4 = _this11.meta_data['dossier_credit']) === null || _this11$meta_data$dos4 === void 0 || (_this11$meta_data$dos4 = _this11$meta_data$dos4.caf_recorded_file) === null || _this11$meta_data$dos4 === void 0 ? void 0 : _this11$meta_data$dos4.type_credit;
              _this11.formDataToBeWatched.contact_client = (_this11$meta_data$dos5 = _this11.meta_data['dossier_credit']) === null || _this11$meta_data$dos5 === void 0 || (_this11$meta_data$dos5 = _this11$meta_data$dos5.caf_recorded_file) === null || _this11$meta_data$dos5 === void 0 ? void 0 : _this11$meta_data$dos5.phone;
              _this11.formDataToBeWatched.email_client = (_this11$meta_data$dos6 = _this11.meta_data['dossier_credit']) === null || _this11$meta_data$dos6 === void 0 || (_this11$meta_data$dos6 = _this11$meta_data$dos6.caf_recorded_file) === null || _this11$meta_data$dos6 === void 0 ? void 0 : _this11$meta_data$dos6.email;
              _this11.formDataToBeWatched.nom = (_this11$meta_data$dos7 = _this11.meta_data['dossier_credit']) === null || _this11$meta_data$dos7 === void 0 || (_this11$meta_data$dos7 = _this11$meta_data$dos7.caf_recorded_file) === null || _this11$meta_data$dos7 === void 0 ? void 0 : _this11$meta_data$dos7.client.nomcli;
              _this11.formDataToBeWatched.prenoms = (_this11$meta_data$dos8 = _this11.meta_data['dossier_credit']) === null || _this11$meta_data$dos8 === void 0 || (_this11$meta_data$dos8 = _this11$meta_data$dos8.caf_recorded_file) === null || _this11$meta_data$dos8 === void 0 ? void 0 : _this11$meta_data$dos8.client.prenomcli;
              setTimeout(function () {
                var _this11$meta_data$dos9, _this11$meta_data$dos0, _this11$meta_data$dos1;
                _this11.formDataToBeWatched.type_credit = (_this11$meta_data$dos9 = _this11.meta_data['dossier_credit']) === null || _this11$meta_data$dos9 === void 0 || (_this11$meta_data$dos9 = _this11$meta_data$dos9.caf_recorded_file) === null || _this11$meta_data$dos9 === void 0 ? void 0 : _this11$meta_data$dos9.type_de_pret;
                _this11.formDataToBeWatched.montant_sollicite = (_this11$meta_data$dos0 = _this11.meta_data['dossier_credit']) === null || _this11$meta_data$dos0 === void 0 || (_this11$meta_data$dos0 = _this11$meta_data$dos0.caf_recorded_file) === null || _this11$meta_data$dos0 === void 0 || (_this11$meta_data$dos0 = _this11$meta_data$dos0.montant) === null || _this11$meta_data$dos0 === void 0 ? void 0 : _this11$meta_data$dos0.toString().replace(/\s/g, '');
                _this11.formDataToBeWatched.montant_credit = (_this11$meta_data$dos1 = _this11.meta_data['dossier_credit']) === null || _this11$meta_data$dos1 === void 0 || (_this11$meta_data$dos1 = _this11$meta_data$dos1.caf_recorded_file) === null || _this11$meta_data$dos1 === void 0 || (_this11$meta_data$dos1 = _this11$meta_data$dos1.montant) === null || _this11$meta_data$dos1 === void 0 ? void 0 : _this11$meta_data$dos1.toString().replace(/\s/g, '');
              }, 1000);
              _this11.formDataToBeWatched.indice = (_this11$meta_data$dos10 = _this11.meta_data['dossier_credit']) === null || _this11$meta_data$dos10 === void 0 || (_this11$meta_data$dos10 = _this11$meta_data$dos10.caf_recorded_file) === null || _this11$meta_data$dos10 === void 0 ? void 0 : _this11$meta_data$dos10.client.matcli;
              _this11.formDataToBeWatched.telephone = (_this11$meta_data$dos11 = _this11.meta_data['dossier_credit']) === null || _this11$meta_data$dos11 === void 0 || (_this11$meta_data$dos11 = _this11$meta_data$dos11.caf_recorded_file) === null || _this11$meta_data$dos11 === void 0 ? void 0 : _this11$meta_data$dos11.phone;
              caf_recorded_file = _this11.meta_data["dossier_credit"]["caf_recorded_file"];
              _this11.mask_telephone = "+".concat(caf_recorded_file.indicatif, " ## ## ### ###");
            case 12:
            case "end":
              return _context9.stop();
          }
        }, _callee9);
      }))();
    },
    setAllDefaultFields: function setAllDefaultFields(createdKey) {
      var _this$meta_data$dossi10, _this$meta_data$dossi11;
      this.formDataToBeWatched = this.meta_data['dossier_credit'][createdKey];
      if (((_this$meta_data$dossi10 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi10 === void 0 ? void 0 : _this$meta_data$dossi10.doss_central_file_recorder) !== undefined) {
        this.setAllDefaultFieldsRecByEnr();
      }
      if (((_this$meta_data$dossi11 = this.meta_data['dossier_credit']) === null || _this$meta_data$dossi11 === void 0 ? void 0 : _this$meta_data$dossi11.caf_recorded_file) !== undefined) {
        this.setAllDefaultFieldsRecByCaf();
      }
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
    checkValueNbreEnfant: function checkValueNbreEnfant() {
      this.formDataToBeWatched.nbre_enfant = Number(this.formDataToBeWatched.nbre_enfant.toString().replace(/\s/g, ''));
      if (this.formDataToBeWatched.nbre_enfant > 20) {
        this.formDataToBeWatched.nbre_enfant = '20';
      } else if (this.formDataToBeWatched.nbre_enfant < 0 && this.formDataToBeWatched.nbre_enfant == '00') {
        this.formDataToBeWatched.nbre_enfant = '0';
      }
    },
    emitData: function emitData() {
      EventBus.$emit("cred_pub_tb_10002-updated", {
        // engagements_en_cours: this.engagements_en_cours,
        engagements_en_cours_conjoints: this.engagements_en_cours_conjoints,
        matrimoniale: this.formDataToBeWatched.matrimoniale,
        habitation: this.formDataToBeWatched.habitation,
        revenu_domicilie: this.revenu_domicilie,
        date_entree_en_relation: this.formDataToBeWatched.date_entree_en_relation,
        nom: this.formDataToBeWatched.nom,
        prenoms: this.formDataToBeWatched.prenoms,
        date_naissance: this.formDataToBeWatched.date_naissance,
        revenu_total_colonne_montant_pondere: this.formDataToBeWatched.revenu_total_colonne_montant_pondere,
        revenu_total_colonne_montant_qc1: this.formDataToBeWatched.revenu_total_colonne_montant_qc1,
        revenu_total_colonne_montant_qc2: this.formDataToBeWatched.revenu_total_colonne_montant_qc2
      });
    },
    emitData2: function emitData2() {
      EventBus.$emit("dossier-updated-dcp-2", {
        data_tb2: this.formDataToBeWatched
      });
    },
    changeEligibleValue: function changeEligibleValue(event, index) {
      var _this12 = this;
      setTimeout(function () {
        if (_this12.revenu_domicilie[index]['eligible'] == false) {
          _this12.revenu_domicilie[index]['taux'] = 0;
          _this12.revenu_domicilie[index]['montant_pondere'] = 0;
          _this12.revenu_domicilie[index]['taux_qc1'] = 0;
          _this12.revenu_domicilie[index]['montant_qc1'] = 0;
          _this12.revenu_domicilie[index]['taux_qc2'] = 0;
          _this12.revenu_domicilie[index]['montant_qc2'] = 0;
          _this12.revenu_domicilie[index]['source_remboursement'] = false;
          _this12.revenu_domicilie[index]['periodicite'] = "";
          _this12.revenu_domicilie[index]['mensualite'] = "";
          _this12.revenu_domicilie[index]['commentaire'] = "";
        } else {
          if (_this12.revenu_domicilie[index]['libelle'] == 'Salaire net') {
            _this12.revenu_domicilie[index]['taux'] = 100;
          }
          if (['Loyer', 'Prime'].includes(_this12.revenu_domicilie[index]['libelle'])) {
            _this12.revenu_domicilie[index]['taux'] = 75;
            _this12.revenu_domicilie[index]['taux_qc1'] = 75;
          }
        }
        _this12.handleInput();
      }, 500);
    },
    resetValues: function resetValues(event, index, objectName) {
      if (objectName == 'revenu_domicilie') {
        this[objectName][index].montant_emprunteur = "";
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
    determinePourQutotite: function determinePourQutotite(value) {
      var _this13 = this;
      var type_client = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var taux = 0;
      if (this.pourcentages_quotites.length == 0) {
        setTimeout(function () {
          _this13.handleInput();
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
    addMoreRevenu: function addMoreRevenu() {
      this.revenu_domicilie.push({
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
        taux_qtc_conjoint: 0,
        montant_qc1: 0,
        montant_qc1_conjoint: 0,
        taux_qc2: 0,
        montant_qc2: 0,
        commentaire: ""
      });
      this.handleInput();
    },
    removeRevenu: function removeRevenu(index) {
      this.revenu_domicilie.splice(index, 1);
      this.handleInput();
    }
  }, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_methods, "addMoreRevenu", function addMoreRevenu() {
    this.revenu_domicilie.push({
      libelle: "",
      checked: true,
      montant_emprunteur: "",
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
  }), "removeRevenu", function removeRevenu(index) {
    this.revenu_domicilie.splice(index, 1);
    this.handleInput();
  }), "loadPourQuotiteData", function loadPourQuotiteData() {
    var _this14 = this;
    _services_credit_service__WEBPACK_IMPORTED_MODULE_2__["default"].loadPourQuotiteData().then(function (res) {
      _this14.pourcentages_quotites = res.data;
    })["catch"](function (err) {
      console.log(err);
    });
  }), "remove", function remove(index) {
    // this.engagements_en_cours.splice(index, 1);
    this.handleInput();
  }), "addMoreConjoint", function addMoreConjoint() {
    this.engagements_en_cours_conjoints.push({
      libelle: "",
      banque: "",
      type_credit: "",
      checked: true,
      montant: 0,
      encours: 0,
      mensualite: 0,
      date_echeance: "",
      rachat: ""
    });
    this.handleInput();
  }), "removeConjoint", function removeConjoint(index) {
    this.engagements_en_cours_conjoints.splice(index, 1);
    this.handleInput();
  }), "scoringData", function scoringData(res) {
    var _this15 = this;
    var criteres = res.data.data.criteres;
    criteres.forEach(function (element) {
      if (element.type == 'ppo' || element.type == null) {
        if (element.slug == 'garanties') {
          _this15.data_garanties = element.elements;
        }
      }
    });
  }), "handleDateInput", function handleDateInput(event) {
    var _this$meta_data3;
    this.formDataToBeWatched[event[0]] = event[1];
    var d2 = new Date((_this$meta_data3 = this.meta_data) === null || _this$meta_data3 === void 0 || (_this$meta_data3 = _this$meta_data3.dossier_credit) === null || _this$meta_data3 === void 0 ? void 0 : _this$meta_data3.created_at);
    var DateRelation = new Date(this.formDataToBeWatched.date_entree_en_relation);
    if (DateRelation > d2) {
      this.formDataToBeWatched.date_entree_en_relation = '';
      this.$toasted.show("La date d'entrée en relation doit être anterieur à la date de création du dossier");
    } else {
      this.handleInput();
    }
  }), "emitEventForTbRevenuDimocile", function emitEventForTbRevenuDimocile() {
    EventBus.$emit("dossier-updated-dcpp-pcp1-0", {
      data_tb1: this.formDataToBeWatched
    });
  }), "formuleQD", function formuleQD(mt) {
    mt = isNaN(mt) ? 0 : mt;
    return 'Formule de calcul: Quotité disponible = Quotité cessible (' + this.formatAmount(mt) + ') - Mensualités totales (' + this.formatAmount(this.echeance_total) + ')';
  }), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_methods, "formatAmount", function formatAmount(x) {
    return x === null || x === void 0 ? void 0 : x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }), "updateConventionEntreprise", function updateConventionEntreprise(newValue) {
    this.convention_entreprise = newValue;
  }), "changeConvention", function changeConvention() {
    var _this16 = this;
    this.formDataToBeWatched.convention_entreprise = this.convention_entreprises_.find(function (el) {
      return el.ent_pub_key == _this16.convention_entreprise;
    });
    if (this.convention_entreprise == 'autre') {
      this.formDataToBeWatched.convention_entreprise.denomination = this.convention_entreprise_autre;
      this.formDataToBeWatched.convention_entreprise.info_entreprise.denomination = this.convention_entreprise_autre;
    }
  }), "cafData", function cafData(res) {
    var _this$cafInfo$entite, _this$cafInfo;
    this.cafInfo = res.data;
    if (this.formDataToBeWatched.telephone_principal_dirg == undefined || this.formDataToBeWatched.telephone_principal_dirg.length === 0) {
      this.formDataToBeWatched.telephone_principal_dirg = this.cafInfo.phonecode;
    }
    this.formDataToBeWatched.filiale = (_this$cafInfo$entite = (_this$cafInfo = this.cafInfo) === null || _this$cafInfo === void 0 ? void 0 : _this$cafInfo.entite) !== null && _this$cafInfo$entite !== void 0 ? _this$cafInfo$entite : 'AFGB ML';
    this.formDataToBeWatched.agence = this.cafInfo.agence.replaceAll("_", " ");
    this.formDataToBeWatched.agence = this.formDataToBeWatched.agence.replace(this.formDataToBeWatched.filiale, "");
    this.formDataToBeWatched.caf = this.cafInfo.nom + " (" + this.cafInfo.codecaf + ")";
    this.formDataToBeWatched.pays = this.list_entites[this.formDataToBeWatched.filiale];
    this.formDataToBeWatched.nom_complet_caf = this.cafInfo.nom;
    this.formDataToBeWatched.email_caf = this.cafInfo.email;
    this.formDataToBeWatched.id_caf = this.cafInfo.id;
  })),
  watch: {
    formDataToBeWatched: {
      handler: function handler(newVal, oldVal) {
        this.autosaving(newVal, oldVal);
      },
      deep: true,
      immediate: true
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
        var _this$formDataToBeWat;
        if (['', null, undefined, false].includes((_this$formDataToBeWat = this.formDataToBeWatched) === null || _this$formDataToBeWat === void 0 ? void 0 : _this$formDataToBeWat.coming_from_sni)) {
          this.formDataToBeWatched.note_edane = "";
          this.formDataToBeWatched.classe_risque = "";
          this.formDataToBeWatched.capital = "";
          this.formDataToBeWatched.coming_from_sni = false;
          this.$set(this.formDataToBeWatched, 'status_note_sni', null);
          this.$set(this.formDataToBeWatched, 'sni_details', null);
        }
      }
      // }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/demande_depassement/DA-DER0.vue?vue&type=template&id=64a34f84&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/demande_depassement/DA-DER0.vue?vue&type=template&id=64a34f84&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm$formDataToBeWatch, _vm$formDataToBeWatch2;
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
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Fiche d'identification du client\n                        ")]), _vm._v(" "), _c("div", {
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
  }, [_c("div", {
    staticClass: "col-12 p-0 position-relative"
  }, [_vm.seen6 ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen6 = !_vm.seen6;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "bref-rappel-des-relations-du-client-avec-la-afg-banque-ci"
    }
  }, [_vm._v("\n                                Informations personnelles\n                                "), _c("chevron-up-icon", {
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
  }, [_c("label", {
    attrs: {
      "for": "nom"
    }
  }, [_vm._v("Nom ")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.nom,
      expression: "formDataToBeWatched.nom"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      readonly: "",
      id: "nom"
    },
    domProps: {
      value: _vm.formDataToBeWatched.nom
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "nom", $event.target.value);
      }, _vm.formDataVars]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    attrs: {
      "for": "prenoms"
    }
  }, [_vm._v("Prénom ")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.prenoms,
      expression: "formDataToBeWatched.prenoms"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      readonly: "",
      id: "prenoms"
    },
    domProps: {
      value: _vm.formDataToBeWatched.prenoms
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "prenoms", $event.target.value);
      }, _vm.formDataVars]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    attrs: {
      "for": "indice"
    }
  }, [_vm._v("ID Client")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.indice,
      expression: "formDataToBeWatched.indice"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      readonly: "",
      id: "indice"
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
  }, [_c("label", {
    attrs: {
      "for": "compte_numero"
    }
  }, [_vm._v("Compte N°")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.compte_numero,
      expression: "formDataToBeWatched.compte_numero"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      readonly: "",
      id: "compte_numero"
    },
    domProps: {
      value: _vm.formDataToBeWatched.compte_numero
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "compte_numero", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(0), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.email_client,
      expression: "formDataToBeWatched.email_client"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "email_client"
    },
    domProps: {
      value: _vm.formDataToBeWatched.email_client
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "email_client", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(1), _vm._v(" "), _c("the-mask", {
    staticClass: "form-control",
    attrs: {
      mask: _vm.mask_telephone,
      type: "text",
      id: "telephone"
    },
    model: {
      value: _vm.formDataToBeWatched.telephone,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "telephone", $$v);
      },
      expression: "formDataToBeWatched.telephone"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(2), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.type_piece,
      expression: "formDataToBeWatched.type_piece"
    }],
    staticClass: "form-control",
    attrs: {
      id: "type_piece"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formDataToBeWatched, "type_piece", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "",
      disabled: "",
      selected: ""
    }
  }, [_vm._v("\n                                            --- Sélectionner le type de pièce d'identité ---\n                                        ")]), _vm._v(" "), _c("option", {
    attrs: {
      value: ""
    }
  }), _vm._v(" "), _c("option", {
    attrs: {
      value: "Passport"
    }
  }, [_vm._v("Passport")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "CNI"
    }
  }, [_vm._v("CNI")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "PC"
    }
  }, [_vm._v("PC")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Carte consulaire"
    }
  }, [_vm._v("Carte consulaire")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(3), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.num_piece,
      expression: "formDataToBeWatched.num_piece"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "num_piece"
    },
    domProps: {
      value: _vm.formDataToBeWatched.num_piece
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "num_piece", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(4), _vm._v(" "), _c("date-input", {
    attrs: {
      value: _vm.formDataToBeWatched.date_delivrance_piece,
      id: "date_delivrance_piece"
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(5), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.lieu_delivrance_piece,
      expression: "formDataToBeWatched.lieu_delivrance_piece"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "lieu_delivrance_piece"
    },
    domProps: {
      value: _vm.formDataToBeWatched.lieu_delivrance_piece
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "lieu_delivrance_piece", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(6), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.sexe,
      expression: "formDataToBeWatched.sexe"
    }],
    staticClass: "form-control",
    attrs: {
      id: "sexe"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formDataToBeWatched, "sexe", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "",
      disabled: "",
      selected: ""
    }
  }, [_vm._v("\n                                            --- Sélectionner le genre ---\n                                        ")]), _vm._v(" "), _c("option", {
    attrs: {
      value: ""
    }
  }), _vm._v(" "), _c("option", {
    attrs: {
      value: "Feminin"
    }
  }, [_vm._v("Feminin")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Masculin"
    }
  }, [_vm._v("Masculin")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(7), _vm._v(" "), _c("date-input", {
    attrs: {
      value: _vm.formDataToBeWatched.date_naissance,
      id: "date_naissance"
    },
    on: {
      input: _vm.formDataVars
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(8), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.ville_naissance,
      expression: "formDataToBeWatched.ville_naissance"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "ville_naissance"
    },
    domProps: {
      value: _vm.formDataToBeWatched.ville_naissance
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "ville_naissance", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(9), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.ville_residence,
      expression: "formDataToBeWatched.ville_residence"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "ville_residence"
    },
    domProps: {
      value: _vm.formDataToBeWatched.ville_residence
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "ville_residence", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(10), _vm._v(" "), _c("Multiselect", {
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
      classes: {
        optionPointed: "text-gray-800 bg-gray-100"
      },
      options: _vm.nationnalites
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
    }], null, false, 1681177092),
    model: {
      value: _vm.formDataToBeWatched.nationnalite,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "nationnalite", $$v);
      },
      expression: "formDataToBeWatched.nationnalite"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(11), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.adresse,
      expression: "formDataToBeWatched.adresse"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "adresse"
    },
    domProps: {
      value: _vm.formDataToBeWatched.adresse
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "adresse", $event.target.value);
      }, _vm.handleInput]
    }
  })])])])]) : _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen6 = !_vm.seen6;
      }
    }
  }, [_c("h6", {
    attrs: {
      id: "bref-rappel-des-relations-du-client-avec-la-afg-banque-ci"
    }
  }, [_vm._v("\n                                Informations personnelles\n                                "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])]), _vm._v(" "), _vm.seen2_1 ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen2_1 = !_vm.seen2_1;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "revenu-domicilié-à-la-afg-banque-ci"
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
  }, [_c("thead", [_c("tr", [_vm._m(12), _vm._v(" "), _vm._m(13), _vm._v(" "), _vm.formDataToBeWatched.matrimoniale == "Marié(e)" ? _c("td", {
    staticClass: "th",
    staticStyle: {
      "min-width": "150px"
    }
  }, [_vm._v("Conjoint(e)")]) : _vm._e(), _vm._v(" "), _vm.formDataToBeWatched.matrimoniale == "Marié(e)" ? _c("td", {
    staticClass: "th",
    staticStyle: {
      "min-width": "150px"
    }
  }, [_vm._v("Total")]) : _vm._e(), _vm._v(" "), _vm._m(14), _vm._v(" "), _c("td", {
    staticClass: "th text-center",
    attrs: {
      "data-toggle": "tooltip",
      title: "Source de remboursement",
      "data-placement": "top"
    }
  }, [_vm._v("SR")]), _vm._v(" "), _vm._m(15), _vm._v(" "), _vm._m(16), _vm._v(" "), _vm._m(17), _vm._v(" "), _vm._m(18), _vm._v(" "), _vm._m(19), _vm._v(" "), _vm.formDataToBeWatched.matrimoniale == "Marié(e)" ? _c("td", {
    staticClass: "th",
    staticStyle: {
      "min-width": "100px"
    }
  }, [_vm._v("TQC CONJOINT")]) : _vm._e(), _vm._v(" "), _vm._m(20), _vm._v(" "), _vm.formDataToBeWatched.matrimoniale == "Marié(e)" ? _c("td", {
    staticClass: "th",
    staticStyle: {
      "min-width": "150px"
    }
  }, [_vm._v("QC CONJOINT")]) : _vm._e(), _vm._v(" "), _vm.formDataToBeWatched.matrimoniale !== "Marié(e)" ? _c("td") : _vm._e(), _vm._v(" "), _vm._m(21), _vm._v(" "), _vm._m(22), _vm._v(" "), _c("td", {
    staticClass: "th",
    staticStyle: {
      "min-width": "280px"
    }
  }, [_vm._v("Commentaire")])])]), _vm._v(" "), _c("tbody", [_vm._l(_vm.revenu_domicilie, function (el, ind) {
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
          return _vm.resetValues($event, ind, "revenu_domicilie");
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
      attrs: {
        readonly: !el.checked,
        value: el.montant_salaire
      },
      on: {
        input: function input($event) {
          return _vm.formDataVars2($event, ind, "revenu_domicilie", "montant_salaire");
        }
      }
    }), _vm._v(" "), el.libelle == "Salaire net" && el.checked ? _c("div", {
      staticClass: "mt-1 d-flex align-items-baseline"
    }, [_vm._m(23, true), _vm._v(" "), _c("currency-input2", {
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
      attrs: {
        readonly: !el.checked,
        value: el.montant_conjoint
      },
      on: {
        input: function input($event) {
          return _vm.formDataVars2($event, ind, "revenu_domicilie", "montant_conjoint");
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
        disabled: !el.eligible
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
        }, _vm.handleInput]
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
      attrs: {
        disabled: !el.eligible
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
        }, _vm.handleInput]
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
          return _vm.formDataVars2($event, ind, "revenu_domicilie", "mensualite");
        }
      }
    })], 1), _vm._v(" "), _c("td", [_c("input-group", {
      staticStyle: {
        "min-width": "110px"
      },
      scopedSlots: _vm._u([{
        key: "input",
        fn: function fn() {
          return [_c("currency-input", {
            attrs: {
              disabled: !el.checked,
              readonly: !el.eligible,
              value: el.taux,
              max: 100,
              "float": "",
              percentage: ""
            },
            on: {
              input: function input($event) {
                return _vm.formDataVars2($event, ind, "revenu_domicilie", "taux");
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
          return _vm.formDataVars2($event, ind, "revenu_domicilie", "montant_pondere");
        }
      }
    })], 1), _vm._v(" "), _c("td", [_c("input-group", {
      staticStyle: {
        "min-width": "110px"
      },
      scopedSlots: _vm._u([{
        key: "input",
        fn: function fn() {
          return [_c("currency-input", {
            attrs: {
              disabled: !el.eligible,
              value: el.taux_qc1,
              max: 100,
              "float": "",
              percentage: ""
            },
            on: {
              input: function input($event) {
                return _vm.formDataVars2($event, ind, "revenu_domicilie", "taux_qc1");
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
    })], 1), _vm._v(" "), _c("td", [_c("input-group", {
      staticStyle: {
        "min-width": "110px"
      },
      scopedSlots: _vm._u([{
        key: "input",
        fn: function fn() {
          return [_c("currency-input", {
            attrs: {
              disabled: !el.eligible,
              value: el.taux_qtc_conjoint,
              max: 100,
              "float": "",
              percentage: ""
            },
            on: {
              input: function input($event) {
                return _vm.formDataVars2($event, ind, "revenu_domicilie", "taux_qtc_conjoint");
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
        value: el.montant_qc1,
        readonly: ""
      },
      on: {
        input: function input($event) {
          return _vm.formDataVars2($event, ind, "revenu_domicilie", "montant_qc1");
        }
      }
    })], 1), _vm._v(" "), _vm.formDataToBeWatched.matrimoniale == "Marié(e)" ? _c("td", [_c("currency-input2", {
      attrs: {
        value: el.montant_qc1_conjoint,
        readonly: ""
      },
      on: {
        input: function input($event) {
          return _vm.formDataVars2($event, ind, "revenu_domicilie", "montant_qc1_conjoint");
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
            attrs: {
              disabled: !el.eligible,
              readonly: el.libelle != "Salaire net",
              value: el.taux_qc2,
              max: 100,
              "float": "",
              percentage: ""
            },
            on: {
              input: function input($event) {
                return _vm.formDataVars2($event, ind, "revenu_domicilie", "taux_qc2");
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
          return _vm.formDataVars2($event, ind, "revenu_domicilie", "montant_qc2");
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
  })], 1), _vm._v(" "), _c("td"), _vm._v(" "), _c("td", [_c("currency-input2", {
    attrs: {
      readonly: "",
      value: _vm.formDataToBeWatched.revenu_total_colonne_montant_pondere
    }
  })], 1), _vm._v(" "), _c("td", [_c("input-group", {
    staticStyle: {
      "min-width": "110px"
    },
    scopedSlots: _vm._u([{
      key: "input",
      fn: function fn() {
        return [_c("currency-input2", {
          attrs: {
            readonly: "",
            value: _vm.formDataToBeWatched.revenu_total_colonne_taux_qc1
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
    }], null, false, 3446648742)
  })], 1), _vm._v(" "), _vm.formDataToBeWatched.matrimoniale == "Marié(e)" ? _c("td", [_c("input-group", {
    staticStyle: {
      "min-width": "110px"
    },
    scopedSlots: _vm._u([{
      key: "input",
      fn: function fn() {
        return [_c("currency-input2", {
          attrs: {
            readonly: "",
            value: _vm.formDataToBeWatched.revenu_total_colonne_taux_qc1_conjoint
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
    }], null, false, 2253862221)
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
        return [_c("currency-input2", {
          attrs: {
            readonly: "",
            value: _vm.formDataToBeWatched.revenu_total_colonne_taux_qc2
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
    }], null, false, 3082741285)
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
        _vm.seen2_1 = !_vm.seen2_1;
      }
    }
  }, [_c("h6", {
    attrs: {
      id: "revenu-domicilié-à-la-afg-banque-ci"
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
  })], 1)])]), _vm._v(" "), _vm.seen7 ? _c("div", {
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
  }, [_vm._m(24), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.matrimoniale,
      expression: "formDataToBeWatched.matrimoniale"
    }],
    staticClass: "form-control",
    attrs: {
      id: "matrimoniale"
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
      disabled: "",
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
  }, [_vm._v("Veuf(ve)")])])]), _vm._v(" "), _vm.formDataToBeWatched.matrimoniale == "Marié(e)" ? _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "regime_matrimonial"
    }
  }, [_vm._v("Régime matrimonial")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.regime_matrimonial,
      expression: "formDataToBeWatched.regime_matrimonial"
    }],
    staticClass: "form-select single-select",
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
  }, [_vm._v("Séparation de biens")])])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(25), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.habitation,
      expression: "formDataToBeWatched.habitation"
    }],
    staticClass: "form-control",
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
  }, [_vm._m(26), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.anciennete_adresse,
      expression: "formDataToBeWatched.anciennete_adresse"
    }],
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "month",
      id: "anciennete_adresse"
    },
    domProps: {
      value: _vm.formDataToBeWatched.anciennete_adresse
    },
    on: {
      change: _vm.handleInput,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "anciennete_adresse", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(27), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.nbre_enfant,
      expression: "formDataToBeWatched.nbre_enfant"
    }],
    staticClass: "form-control",
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
  }, [_vm._m(28), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.conjoint.nom,
      expression: "formDataToBeWatched.conjoint.nom"
    }],
    staticClass: "form-control",
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
  }, [_vm._m(29), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.conjoint.prenoms,
      expression: "formDataToBeWatched.conjoint.prenoms"
    }],
    staticClass: "form-control",
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
  }, [_vm._m(30), _vm._v(" "), _c("input", {
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
  }, [_vm._m(31), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.conjoint.adresse,
      expression: "formDataToBeWatched.conjoint.adresse"
    }],
    staticClass: "form-control",
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
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(32), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.conjoint.profession,
      expression: "formDataToBeWatched.conjoint.profession"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "conjoint_profession"
    },
    domProps: {
      value: _vm.formDataToBeWatched.conjoint.profession
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched.conjoint, "profession", $event.target.value);
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
  }, [_c("div", {
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
      id: "revenu-domicilié-à-la-afg-banque-ci"
    }
  }, [_vm._v("\n                                Mouvements\n                                "), _c("chevron-up-icon", {
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
  }, [_vm._m(33), _vm._v(" "), _c("currency-input2", {
    staticClass: "form-control",
    attrs: {
      "default-typing": false,
      id: "mouvements_confies",
      type: "text"
    },
    model: {
      value: _vm.formDataToBeWatched.mouvements_confies,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "mouvements_confies", $$v);
      },
      expression: "formDataToBeWatched.mouvements_confies"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(34), _vm._v(" "), _c("currency-input2", {
    staticClass: "form-control",
    attrs: {
      "default-typing": false,
      id: "mouvements_confies_date",
      type: "text"
    },
    model: {
      value: _vm.formDataToBeWatched.mouvements_confies_date,
      callback: function callback($$v) {
        _vm.$set(_vm.formDataToBeWatched, "mouvements_confies_date", $$v);
      },
      expression: "formDataToBeWatched.mouvements_confies_date"
    }
  })], 1)])])]) : _c("div", {
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
      id: "revenu-domicilié-à-la-afg-banque-ci"
    }
  }, [_vm._v("\n                                Mouvements\n                                "), _c("chevron-down-icon", {
    staticClass: "custom-class",
    staticStyle: {
      "float": "right",
      cursor: "pointer"
    },
    attrs: {
      size: "21"
    }
  })], 1)])]), _vm._v(" "), _vm.seen8 ? _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen8 = !_vm.seen8;
      }
    }
  }, [_c("h6", {
    "class": " subdiv" + this.tb_name,
    attrs: {
      id: "bref-rappel-des-relations-du-client-avec-la-afg-banque-ci"
    }
  }, [_vm._v("\n                                Divers\n                                "), _c("chevron-up-icon", {
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
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "geo_lat"
    }
  }, [_vm._v("Latitude ")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.geo_lat,
      expression: "formDataToBeWatched.geo_lat"
    }],
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "text",
      id: "geo_lat"
    },
    domProps: {
      value: _vm.formDataToBeWatched.geo_lat
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "geo_lat", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "geo_lon"
    }
  }, [_vm._v("Longitude ")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.geo_lon,
      expression: "formDataToBeWatched.geo_lon"
    }],
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "text",
      id: "geo_lon"
    },
    domProps: {
      value: _vm.formDataToBeWatched.geo_lon
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "geo_lon", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(35), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.cotation,
      expression: "formDataToBeWatched.cotation"
    }],
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "text",
      id: "cotation"
    },
    domProps: {
      value: _vm.formDataToBeWatched.cotation
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "cotation", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(36), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.segmentation,
      expression: "formDataToBeWatched.segmentation"
    }],
    staticClass: "form-control",
    attrs: {
      required: "",
      type: "text",
      id: "segmentation"
    },
    domProps: {
      value: _vm.formDataToBeWatched.segmentation
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formDataToBeWatched, "segmentation", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 pl-4"
  }, [_vm._m(37), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formDataToBeWatched.personne_politiquement_expose,
      expression: "formDataToBeWatched.personne_politiquement_expose"
    }],
    staticClass: "form-select single-select",
    attrs: {
      id: "personne_politiquement_expose"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formDataToBeWatched, "personne_politiquement_expose", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
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
  }, [_vm._m(38), _vm._v(" "), _c("div", {
    staticClass: "d-flex position-relative align-items-center"
  }, [_c("Multiselect", {
    attrs: {
      id: "convention_entreprise",
      searchable: true,
      trackBy: "denomination",
      label: "denomination",
      "value-prop": "ent_pub_key",
      classes: {
        optionPointed: "text-gray-800 bg-gray-100"
      },
      options: _vm.convention_entreprises_
    },
    on: {
      change: function change($event) {
        return _vm.changeConvention();
      }
    },
    scopedSlots: _vm._u([{
      key: "option",
      fn: function fn(_ref3) {
        var option = _ref3.option;
        return [_c("p", {
          staticClass: "multiselect-option"
        }, [_vm._v(_vm._s(option.denomination))])];
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
        }, [_vm._v(_vm._s(value.denomination))])];
      }
    }], null, false, 2405702391),
    model: {
      value: _vm.convention_entreprise,
      callback: function callback($$v) {
        _vm.convention_entreprise = $$v;
      },
      expression: "convention_entreprise"
    }
  }), _vm._v(" "), _vm.loadConEntreprise ? _c("span", {
    staticClass: "spinner-border spinner-border spinner-custom-input",
    staticStyle: {
      "margin-right": "17px"
    }
  }) : _vm._e()], 1)])])])]) : _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "relook-header",
    on: {
      click: function click($event) {
        _vm.seen8 = !_vm.seen8;
      }
    }
  }, [_c("h6", {
    attrs: {
      id: "bref-rappel-des-relations-du-client-avec-la-afg-banque-ci"
    }
  }, [_vm._v("\n                                Divers\n                                "), _c("chevron-down-icon", {
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
  }, [_vm._v("\n                            " + _vm._s(_vm.tb_display_name) + " : Fiche d'identification du client\n                        ")]), _vm._v(" "), _c("div", {
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
  }, [_c("span", [_vm._v("\n                                            " + _vm._s(_vm.formDataToBeWatched.notes.length) + "\n                                        ")])])])]) : _vm._e(), _vm._v(" "), _c("chevron-down-icon", {
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
      name: "instruction211a",
      width: 1000,
      resizable: "",
      height: 200
    }
  }, [_c("div", {
    staticClass: "imageM22"
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
    attrs: {
      "for": "email"
    }
  }, [_vm._v("Email "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": "telephone"
    }
  }, [_vm._v("Numero de téléphone "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": "type_piece"
    }
  }, [_vm._v("Type de pièce d'identité "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": "num_piece"
    }
  }, [_vm._v("Le numéro de la pièce d'identité "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": "date_delivrance_piece"
    }
  }, [_vm._v("Date de délivrance "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": "lieu_delivrance_piece"
    }
  }, [_vm._v("Lieu de délivrance "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": "sexe"
    }
  }, [_vm._v("Genre "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": "date_naissance"
    }
  }, [_c("b", [_vm._v("Date de naissance")]), _vm._v(" "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": "ville_naissance"
    }
  }, [_vm._v("Ville de naissance "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": "ville_residence"
    }
  }, [_vm._v("Ville de résidence "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": "nationnalite"
    }
  }, [_vm._v("Nationnalité "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": "adresse"
    }
  }, [_vm._v("Adresse"), _c("span", {
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
  }, [_vm._v("Revenu "), _c("span", {
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
    staticClass: "th"
  }, [_vm._v("Eligible "), _c("span", {
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
  }, [_vm._v("Mensualité "), _c("span", {
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
  }, [_vm._v("Montant pondéré "), _c("span", {
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
      "for": "conjoint_matrimoniale"
    }
  }, [_vm._v("Situation matrimoniale "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": "conjoint_adresse"
    }
  }, [_vm._v("Adresse"), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": "conjoint_profession"
    }
  }, [_vm._v("Profession"), _c("span", {
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
  }, [_vm._v("\n                                        Mouvements confiés(N-1)"), _c("span", {
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
  }, [_vm._v("\n                                        Mouvements confiés(à date)"), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "cotation"
    }
  }, [_vm._v("Cotation "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "segmentation"
    }
  }, [_vm._v("Segmentation "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "personne_politiquement_expose"
    }
  }, [_c("b", [_vm._v("Personne politiquement exposé (PPE)")]), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Employeur"), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/demande_depassement/DA-DER0.vue?vue&type=style&index=0&id=64a34f84&lang=css&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/demande_depassement/DA-DER0.vue?vue&type=style&index=0&id=64a34f84&lang=css&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-64a34f84] {\r\n    font-family: \"Google sans\";\n}\nlabel[data-v-64a34f84] {\r\n    height: 10px;\r\n    font-size: 13px;\n}\ninput[data-v-64a34f84],\r\nselect[data-v-64a34f84],\r\ntextarea[data-v-64a34f84] {\r\n    /* height: 35px; */\r\n    border-color: #34495e;\r\n    color: #57606f;\r\n    font-size: 13px;\r\n    font-weight: bold;\n}\n.th[data-v-64a34f84] {\r\n    padding: 4px;\r\n    padding-bottom: 0px;\n}\n.card-width-height[data-v-64a34f84] {\r\n    width: 100%;\r\n    height: 100%;\n}\n.head[data-v-64a34f84] {\r\n    color: #f1f2f6;\r\n    font-size: 22px;\n}\n.hdc[data-v-64a34f84] {\r\n    background-color: #57606f;\n}\n.relook-header[data-v-64a34f84] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\n.badge-sm[data-v-64a34f84] {\r\n    display: inline-block;\r\n    width: 15px;\r\n    height: 15px;\r\n    background: rgba(255, 0, 0, 0.882);\r\n    color: white;\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    border-radius: 100%;\r\n    position: absolute;\r\n    top: -20%;\r\n    left: 55%;\r\n    text-align: center;\n}\n.imageM22[data-v-64a34f84] {\r\n    background: url(\"/images/capture_cofina/exemple_source_revenus.png\") no-repeat;\r\n    background-position: center;\r\n    background-size: contain;\r\n    width: 1000px;\r\n    height: 200px;\n}\ntd[data-v-64a34f84],\r\np[data-v-64a34f84] {\r\n    font-size: 13px;\n}\n.relook-header[data-v-64a34f84] {\r\n    color: #000;\r\n    background-color: #f4f3f3;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #b6b8bb;\n}\n.width-100[data-v-64a34f84] {\r\n    width: 90%;\n}\n.personne input[data-v-64a34f84] {\r\n    width: 135px;\n}\n._border_right[data-v-64a34f84] {\r\n    border-right: 1px solid;\n}\n.text-red[data-v-64a34f84] {\r\n    color: red;\n}\n.multiselect-option p[data-v-64a34f84] {\r\n    margin: 0 !important;\r\n    padding: 10px !important;\n}\n.vertical-middle[data-v-64a34f84] {\r\n    vertical-align: middle;\n}\ninput[type=\"checkbox\"][data-v-64a34f84] {\r\n    height: 18px;\r\n    width: 20px;\r\n    margin-right: 5px;\n}\n.revenu input[type=\"checkbox\"][data-v-64a34f84],\r\n.engagement input[type=\"checkbox\"][data-v-64a34f84],\r\n.garantie input[type=\"checkbox\"][data-v-64a34f84] {\r\n    height: 26px;\r\n    width: 24px;\r\n    margin-right: 5px;\n}\n.mt-2_5-px[data-v-64a34f84] {\r\n    margin-top: 2.5px;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/demande_depassement/DA-DER0.vue?vue&type=style&index=0&id=64a34f84&lang=css&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/demande_depassement/DA-DER0.vue?vue&type=style&index=0&id=64a34f84&lang=css&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DA_DER0_vue_vue_type_style_index_0_id_64a34f84_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DA-DER0.vue?vue&type=style&index=0&id=64a34f84&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/demande_depassement/DA-DER0.vue?vue&type=style&index=0&id=64a34f84&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DA_DER0_vue_vue_type_style_index_0_id_64a34f84_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DA_DER0_vue_vue_type_style_index_0_id_64a34f84_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/forms/afg/demande_depassement/DA-DER0.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/components/forms/afg/demande_depassement/DA-DER0.vue ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DA_DER0_vue_vue_type_template_id_64a34f84_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DA-DER0.vue?vue&type=template&id=64a34f84&scoped=true */ "./resources/js/components/forms/afg/demande_depassement/DA-DER0.vue?vue&type=template&id=64a34f84&scoped=true");
/* harmony import */ var _DA_DER0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DA-DER0.vue?vue&type=script&lang=js */ "./resources/js/components/forms/afg/demande_depassement/DA-DER0.vue?vue&type=script&lang=js");
/* harmony import */ var _DA_DER0_vue_vue_type_style_index_0_id_64a34f84_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DA-DER0.vue?vue&type=style&index=0&id=64a34f84&lang=css&scoped=true */ "./resources/js/components/forms/afg/demande_depassement/DA-DER0.vue?vue&type=style&index=0&id=64a34f84&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DA_DER0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _DA_DER0_vue_vue_type_template_id_64a34f84_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _DA_DER0_vue_vue_type_template_id_64a34f84_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "64a34f84",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/forms/afg/demande_depassement/DA-DER0.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/forms/afg/demande_depassement/DA-DER0.vue?vue&type=script&lang=js":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/demande_depassement/DA-DER0.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DA_DER0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DA-DER0.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/demande_depassement/DA-DER0.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DA_DER0_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/forms/afg/demande_depassement/DA-DER0.vue?vue&type=style&index=0&id=64a34f84&lang=css&scoped=true":
/*!***********************************************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/demande_depassement/DA-DER0.vue?vue&type=style&index=0&id=64a34f84&lang=css&scoped=true ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DA_DER0_vue_vue_type_style_index_0_id_64a34f84_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DA-DER0.vue?vue&type=style&index=0&id=64a34f84&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/demande_depassement/DA-DER0.vue?vue&type=style&index=0&id=64a34f84&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/forms/afg/demande_depassement/DA-DER0.vue?vue&type=template&id=64a34f84&scoped=true":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/forms/afg/demande_depassement/DA-DER0.vue?vue&type=template&id=64a34f84&scoped=true ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DA_DER0_vue_vue_type_template_id_64a34f84_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DA_DER0_vue_vue_type_template_id_64a34f84_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DA_DER0_vue_vue_type_template_id_64a34f84_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DA-DER0.vue?vue&type=template&id=64a34f84&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/forms/afg/demande_depassement/DA-DER0.vue?vue&type=template&id=64a34f84&scoped=true");


/***/ }),

/***/ "./resources/js/services/afg/getSpecificDoc.js":
/*!*****************************************************!*\
  !*** ./resources/js/services/afg/getSpecificDoc.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _custom_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom.axios */ "./resources/js/services/custom.axios.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

// import ebapis from '../ebapis.service';
var GetSpecificDoc = /*#__PURE__*/function () {
  function GetSpecificDoc() {
    _classCallCheck(this, GetSpecificDoc);
    _defineProperty(this, "authcheckUsr", null);
    _defineProperty(this, "dossier_credit", null);
    _defineProperty(this, "what_tobe_produced", null);
    _defineProperty(this, "$toasted", null);
    _defineProperty(this, "credpub0", null);
    _defineProperty(this, "credpub1", null);
    _defineProperty(this, "cred_pub_key", null);
    _defineProperty(this, "instance_vue", null);
    _defineProperty(this, "tb_", {});
  }
  return _createClass(GetSpecificDoc, [{
    key: "setData",
    value: function () {
      var _setData = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(data) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              this.authcheckUsr = data === null || data === void 0 ? void 0 : data.authcheckUsr;
              this.what_tobe_produced = data === null || data === void 0 ? void 0 : data.what_tobe_produced;
              this.$toasted = data === null || data === void 0 ? void 0 : data.toasted;
              this.instance_vue = data === null || data === void 0 ? void 0 : data.instance_vue;
              this.cred_pub_key = data === null || data === void 0 ? void 0 : data.cred_pub_key;
              _context.next = 7;
              return this.getDossInfo();
            case 7:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function setData(_x) {
        return _setData.apply(this, arguments);
      }
      return setData;
    }()
  }, {
    key: "getDossInfo",
    value: function () {
      var _getDossInfo = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _this = this;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _custom_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(this.instance_vue.ebapisHost + "creditbuilder/api/v1/get-specific-doc/", {
                cred_pub_key: this.cred_pub_key
              }).then(function (res) {
                var _res$data;
                _this.dossier_credit = res === null || res === void 0 || (_res$data = res.data) === null || _res$data === void 0 ? void 0 : _res$data.dossier;
              })["catch"](function (err) {
                console.error(err);
              });
            case 2:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function getDossInfo() {
        return _getDossInfo.apply(this, arguments);
      }
      return getDossInfo;
    }()
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new GetSpecificDoc());

/***/ })

}]);