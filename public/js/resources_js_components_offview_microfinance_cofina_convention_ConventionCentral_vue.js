(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_offview_microfinance_cofina_convention_ConventionCentral_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/convention/ConventionCentral.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/convention/ConventionCentral.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Forms_AvisClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Forms/AvisClient */ "./resources/js/components/offview/microfinance/cofina/convention/Forms/AvisClient.vue");
/* harmony import */ var _services_ebapis_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../services/ebapis.service */ "./resources/js/services/ebapis.service.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var qrcode_generator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! qrcode-generator */ "./node_modules/qrcode-generator/qrcode.js");
/* harmony import */ var qrcode_generator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(qrcode_generator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Utils */ "./resources/js/components/offview/microfinance/cofina/convention/Utils.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    dossier_credit: Object,
    redaction_conventions: Array,
    convention_id: String,
    type_convention: String,
    isLoading: Boolean,
    edit_mode: Boolean,
    templateName: String,
    conventionName: String,
    contractor: Object,
    contractId: String,
    entityInfos: Object
  },
  components: {
    AvisClient: _Forms_AvisClient__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  created: function created() {},
  data: function data() {
    return {
      build_off: false,
      mask_telephone: "",
      ebapisHost: _services_ebapis_service__WEBPACK_IMPORTED_MODULE_1__["default"].host,
      fonction: "",
      debounce: null,
      on_saving: false,
      first_time: false,
      frais_credits: [],
      res: 0,
      taxe: 0,
      check_fields: {},
      formDataToBeWatched: {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__["default"])(),
        type_convention: "",
        check_fields: {}
      },
      local_edit_mode: true,
      local_close_edit_mode: true,
      list_tranches: [{
        libelle: "Mensuelle",
        val: "Mensuelle",
        type: "Mensualité"
      }, {
        libelle: "Trimestrielle",
        val: "Trimestrielle",
        type: "Remboursement trimestriel"
      }, {
        libelle: "Semestrielle",
        val: "Semestrielle",
        type: "Remboursement semestriel"
      }, {
        libelle: "Annuel",
        val: "Annuel",
        type: "Annuité"
      }, {
        libelle: "In fine",
        val: "In fine",
        type: "Remboursement unique"
      }, {
        libelle: "Bimensuelle",
        val: "Bimensuelle",
        type: "Remoursement bimensuel"
      }, {
        libelle: "Bimestrielle",
        val: "Bimestrielle",
        type: "Remboursement bimestriel"
      }, {
        libelle: "Plusieurs tranches",
        val: "Plusieurs tranches",
        type: "Remboursement par tranche"
      }],
      banque: {
        denomination: "NSIA Banque Côte d'Ivoire",
        abrege: "NSIA Banque CI",
        forme_juridique: "société anonyme avec Conseil d’Administration",
        capital: "24734572000",
        monnaie: "FCFA",
        adresse: "C-22 Rue Goyavier, Avenue Jean Mermoz, Cocody",
        etablissement_social: "Abidjan Plateau 8-10 Avenue Joseph ANOMA",
        ville: "Abidjan",
        pays: "Côte d'Ivoire",
        adresse_postal: "01 BP 1274 Abidjan 01",
        telephone: "27 20 20 07 20",
        fax: "27 20 20 07 00",
        rccm: "CI-ABJ-01-1981-B14-52039",
        numero_inscription_banque: "A 0042 Q",
        agreement: "1648 du 30/12/1980",
        ncc: "0100388U",
        nom_prenom_dg: "Léonce YACE",
        civilite_dg: "Monsieur",
        date_deliberation_ca: "28 Octobre 2022"
      },
      template: null,
      wichContract: null,
      targetContracts: ['CAUTIONNEMENT-CONV']
    };
  },
  mounted: function mounted() {
    var _this = this;
    EventBus.$on("build-off-printable", function (data) {
      // console.log("data build-off-printable", data);

      _this.buildOffPrintable();
    });
  },
  computed: {
    check_fields_: function check_fields_() {
      var pass = true;
      for (var _i = 0, _Object$entries = Object.entries(this.check_fields); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          key = _Object$entries$_i[0],
          value = _Object$entries$_i[1];
        if (value != true) {
          pass = false;
        }
      }
      return pass;
    }
  },
  methods: {
    StringToNum: function StringToNum(str) {
      if (typeof str !== 'string') return Math.ceil(str);
      return Math.ceil(str.split("").filter(function (num) {
        return num.trim();
      }).join(""));
    },
    updateAvisCLI: function updateAvisCLI(evt) {
      this.formDataToBeWatched[evt['key']] = evt['value'];
    },
    updateCheckAvisCLI: function updateCheckAvisCLI(evt) {
      // console.log("updateCheckAvisCLI", evt);

      this.check_fields[evt['key']] = evt['value'];
      this.handleCheckField(evt['value'], evt['key']);
    },
    formatDate: function formatDate(date) {
      if (['', null, undefined].includes(date)) return '';
      var options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
      };
      return new Date(date).toLocaleDateString('fr', options);
    },
    formatAmount: function formatAmount(x) {
      var _x$toString;
      return x === null || x === void 0 || (_x$toString = x.toString()) === null || _x$toString === void 0 ? void 0 : _x$toString.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
    loadData: function loadData(redaction_conventions) {
      var _this2 = this;
      if (!['', null, undefined].includes(redaction_conventions)) {
        var found = redaction_conventions.find(function (el) {
          return el.contractId == _this2.contractId && el.type_convention == _this2.type_convention;
        });
        if (found) {
          this.formDataToBeWatched = found;
          if (!['', null, undefined].includes(found === null || found === void 0 ? void 0 : found.check_fields)) {
            var _found$check_fields;
            this.check_fields = (_found$check_fields = found['check_fields']) !== null && _found$check_fields !== void 0 ? _found$check_fields : {};
          }
        } else {
          this.handleInput();
        }
        this.loadRetrieved();
      }
    },
    getLabelTypePiece: function getLabelTypePiece(type) {
      if (type == "Passport") {
        return "du Passport";
      }
      if (type == "CNI") {
        return "de la Carte Nationale d’Identité";
      }
      if (type == "PC") {
        return "du Permis de Conduire";
      }
      if (type == "Carte consulaire") {
        return "de la Carte consulaire";
      }
    },
    getMinOrMajByTbb: function getMinOrMajByTbb(tbb, taux) {
      var alpha = this.convertInt(tbb) - this.convertInt(taux);
      alpha = alpha.toFixed(2);
      if (alpha > 0) {
        return "majoré de " + alpha + ',';
      } else if (alpha < 0) {
        return "minoré de " + alpha + ',';
      }
      return "";
    },
    setEditMode: function setEditMode() {
      var _this3 = this;
      this.local_edit_mode = false;
      if (this.on_saving == false) {
        this.$emit("edit-mode", {
          convention_id: this.formDataToBeWatched.id
        });
        this.local_edit_mode = true;
      }
      setTimeout(function () {
        if (_this3.edit_mode != true) {
          _this3.buildOffPrintable();
        } else {
          _this3.build_off = false;
        }
      }, 500);
    },
    closeEditMode: function closeEditMode() {
      this.local_close_edit_mode = false;
      if (this.on_saving == false) {
        this.$emit("edit-mode", {
          close: true
        });
        this.local_close_edit_mode = true;
      }
    },
    formDataVars: function formDataVars(event) {
      // console.log(event);
      this.formDataToBeWatched[event[0]] = event[1];
      this.handleInput();
    },
    handleInput: function handleInput() {
      this.formDataToBeWatched['check_fields'] = this.check_fields;
    },
    handleCheckField: function handleCheckField(check, field) {
      // this.check_fields[field] = check;
      // console.log("on click", this.check_fields);
      // console.log('Hello')
      this.formDataToBeWatched['check_fields'] = this.check_fields;
      // this.handleInput()
    },
    MycheckField: function MycheckField(field) {
      var _this$check_fields$fi;
      return (_this$check_fields$fi = this.check_fields[field]) !== null && _this$check_fields$fi !== void 0 ? _this$check_fields$fi : false;
    },
    determineMontantApprouve: function determineMontantApprouve() {
      var _this$dossier_credit;
      var dossier = (_this$dossier_credit = this.dossier_credit) !== null && _this$dossier_credit !== void 0 ? _this$dossier_credit : {};
      var caract_inter_pret = dossier === null || dossier === void 0 ? void 0 : dossier.caract_inter_pret;
      var latestAmount = 0;
      var latetstDuree = 0;
      if (caract_inter_pret != null) {
        var _dossier$final_outcom;
        var finalOutcomeUserRole = dossier === null || dossier === void 0 || (_dossier$final_outcom = dossier.final_outcome) === null || _dossier$final_outcom === void 0 ? void 0 : _dossier$final_outcom.giver_role_sigle;
        var latestObj = caract_inter_pret.find(function (el) {
          return el.role_sigle == finalOutcomeUserRole;
        });
        latestAmount = latestObj === null || latestObj === void 0 ? void 0 : latestObj['montant_pret_' + finalOutcomeUserRole];
        latetstDuree = latestObj === null || latestObj === void 0 ? void 0 : latestObj.duree_pret;
        if (!latestAmount) {
          var _caract_inter_pret$at, _caract_inter_pret$at2, _caract_inter_pret$at3;
          finalOutcomeUserRole = (_caract_inter_pret$at = caract_inter_pret.at(-1)) === null || _caract_inter_pret$at === void 0 ? void 0 : _caract_inter_pret$at.role_sigle;
          latestAmount = (_caract_inter_pret$at2 = caract_inter_pret.at(-1)) === null || _caract_inter_pret$at2 === void 0 ? void 0 : _caract_inter_pret$at2['montant_pret_' + finalOutcomeUserRole];
          latetstDuree = (_caract_inter_pret$at3 = caract_inter_pret.at(-1)) === null || _caract_inter_pret$at3 === void 0 ? void 0 : _caract_inter_pret$at3['duree_pret'];
        }
      }
      return {
        montantDef: latestAmount,
        dureeDef: latetstDuree
      };
    },
    loadRetrieved: function loadRetrieved() {
      var _this$dossier_credit2, _this$formDataToBeWat, _this$type_convention;
      var dossier = (_this$dossier_credit2 = this.dossier_credit) !== null && _this$dossier_credit2 !== void 0 ? _this$dossier_credit2 : {};
      if (dossier["cred_pub_tb_10009"] != undefined) {
        var cred_pub_tb_10009 = dossier["cred_pub_tb_10009"];
        if (cred_pub_tb_10009) {
          var _cred_pub_tb_10009$fr;
          this.frais_credits = (_cred_pub_tb_10009$fr = cred_pub_tb_10009 === null || cred_pub_tb_10009 === void 0 ? void 0 : cred_pub_tb_10009.frais_credits) !== null && _cred_pub_tb_10009$fr !== void 0 ? _cred_pub_tb_10009$fr : [];
        }
      }
      if (dossier["caf_recorded_file"] != undefined) {
        var caf_recorded_file = dossier["caf_recorded_file"];
        if (caf_recorded_file.indicatif != undefined) {
          this.mask_telephone = "+".concat(caf_recorded_file.indicatif, " ## ## ### ###");
          this.formDataToBeWatched.indicatif_telephone = "+".concat(caf_recorded_file.indicatif);
        }
      }
      this.fonction = (_this$formDataToBeWat = this.formDataToBeWatched.profession) !== null && _this$formDataToBeWat !== void 0 ? _this$formDataToBeWat : "";
      var tbArray = this.determineCredPubTablesFromDosCred(dossier);
      if (this.first_time) return;
      this.first_time = true;
      this.formDataToBeWatched.type_convention = (_this$type_convention = this.type_convention) !== null && _this$type_convention !== void 0 ? _this$type_convention : "";
      if (!['', null, undefined].includes(tbArray[0])) {
        var _dossier$cred3$foncti, _dossier$cred, _dossier$cred3$foncti2, _dossier$cred2;
        var cred1 = tbArray[1];
        var cred2 = tbArray[3];
        var cred3 = tbArray[5];

        // this.formDataToBeWatched.expose = dossier?.[cred1]?.objet_du_pret ?? ""
        // this.formDataToBeWatched.compte_numero = dossier?.[cred2]?.compte_numero ?? ""
        // this.formDataToBeWatched.emprunteur = dossier?.[cred1]?.denomination_client ?? ""

        this.fonction = (_dossier$cred3$foncti = dossier === null || dossier === void 0 || (_dossier$cred = dossier[cred3]) === null || _dossier$cred === void 0 ? void 0 : _dossier$cred.fonction) !== null && _dossier$cred3$foncti !== void 0 ? _dossier$cred3$foncti : "";
        this.formDataToBeWatched.profession = (_dossier$cred3$foncti2 = dossier === null || dossier === void 0 || (_dossier$cred2 = dossier[cred3]) === null || _dossier$cred2 === void 0 ? void 0 : _dossier$cred2.fonction) !== null && _dossier$cred3$foncti2 !== void 0 ? _dossier$cred3$foncti2 : "";

        // this.formDataToBeWatched.date_naissance = dossier?.[cred2]?.date_naissance ?? ""
        // this.formDataToBeWatched.ville_naissance = dossier?.[cred2]?.ville_naissance ?? ""
        // this.formDataToBeWatched.ville_residence = dossier?.[cred2]?.ville_residence ?? ""
        // this.formDataToBeWatched.telephone = dossier?.[cred2]?.telephone ?? ""
        // this.formDataToBeWatched.type_piece = dossier?.[cred2]?.type_piece ?? ""
        // this.formDataToBeWatched.num_piece = dossier?.[cred2]?.num_piece ?? ""
        // this.formDataToBeWatched.date_delivrance_piece = dossier?.[cred2]?.date_delivrance_piece ?? ""
        // this.formDataToBeWatched.date_fin_piece = dossier?.[cred2]?.date_fin_piece ?? ""
        // this.formDataToBeWatched.lieu_delivrance_piece = dossier?.[cred2]?.lieu_delivrance_piece ?? ""

        // this.formDataToBeWatched.taux = dossier?.[cred1]?.taux ?? 0
        // this.formDataToBeWatched.type_credit = dossier?.[cred1]?.type_credit ?? ""
        // this.formDataToBeWatched.mode_tranche = dossier?.[cred1]?.mode_paiement_demande ?? ""
        // this.formDataToBeWatched.mode_paiement_demande = dossier?.[cred1]?.mode_paiement_demande ?? ""
        // this.formDataToBeWatched.montant_approuve = this.determineMontantApprouve()?.montantDef ?? 0
        // this.formDataToBeWatched.duree_credit = this.determineMontantApprouve()?.dureeDef ?? 0
      }
    },
    send2Backend: function send2Backend(newVal) {
      var _this4 = this;
      this.on_saving = true;
      this.$emit("autosaving");
      this.$axios.post(this.ebapisHost + "creditbuilder/api/v1/redaction-convention/", {
        cred_pub_key: this.dossier_credit['cred_pub_key'],
        filledData: newVal
      }).then(function (response) {
        var _response$data$data, _response$data;
        _this4.on_saving = false;
        _this4.$emit("autosaving");
        if (_this4.local_edit_mode == false) {
          _this4.$emit("edit-mode", {
            convention_id: _this4.formDataToBeWatched.id
          });
          _this4.local_edit_mode = true;
        }
        if (_this4.local_close_edit_mode == false) {
          _this4.$emit("edit-mode", {
            close: true
          });
          _this4.local_close_edit_mode = true;
        }
        EventBus.$emit('async-with-contractTable', (_response$data$data = response === null || response === void 0 || (_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.data) !== null && _response$data$data !== void 0 ? _response$data$data : null);
      })["catch"](function (error) {
        _this4.$Progress.finish();
        console.log(error);
      });
    },
    // lancer l'upload auto de la convention
    exportToPDF: function exportToPDF(data) {
      EventBus.$emit("export-pdf", {
        ref: this.$refs.contentToPdf,
        download: data
      });
    },
    // valider ou non une section
    checkParagraphs: function checkParagraphs(par, check) {
      var _keys,
        _this5 = this;
      //    1 . récupérer les clés de la section
      var keys = par.filter(function (el) {
        return el.type == "editable";
      }).map(function (el) {
        return el.key;
      });
      keys = (_keys = keys).concat.apply(_keys, _toConsumableArray(par.filter(function (el) {
        return el.type == "editablelist" || el.type == "block_at_right";
      }).map(function (el) {
        return el.keys;
      })));

      //    2. mettre a jour la section
      this.check_fields = _objectSpread({}, this.check_fields);
      keys.forEach(function (key) {
        _this5.check_fields[key] = check;
      });
      // console.log(typeof this.check_fields , this.check_fields);
      //    3. mettre a jour le formulaire
      this.formDataToBeWatched['check_fields'] = _objectSpread({}, this.check_fields);
    },
    isSectionValid: function isSectionValid(par) {
      var _this6 = this;
      var keys = par.filter(function (el) {
        return el.type == "editable";
      });
      var listKeys = par.filter(function (el) {
        return el.type == "editablelist" || el.type == "block_at_right";
      });
      listKeys.forEach(function (el) {
        for (var index = 0; index < el.keys.length; index++) {
          var element = el.keys[index];
          keys.push({
            key: element
          });
        }
      });
      if (keys.length == 0) {
        return null;
      } else {
        return keys.every(function (el) {
          return _this6.check_fields[el.key];
        });
      }
    },
    buildOffPrintable: function buildOffPrintable() {
      var _arguments = arguments,
        _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var retryCount, targetElement, elements, printableContainer, PAGE_WIDTH, PAGE_HEIGHT, MARGIN, PADDING, AVAILABLE_HEIGHT, currentPage, currentHeight, qrCode;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              retryCount = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : 0;
              _this7.build_off = false;
              targetElement = _this7.$refs.contentToCapture;
              if (targetElement) {
                _context.next = 13;
                break;
              }
              if (!(retryCount < 3)) {
                _context.next = 11;
                break;
              }
              console.warn("\u26A0\uFE0F Tentative ".concat(retryCount + 1, " : targetElement introuvable. Nouvelle tentative dans 500ms..."));
              _context.next = 8;
              return new Promise(function (resolve) {
                return setTimeout(resolve, 500);
              });
            case 8:
              return _context.abrupt("return", _this7.buildOffPrintable(retryCount + 1));
            case 11:
              console.error("❌ Échec : targetElement est toujours indisponible après plusieurs tentatives.");
              return _context.abrupt("return");
            case 13:
              targetElement.querySelectorAll("br").forEach(function (br) {
                var div = document.createElement("div");
                div.style.height = "10px";
                div.style.display = "block";
                br.replaceWith(div);
              });
              elements = Array.from(targetElement.children);
              printableContainer = document.getElementById("printable");
              printableContainer.innerHTML = "";
              PAGE_WIDTH = 794;
              PAGE_HEIGHT = 1122;
              MARGIN = 50;
              PADDING = 40;
              AVAILABLE_HEIGHT = PAGE_HEIGHT - MARGIN * 2 - PADDING * 2;
              currentPage = document.createElement("div");
              currentPage.classList.add("print-page");
              currentPage.style.width = "".concat(PAGE_WIDTH, "px");
              currentPage.style.height = "".concat(PAGE_HEIGHT, "px");
              currentPage.style.margin = "".concat(MARGIN, "px auto");
              currentPage.style.padding = "".concat(PADDING, "px");
              currentPage.style.boxSizing = "border-box";
              currentPage.style.border = "1px solid #ddd";
              currentPage.style.background = "white";
              currentPage.style.position = "relative";
              currentHeight = PADDING;
              elements.forEach(function (el, index) {
                var clonedElement = el.cloneNode(true);

                // Vérifier la hauteur de l'élément
                printableContainer.appendChild(clonedElement);
                var elementHeight = clonedElement.offsetHeight;
                printableContainer.removeChild(clonedElement);
                var hasJumpClass = Array.from(clonedElement.children).some(function (child) {
                  return child.className.includes("jump");
                });
                // console.log(hasJumpClass);

                var p = 1;

                // console.log("new height", currentHeight + elementHeight);
                // console.log("page height", AVAILABLE_HEIGHT * 0.85);

                if (currentHeight + elementHeight > AVAILABLE_HEIGHT * 0.8 || hasJumpClass) {
                  printableContainer.appendChild(currentPage);
                  // p++
                  // console.log("page",p);
                  // Nouvelle page
                  currentPage = document.createElement("div");
                  currentPage.classList.add("print-page");
                  currentPage.style.width = "".concat(PAGE_WIDTH, "px");
                  currentPage.style.height = "".concat(PAGE_HEIGHT, "px");
                  currentPage.style.margin = "".concat(MARGIN, "px auto");
                  currentPage.style.padding = "".concat(PADDING, "px");
                  currentPage.style.boxSizing = "border-box";
                  currentPage.style.border = "1px solid #ddd";
                  currentPage.style.background = "white";
                  currentPage.style.position = "relative";
                  currentHeight = PADDING;
                }
                currentPage.appendChild(clonedElement);
                currentHeight += elementHeight;
              });

              // Ajouter le QR Code uniquement sur la dernière page
              if (currentPage.children.length > 0) {
                currentPage.style.paddingBottom = "".concat(PADDING * 4 + 10, "px");
                qrCode = _this7.generateQRCode(150);
                qrCode.style.position = "absolute";
                qrCode.style.right = "".concat(PADDING / 2, "px");
                qrCode.style.bottom = "".concat(PADDING / 2, "px");

                // Ajouter le QR code après tous les éléments
                currentPage.appendChild(qrCode);
                printableContainer.appendChild(currentPage);
              }
              _this7.build_off = true;
            case 36:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    encryptData: function encryptData(data, secretKey) {
      return crypto_js__WEBPACK_IMPORTED_MODULE_3___default().AES.encrypt(JSON.stringify(data), secretKey).toString();
    },
    generateQRCode: function generateQRCode() {
      var _this$dossier_credit3, _this$dossier_credit4, _this$authenticatedUs, _this$authenticatedUs2, _this$authenticatedUs3, _this$dossier_credit$, _this$dossier_credit5, _this$dossier_credit6;
      var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 150;
      var MIX_APP_KEY = "base64:gdjlPSs3+sKaDi+/SNwOI9pjIE/c9dlYM78gSikIAjY=";
      var secretKey = MIX_APP_KEY.replace('base64:', '');
      // const secretKey = "maCléSecrète123";

      // construction de data
      var payload = {
        num_doss: (_this$dossier_credit3 = this.dossier_credit) === null || _this$dossier_credit3 === void 0 ? void 0 : _this$dossier_credit3.numero_dossier,
        cred_pub_key: (_this$dossier_credit4 = this.dossier_credit) === null || _this$dossier_credit4 === void 0 ? void 0 : _this$dossier_credit4.cred_pub_key,
        user: {
          name: (_this$authenticatedUs = this.authenticatedUser) === null || _this$authenticatedUs === void 0 ? void 0 : _this$authenticatedUs.name,
          // user_id:this.authenticatedUser?.user_id,
          role: (_this$authenticatedUs2 = this.authenticatedUser) === null || _this$authenticatedUs2 === void 0 ? void 0 : _this$authenticatedUs2.role[0].display_name,
          email: (_this$authenticatedUs3 = this.authenticatedUser) === null || _this$authenticatedUs3 === void 0 ? void 0 : _this$authenticatedUs3.email
        },
        client: (_this$dossier_credit$ = (_this$dossier_credit5 = this.dossier_credit) === null || _this$dossier_credit5 === void 0 || (_this$dossier_credit5 = _this$dossier_credit5.caf_recorded_file) === null || _this$dossier_credit5 === void 0 ? void 0 : _this$dossier_credit5.client.matcli) !== null && _this$dossier_credit$ !== void 0 ? _this$dossier_credit$ : (_this$dossier_credit6 = this.dossier_credit) === null || _this$dossier_credit6 === void 0 || (_this$dossier_credit6 = _this$dossier_credit6.doss_central_file_recorder) === null || _this$dossier_credit6 === void 0 ? void 0 : _this$dossier_credit6.client.matcli
      };

      // Chiffrer les données avec CryptoJS
      var encryptedData = this.encryptData(payload, secretKey);
      // Générer le QR code
      var qr = qrcode_generator__WEBPACK_IMPORTED_MODULE_2___default()(0, 'L');
      qr.addData(encryptedData);
      qr.make();
      var qrImg = document.createElement("img");
      qrImg.src = qr.createDataURL();
      qrImg.style.width = "".concat(size, "px");
      qrImg.style.height = "".concat(size, "px");
      qrImg.style.position = "absolute";
      // qrImg.style.top = "20px";
      // qrImg.style.right = "20px";
      // qrImg.style.top = "50%";
      qrImg.style.left = "50%";
      qrImg.style.transform = "translate(-50%, -50%)";
      return qrImg;
    }
  },
  beforeDestroy: function beforeDestroy() {
    EventBus.$off('build-off-printable');
    EventBus.$off('generate-convention-progress');
  },
  watch: {
    formDataToBeWatched: {
      handler: function handler(newVal, oldVal) {
        var _this8 = this;
        this.on_saving = true;
        clearTimeout(this.debounce);
        this.debounce = setTimeout(function () {
          _this8.send2Backend(newVal, oldVal);
        }, 3000);
      },
      deep: true,
      immediate: true
    },
    redaction_conventions: {
      handler: function handler(newVal) {
        this.loadData(newVal);
      },
      deep: true,
      immediate: true
    },
    templateName: {
      handler: function handler(newVal, oldVal) {
        var _this9 = this;
        // console.log({ newVal })
        this.wichContract = newVal;
        __webpack_require__("./resources/js/components/offview/microfinance/cofina/convention/cofina lazy recursive ^\\.\\/.*\\.js$")("./".concat(newVal, ".js")).then(function (module) {
          var _this9$dossier_credit, _this9$template;
          _this9.template = module["default"];
          var default_values = JSON.parse(JSON.stringify(_this9.formDataToBeWatched));
          var tb_arrays = _this9.determineCredPubTables((_this9$dossier_credit = _this9.dossier_credit) === null || _this9$dossier_credit === void 0 ? void 0 : _this9$dossier_credit.applied_templ_name, _this9.dossier_credit);

          // console.log("paragraphs",  this.template?.paragraphs)
          var items = (_this9$template = _this9.template) === null || _this9$template === void 0 ? void 0 : _this9$template.paragraphs.flatMap(function (item) {
            return item;
          });
          items.forEach(function (item) {
            // if (item.type == 'editable') {
            //     key_to_check[item.key] = null
            // }

            //console.log("passe ici " , item)
            if (item !== null && item !== void 0 && item.hasOwnProperty('hasDefault') && item !== null && item !== void 0 && item.hasOwnProperty('defaultV')) {
              // console.log("item==> " , item)
              if (!(default_values !== null && default_values !== void 0 && default_values[item.key])) {
                var itemValue = (0,_Utils__WEBPACK_IMPORTED_MODULE_4__.GetDefaultValue)(_this9.dossier_credit, item.defaultV, tb_arrays, {
                  contractor: _this9.contractor,
                  entityInfos: _this9.entityInfos
                });
                default_values[item.key] = itemValue;
                default_values["contractor"] = _this9.contractor;
                default_values['contractId'] = _this9.contractId;
                // console.log("itemValue " , itemValue)
              }
            }
          });
          _this9.formDataToBeWatched = default_values;

          // this.check_fields = key_to_check
        });
      },
      deep: true,
      immediate: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/convention/Forms/AvisClient.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/convention/Forms/AvisClient.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "AvisClient",
  props: {
    onView: Boolean,
    FormKey: String,
    isCheck: Boolean,
    default_value: String
    // templateName: String,
    // conventionName: String
  },
  components: {},
  created: function created() {},
  data: function data() {
    return {
      type_id: "",
      localCheck: this.isCheck
    };
  },
  computed: {},
  beforeDestroy: function beforeDestroy() {},
  methods: {
    onUpdate: function onUpdate(val) {
      this.$emit('OnUpdate', {
        "key": this.FormKey,
        "value": val
      });
    },
    updateCheckAvisCLI: function updateCheckAvisCLI(val) {
      console.log("updateCheckAvisCLI enfant", val);
      this.$emit('onUpdateCheck', {
        "key": this.FormKey,
        "value": val
      });
    }
  },
  watch: {
    isCheck: function isCheck(newVal) {
      this.localCheck = newVal; // Update when prop changes
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/convention/ConventionCentral.vue?vue&type=template&id=330ec840&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/convention/ConventionCentral.vue?vue&type=template&id=330ec840&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
function _typeof(o){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o;}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o;},_typeof(o);}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable;})),t.push.apply(t,o);}return t;}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach(function(r){_defineProperty(e,r,t[r]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r));});}return e;}function _defineProperty(e,r,t){return(r=_toPropertyKey(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e;}function _toPropertyKey(t){var i=_toPrimitive(t,"string");return"symbol"==_typeof(i)?i:i+"";}function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return("string"===r?String:Number)(t);}var render=function render(){var _vm$template;var _vm=this,_c=_vm._self._c;return _c("div",[_vm.isLoading?_c("div",{staticClass:"card-body"},[_vm._m(0)]):[_c("div",{staticClass:"p-5 position-relative",staticStyle:{width:"845px",margin:"0 auto",border:"1px solid #c6c6c6","background-color":"#ffffff","text-align":"justify"}},[_c("div",{staticClass:"position-absolute delete-element","class":{onAutoSave:_vm.on_saving},staticStyle:{top:"10px",right:"0"}},[_vm.edit_mode?_c("span",{staticClass:"mx-2",staticStyle:{"font-size":"0.9rem"},attrs:{role:"button"},on:{click:_vm.setEditMode}},[_c("i",{staticClass:"icofont-pencil",attrs:{title:"Visualiser la convention"}}),_vm._v("\n                    Visualiser la convention\n                ")]):_c("span",{staticClass:"mx-2",staticStyle:{"font-size":"0.9rem"},attrs:{role:"button"},on:{click:_vm.setEditMode}},[_c("i",{staticClass:"icofont-paperclip",attrs:{title:"Modifier la convention"}}),_vm._v("Modifier la convention")]),_vm._v(" "),_vm.check_fields_&&!_vm.edit_mode?_c("span",{staticClass:"mx-2",staticStyle:{"font-size":"0.9rem"},attrs:{role:"button"},on:{click:function click($event){return _vm.exportToPDF(false);}}},[_c("i",{staticClass:"icofont-upload-alt",attrs:{title:"Uploader le fichier"}}),_vm._v("Uploader le fichier")]):_vm._e(),_vm._v(" "),_vm.check_fields_&&!_vm.edit_mode?_c("span",{staticClass:"mx-2",staticStyle:{"font-size":"0.9rem"},attrs:{role:"button"},on:{click:function click($event){return _vm.exportToPDF(true);}}},[_c("i",{staticClass:"icofont-download",attrs:{title:"Télécharger le fichier"}}),_vm._v("Télécharger le fichier")]):_vm._e(),_vm._v(" "),_c("span",{staticClass:"mx-2",staticStyle:{"font-size":"0.9rem","margin-right":"50px!important"},attrs:{role:"button"},on:{click:_vm.closeEditMode}},[_c("i",{staticClass:"icofont-close",attrs:{title:"Fermer l'édition"}}),_vm._v("Fermer l'édition")])]),_vm._v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:!_vm.build_off,expression:"!build_off"}],ref:"contentToCapture",attrs:{id:"contentToCapture"}},[_c("div",{staticStyle:{padding:"15px","text-transform":"uppercase",border:"1px solid #2d5489",background:"#d0cece","text-align":"center"}},[_c("b",[_vm._v(" "+_vm._s(_vm.conventionName))])]),_c("br"),_vm._v(" "),_vm.template==null?_c("div",{staticClass:"card-body"},[_vm._m(1)]):_vm._l((_vm$template=_vm.template)===null||_vm$template===void 0?void 0:_vm$template.paragraphs,function(paragraph,index){return _c("div",{key:index,staticClass:"paragraph"},[_vm.edit_mode?_c("div",{staticClass:"valid-section",staticStyle:{position:"absolute",right:"-253px",cursor:"pointer"}},[_vm.isSectionValid(paragraph)==false?_c("span",{staticStyle:{"font-size":"1.2em",color:"red"},on:{click:function click($event){return _vm.checkParagraphs(paragraph,true);}}},[_c("i",{staticClass:"icofont-close-circled"}),_vm._v(" Valider\n                                la section")]):_vm.isSectionValid(paragraph)==true?_c("span",{staticStyle:{"font-size":"1.2em",color:"green"},on:{click:function click($event){return _vm.checkParagraphs(paragraph,false);}}},[_c("i",{staticClass:"icofont-check-circled"}),_vm._v("\n                                Editer la section")]):_vm._e()]):_vm._e(),_vm._v(" "),_vm._l(paragraph,function(item,i){return[item.type==="text"?[_c("span",{key:i+"-"+index,style:_objectSpread({"text-align":item===null||item===void 0?void 0:item.position,display:item===null||item===void 0?void 0:item.display,width:item===null||item===void 0?void 0:item.width},item===null||item===void 0?void 0:item.style)},[_vm._v("\n                                    "+_vm._s(item.content)+"\n                                ")])]:item.type==="bold"?[_c("span",{key:i+"-"+index,staticClass:"fw-bold"},[_vm._v("\n                                    "+_vm._s(item.content)+"\n                                ")])]:item.type==="underline"?[_c("span",{key:i+"-"+index,staticClass:"fw-bold",staticStyle:{"text-decoration":"underline"},style:item===null||item===void 0?void 0:item.style},[_vm._v("\n                                    "+_vm._s(item.content)+"\n                                ")])]:item.type==="right"?[_c("span",{key:i+"-"+index,staticStyle:{"text-align":"right",display:"block"}},[_vm._v("\n                                    "+_vm._s(item.content)+"\n                                ")])]:item.type==="right_block"?[_c("div",{key:i+"-"+index,staticStyle:{"text-align":"right"}},[_vm._l(item.content,function(line,lineIndex){return[line.type==="text"?_c("span",{key:i+"-"+index+"-"+lineIndex},[_vm._v("\n                              "+_vm._s(line.content)+"\n                              ")]):line.type==="bold"?_c("span",{key:i+"-"+index+"-"+lineIndex},[_c("b",[_vm._v(_vm._s(line.content))])]):line.type==="editable"?_c("span",{key:i+"-"+index+"-"+lineIndex},[!_vm.edit_mode?_c("span",{key:i+"-"+lineIndex},[line.inputType==="date"?_c("b",[_vm._v(_vm._s(_vm._f("formatDate")(_vm.formDataToBeWatched[line.key])))]):_c("b",[_vm._v(_vm._s(_vm.formDataToBeWatched[line.key]))])]):[line.inputType==="text"?_c("div",{staticStyle:{display:"flex","align-items":"center","justify-content":"flex-end","text-align":"right"}},[line.inputType==="checkbox"?_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.formDataToBeWatched[line.key],expression:"formDataToBeWatched[line.key]"}],staticClass:"form-control",attrs:{disabled:line.hasDefault&&_vm.formDataToBeWatched[line.key],placeholder:line.placeholder,type:"checkbox"},domProps:{checked:Array.isArray(_vm.formDataToBeWatched[line.key])?_vm._i(_vm.formDataToBeWatched[line.key],null)>-1:_vm.formDataToBeWatched[line.key]},on:{change:function change($event){var $$a=_vm.formDataToBeWatched[line.key],$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.formDataToBeWatched,line.key,$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.formDataToBeWatched,line.key,$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.formDataToBeWatched,line.key,$$c);}}}}):line.inputType==="radio"?_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.formDataToBeWatched[line.key],expression:"formDataToBeWatched[line.key]"}],staticClass:"form-control",attrs:{disabled:line.hasDefault&&_vm.formDataToBeWatched[line.key],placeholder:line.placeholder,type:"radio"},domProps:{checked:_vm._q(_vm.formDataToBeWatched[line.key],null)},on:{change:function change($event){return _vm.$set(_vm.formDataToBeWatched,line.key,null);}}}):_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.formDataToBeWatched[line.key],expression:"formDataToBeWatched[line.key]"}],staticClass:"form-control",attrs:{disabled:line.hasDefault&&_vm.formDataToBeWatched[line.key],placeholder:line.placeholder,type:line.inputType},domProps:{value:_vm.formDataToBeWatched[line.key]},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.formDataToBeWatched,line.key,$event.target.value);}}}),_vm._v(" "),_c("div",{staticClass:"input-group-text input-group-text-right checkbox-container"},[_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.check_fields[line.key],expression:"check_fields[line.key]"}],staticClass:"checkbox-input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.check_fields[line.key])?_vm._i(_vm.check_fields[line.key],null)>-1:_vm.check_fields[line.key]},on:{change:[function($event){var $$a=_vm.check_fields[line.key],$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.check_fields,line.key,$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.check_fields,line.key,$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.check_fields,line.key,$$c);}},function($event){return _vm.handleCheckField($event,line.key);}]}}),_vm._v(" "),_c("i",{staticClass:"icofont-close-circled checkbox-icon-cancel"}),_vm._v(" "),_c("i",{staticClass:"icofont-check-circled checkbox-icon-success"})])]):line.inputType==="date"?_c("div",{staticStyle:{display:"flex","align-items":"center","justify-content":"flex-end","text-align":"right"}},[_c("div",{staticStyle:{width:"230px"}},[_c("date-input",{attrs:{id:line.key,value:_vm.formDataToBeWatched[line.key],background:"background-color: #ffffad",disabled:line.hasDefault&&_vm.formDataToBeWatched[line.key],color:"color: #000"},on:{input:_vm.formDataVars}})],1),_vm._v(" "),_c("div",{staticClass:"input-group-text input-group-text-right checkbox-container",staticStyle:{"margin-left":"2px","border-radius":".375rem"}},[_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.check_fields[line.key],expression:"check_fields[line.key]"}],staticClass:"checkbox-input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.check_fields[line.key])?_vm._i(_vm.check_fields[line.key],null)>-1:_vm.check_fields[line.key]},on:{change:[function($event){var $$a=_vm.check_fields[line.key],$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.check_fields,line.key,$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.check_fields,line.key,$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.check_fields,line.key,$$c);}},function($event){return _vm.handleCheckField($event,line.key);}]}}),_vm._v(" "),_c("i",{staticClass:"icofont-close-circled checkbox-icon-cancel"}),_vm._v(" "),_c("i",{staticClass:"icofont-check-circled checkbox-icon-success"})])]):_vm._e()]],2):line.type==="br"?_c("br",{key:i+"-"+index+"-"+lineIndex}):_vm._e()];})],2)]:item.type==="block_at_right"?[_c("div",{key:i+"-"+index,staticStyle:{display:"flex","justify-content":"end","align-items":"center",gap:"5px"}},[_vm._l(item.content,function(child,childIndex){return[child.type==="text"?_c("span",{key:i+"-"+childIndex,staticStyle:{"text-align":"right",display:"block"}},[_vm._v("\n                                            "+_vm._s(child.content)+"\n                                        ")]):child.type==="editable"?[!_vm.edit_mode?_c("span",{key:i+"-"+childIndex},[child.inputType==="date"?_c("b",[_vm._v(_vm._s(_vm._f("formatDate")(_vm.formDataToBeWatched[child.key])))]):_c("b",[_vm._v(_vm._s(_vm.formDataToBeWatched[child.key]))])]):[_c("div",{key:i+"-"+childIndex,staticStyle:{display:"inline-block"}},[child.inputType==="text"?_c("div",{staticStyle:{display:"flex","align-items":"center"}},[child.inputType==="checkbox"?_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.formDataToBeWatched[child.key],expression:"formDataToBeWatched[child.key]"}],staticClass:"form-control",attrs:{disabled:child.hasDefault&&_vm.formDataToBeWatched[child.key],placeholder:child.placeholder,type:"checkbox"},domProps:{checked:Array.isArray(_vm.formDataToBeWatched[child.key])?_vm._i(_vm.formDataToBeWatched[child.key],null)>-1:_vm.formDataToBeWatched[child.key]},on:{change:function change($event){var $$a=_vm.formDataToBeWatched[child.key],$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.formDataToBeWatched,child.key,$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.formDataToBeWatched,child.key,$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.formDataToBeWatched,child.key,$$c);}}}}):child.inputType==="radio"?_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.formDataToBeWatched[child.key],expression:"formDataToBeWatched[child.key]"}],staticClass:"form-control",attrs:{disabled:child.hasDefault&&_vm.formDataToBeWatched[child.key],placeholder:child.placeholder,type:"radio"},domProps:{checked:_vm._q(_vm.formDataToBeWatched[child.key],null)},on:{change:function change($event){return _vm.$set(_vm.formDataToBeWatched,child.key,null);}}}):_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.formDataToBeWatched[child.key],expression:"formDataToBeWatched[child.key]"}],staticClass:"form-control",attrs:{disabled:child.hasDefault&&_vm.formDataToBeWatched[child.key],placeholder:child.placeholder,type:child.inputType},domProps:{value:_vm.formDataToBeWatched[child.key]},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.formDataToBeWatched,child.key,$event.target.value);}}}),_vm._v(" "),_c("div",{staticClass:"input-group-text input-group-text-right checkbox-container"},[_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.check_fields[child.key],expression:"check_fields[child.key]"}],staticClass:"checkbox-input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.check_fields[child.key])?_vm._i(_vm.check_fields[child.key],null)>-1:_vm.check_fields[child.key]},on:{change:[function($event){var $$a=_vm.check_fields[child.key],$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.check_fields,child.key,$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.check_fields,child.key,$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.check_fields,child.key,$$c);}},function($event){return _vm.handleCheckField($event,child.key);}]}}),_vm._v(" "),_c("i",{staticClass:"icofont-close-circled checkbox-icon-cancel"}),_vm._v(" "),_c("i",{staticClass:"icofont-check-circled checkbox-icon-success"})])]):child.inputType==="number"?_c("div",{staticStyle:{display:"flex","align-items":"center"}},[child.inputType==="checkbox"?_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.formDataToBeWatched[child.key],expression:"formDataToBeWatched[child.key]"}],staticClass:"form-control",attrs:{disabled:child.hasDefault&&_vm.formDataToBeWatched[child.key],type:"checkbox"},domProps:{checked:Array.isArray(_vm.formDataToBeWatched[child.key])?_vm._i(_vm.formDataToBeWatched[child.key],null)>-1:_vm.formDataToBeWatched[child.key]},on:{change:function change($event){var $$a=_vm.formDataToBeWatched[child.key],$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.formDataToBeWatched,child.key,$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.formDataToBeWatched,child.key,$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.formDataToBeWatched,child.key,$$c);}}}}):child.inputType==="radio"?_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.formDataToBeWatched[child.key],expression:"formDataToBeWatched[child.key]"}],staticClass:"form-control",attrs:{disabled:child.hasDefault&&_vm.formDataToBeWatched[child.key],type:"radio"},domProps:{checked:_vm._q(_vm.formDataToBeWatched[child.key],null)},on:{change:function change($event){return _vm.$set(_vm.formDataToBeWatched,child.key,null);}}}):_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.formDataToBeWatched[child.key],expression:"formDataToBeWatched[child.key]"}],staticClass:"form-control",attrs:{disabled:child.hasDefault&&_vm.formDataToBeWatched[child.key],type:child.inputType},domProps:{value:_vm.formDataToBeWatched[child.key]},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.formDataToBeWatched,child.key,$event.target.value);}}}),_vm._v(" "),_c("div",{staticClass:"input-group-text input-group-text-right checkbox-container"},[_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.check_fields[child.key],expression:"check_fields[child.key]"}],staticClass:"checkbox-input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.check_fields[child.key])?_vm._i(_vm.check_fields[child.key],null)>-1:_vm.check_fields[child.key]},on:{change:[function($event){var $$a=_vm.check_fields[child.key],$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.check_fields,child.key,$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.check_fields,child.key,$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.check_fields,child.key,$$c);}},function($event){return _vm.handleCheckField($event,child.key);}]}}),_vm._v(" "),_c("i",{staticClass:"icofont-close-circled checkbox-icon-cancel"}),_vm._v(" "),_c("i",{staticClass:"icofont-check-circled checkbox-icon-success"})])]):child.inputType==="date"?_c("div",{staticStyle:{display:"flex","align-items":"center"}},[_c("div",{staticStyle:{width:"230px"}},[_c("date-input",{attrs:{id:child.key,value:_vm.formDataToBeWatched[child.key],background:"background-color: #ffffad",disabled:child.hasDefault&&_vm.formDataToBeWatched[child.key],color:"color: #000"},on:{input:_vm.formDataVars}})],1),_vm._v(" "),_c("div",{staticClass:"input-group-text input-group-text-right checkbox-container",staticStyle:{"margin-left":"2px","border-radius":".375rem"}},[_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.check_fields[child.key],expression:"check_fields[child.key]"}],staticClass:"checkbox-input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.check_fields[child.key])?_vm._i(_vm.check_fields[child.key],null)>-1:_vm.check_fields[child.key]},on:{change:[function($event){var $$a=_vm.check_fields[child.key],$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.check_fields,child.key,$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.check_fields,child.key,$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.check_fields,child.key,$$c);}},function($event){return _vm.handleCheckField($event,child.key);}]}}),_vm._v(" "),_c("i",{staticClass:"icofont-close-circled checkbox-icon-cancel"}),_vm._v(" "),_c("i",{staticClass:"icofont-check-circled checkbox-icon-success"})])]):child.inputType==="money"?_c("div",{staticStyle:{display:"flex","align-items":"center"}},[_c("currency-input2",{attrs:{id:child.key,value:_vm.formDataToBeWatched[child.key]},on:{input:_vm.formDataVars}}),_vm._v(" "),_c("div",{staticClass:"input-group-text input-group-text-right checkbox-container"},[_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.check_fields[child.key],expression:"check_fields[child.key]"}],staticClass:"checkbox-input",attrs:{type:"checkbox",disabled:child.hasDefault&&_vm.formDataToBeWatched[child.key]},domProps:{checked:Array.isArray(_vm.check_fields[child.key])?_vm._i(_vm.check_fields[child.key],null)>-1:_vm.check_fields[child.key]},on:{change:[function($event){var $$a=_vm.check_fields[child.key],$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.check_fields,child.key,$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.check_fields,child.key,$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.check_fields,child.key,$$c);}},function($event){return _vm.handleCheckField($event,child.key);}]}}),_vm._v(" "),_c("i",{staticClass:"icofont-close-circled checkbox-icon-cancel"}),_vm._v(" "),_c("i",{staticClass:"icofont-check-circled checkbox-icon-success"})])],1):child.inputType==="tel"?_c("div",{staticStyle:{display:"flex","align-items":"center"}},[_c("the-mask",{staticClass:"form-control",attrs:{mask:_vm.mask_telephone,type:"text",id:child.key},model:{value:_vm.formDataToBeWatched[child.key],callback:function callback($$v){_vm.$set(_vm.formDataToBeWatched,child.key,$$v);},expression:"formDataToBeWatched[child.key]"}}),_vm._v(" "),_c("div",{staticClass:"input-group-text input-group-text-right checkbox-container"},[_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.check_fields[child.key],expression:"check_fields[child.key]"}],staticClass:"checkbox-input",attrs:{type:"checkbox",disabled:child.hasDefault&&_vm.formDataToBeWatched[child.key]},domProps:{checked:Array.isArray(_vm.check_fields[child.key])?_vm._i(_vm.check_fields[child.key],null)>-1:_vm.check_fields[child.key]},on:{change:[function($event){var $$a=_vm.check_fields[child.key],$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.check_fields,child.key,$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.check_fields,child.key,$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.check_fields,child.key,$$c);}},function($event){return _vm.handleCheckField($event,child.key);}]}}),_vm._v(" "),_c("i",{staticClass:"icofont-close-circled checkbox-icon-cancel"}),_vm._v(" "),_c("i",{staticClass:"icofont-check-circled checkbox-icon-success"})])],1):child.inputType==="select"?_c("div",{staticStyle:{display:"flex","align-items":"center"}},[_c("select",{directives:[{name:"model",rawName:"v-model",value:_vm.formDataToBeWatched[child.key],expression:"formDataToBeWatched[child.key]"}],staticClass:"form-control",attrs:{id:child.key,disabled:child.hasDefault&&_vm.formDataToBeWatched[child.key]},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.formDataToBeWatched,child.key,$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",{attrs:{value:"",disabled:"",selected:""}},[_vm._v(_vm._s(child.placeholder)+"\n                                                            ")]),_vm._v(" "),_vm._l(child.options,function(option){return _c("option",{key:option,domProps:{value:option}},[_vm._v("\n                                                                "+_vm._s(option)+"\n                                                            ")]);})],2),_vm._v(" "),_c("div",{staticClass:"input-group-text input-group-text-right checkbox-container"},[_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.check_fields[child.key],expression:"check_fields[child.key]"}],staticClass:"checkbox-input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.check_fields[child.key])?_vm._i(_vm.check_fields[child.key],null)>-1:_vm.check_fields[child.key]},on:{change:[function($event){var $$a=_vm.check_fields[child.key],$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.check_fields,child.key,$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.check_fields,child.key,$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.check_fields,child.key,$$c);}},function($event){return _vm.handleCheckField($event,child.key);}]}}),_vm._v(" "),_c("i",{staticClass:"icofont-close-circled checkbox-icon-cancel"}),_vm._v(" "),_c("i",{staticClass:"icofont-check-circled checkbox-icon-success"})])]):_vm._e()])]]:_vm._e()];})],2)]:item.type==="blank"?[_c("div",{key:i+"-"+index,staticClass:"jump"})]:item.type==="list"?[!item.listType?_c("ul",{key:i+"ul"},_vm._l(item.list,function(el,k){return _c("li",{key:k,staticClass:"li-convention"},[_vm._v(_vm._s(el.content)+"\n                                    ")]);}),0):_c("ol",{key:i+"ol",style:{"list-style-type":item.listType}},_vm._l(item.list,function(el,k){return _c("li",{key:k},[_vm._v(_vm._s(el.content))]);}),0)]:item.type==="editablelist"?[_c("ul",{key:i+"ul"},_vm._l(item.list,function(el,k){return _c("li",{key:k,staticClass:"li-convention"},[_vm._l(el,function(txt,idtxt){return[txt.type!="editable"?_c("span",{key:idtxt,style:txt===null||txt===void 0?void 0:txt.style},[_vm._v("\n                                                "+_vm._s(txt.content)+"\n                                            ")]):[!_vm.edit_mode?_c("span",{key:idtxt},[_c("b",[_vm._v(_vm._s(_vm.formDataToBeWatched[txt.key]))])]):_c("div",{key:idtxt,staticStyle:{display:"inline-block"}},[txt.inputType==="text"?_c("div",{staticStyle:{display:"flex","align-items":"center"}},[txt.inputType==="checkbox"?_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.formDataToBeWatched[txt.key],expression:"formDataToBeWatched[txt.key]"}],staticClass:"form-control",attrs:{disabled:txt.hasDefault&&_vm.formDataToBeWatched[txt.key],placeholder:txt.placeholder,type:"checkbox"},domProps:{checked:Array.isArray(_vm.formDataToBeWatched[txt.key])?_vm._i(_vm.formDataToBeWatched[txt.key],null)>-1:_vm.formDataToBeWatched[txt.key]},on:{change:function change($event){var $$a=_vm.formDataToBeWatched[txt.key],$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.formDataToBeWatched,txt.key,$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.formDataToBeWatched,txt.key,$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.formDataToBeWatched,txt.key,$$c);}}}}):txt.inputType==="radio"?_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.formDataToBeWatched[txt.key],expression:"formDataToBeWatched[txt.key]"}],staticClass:"form-control",attrs:{disabled:txt.hasDefault&&_vm.formDataToBeWatched[txt.key],placeholder:txt.placeholder,type:"radio"},domProps:{checked:_vm._q(_vm.formDataToBeWatched[txt.key],null)},on:{change:function change($event){return _vm.$set(_vm.formDataToBeWatched,txt.key,null);}}}):_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.formDataToBeWatched[txt.key],expression:"formDataToBeWatched[txt.key]"}],staticClass:"form-control",attrs:{disabled:txt.hasDefault&&_vm.formDataToBeWatched[txt.key],placeholder:txt.placeholder,type:txt.inputType},domProps:{value:_vm.formDataToBeWatched[txt.key]},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.formDataToBeWatched,txt.key,$event.target.value);}}}),_vm._v(" "),_c("div",{staticClass:"input-group-text input-group-text-right checkbox-container"},[_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.check_fields[txt.key],expression:"check_fields[txt.key]"}],staticClass:"checkbox-input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.check_fields[txt.key])?_vm._i(_vm.check_fields[txt.key],null)>-1:_vm.check_fields[txt.key]},on:{change:[function($event){var $$a=_vm.check_fields[txt.key],$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.check_fields,txt.key,$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.check_fields,txt.key,$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.check_fields,txt.key,$$c);}},function($event){return _vm.handleCheckField($event,txt.key);}]}}),_vm._v(" "),_c("i",{staticClass:"icofont-close-circled checkbox-icon-cancel"}),_vm._v(" "),_c("i",{staticClass:"icofont-check-circled checkbox-icon-success"})])]):_vm._e()])]];})],2);}),0)]:item.type==="table"?[_c("table",{key:i+"-"+index,staticStyle:{width:"100%"}},[_c("tr",_vm._l(item.columns,function(col,idcol){return _c("td",{key:idcol,style:"width: "+col.width+"%"},[_c("div",{staticClass:"text-center"},[_c("div",{staticClass:"text-center d-flex","class":col.classe,staticStyle:{padding:"10px"}},[_c("b",{staticStyle:{"text-wrap":"nowrap"}},[_vm._v(_vm._s(col.content)+" ")]),_vm._v(" "),col.input?_c("span",{staticStyle:{display:"inline-block","margin-left":"15px"}},[!_vm.edit_mode?_c("span",{key:i+"-"+index},[_c("b",[_vm._v(_vm._s(_vm.formDataToBeWatched[col.key]))])]):_c("div",{style:{display:"flex","align-items":"center"}},[col.inputType==="checkbox"?_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.formDataToBeWatched[col.key],expression:"formDataToBeWatched[col.key]"}],staticClass:"form-control",staticStyle:{width:"100px"},attrs:{disabled:col.hasDefault&&_vm.formDataToBeWatched[col.key],placeholder:col.placeholder,type:"checkbox"},domProps:{checked:Array.isArray(_vm.formDataToBeWatched[col.key])?_vm._i(_vm.formDataToBeWatched[col.key],null)>-1:_vm.formDataToBeWatched[col.key]},on:{change:function change($event){var $$a=_vm.formDataToBeWatched[col.key],$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.formDataToBeWatched,col.key,$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.formDataToBeWatched,col.key,$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.formDataToBeWatched,col.key,$$c);}}}}):col.inputType==="radio"?_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.formDataToBeWatched[col.key],expression:"formDataToBeWatched[col.key]"}],staticClass:"form-control",staticStyle:{width:"100px"},attrs:{disabled:col.hasDefault&&_vm.formDataToBeWatched[col.key],placeholder:col.placeholder,type:"radio"},domProps:{checked:_vm._q(_vm.formDataToBeWatched[col.key],null)},on:{change:function change($event){return _vm.$set(_vm.formDataToBeWatched,col.key,null);}}}):_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.formDataToBeWatched[col.key],expression:"formDataToBeWatched[col.key]"}],staticClass:"form-control",staticStyle:{width:"100px"},attrs:{disabled:col.hasDefault&&_vm.formDataToBeWatched[col.key],placeholder:col.placeholder,type:col.inputType},domProps:{value:_vm.formDataToBeWatched[col.key]},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.formDataToBeWatched,col.key,$event.target.value);}}}),_vm._v(" "),_c("div",{staticClass:"input-group-text input-group-text-right checkbox-container"},[_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.check_fields[col.key],expression:"check_fields[col.key]"}],staticClass:"checkbox-input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.check_fields[col.key])?_vm._i(_vm.check_fields[col.key],null)>-1:_vm.check_fields[col.key]},on:{change:[function($event){var $$a=_vm.check_fields[col.key],$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.check_fields,col.key,$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.check_fields,col.key,$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.check_fields,col.key,$$c);}},function($event){return _vm.handleCheckField($event,col.key);}]}}),_vm._v(" "),_c("i",{staticClass:"icofont-close-circled checkbox-icon-cancel"}),_vm._v(" "),_c("i",{staticClass:"icofont-check-circled checkbox-icon-success"})])])]):_vm._e()]),_vm._v(" "),_c("br"),_vm._v("\n                                                    "+_vm._s(col.subcontent)+"\n                                            ")])]);}),0)])]:item.type==="editable"?[!_vm.edit_mode?_c("span",{key:i+"-"+index,style:item===null||item===void 0?void 0:item.style},[item.inputType==="date"?_c("b",[_vm._v(_vm._s(_vm._f("formatDate")(_vm.formDataToBeWatched[item.key])))]):item.inputType==="textarea"?_c("span",{domProps:{innerHTML:_vm._s(_vm.formDataToBeWatched[item.key])}}):item.inputType==="money"?_c("span",[_vm._v("\n                                        "+_vm._s(_vm.formDataToBeWatched[item.key]+" ("+_vm.convertirEnLettres(_vm.StringToNum(_vm.formDataToBeWatched[item.key]))+" )"))]):item.inputType==="component"?_c(item.componentName,{key:i+"-"+index,tag:"component",attrs:{onView:false,FormKey:item.key,default_value:_vm.formDataToBeWatched[item.key],isCheck:_vm.check_fields[item.key]},on:{onUpdateCheck:_vm.updateCheckAvisCLI,OnUpdate:_vm.updateAvisCLI}}):_c("b",[_vm._v(_vm._s(_vm.formDataToBeWatched[item.key]))])],1):[item.inputType==="textarea"?_c("div",{key:i+"-"+index},[_c("vue-editor",{attrs:{id:item.key},on:{"update-value":function updateValue($event){_vm.formDataToBeWatched[$event[0]]=$event[1];}},model:{value:_vm.formDataToBeWatched[item.key],callback:function callback($$v){_vm.$set(_vm.formDataToBeWatched,item.key,$$v);},expression:"formDataToBeWatched[item.key]"}}),_vm._v(" "),_c("small",[_vm._v("(NB : "+_vm._s(item.placeholder)+")")])],1):_c("div",{key:i+"-edit-"+index,style:_objectSpread({display:"inline-block"},item===null||item===void 0?void 0:item.style)},[item.inputType==="text"?_c("div",{style:{display:"flex","align-items":"center"}},[item.inputType==="checkbox"?_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.formDataToBeWatched[item.key],expression:"formDataToBeWatched[item.key]"}],staticClass:"form-control",attrs:{disabled:item.hasDefault&&_vm.formDataToBeWatched[item.key],placeholder:item.placeholder,type:"checkbox"},domProps:{checked:Array.isArray(_vm.formDataToBeWatched[item.key])?_vm._i(_vm.formDataToBeWatched[item.key],null)>-1:_vm.formDataToBeWatched[item.key]},on:{change:function change($event){var $$a=_vm.formDataToBeWatched[item.key],$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.formDataToBeWatched,item.key,$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.formDataToBeWatched,item.key,$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.formDataToBeWatched,item.key,$$c);}}}}):item.inputType==="radio"?_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.formDataToBeWatched[item.key],expression:"formDataToBeWatched[item.key]"}],staticClass:"form-control",attrs:{disabled:item.hasDefault&&_vm.formDataToBeWatched[item.key],placeholder:item.placeholder,type:"radio"},domProps:{checked:_vm._q(_vm.formDataToBeWatched[item.key],null)},on:{change:function change($event){return _vm.$set(_vm.formDataToBeWatched,item.key,null);}}}):_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.formDataToBeWatched[item.key],expression:"formDataToBeWatched[item.key]"}],staticClass:"form-control",attrs:{disabled:item.hasDefault&&_vm.formDataToBeWatched[item.key],placeholder:item.placeholder,type:item.inputType},domProps:{value:_vm.formDataToBeWatched[item.key]},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.formDataToBeWatched,item.key,$event.target.value);}}}),_vm._v(" "),_c("div",{staticClass:"input-group-text input-group-text-right checkbox-container"},[_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.check_fields[item.key],expression:"check_fields[item.key]"}],staticClass:"checkbox-input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.check_fields[item.key])?_vm._i(_vm.check_fields[item.key],null)>-1:_vm.check_fields[item.key]},on:{change:[function($event){var $$a=_vm.check_fields[item.key],$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.check_fields,item.key,$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.check_fields,item.key,$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.check_fields,item.key,$$c);}},function($event){return _vm.handleCheckField($event,item.key);}]}}),_vm._v(" "),_c("i",{staticClass:"icofont-close-circled checkbox-icon-cancel"}),_vm._v(" "),_c("i",{staticClass:"icofont-check-circled checkbox-icon-success"})])]):item.inputType==="number"?_c("div",{staticStyle:{display:"flex","align-items":"center"}},[item.inputType==="checkbox"?_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.formDataToBeWatched[item.key],expression:"formDataToBeWatched[item.key]"}],staticClass:"form-control",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.formDataToBeWatched[item.key])?_vm._i(_vm.formDataToBeWatched[item.key],null)>-1:_vm.formDataToBeWatched[item.key]},on:{change:function change($event){var $$a=_vm.formDataToBeWatched[item.key],$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.formDataToBeWatched,item.key,$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.formDataToBeWatched,item.key,$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.formDataToBeWatched,item.key,$$c);}}}}):item.inputType==="radio"?_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.formDataToBeWatched[item.key],expression:"formDataToBeWatched[item.key]"}],staticClass:"form-control",attrs:{type:"radio"},domProps:{checked:_vm._q(_vm.formDataToBeWatched[item.key],null)},on:{change:function change($event){return _vm.$set(_vm.formDataToBeWatched,item.key,null);}}}):_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.formDataToBeWatched[item.key],expression:"formDataToBeWatched[item.key]"}],staticClass:"form-control",attrs:{type:item.inputType},domProps:{value:_vm.formDataToBeWatched[item.key]},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.formDataToBeWatched,item.key,$event.target.value);}}}),_vm._v(" "),_c("div",{staticClass:"input-group-text input-group-text-right checkbox-container"},[_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.check_fields[item.key],expression:"check_fields[item.key]"}],staticClass:"checkbox-input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.check_fields[item.key])?_vm._i(_vm.check_fields[item.key],null)>-1:_vm.check_fields[item.key]},on:{change:[function($event){var $$a=_vm.check_fields[item.key],$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.check_fields,item.key,$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.check_fields,item.key,$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.check_fields,item.key,$$c);}},function($event){return _vm.handleCheckField($event,item.key);}]}}),_vm._v(" "),_c("i",{staticClass:"icofont-close-circled checkbox-icon-cancel"}),_vm._v(" "),_c("i",{staticClass:"icofont-check-circled checkbox-icon-success"})])]):item.inputType==="date"?_c("div",{staticStyle:{display:"flex","align-items":"center"}},[_c("div",{staticStyle:{width:"230px"}},[_c("date-input",{attrs:{id:item.key,value:_vm.formDataToBeWatched[item.key],background:"background-color: #ffffad",color:"color: #000"},on:{input:_vm.formDataVars}})],1),_vm._v(" "),_c("div",{staticClass:"input-group-text input-group-text-right checkbox-container",staticStyle:{"margin-left":"2px","border-radius":".375rem"}},[_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.check_fields[item.key],expression:"check_fields[item.key]"}],staticClass:"checkbox-input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.check_fields[item.key])?_vm._i(_vm.check_fields[item.key],null)>-1:_vm.check_fields[item.key]},on:{change:[function($event){var $$a=_vm.check_fields[item.key],$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.check_fields,item.key,$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.check_fields,item.key,$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.check_fields,item.key,$$c);}},function($event){return _vm.handleCheckField($event,item.key);}]}}),_vm._v(" "),_c("i",{staticClass:"icofont-close-circled checkbox-icon-cancel"}),_vm._v(" "),_c("i",{staticClass:"icofont-check-circled checkbox-icon-success"})])]):item.inputType==="money"?_c("div",{staticStyle:{display:"flex","align-items":"center"}},[_c("currency-input2",{attrs:{id:item.key,value:_vm.formDataToBeWatched[item.key]},on:{input:_vm.formDataVars}}),_vm._v(" "),_c("div",{staticClass:"input-group-text input-group-text-right checkbox-container"},[_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.check_fields[item.key],expression:"check_fields[item.key]"}],staticClass:"checkbox-input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.check_fields[item.key])?_vm._i(_vm.check_fields[item.key],null)>-1:_vm.check_fields[item.key]},on:{change:[function($event){var $$a=_vm.check_fields[item.key],$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.check_fields,item.key,$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.check_fields,item.key,$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.check_fields,item.key,$$c);}},function($event){return _vm.handleCheckField($event,item.key);}]}}),_vm._v(" "),_c("i",{staticClass:"icofont-close-circled checkbox-icon-cancel"}),_vm._v(" "),_c("i",{staticClass:"icofont-check-circled checkbox-icon-success"})])],1):item.inputType==="tel"?_c("div",{staticStyle:{display:"flex","align-items":"center"}},[_c("the-mask",{staticClass:"form-control",attrs:{mask:_vm.mask_telephone,type:"text",id:item.key},model:{value:_vm.formDataToBeWatched[item.key],callback:function callback($$v){_vm.$set(_vm.formDataToBeWatched,item.key,$$v);},expression:"formDataToBeWatched[item.key]"}}),_vm._v(" "),_c("div",{staticClass:"input-group-text input-group-text-right checkbox-container"},[_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.check_fields[item.key],expression:"check_fields[item.key]"}],staticClass:"checkbox-input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.check_fields[item.key])?_vm._i(_vm.check_fields[item.key],null)>-1:_vm.check_fields[item.key]},on:{change:[function($event){var $$a=_vm.check_fields[item.key],$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.check_fields,item.key,$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.check_fields,item.key,$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.check_fields,item.key,$$c);}},function($event){return _vm.handleCheckField($event,item.key);}]}}),_vm._v(" "),_c("i",{staticClass:"icofont-close-circled checkbox-icon-cancel"}),_vm._v(" "),_c("i",{staticClass:"icofont-check-circled checkbox-icon-success"})])],1):item.inputType==="select"?_c("div",{staticStyle:{display:"flex","align-items":"center"}},[_c("select",{directives:[{name:"model",rawName:"v-model",value:_vm.formDataToBeWatched[item.key],expression:"formDataToBeWatched[item.key]"}],staticClass:"form-control","class":{"text-gray":_vm.formDataToBeWatched[item.key]==""},attrs:{id:item.key},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.formDataToBeWatched,item.key,$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",{attrs:{value:"",disabled:"",selected:""}},[_vm._v(_vm._s(item.placeholder))]),_vm._v(" "),_vm._l(item.options,function(option){return _c("option",{key:option,domProps:{value:option}},[_vm._v("\n                                                    "+_vm._s(option)+"\n                                                ")]);})],2),_vm._v(" "),_c("div",{staticClass:"input-group-text input-group-text-right checkbox-container"},[_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.check_fields[item.key],expression:"check_fields[item.key]"}],staticClass:"checkbox-input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.check_fields[item.key])?_vm._i(_vm.check_fields[item.key],null)>-1:_vm.check_fields[item.key]},on:{change:[function($event){var $$a=_vm.check_fields[item.key],$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.check_fields,item.key,$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.check_fields,item.key,$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.check_fields,item.key,$$c);}},function($event){return _vm.handleCheckField($event,item.key);}]}}),_vm._v(" "),_c("i",{staticClass:"icofont-close-circled checkbox-icon-cancel"}),_vm._v(" "),_c("i",{staticClass:"icofont-check-circled checkbox-icon-success"})])]):item.inputType==="component"?_c(item.componentName,{key:i+"-"+index,tag:"component",attrs:{onView:true,FormKey:item.key,isCheck:_vm.check_fields[item.key],default_value:_vm.formDataToBeWatched[item.key]},on:{onUpdateCheck:_vm.updateCheckAvisCLI,OnUpdate:_vm.updateAvisCLI}}):_vm._e()],1)]]:item.type==="br"?[_c("br",{key:i+"-"+index})]:_vm._e()];})],2);})],2)]),_vm._v(" "),_c("div",{ref:"contentToPdf",staticStyle:{"text-align":"justify"},attrs:{id:"printable"}})]],2);};var staticRenderFns=[function(){var _vm=this,_c=_vm._self._c;return _c("div",{staticClass:"d-flex justify-content-center text-center align-items-center text-muted py-4"},[_c("div",[_c("span",{staticClass:"spinner-border spinner-border"}),_vm._v(" "),_c("h5",[_vm._v("\n                    Chargement des données en cours ... "),_c("br"),_vm._v("\n                    Ceci peut prendre un peu de temps\n                ")])])]);},function(){var _vm=this,_c=_vm._self._c;return _c("div",{staticClass:"d-flex justify-content-center text-center align-items-center text-muted py-4"},[_c("div",[_c("span",{staticClass:"spinner-border spinner-border"}),_vm._v(" "),_c("h5",[_vm._v("\n                                Chargement des données en cours ... "),_c("br"),_vm._v("\n                                Ceci peut prendre un peu de temps\n                            ")])])]);}];render._withStripped=true;

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/convention/Forms/AvisClient.vue?vue&type=template&id=792d8604&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/convention/Forms/AvisClient.vue?vue&type=template&id=792d8604&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("div", [_vm._m(0), _c("br"), _vm._v(" "), _c("div", {
    staticClass: "paragraph"
  }, [_c("table", {
    staticStyle: {
      transform: "translateX(-20px)"
    }
  }, [_c("tbody", [_c("tr", [_c("td", {
    staticClass: "actd"
  }, [_c("pre", {
    staticClass: "pre"
  }, [_vm._v("Je soussigné(e) \n\n…………………………………………………………………………………………………………………………………………….………, née le \n\n……….…………. à ……………………………………..……………………………………………………………………………………………")]), _vm._v(" "), _c("p", {
    staticStyle: {
      "font-size": "0.6rem"
    }
  }, [_vm._v("titulaire  "), [!_vm.onView ? _c("span", [_c("b", [_vm._v(_vm._s(_vm.default_value))])]) : _c("div", {
    staticStyle: {
      display: "inline-block"
    }
  }, [_c("div", {
    staticStyle: {
      display: "flex",
      "align-items": "center"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.default_value,
      expression: "default_value"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "type de piece d'identité"
    },
    domProps: {
      value: _vm.default_value
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.default_value = $event.target.value;
      }, function ($event) {
        return _vm.onUpdate(_vm.type_id);
      }]
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "input-group-text input-group-text-right checkbox-container"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.localCheck,
      expression: "localCheck"
    }],
    staticClass: "checkbox-input",
    attrs: {
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.localCheck) ? _vm._i(_vm.localCheck, null) > -1 : _vm.localCheck
    },
    on: {
      change: [function ($event) {
        var $$a = _vm.localCheck,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.localCheck = $$a.concat([$$v]));
          } else {
            $$i > -1 && (_vm.localCheck = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.localCheck = $$c;
        }
      }, function ($event) {
        return _vm.updateCheckAvisCLI(_vm.localCheck);
      }]
    }
  }), _vm._v(" "), _c("i", {
    staticClass: "icofont-close-circled checkbox-icon-cancel"
  }), _vm._v(" "), _c("i", {
    staticClass: "icofont-check-circled checkbox-icon-success"
  })])])])]], 2), _vm._v(" "), _vm._m(1)]), _vm._v(" "), _vm._m(2)]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "actd"
  }, [_c("pre", {
    staticClass: "pre"
  }, [_vm._v("Je soussigné(e) \n\n…………………………………………………………………………………………………………………………………………….………, née le \n\n……….…………. à ……………………………………..……………………………………………………………………………………………\n")]), _vm._v(" "), _c("p", {
    staticStyle: {
      "font-size": "0.6rem"
    }
  }, [_vm._v("titulaire  "), [!_vm.onView ? _c("span", [_c("b", [_vm._v(_vm._s(_vm.default_value))])]) : _c("div", {
    staticStyle: {
      display: "inline-block"
    }
  }, [_c("div", {
    staticStyle: {
      display: "flex",
      "align-items": "center"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.default_value,
      expression: "default_value"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "type de piece d'identité"
    },
    domProps: {
      value: _vm.default_value
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.default_value = $event.target.value;
      }, function ($event) {
        return _vm.onUpdate(_vm.default_value);
      }]
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "input-group-text input-group-text-right checkbox-container"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.localCheck,
      expression: "localCheck"
    }],
    staticClass: "checkbox-input",
    attrs: {
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.localCheck) ? _vm._i(_vm.localCheck, null) > -1 : _vm.localCheck
    },
    on: {
      change: [function ($event) {
        var $$a = _vm.localCheck,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.localCheck = $$a.concat([$$v]));
          } else {
            $$i > -1 && (_vm.localCheck = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.localCheck = $$c;
        }
      }, function ($event) {
        return _vm.updateCheckAvisCLI(_vm.localCheck);
      }]
    }
  }), _vm._v(" "), _c("i", {
    staticClass: "icofont-close-circled checkbox-icon-cancel"
  }), _vm._v(" "), _c("i", {
    staticClass: "icofont-check-circled checkbox-icon-success"
  })])])])]], 2), _vm._v(" "), _vm._m(3)]), _vm._v(" "), _vm._m(4)])])]), _vm._v(" "), _vm._m(5)])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticStyle: {
      padding: "15px",
      "text-transform": "uppercase",
      border: "1px solid #2d5489",
      background: "#d0cece",
      "text-align": "center"
    }
  }, [_c("b", [_vm._v(" AVIS DU CLIENT")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("pre", {
    staticClass: "pre"
  }, [_vm._v(" \n    N° ………………………………….………………………………………………………………………….………………………………………\n\ndu …………………….…………….………………………………….……………………………………… \nreconnais avoir pris connaissance des conditions \ngénérales de mon financement, telles que précisées dans le présent acte.\n\nPar ma signature et l’apposition de la mention « lu et approuvé », je donne\n"), _c("b", [_vm._v("mon accord")]), _vm._v("  pour le financement et m’engage solennellement à signer les\ncontrats et tout document utile afin de finaliser l’opération\n                                    ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "actd"
  }, [_c("pre", {
    staticClass: "pre"
  }, [_vm._v("OBSERVATIONS\n\n\n…………………………………………………………………………………………………………………………\n\n…………………………………………………………………………………………………………………………\n\n…………………………………………………………………………………………………………………………\n\n…………………………………………………………………………………………………………………………\n\n…………………………………………………………………………………………………………………………\n\nNOM ET PRENOMS               SIGNATURE\n                                        ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("pre", {
    staticClass: "pre"
  }, [_vm._v(" \n    N° ………………………………….………………………………………………………………………….……………………………………… \n\ndu …………………….…………….………………………………….……………………………………… \nreconnais avoir pris connaissance des conditions \ngénérales de mon financement, telles que précisées dans le présent acte.\n\nPar ma signature et l’apposition de la mention « lu et approuvé », je donne\n"), _c("b", [_vm._v("mon approbation")]), _vm._v("  \n                                    ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "actd"
  }, [_c("pre", {
    staticClass: "pre"
  }, [_vm._v("OBSERVATIONS\n\n…………………………………………………………………………………………………………………………\n\n…………………………………………………………………………………………………………………………\n\n…………………………………………………………………………………………………………………………\n\n…………………………………………………………………………………………………………………………\n\n…………………………………………………………………………………………………………………………\n\n\nNOM ET PRENOMS               SIGNATURE\n                                        ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("p", {
    staticClass: "fw-bold",
    staticStyle: {
      "text-decoration": "underline"
    }
  }, [_vm._v("\n                                NB :\n                            ")]), _vm._v(" "), _c("ul", {
    staticStyle: {
      "font-size": "small"
    }
  }, [_c("ol", [_c("em", [_vm._v("\n                                        1.      Tous les frais de formalisation des garanties seront à votre charge\n                                    ")])]), _vm._v(" "), _c("ol", [_c("em", [_vm._v("\n                                    2.      En cas d’annulation du prêt après acceptation de ladite notification, tous les frais engagés seront à votre charge. Les frais de dossiers et prime de risque seront également dus.\n                                    ")])])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/convention/ConventionCentral.vue?vue&type=style&index=0&id=330ec840&lang=css&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/convention/ConventionCentral.vue?vue&type=style&index=0&id=330ec840&lang=css&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.li-default[data-v-330ec840]{\r\n    list-style : 'disc';\r\n    margin:auto;\r\n    padding : auto\n}\n.form-control[data-v-330ec840] {\r\n    display: initial;\r\n    width: initial;\n}\n.paragraph[data-v-330ec840] {\r\n    margin: 20px 0px;\r\n    position: relative;\r\n    padding: 5px;\n}\ninput[data-v-330ec840],\r\nselect[data-v-330ec840] {\r\n    margin: 2px;\r\n    border-color: #34495e;\r\n    color: black;\r\n    font-size: 13px;\r\n    height: 34px;\r\n    font-weight: bold;\r\n    background-color: #ffffad;\r\n    margin-right: 0px;\r\n    min-width: 45px;\r\n    border-top-right-radius: 0;\r\n    border-bottom-right-radius: 0;\r\n    border-right: none;\n}\n.input-group-append[data-v-330ec840] {\r\n    margin: 0 2px;\n}\n.input-group-text-right[data-v-330ec840] {\r\n    border-radius: 0 .375rem .375rem 0;\r\n    margin-left: 0px;\r\n    cursor: pointer;\n}\n.input-group-text-left[data-v-330ec840] {\r\n    border-radius: .375rem 0 0 .375rem;\n}\n.li-convention[data-v-330ec840] {\r\n    list-style-type: disc;\r\n    margin: 0;\r\n    padding: 0;\r\n    margin-left: 20px;\n}\n.input-group-text[data-v-330ec840] {\r\n    font-size: 13px;\r\n    line-height: 1.5;\r\n    height: 34px;\r\n    padding: .375rem .75rem;\r\n    border: 1px solid #34495e;\r\n    min-width: 45px;\r\n    text-align: center;\r\n    justify-content: center;\r\n    /*margin: 2px;*/\r\n    background-color: #ffffad;\r\n    color: black;\n}\r\n\r\n\r\n\r\n/* checkbox */\n.checkbox-container .checkbox-input[data-v-330ec840] {\r\n    position: absolute;\r\n    opacity: 0;\r\n    cursor: pointer;\r\n    height: 80%;\r\n    width: 80%;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 1;\n}\n.checkbox-container[data-v-330ec840] {\r\n    display: block;\r\n    position: relative;\r\n    cursor: pointer;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n            user-select: none;\n}\n.checkbox-container .checkbox-icon-cancel[data-v-330ec840] {\r\n    position: relative;\r\n    top: 0;\r\n    left: 0;\r\n    height: 50px;\r\n    width: 50px;\r\n    transition: all 0.3s;\r\n    font-size: 1.5em;\r\n    color: red;\n}\n.checkbox-container .checkbox-icon-success[data-v-330ec840] {\r\n    position: relative;\r\n    top: 0;\r\n    left: 0;\r\n    height: 50px;\r\n    width: 50px;\r\n    transition: all 0.3s;\r\n    font-size: 1.5em;\r\n    color: green;\n}\r\n\r\n/*.checkbox-container .checkbox-icon-cancel:hover {\r\n    transform: scale(1.1);\r\n}\r\n\r\n.checkbox-container .checkbox-icon-success:hover {\r\n    transform: scale(1.1);\r\n}*/\n.checkbox-container .checkbox-icon-success[data-v-330ec840] {\r\n    display: none;\n}\n.checkbox-container .checkbox-input:checked~.checkbox-icon-cancel[data-v-330ec840] {\r\n    display: none;\n}\n.checkbox-container .checkbox-input:checked~.checkbox-icon-success[data-v-330ec840] {\r\n    display: contents;\n}\r\n\r\n\r\n/*.valid-section:hover {\r\n    background-color: #fafafa;\r\n  }\r\n\r\n  .valid-section:hover + .paragraph {\r\n    background-color: #fafafa;\r\n  }*/\n.valid-section[data-v-330ec840] {\r\n    pointer-events: auto;\r\n    top: 50%;\r\n    transform: translateY(-50%);\n}\r\n\r\n/*this is the new approach*/\n.paragraph[data-v-330ec840]:has(.valid-section:hover) {\r\n    /*you may replace this with an explicit className, e.g. :has(.child1)*/\r\n    background: #3498db6f;\n}\n.onAutoSave[data-v-330ec840]{\r\n    cursor: wait !important;\n}\n.onAutoSave > span[data-v-330ec840]{\r\n    pointer-events: none;\r\n    opacity: 0.6;\r\n    cursor: wait !important;\n}\n.text-gray[data-v-330ec840]{\r\n    color: gray;\n}\r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/convention/Forms/AvisClient.vue?vue&type=style&index=0&id=792d8604&lang=css&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/convention/Forms/AvisClient.vue?vue&type=style&index=0&id=792d8604&lang=css&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.actd[data-v-792d8604]{\r\n    border-color: #212529;\r\n    border-style: solid;\r\n    border-width: 1px;\r\n    padding: 10px;\n}\n.pre[data-v-792d8604]{\r\n    font-size: 0.6rem\n}\n.form-control[data-v-792d8604] {\r\n    display: initial;\r\n    width: initial;\n}\n.paragraph[data-v-792d8604] {\r\n    margin: 20px 0px;\r\n    position: relative;\r\n    padding: 5px;\n}\ninput[data-v-792d8604],\r\nselect[data-v-792d8604] {\r\n    margin: 2px;\r\n    border-color: #34495e;\r\n    color: black;\r\n    font-size: 13px;\r\n    height: 34px;\r\n    font-weight: bold;\r\n    background-color: #ffffad;\r\n    margin-right: 0px;\r\n    min-width: 45px;\r\n    border-top-right-radius: 0;\r\n    border-bottom-right-radius: 0;\r\n    border-right: none;\n}\n.input-group-append[data-v-792d8604] {\r\n    margin: 0 2px;\n}\n.input-group-text-right[data-v-792d8604] {\r\n    border-radius: 0 .375rem .375rem 0;\r\n    margin-left: 0px;\r\n    cursor: pointer;\n}\n.input-group-text-left[data-v-792d8604] {\r\n    border-radius: .375rem 0 0 .375rem;\n}\n.li-convention[data-v-792d8604] {\r\n    list-style-type: disc;\r\n    margin: 0;\r\n    padding: 0;\r\n    margin-left: 20px;\n}\n.input-group-text[data-v-792d8604] {\r\n    font-size: 13px;\r\n    line-height: 1.5;\r\n    height: 34px;\r\n    padding: .375rem .75rem;\r\n    border: 1px solid #34495e;\r\n    min-width: 45px;\r\n    text-align: center;\r\n    justify-content: center;\r\n    /*margin: 2px;*/\r\n    background-color: #ffffad;\r\n    color: black;\n}\r\n\r\n\r\n\r\n/* checkbox */\n.checkbox-container .checkbox-input[data-v-792d8604] {\r\n    position: absolute;\r\n    opacity: 0;\r\n    cursor: pointer;\r\n    height: 80%;\r\n    width: 80%;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 1;\n}\n.checkbox-container[data-v-792d8604] {\r\n    display: block;\r\n    position: relative;\r\n    cursor: pointer;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n            user-select: none;\n}\n.checkbox-container .checkbox-icon-cancel[data-v-792d8604] {\r\n    position: relative;\r\n    top: 0;\r\n    left: 0;\r\n    height: 50px;\r\n    width: 50px;\r\n    transition: all 0.3s;\r\n    font-size: 1.5em;\r\n    color: red;\n}\n.checkbox-container .checkbox-icon-success[data-v-792d8604] {\r\n    position: relative;\r\n    top: 0;\r\n    left: 0;\r\n    height: 50px;\r\n    width: 50px;\r\n    transition: all 0.3s;\r\n    font-size: 1.5em;\r\n    color: green;\n}\r\n\r\n/*.checkbox-container .checkbox-icon-cancel:hover {\r\n    transform: scale(1.1);\r\n}\r\n\r\n.checkbox-container .checkbox-icon-success:hover {\r\n    transform: scale(1.1);\r\n}*/\n.checkbox-container .checkbox-icon-success[data-v-792d8604] {\r\n    display: none;\n}\n.checkbox-container .checkbox-input:checked~.checkbox-icon-cancel[data-v-792d8604] {\r\n    display: none;\n}\n.checkbox-container .checkbox-input:checked~.checkbox-icon-success[data-v-792d8604] {\r\n    display: contents;\n}\r\n\r\n\r\n/*.valid-section:hover {\r\n    background-color: #fafafa;\r\n  }\r\n\r\n  .valid-section:hover + .paragraph {\r\n    background-color: #fafafa;\r\n  }*/\n.valid-section[data-v-792d8604] {\r\n    pointer-events: auto;\r\n    top: 50%;\r\n    transform: translateY(-50%);\n}\r\n\r\n/*this is the new approach*/\n.paragraph[data-v-792d8604]:has(.valid-section:hover) {\r\n    /*you may replace this with an explicit className, e.g. :has(.child1)*/\r\n    background: #3498db6f;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/convention/ConventionCentral.vue?vue&type=style&index=0&id=330ec840&lang=css&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/convention/ConventionCentral.vue?vue&type=style&index=0&id=330ec840&lang=css&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ConventionCentral_vue_vue_type_style_index_0_id_330ec840_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ConventionCentral.vue?vue&type=style&index=0&id=330ec840&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/convention/ConventionCentral.vue?vue&type=style&index=0&id=330ec840&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ConventionCentral_vue_vue_type_style_index_0_id_330ec840_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ConventionCentral_vue_vue_type_style_index_0_id_330ec840_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/convention/Forms/AvisClient.vue?vue&type=style&index=0&id=792d8604&lang=css&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/convention/Forms/AvisClient.vue?vue&type=style&index=0&id=792d8604&lang=css&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AvisClient_vue_vue_type_style_index_0_id_792d8604_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AvisClient.vue?vue&type=style&index=0&id=792d8604&lang=css&scoped=true */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/convention/Forms/AvisClient.vue?vue&type=style&index=0&id=792d8604&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AvisClient_vue_vue_type_style_index_0_id_792d8604_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AvisClient_vue_vue_type_style_index_0_id_792d8604_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/offview/microfinance/cofina/convention/ConventionCentral.vue":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/offview/microfinance/cofina/convention/ConventionCentral.vue ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ConventionCentral_vue_vue_type_template_id_330ec840_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConventionCentral.vue?vue&type=template&id=330ec840&scoped=true */ "./resources/js/components/offview/microfinance/cofina/convention/ConventionCentral.vue?vue&type=template&id=330ec840&scoped=true");
/* harmony import */ var _ConventionCentral_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConventionCentral.vue?vue&type=script&lang=js */ "./resources/js/components/offview/microfinance/cofina/convention/ConventionCentral.vue?vue&type=script&lang=js");
/* harmony import */ var _ConventionCentral_vue_vue_type_style_index_0_id_330ec840_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ConventionCentral.vue?vue&type=style&index=0&id=330ec840&lang=css&scoped=true */ "./resources/js/components/offview/microfinance/cofina/convention/ConventionCentral.vue?vue&type=style&index=0&id=330ec840&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ConventionCentral_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ConventionCentral_vue_vue_type_template_id_330ec840_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _ConventionCentral_vue_vue_type_template_id_330ec840_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "330ec840",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/offview/microfinance/cofina/convention/ConventionCentral.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/offview/microfinance/cofina/convention/ConventionCentral.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/offview/microfinance/cofina/convention/ConventionCentral.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ConventionCentral_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ConventionCentral.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/convention/ConventionCentral.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ConventionCentral_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/offview/microfinance/cofina/convention/ConventionCentral.vue?vue&type=style&index=0&id=330ec840&lang=css&scoped=true":
/*!******************************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/microfinance/cofina/convention/ConventionCentral.vue?vue&type=style&index=0&id=330ec840&lang=css&scoped=true ***!
  \******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ConventionCentral_vue_vue_type_style_index_0_id_330ec840_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ConventionCentral.vue?vue&type=style&index=0&id=330ec840&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/convention/ConventionCentral.vue?vue&type=style&index=0&id=330ec840&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/offview/microfinance/cofina/convention/ConventionCentral.vue?vue&type=template&id=330ec840&scoped=true":
/*!****************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/microfinance/cofina/convention/ConventionCentral.vue?vue&type=template&id=330ec840&scoped=true ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ConventionCentral_vue_vue_type_template_id_330ec840_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ConventionCentral_vue_vue_type_template_id_330ec840_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ConventionCentral_vue_vue_type_template_id_330ec840_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ConventionCentral.vue?vue&type=template&id=330ec840&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/convention/ConventionCentral.vue?vue&type=template&id=330ec840&scoped=true");


/***/ }),

/***/ "./resources/js/components/offview/microfinance/cofina/convention/Forms/AvisClient.vue":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/offview/microfinance/cofina/convention/Forms/AvisClient.vue ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AvisClient_vue_vue_type_template_id_792d8604_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AvisClient.vue?vue&type=template&id=792d8604&scoped=true */ "./resources/js/components/offview/microfinance/cofina/convention/Forms/AvisClient.vue?vue&type=template&id=792d8604&scoped=true");
/* harmony import */ var _AvisClient_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AvisClient.vue?vue&type=script&lang=js */ "./resources/js/components/offview/microfinance/cofina/convention/Forms/AvisClient.vue?vue&type=script&lang=js");
/* harmony import */ var _AvisClient_vue_vue_type_style_index_0_id_792d8604_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AvisClient.vue?vue&type=style&index=0&id=792d8604&lang=css&scoped=true */ "./resources/js/components/offview/microfinance/cofina/convention/Forms/AvisClient.vue?vue&type=style&index=0&id=792d8604&lang=css&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AvisClient_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _AvisClient_vue_vue_type_template_id_792d8604_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _AvisClient_vue_vue_type_template_id_792d8604_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "792d8604",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/offview/microfinance/cofina/convention/Forms/AvisClient.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/offview/microfinance/cofina/convention/Forms/AvisClient.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/offview/microfinance/cofina/convention/Forms/AvisClient.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AvisClient_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AvisClient.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/convention/Forms/AvisClient.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AvisClient_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/offview/microfinance/cofina/convention/Forms/AvisClient.vue?vue&type=style&index=0&id=792d8604&lang=css&scoped=true":
/*!*****************************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/microfinance/cofina/convention/Forms/AvisClient.vue?vue&type=style&index=0&id=792d8604&lang=css&scoped=true ***!
  \*****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AvisClient_vue_vue_type_style_index_0_id_792d8604_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AvisClient.vue?vue&type=style&index=0&id=792d8604&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/convention/Forms/AvisClient.vue?vue&type=style&index=0&id=792d8604&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/components/offview/microfinance/cofina/convention/Forms/AvisClient.vue?vue&type=template&id=792d8604&scoped=true":
/*!***************************************************************************************************************************************!*\
  !*** ./resources/js/components/offview/microfinance/cofina/convention/Forms/AvisClient.vue?vue&type=template&id=792d8604&scoped=true ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AvisClient_vue_vue_type_template_id_792d8604_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AvisClient_vue_vue_type_template_id_792d8604_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AvisClient_vue_vue_type_template_id_792d8604_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AvisClient.vue?vue&type=template&id=792d8604&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/offview/microfinance/cofina/convention/Forms/AvisClient.vue?vue&type=template&id=792d8604&scoped=true");


/***/ }),

/***/ "./resources/js/components/offview/microfinance/cofina/convention/Utils.js":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/offview/microfinance/cofina/convention/Utils.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GetDefaultValue: () => (/* binding */ GetDefaultValue),
/* harmony export */   getDefValBill: () => (/* binding */ getDefValBill),
/* harmony export */   verifyContractObject: () => (/* binding */ verifyContractObject)
/* harmony export */ });
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
// retrouver les valeurs par défaults en fonction de la clé rechercher

function GetDefaultValue(dossier, key, tb_arrays) {
  var _countryWords$entite, _dossier$cred2, _countryWords$entite2, _countryWords$entite3, _ref, _dossier$cred_pub_tb_, _dossier$cred_pub_tb_2, _dossier$cred3, _dossier$cred_pub_tb_3, _dossier$cred1$frais$, _dossier$cred4, _dossier$cred_pub_tb_4, _dossier$cred5, _dossier$cred_pub_tb_5, _dossier$decision_log, _dossier$cred0$dir_ge, _dossier$cred6;
  var extraParams = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  // console.log("key au debut", key)
  var cred0 = tb_arrays[0];
  var cred1 = tb_arrays[1];
  var keys = ["caf_recorded_file", "doss_central_file_recorder"];
  var entite = '';
  var result = '';
  var _caracteristiqueDuPre = caracteristiqueDuPret(dossier, cred0, cred1),
    montantDef = _caracteristiqueDuPre.montantDef,
    dureeDef = _caracteristiqueDuPre.dureeDef,
    periodicite = _caracteristiqueDuPre.periodicite;
  // get entity
  for (var _i = 0, _keys = keys; _i < _keys.length; _i++) {
    var _key = _keys[_i];
    var value = dossier[_key];
    if (value !== null && value !== undefined) {
      if (value.filiale !== null && value.filiale !== undefined) {
        entite = value.filiale;
      }
    }
  }
  switch (key) {
    case 'filiale':
      return (_countryWords$entite = countryWords[entite]) === null || _countryWords$entite === void 0 ? void 0 : _countryWords$entite.pays;
    case 'entite':
      return entite;
    case 'nomcli':
      keys.forEach(function (key) {
        var value = dossier[key];
        if (value !== null && _typeof(value) === 'object') {
          var _value$nomcli;
          result = (_value$nomcli = value.nomcli) !== null && _value$nomcli !== void 0 ? _value$nomcli : value.client.nomcli;
        }
      });
      if (cred0 !== null) {
        var _dossier$cred;
        result = ((_dossier$cred = dossier[cred0]) === null || _dossier$cred === void 0 ? void 0 : _dossier$cred.denomination_client) || result;
      }
      return result;
    case 'numero_compte_courant':
      return (_dossier$cred2 = dossier[cred0]) === null || _dossier$cred2 === void 0 ? void 0 : _dossier$cred2.numero_compte_courant;
    case 'nationalite':
      return (_countryWords$entite2 = countryWords[entite]) === null || _countryWords$entite2 === void 0 ? void 0 : _countryWords$entite2.nationalite;
    case 'capitale':
      return (_countryWords$entite3 = countryWords[entite]) === null || _countryWords$entite3 === void 0 ? void 0 : _countryWords$entite3.capitale;
    case "now":
      return new Date().toISOString().slice(0, 10);
    case "montant":
      return montantDef !== null && montantDef !== void 0 ? montantDef : '';
    case "duree_credit":
      return dureeDef !== null && dureeDef !== void 0 ? dureeDef : '';
    case "type_de_concours":
      return dossier === null || dossier === void 0 ? void 0 : dossier.applied_templ_name;
    case "periodicite":
      return periodicite !== null && periodicite !== void 0 ? periodicite : '';
    case "taux_interet_ht":
      return "1.5";
    case "tva":
      return "18";
    case "frais_dossier":
      return (_ref = (_dossier$cred_pub_tb_ = dossier === null || dossier === void 0 || (_dossier$cred_pub_tb_2 = dossier["cred_pub_tb_19000"]) === null || _dossier$cred_pub_tb_2 === void 0 ? void 0 : _dossier$cred_pub_tb_2.frais_dossier) !== null && _dossier$cred_pub_tb_ !== void 0 ? _dossier$cred_pub_tb_ : dossier === null || dossier === void 0 || (_dossier$cred3 = dossier[cred1]) === null || _dossier$cred3 === void 0 || (_dossier$cred3 = _dossier$cred3.frais) === null || _dossier$cred3 === void 0 || (_dossier$cred3 = _dossier$cred3[0]) === null || _dossier$cred3 === void 0 ? void 0 : _dossier$cred3.montant_frais) !== null && _ref !== void 0 ? _ref : "";
    case "pourcent_montant_accorde_frais_dossier":
      return dossier === null || dossier === void 0 || (_dossier$cred_pub_tb_3 = dossier["cred_pub_tb_19000"]) === null || _dossier$cred_pub_tb_3 === void 0 ? void 0 : _dossier$cred_pub_tb_3.pourcent_montant_accorde_frais_dossier;
    case "prime_risque":
      return (_dossier$cred1$frais$ = dossier === null || dossier === void 0 || (_dossier$cred4 = dossier[cred1]) === null || _dossier$cred4 === void 0 || (_dossier$cred4 = _dossier$cred4['frais'][2]) === null || _dossier$cred4 === void 0 ? void 0 : _dossier$cred4['montant_frais']) !== null && _dossier$cred1$frais$ !== void 0 ? _dossier$cred1$frais$ : dossier === null || dossier === void 0 || (_dossier$cred_pub_tb_4 = dossier["cred_pub_tb_19000"]) === null || _dossier$cred_pub_tb_4 === void 0 ? void 0 : _dossier$cred_pub_tb_4.prime_risque;
    case "pourcent_montant_accorde_prime_risque":
      return dossier === null || dossier === void 0 || (_dossier$cred5 = dossier[cred1]) === null || _dossier$cred5 === void 0 || (_dossier$cred5 = _dossier$cred5['frais'][2]) === null || _dossier$cred5 === void 0 ? void 0 : _dossier$cred5['taux_modififie'];
    case "montant_echeance":
      return Math.ceil(dossier === null || dossier === void 0 || (_dossier$cred_pub_tb_5 = dossier["cred_pub_tb_12001"]) === null || _dossier$cred_pub_tb_5 === void 0 || (_dossier$cred_pub_tb_5 = _dossier$cred_pub_tb_5['echeance']) === null || _dossier$cred_pub_tb_5 === void 0 ? void 0 : _dossier$cred_pub_tb_5['echeance']);
    case "nom_caf":
      return dossier === null || dossier === void 0 ? void 0 : dossier.monteur_doss;
    case "nom_ca":
      return dossier === null || dossier === void 0 || (_dossier$decision_log = dossier.decision_logs.find(function (d) {
        return d.giver_role_sigle == 'CA';
      })) === null || _dossier$decision_log === void 0 ? void 0 : _dossier$decision_log.giver_name;
    case "nom_dg":
      return (_dossier$cred0$dir_ge = (_dossier$cred6 = dossier[cred0]) === null || _dossier$cred6 === void 0 || (_dossier$cred6 = _dossier$cred6.dir_gen_filiale) === null || _dossier$cred6 === void 0 ? void 0 : _dossier$cred6.name) !== null && _dossier$cred0$dir_ge !== void 0 ? _dossier$cred0$dir_ge : '';
    case "empty":
      return "";
    default:
      // console.log({ inSwitchKey: key })

      return populateDefaultKeys(key, extraParams);
  }
}
function verifyContractObject(dossier_credit, selectedConvention, tb_keys) {
  var _tb_keys$;
  // console.log({dossier_credit});
  var cred_pub_tb_4 = (_tb_keys$ = tb_keys[4]) !== null && _tb_keys$ !== void 0 ? _tb_keys$ : null;
  // Verifie si le dossier de credit a un l'objet du contrat.
  // Exemple pour un contract de caution on verifie si le dossier a des cautions

  var res = [];
  if (["Contrat de prêt", "Billet à ordre"].includes(selectedConvention)) {
    var _Object$keys;
    var contractor = null;
    var clients = getClient(dossier_credit);
    if (((_Object$keys = Object.keys(clients)) === null || _Object$keys === void 0 ? void 0 : _Object$keys.length) > 0) {
      contractor = clients;
    }
    res.push(contractor);
    // localStorage.setItem("contractor", JSON.stringify(contractor));
    return res;
  } else if (selectedConvention == "Contrat de cautionnement") {
    var cautions_kyc = [];
    var cautionsPreApp = [];
    var cautionsT4 = [];
    cautions_kyc = getKycCaution(dossier_credit === null || dossier_credit === void 0 ? void 0 : dossier_credit.kwc_checklist);
    cautionsPreApp = getPrerAppCaution(dossier_credit === null || dossier_credit === void 0 ? void 0 : dossier_credit.n_1_checklist);
    // console.log({cred_pub_tb_4})
    if (![undefined, null, ''].includes(cred_pub_tb_4)) {
      cautionsT4 = getT4Caution(dossier_credit[cred_pub_tb_4]);
    }
    // console.log({cautions_kyc, cautionsPreApp, cautionsT4})
    // Merge les cautions distinctement
    res = mergeListsDistinctly(cautions_kyc, cautionsPreApp, cautionsT4, 'nom_prenoms');
    // console.log({res});
  }
  return res;
}
function getDefValBill(dossier_credit, key, tb_arrays) {
  var cred0 = tb_arrays[0];
  var client = getClient(dossier_credit);
  // console.log({client})
  if (client) {
    if (key == "date_naissance_client") {
      var _client$date_naissanc;
      return (_client$date_naissanc = client === null || client === void 0 ? void 0 : client.date_naissance) !== null && _client$date_naissanc !== void 0 ? _client$date_naissanc : '';
    }
    if (key == "lieu_naissance_client") {
      var _client$lieu_naissanc;
      return (_client$lieu_naissanc = client === null || client === void 0 ? void 0 : client.lieu_naissance) !== null && _client$lieu_naissanc !== void 0 ? _client$lieu_naissanc : '';
    }
    if (["nom_client", "nomcli"].includes(key)) {
      if (![undefined, null, ''].includes(client === null || client === void 0 ? void 0 : client['nom_prenom'])) {
        return client === null || client === void 0 ? void 0 : client['nom_prenom'];
      } else if (![undefined, null, ''].includes(client === null || client === void 0 ? void 0 : client.nom_prenoms)) {
        return client === null || client === void 0 ? void 0 : client.nom_prenoms;
      } else if (![undefined, null, ''].includes(client === null || client === void 0 ? void 0 : client.denomination_client)) {
        return client === null || client === void 0 ? void 0 : client.denomination_client;
      } else {
        var _dossier_credit$cred;
        return dossier_credit === null || dossier_credit === void 0 || (_dossier_credit$cred = dossier_credit[cred0]) === null || _dossier_credit$cred === void 0 ? void 0 : _dossier_credit$cred.denomination_client;
      }
      // return client?.['nom_prenom'] ??  ?? client?.denomination_client ?? '';
    }
    if (key == "profession_client") {
      var _client$fonction;
      return (_client$fonction = client === null || client === void 0 ? void 0 : client.fonction) !== null && _client$fonction !== void 0 ? _client$fonction : '';
    }
    if (key == "type_piece_identite") {
      var _client$nature_piece, _client$nature_piece2;
      return ["Carte nationale d'identité", "CNI", "cni"].includes(client === null || client === void 0 || (_client$nature_piece = client.nature_piece) === null || _client$nature_piece === void 0 ? void 0 : _client$nature_piece.trim()) ? "de la carte d'identité N° " : ["Carte consulaire"].includes(client === null || client === void 0 ? void 0 : client.nature_piece) ? "de la carte consulaire N°" : ["passeport", "passport"].includes(client === null || client === void 0 || (_client$nature_piece2 = client.nature_piece) === null || _client$nature_piece2 === void 0 ? void 0 : _client$nature_piece2.toLowerCase()) ? "du passeport N°" : "";
    }
    if (key == "num_piece_identite") {
      var _client$numero_piece;
      return (_client$numero_piece = client === null || client === void 0 ? void 0 : client.numero_piece) !== null && _client$numero_piece !== void 0 ? _client$numero_piece : '';
    }
    if (key == "titre_client") {
      var _ref2;
      return (_ref2 = ["Masculin", "M", "Masc"]) !== null && _ref2 !== void 0 && _ref2.includes(client === null || client === void 0 ? void 0 : client.sexe) ? "Monsieur" : ["Feminin", "F", "Féminin"].includes(client === null || client === void 0 ? void 0 : client.sexe) ? "Madame" : "";
    }
    if (key == "num_compte") {
      var _dossier_credit$cred2, _dossier_credit$cred3;
      return (_dossier_credit$cred2 = dossier_credit === null || dossier_credit === void 0 || (_dossier_credit$cred3 = dossier_credit[cred0]) === null || _dossier_credit$cred3 === void 0 ? void 0 : _dossier_credit$cred3.numero_compte_courant) !== null && _dossier_credit$cred2 !== void 0 ? _dossier_credit$cred2 : '';
    }
  }
  return '';
}
function getKycCaution(kyc_checklist) {
  var res = [];
  if (![undefined, null, ''].includes(kyc_checklist)) {
    var checker_one = kyc_checklist === null || kyc_checklist === void 0 ? void 0 : kyc_checklist.checker_one;
    if (![undefined, null, ''].includes(checker_one)) {
      var entries = checker_one === null || checker_one === void 0 ? void 0 : checker_one.entries;
      if (![undefined, null, ''].includes(entries)) {
        var cautions = entries.cautions;
        if (![undefined, null, ''].includes(cautions)) {
          var caution_added = cautions.caution_added;
          if (![undefined, null, ''].includes(caution_added)) {
            res = caution_added.map(function (el) {
              var _el$nom_prenoms, _el$date_naissance, _el$lieu_naissance, _el$numero_piece_iden;
              return {
                nom_prenoms: (_el$nom_prenoms = el === null || el === void 0 ? void 0 : el.nom_prenoms) !== null && _el$nom_prenoms !== void 0 ? _el$nom_prenoms : '',
                date_naissance: (_el$date_naissance = el === null || el === void 0 ? void 0 : el.date_naissance) !== null && _el$date_naissance !== void 0 ? _el$date_naissance : '',
                lieu_naissance: (_el$lieu_naissance = el === null || el === void 0 ? void 0 : el.lieu_naissance) !== null && _el$lieu_naissance !== void 0 ? _el$lieu_naissance : '',
                numero_piece: (_el$numero_piece_iden = el === null || el === void 0 ? void 0 : el.numero_piece_identite) !== null && _el$numero_piece_iden !== void 0 ? _el$numero_piece_iden : '',
                nature_piece: el === null || el === void 0 ? void 0 : el.nature_piece
              };
            });
          }
        }
      }
    }
  }
  return res;
}
function getPrerAppCaution(n_1_checklist) {
  var res = [];
  if (![undefined, null, ''].includes(n_1_checklist)) {
    var checker_one = n_1_checklist === null || n_1_checklist === void 0 ? void 0 : n_1_checklist.checker_one;
    if (![undefined, null, ''].includes(checker_one)) {
      var entries = checker_one === null || checker_one === void 0 ? void 0 : checker_one.entries;
      if (![undefined, null, ''].includes(entries)) {
        var Verification_caution_solidaire = entries === null || entries === void 0 ? void 0 : entries.Verification_caution_solidaire;
        if (![undefined, null, ''].includes(Verification_caution_solidaire)) {
          var cautions = Verification_caution_solidaire.caution_added;
          if (![undefined, null, ''].includes(cautions)) {
            res = cautions.map(function (el) {
              var _el$nom_prenoms2, _el$date_naissance2, _el$lieu_naissance2, _el$numero_piece_iden2;
              return {
                nom_prenoms: (_el$nom_prenoms2 = el === null || el === void 0 ? void 0 : el.nom_prenoms) !== null && _el$nom_prenoms2 !== void 0 ? _el$nom_prenoms2 : '',
                date_naissance: (_el$date_naissance2 = el === null || el === void 0 ? void 0 : el.date_naissance) !== null && _el$date_naissance2 !== void 0 ? _el$date_naissance2 : '',
                lieu_naissance: (_el$lieu_naissance2 = el === null || el === void 0 ? void 0 : el.lieu_naissance) !== null && _el$lieu_naissance2 !== void 0 ? _el$lieu_naissance2 : '',
                numero_piece: (_el$numero_piece_iden2 = el === null || el === void 0 ? void 0 : el.numero_piece_identite) !== null && _el$numero_piece_iden2 !== void 0 ? _el$numero_piece_iden2 : '',
                nature_piece: el === null || el === void 0 ? void 0 : el.nature_piece
              };
            });
          }
        }
      }
    }
  }
  return res;
}
function getClient(dossier_credit) {
  var n_1_checklist = dossier_credit === null || dossier_credit === void 0 ? void 0 : dossier_credit.n_1_checklist;
  var res = {};
  if (![undefined, null, ''].includes(n_1_checklist)) {
    var checker_one = n_1_checklist === null || n_1_checklist === void 0 ? void 0 : n_1_checklist.checker_one;
    if (![undefined, null, ''].includes(checker_one)) {
      var entries = checker_one === null || checker_one === void 0 ? void 0 : checker_one.entries;
      if (![undefined, null, ''].includes(entries)) {
        var verification_cni = entries === null || entries === void 0 ? void 0 : entries.verification_cni;
        var responsable_entreprise = entries === null || entries === void 0 ? void 0 : entries.responsable_entreprise;
        if (![undefined, null, ''].includes(verification_cni)) {
          res = _objectSpread({}, verification_cni);
          if (!res['nom_prenom']) {
            var _res;
            res['nom_prenoms'] = (_res = res) === null || _res === void 0 ? void 0 : _res['nom_prenom'];
          }
        } else {
          var dirigeant = responsable_entreprise.find(function (e) {
            return e.fonction == "Directeur Géneral";
          });
          // console.log({ dirigeant })
          res = ![undefined, null, ''].includes(dirigeant) ? _objectSpread({}, dirigeant) : {};
          if (!res['nom_prenom']) {
            var _res2;
            res['nom_prenoms'] = (_res2 = res) === null || _res2 === void 0 ? void 0 : _res2['nom_prenom'];
          }
        }
      }
    }
  }
  return res;
}
function getT4Caution(tb4) {
  var res = [];
  if (![undefined, null, ''].includes(tb4)) {
    var caution_solidaire = tb4 === null || tb4 === void 0 ? void 0 : tb4.cautionnement_solidaires;
    res = caution_solidaire.map(function (el) {
      var _el$nom_prenoms3, _el$date_naissance3, _el$lieu_naissance3, _el$numero_piece_iden3, _el$nature_piece;
      return {
        nom_prenoms: (_el$nom_prenoms3 = el === null || el === void 0 ? void 0 : el.nom_prenoms) !== null && _el$nom_prenoms3 !== void 0 ? _el$nom_prenoms3 : '',
        date_naissance: (_el$date_naissance3 = el === null || el === void 0 ? void 0 : el.date_naissance) !== null && _el$date_naissance3 !== void 0 ? _el$date_naissance3 : '',
        lieu_naissance: (_el$lieu_naissance3 = el === null || el === void 0 ? void 0 : el.lieu_naissance) !== null && _el$lieu_naissance3 !== void 0 ? _el$lieu_naissance3 : '',
        numero_piece: (_el$numero_piece_iden3 = el === null || el === void 0 ? void 0 : el.numero_piece_identite) !== null && _el$numero_piece_iden3 !== void 0 ? _el$numero_piece_iden3 : '',
        nature_piece: (_el$nature_piece = el === null || el === void 0 ? void 0 : el.nature_piece) !== null && _el$nature_piece !== void 0 ? _el$nature_piece : ''
      };
    });
  }
  return res.filter(function (el) {
    return !isEmpty(el);
  }) || res;
}
function isEmpty(obj) {
  if (!obj || _typeof(obj) !== 'object') return true;
  return Object.values(obj).every(function (value) {
    return value === undefined || value === null || value === '';
  });
}
function populateDefaultKeys(key, _ref3) {
  var contractor = _ref3.contractor,
    entityInfos = _ref3.entityInfos;
  if (["nom_caution", "emprunteur_name"].includes(key)) {
    var _ref4;
    return (_ref4 = (contractor === null || contractor === void 0 ? void 0 : contractor.nom_prenoms) || (contractor === null || contractor === void 0 ? void 0 : contractor.nom_prenom)) !== null && _ref4 !== void 0 ? _ref4 : '';
  } else if (["date_naissance_caution", "emprunter_birth_date", "date_naissance_client"].includes(key)) {
    var _contractor$date_nais;
    return (_contractor$date_nais = contractor === null || contractor === void 0 ? void 0 : contractor.date_naissance) !== null && _contractor$date_nais !== void 0 ? _contractor$date_nais : '';
  } else if (key == "lieu_naissance_caution") {
    var _contractor$lieu_nais;
    return (_contractor$lieu_nais = contractor === null || contractor === void 0 ? void 0 : contractor.lieu_naissance) !== null && _contractor$lieu_nais !== void 0 ? _contractor$lieu_nais : '';
  } else if (key == "type_piece_caution") {
    var _contractor$nature_pi;
    return ["Carte nationale d'identité", "CNI", "cni"].includes(contractor === null || contractor === void 0 ? void 0 : contractor.nature_piece) ? "de la carte d'identité N° " : ["de la carte consulaire N°"].includes(contractor === null || contractor === void 0 ? void 0 : contractor.nature_piece) ? "du passeport N°" : ["passeport", "passport"].includes(contractor === null || contractor === void 0 || (_contractor$nature_pi = contractor.nature_piece) === null || _contractor$nature_pi === void 0 ? void 0 : _contractor$nature_pi.toLowerCase()) ? "du passeport N°" : "";
  } else if (["cni", "numero_piece_caution"].includes(key === null || key === void 0 ? void 0 : key.toLowerCase())) {
    var _contractor$numero_pi;
    return (_contractor$numero_pi = contractor === null || contractor === void 0 ? void 0 : contractor.numero_piece) !== null && _contractor$numero_pi !== void 0 ? _contractor$numero_pi : "";
  } else if (key == "activite") {
    var _contractor$fonction;
    return (_contractor$fonction = contractor === null || contractor === void 0 ? void 0 : contractor.fonction) !== null && _contractor$fonction !== void 0 ? _contractor$fonction : '';
  } else if (["telephone_emprunteur"].includes(key)) {
    var _contractor$numero_te;
    return (_contractor$numero_te = contractor === null || contractor === void 0 ? void 0 : contractor.numero_tel) !== null && _contractor$numero_te !== void 0 ? _contractor$numero_te : "";
  } else if (["capital_social", "filiale_capital"].includes(key)) {
    var _entityInfos$capital_;
    return (_entityInfos$capital_ = entityInfos === null || entityInfos === void 0 ? void 0 : entityInfos.capital_social) !== null && _entityInfos$capital_ !== void 0 ? _entityInfos$capital_ : '';
  } else if (["code_postal", "code"].includes(key)) {
    var _entityInfos$code_pos;
    return (_entityInfos$code_pos = entityInfos === null || entityInfos === void 0 ? void 0 : entityInfos.code_postal) !== null && _entityInfos$code_pos !== void 0 ? _entityInfos$code_pos : '';
  } else if (["siege_social", "siege"].includes(key)) {
    var _entityInfos$siege_so;
    return (_entityInfos$siege_so = entityInfos === null || entityInfos === void 0 ? void 0 : entityInfos.siege_social) !== null && _entityInfos$siege_so !== void 0 ? _entityInfos$siege_so : '';
  } else if (["telephone", "filiale_telephone"].includes(key)) {
    var _entityInfos$telephon;
    return (_entityInfos$telephon = entityInfos === null || entityInfos === void 0 ? void 0 : entityInfos.telephone) !== null && _entityInfos$telephon !== void 0 ? _entityInfos$telephon : '';
  } else if (["numero_rccm", "immatriculation"].includes(key)) {
    var _entityInfos$rccm;
    return (_entityInfos$rccm = entityInfos === null || entityInfos === void 0 ? void 0 : entityInfos.rccm) !== null && _entityInfos$rccm !== void 0 ? _entityInfos$rccm : '';
  } else {
    return '';
  }
}
function mergeListsDistinctly() {
  var list1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var list2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var list3 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var key = arguments.length > 3 ? arguments[3] : undefined;
  var mergedMap = new Map();

  // Fonction pour compter le nombre de clés non vides dans un objet
  function countFilledKeys(obj) {
    return Object.values(obj).filter(function (value) {
      return value !== null && value !== undefined && value !== "";
    }).length;
  }

  // Fonction pour ajouter ou fusionner les objets dans le Map
  function addToMap(list) {
    list.forEach(function (item) {
      if (item[key] !== undefined) {
        var existingItem = mergedMap.get(item[key]);
        if (!existingItem) {
          // Si aucun objet avec cette clé, on l'ajoute
          mergedMap.set(item[key], item);
        } else {
          // Comparer le nombre de clés remplies
          if (countFilledKeys(item) > countFilledKeys(existingItem)) {
            mergedMap.set(item[key], item);
          }
        }
      }
    });
  }

  // Ajouter les objets des trois listes
  addToMap(list1);
  addToMap(list2);
  addToMap(list3);

  // Retourner la liste fusionnée
  return Array.from(mergedMap.values());
}
function caracteristiqueDuPret(dossier_credit, cred0, cred1) {
  var _dossier_credit$cred4;
  var caract_inter_pret = dossier_credit === null || dossier_credit === void 0 ? void 0 : dossier_credit.caract_inter_pret;
  var latestAmount = 0;
  var latetstDuree = 0;
  var periodicite = "";
  var risque = dossier_credit === null || dossier_credit === void 0 || (_dossier_credit$cred4 = dossier_credit[cred1]) === null || _dossier_credit$cred4 === void 0 || (_dossier_credit$cred4 = _dossier_credit$cred4.frais) === null || _dossier_credit$cred4 === void 0 || (_dossier_credit$cred4 = _dossier_credit$cred4[2]) === null || _dossier_credit$cred4 === void 0 ? void 0 : _dossier_credit$cred4.montant_frais;
  if (caract_inter_pret != null) {
    var _dossier_credit$final, _latestObj$mensualite;
    var finalOutcomeUserRole = dossier_credit === null || dossier_credit === void 0 || (_dossier_credit$final = dossier_credit.final_outcome) === null || _dossier_credit$final === void 0 ? void 0 : _dossier_credit$final.giver_role_sigle;
    // console.log({finalOutcomeUserRole:finalOutcomeUserRole})
    var latestObj = caract_inter_pret.find(function (el) {
      return el.role_sigle == finalOutcomeUserRole;
    });
    latestAmount = latestObj === null || latestObj === void 0 ? void 0 : latestObj['montant_pret_' + finalOutcomeUserRole];
    latetstDuree = latestObj === null || latestObj === void 0 ? void 0 : latestObj.duree_pret;
    periodicite = (_latestObj$mensualite = latestObj === null || latestObj === void 0 ? void 0 : latestObj.mensualite_credit) !== null && _latestObj$mensualite !== void 0 ? _latestObj$mensualite : '';
    // console.log({latestAmountBefor:latestAmount})
    if (!latestAmount) {
      var _caract_inter_pret$at, _caract_inter_pret$at2, _caract_inter_pret$at3, _caract_inter_pret$at4;
      finalOutcomeUserRole = (_caract_inter_pret$at = caract_inter_pret.at(-1)) === null || _caract_inter_pret$at === void 0 ? void 0 : _caract_inter_pret$at.role_sigle;
      latestAmount = (_caract_inter_pret$at2 = caract_inter_pret.at(-1)) === null || _caract_inter_pret$at2 === void 0 ? void 0 : _caract_inter_pret$at2['montant_pret_' + finalOutcomeUserRole];
      latetstDuree = (_caract_inter_pret$at3 = caract_inter_pret.at(-1)) === null || _caract_inter_pret$at3 === void 0 ? void 0 : _caract_inter_pret$at3['duree_pret'];
      periodicite = (_caract_inter_pret$at4 = caract_inter_pret.at(-1)) === null || _caract_inter_pret$at4 === void 0 ? void 0 : _caract_inter_pret$at4['mensualite_credit'];
    }
    if ((dossier_credit === null || dossier_credit === void 0 ? void 0 : dossier_credit.notif_accord_credit) == true) {
      var _dossier_credit$cred_, _dossier_credit$cred_2, _dossier_credit$cred_3, _dossier_credit$cred_4, _dossier_credit$cred_5, _dossier_credit$cred_6;
      var montant = (_dossier_credit$cred_ = dossier_credit === null || dossier_credit === void 0 || (_dossier_credit$cred_2 = dossier_credit.cred_pub_tb_19000) === null || _dossier_credit$cred_2 === void 0 ? void 0 : _dossier_credit$cred_2.montant) !== null && _dossier_credit$cred_ !== void 0 ? _dossier_credit$cred_ : 0;
      latestAmount = this.convertInt(montant);
      latetstDuree = (_dossier_credit$cred_3 = dossier_credit === null || dossier_credit === void 0 || (_dossier_credit$cred_4 = dossier_credit.cred_pub_tb_19000) === null || _dossier_credit$cred_4 === void 0 ? void 0 : _dossier_credit$cred_4.duree_credit) !== null && _dossier_credit$cred_3 !== void 0 ? _dossier_credit$cred_3 : 0;
      risque = (_dossier_credit$cred_5 = dossier_credit === null || dossier_credit === void 0 || (_dossier_credit$cred_6 = dossier_credit.cred_pub_tb_19000) === null || _dossier_credit$cred_6 === void 0 ? void 0 : _dossier_credit$cred_6.primes_risques) !== null && _dossier_credit$cred_5 !== void 0 ? _dossier_credit$cred_5 : 0;
    }
  }
  return {
    montantDef: latestAmount,
    dureeDef: latetstDuree,
    periodicite: periodicite
  };
}
var countryWords = {
  "CFN BF": {
    "pays": "BURKINA FASO",
    "nationalite": "Burkinabé",
    "capitale": "de Ouagadougou"
  },
  "CFN CIV": {
    "pays": "CÔTE D'IVOIRE",
    "nationalite": "Ivoirienne",
    "capitale": "d'Abidjan"
  },
  "CFN CG": {
    "pays": "CONGO",
    "nationalite": "Congolaise",
    "capitale": "de Brazaville"
  },
  "CFN GB": {
    "pays": "GABON",
    "nationalite": "Gabonaise",
    "capitale": "de Libreville"
  },
  "CFN GN": {
    "pays": "GUINEE",
    "nationalite": "Guinéenne",
    "capitale": "de Conakry"
  },
  "CFN ML": {
    "pays": "MALI",
    "nationalite": "Malienne",
    "capitale": "de Bamako"
  },
  "CFN SN": {
    "pays": "SENEGAL",
    "nationalite": "Sénégalaise",
    "capitale": "de Dakar"
  },
  "CFN TG": {
    "pays": "TOGO",
    "nationalite": "Togolaise",
    "capitale": "de Lomé"
  },
  "FINL": {
    "pays": "CÔTE D'IVOIRE",
    "nationalite": "Ivoirienne",
    "capitale": "d'Abidjan"
  }
};

// les défaults
//montant_approuve
//agenceBusinessUnit
// applied_templ_name - type gabarit
// type_credit
// type_demande

// -------------INFO CLIENT
//caf_recorded --+ client --+
// nomcli
// matcli
// phonecli
// monteur doss

// INFO PRET (cred_pub_tb_19000)
// type_de_concours / montant / duree_credit (en mois) /
// periodicite_remboursement (mensuelle ... ) / taux_interet / frais_dossier
// primes_risques /

// cred_pub_tb_3001
// premiere_echeance / derniere_echeance

/***/ }),

/***/ "./resources/js/components/offview/microfinance/cofina/convention/cofina lazy recursive ^\\.\\/.*\\.js$":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/offview/microfinance/cofina/convention/cofina/ lazy ^\.\/.*\.js$ namespace object ***!
  \*******************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./BILLET-CONV.js": [
		"./resources/js/components/offview/microfinance/cofina/convention/cofina/BILLET-CONV.js",
		"resources_js_components_offview_microfinance_cofina_convention_cofina_BILLET-CONV_js"
	],
	"./CAUTIONNEMENT-CONV.js": [
		"./resources/js/components/offview/microfinance/cofina/convention/cofina/CAUTIONNEMENT-CONV.js",
		"resources_js_components_offview_microfinance_cofina_convention_cofina_CAUTIONNEMENT-CONV_js"
	],
	"./CONTRAT-PRET-CONV.js": [
		"./resources/js/components/offview/microfinance/cofina/convention/cofina/CONTRAT-PRET-CONV.js",
		"resources_js_components_offview_microfinance_cofina_convention_cofina_CONTRAT-PRET-CONV_js"
	],
	"./Convention-synallagmatique.js": [
		"./resources/js/components/offview/microfinance/cofina/convention/cofina/Convention-synallagmatique.js",
		"resources_js_components_offview_microfinance_cofina_convention_cofina_Convention-synallagmatique_js"
	],
	"./Convention-transfert.js": [
		"./resources/js/components/offview/microfinance/cofina/convention/cofina/Convention-transfert.js",
		"resources_js_components_offview_microfinance_cofina_convention_cofina_Convention-transfert_js"
	],
	"./DEPOSSESSION-CONV.js": [
		"./resources/js/components/offview/microfinance/cofina/convention/cofina/DEPOSSESSION-CONV.js",
		"resources_js_components_offview_microfinance_cofina_convention_cofina_DEPOSSESSION-CONV_js"
	],
	"./DOMICILIATION-CONV.js": [
		"./resources/js/components/offview/microfinance/cofina/convention/cofina/DOMICILIATION-CONV.js",
		"resources_js_components_offview_microfinance_cofina_convention_cofina_DOMICILIATION-CONV_js"
	],
	"./NANTISSEMENT-CONV.js": [
		"./resources/js/components/offview/microfinance/cofina/convention/cofina/NANTISSEMENT-CONV.js",
		"resources_js_components_offview_microfinance_cofina_convention_cofina_NANTISSEMENT-CONV_js"
	],
	"./NOTIFICATION-CONV.js": [
		"./resources/js/components/offview/microfinance/cofina/convention/cofina/NOTIFICATION-CONV.js",
		"resources_js_components_offview_microfinance_cofina_convention_cofina_NOTIFICATION-CONV_js"
	],
	"./PRET-CONV-Entreprise-individuelle.js": [
		"./resources/js/components/offview/microfinance/cofina/convention/cofina/PRET-CONV-Entreprise-individuelle.js",
		"resources_js_components_offview_microfinance_cofina_convention_cofina_PRET-CONV-Entreprise-in-97336c"
	],
	"./PRET-CONV.js": [
		"./resources/js/components/offview/microfinance/cofina/convention/cofina/PRET-CONV.js",
		"resources_js_components_offview_microfinance_cofina_convention_cofina_PRET-CONV_js"
	],
	"./PROMESSE-CONV.js": [
		"./resources/js/components/offview/microfinance/cofina/convention/cofina/PROMESSE-CONV.js",
		"resources_js_components_offview_microfinance_cofina_convention_cofina_PROMESSE-CONV_js"
	],
	"./Pret-conv-restructuration.js": [
		"./resources/js/components/offview/microfinance/cofina/convention/cofina/Pret-conv-restructuration.js",
		"resources_js_components_offview_microfinance_cofina_convention_cofina_Pret-conv-restructuration_js"
	],
	"./REMISE-CONV.js": [
		"./resources/js/components/offview/microfinance/cofina/convention/cofina/REMISE-CONV.js",
		"resources_js_components_offview_microfinance_cofina_convention_cofina_REMISE-CONV_js"
	],
	"./TEST-CONV.js": [
		"./resources/js/components/offview/microfinance/cofina/convention/cofina/TEST-CONV.js",
		"resources_js_components_offview_microfinance_cofina_convention_cofina_TEST-CONV_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./resources/js/components/offview/microfinance/cofina/convention/cofina lazy recursive ^\\.\\/.*\\.js$";
module.exports = webpackAsyncContext;

/***/ })

}]);